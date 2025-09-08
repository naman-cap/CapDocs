---
title: Get badges for customer
excerpt: ''
api:
  file: v1.json
  operationId: get-badges-for-customer
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
This API allows you to retrieve all the details of the badge (Available and Earned) of the customer.

For example: Users earn badges for achieving various goals set by the brand and using this API, the users can view both earned badges and also check the available badges for them to earn.

> 👍 Note
>
> For detailed information about our APIs and for hands-on testing, refer documentation in [API overview](https://docs.capillarytech.com/reference/apioverview) and  step-by-step guide on making your first API call in [Make your first API call](https://docs.capillarytech.com/reference/make-your-first-api-call) .

# Prerequisites

*   Authentication: Basic or OAuth authentication
*   Default access group

# Resource information

|                      |                                                 |
| :------------------- | :---------------------------------------------- |
| URI                  | /api\_gateway/v1/badges/customer/`{customerId}` |
| HTTP method          | GET                                             |
| Pagination supported | Yes                                             |
| Rate limit           | NA                                              |
| Batch support        | NA                                              |

# Headers

To retrieve customers based on their email ID, mobile number, external ID or card number pass the `X-CAP-CUSTOMER-IDENTIFIER`.\
The supported values are:

1. Email ID
2. Mobile number
3. External ID
4. Card number

Example: `X-CAP-CUSTOMER-IDENTIFIER: email`

# API endpoint example

Endpoint: `https://eucrm.cc.capillarytech.com/api_gateway/v1/badges/customer{customerId}`

Endpoint using the `X-CAP-CUSTOMER-IDENTIFIER: email` header: `https://eucrm.cc.capillarytech.com/api_gateway/v1/badges/customer{email ID}`

# API cURL Examples

```curl
curl --location 'https://eu.api.capillarytech.com/api_gateway/v1/badges/customer/565039504' \
--header 'Accept: application/json' \
--header 'Content-Type: application/json' \
--header 'accept: application/json' \
--header 'Authorization: Basic Z2VvcmdlLmpvaG5zb246OTg4OTU2NWI4ODVhMmY4ZWE1MTk1MjA2NWEwYTEzNzg=' \
--header 'Cookie: _cfuvid=pDcK3FYcGs86zaO.Nm3dErmATpyR5j3nnGAtlkTM0Sk-1745211210745-0.0.1.1-604800000'
```
```json Request using the header
https://eucrm.cc.capillarytech.com/api_gateway/v1/badges/customer/tom.sawyer@capillarytech.com
```
```json Request with group ID filter
https://eucrm.cc.capillarytech.com/api_gateway/v1/badges/customer/62090013?groupId=65c3600c60d9261bdd8a6410
```

# Request path parameters

| Parameter    | Data Type | Description                        |
| :----------- | :-------- | :--------------------------------- |
| customerId\* | String    | Unique identifier of the customer. |

# Request query parameters

| Parameter      | Data Type | Description                                                                                                                                                                                                                                                                         |
| -------------- | --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| badgeType      | Enum      | The type of badge to display. Supported Values:<br />`AVAILABLE`: Filters the badges of the type Direct Issue that are available to be earned directly by the customer.<br />`EARNED`: Filters the badges that are issued by the customer and are active in the customer's profile. |
| sortOn         | Enum      | `RANK`: Enables sorting of badges based on rank.<br />`LAST_EARNED_ON_DATE`: Sorts customer badges by the last date they were earned.<br />`LAST_EARNED_EVENT_DATE`: Sorts customer badges by the last event date when they were earned.                                            |
| includeExpired | Boolean   | Include expired badges of the customer.                                                                                                                                                                                                                                             |
| Limit          | Integer   | Number of results. For example, number 10 retrieves the first 10 rows of the query results. Default value: 10.                                                                                                                                                                      |
| groupId        | string    | Badge group ID the badge belongs to. Retrieves only the badges belonging to the specified badge group ID.                                                                                                                                                                           |

# Response parameters

| Parameter                    | Data Type | Description                                                                                                                                                              |
| :--------------------------- | :-------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| badgeMetaId                  | String    | Unique identifier for each badge.                                                                                                                                        |
| orgId                        | Integer   | Identifier for the organization issuing the badge.                                                                                                                       |
| name                         | String    | Name of the badge.                                                                                                                                                       |
| description                  | String    | Description of what the badge represents or how it can be earned.                                                                                                        |
| startOn                      | Float     | Timestamp indicating when the badge becomes available.                                                                                                                   |
| expiresOn                    | Float     | Timestamp indicating when the badge offer expires.                                                                                                                       |
| name                         | String    | Name associated with the badge image.                                                                                                                                    |
| fileSvcHandle                | String    | Handle for the file service managing the badge images.                                                                                                                   |
| url                          | String    | URL where the badge image is stored.                                                                                                                                     |
| earnType                     | String    | Type of earning associated with the badge (e.g., 'ISSUE\_EARN').                                                                                                         |
| customerConstraints          | Object    | Constraints specific to customers for earning the badge.                                                                                                                 |
| badgeConstraints             | Object    | Badge constraints associated with the badge.                                                                                                                             |
| earnedCount                  | Integer   | Number of times the badge has been earned, if applicable.                                                                                                                |
| active                       | Boolean   | Indicates whether the badge meta is currently active or not.                                                                                                             |
| limit                        | Integer   | Number of results. For example, number 10 retrieves the first 10 rows of the query results. Default value: 10.                                                           |
| custom fields                | Array     | A list of custom fields associated with the badge.                                                                                                                       |
| badgeGroupId                 | String    | Unique group ID associated with the badge.                                                                                                                               |
| badgeRank                    | Integer   | Badge rank is the rank of a badge within a group.                                                                                                                        |
| badgeGroupName               | Integer   | Name of the badge group.                                                                                                                                                 |
| ownership                    | Object    | Specifies the ownership rule for the module.                                                                                                                             |
| ownership.restrictedToOwners | Array     | Specifies the owner categories that are allowed to claim the badge.                                                                                                      |
| ownership.claims             | Array     | Specifies the owner by which the badge has been claimed.                                                                                                                 |
| lastEarnEventDate            | Float     | Date and time when a triggering event (transactional or behavioural) occurred, initiating the badge earning. Time format: Epoch format (UNIX timestamp in milliseconds). |
| lastEarnedOnDate             | Float     | Date and time when the badge was awarded to the customer. Time format: Epoch format (UNIX timestamp in milliseconds).                                                    |

```json Available badges
{
    "data": {
        "badges": [
            {
                "badgeMetaId": "67eb99516666db076c3c7519",
                "orgId": 100737,
                "name": "Badge Issue georgetest",
                "description": "Make 5 transactions",
                "startOn": 1735715131.000000000,
                "expiresOn": 1926235957.000000000,
                "images": [
                    {
                        "name": "Issued",
                        "fileSvcHandle": "qwer-8634-8938",
                        "url": "https://firebasestorage.googleapis.com/v0/b/createbadges.appspot.com/o/images%2Fsuccess1.jpg?alt=media&token=66b2f0bc-9c55-4e33-a5e9-c6be96d94f2d",
                        "tag": "EARNED"
                    }
                ],
                "tags": [],
                "badgeGroupId": null,
                "badgeGroupName": null,
                "badgeRank": 3,
                "ownership": {
                    "restrictedToOwners": [
                        "Milestones",
                        "Audience_Campaigns",
                        "Historical_Import",
                        "Journeys",
                        "Loyalty",
                        "Rewards_Catalog",
                        "Loyalty_Promotion",
                        "Goodwill_Module",
                        "Referral_Campaigns"
                    ],
                    "claims": [
                        {
                            "ownerType": "Loyalty",
                            "referenceId": "1234",
                            "isActive": true
                        }
                    ]
                },
                "earnType": "ISSUE_EARN",
                "benefits": [
                    {
                        "benefitType": "COUPON",
                        "seriesId": 13745
                    }
                ],
                "customerConstraints": [
                    {
                        "constraintType": "CUSTOMER_BADGE_FIXED_WINDOW",
                        "referenceId": "e6791ec9-e92f-34af-bdc3-be2607fdf82c",
                        "durationType": "DAYS",
                        "refreshRate": 3,
                        "maxEarnLimit": 2,
                        "cycleStatus": "ACTIVE",
                        "startDate": 1735715131.000000000,
                        "endDate": 1926235957.000000000
                    }
                ],
                "badgeConstraints": [
                    {
                        "constraintType": "BADGE_FIXED_VALUE",
                        "maxEarnLimit": 10000
                    },
                    {
                        "constraintType": "BADGE_ROLLING_WINDOW",
                        "rollType": "WEEKS",
                        "rollValue": 1,
                        "maxEarnLimit": 3000
                    },
                    {
                        "constraintType": "BADGE_ROLLING_WINDOW",
                        "rollType": "DAYS",
                        "rollValue": 1,
                        "maxEarnLimit": 300
                    }
                ],
                "earnedCount": null,
                "lastEarnedOnDate": null,
                "lastEarnEventDate": null,
                "customFields": {},
                "active": true
            },
            {
                "badgeMetaId": "67eb95754c0c691f66b39b50",
                "orgId": 100737,
                "name": "Badge Issue Test",
                "description": "Make 5 transactions",
                "startOn": 1716803487.000000000,
                "expiresOn": 1926235957.000000000,
                "images": [],
                "tags": [],
                "badgeGroupId": null,
                "badgeGroupName": null,
                "badgeRank": 3,
                "ownership": {
                    "restrictedToOwners": [
                        "Audience_Campaigns"
                    ],
                    "claims": []
                },
                "earnType": "ISSUE_EARN",
                "benefits": [],
                "customerConstraints": [],
                "badgeConstraints": [],
                "earnedCount": null,
                "lastEarnedOnDate": null,
                "lastEarnEventDate": null,
                "customFields": {},
                "active": true
            },
            {
                "badgeMetaId": "67eb912a4c0c691f66b39b37",
                "orgId": 100737,
                "name": "BadgeISSUAL33",
                "description": "Make 5 transactions",
                "startOn": 1716803487.000000000,
                "expiresOn": 1926235957.000000000,
                "images": [],
                "tags": [],
                "badgeGroupId": null,
                "badgeGroupName": null,
                "badgeRank": 3,
                "ownership": {
                    "restrictedToOwners": [
                        "Audience_Campaigns"
                    ],
                    "claims": []
                },
                "earnType": "ISSUE_EARN",
                "benefits": [],
                "customerConstraints": [],
                "badgeConstraints": [],
                "earnedCount": null,
                "lastEarnedOnDate": null,
                "lastEarnEventDate": null,
                "customFields": {},
                "active": true
            },
            {
                "badgeMetaId": "67eb889a6666db076c3c74ac",
                "orgId": 100737,
                "name": "BadgeISSUALGEORGE",
                "description": "Make 5 transactions",
                "startOn": 1716803487.000000000,
                "expiresOn": 1926235957.000000000,
                "images": [],
                "tags": [],
                "badgeGroupId": null,
                "badgeGroupName": null,
                "badgeRank": 3,
                "ownership": {
                    "restrictedToOwners": [
                        "Audience_Campaigns"
                    ],
                    "claims": []
                },
                "earnType": "ISSUE_EARN",
                "benefits": [],
                "customerConstraints": [],
                "badgeConstraints": [],
                "earnedCount": null,
                "lastEarnedOnDate": null,
                "lastEarnEventDate": null,
                "customFields": {},
                "active": true
            },
            {
                "badgeMetaId": "6790be86dfc7ed27674ac0d8",
                "orgId": 100737,
                "name": "BadgeDoc",
                "description": null,
                "startOn": 1737657000.000000000,
                "expiresOn": 1745519399.000000000,
                "images": [],
                "tags": [],
                "badgeGroupId": null,
                "badgeGroupName": null,
                "badgeRank": null,
                "ownership": {
                    "restrictedToOwners": [
                        "Audience_Campaigns"
                    ],
                    "claims": []
                },
                "earnType": "EARN",
                "benefits": [],
                "customerConstraints": [],
                "badgeConstraints": [],
                "earnedCount": null,
                "lastEarnedOnDate": null,
                "lastEarnEventDate": null,
                "customFields": {},
                "active": true
            }
        ],
        "pagination": {
            "page": 0,
            "size": 5,
            "total": 5,
            "totalPages": 1
        }
    },
    "errors": [],
    "warnings": []
}
```
```json Earned badges
{
    "data": {
        "badges": [
            {
                "badgeMetaId": "664442c560646c1208ede8f4",
                "orgId": 100458,
                "name": "string9",
                "description": "string",
                "startOn": 1684087053.29,
                "expiresOn": 1778781453.29,
                "images": [
                    {
                        "name": "string",
                        "fileSvcHandle": "string",
                        "url": "string",
                        "tag": "UN_EARNED"
                    }
                ],
                "badgeGroupId": null,
                "badgeGroupName": null,
                "badgeRank": null,
                "ownership": {
                    "restrictedToOwners": [
                        "Loyalty"
                    ],
                    "claims": [
                        {
                            "ownerType": "Loyalty",
                            "referenceId": "string",
                            "isActive": true
                        }
                    ]
                },
                "earnType": "EARN",
                "customerConstraints": [
                    {
                        "constraintType": "CUSTOMER_BADGE_ROLLING_WINDOW",
                        "maxEarnForDays": 10,
                        "rollForDays": 2,
                        "maxEarnForWeeks": null,
                        "rollForWeeks": null,
                        "maxEarnForMonths": 11,
                        "rollForMonths": 2
                    }
                ],
                "badgeConstraints": [],
                "earnedCount": 1,
                "lastEarnedOnDate": 1684500000.00,  
                "lastEarnEventDate": 1684503600.00,  
                "customFields": {},
                "active": true
            }
        ],
        "pagination": {
            "page": 0,
            "size": 1,
            "total": 1,
            "totalPages": 1
        }
    },
    "errors": [],
    "warnings": []
}

```
```json Earned badges- Fixed window
{
    "data": {
        "badges": [
           {
                "badgeMetaId": "662643308fe258516a88f924",
                "orgId": 100606,
                "name": "BADGE_ASDFG",
                "description": "Purchase products worth minimum 1K in the month of March and get this badge",
                "startOn": 1713865283.000000000,
                "expiresOn": 1828754110.000000000,
                "images": [],
                "tags": [],
                "badgeGroupId": null,
                "ownership": {
                    "restrictedToOwners": [
                        "Loyalty"
                    ],
                    "claims": [
                        {
                            "ownerType": "Loyalty",
                            "referenceId": "123210",
                            "isActive": true
                        }
                    ]
                },
                "badgeRank": null,
                "earnType": "EARN",
                "customerConstraints": [
                    {
                        "constraintType": "CUSTOMER_BADGE_FIXED_WINDOW",
                        "referenceId": "9fae3031-3abf-3936-b5df-311839c04910",
                        "durationType": "MONTHS",
                        "maxEarnLimit": 1,
                        "cycleStatus": "ACTIVE",
                        "startDate": 1713865283.000000000,
                        "endDate": 1828754110.000000000
                    }
                ],
                "badgeConstraints": [
                    {
                        "constraintType": "BADGE_FIXED_VALUE",
                        "maxEarnLimit": 1000
                    },
                    {
                        "constraintType": "BADGE_ROLLING_WINDOW",
                        "rollType": "WEEKS",
                        "rollValue": 1,
                        "maxEarnLimit": 2000
                    },
                    {
                        "constraintType": "BADGE_ROLLING_WINDOW",
                        "rollType": "MONTHS",
                        "rollValue": 1,
                        "maxEarnLimit": 10000
                    },
                    {
                        "constraintType": "BADGE_ROLLING_WINDOW",
                        "rollType": "DAYS",
                        "rollValue": 1,
                        "maxEarnLimit": 100
                    }
                ],
                "earnedCount": 1,
                "lastEarnedOnDate": 1713865283.000000000,
                "lastEarnEventDate": 1713865283.000000000,
                "customFields": {
                    "2024": "true",
                    "Date": "2025-01-18T09:09:09Z"
                },
                "active": true
            }
        ]
    }
}

```
```json Filter by Group ID
{
    "data": {
        "badges": [
            {
                "badgeMetaId": "653dea07b3cda7078c7c68ee",
                "orgId": 100606,
                "name": "Birthday Badge",
                "description": "Make a purchase during your birthday month and get a 40% discount coupon",
                "startOn": 1698557400.000000000,
                "expiresOn": 4872129400.000000000,
                "images": [
                    {
                        "name": "",
                        "fileSvcHandle": "8be2b78e-b1d6-4127-926a-2cbed7eb2785",
                        "url": "https://storage.crm.eu.content-cdn.io/fs.capillary.eu/incentives_assets/badges/images/100606/653dea07b3cda7078c7c68ee_UN_EARNED_vDx_DRdk.png",
                        "tag": "UN_EARNED"
                    },
                    {
                        "name": "",
                        "fileSvcHandle": "6d5bbab0-e75c-46c4-ac61-e9f7efeb8863",
                        "url": "https://storage.crm.eu.content-cdn.io/fs.capillary.eu/incentives_assets/badges/images/100606/653dea07b3cda7078c7c68ee_EARNED_P-Hmb96D.png",
                        "tag": "EARNED"
                    }
                ],
                "badgeGroupId": "65c3600c60d9261bdd8a6410",
                "badgeGroupName": "2024 Badges",
                "badgeRank": 2,
                "ownership": {
                    "restrictedToOwners": [
                        "Loyalty"
                    ],
                    "claims": [
                        {
                            "ownerType": "Loyalty",
                            "referenceId": "626",
                            "isActive": true
                        },
                        {
                            "ownerType": "Loyalty",
                            "referenceId": "626_TransactionAdd",
                            "isActive": true
                        },
                        {
                            "ownerType": "Loyalty",
                            "referenceId": "123",
                            "isActive": true
                        }
                    ]
                },
                "earnType": "ISSUE_EARN",
                "customerConstraints": [
                    {
                        "constraintType": "CUSTOMER_BADGE_FIXED_VALUE",
                        "maxEarnLimit": 1
                    }
                ],
                "badgeConstraints": [],
                "earnedCount": null,
                "customFields": {
                    "2024": "true",
                    "Date": "2025-01-18 14:39:09",
                    "Category1": "false",
                    "Priority": "1"
                },
                "active": true
            }
        ],
        "pagination": {
            "page": 0,
            "size": 1,
            "total": 1,
            "totalPages": 1
        }
    },
    "errors": [],
    "warnings": []
}
```

Sorting logic in getCall:

* Pass the query param sortOn=RANK in the Getcustomerbadges API to fetch the list of sorted badges as per the defined group and badge rank
* Preference will be given to the groups as per their ranking
* Within the group, preference will be given to the badges for which badge rank is defined, the rest of the badges with no badge rank will be sorted in default descending order of expired date
* If badges with no group are defined, they will be sorted in order of badge rank (if defined), followed by default descending order of expired date

# API-specific error codes

| Error code | Description                                  |
| :--------- | :------------------------------------------- |
| 1026       | Customer with the specified ID is not found. |
| 1028       | Invalid Customer Identifier type             |