---
title: Loyalty
deprecated: false
hidden: false
metadata:
  robots: index
---
# Milestone (Targets) & Streaks

This section contains the schemas of various milestones (also called targets) related event notifications. These will be sent to the respective brand's webhooks which brands can consume & use at their end.

**Supported event notifications are:**

1. Target Achieved Value Updated event
2. Target Value Updated event
3. Target Value Achieved event
4. Target period start
5. Target period end
6. Unified target achieved
7. Unified target un-achieved
8. Target enrollment
9. Streak level achievement
10. Streak level unachievement
11. Streak enrolment
12. Streak unenrolment
13. Streak start
14. Streak end

## Target Achieved Value Updated event (targetAchievedValueUpdated)

Notifies when a target achieved value has been updated. For example, a user purchases a line-item that updates the target value.

```json Enriched payload
{
  "eventId": "58aa15c9-1a08-422d-9272-f2a1cdc3f8c1",
  "eventType": "1000006_targetAchievedValueUpdated",
  "consumerGroupId": null,
  "actionType": "START",
  " timeStamp": 1683867642403,
  "attributes": {
    "createdAt": 1683867642385,
    "data": {
      "customerIdentifiers": {
        "customerId": 85950037
      },
      "eventName": "TransactionAdd",
      "eventId": 15,
      "targetDetails": {
        "id": 243,
        "name": "League Stage Reward_TxnCount1",
        "targetGroupId": 163,
        "targetGroupName": "League Stage Reward",
        "targetPeriodId": 61,
        "targetPeriodName": "L1"
      },
      "currentE ventTargetValue": "1",
      "achievedTargetValue": "14.000",
      "definedTargetValue": "1.000",
      "triggeringActivity": {
        "name": "TransactionAdd",
        "identifiers": [
          {
            "key": "TransactionId",
            "value": "175771018"
          }
        ],
        "enteredBy": {
          "id": 100007771
        },
        "additionalAttributes": [
          
        ]
      },
      "milestoneDetails": [
        
      ],
      "transactionId": 175771018
    },
    "loyaltyEventId": "",
    "eventName": "targetAchievedValueUpdated",
    "refId": "1000006_d4658fc5bd809b780b32ad88b1e3c442",
    "apiRequestId": "d4658fc5bd809b780b32ad88b1e3c442",
    "orgId": 1000006
  }
}
```
```json Raw payload
{
  "eventName": "targetAchievedValueUpdated",
  "eventLogId": 6566,
  "data": {
    "eventName": "RAR",
    "returnId": 4698,
    "customerIdentifiers": {
      "loyaltyType": "QPQQMYZJ",
      "ecommerce": {
        "accounts": [
          {
            "accountId": "BXHNZC",
            "identifiers": [
              {
                "identifierType": "ZOHT",
                "identifierValue": "JLEXNQYUM"
              }
            ]
          }
        ]
      },
      "lastName": "IMZCIYC",
      "facebook": {
        "accounts": [
          {
            "accountId": "UBMOPJG",
            "identifiers": [
              {
                "identifierType": "EJQWWBLLI",
                "identifierValue": "CJEHNEZ"
              }
            ]
          }
        ]
      },
      "wechat": {
        "accounts": [
          {
            "accountId": "SFQFCGVG",
            "identifiers": [
              {
                "identifierType": "GQV",
                "identifierValue": "TWNB"
              }
            ]
          }
        ]
      },
      "tmall": {
        "accounts": [
          {
            "accountId": "MXGBCKMH",
            "identifiers": [
              {
                "identifierType": "SBUGNXIUOL",
                "identifierValue": "VGZWFM"
              }
            ]
          }
        ]
      },
      "toabao": {
        "accounts": [
          {
            "accountId": "RNZ",
            "identifiers": [
              {
                "identifierType": "LSYCYDL",
                "identifierValue": "YBPLUPTQG"
              }
            ]
          }
        ]
      },
      "web_engage": {
        "accounts": [
          {
            "accountId": "TUAWSRL",
            "identifiers": [
              {
                "identifierType": "XQCNU",
                "identifierValue": "YJT"
              }
            ]
          }
        ]
      },
      "line": {
        "accounts": [
          {
            "accountId": "YFHDXLP",
            "identifiers": [
              {
                "identifierType": "ALKMUTI",
                "identifierValue": "CVKAK"
              }
            ]
          }
        ]
      },
      "martjack": {
        "accounts": [
          {
            "accountId": "MLA",
            "identifiers": [
              {
                "identifierType": "YGFOI",
                "identifierValue": "MKYJCJ"
              }
            ]
          }
        ]
      },
      "customerId": 6301,
      "jd": {
        "accounts": [
          {
            "accountId": "ANTLCKOJDU",
            "identifiers": [
              {
                "identifierType": "IUG",
                "identifierValue": "DODVE"
              }
            ]
          }
        ]
      },
      "website": {
        "accounts": [
          {
            "accountId": "GXU",
            "identifiers": [
              {
                "identifierType": "CPHB",
                "identifierValue": "WINMK"
              }
            ]
          }
        ]
      },
      "firstName": "WCLFI",
      "instore": {
        "id": 4345,
        "mobile": "UTXVQD",
        "email": "VRUSFI",
        "externalId": "VJQMKQBS",
        "cardnumber": "NBW",
        "cardexternalid": "PYUAGLI",
        "cardNumbers": [
          "JIHRR"
        ]
      }
    },
    "achievedTargetValue": "ZQRKTKE",
    "targetDetails": {
      "id": 873,
      "name": "ICA",
      "targetGroupId": 1443,
      "targetGroupName": "THL",
      "targetPeriodId": 8559,
      "targetPeriodName": "RYUCN",
      "description": "OPDET"
    },
    "milestoneDetails": [
      {
        "id": 4773,
        "name": "JIKFKDWOCF",
        "valueType": "JFSOCAYVT",
        "definedValue": "STXTEHH",
        "achievedDate": 9046
      }
    ],
    "eventId": 9513,
    "definedTargetValue": "CSLH",
    "triggeringActivity": {
      "name": "RRMN",
      "identifiers": [
        {
          "key": "ZMUKIBU",
          "value": "XHMOQE"
        }
      ],
      "enteredBy": {
        "id": 8226,
        "till": {
          "code": "TDQCP",
          "name": "UNXLMUETIR"
        },
        "store": {
          "code": "QFVJFQTHD",
          "name": "ZPVY",
          "externalId": "HOKRDWTEXE",
          "externalId1": "FOW",
          "externalId2": "DJG"
        }
      },
      "entityInformation": {
        "entityType": "JMGQE",
        "entityId": 8048
      },
      "additionalAttributes": [
        {
          "key": "UWGILITT",
          "value": "MAAJT"
        }
      ]
    },
    "transactionId": 7432,
    "currentEventTargetValue": "FNV"
  },
  "refId": "GEBXY",
  "loyaltyEventId": "XXZN",
  "apiRequestId": "ZYMMWH",
  "eventId": "KDXZ",
  "createdAt": 5872,
  "traceAttributes": {
    "EXCFXTIP": "LOVQGHIT",
    "TYSCD": "MZRKMVL",
    "KDODJVGTNT": "HSDU",
    "MZRORNVURX": "HRXB",
    "USZJVPLG": "ZWCSEMOOY",
    "QURVSOP": "HSLUFIYC"
  },
  "orgId": 1048
}
```

## Target Value Achieved Event

Notifies when a user achieves the set target.

```json Enriched payload
{
  "eventId": "59589150-8626-4841-bfc5-9f53f81af6ec",
  "eventType": "2013_targetValueAchieved",
  "consumerGroupId": "1eb18702-acaf-463c-91f8-39acc62a7c97",
  "actionType": "START",
  "timeSta mp": 1683878597209,
  "attributes": {
    "createdAt": 1683878590899,
    "data": {
      "customerIdentifiers": {
        "customerId": 504662785
      },
      "eventName": "TransactionAdd",
      "eventId": 15,
      "targetDetails": {
        "id": 2112,
        "name": "Order more times via app or ahente to earn points",
        "targetGroupId": 1065,
        "targetGroupName": "Mission_1_May2023_Omni_Frequency",
        "targetPeriodId": 1462,
        "target PeriodName": "P1"
      },
      "currentEventTargetValue": "1",
      "achievedTargetValue": "3.000",
      "definedTargetValue": "3.000",
      "triggeringActivity": {
        "name": "TransactionAdd",
        "identifiers": [
          {
            "key": "TransactionId",
            "value": "240560693"
          }
        ],
        "enteredBy": {
          "id": 13026505
        },
        "additionalAttributes": [
          
        ]
      },
      "transactionId": 240560693
    },
    "loyaltyEventId": "",
    "eventName": "targetValueAchieved",
    "refId": "2013_77e8f7100269c43d7869f786e85972c3",
    "apiRequestId": "77e8f7100269c43d7869f786e85972c3",
    "orgId": 2013
  }
}
```
```json Raw payload
{
  "eventName": "targetValueAchieved",
  "eventLogId": 3397,
  "data": {
    "eventName": "WUFHOV",
    "customerIdentifiers": {
      "loyaltyType": "HYXZ",
      "ecommerce": {
        "accounts": [
          {
            "accountId": "NGKYMEHJLI",
            "identifiers": [
              {
                "identifierType": "BOKPJV",
                "identifierValue": "TPC"
              }
            ]
          }
        ]
      },
      "lastName": "GCGKWRNNLW",
      "facebook": {
        "accounts": [
          {
            "accountId": "INU",
            "identifiers": [
              {
                "identifierType": "UXEOHDBNVN",
                "identifierValue": "RNIVT"
              }
            ]
          }
        ]
      },
      "wechat": {
        "accounts": [
          {
            "accountId": "CTTE",
            "identifiers": [
              {
                "identifierType": "VLQ",
                "identifierValue": "VNXSMWKF"
              }
            ]
          }
        ]
      },
      "tmall": {
        "accounts": [
          {
            "accountId": "ELB",
            "identifiers": [
              {
                "identifierType": "DDNHPVC",
                "identifierValue": "ZLPWGKRKB"
              }
            ]
          }
        ]
      },
      "toabao": {
        "accounts": [
          {
            "accountId": "OTVECG",
            "identifiers": [
              {
                "identifierType": "LXREHT",
                "identifierValue": "VOHGIQHJLE"
              }
            ]
          }
        ]
      },
      "web_engage": {
        "accounts": [
          {
            "accountId": "NNS",
            "identifiers": [
              {
                "identifierType": "VMUJP",
                "identifierValue": "KEP"
              }
            ]
          }
        ]
      },
      "line": {
        "accounts": [
          {
            "accountId": "QEEZUHTAOP",
            "identifiers": [
              {
                "identifierType": "MJRF",
                "identifierValue": "ZDVWOVXLP"
              }
            ]
          }
        ]
      },
      "martjack": {
        "accounts": [
          {
            "accountId": "VMUMALIDJT",
            "identifiers": [
              {
                "identifierType": "GAPUWVUS",
                "identifierValue": "CLTVJSM"
              }
            ]
          }
        ]
      },
      "customerId": 5075,
      "jd": {
        "accounts": [
          {
            "accountId": "LMMW",
            "identifiers": [
              {
                "identifierType": "GTGRSHBCL",
                "identifierValue": "BCTSZUMAEM"
              }
            ]
          }
        ]
      },
      "website": {
        "accounts": [
          {
            "accountId": "HYDOOXRA",
            "identifiers": [
              {
                "identifierType": "DWSCCIQ",
                "identifierValue": "RPZ"
              }
            ]
          }
        ]
      },
      "firstName": "YBNUVAUN",
      "instore": {
        "id": 3066,
        "mobile": "NHKLPZH",
        "email": "CIKCMZXTQH",
        "externalId": "DQYVOQU",
        "cardnumber": "ECUD",
        "cardexternalid": "VXHMKZG",
        "cardNumbers": [
          "ZNI"
        ]
      }
    },
    "achievedTargetValue": "UIGCWPK",
    "targetDetails": {
      "id": 9896,
      "name": "VZRTEXXJCW",
      "targetGroupId": 6976,
      "targetGroupName": "CWK",
      "targetPeriodId": 8331,
      "targetPeriodName": "ALTYXBFEM",
      "description": "SBD"
    },
    "eventId": 5954,
    "definedTargetValue": "BVTTNIXWBI",
    "triggeringActivity": {
      "name": "SPUBWL",
      "identifiers": [
        {
          "key": "RUQ",
          "value": "CXBVJMEZ"
        }
      ],
      "enteredBy": {
        "id": 3908,
        "till": {
          "code": "HSUK",
          "name": "ZMERTC"
        },
        "store": {
          "code": "FFJ",
          "name": "QMLQW",
          "externalId": "AEYRD",
          "externalId1": "DQSZANY",
          "externalId2": "SVJPOLVP"
        }
      },
      "entityInformation": {
        "entityType": "IYA",
        "entityId": 7034
      },
      "additionalAttributes": [
        {
          "key": "GFELJJPZ",
          "value": "NDJMMA"
        }
      ]
    },
    "transactionId": 3021,
    "currentEventTargetValue": "BMTA"
  },
  "refId": "QNVRLBP",
  "loyaltyEventId": "BTOUQ",
  "apiRequestId": "CYEY",
  "eventId": "PAANAM",
  "createdAt": 5670,
  "traceAttributes": {
    "MJVKBWFW": "OQEGKXDXY",
    "POVGANWU": "LKES",
    "LAQJNBOR": "MFQLVYE"
  },
  "orgId": 7184
}
```

## Target Period Completed Event

Notifies the completion of a target period for a user.

```json Raw payload
{
        "eventName": "targetPeriodCompleted",
        "data": {
            "customerIdentifiers": {
                "customerId": 5986,
                "firstName": "GUJZCZBJE",
                "lastName": "XWCPPWAMF",
                "loyaltyType": "SVDSH",
                "instore": {
                    "id": 8219,
                    "mobile": "XBTHUHTK",
                    "email": "RUFMWNJNM",
                    "externalId": "EOXUQ",
                    "cardnumber": "CCNCTWARTF",
                    "cardexternalid": "YKJJHOYINJ",
                    "cardNumbers": [
                        "QUKDYUHJTX"
                    ]
                },
                "facebook": {
                    "accounts": [
                        {
                            "accountId": "LGATUJCHVG",
                            "identifiers": [
                                {
                                    "identifierType": "TFTSLQJ",
                                    "identifierValue": "ADZ"
                                }
                            ]
                        }
                    ]
                },
                "web_engage": {
                    "accounts": [
                        {
                            "accountId": "JWHYLGF",
                            "identifiers": [
                                {
                                    "identifierType": "XGCPOK",
                                    "identifierValue": "ARBYGKFUR"
                                }
                            ]
                        }
                    ]
                },
                "wechat": {
                    "accounts": [
                        {
                            "accountId": "UIAU",
                            "identifiers": [
                                {
                                    "identifierType": "QGPSOLJWY",
                                    "identifierValue": "ABUY"
                                }
                            ]
                        }
                    ]
                },
                "martjack": {
                    "accounts": [
                        {
                            "accountId": "CMOV",
                            "identifiers": [
                                {
                                    "identifierType": "GHLRL",
                                    "identifierValue": "ZZE"
                                }
                            ]
                        }
                    ]
                },
                "tmall": {
                    "accounts": [
                        {
                            "accountId": "TGT",
                            "identifiers": [
                                {
                                    "identifierType": "JKZPAYK",
                                    "identifierValue": "UVTFCI"
                                }
                            ]
                        }
                    ]
                },
                "toabao": {
                    "accounts": [
                        {
                            "accountId": "BGPJCYHFT",
                            "identifiers": [
                                {
                                    "identifierType": "XUOMQIAASX",
                                    "identifierValue": "WJFUBKGWD"
                                }
                            ]
                        }
                    ]
                },
                "jd": {
                    "accounts": [
                        {
                            "accountId": "CRNXIEHP",
                            "identifiers": [
                                {
                                    "identifierType": "QADMZCEA",
                                    "identifierValue": "IEC"
                                }
                            ]
                        }
                    ]
                },
                "ecommerce": {
                    "accounts": [
                        {
                            "accountId": "KXRELR",
                            "identifiers": [
                                {
                                    "identifierType": "HJANHON",
                                    "identifierValue": "NKLFYVI"
                                }
                            ]
                        }
                    ]
                },
                "website": {
                    "accounts": [
                        {
                            "accountId": "YTSUEBY",
                            "identifiers": [
                                {
                                    "identifierType": "XPRT",
                                    "identifierValue": "NFQGOV"
                                }
                            ]
                        }
                    ]
                },
                "line": {
                    "accounts": [
                        {
                            "accountId": "XKZJLT",
                            "identifiers": [
                                {
                                    "identifierType": "OUQHSDMVR",
                                    "identifierValue": "RNOJZ"
                                }
                            ]
                        }
                    ]
                }
            },
            "targetDetails": {
                "id": 1599,
                "name": "PXWHUGOHE",
                "targetGroupId": 1311,
                "targetGroupName": "NETQVIXEVZ",
                "targetPeriodId": 2736,
                "targetPeriodName": "KXJAEGWS",
                "description": "LADGQW"
            },
            "achievedTargetValue": "BMPPHDS",
            "definedTargetValue": "XIMIYEHQN",
            "triggeringActivity": {
                "name": "QNKC",
                "identifiers": [
                    {
                        "key": "ACOLY",
                        "value": "MXKTX"
                    }
                ],
                "enteredBy": {
                    "id": 6210,
                    "till": {
                        "code": "BBPBE",
                        "name": "LMV"
                    },
                    "store": {
                        "code": "LVE",
                        "name": "APUKKQDD",
                        "externalId": "VESBCXFCY",
                        "externalId1": "FDPZKOWYF",
                        "externalId2": "GNEOA"
                    }
                },
                "entityInformation": {
                    "entityType": "RBSFDUIB",
                    "entityId": 6103
                },
                "additionalAttributes": [
                    {
                        "key": "RROIITNZ",
                        "value": "QSNJZ"
                    }
                ]
            },
            "milestoneDetails": [
                {
                    "id": 1298,
                    "name": "OOTNIFWHA",
                    "valueType": "LYV",
                    "definedValue": "HSPDZUF",
                    "achievedDate": 4440
                }
            ]
        },
        "eventId": "EKY",
        "orgId": 7257,
        "refId": "SRGCV",
        "apiRequestId": "UFEQCNEEH",
        "createdAt": 7915,
        "loyaltyEventId": "TFHBNGXBN",
        "traceAttributes": {
            "ZJIPBBO": "QDHIQ",
            "HDBA": "UDJH",
            "KPEFS": "DPCCYBUEK"
        }
    }
```

## Target Value Update Event

Notifies when the target value associated with the user has been updated.

```json Raw payload
{
        "eventName": "targetValueUpdated",
        "data": {
            "customerIdentifiers": {
                "customerId": 2527,
                "firstName": "XYJJSKE",
                "lastName": "CHEMK",
                "loyaltyType": "ZFZYJ",
                "instore": {
                    "id": 8709,
                    "mobile": "OIATBO",
                    "email": "CMMTLDMF",
                    "externalId": "YKHVT",
                    "cardnumber": "PRXJJD",
                    "cardexternalid": "MOBNDIV",
                    "cardNumbers": [
                        "NNVIFQK"
                    ]
                },
                "facebook": {
                    "accounts": [
                        {
                            "accountId": "YBNVGBQRE",
                            "identifiers": [
                                {
                                    "identifierType": "EIAOXKYBFN",
                                    "identifierValue": "KNTE"
                                }
                            ]
                        }
                    ]
                },
                "web_engage": {
                    "accounts": [
                        {
                            "accountId": "PTDPSXK",
                            "identifiers": [
                                {
                                    "identifierType": "CYXZZFCPC",
                                    "identifierValue": "COMAT"
                                }
                            ]
                        }
                    ]
                },
                "wechat": {
                    "accounts": [
                        {
                            "accountId": "LOOBI",
                            "identifiers": [
                                {
                                    "identifierType": "WBLMJFUV",
                                    "identifierValue": "BSNGZGTBN"
                                }
                            ]
                        }
                    ]
                },
                "martjack": {
                    "accounts": [
                        {
                            "accountId": "JAMV",
                            "identifiers": [
                                {
                                    "identifierType": "VBZDYU",
                                    "identifierValue": "VAUYPP"
                                }
                            ]
                        }
                    ]
                },
                "tmall": {
                    "accounts": [
                        {
                            "accountId": "YXIBKT",
                            "identifiers": [
                                {
                                    "identifierType": "CBG",
                                    "identifierValue": "OCSPJDBBJ"
                                }
                            ]
                        }
                    ]
                },
                "toabao": {
                    "accounts": [
                        {
                            "accountId": "IBGOYQBB",
                            "identifiers": [
                                {
                                    "identifierType": "YCQTDRBVO",
                                    "identifierValue": "NUPUY"
                                }
                            ]
                        }
                    ]
                },
                "jd": {
                    "accounts": [
                        {
                            "accountId": "HFVEV",
                            "identifiers": [
                                {
                                    "identifierType": "JOTOS",
                                    "identifierValue": "ZASD"
                                }
                            ]
                        }
                    ]
                },
                "ecommerce": {
                    "accounts": [
                        {
                            "accountId": "FNQORHYAPB",
                            "identifiers": [
                                {
                                    "identifierType": "CSDXMSJS",
                                    "identifierValue": "LWMIA"
                                }
                            ]
                        }
                    ]
                },
                "website": {
                    "accounts": [
                        {
                            "accountId": "DSHEA",
                            "identifiers": [
                                {
                                    "identifierType": "FXWCVW",
                                    "identifierValue": "ZGGMS"
                                }
                            ]
                        }
                    ]
                },
                "line": {
                    "accounts": [
                        {
                            "accountId": "JENIHL",
                            "identifiers": [
                                {
                                    "identifierType": "NDCCF",
                                    "identifierValue": "WUY"
                                }
                            ]
                        }
                    ]
                }
            },
            "targetDetails": {
                "id": 4143,
                "name": "SVHXO",
                "targetGroupId": 9705,
                "targetGroupName": "OHELNMDXMK",
                "targetPeriodId": 1203,
                "targetPeriodName": "UNT",
                "description": "SJCCPZROZ"
            },
            "achievedTargetValue": "OSKRYFAUAY",
            "definedTargetValue": "SXDA"
        },
        "eventId": "OWCGLNF",
        "orgId": 7660,
        "refId": "CLRNYYI",
        "apiRequestId": "YFHG",
        "createdAt": 3061,
        "loyaltyEventId": "YMBME",
        "traceAttributes": {
            "UEPWFKEEF": "GBCEMWAK",
            "WLZCFWHSDA": "HIUJ",
            "ZGTKWB": "HPOONUTW",
            "HJPLYIPS": "EOHYCVJMQY"
        }
    }
```

## Unified Target Achieved Event

Notifies when a user achieves the set target for a unified target.

```json Enriched payload
{
  "event": {
    "body": {
      "apiRequestId": "8725941269715d666d0d18d7ba1d4137",
      "createdAt": 1714025846289,
      "data": {
        "customerIdentifiers": {
          "customerId": 383453066,
          "instore": {
            "mobile": "916661610044"
          },
          "loyaltyType": "loyalty"
        },
        "targetData": [
          {
            "achievedTargetValue": "3000.000",
            "definedTargetValue": "1000.000",
            "targetId": 49272,
            "targetName": "TARGETSFORUNIFIED1",
            "targetPeriodId": 32436,
            "targetPeriodName": "Period1"
          }
        ],
        "transactionId": 2151566715,
        "triggeringActivity": {
          "additionalAttributes": [],
          "enteredBy": {
            "id": 50670145,
            "store": {
              "code": "cc_1",
              "externalId": "cc1",
              "externalId1": "",
              "externalId2": "",
              "name": "CentralZone1"
            },
            "till": {
              "code": "tillhg",
              "name": "tillhg"
            }
          },
          "identifiers": [
            {
              "key": "eventLogId",
              "value": "26192434"
            },
            {
              "key": "transactionId",
              "value": "2151566715"
            }
          ],
          "name": "TransactionAdd"
        },
        "unifiedTargetGroupDetails": {
          "targetGroupId": 25780,
          "targetGroupName": "uniFIEDTargetsANYCase",
          "unifiedTargetsAchievementCondition": {
            "aggregation": "SUM",
            "combinationType": "ANY",
            "ruleExpression": "(49272 | 49273 | 49274)",
            "thresholdValue": 5000
          }
        }
      },
      "eventId": "aa1fabd3-7dac-4e15-8d4a-3a1c75e80d5d",
      "eventName": "unifiedTargetsAchieved",
      "loyaltyEventId": "26192434",
      "orgId": 51174,
      "refId": "51174_8725941269715d666d0d18d7ba1d4137"
    },
    "client_ip": "3.225.18.198",
    "headers": {
      "": ":",
      "accept": "text/plain, application/json, application*+json, **",
      "content-length": "1168",
      "content-type": "application/json",
      "host": "eo9bacvfjgkxwz6.m.pipedream.net",
      "user-agent": "Java/1.8.0_272"
    },
    "method": "POST",
    "path": "",
    "query": {},
    "url": "https://eo9bacvfjgkxwz6.m.pipedream.net"
  }
}
```
```json Raw payload
{
  "eventName": "unifiedTargetsAchieved",
  "eventLogId": 6340,
  "data": {
    "customerIdentifiers": {
      "loyaltyType": "IXNO",
      "ecommerce": {
        "accounts": [
          {
            "accountId": "JECUNAOYLE",
            "identifiers": [
              {
                "identifierType": "AFMRM",
                "identifierValue": "UYIDFMQ"
              }
            ]
          }
        ]
      },
      "lastName": "QNGZEJE",
      "facebook": {
        "accounts": [
          {
            "accountId": "AGBBPDQUUD",
            "identifiers": [
              {
                "identifierType": "GOFEZBI",
                "identifierValue": "ESZWDDUBX"
              }
            ]
          }
        ]
      },
      "wechat": {
        "accounts": [
          {
            "accountId": "CSORBW",
            "identifiers": [
              {
                "identifierType": "RXE",
                "identifierValue": "GFATDRH"
              }
            ]
          }
        ]
      },
      "tmall": {
        "accounts": [
          {
            "accountId": "BIAIZZT",
            "identifiers": [
              {
                "identifierType": "LMOQBLYQAC",
                "identifierValue": "HHICE"
              }
            ]
          }
        ]
      },
      "toabao": {
        "accounts": [
          {
            "accountId": "YKVAP",
            "identifiers": [
              {
                "identifierType": "SSAPFHINH",
                "identifierValue": "QAF"
              }
            ]
          }
        ]
      },
      "web_engage": {
        "accounts": [
          {
            "accountId": "AKMFPJOCCX",
            "identifiers": [
              {
                "identifierType": "DHPOJRYOC",
                "identifierValue": "PMXOKHEAS"
              }
            ]
          }
        ]
      },
      "line": {
        "accounts": [
          {
            "accountId": "MFEQYIZZA",
            "identifiers": [
              {
                "identifierType": "RTQJ",
                "identifierValue": "LFZQ"
              }
            ]
          }
        ]
      },
      "martjack": {
        "accounts": [
          {
            "accountId": "IYIYS",
            "identifiers": [
              {
                "identifierType": "MSYD",
                "identifierValue": "YDHMA"
              }
            ]
          }
        ]
      },
      "customerId": 6815,
      "jd": {
        "accounts": [
          {
            "accountId": "AZFSNOJ",
            "identifiers": [
              {
                "identifierType": "XBMIWYNHRZ",
                "identifierValue": "PSKNF"
              }
            ]
          }
        ]
      },
      "website": {
        "accounts": [
          {
            "accountId": "QCZNNOLU",
            "identifiers": [
              {
                "identifierType": "FAEZHNTS",
                "identifierValue": "HPIQMC"
              }
            ]
          }
        ]
      },
      "firstName": "ZIX",
      "instore": {
        "id": 2387,
        "mobile": "QXQEXMEDCV",
        "email": "BFKQAR",
        "externalId": "SDQMND",
        "cardnumber": "OIL",
        "cardexternalid": "PHAPER",
        "cardNumbers": [
          "RDWLLKJF"
        ]
      }
    },
    "unifiedTargetGroupDetails": {
      "targetGroupId": 9726,
      "targetGroupName": "AVXZUFOEOB",
      "unifiedTargetsAchievementCondition": {
        "combinationType": "UKHOMVAANU",
        "aggregation": "REFYAQYOY",
        "thresholdValue": 7483.875766644563,
        "ruleExpression": "ZEMGCDTE"
      }
    },
    "targetData": [
      {
        "targetId": 3368,
        "targetName": "SPVZ",
        "description": "HRSBMWCQKQ",
        "targetPeriodId": 5830,
        "targetPeriodName": "BNDWHWTTX",
        "achievedTargetValue": "GNLKXBT",
        "definedTargetValue": "NDMWMRHNUQ"
      }
    ],
    "triggeringActivity": {
      "name": "MPTQLIMYH",
      "identifiers": [
        {
          "key": "LORH",
          "value": "ZUONMA"
        }
      ],
      "enteredBy": {
        "id": 9773,
        "till": {
          "code": "APCT",
          "name": "QMD"
        },
        "store": {
          "code": "CBOR",
          "name": "XMZSUBASF",
          "externalId": "CAIBIXE",
          "externalId1": "UXYE",
          "externalId2": "JRMFWJOQXS"
        }
      },
      "entityInformation": {
        "entityType": "LVP",
        "entityId": 3316
      },
      "additionalAttributes": [
        {
          "key": "KDUDJBGK",
          "value": "DOQJD"
        }
      ]
    },
    "transactionId": 6753
  },
  "refId": "HVTG",
  "loyaltyEventId": "RXJ",
  "apiRequestId": "KHMJKJKTJ",
  "eventId": "JYH",
  "createdAt": 886,
  "traceAttributes": {
    "TOG": "MRPWPBPR",
    "VQY": "PSYNFHKJP"
  },
  "orgId": 3294
}
```

## Unified Target Unachieved Event

Notifies when a user does not meet the defined unified target within the time frame.

```json Enriched payload
{
  "event": {
    "body": {
      "apiRequestId": "8725941269715d666d0d18d7ba1d4137",
      "createdAt": 1714025846289,
      "data": {
        "customerIdentifiers": {
          "customerId": 383453066,
          "instore": {
            "mobile": "916661610044"
          },
          "loyaltyType": "loyalty"
        },
        "targetData": [
          {
            "achievedTargetValue": "1000.000",
            "definedTargetValue": "3000.000",
            "targetId": 49272,
            "targetName": "TARGETSFORUNIFIED1",
            "targetPeriodId": 32436,
            "targetPeriodName": "Period1"
          }
        ],
        "transactionId": 2151566715,
        "triggeringActivity": {
          "additionalAttributes": [],
          "enteredBy": {
            "id": 50670145,
            "store": {
              "code": "cc_1",
              "externalId": "cc1",
              "externalId1": "",
              "externalId2": "",
              "name": "CentralZone1"
            },
            "till": {
              "code": "tillhg",
              "name": "tillhg"
            }
          },
          "identifiers": [
            {
              "key": "eventLogId",
              "value": "26192434"
            },
            {
              "key": "transactionId",
              "value": "2151566715"
            }
          ],
          "name": "TransactionAdd"
        },
        "unifiedTargetGroupDetails": {
          "targetGroupId": 25780,
          "targetGroupName": "uniFIEDTargetsANYCase",
          "unifiedTargetsAchievementCondition": {
            "aggregation": "SUM",
            "combinationType": "ANY",
            "ruleExpression": "(49272 | 49273 | 49274)",
            "thresholdValue": 5000
          }
        }
      },
      "eventId": "aa1fabd3-7dac-4e15-8d4a-3a1c75e80d5d",
      "eventName": "unifiedTargetsUnAchieved",
      "loyaltyEventId": "26192434",
      "orgId": 51174,
      "refId": "51174_8725941269715d666d0d18d7ba1d4137"
    },
    "client_ip": "3.225.18.198",
    "headers": {
      "": ":",
      "accept": "text/plain, application/json, application*+json, **",
      "content-length": "1168",
      "content-type": "application/json",
      "host": "eo9bacvfjgkxwz6.m.pipedream.net",
      "user-agent": "Java/1.8.0_272"
    },
    "method": "POST",
    "path": "",
    "query": {},
    "url": "https://eo9bacvfjgkxwz6.m.pipedream.net"
  }
}
```
```json Raw payload
{
  "eventName": "unifiedTargetsUnAchieved",
  "eventLogId": 3634,
  "data": {
    "customerIdentifiers": {
      "loyaltyType": "PDPG",
      "ecommerce": {
        "accounts": [
          {
            "accountId": "UCN",
            "identifiers": [
              {
                "identifierType": "ANUX",
                "identifierValue": "ZJBLALXCMF"
              }
            ]
          }
        ]
      },
      "lastName": "ACQFRS",
      "facebook": {
        "accounts": [
          {
            "accountId": "ZUWOVPM",
            "identifiers": [
              {
                "identifierType": "XCTKUSNBHD",
                "identifierValue": "NXPS"
              }
            ]
          }
        ]
      },
      "wechat": {
        "accounts": [
          {
            "accountId": "TQPVFPGOT",
            "identifiers": [
              {
                "identifierType": "PUUBZK",
                "identifierValue": "XQDCL"
              }
            ]
          }
        ]
      },
      "tmall": {
        "accounts": [
          {
            "accountId": "RVGAFBPF",
            "identifiers": [
              {
                "identifierType": "NMS",
                "identifierValue": "SFHTUPLSXX"
              }
            ]
          }
        ]
      },
      "toabao": {
        "accounts": [
          {
            "accountId": "OAKZYOPL",
            "identifiers": [
              {
                "identifierType": "GRSNSSM",
                "identifierValue": "KPK"
              }
            ]
          }
        ]
      },
      "web_engage": {
        "accounts": [
          {
            "accountId": "SIUWAQ",
            "identifiers": [
              {
                "identifierType": "AUSDQBHAF",
                "identifierValue": "AMCFZPDF"
              }
            ]
          }
        ]
      },
      "line": {
        "accounts": [
          {
            "accountId": "TYIAEWNHQ",
            "identifiers": [
              {
                "identifierType": "IISJGIZ",
                "identifierValue": "URWSQEQSJG"
              }
            ]
          }
        ]
      },
      "martjack": {
        "accounts": [
          {
            "accountId": "SAQOJ",
            "identifiers": [
              {
                "identifierType": "GMAJ",
                "identifierValue": "WFVGRUHDOG"
              }
            ]
          }
        ]
      },
      "customerId": 7274,
      "jd": {
        "accounts": [
          {
            "accountId": "BIYKA",
            "identifiers": [
              {
                "identifierType": "CVMNUQIIM",
                "identifierValue": "SIVIF"
              }
            ]
          }
        ]
      },
      "website": {
        "accounts": [
          {
            "accountId": "YFOJCWEDC",
            "identifiers": [
              {
                "identifierType": "YEXNUCAH",
                "identifierValue": "OCJRLECJI"
              }
            ]
          }
        ]
      },
      "firstName": "EARRFRJAC",
      "instore": {
        "id": 2369,
        "mobile": "LXKDWPL",
        "email": "RFFHLHNLH",
        "externalId": "JREFZNAN",
        "cardnumber": "BRBSVH",
        "cardexternalid": "NNTNPS",
        "cardNumbers": [
          "MECFYRX"
        ]
      }
    },
    "unifiedTargetGroupDetails": {
      "targetGroupId": 6502,
      "targetGroupName": "KMIDEZRT",
      "unifiedTargetsAchievementCondition": {
        "combinationType": "IHHZJWBGH",
        "aggregation": "JRAT",
        "thresholdValue": 7675.6239400302065,
        "ruleExpression": "VWXZMESF"
      }
    },
    "targetData": [
      {
        "targetId": 4921,
        "targetName": "JWKZPHAPI",
        "description": "FRDPNSR",
        "targetPeriodId": 1699,
        "targetPeriodName": "BCWL",
        "achievedTargetValue": "RRCZLEJLA",
        "definedTargetValue": "WCFEIPXU"
      }
    ],
    "triggeringActivity": {
      "name": "YOBWLQ",
      "identifiers": [
        {
          "key": "QSPDDXB",
          "value": "AIJTHWY"
        }
      ],
      "enteredBy": {
        "id": 6126,
        "till": {
          "code": "TQIXNICIRA",
          "name": "BLNIMMUX"
        },
        "store": {
          "code": "LCADVU",
          "name": "HKB",
          "externalId": "IYRZCPMU",
          "externalId1": "WJTR",
          "externalId2": "MXYF"
        }
      },
      "entityInformation": {
        "entityType": "EMCRLMRJ",
        "entityId": 3196
      },
      "additionalAttributes": [
        {
          "key": "KNTXHLIR",
          "value": "AHDG"
        }
      ]
    },
    "transactionId": 1901
  },
  "refId": "CHLSXTT",
  "loyaltyEventId": "XXGVXY",
  "apiRequestId": "UMVNDQCJXA",
  "eventId": "WIPI",
  "createdAt": 1885,
  "traceAttributes": {
    "ZUWL": "NUDAG",
    "IOIB": "UDLJZEBI"
  },
  "orgId": 1306
}
```

