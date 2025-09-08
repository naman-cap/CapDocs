---
title: Get top ranked users
excerpt: ''
api:
  file: v1.json
  operationId: get-top-ranked-users
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
The API fetches a ranked list of users who have achieved a target within a timeframe

> 👍 Note
>
> For detailed information about our APIs and for hands-on testing, refer documentation on [API overview ](https://docs.capillarytech.com/reference/apioverview)and step-by-step guide on [making your first API call](https://docs.capillarytech.com/reference/make-your-first-api-call).

# Prerequisites

*   Authentication: Basic/OAuth authentication
*   Default access group
*   Enable leaderboards for the organisation.
*   Create a target milestone or streak.
*   Enable leaderboards for the milestone or streak

# Resource Information

|                        |                                                                             |
| :--------------------- | :-------------------------------------------------------------------------- |
| URI                    | api\_gateway/intouch-api-v3/v3.1/leaderboards/targetGroups`\{targetGroup\}` |
| HTTP Method            | GET                                                                         |
| Pagination             | Yes                                                                         |
| Rate limit information | NA                                                                          |

# API Endpoint Example

`https://eu.api.capillarytech.com/api_gateway/intouch-api-v3/v3.1/leaderboards/targetGroups/232?targetId=366&periodId=243&pageOffset=4&pageSize=10`

# Headers

| Header         | Description                                                                                                                                                                                                                                                                                                                                                                                                       |
| :------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DATA-SCOPE-ORG | List of Organisation IDs                                                                                                                                                                                                                                                                                                                                                                                          |
| DATA-SCOPE     | Scopes define what data can be accessed using the API. You can use scopes to control access to data from a parent or child organisation. Defining a scope ensures that the response contains only data from the respective organisation. Supported headers: SELF, OTHER and ALL. Refer to connected orgs [data scopes](https://docs.capillarytech.com/reference/connected-orgs-data-scopes) for more information. |

# Request path parameters

**Request path parameters**

| Parameters   | Type    | Description                                                                    |
| :----------- | :------ | :----------------------------------------------------------------------------- |
| targetGroups | Integer | The ID of the target group. A target group is an entity that contains targets. |

# Request query parameters

| Parameter **Note:** Parameters marked with `*` are mandatory. | Type    | Description                                                                                                                                                                              |
| ------------------------------------------------------------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `targetId`\*                                                  | Long    | The ID of the target. A target is a set of conditions or rules that need to be met to achieve a specific goal.                                                                           |
| `periodId`                                                    | Long    | The period ID of the target. A period is a set of parameters that define the timeframe for a target. If `periodId` is not provided, the current period of the target group will be used. |
| `pageSize`                                                    | Integer | The number of results required. For example, to view the top five ranks only, set the value to `5`.                                                                                      |
| `pageOffset`                                                  | Integer | The start page from which data retrieval starts. This value should not be negative.  For example, a value of `5` indicates that data retrieval will begin from the 4th page.             |
| `pageLimit`                                                   | Integer | Number of pages from which results are displayed.  A maximum of 100 pages can be viewed in one request.                                                                                  |

<br />

# Response body

```json

    "pagination": {
        "limit": 3,
        "offset": 0,
        "total": 4527
    },
    "data": {
        "lastSyncTime": "2024-06-24T17:37:00.000IST",
        "targetGroupId": 232,
        "targetGroupName": "Target",
        "periodId": 243,
        "periodRefCode": "target_period",
        "targetRuleId": 366,
        "targetRuleName": "target1",
        "rankings": [
            {
                "rank": 1,
                "userId": 381329844,
                "achievedValue": 21000,
                "lastActivityTime": "2022-11-25T21:44:40.000IST",
                "userEnrichmentDetails": {
                    "birthday": "NOT-CAPTURED",
                    "gender": "Male",
                    "mobile": "918828069049",
                    "last_name": "Emf_lname_918828069049",
                    "first_name": "Emf_fname_918828069049",
                    "anniversary": "NOT-CAPTURED",
                    "email": "tomswayer@auto.com"
                }
            },
            {
                "rank": 2,
                "userId": 381332324,
                "achievedValue": 21000,
                "lastActivityTime": "2022-11-29T00:14:48.000IST",
                "userEnrichmentDetails": {
                    "birthday": "NOT-CAPTURED",
                    "gender": "Male",
                    "mobile": "918969294257",
                    "last_name": "Emf_lname_918969294257",
                    "first_name": "Emf_fname_918969294257",
                    "anniversary": "NOT-CAPTURED",
                    "email": "tomswayer2@auto.com"
                }
            },
            {
                "rank": 3,
                "userId": 381333386,
                "achievedValue": 21000,
                "lastActivityTime": "2022-11-29T13:48:28.000IST",
                "userEnrichmentDetails": {
                    "birthday": "NOT-CAPTURED",
                    "gender": "Male",
                    "mobile": "918424528743",
                    "last_name": "Emf_lname_918424528743",
                    "first_name": "Emf_fname_918424528743",
                    "anniversary": "NOT-CAPTURED",
                    "email": "tomswayer3@auto.com"
                }
            }
        ]
    },
    "errors": [],
    "warnings": []
}
```

# Response parameters

| Parameters                                                               | Type    | Description                                                                                                      |
| ------------------------------------------------------------------------ | ------- | ---------------------------------------------------------------------------------------------------------------- |
| pagination                                                               | Object  | Object containing pagination details.                                                                            |
| – limit                                                                  | String  | Number of entries per page.                                                                                      |
| – offset                                                                 | String  | Page number of the current result set.                                                                           |
| – total                                                                  | String  | Total number of entries.                                                                                         |
| data                                                                     | Object  | Object containing details of the leaderboard.                                                                    |
| – lastSyncTime                                                           | String  | Time when data was updated Supported format:` YYYY-MM-DDTHH:MM:SS.000z`.                                         |
| The system uses the organisation time zone to display.                   |         |                                                                                                                  |
| –targetGroupId                                                           | Integer | The unique ID of the target group. A target group contains an array of targets.                                  |
| –targetGroupName                                                         | String  | Unique name of the target group.                                                                                 |
| –periodId                                                                | Integer | Unique ID of the target period. A period is a set of parameters that define the timeframe for a target.          |
| –periodRefCode                                                           | String  | Unique name of the target period.                                                                                |
| –targetRuleId                                                            | Integer | Unique ID of the target rule. A target rule is a set of parameters that define the rules for achieving a target. |
| –targetRuleName                                                          | String  | Unique name of the target rule.                                                                                  |
| –rankings                                                                | Object  | Object containing user ranking details.                                                                          |
| –rank                                                                    | Integer | Rank of the user.                                                                                                |
| –userId                                                                  | Integer | Unique identifier of the customer.                                                                               |
| –achievedValue                                                           | Integer | The achieved value of the customer in the period.                                                                |
| Example: If the customer has earned 5000 points, the value will be 5000. |         |                                                                                                                  |
| –lastActivityTime                                                        | String  | Last activity time Supported format: `YYYY-MM-DDTHH:MM:SS.000z`.                                                 |
| --mobile                                                                 | Integer | Mobile number associated with the user.                                                                          |
| –userEnrichmentDetails                                                   | Object  | An object containing information related to the user.                                                            |
| --birthday                                                               | String  | Birthday of the user.                                                                                            |
| gender                                                                   | String  | Gender of the user.                                                                                              |
| --last\_name                                                             | String  | Last name of the user.                                                                                           |
| --first\_name                                                            | String  | First name of the user.                                                                                          |
| --anniversary                                                            | String  | Anniversary date of the user.                                                                                    |
| --email                                                                  | String  | Email address associated with the user.                                                                          |

# API-specific warnings and errors

<Table align={["left","left","left"]}>
  <thead>
    <tr>
      <th>
        Error Code
      </th>

      <th>
        Description
      </th>

      <th>
        Reason
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        * <br />
      </td>

      <td>
        Page offset can not be in negative, fetching the first page by default
      </td>

      <td>
        The page offset value is negative.
      </td>
    </tr>

    <tr>
      <td>
        * <br />
      </td>

      <td>
        Page Size can not be more than 100, capping the page size to 100
      </td>

      <td>
        The page size value is more than the supported limit of 100.
      </td>
    </tr>

    <tr>
      <td>
        310133
      </td>

      <td>
        Leaderboards are not enabled for the following orgs
      </td>

      <td>
        Leaderboards are not enabled for the organisation.
      </td>
    </tr>

    <tr>
      <td>
        310017
      </td>

      <td>
        Target group not found or deactivated
      </td>

      <td>
        The target group passed is either invalid or currently inactive.
      </td>
    </tr>

    <tr>
      <td>
        310134
      </td>

      <td>
        Leaderboard is not enabled for the target group
      </td>

      <td>
        Leaderboard is not enabled for the requested target group.
      </td>
    </tr>

    <tr>
      <td>
        310079
      </td>

      <td>
        target rule id doesn't belong to target group
      </td>

      <td>
        The target rule ID passed does not belong to the target group or is invalid.
      </td>
    </tr>

    <tr>
      <td>
        310118
      </td>

      <td>
        Target Period not found for the target
      </td>

      <td>
        The target period ID passed does not belong to the target group or is invalid or does not exist.
      </td>
    </tr>
  </tbody>
</Table>