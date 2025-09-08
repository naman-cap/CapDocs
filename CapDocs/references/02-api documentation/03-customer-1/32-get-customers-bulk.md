---
title: Get Customers Bulk
excerpt: ''
api:
  file: v2.json
  operationId: get-customers-bulk
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
Fetch multiple customer profiles in one request by providing a list of customer IDs.

<Note title="Note">
To fetch multiple customers, this endpoint must be called with a POST request and the list of customer IDs in the body. This API is intended for internal Capillary services and should not be used by external integrations.
</Note>

# Prerequisites

*   Authentication: Basic or OAuth credentials
*   Default access group

# Resource information

|                        |                       |
| :--------------------- | :-------------------- |
| URI                    | /v2/bulk/getCustomers |
| HTTP Method            | POST                  |
| Pagination             | NA                    |
| Batch support          | NA                    |
| Rate limit information | NA                    |

# Sample API cURL

```curl
curl --location 'https://eu.api.capillarytech.com/v2/bulk/getCustomers?format=json&format=json&identifierName=mobile&identifierValue=9400488244&source=WHATSAPP' \
--header 'Authorization: Basic Z2VvcmdlLmpvaG5zb246OTg4OTU2NWI4ODVhMmY4ZWE1MTk1MjA2NWEwYTEzNzg=' \
--header 'Content-Type: application/json' \
--header 'Cookie: _cfuvid=pG2dUTv9AmZsbCWt8RQ1DqWpR2Clfbg.S4lVYFcivvI-1726479424405-0.0.1.1-604800000; _cfuvid=TsciSMonFzukHfHftQcO_JuWhgCktLLqX53atcboO64-1749190644325-0.0.1.1-604800000' \
--data '[564332013,565338404]'
```

<br />

# Request query parameters

| Name            |  Type  | Description                                                                     |
| --------------- | :----: | ------------------------------------------------------------------------------- |
| format          | string | Response format. Supported value: `json`.                                       |
| identifierName  | string | Identifier type to match customers. Supported: `mobile`, `email`, `externalId`. |
| identifierValue | string | Value for the chosen identifier (e.g., a mobile number or email address).       |
| source          | string | Origin of this request. Examples: `WECHAT`.                                     |
| accountId       | string | Merchant or application account ID                                              |

# Response parameters

| Parameter                                 | Data Type | Description                                                              |
| ----------------------------------------- | --------- | ------------------------------------------------------------------------ |
| data                                      | array     | List of individual customer‐fetch result objects (one per requested ID). |
| data.entity.id                            | integer   | Internal customer ID.                                                    |
| data.entity.profiles                      | array     | Array of profile objects for this customer.                              |
| data.entity.loyaltyInfo.loyaltyType       | string    | Loyalty program type.                                                    |
| data.entity.loyaltyInfo.lifetimePurchases | number    | Total purchase amount over the customer’s lifetime.                      |
| data.entity.segments                      | object    | Segmentation attributes for the customer (key/value pairs).              |
| data.entity.associatedWith                | string    | Till or POS from which this customer was last associated.                |
| data.entity.extendedFields                | object    | Additional extended fields (key/value pairs) for this customer.          |
| data.entity.cardDetails                   | array     | List of loyalty or payment card objects attached to this customer.       |
| data.success                              | boolean   | True if this customer‐fetch succeeded; false otherwise.                  |

# Response body

