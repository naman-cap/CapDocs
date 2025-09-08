---
title: Create Language Metadata for Rewards
api:
  file: Create language-reward catalog.yaml
  operationId: postApi_gatewayrewardscorev1metadatalanguagecreate
hidden: false
---
This API allows you to create language metadata for rewards.

# Prerequisites

*   Authentication: Basic or OAuth credentials
*   Default access group

# Resource information

|                        |                                                        |
| :--------------------- | :----------------------------------------------------- |
| URI                    | /api\_gateway/rewards/core/v1/metadata/language/create |
| HTTP Method            | POST                                                   |
| Pagination             | NA                                                     |
| Batch support          | NA                                                     |
| Rate limit information | NA                                                     |

# Sample API cURL

```
curl --location 'https://eu.api.capillarytech.com/api_gateway/rewards/core/v1/metadata/language/create' \
--header 'Content-Type: application/json' \
--header 'Accept: */*' \
--header 'Authorization: Basic Z2VvcmdlLmpvaG5zb246OTg4OTU2NWI4OVhMmY4ZWE1MTk1MjA2NWEwYTEzNzg=' \
--header 'Cookie: _cfuvid=Vo40i2sQt2b9D_BbvyU32Wbvu39g2t0iystT.W9RDJ0-1751522911573-0.0.1.1-604800000' \
--data '{
    "code" : "EN_DOC",
    "name" : "English"
}'
```

<br />

# Request body parameters

| Parameter | Data type | Description                                      |
| --------- | --------- | ------------------------------------------------ |
| code      | string    | Any unique identifier representing the language. |
| name      | string    | The name of the language.                        |

# Response parameters

| Parameter | Data type | Description                                                     |
| --------- | --------- | --------------------------------------------------------------- |
| status    | object    | Indicates the status of the operation                           |
| success   | boolean   | Indicates whether the operation was successful                  |
| code      | integer   | A code representing the status of the operation.                |
| message   | string    | A message providing additional information about the operation. |
| language  | object    | Contains details about the language that was saved              |
| code      | string    | Unique code representing the language.                          |
| name      | string    | Indicates name of the language.                                 |
| enabled   | boolean   | Indicates whether the language is enabled or not                |

<br />

```curl Sample Response
{
    "status": {
        "success": true,
        "code": 2102,
        "message": "Language save successfully"
    },
    "language": {
        "code": "EN_DO9",
        "name": "English",
        "enabled": true
    }
}
```

# API error codes

| Code | Description             | Reason                                      |
| :--- | :---------------------- | :------------------------------------------ |
| 2107 | Language already exists | Language with the same name already exists. |