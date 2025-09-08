---
title: Retrieve extended field config details
excerpt: ''
api:
  file: v2.json
  operationId: retrieve-extended-field-config-details
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
# Prerequisites

-   Authentication: Basic or OAuth authentication
-   Default access group

# Resource information

|                      |                               |
| :------------------- | :---------------------------- |
| URI                  | v2/entity/extendedFieldConfig |
| HTTP method          | GET                           |
| Pagination supported | NA                            |
| Rate limit           | NA                            |
| Batch support        | NA                            |

# API endpoint example

[https://eu.api.capillarytech.com/v2/entity/extendedFieldConfig](https://eu.api.capillarytech.com/v2/entity/extendedFieldConfig)

# Response parameters

| Parameter                 | Type    | Description                                                                                                                                                                                                                                      |
| ------------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `extendedFieldId`         | integer | Unique identifier for the extended field.                                                                                                                                                                                                        |
| `createdBy`               | integer | ID of the user who created the field.                                                                                                                                                                                                            |
| `modifiedBy`              | integer | ID of the user who last modified the field.                                                                                                                                                                                                      |
| `hideDisplay`             | boolean | Indicates whether the field should be hidden from display.                                                                                                                                                                                       |
| `isPiiData`               | boolean | Indicates if the field contains Personally Identifiable Information (PII).                                                                                                                                                                       |
| `isPsiData`               | boolean | Indicates if the field contains Potentially Sensitive Information (PSI). Refer to the PSI data documentation for more [information on classifying PSI data](https://docs.capillarytech.com/docs/classify-potentially-sensitive-information-psi). |
| `position`                | integer | Position of the field in the form or display order in the user interface.                                                                                                                                                                        |
| `fieldUpdatable`          | boolean | Indicates if the field can be updated.                                                                                                                                                                                                           |
| `updatable`               | boolean | Indicates if the field is updatable (general flag). Only applicable for Instore.                                                                                                                                                                 |
| `mandatory`               | boolean | Indicates if the field is mandatory. Only applicable for Instore.                                                                                                                                                                                |
| `computeEnabled`          | boolean | Indicates if the field has compute logic enabled.                                                                                                                                                                                                |
| `rejectTxnOnInvalidValue` | boolean | Indicates if transactions should be rejected on invalid field value.                                                                                                                                                                             |
| `auditTrailEnabled`       | boolean | Indicates if audit trail (audit logging) is enabled for the field.                                                                                                                                                                               |
| `warnings`                | array   | List of warnings related to the field.                                                                                                                                                                                                           |