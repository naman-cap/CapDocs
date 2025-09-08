---
title: Get User Reward Merge Details
excerpt: Get all merge details in an org
api:
  file: v1.json
  operationId: get-user-rewards-merge-details
deprecated: false
hidden: true
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---

This listing API retrieves the reward merge details within an organization. You can filter the results of specific customers and specify the number of entries to display.

# Prerequisites

-   Authentication: Basic/OAuth authentication
-   Access group: Default access group

# Resource Information

|                        |                                                                    |
| :--------------------- | :----------------------------------------------------------------- |
| URI                    | /api_gateway/rewards/core/v1/user-merge                            |
| HTTP Method            | GET                                                                |
| Pagination             | Yes. Sorting is not supported. The sorting order is chronological. |
| Batch support          | NA                                                                 |
| Rate limit information | NA                                                                 |

# API endpoint example

`https://eu.api.capillarytech.com/api_gateway/rewards/core/v1/user-merge`

# Request query parameters

| Parameter (Parameters marked as \* are required) | Data Type | Description                                                                                                                                                                             |
| :----------------------------------------------- | :-------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| fromUserId                                       | Long      | Unique customer ID of the victim customer. This is the user account from which rewards and their data were transferred.                                                                 |
| toUserId                                         | Long      | Unique customer ID of the surviving customer. This is the user account that received the rewards and their data from the victim account.                                                |
| page                                             | Integer   | Page number to retrieve. To view the first page, set the value to 0.                                                                                                                    |
| size                                             | Integer   | Number of entries to display per page. For example, if the total records are 15 and the limit is 5, the first page will display the first 5 records. The maximum supported limit is 50. |

# Response body

```json
{
    "userMerge": [
        {
            "fromUserId": 423930934,
            "toUserId": 423930935,
            "requestId": "merge_123",
            "mergeUserStatus": "SUCCESS"
        }
    ],
    "pagingDto": {
        "last": false,
        "totalElements": 66,
        "totalPages": 66,
        "numberOfElements": 1,
        "first": true,
        "size": 1,
        "number": 0
    }
}
```

# Response body parameters

| Parameter | Description |
| --- | --- |
| userMerge | Object containing details of the customers and merge status. |
| - fromUserId | Unique customer ID of the victim customer. This is the user account from which rewards and other associated data are transferred. |
| - toUserId | Unique customer ID of the surviving customer. This is the user account that receives the rewards and other associated data from the victim account. |
| - requestId | Unique custom ID associated with the merge. This is used to track the merge status and handle any errors. |
| - mergeUserStatus | Indicates the status of the merge. Possible values:<br/><br/>`SUCCESS`: Merge was successful.<br/>`FAIL`: Merge was unsuccessful. |
| pagingDto | Object containing details of the pagination. |
| - last | Indicates whether the current page is the last. If `true`, it is the last page; if `false`, additional pages may be available. |
| - totalElements | Total number of entries available. |
| - totalPages | Total number of pages available. |
| - numberOfElements | Number of entries currently displayed. |
| - first | Indicates whether the current page is the first page. If `true`, it is the first page; if `false`, previous pages may be available. |
| - size | Number of entries currently displayed. |
| - number | Current page number that is displayed. |

# API specific errors

| Error Code | Description                             | Reason                                |
| :--------- | :-------------------------------------- | :------------------------------------ |
| 400        | size should be less than or equal to 50 | `size` provided must be less than 50. |