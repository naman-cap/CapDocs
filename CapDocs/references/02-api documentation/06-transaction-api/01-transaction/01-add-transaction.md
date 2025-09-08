---
title: Add Transaction
excerpt: ''
api:
  file: customer-v11.json
  operationId: add-transaction
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
## Add Transaction

Lets you add transactions of loyalty, non-loyalty, or not-interested customers. You can add batch transactions by passing each transaction details in a separate transaction attribute.

#### Rate Limit

| Region               | Default Limit (RPM) |
| :------------------- | :------------------ |
| Asia-2 (Singapore)   | 1500                |
| Asia-1 (N. Virginia) | 1500                |
| EMEA (Ireland)       | 700                 |

Currently, there is no validation that bill amount should match with sum of line items as the data is accepted as it is from POS or integration

Following are the key functionalities of the transaction/add API.

* Registers customers automatically when a new identifier is passed with the transaction details.
* If any identifier matches with another accounts, customer accounts will be merged if the config mentioned below is not enabled.
* If CONFIG\_SKIP\_SECONDARY\_ID\_ON\_PRIMARY\_MISMATCH is enabled, if the primary identifier is different but any of the secondary identifiers exist, a new customer is registered with the primary identifier ignoring the secondary identifier. The config is available on the Registration Page of InTouch Profile > Organization Settings > Miscellaneous.
* Also, this config overrides CONF\_PRIMARY\_IDENTIFIER\_STRICT\_CHECK.
* Updates customer details if a registered identifier is passed with different customer details (other than customer identifiers).
* Supports transactions with Product Variant and Product Bundle details.
* Adds product variant to the database when a new variant product is passed with an existing base product.
* Adds base product to the database when a new base product/variant product is passed. However, if a new base product is passed with variant details, it adds only base product and ignores variant.
* For Multi Loyalty Programs, points can be grouped by their respective program IDs and correctly reflected in the side effects section of the response. To enable this, raise a JIRA ticket with the Sustenance team to activate the configuration `CONF_ENABLE_GROUP_POINTS_BY_PROGRAM` for your org.

### Request Body Parameters

