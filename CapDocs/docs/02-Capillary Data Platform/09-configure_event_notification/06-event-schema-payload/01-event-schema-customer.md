---
title: Customer and User Group
deprecated: false
hidden: false
metadata:
  robots: index
---
# Customer

A customer is defined as an individual who either buys goods or services from an organisation or subscribes to the organisation’s communication channels.

## Customer Added Event (customerAdded)

Notifies when a user is added.

| Parameter    | Datatype | Description                                                                                                                                                                                           |
| ------------ | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| eventName    | String   | Name of the event.                                                                                                                                                                                    |
| eventId      | String   | Used by the consumer of the event notification for idempotency check, i.e., to check if the event is duplicate or unique before saving the event. If duplicate, the consumer should ignore the event. |
| orgId        | Integer  | Capillary organization ID                                                                                                                                                                             |
| refId        | String   | Reference ID for the internal debugging purpose.                                                                                                                                                      |
| customerId   | Integer  | Unique identifier for the customer.                                                                                                                                                                   |
| mobile       | Integer  | Mobile number of the customer.                                                                                                                                                                        |
| email        | String   | Email ID of the customer.                                                                                                                                                                             |
| externalId   | String   | External ID associated with the customer.                                                                                                                                                             |
| card\_number | Integer  | Card number associated with the customer.                                                                                                                                                             |
| apiRequestId | String   | Internal request ID generated for the API request.                                                                                                                                                    |
| createdAt    | Integer  | Unix timestamp in milliseconds when the event was stored in Capillary.                                                                                                                                |

```json Enriched payload
{
  "eventId": "81b1f0ce-8119-4826-9cca-610bd31d4038",
  "eventType": "150698_customerAdded",
  "consumerGroupId": null,
  "actionType": "START",
  "timeStamp": 1683874799984,
  "attributes": {
    "createdAt": 1683874799971,
    "data": {
      "loyaltyType": "LOYALTY",
      "source": "instore",
      "firstName": "ROSMA",
      "lastName": "DEW I",
      "enteredAt": 1683883798000,
      "enteredBy": {
        "id": 200320889,
        "till": {
          "code": "kanmo.idn.mothercare.rpm",
          "name": "kanmo.idn.mothercare.rpm"
        },
        "store": {
          "code": "kanmo.idn.mother care.rpm",
          "name": "Mothercare RSIA Paramount Makassar",
          "externalId": "MOTHERCARERPM",
          "externalId1": "",
          "externalId2": ""
        }
      },
      "customerIdentifiers": {
        "customerId": 164875382,
        "instore": {
          "mobile": "6282396092287",
          "email": "rosmadewidewi@gmail.com",
          "externalId": "226682932023"
        }
      }
    },
    "eventName": "customerAdded",
    "refId": "150698_164875382",
    "apiRequestId ": "0c52fc98594959bf0d577218bf565798",
    "orgId": 150698
  }
}
```
```json Raw payload
{
  "eventName": "customerAdded",
  "eventLogId": 206,
  "data": {
    "loyaltyType": "EWDS",
    "lastName": "RYKCFEUTK",
    "accountId": "FEITR",
    "enteredAt": 5320,
    "customFields": [
      {
        "key": "NINA",
        "value": "DAFLNARTJ"
      }
    ],
    "customerIdentifiers": {
      "loyaltyType": "TLMLUG",
      "ecommerce": {
        "accounts": [
          {
            "accountId": "UIUOLRN",
            "identifiers": [
              {
                "identifierType": "SUOSG",
                "identifierValue": "BGOYNH"
              }
            ]
          }
        ]
      },
      "lastName": "PHYAAOOQI",
      "facebook": {
        "accounts": [
          {
            "accountId": "NME",
            "identifiers": [
              {
                "identifierType": "QKSOEXNGLN",
                "identifierValue": "SVSIW"
              }
            ]
          }
        ]
      },
      "wechat": {
        "accounts": [
          {
            "accountId": "ZAGOIZ",
            "identifiers": [
              {
                "identifierType": "NIYVVBP",
                "identifierValue": "SQEVTX"
              }
            ]
          }
        ]
      },
      "tmall": {
        "accounts": [
          {
            "accountId": "VSVCXTYHZW",
            "identifiers": [
              {
                "identifierType": "ECUAUL",
                "identifierValue": "MWWLYFPB"
              }
            ]
          }
        ]
      },
      "toabao": {
        "accounts": [
          {
            "accountId": "RGGUVGZIP",
            "identifiers": [
              {
                "identifierType": "NRKNWWBW",
                "identifierValue": "LVL"
              }
            ]
          }
        ]
      },
      "web_engage": {
        "accounts": [
          {
            "accountId": "IKHIFVE",
            "identifiers": [
              {
                "identifierType": "HQG",
                "identifierValue": "UDKBA"
              }
            ]
          }
        ]
      },
      "line": {
        "accounts": [
          {
            "accountId": "HACM",
            "identifiers": [
              {
                "identifierType": "EAHEUF",
                "identifierValue": "FJJID"
              }
            ]
          }
        ]
      },
      "martjack": {
        "accounts": [
          {
            "accountId": "IAXIR",
            "identifiers": [
              {
                "identifierType": "EZNLZI",
                "identifierValue": "JPTI"
              }
            ]
          }
        ]
      },
      "customerId": 8525,
      "jd": {
        "accounts": [
          {
            "accountId": "OEJYQANLRB",
            "identifiers": [
              {
                "identifierType": "TGWGSE",
                "identifierValue": "OJJNFAMIM"
              }
            ]
          }
        ]
      },
      "website": {
        "accounts": [
          {
            "accountId": "BFCXDKQS",
            "identifiers": [
              {
                "identifierType": "CPYXGNR",
                "identifierValue": "JZRJZMTU"
              }
            ]
          }
        ]
      },
      "firstName": "ACSVL",
      "instore": {
        "id": 3851,
        "mobile": "WINS",
        "email": "BDFUS",
        "externalId": "QLTBOSUM",
        "cardnumber": "NRHRY",
        "cardexternalid": "IQFMJPMMO",
        "cardNumbers": [
          "FRV"
        ]
      }
    },
    "enteredBy": {
      "user": {
        "username": "TNKDWA"
      },
      "id": 5911,
      "till": {
        "code": "UYKWH",
        "name": "TAIYZ"
      },
      "store": {
        "code": "MLM",
        "name": "BJJM",
        "externalId": "WVKR",
        "externalId1": "OWWA",
        "externalId2": "IKKACIKC"
      }
    },
    "extendedFields": [
      {
        "key": "NOUFSJ",
        "value": "RATPNAVIZ"
      }
    ],
    "source": "XVRRF",
    "firstName": "ISNFTQM"
  },
  "refId": "GNROWS",
  "loyaltyEventId": "DXHCD",
  "apiRequestId": "WHPHHPC",
  "eventId": "QFURQB",
  "createdAt": 1525,
  "traceAttributes": {
    "FAKOUWU": "BPKFINCA",
    "SXDQ": "WDBXNSXLP"
  },
  "orgId": 7236
}
```

