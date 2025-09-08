---
title: Loyalty Promotions and Cart Promotions
deprecated: false
hidden: false
metadata:
  robots: index
---
# Loyalty Promotions

A loyalty promotion is a special program within a loyalty program that offers customers additional rewards—such as extra points, coupons, or benefits—on top of the standard loyalty program.

## Creating loyalty promotion (promotionCreated)

Notifies when a loyalty promotion is created. An event notification is triggered when a loyalty promotion is created. These event notifications are triggered when a loyalty promotion is created using the UI and the create loyalty promotion API.

```json Enriched payload
{
  "eventName": "promotionCreated",
  "eventId": "8d0bf8c4-d3a8-470f-ae50-083938ff9c80",
  "eventLogId": -1,
  "orgId": 51135,
  "refId": "51135_ec1d48406b1f8c5de151065386521bb2",
  "apiRequestId": "ec1d48406b1f8c5de151065386521bb2",
  "createdAt": 1738242661581,
  "data": {
    "loyaltyProgramId": 2568,
    "promotionId": 2000060,
    "promotionName": "testPromotinfoEN",
    "promotionStartDate": 1736965800000,
    "promotionEndDate": 1740076199999,
    "externalIdentifier": "",
    "type": "CUSTOMER",
    "status": "INACTIVE",
    "sourceType": "UI",
    "description": "cs",
    "customFields": [],
    "linkedEventId": 25,
    "linkedEventName": "TargetCompleted",
    "createdOn": 1738242661418,
    "updatedOn": 904788626831872,
    "updatedBy": 50665423,
    "loyaltyEventId": "ec1d48406b1f8c5de151065386521bb2"
  }
}

```
```json Raw payload
{
  "eventName": "promotionCreated",
  "eventLogId": 6729,
  "data": {
    "linkedTargetGroupVsTargetRuleIdMap": {
      "FUO": [
        5182
      ],
      "VKBH": [
        9029
      ],
      "NJIOP": [
        6203
      ],
      "BNLTFAIFQT": [
        5533
      ],
      "OXSCV": [
        503
      ],
      "RGRF": [
        5275
      ]
    },
    "promotionEndDate": 1263,
    "createdOn": 1236,
    "customFields": [
      {
        "key": "QGJQBLS",
        "value": "IQCMF"
      }
    ],
    "linkedEventName": "SYLMEYO",
    "promotionStartDate": 3882,
    "promotionName": "KKLFBFTAX",
    "updatedBy": 3863,
    "status": "HLVOLF",
    "externalIdentifier": "BBATA",
    "sourceType": "ZCUECTV",
    "triggeringActivity": {
      "name": "EHUFVMRKPB",
      "identifiers": [
        {
          "key": "HLTO",
          "value": "JXLMOIFUKN"
        }
      ],
      "enteredBy": {
        "id": 9527,
        "till": {
          "code": "BVYSKZKQG",
          "name": "BMHA"
        },
        "store": {
          "code": "ULYQT",
          "name": "FLT",
          "externalId": "QOYSOKMPY",
          "externalId1": "OBD",
          "externalId2": "LDZ"
        }
      },
      "entityInformation": {
        "entityType": "WPGRU",
        "entityId": 1189
      },
      "additionalAttributes": [
        {
          "key": "HCENVTNV",
          "value": "YNFDA"
        }
      ]
    },
    "loyaltyProgramId": 3690,
    "type": "ZFEUOAFWGA",
    "updatedOn": 7557,
    "linkedEventId": "KRYSNUUM",
    "description": "GUWJSC",
    "promotionId": 938
  },
  "refId": "BLAJ",
  "loyaltyEventId": "RBKMAY",
  "apiRequestId": "JGLJIQ",
  "eventId": "QKK",
  "createdAt": 7833,
  "traceAttributes": {
    "DKFUOW": "LPHCLVHUW",
    "HJFGUEG": "ONCAYCR",
    "XCJXNVFLCC": "YTXJIJHPW",
    "KBFIBZT": "KFFG"
  },
  "orgId": 9608
}
```

| Parameter           | Data Type | Description                                                 |
| ------------------- | --------- | ----------------------------------------------------------- |
| eventName           | String    | Name of the event notification                              |
| eventId             | String    | Unique ID generated when the event is triggered             |
| eventLogId          | Integer   | Event log ID (initially -1, updated post processing)        |
| orgId               | Integer   | Organisation ID where the event occurred                    |
| refId               | String    | Internal reference ID combining org ID and loyalty event ID |
| apiRequestId        | String    | Unique identifier for the API request                       |
| createdAt           | Long      | Epoch timestamp when the event was recorded                 |
| data                | Object    | Object containing promotion details                         |
| -loyaltyProgramId   | Integer   | Associated loyalty program ID                               |
| -promotionId        | Integer   | Unique ID for the promotion                                 |
| -promotionName      | String    | Name of the promotion                                       |
| -promotionStartDate | Long      | Promotion start time (epoch)                                |
| -promotionEndDate   | Long      | Promotion end time (epoch)                                  |
| -externalIdentifier | String    | External reference ID (if any)                              |
| -type               | ENUM      | Type of promotion: `BILL`, `LINEITEM`, `CUSTOMER`, `RETURN` |
| -status             | ENUM      | `ACTIVE` or `INACTIVE`                                      |
| -sourceType         | String    | Origin of the promotion: `USER_CREATED`, `UI`               |
| -description        | String    | Description of the promotion                                |
| -customFields       | Array     | Optional custom field data                                  |
| -linkedEventId      | Integer   | ID of the associated triggering event                       |
| -linkedEventName    | String    | Name of the triggering event                                |
| -createdOn          | Long      | Epoch timestamp when created                                |
| -updatedOn          | Long      | Epoch timestamp when updated                                |
| -updatedBy          | Integer   | ID of the user who last updated it                          |
| -loyaltyEventId     | String    | ID of the loyalty event tied to this promotion              |

## Updating a loyalty promotion (promotionUpdated)

Notifies when loyalty promotion metadata is updated. An event notification is triggered when a loyalty promotion is updated.

