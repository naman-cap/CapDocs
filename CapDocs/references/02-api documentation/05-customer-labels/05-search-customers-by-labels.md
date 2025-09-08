---
title: Search Customers by Label
excerpt: >-
  Retrieves the list of customers who are tagged to a specific label. You can
  also search by partial label name. By default you will see a maximum of 10
  records.
api:
  file: v2.json
  operationId: search-customers-by-labels
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
* Rate limiter controls the number of incoming and outgoing traffic of a network.
* Authentication verifies the identity of the current user or integration.\
  See Introduction > Authentication (Merchant Setup on Admin Portal) for more details.

> 👍 Note
>
> For detailed information about the APIs and for hands-on testing, refer to the [API overview](https://docs.capillarytech.com/reference/apioverview) documentation and step-by-step guide on[ making your first API call.](https://docs.capillarytech.com/reference/make-your-first-api-call)

# Prerequisites

*   Basic Authentication
*   Default access group

## Resource information

| URI                   | customers/labels/search?q=LabelName |
| :-------------------- | :---------------------------------- |
| HTTP method           | GET                                 |
| Authentication        | Basic                               |
| Pagination supported? | NO                                  |
| Rate limit            | YES                                 |
| Batch support         | NO                                  |

# Query parameters

| Parameter | Data Type | Description                                                                                                                                                                                                            |
| --------- | --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `q`       | String    | Specify the label name by which you want to fetch customers. You can also pass partial string. The search query. Values are case-sensitive. For example `pre` to fetch customers in all labels that starts with `pre`. |
| `offset`  | Integer   | Number of records to skip for pagination.                                                                                                                                                                              |
| `limit`   | Integer   | Maximum number of records to return. `-1` means no limit (fetch all records).                                                                                                                                          |

# Response parameters

| Parameter          | Data Type | Description                                                                                            |
| ------------------ | --------- | ------------------------------------------------------------------------------------------------------ |
| `pagination`       | Object    | Pagination details. The maximum number of records to return per page. Defaults to 10 if not specified. |
| `- limit`          | Integer   | Number of records returned per page.                                                                   |
| `- offset`         | Integer   | Offset used for pagination.                                                                            |
| `- total`          | Integer   | Total number of records available.                                                                     |
| `data`             | Array     | Array of user data objects.                                                                            |
| `- userId`         | Integer   | Unique identifier of the user.                                                                         |
| `- customerLabels` | Array     | Labels assigned to this user.                                                                          |
| `-- orgId`         | Integer   | Organization ID where the label belongs.                                                               |
| `-- labelId`       | Integer   | Unique ID of the label.                                                                                |
| `-- labelName`     | String    | Name of the label assigned to the user.                                                                |
| `warnings`         | Array     | Any warnings returned by the API.                                                                      |
| `errors`           | Array     | Any errors returned by the API.                                                                        |

```curl
{
    "pagination": {
        "limit": 10,
        "offset": 0,
        "total": 10
    },
    "data": [
        {
            "userId": 564738364,
            "customerLabels": [
                {
                    "orgId": 100737,
                    "labelId": 20942,
                    "userId": 564738364,
                    "labelName": "Premium Customer"
                }
            ]
        },
        {
            "userId": 564955097,
            "customerLabels": [
                {
                    "orgId": 100737,
                    "labelId": 20942,
                    "userId": 564955097,
                    "labelName": "Premium Customer"
                }
            ]
        },
        {
            "userId": 564955098,
            "customerLabels": [
                {
                    "orgId": 100737,
                    "labelId": 20942,
                    "userId": 564955098,
                    "labelName": "Premium Customer"
                }
            ]
        },
        {
            "userId": 564955301,
            "customerLabels": [
                {
                    "orgId": 100737,
                    "labelId": 20942,
                    "userId": 564955301,
                    "labelName": "Premium Customer"
                }
            ]
        },
        {
            "userId": 564955302,
            "customerLabels": [
                {
                    "orgId": 100737,
                    "labelId": 20942,
                    "userId": 564955302,
                    "labelName": "Premium Customer"
                }
            ]
        },
        {
            "userId": 564955411,
            "customerLabels": [
                {
                    "orgId": 100737,
                    "labelId": 20942,
                    "userId": 564955411,
                    "labelName": "Premium Customer"
                }
            ]
        },
        {
            "userId": 565032176,
            "customerLabels": [
                {
                    "orgId": 100737,
                    "labelId": 20942,
                    "userId": 565032176,
                    "labelName": "Premium Customer"
                }
            ]
        },
        {
            "userId": 565118794,
            "customerLabels": [
                {
                    "orgId": 100737,
                    "labelId": 20942,
                    "userId": 565118794,
                    "labelName": "Premium Customer"
                }
            ]
        },
        {
            "userId": 564582355,
            "customerLabels": [
                {
                    "orgId": 100737,
                    "labelId": 20942,
                    "userId": 564582355,
                    "labelName": "Premium Customer"
                }
            ]
        },
        {
            "userId": 564703420,
            "customerLabels": [
                {
                    "orgId": 100737,
                    "labelId": 20942,
                    "userId": 564703420,
                    "labelName": "Premium Customer"
                }
            ]
        }
    ],
    "warnings": [],
    "errors": []
}
```