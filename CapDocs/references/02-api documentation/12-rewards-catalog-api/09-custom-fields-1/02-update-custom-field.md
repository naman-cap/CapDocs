---
title: Update reward custom field
excerpt: ''
api:
  file: v1.json
  operationId: update-custom-field
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
This API allows you to update a custom field created for a reward.

> 👍 Note
>
> For detailed information about our APIs and for hands-on testing, refer documentation in [API overview](https://docs.capillarytech.com/reference/apioverview) and  step-by-step guide on making your first API call in [Make your first API call](https://docs.capillarytech.com/reference/make-your-first-api-call) .

# Prerequisites

*   Authentication: Basic or OAuth authentication details
*   Access group resource: Default

# Resource information

|               |                                                        |
| :------------ | :----------------------------------------------------- |
| URI           | /api\_gateway/rewards/core/v1/brand/customfield/`{id}` |
| HTTP method   | PUT                                                    |
| Rate limit    | NA                                                     |
| Batch support | NA                                                     |

# API endpoint example

`https://eucrm.cc.capillarytech.com/api_gateway/rewards/core/v1/brand/customfield/106`

# Request path parameter

| Parameter | Data Type | Description                                  |
| :-------- | :-------- | :------------------------------------------- |
| id\*      | String    | Unique name identifier for the custom field. |

# Request body parameter

| Parameter Name | Data Type | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| -------------- | --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| name\*         | String    | Unique name identifier for the custom field.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| orgId          | String    | Unique identifier for the organisation. To retrieve the orgId, use the [Get Org Details](https://docs.capillarytech.com/reference/get-org-details) API.                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| description\*  | String    | Description for the custom field.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| isMandatory    | Boolean   | Indicates if the custom field is mandatory. Supported values:<br />`true`: Field is mandatory<br />`false`: Field is optional (default value)                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| isActive       | Boolean   | Indicates the status of the custom field. Supported values:<br />`true`: Status is active (default value)<br />`false`: Status is inactive.                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| scope\*        | Enum      | Indicates where the additional custom fields will apply. Supported values:<br />`REWARD`: While creating or updating a reward.<br />`ISSUE_REWARD`: While issuing a reward.<br />`CATALOGUE_PROMOTION`: While creating or updating a [promotion](https://docs.capillarytech.com/docs/loyalty-promotions-basic-and-advanced).                                                                                                                                                                                                                                                                          |
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

| Parameter Name        | Data Type | Description                                                                                                                                                                                                                                  |
| --------------------- | --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| id                    | Integer   | Unique identifier for the custom field.                                                                                                                                                                                                      |
| orgId                 | Integer   | Unique identifier of the organisation.                                                                                                                                                                                                       |
| name                  | String    | Unique name for the custom field.                                                                                                                                                                                                            |
| description           | String    | Description of the custom field.                                                                                                                                                                                                             |
| isMandatory           | Boolean   | Indicates if the custom field is mandatory. Possible values:<br />`true`: Field is mandatory<br />`false`: Field is optional (default value)                                                                                                 |
| isActive              | Boolean   | Specify the status of the custom field. Possible values:<br />`true`: Status is active (default value)<br />`false`: Status is inactive.                                                                                                     |
| scope                 | String    | Specify where the additional custom fields will apply. Possible values:<br />`REWARD`: While creating or updating a reward.<br />`ISSUE_REWARD`: While issuing a reward.<br />`CATALOGUE_PROMOTION`: While creating or updating a promotion. |
| defaultValue          | String    | Default value for the custom field used when no value is specified.                                                                                                                                                                          |
| dataType              | String    | Type of data for the custom field. Possible values:<br />`BOOLEAN`, `ENUM`, `DATE`, `STRING`, `INTEGER`.                                                                                                                                     |
| createdBy             | Integer   | Unique customer identifier of the user who created the custom field                                                                                                                                                                          |
| createdOn             | Date      | Creation date and time of the field in Epoch time format.                                                                                                                                                                                    |
| createdOnDateTime     | String    | Creation date and time of the field in ISO 8601 format (YYYY-MM-DDTHH:MM:SSZ)                                                                                                                                                                |
| lastUpdatedBy         | Integer   | Unique customer identifier of the user who last updated the custom field                                                                                                                                                                     |
| lastUpdatedOn         | Date      | Last update date and time of the field in Epoch time format.                                                                                                                                                                                 |
| enumValues            | Object    | Object containing the enum values.                                                                                                                                                                                                           |
| lastUpdatedOnDateTime | String    | Last updated date and time of the field in ISO 8601 format (YYYY-MM-DDTHH:MM:SSZ).                                                                                                                                                           |

<br />

```json Scope : REWARD
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
    "createdOn": 1741934782959,
    "createdOnDateTime": "2025-03-14T06:46:22Z",
    "lastUpdatedBy": 75155282,
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

# API-specific error codes

<Table align={["left","left","left"]}>
  <thead>
    <tr>
      <th>
        Error code
      </th>

      <th>
        Description
      </th>

      <th>
        Reason
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        3022
      </td>

      <td>
        ISSUE REWARD scope limit reached, max is `{max_limit}`. Allowed limit is 10.
      </td>

      <td>
        *
      </td>
    </tr>

    <tr>
      <td>
        3025
      </td>

      <td>
        Default value not found in the enum list
      </td>

      <td>
        The default value provided does not match any of the enums.
      </td>
    </tr>

    <tr>
      <td>
        3030
      </td>

      <td>
        Enum value cannot be empty
      </td>

      <td>
        One or more enum values are null.
      </td>
    </tr>

    <tr>
      <td>
        3024
      </td>

      <td>
        Invalid characters in enum value. Allowed characters: \a-z,A-Z,0-9,[ -\_ ]
      </td>

      <td>
        One or more enum values have an unsupported character.
      </td>
    </tr>

    <tr>
      <td>
        400
      </td>

      <td>
        ENUM's list size is out of limit
      </td>

      <td>
        The enum object does not contain any values.
      </td>
    </tr>

    <tr>
      <td>
        3028
      </td>

      <td>
        Enum value exceeds the limit of 80 characters
      </td>

      <td>
        One or more enum values have exceeded the supported character limit.
      </td>
    </tr>

    <tr>
      <td>
        3029
      </td>

      <td>
        Duplicate enum values found
      </td>

      <td>
        A duplicate enum is provided
      </td>
    </tr>
  </tbody>
</Table>