```json Enriched payload
{
  "eventName": "promotionUpdated",
  "eventId": "8d0bf8c4-d3a8-470f-ae50-083938ff9c80",
  "eventLogId": -1,
  "orgId": 51135,
  "refId": "51135_ec1d48406b1f8c5de151065386521bb2",
  "apiRequestId": "ec1d48406b1f8c5de151065386521bb2",
  "createdAt": 1738242661581,
  "data": {
    "loyaltyProgramId": 2568,
    "promotionId": 2000060,
    "promotionName": "testPromotinfoEN",
    "promotionStartDate": 1736965800000,
    "promotionEndDate": 1740076199999,
    "externalIdentifier": "",
    "type": "CUSTOMER",
    "status": "INACTIVE",
    "sourceType": "UI",
    "description": "cs",
    "customFields": [],
    "linkedEventId": 25,
    "linkedEventName": "TargetCompleted",
    "createdOn": 1738242661418,
    "updatedOn": 904788626831872,
    "updatedBy": 50665423,
    "loyaltyEventId": "ec1d48406b1f8c5de151065386521bb2"
  }
}

```
```json Raw payload
{
  "eventName": "promotionUpdated",
  "eventLogId": 8272,
  "data": {
    "linkedTargetGroupVsTargetRuleIdMap": {
      "PWVT": [
        6928
      ],
      "NYA": [
        8674
      ]
    },
    "promotionEndDate": 1702,
    "createdOn": 8067,
    "customFields": [
      {
        "key": "HZV",
        "value": "DYGFKBRJ"
      }
    ],
    "linkedEventName": "RXKV",
    "promotionStartDate": 401,
    "promotionName": "GNI",
    "updatedBy": 6966,
    "status": "ZSZI",
    "externalIdentifier": "DXHUKYLIOJ",
    "sourceType": "XUMANMXZI",
    "triggeringActivity": {
      "name": "ROTJQ",
      "identifiers": [
        {
          "key": "AEC",
          "value": "TUYFVDVEI"
        }
      ],
      "enteredBy": {
        "id": 6718,
        "till": {
          "code": "SKWKPY",
          "name": "ENFYRE"
        },
        "store": {
          "code": "JHDZLVRYX",
          "name": "HJNYMS",
          "externalId": "XTIX",
          "externalId1": "FKPFUOKA",
          "externalId2": "ICIXWYVK"
        }
      },
      "entityInformation": {
        "entityType": "IMJCF",
        "entityId": 6844
      },
      "additionalAttributes": [
        {
          "key": "IUYIMPZFLH",
          "value": "PPNZQCVPSU"
        }
      ]
    },
    "loyaltyProgramId": 5448,
    "type": "WFM",
    "updatedOn": 6611,
    "linkedEventId": "KRSUBFV",
    "description": "BWZYWQ",
    "promotionId": 4991
  },
  "refId": "GZPQNYCWIN",
  "loyaltyEventId": "AIMBLWEVNA",
  "apiRequestId": "WRXWKD",
  "eventId": "WYVKSVHOF",
  "createdAt": 1593,
  "traceAttributes": {
    "PKWHYK": "HGJCLO",
    "ETFFTLGCM": "OYOQ",
    "VLDJUVJH": "OJZHRKPDL"
  },
  "orgId": 9600
}
```

| Parameter           | Data Type | Description                                                 |
| ------------------- | --------- | ----------------------------------------------------------- |
| eventName           | String    | Name of the event notification                              |
| eventId             | String    | Unique ID generated when the event is triggered             |
| eventLogId          | Integer   | Event log ID (initially -1, updated post processing)        |
| orgId               | Integer   | Organisation ID where the event occurred                    |
| refId               | String    | Internal reference ID combining org ID and loyalty event ID |
| apiRequestId        | String    | Unique identifier for the API request                       |
| createdAt           | Long      | Epoch timestamp when the event was recorded                 |
| data                | Object    | Object containing promotion details                         |
| -loyaltyProgramId   | Integer   | Associated loyalty program ID                               |
| -promotionId        | Integer   | Unique ID for the promotion                                 |
| -promotionName      | String    | Name of the promotion                                       |
| -promotionStartDate | Long      | Promotion start time (epoch)                                |
| -promotionEndDate   | Long      | Promotion end time (epoch)                                  |
| -externalIdentifier | String    | External reference ID (if any)                              |
| -type               | ENUM      | Type of promotion: `BILL`, `LINEITEM`, `CUSTOMER`, `RETURN` |
| -status             | ENUM      | `ACTIVE` or `INACTIVE`                                      |
| -sourceType         | String    | Origin of the promotion: `USER_CREATED`, `UI`               |
| -description        | String    | Description of the promotion                                |
| -customFields       | Array     | Optional custom field data                                  |
| -linkedEventId      | Integer   | ID of the associated triggering event                       |
| -linkedEventName    | String    | Name of the triggering event                                |
| -createdOn          | Long      | Epoch timestamp when created                                |
| -updatedOn          | Long      | Epoch timestamp when updated                                |
| -updatedBy          | Integer   | ID of the user who last updated it                          |
| -loyaltyEventId     | String    | ID of the loyalty event tied to this promotion              |

## Issuing a loyalty promotion (promotionIssued)

Notifies when a loyalty promotion is issued to a customer or user group. An event notification is triggered when a loyalty promotion is issued.

```json Enriched payload
{
  "eventName": "promotionIssued",
  "data": {
    "customerIdentifiers": {
      "customerId": 423817587,
      "instore": {
        "mobile": "919191920700",
        "email": "user700@gmail.com",
        "cardNumbers": []
      }
    },
    "loyaltyProgramId": 2751,
    "promotionId": 200281,
    "promotionName": "Promo_L",
    "promotionStartDate": "2024-07-01",
    "promotionEndDate": "2024-08-31",
    "promotionIssuedDate": "2024-08-06",
    "promotionIssuedExpiryDate": "2024-08-31",
    "promotionDescription": "Promo_L",
    "pointsOfferType": "GENERIC",
    "customFields": [],
    "issueRestrictions": [
      {
        "limitOn": "CUSTOMER",
        "kpi": "MAX_NUMBER_OF_ISSUALS_PER_CUSTOMER",
        "maxLimit": 100
      }
    ],
    "redemptionRestrictions": [
      {
        "limitOn": "",
        "kpi": "MAX_REDEMPTIONS_PER_EARN_PER_CUSTOMER",
        "restrictionType": "NON_PERIOD_BASED",
        "maxLimit": 3
      }
    ],
    "issualId": 229
  },
  "orgId": 4000070,
  "refId": "4000070_aB8DFsImX7",
  "apiRequestId": "a4849fdcaffd0df64c2d6acbc91ec49b",
  "createdAt": 1722943950142
}

```
```json Raw payload
{
  "eventName": "promotionIssued",
  "eventLogId": 4617,
  "data": {
    "issueRestrictions": [
      {
        "limitOn": "AKQ",
        "kpi": "REBUACDCVD",
        "maxLimit": 3638
      }
    ],
    "linkedTargetGroupVsTargetRuleIdMap": {
      "5444": [
        7709
      ],
      "7061": [
        1678
      ],
      "8368": [
        4547
      ]
    },
    "promotionEndDate": "OPCVSJIW",
    "customFields": [
      {
        "key": "UKHKRYFP",
        "value": "MZAI"
      }
    ],
    "customerIdentifiers": {
      "loyaltyType": "ZZTYMUC",
      "ecommerce": {
        "accounts": [
          {
            "accountId": "RPIA",
            "identifiers": [
              {
                "identifierType": "PNEX",
                "identifierValue": "ZXCXQGAJTV"
              }
            ]
          }
        ]
      },
      "lastName": "ADWWGKBT",
      "facebook": {
        "accounts": [
          {
            "accountId": "LABO",
            "identifiers": [
              {
                "identifierType": "ANVTFV",
                "identifierValue": "AEIMM"
              }
            ]
          }
        ]
      },
      "wechat": {
        "accounts": [
          {
            "accountId": "RQX",
            "identifiers": [
              {
                "identifierType": "FQKKSS",
                "identifierValue": "BCMSVD"
              }
            ]
          }
        ]
      },
      "tmall": {
        "accounts": [
          {
            "accountId": "WVPMUGMXDY",
            "identifiers": [
              {
                "identifierType": "RZWHRWFUR",
                "identifierValue": "PKYXH"
              }
            ]
          }
        ]
      },
      "toabao": {
        "accounts": [
          {
            "accountId": "NVEJI",
            "identifiers": [
              {
                "identifierType": "XXUGCLJKR",
                "identifierValue": "ELVJVDT"
              }
            ]
          }
        ]
      },
      "web_engage": {
        "accounts": [
          {
            "accountId": "YKPBKEH",
            "identifiers": [
              {
                "identifierType": "QELX",
                "identifierValue": "UOY"
              }
            ]
          }
        ]
      },
      "line": {
        "accounts": [
          {
            "accountId": "OFFD",
            "identifiers": [
              {
                "identifierType": "UNLGFMEU",
                "identifierValue": "JOKSJYB"
              }
            ]
          }
        ]
      },
      "martjack": {
        "accounts": [
          {
            "accountId": "HPCTXRNY",
            "identifiers": [
              {
                "identifierType": "EZEHVDB",
                "identifierValue": "CYAP"
              }
            ]
          }
        ]
      },
      "customerId": 7381,
      "jd": {
        "accounts": [
          {
            "accountId": "AZDFSWDY",
            "identifiers": [
              {
                "identifierType": "WXDWCCGCV",
                "identifierValue": "IWSGRX"
              }
            ]
          }
        ]
      },
      "website": {
        "accounts": [
          {
            "accountId": "VIG",
            "identifiers": [
              {
                "identifierType": "CUQHVGFQ",
                "identifierValue": "RMPQ"
              }
            ]
          }
        ]
      },
      "firstName": "YIKEO",
      "instore": {
        "id": 3598,
        "mobile": "LJHL",
        "email": "ZRNCR",
        "externalId": "WRRZFTKP",
        "cardnumber": "DWPGEX",
        "cardexternalid": "RTEQKDJV",
        "cardNumbers": [
          "BRMAJ"
        ]
      }
    },
    "promotionStartDate": "VUSA",
    "promotionName": "KICDSJ",
    "promotionIssuedExpiryDate": "OPZNHZE",
    "issualId": 3533,
    "redemptionRestrictions": [
      {
        "limitOn": "EBKGCNVTO",
        "kpi": "YKVERBVQ",
        "restrictionType": "ZHHWFKA",
        "periodType": "IGKLG",
        "periodUnit": "SES",
        "maxLimit": 5310,
        "restrictionRefreshDate": "HTANXCMTI"
      }
    ],
    "pointsOfferType": "RQCID",
    "promotionEarnSource": "VNBHSYF",
    "triggeringActivity": {
      "name": "ZBDLETWOFC",
      "identifiers": [
        {
          "key": "LNLHQ",
          "value": "VZZKZZ"
        }
      ],
      "enteredBy": {
        "id": 2338,
        "till": {
          "code": "CGLKV",
          "name": "IMKOSLOT"
        },
        "store": {
          "code": "VHFHBJCCPQ",
          "name": "VEMKEM",
          "externalId": "SSQTKMNP",
          "externalId1": "ZJZERVRL",
          "externalId2": "ATKD"
        }
      },
      "entityInformation": {
        "entityType": "AOI",
        "entityId": 8447
      },
      "additionalAttributes": [
        {
          "key": "VCUXTMJPX",
          "value": "QCTBYTDQ"
        }
      ]
    },
    "loyaltyProgramId": 9741,
    "promotionDescription": "AAPPAKV",
    "promotionIssuedDate": "RBLGGBKKCT",
    "promotionId": 9220
  },
  "refId": "WEEVUYIPK",
  "loyaltyEventId": "JJFADZL",
  "apiRequestId": "CMUWJUQL",
  "eventId": "ZAASVONOST",
  "createdAt": 6644,
  "traceAttributes": {
    "WLHGZH": "CZNBCGT",
    "RGT": "ZCTNXYQU",
    "FHQWUWBQJ": "MJVXX"
  },
  "orgId": 9577
}
```

