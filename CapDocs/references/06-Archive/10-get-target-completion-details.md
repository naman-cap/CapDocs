---
title: Get Target Completion Details
excerpt: ''
api:
  file: v1.json
  operationId: get-target-completion-details
deprecated: false
hidden: true
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
The API retrieves target completion details for the event log IDs related to `TargetCompleted` events.

> 🚧 Note
>
> This is a private API and is accessible only through Neo dataflows.

# Prerequisites

*   Access to Neo
*   Basic or OAuth authentication details
*   Access group resource - NA

# Resource information

|                                |                                      |
| :----------------------------- | :----------------------------------- |
| URI to be used in Neo dataflow | /das/getTargetCompletedExplodeLedger |
| HTTP method                    | GET                                  |
| Pagination supported?          | Yes                                  |
| Rate limit                     | Based on Neo                         |
| Batch support                  | NA                                   |

# Request Query Parameters

| Parameter (Parameters marked with \* are mandatory) | Data Type | Description                                                                                                      |
| :-------------------------------------------------- | :-------- | :--------------------------------------------------------------------------------------------------------------- |
| ledgerEntryTypes\*                                  | String    | Type of entry recorded in a customer's points ledger. **Allowed values**: `CREDIT`, `DEBIT`                      |
| userId\*                                            | Long      | Unique customer ID of the customer                                                                               |
| endDate\*                                           | Date      | Last date to which you want to retrieve the ledger information. **Format**: YYYY-MM-DD. **Example**: 2025-06-22  |
| startDate\*                                         | Date      | Start date to which you want to retrieve the ledger information. **Format**: YYYY-MM-DD. **Example**: 2025-06-01 |
| alternateCurrencyNames                              | String    | Name of the alternate currency for which ledger information is retrieved.                                        |
| page                                                | Integer   | Retrieve details of a specific page. Page count starts from 1. **Example**: `page=2` retrieves data on page 2.   |
| count                                               | Integer   | Number of results to display per page. The default value is 10. The maximum supported value is 100.              |

# Response Parameters

| **Parameter**                       | **Data Type** | **Description**                                                                                                    |
| ----------------------------------- | ------------- | ------------------------------------------------------------------------------------------------------------------ |
| request\_id                         | String        | Unique identifier for the request.                                                                                 |
| data                                | Object        | Contains the main data structure for the request.                                                                  |
| -records                            | Array         | A collection of records associated with the request.                                                               |
| -- fields                           | Object        | Contains the fields for each record.                                                                               |
| --- sourceId                        | Object        | Unique identifier for the source, represented as a number.                                                         |
| --- parentEventLogId                | Object        | Unique identifier for the parent event log, represented as a number.                                               |
| --- periodId                        | Object        | Identifier for the period, represented as a null value if not applicable.                                          |
| --- returnEventLogId                | Object        | Unique identifier for the return event log, represented as a number.                                               |
| --- targetAchievedEventLogId        | Object        | Unique identifier for the target achieved event log, represented as a number.                                      |
| --- targetGroupName                 | Object        | Name of the target group, represented as a string.                                                                 |
| --- processingTime                  | Object        | Time taken for processing, represented as a number.                                                                |
| --- targetGroupDescription          | Object        | Description of the target group, represented as a string.                                                          |
| --- eventTypeId                     | Object        | Unique identifier for the event type, represented as a number.                                                     |
| --- sourceType                      | Object        | Type of the source, represented as a string.                                                                       |
| --- billId                          | Object        | Unique identifier for the bill, represented as a number.                                                           |
| --- customerId                      | Object        | Unique identifier for the customer, represented as a number.                                                       |
| --- eventTime                       | Object        | Timestamp indicating when the event occurred, represented as a number.                                             |
| --- targetAchievedEventLogCreatedOn | Object        | Timestamp indicating when the target achieved event log was created, represented as a number.                      |
| --- targetGroupId                   | Object        | Unique identifier for the target group, represented as a number.                                                   |
| --- eventLogId                      | Object        | Unique identifier for the event log, represented as a number.                                                      |
| --- tillId                          | Object        | Unique identifier for the till, represented as a number.                                                           |
| --- uniqueId                        | Object        | Unique identifier for this specific event instance, represented as a string.                                       |
| ---unifiedTargetsAchievedCreatedOn  | Object        | Timestamp indicating when the unified targets achieved was created, represented as a null value if not applicable. |

# Response sample

```
{
    "request_id": "15c96f72-8eeb-4a82-8e73-dd800d2c16ba",
    "data": {
        "records": [
            {
                "fields": {
                    "sourceId": {
                        "number_value": 2476935
                    },
                    "parentEventLogId": {
                        "number_value": 38731902
                    },
                    "periodId": {
                        "null_value": "NULL_VALUE"
                    },
                    "returnEventLogId": {
                        "number_value": -1
                    },
                    "targetAchievedEventLogId": {
                        "number_value": 468000
                    },
                    "targetGroupName": {
                        "string_value": "Test_Behavioural_Event_Target"
                    },
                    "processingTime": {
                        "number_value": 1748950111000
                    },
                    "targetGroupDescription": {
                        "string_value": "Test_Behavioural_Event_Target"
                    },
                    "eventTypeId": {
                        "number_value": 25
                    },
                    "sourceType": {
                        "string_value": "USERTARGET"
                    },
                    "billId": {
                        "number_value": 468000
                    },
                    "customerId": {
                        "number_value": 387970841
                    },
                    "eventTime": {
                        "number_value": 1748950110000
                    },
                    "targetAchievedEventLogCreatedOn": {
                        "number_value": 1748950111000
                    },
                    "targetGroupId": {
                        "number_value": 74503
                    },
                    "eventLogId": {
                        "number_value": 38731904
                    },
                    "tillId": {
                        "number_value": 50692627
                    },
                    "uniqueId": {
                        "string_value": "1ff9d4953610d8aa0924b24676b34c8c86f6502c"
                    },
                    "unifiedTargetsAchievedCreatedOn": {
                        "null_value": "NULL_VALUE"
                    }
                }
            }
        ]
    }
}
```

# Error Code

| Error Code | Description           |
| :--------- | :-------------------- |
| 400        | Bad Request           |
| 404        | Not Found             |
| 500        | Internal Server Error |