---
title: Add Dynamic Content Using Liquid
excerpt: >-
  This guide provides an overview of the Liquid template language, focusing on
  features relevant for personalizing messages in Engage+.
deprecated: false
hidden: false
metadata:
  robots: index
---
# Introduction to Liquid

Liquid is a templating language used to add dynamic content. It lets you personalize your messages based on user data, making your communications more relevant and engaging. For instance, you can use liquid language to define the date format according to the customer's locale, send product recommendations based on the customer's interest, etc.

<Note title="Note">
By default, the Liquid language is not enabled. You need to raise a Jira ticket to the sustenance team and enable the LiquidFeature config.
</Note>

> 🚧 Important
>
> * Liquid expressions are supported across **SMS**, **Push notification**, **In app**, and **Email** channels.
> * Make sure that all tags contain data. Inconsistency in the tags will result in a validation error.
>
> ![aa11e868f7d8a5dc5898aba974d6132968c19f54076573c5f926b36e522ec871 image](https://files.readme.io/aa11e868f7d8a5dc5898aba974d6132968c19f54076573c5f926b36e522ec871-image.png)

# Basic Syntax

Liquid uses two types of markup:

| Syntax Type     | Markup  | Description                      |
| :-------------- | :------ | :------------------------------- |
| Output          | `{{ }}` | Used to output dynamic content.  |
| Logic & Control | `{% %}` | Used for logic and control flow. |

# Variables

Variables allow you to insert dynamic content into your templates. Common variables might include:

* `{{first_name}}`: The customer's first name
* `{{customer_email}}`: The customer's email address
* `{{customer_mobile}}`: The customer's mobile number

## Use cases

**1. Brands Want to Send Messages About Coupon Expiry Linked to an Event**

```liquid
Hey {{first_name}},

{% if event_name == 'Freedom Fiesta' %}
Don't miss out on the {{ event_name }}!
{% endif %}

{% if voucher_expiry_date == '31 July 2025' %}
Your coupon is valid until {{ voucher_expiry_date }}.
{% endif %}

{% if valid_days_from_create == 7 %}
This coupon is valid for {{ valid_days_from_create }} days from the day it was issued.
{% endif %}
```

**Example output:**

```
Hey Riya,

Don't miss out on the Freedom Fiesta!

Your coupon is valid until 31 July 2025.

This coupon is valid for 7 days from the day it was issued.
```

<br />

**2. A brand wants to inform users about the benefits of their current loyalty tier or encourage them to upgrade for added perks like free home delivery.**

```liquid
Hey {{first_name}},

{% if slab_name == "Platinum" %}
As a Platinum member, you get free home delivery!
{% endif %}

{% if slab_name == "Gold" %}
Upgrade to Platinum to enjoy free home delivery.
{% endif %}
```

**Example output:**

When `{{first_name}}` = "Riya" and `{{slab_name}}` = "Platinum":

```

Hey Riya,
As a Platinum member, you get free home delivery!

When `{{first_name}}` = "Riya" and `{{slab_name}}` = "Gold":

Upgrade to Platinum to enjoy free home delivery.
```

<br />

**3. A brand wants to remind users that their loyalty points are expiring by the end of the month and highlight the actual value they’ll lose if not redeemed**.

```liquid
{% if expiring_points_value == 150 %}
Hi {{first_name}},  
You have ₹150 worth of points expiring by the end of this month.  
Redeem them now on your next purchase!
{% else %}
Hi {{ first_name }},  
You have no points expiring this month. Keep shopping and earning rewards!
{% endif %}
```

**Example output:**

* When `{{first_name}}` = "Riya" and `{{expiring_points_value = 150}}` :

```
Hi Riya,\
You have ₹150 worth of points expiring by the end of this month.
Redeem them now on your next purchase!
```

<br />

* When `{{first_name}}` = "Riya" and `{{expiring_points_value = 0}}` :

<br />

```
Hi Riya,\
You have no points expiring this month. Keep shopping and earning rewards!
```

<br />

**4. A brand wants to send marketing or service messages in the language each user prefers  like English, Hindi, Tamil, etc.**

```liquid
{% if extended_field.preferred_language == "English" %}
Hi {{first_name}}, check out our new arrivals and enjoy special offers this week!

{% elsif extended_field.preferred_language == "Hindi" %}
नमस्ते {{first_name}}, हमारे नए प्रोडक्ट्स देखें और इस सप्ताह के विशेष ऑफ़र का लाभ उठाएं!

{% elsif extended_field.preferred_language == "Tamil" %}
வணக்கம் {{first_name}}, எங்கள் புதிய வரவுகளைப் பாருங்கள் மற்றும் சிறப்பு சலுகைகளை அனுபவிக்கவும்!

{% else %}
Hi {{first_name}}, check out our latest offers!
{% endif %}
```

**Example output 1**:

```
Hi Riya, check out our new arrivals and enjoy special offers this week!
```

**Example output 2**:

```
नमस्ते Riya, हमारे नए प्रोडक्ट्स देखें और इस सप्ताह के विशेष ऑफ़र का लाभ उठाएं!
```

**Example output 3**:

```
வணக்கம் Riya, எங்கள் புதிய வரவுகளைப் பாருங்கள் மற்றும் சிறப்பு சலுகைகளை அனுபவிக்கவும்!
```

**Example output 4**:

```
Hi Riya, check out our latest offers!
```

<br />

**5. A brand wants to send country-specific promotions, delivery updates, or legal disclaimers based on where the customer lives.**

```liquid
Hi {{first_name}},

{% if extended_field.country_of_residence == "India" %}
Great news! Free delivery is now available across India on all orders above ₹499.

{% elsif extended_field.country_of_residence == "UAE" %}
Enjoy free express shipping in the UAE for orders above AED 100!

{% elsif extended_field.country_of_residence == "Singapore" %}
Free next-day delivery across Singapore on all purchases this week!

{% else %}
We ship internationally! Check delivery timelines at checkout.
{% endif %}
```

**Example output 1**:

if `{{extended_field.country_of_residence}}` = "India"

```
Hi Riya,
Great news! Free delivery is now available across India on all orders above ₹499.
```

**Example output 2**:

if `{{extended_field.country_of_residence}}` = "UAE"

```
Hi Riya,
Enjoy free express shipping in the UAE for orders above AED 100!
```

**Example output 3**:

if `{{extended_field.country_of_residence}}` = "USA" (not matched in conditions)

```
We ship internationally! Check delivery timelines at checkout.
```

<br />

**6. A brand wants to send personalized product suggestions to users based on their browsing or purchase history, encouraging them to explore and shop.**

```liquid
Hi {{first_name}},

We’ve handpicked some products just for you:  
{{ recommended_products }}

{% if extended_field.preferred_product %}
Love {{ extended_field.preferred_product }}? We’ve got great offers on it waiting for you!
{% endif %}
```

**Example output**:

```
Hi Riya,

We’ve handpicked some products just for you:  
Face Wash, Lip Balm, Moisturizer

Love Vitamin C Serum? We’ve got great offers on it waiting for you!

```