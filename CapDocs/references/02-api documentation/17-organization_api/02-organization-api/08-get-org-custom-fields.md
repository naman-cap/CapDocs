---
title: Get Custom Fields
excerpt: Retrieves all the custom fields created for the org.
api:
  file: v2.json
  operationId: get-org-custom-fields
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
| Parameter        | Data Type | Description                                                                                                                                                                                                              |
| ---------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| name             | String    | Name of the custom field                                                                                                                                                                                                 |
| type             | String    | Type of the field. For example, text, datepicker, checkbox, dropdown etc                                                                                                                                                 |
| dataType         | String    | Data type of the field.                                                                                                                                                                                                  |
| label            | String    | Label assigned to the custom field to identify the custom field. For example, address, date of birt etc.                                                                                                                 |
| scope            | String    | Defines the purpose or where the custom field is used.                                                                                                                                                                   |
| defaultValue     | String    | Default value for the field. This field applies to client-side applications like Instore and does not undergo any server-side validation.                                                                                |
| phase            | String    | This is applicable for Instore and is not in use.                                                                                                                                                                        |
| position         | String    | Position of the field. Indicates the order of the field on UI. This field applies to client-side applications like Instore and does not undergo any server-side validation.                                              |
| rule             | String    | Rule for the field. Client-side validation rule for the field (Infix expression)                                                                                                                                         |
| serverRule       | String    | Server-side rule for the field. Server-side validation rule for the field (Infix expression)                                                                                                                             |
| regex            | String    | Regular expression for validation. Validation for the field.                                                                                                                                                             |
| error            | String    | Error message for validation                                                                                                                                                                                             |
| options          | String    | Displays the options available to choose from if it is a drop-down.                                                                                                                                                      |
| isDisabled       | Integer   | Whether the field is disabled (0 or 1).                                                                                                                                                                                  |
| isCompulsory     | Integer   | Whether the field is compulsory (0 or 1). This field applies to client-side applications like Instore and does not undergo any server-side validation.                                                                   |
| disableAtServer  | Integer   | Whether disabling at server (0 or 1)                                                                                                                                                                                     |
| isUpdatable      | Integer   | Whether the field is updatable (0 or 1). This field applies to client-side applications like Instore and does not undergo any server-side validation.                                                                    |
| enableAuditTrail | Integer   | Whether enable audit trail is enabled (0 or 1)                                                                                                                                                                           |
| isPiiData        | Integer   | Whether the field is PII data (0 or 1)                                                                                                                                                                                   |
| isPsiData        | Integer   | Indicates if the custom field is sensitive data. Refer to the PSI data documentation for more [information on classifying PSI data](https://docs.capillarytech.com/docs/classify-potentially-sensitive-information-psi). |