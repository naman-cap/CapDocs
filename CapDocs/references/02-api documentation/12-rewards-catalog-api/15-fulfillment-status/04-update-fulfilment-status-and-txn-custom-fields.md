---
title: Update fulfillment status and transaction custom fields for issued rewards
excerpt: ''
api:
  file: v1.json
  operationId: update-fulfilment-status-and-txn-custom-fields
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
This API is used to update fulfilment status and transaction custom fields for issued rewards

> 👍 Note
>
> * For detailed information about our APIs and for hands-on testing, refer documentation in [API overview](https://docs.capillarytech.com/reference/apioverview) and step-by-step guide on making your first API call in [Make your first API call](https://docs.capillarytech.com/reference/make-your-first-api-call).

# Prerequisites

*   Authentication: Basic or OAuth authentication
*   Default access group

# Resource information

|                        |                                                                             |
| :--------------------- | :-------------------------------------------------------------------------- |
| URI                    | /api\_gateway/rewards/core/v1/management/transactions?skip\_validation=true |
| HTTP Method            | PUT                                                                         |
| Pagination             | No                                                                          |
| Batch support          | No                                                                          |
| Rate limit information | None                                                                        |

# API endpoint example

`https://eu.api.capillarytech.com/api_gateway/rewards/core/v1/management/transactions?skip_validation=true`

# Request path parameters

| Parameter Name   | Data Type | Description                                                                                                                                                                    |
| :--------------- | :-------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| skip\_validation | String    | A validation code is used to redeem points for the transaction. You can set skip\_validation to true in the configuration to bypass the validation code for points redemption. |

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
        **`transactions`**
      </td>

      <td>
        array
      </td>

      <td>
        Details about the transaction.
      </td>
    </tr>

    <tr>
      <td>
        **`transactionId*`**
      </td>

      <td>
        integer
      </td>

      <td>
        A unique ID for the transaction associated with the reward.
      </td>
    </tr>

    <tr>
      <td>
        `customerId`
      </td>

      <td>
        integer
      </td>

      <td>
        A unique ID for the customer associated with the transaction.
      </td>
    </tr>

    <tr>
      <td>
        `rewardId`
      </td>

      <td>
        integer
      </td>

      <td>
        A unique ID for the reward associated with the transaction.
      </td>
    </tr>

    <tr>
      <td>
        `transactionCustomFields`
      </td>

      <td>
        object
      </td>

      <td>
        Custom transaction fields enhance the ability to track and manage reward points beyond standard fields, meeting specific needs and requirements. Supported data types are String, Integer, Date, and Boolean. The default limit for transaction custom fields is **20**. Consider the following scenarios: **Scenario 1**: A brand partners with a third-party vendor to deliver their product, requiring additional tracking like vendor ID, handling instructions, and delivery date. To manage this, create custom fields for `vendor_ID`, `handling_instructions`, and `delivery_date`, and include them with their respective values in the `transactionCustomField` object.
        **Scenario 2**: A brand wants to store extra information about a transaction's status, such as internal status codes and notes not captured by standard fields. [Create custom fields](https://docs.capillarytech.com/reference/post-create-custom-field) for `internal_status_code` and `notes`, and add them with their corresponding values to the `transactionCustomField` object.
        Refer to [Reward Tracking with status and Custom Fields](https://docs.capillarytech.com/docs/reward-tracking-with-status-and-custom-fields-in-reward-fulfillment) for more information.
      </td>
    </tr>

    <tr>
      <td>
        `fulfillmentDetails`
      </td>

      <td>
        object
      </td>

      <td>
        The `fulfillmentDetails` object tracks the status of each transaction's fulfillment process and provides information about the current state of reward fulfillment. Consider the following scenarios: **Scenario 1**: A customer places an order for a reward. To track the order through its various stages, [create statuses](https://docs.capillarytech.com/reference/create-fulfillment-status) such as "Order received," "Processing," "Shipped," and "Delivered." Include these statuses as values in the `fulfillmentDetails` object to provide real-time tracking information to the customer.
        **Scenario 2**: A customer reports an issue with a reward they received or requests a return. Update the `fulfillmentDetails` object with statuses like "Returned," "Refund processed," or "Issue resolved." This approach helps manage and track returns or complaints more effectively.
      </td>
    </tr>

    <tr>
      <td>
        `status`
      </td>

      <td>
        string
      </td>

      <td>
        The current status of the fulfillment process. Statuses can be created from [Create fulfillment status](https://docs.capillarytech.com/reference/create-fulfillment-status).
      </td>
    </tr>
  </tbody>
</Table>

```json
{
    "transactions": [
        {
            "transactionId": 3482445,
            "customerId": 85076836,
            "rewardId": 177657,
            "transactionCustomFields": {
                "Partner_Order_Id" : "6565454987656",
                "Date" : "10/09/2024",
                "Time" : "evening",
                "Seat_Section" : "Orchestra",
                "Seat_Row" : "Q",
                "Seat_Number" : "205",
                "Paypal_Order_Id" : "45678",
                "Paypal_amout" : "30$"
            },
            "fulfillmentDetails": {
                "status": "Confirmed"
            }
        }
    ]
}
```

# Response parameters

| Parameter          | Description                                                 |
| ------------------ | ----------------------------------------------------------- |
| transactions       | Details about the transaction.                              |
| id                 | Unique id of the transaction to fetch.                      |
| customerId         | Unique id for the customer associated with the transaction. |
| rewardId           | Unique id for the reward associated with the transaction.   |
| fulfillmentDetails | Details about the fulfillment status.                       |
| id                 | Unique id of the fulfillment details                        |
| status             | Current status of the fulfillment process.                  |

```json
{
    "transactions": [
        {
            "transactionId": 3482445,
            "rewardId": 177657,
            "customerId": 85076836,
            "fulfillmentDetails": {
                "id": 9,
                "status": "Confirmed"
            },
            "transactionCustomFields": {
                "Partner_Order_Id": "6565454987656",
                "Date": "10/09/2024",
                "Time": "evening",
                "Seat_Section": "Orchestra",
                "Seat_Row": "Q",
                "Seat_Number": "205",
                "Paypal_Order_Id": "45678",
                "Paypal_amout": "30$"
            }
        }
    ]
}
```