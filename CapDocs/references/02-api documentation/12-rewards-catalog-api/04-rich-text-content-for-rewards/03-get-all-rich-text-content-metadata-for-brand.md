---
title: Get all Rich Text Content Metadata for specific brand
excerpt: This API is used to fetch rich content metadata for rewards within a brand.
api:
  file: v1.json
  operationId: get-all-rich-text-content-metadata-for-brand
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
# Prerequisites

*   Authentication: Basic or OAuth authentication
*   Create Rich Text Content Metadata using [Create Rich Text Content Meta Data Against Reward](https://docs.capillarytech.com/reference/create-rich-content-meta)

# API Specification

## Endpoint

`https://{host}/api_gateway/rewards/core/v1/brand/richContentMeta`

## Resource Information

| Property         | Value                                                |
| ---------------- | ---------------------------------------------------- |
| **Resource URI** | `/api_gateway/rewards/core/v1/brand/richContentMeta` |
| **HTTP Method**  | `GET`                                                |

## Request Query Parameters

| Parameter Name | Type    | Required | Description                                          |
| -------------- | ------- | -------- | ---------------------------------------------------- |
| status         | String  | No       | Filters the metadata by status (`ACTIVE`/`INACTIVE`) |
| page           | integer | no       | Cannot be lesser than 0 ,                            |
| size           | integer | no       | Default (0,10) cannot be lesser than one, max - 50   |

## Example Response

```json
{
    "richContentMetaROS": [
        {
            "id": 4,
            "name": "terms&conditions-1",
            "description": "RC1_desc",
            "isMandatory": false,
            "isActive": true,
            "scope": "REWARD",
            "defaultValue": null,
            "createdBy": 75161973,
            "createdOn": 1742256000000,
            "lastUpdatedBy": 75161973,
            "lastUpdatedOn": 1742342400000
        }
    ],
    "pagingDto": {
        "last": true,
        "totalElements": 5,
        "totalPages": 1,
        "numberOfElements": 5,
        "first": true,
        "size": 10,
        "number": 0
    }
}

 
```

<br />

## Response Parameters

| Field Name    | Description                                                                               |
| ------------- | ----------------------------------------------------------------------------------------- |
| id            | Unique identifier for the rich content metadata entry.                                    |
| name          | The name of the rich content metadata.                                                    |
| description   | A brief description of the rich content metadata's purpose or usage.                      |
| isMandatory   | Indicates whether the rich content metadata is mandatory (true or false).                 |
| isActive      | Indicates whether the rich content metadata is currently active (true or false).          |
| scope         | The scope of the rich content metadata, indicating its context (e.g., REWARD).            |
| defaultValue  | The default value assigned to the rich content metadata if no specific value is provided. |
| createdBy     | The ID of the user who created the rich content metadata.                                 |
| createdOn     | The timestamp (in milliseconds) when the rich content metadata was created.               |
| lastUpdatedBy | The ID of the user who last updated the rich content metadata.                            |
| lastUpdatedOn | The timestamp (in milliseconds) when the rich content metadata was last updated.          |