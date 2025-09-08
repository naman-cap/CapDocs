---
title: Get all custom fields
excerpt: ''
api:
  file: v1.json
  operationId: get-custom-field
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
This API is used to retrieve the details of the reward custom field metadata created for the org.

> 👍 Note
>
> * For detailed information about our APIs and for hands-on testing, refer documentation in [API overview](https://docs.capillarytech.com/reference/apioverview) and  step-by-step guide on making your first API call in [Make your first API call](https://docs.capillarytech.com/reference/make-your-first-api-call) .
> * Start time and end time are in UTC time zone

# Prerequisites

*   Authentication: Basic or OAuth authentication
*   Default access group

# Resource information

|                        |                                                 |
| :--------------------- | :---------------------------------------------- |
| URI                    | /api\_gateway/rewards/core/v1/brand/customfield |
| HTTP Method            | GET                                             |
| Pagination             | Yes                                             |
| Batch support          | No                                              |
| Rate limit information | None                                            |

# API endpoint example

`https://eucrm.cc.capillarytech.com/api_gateway/rewards/core/v1/brand/customfield`

# Request Query Parameters

| Parameter Name | Data Type | Description                                                                                                                                                                                                                                  |
| :------------- | :-------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`scope`**    | String    | Defines where the custom fields will be applicable:\<br>\<br>- **`REWARD`**: While creating or updating a reward.\<br>- **`CATALOGUE_PROMOTION`**: While creating or updating a promotion.\<br>- **`ISSUE_REWARD`**: While issuing a reward. |
| **`sortBy`**   | Enum      | Sorts the returned custom fields list. Supported values: `lastUpdatedOn`                                                                                                                                                                     |
| **`orderBy`**  | Enum      | Specifies the order in which results should be sorted. Supported values: `"ASC"` for ascending, `"DESC"` for descending. Default value is `"DESC"`.                                                                                          |

# Response parameters

| Parameter Name              | Data Type | Description                                                                                                                                                                                                                        |
| :-------------------------- | :-------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`id`**                    | Integer   | A unique identifier for the custom field.                                                                                                                                                                                          |
| **`orgId`**                 | Integer   | The unique identifier of the organization.                                                                                                                                                                                         |
| **`name`**                  | String    | A unique name for the custom field.                                                                                                                                                                                                |
| **`description`**           | String    | A description of the custom field.                                                                                                                                                                                                 |
| **`isMandatory`**           | Boolean   | Indicates if the custom field is mandatory. Possible values: `true` (mandatory) or `false` (optional, default).                                                                                                                    |
| **`isActive`**              | Boolean   | Indicates the status of the custom field. Possible values: `true` (active, default) or `false` (inactive).                                                                                                                         |
| **`scope`**                 | String    | Indicates where the additional custom fields will apply. Possible values: `REWARD` (while creating or updating a reward), `ISSUE_REWARD` (while issuing a reward), `CATALOGUE_PROMOTION` (while creating or updating a promotion). |
| **`defaultValue`**          | Null      | The default value for the custom field, used when no value is specified.                                                                                                                                                           |
| **`dataType`**              | String    | The type of data for the custom field. Possible values: `BOOLEAN`, `ENUM`, `DATE`, `STRING`, `INTEGER`.                                                                                                                            |
| **`createdBy`**             | Integer   | The unique customer identifier of the user who created the custom field.                                                                                                                                                           |
| **`createdOn`**             | Date      | The creation date and time of the field in Epoch time format.                                                                                                                                                                      |
| **`createdOnDateTime`**     | String    | The creation date and time of the field in ISO 8601 format (YYYY-MM-DDTHH:MM:SSZ).                                                                                                                                                 |
| **`lastUpdatedBy`**         | Integer   | The unique customer identifier of the user who last updated the custom field.                                                                                                                                                      |
| **`lastUpdatedOn`**         | Date      | The last updated date and time of the field in Epoch time format.                                                                                                                                                                  |
| **`enumValues`**            | Object    | An object containing the enum values.                                                                                                                                                                                              |
| **`lastUpdatedOnDateTime`** | String    | The last updated date and time of the field in ISO 8601 format (YYYY-MM-DDTHH:MM:SSZ).                                                                                                                                             |

<br />

```json 200 OK
[
    {
        "id": 18833,
        "orgId": 100737,
        "name": "CF1A_update",
        "description": "CF1A",
        "isMandatory": false,
        "isActive": true,
        "scope": "REWARD",
        "defaultValue": null,
        "dataType": "STRING",
        "createdBy": 75152721,
        "createdOn": 1741847093000,
        "createdOnDateTime": "2025-03-13T06:24:53Z",
        "lastUpdatedBy": 75155282,
        "lastUpdatedOn": 1741886142000,
        "enumValues": null,
        "lastUpdatedOnDateTime": "2025-03-13T17:15:42Z"
    },
    {
        "id": 18836,
        "orgId": 100737,
        "name": "CF1A112",
        "description": "CF1A112",
        "isMandatory": false,
        "isActive": true,
        "scope": "REWARD",
        "defaultValue": null,
        "dataType": "STRING",
        "createdBy": 75155282,
        "createdOn": 1741850714000,
        "createdOnDateTime": "2025-03-13T07:25:14Z",
        "lastUpdatedBy": 75155282,
        "lastUpdatedOn": 1741850714000,
        "enumValues": null,
        "lastUpdatedOnDateTime": "2025-03-13T07:25:14Z"
    },
    {
        "id": 18880,
        "orgId": 100737,
        "name": "age_update",
        "description": "CF1A",
        "isMandatory": false,
        "isActive": true,
        "scope": "REWARD",
        "defaultValue": null,
        "dataType": "STRING",
        "createdBy": 75155282,
        "createdOn": 1741926993000,
        "createdOnDateTime": "2025-03-14T04:36:33Z",
        "lastUpdatedBy": 75155282,
        "lastUpdatedOn": 1741927126000,
        "enumValues": null,
        "lastUpdatedOnDateTime": "2025-03-14T04:38:46Z"
    }
]
```
```json With scope=ISSUE_REWARD
[
    {
        "id": 5918,
        "orgId": 100458,
        "name": "testdate",
        "description": "order id of reward purchased",
        "isMandatory": false,
        "isActive": true,
        "scope": "ISSUE_REWARD",
        "defaultValue": null,
        "dataType": "DATE",
        "createdBy": 75078478,
        "createdOn": 1720003550000,
        "lastUpdatedBy": 75078478,
        "lastUpdatedOn": 1720003550000
    },
    {
        "id": 6215,
        "orgId": 100458,
        "name": "CF_Scope",
        "description": "CF_Scope Description",
        "isMandatory": false,
        "isActive": true,
        "scope": "ISSUE_REWARD",
        "defaultValue": "1",
        "dataType": "INTEGER",
        "createdBy": 75036445,
        "createdOn": 1720510462000,
        "lastUpdatedBy": 75036445,
        "lastUpdatedOn": 1720510462000
    },
    {
        "id": 6219,
        "orgId": 100458,
        "name": "Custom_Scope_7",
        "description": "Custom_Scope_7 Description",
        "isMandatory": false,
        "isActive": true,
        "scope": "ISSUE_REWARD",
        "defaultValue": "false",
        "dataType": "BOOLEAN",
        "createdBy": 75036445,
        "createdOn": 1720512990000,
        "lastUpdatedBy": 75036445,
        "lastUpdatedOn": 1720512990000
    },
    {
        "id": 6854,
        "orgId": 100458,
        "name": "ON ITS WAY",
        "description": "OIW",
        "isMandatory": false,
        "isActive": true,
        "scope": "ISSUE_REWARD",
        "defaultValue": null,
        "dataType": "STRING",
        "createdBy": 75130850,
        "createdOn": 1721649424000,
        "lastUpdatedBy": 75130850,
        "lastUpdatedOn": 1721649424000
    },
    {
        "id": 6861,
        "orgId": 100458,
        "name": "On the way",
        "description": "OIW",
        "isMandatory": false,
        "isActive": true,
        "scope": "ISSUE_REWARD",
        "defaultValue": null,
        "dataType": "STRING",
        "createdBy": 75130850,
        "createdOn": 1721653084000,
        "lastUpdatedBy": 75130850,
        "lastUpdatedOn": 1721653084000
    },
    {
        "id": 6862,
        "orgId": 100458,
        "name": "On the wayy",
        "description": "On the way_1",
        "isMandatory": false,
        "isActive": true,
        "scope": "ISSUE_REWARD",
        "defaultValue": null,
        "dataType": "STRING",
        "createdBy": 75130850,
        "createdOn": 1721653217000,
        "lastUpdatedBy": 75130850,
        "lastUpdatedOn": 1721653217000
    },
    {
        "id": 6863,
        "orgId": 100458,
        "name": "DELIVERING SOON",
        "description": "DELIVERING SOON",
        "isMandatory": false,
        "isActive": true,
        "scope": "ISSUE_REWARD",
        "defaultValue": null,
        "dataType": "STRING",
        "createdBy": 75130850,
        "createdOn": 1721653407000,
        "lastUpdatedBy": 75130850,
        "lastUpdatedOn": 1721653407000
    },
    {
        "id": 6866,
        "orgId": 100458,
        "name": "DELIVERING SOOON",
        "description": "DELIVERING SOON",
        "isMandatory": false,
        "isActive": true,
        "scope": "ISSUE_REWARD",
        "defaultValue": null,
        "dataType": "STRING",
        "createdBy": 75130850,
        "createdOn": 1721653589000,
        "lastUpdatedBy": 75130850,
        "lastUpdatedOn": 1721653589000
    },
    {
        "id": 6867,
        "orgId": 100458,
        "name": "In Transit",
        "description": "Reward is processing",
        "isMandatory": false,
        "isActive": true,
        "scope": "ISSUE_REWARD",
        "defaultValue": null,
        "dataType": "STRING",
        "createdBy": 75130850,
        "createdOn": 1721653883000,
        "lastUpdatedBy": 75130850,
        "lastUpdatedOn": 1721653883000
    },
    {
        "id": 6868,
        "orgId": 100458,
        "name": "Order confirmed",
        "description": "Reward is processing",
        "isMandatory": false,
        "isActive": true,
        "scope": "ISSUE_REWARD",
        "defaultValue": null,
        "dataType": "STRING",
        "createdBy": 75130850,
        "createdOn": 1721654265000,
        "lastUpdatedBy": 75130850,
        "lastUpdatedOn": 1721654265000
    }
]
```
```json With scope=REWARD
[
    {
        "id": 5916,
        "orgId": 100458,
        "name": "CF1",
        "description": "CF1 Description",
        "isMandatory": false,
        "isActive": true,
        "scope": "REWARD",
        "defaultValue": "test",
        "dataType": "STRING",
        "createdBy": 75036445,
        "createdOn": 1720003372000,
        "lastUpdatedBy": 75036445,
        "lastUpdatedOn": 1720003372000
    },
    {
        "id": 5919,
        "orgId": 100458,
        "name": "testdate",
        "description": "order id of reward purchased",
        "isMandatory": false,
        "isActive": true,
        "scope": "REWARD",
        "defaultValue": null,
        "dataType": "DATE",
        "createdBy": 75078478,
        "createdOn": 1720003554000,
        "lastUpdatedBy": 75078478,
        "lastUpdatedOn": 1720003554000
    },
    {
        "id": 5920,
        "orgId": 100458,
        "name": "testdate1",
        "description": "order id of reward purchased",
        "isMandatory": false,
        "isActive": true,
        "scope": "REWARD",
        "defaultValue": null,
        "dataType": "DATE",
        "createdBy": 75078478,
        "createdOn": 1720003572000,
        "lastUpdatedBy": 75078478,
        "lastUpdatedOn": 1720003572000
    },
    {
        "id": 5921,
        "orgId": 100458,
        "name": "testdate2",
        "description": "order id of reward purchased",
        "isMandatory": false,
        "isActive": true,
        "scope": "REWARD",
        "defaultValue": "2024-06-07 12:12:00",
        "dataType": "DATE",
        "createdBy": 75078478,
        "createdOn": 1720003672000,
        "lastUpdatedBy": 75078478,
        "lastUpdatedOn": 1720003672000
    },
    {
        "id": 6006,
        "orgId": 100458,
        "name": "te6",
        "description": "te6 Description",
        "isMandatory": false,
        "isActive": true,
        "scope": "REWARD",
        "defaultValue": "True",
        "dataType": "BOOLEAN",
        "createdBy": 75036445,
        "createdOn": 1720148863000,
        "lastUpdatedBy": 75036445,
        "lastUpdatedOn": 1720148863000
    },
    {
        "id": 6017,
        "orgId": 100458,
        "name": "CF17",
        "description": "CF17 Description",
        "isMandatory": false,
        "isActive": true,
        "scope": "REWARD",
        "defaultValue": "CF17",
        "dataType": "STRING",
        "createdBy": 75036445,
        "createdOn": 1720168148000,
        "lastUpdatedBy": 75036445,
        "lastUpdatedOn": 1720168148000
    },
    {
        "id": 6021,
        "orgId": 100458,
        "name": "CF77",
        "description": "CF77 Description",
        "isMandatory": false,
        "isActive": true,
        "scope": "REWARD",
        "defaultValue": "true",
        "dataType": "BOOLEAN",
        "createdBy": 75036445,
        "createdOn": 1720168829000,
        "lastUpdatedBy": 75036445,
        "lastUpdatedOn": 1720168829000
    },
    {
        "id": 6025,
        "orgId": 100458,
        "name": "CF9009",
        "description": "CF9009 Description",
        "isMandatory": false,
        "isActive": true,
        "scope": "REWARD",
        "defaultValue": "true",
        "dataType": "BOOLEAN",
        "createdBy": null,
        "createdOn": 1720169130000,
        "lastUpdatedBy": 75036445,
        "lastUpdatedOn": 1720171725000
    },
    {
        "id": 6611,
        "orgId": 100458,
        "name": "labelsV1",
        "description": "labelsV1 Description",
        "isMandatory": false,
        "isActive": true,
        "scope": "REWARD",
        "defaultValue": null,
        "dataType": "STRING",
        "createdBy": 75036445,
        "createdOn": 1721196012000,
        "lastUpdatedBy": 75036445,
        "lastUpdatedOn": 1721196012000
    },
    {
        "id": 6914,
        "orgId": 100458,
        "name": "Order confirmed",
        "description": "Reward is processing",
        "isMandatory": false,
        "isActive": true,
        "scope": "REWARD",
        "defaultValue": null,
        "dataType": "STRING",
        "createdBy": 75130850,
        "createdOn": 1721739118000,
        "lastUpdatedBy": 75130850,
        "lastUpdatedOn": 1721739118000
    }
]
```
```json With scope= CATALOG_PROMOTION
[
    {
        "id": 87,
        "orgId": 100458,
        "name": "CF1",
        "description": "CF1 Description",
        "isMandatory": false,
        "isActive": true,
        "scope": "CATALOGUE_PROMOTION",
        "defaultValue": null,
        "dataType": "STRING",
        "createdBy": 75078478,
        "createdOn": 1701863921000,
        "lastUpdatedBy": 75078478,
        "lastUpdatedOn": 1701863921000
    },
    {
        "id": 6220,
        "orgId": 100458,
        "name": "Scope_Reward",
        "description": "Scope_Reward Description",
        "isMandatory": false,
        "isActive": true,
        "scope": "CATALOGUE_PROMOTION",
        "defaultValue": "",
        "dataType": "STRING",
        "createdBy": 75036445,
        "createdOn": 1720513051000,
        "lastUpdatedBy": 75036445,
        "lastUpdatedOn": 1720513051000
    },
    {
        "id": 6913,
        "orgId": 100458,
        "name": "Order confirmed",
        "description": "Reward is processing",
        "isMandatory": false,
        "isActive": true,
        "scope": "CATALOGUE_PROMOTION",
        "defaultValue": null,
        "dataType": "STRING",
        "createdBy": 75130850,
        "createdOn": 1721739035000,
        "lastUpdatedBy": 75130850,
        "lastUpdatedOn": 1721739035000
    }
]
```
```Text With sortBy=lastUpdatedOn
[
    {
        "id": 18836,
        "orgId": 100737,
        "name": "CF1A112",
        "description": "CF1A112",
        "isMandatory": false,
        "isActive": true,
        "scope": "REWARD",
        "defaultValue": null,
        "dataType": "STRING",
        "createdBy": 75155282,
        "createdOn": 1741850714000,
        "createdOnDateTime": "2025-03-13T07:25:14Z",
        "lastUpdatedBy": 75155282,
        "lastUpdatedOn": 1741850714000,
        "enumValues": null,
        "lastUpdatedOnDateTime": "2025-03-13T07:25:14Z"
    },
    {
        "id": 18833,
        "orgId": 100737,
        "name": "CF1A_update",
        "description": "CF1A",
        "isMandatory": false,
        "isActive": true,
        "scope": "REWARD",
        "defaultValue": null,
        "dataType": "STRING",
        "createdBy": 75152721,
        "createdOn": 1741847093000,
        "createdOnDateTime": "2025-03-13T06:24:53Z",
        "lastUpdatedBy": 75155282,
        "lastUpdatedOn": 1741886142000,
        "enumValues": null,
        "lastUpdatedOnDateTime": "2025-03-13T17:15:42Z"
    },
    {
        "id": 18880,
        "orgId": 100737,
        "name": "age_update",
        "description": "CF1A",
        "isMandatory": false,
        "isActive": true,
        "scope": "REWARD",
        "defaultValue": null,
        "dataType": "STRING",
        "createdBy": 75155282,
        "createdOn": 1741926993000,
        "createdOnDateTime": "2025-03-14T04:36:33Z",
        "lastUpdatedBy": 75155282,
        "lastUpdatedOn": 1741927126000,
        "enumValues": null,
        "lastUpdatedOnDateTime": "2025-03-14T04:38:46Z"
    },
    {
        "id": 21681,
        "orgId": 100737,
        "name": "Address",
        "description": "Address to deliver reward",
        "isMandatory": false,
        "isActive": true,
        "scope": "REWARD",
        "defaultValue": null,
        "dataType": "STRING",
        "createdBy": 75152721,
        "createdOn": 1746501610000,
        "createdOnDateTime": "2025-05-06T03:20:10Z",
        "lastUpdatedBy": 75152721,
        "lastUpdatedOn": 1746501610000,
        "enumValues": null,
        "lastUpdatedOnDateTime": "2025-05-06T03:20:10Z"
    },
    {
        "id": 21682,
        "orgId": 100737,
        "name": "Address",
        "description": "Address to deliver reward",
        "isMandatory": false,
        "isActive": true,
        "scope": "ISSUE_REWARD",
        "defaultValue": null,
        "dataType": "STRING",
        "createdBy": 75152721,
        "createdOn": 1746501773000,
        "createdOnDateTime": "2025-05-06T03:22:53Z",
        "lastUpdatedBy": 75152721,
        "lastUpdatedOn": 1746501773000,
        "enumValues": null,
        "lastUpdatedOnDateTime": "2025-05-06T03:22:53Z"
    },
    {
        "id": 21683,
        "orgId": 100737,
        "name": "Points Issued",
        "description": "Points issued to customer",
        "isMandatory": false,
        "isActive": true,
        "scope": "ISSUE_REWARD",
        "defaultValue": null,
        "dataType": "INTEGER",
        "createdBy": 75152721,
        "createdOn": 1746501974000,
        "createdOnDateTime": "2025-05-06T03:26:14Z",
        "lastUpdatedBy": 75152721,
        "lastUpdatedOn": 1746503356000,
        "enumValues": null,
        "lastUpdatedOnDateTime": "2025-05-06T03:49:16Z"
    }
]
```