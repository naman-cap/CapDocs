---
title: Create Store Associates
excerpt: >-
  Allows adding new associates to a store. Only admin users of the org can
  create associates.
api:
  file: v2.json
  operationId: create-store-associates
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

| Parameter | Description                                         |
| --------- | --------------------------------------------------- |
| code      | Unique code associated with the entity.             |
| name      | Full name of the entity.                            |
| storeId   | ID related to the store associated with the entity. |
| isActive  | Indicates if the entity is active or not.           |

# Response parameter

| Parameter | Description                                      |
| --------- | ------------------------------------------------ |
| createdId | ID generated upon creation of the entity.        |
| warnings  | List of warnings related to the entity creation. |