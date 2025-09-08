---
title: Enrol/Issue Loyalty Promotion
excerpt: Enrol a customer or issue a promotion to a customer
api:
  file: v2.json
  operationId: enrolissue-loyalty-promotion
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

- Enrol in promotion of type enrol & issue (single/bulk)
- Issue promotion of type enrol & issue (single/bulk)
- Issue promotion of type Direct Issue (single/bulk)

Refer to the documentation on [loyalty promotions](https://docs.capillarytech.com/docs/loyalty-promotions) for more information on the types of loyalty promotions.

# Terminologies

The table below highlights the UI/frontend terminologies and their corresponding  backend terms for enrolling and issuing promotions to a customer.

| UI/Frontend terminology | Backend terminology                   | Description                                                                                                                                                                                                                                                                                                                                           |
| :---------------------- | :------------------------------------ | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Enrol                   | Issue                                 | Enrol a customer into a promotion. After enrolment, a promotion must be issued making the customer eligible to earn benefits upon meeting the defined criteria. A customer must be enrolled to the promotion and then issued the promotion in an [Enrol and Issue](https://docs.capillarytech.com/docs/enrol-issue-loyalty-promotion) type promotion. |
| Issue                   | Earn                                  | Issue a promotion to a customer. Once issued, the customer is eligible to earn benefits upon meeting the defined criteria. A customer can be directly issued a promotion in a [Direct Issue](https://docs.capillarytech.com/docs/direct-issue-loyalty-promotion) type promotion.                                                                      |
| Enrol and Issue         | `LOYALTY_EARNING` or `ISSUE_AND_EARN` | Customers must first opt-in or enrol, then achieve the criteria to earn a promotion.                                                                                                                                                                                                                                                                  |
| Direct Issue            | `LOYALTY `or `DIRECT`                 | Customers directly earn a promotion once they achieve the criteria                                                                                                                                                                                                                                                                                    |

# API endpoint example

`https://eucrm.cc.capillarytech.com/v2/promotion/bulk/enrolAndEarn`

# Prerequisites

-   Authentication -  Basic or OAuth authentication
-   Access group resource - Write access to customer group resource
-   Loyalty programId and promotionId

# Resource information

|                       |                             |
| :-------------------- | :-------------------------- |
| URI                   | promotion/bulk/enrolAndEarn |
| HTTP method           | POST                        |
| Pagination supported? | NA                          |
| Rate limit            | NA                          |
| Batch support         | Yes                         |

<br />

# Body parameters

<HTMLBlock>{`
<table style="width: 100%; border-collapse: collapse;">
<thead>
<tr>
  <th style="border: 1px solid #ddd; padding: 8px;">Parameter (Parameters marked as * are required)</th>
  <th style="border: 1px solid #ddd; padding: 8px;">Data Type</th>
  <th style="border: 1px solid #ddd; padding: 8px;">Description</th>
</tr>
</thead>
<tbody>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>type*</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Enum</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Type of entity. Supported entity <code>CUSTOMER</code></p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>bulkAction\</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Enum</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Action to be performed.<br>Supported values:<br><code>ENROL</code>: Enrol customers to a loyalty promotion.<br><code>EARN</code>: Issue a loyalty promotion to customer on completion of activity.  </p>
<p>Refer to the <a href="https://docs.capillarytech.com/reference/enrol-and-issue-promotion#supported-action-for-the-promotion-type">Supported Actions</a> section for the bulk actions available for each type of promotion.</p>
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
<li>promotionId</li>
</ul>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Integer</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Unique ID of the loyalty promotion. Either <code>promotionId</code> or <code>promoIdentifier</code> must be provided.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><ul>
<li>promoIdentifier</li>
</ul>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>String</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Unique external identifier of the promotion that is configured. Either <code>promotionId</code> or <code>promoIdentifier</code> must be provided.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>identifierName*</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Enum</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>The identifier type for the customer. Supported identifiers: <code>id</code> (customer ID), <code>mobile</code>, and <code>email</code>.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>customers</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Object</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>List of customers on whom the action will be performed.<br>You can add a maximum of 100 customers at once.</p>
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
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Enum</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>The source of the customer&#39;s registration.<br>Supported values: <code>FACEBOOK</code>, <code>WEB_ENGAGE</code>, <code>INSTORE</code>, <code>MARTJACK</code>, <code>TMALL</code>, <code>TAOBAO</code>, <code>JD</code>, <code>ECOMMERCE</code>, <code>WEBSITE</code>, <code>LINE</code>, <code>ALL</code>.</p>
</td>
</tr>
</tbody>
</table>
`}</HTMLBlock>


```json Single customer (Action=ENROL)
{
    "type" : "CUSTOMER",
    "bulkAction" : "ENROL",
    "promotionDetails" : {
       "programId": 469,
       "promotionId":57099
    },
    "identifierName":"id",
    "customers":
    [
        {
            "identifierValue":"555567088",
            "source":"INSTORE"
        }
    ]
}
```
    ```json Multiple customers (Action=ENROL)
{
    "type" : "CUSTOMER",
    "bulkAction" : "ENROL",
    "promotionDetails" : {
       "programId": 469,
       "promotionId":69218
    },
    "identifierName":"mobile",
    "customers":
    [
        {
            "identifierValue":"11223569865",
            "source":"INSTORE"
        },
        {
            "identifierValue":"919986000586",
            "source":"INSTORE"
        }
    ]
}
```
    ```json Single customer (Action=EARN)
{
    "type" : "CUSTOMER",
    "bulkAction" : "EARN",
    "promotionDetails" : {
       "programId": 469,
       "promotionId":57099
    },
    "identifierName":"id",
    "customers":
    [
        {
            "identifierValue":"555567088",
            "source":"INSTORE"
        }
    ]
}
```
    ```json Multiple customers (Action=ENROL)
{
    "type" : "CUSTOMER",
    "bulkAction" : "EARN",
    "promotionDetails" : {
       "programId": 469,
       "promotionId":69218
    },
    "identifierName":"mobile",
    "customers":
    [
        {
            "identifierValue":"11223569865",
            "source":"INSTORE"
        },
        {
            "identifierValue":"919986000586",
            "source":"INSTORE"
        }
    ]
}
```

## Supported Action for the Promotion Type

The table below highlights the supported `bulkAction` for each type of promotion.

<HTMLBlock>{`
<table style={{border: "1px solid black", borderCollapse: "collapse"}}>
  <thead>
    <tr>
      <th style={{border: "1px solid black", padding: "8px"}}>Promotion Type</th>
      <th style={{border: "1px solid black", padding: "8px"}}>Supported Bulk Action</th>
      <th style={{border: "1px solid black", padding: "8px"}}>Example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowSpan={2} style={{border: "1px solid black", padding: "8px"}}>
        <a href="https://docs.capillarytech.com/docs/enrol-issue-loyalty-promotion">Enrol and Issue</a>
      </td>
      <td style={{border: "1px solid black", padding: "8px"}}><code>ENROL</code></td>
      <td style={{border: "1px solid black", padding: "8px"}}>A customer is enrolled in a promotion for making a purchase worth ₹5000. If they review the product, they can earn a discount voucher for their next purchase.</td>
    </tr>
    <tr>
      <td style={{border: "1px solid black", padding: "8px"}}><code>EARN</code></td>
      <td style={{border: "1px solid black", padding: "8px"}}>If the customer completes the review, they earn the discount coupon.</td>
    </tr>
    <tr>
      <td style={{border: "1px solid black", padding: "8px"}}>
        <a href="https://docs.capillarytech.com/docs/direct-issue-loyalty-promotion">Direct Issue</a>
      </td>
      <td style={{border: "1px solid black", padding: "8px"}}><code>EARN</code></td>
      <td style={{border: "1px solid black", padding: "8px"}}>A customer is issued a promotion for making five purchases and earns a free item for completing the task.</td>
    </tr>
  </tbody>
</table>
`}</HTMLBlock>


# Response parameters

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
  <td style="border: 1px solid #ddd; padding: 8px;"><p>response</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Array</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>List of response objects.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>result</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Object</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Contains the details for a customer.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>entityType</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>String</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Type of entity. Supported entity <code>CUSTOMER</code></p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>entityId</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Integer</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Unique identifier of the entity.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>promotionId</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Integer</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Unique ID of the loyalty promotion .</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>promoIdentifier*</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>String</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Unique external identifier of the loyalty promotion that is configured.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>programId</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Integer</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>ID of the loyalty program associated with the promotion.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>issualId</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>String</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Unique ID generated when the customer is enrolled to a promotion.  </p>
<p>**Note: ** If the <code>bulkAction</code> is <code>EARN</code> for the promotion type <code>DIRECT</code>, a dummy <code>issualId</code> is generated as this is not required for a  <code>DIRECT</code> promotion. </p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>earnedId</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>String</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Unique ID generated when the customer is issued a loyalty promotion.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>errors</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Array</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>List of errors encountered.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>warnings</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Array</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>List of warnings encountered.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>totalCount</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Integer</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Total count of successful responses.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>failureCount</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Integer</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Count of failed responses.</p>
</td>
</tr>
</tbody>
</table>
`}</HTMLBlock>


```json Response (Issue&Earn + Action=ENROL)
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
    ```json Response (Issue&Earn + Action=EARN)
{
    "response": [
        {
            "result": {
                "entityType": "CUSTOMER",
                "entityId": 423926199,
                "promotionId": 202188,
                "programId": 2714,
                "issualId": "847",
                "earnedId": "840"
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
                "issualId": "848",
                "earnedId": "841"
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
                "issualId": "849",
                "earnedId": "842"
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
                "issualId": "850",
                "earnedId": "843"
            },
            "errors": [],
            "warnings": []
        }
    ],
    "totalCount": 4,
    "failureCount": 0
}
```
    ```json Response (Direct + Action=EARN)
{
    "response": [
        {
            "result": {
                "entityType": "CUSTOMER",
                "entityId": 423926199,
                "promotionId": 202090,
                "programId": 2714,
                "issualId": "837", //this is a dummy Id
                "earnedId": "794"
            },
            "errors": [],
            "warnings": []
        },
        {
            "result": {
                "entityType": "CUSTOMER",
                "entityId": 423926198,
                "promotionId": 202090,
                "programId": 2714,
                "issualId": "838", //this is a dummy Id
                "earnedId": "795"
            },
            "errors": [],
            "warnings": []
        },
        {
            "result": {
                "entityType": "CUSTOMER",
                "entityId": 423926200,
                "promotionId": 202090,
                "programId": 2714,
                "issualId": "839",
                "earnedId": "796"
            },
            "errors": [],
            "warnings": []
        },
        {
            "result": {
                "entityType": "CUSTOMER",
                "entityId": 423926201,
                "promotionId": 202090,
                "programId": 2714,
                "issualId": "840", //this is a dummy Id
                "earnedId": "797"
            },
            "errors": [],
            "warnings": []
        }
    ],
    "totalCount": 4,
    "failureCount": 0
}
```
    ```json Response (Direct + Action=ENROL)
{
    "response": [
        {
            "errors": [
                {
                    "status": false,
                    "message": "bulk action passed not supported for loyalty/generic promotion type",
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
                "entityId": 170940055,
                "promotionId": 74116,
                "programId": 699,
                "issualId": "72",
                "earnedId": "102"
            },
            "errors": [],
            "warnings": []
        },
        {
            "errors": [
                {
                    "status": false,
                    "code": 8015,
                    "message": "Customer not found for the given identifiers"
                }
            ],
            "warnings": []
        },
        {
            "errors": [
                {
                    "status": false,
                    "code": 8015,
                    "message": "Customer not found for the given identifiers"
                }
            ],
            "warnings": []
        },
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
    "totalCount": 4,
    "failureCount": 3
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

# API-specific error codes

| Error Code | Description                                                                                     | Reason                                                                     |
| ---------- | ----------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------- |
| 8892       | Promotion is inactive                                                                           | Promotion is currently inactive.                                           |
| 8015       | Customer not found for the given identifiers                                                    | Customer is not part of the loyalty program or the customer ID is invalid. |
| 1101       | Invalid programId passed                                                                        | Program ID is invalid.                                                     |
| 8874       | Promotion ID passed is invalid                                                                  | Promotion ID is invalid.                                                   |
| 8899       | Cannot enrol/issue to the user group.                                                           | A user group cannot be enrolled to a promotion.                            |
| 8881       | Insufficient parameters passed; program ID and one of the promotion ID/identifiers are required | Required parameters are not passed.                                        |
| 8901       | invalid entity type passed                                                                      | The entity type is invalid or unsupported.                                 |
| 11013      | identifierName, identifierValue, source can not be empty                                        | The fields mentioned are invalid or empty.                                 |