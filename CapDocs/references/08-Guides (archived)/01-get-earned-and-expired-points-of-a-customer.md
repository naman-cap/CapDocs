---
title: Get Customer’s Earned and Expired Points by Year
excerpt: ''
api:
  file: v1.json
  operationId: get-earned-and-expired-points-of-a-customer
deprecated: false
hidden: true
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
The API retrieves a year-wise summary of points earned and expired for a customer enrolled in a specified program.

> 🚧 Note
> 
> This API is a private API that has been exposed through [Neo](https://docs.capillarytech.com/docs/neo-quick-start) and made public.

## Prerequisites

-   [Access to Neo](https://docs.capillarytech.com/docs/access-management-neo#enabling-neo-extension-access--user-roles)
-   Authentication - Basic or OAuth authentication details
-   Access group resource - NA
-   Header `x-cap-neo-dag-scope` set to a valid scope value (e.g. global)

## Resource information

|                       |                               |
| :-------------------- | :---------------------------- |
| URI                   | /x/neo/customer/expiredPoints |
| HTTP method           | GET                           |
| Pagination supported? | Yes                           |
| Rate limit            | Based on Neo                  |
| Batch support         | NA                            |

## API endpoint example

[https://nightly.api.capillarytech.com/x/neo/customer/expiredPoints?points_category_id=17383&program_id=2282&entity_id=387910941](https://nightly.api.capillarytech.com/x/neo/customer/expiredPoints?points_category_id=17383&program_id=2282&entity_id=387910941)

## Request query parameters

| **Parameter**(Parameters marked with \* are mandatory) | **Data Type** | **Description**                                                                                              |
| :----------------------------------------------------- | :------------ | :----------------------------------------------------------------------------------------------------------- |
| point_category_id\*                                    | Integer       | Identifier of the category under which these points were awarded.                                            |
| program_id\*                                           | Integer       | Unique identifier of the loyalty program.                                                                    |
| entity_id\*                                            | Long          | Unique customer ID of the customer whose details are retrieved.                                              |
| page                                                   | Integer       | Retrieve details of a specific page. Page count starts from 1. **Example**: page=2 retrieves data on page 2. |
| count                                                  | Integer       | Number of results to display per page. The default value is 10. The maximum supported value is 100.          |

## Sample request

```json Sample Request
curl --location 'https://nightly.api.capillarytech.com/x/neo/customer/expiredPoints?points_category_id=17383&program_id=2282&entity_id=387910941' \
--header 'Content-Type: application/json' \
--header 'x-cap-neo-dag-scope: global' \
--header 'x-cap-neo-test-variant-id: 5e60b81c-5135-4f03-924b-2734298e6f67' \
--header 'Authorization: Basic DcxNTJkMjM0Yjcw' \
--header 'Cookie: _cfuvid=aipDF8qJJabNkC6ofNg0_4.3nMtpbVSQI9mVehJNjMw-1749448275226-0.0.1.1-604800000; _cfuvid=qpDs3gDC0.7PtPq4E3RYbf1DVmvhycQHjI2LLTVs.4s-1749724459899-0.0.1.1-604800000'
```

## Response parameters

| Parameter  | Data Type  | Description                                                     |
| ---------- | ---------- | --------------------------------------------------------------- |
| customerId | Long       | Unique customer ID of the customer whose details are retrieved. |
| year       | DateTime   | Year from which the point details are retrieved.                |
| earned     | BigDecimal | Points earned during the specified year                         |
| expired    | BigDecimal | Points expired during the specified year                        |

## Sample response

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

## Error Codes

| Error Code | Description           |
| :--------- | :-------------------- |
| 400        | Bad Request           |
| 404        | Not Found             |
| 500        | Internal Server Error |