---
title: Partner Program
deprecated: false
hidden: false
metadata:
  robots: index
---
A partner program in Capillary is a type of loyalty program that is created and managed outside the Capillary platform, typically by an external brand or partner.

## Partner Program Linked (partnerProgramLinked)

Notifies when a user is linked to a partner program.

```json Enriched payload
{
  "eventId": "1b049b7f-9363-464c-beaf-0c7c2f1f8a12",
  "eventType": "partnerProgramLinked",
  "consumerGroupId": null,
  "actionType": "START",
  "timeStamp": 1683871605623,
  "attributes": {
    "createdAt": 1683871605603,
    "data": {
      "customerIdentifiers": {
        "customerId": 6809254,
        "instore": {
          "mobile": "6590688093",
          "email": "prestoul@yahoo.com.sg"
        }
      },
      "entityInformation": {
        "entityType": "USER",
        "entityId": 6809254
      },
      "loyaltyProgramId": 1115,
      "partnerProgramId": 45,
      "partnerProgramName": "Drivers ",
      "partnerProgramType": "SUPPLEMENTARY",
      "customerPartnerProgramDetails": {
        "membershipExpiryDate": "2123-05-12"
      }
    },
    "eventName": "partnerProgramLinked",
    "refId": "151197_C3zPfmvsZL ",
    "apiRequestId": "5ba71b8f-5557-4a68-86b9-8e597722ce16",
    "orgId": 151197
  }
}
```
```json Raw payload
{
  "eventName": "partnerProgramLinked",
  "eventLogId": 1356,
  "data": {
    "customerIdentifiers": {
      "loyaltyType": "NKLPGKYIQ",
      "ecommerce": {
        "accounts": [
          {
            "accountId": "QJCABVH",
            "identifiers": [
              {
                "identifierType": "VSMLKRSQD",
                "identifierValue": "RCPWWZGF"
              }
            ]
          }
        ]
      },
      "lastName": "XYXBOBXD",
      "facebook": {
        "accounts": [
          {
            "accountId": "QGKQRIUCI",
            "identifiers": [
              {
                "identifierType": "ABTY",
                "identifierValue": "QKBBMX"
              }
            ]
          }
        ]
      },
      "wechat": {
        "accounts": [
          {
            "accountId": "SMBPSV",
            "identifiers": [
              {
                "identifierType": "LUYDCNDJS",
                "identifierValue": "KULPIWXO"
              }
            ]
          }
        ]
      },
      "tmall": {
        "accounts": [
          {
            "accountId": "HNVXM",
            "identifiers": [
              {
                "identifierType": "DWRN",
                "identifierValue": "PESYALZ"
              }
            ]
          }
        ]
      },
      "toabao": {
        "accounts": [
          {
            "accountId": "QNQYTSF",
            "identifiers": [
              {
                "identifierType": "VKBVQFC",
                "identifierValue": "NGCLUF"
              }
            ]
          }
        ]
      },
      "web_engage": {
        "accounts": [
          {
            "accountId": "GFEWU",
            "identifiers": [
              {
                "identifierType": "USZKRHNXL",
                "identifierValue": "NKSIQJT"
              }
            ]
          }
        ]
      },
      "line": {
        "accounts": [
          {
            "accountId": "NWNF",
            "identifiers": [
              {
                "identifierType": "GLFGQRYR",
                "identifierValue": "MJPYCHWB"
              }
            ]
          }
        ]
      },
      "martjack": {
        "accounts": [
          {
            "accountId": "OPTTRN",
            "identifiers": [
              {
                "identifierType": "NYM",
                "identifierValue": "VCZPUTDIS"
              }
            ]
          }
        ]
      },
      "customerId": 1139,
      "jd": {
        "accounts": [
          {
            "accountId": "LFJGZOV",
            "identifiers": [
              {
                "identifierType": "KZKK",
                "identifierValue": "BLX"
              }
            ]
          }
        ]
      },
      "website": {
        "accounts": [
          {
            "accountId": "IDMFL",
            "identifiers": [
              {
                "identifierType": "GFHNE",
                "identifierValue": "JVKRGVIRY"
              }
            ]
          }
        ]
      },
      "firstName": "SPADQTBRST",
      "instore": {
        "id": 3776,
        "mobile": "KIVZWBSWU",
        "email": "LGH",
        "externalId": "GCXBVSYWE",
        "cardnumber": "BFGFBNB",
        "cardexternalid": "RQAYWSDU",
        "cardNumbers": [
          "QSGIOR"
        ]
      }
    },
    "entityInformation": {
      "entityType": "WNYOTLMBAB",
      "entityId": 1638
    },
    "loyaltyProgramId": 7002,
    "partnerProgramId": 6764,
    "partnerProgramName": "GTJILKX",
    "partnerProgramType": "RMUMLGOLP",
    "customerPartnerProgramDetails": {
      "partnerTierExpiryDate": "GJXKZF",
      "partnerTierNumber": 6088,
      "membershipNumber": "IADVZIUL",
      "membershipExpiryDate": "JAEKROMG"
    }
  },
  "refId": "LOPQJ",
  "loyaltyEventId": "VKUXGJE",
  "apiRequestId": "LQBKAZX",
  "eventId": "TZHTSLT",
  "createdAt": 3563,
  "traceAttributes": {
    "UHZKMXCUUR": "OIUEFPPL",
    "TXK": "PZNHMBJ",
    "KFOCBJNBH": "NATQTS",
    "ATVDS": "OVFE",
    "KJLL": "XAILCKEJMJ",
    "DAOUIKECG": "YAHMJPHYZD"
  },
  "orgId": 917
}
```

