---
title: Get targets details
excerpt: ''
api:
  file: v3.json
  operationId: get-targets
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
To see details of targets present in a specific target group

Click on the 200 symbol on right side to see sample 200 response

## API Endpoint example

`https://eu.api.capillarytech.com/v3/targetGroups/2163/targets`

```curl cURL
curl --location 'https://eu.api.capillarytech.com/v3/targetGroups/2163/targets' \
--header 'Authorization: Basic dGpfY2FwaWxsYXJ5OjVjMTc' \
--header 'Cookie: _cfuvid=Hz5vxex9nxE.gNjvnTwDBDgfNLFEoicCUfrgNIeurLY-1750403636294-0.0.1.1-604800000' 
```

## Response Parameter

| Parameter                                | Type    | Description                                                                   |
| ---------------------------------------- | ------- | ----------------------------------------------------------------------------- |
| data                                     | Array   | List of objects containing the main data payload.                             |
| data\[].id                               | Integer | Unique identifier for the record.                                             |
| data\[].attribution                      | Object  | Metadata about the creation and updates of the record.                        |
| attribution.createdOn                    | String  | Timestamp when the record was created (ISO 8601 format).                      |
| attribution.lastUpdatedOn                | String  | Timestamp when the record was last updated (ISO 8601 format).                 |
| attribution.lastUpdatedBy                | Object  | Details of the user who last updated the record.                              |
| lastUpdatedBy.id                         | Integer | Unique identifier of the user.                                                |
| lastUpdatedBy.code                       | String  | Code associated with the user.                                                |
| lastUpdatedBy.description                | String  | Description of the user (empty in this case).                                 |
| lastUpdatedBy.name                       | String  | Name of the user.                                                             |
| lastUpdatedBy.type                       | String  | Type of the user (e.g., "TILL").                                              |
| attribution.createdBy                    | Object  | Details of the user who created the record (same structure as lastUpdatedBy). |
| data\[].name                             | String  | Name of the target group (e.g., "uat\_target\_group\_32").                    |
| data\[].emfRuleSetId                     | Integer | Identifier for the EMF rule set.                                              |
| data\[].targetType                       | String  | Type of target (e.g., "ALL").                                                 |
| data\[].targetEntity                     | String  | Entity targeted (e.g., "TRANSACTION").                                        |
| data\[].eventName                        | String  | Name of the event (e.g., "TransactionAdd").                                   |
| data\[].targetGroupId                    | Integer | Identifier for the target group.                                              |
| data\[].description                      | String  | Description of the target group (empty in this case).                         |
| data\[].active                           | Boolean | Indicates whether the target group is active.                                 |
| data\[].expression                       | String  | Logical expression for the target group (e.g., "true").                       |
| data\[].expressionJson                   | String  | JSON representation of the expression.                                        |
| data\[].filters                          | Array   | List of filters applied (empty in this case).                                 |
| data\[].enrolmentMethod                  | String  | Method of enrolment (e.g., "IMPORT").                                         |
| data\[].defaultValues                    | Array   | List of default values for the target group.                                  |
| defaultValues\[].id                      | Integer | Unique identifier for the default value.                                      |
| defaultValues\[].periodId                | Integer | Identifier for the period associated with the default value.                  |
| defaultValues\[].defaultValue            | Float   | Default value for the period.                                                 |
| data\[].targetPeriodDefaultValuesMap     | Object  | Mapping of period IDs to their default values.                                |
| targetPeriodDefaultValuesMap.\<periodId> | Object  | Details of the default value for the specified period.                        |
| \<periodId>.id                           | Integer | Unique identifier for the default value.                                      |
| \<periodId>.periodId                     | Integer | Identifier for the period.                                                    |
| \<periodId>.defaultValue                 | Float   | Default value for the period.                                                 |
| data\[].targetMilestoneTriggers          | Array   | List of milestone triggers (empty in this case).                              |
| data\[].extendedFieldInfo                | Object  | Additional information about the extended field.                              |
| extendedFieldInfo.name                   | String  | Name of the extended field (e.g., "points").                                  |
| extendedFieldInfo.aggregateFunction      | String  | Aggregation function for the field (e.g., "SUM").                             |

```json Response
{
    "data": [
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
    "errors": null,
    "warnings": null
}
```