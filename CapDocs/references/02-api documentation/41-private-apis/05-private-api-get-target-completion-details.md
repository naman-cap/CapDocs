---
title: Get Target Completion Details
deprecated: false
hidden: false
metadata:
  robots: index
---
The API retrieves target completion details for the event log IDs related to `TargetCompleted` events.

> 🚧 Note
>
> This is a private API and is accessible only through [Neo](https://docs.capillarytech.com/docs/neo-quick-start#/) dataflows.

# Prerequisites

*   [Access to Neo](https://docs.capillarytech.com/docs/access-management-neo#/)
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

# Request query parameters

| Parameter (Parameters marked with \* are mandatory) | Data Type | Description                                                                                                      |
| :-------------------------------------------------- | :-------- | :--------------------------------------------------------------------------------------------------------------- |
| ledgerEntryTypes\*                                  | String    | Type of entry recorded in a customer's points ledger. **Allowed values**: `CREDIT`, `DEBIT`                      |
| userId\*                                            | Long      | Unique customer ID of the customer                                                                               |
| endDate\*                                           | Date      | Last date to which you want to retrieve the ledger information. **Format**: YYYY-MM-DD. **Example**: 2025-06-22  |
| startDate\*                                         | Date      | Start date to which you want to retrieve the ledger information. **Format**: YYYY-MM-DD. **Example**: 2025-06-01 |
| alternateCurrencyNames                              | String    | Name of the alternate currency for which ledger information is retrieved.                                        |
| page                                                | Integer   | Retrieve details of a specific page. Page count starts from 1. **Example**: `page=2` retrieves data on page 2.   |
| count                                               | Integer   | Number of results to display per page. The default value is 10. The maximum supported value is 100.              |

# Response parameters

| Parameter                       | Data Type | Description                                                                         |
| ------------------------------- | --------- | ----------------------------------------------------------------------------------- |
| sourceId                        | Long      | ID of the source that triggered the event                                           |
| parentEventLogId                | Long      | ID of the parent event log                                                          |
| periodId                        | Long      | ID of the period (null if not applicable)                                           |
| returnEventLogId                | Long      | Event log ID linked to a return (value -1 if not a return)                          |
| targetAchievedEventLogId        | Long      | Event log ID where the target was achieved                                          |
| targetGroupName                 | String    | Name of the target group                                                            |
| processingTime                  | Long      | Time when the event was processed, in epoch milliseconds                            |
| targetGroupDescription          | String    | Description of the target group                                                     |
| eventTypeId                     | Integer   | Type of the event                                                                   |
| sourceType                      | String    | Type of the source **Example**: USERTARGET                                          |
| billId                          | Long      | Associated bill ID                                                                  |
| customerId                      | Long      | Unique identifier of the customer                                                   |
| eventTime                       | Long      | Time when the event occurred expressed in epoch milliseconds                        |
| targetAchievedEventLogCreatedOn | Long      | Time when the target-achieved event log was created expressed in epoch milliseconds |
| targetGroupId                   | Long      | ID of the target group                                                              |
| eventLogId                      | Long      | Unique identifier for the event log                                                 |
| tillId                          | Long      | ID of the till where the event occurred                                             |
| uniqueId                        | String    | Unique identifier for the event                                                     |
| unifiedTargetsAchievedCreatedOn | Long      | Timestamp when unified targets were achieved (null if not applicable)               |

# Sample response

```json Sample response
    [
      {
        "sourceId": 2476935,
        "parentEventLogId": 38731902,
        "periodId": null,
        "returnEventLogId": -1,
        "targetAchievedEventLogId": 468000,
        "targetGroupName": "Test_Behavioural_Event_Target",
        "processingTime": 1748950111000,
        "targetGroupDescription": "Test_Behavioural_Event_Target",
        "eventTypeId": 25,
        "sourceType": "USERTARGET",
        "billId": 468000,
        "customerId": 387970841,
        "eventTime": 1748950110000,
        "targetAchievedEventLogCreatedOn": 1748950111000,
        "targetGroupId": 74503,
        "eventLogId": 38731904,
        "tillId": 50692627,
        "uniqueId": "1ff9d4953610d8aa0924b24676b34c8c86f6502c",
        "unifiedTargetsAchievedCreatedOn": null
      }
    ]
```

# Error code

| Error Code | Description           |
| :--------- | :-------------------- |
| 400        | Bad Request           |
| 404        | Not Found             |
| 500        | Internal Server Error |