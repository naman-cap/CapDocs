---
title: Search for groups using the extended fields
excerpt: Search for groups based on the extended fields associated with them.
api:
  file: v2.json
  operationId: search-for-groups-using-the-extended-fields
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
The new API allows you to search for groups using their associated extended fields. By providing one or more extended fields, you can retrieve groups that match the specified criteria. The API works even if only a single extended field is supplied.

# API endpoint example

[https://eu.api.capillarytech.com/v2/userGroup2/extendedFieldSearch](https://eu.api.capillarytech.com/v2/userGroup2/extendedFieldSearch)

# Prerequisites

-   Authentication: Basic or OAuth authentication 
-   Access group resource: Read and write access to the `User Group` resource

# Resource information

|                        |                |
| :--------------------- | :------------- |
| URI                    | /v2/userGroup2 |
| HTTP Method            | POST           |
| Pagination             | Yes            |
| Batch support          | No             |
| Rate limit information | NA             |

# Request body parameters

<HTMLBlock>{`
<table style="width: 100%; border-collapse: collapse;">
<thead>
<tr>
  <th style="border: 1px solid #ddd; padding: 8px;">Parameter<br>(Parameters marked with * are mandatory)</th>
  <th style="border: 1px solid #ddd; padding: 8px;">Type</th>
  <th style="border: 1px solid #ddd; padding: 8px;">Description</th>
</tr>
</thead>
<tbody>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>extendedFields*</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Array</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>An array containing the <a href="https://docs.capillarytech.com/docs/data-entities#extended-fields">extended fields</a> used to retrieve groups associated with those fields. <strong>Note</strong>:  Each extended field must be valid and created under the <code>usergroup2 </code><a href="https://docs.capillarytech.com/docs/data-entities">entity</a>.</p>
</td>
</tr>
</tbody>
</table>
`}</HTMLBlock>

```curl Sample request
{
    "extendedFields": {
        "platinum": "40"
    }
}
```

# Response parameters

| **Parameter**        | **Description**                                                      |
| -------------------- | -------------------------------------------------------------------- |
| pagination           | An array containing pagination information for the response.         |
| - limit              | The maximum number of records to retrieve.                           |
| - offset             | The starting point for fetching records.                             |
| - total              | The total number of records available.                               |
| data                 | An array containing the group details.                               |
| - groupId            | The unique identifier for the group. It is the same as entity ID.    |
| - groupName          | The name of the group.                                               |
| - groupStatus        | The current status of the group. **Example**: ACTIVE, EXITED         |
| - groupExternalId    | The external identifier for the group.                               |
| - primaryMemberId    | The unique identifier for the primary member of the group.           |
| - totalMembers       | The total number of members in the group.                            |
| - totalActiveMembers | The total number of active members in the group.                     |
| - extendedFields     | An array containing extended field information related to the group. |
| warnings             | An array containing warnings, if any.                                |
| errors               | An array containing errors, if any.                                  |

```json Sample response
{
    "pagination": {
        "limit": 10,
        "offset": 0,
        "total": 1
    },
    "data": [
        {
            "groupId": 51334,
            "groupName": "natwest14",
            "groupStatus": "ACTIVE",
            "groupExternalId": "natwest_16",
            "primaryMemberId": 558085086,
            "totalMembers": 1,
            "totalActiveMembers": 1,
            "extendedFields": {
                "platinum": 40
            }
        }
    ],
    "warnings": [],
    "errors": []
}
```

# API-specific error codes

| Error code | Description                                                   |
| :--------- | :------------------------------------------------------------ |
| 1661       | The extended fields array is empty.                           |
| 91017      | The value of the extended field does not match the data type. |
| 91016      | The extended field name is incorrect.                         |