---
title: Tier
deprecated: false
hidden: false
metadata:
  robots: index
---
A tier is a level or slab within a loyalty program that customers can move up, renew, or be downgraded from based on their engagement with the brand.

## Tier Upgraded (tierUpgraded)

Notifies when a user's tier is upgraded.

```json Enriched payload
{
    "apiRequestId": "1344ffd5-7b6f-4af0-a23d-ce354da13c76",
    "createdAt": 1720440349027.0,
    "data": {
        "customerIdentifiers": {
            "customerId": 379499720.0
        },
        "entityInformation": {
            "entityId": 1676.0,
            "entityType": "entityType"
        },
        "loyaltyProgramDetails": {
            "id": 1676.0,
            "isDefault": null,
            "name": "name",
            "pointsToCurrencyRatio": 1677.0,
            "tiers": null
        },
        "loyaltyProgramId": 1676.0,
        "notes": "notes",
        "previousTierNumber": 1676.0,
        "tierExpiryDate": "tierExpiryDate",
        "triggeringActivity": {
            "additionalAttributes": null,
            "enteredBy": null,
            "entityInformation": null,
            "identifiers": null,
            "name": "name"
        },
        "upgradeType": "upgradeType",
        "upgradedTierNumber": 1676.0
    },
    "eventId": "ccf65d56-1e34-4282-b9ad-8fe3fe558b74",
    "eventName": "tierUpgraded",
    "loyaltyEventId": null,
    "orgId": 50952.0,
    "refId": "50952_7250807"
}

```
```json Raw payload
{
  "eventName": "tierUpgraded",
  "eventLogId": 5232,
  "data": {
    "notes": "ZNYFZ",
    "previousTierNumber": 4260,
    "tierExpiryDate": "OWODMWNRM",
    "loyaltyProgramDetails": {
      "id": 2725,
      "name": "XTOKVNSB",
      "isDefault": false,
      "pointsToCurrencyRatio": 8542.699354459714,
      "tiers": [
        {
          "tierNumber": 4693,
          "tierName": "SJUPWOJ"
        }
      ]
    },
    "entityInformation": {
      "entityType": "ZEI",
      "entityId": 1199
    },
    "customerIdentifiers": {
      "loyaltyType": "QJNJKTUU",
      "ecommerce": {
        "accounts": [
          {
            "accountId": "DKD",
            "identifiers": [
              {
                "identifierType": "MWHULAV",
                "identifierValue": "URNLSNQYO"
              }
            ]
          }
        ]
      },
      "lastName": "FJGTJ",
      "facebook": {
        "accounts": [
          {
            "accountId": "DPK",
            "identifiers": [
              {
                "identifierType": "XBBWG",
                "identifierValue": "XWDRJH"
              }
            ]
          }
        ]
      },
      "wechat": {
        "accounts": [
          {
            "accountId": "QHPETVS",
            "identifiers": [
              {
                "identifierType": "ODXVTK",
                "identifierValue": "YUH"
              }
            ]
          }
        ]
      },
      "tmall": {
        "accounts": [
          {
            "accountId": "NHDRI",
            "identifiers": [
              {
                "identifierType": "HNIC",
                "identifierValue": "AUDEVXO"
              }
            ]
          }
        ]
      },
      "toabao": {
        "accounts": [
          {
            "accountId": "SVU",
            "identifiers": [
              {
                "identifierType": "QIVA",
                "identifierValue": "KZKOAPMQJO"
              }
            ]
          }
        ]
      },
      "web_engage": {
        "accounts": [
          {
            "accountId": "TSTCLPVKC",
            "identifiers": [
              {
                "identifierType": "DEDYPN",
                "identifierValue": "YOF"
              }
            ]
          }
        ]
      },
      "line": {
        "accounts": [
          {
            "accountId": "VYAPLA",
            "identifiers": [
              {
                "identifierType": "SECCOKBTWQ",
                "identifierValue": "RILCU"
              }
            ]
          }
        ]
      },
      "martjack": {
        "accounts": [
          {
            "accountId": "JPP",
            "identifiers": [
              {
                "identifierType": "TJKZOVGGKB",
                "identifierValue": "HMPCQPB"
              }
            ]
          }
        ]
      },
      "customerId": 3081,
      "jd": {
        "accounts": [
          {
            "accountId": "WHYYPC",
            "identifiers": [
              {
                "identifierType": "VORANAOX",
                "identifierValue": "DUI"
              }
            ]
          }
        ]
      },
      "website": {
        "accounts": [
          {
            "accountId": "KQNHPJ",
            "identifiers": [
              {
                "identifierType": "MGQ",
                "identifierValue": "GUY"
              }
            ]
          }
        ]
      },
      "firstName": "DTCBBHGFKX",
      "instore": {
        "id": 5544,
        "mobile": "PQHMRG",
        "email": "OSYGOGDXDG",
        "externalId": "KKA",
        "cardnumber": "LCT",
        "cardexternalid": "YDVAEIYCFL",
        "cardNumbers": [
          "TSORJHMU"
        ]
      }
    },
    "upgradedTierNumber": 9270,
    "upgradeType": "GKP",
    "triggeringActivity": {
      "name": "ZHJNOK",
      "identifiers": [
        {
          "key": "MDFAPG",
          "value": "UYTSCNPS"
        }
      ],
      "enteredBy": {
        "id": 8289,
        "till": {
          "code": "UMX",
          "name": "ONYZAOOVR"
        },
        "store": {
          "code": "LHZEHJSX",
          "name": "ARHU",
          "externalId": "TJOLGKUFTB",
          "externalId1": "ZLYTOQZY",
          "externalId2": "VIEYCFLBQQ"
        }
      },
      "entityInformation": {
        "entityType": "HFAIGFCXRX",
        "entityId": 2749
      },
      "additionalAttributes": [
        {
          "key": "RKTCN",
          "value": "BETUNX"
        }
      ]
    },
    "loyaltyProgramId": 6624
  },
  "refId": "OWMFQV",
  "loyaltyEventId": "LKSPPKRWDG",
  "apiRequestId": "CMBN",
  "eventId": "HHVK",
  "createdAt": 7928,
  "traceAttributes": {
    "ALLYTVV": "BGITBEQ",
    "OTIJY": "LXYBG",
    "PBX": "MYBDGD",
    "IDSLDIPRZE": "AGUZH",
    "FKYC": "OVPZQA"
  },
  "orgId": 6564
}
```

