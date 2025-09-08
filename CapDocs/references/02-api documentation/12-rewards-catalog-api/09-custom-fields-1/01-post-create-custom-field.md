---
title: Create custom field for reward
excerpt: ''
api:
  file: v1.json
  operationId: post-create-custom-field
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
Capillary's custom reward fields let brands personalize loyalty programs with customised data. These fields can be used to add additional information related to rewards. They also support internal tracking and analysis for data-driven improvements. You can create a custom field specific to a reward, catalogue promotion, or issue-reward action. For example, you can create a custom field for the "issue-reward" action to include a personalized message when issuing the reward.

<Note title="Note">
* Create/Update reward: Add a custom field in the payload which will be mapped to that reward with the scope REWARD
* Create/Update promotion: Add a custom field in the payload which will be mapped to that reward with the scope CATALOGUE\_PROMOTION
* Create/Update reward: Add a custom field in the payload which will be mapped to that reward with the scope ISSUE\_REWARD
</Note>

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
| HTTP Method            | POST                                            |
| Pagination             | No                                              |
| Batch support          | No                                              |
| Rate limit information | None                                            |

# API endpoint example

`https://eucrm.cc.capillarytech.com/api_gateway/rewards/core/v1/brand/customfield`

# Request body sample

```curl
curl --location 'https://eu.api.capillarytech.com/api_gateway/rewards/core/v1/brand/customfield' \
--header 'Accept: application/json' \
--header 'Content-Type: application/json' \
--header 'accept: application/json' \
--header 'Authorization: Basic bmFtYW46Y2FiY2U5OGM4MWFlNDM5ZTQ1Yjk3ZTM5YTY0NTY0MTY=' \
--header 'Cookie: _cfuvid=3BPRCKcXmguhyneZhg0pLHUUOWEZslsUp2nfMzbbgvA-1750919264238-0.0.1.1-604800000' \
--data '
{
  "name": "doctest1",
  "description": "hello",
  "isMandatory": false,
  "isActive": true,
  "scope": "REWARD",
  "dataType": "BOOLEAN"
}
'
```

# Request body parameters

