---
title: Retrieve Organization Sync Data
api:
  file: Retrieve Organization Sync Data.yaml
  operationId: getIntegrationv1syncorg7BorgId7D
hidden: false
---
This endpoint synchronize information of a specified organization.

# Prerequisites

*   Authentication: Basic or OAuth credentials
*   Default access group

# Resource information

|                        |                                   |
| :--------------------- | :-------------------------------- |
| URI                    | /integration/v1/sync/org/\[orgId] |
| HTTP Method            | GET                               |
| Pagination             | No                                |
| Batch support          | No                                |
| Rate limit information | Not specified                     |

### Endpoint

`GET http://ccurl/integration/v1/sync/org/{orgId}`

### Path Parameters

| Name    | Type   | Description                           |
| :------ | :----- | :------------------------------------ |
| `orgId` | string | Unique identifier of the organization |

## Request body sample

```curl
curl --request GET \
     --url http://host/integration/v1/sync/org/orgId \
     --header 'accept: application/json'
```