## Tier Renewed Event (tierRenewed)

Notifies when a user's tier has been renewed.

```json Enriched payload
{
    "apiRequestId": "1344ffd5-7b6f-4af0-a23d-ce354da13c76",
    "createdAt": 1720435141002.0,
    "data": {
        "currentTierNumber": 1676.0,
        "customerIdentifiers": {
            "customerId": 379499720.0
        },
        "entityInformation": {
            "entityId": 1676.0,
            "entityType": "entityType"
        },
        "loyaltyProgramDetails": {
            "id": 1676.0,
            "isDefault": null,
            "name": "name",
            "pointsToCurrencyRatio": 1677.0,
            "tiers": null
        },
        "loyaltyProgramId": 1676.0,
        "notes": "notes",
        "renewType": "renewType",
        "tierExpiryDate": "tierExpiryDate",
        "triggeringActivity": {
            "additionalAttributes": null,
            "enteredBy": null,
            "entityInformation": null,
            "identifiers": null,
            "name": "name"
        }
    },
    "eventId": "ccf65d56-1e34-4282-b9ad-8fe3fe558b74",
    "eventName": "tierRenewed",
    "loyaltyEventId": null,
    "orgId": 50952.0,
    "refId": "50952_7250807" }

```
```json Raw payload
{
  "eventName": "tierRenewed",
  "eventLogId": 3056,
  "data": {
    "notes": "EAZS",
    "tierExpiryDate": "KSBBVAHJD",
    "loyaltyProgramDetails": {
      "id": 7746,
      "name": "EUBQTC",
      "isDefault": false,
      "pointsToCurrencyRatio": 4919.754038258829,
      "tiers": [
        {
          "tierNumber": 6318,
          "tierName": "XSPH"
        }
      ]
    },
    "currentTierNumber": 2762,
    "renewType": "KKZ",
    "entityInformation": {
      "entityType": "BIZQU",
      "entityId": 4853
    },
    "customerIdentifiers": {
      "loyaltyType": "HODK",
      "ecommerce": {
        "accounts": [
          {
            "accountId": "JRWWJKSBUX",
            "identifiers": [
              {
                "identifierType": "PIQCCFDMM",
                "identifierValue": "ALVA"
              }
            ]
          }
        ]
      },
      "lastName": "EMEQSVCOAD",
      "facebook": {
        "accounts": [
          {
            "accountId": "LXKBZFOYHM",
            "identifiers": [
              {
                "identifierType": "UHW",
                "identifierValue": "YOEZTFVD"
              }
            ]
          }
        ]
      },
      "wechat": {
        "accounts": [
          {
            "accountId": "EMHIRBSO",
            "identifiers": [
              {
                "identifierType": "OMOGJZR",
                "identifierValue": "JGVDTQZEE"
              }
            ]
          }
        ]
      },
      "tmall": {
        "accounts": [
          {
            "accountId": "KCIO",
            "identifiers": [
              {
                "identifierType": "XTX",
                "identifierValue": "DFT"
              }
            ]
          }
        ]
      },
      "toabao": {
        "accounts": [
          {
            "accountId": "JSR",
            "identifiers": [
              {
                "identifierType": "PRGPEA",
                "identifierValue": "KAJXP"
              }
            ]
          }
        ]
      },
      "web_engage": {
        "accounts": [
          {
            "accountId": "NYMAVAM",
            "identifiers": [
              {
                "identifierType": "KXSRCSCWAG",
                "identifierValue": "QZSZDAQWRN"
              }
            ]
          }
        ]
      },
      "line": {
        "accounts": [
          {
            "accountId": "AUWR",
            "identifiers": [
              {
                "identifierType": "IOLDJFIMRU",
                "identifierValue": "OUDCO"
              }
            ]
          }
        ]
      },
      "martjack": {
        "accounts": [
          {
            "accountId": "VPJBOJA",
            "identifiers": [
              {
                "identifierType": "ETUS",
                "identifierValue": "BCQDUFRAVJ"
              }
            ]
          }
        ]
      },
      "customerId": 5959,
      "jd": {
        "accounts": [
          {
            "accountId": "UMNXDZW",
            "identifiers": [
              {
                "identifierType": "STHCQ",
                "identifierValue": "ZIRTUUBF"
              }
            ]
          }
        ]
      },
      "website": {
        "accounts": [
          {
            "accountId": "PDFYZ",
            "identifiers": [
              {
                "identifierType": "MUQMGBPZV",
                "identifierValue": "VXGLGUC"
              }
            ]
          }
        ]
      },
      "firstName": "ZDIRFJ",
      "instore": {
        "id": 138,
        "mobile": "XRJSE",
        "email": "NSRHEA",
        "externalId": "HIUDPY",
        "cardnumber": "SSPD",
        "cardexternalid": "OXSG",
        "cardNumbers": [
          "XYEAJ"
        ]
      }
    },
    "triggeringActivity": {
      "name": "NGDZMWZO",
      "identifiers": [
        {
          "key": "NPUCCZAEX",
          "value": "NBPWDBX"
        }
      ],
      "enteredBy": {
        "id": 2742,
        "till": {
          "code": "ETQMUQRR",
          "name": "SFGIANG"
        },
        "store": {
          "code": "JJBDHBP",
          "name": "IVUPMZ",
          "externalId": "JCIOOTOTS",
          "externalId1": "PPJ",
          "externalId2": "BTWCKSBHCB"
        }
      },
      "entityInformation": {
        "entityType": "URYLCYG",
        "entityId": 369
      },
      "additionalAttributes": [
        {
          "key": "ENZGM",
          "value": "ROG"
        }
      ]
    },
    "loyaltyProgramId": 7413
  },
  "refId": "DJELPVDBB",
  "loyaltyEventId": "XFB",
  "apiRequestId": "WWC",
  "eventId": "DVSZKK",
  "createdAt": 4875,
  "traceAttributes": {
    "UFQ": "PNAXV",
    "MBNVYGO": "LXXPLPAG",
    "LAM": "YLKJCHZXXS",
    "FPITNPJCI": "QCSLQNZLI",
    "LRGCTET": "CMM"
  },
  "orgId": 933
}
```

