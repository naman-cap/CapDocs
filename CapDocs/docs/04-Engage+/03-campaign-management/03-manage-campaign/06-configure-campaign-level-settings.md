---
title: Configure Campaign Settings
deprecated: false
hidden: false
metadata:
  robots: index
---
The delivery setting allows you to set the sender ID, enable POC, and use a tiny URL.

# Enable tracking of clicked links

To track the link (URLs or web links) clicks sent through messages, you need to do the following:

1. On the Engage+ home page, click the setting icon and navigate to the **Messages** page.
2. Enable the **Enable link tracking in messages** toggle button.
3. Choose the formatting of tags from the **Format numerical tag** drop-down menu.
4. To set the communication limit, click **+Add limits**.

<Note title="Note">
s
* The communication limit allows you to configure the messaging limit, channel-wise for direct messaging channels, and an overall limit for all the channels.
* This is also applicable for all communications sent using Journeys.
</Note>

# Set up communication limits for each channel

When you run several campaigns at once, there’s a risk that the same customer may receive too many messages, either on the same day or across multiple days resulting in customer dissatisfaction. To prevent this, you can limit the number of messages to be sent for each communication channel and overall messages. This is set up at the organisation level. For each channel, you can set daily, weekly, and monthly limit with no maximum limit.

**Access Requirements**

By default, users do not have access to enable the communication limits feature for an org. If authenticated users need access, raise a JIRA ticket and assign it to the Engage+ Developer team.

Time Period Definitions:

* Day = From 12:00 AM to 11:59 PM (same calendar day)
* Week = From Sunday 12:00 AM to Saturday 11:59 PM
* Month: From 12:00 AM on the first of a month until 11:59 PM on the last day of the same month

To limit the number of messages to be sent through Engage+, follow these steps:

1. Click **+Add limits**.

