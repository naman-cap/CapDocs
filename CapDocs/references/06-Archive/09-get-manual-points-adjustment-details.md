---
title: Get Manual Points Adjustment Details
excerpt: ''
api:
  file: v1.json
  operationId: get-manual-points-adjustment-details
deprecated: false
hidden: true
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
The API retrieves manual points adjustment details mapped to event log IDs for `ManualPointsAdjustment` event from the ledger information.

> 🚧 Note
>
> This is a private API and is accessible only through Neo dataflows.

# Prerequisites

*   Access to Neo
*   Basic or OAuth authentication details
*   Access group resource - NA

# Resource information

|                                |                                             |
| :----------------------------- | :------------------------------------------ |
| URI to be used in Neo dataflow | /das/getManualPointsAdjustmentExplodeLedger |
| HTTP method                    | GET                                         |
| Pagination supported?          | Yes                                         |
| Rate limit                     | Based on Neo                                |
| Batch support                  | NA                                          |

# Request Query Parameters

| Parameter (Parameters marked with \* are mandatory) | Data Type | Description                                                                                                        |
| :-------------------------------------------------- | :-------- | :----------------------------------------------------------------------------------------------------------------- |
| ledgerEntryTypes\*                                  | String    | Type of entry recorded in a customer's points ledger. **Allowed values**: `CREDIT`, `DEBIT`                        |
| userId\*                                            | Long      | Unique customer ID of the customer                                                                                 |
| endDate\*                                           | Date      | Last date to which you want to retrieve the ledger information. **Format**: YYYY-MM-DD. **Example**: 2025-06-22    |
| startDate\*                                         | Date      | Start date from which you want to retrieve the ledger information. **Format**: YYYY-MM-DD. **Example**: 2025-06-22 |
| alternateCurrencyNames                              | String    | Name of the alternate currency for which ledger information is retrieved.                                          |
| page                                                | Integer   | Retrieve details of a specific page. Page count starts from 1. **Example**: `page=2` retrieves data on page 2.     |
| count                                               | Integer   | Number of results to display per page. The default value is 10. The maximum supported value is 100.                |

# Response Parameters

| Parameter      | Data Type | Description                                                                |
| :------------- | :-------- | :------------------------------------------------------------------------- |
| request\_id    | String    | Unique identifier for the request.                                         |
| data           | Object    | Contains the main data structure for the request.                          |
| -records       | Array     | A collection of records associated with the request.                       |
| -- fields      | Object    | Contains the fields for each record.                                       |
| --- reason     | Object    | Reason for the event, represented as a string.                             |
| --- customerId | Object    | Unique identifier for the customer, represented as a number.               |
| --- eventLogId | Object    | Unique identifier for the event log, represented as a number.              |
| ---pointsValue | Object    | Value of points associated with the event, represented as a number.        |
| --- createdOn  | Object    | Timestamp indicating when the record was created, represented as a number. |

# Sample response

```json
{
    "request_id": "36005b85-42c9-444f-930c-edf1d21bdb21",
    "data": {
        "records": [
            {
                "fields": {
                    "reason": {
                        "string_value": "testing the ledger"
                    },
                    "customerId": {
                        "number_value": 387970841
                    },
                    "eventLogId": {
                        "number_value": 38731901
                    },
                    "pointsValue": {
                        "number_value": 10
                    },
                    "createdOn": {
                        "number_value": 1748950060000
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