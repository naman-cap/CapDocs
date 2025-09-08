---
title: Incentives
deprecated: false
hidden: false
metadata:
  robots: index
---
# Rewards

Rewards are incentives offered to customers as part of a loyalty program to encourage engagement and repeat business. Rewards can include, merchandise, gift cards, coupons, cart promotions, points, and badges.

## Reward Created Event (rewardCreated)

Notifes when a reward has been created.

```json Enriched payload
{
        "eventName": "rewardCreated",
        "data": {
            "rewardId": 3577,
            "type": "RWJZRCHR",
            "enabled": true,
            "redemptionType": "DONVGEYVJ",
            "startDate": 2282,
            "endDate": 8892,
            "intouchPoints": 2878,
            "intouchSeriesId": "EKUWHLF",
            "priority": 1255,
            "tier": "MTFNKDMD",
            "group": "YXDO",
            "label": "NYHT",
            "programId": 5312,
            "categories": [
                494
            ],
            "geographies": [
                {
                    "countryId": 3963,
                    "cityId": 865,
                    "areaId": 9090
                }
            ],
            "rewardDetails": [
                {
                    "languageCode": "MIFATOGHF",
                    "name": "AMOAFMKNN",
                    "description": "IYUC",
                    "termAndConditionsId": "XDDSRQT",
                    "termAndConditionsUrl": "ETRRGCUDA",
                    "imageId": "WNWGYYALI",
                    "imageUrl": "ICSXRWQR",
                    "thumbnailId": "RZOANKQN",
                    "thumbnailUrl": "KSUJFRSOM",
                    "images": [
                        {
                            "name": "QFQSSEUNN",
                            "id": "KUPNA",
                            "url": "NYISMVQAKY"
                        }
                    ],
                    "videos": [
                        {
                            "name": "POXEPXZZH",
                            "id": "DAHGZZYZK",
                            "url": "UZFY",
                            "isExternal": true
                        }
                    ]
                }
            ],
            "vendorDetails": {
                "id": 4596,
                "name": "VLUDFK"
            },
            "vendorRedemptionDetails": {
                "id": 6257,
                "name": "KAV"
            }
        },
        "eventId": "KHANVC",
        "orgId": 4183,
        "refId": "EAO",
        "apiRequestId": "OHB",
        "createdAt": 4109,
        "loyaltyEventId": "BSWJ",
        "traceAttributes": {
            "TCP": "EVUUCGREU",
            "UQZDTDB": "LHFOS",
            "LITXMR": "XJYGUSFS",
            "XVECI": "ZMMFUDDDUU"
        }
    }
```
```json Raw payload
{
  "eventName": "rewardCreated",
  "eventLogId": 2542,
  "data": {
    "enabled": false,
    "tier": "PFDMP",
    "priority": 8002,
    "redemptionType": "BWFXISFM",
    "endDate": 4679,
    "rewardId": 2776,
    "intouchSeriesId": "QXLRINJI",
    "vendorRedemptionDetails": {
      "id": 6888,
      "name": "KUGIWBGABW"
    },
    "startDate": 8302,
    "rewardDetails": [
      {
        "thumbnailUrl": "EPIMCHK",
        "languageCode": "OBLJ",
        "thumbnailId": "WJLLI",
        "name": "PTQABLUM",
        "termAndConditionsUrl": "XYWQP",
        "imageUrl": "PBP",
        "imageId": "DWFD",
        "images": [
          {
            "name": "ZIDUF",
            "id": "EQSMOJZBB",
            "url": "AKYX",
            "isExternal": false,
            "altText": "QXHDKIZVSB"
          }
        ],
        "videos": [
          {
            "name": "NGZKA",
            "id": "ARDVNOC",
            "url": "BAWTUT",
            "isExternal": true,
            "altText": "AONTI"
          }
        ],
        "description": "AQZFOMGRPL",
        "termAndConditionsId": "EFTBZHIFJF"
      }
    ],
    "label": "GSLV",
    "geographies": [
      {
        "countryId": 404,
        "cityId": 2168,
        "areaId": 6663
      }
    ],
    "type": "CKD",
    "vendorDetails": {
      "id": 2490,
      "name": "TELEO"
    },
    "categories": [
      4657
    ],
    "intouchPoints": 3803,
    "group": "SFAZVV",
    "programId": 2159
  },
  "refId": "GNGB",
  "loyaltyEventId": "DXXATI",
  "apiRequestId": "ILDQ",
  "eventId": "KGRTTUZKZV",
  "createdAt": 9415,
  "traceAttributes": {
    "UUZO": "RDKQKK",
    "UHTQ": "BQPZXDCZKS",
    "TJJC": "XYUKLB"
  },
  "orgId": 5727
}
```

## Reward Issued Event (rewardIssued)

Notifies when a reward is issued.

| Parameter           | Data Type | Description                                                          |
| ------------------- | --------- | -------------------------------------------------------------------- |
| eventName           | String    | Name of the event.                                                   |
| data                | Object    | Contains detailed information about the reward issuance.             |
| customerIdentifiers | Object    | Identifiers for the customer associated with the reward.             |
| customerId          | Long      | Unique customer ID.                                                  |
| instore             | Object    | Details about the customer's in-store information.                   |
| mobile              | String    | Customer's mobile number.                                            |
| email               | String    | Customer's email address.                                            |
| externalId          | String    | External identifier for the customer.                                |
| cardNumbers         | Array     | List of associated card numbers.                                     |
| rewardId            | Long      | Unique identifier for the reward.                                    |
| type                | String    | The type of reward.                                                  |
| redemptionType      | String    | Specifies the redemption type.                                       |
| startDate           | Long      | Start date of the reward in milliseconds in epoch format.            |
| endDate             | Long      | End date of the reward in milliseconds in epoch format.              |
| intouchPoints       | Integer   | Points allocated for the reward.                                     |
| priority            | Integer   | Priority level of the reward.                                        |
| group               | String    | The group associated with the reward.                                |
| label               | String    | The label associated with the reward.                                |
| transactionId       | String    | Identifier for the transaction related to the reward issuance.       |
| vendorRewardDetails | Object    | Details specific to vendor-related rewards.                          |
| vendorVoucher       | String    | Unique identifier for the vendor voucher.                            |
| orgId               | Integer   | Organization ID issuing the reward.                                  |
| refId               | String    | Reference ID combining orgId and rewardId.                           |
| apiRequestId        | String    | Unique identifier for the API request.                               |
| createdAt           | Long      | Timestamp of when the event was created in milliseconds since epoch. |
| traceAttributes     | Object    | Metadata for tracing and debugging purposes.                         |
| requestId           | String    | Request ID associated with the API call.                             |

