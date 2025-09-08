---
title: Revoke enrolled badges
excerpt: ''
api:
  file: v1.json
  operationId: revoke-enrolment-of-a-badge
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
This API allows you to revoke the enrolment of a badge for the customer.

> 👍 Note
> 
> For detailed information about our APIs and for hands-on testing, refer documentation in [API overview](https://docs.capillarytech.com/reference/apioverview) and  step-by-step guide on making your first API call in [Make your first API call](https://docs.capillarytech.com/reference/make-your-first-api-call).

# Prerequisites

-   Authentication: Basic or OAuth authentication
-   Default access group

# Resource information

|               |                                                       |
| :------------ | :---------------------------------------------------- |
| URI           | /api_gateway/v1/badges/badgeMeta/customer/revokeIssue |
| HTTP method   | POST                                                  |
| Rate limit    | NA                                                    |
| Batch support | NA                                                    |

# API endpoint example

`https://eucrm.cc.capillarytech.com/api_gateway/v1/badges/badgeMeta/customer/revokeIssue`

# Request body parameters

| Parameter     | Data Type | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| ------------- | --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| badgeMetaId\* | String    | Unique identifier ("id") generated during the creation of the badge                                                                                                                                                                                                                                                                                                                                                                                                                    |
| customers\*   | Array     | Contains unique identifier for the customer related to the revoked badge. If customerId is passed and there are multiple issuances, all associated issuances will be revoked. Limit for passing customers and revokeIssuals are **20**.                                                                                                                                                                                                                                                |
| revokeIssuals | Array     | Contains the details of the customer (`customerId`) and the badge issue ID (`issueId`) that need to be revoked. **NOTE:** The fields customers and revokeIssuals are mutually exclusive, meaning only one of them should be provided at a time in the request. If revokeIssuals is passed, the API will only revoke the specified issualId provided in the request. If both customers and revokeIssuals are passed then revokeIssuals are given priority and customers will be ignore. |

```json With Revoke Issuals
{
   "badgeMetaId": "670371e39235f02fd5d71cbd",
   "revokeIssuals": [
       { "customerId": "387403362", "issueId": "236" },
       { "customerId": "387403360", "issueId": "234" }
   ]
}
```
```json With only customers
{
  "badgeMetaId": "654bb48766a87827bb61e631",
  "customers": [
    123,62090013
  ]
}
```

# Response parameters

| Parameter           | Description                                                         |
| ------------------- | ------------------------------------------------------------------- |
| badgeMetaId         | Unique identifier for the badge metadata.                           |
| revokedIssuedBadges | Contains details about the badges that were attempted to be revoked |
| customerId          | Unique identifier for the customer related to the revoked badge.    |
| issuedId            | Unique identifier for the issued badge that was revoked.            |
| error               | Object to indicate any errors.                                      |
| requestId           | A unique identifier for the request.                                |
| errors              | Array to list any errors.                                           |
| warnings            | Array to list any warnings.                                         |

```json Single customer
{
    "data": {
        "badgeMetaId": "653de84db3cda7078c7c68ed",
        "revokedIssuedBadges": [
            {
                "customerId": 62090013,
                "issuedId": "653e024bb3cda7078c7c6903",
                "error": null
            }
        ],
        "requestId": null
    },
    "errors": [],
    "warnings": []
}
```
```json Multiple customers
{
    "data": {
        "badgeMetaId": "654bb48766a87827bb61e631",
        "revokedIssuedBadges": [
            {
                "customerId": 123,
                "issuedId": "654cc02b6bccde1274b6d3a7",
                "error": null
            },
            {
                "customerId": 62090013,
                "issuedId": "654cc03e6bccde1274b6d3a9",
                "error": null
            }
        ],
        "requestId": null
    },
    "errors": [],
    "warnings": []
}
```
```json With Revoke Issuals
{
   "data": {
       "badgeMetaId": "66e3ef1b5abea9582ae4f301",
       "revokedIssuedBadges": [
           { "customerId": 12323, "issuedId": "66e3ef1e5abea9582ae4f302" }
       ]
   },
   "errors": [],
   "warnings": []
}
```
```json Failure: Customer is not issued
{
    "data": {
        "badgeMetaId": "670371e39235f02fd5d71cbd",
        "revokedIssuedBadges": [
            {
                "customerId": 555567088,
                "error": {
                    "code": 404,
                    "message": "Customer doesn't have issue instance",
                    "reference": null
                }
            }
        ],
        "requestId": null
    },
    "errors": [],
    "warnings": []
}
```
```json Failure: Issued badge doesn't belong to customer
{
  "data": {
    "badgeMetaId": "66e3d6335abea9582ae4f264",
    "revokedIssuedBadges": [
      {
        "customerId": 12323,
        "issuedId": "66e3ef1e5abea9582ae4f302",
        "error": {
          "message": "issue doesn't belong to customer",
          "reference": null
        }
      }
    ],
    "requestId": null
  },
  "errors": [],
  "warnings": []
}
```
```json Failure: RevokeIssuals or CustomerId is mandatory
{
    "data": null,
    "errors": [
        {
            "code": 1051,
            "message": "RevokeIssuals or CustomerId is mandatory",
            "reference": null
        }
    ],
    "warnings": null
}
```

# API-specific error codes

| Error code | Description                               |
| :--------- | :---------------------------------------- |
| 404        | Passed badge is not issued.               |
| 1051       | RevokeIssuals or CustomerId is not passed |