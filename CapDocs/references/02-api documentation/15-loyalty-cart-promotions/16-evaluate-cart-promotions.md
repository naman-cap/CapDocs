---
title: Evaluate Cart Promotions
excerpt: Evaluates and returns the cart promotions applicable on the cart
api:
  file: v1.json
  operationId: post-evaluate-promotions
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
The Evaluate Promotions API returns the list of promotions applicable to a transaction by evaluating the current cart and customer data.

<Note title="Note">
* When there are multiple items with the same SKU, each item is evaluated individually, and the discount is split based on quantity or value.
  **For example:** If you add two Coke bottles to the cart twice(two SKU's), and there's an offer of ₹10 off on a combo of two bottles, the discount remains ₹10. It is split equally —  ₹5 for each combo.
</Note>

# Example Code

```curl
curl --location 'https://eu.api.capillarytech.com/api_gateway/v1/promotions/evaluate' \
--header 'Content-Type: application/json' \
--header 'X-CAP-API-AUTH-ORG-ID: 1007373' \
--header 'Authorization: Basic bmFtYW5fZG9jOmYjgyMzA3MWJmYjM5OGM5ZmM2YjZlY2I2MmEy' \
--header 'Cookie: _cfuvid=e_HL.m0dlBkoVzuS7spjZIGUb_7oNlVY2NBLi_LRMkg-1743071078145-0.0.1.1-604800000; _cfuvid=FJOLk_InVldNoSbYZk.nP2jNZssRgKvrDSafX7f9Nrc-1743426884062-0.0.1.1-604800000' \
--data '{
    "amount": "2000.00",
    "customerId": 98662653,
    "cartItems": [
        {
            "sku": "Sku#Fuel",
            "amount": "1000.00",
            "qty": "1.000000",
            "discount": null,
            "categoryList": [
                "Fuel",
                "Premium"
            ],
            "brandList": [
                "MaxFuel",
                "FuelCo"
            ]
        },
        {
            "sku": "Sku#food",
            "amount": "1000.00",
            "qty": "1.00",
            "discount": null
        }
    ],
    "promoCodes": null,
    "paymentVouchers": null,
    "cartTenders": [
        {
            "identifier": "CreditCard",
            "amount": "500.00"
        }
    ],
    "categoryHierarchySentInPayload": true
}'
```

<br />

# Headers

| **Header Name**                   | **Type** | **Description**                                                                                                                                                                                                                                                                         |
| --------------------------------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `X-CAP-API-ATTRIBUTION-TILL-CODE` | `string` | This header maps the provided till code to its corresponding till identifier. The API uses this identifier to fetch the correct organizational hierarchy and return only those cart promotions applicable to the transactions at that specific till and its associated store hierarchy. |

# Request Body

<Table align={["left","left","left"]}>
  <thead>
    <tr>
      <th>
        Parameter

        (Parameters marked with * are required)
      </th>

      <th>
        Data Type
      </th>

      <th>
        Description
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        amount*
      </td>

      <td>
        BigDecimal
      </td>

      <td>
        Total value of the products in the cart.
      </td>
    </tr>

    <tr>
      <td>
        customerId*
      </td>

      <td>
        Long
      </td>

      <td>
        Unique ID of the customer.
      </td>
    </tr>

    <tr>
      <td>
        cartItems
      </td>

      <td>
        Object
      </td>

      <td>
        Object containing details of the products in the cart
      </td>
    </tr>

    <tr>
      <td>
        * sku*
      </td>

      <td>
        String
      </td>

      <td>
        Unique identifier (SKU) for the product.
      </td>
    </tr>

    <tr>
      <td>
        * amount*
      </td>

      <td>
        BigDecimal
      </td>

      <td>
        Price of the product.
      </td>
    </tr>

    <tr>
      <td>
        * qty*
      </td>

      <td>
        BigDecimal
      </td>

      <td>
        Total quantity of the product
      </td>
    </tr>

    <tr>
      <td>
        * discount
      </td>

      <td>
        BigDecimal
      </td>

      <td>
        Discount  applied to the item, if any.
      </td>
    </tr>

    <tr>
      <td>
        * categoryList
      </td>

      <td>
        Array
      </td>

      <td>
        Categories the product belongs to. For example, `["Fuel", "Premium"]`.
      </td>
    </tr>

    <tr>
      <td>
        * brandList
      </td>

      <td>
        Array
      </td>

      <td>
        Brands associated with the product. For example, `["MaxFuel", "FuelCo"]`.
      </td>
    </tr>

    <tr>
      <td>
        cartTenders
      </td>

      <td>
        Object
      </td>

      <td>
        Object containing details of the payment method used for purchase.
      </td>
    </tr>

    <tr>
      <td>
        * identifier*
      </td>

      <td>
        String
      </td>

      <td>
        Identifier of the payment method used for the purchase.
      </td>
    </tr>

    <tr>
      <td>
        * amount
      </td>

      <td>
        BigDecimal
      </td>

      <td>
        Total amount paid using the payment method.
      </td>
    </tr>
  </tbody>
</Table>

```json
{
    "amount": "2000.00",
    "customerId": 98662653,
    "cartItems": [
        {
            "sku": "Sku#Fuel",
            "amount": "1000.00",
            "qty": "1.000000",
            "discount": null,
            "categoryList": [
                "Fuel",
                "Premium"
            ],
            "brandList": [
                "MaxFuel",
                "FuelCo"
            ]
        },
        {
            "sku": "Sku#food",
            "amount": "1000.00",
            "qty": "1.00",
            "discount": null
        }
    ],
    "promoCodes": null,
    "paymentVouchers": null,
    "cartTenders": [
        {
            "identifier": "CreditCard",
            "amount": "500.00"
        }
    ],
    "categoryHierarchySentInPayload": true
}
```

# Response Body

<Table>
  <thead>
    <tr>
      <th>
        Parameter
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
        Total value of the products in the cart.
      </td>
    </tr>

    <tr>
      <td>
        customerId
      </td>

      <td>
        Unique ID of the customer.
      </td>
    </tr>

    <tr>
      <td>
        evaluationId
      </td>

      <td>
        Unique identifier generated for this specific evaluation of the cart.
      </td>
    </tr>

    <tr>
      <td>
        cartItems
      </td>

      <td>
        Object containing details of the products in the cart
      </td>
    </tr>

    <tr>
      <td>
        * referenceId
      </td>

      <td>
        Unique identifier for the cart item.
      </td>
    </tr>

    <tr>
      <td>
        * sku
      </td>

      <td>
        Unique identifier (SKU) for the product.
      </td>
    </tr>

    <tr>
      <td>
        * amount
      </td>

      <td>
        Price of the product.
      </td>
    </tr>

    <tr>
      <td>
        * qty
      </td>

      <td>
        Total quantity of the product
      </td>
    </tr>

    <tr>
      <td>
        * discount
      </td>

      <td>
        Discount  applied to the item, if any.
      </td>
    </tr>

    <tr>
      <td>
        appliedPromotions
      </td>

      <td>
        Object containing details of cart promotions applied to this cart.
      </td>
    </tr>

    <tr>
      <td>
        * promotionId
      </td>

      <td>
        Unique ID of the cart promotion.
      </td>
    </tr>

    <tr>
      <td>
        * name
      </td>

      <td>
        Unique name of the cart promotion.
      </td>
    </tr>

    <tr>
      <td>
        * messageLabel
      </td>

      <td>
        Unique message that is displayed to the end user to describe the promotion.
      </td>
    </tr>

    <tr>
      <td>
        * promotionMode
      </td>

      <td>
        Type of cart promotion. Possible values:
        `DISCOUNT`: Promotion is a standard discount promotion.
        `PAYMENT_VOUCHER`:Promotion includes a payment voucher promotion.
      </td>
    </tr>

    <tr>
      <td>
        * redemptionCount
      </td>

      <td>
        Total number of times the cart promotion is redeemed.
      </td>
    </tr>

    <tr>
      <td>
        * discount
      </td>

      <td>
        Total discount applied to the cart.
      </td>
    </tr>

    <tr>
      <td>
        * identifier
      </td>

      <td>
        Base64 encoded details of the applied cart promotion. You can use this when redeeming a cart promotion using the

        [add transaction API](https://docs.capillarytech.com/reference/add-transaction-single)

        .
      </td>
    </tr>

    <tr>
      <td>
        appliedPaymentVouchers
      </td>

      <td>
        Payment vouchers applied, if any.
      </td>
    </tr>

    <tr>
      <td>
        cartTenders
      </td>

      <td>
        Object contains details of the payment methods used for the purchase.
      </td>
    </tr>

    <tr>
      <td>
        * identifier
      </td>

      <td>
        Identifier of the payment method used for the purchase.
      </td>
    </tr>

    <tr>
      <td>
        * amount
      </td>

      <td>
        Total amount paid using the payment method.
      </td>
    </tr>

    <tr>
      <td>
        * referenceId
      </td>

      <td>
        Unique ID for the cart tender.
      </td>
    </tr>

    <tr>
      <td>
        * adjustedAmount
      </td>

      <td>
        Total amount paid using the payment method.
      </td>
    </tr>

    <tr>
      <td>
        categoryHierarchySentInPayload
      </td>

      <td>
        Indicates whether the product category hierarchy was included in the request.
      </td>
    </tr>
  </tbody>
</Table>

```json
{
    "data": {
        "amount": "2000.000000",
        "customerId": 98662653,
        "cartItems": [
            {
                "referenceId": "f297716f-c3ee-4936-b88e-a5e0ed91d262",
                "sku": "Sku#food",
                "amount": "1000.000000",
                "qty": "1.000000",
                "discount": "0",
                "appliedPromotions": []
            },
            {
                "referenceId": "20f142ec-9a10-49f6-a326-abc48f58d904",
                "sku": "Sku#Fuel",
                "amount": "1000.000000",
                "qty": "1.000000",
                "discount": "0",
                "appliedPromotions": []
            }
        ],
        "evaluationId": "67ea9543e1c34e7d8e936839",
        "appliedPromotions": [
            {
                "promotionId": "67dd2a7cef21a64211227d02",
                "name": "promotion-cart",
                "messageLabel": "test!!",
                "promotionMode": "DISCOUNT",
                "redemptionCount": 1,
                "discount": "100.000000",
                "identifier": "eyJwcm9tb3Rpb25JZCI6IjY3ZGQyYTdjZWYyMWE2NDIxMTIyN2QwMiIsImRpc2NvdW50IjoiMTAwLjAwMDAwMCIsImFtb3VudCI6IjIwMDAuMDAwMDAwIiwicmVkZW1wdGlvbkNvdW50IjoxLCJ2ZXJzaW9uIjoidjEifQ=="
            }
        ],
        "appliedPaymentVouchers": [],
        "promoCodeEvaluationLogs": [],
        "paymentVoucherEvaluationLogs": [],
        "cartTenders": [
            {
                "identifier": "CreditCard",
                "amount": "500.00",
                "referenceId": "67ea9543e1c34e7d8e936831",
                "adjustedAmount": "500.00"
            },
            {
                "identifier": "CASH",
                "amount": "1400.000000",
                "referenceId": "67ea9543e1c34e7d8e936836",
                "adjustedAmount": "1400.000000"
            }
        ],
        "categoryHierarchySentInPayload": false
    }
}
```

<br />
