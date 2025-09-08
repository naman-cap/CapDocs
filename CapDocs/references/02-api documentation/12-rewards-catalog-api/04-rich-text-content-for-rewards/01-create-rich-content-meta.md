---
title: Create Rich Text Content Metadata for Rewards
excerpt: ''
api:
  file: v1.json
  operationId: create-rich-content-meta
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
The Rich Content Metadata feature allows brands to define and manage rich text content for rewards. Rich text includes content such as:

* Detailed reward descriptions.
* Custom terms and conditions.
* Any dynamic content to enhance the reward experience.\
  This metadata is stored separately and can be linked to a reward using the Create Reward API.

  **Note** You can add a maximum of 20 Rich Content Metadata for an organization.

# Prerequisites

*   Authentication: Basic or OAuth authentication

# Resource information

|             |                                                     |
| :---------- | :-------------------------------------------------- |
| URI         | /api\_gateway/rewards/core/v1/brand/richContentMeta |
| HTTP Method | POST                                                |

# API endpoint example

> `https://{host}/api_gateway/rewards/core/v1/brand/richContentMeta`

## Request Body Parameters

<Table align={["left","left","left"]}>
  <thead>
    <tr>
      <th>
        Parameter
      </th>

      <th>
        Type
      </th>

      <th>
        Description
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `name`\*
      </td>

      <td>
        `String`
      </td>

      <td>
        Unique identifier for the rich content metadata (Max: 256 characters).
      </td>
    </tr>

    <tr>
      <td>
        `description`
      </td>

      <td>
        `String`
      </td>

      <td>
        Description of the metadata (Max: 256 characters).
      </td>
    </tr>

    <tr>
      <td>
        `isMandatory`\*
      </td>

      <td>
        `Boolean`
      </td>

      <td>
        Indicates whether metadata is mandatory (`true` or `false`).
      </td>
    </tr>

    <tr>
      <td>
        `scope`\*
      </td>

      <td>
        `Enum`
      </td>

      <td>
        Must be `"REWARD"` (case-sensitive).
      </td>
    </tr>

    <tr>
      <td>
        `defaultValue`
      </td>

      <td>
        `String`
      </td>

      <td>
        The default value is shown when rich text content is unavailable for a specific reward.

        **Required**: Only if `isMandatory` is set to `true`.
        **Optional**: If `isMandatory` is false.
        **Max Length**: 50,000 characters.
      </td>
    </tr>

    <tr>
      <td>
        `isActive`
      </td>

      <td>
        `Boolean`
      </td>

      <td>
        Defaults to true during Rich Text Content Metadata creation, even if set to false.
      </td>
    </tr>
  </tbody>
</Table>

**Note:** `defaultValue` is required only when isMandatory is true.

## Example Request

```json
{
    "name": "terms&conditions",
    "description": "RC2_desc",
    "isMandatory": true,
    "isActive": true,
    "scope": "REWARD",
    "defaultValue": "here is your rich content"
}
```

## Example Response

```json
{
    "id": 9,
    "name": "terms&conditions",
    "description": "RC2_desc",
    "isMandatory": true,
    "isActive": true,
    "scope": "REWARD",
    "defaultValue": "here is your rich content",
    "createdBy": 75161973,
    "createdOn": 1743268460227,
    "lastUpdatedBy": 75161973,
    "lastUpdatedOn": 1743268460227
}
```

## Response Parameters

| Parameter       | Description                                                                        |
| --------------- | ---------------------------------------------------------------------------------- |
| `id`            | Unique identifier for metadata.                                                    |
| `name`          | Metadata name.                                                                     |
| `description`   | Metadata description.                                                              |
| `isMandatory`   | Whether metadata is mandatory.                                                     |
| `isActive`      | Status of metadata.                                                                |
| `scope`         | Scope of the metadata.                                                             |
| `defaultValue`  | Default assigned value.                                                            |
| `createdBy`     | User ID of the creator.                                                            |
| `createdOn`     | Indicates Creation timestamp. Timestamps are in UTC (milliseconds since epoch).    |
| `lastUpdatedBy` | User ID of the last updater.                                                       |
| `lastUpdatedOn` | Indicates Last update timestamp. Timestamps are in UTC (milliseconds since epoch). |

**Note** `createdBy` and `lastUpdatedBy` fields are automatically set based on the authenticated user.

## Error code

| Code                                                       | Description                                                                  |
| ---------------------------------------------------------- | ---------------------------------------------------------------------------- |
| 400 - Invalid request parameters.                          | Ensure all required parameters are included in the request body.             |
| 400 - value is not one of declared Enum                    | Ensure provided Enum field matches one of the supported values.              |
| 400 - `defaultValue` is required when isMandatory is true. | Ensure `defaultValue` is not set to null, when `isMandatory` is set to true. |
| 500 - Internal server error.                               | Retry the request after a short delay. The issue may be temporary.           |