---
title: Get all customer badges
excerpt: ''
api:
  file: v1.json
  operationId: get-all-customer-badges
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
This API allows you to retrieve lists of badges available for enrollment, available for issual, earned, and expired badges for a particular customer.

> 👍 Note
>
> * For detailed information about our APIs and for hands-on testing, refer documentation in [API overview](https://docs.capillarytech.com/reference/apioverview) and  step-by-step guide on making your first API call in [Make your first API call](https://docs.capillarytech.com/reference/make-your-first-api-call) .
> * Start time and end time are in UTC zone

# Prerequisites

*   Authentication: Basic or OAuth authentication
*   Default access group

# Resource information

|                        |                                                 |
| :--------------------- | :---------------------------------------------- |
| URI                    | api\_gateway/v1/badges/management`{customerId}` |
| HTTP Method            | GET                                             |
| Pagination             | Yes                                             |
| Batch support          | No                                              |
| Rate limit information | None                                            |

# Headers

To retrieve customers based on their email ID, mobile number, external ID or card number pass the `X-CAP-CUSTOMER-IDENTIFIER`.\
The supported values are:

1. email
2. mobile
3. externalId
4. cardNumber

Example: X-CAP-CUSTOMER-IDENTIFIER: email

# API endpoint example

Endpoint: [https://eucrm.cc.capillarytech.com/api\_gateway/v1/badges/management/62090013?badgeStatus=UPCOMING\&badgeType=AVAILABLE\&page=0\&size=50](https://eucrm.cc.capillarytech.com/api_gateway/v1/badges/management/62090013?badgeStatus=UPCOMING\&badgeType=AVAILABLE\&page=0\&size=50)

Endpoint using the X-CAP-CUSTOMER-IDENTIFIER: email header: `https://eucrm.cc.capillarytech.com/api_gateway/v1/badges/management/tom.sawyer@capillarytech.com`

# Request path parameters

<Table align={["left","left","left"]}>
  <thead>
    <tr>
      <th>
        Parameter Name
      </th>

      <th>
        Data Type
      </th>

      <th>
        Description
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        customerId\*
      </td>

      <td>
        String
      </td>

      <td>
        Unique ID of the customer.
      </td>
    </tr>

    <tr>
      <td>
        sortOn
      </td>

      <td>
        Enum
      </td>

      <td>
        `LAST_EARNED_ON_DATE`: Sorts customer badges by the last date they were earned.
        `LAST_EARNED_EVENT_DATE`: Sorts customer badges by the last event date when they were earned.
      </td>
    </tr>
  </tbody>
</Table>

# Request query parameters

| Parameter Name    | Data Type | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| :---------------- | :-------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Page              | Integer   | Number of pages.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Size              | Integer   | Size of the page. Default: 10                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| sortOn            | Enum      | `EXPIRES_ON` \[Default]: Sorts customer badges by their expiration date. `LAST_MODIFIED_DATE`: Sorts customer badges by the last date they were modified. `LAST_ISSUED_DATE`: Sorts customer badges by the last date they were issued. `LAST_EXPIRED_BADGE`: Sorts customer badges by the last date they expired. `LAST_EARNED_EVENT_DATE`: Sorts customer badges by the last event date when they were earned. `LAST_EARNED_ON_DATE`: Sorts customer badges by the last date they were earned. |
| order             | Enum      | Sort the rewards based on order of rewards. Supported Values: `DESC` \[Default], `ASC`                                                                                                                                                                                                                                                                                                                                                                                                          |
| name              | String    | Name of badge                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| badgeType         | Enum      | The type of badge to display. Supported Values: `AVAILABLE_TO_ISSUE`: Filters the badges of the type Enrol and Issue. This is the default filter. `AVAILABLE`: Filters the badges of the type Direct Issue that are available to be earned directly by the customer. `EARNED`: Filters the badges that are issued by the customer and are active in the customer's profile. `EXPIRED`: Filters the badges that are expired.                                                                     |
| action            | Enum      | Indicates if the badge is active. Supported values: `ACTIVATED`, `DEACTIVATED`                                                                                                                                                                                                                                                                                                                                                                                                                  |
| badgeStatus       | Enum      | Status of badge. Supported values: `UPCOMING`, `LIVE`, `EXPIRED`                                                                                                                                                                                                                                                                                                                                                                                                                                |
| owner             | Enum      | Type of owner the badge is associated with. Supported values: `Loyalty`, `Loyalty_Promotion`, `Referral_Campaigns`, `Journeys`, `Audience_Campaigns`, `Rewards_Catalog`, `Goodwill_Module`, `Milestones`, `Historical_Import`                                                                                                                                                                                                                                                                   |
| claimedBy         | Enum      | The badge claimed by the module. Supported values: `Loyalty`, `Loyalty_Promotion`, `Referral_Campaigns`, `Journeys`, `Audience_Campaigns`, `Rewards_Catalog`, `Goodwill_Module`, `Milestones`, `Historical_Import`                                                                                                                                                                                                                                                                              |
| startOn           | Date      | Start date of the badge. Timestamp in the ISO 8601 standard format `YYYY-MM-DDTHH:MM:SS.SSSZ`.                                                                                                                                                                                                                                                                                                                                                                                                  |
| expiresOn         | Date      | The expiry date of the badge. Timestamp in the ISO 8601 standard format `YYYY-MM-DDTHH:MM:SS.SSSZ`.                                                                                                                                                                                                                                                                                                                                                                                             |
| startOnOperator   | Enum      | startOn of badge w\.r.t to passed startOn. Supported values: `LESS_THAN`, `GREATER_THAN`                                                                                                                                                                                                                                                                                                                                                                                                        |
| expiresOnOperator | Enum      | expiresOn of badge w\.r.t to passed expiresOn. Supported values: `LESS_THAN`, `GREATER_THAN`                                                                                                                                                                                                                                                                                                                                                                                                    |
| groupId           | String    | Badge group ID to which the badge belongs. Retrieves only the badges belonging to the specified badge group ID.                                                                                                                                                                                                                                                                                                                                                                                 |

```text URL
https://eucrm.cc.capillarytech.com/api_gateway/v1/badges/management/tom.sawyer@capillarytech.com
```
```Text Request URL using the header
https://eucrm.cc.capillarytech.com/api_gateway/v1/badges/management/swati.jain@capillarytech.com
```

# Response parameters

| Parameter                    | Data Type | Description                                                                                                                                                              |
| :--------------------------- | :-------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| name                         | String    | The name of the badge.                                                                                                                                                   |
| description                  | String    | A brief description of the badge.                                                                                                                                        |
| badgeMetaId                  | String    | The unique identifier for the badge metadata.                                                                                                                            |
| badgeType                    | String    | The type of badge.                                                                                                                                                       |
| createdOn                    | Float     | The Unix timestamp marking when the badge was created.                                                                                                                   |
| lastUpdatedOn                | Float     | The timestamp with the most recent update to the badge.                                                                                                                  |
| images                       | Object    | A collection of image objects associated with the badge.                                                                                                                 |
| badgeStatus                  | String    | The status of the badge.                                                                                                                                                 |
| lastEarnedOn                 | Float     | The timestamp marking when the badge was last earned.                                                                                                                    |
| startsOn                     | Float     | The timestamp marking the start date/time for the badge's validity.                                                                                                      |
| expiresOn                    | Float     | The timestamp marking the expiration date/time for the badge.                                                                                                            |
| earnCount                    | Integer   | The number of times the badge has been earned.                                                                                                                           |
| issueStatus                  | String    | The status of the badge issue.                                                                                                                                           |
| active                       | Boolean   | Indicates whether the badge is currently active.                                                                                                                         |
| page                         | Integer   | The current page number of the pagination.                                                                                                                               |
| size                         | Integer   | The number of items per page in the pagination.                                                                                                                          |
| total                        | Integer   | The total number of items available across all pages.                                                                                                                    |
| totalPages                   | Integer   | The total number of pages available.                                                                                                                                     |
| errors                       | Array     | A collection of any errors that occurred during the request. Typically empty if no errors occurred.                                                                      |
| warnings                     | Array     | A collection of warnings that arose during the request. Typically empty if no warnings occurred.                                                                         |
| badgeGroupId                 | String    | Unique group ID associated with the badge.                                                                                                                               |
| badgeRank                    | Integer   | Badge rank is the rank of a badge within a group.                                                                                                                        |
| badgeGroupName               | Integer   | Name of the badge group.                                                                                                                                                 |
| ownership                    | Object    | The module for which the badge is being created.                                                                                                                         |
| ownership.restrictedToOwners | Array     | Specifies the owner categories that are allowed to claim the badge.                                                                                                      |
| ownership.claims             | Array     | Specifies the owner by which the badge has been claimed.                                                                                                                 |
| lastEarnEventDate            | Float     | Date and time when a triggering event (transactional or behavioural) occurred, initiating the badge earning. Time format: Epoch format (UNIX timestamp in milliseconds). |
| lastEarnedOnDate             | Float     | Date and time when the badge was awarded to the customer. Time format: Epoch format (UNIX timestamp in milliseconds).                                                    |

```json
{
    "data": {
        "customerBadges": [
            {
                "name": "Automation_Test_Badge_Issue_2023-12-11 13:20:36.812999",
                "description": "Automation_Test_Badge_Issue_2023-12-11 13:20:36.812999",
                "badgeMetaId": "6576bf1191e0b01c659ad5d6",
                "badgeType": "ISSUE_EARN",
                "badgeGroupId": null,
                "badgeGroupName": null,
                "badgeRank": null,
                "createdOn": 1702280977.051000000,
                "lastUpdatedOn": 1702280979.343000000,
                "images": [
                    {
                        "name": "unearned1",
                        "fileSvcHandle": "qwer-8634-8938",
                        "url": "https://badge.url",
                        "tag": "UN_EARNED"
                    },
                    {
                        "name": "unearned",
                        "fileSvcHandle": "qwer-8634-8938",
                        "url": "https://badge.url",
                        "tag": "IN_PROGRESS"
                    }
                ],
                "badgeStatus": "EXPIRED",
                "lastEarnedOn": null,
                "startsOn": 1701416976.000000000,
                "expiresOn": 1702367376.000000000,
                "earnCount": 0,
                "ownership": {
                    "restrictedToOwners": [
                        "Audience_Campaigns"
                    ],
                    "claims": [
                        {
                            "ownerType": "Audience_Campaigns",
                            "referenceId": "1175688",
                            "isActive": true
                        }
                    ]
                },
                "issueStatus": null,
                "active": true,
                "lastEarnedOnDate": 1748890800,
                "lastEarnEventDate": 1748880000
            }
        ],
        "pagination": {
            "page": 0,
            "size": 10,
            "total": 11,
            "totalPages": 2
        }
    },
    "errors": [],
    "warnings": []
}
```
```json when badgeType=EARNED
{
    "data": {
        "customerBadges": [
            {
                "name": "demoBadgeName001",
                "description": "testing-fixed-window-7-2",
                "badgeMetaId": "666638f0ae20cb256ec13e23",
                "badgeType": "EARN",
                "badgeGroupId": null,
                "badgeGroupName": null,
                "badgeRank": null,
                "createdOn": 1717975279.579000000,
                "lastUpdatedOn": 1717975460.583000000,
                "images": [
                    {
                        "name": "string",
                        "fileSvcHandle": "string",
                        "url": "string",
                        "tag": "UN_EARNED"
                    }
                ],
                "badgeStatus": "LIVE",
                "lastEarnedOn": 1718083872.611000000,
                "startsOn": 1707523237.192000000,
                "expiresOn": 1730246437.192000000,
                "earnCount": 2,
                "ownership": {
                    "restrictedToOwners": [
                        "Loyalty_Promotion"
                    ],
                    "claims": [
                        {
                            "ownerType": "Loyalty_Promotion",
                            "referenceId": "12332345",
                            "isActive": true
                        }
                    ]
                },
                "issueStatus": null,
                "active": true,
                "lastEarnedOnDate": 1748886600,
                "lastEarnEventDate": 1748880000
            }
        ],
        "pagination": {
            "page": 0,
            "size": 3,
            "total": 3,
            "totalPages": 1
        }
    },
    "errors": [],
    "warnings": []
}
```
```json When badgeType=EARNED and badgeStatus=LIVE
{
    "data": {
        "customerBadges": [
            {
                "name": "demoBadgeName001",
                "description": "testing-fixed-window-7-2",
                "badgeMetaId": "666638f0ae20cb256ec13e23",
                "badgeType": "EARN",
                "badgeGroupId": null,
                "badgeGroupName": null,
                "badgeRank": null,
                "createdOn": 1717975279.579000000,
                "lastUpdatedOn": 1717975460.583000000,
                "images": [
                    {
                        "name": "string",
                        "fileSvcHandle": "string",
                        "url": "string",
                        "tag": "UN_EARNED"
                    }
                ],
                "badgeStatus": "LIVE",
                "lastEarnedOn": 1718083872.611000000,
                "startsOn": 1707523237.192000000,
                "expiresOn": 1730246437.192000000,
                "earnCount": 2,
                "ownership": {
                    "restrictedToOwners": [
                        "Loyalty_Promotion"
                    ],
                    "claims": [
                        {
                            "ownerType": "Loyalty_Promotion",
                            "referenceId": "12332345",
                            "isActive": true
                        }
                    ]
                },
                "issueStatus": null,
                "active": true,
                "lastEarnedOnDate": 1748890800,
                "lastEarnEventDate": 1748880000
            }
        ],
        "pagination": {
            "page": 0,
            "size": 4,
            "total": 4,
            "totalPages": 1
        }
    },
    "errors": [],
    "warnings": []
}
```
```json When Owner=Loyalty and badgeType=EARNED
{
    "data": {
        "customerBadges": [
            {
                "name": "Badge Issue georgetesst",
                "description": "Make 5 transactions",
                "badgeMetaId": "67eb9e2d6666db076c3c7556",
                "badgeType": "ISSUE_EARN",
                "badgeGroupId": null,
                "badgeGroupName": null,
                "badgeRank": 3,
                "createdOn": 1743494701.636000000,
                "lastUpdatedOn": 1743494735.479000000,
                "images": [
                    {
                        "name": "Issued",
                        "fileSvcHandle": "qwer-8634-8938",
                        "url": "https://firebasestorage.googleapis.com/v0/b/createbadges.appspot.com/o/images%2Fsuccess1.jpg?alt=media&token=66b2f0bc-9c55-4e33-a5e9-c6be96d94f2d",
                        "tag": "EARNED"
                    }
                ],
                "badgeStatus": "LIVE",
                "lastEarnedOn": 1743494913.679000000,
                "startsOn": 1735715131.000000000,
                "expiresOn": 1764572731.000000000,
                "earnCount": 1,
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
                            "referenceId": "12341234",
                            "isActive": true
                        }
                    ]
                },
                "issueStatus": null,
                "lastEarnedOnDate": 1743494923.451000000,
                "lastEarnEventDate": 1743494913.679000000,
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
```json When badgeStatus=UPCOMING and badgeType=AVAILABLE
{
    "data": {
        "customerBadges": [
            {
                "name": "badge issual3",
                "description": "Purchase products worth minimum 1K in the month of March and get this badge",
                "badgeMetaId": "6673b08c39c6a546eb054726",
                "badgeType": "EARN",
                "badgeGroupId": null,
                "badgeGroupName": null,
                "badgeRank": 1,
                "createdOn": 1718857868.451,
                "lastUpdatedOn": 1718857868.451,
                "images": [],
                "badgeStatus": "UPCOMING",
                "lastEarnedOn": null,
                "startsOn": 1818857606,
                "expiresOn": 1828857606,
                "earnCount": 0,
                "ownership": {
                    "restrictedToOwners": [
                        "Loyalty"
                    ],
                    "claims": []
                },
                "issueStatus": null,
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
```json When badgeType=EXPIRED
{
    "data": {
        "customerBadges": [
            {
                "name": "demoName",
                "description": "demoDescription",
                "badgeMetaId": "6655729a8be1b54e57d602f1",
                "badgeType": "EARN",
                "badgeGroupId": null,
                "badgeGroupName": null,
                "badgeRank": null,
                "createdOn": 1716875930.419,
                "lastUpdatedOn": 1716875930.419,
                "images": [
                    {
                        "name": "string",
                        "fileSvcHandle": "string",
                        "url": "string",
                        "tag": "UN_EARNED"
                    }
                ],
                "badgeStatus": "EXPIRED",
                "lastEarnedOn": null,
                "startsOn": 1707523237.192,
                "expiresOn": 1711756837.192,
                "earnCount": 0,
                "ownership": {
                    "restrictedToOwners": [
                        "Loyalty_Promotion"
                    ],
                    "claims": []
                },
                "issueStatus": null,
                "active": true
            }
        ],
        "pagination": {
            "page": 0,
            "size": 10,
            "total": 17,
            "totalPages": 2
        }
    },
    "errors": [],
    "warnings": []
}
```
```json Filter by group ID
{
    "data": {
        "customerBadges": [
            {
                "name": "Birthday Badge",
                "description": "Make a purchase during your birthday month and get a 40% discount coupon",
                "badgeMetaId": "653dea07b3cda7078c7c68ee",
                "badgeType": "ISSUE_EARN",
                "badgeGroupId": "65c3600c60d9261bdd8a6410",
                "badgeGroupName": "2024 Badges",
                "badgeRank": 2,
                "createdOn": 1698556674.481000000,
                "lastUpdatedOn": 1716454946.522000000,
                "images": [
                    {
                        "name": "",
                        "fileSvcHandle": "6d5bbab0-e75c-46c4-ac61-e9f7efeb8863",
                        "url": "https://storage.crm.eu.content-cdn.io/fs.capillary.eu/incentives_assets/badges/images/100606/653dea07b3cda7078c7c68ee_EARNED_P-Hmb96D.png",
                        "tag": "EARNED"
                    },
                    {
                        "name": "",
                        "fileSvcHandle": "8be2b78e-b1d6-4127-926a-2cbed7eb2785",
                        "url": "https://storage.crm.eu.content-cdn.io/fs.capillary.eu/incentives_assets/badges/images/100606/653dea07b3cda7078c7c68ee_UN_EARNED_vDx_DRdk.png",
                        "tag": "UN_EARNED"
                    }
                ],
                "badgeStatus": "LIVE",
                "lastEarnedOn": null,
                "startsOn": 1698557400.000000000,
                "expiresOn": 1828754110.000000000,
                "earnCount": null,
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
                "issueStatus": null,
                "active": true
            }
        ],
        "pagination": {
            "page": 0,
            "size": 2,
            "total": 2,
            "totalPages": 1
        }
    },
    "errors": [],
    "warnings": []
}
```