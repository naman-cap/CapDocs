---
title: Enrol customers for badges
excerpt: ''
api:
  file: v1.json
  operationId: enrol-customers-for-badges
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
This API allows you to enroll customers for badges. The badges are issued based on the fulfillment criteria.

> 👍 Note
>
> * For detailed information about our APIs and for hands-on testing, refer documentation in [API overview](https://docs.capillarytech.com/reference/apioverview) and step-by-step guide on making your first API call in [Make your first API call](https://docs.capillarytech.com/reference/make-your-first-api-call).
> * A badge can be issued via MemberCare without any owners or claim.

# Prerequisites

*   Authentication: Basic or OAuth authentication
*   Default access group

# Resource information

|               |                                                      |
| :------------ | :--------------------------------------------------- |
| URI           | /api\_gateway/v1/badges/badgeMeta/customer/issueBulk |
| HTTP method   | POST                                                 |
| Pagination    | NA                                                   |
| Rate limit    | NA                                                   |
| Batch support | NA                                                   |

# API endpoint example

`https://eucrm.cc.capillarytech.com/api_gateway/v1/badges/badgeMeta/customer/issueBulk`

# Request body parameters

| Parameter      | Data Type | Description                                                                                                                                                                                                            |
| -------------- | --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| badgeMetaId\*  | String    | Unique identifier ("id") generated during the creation of the badge                                                                                                                                                    |
| customers      | Array     | Array of customer identifiers associated with the badge.                                                                                                                                                               |
| requestId      | String    | Enter a unique identifier to identify the request.                                                                                                                                                                     |
| issueEventDate | String    | The date on which the customer was enrolled in the badge. Issue event date has to be between the badge start date and end date. Timestamp in epoch time.                                                               |
| triggeredBy    | Object    | Object containing information about what triggered the action.                                                                                                                                                         |
| ownerType      | Enum      | The module for which the badge has been created. Supported values: Loyalty, Loyalty\_Promotion, Referral\_Campaigns, Journeys, Audience\_Campaigns, Rewards\_Catalog, Goodwill\_Module, Milestones, Historical\_Import |
| referenceId    | String    | Enter a unique identifier to identify the owner (ownerType).                                                                                                                                                           |

```json Single customers
{
    "badgeMetaId": "66276dc68fe258516a88ff8e",
    "customers": [
  62090013
    ],
    "requestId": "21390",
    "issueEventDate" : 1713860055,
    "triggeredBy": {
        "ownerType": "Loyalty",
        "referenceId": "123694"
    }
}
```
```json Multiple customers
{
    "badgeMetaId": "653de84db3cda7078c7c68ed",
    "customers": [
        62090013, 123
    ],
    "requestId": "10few789",
  	"issueEventDate" : 1713860055,
    "triggeredBy": {
        "ownerType": "Loyalty",
        "referenceId": "626"
    }
}
```

# Response parameters

| Parameter    | Data Type | Description                                                         |
| ------------ | --------- | ------------------------------------------------------------------- |
| badgeMetaId  | String    | Unique identifier ("id") generated during the creation of the badge |
| triggeredBy  | Object    | Contains details about the trigger for the badge.                   |
| ownerType    | String    | Type of owner.                                                      |
| referenceId  | String    | Enter a user input identifier to link the owner of the badge.       |
| expiresOn    | Number    | The time indicating when the badge expires.                         |
| issuedBadges | Array     | Array of objects representing issued badges.                        |
| customerId   | Number    | Unique identifier for the customer associated with the badge.       |
| issuedId     | String    | Unique identifier for the issued badge.                             |
| requestId    | String    | Enter a unique input as the identifier for the request.             |
| errors       | Array     | Array to list any errors.                                           |
| warnings     | Array     | Array to list any warnings.                                         |

```json Single customer
{
    "data": {
        "badgeMetaId": "66276dc68fe258516a88ff8e",
        "triggeredBy": {
            "ownerType": "Loyalty",
            "referenceId": "123694"
        },
        "expiresOn": 1926235957.000000000,
        "issuedBadges": [
            {
                "customerId": 62090013,
                "issuedId": "66276df28fe258516a88ff8f",
                "error": null
            }
        ],
        "requestId": "21390"
    },
    "errors": [],
    "warnings": []
}
```
```json Multiple customers
{
    "data": {
        "badgeMetaId": "653de84db3cda7078c7c68ed",
        "triggeredBy": {
            "ownerType": "Loyalty",
            "referenceId": "626"
        },
        "expiresOn": 1702120189.407903000,
        "issuedBadges": [
            {
                "customerId": 123,
                "issuedId": "654cbdfd6bccde1274b6d3a0",
                "error": null
            },
            {
                "customerId": 62090013,
                "issuedId": "653e024bb3cda7078c7c6903",
                "error": null
            }
        ],
        "requestId": "10few789"
    },
    "errors": [],
    "warnings": []
}
```

# API-specific error codes

| Error code | Description                                                             |
| :--------- | :---------------------------------------------------------------------- |
| 809        | Request with the same requestId is not allowed                          |
| 816        | Event date is not in duration of badge meta. Pass the issue event date. |