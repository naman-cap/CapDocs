---
title: Event Schema
excerpt: ''
deprecated: false
hidden: true
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
This page provides the schema of transaction and customer events with sample data.

## Customer

### Customer Added Event

Request Parameters

<Table align={["left","left","left"]}>
  <thead>
    <tr>
      <th>
        Parameter
      </th>

      <th>
        Datatype
      </th>

      <th>
        Description
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        eventName
      </td>

      <td>
        String
      </td>

      <td>
        Name of the event.
      </td>
    </tr>

    <tr>
      <td>
        eventId
      </td>

      <td>
        String
      </td>

      <td>
        Used by the consumer of the event notification for idempotency check, i.e., to check if the event is duplicate or unique before saving the event.\
        If duplicate, the consumer should ignore the event.
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
        Capillary organization ID
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
        Reference ID for the internal debugging purpose.
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
        Internal request ID generated for the API request.
      </td>
    </tr>

    <tr>
      <td>
        createdAt
      </td>

      <td>
        Integer
      </td>

      <td>
        Unix timestamp in milliseconds when the event was stored in Capillary.
      </td>
    </tr>
  </tbody>
</Table>

```json
{
   "eventName":"customerAdded",
   "eventId":"06750c10-dcf1-45de-a0eb-d9c64372feed",
   "orgId":1800,
   "refId":"1800_482579328",
   "apiRequestId":"4b6330d3e10bf660783a9ba77248c9f7",
   "createdAt":1619199042493,
   "data":{
      "loyaltyType":"loyalty",
      "source":"INSTORE",
      "enteredAt":1619199041201,
      "enteredBy":{
         "id":12970395,
         "till":{
            "code":"aa.sit.admin",
            "name":"aa.sit.admin"
         },
         "store":{
            "code":"aa.admin",
            "name":"Air Asia Admin Store",
            "externalId":"AirAsiaAdmin",
            "externalId1":"",
            "externalId2":""
         }
      },
      "customerIdentifiers":{
         "customerId":482579328,
         "instore":{
            "mobile":"testuserfortata",
            "email":"testuserfortata",
            "externalId":"testuserfortata"
         }
      }
   },
   "loyaltyEventId":null
}
```

### Customer Updated Event

Request Parameters

<Table align={["left","left","left"]}>
  <thead>
    <tr>
      <th>
        Parameter
      </th>

      <th>
        Datatype
      </th>

      <th>

      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        loyaltyType
      </td>

      <td>
        Enum
      </td>

      <td>
        Type of customer loyalty - LOYALTY, NON\_LOYALTY
      </td>
    </tr>

    <tr>
      <td>
        source
      </td>

      <td>
        String
      </td>

      <td>
        Capillary organization ID
      </td>
    </tr>

    <tr>
      <td>
        email
      </td>

      <td>
        String
      </td>

      <td>
        Email ID of the customer.
      </td>
    </tr>

    <tr>
      <td>
        mobile
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
        enteredAt
      </td>

      <td>
        Integer
      </td>

      <td>
        Unix timestamp in milliseconds when the event was stored in Capillary.
      </td>
    </tr>

    <tr>
      <td>
        enteredBy
      </td>

      <td>
        String
      </td>

      <td>
        Source from which customer details are updated.\
        Value: FACEBOOK, WEB\_ENGAGE, WECHAT, INSTORE, MARTJACK, TMALL, TAOBAO, JD, ECOMMERCE, WEBSITE, LINE, MOBILE\_APP.
      </td>
    </tr>
  </tbody>
</Table>

```json
{
   "eventName":"customerUpdated",
   "eventId":"599e2d5c-8783-425b-aed7-017d573aef5d",
   "orgId":1800,
   "refId":"1800_482579328",
   "apiRequestId":"a61e24321346ac46f199e1915a6e3528",
   "createdAt":1619199130875,
   "data":{
      "loyaltyType":"loyalty",
      "source":"INSTORE",
      "enteredAt":1619199130263,
      "enteredBy":{
         "id":12859457,
         "till":{
            "code":"tcp.admin.1",
            "name":"tcp.admin.1"
         },
         "store":{
            "code":"tcp.admin",
            "name":"TCP",
            "externalId":"tcpadmin",
            "externalId1":"",
            "externalId2":""
         }
      },
      "updatedFields":[
         
      ],
      "customerIdentifiers":{
         "customerId":482579328,
         "instore":{
            "mobile":"testuserfortata",
            "email":"testuserfortata",
            "externalId":"testuserfortata"
         }
      }
   },
   "loyaltyEventId":null
}
```

## Transaction

### Transaction Added Event (transactionAdded)

Request Parameters