## Partner Program Updated (partnerProgramUpdated)

Notifies when a partner program is updated.

```json Enriched payload
{
   "eventName":"partnerProgramUpdated",
   "eventId":"caff89da-4c1c-4a5c-a27d-8f4f6f74f541",
   "orgId":50191,
   "refId":"50191_esJyjQ23RQ",
   "apiRequestId":"95d1d0d76dda1565a3c2905f230c3975",
   "createdAt":1622457292026,
   "data":{
      "customerIdentifiers":{
         "customerId":354971193,
         "instore":{
            "mobile":"919666308709",
            "email":"autoemail_919666308709@autogen.co.in",
            "externalId":"919666308709"
         }
      },
      "loyaltyProgramId":855,
      "partnerProgramId":25,
      "partnerProgramName":"Demo-p1",
      "partnerProgramType":"EXTERNAL",
      "updateType":"UPGRADE",
      "customerPartnerProgramDetails":{
         "partnerTierExpiryDate":"2021-06-29",
         "partnerTierNumber":2,
         "membershipNumber":"123-asa3"
      }
   },
   "loyaltyEventId":null
}
```
```json Raw payload
{
  "eventName": "partnerProgramUpdated",
  "eventLogId": 8439,
  "data": {
    "customerIdentifiers": {
      "loyaltyType": "LEJBDOO",
      "ecommerce": {
        "accounts": [
          {
            "accountId": "DMHVVFZJ",
            "identifiers": [
              {
                "identifierType": "UWOOILMBD",
                "identifierValue": "TQKDLIBUWD"
              }
            ]
          }
        ]
      },
      "lastName": "DJN",
      "facebook": {
        "accounts": [
          {
            "accountId": "YQPCQNVVG",
            "identifiers": [
              {
                "identifierType": "MDZ",
                "identifierValue": "SNYC"
              }
            ]
          }
        ]
      },
      "wechat": {
        "accounts": [
          {
            "accountId": "DUV",
            "identifiers": [
              {
                "identifierType": "NHVPAXKL",
                "identifierValue": "MSUSPUHU"
              }
            ]
          }
        ]
      },
      "tmall": {
        "accounts": [
          {
            "accountId": "OKKNHFXM",
            "identifiers": [
              {
                "identifierType": "FJHMVV",
                "identifierValue": "SSRAOEK"
              }
            ]
          }
        ]
      },
      "toabao": {
        "accounts": [
          {
            "accountId": "MMQWW",
            "identifiers": [
              {
                "identifierType": "QEB",
                "identifierValue": "YUEYM"
              }
            ]
          }
        ]
      },
      "web_engage": {
        "accounts": [
          {
            "accountId": "URMGYALHF",
            "identifiers": [
              {
                "identifierType": "OUEGTKSC",
                "identifierValue": "EHGJ"
              }
            ]
          }
        ]
      },
      "line": {
        "accounts": [
          {
            "accountId": "HCKM",
            "identifiers": [
              {
                "identifierType": "GZX",
                "identifierValue": "RKNIMAL"
              }
            ]
          }
        ]
      },
      "martjack": {
        "accounts": [
          {
            "accountId": "WDGDOIUDIG",
            "identifiers": [
              {
                "identifierType": "OFLMRLD",
                "identifierValue": "GZHNKKILU"
              }
            ]
          }
        ]
      },
      "customerId": 7659,
      "jd": {
        "accounts": [
          {
            "accountId": "UWPG",
            "identifiers": [
              {
                "identifierType": "TQVYJV",
                "identifierValue": "DOM"
              }
            ]
          }
        ]
      },
      "website": {
        "accounts": [
          {
            "accountId": "GBN",
            "identifiers": [
              {
                "identifierType": "CYPBAXDC",
                "identifierValue": "RQYYKOSEWB"
              }
            ]
          }
        ]
      },
      "firstName": "UQFH",
      "instore": {
        "id": 3368,
        "mobile": "WNETHAYMCA",
        "email": "ZJWAAZ",
        "externalId": "VIZ",
        "cardnumber": "KUN",
        "cardexternalid": "MVJPRVHTET",
        "cardNumbers": [
          "TOP"
        ]
      }
    },
    "entityInformation": {
      "entityType": "HEABBKILS",
      "entityId": 2104
    },
    "loyaltyProgramId": 3757,
    "partnerProgramId": 2584,
    "partnerProgramName": "FSFX",
    "partnerProgramType": "DTJG",
    "updateType": "GNFDPT",
    "customerPartnerProgramDetails": {
      "partnerTierExpiryDate": "AVICMYY",
      "partnerTierNumber": 386,
      "membershipNumber": "BYIHYISA",
      "membershipExpiryDate": "XFYUKVMV"
    }
  },
  "refId": "VAGVK",
  "loyaltyEventId": "KTINDLEXH",
  "apiRequestId": "YMXURYG",
  "eventId": "WPHBLP",
  "createdAt": 6844,
  "traceAttributes": {
    "DEOBNVPG": "AWAXW",
    "CKSXWS": "ORCQVDXFUN",
    "JNKPXB": "WROUKECO",
    "MMZF": "PIKUH",
    "MMLTB": "LKVSNCATRL"
  },
  "orgId": 377
}
```

