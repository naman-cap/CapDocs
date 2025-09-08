---
title: View customer details
excerpt: ''
deprecated: false
hidden: true
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
In Member Care, you can view profile information, status, subscription details, interactions and other loyalty details of a customer. This section provides information on how to access customer details and update specific information on Member Care.

To view the overview of customer details:

1. Log on to InTouch and navigate to **Member Care**.
2. In the **Customer Search**, enter the registered mobile number, email ID, external ID, card number, card external ID, or name and from the search result list select the customer profile.

![Search customer](https://files.readme.io/c7ddc8e-Search_customer.png)

By default, the application displays the **Overview** tab. The **Overview** tab displays the basic details of the customer. This page is also called Customer Single View (CSV).

To know more details about the customer click the **Loyalty**, **Events**, **Incentives**, and **Communications** tabs.

# Overview

![Customer Overview](https://files.readme.io/c7b36c1-Customer_Overview.gif)

The overview tab contains below details:

| No. | Title                |
| :-- | :------------------- |
| 1   | Source profile |
| 2   |                      |
| 3   |                      |
| 4   |                      |
| 5   |                      |
| 6   |                      |
| 7   |                      |
| 8   |                      |
| 9   |                      |
|     |                      |

## Source profiles

This shows the list of sources (in tabs) through which the customer has registered. Capillary supports different sources such as InStore, Facebook, Webengage, WeChat (China-specific), mobile app website, Line, TMALL, E-commerce sites, Whatsapp, and more.  
By default, InStore is set as the default source. There are also sources such as Mobile Push, Facebook, WeChat that can have multiple accounts within the org. You can see the customer details from each account of the source.

![Source profiles](https://files.readme.io/4cfd7a8-image17.png)

For example, in the above image, you can see numbers on top of the profile icons. The number 3 for the Whatsapp icon means that the customer has profiles from three WhatsApp accounts of the org. You can click on the Whatsapp icon and choose between one of the three profiles that you want to see.

## Customer status and name

This section shows the current status (custom status label or fraud status) of the customer, the name and the date when the customer has registered.

All orgs might not have Customer Status enabled. Hence, you would see Fraud Status (default enabled) for orgs that have not enabled Customer Status. The _Fraud Status_ is the legacy version of _Customer Status_.

Fraud status contains predefined values (MARKED, CONFIRMED, NOT_FRAUD, RECONFIRMED, INTERNAL), unlike Customer Status that contains user defined values (called custom labels).

This remains blank when Both Customer Status and Fraud Status are not set for the customer.

### 3. Customer identifiers

This section shows the registered identifiers of the customer. The first identifier is the primary identifier of the org and remaining are the supported secondary identifiers. Member Care supports mobile number, email ID, external ID, card number, card external ID, WeChat union ID and more. However, you will see only org supported identifiers.

By default, it shows up to three identifiers. To view more identifiers, click **Show more**.

### 4. Communication channels

This shows the communication channels associated with each source profile. Click on the drop-down to expand. Each source can have multiple communication channels. A customer can have different identifiers for a channel across sources.  
The section **Reachable on** shows the communication channels that are available for the customer. For example, if a customer has logged in to the org's app, we capture the Android or iOS device ID. A mobile push icon will be shown. Similarly, if a user has shared his/her email address, we will show the e-mail icon.

> 📘
>
> The Communication channels section shows blank when no information is available. This happens especially when customer has registered using card number or external ID without providing any communication details.

### 5. Customer attributes

This shows the custom field and extended field details captured for the customer. The names shown the screenshot may differ for each org depending on what was created or enabled for your org.

Custom fields are denoted with blue dot.

![Customer attributes](https://files.readme.io/1229c5c-customfields.png)

### 6. Customer stats

This shows the key metrics of the customer transactions - total number of transactions made, average transaction value, and average basket size.

### 7. Store details

This shows the store related information of the customer such as registered TILL, recently transacted store, date and time of recent transaction, and preferred store (store code).

You can also change preferred store of the customer. To change click the more options icon > **Change preferred store**. You will see the current store and an option to change the tore.

In **Change to**, choose the new preferred store and click **Save**.

![Change Preferred Store](https://files.readme.io/3540f01-ChangePreferredStore.png)