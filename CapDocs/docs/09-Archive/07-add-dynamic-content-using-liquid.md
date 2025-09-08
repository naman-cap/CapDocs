---
title: Add Dynamic Content Using Liquid
excerpt: >-
  This guide provides an overview of the Liquid template language, focusing on
  features relevant for personalizing messages in Engage+.
deprecated: false
hidden: true
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
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

1. Output markup (denoted by \{\{ }}): Used to output content.
2. Tag markup (denoted by \{% %}): Used for logic and control flow.

# Variables

Variables allow you to insert dynamic content into your templates. Common variables might include:

* `{{ customer.first_name }}`: The customer's first name
* `{{ customer.email }}`: The customer's email address
* `{{ customer.total_purchases }}`: The total number of purchases made by the customer

Usage example:

```liquid
Hello {{ customer.first_name }},
```

# Variable Formatting

Formatting modify the output of Liquid objects. They are used with the pipe character ( | ).

Common filters include:

* `capitalize`: Capitalizes the first letter of a string
* `downcase`: Converts a string to lowercase
* `upcase`: Converts a string to uppercase
* `date`: Formats a date (see [Date Formatting](#date-formatting) section)
* `money`: Formats a number as currency (see [Currency Formatting](#currency-formatting) section)

Usage example:

```liquid
Welcome back, {{ customer.first_name | capitalize }}!
Your last purchase was on {{ customer.last_purchase_date | date: "%B %d, %Y" }}.
```

# Control Flow

Control flow tags create conditions that decide whether blocks of Liquid code should be executed.

Common control flow tags:

* `if`, `elsif`, `else`: Conditional statements
* `unless`: Negative conditional statement

Usage example:

```liquid
{% if customer.vip_status == true %}
  Enjoy your exclusive VIP offer!
{% elsif customer.total_purchases > 5 %}
  Thanks for being a loyal customer!
{% else %}
  Check out our latest products!
{% endif %}
```

# Date Formatting

Dates can be formatted using the `date` filter. Here are some common format specifiers:

* `%B`: Full month name (e.g., "January")
* `%b`: Abbreviated month name (e.g., "Jan")
* `%d`: Day of the month, zero-padded (01-31)
* `%e`: Day of the month (1-31)
* `%Y`: Four-digit year (e.g., 2024)
* `%y`: Two-digit year (e.g., 24)
* `%H`: Hour in 24-hour format (00-23)
* `%I`: Hour in 12-hour format (01-12)
* `%M`: Minute (00-59)
* `%S`: Second (00-59)
* `%p`: AM/PM

Example:

```liquid
{{ order_date | date: "%B %d, %Y at %I:%M %p" }}
```

This might output: "September 26, 2024 at 02:30 PM"

## Locale-Specific Date Formatting

For international audiences, you may need to format dates according to specific locales here are some common approaches:

1. Locale parameter in date filter:
   ```liquid
   {{ order_date | date: "%B %d, %Y", locale: "fr" }}
   ```

2. Localize (`l`) or translate (`t`) filters:
   ```liquid
   {{ order_date | l: "date.formats.long" }}
   ```

3. System-wide locale setting:
   ```liquid
   {{ order_date | date: "long" }}
   ```

4. Locale-aware time zones:
   ```liquid
   {{ event_date | date: "%B %d, %Y at %I:%M %p %Z", locale: "de" }}
   ```

# Currency Formatting

Liquid typically provides filters for formatting monetary values according to different currencies and locales.

Common currency filters include:

* `money`: Formats a number as currency
* `money_with_currency`: Formats a number as currency and includes the currency symbol or code

Usage examples:

1. Basic currency formatting:
   ```liquid
   {{ product.price | money }}
   ```
   This might output: "$10.00"

2. Currency formatting with symbol:
   ```liquid
   {{ product.price | money_with_currency }}
   ```
   This might output: "$10.00 USD"

3. Locale-specific currency formatting:
   ```liquid
   {{ product.price | money: locale: "fr" }}
   ```
   This might output: "10,00 €"

4. Specifying a different currency:
   ```liquid
   {{ product.price | money: currency: "EUR" }}
   ```
   This might output: "€10.00"

5. Combining locale and currency:
   ```liquid
   {{ product.price | money_with_currency: currency: "JPY", locale: "ja" }}
   ```
   This might output: "¥1,000 JPY"

# Loops

Loops are used to iterate over collections like arrays or hashes.

Common loop tags:

* `for`: Iterate over an array
* `break`: Exit a loop
* `continue`: Skip the current iteration

Usage example:

```liquid
Your recent purchases:
{% for product in customer.recent_purchases limit:3 %}
  - {{ product.name }}
{% endfor %}
```

## Best Practices

1. Always test your templates with sample data before sending.
2. Use meaningful variable names for clarity.
3. Implement fallback content for missing data:
   ```liquid
   {{ customer.first_name | default: "Valued Customer" }}
   ```
4. Keep your templates simple and readable.
5. Use comments to explain complex logic:
   ```liquid
   {% comment %}Check if customer is eligible for discount{% endcomment %}
   ```
6. Be mindful of different locales when formatting dates and currencies.
7. Use appropriate error handling to prevent broken personalization:
   ```liquid
   {% if customer.first_name %}Hello {{ customer.first_name }}{% else %}Hello there{% endif %}
   ```

## Examples

1. Personalized Email Greeting:
   ```liquid
   Dear {{ customer.first_name | default: "Valued Customer" }},
   ```

2. Conditional Content based on Purchase History:
   ```liquid
   {% if customer.total_purchases > 10 %}
     As a loyal customer, enjoy 20% off your next purchase!
   {% elsif customer.total_purchases > 5 %}
     Thanks for your continued support. Here's 10% off your next order!
   {% else %}
     Shop now and start earning rewards!
   {% endif %}
   ```

3. Product Recommendations with Price:
   ```liquid
   Based on your interests, we recommend:
   {% for product in recommended_products limit:3 %}
     - {{ product.name }}: {{ product.price | money_with_currency }}
   {% endfor %}
   ```

4. Abandoned Cart Reminder with Total:
   ```liquid
   {% if customer.abandoned_cart %}
     Don't forget about the items in your cart:
     {% for item in customer.abandoned_cart.items %}
       - {{ item.name }}: {{ item.price | money }}
     {% endfor %}
     Total: {{ customer.abandoned_cart.total | money_with_currency }}
   {% endif %}
   ```

5. Event Countdown with Localized Date:
   ```liquid
   {% assign days_until_event = event_date | date: "%s" | minus: "now" | date: "%s" | divided_by: 86400 %}
   Only {{ days_until_event }} days until our big sale!
   Mark your calendar: {{ event_date | date: "long", locale: customer.locale }}
   ```

6. International Pricing:
   ```liquid
   Our new product is now available!
   Price in your region: {{ product.price | money_with_currency: locale: customer.locale }}
   ```