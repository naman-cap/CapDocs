---
title: Change Account Password
excerpt: >-
  Lets you change the password of the staff using the associated Auth or
  AccessToken. Either you can use the auth or the login credentials.
api:
  file: v2.json
  operationId: change-account-password
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
# Body parameter

| Parameter | Description                        |
| :-------- | :--------------------------------- |
| password  | New password of the staff account. |

# Response parameter

| Parameter | Description                                                         |
| --------- | ------------------------------------------------------------------- |
| entity    | An identifier or ID related to a specific entity in the system.     |
| warnings  | A list containing any warnings related to the operation or request. |
| errors    | A list containing any errors related to the operation or request.   |
| success   | Indicates whether the operation or request was successful.          |