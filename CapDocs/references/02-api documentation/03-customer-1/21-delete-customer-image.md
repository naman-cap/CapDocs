---
title: Delete Customer Image
excerpt: Deletes the profile image that is set for a customer.
api:
  file: v2.json
  operationId: delete-customer-image
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
## Query Parameter

| Parameter    | Type    | Description                                                           |
| :----------- | :------ | :-------------------------------------------------------------------- |
| image\_ids\* | Integer | Unique IDs of images to be deleted. Pass each image ID in a new line. |

## Response Parameter

| Parameter | Type   | Description                        |
| :-------- | :----- | :--------------------------------- |
| message   | string | Success/failure message            |
| status    | string | "true" if successful, else "false" |

## API specific Error Code

| Error Code | Description                                  | Reason                                 |
| :--------- | :------------------------------------------- | :------------------------------------- |
| 8078       | No Image passed to be deleted.               | Valid Image not passed.                |
| 8015       | Customer not found for the given identifiers | Valid customer identifiers not passed. |