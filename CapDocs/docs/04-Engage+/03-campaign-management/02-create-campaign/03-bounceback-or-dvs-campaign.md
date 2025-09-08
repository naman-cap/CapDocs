---
title: Bounceback or DVS Campaign
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
> Bounceback or DVS campaign can be created from the old UI only.

Bounceback campaigns help issue coupons instantly to customers based on the current purchase or a barcode scan. Hence, you can write rules on either of the two events:

* **New Bill DVS:** Lets you create rules on a new transaction
* **Scan (New Feature):**  Lets you create rules on a new scan event. This supports SKU/product code, promotion code, and customer included in the ‘feed’ API input. You can create conditions on product code, product brand, and product category.

<Note title="Note">
As only the New Transaction event was supported earlier, all the existing DVS actions will be marked with the NewBillDVS event and there won’t be any impact on the existing DVS actions.
</Note>

**Scope Limitation**

* The scan event works only for registered customers

* Loyalty actions such as points allocation couldn’t be triggered for a scan event

* Reporting on Essential Insights is not covered for the scan event

* A customer can redeem these coupons either for the same transaction or on the next transaction by the customer.

This article covers the following:

* Use Cases of DVS or Bounceback Campaign
* Create Bounceback or DVS Campaign
* Creating SMS Template for Bounceback Campaign
* Creating Email Template for Bounceback Campaign
* Creating WeChat Template for Bounceback Campaign
* Campaign Priority Settings

## Usecases of Bounceback Campaign

