---
title: Request Updates
deprecated: false
hidden: false
metadata:
  robots: index
---
A request update refers to the process of changing the status or details of an existing request within the platform.

## Transaction request update (requestUpdated)

Notifies when a request is updated, such as a change in the status of a transaction request to "rejected" or "approved."

```json Enriched payload
{
  "eventId": "0f5d96e4-f6ff-4a8a-8522-083dc0d2d0e5",
  "eventType": "requestUpdated",
  "consumerGroupId": null,
  "actionType": "START",
  "timeStamp": 1683879070938,
  "attributes": {
    "createdAt": 1683879070934,
    "data": {
      "requestType": "TRANSACTION",
      "requestBaseType": "REGULAR_TXN_ADD",
      "requestTrackingId": 10585,
      "status": "REJECTED",
      "comments": "Receipt is missing information",
      "updatedAt": 1683879070915,
      "updatedBy": {
        "user": {
          "username": "1675438912_"
        },
        "id": 441
      },
      "customerIdentifiers": {
        "customerId": 16971,
        "instore": {
          "email": "demery6122@aol.com",
          "externalId": "602f0c3c-e8e3-4b7f-9b18-0b7f3448a418"
        }
      },
      "updatedFields": [
        {
          "fieldName": "status",
          "previousVal ue": "PENDING",
          "currentValue": "REJECTED"
        }
      ],
      "associatedEntityFields": [
        
      ]
    },
    "eventName": "requestUpdated",
    "refId": "2000003_10585",
    "apiRequestId": "eb93e66d-5efa-44f7-9f47-ffcd1 a91dd78",
    "orgId": 2000003
  }
}
```
```json Raw payload
{
  "eventName": "requestUpdated",
  "eventLogId": 8785,
  "data": {
    "requestTrackingId": 3613,
    "associatedEntityFields": [
      {
        "fieldName": "ZWYHULMNXL",
        "fieldValue": "SFBLRICW"
      }
    ],
    "requestType": "PWFTSLTOU",
    "customerIdentifiers": {
      "loyaltyType": "ZFVK",
      "ecommerce": {
        "accounts": [
          {
            "accountId": "INST",
            "identifiers": [
              {
                "identifierType": "BIZNAFBAS",
                "identifierValue": "ZTGPTNUN"
              }
            ]
          }
        ]
      },
      "lastName": "PNVAWWKEDV",
      "facebook": {
        "accounts": [
          {
            "accountId": "UIHQLAKEB",
            "identifiers": [
              {
                "identifierType": "HCJOROYF",
                "identifierValue": "RAYNAEZX"
              }
            ]
          }
        ]
      },
      "wechat": {
        "accounts": [
          {
            "accountId": "KZSMDQVY",
            "identifiers": [
              {
                "identifierType": "TLQMTKOK",
                "identifierValue": "XWCH"
              }
            ]
          }
        ]
      },
      "tmall": {
        "accounts": [
          {
            "accountId": "DKTCD",
            "identifiers": [
              {
                "identifierType": "BIZMN",
                "identifierValue": "MPZYOD"
              }
            ]
          }
        ]
      },
      "toabao": {
        "accounts": [
          {
            "accountId": "OHIYUQGTH",
            "identifiers": [
              {
                "identifierType": "FILE",
                "identifierValue": "VZA"
              }
            ]
          }
        ]
      },
      "web_engage": {
        "accounts": [
          {
            "accountId": "NTCNA",
            "identifiers": [
              {
                "identifierType": "DPPU",
                "identifierValue": "NAWPKPBRCQ"
              }
            ]
          }
        ]
      },
      "line": {
        "accounts": [
          {
            "accountId": "PQSAIQB",
            "identifiers": [
              {
                "identifierType": "DCICBMAZY",
                "identifierValue": "JJRPINK"
              }
            ]
          }
        ]
      },
      "martjack": {
        "accounts": [
          {
            "accountId": "YUCRJUTJ",
            "identifiers": [
              {
                "identifierType": "ATVIBSZ",
                "identifierValue": "SMFFKTYF"
              }
            ]
          }
        ]
      },
      "customerId": 829,
      "jd": {
        "accounts": [
          {
            "accountId": "MPYAU",
            "identifiers": [
              {
                "identifierType": "MXIKPS",
                "identifierValue": "SYGGCVGCJ"
              }
            ]
          }
        ]
      },
      "website": {
        "accounts": [
          {
            "accountId": "TUTBVZ",
            "identifiers": [
              {
                "identifierType": "QWCAZLG",
                "identifierValue": "MFQHEDLR"
              }
            ]
          }
        ]
      },
      "firstName": "LQOSB",
      "instore": {
        "id": 5053,
        "mobile": "XOXDOGH",
        "email": "FOY",
        "externalId": "VLNMWONMYQ",
        "cardnumber": "CKMRU",
        "cardexternalid": "CCNJR",
        "cardNumbers": [
          "RVLHWWZEFO"
        ]
      }
    },
    "updatedAt": 2808,
    "updatedBy": {
      "user": {
        "username": "PJUTA"
      },
      "id": 264,
      "till": {
        "code": "MIVSJ",
        "name": "FXPJFKWJW"
      },
      "store": {
        "code": "JTKVGHWDC",
        "name": "CSFFRSHU",
        "externalId": "MPQNHOC",
        "externalId1": "FMFK",
        "externalId2": "ERLIDTEWWG"
      }
    },
    "status": "DUZDHO",
    "comments": "TEGGJG",
    "updatedFields": [
      {
        "fieldName": "JTLXCCDAXL",
        "previousValue": "YJUDJG",
        "currentValue": "LQPQLRCM"
      }
    ],
    "requestBaseType": "BIBDVREY"
  },
  "refId": "AVTE",
  "loyaltyEventId": "HFN",
  "apiRequestId": "JPIRKHLB",
  "eventId": "VJCSAIKYN",
  "createdAt": 3805,
  "traceAttributes": {
    "EXD": "JPVLAH",
    "BTYLWIZJ": "OAJN",
    "MKV": "XKY",
    "CWGUCGGZ": "XYE",
    "XMCYZODZHI": "CNXNDOEKI",
    "LFYAQGJQUP": "CGZVR"
  },
  "orgId": 9718
}
```

