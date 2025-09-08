---
title: Get Points Balance
excerpt: >-
  Retrieves points balance of a customer from a single program or all programs
  of the org. Points are aggregated for each Point Category - Main, delayed
  accrual, and external trigger based.


  **This is a light API**.
api:
  file: v2.json
  operationId: get-points-balance
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

|                       |                                       |
| :-------------------- | :------------------------------------ |
| URI                   | v2/customers/`{user id}`/points/balance |
| HTTP method           | GET                                   |
| Pagination supported? | NA                                    |
| Rate limit            | NA                                    |
| Batch support         | NA                                    |

### Important Note

| Condition                   | `fetchDataForAllPrograms = true`                           | `fetchDataForAllPrograms = false`                                |
| :-------------------------- | :--------------------------------------------------------- | :--------------------------------------------------------------- |
| **programId is passed**     | Returns the customer's points balance across all programs. | Returns the customer's points balance for the specified program. |
| **programId is not passed** | Returns the customer's points balance across all programs. | Returns the customer's points balance for the default program.   |

### Guidelines

- To retrieve a program-specific balance with fetchDataForAllPrograms = false, include programId.
- To default to the primary program with fetchDataForAllPrograms = false, omit programId.

### Response Parameters

| Parameter             | Datatype | Description                                                                                  |
| :-------------------- | :------- | :------------------------------------------------------------------------------------------- |
| entityId              | long     | Unique ID of the customer.                                                                   |
| entityType            | String   | Type of entity queried (always `"CUSTOMER"` for this endpoint).                              |
| totalPoints           | int      | Total promised & current points.                                                             |
| mainPoints            | int      | The points converted from promised points to current points. Points available to redeem now. |
| promisedPoints        | Float    | Points that are promised but not yet available for redemption.                               |
| promisedPointsBreakup | obj      | Break up details of promised points.                                                         |
| delayedAccrualPoints  | Float    | Points delayed due to accrual rules                                                          |

```json
{
    "entityId": 565039505,
    "entityType": "CUSTOMER",
    "totalPoints": 8500.000,
    "mainPoints": 8500.000,
    "promisedPoints": 0.000,
    "promisedPointsBreakup": {
        "delayedAccrualPoints": 0.000,
        "externalTriggerBasedPoints": 0.000
    },
    "warnings": []
}
```

## API specific error code

| Error Code | Description                                            | Reason                                     |
| :--------- | :----------------------------------------------------- | :----------------------------------------- |
| 8015       | Customer not found for the given identifiers           | Invalid or unsupported customerId          |
| 1212       | Entity type passed is not valid                        | Invalid or unsupported entity type         |
| 1632       | group id/externalId/primary userId passed is not valid | Invalid group id/externalid/primary userid |