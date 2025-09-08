---
title: Return Transaction
excerpt: Lets you submit a return transaction of any transaction type.
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
The following are different return types supported for a transaction.

1. Full Return: To return an entire transaction and exchange with different items
2. Line-item Return: To return line-item(s) of a transaction and exchange with other items
3. Mixed Return: To exchange one or more line items of a transaction (line-items)
4. Amount Return: To return the entire transaction amount

<Note title="Note">
s
* For return transactions, it is required to pass return item’s purchased transaction number and purchase\_ time . Purchase time: The date and time of the actual transaction \* Billing time: The date and time of the return transaction.
* Before using this API, you need to know the configurations set of the Return Transactions page of InTouch **Settings** > **Systems & Deployment** > **InTouch POS Configuration**.
* You can disable the configuration CONF\_POINTS\_RETURN\_ENABLED to prevent the reversal of earned points when a transaction is returned. When a user returns a transaction, the points earned for that transaction are not reversed. To reverse the points, you can use the [Manual Points Adjustment API](https://docs.capillarytech.com/reference/deduct-points-and-alternatecurrencies-from-user-using-userid#/). **To enable the configuration for your organisation, raise a JIRA ticket to the Capillary Product Support team.**
</Note>

# Request URL

`https://{host}/v1.1/transaction/add?format={xml/json}`

# Request Body Parameters

<Table align={["left","left","left"]}>
  <thead>
    <tr>
      <th>
        Parameter
      </th>

      <th>
        Datatype
      </th>

      <th>
        Description
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        type\*
      </td>

      <td>
        enum
      </td>

      <td>
        Type of transaction. RETURN for loyalty transaction return, NOT\_INTERESTED\_RETURN for not-interested return, MIXED for exchange (involves both return and purchase). You will also need to pass type for MIXED transaction both at bill level (MIXED) and line-item level (regular for new transaction item and return for return item).
      </td>
    </tr>

    <tr>
      <td>
        return\_type
      </td>

      <td>
        enum
      </td>

      <td>
        Type of return. Value: AMOUNT to return transaction or line-items for money, LINE\_ITEM to return one or more line-items of the transaction, FULL to return complete transaction.
      </td>
    </tr>

    <tr>
      <td>
        number\*
      </td>

      <td>
        string
      </td>

      <td>
        Sale transaction number of the return bill.
      </td>
    </tr>

    <tr>
      <td>
        id
      </td>

      <td>
        long
      </td>

      <td>
        Transaction ID of the transaction that needs to be returned.

        Identifies the specific transaction to be returned when identical bill numbers exist across different transactions.
        This is applicable when the CONF\_LOYALTY\_BILL\_NUMBER\_UNIQUE\_ONLY\_STORE configuration is enabled, and the same bill number is used for transactions at different stores.
        Example:
        Store A: Customer transaction with bill number B1
        Store B: Different transaction also with bill number B1
        In this scenario, you can include the transaction ID in the return transaction payload to:

        * Distinguish between transactions with identical bill numbers
        * Prevent failures in return transactions due to duplicate bill numbers
      </td>
    </tr>

    <tr>
      <td>
        parent\_bill\_number
      </td>

      <td>
        string
      </td>

      <td>
        Return transaction number.
      </td>
    </tr>

    <tr>
      <td>
        billing\_time\*
      </td>

      <td>
        date-time
      </td>

      <td>
        Date and time of the return transaction in YYYY-MM-DD HH:MM:SS format.
      </td>
    </tr>

    <tr>
      <td>
        purchase\_time\*
      </td>

      <td>
        date
      </td>

      <td>
        Actual transaction date of the returning bill in YYYY-MM-DD HH-MM-SS format.
      </td>
    </tr>

    <tr>
      <td>
        notes
      </td>

      <td>
        string
      </td>

      <td>
        Additional information about the transaction.
      </td>
    </tr>

    <tr>
      <td>
        amount\*
      </td>

      <td>
        double
      </td>

      <td>
        Sum of regular line items of the current transaction after discount.
      </td>
    </tr>

    <tr>
      <td>
        qty\*
      </td>

      <td>
        int
      </td>

      <td>
        Quantity of the current line-item.
      </td>
    </tr>

    <tr>
      <td>
        rate
      </td>

      <td>
        float
      </td>

      <td>
        Price of each line-item.
      </td>
    </tr>

    <tr>
      <td>
        value
      </td>

      <td>
        float
      </td>

      <td>
        Gross transaction amount (transaction amount excluding discount).
      </td>
    </tr>

    <tr>
      <td>
        source
      </td>

      <td>
        enum
      </td>

      <td>
        Source from which the transaction is made. Values: INSTORE( for InStore), WECHAT (WeChat), MARTJACK(AnywhereCommerce), WEB\_ENGAGE (Web-engage integration), ECOMMERCE(“ECOMMERCE”), JD (JD), TAOBAO (Taobao), TMALL (TMall), FACEBOOK (Facebook), WEBSITE (other website), OTHERS (any other source).
      </td>
    </tr>

    <tr>
      <td>
        customer
      </td>

      <td>
        obj
      </td>

      <td>
        Customer details associated to the transaction. Not applicable for not-interested transactions.
      </td>
    </tr>

    <tr>
      <td>
        mobile/email/external\_id
      </td>

      <td>
        string
      </td>

      <td>
        Pass any of the registered identifiers of the customer. Required for regular transaction returns.
      </td>
    </tr>

    <tr>
      <td>
        firstname
      </td>

      <td>
        string
      </td>

      <td>
        First name of the customer.
      </td>
    </tr>

    <tr>
      <td>
        lastname
      </td>

      <td>
        string
      </td>

      <td>
        Last name of the customer.
      </td>
    </tr>

    <tr>
      <td>
        extended\_fields
      </td>

      <td>
        obj
      </td>

      <td>
        Valid transaction level extended field details in name and value pairs. You can also pass line-item level extended field details in line\_item object.
      </td>
    </tr>

    <tr>
      <td>
        custom\_fields
      </td>

      <td>
        obj
      </td>

      <td>
        Transaction level custom field details. Pass line-item level custom field details in line\_item object.
      </td>
    </tr>

    <tr>
      <td>
        line\_items
      </td>

      <td>
        obj
      </td>

      <td>
        Details of transaction line-items.
      </td>
    </tr>

    <tr>
      <td>
        serial
      </td>

      <td>
        long
      </td>

      <td>
        Serial number of the line-item.
      </td>
    </tr>

    <tr>
      <td>
        description
      </td>

      <td>
        string
      </td>

      <td>
        Description of the line-item.
      </td>
    </tr>

    <tr>
      <td>
        item\_code
      </td>

      <td>
        string
      </td>

      <td>
        Unique line-item code.
      </td>
    </tr>

    <tr>
      <td>
        variant
      </td>

      <td>
        string
      </td>

      <td>
        Variant code of the item. Applicable for variant product.
      </td>
    </tr>

    <tr>
      <td>
        addon\_items
      </td>

      <td>
        obj
      </td>

      <td>
        Details of add-on items. For example, pizza with extra cheese, and personalized toppings.
      </td>
    </tr>

    <tr>
      <td>
        combo\_items
      </td>

      <td>
        obj
      </td>

      <td>
        Details of combo or bundle items. For example, buy 1 shirt get one free, shirt+pant, pack of 5 soaps.
      </td>
    </tr>

    <tr>
      <td>
        split\_items
      </td>

      <td>
        obj
      </td>

      <td>
        Details of split items. For example, a necklace having gold rate, store rate, making charge, and wastage charges.
      </td>
    </tr>

    <tr>
      <td>
        item\_code
      </td>

      <td>
        string
      </td>

      <td>
        Unique code of the add-on, split, or combo item. For example, combo-22, pizza01\_addon.
      </td>
    </tr>

    <tr>
      <td>
        quantity
      </td>

      <td>
        double
      </td>

      <td>
        Quantity of the current add-on, split, or combo item.
      </td>
    </tr>

    <tr>
      <td>
        associate\_details
      </td>

      <td>
        obj
      </td>

      <td>
        Details of store associate or cashier who did the transaction.
      </td>
    </tr>

    <tr>
      <td>
        code
      </td>

      <td>
        string
      </td>

      <td>
        Unique code of the store associate.
      </td>
    </tr>

    <tr>
      <td>
        name
      </td>

      <td>
        string
      </td>

      <td>
        Name of the store associate.
      </td>
    </tr>
  </tbody>
</Table>

> 📘 Parameters marked with \* are mandatory.

# Response Parameters

| Parameter            | Datatype  | Description                                                                                                                                                                                                                                                                                           |
| -------------------- | --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| id                   | long      | Unique transaction ID generated internally for return.                                                                                                                                                                                                                                                |
| customer             | obj       | Details of the customer associated to the transaction. Not applicable for NOT\_INTERESTED transactions.                                                                                                                                                                                               |
| lifetime\_points     | int       | Total loyalty points earned by the customer to date.                                                                                                                                                                                                                                                  |
| lifetime\_purchases  | int       | Total purchases amount (loyalty or non-loyalty transactions) of the customer across all stores of the org.                                                                                                                                                                                            |
| loyalty\_points      | int       | Current active loyalty points (neither redeemed nor expired) of the customer.                                                                                                                                                                                                                         |
| type                 | enum      | Type of transaction. Value: return for loyalty transaction, not\_interested\_return for non-loyalty or not-interested transactions.                                                                                                                                                                   |
| source               | enum      | Source from which the transaction is made. Values: INSTORE( for InStore), WECHAT (WeChat), MARTJACK(AnywhereCommerce), WEB\_ENGAGE (Web-engage integration), ECOMMERCE (ECOMMERCE), JD (JD), TAOBAO (Taobao), TMALL (TMall), FACEBOOK (Facebook), WEBSITE (other website), OTHERS (any other source). |
| current\_slab        | string    | Current loyalty tier of the customer.                                                                                                                                                                                                                                                                 |
| tier\_expiry\_date   | date-time | Expiry date of the current tier in YYYY-MM-DD HH:MM:SS format.                                                                                                                                                                                                                                        |
| points\_summaries    | obj       | Shows the details of the loyalty points.                                                                                                                                                                                                                                                              |
| programId            | long      | Unique ID of the loyalty program associated to the points summary.                                                                                                                                                                                                                                    |
| redeemed             | int       | In total points earned from the program, the total number of points that are redeemed.                                                                                                                                                                                                                |
| expired              | int       | In total points earned from the program, the total number of points that are expired.                                                                                                                                                                                                                 |
| returned             | int       | In total points earned from the program, the total number of points that are returned. Usually, for transaction returns.                                                                                                                                                                              |
| adjusted             | int       | Points that are either credited to or debited from the customer account in adjustments. The value will be negative if debited points are more than credited, and positive if credited points are more than debited.                                                                                   |
| cumulativePurchases  | double    | Total purchases amount of the customer in the stores associated to the current loyalty program.                                                                                                                                                                                                       |
| currentSlab          | string    | Current tier of the customer in the loyalty program.                                                                                                                                                                                                                                                  |
| nextSlab             | string    | Next loyalty tier of the customer.                                                                                                                                                                                                                                                                    |
| nextSlabSerialNumber | int       | Serial number of the next tier. Lowest tier will have 1, succeeding tier will have 2 and so on.                                                                                                                                                                                                       |
| nextSlabDescription  | string    | Description of the next tier as saved in the loyalty program.                                                                                                                                                                                                                                         |
| slabSNo              | int       | Serial number of the current tier of the customer. Lowest tier will have 1, succeeding tier will have 2 and so on.                                                                                                                                                                                    |
| slabExpiryDate       | date-time | Expiry date of the current loyalty tier of the customer in YYYY-MM-DD HH:MM:SS.                                                                                                                                                                                                                       |
| type                 | enum      | Loyalty type of the customer. LOYALTY if the customer is enrolled in the org’s loyalty program, NON\_LOYALTY if customer has not enrolled in the loyalty program but registered mobile number or email id with the org.                                                                               |
| custom\_fields       | obj       | Transaction or line-item level custom field details - field name (name) and field value (value).                                                                                                                                                                                                      |
| extended\_fields     | obj       | Transaction or line-item level extended field details - extended field name (name) and extended field value (value).                                                                                                                                                                                  |