---
title: Create target based on Behavioural event
excerpt: >-
  This document provides information on creating a target based on behavioral
  events.
api:
  file: v3.json
  operationId: create-target-group-based-on-behavioural-event
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
# Behavioral Events Target Group API

Behavioral events track specific user actions (e.g., profile updates, reviews, step counts). Brands reward users upon achieving milestones based on these events.

***

***

<br />

Behavioral events are a way using which brands track the behavioral properties of their customers. For example:

1. Whether a user has updated the profile picture?
2. Whether a user has provided the product review?
3. Whether a user has walked 5000 steps?

Using the milestones, brands can track these behavioral events and reward their users. For example:

1. Give 100 points to the user for updating the profile picture 2 times a month.
2. Give a $1 coupon to the user for giving 3 product reviews in a quarter.
3. Give a fitness badge to the user for walking 5000 steps in 2 days.

<Note title="Note">
Unlike targets such as QUANTITY, SALES, GROSS\_SALES, REGULAR\_POINTS, PROMOTIONAL\_POINTS,\
ALL\_POINTS, EXTENDED\_FIELD, where the user has to make 3 API calls (target-group, period, and target) to create a single target, the behavioural type of targets can be created using a single call by placing the entire information in the single call itself. It means the definition of all the keys will be the same except for the following:
</Note>

1. targetEntity = "Event".
2. eventName = "name of the behavioral event".
   1. This key will be present in the request body for the behavioural event type of targets.
3. targetType = "COUNT"/"VISIT"/"EVENT\_ATTRIBUTE". Only these 3 are supported.
   1. When the targetType is given as "EVENT\_ATTRIBUTE", then:
      1. An "extendedFieldInfo object is applicable that contains 2 parameters:
         1. aggregateFunction: "SUM"
         2. name: Name of the attribute of the behavioral event on which SUM needs to happen.
         3. ```Text SUM Case
            "targetEntity": "EVENT",
            "eventName": "removedFromCart",
            "targetType": "EVENT_ATTRIBUTE",
            "extendedFieldInfo": {
                "name": "cartId",
                "aggregateFunction": "SUM"}
            ```
            ```Text COUNT/VISIT Case
            "targetEntity": "EVENT",
            "eventName": "removedFromCart",
            "targetType": "COUNT"/"VISIT",
            "extendedFieldInfo": {
                "name": "cartId",
                "aggregateFunction": "SUM"}
            ```
      <br />

