---
title: Organization (V1)
excerpt: >-
  The organization entity holds configuration details and transaction details of
  an organization. You to retrieve the org level details such as profile
  information, configurations set on InTouch, custom field details, transaction
  details and top selling products at the organization.


  You cannot modify the existing information using the organization entity.
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
## Status Codes

### Success Codes

| Code | Description                            |
| ---- | -------------------------------------- |
| 3200 | Operation successful.                  |
| 3200 | Entities are fetched successfully      |
| 3200 | Custom fields are fetched successfully |
| 3205 | Configurations saved successfully      |
| 3208 | Configuration fetched successfully     |

### Error Codes

| Code | Description                                       |
| ---- | ------------------------------------------------- |
| 3201 | Operation failed                                  |
| 3202 | Entities not found                                |
| 3203 | Custom field(s) not found                         |
| 3204 | Custom field(s) not found for this scope          |
| 3206 | Unable to save configurations                     |
| 3207 | Customer type is invalid                          |
| 3209 | No configurations are found for this organization |
| 3211 | Configuration scope is invalid                    |
| 3212 | Configuration value is invalid                    |
