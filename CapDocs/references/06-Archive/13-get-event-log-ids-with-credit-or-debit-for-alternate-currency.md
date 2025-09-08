---
title: Get Event Log IDs with Credit or Debit for Alternate Currency
excerpt: ''
api:
  file: v1.json
  operationId: get-event-log-ids-with-credit-or-debit-for-alternate-currency
deprecated: false
hidden: true
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
The API retrieves event log IDs that have `CREDIT` or `DEBIT` entries for alternate currencies from the ledger entries.

> 🚧 Note
>
> This is a private API and is accessible only through Neo dataflows.

# Prerequisites

*   Access to Neo
*   Basic or OAuth authentication details
*   Access group resource - NA

# Resource information

|                                |                                    |
| :----------------------------- | :--------------------------------- |
| URI to be used in Neo dataflow | /das/getACLedgerEntriesWithEventId |
| HTTP method                    | GET                                |
| Pagination supported?          | Yes                                |
| Rate limit                     | Based on Neo                       |
| Batch support                  | NA                                 |

# Request Query Parameters

<HTMLBlock>{`
<table style="width: 100%; border-collapse: collapse;">
<thead>
<tr>
  <th style="border: 1px solid #ddd; padding: 8px;"><strong>Parameter</strong>(Parameters marked with * are mandatory)</th>
  <th style="border: 1px solid #ddd; padding: 8px;"><strong>Data Type</strong></th>
  <th style="border: 1px solid #ddd; padding: 8px;"><strong>Description</strong></th>
</tr>
</thead>
<tbody>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>ledger_entry_types*</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>String</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Type of entry recorded in a customer&#39;s points ledger.<br><strong>Allowed values</strong>: <code>CREDIT</code>, <code>DEBIT</code></p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>entity_id*</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Long</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Unique customer ID of the customer</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>end_date*</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Date</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Last date to which you want to retrieve the ledger information<br><strong>Format</strong>: YYYY-MM-DD.<br><strong>Example</strong>: 2025-06-22</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>start_date*</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Date</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Start date from which you want to retrieve the ledger information<br><strong>Format</strong>: YYYY-MM-DD.<br><strong>Example</strong>: 2024-01-01</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>alternate_currency_names*</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>String</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Name of the alternate currency for which ledger information is retrieved.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>till_ids*</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Integer</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Till IDs used to filter the results.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>is_filter_not_based_on_date*</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Boolean</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Indicates whether the API should apply a date filter.  </p>
<ul>
<li>If set to 1, the API does not apply any date filter. However, you must still pass dummy values for <code>start_date </code>and <code>end_date</code><strong>Example</strong>: <code>2025-01-01</code></li>
<li>If set to 0, the API filters the results based on the provided date range. In this case, pass the actual <code>start_date </code>and <code>end_date </code>values <strong>Example</strong>: 2024-04-01 to 2025-03-31.</li>
</ul>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>is_till_not_present*</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Boolean</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Indicates whether the API should ignore filtering by till ID.  </p>
<ul>
<li>If set to 1, the API does not apply a till ID filter. In this case, pass till_ids = -1.  - If set to 0, the API filters results based on the specified till IDs. Provide one or more comma-separated values in the till_ids parameter.<br><strong>Example</strong>: 1234323432,8759345333.</li>
</ul>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>page</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Integer</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Retrieve details of a specific page. Page count starts from 1.<br><strong>Example</strong>: page=2 retrieves data on page 2.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>count</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Integer</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Number of results to display per page. The default value is 10. The maximum supported value is 100.</p>
</td>
</tr>
</tbody>
</table>
`}</HTMLBlock>

# Response Parameters

| Parameter                 | Datatype | Description                                                      |
| :------------------------ | :------- | :--------------------------------------------------------------- |
| request\_id               | String   | Unique identifier for the API request                            |
| data                      | Object   | Contains the main response data                                  |
| -records                  | Array    | List of records returned in the response                         |
| -- fields                 | Object   | Key-value pairs representing attributes of a ledger entry        |
| --- ledgerEntryType       | String   | Type of ledger entry. **Example**: `CREDIT`                      |
| --- cpsId                 | Number   | Unique customer points summary ID                                |
| --- configMetadata        | Null     | Configuration metadata; null if not present                      |
| --- pointsLedgerId        | Number   | Unique identifier of the ledger entry                            |
| --- createdOn             | Number   | Timestamp when the ledger entry was created in milliseconds      |
| --- pointsCategoryName    | String   | Name of the points category. **Example**: `Flux_REGULAR`         |
| --- eventSubjectId        | Number   | Unique identifier for the event subject                          |
| --- processingTime        | Number   | Timestamp when the event was processed in milliseconds           |
| --- alternateCurrencyName | String   | Name of the alternate currency used. **Example**: `Flux`         |
| --- points                | Number   | Number of points credited or debited                             |
| --- categoryType          | String   | Type of the points category. **Example**: `ALTERNATE_CURRENCIES` |
| --- eventTypeId           | Number   | Unique identifier for the event type                             |
| --- sourceProgramId       | Number   | Program ID from which the event originated                       |
| --- entityMetadata        | String   | Metadata about the entity                                        |
| --- requestId             | String   | Identifier that links the event to the original request          |
| --- customerId            | Number   | Unique identifier of the customer                                |
| --- eventTime             | Number   | Timestamp of when the event occurred in milliseconds             |
| --- eventName             | String   | Name of the event. **Example**: `TransactionAdd`                 |
| --- genericEventId        | Null     | Generic event ID if present; null if not applicable              |
| --- eventLogId            | Number   | Unique identifier of the event log                               |
| --- tillId                | Number   | Identifier for the till                                          |
| --- uniqueId              | String   | Unique ID associated with the ledger record                      |

