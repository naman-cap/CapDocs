---
title: Update activation status of badge
excerpt: ''
api:
  file: v1.json
  operationId: update-the-activation-status-of-badge
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
This API allows you to update the activation status of the badge.

> 👍 Note
>
> For detailed information about our APIs and for hands-on testing, refer documentation in [API overview](https://docs.capillarytech.com/reference/apioverview) and step-by-step guide on making your first API call in [Make your first API call](https://docs.capillarytech.com/reference/make-your-first-api-call).

# Prerequisites

*   Authentication: Basic or OAuth authentication
*   Default access group

# Resource information

|               |                                                                    |
| :------------ | :----------------------------------------------------------------- |
| URI           | /api\_gateway/v1/badges/badgeMeta/`{badgeId}`/`{activationStatus}` |
| HTTP method   | PUT                                                                |
| Pagination    | NA                                                                 |
| Rate limit    | NA                                                                 |
| Batch support | NA                                                                 |

# API endpoint example

`https://eucrm.cc.capillarytech.com/api_gateway/v1/badges/badgeMeta/6543688e66a87827bb61e62a/activate`

# Request path parameter

| Parameter          | Data Type | Description                                                            |
| ------------------ | --------- | ---------------------------------------------------------------------- |
| activationStatus\* | Enum      | Activation status of the badge. Supported values: Activate, Deactivate |
| badgeId\*          | String    | Unique identifier ("id") generated during the creation of the badge    |

```bash When activationStatus=activate
https://eucrm.cc.capillarytech.com/api_gateway/v1/badges/badgeMeta/6543688e66a87827bb61e62a/activate
```
```Text When activationStatus=deactivate
https://eucrm.cc.capillarytech.com/api_gateway/v1/badges/badgeMeta/6543688e66a87827bb61e62a/deactivate
```

# Response parameter

| Parameter | Data Type | Description                            |
| --------- | --------- | -------------------------------------- |
| id        | String    | Unique identifier for the badge.       |
| isActive  | Boolean   | Indicates whether the badge is active. |
| errors    | Array     | Contains details of any errors.        |
| warnings  | Array     | Contains details of any warnings.      |

```json When activationStatus=activate
{
    "data": {
        "id": "6543688e66a87827bb61e62a",
        "isActive": true
    },
    "errors": [],
    "warnings": []
}
```
```json When activationStatus=deactivate
{
    "data": {
        "id": "6543688e66a87827bb61e62a",
        "isActive": false
    },
    "errors": [],
    "warnings": []
}
```