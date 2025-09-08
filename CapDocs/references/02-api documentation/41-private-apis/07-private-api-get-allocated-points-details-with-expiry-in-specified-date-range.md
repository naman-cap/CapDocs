---
title: Get Allocated Points Details with Expiry in Specified Date Range
deprecated: false
hidden: false
metadata:
  robots: index
---
The API retrieves information about points allocated to customers that will expire within a specified date range.

> 🚧 Note
>
> This is a private API and is accessible only through [Neo](https://docs.capillarytech.com/docs/neo-quick-start#/) dataflows.

# Prerequisites

*   [Access to Neo](https://docs.capillarytech.com/docs/access-management-neo#/)
*   Basic or OAuth authentication details
*   Access group resource - NA

# Resource information

|                                |                                   |
| :----------------------------- | :-------------------------------- |
| URI to be used in Neo dataflow | /das/getPAIdsForProvidedDateRange |
| HTTP method                    | GET                               |
| Pagination supported?          | Yes                               |
| Rate limit                     | Based on Neo                      |
| Batch support                  | NA                                |

# Request query parameters

<Table align={["left","left","left"]}>
  <thead>
    <tr>
      <th>
        Parameter (Parameters marked with \* are mandatory)
      </th>

      <th>
        Data Type
      </th>

      <th>
        Description
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        program\_id\*
      </td>

      <td>
        Integer
      </td>

      <td>
        Unique identifier of the loyalty program.
      </td>
    </tr>

    <tr>
      <td>
        point\_category\_id\*
      </td>

      <td>
        Integer
      </td>

      <td>
        Unique identifier for a Point Category in the loyalty points system.
      </td>
    </tr>

    <tr>
      <td>
        expiry\_date\_start\*
      </td>

      <td>
        Date
      </td>

      <td>
        Start date of the expiry range.
        **Format**: YYYY-MM-DD. **Example**: 2025-06-01
      </td>
    </tr>

    <tr>
      <td>
        expiry\_date\_end\*
      </td>

      <td>
        Date
      </td>

      <td>
        End date of the expiry range.
        **Format**: YYYY-MM-DD. **Example**: 2025-06-22
      </td>
    </tr>

    <tr>
      <td>
        entity\_id\*
      </td>

      <td>
        Long
      </td>

      <td>
        Customer ID of the customer for whom the points allocation ID is retrieved.
      </td>
    </tr>

    <tr>
      <td>
        page
      </td>

      <td>
        Integer
      </td>

      <td>
        Retrieve details of a specific page. Page count starts from 1. **Example**: page=2 retrieves data on page 2.
      </td>
    </tr>

    <tr>
      <td>
        count
      </td>

      <td>
        Integer
      </td>

      <td>
        Number of results to display per page. The default value is 10. The maximum supported value is 100.
      </td>
    </tr>
  </tbody>
</Table>

# Response parameters

| Parameter                  | Data Type | Description                                                 |
| -------------------------- | --------- | ----------------------------------------------------------- |
| till\_id                   | Long      | Identifier of the store/till where the transaction occurred |
| point\_category\_id        | Long      | ID of the category under which the points fall              |
| program\_id                | Long      | ID of the loyalty program                                   |
| event\_log\_id             | Long      | ID of the event log that recorded the transaction           |
| event\_type\_id            | Integer   | ID indicating the type of event                             |
| points\_source\_type\_id   | Integer   | ID of the source type from which points were earned         |
| original\_points           | Integer   | Number of points initially awarded                          |
| awarded\_date              | Long      | Timestamp when the points were awarded in milliseconds      |
| returned\_exclusive\_value | Integer   | Exclusive value of points returned                          |
| points\_source\_id         | Long      | ID of the source entity awarding the points                 |
| id                         | Long      | Unique ID of the point allocation entry                     |
| cps\_id                    | Long      | ID of the customer program state                            |
| original\_customer\_id     | Long      | ID of the customer before merge or update                   |
| expiry\_strategy\_id       | Long      | ID of the strategy used to determine point expiry           |
| returned\_value            | Integer   | Total value of returned points                              |
| redeemed\_exclusive\_value | Integer   | Exclusive value of redeemed points                          |
| expiry\_date               | Long      | Expiry timestamp of the awarded points in milliseconds      |
| auto\_update\_time         | Long      | Timestamp of the last auto-update to the entry              |
| redeemed\_value            | Integer   | Value of points redeemed                                    |
| expired\_exclusive\_value  | Integer   | Exclusive value of points that expired                      |
| allocation\_strategy\_id   | Long      | ID of the strategy used to allocate points                  |
| points\_value              | Integer   | Total value of the points awarded                           |
| org\_id                    | Long      | Organization ID                                             |
| expired\_value             | Integer   | Value of points that expired                                |
| customer\_id               | Long      | ID of the customer to whom the points are allocated         |
| points\_exclusive          | Integer   | Exclusive points that are available                         |
| status                     | String    | Current status of the point entry                           |

# Sample response

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

# Error code

| Error Code | Description           |
| :--------- | :-------------------- |
| 400        | Bad Request           |
| 404        | Not Found             |
| 500        | Internal Server Error |