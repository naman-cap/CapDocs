---
title: JAS 2022 | Loyalty+ Releases
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
## July Releases

### Supplementary Memberships to manage expiry of the scheme/program

Supplementary programs are micro programs run on top of the brand's core loyalty offerings. These offer customization at a segment level. However, these programs can have limited life as they are promotional in nature or based on partner related benefits.

Earlier, there was no option to set the validity of a particular supplementary program. Now, you can set the end date for supplementary programs. 

While setting up the programs, we now have two additional toggle buttons - 

* **Set validity** - You can set/update the end date of a supplementary program (SP) while adding.  Set the toggle button to *Yes*, you will see the **Validity till** option where you can set the end date of the supplementary program. 
* **Move customers to another program on expiry** - If the program expires or deactivates as per the validity set, you can move the customers of that program to a different supplementary program. Set the toggle button to *Yes*, a drop-down appears below (Backup partner programs). Select the partner program where you want to move those customers.\
  In the drop-down box, you will see only those partner programs whose validity/expiry is greater than the current partner program. 

### Improved integrations for Loyalty+ Promotions

Currently, apps only show running active loyalty promotions (points as benefit) to customers. There is no `getCustomerPromotions` API since loyalty promotions are not issued to a customer. They are event triggered.

The challenge is to remove these promotions once the customer achieves the condition and points have been allocated for the promotion. For cart promotions,  redemption count is checked  available and then do. However, points promotions are displayed as a hack via cart promotion API.

So, in the getPromotionsMetadata API for loyalty promotions, we have added a parameter “includeRestrictions”. 

Pass the parameter to return the following limits set along with the customer achieved values against those limits

* Maximum points to be issued in a single event&#x9;
* Restrict number of point events for a member
* Maximum points to be issued to a member
* Maximum points to be issued from the promotion

#### Sample Response

```json
"limits": {
   “maxPointsperEvent”:100
   "pointsPerCustomer": 1000,
   "numberOfTimesPerCustomer": 2,
   "totalPointsInPromotion": -1
   },
	 "customerLimits": {
   "currentPointsPerCustomer": 100,
   "currentNumberOfTimesPerCustomer": 2,
    }
“promotionLimit”{
   	"currentTotalPointsInPromotion": -1
}
```

## August Releases

### Calculate Target on Net amount and Gross amount

Earlier, in the “Add Target” flow of Target Loyalty, when target is to be set on the Sales KPI, it would by default be set on the basis of net amount (gross amount - discount) .

As a loyalty manager, I would want to set the target on the basis of gross amount.\
Eg: A customer achieves a target of Rs.5000 in a month, then the target is achieved.Here the amount 5000 can be either gross amount or net amount depending on the business requirement.

Description for this update:

* For a particular target group, in the “Add Target” window, there are options to select KPIs on the basis of which you want to track the target values.
* For the Sales KPI , now we have introduced the option to select “Net amount” or “Gross amount”. These are radio buttons and either of them can be selected.
* Under the condition block below this, if “Transactions” is selected in the drop down, then the net amount and gross amount are the bill amounts.
* Under the condition block below this, if “Line Items” is selected in the drop down, then the net amount and gross amount are the sum of line items.

