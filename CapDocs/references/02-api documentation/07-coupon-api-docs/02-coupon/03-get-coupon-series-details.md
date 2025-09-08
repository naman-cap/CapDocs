---
title: Get coupon series details
excerpt: ''
api:
  file: v2.json
  operationId: get-coupon-series-details
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
This API helps to retrieve the details of one or more coupon series.

# Prerequisites

-   Authentication: Basic or OAuth authentication
-   Access group resource: Read access to coupon group resource

# Resource information

|               |                   |
| :------------ | :---------------- |
| URI           | /v2/coupon/series |
| HTTP method   | GET               |
| Pagination    | NA                |
| Rate limit    | NA                |
| Batch support | Yes               |

# API endpoint example

`https://eucrm.cc.capillarytech.com/v2/coupon/series?ids=520591`

# Query parameter

| Parameter | Data type | Description                              |
| :-------- | :-------- | :--------------------------------------- |
| ids       | Integer   | Unique offer IDs that you want to fetch. |

# Response parameter

<HTMLBlock>{`
<table style="width: 100%; border-collapse: collapse;">
<thead>
<tr>
  <th style="border: 1px solid #ddd; padding: 8px;">Parameter</th>
  <th style="border: 1px solid #ddd; padding: 8px;"></th>
  <th style="border: 1px solid #ddd; padding: 8px;">Description</th>
</tr>
</thead>
<tbody>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>entity</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Object</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>The object containing the details of the entity</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>customPropertyMap</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Object</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>The object containing a collection of keys that represent unique property names and each value represents the corresponding property&#39;s value.</p>
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
  <td style="border: 1px solid #ddd; padding: 8px;"><p>id</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Integer</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Unique identifier of the coupon series.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>orgId</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Integer</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Organization ID associated with the coupon series.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>description</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>String</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Description of the coupon series.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>discountCode</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>String</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Code indicating the discount provided by the coupon</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>validTillDate</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>String</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Validity of the card series in UTC timestamp. Format: YYYY-MM-DDTHH:MM:SS+/-(time-zone).</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>validDaysFromCreation</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Integer</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Number of days the coupon is valid from creation</p>
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
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Maximum number of offers that can be redeemed.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>isTransferrable</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Boolean</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Indicates if the coupon is transferable</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>anyUser</p>
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
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Specifies the maximum number of times a particular coupon code can be redeemed across all users.</p>
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
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Indicates if the referral is allowed for existing users..</p>
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
  <td style="border: 1px solid #ddd; padding: 8px;"><p>isValidationRequired</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Boolean</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Indicates if validation is required for the coupon</p>
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
  <td style="border: 1px solid #ddd; padding: 8px;"><p>createdBy</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Integer</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>ID of the user who created the coupon series</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>numIssued</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Integer</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Number of coupons issued from this series</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>numRedeemed</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Integer</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Number of coupons redeemed from this series</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>createdOn</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>String</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Date and time when the offer was created.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>lastUsed</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>String</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Date and time when the offer was last used.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>seriesCode</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>String</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Code for the coupon series.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>smsTemplate</p>
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
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Indicates if SMS notifications are disabled</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>info</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>String</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Additional information about the coupon</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>isMultipleVouchersPerUserAllowed</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Boolean</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Indicates if multiple vouchers per user are allowed</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>doNotResendExistingVoucher</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Boolean</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Indicates if existing vouchers should not be resent</p>
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
  <td style="border: 1px solid #ddd; padding: 8px;"><p>isDvsEnabled</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Boolean</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Indicates if DVS (Dynamic Voucher System) is enabled</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>dvsExpiryDate</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>String</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Expiry date for DVS.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>priority</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Integer</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Priority level of the offer.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>shortSMSTemplate</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>String</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Short template for the SMS to be sent to users</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>maxVouchersPerUser</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Integer</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Maximum number of vouchers allowed per user</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>minDaysBetweenVouchers</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Integer</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Minimum number of days required between issuing vouchers to the same user</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>maxReferralsPerReferee</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Integer</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Maximum number of referrals allowed per referee</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>discountUpto</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Integer</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Maximum discount value.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>discountValue</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Integer</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Discount value of the coupon</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>dvsItems</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>String</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Items for DVS(dynamic voucher system).</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>redemptionRange</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>String</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Redemption range in JSON format specifying days of the month, days of the week, and hours on which the customer can redeem the coupon.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>minBillAmount</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Integer</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Minimum bill amount for offer redemption.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>maxBillAmount</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Integer</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Maximum bill amount for offer redemption.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>redeemAtStore</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>String</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Stores IDs where redemption is allowed.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>campaignId</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Integer</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Identifier of the campaign associated with the coupon</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>tag</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>String</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Tag or label for the coupon</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>maxRedemptionsInSeriesPerUser</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Integer</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Maximum number of redemptions allowed per user in the series</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>minDaysBetweenRedemption</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Integer</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Minimum number of days required between redemptions</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>redemptionValidFrom</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>String</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Start date and time from which the coupon can be redeemed</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>sourceOrgId</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Integer</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Identifier of the source organization</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>issueToLoyalty</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Boolean</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Indicates if the coupon is issued to loyalty members</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>redeemStoreType</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>String</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Type of store where the coupon can be redeemed</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>offlineRedeemType</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Boolean</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Indicates if offline redemption is enabled</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>isOldFlowEnabled</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Boolean</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Indicates if the old redemption flow is enabled</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>isPreRedeemEventRequired</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Boolean</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Indicates if a pre-redeem event is required</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>termsAndConditions</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>String</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Terms and conditions for the offer.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>signalRedemptionEvent</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Boolean</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Indicates if a redemption event signal is required</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>syncToClient</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Boolean</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Indicates if the coupon data should be synchronized to the client</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>showPinCode</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Boolean</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Indicates if a PIN code should be displayed</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>numUploadedNonIssued</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Integer</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Number of non-issued coupons uploaded</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>numUploadedTotal</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Integer</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Total number of coupons uploaded</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>redemptionValidAfterDays</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Integer</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Number of days after which the coupon becomes valid</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>ownedBy</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>String</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Ownership details for the offer.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>ownerId</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Integer</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Identifier of the owner of the coupon</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>ownerValidity</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"></td>
  <td style="border: 1px solid #ddd; padding: 8px;"></td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>alphaNumeric</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Boolean</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Indicates if the coupon code is alphanumeric</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>shortCodeLength</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Integer</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Length of the short code generated for the coupon</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>randomCodeLength</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Integer</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Length of the random code generated for the coupon</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>fixedExpiryDate</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Integer</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Fixed expiry date of the coupon (in epoch milliseconds)</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>numTotal</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Integer</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Total number of coupons issued</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>latestIssualTime</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Integer</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Latest issuance time of the coupon (in epoch milliseconds)</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>latestRedemptionTime</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Integer</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Latest redemption time of the coupon (in epoch milliseconds)</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>resendMessageEnabled</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Boolean</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Indicates if resending messages is enabled</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>seriesType</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>String</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Type of coupon series</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>clientHandlingType</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>String</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Method using which the coupons should be generated.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>expiryStrategyType</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Enum</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Defines the method for coupon expiry.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>discountOn</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>String</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Type of discount</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>discountType</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Enum</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Specifies the type of discount provided by the coupon</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>externalIssual</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Boolean</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Indicating if external issuance is allowed.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>updateProductData</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Boolean</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Indicating if the product data can be updated.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Warninigs</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Array</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>List of warnings related to the coupon</p>
</td>
</tr>
</tbody>
</table>
`}</HTMLBlock>


