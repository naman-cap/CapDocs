---
title: Link/Delink Card
excerpt: >-
  Lets you issue card to a loyalty customer or delink a card of a customer.


  * To issue an external or manually generated card, you need to first add the
  card using `/v2/card` API. 

  * To issue auto-generated card, you first need to issue the card using the
  `card/generate` API.
api:
  file: v2.json
  operationId: linkdelink-card
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
Use Case - loyalty cards of a customer across sources can be added or removed.

**Identifiers:** `mobile`, `email`, `externalId`, `wechat`, `martjackId`, `fbId`, `tmall_uname`, `cuid`, `ali_uname`, `jd_uname`, `vip_uname`, `line`.

Limitations of the customer identifier update API:

* Only identifiers can be updated using this API
* Identifiers should be unique within a source for single account sources and unique within an account for multiple account sources.
* If an identifier that you add already exists in a different source/account, the account will be automatically merged into the existing account maintaining different entries of each source. The new account will be a victim account and the existing account is a survivor account.

### Prerequisites

* Valid customer identifier(s) that you want to add to the existing account

<Callout icon="📘" theme="info">
  The new identifier that you want to update should be unique across the source (for sources with single accounts) and unique across the account (for sources with multiple accounts).
</Callout>

## Example request

```json Sample request Update Customer Identifier
curl --location 'https://eu.api.capillarytech.com/v2/customers/564854782/changeIdentifier?source=INSTORE' \
--header 'content-type: application/json' \
--header 'Authorization: Basic ' \
--header 'Cookie: _cfuvid=uvtbHlSAbCYurdYMb0psZmvW1nY0gy1KWoNRJIAVQWk-1757036882526-0.0.1.1-604800000' \
--data '{
    "add": [
        {
            "type": "facebook",
            "value": "FB11"
        }
    ]
    
    
    
    
    
    
}'
```

### Request Body Parameters

| Parameters     | Data Type | Description                                                                                                                                                                                                   |
| -------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `add`**        | Object    | New identifier to add to the existing account. Pass as key-value pair.<br />Example: `{ "type": "wechat", "value": "TS11" }`.                                                                                 |
| `remove`**     | Object    | Existing identifier to remove from the account.<br />Example: `{ "type": "email", "value": "tom.sawyer@capillarytech.com" }`.                                                                                 |
| `type`*        | Enum      | Type of identifier to add or remove. Supported values: `cardnumber`, `email`, `mobile`, `wechat`.                                                                                                             |
| `value`*       | String    | Value of the specified `type`. For `cardnumber`, enter a valid card number. For email, pass the email ID. [More info on adding cards here](https://docs.capillarytech.com/reference/add-card-details-single). |
| `seriesId`     | Integer   | Card series ID to which the card belongs (applicable when `type` is `cardnumber`).                                                                                                                            |
| `statusLabel`* | String    | New custom status label for the card. Must match a predefined status label. Required for card issuance.                                                                                                       |

<br />

## Example response 

```json Sample response Update Customer Identifier
{
    "createdId": 564854782,
    "warnings": []
}
```

<br />

# API Specific Error Code

| Error Code | Description                                  | Reason                                    |
| :--------- | :------------------------------------------- | :---------------------------------------- |
| 8015       | Customer not found for the given identifiers | No customer found with the given details. |