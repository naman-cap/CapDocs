---
title: Limit Active Cards per Customer
api:
  file: v2.json
  operationId: limit-active-cards-per-customer
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
The Limit Active Cards per Customer API allows you to define the maximum number of active cards a single customer can hold within an organization. By setting this limit, you can control card issuance, prevent misuse, and enforce business rules for card distribution.

<br />

> 👍 Note
>
> For detailed information about the APIs and for hands-on testing, refer to the [API overview](https://docs.capillarytech.com/reference/apioverview) documentation and step-by-step guide on[ making your first API call.](https://docs.capillarytech.com/reference/make-your-first-api-call)

# Prerequisites

*   Basic Authentication
*   Default access group

## Resource information

| HTTP method           | GET   |
| :-------------------- | :---- |
| Authentication        | Basic |
| Pagination supported? | NO    |
| Rate limit            | YES   |
| Batch support         | NO    |

## Example request

```json Sample request
curl --location 'https://eu.api.capillarytech.com/v2/organization/configs?format=json' \
--header 'accept: application/json' \
--header 'content-type: application/json' \
--data '
{
  "keyName": "CONF_MAX_CARDS_PER_ORG",
  "value": "4",
  "scope": "ORG"
}
'
```

<br />

# API cURL

```curl
curl --location 'https://eu.api.capillarytech.com/v2/organization/configs?format=json' \
--header 'accept: application/json' \
--header 'content-type: application/json' \
--header 'Authorization: Basic U2FudC5wXzEyMzpiMmVhMGFhZThmODg5ZTAzNGE2NjA5NTIwM2FlNw==' \
--header 'Cookie: _cfuvid=mirrmAvxthbAqTgFD6XrLGzCF6sPOk_ZLAY0BH9NSBA-1751333627727-0.0.1.1-604800000' \
--data '
{
  "keyName": "CONF_MAX_CARDS_PER_ORG",
  "value": "4",
  "scope": "ORG"
}
'
```

## Example response

```json Sample response
{
    "warnings": [],
    "errors": [
        {
            "status": false,
            "message": "All requests have failed due to errors",
            "code": 500
        }
    ]
}
```
```json Sample response
{
    "id": 6268295,
    "entityId": 100737,
    "keyName": "CONF_MAX_CARDS_PER_ORG",
    "value": "4",
    "warnings": []
}
```

# API Specific Error Code

| **Error Code** | **Description**       | **Reason**                                                                                                                                                                                                           |
| -------------- | --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **500**        | Internal Server Error | The server encountered an unexpected condition that prevented it from fulfilling the request. Typically caused by internal system issues, unhandled exceptions, or database/server errors — not due to client input. |
