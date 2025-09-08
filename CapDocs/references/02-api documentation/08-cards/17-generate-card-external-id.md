---
title: Generate Card/customer External ID
excerpt: ''
api:
  file: v2.json
  operationId: generate-card-external-id
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
This API lets you generate external IDs manually which can be tagged to a customer while registering. A unique external ID is generated every time you call this API. The maximum allowed character is 50.

When a customer is registered without an external ID, this API is called in the back end and the unique external ID is tagged to the customer automatically. However, it does not override the existing external ID.

<Callout icon="👍" theme="okay">
  For detailed information about our APIs and for hands-on testing, refer documentation in [API overview](https://docs.capillarytech.com/reference/apioverview) and  step-by-step guide on making your first API call in [Make your first API call](https://docs.capillarytech.com/reference/make-your-first-api-call) .
</Callout>

# Prerequisites

Navigate to InTouch > Settings > Miscellaneous> Registration Configuration page to:

*   Enable `CONF_CARD_NUMBER_GENERATION_ENABLED`.
*   SEnable `CONF_CLIENT_V2_API_ENABLED`.
*   Valid only for account IDs configured on `SOURCE_ACCOUNTS_EXTERNALID_ENABLED` .
*   Set `CONF_CARD_CHECKSUM_DIGIT_ALGO` with one of the following values `LUHN_ALGO, MOD7_ALGO, AUTO_INC, RANDOM, RANDOM_LUHN, RANDOM_MOD7`
*   Set `CONF_CARD_NUMBER_LENGTH`

For more information and other optional configurations available, refer to [External ID configuration](https://docs.capillarytech.com/docs/customer_entity#external-id-configuration).

<Callout icon="📘" theme="info">
  In response, `entity` is the generated external ID.
</Callout>

# API endpoint example

`https://us.api.capillarytech.com/v2/cardNumber`

## Example request

```json Sample request
curl --location --request PUT 'https://eu.api.capillarytech.com/v2/card?format=json' \
--header 'Content-Type: application/json' \
--header 'Authorization: Basic ==' \
--header 'Cookie: _cfuvid=ELP_n3u8qC1Vt2z0yryFjifRT6N.CVONHAt3Fse0zsQ-1750659660819-0.0.1.1-604800000' \
--data '{
    "cardNumber": "from1m1n1000000000100too",
    "cardExternalId": "externalId44"
}'
```

## Body parameters

| Field          | Type   | Required | Description                                                           |
| :------------- | :----- | :------- | :-------------------------------------------------------------------- |
| cardNumber     | string | Yes      | Primary card identifier to update (e.g. loyalty or gift card number). |
| cardExternalId | string | Yes      | External system reference/id to associate with the card.              |

## Example response

```json Sample response
{
    "cardId": 904249,
    "customerId": 564590100,
    "cardExternalId": "externalId44",
    "cardNumber": "from1m1n1000000000100too",
    "orgId": 100737,
    "entityId": 75155373,
    "transactionNotAllowed": false,
    "activeAndDigital": false,
    "warnings": []
}
```
```json Sample response 500
{
  "warnings": [],
  "errors": [
    {
      "status": false,
      "code": 500,
      "message": "All requests have failed due to errors"
    }
  ]
}
```

## Response parameters

| Field                 | Type             | Description                                                  |
| --------------------- | :--------------- | ------------------------------------------------------------ |
| cardId                | integer          | Internal unique identifier of the card.                      |
| customerID            | integer          | Identifier of the customer linked to the card.               |
| cardExternalId        | string           | External system's/reference id for the card.                 |
| cardNumber            | string           | Human/merchant-facing card number.                           |
| orgId                 | integer          | Organization/tenant identifier owning the card.              |
| entityId              | integer          | Entity/store/account context associated with the card.       |
| transactionNotAllowed | boolean          | Indicates if transactions on the card are currently blocked. |
| activeAndDigital      | boolean          | True if the card is active and provisioned digitally.        |
| warnings              | Array of strings | Non-fatal warnings related to the card or lookup.            |

<br />

<br />