```json Enriched payload
{
  "eventName" : "rewardIssued",
  "data" : {
    "customerIdentifiers" : {
      "customerId" : 84793759919,
      "instore" : {
        "mobile" : "84793759919",
        "email" : "email@gmail.com",
        "externalId" : "847937599191",
        "cardNumbers" :  
      }
    },
    "rewardId" : 1,
    "type" : "POINTS",
    "redemptionType" : "VENDOR_ONLY_REWARD",
    "startDate" : 1735839125000,
    "endDate" : 1767292200000,
    "intouchPoints" : 10,
    "priority" : 1,
    "group" : "Group",
    "label" : "Label",
    "transactionId" : "1",
    "vendorRewardDetails" : {
      "vendorVoucher" : "6a690ff9-0bcf-4b95-9fd4-516eadcd98de"
    }
  },
  "orgId" : 123,
  "refId" : "123_1",
  "apiRequestId" : "1e802a0a-4a06-4e91-98fe-33c128b92bbb",
  "createdAt" : 1735839142990,
  "traceAttributes" : {
    "X-CAP-API-AUTH-ORG-ID" : "123",
    "x-cap-lineage-id" : "trace-id",
    "x-cap-lineage-start" : "2025-01-02T17:32:21.843934Z",
    "requestId" : "1e802a0a-4a06-4e91-98fe-33c128b92bbb"
  }
}
```
```json Raw payload
{
  "eventName": "rewardIssued",
  "eventLogId": 9938,
  "data": {
    "tier": "ZHXPHWMSGX",
    "priority": 9610,
    "redemptionType": "UHBWNPGXQE",
    "endDate": 5860,
    "rewardId": 7949,
    "vendorRewardDetails": {
      "vendorVoucher": "FJLL"
    },
    "intouchSeriesId": "RRCOGFNJMH",
    "customerIdentifiers": {
      "loyaltyType": "ERTXIKY",
      "ecommerce": {
        "accounts": [
          {
            "accountId": "IYZADALW",
            "identifiers": [
              {
                "identifierType": "RINOFVRIKT",
                "identifierValue": "WUU"
              }
            ]
          }
        ]
      },
      "lastName": "RMD",
      "facebook": {
        "accounts": [
          {
            "accountId": "ITHSE",
            "identifiers": [
              {
                "identifierType": "ZJOMQD",
                "identifierValue": "UIUYVJYHIY"
              }
            ]
          }
        ]
      },
      "wechat": {
        "accounts": [
          {
            "accountId": "HYBO",
            "identifiers": [
              {
                "identifierType": "KRKUTUV",
                "identifierValue": "ZPOWDFNRTR"
              }
            ]
          }
        ]
      },
      "tmall": {
        "accounts": [
          {
            "accountId": "OGMUFVOD",
            "identifiers": [
              {
                "identifierType": "GAN",
                "identifierValue": "MTHLHQJ"
              }
            ]
          }
        ]
      },
      "toabao": {
        "accounts": [
          {
            "accountId": "DVRFYCFO",
            "identifiers": [
              {
                "identifierType": "RAMJESQ",
                "identifierValue": "SFKAEQU"
              }
            ]
          }
        ]
      },
      "web_engage": {
        "accounts": [
          {
            "accountId": "ZBEZ",
            "identifiers": [
              {
                "identifierType": "PSLFQZXV",
                "identifierValue": "OEEZ"
              }
            ]
          }
        ]
      },
      "line": {
        "accounts": [
          {
            "accountId": "SZEAIWIVRQ",
            "identifiers": [
              {
                "identifierType": "AVVOYFZYFD",
                "identifierValue": "GNY"
              }
            ]
          }
        ]
      },
      "martjack": {
        "accounts": [
          {
            "accountId": "XYVKAWRRW",
            "identifiers": [
              {
                "identifierType": "CGM",
                "identifierValue": "YGE"
              }
            ]
          }
        ]
      },
      "customerId": 7479,
      "jd": {
        "accounts": [
          {
            "accountId": "QAOCTCAA",
            "identifiers": [
              {
                "identifierType": "DBNTVWBE",
                "identifierValue": "OPP"
              }
            ]
          }
        ]
      },
      "website": {
        "accounts": [
          {
            "accountId": "DWMYPDKD",
            "identifiers": [
              {
                "identifierType": "PFTIOPKYP",
                "identifierValue": "TOPOVUVALG"
              }
            ]
          }
        ]
      },
      "firstName": "GCASQO",
      "instore": {
        "id": 212,
        "mobile": "NZQRG",
        "email": "WQYZ",
        "externalId": "BWGRTI",
        "cardnumber": "VCC",
        "cardexternalid": "KEGSKVLC",
        "cardNumbers": [
          "UGBMW"
        ]
      }
    },
    "startDate": 3363,
    "label": "FWMR",
    "issueDateTime": 592,
    "eventDateTime": 3745,
    "transactionId": "WQLMSQVH",
    "intouchRewardDetails": {
      "intouchCouponCode": "RUHS",
      "codeExpiry": 5152
    },
    "type": "RLK",
    "intouchPoints": 7998,
    "group": "IVJCORXF"
  },
  "refId": "API",
  "loyaltyEventId": "CGQM",
  "apiRequestId": "YRRKIZY",
  "eventId": "EFPWAAHO",
  "createdAt": 6272,
  "traceAttributes": {
    "DFSWRRJ": "SLLCMEVW",
    "PCXJJAMJG": "UBH",
    "OJMMTIR": "KKPB",
    "MHG": "PKNKQ"
  },
  "orgId": 8076
}
```

## Reward Updated Event (rewardUpdated)

Notifies when a reward configuration in the loyalty program has been updated. This could involve changes such as enabling/disabling the reward, altering redemption types, adjusting start/end dates, or modifying associated tiers, geographies, and reward details.

```json Raw payload
{
    "data": {
        "eventName": "rewardUpdated",
        "data": {
            "rewardId": 6893,
            "type": "CAEXWJPEZO",
            "enabled": false,
            "redemptionType": "EPZUOSGR",
            "startDate": 7623,
            "endDate": 6189,
            "intouchPoints": 1407,
            "intouchSeriesId": "BFXJSU",
            "priority": 7763,
            "tier": "DOI",
            "group": "ZHVOHXO",
            "label": "ZQTXLRXXU",
            "programId": 3734,
            "categories": [
                2456
            ],
            "geographies": [
                {
                    "countryId": 7234,
                    "cityId": 4408,
                    "areaId": 503
                }
            ],
            "rewardDetails": [
                {
                    "languageCode": "QTHHY",
                    "name": "NWXPK",
                    "description": "CMZPFGPESU",
                    "termAndConditionsId": "ARC",
                    "termAndConditionsUrl": "QZJWUUL",
                    "imageId": "LQEIVE",
                    "imageUrl": "PYQZTLP",
                    "thumbnailId": "JOPOSPIDT",
                    "thumbnailUrl": "XMUGUEQ",
                    "images": [
                        {
                            "name": "OXCXRABXPY",
                            "id": "SSL",
                            "url": "BWRMREX"
                        }
                    ],
                    "videos": [
                        {
                            "name": "RNKU",
                            "id": "MLKG",
                            "url": "JIFFPTTJ",
                            "isExternal": true
                        }
                    ]
                }
            ],
            "vendorDetails": {
                "id": 90,
                "name": "VLHNBHSS"
            },
            "vendorRedemptionDetails": {
                "id": 2831,
                "name": "JSPAKSOT"
            }
        },
        "eventId": "JRNOEHQOO",
        "orgId": 6221,
        "refId": "HWEWC",
        "apiRequestId": "IQWOE",
        "createdAt": 1245,
        "loyaltyEventId": "IRF",
        "traceAttributes": {
            "TRQWWW": "LOOQUXB",
            "OSCLIPDZMD": "BMBTFP",
            "WIWJX": "UKFSJCFV"
        }
    },
    "errors": null,
    "warnings": null
}
```

## Issue Reward Failure Event (issueRewardFailure)

Notifies when a reward issue fails.

| Parameter           | Data Type | Description                                                                                                                                                                                           |
| ------------------- | --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| eventId             | String    | Used by the consumer of the event notification for idempotency check, i.e., to check if the event is duplicate or unique before saving the event. If duplicate, the consumer should ignore the event. |
| eventType           | String    | Type of the event.                                                                                                                                                                                    |
| consumerGroupId     | String    | ID of the consumer group.                                                                                                                                                                             |
| actionType          | String    | Action type associated with the event.                                                                                                                                                                |
| timeStamp           | Long      | Timestamp when the event occurred.                                                                                                                                                                    |
| attributes          | Object    | Additional attributes related to the event.                                                                                                                                                           |
| createdAt           | Long      | Timestamp of when the attributes were created.                                                                                                                                                        |
| data                | Object    | Contains detailed information about the failure event.                                                                                                                                                |
| customerIdentifiers | Object    | Identifiers for the customer.                                                                                                                                                                         |
| customerId          | Integer   | Unique ID for the customer.                                                                                                                                                                           |
| instore             | Object    | Instore information for the customer.                                                                                                                                                                 |
| mobile              | String    | Customer's mobile number.                                                                                                                                                                             |
| email               | String    | Customer's email address.                                                                                                                                                                             |
| externalId          | String    | External identifier for the customer.                                                                                                                                                                 |
| requestId           | String    | Unique identifier for the request.                                                                                                                                                                    |
| totalPoints         | Integer   | Total points involved in the reward transaction.                                                                                                                                                      |
| erroredSteps        | Array     | List of steps where errors occurred.                                                                                                                                                                  |
| name                | String    | Name of the errored step.                                                                                                                                                                             |
| errorMessage        | String    | Error message associated with the step.                                                                                                                                                               |
| errorCode           | Integer   | Error code for the issue.                                                                                                                                                                             |
| rewards             | Array     | List of rewards affected by the error.                                                                                                                                                                |
| id                  | Integer   | Reward ID.                                                                                                                                                                                            |
| qty                 | Integer   | Quantity of the reward.                                                                                                                                                                               |
| points              | Integer   | Points associated with the reward.                                                                                                                                                                    |
| type                | String    | Type of reward.                                                                                                                                                                                       |
| rewardReference     | String    | Reference identifier for the reward.                                                                                                                                                                  |
| transactionId       | String    | Identifier for the associated transaction.                                                                                                                                                            |
| eventName           | String    | Name of the event.                                                                                                                                                                                    |
| refId               | String    | Reference ID combining orgId and requestId.                                                                                                                                                           |
| apiRequestId        | String    | Unique identifier for the API request.                                                                                                                                                                |
| orgId               | Integer   | Organization ID associated with the event.                                                                                                                                                            |

