---
title: Messages Standard Export Template
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
This template is based on the **nsadmin** fact.

The template lets you export all the communications sent to customers. This is the only template through which you can get both transaction and campaign messages together. 

## Measures

| Measure                  | Description                                                                                                                                    |
| ------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| Auto Update Time Nsadmin | Date and time when the corresponding record in the nsadmin table available at the source was last updated. It is in the Unix timestamp format. |
| Client Context Id        | The context id to which the message belongs. If the message is triggered by campaigns, it will be the communication details id.                |
| Client Id                | Identifier of the client that triggered the message, such as campaigns. Each module has a unique static id.                                    |
| Message                  | Actual message sent to NS Admin.                                                                                                               |
| Message Count            | Number of messages sent to NS Admin.                                                                                                           |
| Nsadmin Id               | Unique id of the message as available in the nsadmin table.                                                                                    |

## Dimensions

| Dimension Name                                                                                      | Description                                                                                                                                               |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Date](https://docs.capillarytech.com/docs/dimension-tables#date)                                   | Date attributes related to the communication.                                                                                                             |
| [Nsadmin Priority](https://docs.capillarytech.com/docs/dimension-tables#nsadmin-priority)           | Identifier of the nsadmin message priority, such as high or low priority.                                                                                 |
| [Campaign](https://docs.capillarytech.com/docs/dimension-tables#campaigns)                          | Captures the campaign details for which the communication occurred.                                                                                       |
| [Communication Channel](https://docs.capillarytech.com/docs/dimension-tables#communication-channel) | Indicates the channel used for communicating with the customer. These include SMS, email, voicemail, WeChat, Facebook, Viber, etc.                        |
| [Delivery Status](https://docs.capillarytech.com/docs/dimension-tables#campaign-delivery-status)    | Identifier assigned to the nsadmin message delivery status. These include delayed delivery, clicked, opened, received, read, sending, sent, blocked, etc. |
| [Gateway Account](https://docs.capillarytech.com/docs/dimension-tables#gateway)                     | Identifier for the gateway account used for the communication.                                                                                            |
| [Latest Updated Date](https://docs.capillarytech.com/docs/dimension-tables#date)                    | Latest date when the data is updated.                                                                                                                     |
| [Latest Updated Time](https://docs.capillarytech.com/docs/dimension-tables#time)                    | Latest time when the data is updated.                                                                                                                     |
| [User](https://docs.capillarytech.com/docs/dimension-tables#users-users)                            | User details such as user id, source, slab name, external id, fraud status, mobile, email, etc.                                                           |
| [User Segments](https://docs.capillarytech.com/docs/dimension-tables#users-users)                   | Segment details of the customers such as valued customer, lapsed customer.                                                                                |
| [User Attributes](https://docs.capillarytech.com/docs/dimension-tables#users-users)                 | User attributes such as total visits, recent view.                                                                                                        |
| [Time](https://docs.capillarytech.com/docs/dimension-tables#time)                                   | Time attributes related to the communication.                                                                                                             |
| [Communication Client](https://docs.capillarytech.com/docs/dimension-tables#communication-client)   | Identifier of the client associated with the communication.                                                                                               |
