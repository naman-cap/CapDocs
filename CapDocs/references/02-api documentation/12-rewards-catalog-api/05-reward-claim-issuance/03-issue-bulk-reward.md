---
title: Issue bulk reward
excerpt: ''
api:
  file: v1.json
  operationId: issue-bulk-reward
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
This API is used to issue multiple rewards to the user based on mobile number email Id.

While issuing bulk rewards,

1. The intouch points required to purchase the rewards are summed up and isRedeemable call checks if the customer has enough points or not.
   1. If the customer has enough points, then all the rewards in the issue bulk call are issued in a single shot
   2. If the customer doesn't have enough points, then the issue bulk call is failed and no reward is issued.
2. If the isRedeemable call is successful, then the system will issue the rewards to the user.

   1. Let's say, one reward is coupon, another is cart promotion in the request payload. Coupon is issued but cart promotion issual failed, this can happen and the coupon will be issued. Here in this case, partial issual will be successful.

> ❗️ Issuing a reward created for a customer segment
>
> If you want to issue a reward created for a specific customer segment, the user receiving the reward must belong to the segment or partition to which the reward is attached.

> 👍 Note
>
> * For detailed information about our APIs and for hands-on testing, refer documentation in [API overview](https://docs.capillarytech.com/reference/apioverview) and  step-by-step guide on making your first API call in [Make your first API call](https://docs.capillarytech.com/reference/make-your-first-api-call) .
> * If either of the user\_group2\_primary\_user\_id or user\_group2\_id or user\_group2\_external\_id is not null, the transaction will be treated as group loyalty redemption and GROUP\_LOYALTY\_REDEMPTION will be set to true for transaction
> * Rewards can be issued to customers when linked to cards or labels with an ACTIVE status. If no cards or labels are linked, rewards are still issued. A reward linked to a specific card series or label cannot be issued to a customer associated with a different card series or label.
> * The Rewards system (Marvel/Rewards Catalogue)  only deducts points from the customer if the vendor reward issue is successful. As a result, the need to reverse redeemed points does not arise, as points are deducted only upon a confirmed successful reward issue. The success of the vendor reward issue is determined based on the following configuration criteria:
>   1. \*\*HTTP Status Code:\*\*The API response must return a status code of 200.
>   2. \*\*Context Map Validation:\*\*The context map in the vendor redemption configuration must include a keyword "voucher". The "voucher" must have a valid value, such as a coupon code or reference ID.

# Prerequisites

*   Authentication: Basic or OAuth authentication
*   Default access group

# Resource information

|                        |                                                                                              |
| :--------------------- | :------------------------------------------------------------------------------------------- |
| URI                    | /api\_gateway/rewards/core/v1/user/rewards/issue?username=`\{store\}`\&skip\_validation=true |
| HTTP Method            | POST                                                                                         |
| Pagination             | No                                                                                           |
| Batch support          | No                                                                                           |
| Rate limit information | None                                                                                         |

# API endpoint example

`https://eu.api.capillarytech.com/api_gateway/rewards/core/v1/user/rewards/issue?username=swati&skip_validation=true`

# Request query parameters

| Parameter        | Data Type | Description                                                                                                                     |
| ---------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------- |
| Username\*       | String    | Username name of the store.                                                                                                     |
| skip\_validation | Boolean   | A validation code is used to redeem points for the transaction. `skip_validation` is set to true to bypass the validation code. |

# Request body parameters

<Table align={["left","left","left"]}>
  <thead>
    <tr>
      <th>
        Parameter
      </th>

      <th>
        Data Type
      </th>

      <th>
        Description
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `mobile`\*
      </td>

      <td>
        String
      </td>

      <td>
        Mobile phone number of the customer. Any of the identifiers is mandatory.
      </td>
    </tr>

    <tr>
      <td>
        `email ID`\*
      </td>

      <td>
        String
      </td>

      <td>
        Email ID of the customer. Any of the identifiers is mandatory.
      </td>
    </tr>

    <tr>
      <td>
        `external ID`\*
      </td>

      <td>
        String
      </td>

      <td>
        External ID of the customer. Any of the identifiers is mandatory.
      </td>
    </tr>

    <tr>
      <td>
        `brand`
      </td>

      <td>
        String
      </td>

      <td>
        Brand associated with the transaction.
      </td>
    </tr>

    <tr>
      <td>
        `transactionNumber`
      </td>

      <td>
        String
      </td>

      <td>
        Unique identifier for the transaction.
      </td>
    </tr>

    <tr>
      <td>
        `programId`
      </td>

      <td>
        Integer
      </td>

      <td>
        The ID of the program associated with the promotion.
      </td>
    </tr>

    <tr>
      <td>
        `notes`
      </td>

      <td>
        String
      </td>

      <td>
        A string used to store or represent additional information.
      </td>
    </tr>

    <tr>
      <td>
        `eventLogId`
      </td>

      <td>
        String
      </td>

      <td>
        A plain string identifier used to identify the transaction associated with a reward issuance. There is no character limit for this parameter.
      </td>
    </tr>

    <tr>
      <td>
        `quantity`\*
      </td>

      <td>
        Integer
      </td>

      <td>
        Quantity or redemption value of the specific reward issued. This is applicable for rewards with payment config CONV\_RATIO only and should have a value greater than one. For more information and various examples, refer to the documentation [here](https://docs.capillarytech.com/reference/reward-issuance-with-quantity-and-calculation-scenarios).
        **Notes:** -

        * If the quantity is entered with decimals, the system will not consider the decimal part. For example, if you enter the value 1.56, the system will disregard the .56, and the value will be treated as 1.
        * The maximum allowed quantity is **5** for rewards of type **CONV\_RATIO** if either redemptionValue or points are not provided.
        * If both the quantity and redemption value are defined in the payment configuration block, the defined number of rewards will be issued and the calculation will be based on the redemption value for each reward.
        * If you define quantity without a redemption value, the system considers the quantity as the redemption value. For example, if you provide a quantity of five and no redemption value, one reward with a redemption value of 5 will be issued.
      </td>
    </tr>

    <tr>
      <td>
        `rewards`
      </td>

      <td>
        Array
      </td>

      <td>
        Array of rewards associated with the transaction.
      </td>
    </tr>

    <tr>
      <td>
        `rewardId`
      </td>

      <td>
        Integer
      </td>

      <td>
        Unique identifier for a reward.
      </td>
    </tr>

    <tr>
      <td>
        `params`
      </td>

      <td>
        String
      </td>

      <td>
        Params acts as a key that holds additional information or configuration details as a JSON object.
      </td>
    </tr>

    <tr>
      <td>
        `requestId`
      </td>

      <td>
        String
      </td>

      <td>
        A plain string identifier for the request that initiated this reward issuance attempt. Each request ID must be unique for each reward. This is used for [Idempotency check](https://docs.capillarytech.com/reference/idempotency-check-for-issuing-reward). There is no character limit for this parameter.
      </td>
    </tr>

    <tr>
      <td>
        `paymentConfig`
      </td>

      <td>
        Object
      </td>

      <td>
        Payment configuration details for the reward.\
        **Note:** The payment config ID is mandatory if rewards are created with a payment configuration block. This applies when multiple payment configurations are defined for a single reward. It is not recommended to use Payment Config for single payment config as it will break the flow when rewards need to be issued from loyalty workflows/ loyalty promotions/ journeys/ campaigns.
      </td>
    </tr>

    <tr>
      <td>
        `-id`
      </td>

      <td>
        Integer
      </td>

      <td>
        Unique identifier for the payment configuration. (id can be obtained from this [API](https://docs.capillarytech.com/reference/get-brand-by-id))
      </td>
    </tr>

    <tr>
      <td>
        `-redemptionValue`
      </td>

      <td>
        Integer
      </td>

      <td>
        Value associated with the reward. Applicable only when the reward is mapped to a `CONV_RATIO` payment configuration. Represents the value (e.g., miles) associated with the reward. **Note**: If both the quantity (e.g., 2) and redemption value (e.g., 100 in the payment configuration block) are provided in the request body, the system takes the corresponding quantity and redemption values. If redemption value is not provided, the system takes quantity as the redemption value.
      </td>
    </tr>

    <tr>
      <td>
        `customFields`
      </td>

      <td>
        Object
      </td>

      <td>
        The list of custom fields associated with the reward issued to the customer. A custom field allows you to add extra information related to the reward. You can add the custom field in the issue reward call once the custom field is created using the [create custom field API](https://docs.capillarytech.com/reference/post-create-custom-field).
      </td>
    </tr>

    <tr>
      <td>
        `fulfillmentDetails`
      </td>

      <td>
        Object
      </td>

      <td>
        The list of fulfillment details associated with the reward. There can be multiple stages that the reward undergoes, such as BOOKED, ON THE WAY, DELIVERED. For example, A brand can have a fulfillment status as the Reward is SHIPPED before delivering the reward to the customer. You can create a fulfillment status using the [Create fulfillment status API](https://docs.capillarytech.com/reference/create-fulfillment-status) and use it in the issue reward call.
      </td>
    </tr>

    <tr>
      <td>
        `user_group2_primary_user_id`
      </td>

      <td>
        String
      </td>

      <td>
        Unique user ID of the primary member of the group associated with the rewards to be issued. Customer ID (`user_group2_id`) or User ID (`user_group2_primary_user_id`) or External ID (`user_group2_external_id`) ,any one of these three can be used. If any one of these is null, the transaction won't be considered a Group Loyalty Redemption.
      </td>
    </tr>

    <tr>
      <td>
        `eventDateTime`
      </td>

      <td>
        String
      </td>

      <td>
        Date and time when a triggering event (transactional or behavioural) occurred, initiating the reward earning. Time format: UTC time format (YYYY-MM-DDTHH:MM:SSZ).
      </td>
    </tr>
  </tbody>
</Table>

<br />

```json
{
    "status": {
        "success": true,
        "code": 200,
        "message": "Reward issued successfully"
    },
    "rewards": [
        {
            "status": {
                "success": false,
                "code": 8010,
                "message": "Reward issued partially"
            },
            "transactionId": 397107,
            "rewardId": 225086,
            "requestedQuantity": 1,
            "quantity": 2,
            "pointsReferenceId": null,
            "pointsReferenceIds": [],
            "eventLogId": null,
            "requestId": null,
            "intouch": [
                {
                    "pointsRedeemed": "0",
                    "couponCode": "1908009843",
                    "codeExpiry": "2025-10-31 00:00:00",
                    "codeExpiryDateTime": "2025-10-31T00:00:00Z"
                },
                {
                    "pointsRedeemed": "0",
                    "couponCode": "2088404495",
                    "codeExpiry": "2025-10-31 00:00:00",
                    "codeExpiryDateTime": "2025-10-31T00:00:00Z"
                }
            ],
            "promotions": [],
            "vendor": [],
            "eventDateTime": "2025-05-08T13:48:13Z",
            "restrictions": null,
            "paymentConfig": {
                "paymentMode": "FREE",
                "id": 463
            },
            "fulfillmentDetails": null,
            "customFields": null,
            "redemptionDetails": null
        },
        {
            "status": {
                "success": false,
                "code": 8003,
                "message": "fail to issue reward"
            },
            "transactionId": 397108,
            "rewardId": 225087,
            "requestedQuantity": 1,
            "quantity": 0,
            "pointsReferenceId": null,
            "pointsReferenceIds": [],
            "eventLogId": null,
            "requestId": null,
            "intouch": null,
            "promotions": [],
            "vendor": [],
            "eventDateTime": "2025-05-08T13:48:13Z",
            "restrictions": null,
            "paymentConfig": {
                "paymentMode": "FREE",
                "id": 464
            },
            "fulfillmentDetails": null,
            "customFields": null,
            "redemptionDetails": null
        }
    ]
}
```
```json With payment config
{
  "mobile": "919886022338",
  "brand": "marvel_automation",
  "transactionNumber": "Transaction-1716621508000",
  "rewards": [
    {
      "rewardId": 13649,
      "quantity": 40,
      "paymentConfig": {
            "id": 307,
            "points": 500
     }
    }
  ]
}
```
```json With fullfilment status and custom field
{
    "brand": "lekhanaBrand",
    "transactionNumber": "123456789",
    "rewards": [
        {
            "rewardId": 9252,
            "quantity": 1,
            "customFields": {
                "issue-reward-1": "issue-reward-values"
            },
            "fulfillmentDetails": {
                "status": "SHIPPED"
            }
        }
    ],
    "mobile": "916677777777"
}
```
```json With user_group2_primary_user_id
{
    "mobile": "11223569865",
    "brand": "BUKL",
    "transactionNumber": "107",
    "rewards": [
        {
            "rewardId": 221441,
            "quantity": 2,
            "paymentConfig": {
                "id": 456
            }
        }
    ],
    "user_group2_primary_user_id":"11223569865"
}
```
```json With params in Reward Level
{
    "mobile": "162651476021",
    "brand": "BUKL",
    "transactionNumber": 1719466915,
    "rewards": [
        {
            "rewardId": 153873,
            "quantity": 1,
            "paymentConfig": {
                "id": 34
            },
            "params": {
                "test": "test"
            }
        },
        {
            "rewardId": 225087,
            "quantity": 1
        }
    ]
}
```
```json With params in Request Level
{
    "mobile": "9988776655",
    "brand": "BUKL",
    "transactionNumber": "NeeTesttr11",
    "params": {
        "denomination": 100,
        "quantity": 1
    },
    "rewards": [
        {
            "rewardId": 225086,
            "quantity": 1
        },
        {
            "rewardId": 225087,
            "quantity": 1
        }
    ]
}
```
```json With redemptionValue
{
    "mobile": "9988776655",
    "brand": "BUKL",
    "transactionNumber": "NeeTesttr11",
    "rewards": [
        {
            "rewardId": 225086,
            "quantity": 1,
            "paymentConfig": {
                "redemptionValue": 500
            }
        },
        {
            "rewardId": 225087,
            "quantity": 1,
            "paymentConfig": {
                "redemptionValue": 100
            }
        }
    ]
}
```
```json With event log ID and request ID
{
    "mobile": "919825752814",
    "brand": "testOrg_marvel_20230822_147",
    "transactionNumber": "2344s4",
    "notes": "This is test",
    "eventLogId":"eventLogId124",
    "rewards": [
        {
            "rewardId": 125099,
            "quantity": 2,
            "requestId":"req3"
        },
        {
            "rewardId": 125101,
            "quantity": 2,
            "requestId":"req4"
        }
    ]
}
```
```json Issuing a reward by defining  Quantity and Redemption Value
{
    "mobile": "11223569865",
    "brand": "BUKL",
    "rewards": [
        {
            "rewardId": 311509,
            "quantity": 3,
            "paymentConfig": {
                "redemptionValue": 100
            }
        ]
    }
```
```json Issuing a reward with only quantity
{
    "mobile": "11223569865",
    "brand": "BUKL",
    "rewards": [
        {
            "rewardId": 308697,
            "quantity": 3
        }
    ]
}
```

# Response parameters

| Parameter          | Description                                                                                                                                                                                                                                                                           |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| status             | Represents the overall status of the reward issuance request.                                                                                                                                                                                                                         |
| success            | Indicates if the overall operation was successful or not.                                                                                                                                                                                                                             |
| code               | A unique code representing the overall status of the operation.                                                                                                                                                                                                                       |
| message            | A message providing additional information about the status of the operation.                                                                                                                                                                                                         |
| rewards            | A list of individual reward issuance results.                                                                                                                                                                                                                                         |
| status             | Represents the status of an individual reward issuance attempt.                                                                                                                                                                                                                       |
| success            | Indicates if the reward issuance for this specific reward was successful or not.                                                                                                                                                                                                      |
| code               | A unique code representing the status of this reward issuance attempt.                                                                                                                                                                                                                |
| message            | A message providing more details about the status of this reward issuance attempt.                                                                                                                                                                                                    |
| transactionId      | A unique identifier for the transaction associated with this reward issuance attempt.                                                                                                                                                                                                 |
| rewardId           | A unique identifier for the reward that was attempted to be issued.                                                                                                                                                                                                                   |
| requestedQuantity  | The Requested Quantity is the original number of items you asked for when making a reward request. Even if this number is later changed, for example, reduced from two to one, the Requested Quantity will still show the number you originally requested, which in this case is two. |
| quantity           | The number of rewards that were successfully issued in this transaction.                                                                                                                                                                                                              |
| pointsReferenceId  | A unique identifier generated each time rewards are issued. This field stores identifier, allowing you to track points redemption transaction.                                                                                                                                        |
| pointsReferenceIds | A unique identifier generated each time rewards are issued. This field stores a list of these identifiers, allowing you to track multiple points redemption transactions.                                                                                                             |
| eventLogId         | A plain string identifier used to identify the transaction associated with a reward issual.                                                                                                                                                                                           |
| requestId          | A unique identifier for the request that is used for Idempotency check.                                                                                                                                                                                                               |
| intouch            | Details of the rewards issued, including points redeemed, coupon codes, and expiration dates.                                                                                                                                                                                         |
| pointsRedeemed     | The number of points that were redeemed for this reward.                                                                                                                                                                                                                              |
| couponCode         | The unique code for the issued coupon.                                                                                                                                                                                                                                                |
| codeExpiry         | The expiration date and time for the issued coupon code in the format YYYY-MM-DD HH:MM:SS.                                                                                                                                                                                            |
| promotions         | A list of promotional offers associated with the reward.                                                                                                                                                                                                                              |
| vendor             | Vendor-related details associated with the reward issuance.                                                                                                                                                                                                                           |
| restrictions       | Restrictions or limitations that apply to the reward.                                                                                                                                                                                                                                 |
| paymentConfig      | Payment configuration details related to the reward.                                                                                                                                                                                                                                  |
| fulfillmentDetails | Fulfillment-related information for the reward.                                                                                                                                                                                                                                       |
| customFields       | Custom fields defined for the reward.                                                                                                                                                                                                                                                 |
| redemptionDetails  | Redemption-specific details associated with the reward.                                                                                                                                                                                                                               |
| redemptionType     | Specifies the category of reward redemption available, that indicate how users can redeem the reward.                                                                                                                                                                                 |
| redemptionValue    | Redemption Value is the value of a reward, showing how much is needed to claim it.                                                                                                                                                                                                    |

<br />

```json 200 OK
{
    "status": {
        "success": false,
        "code": 8010,
        "message": "Reward issued successfully"
    },
    "rewards": [
        {
            "status": {
                "success": true,
                "code": 200,
                "message": "Reward issued successfully"
            },
            "transactionId": 177831,
            "rewardId": 125099,
            "requestedQuantity": 2,
            "quantity": 2,
            "pointsReferenceId": null,
            "pointsReferenceIds": [
                "eiEWkQ"
            ],
            "eventLogId": "eventLogId124",
            "requestId": "req3",
            "intouch": [
                {
                    "pointsRedeemed": "10",
                    "couponCode": "32213631321782942853",
                    "codeExpiry": "2024-12-27 00:00:00"
                },
                {
                    "pointsRedeemed": "10",
                    "couponCode": "05544786382604497680",
                    "codeExpiry": "2024-12-27 00:00:00"
                }
            ],
            "redemptionDetails": {
                "redemptionType": "MILES",
                "redemptionValue": 2
            },
            "promotions": [],
            "vendor": [],
            "restrictions": null,
            "paymentConfig": null,
            "fulfillmentDetails": null,
            "customFields": null
        },
        {
            "status": {
                "success": true,
                "code": 200,
                "message": "Reward issued successfully"
            },
            "transactionId": 177831,
            "rewardId": 126100,
            "requestedQuantity": 2,
            "quantity": 2,
            "pointsReferenceId": null,
            "pointsReferenceIds": [
                "eiEWkQ"
            ],
            "eventLogId": "eventLogId125",
            "requestId": "req4",
            "intouch": [
                {
                    "pointsRedeemed": "15",
                    "couponCode": "3221363134382942853",
                    "codeExpiry": "2024-12-27 00:00:00"
                },
                {
                    "pointsRedeemed": "20",
                    "couponCode": "055447842352604497680",
                    "codeExpiry": "2024-12-27 00:00:00"
                }
            ],
            "redemptionDetails": {
                "redemptionType": "MILES",
                "redemptionValue": 2
            },
            "promotions": [],
            "vendor": [],
            "restrictions": null,
            "paymentConfig": null,
            "fulfillmentDetails": null,
            "customFields": null
        }
    ]
}
```
```json Reward issued partially
{
    "status": {
        "success": false,
        "code": 8010,
        "message": "Reward issued partially"
    },
    "rewards": [
        {
            "status": {
                "success": true,
                "code": 200,
                "message": "Reward issued successfully"
            },
            "transactionId": 177831,
            "rewardId": 125099,
            "requestedQuantity": 2,
            "quantity": 2,
            "pointsReferenceId": null,
            "pointsReferenceIds": [
                "eiEWkQ"
            ],
            "eventLogId": "eventLogId124",
            "requestId": "req3",
            "intouch": [
                {
                    "pointsRedeemed": "10",
                    "couponCode": "32213631321782942853",
                    "codeExpiry": "2024-12-27 00:00:00"
                },
                {
                    "pointsRedeemed": "10",
                    "couponCode": "05544786382604497680",
                    "codeExpiry": "2024-12-27 00:00:00"
                }
            ],
            "promotions": [],
            "vendor": [],
            "restrictions": null,
            "paymentConfig": null,
            "fulfillmentDetails": null,
            "customFields": null,
            "redemptionDetails": null
        },
        {
            "status": {
                "success": false,
                "code": 8004,
                "message": "fail to issue reward as  Coupon Series ID is invalid"
            },
            "transactionId": 177832,
            "rewardId": 125101,
            "requestedQuantity": 2,
            "quantity": 0,
            "pointsReferenceId": null,
            "pointsReferenceIds": [],
            "eventLogId": "eventLogId124",
            "requestId": "req4",
            "intouch": null,
            "promotions": [],
            "vendor": [],
            "restrictions": null,
            "paymentConfig": null,
            "fulfillmentDetails": null,
            "customFields": null,
            "redemptionDetails": null
        }
    ]
}
```
```json Invalid payment mode
{
    "status": {
        "success": false,
        "code": 12016,
        "message": "Invalid payment mode passed."
    },
    "intouch": null,
    "promotion": null,
    "vendor": null,
    "paymentConfig": null,
    "fulfillmentDetails": null,
    "customFields": null
}
```
```Text Payment config ID mandatory
{
    "status": {
        "success": false,
        "code": 400,
        "message": "Invalid payment mode passed.,Payment configuration id is mandatory"
    }
}
```
```json User don't belong to group
{
    "status": {
        "success": false,
        "code": 8004,
        "message": "fail to issue reward as user 373971337 does not belong to group 124",
        "partnerError": {
            "codes": [
                "1620"
            ],
            "messages": [
                "user 373971337 does not belong to group 124"
            ]
        }
    },
    "rewards":null
    
}
```
```json Non-Redeemable points
{
    "status": {
        "success": false,
        "code": 8004,
        "message": "fail to issue reward as  points are not redeemable",
        "partnerError": {
            "codes": [
                "828"
            ],
            "messages": [
                "points redemption rules/configuration not allowing redemption"
            ]
        }
    },
    "intouch": null,
    "promotion": null,
    "vendor": null
}
```
```json Invalid ID is passed
{
    "status": {
        "success": false,
        "code": 8004,
        "message": "fail to issue reward as  points are not redeemable",
        "partnerError": {
            "codes": [
                "1632"
            ],
            "messages": [
                "group id/externalId/primary userId 381751178 passed is not valid"
            ]
        }
    },
    "intouch": null,
    "promotion": null,
    "vendor": null
}
```
```json Invalid Request ID
{
    "status": {
        "success": false,
        "code": 10003,
        "message": "Request payload is not matching for the passed requestId/s"
    }
}
```
```json Duplicate Request ID
{
    "status": {
        "success": false,
        "code": 400,
        "message": "Duplicate requestId"
    }
}
```
```json User not associated with the card series linked to reward
{
    "status": {
        "success": false,
        "code": 12050,
        "message": "User has no valid cards from card series linked to the reward."
    },
    "intouch": null,
    "transactionId": 207595,
    "promotion": null,
    "vendor": null,
    "paymentConfig": null,
    "redemptionDetails": null,
    "fulfillmentDetails": null,
    "customFields": null,
    "eventLogId": null,
    "requestId": null
}
```

<br />

# Example: Issuing reward with quantity and redemption value

Consider the below scenario:

* Quantity = 3
* Redemption Value = 1000 miles
* Conversion ratio = 044

**Sample Payload:**

```json
{
    "mobile": "11223569865",
    "brand": "BUKL",
    "rewards": [
        {
            "rewardId": 311509,
            "quantity": 3,
            "paymentConfig": {
                "redemptionValue": 100
            }
        ]
    }
```

\*\*Calculation: \*\*

Formula:\
Points need to be Redeemed = (redemption\_value conv\_ratio) × reward\_quantity

\= (1000 0.44) × 3 = 6818 points\
Result: 6818 points are redeemed for 3 reward vouchers of 1000 miles each.

# Example: Issuing reward with only quantity

Consider the below scenario:

Quantity = 3

Conversion ratio = 044

The system interprets the quantity as the redemption value and reward quantity as 1.

**Sample Payload:**

<br />

```json
{
    "mobile": "11223569865",
    "brand": "BUKL",
    "rewards": [
        {
            "rewardId": 308697,
            "quantity": 3
        }
    ]
}
```

# Response parameters

| Parameter          | Description                                                                                                                                                                                                                                                                           |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| status             | Represents the overall status of the reward issuance request.                                                                                                                                                                                                                         |
| success            | Indicates if the overall operation was successful or not.                                                                                                                                                                                                                             |
| code               | A unique code representing the overall status of the operation.                                                                                                                                                                                                                       |
| message            | A message providing additional information about the status of the operation.                                                                                                                                                                                                         |
| rewards            | A list of individual reward issuance results.                                                                                                                                                                                                                                         |
| status             | Represents the status of an individual reward issuance attempt.                                                                                                                                                                                                                       |
| success            | Indicates if the reward issuance for this specific reward was successful or not.                                                                                                                                                                                                      |
| code               | A unique code representing the status of this reward issuance attempt.                                                                                                                                                                                                                |
| message            | A message providing more details about the status of this reward issuance attempt.                                                                                                                                                                                                    |
| transactionId      | A unique identifier for the transaction associated with this reward issuance attempt.                                                                                                                                                                                                 |
| rewardId           | A unique identifier for the reward that was attempted to be issued.                                                                                                                                                                                                                   |
| requestedQuantity  | The Requested Quantity is the original number of items you asked for when making a reward request. Even if this number is later changed, for example, reduced from two to one, the Requested Quantity will still show the number you originally requested, which in this case is two. |
| quantity           | The number of rewards that were successfully issued in this transaction.                                                                                                                                                                                                              |
| pointsReferenceId  | A unique identifier generated each time rewards are issued. This field stores identifier, allowing you to track points redemption transaction.                                                                                                                                        |
| pointsReferenceIds | A unique identifier generated each time rewards are issued. This field stores a list of these identifiers, allowing you to track multiple points redemption transactions.                                                                                                             |
| eventLogId         | A plain string identifier used to identify the transaction associated with a reward issual.                                                                                                                                                                                           |
| requestId          | A unique identifier for the request that is used for Idempotency check.                                                                                                                                                                                                               |
| intouch            | Details of the rewards issued, including points redeemed, coupon codes, and expiration dates.                                                                                                                                                                                         |
| pointsRedeemed     | The number of points that were redeemed for this reward.                                                                                                                                                                                                                              |
| couponCode         | The unique code for the issued coupon.                                                                                                                                                                                                                                                |
| codeExpiry         | The expiration date and time for the issued coupon code in the format YYYY-MM-DD HH:MM:SS.                                                                                                                                                                                            |
| promotions         | A list of promotional offers associated with the reward.                                                                                                                                                                                                                              |
| vendor             | Vendor-related details associated with the reward issuance.                                                                                                                                                                                                                           |
| restrictions       | Restrictions or limitations that apply to the reward.                                                                                                                                                                                                                                 |
| paymentConfig      | Payment configuration details related to the reward.                                                                                                                                                                                                                                  |
| fulfillmentDetails | Fulfillment-related information for the reward.                                                                                                                                                                                                                                       |
| customFields       | Custom fields defined for the reward.                                                                                                                                                                                                                                                 |
| redemptionDetails  | Redemption-specific details associated with the reward.                                                                                                                                                                                                                               |
| redemptionType     | Specifies the category of reward redemption available, that indicate how users can redeem the reward.                                                                                                                                                                                 |
| redemptionValue    | Redemption Value is the value of a reward, showing how much is needed to claim it.                                                                                                                                                                                                    |

<br />

```json 200 OK
{
    "status": {
        "success": false,
        "code": 8010,
        "message": "Reward issued successfully"
    },
    "rewards": [
        {
            "status": {
                "success": true,
                "code": 200,
                "message": "Reward issued successfully"
            },
            "transactionId": 177831,
            "rewardId": 125099,
            "requestedQuantity": 2,
            "quantity": 2,
            "pointsReferenceId": null,
            "pointsReferenceIds": [
                "eiEWkQ"
            ],
            "eventLogId": "eventLogId124",
            "requestId": "req3",
            "intouch": [
                {
                    "pointsRedeemed": "10",
                    "couponCode": "32213631321782942853",
                    "codeExpiry": "2024-12-27 00:00:00"
                },
                {
                    "pointsRedeemed": "10",
                    "couponCode": "05544786382604497680",
                    "codeExpiry": "2024-12-27 00:00:00"
                }
            ],
            "redemptionDetails": {
                "redemptionType": "MILES",
                "redemptionValue": 2
            },
            "promotions": [],
            "vendor": [],
            "restrictions": null,
            "paymentConfig": null,
            "fulfillmentDetails": null,
            "customFields": null
        },
        {
            "status": {
                "success": true,
                "code": 200,
                "message": "Reward issued successfully"
            },
            "transactionId": 177831,
            "rewardId": 126100,
            "requestedQuantity": 2,
            "quantity": 2,
            "pointsReferenceId": null,
            "pointsReferenceIds": [
                "eiEWkQ"
            ],
            "eventLogId": "eventLogId125",
            "requestId": "req4",
            "intouch": [
                {
                    "pointsRedeemed": "15",
                    "couponCode": "3221363134382942853",
                    "codeExpiry": "2024-12-27 00:00:00"
                },
                {
                    "pointsRedeemed": "20",
                    "couponCode": "055447842352604497680",
                    "codeExpiry": "2024-12-27 00:00:00"
                }
            ],
            "redemptionDetails": {
                "redemptionType": "MILES",
                "redemptionValue": 2
            },
            "promotions": [],
            "vendor": [],
            "restrictions": null,
            "paymentConfig": null,
            "fulfillmentDetails": null,
            "customFields": null
        }
    ]
}
```
```json Reward issued partially
{
    "status": {
        "success": false,
        "code": 8010,
        "message": "Reward issued partially"
    },
    "rewards": [
        {
            "status": {
                "success": true,
                "code": 200,
                "message": "Reward issued successfully"
            },
            "transactionId": 177831,
            "rewardId": 125099,
            "requestedQuantity": 2,
            "quantity": 2,
            "pointsReferenceId": null,
            "pointsReferenceIds": [
                "eiEWkQ"
            ],
            "eventLogId": "eventLogId124",
            "requestId": "req3",
            "intouch": [
                {
                    "pointsRedeemed": "10",
                    "couponCode": "32213631321782942853",
                    "codeExpiry": "2024-12-27 00:00:00"
                },
                {
                    "pointsRedeemed": "10",
                    "couponCode": "05544786382604497680",
                    "codeExpiry": "2024-12-27 00:00:00"
                }
            ],
            "promotions": [],
            "vendor": [],
            "restrictions": null,
            "paymentConfig": null,
            "fulfillmentDetails": null,
            "customFields": null,
            "redemptionDetails": null
        },
        {
            "status": {
                "success": false,
                "code": 8004,
                "message": "fail to issue reward as  Coupon Series ID is invalid"
            },
            "transactionId": 177832,
            "rewardId": 125101,
            "requestedQuantity": 2,
            "quantity": 0,
            "pointsReferenceId": null,
            "pointsReferenceIds": [],
            "eventLogId": "eventLogId124",
            "requestId": "req4",
            "intouch": null,
            "promotions": [],
            "vendor": [],
            "restrictions": null,
            "paymentConfig": null,
            "fulfillmentDetails": null,
            "customFields": null,
            "redemptionDetails": null
        }
    ]
}
```
```json Invalid payment mode
{
    "status": {
        "success": false,
        "code": 12016,
        "message": "Invalid payment mode passed."
    },
    "intouch": null,
    "promotion": null,
    "vendor": null,
    "paymentConfig": null,
    "fulfillmentDetails": null,
    "customFields": null
}
```
```Text Payment config ID mandatory
{
    "status": {
        "success": false,
        "code": 400,
        "message": "Invalid payment mode passed.,Payment configuration id is mandatory"
    }
}
```
```json User don't belong to group
{
    "status": {
        "success": false,
        "code": 8004,
        "message": "fail to issue reward as user 373971337 does not belong to group 124",
        "partnerError": {
            "codes": [
                "1620"
            ],
            "messages": [
                "user 373971337 does not belong to group 124"
            ]
        }
    },
    "rewards":null
    
}
```
```json Non-Redeemable points
{
    "status": {
        "success": false,
        "code": 8004,
        "message": "fail to issue reward as  points are not redeemable",
        "partnerError": {
            "codes": [
                "828"
            ],
            "messages": [
                "points redemption rules/configuration not allowing redemption"
            ]
        }
    },
    "intouch": null,
    "promotion": null,
    "vendor": null
}
```
```json Invalid ID is passed
{
    "status": {
        "success": false,
        "code": 8004,
        "message": "fail to issue reward as  points are not redeemable",
        "partnerError": {
            "codes": [
                "1632"
            ],
            "messages": [
                "group id/externalId/primary userId 381751178 passed is not valid"
            ]
        }
    },
    "intouch": null,
    "promotion": null,
    "vendor": null
}
```
```json Invalid Request ID
{
    "status": {
        "success": false,
        "code": 10003,
        "message": "Request payload is not matching for the passed requestId/s"
    }
}
```
```json Duplicate Request ID
{
    "status": {
        "success": false,
        "code": 400,
        "message": "Duplicate requestId"
    }
}
```
```json User not associated with the card series linked to reward
{
    "status": {
        "success": false,
        "code": 12050,
        "message": "User has no valid cards from card series linked to the reward."
    },
    "intouch": null,
    "transactionId": 207595,
    "promotion": null,
    "vendor": null,
    "paymentConfig": null,
    "redemptionDetails": null,
    "fulfillmentDetails": null,
    "customFields": null,
    "eventLogId": null,
    "requestId": null
}
```

<br />

# Example: Issuing reward with quantity and redemption value

Consider the below scenario:

* Quantity = 3
* Redemption value = 1000 miles
* Conversion ratio = 0.44

**Sample Payload:**

```json
{
  "mobile": "11223569865",
  "brand": "BUKL",
  "rewards": [
    {
      "rewardId": 311509,
      "quantity": 3,
      "paymentConfig": {
        "redemptionValue": 100
      }
    }
  ]
}
```

<br />

```mdx
```

**Calculation:**\
Formula:
Points need to be Redeemed = (redemption\_value / conv\_ratio) × reward\_quantity

\= (1000 / 0.44) × 3 = 6818 points\
**Result:** 6818 points are redeemed for 3 reward vouchers of 1000 miles each.

***

# Example: Issuing reward with only quantity

Consider the below scenario:

* Quantity = 3
* Conversion ratio = 0.44

The system interprets the quantity as the redemption value and reward quantity as 1.

**Sample Payload:**

```json
{
  "mobile": "11223569865",
  "brand": "BUKL",
  "rewards": [
    {
      "rewardId": 308697,
      "quantity": 3
    }
  ]
}
```

**Calculation:**\
Formula:
Points need to be Redeemed = (redemption\_value / conv\_ratio) × reward\_quantity

\= (3 / 0.44) × 1 = 7 points\
**Result:** 7 points are redeemed for one reward voucher of 3 miles.

# Example: Issuing reward created for customer segment

Consider the following scenario:

| **Reward** | **Segments and Partitions** |
| ---------- | --------------------------- |
| r1         | {`s1`,`p1`}, {`s2`,`p2`}    |
| r2         | {`s1`,`p2`}, {`s2`,`p1`}    |
| r3         | {`s1`,`p1`}, {`s3`,`p1`}    |
| r4         | No segments or partitions   |

**User Segments and Partitions:**

<Table>
  <thead>
    <tr>
      <th>
        **User**
      </th>

      <th>
        **Belongs to Segments and Partitions**
      </th>

      <th>
        **Reward details**
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        user1
      </td>

      <td>
        {`s2`,`p1`}, {`s3`,`p2`}
      </td>

      <td>
        Does not contain r1, r3; contains r2, r4
      </td>
    </tr>

    <tr>
      <td>
        user2
      </td>

      <td>
        {`s1`,`p1`}
      </td>

      <td>
        Contains r1, r3, r4; does not contain r2
      </td>
    </tr>

    <tr>
      <td>
        user3
      </td>

      <td>
        No segments or partitions
      </td>

      <td>
        Contains r4
      </td>
    </tr>
  </tbody>
</Table>

**Bulk Issuance Results:**

| **User** | **Bulk Issuance (r1, r2, r3, r4)** | **Success/Failure**                  |
| -------- | ---------------------------------- | ------------------------------------ |
| user1    | r1, r2, r3, r4                     | r1 and r3 fail; r2 and r4 are issued |
| user2    | r1, r2, r3, r4                     | r2 fails; r1, r3, and r4 pass        |
| user3    | r1, r2, r3, r4                     | r1, r2, and r3 fail; r4 passes       |

***

# API-specific error codes

| Error code | Description                                                                                                                                                                                                                                                               |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 400        | Invalid payment mode passed. Payment configuration ID is mandatory. If the `paymentConfig` block is defined in the body, then `paymentId` is mandatory.                                                                                                                   |
| 400        | Duplicate requestId                                                                                                                                                                                                                                                       |
| 3004       | Brand not found                                                                                                                                                                                                                                                           |
| 8003       | Fail to issue reward as reward is disabled or not started yet or expired                                                                                                                                                                                                  |
| 8004       | Fail to issue reward as points are not redeemable                                                                                                                                                                                                                         |
| 8010       | Reward issued partially. This occurs when one of the rewards has multiple payment configurations mapped to it. For more information, refer to the documentation [here](https://docs.capillarytech.com/reference/reward-issuance-with-quantity-and-calculation-scenarios). |
| 10003      | Invalid Request ID                                                                                                                                                                                                                                                        |
| 12005      | Reward constraint evaluation failed. Request failed. Max limit for the DAYS is reached. Allowed limit is 15 for level CUSTOMER                                                                                                                                            |
| 12016      | Invalid payment mode passed. Whatever `paymentId` is passed in this API, the same should be mapped for the reward created.                                                                                                                                                |
| 12034      | User doesn't belong to segment partition defined for reward segment                                                                                                                                                                                                       |
| 12050      | User has no valid cards from card series linked to the reward. The customer is not associated with the card series linked to the issued reward.                                                                                                                           |