---
title: Update badge custom field
excerpt: ''
api:
  file: v1.json
  operationId: update-custom-field-badge
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
This API allows you to update the custom field of the badge.

> 👍 Note
> 
> For detailed information about our APIs and for hands-on testing, refer documentation in [API overview](https://docs.capillarytech.com/reference/apioverview) and  step-by-step guide on making your first API call in [Make your first API call](https://docs.capillarytech.com/reference/make-your-first-api-call).

# Prerequisites

-   Authentication: Basic or OAuth authentication 
-   Default access group 

# Resource information

|                      |                                                    |
| :------------------- | :------------------------------------------------- |
| URI                  | /api_gateway/v1/badges/customField/`{customFieldId}` |
| HTTP method          | PUT                                                |
| Pagination supported | No                                                 |
| Rate limit           | NA                                                 |
| Batch support        | NA                                                 |

# API endpoint example

`https://eucrm.cc.capillarytech.com/api_gateway/v1/badges/customField/{customFieldId}`

# Request path parameter

| Parameter Name | Data Type | Description                    |
| :------------- | :-------- | :----------------------------- |
| customFieldId  | String    | Unique ID of the custom field. |

# Request body parameters

| Parameter Name | Data Type | Description                                                                     |
| :------------- | :-------- | :------------------------------------------------------------------------------ |
| name\*         | String    | Name of the custom field.                                                       |
| isMandatory    | Boolean   | Indicated if the custom field is mandatory.                                     |
| defaultValue   | String    | Default values assigned to the custom field.                                    |
| isActive       | Boolean   | Indicates if the custom field is active or not.                                 |
| dataType\*     | Enum      | Data type of the custom field. Supported values: INTEGER, BOOLEAN, DATE, STRING |

```json
{
"name": "CF31 date",
"isMandatory": false,
"defaultValue": "cgvhjb",
"isActive": true,
"dataType": "STRING"
}
```

# Response parameters

| Parameter Name | Data Type | Description                                                   |
| -------------- | --------- | ------------------------------------------------------------- |
| id             | String    | The unique identifier of the custom field.                    |
| orgId          | Integer   | The org ID the custom field belongs to.                       |
| name           | String    | The name of the custom field.                                 |
| isMandatory    | Boolean   | Indicates if the custom field is mandatory.                   |
| defaultValue   | String    | The default value of the custom field.                        |
| isActive       | Boolean   | Indicates if the custom field is active.                      |
| dataType       | Enum      | The data type of the custom field's value.                    |
| createdOn      | Date      | The timestamp when the custom field was created.              |
| createdBy      | Integer   | The identifier of the user who created the custom field.      |
| lastUpdatedOn  | Date      | The timestamp when the custom field was last updated.         |
| lastUpdatedBy  | Integer   | The identifier of the user who last updated the custom field. |
| errors         | Array     | A list of errors if any.                                      |
| warnings       | Array     | A list of warnings if any.                                    |

```json
{
    "data": {
        "id": "65bb446bfd3e324f2cac8871",
        "orgId": 100606,
        "name": "CF31 date",
        "isMandatory": false,
        "defaultValue": "cgvhjb",
        "isActive": true,
        "dataType": "STRING",
        "createdOn": 1706771563.483000000,
        "createdBy": 75097962,
        "lastUpdatedOn": 1707979249.788290000,
        "lastUpdatedBy": 75097962
    },
    "errors": [],
    "warnings": []
}
```