## Tier Downgraded Event (tierDowngraded)

Notifies when a user's tier is downgraded. Includes the downgraded tier information.

```json Enriched payload
{
    "apiRequestId": "1344ffd5-7b6f-4af0-a23d-ce354da13c76",
    "createdAt": 1720435042600.0,
    "data": {
        "customerIdentifiers": {
            "customerId": 379499720.0
        },
        "downgradedTierNumber": 1676.0,
        "entityInformation": {
            "entityId": 1676.0,
            "entityType": "entityType"
        },
        "loyaltyProgramDetails": {
            "id": 1676.0,
            "isDefault": null,
            "name": "name",
            "pointsToCurrencyRatio": 1677.0,
            "tiers": null
        },
        "loyaltyProgramId": 1676.0,
        "previousTierNumber": 1676.0,
        "tierExpiryDate": "tierExpiryDate",
        "triggeringActivity": {
            "additionalAttributes": null,
            "enteredBy": null,
            "entityInformation": null,
            "identifiers": null,
            "name": "name"
        }
    },
    "eventId": "ccf65d56-1e34-4282-b9ad-8fe3fe558b74",
    "eventName": "tierDowngraded",
    "loyaltyEventId": null,
    "orgId": 50952.0,
    "refId": "50952_7250807"
}

```
```json Raw payload
{
  "eventName": "tierDowngraded",
  "eventLogId": 1825,
  "data": {
    "customerIdentifiers": {
      "loyaltyType": "YOODUYCJUP",
      "ecommerce": {
        "accounts": [
          {
            "accountId": "YGJNCHBQI",
            "identifiers": [
              {
                "identifierType": "JSM",
                "identifierValue": "OFJHYK"
              }
            ]
          }
        ]
      },
      "lastName": "QOR",
      "facebook": {
        "accounts": [
          {
            "accountId": "WAK",
            "identifiers": [
              {
                "identifierType": "XEXQUHH",
                "identifierValue": "AWXSRHOWJZ"
              }
            ]
          }
        ]
      },
      "wechat": {
        "accounts": [
          {
            "accountId": "DTJF",
            "identifiers": [
              {
                "identifierType": "HHMEZF",
                "identifierValue": "KQGUTL"
              }
            ]
          }
        ]
      },
      "tmall": {
        "accounts": [
          {
            "accountId": "EAMMAM",
            "identifiers": [
              {
                "identifierType": "DVNEB",
                "identifierValue": "OOMOLWEXT"
              }
            ]
          }
        ]
      },
      "toabao": {
        "accounts": [
          {
            "accountId": "XBRMYXQKKP",
            "identifiers": [
              {
                "identifierType": "GKLJ",
                "identifierValue": "WOUSPZDB"
              }
            ]
          }
        ]
      },
      "web_engage": {
        "accounts": [
          {
            "accountId": "LVWSZXOES",
            "identifiers": [
              {
                "identifierType": "MKAL",
                "identifierValue": "TSVKWZEPV"
              }
            ]
          }
        ]
      },
      "line": {
        "accounts": [
          {
            "accountId": "VZJSW",
            "identifiers": [
              {
                "identifierType": "XVO",
                "identifierValue": "IVELUOCX"
              }
            ]
          }
        ]
      },
      "martjack": {
        "accounts": [
          {
            "accountId": "SPPUE",
            "identifiers": [
              {
                "identifierType": "PESE",
                "identifierValue": "DSOAANNIRC"
              }
            ]
          }
        ]
      },
      "customerId": 4685,
      "jd": {
        "accounts": [
          {
            "accountId": "UKFCIZ",
            "identifiers": [
              {
                "identifierType": "YYVR",
                "identifierValue": "EBLKH"
              }
            ]
          }
        ]
      },
      "website": {
        "accounts": [
          {
            "accountId": "MEHBFJSEYK",
            "identifiers": [
              {
                "identifierType": "YNBYEID",
                "identifierValue": "LZZ"
              }
            ]
          }
        ]
      },
      "firstName": "KCVITYKIZV",
      "instore": {
        "id": 4929,
        "mobile": "FXEC",
        "email": "FFA",
        "externalId": "BIAQNIFOYC",
        "cardnumber": "JXCSCWKY",
        "cardexternalid": "MPIIZ",
        "cardNumbers": [
          "FPNIDMM"
        ]
      }
    },
    "entityInformation": {
      "entityType": "PIZITBQFLE",
      "entityId": 3278
    },
    "triggeringActivity": {
      "name": "YEHKLD",
      "identifiers": [
        {
          "key": "LKKZOCUUVO",
          "value": "OQTN"
        }
      ],
      "enteredBy": {
        "id": 4446,
        "till": {
          "code": "NBQEIH",
          "name": "YRDJKCNRGX"
        },
        "store": {
          "code": "PGGQCP",
          "name": "LVSCRHQUAG",
          "externalId": "BMHIY",
          "externalId1": "QZJUHTRPU",
          "externalId2": "PYGG"
        }
      },
      "entityInformation": {
        "entityType": "TSLXLZHO",
        "entityId": 5950
      },
      "additionalAttributes": [
        {
          "key": "NXLL",
          "value": "DSKE"
        }
      ]
    },
    "loyaltyProgramDetails": {
      "id": 5892,
      "name": "GGUZZIBU",
      "isDefault": true,
      "pointsToCurrencyRatio": 3792.889196213459,
      "tiers": [
        {
          "tierNumber": 2117,
          "tierName": "BZEGROSGU"
        }
      ]
    },
    "loyaltyProgramId": 3332,
    "downgradedTierNumber": 8115,
    "previousTierNumber": 3282,
    "tierExpiryDate": "OMFA"
  },
  "refId": "QCUDRP",
  "loyaltyEventId": "LHWARCTUC",
  "apiRequestId": "GFK",
  "eventId": "QCR",
  "createdAt": 333,
  "traceAttributes": {
    "ZXGSBNT": "GUFV",
    "TUOQJZYJS": "RKETYRJTPS",
    "TBGGV": "MEVZTFTRP"
  },
  "orgId": 3346
}
```