![d12982c image](https://files.readme.io/d12982c-image.png)

## Create bounceback or dvs campaign

To create a new Bounceback campaign

1. On the InTouch portal, select \*\*Home \*\*from the left-hand corner.

2. Select \*\*Engage+ \*\*from the sidebar menu.

![31313fc05c6c0826b9ea98335dbb8c8b278c48425ab21fcb9767ed89fdde26ec image7](https://files.readme.io/31313fc05c6c0826b9ea98335dbb8c8b278c48425ab21fcb9767ed89fdde26ec-image7.png)

3. Select **Open old campaign manager**.

![0186aef6b94081469abfbc530e735357dd41ec546ea8fd19cd37e6f39e63538e image5](https://files.readme.io/0186aef6b94081469abfbc530e735357dd41ec546ea8fd19cd37e6f39e63538e-image5.png)

4. Select **+New Campaign** from the **Campaigns Home** page.

![f3e1651b98deb5bb1c87e24b3348a0b8e7dff7809b0e5b85e68589dab7162256 image2](https://files.readme.io/f3e1651b98deb5bb1c87e24b3348a0b8e7dff7809b0e5b85e68589dab7162256-image2.png)

5. Choose the campaign type from the dropdown menu. Choose Bounceback Campaign.

![176cd68f5531c0f29286369a26478c7c5197040dbbe9bfd16b766923625a5422 Screenshot 2025 05 23 at 1](https://files.readme.io/176cd68f5531c0f29286369a26478c7c5197040dbbe9bfd16b766923625a5422-Screenshot_2025-05-23_at_1.41.42_PM.png)

6. Enter the required details for the selected campaign and select appropriate configuration settings.

#### The table below provides descriptions of each field.

| **Field**                                                                                                                                                    | **Description**                                                                                                               |
| :----------------------------------------------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------- |
| Campaign Name                                                                                                                                                | Name of the campaign.                                                                                                         |
| Description                                                                                                                                                  | Brief description of the campaign.                                                                                            |
| Valid between                                                                                                                                                | The date range for which the campaign is valid for.                                                                           |
| [Campaign Objective](https://docs.capillarytech.com/docs/referral-campaign#the-table-below-provides-descriptions-of-each-category-under-campaign-objectives) | The primary objective of the campaign.                                                                                        |
| Disable Test-Control for this Campaign                                                                                                                       | Enable or disable test control - dividing the audience into test and control groups to evaluate the campaign's effectiveness. |

#### The table below describes each category:

| Categories    | Values                              | Help Text                                                                                                                            |
| :------------ | :---------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------- |
| Acquisition   | General                             | Acquire new transacting customers from a given acquisition channel                                                                   |
|               | Referral                            | Acquire new transacting customers through referrals by existing customer                                                             |
| Delight       | Birthday/Anniversary                | Delight customers with incentives around life events to encourage them to transact by redeeming points or coupons                    |
|               | Feedback/Survey                     | Delight customers with incentives and encourage them to take a survey or provide feedback                                            |
| Informational | Customer Joinee Program             | Encourage new loyalty customers to know more about the program benefits and the brand. Increase in repeat purchase frequency and LTV |
|               | Store Opening (Awareness)           | Inform customers nearby about a new store opening to boost transactions at the store                                                 |
|               | Product Launch                      | Inform potentially interested customers about a new product launch to boost sales for the newly launched product                     |
|               | Season/Arrivals                     | Inform potentially interested customers about new collections/stock in the stores to boost sales                                     |
|               | Brand awareness, Infomercial        | Brand building exercise and information sharing with customers to increase overall customer engagement with the brand                |
| Promotional   | Up sell                             | Promotional campaign to encourage people to buy higher volumes of the same SKUs - higher count per SKUs                              |
|               | Cross-Sell                          | Promotional campaign to encourage people to buy different SKUs - higher count of unique SKUs                                         |
|               | Sales Booster                       | Promotional campaign to encourage people to buy more - higher ABS and ABV                                                            |
| Miscellaneous | Heavy Discount Sale (includes EOSS) | Boost sales during any heavy discount periods including festivals and EOSS                                                           |
|               | Frequency Enhancer                  | Encourage lower frequency visitors to transact more frequently                                                                       |
|               | Lapsation                           | Reactivate lapsed customers and encourage them to transact                                                                           |

7. Select Disable Test-Control to include all the customers eligible for this campaign. (Normally every campaign will have a control group (for example 10% of the eligible members who are randomly selected) to whom the marketing communication is not sent. The control group is essential to measure profits.)
8. Click **Create Campaign**.  You will see the following screen:
9. Click on +New Action to create a rule for the Bounceback campaign. You need to create at least one action for a campaign

![3915f1b image](https://files.readme.io/3915f1b-image.png)

5. Configure the rule based on the descriptions provided below and click Submit to save the configurations

6. In the Action Name/Tag, enter a name for the rule. It is recommended to specify a unique action name. It can be paired with the Campaign's name

7. In Event specify the event for the rule - NewBillDVS or Scan Event

* NewBillDVS: Choose this to create rules on new transaction event

* Scan Event: Choose this to create rules on the scan event

3. In the Targeted Stores, select either Upload Stores CSV File or Run on Specific Stores.
4. If you select Upload Stores CSV File, the following screen appears

![0ec6cac image](https://files.readme.io/0ec6cac-image.png)

5. For CSV upload, stores name should be uploaded via CSV.
6. In Run on specific stores list, select the stores that you want to include or exclude for this campaign. To select stores, highlight the stores you want to select and click Add
7. By default, the Accept above Stores option is enabled. Keep the option on if you want the selected stores to be included for the campaign.

* To exclude stores that you have selected from running this campaign, click the button to enable the Reject above stores option.
* If you do not select any stores, then all the stores will run this campaign by default

8. In the Conditions box, set the conditions for this campaign to take effect\
   As you type conditions, auto-suggests tags appear which you can select. For example, if you want to create a condition for transactions greater than 100 dollars, type currentTxn.value>100.
   New conditions supported for Scan event: SKU Code (currentProduct.code), SKU Brand (currentProduct.doesBrandRegexMatch), SKU Category (currentProduct.doesCategoryRegexMatch), Promotion Code (currentEvent.promotion), Customer (currentCustomer.) - all the conditions of transactionAdd are supported for customer.
9. Create rules either on the condition Success or Failure or both in the respective fields
10. Click on Add New Coupon Series to create a new coupon series or click Claim New Coupon Series to claim an existing offer.

Once you see the offer(s) created or claimed for the campaign in the drop-down. Choose the offer that you want to claim for the condition Success or Failure case. You will see the supported communication channels

![a5216a3 image](https://files.readme.io/a5216a3-image.png)

11. Click Add of a specific channel to create the message template, and create the template accordingly. Refer to the sections to know how to create a template for each channel.

12. For SMS and email, you can choose your preferred sender IDs from the ones configured for the org to send DVS messages.

    * Check Use default sender to send messages from the default sender ID configured for the communication type.
    * Uncheck Use default sender to your preferred sender ID. You will see options to select sender domain and sender IDs. Use the drop-down to choose your preferred options.

      Select the Domain select domain , GSM sender id, and CDMA sender id.

13. Click Submit to save the campaign

14. We can write a rule in DVS in which customer can receive multiple coupons on the first transaction of the day.

    * Create the first action under the DVS campaign with the rule `currentCustomer.numberOfTxnsToday == 1`. Set the maximum coupon issuances as per your requirement. If you want to issue coupons after the first transaction, create a second action.

    <br />

![c4223da88f1abc417148c6947dd1e195124284cdec347f06211e0f039151fd69 image 1](https://files.readme.io/c4223da88f1abc417148c6947dd1e195124284cdec347f06211e0f039151fd69-image_1.png)

## Creating sms templates for bounceback campaign

Click Add against SMS. The SMS screen setting screen appears:

![7df4f1e image](https://files.readme.io/7df4f1e-image.png)

1. Click on either New Template or select an existing one.
2. To create a New Template for the SMS, click New Template
3. In the Message box, type a new message with the tags of Customer Name, Voucher Code, and Voucher Expiry Date as shown below:
4. Click Next, a pop-up message appears as shown below. Either save the template by giving a name or skip
5. In the Delay in sec(s) box, add the number of seconds/minutes by which you want to delay the message from the transaction time.
6. Click Save
7. You will be navigated to the Overview page where actions are listed as shown below. Actions can be edited and deleted.

![40da26f image](https://files.readme.io/40da26f-image.png)

### Creating email template for bounceback campaign

1. Once you click Add, you will see options to create a new template or select an existing template
2. Click New Template to create a template from the scratch or select one from an existing list
3. To create a New Template for an Email, click New Template. The Email screen setting screen appears:
4. In the Subject box, type the email subject
5. In the Message body, type the content and use insert tags to include dynamic tags in the email
6. Click on Preview to view, click Next. The following screen appears:
7. In the Delay in sec(s) box, add the number of seconds/minutes by which you want to delay the message after the transaction.
8. Click save
9. The Finalize Settings screen appears. In the Finalize Settings section, you can see a preview of the coupon configurations.
10. If you are satisfied with the settings, click on submit to save the coupon configurations. You return to the overview tab.
11. Click +New Action to add the rule for the campaign. You can add as many rules as you want.  The Actions List section displays all the rules created in the bounceback campaigns.

## Creating wechat template for bounceback campaign

Once you click on Add, do the following in the new pop-up that appears:

1. Click the available drop-down and choose a template from the existing list. New template cannot be created
2. In the Delay in sec(s) box, add the number of seconds/minutes by which you want to delay the message after the transaction.
3. Click Save

## Campaign priority settings

If a campaign has more than one rule and a transaction satisfies multiple rules, you can define which rule to be executed among two or more on the Priority settings page.

1. On the Campaign details page,  click Priority Settings

2. Set the maximum number of coupons that you want to allow per transaction in Maximum coupons issued to a customer in a single transaction

3. Enable Set Priority to configure rule-based priority. If you disable this, the system randomly chooses a rule and issues a coupon if multiple rules are satisfied

4. In Priority set the priority of each rule using the up or down arrow. The priorities will be set based on the alignment. The least number (1) will have highest priority. Alternatively, you can also drag and drop the element to the desired position.