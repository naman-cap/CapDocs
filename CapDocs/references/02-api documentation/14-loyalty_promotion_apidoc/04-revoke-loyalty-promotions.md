---
title: Revoke Loyalty Promotions
excerpt: Revoke promotions that a customer is enrolled in
api:
  file: v2.json
  operationId: revoke-loyalty-promotions
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
This API is used to: 

- Revoke enrolment of type enrol & issue (single/bulk)
- Revoke issual of type enrol & issue (single/bulk)
- Revoke issual of type Direct Issue (single/bulk)

Refer to the documentation on [loyalty promotions](https://docs.capillarytech.com/docs/loyalty-promotions) for more information on the types of loyalty promotions.

# Terminologies

The table below highlights the UI/frontend terminologies and their corresponding  backend terms for revoking the enrolment and issual of promotions to a customer.

| UI/Frontend terminology | Backend terminology                   | Description                                                                                                                                                                                                                                                                                                |
| :---------------------- | :------------------------------------ | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Enrol                   | Issue                                 | Revoke the enrolment of a customer from a promotion. The issual of the promotion for the customer must be revoked before they can be unenrolled from the promotion in an [Enrol and Issue](https://docs.capillarytech.com/docs/enrol-issue-loyalty-promotion) type promotion.                              |
| Issue                   | Earn                                  | Revoke the issual of a promotion from a customer. Once revoked, the customer is ineligible to earn benefits upon meeting the defined criteria. A customer can be directly revoked from a promotion in a [Direct Issue](https://docs.capillarytech.com/docs/direct-issue-loyalty-promotion) type promotion. |
| Enrol and Issue         | `LOYALTY_EARNING` or `ISSUE_AND_EARN` | Customers must first opt-in or enrol, then achieve the criteria to earn a promotion.                                                                                                                                                                                                                       |
| Direct Issue            | `LOYALTY `or `DIRECT_EARN`            | Customers directly earn a promotion once they achieve the criteria                                                                                                                                                                                                                                         |

# API endpoint example

`https://eu.api.capillarytech.com/v2/promotion/bulk/revokeEnrolAndEarn`

# Prerequisites

-   Authentication -  Basic or OAuth authentication 
-   Access group resource - Write access to customer group resource
-   Loyalty programId and promotionId

# Resource information

|                       |                                      |
| :-------------------- | :----------------------------------- |
| URI                   | v2/promotion/bulk/revokeEnrolAndEarn |
| HTTP method           | POST                                 |
| Pagination supported? | NA                                   |
| Rate limit            | NA                                   |
| Batch support         | Yes                                  |

# Body parameters

<HTMLBlock>{`
<table style="width: 100%; border-collapse: collapse;">
<thead>
<tr>
  <th style="border: 1px solid #ddd; padding: 8px;">Parameter (Parameters marked as * are required)</th>
  <th style="border: 1px solid #ddd; padding: 8px;"><strong>Data Type</strong></th>
  <th style="border: 1px solid #ddd; padding: 8px;"><strong>Description</strong></th>
</tr>
</thead>
<tbody>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>type*</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Enum</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Type of entity. Supported values:<code>CUSTOMER</code></p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>bulkAction*</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Enum</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Action to be performed.<br>Supported values:<br><code>REVOKE_ENROL</code>: Unenroll customers from a loyalty promotion. This revokes the <code>issualId</code> of the customer. An <code>issualId</code>is generated when a customer is enrolled to a loyalty promotion.<br><strong>Note:</strong> When revoking an <code>issualId</code>, specifying the ID is not required as each customer is issued only one.  </p>
<p><code>REVOKE_EARN</code>: Revoke an earned loyalty promotion from a customer. This revokes the <code>earnedID</code> of the customer. An <code>earnedId</code>is generated when a customer is issued a loyalty promotion.<br>Provide an <code>earnedId</code> in the <code>earnIds</code> parameter to revoke a specific <code>earnedId</code>  </p>
<p>Refer to the <a href="https://docs.capillarytech.com/reference/revoke-enrolled-and-issued-promotion#supported-action-for-the-promotion-type">Supported Actions</a> section for the bulk actions available for each type of promotion.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>promotionDetails</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Object</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Details of the promotion where the action is performed.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><ul>
<li>programId*</li>
</ul>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Integer</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Unique ID of the loyalty program.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><ul>
<li>promotionId*</li>
</ul>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Integer</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Unique ID of the loyalty promotion. Either <code>promotionId</code> or <code>promoIdentifier</code> must be provided. </p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><ul>
<li>promoIdentifier*</li>
</ul>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>String</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Unique external identifier of the promotion that is configured. Either <code>promotionId</code> or <code>promoIdentifier</code> must be provided.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><ul>
<li>identifierName</li>
</ul>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>String</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>The identifier type for the customer. Supported identifiers: <code>id</code> (customer ID), <code>mobile</code>, and <code>email</code>.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>customers</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Object</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>List of customers on whom the revoke action will be performed.<br>You can add a maximum of 100 customers at once.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><ul>
<li>identifierValue*</li>
</ul>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>String</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Identifier value for the identifier type defined in <code>identifierName</code>.<br><strong>Note:</strong> The identifier values must be of the same type  defined in <code>identifierName</code>. For example, if the  <code>identifierName</code> is <code>id</code>, all the <code>identifierValues</code> provided must be customer IDs.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><ul>
<li>source\</li>
</ul>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>String</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>The source of the customer&#39;s registration.<br>Supported values: <code>FACEBOOK</code>, <code>WEB_ENGAGE</code>, <code>INSTORE</code>, <code>MARTJACK</code>, <code>TMALL</code>, <code>TAOBAO</code>, <code>JD</code>, <code>ECOMMERCE</code>, <code>WEBSITE</code>, <code>LINE</code>, <code>ALL</code>.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><ul>
<li>earnIds</li>
</ul>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Array</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>List of earned IDs to revoke for a customer. An <code>earnedId </code>is generated when a customer is issued a loyalty promotion.  </p>
<p>List the IDs in the following format <code>[ID1, ID2, ID3]</code>.  </p>
<p>If the <code>earnIds</code> parameter is not passed, all the earned IDs for a customer will be revoked.</p>
</td>
</tr>
</tbody>
</table>
`}</HTMLBlock>


```json Single customer (Action=REVOKE_ENROL)
{
    "type": "CUSTOMER",
    "bulkAction": "REVOKE_ENROL",
    "promotionDetails": {
        "programId": 2714,
        "promotionId": "202779"
       // "promoIdentifier": "95c77d88-470c-4dd3-bde4-606ae1b64277"
    },
    "identifierName": "id",
    "customers": [
        {
            "identifierValue": "423927867",
            "source": "instore"
        }
    ]
}
```
```json Multiple customers (Action=REVOKE_ENROL)
{
    "type": "CUSTOMER",
    "bulkAction": "REVOKE_ENROL",
    "promotionDetails": {
        "programId": 2714,
        "promotionId": "202779"
       // "promoIdentifier": "95c77d88-470c-4dd3-bde4-606ae1b64277"
    },
    "identifierName": "id",
    "customers": [
        {
            "identifierValue": "423927867",
            "source": "instore"
        },
        {
            "identifierValue": "423927868",
            "source": "instore"
        }
    ]
}
```
```json Single customer (Action=REVOKE_EARN)
{
    "type": "CUSTOMER",
    "bulkAction": "REVOKE_EARN",
    "promotionDetails": {
        "programId": 2714,
        //"promotionId": "202779"
        "promoIdentifier": "95c77d88-470c-4dd3-bde4-606ae1b64277"
    },
    "identifierName": "id",
    "customers": [
        {
            "identifierValue": "423927867",
            "source": "instore"
        }
    ]
}
```
```json Multiple customers (Action=REVOKE_EARN)
{
    "type": "CUSTOMER",
    "bulkAction": "REVOKE_EARN",
    "promotionDetails": {
        "programId": 2714,
        "promoIdentifier": "1d9e540d-ae2c-443f-9d0d-7ac146bf93f2"
    },
    "identifierName": "id",
    "customers": [
        {
            "identifierValue": "423927848",
            "source": "instore",
            "earnIds": [
                959
            ]
        },
        {
            "identifierValue": "423927855",
            "source": "instore",
            "earnIds": [
                960,
                963
            ]
        },
        {
            "identifierValue": "423927856",
            "source": "instore"
        }
    ]
}
```

## Supported Action for the Promotion Type

The table below highlights the supported `bulkAction` for each type of promotion.

| Promotion Type                                                                       | Supported Bulk Action           | Example                                                                                                                                                                                                                                        |
| :----------------------------------------------------------------------------------- | :------------------------------ | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Enrol and Issue](https://docs.capillarytech.com/docs/enrol-issue-loyalty-promotion) | `REVOKE_ENROL` and`REVOKE_EARN` | A customer is enrolled in a promotion after a ₹5000 purchase that offers a discount coupon for reviewing the product. After reviewing the product, they earn a discount coupon. If the customer returns the product, the promotion is revoked. |
| [Direct Issue](https://docs.capillarytech.com/docs/direct-issue-loyalty-promotion)   | `REVOKE_EARN`                   | A customer is directly issued a promotion for a 10% discount after completing a purchase. If the customer returns the product, the promotion is revoked.                                                                                       |

# Response parameters

| **Parameter**   | **Data Type** | **Description**                                                         |
| --------------- | ------------- | ----------------------------------------------------------------------- |
| response        | Array         | List of response objects.                                               |
| result          | Object        | Contains the details for a customer.                                    |
| entityType      | String        | Type of entity. Supported entity `CUSTOMER`                             |
| entityId        | Integer       | Unique identifier of the entity.                                        |
| promotionId     | Integer       | Unique ID of the loyalty promotion .                                    |
| promoIdentifier | String        | Unique external identifier of the loyalty promotion that is configured. |
| programId       | Integer       | ID of the loyalty program associated with the promotion.                |
| revokedIssualId | Integer       | Issue ID that is revoked from the customer.                             |
| revokedEarnIds  | Array         | List of Earn IDs that are revoked from the customer.                    |
| errors          | Array         | List of errors encountered, if any.                                     |
| warnings        | Array         | List of warnings encountered, if any.                                   |
| totalCount      | Integer       | Total count of successful responses.                                    |
| failureCount    | Integer       | Count of failed responses.                                              |

```json Response (Issue&Earn + Action=REVOKE_ENROL)
{
    "response": [
        {
            "result": {
                "entityType": "CUSTOMER",
                "entityId": 423926199,
                "promotionId": 202188,
                "programId": 2714,
                "issualId": "847"
            },
            "errors": [],
            "warnings": []
        },
        {
            "result": {
                "entityType": "CUSTOMER",
                "entityId": 423926198,
                "promotionId": 202188,
                "programId": 2714,
                "issualId": "848"
            },
            "errors": [],
            "warnings": []
        },
        {
            "result": {
                "entityType": "CUSTOMER",
                "entityId": 423926200,
                "promotionId": 202188,
                "programId": 2714,
                "issualId": "849"
            },
            "errors": [],
            "warnings": []
        },
        {
            "result": {
                "entityType": "CUSTOMER",
                "entityId": 423926201,
                "promotionId": 202188,
                "programId": 2714,
                "issualId": "850"
            },
            "errors": [],
            "warnings": []
        }
    ],
    "totalCount": 4,
    "failureCount": 0
}
```
```json Response (Issue&Earn + Action=REVOKE_EARN)
{
    "response": [
        {
            "result": {
                "entityType": "CUSTOMER",
                "entityId": 423927867,
                "promoIdentifier": "95c77d88-470c-4dd3-bde4-606ae1b64277",
                "programId": 2714,
                "revokedEarnIds": [
                    974
                ]
            },
            "errors": [],
            "warnings": []
        },
        {
            "result": {
                "entityType": "CUSTOMER",
                "entityId": 423927868,
                "promoIdentifier": "95c77d88-470c-4dd3-bde4-606ae1b64277",
                "programId": 2714,
                "revokedEarnIds": [
                    975,
                    977
                ]
            },
            "errors": [],
            "warnings": []
        }
    ],
    "totalCount": 2,
    "failureCount": 0
}
```
```json Response (Direct + Action=REVOKE_EARN)
{
    "response": [
        {
            "result": {
                "entityType": "CUSTOMER",
                "entityId": 423927848,
                "promoIdentifier": "1d9e540d-ae2c-443f-9d0d-7ac146bf93f2",
                "programId": 2714,
                "revokedEarnIds": [
                    957
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
```json Response (Direct + Action=REVOKE_ENROL)
{
    "response": [
        {
            "errors": [
                {
                    "status": false,
                    "message": "revoke bulk action passed not supported for loyalty/generic promotion type",
                    "code": 8902
                }
            ],
            "warnings": []
        }
    ],
    "totalCount": 1,
    "failureCount": 1
}
```
```json Response with Partial Success
{
    "response": [
        {
            "result": {
                "entityType": "CUSTOMER",
                "entityId": 555567088,
                "promotionId": 74230,
                "programId": 753,
                "revokedEarnIds": [
                    111
                ]
            },
            "errors": [],
            "warnings": []
        },
        {
            "errors": [
                {
                    "status": false,
                    "message": "Customer not found for the given identifiers",
                    "code": 8015
                }
            ],
            "warnings": []
        },
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
    "totalCount": 3,
    "failureCount": 2
}
```
```json Invalid programId
{
    "response": [
        {
            "errors": [
                {
                    "status": false,
                    "message": "invalid programId passed",
                    "code": 1101
                }
            ],
            "warnings": []
        }
    ],
    "totalCount": 1,
    "failureCount": 1
}
```
```json Inactive Promotion
{
    "response": [
        {
            "errors": [
                {
                    "status": false,
                    "message": "promotion is inactive",
                    "code": 8892
                }
            ],
            "warnings": []
        }
    ],
    "totalCount": 1,
    "failureCount": 1
}
```
```json Invalid promotionId
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
```json Invalid customerId
{
    "response": [
        {
            "errors": [
                {
                    "status": false,
                    "message": "Error occurred while issuing promotion to the customer",
                    "code": 8896
                }
            ],
            "warnings": []
        }
    ],
    "totalCount": 1,
    "failureCount": 1
}
```
```json Invalid entity type
{
    "response": [
        {
            "errors": [
                {
                    "status": false,
                    "message": "invalid entity type passed",
                    "code": 8901
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

| Error Code | Description                                                                                     | Reason                                                                         |
| ---------- | ----------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------- |
| 8892       | Promotion is inactive                                                                           | Promotion is currently inactive.                                               |
| 8015       | Customer not found for the given identifiers                                                    | Customer is not part of the loyalty program or the customer ID is invalid.     |
| 1101       | Invalid programId passed                                                                        | Program ID is invalid.                                                         |
| 8874       | Promotion ID passed is invalid                                                                  | Promotion ID is invalid.                                                       |
| 8899       | Cannot enrol/issue to the user group.                                                           | A user group cannot be enrolled to a promotion.                                |
| 8902       | Revoke bulk action passed not supported for loyalty/generic promotion type                      | Revoking an issual for a customer in a direct earn promotion is not supported. |
| 8881       | Insufficient parameters passed; program ID and one of the promotion ID/identifiers are required | Required parameters are not passed.                                            |
| 8903       | Earn IDs passed are either invalid or already revoked                                           | The earned ID that is being revoked is already revoked or is invalid.          |