---
title: Create fulfillment status
excerpt: ''
api:
  file: v1.json
  operationId: create-fulfillment-status
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
This API allows you to define the predefined values for fulfillment statuses.

For example: A brand can have a fulfillment status as the Reward is ON ITS WAY before delivering the reward to the customer.

> 👍 Note
> 
> For detailed information about our APIs and for hands-on testing, refer documentation in [API overview](https://docs.capillarytech.com/reference/apioverview) and step-by-step guide on making your first API call in [Make your first API call](https://docs.capillarytech.com/reference/make-your-first-api-call).
> 
> You can create custom fields with the scope set to ISSUE_REWARD to track and manage various stages of the reward issuance process.

# Prerequisites

-   Basic or OAuth Authentication
-   Default access group

# Resource information

|                        |                                                |
| :--------------------- | :--------------------------------------------- |
| URI                    | /api_gateway/rewards/core/v1/fulfillmentStatus |
| HTTP Method            | POST                                           |
| Pagination             | No                                             |
| Batch support          | No                                             |
| Rate limit information | None                                           |

# API endpoint example

`https://eucrm.cc.capillarytech.com/api_gateway/rewards/core/v1/fulfillmentStatus`

# Request body parameters

| Parameter | Data type | Description                     |
| :-------- | :-------- | :------------------------------ |
| name\*    | String    | Name of the fulfillment status. |

```json
[
  { "name": "ON ITS WAY"},
  {"name": "DELIVERING SOON"}
]
```

# Response parameters

| Parameter             | Data Type | Description                                                                            |
| --------------------- | --------- | -------------------------------------------------------------------------------------- |
| orgId                 | Integer   | ID of the org.                                                                         |
| name                  | String    | Name of the status                                                                     |
| isEnabled             | Boolean   | Indicates if the status is enabled. By default the isEnabled parameter is set to true. |
| createdBy             | Integer   | Identifier of the user who created the status                                          |
| createdOn             | Long      | Created on date and time of the field in Epoch time format.                            |
| createdOnDateTime     | String    | Creation date and time of the field in ISO 8601 format (YYYY-MM-DDTHH:MM:SSZ)          |
| lastUpdatedOn         | Long      | Last updated on date and time of the field in Epoch time format.                       |
| lastUpdatedOnDateTime | String    | Last updated date and time of the field in ISO 8601 format (YYYY-MM-DDTHH:MM:SSZ)      |

```json
[
    {
        "orgId": 100737,
        "name": "it is here now",
        "isEnabled": true,
        "createdBy": 75155282,
        "createdOn": 1741934782959,
        "createdOnDateTime": "2025-03-14T06:46:22Z",
        "lastUpdatedBy": 75155282,
        "lastUpdatedOn": 1741934782959,
        "lastUpdatedOnDateTime": "2025-03-14T06:46:22Z"
    }
]
```