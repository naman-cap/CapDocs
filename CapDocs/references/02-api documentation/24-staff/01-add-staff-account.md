---
title: Add Staff Account
excerpt: Lets admin users to create a staff account for the organization.
api:
  file: v2.json
  operationId: add-staff-account
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

| Attribute   | Description                                                                            |
| ----------- | -------------------------------------------------------------------------------------- |
| username    | Specify the username for the current staff account. No special characters are allowed. |
| mobile      | Specify the mobile number of the staff.                                                |
| email       | Specify the mobile number of the staff.                                                |
| password    | Specify the password for the account.                                                  |
| storeCode   | Specify the store code to which you want to associate the staff.                       |
| zoneCode    | Specify a valid zone code associated to the store.                                     |
| ConceptCode | Specify the concept code associated to the store.                                      |
| firstname   | First name of the staff user.                                                          |
| lastname    | Last name of the staff user.                                                           |
| title       | Role of the staff user.                                                                |

# Response parameter

| Parameter | Description                              |
| --------- | ---------------------------------------- |
| entity    | Unique identifier for the given entity.  |
| warnings  | List of any warnings related to request. |
| errors    | List of any errors related to request.   |
| success   | Indicates if the request was successful. |