---
title: Points - Get points constraints
excerpt: ''
api:
  file: v1.json
  operationId: get-points-constraints
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
This API allows the brand to retrieve the details of the points restrictions set for the customer.

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
| HTTP Method            | GET                                            |
| Pagination             | No                                             |
| Batch support          | No                                             |
| Rate limit information | None                                           |

# API endpoint example

`https://eucrm.cc.capillarytech.com/api_gateway/rewards/core/v1/brand/constraints`

# Request query parameters

| Parameter Name | Data Type | Description                                                                                                                                        |
| :------------- | :-------- | :------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`sortBy`**   | Enum      | Sorts the returned list. Supported values: `lastUpdatedOn`                                                                                         |
| **`orderBy`**  | Enum      | Specifies the order in which results should be sorted. Supported values: `"ASC"` for ascending, `"DESC"` for descending. Default value is `"ASC"`. |

# Response parameters

| Parameter                  | Data Type | Description                                                                                                                                                                                                                                                                                                                                                                             |
| :------------------------- | :-------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`rewardConstraintId`**   | Integer   | A unique identifier for the reward constraint.                                                                                                                                                                                                                                                                                                                                          |
| **`orgId`**                | Integer   | The identifier for the organization.                                                                                                                                                                                                                                                                                                                                                    |
| **`kpi`**                  | String    | The KPI on which the restriction is applied. Supported value: `POINTS`.                                                                                                                                                                                                                                                                                                                 |
| **`constraintLevel`**      | String    | The level at which restrictions are defined by the organization and applied. \<br>\<br>Values: `CUSTOMER_REDEMPTION_TYPE`, `CUSTOMER`, `CUSTOMER_SEGMENT`, `CUSTOMER_TIER`, `CUSTOMER_LOYALTY_PROGRAM`, `CUSTOMER_SUPPL_PROGRAM`, `CUSTOMER_LABEL`. \<br>\<br>Only one combination of `Constraint_Level` and `KPI` is allowed with the `DAILY`, `WEEKLY`, or `MONTHLY` `frequencyType`. |
| **`frequencyType`**        | String    | The frequency at which the constraint is applied. Supported values: `DAILY`, `WEEKLY`, `MONTHLY`.                                                                                                                                                                                                                                                                                       |
| **`constraintLimitValue`** | Integer   | The limit value for the constraint.                                                                                                                                                                                                                                                                                                                                                     |
| **`isActive`**             | Boolean   | The status indicating whether the constraint is active.                                                                                                                                                                                                                                                                                                                                 |
| **`intervalValue`**        | Integer   | The interval at which the frequency is applied (daily).                                                                                                                                                                                                                                                                                                                                 |
| **`status.success`**       | Boolean   | Indicates if the status check was successful.                                                                                                                                                                                                                                                                                                                                           |
| **`status.code`**          | Integer   | The status code associated with the constraint check.                                                                                                                                                                                                                                                                                                                                   |
| **`redemptionType`**       | String    | The type of redemption managed by this constraint. Supported values: `GAMES`, `AUCTION`, `CART_PROMOTION`, `CASH_WALLET`, `VENDOR_ONLY_REWARD`, `VOUCHER`, `CASH_BACK`, `INTOUCH_REWARD`, `PHYSICAL_REWARD`, `CHARITY`, `MILES`, `GIFT_CARD`, `SWEEPSTAKES`, `VENDOR_INTOUCH_REWARD`, `CARD_DISC`.                                                                                      |

<br />