> 👍 Note
>
> For detailed information about our APIs and for hands-on testing, refer documentation in [API overview](https://docs.capillarytech.com/reference/apioverview) and  step-by-step guide on making your first API call in [Make your first API call](https://docs.capillarytech.com/reference/make-your-first-api-call) .

# API endpoint example

Using create target group: `https://eucrm.cc.capillarytech.com/v3/targetGroups`

# Example Body

```curl
 {
    "active": true,
    "fromDate": "2024-02-19T00:00:00.529Z",
    "name": "GoodNightForNightly",
    "preferredTillId": 50692127,
    "toDate": "2024-05-31T08:41:00.529Z",
    "trackingType": "DEFAULT",
    "totalPeriods": 2,
    "frequency": 1,
    "recurringCycles": 1,
    "targetEvaluationType": "FIXED_CALENDAR_WINDOW",
    "targetCycleStartDate": "2024-02-19T00:31:00.529Z",
    "periods": [
        {
            "active": true,
            "description": "p66912",
            "endDate": "2024-02-22T23:45:12.063",
            "periodStatus": "RUNNING",
            "refCode": "period66921",
            "startDate": "2024-02-19T00:00:00.529Z"
        },
        {
            "active": true,
            "description": "p66222",
            "endDate": "2024-04-30T23:45:12.063",
            "periodStatus": "NOT_STARTED",
            "refCode": "period6628911",
            "startDate": "2024-04-01T23:45:12.063Z"
        }
    ],
    "targets": [
        {
            "targetEntity": "EVENT",
            "targetType": "VISIT",
            "eventName": "goodNight",
            "defaultValues": [
                {
                    "defaultValue": "2"
                },
                {
                    "defaultValue": "3"
                }
            ],
            "targetMilestoneTriggers": [],
            "expression": "true",
            "expressionJson": "{\"arity\":\"literal\",\"value\":\"true\",\"type\":\"boolean:primitive\"}",
            "filters": [],
            "name": "goodNightTargetRule",
            "enrolmentMethod": "TRANSACTION"
        }
    ]
}
```
```curl
 {
    "active": true,
    "description": "generic fixed group1",
    "fromDate": "2024-02-19T02:00:00.063",
    "name": "genericFixedTest1",
    "preferredTillId": 50697469,
    "toDate": "2024-10-31T08:41:00.529Z",
    "trackingType": "DEFAULT",
    "totalPeriods": 1,
    "frequency": 0,
    "recurringCycles": 0,
    "periods": [
        {
            "active": true,
            "description": "p1",
            "endDate": "2024-10-31T08:41:00.529Z",
            "periodStatus": "RUNNING",
            "refCode": "period444f5",
            "startDate": "2024-02-19T02:00:00.063"
        }
    ],
    "targets": [
        {
            "active": true,
            "description": "string",
            "expression": "true",
            "expressionJson": "{\"arity\":\"literal\",\"value\":\"true\",\"type\":\"boolean:primitive\"}",
            "filters": [],
            "defaultValues": [
                {
                    "defaultValue": 4.000
                }
            ],
            "name": "fixedTarget1",
            "targetEntity": "EVENT",
            "enrolmentMethod": "TRANSACTION",
            "targetType": "EVENT_ATTRIBUTE", 
            "eventName": "test",
            "extendedFieldInfo": {
                "name": "step",
                "aggregateFunction": "SUM"
            }
        }
    ]
}
```

<br />

# Prerequisites

*   Authentication: Basic/OAuth authentication
*   Default access group

# Resource information

|               |                 |
| :------------ | :-------------- |
| URI           | v3/targetGroups |
| HTTP method   | POST            |
| Pagination    | NA              |
| Rate limit    | NA              |
| Batch support | NA              |

# Request body parameters

| Parameter Name           | Data Type | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| ------------------------ | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **active**               | Boolean   | Indicates if the tracking is active or not.                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| **description**          | String    | A brief description of the target group.                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| **name**\*               | String    | The name identifier for the target group. The character limit for the name is 200 characters.                                                                                                                                                                                                                                                                                                                                                                                                    |
| **preferredTillId**      | Number    | Identifier for a preferred till.                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| **trackingType**         | Enum      | The type of tracking the milestone is created for. Supported values: - Default (single target tracking),- Unified (tracking multiple targets as a unit),- Streak (Tracking the achievement of a user across the cycles continuously),- Capping (Tracking the number of points a user has got over a period, so that capping can be applied).- Non continuous streak (Non-continuous streaks is a variation of streak, where the user is not required to perform specified activity continously). |
| **targetEvaluationType** | Enum      | The evaluation strategy for the targets. Supported values: FIXED\_CALENDAR\_WINDOW - Each cycle runs for a defined period from the selected start date. CYCLIC\_WINDOW - Cycle starts after customer's 1st transaction post enrolment. PERIOD\_AGNOSTIC\_WINDOW - The cycle continues until the user achieves the specified target.                                                                                                                                                              |
| **totalPeriods**         | Number    | The total number of periods over which the tracking is evaluated.                                                                                                                                                                                                                                                                                                                                                                                                                                |
| **frequencyType**        | Enum      | The frequency of each cycle in which the user has to achieve the target value. Supported values: Monthly, Quarterly, Half-yearly, Yearly, Weekly, Daily, CUSTOM.                                                                                                                                                                                                                                                                                                                                 |
| **frequency**            | Number    | The frequency count, relevant to the frequencyType.                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| **recurringCycles**      | Number    | The number of cycles for which the tracking recurs.                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| **periods**              | Object    | An array of period objects, each containing details about the individual periods within the tracking.                                                                                                                                                                                                                                                                                                                                                                                            |
| **active**               | Boolean   | Indicates if the period is active.                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| **description**          | String    | A brief description of the period.                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| **endDate**              | Date Time | The end date and time of the period.                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| **periodStatus**         | Enum      | Indicates if the cycle of the Milestone is running or upcoming. Supported values: RUNNING, UPCOMING, NOT\_STARTED.                                                                                                                                                                                                                                                                                                                                                                               |
| **refCode**              | String    | A reference code for the period.                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| **startDate**            | Date Time | The start date and time of the period.                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| **targets**              | Object    | An array of target objects.                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| **active**               | Boolean   | Indicates if the target is active.                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| **description**          | String    | A brief description of the target.                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| **expression**           | String    | A string representing the condition to meet the target aka rule.                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| **expressionJson**       | String    | A JSON expression that specifies the conditions required to achieve the target.                                                                                                                                                                                                                                                                                                                                                                                                                  |
| **defaultValues**        | Object    | An array of objects providing default values related to the target.                                                                                                                                                                                                                                                                                                                                                                                                                              |
| **defaultValue**         | String    | The default value for the target                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| **filters**              | Object    | In this object, you can define the entity to which the specified expressions related to the target will be applied.                                                                                                                                                                                                                                                                                                                                                                              |
| **enrolmentMethod**      | Enum      | The method of enrolment for the target. Supported values: TRANSACTION, IMPORT                                                                                                                                                                                                                                                                                                                                                                                                                    |
| **entityType**           | Enum      | The entity to which the specified expressions related to the target will be applied. For example: The user has to make a purchase of shoes from ABC store. Here, purchase of shoes is the expression and the entity is ABC store. Supported values: STORE, ZONE, CONCEPT.                                                                                                                                                                                                                        |
| **entityIds**            | Array     | The IDs of the entities to which the is filter applied on.                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| **name**                 | String    | The name identifier for the target.                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| **targetEntity**         | Enum      | The KPI on which the target is tracked. Supported values: TRANSACTION, LINEITEM, EVENT, REWARDS. To track the transactional KPIs, use TRANSACTION and LINEITEM . To track the Behavioural events & EMF events, use EVENT. To track the tracking based on rewards such as points, use REWARDS.                                                                                                                                                                                                    |
| **eventName**            | String    | The behavioral name of the event that triggers the target. Only valid in the case of behavioral events & EMF events.                                                                                                                                                                                                                                                                                                                                                                             |
| **targetType**\*         | Enum      | The type of target. Supported values: SUM, VISIT, and COUNT (These are only 3 supported for behavioral event type of targets) To use SUM, set the value as EVENT\_ATTRIBUTE and then define the details in the extendedFieldInfo object.                                                                                                                                                                                                                                                         |
| **extendedFieldInfo**    | Object    | Includes the details of the event attribute that needs to be tracked. This object is applicable only when targetType is SUM.                                                                                                                                                                                                                                                                                                                                                                     |
| **name**                 | String    | Event on which the sum calculation is performed. For example, the number of adding to cart events.                                                                                                                                                                                                                                                                                                                                                                                               |
| **aggregateFunction**    | Enum      | The aggregate function checks whether the behavioral event is satisfied based on the sum. Supported values: SUM                                                                                                                                                                                                                                                                                                                                                                                  |
| **defaultValues**        | Object    | An array of objects providing default values related to the target.                                                                                                                                                                                                                                                                                                                                                                                                                              |
| **defaultValue**         | Integer   | A default value used in the target evaluation.                                                                                                                                                                                                                                                                                                                                                                                                                                                   |

***

# Request body parameters (that are related to target)

| Parameter               | Data Type | Description                                                                                                                                                                                                                                                                      |
| ----------------------- | --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **active**              | Boolean   | Indicates if the target is active.                                                                                                                                                                                                                                               |
| **description**         | String    | A brief description of the target.                                                                                                                                                                                                                                               |
| **expression**          | String    | A string representing the condition to meet the target.                                                                                                                                                                                                                          |
| **expressionJson**      | JSON      | A JSON expression that specifies the conditions required to achieve the target.                                                                                                                                                                                                  |
| **filters**             | Array     | In this object, you can define the entity to which the specified expressions related to the target will be applied.                                                                                                                                                              |
| **- entityIds**         | Array     | The IDs of the entities to which the is filter applied on.                                                                                                                                                                                                                       |
| **- entityType**        | Enum      | The entity to which the specified expressions related to the target will be applied. For example: The user has to make a purchase of shoes from ABC store. Here, purchase of shoes is the expression and the entity is ABC store. Supported values: STORE, ZONE, CONCEPT.        |
| **name**\*              | String    | Name assigned to the target.                                                                                                                                                                                                                                                     |
| **targetEntity**        | Enum      | The KPI on which the target is tracked. Supported values: TRANSACTION, LINEITEM, EVENT, REWARDS. To track the transactional KPIs, use TRANSACTION and LINEITEM . To track the Behavioural events, use EVENT. To track the tracking based on rewards such as points, use REWARDS. |
| **enrolmentMethod**     | Enum      | The method of enrolment for the target. Supported values: TRANSACTION, IMPORT                                                                                                                                                                                                    |
| **targetGroupId**\*     | Integer   | ID of the target group.                                                                                                                                                                                                                                                          |
| **targetType**\*        | String    | The type of target. Supported values: SUM, VISIT, and COUNT. To use SUM, set the value as EVENT\_ATTRIBUTE and then define the details in the extendedFieldInfo object.                                                                                                          |
| **defaultValues**       | Array     | An array of objects providing default values related to the target.                                                                                                                                                                                                              |
| **- targetName**        | String    | Name of the target.                                                                                                                                                                                                                                                              |
| **- periodId**          | Integer   | Unique identifier for the period.                                                                                                                                                                                                                                                |
| **- defaultValue**      | Integer   | A default value used in the target evaluation.                                                                                                                                                                                                                                   |
| **extendedFieldInfo**   | Object    | Includes the details of the event attribute that needs to be tracked. This object is applicable only when targetType is SUM.                                                                                                                                                     |
| **- name**              | String    | Event on which the sum calculation is performed. For example, the number of adding to cart events.                                                                                                                                                                               |
| **- aggregateFunction** | String    | The aggregate function checks whether the behavioral event is satisfied based on the sum. Supported values: SUM                                                                                                                                                                  |

<br />

```json COUNT/VISIT sample request body
{
    "active": true,
    "fromDate": "2024-02-19T00:00:00.529Z",
    "name": "GoodNightForNightly",
    "preferredTillId": 50692127,
    "toDate": "2024-05-31T08:41:00.529Z",
    "trackingType": "DEFAULT",
    "totalPeriods": 2,
    "frequency": 1,
    "recurringCycles": 1,
    "targetEvaluationType": "FIXED_CALENDAR_WINDOW",
    "targetCycleStartDate": "2024-02-19T00:31:00.529Z",
    "periods": [
        {
            "active": true,
            "description": "p66912",
            "endDate": "2024-02-22T23:45:12.063",
            "periodStatus": "RUNNING",
            "refCode": "period66921",
            "startDate": "2024-02-19T00:00:00.529Z"
        },
        {
            "active": true,
            "description": "p66222",
            "endDate": "2024-04-30T23:45:12.063",
            "periodStatus": "NOT_STARTED",
            "refCode": "period6628911",
            "startDate": "2024-04-01T23:45:12.063Z"
        }
    ],
    "targets": [
        {
            "targetEntity": "EVENT",
            "targetType": "VISIT",
            "eventName": "goodNight",
            "defaultValues": [
                {
                    "defaultValue": "2"
                },
                {
                    "defaultValue": "3"
                }
            ],
            "targetMilestoneTriggers": [],
            "expression": "true",
            "expressionJson": "{\"arity\":\"literal\",\"value\":\"true\",\"type\":\"boolean:primitive\"}",
            "filters": [],
            "name": "goodNightTargetRule",
            "enrolmentMethod": "TRANSACTION"
        }
    ]
}
```
```json SUM sample request body
 {
    "active": true,
    "description": "generic fixed group1",
    "fromDate": "2024-02-19T02:00:00.063",
    "name": "genericFixedTest1",
    "preferredTillId": 50697469,
    "toDate": "2024-10-31T08:41:00.529Z",
    "trackingType": "DEFAULT",
    "totalPeriods": 1,
    "frequency": 0,
    "recurringCycles": 0,
    "periods": [
        {
            "active": true,
            "description": "p1",
            "endDate": "2024-10-31T08:41:00.529Z",
            "periodStatus": "RUNNING",
            "refCode": "period444f5",
            "startDate": "2024-02-19T02:00:00.063"
        }
    ],
    "targets": [
        {
            "active": true,
            "description": "string",
            "expression": "true",
            "expressionJson": "{\"arity\":\"literal\",\"value\":\"true\",\"type\":\"boolean:primitive\"}",
            "filters": [],
            "defaultValues": [
                {
                    "defaultValue": 4.000
                }
            ],
            "name": "fixedTarget1",
            "targetEntity": "EVENT",
            "enrolmentMethod": "TRANSACTION",
            "targetType": "EVENT_ATTRIBUTE", 
            "eventName": "test",
            "extendedFieldInfo": {
                "name": "step",
                "aggregateFunction": "SUM"
            }
        }
    ]
}
```

<br />

# Response parameters

| Field                       | Datatype           | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --------------------------- | ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                        | integer            | Unique identifier for the target group.                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| `name`                      | string             | Name of the target group.                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| `active`                    | boolean            | Indicates if the group is active.                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| `preferredTillId`           | integer            | Preferred till ID.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| `totalPeriods`              | integer            | Total number of periods specified.                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| `description`               | string             | Description of the target.                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| `targetEvaluationType`      | Enum               | The evaluation strategy for the targets. Supported values: FIXED\_CALENDAR\_WINDOW - Each cycle runs for a defined period from the selected start date. CYCLIC\_WINDOW - Cycle starts after customer's 1st transaction post enrolment. PERIOD\_AGNOSTIC\_WINDOW - The cycle continues until the user achieves the specified target.                                                                                                                                                               |
| `targetCycleStartDate`      | string (date-time) | Start date and time for the target cycle.                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| `targetCycleEndDate`        | string (date-time) | End date and time for the target cycle.                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| `frequencyType`             | Enum               | The frequency of each cycle in which the user has to achieve the target value. Supported values: Monthly, Quarterly, Half-yearly, Yearly, Weekly.                                                                                                                                                                                                                                                                                                                                                 |
| `trackingType`              | Enum               | The type of tracking the milestone is created for. Supported values: - Default (single target tracking), - Unified (tracking multiple targets as a unit),- Streak (Tracking the achievement of a user across the cycles continuously),- Capping (Tracking the number of points a user has got over a period, so that capping can be applied).- Non continuous streak (Non-continuous streaks is a variation of streak, where the user is not required to perform specified activity continously). |
| `fromDate`                  | string (date)      | Start date for the target.                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| `toDate`                    | string (date)      | End date for the target.                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| `recurringCycles`           | integer            | Number of recurring cycles specified.                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| `frequency`                 | integer            | Frequency value set for the setting.                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| `id`                        | integer            | Unique identifier for each period.                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|     `startDate`             | string (date)      | Start date for each period.                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|     `endDate`               | string (date)      | End date for each period.                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|     `refCode`               | string             | Reference code for each period.                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|     `periodStatus`          | Enum               | Status of each period. Supported values: RUNNING, NOT\_STARTED, UPCOMING.                                                                                                                                                                                                                                                                                                                                                                                                                         |
|     `targetGroupId`         | integer            | Identifier linking each period to a target group.                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|     `description`           | string             | Description of each period.                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|     `active`                | boolean            | Indicates if each period is active.                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| `id`                        | integer            | Unique identifier for each streak.                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|     `name`                  | string             | Name of each streak.                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|     `targetCountOfSequence` | integer            | Target count of sequence for each streak.                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| `id`                        | integer            | Unique identifier for each target.                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|     `name`                  | string             | Name of each target.                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|     `targetType`            | Enum               | The type of target. Supported values: COUNT, VISIT, SUM To use SUM, set the value as EVENT\_ATTRIBUTE and then define the details in the extendedFieldInfo object.                                                                                                                                                                                                                                                                                                                                |
|     `targetEntity`          | Enum               | The KPI on which the target is tracked. Supported values: TRANSACTION, LINEITEM, EVENT, REWARDS. To track the transactional KPIs, use TRANSACTION and LINEITEM . To track the Behavioural events, use EVENT. To track the tracking based on rewards such as points, use REWARDS.                                                                                                                                                                                                                  |
|     `eventName`             | string             | Name of the event associated with each target.                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|     `description`           | string             | Description of each target.                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|     `active`                | boolean            | Indicates if each target is active.                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|     `expression`            | string             | Expression defining the criteria for each target.                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|     `expressionJson`        | string (JSON)      | Target expression in JSON format for each target.                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|     `entityType`            | Enum               | The entity to which the specified expressions related to the target will be applied. For example: The user has to make a purchase of shoes from ABC store. Here, purchase of shoes is the expression and the entity is ABC store. Supported values: STORE, ZONE, CONCEPT.                                                                                                                                                                                                                         |
|     `entityIds`             | array of integers  | IDs of entities for the filter of each target.                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|     `enrolmentMethod`       | string             | Method of enrolment for each target.                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|     `defaultValue`          | float              | Specifies a default value for the target criteria for each target.                                                                                                                                                                                                                                                                                                                                                                                                                                |

<br />

```json Sample response for COUNT/VISIT
{
    "data": [
        {
            "id": 9067,
            "attribution": {
                "createdOn": "2023-09-25T11:42:35.850+0530",
                "lastUpdatedOn": "2023-09-25T11:42:35.850+0530",
                "lastUpdatedBy": {
                    "id": 50666468,
                    "code": "amanv2",
                    "description": "",
                    "name": "amanv2",
                    "type": "TILL"
                },
                "createdBy": {
                    "id": 50666468,
                    "code": "amanv2",
                    "description": "",
                    "name": "amanv2",
                    "type": "TILL"
                }
            },
            "name": "test_name",
            "emfRuleSetId": 1246657,
            "emfUnrolledRulesetId": 1246656,
            "targetType": "COUNT",
            "targetEntity": "EVENT",
            "targetGroupId": 5869,
            "description": "test210",
            "active": true,
            "expression": "true",
            "expressionJson": "{\"arity\":\"literal\",\"value\":\"true\",\"type\":\"boolean:primitive\"}",
            "filters": [
                {
                    "entityType": "ZONE",
                    "entityIds": [
                        0
                    ]
                }
            ],
            "enrolmentMethod": "TRANSACTION",
            "defaultValues": [
                {
                    "id": 10083,
                    "periodId": 1,
                    "defaultValue": 20
                }
            ],
            
        }
    ],
    "errors": null,
    "warnings": null
}
```
```json Sample response for SUM
{
    "data": [
        {
            "id": 9067,
            "attribution": {
                "createdOn": "2023-09-25T11:42:35.850+0530",
                "lastUpdatedOn": "2023-09-25T11:42:35.850+0530",
                "lastUpdatedBy": {
                    "id": 50666468,
                    "code": "amanv2",
                    "description": "",
                    "name": "amanv2",
                    "type": "TILL"
                },
                "createdBy": {
                    "id": 50666468,
                    "code": "amanv2",
                    "description": "",
                    "name": "amanv2",
                    "type": "TILL"
                }
            },
            "name": "test_name",
            "emfRuleSetId": 1246657,
            "emfUnrolledRulesetId": 1246656,
            "targetType": "EVENT_ATTRIBUTE",
            "targetEntity": "EVENT",
            "targetGroupId": 5869,
            "description": "test210",
            "active": true,
            "expression": "true",
            "expressionJson": "{\"arity\":\"literal\",\"value\":\"true\",\"type\":\"boolean:primitive\"}",
            "filters": [
                {
                    "entityType": "ZONE",
                    "entityIds": [
                        0
                    ]
                }
            ],
            "enrolmentMethod": "TRANSACTION",
            "defaultValues": [
                {
                    "id": 10083,
                    "periodId": 1,
                    "defaultValue": 20
                }
            ],
            "extendedFieldInfo": {
                "name": "tax_amount",
                "aggregateFunction": "SUM"
            }
        }
    ],
    "errors": null,
    "warnings": null
}
```

<br />

# API error codes

| Code   | Description                                                  |
| :----- | :----------------------------------------------------------- |
| 310069 | Target group name already exists                             |
| 300004 | Invalid input, check all values and ensure they are correct. |
| 310008 | Length of Target rule name cannot exceed 200                 |

&#x20;