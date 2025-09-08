---
title: Evaluate Promotion
excerpt: ''
api:
  file: v1.json
  operationId: evaluate-promotion
deprecated: false
hidden: true
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
## Request Body Parameters

| Parameter         | Datatype  | Description                       |
| ----------------- | --------- | --------------------------------- |
| amount            | double    |                                   |
| customerId        | long      | Unique ID of the customer.        |
| cartItems         | array-obj | Details of the promotion          |
| referenceId       | string    | Reference ID of the promotion.    |
| sku               | string    | SKU of the product.               |
| amount            | double    | Price of the product.             |
| qty               | int       | Quantity of line-items purchased. |
| discount          | double    | Discount applied                  |
| appliedPromotions | array     |                                   |