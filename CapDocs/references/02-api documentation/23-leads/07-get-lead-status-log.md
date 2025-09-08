---
title: Get Lead Status Log
excerpt: Retrieves the status change log of a specific lead.
api:
  file: v2.json
  operationId: get-lead-status-log
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
# Path parameter

| Parameter | Description            |
| --------- | ---------------------- |
| leadId    | Unique ID of the lead. |

# Response parameter

| Parameter | Description                                      |
| --------- | ------------------------------------------------ |
| id        | Unique identifier for the data entry.            |
| userId    | User's unique ID associated with the data entry. |
| leadId    | Unique ID of the lead.                           |
| status    | Status of the entry.                             |
| createdBy | ID of the user who created the entry.            |
| createdOn | Timestamp when the entry was created.            |
| reasonId  | Unique identifier for the reason.                |
| reason    | Description or name of the reason.               |