<Table align={["left","left","left"]}>
  <thead>
    <tr>
      <th>
        Parameter
      </th>

      <th>
        Datatype
      </th>

      <th>
        Description
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        amount
      </td>

      <td>
        Double
      </td>

      <td>
        Net transaction amount.
      </td>
    </tr>

    <tr>
      <td>
        billClientId
      </td>

      <td>
        String
      </td>

      <td>
        Unique id of the bill as per the client (org) end.
      </td>
    </tr>

    <tr>
      <td>
        billNumber
      </td>

      <td>
        String
      </td>

      <td>
        Unique transaction number. The uniqueness depends on the configuration.
      </td>
    </tr>

    <tr>
      <td>
        enteredAt
      </td>

      <td>

      </td>

      <td>

      </td>
    </tr>

    <tr>
      <td>
        enteredBy
      </td>

      <td>
        obj
      </td>

      <td>
        Details of the store at which the transaction happened.
      </td>
    </tr>

    <tr>
      <td>
        transactionId
      </td>

      <td>
        long
      </td>

      <td>
        Unique transaction ID generated internally.
      </td>
    </tr>

    <tr>
      <td>
        deliveryStatus
      </td>

      <td>
        Enum
      </td>

      <td>
        Delivery status of the order. Value: PLACED, PROCESSED, SHIPPED, DELIVERED, RETURNED.
      </td>
    </tr>

    <tr>
      <td>
        billType
      </td>

      <td>
        Enum
      </td>

      <td>
        Type of transaction. Supported value:  regular for loyalty transactions. ‘RETURN’ for return transactions.
      </td>
    </tr>

    <tr>
      <td>
        lineItemCount
      </td>

      <td>
        Integer
      </td>

      <td>
        Number of line-items in the transaction.
      </td>
    </tr>

    <tr>
      <td>
        Discount
      </td>

      <td>
        Double
      </td>

      <td>
        Discount availed for the transaction (discount amount).
      </td>
    </tr>

    <tr>
      <td>
        grossAmount
      </td>

      <td>
        Double
      </td>

      <td>
        Transaction amount before discount.
      </td>
    </tr>

    <tr>
      <td>
        currencyCode
      </td>

      <td>
        String
      </td>

      <td>
        ISO currency code that you want to update. For example EUR for Euro, SGD for the Singapore Dollar, CNY for China Yuan Renminbi, SAR Saudi Riyal. For more codes, see ISO currency codes.
      </td>
    </tr>
  </tbody>
</Table>

```json
{
   "eventName":"transactionAdded",
   "eventId":"f8129682-4b57-4029-8761-b291404fae5e",
   "orgId":1231,
   "refId":"1231_2147864816",
   "apiRequestId":"08ccc811706f99919580fdf035c52a72",
   "createdAt":1630927652264,
   "data":{
      "amount":50000,
      "billClientId":"1121888",
      "billNumber":"293866733",
      "enteredAt":1630927646973,
      "transactionId":2147864816,
      "deliveryStatus":"DELIVERED",
      "billType":"MIXED",
      "lineItemCount":2,
      "discount":10,
      "grossAmount":100,
      "currencyCode":" ",
      "enteredBy":{
         "id":15071481,
         "till":{
            "code":"cm.1",
            "name":"cm.1"
         },
         "store":{
            "code":"mergestore1",
            "name":"MERGE FRONT ONE",
            "externalId":"aS123",
            "externalId1":"Q123",
            "externalId2":"ASDA123"
         }
      },
      "customerIdentifiers":{
         "customerId":414935964,
         "instore":{
            
         },
         "wechat":{
            "accounts":[
               {
                  "accountId":"WECHAT-CM",
                  "identifiers":[
                     {
                        "identifierType":"cuid",
                        "identifierValue":"cuid_91796467656"
                     },
                     {
                        "identifierType":"unionId",
                        "identifierValue":"unionId_91796467656"
                     },
                     {
                        "identifierType":"cardnumber",
                        "identifierValue":"card_91796467656"
                     }
                  ]
               }
            ]
         }
      }
   },
   "loyaltyEventId":null
}
```

### Transaction Updated Event (transactionUpdated)

Request Parameters

