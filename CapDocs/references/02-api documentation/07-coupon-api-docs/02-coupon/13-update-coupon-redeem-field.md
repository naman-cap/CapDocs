---
title: Update coupon redeem field
excerpt: ''
api:
  file: v2.json
  operationId: update-coupon-redeem-field
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
This API allows you to update the following details of a redeemed coupon:

* Transaction number
* Transaction/Bill amount
* Bill ID
* Custom fields

This can be used to add the transaction details in a redeemed coupon that was redeemed before the transaction. The custom fields can be used to monitor the status of coupons associated with the rewards catalog. For example, the redemption status of a third-party coupon that was part of the reward catalog.

> 👍 Note
>
> For detailed information about our APIs and for hands-on testing, refer documentation in [API overview](https://docs.capillarytech.com/reference/apioverview) and  step-by-step guide on making your first API call in [Make your first API call](https://docs.capillarytech.com/reference/make-your-first-api-call) .:

# Prerequisites

*   Authentication: Basic and OAuth authentication
*   Coupon access group

# Resource information

|               |                  |
| :------------ | :--------------- |
| URI           | v2/coupon/redeem |
| HTTP method   | PUT              |
| Pagination    | NA               |
| Rate limit    | NA               |
| Batch support | NA               |

# API endpoint example

`https://eucrm.cc.capillarytech.com/v2/coupon/redeem`

# Request body parameters

| Field             | Data Type | Description                                                |
| ----------------- | --------- | ---------------------------------------------------------- |
| redemptions       | Object    | Object containing redemption details.                      |
| redemptionId\*    | Integer   | Unique identifier for the redemption.                      |
| billAmount\*      | Integer   | The amount of the bill associated with the redemption.     |
| transactionNumber | String    | Unique number identifying the transaction.                 |
| billId            | long      | Unique identifier for the bill associated with redemption. |
| user              | Object    | An object representing the user.                           |
| mobile            | String    | The mobile number of the user.                             |

```json Sample PUT body
{
  "redemptions": [
    {
      "redemptionId": 123,
      "billAmount": 100,
      "transactionNumber": "numbr9435064964",
      "billId": 123
    }
    {
      "redemptionId": 123,
      "billAmount": 100,
      "transactionNumber": "numbr9435064964",
      "billId": 123,
      "customFields":{"cf_key_1":"cf_value_1"}, {"cf_key_2":"cf_value_2"}
    }
  ],
  "user": {
    "mobile: “126080386”
  },
}
```

# Response parameters

| Field                    | Data Type | Description                                                  |
| ------------------------ | --------- | ------------------------------------------------------------ |
| entity                   | Object    | Root object containing all data related to the entity.       |
| redemptions              | Array     | An array of redemption objects.                              |
| redemptionId             | Number    | Unique identifier for the redemption.                        |
| billAmount               | Number    | The amount of the bill associated with the redemption.       |
| transactionNumber        | String    | Unique string identifying the transaction.                   |
| billId                   | Number    | A unique identifier for the bill associated with redemption. |
| customFields             | Object    | An object for additional, custom fields.                     |
| redemptionStatus         | Object    | Object containing status information about the redemption.   |
| status                   | Boolean   | Indicates the success or failure of the redemption.          |
| code                     | Number    | A code representing the status of the redemption.            |
| message                  | String    | A message describing the redemption status.                  |
| user                     | Object    | An object representing the user.                             |
| id                       | Number    | Unique identifier of the user.                               |
| profiles                 | Array     | An array of profiles associated with the user.               |
| firstName, lastName      | String    | User's first and last name.                                  |
| fields, allFields        | Object    | Objects for additional fields, possibly empty.               |
| identifiers              | Array     | An array of identifiers for the user.                        |
| type                     | String    | Type of identifier (e.g., email, mobile).                    |
| value                    | String    | The value of the identifier.                                 |
| commChannels             | Array     | An array of communication channels.                          |
| userId                   | Number    | The user's identifier, similar to `id`.                      |
| accountId                | String    | Account identifier, if any (empty in the provided data).     |
| autoUpdateTime           | String    | Timestamp of the last automatic update.                      |
| identifiersAll           | Array     | An array of all identifiers, similar to `identifiers`.       |
| status (at entity level) | Object    | Object containing overall status information.                |
| totalCount               | Integer   | Total count of transactions or operations attempted.         |
| failedCount              | Integer   | Count of transactions or operations that failed.             |
| warnings                 | Array     | An array of warnings, if any (empty in the provided data).   |
| errors                   | Array     | An array of errors, if any (empty in the provided data).     |
| success                  | Boolean   | Indicates the overall success of the operation.              |

```json
{
    "entity": {
        "redemptions": [
            {
                "redemptionId": 2509136,
                "billAmount": 0.0,
                "transactionNumber": "updated-trans_for demo",
                "billId": 10000,
                "customFields": {
                    "test": "test"
                },
                "redemptionStatus": {
                    "status": true,
                    "code": 761,
                    "message": "Coupon redemption update successful"
                }
            },
            {
                "redemptionId": 25091316,
                "billAmount": 0.0,
                "transactionNumber": "updated-trans",
                "billId": 9999,
                "customFields": {
                    "test": "test"
                },
                "redemptionStatus": {
                    "status": false,
                    "code": 510,
                    "message": "Invalid Redemption ids present"
                }
            }
        ],
        "user": {
            "id": 374658850,
            "profiles": [
                {
                    "firstName": "plerthprth",
                    "lastName": "gmmlzilbpg",
                    "fields": {},
                    "allFields": {},
                    "identifiers": [
                        {
                            "type": "email",
                            "value": "Tomhills@mail.com"
                        },
                        {
                            "type": "mobile",
                            "value": "918028464628"
                        },
                        {
                            "type": "externalId",
                            "value": "x918028464628"
                        }
                    ],
                    "commChannels": [],
                    "userId": 374658850,
                    "accountId": "",
                    "autoUpdateTime": "2024-03-06T16:31:34+05:30",
                    "identifiersAll": [
                        {
                            "type": "email",
                            "value": "Tomhills@mail.com"
                        },
                        {
                            "type": "mobile",
                            "value": "918028464628"
                        },
                        {
                            "type": "externalId",
                            "value": "x918028464628"
                        }
                    ]
                }
            ]
        },
        "status": {
            "status": true,
            "code": 762,
            "message": "Coupon redemption update partially successful"
        },
        "totalCount": 2,
        "failedCount": 1
    },
    "warnings": [],
    "errors": [],
    "success": true
}
```

<HTMLBlock>{`
<style>
  .InputGroupe2EvBGz2cnqy {
   display: flex;
   gap: 2px;
   position: relative;
}

.Button.APIRequest-example-button1DGMsfaOTVNW {
   position: relative;
   width: 140px;
   white-space: nowrap;
   overflow: hidden;
   text-overflow: ellipsis;
   padding: 6px 12px;
   text-align: left;
   transition: width 0.2s ease-out;
   z-index: 1;
   display: block;
   direction: ltr;
   unicode-bidi: embed;
   padding-right: 20px;
   background: #1e2329;
   border: none;
   border-radius: 6px;
   color: #94a3b8;
   font-size: 13px;
}

.Button.APIRequest-example-button1DGMsfaOTVNW span,
.Button.APIRequest-example-button1DGMsfaOTVNW div {
   text-align: left;
   direction: ltr;
}

.Button.APIRequest-example-button1DGMsfaOTVNW:hover {
   width: auto;
   z-index: 10;
   background: #262b33;
}

.Button.APIRequest-example-button1DGMsfaOTVNW.APIRequest-example-button_activeXJeukHyaHZXB {
   z-index: 20;
   background: #2c333d;
   color: #ffffff;
}
</style>
`}</HTMLBlock>