---
title: Create coupon series
excerpt: Lets you create a new coupon series for the org.
api:
  file: v2.json
  operationId: create-coupon-series-copy-archive
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
This API allows you to create a new coupon series for the org.

# Prerequisites

-   Authentication: Basic or OAuth authentication
-   Access group resource: Write access to coupon group resource

# Resource information

|               |                   |
| :------------ | :---------------- |
| URI           | /v2/coupon/series |
| HTTP method   | POST              |
| Pagination    | NA                |
| Rate limit    | NA                |
| Batch support | No                |

# API endpoint example

`https://eucrm.cc.capillarytech.com/v2/coupon/series`

<Note title="Note">
- You can make as many API calls as you need to create coupon series each day. But, it is important to be careful and balanced in how many calls you make at once to avoid overloading the system.
- If limits are set for coupon series in the system, these limits will acts as an restriction for creating the number of coupon series per day.
- The series expiration date applies before a coupon’s validity period. To keep coupons valid for their full duration, ensure the series expiration covers the coupon validity.
</Note>

# Body parameter

<HTMLBlock>{`
<table style="width: 100%; border-collapse: collapse;">
<thead>
<tr>
  <th style="border: 1px solid #ddd; padding: 8px;">Parameter</th>
  <th style="border: 1px solid #ddd; padding: 8px;">Data Type</th>
  <th style="border: 1px solid #ddd; padding: 8px;">Description</th>
</tr>
</thead>
<tbody>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>CouponSeriesV2</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Object</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Object containing the coupon series details.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>customPropertyMap</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Object</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>An object containing a collection of keys that represents unique property names and each value represents the corresponding property&#39;s value.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>customPropertyMap.key1</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>String</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Custom field of the coupon series, providing additional information about the coupon.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>customPropertyMap.key2</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>String</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Custom field of the coupon series, providing additional information about the coupon.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>standard_terms_and_conditions</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>String</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Custom field in the coupon series that provides information about the terms and conditions.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>description*</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>String</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Brief description of the coupon series.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>discountCode*</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>String</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>The code given for the coupon as the POS identifier.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>validTillDate*</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>String</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Validity of the card series in UTC timestamp. Format: YYYY-MM-DDTHH:MM:SS+/-(time-zone).</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>expiryStrategyValue</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Integer</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Specifies the duration a coupon remains valid based on the expiryStrategyType.  </p>
<p>For expiryStrategyType: &quot;SERIES_EXPIRY&quot;, expiryStrategyValue is always 1, which defines the coupon expires based on the rules defined for its series.  </p>
<p>For expiryStrategyType: &quot;DAYS&quot;, and expiryStrategyValue: &quot;5&quot;, specifies that coupon will be valid till 5 days of issuance  </p>
<p>For expiryStrategyType: &quot;MONTHS_END&quot;, and expiryStrategyValue: &quot;10&quot; specifies that the coupon will be valid for 10 months of issuance.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>maxCreate</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Integer</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Maximum number of coupons that can be created.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>maxRedeem</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Integer</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Maximum number of coupons that can be redeemed.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>anyUser*</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Boolean</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Indicates if any user can use the offer.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>redemptionPerCouponMaxLimit</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Integer</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Specifies the maximum number of times a particular coupon code can be redeemed across all users.<br><strong>Note</strong>:  </p>
<ul>
<li>Applicable only when the <code>anyUser </code>parameter is set to <code>true</code>.</li>
<li>The value must be greater than 0.</li>
<li>To create a coupon series without a redemption limit, set value as <code>null</code>or <code>-1</code></li>
<li>This parameter applies only to autogenerated coupon codes (<code>DISC_CODE</code>) and uploaded coupon codes (<code>DISC_CODE_PIN</code>).</li>
<li>Not applicable for <code>GENERIC </code>coupon codes or externally managed coupon series (<code>EXTERNALLY_MANAGED </code>= <code>true</code>).<br>Refer to the <a href="https://docs.capillarytech.com/docs/create-offer">Create Offer</a> section to know more about coupon code types.</li>
</ul>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>sameUserMultipleRedeem</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Boolean</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Indicates if the same user can redeem multiple times.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>isReferralExistingUsersAllowed</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Boolean</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Indicates if the referral is allowed for existing users.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>isMultipleUseAllowed</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Boolean</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Indicates if multiple uses of the offer are allowed.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>isValidWithDiscountedItem</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Boolean</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Indicates if the offer is valid with discounted items.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>smsTemplate*</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>String</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Template for the SMS that is sent to users.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>isSMSDisabled</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Boolean</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Indicates if SMS is disabled.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>info</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>String</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Additional information about the coupon.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>isMultipleVouchersPerUserAllowed</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Boolean</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Indicates if multiple vouchers per user are allowed.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>doNotResendExistingVoucher</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Boolean</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>indicates not to resend existing vouchers.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>mutualExclusiveSeriesIds</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>String</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Allows you to specify a list of offer IDs that are mutually exclusive to the current offer. If a customer already has a coupon from any of the offer IDs in this list, they will not be eligible to receive a coupon from the current series</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>maxVouchersPerUser</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Integer</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Maximum number of vouchers allowed per user.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>minDaysBetweenVouchers</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Integer</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Minimum days between issuance of vouchers.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>discountValue*</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Integer</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Discount value of the coupon.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>redemptionRange</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>String</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Defines the specific days, weekdays, and hours during which the coupon can be redeemed.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>minBillAmount</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Integer</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Minimum bill amount required to use the coupon.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>maxBillAmount</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Integer</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Maximum bill amount allowed for coupon redemption.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>maxRedemptionsInSeriesPerUser</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Integer</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Maximum redemptions in the series per user.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>minDaysBetweenRedemption</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Integer</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Minimum days required between redemptions.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>redemptionValidFrom</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>String</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Date from which redemption is valid.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>productInfo</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Array</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Information about the products on which the coupon can be applied.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>productInfo.productType</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Enum</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Type of the product. Supported values: SKU, CATEGORY, BRAND, ATTRIBUTE.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>productInfo.productIds</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Array</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>IDs of product.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>redemptionOrgEntityDetails</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Array</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Details about the organization entities where the coupon can be redeemed.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>redemptionOrgEntityType</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Enum</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Type of redemption organization entity. Supported values: CONCEPT, TILL, ZONE, STORE.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>orgEntityId</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Integer</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>ID of the organization entity.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>targetUserDetails</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Object</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Details of the criteria that the customer must meet to redeem the coupon.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>validMaxUserTransactionLimit</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Integer</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Number of transactions required by the customer to redeem the coupon.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>validUserRegistrationStartTime</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Integer</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Customer can redeem the coupon only if their registration date is after the specified date.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>validUserRegistrationEndTime</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Integer</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Customer can redeem the coupon only if their registration date is within the specified date.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>redemptionValidAfterDays</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Integer</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Number of days after which the redemption becomes valid.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>alphaNumeric</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Boolean</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Indicates if the code is alphanumeric.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>randomCodeLength</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Integer</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Length of the random code for the coupon.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>resendMessageEnabled</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Boolean</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Indicates if the resend message feature is enabled.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>clientHandlingType*</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>String</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Method using which the coupons should be generated. Supported values: DISC_CODE (generate coupon codes automatically), GENERIC (provide a common coupon code), DISC_CODE_PIN (Upload existing coupon codes).</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>genericCode</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>String</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Generic code of the coupon.<br>**Note:**Only required if the clientHandlingType is set to GENERIC.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>expiryStrategyType*</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Enum</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Defines the method for coupon expiry.<br>Supported values: SERIES_EXPIRY(defines the coupon expires based on the rules defined for its series), MONTHS_END(defines the number of months from issuance until the coupon expires.), DAYS(defines the number of days from issuance until the coupon expires).</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>discountType*</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Enum</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Specifies the type of discount provided by the coupon. Supported values: ABS(a fixed amount is discounted), PERC(a percentage of the total amount is discounted). </p>
</td>
</tr>
</tbody>
</table>
`}</HTMLBlock>