<Table align={["left","left","left"]}>
  <thead>
    <tr>
      <th>
        Parameter
      </th>

      <th>
        Datatype
      </th>

      <th>
        Description
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        amount
      </td>

      <td>
        Double
      </td>

      <td>
        Net transaction amount.
      </td>
    </tr>

    <tr>
      <td>
        billClientId
      </td>

      <td>
        String
      </td>

      <td>
        Unique id of the bill as per the client (org) end.
      </td>
    </tr>

    <tr>
      <td>
        billNumber
      </td>

      <td>
        String
      </td>

      <td>
        Unique transaction number. The uniqueness depends on the configuration.
      </td>
    </tr>

    <tr>
      <td>
        enteredAt
      </td>

      <td>

      </td>

      <td>

      </td>
    </tr>

    <tr>
      <td>
        enteredBy
      </td>

      <td>
        obj
      </td>

      <td>
        Details of the store at which the transaction happened.
      </td>
    </tr>

    <tr>
      <td>
        transactionId
      </td>

      <td>
        long
      </td>

      <td>
        Unique transaction ID generated internally.
      </td>
    </tr>

    <tr>
      <td>
        deliveryStatus
      </td>

      <td>
        Enum
      </td>

      <td>
        Delivery status of the order. Value: PLACED, PROCESSED, SHIPPED, DELIVERED, RETURNED.
      </td>
    </tr>

    <tr>
      <td>
        billType
      </td>

      <td>
        Enum
      </td>

      <td>
        Type of transaction. Supported value:  regular for loyalty transactions. ‘RETURN’ for return transactions.
      </td>
    </tr>

    <tr>
      <td>
        lineItemCount
      </td>

      <td>
        Integer
      </td>

      <td>
        Number of line-items in the transaction.
      </td>
    </tr>

    <tr>
      <td>
        Discount
      </td>

      <td>
        Double
      </td>

      <td>
        Discount availed for the transaction (discount amount).
      </td>
    </tr>

    <tr>
      <td>
        grossAmount
      </td>

      <td>
        Double
      </td>

      <td>
        Transaction amount before discount.
      </td>
    </tr>

    <tr>
      <td>
        currencyCode
      </td>

      <td>
        String
      </td>

      <td>
        ISO currency code that you want to update. For example EUR for Euro, SGD for Singapore Dollar, CNY for China Yuan Renminbi, SAR Saudi Riyal. For more codes, see ISO currency codes.
      </td>
    </tr>
  </tbody>
</Table>

```json
{
   "eventName":"transactionUpdated",
   "eventId":"4fb0f785-d67f-4cc7-bd0f-489f776b9ffa",
   "orgId":1800,
   "refId":"1800_161440570",
   "apiRequestId":"6ab060b39bca036f5046e61c6b4f4f33",
   "createdAt":1619198938278,
   "data":{
      "amount":30000,
      "billNumber":"trans_update001",
      "enteredAt":1619198817000,
      "transactionId":161440570,
      "deliveryStatus":"DELIVERED",
      "billType":"REGULAR",
      "discount":0,
      "grossAmount":0,
      "enteredBy":{
         "id":12970488
      },
      "customerIdentifiers":{
         "customerId":482579301,
         "instore":{
            "externalId":"22222222222222222"
         }
      }
   },
   "loyaltyEventId":null
}
```

## Points

### Points Issued Event (pointsIssued)

Request Parameters

<Table align={["left","left","left"]}>
  <thead>
    <tr>
      <th>
        Parameter
      </th>

      <th>
        Datatype
      </th>

      <th>
        Description
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        eventName
      </td>

      <td>
        String
      </td>

      <td>
        points
      </td>
    </tr>

    <tr>
      <td>
        eventId
      </td>

      <td>
        String
      </td>

      <td>
        Unique id of the event.
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
        Capillary organization ID
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
        Internal reference ID generated for the API call. Reference ID is a combination of \{orgId}\_\{transactionId/userId}
      </td>
    </tr>

    <tr>
      <td>
        createdAt
      </td>

      <td>
        Datetime
      </td>

      <td>
        Unix timestamp when the event was stored in Capillary.
      </td>
    </tr>

    <tr>
      <td>
        enteredBy
      </td>

      <td>
        obj
      </td>

      <td>
        Details of the store at which the transaction happened.
      </td>
    </tr>

    <tr>
      <td>
        customerId\*
      </td>

      <td>
        String
      </td>

      <td>
        Include either Capillary generated userId or source-specific customer identifiers depending on the requirement.
      </td>
    </tr>

    <tr>
      <td>
        ActivityName
      </td>

      <td>

      </td>

      <td>

      </td>
    </tr>

    <tr>
      <td>
        ActivityType
      </td>

      <td>

      </td>

      <td>

      </td>
    </tr>
  </tbody>
</Table>

Example of points Issued on Transaction/Add