## Partner Program Delinked (partnerProgramDelinked)

Notifies when a partner program linked to a user's loyalty program is removed.

```json Enriched payload
{
  "eventId": "1ef12ace-12f2-41c6-9655-7c016f5adb65",
  "eventType": "partnerProgramDelinked",
  "consumerGroupId": null,
  "actionType": "START",
  "timeStamp": 1683872179078,
  "attributes": {
    "createdAt": 1683872179035,
    "data": {
      "customerIdentifiers": {
        "customerId": 6529619,
        "instore": {
          "mobile": "658750602 4",
          "email": "romieshafiq123@gmail.com"
        }
      },
      "entityInformation": {
        "entityType": "USER",
        "entityId": 6529619
      },
      "loyaltyProgramId": 1115,
      "partnerProgramId": 46,
      "partnerProgramName": " Riders",
      "partnerProgramType": "SUPPLEMENTARY"
    },
    "eventName": "partnerProgramDelinked",
    "refId": "151197_j6THoPLbHd",
    "apiRequestId": "cd49688e-2bb6-4ca5-bfd4-5ec8acb10678",
    "orgId ": 151197
  }
}
```
```json Raw payload
{
  "eventName": "partnerProgramDelinked",
  "eventLogId": 8456,
  "data": {
    "customerIdentifiers": {
      "loyaltyType": "RQHPT",
      "ecommerce": {
        "accounts": [
          {
            "accountId": "ITAEPXM",
            "identifiers": [
              {
                "identifierType": "ZVZS",
                "identifierValue": "RJWTEBM"
              }
            ]
          }
        ]
      },
      "lastName": "LXFH",
      "facebook": {
        "accounts": [
          {
            "accountId": "QRP",
            "identifiers": [
              {
                "identifierType": "DYLJNTJEF",
                "identifierValue": "TCDBURIB"
              }
            ]
          }
        ]
      },
      "wechat": {
        "accounts": [
          {
            "accountId": "IODFKZO",
            "identifiers": [
              {
                "identifierType": "XDJZY",
                "identifierValue": "YMD"
              }
            ]
          }
        ]
      },
      "tmall": {
        "accounts": [
          {
            "accountId": "HWWJNCT",
            "identifiers": [
              {
                "identifierType": "FIJYA",
                "identifierValue": "XDV"
              }
            ]
          }
        ]
      },
      "toabao": {
        "accounts": [
          {
            "accountId": "FZIUTQ",
            "identifiers": [
              {
                "identifierType": "DUSJEOJOD",
                "identifierValue": "RLVAMDPLJL"
              }
            ]
          }
        ]
      },
      "web_engage": {
        "accounts": [
          {
            "accountId": "IJVM",
            "identifiers": [
              {
                "identifierType": "HLVNX",
                "identifierValue": "LBIB"
              }
            ]
          }
        ]
      },
      "line": {
        "accounts": [
          {
            "accountId": "DBRKF",
            "identifiers": [
              {
                "identifierType": "CHXAW",
                "identifierValue": "UXOHIKJ"
              }
            ]
          }
        ]
      },
      "martjack": {
        "accounts": [
          {
            "accountId": "PMVVOPCV",
            "identifiers": [
              {
                "identifierType": "EBEMAYZH",
                "identifierValue": "GPWJFTKP"
              }
            ]
          }
        ]
      },
      "customerId": 3367,
      "jd": {
        "accounts": [
          {
            "accountId": "ANASG",
            "identifiers": [
              {
                "identifierType": "JVN",
                "identifierValue": "RLZFCCW"
              }
            ]
          }
        ]
      },
      "website": {
        "accounts": [
          {
            "accountId": "AIRRMPARV",
            "identifiers": [
              {
                "identifierType": "TIXLYVZXBS",
                "identifierValue": "LPANAQ"
              }
            ]
          }
        ]
      },
      "firstName": "MGO",
      "instore": {
        "id": 3271,
        "mobile": "ZZXXIGM",
        "email": "IULERXDZU",
        "externalId": "CZMQ",
        "cardnumber": "AQLYMJZ",
        "cardexternalid": "ORQ",
        "cardNumbers": [
          "KJV"
        ]
      }
    },
    "entityInformation": {
      "entityType": "TUZGQCHCG",
      "entityId": 9893
    },
    "loyaltyProgramId": 9147,
    "partnerProgramId": 5874,
    "partnerProgramName": "KHGLGZIDTF",
    "partnerProgramType": "JASXHIUM"
  },
  "refId": "ZQFKHJTJN",
  "loyaltyEventId": "XQQCNWF",
  "apiRequestId": "TGFEUPE",
  "eventId": "CWI",
  "createdAt": 2485,
  "traceAttributes": {
    "HTNIBD": "JXFEU",
    "AGWPLD": "PNHKOTSC"
  },
  "orgId": 6826
}
```

