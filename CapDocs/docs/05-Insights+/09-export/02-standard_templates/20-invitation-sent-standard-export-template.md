---
title: Invitation Sent Standard Export Template
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
This export template is base on the [invitation\_sent](https://docs.capillarytech.com/docs/invitation-sent-fact-table) fact. 

Lets you export details of events related to the sending of invitations during a referral campaign. They include fields such as the date and time at which the invitation was sent, identifiers for the campaign, client, and invitee, type of identifier and the status of the invitee.

# Measures

| Measure Name       | Description                                                                                                                                             |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Client Type        | Referrers to the client type from where the invitee came.                                                                                               |
| Identifier Type    | Type of identifier used for the invitee, such as email, or mobile.                                                                                      |
| Invitee Identifier | Identifier for the invitee, such as mobile number.                                                                                                      |
| Client Code        | Referrers to the store code.                                                                                                                            |
| Auto Update Time   | Date and time when the corresponding record in the invitation\_sent table available at the source was last updated. It is in the Unix timestamp format. |
| Invitee Name       | Name of the invitee.                                                                                                                                    |
| Invitee Id         | Unique identifier for the invitee.                                                                                                                      |

# Dimensions

| Dimension Name                                                                                | Description                                                                                     |
| --------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| [Latest Updated Date](https://docs.capillarytech.com/docs/dimension-tables#date)              | Latest date when the data is updated.                                                           |
| [Latest Updated Time](https://docs.capillarytech.com/docs/dimension-tables#time)              | Latest time when the data is updated.                                                           |
| [Date](https://docs.capillarytech.com/docs/dimension-tables#date)                             | Date when the invitation was sent.                                                              |
| [Time](https://docs.capillarytech.com/docs/dimension-tables#time)                             | Time when the invitation was sent.                                                              |
| [Store Hierarchy (zone till)](https://docs.capillarytech.com/docs/dimension-tables#zone-till) | Identifier for the store, till id.                                                              |
| [Concept Hierarchy](https://docs.capillarytech.com/docs/dimension-tables#zone-till)           | Identifier for the concept.                                                                     |
| [Ou Hierarchy](https://docs.capillarytech.com/docs/dimension-tables#zone-till)                | Identifier for the organization unit.                                                           |
| [Campaign](https://docs.capillarytech.com/docs/dimension-tables#campaigns)                    | Identifier for the campaign under which the referral was made.                                  |
| [User](https://docs.capillarytech.com/docs/dimension-tables#users-users)                      | User details such as user id, source, slab name, external id, fraud status, mobile, email, etc. |
| [User Segments](https://docs.capillarytech.com/docs/dimension-tables#users-users)             | Segment details of the customers such as valued customer, lapsed customer.                      |
| [User Attributes](https://docs.capillarytech.com/docs/dimension-tables#users-users)           | User attributes such as total visits, recent view.                                              |