| Parameter                  | Data Type | Description                            |
| -------------------------- | --------- | -------------------------------------- |
| eventName                  | String    | Name of the event                      |
| data                       | Object    | Contains promotion issue details       |
| -customerIdentifiers       | Object    | Customer identity details              |
| -- customerId              | Integer   | Unique ID of the customer              |
| -- instore                 | Object    | Instore identifiers                    |
| --- mobile                 | String    | Customer’s mobile number               |
| --- email                  | String    | Customer’s email address               |
| --- cardNumbers            | Array     | Loyalty card numbers                   |
| -loyaltyProgramId          | Integer   | Associated loyalty program ID          |
| -promotionId               | Integer   | ID of the promotion issued             |
| -promotionName             | String    | Name of the issued promotion           |
| -promotionStartDate        | String    | Start date (YYYY-MM-DD)                |
| -promotionEndDate          | String    | End date (YYYY-MM-DD)                  |
| -promotionIssuedDate       | String    | Date of issue                          |
| -promotionIssuedExpiryDate | String    | Expiry date of the issued promotion    |
| -promotionDescription      | String    | Description of the promotion           |
| -pointsOfferType           | String    | Type of points offer (e.g., `GENERIC`) |
| -customFields              | Array     | Optional custom field data             |
| -issueRestrictions         | Array     | Restrictions on issuing                |
| -- limitOn                 | String    | The dimension the limit is applied to  |
| -- kpi                     | String    | KPI used for the restriction           |
| -- maxLimit                | Integer   | Maximum number of issuances            |
| -redemptionRestrictions    | Array     | Restrictions on redemption             |
| -- limitOn                 | String    | Target of the restriction              |
| -- kpi                     | String    | KPI for the restriction                |
| -- restrictionType         | String    | Type of restriction                    |
| -- maxLimit                | Integer   | Maximum number of redemptions          |
| -issualId                  | Integer   | ID of the specific issuance            |
| orgId                      | Integer   | Organisation ID                        |
| refId                      | String    | Unique reference for tracing           |
| apiRequestId               | String    | Unique ID of the API request           |
| createdAt                  | Long      | Epoch timestamp of creation            |

## Earned loyalty promotion (promotionEarned)

Notifies when a user earns a promotion.