| Parameter Name | Data Type | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| -------------- | --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| name\*         | String    | Unique name identifier for the custom field.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| orgId          | String    | Unique identifier of the organisation. To retrieve the orgId, use the [Get Org Details](https://docs.capillarytech.com/reference/get-org-details) API.                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| description\*  | String    | Description for the custom field.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| isMandatory    | Boolean   | Specify if the custom field is mandatory. Supported values:<br />`true`: Field is mandatory<br />`false`: Field is optional (default value)                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| isActive       | Boolean   | Specify the status of the custom field. Supported values:<br />`true`: Status is active (default value)<br />`false`: Status is inactive.                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| scope\*        | Enum      | Specify where the additional custom fields will apply. Supported values:<br />`REWARD`: While creating or updating a reward.<br />`ISSUE_REWARD`: While issuing a reward.<br />`CATALOGUE_PROMOTION`: While creating or updating a [promotion](https://docs.capillarytech.com/docs/loyalty-promotions-basic-and-advanced).                                                                                                                                                                                                                                                                            |
| defaultValue   | String    | Default value for the custom field used when no value is specified.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| dataType\*     | String    | Type of data for the custom field. Supported values:<br />`BOOLEAN`, `ENUM`, `DATE`, `STRING`, `INTEGER`.<br />255 is the character limit for the datatype `STRING`.<br /><br />Use `ENUM` as the `dataType` to define a set of pre-defined values, ensuring error-free management of reward metadata. For example, as a reward manager, you can create a custom field called "Reward Category" and define possible values such as "Discount," "Free Gift," and "Cashback." When creating or updating a reward, you can select one of these predefined values for the "Reward Category" custom field. |
| enumValues     | Object    | Object containing the enum values. This parameter is required if `dataType` is `ENUM`.<br />**Note**:<br /><br />- Define enum values using double quotes in a comma-separated list.<br />- You can provide a maximum of 30 enum values per custom field.<br />- When creating a reward, you can provide only one enum value per custom field in the `customFields` object.<br />- Each enum value must not exceed 80 characters.<br />- Allowed special characters: `[]()-_ `.<br />- Values must be unique within the custom field.<br />- `defaultValue` must be provided if `dataType` is `ENUM`. |

<br />

```json Scope : REWARD
{
    "orgId": 100458,
    "name": "CF1A112",
    "description": "CF1A112",
    "isMandatory": false,
    "isActive": true,
    "scope": "REWARD",
    "defaultValue": null,
    "dataType": "STRING"
}
```
```json Scope : CATALOGUE_PROMOTION
{
    "orgId": 100458,
    "name": "Order confirmed",
    "description": "Reward is processing",
    "isMandatory": false,
    "isActive": true,
    "scope": "CATALOGUE_PROMOTION",
    "defaultValue": null,
    "dataType": "STRING"
}
```
```json Scope: ISSUE_REWARD
{
    "orgId": 100458,
    "name": "CF1A112",
    "description": "CF1A112",
    "isMandatory": false,
    "isActive": true,
    "scope": "ISSUE_REWARD",
    "defaultValue": null,
    "dataType": "STRING"
}
```
```json dataType: ENUM
{
    "orgId": 100458,
    "name": "CustomField",
    "description": "",
    "isMandatory": false,
    "isActive": false,
    "defaultValue": "PRIMARY",
    "dataType": "ENUM",
    "scope": "ISSUE_REWARD",
    "enumValues": [
        "PRIMARY",
        "SECONDARY"
    ]
}
```

<br />

# Response parameters

| Parameter Name        | Data Type | Description                                                                                                                                                                                                                                    |
| --------------------- | --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| id                    | Integer   | Unique identifier of the custom field.                                                                                                                                                                                                         |
| orgId                 | Integer   | Unique identifier of the organisation.                                                                                                                                                                                                         |
| name                  | String    | Unique name of the custom field.                                                                                                                                                                                                               |
| description           | String    | Description of the custom field.                                                                                                                                                                                                               |
| isMandatory           | Boolean   | Indicates if the custom field is mandatory. Possible values:<br />`true`: Field is mandatory<br />`false`: Field is optional (default value)                                                                                                   |
| isActive              | Boolean   | Indicates the status of the custom field. Possible values:<br />`true`: Status is active (default value)<br />`false`: Status is inactive.                                                                                                     |
| scope                 | String    | Indicates where the additional custom fields will apply. Possible values:<br />`REWARD`: While creating or updating a reward.<br />`ISSUE_REWARD`: While issuing a reward.<br />`CATALOGUE_PROMOTION`: While creating or updating a promotion. |
| defaultValue          | String    | Default value for the custom field used when no value is specified.                                                                                                                                                                            |
| dataType              | String    | Type of data for the custom field. Possible values:<br />`BOOLEAN`, `ENUM`, `DATE`, `STRING`, `INTEGER`.                                                                                                                                       |
| createdBy             | Integer   | Unique customer identifier of the user who created the custom field                                                                                                                                                                            |
| createdOn             | Date      | Creation date and time of the field in Epoch time format.                                                                                                                                                                                      |
| createdOnDateTime     | String    | Creation date and time of the field in ISO 8601 format (YYYY-MM-DDTHH:MM:SSZ)                                                                                                                                                                  |
| lastUpdatedBy         | Integer   | Unique customer identifier of the user who last updated the custom field                                                                                                                                                                       |
| lastUpdatedOn         | Date      | Last update date and time of the field Epoch time format.                                                                                                                                                                                      |
| lastUpdatedOnDateTime | String    | Last update date and time of the field in ISO 8601 format (YYYY-MM-DDTHH:MM:SSZ)                                                                                                                                                               |
| enumValues            | Object    | Object containing the enum values.                                                                                                                                                                                                             |

<br />

```json Scope : REWARD
{
    "id": 18833,
    "orgId": 100737,
    "name": "CustomField1",
    "description": "CustomField1",
    "isMandatory": false,
    "isActive": true,
    "scope": "REWARD",
    "defaultValue": null,
    "dataType": "STRING",
    "createdBy": 75152721,
    "createdOn": 1741934782959,
    "createdOnDateTime": "2025-03-14T06:46:22Z",
    "lastUpdatedBy": 75152721,
    "lastUpdatedOn": 1741934782959,
    "enumValues": null,
    "lastUpdatedOnDateTime": "2025-03-14T06:46:22Z"
}
```
```json Scope : CATALOGUE_PROMOTION
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
    "createdOn": null,
    "lastUpdatedBy": 75130850,
    "lastUpdatedOn": null
}
```
```json Scope: ISSUE_REWARD
{
    "id": 210,
    "orgId": 100458,
    "name": "CF1A112",
    "description": "CF1A112",
    "isMandatory": false,
    "isActive": true,
    "scope": "ISSUE_REWARD",
    "defaultValue": null,
    "dataType": "STRING",
    "createdBy": 75086856,
    "createdOn": null,
    "lastUpdatedBy": 75086856,
    "lastUpdatedOn": null
}
```
```json dataType: ENUM
{
    "id": 15006,
    "orgId": 1231,
    "name": "CustomField",
    "description": "",
    "isMandatory": false,
    "isActive": true,
    "scope": "ISSUE_REWARD",
    "defaultValue": "PRIMARY",
    "dataType": "ENUM",
    "createdBy": 50716508,
    "createdOn": null,
    "lastUpdatedBy": 50716508,
    "lastUpdatedOn": null,
    "enumValues": [
        "PRIMARY",
        "SECONDARY"
    ]
}
```

<br />

# API-specific error codes

| Error code | Description                                                                    | Reason                                                               |
| :--------- | :----------------------------------------------------------------------------- | :------------------------------------------------------------------- |
| 3022       | ISSUE REWARD scope limit reached, max is `{max_limit}`. Allowed limit is 10.   | The number of rewards issued has exceeded the limit.                 |
| 3025       | Default value not found in the enum list                                       | The default value provided does not match any of the enums.          |
| 3030       | Enum value cannot be empty                                                     | One or more enum values are null.                                    |
| 3024       | Invalid characters in enum value. Allowed characters: \a-z,A-Z,0-9,[ -\_ ] | One or more enum values have an unsupported character.               |
| 400        | ENUM's list size is out of limit                                               | The enum object does not contain any values.                         |
| 3028       | Enum value exceeds the limit of 80 characters                                  | One or more enum values have exceeded the supported character limit. |
| 3029       | Duplicate enum values found                                                    | A duplicate enum is provided                                         |
| 400        | dataType must not be null                                                      | The field dataType is empty or missing.                              |