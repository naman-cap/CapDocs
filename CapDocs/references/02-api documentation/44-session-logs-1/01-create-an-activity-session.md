---
title: Create an activity session
excerpt: >-
  This API can be used for creating a session for the user who is accessing any
  module.
api:
  file: v2.json
  operationId: create-an-activity-session
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

`{host}//v2/activitySessions`

# Request body parameters

| Parameter | Type   | Description                                          |
| :-------- | :----- | :--------------------------------------------------- |
| userId    | String | The User Id of the user who is accessing the module. |
| module    | enum   | The module that the user is currently accessing.     |

# Response parameters

| Parameter        | Description                                                                                          |
| :--------------- | :--------------------------------------------------------------------------------------------------- |
| sessionId        | A unique code or Id created for a specific session. It helps identify and keep track of the session. |
| userId           | Id of the user who is currently accessing the module.                                                |
| orgId            | Id of the organization to which the user belongs.                                                    |
| module           | Specific module for which the session is activated.                                                  |
| sessionStartTime | Starting time of the session.                                                                        |
| sessionStatus    | Present status of the session                                                                        |
| autoUpdateTime   | The time when the session or its related information was last updated automatically.                 |
| warnings         | Warnings, if any.                                                                                    |