---
title: Validate OTP
excerpt: Validates the OTP generated through the `/otp/generate` API.
api:
  file: v1.json
  operationId: validate-otp-api
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

|                    |                            |
| ------------------ | -------------------------- |
| URI for Mobile App | `auth/v1/otp/validate`     |
| URI for Web App    | `auth/v1/web/otp/validate` |
| Rate Limited?      | Yes                        |
| Authentication     | No                         |
| HTTP Method        | POST                       |
| Batch Support      | Yes                        |

# Request URL

For mobile application:

`http:{ae-host}/auth/v1/otp/validate`

For web application:

`http:{ae-host}/auth/v1/web/otp/validate`

```Text Sample Body
{
    "identifierType":"MOBILE",
    "identifierValue":"9940000000",
    "deviceId": "deviceid1",
    "brand": "standardapp",
    "sessionId": "D-502259d3-d4d6-4458-bc5f-b89d3d8e4c7b",
    "otp":"276889"
}
```

<br />

# Request Body Parameters

| Parameter           | Datatype | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| :------------------ | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `identifierType`\*  | enum     | Identifier used to generate OTP. Values: `MOBILE`, `EMAIL`, `USERNAME`.                                                                                                                                                                                                                                                                                                                                                                                                                 |
| `identifierValue`\* | string   | Value of the specified `identifierType`. For example, if `identifierType` is `MOBILE`, the `identifierValue` is a mobile number.                                                                                                                                                                                                                                                                                                                                                        |
| `deviceId`\*\*      | string   | Unique ID of the device associated with the OTP. Not applicable for web applications.                                                                                                                                                                                                                                                                                                                                                                                                   |
| `brand`\*           | string   | Name of the brand or org associated with the OTP.                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| `sessionId`\*       | string   | Session ID generated through the `v1/token/generate` API.                                                                                                                                                                                                                                                                                                                                                                                                                               |
| `otp`\*             | long     | Validation code received by the customer (either to the mobile number or email ID provided). Note: You can [configure maximum retries](https://docs.capillarytech.com/reference/authentication-configurations#defining-maximum-otp-retry-attempts) as well as [account locking](https://www.google.com/search?q=https://docs.capillarytech.com/reference/authentication-configurations%23account-locking-feature) after several defined unsuccessful attempts to enter the correct OTP. |

Parameters marked with \* are mandatory.

# Response parameters

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
        String representing the authentication key. This key has no validity and can be used to regenerate the authentication token. It is recommended to set an expiry of the key to avoid unauthorized usage. For more information, refer to the section [Configuring validity for the key](https://docs.capillarytech.com/reference/authentication-configurations#configuring-validity-for-the-key).
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