```json Enriched payload
{
    "eventName": "promotionEarned",
    "data": {
        "customerIdentifiers": {
            "customerId": 387337123,
            "instore": {
                "mobile": "919191920700",
                "email": "user700@gmail.com",
                "cardNumbers": []
            }
        },
        "loyaltyProgramId": 2845,
        "promotionId": 1133570767,
        "promotionName": "Promo_Loyalty_Earn",
        "promotionStartDate": "2024-07-01",
        "promotionEndDate": "2024-08-31",
        "promotionEarnedDate": "2024-08-06",
        "promotionEarnedExpiryDate": "2024-08-31",
        "promotionDescription": "Promo_Loyalty_Earn",
        "pointsOfferType": "GENERIC",
        "customFields": [],
        "issualId": 2901,
        "earnedId": 2522,
        "earnRestrictions": [
            {
                "limitOn": "CUSTOMER",
                "kpi": "MAX_NUMBER_OF_EARNS_PER_CUSTOMER",
                "maxLimit": 3
            },
            {
                "limitOn": "CUSTOMER",
                "kpi": "MAX_POINTS_PER_EARN_PER_CUSTOMER",
                "maxLimit": -1
            }
        ],
        "redemptionRestrictions": [
            {
                "limitOn": "",
                "kpi": "MAX_REDEMPTIONS_PER_EARN_PER_CUSTOMER",
                "restrictionType": "NON_PERIOD_BASED",
                "maxLimit": 3
            }
        ]
    },
    "orgId": 51538,
    "refId": "51538_X07F0IEo6o",
    "apiRequestId": "b39b47ff9f6dd8cd7c2181a6cc7b12f3",
    "createdAt": 1722944534772
}
```
```json Raw payload
{
  "eventName": "promotionEarned",
  "eventLogId": 1251,
  "data": {
    "linkedTargetGroupVsTargetRuleIdMap": {
      "1813": [
        7957
      ],
      "5529": [
        7583
      ],
      "7050": [
        2331
      ]
    },
    "promotionEndDate": "GFACYNA",
    "promotionEarnedDate": "EMCQKZKJ",
    "customFields": [
      {
        "key": "UUEAKN",
        "value": "HFJ"
      }
    ],
    "customerIdentifiers": {
      "loyaltyType": "DMFH",
      "ecommerce": {
        "accounts": [
          {
            "accountId": "VRDDBOYF",
            "identifiers": [
              {
                "identifierType": "SHKMVRKRSE",
                "identifierValue": "IJPZGYWTYE"
              }
            ]
          }
        ]
      },
      "lastName": "OBJ",
      "facebook": {
        "accounts": [
          {
            "accountId": "SMCBM",
            "identifiers": [
              {
                "identifierType": "KNDWMJPTR",
                "identifierValue": "ZNTK"
              }
            ]
          }
        ]
      },
      "wechat": {
        "accounts": [
          {
            "accountId": "KKCRCR",
            "identifiers": [
              {
                "identifierType": "ZTCL",
                "identifierValue": "VZLKB"
              }
            ]
          }
        ]
      },
      "tmall": {
        "accounts": [
          {
            "accountId": "XLUXLG",
            "identifiers": [
              {
                "identifierType": "CUGOQ",
                "identifierValue": "SGCVGATN"
              }
            ]
          }
        ]
      },
      "toabao": {
        "accounts": [
          {
            "accountId": "QYBR",
            "identifiers": [
              {
                "identifierType": "MBDXDEVF",
                "identifierValue": "KJSL"
              }
            ]
          }
        ]
      },
      "web_engage": {
        "accounts": [
          {
            "accountId": "QEBPBGH",
            "identifiers": [
              {
                "identifierType": "FKP",
                "identifierValue": "OARBKRH"
              }
            ]
          }
        ]
      },
      "line": {
        "accounts": [
          {
            "accountId": "BENIVAOB",
            "identifiers": [
              {
                "identifierType": "SNYOF",
                "identifierValue": "ILEIF"
              }
            ]
          }
        ]
      },
      "martjack": {
        "accounts": [
          {
            "accountId": "WLK",
            "identifiers": [
              {
                "identifierType": "EHDYBTWWUH",
                "identifierValue": "JFLWKJMENX"
              }
            ]
          }
        ]
      },
      "customerId": 2734,
      "jd": {
        "accounts": [
          {
            "accountId": "LAVEK",
            "identifiers": [
              {
                "identifierType": "SDIXO",
                "identifierValue": "JESSKZSHH"
              }
            ]
          }
        ]
      },
      "website": {
        "accounts": [
          {
            "accountId": "KJYPPORFJI",
            "identifiers": [
              {
                "identifierType": "ANDPKYHBN",
                "identifierValue": "RDZKP"
              }
            ]
          }
        ]
      },
      "firstName": "SHVKZAGN",
      "instore": {
        "id": 5922,
        "mobile": "EOHH",
        "email": "EXTWQGVC",
        "externalId": "SKB",
        "cardnumber": "SOUMUMJNWK",
        "cardexternalid": "MUXAQVICBL",
        "cardNumbers": [
          "RRAXILBRM"
        ]
      }
    },
    "promotionStartDate": "XHPLSWK",
    "promotionName": "SGUPKB",
    "issualId": 9968,
    "earnedId": 3956,
    "redemptionRestrictions": [
      {
        "limitOn": "AQFBQBR",
        "kpi": "IJHVKP",
        "restrictionType": "QABIHVYRC",
        "periodType": "QXQEL",
        "periodUnit": "KXHADEMZH",
        "maxLimit": 7851,
        "restrictionRefreshDate": "RCN"
      }
    ],
    "pointsOfferType": "QWNKWV",
    "promotionEarnSource": "FIKAYJ",
    "earnCriteria": "KVCKXSWTCK",
    "triggeringActivity": {
      "name": "UKBHU",
      "identifiers": [
        {
          "key": "VYPOAKAI",
          "value": "BGSV"
        }
      ],
      "enteredBy": {
        "id": 9092,
        "till": {
          "code": "DUUUUQNE",
          "name": "BODVKAJG"
        },
        "store": {
          "code": "AZZ",
          "name": "YJHSKG",
          "externalId": "IVGMWVCB",
          "externalId1": "GUFSNCS",
          "externalId2": "AQDDBTQSCK"
        }
      },
      "entityInformation": {
        "entityType": "NDGJNYZ",
        "entityId": 6495
      },
      "additionalAttributes": [
        {
          "key": "NUCRVWKUP",
          "value": "UVTGO"
        }
      ]
    },
    "loyaltyProgramId": 3484,
    "promotionDescription": "YSZ",
    "promotionEarnedExpiryDate": "TFBZLRCT",
    "promotionId": 8627,
    "earnRestrictions": [
      {
        "limitOn": "JZHPQKFHO",
        "kpi": "DKQWKWD",
        "maxLimit": 7540
      }
    ]
  },
  "refId": "ZFIPHWQTIH",
  "loyaltyEventId": "IRTZ",
  "apiRequestId": "FENQIU",
  "eventId": "VKLXRQHET",
  "createdAt": 9140,
  "traceAttributes": {
    "IZXJHPA": "ZLBVXLFY",
    "MOTR": "FIVGY",
    "JMQISSQCF": "FERN"
  },
  "orgId": 2490
}
```

## Revoke issued loyalty promotion (revokeIssuedPromotion)

Notifies when an issued promotion is revoked.

