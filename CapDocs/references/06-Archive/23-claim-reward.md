---
title: Claim Reward
excerpt: ''
api:
  file: v1.json
  operationId: claim-reward
deprecated: false
hidden: true
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
This API allows the user to claim the reward.

> 👍 Note
> 
> For detailed information about our APIs and for hands-on testing, refer documentation in [API overview](https://docs.capillarytech.com/reference/apioverview) and step-by-step guide on making your first API call in [Make your first API call](https://docs.capillarytech.com/reference/make-your-first-api-call).

# Prerequisites

-   Authentication: Basic or OAuth authentication
-   Default access group

# Resource information

|                        |                                           |
| :--------------------- | :---------------------------------------- |
| URI                    | /api_gateway/rewards/core/v1/reward/claim |
| HTTP Method            | PUT                                       |
| Pagination             | No                                        |
| Batch support          | No                                        |
| Rate limit information | None                                      |

# API endpoint example

`https://eucrm.cc.capillarytech.com/api_gateway/rewards/core/v1/user/reward/claim`

# Request body parameters

| Parameter Name | Data Type | Description                                                                                                            |
| -------------- | --------- | ---------------------------------------------------------------------------------------------------------------------- |
| Brand ID\*     | String    | Unique identifier of the brand. Ex: 29                                                                                 |
| Reward ID\*    | String    | Unique identifier of the reward. Ex: 28359                                                                             |
| OwnerType\*    | Enum      | Module for which the reward was created. Supported values: Loyalty program, Milestones, Campaigns, Journeys, Goodwill. |
| OwnerID\*      | String    | Unique identifier of the owner to claim the reward. Ex:12345678                                                        |

```json
{
    "brandId": 29 ,
    "rewardId":28359,
    "ownerType":"CAMPAIGNS",
    "ownerId":"12345678"
}
```

# Response parameters

| Parameter | Data Type | Description                                  |
| --------- | --------- | -------------------------------------------- |
| success   | Boolean   | Indicates if the reward claim was successful |
| code      | Integer   | Status code associated with the reward claim |
| message   | String    | Description of the error message.            |
| id        | Integer   | Unique identifier of the reward.             |

```json
{
    "status": {
        "success": true,
        "code": 6013,
        "message": "Reward claimed successfully"
    },
    "reward": {
        "id": 28359
    }
}
```