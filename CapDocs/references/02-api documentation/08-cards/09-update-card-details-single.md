---
title: Update Card Details (Single)
excerpt: >-
  Lets you update details of a card. You can update details such as card status
  label, and custom/extended field values.
api:
  file: v2.json
  operationId: update-card-status
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
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

```json Sample request to update card details
curl --location --request PUT 'https://eu.api.capillarytech.com/v2/card/?format=json' \
--header 'Content-Type: application/json' \
--header 'Authorization: Basic ' \
--header 'Cookie: _cfuvid=_9n1uFp4HB9xucoLvcFjfrzQp6JA_V3vkfsMPngxow0-1756990656515-0.0.1.1-604800000; _cfuvid=CF3VklKeKI9Y4al1zR_iIO2ZqcCM2TtBrk2cJpjoq7I-1756991743030-0.0.1.1-604800000' \
--data '{
    "cardNumber": "from1m1n100000000010too",
    "seriesId": 163,
    "statusLabel": "ACTIVE",
    "statusInfo": {
        "reason": "Changes made in card status"
    },
    "mappedEntity": {
        "type": "TILL",
        "value": "rutuja_capillary",
        "id": 75155373
    },
    "customFields": {
        "type": "City",
        "value": "Bangalore"
    },
    "extendedFields": {
        "card_requested_by": "rutuja_capillary"
    }
}'
```
```json Sample request for updating card status
curl --location --request PUT 'https://eu.api.capillarytech.com/v2/card/?format=json' \
--header 'Content-Type: application/json' \
--header 'Authorization: Basic =' \
--header 'Cookie: _cfuvid=CF3VklKeKI9Y4al1zR_iIO2ZqcCM2TtBrk2cJpjoq7I-1756991743030-0.0.1.1-604800000' \
--data '{
    "cardNumber":"from1m1n100000000010too",
    "statusLabel":"EXPIRED",
    "statusInfo":{
        "reason":"Example reason"
    }
}'
```

## Body parameters

<Table align={["left","left","left","left"]}>
  <thead>
    <tr>
      <th>
        Field
      </th>

      <th>
        Type
      </th>

      <th>
        Required
      </th>

      <th>
        Description
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        cardNumber
      </td>

      <td>
        String
      </td>

      <td>
        Yes
      </td>

      <td>
        Unique card number to be updated.
      </td>
    </tr>

    <tr>
      <td>
        seriesId
      </td>

      <td>
        Integer
      </td>

      <td>
        Optional
      </td>

      <td>
        Unique identifier of the card series.
      </td>
    </tr>

    <tr>
      <td>
        **statusLabel**
      </td>

      <td>
        String
      </td>

      <td>
        Optional
      </td>

      <td>
        New status label to set for the card.
        Allowed values: NOT_ISSUED, ACTIVE, SUSPENDED, DELETED, EXPIRED, ISSUED.
      </td>
    </tr>

    <tr>
      <td>
        **statusInfo**
      </td>

      <td>
        Object
      </td>

      <td>
        Optional
      </td>

      <td>
        Additional status details.
      </td>
    </tr>

    <tr>
      <td>
        **- reason**
      </td>

      <td>
        String
      </td>

      <td>
        Optional
      </td>

      <td>
        Reason for updating the card status.
      </td>
    </tr>

    <tr>
      <td>
        **mappedEntity**
      </td>

      <td>
        Object
      </td>

      <td>
        Optional
      </td>

      <td>
        Information about the entity mapped to the card.
      </td>
    </tr>

    <tr>
      <td>
        **- type**
      </td>

      <td>
        String
      </td>

      <td>
        Optional
      </td>

      <td>
        Type of entity (e.g., `TILL`).
      </td>
    </tr>

    <tr>
      <td>
        **- value**
      </td>

      <td>
        String
      </td>

      <td>
        Optional
      </td>

      <td>
        Name or value of the entity.
      </td>
    </tr>

    <tr>
      <td>
        **- id**
      </td>

      <td>
        Integer
      </td>

      <td>
        Optional
      </td>

      <td>
        Unique identifier of the entity.
      </td>
    </tr>

    <tr>
      <td>
        **customFields**
      </td>

      <td>
        Object
      </td>

      <td>
        Optional
      </td>

      <td>
        Custom fields associated with the card.
      </td>
    </tr>

    <tr>
      <td>
        **- type**
      </td>

      <td>
        String
      </td>

      <td>
        Optional
      </td>

      <td>
        Type of the custom field.
      </td>
    </tr>

    <tr>
      <td>
        **- value**
      </td>

      <td>
        String
      </td>

      <td>
        Optional
      </td>

      <td>
        Value of the custom field.
      </td>
    </tr>

    <tr>
      <td>
        **extendedFields**
      </td>

      <td>
        Object
      </td>

      <td>
        Optional
      </td>

      <td>
        Extended fields for additional metadata.
      </td>
    </tr>

    <tr>
      <td>
        **- card_requested_by**
      </td>

      <td>
        String
      </td>

      <td>
        Optional
      </td>

      <td>
        Value indicating who requested the card.
      </td>
    </tr>
  </tbody>
