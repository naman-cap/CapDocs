---
title: JFM 2022 | Engage+ Releases
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

## March Releases

### Enhanced Drag & Drop Email Editor

An enhanced Drag-and-drop editor for emails to improve the overall user experience and ease the content editing experience. You can now see the following improvements -

#### Title

Title as a block has been introduced in the Content block of the drag and drop editor. This helps in establishing a hierarchy in the content while creating an email. 

![](https://files.readme.io/9827426-ydq4ZDF7LKWoyBEZ76garnnfCbTG9G-P8Q.gif)

Options like Title property is used to select a proper heading style 

- Flexible styling: You can now apply the styles such as text direction, alignment, font size and so on to the whole block.
- Different styles for desktop and mobile mode: Using two separate Title blocks and applying the hide on desktop/mobile setting, you can have titles with the same title tag but with different font styling. This comes super-handy if you need to differentiate title size and style on mobile and desktop, while keeping the same heading tag.

#### Paragraph

You can see it in the the Content block of the drag and drop editor. You can use any number of paragraphs of any length that share the same content formatting, such as font family, font size, and font weight. 

The Paragraph content block is also encoded with parameters to manage copy-paste operations better with other block options to improve the formatting.

#### List

You can see it in the Content block of the editor. It provides specialized support lists with improved styling options, font management, copy-paste operations, and formatting options same as the Paragraph block.

It provided a more granular control over list formatting that may have different design requirements than general text.

Option of indentations, spacing and list types have also been added to improve the experience. To manage numbered list in a better way, you will also have Advanced options like "Start from" option to choose where to start numbering from.

### Connect with your customers on WhatsApp 

Context

- WhatsApp has an active user base of around 1.6 billion. It allows brands to send marketing messages to your customers over WhatsApp since Oct 2021.
- WhatsApp has the fastest delivery and better read rate as compared to other similar channels.

The following WhatsApp features helps in innovating campaign better and hence Capillary clients are looking for this channel:

- Use multiple media formats such as texts, images, audio, call to action buttons, and product catalog.
- Track WhatsApp campaigns to know the count of messages that were sent, delivered and read.
- Send promotional and transactional content
- Use segmented audience, personalization tags
- Two  way communication such as customer support
- Online commerce activities

#### Changes made in Engage+

- You can now create WhatsApp message content templates in Engage+. These templates will be sent to WhatsApp for approval by Capillary.
- Once whitelisted you can see the approved templates in Engage+. When creating campaigns, you can  select from these approved content templates. 
- In the selected template, you can only edit the variable part of the template. Various checks such as variable length, using only registered Header, Template id etc. are in place.
- You can also see the templates that are awaiting for approval or rejected.

<Note title="Note">


Using a verified Official WhatsApp account increases customers' trust.
</Note>

#### Benefits

- No need to maintain templates at two places - BSP portal and Capillary.
- Reduces redundancy and time from manually copying and pasting from different portals. Hence, minimizes manual errors. 
- Stops message from sending if there is a mismatch between template and message content for a customer
- User doesn't need to download the customer segment list with other information such as tags (key - value pair) and share it every time with BSP
- Campaign stats such as delivery reports, hit rate, incremental sales etc. are available. For these reports BSP will have to do POS/ website integration.

#### Onboarding

Fill this form(link) and Gateways team will coordinate with BSPs.

#### Pricing

- We are integrated with two BSPs – Twilio and Tanla/ Karix. We are ready to integrate with any other client preferred BSP provided they have the desired APIs. 
- Pricing strategy can be discussed with Pratik/ Siddhant Jain/ Bhuvanesh/ Rahul Ashok/ Deepak Kumar

#### Whatsapp Number

Client can use a new or exiting number. If existing number is being used with non-capillary supported BSP then the number can be ported.

#### Feature Details

**Setup & Prerequisites**

- Org needs to register itself with BSP's that capillary support. Currently we have two - Twilio and Tanla/ Karix.
- To enable WhatsApp channel for an Org there are certain information/ keys required.
- For Twilio we need SID, Auth Token and Messaging service SID.
- For Tanla we need Auth/ Account key and sender id 
- Once the Org has above information, the same can be shared with Gateways team, who will help in onboarding

#### Feature usage guide

A. Creating templates in Capillary Engage+

Orgs that are WhatsApp channel will be able to create WhatsApp template in the Creatives section as shown below:

The whitelisted templates are pulled from WhatsApp directly as soon as these are approved. User will not have to wait or keep checking on BSP portal to understand template status.

![](https://files.readme.io/455f994-EYmGPfsVc23jU5v7gqWIk_Yi_uPvLUAsjg.png)

![](https://files.readme.io/8d4d7a2-0hrP1IGDzamuA6i4WuH_dAsf9hOUztqp-Q.png)

For more details, see [WhatsApp template - Best Practices](doc:whatsapp-template-best-practices) here.

B. Selecting and Using Approved Templates

- Once the template is approved by WhatsApp all the templates will be shown in the Creatives → Whatsapp section → Status: Approved 
- In the campaign creation flow, while adding creative users can select any of the approved template.
- Selecting the template will open the edit WhatsApp screen. However, in the edit screen, only the variable portion of the template can be edited.
- The variables can be replaced with static text or labels. 

![](https://files.readme.io/1d2c0b5-VXdu6HjJraVIstAvxiFbsPzNTmKfaJgBkQ.png)

C. Post campaign execution

- Delivery reports will be visible on campaign summary page, message summary page and EI.  

#### Use Cases supported by Engage+

- Notifications/ Promotional Messages
- Account Updates
- Alerts
- Customer Support
- Order Confirmation

Supporting Loyalty Messages and Chatbot

1. CRM related bot  
   Here the bot will answer simple queries of the customer eg: how many points I have, when is my coupon getting expired, share all the active coupons I have, share store location etc.  
   In this case, Bot needs to call our [Get Customer Details](ref:fetch-customer-details-by-user-id) API and get the desired information. If any other API has the information which is being requested, the same can be shared.  
   Have we done this before? Yes, for Arrow brand.

![](https://files.readme.io/e1d70d3-wOZV7nt2rY2j1xBrrR0QQI-6HtqjcId_Wg.png)

Kanmo Chatbot:

![](https://files.readme.io/04738ff-qYIQO53FPWw8S41h_8VwVLnA5NcOqYNoqw.png)

2. Loyalty Message:  
   All standard events (transaction or customer) are posted on [Event Schema (Payload)](doc:event-schema-payload).

If any brand wants to send a message on any event mentioned above then:

1. Bot will have to understand when an event is happening, they can create a Webhook to understand this info.  
   Based on the information being passed in the event they can send a Whatsapp message (template need to be whitelisted) to the end customer.

Eg: If a transaction event happened and amount and bill number are the parameters being passed in the event. Bot can send message "Dear customer, thank you for paying \{\{amount\}\} for \{\{bill number\}\}"

This message "Dear customer, thank you for paying \{\{1\}\} for \{\{2\}\}" will be created and whitelisted. We will provide access to our event payload.

Have we done this before?  
Yes, for our sales demos we sent notifications on customer_registration and transaction_add. The particular Webhook was created by our solutions team.  
This particular integration effort is supported outside of our core Loyalty platform. So, for every brand and every event there is a small re-integration effort required.  
For effort estimates, please reach out to the PSV team.

![](https://files.readme.io/bfa6b6b-1dXM5hjnVrPHGQ4m-5TRjiWHkpn4IOg9ng.png)

#### How to help your brands in making the decision?

- Ask them what's their use case, most of our brand (greater than 90%) business is offline. So customer support, post sales service etc. don't apply to them.
- They will get a good hit rate if they send personalized promotional messages through E+.
- Our current BSP partner also supports two-way communication/ BOT flow (it can range from simple use case as described in point 1 to complex ecom ones)
- Brands can explore Capillary recommended BSP but it's best to start slow, then can first test with promotional content and keep adding more use cases as they see this channel working for them. 

## February Releases

### DND Customer database enhancements

#### Access to DND customer database: 

Since last year Capillary, brand or Gateway companies cannot have direct access to the DND customer database. The current DND status against any customer profile in Capillary database is not accurate.

#### Changes made

We have made the following changes in Engage+ due to above mentioned reasons:

**Change 1**: Through Engage+ brand will reach out to all customers and won't honor the current NDNC status in Capillary's database.  
This is because DND customer's data is maintained by Telecom Operators and they do not share it with third parties (Capillary or Gateway companies). Operators will block the messages at their level.  
**Change 2**: Removed the option of "Send to NDNC customers" from Campaign Message delivery settings.  
Since, the data regarding DND status of any customer is not accurate and operators are filtering the DND customers at their end we have removed this option. Brands can reach out to all customers and Operators can take care of not delivering the message to DND customers.  
**Change 3**: Removed NDNC related filters from Audience Manager

#### Expected changes in Member Care

1. NDNC Status field will show 'Info not Available'.
2. 'Mobile number opt-in status' field will be removed. This field gets populated with Yes/ No if a customer has done a transaction in the last 6 months. So a NDNC customer who had transacted in the last 6 months is considered as opt-in/ Yes for communication and if hadn't transacted in the last 6 months then was considered as opt-out/ No for communication. This logic is no longer applicable.

#### Upcoming Changes Planned

Reading delivery status of DND customers

- The only way for Capillary to understand if a customer has opted for DND is through the delivery status we get from Gateway partners.
- If for any customer in the Audience list we get the delivery status as 'customer preference is DND', then we will update this information in the NDNC field in that customer's Member care profile.

Enable the option of "Send to NDNC customers" back in Campaign Message delivery settings.

- The only way to understand if a customer is in DND is by first sending a message and then reading the delivery status. So slowly, the brand will be able to understand the actual DND customers.

#### How will this help the brands?

- **Increase in Reach**: In India, when a customer applies in NDNC (National Do No Call) registry, they opt out of communication from an industry (BFSI; Real Estate; Education; Health; consumer goods and automobiles; communication/ broadcasting/ entertainment/IT; tourism and leisure; food and beverages.)  
  A brand from any of these industries can still take explicit consent (valid for 6 months) from a DND customer and share this consent data with the Telecom operators. The consent overrides the DND status only for the brand and thus the brand can still reach out to the customer.  For other countries, the Product team is trying to understand if such a similar process exists.

- **Reduction in communication cost**: Brands need to pay the same charges for messages to DND or Non-DND customers. In Phase 2, when we understand the DND-customers brands will be able to remove them from the Audience list and will not have to pay the SMS communication cost. 

### New filters in Audience Manager

Context  
To boost customer engagement through campaigns, we offer various types of filters to help the user in targeting a precise audience set. Certain categories of filters are based on loyalty, user profile, transaction, etc. We continuously try to add valid filters so that brands can have more edges while creating an audience base for running campaigns.

Problem Statement  
Currently, we do not calculate the value (price and quantity) of products at the item level due to which defining the audience base against a particular product is not possible. This creates a problem for brands to identify users of particular products and their purchase patterns around them. 

The following are some examples of use cases that cannot be achieved:

- Brands want to target users who have bought item A more than n times (5 times) in different transactions in the respective time period.
- Brands want to target users who have TA(ATV) more than n amount ($120) bought item A more than 3 times in a defined time range.
- Brands want to target users who have spent on item A for more than n amount ($150 ) in the respective time period.
- Brands want to target users who have averagely spent on item A for more than n amount ($200) in the respective time period.

Solution  
To address above mentioned pain points we have introduced 3 new filters.

#### 1. Shopped for distinct Products/Categories/Attributes

To filter audiences who have shopped a particular product (Item) n times in different transactions.

Example: Filter users who have bought soybean more than 3 times distinctively in July.

The following table shows the number of soybeans purchased by Zoha and Raj on different days.

| Name | July 7 | July 10 | July11 | July 13 | July 25 |
| :--- | :----- | :------ | :----- | :------ | :------ |
| Zoha | 1      | 3       |        |         |         |
| Raj  |        | 1       | 2      | 3       | 1       |

Who will make it to the filter list? 

Raj, we want a user who has done more than 4 transactions distinctively that has a Soyabean item in the bill in the selected time range.

For more details, see [Shopped for distinct Product/Category/Attribute](link)

#### 2. Average Item Value

To filter out audience on their average spent on selected items.

Example: Customers who buy Soybean more than $40 per bill in July.  

Assume Zoe has bought soybean as mentioned in the following table:

Date	Amount  
July 5	$10  
July 6	$50  
July 10	$70  
Will Zoe come on the list?

Yes, Zoe will fall under the filter condition. As by logic, 10+50+70 = 130 and 130/3 = (greater than 40).

For more details, see the [Average item value filter](link).

#### 3. Favorite Product at the item level

To filter out audience on their absolute amount spent on respective selected items.

Example: Customers who buy Soybean for more than $150 in July.  
Consider Roy has bought Soybean on different days as mentioned in the following table:

Date	Amount  
July 5	$20  
July 7	$70  
July 10	$100

Will Roy come in the list?

Yes. As we want to filter out the audience who has spent specifically on the selected item(Soybean) in the specific date range and the total amount spent on soybean is $190.

Use Cases

- Brands will be able to filter audiences based on their average spending towards a particular item.
- Brands will be able to filter audiences based on their absolute purchase amount towards a particular item.
- Brands will be able to filter audiences based on their distinct purchase of items.
- All the above-mentioned filters can be used with other filters and with help of permutation combination, various customized audience lists can be created.

For more details, see [Favorite Product at the Item Level](link).

### Notification to Brand POCs when the coupon issual limit reaches a certain threshold

Context  
In the Incentives module, we provide the user with advanced settings that allow brands to configure offers in a more customized nuanced manner. Through these settings, brands can create coupon series with various rules on issual and redemption of an offer. 

Problem Statement  
Currently, we provide the functionality of configuring 'Issual Limit' that will allow users to put a limit on the total issuance of coupons from an offer. 

We did not have functionality that can notify brands on exhaustion of the issual limit which was causing a problem to brands for running offer-related campaigns as:

- When the issual limit is exhausted, end-users (brand's audience) will not receive any offer in spite of the brand explicitly communicating about the offer.
- Certain times, brands want to increase the issual limit if the campaign is getting good engagement.

Solution  
We have introduced a new field, **'Send notification for issual limit** which will allow users to get notification when there are certain (user input) coupons remaining.

For example, the user can have an issual limit of 1000 for a coupon series and want to get notified when there are 20 coupon codes remaining to be issued. So, the user can input '20' in getting notify field, and an email will be sent to all the registered brand POCs. 

![](https://files.readme.io/8cc8abb-vPRzeIcR_rE_-m4IXx7-cbeH4lvTYMLZ5w.png)

Use Cases

- Brands will be able to get a notification before exhaustion of issual limit which will allow them to stop running a campaign at the desired respective time.
- Brands will be able to get a notification before exhaustion of issual limit which will enable them to increase buzz around the offer saying. For example, Only 20 more lucky folks will get this offer.
- Brands will be able to get the pulse of the campaign and offer engagement and can take timely calls to increase the issual limit.
- Brands that are running offers by uploading coupon codes will get notification well in advance on exhaustion of issual limit. So that, they can upload more coupon codes in advance if required and increase the limit.  
  For details on how to configure, see Step 5: Advanced settings of [Create Offer](doc:create-offer).

## January Releases

### Enhancements in Coupons Claimed Information

Context  
For any coupon series created, we display information such as configuration details, last issued, last redeemed, redemption rate, and so on. Currently, we also explicitly show if the created coupon series is claimed or not, and if claimed then by which type of Campaign is claimed.

Problem Statement  
There are various campaigns running, in which there can be various messages and offer series is claimed for it. Currently, we only show whether it is claimed either by Outbound or Loyalty. It does not help the user to identify which particular campaign/program has claimed it and the user needs to go through each campaign and figure it out. This would have a negative impact in the user experience, also decrease the productivity of users.

**Major Pain Points**

- Difficulty in finding the exact campaign/program which has claimed the offer series.
- Difficulty in cross-checking the information with campaign/program details and offer series.

Solution  
We have introduced a new field in the information tab, ' Campaign using this offer' and 'Program using this offer' This shows the name of the Campaign or Program which has claimed the offer.

- If the offer is claimed by an outbound campaign, then you will see the name of the campaign that claimed the offer.

![](https://files.readme.io/0946249-P3QPzm8T8HV4IqJm_I1N-QU2FjtI6NrVkw.png)

- If the offer is claimed by Loyalty, you will see the name of the program that claimed the offer.

![](https://files.readme.io/6924eec-vF_0e6d2z-Y54mcM6AE3UblwQyZlpdz3rg.png)

Use Cases

- Users will be able to find the campaign/program which has claimed the particular coupon series.
- It will be easy for the user to debug if any issues come regarding issual and redemption of coupon series by cross-checking easily with campaign/program details.  
  For details on how to [view offer](link) details, see here.

### Enhancement in Customer Redemptions API

Context  
Through Customer Redemptions API call, users can retrieve the points and coupons redemption history of a customer. User can use various parameters to filter the results by type, duration, coupon ids start with, and coupon ids end with. 

Problem Statement  
Currently, we are not able to filter customer redemptions on basis of the store. Brands having various stores and merchant stores require to filter the customer details at the store level so that adequate information is passed to respective store staff.

Solution  
We have introduced a new query parameter (`merchant_store_id`) in the coupon redemption API to filter redemptions made in a specific merchant store. 

For details, see [Customer APIs](ref:customer-1).

Use Cases

- Brands can show customer redemptions of the respective stores on the system/mobile application/web app.
- With the help of the store parameter, brands can protect the data of different stores and control the information.
- Store staff to easily browse customer redemption history for the respective store.
- If brands have various merchant stores, then the customer redemptions of only that particular merchant store can be availed. 

### New values supported in the status parameter of V2 GET customers/coupons API

Context  
Brands issue various coupons to customers for keeping them engaged and to increase their frequency of transactions. Brands intend to remind and inform customers about their redeemed coupons, available coupon codes, expired coupons, details of the offers, etc. so that customers have all the necessary information.

Problem statement  
We did not have support to provide coupon code information on basis of the relevant status of coupons issued to customers. This was creating a blocker for brands, as they were not able to show:

Active coupons which are redeemed and not redeemed.  
Expired coupons which are redeemed and not redeemed.  
The goal here is to provide information to customers regarding their issued coupons and relevant offer-related information. 

Solution  
We have launched new values in the `status` query parameter to filter coupons on basis of

active_redeemed - Active coupons which are redeemed.  
active_unredeemed - Active coupons which are not redeemed.  
expired_redeemed - Expired coupons that are redeemed.  
expired_unredeemed - Expired coupons that are not redeemed.

Use cases

- Enables brands to show filter coupon codes for each customer by active, expired with redeemable status.
- Brands will be able to display desired set of coupons on their Mobile App/Web App/System and enable customers with more information. For example, brands can display active_redeemabe coupons to each customer on the brand's mobile app and nudge customers to redeem them.
- For details on how to use the new parameter values, see GET [Coupon APIs](ref:coupon-apis) v2/customers/coupons API