## Target Customer Enrolment Event (targetCustomerEnrolment)

Notifies when a user is enrolled on a target. You can send multiple event notifications to customers enrolled in a particular target.

```json Raw payload
{
  "eventName": "targetCustomerEnrolment",
  "data": {
    "customerIdentifiers": {
      "customerId": 3863,
      "firstName": "ZYXM",
      "lastName": "CARSDEV",
      "loyaltyType": "SIVLVXMVE",
      "instore": {
        "id": 6872,
        "mobile": "DIILHYLYRD",
        "email": "HFQ",
        "externalId": "LLHXQ",
        "cardnumber": "APXQS",
        "cardexternalid": "WJEZRPNFU",
        "cardNumbers": [
          "VDD"
        ]
      },
      "facebook": {
        "accounts": [
          {
            "accountId": "ZDP",
            "identifiers": [
              {
                "identifierType": "EZP",
                "identifierValue": "FEWINPWR"
              }
            ]
          }
        ]
      },
      "web_engage": {
        "accounts": [
          {
            "accountId": "GKX",
            "identifiers": [
              {
                "identifierType": "YDSHYPMUA",
                "identifierValue": "NRQOD"
              }
            ]
          }
        ]
      },
      "wechat": {
        "accounts": [
          {
            "accountId": "JBSCNCML",
            "identifiers": [
              {
                "identifierType": "GKFKW",
                "identifierValue": "ADFPJV"
              }
            ]
          }
        ]
      },
      "martjack": {
        "accounts": [
          {
            "accountId": "NPRVZFORG",
            "identifiers": [
              {
                "identifierType": "BZYTTJ",
                "identifierValue": "QVKCNXL"
              }
            ]
          }
        ]
      },
      "tmall": {
        "accounts": [
          {
            "accountId": "GBTFHRL",
            "identifiers": [
              {
                "identifierType": "APEBBUYIL",
                "identifierValue": "FGDBFKW"
              }
            ]
          }
        ]
      },
      "toabao": {
        "accounts": [
          {
            "accountId": "WFP",
            "identifiers": [
              {
                "identifierType": "LYZL",
                "identifierValue": "RBZKCLKTJZ"
              }
            ]
          }
        ]
      },
      "jd": {
        "accounts": [
          {
            "accountId": "VUNVO",
            "identifiers": [
              {
                "identifierType": "WBYHSEEVV",
                "identifierValue": "ELQ"
              }
            ]
          }
        ]
      },
      "ecommerce": {
        "accounts": [
          {
            "accountId": "KNRHNX",
            "identifiers": [
              {
                "identifierType": "MHKJBWXI",
                "identifierValue": "YVOZRS"
              }
            ]
          }
        ]
      },
      "website": {
        "accounts": [
          {
            "accountId": "JBUXMV",
            "identifiers": [
              {
                "identifierType": "YEDSYML",
                "identifierValue": "LCTGZYOQS"
              }
            ]
          }
        ]
      },
      "line": {
        "accounts": [
          {
            "accountId": "FARKLZ",
            "identifiers": [
              {
                "identifierType": "PCWWVGHWIB",
                "identifierValue": "XLUG"
              }
            ]
          }
        ]
      }
    },
    "eventId": 1094,
    "defaultTargetValue": "UMWTEP",
    "targetId": 1456,
    "targetName": "OXQJJMLAG",
    "targetGroupId": 5363,
    "targetGroupName": "RLUGUR",
    "source": "FET",
    "targetPeriodId": 4769,
    "targetPeriodName": "PIHT",
    "targetPeriodStartDate": "WFPMVEL",
    "targetCycleStartDate": "RTFWEJ",
    "description": "FXAFKFIVEY",
    "milestoneDetails": [
      {
        "id": 5552,
        "name": "QTRPSQVLQ",
        "valueType": "PUNHMJGV",
        "definedValue": "XYYYVWFU",
        "achievedDate": 3143
      }
    ]
  },
  "eventId": "SYTR",
  "orgId": 2849,
  "refId": "MGLM",
  "apiRequestId": "ZOFC",
  "createdAt": 7503,
  "loyaltyEventId": "OSTAYD",
  "traceAttributes": {
    "ICXXIEWRMY": "NZSWXC",
    "GGI": "JHBDOPEU",
    "EKFH": "ERISPQKPC",
    "ASFKYUGZ": "LXWDOUB",
    "BSDBPAQO": "GKROUZ",
    "RQHNHM": "NCV"
  }
}
```

## Target Period Started Event (targetPeriodStarted)

Notifies when the target evaluation period begins.

```json Raw payload
{
        "eventName": "targetPeriodStarted",
        "data": {
            "customerIdentifiers": {
                "customerId": 944,
                "firstName": "CZARYVMKF",
                "lastName": "RPXRUGG",
                "loyaltyType": "PLBGRGTZNX",
                "instore": {
                    "id": 1512,
                    "mobile": "BNKTEF",
                    "email": "SRPPS",
                    "externalId": "IHPJPCL",
                    "cardnumber": "TZOH",
                    "cardexternalid": "AUBGKG",
                    "cardNumbers": [
                        "MPRXJYP"
                    ]
                },
                "facebook": {
                    "accounts": [
                        {
                            "accountId": "FJV",
                            "identifiers": [
                                {
                                    "identifierType": "STSMQYVVM",
                                    "identifierValue": "JLI"
                                }
                            ]
                        }
                    ]
                },
                "web_engage": {
                    "accounts": [
                        {
                            "accountId": "PJIET",
                            "identifiers": [
                                {
                                    "identifierType": "XEOQWAOND",
                                    "identifierValue": "XINNUEU"
                                }
                            ]
                        }
                    ]
                },
                "wechat": {
                    "accounts": [
                        {
                            "accountId": "FAGFWQ",
                            "identifiers": [
                                {
                                    "identifierType": "VDFH",
                                    "identifierValue": "KZJTOJ"
                                }
                            ]
                        }
                    ]
                },
                "martjack": {
                    "accounts": [
                        {
                            "accountId": "XTXA",
                            "identifiers": [
                                {
                                    "identifierType": "RSOQULQNSZ",
                                    "identifierValue": "MCEHRADG"
                                }
                            ]
                        }
                    ]
                },
                "tmall": {
                    "accounts": [
                        {
                            "accountId": "IBKGNWDB",
                            "identifiers": [
                                {
                                    "identifierType": "AXMRPNTJQY",
                                    "identifierValue": "AIRRYPX"
                                }
                            ]
                        }
                    ]
                },
                "toabao": {
                    "accounts": [
                        {
                            "accountId": "DIFODDNTTN",
                            "identifiers": [
                                {
                                    "identifierType": "KPQPXMPXYM",
                                    "identifierValue": "OMWKQVJWH"
                                }
                            ]
                        }
                    ]
                },
                "jd": {
                    "accounts": [
                        {
                            "accountId": "JUUG",
                            "identifiers": [
                                {
                                    "identifierType": "UAU",
                                    "identifierValue": "NKIEHDD"
                                }
                            ]
                        }
                    ]
                },
                "ecommerce": {
                    "accounts": [
                        {
                            "accountId": "VEH",
                            "identifiers": [
                                {
                                    "identifierType": "OIXFTACHSM",
                                    "identifierValue": "PBR"
                                }
                            ]
                        }
                    ]
                },
                "website": {
                    "accounts": [
                        {
                            "accountId": "GYXFXWSCP",
                            "identifiers": [
                                {
                                    "identifierType": "SCOZM",
                                    "identifierValue": "CTFKH"
                                }
                            ]
                        }
                    ]
                },
                "line": {
                    "accounts": [
                        {
                            "accountId": "GPEDITVWUC",
                            "identifiers": [
                                {
                                    "identifierType": "HPKES",
                                    "identifierValue": "TCDGIESALU"
                                }
                            ]
                        }
                    ]
                }
            },
            "targetDetails": {
                "id": 4091,
                "name": "MVHRMHKSD",
                "targetGroupId": 2897,
                "targetGroupName": "QAWWVAJG",
                "targetPeriodId": 4150,
                "targetPeriodName": "MQLYD",
                "description": "DBHC"
            },
            "definedTargetValue": "FTHEHKWXP",
            "triggeringActivity": {
                "name": "AIWRCMKFRL",
                "identifiers": [
                    {
                        "key": "QYUEZXDEYT",
                        "value": "NCP"
                    }
                ],
                "enteredBy": {
                    "id": 8462,
                    "till": {
                        "code": "QUCODGXO",
                        "name": "OPQPSXR"
                    },
                    "store": {
                        "code": "UTDJUF",
                        "name": "KEQHWO",
                        "externalId": "KCGA",
                        "externalId1": "CGVDP",
                        "externalId2": "IKCJKQ"
                    }
                },
                "entityInformation": {
                    "entityType": "BACCBZTNDI",
                    "entityId": 2909
                },
                "additionalAttributes": [
                    {
                        "key": "TUR",
                        "value": "UGMZXUWHWM"
                    }
                ]
            }
        },
        "eventId": "YIF",
        "orgId": 3507,
        "refId": "MQBEA",
        "apiRequestId": "ITNQLRIUYS",
        "createdAt": 1681,
        "loyaltyEventId": "WYNP",
        "traceAttributes": {
            "BOOSGYM": "QLJDUSNG",
            "XIE": "TNX",
            "MKT": "ALMK",
            "TOHI": "BHVNVQ"
        }
    }
```

## Streak Level Achievement Event (streakLevelAchieved)

Notifies when a user has achieved a streak level.

```json Enriched payload

{
    "eventId": "e91fd520-7765-4b09-951d-300ba47b5f8d",
    "eventType": "streakLevelAchieved",
    "consumerGroupId": null,
    "actionType": "START",
    "timeStamp": 1719841226275,
    "attributes": {
        "createdAt": 1719841226189,
        "data": {
            "customerIdentifiers": {
                "customerId": 345875284
            },
            "streakData": [
                {
                    "userCurrentStreakValue": "1",
                    "streakLevelName": "test_streak_achievement_EN_1",
                    "streakName": "test_streak_achievement_EN_1",
                    "streakId": "5717",
                    "userStreakId": "61401",
                    "streakLevelAchievedDate": "2024-07-01T13:40:26.172+0000"
                }
            ],
            "targetData": [
                {
                    "id": 90856,
                    "name": "test_streak_achievement_EN",
                    "targetGroupId": 42728,
                    "targetGroupName": "test_streak_achievement_EN",
                    "targetPeriodId": 53200,
                    "targetPeriodName": "Cycle_2"
                }
            ],
            "triggeringActivity": {
                "name": "TransactionAdd",
                "identifiers": [
                    {
                        "key": "eventLogId",
                        "value": "12529131"
                    },
                    {
                        "key": "transactionId",
                        "value": "null"
                    }
                ],
                "enteredBy": {},
                "additionalAttributes": []
            }
        },
        "loyaltyEventId": "12529131",
        "eventName": "streakLevelAchieved",
        "refId": "50282_ee19addfc1c74a506ef735ee0757e191",
        "apiRequestId": "ee19addfc1c74a506ef735ee0757e191",
        "orgId": 50282
    }
}
```
```json Raw payload
{
  "eventName": "streakLevelAchieved",
  "eventLogId": 2496,
  "data": {
    "customerIdentifiers": {
      "loyaltyType": "NTJLH",
      "ecommerce": {
        "accounts": [
          {
            "accountId": "TTECHCYDY",
            "identifiers": [
              {
                "identifierType": "BBBUVUIJVU",
                "identifierValue": "KCKTPIL"
              }
            ]
          }
        ]
      },
      "lastName": "UXRIS",
      "facebook": {
        "accounts": [
          {
            "accountId": "RTUTCSKOYM",
            "identifiers": [
              {
                "identifierType": "AISKKZM",
                "identifierValue": "HKL"
              }
            ]
          }
        ]
      },
      "wechat": {
        "accounts": [
          {
            "accountId": "XNPHQDQJL",
            "identifiers": [
              {
                "identifierType": "XEC",
                "identifierValue": "PXCOZLPT"
              }
            ]
          }
        ]
      },
      "tmall": {
        "accounts": [
          {
            "accountId": "BAIOBNFKKZ",
            "identifiers": [
              {
                "identifierType": "JSL",
                "identifierValue": "HUMDL"
              }
            ]
          }
        ]
      },
      "toabao": {
        "accounts": [
          {
            "accountId": "FUWAQRFEW",
            "identifiers": [
              {
                "identifierType": "KWPM",
                "identifierValue": "CNC"
              }
            ]
          }
        ]
      },
      "web_engage": {
        "accounts": [
          {
            "accountId": "IFKPAX",
            "identifiers": [
              {
                "identifierType": "JTUVNITL",
                "identifierValue": "QLYFLRMWM"
              }
            ]
          }
        ]
      },
      "line": {
        "accounts": [
          {
            "accountId": "YUWZYKJ",
            "identifiers": [
              {
                "identifierType": "OMEM",
                "identifierValue": "RMVC"
              }
            ]
          }
        ]
      },
      "martjack": {
        "accounts": [
          {
            "accountId": "LCYHFOVP",
            "identifiers": [
              {
                "identifierType": "DKMNPZUCCR",
                "identifierValue": "UEPAVDSTY"
              }
            ]
          }
        ]
      },
      "customerId": 1007,
      "jd": {
        "accounts": [
          {
            "accountId": "UOJIXAY",
            "identifiers": [
              {
                "identifierType": "ASDQRBDHBC",
                "identifierValue": "LUEQMK"
              }
            ]
          }
        ]
      },
      "website": {
        "accounts": [
          {
            "accountId": "GAKHTGLR",
            "identifiers": [
              {
                "identifierType": "TIPJKQIHF",
                "identifierValue": "YFLHH"
              }
            ]
          }
        ]
      },
      "firstName": "KEZSWEWND",
      "instore": {
        "id": 8942,
        "mobile": "KECPX",
        "email": "JIW",
        "externalId": "YMI",
        "cardnumber": "AKRO",
        "cardexternalid": "WUYVZERODQ",
        "cardNumbers": [
          "GBRSBD"
        ]
      }
    },
    "streakData": [
      {
        "userCurrentStreakValue": "EHV",
        "streakLevelName": "RVCIZTM",
        "streakName": "PCADFFX",
        "streakId": "NABUOEHK",
        "userStreakId": "AKYOYGOVK",
        "streakLevelAchievedDate": "YGWA"
      }
    ],
    "targetData": [
      {
        "id": 2719,
        "name": "UREBYBGCX",
        "targetGroupId": 9603,
        "targetGroupName": "YPVTKH",
        "targetPeriodId": 1090,
        "targetPeriodName": "CHQ",
        "description": "IMXGQKDEGM"
      }
    ],
    "triggeringActivity": {
      "name": "IMNHEQV",
      "identifiers": [
        {
          "key": "OYEO",
          "value": "ZIADAOUMLQ"
        }
      ],
      "enteredBy": {
        "id": 5862,
        "till": {
          "code": "JQHHRR",
          "name": "OJSMTQMZ"
        },
        "store": {
          "code": "BMIFQDL",
          "name": "TFRA",
          "externalId": "NWCVHEA",
          "externalId1": "CAZXO",
          "externalId2": "MHUDQKNORY"
        }
      },
      "entityInformation": {
        "entityType": "RBJNEYL",
        "entityId": 8081
      },
      "additionalAttributes": [
        {
          "key": "ELGD",
          "value": "JJBL"
        }
      ]
    }
  },
  "refId": "SIMIBO",
  "loyaltyEventId": "UJPJ",
  "apiRequestId": "KPOMKJG",
  "eventId": "JXCAFD",
  "createdAt": 6593,
  "traceAttributes": {
    "COSH": "NJM",
    "QOSYIPYG": "WIPVBSGX"
  },
  "orgId": 7932
}
```

## Streak Level Unachievement  Event (streakLevelUnAchieved)

Notifies when a streak level has not been achieved within the time-frame.

```json Enriched payload
{
    "eventId": "462c3420-af0f-4300-b915-f5ea62461158",
    "eventType": "streakLevelUnAchieved",
    "consumerGroupId": null,
    "actionType": "START",
    "timeStamp": 1719841505207,
    "attributes": {
        "createdAt": 1719841505183,
        "data": {
            "customerIdentifiers": {
                "customerId": 345875236
            },
            "streakData": [
                {
                    "userCurrentStreakValue": "1",
                    "streakLevelName": "test_streak_achievement_EN_1",
                    "streakName": "test_streak_achievement_EN_1",
                    "streakId": "5717",
                    "userStreakId": "61399",
                    "streakLevelAchievedDate": "2024-07-01T13:35:31.000+0000"
                }
            ],
            "targetData": [
                {
                    "id": 90856,
                    "name": "test_streak_achievement_EN",
                    "targetGroupId": 42728,
                    "targetGroupName": "test_streak_achievement_EN",
                    "targetPeriodId": 53202,
                    "targetPeriodName": "Cycle_4"
                }
            ],
            "triggeringActivity": {
                "name": "ReturnBill",
                "identifiers": [
                    {
                        "key": "eventLogId",
                        "value": "12529287"
                    },
                    {
                        "key": "transactionId",
                        "value": "null"
                    }
                ],
                "enteredBy": {},
                "additionalAttributes": []
            }
        },
        "loyaltyEventId": "12529287",
        "eventName": "streakLevelUnAchieved",
        "refId": "50282_2d3d46947206e5a142c6e42a544f4e57",
        "apiRequestId": "2d3d46947206e5a142c6e42a544f4e57",
        "orgId": 50282
    }
}
```
```json Raw payload
{
  "eventName": "streakLevelUnAchieved",
  "eventLogId": 9328,
  "data": {
    "customerIdentifiers": {
      "loyaltyType": "PRREWEFW",
      "ecommerce": {
        "accounts": [
          {
            "accountId": "HFNNPKFIW",
            "identifiers": [
              {
                "identifierType": "BNMH",
                "identifierValue": "OSHPWA"
              }
            ]
          }
        ]
      },
      "lastName": "CSN",
      "facebook": {
        "accounts": [
          {
            "accountId": "FPHTWPD",
            "identifiers": [
              {
                "identifierType": "LNJOKSBBE",
                "identifierValue": "GLGN"
              }
            ]
          }
        ]
      },
      "wechat": {
        "accounts": [
          {
            "accountId": "DKBZFAMJO",
            "identifiers": [
              {
                "identifierType": "KOHFYBUBE",
                "identifierValue": "VIRTJQWU"
              }
            ]
          }
        ]
      },
      "tmall": {
        "accounts": [
          {
            "accountId": "JQDORG",
            "identifiers": [
              {
                "identifierType": "VDQ",
                "identifierValue": "OYNSBNVYPL"
              }
            ]
          }
        ]
      },
      "toabao": {
        "accounts": [
          {
            "accountId": "HYPEWHQI",
            "identifiers": [
              {
                "identifierType": "YUAUTKIC",
                "identifierValue": "RQQK"
              }
            ]
          }
        ]
      },
      "web_engage": {
        "accounts": [
          {
            "accountId": "KDAUI",
            "identifiers": [
              {
                "identifierType": "SMDLDAZW",
                "identifierValue": "ACX"
              }
            ]
          }
        ]
      },
      "line": {
        "accounts": [
          {
            "accountId": "VRUXSIE",
            "identifiers": [
              {
                "identifierType": "SRFVM",
                "identifierValue": "GJJEBHM"
              }
            ]
          }
        ]
      },
      "martjack": {
        "accounts": [
          {
            "accountId": "IWQG",
            "identifiers": [
              {
                "identifierType": "WNM",
                "identifierValue": "HUD"
              }
            ]
          }
        ]
      },
      "customerId": 6614,
      "jd": {
        "accounts": [
          {
            "accountId": "XMPW",
            "identifiers": [
              {
                "identifierType": "MRS",
                "identifierValue": "PQIRZHSMF"
              }
            ]
          }
        ]
      },
      "website": {
        "accounts": [
          {
            "accountId": "BQUCIL",
            "identifiers": [
              {
                "identifierType": "VIG",
                "identifierValue": "RIPOMVJJ"
              }
            ]
          }
        ]
      },
      "firstName": "LXKNDES",
      "instore": {
        "id": 8275,
        "mobile": "HOA",
        "email": "WSXG",
        "externalId": "ZZMDQI",
        "cardnumber": "RBLSP",
        "cardexternalid": "TBYDWLLWOS",
        "cardNumbers": [
          "SYYZPJIZXA"
        ]
      }
    },
    "streakData": [
      {
        "userCurrentStreakValue": "ATPZXIYN",
        "streakLevelName": "OUUBIYUY",
        "streakName": "EMMN",
        "streakId": "VKMXXA",
        "userStreakId": "JQS",
        "streakLevelAchievedDate": "HGK"
      }
    ],
    "targetData": [
      {
        "id": 4812,
        "name": "ISFWOOV",
        "targetGroupId": 1947,
        "targetGroupName": "TJX",
        "targetPeriodId": 5810,
        "targetPeriodName": "QMOVZNFKZ",
        "description": "ONJZVMZ"
      }
    ],
    "triggeringActivity": {
      "name": "IOEBQZWQS",
      "identifiers": [
        {
          "key": "OXX",
          "value": "KSXFRWFLCO"
        }
      ],
      "enteredBy": {
        "id": 4235,
        "till": {
          "code": "PLDN",
          "name": "GUMTCSQXBZ"
        },
        "store": {
          "code": "UIIEHR",
          "name": "VKIHLKWE",
          "externalId": "KTGTQEK",
          "externalId1": "DFVABN",
          "externalId2": "ZQSQUN"
        }
      },
      "entityInformation": {
        "entityType": "UGHR",
        "entityId": 6756
      },
      "additionalAttributes": [
        {
          "key": "JHDDVRDXQO",
          "value": "STLUJ"
        }
      ]
    }
  },
  "refId": "JSPONYDHYB",
  "loyaltyEventId": "QJRAYLO",
  "apiRequestId": "WIYJKF",
  "eventId": "BFAZLR",
  "createdAt": 5698,
  "traceAttributes": {
    "HCUMZL": "LCYAWLYF",
    "LVZTNMPLD": "HTAU",
    "VCYVJRJE": "IRNSF",
    "KGTOMGJ": "OMYCMGOKMF"
  },
  "orgId": 716
}
```

## Streak Enrolment Event (streakCustomerEnrolment)

Notifies when a user has been enrolled to a streak.

```json Enriched payload
{
  "eventId": "d1ef2bf6-7b14-4dbe-aadb-8d911c4b0c08",
  "eventType": "50952_streakCustomerEnrolment",
  "consumerGroupId": "e833d224-2e60-448b-b3eb-d2b1de2cff24",
  "actionType": "START",
  "timeStamp": 1722860014707,
  "attributes": {
    "createdAt": 1722859984403,
    "data": {
      "customerIdentifiers": {
        "customerId": 382513745
      },
      "streakEnrolmentData": [
        {
          "streakName": "tesseractuiTest1_1",
          "numberOfLevel": 1,
          "levelValues": [
            
          ],
          "startDate": "2024-08-05 01:30:00",
          "endDate": "2024-08-06 01:29:59"
        }
      ],
      "targetData": [
        {
          "id": 67105,
          "name": "tesseractuiTest1",
          "targetGroupId": 36996,
          "targetGroupName": "tesseractuiTest1",
          "targetPeriodId": 50708,
          "targetPeriodName": "Cycle_5"
        }
      ],
      "triggeringActivity": {
        "name": "enrolmentIntoStreak",
        "identifiers": [
          {
            "key": "ENROL_VIA_API",
            "value": "a824a8cc43669c9e0091b56725520660"
          }
        ],
        "additionalAttributes": [
          
        ]
      }
    },
    "eventName": "streakCustomerEnrolment",
    "refId": "50952_a824a8cc43669c9e0091b56725520660",
    "apiRequestId": "a824a8cc43669c9e0091b56725520660",
    "orgId": 50952
  }
}
```
```json Raw payload
{
  "eventName": "streakCustomerEnrolment",
  "eventLogId": 377,
  "data": {
    "eventName": "DCVTJZOTRA",
    "customerIdentifiers": {
      "loyaltyType": "CWDIHPVCJH",
      "ecommerce": {
        "accounts": [
          {
            "accountId": "TWAVDQHEZZ",
            "identifiers": [
              {
                "identifierType": "DEEUOPTYKA",
                "identifierValue": "YBUF"
              }
            ]
          }
        ]
      },
      "lastName": "IUHHN",
      "facebook": {
        "accounts": [
          {
            "accountId": "RKAMNIGDD",
            "identifiers": [
              {
                "identifierType": "HXDHYC",
                "identifierValue": "UKOJ"
              }
            ]
          }
        ]
      },
      "wechat": {
        "accounts": [
          {
            "accountId": "PATN",
            "identifiers": [
              {
                "identifierType": "ZVDP",
                "identifierValue": "AZRQCPDK"
              }
            ]
          }
        ]
      },
      "tmall": {
        "accounts": [
          {
            "accountId": "PUNNHY",
            "identifiers": [
              {
                "identifierType": "IDQRED",
                "identifierValue": "AOCFVO"
              }
            ]
          }
        ]
      },
      "toabao": {
        "accounts": [
          {
            "accountId": "WZJMZFTZ",
            "identifiers": [
              {
                "identifierType": "HFNPQD",
                "identifierValue": "TTCQBSMEBB"
              }
            ]
          }
        ]
      },
      "web_engage": {
        "accounts": [
          {
            "accountId": "MDUDPCAB",
            "identifiers": [
              {
                "identifierType": "LLPR",
                "identifierValue": "MQYIBCFUA"
              }
            ]
          }
        ]
      },
      "line": {
        "accounts": [
          {
            "accountId": "ZSAMQZVHP",
            "identifiers": [
              {
                "identifierType": "QSM",
                "identifierValue": "UCTWU"
              }
            ]
          }
        ]
      },
      "martjack": {
        "accounts": [
          {
            "accountId": "CUREGMR",
            "identifiers": [
              {
                "identifierType": "BKVORY",
                "identifierValue": "RNYPPXJEN"
              }
            ]
          }
        ]
      },
      "customerId": 1495,
      "jd": {
        "accounts": [
          {
            "accountId": "LEBQITVZA",
            "identifiers": [
              {
                "identifierType": "JKUS",
                "identifierValue": "VAXN"
              }
            ]
          }
        ]
      },
      "website": {
        "accounts": [
          {
            "accountId": "DJGUYPA",
            "identifiers": [
              {
                "identifierType": "GVPLZVSOYP",
                "identifierValue": "AVXITES"
              }
            ]
          }
        ]
      },
      "firstName": "TUQW",
      "instore": {
        "id": 8479,
        "mobile": "KLPW",
        "email": "GBPK",
        "externalId": "PEI",
        "cardnumber": "WIEDSA",
        "cardexternalid": "NIM",
        "cardNumbers": [
          "LXA"
        ]
      }
    },
    "refId": "FEKYEEPUFV",
    "loyaltyEventId": "IDKN",
    "streakEnrolmentData": [
      {
        "numberOfLevel": 4699,
        "userStreakId": "LLKSJMFUYW",
        "levelValues": [
          "COHTGIOVY"
        ],
        "endDate": "UZO",
        "streakName": "KLOSEESYFN",
        "startDate": "COLWASFN",
        "streakValueWhenEnrolled": "DDYE",
        "enrolledDate": "ZSZ",
        "descriptionOfTheStreak": "LLA"
      }
    ],
    "eventId": "IHRCVQVUU",
    "triggeringActivity": {
      "name": "ZZZVFE",
      "identifiers": [
        {
          "key": "OHC",
          "value": "LMWHK"
        }
      ],
      "enteredBy": {
        "id": 2012,
        "till": {
          "code": "JJAAOXT",
          "name": "LTEZJ"
        },
        "store": {
          "code": "BIIRU",
          "name": "BHGRSJHY",
          "externalId": "AZRYDMVI",
          "externalId1": "ZDJFYV",
          "externalId2": "CBTNFVL"
        }
      },
      "entityInformation": {
        "entityType": "WWTDFLET",
        "entityId": 6197
      },
      "additionalAttributes": [
        {
          "key": "LMQWEQR",
          "value": "XUTE"
        }
      ]
    },
    "transactionId": "LWOYHJGYCN",
    "targetData": [
      {
        "id": 3794,
        "name": "OAQOHNC",
        "targetGroupId": 6795,
        "targetGroupName": "DMQHEOJFQ",
        "targetPeriodId": 8382,
        "targetPeriodName": "JZPPTHSAZA",
        "description": "MDXRDXNMQV"
      }
    ],
    "orgId": "CXAZ"
  },
  "refId": "EIULA",
  "loyaltyEventId": "GXWBTYIXYT",
  "apiRequestId": "IDZKMDOVMR",
  "eventId": "YWIY",
  "createdAt": 1740,
  "traceAttributes": {
    "PSYDSWSML": "YIFOXNE",
    "RYIXHV": "ODEAH",
    "KGFX": "YEJDRNKEVW",
    "UFYP": "VQKDBAIVCU"
  },
  "orgId": 2890
}
```

## Streak unenrolment (streakCustomerUnEnrolment)

This event is triggered when a user is unenrolled from a streak.

