---
title: Update Customer Identifier
excerpt: >-
  Lets you submit request to update primary and secondary identifiers (mobile
  no./email id/external id) of a loyalty customer. Requests submitted through
  `customer/update_identity` will be in pending state by default. Capillary
  back-end team verifies the requests and process it accordingly.
api:
  file: customer-v11.json
  operationId: update-customer-identifiers-1
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
### Request Body Parameters

| Parameter    | Datatype | Description                                                                                                                                   |
| ------------ | -------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| identifier\* | enum     | Pass the identifier name that you want to update. Value: `mobile`, `email`, `external_id`.                                                    |
| old\_value\* | string   | Provide the existing value the identifier that you want to update. **Note:** For mobile numbers, add the mobile number with the country code. |
| new\_value\* | string   | Provide the new value of the identifier.                                                                                                      |

<aside class="notice">Parameters marked with * are mandatory.</aside>

### Response Parameters

| Parameter    | Datatype | Description                                                   |
| ------------ | -------- | ------------------------------------------------------------- |
| identifier\* | enum     | Name of the identifier.                                       |
| old\_value\* | string   | Earlier value of the identifier.                              |
| new\_value\* | string   | New identifier value.                                         |
| updated      | boolean  | Returns `true` if the the identifier is updated successfully. |