## Customer Updated Event (customerUpdated)

Notifies when details of a user are updated. For example, name, extended fields, custom fields, and user status. User subscription updates are not supported.

| Parameter    | Datatype | Description                                                                                                                                       |
| ------------ | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| loyaltyType  | Enum     | Type of customer loyalty - LOYALTY, NON\_LOYALTY                                                                                                  |
| source       | String   | Capillary organization ID                                                                                                                         |
| email        | String   | Email ID of the customer.                                                                                                                         |
| mobile       | String   | Mobile number of the customer.                                                                                                                    |
| card\_number | Integer  | Card number associated with the customer.                                                                                                         |
| enteredAt    | Integer  | Unix timestamp in milliseconds when the event was stored in Capillary.                                                                            |
| enteredBy    | String   | Source from which customer details are updated. Possible values: `FACEBOOK`, `WEB_ENGAGE`, `WECHAT`, `INSTORE`, `MARTJACK`, `TMALL`, `MOBILE_APP` |

```json Enriched payload
{
  "data": {
    "eventName": "customerUpdated",
    "data": {
      "loyaltyType": "LOYALTY_PLUS",
      "source": "MOBILE_APP",
      "accountId": "ACCT12345",
      "firstName": "John",
      "lastName": "Doe",
      "enteredAt": 1693333333,
      "enteredBy": {
        "user": {
          "username": "jane_smith"
        },
        "id": 4567,
        "till": {
          "code": "TILL01",
          "name": "Main Register"
        },
        "store": {
          "code": "STORE001",
          "name": "Downtown",
          "externalId": "EXT001",
          "externalId1": "EXT002",
          "externalId2": "EXT003"
        }
      },
      "updatedFields": [
        {
          "fieldName": "gender",
          "previousValue": "Female",
          "currentValue": "Male",
          "fieldType": "ExtendedField"
        },
        {
          "fieldName": "dob",
          "previousValue": "Tue Mar 04 00:00:00 GMT 2025",
          "currentValue": "Tue Mar 04 15:27:00 GMT 2025",
          "fieldType": "ExtendedField"
        }
      ],
      "customerStatus": {
        
        "previousLabel": "Inactive",
        
        "currentLabel": "Active",
        "reason": "Customer requested reactivation"
      },
      "triggeringActivity": {
        "name": "PROFILE_UPDATE",
        "requestId": "REQ_98765"
      },
      "customerIdentifiers": {
        "customerId": 12345,
        "firstName": "John",
        "lastName": "Doe",
        "loyaltyType": "LOYALTY_PLUS",
        "instore": {
          "id": 5678,
          "mobile": "9876543210", 
          "email": "john.doe@example.com",
          "externalId": "EXT_CUST_001",
          "cardnumber": "CARD_12345",
          "cardexternalid": "CARD_EXT_001",
          "cardNumbers": [
            "CARD_12345",
            "CARD_67890"
          ]
        },
        "facebook": {
          "accounts": [
            {
              "accountId": "FACEBOOK_123",
              "identifiers": [
                {
                  "identifierType": "mobile",
                  "identifierValue": "9876543210"
                }
              ]
            }
          ]
        },
        "web_engage": {
          "accounts": [
            {
              "accountId": "WEBENG_001",
              "identifiers": [
                {
                  "identifierType": "mobile",
                  "identifierValue": "9876543210"
                }
              ]
            }
          ]
        },
        "wechat": {
          "accounts": [
            {
              "accountId": "WECHAT_001",
              "identifiers": [
                {
                  "identifierType": "mobile",
                  "identifierValue": "9876543210"
                }
              ]
            }
          ]
        },
        "martjack": {
          "accounts": [
            {
              "accountId": "MARTJACK_001",
              "identifiers": [
                {
                  "identifierType": "mobile",
                  "identifierValue": "9876543210"
                }
              ]
            }
          ]
        },
        "tmall": {
          "accounts": [
            {
              "accountId": "TMALL_001",
              "identifiers": [
                {
                  "identifierType": "mobile",
                  "identifierValue": "9876543210"
                }
              ]
            }
          ]
        },
        "toabao": {
          "accounts": [
            {
              "accountId": "TAOBAO_001",
              "identifiers": [
                {
                  "identifierType": "mobile",
                  "identifierValue": "9876543210"
                }
              ]
            }
          ]
        },
        "jd": {
          "accounts": [
            {
              "accountId": "JD_001",
              "identifiers": [
                {
                  "identifierType": "mobile",
                  "identifierValue": "9876543210"
                }
              ]
            }
          ]
        },
        "ecommerce": {
          "accounts": [
            {
              "accountId": "ECOM_001",
              "identifiers": [
                {
                  "identifierType": "mobile",
                  "identifierValue": "9876543210"
                }
              ]
            }
          ]
        },
        "website": {
          "accounts": [
            {
              "accountId": "WEBSITE_001",
              "identifiers": [
                {
                  "identifierType": "mobile",
                  "identifierValue": "9876543210"
                }
              ]
            }
          ]
        },
        "line": {
          "accounts": [
            {
              "accountId": "LINE_001",
              "identifiers": [
                {
                  "identifierType": "mobile",
                  "identifierValue": "9876543210"
                }
              ]
            }
          ]
        }
      },
      "customFields": [
        {
          "key": "MembershipLevel",
          "value": "Gold"
        }
      ],
      "extendedFields": [
        {
          "key": "PreferredLanguage",
          "value": "English"
        }
      ]
    },
    "eventId": "EVT_12345",
    "orgId": 1001,
    "refId": "REF_9876",
    "apiRequestId": "REQ_67890",
    "createdAt": 1693334444,
    "loyaltyEventId": "LOYALTY_EVENT_001",
    "traceAttributes": {
      "XJE": "Value1",
      "OBW": "Value2",
      "JXICJ": "Value3",
      "FGQKKGRAR": "Value4",
      "POEHQFGLHD": "Value5"
    }
  },
  "errors": null,
  "warnings": null
}

```
```json Raw payload
{
  "eventName": "customerUpdated",
  "eventLogId": 6320,
  "data": {
    "loyaltyType": "JXWQL",
    "lastName": "OBYWXGGECW",
    "accountId": "OSHRVJU",
    "enteredAt": 6996,
    "customFields": [
      {
        "key": "MNHOERAA",
        "value": "ACOZ"
      }
    ],
    "customerIdentifiers": {
      "loyaltyType": "LVL",
      "ecommerce": {
        "accounts": [
          {
            "accountId": "FSPKH",
            "identifiers": [
              {
                "identifierType": "NQPKHTACF",
                "identifierValue": "GABALCUMST"
              }
            ]
          }
        ]
      },
      "lastName": "GTVJZKKXGR",
      "facebook": {
        "accounts": [
          {
            "accountId": "EZAJKDEJZF",
            "identifiers": [
              {
                "identifierType": "WWXEG",
                "identifierValue": "ODHC"
              }
            ]
          }
        ]
      },
      "wechat": {
        "accounts": [
          {
            "accountId": "SJJ",
            "identifiers": [
              {
                "identifierType": "ORMNJ",
                "identifierValue": "DWYBZQJPD"
              }
            ]
          }
        ]
      },
      "tmall": {
        "accounts": [
          {
            "accountId": "YGLF",
            "identifiers": [
              {
                "identifierType": "HXGQ",
                "identifierValue": "EJSHPK"
              }
            ]
          }
        ]
      },
      "toabao": {
        "accounts": [
          {
            "accountId": "WPHFTA",
            "identifiers": [
              {
                "identifierType": "ASCEN",
                "identifierValue": "KIO"
              }
            ]
          }
        ]
      },
      "web_engage": {
        "accounts": [
          {
            "accountId": "POIBPNXH",
            "identifiers": [
              {
                "identifierType": "HDJVUHO",
                "identifierValue": "XYPHASJIUH"
              }
            ]
          }
        ]
      },
      "line": {
        "accounts": [
          {
            "accountId": "PIKSUJ",
            "identifiers": [
              {
                "identifierType": "XHJKNSX",
                "identifierValue": "OXFS"
              }
            ]
          }
        ]
      },
      "martjack": {
        "accounts": [
          {
            "accountId": "ZLQMCU",
            "identifiers": [
              {
                "identifierType": "WFXMZX",
                "identifierValue": "LOAVBOCT"
              }
            ]
          }
        ]
      },
      "customerId": 919,
      "jd": {
        "accounts": [
          {
            "accountId": "FLR",
            "identifiers": [
              {
                "identifierType": "JPQGHL",
                "identifierValue": "EGFWE"
              }
            ]
          }
        ]
      },
      "website": {
        "accounts": [
          {
            "accountId": "ASSDDJ",
            "identifiers": [
              {
                "identifierType": "HPPTI",
                "identifierValue": "IGJHPXI"
              }
            ]
          }
        ]
      },
      "firstName": "KNFOLWRAXH",
      "instore": {
        "id": 9047,
        "mobile": "GAXOB",
        "email": "XYSRQOEJL",
        "externalId": "HRNTLVK",
        "cardnumber": "VHL",
        "cardexternalid": "WZXJWNXJ",
        "cardNumbers": [
          "JTSJWYGES"
        ]
      }
    },
    "enteredBy": {
      "user": {
        "username": "UYASMNCLAJ"
      },
      "id": 4787,
      "till": {
        "code": "QGSVR",
        "name": "CCLTMBTBO"
      },
      "store": {
        "code": "INKKMF",
        "name": "JXPHJHEJYF",
        "externalId": "OEZVSWTKG",
        "externalId1": "IIFSFR",
        "externalId2": "STBR"
      }
    },
    "customerStatus": {
      "previousStatus": "DKK",
      "previousLabel": "KSHEM",
      "currentStatus": "KOJG",
      "currentLabel": "ETVFN",
      "reason": "AAAP"
    },
    "extendedFields": [
      {
        "key": "RZPRZPS",
        "value": "GIBTN"
      }
    ],
    "updatedFields": [
      {
        "fieldName": "KRVJQRDQL",
        "previousValue": "RXMKHIIZ",
        "currentValue": "VVNQ",
        "source": "DFLYKNNFYO",
        "accountId": "UZLEIA",
        "fieldType": "StandardField"
      }
    ],
    "triggeringActivity": {
      "name": "HNIJEG",
      "requestId": "WJG"
    },
    "source": "PKJLQ",
    "firstName": "HCKVAG"
  },
  "refId": "OAP",
  "loyaltyEventId": "TUXPOS",
  "apiRequestId": "ULGZLAK",
  "eventId": "XYHERHDCSD",
  "createdAt": 1304,
  "traceAttributes": {
    "ZIWHEOXRNW": "ZJP",
    "YKPOSDB": "BDBDCLX",
    "VOCSEWDPG": "AUWALC",
    "CDUDNZLXJ": "KXCSMTROR"
  },
  "orgId": 4460
}
```

