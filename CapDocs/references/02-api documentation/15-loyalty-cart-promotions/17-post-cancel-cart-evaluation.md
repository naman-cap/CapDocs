---
title: Cancel Cart Evaluation - Cart Promotion
excerpt: This API is used to cancel pending carts where a promotion is locked.
api:
  file: v1.json
  operationId: post-cancel-cart-evaluation
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
Consider a scenario where a particular promotion is applied in a cart but the transaction has not been processed yet. Such a state is called a locked state or pending cart state. This state prevents this promotion from being applied to any other cart. To proceed ahead, the current cart has to be released or canceled. This API can thus be used to cancel any pending carts.

> 👍 Note
>
> For an overview on our APIs and for hands-on testing, refer to [API overview ](https://docs.capillarytech.com/reference/apioverview)and [Make your first API call](https://docs.capillarytech.com/reference/make-your-first-api-call) documentation.

# Prerequisites

*   Authentication - Basic or OAuth authentication
*   Access group resource - Write access to customer group resource
*   customerId and evaluationId

# API Endpoint Example

`https://eu.api.capillarytech.com/api_gateway/v1/promotions/customer/565039518/evaluations/67e3dd673919452f135e2f23/cancel`

# Path Parameter

| Parameter (Parameters marked as * are required) | Data Type | Description                                                                                                                                                                                              |
| :---------------------------------------------- | :-------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| customerId*                                     | Long      | Unique Identifier of the customer issuing Cart Promotion                                                                                                                                                 |
| evaluationId*                                   | String    | Unique identifier that is generated when a cart evaluation is performed. To get evaluationId refer to [Post Evaluate Cart Promotion.](https://docs.capillarytech.com/reference/post-evaluate-promotions) |

# Response Body

```json 200 ok
{
    "data": {
        "status": true,
        "code": 201,
        "message": "Successfully closed pending cart."
    },
    "errors": []
}
```
```json 404 Not found
{
    "errors": [
        {
            "code": 404,
            "message": "Passed evaluation log id is not found"
        }
    ]
}
```

<br />

# Response Parameter

| Parameter | Data Type | Description                                                                                                   |
| :-------- | :-------- | :------------------------------------------------------------------------------------------------------------ |
| data      | Object    | Contains details of the cart evaluation cancellation status; not present if the cancellation is unsuccessful. |
| -status   | Boolean   | Indicates whether the cart evaluation cancellation was successful.                                            |
| -code     | Integer   | Response code related to the cart evaluation cancellation.                                                    |
| -message  | String    | Message corresponding to the response code for the cart evaluation cancellation.                              |
| error     | Object    | Contains details of any errors that occurred during the cancellation process.                                 |

# API Specific Error Code

| Error Code | Description | Reason                                                                |
| :--------- | :---------- | :-------------------------------------------------------------------- |
| 404        | Not Found   | The provided customerId or evaluationId does not exist or is invalid. |
