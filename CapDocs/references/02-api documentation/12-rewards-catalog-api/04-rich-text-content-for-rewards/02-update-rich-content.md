---
title: Update Rich Text Content Metadata for Rewards
excerpt: ''
api:
  file: v1.json
  operationId: update-rich-content
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
This API is used to update rich content metadata for rewards within a brand.In addition to updating metadata, you can enable or disable the rich content metadata for a specific reward.

# Prerequisites

*   Authentication: Basic or OAuth authentication
*   Create Rich Text Content Metadata using [Create Rich Text Content Meta Data Against Reward](https://docs.capillarytech.com/reference/create-rich-content-meta)

# API Specification

|             |                                                                        |
| :---------- | :--------------------------------------------------------------------- |
| URI         | /api\_gateway/rewards/core/v1/brand/richContentMeta/`{RichtextmetaID}` |
| HTTP Method | PUT                                                                    |
| Pagination  | Yes (via `pagingDto`)                                                  |

# API endpoint example

> `https://{host}/api_gateway/rewards/core/v1/brand/richContentMeta/<code>{RichtextmetaID}</code>`

## Request Body Parameters

<Table align={["left","left","left"]}>
  <thead>
    <tr>
      <th>
        Parameter
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
        `name`\*
      </td>

      <td>
        String
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
        String
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
        Boolean
      </td>

      <td>
        Whether metadata is mandatory (`true` or `false`).
      </td>
    </tr>

    <tr>
      <td>
        `isActive`
      </td>

      <td>
        Boolean
      </td>

      <td>
        Indicates whether the rich content metadata is active or inactive. Set to `true` to enable or `false` to disable the metadata.
        Defaults to true during creation, even if set to `false` in the request body.
      </td>
    </tr>

    <tr>
      <td>
        `scope`\*
      </td>

      <td>
        Enum
      </td>

      <td>
        Scope must be set `"REWARD"` (case-sensitive).
      </td>
    </tr>

    <tr>
      <td>
        `defaultValue`
      </td>

      <td>
        String
      </td>

      <td>
        The default value is shown when rich text content is unavailable for a specific reward.
        **Required**: Only if `isMandatory` is set to `true`.
        **Optional**: If `isMandatory` is false.
        **Max Length**: 50,000 characters.
      </td>
    </tr>
  </tbody>
</Table>

## Example Request

```json
{
            "name": "terms&conditions",
            "description": "RC1_desc",
            "isMandatory": false,
            "isActive": true,
            "scope": "REWARD"
            
            
}
```

<br />

## Example Response

```json
{
    "id": 4,
    "name": "terms&conditionsupdated",
    "description": "RC1_desc",
    "isMandatory": false,
    "isActive": true,
    "scope": "REWARD",
    "defaultValue": null,
    "createdBy": 75161973,
    "createdOn": 1743397847133,
    "lastUpdatedBy": 75161973,
    "lastUpdatedOn": 1743397847133
}
```

<br />

## Response Parameters

| Parameter Name  | Data Type | Description                                                               |
| --------------- | --------- | ------------------------------------------------------------------------- |
| `id`            | Long      | Unique identifier for metadata.                                           |
| `name`          | String    | Metadata name.                                                            |
| `description`   | String    | Metadata description.                                                     |
| `isMandatory`   | Boolean   | Whether metadata is mandatory.                                            |
| `isActive`      | Boolean   | Status of metadata.                                                       |
| `scope`         | Enum      | Scope of the metadata.                                                    |
| `defaultValue`  | String    | Default assigned value.                                                   |
| `createdBy`     | Long      | User ID of the creator.                                                   |
| `createdOn`     | Long      | Creation timestamp. Timestamps are in UTC (milliseconds since epoch).     |
| `lastUpdatedBy` | Long      | User ID of the last updater.                                              |
| `lastUpdatedOn` | Long      | Last update timestamp . Timestamps are in UTC (milliseconds since epoch). |

<br />

## Error code

| HTTP Status Code                                           | Resolution                                                                              |
| ---------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| 400 - Invalid request parameters.                          | Ensure all required parameters are included in the request body.                        |
| 400 - value is not one of declared Enum                    | Ensure provided Enum field matches one of the supported values.                         |
| 400 - `defaultValue` is required when isMandatory is true. | Ensure `defaultValue<code> is not set to null, when </code>isMandatory` is set to true. |
| 500 - Internal server error.                               | Retry the request after a short delay. The issue may be temporary.                      |