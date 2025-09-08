---
title: Validate Password
excerpt: >-
  Validates the password of an existing user account and generates the access
  token and key. The token is valid for 15 minutes by default. You can use the
  key to regenerate token.
api:
  file: v1.json
  operationId: validate-password
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

|                        |                                 |
| ---------------------- | ------------------------------- |
| **URI for Mobile App** | `auth/v1/password/validate`     |
| **URI for Web App**    | `auth/v1/web/password/validate` |
| **Rate Limited?**      | Yes                             |
| **Authentication**     | No                              |
| **HTTP Method**        | POST                            |
| **Batch Support**      | No                              |

# Request URL

For mobile application:

`http:`{`ae-host`}`/auth/v1/password/validate`

For web application:

`http:`{`ae-host`}`/auth/v1/web/password/validate`

# Request Body Parameters

```json
{   "identifierType":"USERNAME",
    "identifierValue":"9940000000",
    "deviceId": "deviceid1",
    "brand": "KANMODEMO",
    "sessionId": "D-c62d7326-e122-4186-8c72-e42f270b0cdf",
    "password":"password"
}
```

<br />

| Parameter               | Datatype | Description                                                                                                                                                                                                                                                                                                                                                                                                                      |
| :---------------------- | :------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`identifierType`**\*  | enum     | Identifier used to generate OTP. Values: `MOBILE`, `EMAIL`, `USERNAME`.                                                                                                                                                                                                                                                                                                                                                          |
| **`identifierValue`**\* | string   | Value of the specified `identifierType`. For example, if `identifierType` is `MOBILE`, the `identifierValue` is the mobile number.                                                                                                                                                                                                                                                                                               |
| **`deviceId`**\*\*      | string   | Unique ID of the device used for password validation. Should be the same as the `deviceId` used to generate the current token. Not applicable for web applications.                                                                                                                                                                                                                                                              |
| **`brand`**\*           | string   | Name of the brand or org associated with the current account.                                                                                                                                                                                                                                                                                                                                                                    |
| **`sessionId`**\*       | string   | Session ID generated through the `v1/token/generate` API.                                                                                                                                                                                                                                                                                                                                                                        |
| **`password`**\*        | string   | Password of the current account. Note: You can [configure maximum retries](https://docs.capillarytech.com/reference/authentication-configurations#defining-maximum-otp-retry-attempts) as well as [account locking](https://www.google.com/search?q=https://docs.capillarytech.com/reference/authentication-configurations%23account-locking-feature) after several defined unsuccessful attempts to enter the correct password. |

* Parameters marked with \* are mandatory, and the parameters marked with \*\* are required for the mobile app.

# Response parameters

```json
{
    "status": {
        "success": true,
        "code": 200,
        "message": "SUCCESS"
    },
    "auth": {
        "token": "eyJpZHYiOlsiTU9CSUxFfDk5NDU1NjAyMjQiXSwiZGV2IjoiZGV2aWNlaWQxIiwib3JnIjoiU1RBTkRBUkRBUFAiLCJhbGciOiJIUzI1NiJ9.eyJ1aWQiOiI3Njg4MTYiLCJpc3MiOiJDQVBJTExBUlkgVEVDSE5PTE9HSUVTIiwiaXNjIjoiZmFsc2UiLCJvZ2MiOlsiMTUxMDYwfHNhLmRlbW8uc29sdXRpb24iXSwiZXhwIjoxNTk3OTQzODU1LCJpYXQiOjE1OTc5NDAyNTUsInJvbCI6IlVTRVIifQ.Wyt_xxlqtmMH3lyReO718sDokngYGp_HSLuiBOyaEds",
        "key": "eyJpZHYiOlsiTU9CSUxFfDk5NDU1NjAyMjQiXSwiZGV2IjoiZGV2aWNlaWQxIiwib3JnIjoiU1RBTkRBUkRBUFAiLCJhbGciOiJIUzI1NiJ9.eyJ1aWQiOiI3Njg4MTYiLCJpc3MiOiJDQVBJTExBUlkgVEVDSE5PTE9HSUVTIiwiaWF0IjoxNTk3OTQwMjU1LCJyb2wiOiJBVVRIIn0.UKCOU1oFLPsRx5YJRkClIaRVmE1lNDCjuuKQ9nnMdhE"
    },
    "user": {
        "appRegistered": false,
        "sessionId": null,
        "role": "USER",
        "userRegisteredForPassword": true
    }
}
```

<Table>
  <thead>
    <tr>
      <th>
        Parameter
      </th>

      <th>
        Description
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        status
      </td>

      <td>
        Object containing status information
      </td>
    </tr>

    <tr>
      <td>
        * success
      </td>

      <td>
        Boolean indicating the success status
      </td>
    </tr>

    <tr>
      <td>
        * code
      </td>

      <td>
        Number indicating the status code (e.g., 200 for success)
      </td>
    </tr>

    <tr>
      <td>
        * message
      </td>

      <td>
        String providing a message related to the status
      </td>
    </tr>

    <tr>
      <td>
        auth
      </td>

      <td>
        Object containing authentication information
      </td>
    </tr>

    <tr>
      <td>
        * token
      </td>

      <td>
        String representing the authentication token. By default,  the token is valid for 15 minutes.
      </td>
    </tr>

    <tr>
      <td>
        * key
      </td>

      <td>
        String representing the authentication key.
      </td>
    </tr>

    <tr>
      <td>
        user
      </td>

      <td>
        Object containing user information
      </td>
    </tr>

    <tr>
      <td>
        * appRegistered
      </td>

      <td>
        Boolean indicating if the user is registered in the app
      </td>
    </tr>

    <tr>
      <td>
        * sessionId
      </td>

      <td>
        Value representing the user's session ID
      </td>
    </tr>

    <tr>
      <td>
        * role
      </td>

      <td>
        String indicating the user's role (e.g., "USER")
      </td>
    </tr>

    <tr>
      <td>
        * userRegisteredForPassword
      </td>

      <td>
        Boolean indicating if the user is registered for a password
      </td>
    </tr>
  </tbody>
</Table>