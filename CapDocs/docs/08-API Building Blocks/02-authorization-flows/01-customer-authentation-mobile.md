---
title: Customer Authentation (Mobile App)
excerpt: ''
deprecated: false
hidden: true
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
Customer Authentication is a Auth Engine framework that manages end-user (customer) authentication to the organization’s mobile or web application. This resource provides APIs related to authenticating web and mobile applications.

The authentication completes only after validating the mobile number or email ID through OTP.

Before starting with the Auth Engine APIs, you need to know the following backend configurations.

* Whether the password option is enabled for the org if you want to use password-based authentication.
* Whether OTP is enabled for the org and the daily limit of OTPs a customer can generate. If you need to increase the daily limit of OTPs a customer can generate in a day, log a request and assign it to the Platforms team.

Here we have provided only the details of Auth Engine APIs.

See more details about [Auth Engine or User Authentication](https://docs.capillarytech.com/docs/configure-authentication-settings).

### Host  URLs for Auth Engine

* **APAC**: [https://apac-s3wrapper.capillarytech.com](https://apac-s3wrapper.capillarytech.com)
* **APAC2**: [https://apac2-auth-api.capillarytech.com](https://apac2-auth-api.capillarytech.com)
* **EU**: [https://eu-auth-api.capillarytech.com](https://eu-auth-api.capillarytech.com)

### API Gateway URLs

* **APAC**: [https://apac-apigateway.capillarytech.com/mobile](https://apac-apigateway.capillarytech.com/mobile)
* **APAC2**: [https://apac2-api-gateway.capillarytech.com/mobile](https://apac2-api-gateway.capillarytech.com/mobile)

> 📘 The host URL for Auth Engine is different from generic CRM V1.1 and V2 APIs.

## Status Codes

## Error Codes

| Code | Description                                                                                              |
| ---- | -------------------------------------------------------------------------------------------------------- |
| 1502 | Unable to validate OTP.                                                                                  |
| 1503 | Unable to generate OTP.                                                                                  |
| 1504 | Unable to generate token.                                                                                |
| 1505 | Invalid session.                                                                                         |
| 1506 | Invalid OTP.                                                                                             |
| 1507 | Mobile number does not match with the mobile number used to generate token/session.                      |
| 1508 | Device ID does not match with the device ID used to generate token/session.                              |
| 1509 | Brand name does not match with the brand name used to generate token/session.                            |
| 1515 | User does not exist.                                                                                     |
| 1518 | Reached the maximum allowed OTP retry attempts, Authenticate form the start.                             |
| 1519 | Invalid details passed.                                                                                  |
| 1520 | Password is enabled for the brand. Password cannot be empty.                                             |
| 1521 | Password and confirm password does not match.                                                            |
| 1523 | Unable to change password.                                                                               |
| 1524 | Password is not enabled for the brand.                                                                   |
| 1525 | Cannot regenerate token, please authenticate again.                                                      |
| 1526 | Unable to validate password.                                                                             |
| 1527 | Old password and new password cannot be same.                                                            |
| 1528 | Invalid password, please try with the correct password.                                                  |
| 1529 | Token has expired.                                                                                       |
| 1530 | Reached the maximum allowed password retry attempts, please reset your password.                         |
| 1531 | Unable to expire token.                                                                                  |
| 1532 | Unable to reset password.                                                                                |
| 1534 | Reached the maximum number of OTPs allowed per customer.                                                 |
| 1535 | Maximum OTP count per customer cannot be 0 (it has to be >= 1).                                          |
| 1537 | OTP is not generated for the provided details. Please generate OTP and try again.                        |
| 1540 | Either mobile or email is required to send OTP.                                                          |
| 1541 | Identifier used to generate session does not match with the identifier used to generate or validate OTP. |
| 1542 | Password does not meet the requirements.                                                                 |
| 1543 | Username already exists.                                                                                 |
| 1546 | Invalid identifierType passed.                                                                           |
