---
title: Get Loyalty Promotion Benefits for Customer
excerpt: ''
api:
  file: v2.json
  operationId: get-promotion-benefits-for-customer
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
This API fetches a consolidated view (summary) of all loyalty promotion benefits—points, alternate currencies, rewards, and badges—that a specific customer has earned for a loyalty promotion.

> 👍 Notes
>
> * For detailed information about our APIs and for hands-on testing, refer documentation in [API overview](https://docs.capillarytech.com/reference/apioverview) and  step-by-step guide on making your first API call in [Make your first API call](https://docs.capillarytech.com/reference/make-your-first-api-call) .
> * This API only lists benefits earned from a promotion on or after **June 12, 2025**. Any benefits earned before that will not be included.

# Prerequisites

*   Authentication: Basic/OAuth authentication
*   Default access group
*   `programId` and `promotionId` or `promotionIdentifier`

# Resource Information

|               |                                                             |
| :------------ | :---------------------------------------------------------- |
| URI           | /v2/customers/lookup/customerPromotionDetails/actionSummary |
| HTTP method   | GET                                                         |
| Pagination    | No. Sorting is not supported.                               |
| Rate limit    | NA                                                          |
| Batch support | NA                                                          |

# Example API cURL

`https://eu.api.capillarytech.com/v2/customers/lookup/customerPromotionDetails/actionSummary?source=INSTORE&identifierName=mobile&identifierValue=919078345795&programId=2568&promotionId=2000065`

# Query parameters

<HTMLBlock>{`
<table style="width: 100%; border-collapse: collapse;">
<thead>
<tr>
  <th style="border: 1px solid #ddd; padding: 8px;">Parameter Name (Parameters marked as * are required)</th>
  <th style="border: 1px solid #ddd; padding: 8px;">Data Type</th>
  <th style="border: 1px solid #ddd; padding: 8px;">Description</th>
</tr>
</thead>
<tbody>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>source*</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Enum</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Source of customer information. Supported values:<br><code>INSTORE</code>,<code>FACEBOOK</code>,<code>WEB_ENGAGE</code>,<code>WECHAT</code>,<code>MARTJACK</code>,<code>TMALL</code>,<code>TAOBAO</code>,<code>JD</code>,<code>ECOMMERCE</code>,<code>WEBSITE</code>,<code>LINE</code>,<code>MOBILE_APP</code></p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>identifierName*</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Enum</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Identifier type to identify the customer. Supported values: <code>mobile</code>, <code>id</code>, <code>externalId</code></p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>identifierValue*</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>String</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Value corresponding to the <code>identifierName</code> provided.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>programId*</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Integer</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Unique ID of the loyalty program. To retrieve the <code>programId</code> , use the <a href="https://docs.capillarytech.com/reference/get-loyalty-programs">Get Loyalty Programs API</a> .</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>promotionId</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>String</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Unique ID of the loyalty promotion. Required if <code>promotionIdentifier</code> is not provided. To retrieve the <code>promotionId</code>, use the <a href="https://docs.capillarytech.com/reference/get-promotion-details">Get Details of all Promotions</a> API.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>promotionIdentifier</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>String</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>External identifier for the loyalty promotion. Required if <code>promotionId</code> is not provided. To retrieve the <code>promotionIdentifier</code>, use the <a href="https://docs.capillarytech.com/reference/get-promotion-details">Get Details of all Promotions</a>  API.</p>
</td>
</tr>
</tbody>
</table>
`}</HTMLBlock>

# Response body

```json Response with Benefits
{
    "orgId": 51135,
    "programId": 2568,
    "customerId": 387729100,
    "promotionId": 2000065,
    "promotionIdentifier": "021a1876-17d9-4d7a-bd2c-e74a65298398",
    "points": [
        {
            "pointsCategory": "REGULAR_POINTS",
            "totalPointsIssued": 600.000,
            "numberOfTimesIssued": 6,
            "lastIssuedOn": "2025-03-22T17:36:21+05:30"
        },
        {
            "pointsCategory": "PROMISED_POINTS",
            "totalPointsIssued": 600.000,
            "numberOfTimesIssued": 6,
            "lastIssuedOn": "2025-03-22T17:36:21+05:30"
        }
    ],
    "alternateCurrencies": [
        {
            "alternateCurrencyName": "DocCoin",
            "alternateCurrencySubDetails": [
                {
                    "alternateCurrencyType": "REGULAR",
                    "totalIssued": 5600.000,
                    "numberOfTimesIssued": 8,
                    "lastIssuedOn": "2025-03-22T17:36:21+05:30"
                }
            ]
        }
    ],
    "rewards": [
        {
            "rewardSeriesId": "113336.0",
            "numberOfTimesIssued": 2,
            "lastIssuedOn": "2025-03-29T16:30:01+05:30"
        }
    ],
    "badges": [
        {
            "badgeSeriesId": "67ce697296dcfc6386c64f8a",
            "numberOfTimesIssued": 8,
            "lastIssuedOn": "2025-03-22T17:36:23+05:30"
        }
    ],
    "warnings": []
}

 
```
```json Promotion not found with given id/identifier
{
    "errors": [
        {
            "status": false,
            "code": 8874,
            "message": "promotion id passed is invalid"
        }
    ]
}
```
```json Customer not found with provided identifiers
{
    "errors": [
        {
            "status": false,
            "code": 8015,
            "message": "Customer not found for the given identifiers"
        }
    ]
}
```
```json Insufficient parameters
{
    "errors": [
        {
            "status": false,
            "code": 8883,
            "message": "Insufficient parameters passed, program id and one of promotion id/identifier are required."
        }
    ]
}
```
```json Error(s) when retrieving the details
{
    "errors": [
        {
            "status": false,
            "code": 8105,
            "message": "Error fetching promotion data. Verify programs/promotionIdentifier passed."
        }
    ]
}
```

# Response parameters

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
        orgId
      </td>

      <td>
        Unique ID of the organization.
      </td>
    </tr>

    <tr>
      <td>
        programId
      </td>

      <td>
        Unique ID of the loyalty program.
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
        promotionId
      </td>

      <td>
        Unique ID of the loyalty promotion.
      </td>
    </tr>

    <tr>
      <td>
        promotionIdentifier
      </td>

      <td>
        External identifier of the loyalty promotion.
      </td>
    </tr>

    <tr>
      <td>
        points
      </td>

      <td>
        Array containing details about points earned.
      </td>
    </tr>

    <tr>
      <td>
        * pointsCategory
      </td>

      <td>
        Category of the points issued. Possible values: `REGULAR_POINTS`, `PROMISED_POINTS`, `EXTERNAL_TRIGGER_BASED_POINTS`.
      </td>
    </tr>

    <tr>
      <td>
        * totalPointsIssued
      </td>

      <td>
        Total number of points issued for the loyalty promotion.
      </td>
    </tr>

    <tr>
      <td>
        * numberOfTimesIssued
      </td>

      <td>
        Number of times points were issued for the loyalty promotion.
      </td>
    </tr>

    <tr>
      <td>
        * lastIssuedOn
      </td>

      <td>
        Timestamp of the last time points were issued under this category in ISO 8601 `YYYY-MM-DDTHH:mm:ss+HH:mm` format.
      </td>
    </tr>

    <tr>
      <td>
        alternateCurrencies
      </td>

      <td>
        Object containing details about alternate currencies earned.
      </td>
    </tr>

    <tr>
      <td>
        * alternateCurrencyName
      </td>

      <td>
        Name of the alternate currency.
      </td>
    </tr>

    <tr>
      <td>
        * alternateCurrenciesSubDetails
      </td>

      <td>
        Object containing details for different types within this alternate currency.
      </td>
    </tr>

    <tr>
      <td>
        -- alternateCurrencyType
      </td>

      <td>
        Type of the alternate currency issued. Possible values: `REGULAR`, `PROMISED`, `EXTERNAL_TRIGGER_BASED`.
      </td>
    </tr>

    <tr>
      <td>
        -- totalIssued
      </td>

      <td>
        Total amount of this alternate currency type issued for this loyalty promotion.
      </td>
    </tr>

    <tr>
      <td>
        -- numberOfTimesIssued
      </td>

      <td>
        Number of times this alternate currency type was issued.
      </td>
    </tr>

    <tr>
      <td>
        -- lastIssuedOn
      </td>

      <td>
        Timestamp of the last time this alternate currency type was issued in ISO 8601 `YYYY-MM-DDTHH:mm:ss+HH:mm` format.
      </td>
    </tr>

    <tr>
      <td>
        rewards
      </td>

      <td>
        Object containing details about rewards earned.
      </td>
    </tr>

    <tr>
      <td>
        * rewardSeriesId
      </td>

      <td>
        Unique identifier for the reward series.
      </td>
    </tr>

    <tr>
      <td>
        * numberOfTimesIssued
      </td>

      <td>
        Number of times the reward was issued.
      </td>
    </tr>

    <tr>
      <td>
        * lastIssuedOn
      </td>

      <td>
        Timestamp of the last time this reward was issued in ISO 8601`YYYY-MM-DDTHH:mm:ss+HH:mm` format.
      </td>
    </tr>

    <tr>
      <td>
        badges
      </td>

      <td>
        Object containing details about badges earned.
      </td>
    </tr>

    <tr>
      <td>
        * badgeSeriesId
      </td>

      <td>
        Unique identifier for the reward series.
      </td>
    </tr>

    <tr>
      <td>
        * numberOfTimesIssued
      </td>

      <td>
        Number of times the badge was issued.
      </td>
    </tr>

    <tr>
      <td>
        * lastIssuedOn
      </td>

      <td>
        Timestamp of the last time this badge was issued in ISO 8601`YYYY-MM-DDTHH:mm:ss+HH:mm` format.
      </td>
    </tr>

    <tr>
      <td>
        warnings
      </td>

      <td>
        Object containing warnings, if any.
      </td>
    </tr>
  </tbody>
</Table>

# API Specific Error Codes

| Error Code | Description                                             | Reason                                                                                                 |
| :--------- | :------------------------------------------------------ | :----------------------------------------------------------------------------------------------------- |
| 8116       | No benefits earned by customer for the given promotion. | The API call was successful, but the customer hasn't received any benefits yet. (Returned in warnings) |
| 8874       | Promotion id passed is invalid                          | The provided `promotionId` or `promotionIdentifier` does not exist or is invalid.                      |
| 8015       | Customer not found for the given identifiers            | No customer matches the provided `identifierName` and `identifierValue`.                               |
| 8883       | Insufficient parameters passed                          | `programId` or one of `promotionId`/`promotionIdentifier` is missing.                                  |
| 8105       | Error fetching promotion data                           | An internal error occurred while retrieving promotion details (e.g., thrift call failed).              |
