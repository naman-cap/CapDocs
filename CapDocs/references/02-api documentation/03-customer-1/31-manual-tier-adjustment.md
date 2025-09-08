---
title: Manual Tier Adjustment
excerpt: ''
api:
  file: v2.json
  operationId: manual-tier-adjustment
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
This API allows for manual adjustment of a customer's loyalty tier (slab), including upgrading, downgrading, renewing the current tier, or extending its expiry date.

## Prerequisites

* Authentication: Basic/OAuth authentication
* Access group: Default access group

## Resource Information

| Field                  | Value                        |
| :--------------------- | :--------------------------- |
| URI                    | v2/slab/manualSlabAdjustment |
| HTTP Method            | POST                         |
| Pagination             | No                           |
| Batch support          | NA                           |
| Rate limit information | NA                           |

## API Endpoint cURL

```curl
curl --location 'https://eu.api.capillarytech.com/v2/slab/manualSlabAdjustment?identifierName=mobile&identifierValue=919731013853&source=INSTORE' \
--header 'Content-Type: application/json' \
--header 'Authorization: ••••••' \
--header 'Cookie: _cfuvid=d0G7Nfz8dsA1COsbdZ.lAjHfFW9uVmAotZAHao.w4Jk-1744631218437-0.0.1.1-604800000' \
--data '{
    "programId": 973,
    "toSlabName": "Emerald",
    "slabAction": "UPGRADE",
    "manualSlabActionValidity": "FIXED_DURATION",
    "manualSlabActionValidityUpto": "20",
    "reassessTierOnNextActivity": true,
    "slabChangeReason": "Won the tier giveaway"
}'
```

## Query Parameters

| Parameter Name (Parameters marked as \* are mandatory) | Data Type | Description                                                                                                                                                                        |
| :----------------------------------------------------- | :-------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| source\*                                               | String    | Source of customer information. Supported values: `INSTORE`, `FACEBOOK`, `WEB_ENGAGE`, `WECHAT`, `MARTJACK`, `TMALL`, `TAOBAO`, `JD`, `ECOMMERCE`, `WEBSITE`, `LINE`, `MOBILE_APP` |
| identifierName\*                                       | String    | Identifier type to identify the customer. Supported values: `mobile`, `id`, `externalId`                                                                                           |
| identifierValue\*                                      | String    | Value corresponding to the `identifierName` provided.                                                                                                                              |
| type                                                   | String    | Type of entity to adjust the tier. Supported values: `CUSTOMER`, `USERGROUP2`.                                                                                                     |

## Request Body Example

```json
{
    "programId": 973,
    "toSlabName": "Emerald",
    "slabAction": "UPGRADE",
    "manualSlabActionValidity": "FIXED_DURATION",
    "manualSlabActionValidityUpto": "20",
    "reassessTierOnNextActivity": true,
    "slabChangeReason": "Won the tier giveaway"
}
```

## Request Body Parameters

