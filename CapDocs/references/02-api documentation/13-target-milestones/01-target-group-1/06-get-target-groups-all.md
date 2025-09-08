---
title: Get all target groups
excerpt: ''
api:
  file: v3.json
  operationId: get-target-groups-all
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
This API allows you to fetch all the target groups.

> 👍 Note
>
> For detailed information about our APIs and for hands-on testing, refer documentation in [API overview](https://docs.capillarytech.com/reference/apioverview) and  step-by-step guide on making your first API call in [Make your first API call](https://docs.capillarytech.com/reference/make-your-first-api-call) .

<br />

# API endpoint example

`https://eu.api.capillarytech.com/v3/targetGroups`

```json cURL
curl --location 'https://eu.api.capillarytech.com/v3/targetGroups' \
--header 'Authorization: Basic aljsbfaljbsflajb'
```

# Prerequisites

*   Basic Authentication
*   Default access group

# API Specification

|                        |                 |
| :--------------------- | :-------------- |
| URI                    | v3/targetGroups |
| HTTP Method            | GET             |
| Pagination             | No              |
| Batch support          | No              |
| Rate limit information | None            |

# Request query parameters

| Parameter Name | Data Type | Description                            |
| :------------- | :-------- | :------------------------------------- |
| includePeriods | Boolean   | Boolean flag to include target period. |

# Response parameters

| Field                                 | Datatype  | Description                                                                                |
| ------------------------------------- | --------- | ------------------------------------------------------------------------------------------ |
| id                                    | Integer   | Unique identifier for the target group.                                                    |
| attribution.createdOn                 | Date-time | Creation date and time for the target group.                                               |
| attribution.lastUpdatedOn             | Date-time | Last update date and time for the target group.                                            |
| attribution.lastUpdatedBy.id          | Integer   | ID of the last user who updated the target group.                                          |
| attribution.lastUpdatedBy.code        | String    | Code of the last user who updated the target group.                                        |
| attribution.lastUpdatedBy.description | String    | Description of the last user who updated the target group.                                 |
| attribution.lastUpdatedBy.name        | String    | Name of the last user who updated the target group.                                        |
| attribution.lastUpdatedBy.type        | String    | Type of the last user who updated the target group, e.g., "ADMIN\_USER".                   |
| attribution.createdBy.id              | Integer   | ID of the user who created the target group.                                               |
| attribution.createdBy.code            | String    | Code of the user who created the target group.                                             |
| attribution.createdBy.description     | String    | Description of the user who created the target group.                                      |
| attribution.createdBy.name            | String    | Name of the user who created the target group.                                             |
| attribution.createdBy.type            | String    | Type of the user who created the target group, e.g., "ADMIN\_USER".                        |
| name                                  | String    | Name of the target group.                                                                  |
| active                                | Boolean   | Indicates if the target group is active.                                                   |
| preferredTillId                       | Integer   | Preferred till ID.                                                                         |
| streaks\[]                            | Object    | Array of streak objects related to the target group.                                       |
| activePeriod                          | Object    | Details of the currently active period, including its ID, start and end dates, and status. |
| totalPeriods                          | Integer   | Total number of periods specified.                                                         |
| description                           | String    | Description of the target group.                                                           |
| targetEvaluationType                  | String    | Type of target evaluation, e.g., "FIXED\_CALENDAR\_WINDOW".                                |
| recurringCycles                       | Integer   | Number of recurring cycles specified.                                                      |
| frequency                             | Integer   | Frequency value set for the target cycle.                                                  |
| targetCycleStartDate                  | Date-time | Start date and time for the target cycle.                                                  |
| targetCycleEndDate                    | Date-time | End date and time for the target cycle.                                                    |
| frequencyType                         | String    | Frequency type, e.g., "CUSTOM", "QUARTERLY".                                               |
| trackingType                          | String    | Type of tracking, e.g., "DEFAULT", "STREAKS", "CAPPING".                                   |
| createdOn                             | Long      | Creation timestamp for the target group.                                                   |

```json Response
{
    "data": [
        {
            "id": 2310,
            "attribution": {
                "createdOn": "2025-06-19T05:16:36.000+0000",
                "lastUpdatedOn": "2025-06-19T05:16:36.000+0000",
                "lastUpdatedBy": {
                    "id": 75155297,
                    "code": "tj_capillary",
                    "description": "",
                    "name": "tj_capillary",
                    "type": "TILL"
                },
                "createdBy": {
                    "id": 75155297,
                    "code": "tj_capillary",
                    "description": "",
                    "name": "tj_capillary",
                    "type": "TILL"
                }
            },
            "orgId": 100737,
            "name": "uatTargetGroup41",
            "active": true,
            "preferredTillId": 75155297,
            "activePeriod": {
                "id": 21317,
                "attribution": {
                    "createdOn": "2025-06-19T06:10:45.000+0000",
                    "lastUpdatedOn": "2025-06-19T06:10:45.000+0000",
                    "lastUpdatedBy": {
                        "id": 75155297,
                        "code": "tj_capillary",
                        "description": "",
                        "name": "tj_capillary",
                        "type": "TILL"
                    },
                    "createdBy": {
                        "id": 75155297,
                        "code": "tj_capillary",
                        "description": "",
                        "name": "tj_capillary",
                        "type": "TILL"
                    }
                },
                "startDate": "2025-06-19",
                "endDate": "2025-06-20",
                "refCode": "period_one",
                "periodStatus": "RUNNING",
                "targetGroupId": 2310,
                "description": "Period for target group number 40",
                "active": true
            },
            "totalPeriods": 1,
            "description": "Target Group Number 41",
            "targetEvaluationType": "FIXED_CALENDAR_WINDOW",
            "recurringCycles": 2,
            "frequency": 2,
            "targetCycleStartDate": "2025-06-19T05:16:36.000Z",
            "targetCycleEndDate": "2030-06-19T05:16:36.000Z",
            "frequencyType": "CUSTOM",
            "trackingType": "DEFAULT",
            "createdOn": 1750310196000,
            "targets": [
                {
                    "id": 2460,
                    "attribution": {
                        "createdOn": "2025-06-19T10:31:36.000+0000",
                        "lastUpdatedOn": "2025-06-19T10:31:36.000+0000",
                        "lastUpdatedBy": {
                            "id": 75155297,
                            "code": "tj_capillary",
                            "description": "",
                            "name": "tj_capillary",
                            "type": "TILL"
                        },
                        "createdBy": {
                            "id": 75155297,
                            "code": "tj_capillary",
                            "description": "",
                            "name": "tj_capillary",
                            "type": "TILL"
                        }
                    },
                    "name": "targetOneUnderGroup40",
                    "emfRuleSetId": 126411619,
                    "targetType": "GROSS_SALES",
                    "targetEntity": "TRANSACTION",
                    "eventName": "TransactionAdd",
                    "targetGroupId": 2310,
                    "description": "Target one under target group 40",
                    "active": true,
                    "expression": "true",
                    "expressionJson": "\n{\n  \"arity\":\"literal\",\n  \"value\":\"true\",\n  \"type\":\"boolean:primitive\"\n}",
                    "filters": [],
                    "enrolmentMethod": "TRANSACTION",
                    "defaultValues": [
                        {
                            "id": 117908,
                            "periodId": 21317,
                            "defaultValue": 500.000
                        }
                    ],
                    "targetPeriodDefaultValuesMap": {
                        "21317": {
                            "id": 117908,
                            "periodId": 21317,
                            "defaultValue": 500.000
                        }
                    },
                    "targetMilestoneTriggers": []
                }
            ],
            "leaderboardEnabled": false,
            "userCreated": false
        },
        {
            "id": 2306,
            "attribution": {
                "createdOn": "2025-06-18T06:38:28.000+0000",
                "lastUpdatedOn": "2025-06-18T06:38:28.000+0000",
                "lastUpdatedBy": {
                    "id": 75155297,
                    "code": "tj_capillary",
                    "description": "",
                    "name": "tj_capillary",
                    "type": "TILL"
                },
                "createdBy": {
                    "id": 75155297,
                    "code": "tj_capillary",
                    "description": "",
                    "name": "tj_capillary",
                    "type": "TILL"
                }
            },
            "orgId": 100737,
            "name": "uatUnifiedTargetGroup2",
            "active": true,
            "preferredTillId": 75155297,
            "activePeriod": {
                "id": 21308,
                "attribution": {
                    "createdOn": "2025-06-18T06:38:28.000+0000",
                    "lastUpdatedOn": "2025-06-18T06:38:28.000+0000",
                    "lastUpdatedBy": {
                        "id": 75155297,
                        "code": "tj_capillary",
                        "description": "",
                        "name": "tj_capillary",
                        "type": "TILL"
                    },
                    "createdBy": {
                        "id": 75155297,
                        "code": "tj_capillary",
                        "description": "",
                        "name": "tj_capillary",
                        "type": "TILL"
                    }
                },
                "startDate": "2025-06-18",
                "endDate": "2025-06-19",
                "refCode": "period_1",
                "periodStatus": "RUNNING",
                "targetGroupId": 2306,
                "description": "Period number 1",
                "active": true
            },
            "totalPeriods": 1,
            "description": "Unified Target Group number 2 for UAT purpose",
            "targetEvaluationType": "FIXED_CALENDAR_WINDOW",
            "recurringCycles": 0,
            "frequency": 0,
            "targetCycleStartDate": "2025-06-18T00:00:00.000Z",
            "targetCycleEndDate": "2025-06-19T23:59:59.000Z",
            "frequencyType": "CUSTOM",
            "trackingType": "UNIFIED",
            "createdOn": 1750228708000,
            "targets": [
                {
                    "id": 2450,
                    "attribution": {
                        "createdOn": "2025-06-18T06:38:28.000+0000",
                        "lastUpdatedOn": "2025-06-18T06:38:28.000+0000",
                        "lastUpdatedBy": {
                            "id": 75155297,
                            "code": "tj_capillary",
                            "description": "",
                            "name": "tj_capillary",
                            "type": "TILL"
                        },
                        "createdBy": {
                            "id": 75155297,
                            "code": "tj_capillary",
                            "description": "",
                            "name": "tj_capillary",
                            "type": "TILL"
                        }
                    },
                    "name": "uatUnifiedTarget3",
                    "emfRuleSetId": 126411299,
                    "targetType": "SALES",
                    "targetEntity": "TRANSACTION",
                    "eventName": "TransactionAdd",
                    "targetGroupId": 2306,
                    "description": "uatUnifiedTarget1",
                    "active": true,
                    "expression": "currentTxn.value>500",
                    "expressionJson": "{\"arity\":\"binary_operation\",\"value\":\">\",\"type\":\"boolean:primitive\",\"operands\":[{\"arity\":\"object_dereference\",\"type\":\"real:object:primitive\",\"operands\":[{\"arity\":\"name\",\"value\":\"currentTxn\",\"type\":\"tx:object:primitive\"},{\"arity\":\"name\",\"value\":\"value\",\"type\":\"real:object:primitive\"}]},{\"arity\":\"literal\",\"value\":\"500\",\"type\":\"number:primitive\"}]}",
                    "enrolmentMethod": "TRANSACTION",
                    "defaultValues": [
                        {
                            "id": 23765,
                            "periodId": 21308,
                            "defaultValue": 2000.000
                        }
                    ],
                    "targetPeriodDefaultValuesMap": {
                        "21308": {
                            "id": 23765,
                            "periodId": 21308,
                            "defaultValue": 2000.000
                        }
                    },
                    "targetMilestoneTriggers": []
                },
                {
                    "id": 2451,
                    "attribution": {
                        "createdOn": "2025-06-18T06:38:28.000+0000",
                        "lastUpdatedOn": "2025-06-18T06:38:28.000+0000",
                        "lastUpdatedBy": {
                            "id": 75155297,
                            "code": "tj_capillary",
                            "description": "",
                            "name": "tj_capillary",
                            "type": "TILL"
                        },
                        "createdBy": {
                            "id": 75155297,
                            "code": "tj_capillary",
                            "description": "",
                            "name": "tj_capillary",
                            "type": "TILL"
                        }
                    },
                    "name": "uatUnifiedTarget4",
                    "emfRuleSetId": 126411300,
                    "targetType": "SALES",
                    "targetEntity": "TRANSACTION",
                    "eventName": "TransactionAdd",
                    "targetGroupId": 2306,
                    "description": "uatUnifiedTarget4",
                    "active": true,
                    "expression": "true",
                    "expressionJson": "{\"arity\":\"literal\",\"value\":\"true\",\"type\":\"boolean:primitive\"}",
                    "enrolmentMethod": "TRANSACTION",
                    "defaultValues": [
                        {
                            "id": 23766,
                            "periodId": 21308,
                            "defaultValue": 2000.000
                        }
                    ],
                    "targetPeriodDefaultValuesMap": {
                        "21308": {
                            "id": 23766,
                            "periodId": 21308,
                            "defaultValue": 2000.000
                        }
                    },
                    "targetMilestoneTriggers": []
                }
            ],
            "combinationType": "ALL",
            "unifiedTargetExpression": {
                "aggregation": "SUM",
                "thresholdValue": 5000,
                "ruleExpression": "(2450 & 2451)"
            },
            "leaderboardEnabled": false,
            "userCreated": false
        },
        {
            "id": 2303,
            "attribution": {
                "createdOn": "2025-06-18T04:56:39.000+0000",
                "lastUpdatedOn": "2025-06-18T04:56:39.000+0000",
                "lastUpdatedBy": {
                    "id": 75155292,
                    "code": "1736163452_",
                    "description": "",
                    "name": "tirthajit das",
                    "type": "ADMIN_USER"
                },
                "createdBy": {
                    "id": 75155292,
                    "code": "1736163452_",
                    "description": "",
                    "name": "tirthajit das",
                    "type": "ADMIN_USER"
                }
            },
            "orgId": 100737,
            "name": "uatUnifiedTargetGroup1",
            "active": true,
            "preferredTillId": 75155297,
            "activePeriod": {
                "id": 21304,
                "attribution": {
                    "createdOn": "2025-06-18T04:56:39.000+0000",
                    "lastUpdatedOn": "2025-06-18T04:56:39.000+0000",
                    "lastUpdatedBy": {
                        "id": 75155292,
                        "code": "1736163452_",
                        "description": "",
                        "name": "tirthajit das",
                        "type": "ADMIN_USER"
                    },
                    "createdBy": {
                        "id": 75155292,
                        "code": "1736163452_",
                        "description": "",
                        "name": "tirthajit das",
                        "type": "ADMIN_USER"
                    }
                },
                "startDate": "2025-06-19",
                "endDate": "2025-06-19",
                "refCode": "Cycle_2",
                "periodStatus": "RUNNING",
                "targetGroupId": 2303,
                "active": true
            },
            "totalPeriods": 3,
            "description": "Unified Target Group number one for UAT purpose",
            "targetEvaluationType": "FIXED_CALENDAR_WINDOW",
            "recurringCycles": -1,
            "frequency": 0,
            "targetCycleStartDate": "2025-06-17T18:30:00.000Z",
            "targetCycleEndDate": "2025-06-21T18:30:00.000Z",
            "frequencyType": "DAILY",
            "trackingType": "UNIFIED",
            "createdOn": 1750222599000,
            "targets": [
                {
                    "id": 2448,
                    "attribution": {
                        "createdOn": "2025-06-18T04:56:39.000+0000",
                        "lastUpdatedOn": "2025-06-18T04:56:39.000+0000",
                        "lastUpdatedBy": {
                            "id": 75155292,
                            "code": "1736163452_",
                            "description": "",
                            "name": "tirthajit das",
                            "type": "ADMIN_USER"
                        },
                        "createdBy": {
                            "id": 75155292,
                            "code": "1736163452_",
                            "description": "",
                            "name": "tirthajit das",
                            "type": "ADMIN_USER"
                        }
                    },
                    "name": "uatUnifiedTarget1",
                    "emfRuleSetId": 126411241,
                    "targetType": "GROSS_SALES",
                    "targetEntity": "TRANSACTION",
                    "eventName": "TransactionAdd",
                    "targetGroupId": 2303,
                    "description": "Unified Target Group number one for UAT purpose",
                    "active": true,
                    "expression": "true",
                    "expressionJson": "\n{\n  \"arity\":\"literal\",\n  \"value\":\"true\",\n  \"type\":\"boolean:primitive\"\n}",
                    "filters": [],
                    "enrolmentMethod": "TRANSACTION",
                    "defaultValues": [
                        {
                            "id": 23759,
                            "periodId": 21303,
                            "defaultValue": 1000.000
                        },
                        {
                            "id": 23760,
                            "periodId": 21304,
                            "defaultValue": 1000.000
                        },
                        {
                            "id": 23761,
                            "periodId": 21305,
                            "defaultValue": 1000.000
                        }
                    ],
                    "targetPeriodDefaultValuesMap": {
                        "21303": {
                            "id": 23759,
                            "periodId": 21303,
                            "defaultValue": 1000.000
                        },
                        "21304": {
                            "id": 23760,
                            "periodId": 21304,
                            "defaultValue": 1000.000
                        },
                        "21305": {
                            "id": 23761,
                            "periodId": 21305,
                            "defaultValue": 1000.000
                        }
                    },
                    "targetMilestoneTriggers": []
                },
                {
                    "id": 2449,
                    "attribution": {
                        "createdOn": "2025-06-18T04:56:39.000+0000",
                        "lastUpdatedOn": "2025-06-18T04:56:39.000+0000",
                        "lastUpdatedBy": {
                            "id": 75155292,
                            "code": "1736163452_",
                            "description": "",
                            "name": "tirthajit das",
                            "type": "ADMIN_USER"
                        },
                        "createdBy": {
                            "id": 75155292,
                            "code": "1736163452_",
                            "description": "",
                            "name": "tirthajit das",
                            "type": "ADMIN_USER"
                        }
                    },
                    "name": "uatUnifiedTarget2",
                    "emfRuleSetId": 126411242,
                    "targetType": "COUNT",
                    "targetEntity": "TRANSACTION",
                    "eventName": "TransactionAdd",
                    "targetGroupId": 2303,
                    "description": "Unified Target Group number one for UAT purpose",
                    "active": true,
                    "expression": "true",
                    "expressionJson": "\n{\n  \"arity\":\"literal\",\n  \"value\":\"true\",\n  \"type\":\"boolean:primitive\"\n}",
                    "filters": [],
                    "enrolmentMethod": "TRANSACTION",
                    "defaultValues": [
                        {
                            "id": 23762,
                            "periodId": 21303,
                            "defaultValue": 5.000
                        },
                        {
                            "id": 23763,
                            "periodId": 21304,
                            "defaultValue": 5.000
                        },
                        {
                            "id": 23764,
                            "periodId": 21305,
                            "defaultValue": 5.000
                        }
                    ],
                    "targetPeriodDefaultValuesMap": {
                        "21303": {
                            "id": 23762,
                            "periodId": 21303,
                            "defaultValue": 5.000
                        },
                        "21304": {
                            "id": 23763,
                            "periodId": 21304,
                            "defaultValue": 5.000
                        },
                        "21305": {
                            "id": 23764,
                            "periodId": 21305,
                            "defaultValue": 5.000
                        }
                    },
                    "targetMilestoneTriggers": []
                }
            ],
            "combinationType": "ALL",
            "unifiedTargetExpression": {
                "aggregation": "SUM",
                "thresholdValue": 10000,
                "ruleExpression": "(2448 & 2449)"
            },
            "leaderboardEnabled": false,
            "userCreated": false
        },
        {
            "id": 2295,
            "attribution": {
                "createdOn": "2025-06-17T10:56:47.000+0000",
                "lastUpdatedOn": "2025-06-17T10:56:47.000+0000",
                "lastUpdatedBy": {
                    "id": 75155297,
                    "code": "tj_capillary",
                    "description": "",
                    "name": "tj_capillary",
                    "type": "TILL"
                },
                "createdBy": {
                    "id": 75155297,
                    "code": "tj_capillary",
                    "description": "",
                    "name": "tj_capillary",
                    "type": "TILL"
                }
            },
            "orgId": 100737,
            "name": "uatTargetGroup821",
            "active": true,
            "preferredTillId": 751552970000,
            "totalPeriods": 2,
            "description": "UAT target group number thirty nine",
            "targetEvaluationType": "FIXED_CALENDAR_WINDOW",
            "recurringCycles": 1,
            "frequency": 1,
            "targetCycleStartDate": "2025-05-11T00:00:00.000Z",
            "targetCycleEndDate": "2025-06-11T23:59:59.000Z",
            "frequencyType": "DAILY",
            "trackingType": "DEFAULT",
            "createdOn": 1750157807000,
            "targets": [
                {
                    "id": 2440,
                    "attribution": {
                        "createdOn": "2025-06-17T10:56:47.000+0000",
                        "lastUpdatedOn": "2025-06-17T10:56:47.000+0000",
                        "lastUpdatedBy": {
                            "id": 75155297,
                            "code": "tj_capillary",
                            "description": "",
                            "name": "tj_capillary",
                            "type": "TILL"
                        },
                        "createdBy": {
                            "id": 75155297,
                            "code": "tj_capillary",
                            "description": "",
                            "name": "tj_capillary",
                            "type": "TILL"
                        }
                    },
                    "name": "uat_target_group_821",
                    "emfRuleSetId": 126411030,
                    "targetType": "COUNT",
                    "targetEntity": "EVENT",
                    "eventName": "TransactionAdd",
                    "targetGroupId": 2295,
                    "description": "",
                    "active": true,
                    "expression": "true",
                    "expressionJson": "{\"arity\":\"literal\",\"value\":\"true\",\"type\":\"boolean:primitive\"}",
                    "filters": [],
                    "enrolmentMethod": "IMPORT",
                    "defaultValues": [
                        {
                            "id": 23552,
                            "periodId": 21196,
                            "defaultValue": 1.000
                        },
                        {
                            "id": 23553,
                            "periodId": 21197,
                            "defaultValue": 1.000
                        }
                    ],
                    "targetPeriodDefaultValuesMap": {
                        "21196": {
                            "id": 23552,
                            "periodId": 21196,
                            "defaultValue": 1.000
                        },
                        "21197": {
                            "id": 23553,
                            "periodId": 21197,
                            "defaultValue": 1.000
                        }
                    },
                    "targetMilestoneTriggers": [],
                    "extendedFieldInfo": {
                        "name": "points",
                        "aggregateFunction": "SUM"
                    }
                }
            ],
            "leaderboardEnabled": false,
            "userCreated": false
        },
        {
            "id": 2280,
            "attribution": {
                "createdOn": "2025-06-13T04:31:58.000+0000",
                "lastUpdatedOn": "2025-06-13T04:31:58.000+0000",
                "lastUpdatedBy": {
                    "id": 75155297,
                    "code": "tj_capillary",
                    "description": "",
                    "name": "tj_capillary",
                    "type": "TILL"
                },
                "createdBy": {
                    "id": 75155297,
                    "code": "tj_capillary",
                    "description": "",
                    "name": "tj_capillary",
                    "type": "TILL"
                }
            },
            "orgId": 100737,
            "name": "uatTargetGroup40",
            "active": true,
            "preferredTillId": 75155297,
            "totalPeriods": 2,
            "description": "Target Group Number 40",
            "targetEvaluationType": "FIXED_CALENDAR_WINDOW",
            "recurringCycles": 2,
            "frequency": 2,
            "targetCycleStartDate": "2025-06-13T04:31:58.000Z",
            "targetCycleEndDate": "2030-06-13T04:31:58.000Z",
            "frequencyType": "CUSTOM",
            "trackingType": "DEFAULT",
            "createdOn": 1749789118000,
            "targets": [],
            "leaderboardEnabled": false,
            "userCreated": false
        },
        {
            "id": 2243,
            "attribution": {
                "createdOn": "2025-06-11T07:10:27.000+0000",
                "lastUpdatedOn": "2025-06-11T07:10:27.000+0000",
                "lastUpdatedBy": {
                    "id": 75155297,
                    "code": "tj_capillary",
                    "description": "",
                    "name": "tj_capillary",
                    "type": "TILL"
                },
                "createdBy": {
                    "id": 75155297,
                    "code": "tj_capillary",
                    "description": "",
                    "name": "tj_capillary",
                    "type": "TILL"
                }
            },
            "orgId": 100737,
            "name": "uatTargetGroup39",
            "active": true,
            "preferredTillId": 751552970000343,
            "totalPeriods": 1,
            "description": "UAT target group number thirty nine",
            "targetEvaluationType": "FIXED_CALENDAR_WINDOW",
            "recurringCycles": 1,
            "frequency": 1,
            "targetCycleStartDate": "2025-06-11T00:00:00.000Z",
            "targetCycleEndDate": "2025-06-11T23:59:59.000Z",
            "frequencyType": "DAILY",
            "trackingType": "DEFAULT",
            "createdOn": 1749625827000,
            "targets": [
                {
                    "id": 2385,
                    "attribution": {
                        "createdOn": "2025-06-11T06:03:50.000+0000",
                        "lastUpdatedOn": "2025-06-11T06:03:50.000+0000",
                        "lastUpdatedBy": {
                            "id": 75155297,
                            "code": "tj_capillary",
                            "description": "",
                            "name": "tj_capillary",
                            "type": "TILL"
                        },
                        "createdBy": {
                            "id": 75155297,
                            "code": "tj_capillary",
                            "description": "",
                            "name": "tj_capillary",
                            "type": "TILL"
                        }
                    },
                    "name": "uat_target_group_39",
                    "emfRuleSetId": 126409323,
                    "targetType": "COUNT",
                    "targetEntity": "EVENT",
                    "eventName": "TransactionAdd",
                    "targetGroupId": 2243,
                    "description": "",
                    "active": true,
                    "expression": "true",
                    "expressionJson": "{\"arity\":\"literal\",\"value\":\"true\",\"type\":\"boolean:primitive\"}",
                    "filters": [],
                    "enrolmentMethod": "IMPORT",
                    "defaultValues": [
                        {
                            "id": 22895,
                            "periodId": 20670,
                            "defaultValue": 1.000
                        }
                    ],
                    "targetPeriodDefaultValuesMap": {
                        "20670": {
                            "id": 22895,
                            "periodId": 20670,
                            "defaultValue": 1.000
                        }
                    },
                    "targetMilestoneTriggers": [],
                    "extendedFieldInfo": {
                        "name": "points",
                        "aggregateFunction": "SUM"
                    }
                }
            ],
            "leaderboardEnabled": false,
            "userCreated": false
        },
        {
            "id": 2274,
            "attribution": {
                "createdOn": "2025-06-11T07:02:12.000+0000",
                "lastUpdatedOn": "2025-06-11T07:02:12.000+0000",
                "lastUpdatedBy": {
                    "id": 75155297,
                    "code": "tj_capillary",
                    "description": "",
                    "name": "tj_capillary",
                    "type": "TILL"
                },
                "createdBy": {
                    "id": 75155297,
                    "code": "tj_capillary",
                    "description": "",
                    "name": "tj_capillary",
                    "type": "TILL"
                }
            },
            "orgId": 100737,
            "name": "uatTargetGroup11878442rr87rf343",
            "active": true,
            "preferredTillId": 75155297,
            "totalPeriods": 2,
            "description": "Opp",
            "targetEvaluationType": "FIXED_CALENDAR_WINDOW",
            "recurringCycles": 0,
            "frequency": 0,
            "targetCycleStartDate": "2025-05-12T00:00:00.000Z",
            "targetCycleEndDate": "2025-05-14T23:59:59.000Z",
            "frequencyType": "DAILY",
            "trackingType": "DEFAULT",
            "createdOn": 1749625332000,
            "targets": [
                {
                    "id": 2404,
                    "attribution": {
                        "createdOn": "2025-06-11T07:02:12.000+0000",
                        "lastUpdatedOn": "2025-06-11T07:02:12.000+0000",
                        "lastUpdatedBy": {
                            "id": 75155297,
                            "code": "tj_capillary",
                            "description": "",
                            "name": "tj_capillary",
                            "type": "TILL"
                        },
                        "createdBy": {
                            "id": 75155297,
                            "code": "tj_capillary",
                            "description": "",
                            "name": "tj_capillary",
                            "type": "TILL"
                        }
                    },
                    "name": "uat_target_group_176fe6r5s24434",
                    "emfRuleSetId": 126409366,
                    "targetType": "ALL",
                    "targetEntity": "TRANSACTION",
                    "eventName": "TransactionAdd",
                    "targetGroupId": 2274,
                    "description": "",
                    "active": false,
                    "expression": "true",
                    "expressionJson": "{\"arity\":\"literal\",\"value\":\"true\",\"type\":\"boolean:primitive\"}",
                    "filters": [],
                    "enrolmentMethod": "IMPORT",
                    "defaultValues": [
                        {
                            "id": 22932,
                            "periodId": 20731,
                            "defaultValue": 1.000
                        },
                        {
                            "id": 22933,
                            "periodId": 20732,
                            "defaultValue": 1.000
                        }
                    ],
                    "targetPeriodDefaultValuesMap": {
                        "20731": {
                            "id": 22932,
                            "periodId": 20731,
                            "defaultValue": 1.000
                        },
                        "20732": {
                            "id": 22933,
                            "periodId": 20732,
                            "defaultValue": 1.000
                        }
                    },
                    "targetMilestoneTriggers": [],
                    "extendedFieldInfo": {
                        "name": "points",
                        "aggregateFunction": "SUM"
                    }
                }
            ],
            "leaderboardEnabled": false,
            "userCreated": false
        },
        {
            "id": 2273,
            "attribution": {
                "createdOn": "2025-06-11T07:01:26.000+0000",
                "lastUpdatedOn": "2025-06-11T07:01:26.000+0000",
                "lastUpdatedBy": {
                    "id": 75155297,
                    "code": "tj_capillary",
                    "description": "",
                    "name": "tj_capillary",
                    "type": "TILL"
                },
                "createdBy": {
                    "id": 75155297,
                    "code": "tj_capillary",
                    "description": "",
                    "name": "tj_capillary",
                    "type": "TILL"
                }
            },
            "orgId": 100737,
            "name": "uatTargetGroup11878442r87rf343",
            "active": true,
            "preferredTillId": 75155297,
            "totalPeriods": 2,
            "description": "Opp",
            "targetEvaluationType": "FIXED_CALENDAR_WINDOW",
            "recurringCycles": 0,
            "frequency": 0,
            "targetCycleStartDate": "2025-05-12T00:00:00.000Z",
            "targetCycleEndDate": "2025-05-14T23:59:59.000Z",
            "frequencyType": "DAILY",
            "trackingType": "DEFAULT",
            "createdOn": 1749625286000,
            "targets": [
                {
                    "id": 2403,
                    "attribution": {
                        "createdOn": "2025-06-11T07:01:26.000+0000",
                        "lastUpdatedOn": "2025-06-11T07:01:26.000+0000",
                        "lastUpdatedBy": {
                            "id": 75155297,
                            "code": "tj_capillary",
                            "description": "",
                            "name": "tj_capillary",
                            "type": "TILL"
                        },
                        "createdBy": {
                            "id": 75155297,
                            "code": "tj_capillary",
                            "description": "",
                            "name": "tj_capillary",
                            "type": "TILL"
                        }
                    },
                    "name": "uat_target_group_176fe65s24434",
                    "emfRuleSetId": 126409365,
                    "targetType": "ALL",
                    "targetEntity": "TRANSACTION",
                    "eventName": "TransactionAdd",
                    "targetGroupId": 2273,
                    "description": "",
                    "active": false,
                    "expression": "true",
                    "expressionJson": "{\"arity\":\"literal\",\"value\":\"true\",\"type\":\"boolean:primitive\"}",
                    "filters": [],
                    "enrolmentMethod": "IMPORT",
                    "defaultValues": [
                        {
                            "id": 22930,
                            "periodId": 20729,
                            "defaultValue": 1.000
                        },
                        {
                            "id": 22931,
                            "periodId": 20730,
                            "defaultValue": 1.000
                        }
                    ],
                    "targetPeriodDefaultValuesMap": {
                        "20729": {
                            "id": 22930,
                            "periodId": 20729,
                            "defaultValue": 1.000
                        },
                        "20730": {
                            "id": 22931,
                            "periodId": 20730,
                            "defaultValue": 1.000
                        }
                    },
                    "targetMilestoneTriggers": [],
                    "extendedFieldInfo": {
                        "name": "points",
                        "aggregateFunction": "SUM"
                    }
                }
            ],
            "leaderboardEnabled": false,
            "userCreated": false
        },
        {
            "id": 2271,
            "attribution": {
                "createdOn": "2025-06-11T07:00:52.000+0000",
                "lastUpdatedOn": "2025-06-11T07:00:52.000+0000",
                "lastUpdatedBy": {
                    "id": 75155297,
                    "code": "tj_capillary",
                    "description": "",
                    "name": "tj_capillary",
                    "type": "TILL"
                },
                "createdBy": {
                    "id": 75155297,
                    "code": "tj_capillary",
                    "description": "",
                    "name": "tj_capillary",
                    "type": "TILL"
                }
            },
            "orgId": 100737,
            "name": "uatTargetGroup1187844287r8343",
            "active": true,
            "preferredTillId": 75155297,
            "totalPeriods": 2,
            "description": "Opp",
            "targetEvaluationType": "FIXED_CALENDAR_WINDOW",
            "recurringCycles": 0,
            "frequency": 0,
            "targetCycleStartDate": "2025-05-12T00:00:00.000Z",
            "targetCycleEndDate": "2025-05-14T23:59:59.000Z",
            "frequencyType": "DAILY",
            "trackingType": "DEFAULT",
            "createdOn": 1749625252000,
            "targets": [
                {
                    "id": 2401,
                    "attribution": {
                        "createdOn": "2025-06-11T07:00:52.000+0000",
                        "lastUpdatedOn": "2025-06-11T07:00:52.000+0000",
                        "lastUpdatedBy": {
                            "id": 75155297,
                            "code": "tj_capillary",
                            "description": "",
                            "name": "tj_capillary",
                            "type": "TILL"
                        },
                        "createdBy": {
                            "id": 75155297,
                            "code": "tj_capillary",
                            "description": "",
                            "name": "tj_capillary",
                            "type": "TILL"
                        }
                    },
                    "name": "uat_target_group_176565s24434",
                    "emfRuleSetId": 126409362,
                    "targetType": "ALL",
                    "targetEntity": "TRANSACTION",
                    "eventName": "TransactionAdd",
                    "targetGroupId": 2271,
                    "description": "",
                    "active": false,
                    "expression": "true",
                    "expressionJson": "{\"arity\":\"literal\",\"value\":\"true\",\"type\":\"boolean:primitive\"}",
                    "filters": [],
                    "enrolmentMethod": "IMPORT",
                    "defaultValues": [
                        {
                            "id": 22926,
                            "periodId": 20725,
                            "defaultValue": 1.000
                        },
                        {
                            "id": 22927,
                            "periodId": 20726,
                            "defaultValue": 1.000
                        }
                    ],
                    "targetPeriodDefaultValuesMap": {
                        "20725": {
                            "id": 22926,
                            "periodId": 20725,
                            "defaultValue": 1.000
                        },
                        "20726": {
                            "id": 22927,
                            "periodId": 20726,
                            "defaultValue": 1.000
                        }
                    },
                    "targetMilestoneTriggers": [],
                    "extendedFieldInfo": {
                        "name": "points",
                        "aggregateFunction": "SUM"
                    }
                }
            ],
            "leaderboardEnabled": false,
            "userCreated": false
        },
        {
            "id": 2269,
            "attribution": {
                "createdOn": "2025-06-11T06:59:25.000+0000",
                "lastUpdatedOn": "2025-06-11T06:59:25.000+0000",
                "lastUpdatedBy": {
                    "id": 75155297,
                    "code": "tj_capillary",
                    "description": "",
                    "name": "tj_capillary",
                    "type": "TILL"
                },
                "createdBy": {
                    "id": 75155297,
                    "code": "tj_capillary",
                    "description": "",
                    "name": "tj_capillary",
                    "type": "TILL"
                }
            },
            "orgId": 100737,
            "name": "uatTargetGroup118784423444343",
            "active": true,
            "preferredTillId": 75155297,
            "totalPeriods": 2,
            "description": "Opp",
            "targetEvaluationType": "FIXED_CALENDAR_WINDOW",
            "recurringCycles": 0,
            "frequency": 0,
            "targetCycleStartDate": "2025-05-12T00:00:00.000Z",
            "targetCycleEndDate": "2025-05-14T23:59:59.000Z",
            "frequencyType": "DAILY",
            "trackingType": "DEFAULT",
            "createdOn": 1749625165000,
            "targets": [
                {
                    "id": 2399,
                    "attribution": {
                        "createdOn": "2025-06-11T06:59:25.000+0000",
                        "lastUpdatedOn": "2025-06-11T06:59:25.000+0000",
                        "lastUpdatedBy": {
                            "id": 75155297,
                            "code": "tj_capillary",
                            "description": "",
                            "name": "tj_capillary",
                            "type": "TILL"
                        },
                        "createdBy": {
                            "id": 75155297,
                            "code": "tj_capillary",
                            "description": "",
                            "name": "tj_capillary",
                            "type": "TILL"
                        }
                    },
                    "name": "uat_target_group_1787444524434",
                    "emfRuleSetId": 126409360,
                    "targetType": "ALL",
                    "targetEntity": "TRANSACTION",
                    "eventName": "TransactionAdd",
                    "targetGroupId": 2269,
                    "description": "",
                    "active": false,
                    "expression": "true",
                    "expressionJson": "{\"arity\":\"literal\",\"value\":\"true\",\"type\":\"boolean:primitive\"}",
                    "filters": [],
                    "enrolmentMethod": "IMPORT",
                    "defaultValues": [
                        {
                            "id": 22922,
                            "periodId": 20721,
                            "defaultValue": 1.000
                        },
                        {
                            "id": 22923,
                            "periodId": 20722,
                            "defaultValue": 1.000
                        }
                    ],
                    "targetPeriodDefaultValuesMap": {
                        "20721": {
                            "id": 22922,
                            "periodId": 20721,
                            "defaultValue": 1.000
                        },
                        "20722": {
                            "id": 22923,
                            "periodId": 20722,
                            "defaultValue": 1.000
                        }
                    },
                    "targetMilestoneTriggers": [],
                    "extendedFieldInfo": {
                        "name": "points",
                        "aggregateFunction": "SUM"
                    }
                }
            ],
            "leaderboardEnabled": false,
            "userCreated": false
        },
        {
            "id": 2268,
            "attribution": {
                "createdOn": "2025-06-11T06:56:40.000+0000",
                "lastUpdatedOn": "2025-06-11T06:56:40.000+0000",
                "lastUpdatedBy": {
                    "id": 75155297,
                    "code": "tj_capillary",
                    "description": "",
                    "name": "tj_capillary",
                    "type": "TILL"
                },
                "createdBy": {
                    "id": 75155297,
                    "code": "tj_capillary",
                    "description": "",
                    "name": "tj_capillary",
                    "type": "TILL"
                }
            },
            "orgId": 100737,
            "name": "uatTargetGroup11878442344443",
            "active": true,
            "preferredTillId": 75155297,
            "totalPeriods": 2,
            "description": "Opp",
            "targetEvaluationType": "FIXED_CALENDAR_WINDOW",
            "recurringCycles": 0,
            "frequency": 0,
            "targetCycleStartDate": "2025-05-12T00:00:00.000Z",
            "targetCycleEndDate": "2025-05-14T23:59:59.000Z",
            "frequencyType": "DAILY",
            "trackingType": "DEFAULT",
            "createdOn": 1749625000000,
            "targets": [
                {
                    "id": 2398,
                    "attribution": {
                        "createdOn": "2025-06-11T06:56:40.000+0000",
                        "lastUpdatedOn": "2025-06-11T06:56:40.000+0000",
                        "lastUpdatedBy": {
                            "id": 75155297,
                            "code": "tj_capillary",
                            "description": "",
                            "name": "tj_capillary",
                            "type": "TILL"
                        },
                        "createdBy": {
                            "id": 75155297,
                            "code": "tj_capillary",
                            "description": "",
                            "name": "tj_capillary",
                            "type": "TILL"
                        }
                    },
                    "name": "uat_target_group_178744452434",
                    "emfRuleSetId": 126409359,
                    "targetType": "ALL",
                    "targetEntity": "TRANSACTION",
                    "eventName": "TransactionAdd",
                    "targetGroupId": 2268,
                    "description": "",
                    "active": false,
                    "expression": "true",
                    "expressionJson": "{\"arity\":\"literal\",\"value\":\"true\",\"type\":\"boolean:primitive\"}",
                    "filters": [],
                    "enrolmentMethod": "IMPORT",
                    "defaultValues": [
                        {
                            "id": 22920,
                            "periodId": 20719,
                            "defaultValue": 1.000
                        },
                        {
                            "id": 22921,
                            "periodId": 20720,
                            "defaultValue": 1.000
                        }
                    ],
                    "targetPeriodDefaultValuesMap": {
                        "20720": {
                            "id": 22921,
                            "periodId": 20720,
                            "defaultValue": 1.000
                        },
                        "20719": {
                            "id": 22920,
                            "periodId": 20719,
                            "defaultValue": 1.000
                        }
                    },
                    "targetMilestoneTriggers": [],
                    "extendedFieldInfo": {
                        "name": "points",
                        "aggregateFunction": "SUM"
                    }
                }
            ],
            "leaderboardEnabled": false,
            "userCreated": false
        },
        {
            "id": 2267,
            "attribution": {
                "createdOn": "2025-06-11T06:56:20.000+0000",
                "lastUpdatedOn": "2025-06-11T06:56:20.000+0000",
                "lastUpdatedBy": {
                    "id": 75155297,
                    "code": "tj_capillary",
                    "description": "",
                    "name": "tj_capillary",
                    "type": "TILL"
                },
                "createdBy": {
                    "id": 75155297,
                    "code": "tj_capillary",
                    "description": "",
                    "name": "tj_capillary",
                    "type": "TILL"
                }
            },
            "orgId": 100737,
            "name": "uatTargetGroup1187844234443",
            "active": true,
            "preferredTillId": 75155297,
            "totalPeriods": 2,
            "description": "Opp",
            "targetEvaluationType": "FIXED_CALENDAR_WINDOW",
            "recurringCycles": 0,
            "frequency": 0,
            "targetCycleStartDate": "2025-05-12T00:00:00.000Z",
            "targetCycleEndDate": "2025-05-14T23:59:59.000Z",
            "frequencyType": "DAILY",
            "trackingType": "DEFAULT",
            "createdOn": 1749624980000,
            "targets": [
                {
                    "id": 2397,
                    "attribution": {
                        "createdOn": "2025-06-11T06:56:20.000+0000",
                        "lastUpdatedOn": "2025-06-11T06:56:20.000+0000",
                        "lastUpdatedBy": {
                            "id": 75155297,
                            "code": "tj_capillary",
                            "description": "",
                            "name": "tj_capillary",
                            "type": "TILL"
                        },
                        "createdBy": {
                            "id": 75155297,
                            "code": "tj_capillary",
                            "description": "",
                            "name": "tj_capillary",
                            "type": "TILL"
                        }
                    },
                    "name": "uat_target_group_17874442434",
                    "emfRuleSetId": 126409358,
                    "targetType": "ALL",
                    "targetEntity": "TRANSACTION",
                    "eventName": "TransactionAdd",
                    "targetGroupId": 2267,
                    "description": "",
                    "active": false,
                    "expression": "true",
                    "expressionJson": "{\"arity\":\"literal\",\"value\":\"true\",\"type\":\"boolean:primitive\"}",
                    "filters": [],
                    "enrolmentMethod": "IMPORT",
                    "defaultValues": [
                        {
                            "id": 22918,
                            "periodId": 20717,
                            "defaultValue": 1.000
                        },
                        {
                            "id": 22919,
                            "periodId": 20718,
                            "defaultValue": 1.000
                        }
                    ],
                    "targetPeriodDefaultValuesMap": {
                        "20717": {
                            "id": 22918,
                            "periodId": 20717,
                            "defaultValue": 1.000
                        },
                        "20718": {
                            "id": 22919,
                            "periodId": 20718,
                            "defaultValue": 1.000
                        }
                    },
                    "targetMilestoneTriggers": [],
                    "extendedFieldInfo": {
                        "name": "points",
                        "aggregateFunction": "SUM"
                    }
                }
            ],
            "leaderboardEnabled": false,
            "userCreated": false
        },
        {
            "id": 2266,
            "attribution": {
                "createdOn": "2025-06-11T06:55:00.000+0000",
                "lastUpdatedOn": "2025-06-11T06:55:00.000+0000",
                "lastUpdatedBy": {
                    "id": 75155297,
                    "code": "tj_capillary",
                    "description": "",
                    "name": "tj_capillary",
                    "type": "TILL"
                },
                "createdBy": {
                    "id": 75155297,
                    "code": "tj_capillary",
                    "description": "",
                    "name": "tj_capillary",
                    "type": "TILL"
                }
            },
            "orgId": 100737,
            "name": "uatTargetGroup118784423443",
            "active": true,
            "preferredTillId": 75155297,
            "totalPeriods": 2,
            "description": "Opp",
            "targetEvaluationType": "FIXED_CALENDAR_WINDOW",
            "recurringCycles": 0,
            "frequency": 0,
            "targetCycleStartDate": "2025-05-12T00:00:00.000Z",
            "targetCycleEndDate": "2025-05-14T23:59:59.000Z",
            "frequencyType": "DAILY",
            "trackingType": "DEFAULT",
            "createdOn": 1749624900000,
            "targets": [
                {
                    "id": 2396,
                    "attribution": {
                        "createdOn": "2025-06-11T06:55:00.000+0000",
                        "lastUpdatedOn": "2025-06-11T06:55:00.000+0000",
                        "lastUpdatedBy": {
                            "id": 75155297,
                            "code": "tj_capillary",
                            "description": "",
                            "name": "tj_capillary",
                            "type": "TILL"
                        },
                        "createdBy": {
                            "id": 75155297,
                            "code": "tj_capillary",
                            "description": "",
                            "name": "tj_capillary",
                            "type": "TILL"
                        }
                    },
                    "name": "uat_target_group_1787444234",
                    "emfRuleSetId": 126409357,
                    "targetType": "ALL",
                    "targetEntity": "TRANSACTION",
                    "eventName": "TransactionAdd",
                    "targetGroupId": 2266,
                    "description": "",
                    "expression": "true",
                    "expressionJson": "{\"arity\":\"literal\",\"value\":\"true\",\"type\":\"boolean:primitive\"}",
                    "filters": [],
                    "enrolmentMethod": "IMPORT",
                    "defaultValues": [
                        {
                            "id": 22916,
                            "periodId": 20715,
                            "defaultValue": 1.000
                        },
                        {
                            "id": 22917,
                            "periodId": 20716,
                            "defaultValue": 1.000
                        }
                    ],
                    "targetPeriodDefaultValuesMap": {
                        "20715": {
                            "id": 22916,
                            "periodId": 20715,
                            "defaultValue": 1.000
                        },
                        "20716": {
                            "id": 22917,
                            "periodId": 20716,
                            "defaultValue": 1.000
                        }
                    },
                    "targetMilestoneTriggers": [],
                    "extendedFieldInfo": {
                        "name": "points",
                        "aggregateFunction": "SUM"
                    }
                }
            ],
            "leaderboardEnabled": false,
            "userCreated": false
        },
        {
            "id": 2265,
            "attribution": {
                "createdOn": "2025-06-11T06:54:49.000+0000",
                "lastUpdatedOn": "2025-06-11T06:54:49.000+0000",
                "lastUpdatedBy": {
                    "id": 75155297,
                    "code": "tj_capillary",
                    "description": "",
                    "name": "tj_capillary",
                    "type": "TILL"
                },
                "createdBy": {
                    "id": 75155297,
                    "code": "tj_capillary",
                    "description": "",
                    "name": "tj_capillary",
                    "type": "TILL"
                }
            },
            "orgId": 100737,
            "name": "uatTargetGroup11878442343",
            "active": true,
            "preferredTillId": 75155297,
            "totalPeriods": 2,
            "description": "Opp",
            "targetEvaluationType": "FIXED_CALENDAR_WINDOW",
            "recurringCycles": 0,
            "frequency": 0,
            "targetCycleStartDate": "2025-05-12T00:00:00.000Z",
            "targetCycleEndDate": "2025-05-14T23:59:59.000Z",
            "frequencyType": "DAILY",
            "trackingType": "DEFAULT",
            "createdOn": 1749624889000,
            "targets": [
                {
                    "id": 2395,
                    "attribution": {
                        "createdOn": "2025-06-11T06:54:49.000+0000",
                        "lastUpdatedOn": "2025-06-11T06:54:49.000+0000",
                        "lastUpdatedBy": {
                            "id": 75155297,
                            "code": "tj_capillary",
                            "description": "",
                            "name": "tj_capillary",
                            "type": "TILL"
                        },
                        "createdBy": {
                            "id": 75155297,
                            "code": "tj_capillary",
                            "description": "",
                            "name": "tj_capillary",
                            "type": "TILL"
                        }
                    },
                    "name": "uat_target_group_178744234",
                    "emfRuleSetId": 126409356,
                    "targetType": "ALL",
                    "targetEntity": "TRANSACTION",
                    "eventName": "TransactionAdd",
                    "targetGroupId": 2265,
                    "description": "",
                    "expression": "true",
                    "expressionJson": "{\"arity\":\"literal\",\"value\":\"true\",\"type\":\"boolean:primitive\"}",
                    "filters": [],
                    "enrolmentMethod": "IMPORT",
                    "defaultValues": [
                        {
                            "id": 22914,
                            "periodId": 20713,
                            "defaultValue": 1.000
                        },
                        {
                            "id": 22915,
                            "periodId": 20714,
                            "defaultValue": 1.000
                        }
                    ],
                    "targetPeriodDefaultValuesMap": {
                        "20713": {
                            "id": 22914,
                            "periodId": 20713,
                            "defaultValue": 1.000
                        },
                        "20714": {
                            "id": 22915,
                            "periodId": 20714,
                            "defaultValue": 1.000
                        }
                    },
                    "targetMilestoneTriggers": [],
                    "extendedFieldInfo": {
                        "name": "points",
                        "aggregateFunction": "SUM"
                    }
                }
            ],
            "leaderboardEnabled": false,
            "userCreated": false
        },
        {
            "id": 2264,
            "attribution": {
                "createdOn": "2025-06-11T06:52:20.000+0000",
                "lastUpdatedOn": "2025-06-11T06:52:20.000+0000",
                "lastUpdatedBy": {
                    "id": 75155297,
                    "code": "tj_capillary",
                    "description": "",
                    "name": "tj_capillary",
                    "type": "TILL"
                },
                "createdBy": {
                    "id": 75155297,
                    "code": "tj_capillary",
                    "description": "",
                    "name": "tj_capillary",
                    "type": "TILL"
                }
            },
            "orgId": 100737,
            "name": "uatTargetGroup1187844",
            "active": true,
            "preferredTillId": 75155297,
            "totalPeriods": 2,
            "description": "Opp",
            "targetEvaluationType": "FIXED_CALENDAR_WINDOW",
            "recurringCycles": 0,
            "frequency": 0,
            "targetCycleStartDate": "2025-05-12T00:00:00.000Z",
            "targetCycleEndDate": "2025-05-14T23:59:59.000Z",
            "frequencyType": "DAILY",
            "trackingType": "DEFAULT",
            "createdOn": 1749624740000,
            "targets": [
                {
                    "id": 2394,
                    "attribution": {
                        "createdOn": "2025-06-11T06:52:20.000+0000",
                        "lastUpdatedOn": "2025-06-11T06:52:20.000+0000",
                        "lastUpdatedBy": {
                            "id": 75155297,
                            "code": "tj_capillary",
                            "description": "",
                            "name": "tj_capillary",
                            "type": "TILL"
                        },
                        "createdBy": {
                            "id": 75155297,
                            "code": "tj_capillary",
                            "description": "",
                            "name": "tj_capillary",
                            "type": "TILL"
                        }
                    },
                    "name": "uat_target_group_178744",
                    "emfRuleSetId": 126409354,
                    "targetType": "ALL",
                    "targetEntity": "TRANSACTION",
                    "eventName": "TransactionAdd",
                    "targetGroupId": 2264,
                    "description": "",
                    "expression": "true",
                    "expressionJson": "{\"arity\":\"literal\",\"value\":\"true\",\"type\":\"boolean:primitive\"}",
                    "filters": [],
                    "enrolmentMethod": "IMPORT",
                    "defaultValues": [
                        {
                            "id": 22912,
                            "periodId": 20711,
                            "defaultValue": 1.000
                        },
                        {
                            "id": 22913,
                            "periodId": 20712,
                            "defaultValue": 1.000
                        }
                    ],
                    "targetPeriodDefaultValuesMap": {
                        "20711": {
                            "id": 22912,
                            "periodId": 20711,
                            "defaultValue": 1.000
                        },
                        "20712": {
                            "id": 22913,
                            "periodId": 20712,
                            "defaultValue": 1.000
                        }
                    },
                    "targetMilestoneTriggers": [],
                    "extendedFieldInfo": {
                        "name": "points",
                        "aggregateFunction": "SUM"
                    }
                }
            ],
            "leaderboardEnabled": false,
            "userCreated": false
        },
        {
            "id": 2262,
            "attribution": {
                "createdOn": "2025-06-11T06:51:45.000+0000",
                "lastUpdatedOn": "2025-06-11T06:51:45.000+0000",
                "lastUpdatedBy": {
                    "id": 75155297,
                    "code": "tj_capillary",
                    "description": "",
                    "name": "tj_capillary",
                    "type": "TILL"
                },
                "createdBy": {
                    "id": 75155297,
                    "code": "tj_capillary",
                    "description": "",
                    "name": "tj_capillary",
                    "type": "TILL"
                }
            },
            "orgId": 100737,
            "name": "uatTargetGroup118784",
            "active": true,
            "preferredTillId": 75155297,
            "totalPeriods": 2,
            "description": "Opp",
            "targetEvaluationType": "FIXED_CALENDAR_WINDOW",
            "recurringCycles": 0,
            "frequency": 0,
            "targetCycleStartDate": "2025-05-12T00:00:00.000Z",
            "targetCycleEndDate": "2025-05-14T23:59:59.000Z",
            "frequencyType": "DAILY",
            "trackingType": "DEFAULT",
            "createdOn": 1749624705000,
            "targets": [
                {
                    "id": 2393,
                    "attribution": {
                        "createdOn": "2025-06-11T06:51:45.000+0000",
                        "lastUpdatedOn": "2025-06-11T06:51:45.000+0000",
                        "lastUpdatedBy": {
                            "id": 75155297,
                            "code": "tj_capillary",
                            "description": "",
                            "name": "tj_capillary",
                            "type": "TILL"
                        },
                        "createdBy": {
                            "id": 75155297,
                            "code": "tj_capillary",
                            "description": "",
                            "name": "tj_capillary",
                            "type": "TILL"
                        }
                    },
                    "name": "uat_target_group_17874",
                    "emfRuleSetId": 126409353,
                    "targetType": "ALL",
                    "targetEntity": "TRANSACTION",
                    "eventName": "TransactionAdd",
                    "targetGroupId": 2262,
                    "description": "",
                    "expression": "true",
                    "expressionJson": "{\"arity\":\"literal\",\"value\":\"true\",\"type\":\"boolean:primitive\"}",
                    "filters": [],
                    "enrolmentMethod": "IMPORT",
                    "defaultValues": [
                        {
                            "id": 22910,
                            "periodId": 20707,
                            "defaultValue": 1.000
                        },
                        {
                            "id": 22911,
                            "periodId": 20708,
                            "defaultValue": 1.000
                        }
                    ],
                    "targetPeriodDefaultValuesMap": {
                        "20707": {
                            "id": 22910,
                            "periodId": 20707,
                            "defaultValue": 1.000
                        },
                        "20708": {
                            "id": 22911,
                            "periodId": 20708,
                            "defaultValue": 1.000
                        }
                    },
                    "targetMilestoneTriggers": [],
                    "extendedFieldInfo": {
                        "name": "points",
                        "aggregateFunction": "SUM"
                    }
                }
            ],
            "leaderboardEnabled": false,
            "userCreated": false
        },
        {
            "id": 2261,
            "attribution": {
                "createdOn": "2025-06-11T06:51:09.000+0000",
                "lastUpdatedOn": "2025-06-11T06:51:09.000+0000",
                "lastUpdatedBy": {
                    "id": 75155297,
                    "code": "tj_capillary",
                    "description": "",
                    "name": "tj_capillary",
                    "type": "TILL"
                },
                "createdBy": {
                    "id": 75155297,
                    "code": "tj_capillary",
                    "description": "",
                    "name": "tj_capillary",
                    "type": "TILL"
                }
            },
            "orgId": 100737,
            "name": "uatTargetGroup11878",
            "active": true,
            "preferredTillId": 75155297,
            "totalPeriods": 2,
            "description": "Opp",
            "targetEvaluationType": "FIXED_CALENDAR_WINDOW",
            "recurringCycles": 0,
            "frequency": 0,
            "targetCycleStartDate": "2025-05-12T00:00:00.000Z",
            "targetCycleEndDate": "2025-05-14T23:59:59.000Z",
            "frequencyType": "DAILY",
            "trackingType": "DEFAULT",
            "createdOn": 1749624669000,
            "targets": [
                {
                    "id": 2392,
                    "attribution": {
                        "createdOn": "2025-06-11T06:51:09.000+0000",
                        "lastUpdatedOn": "2025-06-11T06:51:09.000+0000",
                        "lastUpdatedBy": {
                            "id": 75155297,
                            "code": "tj_capillary",
                            "description": "",
                            "name": "tj_capillary",
                            "type": "TILL"
                        },
                        "createdBy": {
                            "id": 75155297,
                            "code": "tj_capillary",
                            "description": "",
                            "name": "tj_capillary",
                            "type": "TILL"
                        }
                    },
                    "name": "uat_target_group_1787",
                    "emfRuleSetId": 126409352,
                    "targetType": "ALL",
                    "targetEntity": "TRANSACTION",
                    "eventName": "TransactionAdd",
                    "targetGroupId": 2261,
                    "description": "",
                    "expression": "true",
                    "expressionJson": "{\"arity\":\"literal\",\"value\":\"true\",\"type\":\"boolean:primitive\"}",
                    "filters": [],
                    "enrolmentMethod": "IMPORT",
                    "defaultValues": [
                        {
                            "id": 22908,
                            "periodId": 20705,
                            "defaultValue": 1.000
                        },
                        {
                            "id": 22909,
                            "periodId": 20706,
                            "defaultValue": 1.000
                        }
                    ],
                    "targetPeriodDefaultValuesMap": {
                        "20705": {
                            "id": 22908,
                            "periodId": 20705,
                            "defaultValue": 1.000
                        },
                        "20706": {
                            "id": 22909,
                            "periodId": 20706,
                            "defaultValue": 1.000
                        }
                    },
                    "targetMilestoneTriggers": [],
                    "extendedFieldInfo": {
                        "name": "points",
                        "aggregateFunction": "SUM"
                    }
                }
            ],
            "leaderboardEnabled": false,
            "userCreated": false
        },
        {
            "id": 2260,
            "attribution": {
                "createdOn": "2025-06-11T06:48:09.000+0000",
                "lastUpdatedOn": "2025-06-11T06:48:09.000+0000",
                "lastUpdatedBy": {
                    "id": 75155297,
                    "code": "tj_capillary",
                    "description": "",
                    "name": "tj_capillary",
                    "type": "TILL"
                },
                "createdBy": {
                    "id": 75155297,
                    "code": "tj_capillary",
                    "description": "",
                    "name": "tj_capillary",
                    "type": "TILL"
                }
            },
            "orgId": 100737,
            "name": "uat_target_group_86565",
            "active": true,
            "preferredTillId": 7998987987686876867,
            "totalPeriods": 2,
            "description": "UAT target group number one",
            "targetEvaluationType": "FIXED_CALENDAR_WINDOW",
            "recurringCycles": 1,
            "frequency": 1,
            "targetCycleStartDate": "2025-05-12T00:00:00.000Z",
            "targetCycleEndDate": "2025-05-13T23:59:59.000Z",
            "frequencyType": "DAILY",
            "trackingType": "DEFAULT",
            "createdOn": 1749624489000,
            "targets": [
                {
                    "id": 2391,
                    "attribution": {
                        "createdOn": "2025-06-11T06:48:09.000+0000",
                        "lastUpdatedOn": "2025-06-11T06:48:09.000+0000",
                        "lastUpdatedBy": {
                            "id": 75155297,
                            "code": "tj_capillary",
                            "description": "",
                            "name": "tj_capillary",
                            "type": "TILL"
                        },
                        "createdBy": {
                            "id": 75155297,
                            "code": "tj_capillary",
                            "description": "",
                            "name": "tj_capillary",
                            "type": "TILL"
                        }
                    },
                    "name": "uat_target_group_878787",
                    "emfRuleSetId": 126409351,
                    "targetType": "ALL",
                    "targetEntity": "TRANSACTION",
                    "eventName": "TransactionAdd",
                    "targetGroupId": 2260,
                    "description": "",
                    "active": true,
                    "expression": "true",
                    "expressionJson": "{\"arity\":\"literal\",\"value\":\"true\",\"type\":\"boolean:primitive\"}",
                    "filters": [],
                    "enrolmentMethod": "IMPORT",
                    "defaultValues": [
                        {
                            "id": 22906,
                            "periodId": 20703,
                            "defaultValue": 1.000
                        },
                        {
                            "id": 22907,
                            "periodId": 20704,
                            "defaultValue": 1.000
                        }
                    ],
                    "targetPeriodDefaultValuesMap": {
                        "20704": {
                            "id": 22907,
                            "periodId": 20704,
                            "defaultValue": 1.000
                        },
                        "20703": {
                            "id": 22906,
                            "periodId": 20703,
                            "defaultValue": 1.000
                        }
                    },
                    "targetMilestoneTriggers": [],
                    "extendedFieldInfo": {
                        "name": "points",
                        "aggregateFunction": "SUM"
                    }
                }
            ],
            "leaderboardEnabled": false,
            "userCreated": false
        },
        {
            "id": 2259,
            "attribution": {
                "createdOn": "2025-06-11T06:46:49.000+0000",
                "lastUpdatedOn": "2025-06-11T06:46:49.000+0000",
                "lastUpdatedBy": {
                    "id": 75155297,
                    "code": "tj_capillary",
                    "description": "",
                    "name": "tj_capillary",
                    "type": "TILL"
                },
                "createdBy": {
                    "id": 75155297,
                    "code": "tj_capillary",
                    "description": "",
                    "name": "tj_capillary",
                    "type": "TILL"
                }
            },
            "orgId": 100737,
            "name": "uat_target_group_5657",
            "active": true,
            "preferredTillId": 75155297,
            "totalPeriods": 2,
            "description": "UAT target group number one",
            "targetEvaluationType": "FIXED_CALENDAR_WINDOW",
            "recurringCycles": 0,
            "frequency": -10,
            "targetCycleStartDate": "2025-05-11T00:00:00.000Z",
            "targetCycleEndDate": "2025-05-12T23:59:59.000Z",
            "frequencyType": "DAILY",
            "trackingType": "DEFAULT",
            "createdOn": 1749624409000,
            "targets": [
                {
                    "id": 2390,
                    "attribution": {
                        "createdOn": "2025-06-11T06:46:50.000+0000",
                        "lastUpdatedOn": "2025-06-11T06:46:50.000+0000",
                        "lastUpdatedBy": {
                            "id": 75155297,
                            "code": "tj_capillary",
                            "description": "",
                            "name": "tj_capillary",
                            "type": "TILL"
                        },
                        "createdBy": {
                            "id": 75155297,
                            "code": "tj_capillary",
                            "description": "",
                            "name": "tj_capillary",
                            "type": "TILL"
                        }
                    },
                    "name": "uat_target_group_7897",
                    "emfRuleSetId": 126409350,
                    "targetType": "ALL",
                    "targetEntity": "TRANSACTION",
                    "eventName": "TransactionAdd",
                    "targetGroupId": 2259,
                    "description": "",
                    "active": true,
                    "expression": "true",
                    "expressionJson": "{\"arity\":\"literal\",\"value\":\"true\",\"type\":\"boolean:primitive\"}",
                    "filters": [],
                    "enrolmentMethod": "IMPORT",
                    "defaultValues": [
                        {
                            "id": 22904,
                            "periodId": 20701,
                            "defaultValue": 1.000
                        },
                        {
                            "id": 22905,
                            "periodId": 20702,
                            "defaultValue": 1.000
                        }
                    ],
                    "targetPeriodDefaultValuesMap": {
                        "20701": {
                            "id": 22904,
                            "periodId": 20701,
                            "defaultValue": 1.000
                        },
                        "20702": {
                            "id": 22905,
                            "periodId": 20702,
                            "defaultValue": 1.000
                        }
                    },
                    "targetMilestoneTriggers": [],
                    "extendedFieldInfo": {
                        "name": "points",
                        "aggregateFunction": "SUM"
                    }
                }
            ],
            "leaderboardEnabled": false,
            "userCreated": false
        },
        {
            "id": 2258,
            "attribution": {
                "createdOn": "2025-06-11T06:44:27.000+0000",
                "lastUpdatedOn": "2025-06-11T06:44:27.000+0000",
                "lastUpdatedBy": {
                    "id": 75155297,
                    "code": "tj_capillary",
                    "description": "",
                    "name": "tj_capillary",
                    "type": "TILL"
                },
                "createdBy": {
                    "id": 75155297,
                    "code": "tj_capillary",
                    "description": "",
                    "name": "tj_capillary",
                    "type": "TILL"
                }
            },
            "orgId": 100737,
            "name": "-768768",
            "active": true,
            "preferredTillId": 75155297,
            "totalPeriods": 2,
            "description": "UAT target group number one",
            "targetEvaluationType": "FIXED_CALENDAR_WINDOW",
            "recurringCycles": 0,
            "frequency": 0,
            "targetCycleStartDate": "2025-05-10T00:00:00.000Z",
            "targetCycleEndDate": "2025-05-11T23:59:59.000Z",
            "frequencyType": "DAILY",
            "trackingType": "DEFAULT",
            "createdOn": 1749624267000,
            "targets": [
                {
                    "id": 2389,
                    "attribution": {
                        "createdOn": "2025-06-11T06:44:27.000+0000",
                        "lastUpdatedOn": "2025-06-11T06:44:27.000+0000",
                        "lastUpdatedBy": {
                            "id": 75155297,
                            "code": "tj_capillary",
                            "description": "",
                            "name": "tj_capillary",
                            "type": "TILL"
                        },
                        "createdBy": {
                            "id": 75155297,
                            "code": "tj_capillary",
                            "description": "",
                            "name": "tj_capillary",
                            "type": "TILL"
                        }
                    },
                    "name": "-654",
                    "emfRuleSetId": 126409349,
                    "targetType": "ALL",
                    "targetEntity": "TRANSACTION",
                    "eventName": "TransactionAdd",
                    "targetGroupId": 2258,
                    "description": "",
                    "active": true,
                    "expression": "true",
                    "expressionJson": "{\"arity\":\"literal\",\"value\":\"true\",\"type\":\"boolean:primitive\"}",
                    "filters": [],
                    "enrolmentMethod": "IMPORT",
                    "defaultValues": [
                        {
                            "id": 22902,
                            "periodId": 20699,
                            "defaultValue": 1.000
                        },
                        {
                            "id": 22903,
                            "periodId": 20700,
                            "defaultValue": 1.000
                        }
                    ],
                    "targetPeriodDefaultValuesMap": {
                        "20699": {
                            "id": 22902,
                            "periodId": 20699,
                            "defaultValue": 1.000
                        },
                        "20700": {
                            "id": 22903,
                            "periodId": 20700,
                            "defaultValue": 1.000
                        }
                    },
                    "targetMilestoneTriggers": [],
                    "extendedFieldInfo": {
                        "name": "points",
                        "aggregateFunction": "SUM"
                    }
                }
            ],
            "leaderboardEnabled": false,
            "userCreated": false
        },
        {
            "id": 2257,
            "attribution": {
                "createdOn": "2025-06-11T06:43:06.000+0000",
                "lastUpdatedOn": "2025-06-11T06:43:06.000+0000",
                "lastUpdatedBy": {
                    "id": 75155297,
                    "code": "tj_capillary",
                    "description": "",
                    "name": "tj_capillary",
                    "type": "TILL"
                },
                "createdBy": {
                    "id": 75155297,
                    "code": "tj_capillary",
                    "description": "",
                    "name": "tj_capillary",
                    "type": "TILL"
                }
            },
            "orgId": 100737,
            "name": "-687",
            "active": true,
            "preferredTillId": 75155297,
            "totalPeriods": 2,
            "description": "UAT target group number one",
            "targetEvaluationType": "FIXED_CALENDAR_WINDOW",
            "recurringCycles": 0,
            "frequency": 0,
            "targetCycleStartDate": "2025-05-10T00:00:00.000Z",
            "targetCycleEndDate": "2025-05-11T23:59:59.000Z",
            "frequencyType": "DAILY",
            "trackingType": "DEFAULT",
            "createdOn": 1749624186000,
            "targets": [
                {
                    "id": 2388,
                    "attribution": {
                        "createdOn": "2025-06-11T06:43:06.000+0000",
                        "lastUpdatedOn": "2025-06-11T06:43:06.000+0000",
                        "lastUpdatedBy": {
                            "id": 75155297,
                            "code": "tj_capillary",
                            "description": "",
                            "name": "tj_capillary",
                            "type": "TILL"
                        },
                        "createdBy": {
                            "id": 75155297,
                            "code": "tj_capillary",
                            "description": "",
                            "name": "tj_capillary",
                            "type": "TILL"
                        }
                    },
                    "name": "UAT_878",
                    "emfRuleSetId": 126409348,
                    "targetType": "ALL",
                    "targetEntity": "TRANSACTION",
                    "eventName": "TransactionAdd",
                    "targetGroupId": 2257,
                    "description": "",
                    "active": true,
                    "expression": "true",
                    "expressionJson": "{\"arity\":\"literal\",\"value\":\"true\",\"type\":\"boolean:primitive\"}",
                    "filters": [],
                    "enrolmentMethod": "IMPORT",
                    "defaultValues": [
                        {
                            "id": 22900,
                            "periodId": 20697,
                            "defaultValue": 1.000
                        },
                        {
                            "id": 22901,
                            "periodId": 20698,
                            "defaultValue": 1.000
                        }
                    ],
                    "targetPeriodDefaultValuesMap": {
                        "20697": {
                            "id": 22900,
                            "periodId": 20697,
                            "defaultValue": 1.000
                        },
                        "20698": {
                            "id": 22901,
                            "periodId": 20698,
                            "defaultValue": 1.000
                        }
                    },
                    "targetMilestoneTriggers": [],
                    "extendedFieldInfo": {
                        "name": "points",
                        "aggregateFunction": "SUM"
                    }
                }
            ],
            "leaderboardEnabled": false,
            "userCreated": false
        },
        {
            "id": 2256,
            "attribution": {
                "createdOn": "2025-06-11T06:41:05.000+0000",
                "lastUpdatedOn": "2025-06-11T06:41:05.000+0000",
                "lastUpdatedBy": {
                    "id": 75155297,
                    "code": "tj_capillary",
                    "description": "",
                    "name": "tj_capillary",
                    "type": "TILL"
                },
                "createdBy": {
                    "id": 75155297,
                    "code": "tj_capillary",
                    "description": "",
                    "name": "tj_capillary",
                    "type": "TILL"
                }
            },
            "orgId": 100737,
            "name": "",
            "active": true,
            "preferredTillId": 75155297,
            "totalPeriods": 2,
            "description": "UAT target group number one",
            "targetEvaluationType": "FIXED_CALENDAR_WINDOW",
            "recurringCycles": 0,
            "frequency": 0,
            "targetCycleStartDate": "2025-05-10T00:00:00.000Z",
            "targetCycleEndDate": "2025-05-11T23:59:59.000Z",
            "frequencyType": "DAILY",
            "trackingType": "DEFAULT",
            "createdOn": 1749624065000,
            "targets": [
                {
                    "id": 2387,
                    "attribution": {
                        "createdOn": "2025-06-11T06:41:05.000+0000",
                        "lastUpdatedOn": "2025-06-11T06:41:05.000+0000",
                        "lastUpdatedBy": {
                            "id": 75155297,
                            "code": "tj_capillary",
                            "description": "",
                            "name": "tj_capillary",
                            "type": "TILL"
                        },
                        "createdBy": {
                            "id": 75155297,
                            "code": "tj_capillary",
                            "description": "",
                            "name": "tj_capillary",
                            "type": "TILL"
                        }
                    },
                    "name": "uat_target_group_6565",
                    "emfRuleSetId": 126409347,
                    "targetType": "ALL",
                    "targetEntity": "TRANSACTION",
                    "eventName": "TransactionAdd",
                    "targetGroupId": 2256,
                    "description": "",
                    "active": true,
                    "expression": "true",
                    "expressionJson": "{\"arity\":\"literal\",\"value\":\"true\",\"type\":\"boolean:primitive\"}",
                    "filters": [],
                    "enrolmentMethod": "IMPORT",
                    "defaultValues": [
                        {
                            "id": 22898,
                            "periodId": 20695,
                            "defaultValue": 1.000
                        },
                        {
                            "id": 22899,
                            "periodId": 20696,
                            "defaultValue": 1.000
                        }
                    ],
                    "targetPeriodDefaultValuesMap": {
                        "20695": {
                            "id": 22898,
                            "periodId": 20695,
                            "defaultValue": 1.000
                        },
                        "20696": {
                            "id": 22899,
                            "periodId": 20696,
                            "defaultValue": 1.000
                        }
                    },
                    "targetMilestoneTriggers": [],
                    "extendedFieldInfo": {
                        "name": "points",
                        "aggregateFunction": "SUM"
                    }
                }
            ],
            "leaderboardEnabled": false,
            "userCreated": false
        },
        {
            "id": 2250,
            "attribution": {
                "createdOn": "2025-06-11T06:39:23.000+0000",
                "lastUpdatedOn": "2025-06-11T06:39:23.000+0000",
                "lastUpdatedBy": {
                    "id": 75155297,
                    "code": "tj_capillary",
                    "description": "",
                    "name": "tj_capillary",
                    "type": "TILL"
                },
                "createdBy": {
                    "id": 75155297,
                    "code": "tj_capillary",
                    "description": "",
                    "name": "tj_capillary",
                    "type": "TILL"
                }
            },
            "orgId": 100737,
            "name": "Some BName",
            "active": true,
            "preferredTillId": 75155297,
            "totalPeriods": 2,
            "description": "UAT target group number one",
            "targetEvaluationType": "FIXED_CALENDAR_WINDOW",
            "recurringCycles": 0,
            "frequency": 0,
            "targetCycleStartDate": "2025-05-10T00:00:00.000Z",
            "targetCycleEndDate": "2025-05-11T23:59:59.000Z",
            "frequencyType": "DAILY",
            "trackingType": "DEFAULT",
            "createdOn": 1749623963000,
            "targets": [
                {
                    "id": 2386,
                    "attribution": {
                        "createdOn": "2025-06-11T06:39:23.000+0000",
                        "lastUpdatedOn": "2025-06-11T06:39:23.000+0000",
                        "lastUpdatedBy": {
                            "id": 75155297,
                            "code": "tj_capillary",
                            "description": "",
                            "name": "tj_capillary",
                            "type": "TILL"
                        },
                        "createdBy": {
                            "id": 75155297,
                            "code": "tj_capillary",
                            "description": "",
                            "name": "tj_capillary",
                            "type": "TILL"
                        }
                    },
                    "name": "uat_target_group_4",
                    "emfRuleSetId": 126409346,
                    "targetType": "ALL",
                    "targetEntity": "TRANSACTION",
                    "eventName": "TransactionAdd",
                    "targetGroupId": 2250,
                    "description": "",
                    "active": true,
                    "expression": "true",
                    "expressionJson": "{\"arity\":\"literal\",\"value\":\"true\",\"type\":\"boolean:primitive\"}",
                    "filters": [],
                    "enrolmentMethod": "IMPORT",
                    "defaultValues": [
                        {
                            "id": 22896,
                            "periodId": 20683,
                            "defaultValue": 1.000
                        },
                        {
                            "id": 22897,
                            "periodId": 20684,
                            "defaultValue": 1.000
                        }
                    ],
                    "targetPeriodDefaultValuesMap": {
                        "20683": {
                            "id": 22896,
                            "periodId": 20683,
                            "defaultValue": 1.000
                        },
                        "20684": {
                            "id": 22897,
                            "periodId": 20684,
                            "defaultValue": 1.000
                        }
                    },
                    "targetMilestoneTriggers": [],
                    "extendedFieldInfo": {
                        "name": "points",
                        "aggregateFunction": "SUM"
                    }
                }
            ],
            "leaderboardEnabled": false,
            "userCreated": false
        },
        {
            "id": 2242,
            "attribution": {
                "createdOn": "2025-06-11T04:39:15.000+0000",
                "lastUpdatedOn": "2025-06-11T04:39:15.000+0000",
                "lastUpdatedBy": {
                    "id": 75152721,
                    "code": "naman_doc",
                    "description": "",
                    "name": "naman",
                    "type": "TILL"
                },
                "createdBy": {
                    "id": 75152721,
                    "code": "naman_doc",
                    "description": "",
                    "name": "naman",
                    "type": "TILL"
                }
            },
            "orgId": 100737,
            "name": "PurchaseChallenge8",
            "active": true,
            "preferredTillId": 0,
            "totalPeriods": 1,
            "description": "TG3",
            "targetEvaluationType": "FIXED_CALENDAR_WINDOW",
            "recurringCycles": 2,
            "frequency": 2,
            "targetCycleStartDate": "2025-06-11T04:39:15.000Z",
            "targetCycleEndDate": "2030-06-11T04:39:15.000Z",
            "frequencyType": "CUSTOM",
            "trackingType": "DEFAULT",
            "createdOn": 1749616755000,
            "targets": [],
            "leaderboardEnabled": false,
            "userCreated": false
        },
        {
            "id": 2241,
            "attribution": {
                "createdOn": "2025-06-11T04:34:18.000+0000",
                "lastUpdatedOn": "2025-06-11T04:34:18.000+0000",
                "lastUpdatedBy": {
                    "id": 75155297,
                    "code": "tj_capillary",
                    "description": "",
                    "name": "tj_capillary",
                    "type": "TILL"
                },
                "createdBy": {
                    "id": 75155297,
                    "code": "tj_capillary",
                    "description": "",
                    "name": "tj_capillary",
                    "type": "TILL"
                }
            },
            "orgId": 100737,
            "name": "uatTargetGroup38",
            "active": true,
            "preferredTillId": 75155297,
            "totalPeriods": 2,
            "description": "TargetGroup38",
            "targetEvaluationType": "FIXED_CALENDAR_WINDOW",
            "recurringCycles": 2,
            "frequency": 2,
            "targetCycleStartDate": "2025-06-11T04:34:18.000Z",
            "targetCycleEndDate": "2030-06-11T04:34:18.000Z",
            "frequencyType": "CUSTOM",
            "trackingType": "DEFAULT",
            "createdOn": 1749616458000,
            "targets": [],
            "leaderboardEnabled": false,
            "userCreated": false
        },
        {
            "id": 2240,
            "attribution": {
                "createdOn": "2025-06-11T04:13:55.000+0000",
                "lastUpdatedOn": "2025-06-11T04:13:55.000+0000",
                "lastUpdatedBy": {
                    "id": 75155297,
                    "code": "tj_capillary",
                    "description": "",
                    "name": "tj_capillary",
                    "type": "TILL"
                },
                "createdBy": {
                    "id": 75155297,
                    "code": "tj_capillary",
                    "description": "",
                    "name": "tj_capillary",
                    "type": "TILL"
                }
            },
            "orgId": 100737,
            "name": "uatTargetGroup37",
            "active": true,
            "preferredTillId": 75155297,
            "activePeriod": {
                "id": 20662,
                "attribution": {
                    "createdOn": "2025-06-11T04:13:55.000+0000",
                    "lastUpdatedOn": "2025-06-11T04:13:55.000+0000",
                    "lastUpdatedBy": {
                        "id": 75155297,
                        "code": "tj_capillary",
                        "description": "",
                        "name": "tj_capillary",
                        "type": "TILL"
                    },
                    "createdBy": {
                        "id": 75155297,
                        "code": "tj_capillary",
                        "description": "",
                        "name": "tj_capillary",
                        "type": "TILL"
                    }
                },
                "startDate": "2025-06-11",
                "endDate": "2030-06-11",
                "refCode": "PERIOD_G_2240_2",
                "periodStatus": "RUNNING",
                "targetGroupId": 2240,
                "description": "CYCLIC TARGET PERIOD",
                "active": true
            },
            "totalPeriods": 2,
            "description": "TargetGroup37",
            "targetEvaluationType": "CYCLIC_WINDOW",
            "recurringCycles": 2,
            "frequency": 2,
            "targetCycleStartDate": "2025-06-11T00:00:00.000Z",
            "targetCycleEndDate": "2030-06-11T04:13:55.000Z",
            "frequencyType": "CUSTOM",
            "trackingType": "DEFAULT",
            "createdOn": 1749615235000,
            "targets": [],
            "leaderboardEnabled": false,
            "userCreated": false
        },
        {
            "id": 2236,
            "attribution": {
                "createdOn": "2025-06-10T06:23:25.000+0000",
                "lastUpdatedOn": "2025-06-10T06:23:25.000+0000",
                "lastUpdatedBy": {
                    "id": 75155297,
                    "code": "tj_capillary",
                    "description": "",
                    "name": "tj_capillary",
                    "type": "TILL"
                },
                "createdBy": {
                    "id": 75155297,
                    "code": "tj_capillary",
                    "description": "",
                    "name": "tj_capillary",
                    "type": "TILL"
                }
            },
            "orgId": 100737,
            "name": "uatTargetGroup36",
            "active": true,
            "preferredTillId": 75155297,
            "totalPeriods": 2,
            "description": "UAT target group number thirty six",
            "targetEvaluationType": "FIXED_CALENDAR_WINDOW",
            "recurringCycles": 1,
            "frequency": 1,
            "targetCycleStartDate": "2025-05-11T00:00:00.000Z",
            "targetCycleEndDate": "2025-06-10T23:59:59.000Z",
            "frequencyType": "DAILY",
            "trackingType": "DEFAULT",
            "createdOn": 1749536605000,
            "targets": [
                {
                    "id": 2384,
                    "attribution": {
                        "createdOn": "2025-06-10T06:23:25.000+0000",
                        "lastUpdatedOn": "2025-06-10T06:23:25.000+0000",
                        "lastUpdatedBy": {
                            "id": 75155297,
                            "code": "tj_capillary",
                            "description": "",
                            "name": "tj_capillary",
                            "type": "TILL"
                        },
                        "createdBy": {
                            "id": 75155297,
                            "code": "tj_capillary",
                            "description": "",
                            "name": "tj_capillary",
                            "type": "TILL"
                        }
                    },
                    "name": "uat_target_group_36",
                    "emfRuleSetId": 126409038,
                    "targetType": "COUNT",
                    "targetEntity": "EVENT",
                    "eventName": "TransactionAdd",
                    "targetGroupId": 2236,
                    "description": "",
                    "active": true,
                    "expression": "true",
                    "expressionJson": "{\"arity\":\"literal\",\"value\":\"true\",\"type\":\"boolean:primitive\"}",
                    "filters": [],
                    "enrolmentMethod": "IMPORT",
                    "defaultValues": [
                        {
                            "id": 22893,
                            "periodId": 20659,
                            "defaultValue": 1.000
                        },
                        {
                            "id": 22894,
                            "periodId": 20660,
                            "defaultValue": 1.000
                        }
                    ],
                    "targetPeriodDefaultValuesMap": {
                        "20659": {
                            "id": 22893,
                            "periodId": 20659,
                            "defaultValue": 1.000
                        },
                        "20660": {
                            "id": 22894,
                            "periodId": 20660,
                            "defaultValue": 1.000
                        }
                    },
                    "targetMilestoneTriggers": [],
                    "extendedFieldInfo": {
                        "name": "points",
                        "aggregateFunction": "SUM"
                    }
                }
            ],
            "leaderboardEnabled": false,
            "userCreated": false
        },
        {
            "id": 2235,
            "attribution": {
                "createdOn": "2025-06-10T06:20:33.000+0000",
                "lastUpdatedOn": "2025-06-10T06:20:33.000+0000",
                "lastUpdatedBy": {
                    "id": 75155297,
                    "code": "tj_capillary",
                    "description": "",
                    "name": "tj_capillary",
                    "type": "TILL"
                },
                "createdBy": {
                    "id": 75155297,
                    "code": "tj_capillary",
                    "description": "",
                    "name": "tj_capillary",
                    "type": "TILL"
                }
            },
            "orgId": 100737,
            "name": "uatTargetGroup35",
            "active": false,
            "preferredTillId": 75155297,
            "totalPeriods": 2,
            "description": "UAT target group number thirty five",
            "targetEvaluationType": "FIXED_CALENDAR_WINDOW",
            "recurringCycles": 1,
            "frequency": 1,
            "targetCycleStartDate": "2025-05-11T00:00:00.000Z",
            "targetCycleEndDate": "2025-06-10T23:59:59.000Z",
            "frequencyType": "DAILY",
            "trackingType": "DEFAULT",
            "createdOn": 1749536433000,
            "targets": [
                {
                    "id": 2383,
                    "attribution": {
                        "createdOn": "2025-06-10T06:20:33.000+0000",
                        "lastUpdatedOn": "2025-06-10T06:20:33.000+0000",
                        "lastUpdatedBy": {
                            "id": 75155297,
                            "code": "tj_capillary",
                            "description": "",
                            "name": "tj_capillary",
                            "type": "TILL"
                        },
                        "createdBy": {
                            "id": 75155297,
                            "code": "tj_capillary",
                            "description": "",
                            "name": "tj_capillary",
                            "type": "TILL"
                        }
                    },
                    "name": "uat_target_group_35",
                    "emfRuleSetId": 126409037,
                    "targetType": "COUNT",
                    "targetEntity": "EVENT",
                    "eventName": "TransactionAdd",
                    "targetGroupId": 2235,
                    "description": "",
                    "active": false,
                    "expression": "true",
                    "expressionJson": "{\"arity\":\"literal\",\"value\":\"true\",\"type\":\"boolean:primitive\"}",
                    "filters": [],
                    "enrolmentMethod": "IMPORT",
                    "defaultValues": [
                        {
                            "id": 22891,
                            "periodId": 20657,
                            "defaultValue": 1.000
                        },
                        {
                            "id": 22892,
                            "periodId": 20658,
                            "defaultValue": 1.000
                        }
                    ],
                    "targetPeriodDefaultValuesMap": {
                        "20657": {
                            "id": 22891,
                            "periodId": 20657,
                            "defaultValue": 1.000
                        },
                        "20658": {
                            "id": 22892,
                            "periodId": 20658,
                            "defaultValue": 1.000
                        }
                    },
                    "targetMilestoneTriggers": [],
                    "extendedFieldInfo": {
                        "name": "points",
                        "aggregateFunction": "SUM"
                    }
                }
            ],
            "leaderboardEnabled": false,
            "userCreated": false
        },
        {
            "id": 2231,
            "attribution": {
                "createdOn": "2025-06-09T19:18:14.000+0000",
                "lastUpdatedOn": "2025-06-09T19:18:14.000+0000",
                "lastUpdatedBy": {
                    "id": 75155297,
                    "code": "tj_capillary",
                    "description": "",
                    "name": "tj_capillary",
                    "type": "TILL"
                },
                "createdBy": {
                    "id": 75155297,
                    "code": "tj_capillary",
                    "description": "",
                    "name": "tj_capillary",
                    "type": "TILL"
                }
            },
            "orgId": 100737,
            "name": "uatTargetGroup34",
            "active": false,
            "preferredTillId": 75155297,
            "totalPeriods": 2,
            "description": "UAT target group number thirty two",
            "targetEvaluationType": "FIXED_CALENDAR_WINDOW",
            "recurringCycles": 1,
            "frequency": 1,
            "targetCycleStartDate": "2025-05-11T00:00:00.000Z",
            "targetCycleEndDate": "2025-06-10T23:59:59.000Z",
            "frequencyType": "DAILY",
            "trackingType": "DEFAULT",
            "createdOn": 1749496694000,
            "targets": [
                {
                    "id": 2380,
                    "attribution": {
                        "createdOn": "2025-06-09T19:18:14.000+0000",
                        "lastUpdatedOn": "2025-06-09T19:18:14.000+0000",
                        "lastUpdatedBy": {
                            "id": 75155297,
                            "code": "tj_capillary",
                            "description": "",
                            "name": "tj_capillary",
                            "type": "TILL"
                        },
                        "createdBy": {
                            "id": 75155297,
                            "code": "tj_capillary",
                            "description": "",
                            "name": "tj_capillary",
                            "type": "TILL"
                        }
                    },
                    "name": "uat_target_group_34",
                    "emfRuleSetId": 126408910,
                    "targetType": "COUNT",
                    "targetEntity": "EVENT",
                    "eventName": "TransactionAdd",
                    "targetGroupId": 2231,
                    "description": "",
                    "active": false,
                    "expression": "true",
                    "expressionJson": "{\"arity\":\"literal\",\"value\":\"true\",\"type\":\"boolean:primitive\"}",
                    "filters": [],
                    "enrolmentMethod": "IMPORT",
                    "defaultValues": [
                        {
                            "id": 22887,
                            "periodId": 20653,
                            "defaultValue": 1.000
                        },
                        {
                            "id": 22888,
                            "periodId": 20654,
                            "defaultValue": 1.000
                        }
                    ],
                    "targetPeriodDefaultValuesMap": {
                        "20653": {
                            "id": 22887,
                            "periodId": 20653,
                            "defaultValue": 1.000
                        },
                        "20654": {
                            "id": 22888,
                            "periodId": 20654,
                            "defaultValue": 1.000
                        }
                    },
                    "targetMilestoneTriggers": [],
                    "extendedFieldInfo": {
                        "name": "points",
                        "aggregateFunction": "SUM"
                    }
                }
            ],
            "leaderboardEnabled": false,
            "userCreated": false
        },
        {
            "id": 2200,
            "attribution": {
                "createdOn": "2025-06-02T09:59:06.000+0000",
                "lastUpdatedOn": "2025-06-02T09:59:06.000+0000",
                "lastUpdatedBy": {
                    "id": 75155297,
                    "code": "tj_capillary",
                    "description": "",
                    "name": "tj_capillary",
                    "type": "TILL"
                },
                "createdBy": {
                    "id": 75155297,
                    "code": "tj_capillary",
                    "description": "",
                    "name": "tj_capillary",
                    "type": "TILL"
                }
            },
            "orgId": 100737,
            "name": "uatTargetGroup33",
            "active": false,
            "preferredTillId": 75155297,
            "totalPeriods": 2,
            "description": "UAT target group number thirty two",
            "targetEvaluationType": "FIXED_CALENDAR_WINDOW",
            "recurringCycles": 1,
            "frequency": 1,
            "targetCycleStartDate": "2025-05-03T00:00:00.000Z",
            "targetCycleEndDate": "2025-06-02T23:59:59.000Z",
            "frequencyType": "DAILY",
            "trackingType": "DEFAULT",
            "createdOn": 1748858346000,
            "targets": [
                {
                    "id": 2347,
                    "attribution": {
                        "createdOn": "2025-06-02T09:59:06.000+0000",
                        "lastUpdatedOn": "2025-06-02T09:59:06.000+0000",
                        "lastUpdatedBy": {
                            "id": 75155297,
                            "code": "tj_capillary",
                            "description": "",
                            "name": "tj_capillary",
                            "type": "TILL"
                        },
                        "createdBy": {
                            "id": 75155297,
                            "code": "tj_capillary",
                            "description": "",
                            "name": "tj_capillary",
                            "type": "TILL"
                        }
                    },
                    "name": "uat_target_group_33",
                    "emfRuleSetId": 126407095,
                    "targetType": "ALL",
                    "targetEntity": "TRANSACTION",
                    "eventName": "TransactionAdd",
                    "targetGroupId": 2200,
                    "description": "",
                    "active": false,
                    "expression": "true",
                    "expressionJson": "{\"arity\":\"literal\",\"value\":\"true\",\"type\":\"boolean:primitive\"}",
                    "filters": [],
                    "enrolmentMethod": "IMPORT",
                    "defaultValues": [
                        {
                            "id": 22806,
                            "periodId": 20589,
                            "defaultValue": 1.000
                        },
                        {
                            "id": 22807,
                            "periodId": 20590,
                            "defaultValue": 1.000
                        }
                    ],
                    "targetPeriodDefaultValuesMap": {
                        "20589": {
                            "id": 22806,
                            "periodId": 20589,
                            "defaultValue": 1.000
                        },
                        "20590": {
                            "id": 22807,
                            "periodId": 20590,
                            "defaultValue": 1.000
                        }
                    },
                    "targetMilestoneTriggers": [],
                    "extendedFieldInfo": {
                        "name": "points",
                        "aggregateFunction": "SUM"
                    }
                }
            ],
            "leaderboardEnabled": false,
            "userCreated": false
        },
        {
            "id": 2174,
            "attribution": {
                "createdOn": "2025-05-22T09:43:43.000+0000",
                "lastUpdatedOn": "2025-05-22T09:43:43.000+0000",
                "lastUpdatedBy": {
                    "id": 75152721,
                    "code": "naman_doc",
                    "description": "",
                    "name": "naman",
                    "type": "TILL"
                },
                "createdBy": {
                    "id": 75152721,
                    "code": "naman_doc",
                    "description": "",
                    "name": "naman",
                    "type": "TILL"
                }
            },
            "orgId": 100737,
            "name": "PurchaseChallenge7",
            "active": true,
            "preferredTillId": 75152721,
            "activePeriod": {
                "id": 19359,
                "attribution": {
                    "createdOn": "2025-05-22T09:43:43.000+0000",
                    "lastUpdatedOn": "2025-05-22T09:43:43.000+0000",
                    "lastUpdatedBy": {
                        "id": 75152721,
                        "code": "naman_doc",
                        "description": "",
                        "name": "naman",
                        "type": "TILL"
                    },
                    "createdBy": {
                        "id": 75152721,
                        "code": "naman_doc",
                        "description": "",
                        "name": "naman",
                        "type": "TILL"
                    }
                },
                "startDate": "2025-05-20",
                "endDate": "2025-06-20",
                "refCode": "Cycle_1",
                "periodStatus": "RUNNING",
                "targetGroupId": 2174,
                "description": "",
                "active": true
            },
            "totalPeriods": 1,
            "description": "Opp",
            "targetEvaluationType": "FIXED_CALENDAR_WINDOW",
            "recurringCycles": 0,
            "frequency": 0,
            "targetCycleStartDate": "2025-05-20T00:00:00.000Z",
            "targetCycleEndDate": "2025-06-20T23:59:59.000Z",
            "frequencyType": "DAILY",
            "trackingType": "DEFAULT",
            "createdOn": 1747907023000,
            "targets": [
                {
                    "id": 2333,
                    "attribution": {
                        "createdOn": "2025-05-22T09:43:43.000+0000",
                        "lastUpdatedOn": "2025-05-22T09:43:43.000+0000",
                        "lastUpdatedBy": {
                            "id": 75152721,
                            "code": "naman_doc",
                            "description": "",
                            "name": "naman",
                            "type": "TILL"
                        },
                        "createdBy": {
                            "id": 75152721,
                            "code": "naman_doc",
                            "description": "",
                            "name": "naman",
                            "type": "TILL"
                        }
                    },
                    "name": "PurchaseChallenge7_1",
                    "emfRuleSetId": 126404395,
                    "targetType": "SALES",
                    "targetEntity": "TRANSACTION",
                    "eventName": "TransactionAdd",
                    "targetGroupId": 2174,
                    "description": "",
                    "active": true,
                    "expression": "true",
                    "expressionJson": "{\"arity\":\"literal\",\"value\":\"true\",\"type\":\"boolean:primitive\"}",
                    "filters": [],
                    "enrolmentMethod": "IMPORT",
                    "defaultValues": [
                        {
                            "id": 21636,
                            "periodId": 19359,
                            "defaultValue": 1.000
                        }
                    ],
                    "targetPeriodDefaultValuesMap": {
                        "19359": {
                            "id": 21636,
                            "periodId": 19359,
                            "defaultValue": 1.000
                        }
                    },
                    "targetMilestoneTriggers": [],
                    "extendedFieldInfo": {
                        "name": "points",
                        "aggregateFunction": "SUM"
                    }
                },
                {
                    "id": 2334,
                    "attribution": {
                        "createdOn": "2025-05-22T09:43:43.000+0000",
                        "lastUpdatedOn": "2025-05-22T09:43:43.000+0000",
                        "lastUpdatedBy": {
                            "id": 75152721,
                            "code": "naman_doc",
                            "description": "",
                            "name": "naman",
                            "type": "TILL"
                        },
                        "createdBy": {
                            "id": 75152721,
                            "code": "naman_doc",
                            "description": "",
                            "name": "naman",
                            "type": "TILL"
                        }
                    },
                    "name": "PurchaseChallenge7_2",
                    "emfRuleSetId": 126404396,
                    "targetType": "SALES",
                    "targetEntity": "TRANSACTION",
                    "eventName": "TransactionAdd",
                    "targetGroupId": 2174,
                    "description": "",
                    "active": true,
                    "expression": "true",
                    "expressionJson": "{\"arity\":\"literal\",\"value\":\"true\",\"type\":\"boolean:primitive\"}",
                    "filters": [],
                    "enrolmentMethod": "IMPORT",
                    "defaultValues": [
                        {
                            "id": 21637,
                            "periodId": 19359,
                            "defaultValue": 1.000
                        }
                    ],
                    "targetPeriodDefaultValuesMap": {
                        "19359": {
                            "id": 21637,
                            "periodId": 19359,
                            "defaultValue": 1.000
                        }
                    },
                    "targetMilestoneTriggers": [],
                    "extendedFieldInfo": {
                        "name": "points",
                        "aggregateFunction": "SUM"
                    }
                }
            ],
            "leaderboardEnabled": false,
            "userCreated": false
        },
        {
            "id": 2173,
            "attribution": {
                "createdOn": "2025-05-22T09:39:46.000+0000",
                "lastUpdatedOn": "2025-05-22T09:39:46.000+0000",
                "lastUpdatedBy": {
                    "id": 75152721,
                    "code": "naman_doc",
                    "description": "",
                    "name": "naman",
                    "type": "TILL"
                },
                "createdBy": {
                    "id": 75152721,
                    "code": "naman_doc",
                    "description": "",
                    "name": "naman",
                    "type": "TILL"
                }
            },
            "orgId": 100737,
            "name": "PurchaseChallenge6",
            "active": true,
            "preferredTillId": 75152721,
            "totalPeriods": 2,
            "description": "Opp",
            "targetEvaluationType": "FIXED_CALENDAR_WINDOW",
            "recurringCycles": 0,
            "frequency": 0,
            "targetCycleStartDate": "2025-05-20T00:00:00.000Z",
            "targetCycleEndDate": "2025-06-10T23:59:59.000Z",
            "frequencyType": "DAILY",
            "trackingType": "DEFAULT",
            "createdOn": 1747906786000,
            "targets": [
                {
                    "id": 2332,
                    "attribution": {
                        "createdOn": "2025-05-22T09:39:46.000+0000",
                        "lastUpdatedOn": "2025-05-22T09:39:46.000+0000",
                        "lastUpdatedBy": {
                            "id": 75152721,
                            "code": "naman_doc",
                            "description": "",
                            "name": "naman",
                            "type": "TILL"
                        },
                        "createdBy": {
                            "id": 75152721,
                            "code": "naman_doc",
                            "description": "",
                            "name": "naman",
                            "type": "TILL"
                        }
                    },
                    "name": "PurchaseChallenge6",
                    "emfRuleSetId": 126404389,
                    "targetType": "SALES",
                    "targetEntity": "TRANSACTION",
                    "eventName": "TransactionAdd",
                    "targetGroupId": 2173,
                    "description": "",
                    "active": true,
                    "expression": "true",
                    "expressionJson": "{\"arity\":\"literal\",\"value\":\"true\",\"type\":\"boolean:primitive\"}",
                    "filters": [],
                    "enrolmentMethod": "IMPORT",
                    "defaultValues": [
                        {
                            "id": 21635,
                            "periodId": 19357,
                            "defaultValue": 20.000
                        }
                    ],
                    "targetPeriodDefaultValuesMap": {
                        "19357": {
                            "id": 21635,
                            "periodId": 19357,
                            "defaultValue": 20.000
                        }
                    },
                    "targetMilestoneTriggers": [],
                    "extendedFieldInfo": {
                        "name": "distance",
                        "aggregateFunction": "SUM"
                    }
                }
            ],
            "leaderboardEnabled": false,
            "userCreated": false
        },
        {
            "id": 2172,
            "attribution": {
                "createdOn": "2025-05-22T09:37:41.000+0000",
                "lastUpdatedOn": "2025-05-22T09:37:41.000+0000",
                "lastUpdatedBy": {
                    "id": 75152721,
                    "code": "naman_doc",
                    "description": "",
                    "name": "naman",
                    "type": "TILL"
                },
                "createdBy": {
                    "id": 75152721,
                    "code": "naman_doc",
                    "description": "",
                    "name": "naman",
                    "type": "TILL"
                }
            },
            "orgId": 100737,
            "name": "PurchaseChallenge5",
            "active": false,
            "preferredTillId": 75152721,
            "totalPeriods": 4,
            "description": "Opp",
            "targetEvaluationType": "FIXED_CALENDAR_WINDOW",
            "recurringCycles": 0,
            "frequency": 0,
            "targetCycleStartDate": "2025-04-09T00:00:00.000Z",
            "targetCycleEndDate": "2025-04-12T23:59:59.000Z",
            "frequencyType": "DAILY",
            "trackingType": "DEFAULT",
            "createdOn": 1747906661000,
            "targets": [
                {
                    "id": 2331,
                    "attribution": {
                        "createdOn": "2025-05-22T09:37:41.000+0000",
                        "lastUpdatedOn": "2025-05-22T09:37:41.000+0000",
                        "lastUpdatedBy": {
                            "id": 75152721,
                            "code": "naman_doc",
                            "description": "",
                            "name": "naman",
                            "type": "TILL"
                        },
                        "createdBy": {
                            "id": 75152721,
                            "code": "naman_doc",
                            "description": "",
                            "name": "naman",
                            "type": "TILL"
                        }
                    },
                    "name": "PurchaseChallenge5",
                    "emfRuleSetId": 126404388,
                    "targetType": "SALES",
                    "targetEntity": "TRANSACTION",
                    "eventName": "TransactionAdd",
                    "targetGroupId": 2172,
                    "description": "",
                    "active": false,
                    "expression": "true",
                    "expressionJson": "{\"arity\":\"literal\",\"value\":\"true\",\"type\":\"boolean:primitive\"}",
                    "filters": [],
                    "enrolmentMethod": "IMPORT",
                    "defaultValues": [
                        {
                            "id": 21631,
                            "periodId": 19353,
                            "defaultValue": 1.000
                        },
                        {
                            "id": 21632,
                            "periodId": 19354,
                            "defaultValue": 1.000
                        },
                        {
                            "id": 21633,
                            "periodId": 19355,
                            "defaultValue": 1.000
                        },
                        {
                            "id": 21634,
                            "periodId": 19356,
                            "defaultValue": 1.000
                        }
                    ],
                    "targetPeriodDefaultValuesMap": {
                        "19353": {
                            "id": 21631,
                            "periodId": 19353,
                            "defaultValue": 1.000
                        },
                        "19354": {
                            "id": 21632,
                            "periodId": 19354,
                            "defaultValue": 1.000
                        },
                        "19355": {
                            "id": 21633,
                            "periodId": 19355,
                            "defaultValue": 1.000
                        },
                        "19356": {
                            "id": 21634,
                            "periodId": 19356,
                            "defaultValue": 1.000
                        }
                    },
                    "targetMilestoneTriggers": [],
                    "extendedFieldInfo": {
                        "name": "points",
                        "aggregateFunction": "SUM"
                    }
                }
            ],
            "leaderboardEnabled": false,
            "userCreated": false
        },
        {
            "id": 2164,
            "attribution": {
                "createdOn": "2025-05-22T04:57:22.000+0000",
                "lastUpdatedOn": "2025-05-22T04:57:22.000+0000",
                "lastUpdatedBy": {
                    "id": 75152721,
                    "code": "naman_doc",
                    "description": "",
                    "name": "naman",
                    "type": "TILL"
                },
                "createdBy": {
                    "id": 75152721,
                    "code": "naman_doc",
                    "description": "",
                    "name": "naman",
                    "type": "TILL"
                }
            },
            "orgId": 100737,
            "name": "PurchaseChallenge4",
            "active": false,
            "preferredTillId": 75152721,
            "totalPeriods": 1,
            "description": "Opp",
            "targetEvaluationType": "FIXED_CALENDAR_WINDOW",
            "recurringCycles": 0,
            "frequency": 0,
            "targetCycleStartDate": "2025-05-20T00:00:00.000Z",
            "targetCycleEndDate": "2025-05-22T23:59:59.000Z",
            "frequencyType": "DAILY",
            "trackingType": "DEFAULT",
            "createdOn": 1747889842000,
            "targets": [
                {
                    "id": 2318,
                    "attribution": {
                        "createdOn": "2025-05-22T04:57:22.000+0000",
                        "lastUpdatedOn": "2025-05-22T04:57:22.000+0000",
                        "lastUpdatedBy": {
                            "id": 75152721,
                            "code": "naman_doc",
                            "description": "",
                            "name": "naman",
                            "type": "TILL"
                        },
                        "createdBy": {
                            "id": 75152721,
                            "code": "naman_doc",
                            "description": "",
                            "name": "naman",
                            "type": "TILL"
                        }
                    },
                    "name": "PurchaseChallenge4",
                    "emfRuleSetId": 126404341,
                    "targetType": "SALES",
                    "targetEntity": "TRANSACTION",
                    "eventName": "TransactionAdd",
                    "targetGroupId": 2164,
                    "description": "",
                    "active": false,
                    "expression": "true",
                    "expressionJson": "{\"arity\":\"literal\",\"value\":\"true\",\"type\":\"boolean:primitive\"}",
                    "filters": [],
                    "enrolmentMethod": "IMPORT",
                    "defaultValues": [
                        {
                            "id": 21630,
                            "periodId": 19338,
                            "defaultValue": 1.000
                        }
                    ],
                    "targetPeriodDefaultValuesMap": {
                        "19338": {
                            "id": 21630,
                            "periodId": 19338,
                            "defaultValue": 1.000
                        }
                    },
                    "targetMilestoneTriggers": [],
                    "extendedFieldInfo": {
                        "name": "points",
                        "aggregateFunction": "SUM"
                    }
                }
            ],
            "leaderboardEnabled": false,
            "userCreated": false
        },
        {
            "id": 2163,
            "attribution": {
                "createdOn": "2025-05-22T03:43:09.000+0000",
                "lastUpdatedOn": "2025-05-22T03:43:09.000+0000",
                "lastUpdatedBy": {
                    "id": 75155297,
                    "code": "tj_capillary",
                    "description": "",
                    "name": "tj_capillary",
                    "type": "TILL"
                },
                "createdBy": {
                    "id": 75155297,
                    "code": "tj_capillary",
                    "description": "",
                    "name": "tj_capillary",
                    "type": "TILL"
                }
            },
            "orgId": 100737,
            "name": "uatTargetGroup32",
            "active": false,
            "preferredTillId": 75155297,
            "totalPeriods": 2,
            "description": "UAT target group number thirty two",
            "targetEvaluationType": "FIXED_CALENDAR_WINDOW",
            "recurringCycles": 1,
            "frequency": 1,
            "targetCycleStartDate": "2025-05-22T00:00:00.000Z",
            "targetCycleEndDate": "2025-05-23T23:59:59.000Z",
            "frequencyType": "DAILY",
            "trackingType": "DEFAULT",
            "createdOn": 1747885389000,
            "targets": [
                {
                    "id": 2317,
                    "attribution": {
                        "createdOn": "2025-05-22T03:43:09.000+0000",
                        "lastUpdatedOn": "2025-05-22T03:43:09.000+0000",
                        "lastUpdatedBy": {
                            "id": 75155297,
                            "code": "tj_capillary",
                            "description": "",
                            "name": "tj_capillary",
                            "type": "TILL"
                        },
                        "createdBy": {
                            "id": 75155297,
                            "code": "tj_capillary",
                            "description": "",
                            "name": "tj_capillary",
                            "type": "TILL"
                        }
                    },
                    "name": "uat_target_group_32",
                    "emfRuleSetId": 126404330,
                    "targetType": "ALL",
                    "targetEntity": "TRANSACTION",
                    "eventName": "TransactionAdd",
                    "targetGroupId": 2163,
                    "description": "",
                    "active": false,
                    "expression": "true",
                    "expressionJson": "{\"arity\":\"literal\",\"value\":\"true\",\"type\":\"boolean:primitive\"}",
                    "filters": [],
                    "enrolmentMethod": "IMPORT",
                    "defaultValues": [
                        {
                            "id": 21628,
                            "periodId": 19336,
                            "defaultValue": 1.000
                        },
                        {
                            "id": 21629,
                            "periodId": 19337,
                            "defaultValue": 1.000
                        }
                    ],
                    "targetPeriodDefaultValuesMap": {
                        "19336": {
                            "id": 21628,
                            "periodId": 19336,
                            "defaultValue": 1.000
                        },
                        "19337": {
                            "id": 21629,
                            "periodId": 19337,
                            "defaultValue": 1.000
                        }
                    },
                    "targetMilestoneTriggers": [],
                    "extendedFieldInfo": {
                        "name": "points",
                        "aggregateFunction": "SUM"
                    }
                }
            ],
            "leaderboardEnabled": false,
            "userCreated": false
        },
        {
            "id": 2157,
            "attribution": {
                "createdOn": "2025-05-16T12:28:03.000+0000",
                "lastUpdatedOn": "2025-05-16T12:28:03.000+0000",
                "lastUpdatedBy": {
                    "id": 75152721,
                    "code": "naman_doc",
                    "description": "",
                    "name": "naman",
                    "type": "TILL"
                },
                "createdBy": {
                    "id": 75152721,
                    "code": "naman_doc",
                    "description": "",
                    "name": "naman",
                    "type": "TILL"
                }
            },
            "orgId": 100737,
            "name": "PurchaseChallenge3",
            "active": true,
            "preferredTillId": 75152721,
            "totalPeriods": 1,
            "description": "Opp",
            "targetEvaluationType": "FIXED_CALENDAR_WINDOW",
            "recurringCycles": 0,
            "frequency": 0,
            "targetCycleStartDate": "2025-05-15T00:00:00.000Z",
            "targetCycleEndDate": "2025-05-30T23:59:59.000Z",
            "frequencyType": "DAILY",
            "trackingType": "DEFAULT",
            "createdOn": 1747398483000,
            "targets": [
                {
                    "id": 2310,
                    "attribution": {
                        "createdOn": "2025-05-16T12:28:03.000+0000",
                        "lastUpdatedOn": "2025-05-16T12:28:03.000+0000",
                        "lastUpdatedBy": {
                            "id": 75152721,
                            "code": "naman_doc",
                            "description": "",
                            "name": "naman",
                            "type": "TILL"
                        },
                        "createdBy": {
                            "id": 75152721,
                            "code": "naman_doc",
                            "description": "",
                            "name": "naman",
                            "type": "TILL"
                        }
                    },
                    "name": "PurchaseChallenge3",
                    "emfRuleSetId": 126402713,
                    "targetType": "SALES",
                    "targetEntity": "TRANSACTION",
                    "eventName": "TransactionAdd",
                    "targetGroupId": 2157,
                    "description": "",
                    "active": true,
                    "expression": "true",
                    "expressionJson": "{\"arity\":\"literal\",\"value\":\"true\",\"type\":\"boolean:primitive\"}",
                    "filters": [],
                    "enrolmentMethod": "IMPORT",
                    "defaultValues": [
                        {
                            "id": 19604,
                            "periodId": 17315,
                            "defaultValue": 1.000
                        }
                    ],
                    "targetPeriodDefaultValuesMap": {
                        "17315": {
                            "id": 19604,
                            "periodId": 17315,
                            "defaultValue": 1.000
                        }
                    },
                    "targetMilestoneTriggers": [],
                    "extendedFieldInfo": {
                        "name": "points",
                        "aggregateFunction": "SUM"
                    }
                }
            ],
            "leaderboardEnabled": false,
            "userCreated": false
        },
        {
            "id": 2154,
            "attribution": {
                "createdOn": "2025-05-16T12:19:49.000+0000",
                "lastUpdatedOn": "2025-05-16T12:19:49.000+0000",
                "lastUpdatedBy": {
                    "id": 75152721,
                    "code": "naman_doc",
                    "description": "",
                    "name": "naman",
                    "type": "TILL"
                },
                "createdBy": {
                    "id": 75152721,
                    "code": "naman_doc",
                    "description": "",
                    "name": "naman",
                    "type": "TILL"
                }
            },
            "orgId": 100737,
            "name": "PurchaseChallenge2",
            "active": false,
            "preferredTillId": 75152721,
            "totalPeriods": 1,
            "description": "Opp",
            "targetEvaluationType": "FIXED_CALENDAR_WINDOW",
            "recurringCycles": 0,
            "frequency": 0,
            "targetCycleStartDate": "2025-04-09T00:00:00.000Z",
            "targetCycleEndDate": "2025-04-09T23:59:59.000Z",
            "frequencyType": "DAILY",
            "trackingType": "DEFAULT",
            "createdOn": 1747397989000,
            "targets": [
                {
                    "id": 2309,
                    "attribution": {
                        "createdOn": "2025-05-16T12:19:49.000+0000",
                        "lastUpdatedOn": "2025-05-16T12:19:49.000+0000",
                        "lastUpdatedBy": {
                            "id": 75152721,
                            "code": "naman_doc",
                            "description": "",
                            "name": "naman",
                            "type": "TILL"
                        },
                        "createdBy": {
                            "id": 75152721,
                            "code": "naman_doc",
                            "description": "",
                            "name": "naman",
                            "type": "TILL"
                        }
                    },
                    "name": "PurchaseChallenge2",
                    "emfRuleSetId": 126402712,
                    "targetType": "SALES",
                    "targetEntity": "TRANSACTION",
                    "eventName": "TransactionAdd",
                    "targetGroupId": 2154,
                    "description": "",
                    "active": false,
                    "expression": "true",
                    "expressionJson": "{\"arity\":\"literal\",\"value\":\"true\",\"type\":\"boolean:primitive\"}",
                    "filters": [],
                    "enrolmentMethod": "IMPORT",
                    "defaultValues": [
                        {
                            "id": 19603,
                            "periodId": 17312,
                            "defaultValue": 1.000
                        }
                    ],
                    "targetPeriodDefaultValuesMap": {
                        "17312": {
                            "id": 19603,
                            "periodId": 17312,
                            "defaultValue": 1.000
                        }
                    },
                    "targetMilestoneTriggers": [],
                    "extendedFieldInfo": {
                        "name": "points",
                        "aggregateFunction": "SUM"
                    }
                }
            ],
            "leaderboardEnabled": false,
            "userCreated": false
        },
        {
            "id": 2139,
            "attribution": {
                "createdOn": "2025-05-16T11:54:05.000+0000",
                "lastUpdatedOn": "2025-05-16T11:54:05.000+0000",
                "lastUpdatedBy": {
                    "id": 75155297,
                    "code": "tj_capillary",
                    "description": "",
                    "name": "tj_capillary",
                    "type": "TILL"
                },
                "createdBy": {
                    "id": 75155297,
                    "code": "tj_capillary",
                    "description": "",
                    "name": "tj_capillary",
                    "type": "TILL"
                }
            },
            "orgId": 100737,
            "name": "uatTargetGroup29-renamed",
            "active": false,
            "preferredTillId": 75155297,
            "totalPeriods": 2,
            "description": "custom description",
            "targetEvaluationType": "FIXED_CALENDAR_WINDOW",
            "recurringCycles": 1,
            "frequency": 1,
            "targetCycleStartDate": "2025-05-12T00:00:00.000Z",
            "targetCycleEndDate": "2025-05-13T23:59:59.000Z",
            "frequencyType": "DAILY",
            "trackingType": "DEFAULT",
            "createdOn": 1747396445000,
            "targets": [
                {
                    "id": 2295,
                    "attribution": {
                        "createdOn": "2025-05-13T07:10:03.000+0000",
                        "lastUpdatedOn": "2025-05-13T07:10:03.000+0000",
                        "lastUpdatedBy": {
                            "id": 75155297,
                            "code": "tj_capillary",
                            "description": "",
                            "name": "tj_capillary",
                            "type": "TILL"
                        },
                        "createdBy": {
                            "id": 75155297,
                            "code": "tj_capillary",
                            "description": "",
                            "name": "tj_capillary",
                            "type": "TILL"
                        }
                    },
                    "name": "uat_target_group_29",
                    "emfRuleSetId": 126401517,
                    "targetType": "ALL",
                    "targetEntity": "TRANSACTION",
                    "eventName": "TransactionAdd",
                    "targetGroupId": 2139,
                    "description": "",
                    "active": false,
                    "expression": "true",
                    "expressionJson": "{\"arity\":\"literal\",\"value\":\"true\",\"type\":\"boolean:primitive\"}",
                    "filters": [],
                    "enrolmentMethod": "IMPORT",
                    "defaultValues": [
                        {
                            "id": 15442,
                            "periodId": 13151,
                            "defaultValue": 1.000
                        },
                        {
                            "id": 15443,
                            "periodId": 13152,
                            "defaultValue": 1.000
                        }
                    ],
                    "targetPeriodDefaultValuesMap": {
                        "13152": {
                            "id": 15443,
                            "periodId": 13152,
                            "defaultValue": 1.000
                        },
                        "13151": {
                            "id": 15442,
                            "periodId": 13151,
                            "defaultValue": 1.000
                        }
                    },
                    "targetMilestoneTriggers": [],
                    "extendedFieldInfo": {
                        "name": "points",
                        "aggregateFunction": "SUM"
                    }
                }
            ],
            "leaderboardEnabled": false,
            "userCreated": false
        },
        {
            "id": 2148,
            "attribution": {
                "createdOn": "2025-05-16T05:05:01.000+0000",
                "lastUpdatedOn": "2025-05-16T05:05:01.000+0000",
                "lastUpdatedBy": {
                    "id": 75155297,
                    "code": "tj_capillary",
                    "description": "",
                    "name": "tj_capillary",
                    "type": "TILL"
                },
                "createdBy": {
                    "id": 75155297,
                    "code": "tj_capillary",
                    "description": "",
                    "name": "tj_capillary",
                    "type": "TILL"
                }
            },
            "orgId": 100737,
            "name": "uatTargetGroup31",
            "active": false,
            "preferredTillId": 75155297000,
            "totalPeriods": 2,
            "description": "UAT target group number one",
            "targetEvaluationType": "FIXED_CALENDAR_WINDOW",
            "recurringCycles": 1,
            "frequency": 1,
            "targetCycleStartDate": "2025-05-16T00:00:00.000Z",
            "targetCycleEndDate": "2025-05-17T23:59:59.000Z",
            "frequencyType": "DAILY",
            "trackingType": "DEFAULT",
            "createdOn": 1747371901000,
            "targets": [
                {
                    "id": 2304,
                    "attribution": {
                        "createdOn": "2025-05-16T05:05:01.000+0000",
                        "lastUpdatedOn": "2025-05-16T05:05:01.000+0000",
                        "lastUpdatedBy": {
                            "id": 75155297,
                            "code": "tj_capillary",
                            "description": "",
                            "name": "tj_capillary",
                            "type": "TILL"
                        },
                        "createdBy": {
                            "id": 75155297,
                            "code": "tj_capillary",
                            "description": "",
                            "name": "tj_capillary",
                            "type": "TILL"
                        }
                    },
                    "name": "uat_target_group_31",
                    "emfRuleSetId": 126402626,
                    "targetType": "ALL",
                    "targetEntity": "TRANSACTION",
                    "eventName": "TransactionAdd",
                    "targetGroupId": 2148,
                    "description": "",
                    "active": false,
                    "expression": "true",
                    "expressionJson": "{\"arity\":\"literal\",\"value\":\"true\",\"type\":\"boolean:primitive\"}",
                    "filters": [],
                    "enrolmentMethod": "IMPORT",
                    "defaultValues": [
                        {
                            "id": 16501,
                            "periodId": 14209,
                            "defaultValue": 1.000
                        },
                        {
                            "id": 16502,
                            "periodId": 14210,
                            "defaultValue": 1.000
                        }
                    ],
                    "targetPeriodDefaultValuesMap": {
                        "14209": {
                            "id": 16501,
                            "periodId": 14209,
                            "defaultValue": 1.000
                        },
                        "14210": {
                            "id": 16502,
                            "periodId": 14210,
                            "defaultValue": 1.000
                        }
                    },
                    "targetMilestoneTriggers": [],
                    "extendedFieldInfo": {
                        "name": "points",
                        "aggregateFunction": "SUM"
                    }
                }
            ],
            "leaderboardEnabled": false,
            "userCreated": false
        },
        {
            "id": 2147,
            "attribution": {
                "createdOn": "2025-05-16T04:55:59.000+0000",
                "lastUpdatedOn": "2025-05-16T04:55:59.000+0000",
                "lastUpdatedBy": {
                    "id": 75155297,
                    "code": "tj_capillary",
                    "description": "",
                    "name": "tj_capillary",
                    "type": "TILL"
                },
                "createdBy": {
                    "id": 75155297,
                    "code": "tj_capillary",
                    "description": "",
                    "name": "tj_capillary",
                    "type": "TILL"
                }
            },
            "orgId": 100737,
            "name": "uatTargetGroup30",
            "active": false,
            "preferredTillId": 75155297,
            "totalPeriods": 2,
            "description": "UAT target group number one",
            "targetEvaluationType": "FIXED_CALENDAR_WINDOW",
            "recurringCycles": 1,
            "frequency": 1,
            "targetCycleStartDate": "2025-05-16T00:00:00.000Z",
            "targetCycleEndDate": "2025-05-17T23:59:59.000Z",
            "frequencyType": "DAILY",
            "trackingType": "DEFAULT",
            "createdOn": 1747371359000,
            "targets": [
                {
                    "id": 2303,
                    "attribution": {
                        "createdOn": "2025-05-16T04:55:59.000+0000",
                        "lastUpdatedOn": "2025-05-16T04:55:59.000+0000",
                        "lastUpdatedBy": {
                            "id": 75155297,
                            "code": "tj_capillary",
                            "description": "",
                            "name": "tj_capillary",
                            "type": "TILL"
                        },
                        "createdBy": {
                            "id": 75155297,
                            "code": "tj_capillary",
                            "description": "",
                            "name": "tj_capillary",
                            "type": "TILL"
                        }
                    },
                    "name": "uat_target_group_30",
                    "emfRuleSetId": 126402624,
                    "targetType": "ALL",
                    "targetEntity": "TRANSACTION",
                    "eventName": "TransactionAdd",
                    "targetGroupId": 2147,
                    "description": "",
                    "active": false,
                    "expression": "true",
                    "expressionJson": "{\"arity\":\"literal\",\"value\":\"true\",\"type\":\"boolean:primitive\"}",
                    "filters": [],
                    "enrolmentMethod": "IMPORT",
                    "defaultValues": [
                        {
                            "id": 16499,
                            "periodId": 14207,
                            "defaultValue": 1.000
                        },
                        {
                            "id": 16500,
                            "periodId": 14208,
                            "defaultValue": 1.000
                        }
                    ],
                    "targetPeriodDefaultValuesMap": {
                        "14208": {
                            "id": 16500,
                            "periodId": 14208,
                            "defaultValue": 1.000
                        },
                        "14207": {
                            "id": 16499,
                            "periodId": 14207,
                            "defaultValue": 1.000
                        }
                    },
                    "targetMilestoneTriggers": [],
                    "extendedFieldInfo": {
                        "name": "points",
                        "aggregateFunction": "SUM"
                    }
                }
            ],
            "leaderboardEnabled": false,
            "userCreated": false
        },
        {
            "id": 2104,
            "attribution": {
                "createdOn": "2025-05-13T07:42:30.000+0000",
                "lastUpdatedOn": "2025-05-13T07:42:30.000+0000",
                "lastUpdatedBy": {
                    "id": 75155292,
                    "code": "1736163452_",
                    "description": "",
                    "name": "tirthajit das",
                    "type": "ADMIN_USER"
                },
                "createdBy": {
                    "id": 75155292,
                    "code": "1736163452_",
                    "description": "",
                    "name": "tirthajit das",
                    "type": "ADMIN_USER"
                }
            },
            "orgId": 100737,
            "name": "uatTargetGroup11",
            "active": false,
            "preferredTillId": 75155297,
            "totalPeriods": 2,
            "description": "Opphbkjhb",
            "targetEvaluationType": "FIXED_CALENDAR_WINDOW",
            "recurringCycles": 0,
            "frequency": 0,
            "targetCycleStartDate": "2025-05-12T00:00:00.000Z",
            "targetCycleEndDate": "2025-05-14T23:59:59.000Z",
            "frequencyType": "DAILY",
            "trackingType": "DEFAULT",
            "createdOn": 1747122150000,
            "targets": [
                {
                    "id": 2272,
                    "attribution": {
                        "createdOn": "2025-05-12T05:13:23.000+0000",
                        "lastUpdatedOn": "2025-05-12T05:13:23.000+0000",
                        "lastUpdatedBy": {
                            "id": 75155297,
                            "code": "tj_capillary",
                            "description": "",
                            "name": "tj_capillary",
                            "type": "TILL"
                        },
                        "createdBy": {
                            "id": 75155297,
                            "code": "tj_capillary",
                            "description": "",
                            "name": "tj_capillary",
                            "type": "TILL"
                        }
                    },
                    "name": "uat_target_group_11",
                    "emfRuleSetId": 126401190,
                    "targetType": "ALL",
                    "targetEntity": "TRANSACTION",
                    "eventName": "TransactionAdd",
                    "targetGroupId": 2104,
                    "description": "Opphbkjhb",
                    "active": false,
                    "expression": "true",
                    "expressionJson": "{\"arity\":\"literal\",\"value\":\"true\",\"type\":\"boolean:primitive\"}",
                    "filters": [],
                    "enrolmentMethod": "AUDIENCE_FILTER",
                    "defaultValues": [
                        {
                            "id": 15303,
                            "periodId": 12989,
                            "defaultValue": 5.000
                        },
                        {
                            "id": 15304,
                            "periodId": 12990,
                            "defaultValue": 5.000
                        }
                    ],
                    "targetPeriodDefaultValuesMap": {
                        "12989": {
                            "id": 15303,
                            "periodId": 12989,
                            "defaultValue": 5.000
                        },
                        "12990": {
                            "id": 15304,
                            "periodId": 12990,
                            "defaultValue": 5.000
                        }
                    },
                    "targetMilestoneTriggers": [],
                    "targetAudienceFilter": [
                        {
                            "audienceGroupId": 1094948,
                            "versionId": 9891445,
                            "audienceFilterMetaId": 1190,
                            "lastUpdatedOn": "2025-05-13T07:42:30.000+0000"
                        },
                        {
                            "audienceGroupId": 1098753,
                            "versionId": 9919297,
                            "audienceFilterMetaId": 1189,
                            "lastUpdatedOn": "2025-05-13T07:42:30.000+0000"
                        }
                    ]
                }
            ],
            "leaderboardEnabled": false,
            "userCreated": false
        },
        {
            "id": 2137,
            "attribution": {
                "createdOn": "2025-05-13T06:25:30.000+0000",
                "lastUpdatedOn": "2025-05-13T06:25:30.000+0000",
                "lastUpdatedBy": {
                    "id": 75155297,
                    "code": "tj_capillary",
                    "description": "",
                    "name": "tj_capillary",
                    "type": "TILL"
                },
                "createdBy": {
                    "id": 75155297,
                    "code": "tj_capillary",
                    "description": "",
                    "name": "tj_capillary",
                    "type": "TILL"
                }
            },
            "orgId": 100737,
            "name": "uatTargetGroup28",
            "active": false,
            "preferredTillId": 75155297,
            "totalPeriods": 2,
            "description": "Opp",
            "targetEvaluationType": "FIXED_CALENDAR_WINDOW",
            "recurringCycles": 0,
            "frequency": 0,
            "targetCycleStartDate": "2025-05-12T00:00:00.000Z",
            "targetCycleEndDate": "2025-05-14T23:59:59.000Z",
            "frequencyType": "DAILY",
            "trackingType": "DEFAULT",
            "createdOn": 1747117530000,
            "targets": [
                {
                    "id": 2294,
                    "attribution": {
                        "createdOn": "2025-05-13T06:25:30.000+0000",
                        "lastUpdatedOn": "2025-05-13T06:25:30.000+0000",
                        "lastUpdatedBy": {
                            "id": 75155297,
                            "code": "tj_capillary",
                            "description": "",
                            "name": "tj_capillary",
                            "type": "TILL"
                        },
                        "createdBy": {
                            "id": 75155297,
                            "code": "tj_capillary",
                            "description": "",
                            "name": "tj_capillary",
                            "type": "TILL"
                        }
                    },
                    "name": "uat_target_group_28",
                    "emfRuleSetId": 126401509,
                    "targetType": "ALL",
                    "targetEntity": "TRANSACTION",
                    "eventName": "TransactionAdd",
                    "targetGroupId": 2137,
                    "description": "",
                    "active": false,
                    "expression": "true",
                    "expressionJson": "{\"arity\":\"literal\",\"value\":\"true\",\"type\":\"boolean:primitive\"}",
                    "filters": [],
                    "enrolmentMethod": "IMPORT",
                    "defaultValues": [
                        {
                            "id": 15440,
                            "periodId": 13147,
                            "defaultValue": 1.000
                        },
                        {
                            "id": 15441,
                            "periodId": 13148,
                            "defaultValue": 1.000
                        }
                    ],
                    "targetPeriodDefaultValuesMap": {
                        "13147": {
                            "id": 15440,
                            "periodId": 13147,
                            "defaultValue": 1.000
                        },
                        "13148": {
                            "id": 15441,
                            "periodId": 13148,
                            "defaultValue": 1.000
                        }
                    },
                    "targetMilestoneTriggers": [],
                    "extendedFieldInfo": {
                        "name": "points",
                        "aggregateFunction": "SUM"
                    }
                }
            ],
            "leaderboardEnabled": false,
            "userCreated": false
        },
        {
            "id": 2136,
            "attribution": {
                "createdOn": "2025-05-13T06:14:01.000+0000",
                "lastUpdatedOn": "2025-05-13T06:14:01.000+0000",
                "lastUpdatedBy": {
                    "id": 75155297,
                    "code": "tj_capillary",
                    "description": "",
                    "name": "tj_capillary",
                    "type": "TILL"
                },
                "createdBy": {
                    "id": 75155297,
                    "code": "tj_capillary",
                    "description": "",
                    "name": "tj_capillary",
                    "type": "TILL"
                }
            },
            "orgId": 100737,
            "name": "uatTargetGroup27",
            "active": false,
            "preferredTillId": 75155297,
            "totalPeriods": 2,
            "description": "Opp",
            "targetEvaluationType": "FIXED_CALENDAR_WINDOW",
            "recurringCycles": 0,
            "frequency": 0,
            "targetCycleStartDate": "2025-05-12T00:00:00.000Z",
            "targetCycleEndDate": "2025-05-14T23:59:59.000Z",
            "frequencyType": "DAILY",
            "trackingType": "DEFAULT",
            "createdOn": 1747116841000,
            "targets": [
                {
                    "id": 2293,
                    "attribution": {
                        "createdOn": "2025-05-13T06:14:01.000+0000",
                        "lastUpdatedOn": "2025-05-13T06:14:01.000+0000",
                        "lastUpdatedBy": {
                            "id": 75155297,
                            "code": "tj_capillary",
                            "description": "",
                            "name": "tj_capillary",
                            "type": "TILL"
                        },
                        "createdBy": {
                            "id": 75155297,
                            "code": "tj_capillary",
                            "description": "",
                            "name": "tj_capillary",
                            "type": "TILL"
                        }
                    },
                    "name": "uat_target_group_27",
                    "emfRuleSetId": 126401508,
                    "targetType": "ALL",
                    "targetEntity": "TRANSACTION",
                    "eventName": "TransactionAdd",
                    "targetGroupId": 2136,
                    "description": "",
                    "active": false,
                    "expression": "true",
                    "expressionJson": "{\"arity\":\"literal\",\"value\":\"true\",\"type\":\"boolean:primitive\"}",
                    "filters": [],
                    "enrolmentMethod": "IMPORT",
                    "defaultValues": [
                        {
                            "id": 15438,
                            "periodId": 13145,
                            "defaultValue": 1.000
                        },
                        {
                            "id": 15439,
                            "periodId": 13146,
                            "defaultValue": 1.000
                        }
                    ],
                    "targetPeriodDefaultValuesMap": {
                        "13145": {
                            "id": 15438,
                            "periodId": 13145,
                            "defaultValue": 1.000
                        },
                        "13146": {
                            "id": 15439,
                            "periodId": 13146,
                            "defaultValue": 1.000
                        }
                    },
                    "targetMilestoneTriggers": [],
                    "extendedFieldInfo": {
                        "name": "points",
                        "aggregateFunction": "SUM"
                    }
                }
            ],
            "leaderboardEnabled": false,
            "userCreated": false
        },
        {
            "id": 2134,
            "attribution": {
                "createdOn": "2025-05-13T06:06:08.000+0000",
                "lastUpdatedOn": "2025-05-13T06:06:08.000+0000",
                "lastUpdatedBy": {
                    "id": 75155297,
                    "code": "tj_capillary",
                    "description": "",
                    "name": "tj_capillary",
                    "type": "TILL"
                },
                "createdBy": {
                    "id": 75155297,
                    "code": "tj_capillary",
                    "description": "",
                    "name": "tj_capillary",
                    "type": "TILL"
                }
            },
            "orgId": 100737,
            "name": "user>name",
            "active": false,
            "preferredTillId": 75155297,
            "totalPeriods": 2,
            "description": "Opp",
            "targetEvaluationType": "FIXED_CALENDAR_WINDOW",
            "recurringCycles": 0,
            "frequency": 0,
            "targetCycleStartDate": "2025-05-12T00:00:00.000Z",
            "targetCycleEndDate": "2025-05-14T23:59:59.000Z",
            "frequencyType": "DAILY",
            "trackingType": "DEFAULT",
            "createdOn": 1747116368000,
            "targets": [
                {
                    "id": 2292,
                    "attribution": {
                        "createdOn": "2025-05-13T06:06:08.000+0000",
                        "lastUpdatedOn": "2025-05-13T06:06:08.000+0000",
                        "lastUpdatedBy": {
                            "id": 75155297,
                            "code": "tj_capillary",
                            "description": "",
                            "name": "tj_capillary",
                            "type": "TILL"
                        },
                        "createdBy": {
                            "id": 75155297,
                            "code": "tj_capillary",
                            "description": "",
                            "name": "tj_capillary",
                            "type": "TILL"
                        }
                    },
                    "name": "user>name",
                    "emfRuleSetId": 126401507,
                    "targetType": "ALL",
                    "targetEntity": "TRANSACTION",
                    "eventName": "TransactionAdd",
                    "targetGroupId": 2134,
                    "description": "",
                    "active": false,
                    "expression": "true",
                    "expressionJson": "{\"arity\":\"literal\",\"value\":\"true\",\"type\":\"boolean:primitive\"}",
                    "filters": [],
                    "enrolmentMethod": "IMPORT",
                    "defaultValues": [
                        {
                            "id": 15436,
                            "periodId": 13143,
                            "defaultValue": 1.000
                        },
                        {
                            "id": 15437,
                            "periodId": 13144,
                            "defaultValue": 1.000
                        }
                    ],
                    "targetPeriodDefaultValuesMap": {
                        "13143": {
                            "id": 15436,
                            "periodId": 13143,
                            "defaultValue": 1.000
                        },
                        "13144": {
                            "id": 15437,
                            "periodId": 13144,
                            "defaultValue": 1.000
                        }
                    },
                    "targetMilestoneTriggers": [],
                    "extendedFieldInfo": {
                        "name": "points",
                        "aggregateFunction": "SUM"
                    }
                }
            ],
            "leaderboardEnabled": false,
            "userCreated": false
        },
        {
            "id": 2132,
            "attribution": {
                "createdOn": "2025-05-12T10:44:54.000+0000",
                "lastUpdatedOn": "2025-05-12T10:44:54.000+0000",
                "lastUpdatedBy": {
                    "id": 75155297,
                    "code": "tj_capillary",
                    "description": "",
                    "name": "tj_capillary",
                    "type": "TILL"
                },
                "createdBy": {
                    "id": 75155297,
                    "code": "tj_capillary",
                    "description": "",
                    "name": "tj_capillary",
                    "type": "TILL"
                }
            },
            "orgId": 100737,
            "name": "uatTargetGroup11uatTargetGroup11uatTargetGroup11uatTargetGroup11uatTargetGroup11",
            "active": false,
            "preferredTillId": 75155297,
            "totalPeriods": 2,
            "description": "Opp",
            "targetEvaluationType": "FIXED_CALENDAR_WINDOW",
            "recurringCycles": 0,
            "frequency": 0,
            "targetCycleStartDate": "2025-05-12T00:00:00.000Z",
            "targetCycleEndDate": "2025-05-14T23:59:59.000Z",
            "frequencyType": "DAILY",
            "trackingType": "DEFAULT",
            "createdOn": 1747046694000,
            "targets": [
                {
                    "id": 2291,
                    "attribution": {
                        "createdOn": "2025-05-12T10:44:54.000+0000",
                        "lastUpdatedOn": "2025-05-12T10:44:54.000+0000",
                        "lastUpdatedBy": {
                            "id": 75155297,
                            "code": "tj_capillary",
                            "description": "",
                            "name": "tj_capillary",
                            "type": "TILL"
                        },
                        "createdBy": {
                            "id": 75155297,
                            "code": "tj_capillary",
                            "description": "",
                            "name": "tj_capillary",
                            "type": "TILL"
                        }
                    },
                    "name": "uatTargetGroup11uatTargetGroup11uatTargetGroup11uatTargetGroup11uatTargetGroup11",
                    "emfRuleSetId": 126401284,
                    "targetType": "ALL",
                    "targetEntity": "TRANSACTION",
                    "eventName": "TransactionAdd",
                    "targetGroupId": 2132,
                    "description": "",
                    "active": false,
                    "expression": "true",
                    "expressionJson": "{\"arity\":\"literal\",\"value\":\"true\",\"type\":\"boolean:primitive\"}",
                    "filters": [],
                    "enrolmentMethod": "IMPORT",
                    "defaultValues": [
                        {
                            "id": 15434,
                            "periodId": 13139,
                            "defaultValue": 1.000
                        },
                        {
                            "id": 15435,
                            "periodId": 13140,
                            "defaultValue": 1.000
                        }
                    ],
                    "targetPeriodDefaultValuesMap": {
                        "13139": {
                            "id": 15434,
                            "periodId": 13139,
                            "defaultValue": 1.000
                        },
                        "13140": {
                            "id": 15435,
                            "periodId": 13140,
                            "defaultValue": 1.000
                        }
                    },
                    "targetMilestoneTriggers": [],
                    "extendedFieldInfo": {
                        "name": "points",
                        "aggregateFunction": "SUM"
                    }
                }
            ],
            "leaderboardEnabled": false,
            "userCreated": false
        },
        {
            "id": 2128,
            "attribution": {
                "createdOn": "2025-05-12T10:39:45.000+0000",
                "lastUpdatedOn": "2025-05-12T10:39:45.000+0000",
                "lastUpdatedBy": {
                    "id": 75155297,
                    "code": "tj_capillary",
                    "description": "",
                    "name": "tj_capillary",
                    "type": "TILL"
                },
                "createdBy": {
                    "id": 75155297,
                    "code": "tj_capillary",
                    "description": "",
                    "name": "tj_capillary",
                    "type": "TILL"
                }
            },
            "orgId": 100737,
            "name": "12345",
            "active": false,
            "preferredTillId": 75155297,
            "totalPeriods": 2,
            "description": "Opp",
            "targetEvaluationType": "FIXED_CALENDAR_WINDOW",
            "recurringCycles": 0,
            "frequency": 0,
            "targetCycleStartDate": "2025-05-12T00:00:00.000Z",
            "targetCycleEndDate": "2025-05-14T23:59:59.000Z",
            "frequencyType": "DAILY",
            "trackingType": "DEFAULT",
            "createdOn": 1747046385000,
            "targets": [
                {
                    "id": 2290,
                    "attribution": {
                        "createdOn": "2025-05-12T10:39:45.000+0000",
                        "lastUpdatedOn": "2025-05-12T10:39:45.000+0000",
                        "lastUpdatedBy": {
                            "id": 75155297,
                            "code": "tj_capillary",
                            "description": "",
                            "name": "tj_capillary",
                            "type": "TILL"
                        },
                        "createdBy": {
                            "id": 75155297,
                            "code": "tj_capillary",
                            "description": "",
                            "name": "tj_capillary",
                            "type": "TILL"
                        }
                    },
                    "name": "12345",
                    "emfRuleSetId": 126401283,
                    "targetType": "ALL",
                    "targetEntity": "TRANSACTION",
                    "eventName": "TransactionAdd",
                    "targetGroupId": 2128,
                    "description": "",
                    "active": false,
                    "expression": "true",
                    "expressionJson": "{\"arity\":\"literal\",\"value\":\"true\",\"type\":\"boolean:primitive\"}",
                    "filters": [],
                    "enrolmentMethod": "IMPORT",
                    "defaultValues": [
                        {
                            "id": 15432,
                            "periodId": 13131,
                            "defaultValue": 1.000
                        },
                        {
                            "id": 15433,
                            "periodId": 13132,
                            "defaultValue": 1.000
                        }
                    ],
                    "targetPeriodDefaultValuesMap": {
                        "13131": {
                            "id": 15432,
                            "periodId": 13131,
                            "defaultValue": 1.000
                        },
                        "13132": {
                            "id": 15433,
                            "periodId": 13132,
                            "defaultValue": 1.000
                        }
                    },
                    "targetMilestoneTriggers": [],
                    "extendedFieldInfo": {
                        "name": "points",
                        "aggregateFunction": "SUM"
                    }
                }
            ],
            "leaderboardEnabled": false,
            "userCreated": false
        },
        {
            "id": 2125,
            "attribution": {
                "createdOn": "2025-05-12T10:21:32.000+0000",
                "lastUpdatedOn": "2025-05-12T10:21:32.000+0000",
                "lastUpdatedBy": {
                    "id": 75155297,
                    "code": "tj_capillary",
                    "description": "",
                    "name": "tj_capillary",
                    "type": "TILL"
                },
                "createdBy": {
                    "id": 75155297,
                    "code": "tj_capillary",
                    "description": "",
                    "name": "tj_capillary",
                    "type": "TILL"
                }
            },
            "orgId": 100737,
            "name": "uatTargetGroup24",
            "active": false,
            "preferredTillId": 75155297,
            "totalPeriods": 2,
            "description": "Opp",
            "targetEvaluationType": "FIXED_CALENDAR_WINDOW",
            "recurringCycles": 0,
            "frequency": 0,
            "targetCycleStartDate": "2025-05-12T00:00:00.000Z",
            "targetCycleEndDate": "2025-05-14T23:59:59.000Z",
            "frequencyType": "DAILY",
            "trackingType": "DEFAULT",
            "createdOn": 1747045292000,
            "targets": [
                {
                    "id": 2289,
                    "attribution": {
                        "createdOn": "2025-05-12T10:21:32.000+0000",
                        "lastUpdatedOn": "2025-05-12T10:21:32.000+0000",
                        "lastUpdatedBy": {
                            "id": 75155297,
                            "code": "tj_capillary",
                            "description": "",
                            "name": "tj_capillary",
                            "type": "TILL"
                        },
                        "createdBy": {
                            "id": 75155297,
                            "code": "tj_capillary",
                            "description": "",
                            "name": "tj_capillary",
                            "type": "TILL"
                        }
                    },
                    "name": "uat_target_group_24",
                    "emfRuleSetId": 126401275,
                    "targetType": "ALL",
                    "targetEntity": "TRANSACTION",
                    "eventName": "TransactionAdd",
                    "targetGroupId": 2125,
                    "description": "",
                    "active": false,
                    "expression": "true",
                    "expressionJson": "{\"arity\":\"literal\",\"value\":\"true\",\"type\":\"boolean:primitive\"}",
                    "filters": [],
                    "enrolmentMethod": "IMPORT",
                    "defaultValues": [
                        {
                            "id": 15430,
                            "periodId": 13125,
                            "defaultValue": 1.000
                        },
                        {
                            "id": 15431,
                            "periodId": 13126,
                            "defaultValue": 1.000
                        }
                    ],
                    "targetPeriodDefaultValuesMap": {
                        "13125": {
                            "id": 15430,
                            "periodId": 13125,
                            "defaultValue": 1.000
                        },
                        "13126": {
                            "id": 15431,
                            "periodId": 13126,
                            "defaultValue": 1.000
                        }
                    },
                    "targetMilestoneTriggers": [],
                    "extendedFieldInfo": {
                        "name": "points",
                        "aggregateFunction": "SUM"
                    }
                }
            ],
            "leaderboardEnabled": false,
            "userCreated": false
        },
        {
            "id": 2124,
            "attribution": {
                "createdOn": "2025-05-12T09:47:20.000+0000",
                "lastUpdatedOn": "2025-05-12T09:47:20.000+0000",
                "lastUpdatedBy": {
                    "id": 75155297,
                    "code": "tj_capillary",
                    "description": "",
                    "name": "tj_capillary",
                    "type": "TILL"
                },
                "createdBy": {
                    "id": 75155297,
                    "code": "tj_capillary",
                    "description": "",
                    "name": "tj_capillary",
                    "type": "TILL"
                }
            },
            "orgId": 100737,
            "name": "uatTargetGroup23",
            "active": false,
            "preferredTillId": 75155297,
            "totalPeriods": 2,
            "description": "Opp",
            "targetEvaluationType": "FIXED_CALENDAR_WINDOW",
            "recurringCycles": 0,
            "frequency": 0,
            "targetCycleStartDate": "2025-05-12T00:00:00.000Z",
            "targetCycleEndDate": "2025-05-14T23:59:59.000Z",
            "frequencyType": "DAILY",
            "trackingType": "DEFAULT",
            "createdOn": 1747043240000,
            "targets": [
                {
                    "id": 2288,
                    "attribution": {
                        "createdOn": "2025-05-12T09:47:20.000+0000",
                        "lastUpdatedOn": "2025-05-12T09:47:20.000+0000",
                        "lastUpdatedBy": {
                            "id": 75155297,
                            "code": "tj_capillary",
                            "description": "",
                            "name": "tj_capillary",
                            "type": "TILL"
                        },
                        "createdBy": {
                            "id": 75155297,
                            "code": "tj_capillary",
                            "description": "",
                            "name": "tj_capillary",
                            "type": "TILL"
                        }
                    },
                    "name": "uat_target_group_23",
                    "emfRuleSetId": 126401262,
                    "targetType": "ALL",
                    "targetEntity": "TRANSACTION",
                    "eventName": "TransactionAdd",
                    "targetGroupId": 2124,
                    "description": "",
                    "active": false,
                    "expression": "true",
                    "expressionJson": "{\"arity\":\"literal\",\"value\":\"true\",\"type\":\"boolean:primitive\"}",
                    "filters": [],
                    "enrolmentMethod": "IMPORT",
                    "defaultValues": [
                        {
                            "id": 15428,
                            "periodId": 13123,
                            "defaultValue": 1.000
                        },
                        {
                            "id": 15429,
                            "periodId": 13124,
                            "defaultValue": 1.000
                        }
                    ],
                    "targetPeriodDefaultValuesMap": {
                        "13123": {
                            "id": 15428,
                            "periodId": 13123,
                            "defaultValue": 1.000
                        },
                        "13124": {
                            "id": 15429,
                            "periodId": 13124,
                            "defaultValue": 1.000
                        }
                    },
                    "targetMilestoneTriggers": [],
                    "extendedFieldInfo": {
                        "name": "points",
                        "aggregateFunction": "SUM"
                    }
                }
            ],
            "leaderboardEnabled": false,
            "userCreated": false
        },
        {
            "id": 2122,
            "attribution": {
                "createdOn": "2025-05-12T08:33:46.000+0000",
                "lastUpdatedOn": "2025-05-12T08:33:46.000+0000",
                "lastUpdatedBy": {
                    "id": 75155297,
                    "code": "tj_capillary",
                    "description": "",
                    "name": "tj_capillary",
                    "type": "TILL"
                },
                "createdBy": {
                    "id": 75155297,
                    "code": "tj_capillary",
                    "description": "",
                    "name": "tj_capillary",
                    "type": "TILL"
                }
            },
            "orgId": 100737,
            "name": "uatTargetGroup21",
            "active": false,
            "preferredTillId": 75155297,
            "totalPeriods": 2,
            "description": "Opp",
            "targetEvaluationType": "FIXED_CALENDAR_WINDOW",
            "recurringCycles": 0,
            "frequency": 0,
            "targetCycleStartDate": "2025-05-12T00:00:00.000Z",
            "targetCycleEndDate": "2025-05-14T23:59:59.000Z",
            "frequencyType": "DAILY",
            "trackingType": "DEFAULT",
            "createdOn": 1747038826000,
            "targets": [
                {
                    "id": 2286,
                    "attribution": {
                        "createdOn": "2025-05-12T08:33:46.000+0000",
                        "lastUpdatedOn": "2025-05-12T08:33:46.000+0000",
                        "lastUpdatedBy": {
                            "id": 75155297,
                            "code": "tj_capillary",
                            "description": "",
                            "name": "tj_capillary",
                            "type": "TILL"
                        },
                        "createdBy": {
                            "id": 75155297,
                            "code": "tj_capillary",
                            "description": "",
                            "name": "tj_capillary",
                            "type": "TILL"
                        }
                    },
                    "name": "uat_target_group_21",
                    "emfRuleSetId": 126401244,
                    "targetType": "ALL",
                    "targetEntity": "TRANSACTION",
                    "eventName": "TransactionAdd",
                    "targetGroupId": 2122,
                    "description": "",
                    "active": false,
                    "expression": "true",
                    "expressionJson": "{\"arity\":\"literal\",\"value\":\"true\",\"type\":\"boolean:primitive\"}",
                    "filters": [],
                    "enrolmentMethod": "IMPORT",
                    "defaultValues": [
                        {
                            "id": 15326,
                            "periodId": 13021,
                            "defaultValue": 1.000
                        },
                        {
                            "id": 15327,
                            "periodId": 13022,
                            "defaultValue": 1.000
                        }
                    ],
                    "targetPeriodDefaultValuesMap": {
                        "13021": {
                            "id": 15326,
                            "periodId": 13021,
                            "defaultValue": 1.000
                        },
                        "13022": {
                            "id": 15327,
                            "periodId": 13022,
                            "defaultValue": 1.000
                        }
                    },
                    "targetMilestoneTriggers": [],
                    "extendedFieldInfo": {
                        "name": "points",
                        "aggregateFunction": "SUM"
                    }
                }
            ],
            "leaderboardEnabled": false,
            "userCreated": false
        },
        {
            "id": 2121,
            "attribution": {
                "createdOn": "2025-05-12T08:30:08.000+0000",
                "lastUpdatedOn": "2025-05-12T08:30:08.000+0000",
                "lastUpdatedBy": {
                    "id": 75155297,
                    "code": "tj_capillary",
                    "description": "",
                    "name": "tj_capillary",
                    "type": "TILL"
                },
                "createdBy": {
                    "id": 75155297,
                    "code": "tj_capillary",
                    "description": "",
                    "name": "tj_capillary",
                    "type": "TILL"
                }
            },
            "orgId": 100737,
            "name": "uatTargetGroup20",
            "active": false,
            "preferredTillId": 75155297,
            "totalPeriods": 2,
            "description": "Opp",
            "targetEvaluationType": "FIXED_CALENDAR_WINDOW",
            "recurringCycles": 0,
            "frequency": 0,
            "targetCycleStartDate": "2025-05-12T00:00:00.000Z",
            "targetCycleEndDate": "2025-05-14T23:59:59.000Z",
            "frequencyType": "DAILY",
            "trackingType": "DEFAULT",
            "createdOn": 1747038608000,
            "targets": [
                {
                    "id": 2285,
                    "attribution": {
                        "createdOn": "2025-05-12T08:30:08.000+0000",
                        "lastUpdatedOn": "2025-05-12T08:30:08.000+0000",
                        "lastUpdatedBy": {
                            "id": 75155297,
                            "code": "tj_capillary",
                            "description": "",
                            "name": "tj_capillary",
                            "type": "TILL"
                        },
                        "createdBy": {
                            "id": 75155297,
                            "code": "tj_capillary",
                            "description": "",
                            "name": "tj_capillary",
                            "type": "TILL"
                        }
                    },
                    "name": "uat_target_group_20",
                    "emfRuleSetId": 126401238,
                    "targetType": "ALL",
                    "targetEntity": "TRANSACTION",
                    "eventName": "TransactionAdd",
                    "targetGroupId": 2121,
                    "description": "",
                    "active": false,
                    "expression": "true",
                    "expressionJson": "{\"arity\":\"literal\",\"value\":\"true\",\"type\":\"boolean:primitive\"}",
                    "filters": [],
                    "enrolmentMethod": "IMPORT",
                    "defaultValues": [
                        {
                            "id": 15324,
                            "periodId": 13019,
                            "defaultValue": 1.000
                        },
                        {
                            "id": 15325,
                            "periodId": 13020,
                            "defaultValue": 1.000
                        }
                    ],
                    "targetPeriodDefaultValuesMap": {
                        "13019": {
                            "id": 15324,
                            "periodId": 13019,
                            "defaultValue": 1.000
                        },
                        "13020": {
                            "id": 15325,
                            "periodId": 13020,
                            "defaultValue": 1.000
                        }
                    },
                    "targetMilestoneTriggers": [],
                    "extendedFieldInfo": {
                        "name": "points",
                        "aggregateFunction": "SUM"
                    }
                }
            ],
            "leaderboardEnabled": false,
            "userCreated": false
        },
        {
            "id": 2120,
            "attribution": {
                "createdOn": "2025-05-12T08:17:42.000+0000",
                "lastUpdatedOn": "2025-05-12T08:17:42.000+0000",
                "lastUpdatedBy": {
                    "id": 75139931,
                    "code": "1746689082_",
                    "description": null,
                    "name": "Naman ganapathi",
                    "type": "ADMIN_USER"
                },
                "createdBy": {
                    "id": 75139931,
                    "code": "1746689082_",
                    "description": null,
                    "name": "Naman ganapathi",
                    "type": "ADMIN_USER"
                }
            },
            "orgId": 100737,
            "name": "TransactionChallenge1",
            "active": false,
            "preferredTillId": 75152721,
            "totalPeriods": 3,
            "description": "",
            "targetEvaluationType": "FIXED_CALENDAR_WINDOW",
            "recurringCycles": -1,
            "frequency": 0,
            "targetCycleStartDate": "2025-05-11T18:30:00.000Z",
            "targetCycleEndDate": "2025-05-16T18:30:00.000Z",
            "frequencyType": "DAILY",
            "trackingType": "DEFAULT",
            "createdOn": 1747037862000,
            "targets": [
                {
                    "id": 2284,
                    "attribution": {
                        "createdOn": "2025-05-12T08:17:42.000+0000",
                        "lastUpdatedOn": "2025-05-12T08:17:42.000+0000",
                        "lastUpdatedBy": {
                            "id": 75139931,
                            "code": "1746689082_",
                            "description": null,
                            "name": "Naman ganapathi",
                            "type": "ADMIN_USER"
                        },
                        "createdBy": {
                            "id": 75139931,
                            "code": "1746689082_",
                            "description": null,
                            "name": "Naman ganapathi",
                            "type": "ADMIN_USER"
                        }
                    },
                    "name": "TransactionChallenge1",
                    "emfRuleSetId": 126401237,
                    "targetType": "SALES",
                    "targetEntity": "TRANSACTION",
                    "eventName": "TransactionAdd",
                    "targetGroupId": 2120,
                    "description": "",
                    "active": false,
                    "expression": "true",
                    "expressionJson": "\n{\n  \"arity\":\"literal\",\n  \"value\":\"true\",\n  \"type\":\"boolean:primitive\"\n}",
                    "filters": [],
                    "enrolmentMethod": "TRANSACTION",
                    "defaultValues": [
                        {
                            "id": 15321,
                            "periodId": 13016,
                            "defaultValue": 100.000
                        },
                        {
                            "id": 15322,
                            "periodId": 13017,
                            "defaultValue": 100.000
                        },
                        {
                            "id": 15323,
                            "periodId": 13018,
                            "defaultValue": 100.000
                        }
                    ],
                    "targetPeriodDefaultValuesMap": {
                        "13016": {
                            "id": 15321,
                            "periodId": 13016,
                            "defaultValue": 100.000
                        },
                        "13017": {
                            "id": 15322,
                            "periodId": 13017,
                            "defaultValue": 100.000
                        },
                        "13018": {
                            "id": 15323,
                            "periodId": 13018,
                            "defaultValue": 100.000
                        }
                    },
                    "targetMilestoneTriggers": []
                }
            ],
            "leaderboardEnabled": false,
            "userCreated": false
        },
        {
            "id": 2115,
            "attribution": {
                "createdOn": "2025-05-12T07:07:55.000+0000",
                "lastUpdatedOn": "2025-05-12T07:07:55.000+0000",
                "lastUpdatedBy": {
                    "id": 75155297,
                    "code": "tj_capillary",
                    "description": "",
                    "name": "tj_capillary",
                    "type": "TILL"
                },
                "createdBy": {
                    "id": 75155297,
                    "code": "tj_capillary",
                    "description": "",
                    "name": "tj_capillary",
                    "type": "TILL"
                }
            },
            "orgId": 100737,
            "name": "uatTargetGroup19",
            "active": false,
            "preferredTillId": 75155297,
            "totalPeriods": 2,
            "description": "Opp",
            "targetEvaluationType": "FIXED_CALENDAR_WINDOW",
            "recurringCycles": 0,
            "frequency": 0,
            "targetCycleStartDate": "2025-05-12T00:00:00.000Z",
            "targetCycleEndDate": "2025-05-14T23:59:59.000Z",
            "frequencyType": "DAILY",
            "trackingType": "DEFAULT",
            "createdOn": 1747033675000,
            "targets": [
                {
                    "id": 2283,
                    "attribution": {
                        "createdOn": "2025-05-12T07:07:55.000+0000",
                        "lastUpdatedOn": "2025-05-12T07:07:55.000+0000",
                        "lastUpdatedBy": {
                            "id": 75155297,
                            "code": "tj_capillary",
                            "description": "",
                            "name": "tj_capillary",
                            "type": "TILL"
                        },
                        "createdBy": {
                            "id": 75155297,
                            "code": "tj_capillary",
                            "description": "",
                            "name": "tj_capillary",
                            "type": "TILL"
                        }
                    },
                    "name": "uat_target_group_19",
                    "emfRuleSetId": 126401223,
                    "targetType": "ALL",
                    "targetEntity": "TRANSACTION",
                    "eventName": "TransactionAdd",
                    "targetGroupId": 2115,
                    "description": "",
                    "active": false,
                    "expression": "true",
                    "expressionJson": "{\"arity\":\"literal\",\"value\":\"true\",\"type\":\"boolean:primitive\"}",
                    "filters": [],
                    "enrolmentMethod": "IMPORT",
                    "defaultValues": [
                        {
                            "id": 15319,
                            "periodId": 13011,
                            "defaultValue": 1.000
                        },
                        {
                            "id": 15320,
                            "periodId": 13012,
                            "defaultValue": 1.000
                        }
                    ],
                    "targetPeriodDefaultValuesMap": {
                        "13011": {
                            "id": 15319,
                            "periodId": 13011,
                            "defaultValue": 1.000
                        },
                        "13012": {
                            "id": 15320,
                            "periodId": 13012,
                            "defaultValue": 1.000
                        }
                    },
                    "targetMilestoneTriggers": [],
                    "extendedFieldInfo": {
                        "name": "points",
                        "aggregateFunction": "SUM"
                    }
                }
            ],
            "leaderboardEnabled": false,
            "userCreated": false
        },
        {
            "id": 2114,
            "attribution": {
                "createdOn": "2025-05-12T06:55:25.000+0000",
                "lastUpdatedOn": "2025-05-12T06:55:25.000+0000",
                "lastUpdatedBy": {
                    "id": 75155297,
                    "code": "tj_capillary",
                    "description": "",
                    "name": "tj_capillary",
                    "type": "TILL"
                },
                "createdBy": {
                    "id": 75155297,
                    "code": "tj_capillary",
                    "description": "",
                    "name": "tj_capillary",
                    "type": "TILL"
                }
            },
            "orgId": 100737,
            "name": "uatTargetGroup18",
            "active": false,
            "preferredTillId": 75155297,
            "totalPeriods": 2,
            "description": "Opp",
            "targetEvaluationType": "FIXED_CALENDAR_WINDOW",
            "recurringCycles": 0,
            "frequency": 0,
            "targetCycleStartDate": "2025-05-12T00:00:00.000Z",
            "targetCycleEndDate": "2025-05-14T23:59:59.000Z",
            "frequencyType": "DAILY",
            "trackingType": "DEFAULT",
            "createdOn": 1747032925000,
            "targets": [
                {
                    "id": 2282,
                    "attribution": {
                        "createdOn": "2025-05-12T06:55:25.000+0000",
                        "lastUpdatedOn": "2025-05-12T06:55:25.000+0000",
                        "lastUpdatedBy": {
                            "id": 75155297,
                            "code": "tj_capillary",
                            "description": "",
                            "name": "tj_capillary",
                            "type": "TILL"
                        },
                        "createdBy": {
                            "id": 75155297,
                            "code": "tj_capillary",
                            "description": "",
                            "name": "tj_capillary",
                            "type": "TILL"
                        }
                    },
                    "name": "uat_target_group_18",
                    "emfRuleSetId": 126401221,
                    "targetType": "ALL",
                    "targetEntity": "TRANSACTION",
                    "eventName": "TransactionAdd",
                    "targetGroupId": 2114,
                    "description": "",
                    "active": false,
                    "expression": "true",
                    "expressionJson": "{\"arity\":\"literal\",\"value\":\"true\",\"type\":\"boolean:primitive\"}",
                    "filters": [],
                    "enrolmentMethod": "IMPORT",
                    "defaultValues": [
                        {
                            "id": 15317,
                            "periodId": 13009,
                            "defaultValue": 1.000
                        },
                        {
                            "id": 15318,
                            "periodId": 13010,
                            "defaultValue": 1.000
                        }
                    ],
                    "targetPeriodDefaultValuesMap": {
                        "13009": {
                            "id": 15317,
                            "periodId": 13009,
                            "defaultValue": 1.000
                        },
                        "13010": {
                            "id": 15318,
                            "periodId": 13010,
                            "defaultValue": 1.000
                        }
                    },
                    "targetMilestoneTriggers": [],
                    "extendedFieldInfo": {
                        "name": "points",
                        "aggregateFunction": "SUM"
                    }
                }
            ],
            "leaderboardEnabled": false,
            "userCreated": false
        },
        {
            "id": 2113,
            "attribution": {
                "createdOn": "2025-05-12T06:51:59.000+0000",
                "lastUpdatedOn": "2025-05-12T06:51:59.000+0000",
                "lastUpdatedBy": {
                    "id": 75155297,
                    "code": "tj_capillary",
                    "description": "",
                    "name": "tj_capillary",
                    "type": "TILL"
                },
                "createdBy": {
                    "id": 75155297,
                    "code": "tj_capillary",
                    "description": "",
                    "name": "tj_capillary",
                    "type": "TILL"
                }
            },
            "orgId": 100737,
            "name": "uatTargetGroup17",
            "active": false,
            "preferredTillId": 75155297,
            "totalPeriods": 2,
            "description": "Opp",
            "targetEvaluationType": "FIXED_CALENDAR_WINDOW",
            "recurringCycles": 0,
            "frequency": 0,
            "targetCycleStartDate": "2025-05-12T00:00:00.000Z",
            "targetCycleEndDate": "2025-05-14T23:59:59.000Z",
            "frequencyType": "DAILY",
            "trackingType": "DEFAULT",
            "createdOn": 1747032719000,
            "targets": [
                {
                    "id": 2281,
                    "attribution": {
                        "createdOn": "2025-05-12T06:51:59.000+0000",
                        "lastUpdatedOn": "2025-05-12T06:51:59.000+0000",
                        "lastUpdatedBy": {
                            "id": 75155297,
                            "code": "tj_capillary",
                            "description": "",
                            "name": "tj_capillary",
                            "type": "TILL"
                        },
                        "createdBy": {
                            "id": 75155297,
                            "code": "tj_capillary",
                            "description": "",
                            "name": "tj_capillary",
                            "type": "TILL"
                        }
                    },
                    "name": "uat_target_group_17",
                    "emfRuleSetId": 126401220,
                    "targetType": "ALL",
                    "targetEntity": "TRANSACTION",
                    "eventName": "TransactionAdd",
                    "targetGroupId": 2113,
                    "description": "",
                    "active": false,
                    "expression": "true",
                    "expressionJson": "{\"arity\":\"literal\",\"value\":\"true\",\"type\":\"boolean:primitive\"}",
                    "filters": [],
                    "enrolmentMethod": "IMPORT",
                    "defaultValues": [
                        {
                            "id": 15315,
                            "periodId": 13007,
                            "defaultValue": 1.000
                        },
                        {
                            "id": 15316,
                            "periodId": 13008,
                            "defaultValue": 1.000
                        }
                    ],
                    "targetPeriodDefaultValuesMap": {
                        "13008": {
                            "id": 15316,
                            "periodId": 13008,
                            "defaultValue": 1.000
                        },
                        "13007": {
                            "id": 15315,
                            "periodId": 13007,
                            "defaultValue": 1.000
                        }
                    },
                    "targetMilestoneTriggers": [],
                    "extendedFieldInfo": {
                        "name": "points",
                        "aggregateFunction": "SUM"
                    }
                }
            ],
            "leaderboardEnabled": false,
            "userCreated": false
        },
        {
            "id": 2112,
            "attribution": {
                "createdOn": "2025-05-12T06:50:29.000+0000",
                "lastUpdatedOn": "2025-05-12T06:50:29.000+0000",
                "lastUpdatedBy": {
                    "id": 75155297,
                    "code": "tj_capillary",
                    "description": "",
                    "name": "tj_capillary",
                    "type": "TILL"
                },
                "createdBy": {
                    "id": 75155297,
                    "code": "tj_capillary",
                    "description": "",
                    "name": "tj_capillary",
                    "type": "TILL"
                }
            },
            "orgId": 100737,
            "name": "uatTargetGroup16",
            "active": false,
            "preferredTillId": 75155297,
            "totalPeriods": 2,
            "description": "Opp",
            "targetEvaluationType": "FIXED_CALENDAR_WINDOW",
            "recurringCycles": 0,
            "frequency": 0,
            "targetCycleStartDate": "2025-05-12T00:00:00.000Z",
            "targetCycleEndDate": "2025-05-14T23:59:59.000Z",
            "frequencyType": "DAILY",
            "trackingType": "DEFAULT",
            "createdOn": 1747032629000,
            "targets": [
                {
                    "id": 2280,
                    "attribution": {
                        "createdOn": "2025-05-12T06:50:29.000+0000",
                        "lastUpdatedOn": "2025-05-12T06:50:29.000+0000",
                        "lastUpdatedBy": {
                            "id": 75155297,
                            "code": "tj_capillary",
                            "description": "",
                            "name": "tj_capillary",
                            "type": "TILL"
                        },
                        "createdBy": {
                            "id": 75155297,
                            "code": "tj_capillary",
                            "description": "",
                            "name": "tj_capillary",
                            "type": "TILL"
                        }
                    },
                    "name": "uat_target_group_16",
                    "emfRuleSetId": 126401219,
                    "targetType": "ALL",
                    "targetEntity": "TRANSACTION",
                    "eventName": "TransactionAdd",
                    "targetGroupId": 2112,
                    "description": "",
                    "active": false,
                    "expression": "true",
                    "expressionJson": "{\"arity\":\"literal\",\"value\":\"true\",\"type\":\"boolean:primitive\"}",
                    "filters": [],
                    "enrolmentMethod": "IMPORT",
                    "defaultValues": [
                        {
                            "id": 15313,
                            "periodId": 13005,
                            "defaultValue": 1.000
                        },
                        {
                            "id": 15314,
                            "periodId": 13006,
                            "defaultValue": 1.000
                        }
                    ],
                    "targetPeriodDefaultValuesMap": {
                        "13005": {
                            "id": 15313,
                            "periodId": 13005,
                            "defaultValue": 1.000
                        },
                        "13006": {
                            "id": 15314,
                            "periodId": 13006,
                            "defaultValue": 1.000
                        }
                    },
                    "targetMilestoneTriggers": [],
                    "extendedFieldInfo": {
                        "name": "points",
                        "aggregateFunction": "SUM"
                    }
                }
            ],
            "leaderboardEnabled": false,
            "userCreated": false
        },
        {
            "id": 2111,
            "attribution": {
                "createdOn": "2025-05-12T06:40:23.000+0000",
                "lastUpdatedOn": "2025-05-12T06:40:23.000+0000",
                "lastUpdatedBy": {
                    "id": 75155297,
                    "code": "tj_capillary",
                    "description": "",
                    "name": "tj_capillary",
                    "type": "TILL"
                },
                "createdBy": {
                    "id": 75155297,
                    "code": "tj_capillary",
                    "description": "",
                    "name": "tj_capillary",
                    "type": "TILL"
                }
            },
            "orgId": 100737,
            "name": "uatTargetGroup15",
            "active": false,
            "preferredTillId": 75155297,
            "totalPeriods": 2,
            "description": "Opp",
            "targetEvaluationType": "FIXED_CALENDAR_WINDOW",
            "recurringCycles": 0,
            "frequency": 0,
            "targetCycleStartDate": "2025-05-12T00:00:00.000Z",
            "targetCycleEndDate": "2025-05-14T23:59:59.000Z",
            "frequencyType": "DAILY",
            "trackingType": "DEFAULT",
            "createdOn": 1747032023000,
            "targets": [
                {
                    "id": 2279,
                    "attribution": {
                        "createdOn": "2025-05-12T06:40:23.000+0000",
                        "lastUpdatedOn": "2025-05-12T06:40:23.000+0000",
                        "lastUpdatedBy": {
                            "id": 75155297,
                            "code": "tj_capillary",
                            "description": "",
                            "name": "tj_capillary",
                            "type": "TILL"
                        },
                        "createdBy": {
                            "id": 75155297,
                            "code": "tj_capillary",
                            "description": "",
                            "name": "tj_capillary",
                            "type": "TILL"
                        }
                    },
                    "name": "uat_target_group_15",
                    "emfRuleSetId": 126401218,
                    "targetType": "ALL",
                    "targetEntity": "TRANSACTION",
                    "eventName": "TransactionAdd",
                    "targetGroupId": 2111,
                    "description": "",
                    "active": false,
                    "expression": "true",
                    "expressionJson": "{\"arity\":\"literal\",\"value\":\"true\",\"type\":\"boolean:primitive\"}",
                    "filters": [],
                    "enrolmentMethod": "IMPORT",
                    "defaultValues": [
                        {
                            "id": 15311,
                            "periodId": 13003,
                            "defaultValue": 1.000
                        },
                        {
                            "id": 15312,
                            "periodId": 13004,
                            "defaultValue": 1.000
                        }
                    ],
                    "targetPeriodDefaultValuesMap": {
                        "13003": {
                            "id": 15311,
                            "periodId": 13003,
                            "defaultValue": 1.000
                        },
                        "13004": {
                            "id": 15312,
                            "periodId": 13004,
                            "defaultValue": 1.000
                        }
                    },
                    "targetMilestoneTriggers": [],
                    "extendedFieldInfo": {
                        "name": "points",
                        "aggregateFunction": "SUM"
                    }
                }
            ],
            "leaderboardEnabled": false,
            "userCreated": false
        },
        {
            "id": 2110,
            "attribution": {
                "createdOn": "2025-05-12T06:26:12.000+0000",
                "lastUpdatedOn": "2025-05-12T06:26:12.000+0000",
                "lastUpdatedBy": {
                    "id": 75155297,
                    "code": "tj_capillary",
                    "description": "",
                    "name": "tj_capillary",
                    "type": "TILL"
                },
                "createdBy": {
                    "id": 75155297,
                    "code": "tj_capillary",
                    "description": "",
                    "name": "tj_capillary",
                    "type": "TILL"
                }
            },
            "orgId": 100737,
            "name": "uatTargetGroup14",
            "active": false,
            "preferredTillId": 75155297,
            "totalPeriods": 2,
            "description": "Opp",
            "targetEvaluationType": "FIXED_CALENDAR_WINDOW",
            "recurringCycles": 0,
            "frequency": 0,
            "targetCycleStartDate": "2025-05-12T00:00:00.000Z",
            "targetCycleEndDate": "2025-05-14T23:59:59.000Z",
            "frequencyType": "DAILY",
            "trackingType": "DEFAULT",
            "createdOn": 1747031172000,
            "targets": [
                {
                    "id": 2278,
                    "attribution": {
                        "createdOn": "2025-05-12T06:26:12.000+0000",
                        "lastUpdatedOn": "2025-05-12T06:26:12.000+0000",
                        "lastUpdatedBy": {
                            "id": 75155297,
                            "code": "tj_capillary",
                            "description": "",
                            "name": "tj_capillary",
                            "type": "TILL"
                        },
                        "createdBy": {
                            "id": 75155297,
                            "code": "tj_capillary",
                            "description": "",
                            "name": "tj_capillary",
                            "type": "TILL"
                        }
                    },
                    "name": "uat_target_group_14",
                    "emfRuleSetId": 126401208,
                    "targetType": "ALL",
                    "targetEntity": "TRANSACTION",
                    "eventName": "TransactionAdd",
                    "targetGroupId": 2110,
                    "description": "",
                    "active": false,
                    "expression": "true",
                    "expressionJson": "{\"arity\":\"literal\",\"value\":\"true\",\"type\":\"boolean:primitive\"}",
                    "filters": [],
                    "enrolmentMethod": "IMPORT",
                    "defaultValues": [
                        {
                            "id": 15309,
                            "periodId": 13001,
                            "defaultValue": 1.000
                        },
                        {
                            "id": 15310,
                            "periodId": 13002,
                            "defaultValue": 1.000
                        }
                    ],
                    "targetPeriodDefaultValuesMap": {
                        "13001": {
                            "id": 15309,
                            "periodId": 13001,
                            "defaultValue": 1.000
                        },
                        "13002": {
                            "id": 15310,
                            "periodId": 13002,
                            "defaultValue": 1.000
                        }
                    },
                    "targetMilestoneTriggers": [],
                    "extendedFieldInfo": {
                        "name": "true",
                        "aggregateFunction": "SUM"
                    }
                }
            ],
            "leaderboardEnabled": false,
            "userCreated": false
        },
        {
            "id": 2108,
            "attribution": {
                "createdOn": "2025-05-12T05:29:21.000+0000",
                "lastUpdatedOn": "2025-05-12T05:29:21.000+0000",
                "lastUpdatedBy": {
                    "id": 75155297,
                    "code": "tj_capillary",
                    "description": "",
                    "name": "tj_capillary",
                    "type": "TILL"
                },
                "createdBy": {
                    "id": 75155297,
                    "code": "tj_capillary",
                    "description": "",
                    "name": "tj_capillary",
                    "type": "TILL"
                }
            },
            "orgId": 100737,
            "name": "uatTargetGroup13",
            "active": false,
            "preferredTillId": 75155297,
            "totalPeriods": 2,
            "description": "Opp",
            "targetEvaluationType": "FIXED_CALENDAR_WINDOW",
            "recurringCycles": 0,
            "frequency": 0,
            "targetCycleStartDate": "2025-05-12T00:00:00.000Z",
            "targetCycleEndDate": "2025-05-14T23:59:59.000Z",
            "frequencyType": "DAILY",
            "trackingType": "DEFAULT",
            "createdOn": 1747027761000,
            "targets": [
                {
                    "id": 2276,
                    "attribution": {
                        "createdOn": "2025-05-12T05:29:21.000+0000",
                        "lastUpdatedOn": "2025-05-12T05:29:21.000+0000",
                        "lastUpdatedBy": {
                            "id": 75155297,
                            "code": "tj_capillary",
                            "description": "",
                            "name": "tj_capillary",
                            "type": "TILL"
                        },
                        "createdBy": {
                            "id": 75155297,
                            "code": "tj_capillary",
                            "description": "",
                            "name": "tj_capillary",
                            "type": "TILL"
                        }
                    },
                    "name": "uat_target_group_13",
                    "emfRuleSetId": 126401192,
                    "targetType": "ALL",
                    "targetEntity": "TRANSACTION",
                    "eventName": "TransactionAdd",
                    "targetGroupId": 2108,
                    "description": "",
                    "active": false,
                    "expression": "true",
                    "expressionJson": "{\"arity\":\"literal\",\"value\":\"true\",\"type\":\"boolean:primitive\"}",
                    "filters": [],
                    "enrolmentMethod": "IMPORT",
                    "defaultValues": [
                        {
                            "id": 15307,
                            "periodId": 12997,
                            "defaultValue": 1.000
                        },
                        {
                            "id": 15308,
                            "periodId": 12998,
                            "defaultValue": 1.000
                        }
                    ],
                    "targetPeriodDefaultValuesMap": {
                        "12997": {
                            "id": 15307,
                            "periodId": 12997,
                            "defaultValue": 1.000
                        },
                        "12998": {
                            "id": 15308,
                            "periodId": 12998,
                            "defaultValue": 1.000
                        }
                    },
                    "targetMilestoneTriggers": [],
                    "extendedFieldInfo": {
                        "name": "points",
                        "aggregateFunction": "SUM"
                    }
                }
            ],
            "leaderboardEnabled": false,
            "userCreated": false
        },
        {
            "id": 2106,
            "attribution": {
                "createdOn": "2025-05-12T05:15:58.000+0000",
                "lastUpdatedOn": "2025-05-12T05:15:58.000+0000",
                "lastUpdatedBy": {
                    "id": 75155297,
                    "code": "tj_capillary",
                    "description": "",
                    "name": "tj_capillary",
                    "type": "TILL"
                },
                "createdBy": {
                    "id": 75155297,
                    "code": "tj_capillary",
                    "description": "",
                    "name": "tj_capillary",
                    "type": "TILL"
                }
            },
            "orgId": 100737,
            "name": "uatTargetGroup12",
            "active": false,
            "preferredTillId": 75155297,
            "totalPeriods": 2,
            "description": "Opp",
            "targetEvaluationType": "FIXED_CALENDAR_WINDOW",
            "recurringCycles": 0,
            "frequency": 0,
            "targetCycleStartDate": "2025-05-12T00:00:00.000Z",
            "targetCycleEndDate": "2025-05-14T23:59:59.000Z",
            "frequencyType": "DAILY",
            "trackingType": "DEFAULT",
            "createdOn": 1747026958000,
            "targets": [
                {
                    "id": 2274,
                    "attribution": {
                        "createdOn": "2025-05-12T05:15:58.000+0000",
                        "lastUpdatedOn": "2025-05-12T05:15:58.000+0000",
                        "lastUpdatedBy": {
                            "id": 75155297,
                            "code": "tj_capillary",
                            "description": "",
                            "name": "tj_capillary",
                            "type": "TILL"
                        },
                        "createdBy": {
                            "id": 75155297,
                            "code": "tj_capillary",
                            "description": "",
                            "name": "tj_capillary",
                            "type": "TILL"
                        }
                    },
                    "name": "uat_target_group_12",
                    "emfRuleSetId": 126401191,
                    "targetType": "ALL",
                    "targetEntity": "TRANSACTION",
                    "eventName": "TransactionAdd",
                    "targetGroupId": 2106,
                    "description": "",
                    "active": false,
                    "expression": "true",
                    "expressionJson": "{\"arity\":\"literal\",\"value\":\"true\",\"type\":\"boolean:primitive\"}",
                    "filters": [],
                    "enrolmentMethod": "IMPORT",
                    "defaultValues": [
                        {
                            "id": 15305,
                            "periodId": 12993,
                            "defaultValue": 1.235
                        },
                        {
                            "id": 15306,
                            "periodId": 12994,
                            "defaultValue": 1.000
                        }
                    ],
                    "targetPeriodDefaultValuesMap": {
                        "12993": {
                            "id": 15305,
                            "periodId": 12993,
                            "defaultValue": 1.235
                        },
                        "12994": {
                            "id": 15306,
                            "periodId": 12994,
                            "defaultValue": 1.000
                        }
                    },
                    "targetMilestoneTriggers": [],
                    "extendedFieldInfo": {
                        "name": "points",
                        "aggregateFunction": "SUM"
                    }
                }
            ],
            "leaderboardEnabled": false,
            "userCreated": false
        },
        {
            "id": 2103,
            "attribution": {
                "createdOn": "2025-05-12T05:01:29.000+0000",
                "lastUpdatedOn": "2025-05-12T05:01:29.000+0000",
                "lastUpdatedBy": {
                    "id": 75155297,
                    "code": "tj_capillary",
                    "description": "",
                    "name": "tj_capillary",
                    "type": "TILL"
                },
                "createdBy": {
                    "id": 75155297,
                    "code": "tj_capillary",
                    "description": "",
                    "name": "tj_capillary",
                    "type": "TILL"
                }
            },
            "orgId": 100737,
            "name": "uat_target_group_10",
            "active": false,
            "preferredTillId": 75155297,
            "totalPeriods": 2,
            "description": "Opp",
            "targetEvaluationType": "FIXED_CALENDAR_WINDOW",
            "recurringCycles": 0,
            "frequency": 0,
            "targetCycleStartDate": "2025-05-12T00:00:00.000Z",
            "targetCycleEndDate": "2025-05-14T23:59:59.000Z",
            "frequencyType": "DAILY",
            "trackingType": "DEFAULT",
            "createdOn": 1747026089000,
            "targets": [
                {
                    "id": 2271,
                    "attribution": {
                        "createdOn": "2025-05-12T05:01:29.000+0000",
                        "lastUpdatedOn": "2025-05-12T05:01:29.000+0000",
                        "lastUpdatedBy": {
                            "id": 75155297,
                            "code": "tj_capillary",
                            "description": "",
                            "name": "tj_capillary",
                            "type": "TILL"
                        },
                        "createdBy": {
                            "id": 75155297,
                            "code": "tj_capillary",
                            "description": "",
                            "name": "tj_capillary",
                            "type": "TILL"
                        }
                    },
                    "name": "uat_target_group_10",
                    "emfRuleSetId": 126401189,
                    "targetType": "ALL",
                    "targetEntity": "TRANSACTION",
                    "eventName": "TransactionAdd",
                    "targetGroupId": 2103,
                    "description": "",
                    "active": false,
                    "expression": "true",
                    "expressionJson": "{\"arity\":\"literal\",\"value\":\"true\",\"type\":\"boolean:primitive\"}",
                    "filters": [],
                    "enrolmentMethod": "IMPORT",
                    "defaultValues": [
                        {
                            "id": 15301,
                            "periodId": 12987,
                            "defaultValue": 1.000
                        },
                        {
                            "id": 15302,
                            "periodId": 12988,
                            "defaultValue": 1.000
                        }
                    ],
                    "targetPeriodDefaultValuesMap": {
                        "12987": {
                            "id": 15301,
                            "periodId": 12987,
                            "defaultValue": 1.000
                        },
                        "12988": {
                            "id": 15302,
                            "periodId": 12988,
                            "defaultValue": 1.000
                        }
                    },
                    "targetMilestoneTriggers": [],
                    "extendedFieldInfo": {
                        "name": "points",
                        "aggregateFunction": "SUM"
                    }
                }
            ],
            "leaderboardEnabled": false,
            "userCreated": false
        },
        {
            "id": 2102,
            "attribution": {
                "createdOn": "2025-05-12T05:00:22.000+0000",
                "lastUpdatedOn": "2025-05-12T05:00:22.000+0000",
                "lastUpdatedBy": {
                    "id": 75155297,
                    "code": "tj_capillary",
                    "description": "",
                    "name": "tj_capillary",
                    "type": "TILL"
                },
                "createdBy": {
                    "id": 75155297,
                    "code": "tj_capillary",
                    "description": "",
                    "name": "tj_capillary",
                    "type": "TILL"
                }
            },
            "orgId": 100737,
            "name": "uat_target_group_9",
            "active": false,
            "preferredTillId": 75155297,
            "totalPeriods": 2,
            "description": "Opp",
            "targetEvaluationType": "FIXED_CALENDAR_WINDOW",
            "recurringCycles": 0,
            "frequency": 0,
            "targetCycleStartDate": "2025-05-12T00:00:00.000Z",
            "targetCycleEndDate": "2025-05-13T23:59:59.000Z",
            "frequencyType": "DAILY",
            "trackingType": "DEFAULT",
            "createdOn": 1747026022000,
            "targets": [
                {
                    "id": 2270,
                    "attribution": {
                        "createdOn": "2025-05-12T05:00:22.000+0000",
                        "lastUpdatedOn": "2025-05-12T05:00:22.000+0000",
                        "lastUpdatedBy": {
                            "id": 75155297,
                            "code": "tj_capillary",
                            "description": "",
                            "name": "tj_capillary",
                            "type": "TILL"
                        },
                        "createdBy": {
                            "id": 75155297,
                            "code": "tj_capillary",
                            "description": "",
                            "name": "tj_capillary",
                            "type": "TILL"
                        }
                    },
                    "name": "uat_target_group_9",
                    "emfRuleSetId": 126401187,
                    "targetType": "ALL",
                    "targetEntity": "TRANSACTION",
                    "eventName": "TransactionAdd",
                    "targetGroupId": 2102,
                    "description": "",
                    "active": false,
                    "expression": "true",
                    "expressionJson": "{\"arity\":\"literal\",\"value\":\"true\",\"type\":\"boolean:primitive\"}",
                    "filters": [],
                    "enrolmentMethod": "IMPORT",
                    "defaultValues": [
                        {
                            "id": 15299,
                            "periodId": 12985,
                            "defaultValue": 1.000
                        },
                        {
                            "id": 15300,
                            "periodId": 12986,
                            "defaultValue": 1.000
                        }
                    ],
                    "targetPeriodDefaultValuesMap": {
                        "12985": {
                            "id": 15299,
                            "periodId": 12985,
                            "defaultValue": 1.000
                        },
                        "12986": {
                            "id": 15300,
                            "periodId": 12986,
                            "defaultValue": 1.000
                        }
                    },
                    "targetMilestoneTriggers": [],
                    "extendedFieldInfo": {
                        "name": "points",
                        "aggregateFunction": "SUM"
                    }
                }
            ],
            "leaderboardEnabled": false,
            "userCreated": false
        },
        {
            "id": 2101,
            "attribution": {
                "createdOn": "2025-05-12T04:54:19.000+0000",
                "lastUpdatedOn": "2025-05-12T04:54:19.000+0000",
                "lastUpdatedBy": {
                    "id": 75155297,
                    "code": "tj_capillary",
                    "description": "",
                    "name": "tj_capillary",
                    "type": "TILL"
                },
                "createdBy": {
                    "id": 75155297,
                    "code": "tj_capillary",
                    "description": "",
                    "name": "tj_capillary",
                    "type": "TILL"
                }
            },
            "orgId": 100737,
            "name": "uat_target_group_8",
            "active": false,
            "preferredTillId": 7998987987,
            "totalPeriods": 2,
            "description": "UAT target group number one",
            "targetEvaluationType": "FIXED_CALENDAR_WINDOW",
            "recurringCycles": 1,
            "frequency": 1,
            "targetCycleStartDate": "2025-05-12T00:00:00.000Z",
            "targetCycleEndDate": "2025-05-13T23:59:59.000Z",
            "frequencyType": "DAILY",
            "trackingType": "DEFAULT",
            "createdOn": 1747025659000,
            "targets": [
                {
                    "id": 2269,
                    "attribution": {
                        "createdOn": "2025-05-12T04:54:19.000+0000",
                        "lastUpdatedOn": "2025-05-12T04:54:19.000+0000",
                        "lastUpdatedBy": {
                            "id": 75155297,
                            "code": "tj_capillary",
                            "description": "",
                            "name": "tj_capillary",
                            "type": "TILL"
                        },
                        "createdBy": {
                            "id": 75155297,
                            "code": "tj_capillary",
                            "description": "",
                            "name": "tj_capillary",
                            "type": "TILL"
                        }
                    },
                    "name": "uat_target_group_8",
                    "emfRuleSetId": 126401186,
                    "targetType": "ALL",
                    "targetEntity": "TRANSACTION",
                    "eventName": "TransactionAdd",
                    "targetGroupId": 2101,
                    "description": "",
                    "active": false,
                    "expression": "true",
                    "expressionJson": "{\"arity\":\"literal\",\"value\":\"true\",\"type\":\"boolean:primitive\"}",
                    "filters": [],
                    "enrolmentMethod": "IMPORT",
                    "defaultValues": [
                        {
                            "id": 15297,
                            "periodId": 12983,
                            "defaultValue": 1.000
                        },
                        {
                            "id": 15298,
                            "periodId": 12984,
                            "defaultValue": 1.000
                        }
                    ],
                    "targetPeriodDefaultValuesMap": {
                        "12983": {
                            "id": 15297,
                            "periodId": 12983,
                            "defaultValue": 1.000
                        },
                        "12984": {
                            "id": 15298,
                            "periodId": 12984,
                            "defaultValue": 1.000
                        }
                    },
                    "targetMilestoneTriggers": [],
                    "extendedFieldInfo": {
                        "name": "points",
                        "aggregateFunction": "SUM"
                    }
                }
            ],
            "leaderboardEnabled": false,
            "userCreated": false
        },
        {
            "id": 2096,
            "attribution": {
                "createdOn": "2025-05-12T04:50:08.000+0000",
                "lastUpdatedOn": "2025-05-12T04:50:08.000+0000",
                "lastUpdatedBy": {
                    "id": 75155297,
                    "code": "tj_capillary",
                    "description": "",
                    "name": "tj_capillary",
                    "type": "TILL"
                },
                "createdBy": {
                    "id": 75155297,
                    "code": "tj_capillary",
                    "description": "",
                    "name": "tj_capillary",
                    "type": "TILL"
                }
            },
            "orgId": 100737,
            "name": "uat_target_group_7",
            "active": false,
            "preferredTillId": 239402395702,
            "totalPeriods": 2,
            "description": "UAT target group number one",
            "targetEvaluationType": "FIXED_CALENDAR_WINDOW",
            "recurringCycles": 1,
            "frequency": 1,
            "targetCycleStartDate": "2025-05-12T00:00:00.000Z",
            "targetCycleEndDate": "2025-05-13T23:59:59.000Z",
            "frequencyType": "DAILY",
            "trackingType": "DEFAULT",
            "createdOn": 1747025408000,
            "targets": [
                {
                    "id": 2268,
                    "attribution": {
                        "createdOn": "2025-05-12T04:50:08.000+0000",
                        "lastUpdatedOn": "2025-05-12T04:50:08.000+0000",
                        "lastUpdatedBy": {
                            "id": 75155297,
                            "code": "tj_capillary",
                            "description": "",
                            "name": "tj_capillary",
                            "type": "TILL"
                        },
                        "createdBy": {
                            "id": 75155297,
                            "code": "tj_capillary",
                            "description": "",
                            "name": "tj_capillary",
                            "type": "TILL"
                        }
                    },
                    "name": "uat_target_group_7",
                    "emfRuleSetId": 126401185,
                    "targetType": "ALL",
                    "targetEntity": "TRANSACTION",
                    "eventName": "TransactionAdd",
                    "targetGroupId": 2096,
                    "description": "",
                    "active": false,
                    "expression": "true",
                    "expressionJson": "{\"arity\":\"literal\",\"value\":\"true\",\"type\":\"boolean:primitive\"}",
                    "filters": [],
                    "enrolmentMethod": "IMPORT",
                    "defaultValues": [
                        {
                            "id": 15295,
                            "periodId": 12973,
                            "defaultValue": 1.000
                        },
                        {
                            "id": 15296,
                            "periodId": 12974,
                            "defaultValue": 1.000
                        }
                    ],
                    "targetPeriodDefaultValuesMap": {
                        "12973": {
                            "id": 15295,
                            "periodId": 12973,
                            "defaultValue": 1.000
                        },
                        "12974": {
                            "id": 15296,
                            "periodId": 12974,
                            "defaultValue": 1.000
                        }
                    },
                    "targetMilestoneTriggers": [],
                    "extendedFieldInfo": {
                        "name": "points",
                        "aggregateFunction": "SUM"
                    }
                }
            ],
            "leaderboardEnabled": false,
            "userCreated": false
        },
        {
            "id": 2095,
            "attribution": {
                "createdOn": "2025-05-12T04:45:52.000+0000",
                "lastUpdatedOn": "2025-05-12T04:45:52.000+0000",
                "lastUpdatedBy": {
                    "id": 75155297,
                    "code": "tj_capillary",
                    "description": "",
                    "name": "tj_capillary",
                    "type": "TILL"
                },
                "createdBy": {
                    "id": 75155297,
                    "code": "tj_capillary",
                    "description": "",
                    "name": "tj_capillary",
                    "type": "TILL"
                }
            },
            "orgId": 100737,
            "name": "uat_target_group_6",
            "active": false,
            "preferredTillId": 75155297,
            "totalPeriods": 2,
            "description": "UAT target group number one",
            "targetEvaluationType": "FIXED_CALENDAR_WINDOW",
            "recurringCycles": 1,
            "frequency": 1,
            "targetCycleStartDate": "2025-05-12T00:00:00.000Z",
            "targetCycleEndDate": "2025-05-13T23:59:59.000Z",
            "frequencyType": "DAILY",
            "trackingType": "DEFAULT",
            "createdOn": 1747025152000,
            "targets": [
                {
                    "id": 2267,
                    "attribution": {
                        "createdOn": "2025-05-12T04:45:52.000+0000",
                        "lastUpdatedOn": "2025-05-12T04:45:52.000+0000",
                        "lastUpdatedBy": {
                            "id": 75155297,
                            "code": "tj_capillary",
                            "description": "",
                            "name": "tj_capillary",
                            "type": "TILL"
                        },
                        "createdBy": {
                            "id": 75155297,
                            "code": "tj_capillary",
                            "description": "",
                            "name": "tj_capillary",
                            "type": "TILL"
                        }
                    },
                    "name": "uat_target_group_6",
                    "emfRuleSetId": 126401184,
                    "targetType": "ALL",
                    "targetEntity": "TRANSACTION",
                    "eventName": "TransactionAdd",
                    "targetGroupId": 2095,
                    "description": "",
                    "active": false,
                    "expression": "true",
                    "expressionJson": "{\"arity\":\"literal\",\"value\":\"true\",\"type\":\"boolean:primitive\"}",
                    "filters": [],
                    "enrolmentMethod": "IMPORT",
                    "defaultValues": [
                        {
                            "id": 15293,
                            "periodId": 12971,
                            "defaultValue": 1.000
                        },
                        {
                            "id": 15294,
                            "periodId": 12972,
                            "defaultValue": 1.000
                        }
                    ],
                    "targetPeriodDefaultValuesMap": {
                        "12971": {
                            "id": 15293,
                            "periodId": 12971,
                            "defaultValue": 1.000
                        },
                        "12972": {
                            "id": 15294,
                            "periodId": 12972,
                            "defaultValue": 1.000
                        }
                    },
                    "targetMilestoneTriggers": [],
                    "extendedFieldInfo": {
                        "name": "points",
                        "aggregateFunction": "SUM"
                    }
                }
            ],
            "leaderboardEnabled": false,
            "userCreated": false
        },
        {
            "id": 2094,
            "attribution": {
                "createdOn": "2025-05-12T04:39:56.000+0000",
                "lastUpdatedOn": "2025-05-12T04:39:56.000+0000",
                "lastUpdatedBy": {
                    "id": 75155297,
                    "code": "tj_capillary",
                    "description": "",
                    "name": "tj_capillary",
                    "type": "TILL"
                },
                "createdBy": {
                    "id": 75155297,
                    "code": "tj_capillary",
                    "description": "",
                    "name": "tj_capillary",
                    "type": "TILL"
                }
            },
            "orgId": 100737,
            "name": "uat_target_group_5",
            "active": false,
            "preferredTillId": 75155297,
            "totalPeriods": 2,
            "description": "UAT target group number one",
            "targetEvaluationType": "FIXED_CALENDAR_WINDOW",
            "recurringCycles": 0,
            "frequency": -10,
            "targetCycleStartDate": "2025-05-11T00:00:00.000Z",
            "targetCycleEndDate": "2025-05-12T23:59:59.000Z",
            "frequencyType": "DAILY",
            "trackingType": "DEFAULT",
            "createdOn": 1747024796000,
            "targets": [
                {
                    "id": 2266,
                    "attribution": {
                        "createdOn": "2025-05-12T04:39:56.000+0000",
                        "lastUpdatedOn": "2025-05-12T04:39:56.000+0000",
                        "lastUpdatedBy": {
                            "id": 75155297,
                            "code": "tj_capillary",
                            "description": "",
                            "name": "tj_capillary",
                            "type": "TILL"
                        },
                        "createdBy": {
                            "id": 75155297,
                            "code": "tj_capillary",
                            "description": "",
                            "name": "tj_capillary",
                            "type": "TILL"
                        }
                    },
                    "name": "uat_target_group_5",
                    "emfRuleSetId": 126401183,
                    "targetType": "ALL",
                    "targetEntity": "TRANSACTION",
                    "eventName": "TransactionAdd",
                    "targetGroupId": 2094,
                    "description": "",
                    "active": false,
                    "expression": "true",
                    "expressionJson": "{\"arity\":\"literal\",\"value\":\"true\",\"type\":\"boolean:primitive\"}",
                    "filters": [],
                    "enrolmentMethod": "IMPORT",
                    "defaultValues": [
                        {
                            "id": 15291,
                            "periodId": 12969,
                            "defaultValue": 1.000
                        },
                        {
                            "id": 15292,
                            "periodId": 12970,
                            "defaultValue": 1.000
                        }
                    ],
                    "targetPeriodDefaultValuesMap": {
                        "12969": {
                            "id": 15291,
                            "periodId": 12969,
                            "defaultValue": 1.000
                        },
                        "12970": {
                            "id": 15292,
                            "periodId": 12970,
                            "defaultValue": 1.000
                        }
                    },
                    "targetMilestoneTriggers": [],
                    "extendedFieldInfo": {
                        "name": "points",
                        "aggregateFunction": "SUM"
                    }
                }
            ],
            "leaderboardEnabled": false,
            "userCreated": false
        },
        {
            "id": 2082,
            "attribution": {
                "createdOn": "2025-05-09T05:16:28.000+0000",
                "lastUpdatedOn": "2025-05-09T05:16:28.000+0000",
                "lastUpdatedBy": {
                    "id": 75155297,
                    "code": "tj_capillary",
                    "description": "",
                    "name": "tj_capillary",
                    "type": "TILL"
                },
                "createdBy": {
                    "id": 75155297,
                    "code": "tj_capillary",
                    "description": "",
                    "name": "tj_capillary",
                    "type": "TILL"
                }
            },
            "orgId": 100737,
            "name": "uat_target_group_3",
            "active": false,
            "preferredTillId": 75155297,
            "totalPeriods": 2,
            "description": "UAT target group number one",
            "targetEvaluationType": "FIXED_CALENDAR_WINDOW",
            "recurringCycles": 0,
            "frequency": 0,
            "targetCycleStartDate": "2025-05-08T00:00:00.000Z",
            "targetCycleEndDate": "2025-05-09T23:59:59.000Z",
            "frequencyType": "DAILY",
            "trackingType": "DEFAULT",
            "createdOn": 1746767788000,
            "targets": [
                {
                    "id": 2262,
                    "attribution": {
                        "createdOn": "2025-05-09T05:16:28.000+0000",
                        "lastUpdatedOn": "2025-05-09T05:16:28.000+0000",
                        "lastUpdatedBy": {
                            "id": 75155297,
                            "code": "tj_capillary",
                            "description": "",
                            "name": "tj_capillary",
                            "type": "TILL"
                        },
                        "createdBy": {
                            "id": 75155297,
                            "code": "tj_capillary",
                            "description": "",
                            "name": "tj_capillary",
                            "type": "TILL"
                        }
                    },
                    "name": "uat_target_group_3",
                    "emfRuleSetId": 126400399,
                    "targetType": "ALL",
                    "targetEntity": "TRANSACTION",
                    "eventName": "TransactionAdd",
                    "targetGroupId": 2082,
                    "description": "",
                    "active": false,
                    "expression": "true",
                    "expressionJson": "{\"arity\":\"literal\",\"value\":\"true\",\"type\":\"boolean:primitive\"}",
                    "filters": [],
                    "enrolmentMethod": "IMPORT",
                    "defaultValues": [
                        {
                            "id": 15180,
                            "periodId": 12842,
                            "defaultValue": 1.000
                        },
                        {
                            "id": 15181,
                            "periodId": 12843,
                            "defaultValue": 1.000
                        }
                    ],
                    "targetPeriodDefaultValuesMap": {
                        "12842": {
                            "id": 15180,
                            "periodId": 12842,
                            "defaultValue": 1.000
                        },
                        "12843": {
                            "id": 15181,
                            "periodId": 12843,
                            "defaultValue": 1.000
                        }
                    },
                    "targetMilestoneTriggers": [],
                    "extendedFieldInfo": {
                        "name": "points",
                        "aggregateFunction": "SUM"
                    }
                }
            ],
            "leaderboardEnabled": false,
            "userCreated": false
        },
        {
            "id": 2080,
            "attribution": {
                "createdOn": "2025-05-09T05:13:57.000+0000",
                "lastUpdatedOn": "2025-05-09T05:13:57.000+0000",
                "lastUpdatedBy": {
                    "id": 75155297,
                    "code": "tj_capillary",
                    "description": "",
                    "name": "tj_capillary",
                    "type": "TILL"
                },
                "createdBy": {
                    "id": 75155297,
                    "code": "tj_capillary",
                    "description": "",
                    "name": "tj_capillary",
                    "type": "TILL"
                }
            },
            "orgId": 100737,
            "name": "uat_target_group_2",
            "active": false,
            "preferredTillId": 75155297,
            "totalPeriods": 2,
            "description": "UAT target group number one",
            "targetEvaluationType": "FIXED_CALENDAR_WINDOW",
            "recurringCycles": 0,
            "frequency": 0,
            "targetCycleStartDate": "2025-05-08T00:00:00.000Z",
            "targetCycleEndDate": "2025-05-09T23:59:59.000Z",
            "frequencyType": "DAILY",
            "trackingType": "DEFAULT",
            "createdOn": 1746767637000,
            "targets": [
                {
                    "id": 2261,
                    "attribution": {
                        "createdOn": "2025-05-09T05:13:57.000+0000",
                        "lastUpdatedOn": "2025-05-09T05:13:57.000+0000",
                        "lastUpdatedBy": {
                            "id": 75155297,
                            "code": "tj_capillary",
                            "description": "",
                            "name": "tj_capillary",
                            "type": "TILL"
                        },
                        "createdBy": {
                            "id": 75155297,
                            "code": "tj_capillary",
                            "description": "",
                            "name": "tj_capillary",
                            "type": "TILL"
                        }
                    },
                    "name": "uat_target_group_2",
                    "emfRuleSetId": 126400398,
                    "targetType": "ALL",
                    "targetEntity": "TRANSACTION",
                    "eventName": "TransactionAdd",
                    "targetGroupId": 2080,
                    "description": "",
                    "active": false,
                    "expression": "true",
                    "expressionJson": "{\"arity\":\"literal\",\"value\":\"true\",\"type\":\"boolean:primitive\"}",
                    "filters": [],
                    "enrolmentMethod": "IMPORT",
                    "defaultValues": [
                        {
                            "id": 15178,
                            "periodId": 12838,
                            "defaultValue": 1.000
                        },
                        {
                            "id": 15179,
                            "periodId": 12839,
                            "defaultValue": 1.000
                        }
                    ],
                    "targetPeriodDefaultValuesMap": {
                        "12838": {
                            "id": 15178,
                            "periodId": 12838,
                            "defaultValue": 1.000
                        },
                        "12839": {
                            "id": 15179,
                            "periodId": 12839,
                            "defaultValue": 1.000
                        }
                    },
                    "targetMilestoneTriggers": [],
                    "extendedFieldInfo": {}
                }
            ],
            "leaderboardEnabled": false,
            "userCreated": false
        },
        {
            "id": 2077,
            "attribution": {
                "createdOn": "2025-05-08T12:22:29.000+0000",
                "lastUpdatedOn": "2025-05-08T12:22:29.000+0000",
                "lastUpdatedBy": {
                    "id": 75155297,
                    "code": "tj_capillary",
                    "description": "",
                    "name": "tj_capillary",
                    "type": "TILL"
                },
                "createdBy": {
                    "id": 75155297,
                    "code": "tj_capillary",
                    "description": "",
                    "name": "tj_capillary",
                    "type": "TILL"
                }
            },
            "orgId": 100737,
            "name": "uat_target_group_1",
            "active": false,
            "preferredTillId": 75155297,
            "totalPeriods": 2,
            "description": "UAT target group number one",
            "targetEvaluationType": "FIXED_CALENDAR_WINDOW",
            "recurringCycles": 0,
            "frequency": 0,
            "targetCycleStartDate": "2025-05-08T00:00:00.000Z",
            "targetCycleEndDate": "2025-05-09T23:59:59.000Z",
            "frequencyType": "DAILY",
            "trackingType": "DEFAULT",
            "createdOn": 1746706949000,
            "targets": [
                {
                    "id": 2258,
                    "attribution": {
                        "createdOn": "2025-05-08T12:22:29.000+0000",
                        "lastUpdatedOn": "2025-05-08T12:22:29.000+0000",
                        "lastUpdatedBy": {
                            "id": 75155297,
                            "code": "tj_capillary",
                            "description": "",
                            "name": "tj_capillary",
                            "type": "TILL"
                        },
                        "createdBy": {
                            "id": 75155297,
                            "code": "tj_capillary",
                            "description": "",
                            "name": "tj_capillary",
                            "type": "TILL"
                        }
                    },
                    "name": "uat_target_group_1",
                    "emfRuleSetId": 126400221,
                    "targetType": "ALL",
                    "targetEntity": "TRANSACTION",
                    "eventName": "TransactionAdd",
                    "targetGroupId": 2077,
                    "description": "",
                    "active": false,
                    "expression": "true",
                    "expressionJson": "{\"arity\":\"literal\",\"value\":\"true\",\"type\":\"boolean:primitive\"}",
                    "filters": [],
                    "enrolmentMethod": "IMPORT",
                    "defaultValues": [
                        {
                            "id": 15174,
                            "periodId": 12834,
                            "defaultValue": 1.000
                        },
                        {
                            "id": 15175,
                            "periodId": 12835,
                            "defaultValue": 1.000
                        }
                    ],
                    "targetPeriodDefaultValuesMap": {
                        "12834": {
                            "id": 15174,
                            "periodId": 12834,
                            "defaultValue": 1.000
                        },
                        "12835": {
                            "id": 15175,
                            "periodId": 12835,
                            "defaultValue": 1.000
                        }
                    },
                    "targetMilestoneTriggers": []
                }
            ],
            "leaderboardEnabled": false,
            "userCreated": false
        },
        {
            "id": 2059,
            "attribution": {
                "createdOn": "2025-05-08T06:05:58.000+0000",
                "lastUpdatedOn": "2025-05-08T06:05:58.000+0000",
                "lastUpdatedBy": {
                    "id": 75160044,
                    "code": "1739864914683_",
                    "description": "",
                    "name": "madhurima ",
                    "type": "ADMIN_USER"
                },
                "createdBy": {
                    "id": 75160044,
                    "code": "1739864914683_",
                    "description": "",
                    "name": "madhurima ",
                    "type": "ADMIN_USER"
                }
            },
            "orgId": 100737,
            "name": "testms",
            "active": false,
            "preferredTillId": 75161978,
            "totalPeriods": 1,
            "description": "",
            "targetEvaluationType": "FIXED_CALENDAR_WINDOW",
            "recurringCycles": -1,
            "frequency": 0,
            "targetCycleStartDate": "2025-05-07T18:30:00.000Z",
            "targetCycleEndDate": "2025-05-09T18:30:00.000Z",
            "frequencyType": "DAILY",
            "trackingType": "DEFAULT",
            "createdOn": 1746684358000,
            "targets": [
                {
                    "id": 2254,
                    "attribution": {
                        "createdOn": "2025-05-08T06:05:58.000+0000",
                        "lastUpdatedOn": "2025-05-08T06:05:58.000+0000",
                        "lastUpdatedBy": {
                            "id": 75160044,
                            "code": "1739864914683_",
                            "description": "",
                            "name": "madhurima ",
                            "type": "ADMIN_USER"
                        },
                        "createdBy": {
                            "id": 75160044,
                            "code": "1739864914683_",
                            "description": "",
                            "name": "madhurima ",
                            "type": "ADMIN_USER"
                        }
                    },
                    "name": "testms",
                    "emfRuleSetId": 126400104,
                    "targetType": "SALES",
                    "targetEntity": "TRANSACTION",
                    "eventName": "TransactionAdd",
                    "targetGroupId": 2059,
                    "description": "",
                    "active": false,
                    "expression": "true",
                    "expressionJson": "\n{\n  \"arity\":\"literal\",\n  \"value\":\"true\",\n  \"type\":\"boolean:primitive\"\n}",
                    "filters": [],
                    "enrolmentMethod": "TRANSACTION",
                    "defaultValues": [
                        {
                            "id": 15131,
                            "periodId": 12763,
                            "defaultValue": 100.000
                        }
                    ],
                    "targetPeriodDefaultValuesMap": {
                        "12763": {
                            "id": 15131,
                            "periodId": 12763,
                            "defaultValue": 100.000
                        }
                    },
                    "targetMilestoneTriggers": []
                }
            ],
            "leaderboardEnabled": false,
            "userCreated": false
        },
        {
            "id": 2058,
            "attribution": {
                "createdOn": "2025-05-08T06:04:38.000+0000",
                "lastUpdatedOn": "2025-05-08T06:04:38.000+0000",
                "lastUpdatedBy": {
                    "id": 75160045,
                    "code": "1739864915684_",
                    "description": "",
                    "name": "george ",
                    "type": "ADMIN_USER"
                },
                "createdBy": {
                    "id": 75160045,
                    "code": "1739864915684_",
                    "description": "",
                    "name": "george ",
                    "type": "ADMIN_USER"
                }
            },
            "orgId": 100737,
            "name": "George milestone",
            "active": false,
            "preferredTillId": 75161978,
            "totalPeriods": 10,
            "description": "god",
            "targetEvaluationType": "FIXED_CALENDAR_WINDOW",
            "recurringCycles": -1,
            "frequency": 0,
            "targetCycleStartDate": "2025-04-30T18:30:00.000Z",
            "targetCycleEndDate": "2025-06-30T18:30:00.000Z",
            "frequencyType": "DAILY",
            "trackingType": "DEFAULT",
            "createdOn": 1746684278000,
            "targets": [
                {
                    "id": 2253,
                    "attribution": {
                        "createdOn": "2025-05-08T06:04:38.000+0000",
                        "lastUpdatedOn": "2025-05-08T06:04:38.000+0000",
                        "lastUpdatedBy": {
                            "id": 75160045,
                            "code": "1739864915684_",
                            "description": "",
                            "name": "george ",
                            "type": "ADMIN_USER"
                        },
                        "createdBy": {
                            "id": 75160045,
                            "code": "1739864915684_",
                            "description": "",
                            "name": "george ",
                            "type": "ADMIN_USER"
                        }
                    },
                    "name": "George milestone",
                    "emfRuleSetId": 126400103,
                    "targetType": "SALES",
                    "targetEntity": "TRANSACTION",
                    "eventName": "TransactionAdd",
                    "targetGroupId": 2058,
                    "description": "god",
                    "active": false,
                    "expression": "true",
                    "expressionJson": "\n{\n  \"arity\":\"literal\",\n  \"value\":\"true\",\n  \"type\":\"boolean:primitive\"\n}",
                    "filters": [],
                    "enrolmentMethod": "TRANSACTION",
                    "defaultValues": [
                        {
                            "id": 15121,
                            "periodId": 12753,
                            "defaultValue": 100.000
                        },
                        {
                            "id": 15122,
                            "periodId": 12754,
                            "defaultValue": 100.000
                        },
                        {
                            "id": 15123,
                            "periodId": 12755,
                            "defaultValue": 100.000
                        },
                        {
                            "id": 15124,
                            "periodId": 12756,
                            "defaultValue": 100.000
                        },
                        {
                            "id": 15125,
                            "periodId": 12757,
                            "defaultValue": 100.000
                        },
                        {
                            "id": 15126,
                            "periodId": 12758,
                            "defaultValue": 100.000
                        },
                        {
                            "id": 15127,
                            "periodId": 12759,
                            "defaultValue": 100.000
                        },
                        {
                            "id": 15128,
                            "periodId": 12760,
                            "defaultValue": 100.000
                        },
                        {
                            "id": 15129,
                            "periodId": 12761,
                            "defaultValue": 100.000
                        },
                        {
                            "id": 15130,
                            "periodId": 12762,
                            "defaultValue": 100.000
                        }
                    ],
                    "targetPeriodDefaultValuesMap": {
                        "12753": {
                            "id": 15121,
                            "periodId": 12753,
                            "defaultValue": 100.000
                        },
                        "12754": {
                            "id": 15122,
                            "periodId": 12754,
                            "defaultValue": 100.000
                        },
                        "12755": {
                            "id": 15123,
                            "periodId": 12755,
                            "defaultValue": 100.000
                        },
                        "12756": {
                            "id": 15124,
                            "periodId": 12756,
                            "defaultValue": 100.000
                        },
                        "12757": {
                            "id": 15125,
                            "periodId": 12757,
                            "defaultValue": 100.000
                        },
                        "12758": {
                            "id": 15126,
                            "periodId": 12758,
                            "defaultValue": 100.000
                        },
                        "12759": {
                            "id": 15127,
                            "periodId": 12759,
                            "defaultValue": 100.000
                        },
                        "12760": {
                            "id": 15128,
                            "periodId": 12760,
                            "defaultValue": 100.000
                        },
                        "12761": {
                            "id": 15129,
                            "periodId": 12761,
                            "defaultValue": 100.000
                        },
                        "12762": {
                            "id": 15130,
                            "periodId": 12762,
                            "defaultValue": 100.000
                        }
                    },
                    "targetMilestoneTriggers": []
                }
            ],
            "leaderboardEnabled": false,
            "userCreated": false
        },
        {
            "id": 2057,
            "attribution": {
                "createdOn": "2025-05-08T05:06:10.000+0000",
                "lastUpdatedOn": "2025-05-08T05:06:10.000+0000",
                "lastUpdatedBy": {
                    "id": 75155297,
                    "code": "tj_capillary",
                    "description": "",
                    "name": "tj_capillary",
                    "type": "TILL"
                },
                "createdBy": {
                    "id": 75155297,
                    "code": "tj_capillary",
                    "description": "",
                    "name": "tj_capillary",
                    "type": "TILL"
                }
            },
            "orgId": 100737,
            "name": "UCCtesttarget2",
            "active": true,
            "preferredTillId": 75050875,
            "totalPeriods": 0,
            "description": "Opp",
            "targetEvaluationType": "FIXED_CALENDAR_WINDOW",
            "recurringCycles": 0,
            "frequency": 0,
            "targetCycleStartDate": "2025-05-08T05:06:10.000Z",
            "targetCycleEndDate": "2030-05-08T05:06:10.000Z",
            "frequencyType": "DAILY",
            "trackingType": "DEFAULT",
            "createdOn": 1746680770000,
            "targets": [],
            "leaderboardEnabled": false,
            "userCreated": false
        },
        {
            "id": 2056,
            "attribution": {
                "createdOn": "2025-05-08T01:21:11.000+0000",
                "lastUpdatedOn": "2025-05-08T01:21:11.000+0000",
                "lastUpdatedBy": {
                    "id": 75143331,
                    "code": "1746602615_",
                    "description": null,
                    "name": "rakesh ",
                    "type": "ADMIN_USER"
                },
                "createdBy": {
                    "id": 75143331,
                    "code": "1746602615_",
                    "description": null,
                    "name": "rakesh ",
                    "type": "ADMIN_USER"
                }
            },
            "orgId": 100737,
            "name": "test_miles",
            "active": false,
            "preferredTillId": 75161978,
            "totalPeriods": 1,
            "description": "",
            "targetEvaluationType": "FIXED_CALENDAR_WINDOW",
            "recurringCycles": -1,
            "frequency": 0,
            "targetCycleStartDate": "2025-05-07T18:30:00.000Z",
            "targetCycleEndDate": "2025-05-16T18:30:00.000Z",
            "frequencyType": "WEEKLY",
            "trackingType": "DEFAULT",
            "createdOn": 1746667271000,
            "targets": [
                {
                    "id": 2252,
                    "attribution": {
                        "createdOn": "2025-05-08T01:21:11.000+0000",
                        "lastUpdatedOn": "2025-05-08T01:21:11.000+0000",
                        "lastUpdatedBy": {
                            "id": 75143331,
                            "code": "1746602615_",
                            "description": null,
                            "name": "rakesh ",
                            "type": "ADMIN_USER"
                        },
                        "createdBy": {
                            "id": 75143331,
                            "code": "1746602615_",
                            "description": null,
                            "name": "rakesh ",
                            "type": "ADMIN_USER"
                        }
                    },
                    "name": "test_miles",
                    "emfRuleSetId": 126400055,
                    "targetType": "SALES",
                    "targetEntity": "TRANSACTION",
                    "eventName": "TransactionAdd",
                    "targetGroupId": 2056,
                    "description": "",
                    "active": false,
                    "expression": "true",
                    "expressionJson": "\n{\n  \"arity\":\"literal\",\n  \"value\":\"true\",\n  \"type\":\"boolean:primitive\"\n}",
                    "filters": [],
                    "enrolmentMethod": "TRANSACTION",
                    "defaultValues": [
                        {
                            "id": 15120,
                            "periodId": 12752,
                            "defaultValue": 10.000
                        }
                    ],
                    "targetPeriodDefaultValuesMap": {
                        "12752": {
                            "id": 15120,
                            "periodId": 12752,
                            "defaultValue": 10.000
                        }
                    },
                    "targetMilestoneTriggers": []
                }
            ],
            "leaderboardEnabled": false,
            "userCreated": false
        },
        {
            "id": 2009,
            "attribution": {
                "createdOn": "2025-04-30T07:46:57.000+0000",
                "lastUpdatedOn": "2025-04-30T07:46:57.000+0000",
                "lastUpdatedBy": {
                    "id": 75120801,
                    "code": "1711516618_",
                    "description": "",
                    "name": "giridhar m",
                    "type": "ADMIN_USER"
                },
                "createdBy": {
                    "id": 75120801,
                    "code": "1711516618_",
                    "description": "",
                    "name": "giridhar m",
                    "type": "ADMIN_USER"
                }
            },
            "orgId": 100737,
            "name": "ErrorTest3",
            "active": false,
            "preferredTillId": 75152721,
            "totalPeriods": 5,
            "description": "",
            "targetEvaluationType": "FIXED_CALENDAR_WINDOW",
            "recurringCycles": -1,
            "frequency": 0,
            "targetCycleStartDate": "2025-03-31T18:30:00.000Z",
            "targetCycleEndDate": "2025-05-31T18:30:00.000Z",
            "frequencyType": "DAILY",
            "trackingType": "DEFAULT",
            "createdOn": 1745999217000,
            "targets": [
                {
                    "id": 2177,
                    "attribution": {
                        "createdOn": "2025-04-30T07:46:57.000+0000",
                        "lastUpdatedOn": "2025-04-30T07:46:57.000+0000",
                        "lastUpdatedBy": {
                            "id": 75120801,
                            "code": "1711516618_",
                            "description": "",
                            "name": "giridhar m",
                            "type": "ADMIN_USER"
                        },
                        "createdBy": {
                            "id": 75120801,
                            "code": "1711516618_",
                            "description": "",
                            "name": "giridhar m",
                            "type": "ADMIN_USER"
                        }
                    },
                    "name": "ErrorTest3",
                    "emfRuleSetId": 126397830,
                    "targetType": "SALES",
                    "targetEntity": "TRANSACTION",
                    "eventName": "TransactionAdd",
                    "targetGroupId": 2009,
                    "description": "",
                    "active": false,
                    "expression": "true",
                    "expressionJson": "\n{\n  \"arity\":\"literal\",\n  \"value\":\"true\",\n  \"type\":\"boolean:primitive\"\n}",
                    "filters": [],
                    "enrolmentMethod": "TRANSACTION",
                    "defaultValues": [
                        {
                            "id": 14726,
                            "periodId": 12422,
                            "defaultValue": 10.000
                        },
                        {
                            "id": 14727,
                            "periodId": 12423,
                            "defaultValue": 10.000
                        },
                        {
                            "id": 14728,
                            "periodId": 12424,
                            "defaultValue": 10.000
                        },
                        {
                            "id": 14729,
                            "periodId": 12425,
                            "defaultValue": 10.000
                        },
                        {
                            "id": 14730,
                            "periodId": 12426,
                            "defaultValue": 10.000
                        }
                    ],
                    "targetPeriodDefaultValuesMap": {
                        "12422": {
                            "id": 14726,
                            "periodId": 12422,
                            "defaultValue": 10.000
                        },
                        "12423": {
                            "id": 14727,
                            "periodId": 12423,
                            "defaultValue": 10.000
                        },
                        "12424": {
                            "id": 14728,
                            "periodId": 12424,
                            "defaultValue": 10.000
                        },
                        "12425": {
                            "id": 14729,
                            "periodId": 12425,
                            "defaultValue": 10.000
                        },
                        "12426": {
                            "id": 14730,
                            "periodId": 12426,
                            "defaultValue": 10.000
                        }
                    },
                    "targetMilestoneTriggers": []
                }
            ],
            "leaderboardEnabled": false,
            "userCreated": false
        },
        {
            "id": 2007,
            "attribution": {
                "createdOn": "2025-04-30T07:45:18.000+0000",
                "lastUpdatedOn": "2025-04-30T07:45:18.000+0000",
                "lastUpdatedBy": {
                    "id": 75120801,
                    "code": "1711516618_",
                    "description": "",
                    "name": "giridhar m",
                    "type": "ADMIN_USER"
                },
                "createdBy": {
                    "id": 75120801,
                    "code": "1711516618_",
                    "description": "",
                    "name": "giridhar m",
                    "type": "ADMIN_USER"
                }
            },
            "orgId": 100737,
            "name": "ErrorTest2",
            "active": false,
            "preferredTillId": 75152721,
            "totalPeriods": 5,
            "description": "",
            "targetEvaluationType": "FIXED_CALENDAR_WINDOW",
            "recurringCycles": -1,
            "frequency": 0,
            "targetCycleStartDate": "2025-03-31T18:30:00.000Z",
            "targetCycleEndDate": "2025-05-31T18:30:00.000Z",
            "frequencyType": "WEEKLY",
            "trackingType": "DEFAULT",
            "createdOn": 1745999118000,
            "targets": [
                {
                    "id": 2175,
                    "attribution": {
                        "createdOn": "2025-04-30T07:45:18.000+0000",
                        "lastUpdatedOn": "2025-04-30T07:45:18.000+0000",
                        "lastUpdatedBy": {
                            "id": 75120801,
                            "code": "1711516618_",
                            "description": "",
                            "name": "giridhar m",
                            "type": "ADMIN_USER"
                        },
                        "createdBy": {
                            "id": 75120801,
                            "code": "1711516618_",
                            "description": "",
                            "name": "giridhar m",
                            "type": "ADMIN_USER"
                        }
                    },
                    "name": "ErrorTest2",
                    "emfRuleSetId": 126397828,
                    "targetType": "SALES",
                    "targetEntity": "TRANSACTION",
                    "eventName": "TransactionAdd",
                    "targetGroupId": 2007,
                    "description": "",
                    "active": false,
                    "expression": "true",
                    "expressionJson": "\n{\n  \"arity\":\"literal\",\n  \"value\":\"true\",\n  \"type\":\"boolean:primitive\"\n}",
                    "filters": [],
                    "enrolmentMethod": "TRANSACTION",
                    "defaultValues": [
                        {
                            "id": 14716,
                            "periodId": 12412,
                            "defaultValue": 100.000
                        },
                        {
                            "id": 14717,
                            "periodId": 12413,
                            "defaultValue": 100.000
                        },
                        {
                            "id": 14718,
                            "periodId": 12414,
                            "defaultValue": 100.000
                        },
                        {
                            "id": 14719,
                            "periodId": 12415,
                            "defaultValue": 100.000
                        },
                        {
                            "id": 14720,
                            "periodId": 12416,
                            "defaultValue": 100.000
                        }
                    ],
                    "targetPeriodDefaultValuesMap": {
                        "12416": {
                            "id": 14720,
                            "periodId": 12416,
                            "defaultValue": 100.000
                        },
                        "12412": {
                            "id": 14716,
                            "periodId": 12412,
                            "defaultValue": 100.000
                        },
                        "12413": {
                            "id": 14717,
                            "periodId": 12413,
                            "defaultValue": 100.000
                        },
                        "12414": {
                            "id": 14718,
                            "periodId": 12414,
                            "defaultValue": 100.000
                        },
                        "12415": {
                            "id": 14719,
                            "periodId": 12415,
                            "defaultValue": 100.000
                        }
                    },
                    "targetMilestoneTriggers": []
                }
            ],
            "leaderboardEnabled": false,
            "userCreated": false
        },
        {
            "id": 1990,
            "attribution": {
                "createdOn": "2025-04-29T09:07:36.000+0000",
                "lastUpdatedOn": "2025-04-29T09:07:36.000+0000",
                "lastUpdatedBy": {
                    "id": 75120801,
                    "code": "1711516618_",
                    "description": "",
                    "name": "giridhar m",
                    "type": "ADMIN_USER"
                },
                "createdBy": {
                    "id": 75120801,
                    "code": "1711516618_",
                    "description": "",
                    "name": "giridhar m",
                    "type": "ADMIN_USER"
                }
            },
            "orgId": 100737,
            "name": "ErrorTest",
            "active": false,
            "preferredTillId": 75152721,
            "totalPeriods": 1,
            "description": "",
            "targetEvaluationType": "FIXED_CALENDAR_WINDOW",
            "recurringCycles": -1,
            "frequency": 0,
            "targetCycleStartDate": "2025-03-31T18:30:00.000Z",
            "targetCycleEndDate": "2025-04-30T18:30:00.000Z",
            "frequencyType": "WEEKLY",
            "trackingType": "DEFAULT",
            "createdOn": 1745917656000,
            "targets": [
                {
                    "id": 2158,
                    "attribution": {
                        "createdOn": "2025-04-29T09:07:36.000+0000",
                        "lastUpdatedOn": "2025-04-29T09:07:36.000+0000",
                        "lastUpdatedBy": {
                            "id": 75120801,
                            "code": "1711516618_",
                            "description": "",
                            "name": "giridhar m",
                            "type": "ADMIN_USER"
                        },
                        "createdBy": {
                            "id": 75120801,
                            "code": "1711516618_",
                            "description": "",
                            "name": "giridhar m",
                            "type": "ADMIN_USER"
                        }
                    },
                    "name": "ErrorTest",
                    "emfRuleSetId": 126397541,
                    "targetType": "SALES",
                    "targetEntity": "TRANSACTION",
                    "eventName": "TransactionAdd",
                    "targetGroupId": 1990,
                    "description": "",
                    "active": false,
                    "expression": "true",
                    "expressionJson": "\n{\n  \"arity\":\"literal\",\n  \"value\":\"true\",\n  \"type\":\"boolean:primitive\"\n}",
                    "filters": [],
                    "enrolmentMethod": "TRANSACTION",
                    "defaultValues": [
                        {
                            "id": 14694,
                            "periodId": 12390,
                            "defaultValue": 10.000
                        }
                    ],
                    "targetPeriodDefaultValuesMap": {
                        "12390": {
                            "id": 14694,
                            "periodId": 12390,
                            "defaultValue": 10.000
                        }
                    },
                    "targetMilestoneTriggers": []
                }
            ],
            "leaderboardEnabled": false,
            "userCreated": false
        },
        {
            "id": 1972,
            "attribution": {
                "createdOn": "2025-04-16T07:19:06.000+0000",
                "lastUpdatedOn": "2025-04-16T07:19:06.000+0000",
                "lastUpdatedBy": {
                    "id": 75152721,
                    "code": "naman_doc",
                    "description": "",
                    "name": "naman",
                    "type": "TILL"
                },
                "createdBy": {
                    "id": 75152721,
                    "code": "naman_doc",
                    "description": "",
                    "name": "naman",
                    "type": "TILL"
                }
            },
            "orgId": 100737,
            "name": "FitnessChallenge3",
            "active": false,
            "preferredTillId": 75152721,
            "totalPeriods": 1,
            "description": "Monthly Running Challenge",
            "targetEvaluationType": "FIXED_CALENDAR_WINDOW",
            "recurringCycles": 0,
            "frequency": 0,
            "targetCycleStartDate": "2025-04-10T00:00:00.000Z",
            "targetCycleEndDate": "2025-05-10T23:59:59.000Z",
            "frequencyType": "CUSTOM",
            "trackingType": "UNIFIED",
            "createdOn": 1744787946000,
            "targets": [
                {
                    "id": 2103,
                    "attribution": {
                        "createdOn": "2025-04-16T07:19:06.000+0000",
                        "lastUpdatedOn": "2025-04-16T07:19:06.000+0000",
                        "lastUpdatedBy": {
                            "id": 75152721,
                            "code": "naman_doc",
                            "description": "",
                            "name": "naman",
                            "type": "TILL"
                        },
                        "createdBy": {
                            "id": 75152721,
                            "code": "naman_doc",
                            "description": "",
                            "name": "naman",
                            "type": "TILL"
                        }
                    },
                    "name": "Run20KM_3",
                    "emfRuleSetId": 126393888,
                    "targetType": "SALES",
                    "targetEntity": "TRANSACTION",
                    "eventName": "TransactionAdd",
                    "targetGroupId": 1972,
                    "description": "Run 20KM Target",
                    "active": false,
                    "expression": "true",
                    "expressionJson": "{\"arity\":\"literal\",\"value\":\"true\",\"type\":\"boolean:primitive\"}",
                    "filters": [],
                    "enrolmentMethod": "TRANSACTION",
                    "defaultValues": [
                        {
                            "id": 14618,
                            "periodId": 12322,
                            "defaultValue": 20.000
                        }
                    ],
                    "targetPeriodDefaultValuesMap": {
                        "12322": {
                            "id": 14618,
                            "periodId": 12322,
                            "defaultValue": 20.000
                        }
                    },
                    "targetMilestoneTriggers": [],
                    "extendedFieldInfo": {
                        "name": "distance",
                        "aggregateFunction": "SUM"
                    }
                },
                {
                    "id": 2104,
                    "attribution": {
                        "createdOn": "2025-04-16T07:19:06.000+0000",
                        "lastUpdatedOn": "2025-04-16T07:19:06.000+0000",
                        "lastUpdatedBy": {
                            "id": 75152721,
                            "code": "naman_doc",
                            "description": "",
                            "name": "naman",
                            "type": "TILL"
                        },
                        "createdBy": {
                            "id": 75152721,
                            "code": "naman_doc",
                            "description": "",
                            "name": "naman",
                            "type": "TILL"
                        }
                    },
                    "name": "Run50KM_3",
                    "emfRuleSetId": 126393889,
                    "targetType": "SALES",
                    "targetEntity": "TRANSACTION",
                    "eventName": "TransactionAdd",
                    "targetGroupId": 1972,
                    "description": "Run 50KM Target",
                    "active": false,
                    "expression": "true",
                    "expressionJson": "{\"arity\":\"literal\",\"value\":\"true\",\"type\":\"boolean:primitive\"}",
                    "filters": [],
                    "enrolmentMethod": "TRANSACTION",
                    "defaultValues": [
                        {
                            "id": 14619,
                            "periodId": 12322,
                            "defaultValue": 50.000
                        }
                    ],
                    "targetPeriodDefaultValuesMap": {
                        "12322": {
                            "id": 14619,
                            "periodId": 12322,
                            "defaultValue": 50.000
                        }
                    },
                    "targetMilestoneTriggers": [],
                    "extendedFieldInfo": {
                        "name": "distance",
                        "aggregateFunction": "SUM"
                    }
                }
            ],
            "combinationType": "ANY",
            "unifiedTargetExpression": {
                "aggregation": null,
                "thresholdValue": null,
                "ruleExpression": "(2103 | 2104)"
            },
            "leaderboardEnabled": false,
            "userCreated": false
        },
        {
            "id": 1971,
            "attribution": {
                "createdOn": "2025-04-16T07:14:20.000+0000",
                "lastUpdatedOn": "2025-04-16T07:14:20.000+0000",
                "lastUpdatedBy": {
                    "id": 75152721,
                    "code": "naman_doc",
                    "description": "",
                    "name": "naman",
                    "type": "TILL"
                },
                "createdBy": {
                    "id": 75152721,
                    "code": "naman_doc",
                    "description": "",
                    "name": "naman",
                    "type": "TILL"
                }
            },
            "orgId": 100737,
            "name": "FitnessChallenge2",
            "active": false,
            "preferredTillId": 75152721,
            "totalPeriods": 1,
            "description": "Monthly Running Challenge",
            "targetEvaluationType": "FIXED_CALENDAR_WINDOW",
            "recurringCycles": 0,
            "frequency": 0,
            "targetCycleStartDate": "2025-04-10T00:00:00.000Z",
            "targetCycleEndDate": "2025-05-10T23:59:59.000Z",
            "frequencyType": "CUSTOM",
            "trackingType": "UNIFIED",
            "createdOn": 1744787660000,
            "targets": [
                {
                    "id": 2101,
                    "attribution": {
                        "createdOn": "2025-04-16T07:14:20.000+0000",
                        "lastUpdatedOn": "2025-04-16T07:14:20.000+0000",
                        "lastUpdatedBy": {
                            "id": 75152721,
                            "code": "naman_doc",
                            "description": "",
                            "name": "naman",
                            "type": "TILL"
                        },
                        "createdBy": {
                            "id": 75152721,
                            "code": "naman_doc",
                            "description": "",
                            "name": "naman",
                            "type": "TILL"
                        }
                    },
                    "name": "Run20KM_2",
                    "emfRuleSetId": 126393886,
                    "targetType": "SALES",
                    "targetEntity": "TRANSACTION",
                    "eventName": "TransactionAdd",
                    "targetGroupId": 1971,
                    "description": "Run 20KM Target",
                    "active": false,
                    "expression": "true",
                    "expressionJson": "{\"arity\":\"literal\",\"value\":\"true\",\"type\":\"boolean:primitive\"}",
                    "filters": [],
                    "enrolmentMethod": "TRANSACTION",
                    "defaultValues": [
                        {
                            "id": 14616,
                            "periodId": 12321,
                            "defaultValue": 20.000
                        }
                    ],
                    "targetPeriodDefaultValuesMap": {
                        "12321": {
                            "id": 14616,
                            "periodId": 12321,
                            "defaultValue": 20.000
                        }
                    },
                    "targetMilestoneTriggers": [],
                    "extendedFieldInfo": {
                        "name": "distance",
                        "aggregateFunction": "SUM"
                    }
                },
                {
                    "id": 2102,
                    "attribution": {
                        "createdOn": "2025-04-16T07:14:20.000+0000",
                        "lastUpdatedOn": "2025-04-16T07:14:20.000+0000",
                        "lastUpdatedBy": {
                            "id": 75152721,
                            "code": "naman_doc",
                            "description": "",
                            "name": "naman",
                            "type": "TILL"
                        },
                        "createdBy": {
                            "id": 75152721,
                            "code": "naman_doc",
                            "description": "",
                            "name": "naman",
                            "type": "TILL"
                        }
                    },
                    "name": "Run50KM_2",
                    "emfRuleSetId": 126393887,
                    "targetType": "SALES",
                    "targetEntity": "TRANSACTION",
                    "eventName": "TransactionAdd",
                    "targetGroupId": 1971,
                    "description": "Run 50KM Target",
                    "active": false,
                    "expression": "true",
                    "expressionJson": "{\"arity\":\"literal\",\"value\":\"true\",\"type\":\"boolean:primitive\"}",
                    "filters": [],
                    "enrolmentMethod": "TRANSACTION",
                    "defaultValues": [
                        {
                            "id": 14617,
                            "periodId": 12321,
                            "defaultValue": 50.000
                        }
                    ],
                    "targetPeriodDefaultValuesMap": {
                        "12321": {
                            "id": 14617,
                            "periodId": 12321,
                            "defaultValue": 50.000
                        }
                    },
                    "targetMilestoneTriggers": [],
                    "extendedFieldInfo": {
                        "name": "distance",
                        "aggregateFunction": "SUM"
                    }
                }
            ],
            "combinationType": "ALL",
            "unifiedTargetExpression": {
                "aggregation": null,
                "thresholdValue": null,
                "ruleExpression": "(2101 & 2102)"
            },
            "leaderboardEnabled": false,
            "userCreated": false
        },
        {
            "id": 1962,
            "attribution": {
                "createdOn": "2025-04-12T10:37:00.000+0000",
                "lastUpdatedOn": "2025-04-12T10:37:00.000+0000",
                "lastUpdatedBy": {
                    "id": 75152721,
                    "code": "naman_doc",
                    "description": "",
                    "name": "naman",
                    "type": "TILL"
                },
                "createdBy": {
                    "id": 75152721,
                    "code": "naman_doc",
                    "description": "",
                    "name": "naman",
                    "type": "TILL"
                }
            },
            "orgId": 100737,
            "name": "FitnessChallenge",
            "active": false,
            "preferredTillId": 75152721,
            "totalPeriods": 1,
            "description": "Monthly Running Challenge",
            "targetEvaluationType": "FIXED_CALENDAR_WINDOW",
            "recurringCycles": 0,
            "frequency": 0,
            "targetCycleStartDate": "2025-04-10T00:00:00.000Z",
            "targetCycleEndDate": "2025-05-10T23:59:59.000Z",
            "frequencyType": "DAILY",
            "trackingType": "DEFAULT",
            "createdOn": 1744454220000,
            "targets": [
                {
                    "id": 2096,
                    "attribution": {
                        "createdOn": "2025-04-12T10:37:00.000+0000",
                        "lastUpdatedOn": "2025-04-12T10:37:00.000+0000",
                        "lastUpdatedBy": {
                            "id": 75152721,
                            "code": "naman_doc",
                            "description": "",
                            "name": "naman",
                            "type": "TILL"
                        },
                        "createdBy": {
                            "id": 75152721,
                            "code": "naman_doc",
                            "description": "",
                            "name": "naman",
                            "type": "TILL"
                        }
                    },
                    "name": "Run20KM",
                    "emfRuleSetId": 126392781,
                    "targetType": "SALES",
                    "targetEntity": "TRANSACTION",
                    "eventName": "TransactionAdd",
                    "targetGroupId": 1962,
                    "description": "Run 20KM Target",
                    "active": false,
                    "expression": "true",
                    "expressionJson": "{\"arity\":\"literal\",\"value\":\"true\",\"type\":\"boolean:primitive\"}",
                    "filters": [],
                    "enrolmentMethod": "IMPORT",
                    "defaultValues": [
                        {
                            "id": 14608,
                            "periodId": 12316,
                            "defaultValue": 20.000
                        }
                    ],
                    "targetPeriodDefaultValuesMap": {
                        "12316": {
                            "id": 14608,
                            "periodId": 12316,
                            "defaultValue": 20.000
                        }
                    },
                    "targetMilestoneTriggers": [],
                    "extendedFieldInfo": {
                        "name": "distance",
                        "aggregateFunction": "SUM"
                    }
                },
                {
                    "id": 2097,
                    "attribution": {
                        "createdOn": "2025-04-12T10:37:00.000+0000",
                        "lastUpdatedOn": "2025-04-12T10:37:00.000+0000",
                        "lastUpdatedBy": {
                            "id": 75152721,
                            "code": "naman_doc",
                            "description": "",
                            "name": "naman",
                            "type": "TILL"
                        },
                        "createdBy": {
                            "id": 75152721,
                            "code": "naman_doc",
                            "description": "",
                            "name": "naman",
                            "type": "TILL"
                        }
                    },
                    "name": "Run50KM",
                    "emfRuleSetId": 126392782,
                    "targetType": "SALES",
                    "targetEntity": "TRANSACTION",
                    "eventName": "TransactionAdd",
                    "targetGroupId": 1962,
                    "description": "Run 50KM Target",
                    "active": false,
                    "expression": "true",
                    "expressionJson": "{\"arity\":\"literal\",\"value\":\"true\",\"type\":\"boolean:primitive\"}",
                    "filters": [],
                    "enrolmentMethod": "IMPORT",
                    "defaultValues": [
                        {
                            "id": 14609,
                            "periodId": 12316,
                            "defaultValue": 50.000
                        }
                    ],
                    "targetPeriodDefaultValuesMap": {
                        "12316": {
                            "id": 14609,
                            "periodId": 12316,
                            "defaultValue": 50.000
                        }
                    },
                    "targetMilestoneTriggers": [],
                    "extendedFieldInfo": {
                        "name": "distance",
                        "aggregateFunction": "SUM"
                    }
                }
            ],
            "leaderboardEnabled": false,
            "userCreated": false
        },
        {
            "id": 1961,
            "attribution": {
                "createdOn": "2025-04-10T08:17:24.000+0000",
                "lastUpdatedOn": "2025-04-10T08:17:24.000+0000",
                "lastUpdatedBy": {
                    "id": 75152721,
                    "code": "naman_doc",
                    "description": "",
                    "name": "naman",
                    "type": "TILL"
                },
                "createdBy": {
                    "id": 75152721,
                    "code": "naman_doc",
                    "description": "",
                    "name": "naman",
                    "type": "TILL"
                }
            },
            "orgId": 100737,
            "name": "Run10KM",
            "active": false,
            "preferredTillId": 75152721,
            "totalPeriods": 4,
            "description": "Opp",
            "targetEvaluationType": "FIXED_CALENDAR_WINDOW",
            "recurringCycles": 0,
            "frequency": 0,
            "targetCycleStartDate": "2025-04-09T00:00:00.000Z",
            "targetCycleEndDate": "2025-04-12T23:59:59.000Z",
            "frequencyType": "DAILY",
            "trackingType": "DEFAULT",
            "createdOn": 1744273044000,
            "targets": [
                {
                    "id": 2095,
                    "attribution": {
                        "createdOn": "2025-04-10T08:17:24.000+0000",
                        "lastUpdatedOn": "2025-04-10T08:17:24.000+0000",
                        "lastUpdatedBy": {
                            "id": 75152721,
                            "code": "naman_doc",
                            "description": "",
                            "name": "naman",
                            "type": "TILL"
                        },
                        "createdBy": {
                            "id": 75152721,
                            "code": "naman_doc",
                            "description": "",
                            "name": "naman",
                            "type": "TILL"
                        }
                    },
                    "name": "Run10KM",
                    "emfRuleSetId": 126392219,
                    "targetType": "SALES",
                    "targetEntity": "TRANSACTION",
                    "eventName": "TransactionAdd",
                    "targetGroupId": 1961,
                    "description": "",
                    "active": false,
                    "expression": "true",
                    "expressionJson": "{\"arity\":\"literal\",\"value\":\"true\",\"type\":\"boolean:primitive\"}",
                    "filters": [],
                    "enrolmentMethod": "IMPORT",
                    "defaultValues": [
                        {
                            "id": 14604,
                            "periodId": 12312,
                            "defaultValue": 1.000
                        },
                        {
                            "id": 14605,
                            "periodId": 12313,
                            "defaultValue": 1.000
                        },
                        {
                            "id": 14606,
                            "periodId": 12314,
                            "defaultValue": 1.000
                        },
                        {
                            "id": 14607,
                            "periodId": 12315,
                            "defaultValue": 1.000
                        }
                    ],
                    "targetPeriodDefaultValuesMap": {
                        "12312": {
                            "id": 14604,
                            "periodId": 12312,
                            "defaultValue": 1.000
                        },
                        "12313": {
                            "id": 14605,
                            "periodId": 12313,
                            "defaultValue": 1.000
                        },
                        "12314": {
                            "id": 14606,
                            "periodId": 12314,
                            "defaultValue": 1.000
                        },
                        "12315": {
                            "id": 14607,
                            "periodId": 12315,
                            "defaultValue": 1.000
                        }
                    },
                    "targetMilestoneTriggers": [],
                    "extendedFieldInfo": {
                        "name": "points",
                        "aggregateFunction": "SUM"
                    }
                }
            ],
            "leaderboardEnabled": false,
            "userCreated": false
        },
        {
            "id": 1944,
            "attribution": {
                "createdOn": "2025-04-04T06:56:10.000+0000",
                "lastUpdatedOn": "2025-04-04T06:56:10.000+0000",
                "lastUpdatedBy": {
                    "id": 5,
                    "code": "product_sdk_",
                    "description": null,
                    "name": "user",
                    "type": "ADMIN_USER"
                },
                "createdBy": {
                    "id": 5,
                    "code": "product_sdk_",
                    "description": null,
                    "name": "user",
                    "type": "ADMIN_USER"
                }
            },
            "orgId": 100737,
            "name": "CappingTG_AC",
            "active": false,
            "preferredTillId": -1,
            "totalPeriods": 1,
            "targetEvaluationType": "FIXED_CALENDAR_WINDOW",
            "recurringCycles": -1,
            "frequency": 0,
            "targetCycleStartDate": "2025-02-01T00:00:00.000Z",
            "targetCycleEndDate": "2025-04-28T23:59:59.000Z",
            "frequencyType": "CUSTOM",
            "trackingType": "CAPPING",
            "createdOn": 1743749770000,
            "targets": [
                {
                    "id": 2090,
                    "attribution": {
                        "createdOn": "2025-04-04T06:56:10.000+0000",
                        "lastUpdatedOn": "2025-04-04T06:56:10.000+0000",
                        "lastUpdatedBy": {
                            "id": 5,
                            "code": "product_sdk_",
                            "description": null,
                            "name": "user",
                            "type": "ADMIN_USER"
                        },
                        "createdBy": {
                            "id": 5,
                            "code": "product_sdk_",
                            "description": null,
                            "name": "user",
                            "type": "ADMIN_USER"
                        }
                    },
                    "name": "CappingTG_AC",
                    "targetType": "REGULAR",
                    "targetEntity": "ALTERNATE_CURRENCIES",
                    "eventName": "TransactionAdd",
                    "targetGroupId": 1944,
                    "active": false,
                    "filters": [],
                    "enrolmentMethod": "TRANSACTION",
                    "defaultValues": [
                        {
                            "id": 14587,
                            "periodId": 12247,
                            "defaultValue": 100.000
                        }
                    ],
                    "targetPeriodDefaultValuesMap": {
                        "12247": {
                            "id": 14587,
                            "periodId": 12247,
                            "defaultValue": 100.000
                        }
                    },
                    "targetMilestoneTriggers": [],
                    "extendedFieldInfo": {
                        "programId": 46,
                        "alternateCurrencyIdentifier": "0nzyDx"
                    }
                }
            ],
            "leaderboardEnabled": false,
            "userCreated": false
        },
        {
            "id": 1941,
            "attribution": {
                "createdOn": "2025-04-04T06:38:44.000+0000",
                "lastUpdatedOn": "2025-04-04T06:38:44.000+0000",
                "lastUpdatedBy": {
                    "id": 5,
                    "code": "product_sdk_",
                    "description": null,
                    "name": "user",
                    "type": "ADMIN_USER"
                },
                "createdBy": {
                    "id": 5,
                    "code": "product_sdk_",
                    "description": null,
                    "name": "user",
                    "type": "ADMIN_USER"
                }
            },
            "orgId": 100737,
            "name": "CappingTG4",
            "active": false,
            "preferredTillId": -1,
            "totalPeriods": 1,
            "targetEvaluationType": "FIXED_CALENDAR_WINDOW",
            "recurringCycles": -1,
            "frequency": 0,
            "targetCycleStartDate": "2025-02-01T00:00:00.000Z",
            "targetCycleEndDate": "2025-04-28T23:59:59.000Z",
            "frequencyType": "CUSTOM",
            "trackingType": "CAPPING",
            "createdOn": 1743748724000,
            "targets": [
                {
                    "id": 2089,
                    "attribution": {
                        "createdOn": "2025-04-04T06:38:44.000+0000",
                        "lastUpdatedOn": "2025-04-04T06:38:44.000+0000",
                        "lastUpdatedBy": {
                            "id": 5,
                            "code": "product_sdk_",
                            "description": null,
                            "name": "user",
                            "type": "ADMIN_USER"
                        },
                        "createdBy": {
                            "id": 5,
                            "code": "product_sdk_",
                            "description": null,
                            "name": "user",
                            "type": "ADMIN_USER"
                        }
                    },
                    "name": "CappingTG4",
                    "targetType": "REGULAR_POINTS",
                    "targetEntity": "POINTS",
                    "eventName": "TransactionAdd",
                    "targetGroupId": 1941,
                    "active": false,
                    "filters": [],
                    "enrolmentMethod": "TRANSACTION",
                    "defaultValues": [
                        {
                            "id": 14586,
                            "periodId": 12244,
                            "defaultValue": 100.000
                        }
                    ],
                    "targetPeriodDefaultValuesMap": {
                        "12244": {
                            "id": 14586,
                            "periodId": 12244,
                            "defaultValue": 100.000
                        }
                    },
                    "targetMilestoneTriggers": []
                }
            ],
            "leaderboardEnabled": false,
            "userCreated": false
        },
        {
            "id": 1940,
            "attribution": {
                "createdOn": "2025-04-04T06:33:02.000+0000",
                "lastUpdatedOn": "2025-04-04T06:33:02.000+0000",
                "lastUpdatedBy": {
                    "id": 5,
                    "code": "product_sdk_",
                    "description": null,
                    "name": "user",
                    "type": "ADMIN_USER"
                },
                "createdBy": {
                    "id": 5,
                    "code": "product_sdk_",
                    "description": null,
                    "name": "user",
                    "type": "ADMIN_USER"
                }
            },
            "orgId": 100737,
            "name": "CappingTG3",
            "active": false,
            "preferredTillId": -1,
            "totalPeriods": 1,
            "targetEvaluationType": "FIXED_CALENDAR_WINDOW",
            "recurringCycles": -1,
            "frequency": 0,
            "targetCycleStartDate": "2025-02-01T00:00:00.000Z",
            "targetCycleEndDate": "2025-04-28T23:59:59.000Z",
            "frequencyType": "CUSTOM",
            "trackingType": "CAPPING",
            "createdOn": 1743748382000,
            "targets": [
                {
                    "id": 2088,
                    "attribution": {
                        "createdOn": "2025-04-04T06:33:02.000+0000",
                        "lastUpdatedOn": "2025-04-04T06:33:02.000+0000",
                        "lastUpdatedBy": {
                            "id": 5,
                            "code": "product_sdk_",
                            "description": null,
                            "name": "user",
                            "type": "ADMIN_USER"
                        },
                        "createdBy": {
                            "id": 5,
                            "code": "product_sdk_",
                            "description": null,
                            "name": "user",
                            "type": "ADMIN_USER"
                        }
                    },
                    "name": "CappingTG3",
                    "targetType": "REGULAR_POINTS",
                    "targetEntity": "POINTS",
                    "eventName": "TransactionAdd",
                    "targetGroupId": 1940,
                    "active": false,
                    "filters": [],
                    "enrolmentMethod": "TRANSACTION",
                    "defaultValues": [
                        {
                            "id": 14585,
                            "periodId": 12243,
                            "defaultValue": 100.000
                        }
                    ],
                    "targetPeriodDefaultValuesMap": {
                        "12243": {
                            "id": 14585,
                            "periodId": 12243,
                            "defaultValue": 100.000
                        }
                    },
                    "targetMilestoneTriggers": []
                }
            ],
            "leaderboardEnabled": false,
            "userCreated": false
        },
        {
            "id": 1939,
            "attribution": {
                "createdOn": "2025-04-04T06:08:52.000+0000",
                "lastUpdatedOn": "2025-04-04T06:08:52.000+0000",
                "lastUpdatedBy": {
                    "id": 5,
                    "code": "product_sdk_",
                    "description": null,
                    "name": "user",
                    "type": "ADMIN_USER"
                },
                "createdBy": {
                    "id": 5,
                    "code": "product_sdk_",
                    "description": null,
                    "name": "user",
                    "type": "ADMIN_USER"
                }
            },
            "orgId": 100737,
            "name": "CappingTG2",
            "active": false,
            "preferredTillId": -1,
            "totalPeriods": 1,
            "targetEvaluationType": "FIXED_CALENDAR_WINDOW",
            "recurringCycles": -1,
            "frequency": 0,
            "targetCycleStartDate": "2025-02-01T00:00:00.000Z",
            "targetCycleEndDate": "2025-04-28T23:59:59.000Z",
            "frequencyType": "CUSTOM",
            "trackingType": "CAPPING",
            "createdOn": 1743746932000,
            "targets": [
                {
                    "id": 2087,
                    "attribution": {
                        "createdOn": "2025-04-04T06:08:52.000+0000",
                        "lastUpdatedOn": "2025-04-04T06:08:52.000+0000",
                        "lastUpdatedBy": {
                            "id": 5,
                            "code": "product_sdk_",
                            "description": null,
                            "name": "user",
                            "type": "ADMIN_USER"
                        },
                        "createdBy": {
                            "id": 5,
                            "code": "product_sdk_",
                            "description": null,
                            "name": "user",
                            "type": "ADMIN_USER"
                        }
                    },
                    "name": "CappingTG2",
                    "targetType": "REGULAR_POINTS",
                    "targetEntity": "POINTS",
                    "eventName": "TransactionAdd",
                    "targetGroupId": 1939,
                    "active": false,
                    "filters": [],
                    "enrolmentMethod": "TRANSACTION",
                    "defaultValues": [
                        {
                            "id": 14584,
                            "periodId": 12242,
                            "defaultValue": 100.000
                        }
                    ],
                    "targetPeriodDefaultValuesMap": {
                        "12242": {
                            "id": 14584,
                            "periodId": 12242,
                            "defaultValue": 100.000
                        }
                    },
                    "targetMilestoneTriggers": []
                }
            ],
            "leaderboardEnabled": false,
            "userCreated": false
        },
        {
            "id": 1938,
            "attribution": {
                "createdOn": "2025-04-04T06:07:07.000+0000",
                "lastUpdatedOn": "2025-04-04T06:07:07.000+0000",
                "lastUpdatedBy": {
                    "id": 5,
                    "code": "product_sdk_",
                    "description": null,
                    "name": "user",
                    "type": "ADMIN_USER"
                },
                "createdBy": {
                    "id": 5,
                    "code": "product_sdk_",
                    "description": null,
                    "name": "user",
                    "type": "ADMIN_USER"
                }
            },
            "orgId": 100737,
            "name": "CappingTG1",
            "active": false,
            "preferredTillId": -1,
            "totalPeriods": 1,
            "targetEvaluationType": "FIXED_CALENDAR_WINDOW",
            "recurringCycles": -1,
            "frequency": 0,
            "targetCycleStartDate": "2025-02-01T00:00:00.000Z",
            "targetCycleEndDate": "2025-04-28T23:59:59.000Z",
            "frequencyType": "CUSTOM",
            "trackingType": "CAPPING",
            "createdOn": 1743746827000,
            "targets": [
                {
                    "id": 2086,
                    "attribution": {
                        "createdOn": "2025-04-04T06:07:07.000+0000",
                        "lastUpdatedOn": "2025-04-04T06:07:07.000+0000",
                        "lastUpdatedBy": {
                            "id": 5,
                            "code": "product_sdk_",
                            "description": null,
                            "name": "user",
                            "type": "ADMIN_USER"
                        },
                        "createdBy": {
                            "id": 5,
                            "code": "product_sdk_",
                            "description": null,
                            "name": "user",
                            "type": "ADMIN_USER"
                        }
                    },
                    "name": "CappingTG1",
                    "targetType": "REGULAR_POINTS",
                    "targetEntity": "POINTS",
                    "eventName": "TransactionAdd",
                    "targetGroupId": 1938,
                    "active": false,
                    "filters": [],
                    "enrolmentMethod": "AUDIENCE_FILTER",
                    "defaultValues": [
                        {
                            "id": 14583,
                            "periodId": 12241,
                            "defaultValue": 100.000
                        }
                    ],
                    "targetPeriodDefaultValuesMap": {
                        "12241": {
                            "id": 14583,
                            "periodId": 12241,
                            "defaultValue": 100.000
                        }
                    },
                    "targetMilestoneTriggers": []
                }
            ],
            "leaderboardEnabled": false,
            "userCreated": false
        },
        {
            "id": 1937,
            "attribution": {
                "createdOn": "2025-04-04T06:06:32.000+0000",
                "lastUpdatedOn": "2025-04-04T06:06:32.000+0000",
                "lastUpdatedBy": {
                    "id": 5,
                    "code": "product_sdk_",
                    "description": null,
                    "name": "user",
                    "type": "ADMIN_USER"
                },
                "createdBy": {
                    "id": 5,
                    "code": "product_sdk_",
                    "description": null,
                    "name": "user",
                    "type": "ADMIN_USER"
                }
            },
            "orgId": 100737,
            "name": "CappingTG",
            "active": false,
            "preferredTillId": -1,
            "totalPeriods": 1,
            "targetEvaluationType": "FIXED_CALENDAR_WINDOW",
            "recurringCycles": -1,
            "frequency": 0,
            "targetCycleStartDate": "2025-02-01T00:00:00.000Z",
            "targetCycleEndDate": "2025-04-28T23:59:59.000Z",
            "frequencyType": "CUSTOM",
            "trackingType": "CAPPING",
            "createdOn": 1743746792000,
            "targets": [
                {
                    "id": 2085,
                    "attribution": {
                        "createdOn": "2025-04-04T06:06:32.000+0000",
                        "lastUpdatedOn": "2025-04-04T06:06:32.000+0000",
                        "lastUpdatedBy": {
                            "id": 5,
                            "code": "product_sdk_",
                            "description": null,
                            "name": "user",
                            "type": "ADMIN_USER"
                        },
                        "createdBy": {
                            "id": 5,
                            "code": "product_sdk_",
                            "description": null,
                            "name": "user",
                            "type": "ADMIN_USER"
                        }
                    },
                    "name": "CappingTG",
                    "targetType": "REGULAR_POINTS",
                    "targetEntity": "POINTS",
                    "eventName": "TransactionAdd",
                    "targetGroupId": 1937,
                    "active": false,
                    "filters": [],
                    "enrolmentMethod": "AUDIENCE_FILTER",
                    "defaultValues": [
                        {
                            "id": 14582,
                            "periodId": 12240,
                            "defaultValue": 100.000
                        }
                    ],
                    "targetPeriodDefaultValuesMap": {
                        "12240": {
                            "id": 14582,
                            "periodId": 12240,
                            "defaultValue": 100.000
                        }
                    },
                    "targetMilestoneTriggers": []
                }
            ],
            "leaderboardEnabled": false,
            "userCreated": false
        },
        {
            "id": 1908,
            "attribution": {
                "createdOn": "2025-03-13T10:57:51.000+0000",
                "lastUpdatedOn": "2025-03-13T10:57:51.000+0000",
                "lastUpdatedBy": {
                    "id": 75161852,
                    "code": "manu_123",
                    "description": "manu till id",
                    "name": "manu_123",
                    "type": "TILL"
                },
                "createdBy": {
                    "id": 75161852,
                    "code": "manu_123",
                    "description": "manu till id",
                    "name": "manu_123",
                    "type": "TILL"
                }
            },
            "orgId": 100737,
            "name": "UCCtesttarget",
            "active": false,
            "preferredTillId": 75050875,
            "totalPeriods": 4,
            "description": "Opp",
            "targetEvaluationType": "FIXED_CALENDAR_WINDOW",
            "recurringCycles": 0,
            "frequency": 0,
            "targetCycleStartDate": "2024-10-09T00:00:00.000Z",
            "targetCycleEndDate": "2025-03-11T23:59:59.000Z",
            "frequencyType": "DAILY",
            "trackingType": "DEFAULT",
            "createdOn": 1741863471000,
            "targets": [
                {
                    "id": 2065,
                    "attribution": {
                        "createdOn": "2025-03-13T10:57:51.000+0000",
                        "lastUpdatedOn": "2025-03-13T10:57:51.000+0000",
                        "lastUpdatedBy": {
                            "id": 75161852,
                            "code": "manu_123",
                            "description": "manu till id",
                            "name": "manu_123",
                            "type": "TILL"
                        },
                        "createdBy": {
                            "id": 75161852,
                            "code": "manu_123",
                            "description": "manu till id",
                            "name": "manu_123",
                            "type": "TILL"
                        }
                    },
                    "name": "UCCtesttarget",
                    "emfRuleSetId": 126384698,
                    "targetType": "EVENT_ATTRIBUTE",
                    "targetEntity": "EVENT",
                    "eventName": "UCCtesttarget3",
                    "targetGroupId": 1908,
                    "description": "",
                    "active": false,
                    "expression": "true",
                    "expressionJson": "{\"arity\":\"literal\",\"value\":\"true\",\"type\":\"boolean:primitive\"}",
                    "filters": [],
                    "enrolmentMethod": "IMPORT",
                    "defaultValues": [
                        {
                            "id": 14518,
                            "periodId": 11937,
                            "defaultValue": 1.000
                        },
                        {
                            "id": 14519,
                            "periodId": 11938,
                            "defaultValue": 1.000
                        },
                        {
                            "id": 14520,
                            "periodId": 11939,
                            "defaultValue": 1.000
                        },
                        {
                            "id": 14521,
                            "periodId": 11940,
                            "defaultValue": 1.000
                        }
                    ],
                    "targetPeriodDefaultValuesMap": {
                        "11937": {
                            "id": 14518,
                            "periodId": 11937,
                            "defaultValue": 1.000
                        },
                        "11938": {
                            "id": 14519,
                            "periodId": 11938,
                            "defaultValue": 1.000
                        },
                        "11939": {
                            "id": 14520,
                            "periodId": 11939,
                            "defaultValue": 1.000
                        },
                        "11940": {
                            "id": 14521,
                            "periodId": 11940,
                            "defaultValue": 1.000
                        }
                    },
                    "targetMilestoneTriggers": [],
                    "extendedFieldInfo": {
                        "name": "points",
                        "aggregateFunction": "SUM"
                    }
                }
            ],
            "leaderboardEnabled": false,
            "userCreated": false
        },
        {
            "id": 1892,
            "attribution": {
                "createdOn": "2025-03-13T06:06:47.000+0000",
                "lastUpdatedOn": "2025-03-13T06:06:47.000+0000",
                "lastUpdatedBy": {
                    "id": 75161852,
                    "code": "manu_123",
                    "description": "manu till id",
                    "name": "manu_123",
                    "type": "TILL"
                },
                "createdBy": {
                    "id": 75161852,
                    "code": "manu_123",
                    "description": "manu till id",
                    "name": "manu_123",
                    "type": "TILL"
                }
            },
            "orgId": 100737,
            "name": "UCCtesttarget3",
            "active": false,
            "preferredTillId": 75050875,
            "totalPeriods": 4,
            "description": "Opp",
            "targetEvaluationType": "FIXED_CALENDAR_WINDOW",
            "recurringCycles": 0,
            "frequency": 0,
            "targetCycleStartDate": "2024-10-09T00:00:00.000Z",
            "targetCycleEndDate": "2025-03-11T23:59:59.000Z",
            "frequencyType": "DAILY",
            "trackingType": "DEFAULT",
            "createdOn": 1741846007000,
            "targets": [
                {
                    "id": 2063,
                    "attribution": {
                        "createdOn": "2025-03-13T06:06:47.000+0000",
                        "lastUpdatedOn": "2025-03-13T06:06:47.000+0000",
                        "lastUpdatedBy": {
                            "id": 75161852,
                            "code": "manu_123",
                            "description": "manu till id",
                            "name": "manu_123",
                            "type": "TILL"
                        },
                        "createdBy": {
                            "id": 75161852,
                            "code": "manu_123",
                            "description": "manu till id",
                            "name": "manu_123",
                            "type": "TILL"
                        }
                    },
                    "name": "UCCtesttarget3",
                    "emfRuleSetId": 126384641,
                    "targetType": "EVENT_ATTRIBUTE",
                    "targetEntity": "EVENT",
                    "eventName": "UCCtesttarget3",
                    "targetGroupId": 1892,
                    "description": "",
                    "active": false,
                    "expression": "true",
                    "expressionJson": "{\"arity\":\"literal\",\"value\":\"true\",\"type\":\"boolean:primitive\"}",
                    "filters": [],
                    "enrolmentMethod": "IMPORT",
                    "defaultValues": [
                        {
                            "id": 13514,
                            "periodId": 10877,
                            "defaultValue": 1.000
                        },
                        {
                            "id": 13515,
                            "periodId": 10878,
                            "defaultValue": 1.000
                        },
                        {
                            "id": 13516,
                            "periodId": 10879,
                            "defaultValue": 1.000
                        },
                        {
                            "id": 13517,
                            "periodId": 10880,
                            "defaultValue": 1.000
                        }
                    ],
                    "targetPeriodDefaultValuesMap": {
                        "10880": {
                            "id": 13517,
                            "periodId": 10880,
                            "defaultValue": 1.000
                        },
                        "10877": {
                            "id": 13514,
                            "periodId": 10877,
                            "defaultValue": 1.000
                        },
                        "10878": {
                            "id": 13515,
                            "periodId": 10878,
                            "defaultValue": 1.000
                        },
                        "10879": {
                            "id": 13516,
                            "periodId": 10879,
                            "defaultValue": 1.000
                        }
                    },
                    "targetMilestoneTriggers": [],
                    "extendedFieldInfo": {
                        "name": "points",
                        "aggregateFunction": "SUM"
                    }
                }
            ],
            "leaderboardEnabled": false,
            "userCreated": false
        },
        {
            "id": 1795,
            "attribution": {
                "createdOn": "2025-02-10T10:14:49.000+0000",
                "lastUpdatedOn": "2025-02-10T10:14:49.000+0000",
                "lastUpdatedBy": {
                    "id": 75152721,
                    "code": "naman_doc",
                    "description": "",
                    "name": "naman",
                    "type": "TILL"
                },
                "createdBy": {
                    "id": 75152721,
                    "code": "naman_doc",
                    "description": "",
                    "name": "naman",
                    "type": "TILL"
                }
            },
            "orgId": 100737,
            "name": " Target",
            "active": false,
            "preferredTillId": 75050875,
            "totalPeriods": 1,
            "description": "Opp",
            "targetEvaluationType": "FIXED_CALENDAR_WINDOW",
            "recurringCycles": 0,
            "frequency": 0,
            "targetCycleStartDate": "2024-10-08T00:00:00.000Z",
            "targetCycleEndDate": "2024-10-08T23:59:59.000Z",
            "frequencyType": "DAILY",
            "trackingType": "DEFAULT",
            "createdOn": 1739182489000,
            "targets": [
                {
                    "id": 2046,
                    "attribution": {
                        "createdOn": "2025-02-10T10:14:49.000+0000",
                        "lastUpdatedOn": "2025-02-10T10:14:49.000+0000",
                        "lastUpdatedBy": {
                            "id": 75152721,
                            "code": "naman_doc",
                            "description": "",
                            "name": "naman",
                            "type": "TILL"
                        },
                        "createdBy": {
                            "id": 75152721,
                            "code": "naman_doc",
                            "description": "",
                            "name": "naman",
                            "type": "TILL"
                        }
                    },
                    "name": "Opp",
                    "emfRuleSetId": 126377610,
                    "targetType": "SALES",
                    "targetEntity": "TRANSACTION",
                    "eventName": "TransactionAdd",
                    "targetGroupId": 1795,
                    "description": "",
                    "active": false,
                    "expression": "true",
                    "expressionJson": "{\"arity\":\"literal\",\"value\":\"true\",\"type\":\"boolean:primitive\"}",
                    "filters": [],
                    "enrolmentMethod": "IMPORT",
                    "defaultValues": [
                        {
                            "id": 13483,
                            "periodId": 10563,
                            "defaultValue": 1.000
                        }
                    ],
                    "targetPeriodDefaultValuesMap": {
                        "10563": {
                            "id": 13483,
                            "periodId": 10563,
                            "defaultValue": 1.000
                        }
                    },
                    "targetMilestoneTriggers": [],
                    "extendedFieldInfo": {
                        "name": "points",
                        "aggregateFunction": "SUM"
                    }
                }
            ],
            "leaderboardEnabled": false,
            "userCreated": false
        },
        {
            "id": 1794,
            "attribution": {
                "createdOn": "2025-02-10T09:21:37.000+0000",
                "lastUpdatedOn": "2025-02-10T09:21:37.000+0000",
                "lastUpdatedBy": {
                    "id": 75152721,
                    "code": "naman_doc",
                    "description": "",
                    "name": "naman",
                    "type": "TILL"
                },
                "createdBy": {
                    "id": 75152721,
                    "code": "naman_doc",
                    "description": "",
                    "name": "naman",
                    "type": "TILL"
                }
            },
            "orgId": 100737,
            "name": "Unified-Target",
            "active": false,
            "preferredTillId": 50713807,
            "totalPeriods": 1,
            "description": "Unified-TG-BExTxn",
            "targetEvaluationType": "FIXED_CALENDAR_WINDOW",
            "recurringCycles": 0,
            "frequency": 0,
            "targetCycleStartDate": "2024-12-24T18:30:00.000Z",
            "targetCycleEndDate": "2025-02-25T18:30:00.000Z",
            "frequencyType": "MONTHLY",
            "trackingType": "UNIFIED",
            "createdOn": 1739179297000,
            "targets": [
                {
                    "id": 2044,
                    "attribution": {
                        "createdOn": "2025-02-10T09:21:37.000+0000",
                        "lastUpdatedOn": "2025-02-10T09:21:37.000+0000",
                        "lastUpdatedBy": {
                            "id": 75152721,
                            "code": "naman_doc",
                            "description": "",
                            "name": "naman",
                            "type": "TILL"
                        },
                        "createdBy": {
                            "id": 75152721,
                            "code": "naman_doc",
                            "description": "",
                            "name": "naman",
                            "type": "TILL"
                        }
                    },
                    "name": "alternatecuurency_target1",
                    "targetType": "ALL",
                    "targetEntity": "ALTERNATE_CURRENCIES",
                    "eventName": "TransactionAdd",
                    "targetGroupId": 1794,
                    "description": "",
                    "active": false,
                    "expression": "true",
                    "expressionJson": "{\"arity\":\"literal\",\"value\":\"true\",\"type\":\"boolean:primitive\"}",
                    "filters": [],
                    "enrolmentMethod": "IMPORT",
                    "defaultValues": [
                        {
                            "id": 13481,
                            "periodId": 10562,
                            "defaultValue": 20.000
                        }
                    ],
                    "targetPeriodDefaultValuesMap": {
                        "10562": {
                            "id": 13481,
                            "periodId": 10562,
                            "defaultValue": 20.000
                        }
                    },
                    "targetMilestoneTriggers": [],
                    "extendedFieldInfo": {
                        "programId": 46,
                        "alternateCurrencyIdentifier": "0nzyDx"
                    }
                },
                {
                    "id": 2045,
                    "attribution": {
                        "createdOn": "2025-02-10T09:21:37.000+0000",
                        "lastUpdatedOn": "2025-02-10T09:21:37.000+0000",
                        "lastUpdatedBy": {
                            "id": 75152721,
                            "code": "naman_doc",
                            "description": "",
                            "name": "naman",
                            "type": "TILL"
                        },
                        "createdBy": {
                            "id": 75152721,
                            "code": "naman_doc",
                            "description": "",
                            "name": "naman",
                            "type": "TILL"
                        }
                    },
                    "name": "unified-TG-custUpdateCount1",
                    "emfRuleSetId": 126377601,
                    "targetType": "COUNT",
                    "targetEntity": "EVENT",
                    "eventName": "CustomerUpdate",
                    "targetGroupId": 1794,
                    "description": "unified-TG-custUpdateCount2",
                    "active": false,
                    "expression": "true",
                    "expressionJson": "\n{\n  \"arity\":\"literal\",\n  \"value\":\"true\",\n  \"type\":\"boolean:primitive\"\n}",
                    "filters": [],
                    "enrolmentMethod": "TRANSACTION",
                    "defaultValues": [
                        {
                            "id": 13482,
                            "periodId": 10562,
                            "defaultValue": 2.000
                        }
                    ],
                    "targetPeriodDefaultValuesMap": {
                        "10562": {
                            "id": 13482,
                            "periodId": 10562,
                            "defaultValue": 2.000
                        }
                    },
                    "targetMilestoneTriggers": []
                }
            ],
            "combinationType": "ALL",
            "unifiedTargetExpression": {
                "aggregation": "SUM",
                "thresholdValue": 2002,
                "ruleExpression": "(2044 & 2045)"
            },
            "leaderboardEnabled": false,
            "userCreated": false
        },
        {
            "id": 1780,
            "attribution": {
                "createdOn": "2025-02-06T08:57:11.000+0000",
                "lastUpdatedOn": "2025-02-06T08:57:11.000+0000",
                "lastUpdatedBy": {
                    "id": 75152721,
                    "code": "naman_doc",
                    "description": "",
                    "name": "naman",
                    "type": "TILL"
                },
                "createdBy": {
                    "id": 75152721,
                    "code": "naman_doc",
                    "description": "",
                    "name": "naman",
                    "type": "TILL"
                }
            },
            "orgId": 100737,
            "name": "Unified-TG-SUM-Txn_COUNT-custUpdate",
            "active": false,
            "preferredTillId": 50713807,
            "totalPeriods": 1,
            "description": "Unified-TG-BExTxn",
            "targetEvaluationType": "FIXED_CALENDAR_WINDOW",
            "recurringCycles": 0,
            "frequency": 0,
            "targetCycleStartDate": "2024-12-24T18:30:00.000Z",
            "targetCycleEndDate": "2025-02-25T18:30:00.000Z",
            "frequencyType": "MONTHLY",
            "trackingType": "UNIFIED",
            "createdOn": 1738832231000,
            "targets": [
                {
                    "id": 2042,
                    "attribution": {
                        "createdOn": "2025-02-06T08:57:11.000+0000",
                        "lastUpdatedOn": "2025-02-06T08:57:11.000+0000",
                        "lastUpdatedBy": {
                            "id": 75152721,
                            "code": "naman_doc",
                            "description": "",
                            "name": "naman",
                            "type": "TILL"
                        },
                        "createdBy": {
                            "id": 75152721,
                            "code": "naman_doc",
                            "description": "",
                            "name": "naman",
                            "type": "TILL"
                        }
                    },
                    "name": "txnSum2",
                    "emfRuleSetId": 126376826,
                    "targetType": "SALES",
                    "targetEntity": "TRANSACTION",
                    "eventName": "TransactionAdd",
                    "targetGroupId": 1780,
                    "description": "uni35",
                    "active": false,
                    "expression": "currentTxn.value<1001",
                    "expressionJson": "{\"arity\":\"binary_operation\",\"value\":\"<\",\"type\":\"boolean:primitive\",\"operands\":[{\"arity\":\"object_dereference\",\"type\":\"real:object:primitive\",\"operands\":[{\"arity\":\"name\",\"value\":\"currentTxn\",\"type\":\"tx:object:primitive\"},{\"arity\":\"name\",\"value\":\"value\",\"type\":\"real:object:primitive\"}]},{\"arity\":\"literal\",\"value\":\"1001\",\"type\":\"number:primitive\"}]}",
                    "enrolmentMethod": "TRANSACTION",
                    "defaultValues": [
                        {
                            "id": 13479,
                            "periodId": 10341,
                            "defaultValue": 2000.000
                        }
                    ],
                    "targetPeriodDefaultValuesMap": {
                        "10341": {
                            "id": 13479,
                            "periodId": 10341,
                            "defaultValue": 2000.000
                        }
                    },
                    "targetMilestoneTriggers": []
                },
                {
                    "id": 2043,
                    "attribution": {
                        "createdOn": "2025-02-06T08:57:11.000+0000",
                        "lastUpdatedOn": "2025-02-06T08:57:11.000+0000",
                        "lastUpdatedBy": {
                            "id": 75152721,
                            "code": "naman_doc",
                            "description": "",
                            "name": "naman",
                            "type": "TILL"
                        },
                        "createdBy": {
                            "id": 75152721,
                            "code": "naman_doc",
                            "description": "",
                            "name": "naman",
                            "type": "TILL"
                        }
                    },
                    "name": "unified-TG-custUpdateCount",
                    "emfRuleSetId": 126376827,
                    "targetType": "COUNT",
                    "targetEntity": "EVENT",
                    "eventName": "CustomerUpdate",
                    "targetGroupId": 1780,
                    "description": "unified-TG-custUpdateCount2",
                    "active": false,
                    "expression": "true",
                    "expressionJson": "\n{\n  \"arity\":\"literal\",\n  \"value\":\"true\",\n  \"type\":\"boolean:primitive\"\n}",
                    "filters": [],
                    "enrolmentMethod": "TRANSACTION",
                    "defaultValues": [
                        {
                            "id": 13480,
                            "periodId": 10341,
                            "defaultValue": 2.000
                        }
                    ],
                    "targetPeriodDefaultValuesMap": {
                        "10341": {
                            "id": 13480,
                            "periodId": 10341,
                            "defaultValue": 2.000
                        }
                    },
                    "targetMilestoneTriggers": []
                }
            ],
            "combinationType": "ALL",
            "unifiedTargetExpression": {
                "aggregation": "SUM",
                "thresholdValue": 2002,
                "ruleExpression": "(2042 & 2043)"
            },
            "leaderboardEnabled": false,
            "userCreated": false
        },
        {
            "id": 1727,
            "attribution": {
                "createdOn": "2025-01-09T10:17:18.000+0000",
                "lastUpdatedOn": "2025-01-09T10:17:18.000+0000",
                "lastUpdatedBy": {
                    "id": 75139931,
                    "code": "1746689082_",
                    "description": null,
                    "name": "Naman ganapathi",
                    "type": "ADMIN_USER"
                },
                "createdBy": {
                    "id": 75139931,
                    "code": "1746689082_",
                    "description": null,
                    "name": "Naman ganapathi",
                    "type": "ADMIN_USER"
                }
            },
            "orgId": 100737,
            "name": "PointsCapping",
            "active": false,
            "preferredTillId": -1,
            "activePeriod": {
                "id": 9916,
                "attribution": {
                    "createdOn": "2025-01-09T10:17:18.000+0000",
                    "lastUpdatedOn": "2025-01-09T10:17:18.000+0000",
                    "lastUpdatedBy": {
                        "id": 75139931,
                        "code": "1746689082_",
                        "description": null,
                        "name": "Naman ganapathi",
                        "type": "ADMIN_USER"
                    },
                    "createdBy": {
                        "id": 75139931,
                        "code": "1746689082_",
                        "description": null,
                        "name": "Naman ganapathi",
                        "type": "ADMIN_USER"
                    }
                },
                "startDate": "2025-06-08",
                "endDate": "2025-06-22",
                "refCode": "Cycle_11",
                "periodStatus": "RUNNING",
                "targetGroupId": 1727,
                "active": true
            },
            "totalPeriods": 15,
            "targetEvaluationType": "FIXED_CALENDAR_WINDOW",
            "recurringCycles": -1,
            "frequency": 0,
            "targetCycleStartDate": "2025-01-09T00:00:00.000Z",
            "targetCycleEndDate": "2025-08-21T23:59:59.000Z",
            "frequencyType": "CUSTOM",
            "trackingType": "CAPPING",
            "createdOn": 1736417838000,
            "targets": [
                {
                    "id": 1993,
                    "attribution": {
                        "createdOn": "2025-01-09T10:17:18.000+0000",
                        "lastUpdatedOn": "2025-01-09T10:17:18.000+0000",
                        "lastUpdatedBy": {
                            "id": 75139931,
                            "code": "1746689082_",
                            "description": null,
                            "name": "Naman ganapathi",
                            "type": "ADMIN_USER"
                        },
                        "createdBy": {
                            "id": 75139931,
                            "code": "1746689082_",
                            "description": null,
                            "name": "Naman ganapathi",
                            "type": "ADMIN_USER"
                        }
                    },
                    "name": "PointsCapping",
                    "targetType": "ALL_POINTS",
                    "targetEntity": "POINTS",
                    "eventName": "TransactionAdd",
                    "targetGroupId": 1727,
                    "active": false,
                    "filters": [],
                    "enrolmentMethod": "TRANSACTION",
                    "defaultValues": [
                        {
                            "id": 12842,
                            "periodId": 9906,
                            "defaultValue": 10000.000
                        },
                        {
                            "id": 12843,
                            "periodId": 9907,
                            "defaultValue": 10000.000
                        },
                        {
                            "id": 12844,
                            "periodId": 9908,
                            "defaultValue": 10000.000
                        },
                        {
                            "id": 12845,
                            "periodId": 9909,
                            "defaultValue": 10000.000
                        },
                        {
                            "id": 12846,
                            "periodId": 9910,
                            "defaultValue": 10000.000
                        },
                        {
                            "id": 12847,
                            "periodId": 9911,
                            "defaultValue": 10000.000
                        },
                        {
                            "id": 12848,
                            "periodId": 9912,
                            "defaultValue": 10000.000
                        },
                        {
                            "id": 12849,
                            "periodId": 9913,
                            "defaultValue": 10000.000
                        },
                        {
                            "id": 12850,
                            "periodId": 9914,
                            "defaultValue": 10000.000
                        },
                        {
                            "id": 12851,
                            "periodId": 9915,
                            "defaultValue": 10000.000
                        },
                        {
                            "id": 12852,
                            "periodId": 9916,
                            "defaultValue": 10000.000
                        },
                        {
                            "id": 12853,
                            "periodId": 9917,
                            "defaultValue": 10000.000
                        },
                        {
                            "id": 12854,
                            "periodId": 9918,
                            "defaultValue": 10000.000
                        },
                        {
                            "id": 12855,
                            "periodId": 9919,
                            "defaultValue": 10000.000
                        },
                        {
                            "id": 12856,
                            "periodId": 9920,
                            "defaultValue": 10000.000
                        }
                    ],
                    "targetPeriodDefaultValuesMap": {
                        "9920": {
                            "id": 12856,
                            "periodId": 9920,
                            "defaultValue": 10000.000
                        },
                        "9906": {
                            "id": 12842,
                            "periodId": 9906,
                            "defaultValue": 10000.000
                        },
                        "9907": {
                            "id": 12843,
                            "periodId": 9907,
                            "defaultValue": 10000.000
                        },
                        "9908": {
                            "id": 12844,
                            "periodId": 9908,
                            "defaultValue": 10000.000
                        },
                        "9909": {
                            "id": 12845,
                            "periodId": 9909,
                            "defaultValue": 10000.000
                        },
                        "9910": {
                            "id": 12846,
                            "periodId": 9910,
                            "defaultValue": 10000.000
                        },
                        "9911": {
                            "id": 12847,
                            "periodId": 9911,
                            "defaultValue": 10000.000
                        },
                        "9912": {
                            "id": 12848,
                            "periodId": 9912,
                            "defaultValue": 10000.000
                        },
                        "9913": {
                            "id": 12849,
                            "periodId": 9913,
                            "defaultValue": 10000.000
                        },
                        "9914": {
                            "id": 12850,
                            "periodId": 9914,
                            "defaultValue": 10000.000
                        },
                        "9915": {
                            "id": 12851,
                            "periodId": 9915,
                            "defaultValue": 10000.000
                        },
                        "9916": {
                            "id": 12852,
                            "periodId": 9916,
                            "defaultValue": 10000.000
                        },
                        "9917": {
                            "id": 12853,
                            "periodId": 9917,
                            "defaultValue": 10000.000
                        },
                        "9918": {
                            "id": 12854,
                            "periodId": 9918,
                            "defaultValue": 10000.000
                        },
                        "9919": {
                            "id": 12855,
                            "periodId": 9919,
                            "defaultValue": 10000.000
                        }
                    },
                    "targetMilestoneTriggers": []
                }
            ],
            "leaderboardEnabled": false,
            "userCreated": false
        },
        {
            "id": 1717,
            "attribution": {
                "createdOn": "2025-01-08T06:05:10.000+0000",
                "lastUpdatedOn": "2025-01-08T06:05:10.000+0000",
                "lastUpdatedBy": {
                    "id": 75139931,
                    "code": "1746689082_",
                    "description": null,
                    "name": "Naman ganapathi",
                    "type": "ADMIN_USER"
                },
                "createdBy": {
                    "id": 75139931,
                    "code": "1746689082_",
                    "description": null,
                    "name": "Naman ganapathi",
                    "type": "ADMIN_USER"
                }
            },
            "orgId": 100737,
            "name": "milestone1",
            "active": false,
            "preferredTillId": 75152721,
            "totalPeriods": 3,
            "targetEvaluationType": "FIXED_CALENDAR_WINDOW",
            "recurringCycles": -1,
            "frequency": 0,
            "targetCycleStartDate": "2025-01-07T18:30:00.000Z",
            "targetCycleEndDate": "2025-01-31T18:30:00.000Z",
            "frequencyType": "WEEKLY",
            "trackingType": "DEFAULT",
            "createdOn": 1736316310000,
            "targets": [
                {
                    "id": 1986,
                    "attribution": {
                        "createdOn": "2025-01-08T06:05:10.000+0000",
                        "lastUpdatedOn": "2025-01-08T06:05:10.000+0000",
                        "lastUpdatedBy": {
                            "id": 75139931,
                            "code": "1746689082_",
                            "description": null,
                            "name": "Naman ganapathi",
                            "type": "ADMIN_USER"
                        },
                        "createdBy": {
                            "id": 75139931,
                            "code": "1746689082_",
                            "description": null,
                            "name": "Naman ganapathi",
                            "type": "ADMIN_USER"
                        }
                    },
                    "name": "milestone1",
                    "targetType": "REGULAR_POINTS",
                    "targetEntity": "POINTS",
                    "eventName": "TransactionAdd",
                    "targetGroupId": 1717,
                    "active": false,
                    "expression": "true",
                    "expressionJson": "\n{\n  \"arity\":\"literal\",\n  \"value\":\"true\",\n  \"type\":\"boolean:primitive\"\n}",
                    "filters": [],
                    "enrolmentMethod": "TRANSACTION",
                    "defaultValues": [
                        {
                            "id": 12832,
                            "periodId": 9887,
                            "defaultValue": 1000.000
                        },
                        {
                            "id": 12833,
                            "periodId": 9888,
                            "defaultValue": 1000.000
                        },
                        {
                            "id": 12834,
                            "periodId": 9889,
                            "defaultValue": 1000.000
                        }
                    ],
                    "targetPeriodDefaultValuesMap": {
                        "9888": {
                            "id": 12833,
                            "periodId": 9888,
                            "defaultValue": 1000.000
                        },
                        "9889": {
                            "id": 12834,
                            "periodId": 9889,
                            "defaultValue": 1000.000
                        },
                        "9887": {
                            "id": 12832,
                            "periodId": 9887,
                            "defaultValue": 1000.000
                        }
                    },
                    "targetMilestoneTriggers": []
                }
            ],
            "leaderboardEnabled": false,
            "userCreated": false
        },
        {
            "id": 1707,
            "attribution": {
                "createdOn": "2025-01-07T06:32:59.000+0000",
                "lastUpdatedOn": "2025-01-07T06:32:59.000+0000",
                "lastUpdatedBy": {
                    "id": 75121794,
                    "code": "1712222078_",
                    "description": "",
                    "name": "Divya Shankar",
                    "type": "ADMIN_USER"
                },
                "createdBy": {
                    "id": 75121794,
                    "code": "1712222078_",
                    "description": "",
                    "name": "Divya Shankar",
                    "type": "ADMIN_USER"
                }
            },
            "orgId": 100737,
            "name": "Review_target",
            "active": false,
            "preferredTillId": 75152722,
            "totalPeriods": 3,
            "description": "Review_target",
            "targetEvaluationType": "PERIOD_AGNOSTIC_WINDOW",
            "recurringCycles": 3,
            "frequency": 0,
            "targetCycleStartDate": "2025-01-07T18:30:00.000Z",
            "targetCycleEndDate": "2025-01-24T18:30:00.000Z",
            "frequencyType": "CUSTOM",
            "trackingType": "DEFAULT",
            "createdOn": 1736231579000,
            "targets": [
                {
                    "id": 1977,
                    "attribution": {
                        "createdOn": "2025-01-07T06:32:59.000+0000",
                        "lastUpdatedOn": "2025-01-07T06:32:59.000+0000",
                        "lastUpdatedBy": {
                            "id": 75121794,
                            "code": "1712222078_",
                            "description": "",
                            "name": "Divya Shankar",
                            "type": "ADMIN_USER"
                        },
                        "createdBy": {
                            "id": 75121794,
                            "code": "1712222078_",
                            "description": "",
                            "name": "Divya Shankar",
                            "type": "ADMIN_USER"
                        }
                    },
                    "name": "Review_target",
                    "emfRuleSetId": 126366925,
                    "targetType": "SALES",
                    "targetEntity": "TRANSACTION",
                    "eventName": "TransactionAdd",
                    "targetGroupId": 1707,
                    "description": "Review_target",
                    "active": false,
                    "expression": "true",
                    "expressionJson": "\n{\n  \"arity\":\"literal\",\n  \"value\":\"true\",\n  \"type\":\"boolean:primitive\"\n}",
                    "filters": [],
                    "enrolmentMethod": "TRANSACTION",
                    "defaultValues": [
                        {
                            "id": 12792,
                            "periodId": 9844,
                            "defaultValue": 100.000
                        },
                        {
                            "id": 12793,
                            "periodId": 9845,
                            "defaultValue": 100.000
                        },
                        {
                            "id": 12794,
                            "periodId": 9846,
                            "defaultValue": 100.000
                        }
                    ],
                    "targetPeriodDefaultValuesMap": {
                        "9844": {
                            "id": 12792,
                            "periodId": 9844,
                            "defaultValue": 100.000
                        },
                        "9845": {
                            "id": 12793,
                            "periodId": 9845,
                            "defaultValue": 100.000
                        },
                        "9846": {
                            "id": 12794,
                            "periodId": 9846,
                            "defaultValue": 100.000
                        }
                    },
                    "targetMilestoneTriggers": []
                }
            ],
            "leaderboardEnabled": false,
            "userCreated": false
        },
        {
            "id": 1702,
            "attribution": {
                "createdOn": "2025-01-02T09:18:14.000+0000",
                "lastUpdatedOn": "2025-01-02T09:18:14.000+0000",
                "lastUpdatedBy": {
                    "id": 75152721,
                    "code": "naman_doc",
                    "description": "",
                    "name": "naman",
                    "type": "TILL"
                },
                "createdBy": {
                    "id": 75152721,
                    "code": "naman_doc",
                    "description": "",
                    "name": "naman",
                    "type": "TILL"
                }
            },
            "orgId": 100737,
            "name": "ac_cappingtarget1",
            "active": false,
            "preferredTillId": 75152721,
            "totalPeriods": 1,
            "description": "streak group",
            "targetEvaluationType": "FIXED_CALENDAR_WINDOW",
            "recurringCycles": 0,
            "frequency": 0,
            "targetCycleStartDate": "2025-01-02T00:00:00.000Z",
            "targetCycleEndDate": "2025-01-31T23:59:59.000Z",
            "frequencyType": "DAILY",
            "trackingType": "CAPPING",
            "createdOn": 1735809494000,
            "targets": [
                {
                    "id": 1973,
                    "attribution": {
                        "createdOn": "2025-01-02T09:18:14.000+0000",
                        "lastUpdatedOn": "2025-01-02T09:18:14.000+0000",
                        "lastUpdatedBy": {
                            "id": 75152721,
                            "code": "naman_doc",
                            "description": "",
                            "name": "naman",
                            "type": "TILL"
                        },
                        "createdBy": {
                            "id": 75152721,
                            "code": "naman_doc",
                            "description": "",
                            "name": "naman",
                            "type": "TILL"
                        }
                    },
                    "name": "ac_cappingtarget1",
                    "targetType": "ALL",
                    "targetEntity": "ALTERNATE_CURRENCIES",
                    "eventName": "TransactionAdd",
                    "targetGroupId": 1702,
                    "description": "ac target with capping",
                    "active": false,
                    "expression": "true",
                    "expressionJson": "{\"arity\":\"literal\",\"value\":\"true\",\"type\":\"boolean:primitive\"}",
                    "filters": [],
                    "enrolmentMethod": "TRANSACTION",
                    "defaultValues": [
                        {
                            "id": 12788,
                            "periodId": 9836,
                            "defaultValue": 20.000
                        }
                    ],
                    "targetPeriodDefaultValuesMap": {
                        "9836": {
                            "id": 12788,
                            "periodId": 9836,
                            "defaultValue": 20.000
                        }
                    },
                    "targetMilestoneTriggers": [],
                    "extendedFieldInfo": {
                        "programId": 973,
                        "alternateCurrencyIdentifier": "UOs0Bm"
                    }
                }
            ],
            "leaderboardEnabled": false,
            "userCreated": false
        },
        {
            "id": 1701,
            "attribution": {
                "createdOn": "2025-01-02T08:53:21.000+0000",
                "lastUpdatedOn": "2025-01-02T08:53:21.000+0000",
                "lastUpdatedBy": {
                    "id": 75152721,
                    "code": "naman_doc",
                    "description": "",
                    "name": "naman",
                    "type": "TILL"
                },
                "createdBy": {
                    "id": 75152721,
                    "code": "naman_doc",
                    "description": "",
                    "name": "naman",
                    "type": "TILL"
                }
            },
            "orgId": 100737,
            "name": "ac_cappingtarget",
            "active": false,
            "preferredTillId": 50155487,
            "totalPeriods": 1,
            "description": "streak group",
            "targetEvaluationType": "FIXED_CALENDAR_WINDOW",
            "recurringCycles": 0,
            "frequency": 0,
            "targetCycleStartDate": "2025-01-02T00:00:00.000Z",
            "targetCycleEndDate": "2025-01-31T23:59:59.000Z",
            "frequencyType": "DAILY",
            "trackingType": "CAPPING",
            "createdOn": 1735808001000,
            "targets": [
                {
                    "id": 1972,
                    "attribution": {
                        "createdOn": "2025-01-02T08:53:21.000+0000",
                        "lastUpdatedOn": "2025-01-02T08:53:21.000+0000",
                        "lastUpdatedBy": {
                            "id": 75152721,
                            "code": "naman_doc",
                            "description": "",
                            "name": "naman",
                            "type": "TILL"
                        },
                        "createdBy": {
                            "id": 75152721,
                            "code": "naman_doc",
                            "description": "",
                            "name": "naman",
                            "type": "TILL"
                        }
                    },
                    "name": "ac_cappingtarget",
                    "targetType": "ALL",
                    "targetEntity": "ALTERNATE_CURRENCIES",
                    "eventName": "TransactionAdd",
                    "targetGroupId": 1701,
                    "description": "ac target with capping",
                    "active": false,
                    "expression": "true",
                    "expressionJson": "{\"arity\":\"literal\",\"value\":\"true\",\"type\":\"boolean:primitive\"}",
                    "filters": [],
                    "enrolmentMethod": "TRANSACTION",
                    "defaultValues": [
                        {
                            "id": 12787,
                            "periodId": 9835,
                            "defaultValue": 20.000
                        }
                    ],
                    "targetPeriodDefaultValuesMap": {
                        "9835": {
                            "id": 12787,
                            "periodId": 9835,
                            "defaultValue": 20.000
                        }
                    },
                    "targetMilestoneTriggers": [],
                    "extendedFieldInfo": {
                        "programId": 973,
                        "alternateCurrencyIdentifier": "UOs0Bm"
                    }
                }
            ],
            "leaderboardEnabled": false,
            "userCreated": false
        },
        {
            "id": 1698,
            "attribution": {
                "createdOn": "2025-01-02T05:33:49.000+0000",
                "lastUpdatedOn": "2025-01-02T05:33:49.000+0000",
                "lastUpdatedBy": {
                    "id": 75130186,
                    "code": "1718892445_",
                    "description": "",
                    "name": "shivank ",
                    "type": "ADMIN_USER"
                },
                "createdBy": {
                    "id": 75130186,
                    "code": "1718892445_",
                    "description": "",
                    "name": "shivank ",
                    "type": "ADMIN_USER"
                }
            },
            "orgId": 100737,
            "name": "randomname1",
            "active": false,
            "preferredTillId": 75152648,
            "totalPeriods": 1,
            "targetEvaluationType": "PERIOD_AGNOSTIC_WINDOW",
            "recurringCycles": 1,
            "frequency": 0,
            "targetCycleStartDate": "2025-01-01T18:30:00.000Z",
            "targetCycleEndDate": "2025-02-04T18:30:00.000Z",
            "frequencyType": "CUSTOM",
            "trackingType": "DEFAULT",
            "createdOn": 1735796029000,
            "targets": [
                {
                    "id": 1971,
                    "attribution": {
                        "createdOn": "2025-01-02T05:33:49.000+0000",
                        "lastUpdatedOn": "2025-01-02T05:33:49.000+0000",
                        "lastUpdatedBy": {
                            "id": 75130186,
                            "code": "1718892445_",
                            "description": "",
                            "name": "shivank ",
                            "type": "ADMIN_USER"
                        },
                        "createdBy": {
                            "id": 75130186,
                            "code": "1718892445_",
                            "description": "",
                            "name": "shivank ",
                            "type": "ADMIN_USER"
                        }
                    },
                    "name": "randomname1",
                    "emfRuleSetId": 126365473,
                    "targetType": "COUNT",
                    "targetEntity": "TRANSACTION",
                    "eventName": "TransactionAdd",
                    "targetGroupId": 1698,
                    "active": false,
                    "expression": "true",
                    "expressionJson": "\n{\n  \"arity\":\"literal\",\n  \"value\":\"true\",\n  \"type\":\"boolean:primitive\"\n}",
                    "filters": [],
                    "enrolmentMethod": "TRANSACTION",
                    "defaultValues": [
                        {
                            "id": 12786,
                            "periodId": 9832,
                            "defaultValue": 1.000
                        }
                    ],
                    "targetPeriodDefaultValuesMap": {
                        "9832": {
                            "id": 12786,
                            "periodId": 9832,
                            "defaultValue": 1.000
                        }
                    },
                    "targetMilestoneTriggers": []
                }
            ],
            "leaderboardEnabled": false,
            "userCreated": false
        }
    ],
    "errors": null,
    "warnings": null
}
```