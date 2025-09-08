---
title: Transaction
deprecated: false
hidden: false
metadata:
  robots: index
---
A transaction represents a purchase or return event made by a customer.

## Transaction Added Event (transactionAdded)

Notifies when a transaction is added. For example, a transaction is made by a user.

| Parameter      | Datatype | Description                                                                                                                                                                                                                                                                              |
| :------------- | :------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| amount         | Double   | Net transaction amount.                                                                                                                                                                                                                                                                  |
| billClientId   | String   | Unique id of the bill as per the client (org) end.                                                                                                                                                                                                                                       |
| billNumber     | String   | Unique transaction number. The uniqueness depends on the configuration.                                                                                                                                                                                                                  |
| enteredAt      |          |                                                                                                                                                                                                                                                                                          |
| enteredBy      | obj      | Details of the store at which the transaction happened.                                                                                                                                                                                                                                  |
| transactionId  | long     | Unique transaction ID generated internally.                                                                                                                                                                                                                                              |
| deliveryStatus | Enum     | Delivery status of the order. Value: PLACED, PROCESSED, SHIPPED, DELIVERED, RETURNED.                                                                                                                                                                                                    |
| billType       | Enum     | Type of transaction. Supported value:  regular for loyalty transactions. ‘RETURN’ for return transactions.                                                                                                                                                                               |
| lineItemCount  | Integer  | Number of line-items in the transaction.                                                                                                                                                                                                                                                 |
| Discount       | Double   | Discount availed for the transaction (discount amount).                                                                                                                                                                                                                                  |
| grossAmount    | Double   | Transaction amount before discount.                                                                                                                                                                                                                                                      |
| currencyCode   | String   | ISO currency code that you want to update. For example EUR for Euro, SGD for the Singapore Dollar, CNY for China Yuan Renminbi, SAR Saudi Riyal. For more codes, see [ISO currency codes](https://docs.1010data.com/1010dataReferenceManual/DataTypesAndFormats/currencyUnitCodes.html). |

```json Enriched payload
{
  "eventId": "7a2716a8-9cc7-4beb-999a-a8f02ad9f02d",
  "eventType": "transactionAdded",
  "consumerGroupId": null,
  "actionType": "STA RT",
  "timeStamp": 1683874800103,
  "attributes": {
    "createdAt": 1683874800089,
    "data": {
      "amount": 89000.0,
      "billNumber": "2_134577_12591538_487122",
      "enteredAt": 1683880160000,
      "transactionId": 65658570,
      "billType": "REGULAR",
      "lineItemCount": 1,
      "discount": 0.0,
      "currencyCode": "IDR",
      "enteredBy": {
        "id": 200280487,
        "till": {
          "code": "prod.shell.id.12591538.1",
          "name ": "prod.shell.id.12591538.1"
        },
        "store": {
          "code": "prod.shell.id.12591538",
          "name": "SHELL JABABEKA-1 BKS",
          "externalId": "12591538",
          "externalId1": "",
          "externalId2": ""
        }
      },
      "customerIdentifiers": {
        "customerId": 3122204,
        "loyaltyType": "loyalty",
        "instore": {
          "mobile": "6285692704128"
        },
        "web_engage": {
          "accounts": [
            {
              "accountId": "~1341059d8",
              "identifiers ": [
                {
                  "identifierType": "cuid",
                  "identifierValue": "6285692704128"
                },
                {
                  "identifierType": "mobile",
                  "identifierValue": "6285692704128"
                }
              ]
            }
          ]
        }
      }
    },
    "eventName": "transactionAdded",
    "refId": "151195_65658570",
    "apiRequestId": "e0c09ab511e9f942526944012967b5c4",
    "orgId": 151195
  }
}
```
```json Raw payload
{
  "eventName": "transactionAdded",
  "eventLogId": 3081,
  "data": {
    "discount": 6772.288685115359,
    "billType": "ZYSRQ",
    "deliveryStatus": "IOZVNVIQR",
    "lineItemCount": 4614,
    "enteredAt": 3157,
    "outlierStatus": "QGCSDDX",
    "customFields": [
      {
        "key": "QPFFCG",
        "value": "FRBFFHGWTJ"
      }
    ],
    "customerIdentifiers": {
      "loyaltyType": "VCMFJZR",
      "ecommerce": {
        "accounts": [
          {
            "accountId": "YNBBFEJMK",
            "identifiers": [
              {
                "identifierType": "IDH",
                "identifierValue": "NBEYPLZ"
              }
            ]
          }
        ]
      },
      "lastName": "CWLYFGKJ",
      "facebook": {
        "accounts": [
          {
            "accountId": "ZGHGULPXAH",
            "identifiers": [
              {
                "identifierType": "MVJRDNON",
                "identifierValue": "NPSFV"
              }
            ]
          }
        ]
      },
      "wechat": {
        "accounts": [
          {
            "accountId": "LRTCPG",
            "identifiers": [
              {
                "identifierType": "ENBP",
                "identifierValue": "XAIQULDPR"
              }
            ]
          }
        ]
      },
      "tmall": {
        "accounts": [
          {
            "accountId": "MPLTQULXT",
            "identifiers": [
              {
                "identifierType": "WEJHCMXT",
                "identifierValue": "CVNZB"
              }
            ]
          }
        ]
      },
      "toabao": {
        "accounts": [
          {
            "accountId": "NFZIHRRN",
            "identifiers": [
              {
                "identifierType": "NOV",
                "identifierValue": "LLVAMSKG"
              }
            ]
          }
        ]
      },
      "web_engage": {
        "accounts": [
          {
            "accountId": "XZONWZAKLN",
            "identifiers": [
              {
                "identifierType": "IWYTVV",
                "identifierValue": "UYDQWCGS"
              }
            ]
          }
        ]
      },
      "line": {
        "accounts": [
          {
            "accountId": "WEMAEFWC",
            "identifiers": [
              {
                "identifierType": "XVZZ",
                "identifierValue": "FGYPCXN"
              }
            ]
          }
        ]
      },
      "martjack": {
        "accounts": [
          {
            "accountId": "MBQQ",
            "identifiers": [
              {
                "identifierType": "XGDHFSPKF",
                "identifierValue": "DYSQU"
              }
            ]
          }
        ]
      },
      "customerId": 8601,
      "jd": {
        "accounts": [
          {
            "accountId": "NQNLD",
            "identifiers": [
              {
                "identifierType": "BOO",
                "identifierValue": "NEJXQDQ"
              }
            ]
          }
        ]
      },
      "website": {
        "accounts": [
          {
            "accountId": "ZKK",
            "identifiers": [
              {
                "identifierType": "ZOONQJGOYB",
                "identifierValue": "NEUQHDZ"
              }
            ]
          }
        ]
      },
      "firstName": "NULQB",
      "instore": {
        "id": 2550,
        "mobile": "VHDEKKZHX",
        "email": "WTRF",
        "externalId": "DFJ",
        "cardnumber": "LYIFFZ",
        "cardexternalid": "YKXVSX",
        "cardNumbers": [
          "WHTABZGI"
        ]
      }
    },
    "billClientId": "GRSSVQJVQJ",
    "enteredBy": {
      "user": {
        "username": "GFXNSUZCB"
      },
      "id": 3346,
      "till": {
        "code": "BDWUEVAAWD",
        "name": "OWYAWDUGBS"
      },
      "store": {
        "code": "FHNB",
        "name": "YHNIDBF",
        "externalId": "CVBJOTZK",
        "externalId1": "PZINK",
        "externalId2": "FXJOUFPDXJ"
      }
    },
    "billNumber": "ZGXHRVH",
    "extendedFields": [
      {
        "key": "SGPVPHAARG",
        "value": "QMM"
      }
    ],
    "billDate": 624,
    "amount": 5916.450492782085,
    "transactionId": 7319,
    "grossAmount": 4894.476461932411,
    "currencyCode": "GRANYLKL"
  },
  "refId": "WHLJCDMQK",
  "loyaltyEventId": "LEPPRSWCS",
  "apiRequestId": "JRY",
  "eventId": "QGCE",
  "createdAt": 5319,
  "traceAttributes": {
    "XVHKSK": "RFQQM",
    "LGVL": "XRZEUSA",
    "YMNACAU": "CMXNURQCR",
    "DMFAUGNVX": "SQOMNPLR"
  },
  "orgId": 4710
}
```

## Transaction Updated Event (transactionUpdated)

Notifies when a transaction is updated. For example, a change to a line-item in a transaction.

| Parameter                                                                             | Datatype | Description                                                                                                                                                                                                                                                                          |
| ------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| amount                                                                                | Double   | Net transaction amount.                                                                                                                                                                                                                                                              |
| billClientId                                                                          | String   | Unique id of the bill as per the client (org) end.                                                                                                                                                                                                                                   |
| billNumber                                                                            | String   | Unique transaction number. The uniqueness depends on the configuration.                                                                                                                                                                                                              |
| enteredAt                                                                             | Long     | Date and time when the transaction was entered in Epoch time format.                                                                                                                                                                                                                 |
| enteredBy                                                                             | obj      | Details of the store at which the transaction happened.                                                                                                                                                                                                                              |
| transactionId                                                                         | long     | Unique transaction ID generated internally.                                                                                                                                                                                                                                          |
| deliveryStatus                                                                        | Enum     | Delivery status of the order. Value: PLACED, PROCESSED, SHIPPED, DELIVERED, RETURNED.                                                                                                                                                                                                |
| Delivery status of the order. Value: PLACED, PROCESSED, SHIPPED, DELIVERED, RETURNED. |          |                                                                                                                                                                                                                                                                                      |
| billType                                                                              | Enum     | Type of transaction. Supported value:  regular for loyalty transactions. ‘RETURN’ for return transactions.                                                                                                                                                                           |
| lineItemCount                                                                         | Integer  | Number of line-items in the transaction.                                                                                                                                                                                                                                             |
| Discount                                                                              | Double   | Discount availed for the transaction (discount amount).                                                                                                                                                                                                                              |
| grossAmount                                                                           | Double   | Transaction amount before discount.                                                                                                                                                                                                                                                  |
| currencyCode                                                                          | String   | ISO currency code that you want to update. For example EUR for Euro, SGD for Singapore Dollar, CNY for China Yuan Renminbi, SAR Saudi Riyal. For more codes, see [ISO currency codes.](https://docs.1010data.com/1010dataReferenceManual/DataTypesAndFormats/currencyUnitCodes.html) |

```json Enriched payload
{
  "eventId": "b9383037-89ce-43a9-9db1-99c5ac96e2b9",
  "eventType": "transactionUpdated",
  "consumerGroupId": null,
  "actionType": "START",
  "timeStamp": 1683874807284,
  "attributes": {
    "createdAt": 1683874807271,
    "data": {
      "amount": 50.0,
      "enteredAt": 1683883802000,
      "transactionId": 65658586,
      "deliveryStatus": "DELIVERED",
      "billType": "REGULAR",
      "discount": 0.0,
      "grossAmount": 0.0,
      "enteredBy": {
        "id": 200315709
      },
      "customerIdentifiers": {
        "customerId": 6675787,
        "instore": {
          "mobile": "609110544825 ",
          "externalId": "6018840184080212"
        }
      }
    },
    "eventName": "transactionUpdated",
    "refId": "151229_65658586",
    "apiRequestId": "0cb47446178e9fa4d66b985087a0f6f5",
    "orgId": 151229
  }
}
```
```json Raw payload
{
  "eventName": "transactionUpdated",
  "eventLogId": 1127,
  "data": {
    "discount": 9612.581950399224,
    "billType": "BGE",
    "deliveryStatus": "NETXLE",
    "lineItemCount": 3767,
    "enteredAt": 1538,
    "outlierStatus": "BGFVC",
    "customFields": [
      {
        "key": "MEZS",
        "value": "TWIS"
      }
    ],
    "customerIdentifiers": {
      "loyaltyType": "ZOCDL",
      "ecommerce": {
        "accounts": [
          {
            "accountId": "LZF",
            "identifiers": [
              {
                "identifierType": "FNHPFPRUG",
                "identifierValue": "PAK"
              }
            ]
          }
        ]
      },
      "lastName": "YJGKOIHD",
      "facebook": {
        "accounts": [
          {
            "accountId": "UYWKNDRZ",
            "identifiers": [
              {
                "identifierType": "JDXXUKUWR",
                "identifierValue": "TFEHWUMC"
              }
            ]
          }
        ]
      },
      "wechat": {
        "accounts": [
          {
            "accountId": "YUJDBPHXE",
            "identifiers": [
              {
                "identifierType": "HIKN",
                "identifierValue": "OOJILZX"
              }
            ]
          }
        ]
      },
      "tmall": {
        "accounts": [
          {
            "accountId": "OKIXZIHII",
            "identifiers": [
              {
                "identifierType": "TFOLAH",
                "identifierValue": "UKDEBZKTC"
              }
            ]
          }
        ]
      },
      "toabao": {
        "accounts": [
          {
            "accountId": "KTZXRLOKH",
            "identifiers": [
              {
                "identifierType": "JGDMVMWQ",
                "identifierValue": "HECEWSCC"
              }
            ]
          }
        ]
      },
      "web_engage": {
        "accounts": [
          {
            "accountId": "QRKNK",
            "identifiers": [
              {
                "identifierType": "IPBXVFJUJ",
                "identifierValue": "XKEHD"
              }
            ]
          }
        ]
      },
      "line": {
        "accounts": [
          {
            "accountId": "LELYAXLHD",
            "identifiers": [
              {
                "identifierType": "UWWAIIEFC",
                "identifierValue": "MAVFAJYKHD"
              }
            ]
          }
        ]
      },
      "martjack": {
        "accounts": [
          {
            "accountId": "SXDVLUFSP",
            "identifiers": [
              {
                "identifierType": "CAWGFBAW",
                "identifierValue": "UXZZO"
              }
            ]
          }
        ]
      },
      "customerId": 5081,
      "jd": {
        "accounts": [
          {
            "accountId": "VYUQZMCJI",
            "identifiers": [
              {
                "identifierType": "GBXPK",
                "identifierValue": "PEOHLH"
              }
            ]
          }
        ]
      },
      "website": {
        "accounts": [
          {
            "accountId": "ZPJ",
            "identifiers": [
              {
                "identifierType": "GUPPHI",
                "identifierValue": "ERYUSWS"
              }
            ]
          }
        ]
      },
      "firstName": "ZZJ",
      "instore": {
        "id": 426,
        "mobile": "TBBAE",
        "email": "TCDAGZMLRS",
        "externalId": "KPNVE",
        "cardnumber": "DESQ",
        "cardexternalid": "IFKJBWJXY",
        "cardNumbers": [
          "UPWVKEOCG"
        ]
      }
    },
    "billClientId": "XOKIUUF",
    "enteredBy": {
      "user": {
        "username": "VYBHMOCGCD"
      },
      "id": 7681,
      "till": {
        "code": "ZDV",
        "name": "FFPZJX"
      },
      "store": {
        "code": "BDQUOGFJ",
        "name": "KNVICFMFL",
        "externalId": "QWQL",
        "externalId1": "GSJ",
        "externalId2": "SVVWGX"
      }
    },
    "billNumber": "QNYNEUWCA",
    "extendedFields": [
      {
        "key": "WAF",
        "value": "BIDSMDKD"
      }
    ],
    "billDate": 1834,
    "amount": 597.6608711697584,
    "transactionId": 6510,
    "grossAmount": 8786.296895839632,
    "currencyCode": "QRZAKLF"
  },
  "refId": "HPAV",
  "loyaltyEventId": "KIN",
  "apiRequestId": "UZJ",
  "eventId": "ZRRIA",
  "createdAt": 6648,
  "traceAttributes": {
    "TDQ": "QKKSDN",
    "TEXYXJYBC": "CQWC",
    "VWXMRC": "VWL",
    "TOEMFBSCZ": "DTTCATF",
    "NGASPHMI": "RNUAEKY",
    "XDADMPBE": "FTBH"
  },
  "orgId": 8653
}
```

## Not-Interested Bill Added Event (notInterestedBillAdded)

Notifies when a non-loyalty transaction is made by a user. A non-loyalty or not-interested transaction refers to a purchase made by a user who is not interested in registering for the organisation's loyalty program.

```json Raw payload
{
  "eventName": "notInterestedBillAdded",
  "data": {
    "amount": 9511.0960402456,
    "billClientId": "MZIMAB",
    "billNumber": "RGSMQ",
    "billDate": 1503,
    "enteredAt": 1733,
    "transactionId": 7378,
    "deliveryStatus": "DDRNZJM",
    "billType": "ZNGPNUHI",
    "lineItemCount": 6252,
    "discount": 5424.653652820183,
    "grossAmount": 1025.554923312577,
    "currencyCode": "BYULP",
    "enteredBy": {
      "user": {
        "username": "MFTQNKS"
      },
      "id": 7668,
      "till": {
        "code": "PNJVSZF",
        "name": "LWXKSK"
      },
      "store": {
        "code": "EHO",
        "name": "CWZJGRRFBP",
        "externalId": "ULALNJPS",
        "externalId1": "MYMCSLEBN",
        "externalId2": "GZD"
      }
    },
    "customerIdentifiers": {
      "customerId": 9191,
      "firstName": "AMXUQD",
      "lastName": "FIIG",
      "loyaltyType": "SZGSV",
      "instore": {
        "id": 6296,
        "mobile": "MPERH",
        "email": "NRDTCIPXRF",
        "externalId": "AYCRFBIYDP",
        "cardnumber": "XKWWFAHKYS",
        "cardexternalid": "DIVQ",
        "cardNumbers": [
          "KDGWBPMNVI"
        ]
      },
      "facebook": {
        "accounts": [
          {
            "accountId": "ROL",
            "identifiers": [
              {
                "identifierType": "RDCDIG",
                "identifierValue": "RYCSJLLF"
              }
            ]
          }
        ]
      },
      "web_engage": {
        "accounts": [
          {
            "accountId": "GNNBOIEH",
            "identifiers": [
              {
                "identifierType": "CNOBXSKXF",
                "identifierValue": "FSSJ"
              }
            ]
          }
        ]
      },
      "wechat": {
        "accounts": [
          {
            "accountId": "RATNLSNXZB",
            "identifiers": [
              {
                "identifierType": "HUNGZBIXGC",
                "identifierValue": "CYXGXRN"
              }
            ]
          }
        ]
      },
      "martjack": {
        "accounts": [
          {
            "accountId": "WNTBGCPZ",
            "identifiers": [
              {
                "identifierType": "GJPHRFZD",
                "identifierValue": "SYPRX"
              }
            ]
          }
        ]
      },
      "tmall": {
        "accounts": [
          {
            "accountId": "PENK",
            "identifiers": [
              {
                "identifierType": "ZFBXIOIP",
                "identifierValue": "ZDVGEVGM"
              }
            ]
          }
        ]
      },
      "toabao": {
        "accounts": [
          {
            "accountId": "KFRNVWJ",
            "identifiers": [
              {
                "identifierType": "GWPCHK",
                "identifierValue": "LEZVBXPS"
              }
            ]
          }
        ]
      },
      "jd": {
        "accounts": [
          {
            "accountId": "ZBCPPDNCEE",
            "identifiers": [
              {
                "identifierType": "SXQSLUJKR",
                "identifierValue": "SOR"
              }
            ]
          }
        ]
      },
      "ecommerce": {
        "accounts": [
          {
            "accountId": "VVWU",
            "identifiers": [
              {
                "identifierType": "ZQAQDU",
                "identifierValue": "YZKB"
              }
            ]
          }
        ]
      },
      "website": {
        "accounts": [
          {
            "accountId": "TRTEMZ",
            "identifiers": [
              {
                "identifierType": "KSAMFDO",
                "identifierValue": "GBNYYKLN"
              }
            ]
          }
        ]
      },
      "line": {
        "accounts": [
          {
            "accountId": "UOULQ",
            "identifiers": [
              {
                "identifierType": "MYVZHLDPZ",
                "identifierValue": "CMJ"
              }
            ]
          }
        ]
      }
    },
    "customFields": [
      {
        "key": "DRSOD",
        "value": "FLBMAO"
      }
    ],
    "extendedFields": [
      {
        "key": "ZLPRWB",
        "value": "CCLW"
      }
    ],
    "outlierStatus": "ULQMAHABTM"
  },
  "eventId": "ZLPVW",
  "orgId": 6590,
  "refId": "FJGZUWELJ",
  "apiRequestId": "BSIYSAGPO",
  "createdAt": 8426,
  "loyaltyEventId": "HAHCUOJ",
  "traceAttributes": {
    "NNILCE": "AGLNT",
    "TNHIFECFF": "ANPQHIP",
    "YLKNQYS": "RJDV",
    "TVFIRAJBS": "QGKKN"
  }
}
```

## Transaction Rejected Event (transactionRejected)

Notifies when a transaction is rejected.

```json Raw payload
{
        "eventName": "transactionRejected",
        "data": {
            "customerIdentifiers": {
                "customerId": 90,
                "firstName": "CNNQGEZ",
                "lastName": "PQXW",
                "loyaltyType": "DOZ",
                "instore": {
                    "id": 6608,
                    "mobile": "NSLUWGF",
                    "email": "XDQVVRLT",
                    "externalId": "EDGPJIAPSF",
                    "cardnumber": "HAQT",
                    "cardexternalid": "CLPASCFKA",
                    "cardNumbers": [
                        "FKTW"
                    ]
                },
                "facebook": {
                    "accounts": [
                        {
                            "accountId": "ASG",
                            "identifiers": [
                                {
                                    "identifierType": "AGOAZGL",
                                    "identifierValue": "BWVUMDU"
                                }
                            ]
                        }
                    ]
                },
                "web_engage": {
                    "accounts": [
                        {
                            "accountId": "WRI",
                            "identifiers": [
                                {
                                    "identifierType": "NAUUKTJPZ",
                                    "identifierValue": "HCBSJFBDW"
                                }
                            ]
                        }
                    ]
                },
                "wechat": {
                    "accounts": [
                        {
                            "accountId": "ZOLP",
                            "identifiers": [
                                {
                                    "identifierType": "DANAXFPLF",
                                    "identifierValue": "DJEFIEZOR"
                                }
                            ]
                        }
                    ]
                },
                "martjack": {
                    "accounts": [
                        {
                            "accountId": "SYZVLWQGN",
                            "identifiers": [
                                {
                                    "identifierType": "BHV",
                                    "identifierValue": "YNYYUJXJPR"
                                }
                            ]
                        }
                    ]
                },
                "tmall": {
                    "accounts": [
                        {
                            "accountId": "DJXP",
                            "identifiers": [
                                {
                                    "identifierType": "PMZMJ",
                                    "identifierValue": "XVKZRWJ"
                                }
                            ]
                        }
                    ]
                },
                "toabao": {
                    "accounts": [
                        {
                            "accountId": "AQJD",
                            "identifiers": [
                                {
                                    "identifierType": "UNKMR",
                                    "identifierValue": "MJZG"
                                }
                            ]
                        }
                    ]
                },
                "jd": {
                    "accounts": [
                        {
                            "accountId": "TZGP",
                            "identifiers": [
                                {
                                    "identifierType": "YZJHL",
                                    "identifierValue": "ZYHCUKZZ"
                                }
                            ]
                        }
                    ]
                },
                "ecommerce": {
                    "accounts": [
                        {
                            "accountId": "BXTYHDI",
                            "identifiers": [
                                {
                                    "identifierType": "BPZG",
                                    "identifierValue": "ATPZ"
                                }
                            ]
                        }
                    ]
                },
                "website": {
                    "accounts": [
                        {
                            "accountId": "EXZRURCY",
                            "identifiers": [
                                {
                                    "identifierType": "BYXFCPAEK",
                                    "identifierValue": "CKDMTRUBB"
                                }
                            ]
                        }
                    ]
                },
                "line": {
                    "accounts": [
                        {
                            "accountId": "NJD",
                            "identifiers": [
                                {
                                    "identifierType": "ARGJJYWN",
                                    "identifierValue": "NDORVKDJAH"
                                }
                            ]
                        }
                    ]
                }
            },
            "eventDateTime": "JHSIB",
            "billNumber": "BWMIWH",
            "rejectionType": "NFJ",
            "rejectionDetails": [
                {
                    "rejectionReason": "QITIFBIBDJ",
                    "reasonDetails": "TDZISVBS"
                }
            ],
            "retrialCount": 6284,
            "triggeringActivity": {
                "name": "UTTUZSBS",
                "identifiers": [
                    {
                        "key": "QNAWENU",
                        "value": "FRGOFCKKSK"
                    }
                ],
                "enteredBy": {
                    "id": 2471,
                    "till": {
                        "code": "XLBTXXATJ",
                        "name": "KWVYCIVWBO"
                    },
                    "store": {
                        "code": "FYEOUL",
                        "name": "PAYDQ",
                        "externalId": "QFDJV",
                        "externalId1": "VYUZFCOD",
                        "externalId2": "ZLYY"
                    }
                },
                "entityInformation": {
                    "entityType": "WWUWWPR",
                    "entityId": 1238
                },
                "additionalAttributes": [
                    {
                        "key": "CIRLEOO",
                        "value": "ORDUGBVU"
                    }
                ]
            }
        },
        "eventId": "OALOT",
        "orgId": 8078,
        "refId": "NOE",
        "apiRequestId": "DZAMIMDS",
        "createdAt": 7772,
        "loyaltyEventId": "NGCGBPTBI",
        "traceAttributes": {
            "FANKP": "ANY",
            "CQMWGE": "HCGZ",
            "IBVHSDVRND": "JAN",
            "GSQD": "ONSGR"
        }
    }
```

## Rejected Transaction Retrigger Event (rejectedTransactionRetrigger)

Notifies when a rejected transaction is attempted again.

```json Raw payload
{
        "eventName": "rejectedTransactionRetrigger",
        "data": {
            "customerIdentifiers": {
                "customerId": 9595,
                "firstName": "QEJGUGHY",
                "lastName": "THVC",
                "loyaltyType": "APQIUHE",
                "instore": {
                    "id": 2835,
                    "mobile": "FTUIGLWD",
                    "email": "ANIPX",
                    "externalId": "DFGJB",
                    "cardnumber": "EFQPZYZF",
                    "cardexternalid": "UAYUK",
                    "cardNumbers": [
                        "OYWBJEWGIU"
                    ]
                },
                "facebook": {
                    "accounts": [
                        {
                            "accountId": "OSNN",
                            "identifiers": [
                                {
                                    "identifierType": "BAOL",
                                    "identifierValue": "MNOZBSFPAC"
                                }
                            ]
                        }
                    ]
                },
                "web_engage": {
                    "accounts": [
                        {
                            "accountId": "ZQFRLUM",
                            "identifiers": [
                                {
                                    "identifierType": "RKGAZJT",
                                    "identifierValue": "TRPZ"
                                }
                            ]
                        }
                    ]
                },
                "wechat": {
                    "accounts": [
                        {
                            "accountId": "UKUDHYD",
                            "identifiers": [
                                {
                                    "identifierType": "STWXLN",
                                    "identifierValue": "CGOCCBPS"
                                }
                            ]
                        }
                    ]
                },
                "martjack": {
                    "accounts": [
                        {
                            "accountId": "RYHBEYKGQ",
                            "identifiers": [
                                {
                                    "identifierType": "DQDNYUIBL",
                                    "identifierValue": "DWQJRYQPR"
                                }
                            ]
                        }
                    ]
                },
                "tmall": {
                    "accounts": [
                        {
                            "accountId": "BRAVYC",
                            "identifiers": [
                                {
                                    "identifierType": "QWHIIXCVF",
                                    "identifierValue": "PSPDV"
                                }
                            ]
                        }
                    ]
                },
                "toabao": {
                    "accounts": [
                        {
                            "accountId": "EECAGMAD",
                            "identifiers": [
                                {
                                    "identifierType": "TFC",
                                    "identifierValue": "CFBSQNBQRD"
                                }
                            ]
                        }
                    ]
                },
                "jd": {
                    "accounts": [
                        {
                            "accountId": "VQZONUJIB",
                            "identifiers": [
                                {
                                    "identifierType": "CYBUXMOF",
                                    "identifierValue": "XBICTDHNA"
                                }
                            ]
                        }
                    ]
                },
                "ecommerce": {
                    "accounts": [
                        {
                            "accountId": "GJW",
                            "identifiers": [
                                {
                                    "identifierType": "OWFXY",
                                    "identifierValue": "GAEEN"
                                }
                            ]
                        }
                    ]
                },
                "website": {
                    "accounts": [
                        {
                            "accountId": "ALHXBZQSTS",
                            "identifiers": [
                                {
                                    "identifierType": "DTVPMET",
                                    "identifierValue": "AXJYVR"
                                }
                            ]
                        }
                    ]
                },
                "line": {
                    "accounts": [
                        {
                            "accountId": "JPIEAWV",
                            "identifiers": [
                                {
                                    "identifierType": "WTPCZHBMJ",
                                    "identifierValue": "JNZ"
                                }
                            ]
                        }
                    ]
                }
            },
            "eventDateTime": "TIDHRBDOF",
            "billNumber": "JAMKHUFNOP",
            "rejectionType": "KNXUYAA",
            "rejectionDetailsOnRetrigger": [
                {
                    "rejectionReason": "OBIL",
                    "reasonDetails": "LMQEYFF"
                }
            ],
            "retrialCount": 866,
            "triggeringActivity": {
                "name": "HQTLAVU",
                "identifiers": [
                    {
                        "key": "JMHN",
                        "value": "WNZQEUF"
                    }
                ],
                "enteredBy": {
                    "id": 8342,
                    "till": {
                        "code": "RJLOI",
                        "name": "OBZAWOQDN"
                    },
                    "store": {
                        "code": "QIWLI",
                        "name": "AJMYRS",
                        "externalId": "VLNLOOWLL",
                        "externalId1": "PMZDHIY",
                        "externalId2": "HRI"
                    }
                },
                "entityInformation": {
                    "entityType": "PYSJUYUXDN",
                    "entityId": 7530
                },
                "additionalAttributes": [
                    {
                        "key": "DCI",
                        "value": "KDYCNBUFPZ"
                    }
                ]
            },
            "retriggerId": 7372
        },
        "eventId": "PVBYY",
        "orgId": 798,
        "refId": "XLA",
        "apiRequestId": "JQAN",
        "createdAt": 6409,
        "loyaltyEventId": "QWKWI",
        "traceAttributes": {
            "HNEHCDMBFQ": "AXCKBG",
            "VSEV": "RCO",
            "SDQLIPN": "IGYVFCJIPN"
        }
    }
```

## Retro Bill Added Event (retroBillAdded)

Notifies when an older transaction is added against the user.

```json Raw payload
{
        "eventName": "retroBillAdded",
        "data": {
            "amount": 246.66453103260665,
            "billClientId": "EFJNGO",
            "billNumber": "XADYJHTNZ",
            "billDate": 1157,
            "enteredAt": 3765,
            "transactionId": 5650,
            "deliveryStatus": "BLQMATBU",
            "billType": "GMV",
            "lineItemCount": 8791,
            "discount": 8154.318560422623,
            "grossAmount": 8109.952753195439,
            "currencyCode": "YBND",
            "enteredBy": {
                "user": {
                    "username": "PDBLNVJOMJ"
                },
                "id": 8822,
                "till": {
                    "code": "PYSIVN",
                    "name": "XLSCOHGLQX"
                },
                "store": {
                    "code": "PSHIA",
                    "name": "GBJIQ",
                    "externalId": "IPHXYWR",
                    "externalId1": "YXAV",
                    "externalId2": "GVYYMAF"
                }
            },
            "customerIdentifiers": {
                "customerId": 7264,
                "firstName": "PVKZNFPPTL",
                "lastName": "TCJHTJY",
                "loyaltyType": "ZBLKXAQ",
                "instore": {
                    "id": 2582,
                    "mobile": "ROFWZ",
                    "email": "VTPP",
                    "externalId": "USDYHBYUG",
                    "cardnumber": "IVWBJFA",
                    "cardexternalid": "TVQVR",
                    "cardNumbers": [
                        "VATLAPHTK"
                    ]
                },
                "facebook": {
                    "accounts": [
                        {
                            "accountId": "MHHRRNJ",
                            "identifiers": [
                                {
                                    "identifierType": "TWFDWZGJ",
                                    "identifierValue": "QCXFAKBG"
                                }
                            ]
                        }
                    ]
                },
                "web_engage": {
                    "accounts": [
                        {
                            "accountId": "KNJBNFL",
                            "identifiers": [
                                {
                                    "identifierType": "PUNLANYWWF",
                                    "identifierValue": "JDCP"
                                }
                            ]
                        }
                    ]
                },
                "wechat": {
                    "accounts": [
                        {
                            "accountId": "ZEHSPZISU",
                            "identifiers": [
                                {
                                    "identifierType": "GQBXBW",
                                    "identifierValue": "WBWEEGISH"
                                }
                            ]
                        }
                    ]
                },
                "martjack": {
                    "accounts": [
                        {
                            "accountId": "CXTIKNECEZ",
                            "identifiers": [
                                {
                                    "identifierType": "SUTZDRYYTL",
                                    "identifierValue": "QMTIN"
                                }
                            ]
                        }
                    ]
                },
                "tmall": {
                    "accounts": [
                        {
                            "accountId": "WHWJ",
                            "identifiers": [
                                {
                                    "identifierType": "DOUSHFNSI",
                                    "identifierValue": "XEL"
                                }
                            ]
                        }
                    ]
                },
                "toabao": {
                    "accounts": [
                        {
                            "accountId": "IVHIFFM",
                            "identifiers": [
                                {
                                    "identifierType": "VANKJHXR",
                                    "identifierValue": "UIZRV"
                                }
                            ]
                        }
                    ]
                },
                "jd": {
                    "accounts": [
                        {
                            "accountId": "BSFKRKK",
                            "identifiers": [
                                {
                                    "identifierType": "WMZPVYCLNS",
                                    "identifierValue": "VOJ"
                                }
                            ]
                        }
                    ]
                },
                "ecommerce": {
                    "accounts": [
                        {
                            "accountId": "JUXCZQI",
                            "identifiers": [
                                {
                                    "identifierType": "WJGCEWGRD",
                                    "identifierValue": "UCMPSQ"
                                }
                            ]
                        }
                    ]
                },
                "website": {
                    "accounts": [
                        {
                            "accountId": "TMUQQK",
                            "identifiers": [
                                {
                                    "identifierType": "ITMASKHY",
                                    "identifierValue": "YGTPVBCNCW"
                                }
                            ]
                        }
                    ]
                },
                "line": {
                    "accounts": [
                        {
                            "accountId": "CYQNJXF",
                            "identifiers": [
                                {
                                    "identifierType": "RKMW",
                                    "identifierValue": "AFXL"
                                }
                            ]
                        }
                    ]
                }
            },
            "customFields": [
                {
                    "key": "CURI",
                    "value": "BSSCEBNI"
                }
            ],
            "extendedFields": [
                {
                    "key": "ZEEJJXW",
                    "value": "XSP"
                }
            ],
            "outlierStatus": "WJLRMBFI"
        },
        "eventId": "SZGDD",
        "orgId": 708,
        "refId": "GABCYPOGH",
        "apiRequestId": "JSNJHDS",
        "createdAt": 2888,
        "loyaltyEventId": "PZNF",
        "traceAttributes": {
            "DEH": "HEPGWRPKG",
            "SUUMEX": "YBNSTCBE",
            "AXSIBTZFR": "DLYRHXGN"
        }
    }
```