---
title: Revoke Issual of Direct Issue (single/bulk)
excerpt: ''
api:
  file: v2.json
  operationId: revoke-issual-of-type-direct-issue-singlebulk
deprecated: false
hidden: true
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
This API is used to revoke issued promotions to customers.

<Note title="Note">
This API applies to `LOYALTY` and `LOYALTY_EARNING` promotion type.
</Note>

# Terminologies

The table below highlights backend terminologies and their corresponding terms used in the UI/frontend:

| UI/Frontend terminology | Backend terminology | Description                                                                                                                                                                |
| :---------------------- | :------------------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Enrol                   | Issue               | The customer is enrolled into a promotion.                                                                                                                                 |
| Issue                   | Earn                | The customer completes the required activity to earn the promotion. Once the promotion is earned, the customer can fulfil the criteria to receive the associated benefits. |

# API endpoint example

`https://eu.api.capillarytech.com/v2/promotion/bulk/revokeDirectEarn`

# Prerequisites

-   Authentication -  Basic or OAuth authentication 
-   Access group resource - Write access to customer group resource

# Resource information

|                       |                                    |
| :-------------------- | :--------------------------------- |
| URI                   | v2/promotion/bulk/revokeDirectEarn |
| HTTP method           | POST                               |
| Pagination supported? | NA                                 |
| Rate limit            | NA                                 |
| Batch support         | NA                                 |

# Body parameters

<HTMLBlock>{`
<table style="width: 100%; border-collapse: collapse;">
<thead>
<tr>
  <th style="border: 1px solid #ddd; padding: 8px;"><strong>Parameter</strong></th>
  <th style="border: 1px solid #ddd; padding: 8px;"><strong>Data Type</strong></th>
  <th style="border: 1px solid #ddd; padding: 8px;"><strong>Description</strong></th>
</tr>
</thead>
<tbody>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p><code>type</code>*</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>String</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Indicates the entity type. Only the &quot;CUSTOMER&quot; entity is supported (Case sensitive).</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p><code>promotionDetails</code>*</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Object</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Contains details about the promotion and program.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p><code>programId</code>*</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Integer</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>The ID of the loyalty program.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p><code>promotionId</code>*</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Integer</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>The ID of the specific promotion.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p><code>identifierName</code>*</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>String</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>The identifier type for the customer. Supported identifiers: &quot;id&quot; (customer ID), &quot;mobile&quot;, and &quot;email&quot;.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p><code>customers</code></p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Array</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>List of customers on whom the action will be performed.<br><strong>NOTE:</strong> To set a limit on the number of customers that can be added to a promotion, you need to enable the <strong>Bulk API Redirection</strong> feature. To do this, set <code>BULK_API_REDIRECTION_ENABLED</code> to true. You can then configure the batch size using the <code>BULK_API_BATCH_SIZE_FOR_REDIRECTION</code> environment variable. If not set, the default batch size is <strong>10</strong>, meaning up to 10 customers can be added to the same promotion.  </p>
<p>If <code>BULK_API_REDIRECTION_ENABLED</code> is disabled, there is no limit on the number of customers in the request.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p><code>earnIDs</code></p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Array</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>List of IDs of the earned promotions that need to be revoked. If this parameter is not defined, all earned promotions for the respective customers will be revoked.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p><code>identifierValue</code>*</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>String</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>The specific identifier value for the identifier type defined in the <code>identifierName</code>.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p><code>source</code>*</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>String</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>The source of the customer registration, e.g., &quot;INSTORE&quot;.</p>
</td>
</tr>
</tbody>
</table>
`}</HTMLBlock>


```json Request
{
    "type":"CUSTOMER",
   "bulkAction":"REVOKE_EARN",
   "promotionDetails" : {
       "programId": 469, 
       "promotionId":5709
    },
     "identifierName":"id",
    "customers":
    [  
        {
            "identifierValue":"98662653",
            "source":"INSTORE"
        },
     {
            "identifierValue":"9866296543",
            "source":"INSTORE"
        }
    ]
}
```
```json With earned Id
{
    "type":"CUSTOMER",
   "promotionDetails" : {
       "programId": 469, 
       "promotionId":57099
    },
     "identifierName":"mobile",
    "customers":
    [   
      {
            "earnIds": 66,67,
            "identifierValue":"919986000585",
            "source":"INSTORE"
        }
    ]
}
```