```json
[
    {
        "rewardConstraintId": 10259,
        "orgId": 100458,
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
    },
    {
        "rewardConstraintId": 10857,
        "orgId": 100458,
        "kpi": "POINTS",
        "constraintLevel": "CUSTOMER",
        "frequencyType": "DAILY",
        "constraintLimitValue": 5,
        "isActive": true,
        "intervalValue": 1,
        "status": {
            "success": true,
            "code": 0
        }
    },
    {
        "rewardConstraintId": 11123,
        "orgId": 100458,
        "kpi": "POINTS",
        "constraintLevel": "CUSTOMER_REDEMPTION_TYPE",
        "frequencyType": "DAILY",
        "constraintLimitValue": 15,
        "isActive": true,
        "intervalValue": 1,
        "status": {
            "success": true,
            "code": 0
        },
        "redemptionType": "POINTS"
    },
    {
        "rewardConstraintId": 11436,
        "orgId": 100458,
        "kpi": "POINTS",
        "constraintLevel": "CUSTOMER_LOYALTY_PROGRAM",
        "frequencyType": "DAILY",
        "constraintLimitValue": 15,
        "isActive": true,
        "intervalValue": 1,
        "status": {
            "success": true,
            "code": 0
        },
        "programId": "1680"
    },
    {
        "rewardConstraintId": 11662,
        "orgId": 100458,
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
        "redemptionType": "MILES"
    },
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
    },
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
    },
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
```Text With sortBy=lastUpdatedOn
[
    {
        "rewardConstraintId": 34327,
        "orgId": 100737,
        "kpi": "POINTS",
        "constraintLevel": "CUSTOMER_REDEMPTION_TYPE",
        "frequencyType": "DAILY",
        "constraintLimitValue": 15,
        "isActive": true,
        "intervalValue": 1,
        "status": {
            "success": true,
            "code": 0
        },
        "createdOn": 1747374478000,
        "lastUpdatedOn": 1747374478000,
        "createdBy": 75161973,
        "lastUpdatedBy": 75161973,
        "createdOnDateTime": "2025-05-16T05:47:58Z",
        "lastUpdatedOnDateTime": "2025-05-16T05:47:58Z",
        "redemptionType": "CASH"
    },
    {
        "rewardConstraintId": 34326,
        "orgId": 100737,
        "kpi": "POINTS",
        "constraintLevel": "CUSTOMER_REDEMPTION_TYPE",
        "frequencyType": "DAILY",
        "constraintLimitValue": 15,
        "isActive": true,
        "intervalValue": 1,
        "status": {
            "success": true,
            "code": 0
        },
        "createdOn": 1747374467000,
        "lastUpdatedOn": 1747374467000,
        "createdBy": 75161973,
        "lastUpdatedBy": 75161973,
        "createdOnDateTime": "2025-05-16T05:47:47Z",
        "lastUpdatedOnDateTime": "2025-05-16T05:47:47Z",
        "redemptionType": "VOUCHER"
    },
    {
        "rewardConstraintId": 29700,
        "orgId": 100737,
        "kpi": "POINTS",
        "constraintLevel": "CUSTOMER_REDEMPTION_TYPE",
        "frequencyType": "DAILY",
        "constraintLimitValue": 15,
        "isActive": true,
        "intervalValue": 1,
        "status": {
            "success": true,
            "code": 0
        },
        "createdOn": 1742195093000,
        "lastUpdatedOn": 1742195093000,
        "createdBy": 75152721,
        "lastUpdatedBy": 75152721,
        "createdOnDateTime": "2025-03-17T07:04:53Z",
        "lastUpdatedOnDateTime": "2025-03-17T07:04:53Z",
        "redemptionType": "POINTS"
    }
]
```

<HTMLBlock>{`
<style>
  .InputGroupe2EvBGz2cnqy {
   display: flex;
   gap: 2px;
   position: relative;
}

.Button.APIRequest-example-button1DGMsfaOTVNW {
   position: relative;
   width: 140px;
   white-space: nowrap;
   overflow: hidden;
   text-overflow: ellipsis;
   padding: 6px 12px;
   text-align: left;
   transition: width 0.2s ease-out;
   z-index: 1;
   display: block;
   direction: ltr;
   unicode-bidi: embed;
   padding-right: 20px;
   background: #1e2329;
   border: none;
   border-radius: 6px;
   color: #94a3b8;
   font-size: 13px;
}

.Button.APIRequest-example-button1DGMsfaOTVNW span,
.Button.APIRequest-example-button1DGMsfaOTVNW div {
   text-align: left;
   direction: ltr;
}

.Button.APIRequest-example-button1DGMsfaOTVNW:hover {
   width: auto;
   z-index: 10;
   background: #262b33;
}

.Button.APIRequest-example-button1DGMsfaOTVNW.APIRequest-example-button_activeXJeukHyaHZXB {
   z-index: 20;
   background: #2c333d;
   color: #ffffff;
}
</style>
`}</HTMLBlock>