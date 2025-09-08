---
title: End session
excerpt: This API enables you to end a session.
api:
  file: v2.json
  operationId: end-session
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

`{host}/v2/activitySessions/{sessionId}/endSession`

# Body parameters

| Parameter              | Type   | Definition                                              |
| ---------------------- | ------ | ------------------------------------------------------- |
| activitySessionDetails | Array  | An array containing details about the activity session. |
| reason                 | string | Reason for the session to end.                          |
| comment                | string | Additional comments or notes about the session.         |

# Request parameters

| Parameter              | Description                                              |
| ---------------------- | -------------------------------------------------------- |
| activitySessionDetails | An array containing details about the activity session.  |
| sessionEndTime         | The timestamp indicating the end time of the session.    |
| sessionStatus          | The status of the session (e.g., "INACTIVE").            |
| autoUpdateTime         | The timestamp indicating the last automatic update time. |
| warnings               | An array containing any warning messages.                |