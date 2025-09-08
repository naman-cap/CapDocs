---
title: Issue Validation Code (to redeem points)
excerpt: ''
api:
  file: customer-v11.json
  operationId: issue-validation-code
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
Before making points/redeem API call, you need to validate the customer by issuing validation code to the registered mobile number/email id.

This API allows you to issue a dynamic validation code to the customer’s registered mobile number/email id which is required to pass while redeeming points. The validation code is valid only for a specific time period post which it expires automatically. If you try to issue validation code within the validity period, same code will be issued again.

The validity period and communicate via is set on the **OTPConfigurations** page of **InTouch > Settings > Organization Setup**

* **OTP code validity period:** The validity of the validation code in minutes
* **Communicate OTP Via:** Mode of sending the validation code, email/sms/both

> 📘 The validation code is issued either to mobile number, or email id or both, based on the configuration set on the page InTouch > Settings > Organization Setup > OTPConfigurations

## API endpoint example

`https://eu.api.capillarytech.com/v1.1/points/validationcode?external_id=434547&format=json&points=100`

```Text cURL
curl --location 'https://eu.api.capillarytech.com/v1.1/points/validationcode?external_id=434547&format=json&points=-100' \
--header 'Authorization: Basic c2FudC5wXzEyMzpiMmVhMGFhYWI1ZThmODg5ZTAzNGE2NjA5NTIwM2FlNw==' \
--header 'Cookie: _cfuvid=KAL3im8y4a6p1m.sKC9ZNCKOc.7BJ5oinn8QtC8fo8Q-1750237083524-0.0.1.1-604800000'
```

## Prerequisites

*   Basic Authentication
*   Default access group

## Resource Information

| URI            | v1.1/points/validationcode |
| :------------- | :------------------------- |
| Rate Limited?  | Yes                        |
| Authentication | Yes                        |
| HTTP Method    | GET                        |
| Batch Support  | No                         |

## Request Parameter

| Parameter (Parameters marked in \* are mandatory)           | Datatype | Description                                    |
| :---------------------------------------------------------- | :------- | :--------------------------------------------- |
| mobile/email/external\_id/card\_number/card\_external\_id\* | enum     | Pass any of the registered identifier type     |
| value\*                                                     | string   | Pass the respective identifier value.          |
| points                                                      | int      | Number of points to redeem (must be positive). |

## Response Parameter

| Parameter                 | Datatype | Description                                                                                    |
| :------------------------ | :------- | :--------------------------------------------------------------------------------------------- |
| response                  | Object   | Root object containing the API response.                                                       |
| response.status           | Object   | Contains the status of the API request.                                                        |
| status.success            | String   | Indicates if the request was successful ("true" or "false").                                   |
| status.code               | Integer  | HTTP status code (e.g., 200 for success).                                                      |
| status.message            | String   | Human-readable message describing the status (e.g., "Operation Successful").                   |
| response.validation\_code | Object   | Contains details about the validation code issuance.                                           |
| validation\_code.code     | Object   | Nested object with customer and transaction details.                                           |
| code.mobile               | String   | Customer's registered mobile number                                                            |
| code.email                | String   | Customer's registered email address                                                            |
| code.external\_id         | String   | Unique external identifier for the customer                                                    |
| code.points               | Integer  | Points to be redeemed                                                                          |
| code.item\_status         | Object   | Status of the validation code issuance.                                                        |
| item\_status.success      | String   | Indicates if the validation code was issued successfully ("true" or "false").                  |
| item\_status.code         | Integer  | Sub-status code for the validation process                                                     |
| item\_status.message      | String   | Additional details about the validation code issuance (e.g., "Validation Code Issued by SMS"). |

```json Sample Response
{
    "response": {
        "status": {
            "success": "true",
            "code": 200,
            "message": "Operation Successful"
        },
        "validation_code": {
            "code": {
                "mobile": "919777785205",
                "email": "testgrp3@gmail.com",
                "external_id": "434547",
                "points": -100,
                "item_status": {
                    "success": "true",
                    "code": 200,
                    "message": "Validation Code Issued by SMS"
                }
            }
        }
    }
}
```

## API specific response

| Error code | Description                         | Reason                                                            |
| :--------- | :---------------------------------- | :---------------------------------------------------------------- |
| 400        | Bad Request                         | Invalid request parameters                                        |
| 401        | Unauthorized                        | Invalid or missing authentication credentials.                    |
| 816        | Customer not found for organization | Invalid mobile/email/external\_id/card\_number/card\_external\_id |