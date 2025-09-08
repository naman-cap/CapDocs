---
title: Get brand rewards
excerpt: ''
api:
  file: v1.json
  operationId: get-brands-rewards
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
This API allows you to retrieve rewards of brands that are available for a user to purchase.

> 👍 Note
>
> For detailed information about our APIs and for hands-on testing, refer documentation in [API overview](https://docs.capillarytech.com/reference/apioverview) and  step-by-step guide on making your first API call in [Make your first API call](https://docs.capillarytech.com/reference/make-your-first-api-call) .

# Prerequisites

*   Authentication: Basic or OAuth authentication
*   Default access group

# Resource information

|                        |                                                             |
| :--------------------- | :---------------------------------------------------------- |
| URI                    | api\_gateway/rewards/core/v1/user/reward/brand`\{brandId\}` |
| HTTP Method            | GET                                                         |
| Pagination             | Yes                                                         |
| Batch support          | No                                                          |
| Rate limit information | None                                                        |

# API endpoint example

`https://eucrm.cc.capillarytech.com/api_gateway/rewards/core/v1/reward/brand/1`

# Request query parameters

| Parameter Name | Data Type | Description                                                                                                                                                                              |
| :------------- | :-------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| userId         | String    | Unique identifier of the customer. Ex: 75086856                                                                                                                                          |
| includeExpired | Boolean   | Pass includeExpired as true to retrieve expired reward details.                                                                                                                          |
| page           | Integer   | Page number to retrieve. To view the first page, set the value to 0.                                                                                                                     |
| size           | Integer   | Number of records to display per page. For example, if the total records are 15 and the limit is 5, the first page will display the first 5 records. The maximum supported limit is 100. |
| language       | Enum      | Filters the response based on the reward language. Use this parameter to retrieve rewards in a specific language. For example, to display rewards in English, set the parameter to `en`  |

# Request path parameters

| Parameter Name | Data Type | Description                    |
| -------------- | --------- | ------------------------------ |
| Brandid\*      | Long      | Unique identifier of the brand |

<br />

```curl
https://eucrm.cc.capillarytech.com/api_gateway/rewards/core/v1/user/reward/brand/1
```

<br />

# Response parameters

| Parameter Name         | Data Type | Description                                                                 |
| :--------------------- | :-------- | :-------------------------------------------------------------------------- |
| success                | Boolean   | Indicates the success of the fetch operation.                               |
| code                   | Integer   | HTTP status code indicating the result of the operation.                    |
| message                | String    | Descriptive message about the operation outcome.                            |
| id                     | Integer   | Unique identifier of the reward.                                            |
| name                   | String    | Name of the reward.                                                         |
| description            | String    | Description of the reward.                                                  |
| imageId                | String    | Identifier for the image of the reward.                                     |
| imageUrl               | String    | URL for the image of the reward.                                            |
| thumbnailId            | String    | Identifier for the thumbnail image of the reward.                           |
| thumbnailUrl           | String    | URL for the thumbnail image of the reward.                                  |
| termAndConditionsId    | String    | Identifier for the terms and conditions document of the reward.             |
| termAndConditionsUrl   | String    | URL for the terms and conditions document of the reward.                    |
| tier                   | String    | Tier level associated with the reward.                                      |
| label                  | String    | Label associated with the reward.                                           |
| priority               | Integer   | Priority level of the reward.                                               |
| intouchPoints          | Integer   | Number of points needed to redeem the reward.                               |
| group                  | String    | Group associated with the reward.                                           |
| startTime              | DateTime  | Start time for the reward's availability.                                   |
| endTime                | DateTime  | End time for the reward's availability.                                     |
| expired                | Boolean   | Indicates whether the reward is expired.                                    |
| started                | Boolean   | Indicates whether the reward has started.                                   |
| programId              | Integer   | Identifier for the program associated with the reward, if any.              |
| categoryList           | Object    | List of categories associated with the reward.                              |
| customFields           | Object    | Key-value pairs for custom fields associated with the reward.               |
| loyaltyProgramCriteria | Object    | Criteria for loyalty programs associated with the reward.                   |
| restrictions           | Object    | Restrictions associated with the reward at customer and reward levels.      |
| groupName              | String    | Name of the group associated with the reward.                               |
| groupRank              | Integer   | Rank of the group associated with the reward.                               |
| rewardRank             | Integer   | Rank of the reward within its category or program.                          |
| images                 | Array     | List of additional images associated with the reward.                       |
| videos                 | Array     | List of videos associated with the reward.                                  |
| rewardRevenueDetails   | Object    | The list of brand commission and end customer details.                      |
| brandCommission        | Float     | Commission earned by the brand.                                             |
| endCustomerCommission  | Float     | Commission earned by the end customer after the transaction.                |
| last                   | Boolean   | Indicates if this is the last set of items.                                 |
| totalElements          | Integer   | Total number of items available.                                            |
| totalPages             | Integer   | Total number of pages available.                                            |
| numberOfElements       | Integer   | Number of items in the current set.                                         |
| first                  | Boolean   | Indicates if this is the first set of items.                                |
| size                   | Integer   | Number of items per set.                                                    |
| number                 | Integer   | The current page number.                                                    |
| status                 | String    | Indicates the current state of the reward. Example: LIVE, UPCOMING, ENDED   |
| startDateTime          | String    | Start date and time of the reward in ISO 8601 format (YYYY-MM-DDTHH:MM:SSZ) |
| endDateTime            | String    | End date and time of the reward in ISO 8601 format (YYYY-MM-DDTHH:MM:SSZ)   |

<br />

```json 200 OK
{
    "status": {
        "success": true,
        "code": 6101,
        "message": "Reward details fetched successfully"
    },
    "rewardList": [
        {
            "id": 293459,
            "name": "Reward",
            "status": "ENDED",
            "startTime": "2025-01-14 11:14:43",
            "startDateTime": "2025-01-14T11:14:43Z",
            "endTime": "2025-01-23 11:14:43",
            "endDateTime": "2025-01-23T11:14:43Z",
            "type": "POINTS",
            "priority": 1,
            "enabled": true,
            "intouchPoints": 100,
            "redemptionType": "MILES",
            "groups": null,
            "rewardRank": null,
            "customFields": null,
            "paymentConfigs": null
        },
        {
            "id": 295918,
            "name": "Donate to Charity : Help us brighten a child's day!",
            "status": "LIVE",
            "startTime": "2025-01-07 09:45:00",
            "startDateTime": "2025-01-07T09:45:00Z",
            "endTime": "2030-10-31 11:59:30",
            "endDateTime": "2030-10-31T11:59:30Z",
            "type": "VOUCHER",
            "priority": 1,
            "enabled": true,
            "intouchPoints": 0,
            "redemptionType": "MILES",
            "groups": null,
            "rewardRank": 1,
            "customFields": null,
            "paymentConfigs": [
                {
                    "paymentMode": "CONV_RATIO",
                    "id": 3209,
                    "conversionRatio": 0.33
                }
            ]
        },
        {
            "id": 295919,
            "name": "Donate to Charity : Help us brighten a child's day!",
            "status": "LIVE",
            "startTime": "2025-01-07 09:53:00",
            "startDateTime": "2025-01-07T09:53:00Z",
            "endTime": "2030-10-31 11:59:30",
            "endDateTime": "2030-10-31T11:59:30Z",
            "type": "VOUCHER",
            "priority": 1,
            "enabled": true,
            "intouchPoints": 0,
            "redemptionType": "MILES",
            "groups": null,
            "rewardRank": 1,
            "customFields": null,
            "paymentConfigs": [
                {
                    "paymentMode": "CONV_RATIO",
                    "id": 3210,
                    "conversionRatio": 0.33
                }
            ]
        },
        {
            "id": 295920,
            "name": "Donate to Charity : Help us brighten a child's day!",
            "status": "LIVE",
            "startTime": "2025-01-07 09:57:00",
            "startDateTime": "2025-01-07T09:57:00Z",
            "endTime": "2030-10-31 11:59:30",
            "endDateTime": "2030-10-31T11:59:30Z",
            "type": "VOUCHER",
            "priority": 1,
            "enabled": true,
            "intouchPoints": 0,
            "redemptionType": "MILES",
            "groups": null,
            "rewardRank": 1,
            "customFields": null,
            "paymentConfigs": [
                {
                    "paymentMode": "CONV_RATIO",
                    "id": 3211,
                    "conversionRatio": 0.33
                }
            ]
        },
        {
            "id": 295921,
            "name": " INTOUCH Enabled",
            "status": "LIVE",
            "startTime": "2025-01-07 10:03:00",
            "startDateTime": "2025-01-07T10:03:00Z",
            "endTime": "2026-11-28 14:10:00",
            "endDateTime": "2026-11-28T14:10:00Z",
            "type": "FREE_VOUCHER",
            "priority": 1,
            "enabled": true,
            "intouchPoints": 0,
            "redemptionType": "PHYSICAL_REWARD",
            "groups": null,
            "rewardRank": null,
            "customFields": null,
            "paymentConfigs": null
        },
        {
            "id": 295922,
            "name": "Donate to Charity : Help us brighten a child's day!",
            "status": "LIVE",
            "startTime": "2025-01-07 10:07:00",
            "startDateTime": "2025-01-07T10:07:00Z",
            "endTime": "2030-10-31 11:59:30",
            "endDateTime": "2030-10-31T11:59:30Z",
            "type": "VOUCHER",
            "priority": 1,
            "enabled": true,
            "intouchPoints": 0,
            "redemptionType": "MILES",
            "groups": null,
            "rewardRank": 1,
            "customFields": null,
            "paymentConfigs": [
                {
                    "paymentMode": "CONV_RATIO",
                    "id": 3212,
                    "conversionRatio": 0.33
                }
            ]
        },
        {
            "id": 295923,
            "name": " INTOUCH Enabled",
            "status": "LIVE",
            "startTime": "2025-01-07 10:10:00",
            "startDateTime": "2025-01-07T10:10:00Z",
            "endTime": "2026-11-28 14:10:00",
            "endDateTime": "2026-11-28T14:10:00Z",
            "type": "FREE_VOUCHER",
            "priority": 1,
            "enabled": true,
            "intouchPoints": 0,
            "redemptionType": "PHYSICAL_REWARD",
            "groups": null,
            "rewardRank": null,
            "customFields": null,
            "paymentConfigs": null
        },
        {
            "id": 295948,
            "name": " INTOUCH Enabled",
            "status": "LIVE",
            "startTime": "2025-01-08 10:10:00",
            "startDateTime": "2025-01-08T10:10:00Z",
            "endTime": "2026-11-28 14:10:00",
            "endDateTime": "2026-11-28T14:10:00Z",
            "type": "POINTS",
            "priority": 1,
            "enabled": true,
            "intouchPoints": 0,
            "redemptionType": "PHYSICAL_REWARD",
            "groups": null,
            "rewardRank": null,
            "customFields": null,
            "paymentConfigs": [
                {
                    "paymentMode": "CASH",
                    "id": 3214,
                    "cash": 100
                }
            ]
        },
        {
            "id": 295949,
            "name": " INTOUCH Enabled",
            "status": "LIVE",
            "startTime": "2025-01-08 10:10:00",
            "startDateTime": "2025-01-08T10:10:00Z",
            "endTime": "2026-11-28 14:10:00",
            "endDateTime": "2026-11-28T14:10:00Z",
            "type": "POINTS",
            "priority": 1,
            "enabled": true,
            "intouchPoints": 0,
            "redemptionType": "PHYSICAL_REWARD",
            "groups": null,
            "rewardRank": null,
            "customFields": null,
            "paymentConfigs": [
                {
                    "paymentMode": "CASH",
                    "id": 3215,
                    "cash": 500
                }
            ]
        },
        {
            "id": 295950,
            "name": " INTOUCH Enabled",
            "status": "LIVE",
            "startTime": "2025-01-08 10:10:00",
            "startDateTime": "2025-01-08T10:10:00Z",
            "endTime": "2026-11-28 14:10:00",
            "endDateTime": "2026-11-28T14:10:00Z",
            "type": "POINTS",
            "priority": 1,
            "enabled": true,
            "intouchPoints": 0,
            "redemptionType": "PHYSICAL_REWARD",
            "groups": null,
            "rewardRank": null,
            "customFields": null,
            "paymentConfigs": [
                {
                    "paymentMode": "CASH",
                    "id": 3216,
                    "cash": 1000
                }
            ]
        },
        {
            "id": 295951,
            "name": " INTOUCH Enabled",
            "status": "LIVE",
            "startTime": "2025-01-08 10:10:00",
            "startDateTime": "2025-01-08T10:10:00Z",
            "endTime": "2026-11-28 14:10:00",
            "endDateTime": "2026-11-28T14:10:00Z",
            "type": "POINTS",
            "priority": 1,
            "enabled": true,
            "intouchPoints": 0,
            "redemptionType": "PHYSICAL_REWARD",
            "groups": null,
            "rewardRank": null,
            "customFields": null,
            "paymentConfigs": [
                {
                    "paymentMode": "CASH",
                    "id": 3217,
                    "cash": 700
                }
            ]
        },
        {
            "id": 295952,
            "name": " INTOUCH Enabled",
            "status": "LIVE",
            "startTime": "2025-01-08 10:10:00",
            "startDateTime": "2025-01-08T10:10:00Z",
            "endTime": "2026-11-28 14:10:00",
            "endDateTime": "2026-11-28T14:10:00Z",
            "type": "POINTS",
            "priority": 1,
            "enabled": true,
            "intouchPoints": 0,
            "redemptionType": "PHYSICAL_REWARD",
            "groups": null,
            "rewardRank": null,
            "customFields": null,
            "paymentConfigs": [
                {
                    "paymentMode": "CASH",
                    "id": 3218,
                    "cash": 400
                }
            ]
        },
        {
            "id": 295953,
            "name": " INTOUCH Enabled",
            "status": "LIVE",
            "startTime": "2025-01-08 10:10:00",
            "startDateTime": "2025-01-08T10:10:00Z",
            "endTime": "2026-11-28 14:10:00",
            "endDateTime": "2026-11-28T14:10:00Z",
            "type": "POINTS",
            "priority": 1,
            "enabled": true,
            "intouchPoints": 0,
            "redemptionType": "PHYSICAL_REWARD",
            "groups": null,
            "rewardRank": null,
            "customFields": null,
            "paymentConfigs": [
                {
                    "paymentMode": "POINTS",
                    "id": 3219,
                    "points": 100
                }
            ]
        },
        {
            "id": 295954,
            "name": " INTOUCH Enabled",
            "status": "LIVE",
            "startTime": "2025-01-08 10:10:00",
            "startDateTime": "2025-01-08T10:10:00Z",
            "endTime": "2026-11-28 14:10:00",
            "endDateTime": "2026-11-28T14:10:00Z",
            "type": "POINTS",
            "priority": 1,
            "enabled": true,
            "intouchPoints": 0,
            "redemptionType": "PHYSICAL_REWARD",
            "groups": null,
            "rewardRank": null,
            "customFields": null,
            "paymentConfigs": [
                {
                    "paymentMode": "POINTS",
                    "id": 3220,
                    "points": 300
                }
            ]
        },
        {
            "id": 295955,
            "name": " INTOUCH Enabled",
            "status": "LIVE",
            "startTime": "2025-01-08 10:10:00",
            "startDateTime": "2025-01-08T10:10:00Z",
            "endTime": "2026-11-28 14:10:00",
            "endDateTime": "2026-11-28T14:10:00Z",
            "type": "POINTS",
            "priority": 1,
            "enabled": true,
            "intouchPoints": 0,
            "redemptionType": "PHYSICAL_REWARD",
            "groups": null,
            "rewardRank": null,
            "customFields": null,
            "paymentConfigs": [
                {
                    "paymentMode": "POINTS",
                    "id": 3221,
                    "points": 500
                }
            ]
        },
        {
            "id": 295956,
            "name": " INTOUCH Enabled",
            "status": "LIVE",
            "startTime": "2025-01-08 10:10:00",
            "startDateTime": "2025-01-08T10:10:00Z",
            "endTime": "2026-11-28 14:10:00",
            "endDateTime": "2026-11-28T14:10:00Z",
            "type": "POINTS",
            "priority": 1,
            "enabled": true,
            "intouchPoints": 0,
            "redemptionType": "PHYSICAL_REWARD",
            "groups": null,
            "rewardRank": null,
            "customFields": null,
            "paymentConfigs": [
                {
                    "paymentMode": "POINTS",
                    "id": 3222,
                    "points": 700
                }
            ]
        },
        {
            "id": 295957,
            "name": " INTOUCH Enabled",
            "status": "LIVE",
            "startTime": "2025-01-08 10:10:00",
            "startDateTime": "2025-01-08T10:10:00Z",
            "endTime": "2026-11-28 14:10:00",
            "endDateTime": "2026-11-28T14:10:00Z",
            "type": "POINTS",
            "priority": 1,
            "enabled": true,
            "intouchPoints": 0,
            "redemptionType": "PHYSICAL_REWARD",
            "groups": null,
            "rewardRank": null,
            "customFields": null,
            "paymentConfigs": [
                {
                    "paymentMode": "POINTS",
                    "id": 3223,
                    "points": 1000
                }
            ]
        },
        {
            "id": 296012,
            "name": " INTOUCH Enabled",
            "status": "LIVE",
            "startTime": "2025-01-08 10:10:00",
            "startDateTime": "2025-01-08T10:10:00Z",
            "endTime": "2025-11-28 14:10:00",
            "endDateTime": "2025-11-28T14:10:00Z",
            "type": "POINTS",
            "priority": 1,
            "enabled": true,
            "intouchPoints": 0,
            "redemptionType": "PHYSICAL_REWARD",
            "groups": null,
            "rewardRank": null,
            "customFields": null,
            "paymentConfigs": [
                {
                    "paymentMode": "POINTS",
                    "id": 3226,
                    "points": 1000
                }
            ]
        },
        {
            "id": 296013,
            "name": " INTOUCH Enabled",
            "status": "LIVE",
            "startTime": "2025-01-08 10:10:00",
            "startDateTime": "2025-01-08T10:10:00Z",
            "endTime": "2027-11-28 14:10:00",
            "endDateTime": "2027-11-28T14:10:00Z",
            "type": "POINTS",
            "priority": 1,
            "enabled": true,
            "intouchPoints": 0,
            "redemptionType": "PHYSICAL_REWARD",
            "groups": null,
            "rewardRank": null,
            "customFields": null,
            "paymentConfigs": [
                {
                    "paymentMode": "POINTS",
                    "id": 3227,
                    "points": 1000
                }
            ]
        },
        {
            "id": 296014,
            "name": " INTOUCH Enabled",
            "status": "LIVE",
            "startTime": "2025-01-08 10:10:00",
            "startDateTime": "2025-01-08T10:10:00Z",
            "endTime": "2025-11-28 14:10:00",
            "endDateTime": "2025-11-28T14:10:00Z",
            "type": "POINTS",
            "priority": 1,
            "enabled": true,
            "intouchPoints": 0,
            "redemptionType": "PHYSICAL_REWARD",
            "groups": null,
            "rewardRank": null,
            "customFields": null,
            "paymentConfigs": [
                {
                    "paymentMode": "POINTS",
                    "id": 3228,
                    "points": 1000
                }
            ]
        },
        {
            "id": 297001,
            "name": " INTOUCH Enabled",
            "status": "LIVE",
            "startTime": "2025-01-09 06:36:00",
            "startDateTime": "2025-01-09T06:36:00Z",
            "endTime": "2026-11-28 14:10:00",
            "endDateTime": "2026-11-28T14:10:00Z",
            "type": "FREE_VOUCHER",
            "priority": 1,
            "enabled": true,
            "intouchPoints": 0,
            "redemptionType": "PHYSICAL_REWARD",
            "groups": null,
            "rewardRank": null,
            "customFields": null,
            "paymentConfigs": null
        },
        {
            "id": 299115,
            "name": "Reward1",
            "status": "ENDED",
            "startTime": "2025-01-14 05:47:16",
            "startDateTime": "2025-01-14T05:47:16Z",
            "endTime": "2025-01-31 00:17:16",
            "endDateTime": "2025-01-31T00:17:16Z",
            "type": "POINTS",
            "priority": 1,
            "enabled": true,
            "intouchPoints": 1000,
            "redemptionType": "INTOUCH_REWARD",
            "groups": null,
            "rewardRank": null,
            "customFields": null,
            "paymentConfigs": null
        },
        {
            "id": 299116,
            "name": "Testreward1",
            "status": "ENDED",
            "startTime": "2025-01-14 05:53:45",
            "startDateTime": "2025-01-14T05:53:45Z",
            "endTime": "2025-01-31 05:53:45",
            "endDateTime": "2025-01-31T05:53:45Z",
            "type": "POINTS",
            "priority": 1,
            "enabled": true,
            "intouchPoints": 1000,
            "redemptionType": "INTOUCH_REWARD",
            "groups": null,
            "rewardRank": null,
            "customFields": null,
            "paymentConfigs": null
        },
        {
            "id": 299141,
            "name": "Testreward2",
            "status": "ENDED",
            "startTime": "2025-01-13 06:15:03",
            "startDateTime": "2025-01-13T06:15:03Z",
            "endTime": "2025-01-31 00:45:03",
            "endDateTime": "2025-01-31T00:45:03Z",
            "type": "FREE_VOUCHER",
            "priority": 1,
            "enabled": true,
            "intouchPoints": 0,
            "redemptionType": "INTOUCH_REWARD",
            "groups": null,
            "rewardRank": null,
            "customFields": null,
            "paymentConfigs": null
        },
        {
            "id": 299166,
            "name": "PointsRewardTest",
            "status": "ENDED",
            "startTime": "2025-01-13 07:36:50",
            "startDateTime": "2025-01-13T07:36:50Z",
            "endTime": "2025-01-31 07:36:50",
            "endDateTime": "2025-01-31T07:36:50Z",
            "type": "POINTS",
            "priority": 1,
            "enabled": true,
            "intouchPoints": 50,
            "redemptionType": "INTOUCH_REWARD",
            "groups": null,
            "rewardRank": null,
            "customFields": null,
            "paymentConfigs": null
        },
        {
            "id": 299215,
            "name": "testreward1",
            "status": "LIVE",
            "startTime": "2025-01-13 09:45:30",
            "startDateTime": "2025-01-13T09:45:30Z",
            "endTime": "2026-10-31 06:29:30",
            "endDateTime": "2026-10-31T06:29:30Z",
            "type": "VOUCHER",
            "priority": 1,
            "enabled": true,
            "intouchPoints": 500,
            "redemptionType": "INTOUCH_REWARD",
            "groups": null,
            "rewardRank": null,
            "customFields": null,
            "paymentConfigs": [
                {
                    "paymentMode": "POINTS",
                    "id": 3369,
                    "points": 150
                }
            ]
        },
        {
            "id": 299216,
            "name": "testreward1",
            "status": "LIVE",
            "startTime": "2025-01-13 15:22:00",
            "startDateTime": "2025-01-13T15:22:00Z",
            "endTime": "2030-10-31 06:29:30",
            "endDateTime": "2030-10-31T06:29:30Z",
            "type": "VOUCHER",
            "priority": 1,
            "enabled": true,
            "intouchPoints": 500,
            "redemptionType": "INTOUCH_REWARD",
            "groups": null,
            "rewardRank": null,
            "customFields": null,
            "paymentConfigs": [
                {
                    "paymentMode": "POINTS",
                    "id": 3370,
                    "points": 150
                }
            ]
        },
        {
            "id": 300311,
            "name": " INTOUCH Enabled",
            "status": "LIVE",
            "startTime": "2025-01-16 10:10:00",
            "startDateTime": "2025-01-16T10:10:00Z",
            "endTime": "2026-11-28 14:10:00",
            "endDateTime": "2026-11-28T14:10:00Z",
            "type": "FREE_VOUCHER",
            "priority": 1,
            "enabled": true,
            "intouchPoints": 0,
            "redemptionType": "PHYSICAL_REWARD",
            "groups": null,
            "rewardRank": null,
            "customFields": null,
            "paymentConfigs": null
        },
        {
            "id": 301411,
            "name": "Offer on  Air Jordan1 ",
            "status": "UPCOMING",
            "startTime": "2025-07-05 09:45:00",
            "startDateTime": "2025-07-05T09:45:00Z",
            "endTime": "2026-12-07 06:42:29",
            "endDateTime": "2026-12-07T06:42:29Z",
            "type": "VOUCHER",
            "priority": 1,
            "enabled": true,
            "intouchPoints": 500,
            "redemptionType": "INTOUCH_REWARD",
            "groups": null,
            "rewardRank": null,
            "customFields": null,
            "paymentConfigs": null
        },
        {
            "id": 301412,
            "name": "Offer on  Air Jordan1 ",
            "status": "UPCOMING",
            "startTime": "2025-07-05 09:45:00",
            "startDateTime": "2025-07-05T09:45:00Z",
            "endTime": "2026-12-07 06:42:29",
            "endDateTime": "2026-12-07T06:42:29Z",
            "type": "VOUCHER",
            "priority": 1,
            "enabled": true,
            "intouchPoints": 500,
            "redemptionType": "INTOUCH_REWARD",
            "groups": null,
            "rewardRank": null,
            "customFields": null,
            "paymentConfigs": null
        },
        {
            "id": 301413,
            "name": "Offer on  Air Jordan1 ",
            "status": "UPCOMING",
            "startTime": "2025-07-05 09:45:00",
            "startDateTime": "2025-07-05T09:45:00Z",
            "endTime": "2026-12-07 06:42:29",
            "endDateTime": "2026-12-07T06:42:29Z",
            "type": "VOUCHER",
            "priority": 1,
            "enabled": true,
            "intouchPoints": 500,
            "redemptionType": "INTOUCH_REWARD",
            "groups": null,
            "rewardRank": null,
            "customFields": null,
            "paymentConfigs": [
                {
                    "paymentMode": "POINTS_CASH",
                    "id": 3469,
                    "cash": 500,
                    "points": 150
                }
            ]
        },
        {
            "id": 301414,
            "name": "Offer on  Air Jordan1 ",
            "status": "LIVE",
            "startTime": "2025-01-17 06:37:00",
            "startDateTime": "2025-01-17T06:37:00Z",
            "endTime": "2026-12-07 06:42:29",
            "endDateTime": "2026-12-07T06:42:29Z",
            "type": "VOUCHER",
            "priority": 1,
            "enabled": true,
            "intouchPoints": 500,
            "redemptionType": "INTOUCH_REWARD",
            "groups": null,
            "rewardRank": null,
            "customFields": null,
            "paymentConfigs": [
                {
                    "paymentMode": "POINTS_CASH",
                    "id": 3470,
                    "cash": 500,
                    "points": 150
                }
            ]
        },
        {
            "id": 301415,
            "name": "Offer on  Air Jordan1 ",
            "status": "LIVE",
            "startTime": "2025-01-17 06:44:00",
            "startDateTime": "2025-01-17T06:44:00Z",
            "endTime": "2026-12-07 06:42:29",
            "endDateTime": "2026-12-07T06:42:29Z",
            "type": "VOUCHER",
            "priority": 1,
            "enabled": true,
            "intouchPoints": 500,
            "redemptionType": "INTOUCH_REWARD",
            "groups": null,
            "rewardRank": null,
            "customFields": null,
            "paymentConfigs": [
                {
                    "paymentMode": "POINTS_CASH",
                    "id": 3471,
                    "cash": 500,
                    "points": 150
                }
            ]
        },
        {
            "id": 301416,
            "name": "Offer on  Air Jordan1 ",
            "status": "LIVE",
            "startTime": "2025-01-17 06:50:20",
            "startDateTime": "2025-01-17T06:50:20Z",
            "endTime": "2026-12-07 06:42:29",
            "endDateTime": "2026-12-07T06:42:29Z",
            "type": "VOUCHER",
            "priority": 1,
            "enabled": true,
            "intouchPoints": 500,
            "redemptionType": "INTOUCH_REWARD",
            "groups": null,
            "rewardRank": null,
            "customFields": null,
            "paymentConfigs": null
        },
        {
            "id": 301417,
            "name": "Offer on  Air Jordan1 ",
            "status": "LIVE",
            "startTime": "2025-01-17 06:50:00",
            "startDateTime": "2025-01-17T06:50:00Z",
            "endTime": "2026-12-07 06:42:29",
            "endDateTime": "2026-12-07T06:42:29Z",
            "type": "VOUCHER",
            "priority": 1,
            "enabled": true,
            "intouchPoints": 500,
            "redemptionType": "INTOUCH_REWARD",
            "groups": null,
            "rewardRank": null,
            "customFields": null,
            "paymentConfigs": null
        },
        {
            "id": 301418,
            "name": "Offer on  Air Jordan1 ",
            "status": "LIVE",
            "startTime": "2025-01-17 06:52:10",
            "startDateTime": "2025-01-17T06:52:10Z",
            "endTime": "2026-12-07 06:42:29",
            "endDateTime": "2026-12-07T06:42:29Z",
            "type": "POINTS",
            "priority": 1,
            "enabled": true,
            "intouchPoints": 500,
            "redemptionType": "INTOUCH_REWARD",
            "groups": null,
            "rewardRank": null,
            "customFields": null,
            "paymentConfigs": null
        },
        {
            "id": 301419,
            "name": "Offer on  Air Jordan1 ",
            "status": "LIVE",
            "startTime": "2025-01-17 06:51:30",
            "startDateTime": "2025-01-17T06:51:30Z",
            "endTime": "2026-12-07 06:42:29",
            "endDateTime": "2026-12-07T06:42:29Z",
            "type": "POINTS",
            "priority": 1,
            "enabled": true,
            "intouchPoints": 500,
            "redemptionType": "INTOUCH_REWARD",
            "groups": null,
            "rewardRank": null,
            "customFields": null,
            "paymentConfigs": null
        },
        {
            "id": 301420,
            "name": "Offer on  Air Jordan1 ",
            "status": "LIVE",
            "startTime": "2025-01-17 06:52:20",
            "startDateTime": "2025-01-17T06:52:20Z",
            "endTime": "2026-12-07 06:42:29",
            "endDateTime": "2026-12-07T06:42:29Z",
            "type": "POINTS",
            "priority": 1,
            "enabled": true,
            "intouchPoints": 500,
            "redemptionType": "INTOUCH_REWARD",
            "groups": null,
            "rewardRank": null,
            "customFields": null,
            "paymentConfigs": null
        },
        {
            "id": 304103,
            "name": "Offer on  Air Jordan1 ",
            "status": "UPCOMING",
            "startTime": "2025-07-05 09:45:00",
            "startDateTime": "2025-07-05T09:45:00Z",
            "endTime": "2026-12-07 06:42:29",
            "endDateTime": "2026-12-07T06:42:29Z",
            "type": "VOUCHER",
            "priority": 1,
            "enabled": true,
            "intouchPoints": 500,
            "redemptionType": "INTOUCH_REWARD",
            "groups": null,
            "rewardRank": null,
            "customFields": null,
            "paymentConfigs": null
        },
        {
            "id": 304112,
            "name": "Offer on  Air Jordan1 ",
            "status": "UPCOMING",
            "startTime": "2025-07-05 09:45:00",
            "startDateTime": "2025-07-05T09:45:00Z",
            "endTime": "2026-12-07 06:42:29",
            "endDateTime": "2026-12-07T06:42:29Z",
            "type": "VOUCHER",
            "priority": 1,
            "enabled": true,
            "intouchPoints": 500,
            "redemptionType": "INTOUCH_REWARD",
            "groups": null,
            "rewardRank": null,
            "customFields": null,
            "paymentConfigs": null
        },
        {
            "id": 304237,
            "name": "Offer on  Air Jordan1 ",
            "status": "UPCOMING",
            "startTime": "2025-07-05 09:45:00",
            "startDateTime": "2025-07-05T09:45:00Z",
            "endTime": "2026-12-07 06:42:29",
            "endDateTime": "2026-12-07T06:42:29Z",
            "type": "VOUCHER",
            "priority": 1,
            "enabled": true,
            "intouchPoints": 500,
            "redemptionType": "INTOUCH_REWARD",
            "groups": null,
            "rewardRank": null,
            "customFields": null,
            "paymentConfigs": null
        },
        {
            "id": 304238,
            "name": "Offer on  Air Jordan1 ",
            "status": "UPCOMING",
            "startTime": "2025-07-05 09:45:00",
            "startDateTime": "2025-07-05T09:45:00Z",
            "endTime": "2026-12-07 06:42:29",
            "endDateTime": "2026-12-07T06:42:29Z",
            "type": "VOUCHER",
            "priority": 1,
            "enabled": true,
            "intouchPoints": 500,
            "redemptionType": "INTOUCH_REWARD",
            "groups": null,
            "rewardRank": null,
            "customFields": null,
            "paymentConfigs": null
        },
        {
            "id": 304239,
            "name": "Offer on  Air Jordan1 ",
            "status": "UPCOMING",
            "startTime": "2025-07-05 09:45:00",
            "startDateTime": "2025-07-05T09:45:00Z",
            "endTime": "2026-12-07 06:42:29",
            "endDateTime": "2026-12-07T06:42:29Z",
            "type": "VOUCHER",
            "priority": 1,
            "enabled": true,
            "intouchPoints": 500,
            "redemptionType": "INTOUCH_REWARD",
            "groups": null,
            "rewardRank": null,
            "customFields": null,
            "paymentConfigs": null
        },
        {
            "id": 304774,
            "name": "Donate to Charity : Help us brighten a child's day!",
            "status": "LIVE",
            "startTime": "2025-01-23 06:50:00",
            "startDateTime": "2025-01-23T06:50:00Z",
            "endTime": "2030-10-31 11:59:30",
            "endDateTime": "2030-10-31T11:59:30Z",
            "type": "VOUCHER",
            "priority": 1,
            "enabled": true,
            "intouchPoints": 0,
            "redemptionType": "MILES",
            "groups": null,
            "rewardRank": 1,
            "customFields": null,
            "paymentConfigs": [
                {
                    "paymentMode": "CONV_RATIO",
                    "id": 3624,
                    "conversionRatio": 0.33
                }
            ]
        },
        {
            "id": 304847,
            "name": " INTOUCH Enabled",
            "status": "LIVE",
            "startTime": "2025-01-23 09:49:00",
            "startDateTime": "2025-01-23T09:49:00Z",
            "endTime": "2026-11-29 05:39:49",
            "endDateTime": "2026-11-29T05:39:49Z",
            "type": "VOUCHER",
            "priority": 1,
            "enabled": true,
            "intouchPoints": 0,
            "redemptionType": "MILES",
            "groups": null,
            "rewardRank": null,
            "customFields": null,
            "paymentConfigs": [
                {
                    "paymentMode": "CONV_RATIO",
                    "id": 3628,
                    "conversionRatio": 0.33
                }
            ]
        },
        {
            "id": 304848,
            "name": " INTOUCH Enabled",
            "status": "LIVE",
            "startTime": "2025-01-23 09:51:00",
            "startDateTime": "2025-01-23T09:51:00Z",
            "endTime": "2026-11-29 05:39:49",
            "endDateTime": "2026-11-29T05:39:49Z",
            "type": "VOUCHER",
            "priority": 1,
            "enabled": true,
            "intouchPoints": 0,
            "redemptionType": "MILES",
            "groups": null,
            "rewardRank": null,
            "customFields": null,
            "paymentConfigs": [
                {
                    "paymentMode": "CONV_RATIO",
                    "id": 3629,
                    "conversionRatio": 0.33
                }
            ]
        },
        {
            "id": 304849,
            "name": " INTOUCH Enabled",
            "status": "LIVE",
            "startTime": "2025-01-23 09:55:00",
            "startDateTime": "2025-01-23T09:55:00Z",
            "endTime": "2026-11-29 05:39:49",
            "endDateTime": "2026-11-29T05:39:49Z",
            "type": "VOUCHER",
            "priority": 1,
            "enabled": true,
            "intouchPoints": 0,
            "redemptionType": "MILES",
            "groups": null,
            "rewardRank": null,
            "customFields": null,
            "paymentConfigs": [
                {
                    "paymentMode": "CONV_RATIO",
                    "id": 3630,
                    "conversionRatio": 0.33
                }
            ]
        },
        {
            "id": 304874,
            "name": " INTOUCH Enabled",
            "status": "LIVE",
            "startTime": "2025-01-23 10:23:00",
            "startDateTime": "2025-01-23T10:23:00Z",
            "endTime": "2026-11-29 05:39:49",
            "endDateTime": "2026-11-29T05:39:49Z",
            "type": "VOUCHER",
            "priority": 1,
            "enabled": true,
            "intouchPoints": 0,
            "redemptionType": "MILES",
            "groups": null,
            "rewardRank": null,
            "customFields": null,
            "paymentConfigs": [
                {
                    "paymentMode": "CONV_RATIO",
                    "id": 3632,
                    "conversionRatio": 0.33
                }
            ]
        },
        {
            "id": 304875,
            "name": " INTOUCH Enabled",
            "status": "LIVE",
            "startTime": "2025-01-23 10:49:20",
            "startDateTime": "2025-01-23T10:49:20Z",
            "endTime": "2026-11-29 05:39:49",
            "endDateTime": "2026-11-29T05:39:49Z",
            "type": "VOUCHER",
            "priority": 1,
            "enabled": true,
            "intouchPoints": 0,
            "redemptionType": "MILES",
            "groups": null,
            "rewardRank": null,
            "customFields": null,
            "paymentConfigs": [
                {
                    "paymentMode": "CONV_RATIO",
                    "id": 3633,
                    "conversionRatio": 0.33
                }
            ]
        },
        {
            "id": 304900,
            "name": " INTOUCH Enabled",
            "status": "LIVE",
            "startTime": "2025-01-23 11:14:50",
            "startDateTime": "2025-01-23T11:14:50Z",
            "endTime": "2026-11-29 05:39:49",
            "endDateTime": "2026-11-29T05:39:49Z",
            "type": "VOUCHER",
            "priority": 1,
            "enabled": true,
            "intouchPoints": 0,
            "redemptionType": "MILES",
            "groups": null,
            "rewardRank": null,
            "customFields": null,
            "paymentConfigs": [
                {
                    "paymentMode": "CONV_RATIO",
                    "id": 3635,
                    "conversionRatio": 0.33
                }
            ]
        },
        {
            "id": 305268,
            "name": "Donate to Charity : Help us brighten a child's day!",
            "status": "LIVE",
            "startTime": "2025-01-24 04:48:00",
            "startDateTime": "2025-01-24T04:48:00Z",
            "endTime": "2030-10-31 11:59:30",
            "endDateTime": "2030-10-31T11:59:30Z",
            "type": "VOUCHER",
            "priority": 1,
            "enabled": true,
            "intouchPoints": 0,
            "redemptionType": "MILES",
            "groups": null,
            "rewardRank": 1,
            "customFields": null,
            "paymentConfigs": [
                {
                    "paymentMode": "CONV_RATIO",
                    "id": 3652,
                    "conversionRatio": 0.3
                }
            ]
        },
        {
            "id": 305269,
            "name": " INTOUCH Enabled",
            "status": "LIVE",
            "startTime": "2025-01-24 04:54:17",
            "startDateTime": "2025-01-24T04:54:17Z",
            "endTime": "2026-11-29 05:39:49",
            "endDateTime": "2026-11-29T05:39:49Z",
            "type": "VOUCHER",
            "priority": 1,
            "enabled": true,
            "intouchPoints": 0,
            "redemptionType": "MILES",
            "groups": null,
            "rewardRank": null,
            "customFields": null,
            "paymentConfigs": [
                {
                    "paymentMode": "CONV_RATIO",
                    "id": 3653,
                    "conversionRatio": 0.33
                }
            ]
        },
        {
            "id": 305270,
            "name": " INTOUCH Enabled",
            "status": "LIVE",
            "startTime": "2025-01-24 04:57:00",
            "startDateTime": "2025-01-24T04:57:00Z",
            "endTime": "2026-11-29 05:39:49",
            "endDateTime": "2026-11-29T05:39:49Z",
            "type": "VOUCHER",
            "priority": 1,
            "enabled": true,
            "intouchPoints": 10,
            "redemptionType": "MILES",
            "groups": null,
            "rewardRank": null,
            "customFields": null,
            "paymentConfigs": [
                {
                    "paymentMode": "POINTS",
                    "id": 3654,
                    "points": 10
                }
            ]
        },
        {
            "id": 305319,
            "name": " INTOUCH Enabled",
            "status": "LIVE",
            "startTime": "2025-01-24 06:28:15",
            "startDateTime": "2025-01-24T06:28:15Z",
            "endTime": "2026-11-29 05:39:49",
            "endDateTime": "2026-11-29T05:39:49Z",
            "type": "VOUCHER",
            "priority": 1,
            "enabled": true,
            "intouchPoints": 0,
            "redemptionType": "MILES",
            "groups": null,
            "rewardRank": null,
            "customFields": null,
            "paymentConfigs": [
                {
                    "paymentMode": "CONV_RATIO",
                    "id": 3657,
                    "conversionRatio": 0.33
                }
            ]
        },
        {
            "id": 305320,
            "name": " INTOUCH Enabled",
            "status": "LIVE",
            "startTime": "2025-01-24 06:36:30",
            "startDateTime": "2025-01-24T06:36:30Z",
            "endTime": "2026-11-29 05:39:49",
            "endDateTime": "2026-11-29T05:39:49Z",
            "type": "VOUCHER",
            "priority": 1,
            "enabled": true,
            "intouchPoints": 0,
            "redemptionType": "MILES",
            "groups": null,
            "rewardRank": null,
            "customFields": null,
            "paymentConfigs": [
                {
                    "paymentMode": "CONV_RATIO",
                    "id": 3658,
                    "conversionRatio": 0.33
                }
            ]
        },
        {
            "id": 305321,
            "name": " INTOUCH Enabled",
            "status": "LIVE",
            "startTime": "2025-01-24 06:40:40",
            "startDateTime": "2025-01-24T06:40:40Z",
            "endTime": "2026-11-29 05:39:49",
            "endDateTime": "2026-11-29T05:39:49Z",
            "type": "VOUCHER",
            "priority": 1,
            "enabled": true,
            "intouchPoints": 0,
            "redemptionType": "MILES",
            "groups": null,
            "rewardRank": null,
            "customFields": null,
            "paymentConfigs": [
                {
                    "paymentMode": "CONV_RATIO",
                    "id": 3659,
                    "conversionRatio": 0.33
                }
            ]
        },
        {
            "id": 305322,
            "name": " INTOUCH Enabled",
            "status": "LIVE",
            "startTime": "2025-01-24 06:40:40",
            "startDateTime": "2025-01-24T06:40:40Z",
            "endTime": "2026-11-29 05:39:49",
            "endDateTime": "2026-11-29T05:39:49Z",
            "type": "VOUCHER",
            "priority": 1,
            "enabled": true,
            "intouchPoints": 0,
            "redemptionType": "MILES",
            "groups": null,
            "rewardRank": null,
            "customFields": null,
            "paymentConfigs": [
                {
                    "paymentMode": "CONV_RATIO",
                    "id": 3660,
                    "conversionRatio": 0.33
                }
            ]
        },
        {
            "id": 306995,
            "name": " INTOUCH Enabled",
            "status": "LIVE",
            "startTime": "2025-01-27 08:52:40",
            "startDateTime": "2025-01-27T08:52:40Z",
            "endTime": "2026-11-29 05:39:49",
            "endDateTime": "2026-11-29T05:39:49Z",
            "type": "VOUCHER",
            "priority": 1,
            "enabled": true,
            "intouchPoints": 0,
            "redemptionType": "MILES",
            "groups": null,
            "rewardRank": null,
            "customFields": null,
            "paymentConfigs": [
                {
                    "paymentMode": "CONV_RATIO",
                    "id": 3805,
                    "conversionRatio": 0.33
                }
            ]
        },
        {
            "id": 306996,
            "name": " INTOUCH Enabled",
            "status": "LIVE",
            "startTime": "2025-01-27 08:52:40",
            "startDateTime": "2025-01-27T08:52:40Z",
            "endTime": "2026-11-29 05:39:49",
            "endDateTime": "2026-11-29T05:39:49Z",
            "type": "VOUCHER",
            "priority": 1,
            "enabled": true,
            "intouchPoints": 0,
            "redemptionType": "MILES",
            "groups": null,
            "rewardRank": null,
            "customFields": null,
            "paymentConfigs": [
                {
                    "paymentMode": "CONV_RATIO",
                    "id": 3806,
                    "conversionRatio": 0.33
                }
            ]
        },
        {
            "id": 312843,
            "name": " INTOUCH Enabled",
            "status": "LIVE",
            "startTime": "2025-02-06 07:52:50",
            "startDateTime": "2025-02-06T07:52:50Z",
            "endTime": "2025-12-30 12:50:20",
            "endDateTime": "2025-12-30T12:50:20Z",
            "type": "FREE_VOUCHER",
            "priority": 1,
            "enabled": true,
            "intouchPoints": 0,
            "redemptionType": "PHYSICAL_REWARD",
            "groups": null,
            "rewardRank": null,
            "customFields": null,
            "paymentConfigs": null
        },
        {
            "id": 313501,
            "name": " INTOUCH Enabled",
            "status": "LIVE",
            "startTime": "2025-02-07 10:13:30",
            "startDateTime": "2025-02-07T10:13:30Z",
            "endTime": "2025-12-30 12:50:20",
            "endDateTime": "2025-12-30T12:50:20Z",
            "type": "FREE_VOUCHER",
            "priority": 1,
            "enabled": true,
            "intouchPoints": 0,
            "redemptionType": "PHYSICAL_REWARD",
            "groups": null,
            "rewardRank": null,
            "customFields": null,
            "paymentConfigs": null
        },
        {
            "id": 315100,
            "name": " INTOUCH Enabled",
            "status": "LIVE",
            "startTime": "2025-02-10 05:57:30",
            "startDateTime": "2025-02-10T05:57:30Z",
            "endTime": "2026-11-28 14:10:00",
            "endDateTime": "2026-11-28T14:10:00Z",
            "type": "FREE_VOUCHER",
            "priority": 1,
            "enabled": true,
            "intouchPoints": 0,
            "redemptionType": "MILES",
            "groups": null,
            "rewardRank": null,
            "customFields": null,
            "paymentConfigs": null
        },
        {
            "id": 315101,
            "name": " INTOUCH Enabled",
            "status": "LIVE",
            "startTime": "2025-02-10 05:58:00",
            "startDateTime": "2025-02-10T05:58:00Z",
            "endTime": "2026-11-28 14:10:00",
            "endDateTime": "2026-11-28T14:10:00Z",
            "type": "FREE_VOUCHER",
            "priority": 1,
            "enabled": true,
            "intouchPoints": 50,
            "redemptionType": "MILES",
            "groups": null,
            "rewardRank": null,
            "customFields": null,
            "paymentConfigs": null
        },
        {
            "id": 316356,
            "name": " INTOUCH Enabled",
            "status": "LIVE",
            "startTime": "2025-02-12 05:59:00",
            "startDateTime": "2025-02-12T05:59:00Z",
            "endTime": "2025-12-30 12:50:20",
            "endDateTime": "2025-12-30T12:50:20Z",
            "type": "FREE_VOUCHER",
            "priority": 1,
            "enabled": true,
            "intouchPoints": 0,
            "redemptionType": "PHYSICAL_REWARD",
            "groups": null,
            "rewardRank": null,
            "customFields": null,
            "paymentConfigs": null
        },
        {
            "id": 328130,
            "name": "jogold",
            "status": "UPCOMING",
            "startTime": "2025-09-26 20:00:00",
            "startDateTime": "2025-09-26T20:00:00Z",
            "endTime": "2026-10-31 11:59:30",
            "endDateTime": "2026-10-31T11:59:30Z",
            "type": "VOUCHER",
            "priority": null,
            "enabled": true,
            "intouchPoints": 500,
            "redemptionType": "INTOUCH_REWARD",
            "groups": null,
            "rewardRank": null,
            "customFields": null,
            "paymentConfigs": null
        },
        {
            "id": 328131,
            "name": "jogold",
            "status": "UPCOMING",
            "startTime": "2025-09-26 20:00:00",
            "startDateTime": "2025-09-26T20:00:00Z",
            "endTime": "2026-10-31 11:59:30",
            "endDateTime": "2026-10-31T11:59:30Z",
            "type": "VOUCHER",
            "priority": null,
            "enabled": true,
            "intouchPoints": 500,
            "redemptionType": "INTOUCH_REWARD",
            "groups": null,
            "rewardRank": null,
            "customFields": null,
            "paymentConfigs": null
        },
        {
            "id": 328135,
            "name": "jogold",
            "status": "UPCOMING",
            "startTime": "2025-09-26 20:00:00",
            "startDateTime": "2025-09-26T20:00:00Z",
            "endTime": "2026-10-31 11:59:30",
            "endDateTime": "2026-10-31T11:59:30Z",
            "type": "VOUCHER",
            "priority": null,
            "enabled": true,
            "intouchPoints": 500,
            "redemptionType": "INTOUCH_REWARD",
            "groups": null,
            "rewardRank": null,
            "customFields": null,
            "paymentConfigs": null
        },
        {
            "id": 328159,
            "name": "jogold",
            "status": "UPCOMING",
            "startTime": "2025-09-26 20:00:00",
            "startDateTime": "2025-09-26T20:00:00Z",
            "endTime": "2026-10-31 11:59:30",
            "endDateTime": "2026-10-31T11:59:30Z",
            "type": "VOUCHER",
            "priority": null,
            "enabled": true,
            "intouchPoints": 500,
            "redemptionType": "INTOUCH_REWARD",
            "groups": null,
            "rewardRank": null,
            "customFields": null,
            "paymentConfigs": null
        },
        {
            "id": 328160,
            "name": "jogoldhindi",
            "status": "UPCOMING",
            "startTime": "2025-09-26 20:00:00",
            "startDateTime": "2025-09-26T20:00:00Z",
            "endTime": "2026-10-31 11:59:30",
            "endDateTime": "2026-10-31T11:59:30Z",
            "type": "VOUCHER",
            "priority": null,
            "enabled": true,
            "intouchPoints": 500,
            "redemptionType": "INTOUCH_REWARD",
            "groups": null,
            "rewardRank": null,
            "customFields": null,
            "paymentConfigs": null
        },
        {
            "id": 328166,
            "name": "testreward1",
            "status": "UPCOMING",
            "startTime": "2025-09-26 20:00:00",
            "startDateTime": "2025-09-26T20:00:00Z",
            "endTime": "2026-10-31 11:59:30",
            "endDateTime": "2026-10-31T11:59:30Z",
            "type": "VOUCHER",
            "priority": 1,
            "enabled": true,
            "intouchPoints": 500,
            "redemptionType": "INTOUCH_REWARD",
            "groups": null,
            "rewardRank": 1,
            "customFields": null,
            "paymentConfigs": null
        },
        {
            "id": 328174,
            "name": "testreward1",
            "status": "UPCOMING",
            "startTime": "2025-09-26 20:00:00",
            "startDateTime": "2025-09-26T20:00:00Z",
            "endTime": "2026-10-31 11:59:30",
            "endDateTime": "2026-10-31T11:59:30Z",
            "type": "VOUCHER",
            "priority": 1,
            "enabled": true,
            "intouchPoints": 500,
            "redemptionType": "INTOUCH_REWARD",
            "groups": null,
            "rewardRank": 1,
            "customFields": null,
            "paymentConfigs": null
        },
        {
            "id": 328189,
            "name": "englishreward",
            "status": "UPCOMING",
            "startTime": "2025-09-26 20:00:00",
            "startDateTime": "2025-09-26T20:00:00Z",
            "endTime": "2026-10-31 11:59:30",
            "endDateTime": "2026-10-31T11:59:30Z",
            "type": "VOUCHER",
            "priority": 1,
            "enabled": true,
            "intouchPoints": 500,
            "redemptionType": "INTOUCH_REWARD",
            "groups": null,
            "rewardRank": 1,
            "customFields": null,
            "paymentConfigs": null
        },
        {
            "id": 328190,
            "name": "englishreward",
            "status": "UPCOMING",
            "startTime": "2025-09-26 20:00:00",
            "startDateTime": "2025-09-26T20:00:00Z",
            "endTime": "2026-10-31 11:59:30",
            "endDateTime": "2026-10-31T11:59:30Z",
            "type": "VOUCHER",
            "priority": 1,
            "enabled": true,
            "intouchPoints": 500,
            "redemptionType": "INTOUCH_REWARD",
            "groups": null,
            "rewardRank": 1,
            "customFields": null,
            "paymentConfigs": null
        },
        {
            "id": 328204,
            "name": "testreward1",
            "status": "UPCOMING",
            "startTime": "2025-09-26 20:00:00",
            "startDateTime": "2025-09-26T20:00:00Z",
            "endTime": "2026-10-31 11:59:30",
            "endDateTime": "2026-10-31T11:59:30Z",
            "type": "VOUCHER",
            "priority": 1,
            "enabled": true,
            "intouchPoints": 500,
            "redemptionType": "INTOUCH_REWARD",
            "groups": null,
            "rewardRank": 1,
            "customFields": null,
            "paymentConfigs": null
        },
        {
            "id": 328208,
            "name": "testreward1",
            "status": "UPCOMING",
            "startTime": "2025-09-26 20:00:00",
            "startDateTime": "2025-09-26T20:00:00Z",
            "endTime": "2026-10-31 11:59:30",
            "endDateTime": "2026-10-31T11:59:30Z",
            "type": "VOUCHER",
            "priority": 1,
            "enabled": true,
            "intouchPoints": 500,
            "redemptionType": "INTOUCH_REWARD",
            "groups": null,
            "rewardRank": 1,
            "customFields": null,
            "paymentConfigs": null
        },
        {
            "id": 334004,
            "name": "jogoldhindi",
            "status": "UPCOMING",
            "startTime": "2025-09-26 20:00:00",
            "startDateTime": "2025-09-26T20:00:00Z",
            "endTime": "2026-10-31 11:59:30",
            "endDateTime": "2026-10-31T11:59:30Z",
            "type": "VOUCHER",
            "priority": null,
            "enabled": true,
            "intouchPoints": 500,
            "redemptionType": "INTOUCH_REWARD",
            "groups": null,
            "rewardRank": null,
            "customFields": null,
            "paymentConfigs": null
        },
        {
            "id": 336587,
            "name": "jogold",
            "status": "LIVE",
            "startTime": "2025-03-17 20:00:00",
            "startDateTime": "2025-03-17T20:00:00Z",
            "endTime": "2026-10-31 11:59:30",
            "endDateTime": "2026-10-31T11:59:30Z",
            "type": "VOUCHER",
            "priority": null,
            "enabled": true,
            "intouchPoints": 500,
            "redemptionType": "INTOUCH_REWARD",
            "groups": null,
            "rewardRank": null,
            "customFields": null,
            "paymentConfigs": null
        },
        {
            "id": 336588,
            "name": "jogold",
            "status": "LIVE",
            "startTime": "2025-03-17 20:00:00",
            "startDateTime": "2025-03-17T20:00:00Z",
            "endTime": "2026-10-31 11:59:30",
            "endDateTime": "2026-10-31T11:59:30Z",
            "type": "POINTS",
            "priority": null,
            "enabled": true,
            "intouchPoints": 500,
            "redemptionType": "INTOUCH_REWARD",
            "groups": null,
            "rewardRank": null,
            "customFields": null,
            "paymentConfigs": null
        },
        {
            "id": 336880,
            "name": "jogold",
            "status": "UPCOMING",
            "startTime": "2025-09-26 20:00:00",
            "startDateTime": "2025-09-26T20:00:00Z",
            "endTime": "2026-10-31 11:59:30",
            "endDateTime": "2026-10-31T11:59:30Z",
            "type": "VOUCHER",
            "priority": null,
            "enabled": true,
            "intouchPoints": 500,
            "redemptionType": "INTOUCH_REWARD",
            "groups": null,
            "rewardRank": null,
            "customFields": null,
            "paymentConfigs": null
        },
        {
            "id": 337352,
            "name": "testreward1",
            "status": "LIVE",
            "startTime": "2025-01-26 20:00:00",
            "startDateTime": "2025-01-26T20:00:00Z",
            "endTime": "2026-10-31 11:59:30",
            "endDateTime": "2026-10-31T11:59:30Z",
            "type": "VOUCHER",
            "priority": 1,
            "enabled": true,
            "intouchPoints": 500,
            "redemptionType": "INTOUCH_REWARD",
            "groups": null,
            "rewardRank": 1,
            "customFields": null,
            "paymentConfigs": null
        },
        {
            "id": 337353,
            "name": "testreward1",
            "status": "LIVE",
            "startTime": "2025-01-26 20:00:00",
            "startDateTime": "2025-01-26T20:00:00Z",
            "endTime": "2026-10-31 11:59:30",
            "endDateTime": "2026-10-31T11:59:30Z",
            "type": "VOUCHER",
            "priority": 1,
            "enabled": true,
            "intouchPoints": 500,
            "redemptionType": "INTOUCH_REWARD",
            "groups": null,
            "rewardRank": 1,
            "customFields": null,
            "paymentConfigs": null
        },
        {
            "id": 337354,
            "name": "testreward1",
            "status": "LIVE",
            "startTime": "2025-01-26 20:00:00",
            "startDateTime": "2025-01-26T20:00:00Z",
            "endTime": "2026-10-31 11:59:30",
            "endDateTime": "2026-10-31T11:59:30Z",
            "type": "VOUCHER",
            "priority": 1,
            "enabled": true,
            "intouchPoints": 500,
            "redemptionType": "INTOUCH_REWARD",
            "groups": null,
            "rewardRank": 1,
            "customFields": null,
            "paymentConfigs": null
        },
        {
            "id": 337355,
            "name": "testreward1",
            "status": "LIVE",
            "startTime": "2025-01-26 20:00:00",
            "startDateTime": "2025-01-26T20:00:00Z",
            "endTime": "2026-10-31 11:59:30",
            "endDateTime": "2026-10-31T11:59:30Z",
            "type": "VOUCHER",
            "priority": null,
            "enabled": true,
            "intouchPoints": 500,
            "redemptionType": "INTOUCH_REWARD",
            "groups": null,
            "rewardRank": null,
            "customFields": null,
            "paymentConfigs": null
        },
        {
            "id": 337437,
            "name": "testreward1",
            "status": "LIVE",
            "startTime": "2025-01-26 20:00:00",
            "startDateTime": "2025-01-26T20:00:00Z",
            "endTime": "2026-10-31 11:59:30",
            "endDateTime": "2026-10-31T11:59:30Z",
            "type": "VOUCHER",
            "priority": 1,
            "enabled": true,
            "intouchPoints": 500,
            "redemptionType": "INTOUCH_REWARD",
            "groups": null,
            "rewardRank": 1,
            "customFields": null,
            "paymentConfigs": null
        },
        {
            "id": 337438,
            "name": "testreward1",
            "status": "LIVE",
            "startTime": "2025-01-26 20:00:00",
            "startDateTime": "2025-01-26T20:00:00Z",
            "endTime": "2026-10-31 11:59:30",
            "endDateTime": "2026-10-31T11:59:30Z",
            "type": "VOUCHER",
            "priority": 1,
            "enabled": true,
            "intouchPoints": 500,
            "redemptionType": "INTOUCH_REWARD",
            "groups": null,
            "rewardRank": 1,
            "customFields": null,
            "paymentConfigs": null
        },
        {
            "id": 337466,
            "name": "testreward1",
            "status": "LIVE",
            "startTime": "2025-01-26 20:00:00",
            "startDateTime": "2025-01-26T20:00:00Z",
            "endTime": "2026-10-31 11:59:30",
            "endDateTime": "2026-10-31T11:59:30Z",
            "type": "VOUCHER",
            "priority": 1,
            "enabled": true,
            "intouchPoints": 500,
            "redemptionType": "INTOUCH_REWARD",
            "groups": null,
            "rewardRank": 1,
            "customFields": null,
            "paymentConfigs": null
        },
        {
            "id": 337470,
            "name": "testreward1",
            "status": "LIVE",
            "startTime": "2025-01-26 20:00:00",
            "startDateTime": "2025-01-26T20:00:00Z",
            "endTime": "2026-10-31 11:59:30",
            "endDateTime": "2026-10-31T11:59:30Z",
            "type": "VOUCHER",
            "priority": 1,
            "enabled": true,
            "intouchPoints": 500,
            "redemptionType": "INTOUCH_REWARD",
            "groups": null,
            "rewardRank": 1,
            "customFields": null,
            "paymentConfigs": null
        },
        {
            "id": 337471,
            "name": "testreward1",
            "status": "LIVE",
            "startTime": "2025-01-26 20:00:00",
            "startDateTime": "2025-01-26T20:00:00Z",
            "endTime": "2026-10-31 11:59:30",
            "endDateTime": "2026-10-31T11:59:30Z",
            "type": "VOUCHER",
            "priority": 1,
            "enabled": true,
            "intouchPoints": 500,
            "redemptionType": "INTOUCH_REWARD",
            "groups": null,
            "rewardRank": 1,
            "customFields": null,
            "paymentConfigs": null
        },
        {
            "id": 337472,
            "name": "testreward1",
            "status": "LIVE",
            "startTime": "2025-01-26 20:00:00",
            "startDateTime": "2025-01-26T20:00:00Z",
            "endTime": "2026-10-31 11:59:30",
            "endDateTime": "2026-10-31T11:59:30Z",
            "type": "VOUCHER",
            "priority": 1,
            "enabled": true,
            "intouchPoints": 500,
            "redemptionType": "INTOUCH_REWARD",
            "groups": null,
            "rewardRank": 1,
            "customFields": null,
            "paymentConfigs": null
        },
        {
            "id": 337473,
            "name": "testreward1",
            "status": "LIVE",
            "startTime": "2025-01-26 20:00:00",
            "startDateTime": "2025-01-26T20:00:00Z",
            "endTime": "2026-10-31 11:59:30",
            "endDateTime": "2026-10-31T11:59:30Z",
            "type": "VOUCHER",
            "priority": 1,
            "enabled": true,
            "intouchPoints": 500,
            "redemptionType": "INTOUCH_REWARD",
            "groups": null,
            "rewardRank": 1,
            "customFields": null,
            "paymentConfigs": null
        },
        {
            "id": 337500,
            "name": "testrewardPAST",
            "status": "LIVE",
            "startTime": "2024-01-26 20:00:00",
            "startDateTime": "2024-01-26T20:00:00Z",
            "endTime": "2027-10-31 11:59:30",
            "endDateTime": "2027-10-31T11:59:30Z",
            "type": "VOUCHER",
            "priority": null,
            "enabled": true,
            "intouchPoints": 500,
            "redemptionType": "VOUCHER",
            "groups": null,
            "rewardRank": null,
            "customFields": null,
            "paymentConfigs": null
        },
        {
            "id": 337527,
            "name": "testrewardPAST",
            "status": "LIVE",
            "startTime": "2024-01-26 20:00:00",
            "startDateTime": "2024-01-26T20:00:00Z",
            "endTime": "2027-10-31 11:59:30",
            "endDateTime": "2027-10-31T11:59:30Z",
            "type": "VOUCHER",
            "priority": null,
            "enabled": true,
            "intouchPoints": 500,
            "redemptionType": "VOUCHER",
            "groups": null,
            "rewardRank": null,
            "customFields": null,
            "paymentConfigs": null
        },
        {
            "id": 340916,
            "name": "testreward1",
            "status": "LIVE",
            "startTime": "2024-08-21 09:57:00",
            "startDateTime": "2024-08-21T09:57:00Z",
            "endTime": "2025-09-11 14:43:00",
            "endDateTime": "2025-09-11T14:43:00Z",
            "type": "VOUCHER",
            "priority": 1,
            "enabled": true,
            "intouchPoints": 500,
            "redemptionType": "INTOUCH_REWARD",
            "groups": null,
            "rewardRank": 1,
            "customFields": null,
            "paymentConfigs": [
                {
                    "paymentMode": "POINTS",
                    "id": 5419,
                    "points": 100
                }
            ]
        },
        {
            "id": 342020,
            "name": "jogold",
            "status": "LIVE",
            "startTime": "2025-01-26 20:00:00",
            "startDateTime": "2025-01-26T20:00:00Z",
            "endTime": "2026-10-31 11:59:30",
            "endDateTime": "2026-10-31T11:59:30Z",
            "type": "VOUCHER",
            "priority": null,
            "enabled": true,
            "intouchPoints": 500,
            "redemptionType": "INTOUCH_REWARD",
            "groups": null,
            "rewardRank": null,
            "customFields": null,
            "paymentConfigs": null
        },
        {
            "id": 342089,
            "name": "jogold",
            "status": "UPCOMING",
            "startTime": "2025-09-26 20:00:00",
            "startDateTime": "2025-09-26T20:00:00Z",
            "endTime": "2026-10-31 11:59:30",
            "endDateTime": "2026-10-31T11:59:30Z",
            "type": "VOUCHER",
            "priority": null,
            "enabled": true,
            "intouchPoints": 500,
            "redemptionType": "INTOUCH_REWARD",
            "groups": null,
            "rewardRank": null,
            "customFields": null,
            "paymentConfigs": null
        },
        {
            "id": 342184,
            "name": "jogold",
            "status": "UPCOMING",
            "startTime": "2025-09-26 20:00:00",
            "startDateTime": "2025-09-26T20:00:00Z",
            "endTime": "2026-10-31 11:59:30",
            "endDateTime": "2026-10-31T11:59:30Z",
            "type": "VOUCHER",
            "priority": null,
            "enabled": true,
            "intouchPoints": 500,
            "redemptionType": "INTOUCH_REWARD",
            "groups": null,
            "rewardRank": null,
            "customFields": null,
            "paymentConfigs": null
        },
        {
            "id": 342185,
            "name": "testreward1",
            "status": "UPCOMING",
            "startTime": "2025-09-26 20:00:00",
            "startDateTime": "2025-09-26T20:00:00Z",
            "endTime": "2026-10-31 11:59:30",
            "endDateTime": "2026-10-31T11:59:30Z",
            "type": "POINTS",
            "priority": 1,
            "enabled": true,
            "intouchPoints": 500,
            "redemptionType": "INTOUCH_REWARD",
            "groups": null,
            "rewardRank": 1,
            "customFields": null,
            "paymentConfigs": [
                {
                    "paymentMode": "POINTS",
                    "id": 5517,
                    "points": 100
                }
            ]
        },
        {
            "id": 342188,
            "name": "testreward1",
            "status": "LIVE",
            "startTime": "2025-02-26 20:00:00",
            "startDateTime": "2025-02-26T20:00:00Z",
            "endTime": "2026-10-31 11:59:30",
            "endDateTime": "2026-10-31T11:59:30Z",
            "type": "POINTS",
            "priority": 1,
            "enabled": true,
            "intouchPoints": 500,
            "redemptionType": "INTOUCH_REWARD",
            "groups": null,
            "rewardRank": 1,
            "customFields": null,
            "paymentConfigs": [
                {
                    "paymentMode": "POINTS",
                    "id": 5518,
                    "points": 100
                }
            ]
        },
        {
            "id": 342640,
            "name": "jogold",
            "status": "UPCOMING",
            "startTime": "2025-09-26 20:00:00",
            "startDateTime": "2025-09-26T20:00:00Z",
            "endTime": "2026-10-31 11:59:30",
            "endDateTime": "2026-10-31T11:59:30Z",
            "type": "VOUCHER",
            "priority": null,
            "enabled": true,
            "intouchPoints": 500,
            "redemptionType": "INTOUCH_REWARD",
            "groups": null,
            "rewardRank": null,
            "customFields": null,
            "paymentConfigs": null
        },
        {
            "id": 342644,
            "name": "jogoldnamechange check",
            "status": "UPCOMING",
            "startTime": "2025-09-26 20:00:00",
            "startDateTime": "2025-09-26T20:00:00Z",
            "endTime": "2026-10-31 11:59:30",
            "endDateTime": "2026-10-31T11:59:30Z",
            "type": "VOUCHER",
            "priority": null,
            "enabled": true,
            "intouchPoints": 500,
            "redemptionType": "INTOUCH_REWARD",
            "groups": null,
            "rewardRank": null,
            "customFields": null,
            "paymentConfigs": null
        },
        {
            "id": 342762,
            "name": "jogoldnamechange check",
            "status": "LIVE",
            "startTime": "2024-09-26 20:00:00",
            "startDateTime": "2024-09-26T20:00:00Z",
            "endTime": "2026-10-31 11:59:30",
            "endDateTime": "2026-10-31T11:59:30Z",
            "type": "VOUCHER",
            "priority": null,
            "enabled": true,
            "intouchPoints": 500,
            "redemptionType": "INTOUCH_REWARD",
            "groups": null,
            "rewardRank": null,
            "customFields": null,
            "paymentConfigs": null
        },
        {
            "id": 342860,
            "name": "testreward1",
            "status": "LIVE",
            "startTime": "2024-09-26 20:00:00",
            "startDateTime": "2024-09-26T20:00:00Z",
            "endTime": "2026-10-31 11:59:30",
            "endDateTime": "2026-10-31T11:59:30Z",
            "type": "VOUCHER",
            "priority": 1,
            "enabled": true,
            "intouchPoints": 500,
            "redemptionType": "INTOUCH_REWARD",
            "groups": null,
            "rewardRank": 1,
            "customFields": null,
            "paymentConfigs": null
        },
        {
            "id": 343495,
            "name": "jogoldnamechange check",
            "status": "UPCOMING",
            "startTime": "2025-09-26 20:00:00",
            "startDateTime": "2025-09-26T20:00:00Z",
            "endTime": "2026-10-31 11:59:30",
            "endDateTime": "2026-10-31T11:59:30Z",
            "type": "VOUCHER",
            "priority": null,
            "enabled": true,
            "intouchPoints": 500,
            "redemptionType": "INTOUCH_REWARD",
            "groups": null,
            "rewardRank": null,
            "customFields": null,
            "paymentConfigs": null
        },
        {
            "id": 343496,
            "name": "jogoldnamechange check",
            "status": "UPCOMING",
            "startTime": "2025-09-26 20:00:00",
            "startDateTime": "2025-09-26T20:00:00Z",
            "endTime": "2026-10-31 11:59:30",
            "endDateTime": "2026-10-31T11:59:30Z",
            "type": "VOUCHER",
            "priority": null,
            "enabled": true,
            "intouchPoints": 500,
            "redemptionType": "INTOUCH_REWARD",
            "groups": null,
            "rewardRank": null,
            "customFields": null,
            "paymentConfigs": null
        },
        {
            "id": 343497,
            "name": "jogoldnamechange check",
            "status": "UPCOMING",
            "startTime": "2025-09-26 20:00:00",
            "startDateTime": "2025-09-26T20:00:00Z",
            "endTime": "2026-10-31 11:59:30",
            "endDateTime": "2026-10-31T11:59:30Z",
            "type": "VOUCHER",
            "priority": null,
            "enabled": true,
            "intouchPoints": 500,
            "redemptionType": "INTOUCH_REWARD",
            "groups": null,
            "rewardRank": null,
            "customFields": null,
            "paymentConfigs": null
        },
        {
            "id": 343524,
            "name": "jogoldnamechange check",
            "status": "UPCOMING",
            "startTime": "2025-09-26 20:00:00",
            "startDateTime": "2025-09-26T20:00:00Z",
            "endTime": "2026-10-31 11:59:30",
            "endDateTime": "2026-10-31T11:59:30Z",
            "type": "VOUCHER",
            "priority": null,
            "enabled": true,
            "intouchPoints": 500,
            "redemptionType": "INTOUCH_REWARD",
            "groups": null,
            "rewardRank": null,
            "customFields": null,
            "paymentConfigs": null
        },
        {
            "id": 344546,
            "name": "testreward1",
            "status": "UPCOMING",
            "startTime": "2025-09-26 20:00:00",
            "startDateTime": "2025-09-26T20:00:00Z",
            "endTime": "2026-10-31 11:59:30",
            "endDateTime": "2026-10-31T11:59:30Z",
            "type": "VOUCHER",
            "priority": 1,
            "enabled": true,
            "intouchPoints": 500,
            "redemptionType": "INTOUCH_REWARD",
            "groups": null,
            "rewardRank": 1,
            "customFields": null,
            "paymentConfigs": null
        },
        {
            "id": 344547,
            "name": "testreward1",
            "status": "LIVE",
            "startTime": "2025-03-25 20:00:00",
            "startDateTime": "2025-03-25T20:00:00Z",
            "endTime": "2026-10-31 11:59:30",
            "endDateTime": "2026-10-31T11:59:30Z",
            "type": "VOUCHER",
            "priority": 1,
            "enabled": true,
            "intouchPoints": 500,
            "redemptionType": "INTOUCH_REWARD",
            "groups": null,
            "rewardRank": 1,
            "customFields": null,
            "paymentConfigs": null
        },
        {
            "id": 344548,
            "name": "testreward2",
            "status": "LIVE",
            "startTime": "2025-03-25 20:00:00",
            "startDateTime": "2025-03-25T20:00:00Z",
            "endTime": "2026-10-31 11:59:30",
            "endDateTime": "2026-10-31T11:59:30Z",
            "type": "VOUCHER",
            "priority": 1,
            "enabled": true,
            "intouchPoints": 500,
            "redemptionType": "INTOUCH_REWARD",
            "groups": null,
            "rewardRank": 1,
            "customFields": null,
            "paymentConfigs": null
        },
        {
            "id": 345320,
            "name": "jogoldnamechange check",
            "status": "UPCOMING",
            "startTime": "2025-09-26 20:00:00",
            "startDateTime": "2025-09-26T20:00:00Z",
            "endTime": "2026-10-31 11:59:30",
            "endDateTime": "2026-10-31T11:59:30Z",
            "type": "VOUCHER",
            "priority": null,
            "enabled": true,
            "intouchPoints": 500,
            "redemptionType": "INTOUCH_REWARD",
            "groups": null,
            "rewardRank": null,
            "customFields": null,
            "paymentConfigs": null
        },
        {
            "id": 346353,
            "name": "testreward2",
            "status": "LIVE",
            "startTime": "2025-03-25 20:00:00",
            "startDateTime": "2025-03-25T20:00:00Z",
            "endTime": "2026-10-31 11:59:30",
            "endDateTime": "2026-10-31T11:59:30Z",
            "type": "VOUCHER",
            "priority": 1,
            "enabled": true,
            "intouchPoints": 500,
            "redemptionType": "INTOUCH_REWARD",
            "groups": null,
            "rewardRank": 1,
            "customFields": null,
            "paymentConfigs": null
        },
        {
            "id": 346354,
            "name": "testreward2",
            "status": "LIVE",
            "startTime": "2025-03-25 20:00:00",
            "startDateTime": "2025-03-25T20:00:00Z",
            "endTime": "2026-10-31 11:59:30",
            "endDateTime": "2026-10-31T11:59:30Z",
            "type": "VOUCHER",
            "priority": 1,
            "enabled": true,
            "intouchPoints": 500,
            "redemptionType": "INTOUCH_REWARD",
            "groups": null,
            "rewardRank": 1,
            "customFields": null,
            "paymentConfigs": null
        },
        {
            "id": 348851,
            "name": "testreward1",
            "status": "LIVE",
            "startTime": "2025-04-05 20:00:00",
            "startDateTime": "2025-04-05T20:00:00Z",
            "endTime": "2026-10-31 11:59:30",
            "endDateTime": "2026-10-31T11:59:30Z",
            "type": "VOUCHER",
            "priority": 1,
            "enabled": true,
            "intouchPoints": 500,
            "redemptionType": "PHYSICAL_REWARD",
            "groups": null,
            "rewardRank": 1,
            "customFields": null,
            "paymentConfigs": null
        },
        {
            "id": 348852,
            "name": "testreward1",
            "status": "LIVE",
            "startTime": "2025-04-05 20:00:00",
            "startDateTime": "2025-04-05T20:00:00Z",
            "endTime": "2026-10-31 11:59:30",
            "endDateTime": "2026-10-31T11:59:30Z",
            "type": "VOUCHER",
            "priority": 1,
            "enabled": true,
            "intouchPoints": 1,
            "redemptionType": "PHYSICAL_REWARD",
            "groups": null,
            "rewardRank": 1,
            "customFields": null,
            "paymentConfigs": null
        },
        {
            "id": 348881,
            "name": " testsajal",
            "status": "LIVE",
            "startTime": "2025-04-01 23:59:59",
            "startDateTime": "2025-04-01T23:59:59Z",
            "endTime": "2025-05-01 23:59:59",
            "endDateTime": "2025-05-01T23:59:59Z",
            "type": "VOUCHER",
            "priority": 1,
            "enabled": true,
            "intouchPoints": 10,
            "redemptionType": "PHYSICAL_REWARD",
            "groups": null,
            "rewardRank": null,
            "customFields": null,
            "paymentConfigs": null
        },
        {
            "id": 349950,
            "name": " testsajal",
            "status": "LIVE",
            "startTime": "2025-04-01 23:59:59",
            "startDateTime": "2025-04-01T23:59:59Z",
            "endTime": "2025-05-01 23:59:59",
            "endDateTime": "2025-05-01T23:59:59Z",
            "type": "VOUCHER",
            "priority": 1,
            "enabled": true,
            "intouchPoints": 10,
            "redemptionType": "PHYSICAL_REWARD",
            "groups": null,
            "rewardRank": null,
            "customFields": null,
            "paymentConfigs": null
        },
        {
            "id": 349976,
            "name": " testsajal",
            "status": "LIVE",
            "startTime": "2025-04-01 23:59:59",
            "startDateTime": "2025-04-01T23:59:59Z",
            "endTime": "2025-05-01 23:59:59",
            "endDateTime": "2025-05-01T23:59:59Z",
            "type": "PHYSICAL_VOUCHER",
            "priority": 1,
            "enabled": true,
            "intouchPoints": 10,
            "redemptionType": "PHYSICAL_REWARD",
            "groups": null,
            "rewardRank": null,
            "customFields": null,
            "paymentConfigs": null
        },
        {
            "id": 349980,
            "name": " testsajal",
            "status": "LIVE",
            "startTime": "2025-04-01 23:59:59",
            "startDateTime": "2025-04-01T23:59:59Z",
            "endTime": "2025-05-01 23:59:59",
            "endDateTime": "2025-05-01T23:59:59Z",
            "type": "FREE_VOUCHER",
            "priority": 1,
            "enabled": true,
            "intouchPoints": 0,
            "redemptionType": "PHYSICAL_REWARD",
            "groups": null,
            "rewardRank": null,
            "customFields": null,
            "paymentConfigs": null
        },
        {
            "id": 350264,
            "name": " testsajal",
            "status": "LIVE",
            "startTime": "2025-04-01 23:59:59",
            "startDateTime": "2025-04-01T23:59:59Z",
            "endTime": "2025-05-01 23:59:59",
            "endDateTime": "2025-05-01T23:59:59Z",
            "type": "VOUCHER",
            "priority": 1,
            "enabled": true,
            "intouchPoints": 10,
            "redemptionType": "PHYSICAL_REWARD",
            "groups": null,
            "rewardRank": null,
            "customFields": null,
            "paymentConfigs": null
        }
    ]
}
```