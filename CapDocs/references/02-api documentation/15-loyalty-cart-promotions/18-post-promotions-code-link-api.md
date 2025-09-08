---
title: Post Cart Promotions Code link API
excerpt: >-
  This API is used to link the code of the cart promotion earned by the customer
  to the customer id.
api:
  file: v1.json
  operationId: post-promotions-code-link-api
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
## Request body parameters

| Parameter  | Data type | Description                    |
| ---------- | --------- | ------------------------------ |
| customerId | integer   | unique ID of the customer      |
| code       | string    | promotion code to link         |
| mode       | string    | promotion mode (e.g. DISCOUNT) |

## Response parameters

| Parameter      | Data type | Description                                                           |
| -------------- | --------- | --------------------------------------------------------------------- |
| id             | string    | unique identifier for the promotion                                   |
| orgId          | integer   | identifier for the organization associated with the promotion         |
| promotionId    | string    | unique identifier for the specific promotion                          |
| promotionName  | string    | name of the promotion (e.g., "code promotion")                        |
| code           | string    | the promotion code that can be used for redemption                    |
| customerId     | integer   | unique ID of the customer linked to the promotion                     |
| active         | boolean   | indicates whether the promotion is currently active                   |
| createdOn      | integer   | timestamp indicating when the promotion was created (ms)              |
| validTill      | integer   | timestamp indicating when the promotion expires (ms)                  |
| mode           | string    | the mode of the promotion (e.g., "DISCOUNT")                          |
| redeemableFrom | integer   | timestamp indicating when the promotion can start being redeemed (ms) |

<br />
