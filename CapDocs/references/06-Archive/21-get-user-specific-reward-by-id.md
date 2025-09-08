---
title: Get purchased reward details by id and user
excerpt: ''
api:
  file: v1.json
  operationId: get-user-specific-reward-by-id
deprecated: true
hidden: true
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
This API is used to get the details for a particular reward for a specific user based on mobile number/email ID/external ID.

> 👍 Note
> 
> For detailed information about our APIs and for hands-on testing, refer documentation in [API overview](https://docs.capillarytech.com/reference/apioverview) and  step-by-step guide on making your first API call in [Make your first API call](https://docs.capillarytech.com/reference/make-your-first-api-call) .

# Prerequisites

-   Authentication: Basic or OAuth authentication
-   Default access group

# Resource information


|                        |                                                                                  |
| :--------------------- | :------------------------------------------------------------------------------- |
| URI                    | /api_gateway/rewards/core/v1/user/reward`{reward Id}`/vouchers/brand`{brand name}` |
| HTTP Method            | GET                                                                              |
| Pagination             | No                                                                               |
| Batch support          | No                                                                               |
| Rate limit information | None                                                                             |

# API endpoint example


`https://eucrm.cc.capillarytech.com/api_gateway/rewards/core/v1/user/reward/112295/vouchers/brand/BUKL?username=swati&mobile=919456430850`

# Request query parameters


| Parameter Name | Data Type | Description                   |
| -------------- | --------- | ----------------------------- |
| Mobile         | String    | Mobile number of the customer |
| Username\*     | String    | Username of the customer      |
| Email          | String    | Email ID of the customer      |
| External ID    | String    | External ID of the customer.  |

# Request path parameters


| Parameter Name | Data Type | Description                                |
| -------------- | --------- | ------------------------------------------ |
| brand name\*   | String    | Name of the brand Ex: BUKL                 |
| rewardId\*     | String    | Unique identifier of the reward Ex: 112295 |

```json
{
    "status": {
        "success": true,
        "code": 200,
        "message": "User Reward fetched successfully"
    },
    "reward": {
        "id": 7712,
        "name": " INTOUCH Enabled",
        "description": "Description",
        "imageId": "EXDR12987U",
        "imageUrl": "https://s3.us-west-2.amazonaws.com/devenv-crm-solutionsvannnld9gg/marvel_automation/EXDR12987U?X-Amz-Security-Token=FwoGZXIvYXdzEC0aDO%2FMVD0f8s%2BGFWG8piLcAZMtzcrHyd0zrbqQvIIcsnx3stHBPvMeSYwlc5U8rAQQ4Q9oowSN1g%2BCNoG4hzc9Kj2bdrHiWOewK6v%2BncAbUrI97wHs%2F4dje9xx6c5IhQSKVTxKVL%2BtPCNFpJeBEV3cxtGGPOaphpfmnhbXPYz8XSBvuqU%2F77V5gfi8mcDlKKdKkQeEY62iCY97V0E8sSi1QzsxJFpx3U1klM5W99hysbNH2GDz1hyZt7riOVptoYKqhsxcfqRJ5vfq3YzwdGvx85V4FCE1lFWhfQEeKzfSX6DoEkaRdnMVqM%2B1aacokOXisAYyLQAQSsyzQdJ5x3EywEtWC1UPwQX6%2BWJdS%2B9uMd1BsG%2BYA%2B%2B8Ej0atey8f304%2Fw%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240412T040329Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3599&X-Amz-Credential=ASIAXCQYYRKNAE5LMHHL%2F20240412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Signature=eee7530eb3e079a1ed498e3cc35f3331db299c958fa7d14f709e3f04d0712576",
        "thumbnailId": "EXDR12987T",
        "thumbnailUrl": "https://s3.us-west-2.amazonaws.com/devenv-crm-solutionsvannnld9gg/marvel_automation/EXDR12987T?X-Amz-Security-Token=FwoGZXIvYXdzEC0aDO%2FMVD0f8s%2BGFWG8piLcAZMtzcrHyd0zrbqQvIIcsnx3stHBPvMeSYwlc5U8rAQQ4Q9oowSN1g%2BCNoG4hzc9Kj2bdrHiWOewK6v%2BncAbUrI97wHs%2F4dje9xx6c5IhQSKVTxKVL%2BtPCNFpJeBEV3cxtGGPOaphpfmnhbXPYz8XSBvuqU%2F77V5gfi8mcDlKKdKkQeEY62iCY97V0E8sSi1QzsxJFpx3U1klM5W99hysbNH2GDz1hyZt7riOVptoYKqhsxcfqRJ5vfq3YzwdGvx85V4FCE1lFWhfQEeKzfSX6DoEkaRdnMVqM%2B1aacokOXisAYyLQAQSsyzQdJ5x3EywEtWC1UPwQX6%2BWJdS%2B9uMd1BsG%2BYA%2B%2B8Ej0atey8f304%2Fw%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240412T040329Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3599&X-Amz-Credential=ASIAXCQYYRKNAE5LMHHL%2F20240412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Signature=e6048c9a185892fc4d1afc2f45c01ff6d7f59bde53ef1d4127f2adef15a74532",
        "termAndConditionsId": "EXDR12987R",
        "termAndConditionsUrl": "https://s3.us-west-2.amazonaws.com/devenv-crm-solutionsvannnld9gg/marvel_automation/EXDR12987R?X-Amz-Security-Token=FwoGZXIvYXdzEC0aDO%2FMVD0f8s%2BGFWG8piLcAZMtzcrHyd0zrbqQvIIcsnx3stHBPvMeSYwlc5U8rAQQ4Q9oowSN1g%2BCNoG4hzc9Kj2bdrHiWOewK6v%2BncAbUrI97wHs%2F4dje9xx6c5IhQSKVTxKVL%2BtPCNFpJeBEV3cxtGGPOaphpfmnhbXPYz8XSBvuqU%2F77V5gfi8mcDlKKdKkQeEY62iCY97V0E8sSi1QzsxJFpx3U1klM5W99hysbNH2GDz1hyZt7riOVptoYKqhsxcfqRJ5vfq3YzwdGvx85V4FCE1lFWhfQEeKzfSX6DoEkaRdnMVqM%2B1aacokOXisAYyLQAQSsyzQdJ5x3EywEtWC1UPwQX6%2BWJdS%2B9uMd1BsG%2BYA%2B%2B8Ej0atey8f304%2Fw%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240412T040329Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIAXCQYYRKNAE5LMHHL%2F20240412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Signature=0df764666eb68a359baee6ffe93863bf083e52fcfc16f67075c8de9f4bae7194",
        "tier": "SILVER",
        "label": null,
        "priority": 1,
        "intouchPoints": 1,
        "group": null,
        "startTime": "2024-10-07 17:04:30",
        "endTime": "2027-10-31 05:39:49",
        "expired": false,
        "started": false,
        "programId": null,
        "categoryList": [
            {
                "id": 5,
                "name": "ecommerce",
                "enabled": true
            }
        ],
        "customFields": {
            "0a17": "defaultValue",
            "a8a6": "defaultValue",
            "2d8a": "defaultValue",
        },
        "loyaltyProgramCriteria": [],
        "rewardRestrictions": {
            "isValid": true
        },
        "appliedPromotions": [],
        "groupName": null,
        "groupRank": null,
        "rewardRank": null,
        "images": [],
        "videos": [],
        "rewardRevenueDetails": {
            "brandCommission": 0,
            "endCustomerCommission": 1.30
        }
    }
}
```

# Response parameters


| Parameter Name         | Data Type | Description                                                            |
| ---------------------- | --------- | ---------------------------------------------------------------------- |
| success                | Boolean   | Indicates if the operation was successful.                             |
| code                   | Integer   | The HTTP status code of the operation.                                 |
| message                | String    | Descriptive message about the operation's outcome.                     |
| id                     | Integer   | Unique identifier of the reward.                                       |
| name                   | String    | Name of the reward.                                                    |
| description            | String    | Description of the reward.                                             |
| imageId                | String    | Unique identifier for the main image of the reward.                    |
| imageUrl               | String    | URL for the main image of the reward.                                  |
| thumbnailId            | String    | Unique identifier for the thumbnail image of the reward.               |
| thumbnailUrl           | String    | URL for the thumbnail image of the reward.                             |
| termAndConditionsId    | String    | Unique identifier for the terms and conditions document of the reward. |
| termAndConditionsUrl   | String    | URL to the terms and conditions document of the reward.                |
| tier                   | String    | Tier level associated with the reward.                                 |
| label                  | String    | Label associated with the reward.                                      |
| priority               | Integer   | Priority level of the reward.                                          |
| intouchPoints          | Integer   | Number of points needed to redeem the reward.                          |
| group                  | String    | Group associated with the reward.                                      |
| startTime              | DateTime  | Start time for the reward's availability.                              |
| endTime                | DateTime  | End time for the reward's availability.                                |
| expired                | Boolean   | Indicates whether the reward is expired.                               |
| started                | Boolean   | Indicates whether the reward has started.                              |
| programId              | Integer   | Identifier for the program associated with the reward.                 |
| categoryList           | Object    | List of categories associated with the reward.                         |
| customFields           | Object    | Key-value pairs for custom fields associated with the reward.          |
| loyaltyProgramCriteria | Array     | Criteria for loyalty programs associated with the reward.              |
| restrictions           | Object    | Restrictions associated with the reward.                               |
| appliedPromotions      | Array     | List of applied promotions associated with the reward.                 |
| groupName              | String    | Name of the group associated with the reward.                          |
| groupRank              | Integer   | Rank of the group associated with the reward.                          |
| rewardRank             | Integer   | Rank of the reward within its category or program.                     |
| images                 | Array     | List of additional images associated with the reward.                  |
| videos                 | Array     | List of videos associated with the reward.                             |
| rewardRevenueDetails   | Object    | The list of brand commission and end customer details.                 |
| brandCommission        | Float     | Commission earned by the brand.                                        |
| endCustomerCommission  | Float     | Commission earned by the end customer after the transaction.           |

```json
{
    "status": {
        "success": true,
        "code": 200,
        "message": "User Reward fetched successfully"
    },
    "reward": {
        "id": 7712,
        "name": " INTOUCH Enabled",
        "description": "Description",
        "imageId": "EXDR12987U",
        "imageUrl": "https://s3.us-west-2.amazonaws.com/devenv-crm-solutionsvannnld9gg/marvel_automation/EXDR12987U?X-Amz-Security-Token=FwoGZXIvYXdzEC0aDO%2FMVD0f8s%2BGFWG8piLcAZMtzcrHyd0zrbqQvIIcsnx3stHBPvMeSYwlc5U8rAQQ4Q9oowSN1g%2BCNoG4hzc9Kj2bdrHiWOewK6v%2BncAbUrI97wHs%2F4dje9xx6c5IhQSKVTxKVL%2BtPCNFpJeBEV3cxtGGPOaphpfmnhbXPYz8XSBvuqU%2F77V5gfi8mcDlKKdKkQeEY62iCY97V0E8sSi1QzsxJFpx3U1klM5W99hysbNH2GDz1hyZt7riOVptoYKqhsxcfqRJ5vfq3YzwdGvx85V4FCE1lFWhfQEeKzfSX6DoEkaRdnMVqM%2B1aacokOXisAYyLQAQSsyzQdJ5x3EywEtWC1UPwQX6%2BWJdS%2B9uMd1BsG%2BYA%2B%2B8Ej0atey8f304%2Fw%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240412T040329Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3599&X-Amz-Credential=ASIAXCQYYRKNAE5LMHHL%2F20240412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Signature=eee7530eb3e079a1ed498e3cc35f3331db299c958fa7d14f709e3f04d0712576",
        "thumbnailId": "EXDR12987T",
        "thumbnailUrl": "https://s3.us-west-2.amazonaws.com/devenv-crm-solutionsvannnld9gg/marvel_automation/EXDR12987T?X-Amz-Security-Token=FwoGZXIvYXdzEC0aDO%2FMVD0f8s%2BGFWG8piLcAZMtzcrHyd0zrbqQvIIcsnx3stHBPvMeSYwlc5U8rAQQ4Q9oowSN1g%2BCNoG4hzc9Kj2bdrHiWOewK6v%2BncAbUrI97wHs%2F4dje9xx6c5IhQSKVTxKVL%2BtPCNFpJeBEV3cxtGGPOaphpfmnhbXPYz8XSBvuqU%2F77V5gfi8mcDlKKdKkQeEY62iCY97V0E8sSi1QzsxJFpx3U1klM5W99hysbNH2GDz1hyZt7riOVptoYKqhsxcfqRJ5vfq3YzwdGvx85V4FCE1lFWhfQEeKzfSX6DoEkaRdnMVqM%2B1aacokOXisAYyLQAQSsyzQdJ5x3EywEtWC1UPwQX6%2BWJdS%2B9uMd1BsG%2BYA%2B%2B8Ej0atey8f304%2Fw%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240412T040329Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3599&X-Amz-Credential=ASIAXCQYYRKNAE5LMHHL%2F20240412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Signature=e6048c9a185892fc4d1afc2f45c01ff6d7f59bde53ef1d4127f2adef15a74532",
        "termAndConditionsId": "EXDR12987R",
        "termAndConditionsUrl": "https://s3.us-west-2.amazonaws.com/devenv-crm-solutionsvannnld9gg/marvel_automation/EXDR12987R?X-Amz-Security-Token=FwoGZXIvYXdzEC0aDO%2FMVD0f8s%2BGFWG8piLcAZMtzcrHyd0zrbqQvIIcsnx3stHBPvMeSYwlc5U8rAQQ4Q9oowSN1g%2BCNoG4hzc9Kj2bdrHiWOewK6v%2BncAbUrI97wHs%2F4dje9xx6c5IhQSKVTxKVL%2BtPCNFpJeBEV3cxtGGPOaphpfmnhbXPYz8XSBvuqU%2F77V5gfi8mcDlKKdKkQeEY62iCY97V0E8sSi1QzsxJFpx3U1klM5W99hysbNH2GDz1hyZt7riOVptoYKqhsxcfqRJ5vfq3YzwdGvx85V4FCE1lFWhfQEeKzfSX6DoEkaRdnMVqM%2B1aacokOXisAYyLQAQSsyzQdJ5x3EywEtWC1UPwQX6%2BWJdS%2B9uMd1BsG%2BYA%2B%2B8Ej0atey8f304%2Fw%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240412T040329Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIAXCQYYRKNAE5LMHHL%2F20240412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Signature=0df764666eb68a359baee6ffe93863bf083e52fcfc16f67075c8de9f4bae7194",
        "tier": "SILVER",
        "label": null,
        "priority": 1,
        "intouchPoints": 1,
        "group": null,
        "startTime": "2024-10-07 17:04:30",
        "endTime": "2027-10-31 05:39:49",
        "expired": false,
        "started": false,
        "programId": null,
        "categoryList": [
            {
                "id": 5,
                "name": "ecommerce",
                "enabled": true
            }
        ],
        "customFields": {
            "0a17": "defaultValue",
            "a8a6": "defaultValue",
            "2d8a": "defaultValue",
        },
        "loyaltyProgramCriteria": [],
        "rewardRestrictions": {
            "isValid": true
        },
        "appliedPromotions": [],
        "groupName": null,
        "groupRank": null,
        "rewardRank": null,
        "images": [],
        "videos": [],
        "rewardRevenueDetails": {
            "brandCommission": 0,
            "endCustomerCommission": 1.30
        }
    }
}
```