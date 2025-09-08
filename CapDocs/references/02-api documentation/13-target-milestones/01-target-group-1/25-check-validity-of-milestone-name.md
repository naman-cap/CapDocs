---
title: Check the Validity of Milestone / Target Name
excerpt: Check the uniqueness of a milestone target name.
api:
  file: v3.json
  operationId: check-validity-of-milestone-name
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---

This API checks if the name provided for a target group, target, streak, streak level, and period is unique within an organisation.

# Prerequisites

-   Authentication: Basic/OAuth authentication
-   Access group: Default access group

# Resource Information

|                        |                             |
| :--------------------- | :-------------------------- |
| URI                    | v3/targetGroups/isValidName |
| HTTP Method            | POST                        |
| Pagination             | No                          |
| Batch support          | NA                          |
| Rate limit information | NA                          |

# API endpoint example

`https://eu.api.capillarytech.com/v3/targetGroups/isValidName`

# Request body

```json
{
    "type": "targetName",
    "value": "SpendsUpwardsOf10K"
}
```

# Request body parameters

| Parameter (Parameters marked as \* are required) | Data Type | Description |
|--------------------------------------------------|-----------|-------------|
| type\*                                           | String    | Milestone / target to check the validity for. You can check for active, inactive and [user-created challenge](https://docs.capillarytech.com/reference/user-created-challenges) related milestones.  \n  \nSupported values are: `targetGroupName`, `streakName`, `targetName`, `streakLevelName`, `periodName` |
| value\*                                          | String    | Name to be checked for uniqueness. The name is case-insensitive, meaning "Target" and "target" are considered the same. |

# Response body

```json
{
    "data": true,
    "errors": null,
    "warnings": null
}
```
```json Name is not unique
{
    "data": false,
    "errors": null,
    "warnings": null
}
```
```json Milestone type is invalid
{
    "data": null,
    "errors": [
        {
            "code": 310145,
            "message": "Invalid key is passed"
        }
    ],
    "warnings": null
}
```

# Response body parameters

| Parameter | Type    | Description                                                |
| :-------- | :------ | :--------------------------------------------------------- |
| data      | Boolean | The value is true if the name is unique, else it is false. |
| errors    | Object  | Errors, if any.                                            |
| warnings  | Object  | Warnings, if any.                                          |

# API specific errors

| Error Code | Description           | Reason                                  |
| :--------- | :-------------------- | :-------------------------------------- |
| 310145     | Invalid key is passed | The milestone / target type is invalid. |