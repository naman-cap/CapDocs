---
title: Authentication Token
api:
  file: openapi_token_generate.yaml
  operationId: generateAuthToken
hidden: false
---
This API generates an authentication token for the [Store Locator API](https://docs.capillarytech.com/reference/getstorelocatorv1brandnearbystores#/), include the returned token in the `cap_authorization` header of the request to securely access store location data.

<br />

### Request Body parameters

| Parameter       | Type   | Description                                         |
| --------------- | ------ | --------------------------------------------------- |
| identifierType  | string | Type of identifier, e.g. MOBILE, EMAIL, or USERNAME |
| identifierValue | string | Identifier value, e.g. a mobile number              |
| deviceId        | string | Unique device ID                                    |
| brand           | string | Brand name                                          |

### Response Body parameters

| Field     | Type    | Description                      |
| --------- | ------- | -------------------------------- |
| token     | string  | The authentication token         |
| expiresIn | integer | Time in seconds until it expires |