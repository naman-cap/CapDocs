---
title: Get Event Log IDs with Credit or Debit for Points
excerpt: ''
api:
  file: v1.json
  operationId: get-event-log-ids-for-credit-debit
deprecated: false
hidden: true
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
The API retrieves event log IDs that have `CREDIT` or `DEBIT` entries for points from the ledger entries.

> 🚧 Note
>
> This is a private API and is accessible only through [Neo ](https://docs.capillarytech.com/docs/neo-quick-start)dataflows.

# Prerequisites

*   [Access to Neo](https://docs.capillarytech.com/docs/access-management-neo)
*   Basic or OAuth authentication details
*   Access group resource - NA

# Resource information

|                                |                                  |
| :----------------------------- | :------------------------------- |
| URI to be used in Neo dataflow | /das/getLedgerEntriesWithEventId |
| HTTP method                    | GET                              |
| Pagination supported?          | Yes                              |
| Rate limit                     | Based on Neo                     |
| Batch support                  | NA                               |

# Request query parameters

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
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Indicates whether the API should apply a date filter.    </p>
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
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Indicates whether the API should ignore filtering by till ID.    </p>
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

# Response parameters

| Parameter              | Datatype | Description                                                     |
| :--------------------- | :------- | :-------------------------------------------------------------- |
| request\_id            | String   | Unique identifier for the API request                           |
| data                   | Object   | Contains the main response data                                 |
| -records               | Array    | List of records returned in the response                        |
| -- fields              | Object   | Key-value pairs representing attributes of a ledger entry       |
| --- ledgerEntryType    | String   | Type of ledger entry. \*\*Example \*\*: `DEBIT`, `CREDIT`       |
| --- cpsId              | Number   | Unique customer points summary ID                               |
| --- configMetadata     | Null     | Configuration metadata; null if not present                     |
| --- pointsLedgerId     | Number   | Unique identifier of the ledger entry                           |
| --- createdOn          | Number   | Timestamp when the ledger entry was created in milliseconds     |
| --- pointsCategoryName | String   | Name of the points category. **Example**: `Main`                |
| --- eventSubjectId     | Number   | Unique identifier for the event subject                         |
| --- processingTime     | Number   | Timestamp when the event was processed in milliseconds          |
| --- points             | Number   | Number of points credited or debited                            |
| --- categoryType       | String   | Type of the points category. **Example**: `REGULAR_POINTS`      |
| --- eventTypeId        | Number   | Unique identifier for the event type                            |
| --- sourceProgramId    | Number   | Program ID from which the event originated                      |
| --- entityMetadata     | String   | Metadata about the entity                                       |
| --- requestId          | String   | Identifier that links the event to the original request         |
| --- customerId         | Number   | Unique identifier of the customer                               |
| --- eventTime          | Number   | Timestamp of when the event occurred in milliseconds            |
| --- eventName          | String   | Name of the event. **Example**:  `ReturnBill`, `TransactionAdd` |
| --- genericEventId     | Null     | Generic event ID if present; null if not applicable             |
| --- eventLogId         | Number   | Unique identifier of the event log                              |
| --- tillId             | Number   | Identifier for the till                                         |
| --- uniqueId           | String   | Unique ID associated with the ledger record                     |

# Sample response

```json Sample Response
{
    "request_id": "39dbfc61-4e8b-4c5c-a1ee-913c99fb46e7",
    "data": {
        "records": [
            {
                "fields": {
                    "ledgerEntryType": {
                        "string_value": "DEBIT"
                    },
                    "cpsId": {
                        "number_value": 85912160
                    },
                    "configMetadata": {
                        "null_value": "NULL_VALUE"
                    },
                    "pointsLedgerId": {
                        "number_value": 65152554
                    },
                    "createdOn": {
                        "number_value": 1749573240000
                    },
                    "pointsCategoryName": {
                        "string_value": "Main"
                    },
                    "eventSubjectId": {
                        "number_value": 2152317880
                    },
                    "processingTime": {
                        "number_value": 1749105748000
                    },
                    "points": {
                        "number_value": 31
                    },
                    "categoryType": {
                        "string_value": "REGULAR_POINTS"
                    },
                    "eventTypeId": {
                        "number_value": 5
                    },
                    "sourceProgramId": {
                        "number_value": 2809
                    },
                    "entityMetadata": {
                        "string_value": "{\\"pointInTimeSlabs\\": []}"
                    },
                    "requestId": {
                        "string_value": "6ad7d91f9b543d5adf0cd4c90de35d0b"
                    },
                    "customerId": {
                        "number_value": 387457911
                    },
                    "eventTime": {
                        "number_value": 1749105748000
                    },
                    "eventName": {
                        "string_value": "ReturnBill"
                    },
                    "genericEventId": {
                        "null_value": "NULL_VALUE"
                    },
                    "eventLogId": {
                        "number_value": 38943074
                    },
                    "tillId": {
                        "number_value": 50691660
                    },
                    "uniqueId": {
                        "string_value": "fFOIZvZwef"
                    }
                }
            },
            {
                "fields": {
                    "ledgerEntryType": {
                        "string_value": "CREDIT"
                    },
                    "cpsId": {
                        "number_value": 85912160
                    },
                    "configMetadata": {
                        "null_value": "NULL_VALUE"
                    },
                    "pointsLedgerId": {
                        "number_value": 65152551
                    },
                    "createdOn": {
                        "number_value": 1749573203000
                    },
                    "pointsCategoryName": {
                        "string_value": "Main"
                    },
                    "eventSubjectId": {
                        "number_value": 2152317882
                    },
                    "processingTime": {
                        "number_value": 1748958294000
                    },
                    "points": {
                        "number_value": 31
                    },
                    "categoryType": {
                        "string_value": "REGULAR_POINTS"
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
                        "string_value": "2d27cb2119f7ca4a0c7733b6baccd20b"
                    },
                    "customerId": {
                        "number_value": 387457911
                    },
                    "eventTime": {
                        "number_value": 1748958294000
                    },
                    "eventName": {
                        "string_value": "TransactionAdd"
                    },
                    "genericEventId": {
                        "null_value": "NULL_VALUE"
                    },
                    "eventLogId": {
                        "number_value": 38943071
                    },
                    "tillId": {
                        "number_value": 50691660
                    },
                    "uniqueId": {
                        "string_value": "jbASNg5B0x"
                    }
                }
            }
        ]
    }
}
```

# Error codes

| Error Code | Description           |
| :--------- | :-------------------- |
| 400        | Bad Request           |
| 404        | Not Found             |
| 500        | Internal Server Error |