```json
{
   "body":{
      "eventName":"pointsIssued",
      "eventId":"4531fac4-1c36-45a1-a15f-d9e4a4642eb5",
      "orgId":50614,
      "refId":"50614_Qs5tWmbe3J",
      "apiRequestId":"6c5f99be64cc8c1d1b35ce798296dc5d",
      "createdAt":1619427044783,
      "data":{
         "customerIdentifiers":{
            "customerId":406247343,
            "instore":{
               "mobile":"919650000000",
               "email":"autoemail@autogen.co.in"
            }
         },
         "triggeringActivity":{
            "name":"TransactionAdd",
            "identifiers":[
               {
                  "key":"billNumber",
                  "value":"trans_BillNo_5918766189"
               },
               {
                  "key":"BillId",
                  "value":"2147619294"
               },
               {
                  "key":"billNumber",
                  "value":"trans_BillNo_5918766189"
               },
               {
                  "key":"BillLineItemId",
                  "value":"2152968988"
               },
               {
                  "key":"billNumber",
                  "value":"trans_BillNo_5918766189"
               }
            ],
            "enteredBy":{
               "id":50021318,
               "till":{
                  "code":"emftill1",
                  "name":"emftill1"
               },
               "store":{
                  "code":"emf_auto.store1",
                  "name":"EmfAutoStore",
                  "externalId":"EMFauto1",
                  "externalId1":"",
                  "externalId2":""
               }
            }
         },
         "loyaltyProgramDetails":{
            "id":1398,
            "name":"EMF_AutoDefaultProgram",
            "isDefault":true,
            "pointsToCurrencyRatio":1,
            "tiers":[
               {
                  "tierNumber":1,
                  "tierName":"Silver"
               },
               {
                  "tierNumber":2,
                  "tierName":"Gold"
               },
               {
                  "tierNumber":3,
                  "tierName":"Diamond"
               },
               {
                  "tierNumber":4,
                  "tierName":"Ruby"
               }
            ]
         },
         "loyaltyProgramId":1398,
         "programCurrentPoints":2261.5,
         "programLifetimePoints":2261.5,
         "totalPointsIssued":3884.5,
         "regularPointsIssued":3123,
         "regularPointsBreakup":[
            {
               "points":500,
               "expiryAt":"2021-05-01"
            },
            {
               "points":333.333,
               "expiryAt":"2021-05-06"
            }
         ],
         "promotionalPointsIssued":[
            {
               "promotionIdentifier":"80542",
               "promotionType":"BILL_PROMOTION",
               "promotionPoints":761.5,
               "promotionPointsExpiryDate":"2021-04-26"
            }
         ],
         "promisedPointsIssued":[
            {
               "promisedPoints":500,
               "isExternalTriggerBased":true,
               "promisedPointsConversionDate":"2021-04-26"
            },
            {
               "promisedPoints":333.333,
               "isExternalTriggerBased":false,
               "promisedPointsConversionDate":"2021-04-28"
            }
         ]
      },
      "loyaltyEventId":"Qs5tWmbe3J"
   }
}
```

### Points Redeemed Event (pointsRedeemed)

Sample schema of group program redemption.

```json
{
   "body":{
      "eventName":"pointsRedeemed",
      "eventId":"b4743495-399b-4662-81e2-1455ca770f00",
      "orgId":50614,
      "refId":"50614_aNsL8RiCIp",
      "apiRequestId":"d1bc99d398412c329ef47b21a6746125",
      "createdAt":1620042311898,
      "data":{
         "customerIdentifiers":{
            "customerId":406361177,
            "instore":{
               "mobile":"919627263745",
               "email":"autoemail_919627263745@autogen.co.in"
            }
         },
         "triggeringActivity":{
            "name":"PointsRedemption",
            "identifiers":[
               {
                  "key":"billId",
                  "value":"2147644775"
               },
               {
                  "key":"redemptionId",
                  "value":"hhSRLt"
               }
            ],
            "enteredBy":{
               "id":50021318,
               "till":{
                  "code":"emftill1",
                  "name":"emftill1"
               },
               "store":{
                  "code":"emf_auto.store1",
                  "name":"EmfAutoStore",
                  "externalId":"EMFauto1",
                  "externalId1":"",
                  "externalId2":""
               }
            }
         },
         "loyaltyProgramDetails":{
            "id":1398,
            "name":"EMF_AutoDefaultProgram",
            "isDefault":true,
            "pointsToCurrencyRatio":1,
            "tiers":[
               {
                  "tierNumber":1,
                  "tierName":"Silver"
               },
               {
                  "tierNumber":2,
                  "tierName":"Gold"
               },
               {
                  "tierNumber":3,
                  "tierName":"Diamond"
               },
               {
                  "tierNumber":4,
                  "tierName":"Ruby"
               }
            ]
         },
         "loyaltyProgramId":1398,
         "totalPointsRedeemed":40,
         "redemptionSummaryId":8768,
         "redeemedPointsCurrencyValue":40,
         "redemptionNotes":"redeem",
         "redemptionBillNumber":"trans_BillNo_9807417180",
         "isGroupRedemption":true,
         "redemptionFromEarningPrograms":[
            {
               "programId":1398,
               "pointsRedeemed":40,
               "programCurrentPoints":1260
            }
         ]
      },
      "loyaltyEventId":"aNsL8RiCIp"
   }
}
```

