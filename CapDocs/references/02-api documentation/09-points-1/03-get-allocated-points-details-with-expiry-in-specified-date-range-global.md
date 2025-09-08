---
title: Get Allocated Points Details with Expiry in Specified Date Range
excerpt: ''
api:
  file: v1.json
  operationId: get-allocated-points-details-with-expiry-in-specified-date-range-global
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
The API retrieves information about points allocated to customers that are set to expire within a specified date range.

> 🚧 Note
> 
> This API is a private API that has been exposed through [Neo ](https://docs.capillarytech.com/docs/neo-quick-start)and made public.

## Prerequisites

-   [Access to Neo](https://docs.capillarytech.com/docs/access-management-neo)
-   Basic or OAuth authentication details
-   Access group resource - NA
-   Header` x-cap-neo-dag-scope` set to a valid scope value (e.g. global)

## Resource information

|                       |                                   |
| :-------------------- | :-------------------------------- |
| URI                   | /x/neo/pointsAllocation/dateRange |
| HTTP method           | GET                               |
| Pagination supported? | Yes                               |
| Rate limit            | Based on Neo                      |
| Batch support         | NA                                |

## API endpoint example

`<https://nightly.api.capillarytech.com/x/neo/pointsAllocation/dateRange?expiry_date_start=2025-06-01&expiry_date_end=2027-06-01&point_category_id=17383&program_id=2282&entity_id=383474113>`

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
  <td style="border: 1px solid #ddd; padding: 8px;"><p>program_id*</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Integer</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Unique identifier of the loyalty program.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>point_category_id*</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Integer</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Unique identifier for a Point Category in the loyalty points system.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>expiry_date_start*</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Date</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Start date of the expiry range.<br>Format: YYYY-MM-DD.<br>Example: 2025-06-01</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>expiry_date_end*</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Date</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>End date of the expiry range.<br>Format: YYYY-MM-DD.<br>Example: 2025-06-30</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>entity_id*</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Long</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Customer ID of the customer for whom the points allocation ID is retrieved.</p>
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


## Sample request

```json Sample request
curl --location 'https://nightly.api.capillarytech.com/x/neo/pointsAllocation/dateRange?expiry_date_start=2025-06-01&expiry_date_end=2027-06-01&point_category_id=17383&program_id=2282&entity_id=383474113' \
--header 'Content-Type: application/json' \
--header 'x-cap-neo-dag-scope: global' \
--header 'Authorization: Basic OTA3NWI5NjRiMDcxNTJkMjM0Yjcw' \
--header 'Cookie: _cfuvid=GGHmRJB3vR2afrZYKGGEonxyUpRW_cRsEMKHeQJEB9U-1749653959367-0.0.1.1-604800000; _cfuvid=3jRFTwrAkfN7jtZ9QZJxunCfld0NnS2Yp5yjoouddLA-1749725683120-0.0.1.1-604800000'
```

## Response parameters

| Parameter                | Data Type | Description                                                 |
| ------------------------ | --------- | ----------------------------------------------------------- |
| till_id                  | Integer   | Identifier of the store/till where the transaction occurred |
| point_category_id        | Integer   | ID of the category under which the points fall              |
| program_id               | Integer   | ID of the loyalty program                                   |
| event_log_id             | Integer   | ID of the event log that recorded the transaction           |
| event_type_id            | Integer   | ID indicating the type of event                             |
| points_source_type_id    | Integer   | ID of the source type from which points were earned         |
| original_points          | Integer   | Number of points initially awarded                          |
| awarded_date             | Long      | Timestamp when the points were awarded (in milliseconds)    |
| returned_exclusive_value | Integer   | Exclusive value of points returned                          |
| points_source_id         | Integer   | ID of the source entity awarding the points                 |
| id                       | Integer   | Unique ID of the point allocation entry                     |
| cps_id                   | Integer   | ID of the customer program state                            |
| original_customer_id     | Integer   | ID of the customer before merge or update                   |
| expiry_strategy_id       | Integer   | ID of the strategy used to determine point expiry           |
| returned_value           | Integer   | Total value of returned points                              |
| redeemed_exclusive_value | Integer   | Exclusive value of redeemed points                          |
| expiry_date              | Long      | Expiry timestamp of the awarded points (in milliseconds)    |
| auto_update_time         | Long      | Timestamp of the last auto-update to the entry              |
| redeemed_value           | Integer   | Value of points redeemed                                    |
| expired_exclusive_value  | Integer   | Exclusive value of points that expired                      |
| allocation_strategy_id   | Integer   | ID of the strategy used to allocate points                  |
| points_value             | Integer   | Total value of the points awarded                           |
| org_id                   | Integer   | Organization ID                                             |
| expired_value            | Integer   | Value of points that expired                                |
| customer_id              | Integer   | ID of the customer to whom the points are allocated         |
| points_exclusive         | Integer   | Exclusive points that are available                         |
| status                   | String    | Current status of the point entry                           |

## Sample response

```json Sample Response
[
    {
        "till_id": 50140377,
        "point_category_id": 17383,
        "program_id": 2282,
        "event_log_id": 33822621,
        "event_type_id": 15,
        "points_source_type_id": 1,
        "original_points": 0,
        "awarded_date": 1735309787000,
        "returned_exclusive_value": 50,
        "points_source_id": 2151585684,
        "id": 38855229,
        "cps_id": 80537188,
        "original_customer_id": 383474113,
        "expiry_strategy_id": 105462,
        "returned_value": 0,
        "redeemed_exclusive_value": 0,
        "expiry_date": 1766687399000,
        "auto_update_time": 1735309788000,
        "redeemed_value": 0,
        "expired_exclusive_value": 0,
        "allocation_strategy_id": 105594,
        "points_value": 0,
        "org_id": 50914,
        "expired_value": 0,
        "customer_id": 383474113,
        "points_exclusive": 100,
        "status": "AVAILABLE"
    }
]
```

## Error Codes

| Error Code | Description           |
| :--------- | :-------------------- |
| 400        | Bad Request           |
| 404        | Not Found             |
| 500        | Internal Server Error |