---
title: Add/Update Customer Notes
excerpt: This API allows you to capture additional information about the customer.
api:
  file: customer-v11.json
  operationId: addupdate-customer-notes
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
## Request Body Parameters (Add)

| Parameter             | Datatype | Description                                                                                                                 |
| --------------------- | -------- | --------------------------------------------------------------------------------------------------------------------------- |
| Customer identifier\* | string   | Pass any of the unique identifiers of the customer for whom you want to add notes (mobile no/email id/external id/user\_id) |
| date                  | date     | Date that you associate to the notes. By default, current date will be considered.                                          |
| description\*         | string   | Details or message of the note in a plain text format. The maximum number of characters supported is 255.                   |

### Request Body Parameters (Update)

| Parameter                              | Datatype | Description                                                                                                              |
| -------------------------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------ |
| mobile/email/external\_id/user\_id\*\* | enum     | Unique identifier of the customer for which you want to update customer notes (mobile no/email id/external id/user\_id). |
| description\*                          | string   | New notes that you want to update with (plain text).                                                                     |
| id\*                                   | int      | Unique id of the customer note that you want to update.                                                                  |

<aside class="note">Parameters marked with * are mandatory.</aside>