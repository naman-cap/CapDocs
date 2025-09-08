---
title: Get points awarded ID
api:
  file: get points awarded id.yaml
  operationId: listPets
hidden: false
---
This API retrieves the `pointsAwardedId` for a customer. It can retrieve data for multiple customers in a single call.

> 🚧 Note
>
> This API is a private API that has been exposed through [Neo](https://docs.capillarytech.com/docs/neo-quick-start) and made public.

## Example request

```curl
curl -L 'https://eu.api.capillarytech.com/x/neo/pointsAwarded/paIds?start_expiry_date=2025-06-30&end_expiry_date=2026-08-31&point_category_id=40022&program_id=3379&entity_id=388034468%2C%20387993857&status=AVAILABLE&org_id=52011' \
-H 'Content-Type: application/json' \
-H 'x-cap-neo-test-variant-id: 7a67e565-ad2a-498a-937b-fac8a63e828c' \
-H 'x-cap-neo-dag-scope: global' \
-H 'Authorization: Basic *************'
```

## Prerequisites

*   [Access to Neo](https://docs.capillarytech.com/docs/access-management-neo)
*   Authentication: Basic authentication details. For more information on authentication, see the [Authentication documentation](https://docs.capillarytech.com/docs/api-client).

## Header information

You can define certain attributes in the API header section.

| Header Name         | Description                              |
| :------------------ | :--------------------------------------- |
| x-cap-neo-dag-scope | Set to a valid scope value (e.g. global) |

## Resource information

| Field              | Value                                                             |
| :----------------- | :---------------------------------------------------------------- |
| Pagination support | No                                                                |
| Batch support      | Yes, provide multiple values for `entity_id` separated by commas. |

## Query parameters

| Field             | Type    | Description                                                                                                                                                                                               | Required |
| :---------------- | :------ | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------- |
| start_expiry_date | string  | Start date for the data range in YYYY-MM-DD. The filter will include all records from the beginning of this day.                                                                                          | Yes      |
| end_expiry_date   | string  | End date for the data range in YYYY-MM-DD. The filter will include all records until the end of this day.                                                                                                 | Yes      |
| point_category_id | integer | Unique identifier for a points category, such as regular points, promised points, trackers, alternate currencies, and external trigger-based points. To retrieve the `point_category_id`, use databricks. | Yes      |
| program_id        | integer | Unique ID of the loyalty program. To retrieve the `programId`, use the [Get Loyalty Programs API](https://docs.capillarytech.com/reference/get-loyalty-programs) .                                        | Yes      |
| entity_id         | integer | Unique ID of the customer or usergroup. You can enter multiple IDs separated by commas.                                                                                                                   | Yes      |
| status            | string  | Status of the points awarded. Possible values: `AVAILABLE`, `REDEEMED`, `EXPIRED`, `CONSUMED`, `RETURNED`, `CONSUMED_BY_CONVERSION`, `INACTIVE`.                                                          | Yes      |
| org_id            | integer | Unique identifier of the organisation. To retrieve the orgId, use the [Get Org Details API](https://docs.capillarytech.com/reference/get-org-details).                                                    | Optional |

## Example response

```json
[
  {
    "redeemed_exclusive_value": 0,
    "returned_exclusive_value": 0,
    "event_log_id": 39032930,
    "id": 39302312,
    "customer_id": 388034468,
    "source_table": "points_awarded",
    "points_exclusive": 600,
    "expired_exclusive_value": 0
  },
  {
    "redeemed_exclusive_value": 0,
    "returned_exclusive_value": 0,
    "event_log_id": 39701027,
    "id": 39322858,
    "customer_id": 388034468,
    "source_table": "points_awarded",
    "points_exclusive": 200,
    "expired_exclusive_value": 0
  },
  {
    "redeemed_exclusive_value": 0,
    "returned_exclusive_value": 0,
    "event_log_id": 39032928,
    "id": 54805668,
    "customer_id": 387993857,
    "source_table": "points_awarded_bill_lineitems",
    "points_exclusive": 10,
    "expired_exclusive_value": 0
  },
  {
    "redeemed_exclusive_value": 0,
    "returned_exclusive_value": 0,
    "event_log_id": 39032928,
    "id": 54805669,
    "customer_id": 387993857,
    "source_table": "points_awarded_bill_lineitems",
    "points_exclusive": 10,
    "expired_exclusive_value": 0
  },
  {
    "redeemed_exclusive_value": 0,
    "returned_exclusive_value": 0,
    "event_log_id": 39032928,
    "id": 54805670,
    "customer_id": 387993857,
    "source_table": "points_awarded_bill_lineitems",
    "points_exclusive": 12,
    "expired_exclusive_value": 0
  },
  {
    "redeemed_exclusive_value": 0,
    "returned_exclusive_value": 0,
    "event_log_id": 39032930,
    "id": 54805673,
    "customer_id": 388034468,
    "source_table": "points_awarded_bill_lineitems",
    "points_exclusive": 10,
    "expired_exclusive_value": 0
  },
  {
    "redeemed_exclusive_value": 0,
    "returned_exclusive_value": 0,
    "event_log_id": 39032930,
    "id": 54805671,
    "customer_id": 388034468,
    "source_table": "points_awarded_bill_lineitems",
    "points_exclusive": 10,
    "expired_exclusive_value": 0
  },
  {
    "redeemed_exclusive_value": 0,
    "returned_exclusive_value": 0,
    "event_log_id": 39032930,
    "id": 54805672,
    "customer_id": 388034468,
    "source_table": "points_awarded_bill_lineitems",
    "points_exclusive": 12,
    "expired_exclusive_value": 0
  }
]
```

## Response parameters

| Parameter                | Type    | Description                                                                    |
| :----------------------- | :------ | :----------------------------------------------------------------------------- |
| redeemed_exclusive_value | integer | Total number of points redeemed by the customer against the `pointsAwardedId`. |
| returned_exclusive_value | integer | Total number of points returned by the customer against the `pointsAwardedId`. |
| event_log_id             | integer | Unique ID that is generated when the event is triggered.                       |
| id                       | integer | Unique identifier for the points awarded event (`pointsAwardedId`)             |
| customer_id              | integer | Unique ID of the customer.                                                     |
| source_table             | string  | Source table from which the data is retrieved.                                 |
| points_exclusive         | integer | Total number of points earned by the customer against the `pointsAwardedId`.   |
| expired_exclusive_value  | integer | Total number of points expired for the customer against the pointsAwardedId.   |