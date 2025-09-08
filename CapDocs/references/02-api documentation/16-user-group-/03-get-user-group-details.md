---
title: Search user groups by name, ID, and mobile number
excerpt: >-
  Retrieves the details of a specific group using the unique ID or external ID
  of the group.
api:
  file: v2.json
  operationId: get-user-group-details
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
# API endpoint

To search for a group based on the group name: `{host}/userGroup2/search?q={query parameter}`

To search for a group based on group ID or external ID: `{host}/userGroup2?id={query parameter}`

This allows you to search for any group using group\_id, group\_name, group\_external id, and primary member email id/ mobile number/ card number.

# Prerequisites

*   Authentication: Basic or OAuth authentication
*   Access group resource: Read access to the `User Group` resource

# Resource information

|                        |                |
| :--------------------- | :------------- |
| URI                    | /v2/userGroup2 |
| HTTP Method            | GET            |
| Pagination             | Yes            |
| Batch support          | No             |
| Rate limit information | NA             |

# Query parameters

| Parameter | Type    | Description                                                            |
| :-------- | :------ | :--------------------------------------------------------------------- |
| q\*       | string  | The name of the group. The maximum allowed number of characters is 50. |
| id\*      | integer | The group or external ID of the group.                                 |
| offset    | integer | The starting index for data retrieval.                                 |
| limit     | integer | The maximum number of items to be retrieved.                           |

**Note**: One of the parameters marked \* is mandatory.

```json Search_with_groupID_with extendedfields
https://eu.api.capillarytech.com/v2/userGroup2/search?q=51334
```

# Response parameters

<HTMLBlock>{`
<table style="width: 100%; border-collapse: collapse;">
<thead>
<tr>
  <th style="border: 1px solid #ddd; padding: 8px;">Parameter</th>
  <th style="border: 1px solid #ddd; padding: 8px;">Description</th>
</tr>
</thead>
<tbody>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><ul>
<li>pagination</li>
</ul>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>An object that contains details about the pagination.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>-- limit</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>The maximum number of records returned per page.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>-- offset</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>The starting point in the list of records.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>-- total</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>The total number of records.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><ul>
<li>data</li>
</ul>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>An array containing the data records.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><ul>
<li>groupId</li>
</ul>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>The unique identifier of the group.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><ul>
<li>groupName</li>
</ul>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>The name of the group.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><ul>
<li>groupStatus</li>
</ul>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>The status of the group (e.g., ACTIVE).</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><ul>
<li>groupExternalId</li>
</ul>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>An external identifier for the group.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><ul>
<li>firstName</li>
</ul>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>The first name of the primary member of the group.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><ul>
<li>lastName</li>
</ul>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>The last name of the primary member of the group.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><ul>
<li>primaryMemberId</li>
</ul>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>The unique identifier of the primary member.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><ul>
<li>email</li>
</ul>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>The email address of the primary member.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><ul>
<li>mobile</li>
</ul>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>The mobile number of the primary member.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><ul>
<li>totalMembers</li>
</ul>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>The total number of members in the group.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><ul>
<li>extendedFields</li>
</ul>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>An array containing the <a href="https://docs.capillarytech.com/docs/data-entities#extended-fields">extended fields</a> and their corresponding values, enabled for specific verticals within the organisation.
 <strong>Note</strong>: Each extended field must be valid and created under the <code>usergroup2</code> <a href="https://docs.capillarytech.com/docs/data-entities">entity</a>.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><ul>
<li>warnings</li>
</ul>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>An array containing any warning messages.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><ul>
<li>errors</li>
</ul>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>An array containing any error messages.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><ul>
<li>id</li>
</ul>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>The unique identifier of the group.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><ul>
<li>lifeTimePurchases</li>
</ul>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>The total amount of purchases made by the group in its lifetime.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><ul>
<li>totalActiveMembers</li>
</ul>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>The total number of currently active members in the group.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><ul>
<li>totalExitedMembers</li>
</ul>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>The total number of members who have left the group.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><ul>
<li>defaultGroup</li>
</ul>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>A boolean value indicating whether the group is a default one for the user.</p>
</td>
</tr>
</tbody>
</table>
`}</HTMLBlock>

```json Sample response -Search_with_groupID_with_extendedfields
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
            "firstName": "Test",
            "lastName": "Usergroup",
            "primaryMemberId": 558085086,
            "email": "bradpitt@gmail.com",
            "mobile": "9911223366",
            "totalMembers": 1,
            "extendedFields": {
                "platinum": 25
            }
        }
    ],
    "warnings": [],
    "errors": []
}
```

# API-specific error codes

| Error code | Description                           |
| :--------- | :------------------------------------ |
| 91052      | Invalid or missing search parameters. |