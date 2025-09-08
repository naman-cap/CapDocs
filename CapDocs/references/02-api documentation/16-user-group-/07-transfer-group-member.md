---
title: Transfer Group Member
excerpt: Lets you transfer members from one group to another.
api:
  file: v2.json
  operationId: transfer-group-member
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
> 📘
>
> Pass at lease one among the query parameters. - id, externalId, primaryUserId.

> ❗️ Make sure you have the appropriate access control configured. For more information, see [access group documentation](https://docs.capillarytech.com/docs/access-group).

# API endpoint

\{host}.api.capillarytech.com/v2/organization/userGroup2/transfer

# Body parameters

| Body parameters | Description                                                                                         |
| :-------------- | :-------------------------------------------------------------------------------------------------- |
| leaveGroupId    | Group ID from which the customer needs to be removed. Ensure the customer is a member of the group. |
| joinGroupId     | Group ID to which the customer needs to join.                                                       |
| userIds         | Unique ID of the customers that you want to transfer to the new group.                              |

# Response parameters

| Parameter | Description                                                                                               |
| --------- | --------------------------------------------------------------------------------------------------------- |
| warnings  | This is an array containing any warning messages generated during the processing of the request.          |
| errors    | This is an array containing any error messages that were generated if the request failed for some reason. |
| success   | This is a boolean value indicating whether the request was successful.                                    |