---
title: Get active targets
excerpt: ''
api:
  file: v3.json
  operationId: get-active-targets
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
This API gets active targets for an enrolled customer.

A [target](https://docs.capillarytech.com/docs/milestones-new-flow)refers to a specific value or event that a user needs to achieve within a given period to receive certain benefits. A target that is currently active for a user is an active target.

> 👍 Note
>
> For detailed information about our APIs and for hands-on testing, refer documentation in [API overview ](https://docs.capillarytech.com/reference/apioverview) and step-by-step guide on [making your first API call](https://docs.capillarytech.com/reference/make-your-first-api-call).

# Prerequisites

*   Basic authentication
*   Default access group

# Resource information

|                        |                                      |
| :--------------------- | :----------------------------------- |
| URI                    | v3/users`\{userId\}`/enrolledTargets |
| HTTP Method            | GET                                  |
| Pagination             | No                                   |
| Batch support          | No                                   |
| Rate limit information | None                                 |

# Endpoint example

`https://eu.api.capillarytech.com/v3/users/19721/enrolledTargets`

```json cURL
curl --location 'https://eu.api.capillarytech.com/v3/users/564703252/enrolledTargets' \
--header 'Content-Type: application/json' \
--header 'Authorization: Basic dGpfY2FwaWxsYXJ5OjV' 
```

# Request Path Parameters

| Field  | Data Type | Description                                                                                                                                     |
| :----- | :-------- | :---------------------------------------------------------------------------------------------------------------------------------------------- |
| userID | Integer   | The customer ID of the user. For more information refer to the [Get Customer ID API](https://docs.capillarytech.com/reference/get-customer-id). |

# Request query parameters

| Field                  | Data Type | Description                                                                                                                                                                                                                                                                                                                    |
| :--------------------- | :-------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| targetRuleIds          | Long      | Rule ID of the target. targetRuleIds query parameter accepts the individual target ids that are generated while creation of a target or targets under a target group. You can add multiple rule IDs separated by commas.                                                                                                       |
| trackingDate           | Date      | The date when the target was created. Epoch time format                                                                                                                                                                                                                                                                        |
| enrollmentType         | String    | The target enrollment type refers to the method used to enroll customers and set target values. Possible values are: TRANSACTION, IMPORT, and AUDIENCE\_FILTER. \<br> **TRANSACTION**: Enroll loyalty customers who transact during the target period. \<br> **IMPORT**: Import a list of customers with custom target values. |
| includeOnlyUserCreated | Boolean   | Include only the [user-created](https://docs.capillarytech.com/reference/user-created-challenges)  targets. A user-created target is a promotion that rewards customers for achieving goals they set themselves.                                                                                                               |

# Response body

```json Filtered by RuleID, Date and IMPORT
{
    "data": [
        {
            "id": 2579,
            "attribution": {
                "createdOn": "2024-08-09T08:05:59.000+0000",
                "lastUpdatedOn": "2024-08-09T08:05:59.000+0000",
                "lastUpdatedBy": {
                    "id": 4,
                    "code": "First",
                    "description": null,
                    "name": "User",
                    "type": "ADMIN_USER"
                },
                "createdBy": {
                    "id": 4,
                    "code": "First",
                    "description": null,
                    "name": "User",
                    "type": "ADMIN_USER"
                }
            },
            "name": "Custom Enroll",
            "emfRuleSetId": 2030169,
            "emfUnrolledRulesetId": 2030168,
            "targetType": "GROSS_SALES",
            "targetEntity": "LINEITEM",
            "targetGroupId": 1898,
            "active": true,
            "expression": "true",
            "expressionJson": "\n{\n  \"arity\":\"literal\",\n  \"value\":\"true\",\n  \"type\":\"boolean:primitive\"\n}",
            "filters": [
                {
                    "entityType": "ZONE",
                    "entityIds": [
                        50674361,
                        50675571
                    ]
                }
            ],
            "enrolmentMethod": "IMPORT",
            "targetPeriodDefaultValuesMap": {}
        }
    ],
    "errors": null,
    "warnings": null
}
```
```json enrollmentType: TRANSACTION
{
    "data": [
        {
            "id": 50,
            "attribution": {
                "createdOn": "2022-08-09T10:46:00.000+0000",
                "lastUpdatedOn": "2022-08-09T10:46:00.000+0000",
                "lastUpdatedBy": {
                    "id": 75015489,
                    "code": "1491395484_919600167818",
                    "description": "",
                    "name": "Achyuthanandan S",
                    "type": "ADMIN_USER"
                },
                "createdBy": {
                    "id": 75015489,
                    "code": "1491395484_919600167818",
                    "description": "",
                    "name": "Achyuthanandan S",
                    "type": "ADMIN_USER"
                }
            },
            "name": "Mentorship",
            "emfRuleSetId": 19029,
            "emfUnrolledRulesetId": 19028,
            "targetType": "SALES",
            "targetEntity": "LINEITEM",
            "targetGroupId": 40,
            "active": true,
            "expression": "currentTxn.basketAmountSumNonDiscounted>25",
            "expressionJson": "\n{\n  \"arity\":\"binary_operation\",\n  \"value\":\">\",\n  \"type\":\"boolean:primitive\",\n  \"operands\":[\n    {\n      \"arity\":\"object_dereference\",\n      \"type\":\"real:object:primitive\",\n      \"operands\":[\n        {\n          \"arity\":\"name\",\n          \"value\":\"currentTxn\",\n          \"type\":\"tx:object:primitive\"\n        },\n        {\n          \"arity\":\"name\",\n          \"value\":\"basketAmountSumNonDiscounted\",\n          \"type\":\"real:object:primitive\"\n        }\n      ]\n    },\n    {\n      \"arity\":\"literal\",\n      \"value\":\"25\",\n      \"type\":\"number:primitive\"\n    }\n  ]\n}",
            "filters": [
                {
                    "entityType": "STORE",
                    "entityIds": [
                        75027647,
                        75046489,
                        75027642,
                        75037225,
                        75051583,
                        75051591,
                        75036444,
                        75061222,
                        75027644,
                        75056850,
                        75056852,
                        75046525,
                        75052295,
                        75027631,
                        75046512,
                        75049264,
                        75049270,
                        75027635,
                        75027639,
                        75027637,
                        75043566,
                        75027640,
                        75049268,
                        75027632,
                        75055796,
                        75055797,
                        75061682,
                        75061683,
                        75061684,
                        75061685,
                        75052145,
                        75046491,
                        75027633,
                        75027634,
                        75027643,
                        75027641,
                        75027636,
                        75043257,
                        75043255,
                        75043253,
                        75049266,
                        75043181,
                        75043183,
                        75043185,
                        75043578,
                        75043576,
                        75056557,
                        75056559,
                        75045026,
                        75055010,
                        75055426,
                        75055427,
                        75049256,
                        75049272,
                        75049274,
                        75027648,
                        75027645,
                        75027646,
                        75027638,
                        75046490
                    ]
                }
            ],
            "enrolmentMethod": "TRANSACTION",
            "targetPeriodDefaultValuesMap": {}
        }
    ],
    "errors": null,
    "warnings": null

```
```Text Error: Invalid User ID
{
    "data": null,
    "errors": [
        {
            "code": 310011,
            "message": "Invalid userId"
        }
    ],
    "warnings": null
}
```
```Text Error: Invalid enrollment type
{
    "data": null,
    "errors": [
        {
            "code": 310130,
            "message": "Invalid enrollment type as input"
        }
    ],
    "warnings": null
}
```

# Response parameter

| Field                        | Data Type     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| :--------------------------- | :------------ | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| id                           | Integer       | Unique identifier for the [target](https://docs.capillarytech.com/docs/view-loyalty_details#targets)                                                                                                                                                                                                                                                                                                                                                                                    |
| Attribution                  | Object        | Attributes of the target.                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| -createdOn                   | String        | Last update date and time for the target. ISO 8601 format.                                                                                                                                                                                                                                                                                                                                                                                                                              |
| -lastUpdatedOn               | String        | Last update date and time for the target. ISO 8601 format.                                                                                                                                                                                                                                                                                                                                                                                                                              |
| -lastUpdatedBy               | Object        | Details on the latest updates of the target                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --id                         | Integer       | ID of the last user who updated the target.                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --description                | String        | Description related information of the last user who updated the target.                                                                                                                                                                                                                                                                                                                                                                                                                |
| --name                       | String        | Name of the last user who updated the target.                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --type                       | String        | Type of the last user who updated the target. \<br>**Standard User:** Limited access to their own profile; cannot manage users/permissions; permissions must be assigned by an Org Owner or Admin. \<br>**Admin User:** Can manage Standard Users and permissions, with additional admin abilities beyond a Standard User. \<br>**Org Owner:** Full authority over the organization, managing all users/permissions, with access to all modules; must be at least one per organization. |
| -createdBy                   | Object        | Details on the creation of the target.                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --id                         | Integer       | ID of the user who created the target.\`                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --description                | String        | Description related information of the user who created the target.                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --name                       | String        | Name of the user who created the target.                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --type                       | String        | Type of the user who created the target. \<br>**Standard User:** Limited access to their own profile; cannot manage users/permissions; permissions must be assigned by an Org Owner or Admin. \<br>**Admin User:** Can manage Standard Users and permissions, with additional admin abilities beyond a Standard User. \<br>**Org Owner:** Full authority over the organization, managing all users/permissions, with access to all modules; must be at least one per organization.      |
| name                         | String        | Name of the target                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| emfRuleSetId                 | Integer       | ID of the rule set associated with the The Event Management Framework (EMF) This refers to various customer-level events within loyalty workflows, such as return transactions and points redemptions.                                                                                                                                                                                                                                                                                  |
| targetType                   | String        | Type of target. \<br>**COUNT:** This type tracks the number of times a specific action or event occurs. \<br>**VISIT:** This type tracks the number of visits or occurrences of a specific event. \<br>**SUM:** This type is used when the target involves summing up values, such as the total amount spent or the total number of items added to a cart.                                                                                                                              |
| targetEntity                 | String        | Type of target entity. \<br>**TRANSACTION** and **LINEITEM**: transactional KPIs \<br>**EVENT**: behavioral events and EMF events \<br>To , use **REWARDS**: rewards-based metrics, such as points                                                                                                                                                                                                                                                                                      |
| targetGroupId                | Integer       | Group ID of the target. Target groups are entities within which individual targets can be created.                                                                                                                                                                                                                                                                                                                                                                                      |
| active                       | Boolean       | Indicates whether the target is active or not.                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| expression                   | String        | The expression associated with the target.                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| expressionJson               | String (JSON) | JSON representation of the expression.                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| filters                      | Array         | List of filters applied to the target.                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| enrolmentMethod              | String        | The method of enrolment for the target. Supported values: **TRANSACTION**, **IMPORT**                                                                                                                                                                                                                                                                                                                                                                                                   |
| targetPeriodDefaultValuesMap | Array         | Lists the default target period and ID. A target period is a specific time frame within a target group during which certain goals or milestones are set to be achieved.                                                                                                                                                                                                                                                                                                                 |
| errors                       | Object        | List of errors, if any.                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| warnings                     | Object        | List of warnings, if any.                                                                                                                                                                                                                                                                                                                                                                                                                                                               |

# Error codes

| Code   | Description                      |
| :----- | :------------------------------- |
| 310011 | Invalid userId                   |
| 310130 | Invalid enrollment type as input |