| Parameters                             | Type      | Description                                                                                                                                                                                                                                                                                                                 |
| :------------------------------------- | :-------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| bill\_client\_id                       | string    | Unique id of the bill as per the client (org) end.                                                                                                                                                                                                                                                                          |
| type                                   | Enum      | Type of transaction. `regular` for loyalty transaction, `not_interested` for non-loyalty or not-interested transactions.                                                                                                                                                                                                    |
| number                                 | string    | Unique transaction number. The uniqueness depends on the configuration `CONF_LOYALTY_BILL_NUMBER_UNIQUE_IN_DAYS` set in <strong>InTouch Settings > System & Deployment > InTouch POS Configuration > Billing.</strong> **Note**: The maximum length for a bill number is 50 characters.                                     |
| amount                                 | double    | Net transaction amount of the original bill. Represents the final amount after discounts are applied.  For line items: amount = value - discount. For transactions: amount = gross\_amount - total\_discount                                                                                                                |
| discount                               | double    | Discount availed for the transaction or line item (discount amount).                                                                                                                                                                                                                                                        |
| currency\_code                         | string    | ISO currency code of the transaction. For example, `INR` for Indian Rupee, `SGD` for Singapore Dollar, `EUR` for Euro, `IQD` for Iraqi Dinar.                                                                                                                                                                               |
| notes                                  | string    | Additional information about the transaction.                                                                                                                                                                                                                                                                               |
| qty                                    | int       | Quantity of the current line-item. This gets rounded off to the nearest digit. For example, the quantity "0.003" can get rounded off to 0. It is recommended to use V2 API to avoid the rounding off quantity.                                                                                                              |
| rate                                   | float     | Price of each line-item.                                                                                                                                                                                                                                                                                                    |
| value                                  | double    | Represents the pre-discount total for a single line item. alculated as: value = rate × quantity. Example: If a line item has a rate of $10 and quantity of 2, value would be $20.                                                                                                                                           |
| billing\_time                          | date-time | Date and time of the transaction. By default, the current system date and time will be considered.                                                                                                                                                                                                                          |
| gross\_amount                          | double    | Represents the total transaction amount before any discounts are applied. It's the sum of all line items' values before discounts. Used in calculations involving the total transaction value.                                                                                                                              |
| outlier\_status                        | Enum      | Pass the outlier status of the transaction at transaction level, and outlier status of the line-item at line-item level. Values: `INTERNAL`, `NORMAL`, `INVALID`, `OUTLIER`, `FAILED`, `DELETED`, `RETRO`, `FRAUD`, `TEST`, `OTHER`.                                                                                        |
| source                                 | Enum      | Source from which the transaction is made. Values: `INSTORE` (for InStore), `WECHAT` (WeChat), `MARTJACK` (AnywhereCommerce), `WEB_ENGAGE` (Web-engage integration), `ECOMMERCE` (ECOMMERCE), `JD` (JD), `TAOBAO` (Taobao), `TMALL` (TMall), `FACEBOOK` (Facebook), `WEBSITE` (other website), `OTHERS` (any other source). |
| not\_interested\_reason                | string    | Reason why the customer is not interested to register. Applicable only for not-interested transactions.                                                                                                                                                                                                                     |
| pointsRedemptions                      | array     | Unique points redemption id(s) that you want to apply for the transaction. For example, `[727272, 237878]`.                                                                                                                                                                                                                 |
| couponRedemptions                      | array     | Unique coupon redemption id(s) that you want to apply for the transaction. For example, `[727298, 237856]`.                                                                                                                                                                                                                 |
| referral\_code                         | string    | Referral code for a new customer (if applicable) to register in the org's loyalty program. You can also have transaction level referral code.                                                                                                                                                                               |
| customer                               | obj       | Pass customer information. Applicable for non-loyalty and not-interested transactions.                                                                                                                                                                                                                                      |
| mobile/email/external\_id/card\_number | string    | Pass any of the registered identifiers of the customer. Required for regular transactions.                                                                                                                                                                                                                                  |
| extended\_fields                       | obj       | Valid transaction level extended field details in name and value pairs. You can also pass line-item level extended field details in `line_item` object.                                                                                                                                                                     |
| payment\_details                       | obj       | Payment details for the transaction.                                                                                                                                                                                                                                                                                        |
| attributes                             | obj       | Attributes of the current line-item in name and value pairs.                                                                                                                                                                                                                                                                |
| mode                                   | string    | Mode of payment. This has to be the mode configured for your org.                                                                                                                                                                                                                                                           |
| value                                  | float     | Amount paid through the current mode.                                                                                                                                                                                                                                                                                       |
| custom\_fields                         | obj       | Transaction level custom field details. Pass line-item level custom field details in `line_item` object.                                                                                                                                                                                                                    |
| line\_items                            | obj       | Details of transaction line-items.                                                                                                                                                                                                                                                                                          |
| serial                                 | long      | Serial number of the current line-item.                                                                                                                                                                                                                                                                                     |
| transaction\_number                    | string    | Transaction line-item number.                                                                                                                                                                                                                                                                                               |
| description                            | string    | Description of the line-item.                                                                                                                                                                                                                                                                                               |
| item\_code                             | string    | Unique line-item code.                                                                                                                                                                                                                                                                                                      |
| variant                                | string    | Variant code of the item. Applicable for variant product.                                                                                                                                                                                                                                                                   |
| addon\_items                           | obj       | Details of add\_on items. For example, pizza with extra cheese, and personalized toppings.                                                                                                                                                                                                                                  |
| combo\_items                           | obj       | Details of combo or bundle items. For example, buy 1 shirt get one free, shirt+pant, pack of 5 soaps.                                                                                                                                                                                                                       |
| split\_items                           | obj       | Details of split items. For example, a necklace having gold rate, store rate, making charge, and wastage charges.                                                                                                                                                                                                           |
| item\_code                             | string    | Unique code of the add-on, split, or combo item. For example, combo-22, pizza01\_addon.                                                                                                                                                                                                                                     |
| quantity                               | double    | Quantity of the current add-on, split, or combo item.                                                                                                                                                                                                                                                                       |
| associate\_details                     | obj       | Details of store associate or cashier who did the transaction.                                                                                                                                                                                                                                                              |
| code                                   | string    | Unique code of the store associate.                                                                                                                                                                                                                                                                                         |
| name                                   | string    | Name of the store associate.                                                                                                                                                                                                                                                                                                |