```json Enriched payload
{
  "eventId": "a85bbecd-ac92-4893-8dda-a67c0433100c",
  "eventType": "issueRewardFailure",
  "consumerGroupId": null,
  "actionT ype": "START",
  "timeStamp": 1683874809673,
  "attributes": {
    "createdAt": 1683874809656,
    "data": {
      "customerIdentifiers": {
        "customerId": 4299480,
        "instore": {
          "mobile": "6590116229",
          "email": "grace.simlh@gmail.com",
          "externalId": "8099792344"
        }
      },
      "requestId": "0a3731f3-e8ce-4ad4-a331-4b44d44193fe",
      "totalPoints": 10,
      "erroredSteps": [
        {
          "name": "ISSUE_REWARD",
          "errorMessage": "Unknown error : MAX_COUPON_ISSUAL_PER_USER_EXCEEDED",
          "errorCode": 730,
          "rewards": [
            {
              "id": 57141,
              "qty": 1,
              "points": 10,
              "type": "VOUCHER",
              "rewardReference": "736",
              "transactionId":12344
            }
          ]
        }
      ]
    },
    "eventName": "issueRewardFailure",
    "refId": "151197_0a3731f3-e8ce-4ad4-a331-4b44d44193fe",
    "apiRequestId": "0a3731f3-e8ce-4ad4-a331-4b44d44193fe",
    "orgId": 151197
  }
}
```
```json Raw payload
{
  "eventName": "issueRewardFailure",
  "eventLogId": 6313,
  "data": {
    "customerIdentifiers": {
      "loyaltyType": "HSWMFHWCY",
      "ecommerce": {
        "accounts": [
          {
            "accountId": "LZREFICSD",
            "identifiers": [
              {
                "identifierType": "BCVLTDLYPJ",
                "identifierValue": "TWTZJMS"
              }
            ]
          }
        ]
      },
      "lastName": "JLYXQXY",
      "facebook": {
        "accounts": [
          {
            "accountId": "LTX",
            "identifiers": [
              {
                "identifierType": "HKVZW",
                "identifierValue": "AUKZCJ"
              }
            ]
          }
        ]
      },
      "wechat": {
        "accounts": [
          {
            "accountId": "RSNKQX",
            "identifiers": [
              {
                "identifierType": "NGGBB",
                "identifierValue": "CCCDCALNIG"
              }
            ]
          }
        ]
      },
      "tmall": {
        "accounts": [
          {
            "accountId": "LVCRS",
            "identifiers": [
              {
                "identifierType": "NNIGF",
                "identifierValue": "QVKVTHG"
              }
            ]
          }
        ]
      },
      "toabao": {
        "accounts": [
          {
            "accountId": "YPXFVUNG",
            "identifiers": [
              {
                "identifierType": "BRPMUQX",
                "identifierValue": "EMVNAKKZSI"
              }
            ]
          }
        ]
      },
      "web_engage": {
        "accounts": [
          {
            "accountId": "XSLICPOOH",
            "identifiers": [
              {
                "identifierType": "XBILHP",
                "identifierValue": "CTDK"
              }
            ]
          }
        ]
      },
      "line": {
        "accounts": [
          {
            "accountId": "WIWPCLCCW",
            "identifiers": [
              {
                "identifierType": "LCWXQXABY",
                "identifierValue": "WCSPP"
              }
            ]
          }
        ]
      },
      "martjack": {
        "accounts": [
          {
            "accountId": "AJXQEL",
            "identifiers": [
              {
                "identifierType": "PPMCP",
                "identifierValue": "DLAAHXPZL"
              }
            ]
          }
        ]
      },
      "customerId": 8990,
      "jd": {
        "accounts": [
          {
            "accountId": "OMHCLNTD",
            "identifiers": [
              {
                "identifierType": "GSTOINWJ",
                "identifierValue": "JDWGUW"
              }
            ]
          }
        ]
      },
      "website": {
        "accounts": [
          {
            "accountId": "ZJIRQKQL",
            "identifiers": [
              {
                "identifierType": "CHDYYV",
                "identifierValue": "GTPKYTPA"
              }
            ]
          }
        ]
      },
      "firstName": "RCY",
      "instore": {
        "id": 6582,
        "mobile": "SILCSNH",
        "email": "IFHWR",
        "externalId": "CWP",
        "cardnumber": "FZZDJTQ",
        "cardexternalid": "SWMAMLF",
        "cardNumbers": [
          "SKWUHJRWT"
        ]
      }
    },
    "requestId": "BKKOGUKKID",
    "totalPoints": 2334,
    "erroredSteps": [
      {
        "name": "CWBR",
        "errorMessage": "XNRZVP",
        "errorCode": 5850,
        "rewards": [
          {
            "id": 9840,
            "qty": 6010,
            "points": 1325,
            "type": "AVKGFXOF",
            "transactionId": "CSUV",
            "rewardReference": "FEAPVWTGK"
          }
        ]
      }
    ]
  },
  "refId": "UVYE",
  "loyaltyEventId": "PZZNULKS",
  "apiRequestId": "VPFYWE",
  "eventId": "ORDARERY",
  "createdAt": 6357,
  "traceAttributes": {
    "MXDCRZOD": "MHLDJUH",
    "PZKCGGVF": "VXKY",
    "HXJH": "HWJM",
    "XBTCSTYPA": "HJE",
    "IZAOR": "CYWU"
  },
  "orgId": 659
}
```

## Reward Expiry Reminder (rewardExpiryReminder)

Notifies when a reward is about to expire.