# Response parameters

| **Parameter**    | **Data Type** | **Description**                                                              |
| ---------------- | ------------- | ---------------------------------------------------------------------------- |
| `response`       | Array         | Contains the list of responses for each entity.                              |
| `result`         | Object        | Provides details about the operation performed on a specific entity.         |
| `entityType`     | String        | The type of entity, e.g., "CUSTOMER".                                        |
| `entityId`       | Integer       | The unique identifier of the entity, e.g., customer ID `98662653`.           |
| `promotionId`    | Integer       | The ID of the specific promotion, e.g., `57099`.                             |
| `programId`      | Integer       | The ID of the loyalty program, e.g., `469`.                                  |
| `revokedEarnIds` | Array         | List of IDs of issued promotions that are revoked.                           |
| `errors`         | Array         | List of errors, if any occurred during the operation (empty in this case).   |
| `warnings`       | Array         | List of warnings, if any occurred during the operation (empty in this case). |
| `totalCount`     | Integer       | The total number of responses processed, e.g., `1`.                          |
| `failureCount`   | Integer       | The total number of failures, e.g., `0`.                                     |

```json Response
{
    "response": [
        {
            "result": {
                "entityType": "CUSTOMER",
                "entityId": 98662653,
                "promotionId": 57099,
                "programId": 469,
                "revokedEarnIds": [
                    32,
                    34,
                    35,
                    36,
                    38,
                    39,
                    40,
                    41
                ]
            },
            "errors": [],
            "warnings": []
        }
    ],
    "totalCount": 1,
    "failureCount": 0
}
```
```json Inactive promotion error
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
```json Invalid customer identifier
{
    "response": [
        {
            "errors": [
                {
                    "status": false,
                    "message": "Customer not found for the given identifiers",
                    "code": 8015
                }
            ],
            "warnings": []
        }
    ],
    "totalCount": 1,
    "failureCount": 1
}
```
```json Invalid program ID
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
```json Invalid promotion ID
{
    "response": [
        {
            "errors": [
                {
                    "status": false,
                    "message": "promotion id passed is invalid",
                    "code": 8874
                }
            ],
            "warnings": []
        }
    ],
    "totalCount": 1,
    "failureCount": 1
}
```
```json type=USERGROUP2
{
    "response": [
        {
            "errors": [
                {
                    "status": false,
                    "message": "Cannot enrol/issue to the user group",
                    "code": 8899
                }
            ],
            "warnings": []
        }
    ],
    "totalCount": 1,
    "failureCount": 1
}
```
```json Invalid promotion type
{
    "response": [
        {
            "errors": [
                {
                    "status": false,
                    "code": 8902,
                    "message": "revoke bulk action passed not supported for loyalty/generic promotion type"
                }
            ],
            "warnings": []
        }
    ],
    "totalCount": 1,
    "failureCount": 1
}
```
```json Required parameters not present
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
```json Invalid details passed
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

# Error codes

| **Error Code** | **Description**                                                                                 |
| -------------- | ----------------------------------------------------------------------------------------------- |
| 8892           | Promotion is inactive                                                                           |
| 8015           | Customer not found for the given identifiers                                                    |
| 1101           | Invalid programId passed                                                                        |
| 8874           | Promotion ID passed is invalid                                                                  |
| 8899           | Cannot enrol/issue to the user group. This happens when you define USERGROUP2 as the entity.    |
| 8902           | Revoke bulk action passed not supported for loyalty/generic promotion type                      |
| 8881           | Insufficient parameters passed; program ID and one of the promotion ID/identifiers are required |
| 8903           | Earn IDs passed are either invalid or already revoked                                           |
| 2305           | Active issued promotion is not available for the customer.                                      |