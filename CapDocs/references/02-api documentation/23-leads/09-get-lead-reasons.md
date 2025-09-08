---
title: Get Lead Reasons
excerpt: >-
  Retrieves the list of reasons added for the org with reason ids. These reason
  ids are required to create or update leads.
api:
  file: v2.json
  operationId: get-lead-reasons
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
| :-------- | :--------------------- |
| leadId    | Unique ID of the lead. |

# Response parameter

| Parameter | Description                                    |
| --------- | ---------------------------------------------- |
| id        | Unique identifier for the reason.              |
| reason    | Description or details of the specific reason. |