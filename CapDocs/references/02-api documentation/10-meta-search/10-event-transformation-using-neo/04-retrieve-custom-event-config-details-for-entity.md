---
title: Retrieve Custom Event Config Details for an Entity
excerpt: ''
api:
  file: v1.json
  operationId: retrieve-custom-event-config-details-for-entity
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
This API allows you to retrieve the custom event transformation logics created for an entity for your org.

> 👍 Note
>
> For detailed information about our APIs and for hands-on testing, refer documentation in [API overview](https://docs.capillarytech.com/reference/apioverview) and step-by-step guide on making your first API call in [Make your first API call](https://docs.capillarytech.com/reference/make-your-first-api-call).

# Prerequisites

*   Authentication: Basic/OAuth authentication
*   Default access group

# Resource Information

|               |                                                          |
| :------------ | :------------------------------------------------------- |
| URI           | /api\_gateway/cortex/v1/neo-config/entity/`{entityType}` |
| HTTP method   | GET                                                      |
| Pagination    | NA                                                       |
| Rate limit    | Default                                                  |
| Batch support | NA                                                       |

# API cURL example

```curl
curl --location --request GET 'eu.api.capillarytech.com/api_gateway/cortex/v1/neo-config/entity/TRANSACTION' \
--header 'Content-Type: application/json' \
--header 'Authorization: Basic bmlcmFqLmRvYzpiNGFmODA0MDA5Y2IwMzZhNGNjZGMzMzQzMWVmOWFjOQ==' \
--header 'Cookie: _cfuvid=dfGNwl01cEi2PH5VITS.zzfnmaVvZHqjsz8uMcy6KNA-1745384630231-0.0.1.1-604800000' \
--data '{
  "orgId": 100737,
  "entityType": "TRANSACTION",
  "transformEndpoint": "/transform/transaction/custom",
  "active": true
}'
```

# Path Parameter

| Parameter  | Description                                          |
| :--------- | :--------------------------------------------------- |
| entitytype | Entity type. Supported values: Transaction, Customer |

# Response Body

```json
{
  "data": {
    "orgId": 100737,
    "entityType": "TRANSACTION",
    "transformEndpoint": "/transform/transaction/custom",
    "active": true,
    "auditInfo": {
      "createdOn": "2025-04-23T06:59:56.411+00:00",
      "createdBy": 75155282,
      "lastUpdatedOn": "2025-04-23T07:06:33.947+00:00",
      "lastUpdatedBy": 75155282
    }
  },
  "errors": []
}
```

# Response Parameter

| **Parameter**                  | **Type** | **Description**                                                         |
| ------------------------------ | -------- | ----------------------------------------------------------------------- |
| `data.orgId`                   | long     | The ID of the organization.                                             |
| `data.entityType`              | String   | The type of entity this configuration applies to (e.g., `TRANSACTION`). |
| `data.transformEndpoint`       | String   | API endpoint used to transform the transaction data.                    |
| `data.active`                  | Boolean  | Indicates whether the configuration is currently active.                |
| `data.auditInfo.createdOn`     | String   | Timestamp when the configuration was created in ISO 8601 format.        |
| `data.auditInfo.createdBy`     | long     | User ID of the person who created the configuration.                    |
| `data.auditInfo.lastUpdatedOn` | String   | Timestamp when the configuration was last updated in ISO 8601 format.   |
| `data.auditInfo.lastUpdatedBy` | long     | User ID of the person who last updated the configuration.               |
| `errors`                       | Array    | List of errors encountered (empty array if no errors).                  |

# Error Codes

<Table>
  <thead>
    <tr>
      <th>
        **Error code**
      </th>

      <th>
        **Description**
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        400 BAD\_REQUEST
      </td>

      <td>
        * The request body is invalid JSON<br />- Required fields are missing<br />- The request body fails validation <br />- Constraint violations occur
      </td>
    </tr>

    <tr>
      <td>
        401 UNAUTHORIZED
      </td>

      <td>
        * Authentication is missing or invalid<br />- The auth token is not provided
      </td>
    </tr>

    <tr>
      <td>
        403 FORBIDDEN
      </td>

      <td>
        * The authenticated user doesn't have permission to create configurations
      </td>
    </tr>

    <tr>
      <td>
        500 INTERNAL\_SERVER\_ERROR
      </td>

      <td>
        * Unexpected server errors occur<br />- Database operations fail<br />- Other runtime exceptions occur
      </td>
    </tr>
  </tbody>
</Table>