---
title: Issue Loyalty Promotion of Direct Issue
excerpt: ''
api:
  file: v2.json
  operationId: issue-loyalty-promotion-of-direct-issue
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

This API allows you to issue bulk promotions directly to the customers (the customer earns the promotion). You can also use this API to issue a single promotion.

# Terminologies

The table below highlights backend terminologies and their corresponding terms used in the UI/frontend:

| UI/Frontend terminology | Backend terminology | Description                                                                                                                                                                |
| :---------------------- | :------------------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Enrol                   | Issue               | The customer is enrolled into a promotion.                                                                                                                                 |
| Issue                   | Earn                | The customer completes the required activity to earn the promotion. Once the promotion is earned, the customer can fulfil the criteria to receive the associated benefits. |

# API endpoint example

`https://eucrm.cc.capillarytech.com/v2/promotion/bulk/directEarn`

# Prerequisites

-   Authentication -  Basic or OAuth authentication 
-   Access group resource - Write access to customer group resource

# Resource information

|                       |                               |
| :-------------------- | :---------------------------- |
| URI                   | /v2/promotion/bulk/directEarn |
| HTTP method           | POST                          |
| Pagination supported? | NA                            |
| Rate limit            | NA                            |
| Batch support         | NA                            |

# Body parameters

<HTMLBlock>{`
<table style="width: 100%; border-collapse: collapse;">
<thead>
<tr>
  <th style="border: 1px solid #ddd; padding: 8px;">Parameter</th>
  <th style="border: 1px solid #ddd; padding: 8px;">Data Type</th>
  <th style="border: 1px solid #ddd; padding: 8px;">Description</th>
</tr>
</thead>
<tbody>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>type</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Enum</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Indicates the entity type. Only the &quot;CUSTOMER&quot; entity is supported (Case sensitive).</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>promotionDetails</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Object</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Details of the promotion to enroll the customer in.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>programId</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Integer</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>The ID of the loyalty program.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>promotionId</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Integer</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>The ID of the specific promotion.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>identifierName</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>String</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>The identifier type for the customer. Supported identifiers: &quot;id&quot; (customer ID), &quot;mobile&quot;, and &quot;email&quot;.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>customers</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Array</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>List of customers on whom the action will be performed.<br><strong>NOTE:</strong> To set a limit on the number of customers that can be added to a promotion, you need to enable the <strong>Bulk API Redirection</strong> feature. To do this, set <code>BULK_API_REDIRECTION_ENABLED</code> to true. You can then configure the batch size using the <code>BULK_API_BATCH_SIZE_FOR_REDIRECTION</code> environment variable. If not set, the default batch size is <strong>10</strong>, meaning up to 10 customers can be added to the same promotion.  </p>
<p>If <code>BULK_API_REDIRECTION_ENABLED</code> is disabled, there is no limit on the number of customers in the request.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>identifierValue</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>String</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>The specific identifier value for the identifier type defined in the<code>identifierName</code>.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>source</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Enum</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>The source of the customer&#39;s registration, e.g., &quot;INSTORE&quot;.</p>
</td>
</tr>
</tbody>
</table>
`}</HTMLBlock>


```json Request body
{
    "type" : "CUSTOMER",
    "promotionDetails" : {
       "programId": 469, 
       "promotionId":56799
    },
    "identifierName":"id",
    "customers":
    [  
        {
            "identifierValue":"98662653",
            "source":"INSTORE"
        },
        {
            "identifierValue":"98662632",
            "source":"INSTORE"
        } 
    ]
}
```

# Response parameters

| Parameter     | Data Type | Description                                                                    |
| ------------- | --------- | ------------------------------------------------------------------------------ |
| response      | Array     | A list of responses for each processed entity.                                 |
| result        | Object    | The result details for the entity.                                             |
| entityType    | String    | The type of entity.                                                            |
| entityId      | Integer   | The ID of the entity.                                                          |
| promotionId   | Integer   | The ID of the promotion associated with the entity.                            |
| promotionName | String    | The name of the promotion.                                                     |
| programId     | Integer   | The ID of the program associated with the promotion.                           |
| issualId      | Integer   | This ID is not applicable for direct issue promotion. This is for backend use. |
| earnedId      | Integer   | Unique ID generated when a promotion is issued a promotion.                    |
| errors        | Array     | A list of errors, if any, for the processed entity.                            |
| warnings      | Array     | A list of warnings, if any, for the processed entity.                          |
| totalCount    | Integer   | The total number of entities processed.                                        |
| failureCount  | Integer   | The total number of entities that failed to process.                           |

