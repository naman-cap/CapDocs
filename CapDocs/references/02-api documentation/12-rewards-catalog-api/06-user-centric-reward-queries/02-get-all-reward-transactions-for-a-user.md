---
title: Get customer reward transactions
excerpt: ''
api:
  file: v1.json
  operationId: get-customer-reward-transactions
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
This API is used to retrieve list of rewards owned by them based on filters.

> 👍 Note
>
> * For detailed information about our APIs and for hands-on testing, refer documentation in [API overview](https://docs.capillarytech.com/reference/apioverview) and  step-by-step guide on making your first API call in [Make your first API call](https://docs.capillarytech.com/reference/make-your-first-api-call) .
> * The "Get all reward transactions for a user" API lists all reward issuance attempts, including failures, while the ["Get Purchased Rewards for user"](https://docs.capillarytech.com/update/reference/get-rewards-for-user-new-api#/) API shows only the rewards successfully received by the user.

# Prerequisites

*   Authentication: Basic or OAuth authentication
*   Default access group

# Resource information

|                        |                                                                           |
| :--------------------- | :------------------------------------------------------------------------ |
| URI                    | /api\_gateway/rewards/core/v1/management/customer`\{customerId\}`/issuals |
| HTTP Method            | GET                                                                       |
| Pagination             | Yes                                                                       |
| Batch support          | No                                                                        |
| Rate limit information | None                                                                      |

# API endpoint example

`https://eu.api.capillarytech.com/api_gateway/rewards/core/v1/management/customer/555567088/issuals?status=true&pointsRefIds=4xyMsS,s74PLp&redemptionType=INTOUCH_REWARD,MILES&ownerType=Journeys&ownerId=123&groupName=group1`

# Request path parameters

| Parameter Name | Data Type | Description                        |
| -------------- | --------- | ---------------------------------- |
| customerId\*   | String    | Unique identifier of the customer. |

# Request query parameters

| Parameter Name   | Data Type | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| :--------------- | :-------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Page`           | Integer   | Allows to retrieve details of a specific page.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| `Size`           | Long      | Results to show per page. Default - 100.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `status`         | Boolean   | Filter the reward transactions based on status of the issued reward. Set `status`=`true` to view successful transactions and `status`=`false` to view failed transactions. Successful transactions are the ones where the reward was issued whereas failed transactions are ones where the reward was not issued. If this parameter is not applied, the response by default gives both successful and failed transactions.                                                                                                                                                                                                                                                                 |
| `pointsRefIds`   | String    | The `pointsRedemptionRefIds` filters data based on Points Redemption Reference IDs which enables the users to trace back points redemption. Multiple pointsRefIds can be passed. The limit is **10**. The reward with pointsRedemptionRefIds will only be populated when this filter is passed. You get the pointsRedemptionRefIds when you redeem points using Issue Reward. **Example:** `pointsRefIds=4xyMsS,s74PLp`.                                                                                                                                                                                                                                                                   |
| `redemptionType` | Enum      | Retrieves rewards based on their redemption type. Reward redemption is when a customer uses their points/ cash to redeem a reward. **Supported values**: `GAMES, AUCTION, CART_PROMOTION, CASH_WALLET, VENDOR_ONLY_REWARD, VOUCHER, CASH_BACK, INTOUCH_REWARD, PHYSICAL_REWARD, CHARITY, MILES, GIFT_CARD, SWEEPSTAKES, VENDOR_INTOUCH_REWARD, CARD_DISC`. Use comma separated values to retrieve reward details for multiple redemption types. **Example:** `INTOUCH_REWARD`, `MILES` The values are case sensitive. This parameter fetches both, failed and successful reward issue transactions. To filter successful transactions for a specific redemption type, set `status`=`true`. |
| `ownerType`      | Enum      | Module for which the reward was created. Supported values: `Loyalty program, Milestones, Campaigns, Journeys, Goodwill`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `ownerId`        | String    | Unique identifier of the owner.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| `groupName`      | String    | Retrieves rewards associated with a specific group name.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `rewardId`       | Integer   | Use the rewardId parameter to filter and return specific reward details.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |

<br />

```curl
https://eu.api.capillarytech.com/api_gateway/rewards/core/v1/management/customer/555567088/issuals?status=true&pointsRefIds=4xyMsS,s74PLp&redemptionType=INTOUCH_REWARD,MILES&ownerType=Journeys&ownerId=123&groupName=group1
```
```Text with rewardId
curl --location 'https://devenv-crm.cc.capillarytech.com/api_gateway/rewards/core/v1/management/customer/423789294/issuals?size=10&rewardId=38774' \
--header 'Accept: application/json' \
--header 'Content-Type: application/json' \
--header 'Authorization: Basic YXV0b3N0b3JlMS50aWxsMS0xNjgwMTY5MjIxOjIwMmNiOTYyYWM1OTA3NWI5NjRiMDcxNTJkMjM0Yjcw' \
--data ''
```
```Text With pointsRefIds
curl --location 'https://eu.api.capillarytech.com/api_gateway/rewards/core/v1/management/customer/555567088/issuals?status=true&pointsRefIds=4xyMsS%2Cs74PLp' \
--header 'Authorization: Basic aWFtc2blahblahjJlODM4ZjhlMzRkNWI1YTI5MWY=' \
--header 'Cookie: _cfuvid=79wEuUbCVDJ7OujN3BMnNzQASUKFLMRObQTCp7TZv9Y-1734519029257-0.0.1.1-604800000; _cfuvid=wyOhPjyopEethoQrBBNm9fzccPfMP6H1FD60qRHEwJU-1737534439107-0.0.1.1-604800000; _cfuvid=wyOhPjyopEethoQrBBNm9fzccPfMP6H1FD60qRHEwJU-1737534439107-0.0.1.1-604800000'
```
```Text With redemptionType
curl --location 'https://eu.api.capillarytech.com/api_gateway/rewards/core/v1/management/customer/555567088/issuals?status=true&redemptionType=INTOUCH_REWARD%2CMILES' \
--header 'Authorization: Basic aWFtc2blahblahjJlODM4ZjhlMzRkNWI1YTI5MWY=' \
--header 'Cookie: _cfuvid=79wEuUbCVDJ7OujN3BMnNzQASUKFLMRObQTCp7TZv9Y-1734519029257-0.0.1.1-604800000; _cfuvid=wyOhPjyopEethoQrBBNm9fzccPfMP6H1FD60qRHEwJU-1737534439107-0.0.1.1-604800000; _cfuvid=wyOhPjyopEethoQrBBNm9fzccPfMP6H1FD60qRHEwJU-1737534439107-0.0.1.1-604800000'
```
```Text With ownerType and ownerId
curl --location 'https://eu.api.capillarytech.com/api_gateway/rewards/core/v1/management/customer/555567088/issuals?status=true&ownerType=Journeys&ownerId=123' \
--header 'Authorization: Basic aWFtc2blahblahjJlODM4ZjhlMzRkNWI1YTI5MWY=' \
--header 'Cookie: _cfuvid=79wEuUbCVDJ7OujN3BMnNzQASUKFLMRObQTCp7TZv9Y-1734519029257-0.0.1.1-604800000; _cfuvid=wyOhPjyopEethoQrBBNm9fzccPfMP6H1FD60qRHEwJU-1737534439107-0.0.1.1-604800000; _cfuvid=wyOhPjyopEethoQrBBNm9fzccPfMP6H1FD60qRHEwJU-1737534439107-0.0.1.1-604800000'
```

# Response parameters

| Parameter Name         | Description                                                                                                                                                                                                                                                                            |
| ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| success                | Indicates if the operation was successful.                                                                                                                                                                                                                                             |
| code                   | The HTTP status code of the operation.                                                                                                                                                                                                                                                 |
| message                | Descriptive message about the operation's outcome.                                                                                                                                                                                                                                     |
| rewardTransactionId    | Unique identifier for the reward transaction.                                                                                                                                                                                                                                          |
| rewardIssueRefId       | Reference ID associated with the reward issue.                                                                                                                                                                                                                                         |
| rewardTransactionDate  | Date and time of the reward transaction in milliseconds since epoch.                                                                                                                                                                                                                   |
| status                 | Nested object containing the status of the reward issue.                                                                                                                                                                                                                               |
| success                | Indicates if the reward was issued successfully.                                                                                                                                                                                                                                       |
| code                   | Status code for the reward issue transaction.                                                                                                                                                                                                                                          |
| message                | Status message for the reward issue transaction.                                                                                                                                                                                                                                       |
| rewardDetails          | Nested object containing details of the issued reward.                                                                                                                                                                                                                                 |
| rewardId               | Unique identifier of the reward.                                                                                                                                                                                                                                                       |
| languageCode           | Language code of the reward details (e.g., "en" for English).                                                                                                                                                                                                                          |
| name                   | Name of the reward.                                                                                                                                                                                                                                                                    |
| description            | Description of the reward.                                                                                                                                                                                                                                                             |
| termNConditionsId      | Unique identifier for the terms and conditions of the reward.                                                                                                                                                                                                                          |
| termNConditionsUrl     | URL to the terms and conditions of the reward.                                                                                                                                                                                                                                         |
| imageId                | Unique identifier for the image associated with the reward.                                                                                                                                                                                                                            |
| imageUrl               | URL to the image associated with the reward.                                                                                                                                                                                                                                           |
| thumbnailId            | Unique identifier for the thumbnail image associated with the reward.                                                                                                                                                                                                                  |
| thumbnailUrl           | URL to the thumbnail image associated with the reward.                                                                                                                                                                                                                                 |
| enabled                | Indicates whether the reward is enabled.                                                                                                                                                                                                                                               |
| ownerType              | Type of the owner associated with the reward transaction.                                                                                                                                                                                                                              |
| ownerId                | Identifier of the owner associated with the reward transaction.                                                                                                                                                                                                                        |
| pointsRedemptionRefIds | A unique identifier generated each time rewards are issued. This field stores a list of these identifiers, allowing you to track multiple points redemption transactions. You have to pass the `pointsRefId` as a Query param to populate the data of Points Redemption Reference IDs. |
| fulfillmentStatus      | Details about the fulfillment status.                                                                                                                                                                                                                                                  |
| eventDateTime          | Date and time when a triggering event (transactional or behavioural) occurred, initiating the reward earning. Time format: UTC time format (YYYY-MM-DDTHH:MM:SSZ).                                                                                                                     |
| issueDateTime          | Date and time when the reward was awarded to the customer. Time format: UTC time format (YYYY-MM-DDTHH:MM:SSZ).                                                                                                                                                                        |
| redemptionType         | Details about the redemption type of the reward.                                                                                                                                                                                                                                       |
| last                   | Indicates if the current page is the last.                                                                                                                                                                                                                                             |
| totalElements          | Total number of elements across all pages.                                                                                                                                                                                                                                             |
| totalPages             | Total number of pages.                                                                                                                                                                                                                                                                 |
| numberOfElements       | Number of elements in the current page.                                                                                                                                                                                                                                                |
| first                  | Indicates if the current page is the first.                                                                                                                                                                                                                                            |
| size                   | Number of elements per page.                                                                                                                                                                                                                                                           |
| number                 | The current page number.                                                                                                                                                                                                                                                               |

<br />

```json 200 OK
{
    "status": {
        "success": true,
        "code": 200,
        "message": "Reward issue transactions fetched successfully"
    },
    "rewardIssueTransactions": [
        {
            "rewardTransactionId": "106046",
            "rewardIssueRefId": "TX6910268",
            "rewardTransactionDate": 1699903848000,
            "status": {
                "success": true,
                "code": 200,
                "message": "Reward issued successfully"
            },
            "rewardDetails": {
                "rewardId": 13,
                "languageCode": "en",
                "name": "150 off on handbags and wallets",
                "description": "150 off on handbags and wallets",
                "termNConditionsId": "36797a3b-7726-4d75-ad8b-aa1dc0bd7874",
                "termNConditionsUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/5f259983-5671-453e-af25-c9d1293.html",
                "imageId": "04bbabf2-ce9d-48b3-9a58-347479b8ea88",
                "imageUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/969c2707-e082-4cc5-bbad-48f6ae1.jpeg",
                "thumbnailId": "d287af72-80bd-40c8-98c3-68a28eb3cf66",
                "thumbnailUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/3a8f00ea-bb30-4eeb-9175-663afbb.jpeg",
                "enabled": true,
                "groups": [],
                "rewardRank": 2
            },
            "ownerType": null,
            "ownerId": "",
            "pointsRedemptionRefIds": [
                "62TXWX"
            ],
            "fulfillmentStatus": null,
            "redemptionType": null,
            "eventDateTime": "2023-11-13T19:30:48Z",
            "issueDateTime": "2023-11-13T19:30:48Z"
        },
        {
            "rewardTransactionId": "104616",
            "rewardIssueRefId": "TX8347787",
            "rewardTransactionDate": 1699438177000,
            "status": {
                "success": true,
                "code": 200,
                "message": "Reward issued successfully"
            },
            "rewardDetails": {
                "rewardId": 13,
                "languageCode": "en",
                "name": "150 off on handbags and wallets",
                "description": "150 off on handbags and wallets",
                "termNConditionsId": "36797a3b-7726-4d75-ad8b-aa1dc0bd7874",
                "termNConditionsUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/5f259983-5671-453e-af25-c9d1293.html",
                "imageId": "04bbabf2-ce9d-48b3-9a58-347479b8ea88",
                "imageUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/969c2707-e082-4cc5-bbad-48f6ae1.jpeg",
                "thumbnailId": "d287af72-80bd-40c8-98c3-68a28eb3cf66",
                "thumbnailUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/3a8f00ea-bb30-4eeb-9175-663afbb.jpeg",
                "enabled": true,
                "groups": [],
                "rewardRank": 2
            },
            "ownerType": null,
            "ownerId": "",
            "pointsRedemptionRefIds": [
                "VE0Bdc"
            ],
            "fulfillmentStatus": null,
            "redemptionType": null,
            "eventDateTime": "2023-11-08T10:09:37Z",
            "issueDateTime": "2023-11-08T10:09:37Z"
        },
        {
            "rewardTransactionId": "104603",
            "rewardIssueRefId": "TX1348483",
            "rewardTransactionDate": 1699437488000,
            "status": {
                "success": true,
                "code": 200,
                "message": "Promotion issued successfully"
            },
            "rewardDetails": {
                "rewardId": 82520,
                "languageCode": "en",
                "name": "Buy One Iced Mocha Get one free",
                "description": "Buy One Iced Mocha Get one free",
                "termNConditionsId": "1e68866e-34d3-4a14-b9ff-562e30686c7b",
                "termNConditionsUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/d7ed38ac-f957-4f3c-8fc4-c8e0099.html",
                "imageId": "f07b278d-944f-4442-8550-b33112cdc385",
                "imageUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/4371230f-57e0-46d3-b197-79875735.jpg",
                "thumbnailId": "4b9cef78-03fa-444d-ad39-ad91a553f013",
                "thumbnailUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/e59e3f19-0d39-4dd6-be66-dc074272.jpg",
                "enabled": true,
                "groups": [],
                "rewardRank": null
            },
            "ownerType": null,
            "ownerId": "",
            "pointsRedemptionRefIds": [
                "wB75ca"
            ],
            "fulfillmentStatus": null,
            "redemptionType": null,
            "eventDateTime": "2023-11-08T09:58:08Z",
            "issueDateTime": "2023-11-08T09:58:08Z"
        },
        {
            "rewardTransactionId": "104602",
            "rewardIssueRefId": "TX1653611",
            "rewardTransactionDate": 1699437422000,
            "status": {
                "success": true,
                "code": 200,
                "message": "Promotion issued successfully"
            },
            "rewardDetails": {
                "rewardId": 69702,
                "languageCode": "en",
                "name": "Flat Rs.100 off",
                "description": "Get Rs.100 off when you buy items worth Rs.2000 and more",
                "termNConditionsId": "973d6beb-8165-4815-9702-c3d9dd982644",
                "termNConditionsUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/7e463956-6f6b-462f-b2f3-7709bb2.html",
                "imageId": "d82cdf53-f145-428c-b654-e8e402f1b4b0",
                "imageUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/1d3921a6-bf33-40e3-93e2-2c34822.jpeg",
                "thumbnailId": "25a17765-c0c6-4852-bc53-0e81fa9eae07",
                "thumbnailUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/7ece6d99-3ef0-442b-ba07-d1b029f.jpeg",
                "enabled": true,
                "groups": [],
                "rewardRank": null
            },
            "ownerType": null,
            "ownerId": "",
            "pointsRedemptionRefIds": [
                "25TXlN"
            ],
            "fulfillmentStatus": null,
            "redemptionType": null,
            "eventDateTime": "2023-11-08T09:57:02Z",
            "issueDateTime": "2023-11-08T09:57:02Z"
        },
        {
            "rewardTransactionId": "104601",
            "rewardIssueRefId": "TX5106292",
            "rewardTransactionDate": 1699437421000,
            "status": {
                "success": true,
                "code": 200,
                "message": "Promotion issued successfully"
            },
            "rewardDetails": {
                "rewardId": 69702,
                "languageCode": "en",
                "name": "Flat Rs.100 off",
                "description": "Get Rs.100 off when you buy items worth Rs.2000 and more",
                "termNConditionsId": "973d6beb-8165-4815-9702-c3d9dd982644",
                "termNConditionsUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/7e463956-6f6b-462f-b2f3-7709bb2.html",
                "imageId": "d82cdf53-f145-428c-b654-e8e402f1b4b0",
                "imageUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/1d3921a6-bf33-40e3-93e2-2c34822.jpeg",
                "thumbnailId": "25a17765-c0c6-4852-bc53-0e81fa9eae07",
                "thumbnailUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/7ece6d99-3ef0-442b-ba07-d1b029f.jpeg",
                "enabled": true,
                "groups": [],
                "rewardRank": null
            },
            "ownerType": null,
            "ownerId": "",
            "pointsRedemptionRefIds": [
                "fLZzLu"
            ],
            "fulfillmentStatus": null,
            "redemptionType": null,
            "eventDateTime": "2023-11-08T09:57:01Z",
            "issueDateTime": "2023-11-08T09:57:01Z"
        }
    ],
    "pagingDto": {
        "last": true,
        "totalElements": 15,
        "totalPages": 3,
        "numberOfElements": 5,
        "first": false,
        "size": 5,
        "number": 2
    }
}
```
```json Filter using pointsRefIds
{
    "status": {
        "success": true,
        "code": 200,
        "message": "Reward issue transactions fetched successfully"
    },
    "rewardIssueTransactions": [
        {
            "rewardTransactionId": "293260",
            "rewardIssueRefId": "transactionNumber",
            "rewardTransactionDate": 1732618023000,
            "status": {
                "success": true,
                "code": 200,
                "message": "Reward issued successfully"
            },
            "rewardDetails": {
                "rewardId": 272383,
                "languageCode": "en",
                "name": "testreward1",
                "description": "testreward1",
                "termNConditionsId": "820a3d7f-2601-405b-9f56-4a3ba8e9df73",
                "termNConditionsUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/06f0da4b-dd0b-48fe-b20d-1cadc76.html",
                "imageId": "bef4d522-2cf8-4fea-8087-376c449d5c85",
                "imageUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/86a1c214-a955-4b40-a2d7-d4dc279.jpeg",
                "thumbnailId": "c886f064-2b3f-4c19-9e86-7f7e5ab5ae04",
                "thumbnailUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/9e0dfad6-5b9d-4e2b-ac15-2870357.jpeg",
                "enabled": true,
                "groups": [],
                "rewardRank": 1
            },
            "ownerType":" LOYALTY_PROGRAM",
            "ownerId": "123",
            "pointsRedemptionRefIds": [
                "4xyMsS"
            ],
            "fulfillmentStatus": null
        }
    ],
    "pagingDto": {
        "last": true,
        "totalElements": 1,
        "totalPages": 1,
        "numberOfElements": 1,
        "first": true,
        "size": 100,
        "number": 0
    }
}
```
```json Filter using redemptionType
{
    "status": {
        "success": true,
        "code": 200,
        "message": "Reward issue transactions fetched successfully"
    },
    "rewardIssueTransactions": [
        {
            "rewardTransactionId": "293260",
            "rewardIssueRefId": "transactionNumber",
            "rewardTransactionDate": 1732618023000,
            "status": {
                "success": true,
                "code": 200,
                "message": "Reward issued successfully"
            },
            "rewardDetails": {
                "rewardId": 272383,
                "languageCode": "en",
                "name": "testreward1",
                "description": "testreward1",
                "termNConditionsId": "820a3d7f-2601-405b-9f56-4a3ba8e9df73",
                "termNConditionsUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/06f0da4b-dd0b-48fe-b20d-1cadc76.html",
                "imageId": "bef4d522-2cf8-4fea-8087-376c449d5c85",
                "imageUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/86a1c214-a955-4b40-a2d7-d4dc279.jpeg",
                "thumbnailId": "c886f064-2b3f-4c19-9e86-7f7e5ab5ae04",
                "thumbnailUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/9e0dfad6-5b9d-4e2b-ac15-2870357.jpeg",
                "enabled": true,
                "groups": [],
                "rewardRank": 1
            },
            "ownerType": null,
            "ownerId": "",
            "pointsRedemptionRefIds": null,
            "fulfillmentStatus": null,
            "redemptionType": "MILES"
        },
        {
            "rewardTransactionId": "293259",
            "rewardIssueRefId": "transactionNumber",
            "rewardTransactionDate": 1732617999000,
            "status": {
                "success": true,
                "code": 200,
                "message": "Reward issued successfully"
            },
            "rewardDetails": {
                "rewardId": 272383,
                "languageCode": "en",
                "name": "testreward1",
                "description": "testreward1",
                "termNConditionsId": "820a3d7f-2601-405b-9f56-4a3ba8e9df73",
                "termNConditionsUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/06f0da4b-dd0b-48fe-b20d-1cadc76.html",
                "imageId": "bef4d522-2cf8-4fea-8087-376c449d5c85",
                "imageUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/86a1c214-a955-4b40-a2d7-d4dc279.jpeg",
                "thumbnailId": "c886f064-2b3f-4c19-9e86-7f7e5ab5ae04",
                "thumbnailUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/9e0dfad6-5b9d-4e2b-ac15-2870357.jpeg",
                "enabled": true,
                "groups": [],
                "rewardRank": 1
            },
            "ownerType": null,
            "ownerId": "",
            "pointsRedemptionRefIds": null,
            "fulfillmentStatus": null,
            "redemptionType": "MILES"
        },
        {
            "rewardTransactionId": "293175",
            "rewardIssueRefId": "transactionNumber",
            "rewardTransactionDate": 1732605302000,
            "status": {
                "success": true,
                "code": 200,
                "message": "Reward issued successfully"
            },
            "rewardDetails": {
                "rewardId": 272383,
                "languageCode": "en",
                "name": "testreward1",
                "description": "testreward1",
                "termNConditionsId": "820a3d7f-2601-405b-9f56-4a3ba8e9df73",
                "termNConditionsUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/06f0da4b-dd0b-48fe-b20d-1cadc76.html",
                "imageId": "bef4d522-2cf8-4fea-8087-376c449d5c85",
                "imageUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/86a1c214-a955-4b40-a2d7-d4dc279.jpeg",
                "thumbnailId": "c886f064-2b3f-4c19-9e86-7f7e5ab5ae04",
                "thumbnailUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/9e0dfad6-5b9d-4e2b-ac15-2870357.jpeg",
                "enabled": true,
                "groups": [],
                "rewardRank": 1
            },
            "ownerType": null,
            "ownerId": "",
            "pointsRedemptionRefIds": null,
            "fulfillmentStatus": null,
            "redemptionType": "MILES"
        },
        {
            "rewardTransactionId": "286244",
            "rewardIssueRefId": "107",
            "rewardTransactionDate": 1731564661000,
            "status": {
                "success": true,
                "code": 200,
                "message": "Reward issued successfully"
            },
            "rewardDetails": {
                "rewardId": 265893,
                "languageCode": "en",
                "name": "testreward1",
                "description": "testreward1",
                "termNConditionsId": "820a3d7f-2601-405b-9f56-4a3ba8e9df73",
                "termNConditionsUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/06f0da4b-dd0b-48fe-b20d-1cadc76.html",
                "imageId": "bef4d522-2cf8-4fea-8087-376c449d5c85",
                "imageUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/86a1c214-a955-4b40-a2d7-d4dc279.jpeg",
                "thumbnailId": "c886f064-2b3f-4c19-9e86-7f7e5ab5ae04",
                "thumbnailUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/9e0dfad6-5b9d-4e2b-ac15-2870357.jpeg",
                "enabled": true,
                "groups": [],
                "rewardRank": 1
            },
            "ownerType": null,
            "ownerId": "",
            "pointsRedemptionRefIds": null,
            "fulfillmentStatus": null,
            "redemptionType": "INTOUCH_REWARD"
        },
        {
            "rewardTransactionId": "213560",
            "rewardIssueRefId": "107",
            "rewardTransactionDate": 1720702639000,
            "status": {
                "success": true,
                "code": 200,
                "message": "Reward issued successfully"
            },
            "rewardDetails": {
                "rewardId": 198827,
                "languageCode": "en",
                "name": "testreward1",
                "description": "testreward1",
                "termNConditionsId": "820a3d7f-2601-405b-9f56-4a3ba8e9df73",
                "termNConditionsUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/06f0da4b-dd0b-48fe-b20d-1cadc76.html",
                "imageId": "bef4d522-2cf8-4fea-8087-376c449d5c85",
                "imageUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/86a1c214-a955-4b40-a2d7-d4dc279.jpeg",
                "thumbnailId": "c886f064-2b3f-4c19-9e86-7f7e5ab5ae04",
                "thumbnailUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/9e0dfad6-5b9d-4e2b-ac15-2870357.jpeg",
                "enabled": true,
                "groups": [],
                "rewardRank": 1
            },
            "ownerType": null,
            "ownerId": "",
            "pointsRedemptionRefIds": null,
            "fulfillmentStatus": null,
            "redemptionType": "INTOUCH_REWARD"
        }
    ],
    "pagingDto": {
        "last": true,
        "totalElements": 7,
        "totalPages": 1,
        "numberOfElements": 7,
        "first": true,
        "size": 200,
        "number": 0
    }
}
```
```json Filter using groupName
{
    "status": {
        "success": true,
        "code": 200,
        "message": "Reward issue transactions fetched successfully"
    },
    "rewardIssueTransactions": [
        {
            "rewardTransactionId": "289752",
            "rewardIssueRefId": "1732091931",
            "rewardTransactionDate": 1732091931000,
            "status": {
                "success": true,
                "code": 200,
                "message": "Reward issued successfully"
            },
            "rewardDetails": {
                "rewardId": 268608,
                "languageCode": "en",
                "name": "testreward1",
                "description": "testreward1",
                "termNConditionsId": "820a3d7f-2601-405b-9f56-4a3ba8e9df73",
                "termNConditionsUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/06f0da4b-dd0b-48fe-b20d-1cadc76.html",
                "imageId": "bef4d522-2cf8-4fea-8087-376c449d5c85",
                "imageUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/86a1c214-a955-4b40-a2d7-d4dc279.jpeg",
                "thumbnailId": "c886f064-2b3f-4c19-9e86-7f7e5ab5ae04",
                "thumbnailUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/9e0dfad6-5b9d-4e2b-ac15-2870357.jpeg",
                "enabled": true,
                "groups": [
                    {
                        "groupName": "The Home Depot",
                        "groupRank": 1
                    },
                    {
                        "groupName": "Kellanova Rewards",
                        "groupRank": 2
                    }
                ],
                "rewardRank": 1
            },
            "ownerType": null,
            "ownerId": "",
            "pointsRedemptionRefIds": null,
            "fulfillmentStatus": null,
            "redemptionType": null
        }
    ],
    "pagingDto": {
        "last": true,
        "totalElements": 1,
        "totalPages": 1,
        "numberOfElements": 1,
        "first": true,
        "size": 200,
        "number": 0
    }
}
```
```Text With rewardId filter
{
    "status": {
        "success": true,
        "code": 200,
        "message": "Reward issue transactions fetched successfully"
    },
    "rewardIssueTransactions": [
        {
            "rewardTransactionId": "93926",
            "rewardIssueRefId": "1743490093",
            "rewardTransactionDate": 1743490093000,
            "status": {
                "success": false,
                "code": 1010,
                "message": "redemption id passed doesn't exist"
            },
            "rewardDetails": {
                "rewardId": 38774,
                "languageCode": "en",
                "name": " INTOUCH Enabled",
                "description": "Description",
                "termNConditionsId": "EXDR12987R",
                "termNConditionsUrl": null,
                "imageId": "EXDR12987U",
                "imageUrl": null,
                "thumbnailId": "EXDR12987T",
                "thumbnailUrl": null,
                "enabled": true,
                "groups": [],
                "rewardRank": null
            },
            "ownerType": null,
            "ownerId": "",
            "pointsRedemptionRefIds": null,
            "fulfillmentStatus": null,
            "redemptionType": "CART_PROMOTION",
            "eventDateTime": "2025-04-01T06:48:13Z",
            "issueDateTime": "2025-04-01T06:48:13Z"
        },
        {
            "rewardTransactionId": "93925",
            "rewardIssueRefId": "1743490092",
            "rewardTransactionDate": 1743490093000,
            "status": {
                "success": false,
                "code": 1010,
                "message": "redemption id passed doesn't exist"
            },
            "rewardDetails": {
                "rewardId": 38774,
                "languageCode": "en",
                "name": " INTOUCH Enabled",
                "description": "Description",
                "termNConditionsId": "EXDR12987R",
                "termNConditionsUrl": null,
                "imageId": "EXDR12987U",
                "imageUrl": null,
                "thumbnailId": "EXDR12987T",
                "thumbnailUrl": null,
                "enabled": true,
                "groups": [],
                "rewardRank": null
            },
            "ownerType": null,
            "ownerId": "",
            "pointsRedemptionRefIds": null,
            "fulfillmentStatus": null,
            "redemptionType": "CART_PROMOTION",
            "eventDateTime": "2025-04-01T06:48:13Z",
            "issueDateTime": "2025-04-01T06:48:13Z"
        },
        {
            "rewardTransactionId": "93924",
            "rewardIssueRefId": "Transaction-1743490091000",
            "rewardTransactionDate": 1743490092000,
            "status": {
                "success": false,
                "code": 12005,
                "message": "Reward constraint evaluation failed. Request failed. Max limit for the DAYS is reached. Allowed limit is 2 For Level CUSTOMER"
            },
            "rewardDetails": {
                "rewardId": 38774,
                "languageCode": "en",
                "name": " INTOUCH Enabled",
                "description": "Description",
                "termNConditionsId": "EXDR12987R",
                "termNConditionsUrl": null,
                "imageId": "EXDR12987U",
                "imageUrl": null,
                "thumbnailId": "EXDR12987T",
                "thumbnailUrl": null,
                "enabled": true,
                "groups": [],
                "rewardRank": null
            },
            "ownerType": null,
            "ownerId": "",
            "pointsRedemptionRefIds": null,
            "fulfillmentStatus": null,
            "redemptionType": "CART_PROMOTION",
            "eventDateTime": "2025-04-01T06:48:12Z",
            "issueDateTime": "2025-04-01T06:48:12Z"
        },
        {
            "rewardTransactionId": "93923",
            "rewardIssueRefId": "1743490091",
            "rewardTransactionDate": 1743490091000,
            "status": {
                "success": false,
                "code": 1010,
                "message": "redemption id passed doesn't exist"
            },
            "rewardDetails": {
                "rewardId": 38774,
                "languageCode": "en",
                "name": " INTOUCH Enabled",
                "description": "Description",
                "termNConditionsId": "EXDR12987R",
                "termNConditionsUrl": null,
                "imageId": "EXDR12987U",
                "imageUrl": null,
                "thumbnailId": "EXDR12987T",
                "thumbnailUrl": null,
                "enabled": true,
                "groups": [],
                "rewardRank": null
            },
            "ownerType": null,
            "ownerId": "",
            "pointsRedemptionRefIds": null,
            "fulfillmentStatus": null,
            "redemptionType": "CART_PROMOTION",
            "eventDateTime": "2025-04-01T06:48:11Z",
            "issueDateTime": "2025-04-01T06:48:11Z"
        }
    ],
    "pagingDto": {
        "last": true,
        "totalElements": 4,
        "totalPages": 1,
        "numberOfElements": 4,
        "first": true,
        "size": 10,
        "number": 0
    }
}
```

<br />

<HTMLBlock>{`
<style>
.InputGroupe2EvBGz2cnqy {
    display: flex;
    gap: 2px;
    position: relative;
}

.Button.APIRequest-example-button1DGMsfaOTVNW {
* Core working text behavior - don't change these *
    position: relative;
    width: 140px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 6px 12px;
    text-align: left;
    transition: width 0.2s ease-out;
    z-index: 1;
    display: block;
    direction: ltr;
    unicode-bidi: embed;
    padding-right: 20px;
    
* Only minimal visual updates *
    background: #1e2329;
    border: none;
    border-radius: 6px;
    color: #94a3b8;
    font-size: 13px;
}

* Keep original text handling *
.Button.APIRequest-example-button1DGMsfaOTVNW span,
.Button.APIRequest-example-button1DGMsfaOTVNW div {
    text-align: left;
    direction: ltr;
}

* Keep original hover behavior *
.Button.APIRequest-example-button1DGMsfaOTVNW:hover {
    width: auto;
    z-index: 10;
    background: #262b33;
}

* Simple active state *
.Button.APIRequest-example-button1DGMsfaOTVNW.APIRequest-example-button_activeXJeukHyaHZXB {
    z-index: 20;
    background: #2c333d;
    color: #ffffff;
}
</style>
`}</HTMLBlock>