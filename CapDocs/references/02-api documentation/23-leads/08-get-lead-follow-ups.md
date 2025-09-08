---
title: Get Lead follow-ups
excerpt: Retrieves the follow ups of a specific lead.
api:
  file: v2.json
  operationId: get-lead-follow-ups
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
# Path parameters

| Parameter | Description            |
| :-------- | :--------------------- |
| leadId    | Unique ID of the lead. |

# Response parameter

| Parameter         | Description                                      |
| ----------------- | ------------------------------------------------ |
| id                | Unique identifier for the data entry.            |
| userId            | User's unique ID associated with the data entry. |
| leadId            | Unique ID of the lead.                           |
| notes             | Additional notes or comments for the entry.      |
| createdBy         | ID of the user who created the entry.            |
| createdOn         | Timestamp when the entry was created.            |
| followedUpBy      | ID of the user who followed up on the entry.     |
| followedUpOn      | Timestamp when the entry was followed up on.     |
| scheduledFollowUp | Timestamp for the scheduled follow-up.           |