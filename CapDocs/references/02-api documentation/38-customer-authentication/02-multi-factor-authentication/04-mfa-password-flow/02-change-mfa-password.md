---
title: Change password
excerpt: API to change the password.
api:
  file: v1.json
  operationId: change-mfa-password
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
This API is used to change your password.  You need to validate your current password before changing it. The API utilises the token created by `/mfa/password/validate`, along with the old and new passwords. 

The below flow chart shows the steps involved.

![ ](https://files.readme.io/542c094-password_change.jpg)

# API endpoint example


\  

# Resource information


|                       |                             |
| :-------------------- | :-------------------------- |
| URI                   | auth/v1/mfa/password/change |
| HTTP method           | POST                        |
| Pagination supported? | NA                          |
| Rate limit            | NA                          |
| Batch support         | NA                          |

# Request body parameters


| Parameter  
(Parameters marked with \* are mandatory) | Data Type | Description |
| --- | --- | --- |
| deviceId\* | String | Unique ID of the device used for password validation. It should be the same device used to generate the MFA token. |
| password\* | String | Current password. |
| newPassword\* | String | New password. |
| confirmPassword\* | String | Re-enter the new password. |
| brand\* | String | Name of the brand or organisation that needs verification. |
| token\* | String | Token generated from `/mfa/password/validate`. |
| identifierType\* | Enum | The type of identifier to identify the customer. Values: MOBILE, EMAIL, USERNAME, EXTERNALID. |
| identifierValue\* | String | The value of the identifier. |

```bash
curl --location 'https://crm-nightly-new.ccsolutions.capillarytech.com/auth/v1/password/change' \
--header 'Content-Type: application/json' \
--data '{
					"deviceId":"1234",
					"password":"12345",
          "newPassword":"123456789",
          "confirmPassword":"123456789",
          "brand":"SOLAPIPOCNEW",
          "token":"eyJpZHYiOlsiTU9CSUxFfDc0MTE2MzkyMTMiXSwiZGV2IjoiMTIzNCIsIm9yZyI6IlNPTEFQSVBPQ05FVyIsImFsZyI6IkhTMjU2In0.eyJ1aWQiOiIxMzgiLCJpc3MiOiJDQVBJTExBUlkgVEVDSE5PTE9HSUVTIiwiaXNjIjoiZmFsc2UiLCJvZ2MiOlsiMTQxOHxpbXBvcnQuZGIuMSJdLCJleHAiOjE3MDkxMjU1NDgsImlhdCI6MTcwOTEyMTk0OCwicm9sIjoiTUZBX1BFTkRJTkcifQ.OecVhZmMyXXTkjQBURe3Wi9xruc6gJp2pnd1qv9RGAA",
          "identifierType":"MOBILE",
          "identifierValue":"7411639213"
				}'
```

# Response parameters


| Parameter | Datatype | Description                                                             |
| --------- | -------- | ----------------------------------------------------------------------- |
| status    | object   | Object containing status information.                                   |
| - success | boolean  | Boolean indicating the status of the request.                           |
| - code    | integer  | HTTP status code indicating the result. Example: 200 indicates success. |
| - message | string   | Message describing the status of the request.                           |

```json
{
    "status": {
        "success": true,
        "code": 200,
        "message": "SUCCESS"
    }
}
```