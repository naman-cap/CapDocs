---
title: Revoke issued badge
excerpt: ''
api:
  file: v1.json
  operationId: revoke-issual-of-a-badge
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
This API allows you to revoke an issued badge (earned badge by the customer).

> 👍 Note
>
> For detailed information about our APIs and for hands-on testing, refer documentation in [API overview](https://docs.capillarytech.com/reference/apioverview) and step-by-step guide on making your first API call in [Make your first API call](https://docs.capillarytech.com/reference/make-your-first-api-call).

# Prerequisites

*   Authentication: Basic or OAuth authentication
*   Default access group

# Resource information

|               |                                             |
| :------------ | :------------------------------------------ |
| URI           | /api\_gateway/v1/badges/customer/revokeEarn |
| HTTP method   | POST                                        |
| Rate limit    | NA                                          |
| Batch support | NA                                          |

# Headers

To revoke a customer badge based on their email ID, mobile number, external ID or card number pass the `X-CAP-CUSTOMER-IDENTIFIER`.\
The supported values are:

1. email
2. mobile
3. externalId
4. cardNumber

Example: `X-CAP-CUSTOMER-IDENTIFIER: email`

# API endpoint example

`<https://eucrm.cc.capillarytech.com/api_gateway/v1/badges/customer/revokeEarn>`

# Request body parameters

| Parameter       | Data Type | Description                                                         |
| --------------- | --------- | ------------------------------------------------------------------- |
| badgeMetaId\*   | String    | Unique identifier ("id") generated during the creation of the badge |
| customerId\*    | String    | Unique identifier of the customer.                                  |
| earnedBadgeId\* | String    | Earned Badge ID generated during the badge issue.                   |

```json
{
  "badgeMetaId": "653ddb33b3cda7078c7c68e9",
  "customerId": 62090013,
  "earnedBadgeId": "654cbea06bccde1274b6d3a2"
}
```
```json using X-CAP-CUSTOMER-IDENTIFIER header
{
  "badgeMetaId": "653de84db3cda7078c7c68ed",
  "customerId": "tom.sawyer@capillarytech.com",
  "earnedBadgeId": "6659551c304b6e0b517b7bc7"
}
```

# Response parameters

| Parameter     | Data Type | Description                                                       |
| ------------- | --------- | ----------------------------------------------------------------- |
| badgeMetaId   | String    | Unique identifier for the badge metadata.                         |
| customerId    | Number    | Unique identifier for the customer.                               |
| earnedBadgeId | String    | Unique identifier for the earned badge.                           |
| isActive      | Boolean   | Indicates whether the badge is active (true) or inactive (false). |

```json 200 OK
{
    "data": {
        "badgeMetaId": "653ddb33b3cda7078c7c68e9",
        "customerId": 62090013,
        "earnedBadgeId": "654cbea06bccde1274b6d3a2",
        "isActive": false
    },
    "errors": [],
    "warnings": []
}
```
```json
{
    "data": {
        "badgeMetaId": "653de84db3cda7078c7c68ed",
        "customerId": 62090013,
        "earnedBadgeId": "6659551c304b6e0b517b7bc7",
        "isActive": false
    },
    "errors": [],
    "warnings": []
}
```

# API-specific error codes

| Error code | Description                          |
| :--------- | :----------------------------------- |
| 814        | Active earn instance is not present. |