```json Enriched payload
{
    "eventName": "revokeIssuedPromotion",
    "data": {
        "customerIdentifiers": {
            "customerId": 387337123,
            "instore": {
                "mobile": "919191920700",
                "email": "user700@gmail.com",
                "cardNumbers": []
            }
        },
        "loyaltyProgramId": 2845,
        "promotionId": 1133570767,
        "promotionName": "Promo_Loyalty_Earn",
        "promotionStartDate": "2024-07-01",
        "promotionEndDate": "2024-08-31",
        "promotionIssuedDate": "2024-08-06",
        "promotionIssuedExpiryDate": "2024-08-31",
        "promotionDescription": "Promo_Loyalty_Earn",
        "customFields": [],
        "issueRestrictions": [
            {
                "limitOn": "CUSTOMER",
                "kpi": "MAX_NUMBER_OF_ISSUALS_PER_CUSTOMER",
                "maxLimit": 3
            }
        ],
        "redemptionRestrictions": [
            {
                "limitOn": "",
                "kpi": "MAX_REDEMPTIONS_PER_EARN_PER_CUSTOMER",
                "restrictionType": "NON_PERIOD_BASED",
                "maxLimit": 3
            }
        ],
        "revokedIssualId": 2901
    },
    "orgId": 51538,
    "refId": "51538_V2KxxB3KKb",
    "apiRequestId": "c3560c2840c9254785bf98d7a9de6e1d",
    "createdAt": 1722945100073
}
```
```json Raw payload
{
  "eventName": "revokeIssuedPromotion",
  "eventLogId": 6338,
  "data": {
    "issueRestrictions": [
      {
        "limitOn": "ZUBB",
        "kpi": "PSPK",
        "maxLimit": 8363
      }
    ],
    "promotionEndDate": "ZCEZLMTJU",
    "customFields": [
      {
        "key": "DHKTTGE",
        "value": "JRHSJKRJGZ"
      }
    ],
    "customerIdentifiers": {
      "loyaltyType": "MQFTKOT",
      "ecommerce": {
        "accounts": [
          {
            "accountId": "UKAIV",
            "identifiers": [
              {
                "identifierType": "JWWFI",
                "identifierValue": "BGW"
              }
            ]
          }
        ]
      },
      "lastName": "MRZBFLP",
      "facebook": {
        "accounts": [
          {
            "accountId": "OZHIGYP",
            "identifiers": [
              {
                "identifierType": "CAZ",
                "identifierValue": "RCQ"
              }
            ]
          }
        ]
      },
      "wechat": {
        "accounts": [
          {
            "accountId": "MUPXFJMUV",
            "identifiers": [
              {
                "identifierType": "QFLH",
                "identifierValue": "AMNV"
              }
            ]
          }
        ]
      },
      "tmall": {
        "accounts": [
          {
            "accountId": "STVENUCHG",
            "identifiers": [
              {
                "identifierType": "YZMA",
                "identifierValue": "HAMJBP"
              }
            ]
          }
        ]
      },
      "toabao": {
        "accounts": [
          {
            "accountId": "YMZIAHMLU",
            "identifiers": [
              {
                "identifierType": "PCFXPVR",
                "identifierValue": "KUQ"
              }
            ]
          }
        ]
      },
      "web_engage": {
        "accounts": [
          {
            "accountId": "MEBXLT",
            "identifiers": [
              {
                "identifierType": "KDWGC",
                "identifierValue": "NZWFWEO"
              }
            ]
          }
        ]
      },
      "line": {
        "accounts": [
          {
            "accountId": "ROP",
            "identifiers": [
              {
                "identifierType": "TOPGTB",
                "identifierValue": "RPME"
              }
            ]
          }
        ]
      },
      "martjack": {
        "accounts": [
          {
            "accountId": "RVVDSZHH",
            "identifiers": [
              {
                "identifierType": "DIEECU",
                "identifierValue": "GMJBLPTQ"
              }
            ]
          }
        ]
      },
      "customerId": 4487,
      "jd": {
        "accounts": [
          {
            "accountId": "QUD",
            "identifiers": [
              {
                "identifierType": "HJU",
                "identifierValue": "HSOFPPYCMW"
              }
            ]
          }
        ]
      },
      "website": {
        "accounts": [
          {
            "accountId": "CKRDCAGSES",
            "identifiers": [
              {
                "identifierType": "OQEYQKYWE",
                "identifierValue": "XOKOY"
              }
            ]
          }
        ]
      },
      "firstName": "CROG",
      "instore": {
        "id": 2146,
        "mobile": "ZUH",
        "email": "VBWZXP",
        "externalId": "XEZFX",
        "cardnumber": "ZZLSUX",
        "cardexternalid": "UEAT",
        "cardNumbers": [
          "QFMISCBPOI"
        ]
      }
    },
    "promotionStartDate": "BVCRGKC",
    "promotionName": "VOVNJPC",
    "promotionIssuedExpiryDate": "IJQXMHLKN",
    "revokedIssualId": 1620,
    "redemptionRestrictions": [
      {
        "limitOn": "WORGAR",
        "kpi": "KCMBGPYUAF",
        "restrictionType": "LIB",
        "periodType": "LXYRJU",
        "periodUnit": "EJQL",
        "maxLimit": 9723,
        "restrictionRefreshDate": "ORYGGKVKZD"
      }
    ],
    "triggeringActivity": {
      "name": "YFPLSVOCNT",
      "identifiers": [
        {
          "key": "PAJ",
          "value": "QGVSTW"
        }
      ],
      "enteredBy": {
        "id": 2376,
        "till": {
          "code": "MGFWSB",
          "name": "SUMP"
        },
        "store": {
          "code": "BIWZISDOF",
          "name": "FQNOGIFFX",
          "externalId": "AWZPJFADNV",
          "externalId1": "DTTFAM",
          "externalId2": "SYWRGRLT"
        }
      },
      "entityInformation": {
        "entityType": "QXBHGWQ",
        "entityId": 5627
      },
      "additionalAttributes": [
        {
          "key": "EJEABOEJU",
          "value": "JSSR"
        }
      ]
    },
    "loyaltyProgramId": 8237,
    "promotionDescription": "BZEUKYNWX",
    "promotionIssuedDate": "QZHOI",
    "promotionId": 9528
  },
  "refId": "RDJBO",
  "loyaltyEventId": "JGQJ",
  "apiRequestId": "JDSMNFZKYF",
  "eventId": "VFCGA",
  "createdAt": 953,
  "traceAttributes": {
    "PJUKIVWDZ": "XMICDRVHAG",
    "SAXCA": "AYZU",
    "MXCGPG": "RIQLW",
    "MLVUUUM": "ICM",
    "ENARH": "XXRZNAO"
  },
  "orgId": 4811
}
```

## Revoke earned loyalty promotion (revokeEarnedPromotion)

Notifies when an earned loyalty promotion has been revoked for a user.

