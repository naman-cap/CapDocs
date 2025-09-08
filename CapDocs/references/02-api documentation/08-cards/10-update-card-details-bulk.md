---
title: Update Card Details (Bulk)
excerpt: >-
  Lets you update details of existing cards in bulk. You can update details such
  as card status label, and custom/extended field values.
api:
  file: v2.json
  operationId: update-card-details-bulk
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
## Example request

```curl Sample request
curl --location --request PUT 'https://eu.api.capillarytech.com/v2/card/bulk?format=json' \
--header 'Content-Type: application/json' \
--header 'Authorization: Basic ==' \
--header 'Cookie: _cfuvid=LvoffYWnKNroiGI4mcPHub.st6yK1dPDHOW3wI1lEls-1751478744816-0.0.1.1-604800000' \
--data '[
    {
        "cardNumber": "24234234324345345345",
        "statusLabel": "ACTIVE",
        "extendedFields": {
            "custom_card_name": "TOM",
            "vehicle_number": "KA01B2020"
        },
        "mappedEntity": {
            "type": "TILL",
            "value": "rutuja_capillary"
        },
        "customFields": {
            "vehicle_type": "Bike"
        }
    },
    {
        "cardNumber": "Test09000000000012end",
        "statusLabel": "ACTIVE",
        "extendedFields": {
            "custom_card_name": "SOM",
            "vehicle_number": "KA01B2021",
            "card_requested_by": "rutuja_capillary"
        },
        "mappedEntity": {
            "type": "TILL",
            "value": "rutuja_capillary"
        },
        "customFields": {
            "vehicle_type": "Car"
        }
    },
    {
        "cardNumber": "Test09000000000004end",
        "statusLabel": "SUSPENDED",
        "extendedFields": {
            "custom_card_name": "DOM",
            "vehicle_number": "KA01B2019"
        },
        "mappedEntity": {
            "type": "TILL",
            "value": "rutuja_capillary"
        },
        "customFields": {
            "vehicle_type": "Cycle"
        }
    }
]'
```

<br />

## Body parameters

| Field                   | Type   | Required | Description                                                                                                                    |
| ----------------------- | ------ | :------- | ------------------------------------------------------------------------------------------------------------------------------ |
| cardNumber              | String | Yes      | Unique card number to be updated.                                                                                              |
| **statusLabel**         | String | Optional | New status label to set for the card. **Allowed values:** `NOT_ISSUED`, `ACTIVE`, `ISSUED`, `SUSPENDED`, `DELETED`, `EXPIRED`. |
| **extendedFields**      | Object | Optional | Extended fields for additional metadata.                                                                                       |
| **- custom_card_name**  | String | Optional | Custom name to associate with the card.                                                                                        |
| **- vehicle_number**    | String | Optional | Vehicle number linked to the card.                                                                                             |
| **- card_requested_by** | String | Optional | Value indicating who requested the card.                                                                                       |
| **mappedEntity**        | Object | Optional | Information about the entity mapped to the card.                                                                               |
| **- type**              | String | Optional | Type of entity (e.g., `TILL`).                                                                                                 |
| **- value**             | String | Optional | Name or value of the entity.                                                                                                   |
| **customFields**        | Object | Optional | Custom fields associated with the card.                                                                                        |
| **- vehicle_type**      | String | Optional | Type of vehicle linked to the card (e.g., `Car`, `Bike`, `Cycle`).                                                             |

## Example response