```json Request body
{
    "CouponSeriesV2": {

        "description": "April 100",
        "discountCode": "XYZ12345",
        "validTillDate": "2025-06-12T00:00:00+05:30",
        "anyUser": false,
       "smsTemplate" : "Hi {{first_name}} {{last_name}} your voucher code //////{{voucher}}is valid" ,
       "discountValue": 500,
       "clientHandlingType": "DISC_CODE",
        "expiryStrategyType": "SERIES_EXPIRY",
       "discountType": "ABS"
    }
}
```
    ```curl With redemptionPerCouponMaxLimit
 '{
    "CouponSeriesV2": {
        "maxCreate": -1,
        "maxRedeem": -1,
        "anyUser": true,
        "redemptionPerCouponMaxLimit": 3,
        "maxRedemptionsInSeriesPerUser": -1,
        "sameUserMultipleRedeem": true,
        "isMultipleUseAllowed": true,
        "isMultipleVouchersPerUserAllowed": true,
        "maxVouchersPerUser": -1,
        "minDaysBetweenVouchers": -1,
        "minDaysBetweenRedemption": -1,
        "redemptionValidFrom": "1970-01-01T05:30:00+05:30",
        "description": "LIKE1w2w2345678910",
        "discountCode": "XYZ1w23",
        "validTillDate": "2030-09-30T00:00:00+05:30",
        "validDaysFromCreation": 30,
        "expiryStrategyValue": 30,
        "isTransferrable": false,
        "isReferralExistingUsersAllowed": false,
        "isValidationRequired": false,
        "isValidWithDiscountedItem": false,
        "createdBy": 70,
        "numIssued": 0,
        "numRedeemed": 0,
        "createdOn": "2022-02-23T11:08:37+05:30",
        "lastUsed": "2022-02-23T11:08:36+05:30",
        "seriesCode": "seriesCode001",
        "smsTemplate": "Hi  {{first_name}}",
        "isSMSDisabled": false,
        "info": "LIKE12345678910",
        "doNotResendExistingVoucher": true,
        "mutualExclusiveSeriesIds": "[]",
        "storeIdsJson": "[-1]",
        "isDvsEnabled": false,
        "dvsExpiryDate": "2022-02-23T00:00:00+05:30",
        "priority": 0,
        "shortSMSTemplate": "Hello {{cust_name}}, your voucher code is {{voucher_code}}",
        "maxReferralsPerReferee": -1,
        "discountUpto": 0,
        "discountValue": 500,
        "dvsItems": "items",
        "redemptionRange": "{\"dom\":[\"-1\"],\"dow\":[\"-1\"],\"hours\":[\"-1\"]}",
        "minBillAmount": 0,
        "maxBillAmount": 9007199254740991,
        "redeemAtStore": "[-1]",
        "campaignId": -1,
        "tag": "LIKE12345678910",
        "sourceOrgId": -1,
        "issueToLoyalty": false,
        "redeemStoreType": "redeemable_stores",
        "offlineRedeemType": false,
        "isOldFlowEnabled": false,
        "isPreRedeemEventRequired": false,
        "termsAndConditions": "T&C apply",
        "signalRedemptionEvent": false,
        "syncToClient": false,
        "showPinCode": false,
        "numUploadedNonIssued": 0,
        "numUploadedTotal": 0,
        "redemptionValidAfterDays": 0,
        "ownedBy": "NONE",
        "ownerId": -1,
        "ownerValidity": 0,
        "alphaNumeric": true,
        "shortCodeLength": 0,
        "randomCodeLength": 8,
        "fixedExpiryDate": 1916937000000,
        "numTotal": -1,
        "latestIssualTime": 0,
        "latestRedemptionTime": 0,
        "resendMessageEnabled": true,
        "seriesType": "UNDEFINED",
        "clientHandlingType": "DISC_CODE",
        "expiryStrategyType": "DAYS",
        "discountOn": "BILL",
        "discountType": "ABS",
        "updateProductData": false,
        "externalIssual": false
    }
}'
```

