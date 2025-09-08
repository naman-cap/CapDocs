---
title: Goodwill Requests Standard Export Template
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
This export template is based on the [goodwill\_requests](https://docs.capillarytech.com/docs/goodwill-requests-fact-table) fact. 

Lets you export the details of the goodwill requests generated while allocating goodwill points or coupons to the customers.

# Measures

| Measure Name               | Description                                                                                                                                                             |
| -------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Request Status             | Gives the status of the goodwill request.                                                                                                                               |
| Request Type               | Gives the type of the goodwill request.                                                                                                                                 |
| Is One Step Change         | Indicates if one step issual of goodwill points is active or not. In one step issual, goodwill points are issued instantly without requiring additional approval steps. |
| Request Auto Update Time   | Time when the goodwill request table available at the source was last updated. It is in the Unix timestamp format.                                                      |
| Goodwill Type              | Type or category of the goodwill request (coupons or points).                                                                                                           |
| Goodwill Request Status    | Status of the goodwill request associated with the points. Indicates if the status is approved or not.                                                                  |
| Reason                     | Reason for the goodwill request.                                                                                                                                        |
| Comments                   | Any remarks related to the goodwill points, added by the user.                                                                                                          |
| Request Assoc Id           | Associated ID for the goodwill request.                                                                                                                                 |
| Approved Value             | Value of the points that has been approved.                                                                                                                             |
| Approval Comments          | Comments added by the approver for the goodwill point allocation request.                                                                                               |
| Allocated Points           | Total number of goodwill points issued to the customer.                                                                                                                 |
| GoodWill Points log notes  | Additional information about goodwill points.                                                                                                                           |
| Points Event Id            | Refers to the points fact table event id.                                                                                                                               |
| GoodWill Points Log Status | Status indicator for the goodwill points log.                                                                                                                           |
| Gr Auto Update Time        | Time when the goodwill request table available at the source was last updated. It is in the Unix timestamp format.                                                      |
| Gpl Auto Update Time       | Time when the goodwill points logs table available at the source was last updated. It is in the Unix timestamp format.                                                  |
| Event Id                   | Unique identifier for the Goodwill points table.                                                                                                                        |
| Goodwill Points Logs Id    | Unique identifier for each entry in the goodwill points log.                                                                                                            |

# Dimensions

| **Dimension Name**                                                                            | **Description**                                                                                                                                                                                          |
| --------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Latest Updated Date](https://docs.capillarytech.com/docs/dimension-tables#date)              | Latest date when the data is updated.                                                                                                                                                                    |
| [Latest Updated Time](https://docs.capillarytech.com/docs/dimension-tables#time)              | Latest time when the data is updated.                                                                                                                                                                    |
| [User](https://docs.capillarytech.com/docs/dimension-tables#users-users)                      | User details such as user id, source, slab name, external id, fraud status, mobile, email, etc.                                                                                                          |
| [User Segments](https://docs.capillarytech.com/docs/dimension-tables#users-users)             | Segment details of the customers such as valued customer, lapsed customer.                                                                                                                               |
| [User Attributes](https://docs.capillarytech.com/docs/dimension-tables#users-users)           | User attributes such as total visits, recent view.                                                                                                                                                       |
| [Store Hierarchy (zone till)](https://docs.capillarytech.com/docs/dimension-tables#zone-till) | Identifier for the store, till id.                                                                                                                                                                       |
| [Concept Hierarchy](https://docs.capillarytech.com/docs/dimension-tables#zone-till)           | Identifier for the concept.                                                                                                                                                                              |
| [Ou Hierarchy](https://docs.capillarytech.com/docs/dimension-tables#zone-till)                | Identifier for the organization unit.                                                                                                                                                                    |
| [Request Created Date](https://docs.capillarytech.com/docs/dimension-tables#date)             | Date when the goodwill request was created.                                                                                                                                                              |
| [Request Updated Date](https://docs.capillarytech.com/docs/dimension-tables#date)             | Date when the goodwill request was updated.                                                                                                                                                              |
| [Event Program](https://docs.capillarytech.com/docs/dimension-tables#program)                 | Gives the loyalty program name against which the goodwill points have been allocated.                                                                                                                    |
| [Points Category Id](https://docs.capillarytech.com/docs/dimension-tables#points-category)    | Gives the category name against which the goodwill points have been allocated. Possible values are - Regular points, Trackers, Promised points, Alternate currencies, and External trigger based points. |
