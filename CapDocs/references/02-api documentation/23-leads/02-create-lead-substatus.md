---
title: Add Lead Substatus
excerpt: Lets you create a new sub-status to a lead status.
api:
  file: v2.json
  operationId: create-lead-substatus
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
# Body parameter

| Parameter | Description                                        |
| --------- | -------------------------------------------------- |
| status    | Status for which you want to add sub-status.       |
| subStatus | Name of the new sub-status that you want to create |

# Response parameter

| Parameter | Description                                 |
| --------- | ------------------------------------------- |
| status    | Represents the primary status of the entry. |
| subStatus | Represents the sub-status of the entry.     |
| warnings  | List of warnings associated with the entry. |