---
title: Profiles Standard Export Template
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
This template is based on the **[profile\_users](https://docs.capillarytech.com/docs/profile-users-fact-table)** fact.

A customer can register with the brand through multiple sources. For example, InStore , WeChat, Tmall , Mobile app or any other source. This template lets you export customer details from various sources. It currently does not capture InStore registrations.  

## Measures

| Measure                        | Description                                                                                                                                           |
| ------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| Auto Update Time Profile Users | Date and time when the corresponding record in the communications table available at the source was last updated. It is in the Unix timestamp format. |
| Comm Channel Android           | Unique identifier if the customer's profile was created using an Android app.                                                                         |
| Comm Channel Email             | Email address associated with the customer's profile, specifically if the profile was created through an Android or iOS app.                          |
| Comm Channel Ios               | Unique identifier if the customer's profile was created using an iOS app.                                                                             |
| Comm Channel Mobile            | Mobile number of the customer registered for communication.                                                                                           |
| Comm Channel Wechat            | WeChat id of a customer registered for communication.                                                                                                 |
| First Name                     | First name of the customer.                                                                                                                           |
| Id Email                       | Email ID of the customer                                                                                                                              |
| Id External                    | External ID of the customer.                                                                                                                          |
| Id Mobile                      | Mobile number of the customer.                                                                                                                        |
| Id Unique                      | Unique id of the customer generated internally.                                                                                                       |
| Last Name                      | Last name of the customer.                                                                                                                            |

## Dimensions

| Dimension Name                                                                                  | Description                                                                                                                                                                                   |
| ----------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [User](https://docs.capillarytech.com/docs/dimension-tables#users-users)                        | User details such as user id, source, slab name, external id, fraud status, mobile, email, etc.                                                                                               |
| [User Segments](https://docs.capillarytech.com/docs/dimension-tables#users-users)               | Segment details of the customers such as valued customer, lapsed customer.                                                                                                                    |
| [User Attributes](https://docs.capillarytech.com/docs/dimension-tables#users-users)             | User attributes such as total visits, recent view.                                                                                                                                            |
| [Date](https://docs.capillarytech.com/docs/dimension-tables#date)                               | Date attributes of the registration.                                                                                                                                                          |
| [Time](https://docs.capillarytech.com/docs/dimension-tables#time)                               | Time attributes of the registration.                                                                                                                                                          |
| [Store Hierarchy](https://docs.capillarytech.com/docs/dimension-tables#zone-till)               | Identifier for the store, till id.                                                                                                                                                            |
| [Concept Hierarchy](https://docs.capillarytech.com/docs/dimension-tables#zone-till)             | Identifier for the concept.                                                                                                                                                                   |
| [Ou Hierarchy](https://docs.capillarytech.com/docs/dimension-tables#zone-till)                  | Identifier for the organization unit.                                                                                                                                                         |
| [Channel Account](https://docs.capillarytech.com/docs/dimension-tables#channel-account)         | Identifier for the channel where the customer's profile was created. These include WhatsApp, Web\_engage, Mobile\_app, Line, and WeChat.                                                      |
| [Latest Updated Date](https://docs.capillarytech.com/docs/dimension-tables#date)                | Latest date when the data is updated.                                                                                                                                                         |
| [Latest Updated Time](https://docs.capillarytech.com/docs/dimension-tables#time)                | Latest time when the data is updated.                                                                                                                                                         |
| [Source Profile Type](https://docs.capillarytech.com/docs/dimension-tables#source-profile-type) | Identifier for the source where the customer's profile was created. If the customer's profile was created in-store, the value will be 'Instore', and if not, the value will be 'Not-instore'. |
