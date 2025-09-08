---
title: Generate Cards
excerpt: Lets you generate cards for a card series in bulk.
api:
  file: v2.json
  operationId: generate-cards
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
This API generates card numbers in bulk for a specific card series. Generated cards have a status  NOT_ISSUED, and you can assign or issue them to customers later.

> 👍 Note
>
> For detailed information about the APIs and for hands-on testing, refer to the [API overview](https://docs.capillarytech.com/reference/apioverview) documentation and step-by-step guide on[ making your first API call.](https://docs.capillarytech.com/reference/make-your-first-api-call)

# Prerequisites

*   Basic Authentication
*   Default access group

## Resource information

| HTTP method           | Post  |
| :-------------------- | :---- |
| Authentication        | Basic |
| Pagination supported? | NO    |
| Rate limit            | YES   |
| Batch support         | NO    |

## Example request

```json Sample request
curl --location 'https://eu.api.capillarytech.com/v2/card/generate' \
--header 'Content-Type: application/json' \
--header 'Authorization: Basic =' \
--header 'Cookie: _cfuvid=1gjL.3hjs9_Sp0UkKbhUmEt34PmLhAZnVwEQw4nqdqU-1756726591406-0.0.1.1-604800000' \
--data '{
  "seriesId":173,
  "count": 5,
  "statusLabel":"NOT_ISSUED"
}
'
```

## Body parameters

| Field       | Type    | Required | Description                                     |
| :---------- | :------ | :------- | :---------------------------------------------- |
| seriesID    | integer | Yes      | Unique ID of the card series to generate cards. |
| count       | integer | Yes      | Number of cards to generate.                    |
| statusLabel | string  | Optional | Current user-defined status of the card.        |

## Example response

```json Sample response
{
  "data": [
    "Test09000000000037end",
    "Test09000000000036end",
    "Test09000000000035end",
    "Test09000000000034end",
    "Test09000000000033end"
  ],
  "warnings": [],
  "errors": []
}
```

## Response parameters

| Field    | Type  | Description                      |
| :------- | :---- | :------------------------------- |
| data     | Array | Array of generated card numbers. |
| warnings | Array | Array of warnings.               |
| errors   | Array | Array of errors.                 |

# Error Code

| Code | Description                                                                                                                                                                                                                                                                   |
| ---- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 500  | Internal Server Error — The server encountered an unexpected condition that prevented it from fulfilling the request.  This may happen due to internal server issues such as unexpected failures, database errors, or unhandled exceptions. It is not caused by client input. |
| 3000 | Invalid card series.                                                                                                                                                                                                                                                          |
| 3017 | Status label is invalid.                                                                                                                                                                                                                                                      |
| 3025 | Count field is missing or invalid.                                                                                                                                                                                                                                            |
