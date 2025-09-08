---
title: Get Staff of Store/Zone
excerpt: >-
  Retrieve registered staff users of a specific store or zone. Accessible only
  to admin users.
api:
  file: v2.json
  operationId: get-staff-of-storezone
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

| Parameter | Description                                                                 |
| :-------- | :-------------------------------------------------------------------------- |
| zoneCode  | Get registered staff of a specific zone. Pass the respective zone code.     |
| storeCode | Fetch registered users of a specific store. Pass the respective store code. |

# Response parameter

| Parameter | Description                                                         |
| --------- | ------------------------------------------------------------------- |
| username  | The username associated with the entity.                            |
| mobile    | Mobile number of the user.                                          |
| email     | Email ID of the user.                                               |
| storeCode | The code representing a specific store associated with the user.    |
| zoneCode  | Code representing a specific zone associated with the user.         |
| id        | An identifier or ID related to a specific entity in the system.     |
| warnings  | A list containing any warnings related to the operation or request. |
| errors    | A list containing any errors related to the operation or request.   |
| success   | Indicates whether the operation or request was successful.          |