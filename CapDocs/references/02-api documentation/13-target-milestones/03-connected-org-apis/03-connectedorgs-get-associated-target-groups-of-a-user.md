---
title: Get Associated Target Groups of a User
excerpt: ''
api:
  file: v1.json
  operationId: connectedorgs-get-associated-target-groups-of-a-user
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
This API allows you to retrieve the details of all the associated target groups, including the user's milestones and streaks information.

# API endpoint example

`https://eu.api.capillarytech.com/api_gateway/intouch-api-v3/v3.1/users/347286146/targetGroups?includeInactive=true`

# Prerequisites

*   Authentication; Basic or OAuth authentication details
*   Access group resource - NA

# Resource information

|                       |                                                                                     |
| :-------------------- | :---------------------------------------------------------------------------------- |
| URI                   | /api\_gateway/intouch-api-v3/v3.1/users/347286146/targetGroups?includeInactive=true |
| HTTP method           | GET                                                                                 |
| Pagination supported? | NO                                                                                  |
| Rate limit            | NA                                                                                  |
| Batch support         | NA                                                                                  |

# Headers

| Header           | Description                                                                                                                                                                                                                                                                                                                                                                                                              |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `DATA-SCOPE-ORG` | List of Organization IDs.                                                                                                                                                                                                                                                                                                                                                                                                |
| `DATA-SCOPE`     | Scopes define what data can be accessed using the API. You can use scopes to control access to data from a parent or child organization. Defining a scope ensures that the response contains only data from the respective organization. Supported headers: `SELF`, `OTHER`, and `ALL`. Refer to connected orgs [data scopes](https://docs.capillarytech.com/reference/connected-orgs-data-scopes) for more information. |

# Request path parameters

| (Parameters marked with \* are mandatory) | Type | Description                                                                                                                         |
| ----------------------------------------- | ---- | ----------------------------------------------------------------------------------------------------------------------------------- |
| UserID\*                                  | Long | The userId represents the unique identifier of a user. It allows you to retrieve the target groups associated with a specific user. |

# Request query parameters

| Parameter (Parameters marked with \* are mandatory) | Type    | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --------------------------------------------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `includeInactive`                                   | Boolean | The `includeInactive` parameter determines whether the API response includes information about all cycles within a milestone or only the active cycle. \<br> \<br> **False**: The API response for the milestone will include information only about the current active cycle. For example, if there are four cycles (C1, C2, C3, and C4) in a milestone named ABC and the current cycle is C3, then setting `includeInactive` to `false` will return information only about cycle C3, where the user has performed an activity.  **True**: The API response for the milestone will include information about all cycles, both active and inactive. In the same example, setting `includeInactive` to `true` will return information about all four cycles (C1, C2, C3, and C4) within the milestone ABC. |
| `targetRuleId`                                      | Long    | Rule ID of the target. Use this to fetch information about a particular target in the API response.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| `includeInactiveTargets`                            | Boolean | The `includeInactiveTargets` parameter determines whether the API response includes information about all milestones or only the active ones. \<br> \<br> **False**: The API response will include information on all active milestones. For example: If there are four milestones (M1, M2, M3, M4) and milestone M1 is deactivated, then setting `includeInactiveTargets` to `false` will return information only about milestones M2, M3, and M4. \<br> \<br> **True**: The API response for milestones will include information about ALL the milestones present in the organization.                                                                                                                                                                                                                  |

```curl
curl --location 'http://{host}/api_gateway/intouch-api-v3/v3.1/users/347286146/targetGroups?includeInactive=true' \
--header 'DATA-SCOPE: SELF' \
--header 'DATA-SCOPE-ORG: 50363'
```

# Response Parameter

<br />

# Response parameters

| Parameter                                  | Data Type        | Description                                                                                                                                                                                                                                                                                                |
| :----------------------------------------- | :--------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **userId**                                 | Long             | The unique identifier of the customer.                                                                                                                                                                                                                                                                     |
| **customer**                               | Object           | An object containing information about customer.                                                                                                                                                                                                                                                           |
| **id**                                     | Integer          | The unique identifier of the customer.                                                                                                                                                                                                                                                                     |
| **profiles**                               | Array of objects | An array containing profiles details of the customer                                                                                                                                                                                                                                                       |
| **firstName**                              | String           | The first name of the customer.                                                                                                                                                                                                                                                                            |
| **lastName**                               | String           | The last name of the customer.                                                                                                                                                                                                                                                                             |
| **commChannels**                           | Array of objects | An array containing communication information of the customer.                                                                                                                                                                                                                                             |
| **type**                                   | String           | The type of communication channel from which we connect to customer. (e.g., mobile, email).                                                                                                                                                                                                                |
| **accountId**                              | Enum             | For sources that support multiple accounts, For example, FACEBOOK, WEB\_ENGAGE, WECHAT, MOBILE\_APP.                                                                                                                                                                                                       |
| **value**                                  | String           | The value of the communication channel (e.g., phone number, email address).                                                                                                                                                                                                                                |
| **primary**                                | Boolean          | this indicates that the above channel is primary or not                                                                                                                                                                                                                                                    |
| **verified**                               | Boolean          | Indicates if the communication channel has been verified.                                                                                                                                                                                                                                                  |
|  **subscribed**                            | Boolean          | Pass true if the identifier is subscribed for the org's newsletters (bulk messages).                                                                                                                                                                                                                       |
| **attributes**                             | Object           | Additional Details of the identifier.                                                                                                                                                                                                                                                                      |
| **source**                                 | String           | The source from which the customer profile was created (e.g., instore).                                                                                                                                                                                                                                    |
|  **accountId**                             | String           | The account ID of the customer .                                                                                                                                                                                                                                                                           |
| **userId**                                 | Integer          | The unique identifier for the customer.                                                                                                                                                                                                                                                                    |
| **orgSourceId**                            | Integer          | The organization source ID for the customer.                                                                                                                                                                                                                                                               |
| **loyaltyInfo**                            | Object           | Containing loyalty information of the customer.                                                                                                                                                                                                                                                            |
| **attribution**                            | Object           | Containing attribution information for the loyalty information.                                                                                                                                                                                                                                            |
|  **createdOn**                             | String           | The date and time when the loyalty information was created.                                                                                                                                                                                                                                                |
| **lastUpdatedOn**                          | String           | The date and time when the loyalty information was last updated.                                                                                                                                                                                                                                           |
| **lastUpdatedBy**                          | Object           | The information about the user who last updated the loyalty information.                                                                                                                                                                                                                                   |
| **id**                                     | Integer          | The unique identifier for the user who last updated the loyalty information.                                                                                                                                                                                                                               |
| **code**                                   | Null             | The code associated with the last updated user.                                                                                                                                                                                                                                                            |
|  **description**                           | String           | The description about the last update.                                                                                                                                                                                                                                                                     |
|  **name**                                  | Null             | Name of the user last updated.                                                                                                                                                                                                                                                                             |
|  **type**                                  | Enum             | Type of the customer identifier.                                                                                                                                                                                                                                                                           |
| **createdBy**                              | Object           | Containing information about the user who created the loyalty information.                                                                                                                                                                                                                                 |
|  **id**                                    | Integer          | The unique identifier for the user who created the loyalty information.                                                                                                                                                                                                                                    |
| **code**                                   | Null             | The code associated with the last updated user.                                                                                                                                                                                                                                                            |
|  **description**                           | String           | The description about the last update.                                                                                                                                                                                                                                                                     |
| **name**                                   | Null             | Name of the user last updated.                                                                                                                                                                                                                                                                             |
| **type**                                   | Enum             | Type of the customer identifier.                                                                                                                                                                                                                                                                           |
| **loyaltyType**                            | String           | The type of loyalty program.                                                                                                                                                                                                                                                                               |
|  **lifetimePurchases**                     | Float            | The total amount of purchases made by the customer in his entire lifetime.                                                                                                                                                                                                                                 |
| **customFields**                           | Object           | Containing custom fields of the customer.                                                                                                                                                                                                                                                                  |
| **gender**                                 | String           | The gender of the customer.                                                                                                                                                                                                                                                                                |
| **targetGroups**                           | Array of objects | Containing information about target groups associated with customer.                                                                                                                                                                                                                                       |
| **id**                                     | Integer          | The unique identifier for the target group.                                                                                                                                                                                                                                                                |
|  **attribution**                           | Object           | Containing attribution information for the target group.                                                                                                                                                                                                                                                   |
|  **createdOn**                             | String           | The date and time when the target group was created.                                                                                                                                                                                                                                                       |
| **lastUpdatedOn**                          | String           | The date and time when the target group was last updated.                                                                                                                                                                                                                                                  |
|         **lastUpdatedBy**                  | Object           | Containing information about the user who last updated the target group.                                                                                                                                                                                                                                   |
|             **id**                         | Integer          | The unique identifier for the user who last updated the target group.                                                                                                                                                                                                                                      |
|             **code**                       | String           | The code associated with the user who last updated the target group.                                                                                                                                                                                                                                       |
|             **description**                | String           | The description associated with the user who last updated the target group.                                                                                                                                                                                                                                |
|             **name**                       | String           | The name of the user who last updated the target group.                                                                                                                                                                                                                                                    |
|             **type**                       | String           | The type of the user who last updated the target group like ADMIN\_USER.                                                                                                                                                                                                                                   |
|         **createdBy**                      | Object           | Containing information about the user who created the target group.                                                                                                                                                                                                                                        |
|             **id**                         | Integer          | The unique identifier for the user who created the target group.                                                                                                                                                                                                                                           |
|             **code**                       | String           | The code associated with the user who created the target group.                                                                                                                                                                                                                                            |
|             **description**                | String           | The description of the user who created the target group.                                                                                                                                                                                                                                                  |
|             **name**                       | String           | The name of the user who created the target group.                                                                                                                                                                                                                                                         |
|             **type**                       | String           | The type of the user who created the target group like ADMIN\_USER.                                                                                                                                                                                                                                        |
|     **targets**                            | Array of objects | Containing information about targets within the target group.                                                                                                                                                                                                                                              |
|         **targetId**                       | Integer          | The unique identifier for the target.                                                                                                                                                                                                                                                                      |
|         **orgId**                          | Integer          | Unique ID of the associated organization.                                                                                                                                                                                                                                                                  |
|         **periodId**                       | Integer          | The unique identifier for the period.                                                                                                                                                                                                                                                                      |
|         **periodRefCode**                  | Sting            | The reference code for the period of the target.                                                                                                                                                                                                                                                           |
|         **periodStartDate**                | String           | The start date of the period for the target.                                                                                                                                                                                                                                                               |
|         **periodEndDate**                  | String           | The end date of the period for the target.                                                                                                                                                                                                                                                                 |
|         **targetValue**                    | Float            | The target value to be achieved.                                                                                                                                                                                                                                                                           |
|         **targetAchievedValue**            | Float            | The value achieved towards the target.                                                                                                                                                                                                                                                                     |
|         **targetType**                     | Enum             | The type of target: <br />SUM, COUNT, VISIT. <br />Refer to this [API documentation](https://docs.capillarytech.com/reference/create-target-groups#request-body-parameters) for more information.                                                                                                          |
|         **targetEntity**                   | Enum             | The KPI on which the target is tracked. <br />TRANSACTION, LINEITEM, EVENT, REWARDS. <br />Refer to this [API documentation](https://docs.capillarytech.com/reference/create-target-groups#request-body-parameters) for more information.                                                                  |
|         **targetRuleId**                   | Integer          | The rule identifier for the target.                                                                                                                                                                                                                                                                        |
|         **enrolledOn**                     | String           | The date and time when the target was enrolled.                                                                                                                                                                                                                                                            |
|         **eventName**                      | String           | The name of the event associated with the target.                                                                                                                                                                                                                                                          |
|         **periodStartDateWithTimeStamp**   | String           | The start date and time of the period associated with the target rule.                                                                                                                                                                                                                                     |
|         **periodEndDateWithTimeStamp**     | String           | The end date and time of the period associated with the target rule.                                                                                                                                                                                                                                       |
|         **targetAchievedDateTime**         | String           | The achieved date and time of the period associated with the target rule.                                                                                                                                                                                                                                  |
|         **streakAchievedDateTime**         | String           | The achieved date and time of the period associated with the streak rule.                                                                                                                                                                                                                                  |
|         **currentPeriod**                  | Boolean          | Indicates if the target is for the current period.                                                                                                                                                                                                                                                         |
|         **milestones**                     | Array of objects | Containing information about milestones for the target.                                                                                                                                                                                                                                                    |
|             **id**                         | Integer          | The unique identifier for the milestone.                                                                                                                                                                                                                                                                   |
|             **triggerName**                | String           | The name of the trigger of the milestone.                                                                                                                                                                                                                                                                  |
|             **triggerValue**               | Float            | The value of the trigger of the milestone.                                                                                                                                                                                                                                                                 |
|             **isAchieved**                 | Boolean          | Indicates if the milestone has been achieved.                                                                                                                                                                                                                                                              |
|         **streaks**                        | Array            | An array of streaks for the target group.                                                                                                                                                                                                                                                                  |
|             **userStreakId**               | Integer          | The user streak ID.                                                                                                                                                                                                                                                                                        |
|             **streakId**                   | Integer          | The streak ID.                                                                                                                                                                                                                                                                                             |
|             **streakName**                 | String           | The name of the streak.                                                                                                                                                                                                                                                                                    |
|             **status**                     | String           | The status of the streak (For Example- ACHIEVED).                                                                                                                                                                                                                                                          |
|             **currentCount**               | Integer          | The current count of the streak.                                                                                                                                                                                                                                                                           |
|             **totalTargetCountOfSequence** | Integer          | The total target count of the streak sequence.                                                                                                                                                                                                                                                             |
|             **streakAchievedUserTargetId** | String           | The ID of the streak achieved by the user.                                                                                                                                                                                                                                                                 |
|     **targetEvaluationType**               | Enum             | The type of evaluation for the target group : <br />FIXED\_CALENDAR\_WINDOW <br />CYCLIC\_WINDOW <br />PERIOD\_AGNOSTIC\_WINDOW <br />Refer to this [API documentation](https://docs.capillarytech.com/reference/create-target-groups#request-body-parameters) for more information.                       |
| **trackingType**                           | Enum             | The type of target for tracking the created milestone: <br /><br />- Default<br />- Unified<br />- Streak<br />- Capping<br />- Non continuous streak <br />Refer to this [API documentation](https://docs.capillarytech.com/reference/create-target-groups#request-body-parameters) for more information. |
| **errors**                                 | Object           | Error in the API call if any.                                                                                                                                                                                                                                                                              |
| **warnings**                               | Object           | Warning in the API call if any.                                                                                                                                                                                                                                                                            |

<br />

```json Get all milestones
{
    "pagination": {
        "limit": 10,
        "offset": 0,
        "total": 20
    },
    "data": [
        {
            "id": 23113,
            "attribution": {
                "createdOn": "2024-04-02T10:35:15.000+0530",
                "lastUpdatedOn": "2024-04-02T10:35:15.000+0530",
                "lastUpdatedBy": {
                    "id": 50685529,
                    "code": "tom.sawyer",
                    "description": "",
                    "name": "Tom Sawyer",
                    "type": "ADMIN_USER"
                },
                "createdBy": {
                    "id": 50685529,
                    "code": "tom.sawyer",
                    "description": "",
                    "name": "Tom Sawyer",
                    "type": "ADMIN_USER"
                }
            },
            "name": "testsub",
            "active": true,
            "preferredTillId": 50681568,
            "activePeriod": {
                "id": 28714,
                "attribution": {
                    "createdOn": "2024-04-02T10:35:15.000+0530",
                    "lastUpdatedOn": "2024-04-02T10:35:15.000+0530",
                    "lastUpdatedBy": {
                        "id": 50685529,
                        "code": "tom.sawyer",
                        "description": "",
                        "name": "Tom Sawyer",
                        "type": "ADMIN_USER"
                    },
                    "createdBy": {
                        "id": 50685529,
                        "code": "tom.sawyer",
                        "description": "",
                        "name": "Tom Sawyer",
                        "type": "ADMIN_USER"
                    }
                },
                "startDate": "2024-04-02",
                "endDate": "2024-05-01",
                "refCode": "Cycle_1",
                "periodStatus": "RUNNING",
                "targetGroupId": 23113,
                "active": true
            },
            "totalPeriods": 1,
            "description": "testsub",
            "targetEvaluationType": "FIXED_CALENDAR_WINDOW",
            "recurringCycles": -1,
            "frequency": 0,
            "targetCycleStartDate": "2024-04-02T05:04:45.000Z",
            "targetCycleEndDate": "2024-05-31T18:30:00.000Z",
            "frequencyType": "MONTHLY",
            "trackingType": "DEFAULT",
            "createdOn": 1712034315000,
            "targets": [
                {
                    "id": 43653,
                    "attribution": {
                        "createdOn": "2024-04-02T10:35:16.000+0530",
                        "lastUpdatedOn": "2024-04-02T10:35:16.000+0530",
                        "lastUpdatedBy": {
                            "id": 50685529,
                            "code": "tom.sawyer",
                            "description": "",
                            "name": "Tom Sawyer",
                            "type": "ADMIN_USER"
                        },
                        "createdBy": {
                            "id": 50685529,
                            "code": "tom.sawyer",
                            "description": "",
                            "name": "Tom Sawyer",
                            "type": "ADMIN_USER"
                        }
                    },
                    "name": "testsub",
                    "emfRuleSetId": 1294439,
                    "targetType": "GROSS_SALES",
                    "targetEntity": "TRANSACTION",
                    "eventName": "TransactionAdd",
                    "targetGroupId": 23113,
                    "active": true,
                    "expression": "true",
                    "expressionJson": "\n{\n  \"arity\":\"literal\",\n  \"value\":\"true\",\n  \"type\":\"boolean:primitive\"\n}",
                    "filters": [],
                    "enrolmentMethod": "TRANSACTION",
                    "defaultValues": [
                        {
                            "id": 52582,
                            "periodId": 28714,
                            "defaultValue": 10000.000
                        }
                    ]
                }
            ]
        },
        {
            "id": 16832,
            "attribution": {
                "createdOn": "2024-02-07T17:53:40.000+0530",
                "lastUpdatedOn": "2024-02-07T17:53:40.000+0530",
                "lastUpdatedBy": {
                    "id": 50685529,
                    "code": "tom.sawyer",
                    "description": "",
                    "name": "Tom Sawyer",
                    "type": "ADMIN_USER"
                },
                "createdBy": {
                    "id": 50685529,
                    "code": "tom.sawyer",
                    "description": "",
                    "name": "Tom Sawyer",
                    "type": "ADMIN_USER"
                }
            },
            "name": "ew",
            "active": false,
            "preferredTillId": 50681568,
            "totalPeriods": 1,
            "targetEvaluationType": "FIXED_CALENDAR_WINDOW",
            "recurringCycles": -1,
            "frequency": 0,
            "targetCycleStartDate": "2024-02-07T12:22:48.000Z",
            "targetCycleEndDate": "2024-03-31T18:30:00.000Z",
            "frequencyType": "MONTHLY",
            "trackingType": "DEFAULT",
            "createdOn": 1707308620000,
            "targets": [
                {
                    "id": 31203,
                    "attribution": {
                        "createdOn": "2024-02-07T17:53:40.000+0530",
                        "lastUpdatedOn": "2024-02-07T17:53:40.000+0530",
                        "lastUpdatedBy": {
                            "id": 50685529,
                            "code": "tom.sawyer",
                            "description": "",
                            "name": "Tom Sawyer",
                            "type": "ADMIN_USER"
                        },
                        "createdBy": {
                            "id": 50685529,
                            "code": "tom.sawyer",
                            "description": "",
                            "name": "Tom Sawyer",
                            "type": "ADMIN_USER"
                        }
                    },
                    "name": "ew",
                    "emfRuleSetId": 1276042,
                    "targetType": "GROSS_SALES",
                    "targetEntity": "TRANSACTION",
                    "eventName": "TransactionAdd",
                    "targetGroupId": 16832,
                    "active": false,
                    "expression": "true",
                    "expressionJson": "\n{\n  \"arity\":\"literal\",\n  \"value\":\"true\",\n  \"type\":\"boolean:primitive\"\n}",
                    "filters": [],
                    "enrolmentMethod": "TRANSACTION",
                    "defaultValues": [
                        {
                            "id": 36763,
                            "periodId": 20639,
                            "defaultValue": 1.000
                        }
                    ]
                }
            ]
        },
        {
            "id": 16794,
            "attribution": {
                "createdOn": "2024-02-07T11:59:06.000+0530",
                "lastUpdatedOn": "2024-02-07T11:59:06.000+0530",
                "lastUpdatedBy": {
                    "id": 50685529,
                    "code": "tom.sawyer",
                    "description": "",
                    "name": "Tom Sawyer",
                    "type": "ADMIN_USER"
                },
                "createdBy": {
                    "id": 50685529,
                    "code": "tom.sawyer",
                    "description": "",
                    "name": "Tom Sawyer",
                    "type": "ADMIN_USER"
                }
            },
            "name": "unified",
            "active": false,
            "preferredTillId": 50681568,
            "totalPeriods": 1,
            "targetEvaluationType": "FIXED_CALENDAR_WINDOW",
            "recurringCycles": -1,
            "frequency": 0,
            "targetCycleStartDate": "2024-02-07T06:28:45.000Z",
            "targetCycleEndDate": "2024-03-31T18:30:00.000Z",
            "frequencyType": "MONTHLY",
            "trackingType": "UNIFIED",
            "createdOn": 1707287346000,
            "targets": [
                {
                    "id": 31133,
                    "attribution": {
                        "createdOn": "2024-02-07T11:59:06.000+0530",
                        "lastUpdatedOn": "2024-02-07T11:59:06.000+0530",
                        "lastUpdatedBy": {
                            "id": 50685529,
                            "code": "tom.sawyer",
                            "description": "",
                            "name": "Tom Sawyer",
                            "type": "ADMIN_USER"
                        },
                        "createdBy": {
                            "id": 50685529,
                            "code": "tom.sawyer",
                            "description": "",
                            "name": "Tom Sawyer",
                            "type": "ADMIN_USER"
                        }
                    },
                    "name": "unified_b8abd528-02b2-42ca-98b4-b296b2d6940f",
                    "emfRuleSetId": 1275657,
                    "targetType": "SALES",
                    "targetEntity": "TRANSACTION",
                    "eventName": "TransactionAdd",
                    "targetGroupId": 16794,
                    "active": false,
                    "expression": "true",
                    "expressionJson": "\n{\n  \"arity\":\"literal\",\n  \"value\":\"true\",\n  \"type\":\"boolean:primitive\"\n}",
                    "filters": [],
                    "enrolmentMethod": "TRANSACTION",
                    "defaultValues": [
                        {
                            "id": 36693,
                            "periodId": 20604,
                            "defaultValue": 100.000
                        }
                    ]
                },
                {
                    "id": 31132,
                    "attribution": {
                        "createdOn": "2024-02-07T11:59:06.000+0530",
                        "lastUpdatedOn": "2024-02-07T11:59:06.000+0530",
                        "lastUpdatedBy": {
                            "id": 50685529,
                            "code": "tom.sawyer",
                            "description": "",
                            "name": "Tom Sawyer",
                            "type": "ADMIN_USER"
                        },
                        "createdBy": {
                            "id": 50685529,
                            "code": "tom.sawyer",
                            "description": "",
                            "name": "Tom Sawyer",
                            "type": "ADMIN_USER"
                        }
                    },
                    "name": "unified_e96004bd-4d78-48da-9f66-e93b3c3dbd7a",
                    "emfRuleSetId": 1275656,
                    "targetType": "GROSS_SALES",
                    "targetEntity": "TRANSACTION",
                    "eventName": "TransactionAdd",
                    "targetGroupId": 16794,
                    "active": false,
                    "expression": "true",
                    "expressionJson": "\n{\n  \"arity\":\"literal\",\n  \"value\":\"true\",\n  \"type\":\"boolean:primitive\"\n}",
                    "filters": [],
                    "enrolmentMethod": "TRANSACTION",
                    "defaultValues": [
                        {
                            "id": 36692,
                            "periodId": 20604,
                            "defaultValue": 100.000
                        }
                    ]
                }
            ],
            "combinationType": "ALL",
            "unifiedTargetExpression": {
                "aggregation": null,
                "thresholdValue": null,
                "ruleExpression": "(31132 & 31133)"
            }
        },
        {
            "id": 16503,
            "attribution": {
                "createdOn": "2024-02-05T15:03:08.000+0530",
                "lastUpdatedOn": "2024-02-05T15:03:08.000+0530",
                "lastUpdatedBy": {
                    "id": 50685529,
                    "code": "tom.sawyer",
                    "description": "",
                    "name": "Tom Sawyer",
                    "type": "ADMIN_USER"
                },
                "createdBy": {
                    "id": 50685529,
                    "code": "tom.sawyer",
                    "description": "",
                    "name": "Tom Sawyer",
                    "type": "ADMIN_USER"
                }
            },
            "name": "wbc",
            "active": false,
            "preferredTillId": 50681568,
            "totalPeriods": 1,
            "targetEvaluationType": "FIXED_CALENDAR_WINDOW",
            "recurringCycles": -1,
            "frequency": 0,
            "targetCycleStartDate": "2024-02-05T09:32:53.000Z",
            "targetCycleEndDate": "2024-03-31T18:30:00.000Z",
            "frequencyType": "MONTHLY",
            "trackingType": "DEFAULT",
            "createdOn": 1707125588000,
            "targets": [
                {
                    "id": 30534,
                    "attribution": {
                        "createdOn": "2024-02-05T15:03:08.000+0530",
                        "lastUpdatedOn": "2024-02-05T15:03:08.000+0530",
                        "lastUpdatedBy": {
                            "id": 50685529,
                            "code": "tom.sawyer",
                            "description": "",
                            "name": "Tom Sawyer",
                            "type": "ADMIN_USER"
                        },
                        "createdBy": {
                            "id": 50685529,
                            "code": "tom.sawyer",
                            "description": "",
                            "name": "Tom Sawyer",
                            "type": "ADMIN_USER"
                        }
                    },
                    "name": "wbc",
                    "emfRuleSetId": 1274403,
                    "targetType": "EXTENDED_FIELD",
                    "targetEntity": "TRANSACTION",
                    "eventName": "TransactionAdd",
                    "targetGroupId": 16503,
                    "active": false,
                    "expression": "true",
                    "expressionJson": "\n{\n  \"arity\":\"literal\",\n  \"value\":\"true\",\n  \"type\":\"boolean:primitive\"\n}",
                    "filters": [],
                    "enrolmentMethod": "TRANSACTION",
                    "defaultValues": [
                        {
                            "id": 36017,
                            "periodId": 20267,
                            "defaultValue": 12.000
                        }
                    ],
                    "extendedFieldInfo": {
                        "name": "CentralGST",
                        "aggregateFunction": "COUNT"
                    }
                }
            ]
        },
        {
            "id": 16500,
            "attribution": {
                "createdOn": "2024-02-05T10:29:38.000+0530",
                "lastUpdatedOn": "2024-02-05T10:29:38.000+0530",
                "lastUpdatedBy": {
                    "id": 50685529,
                    "code": "tom.sawyer",
                    "description": "",
                    "name": "Tom Sawyer",
                    "type": "ADMIN_USER"
                },
                "createdBy": {
                    "id": 50685529,
                    "code": "tom.sawyer",
                    "description": "",
                    "name": "Tom Sawyer",
                    "type": "ADMIN_USER"
                }
            },
            "name": "wew",
            "active": false,
            "preferredTillId": 50681568,
            "totalPeriods": 1,
            "targetEvaluationType": "FIXED_CALENDAR_WINDOW",
            "recurringCycles": -1,
            "frequency": 0,
            "targetCycleStartDate": "2024-02-05T04:58:38.000Z",
            "targetCycleEndDate": "2024-03-31T18:30:00.000Z",
            "frequencyType": "MONTHLY",
            "trackingType": "DEFAULT",
            "createdOn": 1707109178000,
            "targets": [
                {
                    "id": 30533,
                    "attribution": {
                        "createdOn": "2024-02-05T10:29:38.000+0530",
                        "lastUpdatedOn": "2024-02-05T10:29:38.000+0530",
                        "lastUpdatedBy": {
                            "id": 50685529,
                            "code": "tom.sawyer",
                            "description": "",
                            "name": "Tom Sawyer",
                            "type": "ADMIN_USER"
                        },
                        "createdBy": {
                            "id": 50685529,
                            "code": "tom.sawyer",
                            "description": "",
                            "name": "Tom Sawyer",
                            "type": "ADMIN_USER"
                        }
                    },
                    "name": "wew",
                    "emfRuleSetId": 1274390,
                    "targetType": "GROSS_SALES",
                    "targetEntity": "TRANSACTION",
                    "eventName": "TransactionAdd",
                    "targetGroupId": 16500,
                    "active": false,
                    "expression": "true",
                    "expressionJson": "\n{\n  \"arity\":\"literal\",\n  \"value\":\"true\",\n  \"type\":\"boolean:primitive\"\n}",
                    "filters": [],
                    "enrolmentMethod": "TRANSACTION",
                    "defaultValues": [
                        {
                            "id": 36016,
                            "periodId": 20265,
                            "defaultValue": 12.000
                        }
                    ]
                }
            ]
        },
        {
            "id": 16175,
            "attribution": {
                "createdOn": "2024-01-31T12:48:16.000+0530",
                "lastUpdatedOn": "2024-01-31T12:48:16.000+0530",
                "lastUpdatedBy": {
                    "id": 50685529,
                    "code": "tom.sawyer",
                    "description": "",
                    "name": "Tom Sawyer",
                    "type": "ADMIN_USER"
                },
                "createdBy": {
                    "id": 50685529,
                    "code": "tom.sawyer",
                    "description": "",
                    "name": "Tom Sawyer",
                    "type": "ADMIN_USER"
                }
            },
            "name": "ewdwe",
            "active": true,
            "preferredTillId": 50681568,
            "activePeriod": {
                "id": 19881,
                "attribution": {
                    "createdOn": "2024-01-31T12:48:16.000+0530",
                    "lastUpdatedOn": "2024-01-31T12:48:16.000+0530",
                    "lastUpdatedBy": {
                        "id": 50685529,
                        "code": "tom.sawyer",
                        "description": "",
                        "name": "Tom Sawyer",
                        "type": "ADMIN_USER"
                    },
                    "createdBy": {
                        "id": 50685529,
                        "code": "tom.sawyer",
                        "description": "",
                        "name": "Tom Sawyer",
                        "type": "ADMIN_USER"
                    }
                },
                "startDate": "2024-01-31",
                "endDate": "2024-04-29",
                "refCode": "wdse",
                "periodStatus": "RUNNING",
                "targetGroupId": 16175,
                "active": true
            },
            "totalPeriods": 1,
            "targetEvaluationType": "FIXED_CALENDAR_WINDOW",
            "recurringCycles": -1,
            "frequency": 0,
            "targetCycleStartDate": "2024-01-31T00:00:00.000Z",
            "targetCycleEndDate": "2024-04-29T23:59:59.000Z",
            "frequencyType": "QUARTERLY",
            "trackingType": "DEFAULT",
            "createdOn": 1706685496000,
            "targets": [
                {
                    "id": 29827,
                    "attribution": {
                        "createdOn": "2024-01-31T12:48:57.000+0530",
                        "lastUpdatedOn": "2024-01-31T12:48:57.000+0530",
                        "lastUpdatedBy": {
                            "id": 50685529,
                            "code": "tom.sawyer",
                            "description": "",
                            "name": "Tom Sawyer",
                            "type": "ADMIN_USER"
                        },
                        "createdBy": {
                            "id": 50685529,
                            "code": "tom.sawyer",
                            "description": "",
                            "name": "Tom Sawyer",
                            "type": "ADMIN_USER"
                        }
                    },
                    "name": "e",
                    "emfRuleSetId": 1273473,
                    "emfUnrolledRulesetId": 1273472,
                    "targetType": "GROSS_SALES",
                    "targetEntity": "LINEITEM",
                    "eventName": "TransactionAdd",
                    "targetGroupId": 16175,
                    "active": true,
                    "expression": "true",
                    "expressionJson": "\n{\n  \"arity\":\"literal\",\n  \"value\":\"true\",\n  \"type\":\"boolean:primitive\"\n}",
                    "filters": [
                        {
                            "entityType": "STORE",
                            "entityIds": [
                                50681567
                            ]
                        }
                    ],
                    "enrolmentMethod": "IMPORT",
                    "defaultValues": [
                        {
                            "id": 35203,
                            "periodId": 19881,
                            "defaultValue": 12.000
                        }
                    ]
                },
                {
                    "id": 30532,
                    "attribution": {
                        "createdOn": "2024-02-05T10:27:13.000+0530",
                        "lastUpdatedOn": "2024-02-05T10:27:13.000+0530",
                        "lastUpdatedBy": {
                            "id": 50685529,
                            "code": "tom.sawyer",
                            "description": "",
                            "name": "Tom Sawyer",
                            "type": "ADMIN_USER"
                        },
                        "createdBy": {
                            "id": 50685529,
                            "code": "tom.sawyer",
                            "description": "",
                            "name": "Tom Sawyer",
                            "type": "ADMIN_USER"
                        }
                    },
                    "name": "eeeeee",
                    "emfRuleSetId": 1274389,
                    "emfUnrolledRulesetId": 1274388,
                    "targetType": "GROSS_SALES",
                    "targetEntity": "LINEITEM",
                    "eventName": "TransactionAdd",
                    "targetGroupId": 16175,
                    "active": true,
                    "expression": "true",
                    "expressionJson": "\n{\n  \"arity\":\"literal\",\n  \"value\":\"true\",\n  \"type\":\"boolean:primitive\"\n}",
                    "filters": [
                        {
                            "entityType": "STORE",
                            "entityIds": [
                                50681567
                            ]
                        }
                    ],
                    "enrolmentMethod": "TRANSACTION",
                    "defaultValues": [
                        {
                            "id": 36015,
                            "periodId": 19881,
                            "defaultValue": 11.000
                        }
                    ]
                }
            ]
        },
        {
            "id": 8670,
            "attribution": {
                "createdOn": "2023-12-28T17:38:42.000+0530",
                "lastUpdatedOn": "2023-12-28T17:38:42.000+0530",
                "lastUpdatedBy": {
                    "id": 50681568,
                    "code": "kerala1_till1",
                    "description": "",
                    "name": "kerala1_till1",
                    "type": "TILL"
                },
                "createdBy": {
                    "id": 50681568,
                    "code": "kerala1_till1",
                    "description": "",
                    "name": "kerala1_till1",
                    "type": "TILL"
                }
            },
            "name": "Madridstaloyaltystreak",
            "active": false,
            "preferredTillId": 0,
            "streaks": [
                {
                    "id": 10,
                    "attribution": {
                        "createdOn": "2023-11-06T18:59:52.000+0530",
                        "lastUpdatedOn": "2023-11-06T18:59:52.000+0530",
                        "lastUpdatedBy": {
                            "id": 50681568,
                            "code": "kerala1_till1",
                            "description": "",
                            "name": "kerala1_till1",
                            "type": "TILL"
                        },
                        "createdBy": {
                            "id": 50681568,
                            "code": "kerala1_till1",
                            "description": "",
                            "name": "kerala1_till1",
                            "type": "TILL"
                        }
                    },
                    "targetGroupId": 8670,
                    "name": "streakmad2",
                    "targetCountOfSequence": 2
                },
                {
                    "id": 11,
                    "attribution": {
                        "createdOn": "2023-11-06T18:59:52.000+0530",
                        "lastUpdatedOn": "2023-11-06T18:59:52.000+0530",
                        "lastUpdatedBy": {
                            "id": 50681568,
                            "code": "kerala1_till1",
                            "description": "",
                            "name": "kerala1_till1",
                            "type": "TILL"
                        },
                        "createdBy": {
                            "id": 50681568,
                            "code": "kerala1_till1",
                            "description": "",
                            "name": "kerala1_till1",
                            "type": "TILL"
                        }
                    },
                    "targetGroupId": 8670,
                    "name": "streakmad4",
                    "targetCountOfSequence": 4
                },
                {
                    "id": 12,
                    "attribution": {
                        "createdOn": "2023-11-06T18:59:52.000+0530",
                        "lastUpdatedOn": "2023-11-06T18:59:52.000+0530",
                        "lastUpdatedBy": {
                            "id": 50681568,
                            "code": "kerala1_till1",
                            "description": "",
                            "name": "kerala1_till1",
                            "type": "TILL"
                        },
                        "createdBy": {
                            "id": 50681568,
                            "code": "kerala1_till1",
                            "description": "",
                            "name": "kerala1_till1",
                            "type": "TILL"
                        }
                    },
                    "targetGroupId": 8670,
                    "name": "streakmad7",
                    "targetCountOfSequence": 7
                }
            ],
            "totalPeriods": 15,
            "description": "edit",
            "targetEvaluationType": "FIXED_CALENDAR_WINDOW",
            "recurringCycles": 0,
            "frequency": 0,
            "targetCycleStartDate": "2023-11-01T00:00:00.000Z",
            "targetCycleEndDate": "2023-11-15T23:59:59.000Z",
            "frequencyType": "DAILY",
            "trackingType": "STREAKS",
            "createdOn": 1703765322000,
            "targets": [
                {
                    "id": 15106,
                    "attribution": {
                        "createdOn": "2023-10-31T19:59:51.000+0530",
                        "lastUpdatedOn": "2023-10-31T19:59:51.000+0530",
                        "lastUpdatedBy": {
                            "id": 50681568,
                            "code": "kerala1_till1",
                            "description": "",
                            "name": "kerala1_till1",
                            "type": "TILL"
                        },
                        "createdBy": {
                            "id": 50681568,
                            "code": "kerala1_till1",
                            "description": "",
                            "name": "kerala1_till1",
                            "type": "TILL"
                        }
                    },
                    "name": "MadridstaloyaltystreakTXN500",
                    "emfRuleSetId": 1254321,
                    "targetType": "SALES",
                    "targetEntity": "TRANSACTION",
                    "eventName": "TransactionAdd",
                    "targetGroupId": 8670,
                    "description": "streak",
                    "active": false,
                    "expression": "currentTxn.value>500",
                    "expressionJson": "{\"arity\":\"binary_operation\",\"value\":\">\",\"type\":\"boolean:primitive\",\"operands\":[{\"arity\":\"object_dereference\",\"type\":\"real:object:primitive\",\"operands\":[{\"arity\":\"name\",\"value\":\"currentTxn\",\"type\":\"tx:object:primitive\"},{\"arity\":\"name\",\"value\":\"value\",\"type\":\"real:object:primitive\"}]},{\"arity\":\"literal\",\"value\":\"500\",\"type\":\"number:primitive\"}]}",
                    "filters": [
                        {
                            "entityType": "STORE",
                            "entityIds": [
                                50681567
                            ]
                        }
                    ],
                    "enrolmentMethod": "TRANSACTION",
                    "defaultValues": [
                        {
                            "id": 16963,
                            "periodId": 11340,
                            "defaultValue": 1.000
                        }
                    ]
                }
            ]
        }
    ]
}
```
```json Get all user created milestones
{
            "id": 39536,
            "attribution": {
                "createdOn": "2024-08-26T13:08:58.000+0530",
                "lastUpdatedOn": "2024-08-26T13:08:58.000+0530",
                "lastUpdatedBy": {
                    "id": 50691660,
                    "code": "adm01",
                    "description": "",
                    "name": "adm01",
                    "type": "TILL"
                },
                "createdBy": {
                    "id": 50691660,
                    "code": "adm01",
                    "description": "",
                    "name": "adm01",
                    "type": "TILL"
                }
            },
            "name": "Fixed Window Milestone Group 1724657937",
            "active": true,
            "preferredTillId": 50692189,
            "activePeriod": {
                "id": 55434,
                "attribution": {
                    "createdOn": "2024-08-26T12:50:11.000+0530",
                    "lastUpdatedOn": "2024-08-26T12:50:11.000+0530",
                    "lastUpdatedBy": {
                        "id": 50691660,
                        "code": "adm01",
                        "description": "",
                        "name": "adm01",
                        "type": "TILL"
                    },
                    "createdBy": {
                        "id": 50691660,
                        "code": "adm01",
                        "description": "",
                        "name": "adm01",
                        "type": "TILL"
                    }
                },
                "startDate": "2024-08-20",
                "endDate": "2024-09-19",
                "refCode": "TP1",
                "periodStatus": "RUNNING",
                "targetGroupId": 39536,
                "active": true
            },
            "totalPeriods": 2,
            "description": "test via postman",
            "targetEvaluationType": "FIXED_CALENDAR_WINDOW",
            "recurringCycles": -1,
            "frequency": 0,
            "targetCycleStartDate": "2024-08-20T08:42:01.000Z",
            "targetCycleEndDate": "2024-10-20T08:42:01.000Z",
            "frequencyType": "MONTHLY",
            "trackingType": "DEFAULT",
            "createdOn": 1724657938000,
            "targets": [
                {
                    "id": 71087,
                    "attribution": {
                        "createdOn": "2024-08-26T12:50:11.000+0530",
                        "lastUpdatedOn": "2024-08-26T12:50:11.000+0530",
                        "lastUpdatedBy": {
                            "id": 50691660,
                            "code": "adm01",
                            "description": "",
                            "name": "adm01",
                            "type": "TILL"
                        },
                        "createdBy": {
                            "id": 50691660,
                            "code": "adm01",
                            "description": "",
                            "name": "adm01",
                            "type": "TILL"
                        }
                    },
                    "name": "target-2024-08-26T07:20:09.894Z",
                    "emfRuleSetId": 1334912,
                    "targetType": "COUNT",
                    "targetEntity": "EVENT",
                    "eventName": "TransactionAdd",
                    "targetGroupId": 39536,
                    "description": "targetf",
                    "active": true,
                    "expression": "true",
                    "expressionJson": "{\"arity\":\"literal\",\"value\":\"true\",\"type\":\"boolean:primitive\"}",
                    "enrolmentMethod": "IMPORT",
                    "defaultValues": [
                        {
                            "id": 96664,
                            "periodId": 55434,
                            "defaultValue": 500.000
                        },
                        {
                            "id": 96665,
                            "periodId": 55435,
                            "defaultValue": 500.000
                        }
                    ],
                    "targetPeriodDefaultValuesMap": {
                        "55434": {
                            "id": 96664,
                            "periodId": 55434,
                            "defaultValue": 500.000
                        },
                        "55435": {
                            "id": 96665,
                            "periodId": 55435,
                            "defaultValue": 500.000
                        }
                    },
                    "extendedFieldInfo": {
                        "name": "cartId",
                        "aggregateFunction": "SUM",
                        "aggregateWindow": null
                    },
                    "targetMilestoneTriggers": []
                }
            ],
            "userCreated": true
        }
  ],
    "errors": null,
    "warnings": null
}
 
```
```json enrolmentMethod=AUDIENCE_FILTER
{
  "pagination": {
    "limit": 10,
    "offset": 0,
    "total": 2
  },
  "data": [
    {
      "id": 48825,
      "attribution": {
        "createdOn": "2024-07-31T11:32:41.000+0000",
        "lastUpdatedOn": "2024-07-31T11:32:41.000+0000",
        "lastUpdatedBy": {
          "id": 50145093,
          "code": "default.till.pyapps1695382050",
          "description": "default.till.pyapps1695382050",
          "name": "default.till.pyapps1695382050",
          "type": "TILL"
        },
        "createdBy": {
          "id": 50145093,
          "code": "default.till.pyapps1695382050",
          "description": "default.till.pyapps1695382050",
          "name": "default.till.pyapps1695382050",
          "type": "TILL"
        }
      },
      "name": "TG_2024-07-31T17:02:41.041113Z",
      "active": true,
      "preferredTillId": 50145093,
      "periods": [
        {
          "id": 62128,
          "attribution": {
            "createdOn": "2024-07-31T11:32:41.000+0000",
            "lastUpdatedOn": "2024-07-31T11:32:41.000+0000",
            "lastUpdatedBy": {
              "id": 50145093,
              "code": "default.till.pyapps1695382050",
              "description": "default.till.pyapps1695382050",
              "name": "default.till.pyapps1695382050",
              "type": "TILL"
            },
            "createdBy": {
              "id": 50145093,
              "code": "default.till.pyapps1695382050",
              "description": "default.till.pyapps1695382050",
              "name": "default.till.pyapps1695382050",
              "type": "TILL"
            }
          },
          "startDate": "2024-07-31",
          "endDate": "2024-08-10",
          "refCode": "TestPeriod",
          "periodStatus": "RUNNING",
          "targetGroupId": 48825,
          "description": "Period No. 1",
          "active": true
        }
      ],
      "activePeriod": {
        "id": 62128,
        "attribution": {
          "createdOn": "2024-07-31T11:32:41.000+0000",
          "lastUpdatedOn": "2024-07-31T11:32:41.000+0000",
          "lastUpdatedBy": {
            "id": 50145093,
            "code": "default.till.pyapps1695382050",
            "description": "default.till.pyapps1695382050",
            "name": "default.till.pyapps1695382050",
            "type": "TILL"
          },
          "createdBy": {
            "id": 50145093,
            "code": "default.till.pyapps1695382050",
            "description": "default.till.pyapps1695382050",
            "name": "default.till.pyapps1695382050",
            "type": "TILL"
          }
        },
        "startDate": "2024-07-31",
        "endDate": "2024-08-10",
        "refCode": "TestPeriod",
        "periodStatus": "RUNNING",
        "targetGroupId": 48825,
        "description": "Period No. 1",
        "active": true
      },
      "totalPeriods": 1,
      "description": "New target group",
      "targetEvaluationType": "FIXED_CALENDAR_WINDOW",
      "recurringCycles": -1,
      "frequency": 0,
      "targetCycleStartDate": "2024-07-31T11:32:41.000Z",
      "targetCycleEndDate": "2029-07-31T11:32:41.000Z",
      "frequencyType": "CUSTOM",
      "trackingType": "CAPPING",
      "createdOn": 1722425561000,
      "targets": [
        {
          "id": 104296,
          "attribution": {
            "createdOn": "2024-07-31T11:32:42.000+0000",
            "lastUpdatedOn": "2024-07-31T11:32:42.000+0000",
            "lastUpdatedBy": {
              "id": 50145093,
              "code": "default.till.pyapps1695382050",
              "description": "default.till.pyapps1695382050",
              "name": "default.till.pyapps1695382050",
              "type": "TILL"
            },
            "createdBy": {
              "id": 50145093,
              "code": "default.till.pyapps1695382050",
              "description": "default.till.pyapps1695382050",
              "name": "default.till.pyapps1695382050",
              "type": "TILL"
            }
          },
          "name": "testTargetFixedWindow_2024-07-31T17:02:41.391797Z",
          "targetType": "SALES",
          "targetEntity": "TRANSACTION",
          "eventName": "TransactionAdd",
          "targetGroupId": 48825,
          "description": "milestone",
          "active": true,
          "expression": "true",
          "expressionJson": "{\"arity\":\"literal\",\"value\":\"true\",\"type\":\"boolean:primitive\"}",
          "filters": [
            {
              "entityType": "STORE",
              "entityIds": []
            }
          ],
          "enrolmentMethod": "AUDIENCE_FILTER",
          "defaultValues": [
            {
              "id": 129407,
              "periodId": 62128,
              "defaultValue": 1.0
            }
          ],
          "targetPeriodDefaultValuesMap": {
            "62128": {
              "id": 129407,
              "periodId": 62128,
              "defaultValue": 1.0
            }
          },
          "targetMilestoneTriggers": [
            {
              "id": 21799,
              "triggerName": "targetAchieved",
              "isActive": true,
              "triggerType": "SYSTEM_TRIGGER",
              "triggerValueType": "PERCENTAGE",
              "triggerValue": 100.0,
              "targetRuleId": 104296
            }
          ],
          "targetAudienceFilter": [
            {
              "audienceGroupId": 200297896,
              "versionId": 200584500,
              "audienceFilterMetaId": 1990,
              "lastUpdatedOn": "2024-07-31T11:32:44.000+0000"
            }
          ]
        }
      ]
    },
    {
      "id": 48824,
      "attribution": {
        "createdOn": "2024-07-31T11:32:34.000+0000",
        "lastUpdatedOn": "2024-07-31T11:32:34.000+0000",
        "lastUpdatedBy": {
          "id": 50145093,
          "code": "default.till.pyapps1695382050",
          "description": "default.till.pyapps1695382050",
          "name": "default.till.pyapps1695382050",
          "type": "TILL"
        },
        "createdBy": {
          "id": 50145093,
          "code": "default.till.pyapps1695382050",
          "description": "default.till.pyapps1695382050",
          "name": "default.till.pyapps1695382050",
          "type": "TILL"
        }
      },
      "name": "TG_2024-07-31T17:02:33.517716Z",
      "active": true,
      "preferredTillId": 50145093,
      "periods": [
        {
          "id": 62127,
          "attribution": {
            "createdOn": "2024-07-31T11:32:34.000+0000",
            "lastUpdatedOn": "2024-07-31T11:32:34.000+0000",
            "lastUpdatedBy": {
              "id": 50145093,
              "code": "default.till.pyapps1695382050",
              "description": "default.till.pyapps1695382050",
              "name": "default.till.pyapps1695382050",
              "type": "TILL"
            },
            "createdBy": {
              "id": 50145093,
              "code": "default.till.pyapps1695382050",
              "description": "default.till.pyapps1695382050",
              "name": "default.till.pyapps1695382050",
              "type": "TILL"
            }
          },
          "startDate": "2024-07-31",
          "endDate": "2024-08-10",
          "refCode": "TestPeriod",
          "periodStatus": "RUNNING",
          "targetGroupId": 48824,
          "description": "Period No. 1",
          "active": true
        }
      ],
      "activePeriod": {
        "id": 62127,
        "attribution": {
          "createdOn": "2024-07-31T11:32:34.000+0000",
          "lastUpdatedOn": "2024-07-31T11:32:34.000+0000",
          "lastUpdatedBy": {
            "id": 50145093,
            "code": "default.till.pyapps1695382050",
            "description": "default.till.pyapps1695382050",
            "name": "default.till.pyapps1695382050",
            "type": "TILL"
          },
          "createdBy": {
            "id": 50145093,
            "code": "default.till.pyapps1695382050",
            "description": "default.till.pyapps1695382050",
            "name": "default.till.pyapps1695382050",
            "type": "TILL"
          }
        },
        "startDate": "2024-07-31",
        "endDate": "2024-08-10",
        "refCode": "TestPeriod",
        "periodStatus": "RUNNING",
        "targetGroupId": 48824,
        "description": "Period No. 1",
        "active": true
      },
      "totalPeriods": 1,
      "description": "New target group",
      "targetEvaluationType": "FIXED_CALENDAR_WINDOW",
      "recurringCycles": -1,
      "frequency": 0,
      "targetCycleStartDate": "2024-07-31T11:32:34.000Z",
      "targetCycleEndDate": "2029-07-31T11:32:34.000Z",
      "frequencyType": "CUSTOM",
      "trackingType": "DEFAULT",
      "createdOn": 1722425554000,
      "targets": [
        {
          "id": 104294,
          "attribution": {
            "createdOn": "2024-07-31T11:32:34.000+0000",
            "lastUpdatedOn": "2024-07-31T11:32:34.000+0000",
            "lastUpdatedBy": {
              "id": 50145093,
              "code": "default.till.pyapps1695382050",
              "description": "default.till.pyapps1695382050",
              "name": "default.till.pyapps1695382050",
              "type": "TILL"
            },
            "createdBy": {
              "id": 50145093,
              "code": "default.till.pyapps1695382050",
              "description": "default.till.pyapps1695382050",
              "name": "default.till.pyapps1695382050",
              "type": "TILL"
            }
          },
          "name": "testTargetFixedWindow_2024-07-31T17:02:33.843917Z",
          "emfRuleSetId": 1303778,
          "targetType": "COUNT",
          "targetEntity": "TRANSACTION",
          "eventName": "TransactionAdd",
          "targetGroupId": 48824,
          "description": "milestone",
          "active": true,
          "expression": "true",
          "expressionJson": "{\"arity\":\"literal\",\"value\":\"true\",\"type\":\"boolean:primitive\"}",
          "filters": [
            {
              "entityType": "STORE",
              "entityIds": []
            }
          ],
          "enrolmentMethod": "AUDIENCE_FILTER",
          "defaultValues": [
            {
              "id": 129405,
              "periodId": 62127,
              "defaultValue": 1.0
            }
          ],
          "targetPeriodDefaultValuesMap": {
            "62127": {
              "id": 129405,
              "periodId": 62127,
              "defaultValue": 1.0
            }
          },
          "targetMilestoneTriggers": [
            {
              "id": 21798,
              "triggerName": "targetAchieved",
              "isActive": true,
              "triggerType": "SYSTEM_TRIGGER",
              "triggerValueType": "PERCENTAGE",
              "triggerValue": 100.0,
              "targetRuleId": 104294
            }
          ],
          "targetAudienceFilter": [
            {
              "audienceGroupId": 200297896,
              "versionId": 200584500,
              "audienceFilterMetaId": 1989,
              "lastUpdatedOn": "2024-07-31T11:32:40.000+0000"
            }
          ]
        }
      ]
    }
  ],
  "errors": [],
  "warnings": []
}
```
```json Get leaderboard enabled milestones
{
    "pagination": {
        "limit": 1,
        "offset": 0,
        "total": 2
    },
    "data": [
        {
            "id": 1927,
            "attribution": {
            ........
            },
            "orgId": 4000110,
            "name": "milestonename",
            "active": true,
            "preferredTillId": 0,
            "totalPeriods": 1,
            "description": "a trial test ",
            "targetEvaluationType": "FIXED_CALENDAR_WINDOW",
            "recurringCycles": 1,
            "frequency": 1,
            "targetCycleStartDate": "2024-08-02T00:00:00.000Z",
            "targetCycleEndDate": "2024-08-02T23:59:59.000Z",
            "frequencyType": "CUSTOM",
            "trackingType": "DEFAULT",
            "createdOn": 1723454603000,
            "targets": [
                ......
            ],
            "leaderboardEnabled": true,
            "userCreated": true
        }
    ],
    "errors": [],
    "warnings": []
}
```