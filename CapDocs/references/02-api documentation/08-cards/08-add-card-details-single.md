---
title: Add Card Number to a Card Series
excerpt: >-
  Lets you add a new card number to a card series and provide card details. 


  Once the card is added, you can issue it to a customer using customers
  /changeIdentifier API.
api:
  file: v2.json
  operationId: add-card-number-to-a-card-series
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

```json Sample request
curl --location --globoff --request PUT '{{HostURL}}/v2/card/bulk?format=json' \
--header 'Content-Type: application/json' \
--header 'Authorization: Basic ==' \
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

## Example response

```
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
                "activeAndDigital": false,
                "transactionNotAllowed": false
            },
            "errors": [
                {
                    "status": false,
                    "message": "Card number does not exists",
                    "code": 3010
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
                "activeAndDigital": false,
                "transactionNotAllowed": false
            },
            "errors": [],
            "warnings": [
                {
                    "status": false,
                    "message": "No update in status label",
                    "code": 3039
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
                "activeAndDigital": false,
                "transactionNotAllowed": false
            },
            "errors": [
                {
                    "status": false,
                    "message": "Card status can not be changed from NOT_ISSUED to SUSPENDED",
                    "code": 3038
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