</Table>

## Example response

```json Sample response to update card details
{
    "cardId": 904250,
    "customerId": 564845113,
    "extendedFields": {
        "card_requested_by": "rutuja_capillary"
    },
    "customFields": {},
    "mappedEntity": {
        "type": "TILL",
        "value": "rutuja_capillary",
        "id": 75155373
    },
    "cardNumber": "from1m1n100000000010too",
    "seriesId": 163,
    "orgId": 100737,
    "entityId": 75184337,
    "statusLabel": "ISSUED",
    "statusLabelInfo": {
        "createdOn": "2024-12-17",
        "description": "default",
        "entityStatusId": 12,
        "id": 498,
        "isActive": true,
        "label": "ISSUED",
        "orgId": 100737,
        "updatedOn": "2025-06-19",
        "status": "ISSUED",
        "type": "CARD",
        "actions": {},
        "default": true
    },
    "statusInfo": {
        "reason": "Changes made in card status",
        "createdBy": 75184337,
        "actions": [],
        "entityId": 904250,
        "labelId": 498,
        "orgId": 100737,
        "entityType": "CARD",
        "label": "ISSUED",
        "prevLabel": "ACTIVE",
        "prevLabelId": 494
    },
    "activeAndDigital": false,
    "transactionNotAllowed": false,
    "warnings": []
}
```
```json Sample response update card status
{
    "cardId": 904250,
    "customerId": 564845113,
    "cardNumber": "from1m1n100000000010too",
    "orgId": 100737,
    "entityId": 75184337,
    "statusLabel": "EXPIRED",
    "statusLabelInfo": {
        "createdOn": "2024-12-17",
        "description": "default",
        "entityStatusId": 3,
        "id": 495,
        "isActive": true,
        "label": "EXPIRED",
        "orgId": 100737,
        "updatedOn": "2025-06-19",
        "status": "EXPIRED",
        "type": "CARD",
        "actions": {},
        "default": true
    },
    "statusInfo": {
        "reason": "Example reason",
        "createdBy": 75184337,
        "actions": [],
        "entityId": 904250,
        "labelId": 495,
        "orgId": 100737,
        "entityType": "CARD",
        "label": "EXPIRED",
        "prevLabel": "ISSUED",
        "prevLabelId": 498
    },
    "activeAndDigital": false,
    "transactionNotAllowed": false,
    "warnings": []
}
```

<br />

## Response Parameters

| Field                 | Type    | Description                                                |
| :-------------------- | :------ | :--------------------------------------------------------- |
| cardId                | integer | Unique identifier for the card.                            |
| customerId            | integer | Unique identifier for the customer linked to the card.     |
| extendedFields        | object  | Key-value pairs for additional custom fields.              |
| — card_requested_by   | string  | User who requested the card.                               |
| customFields          | object  | Additional custom field data as key-value pairs.           |
| mappedEntity          | object  | Information about the entity mapped to the card.           |
| — type                | string  | Type of the entity (e.g., `TILL`).                         |
| — value               | string  | Value of the mapped entity (e.g., till name).              |
| — id                  | integer | Unique identifier of the mapped entity.                    |
| cardNumber            | string  | Card number assigned.                                      |
| seriesId              | integer | Unique identifier for the card series.                     |
| orgId                 | integer | Organization identifier.                                   |
| entityId              | integer | Entity identifier linked to the card.                      |
| statusLabel           | string  | Status label of the card.                                  |
| statusLabelInfo       | object  | Information about the card's status label.                 |
| — createdOn           | string  | Date when the status label was created.                    |
| — description         | string  | Description of the status label.                           |
| — entityStatusId      | integer | Identifier for the entity status.                          |
| — id                  | integer | Unique identifier for the status label.                    |
| — isActive            | boolean | Indicates if the status label is active.                   |
| — label               | string  | Label description (e.g., `ACTIVE`).                        |
| — orgId               | integer | Organization identifier.                                   |
| — updatedOn           | string  | Date when the status label was last updated.               |
| — status              | string  | Status value (e.g., `ACTIVE`).                             |
| — type                | string  | Type of entity the status label belongs to (e.g., `CARD`). |
| — actions             | object  | Actions related to the status label.                       |
| — default             | boolean | Indicates if this is the default status label.             |
| statusInfo            | object  | Additional status-related information.                     |
| — reason              | string  | Reason for the current status change.                      |
| — actions             | array   | List of actions related to status changes.                 |
| transactionNotAllowed | boolean | Indicates if transactions are disallowed on this card.     |
| activeAndDigital      | boolean | Indicates if the card is both active and digital.          |
| warnings              | array   | List of warnings, if any.                                  |
| — status              | boolean | Warning status.                                            |
| — code                | integer | Warning code.                                              |
| — message             | string  | Warning message description.                               |