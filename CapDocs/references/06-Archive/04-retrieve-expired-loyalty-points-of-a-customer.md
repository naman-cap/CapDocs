---
title: Retrieve Points‐Award Records Associated with a Specific Transaction ID
excerpt: ''
api:
  file: v1.json
  operationId: retrieve-pointsaward-records-associated-with-a-specific-transaction-id
deprecated: false
hidden: true
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
This API retrieves details of expired loyalty points for a given customer and year. An expired-point record shows when points expired, the program under which they accrued, and the total expired points.

> 🚧 Note
>
> This API is a private API that has been exposed through [Neo ](https://docs.capillarytech.com/docs/neo-quick-start)and made public.

## Prerequisites

* Basic or OAuth authentication credentials
* Header `x-cap-neo-dag-scope` set to a valid scope value (e.g. `global`)
* `customer_id` (integer)
* `year` (four-digit integer, e.g. `2024`)

## Resource information

|                   |                                                                      |
| :---------------- | :------------------------------------------------------------------- |
| **URL**           | `/x/neo/customer/expiredPoints?customer_id={customerId}&year={year}` |
| **HTTP method**   | `GET`                                                                |
| **Pagination**    | No                                                                   |
| **Rate limit**    | N/A                                                                  |
| **Batch support** | N/A                                                                  |

## API endpoint example

```text
https://dev.api.capillarytech.com/x/neo/customer/expiredPoints?customer_id=11064&year=2024
```

## Request query parameters

| Parameter      | Data Type | Description                                                                  |
| :------------- | :-------- | :--------------------------------------------------------------------------- |
| `customer_id*` | Integer   | Unique identifier of the customer whose expired points you want to retrieve. |
| `year*`        | Integer   | Four-digit year for which to retrieve expired points (e.g. `2024`).          |

\*Mandatory parameters

## Sample Request

```bash
curl --location 'https://dev.api.capillarytech.com/x/neo/customer/expiredPoints?customer_id=11064&year=2024' \
  --header 'Content-Type: application/json' \
  --header 'x-cap-neo-dag-scope: global' \
  --header 'Authorization: Basic ZGV2LmRzLnRpbGwwMjoyMDJjY2MmFjNTkwNzViOTY0YjA3MTUyZDIzNGI3MA==' \
  --header 'Cookie: _cfuvid=Azq8pU.vLFQFz1dokJOcKQlnOdEJB31.pqwBHrepJ14-1747219493263-0.0.1.1-604800000'
```

## Response parameters

| Parameter          | Data Type | Description                                                                                            |
| :----------------- | :-------- | :----------------------------------------------------------------------------------------------------- |
| `pointsExpiryDate` | String    | Date and time when the points expired in `YYYY-MM-DD HH:MM:SS.f` format(e.g. `2024-04-01 05:00:02.0`). |
| `customerId`       | Integer   | The customer’s unique identifier.                                                                      |
| `programId`        | Integer   | Identifier of the loyalty program under which they accrued.                                            |
| `points`           | Integer   | Number of points that expired on the given date.                                                       |

### Sample Response

```json
[
  {
    "pointsExpiryDate": "2024-04-01 05:00:02.0",
    "customerId": 11064,
    "programId": 33,
    "points": 800
  },
  {
    "pointsExpiryDate": "2024-08-01 05:00:02.0",
    "customerId": 11064,
    "programId": 33,
    "points": 100
  }
]
```

## API Error Codes

| Error code | Message      | Description                                           |
| :--------- | :----------- | :---------------------------------------------------- |
| `400`      | Bad Request  | Missing or invalid `customer_id` or `year` value.     |
| `401`      | Unauthorized | Missing or invalid authentication credentials.        |
| `404`      | Not Found    | Customer not found or no expired points for the year. |
| `500`      | Server Error | Unexpected server error.                              |