---
title: Update coupon series
excerpt: Lets you update existing coupon series details.
api:
  file: v2.json
  operationId: update-coupon-series
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
# Endpoint

`https://eu.api.capillarytech.com/v2/coupon/series/751412?format=json`

```curl
curl --location --request PUT 'https://eu.api.capillarytech.com/v2/coupon/series/791560?format=json' \
--header 'Content-Type: application/json' \
--header 'Authorization: Basic dGpfY2Fwa' \
--data '{
  "CouponSeriesV2": {
    "description": "April 777",
    "discountCode": "XYZ12345",
    "discountType": "ABS",
    "discountValue": 500,
    "anyUser": true,
    "smsTemplate": "Hi {{first_name}}",
    "clientHandlingType": "DISC_CODE",
    "seriesCode": "39262223334841478347",
    "expiryStrategyType": "DAYS"
  }
}
'
```

# Body Parameters

<Table align={["left","left","left"]}>
  <thead>
    <tr>
      <th>
        Parameter (Parameters marked with \* are mandatory)
      </th>

      <th>
        Data Type
      </th>

      <th>
        Description
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        CouponSeriesV2
      </td>

      <td>
        Object
      </td>

      <td>
        Object containing the coupon series details.
      </td>
    </tr>

    <tr>
      <td>
        customPropertyMap
      </td>

      <td>
        Object
      </td>

      <td>
        An object containing a collection of keys that represents unique property names and each value represents the corresponding property's value.
      </td>
    </tr>

    <tr>
      <td>
        customPropertyMap.key1
      </td>

      <td>
        String
      </td>

      <td>
        Custom field of the coupon series, providing additional information about the coupon.
      </td>
    </tr>

    <tr>
      <td>
        customPropertyMap.key2
      </td>

      <td>
        String
      </td>

      <td>
        Custom field of the coupon series, providing additional information about the coupon.
      </td>
    </tr>

    <tr>
      <td>
        standard\_terms\_and\_conditions
      </td>

      <td>
        String
      </td>

      <td>
        Custom field in the coupon series that provides information about the terms and conditions.
      </td>
    </tr>

    <tr>
      <td>
        description
      </td>

      <td>
        String
      </td>

      <td>
        Brief description of the coupon series.
      </td>
    </tr>

    <tr>
      <td>
        discountCode\*
      </td>

      <td>
        String
      </td>

      <td>
        The code given for the coupon as the POS identifier.
      </td>
    </tr>

    <tr>
      <td>
        discountType\*
      </td>

      <td>
        Enum
      </td>

      <td>
        Specifies the type of discount provided by the coupon. Supported values: ABS(a fixed amount is discounted), PERC(a percentage of the total amount is discounted).
      </td>
    </tr>

    <tr>
      <td>
        discountValue\*
      </td>

      <td>
        integer
      </td>

      <td>
        Discount value of the coupon
      </td>
    </tr>

    <tr>
      <td>
        anyUser\*
      </td>

      <td>
        Boolean
      </td>

      <td>
        Indicates if any user can use the offer.
      </td>
    </tr>

    <tr>
      <td>
        validTillDate
      </td>

      <td>
        String
      </td>

      <td>
        Validity of the card series in UTC timestamp. Format: YYYY-MM-DDTHH:MM:SS+/-(time-zone).
      </td>
    </tr>

    <tr>
      <td>
        expiryStrategyValue
      </td>

      <td>
        Integer
      </td>

      <td>
        Specifies the duration a coupon remains valid based on the expiryStrategyType.

        For expiryStrategyType: "SERIES\_EXPIRY", expiryStrategyValue is always 1, which defines the coupon expires based on the rules defined for its series.

        For expiryStrategyType: "DAYS", and expiryStrategyValue: "5", specifies that coupon will be valid till 5 days of issuance

        For expiryStrategyType: "MONTHS\_END", and expiryStrategyValue: "10" specifies that the coupon will be valid for 10 months of issuance.
      </td>
    </tr>

    <tr>
      <td>
        maxCreate
      </td>

      <td>
        Integer
      </td>

      <td>
        Maximum number of coupons that can be created.
      </td>
    </tr>

    <tr>
      <td>
        maxRedeem
      </td>

      <td>
        Integer
      </td>

      <td>
        Maximum number of coupons that can be redeemed.
      </td>
    </tr>

    <tr>
      <td>
        redemptionPerCouponMaxLimit
      </td>

      <td>
        Integer
      </td>

      <td>
        Specifies the maximum number of times a particular coupon code can be redeemed across all users.

        * *Note*\*:
        * Applicable only when the `anyUser `parameter is set to `true`.
        * The value must be greater than 0.
        * To create a coupon series without a redemption limit, set value as `null`or `-1`
        * This parameter applies only to autogenerated coupon codes (`DISC_CODE`) and uploaded coupon codes (`DISC_CODE_PIN`).
        * Not applicable for `GENERIC `coupon codes or externally managed coupon series (`EXTERNALLY_MANAGED `= `true`).\
          Refer to the [Create Offer](https://docs.capillarytech.com/docs/create-offer)  section to know more about coupon code types.
      </td>
    </tr>

    <tr>
      <td>
        sameUserMultipleRedeem
      </td>

      <td>
        Boolean
      </td>

      <td>
        Indicates if the same user can redeem multiple times.
      </td>
    </tr>

    <tr>
      <td>
        isReferralExistingUsersAllowed
      </td>

      <td>
        Boolean
      </td>

      <td>
        Indicates if the referral is allowed for existing users.
      </td>
    </tr>

    <tr>
      <td>
        isMultipleUseAllowed
      </td>

      <td>
        Boolean
      </td>

      <td>
        Indicates if multiple uses of the offer are allowed.
      </td>
    </tr>

    <tr>
      <td>
        isValidWithDiscountedItem
      </td>

      <td>
        Boolean
      </td>

      <td>
        Indicates if the offer is valid with discounted items.
      </td>
    </tr>

    <tr>
      <td>
        smsTemplate\*
      </td>

      <td>
        String
      </td>

      <td>
        Template for the SMS that is sent to users.
      </td>
    </tr>

    <tr>
      <td>
        isSMSDisabled
      </td>

      <td>
        Boolean
      </td>

      <td>
        Indicates if SMS is disabled.
      </td>
    </tr>

    <tr>
      <td>
        info
      </td>

      <td>
        String
      </td>

      <td>
        Additional information about the coupon.
      </td>
    </tr>

    <tr>
      <td>
        isMultipleVouchersPerUserAllowed
      </td>

      <td>
        Boolean
      </td>

      <td>
        Indicates if multiple vouchers per user are allowed.
      </td>
    </tr>

    <tr>
      <td>
        doNotResendExistingVoucher
      </td>

      <td>
        Boolean
      </td>

      <td>
        indicates not to resend existing vouchers.
      </td>
    </tr>

    <tr>
      <td>
        mutualExclusiveSeriesIds
      </td>

      <td>
        String
      </td>

      <td>
        Allows you to specify a list of offer IDs that are mutually exclusive to the current offer. If a customer already has a coupon from any of the offer IDs in this list, they will not be eligible to receive a coupon from the current series
      </td>
    </tr>

    <tr>
      <td>
        maxVouchersPerUser
      </td>

      <td>
        Integer
      </td>

      <td>
        Maximum number of vouchers allowed per user.
      </td>
    </tr>

    <tr>
      <td>
        minDaysBetweenVouchers
      </td>

      <td>
        Integer
      </td>

      <td>
        Minimum days between issuance of vouchers.
      </td>
    </tr>

    <tr>
      <td>
        discountValue
      </td>

      <td>
        Integer
      </td>

      <td>
        Discount value of the coupon.
      </td>
    </tr>

    <tr>
      <td>
        redemptionRange
      </td>

      <td>
        String
      </td>

      <td>
        Defines the specific days, weekdays, and hours during which the coupon can be redeemed.
      </td>
    </tr>

    <tr>
      <td>
        minBillAmount
      </td>

      <td>
        Integer
      </td>

      <td>
        Minimum bill amount required to use the coupon.
      </td>
    </tr>

    <tr>
      <td>
        maxBillAmount
      </td>

      <td>
        Integer
      </td>

      <td>
        Maximum bill amount allowed for coupon redemption.
      </td>
    </tr>

    <tr>
      <td>
        maxRedemptionsInSeriesPerUser
      </td>

      <td>
        Integer
      </td>

      <td>
        Maximum redemptions in the series per user.
      </td>
    </tr>

    <tr>
      <td>
        minDaysBetweenRedemption
      </td>

      <td>
        Integer
      </td>

      <td>
        Minimum days required between redemptions.
      </td>
    </tr>

    <tr>
      <td>
        redemptionValidFrom
      </td>

      <td>
        String
      </td>

      <td>
        Date from which redemption is valid.
      </td>
    </tr>

    <tr>
      <td>
        productInfo
      </td>

      <td>
        Array
      </td>

      <td>
        Information about the products on which the coupon can be applied.
      </td>
    </tr>

    <tr>
      <td>
        productInfo.productType
      </td>

      <td>
        Enum
      </td>

      <td>
        Type of the product. Supported values: SKU, CATEGORY, BRAND, ATTRIBUTE.
      </td>
    </tr>

    <tr>
      <td>
        productInfo.productIds
      </td>

      <td>
        Array
      </td>

      <td>
        IDs of product.
      </td>
    </tr>

    <tr>
      <td>
        redemptionOrgEntityDetails
      </td>

      <td>
        Array
      </td>

      <td>
        Details about the organization entities where the coupon can be redeemed.
      </td>
    </tr>

    <tr>
      <td>
        redemptionOrgEntityType
      </td>

      <td>
        Enum
      </td>

      <td>
        Type of redemption organization entity. Supported values: CONCEPT, TILL, ZONE, STORE.
      </td>
    </tr>

    <tr>
      <td>
        orgEntityId
      </td>

      <td>
        Integer
      </td>

      <td>
        ID of the organization entity.
      </td>
    </tr>

    <tr>
      <td>
        targetUserDetails
      </td>

      <td>
        Object
      </td>

      <td>
        Details of the criteria that the customer must meet to redeem the coupon.
      </td>
    </tr>

    <tr>
      <td>
        validMaxUserTransactionLimit
      </td>

      <td>
        Integer
      </td>

      <td>
        Number of transactions required by the customer to redeem the coupon.
      </td>
    </tr>

    <tr>
      <td>
        validUserRegistrationStartTime
      </td>

      <td>
        Integer
      </td>

      <td>
        Customer can redeem the coupon only if their registration date is after the specified date.
      </td>
    </tr>

    <tr>
      <td>
        validUserRegistrationEndTime
      </td>

      <td>
        Integer
      </td>

      <td>
        Customer can redeem the coupon only if their registration date is within the specified date.
      </td>
    </tr>

    <tr>
      <td>
        redemptionValidAfterDays
      </td>

      <td>
        Integer
      </td>

      <td>
        Number of days after which the redemption becomes valid.
      </td>
    </tr>

    <tr>
      <td>
        alphaNumeric
      </td>

      <td>
        Boolean
      </td>

      <td>
        Indicates if the code is alphanumeric.
      </td>
    </tr>

    <tr>
      <td>
        randomCodeLength
      </td>

      <td>
        Integer
      </td>

      <td>
        Length of the random code for the coupon.
      </td>
    </tr>

    <tr>
      <td>
        resendMessageEnabled
      </td>

      <td>
        Boolean
      </td>

      <td>
        Indicates if the resend message feature is enabled.
      </td>
    </tr>

    <tr>
      <td>
        clientHandlingType\*
      </td>

      <td>
        String
      </td>

      <td>
        Method using which the coupons should be generated. Supported values: DISC\_CODE (generate coupon codes automatically), GENERIC (provide a common coupon code), DISC\_CODE\_PIN (Upload existing coupon codes).
      </td>
    </tr>

    <tr>
      <td>
        seriesCode\*
      </td>

      <td>
        string
      </td>

      <td>
        Code for the coupon series
      </td>
    </tr>

    <tr>
      <td>
        genericCode
      </td>

      <td>
        String
      </td>

      <td>
        Generic code of the coupon.

        * \*Note:\*\*Only required if the clientHandlingType is set to GENERIC.
      </td>
    </tr>

    <tr>
      <td>
        expiryStrategyType\*
      </td>

      <td>
        Enum
      </td>

      <td>
        Defines the method for coupon expiry.\
        Supported values: SERIES\_EXPIRY(defines the coupon expires based on the rules defined for its series), MONTHS\_END(defines the number of months from issuance until the coupon expires.), DAYS(defines the number of days from issuance until the coupon expires).
      </td>
    </tr>
  </tbody>
</Table>

```json Request body
{
    "CouponSeriesV2": {
        "description": "40% off for unknown reason",
        "discountCode": "unknown40",
        "anyUser": true,
        "smsTemplate": "string",
        "discountValue": 150000000000000,
        "clientHandlingType": "DISC_CODE",
        "expiryStrategyType": "SERIES_EXPIRY",
        "discountType": "ABS",
        "seriesCode": "string",
        "validTillDate": "2025-04-25T23:50:79+05:30",
        "redemptionValidFrom": "2025-04-24T00:00:00+05:30",
        "createdOn": "2025-04-24T12:54:00+05:30",
        "lastUsed": "2025-04-24T12:54:00+05:30",
        "dvsExpiryDate": "2025-04-24T12:54:00+05:30",
        "expiryStrategyValue": 1,
        "maxCreate": 10000000297830,
        "maxRedeem": 10000000728300,
        
        "sameUserMultipleRedeem": true,
        "isReferralExistingUsersAllowed": false,
        "isMultipleUseAllowed": false,
        "isValidWithDiscountedItem": true,
        "isSMSDisabled": false,
        "info": "30% off for unknown reason",
        "isMultipleVouchersPerUserAllowed": true,
        "doNotResendExistingVoucher": true,
        "maxVouchersPerUser": -123,
        "minDaysBetweenVouchers": -123,
        "minBillAmount": 0,
        "maxBillAmount": 40000,
        "maxRedemptionsInSeriesPerUser": 4,
        "minDaysBetweenRedemption": 0,
        "targetUserDetails": {
            "validMaxUserTransactionLimit": 1,
"validUserRegistrationStartTime": 0,
            "validUserRegistrationEndTime": 10000
        },
        "redemptionValidAfterDays": 0,
        "alphaNumeric": true,
        "randomCodeLength": 10,
        "resendMessageEnabled": true,
          "genericCode": "string",
          "orgId": 0,
          "validDaysFromCreation": 0,
          "isTransferrable": false,
          "isValidationRequired": false,
          "createdBy": 0,
          "numIssued": 0,
          "numRedeemed": 0,
          "storeIdsJson": "[-1]",
          "isDvsEnabled": false,
          "priority": 0,
          "shortSMSTemplate": "Hello {{cust_name}}, your voucher code is {{voucher_code}}",
          "maxReferralsPerReferee": 0,
          "dvsItems": "items",
          "redeemAtStore": "[-1]",
          "campaignId": 0,
          "tag": "40% off for unknown reason",
          "sourceOrgId": -1,
          "issueToLoyalty": false,
          "redeemStoreType": "string",
          "offlineRedeemType": false,
          "isOldFlowEnabled": false,
          "isPreRedeemEventRequired": false,
          "termsAndConditions": "T&C",
          "signalRedemptionEvent": false,
          "syncToClient": false,
          "showPinCode": false,
          "numUploadedNonIssued": 0,
          "numUploadedTotal": 0,
          "ownedBy": "NONE",
          "ownerId": 0,
          "ownerValidity": 0,
          "shortCodeLength": 0,
        
          "numTotal": 10,
          "latestIssualTime": 0,
          "latestRedemptionTime": 0,
          "campaignName": "string",
          "seriesType": "UNDEFINED",
          "discountOn": "BILL",
          "externalIssual": false,
          "updateProductData": false
    }
}
```

# Response parameter

<Table align={["left","left","left"]}>
  <thead>
    <tr>
      <th>
        Parameter
      </th>

      <th>
        Datatype
      </th>

      <th>
        Description
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        customPropertyMap
      </td>

      <td>
        Object
      </td>

      <td>
        An object containing a collection of keys that represents unique property names and each value represents the corresponding property's value.
      </td>
    </tr>

    <tr>
      <td>
        standard\_terms\_and\_conditions
      </td>

      <td>
        string
      </td>

      <td>
        Custom field in the coupon series that provides information about the terms and conditions.
      </td>
    </tr>

    <tr>
      <td>
        id
      </td>

      <td>
        integer
      </td>

      <td>
        Unique identifier of the coupon series
      </td>
    </tr>

    <tr>
      <td>
        orgId
      </td>

      <td>
        integer
      </td>

      <td>
        Organization ID associated with the coupon series
      </td>
    </tr>

    <tr>
      <td>
        description
      </td>

      <td>
        string
      </td>

      <td>
        Description of the coupon series
      </td>
    </tr>

    <tr>
      <td>
        discountCode
      </td>

      <td>
        string
      </td>

      <td>
        The code given for the coupon as the POS identifier that was created during the creation of coupon series.
      </td>
    </tr>

    <tr>
      <td>
        validTillDate
      </td>

      <td>
        string
      </td>

      <td>
        Validity of the card series in UTC timestamp. Format: YYYY-MM-DDTHH:MM:SS+/-(time-zone).
      </td>
    </tr>

    <tr>
      <td>
        validDaysFromCreation
      </td>

      <td>
        integer
      </td>

      <td>
        Number of days the coupon is valid from creation
      </td>
    </tr>

    <tr>
      <td>
        expiryStrategyValue
      </td>

      <td>
        integer
      </td>

      <td>
        Specifies the duration a coupon remains valid based on the expiryStrategyType.

        For expiryStrategyType: "SERIES\_EXPIRY", expiryStrategyValue is always 1, which defines the coupon expires based on the rules defined for its series.

        For expiryStrategyType: "DAYS", and expiryStrategyValue: "5", specifies that coupon will be valid till 5 days of issuance

        For expiryStrategyType: "MONTHS\_END", and expiryStrategyValue: "10" specifies that the coupon will be valid for 10 months of issuance.
      </td>
    </tr>

    <tr>
      <td>
        maxCreate
      </td>

      <td>
        integer
      </td>

      <td>
        Maximum number of coupons that can be created
      </td>
    </tr>

    <tr>
      <td>
        maxRedeem
      </td>

      <td>
        integer
      </td>

      <td>
        Maximum number of coupons that can be redeemed.
      </td>
    </tr>

    <tr>
      <td>
        isTransferrable
      </td>

      <td>
        boolean
      </td>

      <td>
        Indicates if the coupon is transferable
      </td>
    </tr>

    <tr>
      <td>
        anyUser
      </td>

      <td>
        boolean
      </td>

      <td>
        Indicates if any user can use the offer.
      </td>
    </tr>

    <tr>
      <td>
        redemptionPerCouponMaxLimit
      </td>

      <td>
        integer
      </td>

      <td>
        Specifies the maximum number of times a particular coupon code can be redeemed across all users.
      </td>
    </tr>

    <tr>
      <td>
        sameUserMultipleRedeem
      </td>

      <td>
        boolean
      </td>

      <td>
        Indicates if the same user can redeem multiple times.
      </td>
    </tr>

    <tr>
      <td>
        isReferralExistingUsersAllowed
      </td>

      <td>
        boolean
      </td>

      <td>
        Indicates if the referral is allowed for existing users.
      </td>
    </tr>

    <tr>
      <td>
        isMultipleUseAllowed
      </td>

      <td>
        boolean
      </td>

      <td>
        Indicates if multiple uses of the offer are allowed.
      </td>
    </tr>

    <tr>
      <td>
        isValidationRequired
      </td>

      <td>
        boolean
      </td>

      <td>
        Indicates if validation is required for the coupon
      </td>
    </tr>

    <tr>
      <td>
        isValidWithDiscountedItem
      </td>

      <td>
        boolean
      </td>

      <td>
        Indicates if the offer is valid with discounted items.
      </td>
    </tr>

    <tr>
      <td>
        createdBy
      </td>

      <td>
        integer
      </td>

      <td>
        ID of the user who created the coupon series
      </td>
    </tr>

    <tr>
      <td>
        numIssued
      </td>

      <td>
        integer
      </td>

      <td>
        Number of coupons issued from this series
      </td>
    </tr>

    <tr>
      <td>
        numRedeemed
      </td>

      <td>
        integer
      </td>

      <td>
        Number of coupons redeemed from this series
      </td>
    </tr>

    <tr>
      <td>
        createdOn
      </td>

      <td>
        string
      </td>

      <td>
        Date and time when the coupon series was created.
      </td>
    </tr>

    <tr>
      <td>
        lastUsed
      </td>

      <td>
        string
      </td>

      <td>
        Date and time when the coupon was last used
      </td>
    </tr>

    <tr>
      <td>
        seriesCode
      </td>

      <td>
        string
      </td>

      <td>
        Code for the coupon series
      </td>
    </tr>

    <tr>
      <td>
        smsTemplate
      </td>

      <td>
        string
      </td>

      <td>
        Template for the SMS that is sent to users.
      </td>
    </tr>

    <tr>
      <td>
        isSMSDisabled
      </td>

      <td>
        boolean
      </td>

      <td>
        Indicates if SMS is disabled.
      </td>
    </tr>

    <tr>
      <td>
        info
      </td>

      <td>
        string
      </td>

      <td>
        Additional information about the coupon
      </td>
    </tr>

    <tr>
      <td>
        isMultipleVouchersPerUserAllowed
      </td>

      <td>
        boolean
      </td>

      <td>
        Indicates if multiple vouchers per user are allowed
      </td>
    </tr>

    <tr>
      <td>
        doNotResendExistingVoucher
      </td>

      <td>
        boolean
      </td>

      <td>
        Indicates not to resend existing vouchers.
      </td>
    </tr>

    <tr>
      <td>
        mutualExclusiveSeriesIds
      </td>

      <td>
        string
      </td>

      <td>
        Allows you to specify a list of offer IDs that are mutually exclusive to the current offer. If a customer already has a coupon from any of the offer IDs in this list, they will not be eligible to receive a coupon from the current series.
      </td>
    </tr>

    <tr>
      <td>
        storeIdsJson
      </td>

      <td>
        string
      </td>

      <td>
        IDs of stores where the coupon is valid.
      </td>
    </tr>

    <tr>
      <td>
        isDvsEnabled
      </td>

      <td>
        boolean
      </td>

      <td>
        Indicates if DVS (Dynamic Voucher System) is enabled
      </td>
    </tr>

    <tr>
      <td>
        dvsExpiryDate
      </td>

      <td>
        string
      </td>

      <td>
        Expiry date for DVS.
      </td>
    </tr>

    <tr>
      <td>
        priority
      </td>

      <td>
        integer
      </td>

      <td>
        Priority level of the offer.
      </td>
    </tr>

    <tr>
      <td>
        shortSMSTemplate
      </td>

      <td>
        string
      </td>

      <td>
        Short template for the SMS to be sent to users
      </td>
    </tr>

    <tr>
      <td>
        maxVouchersPerUser
      </td>

      <td>
        integer
      </td>

      <td>
        Maximum number of vouchers allowed per user
      </td>
    </tr>

    <tr>
      <td>
        minDaysBetweenVouchers
      </td>

      <td>
        integer
      </td>

      <td>
        Minimum days between issuance of vouchers.
      </td>
    </tr>

    <tr>
      <td>
        maxReferralsPerReferee
      </td>

      <td>
        integer
      </td>

      <td>
        Maximum number of referrals allowed per referee
      </td>
    </tr>

    <tr>
      <td>
        discountUpto
      </td>

      <td>
        integer
      </td>

      <td>
        Maximum discount value
      </td>
    </tr>

    <tr>
      <td>
        discountValue
      </td>

      <td>
        integer
      </td>

      <td>
        Discount value of the coupon
      </td>
    </tr>

    <tr>
      <td>
        dvsItems
      </td>

      <td>
        string
      </td>

      <td>
        Items for DVS (Dynamic Voucher System).
      </td>
    </tr>

    <tr>
      <td>
        redemptionRange
      </td>

      <td>
        string
      </td>

      <td>
        Defines the specific days, weekdays, and hours during which the coupon can be redeemed.
      </td>
    </tr>

    <tr>
      <td>
        minBillAmount
      </td>

      <td>
        integer
      </td>

      <td>
        Minimum bill amount required to use the coupon.
      </td>
    </tr>

    <tr>
      <td>
        maxBillAmount
      </td>

      <td>
        integer
      </td>

      <td>
        Maximum bill amount allowed for coupon redemption
      </td>
    </tr>

    <tr>
      <td>
        redeemAtStore
      </td>

      <td>
        string
      </td>

      <td>
        Stores IDs where redemption is allowed.
      </td>
    </tr>

    <tr>
      <td>
        campaignId
      </td>

      <td>
        integer
      </td>

      <td>
        Identifier of the campaign associated with the coupon
      </td>
    </tr>

    <tr>
      <td>
        tag
      </td>

      <td>
        string
      </td>

      <td>
        Tag or label for the coupon
      </td>
    </tr>

    <tr>
      <td>
        maxRedemptionsInSeriesPerUser
      </td>

      <td>
        integer
      </td>

      <td>
        Maximum redemptions in the series per user.
      </td>
    </tr>

    <tr>
      <td>
        minDaysBetweenRedemption
      </td>

      <td>
        integer
      </td>

      <td>
        Minimum days required between redemptions.
      </td>
    </tr>

    <tr>
      <td>
        redemptionValidFrom
      </td>

      <td>
        string
      </td>

      <td>
        Date from which redemption is valid.
      </td>
    </tr>

    <tr>
      <td>
        sourceOrgId
      </td>

      <td>
        integer
      </td>

      <td>
        Identifier of the source organization
      </td>
    </tr>

    <tr>
      <td>
        issueToLoyalty
      </td>

      <td>
        boolean
      </td>

      <td>
        Indicates if the coupon is issued to loyalty members
      </td>
    </tr>

    <tr>
      <td>
        redeemStoreType
      </td>

      <td>
        string
      </td>

      <td>
        Type of store where the coupon can be redeemed. Supported values : redeemable\_stores.
      </td>
    </tr>

    <tr>
      <td>
        offlineRedeemType
      </td>

      <td>
        boolean
      </td>

      <td>
        Indicates if offline redemption is enabled
      </td>
    </tr>

    <tr>
      <td>
        isOldFlowEnabled
      </td>

      <td>
        boolean
      </td>

      <td>
        Indicates if the old redemption flow is enabled
      </td>
    </tr>

    <tr>
      <td>
        isPreRedeemEventRequired
      </td>

      <td>
        boolean
      </td>

      <td>
        Indicates if a pre-redeem event is required
      </td>
    </tr>

    <tr>
      <td>
        termsAndConditions
      </td>

      <td>
        string
      </td>

      <td>
        Terms and conditions for the offer.
      </td>
    </tr>

    <tr>
      <td>
        signalRedemptionEvent
      </td>

      <td>
        boolean
      </td>

      <td>
        Indicates if a redemption event signal is required
      </td>
    </tr>

    <tr>
      <td>
        syncToClient
      </td>

      <td>
        boolean
      </td>

      <td>
        Indicates if the coupon data should be synchronized to the client
      </td>
    </tr>

    <tr>
      <td>
        showPinCode
      </td>

      <td>
        boolean
      </td>

      <td>
        Indicates if a PIN code should be displayed
      </td>
    </tr>

    <tr>
      <td>
        validMaxUserTransactionLimit
      </td>

      <td>
        integer
      </td>

      <td>
        Number of transactions required by the customer to redeem the coupon.
      </td>
    </tr>

    <tr>
      <td>
        validUserRegistrationStartTime
      </td>

      <td>
        integer
      </td>

      <td>
        Customer can redeem the coupon only if their registration date is after the specified date.
      </td>
    </tr>

    <tr>
      <td>
        validUserRegistrationEndTime
      </td>

      <td>
        integer
      </td>

      <td>
        Customer can redeem the coupon only if their registration date is within the specified date.
      </td>
    </tr>

    <tr>
      <td>
        numUploadedNonIssued
      </td>

      <td>
        integer
      </td>

      <td>
        Number of non-issued coupons uploaded
      </td>
    </tr>

    <tr>
      <td>
        numUploadedTotal
      </td>

      <td>
        integer
      </td>

      <td>
        Total number of coupons uploaded
      </td>
    </tr>

    <tr>
      <td>
        redemptionValidAfterDays
      </td>

      <td>
        integer
      </td>

      <td>
        Number of days after which the redemption becomes valid.
      </td>
    </tr>

    <tr>
      <td>
        ownedBy
      </td>

      <td>
        string
      </td>

      <td>
        Ownership details for the offer.
      </td>
    </tr>

    <tr>
      <td>
        ownerId
      </td>

      <td>
        integer
      </td>

      <td>
        Identifier of the owner of the coupon
      </td>
    </tr>

    <tr>
      <td>
        ownerValidity
      </td>

      <td>
        integer
      </td>

      <td>
        Validity period of the owner's rights to the coupon
      </td>
    </tr>

    <tr>
      <td>
        alphaNumeric
      </td>

      <td>
        boolean
      </td>

      <td>
        Indicates if the code is alphanumeric.
      </td>
    </tr>

    <tr>
      <td>
        shortCodeLength
      </td>

      <td>
        integer
      </td>

      <td>
        Length of the short code generated for the coupon
      </td>
    </tr>

    <tr>
      <td>
        randomCodeLength
      </td>

      <td>
        integer
      </td>

      <td>
        Length of the random code for the coupon.
      </td>
    </tr>

    <tr>
      <td>
        fixedExpiryDate
      </td>

      <td>
        integer
      </td>

      <td>
        Fixed expiry date of the coupon (in epoch milliseconds)
      </td>
    </tr>

    <tr>
      <td>
        numTotal
      </td>

      <td>
        integer
      </td>

      <td>
        Total number of coupons issued
      </td>
    </tr>

    <tr>
      <td>
        latestIssualTime
      </td>

      <td>
        integer
      </td>

      <td>
        Latest issuance time of the coupon (in epoch milliseconds)
      </td>
    </tr>

    <tr>
      <td>
        latestRedemptionTime
      </td>

      <td>
        integer
      </td>

      <td>
        Latest redemption time of the coupon (in epoch milliseconds)
      </td>
    </tr>

    <tr>
      <td>
        resendMessageEnabled
      </td>

      <td>
        boolean
      </td>

      <td>
        Indicates if the resend message feature is enabled.
      </td>
    </tr>

    <tr>
      <td>
        seriesType
      </td>

      <td>
        string
      </td>

      <td>
        Type of coupon series.
      </td>
    </tr>

    <tr>
      <td>
        clientHandlingType
      </td>

      <td>
        string
      </td>

      <td>
        Method using which the coupons should be generated. Supported values: DISC\_CODE (generate coupon codes automatically), GENERIC (provide a common coupon code), DISC\_CODE\_PIN (Upload existing coupon codes).
      </td>
    </tr>

    <tr>
      <td>
        expiryStrategyType
      </td>

      <td>
        string
      </td>

      <td>
        Defines the method for coupon expiry.\
        Supported values: SERIES\_EXPIRY(defines the coupon expires based on the rules defined for its series), MONTHS\_END(defines the number of months from issuance until the coupon expires.), DAYS(defines the number of days from issuance until the coupon expires).
      </td>
    </tr>

    <tr>
      <td>
        discountOn
      </td>

      <td>
        string
      </td>

      <td>
        Type of discount.
      </td>
    </tr>

    <tr>
      <td>
        discountType
      </td>

      <td>
        string
      </td>

      <td>
        Specifies the type of discount provided by the coupon. Supported values: ABS(a fixed amount is discounted), PERC(a percentage of the total amount is discounted).
      </td>
    </tr>

    <tr>
      <td>
        updateProductData
      </td>

      <td>
        boolean
      </td>

      <td>
        Indicating if the product data can be updated.
      </td>
    </tr>

    <tr>
      <td>
        externalIssual
      </td>

      <td>
        boolean
      </td>

      <td>
        Indicating if external issuance is allowed.
      </td>
    </tr>

    <tr>
      <td>
        warnings
      </td>

      <td>
        array
      </td>

      <td>
        List of warnings related to the coupon.
      </td>
    </tr>
  </tbody>
</Table>

```json
{
    "id": 751412,
    "orgId": 100737,
    "description": "40% off for unknown reason",
    "discountCode": "unknown40",
    "validTillDate": "2025-04-25T00:00:00Z",
    "validDaysFromCreation": 30,
    "expiryStrategyValue": 1,
    "maxCreate": 1316432742,
    "maxRedeem": 1316863212,
    "isTransferrable": false,
    "anyUser": true,
    "sameUserMultipleRedeem": true,
    "isReferralExistingUsersAllowed": false,
    "isMultipleUseAllowed": false,
    "isValidationRequired": false,
    "isValidWithDiscountedItem": true,
    "createdBy": 75155297,
    "numIssued": 0,
    "numRedeemed": 0,
    "createdOn": "2025-04-17T05:36:41Z",
    "lastUsed": "2025-05-12T08:27:45Z",
    "seriesCode": "string",
    "smsTemplate": "string",
    "isSMSDisabled": false,
    "info": "30% off for unknown reason",
    "isMultipleVouchersPerUserAllowed": true,
    "doNotResendExistingVoucher": true,
    "mutualExclusiveSeriesIds": "[-1]",
    "storeIdsJson": "[-1]",
    "isDvsEnabled": false,
    "dvsExpiryDate": "2025-05-12T00:00:00Z",
    "priority": 0,
    "shortSMSTemplate": "Hello {{cust_name}}, your voucher code is {{voucher_code}}",
    "maxVouchersPerUser": -123,
    "minDaysBetweenVouchers": -123,
    "maxReferralsPerReferee": -1,
    "discountUpto": 0,
    "discountValue": 150000004759552,
    "dvsItems": "items",
    "redemptionRange": "{\"dom\" : -1, \"dow\": -1, \"hours\": -1}",
    "minBillAmount": 0,
    "maxBillAmount": 40000,
    "redeemAtStore": "[-1]",
    "campaignId": 0,
    "tag": "40% off for unknown reason",
    "maxRedemptionsInSeriesPerUser": 4,
    "minDaysBetweenRedemption": 0,
    "redemptionValidFrom": "2025-04-23T00:00:00Z",
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
    "redemptionValidAfterDays": 0,
    "ownedBy": "NONE",
    "ownerId": -1,
    "ownerValidity": 0,
    "alphaNumeric": true,
    "shortCodeLength": 0,
    "randomCodeLength": 10,
    "fixedExpiryDate": 1745539200000,
    "numTotal": 0,
    "latestIssualTime": 0,
    "latestRedemptionTime": 0,
    "genericCode": "string",
    "resendMessageEnabled": true,
    "redemptionPerCouponMaxLimit": -1,
    "seriesType": "UNDEFINED",
    "clientHandlingType": "DISC_CODE",
    "expiryStrategyType": "SERIES_EXPIRY",
    "discountOn": "BILL",
    "discountType": "ABS",
    "externalIssual": false,
    "updateProductData": false,
    "warnings": []
}
```