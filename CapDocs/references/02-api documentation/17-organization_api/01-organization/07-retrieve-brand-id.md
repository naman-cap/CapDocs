---
title: Retrieve Brand ID
excerpt: ''
api:
  file: v1.json
  operationId: retrieve-brand-id
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
This API allows the user to retrieve the Brand ID.

> 👍 Note
> 
> For detailed information about our APIs and for hands-on testing, refer documentation in [API overview](https://docs.capillarytech.com/reference/apioverview) and step-by-step guide on making your first API call in [Make your first API call](https://docs.capillarytech.com/reference/make-your-first-api-call).

# API endpoint example

&lt;https://eu.api.capillarytech.com/api_gateway/rewards/core/v1/brand/getAll&gt;

# Prerequisites

-   Authentication: Basic or OAuth authentication

-   Default Access group

# Resource Information

|                       |                                           |
| :-------------------- | :---------------------------------------- |
| URI                   | /api_gateway/rewards/core/v1/brand/getAll |
| HTTP method           | POST                                      |
| Pagination supported? | NA                                        |
| Rate limit            | NA                                        |
| Batch support         | NA                                        |

# Request Body Parameter

| Parameter Name | Type | Description           |
| -------------- | ---- | --------------------- |
| orgIds\*       | int  | Unique ID of the org. |

```json
{
    "orgIds": [
        100458
    ]
}
```

# Response Body Parameter

| Parameter | Description                                    |
| --------- | ---------------------------------------------- |
| status    | Contains the status of the response            |
| success   | Indicates if the request was successful        |
| code      | Response code indicating the status            |
| message   | Message describing the status                  |
| brandList | List of brands fetched                         |
| id        | Unique brand identifier. Ex: 1                 |
| brand     | Name of the Brand                              |
| enabled   | Indicates if the brand is enabled or not       |
| orgId     | Unique ID of the org associated with the brand |

```json
{
    "status": {
        "success": true,
        "code": 3001,
        "message": "Brand fetched successfully"
    },
    "brandList": [
        {
            "id": 1,
            "brand": "BUKL",
            "enabled": true,
            "orgId": 100458
        }
    ]
}
```