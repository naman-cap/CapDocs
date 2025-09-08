---
title: Add/Return transaction (single)
excerpt: >-
  Lets you add a new transaction or return an existing transaction. It supports
  both loyalty and not-interested transactions.
api:
  file: v2.json
  operationId: add-transaction-single
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
#### Rate Limit

| Region               | Default Limit (RPM) |
| :------------------- | :------------------ |
| Asia-2 (Singapore)   | 1500                |
| Asia-1 (N. Virginia) | 1500                |
| EMEA (Ireland)       | 700                 |

> 👍 Notes
>
> * To avoid any confusion related to timezone conversion, you can raise a ticket and enable the CONF\_ORG\_DISABLE\_MACHINE\_TIME\_CONV configuration. When the configuration is enabled, the time from the payload, without the UTC offset, is stored in the database for all clusters. For more information, refer to the documentation [here](https://docs.capillarytech.com/reference/timezone-management#configuration-to-ignore-conversion-of-timezone-in-transaction).
> * You cannot register a customer with this API. Hence, you need to pass only registered identifiers for regular transactions.
> * You can enable the configuration CONF\_ALLOW\_TRANSACTION\_RETURN\_AFTER\_GROUP\_TRANSITION  to allow returns for former group members . When this config is active and when a return transaction is performed for a user who has left the group, the points allocated to the group as part of the original transaction are also reverted. To enable, raise a ticket to the Product Support Team.
> * You can disable the configuration CONF\_POINTS\_RETURN\_ENABLED to prevent the reversal of earned points when a transaction is returned. When a user returns a transaction, the points earned for that transaction are not reversed. To reverse the points, you can use the [Manual Points Adjustment API](https://docs.capillarytech.com/reference/deduct-points-and-alternatecurrencies-from-user-using-userid#/).
> * CONFIG\_SKIP\_SECONDARY\_ID\_ON\_PRIMARY\_MISMATCH is enabled: If the primary identifier is different but any of the secondary identifiers exist, a new customer is registered with the primary identifier ignoring the secondary identifier. The config is available on the Registration Page of InTouch Profile > Organization Settings > Miscellaneous.
> * **To enable these configurations for your organisation, raise a JIRA ticket to the Capillary Product Support team.**

## Request Query Parameters

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
        identifierName\*
      </td>

      <td>
        Enum
      </td>

      <td>
        Pass any of the registered identifier name of the customer.
        Values: `mobile`, `email`, `externalId`, `id`, `wechat`, `martjackId`, `fbId` (Facebook ID), `cardnumber`, `cardExternalId`.
      </td>
    </tr>

    <tr>
      <td>
        identifierValue\*
      </td>

      <td>
        string
      </td>

      <td>
        Pass the respective identifier value. For example if identifierType is mobile, identifierValue is mobile number.
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
        Pass the source from which the transaction is made. Values: `INSTORE`(for InStore), `WECHAT` (WeChat), `MARTJACK`(AnywhereCommerce), `WEB_ENGAGE` (Web-engage integration), `ECOMMERCE` (ECOMMERCE), `JD` (JD), `TAOBAO` (Taobao), `TMALL` (TMall), `FACEBOOK` (Facebook), `WEBSITE` (other website), `OTHERS` (any other source).
      </td>
    </tr>

    <tr>
      <td>
        accountId
      </td>

      <td>
        string
      </td>

      <td>
        For sources with multiple accounts (such as MARTJACK, WECHAT), pass the respective account ID. Not applicable for INSTORE source.
      </td>
    </tr>

    <tr>
      <td>
        use\_asynch
      </td>

      <td>
        boolean
      </td>

      <td>
        Pass `true` to run Loyalty activities in the background, side effects will not be returned in the API response. If `false`, API will wait for Loyalty activities to complete and then respond to the client with side effects in the API response.
      </td>
    </tr>

    <tr>
      <td>
        rawSideEffects
      </td>

      <td>
        boolean
      </td>

      <td>
        Pass `true` to get complete details of incentives such as awardOn, expiryDate, strategyIds and so on.
      </td>
    </tr>
  </tbody>
</Table>

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
        extendedFields
      </td>

      <td>
        obj
      </td>

      <td>
        Valid transaction level extended field details in name and value pairs.
      </td>
    </tr>

    <tr>
      <td>
        type\*
      </td>

      <td>
        Enum
      </td>

      <td>
        Type of transaction.
        Supported value: `REGULAR` for loyalty transactions. `RETURN` for return transactions. `NOT_INTERESTED`, `NOT_INTERESTED_RETURN`.
      </td>
    </tr>

    <tr>
      <td>
        returnType\*\*
      </td>

      <td>
        Enum
      </td>

      <td>
        For a return transaction, pass the return type.
        Value: `AMOUNT`, `FULL`, `LINE_ITEM`, `CANCELLED`.
      </td>
    </tr>

    <tr>
      <td>
        notInterestedReason
      </td>

      <td>
        string
      </td>

      <td>
        Notes on why the customer is not interested to enroll into the loyalty (type = NOT\_INTERESTED).
        Max characters supported - 255.
      </td>
    </tr>

    <tr>
      <td>
        billNumber\*
      </td>

      <td>
        string
      </td>

      <td>
        Unique transaction number for normal or mixed transactions and original transaction number for return transactions.

        * *Note*\*: The maximum length for a bill number is 50 characters.
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

        Identifies the specific transaction to be returned when identical bill numbers exist across different transactions.\
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
        billAmount
      </td>

      <td>
        double
      </td>

      <td>
        Net transaction amount.
      </td>
    </tr>

    <tr>
      <td>
        billingDate
      </td>

      <td>
        date-time
      </td>

      <td>
        Date and time of the transaction in the ISO 8601 format - `YYYY-MM-DDTHH:MM:SSZ`.
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
        Discount availed for the transaction or line item (discount amount).
      </td>
    </tr>

    <tr>
      <td>
        grossAmount
      </td>

      <td>
        double
      </td>

      <td>
        Transaction amount before discount.
      </td>
    </tr>

    <tr>
      <td>
        outlierStatus
      </td>

      <td>
        Enum
      </td>

      <td>
        Transaction level outlier status.\
        Values: `NORMAL`, `INTERNAL`, `FRAUD`, `OUTLIER`, `TEST`, `DELETED`, `FAILED`, `OTHER`. This overrides the outlier status of the configured outlier settings.
      </td>
    </tr>

    <tr>
      <td>
        note
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
        deliveryStatus
      </td>

      <td>
        Enum
      </td>

      <td>
        Delivery status of the item.\
        Values: `PLACED`, `PROCESSED`, `SHIPPED`, `DELIVERED`, `RETURNED`.
        You can update the status using v2 PUT `/transactions`
      </td>
    </tr>

    <tr>
      <td>
        userGroup2Id
      </td>

      <td>
        int
      </td>

      <td>
        External ID of the user group to be associated with the transaction. Any one among the parameters with userGroup2 is required to associate the transaction with a group.
      </td>
    </tr>

    <tr>
      <td>
        userGroup2PrimaryUserId
      </td>

      <td>
        long
      </td>

      <td>
        ID of the primary user of the group to be associated with the transaction.
      </td>
    </tr>

    <tr>
      <td>
        userGroup2ExternalId
      </td>

      <td>
        string
      </td>

      <td>
        External ID of the user group to be associated with the transaction.
      </td>
    </tr>

    <tr>
      <td>
        currencyCode
      </td>

      <td>
        string
      </td>

      <td>
        ISO currency code of the transaction to add transaction with local currency. For example, `INR` for Indian Rupee, `SGD` for Singapore Dollar, `EUR` for Euro, `IQD` for Iraqi Dinar. Pass the currency code that are supported for your org (InTouch > Organization Setup) and ensure the currency conversion ratio is set using `v2/currencyratio`.
      </td>
    </tr>

    <tr>
      <td>
        addWithLocalCurrency
      </td>

      <td>
        boolean
      </td>

      <td>
        Pass `true` to add a transaction in local currency.
      </td>
    </tr>

    <tr>
      <td>
        customFields
      </td>

      <td>
        obj
      </td>

      <td>
        Details of transaction level or transaction line-item level custom fields.
      </td>
    </tr>

    <tr>
      <td>
        purchaseTime
      </td>

      <td>
        date-time
      </td>

      <td>
        Actual date of transaction of the returning bill in Date and time of the transaction in ISO 8601 standard - `YYYY-MM-DDTHH:MM:SSZ`.
      </td>
    </tr>

    <tr>
      <td>
        promotionEvaluationId
      </td>

      <td>
        string
      </td>

      <td>
        Promotion evaluation code (cart/catalog) applied for the transaction.
      </td>
    </tr>

    <tr>
      <td>
        appliedPromotionIdentifiers
      </td>

      <td>
        array
      </td>

      <td>
        Base64-encoded string of cart or catalog promotion identifiers applied to the transaction.\
        To generate this string, evaluate the cart promotion using the [Evaluate Cart Promotions API](https://docs.capillarytech.com/reference/post-evaluate-promotions), and use the `identifier` field from the `appliedPromotions` object in the response.

        The decoded identifier will include details like:\
        `{"promotionId": "612e5c5e4133b56abe0f073e", "discount": "1000.000000", "amount": "3000.000000", "discountAppliedQty": "1", "promotionAppliedQty": "3.000000", "redemptionCount": 1, "sku": "JNSREG02","version": "v1"}`
      </td>
    </tr>

    <tr>
      <td>
        loyaltyPromotionIdentifiers
      </td>

      <td>
        array
      </td>

      <td>
        Identifier(s) of loyalty promotion(s) that you want to tag to the transaction.
      </td>
    </tr>

    <tr>
      <td>
        lineitemsV2
      </td>

      <td>
        obj
      </td>

      <td>
        Details of line items.
      </td>
    </tr>

    <tr>
      <td>
        attribution
      </td>

      <td>
        obj
      </td>

      <td>
        Mapping to tag the transaction to a different user or till (other than the current user).
      </td>
    </tr>

    <tr>
      <td>
        redemptions
      </td>

      <td>
        obj
      </td>

      <td>
        Details of points and coupon redemptions for the transaction.
      </td>
    </tr>

    <tr>
      <td>
        paymentModes
      </td>

      <td>
        obj
      </td>

      <td>
        Payment details used for the transaction.
      </td>
    </tr>
  </tbody>
</Table>

#### lineitemsV2 Object

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
        Net line item amount.
        Value - discount = amount.
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
        One or two liner description of the line-item.
      </td>
    </tr>

    <tr>
      <td>
        discount
      </td>

      <td>
        int
      </td>

      <td>
        Discount received on the line item.
      </td>
    </tr>

    <tr>
      <td>
        itemCode
      </td>

      <td>
        string
      </td>

      <td>
        Unique code of the transaction line-item.
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
        Quantity of the current line item.
      </td>
    </tr>

    <tr>
      <td>
        rate
      </td>

      <td>
        double
      </td>

      <td>
        Price of each line item.
      </td>
    </tr>

    <tr>
      <td>
        serial
      </td>

      <td>
        string
      </td>

      <td>
        Serial number of the line-item.
      </td>
    </tr>

    <tr>
      <td>
        value
      </td>

      <td>
        double
      </td>

      <td>
        Gross amount of the item.
        Usually, rate\*qty = value.
      </td>
    </tr>

    <tr>
      <td>
        returnable
      </td>

      <td>
        boolean
      </td>

      <td>
        Pass `true` if the item can be returned post purchase.
      </td>
    </tr>

    <tr>
      <td>
        returnableDays
      </td>

      <td>
        int
      </td>

      <td>
        Maximum number of days the item is allowed to return.
      </td>
    </tr>

    <tr>
      <td>
        customFields
      </td>

      <td>
        obj
      </td>

      <td>
        Transaction or line-item level custom field details.
      </td>
    </tr>

    <tr>
      <td>
        imgUrl
      </td>

      <td>
        string
      </td>

      <td>
        URL of the product image.
      </td>
    </tr>

    <tr>
      <td>
        attributes
      </td>

      <td>
        obj
      </td>

      <td>
        Attributes of the product in name-value pairs.
      </td>
    </tr>

    <tr>
      <td>
        addOnDetails
      </td>

      <td>
        obj
      </td>

      <td>
        Details add-on item.
      </td>
    </tr>

    <tr>
      <td>
        splitDetails
      </td>

      <td>
        obj
      </td>

      <td>
        Details of split item.
      </td>
    </tr>

    <tr>
      <td>
        parentBillNumber
      </td>

      <td>
        string
      </td>

      <td>
        Return transaction number. Applicable only for mixed transaction (transaction that involves both purchase and return - exchange).
      </td>
    </tr>

    <tr>
      <td>
        purchaseTime
      </td>

      <td>
        date-time
      </td>

      <td>
        Actual date of transaction of the return item in ISO 8601 format - `YYYY-MM-DDTTHHSSZ`.
      </td>
    </tr>

    <tr>
      <td>
        returnType
      </td>

      <td>
        Enum
      </td>

      <td>
        Return type of the line item.
        Value - `AMOUNT`, `FULL`, `LINE_ITEM`.
      </td>
    </tr>

    <tr>
      <td>
        type
      </td>

      <td>
        Enum
      </td>

      <td>
        Type of the line item. Value: `REGULAR` (for regular line item purchase), `NOT_INTERESTED` (for line item purchase with no customer tagging), `RETURN` (to return a regular line item ), `NOT_INTERESTED_RETURN` (to return a line item of no-interested transaction).
      </td>
    </tr>

    <tr>
      <td>
        appliedPromotionIdentifiers
      </td>

      <td>
        array
      </td>

      <td>
        Cart or catalog promotions applied to the transaction.
      </td>
    </tr>

    <tr>
      <td>
        extendedFields
      </td>

      <td>
        obj
      </td>

      <td>
        Valid transaction line-item level extended field details.
      </td>
    </tr>

    <tr>
      <td>
        comboDetails
      </td>

      <td>
        obj
      </td>

      <td>
        Details combo, bundle, or split items.
      </td>
    </tr>
  </tbody>
</Table>

### comboDetails object

| Parameter   | Type   | Description                                                              |
| :---------- | :----- | :----------------------------------------------------------------------- |
| itemCode    | string | Unique line-item code.                                                   |
| quantity    | double | Quantity of the current combo item.                                      |
| description | string | One or two liner description of add-on, split, or combo item.            |
| rate        | double | Price of the combo item.                                                 |
| value       | double | Item price excluding discount.                                           |
| comboType   | string | Type of the combo. `COMBO_PARENT`, `COMBO_ITEM`, `ADD_ON_ITEM`, `SPLIT`. |

#### attribution Object

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
        createDate
      </td>

      <td>
        date-time
      </td>

      <td>
        Date of the transaction in ISO 8601 standard format.
      </td>
    </tr>

    <tr>
      <td>
        createdBy
      </td>

      <td>
        obj
      </td>

      <td>
        User ID or store entity (like TILL ID, store ID) associated with the transaction.
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
        Unique code of the entity.
      </td>
    </tr>

    <tr>
      <td>
          type
      </td>

      <td>
        Enum
      </td>

      <td>
        Type of the attribution entity.
        Value: `ZONE`, `CONCEPT`, `STORE`, `TILL`, `STR_SERVER`, `ADMIN_USER`, `ASSOCIATE`, `RULE`, `OU`.
      </td>
    </tr>
  </tbody>
</Table>

#### redemptions Object

| Parameter         | Type  | Description                                                                                               |
| :---------------- | :---- | :-------------------------------------------------------------------------------------------------------- |
| pointsRedemptions | array | Unique points redemption id(s) that you want to apply for the transaction. For example, \[727272, 237878] |
| couponRedemptions | array | Unique coupon redemption id(s) that you want to apply for the transaction. For example, \[727272, 237878] |

#### paymentModes Object

| Parameter  | Type   | Description                                                               |
| :--------- | :----- | :------------------------------------------------------------------------ |
| mode       | string | Mode of payment.                                                          |
| value      | double | Amount paid through the current mode.                                     |
| notes      | string | Additional information related to the payment mode. Max characters - 250. |
| attributes | obj    | Attributes of the payment mode as name-value pairs.                       |

> 📘 Important Notes for `Not Interested Return` Transaction
>
> *   `PurchaseTime` should be both in transaction level as well as line-item level
> *   `PurchaseTime` is the `billingDate` of the parent bill(In the return payload)
> *   `BillingDate` in the return payload will be a future date when the bill is being returned.
> *   `PurchaseTime` is always in the past compared to the `billingDate`
> *   `BillNumber` in the return payload should be the same as the parent bill

# Request body

```json
{
  "type": "REGULAR",
  "billNumber": "num-1234",
  "billingDate":"2021-11-10T23:08:49+05:30",
  "discount": "10",
  "billAmount": "200",
  "note": "This is a transaction",
  "grossAmount": "110",
  "deliveryStatus": "SHIPPED",
    "paymentModes": [
        {
          "mode": "Card Payment",
          "value": 5104,
          "notes": "Sample notes",
          "attributes": {
             "card_type": "Visa"
           }
        }
    ], 
  "extendedFields": {
    "ship_first_name": "Ram",
    "ship_last_name": "Singh",
    "checkin_date":"2010-06-04 21:08:12",
    "checkout_date":"2010-06-05 21:08:12"
  },
  "customFields": {
    "paymentmode": "cash"
  },
  "lineItemsV2": [
    {
      "itemCode": "sku_234_2",
      "amount": 100.5,
      "rate": 100.5,
      "qty": 1.0,
      "value":100.5,
      "extendedFields": {
        "MetalRate": "22.02",
        "GrossWeight": "10.50"
      }
    },
    {
      "itemCode": "sku_sdf_10",
      "amount": 100.5,
      "rate": 100.5,
      "qty": 1.0,
      "value":100.5,
      "extendedFields": {
        "MetalRate": "22.02",
        "GrossWeight": "10.50"
      }
    }
  ],
  "promotionEvaluationId":"60f5713c4c5cb92ab2da320e", 
  "loyaltyPromotionIdentifiers":[
    "ABC-12345",
    "Diwali_Promotion_2020",
    "New_Year_Promotion_2020"
  ],
  "appliedPromotionIdentifiers": ["eyJwcm9tb3Rpb25JZCI6IjYxMmU1YzVlNDEzM2I1NmFiZTBmMDczZSIsImRpc2NvdW50IjoiMTAwMC4wMDAwMDAiLCJhbW91bnQiOiIzMDAwLjAwMDAwMCIsImRpc2NvdW50QXBwbGllZFF0eSI6IjEiLCJwcm9tb3Rpb25BcHBsaWVkUXR5IjoiMy4wMDAwMDAiLCJyZWRlbXB0aW9uQ291bnQiOjEsInNrdSI6IkpOU1JFRzAyIiwidmVyc2lvbiI6InYxIn0=", "eyJwcm9tb3Rpb25JZCI6IjYxMmU1YzVlNDEzM2I1NmFiZTBmMDczZSIsImRpc2NvdW50IjoiMTAwMC4wMDAwMDAiLCJhbW91bnQiOiIzMDAwLjAwMDAwMCIsImRpc2NvdW50QXBwbGllZFF0eSI6IjEiLCJwcm9tb3Rpb25BcHBsaWVkUXR5IjoiMy4wMDAwMDAiLCJyZWRlbXB0aW9uQ291bnQiOjEsInNrdSI6IkpOU1JFRzAyIiwidmVyc2lvbiI6InYxIn1="
   ]
} 
```
```Text JSON
curl --location 'https://eu.api.capillarytech.com/v2/transactions' \
--header 'Content-Type: application/json' \
--header 'Authorization: Basic dGpfY2FwaWxsYXJ5OjVjMTc3MDJlOTI5NjQ4MjUzZTY3ZDJiMGM2ZTk5ZjE5' \
--header 'Cookie: _cfuvid=X4PRfLORRqKZSXB7MLTZg1y0xdBGOGW1RV_AcjWliKU-1732681336338-0.0.1.1-604800000; _cfuvid=c.5agx8tmOi_4rS6BQFx4PU8ZWeuDT8iIAjHm8y6_cg-1744095133839-0.0.1.1-604800000' \
--data '{
    "type": "NOT_INTERESTED_RETURN",
    "billNumber": "test00notinterested001",
    "id": "323301425",
    "returnType": "LINE_ITEM",
    "discount": "0",
    "billAmount": "6000",
    "billingDate": "2025-04-08T12:00:00Z",
    "purchaseTime": "2025-04-08T11:00:00Z",
    "note": "Returning the Transaction number not interested 001",
    "grossAmount": "6000",
    "deliveryStatus": "PLACED",
    "lineItemsV2": [
        {
            "itemCode": "model_id_001",
            "amount": 2000.0,
            "rate": 500.0,
            "qty": 4.0,
            "value": 2000.0
        }
    ]
}' 
```

# Response Parameters

| Parameter                       | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| :------------------------------ | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| createdId                       | Unique ID of the transaction.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| warnings                        | Object containing warnings, if any.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| errors                          | Object containing errors, if any.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| sideEffects                     | Object containing details of issued reward currencies (points and alternate currencies).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| -entityType                     | Type of entity. Possible values: `USER` (customer), `USERGROUP2` ([user group](https://docs.capillarytech.com/docs/group-loyalty))                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| -rawAwardedPoints               | Total number of points awarded, without any [rounding](https://docs.capillarytech.com/docs/points#points-round-off-settings) adjustments.                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| -awardedPoints                  | Total number of points awarded after rounding.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| -type                           | Type of reward currency awarded. Possible values `points` and `alternate_currency`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| -rawAwardedValue                | Total number of [alternate currencies](https://docs.capillarytech.com/docs/alternate-currencies) awarded, without any [rounding](https://docs.capillarytech.com/docs/points#points-round-off-settings) adjustments.                                                                                                                                                                                                                                                                                                                                                                 |
| -alternateCurrencyIdentifier    | Unique identifier of the alternate currency that is generated when creating an alternate currency.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| -alternateCurrencyName          | Unique name of the alternate currency issued.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| -awardedValue                   | Total number of alternate currencies awarded after rounding.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| rawSideEffects                  | Array containing raw details of various side effects, such as target loyalty and award details.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| -currentEventTargetValue        | Current value (progress) of the milestone/target the user is enrolled in.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| -definedTargetValue             | Total target value of the milestone/target the user is enrolled in.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| -periodEndDate                  | End date of the target in YYYY-MM-DD                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| -periodRefCode                  | Reference code/name provided for the target period.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| -periodStartDate                | Start date of the target in YYYY-MM-DD                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| -targetAchievedValueAfterEvent  | Target value of the milestone/target after the transaction.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| -targetAchievedValueBeforeEvent | Target value of the milestone/target before the transaction.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| -targetEvaluationType           | Evaluation strategy for the target group. This defines how the system calculates and tracks the achievement of targets over time. Possible values:- FIXED\_CALENDAR\_WINDOW - CYCLIC\_WINDOW - PERIOD\_AGNOSTIC\_WINDOW                                                                                                                                                                                                                                                                                                                                                            |
| -targetGroupId                  | Unique ID of the target group.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| -targetGroupName                | Unique name of the target group.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| -targetName                     | Unique name of the target.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| -targetRuleId                   | Unique ID for the target rule.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| -userId                         | Unique ID of the customer.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| -awardOn                        | Context or entity on which the points or rewards are awarded. Possible values:`BILL`: Points are awarded on the entire bill/transaction. `BILL_LINEITEM`: Points are awarded on a specific line item within the bill. `BILL_PROMOTION`: Points are awarded on the bill due to a specific promotion. `BILL_LINEITEM_PROMOTION`: Points are awarded on a specific line item due to a promotion. `CUSTOMER_PROMOTION`: Points are awarded to the customer due to a promotion, not directly tied to a bill or line item. `OTHER`: Used for cases that do not fit the above categories. |
| -awardStrategyId                | Unique identifier of the award strategy to be used, which defines how the issued reward currency is calculated.                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| -awardedOn                      | Date when the reward currency was awarded in `dd(ordinal) MMM, yyyy` format.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| -awardedOnMillis                | Date when the reward currency was awarded in Unix timestamp (milliseconds).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| -billNumber                     | Unique identifier of the bill.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| -customerId                     | Unique identifier of the customer.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| -evaluatedEntity                | Type of entity. Possible values: `USER` and `USERGROUP2`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| -expiryDate                     | Date when the reward currency expires in `dd(ordinal) MMM, yyyy` format.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| -expiryDateMillis               | Date when the reward currency expires in Unix timestamp (milliseconds).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| -expiryStrategyId               | Unique identifier of the expiry strategy to be used, which defines when the issued reward currency expires.                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| -initialQuantity                |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| -initialSourceValue             | Total transaction amount for the bill.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| -isDefaultProgram               | Indicates if it's part of the default loyalty program.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| -isReferrer                     | Indicates if the customer is a referrer.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| -lineItemId                     | Unique ID of the line-item.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| -pointTypeId                    |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| -pointTypeIsRedeemable          | Indicates if the point type is redeemable.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| -pointTypeName                  | Type of points issued for the transaction. Possible values: `Main, Promised`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| -points                         | Total points issued for the transaction.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| -pointsBeforeCapping            | Total points issued for the transaction before limits are applied.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| -programId                      | Unique ID of the loyalty program.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| -promoId                        | Unique ID of the loyalty promotion.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| -promoIdentifier                | External identifier for the loyalty promotion.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| -promoName                      | Unique name of the loyalty promotion that is part of the transaction.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| -quantity                       | Quantity of a specific item purchased.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| -ruleId                         | Unique identifier for the specific loyalty rule that was applied during the transaction's evaluation.                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| -ruleSetId                      | Unique identifier for the set of loyalty rules that was evaluated for the transaction.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| -sourceId                       | Unique identifier for the source of the awarded points. For example, if the source was a bill, this value will be the billId of the particular bill.                                                                                                                                                                                                                                                                                                                                                                                                                                |
| -sourceType                     | Source of the awarded points. Possible values: `Bill`, `Customer`, `PartnerProgram`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| -sourceValue                    | Total bill amount paid by the customer.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| -tenderCodeId                   | Payment method for the transaction.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| loyaltyDetails                  | Object containing details of the loyalty program.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| customerInfo                    | Object containing details of the customer.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| -firstName                      | First name of the customer.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| -lastName                       | Last name of the customer.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |

```json
{
    "createdId": 880613909,
    "warnings": [],
    "errors": [],
    "sideEffects": [
        {
            "entityType": "USER",
            "rawAwardedPoints": 1000,
            "awardedPoints": 1000,
            "type": "points"
        },
        {
            "entityType": "USER",
            "rawAwardedValue": 1000,
            "alternateCurrencyIdentifier": "9DxGBP",
            "alternateCurrencyName": "DocCoin",
            "awardedValue": 1000,
            "type": "alternate_currency"
        }
    ],
    "loyaltyDetails": [],
    "customerInfo": {
        "firstName": "John",
        "lastName": "Pork"
    }
}
```
```json With 'rawSideEffects&#x60;= true
{
    "createdId": 889244354,
    "warnings": [],
    "errors": [],
    "sideEffects": [],
    "rawSideEffects": [
        {
            "currentEventTargetValue": "1000.0",
            "definedTargetValue": "2000.000",
            "periodEndDate": "2025-07-28",
            "periodRefCode": "Cycle_6",
            "periodStartDate": "2025-07-27",
            "targetAchievedValueAfterEvent": "1000.000",
            "targetAchievedValueBeforeEvent": "0.000",
            "targetEvaluationType": "FIXED_CALENDAR_WINDOW",
            "targetGroupId": "2514",
            "targetGroupName": "Test Milestone UAT 23 July",
            "targetName": "Test Milestone UAT 23 July",
            "targetRuleId": "2711",
            "type": "TARGETLOYALTY",
            "userId": "566135941"
        },
        {
            "alternateCurrencyIdentifier": "null",
            "alternateCurrencyName": "null",
            "awardOn": "BILL",
            "awardStrategyId": "11926",
            "awardedOn": "28th Jul, 2025",
            "awardedOnMillis": "1753711200000",
            "billNumber": "txn-05",
            "customerId": "566135941",
            "evaluatedEntity": "USER",
            "expiryDate": "28th Jul, 2025",
            "expiryDateMillis": "1753711200000",
            "expiryStrategyId": "11932",
            "initialQuantity": "null",
            "initialSourceValue": "1000.0",
            "isDefaultProgram": "false",
            "isReferrer": "false",
            "lineItemId": "-1",
            "pointTypeId": "2183",
            "pointTypeIsRedeemable": "true",
            "pointTypeName": "Main",
            "points": "0.000",
            "pointsBeforeCapping": "0.000",
            "programId": "983",
            "promoId": "-1",
            "promoIdentifier": "",
            "promoName": "",
            "quantity": "null",
            "ruleId": "126539906",
            "ruleSetId": "126369894",
            "sourceId": "889244354",
            "sourceType": "Bill",
            "sourceValue": "1000.0",
            "tenderCodeId": "-1",
            "type": "AWARD"
        },
        {
            "alternateCurrencyIdentifier": "null",
            "alternateCurrencyName": "null",
            "awardOn": "BILL",
            "awardStrategyId": "11926",
            "awardedOn": "28th Jul, 2025",
            "awardedOnMillis": "1753711200000",
            "billNumber": "txn-05",
            "customerId": "566135941",
            "evaluatedEntity": "USER",
            "expiryDate": "28th Jul, 2025",
            "expiryDateMillis": "1753711200000",
            "expiryStrategyId": "11932",
            "initialQuantity": "null",
            "initialSourceValue": "1000.0",
            "isDefaultProgram": "false",
            "isReferrer": "false",
            "lineItemId": "-1",
            "pointTypeId": "2183",
            "pointTypeIsRedeemable": "true",
            "pointTypeName": "Main",
            "points": "0.000",
            "pointsBeforeCapping": "0.000",
            "programId": "983",
            "promoId": "-1",
            "promoIdentifier": "",
            "promoName": "",
            "quantity": "null",
            "ruleId": "126539906",
            "ruleSetId": "126369894",
            "sourceId": "889244354",
            "sourceType": "Bill",
            "sourceValue": "1000.0",
            "tenderCodeId": "-1",
            "type": "AWARD"
        },
        {
            "alternateCurrencyIdentifier": "null",
            "alternateCurrencyName": "null",
            "awardOn": "BILL",
            "awardStrategyId": "11879",
            "awardedOn": "28th Jul, 2025",
            "awardedOnMillis": "1753711200000",
            "billNumber": "txn-05",
            "customerId": "566135941",
            "evaluatedEntity": "USER",
            "expiryDate": "22nd Aug, 2025",
            "expiryDateMillis": "1755907199999",
            "expiryStrategyId": "11825",
            "initialQuantity": "null",
            "initialSourceValue": "1000.0",
            "isDefaultProgram": "true",
            "isReferrer": "false",
            "lineItemId": "-1",
            "pointTypeId": "2143",
            "pointTypeIsRedeemable": "true",
            "pointTypeName": "Main",
            "points": "2000.000",
            "pointsBeforeCapping": "2000.000",
            "programId": "973",
            "promoId": "-1",
            "promoIdentifier": "",
            "promoName": "",
            "quantity": "null",
            "ruleId": "126526786",
            "ruleSetId": "126358113",
            "sourceId": "889244354",
            "sourceType": "Bill",
            "sourceValue": "1000.0",
            "tenderCodeId": "-1",
            "type": "AWARD"
        },
        {
            "alternateCurrencyIdentifier": "9DxGBP",
            "alternateCurrencyName": "DocCoin",
            "awardOn": "BILL",
            "awardStrategyId": "11879",
            "awardedOn": "28th Jul, 2025",
            "awardedOnMillis": "1753711200000",
            "billNumber": "txn-05",
            "customerId": "566135941",
            "evaluatedEntity": "USER",
            "expiryDate": "22nd Aug, 2025",
            "expiryDateMillis": "1755907199999",
            "expiryStrategyId": "11825",
            "initialQuantity": "null",
            "initialSourceValue": "1000.0",
            "isDefaultProgram": "true",
            "isReferrer": "false",
            "lineItemId": "-1",
            "pointTypeId": "2164",
            "pointTypeIsRedeemable": "false",
            "pointTypeName": "DocCoin_REGULAR",
            "points": "2000.000",
            "pointsBeforeCapping": "2000.000",
            "programId": "973",
            "promoId": "-1",
            "promoIdentifier": "",
            "promoName": "",
            "quantity": "null",
            "ruleId": "126526786",
            "ruleSetId": "126358113",
            "sourceId": "889244354",
            "sourceType": "Bill",
            "sourceValue": "1000.0",
            "tenderCodeId": "-1",
            "type": "AWARD"
        }
    ],
    "loyaltyDetails": [],
    "customerInfo": {
        "firstName": "John",
        "lastName": "Pork"
    }
}
```

# Error codes

| Error code                                                                                   | Cause                            | Solution                                                                                                                                                                                                                                                                                                                                                                                 |
| :------------------------------------------------------------------------------------------- | :------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Time mismatch between billing time and response time                                         | Time conversion is not disabled. | Enable the CONF\_ORG\_DISABLE\_MACHINE\_TIME\_CONV configuration. When the configuration is enabled, the time from the payload, without the UTC offset, is stored in the database for all clusters. For more information, refer to the documentation [here](https://docs.capillarytech.com/reference/timezone-management#configuration-to-ignore-conversion-of-timezone-in-transaction). |
| 624: Invalid return transaction time, Return transaction should happen after add transaction | Incomplete body parameters       | Parameter `purchaseTime` should be passed in the body.                                                                                                                                                                                                                                                                                                                                   |
| 603: Invalid transaction id                                                                  | Transaction ID is incorrect      | Use the correct transaction ID.                                                                                                                                                                                                                                                                                                                                                          |

<HTMLBlock>{`
<style>
  .InputGroupe2EvBGz2cnqy {
   display: flex;
   gap: 2px;
   position: relative;
}

.Button.APIRequest-example-button1DGMsfaOTVNW {
   position: relative;
   width: 140px;
   white-space: nowrap;
   overflow: hidden;
   text-overflow: ellipsis;
   padding: 6px 12px;
   text-align: left;
   transition: width 0.2s ease-out;
   z-index: 1;
   display: block;
   direction: ltr;
   unicode-bidi: embed;
   padding-right: 20px;
   background: #1e2329;
   border: none;
   border-radius: 6px;
   color: #94a3b8;
   font-size: 13px;
}

.Button.APIRequest-example-button1DGMsfaOTVNW span,
.Button.APIRequest-example-button1DGMsfaOTVNW div {
   text-align: left;
   direction: ltr;
}

.Button.APIRequest-example-button1DGMsfaOTVNW:hover {
   width: auto;
   z-index: 10;
   background: #262b33;
}

.Button.APIRequest-example-button1DGMsfaOTVNW.APIRequest-example-button_activeXJeukHyaHZXB {
   z-index: 20;
   background: #2c333d;
   color: #ffffff;
}
</style>
`}</HTMLBlock>