---
title: Create badges group
excerpt: ''
api:
  file: v1.json
  operationId: create-badges-group
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
This API allows you to create a group for the badges.

> 👍 Note
>
> For detailed information about our APIs and for hands-on testing, refer documentation in [API overview](https://docs.capillarytech.com/reference/apioverview) and step-by-step guide on making your first API call in [Make your first API call](https://docs.capillarytech.com/reference/make-your-first-api-call)

> 🚧 **Warning**
>
> Badge group name should be unique and is case sensitive.

# Prerequisites

*   Authentication: Basic or OAuth authentication
*   Access group resource: WRITE access to target loyalty access group resource

# Resource information

|               |                              |
| :------------ | :--------------------------- |
| URI           | api\_gateway/v1/badges/group |
| HTTP method   | POST                         |
| Rate limit    | NA                           |
| Batch support | NA                           |

# API endpoint example

`https://eu.api.capillarytech.com/api_gateway/v1/badges/group`

# Request body parameters

<Table>
  <thead>
    <tr>
      <th>
        Parameters
      </th>

      <th>
        Datatype
      </th>

      <th>
        Description
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Name\*
      </td>

      <td>
        String
      </td>

      <td>
        Name of the badge group. Ex: GROUP\_RANK\_2
      </td>
    </tr>

    <tr>
      <td>
        Rank\*
      </td>

      <td>
        Integer
      </td>

      <td>
        The rank of the group is used to create an order among different groups. The brand assigns the rank, and groups with higher rank are prioritized over other groups.
        Ex: To encourage customers as they progress through course modules, you can organize badges into three groups corresponding to three-course modules. After completing each module, customers earn a badge. Upon achieving a set of badges, they are associated with a group such as Expert, Intermediate, or Beginner.
      </td>
    </tr>
  </tbody>
</Table>

<br />

```json
{
       "name": "GROUP_RANK_2",
       "rank": 2
}
```

# Response parameters

| Parameter     | Datatype | Description                                             |
| ------------- | -------- | ------------------------------------------------------- |
| id            | String   | Unique ID of the group.                                 |
| orgId         | Integer  | Unique iD of the org.                                   |
| name          | String   | Name of the group                                       |
| rank          | Integer  | The rank of the group assigned by the user.             |
| createdBy     | Integer  | User ID who created the group.                          |
| createdOn     | Float    | Timestamp indicating when the group was created         |
| lastUpdatedBy | Integer  | User ID who last updated the group.                     |
| lastUpdatedOn | Float    | Timestamp indicating when the group was last updated    |
| isActive      | Boolean  | Indicates whether the group is currently active or not. |

```json
{
    "data": {
        "id": "6581281e8f68666070de15c5",
        "orgId": 50156,
        "name": "GROUP_RANK_4",
        "rank": 2,
        "createdBy": 123,
        "createdOn": 1702963230.966423000,
        "lastUpdatedBy": 123,
        "lastUpdatedOn": 1702963230.966423000,
        "isActive": true
    },
    "errors": [],
    "warnings": []
}
```

# API-specific error codes

| Error code | Description                  |
| :--------- | :--------------------------- |
| 733        | Group Name should be Unique. |
| 732        | Group Rank is Mandatory.     |