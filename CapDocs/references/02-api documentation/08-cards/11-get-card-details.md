---
title: Get Card Details
excerpt: Retrieves information about a specific card using the card number
api:
  file: v2.json
  operationId: get-card-details
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
The Get Card Details API retrieves information about a specific card using its unique card number. It returns details such as card identifiers, status, series, customer information, and any configured custom or extended fields. This API is read-only and does not update card information.

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
curl --location 'https://eu.api.capillarytech.com/v2/card?format=json&number=from1m1n1000000000100too' \
--header 'Authorization: Basic =' \
--header 'Cookie: _cfuvid=Ke4hAFMfCGK4gDMjnzYbiJhhGLrie234r1j56zvpTfc-1756899809255-0.0.1.1-604800000' \
--data ''
```

## Query parameters

| Field  | Type   | Required | Description                      |
| :----- | :----- | :------- | :------------------------------- |
| number | string | Yes      | Card number to retrieve details. |

## Example response

```json Sample response
{
    "cardId": 904249,
    "issuedDate": "2025-06-13T08:19:33Z",
    "createdDate": "2025-06-13",
    "expiryDays": 1000,
    "seriesName": "card series create new",
    "customerId": 564590100,
    "maxActiveCards": 5,
    "entityCode": "rutuja_capillary",
    "cardExternalId": "externalId44",
    "customFields": {},
    "type": "DIGITAL",
    "cardNumber": "from1m1n1000000000100too",
    "seriesId": 169,
    "seriesCode": "Test094",
    "orgId": 100737,
    "entityId": 75155373,
    "statusInfo": {
        "reason": "",
        "createdBy": 904249,
        "actions": [],
        "autoUpdateTime": "2025-06-13",
        "createdOn": "2025-06-13T08:19:33Z",
        "entityId": 904249,
        "id": 27976955,
        "isActive": true,
        "labelId": 494,
        "label": "ACTIVE",
        "status": "ACTIVE"
    },
    "id": 904249,
    "activeAndDigital": true,
    "transactionNotAllowed": true,
    "expiryDate": "2028-03-09T00:00:00Z",
    "warnings": []
}
```

# Response Parameters

| Parameter             | Type    | Description                                                 |
| :-------------------- | :------ | :---------------------------------------------------------- |
| cardId                | int     | Unique identifier for the card.                             |
| issuedDate            | string  | Date and time when the card was issued.                     |
| createdDate           | string  | Date when the card was created.                             |
| expiryDays            | int     | Number of days after issuance when the card will expire.    |
| seriesName            | string  | Name of the card series.                                    |
| customerId            | int     | Unique identifier of the customer associated with the card. |
| maxActiveCards        | int     | Maximum number of active cards allowed.                     |
| entityCode            | string  | Code of the entity associated with the card.                |
| cardExternalId        | string  | External identifier for the card.                           |
| customFields          | object  | Custom field data as key-value pairs.                       |
| type                  | string  | Type of card (e.g., `DIGITAL`).                             |
| cardNumber            | string  | Card number assigned.                                       |
| seriesId              | int     | Unique identifier of the card series.                       |
| seriesCode            | string  | Code of the card series.                                    |
| orgId                 | int     | Organization identifier.                                    |
| entityId              | int     | Entity identifier linked to the card.                       |
| statusInfo            | object  | Status details of the card.                                 |
| — reason              | string  | Reason for the current status (if any).                     |
| — createdBy           | int     | Identifier of the user who created this status entry.       |
| — actions             | array   | List of actions related to status updates.                  |
| — autoUpdateTime      | string  | Date when status was automatically updated.                 |
| — createdOn           | string  | Date and time when the status was created.                  |
| — entityId            | int     | Entity identifier related to this status.                   |
| — id                  | int     | Unique identifier for the status entry.                     |
| — isActive            | boolean | `true` if active; `false` if inactive.                      |
| — labelId             | int     | Identifier for the status label.                            |
| — label               | string  | Label description of the status (e.g., `ACTIVE`).           |
| — status              | string  | Status code (e.g., `ACTIVE`).                               |
| id                    | int     | Unique identifier for the card object.                      |
| activeAndDigital      | boolean | Indicates if the card is both active and digital.           |
| transactionNotAllowed | boolean | Indicates if transactions are disallowed on this card.      |
| expiryDate            | string  | Expiry date and time of the card (ISO 8601 format).         |
| warnings              | array   | List of warnings, if any.                                   |
