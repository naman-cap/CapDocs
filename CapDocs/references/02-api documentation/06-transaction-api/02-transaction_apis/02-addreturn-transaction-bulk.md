---
title: Add/Return Transaction(bulk)
excerpt: >-
  Lets you add or return one or more transactions to the Capillary system. It
  supports both loyalty and not-interested transactions.
api:
  file: v2.json
  operationId: addreturn-transaction-bulk
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
> 👍 Notes
>
> * To avoid any confusion related to timezone conversion, you can raise a ticket and enable the CONF\_ORG\_DISABLE\_MACHINE\_TIME\_CONV configuration. When the configuration is enabled, the time from the payload, without the UTC offset, is stored in the database for all clusters. For more information, refer to the documentation [here](https://docs.capillarytech.com/reference/timezone-management#configuration-to-ignore-conversion-of-timezone-in-transaction).
> * You cannot register a customer with this API. Hence, you need to pass only registered identifiers for regular transactions.
> * You can enable the configuration CONF\_ALLOW\_TRANSACTION\_RETURN\_AFTER\_GROUP\_TRANSITION  to allow returns for former group members . When this config is active and when a return transaction is performed for a user who has left the group, the points allocated to the group as part of the original transaction are also reverted. To enable, raise a ticket to the Product Support Team.
> * You can disable the configuration CONF\_POINTS\_RETURN\_ENABLED to prevent the reversal of earned points when a transaction is returned. When a user returns a transaction, the points earned for that transaction are not reversed. To reverse the points, you can use the [Manual Points Adjustment API](https://docs.capillarytech.com/reference/deduct-points-and-alternatecurrencies-from-user-using-userid#/).
> * CONFIG\_SKIP\_SECONDARY\_ID\_ON\_PRIMARY\_MISMATCH is enabled: If the primary identifier is different but any of the secondary identifiers exist, a new customer is registered with the primary identifier ignoring the secondary identifier. The config is available on the Registration Page of InTouch Profile > Organization Settings > Miscellaneous.
> * **To enable these configurations for your organisation, raise a JIRA ticket to the Capillary Product Support team.**

#### Rate Limit

| Region               | Default Limit (RPM) |
| :------------------- | :------------------ |
| Asia-2 (Singapore)   | 1200                |
| Asia-1 (N. Virginia) | 700                 |
| EMEA (Ireland)       | 300                 |

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
        identifierType\*
      </td>

      <td>
        Enum
      </td>

      <td>
        Pass any of the registered identifier name of the customer.
        Values: `mobile`, `email`, `externalId`, `wechat`, `martjackId`, or `fbId` (Facebook ID), `id`.
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
        Pass the respective identifier value.
        For example if identifierType is mobile, identifierValue is mobile number.
      </td>
    </tr>

    <tr>
      <td>
        source\*
      </td>

      <td>
        Enum
      </td>

      <td>
        Pass the source from which the transaction is made.
        Values: `INSTORE`(for InStore), `WECHAT` (WeChat), `MARTJACK`(AnywhereCommerce), `WEB_ENGAGE` (Web-engage integration), `ECOMMERCE` (ECOMMERCE), `JD` (JD), `TAOBAO` (Taobao), `TMALL` (TMall), `FACEBOOK` (Facebook), `WEBSITE` (other website), `OTHERS` (any other source).
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
        For sources with multiple accounts (such as MARTJACK, WECHAT), pass the respective account ID.
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
        notInterestedReason
      </td>

      <td>
        string
      </td>

      <td>
        Notes on why the customer is not interested to enroll into the loyalty (type=NOT\_INTERESTED).
        Max characters supported - 255.
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
        billNumber\*
      </td>

      <td>
        string
      </td>

      <td>
        Unique transaction number. For a return transaction, this is the original transaction number of the return item. In transaction add the uniqueness of the billNumber is either at till, store, or org, depends on the configuration.

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
        billAmount\*
      </td>

      <td>
        double
      </td>

      <td>
        Net Transaction amount.
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
        Date and time of the transaction in the ISO 8601\
        Format - `YYYY-MM-DDTHH:MM:SSZ`.
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
        Values: `NORMAL`, `INTERNAL`,  `FRAUD`, `OUTLIER`, `TEST`, `DELETED`, `FAILED`, `OTHER`.
        This overrides the outlier status of the configured outlier settings.
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
        You can update the status using `v2/transaction/update`.
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
        Unique ID of the user group to which the transaction needs to be associated with.\
        Any one among the parameters with userGroup2 is required to associate the transaction with a group.
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
        Unique user ID of the primary member of group to which the transaction needs to be associated with.
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
        Unique external ID of the user group to which the transaction needs to be associated with.
      </td>
    </tr>

    <tr>
      <td>
        userGroup2PrimaryUserIdentifierType
      </td>

      <td>
        Enum
      </td>

      <td>
        Identifier type used to identify group primary member.\
        Value: `mobile`, `email`, `externalId`, `wechat`, `martjackId`, or `fbId` (Facebook ID), `id`.
      </td>
    </tr>

    <tr>
      <td>
        userGroup2PrimaryUserIdentifierValue
      </td>

      <td>
        string
      </td>

      <td>
        Value of the specified group identifier type.
      </td>
    </tr>

    <tr>
      <td>
        userGroup2PrimaryUserSource
      </td>

      <td>
        Enum
      </td>

      <td>
        Source in which the identifier of the group primary member is registered.\
        Values: `INSTORE`(for InStore), `WECHAT` (WeChat), `MARTJACK`(AnywhereCommerce), `WEB_ENGAGE` (Web-engage integration), `ECOMMERCE` (ECOMMERCE), `JD` (JD), `TAOBAO` (Taobao), `TMALL` (TMall), `FACEBOOK` (Facebook), `WEBSITE` (other website), `OTHERS` (any other source).
      </td>
    </tr>

    <tr>
      <td>
        userGroup2PrimaryUserAccountId
      </td>

      <td>
        string
      </td>

      <td>
        Account ID for sources with multiple accounts such as WECHAT.
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
        purchaseTime\*
      </td>

      <td>
        date-time
      </td>

      <td>
        Billing time of regular transactions, for which a return is happening in ISO 8601 standard - `YYYY-MM-DDTHH:MM:SSZ`.
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
        Base 64 encoded string of Cart/catalog promotion identifiers that are applied to the transaction.\
        It will have the details mentioned here `{"promotionId":"612e5c5e4133b56abe0f073e","discount":"1000.000000","amount":"3000.000000","discountAppliedQty":"1","promotionAppliedQty":"3.000000","redemptionCount":1,"sku":"JNSREG02","version":"v1"}`
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
        lineItemsV2
      </td>

      <td>
        obj
      </td>

      <td>
        Details of line-items.
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
        Mapping to tag the transaction to a different user or till (other than the current user)
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

#### Attribution Object

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

#### lineItemsV2 object

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
        Net line item amount. value-discount=amount
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
        Quantity of the current line-item.
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
        Price of each line-item.
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
        Gross amount of the item. Usually, rate\*qty=value.
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
        Details of combo, bundle, or split items.
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
        Details of combo, bundle, or split items.
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
        Details of add-on items.
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
        Return transaction number/Actual transaction number of the return item. Applicable only for mixed transaction (involves both transaction and return).
      </td>
    </tr>

    <tr>
      <td>
        purchaseTime\*
      </td>

      <td>
        date-time
      </td>

      <td>
        Billing time of regular transactions, for which a return is happening in ISO 8601 standard - `YYYY-MM-DDTHH:MM:SSZ`
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
        Value: `AMOUNT`, `FULL`, `LINE_ITEM`. Not applicable if the transaction level returnType is `FULL` or `AMOUNT`.
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
        Type of the line item.
        Value: `REGULAR` (for regular line item purchase), `NOT_INTERESTED` (for line item purchase with no customer tagging), `RETURN` (to return a regular line item ), `NOT_INTERESTED_RETURN` (to return a line item of no-interested transaction).
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
        Based 64 encoded format Cart or catalog promotions applied to the transaction.
        It will have the details mentioned here `{"promotionId":"612e5c5e4133b56abe0f073e","discount":"1000.000000","amount":"3000.000000","discountAppliedQty":"1","promotionAppliedQty":"3.000000","redemptionCount":1,"sku":"JNSREG02","version":"v1"}`
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
  </tbody>
</Table>

#### Redemptions Object

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
        pointsRedemptions
      </td>

      <td>
        array
      </td>

      <td>
        Unique points redemption id(s) that you want to apply for the transaction.
        For example, \[727272, 237878]
      </td>
    </tr>

    <tr>
      <td>
        couponRedemptions
      </td>

      <td>
        array
      </td>

      <td>
        Unique coupon redemption id(s) that you want to apply for the transaction.
        For example, \[727272, 237878]
      </td>
    </tr>
  </tbody>
</Table>

#### paymentModes Object

| Parameter  | Type   | Description                                                               |
| :--------- | :----- | :------------------------------------------------------------------------ |
| mode       | string | Mode of payment.                                                          |
| value      | double | Amount paid through the current mode.                                     |
| notes      | string | Additional information related to the payment mode. Max characters - 250. |
| attributes | obj    | Attributes of the payment mode as name-value pairs.                       |

# Error codes

| Error code                                                                                   | Cause                            | Solution                                                                                                                                                                                                                                                                                                                                                                                 |
| :------------------------------------------------------------------------------------------- | :------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Time mismatch between billing time and response time                                         | Time conversion is not disabled. | Enable the CONF\_ORG\_DISABLE\_MACHINE\_TIME\_CONV configuration. When the configuration is enabled, the time from the payload, without the UTC offset, is stored in the database for all clusters. For more information, refer to the documentation [here](https://docs.capillarytech.com/reference/timezone-management#configuration-to-ignore-conversion-of-timezone-in-transaction). |
| 624: Invalid return transaction time, Return transaction should happen after add transaction | Incomplete body parameters       | Parameter purchaseTime should be passed in the body.                                                                                                                                                                                                                                                                                                                                     |

<Note title="Note">
Custom fields can only be used at the customer, bills, and redemption levels; only extended fields are supported at the line item level.
</Note>

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