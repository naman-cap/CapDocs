---
title: Get Points Conversion Schedule
excerpt: >-
  Retrieves the history of promised points conversion schedules of a customer
  for a single program or across all programs of the org.


  **This is a light API**.
api:
  file: v2.json
  operationId: get-points-conversion-schedule
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
## Resource Information

|                       |                                              |
| :-------------------- | :------------------------------------------- |
| URI                   | v2/customers/{userId}/promisedPointsSchedule |
| HTTP Method           | GET                                          |
| Pagination supported? | NA                                           |
| Rate limit            | NA                                           |
| Batch support         | NA                                           |

### Important Note

| When                    | `fetchDataForAllPrograms` is true                                                | `fetchDataForAllPrograms` is false                                       |
| :---------------------- | :------------------------------------------------------------------------------- | :----------------------------------------------------------------------- |
| programId is passed     | You will still see promised points schedules of the customer across all programs | You will still see promised points schedules of that particular program. |
| programId is not passed | You will still see promised points schedules of the customer across all programs | You will still see promised points schedules of the default program.     |

### Response parameters

| **Response Parameter**                    | **Description**                                                          |
| ----------------------------------------- | ------------------------------------------------------------------------ |
| entityId                                  | The unique identifier for the entity.                                    |
| entityType                                | The type of entity (in this case, "CUSTOMER").                           |
| promisedPointsScheduleList                | A list of schedules detailing points that are promised.                  |
| promisedPointsScheduleList.points         | The number of points in the schedule.                                    |
| promisedPointsScheduleList.redeemableFrom | The date from which the points become redeemable.                        |
| promisedPointsScheduleList.programId      | The identifier for the program associated with the points.               |
| promisedPointsScheduleList.pointsType     | The type of points (e.g., "line_item_promotions", "bill_regular", etc.). |
| triggerBasedPointsList                    | A list of points based on specific triggers                              |
| warnings                                  | A list of warnings related to the entity                                 |

### Example

**when fetchDataForAllPrograms=false and fetchEarliestExpiryOnly=false**

`http://{{URL}}/v2/customers/lookup/promisedPointsSchedule?programId=2199&entityType=CUSTOMER&fetchDataForAllPrograms=false&identifierName=mobile&identifierValue=917752198768&source=INSTORE`

```json
{
    "entityId": 374844123,
    "entityType": "CUSTOMER",
    "promisedPointsScheduleList": [
        {
            "points": 390.000,
            "redeemableFrom": "2022-04-10",
            "programId": 2199,
            "pointsType": "line_item_promotions"
        },
        {
            "points": 130.000,
            "redeemableFrom": "2022-04-10",
            "programId": 2199,
            "pointsType": "bill_regular"
        },
        {
            "points": 130.000,
            "redeemableFrom": "2022-04-10",
            "programId": 2199,
            "pointsType": "bill_promotions"
        },
        {
            "points": 390.000,
            "redeemableFrom": "2022-04-10",
            "programId": 2199,
            "pointsType": "line_item_regular"
        }
    ],
    "triggerBasedPointsList": [],
    "warnings": []
}

```

**when fetchDataForAllPrograms=true**

`http://{{URL}}/v2/customers/lookup/promisedPointsSchedule?programId=1933&startDate=2022-04-01&endDate=2122-04-09&entityType=CUSTOMER&fetchDataForAllPrograms=true&identifierName=mobile&identifierValue=917752198768&source=INSTORE`

```json
{
    "entityId": 374844123,
    "entityType": "CUSTOMER",
    "promisedPointsScheduleList": [
        {
            "points": 390.000,
            "redeemableFrom": "2022-04-10",
            "programId": 2199,
            "pointsType": "line_item_promotions"
        },
        {
            "points": 300.00,
            "redeemableFrom": "2022-04-08",
            "programId": 1933,
            "pointsType": "line_item_promotions"
        },
        {
            "points": 130.000,
            "redeemableFrom": "2022-04-10",
            "programId": 2199,
            "pointsType": "bill_regular"
        },
        {
            "points": 130.000,
            "redeemableFrom": "2022-04-10",
            "programId": 2199,
            "pointsType": "bill_promotions"
        },
        {
            "points": 180.000,
            "redeemableFrom": "2022-04-09",
            "programId": 2199,
            "pointsType": "line_item_promotions"
        },
        {
            "points": 100.00,
            "redeemableFrom": "2022-04-08",
            "programId": 1933,
            "pointsType": "bill_regular"
        },
        {
            "points": 60.000,
            "redeemableFrom": "2022-04-09",
            "programId": 2199,
            "pointsType": "bill_regular"
        },
        {
            "points": 180.000,
            "redeemableFrom": "2022-04-09",
            "programId": 2199,
            "pointsType": "line_item_regular"
        },
        {
            "points": 390.000,
            "redeemableFrom": "2022-04-10",
            "programId": 2199,
            "pointsType": "line_item_regular"
        },
        {
            "points": 60.000,
            "redeemableFrom": "2022-04-09",
            "programId": 2199,
            "pointsType": "bill_promotions"
        },
        {
            "points": 100.00,
            "redeemableFrom": "2022-04-08",
            "programId": 1933,
            "pointsType": "bill_promotions"
        }
    ],
    "triggerBasedPointsList": [],
    "warnings": []
}
```

**Response for trigger-based points**

```json
{
    "entityId": 342249069,
    "entityType": "CUSTOMER",
    "promisedPointsScheduleList": [],
    "triggerBasedPointsList": [
        {
            "points": 300.000,
            "programId": 890,
            "pointsType": "line_item_promotions"
        }
    ],
    "warnings": []
}
```

## API specific error code

| Error Code | Description                                            | Reason                                     |
| :--------- | :----------------------------------------------------- | :----------------------------------------- |
| 8015       | Customer not found for the given identifiers           | customer id is invalid or unsupported      |
| 885        | Invalid program id passed                              | program Id is invalid or unsupported       |
| 1632       | group id/externalId/primary userId passed is not valid | Invalid group id/externalid/primary userid |