```json Sample response
{
    "response": [
        {
            "entityId": {
                "extendedFields": {
                    "custom_card_name": "TOM",
                    "vehicle_number": "KA01B2020"
                },
                "customFields": {
                    "vehicle_type": "Bike"
                },
                "mappedEntity": {
                    "type": "TILL",
                    "value": "rutuja_capillary"
                },
                "cardNumber": "24234234324345345345",
                "orgId": 100737,
                "entityId": 75184337,
                "statusLabel": "ACTIVE",
                "transactionNotAllowed": false,
                "activeAndDigital": false
            },
            "errors": [
                {
                    "status": false,
                    "code": 3010,
                    "message": "Card number does not exists"
                }
            ],
            "warnings": []
        },
        {
            "entityId": {
                "cardId": 906641,
                "customerId": 564845113,
                "extendedFields": {
                    "card_requested_by": "rutuja_capillary",
                    "custom_card_name": "SOM",
                    "vehicle_number": "KA01B2021"
                },
                "customFields": {
                    "vehicle_type": "Car"
                },
                "mappedEntity": {
                    "type": "TILL",
                    "value": "rutuja_capillary",
                    "id": 75155373
                },
                "cardNumber": "Test09000000000012end",
                "orgId": 100737,
                "entityId": 75184337,
                "statusLabelInfo": {
                    "createdOn": "2024-12-17",
                    "description": "default",
                    "entityStatusId": 2,
                    "id": 494,
                    "isActive": true,
                    "label": "ACTIVE",
                    "orgId": 100737,
                    "updatedOn": "2025-06-19",
                    "status": "ACTIVE",
                    "type": "CARD",
                    "actions": {},
                    "default": true
                },
                "transactionNotAllowed": false,
                "activeAndDigital": false
            },
            "errors": [],
            "warnings": [
                {
                    "status": false,
                    "code": 3039,
                    "message": "No update in status label"
                }
            ]
        },
        {
            "entityId": {
                "cardId": 897683,
                "customerId": 0,
                "extendedFields": {
                    "custom_card_name": "DOM",
                    "vehicle_number": "KA01B2019"
                },
                "customFields": {
                    "vehicle_type": "Cycle"
                },
                "mappedEntity": {
                    "type": "TILL",
                    "value": "rutuja_capillary"
                },
                "cardNumber": "Test09000000000004end",
                "orgId": 100737,
                "entityId": 75184337,
                "statusLabel": "SUSPENDED",
                "statusLabelInfo": {
                    "createdOn": "2024-12-17",
                    "description": "default",
                    "entityStatusId": 4,
                    "id": 496,
                    "isActive": true,
                    "label": "SUSPENDED",
                    "orgId": 100737,
                    "updatedOn": "2025-06-19",
                    "status": "SUSPENDED",
                    "type": "CARD",
                    "actions": {},
                    "default": true
                },
                "transactionNotAllowed": false,
                "activeAndDigital": false
            },
            "errors": [
                {
                    "status": false,
                    "code": 3038,
                    "message": "Card status can not be changed from NOT_ISSUED to SUSPENDED"
                }
            ],
            "warnings": []
        }
    ],
    "totalCount": 3,
    "failureCount": 2
}
```

<br />

# Response Body Parameters

| Parameter (parameters marked by * are mandatory) | DataType | Description                                              |
| :----------------------------------------------- | :------- | :------------------------------------------------------- |
| response*                                        | array    | List of card update responses.                           |
| — entityId                                       | object   | Card details object.                                     |
| — — cardId                                       | int      | Unique identifier for the card.                          |
| — — customerId                                   | int      | Unique identifier for the customer linked to the card.   |
| — — extendedFields                               | object   | Additional key-value fields.                             |
| — — — custom_card_name                           | string   | Custom card name.                                        |
| — — — vehicle_number                             | string   | Vehicle number linked to the card.                       |
| — — customFields                                 | object   | Custom fields as key-value pairs.                        |
| — — — vehicle_type                               | string   | Type of vehicle (e.g., Car, Bike, Cycle).                |
| — — mappedEntity                                 | object   | Information about the mapped entity.                     |
| — — — type                                       | string   | Type of entity (e.g., `TILL`).                           |
| — — — value                                      | string   | Value of the mapped entity.                              |
| — — — id                                         | int      | Unique identifier for the mapped entity.                 |
| — — cardNumber                                   | string   | Card number.                                             |
| — — orgId                                        | int      | Unique identifier for the organization.                  |
| — — entityId                                     | int      | Unique identifier linked to the card.                    |
| — — statusLabel                                  | string   | Status label of the card (e.g., `ACTIVE`, `SUSPENDED`).  |
| — — statusLabelInfo                              | object   | Detailed information about the status label.             |
| — — — createdOn                                  | string   | Date when the status label was created.                  |
| — — — description                                | string   | Description of the status label.                         |
| — — — entityStatusId                             | int      | Unique identifier for entity status.                     |
| — — — id                                         | int      | Unique identifier for the status label.                  |
| — — — isActive                                   | boolean  | Indicates whether the status label is active.            |
| — — — label                                      | string   | Label description.                                       |
| — — — orgId                                      | int      | Unique identifier for the organization.                  |
| — — — updatedOn                                  | string   | Date when the status label was last updated.             |
| — — — status                                     | string   | Status value.                                            |
| — — — type                                       | string   | Type of entity status label (e.g., `CARD`).              |
| — — — actions                                    | object   | Actions related to the status label.                     |
| — — — default                                    | boolean  | Indicates whether this is the default label.             |
| — — activeAndDigital                             | boolean  | Indicates whether the card is active and digital.        |
| — — transactionNotAllowed                        | boolean  | Indicates whether transactions are allowed on this card. |
| errors                                           | array    | List of error objects related to the update.             |
| — status                                         | boolean  | Status of the error.                                     |
| — message                                        | string   | Description of the error.                                |
| — code                                           | int      | Unique identifier for the error code.                    |
| warnings                                         | array    | List of warnings related to the update.                  |
| — status                                         | boolean  | Status of the warning.                                   |
| — message                                        | string   | Description of the warning.                              |
| — code                                           | int      | Unique identifier for the warning code.                  |
| totalCount*                                      | int      | Total number of processed card records.                  |
| failureCount                                     | int      | Number of failed card updates.                           |