### PII deletion Customer update

Notifies when details of the customer is updated upon personally identifiable information (PII) deletion and the status changes from 'Pending Deletion' to 'Deleted'.

```json Enriched payload
{
  "eventId": "2ad748ac-f1f9-4bfa-8753-be57587b543d",
  "eventType": "customerUpdated",
  "consumerGroupId": null,
  "actionType": "START",
  "timeStamp": 1742844645025,
  "attributes": {
    "createdAt": 1742844644960,
    "data": {
      "loyaltyType": "loyalty",
      "source": "INSTORE",
      "accountId": "",
      "firstName": "AAQA",
      "lastName": "Test033",
      "enteredAt": 1739963778000,
      "enteredBy": {
        "id": 13600080,
        "till": {
          "code": "mbrcare",
          "name": "mbrcare"
        },
        "store": {
          "code": "mbrcare",
          "name": "MbrCare",
          "externalId": "MbrCare",
          "externalId1": "",
          "externalId2": ""
        }
      },
      "updatedFields": [],
      "customerStatus": {
        "currentLabel": "Deleted",
        "reason": "User marked deleted using request feature"
      },
      "customerIdentifiers": {
        "customerId": 622372905,
        "instore": {
          "email": "depirab186@merotx.com",
          "externalId": "GT000043043",
          "cardNumbers": []
        }
      },
      "customFields": [
        {
          "key": "customer_address",
          "value": "abc123"
        },
        {
          "key": "fax",
          "value": "12345678"
        },
        {
          "key": "golf_class_code",
          "value": "abc123"
        },
        {
          "key": "golf_lastupdateevent",
          "value": "abc123"
        },
        {
          "key": "golf_membership_flag",
          "value": "abc123"
        },
        {
          "key": "kanjifirstname",
          "value": "石川"
        },
        {
          "key": "kanjilastname",
          "value": "鈴木"
        },
        {
          "key": "mobile2",
          "value": "8067944474"
        },
        {
          "key": "quit_date",
          "value": "abc123"
        },
        {
          "key": "quit_reason_number",
          "value": "abc123"
        },
        {
          "key": "quit_reason_text",
          "value": "abc123"
        }
      ],
      "extendedFields": []
    },
    "eventName": "customerUpdated",
    "refId": "2163_622372905",
    "apiRequestId": "",
    "orgId": 2163
  }
} 
```

