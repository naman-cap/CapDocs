---
title: Get Lead Substatus
excerpt: Retrieves all the sub-statuses added (for each status) to the organization.
api:
  file: v2.json
  operationId: get-lead-substatus
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
# Response parameter

| Parameter | Description                                               |
| --------- | --------------------------------------------------------- |
| data      | List of objects containing status and sub-status details. |
| status    | Represents the primary status of the entry.               |
| subStatus | Represents the sub-status of the entry.                   |
| warnings  | List of warnings associated with the entry.               |
| errors    | List of errors associated with the entry.                 |