```json Raw payload
{
  "eventName": "rewardExpiryReminder",
  "eventId": "6b2584aa-8ebe-49de-9c1c-fcba7daed9e4",
  "orgId": 51544,
  "refId": "51544_113659",
  "apiRequestId": "eaeda000-b5a9-4c54-a5f4-2c68e7fbdee4",
  "createdAt": 1726765207054,
  "data": {
    "rewardId": 113659,
    "type": "VOUCHER",
    "enabled": true,
    "redemptionType": "MILES",
    "startDate": 1726768253000,
    "endDate": 1726769453000,
    "intouchPoints": 0,
    "intouchSeriesId": "123",
    "priority": 5,
    "rewardDetails": [
      {
        "languageCode": "en",
        "name": "testReward0001",
        "description": "GIFT_CARD partner reward for test_Rewards_content_type_GIFT_CARD",
        "termAndConditionsId": "t&c",
        "termAndConditionsUrl": "https://s3.amazonaws.com/crm-nightly-new-solutions/testOrg_marvel_20230822_147/t%26c?X-Amz-Security-Token=FwoGZXIvYXdzEDoaDPfZLQAQuIIVJHT0WSLWAVxY%2FHfCb2avDbhz9MdqTieRMchpSyozExCeSW2ulzUnDfxlHco5bBoxK%2BSo7wFaiacimfoHWFqPGS7QowkCPr8HhB%2FWvFPOi88Qaah8omwtzpwSvoASTZ4EEo59HrnrKe7bBNVJ%2BDZ2OCOLAbIx3YwxWUGwd5UkxKXNvM8jocw3ypcpFMQHkobvfGwkZJ%2FautvasTMs%2FdsiswH8rxoCuuQHPGoBTb02exM1chQsWRGhIYQ64SNfxhsf4rDv9jUL0m5BzA9X8yB71QwqposiwYczslkvpnEol7GxtwYyLV%2BaXRp52GXVUVSpfADu%2Bxot4rmrMT19XTE9NFKDkocP%2BJ81VyMa5DjtdiXgew%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240919T170007Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIAXCQYYRKNLRICZZP6%2F20240919%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=b1c963b93ceae555e1ea4ab7248a3ae6cfa3f1eed5cb20a32a7974354a252293",
        "imageId": "EXDR12987U",
        "imageUrl": "https://s3.amazonaws.com/crm-nightly-new-solutions/testOrg_marvel_20230822_147/EXDR12987U?X-Amz-Security-Token=FwoGZXIvYXdzEDoaDPfZLQAQuIIVJHT0WSLWAVxY%2FHfCb2avDbhz9MdqTieRMchpSyozExCeSW2ulzUnDfxlHco5bBoxK%2BSo7wFaiacimfoHWFqPGS7QowkCPr8HhB%2FWvFPOi88Qaah8omwtzpwSvoASTZ4EEo59HrnrKe7bBNVJ%2BDZ2OCOLAbIx3YwxWUGwd5UkxKXNvM8jocw3ypcpFMQHkobvfGwkZJ%2FautvasTMs%2FdsiswH8rxoCuuQHPGoBTb02exM1chQsWRGhIYQ64SNfxhsf4rDv9jUL0m5BzA9X8yB71QwqposiwYczslkvpnEol7GxtwYyLV%2BaXRp52GXVUVSpfADu%2Bxot4rmrMT19XTE9NFKDkocP%2BJ81VyMa5DjtdiXgew%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240919T170007Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIAXCQYYRKNLRICZZP6%2F20240919%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=d290f86c87998761af877e8f1cf4b65e1031eedaf3dd0c40f992d835bf7061f6",
        "thumbnailId": "EXDR02987T",
        "thumbnailUrl": "https://s3.amazonaws.com/crm-nightly-new-solutions/testOrg_marvel_20230822_147/EXDR02987T?X-Amz-Security-Token=FwoGZXIvYXdzEDoaDPfZLQAQuIIVJHT0WSLWAVxY%2FHfCb2avDbhz9MdqTieRMchpSyozExCeSW2ulzUnDfxlHco5bBoxK%2BSo7wFaiacimfoHWFqPGS7QowkCPr8HhB%2FWvFPOi88Qaah8omwtzpwSvoASTZ4EEo59HrnrKe7bBNVJ%2BDZ2OCOLAbIx3YwxWUGwd5UkxKXNvM8jocw3ypcpFMQHkobvfGwkZJ%2FautvasTMs%2FdsiswH8rxoCuuQHPGoBTb02exM1chQsWRGhIYQ64SNfxhsf4rDv9jUL0m5BzA9X8yB71QwqposiwYczslkvpnEol7GxtwYyLV%2BaXRp52GXVUVSpfADu%2Bxot4rmrMT19XTE9NFKDkocP%2BJ81VyMa5DjtdiXgew%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240919T170007Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIAXCQYYRKNLRICZZP6%2F20240919%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=92de59fdb2b5b1086381090099675ab4c784eacb8d8f7381ce4f77603d6c44a4",
        "images": [
          {
            "name": "createRewardImage17265662870001",
            "id": "8837347b-20f1-401e-9a77-bdafb5e3086e",
            "url": "https://crm-nightly-new-fileservice.s3.amazonaws.com/solutions/50672/59d9976a-c4d2-42b0-8193-63a42866.png?X-Amz-Security-Token=FwoGZXIvYXdzEDoaDAbTUObgoVqaJRu7EiLSAXKgjReG65ZtsQrlTbr91u%2Frd1fdxnWdz212KMGOEcxs2nExLcoPD426bpSz%2FOAYf0YBDLERxaCSj%2BiBhMHbPUnpm8k6iGUo17quKssUpQyw19spw5K%2BK0j6l5GUwGoKQS8Vh1w1UA3oy3eT4tEecylpLPh7YwmLCggL6eUan3xWFLN8mAwQDej7KXu0D71Ygay2gnh8fDG4Hn7To%2F%2BEyl9Cd9R7gvlEw%2BrNQuPjSRAcd4ZhKHp7BqzTmO%2Fyk4zXhG92LrOr7r9SGg3iahCm4FgbGiiiqbG3BjItRaS1oWd%2FnWD5cj37kPK2vXf%2Bvq3dAjYcPnwaUapcnWni5OmYBUpGMaeYi%2BF0&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240919T164348Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIAXCQYYRKNCPGTBCUM%2F20240919%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=6ad9ce8a9e48c59cd97f20db89076ee9a598a0ec1033d20a77f62fcc73c3dda9"
          },
          {
            "name": "createRewardImage17265662870002",
            "id": "8837347b-20f1-401e-9a77-bdafb5e3086e",
            "url": "https://crm-nightly-new-fileservice.s3.amazonaws.com/solutions/50672/59d9976a-c4d2-42b0-8193-63a42866.png?X-Amz-Security-Token=FwoGZXIvYXdzEDoaDAbTUObgoVqaJRu7EiLSAXKgjReG65ZtsQrlTbr91u%2Frd1fdxnWdz212KMGOEcxs2nExLcoPD426bpSz%2FOAYf0YBDLERxaCSj%2BiBhMHbPUnpm8k6iGUo17quKssUpQyw19spw5K%2BK0j6l5GUwGoKQS8Vh1w1UA3oy3eT4tEecylpLPh7YwmLCggL6eUan3xWFLN8mAwQDej7KXu0D71Ygay2gnh8fDG4Hn7To%2F%2BEyl9Cd9R7gvlEw%2BrNQuPjSRAcd4ZhKHp7BqzTmO%2Fyk4zXhG92LrOr7r9SGg3iahCm4FgbGiiiqbG3BjItRaS1oWd%2FnWD5cj37kPK2vXf%2Bvq3dAjYcPnwaUapcnWni5OmYBUpGMaeYi%2BF0&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240919T164348Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIAXCQYYRKNCPGTBCUM%2F20240919%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=6ad9ce8a9e48c59cd97f20db89076ee9a598a0ec1033d20a77f62fcc73c3dda9"
          }
        ],
        "videos": [
          {
            "name": "createRewardImage17265662870001Video",
            "id": "8837347b-20f1-401e-9a77-bdafb5e3086e",
            "url": "https://crm-nightly-new-fileservice.s3.amazonaws.com/solutions/50672/59d9976a-c4d2-42b0-8193-63a42866.png?X-Amz-Security-Token=FwoGZXIvYXdzEDoaDAbTUObgoVqaJRu7EiLSAXKgjReG65ZtsQrlTbr91u%2Frd1fdxnWdz212KMGOEcxs2nExLcoPD426bpSz%2FOAYf0YBDLERxaCSj%2BiBhMHbPUnpm8k6iGUo17quKssUpQyw19spw5K%2BK0j6l5GUwGoKQS8Vh1w1UA3oy3eT4tEecylpLPh7YwmLCggL6eUan3xWFLN8mAwQDej7KXu0D71Ygay2gnh8fDG4Hn7To%2F%2BEyl9Cd9R7gvlEw%2BrNQuPjSRAcd4ZhKHp7BqzTmO%2Fyk4zXhG92LrOr7r9SGg3iahCm4FgbGiiiqbG3BjItRaS1oWd%2FnWD5cj37kPK2vXf%2Bvq3dAjYcPnwaUapcnWni5OmYBUpGMaeYi%2BF0&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240919T164348Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIAXCQYYRKNCPGTBCUM%2F20240919%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=6ad9ce8a9e48c59cd97f20db89076ee9a598a0ec1033d20a77f62fcc73c3dda9",
            "isExternal": false
          },
          {
            "name": "createRewardImage17265662870002Video",
            "url": "https://youtu.be/a_aSgmOqgrA",
            "isExternal": true
          }
        ]
      },
      {
        "languageCode": "fr",
        "name": "testReward-SECOND DETAILS",
        "description": "GIFT_CARD partner reward for test_Rewards_content_type_GIFT_CARD",
        "termAndConditionsId": "t&c",
        "termAndConditionsUrl": "https://s3.amazonaws.com/crm-nightly-new-solutions/testOrg_marvel_20230822_147/t%26c?X-Amz-Security-Token=FwoGZXIvYXdzEDoaDPfZLQAQuIIVJHT0WSLWAVxY%2FHfCb2avDbhz9MdqTieRMchpSyozExCeSW2ulzUnDfxlHco5bBoxK%2BSo7wFaiacimfoHWFqPGS7QowkCPr8HhB%2FWvFPOi88Qaah8omwtzpwSvoASTZ4EEo59HrnrKe7bBNVJ%2BDZ2OCOLAbIx3YwxWUGwd5UkxKXNvM8jocw3ypcpFMQHkobvfGwkZJ%2FautvasTMs%2FdsiswH8rxoCuuQHPGoBTb02exM1chQsWRGhIYQ64SNfxhsf4rDv9jUL0m5BzA9X8yB71QwqposiwYczslkvpnEol7GxtwYyLV%2BaXRp52GXVUVSpfADu%2Bxot4rmrMT19XTE9NFKDkocP%2BJ81VyMa5DjtdiXgew%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240919T170007Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIAXCQYYRKNLRICZZP6%2F20240919%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=b1c963b93ceae555e1ea4ab7248a3ae6cfa3f1eed5cb20a32a7974354a252293",
        "imageId": "EXDR12987U",
        "imageUrl": "https://s3.amazonaws.com/crm-nightly-new-solutions/testOrg_marvel_20230822_147/EXDR12987U?X-Amz-Security-Token=FwoGZXIvYXdzEDoaDPfZLQAQuIIVJHT0WSLWAVxY%2FHfCb2avDbhz9MdqTieRMchpSyozExCeSW2ulzUnDfxlHco5bBoxK%2BSo7wFaiacimfoHWFqPGS7QowkCPr8HhB%2FWvFPOi88Qaah8omwtzpwSvoASTZ4EEo59HrnrKe7bBNVJ%2BDZ2OCOLAbIx3YwxWUGwd5UkxKXNvM8jocw3ypcpFMQHkobvfGwkZJ%2FautvasTMs%2FdsiswH8rxoCuuQHPGoBTb02exM1chQsWRGhIYQ64SNfxhsf4rDv9jUL0m5BzA9X8yB71QwqposiwYczslkvpnEol7GxtwYyLV%2BaXRp52GXVUVSpfADu%2Bxot4rmrMT19XTE9NFKDkocP%2BJ81VyMa5DjtdiXgew%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240919T170007Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIAXCQYYRKNLRICZZP6%2F20240919%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=d290f86c87998761af877e8f1cf4b65e1031eedaf3dd0c40f992d835bf7061f6",
        "thumbnailId": "EXDR02987T",
        "thumbnailUrl": "https://s3.amazonaws.com/crm-nightly-new-solutions/testOrg_marvel_20230822_147/EXDR02987T?X-Amz-Security-Token=FwoGZXIvYXdzEDoaDPfZLQAQuIIVJHT0WSLWAVxY%2FHfCb2avDbhz9MdqTieRMchpSyozExCeSW2ulzUnDfxlHco5bBoxK%2BSo7wFaiacimfoHWFqPGS7QowkCPr8HhB%2FWvFPOi88Qaah8omwtzpwSvoASTZ4EEo59HrnrKe7bBNVJ%2BDZ2OCOLAbIx3YwxWUGwd5UkxKXNvM8jocw3ypcpFMQHkobvfGwkZJ%2FautvasTMs%2FdsiswH8rxoCuuQHPGoBTb02exM1chQsWRGhIYQ64SNfxhsf4rDv9jUL0m5BzA9X8yB71QwqposiwYczslkvpnEol7GxtwYyLV%2BaXRp52GXVUVSpfADu%2Bxot4rmrMT19XTE9NFKDkocP%2BJ81VyMa5DjtdiXgew%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240919T170007Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIAXCQYYRKNLRICZZP6%2F20240919%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=92de59fdb2b5b1086381090099675ab4c784eacb8d8f7381ce4f77603d6c44a4",
        "images": [
          {
            "name": "createRewardImage17265662870001",
            "id": "8837347b-20f1-401e-9a77-bdafb5e3086e",
            "url": "https://crm-nightly-new-fileservice.s3.amazonaws.com/solutions/50672/59d9976a-c4d2-42b0-8193-63a42866.png?X-Amz-Security-Token=FwoGZXIvYXdzEDoaDAbTUObgoVqaJRu7EiLSAXKgjReG65ZtsQrlTbr91u%2Frd1fdxnWdz212KMGOEcxs2nExLcoPD426bpSz%2FOAYf0YBDLERxaCSj%2BiBhMHbPUnpm8k6iGUo17quKssUpQyw19spw5K%2BK0j6l5GUwGoKQS8Vh1w1UA3oy3eT4tEecylpLPh7YwmLCggL6eUan3xWFLN8mAwQDej7KXu0D71Ygay2gnh8fDG4Hn7To%2F%2BEyl9Cd9R7gvlEw%2BrNQuPjSRAcd4ZhKHp7BqzTmO%2Fyk4zXhG92LrOr7r9SGg3iahCm4FgbGiiiqbG3BjItRaS1oWd%2FnWD5cj37kPK2vXf%2Bvq3dAjYcPnwaUapcnWni5OmYBUpGMaeYi%2BF0&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240919T164348Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIAXCQYYRKNCPGTBCUM%2F20240919%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=6ad9ce8a9e48c59cd97f20db89076ee9a598a0ec1033d20a77f62fcc73c3dda9"
          },
          {
            "name": "createRewardImage17265662870002",
            "id": "8837347b-20f1-401e-9a77-bdafb5e3086e",
            "url": "https://crm-nightly-new-fileservice.s3.amazonaws.com/solutions/50672/59d9976a-c4d2-42b0-8193-63a42866.png?X-Amz-Security-Token=FwoGZXIvYXdzEDoaDAbTUObgoVqaJRu7EiLSAXKgjReG65ZtsQrlTbr91u%2Frd1fdxnWdz212KMGOEcxs2nExLcoPD426bpSz%2FOAYf0YBDLERxaCSj%2BiBhMHbPUnpm8k6iGUo17quKssUpQyw19spw5K%2BK0j6l5GUwGoKQS8Vh1w1UA3oy3eT4tEecylpLPh7YwmLCggL6eUan3xWFLN8mAwQDej7KXu0D71Ygay2gnh8fDG4Hn7To%2F%2BEyl9Cd9R7gvlEw%2BrNQuPjSRAcd4ZhKHp7BqzTmO%2Fyk4zXhG92LrOr7r9SGg3iahCm4FgbGiiiqbG3BjItRaS1oWd%2FnWD5cj37kPK2vXf%2Bvq3dAjYcPnwaUapcnWni5OmYBUpGMaeYi%2BF0&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240919T164348Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIAXCQYYRKNCPGTBCUM%2F20240919%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=6ad9ce8a9e48c59cd97f20db89076ee9a598a0ec1033d20a77f62fcc73c3dda9"
          }
        ],
        "videos": [
          {
            "name": "createRewardImage17265662870001Video",
            "id": "8837347b-20f1-401e-9a77-bdafb5e3086e",
            "url": "https://crm-nightly-new-fileservice.s3.amazonaws.com/solutions/50672/59d9976a-c4d2-42b0-8193-63a42866.png?X-Amz-Security-Token=FwoGZXIvYXdzEDoaDAbTUObgoVqaJRu7EiLSAXKgjReG65ZtsQrlTbr91u%2Frd1fdxnWdz212KMGOEcxs2nExLcoPD426bpSz%2FOAYf0YBDLERxaCSj%2BiBhMHbPUnpm8k6iGUo17quKssUpQyw19spw5K%2BK0j6l5GUwGoKQS8Vh1w1UA3oy3eT4tEecylpLPh7YwmLCggL6eUan3xWFLN8mAwQDej7KXu0D71Ygay2gnh8fDG4Hn7To%2F%2BEyl9Cd9R7gvlEw%2BrNQuPjSRAcd4ZhKHp7BqzTmO%2Fyk4zXhG92LrOr7r9SGg3iahCm4FgbGiiiqbG3BjItRaS1oWd%2FnWD5cj37kPK2vXf%2Bvq3dAjYcPnwaUapcnWni5OmYBUpGMaeYi%2BF0&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240919T164348Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIAXCQYYRKNCPGTBCUM%2F20240919%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=6ad9ce8a9e48c59cd97f20db89076ee9a598a0ec1033d20a77f62fcc73c3dda9",
            "isExternal": false
          },
          {
            "name": "createRewardImage17265662870002Video",
            "url": "https://www.youtube.com/watch?v=a_aSgmOqgrA&feature=youtu.be",
            "isExternal": true
          }
        ]
      }
    ],
    "vendorDetails": {
      "id": 138,
      "name": "Capillary_1"
    },
    "vendorRedemptionDetails": {
      "id": 7930,
      "name": "VENDOR REDEMPTION-Postman_Test-2"
    },
    "paymentModes": [
      {
        "id": 845,
        "paymentMode": "CONV_RATIO",
        "conv_ratio": 0.35
      }
    ]
  },
  "loyaltyEventId": null
}
```

