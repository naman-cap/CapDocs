---
title: Contacted Standard Export Template
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
The Contacted template is based on the Contact Info fact table.

This template consists of details of customers that were contacted for a specific campaign, except for timeline campaigns. 

## Measures

| Measure                           | Description                                                                                                                                                           |
| --------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| auto\_update\_time\_comm\_details | Date and time (in Unix timestamp) when communication details table is updated.                                                                                        |
| auto\_update\_time\_contact       | Date and time (in Unix timestamp) when the contact table is updated.                                                                                                  |
| message\_body                     | Template of the campaign message.                                                                                                                                     |
| msg\_id                           | This is the template id generated for each message template of a campaign. For example, if there are 5 types of messages sent in a campaign, it will have 5 msg\_ids. |
| nsadmin\_id                       | Communication id corresponding to a specific communication to a customer. This represents a granular level view of a specific communication.                          |
| open\_count                       | Number of times the email message has been opened.                                                                                                                    |
| total\_link\_click\_count         | Total number of times the links within an email have been clicked by the customer.                                                                                    |
| unsubscribed                      | Captures the subscription status of the customer. If the customer has unsubscribed, it will be marked as "Yes"; if not, it will be marked as "Not yet".               |
| year                              | Year of the communication.                                                                                                                                            |

## Dimensions

| Dimension Name                                                                                            | Description                                                                                                          |
| --------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| [Communication Type](https://docs.capillarytech.com/docs/dimension-tables#communication-type)             | Identifier for the type of communication received by the customer.                                                   |
| [User](https://docs.capillarytech.com/docs/dimension-tables#users-users)                                  | Unique identifier assigned to the customer by Capillary.                                                             |
| [Campaign Group](https://docs.capillarytech.com/docs/dimension-tables#campaign-group)                     | Unique identifier assigned to the campaign group. Possible values are - Test, and Control.                           |
| [Store Hierarchy](https://docs.capillarytech.com/docs/dimension-tables#zone-till) (zone till)             | Identifier assigned to the point-of-sale (POS) terminal within a store.                                              |
| [Concept Hierarchy](https://docs.capillarytech.com/docs/dimension-tables#zone-till)                       | Identifier for the concept.                                                                                          |
| [Ou Hierarchy](https://docs.capillarytech.com/docs/dimension-tables#zone-till)                            | Identifier for the organization unit.                                                                                |
| [Communication Channel](https://docs.capillarytech.com/docs/dimension-tables#communication-channel)       | Indicates the channel used for communicating with the customer. Possible values are - SMS, email, voicemail, etc.    |
| [Date](https://docs.capillarytech.com/docs/dimension-tables#date)                                         | Date when the communication with the customer was done.                                                              |
| [Time](https://docs.capillarytech.com/docs/dimension-tables#time)                                         | Time when the communication with the customer was done.                                                              |
| [Campaign Contact Date](https://docs.capillarytech.com/docs/dimension-tables#date)                        | Date when the customer was contacted.                                                                                |
| [Campaign Contact Time](https://docs.capillarytech.com/docs/dimension-tables#time)                        | Time when the customer was contacted.                                                                                |
| [Unsubscription Status](https://docs.capillarytech.com/docs/dimension-tables#unsubscription-status)       | Unique ID for the unsubscription status, indicating whether the customer has opted to unsubscribe or not.            |
| [Link Open Date](https://docs.capillarytech.com/docs/dimension-tables#date)                               | Date when the email within a campaign was accessed.                                                                  |
| [Link Open Time](https://docs.capillarytech.com/docs/dimension-tables#time)                               | Time when the email within a campaign was accessed.                                                                  |
| [Campaign](https://docs.capillarytech.com/docs/dimension-tables#campaigns)                                | Unique identifier assigned to the campaign.                                                                          |
| [Campaign Message](https://docs.capillarytech.com/docs/dimension-tables#campaign-message-campaign_msg)    | Unique identifier assigned to the message sent for the campaign.                                                     |
| [Campaign Delivery Status](https://docs.capillarytech.com/docs/dimension-tables#campaign-delivery-status) | Unique identifier assigned to the campaign delivery status. Possible values: Sent, Delivered, Not Delivered, Failed. |
| [Latest Updated Date](https://docs.capillarytech.com/docs/dimension-tables#date)                          | Latest date when the data is updated.                                                                                |
| [Latest Updated Time](https://docs.capillarytech.com/docs/dimension-tables#time)                          | Latest time when the data is updated.                                                                                |
| [Journey Block](https://docs.capillarytech.com/docs/dimension-tables#journey-block)                       | Identifier of the journey block. It is the combination of journeyMetaId - journeyVersion - blockId.                  |
