---
title: Configure Delivery Settings
deprecated: false
hidden: false
metadata:
  robots: index
---
<br />

## Target DND users

Mobile SMS messages are blocked for users who have marked themselves as **DND (Do Not Disturb)**. By default, messages are not sent to DND users, but you can manually enable messaging for them if required. This is useful for checking reachability if those DND users have opted out of DND.

To allow messages to be sent to DND users:

* Enable the **NDNC** toggle to send messages to customers subscribed to DND.

By default, this option is **not available** for all organisations. To enable it, navigate to `_{hostURL}orgadmin/administer/{orgID}_ `and enable the **Send to NDNC Customer** option.

## Send communication to control customers

In general, Test Audience/Customers are the selected group of customers or audience to whom all communication messages are sent. Control Audience/Customers are the selected group of customers or audience for whom messages are not sent. The brand decides the ratio and group of the Test-Control audience.

By default, the campaign communication messages are not sent to the Control customers but only to the Test customers. You can turn on the toggle switch to enable sending communications to Control customers.

![f238db30c34b6e5c102be17bb23234274fe67cd711aa7400c8b36ed6e40f7456 image](https://files.readme.io/f238db30c34b6e5c102be17bb23234274fe67cd711aa7400c8b36ed6e40f7456-image.png)

A confirmation message is displayed on enabling the option. Select **Yes, send** to proceed.

![464b54d3d470a4b3df0b95e6d31445eccc81ebe4b3be1f2120c73cb32768a6fc image](https://files.readme.io/464b54d3d470a4b3df0b95e6d31445eccc81ebe4b3be1f2120c73cb32768a6fc-image.png)

## Use case

You can enable this option in scenarios such as:

* sending communication about a brand's promotional program to all customers
* sending feedback form and collect feedback from all the customers
* sending any emergency communication
* event invitation to all customers

## Send messages to unsubscribed users

This feature enables you to send communication messages to customers who have disabled their subscription status. You can set this while configuring the campaign.  To activate this:

1. From the Campaign configuration page, navigate to the **Delivery settings**.

   ![e7f95d311bdf8a1608095df30e123d6009cfa94a577734e1dffd872122c45026 image](https://files.readme.io/e7f95d311bdf8a1608095df30e123d6009cfa94a577734e1dffd872122c45026-image.png)
2. Set the **Ignore subscription status**? toggle switch to On.

![cc57f7667f3304591dd709d0058551c51ee1016890e54837fb27852d9002a4cf image](https://files.readme.io/cc57f7667f3304591dd709d0058551c51ee1016890e54837fb27852d9002a4cf-image.png)

3. A confirmation box appears asking if you want to send the message to users regardless of their subscription status. Click **Yes, send** to proceed.

![785a51f84e0570620647dbc6d6af17762de3fe500ea612b03d938c1f08cfced2 Screenshot 2025 09 02 at 9](https://files.readme.io/785a51f84e0570620647dbc6d6af17762de3fe500ea612b03d938c1f08cfced2-Screenshot_2025-09-02_at_9.02.44_PM.png)

4. Click **Save**.
