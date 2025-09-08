---
title: Get Custom Field Values for TransactionAdd event
excerpt: ''
api:
  file: v1.json
  operationId: get-custom-field-for-transaction-add-event
deprecated: false
hidden: true
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
The API retrieves custom field values mapped to event log IDs for `TransactionAdd` events from the ledger.

> 🚧 Note
>
> This is a private API and is accessible only through Neo dataflows.

# Prerequisites

*   Access to Neo
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

# Request Query Parameters

| Parameter (Parameters marked with \* are mandatory) | Data Type | Description                                                                                                    |
| :-------------------------------------------------- | :-------- | :------------------------------------------------------------------------------------------------------------- |
| entity\_id\*                                        | Long      | Unique customer ID of the customer                                                                             |
| cf\_names\*                                         | String    | Custom field names for which to retrieve values.                                                               |
| event\_log\_ids\*                                   | String    | Unique identifier generated for the event at the time of its creation.                                         |
| page                                                | Integer   | Retrieve details of a specific page. Page count starts from 1. **Example**: `page=2` retrieves data on page 2. |
| count                                               | Integer   | Number of results to display per page. The default value is 10. The maximum supported value is 100.            |

# Response Parameters

| Parameter            | Datatype | Description                                               |
| :------------------- | :------- | :-------------------------------------------------------- |
| request\_id          | String   | Unique identifier for the API request                     |
| data                 | Object   | Contains the main response data                           |
| -records             | Array    | List of records returned in the response                  |
| -- fields            | Object   | Key-value pairs representing attributes of the event      |
| --- eventTypeId      | Number   | Unique identifier for the event type                      |
| --- billId           | Number   | Unique identifier for the bill                            |
| --- customerId       | Number   | Unique identifier of the customer                         |
| --- eventTime        | Number   | Timestamp of when the event occurred in milliseconds      |
| --- customFieldId    | Number   | Unique identifier for the custom field                    |
| --- eventLogId       | Number   | Unique identifier of the event log                        |
| --- tillId           | Number   | Identifier for the till                                   |
| --- customFieldValue | String   | Value of the custom field. **Example**: `CREDIT`          |
| --- customFieldName  | String   | Name of the custom field. **Example**:`ledgerentryname`   |
| --- uniqueId         | String   | Unique ID associated with the record                      |
| --- processingTime   | Number   | Timestamp of when the event was processed in milliseconds |

# Sample Response

```json Sample Response
{
    "request_id": "1bbd0bb7-de10-4fa4-8ba2-8b44aee40f9b",
    "data": {
        "records": [
            {
                "fields": {
                    "eventTypeId": {
                        "number_value": 15
                    },
                    "billId": {
                        "number_value": 2152306126
                    },
                    "customerId": {
                        "number_value": 387970841
                    },
                    "eventTime": {
                        "number_value": 1738481105000
                    },
                    "customFieldId": {
                        "number_value": 6212
                    },
                    "eventLogId": {
                        "number_value": 38769078
                    },
                    "tillId": {
                        "number_value": 50692627
                    },
                    "customFieldValue": {
                        "string_value": "CREDIT"
                    },
                    "customFieldName": {
                        "string_value": "ledgerentryname"
                    },
                    "uniqueId": {
                        "string_value": "tAfisFBDFB"
                    },
                    "processingTime": {
                        "number_value": 1738481105000
                    }
                }
            }
        ]
    }
}
```

# Error Codes

| Error Code | Description           |
| :--------- | :-------------------- |
| 400        | Bad Request           |
| 404        | Not Found             |
| 500        | Internal Server Error |