---
title: Generate MFA OTP
excerpt: Generates OTP for MFA flow.
api:
  file: v1.json
  operationId: generate-otp-mfa
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
This API generates an OTP that the customer uses for MFA authentication. The API uses the session ID created by `/mfa/token/generate`.

# Example cURL request

```bash
curl --location 'https://eu.api.capillarytech.com/auth/v1/mfa/otp/generate' \
--header 'Content-Type: application/json' \
--data '{
   "identifierType":"MOBILE",
   "identifierValue":"18767431754",
    "deviceId": "1234",
    "brand": "Bukl",
    "sessionId": "P-b04c1001-ef08-4125-9886-f9d8b4c5d9b8"
}'
```

<br />

# Resource information

|                       |                           |
| :-------------------- | :------------------------ |
| URI                   | /auth/v1/mfa/otp/generate |
| HTTP method           | POST                      |
| Pagination supported? | NA                        |
| Rate limit            | NA                        |
| Batch support         | NA                        |

# Request body parameters

<br />

| Parameter (Parameters marked with \* are mandatory) | Data Type | Description                                                                                                                                                                                                                                                                                                                                                                                                            |
| :-------------------------------------------------- | :-------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`identifierType`**\*                              | Enum      | Customer identifier used for MFA token generation. Values: `MOBILE`, `EMAIL`, `USERNAME`, `EXTERNALID`.                                                                                                                                                                                                                                                                                                                |
| **`identifierValue`**\*                             | String    | Value of the identifier. For example, if `identifierType` is `MOBILE`, the `identifierValue` is mobile number. If you want to send the OTP to WhatsApp or Zalo, you need to raise a JIRA ticket to the sustenance team to [define the related configurations](https://docs.capillarytech.com/reference/authentication-configurations#integrating-whatsapp-and-zalo-for-otp-communication) and configure the templates. |
| **`deviceId`**\*                                    | String    | Device ID of the customer that receives OTP.                                                                                                                                                                                                                                                                                                                                                                           |
| **`brand`**\*                                       | String    | Name of the brand or organisation that needs verification.                                                                                                                                                                                                                                                                                                                                                             |
| **`sessionId`**\*                                   | String    | Unique session ID created from `/mfa/token/generate` API.                                                                                                                                                                                                                                                                                                                                                              |

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
  </tbody>
</Table>

<br />

```json
{
    "status": {
        "success": true,
        "code": 200,
        "message": "SUCCESS"
    }
}
```