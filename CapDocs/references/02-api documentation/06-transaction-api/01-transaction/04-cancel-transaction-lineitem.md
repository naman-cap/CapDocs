---
title: Cancel Transaction Lineitem
excerpt: >-
  Lets you cancel a line-item of a transaction. For example, it can be used for
  e-commerce platforms where the brand allows a customer to cancel an item (of a
  transaction) before it is shipped/delivered.
api:
  file: transaction-v1.json
  operationId: return-transaction
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
> 📘 To cancel a line-item, it is required to pass return item’s purchased transaction number and purchase\_time. Purchase time: The date and time of the actual transaction.  Billing time: The date and time of the return transaction.

# Request URL

`https://{host}/v1.1/transaction/add?format=json`

# Request Body Parameters

| Parameter           | Datatype  | Description                                                                                                                                                                         |
| ------------------- | --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Customer identifier | enum      | Pass any of the identifiers of customers for loyalty or non-loyalty returns. Value: `mobile`, `email`, `external_id`, `id`.                                                         |
| purchase\_time\*    | date-time | Date and time of the actual purchase of the return items.                                                                                                                           |
| number\*            | string    | The actual transaction number of the returned item.                                                                                                                                 |
| type\*              | enum      | Specify type as `RETURN` for regular transaction returns, `NOT_INTERESTED_RETURN` for not-interested transaction returns.                                                           |
| return\_type\*      | enum      | Specify `FULL` to return the entire transaction, `LINE_ITEM` to return a particular line-item of the transaction, `AMOUNT` to return the transaction amount instead of replacement. |

> 📘 Parameters marked with \* are mandatory.

# Response Body Parameters

| Parameter                    | Description                                              |
| ---------------------------- | -------------------------------------------------------- |
| status success               | The success status of the response.                      |
| status code                  | The HTTP status code of the response.                    |
| status message               | The status message of the response.                      |
| transaction id               | The ID of the transaction.                               |
| transaction number           | The number associated with the transaction.              |
| transaction type             | The type of transaction.                                 |
| transaction delivery\_status | The delivery status of the transaction.                  |
| transaction outlier\_status  | The outlier status of the transaction.                   |
| customer user\_id            | The user ID of the customer.                             |
| customer mobile              | The mobile number of the customer.                       |
| customer firstname           | The first name of the customer.                          |
| customer lastname            | The last name of the customer.                           |
| customer email               | The email address of the customer.                       |
| customer external\_id        | The external ID of the customer.                         |
| customer lifetime\_points    | The lifetime points accumulated by the customer.         |
| customer loyalty\_points     | The loyalty points accumulated by the customer.          |
| customer lifetime\_purchases | The lifetime purchases made by the customer.             |
| customer type                | The type of customer.                                    |
| customer source              | The source of the customer's information.                |
| transaction points\_deducted | The points deducted from the transaction.                |
| transaction points\_balance  | The balance of points after the transaction.             |
| item\_status code            | The status code of the item involved in the transaction. |
| item\_status success         | The success status of the item transaction.              |
| item\_status message         | The status message for the item transaction.             |
