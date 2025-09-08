---
title: Create Offer
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

Creation of an offer involves coupons, issual, expiry and redemption settings. This topic guides you on how to configure a new offer.

To create a new offer:

1. Click Create Offer and setup the offer based on the description provided herein

2. Offer name & expiry

![](https://files.readme.io/9d41215-KcdhwXlMEPBTzyRfzanKU94WzRWqJW-bFg.jfif)

| OPTION | DESCRIPTION |
|--------|-------------|
| Offer name | Specify a name for the offer |
| Offer expires | Choose the preferred expiry option for the offer<br/>• **Along with campaign/system**: To expire along with the service that consumes this offer. For example, if the service, say Outbound Campaign, is expiring on 31st Dec, the offer also expires on the same date and time.<br/>• **Fixed date**: To expire the offer on a specific day. Click the calendar icon to set the expiry date. If 31st Dec is set as the fixed offer expiry date, irrespective of the expiry of the service that is consuming the offer, the offer expires on 31st Dec. |

3. Discount Details

| OPTION | DESCRIPTION |
|--------|-------------|
| Discount value for each coupon | Select the preferred discount type<br/>• Fixed Amount for flat amount discount and specify the amount in the respective field ($20)<br/>• Percentage based for % (of transaction amount) discount and specify the percentage in the respective fields (10%) |
| Valid on | Restrict the coupons (of the offer) redemption by:<br/>• Applicable for all products: Select All Products<br/>• Applicable for your preferred products or categories: Choose **Select products**<br/>Click on the drop-down and choose **Category** (to choose products by category) or **Item Code** (to choose products by item code)By category: Select preferred categories from the drop-down &gt; Click **Select** &gt; Click **Add Product** |
| Valid on item for sale | • **Enable** the field to allow the coupon redemption even on sale items or **Disable** the field to not allow coupon redemption on sale items |

4. Coupon details

| OPTION | DESCRIPTION |
|--------|-------------|
| How to create coupon codes? | Select the preferred option for creating offer coupons<br/>• Automatically create unique codes to generate coupon codes automatically (dynamic coupon codes)<br/>• Issue to specific customers only to issue the current coupons to your preferred customers &gt; Click View/Add &gt; Click Choose .csv file and &gt; Upload the .csv file that consists of your preferred customer identifiers<br/>  • Give a common code to all couponto issue a static coupon code to customers<br/>• Generic code: Specify the coupon code without any special characters<br/>• Issue to specific customers only to issue the current coupons to your preferred customers &gt; Click View/Add &gt; Click Choose .csv file and &gt; Upload the .csv file that consists of your preferred customer identifiers<br/>  • Upload existing coupon codes to manually upload coupon codes (.csv files with coupon codes) - Click View/Add to see available options<br/>• Internal Coupons: Coupons created by any service within the organization and are mapped to customers. Only customers associated with these coupons can redeem it and<br/>Click CHOOSE .CSV FILE to upload the coupons<br/><br/>To tag coupons to customers, enable TAG COUPONS TO CUSTOMERS, &gt; create a .csv file with customer-coupon details and &gt; Click CHOOSE .CSV FILE to upload<br/><br/>• External Coupons: Coupons created outside of your organisation. These are not mapped to customers, and thus can be redeemed by anyone. |
| When would a coupon expire? | Set when you want to expire coupons of the current offer(coupons cannot be redeemed after the expiry date)<br/>• Along with the offer to expire coupons along with the Offer name & expiry &gt; Offer expires &gt; Fixed date. This is applicable only if the Offer expires is a Fixed date<br/>• \_\_\_\_ days from issual to set the expiry after n days of issual.<br/>For example, If a coupon is issued on 12th November<br/>0 days from issual	Expires on 12th Nov EOD<br/>1 days from issual	Expires on 13th Nov EOD<br/>• \_\_\_\_ weeks from issual to set the expiry after n weeks from issual week (Monday to Sunday).<br/>For example, if the coupon is issued on 12th Nov 2018 which is Monday<br/>0 weeks from issual	Expires on the Sunday EOD of the same week - 18th Nov, 2018<br/>1 weeks from issual	Expires on the Sunday EOD of the next week (25th Nov, 2018)<br/>• \_\_\_\_ month ends from issual to set the expiry at the end of nth month from issual date.<br/>For example, if coupon is issued on 12th November then<br/>0 month from issual	Expires on 30th Nov<br/>1 month from issual	Expires on 31st Dec |
| Offer name & expiry | Select your preferred option for Offer expiry<br/>• Along with campaign/system to expire the offer along with the campaign expiry<br/>• Fixed date to expire the offer on your preferred date |

5. Click Advanced Settings to see  issual, reminder, and redemption settings and navigate to Issual & Reminder Settings

| OPTION | DESCRIPTION |
|--------|-------------|
| Restrict based on past coupon issuals | Enable Restrict based on past coupon issuals to restrict coupon issual to customers based on the past 6 months issuals. You will see the list of active coupons of the last 6 months. Check Show Expired to also see the coupons expired in the last 6 months.<br/><br/>Select coupons from the list. If any of the selected coupons are issued to a customer in the past then the current series' coupon will not be issued to that customer |
| Max issuals per customer | Restrict the number of coupon issuals of the current series per customer<br/>• Max issuals per customer: 1 ,  \_\_\_  (your preferred count), No limit (to not limit the count of coupon issual per customer)<br/>In If a customer matches the criteria again<br/>• Select Resend existing coupon to send the same coupon again<br/>• Select Do not send any coupon to ignore sending any coupon |
| Limit total issuals from the offer | **Limit total issuals from the offer:**<br/>This option lets you limit the number of coupon issuals for the current offer.<br/>• Enable Limit total issuals from the offer and set the limit in Limit to to the maximum number of coupons that you need to send for the current offer.<br/>• **Send notification for issual limit**:<br/>You can notify brand POCs when the coupon issual limit is about to reach a certain threshold value. The notification is sent to the brand POCs through email.<br/>  • Enable Send notification for issual limit and in Notify when set the threshold value when you want the notification to be sent. |
| SMS content for resending the coupon | Set the SMS template for reissuing coupon. Click Edit and enter the message as required. Use predefined Tags wherever necessary. If the message has unicode characters, check **Allow unicode characters** |
| Send expiry reminder | Enable **Send expiry reminders** to send coupon expiry reminders to the relevant customers.<br/>Set your preferred date and time (prior to the expiry) of the reminder. Similarly, you can add multiple reminders using the +Reminder option. |

6. In Redemption Settings, do the following

| OPTION | DESCRIPTION |
|--------|-------------|
| Allow anyone to redeem it | Enable Allow anyone to redeem it to allow even non-recipients of the coupon redeem the coupon using coupon code. |
| Redemptions can start | Restrict the redemption period using the available options<br/>Redemption can start<br/>• right after issual :  A coupon can be redeemed right after the issual<br/>• \_\_\_\_ days after issual:  Can be redeemed after the end of nth day. If a coupon is issued today and you say Redemption can start as 1 days after issual then coupon can be redeemed from tomorrow (irrespective of the time of issual. Only date is considered)<br/>• from a specific date - &lt;Select date &gt;- .<br/>For example, redeem after 30 days of issual from a specific 22/10/2018 - Coupons are allowed to redeem only after 22/10/2018 and after 30 days of receiving it. |
| Allow a coupon to be redeemed more than once | • Enable Allow a coupon to be redeemed more than once<br/>• To limit maximum redemptions per customer, enable Limit the maximum times a customer can redeem a coupon and enter the value in set your preferred value in Limit to |
| Stores allowing normal, offline redemption | Choose whether to restrict redemptions by Zone, Concept or Stores.<br/><br/>Choose Upload CSV file to upload a file containing the ids of your preferred zones/stores/concepts<br/>Choose Select Values to select your preferred zones/stores/concepts from the list directly |
| Bill amounts that can redeem the coupon | This option lets you limit coupon redemption by transaction amount.<br/>• Enable Minimum bill amount and set the minimum transaction amount required to redeem the coupon of the current series<br/>• Enable Maximum bill amount and set the maximum transaction amount up to which the coupon of the current series can be redeemed |
| Days & time when the coupon can be redeemed | This lets you limit the redemption of coupons based on day, week and hour.<br/>Select any of the options as required.<br/>• Days of the week - To allow redemption on selected days of a week- Sunday to Saturday<br/>• Days of the month - To allow redemption on selected days of a month - 1st - 31st<br/>• Hours of the day - To allow redemption in the preferred hours of a day |
| Require gap between redemptions of a customer | Enable Require gap between redemptions of a customer to limit the duration between two consecutive redemptions of a customer and set the duration (no. of days) in Minimum days between redemptions. |
| Limit total redemptions in the series | Enable Limit total redemptions in the series to limit the number of redemptions of the coupons of the current series and set the maximum coupons that can be redeemed in Maximum allowed \_\_\_ |

7. Click **Preview** and Save

8. Review the details and click **Save**

![](https://files.readme.io/241fb04-mlv9RznBEm8u71-DglfS9wKBZfilf-DILw.jfif)

You will see the coupon series id, series code and PoS identifier details in the Information tab.