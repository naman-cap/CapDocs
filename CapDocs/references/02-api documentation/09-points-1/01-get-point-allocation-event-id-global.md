---
title: Get Point Allocation Details by Event ID
excerpt: ''
api:
  file: v1.json
  operationId: get-point-allocation-event-id-global
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
The API retrieves information about points allocated to a customer based on the event ID.

> 🚧 Note
>
> This API is a private API that has been exposed through [Neo ](https://docs.capillarytech.com/docs/neo-quick-start)and made public.

## Prerequisites

*   [Access to Neo](https://docs.capillarytech.com/docs/access-management-neo)
*   Basic or OAuth authentication details
*   Access group resource - NA
*   Header `x-cap-neo-dag-scope` set to a valid scope value (e.g. `global`)

## Resource information

|                       |                               |
| :-------------------- | :---------------------------- |
| URI                   | /x/neo/pointsAllocation/event |
| HTTP method           | GET                           |
| Pagination supported? | Yes                           |
| Rate limit            | Based on Neo                  |
| Batch support         | NA                            |

## API endpoint example

```json
https://nightly.api.capillarytech.com/x/neo/pointsAllocation/event?entity_id=hfjWDK0dek&customer_id=374819205&event_type_id=15
```

## Request query parameters

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
  <td style="border: 1px solid #ddd; padding: 8px;"><p>entity_id*</p></td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>String/Integer based on <code>event_type_id</code></p></td>
  <td style="border: 1px solid #ddd; padding: 8px;">
    <p>Specifies the identifier used to fetch event-specific details. This can be one of the following:</p>
    <ul>
      <li>The event ID of the event, such as TransactionAdd or a behavioural event</li>
      <li>The unique ID of the event</li>
      <li>
        <a href="https://docs.capillarytech.com/reference/post-event" target="_blank">
          The server-generated request ID of a behavioural event
        </a>
      </li>
    </ul>
  </td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>customer_id*</p></td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Long</p></td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Unique Customer ID</p></td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>event_type_id*</p></td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Integer</p></td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Unique identifier for the type of event.</p></td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>page</p></td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Integer</p></td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Retrieve details of a specific page. Page count starts from 1.<br><strong>Example</strong>: page=2 retrieves data on page 2.</p></td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>count</p></td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Integer</p></td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Number of results to display per page. The default value is 10. The maximum supported value is 100.</p></td>
</tr>
</tbody>
</table>
`}</HTMLBlock>

## Sample request

```curl Sample request
curl --location 'https://nightly.api.capillarytech.com/x/neo/pointsAllocation/event?entity_id=hfjWDK0dek&customer_id=374819205&event_type_id=15' \
--header 'Content-Type: application/json' \
--header 'x-cap-neo-dag-scope: global' \
--header 'Authorization: Basic MDcxNTJkMjM0Yjcw' \
--header 'Cookie: _cfuvid=aipDF8qJJabNkC6ofNg0_4.3nMtpbVSQI9mVehJNjMw-1749448275226-0.0.1.1-604800000; _cfuvid=5YjVQ2SkBWELRCgtes5wkbXKRpcYNHnhogmQk5roBL4-1750314849268-0.0.1.1-604800000'
```

## Response parameters

| Parameter                  | Data Type | Description                                                                         |
| -------------------------- | --------- | ----------------------------------------------------------------------------------- |
| till\_id                   | Integer   | Identifier of the store/till where the transaction occurred                         |
| point\_category\_id        | Integer   | Unique identifier that indicates the type or category of points awarded or deducted |
| program\_id                | Integer   | ID of the loyalty program                                                           |
| event\_log\_id             | Integer   | ID of the event log that recorded the transaction                                   |
| event\_type\_id            | Integer   | ID indicating the type of event                                                     |
| points\_source\_type\_id   | Integer   | ID of the source type from which points were earned                                 |
| original\_points           | Integer   | Number of points initially awarded                                                  |
| awarded\_date              | Long      | Timestamp when the points were awarded (in milliseconds)                            |
| returned\_exclusive\_value | Integer   | Exclusive value of points returned                                                  |
| points\_source\_id         | Integer   | ID of the source entity awarding the points                                         |
| id                         | Integer   | Unique ID of the point allocation entry                                             |
| cps\_id                    | Integer   | ID of the customer program state                                                    |
| original\_customer\_id     | Integer   | ID of the customer before the merge or update                                       |
| expiry\_strategy\_id       | Integer   | ID of the strategy used to determine point expiry                                   |
| returned\_value            | Integer   | Total value of returned points                                                      |
| redeemed\_exclusive\_value | Integer   | Exclusive value of redeemed points                                                  |
| expiry\_date               | Long      | Expiry timestamp of the awarded points (in milliseconds)                            |
| auto\_update\_time         | Long      | Timestamp of the last auto-update to the entry                                      |
| redeemed\_value            | Integer   | Value of points redeemed                                                            |
| expired\_exclusive\_value  | Integer   | Exclusive value of points that have expired                                         |
| allocation\_strategy\_id   | Integer   | ID of the strategy used to allocate points                                          |
| points\_value              | Integer   | Total value of the points awarded                                                   |
| org\_id                    | Integer   | Organization ID                                                                     |
| expired\_value             | Integer   | Value of points that expired                                                        |
| customer\_id               | Integer   | ID of the customer to whom the points are allocated                                 |
| points\_exclusive          | Integer   | Exclusive points that are available                                                 |
| status                     | String    | Current status of the point entry                                                   |

## Sample response

```json Sample Response
[
    {
        "till_id": 50140377,
        "point_category_id": 17383,
        "program_id": 2282,
        "event_log_id": 10072893,
        "event_type_id": 15,
        "points_source_type_id": 1,
        "original_points": 0,
        "awarded_date": 1648489472000,
        "returned_exclusive_value": 0,
        "points_source_id": 2148434124,
        "id": 31787856,
        "cps_id": 51368957,
        "original_customer_id": 374819205,
        "expiry_strategy_id": 105602,
        "returned_value": 0,
        "redeemed_exclusive_value": 0,
        "expiry_date": 1648578599000,
        "auto_update_time": 1648596913000,
        "redeemed_value": 0,
        "expired_exclusive_value": 50,
        "allocation_strategy_id": 105773,
        "points_value": 0,
        "org_id": 50914,
        "expired_value": 0,
        "customer_id": 374819205,
        "points_exclusive": 50,
        "status": "EXPIRED"
    }
]
```

## Error codes

| Error Code | Description           |
| :--------- | :-------------------- |
| 400        | Bad Request           |
| 404        | Not Found             |
| 500        | Internal Server Error |