---
title: Record a session activity
excerpt: This API can be used to start recording a user session activity in a module.
api:
  file: v2.json
  operationId: record-a-session
deprecated: false
hidden: true
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
> ❗️ Make sure that you have appropriate access control configured. For more information, see [access group documentation](https://docs.capillarytech.com/docs/access-group).

# API endpoint

`{host}/v2/activitySessions/{sessionId}/activities`

# Request body parameters

| Parameter  | Type   | Description                                                                           |
| ---------- | ------ | ------------------------------------------------------------------------------------- |
| activities | array  | An array containing details of various activities performed by the user in a session. |
| entityType | string | The type of entity associated with the activity (e.g., "CUSTOMER").                   |
| entityId   | string | The ID of the entity associated with the activity (e.g., "98662653").                 |
| name       | string | The name or type of the activity (e.g., "CustomerSearched").                          |
| note       | string | Additional notes or comments about the activity.                                      |

# Response parameters

| Parameter      | Description                                                                     |
| -------------- | ------------------------------------------------------------------------------- |
| activities     | An array containing details of various session activities.                      |
| entityId       | The ID of the entity associated with the activity.                              |
| entityType     | The type of entity associated with the activity.                                |
| name           | The name or type of the activity.                                               |
| addedOn        | The timestamp indicating when the activity was added (2023-07-13T09:47:03Z).    |
| note           | Additional notes or comments about the activity (notes).                        |
| autoUpdateTime | The timestamp indicating the last automatic update time (2023-07-13T09:47:03Z). |
| warnings       | An array containing any warning messages.                                       |