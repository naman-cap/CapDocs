---
title: Get list of Catalog promotions
excerpt: ''
api:
  file: v1.json
  operationId: get-list-of-catalog-promotions
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
This API is used to get the list of catalog promotions for a brand.

> 👍 Note
>
> For detailed information about our APIs and for hands-on testing, refer documentation in [API overview](https://docs.capillarytech.com/reference/apioverview) and  step-by-step guide on making your first API call in [Make your first API call](https://docs.capillarytech.com/reference/make-your-first-api-call) .

# Prerequisites

*   Authentication: Basic or OAuth authentication
*   Default access group

# Resource information

|                        |                                                           |
| :--------------------- | :-------------------------------------------------------- |
| URI                    | /api\_gateway/rewards/core/v1/promotion/brand`{brand Id}` |
| HTTP Method            | GET                                                       |
| Pagination             | No                                                        |
| Batch support          | No                                                        |
| Rate limit information | None                                                      |

# API endpoint example

`https://eucrm.cc.capillarytech.com/api_gateway/rewards/core/v1/promotion/brand/1`

# Request path parameters

| Parameters | Data Type | Description                            |
| :--------- | :-------- | :------------------------------------- |
| Brand ID\* | Integer   | Unique identifier for the brand. Ex: 1 |

<br />

```curl
https://eucrm.cc.capillarytech.com/api_gateway/rewards/core/v1/promotion/brand/1 
```

<br />

# Response parameters

| Parameter Name        | Data Type   | Description                                                                          |
| --------------------- | ----------- | ------------------------------------------------------------------------------------ |
| status                | Object      | Contains the status information of the request.                                      |
| success               | Boolean     | Indicates the success status of the request.                                         |
| code                  | Integer     | The status code of the response.                                                     |
| message               | String      | The message describing the status.                                                   |
| id                    | Integer     | The unique identifier of the catalog promotion.                                      |
| name                  | String      | The name of the catalog promotion.                                                   |
| orgId                 | Integer     | The organization ID associated with the promotion.                                   |
| isEnabled             | Boolean     | Indicates whether the promotion is enabled.                                          |
| startTime             | String      | The start time of the promotion.                                                     |
| startDateTime         | String      | Start date and time of the field in ISO 8601 format (YYYY-MM-DDTHH:MM:SSZ)           |
| endTime               | String      | The end time of the promotion.                                                       |
| endDateTime           | String      | End date and time of the field in ISO 8601 format (YYYY-MM-DDTHH:MM:SSZ)             |
| discountType          | String      | The type of discount applied in the promotion.                                       |
| discountValue         | Number      | The value of the discount.                                                           |
| lastUpdatedOn         | Date        | Last updated on date and time of the field in `YYYY-MM-DDTHH:MM:SS`                  |
| lastUpdatedOnDateTime | String      | Last updated on date and time of the field in ISO 8601 format (YYYY-MM-DDTHH:MM:SSZ) |
| createdOn             | Date        | Created on date and time of the field in `YYYY-MM-DDTHH:MM:SS`                       |
| createdOnDateTime     | String      | Created on date and time of the field in ISO 8601 format (YYYY-MM-DDTHH:MM:SSZ)      |
| lastUpdatedBy         | Integer     | The ID of the user who last updated the promotion.                                   |
| createdBy             | Integer     | The ID of the user who created the promotion.                                        |
| languageSpecificInfo  | Null/Object | Language-specific information, if available.                                         |

```json 200 OK
{
    "status": {
        "success": true,
        "code": 11008,
        "message": "Catalog promotion fetched successfully."
    },
    "catalogPromotions": [
        {
            "id": 1,
            "name": "P1- R-5165 P1- R-5165 upadted 2",
            "orgId": 100458,
            "isEnabled": false,
            "startTime": "2023-04-26 06:58:49",
            "startDateTime": "2023-04-26T06:58:49Z",
            "endTime": "2024-10-25 11:16:00",
            "endDateTime": "2024-10-25T11:16:00Z",
            "discountType": "ABSOLUTE",
            "discountValue": 1.00,
            "lastUpdatedOn": "2023-11-16 10:10:03",
            "lastUpdatedOnDateTime": "2023-11-16T10:10:03Z",
            "createdOn": "2023-04-25 13:59:28",
            "createdOnDateTime": "2023-11-16T10:10:03Z",
            "lastUpdatedBy": 75078478,
            "createdBy": 75078478,
            "languageSpecificInfo": null,
            "customFields": {
                "A": "1",
                "CF1233": "1",
                "EnumCF2": "r1",
                "EnumCF1": "white"
            }
        },
        {
            "id": 8800,
            "name": "test1",
            "orgId": 100458,
            "isEnabled": true,
            "startTime": "2025-03-14 20:58:49",
            "startDateTime": "2025-03-14T20:58:49Z",
            "endTime": "2025-10-25 05:46:00",
            "endDateTime": "2025-10-25T05:46:00Z",
            "discountType": "ABSOLUTE",
            "discountValue": 1.00,
            "lastUpdatedOn": "2025-03-13 09:48:42",
            "lastUpdatedOnDateTime": "2025-03-13T09:48:42Z",
            "createdOn": "2025-03-13 09:48:42",
            "createdOnDateTime": "2025-03-13T09:48:42Z",
            "lastUpdatedBy": 75140757,
            "createdBy": 75140757,
            "languageSpecificInfo": null,
            "customFields": {
                "A": "1",
                "CF1233": "1",
                "EnumCF2": "r1",
                "EnumCF1": "white"
            }
        }
    ]
}
```