## Update Reward Transaction (updateRewardTransaction)

Notifies when a reward transaction such as fulfilment status or transaction custom field is updated.

| Parameter               | Data Type        | Description                                                                                                                                                                                           |
| ----------------------- | ---------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| eventName               | String           | Name of the event.                                                                                                                                                                                    |
| eventId                 | String           | Used by the consumer of the event notification for idempotency check, i.e., to check if the event is duplicate or unique before saving the event. If duplicate, the consumer should ignore the event. |
| orgId                   | Integer          | Organization ID associated with the event.                                                                                                                                                            |
| refId                   | String           | Reference ID combining the organization ID and request ID.                                                                                                                                            |
| apiRequestId            | String           | Unique identifier for the API request.                                                                                                                                                                |
| createdAt               | Long             | Timestamp of when the event was created.                                                                                                                                                              |
| data                    | Object           | Contains details of the reward transaction update.                                                                                                                                                    |
| transactionUpdates      | Array of Objects | List of transactions with updated details.                                                                                                                                                            |
| transactionId           | Long             | Unique identifier for the transaction.                                                                                                                                                                |
| customerId              | Long             | Unique identifier for the customer.                                                                                                                                                                   |
| fulfillmentStatus       | String           | Current status of the reward fulfilment, e.g., `DELIVERED`.                                                                                                                                           |
| transactionCustomFields | String           | Custom fields related to the transaction.                                                                                                                                                             |
| loyaltyEventId          | String           | Identifier for the associated loyalty event.                                                                                                                                                          |