```json Enriched payload
{
  "eventName": "streakCustomerUnEnrolment",
  "data": {
    "customerIdentifiers": {
      "customerId": 557461034
    },
    "streakUnEnrolmentData": [
      {
        "streakName": "test streaks BE with SUM_1",
        "numberOfLevel": 2,
        "levelValues": [
          
        ],
        "startDate": "2024-08-01 04:00:00",
        "endDate": "2024-08-02 03:59:59"
      }
    ],
    "targetData": [
      {
        "id": 1519,
        "name": "test streaks BE with SUM",
        "targetGroupId": 1332,
        "targetGroupName": "test streaks BE with SUM",
        "targetPeriodId": 6422,
        "targetPeriodName": "Cycle_1"
      }
    ],
    "triggeringActivity": {
      "name": "streak unenrollment",
      "identifiers": [
        {
          "key": "UNENROL_VIA_API",
          "value": "2ee80f8a3a7fc7259fcf1ca82e299453"
        }
      ],
      "additionalAttributes": [
        
      ]
    }
  },
  "orgId": 100323,
  "refId": "100323_2ee80f8a3a7fc7259fcf1ca82e299453",
  "apiRequestId": "2ee80f8a3a7fc7259fcf1ca82e299453",
  "createdAt": 1723016690026
}
```
```json Raw payload
{
  "eventName": "streakCustomerUnEnrolment",
  "eventLogId": 6850,
  "data": {
    "eventName": "LZXRK",
    "customerIdentifiers": {
      "loyaltyType": "NJHYWU",
      "ecommerce": {
        "accounts": [
          {
            "accountId": "KFETVUEM",
            "identifiers": [
              {
                "identifierType": "WTPC",
                "identifierValue": "NBUGSD"
              }
            ]
          }
        ]
      },
      "lastName": "SIHFMW",
      "facebook": {
        "accounts": [
          {
            "accountId": "XPPTMUHV",
            "identifiers": [
              {
                "identifierType": "AXOUBR",
                "identifierValue": "BRRQOUVGBA"
              }
            ]
          }
        ]
      },
      "wechat": {
        "accounts": [
          {
            "accountId": "CWQWMROMD",
            "identifiers": [
              {
                "identifierType": "EVQG",
                "identifierValue": "GOVBUFEFO"
              }
            ]
          }
        ]
      },
      "tmall": {
        "accounts": [
          {
            "accountId": "DLOUHR",
            "identifiers": [
              {
                "identifierType": "JXWVCCU",
                "identifierValue": "KJRVNQE"
              }
            ]
          }
        ]
      },
      "toabao": {
        "accounts": [
          {
            "accountId": "VOMPOHQCW",
            "identifiers": [
              {
                "identifierType": "MAWNCT",
                "identifierValue": "TIUUHRS"
              }
            ]
          }
        ]
      },
      "web_engage": {
        "accounts": [
          {
            "accountId": "VRTTO",
            "identifiers": [
              {
                "identifierType": "DTNLS",
                "identifierValue": "LUDT"
              }
            ]
          }
        ]
      },
      "line": {
        "accounts": [
          {
            "accountId": "UXNDEWZZPP",
            "identifiers": [
              {
                "identifierType": "KOBA",
                "identifierValue": "OGJOGXO"
              }
            ]
          }
        ]
      },
      "martjack": {
        "accounts": [
          {
            "accountId": "CKUTOQ",
            "identifiers": [
              {
                "identifierType": "GWNQVB",
                "identifierValue": "FFYNJJYBJU"
              }
            ]
          }
        ]
      },
      "customerId": 2766,
      "jd": {
        "accounts": [
          {
            "accountId": "XFB",
            "identifiers": [
              {
                "identifierType": "UVFPUWD",
                "identifierValue": "UTVGOFX"
              }
            ]
          }
        ]
      },
      "website": {
        "accounts": [
          {
            "accountId": "HTZ",
            "identifiers": [
              {
                "identifierType": "AMP",
                "identifierValue": "RFJYACRH"
              }
            ]
          }
        ]
      },
      "firstName": "UWJFO",
      "instore": {
        "id": 3768,
        "mobile": "QRE",
        "email": "WKZ",
        "externalId": "KPLGVBTH",
        "cardnumber": "SCDO",
        "cardexternalid": "KOZMQL",
        "cardNumbers": [
          "XUNRQJN"
        ]
      }
    },
    "refId": "PFMETULC",
    "loyaltyEventId": "YCJFR",
    "eventId": "IXFIHW",
    "streakUnEnrolmentData": [
      {
        "numberOfLevel": 3969,
        "userStreakId": "LUTKNEOJ",
        "levelValues": [
          "QLCKBMCCWZ"
        ],
        "endDate": "OMXTNJUA",
        "streakName": "EEMUTKFJXH",
        "streakValueWhenUnEnrolled": "KQD",
        "unEnrolledDate": "MJJJJXJYT",
        "startDate": "GIIJT",
        "descriptionOfTheStreak": "TLMQ"
      }
    ],
    "triggeringActivity": {
      "name": "RKUYUQL",
      "identifiers": [
        {
          "key": "HVPNOLKP",
          "value": "FESRD"
        }
      ],
      "enteredBy": {
        "id": 4949,
        "till": {
          "code": "RTCBDSWEV",
          "name": "VYGMYHEUPI"
        },
        "store": {
          "code": "CQJA",
          "name": "FFSMLW",
          "externalId": "AWXHMOCG",
          "externalId1": "JIBOSPUH",
          "externalId2": "EAS"
        }
      },
      "entityInformation": {
        "entityType": "UFPKZJOV",
        "entityId": 8639
      },
      "additionalAttributes": [
        {
          "key": "IYEVJUKM",
          "value": "OQBIYWKIZ"
        }
      ]
    },
    "transactionId": "HKHAWRBHVJ",
    "targetData": [
      {
        "id": 8839,
        "name": "ACDHPTHY",
        "targetGroupId": 7848,
        "targetGroupName": "JBBBJFRNMA",
        "targetPeriodId": 5600,
        "targetPeriodName": "OMHP",
        "description": "WOLAMHG"
      }
    ],
    "orgId": "XYGRKHMBVB"
  },
  "refId": "KVZYHXN",
  "loyaltyEventId": "ETFZSOUKK",
  "apiRequestId": "WTAQOCQFWB",
  "eventId": "MWQ",
  "createdAt": 9855,
  "traceAttributes": {
    "BBQIIOLNU": "PEEROKFE",
    "YVV": "PRNTAPRBX"
  },
  "orgId": 2013
}
```

## Streak Start Event (streakStart)

Notifies when a streak has started for a user. A streak starts when a user begins a series of consecutive actions or engagements as defined by the brand.

```json Enriched payload
{
    "eventName": "streakStart",
    "eventId": "7e0c5f62-4a65-4dd9-8324-78461258dfa9",
    "orgId": 51512,
    "refId": "51512_c9b01aa8-cb98-4dd4-be66-586f34c44b97",
    "apiRequestId": "c9b01aa8-cb98-4dd4-be66-586f34c44b97",
    "createdAt": 1721912551142,
    "data": {
        "customerIdentifiers": {
            "customerId": 387114334
        },
        "targetDetails": {
            "id": 65260,
            "name": "Streak 24 July",
            "targetGroupId": 36006,
            "targetGroupName": "Streak 24 July",
            "targetPeriodId": 49006,
            "targetPeriodName": "Cycle_1"
        },
        "streakStartData": [
            {
                "streakName": "Streak 24 July",
                "descriptionOfTheStreak": "Streak 24 July",
                "numberOfLevel": 2,
                "levelValues": "3","5",
                "userStreakValueAtTheStart": "0",
                "startDate": "2024-07-24 14:15:59"
            }
        ],
        "triggeringActivity": {
            "name": "streakStartEvent",
            "identifiers": [
                {
                    "key": "TargetRuleId",
                    "value": "65260"
                }
            ],
            "additionalAttributes": []
        }
    },
    "loyaltyEventId": ""
}
```
```json Raw payload
{
  "eventName": "streakStart",
  "eventLogId": 3355,
  "data": {
    "customerIdentifiers": {
      "loyaltyType": "FEKSPM",
      "ecommerce": {
        "accounts": [
          {
            "accountId": "DWDKUALE",
            "identifiers": [
              {
                "identifierType": "TELUV",
                "identifierValue": "QHTQL"
              }
            ]
          }
        ]
      },
      "lastName": "PIWOXXD",
      "facebook": {
        "accounts": [
          {
            "accountId": "DUA",
            "identifiers": [
              {
                "identifierType": "BTRFFAQQXB",
                "identifierValue": "WPYQHHRV"
              }
            ]
          }
        ]
      },
      "wechat": {
        "accounts": [
          {
            "accountId": "DNHIWQCD",
            "identifiers": [
              {
                "identifierType": "DDIXDEUNWJ",
                "identifierValue": "WVLAX"
              }
            ]
          }
        ]
      },
      "tmall": {
        "accounts": [
          {
            "accountId": "XSWYJHF",
            "identifiers": [
              {
                "identifierType": "BHORWCWLL",
                "identifierValue": "HJO"
              }
            ]
          }
        ]
      },
      "toabao": {
        "accounts": [
          {
            "accountId": "IGBMCMZ",
            "identifiers": [
              {
                "identifierType": "MTKM",
                "identifierValue": "WDJJTM"
              }
            ]
          }
        ]
      },
      "web_engage": {
        "accounts": [
          {
            "accountId": "LHNET",
            "identifiers": [
              {
                "identifierType": "IFOCSQII",
                "identifierValue": "PCVCQLQTSZ"
              }
            ]
          }
        ]
      },
      "line": {
        "accounts": [
          {
            "accountId": "TYRSQ",
            "identifiers": [
              {
                "identifierType": "OTSLU",
                "identifierValue": "YDTTT"
              }
            ]
          }
        ]
      },
      "martjack": {
        "accounts": [
          {
            "accountId": "XPSOPTKJT",
            "identifiers": [
              {
                "identifierType": "VGL",
                "identifierValue": "KFOCGIZTV"
              }
            ]
          }
        ]
      },
      "customerId": 8930,
      "jd": {
        "accounts": [
          {
            "accountId": "UFBMCC",
            "identifiers": [
              {
                "identifierType": "TLXR",
                "identifierValue": "ZNIREELCK"
              }
            ]
          }
        ]
      },
      "website": {
        "accounts": [
          {
            "accountId": "ELALVRSVG",
            "identifiers": [
              {
                "identifierType": "YILN",
                "identifierValue": "NYVRUEENFT"
              }
            ]
          }
        ]
      },
      "firstName": "NJMWBVHJXA",
      "instore": {
        "id": 6754,
        "mobile": "IVI",
        "email": "WLPBIVJPCZ",
        "externalId": "JDFUFWHP",
        "cardnumber": "SEVHCKAMHL",
        "cardexternalid": "BJEFJ",
        "cardNumbers": [
          "OGG"
        ]
      }
    },
    "targetDetails": {
      "id": 6045,
      "name": "HVBAJSWEC",
      "targetGroupId": 1315,
      "targetGroupName": "WVCA",
      "targetPeriodId": 3695,
      "targetPeriodName": "ELVQSMEQ",
      "description": "QZHIGLNP"
    },
    "streakStartData": [
      {
        "streakName": "RGAUV",
        "descriptionOfTheStreak": "UILWG",
        "numberOfLevel": 3435,
        "levelValues": [
          "PHFHOUABOZ"
        ],
        "userStreakValueAtTheStart": "TNQTYTEF",
        "startDate": "BYKJQK"
      }
    ],
    "triggeringActivity": {
      "name": "ZVSBCZ",
      "identifiers": [
        {
          "key": "OSTQEPD",
          "value": "MWVDKWGEWJ"
        }
      ],
      "enteredBy": {
        "id": 2242,
        "till": {
          "code": "QUKA",
          "name": "ODNBWTO"
        },
        "store": {
          "code": "YQBJKZP",
          "name": "VALUQGMCZT",
          "externalId": "BNTFLEMED",
          "externalId1": "HIT",
          "externalId2": "AMKBTCHSZT"
        }
      },
      "entityInformation": {
        "entityType": "BCYKPK",
        "entityId": 261
      },
      "additionalAttributes": [
        {
          "key": "CWEK",
          "value": "ZCT"
        }
      ]
    }
  },
  "refId": "INLENDM",
  "loyaltyEventId": "PQOIKBS",
  "apiRequestId": "QMLOFXVANT",
  "eventId": "KGR",
  "createdAt": 1529,
  "traceAttributes": {
    "DPZTMP": "HHTRXIAL",
    "DRKQOSA": "PDHYHL",
    "EKWHECA": "ZRFRZEPL",
    "WUQNFMQLZ": "NEJVF",
    "CUJCQOZ": "ZSLRW"
  },
  "orgId": 5647
}
```

## Streak End Event (streakEnd)

Notifies when a streak has ended for a user.

```json Enriched payload
{
    "eventName": "streakEnd",
    "eventId": "7e0c5f62-4a65-4dd9-8324-78461258dfa9",
    "orgId": 51512,
    "refId": "51512_c9b01aa8-cb98-4dd4-be66-586f34c44b97",
    "apiRequestId": "c9b01aa8-cb98-4dd4-be66-586f34c44b97",
    "createdAt": 1721912551142,
    "data": {
        "customerIdentifiers": {
            "customerId": 387114334
        },
        "targetDetails": {
            "id": 65260,
            "name": "Streak 24 July",
            "targetGroupId": 36006,
            "targetGroupName": "Streak 24 July",
            "targetPeriodId": 49006,
            "targetPeriodName": "Cycle_1"
        },
        "streakEndData": [
            {
                "streakName": "Streak 24 July",
                "descriptionOfTheStreak": "Streak 24 July",
                "numberOfLevel": 2,
                "levelValues": "3","5",
                "numberOfLevelsAchievedByTheUser": "0",
                "levelsAchievedByTheUser": [],
                "userStreakValueByTheEnd": 0,
                "endDate": "2024-07-25 23:59:59"
            }
        ],
        "triggeringActivity": {
            "name": "streakStartEvent",
            "identifiers": [
                {
                    "key": "TargetRuleId",
                    "value": "65260"
                }
            ],
            "additionalAttributes": []
        }
    },
    "loyaltyEventId": ""
}
```
```json Raw payload
{
  "eventName": "streakEnd",
  "eventLogId": 6690,
  "data": {
    "customerIdentifiers": {
      "loyaltyType": "BIG",
      "ecommerce": {
        "accounts": [
          {
            "accountId": "LUANJMAXWP",
            "identifiers": [
              {
                "identifierType": "FMAGOEMOI",
                "identifierValue": "NUDPI"
              }
            ]
          }
        ]
      },
      "lastName": "DDP",
      "facebook": {
        "accounts": [
          {
            "accountId": "FHJ",
            "identifiers": [
              {
                "identifierType": "CBQUTRS",
                "identifierValue": "MIH"
              }
            ]
          }
        ]
      },
      "wechat": {
        "accounts": [
          {
            "accountId": "BHWOM",
            "identifiers": [
              {
                "identifierType": "HAPYDDG",
                "identifierValue": "RQXQ"
              }
            ]
          }
        ]
      },
      "tmall": {
        "accounts": [
          {
            "accountId": "ZCY",
            "identifiers": [
              {
                "identifierType": "TRGGEPOXHL",
                "identifierValue": "OWY"
              }
            ]
          }
        ]
      },
      "toabao": {
        "accounts": [
          {
            "accountId": "TWTSNTQB",
            "identifiers": [
              {
                "identifierType": "OQQQPDUOC",
                "identifierValue": "ENKCUPTWE"
              }
            ]
          }
        ]
      },
      "web_engage": {
        "accounts": [
          {
            "accountId": "JZLYUBRW",
            "identifiers": [
              {
                "identifierType": "VDKERTH",
                "identifierValue": "IYFZSE"
              }
            ]
          }
        ]
      },
      "line": {
        "accounts": [
          {
            "accountId": "KPNINIQ",
            "identifiers": [
              {
                "identifierType": "ZJNEBCDBBM",
                "identifierValue": "MFBPUH"
              }
            ]
          }
        ]
      },
      "martjack": {
        "accounts": [
          {
            "accountId": "HJVHCUHGTM",
            "identifiers": [
              {
                "identifierType": "XWUG",
                "identifierValue": "XEN"
              }
            ]
          }
        ]
      },
      "customerId": 2078,
      "jd": {
        "accounts": [
          {
            "accountId": "NTLHUD",
            "identifiers": [
              {
                "identifierType": "EOIXK",
                "identifierValue": "TMEX"
              }
            ]
          }
        ]
      },
      "website": {
        "accounts": [
          {
            "accountId": "BMDCWQA",
            "identifiers": [
              {
                "identifierType": "YMYJIQPSBQ",
                "identifierValue": "SVACCKXZ"
              }
            ]
          }
        ]
      },
      "firstName": "DFULGJFE",
      "instore": {
        "id": 3646,
        "mobile": "HZAQDCM",
        "email": "VLL",
        "externalId": "LOCKMJDGRS",
        "cardnumber": "NOV",
        "cardexternalid": "ZGEL",
        "cardNumbers": [
          "YKIDKWHL"
        ]
      }
    },
    "targetDetails": {
      "id": 7422,
      "name": "CKOV",
      "targetGroupId": 6827,
      "targetGroupName": "DIGRKTBP",
      "targetPeriodId": 5088,
      "targetPeriodName": "NPCJQIGRK",
      "description": "RSUE"
    },
    "streakEndData": [
      {
        "streakName": "XDQA",
        "descriptionOfTheStreak": "LFROXMENR",
        "numberOfLevel": 5413,
        "levelValues": [
          "WRRCJBLUMY"
        ],
        "numberOfLevelsAchievedByTheUser": "YLQAFL",
        "levelsAchievedByTheUser": [
          "FASOLBVEL"
        ],
        "userStreakValueByTheEnd": "BLQKWZZQSP",
        "endDate": "EHD"
      }
    ],
    "triggeringActivity": {
      "name": "OJDZAVJ",
      "identifiers": [
        {
          "key": "CTXZVPCV",
          "value": "YGHDA"
        }
      ],
      "enteredBy": {
        "id": 8136,
        "till": {
          "code": "GRCQT",
          "name": "TGF"
        },
        "store": {
          "code": "XLDXIWDB",
          "name": "LPCC",
          "externalId": "TKBWVNCDW",
          "externalId1": "EMI",
          "externalId2": "IDD"
        }
      },
      "entityInformation": {
        "entityType": "QPDZJNWARY",
        "entityId": 4456
      },
      "additionalAttributes": [
        {
          "key": "DPLOWTPQE",
          "value": "NZXFYWLAQ"
        }
      ]
    }
  },
  "refId": "HSNNES",
  "loyaltyEventId": "IWLHHIZCP",
  "apiRequestId": "NDN",
  "eventId": "LHLOIF",
  "createdAt": 96,
  "traceAttributes": {
    "TUKUNJENB": "MROD",
    "HNA": "UMUWSAGVD"
  },
  "orgId": 1122
}
```

## Event notification for the change in milestone achieved value on return of purchases

As of now, whenever a customer makes a purchase, all the milestone values which can be impacted with that purchase will be impacted, and the information of the new milestone achieved value, etc.. will be sent as an event notification.

However, whenever a customer returns a transaction, the milestone value which previously increased because of that purchase will also be decreased accordingly. But there is no event notification for such instances. To understand with an example:

Step 1: Milestone on lifetime purchases created, and milestone value is 10,000.
Step 2: Customer made a transaction worth 3000.
Step 3: Customer’s milestone achieved value increased from 0 → 3000
Step 4: Brand will get an event notification about the above step.
Step 5: After days, the customer returned the purchase of step-2.
Step 6: Now the milestone achieved value will decrease from 3000 → 0.
Step 7: But brands/customers are not getting any event notification of the same.

Now, with this latest enhancement, brands will get notified even in the case of return transactions about the decreased milestone value.

If the “Name” key is “ReturnBill”, it’s a return transaction where milestone value is decreased by the “currentEventTargetValue” (400 here). We are not returning negative since it can lead to integration issues.

***

# Points

