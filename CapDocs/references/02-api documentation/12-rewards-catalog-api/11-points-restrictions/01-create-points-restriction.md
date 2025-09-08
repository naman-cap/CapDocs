---
title: Points Restrictions - Create points restriction
excerpt: ''
api:
  file: v1.json
  operationId: create-points-restriction
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
This API allows the brand to restrict the customer to the number of points they burn/redeem in the rewards catalog.

This helps brands control the customer’s activity on the rewards catalog and instead use these points while making transactions, eventually bringing more business to the brands.

For example: A brand wants to limit the number of points that a customer can redeem in the rewards catalog to 100 points in a week to purchase Intouch rewards. Using the points restriction API, the brand can limit the number of points redeemed by the customer.

> 👍 Note
>
> For detailed information about our APIs and for hands-on testing, refer documentation in [API overview](https://docs.capillarytech.com/reference/apioverview) and  step-by-step guide on making your first API call in [Make your first API call](https://docs.capillarytech.com/reference/make-your-first-api-call) .
>
> * An org can have a limit of 50 restrictions that can be created.
> * For specific KPI, you can set a  maximum of 15 active restrictions.

# Prerequisites

*   Authentication: Basic or OAuth authentication
*   Default access group

# Resource information

|                        |                                                |
| :--------------------- | :--------------------------------------------- |
| URI                    | api\_gateway/rewards/core/v1/brand/constraints |
| HTTP Method            | POST                                           |
| Pagination             | No                                             |
| Batch support          | No                                             |
| Rate limit information | None                                           |

# API endpoint example

`https://eucrm.cc.capillarytech.com/api_gateway/rewards/core/v1/brand/constraints`

# Request body parameters

| Parameter                   | Data Type | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| :-------------------------- | :-------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`kpi*`**                  | String    | The Key Performance Indicator (KPI) on which the restriction is applied. Supported value: `POINTS`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| **`constraintLevel*`**      | Enum      | The level at which restrictions are defined by the organization and applied. \<br>\<br>Supported values:\<br>- `CUSTOMER_SEGMENT`: Apply restrictions on a customer segment by passing `segmentId` and `partitionId`. (Note: These IDs are not currently available in the Insights+ UI; you'll need to create a Jira ticket to obtain them.)\<br>- `CUSTOMER_TIER`: Apply restrictions based on customer tier by passing the `TierID`.\<br>- `CUSTOMER_LOYALTY_PROGRAM`: Apply restrictions to a specific loyalty program by passing the `ProgramID`.\<br>- `CUSTOMER_REDEMPTION_TYPE`: Apply restrictions to redeemable vouchers by passing the `redemptionType`.\<br>- `CUSTOMER_SUPPL_PROGRAM`: Apply restrictions to a supplementary program by passing the `supplementaryProgramId`.\<br>- `CUSTOMER_LABEL`: Apply restrictions based on a customer `Label`.\<br>- `CUSTOMER`: Use `CUSTOMER` to apply a restriction at the individual customer level.\<br>\<br>Only one combination of `Constraint_Level` and `KPI` is allowed with `DAILY`, `WEEKLY`, or `MONTHLY` `frequencyType`. |
| **`frequencyType*`**        | Enum      | The frequency at which the constraint is applied. Supported values: `DAILY`, `WEEKLY`, `MONTHLY`. Points redemption is only applicable to fixed window restrictions.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| **`intervalValue*`**        | Integer   | The interval at which the frequency is applied.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| **`constraintLimitValue*`** | Integer   | The limit value for the constraint.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| **`isActive*`**             | Boolean   | The status of the constraint, indicating whether it's active (`true`) or not (`false`).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| **`redemptionType*`**       | String    | The type of InTouch reward. Supported values: `GAMES`, `AUCTION`, `CART_PROMOTION`, `CASH_WALLET`, `VENDOR_ONLY_REWARD`, `VOUCHER`, `CASH_BACK`, `INTOUCH_REWARD`, `PHYSICAL_REWARD`, `CHARITY`, `MILES`, `GIFT_CARD`, `SWEEPSTAKES`, `VENDOR_INTOUCH_REWARD`, `CARD_DISC`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |

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
```json Org level points constraint
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
```json Org level points constraint- Content type
[
    {
        "orgId": 51544,
        "kpi": "POINTS",
        "constraintLevel": "CUSTOMER_REDEMPTION_TYPE",
        "frequencyType": "DAILY",
        "constraintLimitValue": 3,
        "isActive": true,
        "intervalValue": 1,
        "redemptionType": "INTOUCH_REWARD"
    }
]
```
```json Multiple points constraint
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
```json Creation of points constraint that already exists
[
    {   "kpi" :"POINTS",
        "constraintLevel" : "CUSTOMER",
        "frequencyType" : "DAILY",
        "intervalValue" : 1,
        "constraintLimitValue" : 5,
        "isActive" : true
    },
    {   "kpi" :"POINTS",
        "constraintLevel" : "CUSTOMER_REDEMPTION_TYPE",
        "frequencyType" : "WEEKLY",
        "intervalValue" : 1,
        "constraintLimitValue" : 10,
        "isActive" : true,
        "redemptionType": "MILES"
    }

]

```
```json Points restriction on supplementary program
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
```json Points restriction on customer segments
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
```json Points Restriction on Customer Loyalty Program
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
```json Points Restriction on Customer Label
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
```json Points Restriction on Customer Tier
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

# Response parameters

| Parameter                  | Data Type | Description                                                                                                                                                                                                                 |
| :------------------------- | :-------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`rewardConstraintId`**   | Integer   | A unique identifier for the reward constraint.                                                                                                                                                                              |
| **`orgId`**                | Integer   | A unique identifier for the organization.                                                                                                                                                                                   |
| **`kpi`**                  | String    | The Key Performance Indicator (KPI) on which the restriction is applied. Supported value: `POINTS`.                                                                                                                         |
| **`constraintLevel`**      | String    | The level at which restrictions are defined by the organization and applied. Only one combination of `Constraint_Level` and `KPI` is allowed with `DAILY`, `WEEKLY`, or `MONTHLY` frequency types.                          |
| **`frequencyType`**        | String    | The frequency at which the constraint is applied, e.g., `"DAILY"`.                                                                                                                                                          |
| **`constraintLimitValue`** | Integer   | The limit value for the constraint.                                                                                                                                                                                         |
| **`isActive`**             | Boolean   | The status indicating whether the constraint is active.                                                                                                                                                                     |
| **`intervalValue`**        | Integer   | The interval at which the frequency is applied.                                                                                                                                                                             |
| **`status.success`**       | Boolean   | Indicates if the status check was successful.                                                                                                                                                                               |
| **`status.code`**          | Integer   | The status code associated with the constraint check.                                                                                                                                                                       |
| **`redemptionType`**       | String    | The type of InTouch reward. Supported values: `INTOUCH_REWARD`, `VENDOR_INTOUCH_REWARD`, `VENDOR_ONLY_REWARD`, `CART_PROMOTION`, `MILES`, `VOUCHER`, `POINTS`, `CHARITY`, `CASH_BACK`, `CASH_WALLET`, `CARD_DISC`, `GAMES`. |

<br />

```json Response-Org level constraints
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
```json Response- Multiple content type
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
```json Response- Customer points constraint
[
    {
        "rewardConstraintId": 4226,
        "orgId": 100606,
        "kpi": "POINTS",
        "constraintLevel": "CUSTOMER",
        "frequencyType": "DAILY",
        "constraintLimitValue": 3,
        "isActive": true,
        "intervalValue": 1,
        "status": {
            "success": true,
            "code": 0
        }
    }
]
```
```json Response-Content type
[
    {
        "rewardConstraintId": 4227,
        "orgId": 100606,
        "kpi": "POINTS",
        "constraintLevel": "CUSTOMER_REDEMPTION_TYPE",
        "frequencyType": "DAILY",
        "constraintLimitValue": 3,
        "isActive": true,
        "intervalValue": 1,
        "status": {
            "success": true,
            "code": 0
        },
        "redemptionType": "INTOUCH_REWARD"
    }
]
```
```json Response- Creation of points constraint that already exists
[
    {
        "rewardConstraintId": 4228,
        "orgId": 100606,
        "kpi": "POINTS",
        "constraintLevel": "CUSTOMER_REDEMPTION_TYPE",
        "frequencyType": "WEEKLY",
        "constraintLimitValue": 10,
        "isActive": true,
        "startDayOfTheWeek": "TUESDAY",
        "status": {
            "success": true,
            "code": 0
        },
        "redemptionType": "MILES"
    },
    {
        "rewardConstraintId": 4226,
        "orgId": 100606,
        "kpi": "POINTS",
        "constraintLevel": "CUSTOMER",
        "frequencyType": "DAILY",
        "constraintLimitValue": 5,
        "isActive": true,
        "intervalValue": 1,
        "status": {
            "success": false,
            "code": 12014,
            "message": "Constraint already exist, use update constraints api"
        }
    }
]
```
```json Response - Creation of points restriction on supplementary program
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
```json Response- Creation of points restriction on customer segments
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
```json Response- Creation of points restriction on customer loyalty program
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
```json Response- Creation of points restriction on customer label
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
```json Response- Creation of points restriction on customer tier
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

| Error code | Description                                                                                               |
| :--------- | :-------------------------------------------------------------------------------------------------------- |
| 12014      | Constraint already exist. Use the update points restriction API to update the existing constraint.        |
| 12015      | Constraint does not exist with the passed constraintId, create a new constraint.                          |
| 12016      | Cannot pass rewardConstraintId in the create new constraint API.                                          |
| 12017      | Pass the rewardConstraintId in the update points constraint API.                                          |
| 12018      | Please make sure isActive flag is true for all the entries in the request body in create constraint call. |
| 12020      | The limit of org level KPIs is reached. Please disable existing KPI constraints to add new constraints.   |
| 12022      | Multiple restrictions are passed. Only one combination of constraint level and KPI is allowed.            |