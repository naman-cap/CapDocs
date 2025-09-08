---
title: Enrol a Customer to Loyalty Promotion
excerpt: ''
api:
  file: v2.json
  operationId: enrol-customer-to-promotion
deprecated: false
hidden: true
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
Direct issue promotions, also known as LOYALTY promotions in the backend, are a type of promotion where a specific promotion is initially issued to customers based on their behavioural events or transactions. Subsequently, upon meeting the criteria defined in the promotion during their next transaction, the benefits are provided.

This API allows you to issue promotions directly to the customers (the customer earns the promotion).

> 🚧 Note
> 
> This is an old API and it is recommended to use the new [Direct Issue API ](https://docs.capillarytech.com/reference/bulk-issue-promotion-to-customers) for issuing a promotion to a single or customers in bulk.

# API endpoint example

`https://eucrm.cc.capillarytech.com/v2/promotion/issue?identifierName=mobile&identifierValue=18767431754&source=INSTORE`

# Prerequisites

-   Authentication -  Basic or OAuth authentication 
-   Access group resource - Write access to customer group resource
-   The promotion type should be `LOYALTY`.

# Resource information

|                       |                     |
| :-------------------- | :------------------ |
| URI                   | /v2/promotion/issue |
| HTTP method           | POST                |
| Pagination supported? | NA                  |
| Rate limit            | NA                  |
| Batch support         | NA                  |

# Query Parameters

<HTMLBlock>{`
<table style="width: 100%; border-collapse: collapse;">
<thead>
<tr>
  <th style="border: 1px solid #ddd; padding: 8px;">Parameter<br>(Parameters marked with * are mandatory)</th>
  <th style="border: 1px solid #ddd; padding: 8px;">Data type</th>
  <th style="border: 1px solid #ddd; padding: 8px;">Description</th>
</tr>
</thead>
<tbody>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>identifierName*</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Enum</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Identifier type to identify the customer. Values allowed: email, mobile, externalId, id</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>identifierValue*</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>String</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Value of the identifier.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>source*</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Enum</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Specifies the source from where customer details are retrieved. Values allowed: FACEBOOK, WEB_ENGAGE, INSTORE, MARTJACK, TMALL, TAOBAO, JD, ECOMMERCE, WEBSITE, LINE, MOBILE_APP</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>type</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Enum</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Type of entity. Values allowed: CUSTOMER.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>accountId</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>String</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Unique account ID of the customer.</p>
</td>
</tr>
</tbody>
</table>
`}</HTMLBlock>

# Body Parameters

<HTMLBlock>{`
<table style="width: 100%; border-collapse: collapse;">
<thead>
<tr>
  <th style="border: 1px solid #ddd; padding: 8px;">Parameter<br>(Parameters marked with * are mandatory)</th>
  <th style="border: 1px solid #ddd; padding: 8px;">Data type</th>
  <th style="border: 1px solid #ddd; padding: 8px;">Description</th>
</tr>
</thead>
<tbody>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>programId*</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Long</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Unique ID for the program associated with the promotion.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>promotionId*</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Long</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Unique ID for the promotion into which enrol or issue occurs.</p>
</td>
</tr>
</tbody>
</table>
`}</HTMLBlock>


```json Request Body
{
    "programId": 469,
    "promotionId": 65777
}
```

# Response parameters

| Parameter Name | Data Type | Description                                                                                                                          |
| -------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| warnings       | Object    | A list of warnings, if any, in the response.                                                                                         |
| errors         | Object    | A list of errors, if any, in the response.                                                                                           |
| sideEffects    | Object    | Resultant object generated on running the API. This includes details related to the promotion and program on which promotion issued. |
| \- programId   | Long      | Unique ID for the program associated with the promotion.                                                                             |
| \- issualId    | Integer   | Not applicable for direct promotion issue. This is for backend usage.                                                                |
| earnedId       | Integer   | Unique ID gnererated when the promotion is issued to a customergenerated.                                                            |
| \- promotionId | Long      | Unique ID for the promotion into which enrol or issue occurs.                                                                        |
| \- type        | String    | The value of the field is `Points promotion`. This parameter is not valid.                                                           |

```json Response 200
{
    "warnings": [],
    "errors": [],
    "sideEffects": [
        {
            "programId": 2750,
            "issualId": 809,
            "earnedId": 764,
            "promotionId": 201436,
            "type": "Points promotion"
        }
    ]
}
```
```json Error: due to config issues or limit
{
    "warnings": [
        {
            "status": false,
            "code": 8890,
            "message": "promotion not issued due to config issues or customer exhausted limits"
        }
    ],
    "errors": [],
    "sideEffects": []
}
```
```json Error: Invalid ProgramId passed
{
    "warnings": [],
    "errors": [
        {
            "status": false,
            "message": "invalid programId passed",
            "code": 1101
        }
    ]
}
```
```json Error: Invalid Promotion ID passed
{
    "warnings": [],
    "errors": [
        {
            "status": false,
            "message": "promotion id passed is invalid",
            "code": 8874
        }
    ]
}
```
```json Error: Query Parameters are required
{
    "warnings": [],
    "errors": [
        {
            "message": "identifierName, identifierValue, source can not be empty",
            "code": 11013,
            "status": false
        }
    ]
}
```
```json Error: Customer not found
{
    "warnings": [],
    "errors": [
        {
            "status": false,
            "code": 8015,
            "message": "Customer not found for the given identifiers"
        }
    ]
}
```

# API-specific error codes

| Error Code | Description                                                              |
| :--------- | :----------------------------------------------------------------------- |
| 11013      | Mandatory parameters identifierName, identifierValue, or source missing. |
| 1212       | Entity type invalid.                                                     |
| 8874       | Promotion ID is invalid.                                                 |
| 1101       | Program ID is invalid.                                                   |