```json Enriched payload
{
    "data": {
        "eventName": "updateRewardTransaction",
        "data": {
            "transactionUpdates": [
                {
                    "transactionId": 3710,
                    "rewardId": 5105,
                    "customerId": 656,
                    "transactionCustomFields": {
                        "ZUSZRDHNY": "ZKXJACQERT",
                        "VRKXFCHL": "DYUVH",
                        "TCDXPR": "BGZ",
                        "RJNDR": "QEPQFYON",
                        "KPDELSW": "WCS"
                    },
                    "fulfillmentStatus": "AMKFVNM"
                }
            ]
        },
        "eventId": "ZTBDMFR",
        "orgId": 7351,
        "refId": "KRZLTAQJG",
        "apiRequestId": "PLINA",
        "createdAt": 8040,
        "loyaltyEventId": "LKEAUWC",
        "traceAttributes": {
            "IYDBI": "OVGPPZIN",
            "CNOQFSHHL": "MEXIQGAWB",
            "FUIWBRQ": "ZJCOF",
            "AZRGYG": "XYTV"
        }
    },
    "errors": null,
    "warnings": null
}
```
```json Raw payload
{
  "eventName": "updateRewardTransaction",
  "eventLogId": 5847,
  "data": {
    "transactionUpdates": [
      {
        "transactionId": 8210,
        "rewardId": 6171,
        "customerId": 8569,
        "transactionCustomFields": {
          "DBQI": "EOIOQDSHWK",
          "TCXS": "SVFIUBH"
        },
        "fulfillmentStatus": "OMAOURU"
      }
    ]
  },
  "refId": "XQGXWLSNKP",
  "loyaltyEventId": "WONJWWZCTW",
  "apiRequestId": "HCGUSP",
  "eventId": "QBZBWRO",
  "createdAt": 4221,
  "traceAttributes": {
    "QMQ": "YHFPCBOVSU",
    "NCXF": "ZGOZHMRXB",
    "VGQFK": "ZNAJJ",
    "JYNZCXII": "TDGNEFJDH",
    "SMCB": "PKFNVHZ"
  },
  "orgId": 1390
}
```

# Coupons

Coupons are store promotions or discounts created through the Offer Management System (CMS). They can be issued to both loyalty and non-loyalty customers via channels like SMS or email.

## Coupon Issue Event (CouponIssue)

Notifies when a coupon has been issued to a user.

```json Enriched payload
{
   "eventName":"CouponIssue",
   "eventId":"78871533-bec4-457b-8dce-17bc38a5a2d1",
   "orgId":1231,
   "refId":"1231_353122_397759647:397759647",
   "apiRequestId":"08ccc811706f99919580fdf035c52a72",
   "createdAt":1630927651741,
   "data":{
      "addedAt":1630927651741,
      "addedBy":{
         "id":15071481
      },
      "coupons":[
         {
            "id":397759647,
            "code":"2YPHHFQR",
            "valid_till":2556124199000,
            "issued_on":1630927651000,
            "customerIdentifiers":{
               "customerId":414935964
            }
         }
      ],
      "series_info":{
         "id":353122,
         "description":"traffic_simulator",
         "seriesType":"LOYALTY",
         "clientHandlingType":"DISC_CODE",
         "valid_till":2556037800000,
         "discount_code":"NO_VALUE",
         "discount_type":"ABS",
         "discount_value":500
      },
      "issualType":"SINGLE"
   },
   "loyaltyEventId":null
}
```
```json Raw payload
{
  "eventName": "CouponIssue",
  "eventLogId": 7389,
  "data": {
    "addedAt": 1656,
    "addedBy": {
      "id": 6805,
      "till": {
        "code": "EWNPXM",
        "name": "KBCFDJHE"
      },
      "store": {
        "code": "RUYJQJ",
        "name": "MDAGLFFQ",
        "externalId": "RYFKSIY",
        "externalId1": "CQMBSQVRN",
        "externalId2": "BNOLPCYKB"
      }
    },
    "coupons": [
      {
        "id": 3131,
        "code": "ASRH",
        "valid_till": 6481,
        "issued_on": 2639,
        "customerIdentifiers": {
          "loyaltyType": "FWBNJDA",
          "ecommerce": {
            "accounts": [
              {
                "accountId": "YXMIPQIVL",
                "identifiers": []
              }
            ]
          },
          "lastName": "CAC",
          "facebook": {
            "accounts": [
              {
                "accountId": "RASKX",
                "identifiers": []
              }
            ]
          },
          "wechat": {
            "accounts": [
              {
                "accountId": "WWIC",
                "identifiers": []
              }
            ]
          },
          "tmall": {
            "accounts": [
              {
                "accountId": "CBEEFI",
                "identifiers": []
              }
            ]
          },
          "toabao": {
            "accounts": [
              {
                "accountId": "DNOWCAOE",
                "identifiers": []
              }
            ]
          },
          "web_engage": {
            "accounts": [
              {
                "accountId": "GLC",
                "identifiers": []
              }
            ]
          },
          "line": {
            "accounts": [
              {
                "accountId": "RTUZQKMMDH",
                "identifiers": []
              }
            ]
          },
          "martjack": {
            "accounts": [
              {
                "accountId": "OMBKJKJ",
                "identifiers": []
              }
            ]
          },
          "customerId": 152,
          "jd": {
            "accounts": [
              {
                "accountId": "NFGQCOQ",
                "identifiers": []
              }
            ]
          },
          "website": {
            "accounts": [
              {
                "accountId": "FJJACSCJPL",
                "identifiers": []
              }
            ]
          },
          "firstName": "RFUESQNT",
          "instore": {
            "id": 405,
            "mobile": "PQV",
            "email": "BGJNLWQ",
            "externalId": "KAWKZRM",
            "cardnumber": "CZL",
            "cardexternalid": "YIDJAW",
            "cardNumbers": [
              "FUJJ"
            ]
          }
        }
      }
    ],
    "series_info": {
      "id": 956,
      "description": "OBIYUPD",
      "seriesType": "AXSUM",
      "clientHandlingType": "YACRKT",
      "valid_till": 6560,
      "discount_code": "EWHGTFCD",
      "discount_type": "NTFPMYH",
      "discount_value": 3486.248343222978
    },
    "issualType": "CJLV"
  },
  "refId": "LVTSUMPQX",
  "loyaltyEventId": "TKYSNAUN",
  "apiRequestId": "VRBFKZN",
  "eventId": "WFZ",
  "createdAt": 8105,
  "traceAttributes": {
    "RCZLIIMLW": "ZWDCUFL",
    "JLZRJAP": "XJJEUOU"
  },
  "orgId": 9898
}
```

## Coupon Redeem Event (CouponRedeem)

Notifies when a user has redeemed a coupon.

