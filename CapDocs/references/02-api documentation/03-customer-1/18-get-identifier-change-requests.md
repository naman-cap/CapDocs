---
title: Get Identifier Change Requests
excerpt: >-
  Retrieves the details of identifiers (mobile number/email ID/external
  ID)change requests. You can also fetch change requests of a specific
  identifier type using the query parameters.
api:
  file: v2.json
  operationId: get-identifier-change-requests
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
# Response Parameters

| Parameter | Data Type | Description                                            |
| :-------- | :-------- | :----------------------------------------------------- |
| entity    | long      | Internally generated entity ID after successful lookup |
| warnings  | object    | Warnings generated, if any.                            |

## API specific error code

| Error Code | Description                                  | Reason                                                     |
| :--------- | :------------------------------------------- | :--------------------------------------------------------- |
| 8013       | Lookup,Invalid identifier passed             | Identifier passed is invalid or unsupported                |
| 8015       | Customer not found for the given identifiers | mobile/emailId/externalId passed is invalid or unsupported |
| 8003       | Invalid source                               | Source is invalid or unsupported                           |