# Response parameter

<HTMLBlock>{`
<table style="width: 100%; border-collapse: collapse;">
<thead>
<tr>
  <th style="border: 1px solid #ddd; padding: 8px;">Parameter</th>
  <th style="border: 1px solid #ddd; padding: 8px;">Datatype</th>
  <th style="border: 1px solid #ddd; padding: 8px;">Description</th>
</tr>
</thead>
<tbody>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>customPropertyMap</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Object</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>An object containing a collection of keys that represents unique property names and each value represents the corresponding property&#39;s value.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>standard_terms_and_conditions</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>string</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Custom field in the coupon series that provides information about the terms and conditions.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>id</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>integer</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Unique identifier of the coupon series</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>orgId</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>integer</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Organization ID associated with the coupon series</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>description</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>string</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Description of the coupon series</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>discountCode</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>string</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>The code given for the coupon as the POS identifier that was created during the creation of coupon series.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>validTillDate</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>string</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Validity of the card series in UTC timestamp. Format: YYYY-MM-DDTHH:MM:SS+/-(time-zone).</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>validDaysFromCreation</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>integer</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Number of days the coupon is valid from creation</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>expiryStrategyValue</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>integer</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Specifies the duration a coupon remains valid based on the expiryStrategyType.  </p>
<p>For expiryStrategyType: &quot;SERIES_EXPIRY&quot;, expiryStrategyValue is always 1, which defines the coupon expires based on the rules defined for its series.  </p>
<p>For expiryStrategyType: &quot;DAYS&quot;, and expiryStrategyValue: &quot;5&quot;, specifies that coupon will be valid till 5 days of issuance  </p>
<p>For expiryStrategyType: &quot;MONTHS_END&quot;, and expiryStrategyValue: &quot;10&quot; specifies that the coupon will be valid for 10 months of issuance.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>maxCreate</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>integer</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Maximum number of coupons that can be created</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>maxRedeem</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>integer</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Maximum number of coupons that can be redeemed.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>isTransferrable</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>boolean</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Indicates if the coupon is transferable</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>anyUser</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>boolean</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Indicates if any user can use the offer.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>redemptionPerCouponMaxLimit</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>integer</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Specifies the maximum number of times a particular coupon code can be redeemed across all users.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>sameUserMultipleRedeem</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>boolean</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Indicates if the same user can redeem multiple times.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>isReferralExistingUsersAllowed</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>boolean</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Indicates if the referral is allowed for existing users.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>isMultipleUseAllowed</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>boolean</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Indicates if multiple uses of the offer are allowed.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>isValidationRequired</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>boolean</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Indicates if validation is required for the coupon</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>isValidWithDiscountedItem</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>boolean</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Indicates if the offer is valid with discounted items.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>createdBy</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>integer</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>ID of the user who created the coupon series</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>numIssued</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>integer</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Number of coupons issued from this series</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>numRedeemed</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>integer</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Number of coupons redeemed from this series</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>createdOn</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>string</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Date and time when the coupon series was created.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>lastUsed</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>string</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Date and time when the coupon was last used</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>seriesCode</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>string</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Code for the coupon series</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>smsTemplate</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>string</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Template for the SMS that is sent to users.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>isSMSDisabled</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>boolean</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Indicates if SMS is disabled.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>info</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>string</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Additional information about the coupon</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>isMultipleVouchersPerUserAllowed</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>boolean</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Indicates if multiple vouchers per user are allowed</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>doNotResendExistingVoucher</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>boolean</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Indicates not to resend existing vouchers.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>mutualExclusiveSeriesIds</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>string</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Allows you to specify a list of offer IDs that are mutually exclusive to the current offer. If a customer already has a coupon from any of the offer IDs in this list, they will not be eligible to receive a coupon from the current series.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>storeIdsJson</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>string</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>IDs of stores where the coupon is valid.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>isDvsEnabled</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>boolean</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Indicates if DVS (Dynamic Voucher System) is enabled</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>dvsExpiryDate</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>string</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Expiry date for DVS.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>priority</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>integer</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Priority level of the offer.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>shortSMSTemplate</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>string</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Short template for the SMS to be sent to users</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>maxVouchersPerUser</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>integer</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Maximum number of vouchers allowed per user</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>minDaysBetweenVouchers</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>integer</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Minimum days between issuance of vouchers.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>maxReferralsPerReferee</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>integer</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Maximum number of referrals allowed per referee</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>discountUpto</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>integer</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Maximum discount value</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>discountValue</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>integer</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Discount value of the coupon</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>dvsItems</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>string</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Items for DVS (Dynamic Voucher System).</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>redemptionRange</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>string</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Defines the specific days, weekdays, and hours during which the coupon can be redeemed.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>minBillAmount</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>integer</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Minimum bill amount required to use the coupon.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>maxBillAmount</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>integer</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Maximum bill amount allowed for coupon redemption</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>redeemAtStore</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>string</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Stores IDs where redemption is allowed.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>campaignId</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>integer</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Identifier of the campaign associated with the coupon</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>tag</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>string</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Tag or label for the coupon</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>maxRedemptionsInSeriesPerUser</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>integer</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Maximum redemptions in the series per user.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>minDaysBetweenRedemption</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>integer</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Minimum days required between redemptions.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>redemptionValidFrom</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>string</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Date from which redemption is valid.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>sourceOrgId</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>integer</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Identifier of the source organization</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>issueToLoyalty</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>boolean</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Indicates if the coupon is issued to loyalty members</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>redeemStoreType</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>string</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Type of store where the coupon can be redeemed. Supported values : redeemable_stores.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>offlineRedeemType</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>boolean</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Indicates if offline redemption is enabled</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>isOldFlowEnabled</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>boolean</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Indicates if the old redemption flow is enabled</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>isPreRedeemEventRequired</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>boolean</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Indicates if a pre-redeem event is required</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>termsAndConditions</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>string</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Terms and conditions for the offer.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>signalRedemptionEvent</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>boolean</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Indicates if a redemption event signal is required</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>syncToClient</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>boolean</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Indicates if the coupon data should be synchronized to the client</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>showPinCode</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>boolean</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Indicates if a PIN code should be displayed</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>validMaxUserTransactionLimit</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>integer</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Number of transactions required by the customer to redeem the coupon.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>validUserRegistrationStartTime</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>integer</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Customer can redeem the coupon only if their registration date is after the specified date.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>validUserRegistrationEndTime</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>integer</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Customer can redeem the coupon only if their registration date is within the specified date.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>numUploadedNonIssued</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>integer</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Number of non-issued coupons uploaded</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>numUploadedTotal</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>integer</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Total number of coupons uploaded</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>redemptionValidAfterDays</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>integer</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Number of days after which the redemption becomes valid.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>ownedBy</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>string</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Ownership details for the offer.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>ownerId</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>integer</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Identifier of the owner of the coupon</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>ownerValidity</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>integer</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Validity period of the owner&#39;s rights to the coupon</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>alphaNumeric</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>boolean</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Indicates if the code is alphanumeric.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>shortCodeLength</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>integer</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Length of the short code generated for the coupon</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>randomCodeLength</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>integer</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Length of the random code for the coupon.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>fixedExpiryDate</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>integer</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Fixed expiry date of the coupon (in epoch milliseconds)</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>numTotal</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>integer</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Total number of coupons issued</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>latestIssualTime</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>integer</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Latest issuance time of the coupon (in epoch milliseconds)</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>latestRedemptionTime</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>integer</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Latest redemption time of the coupon (in epoch milliseconds)</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>resendMessageEnabled</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>boolean</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Indicates if the resend message feature is enabled.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>seriesType</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>string</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Type of coupon series.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>clientHandlingType</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>string</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Method using which the coupons should be generated. Supported values: DISC_CODE (generate coupon codes automatically), GENERIC (provide a common coupon code), DISC_CODE_PIN (Upload existing coupon codes).</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>expiryStrategyType</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>string</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Defines the method for coupon expiry.<br>Supported values: SERIES_EXPIRY(defines the coupon expires based on the rules defined for its series), MONTHS_END(defines the number of months from issuance until the coupon expires.), DAYS(defines the number of days from issuance until the coupon expires).</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>discountOn</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>string</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Type of discount.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>discountType</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>string</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Specifies the type of discount provided by the coupon. Supported values: ABS(a fixed amount is discounted), PERC(a percentage of the total amount is discounted).</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>updateProductData</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>boolean</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Indicating if the product data can be updated.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>externalIssual</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>boolean</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Indicating if external issuance is allowed.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>warnings</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>array</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>List of warnings related to the coupon.</p>
</td>
</tr>
</tbody>
</table>
`}</HTMLBlock>


