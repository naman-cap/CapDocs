---
title: Update unified target
excerpt: ''
api:
  file: v3.json
  operationId: update-unified-target
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
> 👍 Note
>
> For detailed information about our APIs and for hands-on testing, refer documentation in [API overview](https://docs.capillarytech.com/reference/apioverview) and  step-by-step guide on making your first API call in [Make your first API call](https://docs.capillarytech.com/reference/make-your-first-api-call) .

# Prerequisites

*   Authentication: Basic authentication details
*   Access group resource: WRITE access to target loyalty access group resource

# Resource information

|               |                                                   |
| :------------ | :------------------------------------------------ |
| URI           | /v3/targetGroups/`{targetGroupId}`/unifiedTargets |
| HTTP method   | POST                                              |
| Rate limit    | NA                                                |
| Batch support | NA                                                |

# API endpoint example

`https://eu.api.capillarytech.com/v3/targetGroups/{targetGroupId}/unifiedTargets`

<br />

## Request Body Parameters

| Parameter                 | DataType          | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ------------------------- | ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `unifiedTargetExpression` | Object            | Contains the threshold value for a unified target expression                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| `- thresholdValue`        | Integer           | The threshold value above which the target expression is considered true                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| `targets`                 | Array of Objects  | Array of targets, each target has several properties as described below                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `- id`                    | Integer           | Unique identifier for the target                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| `- name`                  | String            | The name identifier for the target group. <br /> The character limit for the name is 200 characters.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| `- emfRuleSetId`          | Integer           | Identifier for the rule set associated with this target                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `- targetType`            | Enum              | Target type on which the target is set. Supported values: <br /><br />**Transactional activities**: `QUANTITY`, `SALES` (SUM), `COUNT`, `VISIT` <br />**Behavioral events**: `EVENT_ATTRIBUTE` <br /><br />You can create multiple targets using any combination of the supported target types.                                                                                                                                                                                                                                                                                                                                                                                             |
| `- targetEntity`          | Enum              | Entity to define target condition. Supported values: <br /><br />To track transactions: `TRANSACTION`, `LINEITEM`, `POINTS` <br />To track behavioural events: `EVENT` <br />To track alternate currencies: `ALTERNATE_CURRENCIES` <br />To track points: `REWARDS` <br /><br />You can mix and match target entities. <br /><br />Refer to:<br />[Customer (EMF) events](https://docs.capillarytech.com/reference/create-target-based-on-emf-eventss)<br />[Behavioural events](https://docs.capillarytech.com/reference/create-target-group-based-on-behavioural-event)<br />[Alternate currencies](https://docs.capillarytech.com/reference/create-target-based-on-alternate-currencies) |
| `- targetGroupId`         | Integer           | Group identifier which this target belongs to                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| `- description`           | String            | Description of the target                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `- active`                | Boolean           | Status to indicate whether the target is active or not.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `- expression`            | String            | A representation of the target's condition rule.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| `- expressionJson`        | JSON String       | A JSON body that represents the target's rule.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| `- filters`               | Array of Objects  | Array of filters to apply to the target                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `-- entityType`           | String            | Type of entity the filter applies to, e.g., `STORE`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| `-- entityIds`            | Array of Integers | Array of entity identifiers which the filter applies to                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `- enrolmentMethod`       | String            | Method used for enrolment of customers and add target values. <br />Supported values: <br />`TRANSACTION` - Enroll loyalty customers who transact during the target period <br />`IMPORT` - Import a list of customers with custom target value                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| `- defaultValues`         | Array of Objects  | Array of default values, each with its own set of properties                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| `-- id`                   | Integer           | Identifier for the default value                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| `-- periodId`             | Integer           | Identifier for the period associated with the default value                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| `-- defaultValue`         | Integer           | The actual default value                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |

```json
{
    "unifiedTargetExpression": {
           "thresholdValue": 40000
        },
        "targets": [
    {
                "id": 10461,
                "name": "UTG-editTest11111",
                "emfRuleSetId": 1248820,
                "targetType": "SALES",
                "targetEntity": "TRANSACTION",
                "targetGroupId": 6668,
                "description": "unfied01",
                "active": true,
                "expression": "true",
                "expressionJson": "{\"arity\":\"literal\",\"value\":\"true\",\"type\":\"boolean:primitive\"}",
                "filters": [
                    {
                        "entityType": "STORE",
                        "entityIds": [
                            50670140,
                            50670144,
                            50671644
                        ]
                    }
                ],
                "enrolmentMethod": "TRANSACTION",
                "defaultValues": [
                    {
                        "id": 11652,
                        "periodId": 7521,
                        "defaultValue": 10000
                    },
                    {
                        "id": 11653,
                        "periodId": 7522,
                        "defaultValue": 20000
                    }
                ]
            }
        ],
        "deactivateTargetIds": [10462
        ]
    
}

```

# Response parameters

| Parameter               | DataType           | Description                                                             |
| ----------------------- | ------------------ | ----------------------------------------------------------------------- |
| data                    | Object             | The main data object that contains all the response details             |
| unifiedTargetExpression | Object             | Object that defines the unified target expression                       |
| aggregation             | String             | The method of aggregation for the target expression                     |
| thresholdValue          | Integer            | The value at which the target expression is considered to meet criteria |
| ruleExpression          | String             | A logical expression involving target IDs                               |
| targets                 | Array of Objects   | Array of target objects                                                 |
| id                      | Integer            | Unique identifier of the target                                         |
| attribution             | Object             | Object containing attribution details                                   |
| createdOn               | String (Date-Time) | Timestamp of when the target was created                                |
| lastUpdatedOn           | String (Date-Time) | Timestamp of the last update to the target                              |
| lastUpdatedBy           | Object             | Object with details of who last updated the target                      |
| id                      | Integer            | Identifier of the last updater                                          |
| code                    | String             | Code associated with the last updater                                   |
| description             | String             | Description associated with the last updater                            |
| name                    | String             | Name of the last updater                                                |
| type                    | String             | Type of entity the last updater is (e.g., TILL)                         |
| createdBy               | Object             | Object with details of who created the target                           |
| name                    | String             | Name of the target                                                      |
| emfRuleSetId            | Integer            | Identifier for the rule set associated with the target                  |
| targetType              | String             | Type of target (e.g., SALES)                                            |
| targetEntity            | String             | Entity targeted (e.g., TRANSACTION)                                     |
| targetGroupId           | Integer            | Group ID associated with the target                                     |
| description             | String             | Description of the target                                               |
| active                  | Boolean            | Indicates if the target is active                                       |
| expression              | String             | Logical expression as a string for target condition                     |
| expressionJson          | String (JSON)      | JSON string representing the logical expression in more detail          |
| filters                 | Array of Objects   | Array of filter objects to apply to the target                          |
| entityType              | String             | Type of entity the filter applies to                                    |
| entityIds               | Array of Integers  | Array of entity IDs the filter applies to                               |
| enrolmentMethod         | String             | Method of enrolment for the target                                      |
| defaultValues           | Array of Objects   | Array of objects each with default values for the target                |
| id                      | Integer            | Identifier for the default value entry                                  |
| periodId                | Integer            | Period ID associated with the default value                             |
| defaultValue            | Integer            | The default value set for the target                                    |
| deactivateTargetIds     | Array of Integers  | Array of target IDs to be deactivated                                   |
| errors                  | Object             | Object containing details of any errors in the request                  |
| warnings                | Object             | Object containing details of any warnings in the request                |

```json
{
    "data": {
        "unifiedTargetExpression": {
            "aggregation": "SUM",
            "thresholdValue": 40000,
            "ruleExpression": "(10461 & 10463)"
        },
        "targets": [
            {
                "id": 10461,
                "attribution": {
                    "createdOn": "2023-10-04T16:30:28.000+0530",
                    "lastUpdatedOn": "2023-10-04T16:30:28.000+0530",
                    "lastUpdatedBy": {
                        "id": 50670145,
                        "code": "tillhg",
                        "description": "",
                        "name": "tillhg",
                        "type": "TILL"
                    },
                    "createdBy": {
                        "id": 50670145,
                        "code": "tillhg",
                        "description": "",
                        "name": "tillhg",
                        "type": "TILL"
                    }
                },
                "name": "UTG-editTest11111",
                "emfRuleSetId": 1248820,
                "targetType": "SALES",
                "targetEntity": "TRANSACTION",
                "targetGroupId": 6668,
                "description": "unfied01",
                "active": true,
                "expression": "true",
                "expressionJson": "{\"arity\":\"literal\",\"value\":\"true\",\"type\":\"boolean:primitive\"}",
                "filters": [
                    {
                        "entityType": "STORE",
                        "entityIds": [
                            50670140,
                            50670144,
                            50671644
                        ]
                    }
                ],
                "enrolmentMethod": "TRANSACTION",
                "defaultValues": [
                    {
                        "id": 11652,
                        "periodId": 7521,
                        "defaultValue": 10000
                    },
                    {
                        "id": 11653,
                        "periodId": 7522,
                        "defaultValue": 20000
                    }
                ]
            }
        ],
        "deactivateTargetIds": [
            10462
        ]
    },
    "errors": null,
    "warnings": null
}
```