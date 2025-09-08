---
title: Unenroll a Customer to from Milestone or Streak
excerpt: ''
api:
  file: v1.json
  operationId: connectedorgs-unenroll-customer-milestone-or-streak
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
This API unenrolls a user from a milestone or streak in a connected organisation.

## Milestones and Streaks

A **Milestone** in Loyalty+ is a feature that lets brands set specific targets for their customers. When customers reach these defined targets, they are rewarded.

For more information refer to the [documentation on Milestones](https://docs.capillarytech.com/docs/milestones-new-flow).

A **Streak** in Loyalty+ refers to a series of consecutive customer actions or engagements. When customers complete a series of consecutive actions, they are rewarded.

For more information refer to the [documentation on Streaks](https://docs.capillarytech.com/docs/streaks).

> 👍 Note
>
> For detailed information about our APIs and for hands-on testing, refer to the documentation in [API overview](https://docs.capillarytech.com/reference/apioverview) and step-by-step guide on [making your first API call](https://docs.capillarytech.com/reference/make-your-first-api-call).

# Prerequisites

*   Authentication: Basic or OAuth authentication
*   Default access group

# Resource information

|                        |                                                                                                  |
| :--------------------- | :----------------------------------------------------------------------------------------------- |
| URI                    | /api\_gateway/intouch-api-v3/v3.1/targetGroups`\{targetGroupId\}`/targets`\{targetId\}`/unEnroll |
| HTTP Method            | POST                                                                                             |
| Pagination             | No                                                                                               |
| Batch support          | No                                                                                               |
| Rate limit information | None                                                                                             |

# API endpoint example

`https://eucrm.cc.capillarytech.com/v3.1/targetGroups\{targetGroupId\}/targets\{targetId\}/unEnroll`

# Headers

<Table>
  <thead>
    <tr>
      <th>
        Header
      </th>

      <th>
        Description
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        DATA-SCOPE-ORG
      </td>

      <td>
        List of Organization IDs.
      </td>
    </tr>

    <tr>
      <td>
        DATA-SCOPE
      </td>

      <td>
        Scopes define what data can be accessed using the API. You can use scopes to control access to data from a parent or child organization. Defining a scope ensures that the response contains only data from the respective organization.                    - Supported headers: `SELF` and `OTHER`.

        * Refer to connected orgs [data scopes](https://docs.capillarytech.com/reference/connected-orgs-data-scopes)   for more information.
      </td>
    </tr>
  </tbody>
</Table>

# Request path parameters

| Parameter       | Data type | Description                                                                                                                              |
| :-------------- | :-------- | :--------------------------------------------------------------------------------------------------------------------------------------- |
| targetGroupId\* | Integer   | The ID of the target group associated with the item. A target group is the primary entity under which individual targets can be created. |
| targetId\*      | Integer   | The ID of the target. A target is a set of conditions or rules that need to be met to achieve a specific goal.                           |

# Request body parameters

| Parameter    | Data Type | Description                            |
| ------------ | --------- | -------------------------------------- |
| customerId\* | Integer   | The unique identifier of the customer. |

```json
[
    {
        "customerId":423789336
    }
]
```

# Response parameters

| Parameter | Data Type | Description                            |
| --------- | --------- | -------------------------------------- |
| data      | Integer   | The unique identifier of the customer. |
| errors    | Array     | Errors during the API call, if any.    |
| warnings  | Array     | Warnings during the API call, if any.  |

```json Self and Other
{
    "data": 345651201,
    "errors": null,
    "warnings": null
}

```
````json ALL
{
    "data": null,
    "errors": [
      {
        "code": 310141,
        "message": 'Datascope 'ALL' is not supported for this 'API'
      }
      ],
    "warnings": null
}
```
````

# API-specific errors

| Error code | Description                                                                                                                                                                            |
| ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 310119     | User already enrolled for the target.                                                                                                                                                  |
| 310011     | Invalid userId. Check if the customerId is valid.                                                                                                                                      |
| 310019     | Target period not found. Check the target period ID to troubleshoot this error.                                                                                                        |
| 310017     | Target group not found or deactivated. Check the target group ID to troubleshoot this error.                                                                                           |
| 310018     | Target rule not found. Check the target rule ID to troubleshoot this error.                                                                                                            |
| 300004     | Invalid input.                                                                                                                                                                         |
| 310141     | Datascope 'ALL' is not supported for this 'API'                                                                                                                                        |
| 310144     | Connected Orgs not set properly in Headers. Check whether the target organisation is a connected organisation.                                                 Check the API endpoint. |

&#x20;