```json Enriched payload
{
  "eventName": "CouponRedeem",
  "eventId": "edc7931a-c1f1-49a6-85f8-41878bbe20ee",
  "orgId": 998,
  "refId": "998_105710_13278432",
  "apiRequestId": "e422a015080377989a23b583e72d849a",
  "createdAt": 1724904056455,
  "data": {
    "addedAt": 1724904056455,
    "addedBy": {
      "id": 12808452
    },
    "coupon": {
      "id": 792947747,
      "code": "STATUSPAGE1",
      "redemptionId": 13278432,
      "redemptionDate": 1724904056000,
      "series_info": {
        "id": 105710,
        "description": "Status_Page_Redeem",
        "seriesType": "LOYALTY",
        "clientHandlingType": "DISC_CODE_PIN",
        "valid_till": 4772066295000,
        "discount_code": "NO_VALUE",
        "discount_type": "ABS",
        "discount_value": 10
      }
    },
    "customerIdentifiers": {
      "customerId": 362028955
    },
    "transaction": {
      "bill_id": 0,
      "number": ""
    }
  },
  "loyaltyEventId": null
}
```
```json Raw payload
{
  "eventName": "CouponRedeem",
  "eventLogId": 7631,
  "data": {
    "addedAt": 8265,
    "addedBy": {
      "id": 3306,
      "till": {
        "code": "XGF",
        "name": "EHHMPTZWYG"
      },
      "store": {
        "code": "TED",
        "name": "MFUTFI",
        "externalId": "DNUZCDNCSV",
        "externalId1": "LXJTK",
        "externalId2": "WLAD"
      }
    },
    "coupon": {
      "id": 9873,
      "code": "NHND",
      "redemptionId": 8828,
      "redemptionDate": 7078,
      "series_info": {
        "id": 8534,
        "description": "WINOYFX",
        "seriesType": "NQF",
        "clientHandlingType": "GKCU",
        "valid_till": 409,
        "discount_code": "FZHKS",
        "discount_type": "DARML",
        "discount_value": 1572.6459789907656
      }
    },
    "customerIdentifiers": {
      "loyaltyType": "DGJXS",
      "ecommerce": {
        "accounts": [
          {
            "accountId": "IFVQIVEM",
            "identifiers": [
              {
                "identifierType": "NYIF",
                "identifierValue": "PWPTW"
              }
            ]
          }
        ]
      },
      "lastName": "AUYFPAZIC",
      "facebook": {
        "accounts": [
          {
            "accountId": "ZORKBOOCXL",
            "identifiers": [
              {
                "identifierType": "WGHZXRNH",
                "identifierValue": "WHW"
              }
            ]
          }
        ]
      },
      "wechat": {
        "accounts": [
          {
            "accountId": "GSEPMAY",
            "identifiers": [
              {
                "identifierType": "NLTRSYP",
                "identifierValue": "KYH"
              }
            ]
          }
        ]
      },
      "tmall": {
        "accounts": [
          {
            "accountId": "BTPV",
            "identifiers": [
              {
                "identifierType": "HESLLCCBD",
                "identifierValue": "YEFZKAW"
              }
            ]
          }
        ]
      },
      "toabao": {
        "accounts": [
          {
            "accountId": "JAR",
            "identifiers": [
              {
                "identifierType": "CWV",
                "identifierValue": "OFQOT"
              }
            ]
          }
        ]
      },
      "web_engage": {
        "accounts": [
          {
            "accountId": "BSWA",
            "identifiers": [
              {
                "identifierType": "HFEZRDWW",
                "identifierValue": "UKHL"
              }
            ]
          }
        ]
      },
      "line": {
        "accounts": [
          {
            "accountId": "KRSRYIFME",
            "identifiers": [
              {
                "identifierType": "XNKPYJSG",
                "identifierValue": "QENJJSL"
              }
            ]
          }
        ]
      },
      "martjack": {
        "accounts": [
          {
            "accountId": "VBRVGVS",
            "identifiers": [
              {
                "identifierType": "IIXOWQRNK",
                "identifierValue": "HLZ"
              }
            ]
          }
        ]
      },
      "customerId": 2609,
      "jd": {
        "accounts": [
          {
            "accountId": "EBAFGGFO",
            "identifiers": [
              {
                "identifierType": "RIHPYET",
                "identifierValue": "PPRNBMKOBG"
              }
            ]
          }
        ]
      },
      "website": {
        "accounts": [
          {
            "accountId": "IBTCKFJQ",
            "identifiers": [
              {
                "identifierType": "ZUK",
                "identifierValue": "NEITD"
              }
            ]
          }
        ]
      },
      "firstName": "ACJYYVRTQM",
      "instore": {
        "id": 8682,
        "mobile": "MHFGQZMCL",
        "email": "YVVSHIW",
        "externalId": "DVZGBGNGR",
        "cardnumber": "VPOCMVTD",
        "cardexternalid": "TLEJJRVL",
        "cardNumbers": [
          "UEK"
        ]
      }
    },
    "transaction": {
      "bill_id": 293,
      "number": "GRK"
    }
  },
  "refId": "RUUJRI",
  "loyaltyEventId": "ZOPYZACR",
  "apiRequestId": "NKENTJAR",
  "eventId": "BTO",
  "createdAt": 7239,
  "traceAttributes": {
    "BNPQLDG": "NBHJXZG",
    "UNBEPOWDC": "BTG",
    "LLXJ": "FLVMGDQ",
    "ODAPBAPM": "ZLRUR"
  },
  "orgId": 9757
}
```

## Issue Bulk Coupon with Count (CouponIssue)

Notifies when bulk coupons are issued

```json Enriched payload
{
  "eventName": "CouponIssue",
  "eventId": "de068e40-06e0-4176-b876-ccd4b602347a",
  "orgId": 998,
  "refId": "998_516557_1241056561:1241056570",
  "apiRequestId": "rohan_test",
  "createdAt": 1724907145664,
  "data": {
    "addedAt": 1724907145664,
    "addedBy": {
      "id": 50026273
    },
    "coupons": [
      {
        "id": 1241056561,
        "code": "VQ3U9146",
        "valid_till": 1726252199000,
        "issued_on": 1724907145000,
        "customerIdentifiers": {
          "customerId": 423813652
        }
      },
      {
        "id": 1241056562,
        "code": "0TM4WNMA",
        "valid_till": 1726252199000,
        "issued_on": 1724907145000,
        "customerIdentifiers": {
          "customerId": 423813652
        }
      },
      {
        "id": 1241056563,
        "code": "T4ZB61TH",
        "valid_till": 1726252199000,
        "issued_on": 1724907145000,
        "customerIdentifiers": {
          "customerId": 423813652
        }
      },
      {
        "id": 1241056564,
        "code": "AM70QPZP",
        "valid_till": 1726252199000,
        "issued_on": 1724907145000,
        "customerIdentifiers": {
          "customerId": 423813652
        }
      },
      {
        "id": 1241056565,
        "code": "6NR39R38",
        "valid_till": 1726252199000,
        "issued_on": 1724907145000,
        "customerIdentifiers": {
          "customerId": 423813652
        }
      },
      {
        "id": 1241056566,
        "code": "BODWSTE5",
        "valid_till": 1726252199000,
        "issued_on": 1724907145000,
        "customerIdentifiers": {
          "customerId": 423813652
        }
      },
      {
        "id": 1241056567,
        "code": "TOG3B75Z",
        "valid_till": 1726252199000,
        "issued_on": 1724907145000,
        "customerIdentifiers": {
          "customerId": 423813652
        }
      },
      {
        "id": 1241056568,
        "code": "SC5M5CBR",
        "valid_till": 1726252199000,
        "issued_on": 1724907145000,
        "customerIdentifiers": {
          "customerId": 423813652
        }
      },
      {
        "id": 1241056569,
        "code": "MXAYVOCB",
        "valid_till": 1726252199000,
        "issued_on": 1724907145000,
        "customerIdentifiers": {
          "customerId": 423813652
        }
      },
      {
        "id": 1241056570,
        "code": "C6NPTDX9",
        "valid_till": 1726252199000,
        "issued_on": 1724907145000,
        "customerIdentifiers": {
          "customerId": 423813652
        }
      }
    ],
    "series_info": {
      "id": 516557,
      "description": "Rohan test",
      "seriesType": "UNDEFINED",
      "clientHandlingType": "DISC_CODE",
      "valid_till": 1726165800000,
      "discount_code": "NO_VALUE",
      "discount_type": "ABS",
      "discount_value": 10
    },
    "issualType": "SINGLE"
  },
  "loyaltyEventId": null
}
```
```json Raw payload
{
  "eventName": "CouponIssue",
  "eventLogId": 6350,
  "data": {
    "addedAt": 4700,
    "addedBy": {
      "id": 9010,
      "till": {
        "code": "UWR",
        "name": "TGCGWC"
      },
      "store": {
        "code": "TGGMCJV",
        "name": "HCNTGVM",
        "externalId": "ZCMPO",
        "externalId1": "VODOX",
        "externalId2": "FQSY"
      }
    },
    "coupons": [
      {
        "id": 2270,
        "code": "ZEXKJ",
        "valid_till": 7160,
        "issued_on": 6262,
        "customerIdentifiers": {
          "loyaltyType": "PNCQKA",
          "ecommerce": {
            "accounts": [
              {
                "accountId": "QES",
                "identifiers": []
              }
            ]
          },
          "lastName": "OVWIRFJ",
          "facebook": {
            "accounts": [
              {
                "accountId": "JRTH",
                "identifiers": []
              }
            ]
          },
          "wechat": {
            "accounts": [
              {
                "accountId": "MKUHUKH",
                "identifiers": []
              }
            ]
          },
          "tmall": {
            "accounts": [
              {
                "accountId": "TRFHXVZL",
                "identifiers": []
              }
            ]
          },
          "toabao": {
            "accounts": [
              {
                "accountId": "ZKXTE",
                "identifiers": []
              }
            ]
          },
          "web_engage": {
            "accounts": [
              {
                "accountId": "SJOICCTNH",
                "identifiers": []
              }
            ]
          },
          "line": {
            "accounts": [
              {
                "accountId": "ZEGUAEGNIC",
                "identifiers": []
              }
            ]
          },
          "martjack": {
            "accounts": [
              {
                "accountId": "ISTEQE",
                "identifiers": []
              }
            ]
          },
          "customerId": 305,
          "jd": {
            "accounts": [
              {
                "accountId": "FXG",
                "identifiers": []
              }
            ]
          },
          "website": {
            "accounts": [
              {
                "accountId": "TGXDZOCW",
                "identifiers": []
              }
            ]
          },
          "firstName": "RVVPTAJXP",
          "instore": {
            "id": 3,
            "mobile": "QOTT",
            "email": "RBOFUIAHCY",
            "externalId": "HPF",
            "cardnumber": "GPZNOJ",
            "cardexternalid": "LOBWZCR",
            "cardNumbers": [
              "QPBGNZYC"
            ]
          }
        }
      }
    ],
    "series_info": {
      "id": 2348,
      "description": "NSRCKSEL",
      "seriesType": "JYHJYQY",
      "clientHandlingType": "ZOZJUEX",
      "valid_till": 4689,
      "discount_code": "NNVDHQ",
      "discount_type": "ZHKM",
      "discount_value": 6949.068670650224
    },
    "issualType": "HYTLE"
  },
  "refId": "IWZY",
  "loyaltyEventId": "ESTGDPUFY",
  "apiRequestId": "AXUB",
  "eventId": "KKNMKFEH",
  "createdAt": 8640,
  "traceAttributes": {
    "JAOPGZ": "BPJYBG",
    "GVTGTZQ": "ZXVXXMISPG",
    "MSXDU": "RQNLR",
    "FVSQHYV": "LRSTSXTOE"
  },
  "orgId": 6192
}
```

