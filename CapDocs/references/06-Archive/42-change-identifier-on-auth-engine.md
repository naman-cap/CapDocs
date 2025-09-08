---
title: Change identifier on Auth engine (COPY)
excerpt: This API enables you to change identifier values in the Auth engine.
api:
  file: v1.json
  operationId: change-identifier-on-auth-engine
deprecated: false
hidden: true
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
> 👍
>
> For detailed information about our APIs and for hands-on testing, refer documentation in [API overview](https://docs.capillarytech.com/reference/apioverview) and  step-by-step guide on making your first API call in [Make your first API call](https://docs.capillarytech.com/reference/make-your-first-api-call) .

# API specifications

| Feature                  | Availability |
| :----------------------- | :----------- |
| Authentication supported | Basic/OAuth  |
| Access Group             | NA           |

# API endpoint

`{host}/auth/v1/user/updateIdentifierValue`

# Body parameters

| Parameter            | Type   | Description                                                                                                           |
| -------------------- | ------ | --------------------------------------------------------------------------------------------------------------------- |
| brandName\*          | String | The brand name (e.g., BUKL)                                                                                           |
| identifierType\*     | String | The type of identifier (e.g., `MOBILE`, `EMAIL`)                                                                      |
| oldIdentifierValue\* | String | The old identifier value (e.g., 919988776655). Make sure that the identifier value matches with the value on Intouch. |
| newIdentifierValue\* | String | The new identifier value (e.g., 919988776656)                                                                         |

# Response parameters

| Parameter | Type    | Description                                                                   |
| --------- | ------- | ----------------------------------------------------------------------------- |
| status    | Object  | An object containing status details                                           |
| success   | Boolean | Indicates whether the operation was successful (true or false)                |
| code      | Integer | The status code associated with the response (e.g., 200)                      |
| message   | String  | A message providing additional information about the status (e.g., "SUCCESS") |

# API-Specific error codes

| Status code | Description                                                           |
| :---------- | :-------------------------------------------------------------------- |
| 500         | The organization does not exist. Check the entered organization name. |
| 500         | Old and new identifier values are the same.                           |
| 500         | Something went wrong. Check the identifier value and type.            |
| 500         | The Brand name field is empty. Enter brand name.                      |