```json
{
  "data": [
    {
      "entity": {
        "id": 382137011,
        "profiles": [
          {
            "firstName": "firstName_2184396",
            "lastName": "lastName_2184396",
            "fields": {
              "gender": "MALE"
            },
            "allFields": {},
            "identifiers": [
              {
                "type": "email",
                "value": "autoemail918392184396@capautomation.com"
              },
              {
                "type": "mobile",
                "value": "918392184396"
              }
            ],
            "commChannels": [
              {
                "type": "email",
                "value": "autoemail8421435733@capautomation.com",
                "primary": true,
                "verified": true,
                "meta": {
                  "residence": true,
                  "office": false
                },
                "attributes": {}
              }
            ],
            "source": "WECHAT",
            "userId": 382137011,
            "accountId": "1234",
            "conflictingProfileList": [],
            "autoUpdateTime": "2024-09-16T11:59:27Z",
            "identifiersAll": [
              {
                "type": "email",
                "value": "autoemail918392184396@capautomation.com"
              },
              {
                "type": "mobile",
                "value": "918392184396"
              }
            ]
          }
        ],
        "loyaltyInfo": {
          "loyaltyType": "loyalty",
          "lifetimePurchases": 2400.0
        },
        "segments": {},
        "associatedWith": "staging2.till1",
        "extendedFields": {},
        "cardDetails": []
      },
      "warnings": [],
      "errors": [],
      "success": true
    },
    {
      "entity": {
        "id": 382137012,
        "profiles": [
          {
            "firstName": "firstName_9976383",
            "lastName": "lastName_9976383",
            "fields": {
              "gender": "MALE"
            },
            "allFields": {},
            "identifiers": [
              {
                "type": "mobile",
                "value": "918679976383"
              },
              {
                "type": "email",
                "value": "autoemail918679976383@capautomation.com"
              }
            ],
            "commChannels": [],
            "source": "WECHAT",
            "userId": 382137012,
            "accountId": "1234",
            "conflictingProfileList": [],
            "autoUpdateTime": "2024-09-16T11:59:32Z",
            "identifiersAll": [
              {
                "type": "mobile",
                "value": "918679976383"
              },
              {
                "type": "email",
                "value": "autoemail918679976383@capautomation.com"
              }
            ]
          }
        ],
        "loyaltyInfo": {
          "loyaltyType": "loyalty",
          "lifetimePurchases": 0.0
        },
        "segments": {},
        "associatedWith": "staging2.till1",
        "extendedFields": {},
        "cardDetails": []
      },
      "warnings": [],
      "errors": [],
      "success": true
    },
    {
      "entity": {
        "id": 382137013,
        "profiles": [
          {
            "firstName": "firstName_6268323",
            "lastName": "lastName_6268323",
            "fields": {
              "gender": "MALE"
            },
            "allFields": {},
            "identifiers": [
              {
                "type": "mobile",
                "value": "918746268323"
              },
              {
                "type": "email",
                "value": "autoemail918746268323@capautomation.com"
              }
            ],
            "commChannels": [
              {
                "type": "email",
                "value": "autoemail7090589489@capautomation.com",
                "primary": true,
                "verified": true,
                "meta": {
                  "residence": true,
                  "office": false
                },
                "attributes": {}
              }
            ],
            "source": "WECHAT",
            "userId": 382137013,
            "accountId": "1234",
            "conflictingProfileList": [],
            "autoUpdateTime": "2024-09-16T11:59:36Z",
            "identifiersAll": [
              {
                "type": "mobile",
                "value": "918746268323"
              },
              {
                "type": "email",
                "value": "autoemail918746268323@capautomation.com"
              }
            ]
          }
        ],
        "loyaltyInfo": {
          "loyaltyType": "loyalty",
          "lifetimePurchases": 100.0
        },
        "segments": {},
        "associatedWith": "staging2.till1",
        "extendedFields": {},
        "cardDetails": []
      },
      "warnings": [],
      "errors": [],
      "success": true
    }
  ],
  "warnings": [],
  "errors": []
}
```

<br />

# API specific error codes

| Code | Description        | Reason                                                 |
| :--- | :----------------- | :----------------------------------------------------- |
| 400  | Invalid Request    | The request parameters or format were invalid.         |
| 404  | Resource not found | The requested API endpoint or resource does not exist. |
| 500  | UNEXPECTED\_ERROR  | An unexpected error occurred on the server.            |