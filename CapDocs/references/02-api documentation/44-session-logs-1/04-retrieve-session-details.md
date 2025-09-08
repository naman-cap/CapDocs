---
title: Retrieve session details
excerpt: This API allows you to retrieve details on the user session.
api:
  file: v2.json
  operationId: retrieve-session-details
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

`{host}/v2/activitySessions?{queryparameters}`

# Query parameters

| Parameter | Type    | Description                                                |
| --------- | ------- | ---------------------------------------------------------- |
| userId    | integer | The Id of the user.                                        |
| offset    | integer | The starting index for data retrieval.                     |
| limit     | integer | The maximum number of items to be retrieved.               |
| startDate | string  | The start date of the desired date range.                  |
| endDate   | string  | The end date of the desired date range.                    |
| entityId  | string  | The Id of the entity associated with the session activity. |

# Response parameters

| Parameter                           | Description                                                              |
| ----------------------------------- | ------------------------------------------------------------------------ |
| pagination                          | An object containing pagination details for the data.                    |
| pagination.limit                    | The maximum number of items to be displayed on each page (e.g., 10).     |
| pagination.offset                   | The starting index of the data to be displayed (e.g., 0).                |
| pagination.total                    | The total number of items available in the dataset (e.g., 53).           |
| data                                | An array containing the actual data with session details.                |
| data.sessionId                      | The unique identifier for the session.                                   |
| data.userId                         | The ID of the user associated with the session.                          |
| data.orgId                          | The ID of the organization associated with the session.                  |
| data.module                         | The module or category of the session.                                   |
| data.sessionStartTime               | The timestamp indicating the start time of the session.                  |
| data.sessionEndTime                 | The timestamp indicating the end time of the session (if applicable).    |
| data.sessionStatus                  | The status of the session (e.g., "ACTIVE" or "INACTIVE").                |
| data.autoUpdateTime                 | The timestamp indicating the last automatic update time for the session. |
| data.activitySessionDetails         | An array containing additional details about the activity session.       |
| data.activitySessionDetails.reason  | The reason associated with the activity session.                         |
| data.activitySessionDetails.comment | Additional comments or notes about the activity session.                 |
| data.activities                     | An array containing details of specific activities within the session.   |
| data.activities.entityId            | The ID of the entity associated with the activity.                       |
| data.activities.entityType          | The type of entity associated with the activity.                         |
| data.activities.name                | The name or type of the activity.                                        |
| data.activities.addedOn             | The timestamp indicating when the activity was added.                    |
| data.activities.note                | Additional notes or comments about the activity.                         |
| warnings                            | An array containing any warning messages.                                |
| errors                              | An array containing any error messages.                                  |