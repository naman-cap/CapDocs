---
title: Add Transaction with Local Currency
excerpt: ''
api:
  file: customer-v11.json
  operationId: add-transaction-with-local-currency
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
Lets you add transactions with a different currency using the currency conversion ratio. The following are the prerequisites or checklists for the API.

<Note title="Note">
s
* Enable `CONF_CURRENCY_CONVERSION_ENABLE` on the Billing Configuration page of **InTouch Profile** > **Organization Settings** > **Systems & Deployment** > **InTouch POS Configurations**.
* Configure org’s base currency and supported currencies on the Organization Setup page of **InTouch Profile** > **Organization Settings** > **Organization Setup** > **Organization Profile**.
* If no currency code is provided, the system will use the store's default currency.
* All monetary values should be provided in the local currency format.
* The API automatically handles conversion between local and base currency\.
* The response includes both local and base currency values for all monetary fields.
* Add relevant currency conversion ratios in the back-end either through /v2/currencyratio API or through Data Import.
* The issual of points/coupon or redemption is calculated automatically as per the destination currency.
</Note>

#### Rate Limit

| Region               | Default Limit (RPM) |
| :------------------- | :------------------ |
| Asia-2 (Singapore)   | 1500                |
| Asia-1 (N. Virginia) | 1500                |
| EMEA (Ireland)       | 700                 |

## Request Body Parameters

<Table align={["left","left","left"]}>
  <thead>
    <tr>
      <th>
        Parameter
      </th>

      <th>
        Type
      </th>

      <th>
        Description
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        type
      </td>

      <td>
        Enum
      </td>

      <td>
        Type of transaction. `regular` for loyalty transaction, \``not_interested` for non-loyalty or not-interested transactions.
      </td>
    </tr>

    <tr>
      <td>
        credit\_note
      </td>

      <td>
        obj
      </td>

      <td>
        Details of credit note
      </td>
    </tr>

    <tr>
      <td>
        currency\_code
      </td>

      <td>
        string
      </td>

      <td>
        Currency code applicable in ISO format. 
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
        qty
      </td>

      <td>
        double
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
        Price of each each line-item.
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
        Represents the pre-discount total for a single line item. Calculated as: value = rate × quantity. Example: If a line item has a rate of $10 and quantity of 2, value would be $20.
      </td>
    </tr>

    <tr>
      <td>
        amount
      </td>

      <td>
        double
      </td>

      <td>
        Net transaction amount. The actual transaction amount after discount.
      </td>
    </tr>

    <tr>
      <td>
        billing\_time
      </td>

      <td>
        date-time
      </td>

      <td>
        Date and time of the transaction. By default, the current system date and time will be considered.
      </td>
    </tr>

    <tr>
      <td>
        gross\_amount
      </td>

      <td>
        double
      </td>

      <td>
        Represents the total transaction amount before any discounts are applied.  It's the sum of all line items' values before discounts.\
        Used in calculations involving the total transaction value.
      </td>
    </tr>

    <tr>
      <td>
        discount
      </td>

      <td>
        double
      </td>

      <td>
        Discount availed for the transaction (discount amount).
      </td>
    </tr>

    <tr>
      <td>
        outlier\_status
      </td>

      <td>
        Enum
      </td>

      <td>
        Pass the outlier status of the transaction at transaction level, and outlier status of the line-item at line-item level.\
        Values: `INTERNAL`, `NORMAL`, `INVALID`, `OUTLIER`, `FAILED``, `DELETED`, `RETRO`, `FRAUD`, `TEST, OTHER\`\`\`.
      </td>
    </tr>

    <tr>
      <td>
        source
      </td>

      <td>
        Enum
      </td>

      <td>
        Source from which the transaction is made.\
        Values: `INSTORE` (for InStore), `WECHAT` (WeChat), `MARTJACK` (AnywhereCommerce), `WEB_ENGAGE` (Web-engage integration), `ECOMMERCE` (ECOMMERCE), `JD` (JD), `TAOBAO` (Taobao), `TMALL` (TMall), `FACEBOOK` (Facebook), `WEBSITE` (other website), `OTHERS` (any other source).
      </td>
    </tr>

    <tr>
      <td>
        not\_interested\_reason
      </td>

      <td>
        string
      </td>

      <td>
        Reason why the customer is not interested to register. Applicable only for not-interested transactions.
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
        Pass customer information. Applicable for non-loyalty and not-interested transactions.
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
  </tbody>
</Table>

#### customer object

| Parameter                    | Type   | Description                                                                                |
| :--------------------------- | :----- | :----------------------------------------------------------------------------------------- |
| mobile/email/id/external\_id | string | Pass any of the registered identifiers of the customer. Required for  regular transaction. |
| firstname                    | string | First name of the customer.                                                                |
| lastname                     | string | Last name of the customer.                                                                 |

#### credit\_note object

<Table align={["left","left","left"]}>
  <thead>
    <tr>
      <th>
        Parameter
      </th>

      <th>
        Type
      </th>

      <th>
        Description
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        amount
      </td>

      <td>
        double
      </td>

      <td>
        Net transaction amount of the original bill. Represents the final amount after discounts are applied.  For line items: amount = value - discount. For transactions: amount = gross\_amount - total\_discount
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
        number\*
      </td>

      <td>
        string
      </td>

      <td>
        Unique transaction number. The uniqueness depends on the configuration `CONF_LOYALTY_BILL_NUMBER_UNIQUE_IN_DAYS` set in **InTouch Settings > System & Deployment > InTouch POS Configuration > Billing**.  

        * \*Note\*\*: The maximum length for a bill number is 50 characters.
      </td>
    </tr>
  </tbody>
</Table>

## Error Codes

| Code | Description                                      |
| ---- | ------------------------------------------------ |
| 400  | Bad Request - Invalid input parameters           |
| 401  | Unauthorized - Invalid or missing authentication |
| 403  | Forbidden - Insufficient permissions             |
| 404  | Not Found - Resource not found                   |
| 500  | Internal Server Error                            |