## Customer Subscription Event (customerSubscription)

Notifies when a user's subscription status changes for transactional or promotional messages.

```json Raw payload
{
  "eventName": "customerSubscription",
  "data": {
    "customerIdentifiers": {
      "customerId": 3035,
      "firstName": "BTFVIQUN",
      "lastName": "SOGQBY",
      "loyaltyType": "RBPLQJBFL",
      "instore": {
        "id": 6642,
        "mobile": "ZHTTROEFB",
        "email": "DKGOLFALR",
        "externalId": "QMLY",
        "cardnumber": "GFEDIL",
        "cardexternalid": "EUMPR",
        "cardNumbers": [
          "LMLJ"
        ]
      },
      "facebook": {
        "accounts": [
          {
            "accountId": "EHMQPCFWAT",
            "identifiers": [
              {
                "identifierType": "CWHTH",
                "identifierValue": "RUVDFD"
              }
            ]
          }
        ]
      },
      "web_engage": {
        "accounts": [
          {
            "accountId": "HER",
            "identifiers": [
              {
                "identifierType": "BPRE",
                "identifierValue": "TJLOFS"
              }
            ]
          }
        ]
      },
      "wechat": {
        "accounts": [
          {
            "accountId": "XFGDQP",
            "identifiers": [
              {
                "identifierType": "JXLHKMZOT",
                "identifierValue": "MACJWFUX"
              }
            ]
          }
        ]
      },
      "martjack": {
        "accounts": [
          {
            "accountId": "IKN",
            "identifiers": [
              {
                "identifierType": "LBGONQFJSJ",
                "identifierValue": "LQQZ"
              }
            ]
          }
        ]
      },
      "tmall": {
        "accounts": [
          {
            "accountId": "XPRHVOZJU",
            "identifiers": [
              {
                "identifierType": "OTUTY",
                "identifierValue": "ITT"
              }
            ]
          }
        ]
      },
      "toabao": {
        "accounts": [
          {
            "accountId": "TIJCMFLJN",
            "identifiers": [
              {
                "identifierType": "YAXUTNID",
                "identifierValue": "SADCL"
              }
            ]
          }
        ]
      },
      "jd": {
        "accounts": [
          {
            "accountId": "PPJRM",
            "identifiers": [
              {
                "identifierType": "DFIGGVIIQH",
                "identifierValue": "HYLWJUOCEW"
              }
            ]
          }
        ]
      },
      "ecommerce": {
        "accounts": [
          {
            "accountId": "OFWX",
            "identifiers": [
              {
                "identifierType": "KRQGML",
                "identifierValue": "JOC"
              }
            ]
          }
        ]
      },
      "website": {
        "accounts": [
          {
            "accountId": "FJQGVP",
            "identifiers": [
              {
                "identifierType": "YDUFXFGN",
                "identifierValue": "HPC"
              }
            ]
          }
        ]
      },
      "line": {
        "accounts": [
          {
            "accountId": "KOP",
            "identifiers": [
              {
                "identifierType": "EQSTIP",
                "identifierValue": "DEDR"
              }
            ]
          }
        ]
      }
    },
    "subscriptions": [
      {
        "sourceAccountId": "TIYFBQ",
        "previousStatus": "MDDNR",
        "currentStatus": "SQXZFX",
        "channel": "XOLEFY",
        "sourceName": "BXCUZZ",
        "priority": "OOLRA",
        "ouId": 5905,
        "ouCode": "QFFGPEDKTK"
      }
    ]
  },
  "eventId": "EDEL",
  "orgId": 9907,
  "refId": "AKOZZ",
  "apiRequestId": "ACILCI",
  "createdAt": 4214,
  "loyaltyEventId": "FCW",
  "traceAttributes": {
    "TBJRARWC": "IEWKJRV",
    "YYRUWM": "XBSC",
    "JWYDT": "CYFW",
    "TWNX": "UHJIPUJ",
    "SHWKVIMKQ": "EWO",
    "JQDQMWSEP": "HSNOC"
  }
}
```