Sample schema of Participating Program Redemption

```json
{
   "eventName":"pointsRedeemed",
   "eventId":"ABC-87484sdas&$",
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

### Promised Points Conversion to Current Points Event (promisedToCurrentPointsConversion)

```json
{
   "eventName":"promisedToCurrentPointsConversion",
   "eventId":"9c4b09c2-f564-4c6a-abb9-3ecd14506ec4",
   "orgId":50241,
   "refId":"50241_null",
   "apiRequestId":"66f7e67c-576d-4120-9dd2-9cdeb1878063",
   "createdAt":1637753410382,
   "data":{
      "customerIdentifiers":{
         "customerId":341598908,
         "instore":{
            "mobile":"919700000380"
         }
      },
      "earningActivityReference":[
         {
            "name":"CustomerRegistration",
            "enteredAt":1637731450000,
            "pointsConverted":500,
            "identifiers":[
               {
                  "key":"billNumber",
                  "value":"null"
               },
               {
                  "key":"EventLogId",
                  "value":"1805818"
               }
            ]
         }
      ],
      "loyaltyProgramDetails":{
         "id":934,
         "name":"Ishita_OrgDefaultProgram",
         "isDefault":true,
         "pointsToCurrencyRatio":1,
         "tiers":[
            {
               "tierNumber":1,
               "tierName":"Bronze"
            },
            {
               "tierNumber":2,
               "tierName":"Silver"
            }
         ]
      },
      "loyaltyProgramId":934,
      "pointsConverted":500,
      "programCurrentPoints":500,
      "programLifetimePoints":500
   },
   "loyaltyEventId":null
}
```

### Points Expired Event (PointsExpired)

```json
{
   "eventName":"pointsExpired",
   "eventId":"abacd-12345-ABCD",
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

### Points Expiry Reminder Event (pointsExpiryReminder)

```json
{
   "eventName":"pointsExpiryReminder",
   "eventId":"abacd-12345",
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
      "scheduledExpiryDate":"2020-01-19",
      "pointsScheduledForExpiry":1000
   }
}
```

### Points Transferred Initiated Event (pointsTransferInitiated)

```json
{
   "eventName":"pointsTransferredInitiated",
   "eventId":"5a6a4355-e0de-408b-af0b-09263f4a3a3c",
   "orgId":1800,
   "refId":"1800_wKYspGLRNC",
   "apiRequestId":"e6d312257f71e0a8705f602cbf91695d",
   "createdAt":1619199662949,
   "data":{
      "customerIdentifiers":{
         "customerId":481191981,
         "instore":{
            "externalId":"CAP00005"
         }
      },
      "loyaltyProgramDetails":{
         "id":1422,
         "name":"Tata IHCL Loyalty",
         "isDefault":false,
         "pointsToCurrencyRatio":1,
         "tiers":[
            {
               "tierNumber":1,
               "tierName":"Copper*"
            },
            {
               "tierNumber":2,
               "tierName":"Copper"
            },
            {
               "tierNumber":3,
               "tierName":"Silver"
            },
            {
               "tierNumber":4,
               "tierName":"Gold"
            },
            {
               "tierNumber":5,
               "tierName":"Platinum"
            }
         ]
      },
      "loyaltyProgramId":1422,
      "totalPointsTransferred":10,
      "transferReceivingCustomerIdentifiers":{
         "customerId":473772509,
         "instore":{
            "mobile":"e59baa6df5a41d818608688fe3dcaccc",
            "email":"e59baa6df5a41d818608688fe3dcaccc",
            "externalId":"e59baa6df5a41d818608688fe3dcaccc"
         }
      },
      "redemptionFromEarningPrograms":[
         {
            "programId":1422,
            "pointsRedeemed":10,
            "programCurrentPoints":480
         }
      ]
   },
   "loyaltyEventId":"wKYspGLRNC"
}
```

### Points Transferred Received (pointsTransferReceived)

```json
{
   "eventName":"pointsTransferredReceived",
   "eventId":"ae51684a-5e64-4d1e-b48a-9dcd4fc5c6ec",
   "orgId":1800,
   "refId":"1800_wKYspGLRNC",
   "apiRequestId":"e6d312257f71e0a8705f602cbf91695d",
   "createdAt":1619199662971,
   "data":{
      "customerIdentifiers":{
         "customerId":473772509,
         "instore":{
            "mobile":"e59baa6df5a41d818608688fe3dcaccc",
            "email":"e59baa6df5a41d818608688fe3dcaccc",
            "externalId":"e59baa6df5a41d818608688fe3dcaccc"
         }
      },
      "loyaltyProgramDetails":{
         "id":1422,
         "name":"Tata IHCL Loyalty",
         "isDefault":false,
         "pointsToCurrencyRatio":1,
         "tiers":[
            {
               "tierNumber":1,
               "tierName":"Copper*"
            },
            {
               "tierNumber":2,
               "tierName":"Copper"
            },
            {
               "tierNumber":3,
               "tierName":"Silver"
            },
            {
               "tierNumber":4,
               "tierName":"Gold"
            },
            {
               "tierNumber":5,
               "tierName":"Platinum"
            }
         ]
      },
      "loyaltyProgramId":1422,
      "totalPointsTransferred":10,
      "transferInitiatingCustomerIdentifiers":{
         "customerId":481191981,
         "instore":{
            "externalId":"CAP00005"
         }
      }
   },
   "loyaltyEventId":"wKYspGLRNC"
}
```

### Redeemed Points Reversed Event (redeemedPointsReversed)

```json
{
   "body":{
      "eventName":"redeemedPointsReversed",
      "eventId":"a95295a5-9b1c-41a0-a016-35c21a122eab",
      "orgId":50614,
      "refId":"50614_55a977cd872a51bdc00a998997ccf85f",
      "apiRequestId":"55a977cd872a51bdc00a998997ccf85f",
      "createdAt":1620043229080,
      "data":{
         "customerIdentifiers":{
            "customerId":406361177,
            "instore":{
               "mobile":"919627263745",
               "email":"autoemail_919627263745@autogen.co.in"
            }
         },
         "triggeringActivity":{
            "name":"PointsRedemptionReversal",
            "identifiers":[
               {
                  "key":"redemptionId",
                  "value":"hhSRLt"
               }
            ],
            "enteredBy":{
               "id":50021318,
               "till":{
                  "code":"emftill1",
                  "name":"emftill1"
               },
               "store":{
                  "code":"emf_auto.store1",
                  "name":"EmfAutoStore",
                  "externalId":"EMFauto1",
                  "externalId1":"",
                  "externalId2":""
               }
            }
         },
         "loyaltyProgramDetails":{
            "id":1398,
            "name":"EMF_AutoDefaultProgram",
            "isDefault":true,
            "pointsToCurrencyRatio":1,
            "tiers":[
               {
                  "tierNumber":1,
                  "tierName":"Silver"
               },
               {
                  "tierNumber":2,
                  "tierName":"Gold"
               },
               {
                  "tierNumber":3,
                  "tierName":"Diamond"
               },
               {
                  "tierNumber":4,
                  "tierName":"Ruby"
               }
            ]
         },
         "loyaltyProgramId":1398,
         "redeemedPointsReversed":10,
         "redemptionSummaryId":8770,
         "redemptionReversalToEarningPrograms":[
            {
               "programId":1398,
               "redeemedPointsReversed":10,
               "programCurrentPoints":1280
            }
         ]
      },
      "loyaltyEventId":"55a977cd872a51bdc00a998997ccf85f"
   }
}
```

### Issued Points Reversed Event (issuedPointsReversed)

```json
{
   "body":{
      "eventName":"issuedPointsReversed",
      "eventId":"43618011-da15-44b4-a779-97062b4f1955",
      "orgId":50614,
      "refId":"50614_X3gx2rgzLJ",
      "apiRequestId":"1c63828647dd3177650187311c63b025",
      "createdAt":1620042294779,
      "data":{
         "customerIdentifiers":{
            "customerId":406361177,
            "instore":{
               "mobile":"919627263745",
               "email":"autoemail_919627263745@autogen.co.in"
            }
         },
         "triggeringActivity":{
            "name":"ReturnBill",
            "identifiers":[
               {
                  "key":"billId",
                  "value":"2147644775"
               },
               {
                  "key":"billNumber",
                  "value":"trans_BillNo_9807417180"
               }
            ],
            "enteredBy":{
               "id":50021318,
               "till":{
                  "code":"emftill1",
                  "name":"emftill1"
               },
               "store":{
                  "code":"emf_auto.store1",
                  "name":"EmfAutoStore",
                  "externalId":"EMFauto1",
                  "externalId1":"",
                  "externalId2":""
               }
            }
         },
         "loyaltyProgramDetails":{
            "id":1398,
            "name":"EMF_AutoDefaultProgram",
            "isDefault":true,
            "pointsToCurrencyRatio":1,
            "tiers":[
               {
                  "tierNumber":1,
                  "tierName":"Silver"
               },
               {
                  "tierNumber":2,
                  "tierName":"Gold"
               },
               {
                  "tierNumber":3,
                  "tierName":"Diamond"
               },
               {
                  "tierNumber":4,
                  "tierName":"Ruby"
               }
            ]
         },
         "loyaltyProgramId":1398,
         "programCurrentPoints":1300,
         "programLifetimePoints":1300,
         "totalIssuedPointsReversed":2734.502,
         "regularPointsReversed":1711.5,
         "promisedPointsReversed":1023.002,
         "promotionalPointsReversed":[
            {
               "promotionIdentifier":"80542",
               "promotionType":"BILL",
               "promotionPoints":811.5
            },
            {
               "promotionIdentifier":"huhutest2",
               "promotionType":"LINEITEM",
               "promotionPoints":100
            },
            {
               "promotionIdentifier":"huhutest2",
               "promotionType":"LINEITEM",
               "promotionPoints":200
            }
         ]
      },
      "loyaltyEventId":"X3gx2rgzLJ"
   }
}
```

## Coupon

### Coupon Issue Event (CouponIssue)

```json
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

### Coupon Redeem Event (CouponRedeem)

```json
{
   "eventName":"CouponRedeem",
   "eventId":"3e7bd633-1864-4e26-9f47-0c50f7a6e64c",
   "orgId":1231,
   "refId":"1231_353122_9575291",
   "apiRequestId":"3c6e2d73-9002-45fa-a9f3-6b09376b5f87",
   "createdAt":1630932050423,
   "data":{
      "addedAt":1630932050423,
      "addedBy":{
         "id":15071481
      },
      "coupon":{
         "id":397759647,
         "code":"2YPHHFQR",
         "redemptionId":9575291,
         "redemptionDate":1630932050000,
         "series_info":{
            "id":353122,
            "description":"traffic_simulator",
            "seriesType":"LOYALTY",
            "clientHandlingType":"DISC_CODE",
            "valid_till":2556037800000,
            "discount_code":"NO_VALUE",
            "discount_type":"ABS",
            "discount_value":500
         }
      },
      "customerIdentifiers":{
         "customerId":414935964,
         "instore":{
            
         },
         "wechat":{
            "accounts":[
               {
                  "accountId":"WECHAT-CM",
                  "identifiers":[
                     {
                        "identifierType":"cuid",
                        "identifierValue":"cuid_91796467656"
                     },
                     {
                        "identifierType":"unionId",
                        "identifierValue":"unionId_91796467656"
                     },
                     {
                        "identifierType":"cardnumber",
                        "identifierValue":"card_91796467656"
                     }
                  ]
               }
            ]
         }
      },
      "transaction":{
         "bill_id":0,
         "number":""
      }
   },
   "loyaltyEventId":null
}
```

## Tier

### Tier Upgraded (tierUpgraded)

```json
{
   "body":{
      "eventName":"tierUpgraded",
      "eventId":"00c8084c-0db4-4411-875b-21249dbfc4d8",
      "orgId":50614,
      "refId":"50614_iLsAlmiyX8",
      "apiRequestId":"a07a098f6c10459da0fd41cd6abc8172",
      "createdAt":1619517441506,
      "data":{
         "customerIdentifiers":{
            "customerId":406273266,
            "instore":{
               "mobile":"919845600000",
               "email":"dummyemail@gmail.com"
            }
         },
         "loyaltyProgramDetails":{
            "id":1427,
            "name":"EMF_autoProgram2",
            "isDefault":false,
            "pointsToCurrencyRatio":1,
            "tiers":[
               {
                  "tierNumber":1,
                  "tierName":"SilverP2"
               },
               {
                  "tierNumber":2,
                  "tierName":"GoldP2"
               },
               {
                  "tierNumber":3,
                  "tierName":"Diamond"
               }
            ]
         },
         "loyaltyProgramId":1427,
         "previousTierNumber":1,
         "upgradedTierNumber":2,
         "tierExpiryDate":"2121-04-27",
         "notes":"Upgrading to Slab : Slab[2]: Name GoldP2 Description test , Criteria: Primary",
         "upgradeType":"STRATEGY"
      },
      "loyaltyEventId":"iLsAlmiyX8"
   }
}
```

### Tier Renewed Event (tierRenewed)

```json
{
   "eventName":"tierRenewed",
   "eventId":"12345abacde",
   "orgId":1655,
   "refId":"1655_123684494987123",
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
      "currentTierNumber":3,
      "tierExpiryDate":"2020-04-25",
      "notes":"Renewing to Slab : Slab[2]: Name Cutter Description Cut 2",
      "renewType":"STRATEGY"
   }
}
```

### Tier Downgraded Event (tierDowngraded)

```json
{
   "eventName":"tierDowngraded",
   "eventId":"12345XYZE",
   "orgId":1655,
   "refId":"1655_1237123",
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
      "downgradedTierNumber":1,
      "previousTierNumber":3,
      "tierExpiryDate":"2020-04-25"
   }
}
```

### Tier Downgrade Reminder Event (tierDowngradeReminder)

```json
{
   "eventName":"tierDowngradeReminder",
   "eventId":"XYZE12345",
   "orgId":1655,
   "refId":"1655_14555523",
   "createdAt":156474848484,
   "data":{
      "customerIdentifiers":{
         "customerId":876,
         "instore":{
            "mobile":"919740390055",
            "email":"tom@email.com",
            "externalId":"536236462453"
         }
      },
      "triggeringActivity":{
         
      },
      "loyaltyProgramId":1487,
      "scheduledDowngradeDate":"2020-04-25",
      "currentTierNumber":3
   }
}
```

## Partner Program

### Partner Program Linked (partnerProgramLinked)

```json
{
   "eventName":"partnerProgramLinked",
   "eventId":"fcec96c2-eb9b-420b-80ed-71eba7f70837",
   "orgId":50191,
   "refId":"50191_rxw3wyNBGd",
   "apiRequestId":"a150f30e86f3749958f553809c6d3555",
   "createdAt":1622457270215,
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
      "customerPartnerProgramDetails":{
         "partnerTierExpiryDate":"2021-06-30",
         "partnerTierNumber":1,
         "membershipNumber":"123-asa3"
      }
   },
   "loyaltyEventId":null
}
```

### Partner Program Updated (partnerProgramUpdated)

```json
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

