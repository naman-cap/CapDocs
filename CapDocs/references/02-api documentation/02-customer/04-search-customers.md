---
title: Search Customers
excerpt: >-
  Lets you fetch customers based on partial or complete keywords passed. You can
  fetch customers by name, customer identifier, registered store id, registered
  date, loyalty points, lifetime points, lifetime purchases amount, current
  tier, transaction amount, and custom field values.
api:
  file: customer-v11.json
  operationId: search-customers
deprecated: true
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
> ❗️ This API is deprecated and is no longer supported.

<Note title="Note">
* If customer details are not found, then customer data is not retrieved. However, currently, `customer not found error` is not shown in V1.1. As there are no integrations built on V1.1 `customer/search`, it is recommended to use V2.0 customer/Search API to see proper response status.
* Error Code: 461\
  This represents timeout error when you try to fetch customers with all the three identifiers - mobile, email, and external id - and Solr DB times out.
  This is because, when you make an API call, Solr DB is queried firstly. If Solr times out, MySQL is searched, but MySQL does not support search on multiple identifiers.
</Note>

### Query Parameter Names

You need to understand Query Grammar to learn how to use input parameters for customer/search API. For more details, see the Query Grammar section.

Example: `?q=(slab:EQUALS:CLASSIC)`

| Parameter           | Datatype | Description                                                                                                                                                                                                                                                                         |
| ------------------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| firstname           | string   | Retrieves the list of customers whose first name matches with the string passed. <br />**Query**: `firstname:EXACT:<code>&#123;</code>first name`}                                                                                                                                  |
| lastname            | string   | Retrieves the list of customers whose last name matches with the string passed.<br />**Query**: `lastname:EXACT:<code>&#123;</code>last Name`}                                                                                                                                      |
| org\_id             | long     | Retrieves the list of entire customers of the respective organization. <br />**Query**: `org_id:EQUALS:<code>&#123;</code>org_id`}                                                                                                                                                  |
| mobile              | string   | Retrieves customers whose registered mobile numbers matches with the string passed. <br />**Query**: `mobile:EQUALS:<code>&#123;</code>mobile_number`}                                                                                                                              |
| email               | string   | Retrieves the list of registered customers whose email id matches with the string passed. <br />**Query**: `email:EQUALS:<code>&#123;</code>email_id`}                                                                                                                              |
| external\_id        | string   | Retrieves customers whose external id matches with the string passed. <br />**Query**: `external_id:EQUALS:<code>&#123;</code>external_id`}                                                                                                                                         |
| registered\_date    | date     | Retrieves customers by registered date. <br />**Query**: `registered_date:ON:<code>&#123;</code>date in YYYY-MM-DD`}.                                                                                                                                                               |
| loyalty\_points     | int      | Retrieves the list of customers whose active loyalty points matches the specified query. <br />**Query**: `loyalty_points:GREATER:<code>&#123;</code>loyalty_points`}                                                                                                               |
| lifetime\_points    | int      | Retrieves the list of customers whose lifetime points matches the specified query. <br />**Query**: `lifetime_points:GREATER:<code>&#123;</code>lifetime_points`}                                                                                                                   |
| lifetime\_purchases | int      | Retrieves the list of customers whose lifetime purchases amount matches the specified query. **Query**: `lifetime_purchases:GREATER:<code>&#123;</code>lifetime_purchases`}                                                                                                         |
| slab                | string   | Retrieves the list of customers whose current loyalty tier matches the specified value. <br />**Query**: `slab:EQUALS:<code>&#123;</code>tier_name`}                                                                                                                                |
| registered\_store   | string   | Retrieves customers by registered store. <br />**Query**: `registered_store:EQUALS:<code>&#123;</code>store_id`}                                                                                                                                                                    |
| last\_trans\_value  | double   | Retrieves the list of customers whose transaction amount matches the specified query. <br />**Query**: `transaction_value:GREATER:<code>&#123;</code>transaction_amount`}                                                                                                           |
| Operator            | enum     | Predefined conditions based on which you want to fetch results. Values: `STARTS<code>, </code>ENDS<code>, </code>EXACT<code>, </code>RANGE`, `LESS<code>, </code>GREATER<code>, </code>EQUALS<code>, </code>IN`. For more details, see the following section, Search Query Grammar. |

### Search Query Grammar

The following is a formal definition of the Query Grammar

**QUERY**: `(CONDITION) | (CONDITION & (CONDITION)*)`

**CONDITION**: `ATTRIBUTE:OPERATOR:VALUES`

**ATTRIBUTE**: Set of inventory/customer attributes that are searchable.

**Dynamic List**

* **OPERATOR**: STARTS, ENDS, EXACT, RANGE, LESS, GREATER, EQUALS, IN, ON
* **VALUES**: ALPHANUMERIC | ALPHANUMERIC;ALPHANUMERIC(for RANGE, IN OPERATOR, separator is ';' )

### Response Parameters

| Parameter           | Datatype  | Description                                                                                                |
| ------------------- | --------- | ---------------------------------------------------------------------------------------------------------- |
| count               | int       | Number of customer results retrieved.                                                                      |
| item                | obj       | Details of each customer.                                                                                  |
| user\_id            | long      | Unique ID of the customer generated by the system.                                                         |
| lifetime\_points    | int       | Total loyalty points earned by the customer to date.                                                       |
| lifetime\_purchases | int       | Total purchases amount (loyalty or non-loyalty transactions) of the customer across all stores of the org. |
| loyalty\_points     | int       | Current active loyalty points (neither redeemed nor expired) of the customers.                             |
| current\_slab       | string    | Current loyalty tier of the customer.                                                                      |
| registered\_on      | date-time | Date on which the customer is enrolled in the org's loyalty.                                               |
| registered\_by      | string    | TILL or store code from which the customer is enrolled in the loyalty program.                             |
| last\_trans\_value  | double    | Bill amount of the recent transaction of the customer.                                                     |
| attributes          | obj       | Customer attribute details in `name<code> and </code>value`                                                |