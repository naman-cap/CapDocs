---
title: (Internal) Generate Expression JSON Endpoint
excerpt: Converts a rule expression into an expressionJson format.
api:
  file: v1.json
  operationId: generate-expression-json-endpoint
deprecated: false
hidden: true
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
This endpoint generates a JSON representation (expressionJson) for a given logical rule expression (exp) provided in the request payload. This is used internally within Capillary to understand the rule logic used by the loyalty UI while creating the expression. For more information on rule expressions, refer to the [rule writing](https://docs.capillarytech.com/docs/rule-writing#completing-a-valid-expression) documentation.

![ ](https://files.readme.io/33f6b0051433b5a70cb8c930d823b30084a3b848745622d8cf32c6cded532546-image.png)

# API endpoint example


&lt;https://eu.api.capillarytech.com/loyalty/api/v1/workflows/expJSON`\{ProgramId\}``\{eventType\}`&gt;

# Prerequisite

-   Authentication - Staging authentication

# Resource information


|                       |                                                           |
| :-------------------- | :-------------------------------------------------------- |
| URL                   | /loyalty/api/v1/workflows/expJSON`\{ProgramId\}``\{eventType\}` |
| HTTP method           | POST                                                      |
| Pagination supported? | NA                                                        |
| Rate limit            | NA                                                        |
| Batch support         | NA                                                        |

# Headers


| Header  
(\* denotes mandatory fields) | Description |
| --- | --- |
| cookie\* | Authentication and session information. CT (token for user authentication) and OID (org ID) are mandatory. |
| x-cap-remote-user | Identifier for the remote user making the request. Useful for tracking which user or entity initiated a request. |

<Note title="Note">
**Note**

</Note>
<Note title="Note">
CT token can be taken from Cookies under Application Tab of DevTools once logged in to Intouch.
</Note>

# Path parameters


| Parameter | Data Type | Description                                                                             |
| :-------- | :-------- | :-------------------------------------------------------------------------------------- |
| ProgramId | Integer   | Unique identifier for the loyalty program.                                              |
| eventType | String    | Specifies the type of event for which the rule applies, **Example**: `TargetCompleted`. |

# Body parameters


| Parameter | Data Type | Description                                                         |
| :-------- | :-------- | :------------------------------------------------------------------ |
| exp       | String    | Logical rule expression to be tested or converted into JSON format. |

# Sample request


```curl Sample Success Request
'{
    "exp":"currentEvent.targetName==\"Gatekeeper T&C Accepted\""
}'
``<code>bash

</code>``curl
Sample Failure Request
'{
    "exp":"currentEven.target DSCCDCCDVDVBIAAMWEG BUNWG BKRG DVHGRDVBRGWDVBE FVILName==looooo"
}'

```

# Response parameters


| Parameter        | Description                                                                                                                              |
| :--------------- | :--------------------------------------------------------------------------------------------------------------------------------------- |
| success          | Indicates whether the operation was successful, **Example**: `true`.                                                                     |
| status           | HTTP status code of the response, **Example**: `200`.                                                                                    |
| result           | Array containing the parsed expressionJson, the input expression, and error info.                                                        |
| \-expressionJSON | Parsed or converted expressionJson.                                                                                                      |
| \-expression     | Original expression passed in the request, **Example**: `Gatekeeper T&C Accepted`.                                                       |
| \-isError        | Indicates if there was an error in processing the expression, `isError=false` indicates success, while `isError=true` indicates failure. |

<br  />

```json
{
    "success": true,
    "status": 200,
    "result": {
        "expressionJSON": "\n{\n  \"arity\":\"binary_operation\",\n  \"value\":\"==\",\n  \"type\":\"boolean:primitive\",\n  \"operands\":[\n    {\n      \"arity\":\"object_dereference\",\n      \"type\":\"string:object:primitive\",\n      \"operands\":[\n        {\n          \"arity\":\"name\",\n          \"value\":\"currentEvent\",\n          \"type\":\"customer.targetCompletedEvent:object:primitive\"\n        },\n        {\n          \"arity\":\"name\",\n          \"value\":\"targetName\",\n          \"type\":\"string:object:primitive\"\n        }\n      ]\n    },\n    {\n      \"arity\":\"literal\",\n      \"value\":\"Gatekeeper T&C Accepted\",\n      \"type\":\"string:object:primitive\"\n    }\n  ]\n}",
        "expression": "currentEvent.targetName==\"Gatekeeper T&C Accepted\"",
        "isError": false
    }
}
```json

```json
{
    "success": true,
    "status": 200,
    "result": {
        "expressionJSON": "\n{\n  \"arity\":\"group\",\n  \"operands\":[\n    {\n      \"arity\":\"object_dereference\",\n      \"operands\":[\n        {\n          \"arity\":\"name\",\n          \"value\":\"currentEven\"\n        },\n        {\n          \"arity\":\"name\",\n          \"value\":\"target\"\n        }\n      ]\n    },\n    {\n      \"arity\":\"name\",\n      \"value\":\"DSCCDCCDVDVBIAAMWEG\"\n    },\n    {\n      \"arity\":\"name\",\n      \"value\":\"BUNWG\"\n    },\n    {\n      \"arity\":\"name\",\n      \"value\":\"BKRG\"\n    },\n    {\n      \"arity\":\"name\",\n      \"value\":\"DVHGRDVBRGWDVBE\"\n    },\n    {\n      \"arity\":\"binary_operation\",\n      \"value\":\"==\",\n      \"operands\":[\n        {\n          \"arity\":\"name\",\n          \"value\":\"FVILName\"\n        },\n        {\n          \"arity\":\"name\",\n          \"value\":\"looooo\"\n        }\n      ]\n    }\n  ]\n}",
        "expression": "currentEven.target DSCCDCCDVDVBIAAMWEG BUNWG BKRG DVHGRDVBRGWDVBE FVILName==looooo",
        "isError": true
    }
}
```