```json Enriched payload
{
    "eventName": "revokeEarnedPromotion",
    "data": {
        "customerIdentifiers": {
            "customerId": 387337123,
            "instore": {
                "mobile": "919191920700",
                "email": "user700@gmail.com",
                "cardNumbers": []
            }
        },
        "loyaltyProgramId": 2845,
        "promotionId": 1133570767,
        "promotionName": "Promo_Loyalty_Earn",
        "promotionStartDate": "2024-07-01",
        "promotionEndDate": "2024-08-31",
        "promotionDescription": "Promo_Loyalty_Earn",
        "customFields": [],
        "revokedEarnedPromotionDetails": [
            {
                "revokedEarnedId": 2523,
                "promotionEarnedDate": "2024-08-06",
                "promotionEarnedExpiryDate": "2024-08-31"
            }
        ],
        "earnRestrictions": [
            {
                "limitOn": "CUSTOMER",
                "kpi": "MAX_NUMBER_OF_EARNS_PER_CUSTOMER",
                "maxLimit": 3
            },
            {
                "limitOn": "CUSTOMER",
                "kpi": "MAX_POINTS_PER_EARN_PER_CUSTOMER",
                "maxLimit": -1
            }
        ],
        "redemptionRestrictions": [
            {
                "limitOn": "",
                "kpi": "MAX_REDEMPTIONS_PER_EARN_PER_CUSTOMER",
                "restrictionType": "NON_PERIOD_BASED",
                "maxLimit": 3
            }
        ]
    },
    "orgId": 51538,
    "refId": "51538_LEpXJt8Vd9",
    "apiRequestId": "025f37887d8814414da0b7e3fcb5d88e",
    "createdAt": 1722945241191
}
```
```json Raw payload
{
  "eventName": "revokeEarnedPromotion",
  "eventLogId": 3641,
  "data": {
    "promotionEndDate": "KLG",
    "customFields": [
      {
        "key": "MZTSUTHSF",
        "value": "MOLB"
      }
    ],
    "customerIdentifiers": {
      "loyaltyType": "YYCFV",
      "ecommerce": {
        "accounts": [
          {
            "accountId": "YQKCFOF",
            "identifiers": [
              {
                "identifierType": "AMJB",
                "identifierValue": "SRWP"
              }
            ]
          }
        ]
      },
      "lastName": "XCPSTL",
      "facebook": {
        "accounts": [
          {
            "accountId": "UZL",
            "identifiers": [
              {
                "identifierType": "ZWDBVWXV",
                "identifierValue": "MVEESK"
              }
            ]
          }
        ]
      },
      "wechat": {
        "accounts": [
          {
            "accountId": "CWJHDDM",
            "identifiers": [
              {
                "identifierType": "IML",
                "identifierValue": "QXNQD"
              }
            ]
          }
        ]
      },
      "tmall": {
        "accounts": [
          {
            "accountId": "LYEKEEB",
            "identifiers": [
              {
                "identifierType": "KMOPOVETMR",
                "identifierValue": "GQIDJIJ"
              }
            ]
          }
        ]
      },
      "toabao": {
        "accounts": [
          {
            "accountId": "FSP",
            "identifiers": [
              {
                "identifierType": "EVG",
                "identifierValue": "VXHVJYTI"
              }
            ]
          }
        ]
      },
      "web_engage": {
        "accounts": [
          {
            "accountId": "VKPI",
            "identifiers": [
              {
                "identifierType": "YRNGJRA",
                "identifierValue": "TWBJOSVTQ"
              }
            ]
          }
        ]
      },
      "line": {
        "accounts": [
          {
            "accountId": "ADKM",
            "identifiers": [
              {
                "identifierType": "CXPB",
                "identifierValue": "NCXOMHP"
              }
            ]
          }
        ]
      },
      "martjack": {
        "accounts": [
          {
            "accountId": "MQTSKOUSM",
            "identifiers": [
              {
                "identifierType": "MJWOHXU",
                "identifierValue": "WCBVJGKK"
              }
            ]
          }
        ]
      },
      "customerId": 7767,
      "jd": {
        "accounts": [
          {
            "accountId": "LPC",
            "identifiers": [
              {
                "identifierType": "XFZORYWOGI",
                "identifierValue": "JEWJAANKKO"
              }
            ]
          }
        ]
      },
      "website": {
        "accounts": [
          {
            "accountId": "IVJ",
            "identifiers": [
              {
                "identifierType": "WCQGMGEAVN",
                "identifierValue": "YIISAJHBX"
              }
            ]
          }
        ]
      },
      "firstName": "PBWABA",
      "instore": {
        "id": 7427,
        "mobile": "DQQPDTSSOX",
        "email": "JLRNMBFGJF",
        "externalId": "HMOV",
        "cardnumber": "XLMVZ",
        "cardexternalid": "KDGBJOAX",
        "cardNumbers": [
          "BFEATKQ"
        ]
      }
    },
    "promotionStartDate": "GJCAZ",
    "promotionName": "DDSWSR",
    "redemptionRestrictions": [
      {
        "limitOn": "APCDHG",
        "kpi": "ECUVRI",
        "restrictionType": "CNQQHS",
        "periodType": "DKIJQQE",
        "periodUnit": "KMKKEPJ",
        "maxLimit": 9224,
        "restrictionRefreshDate": "UUVPJVZX"
      }
    ],
    "revokedEarnedPromotionDetails": [
      {
        "revokedEarnedId": 7024,
        "promotionEarnedDate": "HUQPH",
        "promotionEarnedExpiryDate": "PYDQEEC"
      }
    ],
    "triggeringActivity": {
      "name": "CVCIMCHHT",
      "identifiers": [
        {
          "key": "ZQRJMO",
          "value": "HDDZFKXM"
        }
      ],
      "enteredBy": {
        "id": 5134,
        "till": {
          "code": "ACBBSMAF",
          "name": "QMX"
        },
        "store": {
          "code": "SXCRIQFXW",
          "name": "ZKCM",
          "externalId": "HSTMCHEN",
          "externalId1": "BHDWULHUH",
          "externalId2": "UIBLGUYP"
        }
      },
      "entityInformation": {
        "entityType": "SXBG",
        "entityId": 2544
      },
      "additionalAttributes": [
        {
          "key": "MMIHRFKEP",
          "value": "TLDP"
        }
      ]
    },
    "loyaltyProgramId": 7833,
    "promotionDescription": "CCWPQJDZMU",
    "promotionId": 4136,
    "earnRestrictions": [
      {
        "limitOn": "UVPCQJJJ",
        "kpi": "QLB",
        "maxLimit": 6032
      }
    ]
  },
  "refId": "FPK",
  "loyaltyEventId": "TBSUNCHV",
  "apiRequestId": "CBMPV",
  "eventId": "JBQGN",
  "createdAt": 6811,
  "traceAttributes": {
    "OLQZVWP": "MECX",
    "JUIGUF": "FPMKRCPCU"
  },
  "orgId": 7175
}
```

***

# Cart Promotions

A cart promotion is a type of promotion or discount that is applied to products in a customer's shopping cart, either during product search or at checkout.

## Cart Promotion Issued Event (cartPromotionIssued)

Notifies when a cart promotion is issued.

```json Raw payload
{
        "eventName": "cartPromotionIssued",
        "data": {
            "customerIdentifiers": {
                "customerId": 4663,
                "firstName": "BGUOZRE",
                "lastName": "MSJKWQ",
                "loyaltyType": "IEXVTDCP",
                "instore": {
                    "id": 9942,
                    "mobile": "NHLE",
                    "email": "JCJV",
                    "externalId": "LUES",
                    "cardnumber": "OAFFXCN",
                    "cardexternalid": "HGKX",
                    "cardNumbers": [
                        "GYCYSLS"
                    ]
                },
                "facebook": {
                    "accounts": [
                        {
                            "accountId": "VOQBUXTRPC",
                            "identifiers": [
                                {
                                    "identifierType": "ARQ",
                                    "identifierValue": "CMFMUHDDFX"
                                }
                            ]
                        }
                    ]
                },
                "web_engage": {
                    "accounts": [
                        {
                            "accountId": "PDYDJ",
                            "identifiers": [
                                {
                                    "identifierType": "HHIWUZUU",
                                    "identifierValue": "XBYAXTP"
                                }
                            ]
                        }
                    ]
                },
                "wechat": {
                    "accounts": [
                        {
                            "accountId": "DOI",
                            "identifiers": [
                                {
                                    "identifierType": "HAG",
                                    "identifierValue": "BRWCCUB"
                                }
                            ]
                        }
                    ]
                },
                "martjack": {
                    "accounts": [
                        {
                            "accountId": "PYKCMFU",
                            "identifiers": [
                                {
                                    "identifierType": "NNVEKHWSN",
                                    "identifierValue": "IHMRPJHCO"
                                }
                            ]
                        }
                    ]
                },
                "tmall": {
                    "accounts": [
                        {
                            "accountId": "SJRJI",
                            "identifiers": [
                                {
                                    "identifierType": "TVFDMV",
                                    "identifierValue": "BNUESBSJ"
                                }
                            ]
                        }
                    ]
                },
                "toabao": {
                    "accounts": [
                        {
                            "accountId": "WBLQSK",
                            "identifiers": [
                                {
                                    "identifierType": "XFBIRJ",
                                    "identifierValue": "FYTIKULNLO"
                                }
                            ]
                        }
                    ]
                },
                "jd": {
                    "accounts": [
                        {
                            "accountId": "DEKM",
                            "identifiers": [
                                {
                                    "identifierType": "QXUDKD",
                                    "identifierValue": "SDBNILOJMG"
                                }
                            ]
                        }
                    ]
                },
                "ecommerce": {
                    "accounts": [
                        {
                            "accountId": "AHADQOUOO",
                            "identifiers": [
                                {
                                    "identifierType": "DSHXLYUBBN",
                                    "identifierValue": "VNOOEF"
                                }
                            ]
                        }
                    ]
                },
                "website": {
                    "accounts": [
                        {
                            "accountId": "CKVPGRZ",
                            "identifiers": [
                                {
                                    "identifierType": "GYKOQHT",
                                    "identifierValue": "ZMKUWCRQ"
                                }
                            ]
                        }
                    ]
                },
                "line": {
                    "accounts": [
                        {
                            "accountId": "USPIFKZ",
                            "identifiers": [
                                {
                                    "identifierType": "RBZVSAJD",
                                    "identifierValue": "LYUEVN"
                                }
                            ]
                        }
                    ]
                }
            },
            "promotionId": "DHDAFNXDUH",
            "issueId": "RMQRZEI",
            "issueDate": "GDYDBSNTHO"
        },
        "eventId": "AKDVFVIJAV",
        "orgId": 9475,
        "refId": "WEEVQBDJRJ",
        "apiRequestId": "OZOLOVGXST",
        "createdAt": 9439,
        "loyaltyEventId": "IYNSIEE",
        "traceAttributes": {
            "VFVLXT": "IUQAIPC",
            "FMKATR": "NBXVNBKO",
            "XHLZUANMIU": "YIPFQHOKLE",
            "SWUFTBOBDL": "KAGJIHOJEH",
            "TZKYJJLB": "WELRWURJK"
        }
    }
```

