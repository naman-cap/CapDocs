---
title: Validate MFA OTP
excerpt: Validates the OTP generated for the MFA flow.
api:
  file: v1.json
  operationId: validate-mfa-otp
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
Use this API to validate the OTP in the MFA flow. The `/mfa/otp/generate` API generates the OTP.

# Example cURL request

```bash
curl --location 'https://eu.api.capillarytech.com/auth/v1/mfa/otp/validate' \
--header 'Content-Type: application/json' \
--data '{
	 "identifierType":"MOBILE",
   "identifierValue":"18767431754", 
    "deviceId": "1234",
    "brand": "Bukl",
    "sessionId": "P-b04c1001-ef08-4125-9886-f9d8b4c5d9b8",
   "otp": 999999
}'
```

<br />

# Resource information

|                       |                          |
| :-------------------- | :----------------------- |
| URI                   | auth/v1/mfa/otp/validate |
| HTTP method           | POST                     |
| Pagination supported? | NA                       |
| Rate limit            | NA                       |
| Batch support         | NA                       |

# Request body parameters

<br />

| Parameter (Parameters marked with \* are mandatory) | Data Type | Description                                                                                             |
| :-------------------------------------------------- | :-------- | :------------------------------------------------------------------------------------------------------ |
| **`identifierType`**\*                              | Enum      | Customer identifier used for MFA token generation. Values: `MOBILE`, `EMAIL`, `USERNAME`, `EXTERNALID`. |
| **`identifierValue`**\*                             | String    | Value of the identifier.                                                                                |
| **`deviceId`**\*                                    | String    | Unique ID of the device where OTP is validated.                                                         |
| **`brand`**\*                                       | String    | Name of the brand or organisation that needs verification.                                              |
| **`sessionId`**\*                                   | String    | Unique session ID created from `/mfa/token/generate` API.                                               |
| **`otp`**\*                                         | String    | OTP that needs validation.                                                                              |

```bash
curl --location 'https://eu.api.capillarytech.com/auth/v1/mfa/otp/validate' \
--header 'Content-Type: application/json' \
--data '{
	 "identifierType":"MOBILE",
   "identifierValue":"18767431754", 
    "deviceId": "1234",
    "brand": "Bukl",
    "sessionId": "P-b04c1001-ef08-4125-9886-f9d8b4c5d9b8",
   "otp": 999999
}'
```

# Response parameters

<Table align={["left","left","left"]}>
  <thead>
    <tr>
      <th>
        Parameter
      </th>

      <th>
        Data Type
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
        object
      </td>

      <td>
        Object containing status information.
      </td>
    </tr>

    <tr>
      <td>
        * success
      </td>

      <td>
        boolean
      </td>

      <td>
        Boolean indicating the status of the request.
      </td>
    </tr>

    <tr>
      <td>
        * code
      </td>

      <td>
        integer
      </td>

      <td>
        HTTP status code indicating the result. Example: 200 indicates success.
      </td>
    </tr>

    <tr>
      <td>
        * message
      </td>

      <td>
        string
      </td>

      <td>
        Message describing the status of the request.
      </td>
    </tr>

    <tr>
      <td>
        auth
      </td>

      <td>
        object
      </td>

      <td>
        Object containing authentication details.
      </td>
    </tr>

    <tr>
      <td>
        * token
      </td>

      <td>
        string
      </td>

      <td>
        String representing the authentication token. By default, the token is valid for 15 minutes.
      </td>
    </tr>

    <tr>
      <td>
        * key
      </td>

      <td>
        string
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
        object
      </td>

      <td>
        Object containing user details.
      </td>
    </tr>

    <tr>
      <td>
        * appRegistered
      </td>

      <td>
        boolean
      </td>

      <td>
        Indicates if the user is registered in the app.
      </td>
    </tr>

    <tr>
      <td>
        * sessionId
      </td>

      <td>
        string
      </td>

      <td>
        Current session ID for MFA flow. The session ID is valid for 15 minutes by default.
      </td>
    </tr>

    <tr>
      <td>
        * role
      </td>

      <td>
        string
      </td>

      <td>
        Indicates the user's role. Example: VIEW, USER.
      </td>
    </tr>

    <tr>
      <td>
        * userRegisteredForPassword
      </td>

      <td>
        boolean
      </td>

      <td>
        Indicates if the user is registered for a password.
      </td>
    </tr>
  </tbody>
</Table>

<br />

```json
{
    "status": {
        "success": true,
        "code": 200,
        "message": "SUCCESS"
    },
    "auth": {
        "token": "eyJpZHYiOlsiTU9CSUxFfDE4NzY3NDMxNzU0Il0sImRldiI6IjEyMzQiLCJvcmciOiJCVUtMIiwiYWxnIjoiSFMyNTYifQ.eyJ1aWQiOiIxNzgwNzc2IiwiaXNzIjoiQ0FQSUxMQVJZIFRFQ0hOT0xPR0lFUyIsImlzYyI6ImZhbHNlIiwib2djIjpbIjEwMDQ1OHxidWtsLmluZC5zb2x1dGlvbiJdLCJleHAiOjE3MTY5NjM0NTcsImlhdCI6MTcxNjk2MjU1Nywicm9sIjoiVVNFUiJ9.RNOnu2qd9b4CrH6ODsIc1OdeOg4EwFh7ssv0zlAG5pE",
        "key": "eyJpZHYiOlsiTU9CSUxFfDE4NzY3NDMxNzU0Il0sImRldiI6IjEyMzQiLCJvcmciOiJCVUtMIiwiYWxnIjoiSFMyNTYifQ.eyJ1aWQiOiIxNzgwNzc2IiwiaXNzIjoiQ0FQSUxMQVJZIFRFQ0hOT0xPR0lFUyIsIm1mYSI6dHJ1ZSwiaWF0IjoxNzE2OTYyNTU3LCJyb2wiOiJBVVRIIn0.89CmFeLl_zfUBuv2Ea4eQIc3Wy8fJzlcRQad8UcqK-4"
    },
    "user": {
        "appRegistered": false,
        "sessionId": null,
        "role": "USER",
        "userRegisteredForPassword": false
    }
}
```