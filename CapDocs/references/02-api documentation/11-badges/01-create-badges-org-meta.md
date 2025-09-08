---
title: Create badges org meta
excerpt: ''
api:
  file: v1.json
  operationId: create-badges-org-meta
deprecated: false
hidden: true
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
This API allows you to create the meta for badges at an org level.

> 👍 Note
>
> For detailed information about our APIs and for hands-on testing, refer documentation in [API overview](https://docs.capillarytech.com/reference/apioverview) and  step-by-step guide on making your first API call in [Make your first API call](https://docs.capillarytech.com/reference/make-your-first-api-call) .

# API specifications

| Feature                  | Availability     |
| :----------------------- | :--------------- |
| Authentication supported | Basic            |
| Pagination               | Yes, default: 10 |
| Batch support            | No               |
| Rate limit information   | None             |
| Access Group             | NA               |
| Configuration            | None             |

# API endpoint example

`https://eucrm.cc.capillarytech.com/api_gateway/v1/badges/orgMeta`

# Request body parameters

<Table>
  <thead>
    <tr>
      <th>
        Parameter




        (Parameters marked with 

        \*

         are mandatory)
      </th>

      <th>
        Description
      </th>

      <th>
        Type
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        orgID \*
      </td>

      <td>
        Unique ID of the org.
      </td>

      <td>
        Variable
      </td>
    </tr>

    <tr>
      <td>
        key
      </td>

      <td>
        An identifier for the type of tag. Example: Category
      </td>

      <td>
        String
      </td>
    </tr>

    <tr>
      <td>
        dataType
      </td>

      <td>
        The datatype of the key.
      </td>

      <td>
        String
      </td>
    </tr>

    <tr>
      <td>
        description
      </td>

      <td>
        Description of the key.
      </td>

      <td>
        String
      </td>
    </tr>

    <tr>
      <td>
        mandatory
      </td>

      <td>
        A variable to check if the field is mandatory or not.
      </td>

      <td>
        Boolean
      </td>
    </tr>
  </tbody>
</Table>

```json
{
    "orgId": orgid,
    "tags": [
        {
            "key": "Category",
            "dataType": "string",
            "description": "Type of badge(Exclusive,Regular)",
            "mandatory": false
        }
    ]
}
```

# Response parameters

| Parameter       | Description                                                                          |
| --------------- | ------------------------------------------------------------------------------------ |
| id              | Unique ID for the badge.                                                             |
| orgId\*         | Unique ID of the org.                                                                |
| key             | The name of the tag, e.g., "Category".                                               |
| dataType        | Specifies the data type that the tag holds, e.g., "string".                          |
| description     | A brief description of the tag, e.g., "Type of badge(Exclusive,Regular)".            |
| mandatory       | Indicates if the tag is required. (false in this case, meaning the tag is optional). |
| createdOn       | The date and time of badge creation.                                                 |
| createdBy       | The user who created the badge.                                                      |
| lastUpdatedOn   | The date and time of the last update.                                                |
| lastUpdatedBy   | The user who last updated the badge.                                                 |
| error code      | Numeric code representing the specific error.                                        |
| error message   | Description of the error.                                                            |
| reference       | An additional reference to identify the error.                                       |
| warning code    | Numeric code representing the specific warning.                                      |
| warning message | Description of the warning.                                                          |

```json
{
  "data": {
    "id": "string",
    "orgId": 0,
    "tags": [
      {
        "key": "Category",
        "dataType": "string",
        "description": "Type of badge(Exclusive,Regular)",
        "mandatory": false
      }
    ],
    "createdOn": "2023-11-08T15:43:40.382Z",
    "createdBy": 0,
    "lastUpdatedOn": "2023-11-08T15:43:40.382Z",
    "lastUpdatedBy": 0
  },
  "errors": [
    {
      "code": 0,
      "message": "string",
      "reference": "string"
    }
  ],
  "warnings": [
    {
      "code": 0,
      "message": "string"
    }
  ]
}
```

# API-specific error codes

| Error code | Description                       |
| :--------- | :-------------------------------- |
| 409        | Org configuration already exists. |