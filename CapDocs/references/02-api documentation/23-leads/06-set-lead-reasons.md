---
title: Configure lead reasons
excerpt: >-
  Lets you add your preferred reasons that are required while adding or updating
  a lead at the organization level.
api:
  file: v2.json
  operationId: set-lead-reasons
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
Reasons are used to add or update a lead status. Lead reasons are org specific. You can create reasons of your own and use the respective reason IDs to add or update a lead status.

# Body parameter

| Parameter | Description                                                          |
| :-------- | :------------------------------------------------------------------- |
| reason    | Specify a meaningful reason that you want to add to the organization |

# Response parameter

| Parameter | Description                                   |
| --------- | --------------------------------------------- |
| id        | Unique identifier for the reason              |
| reason    | Description or explanation for the reason     |
| warnings  | List of warnings related to the response      |
| errors    | List of errors encountered during the request |