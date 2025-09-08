---
title: Setup Subscription
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
## Introduction

Customers can subscribe or unsubscribe from receiving SMS communications for each source of your organization. This module helps you in automating customer subscriptions for InStore, eCommerce accounts, and WeChat.

Two types of subscriptions are supported by Capillary - transaction messages for personalized messages and promotional messages for bulk communications such as campaign messages.

This section provides a detailed procedure on configuring subscriptions for the sources InStore, WeChat, and e-commerce.

### Limitations

- Only registered customers can request opt-in or out-out services.
- Success messages for opt-in or opt-out depend on the message you configure on the respective pages.
- When non-registered customers request such opt-in or opt-out service, the request will be silently ignored.
- When a customer who is already opted-in, places a request for opt-in no action will be taken and such requests will be silently ignored. 

<Note title="Note">
- Supported communication channels are email, SMS, and WeChat.
- Supported sources are all sources with active accounts that are mapped to the supported channels.
</Note>

For detailed help on configuring opting in or opting out, see the following topics.

1. **Email Subscription Settings**: You can configure email subscriptions through a link that facilitates customers to opt-in or opt-out from org emails.
2. **Mobile Number Subscriptions**: You can configure mobile number subscriptions by two options - either through SMS or missed call.
   - **Missed Call-based Subscription Settings**: In this, a customer needs to give a missed call to the dedicated number that is configured for opt-in or opt-out.
   - **SMS-based Subscription Settings**: In this, the customer needs to send an SMS in the format that is configured for opt-in or opt-out. 

<Note title="Note">
- WeChat subscription settings are configured by default (if applicable for the org). You cannot modify WeChat subscription settings.
</Note>

---

## SMS based Subscription Settings

The **Capillary Subscription Settings** module lets you configure opt-in or opt-out through a missed call or SMS. 

- For missed call-based opt-in and opt-out, you need to configure different numbers for each action. i.e., opt-in to promotional SMSs, opt-in to transaction SMSs, opt-out of promotional SMSs, opt-out of transaction SMSs.
- For SMS-based opt-in and opt-out, you can have just one number for all actions but with different commands. For example, to opt-out, send STOP to 1234; to opt-in send START to 1234. 

### Access SMS subscription settings page

To configure the SMS Subscription Settings page:

1. On InTouch **Settings**, click **Subscription Settings** > **SMS**

2. Click **Edit** Settings

