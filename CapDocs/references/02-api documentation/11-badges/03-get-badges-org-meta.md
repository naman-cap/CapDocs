---
title: Get badges org meta
excerpt: ''
api:
  file: v1.json
  operationId: get-badges-org-meta
deprecated: false
hidden: true
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
This API is used to get all the metadata for badges at an org level.

> 👍 Note
>
> For detailed information about our APIs and for hands-on testing, refer documentation in [API overview](https://docs.capillarytech.com/reference/apioverview) and  step-by-step guide on making your first API call in [Make your first API call](https://docs.capillarytech.com/reference/make-your-first-api-call) .

# API specifications

| Feature                  | Availability     |
| :----------------------- | :--------------- |
| Authentication supported | Basic            |
| Pagination               | Yes, default: 10 |
| Batch support            | No               |
| Rate limit information   | None             |
| Access Group             | NA               |
| Configuration            | None             |

# API endpoint example

`https://eucrm.cc.capillarytech.com/api_gateway/v1/badges/orgMeta`

# Response parameters

| Parameter     | Description                                        | Data Type |
| ------------- | -------------------------------------------------- | --------- |
| id            | Unique ID of the badge.                            | string    |
| orgId         | Unique ID of the organization.                     | integer   |
| tags          | Contains the metadata tags related to the badge.   | array     |
| key           | The name of the tag.                               | string    |
| dataType      | The type of data stored in the tag.                | string    |
| description   | A brief description of the badge.                  | string    |
| mandatory     | Indicates whether the tag is mandatory,.           | boolean   |
| createdOn     | The timestamp when the badge was created.          | float     |
| createdBy     | Identifier of the user who created the badge.      | integer   |
| lastUpdatedOn | The timestamp when the badge was last updated.     | float     |
| lastUpdatedBy | Identifier of the user who last updated the badge. | integer   |
| errors        | An array of any errors that occurred.              | null      |
| warnings      | An array of any warnings that occurred.            | null      |

```json
{
    "data": {
        "id": "652fe2452aa6a339209b359f",
        "orgId": 100458,
        "tags": [
            {
                "key": "custom field 1",
                "dataType": "string",
                "description": "TEST",
                "mandatory": true
            }
        ],
        "createdOn": 1697636933.720000000,
        "createdBy": 75078478,
        "lastUpdatedOn": 1697636933.720000000,
        "lastUpdatedBy": 75078478
    },
    "errors": null,
    "warnings": null
}
```