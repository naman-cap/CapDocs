---
title: Get Custom Field Values for TransactionAdd event
deprecated: false
hidden: false
metadata:
  robots: index
---
The API retrieves custom field values mapped to event log IDs for `TransactionAdd` events from the ledger.

> 🚧 Note
>
> This is a private API and is accessible only through [Neo](https://docs.capillarytech.com/docs/neo-quick-start#/) dataflows.

# Prerequisites

*   [Access to Neo](https://docs.capillarytech.com/docs/access-management-neo#/)
*   Basic or OAuth authentication details
*   Access group resource - NA

# Resource information

|                                |                                     |
| :----------------------------- | :---------------------------------- |
| URI to be used in Neo dataflow | /das/getTransactionAddExplodeLedger |
| HTTP method                    | GET                                 |
| Pagination supported?          | Yes                                 |
| Rate limit                     | Based on Neo                        |
| Batch support                  | NA                                  |

# Request query parameters

| Parameter (Parameters marked with \* are mandatory) | Data Type | Description                                                                                                    |
| :-------------------------------------------------- | :-------- | :------------------------------------------------------------------------------------------------------------- |
| entity\_id\*                                        | Long      | Unique customer ID of the customer                                                                             |
| cf\_names\*                                         | String    | Custom field names for which to retrieve values.                                                               |
| event\_log\_ids\*                                   | String    | Unique identifier generated for the event at the time of its creation.                                         |
| page                                                | Integer   | Retrieve details of a specific page. Page count starts from 1. **Example**: `page=2` retrieves data on page 2. |
| count                                               | Integer   | Number of results to display per page. The default value is 10. The maximum supported value is 100.            |

# Response parameters

| Parameter        | Datatype | Description                                                       |
| :--------------- | :------- | :---------------------------------------------------------------- |
| eventTypeId      | Integer  | Unique identifier for the event type                              |
| billId           | Long     | Unique identifier for the bill                                    |
| customerId       | Long     | Unique identifier of the customer                                 |
| eventTime        | Long     | Timestamp of when the event occurred, in epoch milliseconds.      |
| customFieldId    | Integer  | Unique identifier for the custom field                            |
| eventLogId       | Long     | Unique identifier of the event log                                |
| tillId           | Long     | Identifier for the till                                           |
| customFieldValue | String   | Value of the custom field. **Example**: `CREDIT`                  |
| customFieldName  | String   | Name of the custom field. **Example**:`ledgerentryname`           |
| uniqueId         | String   | Unique ID associated with the record                              |
| processingTime   | Long     | Timestamp of when the event was processed, in epoch milliseconds. |

# Sample response

```json Sample Response
   [
      {
        "eventTypeId": 15,
        "billId": 2152306126,
        "customerId": 387970841,
        "eventTime": 1738481105000,
        "customFieldId": 6212,
        "eventLogId": 38769078,
        "tillId": 50692627,
        "customFieldValue": "CREDIT",
        "customFieldName": "ledgerentryname",
        "uniqueId": "tAfisFBDFB",
        "processingTime": 1738481105000
      }
    ]
```

# Error codes

| Error Code | Description           |
| :--------- | :-------------------- |
| 400        | Bad Request           |
| 404        | Not Found             |
| 500        | Internal Server Error |