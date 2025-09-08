---
title: Update badges org meta
excerpt: ''
api:
  file: v1.json
  operationId: update-badges-org-meta
deprecated: false
hidden: true
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
This API is used to update the meta for badges at an org level.

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

# Request body parameters

| Parameter              | Description                                          | Data Type |
| ---------------------- | ---------------------------------------------------- | --------- |
| orgId                  | The unique identifier for the organization.          | string    |
| tags                   | A list of tags associated with the organization.     | array     |
| key (Type)             | The type of badge (Exclusive, Regular).              | string    |
| dataType               | Indicates the data type of the tag's value.          | string    |
| description            | Describes the value the tag holds.                   | string    |
| mandatory              | Specifies if the tag is required (false = optional). | boolean   |
| key                    | The type of badge.                                   | integer   |
| dataType (Priority)    | Indicates the data type of the badge.                | integer   |
| description (Priority) | Describes the badge tag (Priority of the badge).     | string    |
| mandatory (Priority)   | Specifies if the tag is required (false = optional). | boolean   |

```json
{
    "orgId": orgId,
    "tags": [
        {
            "key": "Type",
            "dataType": "string",
            "description": "Type of badge(Exclusive,Regular)",
            "mandatory": false
        },
        {
            "key": "Priority",
            "dataType": "integer",
            "description": "Priority of the badge",
            "mandatory": false
        }
    ]
}
```

# Response parameter

| Parameter     | Description                                      | Data Type |
| ------------- | ------------------------------------------------ | --------- |
| id            | Unique identifier for the badge.                 | string    |
| orgId         | Unique identifier for the organization.          | string    |
| tags          | List of tags with key-value pairs.               | array     |
| key           | Identifies the tag for the type of badge.        | string    |
| dataType      | Data type for the 'Type' tag value.              | string    |
| description   | Describes the 'Type' tag.                        | string    |
| mandatory     | Indicates if the 'Type' tag is required.         | boolean   |
| createdOn     | The time  for when the badge was created.        | integer   |
| createdBy     | Identifier for who created the badge.            | integer   |
| lastUpdatedOn | The time  for the last update to the badge.      | integer   |
| lastUpdatedBy | Identifier for who last updated the badge.       | integer   |
| errors        | Container for any errors (null if no errors)     | object    |
| warnings      | Container for any warnings (null if no warnings) | object    |

```json 200 OK
{
    "data": {
        "id": "string",
        "orgId": orgId,
        "tags": [
            {
                "key": "Type",
                "dataType": "string",
                "description": "Type of badge(Exclusive,Regular)",
                "mandatory": false
            },
            {
                "key": "Priority",
                "dataType": "integer",
                "description": "Priority of the badge",
                "mandatory": false
            }
        ],
        "createdOn": 1697636680.484000000,
        "createdBy": 75097962,
        "lastUpdatedOn": 1699458829.960881000,
        "lastUpdatedBy": 75097962
    },
    "errors": null,
    "warnings": null
}
```