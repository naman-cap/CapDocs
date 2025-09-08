---
title: Add Promotion Redemption
excerpt: ''
api:
  file: v1.json
  operationId: add-promotion-redemption
deprecated: false
hidden: true
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
This API allows you to separate the evaluation and redemption processes, giving brands the flexibility to apply discounts of their choice during redemption without needing to match the discount in the evaluation response by the promotion engine.

> 👍 Note
> 
> For detailed information about our APIs and for hands-on testing, refer documentation in [API overview](https://docs.capillarytech.com/reference/apioverview) and  step-by-step guide on making your first API call in [Make your first API call](https://docs.capillarytech.com/reference/make-your-first-api-call) .

# Prerequisites

-   Authentication: Basic or OAuth authentication 
-   Default access group 
-   Brand will have to enable **REDEMPTION_WITHOUT_CART_EVALUATION**.
-   Brands will have to enable **stacking** since they need multiple promotions to be applied at line item level and cart level. 
  By default, `stacking` and `REDEMPTION_WITHOUT_CART_EVALUATION` is not enabled for the orgs. Raise a Jira ticket to the sustenance team to enable.

# Resource information

|                        |                                       |
| :--------------------- | :------------------------------------ |
| URI                    | api_gateway/v1/promotions/redemptions |
| HTTP Method            | POST                                  |
| Pagination             | No                                    |
| Batch support          | No                                    |
| Rate limit information | None                                  |

# API endpoint example

`https://eu.api.capillarytech.com/api_gateway/v1/promotions/redemptions`

# Request body parameters

| Parameter                              | Data Type        | Description                                                                                                     |
| -------------------------------------- | ---------------- | --------------------------------------------------------------------------------------------------------------- |
| customerIdentifierValue\*              | String           | Value of the customer identifier.                                                                               |
| customerIdentifierType\*               | String           | Type of customer identifier.                                                                                    |
| customerId\*                           | String           | Unique customer ID. Customer ID will be given preference over Customer Identifier Value, if both are specified. |
| transactionIdentifier                  | String           | Unique identifier for the transaction.                                                                          |
| transactionNumber                      | String           | Reference number for the transaction.                                                                           |
| transactionDate                        | Timestamp        | Date of the transaction in milliseconds since epoch.                                                            |
| amount                                 | Number           | Total amount of the transaction.                                                                                |
| lineItems                              | Array of Objects | Details of items involved in the transaction.                                                                   |
| lineItems.sku                          | String           | SKU for the item. Validation will be done to verify if transaction contains this SKU.                           |
| lineItems.promotionId                  | String           | Promotion ID received post evaluate call                                                                        |
| lineItems.earnedPromotionId            | String           | Earned Promotion ID received post evaluate call.                                                                |
| lineItems.redemptionCount              | Integer          | Number of times redemptions applied on the promotion                                                            |
| lineItems.discount                     | Number           | Discount amount applied to the item.                                                                            |
| lineItems.discountAppliedOnQuantity    | Integer          | Quantity on which the discount was applied.                                                                     |
| lineItems.promotionAppliedOnQuantity   | Integer          | Quantity on which the promotion was applied.                                                                    |
| redemptions                            | Array of Objects | Details of the redemptions applied.                                                                             |
| redemptions.sku                        | String           | SKU for the redeemed item.                                                                                      |
| redemptions.promotionId                | String           | ID of the applied promotion during redemption.                                                                  |
| redemptions.redemptionCount            | Integer          | Number of redemptions applied.                                                                                  |
| redemptions.discount                   | Number           | Discount amount applied during redemption.                                                                      |
| redemptions.discountAppliedOnQuantity  | Integer          | Quantity on which the redemption discount was applied.                                                          |
| redemptions.promotionAppliedOnQuantity | Integer          | Quantity on which the redemption promotion was applied.                                                         |

```json
{
  "customerIdentifierValue" : "917214306639",  
  "customerIdentifierType" : "mobile",
  "customerId" : "-1",
  "transactionIdentifier" : "2151411843",
  "transactionNumber" : "215141171123",
   "transactionDate":1733307699000,  
   "amount":200,
   "lineItems" : [
    {
        "sku":"Sku#Fuel",  
        "promotionId":"674fbb982335bd1d58a8c2a4",   
        "earnedPromotionId":"674d9b222335bd1d58a8c09c",  
        "redemptionCount":1,
        "discount":100,
        "discountAppliedOnQuantity":1,
        "promotionAppliedOnQuantity":1
     }
   ],
   "redemptions" : [
      {
        "sku":"Sku#Fuel",  
        "promotionId":"674fbb982335bd1d58a8c2a4",   
        "redemptionCount":1,
        "discount":100,
        "discountAppliedOnQuantity":1,
        "promotionAppliedOnQuantity":1
     }
   ]
}
```

# Response parameters (Have to check)

<HTMLBlock>{`
<table style="width: 100%; border-collapse: collapse;">
<thead>
<tr>
  <th style="border: 1px solid #ddd; padding: 8px;">Parameter Name</th>
  <th style="border: 1px solid #ddd; padding: 8px;"> Data Type</th>
  <th style="border: 1px solid #ddd; padding: 8px;">Description</th>
</tr>
</thead>
<tbody>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>ownerType</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Enum</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>The module claimed by the badge.<br>Supported values: Loyalty program, Milestones, Campaigns, Journeys, Goodwill.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>referenceId</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>String</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Unique reference ID of the owner type.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>isActive</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Boolean</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Indicates whether the badge is active.</p>
</td>
</tr>
</tbody>
</table>
`}</HTMLBlock>


```json 200- Response

```
```json 400- Promotion ID not found for org
{
    "timestamp": 1737615222993,
    "errorCode": 400,
    "message": "Validation Failed",
    "errorDetails": [
        "Promotion with ids : 674fbb982335bd1d58a8c2a4, 674fbb982335bd1d58a8c2a4 not found for org : 4000004 ."
    ]
}
```

# API-specific error codes

| Error code | Description                     |
| :--------- | :------------------------------ |
| 400        | Promotion ID not found for org. |