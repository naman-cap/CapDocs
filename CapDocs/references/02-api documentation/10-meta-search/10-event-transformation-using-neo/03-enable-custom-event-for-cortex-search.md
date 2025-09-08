---
title: Enable or Update Custom Event Tranformation
excerpt: ''
api:
  file: v1.json
  operationId: enable-custom-event-for-cortex-search
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
This API enables custom event transformation logic for your organization. You can only have **one** active configuration per entity at any given time.

> 👍 Note\
> For detailed API documentation and interactive testing, see [API overview](https://docs.capillarytech.com/reference/apioverview) and [Make your first API call](https://docs.capillarytech.com/reference/make-your-first-api-call).

## Prerequisites

* **Authentication:** Basic or OAuth
* **Access:** Default access group

## Resource information

| Property       | Value                               |
| -------------- | ----------------------------------- |
| **URI**        | `/api_gateway/cortex/v1/neo-config` |
| **Method**     | POST                                |
| **Pagination** | N/A                                 |
| **Rate limit** | Default                             |
| **Batch**      | N/A                                 |

## API endpoint example

```http
POST https://eu.api.capillarytech.com/api_gateway/cortex/v1/neo-config
```

## Request body

```json Transaction
{
  "orgId": 100737,
  "entityType": "TRANSACTION",
  "transformEndpoint": "/transform/transaction/custom",
  "active": true
}
```
```json Customer
{
  "orgId": 100737,
  "entityType": "CUSTOMER",
  "transformEndpoint": "/transform/customer/custom",
  "active": true
}
```

<br />

## Request body parameters

| Parameter               | Type    | Description                                                                                                               |
| :---------------------- | :------ | :------------------------------------------------------------------------------------------------------------------------ |
| **orgId**\*             | long    | Your organization ID.                                                                                                     |
| **entityType**\*        | string  | Entity to configure. Supported: `CUSTOMER`, `TRANSACTION`.                                                                |
| **transformEndpoint**\* | string  | Path of the NEO service endpoint for transformations (e.g., `/transform/transaction/custom`).                             |
| active                  | boolean | Whether this configuration is active. Use `false` to deactivate an existing config by re-submitting with `active: false`. |

## Response body example

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

## Response parameters

| Parameter                 | Type    | Description                                      |
| :------------------------ | :------ | :----------------------------------------------- |
| `orgId`                   | long    | The organization ID (`100737`).                  |
| `entityType`              | string  | Entity configured (`CUSTOMER` or `TRANSACTION`). |
| `transformEndpoint`       | string  | Configured transformation endpoint path.         |
| `active`                  | boolean | Whether the configuration is active.             |
| `auditInfo.createdOn`     | date    | Creation timestamp (ISO 8601).                   |
| `auditInfo.createdBy`     | long    | User ID who created the config.                  |
| `auditInfo.lastUpdatedOn` | date    | Last update timestamp (ISO 8601).                |
| `auditInfo.lastUpdatedBy` | long    | User ID who last updated the config.             |
| `errors`                  | array   | List of errors, if any (empty on success).       |

## API error codes

<Table align={["left","left"]}>
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
        **`400 BAD_REQUEST`**
      </td>

      <td>
        * The request body is invalid JSON\<br>- Required fields are missing\<br>- The request body fails validation\<br>- Constraint violations occur
      </td>
    </tr>

    <tr>
      <td>
        **`401 UNAUTHORIZED`**
      </td>

      <td>
        * Authentication is missing or invalid\<br>- The auth token is not provided
      </td>
    </tr>

    <tr>
      <td>
        **`403 FORBIDDEN`**
      </td>

      <td>
        * The authenticated user doesn't have permission to create configurations
      </td>
    </tr>

    <tr>
      <td>
        **`500 INTERNAL_SERVER_ERROR`**
      </td>

      <td>
        * Unexpected server errors occur\<br>- Database operations fail\<br>- Other runtime exceptions occur
      </td>
    </tr>
  </tbody>
</Table>