## PII deletion request update

Notifies when a user's personal identifiable information (PII) delete request has been updated.

Scenario 1: Change in the status of the request to "rejected" or "approved."

```json Enriched payload
"eventName": "requestUpdated",
	"eventId": "48b6ad35-6232-45bf-bf41-deb77065b9e3",
	"orgId": 781,
	"createdAt": 1663690031667,
	"requestTrackingId": "7676878",
	"requestType": "CUSTOMER",
	"requestBaseType": "DELETE",
	"comments": "any request related comments",
	"status": "APPROVED",
	"customerId": 4545332,
	"data": {
		"requestId": "id",
		"createdBy": {
			"id": 15000375,
			"till": {
				"code": "kn.003",
				"name": "kn.003"
			},
			"store": {
				"code": "sskn1111",
				"name": "KNIGHT_STORE_QA",
				"externalId": "er4543",
				"externalId1": "fef343",
				"externalId2": "fef3434"
			}
		},
		"updatedFields": [{
			"fieldName": "status",
			"previousValue": "PENDING",
			"currentValue": "APPROVED"
		}]
	}
}

```

Scenario 2: Change in the status of the request from "Approved" to "Success" after successful deletion.

```json Enriched payload
{
    "eventName": "requestUpdated",
    "eventId": "0ffb46d7-704c-4664-b815-24d4bb4ec51a",
    "orgId": 51250,
    "refId": "51250_1740972",
    "apiRequestId": "f4d7d2eca1ddcc68053bf19d6caa3dea",
    "createdAt": 1736506861388,
    "data": {
        "requestType": "CUSTOMER",
        "requestBaseType": "DELETE",
        "requestTrackingId": 1740972,
        "status": "SUCCESS",
        "comments": "APP DELETION",
        "updatedAt": 1736506861276,
        "updatedBy": {
            "id": 50682616,
            "till": {
                "code": "ind.1",
                "name": "ind.1"
            },
            "store": {
                "code": "abohar01",
                "name": "The Abohar Store",
                "externalId": "",
                "externalId1": "",
                "externalId2": ""
            }
        },
        "customerIdentifiers": {
            "customerId": 387586428,
            "instore": {
                "mobile": "917464736933",
                "externalId": "TestEXRRR",
                "cardNumbers": []
            }
        },
        "updatedFields": [
            {
                "fieldName": "status",
                "previousValue": "APPROVED",
                "currentValue": "SUCCESS"
            }
        ],
        "associatedEntityFields": []
    },
    "loyaltyEventId": null
}
```