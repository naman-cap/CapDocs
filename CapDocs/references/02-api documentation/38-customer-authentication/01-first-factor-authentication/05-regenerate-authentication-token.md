---
title: Regenerate Authentication Token
excerpt: >-
  Generates authentication token using auth key or expired token generated in
  `otp/validate` API. By default, a token is valid for 15 minutes. You can use
  this API only for orgs in which password based authentication is enabled.
api:
  file: v1.json
  operationId: regenerate-authentication-token
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
# Resource Information

|                        |                                   |
| ---------------------- | --------------------------------- |
| **URI for Mobile App** | **/auth/v1/token/regenerate**     |
| **URI for Web App**    | **/auth/v1/web/token/regenerate** |
| **Rate Limited?**      | Yes                               |
| **HTTP Method**        | POST                              |
| **Authentication**     | No                                |
| **Batch Support**      | No                                |

# Request URL

For mobile application:

`http://`{`ae-host`}`/auth/v1/token/regenerate`

For web application:

`http://`{`ae-host`}`/`{`auth`}`/v1/web/token/regenerate`

# Request Body Parameters

```
{
    "identifierType":"MOBILE",
    "identifierValue":"0495678923",
    "brand": "STANDARDAPP",
    "expiredToken":"nhdbYiOlsiTU9CSUxFfDk5NDU1NjAyMjQiXSwiZGV2IjoiMzJydHNkZXJlZCIsIm9yZyI6IlNUQU5EQVJEQVBQIiwiYWxnIjoiSFMyNTYifQ.eyJpc3MiOiJDQVBJTExBUlkgVEVDSE5PTE9HSUVTIiwib2djIjpbIjE1MTA2MHxzYS5kZW1vLnNvbHV0aW9uIl0sImV4cCI6MTU5NzY1NTgxMywiaWF0IjoxNTk3NjUyMjEzLCJyb2wiOiJWSUVXIn0.2LqAg3tDVu8VwasSXuwiL6p917NCxgpKEt76qqrHGsF"
}
```

<br />

| **Parameter**     | **Datatype** | **Description**                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ----------------- | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| identifierType\*  | enum         | Identifier used for token generation. Values: MOBILE, EMAIL, USERNAME.                                                                                                                                                                                                                                                                                                                                                            |
| identifierValue\* | string       | Value of the specified identifierType. For example, if identifierType is MOBILE, the identifierValue is mobile number.                                                                                                                                                                                                                                                                                                            |
| deviceId\*        | string       | Unique ID of the device from which the customer has generated the token.                                                                                                                                                                                                                                                                                                                                                          |
| brand\*           | string       | Name of the brand or org for which authentication needs to be verified.                                                                                                                                                                                                                                                                                                                                                           |
| mobile\*\*        | string       | Mobile number of the customer. Either mobile number or email ID is required to authenticate with username.                                                                                                                                                                                                                                                                                                                        |
| email\*\*         | string       | Email ID of the customer. Either mobile number or email ID is required to authenticate with username.                                                                                                                                                                                                                                                                                                                             |
| key\*\*           | string       | Unique key generated for the successful mobile app OTP validation. If the key expiry configuration is enabled, make sure that the unique key is valid and not expired. The API throws an error if the key is expired. For information on configuring the expiry time for the key, refer to the [documentation on the configurations](https://docs.capillarytech.com/reference/validate-otp-api#configuring-validity-for-the-key). |
| expiredToken\*\*  | string       | Unique key generated for the successful web OTP validation.                                                                                                                                                                                                                                                                                                                                                                       |

Parameters marked with \* are mandatory and the ones marked with \*\* are required when the identifierType is USERNAME.

# Error code

| Error code                    | Solution                         |
| :---------------------------- | :------------------------------- |
| 1597 Key expired or not valid | Make sure that the key is valid. |