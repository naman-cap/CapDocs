---
title: Edit streak
excerpt: ''
api:
  file: v3.json
  operationId: edit-streaks
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
A streak refers to a consecutive series of actions or engagements by a customer, based on which loyalty benefits are provided.

Only the target-related part of the streak can be edited once the streak is created. The target-group-related section and the period-related section are not editable once created. So, to edit a create, first the target-group ID & the target ID needs to be figured out.

Then, by using the update target API, we can edit the following components of the streak.

1. expression
2. expressionJson
3. filters (scope filters & rule filters)
4. defaultValues

<br />

> 👍 Note
>
> For detailed information about our APIs and for hands-on testing, refer documentation in [API overview](https://docs.capillarytech.com/reference/apioverview) and  step-by-step guide on making your first API call in [Make your first API call](https://docs.capillarytech.com/reference/make-your-first-api-call) .

# Prerequisites

*   Authentication: Basic/OAuth authentication
*   Default access group

# Resource information

|               |                                                     |
| :------------ | :-------------------------------------------------- |
| URI           | v3/targetGroups`\{groupId\}`/targets`\{targetIdd\}` |
| HTTP method   | POST                                                |
| Pagination    | NA                                                  |
| Rate limit    | NA                                                  |
| Batch support | NA                                                  |

# API endpoint example

`https://eucrm.cc.capillarytech.com/v3/targetGroups\{groupId\}/targets\{targetIdd\}`

<br />

```json
{
    "data": {
        "id": 32,
        "name": "TGF19",
        "fromDate": "2021-05-27",
        "toDate": "2021-05-28",
        "active": true,
        "preferredTillId": 0,
        "periods": [
            {
                "id": 74,
                "attribution": {
                    "createdOn": "2022-03-28T13:28:32.602+0000",
                    "lastUpdatedOn": "2022-03-28T13:28:32.602+0000",
                    "lastUpdatedBy": {
                        "id": 75040399,
                        "code": "bukl.till",
                        "description": "",
                        "name": "bukl.till",
                        "type": "TILL"
                    },
                    "createdBy": {
                        "id": 75040399,
                        "code": "bukl.till",
                        "description": "",
                        "name": "bukl.till",
                        "type": "TILL"
                    }
                },
                "startDate": "2022-03-29",
                "endDate": "2022-05-29",
                "refCode": "string",
                "periodStatus": "NOT_STARTED",
                "targetGroupId": 32,
                "description": "string",
                "active": true
            }
        ],
        "activePeriod": {
            "startDate": "2022-03-28",
            "endDate": "2022-04-29",
            "refCode": "gdf123",
            "periodStatus": "RUNNING",
            "description": "Samplr description",
            "active": true
        },
        "totalPeriods": 0,
        "description": "TGF19",
        "recurringCycles": 2,
        "frequency": 5,
        "targetCycleStartDate": "2021-05-28T08:41:00.529Z"
    },
    "errors": null
}
```

## Request Body Parameters

| Parameter Name         | Data Type | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| ---------------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `active`               | Boolean   | Indicates if the tracking is active or not.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| `description`          | String    | A brief description of the target group or period.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| `name`                 | String    | The name identifier for the target group or target. <br /><br />Character limit: 200.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| `preferredTillId`      | Number    | Identifier for a preferred till.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| `trackingType`         | String    | Type of tracking. Supported values:<br /><br />- `Default`<br />- `Unified`<br />- `Streak`<br />- `Capping`                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| `targetEvaluationType` | String    | Target evaluation strategy. Supported values:<br />- `FIXED_CALENDAR_WINDOW`<br />- `CYCLIC_WINDOW`<br />- `PERIOD_AGNOSTIC_WINDOW`                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| `totalPeriods`         | Number    | Total number of periods to evaluate tracking.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| `frequencyType`        | Enum      | Frequency of each cycle. Supported: `Monthly`, `Quarterly`, `Half-yearly`, `Yearly`, `Weekly`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| `frequency`            | Number    | Frequency count relevant to the `frequencyType`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| `recurringCycles`      | Number    | Number of cycles for recurring tracking.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `periods`              | Object\[] | Array of period objects, each with:<br />- `active` (Boolean)<br />- `description` (String)<br />- `endDate` (Date Time)<br />- `periodStatus` (String)<br />- `refCode` (String)<br />- `startDate` (Date Time)                                                                                                                                                                                                                                                                                                                                                                           |
| `targets`              | Object\[] | Array of target objects, each with:<br />- `active` (Boolean)<br />- `description` (String)<br />- `expression`\* (String)<br />- `expressionJson`\* (String)<br />- `filters`\* (Object)<br />- `entityType`\* (Enum: `STORE`, `ZONE`, `CONCEPT`)<br />- `entityIds`\* (Array)<br />- `name` (String)<br />- `targetEntity` (Enum: `TRANSACTION`, `LINEITEM`, `EVENT`, `REWARDS`)<br />- `eventName` (String)<br />- `targetType` (Enum: `QUANTITY`, `SALES`, `COUNT`, `VISIT`, `GROSS_SALES`, `REGULAR_POINTS`, `PROMOTIONAL_POINTS`, `ALL_POINTS`, `EXTENDED_FIELD`, `EVENT_ATTRIBUTE`) |
| `extendedFieldInfo`    | Object    | Only for `targetType = EVENT_ATTRIBUTE`. Includes:<br />- `name` (String)<br />- `aggregateFunction` (Enum: `SUM`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| `defaultValues`        | Object\[] | Array of objects with:<br />- `defaultValue`\* (Integer)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `streaks`              | Object\[] | Array of streak objects with:<br />- `name` (String)<br />- `targetCountOfSequence` (Integer)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |

<Note title="Note">
Parameters marked with `*` are required.
</Note>

# Response parameters

| Field                 | Datatype           | Description                                                        |
| --------------------- | ------------------ | ------------------------------------------------------------------ |
| id                    | integer            | Unique identifier for the group.                                   |
| name                  | string             | Name of the group.                                                 |
| active                | boolean            | Indicates if the group is active.                                  |
| preferredTillId       | integer            | Preferred till ID, indicating no specific preference with 0.       |
| totalPeriods          | integer            | Total number of periods specified.                                 |
| description           | string             | Description of the /roup.                                          |
| targetEvaluationType  | string             | Type of target evaluation, e.g., "FIXED\_CALENDAR\_WINDOW".        |
| targetCycleStartDate  | string (date-time) | Start date and time for the target cycle.                          |
| targetCycleEndDate    | string (date-time) | End date and time for the target cycle (if applicable).            |
| frequencyType         | string             | Frequency type, e.g., "CUSTOM" (if applicable).                    |
| trackingType          | string             | Type of tracking, e.g., "STREAKS" (if applicable).                 |
| fromDate              | string (date)      | Start date for the setting (if applicable).                        |
| toDate                | string (date)      | End date for the setting (if applicable).                          |
| recurringCycles       | integer            | Number of recurring cycles specified (if applicable).              |
| frequency             | integer            | Frequency value set for the setting (if applicable).               |
| id                    | integer            | Unique identifier for each period.                                 |
| startDate             | string (date)      | Start date for each period.                                        |
| endDate               | string (date)      | End date for each period.                                          |
| refCode               | string             | Reference code for each period.                                    |
| periodStatus          | string             | Status of each period, e.g., "RUNNING", "NOT\_STARTED".            |
| targetGroupId         | integer            | Identifier linking each period to a target group.                  |
| description           | string             | Description of each period.                                        |
| active                | boolean            | Indicates if each period is active.                                |
| id                    | integer            | Unique identifier for each streak.                                 |
| name                  | string             | Name of each streak.                                               |
| targetCountOfSequence | integer            | Target count of sequence for each streak.                          |
| id                    | integer            | Unique identifier for each target.                                 |
| name                  | string             | Name of each target.                                               |
| targetType            | string             | Type of each target, e.g., "SALES".                                |
| targetEntity          | string             | Type of entity targeted by each target, e.g.                       |
| eventName             | string             | Name of the event associated with each target.                     |
| description           | string             | Description of each target.                                        |
| active                | boolean            | Indicates if each target is active.                                |
| expression            | string             | Expression defining the criteria for each target.                  |
| expressionJson        | string (JSON)      | Target expression in JSON format for each target.                  |
| entityType            | string             | Type of entity for the filter of each target.                      |
| entityIds             | array of integers  | IDs of entities for the filter of each target.                     |
| enrolmentMethod       | string             | Method of enrolment for each target.                               |
| defaultValue          | float              | Specifies a default value for the target criteria for each target. |

```json
{
    "data": {
        "id": 32,
        "name": "TGF19",
        "fromDate": "2021-05-27",
        "toDate": "2021-05-28",
        "active": true,
        "preferredTillId": 0,
        "periods": [
            {
                "id": 74,
                "attribution": {
                    "createdOn": "2022-03-28T13:28:32.602+0000",
                    "lastUpdatedOn": "2022-03-28T13:28:32.602+0000",
                    "lastUpdatedBy": {
                        "id": 75040399,
                        "code": "bukl.till",
                        "description": "",
                        "name": "bukl.till",
                        "type": "TILL"
                    },
                    "createdBy": {
                        "id": 75040399,
                        "code": "bukl.till",
                        "description": "",
                        "name": "bukl.till",
                        "type": "TILL"
                    }
                },
                "startDate": "2022-03-29",
                "endDate": "2022-05-29",
                "refCode": "string",
                "periodStatus": "NOT_STARTED",
                "targetGroupId": 32,
                "description": "string",
                "active": true
            }
        ],
        "activePeriod": {
            "startDate": "2022-03-28",
            "endDate": "2022-04-29",
            "refCode": "gdf123",
            "periodStatus": "RUNNING",
            "description": "Samplr description",
            "active": true
        },
        "totalPeriods": 0,
        "description": "TGF19",
        "recurringCycles": 2,
        "frequency": 5,
        "targetCycleStartDate": "2021-05-28T08:41:00.529Z"
    },
    "errors": null
}
```