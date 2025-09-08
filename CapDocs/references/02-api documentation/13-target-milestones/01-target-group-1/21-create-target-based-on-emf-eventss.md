---
title: Create target based on EMF event
excerpt: >-
  In this API documentation, information regarding "creating a target based on
  emf event (aka customer level events)" can be found.
api:
  file: v3.json
  operationId: create-target-based-on-emf-eventss
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
EMF Events are nothing but the different kinds of customer-level events present in loyalty workflows. For example, returnTransaction, pointsRedemption, etc... and all these are different kinds of EMF events in our systems.

**Important note:**

Now, brands will be able to create targets based on these EMF events. Now, unlike the normal targets, where the user has to make 3 API calls (target-group, period, and target) to create a single target, the EMF type of targets can be created using a single call by placing the entire information in the single call itself. It means the definition of all the keys will be the same except for the following:

1. targetEntity = "Event".
2. eventName = "name of the emf event".
   1. This is a new key that will be present in the request body for the behavioral event type of targets.
   2. As of today, we are only supporting the following:
      1. CustomerRegistration
      2. PointsRedemption
      3. ReturnBill
      4. PointsTransfer
3. targetType = "COUNT""VISIT". Only these 2 are supported for the EMF event type of targets.

> 👍 Note
>
> For detailed information about our APIs and for hands-on testing, refer documentation in [API overview](https://docs.capillarytech.com/reference/apioverview) and  step-by-step guide on making your first API call in [Make your first API call](https://docs.capillarytech.com/reference/make-your-first-api-call) .

# API endpoint example

Using create target group: `https://eucrm.cc.capillarytech.com/v3/targetGroups`

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

# Request body parameters (that are related to target-group)

| Parameter Name         | Data Type | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| ---------------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `active`               | Boolean   | Indicates if the tracking is active or not.                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| `description`          | String    | A brief description of the target group.                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| `name`\*               | String    | The name identifier for the target group. <br /><br />The character limit for the name is 200 characters.                                                                                                                                                                                                                                                                                                                                                                             |
| `preferredTillId`      | Number    | Identifier for a preferred till.                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| `trackingType`         | Enum      | The type of tracking the milestone is created for. Supported values:<br /><br />- `Default` (single target tracking)<br />- `Unified` (tracking multiple targets as a unit)<br />- `Streak` (continuous achievement tracking)<br />- `Capping` (points tracking with capping)<br />- `Non continuous streak` (like streak but non-continuous).                                                                                                                                        |
| `targetEvaluationType` | Enum      | Strategy for evaluating targets. Supported values:<br />- `FIXED_CALENDAR_WINDOW`<br />- `CYCLIC_WINDOW`<br />- `PERIOD_AGNOSTIC_WINDOW`                                                                                                                                                                                                                                                                                                                                              |
| `totalPeriods`         | Number    | The total number of periods over which the tracking is evaluated.                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `frequencyType`        | Enum      | Frequency of each cycle. Supported values: `Monthly`, `Quarterly`, `Half-yearly`, `Yearly`, `Weekly`, `Daily`, `CUSTOM`.                                                                                                                                                                                                                                                                                                                                                              |
| `frequency`            | Number    | The frequency count, relevant to the `frequencyType`.                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| `recurringCycles`      | Number    | The number of cycles for which the tracking recurs.                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `periods`              | Object    | Array of period objects with:<br />- `active` (Boolean)<br />- `description` (String)<br />- `endDate` (Date Time)<br />- `periodStatus` (Enum: `RUNNING`, `UPCOMING`, `NOT_STARTED`)<br />- `refCode` (String)<br />- `startDate` (Date Time)                                                                                                                                                                                                                                        |
| `targets`              | Object    | Array of target objects with:<br />- `active` (Boolean)<br />- `description` (String)<br />- `expression` (String)<br />- `expressionJson` (String)<br />- `filters` (Object)<br />- `entityType` (Enum: `STORE`, `ZONE`, `CONCEPT`)<br />- `entityIds` (Array)<br />- `name` (String)<br />- `targetEntity` (Enum: `TRANSACTION`, `LINEITEM`, `EVENT`, `REWARDS`)<br />- `eventName` (String)<br />- `targetType`\* (Enum: `VISIT`, `COUNT` \[only supported for EMF event targets]) |
| `extendedFieldInfo`    | Object    | Used when `targetType = SUM`. Includes:<br />- `name` (String): Event to sum on<br />- `aggregateFunction` (Enum: `SUM`) <br />Note: Not applicable to EMF event type targets.                                                                                                                                                                                                                                                                                                        |
| `defaultValues`        | Object    | Array of default value objects:<br />- `defaultValue` (Integer)                                                                                                                                                                                                                                                                                                                                                                                                                       |
| `expression`           | String    | Condition (rule) to meet the target.                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `expressionJson`       | String    | JSON expression for the condition to achieve the target.                                                                                                                                                                                                                                                                                                                                                                                                                              |
| `filters`              | Object    | Defines entity for applying expressions.                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| `entityType`           | Enum      | Entity type for the filters. Supported values:<br />`STORE`, `ZONE`, `CONCEPT`<br />Example: "Purchase shoes from ABC store" → `ABC store` is the entity.                                                                                                                                                                                                                                                                                                                             |
| `entityIds`            | Array     | Entity IDs to which the filter applies.                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| `periodStatus`         | Enum      | Milestone cycle status. Supported: `RUNNING`, `UPCOMING`, `NOT_STARTED`.                                                                                                                                                                                                                                                                                                                                                                                                              |
| `targetEntity`         | Enum      | The KPI being tracked. Supported values:<br />- `TRANSACTION`, `LINEITEM` (for transactional KPIs)<br />- `EVENT` (for behavioral/EMF events)<br />- `REWARDS` (for points-based tracking)                                                                                                                                                                                                                                                                                            |
| `eventName`            | String    | Behavioral event name that triggers the target (valid for behavioral/EMF events only).                                                                                                                                                                                                                                                                                                                                                                                                |
| `targetType`\*         | Enum      | Target type. Supported for EMF: `VISIT`, `COUNT`                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| `defaultValue`         | Integer   | A default value used in target evaluation.                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| `refCode`              | String    | A reference code for the period.                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| `startDate`            | Date Time | Start date and time of the period.                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| `endDate`              | Date Time | End date and time of the period.                                                                                                                                                                                                                                                                                                                                                                                                                                                      |

# Request body parameters (that are related to target)

| Parameter                 | Data Type | Description                                                                                                                                                                                                                                                                      |
| ------------------------- | --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `active`                  | Boolean   | Indicates if the target is active.                                                                                                                                                                                                                                               |
| `description`             | String    | A brief description of the target.                                                                                                                                                                                                                                               |
| `expression`              | String    | A string representing the condition to meet the target.                                                                                                                                                                                                                          |
| `expressionJson`          | JSON      | A JSON expression that specifies the conditions required to achieve the target.                                                                                                                                                                                                  |
| `filters`                 | Array     | In this object, you can define the entity to which the specified expressions related to the target will be applied.                                                                                                                                                              |
|     `- entityIds`         | Array     | The IDs of the entities to which the is filter applied on.                                                                                                                                                                                                                       |
|     `- entityType`        | Enum      | The entity to which the specified expressions related to the target will be applied. For example: The user has to make a purchase of shoes from ABC store. Here, purchase of shoes is the expression and the entity is ABC store. Supported values: STORE, ZONE, CONCEPT.        |
| `name*`                   | String    | Name assigned to the target.                                                                                                                                                                                                                                                     |
| `targetEntity`            | Enum      | The KPI on which the target is tracked. Supported values: TRANSACTION, LINEITEM, EVENT, REWARDS. To track the transactional KPIs, use TRANSACTION and LINEITEM . To track the Behavioural events, use EVENT. To track the tracking based on rewards such as points, use REWARDS. |
| `enrolmentMethod`         | Enum      | The method of enrolment for the target. Supported values: TRANSACTION, IMPORT                                                                                                                                                                                                    |
| `targetGroupId*`          | Integer   | ID of the target group.                                                                                                                                                                                                                                                          |
| `targetType*`             | String    | The type of target. Supported values: VISIT, and COUNT.                                                                                                                                                                                                                          |
| `defaultValues`           | Array     | An array of objects providing default values related to the target.                                                                                                                                                                                                              |
|     `- targetName`        | String    | Name of the target.                                                                                                                                                                                                                                                              |
|     `- periodId`          | Integer   | Unique identifier for the period.                                                                                                                                                                                                                                                |
|     `- defaultValue`      | Integer   | A default value used in the target evaluation.                                                                                                                                                                                                                                   |
| `extendedFieldInfo`       | Object    | Includes the details of the event attribute that needs to be tracked. This object is applicable only when targetType is SUM. Not applicable here.                                                                                                                                |
|     `- name`              | String    | Event on which the sum calculation is performed. For example, the number of adding to cart events.                                                                                                                                                                               |
|     `- aggregateFunction` | String    | The aggregate function checks whether the behavioral event is satisfied based on the sum. Supported values: SUM                                                                                                                                                                  |

<br />

```json Sample request body for pointsRedemption
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
            "eventName": "PointsRedemption",
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

# Response parameters (that are related to the target group)

| Parameter Name         | Data Type | Description                                                                                                                                                                               |
| ---------------------- | --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `active`               | Boolean   | Indicates if the tracking is active or not.                                                                                                                                               |
| `description`          | String    | A brief description of the target group or period.                                                                                                                                        |
| `name`\*               | String    | The name identifier for the target group or target. <br /><br />Character limit: 200.                                                                                                     |
| `preferredTillId`      | Number    | Identifier for a preferred till.                                                                                                                                                          |
| `trackingType`         | String    | Type of tracking. Supported values:<br /><br />- `Default`<br />- `Unified`<br />- `Streak`<br />- `Capping`                                                                              |
| `targetEvaluationType` | String    | Target evaluation strategy. Supported values:<br />- `FIXED_CALENDAR_WINDOW`<br />- `CYCLIC_WINDOW`<br />- `PERIOD_AGNOSTIC_WINDOW`                                                       |
| `totalPeriods`         | Number    | The total number of periods over which the tracking is evaluated.                                                                                                                         |
| `frequencyType`        | Enum      | Frequency of each cycle. Supported: `Monthly`, `Quarterly`, `Half-yearly`, `Yearly`, `Weekly`.                                                                                            |
| `frequency`            | Number    | Frequency count relevant to the `frequencyType`.                                                                                                                                          |
| `recurringCycles`      | Number    | Number of cycles for recurring tracking.                                                                                                                                                  |
| `periods`              | Object\[] | Array of period objects with:<br />- `active`, `description`, `endDate`, `periodStatus`, `refCode`, `startDate`.                                                                          |
| `targets`              | Object\[] | Array of target objects with:<br />- `active`, `description`, `expression`*,`expressionJson`*, `filters`*,`entityType`*, `entityIds`*,`name`, `targetEntity`, `eventName`, `targetType`*. |
| `extendedFieldInfo`    | Object    | Only for `targetType = EVENT_ATTRIBUTE`. Includes:<br />- `name`, `aggregateFunction` (`SUM`)                                                                                             |
| `defaultValues`        | Object\[] | Default value objects:<br />- `defaultValue`\* (Integer)                                                                                                                                  |
| `streaks`              | Object\[] | Streak objects:<br />- `name`, `targetCountOfSequence` (Integer)                                                                                                                          |

# Response Body Parameter (that are related to Target)

| Parameter                 | Data Type | Description                                                                                                                                                                                                                                                                      |
| ------------------------- | --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `active`                  | Boolean   | Indicates if the target is active.                                                                                                                                                                                                                                               |
| `description`             | String    | A brief description of the target.                                                                                                                                                                                                                                               |
| `expression`              | String    | A string representing the condition to meet the target.                                                                                                                                                                                                                          |
| `expressionJson`          | JSON      | A JSON expression that specifies the conditions required to achieve the target.                                                                                                                                                                                                  |
| `filters`                 | Array     | In this object, you can define the entity to which the specified expressions related to the target will be applied.                                                                                                                                                              |
|     `- entityIds`         | Array     | The IDs of the entities to which the is filter applied on.                                                                                                                                                                                                                       |
|     `- entityType`        | Enum      | The entity to which the specified expressions related to the target will be applied. For example: The user has to make a purchase of shoes from ABC store. Here, purchase of shoes is the expression and the entity is ABC store. Supported values: STORE, ZONE, CONCEPT.        |
| `name*`                   | String    | Name assigned to the target.                                                                                                                                                                                                                                                     |
| `targetEntity`            | Enum      | The KPI on which the target is tracked. Supported values: TRANSACTION, LINEITEM, EVENT, REWARDS. To track the transactional KPIs, use TRANSACTION and LINEITEM . To track the Behavioural events, use EVENT. To track the tracking based on rewards such as points, use REWARDS. |
| `enrolmentMethod`         | Enum      | The method of enrolment for the target. Supported values: TRANSACTION, IMPORT                                                                                                                                                                                                    |
| `targetGroupId*`          | Integer   | ID of the target group.                                                                                                                                                                                                                                                          |
| `targetType*`             | String    | The type of target. Supported values: VISIT, and COUNT.                                                                                                                                                                                                                          |
| `defaultValues`           | Array     | An array of objects providing default values related to the target.                                                                                                                                                                                                              |
|     `- targetName`        | String    | Name of the target.                                                                                                                                                                                                                                                              |
|     `- periodId`          | Integer   | Unique identifier for the period.                                                                                                                                                                                                                                                |
|     `- defaultValue`      | Integer   | A default value used in the target evaluation.                                                                                                                                                                                                                                   |
| `extendedFieldInfo`       | Object    | Includes the details of the event attribute that needs to be tracked. This object is applicable only when targetType is SUM. Not applicable here.                                                                                                                                |
|     `- name`              | String    | Event on which the sum calculation is performed. For example, the number of adding to cart events.                                                                                                                                                                               |
|     `- aggregateFunction` | String    | The aggregate function checks whether the behavioral event is satisfied based on the sum. Supported values: SUM                                                                                                                                                                  |

# Response parameters (that are related to the target)

| Parameter Name         | Data Type | Description                                                                                                                                                                             |
| ---------------------- | --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `active`               | Boolean   | Indicates if the tracking is active or not.                                                                                                                                             |
| `description`          | String    | A brief description of the target group.                                                                                                                                                |
| `name`\*               | String    | The name identifier for the target group.<br /><br />Character limit: 200.                                                                                                              |
| `preferredTillId`      | Number    | Identifier for a preferred till.                                                                                                                                                        |
| `trackingType`         | Enum      | Type of tracking:<br /><br />- `Default`<br />- `Unified`<br />- `Streak`<br />- `Capping`<br />- `Non continuous streak`                                                               |
| `targetEvaluationType` | Enum      | Evaluation strategy:<br />- `FIXED_CALENDAR_WINDOW`<br />- `CYCLIC_WINDOW`<br />- `PERIOD_AGNOSTIC_WINDOW`                                                                              |
| `totalPeriods`         | Number    | Total number of periods evaluated.                                                                                                                                                      |
| `frequencyType`        | Enum      | Cycle frequency. Supported values: `Monthly`, `Quarterly`, `Half-yearly`, `Yearly`, `Weekly`, `Daily`, `CUSTOM`.                                                                        |
| `frequency`            | Number    | Frequency count relative to `frequencyType`.                                                                                                                                            |
| `recurringCycles`      | Number    | Number of recurring cycles.                                                                                                                                                             |
| `periods`              | Object    | Array of period objects with:<br />- `active`, `description`, `endDate`, `periodStatus`, `refCode`, `startDate`                                                                         |
| `periodStatus`         | Enum      | Milestone cycle status:<br />- `RUNNING`, `UPCOMING`, `NOT_STARTED`                                                                                                                     |
| `targets`              | Object    | Array of target objects with:<br />- `active`, `description`, `expression`, `expressionJson`, `filters`, `entityType`, `entityIds`, `name`, `targetEntity`, `eventName`, `targetType`\* |
| `targetType`\*         | Enum      | Target type (only `VISIT`, `COUNT` supported for EMF event targets).                                                                                                                    |
| `extendedFieldInfo`    | Object    | Used if `targetType = SUM` (not for EMF targets). Includes:<br />- `name`, `aggregateFunction` (`SUM`)                                                                                  |
| `defaultValues`        | Object    | Array of objects with:<br />- `defaultValue` (Integer)                                                                                                                                  |
| `expression`           | String    | Rule condition to meet the target.                                                                                                                                                      |
| `expressionJson`       | String    | JSON expression specifying the rule.                                                                                                                                                    |
| `filters`              | Object    | Entity definition to which the rule applies.                                                                                                                                            |
| `entityType`           | Enum      | Entity context: `STORE`, `ZONE`, `CONCEPT`                                                                                                                                              |
| `entityIds`            | Array     | Entity IDs to apply the filter.                                                                                                                                                         |
| `refCode`              | String    | Reference code for the period.                                                                                                                                                          |
| `startDate`            | Date Time | Start date and time of the period.                                                                                                                                                      |
| `endDate`              | Date Time | End date and time of the period.                                                                                                                                                        |
| `eventName`            | String    | Event name that triggers the target (behavioral/EMF).                                                                                                                                   |
| `targetEntity`         | Enum      | KPI tracked:<br />- `TRANSACTION`, `LINEITEM`, `EVENT`, `REWARDS`                                                                                                                       |
| `defaultValue`         | Integer   | Default value for target evaluation.                                                                                                                                                    |

<br />

```json Sample response for points redemption
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
            "targetType": "VISIT",
            "targetEntity": "EVENT",
            "eventName":"PointsRedemption"
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

<br />

# API error codes

| Code   | Description                                                  |
| :----- | :----------------------------------------------------------- |
| 310069 | Target group name already exists                             |
| 300004 | Invalid input, check all values and ensure they are correct. |
| 310008 | Length of Target rule name cannot exceed 200                 |