![811eb7c unnamed](https://files.readme.io/811eb7c-unnamed.gif)

### Event notifications for target value updates

Currently we do not send communication to the customers on any updates done in the Targets.

As a marketing manager, I want to notify customers on target related updates to keep them informed and nudge them for further engagement

Description for this update:\
The event notifications have been created for the below target events:

* Target is achieved
* Target achieved value is updated
* Target defined value is updated
* Target period is completed

![0859fd1 unnamed 1](https://files.readme.io/0859fd1-unnamed_1.png)

### Link Supplementary Programs in various Loyalty events

Currently we support supplementary program linking in the AddTransaction event. However the linking event has a much broader applicability.

As a loyalty manager, I would like to be able to link members to supplementary programs based on customer attributes. Eg: BMW owners have a special supplementary program curated for them. This can happen at the time of registration or customer update.

Brands link members as part of rewards for various engagements like :

* Giving a coupon to the customer for linking
* Giving it as a benefit on tier upgrade
* Some behavioral events like playing games or completing N number of referrals…etc.

We successfully support the linking of supplementary program action in the following events :

1. Customer Registration event
2. Transaction Update event
3. Redeems a coupon event
4. Updates customer profile event
5. Behavioral events
6. Target completed event

## Field - “redemptionId”’s is added to the Bulk redeem coupons API response

Currently whenever multiple coupons are redeemed in bulk, the Redeem Customer Coupons (bulk) API does not send redemption Ids of the coupons in the response.

We have successfully added the redemption Ids in the response of the Redeem Customer Coupons (bulk) API. Please find below a sample response payload :

<HTMLBlock>{`
{  
    "response": \[  
        {  
            "entityId": 369454015,  
            "result": {  
                "id": 369454015,  
                "redemptionId":"123",  
                "currencyInput": false,  
                "localToBaseCurrencyExchangeRate": 0,  
                "warnings": \[],  
                "appendedErrorMessage": "",  
                "code": "U6ER8MJ5",  
                "discountCode": "NO_VALUE",  
                "seriesCode": 84093,  
                "isAbsolute": true,  
                "couponValue": 100.0,  
                "redemptionStatus": {  
                    "statusCode": {  
                        "status": true,  
                        "message": "Coupon processing successful",  
                        "code": 700  
                    },  
                    "warnings": \[],  
                    "warningsAsStatusCode": \[],  
                    "message": "Coupon processing successful",  
                    "code": 700,  
                    "success": true  
                },  
                "discountType": "ABS",  
                "discountValue": 100,  
                "discountUpto": 0  
            },  
            "errors": \[]  
        }  
    ],  
    "totalCount": 1,  
    "failureCount": 0  
}
`}</HTMLBlock>

### A filter added in 'Get Customer Coupons' API to fetch only the redeemable coupons of a customer

In the ‘Get Customer Coupons’ API, currently we don’t return the coupons which are redeemable. .

Once a coupon is redeemed, even if it can be redeemed more times, it will fall under an unredeemable coupon because it's redeemed once.

It is not possible to fulfill this requirement using the existing query params :

* ‘unredeemed’ - fetches only unredeemed, ignores redeemed coupons where the maximum redemptions are not yet met
* ‘redeemed' - fetches all redeemed coupons
* 'active' - fetches coupons based on expiry dates irrespective of redemption is possible or not

There are cases where a certain coupon can be redeemed multiple number of times. So, as a marketing manager, I would like to be able to show all the redeemable coupons to my customers.

We have successfully added a new parameter titled “redeemable”, that fetches all active coupons with redemptions available. 

### The coupon code character limit increased to maximum 40 across clusters

Currently the max coupon code length varies from cluster to cluster and in some clusters we allow max 20 characters. Also we do not support hyphens in the coupon codes while uploading them.

Description of this update:

1. We have set the max coupon code length to 40 in all clusters.
2. We now support the hyphen symbol (-) in the upload coupon codes.

## September Releases

### 1-Click view of Loyalty Performance Reports

On the current Loyalty UI, users aka Loyalty CRM Managers, Product teams and any external or internal members using Capillary’s Loyalty+, have only a view of the Loyalty Program Set Up including the Tiers, Reward Currency, Communications, Expiry details etc.\
To understand how these programs are performing and periodically measure and understand the KPIs, they had to follow a step-by-step process to reach Capillary’s analytics Product - Insights+. Taking cognizance of this multi-step access, we have improved it for users to have a nimble approach to checking the performance and KPI.

This step-by-step process has now been reduced to a single-click process. Now you can quickly access the specific critical Reports of your Loyalty Programs with one 1-Click.

**Problem statement**

User’s path to access to a specific critical reports on Insights+ from Loyalty+ has been a multi-step process causing users to lose motivation on the way.\
Measuring engagement and understanding user’s intent on Loyalty+ could not be fully ascertained.

**Use cases**

* User should be able to access specific reports on Insights in 1 click
* User should be able to view the specific reports opened on a separate tab so that context of Loyalty UI is maintained

**Solution**

1. Specific reports links have been put upfront on the Home page of Loyalty+ UI
2. Each Section as below has been tied up with relevant report which can be accessed by clicking on “View Reports” link on the respective tab

a. Following are the mappings:

i. Overall Performance: Top 5 reports

* Loyalty Sales Report
* Points Report
* Coupons Report
* Points Expiry Reminder
* Loyalty Standard Report

| Loyalty Feature Tab   | Associated Report       | Purpose                                                                         |
| :-------------------- | :---------------------- | :------------------------------------------------------------------------------ |
| Tiers                 | Loyalty Standard Report | To view overall KPIs for each of the tiers and overall loyalty base performance |
| Reward Currency       | Points Report           | To view Points allocation and redemption-related KPIs                           |
| Offers                | Coupons Report          | To view Coupons issuance and consumption KPIs                                   |
| Communication         | Loyalty Standard Report | To view the overall performance of Loyalty Base across strategic KPIs           |
| Points Expiry Section | Points Expiry Report    | To view overall KPIs related Points Expiry and reminders                        |

![87e88d2 image 2](https://files.readme.io/87e88d2-image_2.png)

![7870912 image 1](https://files.readme.io/7870912-image_1.png)

## October Releases

### Support for Hex Code in Loyalty tiers

**Problem Statement :**

Earlier the users could choose the color of the tier in the tier settings, by dragging the mouse on the color palette. But this allowed only limited colors to be selected for the tiers.

**Use Case:**

As a Loyalty program manager, I would like to use silver color for my silver tier, golden color for my gold tier, green color for my highest tier etc. but the color drag palette does not support these customized colors. 

**Feature Description:**

The tier color settings have been enhanced now. As you know each color is associated with a HEX code, so now you can edit this Hex code in the tier settings.If a color is not available in the color palette, simply type-in the HEX code of the required color, and the tier will acquire that color. The color cannot be changed for the default tier.

![](https://files.readme.io/be61e02-unnamed.png)

### Bulk Configuration tool for Workflows

**Problem Statement :**

* Through marvel rewards, brands setup catalogs with products, coupons, cart promotions, vendor reward etc. The currency for all these rewards are points owned by the customer.
* Currently we support static currencies i.e for the entire reward period the currency stays the same for the reward unless manually updated.
* If a brand wants to run promotions on their reward catalog i.e give discounts in the point value for a certain time and show additional promotions metadata for those items, it is not supported dynamically and needs to be changed manually at every instance.

**Feature Description:**

* Users will now be able to download a ruleset from any activity as a template as a file into their PC.
* This downloaded file will include both the true and false conditions with their respective expressions along with the actions configured within them.
* Users will be able to see which program this template was from, along with the customer activity, ruleset type (in case of Transaction Add it will be one of the 4 root types, it doesn’t matter for all other events) and the labels of the source rulesets (if available)
* Now, the users will be simply able to upload this downloaded file wherever they require the same set of configurations. But they will have to ensure that they replicate the sets in the same customer activity ( download rule sets from Transaction Add customer activity and upload them in any program, but in Transaction Add customer activity).

![42b1499 unnamed](https://files.readme.io/42b1499-unnamed.png)