# Badges

A badge is a type of visual recognition used in loyalty programs to reward customers for their progress, specific actions, or achievements.

## Event notifications on earning a badge (badgeEarned)

Notifies when a badge is earned by a user.

```json Enriched payload
{
    "eventName": "badgeEarned",
    "eventId": "72fe1900-a413-42d6-9582-f955474739aa",
    "orgId": 50933,
    "refId": "50933_651bb7bac983d041efbc78fc",
    "apiRequestId": "e4397e00-de8d-4a54-b86b-affe305406cb",
    "createdAt": 1696315322593,
    "data": {
        "customerIdentifiers": {
            "customerId": 381921157,
            "loyaltyType": "loyalty",
            "instore": {
                "mobile": "918811992995",
                "email": "loyal5@gmail.com",
                "externalId": "5a1111cfc5e3239dc0b92cc410cb28"
            }
        },
        "badgeId": "650c0896aefcde237f3dba43",
        "earnId": "651bb7bac983d041efbc78fc",
        "earnedOn": 1696315322450,
        "earnConstraints": [
            {
                "constraintLevel": "BADGE",
                "constraintType": "OVERALL",
                "maxEarnLimit": 1000,
                "currentEarnCount": 5
            },
            {
                "constraintLevel": "BADGE",
                "constraintType": "ROLLING_WINDOW",
                "rollType": "DAYS",
                "rollValue": 7,
                "maxEarnLimit": 300,
                "currentEarnCount": 2
            },
            {
                "constraintLevel": "CUSTOMER",
                "constraintType": "ROLLING_WINDOW",
                "rollType": "DAYS",
                "rollValue": 5,
                "maxEarnLimit": 50,
                "currentEarnCount": 2
            },
            {
                "constraintLevel": "CUSTOMER",
                "constraintType": "ROLLING_WINDOW",
                "rollType": "WEEKS",
                "rollValue": 1,
                "maxEarnLimit": 100,
                "currentEarnCount": 2
            },
            {
                "constraintLevel": "CUSTOMER",
                "constraintType": "ROLLING_WINDOW",
                "rollType": "MONTHS",
                "rollValue": 1,
                "maxEarnLimit": 200,
                "currentEarnCount": 5
            },
            {
                "constraintLevel": "CUSTOMER",
                "constraintType": "NONE"
            }
        ],
        "triggeringActivity": {
            "identifiers": [],
            "enteredBy": {
                "id": 50660494,
                "till": {
                    "code": "shubham.test123",
                    "name": "shubham.test123"
                }
            },
            "additionalAttributes": []
        }
    },
    "loyaltyEventId": null
}
```
```json Raw payload
{
  "eventName": "badgeEarned",
  "eventLogId": 5458,
  "data": {
    "customerIdentifiers": {
      "loyaltyType": "GKBMHHMGM",
      "ecommerce": {
        "accounts": [
          {
            "accountId": "FZPLS",
            "identifiers": [
              {
                "identifierType": "VFLOLQDJR",
                "identifierValue": "VDQ"
              }
            ]
          }
        ]
      },
      "lastName": "IDMEFELF",
      "facebook": {
        "accounts": [
          {
            "accountId": "FQWYITF",
            "identifiers": [
              {
                "identifierType": "MFC",
                "identifierValue": "BCBMMFDEIZ"
              }
            ]
          }
        ]
      },
      "wechat": {
        "accounts": [
          {
            "accountId": "JFRCUR",
            "identifiers": [
              {
                "identifierType": "TPFRYCU",
                "identifierValue": "XFROP"
              }
            ]
          }
        ]
      },
      "tmall": {
        "accounts": [
          {
            "accountId": "KPFRYQDAC",
            "identifiers": [
              {
                "identifierType": "ACCXOQTAXU",
                "identifierValue": "CPOUSYT"
              }
            ]
          }
        ]
      },
      "toabao": {
        "accounts": [
          {
            "accountId": "XDSOTH",
            "identifiers": [
              {
                "identifierType": "GAKWYZUPI",
                "identifierValue": "SGLPIG"
              }
            ]
          }
        ]
      },
      "web_engage": {
        "accounts": [
          {
            "accountId": "NKCKO",
            "identifiers": [
              {
                "identifierType": "FAGYKPHYF",
                "identifierValue": "HMQCBK"
              }
            ]
          }
        ]
      },
      "line": {
        "accounts": [
          {
            "accountId": "QVXY",
            "identifiers": [
              {
                "identifierType": "OXYRYQVK",
                "identifierValue": "RNOSFMXFM"
              }
            ]
          }
        ]
      },
      "martjack": {
        "accounts": [
          {
            "accountId": "SDSK",
            "identifiers": [
              {
                "identifierType": "DBTNO",
                "identifierValue": "RTRLPFJJR"
              }
            ]
          }
        ]
      },
      "customerId": 8158,
      "jd": {
        "accounts": [
          {
            "accountId": "CCPQTAMV",
            "identifiers": [
              {
                "identifierType": "CNOAS",
                "identifierValue": "DFRZWBZAN"
              }
            ]
          }
        ]
      },
      "website": {
        "accounts": [
          {
            "accountId": "RCBOL",
            "identifiers": [
              {
                "identifierType": "FYFNQG",
                "identifierValue": "XQKWRP"
              }
            ]
          }
        ]
      },
      "firstName": "ALLWZKY",
      "instore": {
        "id": 6322,
        "mobile": "XABMTPEF",
        "email": "UBYMOWCOHG",
        "externalId": "CHBVDI",
        "cardnumber": "FEBAMNABC",
        "cardexternalid": "RHBOZPAUK",
        "cardNumbers": [
          "GVKQNCFPPD"
        ]
      }
    },
    "badgeId": "ORPLI",
    "issualId": "ODYBPOFWN",
    "issuedOn": 7189,
    "earnId": "GHM",
    "earnedOn": 7392,
    "earnConstraints": [
      {
        "constraintLevel": "TVFYKP",
        "constraintType": "ZXIGYM",
        "rollType": "FQDR",
        "rollValue": 9267,
        "maxEarnLimit": 6581,
        "currentEarnCount": 7141
      }
    ],
    "triggeringActivity": {
      "name": "JQHPC",
      "identifiers": [
        {
          "key": "JYJGXUDZNA",
          "value": "YLHETQ"
        }
      ],
      "enteredBy": {
        "id": 9719,
        "till": {
          "code": "HUCKRYBP",
          "name": "QBCADBJFB"
        },
        "store": {
          "code": "ZAZYJ",
          "name": "TVH",
          "externalId": "UUBVOXNXR",
          "externalId1": "UZRFT",
          "externalId2": "IIMWSR"
        }
      },
      "entityInformation": {
        "entityType": "EUEITL",
        "entityId": 7659
      },
      "additionalAttributes": [
        {
          "key": "MENSOVRXBV",
          "value": "QLG"
        }
      ]
    }
  },
  "refId": "GCPIQJEX",
  "loyaltyEventId": "DSSSTVW",
  "apiRequestId": "WCTXSBSSBR",
  "eventId": "OBSESB",
  "createdAt": 77,
  "traceAttributes": {
    "WHSWSO": "NMGUBWSUJC",
    "BWEFCDZ": "FOPQMMM"
  },
  "orgId": 5848
}
```