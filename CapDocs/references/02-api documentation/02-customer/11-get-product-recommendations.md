---
title: Get Product Recommendations
excerpt: Retrieves product recommendations for a specific customer.
api:
  file: customer-v11.json
  operationId: get-product-recommendations
deprecated: true
hidden: true
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
> ❗️ This API is Deprecated

<Note title="Note">
Any one of the customer identifiers is required.
</Note>

# Query parameter

| Parameter    | Description                                                                   |
| :----------- | :---------------------------------------------------------------------------- |
| format       | The format of the file.                                                       |
| mobile       | Mobile number of the customer.                                                |
| email        | Email ID of the customer.                                                     |
| external\_id | External ID of the customer.                                                  |
| id           | Unique ID of the customer.                                                    |
| user\_id     | Pass true to retrieve unique customer ID in response. Default value is false. |
| limit        | Limit the number of results to retrieve.                                      |

# Response parameter

| Parameter      | Description                                |
| -------------- | ------------------------------------------ |
| success        | Indicates the success status of the call   |
| code           | HTTP status code                           |
| message        | Message corresponding to the status code   |
| mobile         | Mobile number of the customer              |
| email          | Email address of the customer              |
| external\_id   | External ID of the customer (if available) |
| firstname      | First name of the customer                 |
| lastname       | Last name of the customer                  |
| count          | Count (purpose not clear from context)     |
| recommendation | List of recommendations for the customer   |
| success        | Success status of the item fetch           |
| code           | Code related to item fetch status          |
| message        | Message related to item fetch status       |