```json Sample response body
{
  "status": "success",
  "message": "Coupon series created successfully.",
  "data": {
    "couponSeriesId": "CS-789012",
    "description": "DIWALI 100% OFF",
    "discountCode": "XYZ123",
    "validTillDate": "2029-05-10T00:00:00+05:30",
    "expiryStrategyValue": 1,
    "maxCreate": -1,
    "maxRedeem": -1,
    "anyUser": false,
    "sameUserMultipleRedeem": false,
    "isReferralExistingUsersAllowed": false,
    "isMultipleUseAllowed": false,
    "isValidWithDiscountedItem": true,
    "smsTemplate": "Hi  {{first_name}} {{last_name}} your voucher code {{voucher}} is valid {{valid_days_from_create}}. {{fullname}} {{offer_name}}",
    "isSMSDisabled": false,
    "info": "Evil coupon",
    "isMultipleVouchersPerUserAllowed": true,
    "doNotResendExistingVoucher": true,
    "mutualExclusiveSeriesIds": "[10]",
    "maxVouchersPerUser": 11,
    "minDaysBetweenVouchers": 23,
    "discountValue": 500,
    "redemptionRange": "{\"dom\" : 1, \"dow\": 1, \"hours\": 1}",
    "minBillAmount": 100,
    "maxBillAmount": 20000,
    "maxRedemptionsInSeriesPerUser": 122,
    "minDaysBetweenRedemption": 962,
    "redemptionValidFrom": "2024-05-18T00:00:00+05:30",
    "productInfo": [
      {
        "productType": "SKU",
        "productIds": 30, 40
      },
      {
        "productType": "CATEGORY",
        "productIds": 50, 60
      },
      {
        "productType": "BRAND",
        "productIds": 10, 20
      },
      {
        "productType": "ATTRIBUTE",
        "productIds": 10, 20
      }
    ],
    "redemptionOrgEntityDetails": [
      {
        "redemptionOrgEntityType": "CONCEPT",
        "orgEntityId": 10
      },
      {
        "redemptionOrgEntityType": "TILL",
        "orgEntityId": 20
      },
      {
        "redemptionOrgEntityType": "ZONE",
        "orgEntityId": 30
      },
      {
        "redemptionOrgEntityType": "STORE",
        "orgEntityId": 40
      }
    ],
    "targetUserDetails": {
      "validMaxUserTransactionLimit": 1,
      "validUserRegistrationStartTime": 0,
      "validUserRegistrationEndTime": 10000
    },
    "redemptionValidAfterDays": 22,
    "alphaNumeric": true,
    "randomCodeLength": 10,
    "resendMessageEnabled": true,
    "clientHandlingType": "DISC_CODE",
    "expiryStrategyType": "SERIES_EXPIRY",
    "discountType": "ABS"
  }
}
```
    ```json With redemptionPerCouponMaxLimit
{
    "id": 698948,
    "orgId": 100737,
    "description": "LIKE1w2w2345678910",
    "discountCode": "XYZ1w23",
    "validTillDate": "2030-09-29T00:00:00Z",
    "validDaysFromCreation": 30,
    "expiryStrategyValue": 30,
    "maxCreate": -1,
    "maxRedeem": -1,
    "isTransferrable": false,
    "anyUser": true,
    "sameUserMultipleRedeem": true,
    "isReferralExistingUsersAllowed": false,
    "isMultipleUseAllowed": true,
    "isValidationRequired": false,
    "isValidWithDiscountedItem": false,
    "createdBy": 75154383,
    "numIssued": 0,
    "numRedeemed": 0,
    "createdOn": "2025-02-04T08:52:56Z",
    "lastUsed": "2025-02-04T08:52:55Z",
    "seriesCode": "fEDH0qD8rr",
    "smsTemplate": "Hi  {{first_name}}",
    "isSMSDisabled": false,
    "info": "LIKE12345678910",
    "isMultipleVouchersPerUserAllowed": true,
    "doNotResendExistingVoucher": true,
    "mutualExclusiveSeriesIds": "[]",
    "storeIdsJson": "[-1]",
    "isDvsEnabled": false,
    "dvsExpiryDate": "2025-02-04T00:00:00Z",
    "priority": 0,
    "shortSMSTemplate": "Hello {{cust_name}}, your voucher code is {{voucher_code}}",
    "maxVouchersPerUser": -1,
    "minDaysBetweenVouchers": -1,
    "maxReferralsPerReferee": -1,
    "discountUpto": 0,
    "discountValue": 500,
    "dvsItems": "items",
    "redemptionRange": "{\"dom\":[\"-1\"],\"dow\":[\"-1\"],\"hours\":[\"-1\"]}",
    "minBillAmount": 0,
    "maxBillAmount": 9007199254740991,
    "redeemAtStore": "[-1]",
    "campaignId": -1,
    "tag": "LIKE12345678910",
    "maxRedemptionsInSeriesPerUser": -1,
    "minDaysBetweenRedemption": -1,
    "redemptionValidFrom": "1970-01-01T00:00:00Z",
    "sourceOrgId": -1,
    "issueToLoyalty": false,
    "redeemStoreType": "redeemable_stores",
    "offlineRedeemType": false,
    "isOldFlowEnabled": false,
    "isPreRedeemEventRequired": false,
    "termsAndConditions": "T&C apply",
    "signalRedemptionEvent": false,
    "syncToClient": false,
    "showPinCode": false,
    "numUploadedNonIssued": 0,
    "numUploadedTotal": 0,
    "redemptionValidAfterDays": 0,
    "ownedBy": "NONE",
    "ownerId": -1,
    "ownerValidity": 0,
    "alphaNumeric": true,
    "shortCodeLength": 0,
    "randomCodeLength": 8,
    "fixedExpiryDate": 1916870400000,
    "numTotal": 0,
    "latestIssualTime": 0,
    "latestRedemptionTime": 0,
    "resendMessageEnabled": true,
    "redemptionPerCouponMaxLimit": 3,
    "seriesType": "UNDEFINED",
    "clientHandlingType": "DISC_CODE",
    "expiryStrategyType": "DAYS",
    "discountOn": "BILL",
    "discountType": "ABS",
    "externalIssual": false,
    "updateProductData": false,
    "warnings": []
}
```

