---
title: Customer Merge Event Log Standard Export Template
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
This template is based on the **customer\_merge\_log** fact.

Customer Merge Event Log lets you export the log of customer account merge event which includes both victim and survivor details. The template also supports, audience filter based and customer segment based filters.

## Measures

| Measure            | Dimension                                                                          |
| ------------------ | ---------------------------------------------------------------------------------- |
| Auto Update Time   | Date and time (in Unix timestamp) when the customer merge log is recently updated. |
| Details            | Details about the merge process.                                                   |
| Merge Reason       | Reason specified while merging the account.                                        |
| Victim External Id | External id of the victim account.                                                 |
| Victim Mobile      | Mobile number of the victim account.                                               |
| Merge Event Id     | Unique internal id associated to the merge event.                                  |

## Dimensions

| Dimension Name                                                                          | Description                                                                                     |
| --------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| [User](https://docs.capillarytech.com/docs/dimension-tables#users-users)                | User details such as user id, source, slab name, external id, fraud status, mobile, email, etc. |
| [User Segments](https://docs.capillarytech.com/docs/dimension-tables#users-users)       | Segment details of the customers such as valued customer, lapsed customer.                      |
| [User Attributes](https://docs.capillarytech.com/docs/dimension-tables#users-users)     | User attributes such as total visits, recent view.                                              |
| [Victim User](https://docs.capillarytech.com/docs/dimension-tables#users-users)         | Identifier for the user with which the customer profile was merged.                             |
| [Date](https://docs.capillarytech.com/docs/dimension-tables#date)                       | Date attributes of the customer merge.                                                          |
| [Time](https://docs.capillarytech.com/docs/dimension-tables#time)                       | Time attributes of the customer merge.                                                          |
| [Merge By Till](https://docs.capillarytech.com/docs/dimension-tables#zone-till)         | Identifier for the store (till) where the customer profile was merged.                          |
| [Merge By Admin User](https://docs.capillarytech.com/docs/dimension-tables#admin-users) | Identifier for the admin user who performed the merge.                                          |
| [Latest Updated Date](https://docs.capillarytech.com/docs/dimension-tables#date)        | Latest date when the data is updated.                                                           |
| [Latest Updated Time](https://docs.capillarytech.com/docs/dimension-tables#time)        | Latest time when the data is updated.                                                           |
