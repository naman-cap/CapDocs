---
title: Validate password
excerpt: Validate the entered password.
api:
  file: v1.json
  operationId: validate-mfa-password
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
This API validates the password entered by the customer. The API triggers after validating the OTP from the MFA flow. It uses the session ID generated from the `/mfa/token/generate` API. 

**Note**: After validating the MFA OTP, regenerate the MFA session ID using `/mfa/token/generate`. Use the new session ID to validate the password.

The flow chart below illustrates the steps.

<figure>
  <img 
    src="https://files.readme.io/f1f2d3a-password_validate.jpg" 
    align="center" 
    border="true" 
  />
</figure>

# API endpoint example

&lt;https://eu.api.capillarytech.com/auth/v1/mfa/password/validate&gt;

# Resource information

|                       |                               |
| :-------------------- | :---------------------------- |
| URI                   | auth/v1/mfa/password/validate |
| HTTP method           | POST                          |
| Pagination supported? | NA                            |
| Rate limit            | NA                            |
| Batch support         | NA                            |

# Request body parameters

| Parameter  \n(Parameters marked with \* are mandatory) | Data Type | Description |
| :----------------------------------------------------- | :-------- | :---------- |
| deviceId\*                                             | String    | Unique ID of the device used for password validation. It should be the same device used to generate the token. |
| brand\*                                                | String    | Name of the brand or organisation that needs verification. |
| sessionId\*                                            | String    | Unique ID created from `/mfa/token/generate` API. After validating the MFA OTP, regenerate the MFA session ID using the `/mfa/token/generate`. Use the new session ID to validate the password. |
| password\*                                             | String    | Password that needs validation. |
| identifierType\*                                       | String    | Type of identifier to identify the customer. Values: MOBILE, EMAIL, USERNAME, EXTERNALID |
| identifierValue\*                                      | String    | Value of the identifier. |

```json Sample request
curl --location 'https://eu.api.capillarytech.com/auth/v1/mfa/password/validate' \
--header 'Content-Type: application/json' \
--header 'Cookie: _cfuvid=SFXPZtlcKGm5C7TLTY.Z6GYvm_rJFRPKAVc07.hnnEc-1716977297258-0.0.1.1-604800000' \
--data '{
    "deviceId":"1234",
    "brand":"Bukl",
    "sessionId":"P-f1f3ccd7-0fe9-4159-ab23-2eb33e42f512",
    "password":"12345",
    "identifierType":"MOBILE",
    "identifierValue":"18767431754"
}'
```

# Response parameters

| Parameter                   | Data Type | Description                                                                                  |
| --------------------------- | --------- | -------------------------------------------------------------------------------------------- |
| status                      | object    | Object containing status information.                                                        |
| - success                   | boolean   | Boolean indicating the status of the request.                                                |
| - code                      | integer   | HTTP status code indicating the result. Example: 200 indicates success.                      |
| - message                   | string    | Message describing the status of the request.                                                |
| auth                        | object    | Object containing authentication details.                                                    |
| - token                     | string    | String representing the authentication token. By default, the token is valid for 15 minutes. |
| - key                       | string    | String representing the authentication key.                                                  |
| identifiers                 | object    | Object containing identifier details.                                                        |
| - identifierList            | string    | List of identifiers.                                                                         |
| user                        | object    | Object containing user details.                                                              |
| - appRegistered             | boolean   | Indicates if the user is registered in the app.                                              |
| - sessionId                 | string    | Session ID for MFA flow. The session ID is valid for 15 minutes by default.                  |
| - role                      | string    | Indicates the user's role. Example: VIEW, USER.                                              |
| - userRegisteredForPassword | boolean   | Indicates if the user is registered for a password.                                          |

<br />

```json Sample response
{
    "status": {
        "success": true,
        "code": 200,
        "message": "SUCCESS"
    },
    "auth": {
        "token": "eyJpZHYiOlsiTU9CSUxFfDE4NzY3NDMxNzU0Il0sImRldiI6IjEyMzQiLCJvcmciOiJCVUtMIiwiYWxnIjoiSFMyNTYifQ.eyJ1aWQiOiIxNzgwNzc2IiwiaXNzIjoiQ0FQSUxMQVJZIFRFQ0hOT0xPR0lFUyIsImlzYyI6ImZhbHNlIiwib2djIjpbIjEwMDQ1OHxidWtsLmluZC5zb2x1dGlvbiJdLCJleHAiOjE3MTY5NzgzNjEsImlhdCI6MTcxNjk3NzQ2MSwicm9sIjoiVVNFUiJ9.8_qJ7TFcGUQEbsvRHMQ8fosX9Vwn0UUkFLqtH5tOcQ4",
        "key": "eyJpZHYiOlsiTU9CSUxFfDE4NzY3NDMxNzU0Il0sImRldiI6IjEyMzQiLCJvcmciOiJCVUtMIiwiYWxnIjoiSFMyNTYifQ.eyJ1aWQiOiIxNzgwNzc2IiwiaXNzIjoiQ0FQSUxMQVJZIFRFQ0hOT0xPR0lFUyIsIm1mYSI6dHJ1ZSwiaWF0IjoxNzE2OTYyNTU3LCJyb2wiOiJBVVRIIn0.89CmFeLl_zfUBuv2Ea4eQIc3Wy8fJzlcRQad8UcqK-4"
    },
    "identifiers": {
        "identifierList": null
    },
    "user": {
        "appRegistered": false,
        "sessionId": null,
        "role": "USER",
        "userRegisteredForPassword": true
    }
}
```