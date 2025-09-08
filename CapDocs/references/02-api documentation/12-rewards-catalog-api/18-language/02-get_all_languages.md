---
title: Get All Language Metadata
api:
  file: Get all language metadata.yaml
  operationId: postApi_gatewayrewardscorev1metadatalanguages
hidden: false
---
This API allows you to retrieve metadata for all languages supported by the Rewards.

# Prerequisites

*   Authentication: Basic or OAuth credentials
*   Default access group

# Resource information

|                        |                                                        |
| :--------------------- | :----------------------------------------------------- |
| URI                    | /api\_gateway/rewards/core/v1/metadata/language/create |
| HTTP Method            | GET                                                    |
| Pagination             | NA                                                     |
| Batch support          | NA                                                     |
| Rate limit information | NA                                                     |

# Sample API cURL

```
curl --request GET \
     --url https://host/api_gateway/rewards/core/v1/metadata/languages \
     --header 'accept: application/json'
```

# Response parameters

| Parameter               | Data Type | Description                                      |
| ----------------------- | --------- | ------------------------------------------------ |
| status                  | object    | Contains the status of the operation.            |
| status.success          | boolean   | Indicates whether the operation was successful.  |
| status.code             | integer   | A code representing the status of the operation. |
| status.message          | string    | Additional information about the operation.      |
| languageList            | array     | List of languages fetched from the system.       |
| languageList\[].code    | string    | Unique code representing the language.           |
| languageList\[].name    | string    | The name of the language.                        |
| languageList\[].enabled | boolean   | Indicates whether the language is enabled.       |

```curl Response Sample
{
    "status": {
        "success": true,
        "code": 2101,
        "message": "Language fetched successfully"
    },
    "languageList": [
        {
            "code": "      ",
            "name": "RALLY QUALITY DASHBOARD",
            "enabled": true
        },
        {
            "code": "                            123432",
            "name": "                        ",
            "enabled": true
        },
        {
            "code": "~~~~~~~~~",
            "name": "~~~~~~",
            "enabled": false
        },
        {
            "code": "12",
            "name": "malayalam",
            "enabled": false
        },
        {
            "code": "123",
            "name": "Malayalam",
            "enabled": false
        },
        {
            "code": "123333",
            "name": "NewTestLanguage",
            "enabled": true
        },
        {
            "code": "1234",
            "name": "Malayalam",
            "enabled": false
        },
        {
            "code": "ar",
            "name": "Arabic",
            "enabled": true
        },
        {
            "code": "arb",
            "name": "Arabic",
            "enabled": false
        },
        {
            "code": "Chinese",
            "name": "Chinese",
            "enabled": false
        },
        {
            "code": "de",
            "name": "German",
            "enabled": false
        },
        {
            "code": "Dutch",
            "name": "Dutch",
            "enabled": false
        },
        {
            "code": "en",
            "name": "English",
            "enabled": true
        },
        {
            "code": "English",
            "name": "English",
            "enabled": true
        },
        {
            "code": "fr",
            "name": "French",
            "enabled": true
        },
        {
            "code": "hin",
            "name": "Hindi",
            "enabled": true
        },
        {
            "code": "hin1",
            "name": "Hindi",
            "enabled": true
        },
        {
            "code": "HindiTest",
            "name": "TestHindi",
            "enabled": true
        },
        {
            "code": "ml",
            "name": "Malayalam",
            "enabled": true
        },
        {
            "code": "pro",
            "name": "pro test",
            "enabled": true
        },
        {
            "code": "prog",
            "name": "TestThis",
            "enabled": true
        },
        {
            "code": "sanskrit",
            "name": "sanskrit",
            "enabled": false
        },
        {
            "code": "sasadas d asd as ds ad as das d asd`",
            "name": "sadas d asd as ds ad as das d asd`",
            "enabled": false
        },
        {
            "code": "sp",
            "name": "Spanish",
            "enabled": true
        },
        {
            "code": "ST",
            "name": "Sanskrit",
            "enabled": true
        },
        {
            "code": "Testonly",
            "name": "NewLanguageTest",
            "enabled": true
        }
    ]
}
```

<br />

# API error codes

| Code | Description                   | Reason                                                 |
| :--- | :---------------------------- | :----------------------------------------------------- |
| 2101 | Language fetched successfully | The request to fetch languages was successful.         |
| 404  | Resource not found            | The requested API endpoint or resource does not exist. |
| 500  | UNEXPECTED\_ERROR             | An unexpected error occurred on the server.            |
| 400  | Invalid Request               | The request parameters or format were invalid.         |