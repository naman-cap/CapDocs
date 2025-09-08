---
title: Get Customer Transactions
excerpt: >-
  Retrieves transaction history of a customer which includes the following
  information. Transaction type, gross transaction amount, transaction date,
  points issued, points redeemed, coupons redeemed and so on.


  By default, it shows up to 10 results and shows results based on the `limit`
  passed.


  * There is no upper limit for number of transactions.

  * There is no duration based limit.
api:
  file: customer-v11.json
  operationId: get-customer-transactions
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
By default, it shows up to 10 results and shows results based on the limit passed.

* There is no upper limit for number of transactions.
* There is no duration based limit.

> 📘 You cannot retrieve individual line-item level details of a transaction.

# Query parameters

| Parameter         | Datatype  | Description                                                                                                                                                                                                                                                              |
| ----------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| identifierName\*  | enum      | Pass any of the customer identifier with the identifier value. Value: mobile, email, external\_id id. To retrieve transactions of multiple customers at a time, provide each identifier separating by a comma. Example: mobile=44700900000,44700900999,4470090345.       |
| identifierValue\* | string    | Provide the respective identifier value. For example, ?email=[bradpitt@gmail.com](mailto:tom.sawyer@example.com).                                                                                                                                                        |
| entity\_type      | enum      | Attribute by which you want to filter the transactions. Value: ZONE, CONCEPT, STORE, TILL, STR\_SERVER (store server). For oAuth2, you need to pass this in headers. See the Introduction > Authentication section for more details.                                     |
| entity\_code      | string    | Code of the specified entity\_type. For example, to get transactions of a specific zone (with zone code zone01), pass entity\_type=zone\&entity\_code=zone01.                                                                                                            |
| number            | string    | Fetch transaction details by transaction number.                                                                                                                                                                                                                         |
| transaction\_id   | int       | Fetch details of a transaction by transaction ID (internally generated unique ID for a transaction).                                                                                                                                                                     |
| store\_id         | string    | Filter transactions associated to a specific store id.                                                                                                                                                                                                                   |
| store\_code       | string    | Filter transactions associated to a specific store code.                                                                                                                                                                                                                 |
| start\_id         | int       | Filters transactions with transaction IDs are greater than or equal to a specific value.                                                                                                                                                                                 |
| end\_id           | int       | Filter transactions with transaction IDs less than or equal to a specific value.                                                                                                                                                                                         |
| start\_date       | date-time | Retrieves transactions made on or after a specific date (YYYY-MM-DD). To get transactions of a particular duration, use both start\_date and end\_date. Example: start\_date=2013-12-21+23:45:45\&end\_date=2013-12-29+12:11:45                                          |
| end\_date         | date-time | Retrieves transactions made on or before a specific date (YYYY-MM-DD). To get transactions of a particular duration, use both start\_date and end\_date. Example: start\_date=2013-12-21+23:45:45\&end\_date=2013-12-29+12:11:45                                         |
| credit\_notes     | boolean   | Retrieves the credit notes of the transactions. Value: true,false. Pass the parameter to retrieve credit notes along with the transaction details. Credit Notes is a receipt given by a cashier to a customer for returned goods which can be used for future purchases. |
| custom\_fields    | boolean   | Pass true to retrieve transaction level custom field details.                                                                                                                                                                                                            |
| points\_breakup   | boolean   | Pass true to retrieve the breakup of points earned for each transaction.                                                                                                                                                                                                 |
| limit             | int       | Limit the number of results to be displayed (default value is 10). For example, limit=20 shows up to 20 transactions of the customer.                                                                                                                                    |
| offset            | int       | Number of records to be ignored from the top. Offset is the position of the entity in the database record. The value is assigned based on the sequence of creation. For example, offset=10 ignores the first 10 transactions of the customer.                            |
| sort              | enum      | Arranges transactions in ascending or descending order of transaction date if the value istrans\_date, transaction id if the value is trans\_id. By default, results are shown in descending order.                                                                      |
| order             | enum      | Arranges the transactions based on the value set in sort in an ascending (asc) or descending order (desc). By default, results are shown in the descending order of transaction date/id.                                                                                 |

# Response parameters

| Parameter                                         | Description                                                       |
| ------------------------------------------------- | ----------------------------------------------------------------- |
| `response.status.success`                         | Indicates whether the request was successful.                     |
| `response.status.code`                            | HTTP response code.                                               |
| `response.status.message`                         | Descriptive message related to the response code.                 |
| `response.customer.firstname`                     | First name of the customer.                                       |
| `response.customer.lastname`                      | Last name of the customer.                                        |
| `response.customer.user_id`                       | Unique identifier for the user.                                   |
| `response.customer.mobile`                        | Mobile number of the customer.                                    |
| `response.customer.email`                         | Email address of the customer.                                    |
| `response.customer.external_id`                   | External identifier for the customer.                             |
| `response.customer.lifetime_points`               | Total points accumulated over the lifetime.                       |
| `response.customer.lifetime_purchases`            | Total purchases made over the lifetime.                           |
| `response.customer.loyalty_points`                | Current loyalty points of the customer.                           |
| `response.customer.current_slab`                  | Current loyalty tier of the customer.                             |
| `response.customer.registered_on`                 | Date and time the customer registered.                            |
| `response.customer.updated_on`                    | Date and time the customer's details were last updated.           |
| `response.customer.type`                          | Type of the customer record.                                      |
| `response.customer.source`                        | Source from which the customer was registered.                    |
| `response.customer.count`                         | Count of some unspecified records.                                |
| `response.customer.start`                         | Start identifier for some range.                                  |
| `response.customer.delayed_points`                | Points that are delayed for some reason.                          |
| `response.customer.delayed_returned_points`       | Returned points that are delayed.                                 |
| `response.customer.total_available_points`        | Total available points for the customer.                          |
| `response.customer.total_returned_points`         | Total points that have been returned.                             |
| `response.customer.rows`                          | Number of rows/records.                                           |
| `response.customer.transactions.transaction[].id` | Unique identifier for the transaction.                            |
| `response.customer.item_status.success`           | Indicates the success of fetching transaction items.              |
| `response.customer.item_status.code`              | Code related to the transaction item fetch status.                |
| `response.customer.item_status.message`           | Descriptive message related to the transaction item fetch status. |
| `response.customer.item_status.warnings`          | Any warnings associated with the transaction item fetch.          |

# Error code

| Error | Description                 |
| :---- | :-------------------------- |
| 91001 | Failed to get point details |