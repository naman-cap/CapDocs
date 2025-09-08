---
title: Redeem Cart Promotion
excerpt: This API records a customer's cart promotion redemption during a transaction.
api:
  file: v1.json
  operationId: redeem-cart-promotion
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
This API saves or applies a promotion that a customer used during a purchase. It records the details of the transaction, such as the customer information, the items bought, the discount received, and how the promotion was applied.

> 👍 Note
>
> For an overview on our APIs and for hands-on testing, refer to [API overview ](https://docs.capillarytech.com/reference/apioverview)and [Make your first API call](https://docs.capillarytech.com/reference/make-your-first-api-call) documentation.

# Prerequisites

*   Authentication - Basic or OAuth authentication
*   Access group resource - Write access to customer group resource
*   customerId and evaluationId

# API Endpoint Example

`https://eu.api.capillarytech.com/api_gateway/v1/promotions/redemptions`

# Request Body Parameters

<Table align={["left","left","left"]}>
  <thead>
    <tr>
      <th>
        Parameter
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
        customerIdentifierValue
      </td>

      <td>
        String
      </td>

      <td>
        The value used to identify the customer, such as their mobile number.
        Note:__ This field is required if `customerId` is not provided. It works together with `customerIdentifierType` to locate the customer.
      </td>
    </tr>

    <tr>
      <td>
        customerIdentifierType
      </td>

      <td>
        String
      </td>

      <td>
        Specifies the type of identifier used for the customer.
        Note:__ This field is required if `customerId` is not provided. It must match the type of value provided in `customerIdentifierValue`.
      </td>
    </tr>

    <tr>
      <td>
        customerId
      </td>

      <td>
        String
      </td>

      <td>
        Unique Identifier of the customer.
      </td>
    </tr>

    <tr>
      <td>
        transactionIdentifier*
      </td>

      <td>
        String
      </td>

      <td>
        Unique internal ID for the transaction in which the redemption is being recorded. It can be any string provided by the client system. This can be used to prevent duplicate redemptions. The maximum number of characters allowed is 250.
      </td>
    </tr>

    <tr>
      <td>
        transactionNumber*
      </td>

      <td>
        String
      </td>

      <td>
        Customer-facing bill, invoice, or receipt number for the transaction in which the redemption is being recorded. It can be any string provided by the client system. The API does not validate whether this matches an existing purchase transaction. The maximum number of characters allowed is 250.
      </td>
    </tr>

    <tr>
      <td>
        transactionDate*
      </td>

      <td>
        Integer
      </td>

      <td>
        Time of the transaction in milliseconds since epoch
      </td>
    </tr>

    <tr>
      <td>
        amount*
      </td>

      <td>
        Integer
      </td>

      <td>
        Total amount of the transaction before any discount
      </td>
    </tr>

    <tr>
      <td>
        lineItems
      </td>

      <td>
        Object
      </td>

      <td>
        Details of the items purchased in the transaction along with the promotions applied to them.
        **Note:** At least one of `lineItems` or `redemptions` must be specified in the request.
      </td>
    </tr>

    <tr>
      <td>
        * sku
      </td>

      <td>
        String
      </td>

      <td>
        Unique identifier for the product (Stock Keeping Unit) to which the promotion is applied
      </td>
    </tr>

    <tr>
      <td>
        * promotionId
      </td>

      <td>
        String
      </td>

      <td>
        Unique Identifier of the promotion being redeemed or applied to the item.
      </td>
    </tr>

    <tr>
      <td>
        * earnedPromotionId
      </td>

      <td>
        String
      </td>

      <td>
        Unique Identifier of the previously earned promotion being redeemed.
        **Note :**Earn Promotion ID is not validated against the customer identifier during final transaction processing. As a result, a promotion ID earned by one customer can currently be redeemed by another customer, if the transaction ID matches.
      </td>
    </tr>

    <tr>
      <td>

      </td>

      <td>

      </td>

      <td>

      </td>
    </tr>

    <tr>
      <td>
        * redemptionCount
      </td>

      <td>
        Integer
      </td>

      <td>
        The number of times this promotion is being redeemed for the item.
      </td>
    </tr>

    <tr>
      <td>
        * discount
      </td>

      <td>
        Integer
      </td>

      <td>
        The monetary value of the discount applied through the promotion
      </td>
    </tr>

    <tr>
      <td>
        * discountAppliedOnQuantity
      </td>

      <td>
        Integer
      </td>

      <td>
        Number of item units on which the discount was actually applied.
      </td>
    </tr>

    <tr>
      <td>
        * promotionAppliedOnQuantity
      </td>

      <td>
        Integer
      </td>

      <td>
        Quantity of the item that was eligible for the promotion.
      </td>
    </tr>

    <tr>
      <td>
        redemptions
      </td>

      <td>
        Object
      </td>

      <td>
        The redemptions array contains details about the promotions that were redeemed in the transaction.
        Note__: Either `lineItems` or `redemptions` must be provided. Both are optional individually, but one is required.
      </td>
    </tr>

    <tr>
      <td>
        * sku
      </td>

      <td>
        String
      </td>

      <td>
        The product SKU (Stock Keeping Unit) for which the promotion is being redeemed.
      </td>
    </tr>

    <tr>
      <td>
        * promotionId
      </td>

      <td>
        String
      </td>

      <td>
        Unique identifier of the promotion that is being redeemed.
      </td>
    </tr>

    <tr>
      <td>
        * redemptionCount
      </td>

      <td>
        Integer
      </td>

      <td>
        Number of times this promotion is being redeemed for the item.
      </td>
    </tr>

    <tr>
      <td>
        * discount
      </td>

      <td>
        Integer
      </td>

      <td>
        Discount amount applied as part of the redemption
      </td>
    </tr>

    <tr>
      <td>
        * discountAppliedOnQuantity
      </td>

      <td>
        Integer
      </td>

      <td>
        Quantity of the item on which the discount was actually applied.
      </td>
    </tr>

    <tr>
      <td>
        * promotionAppliedOnQuantity
      </td>

      <td>
        Integer
      </td>

      <td>
        Quantity of the item on which the discount was actually applied.
      </td>
    </tr>
  </tbody>
</Table>

# Response Body Parameters

<Table align={["left","left","left"]}>
  <thead>
    <tr>
      <th>
        Parameter
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
        orgId
      </td>

      <td>
        Integer
      </td>

      <td>
        Unique Identifier of your organization.
      </td>
    </tr>

    <tr>
      <td>
        customerIdentifierValue
      </td>

      <td>
        String
      </td>

      <td>
        Value used to identify the customer
      </td>
    </tr>

    <tr>
      <td>
        customerIdentifierType
      </td>

      <td>
        String
      </td>

      <td>
        Type of identifier provided
      </td>
    </tr>

    <tr>
      <td>
        customerId
      </td>

      <td>
        Integer
      </td>

      <td>
        Unique Identifier of the customer
      </td>
    </tr>

    <tr>
      <td>
        transactionIdentifier
      </td>

      <td>
        String
      </td>

      <td>
        Unique Identifier used to track transaction
      </td>
    </tr>

    <tr>
      <td>
        transactionNumber
      </td>

      <td>
        String
      </td>

      <td>
        Visible transaction number, may be same as or different from
      </td>
    </tr>

    <tr>
      <td>
        transactionDate
      </td>

      <td>
        Integer
      </td>

      <td>
        Timestamp of the transaction in milliseconds since epoch
      </td>
    </tr>

    <tr>
      <td>
        amount
      </td>

      <td>
        Integer
      </td>

      <td>
        Total transaction amount before applying discounts.
      </td>
    </tr>

    <tr>
      <td>
        redemptions
      </td>

      <td>
        Object
      </td>

      <td>
        The redemptions array contains details about the promotions that were redeemed in the transaction.
      </td>
    </tr>

    <tr>
      <td>
        * promotionId
      </td>

      <td>
        String
      </td>

      <td>
        Unique identifier of the promotion that is being redeemed.
      </td>
    </tr>

    <tr>
      <td>
        * redemptionCount
      </td>

      <td>
        Integer
      </td>

      <td>
        Number of times this promotion is being redeemed for the item.
      </td>
    </tr>

    <tr>
      <td>
        * discount
      </td>

      <td>
        String
      </td>

      <td>
        Discount amount applied as part of the redemption
      </td>
    </tr>

    <tr>
      <td>
        * discountAppliedOnQuantity
      </td>

      <td>
        String
      </td>

      <td>
        Quantity of the item on which the discount was actually applied.
      </td>
    </tr>

    <tr>
      <td>
        * promotionAppliedOnQuantity
      </td>

      <td>
        String
      </td>

      <td>
        Quantity of the item that was eligible for the promotion.
      </td>
    </tr>

    <tr>
      <td>
        lineItems
      </td>

      <td>
        Object
      </td>

      <td>
        Details of the items purchased in the transaction along with the promotions applied to them.
      </td>
    </tr>

    <tr>
      <td>
        * sku
      </td>

      <td>
        String
      </td>

      <td>
        Unique identifier for the product (Stock Keeping Unit) to which the promotion is applied
      </td>
    </tr>

    <tr>
      <td>
        * promotionId
      </td>

      <td>
        String
      </td>

      <td>
        Unique identifier of the promotion that is being redeemed.
      </td>
    </tr>

    <tr>
      <td>
        * earnedPromotionId
      </td>

      <td>
        String
      </td>

      <td>
        Unique Identifier of the previously earned promotion being redeemed.
      </td>
    </tr>

    <tr>
      <td>
        * redemptionCount
      </td>

      <td>
        Integer
      </td>

      <td>
        Number of times this promotion is being redeemed for the item.
      </td>
    </tr>

    <tr>
      <td>
        * discount
      </td>

      <td>
        String
      </td>

      <td>
        Discount amount applied as part of the redemption
      </td>
    </tr>

    <tr>
      <td>
        * discountAppliedOnQuantity
      </td>

      <td>
        String
      </td>

      <td>
        Quantity of the item on which the discount was actually applied.
      </td>
    </tr>

    <tr>
      <td>
        * promotionAppliedOnQuantity
      </td>

      <td>
        String
      </td>

      <td>
        Quantity of the item on which the discount was actually applied.
      </td>
    </tr>
  </tbody>
</Table>

# API Specific Error Code

| Error Code | Description | Reason                                                                                            |
| :--------- | :---------- | :------------------------------------------------------------------------------------------------ |
| 400        | Bad Request | At least lineItems or redemptions must be specified                                               |
| 400        | Bad Request | CustomerIdentifierType and CustomerIdentifierValue is mandatory when customerId is not specified. |
