---
title: Get Till ID Details
deprecated: false
hidden: false
metadata:
  robots: index
---
Retrieve detailed information for a specific till within your organization.

# Prerequisites

*   Authentication: Basic or OAuth credentials

*   Default access group

# Resource information

|                        |                                  |
| :--------------------- | :------------------------------- |
| URI                    | /v2/organization/till/\{TILL ID} |
| HTTP Method            | GET                              |
| Pagination             | No                               |
| Batch support          | No                               |
| Rate limit information | None                             |

# Example API request

```curl
curl --location 'https://eu.api.capillarytech.com/v2/organization/till/75161978' \
  --header 'Authorization: Basic Z2VvcmdlLmpvaG5zb246OTg4OTU2NWI4ODVhMmY4ZWE1MTk1MjA2NWEwYTEzNzg=' \
  --header 'Content-Type: application/json'
```

# Path parameter

| Name | Type    | Description                            |
| ---- | ------- | -------------------------------------- |
| id   | integer | Unique identifier of the till to fetch |

# Response parameters

| Parameter       | Data Type | Description                                                                       |
| --------------- | --------- | --------------------------------------------------------------------------------- |
| **id**          | integer   | Unique identifier for the till.                                                   |
| **code**        | string    | Code for the till.                                                                |
| **description** | string    | Description of the till.                                                          |
| **name**        | string    | Name of the till.                                                                 |
| **type**        | string    | Type of the till.                                                                 |
| **referenceId** | integer   | External or upstream reference (if any); `-1` indicates none.                     |
| **adminType**   | string    | Administration type of the till (Admin/General).                                  |
| **isActive**    | boolean   | Indicates if the till is active.                                                  |
| **isOuEnabled** | boolean   | Indicates if the Organizational Unit (OU) is enabled for the till.                |
| **timeZoneId**  | integer   | Time zone ID for the till.                                                        |
| **currencyId**  | integer   | Currency ID for the till.                                                         |
| **languageId**  | integer   | Language ID for the till.                                                         |
| **customField** | array     | Custom field and its details associated with the till.                            |
| **default**     | boolean   | `true` if this till is marked as the default for its org unit; `false` otherwise. |
| **warnings**    | array     | List of warnings related to the till.                                             |

**Note:**

* For updates or to add custom fields, see the “[Update Till](https://docs.capillarytech.com/reference/update-till-with-custom-field-info)” section in the API Reference.

```json 200 OK
{
  "id": 75161978,
  "code": "aditi",
  "description": "Description of the till",  // Updated
  "name": "aditi",
  "type": "TILL",
  "referenceId": -1,
  "adminType": "Administration type of the till",  // Updated
  "isActive": true,
  "isOuEnabled": false,
  "timeZoneId": 191,
  "currencyId": 95,
  "languageId": 148,
  "customField": [],
  "default": false,
  "warnings": []
}
```