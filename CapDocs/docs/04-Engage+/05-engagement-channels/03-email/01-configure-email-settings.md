---
title: Configure Email Settings
excerpt: ''
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
![7b802bf image](https://files.readme.io/7b802bf-image.png)

# Configure domain gateway and sender details

To configure the domain gateway and sender details, create a ticket to the Capillary Gateway team. Provide the following information:

1. **Custom/Capillary IP**: The IP address used for sending emails can be either a Custom IP (dedicated to the brand) or Capillary's IP.
   * Well-established brands generally use a custom IP address.
   * Brands new in their journey typically use the Capillary IP address to avoid sending emails to the Spam mail section.
   * This choice is based on IP ranking, which is determined by email providers such as Gmail and Yahoo based on authenticity.
   * Use dedicated IP (there is a cost @ 30 usd /IP/month). It is crucial to **Never use the same IP for Bulk and High (OTP/Transactional)** emails, always use a different IP for each traffic type. Use consistent sending IP addresses and domains for your bulk email, but do segment marketing and transactional email streams. Using shared IPs can lead to spamming issues, where spam was mostly due to shared IPs and partial warm-up. Dedicated IPs help segment email streams for better delivery rates.
2. If a client opts for a Custom IP, a **relay ticket** is generated to the gateways team. The Gateway team follows a specific convention for naming these domains, typically involving **Intouch** (our system) and **Send Grid**(vendor).

* A sub-account needs to be created on the vendor side.
* DNS records for the domains must be created.
* DNS details are to be added to the client panel and verified at the backend.
* You must **ensure the c names (SPF and DKIM) and DMARC values are added in client DNS**. The best practice is that DMARC should be initially set to` p=none` and can be changed to `quarantine` or `reject` at a later stage. It is also vital to make use of **Sender Policy Framework (SPF) **and **Domain Keys Identified Mail (DKIM)** to authenticate your emails. Furthermore, reverse DNS to be done on parent account, and it's critical to ensure the relay is configured correctly by engineering.

3. The CSMs or the gateway team can enter the existing domain details in **Org Settings** > **Domain Mapping+Channel Count Info**.

![d8659be53149fea36b0501179cf3f3bbaf3affd26a0ed5f16db2b3a5f29942fd Untitled design](https://files.readme.io/d8659be53149fea36b0501179cf3f3bbaf3affd26a0ed5f16db2b3a5f29942fd-Untitled_design.gif)

## Configure sender details

Define the following details in the JIRA ticket to proceed with the onboarding process:

1. **Sender label/sender name**: This represents the name by which clients wish to send emails to their customers. For example, "Capillary tech." might use "Capillary academy programs" as their sender label when communicating about those programs.
2. **Sender/Reply to ID**: The Sender ID refers to the email ID that the organization wants to use to send the email (e.g., "[academy@capillarytech.com](mailto:academy@capillarytech.com)").

The organization has two options for replies:

* They can either choose the sender ID itself to receive reply mail.
* They can use a separate "Reply to" Email ID for receiving replies.

![a7b07667676a207ecc7ca495f1e7a646cfd55711fe335d77b21bc35fb95eaaac Screenshot 2025 06 04 at 2](https://files.readme.io/a7b07667676a207ecc7ca495f1e7a646cfd55711fe335d77b21bc35fb95eaaac-Screenshot_2025-06-04_at_2.34.04_PM.png)

<Note title="Note">
Use a consistent from:**name** and **address** to clearly identify your brand. Consistency in sender identity builds trust and recognition.
</Note>

3. For OTP (One-Time Password) & Transactional mails, enter details in **Org Settings** > **Setup Wizard** > **Campaigns**.

<Note title="Note">
Always set up a different account for OTP/Transactional emails and Bulk traffic accounts because we cannot use 1 account for both bulk and high emails. This separation ensures reliable delivery for critical transactional emails by isolating them from bulk mailing practices.
</Note>

# Whitelist Emails

In scenarios where emails experience soft or hard bounces, impacting delivery, it is necessary to whitelist such emails. These are emails that are unable to receive messages triggered from Capillary.

The process for whitelisting emails on the Capillary Engage+ setting is as follows:

1. On **Engage+** select settings.

![bb9c54633803f342032553daef24e8c1f0bbf9cb8d5308ca858f117520f22d07 Screenshot 2025 06 04 at 2](https://files.readme.io/bb9c54633803f342032553daef24e8c1f0bbf9cb8d5308ca858f117520f22d07-Screenshot_2025-06-04_at_2.18.41_PM.png)

2. Navigate to **Email whitelisting**.

![3c70a57f4ef41209bb6f9b4b8a97e628816cfe29593e2ab020e1548ca3c8ff30 Screenshot 2025 06 04 at 2](https://files.readme.io/3c70a57f4ef41209bb6f9b4b8a97e628816cfe29593e2ab020e1548ca3c8ff30-Screenshot_2025-06-04_at_2.20.43_PM.png)

3. Upload the CSV file containing the emails to be whitelisted.

![32234c2c3e9e00411c18e9233e7ea725cd5be845b3fefe3125ef6e6775c81640 Screenshot 2025 06 04 at 2](https://files.readme.io/32234c2c3e9e00411c18e9233e7ea725cd5be845b3fefe3125ef6e6775c81640-Screenshot_2025-06-04_at_2.22.12_PM.png)

4. Click Done.

The system now provides the option to upload and whitelist a larger quantity of emails at once.

While whitelisting addresses specific delivery issues, it is part of a broader set of best practices for proactive customer database management. These include cleaning of the customer database, removing invalids, blocks etc. , having a standard policy for handling bouncing addresses, and periodically remove inactive subscribers from your list. It is also important to don't reactivate email addresses that are already on your unsubscribe or suppression list. Whitelisting acts as a remedial measure, but consistent database hygiene is crucial to prevent delivery problems in the first place.

## Email Notifications to POCs

* **Send to POCs**: POCs (Point of Contacts) are the brand user group. Enable this option to send messages to the POCs as well. The messages will be sent based on the delivery schedule

To create a POCs group, follow these steps.

1. On the dashboard, click the **settings** icon.
2. Click **Users groups**, and then click **Create user group**.
3. In **Name**, enter a group name for POCs users.
4. In the **All contacts tab**, select users by clicking **+Add** next to it, and then click **Done**.

![c0331e0 CFfX9xyj6pA9pjsXZ23VbG2Zaxn9f8pGpQ](https://files.readme.io/c0331e0-CFfX9xyj6pA9pjsXZ23VbG2Zaxn9f8pGpQ.png)

## Subscription Update Language

* You can control the language of the success or failure messages sent when a user clicks the _Subscribe_ or _Unsubscribe_ link in an email by using the CONF_ORG_SUBSCRIPTION_UPDATE_MSG config. For details, refer to [Subscription Message Language Configuration](https://docs.capillarytech.com/docs/subscription-management-1#subscription-message-language-configuration).
* Offer an unsubscribe link, so that the recipient can unsubscribe immediately. Not providing an unsubscribe option can send your emails straight to spam and compromises compliance.
* It also reinforces the principle to send only to recipients who explicitly subscribed to your emails, ensuring consent and preventing issues from purchased or rented lists.
