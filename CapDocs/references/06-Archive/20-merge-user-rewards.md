---
title: Merge User Rewards
excerpt: Merge the rewards of two customers
api:
  file: v1.json
  operationId: merge-user-rewards
deprecated: false
hidden: true
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
This API merges the rewards of two customers. Provide the `customerId` of both customers to merge reward consumption details, reward transactions, and purchased rewards.

# Prerequisites

-   Authentication: Basic/OAuth authentication
-   Access group: Default access group

# Resource Information

|                        |                                        |
| :--------------------- | :------------------------------------- |
| URI                    | api_gateway/rewards/core/v1/user-merge |
| HTTP Method            | POST                                   |
| Pagination             | No                                     |
| Batch support          | NA                                     |
| Rate limit information | NA                                     |

# API endpoint example

`https://eu.api.capillarytech.com/api_gateway/rewards/core/v1/user-merge`

# Request body

```json
{
    "fromUserId": 423930934,
    "toUserId": 423930935,
    "requestId": "100"
  }
```

# Request body parameters

| Parameter (Parameters marked as \* are required) | Data Type | Description                                                                                                                                                                                  |
| :----------------------------------------------- | :-------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| fromUserId\*                                     | Long      | Unique customer ID of the victim customer. This is the user account from which rewards and their data will be transferred.                                                                   |
| toUserId\*                                       | Long      | Unique customer ID of the surviving customer. This user account receives the rewards and their data data from the victim account.                                                            |
| requestId\*                                      | String    | A unique, custom ID that you can define to identify the merge. This ID can be any value of your choice and is used to track the merge status and handle errors. There is no character limit. |

# Response body

```json Successful merge
{
    "status": {
        "success": true,
        "code": 200,
        "message": "User merged successfully"
    }
}
```
```json User is already merged
{
    "status": {
        "success": false,
        "code": 8012,
        "message": "User already merged"
    }
}
```
```json fromUserId / toUserId not provided
{
    "status": {
        "success": false,
        "code": 400,
        "message": "toUserId can't be null.,fromUserId can't be null."
    }
}
```
```json requestId not provided
{
    "status": {
        "success": false,
        "code": 400,
        "message": "requestId can't be null."
    }
}
```

# Response body parameters

| Parameter | Type    | Description                                                                 |
| :-------- | :------ | :-------------------------------------------------------------------------- |
| success   | Boolean | Indicates the success status of the merge. `true`: Merge was successful. `false`: Merge was unsuccessful due to an error. |
| code      | Integer | Status code for the merge.                                                  |
| message   | String  | Status message for the merge.                                               |

# API specific errors

| Error Code | Description                                       | Reason                                                                                    |
| :--------- | :------------------------------------------------ | :---------------------------------------------------------------------------------------- |
| 8012       | User already merged                               | Users have already been merged. To re-attempt a merge, provide a new, unique `requestId`. |
| 400        | requestId can't be null.                          | `requestId` is not provided.                                                              |
| 400        | toUserId can't be null.,fromUserId can't be null. | `toUserId` or `fromUserId` are not provided.                                              |