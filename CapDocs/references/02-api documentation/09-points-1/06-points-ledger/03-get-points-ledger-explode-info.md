---
title: Get Points Ledger Explode info
excerpt: Retrieves the points ledger explode info for customer/ user group.
api:
  file: v2.json
  operationId: get-points-ledger-explode-info
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
The Customer Ledger Explode Info API retrieves additional points ledger info for a customer or user group.

A customer points ledger is essentially a record that tracks the points earned, spent, and adjusted within an organization and its affiliates. These points are treated like currency and can be redeemed across various units or loyalty programs within the organization.

For more information, refer to the documentation on [Points Ledgers](https://docs.capillarytech.com/reference/points-ledger).

# API endpoint example

`https://eu.api.capillarytech.com/v2/pointsLedger/getLedgerExplodeInfo?identifierName=mobile&identifierValue=917406401004&source=INSTORE&eventIds=18608683`

**With event name and reference ID for a transactional event:**
`https://eu.api.capillarytech.com/v2/pointsLedger/getLedgerExplodeInfo?identifierName=id&identifierValue=1709400643455&source=INSTORE&offset=0&limit=10&eventName=TransactionAdd&eventReferenceIds=37195406289&getBillDetails=true&getCustomFields=true&getPaymentModes=true&getMaxConversionDetails=true`

**With event name and request ID for a behavioral event:**
`https://eu.api.capillarytech.com/v2/pointsLedger/getLedgerExplodeInfo?eventName=GenericEvent&eventReferenceIds=c30af8e0-1c51-475c-bbda-ca94b1d67074&identifierName=id&identifierValue=347689245&source=INSTORE&getPointsEarnedBreakup=true&getMaxConversionDetails=true&getCustomFields=true&getExtendedFields=true&getBillDetails=true&includeLastOneYearData=false&offset=0&limit=10`

# Prerequisites

*   Authentication: Basic or OAuth credentials
*   Access points group resource: Read access to customer points group resource

# Resource information

|                        |                                      |
| :--------------------- | :----------------------------------- |
| URI                    | v2/pointsLedger/getLedgerExplodeInfo |
| HTTP Method            | GET                                  |
| Pagination             | Yes                                  |
| Batch support          | No                                   |
| Rate limit information | NA                                   |

# Query parameters

| Parameter Name             | Description                                                                                                                                                                                                                                                                                                                                                                                                  |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| identifierName*            | Identifier type to identify the customer. Supported values: **MOBILE**, **ID**, **EMAIL**, **CustomerID**, **primaryUserId**, and **EXTERNALID**.                                                                                                                                                                                                                                                            |
| identifierValue*           | Value for the identifier. For example, the mobile number or customer ID.                                                                                                                                                                                                                                                                                                                                     |
| source*                    | Source in which the identifier is available. For example, INSTORE, MARTJACK, WECHAT, FACEBOOK, WEB_ENGAGE, TMALL, TAOBAO, JD, ECOMMERCE, WEBSITE, LINE, ALL.                                                                                                                                                                                                                                                 |
| eventIds                   | The list of `eventLogId` with comma-separated values. These are eventLogIds corresponding to events in loyalty, like TransactionAdd, CustomerRegistration, etc.                                                                                                                                                                                                                                              |
| accountId                  | For a source with multiple accounts, pass the specific accountId in which the customer identifier is available.                                                                                                                                                                                                                                                                                              |
| getBillDetails             | Setting this to true will return bill details like bill number, amount, discount, line items, etc.                                                                                                                                                                                                                                                                                                           |
| getPointsEarnedBreakup     | Setting this to true will return points breakup details, such as points category name, points allocation strategy name, expiry strategy, etc.                                                                                                                                                                                                                                                                |
| getCustomFields            | Setting this value will return the custom fields set up by the brand.                                                                                                                                                                                                                                                                                                                                        |
| getExtendedFields          | Setting this field will return the extended fields set up by the brand.                                                                                                                                                                                                                                                                                                                                      |
| getMaxConversionDetails    | Setting this field to true will return the max conversion details set for Add Transaction. For all line items where delayed accrual is based on fixed or return date, the max of all dates is calculated and shown in the field `maxConversionDate`.                                                                                                                                                         |
| getPaymentModes            | Setting this field will show an array of payment modes used (e.g., UPI, CASH, etc.).                                                                                                                                                                                                                                                                                                                         |
| type                       | Returns entries for type of user—either individual customer or group. Allowed values: CUSTOMER, USERGROUP2.                                                                                                                                                                                                                                                                                                  |
| isPrimaryUser              | Returns entry for the primary member of a group, in case of user groups.                                                                                                                                                                                                                                                                                                                                     |
| includeAlternateCurrencies | Pass `includeAlternateCurrencies=true` to retrieve all alternate currencies available for the customer.                                                                                                                                                                                                                                                                                                      |
| alternateCurrencyNames     | Filter alternate currencies for the customer based on the name. You can also pass a list of comma-separated currency names. Set `includeAlternateCurrencies` to false when using this. If true, all available currencies are listed.                                                                                                                                                                         |
| eventName                  | Name of the event. Supports both behavioral and transactional events. Possible values: `ManualPointsAdjustment`, `PointsExpiry`, `AllocateGoodwillPoints`, `GenericEvent`, `TransactionAdd`, `TransactionUpdate`, `TargetCompleted`, `PointsRedemption`, `VoucherRedemption`, `DelayedAccrual`, `PointsTransfer`, `PointsRedemptionReversal`, `CustomerRegistration`, `CustomerUpdate`, `BulkAllocatePoints` |
| eventReferenceIds          | Reference ID for the event. For transactional events, this is the transaction ID. For behavioral events, this is the unique request ID generated when a behavioral event is triggered. You can add up to **ten** reference IDs for the specified `eventName`, separated by commas.                                                                                                                           |

# Sample Response

```json
{
    "events": [
        {
            "eventLogId": 30527930,
            "eventName": "TargetCompleted",
            "eventDetails": {
                "eventTime": "2024-10-25 22:59:12.0",
                "tillId": 50137565
            },
            "targetCompletedDetails": {
                "targetGroupID": 46750,
                "targetGroupName": "TGName",
                "targetId": 76041,
                "targetName": "TName",
                "targetDescription": "TDescription",
                "targetPeriodID": 66277,
                "targetPeriodName": "Cycle_4",
                "targetValue": "1000.000",
                "achievedValue": "1200.000",
                "sourceId": 641554,
                "sourceType": "USERTARGET",
                "pointsEarned": {
                    "promo": [
                        {
                            "promotionId": 1133572888,
                            "promotionName": "Progname",
                            "programId": 1933,
                            "programName": "DefaultProgram",
                            "value": 100.0,
                            "expiresOn": "2025-10-31 23:59:59.0",
                            "expiryType": "fixed"
                        }
                    ],
                    "promised": []
                }
            },
            "eventReferenceId": "263985",
            "uniqueId": "71730c8b628d0978e21e5e374f50fae606779fd412"
        },
        {
            "eventLogId": 30527931,
            "eventName": "TargetCompleted",
            "eventDetails": {
                "eventTime": "2024-10-25 22:59:12.0",
                "tillId": 50137565
            },
            "targetCompletedDetails": {
                "targetGroupID": 46750,
                "targetGroupName": "TGName1",
                "targetId": 76041,
                "targetName": "TName1",
                "targetDescription": "TDesc1",
                "targetPeriodID": 66277,
                "targetPeriodName": "Cycle_4",
                "triggerValue": "300.000",
                "sourceId": 78104,
                "sourceType": "MILESTONE",
                "pointsEarned": {
                    "promo": [
                        {
                            "promotionId": 1133572888,
                            "promotionName": "Promoname",
                            "programId": 1933,
                            "programName": "Progname",
                            "value": 100.0,
                            "expiresOn": "2025-10-31 23:59:59.0",
                            "expiryType": "fixed"
                        }
                    ],
                    "promised": []
                },
                "mileStoneName": "Sub target 1"
            },
            "eventReferenceId": "263986",
            "uniqueId": "88248bc99f945f1778f85af7c6ba69e4b90651c6"
        },
        {
            "eventLogId": 30527932,
            "eventName": "TargetCompleted",
            "eventDetails": {
                "eventTime": "2024-10-25 22:59:12.0",
                "tillId": 50137565
            },
            "targetCompletedDetails": {
                "targetGroupID": 46750,
                "targetGroupName": "TGName1",
                "targetId": 76041,
                "targetName": "TName1",
                "targetDescription": "TDesc1",
                "targetPeriodID": 66277,
                "targetPeriodName": "Cycle_4",
                "triggerValue": "600.000",
                "sourceId": 78104,
                "sourceType": "MILESTONE",
                "pointsEarned": {
                    "promo": [
                        {
                            "promotionId": 1133572888,
                            "promotionName": "Promoname",
                            "programId": 1933,
                            "programName": "Progname",
                            "value": 100.0,
                            "expiresOn": "2025-10-31 23:59:59.0",
                            "expiryType": "fixed"
                        }
                    ],
                    "promised": []
                },
                "mileStoneName": "Sub target 2"
            },
            "eventReferenceId": "263987",
            "uniqueId": "7470f2457563461f66bc1aasgf1760d8ga71ec3ee0174c267"
        }
    ],
    "warnings": []
}
```
```json Ledger Explode information with events
{
    "events": [
        {
            "eventLogId": 27909380,
            "eventName": "CustomerRegistration",
             “eventReferenceIds“:{RefId1},
            "eventDetails": {
                "eventTime": "2024-01-18 17:18:00.0",
                "tillId": 50697469
            },
            "pointsEarned": {
                "regular": [],
                "promo": [],
                "promised": []
            }
        },

{
            "eventLogId": 27909380,
            "eventName": "CustomerRegistration",
             “eventReferenceIds“:{RefId2},
            "eventDetails": {
                "eventTime": "2024-01-18 17:18:00.0",
                "tillId": 50697469
            },
            "pointsEarned": {
                "regular": [],
                "promo": [],
                "promised": []
            }
        }
    ],
    "warnings": []
}
```
```Text Goodwillpoints event
{
    "events": [
        {
            "eventLogId": 8143509,
            "eventName": "AllocateGoodwillPoints",
            "eventDetails": {
                "eventTime": "2023-07-27 19:14:10.0",
                "reason": "POINTS_ISSUE",
                "comments": "Customer has reached the milestone. Awarding him 100 points.",
                "assocId": 0,
                "requestId": 980464
            },
            "pointsEarned": {
                "regular": [],
                "promo": [
                    {
                        "promotionId": 1114107,
                        "promotionName": "Goodwill Promotion",
                        "programId": 890,
                        "programName": "huhuhuDefaultProgram",
                        "value": 100.0,
                        "expiresOn": "2023-08-01 23:59:59.0",
                        "expiryType": "fixed"
                    }
                ],
                "promised": []
            },
            "eventReferenceId": "-1",
            "uniqueId": "GzKOlmc0eM"
        }
    ],
    "warnings": []
}
```
```Text Return transaction event
{
    "events": [
        {
            "eventLogId": 632749682,
            "eventName": "PointsRedemption",
            "eventDetails": {
                "eventTime": "2025-07-03 07:13:20.0",
                "tillId": 75152721,
                "redemptionDetails": {
                    "pointsRedeemed": "101.000",
                    "redemptionPurpose": "testUpdate",
                    "transactionNumber": "txn-79",
                    "redemptionId": "kh4Mh7",
                    "notes": "Redeemed to transfer points to the friend",
                    "groupRedemption": false
                }
            },
            "customFields": [
                {
                    "name": "card_number",
                    "value": "123456"
                }
            ],
            "pointsBreakup": [],
            "eventReferenceId": "564332013",
            "uniqueId": "nQmaNo4ay9"
        }
    ],
    "warnings": []
}
```

# Response Parameters

| Parameter Name                    | Type    | Description                                                                                                                                                                                                                                                                                                                                               |
| --------------------------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| eventLogId                        | Integer | A unique identifier for the event.                                                                                                                                                                                                                                                                                                                        |
| eventName                         | String  | Name of the event. Possible values: `ManualPointsAdjustment`, `PointsExpiry`, `AllocateGoodwillPoints`, `GenericEvent`, `TransactionAdd`, `TransactionUpdate`, `TargetCompleted`, `PointsRedemption`, `VoucherRedemption`, `DelayedAccrual`, `PointsTransfer`, `PointsRedemptionReversal`, `CustomerRegistration`, `CustomerUpdate`, `BulkAllocatePoints` |
| eventDetails                      | Object  | Contains details about the event.                                                                                                                                                                                                                                                                                                                         |
| -eventDisplayName                 | String  | Display name of the event, e.g., `"CupSeries2024"`.                                                                                                                                                                                                                                                                                                       |
| -tillId                           | Integer | ID of the till where the event was recorded.                                                                                                                                                                                                                                                                                                              |
| -comments                         | String  | Additional comments provided while issuing goodwill points.                                                                                                                                                                                                                                                                                               |
| -assocId                          | long    | User ID of the Intouch user who issued the Goodwill points.                                                                                                                                                                                                                                                                                               |
| -displayName                      | String  | Name to display for the event, e.g., `"CUP SERIES CHECK-IN"`.                                                                                                                                                                                                                                                                                             |
| -redemptionDetails                | Array   | Includes the details related to the redemption of points.                                                                                                                                                                                                                                                                                                 |
| --pointsRedeemed                  | String  | The number of points that were redeemed in the transaction.                                                                                                                                                                                                                                                                                               |
| --redemptionPurpose               | String  | Purpose of points redemption.                                                                                                                                                                                                                                                                                                                             |
| --transactionNumber               | String  | The transaction/bill number associated with the points redemption.                                                                                                                                                                                                                                                                                        |
| --redemptionId                    | String  | A unique identifier for the redemption transaction.                                                                                                                                                                                                                                                                                                       |
| targetCompletedDetails            | Array   | Object containing details of a completed target.                                                                                                                                                                                                                                                                                                          |
| -targetGroupID                    | String  | The unique group ID of the target.                                                                                                                                                                                                                                                                                                                        |
| -targetGroupName                  | String  | The unique name of the target group.                                                                                                                                                                                                                                                                                                                      |
| -targetId                         | Integer | The unique ID of the target.                                                                                                                                                                                                                                                                                                                              |
| -targetName                       | String  | The unique name of the target.                                                                                                                                                                                                                                                                                                                            |
| -targetDescription                | String  | Description of the target (if added).                                                                                                                                                                                                                                                                                                                     |
| -targetPeriodID                   | Integer | The unique ID of the target period.                                                                                                                                                                                                                                                                                                                       |
| -targetPeriodName                 | String  | The unique name of the target period.                                                                                                                                                                                                                                                                                                                     |
| -sourceId                         | Integer | The unique ID of the target source.                                                                                                                                                                                                                                                                                                                       |
| -sourceType                       | String  | The type of source (MILESTONE, STREAKS, UNIFIED).                                                                                                                                                                                                                                                                                                         |
| pointsEarned                      | Object  | Contains details of points earned in the event.                                                                                                                                                                                                                                                                                                           |
| -regular                          | Array   | Array of regular points earned (empty in this case).                                                                                                                                                                                                                                                                                                      |
| -promo                            | Array   | Array of promotional points earned during the event.                                                                                                                                                                                                                                                                                                      |
| --promotionId                     | Integer | The ID of the promotion, e.g., `8166`.                                                                                                                                                                                                                                                                                                                    |
| --promotionName                   | String  | The name of the promotion, e.g., `"CupSeriesatClashColiseumBuschLightTrack_4Feb-5Feb"`.                                                                                                                                                                                                                                                                   |
| --programId                       | Integer | The ID of the loyalty program associated with the promotion, e.g., `1155`.                                                                                                                                                                                                                                                                                |
| --programName                     | String  | The name of the loyalty program, e.g., `"NASCAR LoyaltyDefaultProgram"`.                                                                                                                                                                                                                                                                                  |
| --value                           | Float   | The value of the points earned from the promotion, e.g., `200.0`.                                                                                                                                                                                                                                                                                         |
| --promotionStartDate              | String  | The start date of the promotion, e.g., `"2024-02-04 00:00:00.0"`.                                                                                                                                                                                                                                                                                         |
| --promotionEndDate                | String  | The end date of the promotion, e.g., `"2024-03-05 23:59:59.0"`.                                                                                                                                                                                                                                                                                           |
| -promised                         | Array   | Array of promised points (empty in this case).                                                                                                                                                                                                                                                                                                            |
| behavioralEventMetadata           | Object  | Metadata about the behavioral event associated with the check-in.                                                                                                                                                                                                                                                                                         |
| -label                            | String  | The label for the behavioral event, e.g., `"CUP SERIES CHECK-IN"`.                                                                                                                                                                                                                                                                                        |
| -fields                           | Array   | An array of fields related to the event's metadata.                                                                                                                                                                                                                                                                                                       |
| --fieldName                       | String  | The name of the field, e.g., `"activity_date"`.                                                                                                                                                                                                                                                                                                           |
| --fieldType                       | String  | The type of the field, e.g., `"DATE"`.                                                                                                                                                                                                                                                                                                                    |
| --attributes.isRequired.valueType | String  | The type of value for the `isRequired` attribute for the event, e.g., `"BOOLEAN"`. This is configured during the [creation of the event](https://docs.capillarytech.com/docs/setup-test-behavioral-events).                                                                                                                                               |
| --attributes.isRequired.value     | String  | The value indicating if the field is required, e.g., `"false"`.                                                                                                                                                                                                                                                                                           |
| --isUniqueKeyField.valueType      | String  | The type of value for the `isUniqueKeyField` attribute, e.g., `"BOOLEAN"`. This is configured during the [creation of the event](https://docs.capillarytech.com/docs/setup-test-behavioral-events).                                                                                                                                                       |
| --isUniqueKeyField.value          | String  | The value indicating if the field is a unique key, e.g., `"false"`.                                                                                                                                                                                                                                                                                       |
| eventReferenceId                  | String  | The event request ID. This is generated when the [event is sent](https://docs.capillarytech.com/reference/post-event). This helps to trace the event. For `TargetCompleted` events, this ID (`targetAchievedEventLogId`) is generated when a user has achieved a target.                                                                                  |
| uniqueId                          | String  | A [unique identifier](https://docs.capillarytech.com/docs/setup-test-behavioral-events#enabling-uniqueness-check) for this specific event instance, e.g., `"70375599-a144-4065-8db5-a6abd061ddf7"`. This can be the same as `requestId` or a hash of the payload when the `isUniqueKeyField` is enabled.                                                  |
| billDetails                       | Object  | Object containing details on the following information: type (type of transaction), bill number (unique transaction number), gross amount, discount, bill amount, note, source, bill date (time in ISO 8601 format), and points earned details.                                                                                                           |
| -billNumber                       | String  | Unique identifier for the transaction. This is defined when adding the original transaction.                                                                                                                                                                                                                                                              |
| -billAmount                       | Float   | Total transaction amount for the transaction.                                                                                                                                                                                                                                                                                                             |
| -note                             | String  | Note for the transaction.                                                                                                                                                                                                                                                                                                                                 |
| -returnDate                       | String  | Date when the transaction was returned in in ISO 8601 `YYYY-MM-DDTHH:mm:ss.SSS` format.                                                                                                                                                                                                                                                                   |
| -returnAmount                     | Float   | Total amount for the return transaction.                                                                                                                                                                                                                                                                                                                  |
| -billDate                         | String  | Date when the transaction was created in in ISO 8601 `YYYY-MM-DDTHH:mm:ss.SSS` format.                                                                                                                                                                                                                                                                    |
| -returnType                       | Enum    | Type of return. Possible values: `AMOUNT`, `FULL`, `LINE_ITEM`, `CANCELLED`.                                                                                                                                                                                                                                                                              |
| -returnBillId                     | long    | Unique ID for the return transaction that is generated after a return transaction. This is the `entityId` of the return transaction.                                                                                                                                                                                                                      |
| -pointsEarned                     | Object  | Object containing details on the points earned for the transaction.                                                                                                                                                                                                                                                                                       |
| -lineItems                        | Object  | Object containing details on line items in the bill.                                                                                                                                                                                                                                                                                                      |
| customFields                      | Object  | Object containing details on custom fields for the transaction.                                                                                                                                                                                                                                                                                           |
| -name                             | String  | Unique name of the custom field.                                                                                                                                                                                                                                                                                                                          |
| -value                            | Any     | Value for the corresponding custom field name. The data type for the value is based on what is configured for the custom field.                                                                                                                                                                                                                           |
| warnings                          | Array   | Warnings, if any.                                                                                                                                                                                                                                                                                                                                         |

# API specific errors

| Error Code | Description                      |
| :--------- | :------------------------------- |
| 9022       | Event reference IDs are invalid  |
| 11014      | Event name not found             |
| 11023      | Valid identifiers not found      |
| 11012      | Invalid userId passed in request |
