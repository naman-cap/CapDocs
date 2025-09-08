---
title: Regenerate token
excerpt: MFA token regeneration.
api:
  file: v1.json
  operationId: regenerate-token
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
This API regenerates the token after successfully logging into the system using the MFA password or OTP. The key used in the request is generated from the `mfa/otp/validate` or `mfa/password/validate` API.

Using this API, you can regenerate the token without going through the primary flow.

# Example cURL request

```bash
curl --location 'https://eu.api.capillarytech.com/auth/v1/mfa/token/regenerate' \
--header 'Content-Type: application/json' \
--header 'Cookie: _cfuvid=qHEKZJZpeVmP7CCaiQVbuf_cn3J2udxCwCDepAgLl1o-1717059715288-0.0.1.1-604800000' \
--data '{
    "deviceId":"1234",
    "brand":"Bukl","key":"eyJpZHYiOlsiTU9CSUxFfDE4NzY3NDMxNzU0Il0sImRldiI6IjEyMzQiLCJvcmciOiJCVUtMIiwiYWxnIjoiSFMyNTYifQ.eyJ1aWQiOiIxNzgwNzc2IiwiaXNzIjoiQ0FQSUxMQVJZIFRFQ0hOT0xPR0lFUyIsIm1mYSI6dHJ1ZSwiaWF0IjoxNzE2OTYyNTU3LCJyb2wiOiJBVVRIIn0.89CmFeLl_zfUBuv2Ea4eQIc3Wy8fJzlcRQad8UcqK-4",
    "identifierType":"MOBILE",
    "identifierValue":"18767431754"
    }'
```

<br />

# Prerequisites

*   Validate the OTP or password in the MFA flow.

# Resource information

|                       |                              |
| :-------------------- | :--------------------------- |
| URI                   | auth/v1/mfa/token/regenerate |
| HTTP method           | POST                         |
| Pagination supported? | NA                           |
| Rate limit            | NA                           |
| Batch support         | NA                           |

# Request body parameters

| (Parameters marked with \* are mandatory) | Data Type | Description                                                                              |
| ----------------------------------------- | --------- | ---------------------------------------------------------------------------------------- |
| deviceId\*                                | String    | Unique ID of the device used for token regeneration.                                     |
| brand\*                                   | String    | Name of the brand or organisation that needs verification.                               |
| key\*                                     | String    | Key generated from the password/OTP validate response.                                   |
| identifierType\*                          | String    | Type of identifier to identify the customer. Values: MOBILE, EMAIL, USERNAME, EXTERNALID |
| identifierValue\*                         | String    | Value of the identifier.                                                                 |

# Response parameters

<Table align={["left","left","left"]}>
  <thead>
    <tr>
      <th>
        Parameter
      </th>

      <th>
        Datatype
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
        Session ID for MFA flow. The session ID is valid for 15 minutes by default.
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

```json
{
    "status": {
        "success": true,
        "code": 200,
        "message": "SUCCESS"
    },
    "auth": {
        "token": "eyJpZHYiOlsiTU9CSUxFfDE4NzY3NDMxNzU0Il0sImRldiI6IjEyMzQiLCJvcmciOiJCVUtMIiwiYWxnIjoiSFMyNTYifQ.eyJ1aWQiOiIxNzgwNzc2IiwiaXNzIjoiQ0FQSUxMQVJZIFRFQ0hOT0xPR0lFUyIsImlzYyI6ImZhbHNlIiwib2djIjpbIjEwMDQ1OHxidWtsLmluZC5zb2x1dGlvbiJdLCJleHAiOjE3MTcwNjE0NjUsImlhdCI6MTcxNzA2MDU2NSwicm9sIjoiVVNFUiJ9.rmKqmOQyYYtEPs422G0xZ-EUFpak5i0jdrx9W4YVxJQ",
        "key": null
    },
    "user": {
        "appRegistered": false,
        "sessionId": null,
        "role": "USER",
        "userRegisteredForPassword": true
    }
}
```