## Tier Downgrade Reminder Event (tierDowngradeReminder)

Notifies when a user is approaching a tier downgrade.

```json Enriched payload
{
    "apiRequestId": "1344ffd5-7b6f-4af0-a23d-ce354da13c76",
    "createdAt": 1720440490349.0,
    "data": {
        "currentTierNumber": 1676.0,
        "customerIdentifiers": {
            "customerId": 379499720.0
        },
        "entityInformation": {
            "entityId": 1676.0,
            "entityType": "entityType"
        },
        "loyaltyProgramDetails": {
            "id": 1676.0,
            "isDefault": null,
            "name": "name",
            "pointsToCurrencyRatio": 1677.0,
            "tiers": null
        },
        "loyaltyProgramId": 1676.0,
        "scheduledDowngradeDate": "scheduledDowngradeDate",
        "triggeringActivity": {
            "additionalAttributes": null,
            "enteredBy": null,
            "entityInformation": null,
            "identifiers": null,
            "name": "name"
        }
    },
    "eventId": "ccf65d56-1e34-4282-b9ad-8fe3fe558b74",
    "eventName": "tierDowngradeReminder",
    "loyaltyEventId": null,
    "orgId": 50952.0,
    "refId": "50952_7250807"
}

```
```json Raw payload
{
  "eventName": "tierDowngradeReminder",
  "eventLogId": 8730,
  "data": {
    "customerIdentifiers": {
      "loyaltyType": "REUS",
      "ecommerce": {
        "accounts": [
          {
            "accountId": "DUSRC",
            "identifiers": [
              {
                "identifierType": "VEL",
                "identifierValue": "ECTYGAMPSD"
              }
            ]
          }
        ]
      },
      "lastName": "IZVDRA",
      "facebook": {
        "accounts": [
          {
            "accountId": "EBXQG",
            "identifiers": [
              {
                "identifierType": "VNPFKSE",
                "identifierValue": "YEYVMAEO"
              }
            ]
          }
        ]
      },
      "wechat": {
        "accounts": [
          {
            "accountId": "ZMJUFNZKAV",
            "identifiers": [
              {
                "identifierType": "DZFMK",
                "identifierValue": "JOUQE"
              }
            ]
          }
        ]
      },
      "tmall": {
        "accounts": [
          {
            "accountId": "ZOT",
            "identifiers": [
              {
                "identifierType": "AAQTB",
                "identifierValue": "DVZJDIW"
              }
            ]
          }
        ]
      },
      "toabao": {
        "accounts": [
          {
            "accountId": "YDW",
            "identifiers": [
              {
                "identifierType": "IEWD",
                "identifierValue": "KFATRURK"
              }
            ]
          }
        ]
      },
      "web_engage": {
        "accounts": [
          {
            "accountId": "BBNYQKBY",
            "identifiers": [
              {
                "identifierType": "ZZKTUPERR",
                "identifierValue": "EKDMU"
              }
            ]
          }
        ]
      },
      "line": {
        "accounts": [
          {
            "accountId": "QGGPVL",
            "identifiers": [
              {
                "identifierType": "ZSTLWVP",
                "identifierValue": "CEUGDD"
              }
            ]
          }
        ]
      },
      "martjack": {
        "accounts": [
          {
            "accountId": "XPCIYUEEV",
            "identifiers": [
              {
                "identifierType": "WBI",
                "identifierValue": "QMBBCF"
              }
            ]
          }
        ]
      },
      "customerId": 8045,
      "jd": {
        "accounts": [
          {
            "accountId": "JGWXVUKWEX",
            "identifiers": [
              {
                "identifierType": "TSWSTWQP",
                "identifierValue": "VFQL"
              }
            ]
          }
        ]
      },
      "website": {
        "accounts": [
          {
            "accountId": "YCDTWEJ",
            "identifiers": [
              {
                "identifierType": "JMDF",
                "identifierValue": "NIM"
              }
            ]
          }
        ]
      },
      "firstName": "YLW",
      "instore": {
        "id": 8910,
        "mobile": "XMR",
        "email": "CFKCMKQ",
        "externalId": "IFUMGBVH",
        "cardnumber": "ABHHROZY",
        "cardexternalid": "YUEXW",
        "cardNumbers": [
          "MSSOZFKSSA"
        ]
      }
    },
    "entityInformation": {
      "entityType": "LWLFOFJP",
      "entityId": 5176
    },
    "triggeringActivity": {
      "name": "VDVH",
      "identifiers": [
        {
          "key": "DCOLQQ",
          "value": "LYYMPQFY"
        }
      ],
      "enteredBy": {
        "id": 5836,
        "till": {
          "code": "AUPABQIO",
          "name": "GTRXUNDK"
        },
        "store": {
          "code": "MHQMM",
          "name": "ETABDTYSDD",
          "externalId": "AHQOVMDRDJ",
          "externalId1": "NOYC",
          "externalId2": "UUMUWB"
        }
      },
      "entityInformation": {
        "entityType": "CDYDMBF",
        "entityId": 2237
      },
      "additionalAttributes": [
        {
          "key": "HRGCDKFGJ",
          "value": "CCVYLVUIJO"
        }
      ]
    },
    "loyaltyProgramDetails": {
      "id": 4230,
      "name": "UXN",
      "isDefault": false,
      "pointsToCurrencyRatio": 1546.2598140488274,
      "tiers": [
        {
          "tierNumber": 4219,
          "tierName": "TTD"
        }
      ]
    },
    "loyaltyProgramId": 7629,
    "currentTierNumber": 6832,
    "scheduledDowngradeDate": "HQPASI"
  },
  "refId": "HAZ",
  "loyaltyEventId": "UOJBZ",
  "apiRequestId": "CJAQXWXC",
  "eventId": "LROHUYSYGR",
  "createdAt": 9601,
  "traceAttributes": {
    "SRT": "SMAO",
    "DRXA": "AMNCQKZK",
    "GMEECZH": "NZUQ",
    "BKRCRT": "EJZJFQXVLG",
    "HBQV": "JYS"
  },
  "orgId": 3405
}
```