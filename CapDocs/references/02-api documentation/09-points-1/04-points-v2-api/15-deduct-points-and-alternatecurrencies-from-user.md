---
title: Deduct points and alternate currencies from user
excerpt: ''
api:
  file: v2.json
  operationId: deduct-points-and-alternatecurrencies-from-user
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
This API allows you to deduct reward currencies (points or alternate currencies) from a user. It is also referred to as the `Manual Points Adjustment API`.

> 👍 Notes
>
> * For detailed information about our APIs and for hands-on testing, refer documentation in [API overview](https://docs.capillarytech.com/reference/apioverview) and  step-by-step guide on making your first API call in [Make your first API call](https://docs.capillarytech.com/reference/make-your-first-api-call) .
> * You can enable `ALLOW_NEGATIVE_BALANCE_ON_RETURN` that support negative points. For example, if the negative points configuration is enabled and the currently available points for a customer are 0, you can still deduct 100 points from a customer. To enable, create a JIRA ticket to the Capillary Product Support team.
> * This API overrides the CONF_POINTS_RETURN_ENABLED configuration that prevents the reversal of earned points when a transaction is returned. Points are reversed even if the configuration is disabled.

# Prerequisites

*   Authentication: Basic or OAuth authentication
*   Access to Points access group resource. For more information, see [access group](https://docs.capillarytech.com/docs/access-group#access-group) documentation.

# Resource information

|               |                                              |
| :------------ | :------------------------------------------- |
| URI           | v2/customers/lookup/negativePointsAdjustment |
| HTTP method   | POST                                         |
| Pagination    | NA                                           |
| Rate limit    | NA                                           |
| Batch support | NA                                           |

# API endpoint example

`https://eu.api.capillarytech.com/v2/customers/lookup/negativePointsAdjustment?identifierName=mobile&identifierValue=9876543210&source=INSTORE`

# Request query parameters

| Field name       | Data type | Description                                                                                                                                                                                           |
| :--------------- | :-------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| identifierName*  | Enum      | Identifier of the user. Supported values: `externalId`, `mobile`, `email`                                                                                                                             |
| identifierValue* | String    | Value of the identifier.                                                                                                                                                                              |
| source*          | Enum      | Source in which the identifier is available. Supported values: `INSTORE`, `MARTJACK`, `WECHAT`, `FACEBOOK` , `WEB_ENGAGE`, `INSTORE`, `TMALL`, `TAOBAO`, `JD`, `ECOMMERCE`, `WEBSITE`, `LINE`, `ALL`. |

# Request body parameters

<HTMLBlock>{`
<table style="width: 100%; border-collapse: collapse;">
<thead>
<tr>
  <th style="border: 1px solid #ddd; padding: 8px;">Parameter</th>
  <th style="border: 1px solid #ddd; padding: 8px;">Data type</th>
  <th style="border: 1px solid #ddd; padding: 8px;">Description</th>
</tr>
</thead>
<tbody>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>pointsAwardedId</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Integer</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Unique ID of the awarded points.<br><strong>NOTES:</strong>  </p>
<ul>
<li>Provide the <code>pointsAwardedRefType</code> along with the <code>pointsAwardedId</code>.</li>
<li><code>pointsAwardedId</code> is an internally generated identifier assigned when points are awarded.  This identifier cannot be retrieved through an API. Raise a ticket to the Capillary product support team to obtain the <code>pointsAwardedId</code>.</li>
</ul>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>pointsAwardedRefType</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Enum</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Reference type for points awarded. Supported values: <code>bill_regular</code>, <code>bill_promotions</code>, <code>line_item_regular</code>, <code>line_item_promotions</code>, <code>customer_promotions</code></p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>promotionId</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Integer</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Unique identifier for the promotion<br><strong>NOTE:</strong> Provide either <code>promotionId </code>or <code>promotionIdentifier</code>. </p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>promotionIdentifier</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>string</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Identifier for the promotion.<br><strong>NOTE:</strong> Provide the <code>programId</code> along with the <code>promotionIdentifier</code>. </p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>programId</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Integer</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Unique ID of the loyalty program associated with the promotion.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>alternateCurrencyName</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>String</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Unique name of the alternate currency.<br>Refer to the documentation on <a href="https://docs.capillarytech.com/docs/alternate-currencies#viewing-alternate-currencies">viewing alternate currencies</a> to identify the alternate currency name. </p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>pointCategoryTypes</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Enum</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Points category to deduct for the user. Supported values:<br><code>REGULAR</code> <code>PROMISED </code>and <code>EXTERNAL_TRIGGER_BASED</code>.  </p>
<p><strong>Note:</strong> Default value is <code>REGULAR</code> if the <code>pointCategoryTypes</code> is not provided.<br>Refer to the documentation for more information on <a href="https://docs.capillarytech.com/docs/dimension-tables#points-category">points categories</a>.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>pointsToBeAdjusted*</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Integer</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Points to be deducted for the user. Provide a value greater than 0. This is applicable for points.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>valueToBeAdjusted*</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Integer</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Alternate currencies to be deducted for the user. Provide a value greater than 0. This is applicable for alternate currencies.<br>Provide the <code>alternateCurrencyName</code> when using this parameter.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>reasonOfReturn*</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>String</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Reason for the return of points.</p>
</td>
</tr>
</tbody>
</table>
`}</HTMLBlock>

## Deducting points

```json No identifiers
{
    "pointCategoryTypes": "REGULAR",
    "pointsToBeAdjusted": "100.00",
    "reasonOfReturn": "Extra points were issued"
}
```
```json with pointsawardedId + pointsAwardedRefType
{
    "pointsAwardedId": 38768508,
    "pointsAwardedRefType": "bill_regular",
    "pointCategoryTypes": "REGULAR",
    "pointsToBeAdjusted": "10",
    "reasonOfReturn": "Extra points were issued"
}
```
```json with promotionId
{
    "promotionId": 79555,
    "pointsToBeAdjusted": "10",
    "pointCategoryTypes": "REGULAR",
    "reasonOfReturn": "Extra points were issued"
}
```
```json with promtionIdentifier + programId
{
    "promotionIdentifier": "b86ca53f-4c5e-46d3-8d33-b61c4f49392c",
    "programId": 973,
    "pointCategoryTypes": "REGULAR",
    "pointsToBeAdjusted": "10",
    "reasonOfReturn": "Extra points were issued"
}
```
```json with programId
{
    "programId": 973,
    "pointCategoryTypes": "REGULAR",
    "pointsToBeAdjusted": "10",
    "reasonOfReturn": "Extra points were issued"
}
```

## Deducting alternate currencies

```json with pointsawardedId + pointsAwardedRefType
{
    "pointsAwardedId": 38768508,
    "pointsAwardedRefType": "bill_regular",
    "alternateCurrencyName": "coins",
    "pointCategoryTypes": "REGULAR",
    "valueToBeAdjusted": "10",
    "reasonOfReturn": "Extra points were issued"
}
```
```json with promotionId
{
    "promotionId": 79555,
    "alternateCurrencyName": "coins",
    "pointCategoryTypes": "REGULAR",
    "valueToBeAdjusted": "10",
    "reasonOfReturn": "Extra points were issued"
}
```
```json with promtionIdentifier + programId
{
    "promotionIdentifier": "b86ca53f-4c5e-46d3-8d33-b61c4f49392c",
    "programId": 973,
    "alternateCurrencyName": "coins",
    "pointCategoryTypes": "REGULAR",
    "valueToBeAdjusted": "10",
    "reasonOfReturn": "Extra points were issued"
}
```
```json with programId
{
    "programId": 973,
    "alternateCurrencyName": "coins",
    "pointCategoryTypes": "REGULAR",
    "valueToBeAdjusted": "10",
    "reasonOfReturn": "Extra points were issued"
}
```

# Response parameters

<HTMLBlock>{`
<table style="width: 100%; border-collapse: collapse;">
<thead>
<tr>
  <th style="border: 1px solid #ddd; padding: 8px;">Field name</th>
  <th style="border: 1px solid #ddd; padding: 8px;">Description</th>
</tr>
</thead>
<tbody>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>status</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Status of the operation. Possible values:<br><code>success</code>: The operation was successful.<br><code>false</code>: The operation was unsuccessful.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>pointsAvailable</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Points available for the customer after the deduction.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>valueAvailable</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Alternate currencies available for the customer after the deduction.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>message</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Note for the point deduction operation. </p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>warnings</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Warnings (if any).</p>
</td>
</tr>
</tbody>
</table>
`}</HTMLBlock>

```json Deducting points
{
    "status": "success",
    "pointsAvailable": "670.000",
    "message": "points deducted successfully for the user ",
    "warnings": []
}
```
```json Deducting alternate currencies
{
    "status": "success",
    "valueAvailable": "80145.500",
    "message": "DocCoin deducted successfully for the user ",
    "warnings": []
}
```

# API Error Codes

| Code | Description                                                                                                                       | Reason                                                                                      |
| :--- | :-------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------ |
| 8906 | decimal places passed: 3 is greater than the configured round decimals: 2 for programId: 973                                      | Decimal places are higher than configured decimals for the program.                         |
| 8003 | Invalid source                                                                                                                    | Source is invalid or incorrect.                                                             |
| 8015 | Customer not found for the given identifiers                                                                                      | Identifier value is invalid or incorrect.                                                   |
| 8013 | Lookup,Invalid identifier passed                                                                                                  | Type of identifier is invalid or incorrect.                                                 |
| 8907 | points to be deducted 101.54 is greater than available points for program and NegativeBalanceOnReturn config is disabled for org. | Points to deduct is higher than the available points balance.                               |
| 8888 | Points to be adjusted cannot be zero                                                                                              | Points to deduct is zero.                                                                   |
| 8887 | Provide Program Id with Promotion Identifier                                                                                      | `programId` is not provided along with the `promotionIdentifier`                            |
| 8874 | promotion id passed is invalid                                                                                                    | `promotionId `provided is invalid or incorrect.                                             |
| 8877 | points awarded Id passed is invalid                                                                                               | `pointsAwardedId`provided is invalid or incorrect.                                          |
| 9975 | Points awarded ref type is invalid                                                                                                | `pointsAwardedRefType`provided is invalid or incorrect.                                     |
| 8911 | No alternate currency with name coins found for programId in org                                                                  | `alternateCurrencyName`provided is invalid or incorrect.                                    |
| 8882 | Reason for adjustment cannot be null                                                                                              | Reason for return is not provided.                                                          |
| 1218 | Customer not enrolled in loyalty program : customer not found for `programId `97                                                  | Customer is not enrolled in the loyalty program or the `programId` is invalid or incorrect. |

<br />

<Callout icon="📘" theme="info">
  **Note**

  Capillary does not support converting already allocated redeemable points to non-redeemable points. If you need to remove or suppress redeemable points after allocation (for example, due to double allocation or error), you can use the 

  Manual Points Adjustment [UI](https://docs.capillarytech.com/docs/points-deductions#manual-points-adjustment)/ [API](https://docs.capillarytech.com/reference/deduct-points-and-alternatecurrencies-from-user#/).
</Callout>
