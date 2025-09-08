---
title: Create Reward Category
excerpt: Create a new reward category.
api:
  file: v1.json
  operationId: create-reward-category
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
This API lets you create a new reward category. A Reward Category is a metadata attribute used to classify rewards into predefined groups based on their nature or purpose. For example, categories can include fashion, electronics, or groceries.

> 👍 Note
>
> For detailed information about our APIs and for hands-on testing, refer documentation in [API overview](https://docs.capillarytech.com/reference/apioverview) and  step-by-step guide on making your first API call in [Make your first API call](https://docs.capillarytech.com/reference/make-your-first-api-call) .

# Prerequisites

*   Authentication - Basic or OAuth authentication details
*   Default access group
*   Brand ID

# Resource information

|               |                                                        |
| :------------ | :----------------------------------------------------- |
| URL           | /api\_gateway/rewards/core/v1/metadata/category/create |
| HTTP method   | POST                                                   |
| Pagination    | NA                                                     |
| Rate limit    | NA                                                     |
| Batch support | NA                                                     |

# API endpoint example

`https://eu.api.capillarytech.com/api_gateway/rewards/core/v1/metadata/category/create`

# Request body parameters

| Parameter  (Parameters marked with \* are mandatory) | Data Type | Description                                                                                                                                             |
| ---------------------------------------------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| brandId\*                                            | Long      | Unique identifier for the brand. To retrieve brandId, refer to the [Retrieve Brand ID API](https://docs.capillarytech.com/reference/retrieve-brand-id). |
| name\*                                               | String    | Name of the reward category to be created. The name supports special characters, is not case-sensitive, and can be up to 255 characters in length.      |

```json Sample Request
{
  "brandId": 61,
  "name": "DOCDEMO22"
}
```

# Response parameters

| Parameter             | Description                                                                                                                                                                                                  |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| status                | Contains the status details for reward category creation.                                                                                                                                                    |
| -success              | Indicates whether the operation was successful. **Values:** `true` or `false`.                                                                                                                               |
| -code                 | Response code for the operation. **Example:** `2002`                                                                                                                                                         |
| -message              | Message describing the result of the operation.                                                                                                                                                              |
| category              | Contains the reward category details.                                                                                                                                                                        |
| -id                   | Unique identifier for the created reward category.                                                                                                                                                           |
| -name                 | Name of the created reward category.                                                                                                                                                                         |
| -enabled              | Current active status of the reward category. If true, the reward category is currently active, else it is inactive.\*\*Values: \*\*`true` or `false`. When creating a reward category, the value is `true`. |
| lastUpdatedOn         | Indicates the timestamp when the reward category was updated. The timestamp is in Epoch time format.                                                                                                         |
| lastUpdatedBy         | The till ID of the user who last updated the reward category.                                                                                                                                                |
| createdBy             | The till ID of the user who created the reward category.                                                                                                                                                     |
| createdOn             | Indicates the timestamp when the reward category was created. The timestamp is in Epoch time format.                                                                                                         |
| createdOnDateTime     | Indicates the date and time when the reward category was created, formatted in ISO 8601.                                                                                                                     |
| lastUpdatedOnDateTime | Indicates the date and time when the reward category was updated, formatted in ISO 8601.                                                                                                                     |

<br />

```json Sample Response
{
    "status": {
        "success": true,
        "code": 2002,
        "message": "Category save successfully"
    },
    "category": {
        "id": 344,
        "name": "DOCDEMO22",
        "enabled": true,
        "createdOn": 1748950177000,
        "lastUpdatedOn": 1748950177000,
        "createdBy": 75161973,
        "lastUpdatedBy": 75161973,
        "createdOnDateTime": "2025-06-03T11:29:37Z",
        "lastUpdatedOnDateTime": "2025-06-03T11:29:37Z"
    }
}
```
```json Invalid brandId
{
    "status": {
        "success": false,
        "code": 3004,
        "message": "Brand not found"
    },
    "category": null
}
```
```json Category name null
{
    "status": {
        "success": false,
        "code": 400,
        "message": "name can't be null or empty."
    }
}
```

<br />

# Error Codes

| Error code | Message                      | Description                              |
| :--------- | :--------------------------- | :--------------------------------------- |
| 3004       | brand not found              | Invalid brandId in the request.          |
| 400        | name can't be null or empty. | Name of the category has to be provided. |