### Partner Program Delinked (partnerProgramDelinked)

```json
{
   "eventName":"partnerProgramDelinked",
   "eventId":"3f9f300b-6110-462f-935a-0e34c1ad74f6",
   "orgId":50191,
   "refId":"50191_5bRlm026Ms",
   "apiRequestId":"72b54b94daf4a4de076b67915442a9dd",
   "createdAt":1622457570813,
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
      "partnerProgramId":24,
      "partnerProgramName":"NoTier-p1",
      "partnerProgramType":"EXTERNAL"
   },
   "loyaltyEventId":null
}
```

### Supplementary Partner Program Expiry Reminder (supplementaryMembershipExpiryReminder)

```json
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

## Marvel Rewards

### RewardIssued

* "type": VOUCHER, POINTS, physical voucher, free voucher, 
* "redemptionType": INTOUCH\_REWARD, VENDOR\_INTOUCH\_REWARD, VENDOR\_ONLY\_REWARD

```json
{
   "eventName":"rewardIssued",
   "eventId":"e8a80e96-4e0d-4c46-b15a-8de0636e5a0d",
   "orgId":151060,
   "refId":"151060_868",
   "apiRequestId":"53d7d026-ffbf-4e8d-a1d2-09507a782856",
   "createdAt":1619119175801,
   "data":{
      "customerIdentifiers":{
         "customerId":8381714,
         "instore":{
            "mobile":"919742000000",
            "email":"",
            "externalId":"90000000001832700"
         }
      },
      "rewardId":868,
      "type":"VOUCHER",
      "redemptionType":"INTOUCH_REWARD",
      "startDate":1619119170000,
      "endDate":1667174400000,
      "intouchPoints":10,
      "intouchSeriesId":"2483",
      "priority":1,
      "tier":"SILVER",
      "group":"test_group",
      "label":"test_lable",
      "intouchRewardDetails":{
         "intouchCouponCode":"CQDNUT1W",
         "codeExpiry":4758460200000
      }
   },
   "loyaltyEventId":null
}
```

## Card

### Card updated event (cardUpdated)

```json
{
   "eventName":"cardUpdated",
   "eventId":"dacbadcf-921b-4723-b5b1-1cfb8bffeaef",
   "orgId":50740,
   "refId":"50740_204684",
   "apiRequestId":"f0bce574efab65c9acaa26ba0a6bf202",
   "createdAt":1637577440321,
   "data":{
      "cardNumber":"visa123112121744880",
      "previousStatusLabel":"new",
      "currentStatusLabel":"NOT_ISSUED",
      "currentExtendedFields":[
         {
            "name":"year_of_registration",
            "value":"36"
         },
         {
            "name":"limit_set_by",
            "value":"tom"
         }
      ],
      "previousExtendedFields":[
         {
            "name":"year_of_registration",
            "value":"12"
         },
         {
            "name":"card_balance",
            "value":"848.0"
         }
      ],
      "currentCustomFields":[
         {
            "name":"period_card",
            "value":"hdhfjhcfhfh"
         },
         {
            "name":"neymar",
            "value":"nhdjdj"
         },
         {
            "name":"bloodgroup",
            "value":"b-"
         },
         {
            "name":"inesita",
            "value":"hdd"
         }
      ],
      "previousCustomFields":[
         {
            "name":"period_card",
            "value":"2021"
         },
         {
            "name":"state",
            "value":"Karnataka"
         },
         {
            "name":"bloodgroup",
            "value":"0+"
         }
      ]
   },
   "loyaltyEventId":null
}
```
