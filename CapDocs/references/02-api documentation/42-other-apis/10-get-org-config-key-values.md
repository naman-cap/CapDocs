---
title: Get org configs
excerpt: Retrieves the organization configuration values based on config name.
api:
  file: organization-3.json
  operationId: get-org-config-key-values
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
# Request URL

https\://\{host}/v2/organization/configkeyvalue?name=\{configKeyName}

# Response parameters

| Parameter | Description                                                       |
| --------- | ----------------------------------------------------------------- |
| id        | Identifier for the object/record.                                 |
| entityId  | Identifier for the entity involved.                               |
| keyName   | Name of the key for which the value is being provided.            |
| value     | The value corresponding to the keyName.                           |
| warnings  | An array that contains any warnings associated with the response. |