![6ba302a c3SvMihbFwCAPtMhnndHNwuVPKOQtpvm8w](https://files.readme.io/6ba302a-c3SvMihbFwCAPtMhnndHNwuVPKOQtpvm8w.png)

2. Select the **channel** for which you want to set the limit. You can also select **Overall** to apply a limit across all channels.

![d0ec3688a49e33fb70b7139d45a50b4427037e2d6a78db51921bb64c66666887 Screenshot 2025 08 07 at 1](https://files.readme.io/d0ec3688a49e33fb70b7139d45a50b4427037e2d6a78db51921bb64c66666887-Screenshot_2025-08-07_at_1.57.29_PM.png)

3. Choose the time period for the limit. You can select one or more of the following options:

* **Daily**: Check to set a daily limit and enter the limit value in the respective box. Example: 300 messages per day.
* **Weekly**: Check this to set a weekly limit and enter the limit value. Example: 100 messages per week.
* **Monthly**: Check this to set a monthly limit and enter the limit value. Example: 2000 messages per month.

![9c6fe504cc5213b3cb32c0f25a328cea8fd984b6fd980f5221e1dd06478b862f Screenshot 2025 08 07 at 2](https://files.readme.io/9c6fe504cc5213b3cb32c0f25a328cea8fd984b6fd980f5221e1dd06478b862f-Screenshot_2025-08-07_at_2.02.53_PM.png)

<Callout icon="📘" theme="info">
  Note

  Each value should be equal to or greater than the limit set for the time period. For example, the weekly limit must be equal to or greater than the daily limit, and the monthly limit must be equal to or greater than both the weekly and daily limit.
</Callout>

4. Click **Done** to save the settings. You can view the limit **Communication Limit** box, along with the limits set for other engagement channels.

![1291be0d3da59a617f1ae7776012614d28d21681f5831e4877b7b0cde319a362 Screenshot 2025 08 07 at 2](https://files.readme.io/1291be0d3da59a617f1ae7776012614d28d21681f5831e4877b7b0cde319a362-Screenshot_2025-08-07_at_2.13.07_PM.png)

## Edit or delete a communication limit

To edit a communication limit follow the given steps:

1. Navigate to the **Communication Limit** box, hover over the more options icon (⋯) next to the desired engagement channel, then click **Edit**.
2. You can make changes to the previously set limits, then click **Done**. The updated limit will then be visible in the **Communication Limit** box.

![81a5f2c14e57b235d45265402bcc93c0efb3574cd01d0243b7c2a812174f3a45 Connected Orgs 7](https://files.readme.io/81a5f2c14e57b235d45265402bcc93c0efb3574cd01d0243b7c2a812174f3a45-Connected_Orgs_7.gif)

To delete a communication limit follow the given steps:

1. Navigate to the **Communication Limit** box, hover over the more options icon (⋯) next to the desired engagement channel.
2. Click **delete**.

The engagement channel will be removed from the **Communication limit** box.

![f17fcb60c0997032f115026b7decd957d39e41a769ddb3328f8c0461c3d329c6 Connected Orgs 8](https://files.readme.io/f17fcb60c0997032f115026b7decd957d39e41a769ddb3328f8c0461c3d329c6-Connected_Orgs_8.gif)

# Report notification and failure alert settings

You can set notifications of daily campaign summary reports, weekly SMS and email credit report, and campaign execution update.

![91fed48b5b0873a6e079fbc9185b44d34310aac7867a88ae5f8d4c8cf4e53eea image](https://files.readme.io/91fed48b5b0873a6e079fbc9185b44d34310aac7867a88ae5f8d4c8cf4e53eea-image.png)

## Report notifications

To notify users on the campaign level report, do the following:

* On the Engage+ home page, click on the setting icon, and navigate to the **Reports** page.

| **OPTION**                                     | **DESCRIPTION**                                                                                                                        |
| ---------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| Daily campaign summary report                  | Enter the email IDs of users (comma separated values) that you want to send daily notifications on the Campaign Summary Report.        |
| SMS / Email credit report                      | Enter the email IDs of users (comma separated values) that you want to send the available SMS and email credits on a weekly basis.     |
| Email notification on message execution status | Enter the email IDs of users (comma separated values) that you want to notify whenever a campaign message is executed with the status. |

## Approval, failure or low credit alerts

To alert users on message approval requests, low delivery rates, or execution failures, do the following:

* On the Engage+ home page, click on the setting icon, and navigate to the **Alerts** page.

| **OPTION**                      | **DESCRIPTION**                                                                                      |
| ------------------------------- | ---------------------------------------------------------------------------------------------------- |
| Message execution failure alert | Enter email IDs (comma separated values) to notify whenever a message execution fails.               |
| Low message delivery alert      | Enter email IDs (comma separated values) to notify when the message delivery rate is less than 60%.  |
| Message approval request        | Enter email IDs (comma separated values) to notify when a new campaign message is sent for approval. |

## Recurring message expiry alert

This feature allows you to configure reminders when recurring campaigns approach their end dates. You can add contacts and configure the alert settings, specifying the number of days before the end date to send an alert.

For example, if you set the alert to 7 days, it will be triggered 7 days before the message's end date.

<Callout icon="📘" theme="info">
  Note

  Users will receive an alert for every recurring message configured in the organization. There are no specific users assigned alerts at the message level.
</Callout>

![1d0c501 Recurring message alert](https://files.readme.io/1d0c501-Recurring_message_alert.png)

# Create test user group

Test user groups are special groups of users that you can use to test campaign messages before sending them to a wider audience and share campaign reports and alerts. This feature is used for all engagement channels except email.

To create a test user group:

1. On the Engage+ home page, click on the **setting** icon and navigate to the **User Groups** page.
2. Click **Create user group**.

![c5ff04c kYbAxB9wRTZRnBtvZK3fSsO KGwhqUsc6Q](https://files.readme.io/c5ff04c-kYbAxB9wRTZRnBtvZK3fSsO-KGwhqUsc6Q.png)

3. In **Name** field, enter a name of the test group.
4. In **All contacts** field , add each user using **+Add**. You can use the search box to find a specific user.
5. Click **Done** to save the group. The newly created group will appear on the User Groups list. Similarly, you can create multiple user groups.

<Note title="Note">
If the users you add have invalid email addresses, the group will not save.
</Note>

# Test customers

Test customers are sample users or groups used for testing purposes, allowing you to test messages and workflows before they are sent to real customers. This feature is available only for Journeys and the Email engagement channel.

## Creating test customers

To create the test customers, perform the following:

1. From the **Engage+** homepage, click on  **Settings icon** and then select **Test Customers**.
2. Select **Individuals** or **Groups**.
3. For individuals, perform the following:
   1. Search for the desired contact using their identifiers in the text field.
   2. Click on **Add**.
4. For Groups, perform the following:
   1. Select **Create test group**.
   2. Enter a group name.
   3. Search for the desired contact using their identifiers in the text field. There is no limit in the number of customers that you can add.
   4. Click on **Add to group**.
5. Select **Done** to save the changes.

![1aaf67011d60ab8875578ef132bf4a74ca01734cd80338df31889a0d6dad57db 4f24b4550fbe5ca685d0b08bd047b031ef6f575c5f8a0889d2565225a661f70a Untitled design 1](https://files.readme.io/1aaf67011d60ab8875578ef132bf4a74ca01734cd80338df31889a0d6dad57db-4f24b4550fbe5ca685d0b08bd047b031ef6f575c5f8a0889d2565225a661f70a-Untitled_design_1.gif)

## Editing test customers

To edit a test customer follow the given steps.

1. From the Engage+ home page, click on  **Settings icon** and then select **Test Customers**.
2. Select **Individuals** or **Groups**.
3. For individuals: A list of customers who are selected as test customers will be visible, and you can remove any customer from the list by clicking the cross (×) icon next to their name.
4. For Groups, perform the following:
   1. Click **Edit Test Group**.
   2. You can either add or remove customers from the group.
   3. Click **Done** to save the changes.

The test group will be updated accordingly.

![591f166f12dad3a46619966b044b3f60c30866b29f00e20b94499adafed2ead2 f833401afd489019c2a4ccee3441470cb2c7510cb5353423c69265e062d7a635 Gif 5](https://files.readme.io/591f166f12dad3a46619966b044b3f60c30866b29f00e20b94499adafed2ead2-f833401afd489019c2a4ccee3441470cb2c7510cb5353423c69265e062d7a635-Gif_5.gif)

## Deleting test customers

To delete a test customer follow the given steps.

1. From the **Engage+** home page, click on  **Settings icon** and then select **Test Customers**.
2. Select **Individuals** or **Groups**.
3. For individuals: A list of customers who are selected as test customers will be visible, and you can remove any customer from the list by clicking the cross (×) icon next to their name.
4. For Groups:
   1. Click **Delete Test Group**.
   2. Click **Yes, delete group** to delete the test group.

The test group will be deleted successfully.

![ae7c44cb96fafe129b569db0e956872b57205d61f400abd003a0d6e865b0040c fc666287f0418b48bc182a36c1db367d106472cbb71d9723a85920a236ee7244 Gif 6](https://files.readme.io/ae7c44cb96fafe129b569db0e956872b57205d61f400abd003a0d6e865b0040c-fc666287f0418b48bc182a36c1db367d106472cbb71d9723a85920a236ee7244-Gif_6.gif)

<br />
