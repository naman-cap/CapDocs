---
title: Get Cart Promotions
excerpt: Get the cart promotion details for the organization
api:
  file: GetcartpromotionusingcartpromotionID.yaml
  operationId: get_api_gatewayv1promotions
deprecated: false
hidden: false
link:
  new_tab: false
metadata:
  robots: noindex
---
This API retrieves the cart promotion details for the organization. To retrieve promotion details for a specific promotion, use its cart promotion ID. You can provide multiple IDs as comma-separated values.

## Example request

```curl Sample request with multiple IDs
curl --location 'https://eu.api.capillarytech.com/api_gateway/v1/promotions/?promotionIds=68b5401db51b7777eca02900%2C68afffd77880ba5aa7cf2fb9%2C68661fe0ee52f074465e1062%2C%20686611bfee52f074465e1004' \
--header 'Accept: application/json' \
--header 'Content-Type: application/json' \
--header 'accept: application/json' \
--header 'Authorization: Basic *******' \
--header 'Cookie: _cfuvid=9oSq7qMWziCR7BHQMrLE46pnF7WobiRVUQNbpmzDGiM-1756730125036-0.0.1.1-604800000; _cfuvid=xV2byQ98kShUeD74KBvXw39WiKQWRTPYck_nFdSIjfQ-1756809373698-0.0.1.1-604800000'
```
```curl Sample request with single ID
curl --location 'https://eu.api.capillarytech.com/api_gateway/v1/promotions/?promotionIds=68b5401db51b7777eca02900' \
--header 'Accept: application/json' \
--header 'Content-Type: application/json' \
--header 'accept: application/json' \
--header 'Authorization: Basic **********' \
--header 'Cookie: _cfuvid=9oSq7qMWziCR7BHQMrLE46pnF7WobiRVUQNbpmzDGiM-1756730125036-0.0.1.1-604800000; _cfuvid=aYNqXBj3GQL6eDlcHu3JHL5aL.p3VZ3zJ1j4XreCu1c-1756809494855-0.0.1.1-604800000'
```
```curl Sample request without promotion ID
curl --location 'https://eu.api.capillarytech.com/api_gateway/v1/promotions/' \
--header 'Accept: application/json' \
--header 'Content-Type: application/json' \
--header 'accept: application/json' \
--header 'Authorization: Basic bmVlc3RvcmV0aWxsc3NuZWUyMzoyMDJjYjk2MTkwNzViOTY0YjA3MTUyZDIzNGI3MA==' \
--header 'Cookie: _cfuvid=9oSq7qMWziCR7BHQMrLE46pnF7WobiRVUQNbpmzDGiM-1756730125036-0.0.1.1-604800000; _cfuvid=cEokNpEZ7KaN9PsHveqwyFUhxxUO90bz2rE48rG8RDI-1756818458379-0.0.1.1-604800000'
```

## Pre-requisites

Make sure you have the right authentication and appropriate access control configured:

* **Access group resource**: Default
* **Authentication**: Basic or OAuth authentication

## Resource information

<Table align={["left","left"]}>
  <thead>
    <tr>
      <th>

      </th>

      <th>

      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Pagination support
      </td>

      <td>
        No
      </td>
    </tr>

    <tr>
      <td>
        Rate limit
      </td>

      <td>
        Demo and testing clusters: 1000 requests per minute per API key. 
        Other organizations: Rate limit is brand-specific.
      </td>
    </tr>

    <tr>
      <td>
        Batch support
      </td>

      <td>
        Yes
      </td>
    </tr>
  </tbody>
</Table>

## Query parameter