# Group

A user group is a collection of individuals (such as customers or contributors) grouped, often in a hierarchical structure, to participate in group-based loyalty programs or business engagements.

## Group Created Event (groupCreated)

Notifies when a group has been created.

```json Raw payload
{
        "eventName": "groupCreated",
        "data": {
            "groupId": 6454,
            "groupName": "TEIVJVUXCD",
            "primaryMember": {
                "firstName": "IPN",
                "lastName": "NSVYZ",
                "role": "ARL",
                "customerIdentifiers": {
                    "customerId": 6386,
                    "firstName": "QECMNT",
                    "lastName": "AWFW",
                    "loyaltyType": "IBZ",
                    "instore": {
                        "id": 5275,
                        "mobile": "AZOFWOKVNS",
                        "email": "FWEIJBQO",
                        "externalId": "QOIN",
                        "cardnumber": "XJMBDBLMK",
                        "cardexternalid": "DTLZYF",
                        "cardNumbers": [
                            "KFSUUM"
                        ]
                    },
                    "facebook": {
                        "accounts": [
                            {
                                "accountId": "FVYERZD",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    },
                    "web_engage": {
                        "accounts": [
                            {
                                "accountId": "YXZS",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    },
                    "wechat": {
                        "accounts": [
                            {
                                "accountId": "RWDDQM",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    },
                    "martjack": {
                        "accounts": [
                            {
                                "accountId": "JJNGQIK",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    },
                    "tmall": {
                        "accounts": [
                            {
                                "accountId": "QCO",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    },
                    "toabao": {
                        "accounts": [
                            {
                                "accountId": "FPPAZ",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    },
                    "jd": {
                        "accounts": [
                            {
                                "accountId": "FNMWWC",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    },
                    "ecommerce": {
                        "accounts": [
                            {
                                "accountId": "HMFKARRKJ",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    },
                    "website": {
                        "accounts": [
                            {
                                "accountId": "KMEIOBBREK",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    },
                    "line": {
                        "accounts": [
                            {
                                "accountId": "CZQSEGODEF",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    }
                }
            },
            "enteredAt": 8034,
            "enteredBy": {
                "user": {
                    "username": "QBICVZ"
                },
                "id": 1936,
                "till": {
                    "code": "SELKEVQJQ",
                    "name": "QRMYMIOXD"
                },
                "store": {
                    "code": "NHLLVNT",
                    "name": "YSUP",
                    "externalId": "WGKIFKEDLQ",
                    "externalId1": "KMWFAW",
                    "externalId2": "FGWMFPFFK"
                }
            }
        },
        "eventId": "YZHXQUJIBQ",
        "orgId": 2975,
        "refId": "EUGDEXSXMZ",
        "apiRequestId": "KDKA",
        "createdAt": 5053,
        "loyaltyEventId": "XFCKEGMOT",
        "traceAttributes": {
            "UODI": "TSYZEWFYIC",
            "XAPFDNH": "QPXJNITT",
            "QINZJNUJA": "XGIZAXNDQH"
        }
    }
```

## Group Updated Event (groupUpdated)

Notifies when a group has been updated.

