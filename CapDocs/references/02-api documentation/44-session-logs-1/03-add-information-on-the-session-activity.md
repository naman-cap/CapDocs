---
title: Add information on the session activity
excerpt: >-
  This API allows you to add a reason and additional comments on the activity
  performed on the module.
api:
  file: v2.json
  operationId: add-information-on-the-session-activity
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

`{host}/v2/activitySessions/{sessionId}`

# Request body parameters

| Parameter              | Type   | Description                           |
| ---------------------- | ------ | ------------------------------------- |
| activitySessionDetails | array  | An array containing session details.  |
| reason                 | string | The reason for the session.           |
| comment                | string | Additional comment about the session. |

# Response parameters

| Parameter              | Description                                                                             |
| ---------------------- | --------------------------------------------------------------------------------------- |
| activitySessionDetails | An array containing session details.                                                    |
| reason                 | The reason for the session (e.g., "Changed mobile number").                             |
| comment                | Additional comments about the session (e.g., "Customer request").                       |
| autoUpdateTime         | The timestamp indicating the last automatic update time (e.g., "2023-07-13T10:22:49Z"). |
| warnings               | An array containing any warning messages.                                               |