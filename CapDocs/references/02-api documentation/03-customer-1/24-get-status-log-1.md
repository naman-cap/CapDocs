---
title: Get Customer Status Log
excerpt: Retrieves the log of customer status changes.
api:
  file: v2.json
  operationId: get-status-log-1
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
# Response Parameter

| Parameter       | Data Type      | Description                                                    |
| :-------------- | :------------- | :------------------------------------------------------------- |
| data            | Array\[Object] | List of status objects.                                        |
| -createdByUser  | String         | Username of the user who created the status                    |
| -reason         | String         | Reason for the status (e.g., `"This is the active customer"`). |
| -createdBy      | Number         | User ID of the creator.                                        |
| -actions        | Array          | List of possible actions                                       |
| -autoUpdateTime | String (Date)  | Timestamp of auto-update (format: `YYYY-MM-DD`).               |
| -createdOn      | String (ISO)   | Creation timestamp (format: `YYYY-MM-DDTHH:MM:SSZ`).           |
| -entityId       | Number         | Unique ID of the associated entity.                            |
| -isActive       | Boolean        | Indicates if the status is active (`true`/`false`).            |
| -label          | String         | Display label (e.g., `"Active"`).                              |
| -status         | String         | System status value (e.g., `"ACTIVE"`).                        |

```
{
    "data": [
        {
            "createdByUser": "1736163234_",
            "reason": "This is the active customer",
            "createdBy": 75155291,
            "actions": [],
            "autoUpdateTime": "2025-01-30",
            "createdOn": "2025-01-30T09:17:06Z",
            "entityId": 564590100,
            "isActive": true,
            "label": "Active",
            "status": "ACTIVE"
        }
    ],
    "warnings": [],
    "errors": []
}
```

## API specific error code

| Error Code | Description           | Reason                                                                     |
| ---------- | --------------------- | -------------------------------------------------------------------------- |
| 400        | Bad Request           | Invalid input parameters (malformed body/query)                            |
| 401        | Unauthorized          | Missing or invalid authentication token                                    |
| 404        | Not Found             | Specified customer ID doesn't exist/No log entries exist for this customer |
| 500        | Internal Server Error | Unexpected server failure (contact support)                                |