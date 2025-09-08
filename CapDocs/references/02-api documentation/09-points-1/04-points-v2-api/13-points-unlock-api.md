---
title: Convert Promised Points
excerpt: Convert promised points and alternate currencies to redeemable points.
api:
  file: v2.json
  operationId: points-unlock-api
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
This API can be used to convert promised points and alternate currencies to redeemable points or alternate currencies. All promised reward currencies (points and alternate currencies) are converted to regular reward currencies.

# Prerequisites

* Authentication: Basic/OAuth authentication
* Access group: Default access group

# Resource Information

|                        |                                |
| :--------------------- | :----------------------------- |
| URI                    | v2/points/unlockPromisedPoints |
| HTTP Method            | POST                           |
| Pagination             | No                             |
| Batch support          | NA                             |
| Rate limit information | NA                             |

# API endpoint example

`https://eu.api.capillarytech.com/v2/points/unlockPromisedPoints`

# Query parameters

<HTMLBlock>{`
<table style="width: 100%; border-collapse: collapse;">
<thead>
<tr>
  <th style="border: 1px solid #ddd; padding: 8px;">Parameter Name<br>(Parameters marked with * are mandatory)</th>
  <th style="border: 1px solid #ddd; padding: 8px;">Data Type</th>
  <th style="border: 1px solid #ddd; padding: 8px;">Description</th>
</tr>
</thead>
<tbody>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>identifierName*</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>String</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Identifier type to identify the customer. Supported values: <code>mobile</code>, <code>id</code>, <code>externalId</code>, <code>cuid</code>, <code>primaryUserId</code></p>
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
  <td style="border: 1px solid #ddd; padding: 8px;"><p>source*</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Enum</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Source of customer information. Supported values: <code>INSTORE</code>,<code>FACEBOOK</code>,<code>WEB_ENGAGE</code>,<code>WECHAT</code>,<code>MARTJACK</code>,<code>TMALL</code>,<code>TAOBAO</code>,<code>JD</code>,<code>ECOMMERCE</code>,<code>WEBSITE</code>,<code>LINE</code>,<code>MOBILE_APP</code></p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>type</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>String</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Type of entity. Supported value: <code>USERGROUP2</code>, <code>CUSTOMER</code>(default).</p>
</td>
</tr>
</tbody>
</table>
`}</HTMLBlock>

# Request body

```json
{
    "eventName": "TransactionAdd",
    "billNumber": 16484,
    "eventLogId": 1235315,
    "lineItemIds": [
        64384,
        64743,
        94745
    ],
    "itemCodes": [
        "gd739",
        "gd123"
    ],
    "billDate": 2022-02-12,
    "sourceStoreId": 1122,
    "sourceTilId": 323,
    "sourceProgramId": 2121
}
```

# Request body parameters

| Parameter       | Data Type      | Description                                                                                                                                                                                        |
| :-------------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| eventName\*     | String         | Unique ID of the event that issued the points                                                                                                                                                      |
| billNumber\*    | String         | Unique bill number of the transaction                                                                                                                                                              |
| eventLogId      | Array          | Unique ID that is generated when the event is triggered.                                                                                                                                           |
| lineItemIds     | Array (Long)   | List of unique identifiers for line items in a transaction or bill.                                                                                                                                |
| itemCodes       | Array (String) | List of codes or SKUs that represent specific products or items in a transaction.                                                                                                                  |
| billDate        | String         | Date of the transaction in `YYYY-MM-DD`                                                                                                                                                            |
| sourceStoreId   | Integer        | Unique ID of the store where the transaction occurred.                                                                                                                                             |
| sourceTillId    | Integer        | Unique till ID where the transaction occurred.                                                                                                                                                     |
| sourceProgramId | Integer        | Unique ID of the loyalty program where the transaction occurred. To retrieve the `programId` , use the [Get Loyalty Programs API](https://docs.capillarytech.com/reference/get-loyalty-programs) . |

# Response body

```json
{
  "pointsUnlocked": [
    { 
      "billNumber": 374,
      "pointsUnlocked": 6,
      "programId" : 56
    },
    {
      "billNumber": 374
      "itemCode": 7583,
      "pointsUnlocked": 24,
      "programId" : 12
    },
    {
      "billNumber": 374
      "itemCode": 4364,
      "pointsUnlocked": 12,
      "programId" : 34
    },
    {
      "pointsUnlocked": 24,
      "programId" : 12,
      "promotionIdentifier":"id1"
      "promotionId":12
      "promotionName":"promotion 1"
    } 
  ]
}
```

# Response parameters

<HTMLBlock>{`
<table style="width: 100%; border-collapse: collapse;">
<thead>
<tr>
  <th style="border: 1px solid #ddd; padding: 8px;">Parameter<br>(Parameters marked with * are mandatory)</th>
  <th style="border: 1px solid #ddd; padding: 8px;">Description</th>
</tr>
</thead>
<tbody>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>pointsUnlocked</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Object containing details of the points unlocked.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><ul>
<li>billNumber</li>
</ul>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Unique bill number of the transaction</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><ul>
<li>itemCode</li>
</ul>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>List of codes or SKUs that represent specific products or items in a transaction.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><ul>
<li>pointsUnlocked</li>
</ul>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Total number of points unlocked for the bill.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><ul>
<li>programId</li>
</ul>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Unique ID of the loyalty program where the transaction occurred.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><ul>
<li>promotionIdentifier</li>
</ul>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>External identifier for the loyalty promotion. Required if <code>promotionId</code> is not provided.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><ul>
<li>promotionName</li>
</ul>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Unique name of the promotion.</p>
</td>
</tr>
</tbody>
</table>
`}</HTMLBlock>

# API Specific Error Code

| Error Code   | Description                                                       | Reason / When It Occurs                                                                                  |
| ------------ | ----------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| **1645**     | Group details passed are not valid.                               | Occurs when an invalid or incorrect `USERGROUP2` identifier is passed in query parameters.               |
| **82323284** | `identifierName`, `identifierValue`, or `source` cannot be empty. | Happens when one or more of these fields are missing or empty in the request.                            |
| **82323277** | No bill found for given bill number.                              | Triggered when an invalid or non-existent `billNumber` is passed in query parameters.                    |
| **82323271** | Bill number missing.                                              | Raised when `billNumber` is not included in the request body.                                            |
| **82323272** | Event name not found.                                             | Occurs when `eventName` is missing or invalid in the request body.                                       |
| **82323276** | Entity type invalid.                                              | Happens when an invalid `entity.type` is passed in query parameters.                                     |
| **3918**     | Error unlocking points: no eventLog found for given eventLogId.   | Raised when an invalid or non-existent `eventLogId` is provided in the request body.                     |
| **82323282** | No promise points found to unlock.                                | Returned when no promised points are found for the given request context (e.g., item codes, line items). |