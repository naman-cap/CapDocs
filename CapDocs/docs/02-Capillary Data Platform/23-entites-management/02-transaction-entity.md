---
title: Transaction entity
excerpt: ''
deprecated: false
hidden: true
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---

A transaction represents a purchase or return event.

Transactions are classified into three types.

![754a65c trxn](https://files.readme.io/754a65c-trxn.png)

* Regular transaction: Regular transactions are normal transactions made at the PoS. These transactions can be loyalty, non-loyalty, or not-interested transactions.
* Return transaction: Return transactions are transactions that are returned at the PoS. A return transaction is identified using an identifier reference and only loyalty and non-loyalty transactions can be returned through the [Transaction Return](https://docs.capillarytech.com/reference/add-transaction-single) API.
* Mixed transaction: Mixed transactions are transactions that involve both regular and return transactions.

# Supported objects and fields


The below image provides you with information about the supported objects and fields in the transaction entity.

![9e058a6 Transaction 1](https://files.readme.io/9e058a6-Transaction_1.png)

# Setup transaction configs


Billing configuration lets you configure rules or conditions related to billing types, bill data syncing, outlier bills, currency conversion, and more at the organization level.

To configure billing details, perform the following:

1. Navigate to the **Organization Settings** page, and click **Systems & Deployment**.

![6d41b2b image](https://files.readme.io/6d41b2b-image.png)

2. Expand the **!ntouch POS Configuration**.

![901c843 image](https://files.readme.io/901c843-image.png)

3. Click **Billing**.

![681974d image](https://files.readme.io/681974d-image.png)

4. Configure the required fields based on the description provided in the following table.

| OPTION                                                        | DESCRIPTION                                                                                                                                                                                                                                                                                                                                                                                                                     |
| ------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| CONF\_CLIENT\_AUTO\_BILLING\_ENABLED                          | Enable to capture bill details from the POS automatically. Else, you need to enter bill details manually                                                                                                                                                                                                                                                                                                                        |
| CONF\_CLIENT\_BACKGROUND\_NETWORK\_BILL\_SUBMIT               | - This feature is not in use/deprecated -                                                                                                                                                                                                                                                                                                                                                                                       |
| CONF\_CLIENT\_ONE\_STEP\_BILLING\_ENABLED                     | - This feature is not in use/deprecated -                                                                                                                                                                                                                                                                                                                                                                                       |
| CONF\_CLIENT\_BILL\_NO\_REGEX                                 | A regular expression for the bill number. A transaction submitted on the Transaction screen should match with the regex configured here.                                                                                                                                                                                                                                                                                        |
| CONF\_CLIENT\_IS\_BILL\_AMOUNT\_ZERO                          | Enable to accept transactions with 0 transaction amounts.                                                                                                                                                                                                                                                                                                                                                                       |
| CONF\_CLIENT\_DISABLE\_CANCEL\_BILL                           | - This feature is not in use/deprecated -                                                                                                                                                                                                                                                                                                                                                                                       |
| CONF\_ALLOW\_LOYALTY\_BILL\_SUBMITION\_WITH\_PARTIAL\_DETAILS | Other than the primary identifier, if any custom field is mandatory, you can submit a bill even with out the                                                                                                                                                                                                                                                                                                                    |
| CONF\_RETRO\_TRANSACTION\_ENABLE                              | Check to enable retro transaction - save not-interested transactions and tag to customers once registered.<br />		These bills are saved until the number of days set in CONF CLIENT RETRO MAX ALLOWED AGE DAYS                                                                                                                                                                                                                    |
| CONF\_RETRO\_TRANSACTION\_CASHIER                             | Enable to allow a cashier to convert a not-interested transaction to a regular (loyalty) transaction.                                                                                                                                                                                                                                                                                                                           |
| CONF\_RETRO\_TRANSACTION\_STORE\_ASSOCIATE                    | Enable to allow a store associate to convert a not-interested transaction to a regular (loyalty) transaction.                                                                                                                                                                                                                                                                                                                   |
| CONF\_CLIENT\_BILLING\_CUSTOMER\_REPORT\_ENABLED              | - This feature is not in use/deprecated -                                                                                                                                                                                                                                                                                                                                                                                       |
| CONF\_CLIENT\_AUTOSAVE\_BILL\_HOOK\_KEY                       | Hotkey for capturing bill details from bill picker. Example: Alt+Ctrl+z                                                                                                                                                                                                                                                                                                                                                         |
| CONF\_CLIENT\_BILL\_NOTES\_READONLY                           | Enable to not allow a cashier to enter bill notes. In this case, notes will be captured only through bill pick or integration.                                                                                                                                                                                                                                                                                                  |
| ENHANCE BILL CAPTURE                                          | Check this option not to save loyalty transactions with missing or invalid identifiers as not-interested transactions.<br />Note: If this is unchecked, the system does not capture loyalty transactions with invalid or missing identifiers.                                                                                                                                                                                     |
| CONF\_LOYALTY\_IS\_BILL\_NUMBER\_REQUIRED                     | Enable to make bill number mandatory to submit a transaction or capture bill details.                                                                                                                                                                                                                                                                                                                                           |
| CONF\_LOYALTY\_BILL\_NUMBER\_UNIQUE\_IN\_DAYS                 | Set the number of days for which the bill number has to be unique. For example, if you set 30, then a transaction number cannot be repeated for 30 days. Again, you can set uniqueness at the org level, store level, or Till level using the configs mentioned below.                                                                                                                                                          |
| CONF\_LOYALTY\_IS\_BILL\_NUMBER\_UNIQUE                       | Enable this option to set bill number unique across the organization. You also need to set the number of days in which you want the bill number unique.                                                                                                                                                                                                                                                                         |
| CONF\_LOYALTY\_BILL\_NUMBER\_UNIQUE\_ONLY\_STORE              | Enable this option to set bill number unique at the store level. You also need to set the number of days in which you want the bill number unique.                                                                                                                                                                                                                                                                              |
| CONF\_LOYALTY\_BILL\_NUMBER\_UNIQUE\_ONLY\_TILL               | Enable this option to set bill number unique at the Till level. You also need to set the number of days in which you want the bill number unique.                                                                                                                                                                                                                                                                               |
| IS\_RETURN\_BILL\_UNIQUE                                      | Enable to make return bill number unique for the org.                                                                                                                                                                                                                                                                                                                                                                           |
| CONF\_MARK\_ZERO\_BILL\_AS\_OUTLIER                           | Enable this option to mark transactions with bill amount 0 as outlier transactions.                                                                                                                                                                                                                                                                                                                                             |
| CONF\_LOYALTY\_MAX\_BILL\_AMOUNT                              | Set the minimum bill amount to be accepted across the organization. Any bill amount beyond the minimum and maximum limit set will not be accepted.                                                                                                                                                                                                                                                                              |
| CONF\_LOYALTY\_MIN\_BILL\_AMOUNT                              | Set the maximum bill amount to be accepted across the organization. Any bill amount beyond the minimum and maximum limit set will not be accepted.                                                                                                                                                                                                                                                                              |
| BILL\_NUMBER\_WISE\_IGNORE\_POINTS                            | Check this to stop allocating points for transaction number that start with a specific keyword you mention in IGNORE BILLS FOR BILL NUMBER STARTS WITH.                                                                                                                                                                                                                                                                         |
| IGNORE\_POINTS\_FOR\_BILL\_NUMBER\_STARTS\_WITH               | Enter the starting keyword of transaction numbers that need to ignored from issuing points.                                                                                                                                                                                                                                                                                                                                     |
| MARK\_BILLS\_OUTLIER\_STARTING\_WITH                          | Bills that start with the keyword you specify here will be considered as outlier bills.                                                                                                                                                                                                                                                                                                                                         |
| CONF\_OUTLIER\_ITEM\_SKU                                      | Enter SKUs (comma separated) that you want to consider as outlier.                                                                                                                                                                                                                                                                                                                                                              |
| CONF\_LOYALTY\_MAX\_BILL\_LINEITEM\_AMOUNT                    | Set the maximum line-item amount that is acceptable. Any line-item amount not in the range of the minimum and maximum value will be accepted by the Capillary system.                                                                                                                                                                                                                                                           |
| CONF\_LOYALTY\_MIN\_BILL\_LINEITEM\_AMOUNT                    | Set the minimum line-item amount that is acceptable. Any line-item amount not in the range of the minimum and maximum value will be accepted by the Capillary system.                                                                                                                                                                                                                                                           |
| MARK\_BILLS\_OUTLIER\_FROM\_STORE                             | These stores are used for testing purpose and the bills generated in these stores will be ignored.<br />			Select each store and click Add. The stores that you add will be considered as outlier stores.                                                                                                                                                                                                                         |
| CONF\_MIN\_BILLING\_DATE                                      | Set the minimum date acceptable for billing. Any bill date (especially, while import) less than the date that you set here will be ignored automatically.                                                                                                                                                                                                                                                                       |
| CONF\_LOYALTY\_IS\_RETURN\_BILL\_NUMBER\_REQUIRED             | Enable to make the transaction number mandatory for return bills.                                                                                                                                                                                                                                                                                                                                                               |
| CONF\_LOYALTY\_IS\_RETURN\_BILL\_MANUAL\_HANDLING\_ENABLED    | Check to enable manual deduction of points on return transactions.                                                                                                                                                                                                                                                                                                                                                              |
| CONF\_CLIENT\_ENTER\_LATER\_SHORTCUT                          | Set hotkey for enter-later transactions. Example: Ctrl+Alt+E.                                                                                                                                                                                                                                                                                                                                                                   |
| CONF\_CLIENT\_NOT\_INTR\_SHORTCUT                             | Set hotkey for not-interested transactions. Example: Ctrl+Alt+N.                                                                                                                                                                                                                                                                                                                                                                |
| CONF\_CLIENT\_CLIENT\_GROSS\_DISCOUNT\_ENABLED                | Enable to show the gross discount amount of a transaction in the invoice.                                                                                                                                                                                                                                                                                                                                                       |
| CONF\_LOYALTY\_TRANSACTION\_AMOUNT\_MARGIN                    |                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| CONF\_CLIENT\_RETRO\_DELAY\_SINCE\_REGISTRATION\_HOURS        |                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| CONF\_CLIENT\_RETRO\_MAX\_ALLOWED\_AGE\_DAYS                  | Maximum number of days allowed for a not-interested transaction to tag it to a loyalty customer once registered.<br />For example, if you set 7, once a customer is registered, you can tag bills that are made by the customer in the last 7 days.<br />There is no limit on the number of days.                                                                                                                                   |
| CONF\_CURRENCY\_CONVERSION\_ENABLE                            | Check this to enable currency conversion                                                                                                                                                                                                                                                                                                                                                                                        |
| BILL\_OUTLIER\_BASKET\_SIZE\_LIMIT                            | An outlier is an observation (or configuration) to identify abnormal behavior in bills.<br />This option lets you set the basket size limit for a bill. Any number beyond this will be considered as an outlier bill.<br />For example, if you set BILL\_OUTLIER\_BASKET\_SIZE\_LIMIT as 20, any bill with basket size more than 20 is considered as an outlier bill. Set -1 if the outlier is not applicable to your organization. |
| AMOUNT\_ROUNDING\_OFF\_TO\_DECIMAL\_PLACES                    | Enter the number of  digits to the right of the decimal point should be retained in the rounded number.                                                                                                                                                                                                                                                                                                                         |

# Get started


The transaction APIs allow you to perform the following:

* Support transactions with Product Variant and Product Bundle details.
* Add product variant to the database when a new variant product is passed with an existing base product.
* Add base product to the database when a new base product/variant product is passed. If a new base product is passed with varient details, only the base product is added and the varient is ignored.
* Add custom field and extended field details both at the transaction and line-item level. 

The parameters for transaction APIs are configuration-dependent. To view more details, refer to the [Transaction V2](https://docs.capillarytech.com/reference/add-transaction-single) and [Transaction V1.1](https://docs.capillarytech.com/reference/add-transaction) APIs.

# Setup transaction fields


## Create payment mode


A payment mode will have attributes and attribute values. Before configuring payment mode combinations, add the supported payment modes of the organization.

To create a payment mode, perform the following:

1. Expand the **Organization Setup** drop-down, and click **Payment Modes**.

![bc5f61f image](https://files.readme.io/bc5f61f-image.png)

2. Expand **Add tender** and choose the payment mode you want to add.

![44c7e89 image](https://files.readme.io/44c7e89-image.png)

3.