| Field        | Type  | Required | Description                                                                                                                                                                                                                               |
| :----------- | :---- | :------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| promotionIDs | Array | Optional | Unique identifiers for the cart promotion, generated during the [creation of the cart promotion](https://docs.capillarytech.com/docs/create-cart-promotion#/). You can provide more than one cart promotion ID as comma-separated values. |

## Example response

```json Sample response with multiple IDs
{
    "data": [
        {
            "id": "68b5401db51b7777eca02900",
            "name": "SeptemberPromo",
            "orgId": 100737,
            "priority": 0,
            "active": true,
            "messageLabel": "",
            "type": "CUSTOMER",
            "condition": {
                "type": "CART",
                "cartCondition": {
                    "kpi": "SUBTOTAL",
                    "operator": "GREATER_THAN_OR_EQUAL",
                    "value": "500.000000"
                }
            },
            "action": {
                "type": "CART_BASED",
                "cartBasedAction": {
                    "type": "PERCENTAGE",
                    "value": "15.000000"
                }
            },
            "createdBy": 75139931,
            "createdOn": 1756708893457,
            "lastUpdatedBy": 75139931,
            "lastUpdatedOn": 1756709902063,
            "startDate": 1756665000000,
            "endDate": 1759256999999,
            "campaignId": 264140,
            "promotionRestrictions": {},
            "earnLimitedToSpecificAudience": true,
            "customFieldValues": {},
            "customerActivationRequired": false,
            "mode": "DISCOUNT",
            "maxIssuancePerCustomer": -1,
            "isStackable": false
        },
        {
            "id": "68afffd77880ba5aa7cf2fb9",
            "name": "AugustCartPromo",
            "orgId": 100737,
            "priority": 0,
            "active": true,
            "messageLabel": "",
            "type": "CUSTOMER",
            "condition": {
                "type": "CART",
                "cartCondition": {
                    "kpi": "SUBTOTAL",
                    "operator": "GREATER_THAN_OR_EQUAL",
                    "value": "500.000000"
                }
            },
            "action": {
                "type": "CART_BASED",
                "cartBasedAction": {
                    "type": "PERCENTAGE",
                    "value": "15.000000"
                }
            },
            "createdBy": 75139931,
            "createdOn": 1756364759642,
            "lastUpdatedBy": 75139931,
            "lastUpdatedOn": 1756364759642,
            "startDate": 1756319400000,
            "endDate": 1756664999999,
            "campaignId": 264140,
            "promotionRestrictions": {},
            "earnLimitedToSpecificAudience": true,
            "customFieldValues": {
                "Age": "25"
            },
            "customerActivationRequired": false,
            "mode": "DISCOUNT",
            "maxIssuancePerCustomer": 10,
            "isStackable": false
        },
        {
            "id": "68661fe0ee52f074465e1062",
            "name": "code promotion",
            "orgId": 100737,
            "priority": 0,
            "active": true,
            "messageLabel": "",
            "type": "CODE",
            "condition": {
                "type": "CART",
                "cartCondition": {
                    "kpi": "SUBTOTAL",
                    "operator": "GREATER_THAN_OR_EQUAL",
                    "value": "1000.000000"
                }
            },
            "action": {
                "type": "CART_BASED",
                "cartBasedAction": {
                    "type": "ABSOLUTE",
                    "value": "100.000000"
                }
            },
            "createdBy": 75139931,
            "createdOn": 1751523296171,
            "lastUpdatedBy": 75139931,
            "lastUpdatedOn": 1751523296171,
            "startDate": 1751481000000,
            "endDate": 1753986599999,
            "campaignId": 264140,
            "promotionRestrictions": {
                "Code": [
                    {
                        "kpi": "REDEMPTION",
                        "limit": "5.000000"
                    }
                ]
            },
            "earnLimitedToSpecificAudience": false,
            "customFieldValues": {},
            "customerActivationRequired": false,
            "mode": "DISCOUNT",
            "maxIssuancePerCustomer": 1,
            "isStackable": false
        },
        {
            "id": "686611bfee52f074465e1004",
            "name": "doc_promotions",
            "orgId": 100737,
            "priority": 0,
            "active": true,
            "messageLabel": "",
            "type": "POS",
            "condition": {
                "type": "CART",
                "cartCondition": {
                    "kpi": "ITEMCOUNT",
                    "operator": "EQUALS",
                    "value": "200.000000"
                }
            },
            "action": {
                "type": "CART_BASED",
                "cartBasedAction": {
                    "type": "ABSOLUTE",
                    "value": "200.000000"
                }
            },
            "createdBy": 75160045,
            "createdOn": 1751519679886,
            "lastUpdatedBy": 75160045,
            "lastUpdatedOn": 1751519679886,
            "startDate": 1751481000000,
            "endDate": 1756664999999,
            "campaignId": 264140,
            "promotionRestrictions": {},
            "earnLimitedToSpecificAudience": false,
            "customFieldValues": {},
            "customerActivationRequired": false,
            "mode": "DISCOUNT",
            "maxIssuancePerCustomer": 1,
            "isStackable": false
        }
    ]
}
```
```json Sample response with single ID
{
    "data": [
        {
            "id": "68b5401db51b7777eca02900",
            "name": "SeptemberPromo",
            "orgId": 100737,
            "priority": 0,
            "active": true,
            "messageLabel": "",
            "type": "CUSTOMER",
            "condition": {
                "type": "CART",
                "cartCondition": {
                    "kpi": "SUBTOTAL",
                    "operator": "GREATER_THAN_OR_EQUAL",
                    "value": "500.000000"
                }
            },
            "action": {
                "type": "CART_BASED",
                "cartBasedAction": {
                    "type": "PERCENTAGE",
                    "value": "15.000000"
                }
            },
            "createdBy": 75139931,
            "createdOn": 1756708893457,
            "lastUpdatedBy": 75139931,
            "lastUpdatedOn": 1756709902063,
            "startDate": 1756665000000,
            "endDate": 1759256999999,
            "campaignId": 264140,
            "promotionRestrictions": {},
            "earnLimitedToSpecificAudience": true,
            "customFieldValues": {},
            "customerActivationRequired": false,
            "mode": "DISCOUNT",
            "maxIssuancePerCustomer": -1,
            "isStackable": false
        }
    ]
}
```
```json Sample responsewith no promotion ID
{
    "data": [
        {
            "id": "68b096527880ba5aa7cf349b",
            "name": "Rake Crazy Deal",
            "orgId": 100458,
            "priority": 0,
            "active": true,
            "messageLabel": "Rake Crazy Deal",
            "type": "EARNING",
            "condition": {
                "type": "PRODUCT",
                "productCondition": {
                    "criteriaList": [
                        {
                            "entity": "ATTRIBUTE",
                            "operator": "IN",
                            "values": [
                                "SKU456"
                            ],
                            "attributeName": "sku_code"
                        }
                    ],
                    "kpi": "QUANTITY",
                    "value": "1.000000",
                    "operator": "GREATER_THAN_OR_EQUAL"
                }
            },
            "action": {
                "type": "CART_BASED",
                "cartBasedAction": {
                    "type": "ABSOLUTE",
                    "value": "15.000000"
                }
            },
            "createdBy": 75083493,
            "createdOn": 1756403282590,
            "lastUpdatedBy": 75083493,
            "lastUpdatedOn": 1756403425504,
            "startDate": 1756353600000,
            "endDate": 1759291199999,
            "campaignId": 257548,
            "earningCriteria": {
                "criteriaName": "TransactionAdd_Criteria",
                "earnedFromType": "ACTIVITY",
                "milestoneId": 0,
                "groupId": 0,
                "eventType": "TransactionAdd",
                "criteriaDsl": "currentLineItem.doesItemMatch(\"sku_code\",\"221900\")",
                "criteriaDslJson": "\n{\n  \"arity\":\"method_call\",\n  \"type\":\"boolean:primitive\",\n  \"operands\":[\n    {\n      \"arity\":\"name\",\n      \"value\":\"currentLineItem\",\n      \"type\":\"tx.item:object:primitive\"\n    },\n    {\n      \"arity\":\"name\",\n      \"value\":\"doesItemMatch\",\n      \"type\":\"anonymous:function:primitive\"\n    },\n    {\n      \"arity\":\"literal\",\n      \"value\":\"sku_code\",\n      \"type\":\"EEnum__InvAttr:enum:string:object:primitive\"\n    },\n    {\n      \"arity\":\"literal\",\n      \"value\":\"221900\",\n      \"type\":\"EEnum__InvAttr__EDepEnum__InvAttrVal__sku_code:string:object:primitive\"\n    }\n  ]\n}",
                "active": true
            },
            "promotionRestrictions": {},
            "earnLimitedToSpecificAudience": true,
            "customFieldValues": {
                "Crazy Deal": "TRUE"
            },
            "customerActivationRequired": false,
            "mode": "DISCOUNT",
            "maxIssuancePerCustomer": 1,
            "isStackable": false
        },
        {
            "id": "68b095087880ba5aa7cf3499",
            "name": "Rake 50% Discount",
            "orgId": 100458,
            "priority": 0,
            "active": true,
            "messageLabel": "Rake Discount",
            "type": "EARNING",
            "condition": {
                "type": "CART",
                "cartCondition": {
                    "kpi": "ITEMCOUNT",
                    "operator": "GREATER_THAN_OR_EQUAL",
                    "value": "1.000000"
                }
            },
            "action": {
                "type": "PRODUCT_BASED",
                "productBasedAction": {
                    "productBasedCondition": {
                        "type": "PRODUCT",
                        "productCondition": {
                            "criteriaList": [
                                {
                                    "entity": "ATTRIBUTE",
                                    "operator": "IN",
                                    "values": [
                                        "SKU456"
                                    ],
                                    "attributeName": "sku_code"
                                }
                            ],
                            "kpi": "NONE",
                            "value": "0.000000",
                            "operator": "NONE"
                        }
                    },
                    "type": "PERCENTAGE",
                    "value": "50.000000",
                    "includeItemsFromConditionSet": false
                }
            },
            "createdBy": 75083493,
            "createdOn": 1756402952534,
            "lastUpdatedBy": 75083493,
            "lastUpdatedOn": 1756403046218,
            "startDate": 1756353600000,
            "endDate": 1759291199999,
            "campaignId": 257548,
            "earningCriteria": {
                "criteriaName": "TransactionAdd_Criteria",
                "earnedFromType": "ACTIVITY",
                "milestoneId": 0,
                "groupId": 0,
                "eventType": "TransactionAdd",
                "criteriaDsl": "currentLineItem.doesItemMatch(\"sku_code\",\"221900\")",
                "criteriaDslJson": "\n{\n  \"arity\":\"method_call\",\n  \"type\":\"boolean:primitive\",\n  \"operands\":[\n    {\n      \"arity\":\"name\",\n      \"value\":\"currentLineItem\",\n      \"type\":\"tx.item:object:primitive\"\n    },\n    {\n      \"arity\":\"name\",\n      \"value\":\"doesItemMatch\",\n      \"type\":\"anonymous:function:primitive\"\n    },\n    {\n      \"arity\":\"literal\",\n      \"value\":\"sku_code\",\n      \"type\":\"EEnum__InvAttr:enum:string:object:primitive\"\n    },\n    {\n      \"arity\":\"literal\",\n      \"value\":\"221900\",\n      \"type\":\"EEnum__InvAttr__EDepEnum__InvAttrVal__sku_code:string:object:primitive\"\n    }\n  ]\n}",
                "active": true
            },
            "promotionRestrictions": {},
            "earnLimitedToSpecificAudience": true,
            "customFieldValues": {},
            "customerActivationRequired": false,
            "mode": "DISCOUNT",
            "maxIssuancePerCustomer": 1,
            "isStackable": false
        },
        {
            "id": "689c2fcf746fa670a410074f",
            "name": "20% on Dengue Test",
            "orgId": 100458,
            "priority": 0,
            "active": true,
            "messageLabel": "20% on Dengue Test",
            "type": "CUSTOMER",
            "condition": {
                "type": "PRODUCT",
                "productCondition": {
                    "criteriaList": [
                        {
                            "entity": "CATEGORY",
                            "operator": "IN",
                            "values": [
                                "Health  Wellness"
                            ]
                        }
                    ],
                    "kpi": "QUANTITY",
                    "value": "1.000000",
                    "operator": "GREATER_THAN_OR_EQUAL"
                }
            },
            "action": {
                "type": "PRODUCT_BASED",
                "productBasedAction": {
                    "type": "PERCENTAGE",
                    "value": "20.000000",
                    "includeItemsFromConditionSet": true
                }
            },
            "createdBy": 75060328,
            "createdOn": 1755066319408,
            "lastUpdatedBy": 75060328,
            "lastUpdatedOn": 1755066332629,
            "startDate": 1755057600000,
            "endDate": 1759291199999,
            "campaignId": 283791,
            "promotionRestrictions": {},
            "earnLimitedToSpecificAudience": true,
            "customFieldValues": {},
            "customerActivationRequired": false,
            "mode": "DISCOUNT",
            "maxIssuancePerCustomer": 1,
            "isStackable": false
        },
        {
            "id": "689c2e3fcad0166913dd0bad",
            "name": "OH 20% on All",
            "orgId": 100458,
            "priority": 0,
            "active": true,
            "messageLabel": "OH 20% on All",
            "type": "CUSTOMER",
            "condition": {
                "type": "CART",
                "cartCondition": {
                    "kpi": "SUBTOTAL",
                    "operator": "GREATER_THAN_OR_EQUAL",
                    "value": "1.000000"
                }
            },
            "action": {
                "type": "CART_BASED",
                "cartBasedAction": {
                    "type": "PERCENTAGE",
                    "value": "20.000000"
                }
            },
            "createdBy": 75060328,
            "createdOn": 1755065919793,
            "lastUpdatedBy": 75060328,
            "lastUpdatedOn": 1755065919793,
            "startDate": 1755057600000,
            "endDate": 1759291199999,
            "campaignId": 283791,
            "promotionRestrictions": {},
            "earnLimitedToSpecificAudience": true,
            "customFieldValues": {},
            "customerActivationRequired": false,
            "mode": "DISCOUNT",
            "maxIssuancePerCustomer": 1,
            "isStackable": false
        },
        {
            "id": "68959d200484736895ddd59b",
            "name": "Buy any Biba product, get 15% off",
            "orgId": 100458,
            "priority": 0,
            "active": true,
            "messageLabel": "Buy any Biba product, get 15% off",
            "type": "POS",
            "condition": {
                "type": "PRODUCT",
                "productCondition": {
                    "criteriaList": [
                        {
                            "entity": "SKU",
                            "operator": "IN",
                            "values": [
                                "A24BI10476EEN"
                            ]
                        }
                    ],
                    "kpi": "QUANTITY",
                    "value": "1.000000",
                    "operator": "GREATER_THAN_OR_EQUAL"
                }
            },
            "action": {
                "type": "CART_BASED",
                "cartBasedAction": {
                    "type": "PERCENTAGE",
                    "value": "15.000000"
                }
            },
            "createdBy": 75067382,
            "createdOn": 1754635552282,
            "lastUpdatedBy": 75067382,
            "lastUpdatedOn": 1754635552282,
            "startDate": 1754625600000,
            "endDate": 1761969599999,
            "campaignId": 280989,
            "promotionRestrictions": {},
            "earnLimitedToSpecificAudience": false,
            "customFieldValues": {},
            "customerActivationRequired": false,
            "mode": "DISCOUNT",
            "maxIssuancePerCustomer": 1,
            "isStackable": false
        },
        {
            "id": "68936f996762432a0d913c10",
            "name": "$10 off any order when you spend more than $100",
            "orgId": 100458,
            "priority": 0,
            "active": true,
            "messageLabel": "$10 off any order when you spend more than $100",
            "type": "EARNING",
            "condition": {
                "type": "CART",
                "cartCondition": {
                    "kpi": "SUBTOTAL",
                    "operator": "GREATER_THAN_OR_EQUAL",
                    "value": "100.000000"
                }
            },
            "action": {
                "type": "CART_BASED",
                "cartBasedAction": {
                    "type": "ABSOLUTE",
                    "value": "10.000000"
                }
            },
            "createdBy": 75125097,
            "createdOn": 1754492825610,
            "lastUpdatedBy": 75125097,
            "lastUpdatedOn": 1754492825610,
            "startDate": 1754452800000,
            "endDate": 1759291199999,
            "campaignId": 282928,
            "earningCriteria": {
                "criteriaName": "TransactionAdd_Criteria",
                "earnedFromType": "ACTIVITY",
                "milestoneId": 0,
                "groupId": 0,
                "eventType": "TransactionAdd",
                "criteriaDsl": "true",
                "criteriaDslJson": "\n{\n  \"arity\":\"literal\",\n  \"value\":\"true\",\n  \"type\":\"boolean:primitive\"\n}",
                "active": true
            },
            "promotionRestrictions": {},
            "earnLimitedToSpecificAudience": true,
            "customFieldValues": {},
            "customerActivationRequired": false,
            "mode": "DISCOUNT",
            "maxIssuancePerCustomer": 1,
            "isStackable": false
        },
        {
            "id": "6880c80dd9234a5350ca4b21",
            "name": "Region based offers Flat 500 INR off (West)",
            "orgId": 100458,
            "priority": 0,
            "active": true,
            "messageLabel": "Region based offers Flat 500 INR off (West)",
            "type": "POS",
            "storeCriteria": {
                "type": "ZONE",
                "values": [
                    75175598
                ],
                "operator": "IN"
            },
            "condition": {
                "type": "CART",
                "cartCondition": {
                    "kpi": "SUBTOTAL",
                    "operator": "GREATER_THAN_OR_EQUAL",
                    "value": "3000.000000"
                }
            },
            "action": {
                "type": "CART_BASED",
                "cartBasedAction": {
                    "type": "ABSOLUTE",
                    "value": "500.000000"
                }
            },
            "createdBy": 75067382,
            "createdOn": 1753270285640,
            "lastUpdatedBy": 75067382,
            "lastUpdatedOn": 1753270285640,
            "startDate": 1753243200000,
            "endDate": 1761969599999,
            "campaignId": 280989,
            "promotionRestrictions": {},
            "earnLimitedToSpecificAudience": false,
            "customFieldValues": {},
            "customerActivationRequired": false,
            "isLoyaltyOnly": true,
            "mode": "DISCOUNT",
            "maxIssuancePerCustomer": 1,
            "isStackable": false
        },
        {
            "id": "6880c7802420517ca07cb4f5",
            "name": "Region based offers Flat 500 INR off (Nautica)",
            "orgId": 100458,
            "priority": 0,
            "active": true,
            "messageLabel": "Region based offers Flat 500 INR off (Nautica)",
            "type": "POS",
            "storeCriteria": {
                "type": "STORE",
                "values": [
                    75027647
                ],
                "operator": "IN"
            },
            "condition": {
                "type": "CART",
                "cartCondition": {
                    "kpi": "SUBTOTAL",
                    "operator": "GREATER_THAN_OR_EQUAL",
                    "value": "5000.000000"
                }
            },
            "action": {
                "type": "CART_BASED",
                "cartBasedAction": {
                    "type": "ABSOLUTE",
                    "value": "500.000000"
                }
            },
            "createdBy": 75067382,
            "createdOn": 1753270144654,
            "lastUpdatedBy": 75067382,
            "lastUpdatedOn": 1753270162983,
            "startDate": 1753243200000,
            "endDate": 1761969599999,
            "campaignId": 280989,
            "promotionRestrictions": {},
            "earnLimitedToSpecificAudience": false,
            "customFieldValues": {},
            "customerActivationRequired": false,
            "isLoyaltyOnly": true,
            "mode": "DISCOUNT",
            "maxIssuancePerCustomer": 1,
            "isStackable": false
        },
        {
            "id": "6880c7062420517ca07cb4ec",
            "name": "Category based offers",
            "orgId": 100458,
            "priority": 0,
            "active": true,
            "messageLabel": "Category based offers",
            "type": "POS",
            "condition": {
                "type": "PRODUCT",
                "productCondition": {
                    "criteriaList": [
                        {
                            "entity": "SKU",
                            "operator": "IN",
                            "values": [
                                "33257531",
                                "32059180"
                            ]
                        }
                    ],
                    "kpi": "AMOUNT",
                    "value": "5000.000000",
                    "operator": "GREATER_THAN_OR_EQUAL"
                }
            },
            "action": {
                "type": "CART_BASED",
                "cartBasedAction": {
                    "type": "PERCENTAGE",
                    "value": "50.000000"
                }
            },
            "createdBy": 75067382,
            "createdOn": 1753270022250,
            "lastUpdatedBy": 75067382,
            "lastUpdatedOn": 1753270022250,
            "startDate": 1753243200000,
            "endDate": 1764565199999,
            "campaignId": 280989,
            "promotionRestrictions": {},
            "earnLimitedToSpecificAudience": false,
            "customFieldValues": {},
            "customerActivationRequired": false,
            "mode": "DISCOUNT",
            "maxIssuancePerCustomer": 1,
            "isStackable": false
        },
        {
            "id": "6880c4c8d9234a5350ca4b06",
            "name": "Buy 1 get 1",
            "orgId": 100458,
            "priority": 0,
            "active": true,
            "messageLabel": "Buy 1 get 1",
            "type": "POS",
            "condition": {
                "type": "PRODUCT",
                "productCondition": {
                    "criteriaList": [
                        {
                            "entity": "SKU",
                            "operator": "IN",
                            "values": [
                                "32753189"
                            ]
                        }
                    ],
                    "kpi": "QUANTITY",
                    "value": "2.000000",
                    "operator": "GREATER_THAN_OR_EQUAL"
                }
            },
            "action": {
                "type": "PER_UNIT",
                "perUnitAction": {
                    "rewardAction": {
                        "type": "FREE_PRODUCT",
                        "freeProductAction": {
                            "productBasedCondition": {
                                "type": "PRODUCT",
                                "productCondition": {
                                    "criteriaList": [
                                        {
                                            "entity": "SKU",
                                            "operator": "IN",
                                            "values": [
                                                "32753189"
                                            ]
                                        }
                                    ],
                                    "kpi": "NONE",
                                    "value": "0.000000",
                                    "operator": "NONE"
                                }
                            },
                            "includeItemsFromConditionSet": false
                        }
                    },
                    "perUnitKPI": "QUANTITY",
                    "perUnitDivider": "1.000000",
                    "includeItemsFromConditionSet": false
                }
            },
            "createdBy": 75067382,
            "createdOn": 1753269448554,
            "lastUpdatedBy": 75067382,
            "lastUpdatedOn": 1753269850045,
            "startDate": 1753243200000,
            "endDate": 1761969599999,
            "campaignId": 280989,
            "promotionRestrictions": {},
            "earnLimitedToSpecificAudience": false,
            "customFieldValues": {},
            "customerActivationRequired": false,
            "mode": "DISCOUNT",
            "maxIssuancePerCustomer": 1,
            "isStackable": false
        }
    ]
}
```

## Response parameters

<Table align={["left","left","left"]}>
  <thead>
    <tr>
      <th>
        **Field**
      </th>

      <th>
        **Type**
      </th>

      <th>
        **Description**
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        .data
      </td>

      <td>
        Array
      </td>

      <td>
        Array containing the cart promotion details.
      </td>
    </tr>

    <tr>
      <td>
        ..id
      </td>

      <td>
        string
      </td>

      <td>
        Unique identifier of the cart promotion.
      </td>
    </tr>

    <tr>
      <td>
        ..name
      </td>

      <td>
        string
      </td>

      <td>
        Name of the cart promotion.
      </td>
    </tr>

    <tr>
      <td>
        ..orgId
      </td>

      <td>
        integer
      </td>

      <td>
        Organization identifier where the cart promotion exists.
      </td>
    </tr>

    <tr>
      <td>
        ..priority
      </td>

      <td>
        integer
      </td>

      <td>
        Priority of the cart promotion. Lower value means higher priority.
      </td>
    </tr>

    <tr>
      <td>
        ..active
      </td>

      <td>
        boolean
      </td>

      <td>
        Shows if the cart promotion is active.
        `true` - enabled, `false` - disabled
      </td>
    </tr>

    <tr>
      <td>
        ..messageLabel
      </td>

      <td>
        string
      </td>

      <td>
        Custom label or message for the promotion.
      </td>
    </tr>

    <tr>
      <td>
        ..type
      </td>

      <td>
        enum
      </td>

      <td>
        Type of cart promotion.
        Possible values: CUSTOMER, POS, CODE, EARNING, REWARD.
      </td>
    </tr>

    <tr>
      <td>
        ..condition
      </td>

      <td>
        Object
      </td>

      <td>
        Object containing information on the conditions.
      </td>
    </tr>

    <tr>
      <td>
        ...type
      </td>

      <td>
        enum
      </td>

      <td>
        Type of condition applied.
        Possible value: CART, PRODUCT, COMBO_PRODUCT, TENDER
      </td>
    </tr>

    <tr>
      <td>
        ...cartCondition
      </td>

      <td>
        Object
      </td>

      <td>
        Object containing the details of the conditions.
      </td>
    </tr>

    <tr>
      <td>
        ....kpi
      </td>

      <td>
        enum
      </td>

      <td>
        KPI on which the condition is based.
        Possible values: SUBTOTAL, ITEMCOUNT
      </td>
    </tr>

    <tr>
      <td>
        ....operator
      </td>

      <td>
        enum
      </td>

      <td>
        Operator used for evaluation.
        Possible values: EQUALS, GREATER_THAN, GREATER_THAN_OR_EQUAL, LESS_THAN, LESS_THAN_OR_EQUAL, IN, NONE
      </td>
    </tr>

    <tr>
      <td>
        ....value
      </td>

      <td>
        integer
      </td>

      <td>
        Value used in the condition check.
      </td>
    </tr>

    <tr>
      <td>
        ..action
      </td>

      <td>
        Object
      </td>

      <td>
        Object containing details of the action.
      </td>
    </tr>

    <tr>
      <td>
        ...type
      </td>

      <td>
        enum
      </td>

      <td>
        Type of action triggered.
        Possible value: CART_BASED, FIXED_PRICE, PRODUCT_BASED, FREE_PRODUCT, TENDER, PER_UNIT
      </td>
    </tr>

    <tr>
      <td>
        ...cartBasedAction
      </td>

      <td>
        Object
      </td>

      <td>
        Object containing the
      </td>
    </tr>

    <tr>
      <td>
        ....type
      </td>

      <td>
        enum
      </td>

      <td>
        Type of benefit or discount applied.
        Possible values: PERCENTAGE, ABSOLUTE
      </td>
    </tr>

    <tr>
      <td>
        ....value
      </td>

      <td>
        integer
      </td>

      <td>
        Value of the discount in percentage.
      </td>
    </tr>

    <tr>
      <td>
        ..createdBy
      </td>

      <td>
        integer
      </td>

      <td>
        User ID of the creator.
      </td>
    </tr>

    <tr>
      <td>
        ..createdOn
      </td>

      <td>
        string
      </td>

      <td>
        Timestamp when the cart promotion is created
      </td>
    </tr>

    <tr>
      <td>
        ..lastUpdatedBy
      </td>

      <td>
        integer
      </td>

      <td>
        User ID of the last updater.
      </td>
    </tr>

    <tr>
      <td>
        ..lastUpdatedOn
      </td>

      <td>
        string
      </td>

      <td>
        Timestamp when the cart promotion was last updated
      </td>
    </tr>

    <tr>
      <td>
        ..startDate
      </td>

      <td>
        integer
      </td>

      <td>
        Start date of the cart promotion.
      </td>
    </tr>

    <tr>
      <td>
        ..endDate
      </td>

      <td>
        integer
      </td>

      <td>
        End date of the cart promotion.
      </td>
    </tr>

    <tr>
      <td>
        ..campaignId
      </td>

      <td>
        integer
      </td>

      <td>
        Campaign identifier.
      </td>
    </tr>

    <tr>
      <td>
        ..promotionRestrictions
      </td>

      <td>
        Object
      </td>

      <td>
        Restrictions for applying the promotion.
      </td>
    </tr>

    <tr>
      <td>
        ..earnLimitedToSpecificAudience
      </td>

      <td>
        Boolean
      </td>

      <td>
        Indicates whether the cart promotion is limited to a specific audience.
      </td>
    </tr>

    <tr>
      <td>
        ..customFieldValues
      </td>

      <td>
        Object
      </td>

      <td>
        Custom fields or additional values.
      </td>
    </tr>

    <tr>
      <td>
        ..customerActivationRequired
      </td>

      <td>
        boolean
      </td>

      <td>
        Whether customers must activate the cart promotion before use.
      </td>
    </tr>

    <tr>
      <td>
        ..mode
      </td>

      <td>
        enum
      </td>

      <td>
        Mode of the promotion.
        Possible values: DISCOUNT, PAYMENT_VOUCHER
      </td>
    </tr>

    <tr>
      <td>
        ..maxIssuancePerCustomer
      </td>

      <td>
        integer
      </td>

      <td>
        Maximum times the promotion can be issued per customer.
        Maximum value: 50
      </td>
    </tr>

    <tr>
      <td>
        ..isStackable
      </td>

      <td>
        boolean
      </td>

      <td>
        Whether the promotion can be stacked with others.
      </td>
    </tr>
  </tbody>
</Table>

## Error code

| HTTP code | Description            |
| :-------- | :--------------------- |
| 404       | Incorrect API endpoint |
