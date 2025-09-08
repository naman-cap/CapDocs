---
title: Create Message
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
## Add a message

1. Click **New Message**.

![e9b2f31  jYLwbOld9fu 881EpYOHtrr9LwILJRqHQ](https://files.readme.io/e9b2f31-_jYLwbOld9fu-881EpYOHtrr9LwILJRqHQ.png)

2. Enter a message title, select a message type (example: Broadcast), and then click Next.

![b60f58e iOZitU8LXXIM9PnP4pb8aYk7ICsCldsC3Q](https://files.readme.io/b60f58e-iOZitU8LXXIM9PnP4pb8aYk7ICsCldsC3Q.png)

3. In the **Loyalty program/Card series**, choose the loyalty program or card series for which you want to create the message. The selected scope is applied to the audience and content of the message.

<Note title="Note">
This option is available only for MLP-enabled orgs.
</Note>

**MLP Scope in Campaign**

Many organizations either conglomerates or single entities might require to configure multiple loyalty programs.

* Large conglomerates may require to set up different loyalty programs for their sub-organizations.\
  **For example**:
  A conglomerate that operates in different verticals such as hotels, airlines, retail, etc. under different brand names. All these brands have their own loyalty program. Again, a customer can be part of more than one Loyalty Program.
* An organization may partner with various other companies and have different partner-loyalty programs with different partners.\
  **For example**:
  A petroleum company has partnered with many companies. It has rolled out partner-loyalty programs with 130+ partners. It gives partner-co-branded loyalty cards to its customers. Customers use these cards during purchases and avail of points/discounts and other benefits. Again, a customer can be part of more than one partner-loyalty program.

Either way, a customer from the same organization becomes part of multiple loyalty programs. To ensure personalized communication to customers, it becomes important to uniquely segment customers in the context of a particular loyalty program and then interact with them. This will help the brands to drive KPIs such as cross-vertical sales, and boost average transaction value, and transaction frequency.

In addition to the filter to segment customers based on their subscription to a specific loyalty program, the following filters are also added to the scope of the loyalty program.

* Loyalty program registration date
* Active points
* Redeemed points
* Number of transactions

**For Example**:\
If marketers were to identify customers who have more than 5000 active points from the loyalty program, then the active points filter should consider how many active points the customer has with this Loyalty program and not the total active points she has from all loyalty programs combined. This is achieved when

* the scope/information about the loyalty program is passed to each filter
* filters honor the scope and accordingly filter users.

**Feature updates**

The following changes are added in Engage+.

1. In Campaign, Message users can now select a Loyalty Program. This selected program/ scope will be passed to Filters.

<Note title="Note">
s
* If a loyalty program is chosen, then the audience through filters contains customers of that Loyalty Program.
* Any other filter chosen will work in accordance with the scope.
</Note>

2. In the Campaign Message, users can select a Loyalty Program. This selected program/ scope will be passed to Labels.

<Note title="Note">
s
If in creatives, any labels such as total\_points, points\_expiry\_date are chosen, then the values of the loyalty program passed in scope.
</Note>

**Use case**

1. **Customer Understanding**: One customer can be part of multiple loyalty programs. A marketing manager would want to reach out to customers belonging to a certain loyalty program and send promotional messages with tags such as current points, card number, expiry date, coupons, and promotional points.\
   In a single promotional message, the marketing manager would not like to talk about different loyalty programs (as these could be entirely different organizations or partners).
   With the new development, the scope gets restricted to the loyalty program chosen, so the audience targeted remains specific to the selected loyalty program and the labels resolve to values with respect to the selected loyalty program. Hence, the error of sending messages to non-intended audiences and the error of showing wrong points, card numbers, expiry dates, etc. in the content reduces significantly.
2. **Loyalty program-specific use case**: A brand can have programs for different partners or sub-organizations. With each partner or sub-organization, they might want to focus on different strategies or objectives such as boosting sales, getting feedback, and running offers.\
   For example:

* Increase transaction frequency: For Partner 1, if the brand wants to increase transaction frequency, using the Scope filter, the marketing manager will be able to first identify the audience for Partner 1 and then use transaction filters to identify customers with a low visit count for Partner 1 (only). Then the identified customers can be given relevant offers to promote visits to the store and transact with Partner 1.
* Increase sales: Loyalty sales for sub-organization A/ Partner A is low. The marketing manager can identify the audience only for that loyalty program and run campaigns for increasing visits, ATV, ATB, etc. Communication/ offers can be personalized by segmenting customers. Filters such Recency \< 3 months, ATV > $500, active point = 1000, transaction frequency = 7 times/ year etc. can be applied.

**Prerequisites**

1. Org needs to have Multiple Loyalty Programs.
2. Brand or Capillary POC can raise a ticket with the sustenance team requesting to enable the \<> campaigns.

**Enhancements**

1. Added Scope selection in the message creation flow to target customers belonging to a specific loyalty program.

<Note title="Note">
This scope will remain valid throughout the Campaign Message and thus will get applied to Filters and Labels.
</Note>

![5869421 lNyChLOGkxUVBQMPTaz71joiVoEgjA1d0A](https://files.readme.io/5869421-lNyChLOGkxUVBQMPTaz71joiVoEgjA1d0A.png)

To use this feature, follow these steps.

1. The Loyalty program can be selected from the dropdown menu. Search functionality is also provided for ease of use.
2. Since there can be multiple Card Series/ OUs belonging to the same Loyalty program, the selection needs to be done at the Card Series or OU level.

Usage example:

* For orgs, one loyalty program may encompass multiple card series. Hence, the scope can be selected at the Card Series level. Marketers can select Loyalty Program > Card Series.
* For Petron Org, however, there is a 1-1 mapping between loyalty program and card series hence the scope can be selected at Card series structure.

![aaac03c QyWgPAc9MdoiN7ilPUJQBS3XlL1DWBZF0Q](https://files.readme.io/aaac03c-QyWgPAc9MdoiN7ilPUJQBS3XlL1DWBZF0Q.png)

* For orgs such as Tata, one loyalty program like the Tata Group Loyalty Program may encompass loyalty programs for different OUs such as Titan, Tanishq, etc. Hence the scope can be selected at the OU level and hence marketers can select Loyalty Program > OU.

<Note title="Note">
s
* Once the scope is selected it will remain the same throughout the Campaign Message and cannot be changed.
* None needs to be selected in case the Loyalty Program scope is not needed.
</Note>

2. Filters in Audience Manager will honor the selected scope: If any message scope is 'None’ then in Audience Group the selected Loyalty Program is passed as scope. The Filtered Customers List will have customers who belong to the selected Loyalty Program.

* Creating Audience by applying Filter:

![8a3d6af wdItssaOAaaYLz5EjdDlnRpsLqlaZEPXxw](https://files.readme.io/8a3d6af-wdItssaOAaaYLz5EjdDlnRpsLqlaZEPXxw.png)

Transaction and Loyalty Filters can now understand scope definition -

* **Transaction filter example**: If Loyalty Program/Card Series A is selected and we give the condition “Include customers whose transaction count is 0-5 during specific date range", then only customers of the card series A who have done less than 5 transactions appear in the list.\
  Since one customer can belong to more than one Loyalty Program, 5 transactions might have been done with a combination of Card Series A/B/C. Without passing scope the identification of the right customer is not possible.
* **Loyalty filter example**: If Loyalty Program/Card Series A is selected and we give the condition “Include customers whose active points are in the range of 0-500 then customers who have less than 500 active points with Card Series A will only appear in the list.\
  Since one customer can belong to more than one Loyalty Program, less than 500 points might have been with a combination of Card Series A+B+C. Without passing scope the identification of the right customer is not possible.
* Limitation: There is no way for Engage+ backend to understand if the Audience List (filtered/ uploaded) contains an Audience belonging to a single Loyalty Program/ Card Series type.\
  If the scope of the Campaign is Loyalty Program A / Card Series A and the audience list contains customers from card series A and B then people from series B will not be reached out/ skipped.

Hence, it is advisable to create an Audience list with the correct scope or upload a list with only one type of Loyalty program customer and then use the same in the Campaign.

3. **Label resolution for content will be as per the selected scope**: If for any message scope is ‘not-None’ then for Label resolution the selected Loyalty Program is passed as scope. The Loyalty and card-related Labels/ tags will get resolved for the respective Program only.

For example: If the selected Loyalty program is A and the tag used in creatives is \{\{total\_points\_to\_expire\_day(7)}} then the Card Series A points will be mentioned in the message.

New Labels for Card Series (Card Number, Card Issue Date, Card Series Name) have also been added.\
Usage Nuance:
For a petroleum company, one customer can have more than one card from the same Card series/ Loyalty Program. In case of any conflict on tag resolution, the card which was more recently used in a transaction or recently registered will be used.

![0eca994 cotFUqEz1WiNuKpwT4Sf LXxjEx1NWvEpA](https://files.readme.io/0eca994-cotFUqEz1WiNuKpwT4Sf-LXxjEx1NWvEpA.png)

**Future scope**

**Multiple Loyalty Programs selection in the scope:**

Marketers will be able to select more than one Loyalty Program as a scope. If Loyalty Program A and B are selected together then customers only in Loyalty Program A, only in Loyalty Program B, and both in Loyalty Program A & B will be part of the campaign. The tag resolution will also happen for both of the Loyalty Programs.

4. To enable message personalization, enable the **Optimization Strategy** toggle button

![be62792 a5wsi26KQmqcBQLmO7MiW1mD3TUdSKuTlw](https://files.readme.io/be62792-a5wsi26KQmqcBQLmO7MiW1mD3TUdSKuTlw.png)

* **Personalization**: Select this option to allow personalize your message based on the product, region, and time. A single message can have different content for different audiences based on all the above categories.
* **Channel priority**: This option allows reaching customers through different channels based on their availability without the need for creating multiple messages or campaigns. This helps in effectively minimizing the cost of communication and maximizing the probability of conversion by prioritizing channels that can give higher ROI.\
  For example, you can contact the audience on WeChat and SMS. If customers are not reachable on SMS, contact through email, and so on.
* **X-Engage**: X-Engage campaigns enable Orgs to engage with their customers through multiple channels, including all direct channels like SMS, Email, Mobile Push; and ads. channels like Facebook, Instagram, Google, and Youtube. For details, see X-Engage.

## Add audience

The Audience is the recipient of your campaign message. You can create an audience group either by uploading the audience data or by filtering the parameters. The scope you select while creating the campaign auto-applies to the audience filters.

To add an audience group to a campaign message, follow these steps.

1. Click Add audience group > Create audience group.
2. In Name, enter the name of the new audience group.
3. In the Loyalty program/Card series, choose the scope of the audience from the list of loyalty programs or card series. You will see this option only for MLP-enabled orgs.

<Note title="Note">
The scope selected while creating a new message is auto-applied to the filters.
</Note>

![9760542 5BciAVaEr02akG3Rfx0r27H2SfTVcJfpZw](https://files.readme.io/9760542-5BciAVaEr02akG3Rfx0r27H2SfTVcJfpZw.png)

![5bada5c 7sydpIq3tQqn6CJspM6ZMlxHz1ReUNGELg](https://files.readme.io/5bada5c-7sydpIq3tQqn6CJspM6ZMlxHz1ReUNGELg.png)

4. Click **Continue**.

![a37f80d 7sydpIq3tQqn6CJspM6ZMlxHz1ReUNGELg](https://files.readme.io/a37f80d-7sydpIq3tQqn6CJspM6ZMlxHz1ReUNGELg.png)

<Note title="Note">
* To exclude an audience group from the selected audience, enable the Exclude audiences option using the toggle button. Click +Add audience group and create or select an audience group. The selected audience will be excluded from the campaign.
* To create a new audience group using filters, see [Create audience group using filters](https://docs.capillarytech.com/docs/audience-management#using-audience-filters).
* To create a new audience group by uploading CSV, see [Create audience group by uploading CSV](https://docs.capillarytech.com/docs/audience-management#upload-csv-file).
</Note>

## Add creative (campaign message)

When the loyalty program or card series is selected while creating a campaign, the labels related to the loyalty program or card series will include values pertaining to the selected program. Creative is the campaign message content. You can create multiple creatives in a campaign.

The scope is applicable for the labels from the categories of customer, card series and points expiry, and slab expiry.

<Note title="Note">
This is not applicable for the MLP- disabled orgs.
</Note>

1. Click **Add creative**.

![1adf5902429e873bf57bcb6f80a945c5922434ce94f83879916b1d8f578ad756 Screenshot 2025 04 14 at 11](https://files.readme.io/1adf5902429e873bf57bcb6f80a945c5922434ce94f83879916b1d8f578ad756-Screenshot_2025-04-14_at_11.57.12_AM.png)

2. Select a creative type: SMS, Email, Mpush or WhatsApp.

![05bb0e25149040bb4088a1a8eb1a7a9c7382aa80d2cc3dc401311371a42c768e Screenshot 2025 04 14 at 11](https://files.readme.io/05bb0e25149040bb4088a1a8eb1a7a9c7382aa80d2cc3dc401311371a42c768e-Screenshot_2025-04-14_at_11.54.41_AM.png)

3. Under the selected creative type, click **Select** on an existing message or click **Create New** to create a new message.
4. Review the message content, and the message tags, and then click **Done**.

<Note title="Note">
Optout tag is compulsory to include in SMS content.\
Unsubscribe tag is compulsory to include in the email content.
To create SMS content, see [Create SMS content](https://docs.capillarytech.com/docs/create-sms-content).
To create email content, see [Create email content](https://docs.capillarytech.com/docs/create-email-content).
To create mobile push content, see [Create mobile Push content](https://docs.capillarytech.com/docs/create-mobile-push-content).
To create line content, see [Create line content](https://docs.capillarytech.com/docs/create-line-content).
To create Viber content, see [Create Viber content](https://docs.capillarytech.com/docs/create-viber-content).
To create WhatsApp content, see [Create WhatsApp content.](https://docs.capillarytech.com/docs/create-whatsapp-content)
</Note>

## Add incentive (campaign offer/points strategy)

The incentive is the campaign offer or points strategy. This tab lets you add coupons and points to a campaign message. You can assign offers and points to customers without sending any communication. For example, you can create an offer with a static coupon and assign it to an audience list. You can then send a communication to the selected audience using some external tool. If you have selected, campaign personalization, refer to Content personalization for Creative.

To create an incentives only campaign:

1. Create a Campaign and navigate to the **New Message** creation page.

![a4a3083234f2bc683fe630f27aaca0a0c25dc0004a7ff5a553b378524fae9c96 image](https://files.readme.io/a4a3083234f2bc683fe630f27aaca0a0c25dc0004a7ff5a553b378524fae9c96-image.png)

2. In **Audience**, add your preferred audience lists to the campaign and navigate to the Content section. You can create an audience list in the following ways - [using filters](https://docs.capillarytech.com/docs/audience-management#using-audience-filters), [uploading CSV](https://docs.capillarytech.com/docs/audience-management#upload-csv-file), [combining existing lists](https://docs.capillarytech.com/docs/audience-management#combine-existing-lists).
3. In **Content**, enable the **Incentives only** toggle button.

![37cc808545441106560d0690c01de194e94c405a03a3114931a7de8f56703b5f image](https://files.readme.io/37cc808545441106560d0690c01de194e94c405a03a3114931a7de8f56703b5f-image.png)

4. Click on **Add incentives** and choose your desired incentive.

* Select **Add offers** to add coupon series and claim the desired offer. To create a new offer, see [Create offers](https://docs.capillarytech.com/docs/create-offers).
* Select **Add points** to add a points strategy and select the desired points allocation and points expiry strategies. To create a new points strategy, see [Points strategy](https://docs.capillarytech.com/docs/points-strategy).

![1b92cad adLCM28iehN4XWu6Ftx iQN2GWq6xliJrQ](https://files.readme.io/1b92cad-adLCM28iehN4XWu6Ftx_iQN2GWq6xliJrQ.png)

<Note title="Note">
You can add both points strategy and offer in the message content. To add another incentive type, click **ADD INCENTIVES** and select the other option.
</Note>

5. Click **Continue** to proceed.

## No communication message campaign

For FTP-enabled orgs, the *No Communication FTP Campaign* allows configuring only incentives (coupons/points) without any communications and exporting the data to an FTP server. The org can get the campaign details from the FTP server and can use the data to send communications using a third-party application.\
To create a No communication message campaign:

1. Create a Campaign and navigate to the \_New Message \_creation page

![1bb2ee1f9866d12fdf6315e26a3721c1927c050b1227cf4a29da64b339e5396c image](https://files.readme.io/1bb2ee1f9866d12fdf6315e26a3721c1927c050b1227cf4a29da64b339e5396c-image.png)

2. In **Audience**, add your preferred audience lists to the campaign and navigate to the **Content** section. You can create an audience list in the following ways - [using filters](https://docs.capillarytech.com/docs/audience-management#using-audience-filters), [uploading CSV](https://docs.capillarytech.com/docs/audience-management#upload-csv-file), [combining existing lists](https://docs.capillarytech.com/docs/audience-management#combine-existing-lists).
3. In **Content**, enable the **No communication message** toggle button

![1945a409adf42b45acee38183714352ba77cf20eebfc65f43d5e428d06474679 image](https://files.readme.io/1945a409adf42b45acee38183714352ba77cf20eebfc65f43d5e428d06474679-image.png)

4. Click **Add FTP location** and select the FTP to which you want to export the campaign details.

![c755ab322f53c5d5cfae0c88a5fd1faef542de44fcfb1c135c1aee7f8e53c7ce image](https://files.readme.io/c755ab322f53c5d5cfae0c88a5fd1faef542de44fcfb1c135c1aee7f8e53c7ce-image.png)

5. Using **+ Add column**, add the columns that you want to export. By default, the Customer ID is selected. For example, offer name, offer expiry, customer name.
6. To export message content, define the message in the **Message** box. You need to have all the tags used in the message as CSV columns. So, ensure that you add the tags that you use in the message as columns.\
   The message will be exported as the last column.

![9fdc85b5fb8fea64dd27aa0c24dfbd70689f87cd0151654f8bbda0cfe013661e image](https://files.readme.io/9fdc85b5fb8fea64dd27aa0c24dfbd70689f87cd0151654f8bbda0cfe013661e-image.png)

7. Click **Done** to continue.

![6edd55e3f237a014ff102e1737f10aeb94087c05731471cbcd337f284be172b8 image](https://files.readme.io/6edd55e3f237a014ff102e1737f10aeb94087c05731471cbcd337f284be172b8-image.png)

8. Click **Add Incentives** to attach a point strategy/offer.

* Select **Add offers** to add coupon series and claim the desired offer. To create a new offer, see [Create offers](https://docs.capillarytech.com/docs/create-offers).
* Select **Add points** to add a points strategy and select the desired points allocation and points expiry strategies. To create a new points strategy, see [Points strategy](https://docs.capillarytech.com/docs/points-strategy).

9. Click **Continue** to proceed to schedule the campaign.

<Note title="Note">
When the message is executed, the customer ID along with the selected labels are exported to the configured FTP location as a CSV file. The last column will have the message content replacing the tags used in the message with dynamic values of the respective customer.
</Note>

## Schedule date and time

The schedule is a message delivery time frame. The schedule also includes repetitive and periodic delivery of campaign messages.

![de8d12f 8pPrNpvu2gX9G141F0pgRcnpgoHGhW nVw](https://files.readme.io/de8d12f-8pPrNpvu2gX9G141F0pgRcnpgoHGhW_nVw.png)

1. Delivery schedule: The message will be delivered based on the selected schedule.
2. Delivery Settings: The delivery setting allows you to set sender id, enable POC, and use a tiny URL.

<Note title="Note">
* To know more about each delivery schedule, see the [Message delivery schedule](https://docs.capillarytech.com/docs/schedule-message).
* To know more about delivery settings, see [Delivery settings](https://docs.capillarytech.com/docs/delivery-settings).
</Note>

## Send for approval

Review all the message information, and then click Send for approval. The created message will be displayed under the campaign on the campaign dashboard page, with Awaiting approval status.

![7b8532d 2lYPf7YdeG2WfzrJRigx1V9runQEGzYvWg](https://files.readme.io/7b8532d-2lYPf7YdeG2WfzrJRigx1V9runQEGzYvWg.png)

<Note title="Note">
* To approve a campaign, see [Approve message section](https://docs.capillarytech.com/docs/approve-a-message).
* To reject a campaign, see the [Reject message section](https://docs.capillarytech.com/docs/reject-a-message).
</Note>