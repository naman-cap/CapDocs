---
title: Update customer details
excerpt: >-
  Let's you update the details of an existing customer other than primary or
  secondary identifiers. If any of the identifiers you pass already exists for a
  different account, then the customer details will be merged automatically.
api:
  file: customer-v11.json
  operationId: update-customer-details_v1api
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
> ❗️ Make sure you have the appropriate access control configured. For more information, see [access group documentation](https://docs.capillarytech.com/docs/access-group).

# API Behavior

* Updates existing customer details other than primary/secondary identifiers including custom fields and extended fields.
* Secondary identifiers only with null values will be updated. Hence, existing identifiers cannot be updated with this API.

<Note title="Note">
s**
You can update secondary identifiers (mobile no./email id./external id) only if the respective config mentioned in the following are enabled on InTouch **Settings** > **Miscellaneous** > **Registration Configuration**.

* CONF\_ALLOW\_MOBILE\_UPDATE (for mobile number).
* CONF\_ALLOW\_EMAIL\_UPDATE (for email id).
* CONF\_LOYALTY\_ALLOW\_EXTERNAL\_ID\_UPDATE (for external id).
</Note>

# API endpoint

`/v1.1/customer/update`

# Header information

You can define certain attributes in the API header section and define the user context details. For more information, refer to the user context section in the [Audit Details documentation](https://docs.capillarytech.com/reference/get-entity-audit-logs#adding-user-context-details).

# Body Parameters

| Parameter                      | Description                                                                                                                                                                                                                                                                       |
| ------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Mobile/email/external\_id/id\* | Pass any one of the following identifiers of the customer whose details you want to update.                                                                                                                                                                                       |
| firstname                      | First name of the customer.                                                                                                                                                                                                                                                       |
| lastname                       | Last name of the customer.                                                                                                                                                                                                                                                        |
| registered\_on                 | Date on which the customer is registered. Format: `YYYY-MM-DD HH:MM:SS`, <br />Example: 2016-09-11 11:11:11                                                                                                                                                                       |
| registered\_till               | The TILL at which customer is registered.                                                                                                                                                                                                                                         |
| associated\_with               | Till code that you want to associate with the customer.                                                                                                                                                                                                                           |
| type                           | Pass `LOYALTY` to convert a non\_loyalty customer to loyalty. You cannot change a loyalty customer non-loyalty (NON\_LOYALTY).                                                                                                                                                    |
| custom\_fields                 | Provide the custom field values of the customer in name and value pairs. You can only pass custom fields that are configured for the org. For information on custom fields refer to [Custom Fields Documentation](https://docs.capillarytech.com/docs/data-fields#custom-fields). |
| extended\_fields               | Provide the extended field details of the customer in name and value pairs. You can only pass extended fields that are configured for the org.                                                                                                                                    |
| subscriptions                  | Provide the subscription details of the customer.                                                                                                                                                                                                                                 |
| priority                       | Type of message. Value: `TRANS` for personalized or transaction messages, `BULK` for promotional messages.                                                                                                                                                                        |
| channel                        | Current communication channel. Value: `sms<code>, </code>email`.                                                                                                                                                                                                                  |
| fraud\_status                  | Update the fraud status of the customer in `status`. Values: `CONFIRMED`, `NONE`.                                                                                                                                                                                                 |

Parameter marked with \* is mandatory.

# Response Parameters

| Parameter            | Description                                                                                                                                                                                                                |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| user\_id             | Unique ID of the customer generated by the system.                                                                                                                                                                         |
| total                | Number of customers passed for registration.                                                                                                                                                                               |
| success\_count       | Number of customers that registered successfully.                                                                                                                                                                          |
| lifetime\_points     | Total loyalty points earned by the customer to date.                                                                                                                                                                       |
| lifetime\_purchases  | Total purchases amount (loyalty or non-loyalty transactions) of the customer across all stores of the org.                                                                                                                 |
| loyalty\_points      | Current active loyalty points (neither redeemed nor expired) of the customers.                                                                                                                                             |
| current\_slab        | Current loyalty tier of the customer.                                                                                                                                                                                      |
| tier\_expiry\_date   | Expiry date of the current tier in `YYYY-MM-DD HH:MM:SS` format.                                                                                                                                                           |
| points\_summaries    | Shows the details of the loyalty points.                                                                                                                                                                                   |
| programId            | Unique ID of the loyalty program associated to the points summary.                                                                                                                                                         |
| redeemed             | In total points earned from the program, the total number of points that are redeemed.                                                                                                                                     |
| expired              | In total points earned from the program, the total number of points that are expired.                                                                                                                                      |
| returned             | In total points earned from the program, the total number of points that are returned. Usually, for transaction returns.                                                                                                   |
| adjusted             | Points that are either credited to or debited from the customer account in adjustments. The value will be negative if  debited points are more than credited, and positive if credited points are more than debited.       |
| cumulativePurchases  | Total purchases amount of the customer in the stores associated to the current loyalty program.                                                                                                                            |
| currentSlab          | Current tier of the customer in the loyalty program.                                                                                                                                                                       |
| nextSlab             | Next loyalty tier of the customer.                                                                                                                                                                                         |
| nextSlabSerialNumber | Serial number of the next tier. Lowest tier will have 1, succeeding tier will have 2 and so on.                                                                                                                            |
| nextSlabDescription  | Description of the next tier as saved in the loyalty program.                                                                                                                                                              |
| slabSNo              | Serial number of the current tier of the customer. Lowest tier will have 1, succeeding tier will have 2 and so on.                                                                                                         |
| slabExpiryDate       | Expiry date of the current loyalty tier of the customer in `YYYY-MM-DD HH:MM:SS`.                                                                                                                                          |
| registered\_on       | Date on which the customer is enrolled in the org's loyalty.                                                                                                                                                               |
| updated\_on          | Recent date on which the customer details are updated.                                                                                                                                                                     |
| type                 | Loyalty type of the customer. `LOYALTY` if the customer is enrolled in the org's loyalty program, `NON_LOYALTY` if customer has not enrolled in the loyalty program but registered mobile number or email id with the org. |
| custom\_fields       | Custom field details of the customer - custom field name (`name<code>) and custom field value (</code>value`).                                                                                                             |
| extended\_fields     | Extended field details of the customer - extended field name (`name`) and extended field value (`value`).                                                                                                                  |
| subscriptions        | Mobile number and email ID subscription details of the customer.                                                                                                                                                           |
| channel              | Subscription channel. Value: `SMS`, `EMAIL`.                                                                                                                                                                               |
| priority             | Type of subscription. Value: `TRANS<code> for transaction or personalized messages, </code>BULK` for campaign or promotion messages.                                                                                       |
| status               | `0` for unsubscribed, `1` for subscribed.                                                                                                                                                                                  |
| side\_effects        | Other activities triggered because of the customer update. For example, points rewarded to the customer for updating profile (if configured).                                                                              |

## API specific Error Code

<Table align={["left","left","left"]}>
  <thead>
    <tr>
      <th>
        Error code
      </th>

      <th>
        Description
      </th>

      <th>
        Reason
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        500
      </td>

      <td>
        All requests have failed due to errors
      </td>

      <td>
        * Invalid inputs passed.<br />- Tried to update secondary identifier
      </td>
    </tr>
  </tbody>
</Table>