---
title: Change Password
excerpt: >-
  Lets you modify the current password of a customer. This is applicable only
  for brands for which password is enabled.
api:
  file: v1.json
  operationId: change-password
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

|                    |                              |
| ------------------ | ---------------------------- |
| URI for Mobile App | /auth/v1/password/change     |
| URI for Web App    | /auth/v1/web/password/change |
| Rate Limited?      | Yes                          |
| Authentication     | Token-based                  |
| HTTP Method        | POST                         |
| Batch Support      | No                           |

# Request URL

For mobile application:

`http://`{`ae-host`}`/auth/v1/password/change`

For web application:

`http://`{`ae-host`}`/auth/v1/web/password/change`

# Request Body Parameters

```
{
    "identifierType":"USERNAME",
    "identifierValue":"9940000000",
    "deviceId":"deviceid1",
    "brand": "KANMODEMO",
     "password":"password",
    "newPassword": "password1",
    "confirmPassword": "password1",
    "token": "eyJpZHYiOlsiTU9CSUxFfDk5NDU1NjAyMjQiLCJVU0VSTkFNRXw5OTQ1NTYwMjI0Il0sImRldiI6ImRldmljZWlkMSIsIm9yZyI6IlNUQU5EQVJEQVBQIiwiYWxnIjoiSFMyNTYifQ.eyJpc3MiOiJDQVBJTExBUlkgVEVDSE5PTE9HSUVTIiwib2djIjpbIjE1MTA2MHxzYS5kZW1vLnNvbHV0aW9uIl0sImV4cCI6MTU5Nzg0MzczMywiaWF0IjoxNTk3ODQwMTMzLCJyb2wiOiJWSUVXIn0.pKYy3FpZm82igqp5CRUku4WF8pT5JEp6mX3P48M2qvY"
}
```

<br />

| Parameter         | Datatype | Description                                                                                                                               |
| ----------------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| identifierType\*  | enum     | Identifier used for changing the password. Values: MOBILE, EMAIL, USERNAME.                                                               |
| identifierValue\* | string   | Value of the specified identifierType. For example, if identifierType is MOBILE, the identifierValue is the mobile number.                |
| deviceId\*\*      | string   | Unique ID of the device used for changing the password. Applicable only for the mobile app.                                               |
| brand             | string   | Name of the brand or organization associated with the current account.                                                                    |
| token             | string   | Unique token generated for the identifierType and identifierValue. For the web application, it also includes deviceId for the mobile app. |
| password          | string   | Existing password of the account.                                                                                                         |
| newPassword       | string   | New password the customer would like to have.                                                                                             |
| confirmPassword   | string   | Reenter the new password for confirmation.                                                                                                |

Parameters marked with \* are mandatory.