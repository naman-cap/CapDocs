---
title: Add Till
excerpt: ''
api:
  file: v2.json
  operationId: add-till-with-new-custom-fields
deprecated: false
hidden: false
metadata:
  title: ''
  description: >-
    This document provides information on an API that allows you to create a new
    Till for your store with custom fields to store specific information.
  robots: index
next:
  description: ''
---
This API enables you to create a new Till for your store. You can also create or attach existing custom fields to a till.  The till-level custom fields enable brands to add additional information about the till especially when the brand has multiple tills mapped to a store. For example, till code, till name, description about till etc. The custom fields that you create for a till will be available for all the tills under the org.

> 👍 Note
>
> For detailed information about our APIs and for hands-on testing, refer documentation in [API overview](https://docs.capillarytech.com/reference/apioverview) and  step-by-step guide on making your first API call in [Make your first API call](https://docs.capillarytech.com/reference/make-your-first-api-call) .

# API endpoint example

`<https://eu.api.capillarytech.com/v2/orgEntity/till>`

# Prerequisites

*   Authentication -  Basic or OAuth authentication details
*   Access group resource - Access to Organisation resource
*   Configuration -  If you want to create more than five custom fields, create a ticket to the sustenance team and increase the limit in the configuration `PRODUCT_CONF_ORG_AUDITABLE_CUSTOM_FIELDS_LIMIT`. By default, the maximum value is set as five.

# Resource information

|               |                   |
| :------------ | :---------------- |
| URI           | v2/orgEntity/till |
| HTTP method   | POST              |
| Rate limit    | Default           |
| Batch support | NA                |

# Request body parameters

<Note title="Note">
Parameters marked with \* are mandatory.
</Note>

| Parameter           | Type      | Description                                                                                                                                                                                                                                                                                                                                                    |
| ------------------- | --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| name\*              | string    | Name for the till.  The name must start with a lowercase letter (`a`–`z`). The rest can include lowercase letters, digits, dot (`.`), underscore (`_`), or hyphen (`-`). Uppercase letters and other special characters are not allowed. The name must be at least 3 characters long. The Till name specified will also be copied to Till code in the backend. |
| password\*          | string    | Password for the till.                                                                                                                                                                                                                                                                                                                                         |
| storeId\*           | long      | Store ID of the parent Store in which the Till has to be created.                                                                                                                                                                                                                                                                                              |
| description         | string    | Description for the till.                                                                                                                                                                                                                                                                                                                                      |
| billable            | boolean   | Specify if the till is used for billing. By default, the value is set as `true`.                                                                                                                                                                                                                                                                               |
| storeServerId       | long      | Store server ID of the parent Store if available.                                                                                                                                                                                                                                                                                                              |
| customFields        | array-obj | Specify the custom fields to be added to the org and attached to the till. You can create new fields or add existing ones.                                                                                                                                                                                                                                     |
| └─ name\*           | string    | Name for the custom field. Required if you are creating custom fields.                                                                                                                                                                                                                                                                                         |
| └─ value\*          | string    | Value assigned to the custom field. Required if you are creating custom fields.                                                                                                                                                                                                                                                                                |
| └─ type             | string    | Type of the custom field (e.g., text, number, date).                                                                                                                                                                                                                                                                                                           |
| └─ dataType         | string    | Data type of the value stored in the field (e.g., string, integer, boolean).                                                                                                                                                                                                                                                                                   |
| └─ rule             | string    | Client-side validation rule for the field (Infix expression).                                                                                                                                                                                                                                                                                                  |
| └─ serverRule       | string    | Server-side validation rule for the field (Infix expression).                                                                                                                                                                                                                                                                                                  |
| └─ regex            | string    | Regular expression for validating the field value.                                                                                                                                                                                                                                                                                                             |
| └─ error            | string    | Error message to be displayed.                                                                                                                                                                                                                                                                                                                                 |
| └─ options          | int       | Comma-separated options for selection fields. Example: `valueA, valueB, valueC`.                                                                                                                                                                                                                                                                               |
| └─ disableAtServer  | int       | Flag for disabling the field on the server-side (`0`: enabled, `1`: disabled).                                                                                                                                                                                                                                                                                 |
| └─ enableAuditTrail | int       | Flag for audit tracking (`0`: not tracked, `1`: tracked). Up to 5 fields can be tracked.                                                                                                                                                                                                                                                                       |
| └─ isPiiData        | int       | Flag for PII data (`0`: no, `1`: yes).                                                                                                                                                                                                                                                                                                                         |
| └─ isPsiData        | int       | Flag for PSI data (`0`: no, `1`: yes). [Learn more](https://docs.capillarytech.com/docs/classify-potentially-sensitive-information-psi)                                                                                                                                                                                                                        |
| └─ helptext         | string    | Help text displayed to the user.                                                                                                                                                                                                                                                                                                                               |
| └─ attrs            | string    | Additional attributes associated with the custom field.                                                                                                                                                                                                                                                                                                        |

```curl Add till
curl --location 'https://eu.api.capillarytech.com/v2/orgEntity/till' \
--header 'Authorization: Basic cmFuZG9tE6MjAyY2I5NjJhYzU5MDc1Yjk2NGIwNzE1MmQyMzRiNzA=' \
--header 'Content-Type: application/json' \
--data '{
  "description": "Testing description",
  "storeId": 50154731,
  "password": "123",
  "billable": true,
  "name": "new_till2239"
}'
```
```curl Add till with new custom fields
curl --location 'https://eu.api.capillarytech.com/v2/orgEntity/till' \
--header 'Authorization: Basic cmFuZG9tE6MjAyY2I5NjJhYzU5MDc1Yjk2NGIwNzE1MmQyMzRiNzA=' \
--header 'Content-Type: application/json' \
--data '{
"description": "Testing description",
"storeId": 50154731,
"password": "123",
"billable": true,
"name": "new_till2239",
"customFields": [
{
  "name": "cf_1",
  "type": "text",
  "dataType": "string",
  "label": "Custom Field Label",
  "defaultValue": "14",
  "phase": "",
  "position": 1,
  "rule": "",
  "serverRule": "",
  "regex": "",
  "error": "",
  "options": "",
  "isDisabled": 0,
  "isCompulsory": 0,
  "disableAtServer": 0,
  "isUpdatable": 1,
  "enableAuditTrail": 0,
  "isPiiData": 0,
  "isPsiData": 0,
  "helptext": "This is a custom field",
  "attrs": "",
  "value": "15"
}
]
}'
```
```curl Add till with existing custom fields
curl --location 'https://eu.api.capillarytech.com/v2/orgEntity/till' \
--header 'Authorization: Basic cmFuZG9tE6MjAyY2I5NjJhYzU5MDc1Yjk2NGIwNzE1MmQyMzRiNzA=' \
--header 'Content-Type: application/json' \
--data '{
"description": "Testing description",
"storeId": 50154731,
"password": "123",
"billable": true,
"name": "new_till_2",
"customFields": [
{
  "name": "cf_1",
  "value": "16"
}
]
}'
```

# Response parameters

| Parameter | Description          |
| --------- | -------------------- |
| createdId | The till ID created. |
| warnings  | Warnings if any.     |

```json
{
    "createdId": 50157065,
    "warnings": []
}
```

# API-specific error codes

| Error code | Description                                                                                                                                                                |
| :--------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1207       | TIll name already exists. Use a unique name.                                                                                                                               |
| 1214       | The parent store is not valid. Use a valid parent store ID                                                                                                                 |
| 1023       | The number of custom fields that can be created is reached. In the org settings, increase the limit of `PRODUCT_CONF_ORG_AUDITABLE_CUSTOM_FIELDS_LIMIT`. Default value: 5. |
| 1024       | The custom field parameter is null or empty. Enter a value for the parameter.                                                                                              |
| 1025       | There are multiple custom fields with the same name. Use a unique custom field name.                                                                                       |