## Cart Promotion Redeemed Event (cartPromotionRedeemed)

Notifies whenever a cart promotion is redeemed by the user.

```json Raw payload
{
        "eventName": "cartPromotionRedeemed",
        "data": {
            "customerIdentifiers": {
                "customerId": 5389,
                "firstName": "KKXYFYWJ",
                "lastName": "ZESRIQCPM",
                "loyaltyType": "XKOLOAHIBC",
                "instore": {
                    "id": 1623,
                    "mobile": "UVH",
                    "email": "EFJK",
                    "externalId": "HJJ",
                    "cardnumber": "PPLBDZ",
                    "cardexternalid": "MCNZXBSDIZ",
                    "cardNumbers": [
                        "NXPEHKXL"
                    ]
                },
                "facebook": {
                    "accounts": [
                        {
                            "accountId": "ZCHJWFMKCC",
                            "identifiers": [
                                {
                                    "identifierType": "KKHID",
                                    "identifierValue": "BLV"
                                }
                            ]
                        }
                    ]
                },
                "web_engage": {
                    "accounts": [
                        {
                            "accountId": "EDGMQKRA",
                            "identifiers": [
                                {
                                    "identifierType": "LFY",
                                    "identifierValue": "YHMIO"
                                }
                            ]
                        }
                    ]
                },
                "wechat": {
                    "accounts": [
                        {
                            "accountId": "DXQLH",
                            "identifiers": [
                                {
                                    "identifierType": "FEOKK",
                                    "identifierValue": "MBHPWQ"
                                }
                            ]
                        }
                    ]
                },
                "martjack": {
                    "accounts": [
                        {
                            "accountId": "YXD",
                            "identifiers": [
                                {
                                    "identifierType": "VCXOHLX",
                                    "identifierValue": "IEXFYTFU"
                                }
                            ]
                        }
                    ]
                },
                "tmall": {
                    "accounts": [
                        {
                            "accountId": "DLZKACZFA",
                            "identifiers": [
                                {
                                    "identifierType": "IMQGCSRPD",
                                    "identifierValue": "ZEUKBJZN"
                                }
                            ]
                        }
                    ]
                },
                "toabao": {
                    "accounts": [
                        {
                            "accountId": "RIPV",
                            "identifiers": [
                                {
                                    "identifierType": "IVZYIT",
                                    "identifierValue": "RBJKM"
                                }
                            ]
                        }
                    ]
                },
                "jd": {
                    "accounts": [
                        {
                            "accountId": "VEBJMPMVF",
                            "identifiers": [
                                {
                                    "identifierType": "ZMWOBMUUO",
                                    "identifierValue": "LXMARZIC"
                                }
                            ]
                        }
                    ]
                },
                "ecommerce": {
                    "accounts": [
                        {
                            "accountId": "AQKTD",
                            "identifiers": [
                                {
                                    "identifierType": "RWPMFPGSH",
                                    "identifierValue": "JSI"
                                }
                            ]
                        }
                    ]
                },
                "website": {
                    "accounts": [
                        {
                            "accountId": "KBZVADXCS",
                            "identifiers": [
                                {
                                    "identifierType": "YYRZZUQ",
                                    "identifierValue": "YZQPZA"
                                }
                            ]
                        }
                    ]
                },
                "line": {
                    "accounts": [
                        {
                            "accountId": "HRZZAKEHD",
                            "identifiers": [
                                {
                                    "identifierType": "YJIAPEJPS",
                                    "identifierValue": "EENOI"
                                }
                            ]
                        }
                    ]
                }
            },
            "addedBy": {
                "id": 5206,
                "till": {
                    "code": "DYQOBU",
                    "name": "XIQV"
                },
                "store": {
                    "code": "NWNV",
                    "name": "WTQVRTNL",
                    "externalId": "FPZNGYUV",
                    "externalId1": "WFM",
                    "externalId2": "TBITHF"
                }
            },
            "redemptionDateTime": "WNB",
            "transactionIdentifier": "SGA",
            "appliedPromotions": [
                {
                    "redemptionCount": 4933,
                    "promotionId": "VOSY",
                    "earnId": "MGVADJSQO",
                    "discountAppliedOnQuantity": 2662.682769091687,
                    "discount": 3127.1389321916945,
                    "redemptionType": "TQIAZNDWD"
                }
            ],
            "lineItemInfo": [
                {
                    "sku": "XNK",
                    "productId": "GMX",
                    "appliedPromotions": [
                        {
                            "redemptionCount": 4947,
                            "promotionId": "ORKC",
                            "earnId": "RQHH",
                            "discountAppliedOnQuantity": 2178.8487374098336,
                            "discount": 6697.317986678818,
                            "redemptionType": "PJB"
                        }
                    ]
                }
            ]
        },
        "eventId": "RAKUK",
        "orgId": 3401,
        "refId": "DXLDCYH",
        "apiRequestId": "AWTDZLHDJ",
        "createdAt": 9510,
        "loyaltyEventId": "NUWRBLX",
        "traceAttributes": {
            "CPGY": "KAWUEBFOYA",
            "VXG": "JBJTTIHYFR",
            "YXLOW": "BYHZ"
        }
    }
```

## Cart Promotion Revoked Event (cartPromotionRevoked)

Notifies whenever a cart promotion is revoked from the user.

