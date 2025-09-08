---
title: Referral Campaign
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
> Referral Campaign can be created from the old UI only.

Referral campaigns help you acquire new customers by using your existing customers' networks. Existing customers can refer their friends and contacts to visit your store. You can configure your referral campaigns to reward both the referrer (the existing customers who provide their friends' email addresses or phone numbers) and the referee (the friends of existing customers who receive the invitation) when the referee enrols in your loyalty program or makes transactions.

![ ](https://files.readme.io/7d94bd6e67fe2039dcb5ac8b7e8fa495eb44c4a3cf0174d3461cf7dc53d0c4c2-referral_campaign.png)

# Configure a referral campaign

Perform the following to up a referral campaign from start to finish.

1. [Configure a referral code](https://docs.capillarytech.com/docs/referral-campaign#configure-referral-code) - Generate unique codes to track referrals effectively.
2. (Optional) Validate the Referral code using the [Validate referral code](https://docs.capillarytech.com/reference/validate-referral-code) API.
3. [Configure the referral campaign details](https://docs.capillarytech.com/docs/referral-campaign#configure-referral-campaign-details) - Define the campaign’s name, validity, and objective.
4. [Configure a message](https://docs.capillarytech.com/docs/referral-campaign#configure-message-post-referral) - Define communication templates for messages to be sent after the referral is completed.
5. [Configure the incentives](https://docs.capillarytech.com/docs/referral-campaign#configure-incentive) - Set up the rewards for the referral campaign.
6. [Create a broadcast Campaign](https://docs.capillarytech.com/docs/referral-campaign#create-broadcast-campaign)- Define communication templates for sharing referral codes and send referral campaign messages to a large audience for maximum reach and engagement.
7. [Create & Send the Referral Campaign Message](https://docs.capillarytech.com/docs/referral-campaign#create--send-referral-campaign-message) - Communicate referral details to the target audience for engagement and conversions. Ensure to add the **referral unique code** tag.
8. (Optional) Refer a new customer using the [Refer customer](https://docs.capillarytech.com/reference/refer-customer) API.

## Configure referral code

Referral codes are unique identifiers shared by existing customers (referrers) with their friends and contacts (referees) to promote your brand. You can configure your referral codes to ensure they are easy to use, secure, and aligned with your campaign objectives.

To generate a unique code for the referral campaign and track referrals effectively, you need to configure the referral code. Follow these steps to do so.

To configure,

1. Navigate to **Engage+** > **Campaigns** > **Settings**.
2. On the settings page, select **Referral configuration**.

![262457b Screenshot 2024 06 18 113333](https://files.readme.io/262457b-Screenshot_2024-06-18_113333.png)

3. On **Define referral code**, you can select one of the following options:
   * **Random**: The system will generate random referral codes.
   * **Custom**: You can customise the referral codes.
4. On selecting **Random**, perform the following options:
   a. In the **Minimum code length** field, you can enter the number that sets the minimum number of characters that you want for your referral code.
   b. Select **Save**.
5. On selecting **Custom**, perform the following options:
   a. On the **Define character set** section, you can select the following options:
   * **Uppercase:** This option will make the characters in your referral code uppercase.
   * **Lowercase:** This option will make the characters in your referral code lowercase.
   * **Numbers:** This option will add numbers to your referral code.

![7f41069 Screenshot 2024 06 18 122013](https://files.readme.io/7f41069-Screenshot_2024-06-18_122013.png)

b. In the **Minimum code length** field, you can enter the number that sets the minimum number of characters that you want for your referral code.

c. On the **Add prefix** section, enable the button to add characters at the beginning of your referral code.

d. On enabling **Add prefix**, select one of the following options:

![1528ff8 custom string](https://files.readme.io/1528ff8-custom_string.png)

* When you select **Custom string**, you can enter the desired characters that you want as a beginning for your referral code in the provided field.
* When you select **Profile attribute**, You can choose **First Name** or **Last Name** of the referrer from the drop-down menu to use as the beginning of your referral code.

![013adf2 Screenshot 2024 06 18 124332](https://files.readme.io/013adf2-Screenshot_2024-06-18_124332.png)

e. To configure the maximum length for your prefix, check the **Maximum prefix length** box and enter the desired length number in the provided field.

f. On **Add suffix**, enable the button to add characters at the end of your referral code.

g. On enabling **Add suffix**, select one of the following options:

![ed6b994 Screenshot 2024 06 18 135318](https://files.readme.io/ed6b994-Screenshot_2024-06-18_135318.png)

* When you select **Custom string**, you can enter the characters that you want as an ending for your referral code in the provided field.
* When you select **Profile attribute**, you can choose **First Name** or **Last Name** from the drop-down menu to use as the ending for your referral code.

  h. To configure the maximum length for your prefix, check the Maximum prefix length box and enter the desired length number in the provided field.

6. Select **Save**.

![31fb8c8 Screenshot 2024 06 24 130325](https://files.readme.io/31fb8c8-Screenshot_2024-06-24_130325.png)

<Note title="Note">
If needed, you can validate your referral code using the [Validate Referral Code](https://docs.capillarytech.com/reference/validate-referral-code) API.
</Note>

## Configure referral campaign details

Configuring referral campaign helps you customize how your referral program works. It involves setting up the rules, rewards, and conditions to ensure the campaign runs smoothly and successfully. You can create a referral campaign using the old campaign manager.

To create a referral campaign, follow these steps:

1. On the InTouch portal, select **Home**from the left-hand corner.

2. Select **Engage+** from the sidebar menu.

![31313fc05c6c0826b9ea98335dbb8c8b278c48425ab21fcb9767ed89fdde26ec image7](https://files.readme.io/31313fc05c6c0826b9ea98335dbb8c8b278c48425ab21fcb9767ed89fdde26ec-image7.png)

3. Select **Open old campaign manager**.

![0186aef6b94081469abfbc530e735357dd41ec546ea8fd19cd37e6f39e63538e image5](https://files.readme.io/0186aef6b94081469abfbc530e735357dd41ec546ea8fd19cd37e6f39e63538e-image5.png)

4. Select **+New Campaign** from the **Campaigns Home** page.

![f3e1651b98deb5bb1c87e24b3348a0b8e7dff7809b0e5b85e68589dab7162256 image2](https://files.readme.io/f3e1651b98deb5bb1c87e24b3348a0b8e7dff7809b0e5b85e68589dab7162256-image2.png)

5. Choose **Referral**as the campaign type from the dropdown menu.
6. Enter the required details for the referral campaign and select appropriate configuration settings.

#### The table below provides descriptions of each field.

<Table>
  <thead>
    <tr>
      <th>
        **Field**
      </th>

      <th>
        **Description**
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Campaign Name
      </td>

      <td>
        Name of the campaign.
      </td>
    </tr>

    <tr>
      <td>
        Description
      </td>

      <td>
        Brief description of the campaign.
      </td>
    </tr>

    <tr>
      <td>
        Valid between
      </td>

      <td>
        The date range for which the campaign is valid for.
      </td>
    </tr>

    <tr>
      <td>


        [Campaign Objective](https://docs.capillarytech.com/docs/referral-campaign#the-table-below-provides-descriptions-of-each-category-under-campaign-objectives)


      </td>

      <td>
        The primary objective of the campaign.
      </td>
    </tr>

    <tr>
      <td>
        Incentivize Referrer
      </td>

      <td>
        When to incentivize the referrer.
        -Dynamically as he reached the criteria: To issue incentives dynamically as and when the configured criterion is met.
        -At the end of the campaign: To issue incentives at the end of the campaign period.
      </td>
    </tr>

    <tr>
      <td>
        Disable Test-Control for this Campaign
      </td>

      <td>
        Enable or disable test control - dividing the audience into test and control groups to evaluate the campaign's effectiveness.
      </td>
    </tr>

    <tr>
      <td>
        Make Default for POS
      </td>

      <td>
        Enable or disable campaign activation on POS.
      </td>
    </tr>

    <tr>
      <td>
        Invite Registered Customers
      </td>

      <td>
        Enable or disable inviting previously registered customers.
      </td>
    </tr>

    <tr>
      <td>
        Register Customer Online
      </td>

      <td>
        Enable or disable registering a customer online using a social app.
      </td>
    </tr>
  </tbody>
</Table>

#### The table below provides descriptions of each category under Campaign Objectives.

| Category      | Values                              | Help Text                                                                                                                            |
| :------------ | :---------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------- |
| Acquisition   | General                             | Acquire new transacting customers from a given acquisition channel                                                                   |
|               | Referral                            | Acquire new transacting customers through referrals by an existing customer                                                          |
| Delight       | Birthday/Anniversary                | Delight customers with incentives around life events to encourage them to transact by redeeming points or coupons                    |
|               | Feedback/Survey                     | Delight customers with incentives and encourage them to take a survey or provide feedback                                            |
| Informational | Customer Joinee Program             | Encourage new loyalty customers to know more about the program benefits and the brand. Increase in repeat purchase frequency and LTV |
|               | Store Opening (Awareness)           | Inform customers nearby about a new store opening to boost transactions at the store                                                 |
|               | Product Launch                      | Inform potentially interested customers about a new product launch to boost sales for the newly launched product                     |
|               | Season/Arrivals                     | Inform potentially interested customers about new collections/stock in the stores to boost sales                                     |
|               | Brand awareness, Informercial       | Brand building exercise and information sharing with customers to increase overall customer engagement with the brand                |
| Promotional   | Up sell                             | Promotional campaign to encourage people to buy higher volumes of the same SKUs - higher count per SKUs                              |
|               | Cross-Sell                          | Promotional campaign to encourage people to buy different SKUs - higher count of unique SKUs                                         |
|               | Sales Booster                       | Promotional campaign to encourage people to buy more - higher ABS and ABV                                                            |
| Miscellaneous | Heavy Discount Sale (includes EOSS) | Boost sales during any heavy discount periods including festivals and EOSS                                                           |
|               | Frequency Enhancer                  | Encourage lower frequency visitors to transact more frequently                                                                       |
|               | Lapsation                           | Reactivate lapsed customers and encourage them to transact.                                                                          |

7. Select **Create** to create the referral campaign.

## Configure message (post referral)

You can configure a message template using the old UI. This message can include a thank you note, reward details, or instructions for the next steps. It helps keep referrer or referee informed and engaged.
Once the referral is completed, the message will be sent to the referrer or referee through channels like SMS or email. You can also customize it by adding labels such as referral id, user id, points expiry date.

You can choose from two types of messages for the referral campaign: Email and SMS.

To create an email or SMS template, follow these steps:

### Creating an email template in old ui

To create an email template, follow these steps:

1. Select **Email**from the tab menu.
2. Select **+Template**to open the template creator.
3. Create a new email template using HTML, or import an HTML file from your system

> 👍 Tip
>
> Use the available referral tags to help you build the template.
>
> | Referral Tag        | Description                                                                                                  |
> | :------------------ | :----------------------------------------------------------------------------------------------------------- |
> | Referrer Code       | A unique code assigned to a referrer, used to track and attribute any successful referrals back to them.     |
> | Invitee Name        | The name of the person who is being invited or referred to.                                                  |
> | Invitee Identifier  | A unique identifier (such as an email or ID number) assigned to the invitee to track their referral status.  |
> | Referrer Full Name  | The complete name of the person making the referral.                                                         |
> | Referrer First Name | The first name of the person making the referral.                                                            |
> | Unsubscribe*        | Enable the option to opt-out from receiving further communications or emails from a service or mailing list. |
>
> *Compulsory tag

4. Provide a name for the template, and select **Save**.

5. Select **Refresh List** to refresh the template list.

6. Select the created template to preview it.

![c9f19451ea1ae13c1d81d3022997851cffb0386d5a257121bc1b92aacdf1243f image4](https://files.readme.io/c9f19451ea1ae13c1d81d3022997851cffb0386d5a257121bc1b92aacdf1243f-image4.png)

7. Select **Edit Message**to begin editing the subject and text message.

![22adaee0c593166e30b4649730de195ea9142c4df37a77861d89c4805e713aee image6](https://files.readme.io/22adaee0c593166e30b4649730de195ea9142c4df37a77861d89c4805e713aee-image6.png)

8. Select **Review **to finalize the changes.
9. Preview the message, and select **Save**.

### Creating an sms template in old ui

To create an SMS template, follow these steps:

1. Select **SMS**from the tab menu.
2. Enter the template message in the message section.

> 👍 Tip
>
> Use the available preset tags to help you draft the message.

3. Select **Review & Save**to save the template.

4. View the message preview, and select **Save**to confirm.

![de449552b062416c3605598ccd8d18b58710a2950851b7dcf8322dec1736ccb1 image](https://files.readme.io/de449552b062416c3605598ccd8d18b58710a2950851b7dcf8322dec1736ccb1-image.png)

### Configuring and sending the message

To configure and send the message to the referrer and referee upon successful referral, follow these steps:

1. Select **Incentives to Referrer**or **Incentives to Referee**to incentivize the referrer or referee respectively.

2. Select **+** beside **On Referee Registration**or**On Referee Transaction** to incentivize registrations or transactions.

![b696f36cf109540a18bc3c92b1e0c371c8a631147143e125867e2248d5a4fbc6 image8](https://files.readme.io/b696f36cf109540a18bc3c92b1e0c371c8a631147143e125867e2248d5a4fbc6-image8.png)

3. Enter the number of registrations or transactions required to fulfill the criteria.
4. Select the **Edit**icon to configure the coupon.
5. Select **Create Coupon Series**to [create a new coupon](https://docs.capillarytech.com/docs/create-offer-1#create-offers), or select **Claim Coupon Series**to add an existing coupon, ensuring the coupon code number is greater than 6.
6. Enable **Notify by SMS** or **Notify by Email** under **Notification Settings** to enable sending SMS or Email.

![e8fc2ea431dd7930af073e58c03b189f11e44d0b9499b825fc883f19b241e181 Screenshot 102](https://files.readme.io/e8fc2ea431dd7930af073e58c03b189f11e44d0b9499b825fc883f19b241e181-Screenshot_102.png)

7. Select **Configure SMS** or  **Configure Email** to draft message for sending out to the customer after the referral is complete. To create an SMS or Email refer to the [Engagement Channel](https://docs.capillarytech.com/docs/engagement-channels#/) document for more information on creating content.

![788d9ff279563dd4fcf6d521e77068d04ee0f2e3ae34e5ec53789b13e6f5d283 Screenshot 102](https://files.readme.io/788d9ff279563dd4fcf6d521e77068d04ee0f2e3ae34e5ec53789b13e6f5d283-Screenshot_102.png)

8. Select **Review and Save** to save the changes.

![9f1c2ce7e4db347b146a6757f2c5b068a228402789b485678aa2230f3a55f2b5 Screenshot 103](https://files.readme.io/9f1c2ce7e4db347b146a6757f2c5b068a228402789b485678aa2230f3a55f2b5-Screenshot_103.png)

## Configure incentive

Incentives are rewards or benefits designed to motivate and encourage a customer. Incentives can be used to reward the referrer (the customer who shares the referral) and referee (the customer who accepts the referral) for a successful referral.

There are two types of incentives supported:

* Coupons: Provide discounts or special offers for future purchases.
* Points: Give loyalty points that can be collected and redeemed for rewards.

Once the referral campaign is set up, you can configure the incentives by deciding what type of reward to offer. This helps keep customers engaged and motivated to refer more people.

### Issuing coupons

You can configure issuing coupons for a referral campaign in the old campaign manager.

To add a coupon to a referral, follow these steps:

1. Select **Rewards**to configure the rewards for the referral campaign.

2. Select **Incentives to Referrer**or **Incentives to Referee**to incentivize the referrer or referee respectively.

3. Select **+** beside **On Referee Registration**or**On Referee Transaction**to incentivize registrations or transactions.

![b696f36cf109540a18bc3c92b1e0c371c8a631147143e125867e2248d5a4fbc6 image8](https://files.readme.io/b696f36cf109540a18bc3c92b1e0c371c8a631147143e125867e2248d5a4fbc6-image8.png)

4. Enter the number of registrations or transactions required to fulfill the criteria.

5. Select the **Edit**icon to configure the coupon.

![ba78ed42e4c216e4afcedb86e587bc20e4ab3480ca12b2490494e0b06212003e image9](https://files.readme.io/ba78ed42e4c216e4afcedb86e587bc20e4ab3480ca12b2490494e0b06212003e-image9.png)

6. Select **Create Coupon Series**to [create a new coupon](https://docs.capillarytech.com/docs/create-offer-1#create-offers), or select **Claim Coupon Series** to add an existing coupon, ensuring the coupon code number is greater than 6.
7. Enable **Notification Settings** for SMS or email if needed.
8. Select **Save**to save the changes.

### Issuing points

You can configure issuing coupons for a referral campaign through Loyalty+.

To issue points for a referral, follow these steps:

1. Navigate to the edit page of the default loyalty program of the organisation.

<Note title="Note">
The Award Points to Referee action is available only for [workflows](https://docs.capillarytech.com/docs/workflows) within the default [loyalty program](https://docs.capillarytech.com/docs/features-of-loyalty).
</Note>

2. Under **[Workflows](https://docs.capillarytech.com/docs/workflows)**, create a new rule to configure issuing points for a referral.

<Note title="Note">
The following rules can be used to issue points for a referral:

1. **referrerCode.refereeRegCount**
   Track the number of referrals done by the referrer.
   For example, if a referrer successfully refers to an individual, points are issued to the referrer.
2. **referrerCode.refereeTxnCount**
   Track the number of transactions done by the referee.
   For example, if a referee makes a successful transaction, points are issued to the referrer.

Refer to the documentation on [rule writing](https://docs.capillarytech.com/docs/rule-writing) for more information.
</Note>

3. Select **Add action** to award points to either the referrer or referee. To award points to the referee select
   **[Award points to referee](https://docs.capillarytech.com/docs/actions#award-points-to-referee)**. To award points to the referrer select **[Award Points to Referrer](https://docs.capillarytech.com/docs/actions#award-points-to-referrer)**.

![Award Points to Referee](https://files.readme.io/8fe5a44-JgRNTWNS6_kiLOGEFGhMO9hsEKIUBAuIIg.png)

![Award Points to Referrer](https://files.readme.io/2a1efce-nrV50--2GIuO3iKJZXu6J30KErJz_q0U8A.png)

4. Select [points earn conditions](https://docs.capillarytech.com/docs/points#configure-points-earn-conditions) (rules that define how and when customers earn points across Loyalty Programs, Promotions, and Engage+) and [points expiry conditions](https://docs.capillarytech.com/docs/points#/expiry-conditions) (rules that define when earned points expire for customers), then choose the communication channels. For earn conditions, while choosing the allocation type as **Engage+**, only the **Fixed**, **Round Up**, and **Prorated** options are supported.

![7a4e020901709e328276cf7416a90d54e107b33a9b6df5bf340545f9a2d04523 image](https://files.readme.io/7a4e020901709e328276cf7416a90d54e107b33a9b6df5bf340545f9a2d04523-image.png)

![9bdc74af56a35aad3469477867bbea2f177c17b5b5e898c28e13625364657a1b Screenshot 2025 09 02 at 11](https://files.readme.io/9bdc74af56a35aad3469477867bbea2f177c17b5b5e898c28e13625364657a1b-Screenshot_2025-09-02_at_11.09.32_AM.png)

3. Select **Save and Continue** to apply the changes.

## Create & send referral campaign message

Creating and sending a referral campaign message involves setting up a message to inform customers about the referral program.

To create and send the Referral campaign message, follow these steps:

1. On the InTouch portal select **Home** from the left-hand corner.
2. Select **Engage+** from the sidebar menu.
3. Select a campaign to create a message.

![c67991f5da7860fe2030a8a1f85c9f559ccefb539cbb836cd3c6ac9ef8aaac98 Screenshot 59](https://files.readme.io/c67991f5da7860fe2030a8a1f85c9f559ccefb539cbb836cd3c6ac9ef8aaac98-Screenshot_59.png)

4. Add the **Audience Group** for the campaign.

![c8cf94c68c13bb85d5bc7cea196ac79954c45a8487d72bfbb6d5f901700879cb Screenshot 61](https://files.readme.io/c8cf94c68c13bb85d5bc7cea196ac79954c45a8487d72bfbb6d5f901700879cb-Screenshot_61.png)

5. Create the campaign content under the **Content** section. Refer to the [Engagement Channels](https://docs.capillarytech.com/docs/engagement-channels#/) document for more information on creating content.

<Note title="Note">
Ensure to add the **referral unique code** tag.
</Note>

![17a7a3aeab08d0fcc1940f98f3ab2bc7e0182ae951bfa0fbbb4cf42d57e00aaf Screenshot 93](https://files.readme.io/17a7a3aeab08d0fcc1940f98f3ab2bc7e0182ae951bfa0fbbb4cf42d57e00aaf-Screenshot_93.png)

5. Schedule the campaign as per your requirements and send it for approval. Refer to the [Message Schedule](https://docs.capillarytech.com/docs/schedule-message#/) document for more information on message scheduling.

![04ae656736dedc1598dfdce2fd33091b94d944fa0a44330f27f63fefc7a7ac43 Screenshot 63](https://files.readme.io/04ae656736dedc1598dfdce2fd33091b94d944fa0a44330f27f63fefc7a7ac43-Screenshot_63.png)

Once approved, the message will be successfully created.

## Create broadcast campaign

A broadcast campaign allows you to send messages to a large audience to promote your referral program. By linking a referral campaign to a broadcast campaign, you can effectively spread the word about your referral offers.

To create a brand referral campaign using the new UI, you need to first set up a referral campaign in the old UI. Once that's done, you can link the brand referral to the created broadcast campaign in the new UI. Follow the steps below:

1. Create a [Referral Campaign](https://docs.capillarytech.com/docs/referral-campaign#creating-a-referral-campaign-end-to-end-flow) in the Old UI.
2. On the InTouch portal select **Home** from the left-hand corner.
3. Select** Engage+** from the sidebar menu.
4. Select **New Campaign**.
5. Enter the**campaign details**.

![fa73b13a54a758ceabe8d5d4ffabc1ef4109920db387e8035bfaa2eface78630 Screenshot 54](https://files.readme.io/fa73b13a54a758ceabe8d5d4ffabc1ef4109920db387e8035bfaa2eface78630-Screenshot_54.png)

#### The table below provides descriptions of each field.

| Field             | Description                                          |
| :---------------- | :--------------------------------------------------- |
| Campaign Name     | Name of the campaign (supported upto 50 characters). |
| Campaign Duration | Start date and end date of the campaign.             |

6. Go to **Advanced Settings**.
7. Select  **Attach a Referral Campaign**.

![668abe39f9d41eb6f68ccd4b85c9fb5f265dcaab259436ef8bf7a52751e73944 Screenshot 55](https://files.readme.io/668abe39f9d41eb6f68ccd4b85c9fb5f265dcaab259436ef8bf7a52751e73944-Screenshot_55.png)

8. From the **dropdown menu**, select the referral campaign previously created in the Old UI.
9. Select**Save Campaign** to finalize the setup.

The Campaign has been created.

## Managing a referral campaign

### Viewing and editing a referral campaign

To view or edit your referral campaign, follow these steps:

1. On the InTouch portal, select **Home** from the left-hand corner.
2. Select **Engage+** from the sidebar menu.
3. Select **Old Campaign Manager** to view existing campaigns.
4. Select the campaign you want to edit and make the necessary modifications.

![578c30124c32e5a0f0e8ff99d78098713f28cfc5efe2c95762732d7597b6e601 Screenshot 58](https://files.readme.io/578c30124c32e5a0f0e8ff99d78098713f28cfc5efe2c95762732d7597b6e601-Screenshot_58.png)

<Note title="Note">
The token is a unique identifier used for the [Refer Customer API.](https://docs.capillarytech.com/reference/refer-customer)
</Note>

# Activating & deactiving a referral campaign

To Deactivate or Activate a Referral Campaign follow these steps.

## Deactivating a referral campaign

1. On the InTouch portal, select **Home** from the left-hand corner.
2. Select **Engage+** from the sidebar menu.
3. Select **Old Campaign Manager ** to view existing campaigns.
4. Select the campaign you want to disable.

![607c1d66b9656770ba09c88679f580364413edf96a3f860069d56d865950f048 Screenshot 58](https://files.readme.io/607c1d66b9656770ba09c88679f580364413edf96a3f860069d56d865950f048-Screenshot_58.png)

5. Select **Stop** to deactivate the Campaign.

![aa08ae83d866f271e23434bf1645e4763d7cfe537ab2b9facb484d3e7ae82863 Screenshot 70](https://files.readme.io/aa08ae83d866f271e23434bf1645e4763d7cfe537ab2b9facb484d3e7ae82863-Screenshot_70.png)

6. The campaign is successfully de activated.

![aac6ca6d8bb387112083ff47331cac218e74160ea87e735f1cc4633dc4055ae7 Screenshot 71](https://files.readme.io/aac6ca6d8bb387112083ff47331cac218e74160ea87e735f1cc4633dc4055ae7-Screenshot_71.png)

## Activating a referral campaign

1. On the InTouch portal, select **Home** from the left-hand corner.
2. Select **Engage+** from the sidebar menu, then choose **Old campaign manager**.
3. Select **Lapsed** to view the deactivated referral campaigns.

![17dc3646248442ed4763a5953447977d2aa064c49aaa3a048b63175ad44476e5 Screenshot 72](https://files.readme.io/17dc3646248442ed4763a5953447977d2aa064c49aaa3a048b63175ad44476e5-Screenshot_72.png)

4. Select **start** to activate the campaign.

![b312bcdbf3fafb57596f89037742ba5b9c7c8354a96e9e6b3e8073b51d3a4ef6 Screenshot 73](https://files.readme.io/b312bcdbf3fafb57596f89037742ba5b9c7c8354a96e9e6b3e8073b51d3a4ef6-Screenshot_73.png)

5. The campaign is successfully activated and can be viewed in the **Old Campaign Manager**.

![3f090420c58f71c9ef7be9407c5ce91d5cb16fcf42f7cc20d4a1cf496300056f Screenshot 75](https://files.readme.io/3f090420c58f71c9ef7be9407c5ce91d5cb16fcf42f7cc20d4a1cf496300056f-Screenshot_75.png)

## Use Cases

### Issue a 10% off coupon to referrer on every referee registration up to 5 referrals.

A brand has implemented a referral program where referrers receive a 10% off coupon for each successful referee registration, up to a maximum of 5 referrals. This ensures that customers are rewarded for bringing in new members while maintaining a fair limit on incentives.

To set this up, follow the steps below.

1. [Configure referral code. ](https://docs.capillarytech.com/docs/referral-campaign#/configure-referral-code)

![699d2622054672a5fa47bc584784c1dbbffddd36496ad1ce7944e7d3fafa6b25 Screenshot 96](https://files.readme.io/699d2622054672a5fa47bc584784c1dbbffddd36496ad1ce7944e7d3fafa6b25-Screenshot_96.png)

2. [Configure campaign details. ](https://docs.capillarytech.com/docs/referral-campaign#creating-a-referral-campaign)

![6997d664f1f000966a95abd7e05f00aaeb677ed2337a061d492474351753fb83 Screenshot 97](https://files.readme.io/6997d664f1f000966a95abd7e05f00aaeb677ed2337a061d492474351753fb83-Screenshot_97.png)

3. [Configure a confirmation message](https://docs.capillarytech.com/docs/referral-campaign#/configure-message-post-referral) in the old UI to be sent after a successful referral completion.

![4800a2901cb34c241cfac07e352f5c2c68894d63a82344f1867e5970b4e731ba Screenshot 100](https://files.readme.io/4800a2901cb34c241cfac07e352f5c2c68894d63a82344f1867e5970b4e731ba-Screenshot_100.png)

3. [Configure the incentives for issuing a coupon.](https://docs.capillarytech.com/docs/referral-campaign#issuing-coupons)
   1. [Create a new 10% off coupon.](https://docs.capillarytech.com/docs/create-coupons)
   2. Select **Modify advanced settings** > **Redemption settings** > **Limit total redemptions in the offer?**
   3. Turn on the setting and set maximum allowed to 5.
   4. Select **Preview and save** to  save the changes.

![7eb3775ce6777702eb250a1f349b753d5f7f27d43b020a2a8c5a68149e65f3bd image](https://files.readme.io/7eb3775ce6777702eb250a1f349b753d5f7f27d43b020a2a8c5a68149e65f3bd-image.png)

4. [Create a message template.](https://docs.capillarytech.com/docs/create-message#/)
5. Choose the created 10% off coupon while [configuring the issue coupon](https://docs.capillarytech.com/docs/referral-campaign#issuing-coupons).
6. Validating Referral code using the [Validate referral code](https://docs.capillarytech.com/reference/validate-referral-code) API.
7. Refer a new customer using the [Refer customer](https://docs.capillarytech.com/reference/refer-customer) API.

### Issue 1000 points to referrer on first transaction of every referee.

A Brand has a referral program where referrers earn 1,000 points when a referee makes their first transaction. This ensures that customers are rewarded only when the referred member completes a purchase.

To set this up, follow the steps below.

1. [Configure the incentives for issuing points.](https://docs.capillarytech.com/docs/referral-campaign#issuing-points)

<Note title="Note">
Use the following expression to issue points to referrer on first transaction of every referee:

`referrerCode.refereeTxnCount==1`
</Note>

2. [Configure a referral campaign.](https://docs.capillarytech.com/docs/referral-campaign#creating-a-referral-campaign)

![8da00c1a4dd34c63276f06d40ed6f550c83feb9125e07f66644e34f26128d347 Screenshot 98](https://files.readme.io/8da00c1a4dd34c63276f06d40ed6f550c83feb9125e07f66644e34f26128d347-Screenshot_98.png)

2. [Configure a confirmation message](https://docs.capillarytech.com/docs/referral-campaign#/configure-message-post-referral) in the old UI to be sent after a successful referral completion.
3. [Create a message template.](https://docs.capillarytech.com/docs/create-message#/)
4. Validating Referral code using the [Validate referral code](https://docs.capillarytech.com/reference/validate-referral-code) API.
5. Refer a new customer using the [Refer customer](https://docs.capillarytech.com/reference/refer-customer) API.

### Brand creating a referral campaign and rewarding customer upon successful registration.

A brand sets up a referral campaign to reward customers for bringing in new users. Existing customers receive a unique referral code, which they share via email, SMS, or social media. When a new user registers using the code, they receive a reward. Upon successful registration, the referrer also earns an incentive, driving customer acquisition and engagement.

To create a referral campaign, follow these steps:

1. [Configure a referral campaign.](https://docs.capillarytech.com/docs/referral-campaign#creating-a-referral-campaign)

![3f9fc1f3447bf342b3eb10d1d1b807b3ad11848df72095979229955664dff8ec Screenshot 80](https://files.readme.io/3f9fc1f3447bf342b3eb10d1d1b807b3ad11848df72095979229955664dff8ec-Screenshot_80.png)

2. [Configure a confirmation message](https://docs.capillarytech.com/docs/referral-campaign#/configure-message-post-referral) in the old UI to be sent after a successful referral completion.
3. [Configure Incentive.](https://docs.capillarytech.com/docs/referral-campaign#/configure-incentive)

![2e2dad98c1a57790bc145a1ef480fa33b56cf23940f17aedecd1b786f7021740 Screenshot 79](https://files.readme.io/2e2dad98c1a57790bc145a1ef480fa33b56cf23940f17aedecd1b786f7021740-Screenshot_79.png)

![53954bfe0cd108258b9f7d6f5b67d0c970837960490c98d8247a2de657c8c8f4 Screenshot 81](https://files.readme.io/53954bfe0cd108258b9f7d6f5b67d0c970837960490c98d8247a2de657c8c8f4-Screenshot_81.png)

3. [Create a broadcast campaign.](https://docs.capillarytech.com/docs/broadcast-campaign#/)

![787770c8184eb97912cf8f3c87df15412a774a2ee15cddeeb5bd84fbcd8f9712 Screenshot 76](https://files.readme.io/787770c8184eb97912cf8f3c87df15412a774a2ee15cddeeb5bd84fbcd8f9712-Screenshot_76.png)

4. [Create a referral campaign message.](https://docs.capillarytech.com/docs/referral-campaign#creating-a-referral-campaign-message)

![9db36c3864f3fb612e7ace2e58aae0f5a4847056e82f32d7b654b2b22606dd81 Screenshot 63](https://files.readme.io/9db36c3864f3fb612e7ace2e58aae0f5a4847056e82f32d7b654b2b22606dd81-Screenshot_63.png)

5. Validating Referral code using the [Validate referral code](https://docs.capillarytech.com/reference/validate-referral-code) API.
6. Refer a new customer using the [Refer customer](https://docs.capillarytech.com/reference/refer-customer) API.

### Issue a ₹750 OFF coupon to both referrer and referee upon successful registration.

The brand has launched a referral campaign where both referrers and referees receive a ₹750 OFF coupon upon successful registration. To set up this campaign, follow these steps:

1. [Configure a referral Campaign.](https://docs.capillarytech.com/docs/referral-campaign#creating-a-referral-campaign)

![c0899ef772e397ea3f2bd90bd8133044b4fc75181c7c3279814a10599c4e2725 Screenshot 80](https://files.readme.io/c0899ef772e397ea3f2bd90bd8133044b4fc75181c7c3279814a10599c4e2725-Screenshot_80.png)

2. [Create Coupon Offers.](https://docs.capillarytech.com/docs/offers#create-offer)

![408b8586782c8c95756d6eb4d1f138f3928e9fb67af7b898b7d93de59a5561a9 Screenshot 81](https://files.readme.io/408b8586782c8c95756d6eb4d1f138f3928e9fb67af7b898b7d93de59a5561a9-Screenshot_81.png)

3. [Configure Incentive.](https://docs.capillarytech.com/docs/referral-campaign#configuring-incentives)

![5cc75b818c8c0afc0d9399530036e625a9b22d5c006e2839f6159b9d873a6e6b Screenshot 79](https://files.readme.io/5cc75b818c8c0afc0d9399530036e625a9b22d5c006e2839f6159b9d873a6e6b-Screenshot_79.png)

4. [Create message template.](https://docs.capillarytech.com/docs/referral-campaign#creating-a-message-template)

![2b90985ef1dbbe5bbf437cb68e4526786513efdd21aa8b51e4f9bdaef3626817 Screenshot 85](https://files.readme.io/2b90985ef1dbbe5bbf437cb68e4526786513efdd21aa8b51e4f9bdaef3626817-Screenshot_85.png)

5. Set up[ referral Code Configuration.](https://docs.capillarytech.com/docs/referral-campaign#/configure-referral-code)

![4f9b2a8dd9360c7b429ee33e1f6e8a666b31dccfa6b2ff42a02a648af75cbb1a Screenshot 88](https://files.readme.io/4f9b2a8dd9360c7b429ee33e1f6e8a666b31dccfa6b2ff42a02a648af75cbb1a-Screenshot_88.png)

6. Validating Referral code using the [Validate referral code](https://docs.capillarytech.com/reference/validate-referral-code) API.
7. Refer a new customer using the [Refer customer](https://docs.capillarytech.com/reference/refer-customer) API.

### Issue 50 points to both referrer and referee on first purchase, up to $50/month.

Brand offers a referral program where members can earn up to $50 per month by inviting new customers. When a referee signs up using the referrer’s unique link and makes their first purchase, both the referrer and the referee receive $5 Express Cash as a reward. To set this up, follow the steps below:

1. [Create a referral campaign](https://docs.capillarytech.com/docs/referral-campaign#creating-a-referral-campaign)

![95c0e176af98ddf942b9f55d16ca86fff04074f7fe259790e1bcd9589c4730e4 Screenshot 80](https://files.readme.io/95c0e176af98ddf942b9f55d16ca86fff04074f7fe259790e1bcd9589c4730e4-Screenshot_80.png)

2. [Configure a confirmation message](https://docs.capillarytech.com/docs/referral-campaign#/configure-message-post-referral) in the old UI to be sent after a successful referral completion.
3. [Configure referral code](https://docs.capillarytech.com/docs/referral-campaign#/configure-referral-code)

![2b6decad5ced692c3b3e95b0d520654f03ce546d6e26ec749a9e692ee473a14a Screenshot 88](https://files.readme.io/2b6decad5ced692c3b3e95b0d520654f03ce546d6e26ec749a9e692ee473a14a-Screenshot_88.png)

3. Configure incentives (points) for both the [referrer](https://docs.capillarytech.com/docs/actions#award-points-to-referrer) and [referee](https://docs.capillarytech.com/docs/actions#award-points-to-referee) on Loyalty+.

![38f79f0a1ded558c16358a95fb4cfc3eb6bafdbd4621e024635b46ce584432ab Screenshot 94](https://files.readme.io/38f79f0a1ded558c16358a95fb4cfc3eb6bafdbd4621e024635b46ce584432ab-Screenshot_94.png)

<Note title="Note">
Use the following expression to issue points to referrer on first transaction upto $50/month of every referee.

`(referrerCode.refereeTxnCount==1)&&(currentTxn.value<=50)`
</Note>

4. [Create Message Template.](https://docs.capillarytech.com/docs/create-message#/)
5. Validating Referral code using the [Validate referral code](https://docs.capillarytech.com/reference/validate-referral-code) API.
6. Refer a new customer using the [Refer customer](https://docs.capillarytech.com/reference/refer-customer) API.

## FAQs

1. **Can we limit the number of referrals a user can make in a referral campaign?**

Yes, you can set limits on the incentives a user receives for referrals. For example, if you set a limit of 5, the referrer will only receive incentives for the first 5 successful referrals. Beyond that, no incentives will be given.

2. **Can a customer generate a different referral code for each referral?**

No, each customer is issued a single unique referral code.

3. **Is there an API to fetch the referral code that customers use to register themselves?**

Yes, there is an API to fetch the referral code customers use to register. This will retrieve the referral details, including the unique referral code. For more information, refer to the [API documentation](https://docs.capillarytech.com/reference/add-referrals).

4. **Does the referral API restrict sending multiple referral SMS to the same mobile number?**

Yes, the referral API restricts sending multiple referral SMS to the same mobile number. You cannot send multiple referral messages to the same recipient using the API.
