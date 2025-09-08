---
title: Get Org Labels
excerpt: Retrieves all customers labels created for that specific org.
api:
  file: v2.json
  operationId: get-org-labels
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
* Rate limiter controls the number of incoming and outgoing traffic of a network
* Authentication verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details

# API endpoint example

`https://eu.api.capillarytech.com/v2/organization/labels`

## Resource Information

| Field          | Value                  |
| -------------- | ---------------------- |
| URI            | v2/organization/labels |
| HTTP Method    | GET                    |
| Authentication | Required               |
| Rate Limited   | No                     |
| Batch Support  | No                     |

## Header Requests

| Header Key      | Required | Value Example                | Description                                              |
| --------------- | -------- | ---------------------------- | -------------------------------------------------------- |
| `Authorization` | Yes      | `Bearer <your_access_token>` | Authentication token (JWT/OAuth).                        |
| `Content-Type`  | No       | `application/json`           | Only needed for POST/PUT requests. Not required for GET. |
| `Accept`        | No       | `application/json`           | Expected response format (defaults to JSON if omitted).  |

## Response Fields

| Field         | Type    | Description                                                         |
| ------------- | ------- | ------------------------------------------------------------------- |
| data          | Array   | List of label objects.                                              |
| id            | Integer | Unique ID of the label.                                             |
| orgId         | Integer | ID of the organization.                                             |
| description   | String  | Description of the label.                                           |
| lastUpdatedBy | Integer | User ID of the last updater.                                        |
| name          | String  | Name of the label.                                                  |
| active        | Boolean | If `true` then label is active. If `false`then label is not active. |
| warnings      | Array   | Non-critical warnings (if any).                                     |
| errors        | Array   | Critical errors (if any).                                           |

```curl Response
{
    "data": [
        {
            "id": 20956,
            "orgId": 100737,
            "description": "High-value customers with premium status2",
            "lastUpdatedBy": 75155295,
            "name": "",
            "active": true
        },
        {
            "id": 20961,
            "orgId": 100737,
            "description": "121323232320",
            "lastUpdatedBy": 75155295,
            "name": "' OR '1'='1",
            "active": true
        },
        {
            "id": 20958,
            "orgId": 100737,
            "description": "Testing with wrong data type of name",
            "lastUpdatedBy": 75155295,
            "name": "1232121",
            "active": true
        },
        {
            "id": 20959,
            "orgId": 100737,
            "description": "12132323232",
            "lastUpdatedBy": 75155295,
            "name": "12321210000000000000000",
            "active": true
        },
        {
            "id": 20960,
            "orgId": 100737,
            "description": "121323232320",
            "lastUpdatedBy": 75155295,
            "name": "123212100000000000000000",
            "active": true
        },
        {
            "id": 21159,
            "orgId": 100737,
            "description": "Interested in gadgets and new technology",
            "lastUpdatedBy": 75161973,
            "name": "GadgetFreak",
            "active": true
        },
        {
            "id": 21152,
            "orgId": 100737,
            "description": "High-value customers with premium status",
            "lastUpdatedBy": 75155295,
            "name": "George",
            "active": true
        },
        {
            "id": 20941,
            "orgId": 100737,
            "description": "Recently acquired customers",
            "lastUpdatedBy": 75155295,
            "name": "New Customer",
            "active": true
        },
        {
            "id": 20944,
            "orgId": 100737,
            "description": "Recently acquired customers",
            "lastUpdatedBy": 75155295,
            "name": "Old Customer",
            "active": true
        },
        {
            "id": 20949,
            "orgId": 100737,
            "description": "Recently acquired customers1",
            "lastUpdatedBy": 75155295,
            "name": "Old1 Customer1",
            "active": true
        },
        {
            "id": 20952,
            "orgId": 100737,
            "description": "Recently acquired customers1 ^%$#%$#@^$#$%#^$#&##@#$@!@^#$%&*())))&^%$#@%^&*^%$#%^&*&^%$#%^TYUFDGHJFDRE%TYGHFDRETYGCFDSEW$%^TYGHFRE%$^&*UYIHJGYU&*(IOU*()IPOKLJHUY&^*UIJHKUIY&^%$ERDT%$E#WQEASRW#$@QWASD",
            "lastUpdatedBy": 75155295,
            "name": "Old2 Customer2",
            "active": true
        },
        {
            "id": 21158,
            "orgId": 100737,
            "description": "Customers whose purchase value is more than $4000",
            "lastUpdatedBy": 75161973,
            "name": "Premium",
            "active": true
        },
        {
            "id": 20942,
            "orgId": 100737,
            "description": "High-value customers with premium status",
            "lastUpdatedBy": 75155295,
            "name": "Premium Customer",
            "active": true
        },
        {
            "id": 17243,
            "orgId": 100737,
            "description": "real label",
            "lastUpdatedBy": 75152820,
            "name": "real",
            "active": true
        },
        {
            "id": 20957,
            "orgId": 100737,
            "description": "",
            "lastUpdatedBy": 75155295,
            "name": "Testing_UAT_@_123",
            "active": true
        },
        {
            "id": 20953,
            "orgId": 100737,
            "description": "High-value customers with premium status2",
            "lastUpdatedBy": 75155295,
            "name": "UAT-Testing",
            "active": true
        },
        {
            "id": 20955,
            "orgId": 100737,
            "lastUpdatedBy": 75155295,
            "name": "UAT-Testing1",
            "active": true
        },
        {
            "id": 20945,
            "orgId": 100737,
            "description": "High-value customers with premium status",
            "lastUpdatedBy": 75155295,
            "name": "Valuable Customer",
            "active": true
        },
        {
            "id": 20951,
            "orgId": 100737,
            "description": "High-value customers with premium status1 ^%$#%$#@^$#$%#^$#&##@#$@!@^#$%&*())))&^%$#@%^&*^%$#%^&*&^%$#%^TYUFDGHJFDRE%TYGHFDRETYGCFDSEW$%^TYGHFRE%$^&*UYIHJGYU&*(IOU*()IPOKLJHUY&^*UIJHKUIY&^%$ERDT%$E#WQEASRW#$@QWASD",
            "lastUpdatedBy": 75155295,
            "name": "Valuable Customer ^%$#%$#@^$#$%#^$#&##@#$@!@^#$%&*())))&^%$#@%^&*^%$#%^&*&^%$#%^TYUFDGHJFDRE%TYGHFDR",
            "active": true
        },
        {
            "id": 20948,
            "orgId": 100737,
            "description": "High-value customers with premium status1",
            "lastUpdatedBy": 75155295,
            "name": "Valuable Customer shvdshjdvshdvhjsdvjasajshjahadjgciuwyeguhbcwjhbjdshsbcjhwhewbehcbwjdhbckwjhekjhcbw",
            "active": true
        }
    ],
    "warnings": [],
    "errors": []
}
```