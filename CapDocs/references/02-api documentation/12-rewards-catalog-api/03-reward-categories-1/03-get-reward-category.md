---
title: Get Reward Category
excerpt: Get reward categories for a particluar brand.
api:
  file: v1.json
  operationId: get-reward-category
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
This API allows you to retrieve the details of the reward categories for a particular brand. A Reward Category is a metadata attribute used to classify rewards into predefined groups based on their nature or purpose. For example, categories can include fashion, electronics, or groceries.

> 👍 Note
>
> For detailed information about our APIs and for hands-on testing, refer documentation in [API overview](https://docs.capillarytech.com/reference/apioverview) and step-by-step guide on making your first API call in [Make your first API call](https://docs.capillarytech.com/reference/make-your-first-api-call).

# Prerequisites

*   Authentication - Basic or OAuth authentication details
*   Default access group
*   Brand ID or Brand Name

# Resource information

|               |                                                                       |
| :------------ | :-------------------------------------------------------------------- |
| URL           | /api\_gateway/rewards/core/v1/metadata/categories/brand/`\{brandId\}` |
| HTTP method   | GET                                                                   |
| Pagination    | Yes                                                                   |
| Rate limit    | NA                                                                    |
| Batch support | NA                                                                    |

# API endpoint example

With Brand ID:

`https://eu.api.capillarytech.com/api_gateway/rewards/core/v1/metadata/categories/brand/55`

With Brand Name:

`https://eu.api.capillarytech.com/api_gateway/rewards/core/v1/metadata/categories/brand/blisswave`

# Request path parameters

| (Parameters marked with \* are mandatory) | Data Type | Description                                                                                                                                                                                                                                                        |
| ----------------------------------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| brandId\*                                 | Long      | Unique identifier for the brand under which the reward category is associated. To retrieve brandId, refer to the [Retrieve Brand ID API](https://docs.capillarytech.com/reference/retrieve-brand-id).<br /><br />Either `brandId` or `brandName` must be provided. |
| brandName\*                               | String    | Name of the brand under which the reward category is associated. The brand name is case-insensitive.<br /><br />Either `brandId` or `brandName` must be provided.                                                                                                  |

# Request query parameters

| Parameter Name | Data Type | Description                                                                                                                                                            |
| -------------- | --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| sortBy         | Enum      | Sorts the returned reward category list.<br /><br />Supported values: `lastUpdatedOn`                                                                                  |
| orderBy        | Enum      | Specifies the order in which results should be sorted.<br /><br />Supported values: `"ASC"` for ascending, `"DESC"` for descending.<br /><br />Default value is "DESC" |

<br />

```curl Sample Request
curl --location 'https://eu.api.capillarytech.com/api_gateway/rewards/core/v1/metadata/categories/brand/55' \
--header 'Accept: */*' \
--header 'Authorization: Basic Ymxpc3MJmNGRjNzU5MWI1NzY='
```
```Text With sortBy=lastUpdatedOn
curl --location 'https://eu.api.capillarytech.com/api_gateway/rewards/core/v1/metadata/categories/brand/55?orderBy=ASC&sortBy=lastUpdatedOn' \
--header 'Accept: */*' \
--header 'Authorization: Basic Z2VvcmdlLmpvaG5zb246OTg4OTU2NWI4ODVhMmY4ZWE1MTk1MjA2NWEwYTEzNzg=' \
--header 'Cookie: _cfuvid=fUmBd935rmGsApqf1rYLG1M2QWI_fYSTy7P0wHTVZIs-1747377050702-0.0.1.1-604800000'
```

# Response parameters

| Parameter    | Data Type | Description                                                                                                                                        |
| ------------ | --------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| status       | Object    | Contains the status details for the data retrieval.                                                                                                |
| -success     | Boolean   | Indicates whether the request operation was successful. **Values:** `true` or `false`.                                                             |
| -code        | Integer   | Response code for the operation. **Example:** `200`                                                                                                |
| -message     | String    | Message describing the result of the operation. **Example:** `Category fetched successfully`.                                                      |
| categoryList | Object    | Contains the details of the reward categories for the specified brand.                                                                             |
| -id          | Integer   | Unique identifier for the reward category.                                                                                                         |
| -name        | String    | Name of the reward category.                                                                                                                       |
| -enabled     | Boolean   | Current active status of the reward category. If true, the reward category is currently active, else it is inactive.**Values:** `true` or `false`. |

<br />

```json Sample Response
{
    "status": {
        "success": true,
        "code": 200,
        "message": "Category fetched successfully"
    },
    "categoryList": [
        {
            "id": 128,
            "name": "tickets",
            "enabled": false
        },
        {
            "id": 111,
            "name": "training",
            "enabled": true
        }
    ]
}
```
```json Invalid brandId
{
    "status": {
        "success": false,
        "code": 3004,
        "message": "Brand not found"
    },
    "categoryList": null
}
```
```Text With sortBy=lastUpdatedOn
{
    "status": {
        "success": true,
        "code": 200,
        "message": "Category fetched successfully"
    },
    "categoryList": [
        {
            "id": 170,
            "name": "toys",
            "enabled": true,
            "createdOn": 1735816377000,
            "lastUpdatedOn": 1735816377000,
            "createdBy": null,
            "lastUpdatedBy": null,
            "createdOnDateTime": "2025-01-02T11:12:57Z",
            "lastUpdatedOnDateTime": "2025-01-02T11:12:57Z"
        },
        {
            "id": 229,
            "name": "joreward",
            "enabled": true,
            "createdOn": 1741059743000,
            "lastUpdatedOn": 1741059743000,
            "createdBy": null,
            "lastUpdatedBy": null,
            "createdOnDateTime": "2025-03-04T03:42:23Z",
            "lastUpdatedOnDateTime": "2025-03-04T03:42:23Z"
        },
        {
            "id": 251,
            "name": "docdemo",
            "enabled": true,
            "createdOn": 1742387687000,
            "lastUpdatedOn": 1742387687000,
            "createdBy": null,
            "lastUpdatedBy": null,
            "createdOnDateTime": "2025-03-19T12:34:47Z",
            "lastUpdatedOnDateTime": "2025-03-19T12:34:47Z"
        }
    ]
}
```

<br />

# API Error Codes

| Error code | Message         | Description                                  |
| :--------- | :-------------- | :------------------------------------------- |
| 3004       | Brand not found | Invalid brandName or brandId in the request. |