## Return Transaction

Lets you submit a return transaction of any transaction type.

The following are different return types supported for a transaction.

<Note title="Note">
For return transactions, it is required to pass return item's purchased transaction number and purchase time. Purchase time: The date and time of the actual transaction. Billing time: The date and time of the return transaction
</Note>

Before using this API, you need to know the configurations set of the Return Transactions page of InTouch **Settings** > **Systems & Deployment** > **InTouch POS Configuration**.

### Request Body Parameters (Return Transaction)

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
        Type of transaction. `RETURN` for loyalty transaction return, `NOT_INTERESTED_RETURN` for not-interested return, `MIXED` for exchange (involves both return and purchase).<br />You will also need to pass `type` for `MIXED` transaction both at bill level (MIXED) and line-item level (`regular` for new transaction item and `return` for return item).
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
        FULL - Returns the full amount of the original transaction.
        AMOUNT - Returns the specific amount passed in the amount parameter.
        LINE\_ITEM - Returns the amount based on items listed in the line\_item object
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
        Actual transaction number of the return bill.
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
        Date and time of the return transaction in `YYYY-MM-DD HH:MM:SS` format.
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
        Actual transaction date of the returning bill in`YYYY-MM-DD` format.
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
        Amount that needs to be returned.
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
        Source from which the transaction is made. Values: `INSTORE`( for InStore), `WECHAT` (WeChat), `MARTJACK`(AnywhereCommerce), `WEB_ENGAGE` (Web-engage integration), ECOMMERCE("ECOMMERCE"), `JD` (JD), `TAOBAO` (Taobao), `TMALL` (TMall), `FACEBOOK` (Facebook), `WEBSITE` (other website), `OTHERS` (any other source).
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
        Valid transaction level extended field details in name and value pairs. You can also pass line-item level extended field details in `line_item` object.
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
        Transaction level custom field details. Pass line-item level custom field details in `line_item` object.
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
        amount\*
      </td>

      <td>
        double
      </td>

      <td>
        Net line item amount including tax.
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

Parameters marked with \* are mandatory.

```json
{
    "root": {
        "transaction": {
            "type": "return",
            "country": "true",
            "number": "test00transact112",
            "return_type": "LINE_ITEM",
            "parent_bill_number": "returnBill112",
            "purchase_time": "2025-08-07 10:32:15",
            "amount": "3000.00",
            "billing_time": "2025-08-07 10:34:00",
            "customer": {
                "mobile": "919999988886",
                "email": "johnhill@gmail.com",
                "external_id": "0000011110",
                "firstname": "Tjuser",
                "lastname": "Eightysix"
            },
            "line_items": {
                "line_item": [
                    {
                        "serial": "2",
                        "amount": "2000",
                        "description": "Sports Shoes",
                        "item_code": "model_id_002",
                        "qty": "2",
                        "rate": "1000.00",
                        "value": "2000.00"
                    } 
                ]
            }
        }
    }
}
```

<br />

