---
title: Get target periods
excerpt: ''
api:
  file: v3.json
  operationId: get-target-periods
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
This API is used to fetch all target periods present in a target group. Meaning, this depends on the "target group id" and that is a mandatory parameter.

Please click on the 200 symbol to see sample 200 response.

## API endpoint example

`https://eu.api.capillarytech.com/v3/targetGroups/2163/targetPeriods`

```json cURL
curl --location 'https://eu.api.capillarytech.com/v3/targetGroups/2163/targetPeriods' \
--header 'Authorization: Basic dGpfY2FwaWxsYXJ5OjVjMTc' \
--header 'Cookie: _cfuvid=Hz5vxex9nxE.gNjvnTwDBDgfNLFEoicCUfrgNIeurLY-1750403636294-0.0.1.1-604800000'
```

## Response parameter

| Parameter                 | Type    | Description                                                                   |
| ------------------------- | ------- | ----------------------------------------------------------------------------- |
| data                      | Array   | List of objects containing the main data payload.                             |
| data\[].id                | Integer | Unique identifier for the record.                                             |
| data\[].attribution       | Object  | Metadata about the creation and updates of the record.                        |
| attribution.createdOn     | String  | Timestamp when the record was created (ISO 8601 format).                      |
| attribution.lastUpdatedOn | String  | Timestamp when the record was last updated (ISO 8601 format).                 |
| attribution.lastUpdatedBy | Object  | Details of the user who last updated the record.                              |
| lastUpdatedBy.id          | Integer | Unique identifier of the user.                                                |
| lastUpdatedBy.code        | String  | Code associated with the user.                                                |
| lastUpdatedBy.description | String  | Description of the user                                                       |
| lastUpdatedBy.name        | String  | Name of the user.                                                             |
| lastUpdatedBy.type        | String  | Type of the user (e.g., "TILL").                                              |
| attribution.createdBy     | Object  | Details of the user who created the record (same structure as lastUpdatedBy). |
| data\[].startDate         | String  | Start date of the period (YYYY-MM-DD format).                                 |
| data\[].endDate           | String  | End date of the period (YYYY-MM-DD format).                                   |
| data\[].refCode           | String  | Reference code for the period (e.g., "Cycle\_1").                             |
| data\[].periodStatus      | String  | Status of the period (e.g., "ENDED").                                         |
| data\[].targetGroupId     | Integer | Identifier for the target group associated with the period.                   |
| data\[].description       | String  | Description of the period (empty in this case).                               |
| data\[].active            | Boolean | Indicates whether the period is active.                                       |

```json Response
{
    "data": [
        {
            "id": 19336,
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
            "startDate": "2025-05-22",
            "endDate": "2025-05-22",
            "refCode": "Cycle_1",
            "periodStatus": "ENDED",
            "targetGroupId": 2163,
            "description": "",
            "active": true
        },
        {
            "id": 19337,
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
            "startDate": "2025-05-23",
            "endDate": "2025-05-23",
            "refCode": "Cycle_2",
            "periodStatus": "ENDED",
            "targetGroupId": 2163,
            "description": "",
            "active": true
        }
    ],
    "errors": null,
    "warnings": null
}
```