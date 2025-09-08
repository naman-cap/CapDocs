---
title: Transfer Staff User
excerpt: Lets admin user change the store id associated to a staff user.
api:
  file: v2.json
  operationId: transfer-staff-user
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

| Parameter | Description                           |
| :-------- | :------------------------------------ |
| username  | Username of the staff user.           |
| id        | Unique ID of the staff.               |
| mobile    | Mobile number of the staff user.      |
| email     | Email ID of the staff user.           |
| storeCode | Store code associated with the staff. |

# Response parameter

| Parameter | Description                                                         |
| --------- | ------------------------------------------------------------------- |
| entity    | An identifier or ID related to a specific entity in the system.     |
| warnings  | A list containing any warnings related to the operation or request. |
| errors    | A list containing any errors related to the operation or request.   |
| success   | Indicates whether the operation or request was successful.          |