### Response Parameters

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
        id
      </td>

      <td>
        long
      </td>

      <td>
        Unique transaction ID generated internally.
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
        Details of the customer associated to the transaction. Not applicable for `NOT_INTERESTED` transactions.
      </td>
    </tr>

    <tr>
      <td>
        lifetime\_points
      </td>

      <td>
        int
      </td>

      <td>
        Total loyalty points earned by the customer to date.
      </td>
    </tr>

    <tr>
      <td>
        lifetime\_purchases
      </td>

      <td>
        int
      </td>

      <td>
        Total purchases amount (loyalty or non-loyalty transactions) of the customer across all stores of the org.
      </td>
    </tr>

    <tr>
      <td>
        loyalty\_points
      </td>

      <td>
        int
      </td>

      <td>
        Current active loyalty points (neither redeemed nor expired) of the customer.
      </td>
    </tr>

    <tr>
      <td>
        type
      </td>

      <td>
        enum
      </td>

      <td>
        Type of transaction. Value: `regular` for loyalty transaction, `not_interested` for non-loyalty or not-interested transactions.
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
        Source from which the transaction is made. Values: `INSTORE`( for InStore), `WECHAT` (WeChat), `MARTJACK`(AnywhereCommerce), `WEB_ENGAGE` (Web-engage integration), ECOMMERCE (ECOMMERCE), `JD` (JD), `TAOBAO` (Taobao), `TMALL` (TMall), `FACEBOOK` (Facebook), `WEBSITE` (other website), `OTHERS` (any other source).
      </td>
    </tr>

    <tr>
      <td>
        current\_slab
      </td>

      <td>
        string
      </td>

      <td>
        Current loyalty tier of the customer.
      </td>
    </tr>

    <tr>
      <td>
        tier\_expiry\_date
      </td>

      <td>
        date-time
      </td>

      <td>
        Expiry date of the current tier in `YYYY-MM-DD HH:MM:SS` format.
      </td>
    </tr>

    <tr>
      <td>
        points\_summaries
      </td>

      <td>
        obj
      </td>

      <td>
        Shows the details of the loyalty points.
      </td>
    </tr>

    <tr>
      <td>
        programId
      </td>

      <td>
        long
      </td>

      <td>
        Unique ID of the loyalty program associated to the points summary.
      </td>
    </tr>

    <tr>
      <td>
        redeemed
      </td>

      <td>
        int
      </td>

      <td>
        In total points earned from the program, the total number of points that are redeemed.
      </td>
    </tr>

    <tr>
      <td>
        expired
      </td>

      <td>
        int
      </td>

      <td>
        In total points earned from the program, the total number of points that are expired.
      </td>
    </tr>

    <tr>
      <td>
        returned
      </td>

      <td>
        int
      </td>

      <td>
        In total points earned from the program, the total number of points that are returned. Usually, for transaction returns.
      </td>
    </tr>

    <tr>
      <td>
        adjusted
      </td>

      <td>
        int
      </td>

      <td>
        Points that are either credited to or debited from the customer account in adjustments. The value will be negative if  debited points are more than credited, and positive if credited points are more than debited.
      </td>
    </tr>

    <tr>
      <td>
        cumulativePurchases
      </td>

      <td>
        double
      </td>

      <td>
        Total purchases amount of the customer in the stores associated to the current loyalty program.
      </td>
    </tr>

    <tr>
      <td>
        currentSlab
      </td>

      <td>
        string
      </td>

      <td>
        Current tier of the customer in the loyalty program.
      </td>
    </tr>

    <tr>
      <td>
        nextSlab
      </td>

      <td>
        string
      </td>

      <td>
        Next loyalty tier of the customer.
      </td>
    </tr>

    <tr>
      <td>
        nextSlabSerialNumber
      </td>

      <td>
        int
      </td>

      <td>
        Serial number of the next tier. Lowest tier will have 1, succeeding tier will have 2 and so on.
      </td>
    </tr>

    <tr>
      <td>
        nextSlabDescription
      </td>

      <td>
        string
      </td>

      <td>
        Description of the next tier as saved in the loyalty program.
      </td>
    </tr>

    <tr>
      <td>
        slabSNo
      </td>

      <td>
        int
      </td>

      <td>
        Serial number of the current tier of the customer. Lowest tier will have 1, succeeding tier will have 2 and so on.
      </td>
    </tr>

    <tr>
      <td>
        slabExpiryDate
      </td>

      <td>
        date-time
      </td>

      <td>
        Expiry date of the current loyalty tier of the customer in `YYYY-MM-DD HH:MM:SS`.
      </td>
    </tr>

    <tr>
      <td>
        registered\_on
      </td>

      <td>
        date-time
      </td>

      <td>
        Date on which the customer is enrolled in the org's loyalty.
      </td>
    </tr>

    <tr>
      <td>
        updated\_on
      </td>

      <td>
        date-time
      </td>

      <td>
        Recent date on which the customer details are updated.
      </td>
    </tr>

    <tr>
      <td>
        type
      </td>

      <td>
        enum
      </td>

      <td>
        Loyalty type of the customer. `LOYALTY` if the customer is enrolled in the org's loyalty program, `NON_LOYALTY` if customer has not enrolled in the loyalty program but registered mobile number or email id with the org.
      </td>
    </tr>

    <tr>
      <td>
        sideEffects
      </td>

      <td>
        Object
      </td>

      <td>
        Object containing side effects (additional information) for the customer creation, if any.
      </td>
    </tr>

    <tr>
      <td>
        * entityType
      </td>

      <td>
        Enum
      </td>

      <td>
        Entity which receives points. Possible values: `USER`, `USERGROUP2`, `GROUP2`
      </td>
    </tr>

    <tr>
      <td>
        * rawAwardedPoints
      </td>

      <td>
        BigDecimal
      </td>

      <td>
        Total number of points awarded without any rounding applied.
      </td>
    </tr>

    <tr>
      <td>
        * customerId
      </td>

      <td>
        Integer
      </td>

      <td>
        Unique ID of the customer who is awarded points
      </td>
    </tr>

    <tr>
      <td>
        * awardedPoints
      </td>

      <td>
        BigDecimal
      </td>

      <td>
        Total number of points awarded with rounding applied.
      </td>
    </tr>

    <tr>
      <td>
        * type
      </td>

      <td>
        Enum
      </td>

      <td>
        Type of award rewarded to the customer.
      </td>
    </tr>

    <tr>
      <td>
        * isReferrer
      </td>

      <td>
        Boolean
      </td>

      <td>
        Indicates if the customer is a referrer. `true`: Customer is the referrer. `false`: Customer is not the referrer. This field is visible when a referrer (customer who is referring another customer) is awarded an incentives.
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
        Transaction or line-item level custom field details - field name (`name`) and field value (`value`).
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
        Transaction or line-item level extended field details - extended field name (`name`) and extended field value (`value`).
      </td>
    </tr>
  </tbody>
