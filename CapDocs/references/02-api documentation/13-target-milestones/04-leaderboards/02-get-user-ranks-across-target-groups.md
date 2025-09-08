---
title: Get user rank across target groups
excerpt: ''
api:
  file: v1.json
  operationId: get-user-ranks-across-target-groups
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
The API fetches a user’s rankings in all enrolled targets within a timeframe.

> 👍 Note
>
> For detailed information about our APIs and for hands-on testing, refer documentation on [API overview](https://docs.capillarytech.com/reference/apioverview) and step-by-step guide on [making your first API call](https://docs.capillarytech.com/reference/make-your-first-api-call).

# Prerequisites

*   Authentication: Basic/OAuth authentication
*   Default access group
*   Enable leaderboards for the organisation.
*   Create a target milestone or streak.
*   Enable leaderboards for the milestone or streak

# Resource Information

|                        |                                                                |
| :--------------------- | :------------------------------------------------------------- |
| URI                    | api\_gateway/intouch-api-v3/v3.1/leaderboards/user`\{userId\}` |
| HTTP Method            | GET                                                            |
| Pagination             | No                                                             |
| Rate limit information | NA                                                             |

# API Endpoint Example

`https://eu.api.capillarytech.com/api_gateway/intouch-api-v3/v3.1/leaderboards/user/381329847`

# Headers

| Header         | Description                                                                                                                                                                                                                                                                                                                                                                                                        |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| DATA-SCOPE-ORG | List of Organisation IDs                                                                                                                                                                                                                                                                                                                                                                                           |
| DATA-SCOPE     | Scopes define what data can be accessed using the API. You can use scopes to control access to data from a parent or child organisation. Defining a scope ensures that the response contains only data from the respective organisation. Supported headers: SELF, OTHER and ALL.  Refer to connected orgs [data scopes](https://docs.capillarytech.com/reference/connected-orgs-data-scopes) for more information. |

# Request query parameters

| Parameters (Parameters marked with \* sign are mandatory) | Type | Description                    |
| --------------------------------------------------------- | ---- | ------------------------------ |
| userID                                                    | Int  | The unique ID of the customer. |

# Request body

```json
[
   {
        "orgId" : 50711,
        "targetGroupId" : 232,
        "targetRuleId" : 365,
        "periodId": 243
    },
    {
        "orgId" : 50711,
        "targetGroupId" : 232,
        "targetRuleId" : 366 ,
        "periodId" : 243
    }
]
```

# Request body parameters

| Parameters (Parameters marked with \* sign are mandatory) | Type | Description                                           |
| --------------------------------------------------------- | ---- | ----------------------------------------------------- |
| orgId                                                     | Long | Unique identifier for the organisation.               |
| targetGroupId\*                                           | Long | Unique identifier for target group                    |
| targetRuleId\*                                            | Long | Unique identifier for target rule.                    |
| Maximum of 25 rule IDs supported.                         |      |                                                       |
| periodId                                                  | Long | Identifier of period for which result will be fetched |

# Response body

```json

   {
    "data": {
        "lastSyncTime": "2024-06-24T17:37:00.000IST",
        "customerId": 381329847,
        "userEnrichmentDetails": {
            "mobile": "919988221100",
            "last_name": "",
            "first_name": "",
            "email": "tom.sawyer@capillarytech.com"
        },
        "userRanks": [
            {
                "orgId": 50711,
                "targetGroupId": 232,
                "targetRuleId": 366,
                "periodId": 243,
                "achievedValue": 3000,
                "rank": 1771,
                "lastActivityTime": "2022-11-25T21:45:05.000IST",
                "totalUsersInTargetGroup": 4527
            }
        ]
    },
    "errors": [],
    "warnings": []
}
```

# Response parameters

| Parameters                | Data Type | Description                                                                                                                                                  |
| ------------------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| data                      | Object    | An object that contains details of the leaderboard.                                                                                                          |
| – lastSyncTime            | String    | The time when the data was updated. <br />Supported format: `YYYY-MM-DDTHH:MM:SS.000z` <br />The system uses the organisation time zone to display the time. |
| – customerId              | Integer   | Identifier of the customer.                                                                                                                                  |
| – userEnrichmentDetails   | Object    | An object that contains key-value pairs of information related to the user.                                                                                  |
| – userRanks               | Object    | A list of the user’s ranks across different target rules.                                                                                                    |
| – orgId                   | Integer   | The organisation ID to which the target group belongs.                                                                                                       |
| – targetGroupId           | Integer   | The unique identifier for the target group.                                                                                                                  |
| – targetRuleId            | Integer   | The unique ID of the target rule. A target rule is a set of parameters that define the rules for achieving a target.                                         |
| – periodId                | Integer   | The unique ID of the target period. A period is a set of parameters that define the timeframe for a target.                                                  |
| – achievedValue           | Long      | The value achieved by the user for that target rule. <br />Example: If the customer has earned 5000 points, the value will be 5000.                          |
| – rank                    | Integer   | Rank of the user in the target group for the target rule in the target period.                                                                               |
| – lastActivityTime        | String    | Last activity time <br />Supported format: `YYYY-MM-DDTHH:MM:SS.000z`                                                                                        |
| – totalUsersInTargetGroup | Integer   | The number of users enrolled in the target rule.                                                                                                             |
| errors                    | Object    | Errors encountered while fetching the object.                                                                                                                |
| warnings                  | Object    | Warnings encountered while fetching object.                                                                                                                  |

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
        Maximum number of target rules allowed is 25, only first 25 target rules will be considered
      </td>

      <td>
        More than 25 target rules are passed in the request body
      </td>
    </tr>

    <tr>
      <td>
        * <br />
      </td>

      <td>
        Target group id 999 not found or deactivated
      </td>

      <td>
        The target group ID is invalid or not found.
      </td>
    </tr>

    <tr>
      <td>
        * <br />
      </td>

      <td>
        Leaderboard is not enabled for the target group id 43879
      </td>

      <td>
        Leaderboard is not enabled for the requested target group.
      </td>
    </tr>

    <tr>
      <td>
        * <br />
      </td>

      <td>
        Target rule id 999 does not belong to target group id 232
      </td>

      <td>
        The target rule ID passed does not belong to the target group passed or is invalid.
      </td>
    </tr>

    <tr>
      <td>
        * <br />
      </td>

      <td>
        Target period id 999 not found for the target id 366
      </td>

      <td>
        The target period ID passed does not belong to the target group passed or is invalid.
      </td>
    </tr>

    <tr>
      <td>
        * <br />
      </td>

      <td>
        No active target period found for the target id 366
      </td>

      <td>
        The current target period does not exist.
      </td>
    </tr>

    <tr>
      <td>
        51512
      </td>

      <td>
        The following orgs are not part of the hierarchy
      </td>

      <td>
        One or more of the organisations passed is not part of the connected organisation hierarchy.
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
  </tbody>
</Table>