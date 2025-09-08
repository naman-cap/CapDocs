---
title: Forget Password
excerpt: >-
  Lets you set a new password if the customer has lost or forgot password. This
  is applicable only for brands for which password is enabled. You need to first
  generate sessionId and then use it in password/forget. After setting a new
  password, the customer customer needs to authenticate again - 


  1. Generate token, 

  2. Generate OTP, and 

  3. Validate OTP.
api:
  file: v1.json
  operationId: forget-password
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

|                    |                                                                    |
| ------------------ | ------------------------------------------------------------------ |
| URI for Mobile App | auth/v1/password/forget                                            |
| URI for Web App    | auth/v1/web/password/forget                                        |
| Rate Limited?      | Indicates whether the operation is rate-limited.                   |
| Authentication     | Specifies whether authentication is required for the operation.    |
| HTTP Method        | The HTTP method used for the operation.                            |
| Batch Support      | Indicates whether batch processing is supported for the operation. |

# Request URL

For mobile application:

`http://{ae-host}/auth/v1/password/forget`

For web application:

`http://{ae-host}/auth/v1/web/password/forget`

# Request Body Parameters

```
{
    "identifierType":"USERNAME",
    "identifierValue":"9940000000",
    "deviceId":"deviceid1",
    "brand": "KANMODEMO",
    "password":"password1",
    "confirmPassword": "password1",
    "sessionId": "D-86c23a88-9062-473d-ab3a-9a27145bf321"
}
```

<br />

| Parameter         | Datatype | Description                                                                                                              |
| ----------------- | -------- | ------------------------------------------------------------------------------------------------------------------------ |
| identifierType\*  | enum     | Values: MOBILE, EMAIL, USERNAME.                                                                                         |
| identifierValue\* | string   | Value of the specified identifierType. For example, if identifierType is MOBILE, the identifierValue is a mobile number. |
| deviceId\*\*      | string   | Unique ID of the device used to reset the password.                                                                      |
| brand\*           | string   | Name of the brand or organization associated with the current account.                                                   |
| sessionId\*       | string   | Unique sessionId generated for the identifierType and deviceId combination.                                              |
| password\*        | string   | New password for the account.                                                                                            |
| confirmPassword\* | string   | Reenter the new password.                                                                                                |

Parameters marked with \* are mandatory