```json Sample response body
{
    "entity": [
        {
            "customPropertyMap": {
                "standard_terms_and_conditions": "terms and condtion"
            },
            "id": 520591,
            "orgId": 100458,
            "description": "Onam 10% OFF",
            "discountCode": "Xjj123",
            "validTillDate": "2026-05-09T00:00:00Z",
            "validDaysFromCreation": 30,
            "expiryStrategyValue": 1,
            "maxCreate": -1,
            "maxRedeem": -1,
            "isTransferrable": false,
            "anyUser": true,
            "sameUserMultipleRedeem": false,
            "isReferralExistingUsersAllowed": false,
            "isMultipleUseAllowed": true,
            "isValidationRequired": false,
            "isValidWithDiscountedItem": true,
            "createdBy": 75121821,
            "numIssued": 3,
            "numRedeemed": 0,
            "createdOn": "2024-05-02T06:02:28Z",
            "lastUsed": "2024-05-02T06:02:28Z",
            "seriesCode": "3A8078C2BAB94235A46D",
            "smsTemplate": "Hi  {{first_name}} {{last_name}} your voucher code {{voucher}}is valid {{valid_days_from_create}}. {{fullname}} {{offer_name}}",
            "isSMSDisabled": false,
            "info": "Evil coupon",
            "isMultipleVouchersPerUserAllowed": true,
            "doNotResendExistingVoucher": true,
            "mutualExclusiveSeriesIds": "[-1]",
            "storeIdsJson": "[-1]",
            "isDvsEnabled": false,
            "dvsExpiryDate": "2024-05-02T00:00:00Z",
            "priority": 0,
            "shortSMSTemplate": "Hello {{cust_name}}, your voucher code is {{voucher_code}}",
            "maxVouchersPerUser": 11,
            "minDaysBetweenVouchers": 23,
            "maxReferralsPerReferee": -1,
            "discountUpto": 0,
            "discountValue": 500,
            "dvsItems": "items",
            "redemptionRange": "{\"dom\" : 1, \"dow\": 1, \"hours\": 1}",
            "minBillAmount": 100,
            "maxBillAmount": 20000,
            "redeemAtStore": "[-1]",
            "campaignId": -1,
            "tag": "Onam 10% OFF",
            "maxRedemptionsInSeriesPerUser": 122,
            "minDaysBetweenRedemption": 962,
            "redemptionValidFrom": "2024-05-01T00:00:00Z",
            "sourceOrgId": -1,
            "issueToLoyalty": false,
            "redeemStoreType": "redeemable_stores",
            "offlineRedeemType": false,
            "isOldFlowEnabled": false,
            "isPreRedeemEventRequired": false,
            "termsAndConditions": "T&C",
            "signalRedemptionEvent": false,
            "syncToClient": false,
            "showPinCode": false,
            "targetUserDetails": {
                "validMaxUserTransactionLimit": 1,
                "validUserRegistrationStartTime": 0,
                "validUserRegistrationEndTime": 10000
            },
            "numUploadedNonIssued": 0,
            "numUploadedTotal": 0,
            "redemptionValidAfterDays": 22,
            "ownedBy": "NONE",
            "ownerId": -1,
            "ownerValidity": 0,
            "alphaNumeric": true,
            "shortCodeLength": 0,
            "randomCodeLength": 10,
            "fixedExpiryDate": 1778284800000,
            "numTotal": -1,
            "latestIssualTime": 1717664404000,
            "latestRedemptionTime": 0,
            "resendMessageEnabled": true,
            "seriesType": "UNDEFINED",
            "clientHandlingType": "DISC_CODE",
            "expiryStrategyType": "SERIES_EXPIRY",
            "discountOn": "BILL",
            "discountType": "ABS",
            "externalIssual": false,
            "updateProductData": false
        }
    ],
    "warnings": []
}
```
```json With redemptionPerCouponMaxLimit
{
    "entity": [
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
            "numTotal": -1,
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
            "updateProductData": false
        }
    ],
    "warnings": []
}
```