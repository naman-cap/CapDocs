---
title: Offer advanced settings
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
To know more about offering advanced settings, refer to the following. 

![5b84848 c7LCkYt4zePkCaendXXvXy4NUuXNpvdfXg](https://files.readme.io/5b84848-c7LCkYt4zePkCaendXXvXy4NUuXNpvdfXg.png)

Navigate to **Dashboard** > **Incentive** > **Create offer** > **Modify advanced settings**.

## Modify advanced settings

#### Issual & Reminder Settings

* **Restrict based on past coupon issuals**: Enable this option to restrict customers to receive the selected coupons. Search or browse coupons and select. The selected coupons will not be sent to the customers who have received these coupons in the past 6 months.

![5555d91 abBl4XPrOYTf9HpJqsbWMMWg8XAaRe Sqw](https://files.readme.io/5555d91-abBl4XPrOYTf9HpJqsbWMMWg8XAaRe-Sqw.png)

* **Max issuals per customer**: Set the maximum number of coupons to be issued to each customer. You can also select the minimum gap (number of days) between two consecutive coupon issues.\
  ![](https://files.readme.io/6abb3f7-image.png)
* **Limit total issual from the offer**: Enable this option to restrict the maximum coupon to be issued in an offer.\
  ![](https://files.readme.io/5b857d6-image.png)
* **SMS content for resending the coupon**: Enable this option to allow resending the coupons if a customer missed them. Example: If a customer missed a coupon and request an executive to resend it. The executive can resend the coupon if this option is enabled.\
  ![](https://files.readme.io/82d6ef1-image.png)
* **Send expiry reminders** : Enable this option to send a coupon expiry reminder to customers through SMS/Email. You can create multiple reminders with different timing, message channel, and content for each reminder.\
  ![](https://files.readme.io/e3e23af-image.png)

## Redemption Settings

* **Allow anyone to redeem it**: Enable this option to allow redemption of a coupon by a non-recipient. It will increase the chance that a coupon is redeemed\
  ![](https://files.readme.io/0070d3f-image.png)

* **Redemption can start**: Set the redemption start time. The coupon can be redeemed can be set in three ways.

![e2c9c8e image](https://files.readme.io/e2c9c8e-image.png)

1. right after issual: The coupon redemption can start just after receiving.
2. Based on coupon issual & coupon expiry date :  Enter number of days. The coupon redemption can start after the specified number of days and also no. of days before the coupon gets expired.
3. Based on a specific date and coupon expiry date: Set a specific date. The coupon redemption can start from that day.

* **Redemption limit**
* **Allow a coupon to be redeemed more than once**: Enable this option to allow a customer to redeem the coupon more than once. After enabling this option, *Limit the maximum times a customer can redeem a coupon option* that appears in a disable mode. 

![5e24ff3 RfPuA cWedrVqAcXsFcLVejV78S3Q2pDOA](https://files.readme.io/5e24ff3-RfPuA_cWedrVqAcXsFcLVejV78S3Q2pDOA.png)

* **Limit the maximum times a customer can redeem a coupon**: Enable this option to set the maximum number of times the coupon can be redeemed by a customer. You will see the *Limit* option. 

![10982bc B2D7NP 3TzkZMiZe53aBPGg3txgQzhayMA](https://files.readme.io/10982bc-B2D7NP_3TzkZMiZe53aBPGg3txgQzhayMA.png)

* In **Limit to**, set the maximum number of times the coupon can be redeemed by a customer. 

![16ae8e8 MfaQiMzqyslIUYuMZxMZu LUc9X49544dg](https://files.readme.io/16ae8e8-MfaQiMzqyslIUYuMZxMZu_LUc9X49544dg.png)

* **Stores allowing redemption**: By default, an offer can be redeemed at any store. You can also set an offer to be redeemed at only particular stores. Using this option you can select the stores or upload a list of stores.

![8308dc3 image](https://files.readme.io/8308dc3-image.png)

* **Bill Amount that can redeem the coupon**: You can restrict the minimum and maximum bill amount criteria for offer eligibility. The coupon can be redeemed only if your bill amount is under the limitation.\
  ![](https://files.readme.io/972b38b-image.png)
* **Days & time when the coupon can be redeemed**: You can choose to set the coupon to be redeemed on a particular day, date, and time slot.

![3bc39c5 image](https://files.readme.io/3bc39c5-image.png)

* **Require gap between the redemption of a customer**: Enable this option to set a minimum gap (number of days) between two consecutive redemptions. This option is not applicable if the coupon is restricted to redeemed only once.\
  ![](https://files.readme.io/95c1a25-image.png)
* **Limit total redemption in the offer**: Enable this option to limit the maximum number of coupon redemption in an offer. You can set the maximum allowed coupon redemption number. 

![8bcb9d7 image](https://files.readme.io/8bcb9d7-image.png)

* **Restrict to new customers**: Restrict coupons to new customers or first-time customers based on customer registration date or number of transactions made

![c9535ae image](https://files.readme.io/c9535ae-image.png)

  Now Click on Preview and save to save the settings.

![5770176 image](https://files.readme.io/5770176-image.png)

[https://capillarytech.atlassian.net/wiki/spaces/LOYAL/pages/1557659779/Coupon+redemption+by+new+customers+only.+CAP-51742](https://capillarytech.atlassian.net/wiki/spaces/LOYAL/pages/1557659779/Coupon+redemption+by+new+customers+only.+CAP-51742)

**Use case: A brand wants to issue coupons to customers at their first transaction. Brands directly receive the transactions, there's no enrolment which happens before the transaction, hence customers who make their first purchase should be able to redeem a coupon and this coupon shouldn't be applicable to existing users.**

Here, third party upload can be used because we don't know who these customers are, there's no issuance of coupons in this case.

validMaxUserTransactionLimit >> Users can give an input of max transactions that can happen to redeem a particular coupon

As per the above use case, if a brand gives third party coupons to its store and while creating a coupon series, they select **through third party codes upload** and then they upload existing coupon codes and enable this option of restricting to new customers based on the number of transactions where they put max as 0, then only those customers will be able to redeem the coupon who have not made any transaction earlier, and if anyone who has made any transaction earlier, then the coupon will not be redeemed for them

![](https://files.readme.io/c34de36-Screenshot_2023-04-12_at_11.21.36_AM.png)

* During isRedeemable or Redeem call, we fail the call if customer\_tranxCount > validMaxUserTransactionLimit
* validMaxUserTransactionLimit=0 ensures that users who have not done any transaction can redeem the coupon.

## Track the reversal status of a coupon

**Background**

Earlier, when a coupon redemption was reversed due to a return of a transaction, customers would not be able to see in their account if the coupon was actually reversed. They would not remember the code that was originally redeemed even if the coupon was restored in their account & visible in the list. This would lead to unnecessary queries coming to support.

Hence, brands want to indicate in their mobile UIs as to which coupon was reversed and then reinstated.

* This will help customers to easily identify the coupon that was reversed, thus reducing confusion and the number of queries made to support.
* Additionally, this feature will also improve the customer's experience by providing them with transparency and visibility into the status of their coupons.
* Brands can also use this feature to track and analyze the performance of their coupon campaigns and make data-driven decisions to optimize their rewards strategy.

**Impacted APIs :**

*Get Customer Coupons*\
*Get Coupon details*

In both the APIs response, isReversed and last\_status\_change\_on values would be returning from the coupon\_redemptions table based on active and last\_status\_change\_on column.

### API change

**1. Get customer Coupons**

**Request Param added:**

includeReversedRedemptions: true/false

**Response block:**

```
{
   "response":{
      "pagination":{
         "limit":"100",
         "offset":"0",
         "total":1
      },
      "status":{
         "success":"true",
         "code":"200",
         "message":"SUCCESS"
      },
      "customers":{
         "customer":{
            "firstname":"John",
            "lastname":"Doe",
            "email":"johndoe@example.com",
            "mobile":"44700900999",
            "external_id":"EXT001",
            "id":"1034",
            "coupons":{
               "coupon":{
                  "id":"2423525",
                  "redemption_count":"1",
                  "created_date":"2013-12-13T16:14:54+05:30",
                  "valid_till":"2016-12-21",
                  "code":"VOCU24902",
                  "transaction_number":"BILL-10304",
                  "redemptions":{
                     "redemption":{
                        "date":"2016-12-12 12:12:12",
                        "transaction_number":"BIL2042040",
                        "redeemed_at":{
                           "code":"storecode",
                           "name":"My store"
                        }
                     }
                  }
               }
            },
	"reversed_redemptions": {
      "redemption": [{
        "date": "2016-12-12 12:12:12",
        "transaction_number": "BIL2042040",
        "redeemed_at": {
          "code": "storecode",
          "name": "My store"
        },
        "reversed_on":"2016-12-12 12:12:12"
      }]
    }
            "item_status":{
               "success":"true",
               "code":"1000",
               "message":"Issued coupons retrieved successfully"
            }
         }
      }
   }
}

```

**2. GetCouponDetails**

**Request Param added:**

includeReversedRedemptions: true/false

**Response block:**

```
{
   "entity":{
      "pagination":{
         "limit":"100",
         "offset":"0",
         "total":4
      },
      "customers":[
         {
            "firstname":"Tom",
            "lastname":"Sawyer",
            "mobile":"918860000001",
            "id":401031250,
            "coupons":[
               {
                  "code":"KNRYHMRW",
                  "seriesId":363653,
                  "description":"NewCouponForAll",
                  "validTill":"2029-09-01T00:00:00+05:30",
                  "discountType":"ABS",
                  "discountValue":1000.0,
                  "discountUpto":0.0,
                  "redemptionCount":0,
                  "redemptionsLeft":1,
                  "id":399000028,
                  "createdDate":"2021-09-25T16:28:11+05:30",
                  "transactionNumber":"2147877652",
                  "issuedAt":{
                     "code":"storecode",
                     "name":"webstore1"
                  },
                  "redemptions":[
                     {
                       "date": "2022-03-10T14:48:09+05:30",
                       "transactionNumber": "1646903888000",
                       "redeemedAt": {
                       "code": "luciauto_store2",
                       "name": "Auto Store2"
                      }}
                  ],
                  "reversedRedemptionInfo":[ //section showing reversal details
                     {
                       "date": "2022-03-10T14:48:09+05:30",
                       "transactionNumber": "1646903888000",
                       "redeemedAt": {
                       "code": "luciauto_store2",
                       "name": "Auto Store2",
                         "isReversed": true,
                         "reversedOn": "2022-03-10T14:48:09+05:30"
                      }}
                  ]
               },
               {
                  "code":"7TF6TBQB",
                  "seriesId":363653,
                  "description":"NewCouponForAll",
                  "validTill":"2029-09-01T00:00:00+05:30",
                  "discountType":"ABS",
                  "discountValue":1000.0,
                  "discountUpto":0.0,
                  "redemptionCount":0,
                  "redemptionsLeft":1,
                  "id":399000029,
                  "createdDate":"2021-09-25T16:28:11+05:30",
                  "transactionNumber":"2147877652",
                  "issuedAt":{
                     "code":"storecode",
                     "name":"webstore1"
                  },
                  "redemptions":[

                  ]
               },
               {
                  "code":"6JAFX7ZF",
                  "seriesId":363653,
                  "description":"NewCouponForAll",
                  "validTill":"2029-09-01T00:00:00+05:30",
                  "discountType":"ABS",
                  "discountValue":1000.0,
                  "discountUpto":0.0,
                  "redemptionCount":0,
                  "redemptionsLeft":1,
                  "id":399000026,
                  "createdDate":"2021-09-25T16:25:25+05:30",
                  "transactionNumber":"2147877651",
                  "issuedAt":{
                     "code":"storecode",
                     "name":"webstore1"
                  },
                  "redemptions":[

                  ]
               },
               {
                  "code":"KZWMCYTR",
                  "seriesId":14162,
                  "description":"Mobile Push offer 1",
                  "validTill":"2022-03-20T00:00:00+05:30",
                  "discountType":"PERC",
                  "discountValue":10.0,
                  "discountUpto":0.0,
                  "redemptionCount":0,
                  "redemptionsLeft":1,
                  "id":397755229,
                  "createdDate":"2021-09-01T17:53:43+05:30",
                  "transactionNumber":"2147861881",
                  "issuedAt":{
                     "code":"storecode",
                     "name":"webstore1"
                  },
                  "redemptions":[

                  ]
               }
            ]
         }
      ]
   },
   "warnings":[

   ],
   "errors":[

   ],
   "success":true
}

```

Refer to the tech changes documentation [here](https://capillarytech.atlassian.net/wiki/spaces/LOYAL/pages/3545956355/Shell+Status+required+for+coupon+reversal)

## Now, Product Codes are supported while creating offers via API

**Background**

Previously, while creating coupons via API, there was no support for the product codes, instead it only supported product IDs which the brand doesn’t know.

On an average larger brands would create 10-20 different offers a day which is time taking as its a manual setup. Most of these offers are created for specific products, categories and brands. Previously, the API didn’t allow the user to select brand code or category code while applying the restrictions.

**Solution**

Now, the user would be able to create the offer via API by adding product code restrictions on brand code or category code. 

This is how the flow will work:

* Users will pass brand code and category code as an input while creating the offers
* These codes will be converted to corresponding capillary IDs
* These IDs will be passed to LUCI
* LUCI will return these IDs in the getCall

Product codes supported today: Brand, Category, SKU

*Below is the previous payload for the product info in API*

**"productInfo":\[\{"productType":"BRAND", "productIds":\[135737,162379] }**

*Current payload:*

**"productInfo":\[\{"productType":"BRAND", "productCodes":["BRAND\_1","BRAND\_2"]["BRAND_1","BRAND_2"]}**

### Points to note

* In case of any change in the brand code and category code, it is required to update the intouch DB with the updated codes otherwise the data will not sync at both the ends.
* Product codes (Brand, Category and SKU) will be validated while creating the offers via API at intouch end and in case code is incorrect, no offer will be created and error will be thrown. Ex: In case, any product code is not valid, following error message will be displayed

*invalid brand ids passed : 789, 456, 123*

* Brands should either send product IDs or product codes but not both or else an error will be thrown like below:

*Both IDs and Codes cannot be passed*

* Sku\_codes, brand codes, and category codes are case insensitive in product master
* There is no change in fetch calls, this update is only for POST i.e offer creation
* Luci supports product IDs which are passed by Intouch, it doesn’t support product codes.

**Previous Sample Request**

```
{
   "CouponSeriesV2": {
       "discountCode": "XYZ123",
       "maxCreate": -1,
       "description": "DIWALI 10% OFF",
       "productInfo": [
           {
               "productType": "BRAND",
               "productIds": [
                   123,
                   456
               ]
           }
       ]
   }
}
```

**Current Sample Request**

```
{  
   "CouponSeriesV2": {  
       "discountCode": "XYZ123",  
       "maxCreate": -1,  
       "description": "DIWALI 10% OFF",  
       "productInfo": \[  
           {  
               "productType": "BRAND",  
               "productCodes": [  
                   "MAX",  
                   "PANTALOONS"  
               ]  
           }  
       ]  
   }  
}
```