```json Raw payload
{
        "eventName": "groupUpdated",
        "data": {
            "groupId": 6155,
            "groupName": "FUEFW",
            "primaryMember": {
                "firstName": "IFNOWNRA",
                "lastName": "WPIZZOD",
                "role": "BWPA",
                "customerIdentifiers": {
                    "customerId": 3900,
                    "firstName": "LJPJXTIMJ",
                    "lastName": "WNPNFJMC",
                    "loyaltyType": "VEPTDQ",
                    "instore": {
                        "id": 6797,
                        "mobile": "TCOBX",
                        "email": "MSLEFNK",
                        "externalId": "EDJO",
                        "cardnumber": "TMRGHP",
                        "cardexternalid": "ROLLUYB",
                        "cardNumbers": [
                            "KPHNYWUC"
                        ]
                    },
                    "facebook": {
                        "accounts": [
                            {
                                "accountId": "VQRPQ",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    },
                    "web_engage": {
                        "accounts": [
                            {
                                "accountId": "ACFDAVSVMU",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    },
                    "wechat": {
                        "accounts": [
                            {
                                "accountId": "LNWKPJL",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    },
                    "martjack": {
                        "accounts": [
                            {
                                "accountId": "DRZ",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    },
                    "tmall": {
                        "accounts": [
                            {
                                "accountId": "GVBLZBUHJ",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    },
                    "toabao": {
                        "accounts": [
                            {
                                "accountId": "RJNHE",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    },
                    "jd": {
                        "accounts": [
                            {
                                "accountId": "QQHHBNQUL",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    },
                    "ecommerce": {
                        "accounts": [
                            {
                                "accountId": "JAYKWH",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    },
                    "website": {
                        "accounts": [
                            {
                                "accountId": "WKIUPSKAQ",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    },
                    "line": {
                        "accounts": [
                            {
                                "accountId": "ANO",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    }
                }
            },
            "enteredAt": 635,
            "enteredBy": {
                "user": {
                    "username": "RYLTNTEQCC"
                },
                "id": 7017,
                "till": {
                    "code": "TGDLK",
                    "name": "DVEEEBG"
                },
                "store": {
                    "code": "IJSXMEMFYH",
                    "name": "WSDHTBHBVN",
                    "externalId": "TBVJRW",
                    "externalId1": "AMXQAAEDC",
                    "externalId2": "HZOWPEUGE"
                }
            }
        },
        "eventId": "VWPECGJC",
        "orgId": 5635,
        "refId": "SHLDGAJCRL",
        "apiRequestId": "KOKNJM",
        "createdAt": 3039,
        "loyaltyEventId": "UETYIKX",
        "traceAttributes": {
            "ATUN": "NKPUVYSD",
            "QVMUTCMH": "MSGVXGF",
            "DPMSGQ": "RCLEURMTOC",
            "JIKG": "CHTOAA",
            "EIS": "QFBLKTBB"
        }
    }
```

## Group Member Removed Event (groupMemberRemoved)

Notifies when a member is removed from the group.

```json Raw payload
{
        "eventName": "groupMemberRemoved",
        "data": {
            "groupId": 6815,
            "groupName": "XFU",
            "primaryMember": {
                "firstName": "JFFYAPX",
                "lastName": "EYPQYDAM",
                "role": "NECB",
                "customerIdentifiers": {
                    "customerId": 1757,
                    "firstName": "WCZY",
                    "lastName": "WZM",
                    "loyaltyType": "BYCMESBJO",
                    "instore": {
                        "id": 4820,
                        "mobile": "QFLAIVBPOF",
                        "email": "SGSHI",
                        "externalId": "OJAUIX",
                        "cardnumber": "FBVKZMMCWH",
                        "cardexternalid": "KBMXA",
                        "cardNumbers": [
                            "JHPMGKDIF"
                        ]
                    },
                    "facebook": {
                        "accounts": [
                            {
                                "accountId": "XOBBTVOP",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    },
                    "web_engage": {
                        "accounts": [
                            {
                                "accountId": "HUWGP",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    },
                    "wechat": {
                        "accounts": [
                            {
                                "accountId": "MHXETUZ",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    },
                    "martjack": {
                        "accounts": [
                            {
                                "accountId": "MKW",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    },
                    "tmall": {
                        "accounts": [
                            {
                                "accountId": "OSRJKWR",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    },
                    "toabao": {
                        "accounts": [
                            {
                                "accountId": "YHBBSXR",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    },
                    "jd": {
                        "accounts": [
                            {
                                "accountId": "MBGGPJQ",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    },
                    "ecommerce": {
                        "accounts": [
                            {
                                "accountId": "SIL",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    },
                    "website": {
                        "accounts": [
                            {
                                "accountId": "YVSMTR",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    },
                    "line": {
                        "accounts": [
                            {
                                "accountId": "ESTVMSHGIP",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    }
                }
            },
            "memberRemoved": {
                "firstName": "JUYJ",
                "lastName": "YEW",
                "role": "ZQBBTQVFS",
                "customerIdentifiers": {
                    "customerId": 564,
                    "firstName": "COIIUVCDMR",
                    "lastName": "DXGFR",
                    "loyaltyType": "QDXULGXJ",
                    "instore": {
                        "id": 9506,
                        "mobile": "AGIV",
                        "email": "XAHP",
                        "externalId": "CINEHRP",
                        "cardnumber": "CFWBFLLDC",
                        "cardexternalid": "EYYPR",
                        "cardNumbers": [
                            "JJYKSZZFQW"
                        ]
                    },
                    "facebook": {
                        "accounts": [
                            {
                                "accountId": "JUYMTCYIBO",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    },
                    "web_engage": {
                        "accounts": [
                            {
                                "accountId": "BXZDXE",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    },
                    "wechat": {
                        "accounts": [
                            {
                                "accountId": "UCHTLL",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    },
                    "martjack": {
                        "accounts": [
                            {
                                "accountId": "IEGJ",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    },
                    "tmall": {
                        "accounts": [
                            {
                                "accountId": "HXVTRWJUJM",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    },
                    "toabao": {
                        "accounts": [
                            {
                                "accountId": "FLB",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    },
                    "jd": {
                        "accounts": [
                            {
                                "accountId": "OMGB",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    },
                    "ecommerce": {
                        "accounts": [
                            {
                                "accountId": "JCWVA",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    },
                    "website": {
                        "accounts": [
                            {
                                "accountId": "TKS",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    },
                    "line": {
                        "accounts": [
                            {
                                "accountId": "QLM",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    }
                }
            },
            "enteredAt": 6893,
            "enteredBy": {
                "user": {
                    "username": "ETP"
                },
                "id": 9792,
                "till": {
                    "code": "TBMFUSQH",
                    "name": "XIN"
                },
                "store": {
                    "code": "OEQ",
                    "name": "RCFBZV",
                    "externalId": "LZZOZ",
                    "externalId1": "WINYWG",
                    "externalId2": "AROPHIPG"
                }
            }
        },
        "eventId": "XJJVON",
        "orgId": 6700,
        "refId": "HKA",
        "apiRequestId": "DEPY",
        "createdAt": 543,
        "loyaltyEventId": "MFVKRCLH",
        "traceAttributes": {
            "WFP": "THUQOWPZ",
            "TIFXANF": "YBOHTO",
            "MZGVLUZYW": "OJHW",
            "RPSEKXCVM": "ECMTTSEVND"
        }
    }
```

