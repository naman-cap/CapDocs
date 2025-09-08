---
title: Disable Catalog promotion
excerpt: ''
api:
  file: v1.json
  operationId: put-disable-catalog-promotion
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
This API is used to disable a catalog promotion for a particular brand.

> 📘 \**Note*
>
> * To disable a promotion, set status=false in the URL.
> * Disabled Promotion cannot be enabled again.

> 👍 Note
>
> For detailed information about our APIs and for hands-on testing, refer documentation in [API overview](https://docs.capillarytech.com/reference/apioverview) and  step-by-step guide on making your first API call in [Make your first API call](https://docs.capillarytech.com/reference/make-your-first-api-call) .

# Prerequisites

*   Authentication: Basic or OAuth authentication
*   Default access group

# Resource information

|                        |                                                                                        |
| :--------------------- | :------------------------------------------------------------------------------------- |
| URI                    | /api\_gateway/rewards/core/v1/promotion`{promotion Id}`/status/false/brand`{brand Id}` |
| HTTP Method            | PUT                                                                                    |
| Pagination             | No                                                                                     |
| Batch support          | No                                                                                     |
| Rate limit information | None                                                                                   |

# API endpoint example

`https://eucrm.cc.capillarytech.com/api_gateway/rewards/core/v1/promotion/2/status/false/brand/1`

# Request path parameters

| Parameters     | Data Type | Description                                |
| :------------- | :-------- | :----------------------------------------- |
| Promotion Id\* | String    | Unique identifier for the promotion. Ex: 2 |
| Brand ID\*     | Integer   | Unique identifier for the brand. Ex: 1     |

<br />

```curl
https://eucrm.cc.capillarytech.com/api_gateway/rewards/core/v1/promotion/2/status/false/brand/1
```

<br />

# Response parameters

| Parameter Name | Data Type | Description                                     |
| -------------- | --------- | ----------------------------------------------- |
| status         | Object    | Contains the status information of the request. |
| success        | Boolean   | Indicates the status of the request.            |
| code           | Integer   | The status code of the response.                |
| message        | String    | The message describing the status.              |

```json 200 OK
{
   "status": {
       "success": true,
       "code": 11011,
       "message": "Catalog promotion status updated successfully."
   }
}
```

# API-specific error code

| Error codes | Description                    |
| :---------- | :----------------------------- |
| 11013       | Catalog promotion is disabled. |