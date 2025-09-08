---
title: Get Point Redemption Details for Redemption Events
excerpt: ''
api:
  file: v1.json
  operationId: get-point-redemption-details-for-redemption-events
deprecated: false
hidden: true
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
The API fetches points redemption details for event log IDs related to points redemption events

> 🚧 Note
>
> This is a private API and is accessible only through Neo dataflows.

# Prerequisites

*   Access to Neo
*   Basic or OAuth authentication details
*   Access group resource - NA

# Resource information

|                                |                                       |
| :----------------------------- | :------------------------------------ |
| URI to be used in Neo dataflow | /das/getPointsRedemptionExplodeLedger |
| HTTP method                    | GET                                   |
| Pagination supported?          | Yes                                   |
| Rate limit                     | Based on Neo                          |
| Batch support                  | NA                                    |

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
  <td style="border: 1px solid #ddd; padding: 8px;"><p>entity_id*</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Long</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Unique customer ID of the customer</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>event_log_ids*</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>String</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Unique identifier generated for the event at the time of its creation.</p>
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

| Parameter                   | Datatype | Description                                                     |
| :-------------------------- | :------- | :-------------------------------------------------------------- |
| request\_id                 | String   | Unique identifier for the API request                           |
| data                        | Object   | Contains the main response data                                 |
| -records                    | Array    | List of records returned in the response                        |
| -- fields                   | Object   | Key-value pairs representing attributes of the redemption event |
| --- notes                   | String   | Notes or comments related to the redemption                     |
| --- redemptionType          | String   | Type of redemption (e.g., REDEMPTION)                           |
| --- purpose                 | String   | Purpose of the redemption (may be empty)                        |
| --- redemptionId            | String   | Unique identifier for the redemption                            |
| --- pointsRedeemed          | Number   | Number of points redeemed                                       |
| --- pointsRedemptionTime    | Number   | Timestamp when the points were redeemed (in milliseconds)       |
| --- processingTime          | Number   | Timestamp when the event was processed (in milliseconds)        |
| --- eventTypeId             | Number   | Unique identifier for the event type                            |
| --- billId                  | Number   | Unique identifier for the bill                                  |
| --- customerId              | Number   | Unique identifier of the customer                               |
| --- eventTime               | Number   | Timestamp of when the event occurred (in milliseconds)          |
| --- redemptionTime          | Number   | Timestamp when the redemption was recorded (in milliseconds)    |
| --- externalReferenceNumber | Null     | External reference number, if available                         |
| --- eventLogId              | Number   | Unique identifier of the event log                              |
| --- tillId                  | Number   | Identifier for the till (point-of-sale terminal)                |
| --- billNumber              | String   | Bill number associated with the redemption                      |
| --- uniqueId                | String   | Unique ID associated with the redemption record                 |

# Sample Response

```json Sample Response
{
    "request_id": "c251a627-d470-4849-8bda-1084730c9893",
    "data": {
        "records": [
            {
                "fields": {
                    "notes": {
                        "string_value": "Sample notes"
                    },
                    "redemptionType": {
                        "string_value": "REDEMPTION"
                    },
                    "purpose": {
                        "string_value": ""
                    },
                    "redemptionId": {
                        "string_value": "C2gPJ1"
                    },
                    "pointsRedeemed": {
                        "number_value": 5
                    },
                    "pointsRedemptionTime": {
                        "number_value": 1749066544000
                    },
                    "processingTime": {
                        "number_value": 1748869864000
                    },
                    "eventTypeId": {
                        "number_value": 3
                    },
                    "billId": {
                        "number_value": 387970841
                    },
                    "customerId": {
                        "number_value": 387970841
                    },
                    "eventTime": {
                        "number_value": 1748869864000
                    },
                    "redemptionTime": {
                        "number_value": 1749062944000
                    },
                    "externalReferenceNumber": {
                        "null_value": "NULL_VALUE"
                    },
                    "eventLogId": {
                        "number_value": 38797923
                    },
                    "tillId": {
                        "number_value": 50692627
                    },
                    "billNumber": {
                        "string_value": "wefsadefdfdasfds"
                    },
                    "uniqueId": {
                        "string_value": "qTxqAg2pe9"
                    }
                }
            }
        ]
    }
}
```

<br />

# Error Code

| Error Code | Description           |
| :--------- | :-------------------- |
| 400        | Bad Request           |
| 404        | Not Found             |
| 500        | Internal Server Error |