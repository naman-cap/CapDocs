---
title: Get Customer’s Earned and Expired Points by Year
deprecated: false
hidden: false
metadata:
  robots: index
---
The API retrieves a year-wise summary of points earned and expired for a customer enrolled in a specified program.

> 🚧 Note
>
> This is a private API and is accessible only through [Neo](https://docs.capillarytech.com/docs/neo-quick-start) dataflows.

# Prerequisites

*   [Access to Neo](https://docs.capillarytech.com/docs/access-management-neo#enabling-neo-extension-access--user-roles)
*   Authentication - Basic or OAuth authentication details
*   Access group resource - NA

# Resource information

|                                |                                          |
| :----------------------------- | :--------------------------------------- |
| URI to be used in Neo dataflow | /das/getExpiredPointsByCustomerIdAndYear |
| HTTP method                    | GET                                      |
| Pagination supported?          | Yes                                      |
| Rate limit                     | Based on Neo                             |
| Batch support                  | NA                                       |

# Request query parameters

| **Parameter**(Parameters marked with \* are mandatory) | **Data Type** | **Description**                                                                                              |
| :----------------------------------------------------- | :------------ | :----------------------------------------------------------------------------------------------------------- |
| point\_category\_id\*                                  | Integer       | Identifier of the category under which the points were awarded.                                              |
| program\_id\*                                          | Integer       | Unique identifier of the loyalty program.                                                                    |
| entity\_id\*                                           | Long          | Unique customer ID of the customer whose details are retrieved.                                              |
| page                                                   | Integer       | Retrieve details of a specific page. Page count starts from 1. **Example**: page=2 retrieves data on page 2. |
| count                                                  | Integer       | Number of results to display per page. The default value is 10. The maximum supported value is 100.          |

# Response parameters

| Parameter  | Data Type  | Description                                                     |
| ---------- | ---------- | --------------------------------------------------------------- |
| customerId | Long       | Unique customer ID of the customer whose details are retrieved. |
| year       | DateTime   | Year from which the point details are retrieved.                |
| earned     | BigDecimal | Points earned during the specified year                         |
| expired    | BigDecimal | Points expired during the specified year                        |

# Sample response

```json Sample Response
[
    {
        "customerId": 387910941,
        "year": 2025,
        "earned": 160,
        "expired": 0
    }
]
```

# Error codes

| Error Code | Description           |
| :--------- | :-------------------- |
| 400        | Bad Request           |
| 404        | Not Found             |
| 500        | Internal Server Error |