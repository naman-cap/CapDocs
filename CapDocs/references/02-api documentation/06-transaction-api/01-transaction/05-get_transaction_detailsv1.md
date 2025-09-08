---
title: Get Transaction Details
excerpt: ''
api:
  file: customer-v11.json
  operationId: get_transaction_detailsv1
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
This API allows you to fetch the details of a specific transaction based on the transaction id.

> 📘
>
> Either transaction `number` or `id` is mandatory.

## Request Query Parameters

| Parameter     | Type      | Description                                                                                                                                                                                                                                                                                                     |
| :------------ | :-------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| id            | long      | Unique id of the transaction to fetch.                                                                                                                                                                                                                                                                          |
| number        | string    | Unique transaction number that want to fetch.                                                                                                                                                                                                                                                                   |
| store\_code   | string    | Fetch the transactions of a specific store. Pass the store code.                                                                                                                                                                                                                                                |
| till\_code    | string    | Fetch the transactions of a specific TILL. Pass the respective TILL code.                                                                                                                                                                                                                                       |
| amount        | double    | Filter transactions of a specific amount.                                                                                                                                                                                                                                                                       |
| date          | date-time | Filter transactions of a specific date. Pass the date in `YYYY-MM-DD` format.                                                                                                                                                                                                                                   |
| type          | Enum      | Filter transactions of a specific type. Values: `REGULAR`, `NOT_INTERESTED`, `RETURN`, `NOT_INTERESTED_RETURN`, `MIXED`, `NI_MIXED`, `ALL` (to retrieve any transaction type, for mixed or NI mixed, it retrieves both transaction and return details). By default it shows the details of regular transaction. |
| tenders       | boolean   | Pass `true` to retrieve transaction details.                                                                                                                                                                                                                                                                    |
| credit\_notes | boolean   | Pass `true` to retrieve credit notes.                                                                                                                                                                                                                                                                           |
| user\_id      | boolean   | Pass `true` to retrieve unique ID of the customer in response.                                                                                                                                                                                                                                                  |

> 🚧
>
> If you attempt to retrieve data of any deleted customer after a successful PII deletion, you will receive the following response:
>
> `"message": "Customer is deleted after PII delete request"`

# Response parameters

> 🚧
>
> The description in the line item is not the inventory level description but the description that you added while adding the transaction.

| Parameter          | Description                                                                                                                                                                                                          |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| response           | The response object containing status and transaction details.                                                                                                                                                       |
| status             | The status of the response, including success, code, and message.                                                                                                                                                    |
| success            | Indicates whether the transaction was successful (true or false).                                                                                                                                                    |
| code               | The status code of the response.                                                                                                                                                                                     |
| message            | A message indicating the status of the transaction retrieval process.                                                                                                                                                |
| transactions       | Details about the retrieved transactions, including count and transaction array.                                                                                                                                     |
| count              | The total number of transactions retrieved.                                                                                                                                                                          |
| transaction        | An array containing transaction objects. Each object represents a specific transaction.                                                                                                                              |
| customer           | Information about the customer associated with the transaction, including mobile, firstname, lastname, email, external\_id, and source.                                                                              |
| billing\_till      | Details about the billing till, including code and name.                                                                                                                                                             |
| billing\_store     | Details about the billing store, including code and name.                                                                                                                                                            |
| id                 | The unique identifier for the transaction.                                                                                                                                                                           |
| number             | The transaction number or identifier.                                                                                                                                                                                |
| type               | The type of transaction (e.g., REGULAR).                                                                                                                                                                             |
| outlier\_status    | The outlier status of the transaction (e.g., NORMAL).                                                                                                                                                                |
| store              | The store associated with the transaction.                                                                                                                                                                           |
| delivery\_status   | The delivery status of the transaction (e.g., DELIVERED).                                                                                                                                                            |
| amount             | The transaction amount.                                                                                                                                                                                              |
| billing\_time      | The date and time of billing for the transaction.                                                                                                                                                                    |
| auto\_update\_time | The date and time of the last update for the transaction.                                                                                                                                                            |
| gross\_amount      | The gross amount of the transaction.                                                                                                                                                                                 |
| discount           | The discount applied to the transaction.                                                                                                                                                                             |
| notes              | Additional notes or comments about the transaction.                                                                                                                                                                  |
| line\_items        | Details about the line items in the transaction, including type, outlier\_status, serial, item\_code, description, qty, rate, value, discount, img\_url, amount, returnable, returnable\_days, and extended\_fields. |
| type               | The type of line item (e.g., REGULAR).                                                                                                                                                                               |
| outlier\_status    | The outlier status of the line item (e.g., NORMAL).                                                                                                                                                                  |
| serial             | The serial number of the line item.                                                                                                                                                                                  |
| item\_code         | The code associated with the item.                                                                                                                                                                                   |
| description        | A description of the item.                                                                                                                                                                                           |
| qty                | The quantity of the item.                                                                                                                                                                                            |
| rate               | The rate of the item.                                                                                                                                                                                                |
| value              | The value of the item.                                                                                                                                                                                               |
| discount           | The discount applied to the item.                                                                                                                                                                                    |
| img\_url           | The URL of the item's image.                                                                                                                                                                                         |
| returnable         | Indicates whether the item is returnable (true or false).                                                                                                                                                            |
| returnable\_days   | The number of days within which the item is returnable.                                                                                                                                                              |
| extended\_fields   | Additional extended fields associated with the line item.                                                                                                                                                            |
| combo\_items       | Details about combo items associated with the line item.                                                                                                                                                             |
| addon\_items       | Details about addon items associated with the line item.                                                                                                                                                             |
| split\_items       | Details about split items associated with the line item.                                                                                                                                                             |
| attributes         | Additional attributes associated with the line item.                                                                                                                                                                 |