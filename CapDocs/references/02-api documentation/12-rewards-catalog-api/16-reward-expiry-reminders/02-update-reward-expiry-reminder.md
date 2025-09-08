---
title: Update Reward Expiry Reminder
excerpt: ''
api:
  file: v1.json
  operationId: update-reward-expiry-reminder
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
This API is used to update the Reward expiry reminder to remind the user that their rewards are expiring.

> 👍 Note
>
> * For detailed information about our APIs and for hands-on testing, refer documentation in [API overview](https://docs.capillarytech.com/reference/apioverview) and step-by-step guide on making your first API call in [Make your first API call](https://docs.capillarytech.com/reference/make-your-first-api-call).

# Prerequisites

*   Authentication: Basic or OAuth authentication
*   Default access group

# Resource information

|                        |                                                                               |
| :--------------------- | :---------------------------------------------------------------------------- |
| URI                    | api\_gateway/rewards/core/v1/reward/expiryReminder/`{rewardExpiryReminderid}` |
| HTTP Method            | PUT                                                                           |
| Pagination             | No                                                                            |
| Batch support          | No                                                                            |
| Rate limit information | None                                                                          |

# API endpoint example

`https://eu.api.capillarytech.com/api_gateway/rewards/core/v1/reward/expiryReminder/1`

# Request path parameters

| Parameter Name           | Data Type | Description                                 |
| ------------------------ | --------- | ------------------------------------------- |
| rewardExpiryReminderid\* | Integer   | Unique identifier of Reward Expiry Reminder |

# Request body parameters

| Parameter Name | Data Type | Description                                                                                                                                                                                                                                                                           |
| -------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| isActive       | Boolean   | This indicates whether the reward expiry reminder is active or not.                                                                                                                                                                                                                   |
| duration\*     | Integer   | The duration specifies how many days in advance the reward expiry reminder will be sent before the reward expires. This does not have any default value set and is mandatory.                                                                                                         |
| timing         | timestamp | This defines the specific time when the reminder will be sent. The time should be provided in 24-hour format (HH:MM) and represents the the org's cluster (server) time. If no time is specified, the reminder will automatically be set for 16:00 server time for the org's cluster. |

```json Request
{
    "isActive":true,
    "duration": 15,
    "timing": "12:00"
}
```

# Response parameters

| Parameter Name        | Description                                                                                                                                         |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| success               | Indicates if the request was successful.                                                                                                            |
| code                  | Response status code.                                                                                                                               |
| message               | Message describing the status of the response.                                                                                                      |
| id                    | Unique identifier for the reward expiry reminder.                                                                                                   |
| orgId                 | Identifier for the organization associated with the reminder.                                                                                       |
| duration              | Duration before the expiry to send a reminder.                                                                                                      |
| durationType          | Type of duration.                                                                                                                                   |
| cronTaskId            | This is the unique database identifier for each cron setup, with each cron associated with specific timing, modules, and other relevant parameters. |
| timing                | Time at which the reminder will be triggered (in HH:MM format).                                                                                     |
| isActive              | Indicates whether the reminder is currently active.                                                                                                 |
| createdOn             | Timestamp of when the reminder was created in epoch timestamp                                                                                       |
| createdOnDateTime     | Creation date and time of the field in ISO 8601 format (YYYY-MM-DDTHH:MM:SSZ)                                                                       |
| lastUpdatedOn         | Timestamp of the last update in epoch timestamp.                                                                                                    |
| lastUpdatedOnDateTime | Last Updated date and time of the field in ISO 8601 format (YYYY-MM-DDTHH:MM:SSZ)                                                                   |
| createdBy             | Identifier of the user who created the reminder.                                                                                                    |
| lastUpdatedBy         | Identifier of the user who last updated the reminder.                                                                                               |

```json 200- Response
{
    "status": {
        "success": true,
        "code": 12040,
        "message": "Reward expiry reminder updated"
    },
    "rewardExpiryReminder": {
        "id": 34,
        "orgId": 100737,
        "duration": 15,
        "durationType": "DAYS",
        "cronTaskId": 605157,
        "timing": "12:00",
        "isActive": true,
        "createdOn": 1741892481000,
        "createdOnDateTime": "2025-03-13T19:01:21Z",
        "lastUpdatedOn": 1741892497000,
        "lastUpdatedOnDateTime": "2025-03-13T19:01:37Z",
        "createdBy": 75155282,
        "lastUpdatedBy": 75155282
    }
}
```
```json 400- No duration is passed.
{
    "status": {
        "success": false,
        "code": 400,
        "message": "Duration is mandatory"
    }
}
```
```json 400- Invalid Reward Expiry Reminder ID
{
    "status": {
        "success": false,
        "code": 400,
        "message": "Reward expiry reminder with id 34 does not exist"
    }
}
```

# API-specific error codes

| Error code | Description                       |
| :--------- | :-------------------------------- |
| 400        | Duration is mandatory             |
| 400        | Invalid Reward Expiry Reminder ID |