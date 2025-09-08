---
title: Call Tasks Standard Export Template
excerpt: ''
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
This template is based on **call\_task\_customer\_status** fact.

The template lets you export all the call tasks created at the POS for cashiers to process. The tasks could be call customers for birthday wishes that will get populated every day for the cashier to process. These tasks have a specific validity within which these needs to be closed. 

## Measures

| Measure                      | Description                                                                                                                                        |
| ---------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| Auto Update Time Task Status | Date and time when the corresponding record in the task status table available at the source was last updated. It is in the Unix timestamp format. |
| Call Task Id                 | Unique id associated to the call task.                                                                                                             |

## Dimensions

| Dimension Name                                                                                         | Description                                                                                     |
| ------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------- |
| [Store Hierarchy (zone till)](https://docs.capillarytech.com/docs/dimension-tables#zone-till)          | Identifier for the store, till id.                                                              |
| [Concept Hierarchy](https://docs.capillarytech.com/docs/dimension-tables#zone-till)                    | Identifier for the concept.                                                                     |
| [Ou Hierarchy](https://docs.capillarytech.com/docs/dimension-tables#zone-till)                         | Identifier for the organization unit.                                                           |
| [Task](https://docs.capillarytech.com/docs/dimension-tables#tasks)                                     | Provides details about the task, including the task type, task description, etc.                |
| [User](https://docs.capillarytech.com/docs/dimension-tables#users-users)                               | User details such as user id, source, slab name, external id, fraud status, mobile, email, etc. |
| [User Segments](https://docs.capillarytech.com/docs/dimension-tables#users-users)                      | Segment details of the customers such as valued customer, lapsed customer.                      |
| [User Attributes](https://docs.capillarytech.com/docs/dimension-tables#users-users)                    | User attributes such as total visits, recent view.                                              |
| [Updated By User](https://docs.capillarytech.com/docs/dimension-tables#users-users)                    | Details of the user who updated the call task status.                                           |
| [Date](https://docs.capillarytech.com/docs/dimension-tables#date)                                      | Date attributes of the call task.                                                               |
| [Time](https://docs.capillarytech.com/docs/dimension-tables#time)                                      | Time attributes of the call task.                                                               |
| [Updated Date](https://docs.capillarytech.com/docs/dimension-tables#date)                              | Captures the date when the date has been updated.                                               |
| [Updated Time](https://docs.capillarytech.com/docs/dimension-tables#time)                              | Captures the time when the date has been updated.                                               |
| [Internal Status](https://docs.capillarytech.com/docs/dimension-tables#internal-status)                | Identifier for the internal status of the call task, such as open and closed task.              |
| [Latest Updated Date](https://docs.capillarytech.com/docs/dimension-tables#date)                       | Latest date when the data is updated.                                                           |
| [Latest Updated Time](https://docs.capillarytech.com/docs/dimension-tables#time)                       | Latest time when the data is updated.                                                           |
| [Campaign](https://docs.capillarytech.com/docs/dimension-tables#campaigns)                             | Identifier of the campaign associated with the call task.                                       |
| [Campaign Message](https://docs.capillarytech.com/docs/dimension-tables#campaign-message-campaign_msg) | Identifier of the campaign message associated with the call task.                               |