| Parameter (Parameters marked as \* are required) | Data Type | Description                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| :----------------------------------------------- | :-------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| programId\*                                      | Integer   | Unique ID of the loyalty program. To retrieve the `programId`, use the [Get Loyalty Programs API](https://docs.capillarytech.com/reference/get-loyalty-programs).                                                                                                                                                                                                                                                                                      |
| slabAction\*                                     | Enum      | Type of slab change being performed. Supported values: `UPGRADE`: Upgrade the customer's tier to a higher tier. `DOWNGRADE`: Downgrade a customer's tier to a lower tier. `RENEWAL`: Renew this customer's current tier. `EXTEND_CURRENT_TIER_EXPIRY_DATE`: Extend the customer's current tier expiry date.                                                                                                                                            |
| toSlabName                                       | String    | Name of the slab to upgrade or downgrade the customer to. This parameter is required if `slabAction` = `UPGRADE` or `DOWNGRADE`. For example, to downgrade a customer from "Gold" to "Silver", provide the value as "Silver".                                                                                                                                                                                                                          |
| manualSlabActionValidity\*                       | Enum      | Validity period for the tier change. Supported values: `FIXED_DURATION`: Extends the slab expiry by a fixed number of days. `SPECIFIC_DATE`: Sets the slab expiry to a specific date in ISO YYYY-MM-DD HH:MM:SS format. `CURRENT_TIER_EXPIRY_DATE`: Maintains the current slab's expiry date in ISO YYYY-MM-DD HH:MM:SS format. `AS_PER_TIER_STRATEGY`: Calculates the expiry date based on the expiration strategy defined by the loyalty program.    |
| manualSlabActionValidityUpto\*                   | Long      | Date or number of days the customer's tier upgrade or downgrade is valid till. If `manualSlabActionValidity` = `FIXED_DURATION`: Provide a numerical value. For example to extend the expiry by 15 days, provide this value as `15`. If `manualSlabActionValidity` = `SPECIFIC_DATE`: Provide the date till when the tier is valid in `YYYY-MM-DD` format. For example to extend the expiry till 20th April, 2025, provide this value as `2025-04-20`. |
| reassessTierOnNextActivity                       | Boolean   | Specify if the customer's tier during their next transaction or activity should be re-evaluated. The value is `false` by default. `true`: The system will reassess the customer's tier during their next activity. `false`: No automatic reassessment will occur during the next activity and the tier upgrade will expire based on the expiry strategy defined.                                                                                       |
| slabChangeReason                                 | String    | Reason for changing, renewing or extending the customer's tier. Character limit: 255 characters.                                                                                                                                                                                                                                                                                                                                                       |

## Response Body

```json Tier Upgrade
{
    "programId": 973,
    "entityId": 424134447,
    "sideEffects": [
        {
            "entityType": "USER",
            "previousSlabName": "Ruby",
            "previousSlabNumber": 2,
            "upgradedSlabName": "Emerald",
            "upgradedSlabNumber": 3,
            "slabExpiryDate": "30th Nov, 2025",
            "type": "slab"
        }
    ],
    "warnings": []
}
```
```Text Tier Downgrade
{
    "programId": 2834,
    "entityId": 424134447,
    "sideEffects": [
        {
            "entityType": "USER",
            "previousSlabName": "GOLD",
            "previousSlabNumber": 3,
            "upgradedSlabName": "Silver",
            "upgradedSlabNumber": 2,
            "slabExpiryDate": "30th Nov, 2025",
            "type": "slab"
        }
    ],
    "warnings": []
}
```
```Text Tier Renewal / Extension
{
    "programId": 2834,
    "entityId": 424134447,
    "sideEffects": [
        {
            "entityType": "USER",
            "previousSlabName": "GOLD",
            "previousSlabNumber": 3,
            "upgradedSlabName": "GOLD",
            "upgradedSlabNumber": 3,
            "slabExpiryDate": "30th Nov, 2025",
            "type": "slab"
        }
    ],
    "warnings": []
}
```

## Response Body Parameters

| Parameter          | Description                                                                                                                                    |
| :----------------- | :--------------------------------------------------------------------------------------------------------------------------------------------- |
| programId          | Unique ID of the loyalty program.                                                                                                              |
| entityId           | Unique ID of the customer whose slab was adjusted.                                                                                             |
| sideEffects        | Object containing details of the tier adjustment.                                                                                              |
| entityType         | Type of entity part of the tier adjustment. Possible values: `USER`, `USERGROUP2`                                                              |
| previousSlabName   | Customer's slab name before the adjustment.                                                                                                    |
| previousSlabNumber | Numerical representation of the previous slab. For example, if the slab was the third slab in the order, the value will be `3`.                |
| upgradedSlabName   | Customer's slab name after the adjustment.                                                                                                     |
| upgradedSlabNumber | Numerical representation of the upgraded or downgraded slab. For example, if the slab was the second slab in the order, the value will be `2`. |
| slabExpiryDate     | New expiry date of the customer's slab.                                                                                                        |
| type               | Type of side effect. Possible value: `slab`                                                                                                    |
| warnings           | Object containing warnings, if any.                                                                                                            |

## API Specific Error Codes

| Error Code | Description                                             | Reason                                                          |
| :--------- | :------------------------------------------------------ | :-------------------------------------------------------------- |
| 1101       | invalid programId passed                                | Program ID invalid or unsupported                               |
| 8015       | Customer not found for the given identifiers            | Invalid customer ID passed                                      |
| 8917       | slabAction field is not set                             | Invalid slabAction field passed                                 |
| 8920       | manualSLabActionValidity field is not set               | Invalid manualSLabActionValidity field passed                   |
| 8921       | manualSLabActionValidityUpto value should be an integer | Valid Integer not passed for manualSLabActionValidityUpto field |
| 8923       | slab not found for the given slab name                  | Invalid or unsupported slab name                                |
| 8925       | target slab must be higher than the current slab        | Invalid toslabname field passed                                 |