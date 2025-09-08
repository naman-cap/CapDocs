---
title: Issue Cart Promotion
excerpt: Issue Cart Promotion for the customer.
api:
  file: v1.json
  operationId: issue-cart-promotion
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
This API is used to issue cart promotion to customers. Enter a customerId and promotionId of the Cart Promotion to issue the promotion to the Customer.

> 👍 Note
>
> For detailed information about the APIs and for hands-on testing, refer to the [API overview](https://docs.capillarytech.com/reference/apioverview) documentation and step-by-step guide on[ making your first API call.](https://docs.capillarytech.com/reference/make-your-first-api-call)

# Prerequisites

*   Authentication - Basic or OAuth authentication
*   Access group resource - Write access to customer group resource
*   Cart promotionId and customerId

# Resource Information

| URI                  | promotions/\{promotionId}/issueBulk |
| :------------------- | :---------------------------------- |
| HTTP method          | POST                                |
| Pagination Supported | NA                                  |
| Rate Limit           | NA                                  |
| Batch support        | Yes                                 |

# API Endpoint Example

[http://eu.api.capillarytech.com//api_gateway/v1/promotions/\{promoff}/issueBulk](http://eu.api.capillarytech.com//api_gateway/v1/promotions/{promoff}/issueBulk)

# Path Parameter

| Parameter (Parameters marked as * are required) | Data Type | Description                                                                                                                                                                                                                               |
| :---------------------------------------------- | :-------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| promotionId*                                    | String    | ID of cart promotion that is generated when creating a cart promotion. Use the [get promotions for a customer API](https://docs.capillarytech.com/reference/get-promotions-for-a-customer) to get the promotionId for the Cart Promotion. |

# Query Parameter

| Parameter (Parameters marked as * are required) | Data Type | Description                                                                                 |
| :---------------------------------------------- | :-------- | :------------------------------------------------------------------------------------------ |
| contextId*                                      | String    | Unique identifier of the issued promotion. It is used to identify the particular promotion. |

# Request Body

```
[
  564332013
]
```

# Request Body Parameters

| Parameter Name | Data Type | Description                        |
| :------------- | :-------- | :--------------------------------- |
| customerId     | Long      | Unique identifier of the customer. |

# Response Body

```json
{
    "data": {
        "564332013": {
            "id": "68230a3af1ebc84977d9ea2c",
            "customerId": 564332013,
            "promotionId": "67f3832ab206f929966adf81",
            "earnedFromId": "2 items in cart",
            "eventTime": 1747126842954,
            "validTill": 1748716199999
        }
    }
}
```

# Response Body Parameters

| Parameter       | Data Type | Description                                                                                  |
| :-------------- | :-------- | :------------------------------------------------------------------------------------------- |
| data            | Object    | Object containing details of the customer and issued cart promotion.                         |
| -- id           | String    | The unique identifier for the issued promotion instance.                                     |
| -- customerId   | Long      | The ID of the customer to whom the promotion was issued.                                     |
| -- promotionId  | String    | The ID of the promotion that was issued.                                                     |
| -- earnedFromId | String    | The context ID that was passed in the API request, used to track the source of the issuance. |
| -- eventTime    | Long      | The timestamp (in milliseconds) when the promotion was issued.                               |
| -- validTill    | Long      | The timestamp (in milliseconds) until which the issued promotion is valid.                   |

# API Error Code

| Code | Description                   |
| :--- | :---------------------------- |
| 404  | Passed promotion is not found |