## Supplementary Partner Program Expiry Reminder (supplementaryMembershipExpiryReminder)

Notifies when a a supplementary membership linked to a loyalty program is about to expire. A supplementary loyalty program is a smaller program that operates alongside primary loyalty programs but runs for a shorter duration.

```json Enriched payload
{
   "eventName":"supplementaryMembershipExpiryReminder",
   "eventId":"e084e887-e1d5-45cf-b2bf-55024efeb8fe",
   "orgId":50191,
   "refId":"50191_90ab89ff-ca0d-4ccd-8b40-2b36614d4c20_b1",
   "apiRequestId":"dee1c05f-bbd1-407e-8244-ec4f36a8dcf3",
   "createdAt":1622518207403,
   "data":{
      "customerIdentifiers":{
         "customerId":354971186,
         "instore":{
            "mobile":"919100166820",
            "email":"autoemail_919100166820@autogen.co.in",
            "externalId":"919100166820"
         }
      },
      "loyaltyProgramId":855,
      "partnerProgramId":22,
      "partnerProgramName":"SPprogram1",
      "scheduledExpiryDate":"2021-06-01"
   },
   "loyaltyEventId":null
}
```
```json Raw payload
{
  "eventName": "supplementaryMembershipExpiryReminder",
  "eventLogId": 4687,
  "data": {
    "customerIdentifiers": {
      "loyaltyType": "SQZDMVHQE",
      "ecommerce": {
        "accounts": [
          {
            "accountId": "TLNS",
            "identifiers": [
              {
                "identifierType": "ZSVRRTO",
                "identifierValue": "NEBDRE"
              }
            ]
          }
        ]
      },
      "lastName": "XMNU",
      "facebook": {
        "accounts": [
          {
            "accountId": "YKZZYQDJ",
            "identifiers": [
              {
                "identifierType": "ENVZTUBIRE",
                "identifierValue": "VIIXHNF"
              }
            ]
          }
        ]
      },
      "wechat": {
        "accounts": [
          {
            "accountId": "MRVDWF",
            "identifiers": [
              {
                "identifierType": "XHOGBDWK",
                "identifierValue": "SVCKCBNFIA"
              }
            ]
          }
        ]
      },
      "tmall": {
        "accounts": [
          {
            "accountId": "YMBWONLED",
            "identifiers": [
              {
                "identifierType": "YMACNEHBXL",
                "identifierValue": "PICQC"
              }
            ]
          }
        ]
      },
      "toabao": {
        "accounts": [
          {
            "accountId": "GQLUZUEA",
            "identifiers": [
              {
                "identifierType": "MKHO",
                "identifierValue": "KWMKNHEGV"
              }
            ]
          }
        ]
      },
      "web_engage": {
        "accounts": [
          {
            "accountId": "KPRP",
            "identifiers": [
              {
                "identifierType": "YIB",
                "identifierValue": "GWMVS"
              }
            ]
          }
        ]
      },
      "line": {
        "accounts": [
          {
            "accountId": "TINTZBSZL",
            "identifiers": [
              {
                "identifierType": "HXSL",
                "identifierValue": "ACMYAY"
              }
            ]
          }
        ]
      },
      "martjack": {
        "accounts": [
          {
            "accountId": "MFAXC",
            "identifiers": [
              {
                "identifierType": "RBA",
                "identifierValue": "ZEOPICN"
              }
            ]
          }
        ]
      },
      "customerId": 4785,
      "jd": {
        "accounts": [
          {
            "accountId": "MYTNEOQDXI",
            "identifiers": [
              {
                "identifierType": "CDDX",
                "identifierValue": "CJJQWZCN"
              }
            ]
          }
        ]
      },
      "website": {
        "accounts": [
          {
            "accountId": "ZZFWPKNXOE",
            "identifiers": [
              {
                "identifierType": "FBSDZCAR",
                "identifierValue": "KCSCOMVSUL"
              }
            ]
          }
        ]
      },
      "firstName": "PUTTIM",
      "instore": {
        "id": 5415,
        "mobile": "QTTMUCBC",
        "email": "NITTGG",
        "externalId": "OROSZ",
        "cardnumber": "HAFLIUQD",
        "cardexternalid": "LHE",
        "cardNumbers": [
          "ZOECGG"
        ]
      }
    },
    "loyaltyProgramId": 7148,
    "partnerProgramId": 3560,
    "partnerProgramName": "SSJJSANCAW",
    "scheduledExpiryDate": "KJIS"
  },
  "refId": "CEZQT",
  "loyaltyEventId": "BPYE",
  "apiRequestId": "WCBGEOSRUX",
  "eventId": "KPE",
  "createdAt": 2544,
  "traceAttributes": {
    "ROPISQNNUR": "EIUHW",
    "JKXM": "RKUSJHHXW",
    "BEFQTHOL": "HVBCM",
    "KZKTNNYCK": "IECEZDQJ",
    "MKLRAKK": "FFSDBG",
    "QAL": "YVKDLVRZD"
  },
  "orgId": 1821
}
```