</Table>

<br />

```json
{
  "response": {
    "status": {
      "success": "true",
      "code": 200,
      "message": "Success"
    },
    "transactions": {
      "transaction": [
        {
          "id": 884656083,
          "shipping_source_till_code": "",
          "number": "test00transact071",
          "bill_client_id": "",
          "type": "REGULAR",
          "delivery_status": "DELIVERED",
          "parent_bill_number": "",
          "outlier_status": "NORMAL",
          "customer": {
            "user_id": "564703252",
            "mobile": "919999988886",
            "firstname": "Tjuser",
            "lastname": "eightysix",
            "email": "johnhill@gmail.com",
            "external_id": "0000011110",
            "lifetime_points": "23002",
            "loyalty_points": "2",
            "current_slab": "Ruby",
            "tier_expiry_date": "2125-02-10 23:59:59",
            "points_summaries": {
              "points_summary": [
                {
                  "programId": "973",
                  "redeemed": "0",
                  "expired": "23000",
                  "returned": "0",
                  "adjusted": "0",
                  "lifetimePoints": "23000",
                  "loyaltyPoints": "0",
                  "cumulativePurchases": "142000",
                  "currentSlab": "Ruby",
                  "nextSlab": "Emerald",
                  "nextSlabSerialNumber": "6",
                  "nextSlabDescription": "Tier 6",
                  "slabSNo": "5",
                  "slabExpiryDate": "2125-02-10 23:59:59",
                  "totalPoints": ""
                },
                {
                  "programId": "983",
                  "redeemed": "0",
                  "expired": "0",
                  "returned": "0",
                  "adjusted": "0",
                  "lifetimePoints": "2",
                  "loyaltyPoints": "2",
                  "cumulativePurchases": "154000",
                  "currentSlab": "Coral",
                  "nextSlab": "Opal",
                  "nextSlabSerialNumber": "3",
                  "nextSlabDescription": "Tier 3",
                  "slabSNo": "2",
                  "slabExpiryDate": "2125-01-20 23:59:59",
                  "totalPoints": ""
                }
              ]
            },
            "lifetime_purchases": "142000",
            "type": "LOYALTY",
            "source": "instore"
          },
          "side_effects": {
            "effect": [
              {
                "awarded_points": 100,
                "total_points": 100,
                "customer_id": "424133043",
                "type": "points"
              },
              {
                "awarded_points": 100,
                "customer_id": "424133021",
                "is_referrer": "true",
                "type": "points"
              }
            ]
          },
          "source": "INSTORE",
          "item_status": {
            "success": "true",
            "code": 600,
            "message": "Transaction added successfully"
          }
        }
      ]
    }
  }
}
```
```json Response with alternate currencies as side effect
{
  "response": {
    "status": {
      "success": "true",
      "code": 200,
      "message": "Success"
    },
    "transactions": {
      "transaction": [
        {
          "id": 37813251,
          "shipping_source_till_code": "",
          "number": "BILL99",
          "bill_client_id": "",
          "type": "REGULAR",
          "delivery_status": "DELIVERED",
          "parent_bill_number": "",
          "outlier_status": "NORMAL",
          "customer": {
            "user_id": "342963216",
            "mobile": "919999000001",
            "firstname": "Tom",
            "lastname": "Sawyer",
            "email": "",
            "external_id": "",
            "lifetime_points": "106",
            "loyalty_points": "106",
            "current_slab": "bronze",
            "tier_expiry_date": "2119-09-20 23:59:59",
            "points_summaries": {
              "points_summary": [
                {
                  "programId": "1016",
                  "redeemed": "0",
                  "expired": "0",
                  "returned": "0",
                  "adjusted": "0",
                  "lifetimePoints": "106",
                  "loyaltyPoints": "106",
                  "cumulativePurchases": "18000",
                  "currentSlab": "bronze",
                  "nextSlab": "silver",
                  "nextSlabSerialNumber": "2",
                  "nextSlabDescription": "silver",
                  "slabSNo": "1",
                  "slabExpiryDate": "2119-09-20 23:59:59",
                  "totalPoints": ""
                }
              ]
            },
            "lifetime_purchases": "18000",
            "type": "LOYALTY",
            "source": "instore"
          },
          "side_effects": {
            "effect": [
              {
                "alternate_currency_identifier": "rgpws7",
                "alternate_currency_name": "ac1",
                "awarded_value": "110",
                "type": "alternate_currency"
              },
              {
                "alternate_currency_identifier": "pJ6E8A",
                "alternate_currency_name": "ac2",
                "awarded_value": "500",
                "type": "alternate_currency"
              },
              {
                "awarded_points": "120",
                "total_points": "2161",
                "type": "points"
              },
              {
                "previous_slab_name": "alpha1",
                "previous_slab_number": "1",
                "upgraded_slab_name": "Beta1",
                "upgraded_slab_number": "2",
                "type": "slab"
              }
            ]
          },
          "source": "ECOMM",
          "item_status": {
            "success": "true",
            "code": 600,
            "message": "Transaction added successfully"
          }
        }
      ]
    }
  }
}
```