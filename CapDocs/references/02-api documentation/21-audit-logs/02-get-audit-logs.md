---
title: Get Audit Logs by Event Name
api:
  file: v2.json
  operationId: get-audit-logs
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
This API retrieves audit logs for a specific behavioral event. The API provides detailed records of actions and events associated with the selected event name.

## Prerequisites

Make sure you have the right authentication and appropriate access control configured.

* **Access group resource:** Write access to customer group resource. For more information on access control, see, **[access group documentation](https://docs.capillarytech.com/docs/access-group)**.
* **Authentication:** Basic authentication details. For more information on authentication, see [**Authentication**](https://docs.capillarytech.com/docs/api-client)**.**

## Resource information

| HTTP method           | GET   |
| :-------------------- | :---- |
| Authentication        | Basic |
| Pagination supported? | NO    |
| Rate limit            | YES   |
| Batch support         | NO    |

# API Curl

```curl Sample request
curl --location 'https://eu.api.capillarytech.com/v2/events/audit_logs?format=json&eventName=TestingEvent_FE' \
--header 'Authorization: Basic IwM2FlNw==' \
--header 'Cookie: _cfuvid=LvoffYWnKNroiGI4mcPHub.st6yK1dPDHOW3wI1lEls-1751478744816-0.0.1.1-604800000'
```

## Response parameters

| Field           | Type    | Description                                                                                                |
| :-------------- | :------ | :--------------------------------------------------------------------------------------------------------- |
| ..data          | Array   | List containing details of each data entry.                                                                |
| ...id           | string  | Unique identifier for the event name                                                                       |
| ...orgId        | integer | Unique identifier for the organization to which the event belongs.                                         |
| ...valueHistory | Array   | Array that records the historical values of an attribute before and after changes, showing how it evolved. |
| ....value       | string  | Represents the current value of an attribute after a change.                                               |
| ....changedOn   | string  | Date and time when the change happened.                                                                    |
| ...updatedType  | string  | Indicates the type of update, such as creation, modification or deletion.                                  |
| ...requestId    | string  | Unique identifier for the request.                                                                         |
| ...eventName    | string  | Name of the event.                                                                                         |
| ..warnings      | Array   | Array containing warnings, if any.                                                                         |
| ..errors        | Array   | Array containing errors, if any.                                                                           |

## Error codes

| **Code** | **Description**                                                                                         |
| -------- | ------------------------------------------------------------------------------------------------------- |
| 400      | Bad request. The request is invalid or malformed (e.g., incorrect parameters, missing required fields). |
| 401      | Unauthorized. Authentication failed because credentials are missing, invalid, or expired.               |
| 500      | Internal server error. The server encountered an unexpected error while processing the request.         |

<br />