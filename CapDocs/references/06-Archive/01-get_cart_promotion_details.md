---
title: Get Cart Promotions
excerpt: Get the cart promotion details for the organization
api:
  file: GetcartpromotionusingcartpromotionID.yaml
  operationId: getApi_gatewayv1promotions
hidden: true
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

## Pre-requisites

Make sure you have the right authentication and appropriate access control configured:

* **Access group resource**: Read access to customer group resource
* **Authentication**: Basic or OAuth authentication

## Resource information

|                    |    |
| :----------------- | :- |
| Pagination support | No |
| Rate limit         |    |
| Batch support      | No |

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
        Name of the promotion.
        Maximum length: 50 characters.
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
        Priority of the promotion. Lower value means higher priority.
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
        Shows if the promotion is active.
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
        Whether limited to a specific audience.
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
        Whether customers must activate before use.
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

<br />