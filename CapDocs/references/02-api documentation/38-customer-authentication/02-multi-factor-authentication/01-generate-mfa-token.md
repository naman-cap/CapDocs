---
title: Generate MFA token
excerpt: Generates MFA token for devices.
api:
  file: v1.json
  operationId: generate-mfa-token
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
This API generates the MFA token using the device ID, customer identifier type, value, and the token generated from OTP validation in the primary flow. See [Validate OTP in First factor flow](https://docs.capillarytech.com/reference/validate-otp-api).

# Example cURL request

```bash
curl --location 'https://eu.api.capillarytech.com/auth/v1/mfa/token/generate' \
--header 'Content-Type: application/json' \
--header 'Cookie: _cfuvid=TQelvcvKiKe5DWhd.tGG6g.Hq0IJI4FnRacxB4UYCyI-1716799831120-0.0.1.1-604800000' \
--data '{
   "identifierType":"MOBILE",
   "identifierValue":"18795774754",
    "deviceId": "1234",
    "brand": "Bukl",
    "authorizedToken":"eyJpZHYiOlsiTU9CSUxFfDE4Nzk1Nzc0NzU0Il0sImRldiI6IjEyMzQiLCJvcmciOiJCVUtMIiwiYWxnIjoiSFMyNTYifQ.eyJ1aWQiOiIxNzc2NDI4IiwiaXNzIjoiQ0FQSUxMQVJZIFRFQ0hOT0xPR0dJRVMiLCJpc2MiOiJmYWxzZSIsIm9nYyI6WyIxMDA0NTh8YnVrbC5pbmQuc29sdXRpb24iXSwiZXhwIjoxNzE2ODkzNDc3LCJpYXQiOjE3MTY4ODk4NzcsInJvbCI6IlVTRVIifQ.yGDKE9uFYx_UdCfQNG8lDHVqr1VBjcIzZa1vxdsO97o"
}'
```

<br />

# Prerequisites

*   Your organisation has enabled MFA.
*   Validation of OTP from the primary or First factor flow.

# Resource information

|                       |                            |
| :-------------------- | :------------------------- |
| URI                   | auth/v1/mfa/token/generate |
| HTTP method           | POST                       |
| Pagination supported? | NA                         |
| Rate limit            | NA                         |
| Batch support         | NA                         |

# Request body parameters

<br />

| Parameter (Parameters marked with \* are mandatory) | Data Type | Description                                                                                    |
| :-------------------------------------------------- | :-------- | :--------------------------------------------------------------------------------------------- |
| `identifierType`\*                                  | Enum      | Identifier used for MFA token generation. Values: `MOBILE`, `EMAIL`, `USERNAME`, `EXTERNALID`. |
| `identifierValue`\*                                 | String    | Value of the identifier.                                                                       |
| `deviceId`\*                                        | String    | Unique ID of the device from which the customer generates the token.                           |
| `brand`\*                                           | String    | Name of the brand or organization that needs verification.                                     |
| `authorizedToken`\*                                 | String    | Authentication token from `/otp/validate` of First factor.                                     |

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
        "token": "eyJpZHYiOlsiTU9CSUxFfDE4Nzk1Nzc0NzU0Il0sImRldiI6IjEyMzQiLCJvcmciOiJCVUtMIiwiYWxnIjoiSFMyNTYifQ.eyJpc3MiOiJDQVBJTExBUlkgVEVDSE5PTE9PR0lFUyIsIm9nYyI6WyIxMDA0NTh8YnVrbC5pbmQuc29sdXRpb24iXSwiZXhwIjoxNzE2ODkwODIyLCJpYXQiOjE3MTY4ODk5MjIsInJvbCI6IlZJRVcifQ.nL6iCjXIrfEb02uDnnJTyj0uPi8teQjAgnQPVU0_aqQ",
        "key": null
    },
    "user": {
        "appRegistered": false,
        "sessionId": "P-a2996f83-a72d-405c-aa23-0eed7a7dba1e",
        "role": "VIEW",
        "userRegisteredForPassword": false
    }
}
```