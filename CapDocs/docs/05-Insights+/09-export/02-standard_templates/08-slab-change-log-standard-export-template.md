---
title: Slab Change Log Standard Export Template
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
The slab change log template is based on the **slab\_change\_log** fact.

This template lets you export the entire slab history of the customer. You can also get the slab change in a specific duration.

## Measures

| Measure                       | Description                                                                                                                |
| ----------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| Auto Update Time Slab Upgrade | Date and time when the slab upgrade table is available at the source was last updated. It is in the Unix timestamp format. |
| Event Date Time               | Date and time in Unix timestamp when a slab is changed                                                                     |
| Event Source Id               | Unique id of the event source.                                                                                             |
| Notes                         | Reason why the slab is changed.                                                                                            |
| Slab Name                     | Name of the slab or tier.                                                                                                  |
| User Id                       | Unique id of a customer.                                                                                                   |
| Id                            | Unique id of slab upgrade history table.                                                                                   |

## Dimensions

| Dimension Name                                                                                                   | Description                                                                                     |
| ---------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| [Date](https://docs.capillarytech.com/docs/dimension-tables#date)                                                | Date attributes of the payment.                                                                 |
| [Time](https://docs.capillarytech.com/docs/dimension-tables#time)                                                | Time attributes of the payment.                                                                 |
| [Customer Slab](https://docs.capillarytech.com/docs/dimension-tables#customer-slab)                              | Slab details to which the customer belongs.                                                     |
| [Scd Type](https://docs.capillarytech.com/docs/dimension-tables#scd-type)                                        | Captures the SCD type used for customer segmentation.                                           |
| [Previous Customer Slab](https://docs.capillarytech.com/docs/dimension-tables#customer-slab)                     | Gives the details of the customer slab before the change.                                       |
| [Store Hierarchy (zone till)](https://docs.capillarytech.com/docs/dimension-tables#zone-till)                    | Identifier for the store, till id.                                                              |
| [Concept Hierarchy](https://docs.capillarytech.com/docs/dimension-tables#zone-till)                              | Identifier for the concept.                                                                     |
| [Ou Hierarchy](https://docs.capillarytech.com/docs/dimension-tables#zone-till)                                   | Identifier for the organization unit.                                                           |
| [Slab Upgrade Event Type](https://docs.capillarytech.com/docs/dimension-tables#upgrade-event-type)               | Captures event that caused the customer's slab upgrade.                                         |
| [Latest Updated Date](https://docs.capillarytech.com/docs/dimension-tables#date)                                 | Latest date when the data is updated.                                                           |
| [Latest Updated Time](https://docs.capillarytech.com/docs/dimension-tables#time)                                 | Latest time when the data is updated.                                                           |
| [User](https://docs.capillarytech.com/docs/dimension-tables#users-users)                                         | User details such as user id, source, slab name, external id, fraud status, mobile, email, etc. |
| [User Segments](https://docs.capillarytech.com/docs/dimension-tables#users-users)                                | Segment details of the customers such as valued customer, lapsed customer.                      |
| [User Attributes](https://docs.capillarytech.com/docs/dimension-tables#users-users)                              | User attributes such as total visits, recent view.                                              |
| [Slab Change Action](https://docs.capillarytech.com/docs/dimension-tables#slab-change-action-slab_change_action) | Captures the action associated with the customer's slab change.                                 |
| [Slab Change Source](https://docs.capillarytech.com/docs/dimension-tables#slab-change-source-slab_change_source) | Captures the source associated with the customer's slab change.                                 |