<Note title="Note">

</Note>
    >
> There is no daily limit on API requests for creating coupon series. However, it's important to manage a balanced approach to maintain the performance. Issuance restrictions can be controlled through the coupon issuance settings.

<HTMLBlock>{`
<style>
  .InputGroupe2EvBGz2cnqy {
   display: flex;
   gap: 2px;
   position: relative;
}

.Button.APIRequest-example-button1DGMsfaOTVNW {
   position: relative;
   width: 140px;
   white-space: nowrap;
   overflow: hidden;
   text-overflow: ellipsis;
   padding: 6px 12px;
   text-align: left;
   transition: width 0.2s ease-out;
   z-index: 1;
   display: block;
   direction: ltr;
   unicode-bidi: embed;
   padding-right: 20px;
   background: #1e2329;
   border: none;
   border-radius: 6px;
   color: #94a3b8;
   font-size: 13px;
}

.Button.APIRequest-example-button1DGMsfaOTVNW span,
.Button.APIRequest-example-button1DGMsfaOTVNW div {
   text-align: left;
   direction: ltr;
}

.Button.APIRequest-example-button1DGMsfaOTVNW:hover {
   width: auto;
   z-index: 10;
   background: #262b33;
}

.Button.APIRequest-example-button1DGMsfaOTVNW.APIRequest-example-button_activeXJeukHyaHZXB {
   z-index: 20;
   background: #2c333d;
   color: #ffffff;
}
</style>
`}</HTMLBlock>