---
title: Add Ticket (Not in Use)
excerpt: Lets you to create a new ticket for a customer.
api:
  file: customer-v11.json
  operationId: add-ticket
deprecated: false
hidden: true
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
### Request Body Parameters

| Parameter             | Datatype | Description                                                                                                         |
| --------------------- | -------- | ------------------------------------------------------------------------------------------------------------------- |
| Customer identifier\* | string   | Pass any one identifier of the customer - mobile, email, external\_id, or id (user\_id).                            |
| status                | enum     | Status of the ticket. Accepts only values configured for the org. Sample values: `Open`, `Close`, `InProgress`.     |
| priority              | enum     | Priority of the ticket. Value: `low`, `medium`, `high`.                                                             |
| department            | string   | Set the department for which the ticket needs to be assigned                                                        |
| ticket\_code          | string   | Pass the ticket id.                                                                                                 |
| reported\_from        | enum     | Source from which the ticket is created. Values: `EMAIL`, `INTOUCH`, `CALLCENTER`, `CLIENT`, `MICROSITE`, `SOCIAL`. |
| type                  | enum     | Type of the ticket. Value: `STORE`, `Customer`.                                                                     |