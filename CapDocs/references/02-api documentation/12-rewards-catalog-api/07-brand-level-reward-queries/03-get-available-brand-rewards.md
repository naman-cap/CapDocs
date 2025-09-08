---
title: Get available brand rewards
excerpt: ''
api:
  file: v1.json
  operationId: get-available-brand-rewards
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
This API allows you to retrieve rewards that are available to be linked to an catalog promotion.

> 👍 Note
>
> For detailed information about our APIs and for hands-on testing, refer documentation in [API overview](https://docs.capillarytech.com/reference/apioverview) and  step-by-step guide on making your first API call in [Make your first API call](https://docs.capillarytech.com/reference/make-your-first-api-call) .

# Prerequisites

*   Authentication: Basic or OAuth authentication
*   Default access group

# Resource information

|                        |                                                                                                                                  |
| :--------------------- | :------------------------------------------------------------------------------------------------------------------------------- |
| URI                    | /api\_gateway/rewards/core/v1/reward/brand`\{brandId\}`/available?startDate=`{YYYY-MM-DDTHH:MMZ}`\&endDate=`{YYYY-MM-DDTHH:MMZ}` |
| HTTP Method            | GET                                                                                                                              |
| Pagination             | No                                                                                                                               |
| Batch support          | No                                                                                                                               |
| Rate limit information | None                                                                                                                             |

# API endpoint example

`https://eu.api.capillarytech.com/api_gateway/rewards/core/v1/reward/brand/1/available?startDate=2023-04-20T08:55Z&endDate=2024-07-30T08:55Z`

# Request path parameters

| Parameter Name | Data Type | Description                                                                                                                                |
| -------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| brandId\*      | Long      | You can use the [API](https://eu.api.capillarytech.com/api_gateway/rewards/core/v1/brand/getAll)  and retrieve the brand ID of your brand. |

# Request query parameters

| Parameter Name | Data Type | Description                                                                                                                                                                               |
| :------------- | :-------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| startDate\*    | DateTime  | The start date of the reward. Format for the startDate should be `YYYY-MM-DDTHH:MMZ`.                                                                                                     |
| endDate\*      | DateTime  | the end date of the reward. Format for the endDate should be `YYYY-MM-DDTHH:MMZ`.                                                                                                         |
| language       | Enum      | Filters the response based on the reward language. Use this parameter to retrieve rewards in a specific language. For example, to display rewards in English, set the parameter to `en` . |

<br />

```curl
https://eu.api.capillarytech.com/api_gateway/rewards/core/v1/reward/brand/1/available?startDate=2022-04-20T08:55Z&endDate=2022-11-30T08:55Z
```

# Response parameters

| Parameters     | Description                                                                                           |
| -------------- | ----------------------------------------------------------------------------------------------------- |
| status         | Contains status information about the reward details fetch request.                                   |
| success        | Indicates whether the reward details were fetched successfully.                                       |
| code           | A unique code representing the status of the request.                                                 |
| message        | A message describing the status of the request.                                                       |
| rewardList     | A list of rewards available.                                                                          |
| id             | A unique identifier for the reward.                                                                   |
| name           | The name of the reward.                                                                               |
| status         | The status of the reward For example: `LIVE`, `ENDED` or `UPCOMING`.                                  |
| startTime      | The start date and time of the reward in `YYYY-MM-DD HH:MM:SS` format.                                |
| endTime        | The end date and time of the reward in `YYYY-MM-DD HH:MM:SS` format.                                  |
| type           | The type of reward.                                                                                   |
| priority       | The priority of the reward.                                                                           |
| enabled        | Indicates whether the reward is currently enabled.                                                    |
| intouchPoints  | The number of points required for redemption.                                                         |
| redemptionType | Specifies the category of reward redemption available, that indicate how users can redeem the reward. |
| groups         | Contains group details associated with the reward.                                                    |
| groupName      | The name of the group associated with the reward.                                                     |
| groupRank      | The rank of the group associated with the reward.                                                     |
| rewardRank     | The rank of the reward.                                                                               |
| customFields   | Custom fields for the reward.                                                                         |
| paymentConfigs | Contains payment configuration details for the reward.                                                |
| paymentMode    | The mode of payment for the reward. For example: `FREE`, `POINTS`, `CASH`, `POINTS_CASH`.             |
| id             | A unique identifier for the payment configuration.                                                    |
| points         | The number of points required for redemption in the `POINTS` payment mode.                            |

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
            "id": 4,
            "name": "10% off on clothing",
            "status": "ENDED",
            "startTime": "2021-05-10 18:45:14",
            "endTime": "2021-05-10 18:45:14",
            "type": "VOUCHER",
            "priority": 1,
            "enabled": false,
            "intouchPoints": 100,
            "redemptionType": "INTOUCH_REWARD",
            "groups": [],
            "rewardRank": null,
            "customFields": {},
            "paymentConfigs": null
        },
        {
            "id": 7,
            "name": "15% off on Skinny Jeans",
            "status": "ENDED",
            "startTime": "2021-05-10 18:50:08",
            "endTime": "2021-05-10 18:50:08",
            "type": "VOUCHER",
            "priority": 2,
            "enabled": false,
            "intouchPoints": 200,
            "redemptionType": "INTOUCH_REWARD",
            "groups": [],
            "rewardRank": null,
            "customFields": {},
            "paymentConfigs": null
        },
        {
            "id": 8,
            "name": "200 off on shirts",
            "status": "ENDED",
            "startTime": "2021-05-10 18:54:18",
            "endTime": "2021-05-10 18:54:18",
            "type": "VOUCHER",
            "priority": 3,
            "enabled": false,
            "intouchPoints": 500,
            "redemptionType": "INTOUCH_REWARD",
            "groups": [],
            "rewardRank": null,
            "customFields": {},
            "paymentConfigs": null
        },
        {
            "id": 9,
            "name": "Flat 50% off on shoes",
            "status": "ENDED",
            "startTime": "2021-05-10 19:13:16",
            "endTime": "2021-05-10 19:13:16",
            "type": "VOUCHER",
            "priority": 4,
            "enabled": false,
            "intouchPoints": 300,
            "redemptionType": "INTOUCH_REWARD",
            "groups": [],
            "rewardRank": null,
            "customFields": {},
            "paymentConfigs": null
        },
        {
            "id": 206280,
            "name": "Eggo",
            "status": "ENDED",
            "startTime": "2024-07-26 16:15:00",
            "endTime": "2024-07-26 16:15:00",
            "type": "VOUCHER",
            "priority": 1,
            "enabled": true,
            "intouchPoints": 0,
            "redemptionType": "INTOUCH_REWARD",
            "groups": [
                {
                    "groupName": "Kellanova Rewards",
                    "groupRank": null
                }
            ],
            "rewardRank": 5,
            "customFields": {},
            "paymentConfigs": [
                {
                    "paymentMode": "FREE",
                    "id": 336
                }
            ]
        },
        {
            "id": 206281,
            "name": "Poptarts",
            "status": "ENDED",
            "startTime": "2024-07-26 16:15:00",
            "endTime": "2024-07-26 16:15:00",
            "type": "VOUCHER",
            "priority": 1,
            "enabled": true,
            "intouchPoints": 0,
            "redemptionType": "INTOUCH_REWARD",
            "groups": [
                {
                    "groupName": "Kellanova Rewards",
                    "groupRank": null
                }
            ],
            "rewardRank": 1,
            "customFields": {},
            "paymentConfigs": [
                {
                    "paymentMode": "FREE",
                    "id": 337
                }
            ]
        },
        {
            "id": 206609,
            "name": "testreward1",
            "status": "LIVE",
            "startTime": "2024-07-26 07:38:00",
            "endTime": "2024-07-26 07:38:00",
            "type": "VOUCHER",
            "priority": 1,
            "enabled": true,
            "intouchPoints": 500,
            "redemptionType": "INTOUCH_REWARD",
            "groups": [],
            "rewardRank": 1,
            "customFields": {},
            "paymentConfigs": [
                {
                    "paymentMode": "POINTS",
                    "id": 344,
                    "points": 100.0000
                }
            ]
        },
        {
            "id": 206610,
            "name": "$10 cash back reward",
            "status": "LIVE",
            "startTime": "2024-07-26 07:38:00",
            "endTime": "2024-07-26 07:38:00",
            "type": "VOUCHER",
            "priority": 1,
            "enabled": true,
            "intouchPoints": 1000,
            "redemptionType": "INTOUCH_REWARD",
            "groups": [],
            "rewardRank": null,
            "customFields": {},
            "paymentConfigs": [
                {
                    "paymentMode": "POINTS",
                    "id": 345,
                    "points": 100.0000
                }
            ]
        },
        {
            "id": 206610,
            "name": "$10 Nordstrom Notes",
            "status": "LIVE",
            "startTime": "2024-07-26 07:38:00",
            "endTime": "2024-07-26 07:38:00",
            "type": "VOUCHER",
            "priority": 1,
            "enabled": true,
            "intouchPoints": 1000,
            "redemptionType": "INTOUCH_REWARD",
            "groups": [],
            "rewardRank": null,
            "customFields": {},
            "paymentConfigs": [
                {
                    "paymentMode": "POINTS",
                    "id": 345,
                    "points": 100.0000
                }
            ]
        }
    ]
}
```
```json 400 Error: Incorrect format  of startDate or endDate
{
    "status": {
        "success": false,
        "code": 400,
        "message": "start or end date should be passed in proper format yyyy-MM-dd'T'HH:mm'Z'"
    }
}
```