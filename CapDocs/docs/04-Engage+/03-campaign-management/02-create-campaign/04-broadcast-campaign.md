---
title: Broadcast Campaign
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
> 👍 Important
>
> Broadcast Campaign can be created from the new UI only.

Broadcast campaigns are campaigns that are implemented to target a bulk audience. These campaigns' functioning depends on customers' historical data and behaviors. So we can actually launch the campaign by specifying the audience which we want to target for the specific campaign. You can create broadcast campaigns on different channels based on how you want to reach your audience. The available [engagement channels](https://docs.capillarytech.com/docs/engagement-channels#/) are: **Email, SMS, Call Task , WhatsApp , WeChat , Viber , Push Notification , RCS, Zalo , In-App, and Line** .

# Create Campaign

Engage+ new UI consists of a single campaign creation flow with different content strategies.  You can create a campaign either for the org or an org unit. There are three different user roles for org unit access.

* Access to parent org and its org units.
* Access to multiple org units but not org.
* Access only to a specific org unit.

Campaigns created on Engage+ can be used to reach out to customers through Omnichannel mediums like Line, Viber, SMS, Email etc.

<Note title="Note">
s
* To create a campaign for an org unit or org, ensure that you have the necessary permissions
* .Once a campaign is executed, it cannot be stopped. For support, raise a ticket to the Capillary Sustenance team.
</Note>

## Set Campaign name, duration, and strategy

1. Log on to **InTouch** of your cluster and navigate to **Engage+** from the menu.

![4c85cdd9aff39bb8b8e548b542b1cbcfd24b2b477afa26cc4a5ea9711c350385 Screenshot 2025 07 29 at 4](https://files.readme.io/4c85cdd9aff39bb8b8e548b542b1cbcfd24b2b477afa26cc4a5ea9711c350385-Screenshot_2025-07-29_at_4.41.56_PM.png)

2. Click **New campaign.**

![8df415cc31c9f9b876fbd0dfa82bc41e597caf3d32e8522ce8b58064b3a76cf8 Screenshot 2025 07 29 at 4](https://files.readme.io/8df415cc31c9f9b876fbd0dfa82bc41e597caf3d32e8522ce8b58064b3a76cf8-Screenshot_2025-07-29_at_4.42.30_PM.png)

3. Enter a **Campaign name** and select a **Campaign duration** using the calendar boxes.

* Start date: The date from which the campaign and all other associated coupons/offers will be valid.
* End date: The date after which the campaign and all other associated coupons/offers will not be valid.

![6a3a88c2a424d924a24fe492f1f5cdef99860e87b30cd842093c4922ee16bd74 Screenshot 2025 07 29 at 4](https://files.readme.io/6a3a88c2a424d924a24fe492f1f5cdef99860e87b30cd842093c4922ee16bd74-Screenshot_2025-07-29_at_4.45.02_PM.png)

4. Under Campaign Type, select **Broadcast**.
5. Click **+Add marketing objective** to tag a marketing objective to the campaign. This helps classify the campaign to achieve better automation and reporting.

![fa36b81808d1c250b5dc5d0dca56492763530768180cab17c7704d1f0a2a8eb7 Screenshot 2025 05 23 at 6](https://files.readme.io/fa36b81808d1c250b5dc5d0dca56492763530768180cab17c7704d1f0a2a8eb7-Screenshot_2025-05-23_at_6.18.58_PM.png)

| Marketing objective             | Description                                                                                    |
| :------------------------------ | :--------------------------------------------------------------------------------------------- |
| Boost Sales                     | To increase overall sales. Campaigns like - EOSS, Deep discounts are an example of this        |
| Acquire customers               | Acquire new customers for your brand. Eg. Any acquisition campaign, referral, etc              |
| Promote specific products       | Promote a specific product, brand, or category eg. new shoes collection, winter launch, etc    |
| Collect feedback from customers | Collect feedback from customers to analyze their experience                                    |
| Improve retention               | Send offers, and coupons to retain existing customers like ATV, ABV booster, and RFM campaigns |
| Winback lapsed customers        | Send promotional offers to lapsed customers                                                    |
| Capture customer information    | For data collection like - Date of birth, gender, interest, anniversary, etc                   |
| Send greetings to customers     | Festival greetings such as Festivals, Birthdays, Anniversary                                   |
| Increase store visits           | Promote a specific store, city, or zone to increase the footfall                               |

If you are selecting "Promote specific products" or "Increase store visits" as a marketing objective, then refer to the following steps:

* **Promote specific products**

To promote a specific product, follow the given steps:

1. Click Promote specific products.
2. Select a category and/or item code, and then click on the menu expand icon '>'.
3. Select one or more products, which you want to promote through your campaign, and then click Done.
4. Review the selected product and/or item code, and then click Confirm.

![3b66deb fLD0X05gPZCN0qVoJ6o5ipURtLEhv3g4Uw](https://files.readme.io/3b66deb-fLD0X05gPZCN0qVoJ6o5ipURtLEhv3g4Uw.png)

* **Increase store visits**

To increase the store visits follow the given steps:

1. Click Increase store visits.
2. Select one or more options from the list, and then click on the menu expand icon '>'. Ex: Select store, and/or zn_sub_zone.
3. Select the store, and/or zone, which you want to promote through your campaign, and then click Done.
4. Review the selected store and/or zones, and then click Confirm

![9443252 7IlHptIipuetZeK  ipvCMpDWpDMtCZLyA](https://files.readme.io/9443252-7IlHptIipuetZeK__ipvCMpDWpDMtCZLyA.png)

<Note title="Note">
You can add a Conversion Goal to a campaign. However, this feature must be enabled for your organization. To enable it, please raise a JIRA ticket to the Capillary Product Support team. For more details, refer to the **[Conversion Goal](https://docs.capillarytech.com/docs/broadcast-campaign#what-is-a-conversion-goal)** documentation.
</Note>

6. To modify the campaign level test-control ratio and add a Google Analytics account, click **Show** of Advanced settings. See [Advanced Settings](https://docs.capillarytech.com/docs/campaign-settings#advanced-settings) to know how to configure it.

7. Click **Save campaign**.

![9bc296b dcNoTx7DKKtDuiYzvqJegdIsken95YuOeQ](https://files.readme.io/9bc296b-dcNoTx7DKKtDuiYzvqJegdIsken95YuOeQ.png)

## Create message

8. Click **New Message** to set up other things such as audience, content, delivery settings, and schedule the campaign.
9. Enter **Message name**, select the **Type of messages**, and **Optimization strategy** and click **Next** to continue. For more details, see [Create a message](https://docs.capillarytech.com/docs/create-message#/)
10. Click **Add audience** group to add recipients for the campaign. You can create an audience list in the following ways - [Create Segments using Filters](doc:create-segments-using-filters) , [Create audience group by uploading csv](https://docs.capillarytech.com/docs/audience-management#upload-csv-file) , and using [Audience combined list](https://docs.capillarytech.com/docs/audience-management#combine-existing-lists) .
11. Add [Campaign content](https://docs.capillarytech.com/docs/content-management) for different channels like SMS, Email, Facebook, WeChat, and more and edit as required For more details, refer [Engagement Channels](https://docs.capillarytech.com/docs/engagement-channels#/). For Email, unsubscribe tag is mandatory. You can also customize the [unsubscribe](https://docs.capillarytech.com/docs/configure-email-content#/customize-unsubscribe-landing-page) landing page.
12. To issue points or coupons through the campaign, click **+Add incentives**, and select your preferred offer or points strategy. To create a new offer see [Create Offer](https://docs.capillarytech.com/docs/create-offer-1#/create-offers) and to create a new points strategy, see [Points strategy](https://docs.capillarytech.com/docs/points-strategy#/) .
13. Schedule the campaign on your preferred date. You can also set to run the campaign repeatedly at equal intervals. For more information, see [Schedule Message](https://docs.capillarytech.com/docs/schedule-message#/) .
14. After setting up all the required parameters, in Delivery settings, click **Send for approval**. An email is sent to the admins of the org with the subject
    _Alert! Campaign approval needed._

![75cdb18 3ugw349ywxPX2gKKdi0WjObj6vAxUr4jUQ](https://files.readme.io/75cdb18-3ugw349ywxPX2gKKdi0WjObj6vAxUr4jUQ.png)

Once the admin approves the campaign, the campaign will go live as per the schedule. You will also receive a notification over email stating the Campaign message is approved.

## Approve message

Only authentic users of the org can validate and approve campaigns that are created.

To approve the campaign follow the steps below:

1. Click on the campaign that you want to approve.

![3a219ef lKbYKBYeCjH5XfAZMGe0cmigWWtHcYjGxw](https://files.readme.io/3a219ef-lKbYKBYeCjH5XfAZMGe0cmigWWtHcYjGxw.png)

2. Verify the campaign details. Click Edit to modify the campaign details if required and Click **Approve** to approve all the campaign messages. For a detailed help guide, see [Approve a message](https://docs.capillarytech.com/docs/approve-message#/)

![773438d rAZbNJkUHnwcXp7Ss6XAhhfykH4LbalX4w](https://files.readme.io/773438d-rAZbNJkUHnwcXp7Ss6XAhhfykH4LbalX4w.png)

* If you want to make any changes to the campaign, click **Edit** to modify the campaign and send it for approval again.

> 👍 Note
>
> * You can add more messages to a campaign using **New message** button.
> * You can also **Reject** a campaign that you wish to ignore.

## Check message delivery status

To check the status, do the following.

1. On Capillary InTouch, navigate to **Engage+**
2. Select a campaign.
3. Navigate to the **Delivery Rate**.

![6328a22 MessageDelivery](https://files.readme.io/6328a22-MessageDelivery.png)

<Note title="Note">
It may take approximately 12 to 24 hours for the Message Delivery Status to update on the Campaign Listings page. The tooltip provides an estimated time for when the delivery status will be available.
</Note>

# Tracking Campaign Performance based on Conversion Goals

The Conversion Goal feature in Engage+ helps you understand how well your campaigns are working. It shows whether your messages are encouraging customers to take desired actions such as making a purchase. This helps you understand the effectiveness of a campaign.
This feature tracks the number of customers who took action because of your campaign. You can define a conversion goal for each campaign. Once set, it monitors how many customers completed that goal after receiving your campaign message. This allows you to measure the true impact of your campaign on customer behavior.

## What is a Conversion Goal?

A Conversion Goal helps measure the effectiveness of a campaign by tracking the number of customers who complete desired actions, such as making a qualifying purchase, after receiving a campaign message. By setting up conversion goals, you can gain insights into campaign performance, allowing you to improve messaging and targeting for better future outcomes. You can create custom conversion goals and measure campaign success based on real customer behaviour.

## Key Features

The feature includes several key capabilities:

1. **Org-Level Default Conversion Goal Setting**: Allows users to **set a default conversion goal for all campaigns** in the organization to keep tracking consistent. Users with access, should have the ability to view, edit, or remove this default goal.
2. **Campaign-Level Conversion Goal Setting**: Allows users to **customize conversion goals for individual campaigns**. This can be done if there's no org-level default Conversion Goal is set up. Campaign-level goals are specific to that campaign and do not affect org-level settings or other campaigns.
3. **Tracking and Reporting**: Provides capabilities to analyze campaign performance through detailed metrics and reports.

<Note title="Note">
s
* This feature needs to be enabled for your organization by creating a JIRA ticket to the Capillary Product Support team.
* You can edit the conversion goal at any time before the first message in the campaign is approved. Once the first message is approved, the option to edit the conversion goal will no longer be available.
</Note>

# Configuring a Conversion Goal

When configuring a conversion goal, you define several parameters:

* **Conversion Events**: The events you want to track to measure campaign success.

<Note title="Note">
The supported customer events for the Conversion Goal currently focus on Transactional Events (customer makes a transaction).
</Note>

* **Conditions**: Based on the selected event, you can add conditions to decide which actions should be counted for campaign tracking. Multiple conditions can be added and combined using AND/OR operators.
* **Configuration Parameters**: These settings decide how a customer’s action is linked to a campaign message:

  * **Event Tracking Period**: This is the time period in which an event can be counted after a message is sent. You can choose a period like 15, 30, or 45 days, and decide if tracking starts when the message is sent, delivered, opened, or clicked.
  * **Message Interaction Status**: Choose when to start tracking conversions after the message is **sent**, **delivered**, **opened**, or **clicked**. This helps filter events based on how users interacted with the message.
  * **Attribution Strategy**: This decides which message is counted for the conversion. You can choose **First Touch** (first user interaction) or **Last Touch** (most recent interaction).

  ## How to Configure a Default Conversion Goal (Org-Level)

  You can set a default conversion goal for your organization. This sets a default goal for all campaigns unless you create a custom goal for a specific campaign.

  1. Navigate to  **Engage+** and click on the settings icon.
  2. Click on **Campaign Attribution**. Only users with org-level access can view this section.

  ![4677b25be3f353ec941ec00dfdc2941b1b50f73eac864f74afc1588264de3702 Screenshot 2025 05 06 at 4](https://files.readme.io/4677b25be3f353ec941ec00dfdc2941b1b50f73eac864f74afc1588264de3702-Screenshot_2025-05-06_at_4.30.17_PM.png)

  3. If no default goal is set, you will be allowed to add a new goal. If a default goal is already set, you will see it.
  4. Click **Add Goal** to set up the default conversion goal.

  ![647e2fd9f7893d93c3f4f5c9053cc655f4a5a27375018a4c42c5ef93806ff019 Screenshot 2025 05 06 at 4](https://files.readme.io/647e2fd9f7893d93c3f4f5c9053cc655f4a5a27375018a4c42c5ef93806ff019-Screenshot_2025-05-06_at_4.36.30_PM.png)

  3. Set up the **Conversion Goal**. To set it up , you can refer to the documentation [How to Configure a Conversion Goal](https://docs.capillarytech.com/docs/broadcast-campaign#/configuring-a-conversion-goal).

  Once a default org-level conversion goal is set, it appears automatically when you create a campaign. You can edit or remove it before the first message is sent. You can either Save your changes or Reset to Default to bring back the original goal. Removing it will show the “Add Goal” option again

  > 📘 Note
  >
  > You can edit the org-level conversion goal at any time. All campaigns created after the change will reflect the updated goal.

## How to Configure a Conversion Goal (Campaign Level)

1. Log in to **InTouch** and navigate to **Engage+** from the menu.
2. Click on **New campaign** to start creating a new campaign.
3. Enter a **Campaign name** and select the **Campaign duration**.
4. Click **Add goal** to set up the conversion goal.

![723d35c2f15a5953b710b5f8c8ed8ed46158244752946b43fdcb3c7638bd50da Screenshot 2025 04 30 at 2](https://files.readme.io/723d35c2f15a5953b710b5f8c8ed8ed46158244752946b43fdcb3c7638bd50da-Screenshot_2025-04-30_at_2.24.15_PM.png)

5. Choose the **conversion event** you want to track.

![700f87f5b829e31cf9d39bc3ca6a08aa48df0d1c54a5cb685b78699eebc1e091 Screenshot 2025 04 28 at 11](https://files.readme.io/700f87f5b829e31cf9d39bc3ca6a08aa48df0d1c54a5cb685b78699eebc1e091-Screenshot_2025-04-28_at_11.07.32_AM.png)

6. Click **+Add conditions** and fill in the required details based on what you want to track. You’ll see relevant fields based on the event you select in the condition section. You can specify whether to include or exclude the condition and add an operator and value.

![827846b24049ffd3797a2953ca634037ce6c440e9054ab0cb4ef291bf757be42 Screenshot 2025 05 06 at 3](https://files.readme.io/827846b24049ffd3797a2953ca634037ce6c440e9054ab0cb4ef291bf757be42-Screenshot_2025-05-06_at_3.59.28_PM.png)

<Note title="Note">
The operators `IN RANGE`, `CONTAINS`, `STARTS WITH`, and `ENDS WITH` are currently not supported.
</Note>

7. You can click **+Add condition** to add further conditions and combine them with the AND operator. Click Add group to add conditions and combine them with the OR operator. Note: The "Add Condition" button may be disabled if all input fields are not completed.

![d573ea958da7162a32c552a8f1837fda41cada4cc81afaab885a9a31d01d0094 Screenshot 2025 04 30 at 2](https://files.readme.io/d573ea958da7162a32c552a8f1837fda41cada4cc81afaab885a9a31d01d0094-Screenshot_2025-04-30_at_2.28.47_PM.png)

8. Under **Eligible period for conversion**, set the tracking period to track conversions and choose whether tracking should start after the message is sent, delivered, clicked, or opened.

The table below lists available options-

| Status    | Description                                                                                         |
| :-------- | :-------------------------------------------------------------------------------------------------- |
| Sent      | Tracking for conversion begins after the message is sent.                                           |
| Delivered | Tracking for conversion begins once it is delivered to the customer.                                |
| Clicked   | Tracking starts from the moment the customer clicks on a link or call-to-action within the message. |
| Opened    | Tracking for conversion begins when the message is opened by the customer.                          |

![7143e1e03ef3161fb80e1726299dba85e7e6f0bcc02b78a93a0d0e724d2f9afe Screenshot 2025 04 28 at 3](https://files.readme.io/7143e1e03ef3161fb80e1726299dba85e7e6f0bcc02b78a93a0d0e724d2f9afe-Screenshot_2025-04-28_at_3.10.23_PM.png)

9. Choose the **Message attribution logic** to decide which message in the campaign should be counted for the customer’s engagement.

   * **Last touch**: The user's last engagement with the campaign will be counted as the conversion.
   * **First touch**: The user's first engagement with the campaign will be counted as the conversion.

   <br />

   ![092fb75a91dbbe4ec728e5353f025df015ff8ec0b928219b046fe20d99c10275 Screenshot 2025 04 30 at 2](https://files.readme.io/092fb75a91dbbe4ec728e5353f025df015ff8ec0b928219b046fe20d99c10275-Screenshot_2025-04-30_at_2.49.46_PM.png)
10. Click **Save** to save the conversion goal configuration.
11. Click **Save campaign** to save all your campaign changes.

# Editing a Conversion Goal

## Editing a Conversion Goal (Org-Level)

1. Navigate to  **Engage+** and click on the settings icon.
2. Click on **Campaign Attribution**. A default goal is already set, it will be displayed automatically.

![581bb1e9239f19b984c64c52ada73823948e730ca9a8e8c5f48cee74ce0b3730 Screenshot 2025 05 06 at 5](https://files.readme.io/581bb1e9239f19b984c64c52ada73823948e730ca9a8e8c5f48cee74ce0b3730-Screenshot_2025-05-06_at_5.02.59_PM.png)

3. Click the three-dot menu in the top-right corner, and select **Edit Goal**.

![7ea18b79d93b3627d50a37ea8f4b692fde442b4e105c9083e0cc4fbfcc73f6c2 Screenshot 2025 05 06 at 5](https://files.readme.io/7ea18b79d93b3627d50a37ea8f4b692fde442b4e105c9083e0cc4fbfcc73f6c2-Screenshot_2025-05-06_at_5.04.46_PM.png)

4. After making the changes, click **Save** to update the conversion goal. Saving Changes will replace the existing goal with the new one.

<Note title="Note">
You can edit the org-level conversion goal at any time. All campaigns created after the change will reflect the updated goal.
</Note>

## Editing a Conversion Goal (Campaign Level)

1. Log on to **InTouch** of your cluster and navigate to **Engage+** from the menu.
2. Select the campaign you want to edit.

![d0f1e45cd11a2ffa6a47a26ef65ba0abe89a968c9505da806bedd42eb822e097 Screenshot 2025 04 30 at 2](https://files.readme.io/d0f1e45cd11a2ffa6a47a26ef65ba0abe89a968c9505da806bedd42eb822e097-Screenshot_2025-04-30_at_2.56.05_PM.png)

3. Navigate to the **Conversion Goal** block, click the three-dot menu in the top-right corner, and select **Edit Goal**.

![3429977323873ec7698981c7f7a7d97025851cb1f5dc145709a21e7f047d912e Screenshot 2025 04 30 at 3](https://files.readme.io/3429977323873ec7698981c7f7a7d97025851cb1f5dc145709a21e7f047d912e-Screenshot_2025-04-30_at_3.11.25_PM.png)

4. After making the changes, click **Save** to update the conversion goal.

![78539c0f1bda0901b5ac4702b6ef0e13917472deb2042e3b67eceb8009a716db Screenshot 2025 04 30 at 3](https://files.readme.io/78539c0f1bda0901b5ac4702b6ef0e13917472deb2042e3b67eceb8009a716db-Screenshot_2025-04-30_at_3.16.15_PM.png)

5. Click **Save campaign** to save all your changes.

<Note title="Note">
You can edit a campaign-level conversion goal anytime before the first message is sent or approved. Once the first message is approved, editing is no longer allowed.
</Note>

# Removing a Conversion Goal

## Removing a Conversion Goal (Org-Level)

1. Navigate to  **Engage+** and click on the settings icon.
2. Click on **Campaign Attribution**. A default goal is already set, it will be displayed automatically.

![581bb1e9239f19b984c64c52ada73823948e730ca9a8e8c5f48cee74ce0b3730 Screenshot 2025 05 06 at 5](https://files.readme.io/581bb1e9239f19b984c64c52ada73823948e730ca9a8e8c5f48cee74ce0b3730-Screenshot_2025-05-06_at_5.02.59_PM.png)

3. Click the three-dot menu in the top-right corner, and select **Remove Goal**.

![5e60af5f5187905b909502e4bc24f8886056831bc7b2ea751391041d39ee91cc Screenshot 2025 05 06 at 5](https://files.readme.io/5e60af5f5187905b909502e4bc24f8886056831bc7b2ea751391041d39ee91cc-Screenshot_2025-05-06_at_5.47.01_PM.png)

Confirming will remove the goal and take you back to the screen where no goal is set, allowing you to add a new one.

<Note title="Note">
Once the Org Level conversion goal is removed, any campaigns created after the removal of the Org Level conversion goal will not have a conversion goal set by default.
</Note>

## Removing a Conversion Goal (Campaign Level)

1. Navigate to **Engage+** from the menu.
2. Select the campaign you want to edit.

![ab745de987213b7c80dd8b6e00bbfec860794e527df2973da5e9172ed2edf0b3 Screenshot 2025 04 30 at 2](https://files.readme.io/ab745de987213b7c80dd8b6e00bbfec860794e527df2973da5e9172ed2edf0b3-Screenshot_2025-04-30_at_2.56.05_PM.png)

3. Navigate to the **Conversion Goal** block, click the three-dot menu in the top-right corner, and select **Remove Goal**.

![88754db10253140a60a9df6c527606ce2863e507390386f4a406d174ec136043 Screenshot 2025 04 30 at 3](https://files.readme.io/88754db10253140a60a9df6c527606ce2863e507390386f4a406d174ec136043-Screenshot_2025-04-30_at_3.20.35_PM.png)

4. The conversion goal has been successfully removed from the campaign. Click **Save Campaign** to save the changes.

<Note title="Note">
Once the first message is sent or approved, the option to remove the conversion goal will no longer be available.
</Note>

# Tracking and Reporting

The Conversion Goal feature helps track and report campaign performance.

## Tracking and Reporting (Org Level)

1. Navigate to **Engage+** from the menu.
2. On the campaign listing page, you can see a summary or a overall performance of how all campaigns are performing. It Shows the overall performance of campaigns for the last 7 days, 1 month, 3 months, and 6 months.
   For detailed information refer to the documentation [view campaign reports](https://docs.capillarytech.com/docs/view-campaign-reports).

| Metrics            | Description                                                                                                                                                                          |
| :----------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Contacted Customer | The number of customers who were reached out to during the campaign.                                                                                                                 |
| Delivery Rate      | The percentage of sent messages that have been delivered (received by the customers) successfully.                                                                                   |
| Hit Rate           | The percentage of customers to whom the communication has been sent out and has transacted in the campaign duration. Hit Rate = 100* (Responding Customers) / (Contacted Customers). |
| Responder Sales    | Total sales value generated from customers who engaged with the campaign message.                                                                                                    |
| Incremental Sales  | Additional generated because of the campaign, above normal sales. Incremental Sales = (Test Hit Rate - Control Hit Rate) Test Contacted Test Responders Spend Per Customer.          |
| Credits Remaining  | The number of campaign credits left in the billing account. A negative value indicates that the credit limit has been exceeded due to campaign activity.                             |

![d53d9a7a2d3ab22d5f70cfe6ca0b4370650c86257f20d3eed5bfb9ede9736d74 Screenshot 2025 05 07 at 11](https://files.readme.io/d53d9a7a2d3ab22d5f70cfe6ca0b4370650c86257f20d3eed5bfb9ede9736d74-Screenshot_2025-05-07_at_11.40.35_AM.png)

3. Select the credits remaining icon to view reports. This will open a new window on Insights+. For more information refer the [Insight+](https://docs.capillarytech.com/docs/insights-product-navigation)documentation.

<Note title="Note">
The data gets reflected with 24hours in the overall performance dashboard.
</Note>

## Tracking and Reporting (Campaign Level)

1. Navigate to **Engage+** from the menu.
2. On the campaign listing page select the campaign you want to track.

![398a381f917fb821d59562c25d589a3f1ae74ece64cc4625b2d29c2e4a3fe930 Screenshot 2025 05 07 at 12](https://files.readme.io/398a381f917fb821d59562c25d589a3f1ae74ece64cc4625b2d29c2e4a3fe930-Screenshot_2025-05-07_at_12.03.33_PM.png)

3. Select **See Reports** to view a summary of campaign performance.

![3d7b6bbee9733526c9f9644b0ceaaf2d9591ebdd951bf49f96be476846d8c7be Screenshot 2025 05 07 at 12](https://files.readme.io/3d7b6bbee9733526c9f9644b0ceaaf2d9591ebdd951bf49f96be476846d8c7be-Screenshot_2025-05-07_at_12.07.10_PM.png)

It includes key campaign metrics such as Contacted customer, Message Sent, Message Delivered, Message not Delivered, Unsubscribed.

| Metrics               | Description                                                                                         |
| :-------------------- | :-------------------------------------------------------------------------------------------------- |
| Contacted customer    | Total number of customers the campaign message was sent to.                                         |
| Message Sent          | Total number of messages sent during the campaign. This count doesn’t include message credits used. |
| Message Delivered     | Total number of messages delivered to customers during the campaign. Credit usage is not included.  |
| Message not Delivered | Total number of messages that failed to reach customers during the campaign.                        |
| Unsubscribed          | Total number of customers who have unsubscribed from the channel.                                   |

## Use Case

### Scenario – Festival Campaign Conversion Tracking

A retail brand launches a Diwali campaign offering 20% off on purchases above ₹3000 at select stores. The goal is to track how well the campaign drives customer purchases using a Conversion Goal.

**Requirement**

* Track how many customers make a transaction above ₹3000 at participating stores after receiving the campaign message.
* Start tracking conversions up to 20 days after the message is delivered.
* Count the last message interaction as the conversion source.

To set this up, follow the steps below.

1. Log on to **InTouch** of your cluster and navigate to **Engage+** from the menu.
2. Click on **New campaign** to start creating a new campaign.
3. Enter a **Campaign name** and select the **Campaign duration**using the calendar.
4. Click **Add goal** to set up the conversion goal.

![cf5d455d7e70846cd32be72df706a93aa0cf15c207403c05369e5876c403204f Screenshot 2025 05 04 at 8](https://files.readme.io/cf5d455d7e70846cd32be72df706a93aa0cf15c207403c05369e5876c403204f-Screenshot_2025-05-04_at_8.00.21_PM.png)

5. Choose the **Conversion Event**.

![700f87f5b829e31cf9d39bc3ca6a08aa48df0d1c54a5cb685b78699eebc1e091 Screenshot 2025 04 28 at 11](https://files.readme.io/700f87f5b829e31cf9d39bc3ca6a08aa48df0d1c54a5cb685b78699eebc1e091-Screenshot_2025-04-28_at_11.07.32_AM.png)

6. Click **+Add conditions** and fill in the required details.

![55612a216a7c3679120b6db91741be7748d2c269b34d10cc372441a7aa5ea347 Screenshot 2025 05 04 at 8](https://files.readme.io/55612a216a7c3679120b6db91741be7748d2c269b34d10cc372441a7aa5ea347-Screenshot_2025-05-04_at_8.06.18_PM.png)

10. Click **Save** to save the conversion goal.
11. Click **Save campaign** to save all your changes.

![54fa5309938b84017e5bb14f561b4ad9b5ae3408f2dc70e09c148eaaf540a811 Screenshot 2025 05 04 at 8](https://files.readme.io/54fa5309938b84017e5bb14f561b4ad9b5ae3408f2dc70e09c148eaaf540a811-Screenshot_2025-05-04_at_8.07.59_PM.png)