# Sample Response

```json Sample Response
{
    "request_id": "1483ca2f-ad6b-43b0-ba00-9bca8125df13",
    "data": {
        "records": [
            {
                "fields": {
                    "ledgerEntryType": {
                        "string_value": "CREDIT"
                    },
                    "cpsId": {
                        "number_value": 85912155
                    },
                    "configMetadata": {
                        "null_value": "NULL_VALUE"
                    },
                    "pointsLedgerId": {
                        "number_value": 64554870
                    },
                    "createdOn": {
                        "number_value": 1744382856000
                    },
                    "pointsCategoryName": {
                        "string_value": "Flux_REGULAR"
                    },
                    "eventSubjectId": {
                        "number_value": 2152201202
                    },
                    "processingTime": {
                        "number_value": 1743107884000
                    },
                    "alternateCurrencyName": {
                        "string_value": "Flux"
                    },
                    "points": {
                        "number_value": 1370.25
                    },
                    "categoryType": {
                        "string_value": "ALTERNATE_CURRENCIES"
                    },
                    "eventTypeId": {
                        "number_value": 15
                    },
                    "sourceProgramId": {
                        "number_value": 2809
                    },
                    "entityMetadata": {
                        "string_value": "{\\"pointInTimeSlabs\\": {\\"programId\\": 2809, \\"isDefaultProgram\\": true, \\"pointInTimeSlabName\\": \\"Diamond\\", \\"pointInTimeSlabNumber\\": 5}}"
                    },
                    "requestId": {
                        "string_value": "e7a4344912bde36e4bd9994eb9d96f76"
                    },
                    "customerId": {
                        "number_value": 387457911
                    },
                    "eventTime": {
                        "number_value": 1743107884000
                    },
                    "eventName": {
                        "string_value": "TransactionAdd"
                    },
                    "genericEventId": {
                        "null_value": "NULL_VALUE"
                    },
                    "eventLogId": {
                        "number_value": 37188433
                    },
                    "tillId": {
                        "number_value": 50691660
                    },
                    "uniqueId": {
                        "string_value": "7eCwyq507M"
                    }
                }
            },
            {
                "fields": {
                    "ledgerEntryType": {
                        "string_value": "CREDIT"
                    },
                    "cpsId": {
                        "number_value": 85912155
                    },
                    "configMetadata": {
                        "null_value": "NULL_VALUE"
                    },
                    "pointsLedgerId": {
                        "number_value": 64554867
                    },
                    "createdOn": {
                        "number_value": 1744382854000
                    },
                    "pointsCategoryName": {
                        "string_value": "Flux_REGULAR"
                    },
                    "eventSubjectId": {
                        "number_value": 2152201200
                    },
                    "processingTime": {
                        "number_value": 1741873476000
                    },
                    "alternateCurrencyName": {
                        "string_value": "Flux"
                    },
                    "points": {
                        "number_value": 300
                    },
                    "categoryType": {
                        "string_value": "ALTERNATE_CURRENCIES"
                    },
                    "eventTypeId": {
                        "number_value": 15
                    },
                    "sourceProgramId": {
                        "number_value": 2809
                    },
                    "entityMetadata": {
                        "string_value": "{\\"pointInTimeSlabs\\": {\\"programId\\": 2809, \\"isDefaultProgram\\": true, \\"pointInTimeSlabName\\": \\"Diamond\\", \\"pointInTimeSlabNumber\\": 5}}"
                    },
                    "requestId": {
                        "string_value": "e7a4344912bde36e4bd9994eb9d96f76"
                    },
                    "customerId": {
                        "number_value": 387457911
                    },
                    "eventTime": {
                        "number_value": 1741873476000
                    },
                    "eventName": {
                        "string_value": "TransactionAdd"
                    },
                    "genericEventId": {
                        "null_value": "NULL_VALUE"
                    },
                    "eventLogId": {
                        "number_value": 37188431
                    },
                    "tillId": {
                        "number_value": 50691660
                    },
                    "uniqueId": {
                        "string_value": "13QwzvQmiM"
                    }
                }
            }
        ]
    }
}
```

<br />

<br />

# Error Code

| Error Code | Description           |
| :--------- | :-------------------- |
| 400        | Bad Request           |
| 404        | Not Found             |
| 500        | Internal Server Error |