```json Raw payload
{
        "eventName": "cartPromotionRevoked",
        "data": {
            "customerIdentifiers": {
                "customerId": 6104,
                "firstName": "MBTXFZD",
                "lastName": "DAKW",
                "loyaltyType": "FMLEMKUMD",
                "instore": {
                    "id": 4309,
                    "mobile": "OVGPFLU",
                    "email": "WKQ",
                    "externalId": "BGQYITYA",
                    "cardnumber": "UFVWTD",
                    "cardexternalid": "GVOUS",
                    "cardNumbers": [
                        "CFZ"
                    ]
                },
                "facebook": {
                    "accounts": [
                        {
                            "accountId": "QDYFNYLFND",
                            "identifiers": [
                                {
                                    "identifierType": "RQXQL",
                                    "identifierValue": "LHVWANWYL"
                                }
                            ]
                        }
                    ]
                },
                "web_engage": {
                    "accounts": [
                        {
                            "accountId": "OKBE",
                            "identifiers": [
                                {
                                    "identifierType": "MGX",
                                    "identifierValue": "ZKAMHL"
                                }
                            ]
                        }
                    ]
                },
                "wechat": {
                    "accounts": [
                        {
                            "accountId": "OVMFKXJGVJ",
                            "identifiers": [
                                {
                                    "identifierType": "BTHPNOOMYL",
                                    "identifierValue": "XBCH"
                                }
                            ]
                        }
                    ]
                },
                "martjack": {
                    "accounts": [
                        {
                            "accountId": "IMH",
                            "identifiers": [
                                {
                                    "identifierType": "FQCZL",
                                    "identifierValue": "RAUIRHRHV"
                                }
                            ]
                        }
                    ]
                },
                "tmall": {
                    "accounts": [
                        {
                            "accountId": "ZWWLE",
                            "identifiers": [
                                {
                                    "identifierType": "JUDOWMMXN",
                                    "identifierValue": "LALGWJTQIA"
                                }
                            ]
                        }
                    ]
                },
                "toabao": {
                    "accounts": [
                        {
                            "accountId": "GLTLMCZE",
                            "identifiers": [
                                {
                                    "identifierType": "IKPVM",
                                    "identifierValue": "XVMONWYDKQ"
                                }
                            ]
                        }
                    ]
                },
                "jd": {
                    "accounts": [
                        {
                            "accountId": "OTMGM",
                            "identifiers": [
                                {
                                    "identifierType": "LFQEHG",
                                    "identifierValue": "THGZS"
                                }
                            ]
                        }
                    ]
                },
                "ecommerce": {
                    "accounts": [
                        {
                            "accountId": "TSKD",
                            "identifiers": [
                                {
                                    "identifierType": "DPYSUVYZP",
                                    "identifierValue": "DOVT"
                                }
                            ]
                        }
                    ]
                },
                "website": {
                    "accounts": [
                        {
                            "accountId": "LPM",
                            "identifiers": [
                                {
                                    "identifierType": "IBZTAM",
                                    "identifierValue": "IGLNS"
                                }
                            ]
                        }
                    ]
                },
                "line": {
                    "accounts": [
                        {
                            "accountId": "HASYHRHCK",
                            "identifiers": [
                                {
                                    "identifierType": "JOQGUNUU",
                                    "identifierValue": "TLSBVOYVMF"
                                }
                            ]
                        }
                    ]
                }
            },
            "promotionId": "SJRKYILE",
            "earnId": "TXISYZVZMM"
        },
        "eventId": "ONGUZWFNV",
        "orgId": 5155,
        "refId": "WHEQ",
        "apiRequestId": "BLJC",
        "createdAt": 4840,
        "loyaltyEventId": "JUYQET",
        "traceAttributes": {
            "CGY": "FAUY",
            "BKKS": "GYCDXOJBPM"
        }
    }
```

## Cart Promotion Earned Event (cartPromotionEarned)

Notifies whenever the user earns the cart promotion on meeting the defined criteria for the promotion.

```json Raw payload
{
        "eventName": "cartPromotionEarned",
        "data": {
            "customerIdentifiers": {
                "customerId": 1944,
                "firstName": "LBPKGKD",
                "lastName": "IPDPQVJ",
                "loyaltyType": "WJIDT",
                "instore": {
                    "id": 9878,
                    "mobile": "KFDVCAGNXG",
                    "email": "AOZQTBGP",
                    "externalId": "JCBN",
                    "cardnumber": "ADRLRPMO",
                    "cardexternalid": "JQPE",
                    "cardNumbers": [
                        "ECCLNRRXWU"
                    ]
                },
                "facebook": {
                    "accounts": [
                        {
                            "accountId": "HKXCKVRFC",
                            "identifiers": [
                                {
                                    "identifierType": "DGOVKD",
                                    "identifierValue": "THUWJLY"
                                }
                            ]
                        }
                    ]
                },
                "web_engage": {
                    "accounts": [
                        {
                            "accountId": "COTO",
                            "identifiers": [
                                {
                                    "identifierType": "MHITBN",
                                    "identifierValue": "ZWLVYUQ"
                                }
                            ]
                        }
                    ]
                },
                "wechat": {
                    "accounts": [
                        {
                            "accountId": "UTIHGNGC",
                            "identifiers": [
                                {
                                    "identifierType": "IZXYNGXLFS",
                                    "identifierValue": "AGTAVCCWDT"
                                }
                            ]
                        }
                    ]
                },
                "martjack": {
                    "accounts": [
                        {
                            "accountId": "FWTLHC",
                            "identifiers": [
                                {
                                    "identifierType": "UIQZKVZEN",
                                    "identifierValue": "RHIM"
                                }
                            ]
                        }
                    ]
                },
                "tmall": {
                    "accounts": [
                        {
                            "accountId": "VILJGGC",
                            "identifiers": [
                                {
                                    "identifierType": "LGTWZCJCI",
                                    "identifierValue": "TRZSEOL"
                                }
                            ]
                        }
                    ]
                },
                "toabao": {
                    "accounts": [
                        {
                            "accountId": "YNUCRYCRHB",
                            "identifiers": [
                                {
                                    "identifierType": "KZLQI",
                                    "identifierValue": "ABNWWMEZC"
                                }
                            ]
                        }
                    ]
                },
                "jd": {
                    "accounts": [
                        {
                            "accountId": "VSSFLWR",
                            "identifiers": [
                                {
                                    "identifierType": "MZZY",
                                    "identifierValue": "XKFWW"
                                }
                            ]
                        }
                    ]
                },
                "ecommerce": {
                    "accounts": [
                        {
                            "accountId": "KEO",
                            "identifiers": [
                                {
                                    "identifierType": "SOWOMRPAL",
                                    "identifierValue": "WVSINXXUPU"
                                }
                            ]
                        }
                    ]
                },
                "website": {
                    "accounts": [
                        {
                            "accountId": "GATFZAX",
                            "identifiers": [
                                {
                                    "identifierType": "BMWEXEPDOH",
                                    "identifierValue": "AMATDTZNE"
                                }
                            ]
                        }
                    ]
                },
                "line": {
                    "accounts": [
                        {
                            "accountId": "BED",
                            "identifiers": [
                                {
                                    "identifierType": "VEEQTZ",
                                    "identifierValue": "ZAPLGNY"
                                }
                            ]
                        }
                    ]
                }
            },
            "promotionId": "VUCFN",
            "issueId": "GDVPLFNF",
            "issueDate": "KOYYHVH",
            "earnId": "TDXOQ",
            "earnedTime": "XOKIIO"
        },
        "eventId": "ABN",
        "orgId": 4227,
        "refId": "BEVHYZI",
        "apiRequestId": "CQPZZNTB",
        "createdAt": 3064,
        "loyaltyEventId": "QSWXPULJRD",
        "traceAttributes": {
            "WVS": "PQRJSPY",
            "WDZFEKXGUE": "MIRTVR",
            "SONQ": "JJVTVWXQMM",
            "OXMJIMZD": "FDROQD",
            "WMXI": "AFDJBR"
        }
    }
```