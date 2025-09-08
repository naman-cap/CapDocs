---
title: Cards
deprecated: false
hidden: false
metadata:
  robots: index
---
A card is a physical or digital identifier linked to a customer, enabling card-based loyalty memberships.

## Card updated event (cardUpdated)

Notifies when card details of a user is updated.

```json Enriched payload
{
  "eventId": "20384d37-3c03-4269-83c3-8f8585d8dd06",
  "eventType": "cardUpdated",
  "consumerGroupId": null,
  "actionType": "START ",
  "timeStamp": 1683874852870,
  "attributes": {
    "createdAt": 1683874852857,
    "data": {
      "cardNumber": "event0000000000010210card",
      "previousStatusLabel": "ACTIVE",
      "currentStatusLabel": " SUSPENDED",
      "currentExtendedFields": [
        {
          "name": "limit_set_by",
          "value": "name_event0000000000010210card"
        },
        {
          "name": "card_requested_by",
          "value": "ADMIN"
        },
        {
          "name": "card_balance ",
          "value": "10.9"
        }
      ],
      "previousExtendedFields": [
        
      ],
      "currentCustomFields": [
        {
          "name": "card_custom_fields_3",
          "value": "test3"
        },
        {
          "name": "card_custom_fields_1",
          "value": "test1"
        },
        {
          "name": "card_custom_fields_2",
          "value": "test2"
        }
      ],
      "previousCustomFields": [
        
      ]
    },
    "eventName": "cardUpdated",
    "refId": "150060_1482979",
    "apiRequestId": "db7191805a6375e51cb0443 19f378178",
    "orgId": 150060
  }
}

```
```json Raw payload
{
  "eventName": "cardUpdated",
  "eventLogId": 6458,
  "data": {
    "previousCustomFields": [
      {
        "name": "KZLBQSERTM",
        "value": "CFBPTMAY"
      }
    ],
    "currentCustomFields": [
      {
        "name": "MWKCGU",
        "value": "CWUBTMYDWN"
      }
    ],
    "previousExtendedFields": [
      {
        "name": "HFOOFT",
        "value": "VUR"
      }
    ],
    "currentStatusLabel": "TNXOGBH",
    "cardType": "LGLFS",
    "previousStatusLabel": "SIKDVVY",
    "currentExtendedFields": [
      {
        "name": "UOFCHD",
        "value": "JCZQ"
      }
    ],
    "cardNumber": "ILCBMPU",
    "previousStatusChangeReason": "OYUEWDVEP",
    "currentStatusChangeReason": "FLATTLJ"
  },
  "refId": "VYABNKNOKF",
  "loyaltyEventId": "ADKS",
  "apiRequestId": "WBKGXSLC",
  "eventId": "MMRNVYOFM",
  "createdAt": 8693,
  "traceAttributes": {
    "JRUCJT": "RWMBM",
    "JKMR": "IEFVM",
    "DOZRWY": "CZTMLVGLNM"
  },
  "orgId": 1668
}
```