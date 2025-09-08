---
title: Get org till details
excerpt: >-
  Retrieves the details of a specific till based on the Till code or till ID
  passed.
api:
  file: v2.json
  operationId: get-tills
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
> 🚧 Attention
>
> Either `code` , `name` or `tillId` is mandatory.

# Query parameter

| Parameter | Type   | Description                       |
| :-------- | :----- | :-------------------------------- |
| code      | String | Unique code of the Till to fetch. |
| tillId    | String | Unique ID of the till to fetch.   |
| name      | String | Name of till                      |

# Response parameter

| **Parameter** | **Type** | **Description**                                                    |
| ------------- | -------- | ------------------------------------------------------------------ |
| id            | Integer  | Unique identifier for the till                                     |
| code          | String   | Code for the till                                                  |
| description   | String   | Description of the till                                            |
| name          | String   | Name of the till                                                   |
| type          | String   | Type of the till                                                   |
| adminType     | String   | Administration type of the till  Admin/General.                    |
| isActive      | Boolean  | Indicates if the till is active                                    |
| isOuEnabled   | Boolean  | Indicates if the Organizational Unit (OU) is enabled for the till. |
| timeZoneId    | Integer  | Time zone ID for the till                                          |
| currencyId    | Integer  | Currency ID for the till                                           |
| languageId    | Integer  | Language ID for the till                                           |
| customField   | Array    | Custom field and its details associated with the till              |
| warnings      | Array    | List of warnings related to the till                               |