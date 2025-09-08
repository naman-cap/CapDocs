---
title: Retrieve user group members list
excerpt: This API allows you to retrieve details of members in the user group.
api:
  file: v2.json
  operationId: retrieve-user-group-member-details
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
> ❗️ Make sure you have the appropriate access control configured. For more information, see [access group documentation](https://docs.capillarytech.com/docs/access-group).

# API endpoint

\{host}/v2/userGroup2?\{id/externalId}=\{value}

# Query parameters

| Query Parameter | Description                                                                                                                   |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| externalId      | This parameter is used to filter user groups by their external identifier.                                                    |
| expiredPoints   | This parameter, when set to true, requests that information about points that have expired be included in the response.       |
| expirySchedules | This parameter, when set to true, requests that information about the schedules for point expiry be included in the response. |
| gapToUpgradeFor | This parameter requests the point gap required for upgrading to the next level for a user group.                              |
| gapToRenewFor   | This parameter requests the point gap required for renewing the current level for a user group.                               |
| companyDetails  | This parameter requests details about the company associated with the user group.                                             |

# Response parameters

| Key                | Description                                                                      |
| ------------------ | -------------------------------------------------------------------------------- |
| id                 | The unique identifier for the group.                                             |
| userId             | The unique identifier for the user.                                              |
| groupId            | The unique identifier for the group to which the user belongs.                   |
| defaultGroup       | A boolean indicating if this group is the default group for the user.            |
| active             | A boolean indicating if the user is currently active.                            |
| primaryMember      | A boolean indicating if the user is the primary member of the group.             |
| externalId         | The external identifier for the group.                                           |
| groupStatus        | The status of the group (e.g., ACTIVE).                                          |
| fleetGroupUsers    | An array of user objects, each with details about a user in the group.           |
| createdBy          | The ID of the user who created the group.                                        |
| createdOn          | The date and time when the group was created.                                    |
| groupName          | The name of the group.                                                           |
| maxGroupSize       | The maximum size of the group.                                                   |
| lifeTimePurchases  | The total purchases made over the lifetime of the group.                         |
| expiredPoints      | An array containing details about points that have expired.                      |
| expirySchedules    | An array containing details about the schedules for point expiry.                |
| gapToUpgrade       | An array containing details about the gap required to upgrade to the next level. |
| totalActiveMembers | The total number of active members in the group.                                 |
| totalExitedMembers | The total number of members who have exited the group.                           |
| warnings           | An array of warning messages generated during the processing of the request.     |