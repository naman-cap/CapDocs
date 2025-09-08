---
title: Success and error codes
excerpt: >-
  This page provides you with information on success and error codes associated
  with OTP API.
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
# Success Code

| Code | Description                    |
| ---- | ------------------------------ |
| 610  | OTP is validated successfully. |

# Error Codes

| Code | Description                                                                                                                    |
| ---- | ------------------------------------------------------------------------------------------------------------------------------ |
| 429  | Rate limit exceeded. A maximum of 10 OTPs can be generated for an user per day. However, the limit can be changed if required. |
| 600  | Invalid or null `action` passed.                                                                                               |
| 601  | Invalid or null `entity_type` passed.                                                                                          |
| 602  | Invalid or null `entity_value` passed.                                                                                         |
| 603  | Invalid or null `communication channel` value passed.                                                                          |
| 604  | No OTP passed.                                                                                                                 |
| 605  | OTP is either invalid, expired, or null.                                                                                       |
| 606  | Unable to generate OTP at the moment.                                                                                          |
| 874  | Unable to generate validation code (OTP).                                                                                      |
| 875  | Unable to generate validation code (OTP).                                                                                      |
| 876  | OTP Validation Failed                                                                                                          |
| 9001 | No valid  OTP found.                                                                                                           |