## Group Member Added Event (groupMemberAdded)

Notifies when a user is added to the group.

```json Raw payload
{
        "eventName": "groupMemberAdded",
        "data": {
            "groupId": 5322,
            "groupName": "CDNO",
            "primaryMember": {
                "firstName": "OWAXN",
                "lastName": "QFYKVMFT",
                "role": "EXWCSHZCE",
                "customerIdentifiers": {
                    "customerId": 7098,
                    "firstName": "PYBWGRLSL",
                    "lastName": "EYMPRNY",
                    "loyaltyType": "EYGPRF",
                    "instore": {
                        "id": 5240,
                        "mobile": "DTGWKBQ",
                        "email": "XEWHI",
                        "externalId": "WQMNTLMZH",
                        "cardnumber": "GFHGXTR",
                        "cardexternalid": "PFZXJLOU",
                        "cardNumbers": [
                            "HJWLN"
                        ]
                    },
                    "facebook": {
                        "accounts": [
                            {
                                "accountId": "IJRPPXDA",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    },
                    "web_engage": {
                        "accounts": [
                            {
                                "accountId": "NPNLNJU",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    },
                    "wechat": {
                        "accounts": [
                            {
                                "accountId": "HXZPIXO",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    },
                    "martjack": {
                        "accounts": [
                            {
                                "accountId": "AIXMYREODW",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    },
                    "tmall": {
                        "accounts": [
                            {
                                "accountId": "VGWSDAD",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    },
                    "toabao": {
                        "accounts": [
                            {
                                "accountId": "QQVZVH",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    },
                    "jd": {
                        "accounts": [
                            {
                                "accountId": "OCMVNLMM",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    },
                    "ecommerce": {
                        "accounts": [
                            {
                                "accountId": "QAIEXCUPGH",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    },
                    "website": {
                        "accounts": [
                            {
                                "accountId": "LUYARPJ",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    },
                    "line": {
                        "accounts": [
                            {
                                "accountId": "BNSQ",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    }
                }
            },
            "memberAdded": {
                "firstName": "DUJEI",
                "lastName": "LGH",
                "role": "PIXKILY",
                "customerIdentifiers": {
                    "customerId": 3970,
                    "firstName": "BHNN",
                    "lastName": "RDDGQ",
                    "loyaltyType": "FFSVYCB",
                    "instore": {
                        "id": 7905,
                        "mobile": "SEWFB",
                        "email": "LQIMZ",
                        "externalId": "ZTUJYZMQY",
                        "cardnumber": "YDJIRDP",
                        "cardexternalid": "VQRUYH",
                        "cardNumbers": [
                            "SUTYQB"
                        ]
                    },
                    "facebook": {
                        "accounts": [
                            {
                                "accountId": "MJWLMIU",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    },
                    "web_engage": {
                        "accounts": [
                            {
                                "accountId": "BYQ",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    },
                    "wechat": {
                        "accounts": [
                            {
                                "accountId": "MUOPUHVG",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    },
                    "martjack": {
                        "accounts": [
                            {
                                "accountId": "HZE",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    },
                    "tmall": {
                        "accounts": [
                            {
                                "accountId": "RWMN",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    },
                    "toabao": {
                        "accounts": [
                            {
                                "accountId": "QQOIHQI",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    },
                    "jd": {
                        "accounts": [
                            {
                                "accountId": "XOKFREZV",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    },
                    "ecommerce": {
                        "accounts": [
                            {
                                "accountId": "TQSSADLNBA",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    },
                    "website": {
                        "accounts": [
                            {
                                "accountId": "WFFZSBFWR",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    },
                    "line": {
                        "accounts": [
                            {
                                "accountId": "WYV",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    }
                }
            },
            "enteredAt": 1426,
            "enteredBy": {
                "user": {
                    "username": "MPQSJA"
                },
                "id": 939,
                "till": {
                    "code": "DSYQOXAV",
                    "name": "AFYDJJKRYC"
                },
                "store": {
                    "code": "GKYXKEZF",
                    "name": "JBKKM",
                    "externalId": "SRAU",
                    "externalId1": "XOAKCQX",
                    "externalId2": "QME"
                }
            }
        },
        "eventId": "RHPEYLIWUE",
        "orgId": 6485,
        "refId": "KFLUYT",
        "apiRequestId": "ZHLGTI",
        "createdAt": 9743,
        "loyaltyEventId": "CWJWPBBF",
        "traceAttributes": {
            "JWE": "RHC",
            "TRRA": "DTQNZ",
            "NDKD": "RLXXDMAHL",
            "DICJW": "CUSFWKB",
            "LDJSKSIDO": "HAOW",
            "OQKQ": "BFHHQBEUHC"
        }
    }
```

