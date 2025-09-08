---
title: Validate Referral Code
excerpt: Lets you validate referral code received by the referee.
api:
  file: v2.json
  operationId: validate-referral-code
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
# Query parameter

| Parameter | Description                       |
| :-------- | :-------------------------------- |
| code      | Unique referral code to validate. |

# Response parameter

| Parameter | Description                                             |
| --------- | ------------------------------------------------------- |
| valid     | Indicates whether the operation or request is valid.    |
| referrer  | ID of the referrer.                                     |
| warnings  | A list of warnings related to the operation or request. |