```json Response
{
    "response": [
        {
            "result": {
                "entityType": "CUSTOMER",
                "entityId": 423924812,
                "promotionId": 201436,
                "programId": 2750,
                "issualId": "811",
                "earnedId": "765"
            },
            "errors": [],
            "warnings": []
        }
    ],
    "totalCount": 1,
    "failureCount": 0
}
```
```json Error: Inactive promotion error
{
    "response": [
        {
            "errors": [
                {
                    "status": false,
                    "code": 8892,
                    "message": "promotion is inactive"
                }
            ],
            "warnings": []
        }
    ],
    "totalCount": 1,
    "failureCount": 1
}
```
```json Error: Invalid customer identifier
{
    "response": [
        {
            "errors": [
                {
                    "status": false,
                    "code": 8015,
                    "message": "Customer not found for the given identifiers"
                }
            ],
            "warnings": []
        }
    ],
    "totalCount": 1,
    "failureCount": 1
}
```
```json Error: Invalid program ID
{
    "response": [
        {
            "errors": [
                {
                    "status": false,
                    "code": 1101,
                    "message": "invalid programId passed"
                }
            ],
            "warnings": []
        }
    ],
    "totalCount": 1,
    "failureCount": 1
}
```
```json Error: Invalid promotion ID
{
    "response": [
        {
            "errors": [
                {
                    "status": false,
                    "code": 8874,
                    "message": "promotion id passed is invalid"
                }
            ],
            "warnings": []
        }
    ],
    "totalCount": 1,
    "failureCount": 1
}
```
```json Error: type=USERGROUP2
{
    "response": [
        {
            "errors": [
                {
                    "status": false,
                    "code": 8899,
                    "message": "Cannot enrol/issue to the user group"
                }
            ],
            "warnings": []
        }
    ],
    "totalCount": 1,
    "failureCount": 1
}
```
```json Error: Required parameters not present
{
    "response": [
        {
            "errors": [
                {
                    "status": false,
                    "code": 8881,
                    "message": "insufficient parameters passed, program id and one of promotion id/identifier are required"
                }
            ],
            "warnings": []
        }
    ],
    "totalCount": 1,
    "failureCount": 1
}
```
```json Error: Invalid details passed
{
    "response": [
        {
            "errors": [
                {
                    "status": false,
                    "code": 8881,
                    "message": "insufficient parameters passed, program id and one of promotion id/identifier are required"
                }
            ],
            "warnings": []
        }
    ],
    "totalCount": 1,
    "failureCount": 1
}
```
```json Warning: User tried to issue promotion more than the limit
{
    "response": [
        {
            "result": {
                "entityType": "CUSTOMER",
                "entityId": 387004879,
                "promoIdentifier": "Promo_testMay13",
                "programId": 2607,
                "issualId":"101",
                "earnedId": "78"
            },
            "errors": [],
            "warnings": []
        },
        {
          "result": {
                "entityType": "CUSTOMER",
                "entityId": 387004879,
                "promoIdentifier": "Promo_testMay13",
                "programId": 2607,
                "issualId":"101",
                "earnedId": "79"
            },
            "errors": [],
            "warnings": []
        },
        {
         "result": {
                "entityType": "CUSTOMER",
                "entityId": 423815857,
                "promotionId": 200206,
                "programId": 2844
            },
            "errors": [],
            "warnings": [
                {
                    "status": false,
                    "code": 8890,
                    "message": "promotion not issued due to config issues or customer exhausted limits"
                }
            ]
        }
    ],
    "totalCount": 3,
    "failureCount": 0
}
```

# API-specific error codes

| **Error Code** | **Description**                                                                                 |
| -------------- | ----------------------------------------------------------------------------------------------- |
| 8892           | Promotion is inactive                                                                           |
| 8015           | Customer not found for the given identifiers                                                    |
| 1101           | Invalid programId passed                                                                        |
| 8874           | Promotion ID passed is invalid                                                                  |
| 8899           | Cannot enrol/issue to the user group. This happens when you define USERGROUP2 as the entity.    |
| 8881           | Insufficient parameters passed; program ID and one of the promotion ID/identifiers are required |

# API-specific warning codes

| Warning Code | Description                                                            |
| ------------ | ---------------------------------------------------------------------- |
| 8890         | Promotion not issued due to config issues or customer exhausted limits |