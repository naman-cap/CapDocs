---
title: Get Manual Points Adjustment Details
deprecated: false
hidden: false
metadata:
  robots: index
---
The API retrieves manual points adjustment details mapped to event log IDs for `ManualPointsAdjustment` event from the ledger information.

> 🚧 Note
>
> This is a private API and is accessible only through [Neo](https://docs.capillarytech.com/docs/neo-quick-start#/) dataflows.

# Prerequisites

*   [Access to Neo](https://docs.capillarytech.com/docs/access-management-neo#/)
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

# Request query parameters

| Parameter (Parameters marked with \* are mandatory) | Data Type | Description                                                                                                        |
| :-------------------------------------------------- | :-------- | :----------------------------------------------------------------------------------------------------------------- |
| ledgerEntryTypes\*                                  | String    | Type of entry recorded in a customer's points ledger. **Allowed values**: `CREDIT`, `DEBIT`                        |
| userId\*                                            | Long      | Unique customer ID of the customer                                                                                 |
| endDate\*                                           | Date      | Last date to which you want to retrieve the ledger information. **Format**: YYYY-MM-DD. **Example**: 2025-06-22    |
| startDate\*                                         | Date      | Start date from which you want to retrieve the ledger information. **Format**: YYYY-MM-DD. **Example**: 2025-06-22 |
| alternateCurrencyNames                              | String    | Name of the alternate currency for which ledger information is retrieved.                                          |
| page                                                | Integer   | Retrieve details of a specific page. Page count starts from 1. **Example**: `page=2` retrieves data on page 2.     |
| count                                               | Integer   | Number of results to display per page. The default value is 10. The maximum supported value is 100.                |

# Response parameters

| Parameter   | Data Type | Description                                                       |
| :---------- | :-------- | :---------------------------------------------------------------- |
| reason      | String    | Reason for the ledger entry                                       |
| customerId  | Long      | Unique identifier of the customer                                 |
| eventLogId  | Long      | Unique identifier of the event log                                |
| pointsValue | Integer   | Number of points associated with the event                        |
| createdOn   | Long      | Time when the entry was created represented in epoch milliseconds |

# Sample response

```json Sample response
   [
      {
        "reason": "testing the ledger",
        "customerId": 387970841,
        "eventLogId": 38731901,
        "pointsValue": 10,
        "createdOn": 1748950060000
      }
    ]
```

# Error code

| Error Code | Description           |
| :--------- | :-------------------- |
| 400        | Bad Request           |
| 404        | Not Found             |
| 500        | Internal Server Error |