![](https://files.readme.io/fa00f2d-_vrlMZfhpshaolhek0oBoGEUxI-kCqjkgw.jfif "_vrlMZfhpshaolhek0oBoGEUxI-kCqjkgw.jfif")

3. For orgs with multiple brands, you need to configure settings for each organization unit (OU).

   - To configure settings at the OU level, check Have different settings for different organizational units. 

### Enable subscription status syncing across OUs (for MLP enabled orgs)

Orgs with multiple org units can engage a customer through different org units of the org. The customer gives confirmation for opt-ins and opt-outs through the option configured for the org unit.

- **Opt-in to all OUs if subscription entry from any of the OUs is Opt-in**: Check this option to opt-in customers to all org units If they opt-in to any of the org units.

For example, assume the org has four org units - OU1, OU2, OU3, and OU4. if a customer opts into OU3, enabling this option will opt in the customer to OU1, OU2, and OU4 also.

- **Opt-out from all OUs if the first subscription entry from any of the OUs is Opt-out**: Check this option to opt-out customers from all org units of the org if they were to opt-out from any of the org units.

For example, in the preceding example, if a customer opt-outs from OU2, enabling this option will opt out the customer from the other OUs as well - OU1, OU3, and OU4

The following settings are common for both single-brand orgs and multi-brand orgs.

### Subscription Settings for Promotional SMSs

For Promotional SMSs subscription through missed call, you need to have a different number for each action and follow the steps specified below. 

1. In **Customers can modify preference by**, choose to _give a missed call_ 

2. If you are switching the preference, you will see a prompt screen to confirm the change in preference. Click **Reset & Proceed** to continue.

**Note**: The current preference settings will be lost once you click **Reset & Proceed** 

![](https://files.readme.io/3906259-abGX6XRqpsk3WSOCCpMNbTcS8HfgfPcrzA.jfif "abGX6XRqpsk3WSOCCpMNbTcS8HfgfPcrzA.jfif")

| OPTION | DESCRIPTION | SETTINGS |
| --- | --- | --- |
| Promotion SMS Optout tag | Lets you configure the optout tag. | Click **Configure** to setup the optout tag. You will see the following options <br/><br/>**Define the code to be sent**: Define the code tag - the command that you want to have in the SMS to opt-out a mobile number from the promotional SMSs of the current org or OU <br/><br/>**Define the num to which the code to be sent**: Define the num tag - a number to which customers need to send an SMS to opt-out of promotional SMSs of the current org or OU <br/><br/>**Define the Optout tag**: Specify the opt-out message that needs to be sent to customers in place of the tag. Use the + icon and insert **code** and **num** as appropriate<br/>Click **Save** |
| Promotion SMS Optin tag | Lets you configure the optin tag. | Click **Configure** to setup the optin tag. You will see the following options <br/><br/>**Define the code to be sent**: Define the code tag - the command that you want to have in the SMS to opt-in a mobile number <br/><br/>**Define the num to which the code to be sent**: Define the num tag - Specify a number to which the user needs to send SMS for opting in to the org's promotional SMS <br/><br/>**Define the Optin tag**: Specify the opt-in message that you want to send to customers in place of the Optin tag used in SMS templates. Click the + icon and insert **code** and **num** as appropriate<br/>Click **Save** |

3. Select the desired Optin type:

i. **Single**: Registered customers with no opt-in preference and customers who are opted-in for org's or OU's promotional are targeted in this type.  
ii. **Restricted Single**: Only customers who are opted-in for the org level or OU level promotional SMS are targeted in this type  
iii. **Double**: Customers are allowed to manually opt-in to the org's promotional SMS and receive SMSs only after verifying their opt-in status.

- In **Double**, you will need to send a verification message to allow the customers to confirm their opt-in manually. You will see a new field **Verification Message**. Click the respective **Configure** option and set the verification message. If you are using Unicode characters in the message, check **Allow Unicode Characters**

The following table shows the org's preference of sending promotional messages in each type

| Type | Promotional SMS to Opt In numbers | Promotional SMS to no Preference numbers | Promotional SMSs to Opted out numbers |
| --- | --- | --- | --- |
| Single | Yes | Yes | No |
| Restricted Single | Yes | No | No |
| Double<br/>In Double type, you need to configure the verification message that will be sent to customers to manually opt-in | No by default (**Customers will start getting promotional SMSs only after verifying their numbers**) | No by default (**Customers will start getting promotional SMSs only after verifying their numbers**) | No |

4. Check to **Send Optin confirmation SMS** and configure the message to be sent on a successful opt-in

5. Check to **Send Optout confirmation SMS** and configure the message to be sent on a successful opt-out

6. In **Sender Number**, specify the dedicated number to send promotional SMS (for the current org or OU)

### SMS based Subscription Settings for Transaction SMSs

For Transactional SMSs, you can configure only opt-in and opt-out tags. The Optin Type and Optout Type are set by default. You cannot modify it.

Scroll down to the Transactional SMS setting section

![](https://files.readme.io/6fe1035-EnCiS4rBiNvFaLtWSGRAgNaDGSge2tOFAQ.jfif "EnCiS4rBiNvFaLtWSGRAgNaDGSge2tOFAQ.jfif")

To configure the Optout tag, click the Configure option corresponding to the Transactional SMS setting

![](https://files.readme.io/734b418-LwC5baZ9JnGwK2I6N577MUCD9oWVGTCmfg.jfif "LwC5baZ9JnGwK2I6N577MUCD9oWVGTCmfg.jfif")

1. **Define the trans_unsub_command to be sent**: Specify your preferred command to out out of transactional SMSs (for example: STOP).
2. **Define the trans_unsub_shortcode to be sent**: Specify the shortcode to which customers need to send the SMS out of transactional SMSs.
3. **Define the Optout tag**: Specify the opt-out message that will go with the transactional SMSs for SMS-based opt-out.
4. Click **Save** to save the changes.

---

## Missed Call based Subscription Settings

The Capillary Subscription Settings module lets you configure opt-in or opt-out through a missed call or SMS. 

- For missed call-based opt-in and opt-out, you need to configure different numbers for each action. i.e., opt-in to promotional SMSs, opt-in to transaction SMSs, opt-out of promotional SMSs, opt-out of transaction SMSs.
- For SMS-based opt-in and opt-out, you can have just one number for all actions but with different commands. For example, to opt-out, send STOP to 1234; to opt-in send START to 1234. 

To configure missed call based Subscriptions Settings:

1. On InTouch **Settings**, click **Subscription Settings** > **SMS** 
2. Click **Edit** Settings

![](https://files.readme.io/1275421-3RscDqi_bdqpzX1ecNNP7uYJjtl-8YEdlg.jfif "3RscDqi_bdqpzX1ecNNP7uYJjtl-8YEdlg.jfif")

3. For orgs with multiple brands, you need to configure settings for each organization unit (OU).

- To configure settings at the OU level, check **Have different settings for different organizational units**  
  The following settings are common for both single-brand orgs and multi-brand orgs.

Subscription Settings, Customer Preference

How brands regard them:

### Missed Call based Subscription Settings for Promotional SMSs

You need to have a unique number for each action that you wanted to configure for the missed calls based. 

**To configure missed call based subscription settings:**

1. In **Customers can modify preference by**, choose to _give a missed call_ 
2. If you are switching the preference, you will see a prompt screen to confirm the change in preference. Click **Reset & Proceed** to continue.

**Note**: The current preference settings will be lost once you click **Reset & Proceed**

![abGX6XRqpsk3WSOCCpMNbTcS8HfgfPcrzA (1).jfif ](https://files.readme.io/6dd2eeb-abGX6XRqpsk3WSOCCpMNbTcS8HfgfPcrzA_1.jfif)

| OPTION | DESCRIPTION | SETTINGS |
| --- | --- | --- |
| Promotion SMS Optout tag | Lets you configure the optout tag. | Click **Configure** to setup the optout tag. You will see the following options <br/><br/>**Define the num to be given a missed call**: Define the num tag - a number to which customers need to give a missed call to opt-out of promotional SMSs of the current org or OU.<br/><br/>**Define the Optout tag**: Specify the opt-out message that needs to be inserted for the **Optout** tag used in SMS template. Use the + icon and select **num** to insert the missed call number tag - **num** - in the message<br/><br/>Click **SAVE** |
| Promotion SMS Optin tag | Lets you configure the _optin tag_. | Click **Configure** to setup the optin tag. You will see the following options <br/><br/>**Define the num to be given a missed call**: Define the num tag - Specify a number to which the user needs to give a missed call to opt-in to the promotional SMS of the current org or OU<br/><br/>**Define the Optin tag**: Specify the opt-in message that you want to send to customers in place of the Optin tag used in SMS template. Use the + icon to insert the missed call number tag - **num** - in the message<br/><br/>Click **SAVE** |

3. Select the desired **Optin type**:  
   i. **Single**: Registered customers with no opt-in preference and customers who are opted-in for org's or OU's promotional are targeted in this type.  
   ii. **Restricted Single**: Only customers who are opted-in for org's or OU's promotional SMS are targeted in this type  
   iii. **Double**: Customers are allowed to manually opt-in to the org's or OU's promotional SMS and receive SMSs only after verifying their opt-in status.

- In Double, you will need to send a verification message to allow the customers to confirm their opt-in manually. You will see a new field Verification Message. Click the respective Configure option and set the verification message. If you are using Unicode characters in the message, check Allow Unicode Characters

The following table shows the org's preference of sending promotional messages in each type

| Type | Promotional SMS to Opt In numbers | Promotional SMS to no Preference numbers | Promotional SMSs to Opted out numbers |
| --- | --- | --- | --- |
| Single | Yes | Yes | No |
| Restricted Single | Yes | Yes | No |
| Double<br/>In Double type, you need to configure the verification message that will be sent to customers to manually opt-in | No by default (Customers will start getting promotional SMSs only after verifying their numbers) | No by default (Customers will start getting promotional SMSs only after verifying their numbers) | No |

4. Check to Send Optin confirmation SMS and configure the message to be sent on a successful opt-in

5. Check Send Optout confirmation SMS and configure the message to be sent on a successful opt-out

6. In Sender Number, specify the number from which you want to send promotional SMS 

### SMS based Subscription Settings

You can have a single number for all actions but with different commands. 

**To configure SMS based subscription settings:**

1. In **Customers can modify preference by**, choosing _Sending an SMS_ and configuring other fields as explained in the table below

2. If you are switching the preference, you will see a prompt screen to confirm the change in preference. Click **Reset & Proceed** to continue.

**Note**: The current preference settings will be lost once you click **Reset & Proceed** 

![](https://files.readme.io/625bd78-abGX6XRqpsk3WSOCCpMNbTcS8HfgfPcrzA_2.jfif "abGX6XRqpsk3WSOCCpMNbTcS8HfgfPcrzA (2).jfif")

| OPTION | DESCRIPTION | SETTINGS |
| --- | --- | --- |
| Define the code to be sent | Lets you set the command for |  |
| Promotion SMS Optout tag | Lets you configure the _optout tag_. | Click **Configure** to setup the optout tag. You will see the following options <br/><br/>**Define the code to be sent: Define the code tag** - the command that you want to have in the SMS to opt out a mobile number from the current org's or OU's promotional SMS <br/><br/>**Define the num to which the code to be sent: Define the num tag** - a number to which customers need to send an SMS to opt-out from the current org's or OU's promotional SMS <br/><br/>**Define the Optout tag**: Specify the opt-out message that needs to be inserted for the Optout tag wherever used in SMS templates. Use the + icon and insert code and num as appropriate<br/>Click **SAVE** |
| Promotion SMS Optin tag | Lets you configure the **optin tag**. | Click **Configure** to setup the optin tag. You will see the following options <br/><br/>**Define the code to be sent: Define the code tag** - the command that you want to have in the SMS to opt in a mobile number <br/><br/>**Define the num to which the code to be sent**: Define the num tag - Specify a number to which the user needs to send SMS for opting in to the org's promotional SMS <br/><br/>**Define the Optin tag**: Specify the opt out message that will be replaced wherever the **Optin** tag is used in SMS templates. Use the + icon and insert **code** and **num** as appropriate<br/>Click **SAVE** |

3. Select the desired Optin type:

i. **Single**: Registered customers with no opt-in preference and customers who are opted-in for org's or OU's promotional are targeted in this type.  
ii. **Restricted Single**: Only customers who are opted-in for org's or OU's promotional SMS are targeted in this type  
iii. **Double**: Customers are allowed to manually opt-in to the org's or OU's promotional SMS and customers will keep receiving messages only after verifying opt-in status.

- When you select Double, you will see the **Verification Message** option. Click the respective Configure option and configure the message. If you want to use Unicode characters in the message, check **Allow Unicode Characters**

The following table shows the org's preference of sending promotional messages in each type

| Type | Promotional SMS to Opt In numbers | Promotional SMS to no Preference numbers | Promotional SMSs to Opted out numbers |
| --- | --- | --- | --- |
| Single | Yes | Yes | No |
| Restricted Single | Yes | Yes | No |
| Double<br/>In Double type, you need to configure the verification message that will be sent to customers to manually opt-in | No by default (**Customers will start getting promotional SMSs only after verifying their numbers**) | No by default (**Customers will start getting promotional SMSs only after verifying their numbers**) | No |

4. Check to Send Optin confirmation SMS and configure the message to be sent on a successful opt-in

5. Check Send Optout confirmation SMS and configure the message to be sent on a successful opt-out

6. In Sender Number, specify the number from which you want to send promotional SMS 

### Missed Call based Subscription Settings for Transaction SMSs

For Transactional SMs, you can configure only opt-in and opt-out tags. The **Optin Type** and **Optout Type** are set by default. You cannot modify it.

Scroll down to the **Transactional SMS** setting section

![EnCiS4rBiNvFaLtWSGRAgNaDGSge2tOFAQ (1).jfif ](https://files.readme.io/42c22f8-EnCiS4rBiNvFaLtWSGRAgNaDGSge2tOFAQ_1.jfif)

To configure the Optout tag, click the **Configure** option corresponding to the **Transactional SMS setting**

![NcFVlGu7gtc7_7DhrtQKqGdqcZWrknysvg.jfif ](https://files.readme.io/cd180e6-NcFVlGu7gtc7_7DhrtQKqGdqcZWrknysvg.jfif)

1. **Define the trans_unsub_shortcode to be given a missed call**: Specify the shortcode to which customers want to give a missed call to out out of transactional SMSs
2. **Define the Optout tag**: Specify the opt-out message that will go with the transactional SMSs
3. Click **Save** to save the changes

---

## Email Subscription Settings

### Subscription Settings for Single Brand Org (InStore)

1. On Capillary InTouch, navigate to **Settings** > **Subscription Settings (v2)**
2. Navigate to the InStore source and click **Email Channel**.
3. Check **Have different subscription settings for different organizational units** to configure email subscription settings separately for each org unit (applicable only for orgs with multiple org units).

![uxJvJEho-HQnpGSoE_GStxThHWBV_Vc7Gw.png ](https://files.readme.io/ee2a148-uxJvJEho-HQnpGSoE_GStxThHWBV_Vc7Gw.png)

4. In **Select Org Unit**, choose the OU (Org Unit) for which you want to configure the email subscription. You will not see this option for single OU orgs.
5. Configure _Settings for Promotional Emails_ as explained in the following table.

| OPTION                                             | SUB OPTION          | DESCRIPTION                                                                                                                                 |
| :------------------------------------------------- | :------------------ | :------------------------------------------------------------------------------------------------------------------------------------------ |
| Optin type                                         | Single (by default) | Customers who are opted in and the customers with no subscription preference are considered as opted in customers for promotional messages. |
|                                                    | Restricted          | Only opted in customers are considered.                                                                                                     |
| Send Optin Confirmation email                      | Configure           | Configure the email that you want to send for the opt-in confirmation.                                                                      |
| Send optout confirmation email                     | Configure           | Configure the email that you want to send for the opt-out confirmation.                                                                     |
| Sender ID for verification and confirmation emails | -                   | Choose the sender id from which you want to send promotional messages.                                                                      |
| Sender name                                        | -                   | Specify your preferred sender name for the promotional messages.                                                                            |

<Note title="Note">
- Confirmation messages of a customer opt-in or opt-out will not be sent for transaction messages.
- Use **Go to next org unit** to view and edit details of each org unit. Similarly, click **Go to the previous org unit** to view and edit details of the preceding OU (if available).
</Note>

### Email Subscription Settings for e-commerce

1. On Capillary InTouch, navigate to Settings > Subscription Settings (v2)
2. Navigate to the Ecommerce account for which you want to set or modify email subscription settings and click Email Channel.

![-eN2vVXjSpea201T9IW-6RPwA012Kd4gdA.png ](https://files.readme.io/e2a77bb--eN2vVXjSpea201T9IW-6RPwA012Kd4gdA.png)

3. Configure _Settings for Promotional Emails_ as explained in the following table.

| OPTION                                             | SUB OPTION          | DESCRIPTION                                                                                                                                 |
| :------------------------------------------------- | :------------------ | :------------------------------------------------------------------------------------------------------------------------------------------ |
| Optin type                                         | Single (by default) | Customers who are opted in and the customers with no subscription preference are considered as opted in customers for promotional messages. |
|                                                    | Restricted          | Only opted in customers are considered.                                                                                                     |
|                                                    | Double              | Customers need to opt-in manually.                                                                                                          |
| Send Optin Confirmation email                      | Configure           | Configure the email that you want to send for the opt-in confirmation.                                                                      |
| Sender ID for verification and confirmation emails | -                   | Choose the sender id from which you want to send promotional messages.                                                                      |
| Sender name                                        | -                   | Specify your preferred sender name for the promotional messages.                                                                            |

<Note title="Note">
- Confirmation messages of a customer opt-in or opt-out will not be sent for transaction messages.
- Use **Go to next org unit** to view and edit details of each org unit. Similarly, click **Go to the previous org unit** to view and edit details of the preceding OU (if available).
</Note>

### Email Subscription Settings for WeChat

1. On Capillary InTouch, navigate to Settings > Subscription Settings (v2)
2. Navigate to the WeChat account for which you want to set or modify email subscription settings and click Email Channel.

![n70sH_zjttOUnFABs3otZNQ_PwsVnxyceA.png ](https://files.readme.io/04821bf-n70sH_zjttOUnFABs3otZNQ_PwsVnxyceA.png)

3. Configure Settings for Promotional Emails as explained in the following table.

| OPTION                                             | SUB OPTION          | DESCRIPTION                                                                                                                                 |
| :------------------------------------------------- | :------------------ | :------------------------------------------------------------------------------------------------------------------------------------------ |
| Optin type                                         | Single (by default) | Customers who are opted in and the customers with no subscription preference are considered as opted in customers for promotional messages. |
|                                                    | Restricted          | Only opted in customers are considered.                                                                                                     |
|                                                    | Double              | Customers need to opt-in manually.                                                                                                          |
| Send Optin Confirmation email                      | Configure           | Configure the email that you want to send for the opt-in confirmation.                                                                      |
| Send optout confirmation email                     | Configure           | Configure the email that you want to send for the opt-out confirmation.                                                                     |
| Sender ID for verification and confirmation emails | -                   | Choose the sender id from which you want to send promotional messages.                                                                      |
| Sender name                                        | -                   | Specify your preferred sender name for the promotional messages.                                                                            |

<Note title="Note">
- Confirmation messages of a customer opt-in or opt-out will not be sent for transaction messages.
- Use Go to next org unit to view and edit details of each org unit. Similarly, click Go to the previous org unit to view and edit details of the preceding OU (if available).
</Note>

## Subscription Message Language Configuration

When a user clicks a _Subscribe_ or _Unsubscribe_ link in an email, a success or failure message is sent. You can control the language of these messages using the config CONF_ORG_SUBSCRIPTION_UPDATE_MSG. By default, this config is not enabled. To enable, create a ticket with the Capillary Product Support team.

### Behaviour of the config

The system selects the message language based on the following:

- If the request includes a language code  
  → It uses that language to show the success or failure message.
- If no language code is present in the request, but the config has a default language  
  → It uses the default language defined in the config.
- If the config is not defined at all  
  → It uses English as the fallback language.

### Example

- **Case 1**: Language code is specified in the request  
  A user clicks the unsubscribe link with the language code set to `Jap` (Japanese).  
  → The success or failure message is in Japanese.
- **Case 2**: No language code, but the config has a default language  
  A user clicks the unsubscribe link without specifying a language code. The config sets the default language to `Jap`.  
  → The success or failure message is in Japanese.
- **Case 3**: No language code in request and no config  
  A user clicks the unsubscribe link without any language code, and the config is not defined.  
  → The success or failure message is in English.

**Note**: This functionality is currently available only for email subscriptions.