`eventLogId` lets you look up detailed points activity (like earning, spending, or adjustments) for a specific event using the [Points Ledger Explode API](https://docs.capillarytech.com/reference/get-points-ledger-explode-info). The following events include `eventLogId` in the payload:

[PointsIssued](https://docs.capillarytech.com/docs/event-schema-payload#points-issued-event-pointsissued), [IssuedPointsReversed](https://docs.capillarytech.com/docs/event-schema-payload#issued-points-reversed-event-issuedpointsreversed), [PointsTransferredInitiated](https://docs.capillarytech.com/docs/event-schema-payload#points-transferred-initiated-event-pointstransferredinitiated), [PointsTransferredReceived](https://docs.capillarytech.com/docs/event-schema-payload#points-transferred-received-pointstransferredreceived), [PromisedToCurrentPointsConversion](https://docs.capillarytech.com/docs/event-schema-payload#promised-points-conversion-to-current-points-event-promisedtocurrentpointsconversion), [PointsRedeemed](https://docs.capillarytech.com/docs/event-schema-payload#points-redeemed-event-pointsredeemed), [RedeemedPointsReversed](https://docs.capillarytech.com/docs/event-schema-payload#redeemed-points-reversed-event-redeemedpointsreversed), [ManualPointsAdjustment](https://docs.capillarytech.com/docs/event-schema-payload#manual-points-adjustment-event-manualpointsadjustment), [AlternateCurrenciesIssued](https://docs.capillarytech.com/docs/event-schema-payload#alternate-currencies-issued-alternatecurrenciesissued), [IssuedAlternateCurrenciesReversed](https://docs.capillarytech.com/docs/event-schema-payload#issued-alternate-currency-reversed-issuedalternatecurrenciesreversed), [PromisedToCurrentAlternateCurrencyConversion](https://docs.capillarytech.com/docs/event-schema-payload#promised-alternate-currencies-issued-event-promisedtocurrentalternatecurrencyconversion), [promotionIssued](https://docs.capillarytech.com/docs/event-schema-payload#issued-loyalty-promotion-promotionissued), [pointsExpired](https://docs.capillarytech.com/docs/event-schema-payload#points-expired-event-pointsexpired)

## Points Issued Event (pointsIssued)

Notifies when points are issued to a user.

<Table>
  <thead>
    <tr>
      <th>
        Parameter
      </th>

      <th>
        New Description from Table 1
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `-eventName`
      </td>

      <td>
        Name of the event, e.g., "pointsIssued".
      </td>
    </tr>

    <tr>
      <td>
        `-eventId`
      </td>

      <td>
        Unique identifier for the event.
      </td>
    </tr>

    <tr>
      <td>
        `-eventLogId`
      </td>

      <td>
        Unique ID that is generated when the event is triggered.
      </td>
    </tr>

    <tr>
      <td>
        `-orgId`
      </td>

      <td>
        Unique identifier for the organisation.
      </td>
    </tr>

    <tr>
      <td>
        `-refId`
      </td>

      <td>
        This is a combination of org id and loyalty event ID and is used for internal debugging.
      </td>
    </tr>

    <tr>
      <td>
        `-apiRequestId`
      </td>

      <td>
        Identifier for the API request.
      </td>
    </tr>

    <tr>
      <td>
        `-createdAt`
      </td>

      <td>
        Timestamp when the event was created.
      </td>
    </tr>

    <tr>
      <td>
        `-data`
      </td>

      <td>
        Data related to the event.
      </td>
    </tr>

    <tr>
      <td>
        `--customerIdentifiers`
      </td>

      <td>
        Identifiers related to the customer.
      </td>
    </tr>

    <tr>
      <td>
        `---customerId`
      </td>

      <td>
        Unique identifier for the customer.
      </td>
    </tr>

    <tr>
      <td>
        `--entityInformation`
      </td>

      <td>
        Information about the entity involved in the event.
      </td>
    </tr>

    <tr>
      <td>
        `---entityType`
      </td>

      <td>
        Type of entity, e.g., "USER".
      </td>
    </tr>

    <tr>
      <td>
        `---entityId`
      </td>

      <td>
        Unique identifier for the entity.
      </td>
    </tr>

    <tr>
      <td>
        `--triggeringActivity`
      </td>

      <td>
        Details about the activity that triggered the event. Possible values:
        `NewBill`, `NewBillDVS`, `TransactionAdd`, `CustomerRegistration`, `PointsRedemption`, `VoucherRedemption`, `ReturnBill`, `TrackerConditionSuccess`, `TransactionFinished`, `CustomerUpdate`, `TransactionUpdate`, `SocialConnect`, `CampaignRefereeRedeem`, `CampaignReferral`, `CampaignReferralReferrer`, `IncomingSms`, `ReferralPostProcessing`, `SocialConnectUpdate`, `EmailOpen`, `EmailClick`, `VoucherPreRedemption`, `DelayedAccrual`, `Scan`, `GroupTransactionAdd`, `GroupTransactionUpdate`, `GroupReturnBill`, `GroupMemberJoin`, `GroupMemberLeave`, `GenericEvent`, `SlabUpgrade`, `ManualSlabAdjustment`, `PointsTransfer`, `TargetCompleted`, `PointsRedemptionReversal`, `PartnerProgramLinking`, `PartnerProgramTierUpdate`, `PartnerProgramDeLinking`, `TierReassessment`, `PointsContributionToGroup`, `UserGroup2Create`, `LineItemsPointsPromotionImport`, `CustomerPromotionImport`, `BillPointsPromotionImport`, `AllocateGoodwillPoints`, `ManualPointsAdjustment`, `ManualPointsConversion`, `ReturnTargetCompletedEvent`, `IssuePromotionForEntityEvent`, `EarnPromotionForEntityEvent`, `ConvertPointsToReward`, `BulkAllocatePoints`, `RevokeEarnPromotionEvent`, `RevokeIssuePromotionEvent`, `ManualCurrencyAllocation`
      </td>
    </tr>

    <tr>
      <td>
        `---name`
      </td>

      <td>
        Name of the triggering activity.
      </td>
    </tr>

    <tr>
      <td>
        `---identifiers`
      </td>

      <td>
        Identifiers related to the activity.
      </td>
    </tr>

    <tr>
      <td>
        `----key`
      </td>

      <td>
        Key identifier, e.g., "CustomerId".
      </td>
    </tr>

    <tr>
      <td>
        `----value`
      </td>

      <td>
        Value of the key identifier.
      </td>
    </tr>

    <tr>
      <td>
        `---enteredBy`
      </td>

      <td>
        User who entered the activity.
      </td>
    </tr>

    <tr>
      <td>
        `----id`
      </td>

      <td>
        Unique identifier for the user.
      </td>
    </tr>

    <tr>
      <td>
        `----entityInformation`
      </td>

      <td>
        Information about the entity involved in the event.
      </td>
    </tr>

    <tr>
      <td>
        `-----entityType`
      </td>

      <td>
        Type of entity, e.g., "USER".
      </td>
    </tr>

    <tr>
      <td>
        `-----entityId`
      </td>

      <td>
        Unique identifier for the entity.
      </td>
    </tr>

    <tr>
      <td>
        `---additionalAttributes`
      </td>

      <td>
        Additional attributes related to the activity.
      </td>
    </tr>

    <tr>
      <td>
        `--loyaltyProgramDetails`
      </td>

      <td>
        Details about the loyalty program.
      </td>
    </tr>

    <tr>
      <td>
        `---id`
      </td>

      <td>
        Unique identifier for the user.
      </td>
    </tr>

    <tr>
      <td>
        `---tiers`
      </td>

      <td>
        List of program tiers.
      </td>
    </tr>

    <tr>
      <td>
        `----tierNumber`
      </td>

      <td>
        Tier number, e.g., 1.
      </td>
    </tr>

    <tr>
      <td>
        `----tierName`
      </td>

      <td>
        Tier name, e.g., "Silver".
      </td>
    </tr>

    <tr>
      <td>
        `--loyaltyProgramId`
      </td>

      <td>
        Unique identifier for the loyalty program.
      </td>
    </tr>

    <tr>
      <td>
        `--programCurrentPoints`
      </td>

      <td>
        Current points in the loyalty program.
      </td>
    </tr>

    <tr>
      <td>
        `--programLifetimePoints`
      </td>

      <td>
        Lifetime points in the loyalty program.
      </td>
    </tr>

    <tr>
      <td>
        `--totalPointsIssued`
      </td>

      <td>
        Total points issued in the event.
      </td>
    </tr>

    <tr>
      <td>
        `--regularPointsIssued`
      </td>

      <td>
        Regular points issued in the event.
      </td>
    </tr>

    <tr>
      <td>
        `--regularPointsBreakup`
      </td>

      <td>
        Breakdown of regular points issued (empty in this case).
      </td>
    </tr>

    <tr>
      <td>
        `--promotionalPointsIssued`
      </td>

      <td>
        Promotional points issued in the event.
      </td>
    </tr>

    <tr>
      <td>
        `--promisedPointsIssued`
      </td>

      <td>
        Promised points issued in the event (empty in this case).
      </td>
    </tr>

    <tr>
      <td>
        `--loyaltyEventId`
      </td>

      <td>
        Identifier for the loyalty event.
      </td>
    </tr>
  </tbody>
</Table>

*The addition of `behavioralEventAttributes` is done on a demand basis. To enable it, you need to enable the configuration `awardedReferenceEnrichmentEnabled` . Raise a JIRA ticket with the sustenance team to enable this feature.

Example of points Issued on Transaction/Add

```json Enriched payload
{
  "eventName": "pointsIssued",
  "eventId": "4647d7b7-61c0-480f-8dfe-40ff87f8a445",
  "eventLogId": 39125117,
  "orgId": 51186,
  "refId": "51186_627e870bd278ed95deb5a046b4e9a647",
  "apiRequestId": "627e870bd278ed95deb5a046b4e9a647",
  "createdAt": 1750224535590,
  "data": {
    "customerIdentifiers": {
      "customerId": 387979652,
      "instore": {
        "mobile": "919300000020",
        "cardNumbers": []
      }
    },
    "entityInformation": {
      "entityType": "USER",
      "entityId": 387979652
    },
    "triggeringActivity": {
      "name": "ManualCurrencyAllocation",
      "identifiers": [
        {
          "key": "BillId",
          "value": "2152322568"
        },
        {
          "key": "billNumber",
          "value": "1750151307"
        }
      ],
      "enteredBy": {
        "id": 50671937,
        "entityInformation": {
          "entityType": "USER",
          "entityId": 387979652
        }
      },
      "additionalAttributes": []
    },
    "loyaltyProgramDetails": {
      "id": 2649,
      "name": "VidhiJainOrgDefaultProgram",
      "isDefault": true,
      "pointsToCurrencyRatio": 5,
      "tiers": [
        {
          "tierNumber": 1,
          "tierName": "CLASSIC"
        },
        {
          "tierNumber": 2,
          "tierName": "SILVER"
        },
        {
          "tierNumber": 3,
          "tierName": "GOLD"
        }
      ]
    },
    "loyaltyProgramId": 2649,
    "programCurrentPoints": 120,
    "programLifetimePoints": 120,
    "totalPointsIssued": 100,
    "regularPointsIssued": 100,
    "regularPointsBreakup": [
      {
        "points": 100,
        "expiryAt": "2025-06-29"
      }
    ],
    "promotionalPointsIssued": [],
    "promisedPointsIssued": [],
    "loyaltyEventId": "627e870bd278ed95deb5a046b4e9a647"
  }
}

```
```json Raw payload
{
  "eventName": "pointsIssued",
  "eventLogId": 1711,
  "data": {
    "loyaltyProgramDetails": {
      "id": 5873,
      "name": "LTLCSPXTO",
      "isDefault": false,
      "pointsToCurrencyRatio": 7193.455560267697,
      "tiers": [
        {
          "tierNumber": 2152,
          "tierName": "JUMOIEHQ"
        }
      ]
    },
    "entityInformation": {
      "entityType": "BNIORZDCQZ",
      "entityId": 4775
    },
    "regularPointsIssued": 5703.557089906072,
    "customerIdentifiers": {
      "loyaltyType": "CGSRUDZ",
      "ecommerce": {
        "accounts": [
          {
            "accountId": "XPHBKUZXIB",
            "identifiers": [
              {
                "identifierType": "EAGE",
                "identifierValue": "PCW"
              }
            ]
          }
        ]
      },
      "lastName": "WJCJ",
      "facebook": {
        "accounts": [
          {
            "accountId": "OHXXJHOFO",
            "identifiers": [
              {
                "identifierType": "CDRW",
                "identifierValue": "BODBZZ"
              }
            ]
          }
        ]
      },
      "wechat": {
        "accounts": [
          {
            "accountId": "ANILF",
            "identifiers": [
              {
                "identifierType": "FSKYFYHBF",
                "identifierValue": "FBZ"
              }
            ]
          }
        ]
      },
      "tmall": {
        "accounts": [
          {
            "accountId": "VHMEAWEE",
            "identifiers": [
              {
                "identifierType": "TFZSEAL",
                "identifierValue": "YVFGBB"
              }
            ]
          }
        ]
      },
      "toabao": {
        "accounts": [
          {
            "accountId": "ICRZ",
            "identifiers": [
              {
                "identifierType": "BCGPKCUCGW",
                "identifierValue": "APPRTQ"
              }
            ]
          }
        ]
      },
      "web_engage": {
        "accounts": [
          {
            "accountId": "ETSKTJS",
            "identifiers": [
              {
                "identifierType": "WQJJGMRJDL",
                "identifierValue": "AMEJYHLGB"
              }
            ]
          }
        ]
      },
      "line": {
        "accounts": [
          {
            "accountId": "KUFFL",
            "identifiers": [
              {
                "identifierType": "UWH",
                "identifierValue": "QPVTG"
              }
            ]
          }
        ]
      },
      "martjack": {
        "accounts": [
          {
            "accountId": "RLL",
            "identifiers": [
              {
                "identifierType": "FAXQQ",
                "identifierValue": "OMNFWLM"
              }
            ]
          }
        ]
      },
      "customerId": 560,
      "jd": {
        "accounts": [
          {
            "accountId": "IDDWTW",
            "identifiers": [
              {
                "identifierType": "YUIQNYBXPT",
                "identifierValue": "MCSZQNMECZ"
              }
            ]
          }
        ]
      },
      "website": {
        "accounts": [
          {
            "accountId": "CENVUQVPY",
            "identifiers": [
              {
                "identifierType": "NWZRKBWRIZ",
                "identifierValue": "PPLNJJBFS"
              }
            ]
          }
        ]
      },
      "firstName": "YCJY",
      "instore": {
        "id": 1157,
        "mobile": "CMXXR",
        "email": "EFURLN",
        "externalId": "UVQVJCGPML",
        "cardnumber": "YVVWILV",
        "cardexternalid": "BHIE",
        "cardNumbers": [
          "GOTM"
        ]
      }
    },
    "programLifetimePoints": 2846.107279290264,
    "totalPointsIssued": 6510.759150312034,
    "promisedPointsIssued": [
      {
        "promisedPoints": 4529.358293994886,
        "isExternalTriggerBased": true,
        "promisedPointsConversionDate": "UUQYHMEWW",
        "promotionIdentifier": "UVHDQODUOC"
      }
    ],
    "programCurrentPoints": 6019.584003340424,
    "triggeringActivity": {
      "name": "XMRY",
      "identifiers": [
        {
          "key": "EAPCH",
          "value": "PPIHCJ"
        }
      ],
      "enteredBy": {
        "id": 9270,
        "till": {
          "code": "WJWHIF",
          "name": "TWSSAIX"
        },
        "store": {
          "code": "WHP",
          "name": "ZFNSC",
          "externalId": "NQR",
          "externalId1": "ZAUZXUR",
          "externalId2": "IMNTRKAB"
        }
      },
      "entityInformation": {
        "entityType": "JHNXMKRVJ",
        "entityId": 2118
      },
      "additionalAttributes": [
        {
          "key": "DBUOQJTT",
          "value": "GDBKC"
        }
      ]
    },
    "loyaltyProgramId": 9611,
    "regularPointsBreakup": [
      {
        "points": 9004.830375424139,
        "expiryAt": "QHBZZWGAW"
      }
    ],
    "promotionalPointsIssued": [
      {
        "promotionName": "BATZEJPPO",
        "promotionIdentifier": "UXCXS",
        "promotionType": "SZGQITC",
        "promotionPoints": 5852.986060543114,
        "promotionPointsExpiryDate": "CHRBDTBFP"
      }
    ]
  },
  "refId": "SYTIRZNM",
  "loyaltyEventId": "UXAYDKKGL",
  "apiRequestId": "TKJBXICQP",
  "eventId": "WTUVM",
  "createdAt": 9764,
  "traceAttributes": {
    "PIDUYNYL": "UQTYO",
    "CNUDMJSXQV": "QNMPTGCUS"
  },
  "orgId": 5795
}
```

## Points Redeemed Event (pointsRedeemed)

Notifies when a user has redeemed points.

<Table align={["left","left","left"]}>
  <thead>
    <tr>
      <th>
        **Parameter**
      </th>

      <th>
        **Data Type**
      </th>

      <th>
        **Description**
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        eventId
      </td>

      <td>
        String
      </td>

      <td>
        Unique identifier for the event.
      </td>
    </tr>

    <tr>
      <td>
        eventLogId
      </td>

      <td>
        Integer
      </td>

      <td>
        Unique ID that is generated when the event is triggered.
      </td>
    </tr>

    <tr>
      <td>
        eventType
      </td>

      <td>
        String
      </td>

      <td>
        Type of event (e.g., "pointsRedeemed").
      </td>
    </tr>

    <tr>
      <td>
        consumerGroupId
      </td>

      <td>
        Integer
      </td>

      <td>
        Identifier for the consumer group (null if not applicable).
      </td>
    </tr>

    <tr>
      <td>
        actionType
      </td>

      <td>
        String
      </td>

      <td>
        Action type of the event (e.g., "START").
      </td>
    </tr>

    <tr>
      <td>
        timeStamp
      </td>

      <td>
        Integer
      </td>

      <td>
        Timestamp of the event in milliseconds since epoch.
      </td>
    </tr>

    <tr>
      <td>
        attributes
      </td>

      <td>
        Object
      </td>

      <td>
        Contains details about the attributes of the event.
      </td>
    </tr>

    <tr>
      <td>
        * createdAt
      </td>

      <td>
        Integer
      </td>

      <td>
        Timestamp when the event was created (milliseconds since epoch).
      </td>
    </tr>

    <tr>
      <td>
        * data
      </td>

      <td>
        Object
      </td>

      <td>
        Contains specific data related to the event.
      </td>
    </tr>

    <tr>
      <td>
        -- customerIdentifiers
      </td>

      <td>
        Object
      </td>

      <td>
        Contains identifiers for the customer.
      </td>
    </tr>

    <tr>
      <td>
        --- customerId
      </td>

      <td>
        Integer
      </td>

      <td>
        Unique identifier for the customer.
      </td>
    </tr>

    <tr>
      <td>
        --- instore
      </td>

      <td>
        Object
      </td>

      <td>
        Contains in-store customer information.
      </td>
    </tr>

    <tr>
      <td>
        ---- mobile
      </td>

      <td>
        String
      </td>

      <td>
        Mobile number of the customer.
      </td>
    </tr>

    <tr>
      <td>
        ---- email
      </td>

      <td>
        String
      </td>

      <td>
        Email address of the customer.
      </td>
    </tr>

    <tr>
      <td>
        -- entityInformation
      </td>

      <td>
        Object
      </td>

      <td>
        Contains information about the entity involved in the event.
      </td>
    </tr>

    <tr>
      <td>
        --- entityType
      </td>

      <td>
        String
      </td>

      <td>
        Type of the entity (e.g., "USER").
      </td>
    </tr>

    <tr>
      <td>
        --- entityId
      </td>

      <td>
        Integer
      </td>

      <td>
        Unique identifier for the entity.
      </td>
    </tr>

    <tr>
      <td>
        -- triggeringActivity
      </td>

      <td>
        Object
      </td>

      <td>
        It contains information about the activity that triggered the event.
      </td>
    </tr>

    <tr>
      <td>
        --- name
      </td>

      <td>
        String
      </td>

      <td>
        Name of the triggering activity (e.g., "PointsRedemption").
      </td>
    </tr>

    <tr>
      <td>
        --- identifiers
      </td>

      <td>
        Array of Objects
      </td>

      <td>
        List of identifiers related to the triggering activity.
      </td>
    </tr>

    <tr>
      <td>
        ---- key
      </td>

      <td>
        String
      </td>

      <td>
        Key identifier (e.g., "bill Id").
      </td>
    </tr>

    <tr>
      <td>
        ---- value
      </td>

      <td>
        String
      </td>

      <td>
        Value corresponding to the key (e.g., "-1").
      </td>
    </tr>

    <tr>
      <td>
        --- enteredBy
      </td>

      <td>
        Object
      </td>

      <td>
        Information about the user who entered the activity.
      </td>
    </tr>

    <tr>
      <td>
        ---- id
      </td>

      <td>
        Integer
      </td>

      <td>
        Unique identifier for the user who entered the activity.
      </td>
    </tr>

    <tr>
      <td>
        --- entityInformation
      </td>

      <td>
        Object
      </td>

      <td>
        Contains information about the entity related to the triggering activity.
      </td>
    </tr>

    <tr>
      <td>
        ---- entityType
      </td>

      <td>
        String
      </td>

      <td>
        Type of the entity (e.g., "USER").
      </td>
    </tr>

    <tr>
      <td>
        ---- entityId
      </td>

      <td>
        Integer
      </td>

      <td>
        Unique identifier for the entity.
      </td>
    </tr>

    <tr>
      <td>
        --- additionalAttributes
      </td>

      <td>
        Array
      </td>

      <td>
        Additional attributes related to the triggering activity (empty in this case).
      </td>
    </tr>

    <tr>
      <td>
        -- loyaltyProgramDetails
      </td>

      <td>
        Object
      </td>

      <td>
        Contains details about the loyalty program.
      </td>
    </tr>

    <tr>
      <td>
        --- id
      </td>

      <td>
        Integer
      </td>

      <td>
        Unique identifier for the loyalty program.
      </td>
    </tr>

    <tr>
      <td>
        --- name
      </td>

      <td>
        String
      </td>

      <td>
        Name of the loyalty program (e.g., "Louis PhilippeDefaultProgram").
      </td>
    </tr>

    <tr>
      <td>
        --- isDefault
      </td>

      <td>
        Boolean
      </td>

      <td>
        Indicates if the program is the default program.
      </td>
    </tr>

    <tr>
      <td>
        --- pointsToCurrencyRatio
      </td>

      <td>
        Float
      </td>

      <td>
        Points-to-currency conversion ratio..
      </td>
    </tr>

    <tr>
      <td>
        --- tiers
      </td>

      <td>
        Array of Objects
      </td>

      <td>
        List of tiers in the loyalty program.
      </td>
    </tr>

    <tr>
      <td>
        ---- tierNumber
      </td>

      <td>
        Integer
      </td>

      <td>
        Number of the tier (e.g., 1 for Silver).
      </td>
    </tr>

    <tr>
      <td>
        ---- tierName
      </td>

      <td>
        String
      </td>

      <td>
        Name of the tier (e.g., "Silver").
      </td>
    </tr>

    <tr>
      <td>
        loyaltyProgramId
      </td>

      <td>
        Integer
      </td>

      <td>
        Unique identifier for the loyalty program.
      </td>
    </tr>

    <tr>
      <td>
        totalPointsRedeemed
      </td>

      <td>
        Float
      </td>

      <td>
        Total points redeemed in this transaction.
      </td>
    </tr>

    <tr>
      <td>
        redemptionSummaryId
      </td>

      <td>
        Integer
      </td>

      <td>
        Unique identifier for the redemption summary.
      </td>
    </tr>

    <tr>
      <td>
        redeemedPointsCurrencyValue
      </td>

      <td>
        Float
      </td>

      <td>
        Currency value of the redeemed points.
      </td>
    </tr>

    <tr>
      <td>
        redemptionNotes
      </td>

      <td>
        String
      </td>

      <td>
        Notes regarding the redemption (empty in this case).
      </td>
    </tr>

    <tr>
      <td>
        redemptionBillNumber
      </td>

      <td>
        String
      </td>

      <td>
        Bill number associated with the redemption.
      </td>
    </tr>

    <tr>
      <td>
        isGroupRedemption
      </td>

      <td>
        Boolean
      </td>

      <td>
        Indicates if the redemption is part of a group.
      </td>
    </tr>

    <tr>
      <td>
        -- redemptionFromEarningPrograms
      </td>

      <td>
        Array of Objects
      </td>

      <td>
        Details of redemption from earning programs.
      </td>
    </tr>

    <tr>
      <td>
        --- programId
      </td>

      <td>
        Integer
      </td>

      <td>
        Unique identifier for the earning program.
      </td>
    </tr>

    <tr>
      <td>
        --- points Redeemed
      </td>

      <td>
        Float
      </td>

      <td>
        Total points redeemed from the earning program.
      </td>
    </tr>

    <tr>
      <td>
        --- programCurrentPoints
      </td>

      <td>
        Float
      </td>

      <td>
        Current points in the program after redemption.
      </td>
    </tr>

    <tr>
      <td>
        loyaltyEventId
      </td>

      <td>
        String
      </td>

      <td>
        Unique identifier for the loyalty event.
      </td>
    </tr>

    <tr>
      <td>
        eventName
      </td>

      <td>
        String
      </td>

      <td>
        Name of the event (e.g., "pointsRedeemed").
      </td>
    </tr>

    <tr>
      <td>
        refId
      </td>

      <td>
        String
      </td>

      <td>
        This is a combination of org id and loyalty event ID and is used for internal debugging purpose
      </td>
    </tr>

    <tr>
      <td>
        apiRequestId
      </td>

      <td>
        String
      </td>

      <td>
        Unique identifier for the API request.
      </td>
    </tr>

    <tr>
      <td>
        orgId
      </td>

      <td>
        Integer
      </td>

      <td>
        Unique identifier for the organization.
      </td>
    </tr>
  </tbody>
</Table>

Sample schema of group program redemption.

```json Enriched payload
{
  "eventId": "3b231837-db52-48cb-a405-cc162f2e1bd6",
  "eventLogId": 34805323,
  "eventType": "pointsRedeemed",
  "consumerGroupId": null,
  "actionType": " START",
  "timeStamp": 1683874869558,
  "attributes": {
    "createdAt": 1683874869545,
    "data": {
      "customerIdentifiers": {
        "customerId": 161943766,
        "instore": {
          "mobile": "917984690285",
          "email ": "amrinshekh157@gmail.com"
        }
      },
      "entityInformation": {
        "entityType": "USER",
        "entityId": 161943766
      },
      "triggeringActivity": {
        "name": "PointsRedemption",
        "identifiers": [
          {
            "key": "bill Id",
            "value": "-1"
          },
          {
            "key": "redemptionId",
            "value": "xMQy8y"
          }
        ],
        "enteredBy": {
          "id": 200316761
        },
        "entityInformation": {
          "entityType": "USER",
          "entityId": 161943766
        },
        "additionalAttributes": [
          
        ]
      },
      "loyaltyProgramDetails": {
        "id": 101,
        "name": "Louis PhilippeDefaultProgram",
        "isDefault": true,
        "pointsToCurrencyRatio": 0.5,
        "tiers": [
          {
            "tierNumber": 1,
            "tierName": " Silver"
          },
          {
            "tierNumber": 2,
            "tierName": "Gold"
          },
          {
            "tierNumber": 3,
            "tierName": "Platinum"
          }
        ]
      },
      "loyaltyProgramId": 101,
      "totalPointsRedeemed": 1500.0,
      "redemptionSummaryId": 9547005,
      "redeemedPointsCurrencyValue": 750.0,
      "redemptionNotes": "",
      "redemptionBillNumber": "SA8269614",
      "isGroupRedemption": false,
      "redemptionFromEarningPrograms": [
        {
          "programId": 101,
          "points Redeemed": 1500.0,
          "programCurrentPoints": 0.0
        }
      ]
    },
    "loyaltyEventId": "SHjlZN6x2e",
    "eventName": "pointsRedeemed",
    "refId": "150098_SHjlZN6x2e",
    "apiRequestId": "6f2131aeb479a10e5987a f16c915904b",
    "orgId": 150098
  }
}
```
```json Raw payload
{
  "eventName": "pointsRedeemed",
  "eventLogId": 4586,
  "data": {
    "isGroupRedemption": true,
    "redeemedPointsCurrencyValue": 8234.799159735314,
    "totalPointsRedeemed": 2558.487577514749,
    "redemptionFromEarningPrograms": [
      {
        "programId": 546,
        "pointsRedeemed": 1770.206618710301,
        "programCurrentPoints": 4286.672056498865
      }
    ],
    "loyaltyProgramDetails": {
      "id": 4892,
      "name": "LNBKLL",
      "isDefault": true,
      "pointsToCurrencyRatio": 1664.536695716984,
      "tiers": [
        {
          "tierNumber": 840,
          "tierName": "SMFFQFVV"
        }
      ]
    },
    "entityInformation": {
      "entityType": "MIMABJ",
      "entityId": 5351
    },
    "customerIdentifiers": {
      "loyaltyType": "BMQMXF",
      "ecommerce": {
        "accounts": [
          {
            "accountId": "GEBGDSWM",
            "identifiers": [
              {
                "identifierType": "URXYOH",
                "identifierValue": "IGELV"
              }
            ]
          }
        ]
      },
      "lastName": "LAF",
      "facebook": {
        "accounts": [
          {
            "accountId": "DVE",
            "identifiers": [
              {
                "identifierType": "GKWRFTOPW",
                "identifierValue": "MAHSRQ"
              }
            ]
          }
        ]
      },
      "wechat": {
        "accounts": [
          {
            "accountId": "GYPU",
            "identifiers": [
              {
                "identifierType": "WHPLQUXYJ",
                "identifierValue": "BPTRS"
              }
            ]
          }
        ]
      },
      "tmall": {
        "accounts": [
          {
            "accountId": "HKJEFHE",
            "identifiers": [
              {
                "identifierType": "WIUPCON",
                "identifierValue": "YHEAFRR"
              }
            ]
          }
        ]
      },
      "toabao": {
        "accounts": [
          {
            "accountId": "MEXHTFATSZ",
            "identifiers": [
              {
                "identifierType": "GQOOWTY",
                "identifierValue": "FGUEAC"
              }
            ]
          }
        ]
      },
      "web_engage": {
        "accounts": [
          {
            "accountId": "FEHI",
            "identifiers": [
              {
                "identifierType": "OWZQ",
                "identifierValue": "XPALKP"
              }
            ]
          }
        ]
      },
      "line": {
        "accounts": [
          {
            "accountId": "OHKHQYM",
            "identifiers": [
              {
                "identifierType": "IQAMRSVYCU",
                "identifierValue": "INNGVSF"
              }
            ]
          }
        ]
      },
      "martjack": {
        "accounts": [
          {
            "accountId": "UTKFHHCPS",
            "identifiers": [
              {
                "identifierType": "QFGVMWBUE",
                "identifierValue": "RDVSGFIMLY"
              }
            ]
          }
        ]
      },
      "customerId": 6323,
      "jd": {
        "accounts": [
          {
            "accountId": "OCYQR",
            "identifiers": [
              {
                "identifierType": "RQEYKYOKM",
                "identifierValue": "AUVBGHVBDR"
              }
            ]
          }
        ]
      },
      "website": {
        "accounts": [
          {
            "accountId": "COVC",
            "identifiers": [
              {
                "identifierType": "QXSCIUSIFC",
                "identifierValue": "KIKK"
              }
            ]
          }
        ]
      },
      "firstName": "ILHFTVTGS",
      "instore": {
        "id": 6618,
        "mobile": "XKJXVKJVZZ",
        "email": "WTAFTCL",
        "externalId": "AOUQWF",
        "cardnumber": "CGAUENQ",
        "cardexternalid": "PMSDNAWD",
        "cardNumbers": [
          "WKQUHBT"
        ]
      }
    },
    "redemptionSummaryId": 7910,
    "redemptionNotes": "LEOARX",
    "triggeringActivity": {
      "name": "BLNFLQEO",
      "identifiers": [
        {
          "key": "JOVKXOGU",
          "value": "KPVASINJH"
        }
      ],
      "enteredBy": {
        "id": 1307,
        "till": {
          "code": "VMIUMQ",
          "name": "YZICZRPKKL"
        },
        "store": {
          "code": "WWTQR",
          "name": "CJTGRQH",
          "externalId": "TENNIHC",
          "externalId1": "ZGHEUC",
          "externalId2": "RKI"
        }
      },
      "entityInformation": {
        "entityType": "IEZZDPZA",
        "entityId": 3585
      },
      "additionalAttributes": [
        {
          "key": "ESTTJQ",
          "value": "YGTYZPZRMA"
        }
      ]
    },
    "loyaltyProgramId": 7480,
    "redemptionBillNumber": "ATBUBXFCET"
  },
  "refId": "YTWPHLQNUL",
  "loyaltyEventId": "RRCAJP",
  "apiRequestId": "UDXZVUAFDG",
  "eventId": "ZJVKKQD",
  "createdAt": 9229,
  "traceAttributes": {
    "RTAZ": "OFK",
    "IQG": "SIQHUGMK"
  },
  "orgId": 4526
}
```

Sample schema of Participating Program Redemption

```json Enriched payload
{
   "eventName":"pointsRedeemed",
   "eventId":"ABC-87484sdas&$",
   "eventLogId": 34805312
   "orgId":1655,
   "refId":"1655_684494987",
   "createdAt":156474848484,
   "data":{
      "customerIdentifiers":{
         "customerId":876,
         "Instore":{
            "mobile":"919740000000",
            "email":"tom@email.com",
            "externalId":"536236462453"
         },
         "wechat":{
            "accounts":[
               {
                  "accountId":"HDHSDHS32347287D",
                  "identifiers":[
                     {
                        "identifierType":"wechatId",
                        "identifierValue":"SGHDGAHA74278sdfG"
                     }
                  ]
               },
               {
                  "accountId":"JKLMNOPuy4y3554Y",
                  "identifiers":[
                     {
                        "identifierType":"wechatId",
                        "identifierValue":"cbdhdhhad74278sdfj"
                     }
                  ]
               }
            ]
         }
      },
      "triggeringActivity":{
         "name":"pointsRedemption",
         "identifiers":[
            {
               "key":"billId",
               "value":"123456"
            }
         ],
         "enteredAt":{
            "id":949,
            "store":{
               "code":"str1.brand",
               "name":"str1.brand",
               "externalId":"DFSDHGFSH6642664617",
               "externalId1":"GDGSDHDGH3744277474",
               "externalId2":"GHSDGHGHH6776246444"
            },
            "till":{
               "code":"till1.str1.brand",
               "name":"till1.str1.brand"
            }
         }
      },
      "loyaltyProgramId":1487,
      "totalPointsRedeemed":235,
      "redeemedPointsCurrencyValue":470,
      "redemptionFromEarningPrograms":[
         {
            "programId":1487,
            "pointsRedeemed":235,
            "programCurrentPoints":500
         }
      ]
   }
}
```

## Promised Points Conversion to Current Points Event (promisedToCurrentPointsConversion)

Notifies when promised points are converted to current points in a loyalty program.

<Table align={["left","left","left"]}>
  <thead>
    <tr>
      <th>
        **Parameter**
      </th>

      <th>
        **Data Type**
      </th>

      <th>
        **Description**
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        eventId
      </td>

      <td>
        String
      </td>

      <td>
        Unique identifier for the event.
      </td>
    </tr>

    <tr>
      <td>
        eventLogId
      </td>

      <td>
        Integer
      </td>

      <td>
        Unique ID that is generated when the event is triggered.
      </td>
    </tr>

    <tr>
      <td>
        eventType
      </td>

      <td>
        String
      </td>

      <td>
        It combines the orgid and event name (e.g., "1000006_promisedToCurrentPointsConversion").
      </td>
    </tr>

    <tr>
      <td>
        consumerGroupId
      </td>

      <td>
        Null
      </td>

      <td>
        Identifier for the consumer group (null if not applicable).
      </td>
    </tr>

    <tr>
      <td>
        actionType
      </td>

      <td>
        String
      </td>

      <td>
        Action type of the event (e.g., "START").
      </td>
    </tr>

    <tr>
      <td>
        timeStamp
      </td>

      <td>
        Integer
      </td>

      <td>
        Timestamp of the event in milliseconds since epoch.
      </td>
    </tr>

    <tr>
      <td>
        attributes
      </td>

      <td>
        Object
      </td>

      <td>
        Contains details about the event attributes.
      </td>
    </tr>

    <tr>
      <td>
        * createdAt
      </td>

      <td>
        Integer
      </td>

      <td>
        Timestamp when the event was created (milliseconds since epoch).
      </td>
    </tr>

    <tr>
      <td>
        * data
      </td>

      <td>
        Object
      </td>

      <td>
        Contains specific data related to the event.
      </td>
    </tr>

    <tr>
      <td>
        -- customerIdentifiers
      </td>

      <td>
        Object
      </td>

      <td>
        Contains identifiers for the customer.
      </td>
    </tr>

    <tr>
      <td>
        --- customerId
      </td>

      <td>
        Integer
      </td>

      <td>
        Unique identifier for the customer.
      </td>
    </tr>

    <tr>
      <td>
        --- instore
      </td>

      <td>
        Object
      </td>

      <td>
        Contains in-store customer information.
      </td>
    </tr>

    <tr>
      <td>
        ---- mobile
      </td>

      <td>
        String
      </td>

      <td>
        Mobile number of the customer.
      </td>
    </tr>

    <tr>
      <td>
        ---- email
      </td>

      <td>
        String
      </td>

      <td>
        Email address of the customer.
      </td>
    </tr>

    <tr>
      <td>
        -- entityInformation
      </td>

      <td>
        Object
      </td>

      <td>
        Contains information about the entity involved in the event.
      </td>
    </tr>

    <tr>
      <td>
        --- entityType
      </td>

      <td>
        String
      </td>

      <td>
        Type of the entity (e.g., "USER").
      </td>
    </tr>

    <tr>
      <td>
        --- entityId
      </td>

      <td>
        Integer
      </td>

      <td>
        Unique identifier for the entity.
      </td>
    </tr>

    <tr>
      <td>
        -- earningActivityReference
      </td>

      <td>
        Array of Objects
      </td>

      <td>
        List of references to earning activities.
      </td>
    </tr>

    <tr>
      <td>
        --- name
      </td>

      <td>
        String
      </td>

      <td>
        Name of the earning activity (e.g., "TransactionAdd").
      </td>
    </tr>

    <tr>
      <td>
        --- enteredAt
      </td>

      <td>
        Float
      </td>

      <td>
        Timestamp of when the activity was entered (in milliseconds).
      </td>
    </tr>

    <tr>
      <td>
        --- pointsConverted
      </td>

      <td>
        Float
      </td>

      <td>
        Points converted during the activity.
      </td>
    </tr>

    <tr>
      <td>
        --- identifiers
      </td>

      <td>
        Array of Objects
      </td>

      <td>
        List of identifiers related to the earning activity.
      </td>
    </tr>

    <tr>
      <td>
        ---- key
      </td>

      <td>
        String
      </td>

      <td>
        Key identifier (e.g., "billNumber").
      </td>
    </tr>

    <tr>
      <td>
        ---- value
      </td>

      <td>
        String
      </td>

      <td>
        The value corresponding to the key.
      </td>
    </tr>

    <tr>
      <td>
        ---- key (second)
      </td>

      <td>
        String
      </td>

      <td>
        Second key identifier (e.g., "EventLogId").
      </td>
    </tr>

    <tr>
      <td>
        ---- value (second)
      </td>

      <td>
        String
      </td>

      <td>
        The value corresponds to the second key.
      </td>
    </tr>

    <tr>
      <td>
        -- loyaltyProgramDetails
      </td>

      <td>
        Object
      </td>

      <td>
        Contains details about the loyalty program.
      </td>
    </tr>

    <tr>
      <td>
        --- id
      </td>

      <td>
        Integer
      </td>

      <td>
        Unique identifier for the loyalty program.
      </td>
    </tr>

    <tr>
      <td>
        --- name
      </td>

      <td>
        String
      </td>

      <td>
        Name of the loyalty program (e.g., "Tata 1mg").
      </td>
    </tr>

    <tr>
      <td>
        --- isDefault
      </td>

      <td>
        Boolean
      </td>

      <td>
        Indicates if the program is the default program.
      </td>
    </tr>

    <tr>
      <td>
        --- pointsToCurrencyRatio
      </td>

      <td>
        Float
      </td>

      <td>
        Points-to-currency conversion ratio.
      </td>
    </tr>

    <tr>
      <td>
        --- tiers
      </td>

      <td>
        Array of Objects
      </td>

      <td>
        List of tiers in the loyalty program.
      </td>
    </tr>

    <tr>
      <td>
        ---- tierNumber
      </td>

      <td>
        Integer
      </td>

      <td>
        Number of the tier (e.g., 1 for Base).
      </td>
    </tr>

    <tr>
      <td>
        ---- tierName
      </td>

      <td>
        String
      </td>

      <td>
        Name of the tier (e.g., "Base").
      </td>
    </tr>

    <tr>
      <td>
        loyaltyProgramId
      </td>

      <td>
        Integer
      </td>

      <td>
        Unique identifier for the loyalty program.
      </td>
    </tr>

    <tr>
      <td>
        pointsConverted
      </td>

      <td>
        Float
      </td>

      <td>
        Total points converted in this transaction.
      </td>
    </tr>

    <tr>
      <td>
        programCurrentPoints
      </td>

      <td>
        Float
      </td>

      <td>
        Current points in the program.
      </td>
    </tr>

    <tr>
      <td>
        programLifetimePoints
      </td>

      <td>
        Float
      </td>

      <td>
        Total points earned in the program lifetime.
      </td>
    </tr>

    <tr>
      <td>
        pointsConversionSource
      </td>

      <td>
        String
      </td>

      <td>
        Source of the points conversion (e.g., "systemTrigger").
      </td>
    </tr>

    <tr>
      <td>
        pointsConvertedBreakup
      </td>

      <td>
        Array
      </td>

      <td>
        Breakdown of the converted points (empty in this case).
      </td>
    </tr>

    <tr>
      <td>
        loyaltyEventId
      </td>

      <td>
        String
      </td>

      <td>
        Unique identifier for the loyalty event.
      </td>
    </tr>

    <tr>
      <td>
        eventName
      </td>

      <td>
        String
      </td>

      <td>
        Name of the event (e.g., "promisedToCurrentPointsConversion").
      </td>
    </tr>

    <tr>
      <td>
        refId
      </td>

      <td>
        String
      </td>

      <td>
        This is a combination of org id and loyalty event ID and is used for internal debugging purposes.
      </td>
    </tr>

    <tr>
      <td>
        apiRequestId
      </td>

      <td>
        String
      </td>

      <td>
        Unique identifier for the API request.
      </td>
    </tr>

    <tr>
      <td>
        orgId
      </td>

      <td>
        Integer
      </td>

      <td>
        Unique identifier for the organization.
      </td>
    </tr>
  </tbody>
</Table>

```json Enriched payload
{
  "eventId": "f993741a-89f3-46c8-b70f-6f45cfce7dba",
  "eventLogId": 34805016,
  "eventType": "1000006_promisedToCurrentPointsConversion",
  "consumerGroupId": null,
  "actionType": "START",
  "timeStamp": 1683867642290,
  "attributes": {
    "createdAt": 1683867642243,
    "data": {
      "customerIdentifiers": {
        "customerId": 130354474,
        "instore": {
          "mobile": "d9ace8e94d6f779ff845a401f9dd50a7",
          "email": "d9ace8e94d6f779ff845a401f9dd50a7"
        }
      },
      "entityInformation": {
        "entityType": "USER",
        "entityId": 130354474
      },
      "earningActivityReference": [
        {
          "name": "TransactionAdd",
          "enteredAt": 1.657437873E12,
          "pointsConverted": 0.0,
          "identifiers": [
            {
              "key": "billNumber",
              "value": "PO19022266733111"
            },
            {
              "ke y": "EventLogId",
              "value": "448823777"
            }
          ]
        }
      ],
      "loyaltyProgramDetails": {
        "id": 1000038,
        "name": "Tata 1mg",
        "isDefault": false,
        "pointsToCurrencyRatio": 1.0,
        "tiers": [
          {
            "tierNumber": 1,
            "tierName": "Base"
          },
          {
            "tierNumber": 2,
            "tierName": "1MGCare"
          }
        ]
      },
      "loyaltyProgramId": 1000038,
      "pointsConverted": 0.269,
      "programCurrentPoints": 0.269,
      "programLifetimePoints": 13.269,
      "pointsConversionSource": "systemTrigger",
      "pointsConvertedBreakup": [
        
      ]
    },
    "loyaltyEventId": "9mQMu01tPA6me2X",
    "eventName": "promisedToCurrentPointsConversion",
    "refId": "1000006_9m QMu01tPA6me2X",
    "apiRequestId": "6f9d2624-efa9-4010-a6e4-3022cfeb905b",
    "orgId": 1000006
  }
}
```
```json Raw payload
{
  "eventName": "promisedToCurrentPointsConversion",
  "eventLogId": 1978,
  "data": {
    "billId": 6803,
    "loyaltyProgramDetails": {
      "id": 648,
      "name": "FVLTXBJWTD",
      "isDefault": true,
      "pointsToCurrencyRatio": 7387.484163913019,
      "tiers": [
        {
          "tierNumber": 4695,
          "tierName": "EEHERR"
        }
      ]
    },
    "eventLogId": 2424,
    "entityInformation": {
      "entityType": "BPDWQ",
      "entityId": 4075
    },
    "pointsConvertedType": "QTTWUEBL",
    "pointsConvertedBreakup": [
      {
        "entityName": "JZNRGCVKH",
        "entityDetails": {
          "id": 2029,
          "billNumber": "FGJWZ",
          "itemCode": "XBCN",
          "billDate": "MWK"
        },
        "promotionalPointsBreakup": [
          {
            "points": "IHME",
            "programId": 5340,
            "promotionId": 5921,
            "promotionName": "RRPXVLYMC",
            "promotionDetails": [
              {
                "issueRestrictions": [],
                "linkedTargetGroupVsTargetRuleIdMap": {},
                "promotionEndDate": "XOZDFSIJQ",
                "customFields": [],
                "promotionIdentifier": "WEA",
                "promotionStartDate": "MFORSIGN",
                "promotionName": "MUPROWHGHR",
                "redemptionRestrictions": [],
                "pointsOfferType": "JLP",
                "promotionDescription": "JTWMYQD",
                "promotionType": "MYFQGBE",
                "promotionId": 1966,
                "earnRestrictions": [],
                "programId": 2928
              }
            ]
          }
        ],
        "nonPromotionalPointsBreakup": [
          {
            "points": "JQZGD",
            "programId": 537
          }
        ]
      }
    ],
    "customerIdentifiers": {
      "loyaltyType": "GTZAW",
      "ecommerce": {
        "accounts": [
          {
            "accountId": "GAIAPSKKZC",
            "identifiers": [
              {
                "identifierType": "ZZJVEJBCI",
                "identifierValue": "UBBNBUCVA"
              }
            ]
          }
        ]
      },
      "lastName": "OWGRGM",
      "facebook": {
        "accounts": [
          {
            "accountId": "JXOYLXWCMG",
            "identifiers": [
              {
                "identifierType": "ISFNGBJ",
                "identifierValue": "TWB"
              }
            ]
          }
        ]
      },
      "wechat": {
        "accounts": [
          {
            "accountId": "XOK",
            "identifiers": [
              {
                "identifierType": "OEHQM",
                "identifierValue": "LZS"
              }
            ]
          }
        ]
      },
      "tmall": {
        "accounts": [
          {
            "accountId": "UGPYPGXW",
            "identifiers": [
              {
                "identifierType": "FNNUKTROIC",
                "identifierValue": "ZTLD"
              }
            ]
          }
        ]
      },
      "toabao": {
        "accounts": [
          {
            "accountId": "MADOR",
            "identifiers": [
              {
                "identifierType": "XRIDGNABIJ",
                "identifierValue": "FRG"
              }
            ]
          }
        ]
      },
      "web_engage": {
        "accounts": [
          {
            "accountId": "NGASLHZD",
            "identifiers": [
              {
                "identifierType": "EJGVCSU",
                "identifierValue": "WXOA"
              }
            ]
          }
        ]
      },
      "line": {
        "accounts": [
          {
            "accountId": "XSPSLWPU",
            "identifiers": [
              {
                "identifierType": "PMNEECGSBG",
                "identifierValue": "PAG"
              }
            ]
          }
        ]
      },
      "martjack": {
        "accounts": [
          {
            "accountId": "AHLFJEPQWD",
            "identifiers": [
              {
                "identifierType": "QQLVRWZJ",
                "identifierValue": "SUHE"
              }
            ]
          }
        ]
      },
      "customerId": 1256,
      "jd": {
        "accounts": [
          {
            "accountId": "JXYBUGYN",
            "identifiers": [
              {
                "identifierType": "PPGSS",
                "identifierValue": "QBIBG"
              }
            ]
          }
        ]
      },
      "website": {
        "accounts": [
          {
            "accountId": "SNIEZIFKN",
            "identifiers": [
              {
                "identifierType": "VCIARTFAEP",
                "identifierValue": "GZJ"
              }
            ]
          }
        ]
      },
      "firstName": "UIHEPP",
      "instore": {
        "id": 7769,
        "mobile": "FGDBYBUHVJ",
        "email": "PSI",
        "externalId": "HMD",
        "cardnumber": "HCMKXHTYOP",
        "cardexternalid": "STRCN",
        "cardNumbers": [
          "GNCBRYV"
        ]
      }
    },
    "pointsConverted": 857.7947187149446,
    "programLifetimePoints": 3948.3108433315565,
    "earningActivityReference": [
      {
        "name": "ERCJAQP",
        "enteredAt": 2012.2512265742916,
        "pointsConverted": 3311.36366555431,
        "identifiers": [
          {
            "key": "EOGD",
            "value": "AXRMSM"
          }
        ]
      }
    ],
    "pointsConversionSource": "CAUI",
    "eventDateTime": "RKHHCJI",
    "programCurrentPoints": 6026.346422851843,
    "triggeringActivity": {
      "name": "KVNWST",
      "identifiers": [
        {
          "key": "STHCMZQ",
          "value": "SUOWWLU"
        }
      ],
      "enteredBy": {
        "id": 3468,
        "till": {
          "code": "ZVVOAHJJH",
          "name": "IGII"
        },
        "store": {
          "code": "CGSTGQP",
          "name": "DMX",
          "externalId": "NRA",
          "externalId1": "THY",
          "externalId2": "BGYP"
        }
      },
      "entityInformation": {
        "entityType": "UDTAXIXKAK",
        "entityId": 7869
      },
      "additionalAttributes": [
        {
          "key": "KSJ",
          "value": "DXTAXA"
        }
      ]
    },
    "loyaltyProgramId": 6232
  },
  "refId": "FAJPTZHDVX",
  "loyaltyEventId": "LLUGLOUAP",
  "apiRequestId": "DUY",
  "eventId": "CKCC",
  "createdAt": 5387,
  "traceAttributes": {
    "IFRGE": "DBQCSGOIVQ",
    "WJQIXEX": "PSRSMSYX",
    "EJOAH": "WSZXOODQ"
  },
  "orgId": 6854
}
```

## Points Expired Event (pointsExpired)

Notifies when points earned by a user has expired.

| **Parameter**          | **Data Type** | **Description**                                                                        |
| ---------------------- | ------------- | -------------------------------------------------------------------------------------- |
| eventName              | String        | Name of the event (e.g., "pointsExpired").                                             |
| eventId                | String        | Unique identifier for the event.                                                       |
| eventLogId             | Integer       | Unique ID that is generated when the event is triggered.                               |
| orgId                  | Integer       | Unique identifier for the organization.                                                |
| refId                  | String        | This is used for internal debugging purposes.                                          |
| createdAt              | Integer       | Timestamp when the event was created.                                                  |
| data                   | Object        | Contains specific data related to the event.                                           |
| -- customerIdentifiers | Object        | Contains identifiers for the customer.                                                 |
| --- customerId         | Integer       | Unique identifier for the customer.                                                    |
| --- instore            | Object        | Contains in-store customer information.                                                |
| ---- mobile            | String        | Mobile number of the customer.                                                         |
| ---- email             | String        | Email address of the customer.                                                         |
| ---- externalId        | String        | External identifier for the customer.                                                  |
| -- triggeringActivity  | Object        | Contains information about the activity that triggered the event (empty in this case). |
| loyaltyProgramId       | Integer       | Unique identifier for the loyalty program.                                             |
| pointsExpired          | Integer       | Total points that have expired.                                                        |

```json Enriched payload
{
   "eventName":"pointsExpired",
   "eventId":"abacd-12345-ABCD",
  "eventLogId": 34111814,
   "orgId":1655,
   "refId":"1655_684494987",
   "createdAt":156474848484,
   "data":{
      "customerIdentifiers":{
         "customerId":876,
         "instore":{
            "mobile":"919740000000",
            "email":"tom@email.com",
            "externalId":"536236462453"
         }
      },
      "triggeringActivity":{
         
      },
      "loyaltyProgramId":1487,
      "pointsExpired":1000
   }
}
```
```json Raw payload
{
  "eventName": "pointsExpired",
  "eventLogId": 7946,
  "data": {
    "customerIdentifiers": {
      "loyaltyType": "DTIEPILH",
      "ecommerce": {
        "accounts": [
          {
            "accountId": "CIFE",
            "identifiers": [
              {
                "identifierType": "IBGNDTEBV",
                "identifierValue": "GGZ"
              }
            ]
          }
        ]
      },
      "lastName": "VUSTUNDPUL",
      "facebook": {
        "accounts": [
          {
            "accountId": "SNJ",
            "identifiers": [
              {
                "identifierType": "LFGSAKGZNF",
                "identifierValue": "UZEIBF"
              }
            ]
          }
        ]
      },
      "wechat": {
        "accounts": [
          {
            "accountId": "VRBRK",
            "identifiers": [
              {
                "identifierType": "PPAUKPGX",
                "identifierValue": "TULYVVBHD"
              }
            ]
          }
        ]
      },
      "tmall": {
        "accounts": [
          {
            "accountId": "XTXIYTGHWV",
            "identifiers": [
              {
                "identifierType": "XFV",
                "identifierValue": "SRLQNNOUG"
              }
            ]
          }
        ]
      },
      "toabao": {
        "accounts": [
          {
            "accountId": "RSRRXFAMMD",
            "identifiers": [
              {
                "identifierType": "KIJKIUFNC",
                "identifierValue": "GQOUOVFO"
              }
            ]
          }
        ]
      },
      "web_engage": {
        "accounts": [
          {
            "accountId": "KNSKPJI",
            "identifiers": [
              {
                "identifierType": "RQVK",
                "identifierValue": "OTIPASR"
              }
            ]
          }
        ]
      },
      "line": {
        "accounts": [
          {
            "accountId": "LMY",
            "identifiers": [
              {
                "identifierType": "CUFCJLGK",
                "identifierValue": "RWHHSLJXXQ"
              }
            ]
          }
        ]
      },
      "martjack": {
        "accounts": [
          {
            "accountId": "BNPLMCBDQ",
            "identifiers": [
              {
                "identifierType": "ILYH",
                "identifierValue": "CAGCPQOIG"
              }
            ]
          }
        ]
      },
      "customerId": 5721,
      "jd": {
        "accounts": [
          {
            "accountId": "OGVALJE",
            "identifiers": [
              {
                "identifierType": "OKKQRF",
                "identifierValue": "XDNQDK"
              }
            ]
          }
        ]
      },
      "website": {
        "accounts": [
          {
            "accountId": "QSYWYWRZU",
            "identifiers": [
              {
                "identifierType": "PRELCNLLAD",
                "identifierValue": "NEYDTGIKI"
              }
            ]
          }
        ]
      },
      "firstName": "CMMZEI",
      "instore": {
        "id": 5891,
        "mobile": "SQADENDU",
        "email": "LMENXT",
        "externalId": "BGRYYFQL",
        "cardnumber": "CDD",
        "cardexternalid": "GSE",
        "cardNumbers": [
          "LUXXSMPK"
        ]
      }
    },
    "entityInformation": {
      "entityType": "CWKMUFQMY",
      "entityId": 7313
    },
    "triggeringActivity": {
      "name": "OOMEKO",
      "identifiers": [
        {
          "key": "DGHJ",
          "value": "JZJPJCUX"
        }
      ],
      "enteredBy": {
        "id": 3393,
        "till": {
          "code": "XKIXOPCK",
          "name": "PCTJYPOP"
        },
        "store": {
          "code": "LUUEEMKMU",
          "name": "GLZSTC",
          "externalId": "IGGJDJNHY",
          "externalId1": "ISPRVLHEU",
          "externalId2": "YAUAFCESJ"
        }
      },
      "entityInformation": {
        "entityType": "DRO",
        "entityId": 2743
      },
      "additionalAttributes": [
        {
          "key": "LVFXBCMQN",
          "value": "AFYPEEY"
        }
      ]
    },
    "loyaltyProgramDetails": {
      "id": 7147,
      "name": "AHLASJRUL",
      "isDefault": true,
      "pointsToCurrencyRatio": 1025.1606919759615,
      "tiers": [
        {
          "tierNumber": 1235,
          "tierName": "YQBGVN"
        }
      ]
    },
    "loyaltyProgramId": 9531,
    "pointsExpired": 2548.9659923656495
  },
  "refId": "ZLMPPZ",
  "loyaltyEventId": "XLIGMEFJBQ",
  "apiRequestId": "JAAFFAXO",
  "eventId": "PASU",
  "createdAt": 5188,
  "traceAttributes": {
    "ZKZKTCSQ": "COP",
    "GZTI": "RLOINOMLP",
    "JISLHQO": "XZSXZVCRQ",
    "ETCVUUIJT": "TMVQXAQCRO"
  },
  "orgId": 8942
}
```

## Points Expired Reminder Event (pointsExpiryReminder)

Notifies when a user's points are about to expire.

| **Field**                 | **Data Type**    | **Description**                                                         |
| ------------------------- | ---------------- | ----------------------------------------------------------------------- |
| eventName                 | String           | Name of the event (e.g., "pointsExpiryReminder").                       |
| eventId                   | String           | Unique identifier for the event.                                        |
| orgId                     | Integer          | Unique identifier for the organization.                                 |
| refId                     | String           | This is used for internal debugging purposes                            |
| apiRequestId              | String           | Unique identifier for the API request.                                  |
| createdAt                 | Integer          | Timestamp when the event was created (milliseconds since epoch).        |
| data                      | Object           | Contains specific data related to the event.                            |
| -- customerIdentifiers    | Object           | Contains identifiers for the customer.                                  |
| --- customerId            | Integer          | Unique identifier for the customer.                                     |
| -- entityInformation      | Object           | Contains information about the entity involved in the event.            |
| --- entityType            | String           | Type of the entity (e.g., "USER").                                      |
| --- entityId              | Integer          | Unique identifier for the entity.                                       |
| -- loyaltyProgramDetails  | Object           | Contains details about the loyalty program.                             |
| --- id                    | Integer          | Unique identifier for the loyalty program.                              |
| --- name                  | String           | Name of the loyalty program (e.g., "DefaultProgram").                   |
| --- isDefault             | Boolean          | Indicates if the program is the default program.                        |
| --- pointsToCurrencyRatio | Float            | Points-to-currency conversion ratio.                                    |
| --- tiers                 | Array of Objects | List of tiers in the loyalty program.                                   |
| ---- tierNumber           | Integer          | Number of the tier (e.g., 1 for "A").                                   |
| ---- tierName             | String           | Name of the tier (e.g., "A").                                           |
| loyaltyProgramId          | Integer          | Unique identifier for the loyalty program.                              |
| pointsScheduledForExpiry  | Integer          | Total points scheduled for expiry.                                      |
| scheduledExpiryDate       | String           | Date when the points are scheduled to expire (formatted as YYYY-MM-DD). |
| loyaltyEventId            | Null             | Unique identifier for the loyalty event (null if not applicable).       |

```json Enriched payload
{
    "eventName": "pointsExpiryReminder",
    "eventId": "bd69ac73-0c7c-471a-b2cd-1f8251b34b60",
    "orgId": 50750,
    "refId": "50750_7616f6fc-9cc3-4b92-9cfa-b1177ea25a6c",
    "apiRequestId": "2cb3ea1a-0841-4cd4-ac6a-1adb1c3891d6",
    "createdAt": 1685864957859,
    "data": {
        "customerIdentifiers": {
            "customerId": 381750905
        },
        "entityInformation": {
            "entityType": "USER",
            "entityId": 381750905
        },
        "loyaltyProgramDetails": {
            "id": 1933,
            "name": "DefaultProgram",
            "isDefault": true,
            "pointsToCurrencyRatio": 1,
            "tiers": [
                {
                    "tierNumber": 1,
                    "tierName": "A"
                },
                {
                    "tierNumber": 2,
                    "tierName": "B"
                },
                {
                    "tierNumber": 3,
                    "tierName": "C"
                }
            ]
        },
        "loyaltyProgramId": 1933,
        "pointsScheduledForExpiry": 300,
        "scheduledExpiryDate": "2023-06-19"
    },
    "loyaltyEventId": null
}
```
```json Raw payload
{
  "eventName": "pointsExpiryReminder",
  "eventLogId": 822,
  "data": {
    "customerIdentifiers": {
      "loyaltyType": "FVWITPM",
      "ecommerce": {
        "accounts": [
          {
            "accountId": "YGYUW",
            "identifiers": [
              {
                "identifierType": "UDHSD",
                "identifierValue": "WADYK"
              }
            ]
          }
        ]
      },
      "lastName": "GDXYS",
      "facebook": {
        "accounts": [
          {
            "accountId": "YIWM",
            "identifiers": [
              {
                "identifierType": "DICT",
                "identifierValue": "ULZSEKINSQ"
              }
            ]
          }
        ]
      },
      "wechat": {
        "accounts": [
          {
            "accountId": "OHSJCMS",
            "identifiers": [
              {
                "identifierType": "XBURGQ",
                "identifierValue": "JCJOAP"
              }
            ]
          }
        ]
      },
      "tmall": {
        "accounts": [
          {
            "accountId": "FDRXZ",
            "identifiers": [
              {
                "identifierType": "PRGRKEZMOF",
                "identifierValue": "TST"
              }
            ]
          }
        ]
      },
      "toabao": {
        "accounts": [
          {
            "accountId": "OHDZCX",
            "identifiers": [
              {
                "identifierType": "TUV",
                "identifierValue": "HLOZAWG"
              }
            ]
          }
        ]
      },
      "web_engage": {
        "accounts": [
          {
            "accountId": "CNF",
            "identifiers": [
              {
                "identifierType": "ILRCTCI",
                "identifierValue": "GNVOO"
              }
            ]
          }
        ]
      },
      "line": {
        "accounts": [
          {
            "accountId": "GUSMXDC",
            "identifiers": [
              {
                "identifierType": "JZTWCLOYM",
                "identifierValue": "EHZOTQTY"
              }
            ]
          }
        ]
      },
      "martjack": {
        "accounts": [
          {
            "accountId": "MQQLC",
            "identifiers": [
              {
                "identifierType": "JEAYKZHSAF",
                "identifierValue": "FUHN"
              }
            ]
          }
        ]
      },
      "customerId": 538,
      "jd": {
        "accounts": [
          {
            "accountId": "RVHLRYRXO",
            "identifiers": [
              {
                "identifierType": "HSSVVQUOR",
                "identifierValue": "TVAJFGIG"
              }
            ]
          }
        ]
      },
      "website": {
        "accounts": [
          {
            "accountId": "QXWXNGSD",
            "identifiers": [
              {
                "identifierType": "FISHD",
                "identifierValue": "JAAMOTL"
              }
            ]
          }
        ]
      },
      "firstName": "HSC",
      "instore": {
        "id": 6880,
        "mobile": "MNXO",
        "email": "RDJ",
        "externalId": "PFPYVNL",
        "cardnumber": "RWIYCT",
        "cardexternalid": "OUFAVGCZB",
        "cardNumbers": [
          "PHTDTBZ"
        ]
      }
    },
    "entityInformation": {
      "entityType": "YVMFPBIG",
      "entityId": 1455
    },
    "triggeringActivity": {
      "name": "GFRW",
      "identifiers": [
        {
          "key": "LKIEBRZFNR",
          "value": "TXV"
        }
      ],
      "enteredBy": {
        "id": 1316,
        "till": {
          "code": "JQYI",
          "name": "PIGCKR"
        },
        "store": {
          "code": "AMIEMKBYV",
          "name": "PMPPAFRUX",
          "externalId": "VOBKGCOXEC",
          "externalId1": "BQIWXO",
          "externalId2": "TYOLRLRJZT"
        }
      },
      "entityInformation": {
        "entityType": "INC",
        "entityId": 1609
      },
      "additionalAttributes": [
        {
          "key": "YNGNKISXM",
          "value": "MQGNGF"
        }
      ]
    },
    "loyaltyProgramDetails": {
      "id": 6857,
      "name": "YNVKPX",
      "isDefault": false,
      "pointsToCurrencyRatio": 2770.27436769178,
      "tiers": [
        {
          "tierNumber": 9831,
          "tierName": "FQFTNEU"
        }
      ]
    },
    "loyaltyProgramId": 134,
    "pointsScheduledForExpiry": 8860.802915744473,
    "scheduledExpiryDate": "BION"
  },
  "refId": "URA",
  "loyaltyEventId": "ZMPZZTWH",
  "apiRequestId": "PBXOASDJJH",
  "eventId": "ATFSUMDGE",
  "createdAt": 505,
  "traceAttributes": {
    "MBKF": "BSVJEHVWQ",
    "PCMSL": "DPBH",
    "YCDTATGOS": "VDHNUC",
    "WSLYX": "ANTKGZTQ",
    "RVNCM": "PFS"
  },
  "orgId": 9687
}
```

## Points Transferred Initiated Event (pointsTransferredInitiated)

Notifies when a points transfer for a user is initiated.

| **Parameter**                            | **Data Type**    | **Description**                                                                                   |
| ---------------------------------------- | ---------------- | ------------------------------------------------------------------------------------------------- |
| eventId                                  | String           | Unique identifier for the event.                                                                  |
| eventLogId                               | Integer          | Unique ID that is generated when the event is triggered.                                          |
| eventType                                | String           | Type of the event (e.g., "pointsTransferredInitiated").                                           |
| consumerGroupId                          | Integer          | Identifier for the consumer group (null if not applicable).                                       |
| actionType                               | String           | Action type for the event (e.g., "START").                                                        |
| timeStamp                                | Integer          | Timestamp when the event occurred (milliseconds since epoch).                                     |
| attributes                               | Object           | Contains specific attributes related to the event.                                                |
| -- createdAt                             | Integer          | Timestamp when the attributes were created (milliseconds since epoch).                            |
| -- data                                  | Object           | Contains specific data related to the event.                                                      |
| --- customerIdentifiers                  | Object           | Contains identifiers for the customer initiating the transfer.                                    |
| ---- customerId                          | Integer          | Unique identifier for the customer.                                                               |
| ---- instore                             | Object           | Contains in-store customer information.                                                           |
| ----- mobile                             | String           | Mobile number of the customer.                                                                    |
| ----- email                              | String           | Email address of the customer.                                                                    |
| --- entityInformation                    | Object           | Contains information about the entity initiating the transfer.                                    |
| ---- entityType                          | String           | Type of the entity (e.g., "USER").                                                                |
| ---- entityId                            | Integer          | Unique identifier for the entity.                                                                 |
| --- loyaltyProgramDetails                | Object           | Contains details about the loyalty program.                                                       |
| ---- id                                  | Integer          | Unique identifier for the loyalty program.                                                        |
| ---- name                                | String           | Name of the loyalty program (e.g., "newshard_orgDefaultProgram").                                 |
| ---- isDefault                           | Boolean          | Indicates if the program is the default program.                                                  |
| ---- pointsToCurrencyRatio               | Float            | Points-to-currency conversion ratio.                                                              |
| ---- tiers                               | Array of Objects | List of tiers in the loyalty program.                                                             |
| ----- tierNumber                         | Integer          | Number of the tier (e.g., 1 for "Silver").                                                        |
| ----- tierName                           | String           | Name of the tier (e.g., "Silver").                                                                |
| loyaltyProgramId                         | Integer          | Unique identifier for the loyalty program.                                                        |
| totalPointsTransferred                   | Float            | Total points that were transferred.                                                               |
| --- transferReceivingCustomerIdentifiers | Object           | Contains identifiers for the customer receiving the transfer.                                     |
| ---- customerId                          | Integer          | Unique identifier for the receiving customer.                                                     |
| ---- instore                             | Object           | Contains in-store information for the receiving customer.                                         |
| ----- mobile                             | String           | Mobile number of the receiving customer.                                                          |
| ----- email                              | String           | Email address of the receiving customer.                                                          |
| --- transferReceivingEntityInformation   | Object           | Contains information about the entity receiving the points.                                       |
| ---- entityType                          | String           | Type of the entity (e.g., "USER").                                                                |
| ---- entityId                            | Integer          | Unique identifier for the receiving entity.                                                       |
| --- redemptionFromEarningPrograms        | Array of Objects | List of redemption details from earning programs.                                                 |
| ---- programId                           | Integer          | Unique identifier for the earning program.                                                        |
| ---- pointsRedeemed                      | Float            | Total points redeemed from the program.                                                           |
| ---- programCurrentPoints                | Float            | Current points available in the program.                                                          |
| loyaltyEventId                           | String           | Unique identifier for the loyalty event.                                                          |
| eventName                                | String           | Name of the event (e.g., "pointsTransferredInitiated").                                           |
| refId                                    | String           | This is a combination of org id and loyalty event ID and is used for internal debugging purposes. |
| apiRequestId                             | String           | Unique identifier for the API request.                                                            |
| orgId                                    | Integer          | Unique identifier for the organization                                                            |

```json Enriched payload
{
  "eventId": "3c9d293a-f9bd-4a49-a54a-63d4af500b46",
  "eventLogId": 34805034,
  "eventType": "pointsTransferredInitiated",
  "consumerGroupId": null,
  "actionType": "START",
  "timeStamp": 1683873247544,
  "attributes": {
    "createdAt": 1683873247465,
    "data": {
      "customerIdentifiers": {
        "customerId": 545513704,
        "instore": {
          "mobile": " 917136866183",
          "email": "automail917136866183@capautomation.com"
        }
      },
      "entityInformation": {
        "entityType": "USER",
        "entityId": 545513704
      },
      "loyaltyProgramDetails": {
        "id": 784,
        "name": "newshard_orgDefaultProgram",
        "isDefault": true,
        "pointsToCurrencyRatio": 1.0,
        "tiers": [
          {
            "tierNumber": 1,
            "tierName": "Silver"
          },
          {
            "tierNumber": 2,
            "tierName": "Gold"
          },
          {
            "tierNumber": 3,
            "tierName": "Platinum"
          }
        ]
      },
      "loyaltyProgramId": 784,
      "totalPointsTransferred": 10.0,
      "transferReceivingCustomerIdentifiers": {
        "customerId": 545513705,
        "instore": {
          "mobile": "9189000 03219",
          "email": "automail918900003219@capautomation.com"
        }
      },
      "transferReceivingEntityInformation": {
        "entityType": "USER",
        "entityId": 545513705
      },
      "redemptionFromEarningPrograms": [
        {
          " programId": 784,
          "pointsRedeemed": 10.0,
          "programCurrentPoints": 90.0
        }
      ]
    },
    "loyaltyEventId": "HNoDBilpg9",
    "eventName": "pointsTransferredInitiated",
    "refId": "1138_HNoDBilpg9",
    "apiRe questId": "36f63b513c9f787526903e840ea4d04f",
    "orgId": 1138
  }
}
```
```json Raw payload
{
  "eventName": "pointsTransferredInitiated",
  "eventLogId": 9747,
  "data": {
    "redemptionFromEarningPrograms": [
      {
        "programId": 2719,
        "pointsRedeemed": 3868.44784193206,
        "programCurrentPoints": 6602.318902744394
      }
    ],
    "loyaltyProgramDetails": {
      "id": 8058,
      "name": "HCJV",
      "isDefault": true,
      "pointsToCurrencyRatio": 5694.723123028708,
      "tiers": [
        {
          "tierNumber": 3434,
          "tierName": "NBYJZKO"
        }
      ]
    },
    "entityInformation": {
      "entityType": "CMQ",
      "entityId": 2010
    },
    "customerIdentifiers": {
      "loyaltyType": "YLNB",
      "ecommerce": {
        "accounts": [
          {
            "accountId": "YDHA",
            "identifiers": [
              {
                "identifierType": "VYOWKAOV",
                "identifierValue": "NMRIHKCYNI"
              }
            ]
          }
        ]
      },
      "lastName": "NHVFMXIZ",
      "facebook": {
        "accounts": [
          {
            "accountId": "ZJJIWCYDH",
            "identifiers": [
              {
                "identifierType": "BKNFX",
                "identifierValue": "IGVQF"
              }
            ]
          }
        ]
      },
      "wechat": {
        "accounts": [
          {
            "accountId": "WEFLMA",
            "identifiers": [
              {
                "identifierType": "RGKETFSU",
                "identifierValue": "SVMSKRPRCZ"
              }
            ]
          }
        ]
      },
      "tmall": {
        "accounts": [
          {
            "accountId": "UBAEXLNGRS",
            "identifiers": [
              {
                "identifierType": "GRPYGJGKSS",
                "identifierValue": "LMCOEQH"
              }
            ]
          }
        ]
      },
      "toabao": {
        "accounts": [
          {
            "accountId": "RYKLQYBG",
            "identifiers": [
              {
                "identifierType": "MVFJMNPZIZ",
                "identifierValue": "LGUGLAG"
              }
            ]
          }
        ]
      },
      "web_engage": {
        "accounts": [
          {
            "accountId": "VFRQOBRCLN",
            "identifiers": [
              {
                "identifierType": "NDLQTMIEF",
                "identifierValue": "CFUUDUL"
              }
            ]
          }
        ]
      },
      "line": {
        "accounts": [
          {
            "accountId": "ENNXGB",
            "identifiers": [
              {
                "identifierType": "NMWUODI",
                "identifierValue": "GKKU"
              }
            ]
          }
        ]
      },
      "martjack": {
        "accounts": [
          {
            "accountId": "AKAWXAAX",
            "identifiers": [
              {
                "identifierType": "ZBJ",
                "identifierValue": "DVK"
              }
            ]
          }
        ]
      },
      "customerId": 9708,
      "jd": {
        "accounts": [
          {
            "accountId": "AIUKUG",
            "identifiers": [
              {
                "identifierType": "DZNWFQLC",
                "identifierValue": "LUKBGE"
              }
            ]
          }
        ]
      },
      "website": {
        "accounts": [
          {
            "accountId": "VABEBSLM",
            "identifiers": [
              {
                "identifierType": "HSKK",
                "identifierValue": "ZYB"
              }
            ]
          }
        ]
      },
      "firstName": "CTBEFPBTT",
      "instore": {
        "id": 6027,
        "mobile": "LGBEUX",
        "email": "SZXDHPF",
        "externalId": "DFI",
        "cardnumber": "JTPRD",
        "cardexternalid": "EOVMDBQ",
        "cardNumbers": [
          "OIIZMEW"
        ]
      }
    },
    "transferReceivingEntityInformation": {
      "entityType": "PPUISJUL",
      "entityId": 8641
    },
    "transferReceivingCustomerIdentifiers": {
      "loyaltyType": "TRSSWFDNYT",
      "ecommerce": {
        "accounts": [
          {
            "accountId": "XSEZHQHK",
            "identifiers": [
              {
                "identifierType": "BISXLERY",
                "identifierValue": "HKXF"
              }
            ]
          }
        ]
      },
      "lastName": "HVWKPAMJO",
      "facebook": {
        "accounts": [
          {
            "accountId": "KAUGLXTJK",
            "identifiers": [
              {
                "identifierType": "KDQ",
                "identifierValue": "NACELLATT"
              }
            ]
          }
        ]
      },
      "wechat": {
        "accounts": [
          {
            "accountId": "YIPEHCCVNW",
            "identifiers": [
              {
                "identifierType": "YDXEORJ",
                "identifierValue": "UASZ"
              }
            ]
          }
        ]
      },
      "tmall": {
        "accounts": [
          {
            "accountId": "QZXZCAPM",
            "identifiers": [
              {
                "identifierType": "QFV",
                "identifierValue": "MIS"
              }
            ]
          }
        ]
      },
      "toabao": {
        "accounts": [
          {
            "accountId": "ZCJSOOT",
            "identifiers": [
              {
                "identifierType": "LAPCZSLGC",
                "identifierValue": "AZOVBRVASZ"
              }
            ]
          }
        ]
      },
      "web_engage": {
        "accounts": [
          {
            "accountId": "BQRPMYTO",
            "identifiers": [
              {
                "identifierType": "WKKDGXREA",
                "identifierValue": "HRBMRRWII"
              }
            ]
          }
        ]
      },
      "line": {
        "accounts": [
          {
            "accountId": "CNWH",
            "identifiers": [
              {
                "identifierType": "APBRBSOTI",
                "identifierValue": "COHYJ"
              }
            ]
          }
        ]
      },
      "martjack": {
        "accounts": [
          {
            "accountId": "XWQFIJM",
            "identifiers": [
              {
                "identifierType": "ISXKZRH",
                "identifierValue": "UESFVQLKP"
              }
            ]
          }
        ]
      },
      "customerId": 1451,
      "jd": {
        "accounts": [
          {
            "accountId": "ZHCNXPEMN",
            "identifiers": [
              {
                "identifierType": "IUYGEVA",
                "identifierValue": "LFT"
              }
            ]
          }
        ]
      },
      "website": {
        "accounts": [
          {
            "accountId": "BNJNYWV",
            "identifiers": [
              {
                "identifierType": "FSTKTE",
                "identifierValue": "BRFABNFNM"
              }
            ]
          }
        ]
      },
      "firstName": "RACSY",
      "instore": {
        "id": 8007,
        "mobile": "MICLCFK",
        "email": "CNTVNUC",
        "externalId": "ONYCNKJY",
        "cardnumber": "CGUOZOBAA",
        "cardexternalid": "UOYWC",
        "cardNumbers": [
          "XCNGMFZMZJ"
        ]
      }
    },
    "triggeringActivity": {
      "name": "YOJYBMF",
      "identifiers": [
        {
          "key": "GZVZXJJX",
          "value": "WEYLKA"
        }
      ],
      "enteredBy": {
        "id": 9759,
        "till": {
          "code": "JXRRNUZ",
          "name": "SEODFHP"
        },
        "store": {
          "code": "JMDJXFPY",
          "name": "GMAYHBMGXL",
          "externalId": "QCAOB",
          "externalId1": "MAXIRCP",
          "externalId2": "JBCKS"
        }
      },
      "entityInformation": {
        "entityType": "PAKTHDTZA",
        "entityId": 4994
      },
      "additionalAttributes": [
        {
          "key": "HGBUQM",
          "value": "CCBJTD"
        }
      ]
    },
    "loyaltyProgramId": 3756,
    "totalPointsTransferred": 1006.6281753251999
  },
  "refId": "PKBBMDLSJK",
  "loyaltyEventId": "BAJ",
  "apiRequestId": "QMVSILG",
  "eventId": "ANGW",
  "createdAt": 1218,
  "traceAttributes": {
    "MCZJ": "RUKB",
    "VNHOTSWL": "EQMKZGN"
  },
  "orgId": 3066
}
```

## Points Transferred Received (pointsTransferredReceived)

Notifies when a points transfer request of a user is received. Points transfer allows users to transfer their loyalty points to other users or user groups.

| **Parameter**                             | **Data Type**    | **Description**                                                                                   |
| ----------------------------------------- | ---------------- | ------------------------------------------------------------------------------------------------- |
| eventId                                   | String           | Unique identifier for the event.                                                                  |
| eventLogId                                | Integer          | Unique ID that is generated when the event is triggered.                                          |
| eventType                                 | String           | Type of the event (e.g., "pointsTransferredReceived").                                            |
| consumerGroupId                           | Null             | Identifier for the consumer group (null if not applicable).                                       |
| actionType                                | String           | Action type for the event (e.g., "START").                                                        |
| timeStamp                                 | Integer          | Timestamp when the event occurred (milliseconds since epoch).                                     |
| attributes                                | Object           | Contains specific attributes related to the event.                                                |
| -- createdAt                              | Integer          | Timestamp when the attributes were created (milliseconds since epoch).                            |
| -- data                                   | Object           | Contains specific data related to the event.                                                      |
| --- customerIdentifiers                   | Object           | Contains identifiers for the customer receiving the points.                                       |
| ---- customerId                           | Integer          | Unique identifier for the customer.                                                               |
| ---- instore                              | Object           | Contains in-store customer information.                                                           |
| ----- mobile                              | String           | Mobile number of the customer.                                                                    |
| ----- email                               | String           | Email address of the customer.                                                                    |
| --- entityInformation                     | Object           | Contains information about the entity receiving the points.                                       |
| ---- entityType                           | String           | Type of the entity (e.g., "USER").                                                                |
| ---- entityId                             | Integer          | Unique identifier for the entity.                                                                 |
| --- loyaltyProgramDetails                 | Object           | Contains details about the loyalty program.                                                       |
| ---- id                                   | Integer          | Unique identifier for the loyalty program.                                                        |
| ---- name                                 | String           | Name of the loyalty program (e.g., "newshard_orgDefaultProgram").                                 |
| ---- isDefault                            | Boolean          | Indicates if the program is the default program.                                                  |
| ---- pointsToCurrencyRatio                | Float            | Points-to-currency conversion ratio.                                                              |
| ---- tiers                                | Array of Objects | List of tiers in the loyalty program.                                                             |
| ----- tierNumber                          | Integer          | Number of the tier (e.g., 1 for "Silver").                                                        |
| ----- tierName                            | String           | Name of the tier (e.g., "Silver").                                                                |
| loyaltyProgramId                          | Integer          | Unique identifier for the loyalty program.                                                        |
| totalPointsTransferred                    | Float            | Total points that were transferred.                                                               |
| --- transferInitiatingCustomerIdentifiers | Object           | Contains identifiers for the customer initiating the transfer.                                    |
| ---- customerId                           | Integer          | Unique identifier for the initiating customer.                                                    |
| ---- instore                              | Object           | Contains in-store information for the initiating customer.                                        |
| ----- mobile                              | String           | Mobile number of the initiating customer.                                                         |
| ----- email                               | String           | Email address of the initiating customer.                                                         |
| --- transferInitiatingEntityInformation   | Object           | Contains information about the entity initiating the transfer.                                    |
| ---- entityType                           | String           | Type of the entity (e.g., "USER").                                                                |
| ---- entityId                             | Integer          | Unique identifier for the initiating entity.                                                      |
| loyaltyEventId                            | String           | Unique identifier for the loyalty event.                                                          |
| eventName                                 | String           | Name of the event (e.g., "pointsTransferredReceived").                                            |
| refId                                     | String           | This is a combination of org id and loyalty event ID and is used for internal debugging purposes. |
| apiRequestId                              | String           | Unique identifier for the API request.                                                            |
| orgId                                     | Integer          | Unique identifier for the organization.                                                           |

```json Enriched payload
{
  "eventId": "bb12e156-edfe-4a2d-9831-b1224ebb3d77",
  "eventLogId": 34805034,
  "eventType": "pointsTransferredReceived",
  "consumerGroupId": null,
  "actionType": "START",
  "timeStamp": 1683873247673,
  "attributes": {
    "createdAt": 1683873247470,
    "data": {
      "customerIdentifiers": {
        "customerId": 545513705,
        "instore": {
          "mobile": "91 8900003219",
          "email": "automail918900003219@capautomation.com"
        }
      },
      "entityInformation": {
        "entityType": "USER",
        "entityId": 545513705
      },
      "loyaltyProgramDetails": {
        "id": 784,
        "name": "n ewshard_orgDefaultProgram",
        "isDefault": true,
        "pointsToCurrencyRatio": 1.0,
        "tiers": [
          {
            "tierNumber": 1,
            "tierName": "Silver"
          },
          {
            "tierNumber": 2,
            "tierName": "Gold"
          },
          {
            "tierNumber": 3,
            "tierName": "Platinum"
          }
        ]
      },
      "loyaltyProgramId": 784,
      "totalPointsTransferred": 10.0,
      "transferInitiatingCustomerIdentifiers": {
        "customerId": 545513704,
        "instore": {
          "mobile": "91713686 6183",
          "email": "automail917136866183@capautomation.com"
        }
      },
      "transferInitiatingEntityInformation": {
        "entityType": "USER",
        "entityId": 545513704
      }
    },
    "loyaltyEventId": "HNoDBilpg9",
    "e ventName": "pointsTransferredReceived",
    "refId": "1138_HNoDBilpg9",
    "apiRequestId": "36f63b513c9f787526903e840ea4d04f",
    "orgId": 1138
  }
}

```
```json Raw payload
{
  "eventName": "pointsTransferredReceived",
  "eventLogId": 9573,
  "data": {
    "customerIdentifiers": {
      "loyaltyType": "CGPJNSJ",
      "ecommerce": {
        "accounts": [
          {
            "accountId": "MYVPRYONWI",
            "identifiers": [
              {
                "identifierType": "RNMHFTJYL",
                "identifierValue": "XEE"
              }
            ]
          }
        ]
      },
      "lastName": "CJMKYYYIH",
      "facebook": {
        "accounts": [
          {
            "accountId": "LVWFKILU",
            "identifiers": [
              {
                "identifierType": "CTHVS",
                "identifierValue": "NCAR"
              }
            ]
          }
        ]
      },
      "wechat": {
        "accounts": [
          {
            "accountId": "WGIXA",
            "identifiers": [
              {
                "identifierType": "JXFIKA",
                "identifierValue": "CTXVJTUZ"
              }
            ]
          }
        ]
      },
      "tmall": {
        "accounts": [
          {
            "accountId": "YUZBADYIYW",
            "identifiers": [
              {
                "identifierType": "FWVXP",
                "identifierValue": "GKOWP"
              }
            ]
          }
        ]
      },
      "toabao": {
        "accounts": [
          {
            "accountId": "KJOCXKA",
            "identifiers": [
              {
                "identifierType": "KBGJPVSMZ",
                "identifierValue": "DYLI"
              }
            ]
          }
        ]
      },
      "web_engage": {
        "accounts": [
          {
            "accountId": "KXOMQAG",
            "identifiers": [
              {
                "identifierType": "FFJPWUDDDS",
                "identifierValue": "VWVMUEEWXV"
              }
            ]
          }
        ]
      },
      "line": {
        "accounts": [
          {
            "accountId": "IWCPLM",
            "identifiers": [
              {
                "identifierType": "QSOKRRBQI",
                "identifierValue": "TRWPQJPW"
              }
            ]
          }
        ]
      },
      "martjack": {
        "accounts": [
          {
            "accountId": "RYQVWL",
            "identifiers": [
              {
                "identifierType": "PDCWQVLNBU",
                "identifierValue": "KGWJYOCFG"
              }
            ]
          }
        ]
      },
      "customerId": 9701,
      "jd": {
        "accounts": [
          {
            "accountId": "CMADVHF",
            "identifiers": [
              {
                "identifierType": "FGL",
                "identifierValue": "HZJ"
              }
            ]
          }
        ]
      },
      "website": {
        "accounts": [
          {
            "accountId": "LPIVGZJH",
            "identifiers": [
              {
                "identifierType": "LPM",
                "identifierValue": "OJVWMRMF"
              }
            ]
          }
        ]
      },
      "firstName": "SAKONF",
      "instore": {
        "id": 9273,
        "mobile": "QLIPFA",
        "email": "EOOFQW",
        "externalId": "MSESEZDYNQ",
        "cardnumber": "BOYHA",
        "cardexternalid": "ZAM",
        "cardNumbers": [
          "ISX"
        ]
      }
    },
    "entityInformation": {
      "entityType": "RBZEGBM",
      "entityId": 7781
    },
    "triggeringActivity": {
      "name": "TFEHDF",
      "identifiers": [
        {
          "key": "MHTXJYI",
          "value": "CZJN"
        }
      ],
      "enteredBy": {
        "id": 2163,
        "till": {
          "code": "JJLTZFYS",
          "name": "AEJPZR"
        },
        "store": {
          "code": "JWLG",
          "name": "GGXXXKQ",
          "externalId": "JQK",
          "externalId1": "XTFNYGFD",
          "externalId2": "CKXQYDAI"
        }
      },
      "entityInformation": {
        "entityType": "ESBRBGKY",
        "entityId": 3019
      },
      "additionalAttributes": [
        {
          "key": "URIB",
          "value": "ZBYTWXCQ"
        }
      ]
    },
    "loyaltyProgramDetails": {
      "id": 6511,
      "name": "SFT",
      "isDefault": true,
      "pointsToCurrencyRatio": 2052.0129473701454,
      "tiers": [
        {
          "tierNumber": 3746,
          "tierName": "JZULZC"
        }
      ]
    },
    "loyaltyProgramId": 8407,
    "totalPointsTransferred": 6834.392154821297,
    "transferInitiatingCustomerIdentifiers": {
      "loyaltyType": "ANJDWHG",
      "ecommerce": {
        "accounts": [
          {
            "accountId": "CCGMCPWN",
            "identifiers": [
              {
                "identifierType": "XFG",
                "identifierValue": "UJSRHSDR"
              }
            ]
          }
        ]
      },
      "lastName": "ZZGO",
      "facebook": {
        "accounts": [
          {
            "accountId": "QLJPWAPL",
            "identifiers": [
              {
                "identifierType": "NQN",
                "identifierValue": "UZGH"
              }
            ]
          }
        ]
      },
      "wechat": {
        "accounts": [
          {
            "accountId": "GOO",
            "identifiers": [
              {
                "identifierType": "FTKVPWTN",
                "identifierValue": "MGDIWVZUSC"
              }
            ]
          }
        ]
      },
      "tmall": {
        "accounts": [
          {
            "accountId": "GBXU",
            "identifiers": [
              {
                "identifierType": "DEU",
                "identifierValue": "FYKM"
              }
            ]
          }
        ]
      },
      "toabao": {
        "accounts": [
          {
            "accountId": "GWCAYIGC",
            "identifiers": [
              {
                "identifierType": "BCYNAMU",
                "identifierValue": "BJAZYFTIEK"
              }
            ]
          }
        ]
      },
      "web_engage": {
        "accounts": [
          {
            "accountId": "PTY",
            "identifiers": [
              {
                "identifierType": "HUCQOZ",
                "identifierValue": "VVQYYBRNN"
              }
            ]
          }
        ]
      },
      "line": {
        "accounts": [
          {
            "accountId": "NRFD",
            "identifiers": [
              {
                "identifierType": "YXUZCXTC",
                "identifierValue": "KWZI"
              }
            ]
          }
        ]
      },
      "martjack": {
        "accounts": [
          {
            "accountId": "HKTDFT",
            "identifiers": [
              {
                "identifierType": "EFJWFHFKHI",
                "identifierValue": "RRF"
              }
            ]
          }
        ]
      },
      "customerId": 7016,
      "jd": {
        "accounts": [
          {
            "accountId": "FMCBTRAI",
            "identifiers": [
              {
                "identifierType": "ITQYXOY",
                "identifierValue": "UNONTTINKK"
              }
            ]
          }
        ]
      },
      "website": {
        "accounts": [
          {
            "accountId": "JNPCBT",
            "identifiers": [
              {
                "identifierType": "OJGH",
                "identifierValue": "YJFF"
              }
            ]
          }
        ]
      },
      "firstName": "LXQCKSANOA",
      "instore": {
        "id": 2368,
        "mobile": "PRRFICO",
        "email": "TSYVWIQKW",
        "externalId": "BLSUMR",
        "cardnumber": "XYU",
        "cardexternalid": "BCQ",
        "cardNumbers": [
          "KWQXID"
        ]
      }
    },
    "transferInitiatingEntityInformation": {
      "entityType": "IJUR",
      "entityId": 8388
    }
  },
  "refId": "LWASWHIGWF",
  "loyaltyEventId": "AUMVSTVG",
  "apiRequestId": "KELIDIJGWM",
  "eventId": "FGQYIR",
  "createdAt": 3315,
  "traceAttributes": {
    "LAILQ": "CRDIGBYGTL",
    "IGROWYVEI": "YRU",
    "ABCJ": "CAIFGGDSWV",
    "MBVDSCAP": "ZSFTYMACB",
    "RJZSY": "AQLIUKQII"
  },
  "orgId": 1990
}
```

## Redeemed Points Reversed Event (redeemedPointsReversed)

Notifies when redeemed points are reversed. Reversal of redeemed points occurs when a user does not use points they have redeemed for a transaction, or when the transaction for which points were redeemed is returned.

| **Parameter**                           | **Data Type**    | **Description**                                                                                 |
| --------------------------------------- | ---------------- | ----------------------------------------------------------------------------------------------- |
| eventId                                 | String           | Unique identifier for the event.                                                                |
| eventLogId                              | Integer          | Unique ID that is generated when the event is triggered.                                        |
| eventType                               | String           | Type of the event (e.g., "redeemedPointsReversed").                                             |
| consumerGroupId                         | Null             | Identifier for the consumer group (null if not applicable).                                     |
| actionType                              | String           | Action type for the event (e.g., "START").                                                      |
| timeStamp                               | Integer          | Timestamp when the event occurred (milliseconds since epoch).                                   |
| attributes                              | Object           | Contains specific attributes related to the event.                                              |
| -- createdAt                            | Integer          | Timestamp when the attributes were created (milliseconds since epoch).                          |
| -- data                                 | Object           | Contains specific data related to the event.                                                    |
| --- customerIdentifiers                 | Object           | Contains identifiers for the customer.                                                          |
| ---- customerId                         | Integer          | Unique identifier for the customer.                                                             |
| ---- instore                            | Object           | Contains in-store customer information.                                                         |
| ----- mobile                            | String           | Mobile number of the customer.                                                                  |
| ----- email                             | String           | Email address of the customer.                                                                  |
| --- entityInformation                   | Object           | Contains information about the entity involved in the event.                                    |
| ---- entityType                         | String           | Type of the entity (e.g., "USER").                                                              |
| ---- entityId                           | Integer          | Unique identifier for the entity.                                                               |
| --- triggeringActivity                  | Object           | Contains details about the activity that triggered the event.                                   |
| ---- name                               | String           | Name of the triggering activity (e.g., "PointsRedemptionReversal").                             |
| ---- identifiers                        | Array of Objects | List of identifiers associated with the triggering activity.                                    |
| ----- key                               | String           | Key of the identifier (e.g., "redemptionId").                                                   |
| ----- value                             | String           | Value of the identifier (e.g., "CgDAgY").                                                       |
| ---- enteredBy                          | Object           | Information about who entered the activity.                                                     |
| ----- id                                | Integer          | Unique identifier for the user who entered the activity.                                        |
| ---- additionalAttributes               | Array            | Additional attributes related to the triggering activity.                                       |
| --- loyaltyProgramDetails               | Object           | Contains details about the loyalty program.                                                     |
| ---- id                                 | Integer          | Unique identifier for the loyalty program.                                                      |
| ---- name                               | String           | Name of the loyalty program (e.g., "Abbott ID_ProdDefaultProgram").                             |
| ---- isDefault                          | Boolean          | Indicates if the program is the default program.                                                |
| ---- pointsToCurrencyRatio              | Float            | Points-to-currency conversion ratio.                                                            |
| ---- tiers                              | Array of Objects | List of tiers in the loyalty program.                                                           |
| ----- tierNumber                        | Integer          | Number of the tier (e.g., 1 for "Bronze").                                                      |
| ----- tierName                          | String           | Name of the tier (e.g., "Bronze").                                                              |
| --- loyaltyProgramId                    | Integer          | Unique identifier for the loyalty program.                                                      |
| --- redeemedPointsReversed              | Float            | Total points that were reversed.                                                                |
| --- redeemedPointsReversedDetails       | Object           | Contains details about the reversed points.                                                     |
| ---- available                          | Float            | Number of available reversed points.                                                            |
| ---- expired                            | Float            | The number of expired reversed points.                                                          |
| --- redemptionSummaryId                 | Integer          | Unique identifier for the redemption summary.                                                   |
| --- redemptionReversalToEarningPrograms | Array of Objects | List of earning programs affected by the reversal.                                              |
| ---- programId                          | Integer          | Unique identifier for the earning program.                                                      |
| ---- redeemedPointsReversed             | Float            | Amount of points reversed for the earning program.                                              |
| ---- redeemedPointsReversedDetails      | Object           | Contains details about the reversed points for the earning program.                             |
| ----- available                         | Float            | Number of available reversed points for the earning program.                                    |
| ----- expired                           | Float            | The number of expired reversed points for the earning program.                                  |
| ---- programCurrentPoints               | Float            | Current points in the earning program after the reversal.                                       |
| -- loyaltyEventId                       | String           | Unique identifier for the loyalty event.                                                        |
| -- eventName                            | String           | Name of the event (e.g., "redeemedPointsReversed").                                             |
| -- refId                                | String           | This is a combination of org id and API request ID and is used for internal debugging purposes. |
| -- apiRequestId                         | String           | Unique identifier for the API request.                                                          |
| -- orgId                                | Integer          | Unique identifier for the organization                                                          |

```json Enriched payload
{
  "eventId": "a5058d77-370f-4544-a420-8337f9d5fbf1",
  "eventLogId": 34805097,
  "eventType": "redeemedPointsReversed",
  "consumerGroupId": null,
  "actionType": "START",
  "timeStamp": 1683871439535,
  "attributes": {
    "createdAt": 1683871439518,
    "data": {
      "customerIdentifiers": {
        "customerId": 6687782,
        "instore": {
          "mobile": "628577693 2889",
          "email": "siskakuswandari@nadamail.com"
        }
      },
      "entityInformation": {
        "entityType": "USER",
        "entityId": 6687782
      },
      "triggeringActivity": {
        "name": "PointsRedemptionReversal",
        "identifiers": [
          {
            "key": "redemptionId",
            "value": "CgDAgY"
          }
        ],
        "enteredBy": {
          "id": 200279007
        },
        "additionalAttributes": [
          
        ]
      },
      "loyaltyProgramDetails": {
        "id": 1095,
        "name": "Abbott ID_ProdDef aultProgram",
        "isDefault": true,
        "pointsToCurrencyRatio": 1.0,
        "tiers": [
          {
            "tierNumber": 1,
            "tierName": "Bronze"
          },
          {
            "tierNumber": 2,
            "tierName": "Silver"
          },
          {
            "tierNumber": 3,
            "tierName ": "Gold"
          },
          {
            "tierNumber": 4,
            "tierName": "Platinum"
          }
        ]
      },
      "loyaltyProgramId": 1095,
      "redeemedPointsReversed": 300.0,
      "redeemedPointsReversedDetails": {
        "available": 300.0,
        "expired": 0.0
      },
      "redemptionSummaryId": 2613711,
      "redemptionReversalToEarningPrograms": [
        {
          "programId": 1095,
          "redeemedPointsReversed": 300.0,
          "redeemedPointsReversedDetails": {
            "available": 300.0,
            "expired": 0.0
          },
          "programCurrentPoints": 2600.0
        }
      ]
    },
    "loyaltyEventId": "a261d029212a09eea3e99a18024d76a9",
    "eventName": "redeemedPointsReversed",
    "refId": "151193_a261d029212a09eea3e99a18024d 76a9",
    "apiRequestId": "a261d029212a09eea3e99a18024d76a9",
    "orgId": 151193
  }
}
```
```json Raw payload
{
  "eventName": "redeemedPointsReversed",
  "eventLogId": 8738,
  "data": {
    "redeemedPointsReversed": 1215.679114312002,
    "redeemedPointsReversedDetails": {
      "available": 5481.702680065735,
      "expired": 9405.14764265558
    },
    "loyaltyProgramDetails": {
      "id": 6741,
      "name": "SJANV",
      "isDefault": true,
      "pointsToCurrencyRatio": 1077.2346518327197,
      "tiers": [
        {
          "tierNumber": 7268,
          "tierName": "CVRQBLZBSR"
        }
      ]
    },
    "redemptionReversalToEarningPrograms": [
      {
        "programId": 2606,
        "redeemedPointsReversed": 588.851601661178,
        "redeemedPointsReversedDetails": {
          "available": 5757.111186510915,
          "expired": 2929.1082482847246
        },
        "programCurrentPoints": 3330.8263225608935
      }
    ],
    "entityInformation": {
      "entityType": "NPMYLHH",
      "entityId": 6412
    },
    "customerIdentifiers": {
      "loyaltyType": "AGIGS",
      "ecommerce": {
        "accounts": [
          {
            "accountId": "MOIKBCNNI",
            "identifiers": [
              {
                "identifierType": "ZKOYM",
                "identifierValue": "WQRKY"
              }
            ]
          }
        ]
      },
      "lastName": "KUW",
      "facebook": {
        "accounts": [
          {
            "accountId": "YSZKJGZINK",
            "identifiers": [
              {
                "identifierType": "ZAYKJX",
                "identifierValue": "AUYEMATCZ"
              }
            ]
          }
        ]
      },
      "wechat": {
        "accounts": [
          {
            "accountId": "LSFCALM",
            "identifiers": [
              {
                "identifierType": "EFM",
                "identifierValue": "XTTJJM"
              }
            ]
          }
        ]
      },
      "tmall": {
        "accounts": [
          {
            "accountId": "EAWMPESDD",
            "identifiers": [
              {
                "identifierType": "RQULWLCMLU",
                "identifierValue": "JGEMOWVJEO"
              }
            ]
          }
        ]
      },
      "toabao": {
        "accounts": [
          {
            "accountId": "MWCWV",
            "identifiers": [
              {
                "identifierType": "WQLNKZOUN",
                "identifierValue": "PCUQ"
              }
            ]
          }
        ]
      },
      "web_engage": {
        "accounts": [
          {
            "accountId": "NWXNEBMBNL",
            "identifiers": [
              {
                "identifierType": "VVKBDZAY",
                "identifierValue": "LTPLYMSLQZ"
              }
            ]
          }
        ]
      },
      "line": {
        "accounts": [
          {
            "accountId": "FJNUQQOG",
            "identifiers": [
              {
                "identifierType": "UXHRPKIJX",
                "identifierValue": "FYGXIJCNPA"
              }
            ]
          }
        ]
      },
      "martjack": {
        "accounts": [
          {
            "accountId": "AQBEGBT",
            "identifiers": [
              {
                "identifierType": "FYOIVV",
                "identifierValue": "UEFCFNN"
              }
            ]
          }
        ]
      },
      "customerId": 1842,
      "jd": {
        "accounts": [
          {
            "accountId": "JCD",
            "identifiers": [
              {
                "identifierType": "RRWG",
                "identifierValue": "ETWPUCC"
              }
            ]
          }
        ]
      },
      "website": {
        "accounts": [
          {
            "accountId": "LSZPTZWP",
            "identifiers": [
              {
                "identifierType": "SNTJK",
                "identifierValue": "YHEECH"
              }
            ]
          }
        ]
      },
      "firstName": "VKZRUHTJNT",
      "instore": {
        "id": 1705,
        "mobile": "IORFNFZ",
        "email": "UXWHAEHND",
        "externalId": "YCVAORGSQJ",
        "cardnumber": "KUYRJKNR",
        "cardexternalid": "IMUOIA",
        "cardNumbers": [
          "IUHJ"
        ]
      }
    },
    "redemptionSummaryId": 3706,
    "triggeringActivity": {
      "name": "JWSGHCGRQC",
      "identifiers": [
        {
          "key": "PSVWUZYFC",
          "value": "WVDU"
        }
      ],
      "enteredBy": {
        "id": 8787,
        "till": {
          "code": "QGN",
          "name": "JHSNLRBQY"
        },
        "store": {
          "code": "ULKWKKYGO",
          "name": "TVNVJAOFM",
          "externalId": "VQQWTPF",
          "externalId1": "RQHD",
          "externalId2": "SOMTDCT"
        }
      },
      "entityInformation": {
        "entityType": "VFAVZPLR",
        "entityId": 6968
      },
      "additionalAttributes": [
        {
          "key": "DOW",
          "value": "HBMTRNYBKW"
        }
      ]
    },
    "loyaltyProgramId": 6150
  },
  "refId": "OCUQLRR",
  "loyaltyEventId": "IOITQOIPJP",
  "apiRequestId": "HRUUTOXFC",
  "eventId": "VJJNNCWXY",
  "createdAt": 6037,
  "traceAttributes": {
    "KEKKFLILT": "KIEFZJFMA",
    "TTDRSNND": "DIJCB",
    "PFOWJKXUL": "WKO",
    "EIR": "KFQRZHBVV"
  },
  "orgId": 5166
}
```

## Updated Single Points Expiry (singlePointsExpiryUpdated)

Notifies when the points expiry date is updated under the Single Points Expiry feature. Single Points Expiry is a feature in Capillary's Loyalty+ platform that allows points across all loyalty programs for different events to have a common expiry date.

| **Parameter**           | **Data Type**    | **Description**                                                                               |
| ----------------------- | ---------------- | --------------------------------------------------------------------------------------------- |
| eventId                 | String           | Unique identifier for the event.                                                              |
| eventType               | String           | Type of the event (e.g., "singlePointsExpiryUpdated").                                        |
| consumerGroupId         | Null             | Identifier for the consumer group (null if not applicable).                                   |
| actionType              | String           | Action type for the event (e.g., "START").                                                    |
| timeStamp               | Integer          | Timestamp when the event occurred (milliseconds since epoch).                                 |
| attributes              | Object           | Contains specific attributes related to the event.                                            |
| -- createdAt            | Integer          | Timestamp when the attributes were created (milliseconds since epoch).                        |
| -- data                 | Object           | Contains specific data related to the event.                                                  |
| --- customerIdentifiers | Object           | Contains identifiers for the customer.                                                        |
| ---- customerId         | Integer          | Unique identifier for the customer.                                                           |
| --- entityInformation   | Object           | Contains information about the entity involved in the event.                                  |
| ---- entityType         | String           | Type of the entity (e.g., "USER").                                                            |
| ---- entityId           | Integer          | Unique identifier for the entity.                                                             |
| --- updatedPointsExpiry | Array of Objects | List of updated points expiry details.                                                        |
| ---- programId          | Integer          | Unique identifier for the loyalty program.                                                    |
| ---- points             | Float            | Number of points associated with the expiry update.                                           |
| ---- pointsType         | String           | Type of points (e.g., "billRegular", "billPromotions").                                       |
| ---- oldExpiryDate      | String           | The previous expiry date of the points (in YYYY-MM-DD format).                                |
| ---- newExpiryDate      | String           | The new expiry date of the points (in YYYY-MM-DD format).                                     |
| --- eventName           | String           | Name of the event (e.g., "singlePointsExpiryUpdated").                                        |
| --- refId               | String           | This is a combination of org id and apiRequestId and is used for internal debugging purposes. |
| --- apiRequestId        | String           | Unique identifier for the API request.                                                        |
| --- orgId               | Integer          | Unique identifier for the organization.                                                       |

```json Enriched payload
{
  "eventId": "a9f1dd54-0477-4a4f-a509-ed5c35cbce7a",
  "eventType": "singlePointsExpiryUpdated",
  "consumerGroupId ": null,
  "actionType": "START",
  "timeStamp": 1683867690435,
  "attributes": {
    "createdAt": 1683867690421,
    "data": {
      "customerIdentifiers": {
        "customerId": 146272039
      },
      "entityInformation": {
        "entityType": "USER",
        "entityId": 146272039
      },
      "updatedPointsExpiry": [
        {
          "programId": 1000028,
          "points": 3.0,
          "pointsType": "billRegular",
          "oldExpiryDate": "2024-03-23",
          "newExpiryDate ": "2024-05-10"
        },
        {
          "programId": 1000028,
          "points": 5.0,
          "pointsType": "billRegular",
          "oldExpiryDate": "2024-05-10",
          "newExpiryDate": "2024-05-10"
        },
        {
          "programId": 1000007,
          "points": 56.0,
          "pointsType": "billPromotions",
          "oldExpiryDate": "2024-03-23",
          "newExpiryDate": "2024-05-10"
        },
        {
          "programId": 1000007,
          "points": 91.0,
          "pointsType": "billPromotions",
          "oldExpir yDate": "2024-05-10",
          "newExpiryDate": "2024-05-10"
        }
      ]
    },
    "eventName": "singlePointsExpiryUpdated",
    "refId": "1000006_68421c2fbcbeead306651eeb514ef109",
    "apiRequestId": "68421c2fbcbe ead306651eeb514ef109",
    "orgId": 1000006
  }
}
```
```json Raw payload
{
  "eventName": "singlePointsExpiryUpdated",
  "eventLogId": 8586,
  "data": {
    "customerIdentifiers": {
      "loyaltyType": "UYYV",
      "ecommerce": {
        "accounts": [
          {
            "accountId": "WAKBWN",
            "identifiers": [
              {
                "identifierType": "QXZVQDCQZ",
                "identifierValue": "VTQBZVH"
              }
            ]
          }
        ]
      },
      "lastName": "HZCF",
      "facebook": {
        "accounts": [
          {
            "accountId": "UQCXUKRUCZ",
            "identifiers": [
              {
                "identifierType": "JGMY",
                "identifierValue": "KLIVR"
              }
            ]
          }
        ]
      },
      "wechat": {
        "accounts": [
          {
            "accountId": "GESWZMKXJ",
            "identifiers": [
              {
                "identifierType": "DPXPY",
                "identifierValue": "PROFQLEB"
              }
            ]
          }
        ]
      },
      "tmall": {
        "accounts": [
          {
            "accountId": "JRYW",
            "identifiers": [
              {
                "identifierType": "JDTBAX",
                "identifierValue": "OYRGSWBLA"
              }
            ]
          }
        ]
      },
      "toabao": {
        "accounts": [
          {
            "accountId": "XIVL",
            "identifiers": [
              {
                "identifierType": "RRGIV",
                "identifierValue": "LDEIBU"
              }
            ]
          }
        ]
      },
      "web_engage": {
        "accounts": [
          {
            "accountId": "SLYKX",
            "identifiers": [
              {
                "identifierType": "CHPMNBIQR",
                "identifierValue": "CTHNWWJHKF"
              }
            ]
          }
        ]
      },
      "line": {
        "accounts": [
          {
            "accountId": "ORIWUHXPU",
            "identifiers": [
              {
                "identifierType": "TQRMSQSJ",
                "identifierValue": "XMAQMDJYSZ"
              }
            ]
          }
        ]
      },
      "martjack": {
        "accounts": [
          {
            "accountId": "HGCAJX",
            "identifiers": [
              {
                "identifierType": "ULYEDQYZIW",
                "identifierValue": "OUEKGOEQI"
              }
            ]
          }
        ]
      },
      "customerId": 2227,
      "jd": {
        "accounts": [
          {
            "accountId": "GRWTJCG",
            "identifiers": [
              {
                "identifierType": "RYQWU",
                "identifierValue": "GZDU"
              }
            ]
          }
        ]
      },
      "website": {
        "accounts": [
          {
            "accountId": "INH",
            "identifiers": [
              {
                "identifierType": "JJGPLQBYKJ",
                "identifierValue": "TPKKJ"
              }
            ]
          }
        ]
      },
      "firstName": "YDC",
      "instore": {
        "id": 7326,
        "mobile": "NQWZQB",
        "email": "FTBYS",
        "externalId": "RWFFEO",
        "cardnumber": "DICOVGCBB",
        "cardexternalid": "BVIIUOPN",
        "cardNumbers": [
          "MXUJVJTKXC"
        ]
      }
    },
    "entityInformation": {
      "entityType": "TGCNHIIGZK",
      "entityId": 33
    },
    "triggeringActivity": {
      "name": "IBS",
      "identifiers": [
        {
          "key": "ZTTGP",
          "value": "HROSPIPOMJ"
        }
      ],
      "enteredBy": {
        "id": 1794,
        "till": {
          "code": "KBXEHWV",
          "name": "TNSXT"
        },
        "store": {
          "code": "PQDITUPU",
          "name": "XBAC",
          "externalId": "ASTHDBGBF",
          "externalId1": "XDHXPWL",
          "externalId2": "ZBVT"
        }
      },
      "entityInformation": {
        "entityType": "BYDRS",
        "entityId": 7956
      },
      "additionalAttributes": [
        {
          "key": "XKGPNAJBX",
          "value": "DASXG"
        }
      ]
    },
    "updatedPointsExpiry": [
      {
        "programId": 9534,
        "points": 6710.948044859624,
        "pointsType": "VDENL",
        "oldExpiryDate": "YVMOGDXC",
        "newExpiryDate": "VQXMR"
      }
    ]
  },
  "refId": "FBFJERJVV",
  "loyaltyEventId": "KQELSJ",
  "apiRequestId": "MUUVX",
  "eventId": "AIJL",
  "createdAt": 1407,
  "traceAttributes": {
    "QBAR": "RGWTPIBLJ",
    "USHIJCVD": "ZEQHLKVXQ"
  },
  "orgId": 8046
}
```

## Issued Points Reversed Event (issuedPointsReversed)

Notifies when points issued for a user has been reversed. For example, a user has returned a purchase and the points issued have been reversed.

| **Parameter**                                 | **Data Type**    | **Description**                                                                                   |
| --------------------------------------------- | ---------------- | ------------------------------------------------------------------------------------------------- |
| eventName                                     | String           | Name of the event (e.g., "issuedPointsReversed").                                                 |
| eventId                                       | String           | Unique identifier for the event.                                                                  |
| eventLogId                                    | Integer          | Unique ID that is generated when the event is triggered.                                          |
| data                                          | Object           | Contains specific data related to the event.                                                      |
| -- customerIdentifiers                        | Object           | Contains identifiers for the customer.                                                            |
| --- customerId                                | Integer          | Unique identifier for the customer.                                                               |
| --- instore                                   | Object           | Contains instore identification details of the customer.                                          |
| ---- mobile                                   | String           | Mobile number of the customer.                                                                    |
| ---- email                                    | String           | Email address of the customer.                                                                    |
| -- entityInformation                          | Object           | Contains information about the entity involved in the event.                                      |
| --- entityType                                | String           | Type of the entity (e.g., "USER").                                                                |
| --- entityId                                  | Integer          | Unique identifier for the entity.                                                                 |
| -- triggeringActivity                         | Object           | Contains details of the activity that triggered this event.                                       |
| --- name                                      | String           | Name of the triggering activity (e.g., "ReturnBill").                                             |
| --- identifiers                               | Array of Objects | List of identifiers related to the triggering activity.                                           |
| ---- key                                      | String           | Identifier key (e.g., "billId", "billNumber").                                                    |
| ---- value                                    | String           | Value corresponding to the key.                                                                   |
| --- enteredBy                                 | Object           | Information about who entered the triggering activity.                                            |
| ---- id                                       | Integer          | Unique identifier for the person who entered the activity.                                        |
| --- entityInformation                         | Object           | Information about the entity involved in the triggering activity.                                 |
| ---- entityType                               | String           | Type of the entity (e.g., "USER").                                                                |
| ---- entityId                                 | Integer          | Unique identifier for the entity.                                                                 |
| --- additionalAttributes                      | Array            | Additional attributes related to the triggering activity (empty if none).                         |
| -- loyaltyProgram Details                     | Object           | Contains details about the loyalty program.                                                       |
| --- id                                        | Integer          | Unique identifier for the loyalty program.                                                        |
| --- name                                      | String           | Name of the loyalty program (e.g., "Shell Indonesia_ProdDefaultProgram").                         |
| --- isDefault                                 | Boolean          | Indicates if this is the default program.                                                         |
| --- pointsToCurrencyRatio                     | Float            | Ratio of points to currency value.                                                                |
| --- tiers                                     | Array of Objects | List of tiers in the loyalty program.                                                             |
| ---- tierNumber                               | Integer          | The number of the tier.                                                                           |
| ---- tierName                                 | String           | Name of the tier.                                                                                 |
| -- loyaltyProgramId                           | Integer          | Unique identifier for the loyalty program.                                                        |
| -- programCurrentPoints                       | Float            | Current points available in the loyalty program.                                                  |
| -- programLifetimePoints                      | Float            | Total lifetime points accumulated in the loyalty program.                                         |
| -- totalIssuedPointsReversed                  | Float            | Total points issued that have been reversed.                                                      |
| -- regularPointsReversed                      | Float            | Total regular points that have been reversed.                                                     |
| -- promisedPointsReversed                     | Float            | Total promised points that have been reversed.                                                    |
| -- promotionalPointsReversed                  | Array            | List of promotional points that have been reversed (empty if none).                               |
| -- currentEventPromisedPointsReturned         | Float            | Total promised points returned in the current event.                                              |
| -- currentEventRegularPointsReturned          | Float            | Total regular points returned in the current event.                                               |
| -- currentEventTotalPointsReturned            | Float            | Total points returned in the current event.                                                       |
| -- currentEventPromotionPointsReturnedDetails | Array            | Details of promotional points returned in the current event (empty if none).                      |
| orgId                                         | Integer          | Unique identifier for the organization.                                                           |
| refId                                         | String           | This is a combination of org id and loyalty event ID and is used for internal debugging purposes. |
| apiRequestId                                  | String           | Unique identifier for the API request.                                                            |
| createdAt                                     | Integer          | Timestamp when the event was created (milliseconds since epoch).                                  |
| loyaltyEventId                                | String           | Unique identifier for the loyalty event.                                                          |

```json Enriched payload
{
  "eventName": "issuedPointsReversed",
  "eventId": "a9f1dd54-0477-4a4f-a509-ed5c35cbce7a",
  "eventLogId": 34805034,
  "data": {
    "customerIdentifiers": {
      "customerId": 6767040,
      "instore": {
        "mobile": "6289652442647",
        "email": "dafitsetiyawan53@gmail.com"
      }
    },
    "entityInformation": {
      "entityType": "USER",
      "entityId": 6767040
    },
    "triggeringActivity": {
      "name": "ReturnBill",
      "identifiers": [
        {
          "key": "billId",
          "value": "65658330"
        },
        {
          "key": "billNumber",
          "value": "2_6594_12743097_6586"
        }
      ],
      "enteredBy": {
        "id": 200291531
      },
      "entityInformation": {
        "entityType": "USER",
        "entityId": 6767040
      },
      "additionalAttributes": [
        
      ]
    },
    "loyaltyProgram Details": {
      "id": 1098,
      "name": "Shell Indonesia_ProdDefaultProgram",
      "isDefault": true,
      "pointsToCurrencyRatio": 1.0,
      "tiers": [
        {
          "tierNumber": 1,
          "tierName": "NONE"
        }
      ]
    },
    "loyaltyProgramId": 1098,
    "programCurrentPoints": 0.0,
    "programLifetimePoints": 0.0,
    "totalIssuedPointsReversed": 2.0,
    "regularPointsReversed": 2.0,
    "promisedPointsReversed": 0.0,
    "promotionalPointsReversed": [
      
    ],
    "currentEventPromisedPointsReturned": 0.0,
    "currentEventRegularPointsReturned": 2.0,
    "currentEventTotalPointsReturned": 2.0,
    "currentEventPromotionPointsReturnedDetails": [
      
    ]
  },
  "or gId": 151195,
  "refId": "151195_Jqo9Kup5Bm",
  "apiRequestId": "1f575ed0ef2095a1c56714d6b1e961c0",
  "createdAt": 1683874940147,
  "loyaltyEventId": "Jqo9Kup5Bm"
}

```
```json Raw payload
{
  "eventName": "issuedPointsReversed",
  "eventLogId": 676,
  "data": {
    "regularPointsReversed": 2501.613808288268,
    "loyaltyProgramDetails": {
      "id": 3910,
      "name": "EVEGWHY",
      "isDefault": false,
      "pointsToCurrencyRatio": 4016.3997844925384,
      "tiers": [
        {
          "tierNumber": 5510,
          "tierName": "SQMLUJMKBK"
        }
      ]
    },
    "entityInformation": {
      "entityType": "QWTOQ",
      "entityId": 2314
    },
    "customerIdentifiers": {
      "loyaltyType": "JXH",
      "ecommerce": {
        "accounts": [
          {
            "accountId": "KTU",
            "identifiers": [
              {
                "identifierType": "JVN",
                "identifierValue": "VYQA"
              }
            ]
          }
        ]
      },
      "lastName": "LGWFWE",
      "facebook": {
        "accounts": [
          {
            "accountId": "AFRLXTCSV",
            "identifiers": [
              {
                "identifierType": "JZV",
                "identifierValue": "JUTBZ"
              }
            ]
          }
        ]
      },
      "wechat": {
        "accounts": [
          {
            "accountId": "PMDWC",
            "identifiers": [
              {
                "identifierType": "GWOIMCUU",
                "identifierValue": "KIMEFWTUQE"
              }
            ]
          }
        ]
      },
      "tmall": {
        "accounts": [
          {
            "accountId": "AOFPPDNV",
            "identifiers": [
              {
                "identifierType": "SNSHQN",
                "identifierValue": "YLFGDCROZ"
              }
            ]
          }
        ]
      },
      "toabao": {
        "accounts": [
          {
            "accountId": "MLS",
            "identifiers": [
              {
                "identifierType": "DMVT",
                "identifierValue": "RMFPT"
              }
            ]
          }
        ]
      },
      "web_engage": {
        "accounts": [
          {
            "accountId": "ARABW",
            "identifiers": [
              {
                "identifierType": "PBJZL",
                "identifierValue": "XISN"
              }
            ]
          }
        ]
      },
      "line": {
        "accounts": [
          {
            "accountId": "UVKA",
            "identifiers": [
              {
                "identifierType": "FKLOHKCLQX",
                "identifierValue": "KCKGXSGSZQ"
              }
            ]
          }
        ]
      },
      "martjack": {
        "accounts": [
          {
            "accountId": "VRSCI",
            "identifiers": [
              {
                "identifierType": "HJVWVYOHXE",
                "identifierValue": "ACLE"
              }
            ]
          }
        ]
      },
      "customerId": 5839,
      "jd": {
        "accounts": [
          {
            "accountId": "WVHNUMWCNR",
            "identifiers": [
              {
                "identifierType": "BBSNGOSE",
                "identifierValue": "QSVBTHJT"
              }
            ]
          }
        ]
      },
      "website": {
        "accounts": [
          {
            "accountId": "EBQJ",
            "identifiers": [
              {
                "identifierType": "EPIHTM",
                "identifierValue": "WFRYKV"
              }
            ]
          }
        ]
      },
      "firstName": "BAWAFN",
      "instore": {
        "id": 7996,
        "mobile": "RUMCOGDO",
        "email": "PYGJ",
        "externalId": "LHDM",
        "cardnumber": "DQESX",
        "cardexternalid": "HMVMNI",
        "cardNumbers": [
          "GXAY"
        ]
      }
    },
    "currentEventRegularPointsReturned": 8388.375127840496,
    "currentEventPromotionPointsReturnedDetails": [
      {
        "promotionIdentifier": "ATVOWRIEEI",
        "promotionType": "FOWUBP",
        "promotionPoints": 5496.6821970433475
      }
    ],
    "promisedPointsReversed": 3897.6486722018017,
    "programLifetimePoints": 7772.4145714412825,
    "promotionalPointsReversed": [
      {
        "promotionIdentifier": "WMBTZIXRDK",
        "promotionType": "BXD",
        "promotionPoints": 694.1391462507705
      }
    ],
    "totalIssuedPointsReversed": 5491.756818106471,
    "currentEventTotalPointsReturned": 263.9493147875954,
    "programCurrentPoints": 5648.328006223418,
    "triggeringActivity": {
      "name": "AVYFVTEST",
      "identifiers": [
        {
          "key": "GABRZIV",
          "value": "TSRRFCZC"
        }
      ],
      "enteredBy": {
        "id": 7652,
        "till": {
          "code": "CUMHRRHE",
          "name": "STL"
        },
        "store": {
          "code": "OUOKIKF",
          "name": "IMFBAEU",
          "externalId": "YUVNGZMCS",
          "externalId1": "DLQFDPJ",
          "externalId2": "RTRIWHIMO"
        }
      },
      "entityInformation": {
        "entityType": "EQVR",
        "entityId": 6678
      },
      "additionalAttributes": [
        {
          "key": "ZRHXYNL",
          "value": "GQQXKZOONJ"
        }
      ]
    },
    "loyaltyProgramId": 1163,
    "currentEventPromisedPointsReturned": 726.7377380066263
  },
  "refId": "OEAWER",
  "loyaltyEventId": "PMESP",
  "apiRequestId": "BCDQW",
  "eventId": "TMKUL",
  "createdAt": 4904,
  "traceAttributes": {
    "VDJE": "AWPKTAFMI",
    "CGZIXZ": "BMLJNNOIN",
    "RBDIHNFQJQ": "HXZXUWAMA"
  },
  "orgId": 4231
}
```

## Manual Points Adjustment Event (manualPointsAdjustment)

Notifies whenever points are adjusted/deducted manually.

```json Raw payload
{
        "eventName": "manualPointsAdjustment",
        "data": {
            "customerIdentifiers": {
                "customerId": 1758,
                "firstName": "UQDSNI",
                "lastName": "AAWFXYIU",
                "loyaltyType": "QRGZ",
                "instore": {
                    "id": 7189,
                    "mobile": "HQPJVKEWIO",
                    "email": "IBMEMP",
                    "externalId": "UKCUFFFU",
                    "cardnumber": "TTRX",
                    "cardexternalid": "XNCLUWP",
                    "cardNumbers": [
                        "KIAZ"
                    ]
                },
                "facebook": {
                    "accounts": [
                        {
                            "accountId": "MZBUUYLJFY",
                            "identifiers": [
                                {
                                    "identifierType": "APKVE",
                                    "identifierValue": "SYRI"
                                }
                            ]
                        }
                    ]
                },
                "web_engage": {
                    "accounts": [
                        {
                            "accountId": "IOZ",
                            "identifiers": [
                                {
                                    "identifierType": "VNWVKXSH",
                                    "identifierValue": "ELLM"
                                }
                            ]
                        }
                    ]
                },
                "wechat": {
                    "accounts": [
                        {
                            "accountId": "DQEIBNUG",
                            "identifiers": [
                                {
                                    "identifierType": "RBLGXPLDE",
                                    "identifierValue": "AHQJZKP"
                                }
                            ]
                        }
                    ]
                },
                "martjack": {
                    "accounts": [
                        {
                            "accountId": "CPJAMEI",
                            "identifiers": [
                                {
                                    "identifierType": "MWJUGII",
                                    "identifierValue": "DPA"
                                }
                            ]
                        }
                    ]
                },
                "tmall": {
                    "accounts": [
                        {
                            "accountId": "GIT",
                            "identifiers": [
                                {
                                    "identifierType": "YTGWQO",
                                    "identifierValue": "HEUAERYR"
                                }
                            ]
                        }
                    ]
                },
                "toabao": {
                    "accounts": [
                        {
                            "accountId": "SADEF",
                            "identifiers": [
                                {
                                    "identifierType": "BKICFEMEL",
                                    "identifierValue": "XUJCBLIC"
                                }
                            ]
                        }
                    ]
                },
                "jd": {
                    "accounts": [
                        {
                            "accountId": "SWKTBMWXWT",
                            "identifiers": [
                                {
                                    "identifierType": "HMUVXJSQDC",
                                    "identifierValue": "LOJK"
                                }
                            ]
                        }
                    ]
                },
                "ecommerce": {
                    "accounts": [
                        {
                            "accountId": "IKH",
                            "identifiers": [
                                {
                                    "identifierType": "UIVK",
                                    "identifierValue": "WZMZVQZAV"
                                }
                            ]
                        }
                    ]
                },
                "website": {
                    "accounts": [
                        {
                            "accountId": "TXUZCEH",
                            "identifiers": [
                                {
                                    "identifierType": "GYNVKPV",
                                    "identifierValue": "TKTHDVOVGK"
                                }
                            ]
                        }
                    ]
                },
                "line": {
                    "accounts": [
                        {
                            "accountId": "EWEYBM",
                            "identifiers": [
                                {
                                    "identifierType": "CZEI",
                                    "identifierValue": "WVRZ"
                                }
                            ]
                        }
                    ]
                }
            },
            "triggeringActivity": {
                "name": "MNAMWHHEA",
                "identifiers": [
                    {
                        "key": "KJQQMRFB",
                        "value": "COFVYLXLQ"
                    }
                ],
                "enteredBy": {
                    "id": 4518,
                    "till": {
                        "code": "CEESGN",
                        "name": "XUR"
                    },
                    "store": {
                        "code": "UOVSN",
                        "name": "XTHGLSQJ",
                        "externalId": "GLMPVHORI",
                        "externalId1": "SQP",
                        "externalId2": "AWVZXGL"
                    }
                },
                "entityInformation": {
                    "entityType": "RGNVYWH",
                    "entityId": 7399
                },
                "additionalAttributes": [
                    {
                        "key": "ZOPCTILV",
                        "value": "QIZ"
                    }
                ]
            },
            "totalPoinstDeducted": "KVLBL",
            "programPointsSplit": [
                {
                    "pointsAwardedId": 5563,
                    "programId": 5201,
                    "points": "MTI",
                    "pointsType": "VTGKSKGRSX"
                }
            ],
            "reason": "RNRS"
        },
        "eventId": "LQRMEP",
			  "eventLogId": 34805085,
        "orgId": 3645,
        "refId": "YJKTQHW",
        "apiRequestId": "ZVWB",
        "createdAt": 2131,
        "loyaltyEventId": "QICGTBS",
        "traceAttributes": {
            "LNYTCZ": "OOKQVJP",
            "FSAXZ": "DXFIGJN",
            "BCCTVSRU": "VNSDASROL",
            "IQMTZR": "BWDCJRK",
            "TGO": "UYNYM"
        }
    }
```

## Points Expiry Change Event (pointsExpiryChange)

Notifies when a points expiry date changes.

```json Raw payload
{
        "eventName": "pointsExpiryChange",
        "data": {
            "customerIdentifiers": {
                "customerId": 4641,
                "firstName": "WVKZIOEWT",
                "lastName": "FEQKBQT",
                "loyaltyType": "QSGORU",
                "instore": {
                    "id": 3349,
                    "mobile": "YGUBCIUA",
                    "email": "XXNDOK",
                    "externalId": "YYVHQYQ",
                    "cardnumber": "XVUZ",
                    "cardexternalid": "SNEG",
                    "cardNumbers": [
                        "WJOZ"
                    ]
                },
                "facebook": {
                    "accounts": [
                        {
                            "accountId": "OPQOYMKUHT",
                            "identifiers": [
                                {
                                    "identifierType": "DPQGYCLK",
                                    "identifierValue": "ENIFFN"
                                }
                            ]
                        }
                    ]
                },
                "web_engage": {
                    "accounts": [
                        {
                            "accountId": "NGTH",
                            "identifiers": [
                                {
                                    "identifierType": "WUHZMJOTS",
                                    "identifierValue": "QSZHE"
                                }
                            ]
                        }
                    ]
                },
                "wechat": {
                    "accounts": [
                        {
                            "accountId": "APBUCK",
                            "identifiers": [
                                {
                                    "identifierType": "IBVUKGMS",
                                    "identifierValue": "ZII"
                                }
                            ]
                        }
                    ]
                },
                "martjack": {
                    "accounts": [
                        {
                            "accountId": "CCAPRK",
                            "identifiers": [
                                {
                                    "identifierType": "WGBMHJPIMN",
                                    "identifierValue": "TOZXM"
                                }
                            ]
                        }
                    ]
                },
                "tmall": {
                    "accounts": [
                        {
                            "accountId": "BWWNBYQVV",
                            "identifiers": [
                                {
                                    "identifierType": "FJNFWMLO",
                                    "identifierValue": "PHKNDXPZRU"
                                }
                            ]
                        }
                    ]
                },
                "toabao": {
                    "accounts": [
                        {
                            "accountId": "SITHI",
                            "identifiers": [
                                {
                                    "identifierType": "MUAU",
                                    "identifierValue": "FXFEFNU"
                                }
                            ]
                        }
                    ]
                },
                "jd": {
                    "accounts": [
                        {
                            "accountId": "IUVXQIWW",
                            "identifiers": [
                                {
                                    "identifierType": "EPTRNQYDE",
                                    "identifierValue": "XUJJIWRI"
                                }
                            ]
                        }
                    ]
                },
                "ecommerce": {
                    "accounts": [
                        {
                            "accountId": "ZDWBVR",
                            "identifiers": [
                                {
                                    "identifierType": "VZYVLN",
                                    "identifierValue": "KPSV"
                                }
                            ]
                        }
                    ]
                },
                "website": {
                    "accounts": [
                        {
                            "accountId": "YALFSGSQZ",
                            "identifiers": [
                                {
                                    "identifierType": "MKNAYDWFB",
                                    "identifierValue": "EXUIQ"
                                }
                            ]
                        }
                    ]
                },
                "line": {
                    "accounts": [
                        {
                            "accountId": "RUVLRDYSU",
                            "identifiers": [
                                {
                                    "identifierType": "UZPBAHR",
                                    "identifierValue": "CUTZWOO"
                                }
                            ]
                        }
                    ]
                }
            },
            "entityInformation": {
                "entityType": "FRXKWQICWL",
                "entityId": 8959
            },
            "triggeringActivity": {
                "name": "POVHEWMEL",
                "identifiers": [
                    {
                        "key": "PGOZULPW",
                        "value": "EAOXDT"
                    }
                ],
                "enteredBy": {
                    "id": 4214,
                    "till": {
                        "code": "KQWMO",
                        "name": "NHRYABBXUZ"
                    },
                    "store": {
                        "code": "RCSWZCKED",
                        "name": "XVDSQAGDWY",
                        "externalId": "QUW",
                        "externalId1": "HOYRXJ",
                        "externalId2": "DEXNVCZF"
                    }
                },
                "entityInformation": {
                    "entityType": "NVQDGZBR",
                    "entityId": 5911
                },
                "additionalAttributes": [
                    {
                        "key": "HNWKJVLAU",
                        "value": "VMAAZEOOP"
                    }
                ]
            },
            "loyaltyProgramDetails": {
                "id": 8128,
                "name": "YEWWHFCVW",
                "isDefault": false,
                "pointsToCurrencyRatio": 2962.620522120906,
                "tiers": [
                    {
                        "tierNumber": 1894,
                        "tierName": "GSLSFZYWZ"
                    }
                ]
            },
            "updatedPointsExpiryBreakup": [
                {
                    "pointAwardedRefID": 1171,
                    "pointsAwardedRefType": "LVVD",
                    "promotionID": 4623,
                    "points": 7844.736601561621,
                    "pointsPreviousExpiryDate": "AHL",
                    "expiryUpdateReasonType": "UXCLOEI",
                    "expiryUpdateReasonNote": "AZTRNNS",
                    "newExpiryDate": "FRN",
                    "newExpirySetType": "NFQFBKVG"
                }
            ]
        },
        "eventId": "ERPX",
        "orgId": 4671,
        "refId": "FIDLZHB",
        "apiRequestId": "VNABEYLQI",
        "createdAt": 8366,
        "loyaltyEventId": "NYJZAGJDW",
        "traceAttributes": {
            "QMZPAITQOM": "WPU",
            "YPHESNB": "NKSFFI",
            "XJBWMHAK": "IFDHCBY"
        }
    }
```

## Promised/External Points Conversion Event

Notifies when a Promised/External Points are converted for a customer.

````json Enriched payload
{
    "createdAt": 1739857872597,
    "loyaltyEventId": "WAN63O3tpr",
    "eventName": "promisedToCurrentPointsConversion",
    "eventLogId": 34219968,
    "refId": "50402_WAN63O3tpr",
    "apiRequestId": "9467677c550449826d9207cec30848c1",
    "orgId": 50402,
    "data": {
        "customerIdentifiers": {
            "customerId": 348201654,
            "instore": {
                "mobile": "672919878345733",
                "cardNumbers": []
            }
        },
        "entityInformation": {
            "entityType": "USER",
            "entityId": 348201654
        },
        "earningActivityReference": [
            {
                "name": "TransactionAdd",
                "enteredAt": 1.73985783E12,
                "pointsConverted": 1200.0,
                "identifiers": [
                    {
                        "key": "billNumber",
                        "value": "1739857829"
                    },
                    {
                        "key": "EventLogId",
                        "value": "34219920"
                    }
                ]
            }
        ],
        "loyaltyProgramDetails": {
            "id": 1143,
            "name": "Nirvana DefaultProgram",
            "isDefault": true,
            "pointsToCurrencyRatio": 1.0,
            "tiers": [
                {
                    "tierNumber": 1,
                    "tierName": "Bronze"
                },
                {
                    "tierNumber": 2,
                    "tierName": "Silver"
                },
                {
                    "tierNumber": 3,
                    "tierName": "Gold"
                }
            ]
        },
        "loyaltyProgramId": 1143,
        "pointsConverted": 1200.0,
        "pointsConvertedType": "EXTERNAL_TRIGGER_BASED_POINTS",
        "programCurrentPoints": 1200.0,
        "programLifetimePoints": 1200.0,
        "pointsConversionSource": "systemTrigger",
        "pointsConvertedBreakup": []
    }
}
```json

```json
{
    "createdAt": 1739859870860,
    "loyaltyEventId": "mBbJnPSQ0XOIwF5",
    "eventName": "promisedToCurrentPointsConversion",
    "eventLogId": 34220447,
    "refId": "50402_mBbJnPSQ0XOIwF5",
    "apiRequestId": "2d726c58-0bd0-4cec-8cc1-e80c5f5325db",
    "orgId": 50402,
    "data": {
        "customerIdentifiers": {
            "customerId": 348201817,
            "instore": {
                "mobile": "672919878345735",
                "cardNumbers": []
            }
        },
        "entityInformation": {
            "entityType": "USER",
            "entityId": 348201817
        },
        "earningActivityReference": [
            {
                "name": "TransactionAdd",
                "enteredAt": 1.739859807E12,
                "pointsConverted": 100.0,
                "identifiers": [
                    {
                        "key": "billNumber",
                        "value": "1739859806"
                    },
                    {
                        "key": "EventLogId",
                        "value": "34220423"
                    }
                ]
            }
        ],
        "loyaltyProgramDetails": {
            "id": 1143,
            "name": "Nirvana DefaultProgram",
            "isDefault": true,
            "pointsToCurrencyRatio": 1.0,
            "tiers": [
                {
                    "tierNumber": 1,
                    "tierName": "Bronze"
                },
                {
                    "tierNumber": 2,
                    "tierName": "Silver"
                },
                {
                    "tierNumber": 3,
                    "tierName": "Gold"
                }
            ]
        },
        "loyaltyProgramId": 1143,
        "pointsConverted": 100.0,
        "pointsConvertedType": "PROMISED_POINTS",
        "programCurrentPoints": 0.0,
        "programLifetimePoints": 0.0,
        "pointsConversionSource": "systemTrigger",
        "pointsConvertedBreakup": []
    }
}
```json

```json
{
    "createdAt": 1739860477069,
    "loyaltyEventId": "",
    "eventName": "promisedToCurrentPointsConversion",
    "eventLogId": 34220923,
    "refId": "",
    "apiRequestId": "0755f2991e6773b2e818e6a151a3d108",
    "orgId": 50402,
    "data": {
        "customerIdentifiers": {
            "customerId": 348201817
        },
        "earningActivityReference": [],
        "pointsConverted": 600.0,
        "eventDateTime": "2025-02-18 06:34:37",
        "pointsConversionSource": "externalTrigger",
        "eventLogId": 34220923,
        "billId": 37245321,
        "pointsConvertedBreakup": [
            {
                "entityName": "BILL",
                "entityDetails": {
                    "id": 37245321
                },
                "promotionalPointsBreakup": [],
                "nonPromotionalPointsBreakup": [
                    {
                        "points": "600.000",
                        "programId": 1143
                    }
                ]
            }
        ]
    }
}
````
```json Raw payload
{
  "eventName": "promisedToCurrentPointsConversion",
  "eventLogId": 7326,
  "data": {
    "billId": 7212,
    "loyaltyProgramDetails": {
      "id": 1673,
      "name": "FLIR",
      "isDefault": true,
      "pointsToCurrencyRatio": 3259.8206271663644,
      "tiers": [
        {
          "tierNumber": 21,
          "tierName": "VFKE"
        }
      ]
    },
    "eventLogId": 5441,
    "entityInformation": {
      "entityType": "FDOKTI",
      "entityId": 2215
    },
    "pointsConvertedType": "TVGWXE",
    "pointsConvertedBreakup": [
      {
        "entityName": "BBHP",
        "entityDetails": {
          "id": 9479,
          "billNumber": "TUMBQJMWXA",
          "itemCode": "IOPPX",
          "billDate": "CINRR"
        },
        "promotionalPointsBreakup": [
          {
            "points": "JVBBY",
            "programId": 9580,
            "promotionId": 3717,
            "promotionName": "SDZMVAFEOC",
            "promotionDetails": [
              {
                "issueRestrictions": [],
                "linkedTargetGroupVsTargetRuleIdMap": {},
                "promotionEndDate": "ORDJEVLS",
                "customFields": [],
                "promotionIdentifier": "QJU",
                "promotionStartDate": "INTP",
                "promotionName": "LDS",
                "redemptionRestrictions": [],
                "pointsOfferType": "PEQKJSKQD",
                "promotionDescription": "SQHSD",
                "promotionType": "LKE",
                "promotionId": 5873,
                "earnRestrictions": [],
                "programId": 7616
              }
            ]
          }
        ],
        "nonPromotionalPointsBreakup": [
          {
            "points": "QDKEYFDA",
            "programId": 8546
          }
        ]
      }
    ],
    "customerIdentifiers": {
      "loyaltyType": "YTLUYPGE",
      "ecommerce": {
        "accounts": [
          {
            "accountId": "VQHFXZMNOV",
            "identifiers": [
              {
                "identifierType": "BOREYO",
                "identifierValue": "AZIUDDQ"
              }
            ]
          }
        ]
      },
      "lastName": "MQICKVW",
      "facebook": {
        "accounts": [
          {
            "accountId": "TEYNZQB",
            "identifiers": [
              {
                "identifierType": "VPJ",
                "identifierValue": "SMRNHR"
              }
            ]
          }
        ]
      },
      "wechat": {
        "accounts": [
          {
            "accountId": "SZALCLYWE",
            "identifiers": [
              {
                "identifierType": "PUQGIW",
                "identifierValue": "NQWWKPG"
              }
            ]
          }
        ]
      },
      "tmall": {
        "accounts": [
          {
            "accountId": "MELLNXVO",
            "identifiers": [
              {
                "identifierType": "AIAY",
                "identifierValue": "VVQLMMZ"
              }
            ]
          }
        ]
      },
      "toabao": {
        "accounts": [
          {
            "accountId": "TKO",
            "identifiers": [
              {
                "identifierType": "RHU",
                "identifierValue": "KDWYZFVCSH"
              }
            ]
          }
        ]
      },
      "web_engage": {
        "accounts": [
          {
            "accountId": "SJG",
            "identifiers": [
              {
                "identifierType": "WPHCYVXN",
                "identifierValue": "SBLWUPI"
              }
            ]
          }
        ]
      },
      "line": {
        "accounts": [
          {
            "accountId": "QTUTU",
            "identifiers": [
              {
                "identifierType": "FIK",
                "identifierValue": "XIYUK"
              }
            ]
          }
        ]
      },
      "martjack": {
        "accounts": [
          {
            "accountId": "MHQMQYINCC",
            "identifiers": [
              {
                "identifierType": "KQYXMI",
                "identifierValue": "IBTPLWRKYN"
              }
            ]
          }
        ]
      },
      "customerId": 4180,
      "jd": {
        "accounts": [
          {
            "accountId": "TITHLGD",
            "identifiers": [
              {
                "identifierType": "XQLYJTZUUC",
                "identifierValue": "WMXYK"
              }
            ]
          }
        ]
      },
      "website": {
        "accounts": [
          {
            "accountId": "XQCC",
            "identifiers": [
              {
                "identifierType": "AXHT",
                "identifierValue": "FWTZUPJX"
              }
            ]
          }
        ]
      },
      "firstName": "CMLZNWJCL",
      "instore": {
        "id": 563,
        "mobile": "OVSQL",
        "email": "NZIO",
        "externalId": "RSKENETHDA",
        "cardnumber": "ATFSRAWSL",
        "cardexternalid": "DGKGZK",
        "cardNumbers": [
          "HSNL"
        ]
      }
    },
    "pointsConverted": 1123.0555116119313,
    "programLifetimePoints": 5854.654706193828,
    "earningActivityReference": [
      {
        "name": "YUVXGRNAYJ",
        "enteredAt": 4080.784965348667,
        "pointsConverted": 5640.914271493299,
        "identifiers": [
          {
            "key": "FQJBA",
            "value": "GEUN"
          }
        ]
      }
    ],
    "pointsConversionSource": "SRVO",
    "eventDateTime": "ZQJI",
    "programCurrentPoints": 5541.192649721517,
    "triggeringActivity": {
      "name": "KNB",
      "identifiers": [
        {
          "key": "FRMSS",
          "value": "IMJABZTCY"
        }
      ],
      "enteredBy": {
        "id": 3984,
        "till": {
          "code": "BWJDQYBXH",
          "name": "UWSBE"
        },
        "store": {
          "code": "JFN",
          "name": "FIDRIZX",
          "externalId": "OFYTQTZN",
          "externalId1": "GUKQGQV",
          "externalId2": "DBKKNQIY"
        }
      },
      "entityInformation": {
        "entityType": "UZFY",
        "entityId": 8400
      },
      "additionalAttributes": [
        {
          "key": "WORXBQW",
          "value": "JMEVUV"
        }
      ]
    },
    "loyaltyProgramId": 3302
  },
  "refId": "GJLGRTDBZT",
  "loyaltyEventId": "KRXITDR",
  "apiRequestId": "QJAA",
  "eventId": "UGL",
  "createdAt": 2292,
  "traceAttributes": {
    "QPCZ": "ZTU",
    "VNZ": "BABK",
    "VVQON": "PSNCEUG",
    "RFMJGRJRVL": "VIVYTBDG",
    "RFRSLUE": "BVGT",
    "FUWIN": "QHJ"
  },
  "orgId": 7351
}
```

***

# Alternate currencies

An alternate currency is a type of reward currency, similar to points, that brands can create and use within their loyalty programs to incentivise customer behavuior.

## Alternate currencies issued (alternateCurrenciesIssued)

Notifies when alternate currencies are issued to a user.

```json Enriched payload
{
  "data": {
    "customerIdentifiers": {
      "customerId": 386959475,
      "instore": {
        "email": "ruchi@gmail.com",
        "mobile": "917237869215"
      }
    },
    "entityInformation": {
      "entityId": 386959475,
      "entityType": "USER"
    },
    "loyaltyProgramDetails": {
      "id": 2645,
      "isDefault": true,
      "name": "Test_OrgDefaultProgram",
      "pointsToCurrencyRatio": 1,
      "tiers": [
        {
          "tierName": "Default_tier",
          "tierNumber": 1
        },
        {
          "tierName": "Silver_tier",
          "tierNumber": 2
        },
        {
          "tierName": "Gold_tier",
          "tierNumber": 2
        }
      ]
    },
    "loyaltyProgramId": 2645,
    "alternateCurrencies": [
      {
        "alternateCurrencyName": "stars",
        "alternateCurrencyIdentifier": "dsgagg",
        "programCurrentAlternateCurrencies": 130,
        "programLifetimeAlternateCurrencies": 130,
        "promisedAlternateCurrenciesIssued": [
          {
            "promisedAlternateCurrencies": 10,
            "isExternalTriggerBased": true,
            "promisedAlternateCurrenciesConversionDate": "2024-05-17",
            "promotionIdentifier": "sdged181-7e91-4abe-86cd-sgdcee9b8ccf"
          }
        ],
        "promotionalAlternateCurrenciesIssued": [
          {
            "promotionName": "promo1",
            "promotionIdentifier": "528d181-7e91-4abe-86cd-598cee9b8ccf",
            "promotionAlternateCurrencies": 100,
            "promotionAlternateCurrenciesExpiryDate": "2025-05-31",
            "promotionType": "CUSTOMER_PROMOTION"
          },
          {
            "promotionName": "promo2",
            "promotionIdentifier": "a6cb5a7e-3d84-4f1f-87c6-5f26006f6392",
            "promotionAlternateCurrencies": 10,
            "promotionAlternateCurrenciesExpiryDate": "2025-05-31",
            "promotionType": "CUSTOMER_PROMOTION"
          }
        ],
        "regularAlternateCurrenciesBreakup": [
          {
            "alternateCurrencies": 10,
            "expiryAt": "2025-05-31"
          }
        ],
        "regularAlternateCurrenciesIssued": 0,
        "totalAlternateCurrenciesIssued": 130
      },
      {
        "alternateCurrencyName": "coins",
        "alternateCurrencyIdentifier": "gwggdg",
        "programCurrentAlternateCurrencies": 130,
        "programLifetimeAlternateCurrencies": 130,
        "promisedAlternateCurrenciesIssued": [
          {
            "promisedAlternateCurrencies": 10,
            "isExternalTriggerBased": true,
            "promisedAlternateCurrenciesConversionDate": "2024-05-17",
            "promotionIdentifier": "sdged181-7e91-4abe-86cd-sgdcee9b8ccf"
          }
        ],
        "promotionalAlternateCurrenciesIssued": [
          {
            "promotionName": "promo1",
            "promotionIdentifier": "528d181-7e91-4abe-86cd-598cee9b8ccf",
            "promotionAlternateCurrencies": 100,
            "promotionAlternateCurrenciesExpiryDate": "2025-05-31",
            "promotionType": "CUSTOMER_PROMOTION"
          },
          {
            "promotionName": "promo2",
            "promotionIdentifier": "a6cb5a7e-3d84-4f1f-87c6-5f26006f6392",
            "promotionAlternateCurrencies": 10,
            "promotionAlternateCurrenciesExpiryDate": "2025-05-31",
            "promotionType": "CUSTOMER_PROMOTION"
          }
        ],
        "regularAlternateCurrenciesBreakup": [
          {
            "alternateCurrencies": 10,
            "expiryAt": "2025-05-31"
          }
        ],
        "regularAlternateCurrenciesIssued": 0,
        "totalAlternateCurrenciesIssued": 130
      }
    ],
    "triggeringActivity": {
      "additionalAttributes": {},
      "enteredBy": {
        "id": 50672906
      },
      "entityInformation": {
        "entityId": 386959475,
        "entityType": "USER"
      },
      "identifiers": [
        {
          "key": "CustomerId",
          "value": "386959475"
        }
      ],
      "name": "TargetCompleted"
    }
  },
  "eventId": "1de73162-daf8-4c39-bc63-0af20bb4371e",
  "eventLogId": 34805034,
  "eventName": "alternateCurrenciesIssued",
  "loyaltyEventId": "1c1716568b10135aa4e59fda77935ea2014b3bfc",
  "orgId": 51182,
  "refId": "51182_1c1716568b10135aa4e59fda77935ea2014b3bfc"
}

```
```json Raw payload
{
  "eventName": "alternateCurrenciesIssued",
  "eventLogId": 8291,
  "data": {
    "customerIdentifiers": {
      "loyaltyType": "LBGQCMV",
      "ecommerce": {
        "accounts": [
          {
            "accountId": "MBIONSH",
            "identifiers": [
              {
                "identifierType": "BFMIOQ",
                "identifierValue": "LHFBX"
              }
            ]
          }
        ]
      },
      "lastName": "RLI",
      "facebook": {
        "accounts": [
          {
            "accountId": "PMVBYIM",
            "identifiers": [
              {
                "identifierType": "FJVQSGHFB",
                "identifierValue": "TYLFRQAO"
              }
            ]
          }
        ]
      },
      "wechat": {
        "accounts": [
          {
            "accountId": "GJVFGZ",
            "identifiers": [
              {
                "identifierType": "QXLPRVCK",
                "identifierValue": "YSCBXZYQSU"
              }
            ]
          }
        ]
      },
      "tmall": {
        "accounts": [
          {
            "accountId": "NUOGKHE",
            "identifiers": [
              {
                "identifierType": "SLZDJPTJM",
                "identifierValue": "TVGUTSE"
              }
            ]
          }
        ]
      },
      "toabao": {
        "accounts": [
          {
            "accountId": "NQFT",
            "identifiers": [
              {
                "identifierType": "MFAGOEZ",
                "identifierValue": "JTL"
              }
            ]
          }
        ]
      },
      "web_engage": {
        "accounts": [
          {
            "accountId": "JUJLDFN",
            "identifiers": [
              {
                "identifierType": "ROTQXGMGP",
                "identifierValue": "SJT"
              }
            ]
          }
        ]
      },
      "line": {
        "accounts": [
          {
            "accountId": "MJXAGQWZ",
            "identifiers": [
              {
                "identifierType": "TRA",
                "identifierValue": "NTDHNGBYB"
              }
            ]
          }
        ]
      },
      "martjack": {
        "accounts": [
          {
            "accountId": "IOTSCKWVLM",
            "identifiers": [
              {
                "identifierType": "NHSYXZ",
                "identifierValue": "LAENOWYKD"
              }
            ]
          }
        ]
      },
      "customerId": 1629,
      "jd": {
        "accounts": [
          {
            "accountId": "FYIUCG",
            "identifiers": [
              {
                "identifierType": "PPDNZYL",
                "identifierValue": "SMXWBERAO"
              }
            ]
          }
        ]
      },
      "website": {
        "accounts": [
          {
            "accountId": "OHLVS",
            "identifiers": [
              {
                "identifierType": "JRGR",
                "identifierValue": "FPS"
              }
            ]
          }
        ]
      },
      "firstName": "NVKA",
      "instore": {
        "id": 9950,
        "mobile": "SLDOWSVWS",
        "email": "CEGFJO",
        "externalId": "FQKH",
        "cardnumber": "KHWYGHJ",
        "cardexternalid": "CEWQQAL",
        "cardNumbers": [
          "VLMNWCJUW"
        ]
      }
    },
    "entityInformation": {
      "entityType": "LWOGWNFLJ",
      "entityId": 8441
    },
    "triggeringActivity": {
      "name": "OLRQNZGQOS",
      "identifiers": [
        {
          "key": "FBHRYX",
          "value": "EQPVX"
        }
      ],
      "enteredBy": {
        "id": 1889,
        "till": {
          "code": "HUQ",
          "name": "PVRFAEFLE"
        },
        "store": {
          "code": "CGTPPN",
          "name": "LWC",
          "externalId": "JFCVNRU",
          "externalId1": "NJJ",
          "externalId2": "PSPQHN"
        }
      },
      "entityInformation": {
        "entityType": "GJJVQVLZ",
        "entityId": 9750
      },
      "additionalAttributes": [
        {
          "key": "NPAPQPJUN",
          "value": "DHCHOFRXJ"
        }
      ]
    },
    "loyaltyProgramDetails": {
      "id": 190,
      "name": "JSGYSU",
      "isDefault": true,
      "pointsToCurrencyRatio": 2840.151822569721,
      "tiers": [
        {
          "tierNumber": 2860,
          "tierName": "PLJNZSGYSL"
        }
      ]
    },
    "loyaltyProgramId": 9477,
    "alternateCurrenciesIssuedData": [
      {
        "promotionalAlternateCurrenciesIssued": [
          {
            "promotionName": "XLCN",
            "promotionIdentifier": "MZJVD",
            "promotionType": "GYUBJNKPE",
            "promotionAlternateCurrencies": 9774.091227063747,
            "promotionAlternateCurrenciesExpiryDate": "QRFJU"
          }
        ],
        "promisedAlternateCurrenciesIssued": [
          {
            "promisedAlternateCurrencies": 1089.09046486287,
            "isExternalTriggerBased": true,
            "promisedAlternateCurrenciesConversionDate": "MAEZ",
            "promotionIdentifier": "VPFXNZMMM"
          }
        ],
        "regularAlternateCurrenciesBreakup": [
          {
            "alternateCurrencies": 3660.1241355252596,
            "expiryAt": "MLHUAULU"
          }
        ],
        "totalAlternateCurrenciesIssued": 7548.997025786435,
        "alternateCurrencyIdentifier": "SYI",
        "programCurrentAlternateCurrencies": 18.78582497632829,
        "alternateCurrencyName": "ZZU",
        "regularAlternateCurrenciesIssued": 9483.319491404278,
        "programLifetimeAlternateCurrencies": 2879.7890862957106
      }
    ]
  },
  "refId": "VRAMHZO",
  "loyaltyEventId": "UGAGDOJWD",
  "apiRequestId": "MEQC",
  "eventId": "FEGNZAEFZC",
  "createdAt": 2748,
  "traceAttributes": {
    "PQX": "GQENT",
    "LUAR": "YWSIV"
  },
  "orgId": 1056
}
```

## Issued Alternate Currency Reversed (issuedAlternateCurrenciesReversed)

Notifies when alternate currencies issued to the user are reversed. For example, issued alternate currencies for a line-item is reversed when a customer returns the item.

```json Enriched payload
{
  "data": {
    "customerIdentifiers": {
      "customerId": 386959475,
      "instore": {
        "email": "ruchi@gmail.com",
        "mobile": "917237869215"
      }
    },
    "entityInformation": {
      "entityId": 386959475,
      "entityType": "USER"
    },
    "loyaltyProgramDetails": {
      "id": 2645,
      "isDefault": true,
      "name": "Test_OrgDefaultProgram",
      "pointsToCurrencyRatio": 1,
      "tiers": [
        {
          "tierName": "Default_tier",
          "tierNumber": 1
        },
        {
          "tierName": "Silver_tier",
          "tierNumber": 2
        },
        {
          "tierName": "Gold_tier",
          "tierNumber": 2
        }
      ]
    },
    "loyaltyProgramId": 2645,
    "alternateCurrencies": [
      {
        "currentEventPromisedAlternateCurrenciesReturned": 10,
        "currentEventRegularAlternateCurrenciesReturned": 10,
        "currentEventTotalAlternateCurrenciesReturned": 130,
        "currentEventPromotionAlternateCurrenciesReturnedDetails": [
          {
            "promotionIdentifier": "528d181-7e91-4abe-86cd-598cee9b8ccf",
            "promotionAlternateCurrencies": 100,
            "promotionType": "BILL"
          },
          {
            "promotionIdentifier": "a6cb5a7e-3d84-4f1f-87c6-5f26006f6392",
            "promotionAlternateCurrencies": 10,
            "promotionType": "BILL"
          }
        ],
        "alternateCurrencyName": "stars",
        "alternateCurrencyIdentifier": "dsgagg",
        "programCurrentAlternateCurrencies": 0,
        "programLifetimeAlternateCurrencies": 0,
        "promisedAlternateCurrenciesReversed": 10,
        "promotionalAlternateCurrenciesReversed": [
          {
            "promotionIdentifier": "528d181-7e91-4abe-86cd-598cee9b8ccf",
            "promotionAlternateCurrencies": 100,
            "promotionType": "CUSTOMER_PROMOTION"
          },
          {
            "promotionIdentifier": "a6cb5a7e-3d84-4f1f-87c6-5f26006f6392",
            "promotionAlternateCurrencies": 10,
            "promotionType": "CUSTOMER_PROMOTION"
          }
        ],
        "regularAlternateCurrenciesReversed": 10,
        "totalAlternateCurrenciesReversed": 130
      },
      {
        "alternateCurrencyName": "coins",
        "alternateCurrencyIdentifier": "gwggdg",
        "programCurrentAlternateCurrencies": 0,
        "programLifetimeAlternateCurrencies": 0,
        "promisedAlternateCurrenciesReversed": 10,
        "promotionalAlternateCurrenciesReversed": [
          {
            "promotionIdentifier": "528d181-7e91-4abe-86cd-598cee9b8ccf",
            "promotionAlternateCurrencies": 100,
            "promotionType": "BILL"
          },
          {
            "promotionIdentifier": "a6cb5a7e-3d84-4f1f-87c6-5f26006f6392",
            "promotionAlternateCurrencies": 10,
            "promotionType": "BILL"
          }
        ],
        "regularAlternateCurrenciesReversed": 10,
        "totalAlternateCurrenciesReversed": 130
      }
    ],
    "triggeringActivity": {
      "additionalAttributes": {},
      "enteredBy": {
        "id": 50672906
      },
      "entityInformation": {
        "entityId": 386959475,
        "entityType": "USER"
      },
      "identifiers": [
        {
          "key": "billId",
          "value": "0"
        },
        {
          "key": "billNumber",
          "value": "454545"
        }
      ],
      "name": "ReturnBill"
    },
    "eventId": "1de73162-daf8-4c39-bc63-0af20bb4371e",
    "eventLogId": 34805034,
    "eventName": "issuedalternateCurrenciesReversed",
    "loyaltyEventId": "1c1716568b10135aa4e59fda77935ea2014b3bfc",
    "orgId": 51182,
    "refId": "51182_1c1716568b10135aa4e59fda77935ea2014b3bfc"
  }
}

```
```json Raw payload
{
  "eventName": "issuedAlternateCurrenciesReversed",
  "eventLogId": 4418,
  "data": {
    "customerIdentifiers": {
      "loyaltyType": "TLUCUYCULB",
      "ecommerce": {
        "accounts": [
          {
            "accountId": "JJWINETXCE",
            "identifiers": [
              {
                "identifierType": "IZPLSJMTKZ",
                "identifierValue": "ZKFNRZBI"
              }
            ]
          }
        ]
      },
      "lastName": "AKWWR",
      "facebook": {
        "accounts": [
          {
            "accountId": "XGLKWWY",
            "identifiers": [
              {
                "identifierType": "XBT",
                "identifierValue": "DOFZJXDAHN"
              }
            ]
          }
        ]
      },
      "wechat": {
        "accounts": [
          {
            "accountId": "ZOHRLYZCO",
            "identifiers": [
              {
                "identifierType": "NMZDLDCR",
                "identifierValue": "ERJ"
              }
            ]
          }
        ]
      },
      "tmall": {
        "accounts": [
          {
            "accountId": "TBNSCH",
            "identifiers": [
              {
                "identifierType": "JSPMHW",
                "identifierValue": "XQGJ"
              }
            ]
          }
        ]
      },
      "toabao": {
        "accounts": [
          {
            "accountId": "SDBZILITS",
            "identifiers": [
              {
                "identifierType": "CWWORZ",
                "identifierValue": "QURWDHA"
              }
            ]
          }
        ]
      },
      "web_engage": {
        "accounts": [
          {
            "accountId": "TWRSZ",
            "identifiers": [
              {
                "identifierType": "YDWVJNRCV",
                "identifierValue": "DDTMG"
              }
            ]
          }
        ]
      },
      "line": {
        "accounts": [
          {
            "accountId": "IOKXVMSNN",
            "identifiers": [
              {
                "identifierType": "AIGC",
                "identifierValue": "OWFUHBUCP"
              }
            ]
          }
        ]
      },
      "martjack": {
        "accounts": [
          {
            "accountId": "REGKABBB",
            "identifiers": [
              {
                "identifierType": "MNQIVCG",
                "identifierValue": "ALXLG"
              }
            ]
          }
        ]
      },
      "customerId": 6228,
      "jd": {
        "accounts": [
          {
            "accountId": "YCXB",
            "identifiers": [
              {
                "identifierType": "UMLE",
                "identifierValue": "XLD"
              }
            ]
          }
        ]
      },
      "website": {
        "accounts": [
          {
            "accountId": "OUUFD",
            "identifiers": [
              {
                "identifierType": "YZX",
                "identifierValue": "MPOXTCJGA"
              }
            ]
          }
        ]
      },
      "firstName": "QNJBTRT",
      "instore": {
        "id": 3493,
        "mobile": "CFEG",
        "email": "XRP",
        "externalId": "TKE",
        "cardnumber": "LKQA",
        "cardexternalid": "JGNNXXUI",
        "cardNumbers": [
          "KVUMOLCZK"
        ]
      }
    },
    "entityInformation": {
      "entityType": "SEQIBFO",
      "entityId": 3492
    },
    "triggeringActivity": {
      "name": "WIXGZJIM",
      "identifiers": [
        {
          "key": "ILCTX",
          "value": "QXHKDNNA"
        }
      ],
      "enteredBy": {
        "id": 815,
        "till": {
          "code": "SBITDUC",
          "name": "CPUKKDLCX"
        },
        "store": {
          "code": "CPOJDYGJ",
          "name": "ROHVNQSU",
          "externalId": "DWQYF",
          "externalId1": "LTJOEL",
          "externalId2": "ELRWXWSY"
        }
      },
      "entityInformation": {
        "entityType": "WKCQEDWVDC",
        "entityId": 3208
      },
      "additionalAttributes": [
        {
          "key": "YMKQBOKF",
          "value": "HRLCHTJKN"
        }
      ]
    },
    "loyaltyProgramDetails": {
      "id": 8005,
      "name": "VWBXEJT",
      "isDefault": false,
      "pointsToCurrencyRatio": 2884.2719730123813,
      "tiers": [
        {
          "tierNumber": 9074,
          "tierName": "YOU"
        }
      ]
    },
    "loyaltyProgramId": 8499,
    "alternateCurrenciesReversedData": [
      {
        "promisedAlternateCurrenciesReversed": 7911.5692197539565,
        "currentEventPromotionAlternateCurrenciesReturnedDetails": [
          {
            "promotionIdentifier": "HYOCGM",
            "promotionType": "AANZBZCVCZ",
            "promotionAlternateCurrencies": 7066.201007962547
          }
        ],
        "currentEventPromisedAlternateCurrenciesReturned": 6725.841350932126,
        "regularAlternateCurrenciesReversed": 9405.522589666109,
        "alternateCurrencyIdentifier": "RGDNLCYQ",
        "programCurrentAlternateCurrencies": 6672.43737752836,
        "currentEventTotalAlternateCurrenciesReturned": 4969.497463071811,
        "alternateCurrencyName": "YVGZNOSJKE",
        "programLifetimeAlternateCurrencies": 9742.051663792485,
        "totalIssuedAlternateCurrenciesReversed": 8731.26927826061,
        "promotionalAlternateCurrenciesReversed": [
          {
            "promotionIdentifier": "OSFJPQQTHX",
            "promotionType": "FWCMOH",
            "promotionAlternateCurrencies": 8094.371866500394
          }
        ],
        "currentEventRegularAlternateCurrenciesReturned": 6760.5047417788055
      }
    ]
  },
  "refId": "LFED",
  "loyaltyEventId": "XYTUEAQPA",
  "apiRequestId": "GVPSKCAI",
  "eventId": "XFOF",
  "createdAt": 9898,
  "traceAttributes": {
    "BAXU": "JPKKB",
    "TGVJXFUVGE": "YPA",
    "AALWJY": "TYGJO",
    "UWJ": "GJV"
  },
  "orgId": 5354
}
```

## Promised Alternate Currencies Issued Event (promisedToCurrentAlternateCurrencyConversion)

Notifies when promised alternate currencies are issued to the user.

```json Enriched payload
{
  "eventName": "promisedToCurrentAlternateCurrencyConversion",
  "eventId": "74cb223f-fefe-4703-84a7-d3a40670c086",
  "eventLogId": 35496773,
  "orgId": 51174,
  "refId": "",
  "apiRequestId": "335e474bd1382e95fc39111a869dbef1",
  "createdAt": 1740371965437,
  "data": {
    "customerIdentifiers": {
      "customerId": 387676494
    },
    "entityInformation": {
      "entityType": "USER",
      "entityId": 387676494
    },
    "earningAlternateCurrencyReference": [],
    "loyaltyProgramDetails": {
      "id": 0,
      "tiers": []
    },
    "loyaltyProgramId": 0,
    "alternateCurrencyConverted": [
      {
        "alternateCurrencyIdentifier": "yJngjy",
        "alternateCurrencyName": "#ac2_PROMISED",
        "alternateCurrencyValue": "200.000"
      },
      {
        "alternateCurrencyIdentifier": "lfHckz",
        "alternateCurrencyName": "SBI_PROMISED",
        "alternateCurrencyValue": "200.000"
      }
    ],
    "alternateCurrencyConversionSource": "externalTrigger",
    "alternateCurrencyConvertedBreakup": [
      {
        "alternateCurrencyEntityDetails": {
          "alternateCurrencyIdentifier": "yJngjy",
          "alternateCurrencyName": "#ac2_PROMISED",
          "alternateCurrencyValue": "200.000",
          "billNumber": "2152008945",
          "itemCode": "0"
        },
        "promotionalAlternateCurrencyBreakup": [
          {
            "alternateCurrencyIdentifier": "yJngjy",
            "alternateCurrencyName": "#ac2_PROMISED",
            "alternateCurrencyValue": "200.000",
            "programId": 2607,
            "promotionId": 1133576797,
            "promotionName": "UnlockACandNormalPoints"
          }
        ],
        "nonPromotionalAlternateCurrencyBreakup": []
      },
      {
        "alternateCurrencyEntityDetails": {
          "alternateCurrencyIdentifier": "lfHckz",
          "alternateCurrencyName": "SBI_PROMISED",
          "alternateCurrencyValue": "200.000",
          "billNumber": "2152008945",
          "itemCode": "0"
        },
        "promotionalAlternateCurrencyBreakup": [
          {
            "alternateCurrencyIdentifier": "lfHckz",
            "alternateCurrencyName": "SBI_PROMISED",
            "alternateCurrencyValue": "100.000",
            "programId": 2607,
            "promotionId": 1133576797,
            "promotionName": "UnlockACandNormalPoints"
          }
        ],
        "nonPromotionalAlternateCurrencyBreakup": [
          {
            "alternateCurrencyIdentifier": "lfHckz",
            "alternateCurrencyName": "SBI_PROMISED",
            "alternateCurrencyValue": "100.000",
            "programId": 2607
          }
        ]
      }
    ]
  },
  "loyaltyEventId": ""
}
```
```json Raw payload
{
  "eventName": "promisedToCurrentAlternateCurrencyConversion",
  "eventLogId": 20,
  "data": {
    "billId": 3991,
    "loyaltyProgramDetails": {
      "id": 3832,
      "name": "DRYHUYR",
      "isDefault": true,
      "pointsToCurrencyRatio": 7460.081383912821,
      "tiers": [
        {
          "tierNumber": 7145,
          "tierName": "ZJBFSG"
        }
      ]
    },
    "eventLogId": 7911,
    "alternateCurrencyConverted": [
      {
        "alternateCurrencyIdentifier": "TWSOHZNFYI",
        "alternateCurrencyName": "BCLS",
        "alternateCurrencyValue": "ADNDXHJ"
      }
    ],
    "entityInformation": {
      "entityType": "UBQXEPG",
      "entityId": 9656
    },
    "earningAlternateCurrencyReference": [
      {
        "name": "KDUPJAQJPA",
        "enteredAt": 120.78207531777778,
        "alternateCurrencyConverted": 9104.314739589945,
        "alternateCurrencyIdentifier": "BWYMVJQIG",
        "alternateCurrencyName": "JILBAKENAQ",
        "identifiers": [
          {
            "key": "FBSAKQAKS",
            "value": "XDJ"
          }
        ]
      }
    ],
    "customerIdentifiers": {
      "loyaltyType": "FUT",
      "ecommerce": {
        "accounts": [
          {
            "accountId": "KNGVKBOT",
            "identifiers": [
              {
                "identifierType": "AXVIU",
                "identifierValue": "JWXKQ"
              }
            ]
          }
        ]
      },
      "lastName": "UNFJMUAX",
      "facebook": {
        "accounts": [
          {
            "accountId": "MABPT",
            "identifiers": [
              {
                "identifierType": "PTWDKBAJV",
                "identifierValue": "HUVKPKPX"
              }
            ]
          }
        ]
      },
      "wechat": {
        "accounts": [
          {
            "accountId": "NTJKKXGY",
            "identifiers": [
              {
                "identifierType": "LINX",
                "identifierValue": "ZYICZPFWC"
              }
            ]
          }
        ]
      },
      "tmall": {
        "accounts": [
          {
            "accountId": "RYPALI",
            "identifiers": [
              {
                "identifierType": "LJLYRELG",
                "identifierValue": "QBPIMO"
              }
            ]
          }
        ]
      },
      "toabao": {
        "accounts": [
          {
            "accountId": "WMLRZCXF",
            "identifiers": [
              {
                "identifierType": "KFRMSGB",
                "identifierValue": "BMDUZBJW"
              }
            ]
          }
        ]
      },
      "web_engage": {
        "accounts": [
          {
            "accountId": "OZTPZIR",
            "identifiers": [
              {
                "identifierType": "MYYY",
                "identifierValue": "ZEOI"
              }
            ]
          }
        ]
      },
      "line": {
        "accounts": [
          {
            "accountId": "COSCV",
            "identifiers": [
              {
                "identifierType": "JAMCFYVVDT",
                "identifierValue": "ZMQSD"
              }
            ]
          }
        ]
      },
      "martjack": {
        "accounts": [
          {
            "accountId": "OUDL",
            "identifiers": [
              {
                "identifierType": "QANYFG",
                "identifierValue": "LRFI"
              }
            ]
          }
        ]
      },
      "customerId": 8727,
      "jd": {
        "accounts": [
          {
            "accountId": "MVHPLDNBC",
            "identifiers": [
              {
                "identifierType": "HJC",
                "identifierValue": "PPBVXAAWU"
              }
            ]
          }
        ]
      },
      "website": {
        "accounts": [
          {
            "accountId": "NWNPWDKD",
            "identifiers": [
              {
                "identifierType": "WHREDTWTP",
                "identifierValue": "ULIEPEERJ"
              }
            ]
          }
        ]
      },
      "firstName": "FYBZ",
      "instore": {
        "id": 970,
        "mobile": "RMKFBOSRI",
        "email": "RSWTLW",
        "externalId": "LRK",
        "cardnumber": "THUQPBYZG",
        "cardexternalid": "ECNO",
        "cardNumbers": [
          "JJPBSTP"
        ]
      }
    },
    "alternateCurrencyConvertedBreakup": [
      {
        "entityName": "HCGE",
        "alternateCurrencyEntityDetails": {
          "alternateCurrencyIdentifier": "EOMPXCORU",
          "alternateCurrencyName": "BXOL",
          "alternateCurrencyValue": "LMMOG",
          "id": 1771,
          "billNumber": "WGABQ",
          "itemCode": "BEPTCZXPY",
          "billDate": "SSAI"
        },
        "promotionalAlternateCurrencyBreakup": [
          {
            "alternateCurrencyIdentifier": "ISBZWMT",
            "alternateCurrencyName": "JIWAY",
            "alternateCurrencyValue": "OAFVLVJGW",
            "programId": 3254,
            "promotionId": 6056,
            "promotionName": "VLPQSLRXYW",
            "promotionDetails": [
              {
                "issueRestrictions": [],
                "linkedTargetGroupVsTargetRuleIdMap": {},
                "promotionEndDate": "VCDPFYWF",
                "customFields": [],
                "promotionIdentifier": "MPJMNVI",
                "promotionStartDate": "JDRKQ",
                "promotionName": "QLSSYLIFU",
                "redemptionRestrictions": [],
                "pointsOfferType": "MSI",
                "promotionDescription": "AWZJDBRGE",
                "promotionType": "NHVV",
                "promotionId": 12,
                "earnRestrictions": [],
                "programId": 2720
              }
            ]
          }
        ],
        "nonPromotionalAlternateCurrencyBreakup": [
          {
            "alternateCurrencyIdentifier": "GBWWKDNIVN",
            "alternateCurrencyName": "QGVAERKSXL",
            "alternateCurrencyValue": "DLDVHWRB",
            "programId": 8280
          }
        ]
      }
    ],
    "eventDateTime": "POGLNC",
    "triggeringActivity": {
      "name": "GJK",
      "identifiers": [
        {
          "key": "ZSUK",
          "value": "CWAZKS"
        }
      ],
      "enteredBy": {
        "id": 2732,
        "till": {
          "code": "VYWSPSDJ",
          "name": "SZG"
        },
        "store": {
          "code": "WROQW",
          "name": "NHTUQHZDQ",
          "externalId": "VHKUPNBGHJ",
          "externalId1": "GFXOPF",
          "externalId2": "PVGUEFTK"
        }
      },
      "entityInformation": {
        "entityType": "QWOQL",
        "entityId": 5706
      },
      "additionalAttributes": [
        {
          "key": "OHO",
          "value": "SMVPKW"
        }
      ]
    },
    "loyaltyProgramId": 6662,
    "alternateCurrencyConversionSource": "DHWNBCJCC"
  },
  "refId": "OPV",
  "loyaltyEventId": "IEGWOQSL",
  "apiRequestId": "CHQNOBC",
  "eventId": "UQCFJH",
  "createdAt": 2065,
  "traceAttributes": {
    "TJKPZFGJO": "LUOEIJEY",
    "IYFXJB": "NYDTOJKPG",
    "FPZOVNRPPR": "UEKJFAK"
  },
  "orgId": 6500
}
```

***

# Loyalty customer

## Loyalty Customer Merge Event (loyaltyCustomerMerge)

Notifies the merging of loyalty users.

```json Enriched payload
{
  "eventName": "loyaltyCustomerMerge",
  "data": {
    "survivorCustomerIdentifiers": {
      "customerId": 163879182
    },
    "victimCustomerIdentifiers": {
      "customerId": 163879181
    },
    "triggeringActivity": {
      "name": "customerMerge",
      "identifiers": [
        
      ],
      "additionalAttributes": [
        
      ]
    },
    "enteredBy": {
      "id": -1
    },
    "survivorCustomerLoyaltySummary": [
      {
        "loyaltyProgramId": 18,
        "lifetimePoints": 200.0,
        "currentPoints": 200.0,
        "promisedPoints": 0.0,
        "tierNumber": 3
      }
    ]
  },
  "orgId": 150014,
  "refId": "150014_13960169",
  "apiRequestId": "13960169",
  "createdAt": 1683871320301
}

```
```json Raw payload
{
  "eventName": "loyaltyCustomerMerge",
  "eventLogId": 859,
  "data": {
    "survivorCustomerIdentifiers": {
      "loyaltyType": "ZECHPM",
      "ecommerce": {
        "accounts": [
          {
            "accountId": "ZIA",
            "identifiers": [
              {
                "identifierType": "VTAZUC",
                "identifierValue": "CHTG"
              }
            ]
          }
        ]
      },
      "lastName": "DSGNRWKW",
      "facebook": {
        "accounts": [
          {
            "accountId": "NBYUU",
            "identifiers": [
              {
                "identifierType": "MUWG",
                "identifierValue": "ZYH"
              }
            ]
          }
        ]
      },
      "wechat": {
        "accounts": [
          {
            "accountId": "LHXICV",
            "identifiers": [
              {
                "identifierType": "NAZLE",
                "identifierValue": "ZLUO"
              }
            ]
          }
        ]
      },
      "tmall": {
        "accounts": [
          {
            "accountId": "JEQDAYD",
            "identifiers": [
              {
                "identifierType": "QFBRBXP",
                "identifierValue": "LBXJQVG"
              }
            ]
          }
        ]
      },
      "toabao": {
        "accounts": [
          {
            "accountId": "RAOC",
            "identifiers": [
              {
                "identifierType": "WLGNYUBLZ",
                "identifierValue": "PGE"
              }
            ]
          }
        ]
      },
      "web_engage": {
        "accounts": [
          {
            "accountId": "BSMUTO",
            "identifiers": [
              {
                "identifierType": "GHGCPYUPR",
                "identifierValue": "SYLIPRDZ"
              }
            ]
          }
        ]
      },
      "line": {
        "accounts": [
          {
            "accountId": "TJSFCQWMI",
            "identifiers": [
              {
                "identifierType": "MPGVHSOB",
                "identifierValue": "ZFWJELDJBB"
              }
            ]
          }
        ]
      },
      "martjack": {
        "accounts": [
          {
            "accountId": "ASSLSGD",
            "identifiers": [
              {
                "identifierType": "VXTCSPEJE",
                "identifierValue": "ZOU"
              }
            ]
          }
        ]
      },
      "customerId": 9858,
      "jd": {
        "accounts": [
          {
            "accountId": "TWQE",
            "identifiers": [
              {
                "identifierType": "FFL",
                "identifierValue": "UWWQVCNBZZ"
              }
            ]
          }
        ]
      },
      "website": {
        "accounts": [
          {
            "accountId": "EIDCDYNSV",
            "identifiers": [
              {
                "identifierType": "CTVI",
                "identifierValue": "HLOBHRGGEW"
              }
            ]
          }
        ]
      },
      "firstName": "VCAYFUSQW",
      "instore": {
        "id": 2243,
        "mobile": "RAAB",
        "email": "UAXWQQLFU",
        "externalId": "OTIPAUGE",
        "cardnumber": "QVFP",
        "cardexternalid": "RPROA",
        "cardNumbers": [
          "PEOFLJ"
        ]
      }
    },
    "victimCustomerIdentifiers": {
      "loyaltyType": "YGIGKM",
      "ecommerce": {
        "accounts": [
          {
            "accountId": "QXQIIQSLV",
            "identifiers": [
              {
                "identifierType": "JZA",
                "identifierValue": "SNSFDE"
              }
            ]
          }
        ]
      },
      "lastName": "VRUIPTM",
      "facebook": {
        "accounts": [
          {
            "accountId": "IJJTSUPDLY",
            "identifiers": [
              {
                "identifierType": "KFQMUEZT",
                "identifierValue": "HVXUITPN"
              }
            ]
          }
        ]
      },
      "wechat": {
        "accounts": [
          {
            "accountId": "GRN",
            "identifiers": [
              {
                "identifierType": "YLGMLFYUG",
                "identifierValue": "ZZQP"
              }
            ]
          }
        ]
      },
      "tmall": {
        "accounts": [
          {
            "accountId": "RHMDG",
            "identifiers": [
              {
                "identifierType": "YNIWHLJBDK",
                "identifierValue": "ESOZBHVJT"
              }
            ]
          }
        ]
      },
      "toabao": {
        "accounts": [
          {
            "accountId": "ZWPXGQR",
            "identifiers": [
              {
                "identifierType": "OGJ",
                "identifierValue": "MUKJ"
              }
            ]
          }
        ]
      },
      "web_engage": {
        "accounts": [
          {
            "accountId": "IJLJRD",
            "identifiers": [
              {
                "identifierType": "ETAKTLSIRM",
                "identifierValue": "QOXYDTNBZ"
              }
            ]
          }
        ]
      },
      "line": {
        "accounts": [
          {
            "accountId": "XVB",
            "identifiers": [
              {
                "identifierType": "APOJC",
                "identifierValue": "OUYD"
              }
            ]
          }
        ]
      },
      "martjack": {
        "accounts": [
          {
            "accountId": "KEISNWY",
            "identifiers": [
              {
                "identifierType": "AVURBZ",
                "identifierValue": "HPXLNLMVJV"
              }
            ]
          }
        ]
      },
      "customerId": 4208,
      "jd": {
        "accounts": [
          {
            "accountId": "NRWOZF",
            "identifiers": [
              {
                "identifierType": "NTXPMJYK",
                "identifierValue": "XRPANTWVT"
              }
            ]
          }
        ]
      },
      "website": {
        "accounts": [
          {
            "accountId": "JXFJCV",
            "identifiers": [
              {
                "identifierType": "BOB",
                "identifierValue": "LBKYKN"
              }
            ]
          }
        ]
      },
      "firstName": "MRRDLRTVF",
      "instore": {
        "id": 2557,
        "mobile": "NWJRLECZKR",
        "email": "PUNEFKIROT",
        "externalId": "XURSRHYST",
        "cardnumber": "RHNQ",
        "cardexternalid": "VTCXZKNKJ",
        "cardNumbers": [
          "TRTZOGDRG"
        ]
      }
    },
    "triggeringActivity": {
      "name": "ZZHFJPACLO",
      "identifiers": [
        {
          "key": "VAR",
          "value": "ZTJLQ"
        }
      ],
      "enteredBy": {
        "id": 256,
        "till": {
          "code": "DFDLD",
          "name": "QFFLZKKIKM"
        },
        "store": {
          "code": "YVLITSNHE",
          "name": "LJPCOKL",
          "externalId": "RLOOZEGZ",
          "externalId1": "GENTPPIJ",
          "externalId2": "LIKQRKVH"
        }
      },
      "entityInformation": {
        "entityType": "VHFZY",
        "entityId": 5992
      },
      "additionalAttributes": [
        {
          "key": "YQB",
          "value": "KEBMTN"
        }
      ]
    },
    "loyaltyProgramDetails": {
      "id": 8806,
      "name": "DFUTTT",
      "isDefault": true,
      "pointsToCurrencyRatio": 9775.035898889866,
      "tiers": [
        {
          "tierNumber": 5998,
          "tierName": "EGDMA"
        }
      ]
    },
    "enteredBy": {
      "id": 6005,
      "till": {
        "code": "YAH",
        "name": "HIBXDKPFG"
      },
      "store": {
        "code": "ZUUASYYNNR",
        "name": "ZHFBEUM",
        "externalId": "GPHUFP",
        "externalId1": "QHH",
        "externalId2": "XZDBFR"
      }
    },
    "survivorCustomerLoyaltySummary": [
      {
        "loyaltyProgramId": 8919,
        "lifetimePoints": 5477.226059009397,
        "currentPoints": 4837.364829724718,
        "promisedPoints": 7661.02790613185,
        "tierNumber": 6906
      }
    ]
  },
  "refId": "ZWNONVCNS",
  "loyaltyEventId": "GPJBBUR",
  "apiRequestId": "NPEA",
  "eventId": "USYH",
  "createdAt": 7255,
  "traceAttributes": {
    "MHMA": "CXOZGFKF",
    "JVECMA": "JVSLDTU"
  },
  "orgId": 2212
}
```
