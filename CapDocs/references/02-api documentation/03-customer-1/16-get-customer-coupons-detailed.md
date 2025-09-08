---
title: Get Detailed Customer Coupon Data
excerpt: ''
api:
  file: v2.json
  operationId: get-customer-coupons-detailed
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
This API provides detailed information about customer coupons, including each coupon’s unique code, discount value, expiry date, redemption status, and related campaign details. It also covers specific conditions, such as redemption limits, eligibility criteria, and applicable stores. This API is useful for obtaining in-depth data about each coupon and understanding its terms, usage history, and redemption rules.

<Note title="Note">
For detailed information about our APIs and for hands-on testing, refer documentation in [API overview](https://docs.capillarytech.com/reference/apioverview) and step-by-step guide on making your first API call in [Make your first API call](https://docs.capillarytech.com/reference/make-your-first-api-call).
</Note>

# Prerequisites

*   Authentication: Basic or OAuth authentication
*   Default access group

# Resource information

|                        |                                 |
| :--------------------- | :------------------------------ |
| URL                    | /customers\[customerId]/coupons |
| HTTP Method            | GET                             |
| Pagination             | No                              |
| Batch support          | No                              |
| Rate limit information | None                            |

# Sample API cURL

`https://eu.api.capillarytech.com/v2/customers/565032176/coupons`

```curl
curl --location 'https://eu.api.capillarytech.com/v2/customers/565032176/coupons' \
--header 'Content-Type: application/json' \
--header 'Authorization: Basic c2FudC5wXzEyMzpiMmVhMGFhYWI1ZThmODg5ZTAzNGE2NjA5NTIwM2FlNw==' \
--header 'Cookie: _cfuvid=tpKykcaB8j092CRnB66wUikOsgeMsTbQIAona20jx1M-1728643546352-0.0.1.1-604800000; _cfuvid=m2yUAqOA0jRHLfltVaqsrBoJp6yyOUuCAyw4QyAJ0uw-1751016550935-0.0.1.1-604800000'
```

# Request path parameters

| Parameters | Data Type | Description                                        |
| :--------- | :-------- | :------------------------------------------------- |
| customerId | Integer   | Unique ID of the customer to fetch coupon details. |

# Request query parameters

| Parameters         | Data Type | Description                                                                                                                                                                                                                                        |
| :----------------- | :-------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `coupon_code_case` | Enum      | This parameter helps to retrieve the coupon code in the desired letter cases. By default, the system automatically converts the coupon code to upper case. The query itself is not case sensitive. Supported Values: `LOWER`, `UPPER`, `AS_IT_IS`. |

# Response Parameters

### Coupon Entity

| Parameter                | Type         | Description                                                                                      |
| ------------------------ | ------------ | ------------------------------------------------------------------------------------------------ |
| `id`                     | Integer      | Unique coupon ID.                                                                                |
| `seriesId`               | Integer      | ID of the associated coupon series.                                                              |
| `series`                 | Object       | Series details                                                                                   |
| `code`                   | String       | Unique coupon code (e.g., `"QZX30JQLIC"`).                                                       |
| `description`            | String       | Coupon description.                                                                              |
| `createdDate`            | String (ISO) | Creation timestamp.                                                                              |
| `validTill`              | String (ISO) | Expiry timestamp. YYYY-MM-DDTHH:MM:SSZ                                                           |
| `issuedTo`               | Integer      | Recipient user ID.                                                                               |
| `issuedBy`               | Integer      | Issuer user ID.                                                                                  |
| `orgId`                  | Integer      | Organization ID.                                                                                 |
| `refId`                  | Integer      | Reference ID (`0` if none).                                                                      |
| `issuedAt`               | Object       | Issuing location                                                                                 |
| `status`                 | Object       | Operation status                                                                                 |
| `couponDiscountType`     | String       | Discount type (e.g., `"ABS"`).                                                                   |
| `issuedOn`               | String (ISO) | Issuance timestamp. YYYY-MM-DDTHH:MM:SSZ                                                         |
| `activeFrom`             | String (ISO) | Activation timestamp. YYYY-MM-DDTHH:MM:SSZ                                                       |
| `redemptionsLeft`        | Integer      | Remaining redemptions (e.g., `4`).                                                               |
| `couponStatus`           | Object       | Coupon status (mirrors `status`).                                                                |
| `redemptionInfo`         | Array        | Redemption history                                                                               |
| `reversedRedemptionInfo` | Array        | Reversed redemptions                                                                             |
| `discountType`           | Boolean      | **Deprecated**: Use `couponDiscountType`.                                                        |
| `discountValue`          | Integer      | Discount amount (e.g., `1000`).                                                                  |
| `discountValueAsDouble`  | Double       | Discount value in double format.                                                                 |
| `discountUpto`           | Integer      | Maximum discount cap (`0` for no cap).                                                           |
| `trimmedCode`            | String       | Shortened coupon code.                                                                           |
| `seriesName`             | String       | Name of the coupon series.                                                                       |
| `redeemed`               | Boolean      | Indicates redemption status: `true` = coupon has been redeemed, `false` = coupon is not redeemed |

### Series Object (`entity[].series`)

| Parameter                            | Type         | Description                                          |
| ------------------------------------ | ------------ | ---------------------------------------------------- |
| `id`                                 | Integer      | Series ID.                                           |
| `orgId`                              | Integer      | Organization ID.                                     |
| `description`                        | String       | Series description.                                  |
| `discountCode`                       | String       | Discount code (e.g., `"uatMaySant"`).                |
| `validTillDate`                      | String (ISO) | Series expiry timestamp. YYYY-MM-DDTHH:MM:SSZ        |
| `validDaysFromCreation`              | Integer      | Validity duration in days.                           |
| `expiryStrategyValue`                | Integer      | Expiry strategy code.                                |
| `maxCreate`                          | Integer      | Maximum issuable coupons (e.g., `20`).               |
| `maxRedeem`                          | Integer      | Maximum redemptions (e.g., `20`).                    |
| `isTransferrable`                    | Boolean      | `false` if non-transferable.                         |
| `anyUser`                            | Boolean      | `true` if redeemable by any user.                    |
| `sameUserMultipleRedeem`             | Boolean      | `true` if user can redeem multiple times.            |
| `isReferralExistingUsersAllowed`     | Boolean      | `false` to block referrals for existing users.       |
| `isMultipleUseAllowed`               | Boolean      | `true` if multi-use allowed.                         |
| `isValidationRequired`               | Boolean      | `false` if no validation needed.                     |
| `isValidWithDiscountedItem`          | Boolean      | `true` if valid on discounted items.                 |
| `createdBy`                          | Integer      | Creator user ID.                                     |
| `numIssued`                          | Integer      | Number of coupons issued.                            |
| `numRedeemed`                        | Integer      | Number of coupons redeemed.                          |
| `createdOn`                          | String (ISO) | Series creation timestamp. YYYY-MM-DDTHH:MM:SSZ      |
| `lastUsed`                           | String (ISO) | Last redemption timestamp. YYYY-MM-DDTHH:MM:SSZ      |
| `seriesCode`                         | String       | Internal series code.                                |
| `smsTemplate`                        | String       | SMS notification template.                           |
| `isSMSDisabled`                      | Boolean      | `false` if SMS enabled.                              |
| `isUpdateProductData`                | Boolean      | `false` if product updates disabled.                 |
| `info`                               | String       | Additional series info.                              |
| `isMultipleVouchersPerUserAllowed`   | Boolean      | `true` if users can hold multiple vouchers.          |
| `doNotResendExistingVoucher`         | Boolean      | `true` to avoid resending existing vouchers.         |
| `mutualExclusiveSeriesIds`           | String       | JSON array of exclusive series IDs.                  |
| `storeIdsJson`                       | String       | JSON array of valid store IDs.                       |
| `isDvsEnabled`                       | Boolean      | `false` if Dynamic Voucher System (DVS) is disabled. |
| `dvsExpiryDate`                      | String (ISO) | DVS expiry timestamp.                                |
| `priority`                           | Integer      | Priority level (e.g., `0`).                          |
| `shortSMSTemplate`                   | String       | Concise SMS template.                                |
| `maxVouchersPerUser`                 | Integer      | Max vouchers per user (e.g., `5`).                   |
| `minDaysBetweenVouchers`             | Integer      | Minimum days between issuing vouchers.               |
| `maxReferralsPerReferee`             | Integer      | Max referrals per user (`-1` for unlimited).         |
| `discountUpto`                       | Integer      | Discount cap (`0` for no cap).                       |
| `discountValue`                      | Integer      | Discount amount (e.g., `1000`).                      |
| `dvsItems`                           | String       | DVS-specific items.                                  |
| `redemptionRange`                    | String       | JSON for redemption constraints.                     |
| `minBillAmount`                      | Integer      | Minimum bill amount to redeem (e.g., `100`).         |
| `maxBillAmount`                      | Integer      | Maximum bill amount to redeem (e.g., `20000`).       |
| `redeemAtStore`                      | String       | JSON array of redemption store IDs.                  |
| `campaignId`                         | Integer      | Associated campaign ID (`-1` if none).               |
| `tag`                                | String       | Series tag.                                          |
| `maxRedemptionsInSeriesPerUser`      | Integer      | Max redemptions per user (e.g., `4`).                |
| `minDaysBetweenRedemption`           | Integer      | Minimum days between redemptions.                    |
| `redemptionValidFrom`                | String (ISO) | Earliest redemption timestamp. YYYY-MM-DDTHH:MM:SSZ  |
| `sourceOrgId`                        | Integer      | Source organization ID (`-1` if none).               |
| `issueToLoyalty`                     | Boolean      | `false` if not issued via loyalty program.           |
| `redeemStoreType`                    | String       | Redemption store type.                               |
| `offlineRedeemType`                  | Boolean      | `false` if online-only redemption.                   |
| `isOldFlowEnabled`                   | Boolean      | `false` if legacy flow disabled.                     |
| `isPreRedeemEventRequired`           | Boolean      | `false` if no pre-redemption event needed.           |
| `brands`                             | Array        | Allowed brands (empty for all).                      |
| `products`                           | Array        | Allowed products (empty for all).                    |
| `categories`                         | Array        | Allowed categories (empty for all).                  |
| `termsAndConditions`                 | String       | Terms and conditions text.                           |
| `signalRedemptionEvent`              | Boolean      | `false` if no event signaling needed.                |
| `syncToClient`                       | Boolean      | `false` if no client sync required.                  |
| `showPinCode`                        | Boolean      | `false` if PIN not required.                         |
| `redemptionPerCouponMaxLimit`        | Integer      | Max redemptions per coupon (`-1` for unlimited).     |
| `validRedemptionOrgEntityDetails`    | Object       | Valid redemption entities (see below).               |
| `seriesType`                         | String       | Series type (e.g., `"UNDEFINED"`).                   |
| `clientHandlingType`                 | String       | Client handling type (e.g., `"DISC_CODE"`).          |
| `expiryStrategyType`                 | String       | Expiry strategy (e.g., `"SERIES_EXPIRY"`).           |
| `discountOn`                         | String       | Discount applicability (e.g., `"BILL"`).             |
| `discountType`                       | String       | Discount type (e.g., `"ABS"`).                       |
| `dvsExpiryDateFormat`                | String       | DVS expiry date in `YYYY-MM-DD`.                     |
| `updateProductData`                  | Boolean      | `false` if product updates disabled.                 |
| `entityLevelRedemptionConfigsValues` | Array        | Additional redemption configs (empty).               |
| `redemptionValidFromFormat`          | String       | Redemption start date in `YYYY-MM-DD`.               |
| `validTilldateFormat`                | String       | Series expiry date in `YYYY-MM-DD`.                  |

### IssuedAt Object

| Parameter     | Type    | Description                         |
| ------------- | ------- | ----------------------------------- |
| `id`          | Integer | Location ID (e.g., `75152715`).     |
| `code`        | String  | Location code (e.g., `"doc123"`).   |
| `description` | String  | Location description (empty).       |
| `name`        | String  | Location name (e.g., `"DocStore"`). |
| `type`        | String  | Location type (e.g., `"STORE"`).    |
| `adminType`   | String  | Admin type (e.g., `"GENERAL"`).     |
| `isOrgUnit`   | Boolean | `false` if not an org unit.         |

### Status Object

| Parameter              | Type    | Description                               |
| ---------------------- | ------- | ----------------------------------------- |
| `statusCode`           | Object  | Status details (see below).               |
| `statusCode.status`    | Boolean | `true` if successful.                     |
| `statusCode.code`      | Integer | Status code                               |
| `statusCode.message`   | String  | Status message (e.g., `"Coupon Resent"`). |
| `warnings`             | Array   | Warnings (empty).                         |
| `warningsAsStatusCode` | Array   | Warnings in status format (empty).        |
| `code`                 | Integer | Duplicate of `statusCode.code`.           |
| `success`              | Boolean | Duplicate of `statusCode.status`.         |
| `message`              | String  | Duplicate of `statusCode.message`.        |

# Example response

```json
{
    "entity": [
        {
            "id": 33267197,
            "seriesId": 14162,
            "series": {
                "id": 14162,
                "orgId": 50074,
                "description": "Mobile Push offer 1",
                "discountCode": "MobilePush",
                "validTillDate": "2118-09-10T16:09:02+05:30",
                "validDaysFromCreation": 30,
                "expiryStrategyValue": 200,
                "maxCreate": 1000,
                "maxRedeem": -1,
                "isTransferrable": false,
                "anyUser": false,
                "sameUserMultipleRedeem": false,
                "isReferralExistingUsersAllowed": false,
                "isMultipleUseAllowed": false,
                "isValidationRequired": false,
                "isValidWithDiscountedItem": false,
                "createdBy": 4,
                "numIssued": 78,
                "numRedeemed": 6,
                "createdOn": "2018-09-10T14:45:06+05:30",
                "lastUsed": "2019-10-31T16:47:39+05:30",
                "seriesCode": "GM0V3HXC",
                "smsTemplate": "{{full_name}} Your Coupon code {{voucher}} Expires on {{valid_days_from_create}} {{optout}}",
                "isSMSDisabled": false,
                "isUpdateProductData": false,
                "info": "Mobile Push offer 1",
                "isMultipleVouchersPerUserAllowed": true,
                "doNotResendExistingVoucher": true,
                "mutualExclusiveSeriesIds": "[]",
                "storeIdsJson": "[-1]",
                "isDvsEnabled": false,
                "dvsExpiryDate": "2019-11-30T00:00:00+05:30",
                "priority": 0,
                "shortSMSTemplate": "Hello {{cust_name}}, your voucher code is {{voucher_code}}",
                "maxVouchersPerUser": -1,
                "minDaysBetweenVouchers": -1,
                "maxReferralsPerReferee": -1,
                "discountUpto": 0,
                "discountValue": 10,
                "dvsItems": "false",
                "redemptionRange": "{\"dom\":[\"-1\"],\"dow\":[\"-1\"],\"hours\":[\"-1\"]}",
                "minBillAmount": 0,
                "maxBillAmount": 9007199254740991,
                "redeemAtStore": "[-1]",
                "campaignId": -1,
                "tag": "Mobile Push offer 1",
                "maxRedemptionsInSeriesPerUser": -1,
                "minDaysBetweenRedemption": -1,
                "redemptionValidFrom": "1970-01-01T05:30:00+05:30",
                "sourceOrgId": -1,
                "issueToLoyalty": false,
                "redeemStoreType": "redeemable_stores",
                "offlineRedeemType": false,
                "isOldFlowEnabled": false,
                "isPreRedeemEventRequired": false,
                "brands": [],
                "products": [],
                "categories": [],
                "termsAndConditions": "T&C apply",
                "signalRedemptionEvent": true,
                "syncToClient": false,
                "showPinCode": false,
                "validRedemptionOrgEntityDetails": {
                    "concepts": [],
                    "zones": [],
                    "stores": [],
                    "tills": []
                },
                "seriesType": "LOYALTY",
                "clientHandlingType": "DISC_CODE",
                "expiryStrategyType": "DAYS",
                "discountOn": "BILL",
                "discountType": "PERC",
                "dvsExpiryDateFormat": "2019-11-30",
                "updateProductData": false,
                "validTilldateFormat": "2118-09-10",
                "redemptionValidFromFormat": "1970-01-01"
            },
            "code": "ER07BCJ8",
            "description": "Mobile Push offer 1",
            "createdDate": "2019-10-31T17:15:02+05:30",
            "validTill": "2020-05-18T23:59:59+05:30",
            "isRedeemed": false,
            "issuedTo": 343040815,
            "issuedBy": 50006796,
            "orgId": 50074,
            "refId": 0,
            "issuedAt": {
                "id": 50006795,
                "code": "storecode",
                "description": "webenagestore",
                "name": "webstore1",
                "type": "STORE",
                "adminType": "GENERAL",
                "isOrgUnit": false
            },
            "status": {
                "statusCode": {
                    "status": true,
                    "code": 700,
                    "message": "Coupon Resent"
                },
                "warnings": [],
                "warningsAsStatusCode": [],
                "code": 700,
                "success": true,
                "message": "Coupon Resent"
            },
            "couponDiscountType": "PERC",
            "issuedOn": "2019-10-31T17:15:02+05:30",
            "activeFrom": "2019-10-31T00:00:00+05:30",
            "redemptionsLeft": -1,
            "couponStatus": {
                "statusCode": {
                    "status": true,
                    "code": 200,
                    "message": "Success"
                },
                "warnings": [],
                "warningsAsStatusCode": [],
                "code": 200,
                "success": true,
                "message": "Success"
            },
            "redemptionInfo": [],
            "discountType": false,
            "discountValue": 10,
            "discountUpto": 0,
            "redeemed": false,
            "seriesName": "Mobile Push offer 1",
            "trimmedCode": "ER07BCJ8"
        },
        {
            "id": 33267195,
            "seriesId": 14162,
            "series": {
                "id": 14162,
                "orgId": 50074,
                "description": "Mobile Push offer 1",
                "discountCode": "MobilePush",
                "validTillDate": "2118-09-10T16:09:02+05:30",
                "validDaysFromCreation": 30,
                "expiryStrategyValue": 200,
                "maxCreate": 1000,
                "maxRedeem": -1,
                "isTransferrable": false,
                "anyUser": false,
                "sameUserMultipleRedeem": false,
                "isReferralExistingUsersAllowed": false,
                "isMultipleUseAllowed": false,
                "isValidationRequired": false,
                "isValidWithDiscountedItem": false,
                "createdBy": 4,
                "numIssued": 78,
                "numRedeemed": 6,
                "createdOn": "2018-09-10T14:45:06+05:30",
                "lastUsed": "2019-10-31T16:47:39+05:30",
                "seriesCode": "GM0V3HXC",
                "smsTemplate": "{{full_name}} Your Coupon code {{voucher}} Expires on {{valid_days_from_create}} {{optout}}",
                "isSMSDisabled": false,
                "isUpdateProductData": false,
                "info": "Mobile Push offer 1",
                "isMultipleVouchersPerUserAllowed": true,
                "doNotResendExistingVoucher": true,
                "mutualExclusiveSeriesIds": "[]",
                "storeIdsJson": "[-1]",
                "isDvsEnabled": false,
                "dvsExpiryDate": "2019-11-30T00:00:00+05:30",
                "priority": 0,
                "shortSMSTemplate": "Hello {{cust_name}}, your voucher code is {{voucher_code}}",
                "maxVouchersPerUser": -1,
                "minDaysBetweenVouchers": -1,
                "maxReferralsPerReferee": -1,
                "discountUpto": 0,
                "discountValue": 10,
                "dvsItems": "false",
                "redemptionRange": "{\"dom\":[\"-1\"],\"dow\":[\"-1\"],\"hours\":[\"-1\"]}",
                "minBillAmount": 0,
                "maxBillAmount": 9007199254740991,
                "redeemAtStore": "[-1]",
                "campaignId": -1,
                "tag": "Mobile Push offer 1",
                "maxRedemptionsInSeriesPerUser": -1,
                "minDaysBetweenRedemption": -1,
                "redemptionValidFrom": "1970-01-01T05:30:00+05:30",
                "sourceOrgId": -1,
                "issueToLoyalty": false,
                "redeemStoreType": "redeemable_stores",
                "offlineRedeemType": false,
                "isOldFlowEnabled": false,
                "isPreRedeemEventRequired": false,
                "brands": [],
                "products": [],
                "categories": [],
                "termsAndConditions": "T&C apply",
                "signalRedemptionEvent": true,
                "syncToClient": false,
                "showPinCode": false,
                "validRedemptionOrgEntityDetails": {
                    "concepts": [],
                    "zones": [],
                    "stores": [],
                    "tills": []
                },
                "seriesType": "LOYALTY",
                "clientHandlingType": "DISC_CODE",
                "expiryStrategyType": "DAYS",
                "discountOn": "BILL",
                "discountType": "PERC",
                "dvsExpiryDateFormat": "2019-11-30",
                "updateProductData": false,
                "validTilldateFormat": "2118-09-10",
                "redemptionValidFromFormat": "1970-01-01"
            },
            "code": "H306ORH2",
            "description": "Mobile Push offer 1",
            "createdDate": "2019-10-31T17:14:49+05:30",
            "validTill": "2020-05-18T23:59:59+05:30",
            "isRedeemed": false,
            "issuedTo": 343040815,
            "issuedBy": 50006796,
            "orgId": 50074,
            "refId": 0,
            "issuedAt": {
                "id": 50006795,
                "code": "storecode",
                "description": "webenagestore",
                "name": "webstore1",
                "type": "STORE",
                "adminType": "GENERAL",
                "isOrgUnit": false
            },
            "status": {
                "statusCode": {
                    "status": true,
                    "code": 700,
                    "message": "Coupon Resent"
                },
                "warnings": [],
                "warningsAsStatusCode": [],
                "code": 700,
                "success": true,
                "message": "Coupon Resent"
            },
            "couponDiscountType": "PERC",
            "issuedOn": "2019-10-31T17:14:49+05:30",
            "activeFrom": "2019-10-31T00:00:00+05:30",
            "redemptionsLeft": -1,
            "couponStatus": {
                "statusCode": {
                    "status": true,
                    "code": 200,
                    "message": "Success"
                },
                "warnings": [],
                "warningsAsStatusCode": [],
                "code": 200,
                "success": true,
                "message": "Success"
            },
            "redemptionInfo": [],
            "discountType": false,
            "discountValue": 10,
            "discountUpto": 0,
            "redeemed": false,
            "seriesName": "Mobile Push offer 1",
            "trimmedCode": "H306ORH2"
        }
    ],
    "warnings": [],
    "errors": [],
    "success": true
}
```
```Text with coupon code case = LOWER
{
    "entity": [
        {
            "id": 39004111,
            "seriesId": 68579,
            "series": {
                "id": 68579,
                "orgId": 50339,
                "description": "test-lekhana-2",
                "discountCode": "NO_VALUE",
                "validTillDate": "2024-10-31T00:00:00Z",
                "validDaysFromCreation": 30,
                "expiryStrategyValue": 1,
                "maxCreate": -1,
                "maxRedeem": -1,
                "isTransferrable": false,
                "anyUser": false,
                "sameUserMultipleRedeem": false,
                "isReferralExistingUsersAllowed": false,
                "isMultipleUseAllowed": false,
                "isValidationRequired": false,
                "isValidWithDiscountedItem": false,
                "createdBy": 4,
                "numIssued": 6,
                "numRedeemed": 0,
                "createdOn": "2024-10-10T05:06:25Z",
                "lastUsed": "2024-10-10T05:06:25Z",
                "seriesCode": "WIYHXBMY",
                "smsTemplate": "TEST_AUTO",
                "isSMSDisabled": false,
                "isUpdateProductData": false,
                "info": "test-lekhana-2",
                "isMultipleVouchersPerUserAllowed": true,
                "doNotResendExistingVoucher": true,
                "mutualExclusiveSeriesIds": "[]",
                "storeIdsJson": "[-1]",
                "isDvsEnabled": false,
                "dvsExpiryDate": "2024-11-09T00:00:00Z",
                "priority": 0,
                "shortSMSTemplate": "Hello {{cust_name}}, your voucher code is {{voucher_code}}",
                "maxVouchersPerUser": -1,
                "minDaysBetweenVouchers": -1,
                "maxReferralsPerReferee": -1,
                "discountUpto": 0,
                "discountValue": 10,
                "dvsItems": "false",
                "redemptionRange": "{\"dom\":[\"-1\"],\"dow\":[\"-1\"],\"hours\":[\"-1\"]}",
                "minBillAmount": 0,
                "maxBillAmount": 9007199254740991,
                "redeemAtStore": "[-1]",
                "campaignId": -1,
                "tag": "test-lekhana-2",
                "maxRedemptionsInSeriesPerUser": -1,
                "minDaysBetweenRedemption": -1,
                "redemptionValidFrom": "1970-01-01T00:00:00Z",
                "sourceOrgId": -1,
                "issueToLoyalty": false,
                "redeemStoreType": "redeemable_stores",
                "offlineRedeemType": false,
                "isOldFlowEnabled": false,
                "isPreRedeemEventRequired": false,
                "brands": [],
                "products": [],
                "categories": [],
                "termsAndConditions": "T&C apply",
                "signalRedemptionEvent": true,
                "syncToClient": false,
                "showPinCode": false,
                "validRedemptionOrgEntityDetails": {
                    "concepts": [],
                    "zones": [],
                    "stores": [],
                    "tills": []
                },
                "seriesType": "UNDEFINED",
                "clientHandlingType": "DISC_CODE",
                "expiryStrategyType": "SERIES_EXPIRY",
                "discountOn": "BILL",
                "discountType": "ABS",
                "entityLevelRedemptionConfigsValues": [],
                "validTilldateFormat": "2024-10-31",
                "redemptionValidFromFormat": "1970-01-01",
                "dvsExpiryDateFormat": "2024-11-09",
                "updateProductData": false
            },
            "code": "tt6wzp7xnw",
            "description": "test-lekhana-2",
            "createdDate": "2024-10-11T13:18:03Z",
            "validTill": "2024-10-31T23:59:59Z",
            "isRedeemed": false,
            "issuedTo": 345635529,
            "issuedBy": 50143661,
            "orgId": 50339,
            "refId": 0,
            "issuedAt": {
                "id": 50143656,
                "code": "store123",
                "description": "MarvelAuto_Store_For_Automation",
                "name": "MarvelAuto_Store",
                "type": "STORE",
                "adminType": "GENERAL",
                "isOrgUnit": false
            },
            "status": {
                "statusCode": {
                    "status": true,
                    "message": "Coupon Resent",
                    "code": 700
                },
                "warnings": [],
                "warningsAsStatusCode": [],
                "message": "Coupon Resent",
                "code": 700,
                "success": true
            },
            "couponDiscountType": "ABS",
            "issuedOn": "2024-10-11T13:18:03Z",
            "activeFrom": "2024-10-11T13:18:03Z",
            "redemptionsLeft": 1,
            "couponStatus": {
                "statusCode": {
                    "status": true,
                    "message": "Success",
                    "code": 200
                },
                "warnings": [],
                "warningsAsStatusCode": [],
                "message": "Success",
                "code": 200,
                "success": true
            },
            "redemptionInfo": [],
            "reversedRedemptionInfo": [],
            "discountType": true,
            "discountValue": 10,
            "discountValueAsDouble": 10.0,
            "discountUpto": 0,
            "trimmedCode": "tt6wzp7xnw",
            "redeemed": false,
            "seriesName": "test-lekhana-2"
        },
        {
            "id": 39004112,
            "seriesId": 68579,
            "series": {
                "id": 68579,
                "orgId": 50339,
                "description": "test-lekhana-2",
                "discountCode": "NO_VALUE",
                "validTillDate": "2024-10-31T00:00:00Z",
                "validDaysFromCreation": 30,
                "expiryStrategyValue": 1,
                "maxCreate": -1,
                "maxRedeem": -1,
                "isTransferrable": false,
                "anyUser": false,
                "sameUserMultipleRedeem": false,
                "isReferralExistingUsersAllowed": false,
                "isMultipleUseAllowed": false,
                "isValidationRequired": false,
                "isValidWithDiscountedItem": false,
                "createdBy": 4,
                "numIssued": 6,
                "numRedeemed": 0,
                "createdOn": "2024-10-10T05:06:25Z",
                "lastUsed": "2024-10-10T05:06:25Z",
                "seriesCode": "WIYHXBMY",
                "smsTemplate": "TEST_AUTO",
                "isSMSDisabled": false,
                "isUpdateProductData": false,
                "info": "test-lekhana-2",
                "isMultipleVouchersPerUserAllowed": true,
                "doNotResendExistingVoucher": true,
                "mutualExclusiveSeriesIds": "[]",
                "storeIdsJson": "[-1]",
                "isDvsEnabled": false,
                "dvsExpiryDate": "2024-11-09T00:00:00Z",
                "priority": 0,
                "shortSMSTemplate": "Hello {{cust_name}}, your voucher code is {{voucher_code}}",
                "maxVouchersPerUser": -1,
                "minDaysBetweenVouchers": -1,
                "maxReferralsPerReferee": -1,
                "discountUpto": 0,
                "discountValue": 10,
                "dvsItems": "false",
                "redemptionRange": "{\"dom\":[\"-1\"],\"dow\":[\"-1\"],\"hours\":[\"-1\"]}",
                "minBillAmount": 0,
                "maxBillAmount": 9007199254740991,
                "redeemAtStore": "[-1]",
                "campaignId": -1,
                "tag": "test-lekhana-2",
                "maxRedemptionsInSeriesPerUser": -1,
                "minDaysBetweenRedemption": -1,
                "redemptionValidFrom": "1970-01-01T00:00:00Z",
                "sourceOrgId": -1,
                "issueToLoyalty": false,
                "redeemStoreType": "redeemable_stores",
                "offlineRedeemType": false,
                "isOldFlowEnabled": false,
                "isPreRedeemEventRequired": false,
                "brands": [],
                "products": [],
                "categories": [],
                "termsAndConditions": "T&C apply",
                "signalRedemptionEvent": true,
                "syncToClient": false,
                "showPinCode": false,
                "validRedemptionOrgEntityDetails": {
                    "concepts": [],
                    "zones": [],
                    "stores": [],
                    "tills": []
                },
                "seriesType": "UNDEFINED",
                "clientHandlingType": "DISC_CODE",
                "expiryStrategyType": "SERIES_EXPIRY",
                "discountOn": "BILL",
                "discountType": "ABS",
                "entityLevelRedemptionConfigsValues": [],
                "validTilldateFormat": "2024-10-31",
                "redemptionValidFromFormat": "1970-01-01",
                "dvsExpiryDateFormat": "2024-11-09",
                "updateProductData": false
            },
            "code": "ziwy7lzgw8",
            "description": "test-lekhana-2",
            "createdDate": "2024-10-11T13:18:03Z",
            "validTill": "2024-10-31T23:59:59Z",
            "isRedeemed": false,
            "issuedTo": 345635529,
            "issuedBy": 50143661,
            "orgId": 50339,
            "refId": 0,
            "issuedAt": {
                "id": 50143656,
                "code": "store123",
                "description": "MarvelAuto_Store_For_Automation",
                "name": "MarvelAuto_Store",
                "type": "STORE",
                "adminType": "GENERAL",
                "isOrgUnit": false
            },
            "status": {
                "statusCode": {
                    "status": true,
                    "message": "Coupon Resent",
                    "code": 700
                },
                "warnings": [],
                "warningsAsStatusCode": [],
                "message": "Coupon Resent",
                "code": 700,
                "success": true
            },
            "couponDiscountType": "ABS",
            "issuedOn": "2024-10-11T13:18:03Z",
            "activeFrom": "2024-10-11T13:18:03Z",
            "redemptionsLeft": 1,
            "couponStatus": {
                "statusCode": {
                    "status": true,
                    "message": "Success",
                    "code": 200
                },
                "warnings": [],
                "warningsAsStatusCode": [],
                "message": "Success",
                "code": 200,
                "success": true
            },
            "redemptionInfo": [],
            "reversedRedemptionInfo": [],
            "discountType": true,
            "discountValue": 10,
            "discountValueAsDouble": 10.0,
            "discountUpto": 0,
            "trimmedCode": "ziwy7lzgw8",
            "redeemed": false,
            "seriesName": "test-lekhana-2"
        },
        {
            "id": 39004113,
            "seriesId": 68579,
            "series": {
                "id": 68579,
                "orgId": 50339,
                "description": "test-lekhana-2",
                "discountCode": "NO_VALUE",
                "validTillDate": "2024-10-31T00:00:00Z",
                "validDaysFromCreation": 30,
                "expiryStrategyValue": 1,
                "maxCreate": -1,
                "maxRedeem": -1,
                "isTransferrable": false,
                "anyUser": false,
                "sameUserMultipleRedeem": false,
                "isReferralExistingUsersAllowed": false,
                "isMultipleUseAllowed": false,
                "isValidationRequired": false,
                "isValidWithDiscountedItem": false,
                "createdBy": 4,
                "numIssued": 6,
                "numRedeemed": 0,
                "createdOn": "2024-10-10T05:06:25Z",
                "lastUsed": "2024-10-10T05:06:25Z",
                "seriesCode": "WIYHXBMY",
                "smsTemplate": "TEST_AUTO",
                "isSMSDisabled": false,
                "isUpdateProductData": false,
                "info": "test-lekhana-2",
                "isMultipleVouchersPerUserAllowed": true,
                "doNotResendExistingVoucher": true,
                "mutualExclusiveSeriesIds": "[]",
                "storeIdsJson": "[-1]",
                "isDvsEnabled": false,
                "dvsExpiryDate": "2024-11-09T00:00:00Z",
                "priority": 0,
                "shortSMSTemplate": "Hello {{cust_name}}, your voucher code is {{voucher_code}}",
                "maxVouchersPerUser": -1,
                "minDaysBetweenVouchers": -1,
                "maxReferralsPerReferee": -1,
                "discountUpto": 0,
                "discountValue": 10,
                "dvsItems": "false",
                "redemptionRange": "{\"dom\":[\"-1\"],\"dow\":[\"-1\"],\"hours\":[\"-1\"]}",
                "minBillAmount": 0,
                "maxBillAmount": 9007199254740991,
                "redeemAtStore": "[-1]",
                "campaignId": -1,
                "tag": "test-lekhana-2",
                "maxRedemptionsInSeriesPerUser": -1,
                "minDaysBetweenRedemption": -1,
                "redemptionValidFrom": "1970-01-01T00:00:00Z",
                "sourceOrgId": -1,
                "issueToLoyalty": false,
                "redeemStoreType": "redeemable_stores",
                "offlineRedeemType": false,
                "isOldFlowEnabled": false,
                "isPreRedeemEventRequired": false,
                "brands": [],
                "products": [],
                "categories": [],
                "termsAndConditions": "T&C apply",
                "signalRedemptionEvent": true,
                "syncToClient": false,
                "showPinCode": false,
                "validRedemptionOrgEntityDetails": {
                    "concepts": [],
                    "zones": [],
                    "stores": [],
                    "tills": []
                },
                "seriesType": "UNDEFINED",
                "clientHandlingType": "DISC_CODE",
                "expiryStrategyType": "SERIES_EXPIRY",
                "discountOn": "BILL",
                "discountType": "ABS",
                "entityLevelRedemptionConfigsValues": [],
                "validTilldateFormat": "2024-10-31",
                "redemptionValidFromFormat": "1970-01-01",
                "dvsExpiryDateFormat": "2024-11-09",
                "updateProductData": false
            },
            "code": "hu1dh75hny",
            "description": "test-lekhana-2",
            "createdDate": "2024-10-11T13:18:03Z",
            "validTill": "2024-10-31T23:59:59Z",
            "isRedeemed": false,
            "issuedTo": 345635529,
            "issuedBy": 50143661,
            "orgId": 50339,
            "refId": 0,
            "issuedAt": {
                "id": 50143656,
                "code": "store123",
                "description": "MarvelAuto_Store_For_Automation",
                "name": "MarvelAuto_Store",
                "type": "STORE",
                "adminType": "GENERAL",
                "isOrgUnit": false
            },
            "status": {
                "statusCode": {
                    "status": true,
                    "message": "Coupon Resent",
                    "code": 700
                },
                "warnings": [],
                "warningsAsStatusCode": [],
                "message": "Coupon Resent",
                "code": 700,
                "success": true
            },
            "couponDiscountType": "ABS",
            "issuedOn": "2024-10-11T13:18:03Z",
            "activeFrom": "2024-10-11T13:18:03Z",
            "redemptionsLeft": 1,
            "couponStatus": {
                "statusCode": {
                    "status": true,
                    "message": "Success",
                    "code": 200
                },
                "warnings": [],
                "warningsAsStatusCode": [],
                "message": "Success",
                "code": 200,
                "success": true
            },
            "redemptionInfo": [],
            "reversedRedemptionInfo": [],
            "discountType": true,
            "discountValue": 10,
            "discountValueAsDouble": 10.0,
            "discountUpto": 0,
            "trimmedCode": "hu1dh75hny",
            "redeemed": false,
            "seriesName": "test-lekhana-2"
        },
        {
            "id": 36502461,
            "seriesId": 68579,
            "series": {
                "id": 68579,
                "orgId": 50339,
                "description": "test-lekhana-2",
                "discountCode": "NO_VALUE",
                "validTillDate": "2024-10-31T00:00:00Z",
                "validDaysFromCreation": 30,
                "expiryStrategyValue": 1,
                "maxCreate": -1,
                "maxRedeem": -1,
                "isTransferrable": false,
                "anyUser": false,
                "sameUserMultipleRedeem": false,
                "isReferralExistingUsersAllowed": false,
                "isMultipleUseAllowed": false,
                "isValidationRequired": false,
                "isValidWithDiscountedItem": false,
                "createdBy": 4,
                "numIssued": 6,
                "numRedeemed": 0,
                "createdOn": "2024-10-10T05:06:25Z",
                "lastUsed": "2024-10-10T05:06:25Z",
                "seriesCode": "WIYHXBMY",
                "smsTemplate": "TEST_AUTO",
                "isSMSDisabled": false,
                "isUpdateProductData": false,
                "info": "test-lekhana-2",
                "isMultipleVouchersPerUserAllowed": true,
                "doNotResendExistingVoucher": true,
                "mutualExclusiveSeriesIds": "[]",
                "storeIdsJson": "[-1]",
                "isDvsEnabled": false,
                "dvsExpiryDate": "2024-11-09T00:00:00Z",
                "priority": 0,
                "shortSMSTemplate": "Hello {{cust_name}}, your voucher code is {{voucher_code}}",
                "maxVouchersPerUser": -1,
                "minDaysBetweenVouchers": -1,
                "maxReferralsPerReferee": -1,
                "discountUpto": 0,
                "discountValue": 10,
                "dvsItems": "false",
                "redemptionRange": "{\"dom\":[\"-1\"],\"dow\":[\"-1\"],\"hours\":[\"-1\"]}",
                "minBillAmount": 0,
                "maxBillAmount": 9007199254740991,
                "redeemAtStore": "[-1]",
                "campaignId": -1,
                "tag": "test-lekhana-2",
                "maxRedemptionsInSeriesPerUser": -1,
                "minDaysBetweenRedemption": -1,
                "redemptionValidFrom": "1970-01-01T00:00:00Z",
                "sourceOrgId": -1,
                "issueToLoyalty": false,
                "redeemStoreType": "redeemable_stores",
                "offlineRedeemType": false,
                "isOldFlowEnabled": false,
                "isPreRedeemEventRequired": false,
                "brands": [],
                "products": [],
                "categories": [],
                "termsAndConditions": "T&C apply",
                "signalRedemptionEvent": true,
                "syncToClient": false,
                "showPinCode": false,
                "validRedemptionOrgEntityDetails": {
                    "concepts": [],
                    "zones": [],
                    "stores": [],
                    "tills": []
                },
                "seriesType": "UNDEFINED",
                "clientHandlingType": "DISC_CODE",
                "expiryStrategyType": "SERIES_EXPIRY",
                "discountOn": "BILL",
                "discountType": "ABS",
                "entityLevelRedemptionConfigsValues": [],
                "validTilldateFormat": "2024-10-31",
                "redemptionValidFromFormat": "1970-01-01",
                "dvsExpiryDateFormat": "2024-11-09",
                "updateProductData": false
            },
            "code": "vmqvzcvymt",
            "description": "test-lekhana-2",
            "createdDate": "2024-10-10T10:37:03Z",
            "validTill": "2024-10-31T23:59:59Z",
            "isRedeemed": false,
            "issuedTo": 345635529,
            "issuedBy": 50143661,
            "orgId": 50339,
            "refId": 0,
            "issuedAt": {
                "id": 50143656,
                "code": "store123",
                "description": "MarvelAuto_Store_For_Automation",
                "name": "MarvelAuto_Store",
                "type": "STORE",
                "adminType": "GENERAL",
                "isOrgUnit": false
            },
            "status": {
                "statusCode": {
                    "status": true,
                    "message": "Coupon Resent",
                    "code": 700
                },
                "warnings": [],
                "warningsAsStatusCode": [],
                "message": "Coupon Resent",
                "code": 700,
                "success": true
            },
            "couponDiscountType": "ABS",
            "issuedOn": "2024-10-10T10:37:03Z",
            "activeFrom": "2024-10-10T10:37:03Z",
            "redemptionsLeft": 1,
            "couponStatus": {
                "statusCode": {
                    "status": true,
                    "message": "Success",
                    "code": 200
                },
                "warnings": [],
                "warningsAsStatusCode": [],
                "message": "Success",
                "code": 200,
                "success": true
            },
            "redemptionInfo": [],
            "reversedRedemptionInfo": [],
            "discountType": true,
            "discountValue": 10,
            "discountValueAsDouble": 10.0,
            "discountUpto": 0,
            "trimmedCode": "vmqvzcvymt",
            "redeemed": false,
            "seriesName": "test-lekhana-2"
        },
        {
            "id": 36502462,
            "seriesId": 68579,
            "series": {
                "id": 68579,
                "orgId": 50339,
                "description": "test-lekhana-2",
                "discountCode": "NO_VALUE",
                "validTillDate": "2024-10-31T00:00:00Z",
                "validDaysFromCreation": 30,
                "expiryStrategyValue": 1,
                "maxCreate": -1,
                "maxRedeem": -1,
                "isTransferrable": false,
                "anyUser": false,
                "sameUserMultipleRedeem": false,
                "isReferralExistingUsersAllowed": false,
                "isMultipleUseAllowed": false,
                "isValidationRequired": false,
                "isValidWithDiscountedItem": false,
                "createdBy": 4,
                "numIssued": 6,
                "numRedeemed": 0,
                "createdOn": "2024-10-10T05:06:25Z",
                "lastUsed": "2024-10-10T05:06:25Z",
                "seriesCode": "WIYHXBMY",
                "smsTemplate": "TEST_AUTO",
                "isSMSDisabled": false,
                "isUpdateProductData": false,
                "info": "test-lekhana-2",
                "isMultipleVouchersPerUserAllowed": true,
                "doNotResendExistingVoucher": true,
                "mutualExclusiveSeriesIds": "[]",
                "storeIdsJson": "[-1]",
                "isDvsEnabled": false,
                "dvsExpiryDate": "2024-11-09T00:00:00Z",
                "priority": 0,
                "shortSMSTemplate": "Hello {{cust_name}}, your voucher code is {{voucher_code}}",
                "maxVouchersPerUser": -1,
                "minDaysBetweenVouchers": -1,
                "maxReferralsPerReferee": -1,
                "discountUpto": 0,
                "discountValue": 10,
                "dvsItems": "false",
                "redemptionRange": "{\"dom\":[\"-1\"],\"dow\":[\"-1\"],\"hours\":[\"-1\"]}",
                "minBillAmount": 0,
                "maxBillAmount": 9007199254740991,
                "redeemAtStore": "[-1]",
                "campaignId": -1,
                "tag": "test-lekhana-2",
                "maxRedemptionsInSeriesPerUser": -1,
                "minDaysBetweenRedemption": -1,
                "redemptionValidFrom": "1970-01-01T00:00:00Z",
                "sourceOrgId": -1,
                "issueToLoyalty": false,
                "redeemStoreType": "redeemable_stores",
                "offlineRedeemType": false,
                "isOldFlowEnabled": false,
                "isPreRedeemEventRequired": false,
                "brands": [],
                "products": [],
                "categories": [],
                "termsAndConditions": "T&C apply",
                "signalRedemptionEvent": true,
                "syncToClient": false,
                "showPinCode": false,
                "validRedemptionOrgEntityDetails": {
                    "concepts": [],
                    "zones": [],
                    "stores": [],
                    "tills": []
                },
                "seriesType": "UNDEFINED",
                "clientHandlingType": "DISC_CODE",
                "expiryStrategyType": "SERIES_EXPIRY",
                "discountOn": "BILL",
                "discountType": "ABS",
                "entityLevelRedemptionConfigsValues": [],
                "validTilldateFormat": "2024-10-31",
                "redemptionValidFromFormat": "1970-01-01",
                "dvsExpiryDateFormat": "2024-11-09",
                "updateProductData": false
            },
            "code": "x6wqg8kb01",
            "description": "test-lekhana-2",
            "createdDate": "2024-10-10T10:37:03Z",
            "validTill": "2024-10-31T23:59:59Z",
            "isRedeemed": false,
            "issuedTo": 345635529,
            "issuedBy": 50143661,
            "orgId": 50339,
            "refId": 0,
            "issuedAt": {
                "id": 50143656,
                "code": "store123",
                "description": "MarvelAuto_Store_For_Automation",
                "name": "MarvelAuto_Store",
                "type": "STORE",
                "adminType": "GENERAL",
                "isOrgUnit": false
            },
            "status": {
                "statusCode": {
                    "status": true,
                    "message": "Coupon Resent",
                    "code": 700
                },
                "warnings": [],
                "warningsAsStatusCode": [],
                "message": "Coupon Resent",
                "code": 700,
                "success": true
            },
            "couponDiscountType": "ABS",
            "issuedOn": "2024-10-10T10:37:03Z",
            "activeFrom": "2024-10-10T10:37:03Z",
            "redemptionsLeft": 1,
            "couponStatus": {
                "statusCode": {
                    "status": true,
                    "message": "Success",
                    "code": 200
                },
                "warnings": [],
                "warningsAsStatusCode": [],
                "message": "Success",
                "code": 200,
                "success": true
            },
            "redemptionInfo": [],
            "reversedRedemptionInfo": [],
            "discountType": true,
            "discountValue": 10,
            "discountValueAsDouble": 10.0,
            "discountUpto": 0,
            "trimmedCode": "x6wqg8kb01",
            "redeemed": false,
            "seriesName": "test-lekhana-2"
        },
        {
            "id": 36502463,
            "seriesId": 68579,
            "series": {
                "id": 68579,
                "orgId": 50339,
                "description": "test-lekhana-2",
                "discountCode": "NO_VALUE",
                "validTillDate": "2024-10-31T00:00:00Z",
                "validDaysFromCreation": 30,
                "expiryStrategyValue": 1,
                "maxCreate": -1,
                "maxRedeem": -1,
                "isTransferrable": false,
                "anyUser": false,
                "sameUserMultipleRedeem": false,
                "isReferralExistingUsersAllowed": false,
                "isMultipleUseAllowed": false,
                "isValidationRequired": false,
                "isValidWithDiscountedItem": false,
                "createdBy": 4,
                "numIssued": 6,
                "numRedeemed": 0,
                "createdOn": "2024-10-10T05:06:25Z",
                "lastUsed": "2024-10-10T05:06:25Z",
                "seriesCode": "WIYHXBMY",
                "smsTemplate": "TEST_AUTO",
                "isSMSDisabled": false,
                "isUpdateProductData": false,
                "info": "test-lekhana-2",
                "isMultipleVouchersPerUserAllowed": true,
                "doNotResendExistingVoucher": true,
                "mutualExclusiveSeriesIds": "[]",
                "storeIdsJson": "[-1]",
                "isDvsEnabled": false,
                "dvsExpiryDate": "2024-11-09T00:00:00Z",
                "priority": 0,
                "shortSMSTemplate": "Hello {{cust_name}}, your voucher code is {{voucher_code}}",
                "maxVouchersPerUser": -1,
                "minDaysBetweenVouchers": -1,
                "maxReferralsPerReferee": -1,
                "discountUpto": 0,
                "discountValue": 10,
                "dvsItems": "false",
                "redemptionRange": "{\"dom\":[\"-1\"],\"dow\":[\"-1\"],\"hours\":[\"-1\"]}",
                "minBillAmount": 0,
                "maxBillAmount": 9007199254740991,
                "redeemAtStore": "[-1]",
                "campaignId": -1,
                "tag": "test-lekhana-2",
                "maxRedemptionsInSeriesPerUser": -1,
                "minDaysBetweenRedemption": -1,
                "redemptionValidFrom": "1970-01-01T00:00:00Z",
                "sourceOrgId": -1,
                "issueToLoyalty": false,
                "redeemStoreType": "redeemable_stores",
                "offlineRedeemType": false,
                "isOldFlowEnabled": false,
                "isPreRedeemEventRequired": false,
                "brands": [],
                "products": [],
                "categories": [],
                "termsAndConditions": "T&C apply",
                "signalRedemptionEvent": true,
                "syncToClient": false,
                "showPinCode": false,
                "validRedemptionOrgEntityDetails": {
                    "concepts": [],
                    "zones": [],
                    "stores": [],
                    "tills": []
                },
                "seriesType": "UNDEFINED",
                "clientHandlingType": "DISC_CODE",
                "expiryStrategyType": "SERIES_EXPIRY",
                "discountOn": "BILL",
                "discountType": "ABS",
                "entityLevelRedemptionConfigsValues": [],
                "validTilldateFormat": "2024-10-31",
                "redemptionValidFromFormat": "1970-01-01",
                "dvsExpiryDateFormat": "2024-11-09",
                "updateProductData": false
            },
            "code": "oo8hf7divr",
            "description": "test-lekhana-2",
            "createdDate": "2024-10-10T10:37:03Z",
            "validTill": "2024-10-31T23:59:59Z",
            "isRedeemed": false,
            "issuedTo": 345635529,
            "issuedBy": 50143661,
            "orgId": 50339,
            "refId": 0,
            "issuedAt": {
                "id": 50143656,
                "code": "store123",
                "description": "MarvelAuto_Store_For_Automation",
                "name": "MarvelAuto_Store",
                "type": "STORE",
                "adminType": "GENERAL",
                "isOrgUnit": false
            },
            "status": {
                "statusCode": {
                    "status": true,
                    "message": "Coupon Resent",
                    "code": 700
                },
                "warnings": [],
                "warningsAsStatusCode": [],
                "message": "Coupon Resent",
                "code": 700,
                "success": true
            },
            "couponDiscountType": "ABS",
            "issuedOn": "2024-10-10T10:37:03Z",
            "activeFrom": "2024-10-10T10:37:03Z",
            "redemptionsLeft": 1,
            "couponStatus": {
                "statusCode": {
                    "status": true,
                    "message": "Success",
                    "code": 200
                },
                "warnings": [],
                "warningsAsStatusCode": [],
                "message": "Success",
                "code": 200,
                "success": true
            },
            "redemptionInfo": [],
            "reversedRedemptionInfo": [],
            "discountType": true,
            "discountValue": 10,
            "discountValueAsDouble": 10.0,
            "discountUpto": 0,
            "trimmedCode": "oo8hf7divr",
            "redeemed": false,
            "seriesName": "test-lekhana-2"
        },
        {
            "id": 36501088,
            "seriesId": 68377,
            "series": {
                "id": 68377,
                "orgId": 50339,
                "description": "test-lekhana",
                "discountCode": "Point-of-sale identifier",
                "validTillDate": "2024-10-09T00:00:00Z",
                "validDaysFromCreation": 30,
                "expiryStrategyValue": 1,
                "maxCreate": -1,
                "maxRedeem": -1,
                "isTransferrable": false,
                "anyUser": false,
                "sameUserMultipleRedeem": false,
                "isReferralExistingUsersAllowed": false,
                "isMultipleUseAllowed": false,
                "isValidationRequired": false,
                "isValidWithDiscountedItem": false,
                "createdBy": 4,
                "numIssued": 0,
                "numRedeemed": 0,
                "createdOn": "2024-10-08T12:57:16Z",
                "lastUsed": "2024-10-08T22:00:56Z",
                "seriesCode": "XH3C311T",
                "smsTemplate": "TEST_AUTO",
                "isSMSDisabled": false,
                "isUpdateProductData": false,
                "info": "test-lekhana",
                "isMultipleVouchersPerUserAllowed": true,
                "doNotResendExistingVoucher": true,
                "mutualExclusiveSeriesIds": "[]",
                "storeIdsJson": "[-1]",
                "isDvsEnabled": false,
                "dvsExpiryDate": "2024-11-07T00:00:00Z",
                "priority": 0,
                "shortSMSTemplate": "Hello {{cust_name}}, your voucher code is {{voucher_code}}",
                "maxVouchersPerUser": -1,
                "minDaysBetweenVouchers": -1,
                "maxReferralsPerReferee": -1,
                "discountUpto": 0,
                "discountValue": 10,
                "dvsItems": "false",
                "redemptionRange": "{\"dom\":[\"-1\"],\"dow\":[\"-1\"],\"hours\":[\"-1\"]}",
                "minBillAmount": 0,
                "maxBillAmount": 9007199254740991,
                "redeemAtStore": "[-1]",
                "campaignId": -1,
                "tag": "test-lekhana",
                "maxRedemptionsInSeriesPerUser": -1,
                "minDaysBetweenRedemption": -1,
                "redemptionValidFrom": "1970-01-01T00:00:00Z",
                "sourceOrgId": -1,
                "issueToLoyalty": false,
                "redeemStoreType": "redeemable_stores",
                "offlineRedeemType": false,
                "isOldFlowEnabled": false,
                "isPreRedeemEventRequired": false,
                "brands": [],
                "products": [],
                "categories": [],
                "termsAndConditions": "T&C apply",
                "signalRedemptionEvent": true,
                "syncToClient": false,
                "showPinCode": false,
                "metadata": "Metadata for coupon series",
                "validRedemptionOrgEntityDetails": {
                    "concepts": [],
                    "zones": [],
                    "stores": [],
                    "tills": []
                },
                "seriesType": "UNDEFINED",
                "clientHandlingType": "DISC_CODE",
                "expiryStrategyType": "SERIES_EXPIRY",
                "discountOn": "BILL",
                "discountType": "ABS",
                "entityLevelRedemptionConfigsValues": [],
                "validTilldateFormat": "2024-10-09",
                "redemptionValidFromFormat": "1970-01-01",
                "dvsExpiryDateFormat": "2024-11-07",
                "updateProductData": false
            },
            "code": "w2jjud9yrguaprdur52o",
            "description": "test-lekhana",
            "createdDate": "2024-10-08T18:29:14Z",
            "validTill": "2024-10-09T23:59:59Z",
            "isRedeemed": false,
            "issuedTo": 345635529,
            "issuedBy": 50143661,
            "orgId": 50339,
            "refId": 0,
            "issuedAt": {
                "id": 50143656,
                "code": "store123",
                "description": "MarvelAuto_Store_For_Automation",
                "name": "MarvelAuto_Store",
                "type": "STORE",
                "adminType": "GENERAL",
                "isOrgUnit": false
            },
            "status": {
                "statusCode": {
                    "status": true,
                    "message": "Coupon Resent",
                    "code": 700
                },
                "warnings": [],
                "warningsAsStatusCode": [],
                "message": "Coupon Resent",
                "code": 700,
                "success": true
            },
            "couponDiscountType": "ABS",
            "issuedOn": "2024-10-08T18:29:14Z",
            "activeFrom": "2024-10-08T18:29:14Z",
            "redemptionsLeft": 1,
            "couponStatus": {
                "statusCode": {
                    "status": true,
                    "message": "Success",
                    "code": 200
                },
                "warnings": [],
                "warningsAsStatusCode": [],
                "message": "Success",
                "code": 200,
                "success": true
            },
            "redemptionInfo": [],
            "reversedRedemptionInfo": [],
            "discountType": true,
            "discountValue": 10,
            "discountValueAsDouble": 10.0,
            "discountUpto": 0,
            "trimmedCode": "w2jjud9yrguaprdur52o",
            "redeemed": false,
            "seriesName": "test-lekhana"
        }
    ],
    "warnings": [],
    "errors": [],
    "success": true
}
```

## API specific error code

| HTTP Status | Error Code (API-Specific) | Description                                                              |
| ----------- | ------------------------- | ------------------------------------------------------------------------ |
| `400`       | INVALID\_CUSTOMER\_ID     | Invalid or malformed `customerId` (e.g., non-numeric or negative value). |
| `401`       | UNAUTHORIZED              | Missing/invalid authentication token or insufficient permissions.        |
| `403`       | FORBIDDEN                 | Customer exists but requester lacks access to their coupons.             |
| `404`       | CUSTOMER\_NOT\_FOUND      | No customer exists with the provided `customerId`.                       |
| `404`       | NO\_COUPONS\_FOUND        | Customer exists but has no coupons.                                      |
| `500`       | INTERNAL\_SERVER\_ERROR   | Server-side failure (e.g., database timeout).                            |