---
title: Setup Transactions
excerpt: ''
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---

## Transaction Configuration

Billing configuration lets you configure rules or conditions related to billing types, bill data syncing, outlier bills, currency conversion, and more at the organization level.

To configure billing details, navigate to InTouch Profile > **Organization Settings >Systems & Deployment > !ntouch POS Configuration > Billing**.

| OPTION | DESCRIPTION |
| ------ | ----------- |
| CONF_CLIENT_AUTO_BILLING_ENABLED | Enable to capture bill details from the POS automatically. Else, you need to enter bill details manually |
| CONF_CLIENT_BACKGROUND_NETWORK_BILL_SUBMIT | * This feature is not in use/deprecated - |
| CONF_CLIENT_ONE_STEP_BILLING_ENABLED | * This feature is not in use/deprecated - |
| CONF_CLIENT_BILL_NO_REGEX | A regular expression for the bill number. A transaction submitted on the Transaction screen should match with the regex configured here. |
| CONF_CLIENT_IS_BILL_AMOUNT_ZERO | Enable to accept transactions with 0 transaction amounts. |
| CONF_CLIENT_DISABLE_CANCEL_BILL | * This feature is not in use/deprecated - |
| CONF_ALLOW_LOYALTY_BILL_SUBMITION_WITH_PARTIAL_DETAILS | Other than the primary identifier, if any custom field is mandatory, you can submit a bill even with out the |
| CONF_RETRO_TRANSACTION_ENABLE | Check to enable retro transaction - save not-interested transactions and tag to customers once registered.<br/>These bills are saved until the number of days set in CONF CLIENT RETRO MAX ALLOWED AGE DAYS |
| CONF_RETRO_TRANSACTION_CASHIER | Enable to allow a cashier to convert a not-interested transaction to a regular (loyalty) transaction. |
| CONF_RETRO_TRANSACTION_STORE_ASSOCIATE | Enable to allow a store associate to convert a not-interested transaction to a regular (loyalty) transaction. |
| CONF_CLIENT_BILLING_CUSTOMER_REPORT_ENABLED | * This feature is not in use/deprecated - |
| CONF_CLIENT_AUTOSAVE_BILL_HOOK_KEY | Hotkey for capturing bill details from bill picker. Example: Alt+Ctrl+z |
| CONF_CLIENT_BILL_NOTES_READONLY | Enable to not allow a cashier to enter bill notes. In this case, notes will be captured only through bill pick or integration. |
| ENHANCE BILL CAPTURE | Check this option not to save loyalty transactions with missing or invalid identifiers as not-interested transactions.<br/>Note: If this is unchecked, the system does not capture loyalty transactions with invalid or missing identifiers. |
| CONF_LOYALTY_IS_BILL_NUMBER_REQUIRED | Enable to make bill number mandatory to submit a transaction or capture bill details. |
| CONF_LOYALTY_BILL_NUMBER_UNIQUE_IN_DAYS | Set the number of days for which the bill number has to be unique. For example, if you set 30, then a transaction number cannot be repeated for 30 days. Again, you can set uniqueness at the org level, store level, or Till level using the configs mentioned below. |
| CONF_LOYALTY_IS_BILL_NUMBER_UNIQUE | Enable this option to set bill number unique across the organization. You also need to set the number of days in which you want the bill number unique. |
| CONF_LOYALTY_BILL_NUMBER_UNIQUE_ONLY_STORE | Enable this option to set bill number unique at the store level. You also need to set the number of days in which you want the bill number unique. |
| CONF_LOYALTY_BILL_NUMBER_UNIQUE_ONLY_TILL | Enable this option to set bill number unique at the Till level. You also need to set the number of days in which you want the bill number unique. |
| IS_RETURN_BILL_UNIQUE | Enable to make return bill number unique for the org. |
| CONF_MARK_ZERO_BILL_AS_OUTLIER | Enable this option to mark transactions with bill amount 0 as outlier transactions. |
| CONF_LOYALTY_MAX_BILL_AMOUNT | Set the minimum bill amount to be accepted across the organization. Any bill amount beyond the minimum and maximum limit set will not be accepted. |
| CONF_LOYALTY_MIN_BILL_AMOUNT | Set the maximum bill amount to be accepted across the organization. Any bill amount beyond the minimum and maximum limit set will not be accepted. |
| BILL_NUMBER_WISE_IGNORE_POINTS | Check this to stop allocating points for transaction number that start with a specific keyword you mention in IGNORE BILLS FOR BILL NUMBER STARTS WITH. |
| IGNORE_POINTS_FOR_BILL_NUMBER_STARTS_WITH | Enter the starting keyword of transaction numbers that need to ignored from issuing points. |
| MARK_BILLS_OUTLIER_STARTING_WITH | Bills that start with the keyword you specify here will be considered as outlier bills. |
| CONF_OUTLIER_ITEM_SKU | Enter SKUs (comma separated) that you want to consider as outlier. |
| CONF_LOYALTY_MAX_BILL_LINEITEM_AMOUNT | Set the maximum line-item amount that is acceptable. Any line-item amount not in the range of the minimum and maximum value will be accepted by the Capillary system. |
| CONF_LOYALTY_MIN_BILL_LINEITEM_AMOUNT | Set the minimum line-item amount that is acceptable. Any line-item amount not in the range of the minimum and maximum value will be accepted by the Capillary system. |
| MARK_BILLS_OUTLIER_FROM_STORE | These stores are used for testing purpose and the bills generated in these stores will be ignored.<br/>Select each store and click Add. The stores that you add will be considered as outlier stores. |
| CONF_MIN_BILLING_DATE | Set the minimum date acceptable for billing. Any bill date (especially, while import) less than the date that you set here will be ignored automatically. |
| CONF_LOYALTY_IS_RETURN_BILL_NUMBER_REQUIRED | Enable to make the transaction number mandatory for return bills. |
| CONF_LOYALTY_IS_RETURN_BILL_MANUAL_HANDLING_ENABLED | Check to enable manual deduction of points on return transactions. |
| CONF_CLIENT_ENTER_LATER_SHORTCUT | Set hotkey for enter-later transactions. Example: Ctrl+Alt+E. |
| CONF_CLIENT_NOT_INTR_SHORTCUT | Set hotkey for not-interested transactions. Example: Ctrl+Alt+N. |
| CONF_CLIENT_CLIENT_GROSS_DISCOUNT_ENABLED | Enable to show the gross discount amount of a transaction in the invoice. |
| CONF_LOYALTY_TRANSACTION_AMOUNT_MARGIN |  |
| CONF_CLIENT_RETRO_DELAY_SINCE_REGISTRATION_HOURS |  |
| CONF_CLIENT_RETRO_MAX_ALLOWED_AGE_DAYS | Maximum number of days allowed for a not-interested transaction to tag it to a loyalty customer once registered.<br/>For example, if you set 7, once a customer is registered, you can tag bills that are made by the customer in the last 7 days.<br/>There is no limit on the number of days. |
| CONF_CURRENCY_CONVERSION_ENABLE | Check this to enable currency conversion |
| BILL_OUTLIER_BASKET_SIZE_LIMIT | An outlier is an observation (or configuration) to identify abnormal behavior in bills.<br/>This option lets you set the basket size limit for a bill. Any number beyond this will be considered as an outlier bill.<br/>For example, if you set BILL_OUTLIER_BASKET_SIZE_LIMIT as 20, any bill with basket size more than 20 is considered as an outlier bill. Set -1 if the outlier is not applicable to your organization. |
| AMOUNT_ROUNDING_OFF_TO_DECIMAL_PLACES | This configuration specifies the number of decimal places to retain for transaction values. For example, if you set it to 2 decimal places and a transaction value is 100.567, the system will store the value as 100.56. This setting also applies to line-item transactions.<br/><br/>**Note:** If the `Decimal Places for Base Currency`in the [billing configuration](https://docs.capillarytech.com/docs/org-management#org-currency-tab) is defined, the system always prioritizes this setting. In the above example, if `Decimal Places for Base Currency` is set to 1, the system will store the value as 100.6. |

## Add payment modes

A payment mode will have attributes and attribute values. Before configuring payment mode combinations, you need to add the supported payment modes of the organization as explained in the following.

1. Log on to InTouch and go to **Settings** > **Organization Setup** > **Payment Modes**.

![Payment modes](https://files.readme.io/7f9ac8a-Payment_modes.png)

2. Click **Add Tender** and choose the payment mode that you want to add.

![Add Tender](https://files.readme.io/44d3ebc-Add_Tender.png)

3. In **Label**, enter your preferred name for the payment mode.

![Add Tender Label](https://files.readme.io/570cf6d-Add_Tender1.png)

4. Click the **Save** icon to add the payment mode to your organization. Then, you need to add attributes to the payment mode.

![Save Payment Mode](https://files.readme.io/f28f1c9-Add_Tender2.png)

5. Click the **Edit** icon to add attributes.

![Edit Payment Mode](https://files.readme.io/432882d-Add_Tender3.png)

6. Click **Add Attribute** to add an attribute to the current payment mode and select the required attribute from the drop-down. 

<Note title="Note">
Note

Attributes are not supported for all payment modes. The Attribute field will appear only for payment modes that support it. For details on which payment modes support attributes, refer to the documentation [here](https://docs.capillarytech.com/docs/set-transactions#attributes-supported-for-payment-modes).
</Note>

![Add Attribute](https://files.readme.io/0ff3023-Add_Tender4.png)

7. Enter your preferred name for the attribute (to appear on the UI) and click Save. 

![Attribute Name](https://files.readme.io/69d22b7-Add_Tender5.png)

Similarly, you can also add attribute values if applicable for the attribute.

8. Click the **Edit** icon of an attribute to add the attribute value.

![Edit Attribute](https://files.readme.io/7f28a05-w5bdusx7JKNWYD-nkTU-fuatqCoQq1iFwQ.jpg)

9. In the **Supported attribute values** drop-down, select the supported input type - Text, Selection, Numeric, Float. Refer to the table below for more details.

![Attribute Values](https://files.readme.io/eb955d6-hvUu2Q8dfcSIR26HCjl2K4RITTuIxXLzvw.jpg)

The options differ based on the chosen attribute type.

Similarly, you add all the supported payment modes with attributes and values.

The following screenshot shows a payment mode, Card, with two attributes added to it.

![Payment Mode Example](https://files.readme.io/e024b26-Add_Tender6.png)

<Note title="Note">


* To remove a payment mode or attribute, click the respective **Delete** option.
  * Always ensure to **Save** changes whenever you add or modify a payment mode/attribute.
</Note>

<br/>

## Attributes supported for payment modes

| **Tender Name**       | **Attributes Supported** | **Attribute Names**                                                                                                        |
| --------------------- | ------------------------ | -------------------------------------------------------------------------------------------------------------------------- |
| **Card**              | Yes                      | card_type, number, bank_name, name_on_card, expiry_date, CardIssuerCode, CardEntryMethodCode, AuthorizationMethodCode |
| **Cash**              | Yes                      | currency                                                                                                                   |
| **Check**             | Yes                      | number, bank_name, branch_name                                                                                           |
| **Wallet**            | Yes                      | wallet_Type                                                                                                               |
| **Points**            | No                       | N/A                                                                                                                        |
| **Credit**            | No                       | N/A                                                                                                                        |
| **Bank Credit**       | Yes                      | BankName                                                                                                                   |
| **Gift Card**         | Yes                      | brand, number                                                                                                              |
| **Discount Coupon**   | Yes                      | coupon_code, CouponTypeCode                                                                                               |
| **Prepaid**           | No                       | N/A                                                                                                                        |
| **Exchange Lineitem** | Yes                      | item_code                                                                                                                 |
| **Food Coupon**       | Yes                      | coupon_code, CouponTypeCode                                                                                               |
| **Credit Note**       | No                       | N/A                                                                                                                        |
| **Cash Card**         | Yes                      | card_number                                                                                                               |
| **Cash On Delivery**  | No                       | N/A                                                                                                                        |
| **Netbanking**        | Yes                      | bank_name                                                                                                                 |
| **Emi**               | Yes                      | installment_months, installment_start_date, EMI_type, bank_name, card_issuer_code                                   |
| **Upi**               | Yes                      | upi_id, service_provider                                                                                                 |