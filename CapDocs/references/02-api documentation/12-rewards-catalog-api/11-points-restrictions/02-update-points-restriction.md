---
title: Points - Update points restriction
excerpt: ''
api:
  file: v1.json
  operationId: update-points-restriction
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
The API allows you to update the points restriction the brands can apply to the customer to the number of points they burn/redeem in the rewards catalog.

> 👍 Note
>
> For detailed information about our APIs and for hands-on testing, refer documentation in [API overview](https://docs.capillarytech.com/reference/apioverview) and  step-by-step guide on making your first API call in [Make your first API call](https://docs.capillarytech.com/reference/make-your-first-api-call) .

# Prerequisites

*   Authentication: Basic or OAuth authentication
*   Default access group

# Resource information

|                        |                                                |
| :--------------------- | :--------------------------------------------- |
| URI                    | api\_gateway/rewards/core/v1/brand/constraints |
| HTTP Method            | PUT                                            |
| Pagination             | No                                             |
| Batch support          | No                                             |
| Rate limit information | None                                           |

# API endpoint example

`https://eucrm.cc.capillarytech.com/api_gateway/rewards/core/v1/brand/constraints`

# Request body parameters

| Parameter                   | Data Type | Description                                                                                                                                                                                                                                                                                                                                                                                                           |
| :-------------------------- | :-------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`rewardConstraintId*`**   | Integer   | The unique identifier for the reward constraint, generated when the points restriction is created. This is mandatory for updating the points restriction.                                                                                                                                                                                                                                                             |
| **`kpi*`**                  | String    | The Key Performance Indicator (KPI) on which the restriction is applied. Supported value: `POINTS`.                                                                                                                                                                                                                                                                                                                   |
| **`constraintLevel*`**      | Enum      | The level at which restrictions are defined by the organization and applied. \<br>\<br>Supported values: `CUSTOMER_SEGMENT`, `CUSTOMER_TIER`, `CUSTOMER_LOYALTY_PROGRAM`, `CUSTOMER_REDEMPTION_TYPE`, `CUSTOMER_SUPPL_PROGRAM`, `REWARD`, `CUSTOMER_LABEL`, `CUSTOMER`, `TRANSACTION`.\<br>\<br>Only one combination of `Constraint_Level` and `KPI` is allowed with `DAILY`, `WEEKLY`, or `MONTHLY` `frequencyType`. |
| **`frequencyType*`**        | Enum      | The frequency at which the constraint is applied. Supported values: `DAILY`, `WEEKLY`, `MONTHLY`.                                                                                                                                                                                                                                                                                                                     |
| **`intervalValue*`**        | Integer   | The interval at which the frequency is applied.                                                                                                                                                                                                                                                                                                                                                                       |
| **`constraintLimitValue*`** | Integer   | The limit value for the constraint.                                                                                                                                                                                                                                                                                                                                                                                   |
| **`isActive*`**             | Boolean   | The status of the constraint, indicating whether it is active (`true`) or not (`false`).                                                                                                                                                                                                                                                                                                                              |
| **`redemptionType*`**       | String    | The type of InTouch reward. \<br>\<br>Supported values: `GAMES`, `AUCTION`, `CART_PROMOTION`, `CASH_WALLET`, `VENDOR_ONLY_REWARD`, `VOUCHER`, `CASH_BACK`, `INTOUCH_REWARD`, `PHYSICAL_REWARD`, `CHARITY`, `MILES`, `GIFT_CARD`, `SWEEPSTAKES`, `VENDOR_INTOUCH_REWARD`, `CARD_DISC`.                                                                                                                                 |

<br />

```json Org level constraint
[
    {   
        "kpi" :"POINTS",
        "constraintLevel" : "CUSTOMER_REDEMPTION_TYPE",
        "frequencyType" : "MONTHLY",
        "intervalValue" : 1,
        "constraintLimitValue" : 100,
        "isActive" : true,
        "redemptionType": "NULL"
    }
]
```
```json constraintLevel : CUSTOMER
[
    {
        "orgId": 51544,
        "kpi": "POINTS",
        "constraintLevel": "CUSTOMER",
        "frequencyType": "DAILY",
        "constraintLimitValue": 3,
        "isActive": true,
        "intervalValue": 1,
        "redemptionType": "INTOUCH_REWARD"
    }
]
```
```json Multiple Constraints
[
    {   "kpi" :"POINTS",
        "constraintLevel" : "CUSTOMER",
        "frequencyType" : "DAILY",
        "intervalValue" : 1,
        "constraintLimitValue" : 5,
        "isActive" : true,
        "redemptionType": "VOUCHER"
    },
    {   "kpi" :"POINTS",
        "constraintLevel" : "CUSTOMER_REDEMPTION_TYPE",
        "frequencyType" : "WEEKLY",
        "intervalValue" : 1,
        "constraintLimitValue" : 10,
        "isActive" : true,
        "redemptionType": "CHARITY"
    },
    {   "kpi" :"POINTS",
        "constraintLevel" : "CUSTOMER_REDEMPTION_TYPE",
        "frequencyType" : "WEEKLY",
        "intervalValue" : 1,
        "constraintLimitValue" : 10,
        "isActive" : true,
        "redemptionType": "GAMES"
    }

]
```
```json constraintLevel : CUSTOMER_SUPPL_PROGRAM
[
    {
        "orgId": 4000036,
        "kpi": "POINTS",
        "constraintLevel": "CUSTOMER_SUPPL_PROGRAM",
        "frequencyType": "WEEKLY",
        "constraintLimitValue": 10000,
        "supplementaryProgramId":"27001187",
        "isActive": true,
        "intervalValue": 90000
    }
]
```
```json constraintLevel : CUSTOMER_SEGMENT
  [  {
        "orgId": 4000036,
        "kpi": "POINTS",
        "constraintLevel": "CUSTOMER_SEGMENT",
        "frequencyType": "WEEKLY",
        "constraintLimitValue": 3000,
        "segmentId":"6136",
        "partitionId":"2676",
        "isActive": true,
        "intervalValue": 100
    }
]
```
```json constraintLevel : CUSTOMER_LOYALTY_PROGRAM
[
    {   
        "orgId": 4000036,      
        "kpi" :"POINTS",
        "constraintLevel" : "CUSTOMER_LOYALTY_PROGRAM",
        "programId" : 469,
        "frequencyType" : "DAILY",
        "intervalValue" : 1,
        "constraintLimitValue" : 5,
        "isActive" : true
    }
]
```
```json constraintLevel : CUSTOMER_LABEL
[
    {   
        "orgId": 4000036,      
        "kpi" :"POINTS",
        "constraintLevel" : "CUSTOMER_LABEL",
        "label":"Fashion",
        "frequencyType" : "DAILY",
        "intervalValue" : 1,
        "constraintLimitValue" : 5,
        "isActive" : true
    }
]
```
```json constraintLevel : CUSTOMER_TIER
[
    {   "kpi" :"POINTS",
        "constraintLevel" : "CUSTOMER_TIER",
        "tierId" : 1,
        "frequencyType" : "DAILY",
        "intervalValue" : 1,
        "constraintLimitValue" : 5,
        "isActive" : true
    }
]
```

<br />

# Response parameters

| Parameter                  | Data Type | Description                                                                                                                                                                                                                                                                      |
| :------------------------- | :-------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`rewardConstraintId`**   | Integer   | A unique identifier for the reward constraint.                                                                                                                                                                                                                                   |
| **`orgId`**                | Integer   | The identifier for the organization.                                                                                                                                                                                                                                             |
| **`kpi`**                  | String    | The KPI on which the restriction is applied. Supported value: **POINTS**.                                                                                                                                                                                                        |
| **`constraintLevel`**      | String    | The level at which restrictions are defined by the organization and applied. \<br>\<br>Supported values: `CUSTOMER_CONTENT_TYPE`, `CUSTOMER`.\<br>\<br>Only one combination of `Constraint_Level` and `KPI` is allowed with the `DAILY`, `WEEKLY`, or `MONTHLY` `frequencyType`. |
| **`frequencyType`**        | String    | The frequency at which the constraint is applied, e.g., `"DAILY"`.                                                                                                                                                                                                               |
| **`constraintLimitValue`** | Integer   | The limit value for the constraint, set at `15`.                                                                                                                                                                                                                                 |
| **`isActive`**             | Boolean   | The status indicating whether the constraint is active.                                                                                                                                                                                                                          |
| **`intervalValue`**        | Integer   | The interval at which the frequency is applied; here, it's daily (`1`).                                                                                                                                                                                                          |
| **`status.success`**       | Boolean   | Indicates if the status check was successful.                                                                                                                                                                                                                                    |
| **`status.code`**          | Integer   | The status code associated with the constraint check.                                                                                                                                                                                                                            |
| **`redemptionType`**       | String    | The type of redemption managed by this constraint, `"POINTS"`.                                                                                                                                                                                                                   |

<br />

```json Org Level constraint
[
    {
        "rewardConstraintId": 6759,
        "orgId": 50672,
        "kpi": "POINTS",
        "constraintLevel": "CUSTOMER",
        "frequencyType": "DAILY",
        "constraintLimitValue": 8,
        "isActive": false,
        "intervalValue": 3,
        "status": {
            "success": true,
            "code": 0
        }
    }
]
```
```json constraintLevel: CUSTOMER_REDEMPTION_TYPE
[
    {
        "rewardConstraintId": 7010,
        "orgId": 50672,
        "kpi": "POINTS",
        "constraintLevel": "CUSTOMER_REDEMPTION_TYPE",
        "frequencyType": "MONTHLY",
        "constraintLimitValue": 100,
        "isActive": true,
        "status": {
            "success": true,
            "code": 0
        },
        "redemptionType": "NULL"
    }
]
```
```json Multiple constraints
[
    {
        "rewardConstraintId": 6984,
        "orgId": 50672,
        "kpi": "POINTS",
        "constraintLevel": "CUSTOMER_REDEMPTION_TYPE",
        "frequencyType": "WEEKLY",
        "constraintLimitValue": 10,
        "isActive": true,
        "startDayOfTheWeek": "MONDAY",
        "status": {
            "success": true,
            "code": 0
        },
        "redemptionType": "CHARITY"
    },
    {
        "rewardConstraintId": 6985,
        "orgId": 50672,
        "kpi": "POINTS",
        "constraintLevel": "CUSTOMER_REDEMPTION_TYPE",
        "frequencyType": "WEEKLY",
        "constraintLimitValue": 10,
        "isActive": true,
        "startDayOfTheWeek": "MONDAY",
        "status": {
            "success": true,
            "code": 0
        },
        "redemptionType": "GAMES"
    },
    {
        "rewardConstraintId": 4915,
        "orgId": 50672,
        "kpi": "POINTS",
        "constraintLevel": "CUSTOMER",
        "frequencyType": "DAILY",
        "constraintLimitValue": 5,
        "isActive": true,
        "intervalValue": 1,
        "status": {
            "success": true,
            "code": 0,
        },
       "redemptionType": "VOUCHER"
    }
]
```
```json constraintLevel: CUSTOMER_SUPPL_PROGRAM
[
    {
        "rewardConstraintId": 2888,
        "orgId": 4000036,
        "kpi": "POINTS",
        "constraintLevel": "CUSTOMER_SUPPL_PROGRAM",
        "frequencyType": "WEEKLY",
        "constraintLimitValue": 10000,
        "isActive": true,
        "startDayOfTheWeek": "MONDAY",
        "status": {
            "success": true,
            "code": 0
        },
        "supplementaryProgramId": "27001187"
    }
]
```
```json constraintLevel: CUSTOMER_SEGMENT
[
    {
        "rewardConstraintId": 2887,
        "orgId": 4000036,
        "kpi": "POINTS",
        "constraintLevel": "CUSTOMER_SEGMENT",
        "frequencyType": "WEEKLY",
        "constraintLimitValue": 3000,
        "isActive": true,
        "startDayOfTheWeek": "MONDAY",
        "status": {
            "success": true,
            "code": 0
        },
        "segmentId": "6136",
        "partitionId": "2676"
    }
]
```
```json constraintLevel: CUSTOMER_LOYALTY_PROGRAM
[
    {
        "rewardConstraintId": 11664,
        "orgId": 100458,
        "kpi": "POINTS",
        "constraintLevel": "CUSTOMER_LOYALTY_PROGRAM",
        "frequencyType": "DAILY",
        "constraintLimitValue": 5,
        "isActive": true,
        "intervalValue": 1,
        "status": {
            "success": true,
            "code": 0
        },
        "programId": "469"
    }
]
```
```json constraintLevel: CUSTOMER_LABEL
[
    {
        "rewardConstraintId": 11667,
        "orgId": 100458,
        "kpi": "POINTS",
        "constraintLevel": "CUSTOMER_LABEL",
        "frequencyType": "DAILY",
        "constraintLimitValue": 5,
        "isActive": true,
        "intervalValue": 1,
        "status": {
            "success": true,
            "code": 0
        },
        "label": "Fashion"
    }
]
```
```json constraintLevel : CUSTOMER_TIER
[
    {
        "rewardConstraintId": 13059,
        "orgId": 100458,
        "kpi": "POINTS",
        "constraintLevel": "CUSTOMER_TIER",
        "frequencyType": "DAILY",
        "constraintLimitValue": 5,
        "isActive": true,
        "intervalValue": 1,
        "status": {
            "success": true,
            "code": 0
        },
        "tierId": "1"
    }
]
```

# API-specific errors

| Error code | Description                                                                                                                           |
| :--------- | :------------------------------------------------------------------------------------------------------------------------------------ |
| 12014      | Constraint already exist.                                                                                                             |
| 12015      | Constraint does not exist with the passed constraintId, create a new constraint.                                                      |
| 12016      | Cannot pass rewardConstraintId in the create new constraint API.                                                                      |
| 12017      | Pass the rewardConstraintId in the update points constraint AP.                                                                       |
| 12019      | The limit of org level constraint is reached. Please disable existing constraints to add new constraints. **Max org constraints: 50** |
| 12020      | The limit of org level KPIs is reached. Please disable existing KPI constraints to add new constraints. **Max org constraints: 15**   |
| 12022      | Multiple restrictions are passed. Only one combination of constraint level and KPI is allowed.                                        |