## Points Contribution to Group Event (pointsContributionToGroup)

Notifies when points are contributed to the loyalty group.

```json Raw payload
{
        "eventName": "pointsContributionToGroup",
        "data": {
            "groupId": 2146,
            "groupName": "RRMB",
            "primaryMember": {
                "firstName": "AVQ",
                "lastName": "VQZZJL",
                "role": "QBZZKNJAXV",
                "customerIdentifiers": {
                    "customerId": 2828,
                    "firstName": "DVSKCOT",
                    "lastName": "HCBTOXKHQ",
                    "loyaltyType": "WIXGDVJST",
                    "instore": {
                        "id": 5646,
                        "mobile": "KMLCG",
                        "email": "OSONXRDAD",
                        "externalId": "LBJURY",
                        "cardnumber": "DTEVR",
                        "cardexternalid": "UZHJ",
                        "cardNumbers": [
                            "DPAID"
                        ]
                    },
                    "facebook": {
                        "accounts": [
                            {
                                "accountId": "FXRBKNKWC",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    },
                    "web_engage": {
                        "accounts": [
                            {
                                "accountId": "XAVGDRVRL",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    },
                    "wechat": {
                        "accounts": [
                            {
                                "accountId": "PGXPKRE",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    },
                    "martjack": {
                        "accounts": [
                            {
                                "accountId": "DRDX",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    },
                    "tmall": {
                        "accounts": [
                            {
                                "accountId": "QSUJ",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    },
                    "toabao": {
                        "accounts": [
                            {
                                "accountId": "HZPT",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    },
                    "jd": {
                        "accounts": [
                            {
                                "accountId": "EXMG",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    },
                    "ecommerce": {
                        "accounts": [
                            {
                                "accountId": "TWYD",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    },
                    "website": {
                        "accounts": [
                            {
                                "accountId": "TAYEGETJO",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    },
                    "line": {
                        "accounts": [
                            {
                                "accountId": "YZOT",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    }
                }
            },
            "contributingMember": {
                "firstName": "QPJ",
                "lastName": "SVCC",
                "role": "KDSM",
                "customerIdentifiers": {
                    "customerId": 6560,
                    "firstName": "IATIBBX",
                    "lastName": "IVRCV",
                    "loyaltyType": "JLZFVAQR",
                    "instore": {
                        "id": 8417,
                        "mobile": "JNQ",
                        "email": "BMXXM",
                        "externalId": "NLCQRNBB",
                        "cardnumber": "WBEBQR",
                        "cardexternalid": "PXOVHLLQR",
                        "cardNumbers": [
                            "IERNF"
                        ]
                    },
                    "facebook": {
                        "accounts": [
                            {
                                "accountId": "AAABR",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    },
                    "web_engage": {
                        "accounts": [
                            {
                                "accountId": "MDFUIIKPFO",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    },
                    "wechat": {
                        "accounts": [
                            {
                                "accountId": "APTV",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    },
                    "martjack": {
                        "accounts": [
                            {
                                "accountId": "CEKOFQIK",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    },
                    "tmall": {
                        "accounts": [
                            {
                                "accountId": "PBXDZ",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    },
                    "toabao": {
                        "accounts": [
                            {
                                "accountId": "AUIXZI",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    },
                    "jd": {
                        "accounts": [
                            {
                                "accountId": "PVTZOPUTY",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    },
                    "ecommerce": {
                        "accounts": [
                            {
                                "accountId": "BUEGCQEW",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    },
                    "website": {
                        "accounts": [
                            {
                                "accountId": "REIRM",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    },
                    "line": {
                        "accounts": [
                            {
                                "accountId": "MOEWWZNQM",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    }
                }
            },
            "triggeringActivity": {
                "name": "SKYAQOEDX",
                "identifiers": [
                    {
                        "key": "EVRAA",
                        "value": "OZJUDQH"
                    }
                ],
                "enteredBy": {
                    "id": 4493,
                    "till": {
                        "code": "KJXTSY",
                        "name": "QLSEATML"
                    },
                    "store": {
                        "code": "KKX",
                        "name": "DSMKXKSK",
                        "externalId": "IAUSMDZCFY",
                        "externalId1": "JOZJBJZ",
                        "externalId2": "WYHERZQSN"
                    }
                },
                "entityInformation": {
                    "entityType": "NBNCCMY",
                    "entityId": 4348
                },
                "additionalAttributes": [
                    {
                        "key": "XIQUZ",
                        "value": "JKFVMCWXUZ"
                    }
                ]
            },
            "loyaltyProgramDetails": {
                "id": 6178,
                "name": "XXYMNPPPF",
                "isDefault": true,
                "pointsToCurrencyRatio": 279.6401470769947,
                "tiers": [
                    {
                        "tierNumber": 8793,
                        "tierName": "HFT"
                    }
                ]
            },
            "loyaltyProgramId": 3583,
            "pointsContributedToGroup": 446.36640823491007
        },
        "eventId": "VTP",
        "orgId": 5150,
        "refId": "QRPNKMVSN",
        "apiRequestId": "DYUXNRF",
        "createdAt": 1845,
        "loyaltyEventId": "JBKIS",
        "traceAttributes": {
            "INZTJTF": "AMTYVL",
            "CXBYWD": "ZNQ",
            "SPQUS": "QEGKQSFPT",
            "ONLFEQEX": "PQDODJ",
            "PXYUL": "ZVZXMGQRLT"
        }
    }
```