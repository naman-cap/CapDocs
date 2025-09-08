---
title: Data Capture Settings (InStore/APIs)
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
## Billing Configuration

Billing configuration lets you configure rules or conditions related to billing types, bill data syncing, outlier bills, currency conversion, and more at the organization level.

To configure billing details, navigate to InTouch Profile > Organization Settings >Systems & Deployment > !ntouch POS Configuration > Billing.

<Table align={["left","left"]}>
  <thead>
    <tr>
      <th>
        OPTION
      </th>

      <th>
        DESCRIPTION
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        CONF\_CLIENT\_AUTO\_BILLING\_ENABLED
      </td>

      <td>
        Enable to capture bill details from the POS automatically. Else, you need to enter bill details manually
      </td>
    </tr>

    <tr>
      <td>
        CONF\_CLIENT\_BACKGROUND\_NETWORK\_BILL\_SUBMIT
      </td>

      <td>
        * This feature is not in use/deprecated -
      </td>
    </tr>

    <tr>
      <td>
        CONF\_CLIENT\_ONE\_STEP\_BILLING\_ENABLED
      </td>

      <td>
        * This feature is not in use/deprecated -
      </td>
    </tr>

    <tr>
      <td>
        CONF\_CLIENT\_BILL\_NO\_REGEX
      </td>

      <td>
        A regular expression for the bill number. A transaction submitted on the Transaction screen should match with the regex configured here.
      </td>
    </tr>

    <tr>
      <td>
        CONF\_CLIENT\_IS\_BILL\_AMOUNT\_ZERO
      </td>

      <td>
        Enable to accept transactions with 0 transaction amounts.
      </td>
    </tr>

    <tr>
      <td>
        CONF\_CLIENT\_DISABLE\_CANCEL\_BILL
      </td>

      <td>
        * This feature is not in use/deprecated -
      </td>
    </tr>

    <tr>
      <td>
        CONF\_ALLOW\_LOYALTY\_BILL\_SUBMITION\_WITH\_PARTIAL\_DETAILS
      </td>

      <td>
        Other than the primary identifier, if any custom field is mandatory, you can submit a bill even without the
      </td>
    </tr>

    <tr>
      <td>
        CONF\_RETRO\_TRANSACTION\_ENABLE
      </td>

      <td>
        Check to enable retro transaction - save not-interested transactions and tag customers once registered.\
        These bills are saved up to the number of days set in CONF CLIENT RETRO MAX ALLOWED AGE DAYS
      </td>
    </tr>

    <tr>
      <td>
        CONF\_RETRO\_TRANSACTION\_CASHIER
      </td>

      <td>
        Enable to allow a cashier to convert a not-interested transaction to a regular (loyalty) transaction.
      </td>
    </tr>

    <tr>
      <td>
        CONF\_RETRO\_TRANSACTION\_STORE\_ASSOCIATE
      </td>

      <td>
        Enable to allow a store associate to convert a not-interested transaction to a regular (loyalty) transaction.
      </td>
    </tr>

    <tr>
      <td>
        CONF\_CLIENT\_BILLING\_CUSTOMER\_REPORT\_ENABLED
      </td>

      <td>
        * This feature is not in use/deprecated -
      </td>
    </tr>

    <tr>
      <td>
        CONF\_CLIENT\_AUTOSAVE\_BILL\_HOOK\_KEY
      </td>

      <td>
        Hotkey for capturing bill details from bill picker. Example: Alt+Ctrl+z
      </td>
    </tr>

    <tr>
      <td>
        CONF\_CLIENT\_BILL\_NOTES\_READONLY
      </td>

      <td>
        Enable to not allow a cashier to enter bill notes. In this case, notes will be captured only through bill pick or integration.
      </td>
    </tr>

    <tr>
      <td>
        ENHANCE BILL CAPTURE
      </td>

      <td>
        Check this option not to save loyalty transactions with missing or invalid identifiers as not-interested transactions.

        * \*Note\*\*: If this is unchecked, the system does not capture loyalty transactions with invalid or missing identifiers.
      </td>
    </tr>

    <tr>
      <td>
        CONF\_LOYALTY\_IS\_BILL\_NUMBER\_REQUIRED
      </td>

      <td>
        Enable to make bill number mandatory to submit a transaction or capture bill details.
      </td>
    </tr>

    <tr>
      <td>
        CONF\_LOYALTY\_BILL\_NUMBER\_UNIQUE\_IN\_DAYS
      </td>

      <td>
        Set the number of days for which the bill number has to be unique. For example, if you set 30, then a transaction number cannot be repeated for 30 days. Again, you can set uniqueness at the org level, store level, or Till level using the configs mentioned below.
      </td>
    </tr>

    <tr>
      <td>
        CONF\_LOYALTY\_IS\_BILL\_NUMBER\_UNIQUE
      </td>

      <td>
        Enable this option to set bill numbers unique across the organization. You also need to set the number of days in which you want the bill number unique.
      </td>
    </tr>

    <tr>
      <td>
        CONF\_LOYALTY\_BILL\_NUMBER\_UNIQUE\_ONLY\_STORE
      </td>

      <td>
        Enable this option to set bill numbers unique at the store level. You also need to set the number of days in which you want the bill number unique.
      </td>
    </tr>

    <tr>
      <td>
        CONF\_LOYALTY\_BILL\_NUMBER\_UNIQUE\_ONLY\_TILL
      </td>

      <td>
        Enable this option to set bill number unique at the Till level. You also need to set the number of days in which you want the bill number unique.
      </td>
    </tr>

    <tr>
      <td>
        IS\_RETURN\_BILL\_UNIQUE
      </td>

      <td>
        Enable to make return bill number unique for the org.
      </td>
    </tr>

    <tr>
      <td>
        CONF\_MARK\_ZERO\_BILL\_AS\_OUTLIER
      </td>

      <td>
        Enable this option to mark transactions with bill amount 0 as outlier transactions.
      </td>
    </tr>

    <tr>
      <td>
        CONF\_LOYALTY\_MAX\_BILL\_AMOUNT
      </td>

      <td>
        Set the minimum bill amount to be accepted across the organization. Any bill amount beyond the minimum and maximum limit set will not be accepted.
      </td>
    </tr>

    <tr>
      <td>
        CONF\_LOYALTY\_MIN\_BILL\_AMOUNT
      </td>

      <td>
        Set the maximum bill amount to be accepted across the organization. Any bill amount beyond the minimum and maximum limit set will not be accepted.
      </td>
    </tr>

    <tr>
      <td>
        BILL\_NUMBER\_WISE\_IGNORE\_POINTS
      </td>

      <td>
        Check this to stop allocating points for transaction numbers that start with a specific keyword you mention in IGNORE BILLS FOR BILL NUMBER STARTS WITH.
      </td>
    </tr>

    <tr>
      <td>
        IGNORE\_POINTS\_FOR\_BILL\_NUMBER\_STARTS\_WITH
      </td>

      <td>
        Enter the starting keyword of transaction numbers that need to be ignored from issuing points.
      </td>
    </tr>

    <tr>
      <td>
        MARK\_BILLS\_OUTLIER\_STARTING\_WITH
      </td>

      <td>
        Bills that start with the keyword you specify here will be considered outlier bills.
      </td>
    </tr>

    <tr>
      <td>
        CONF\_OUTLIER\_ITEM\_SKU
      </td>

      <td>
        Enter SKUs (comma separated) that you want to consider as outliers.
      </td>
    </tr>

    <tr>
      <td>
        CONF\_LOYALTY\_MAX\_BILL\_LINEITEM\_AMOUNT
      </td>

      <td>
        Set the maximum line-item amount that is acceptable. Any line-item amount not in the range of the minimum and maximum value will be accepted by the Capillary system.
      </td>
    </tr>

    <tr>
      <td>
        CONF\_LOYALTY\_MIN\_BILL\_LINEITEM\_AMOUNT
      </td>

      <td>
        Set the minimum line-item amount that is acceptable. Any line-item amount not in the range of the minimum and maximum value will be accepted by the Capillary system.
      </td>
    </tr>

    <tr>
      <td>
        MARK\_BILLS\_OUTLIER\_FROM\_STORE
      </td>

      <td>
        These stores are used for testing purposes and the bills generated in these stores will be ignored.\
        Select each store and click Add. The stores that you add will be considered outlier stores.
      </td>
    </tr>

    <tr>
      <td>
        CONF\_MIN\_BILLING\_DATE
      </td>

      <td>
        Set the minimum date acceptable for billing. Any bill date (especially, while import) less than the date that you set here will be ignored automatically.
      </td>
    </tr>

    <tr>
      <td>
        CONF\_LOYALTY\_IS\_RETURN\_BILL\_NUMBER\_REQUIRED
      </td>

      <td>
        Enable to make the transaction number mandatory for return bills.
      </td>
    </tr>

    <tr>
      <td>
        CONF\_LOYALTY\_IS\_RETURN\_BILL\_MANUAL\_HANDLING\_ENABLED
      </td>

      <td>
        Check to enable manual deduction of points on return transactions.
      </td>
    </tr>

    <tr>
      <td>
        CONF\_CLIENT\_ENTER\_LATER\_SHORTCUT
      </td>

      <td>
        Set hotkey for enter-later transactions. Example: Ctrl+Alt+E.
      </td>
    </tr>

    <tr>
      <td>
        CONF\_CLIENT\_NOT\_INTR\_SHORTCUT
      </td>

      <td>
        Set hotkey for not-interested transactions. Example: Ctrl+Alt+N.
      </td>
    </tr>

    <tr>
      <td>
        CONF\_CLIENT\_CLIENT\_GROSS\_DISCOUNT\_ENABLED
      </td>

      <td>
        Enable to show the gross discount amount of a transaction in the invoice.
      </td>
    </tr>

    <tr>
      <td>
        CONF\_LOYALTY\_TRANSACTION\_AMOUNT\_MARGIN
      </td>

      <td>

      </td>
    </tr>

    <tr>
      <td>
        CONF\_CLIENT\_RETRO\_DELAY\_SINCE\_REGISTRATION\_HOURS
      </td>

      <td>

      </td>
    </tr>

    <tr>
      <td>
        CONF\_CLIENT\_RETRO\_MAX\_ALLOWED\_AGE\_DAYS
      </td>

      <td>
        The maximum number of days allowed for a not-interested transaction to tag it to a loyalty customer once registered.\
        For example, if you set 7, once a customer is registered, you can tag bills that are made by the customer in the last 7 days.\
        There is no limit on the number of days.
      </td>
    </tr>

    <tr>
      <td>
        CONF\_CURRENCY\_CONVERSION\_ENABLE
      </td>

      <td>
        Check this to enable currency conversion
      </td>
    </tr>

    <tr>
      <td>
        BILL\_OUTLIER\_BASKET\_SIZE\_LIMIT
      </td>

      <td>
        An outlier is an observation (or configuration) to identify abnormal behavior in bills.\
        This option lets you set the basket size limit for a bill. Any number beyond this will be considered as an outlier bill.\
        For example, if you set BILL\_OUTLIER\_BASKET\_SIZE\_LIMIT as 20, any bill with basket size more than 20 is considered as an outlier bill. Set -1 if the outlier is not applicable to your organization.
      </td>
    </tr>
  </tbody>
</Table>

## Customer Registration Configuration

This article covers all settings related to customer registration and profile update.

To configure customer registration, follow these steps.

1. On the InTouch home page, navigate to **Profile** > **Organization Settings** > **Miscellaneous** > **Registration Configuration**.
2. Configure the required fields based on the description provided in the following table.

<Table align={["left","left"]}>
  <thead>
    <tr>
      <th>
        OPTION
      </th>

      <th>
        DESCRIPTION
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        CONF\_REGISTRATION\_PRIMARY\_KEY
      </td>

      <td>
        Choose the primary identifier of the customer. This is the unique identifier of the customer required for registration.
      </td>
    </tr>

    <tr>
      <td>
        CONF\_USERS\_IS\_EMAIL\_REQUIRED
      </td>

      <td>
        Check if email id is a mandatory parameter to register a customer.
      </td>
    </tr>

    <tr>
      <td>
        CONF\_USERS\_IS\_EMAIL\_UNIQUE
      </td>

      <td>
        Check this to make the email ID a unique identifier. If any registered email ID is registered the accounts will be merged automatically.
      </td>
    </tr>

    <tr>
      <td>
        CONF\_USERS\_USE\_EXTERNAL\_ID
      </td>

      <td>
        Check this to capture the external ID of customers while registering.
      </td>
    </tr>

    <tr>
      <td>
        CONF\_USERS\_IS\_EXTERNAL\_ID\_REQUIRED
      </td>

      <td>
        Check this to make the external ID mandatory to register a customer. Not applicable if the external ID is the primary identifier.
      </td>
    </tr>

    <tr>
      <td>
        CONF\_USERS\_IS\_MOBILE\_REQUIRED
      </td>

      <td>
        Check this to make the mobile number mandatory to register a customer. Not applicable if mobile is the primary identifier.
      </td>
    </tr>

    <tr>
      <td>
        CONF\_ALLOW\_MOBILE\_UPDATE
      </td>

      <td>
        Check this to allow updating the registered mobile numbers of customers.
      </td>
    </tr>

    <tr>
      <td>
        CONF\_ALLOW\_EMAIL\_UPDATE
      </td>

      <td>
        Check this to allow updating registered email IDs of customers.
      </td>
    </tr>

    <tr>
      <td>
        CONF\_LOYALTY\_ALLOW\_EXTERNAL\_ID\_UPDATE
      </td>

      <td>
        Check this to allow updating registered external IDs of customers.
      </td>
    </tr>

    <tr>
      <td>
        CONF\_PRIMARY\_IDENTIFIER\_STRICT\_CHECK
      </td>

      <td>
        Check this to verify if the primary identifier is already registered in a different account.

        * An error message will be displayed that the secondary identifier match is found in a different account but not the primary identifier. 
      </td>
    </tr>

    <tr>
      <td>
        CONF\_SKIP\_SECONDARY\_ID\_ON\_PRIMARY\_MISMATCH
      </td>

      <td>
        Check this to skip account merging if only secondary identifiers match but primary identifiers are different.\
        A new customer will be created with the provided primary identifier. The secondary identifier will be ignored automatically.
      </td>
    </tr>

    <tr>
      <td>
        USE\_CRM\_REGISTRATION\_INFO\_FROM\_BASE\_STORE
      </td>

      <td>
        NA
      </td>
    </tr>

    <tr>
      <td>
        CONF\_GIFT\_CARD\_ENABLED
      </td>

      <td>
        Check this to enable gift card
      </td>
    </tr>

    <tr>
      <td>
        CONF\_ORG\_CURRENCY\_CODE
      </td>

      <td>
        Set the ISO currency code of the org.
      </td>
    </tr>

    <tr>
      <td>
        CONF\_ORG\_CURRENCY\_SYMBOL
      </td>

      <td>
        Set the currency symbol of the org as per the currency code.
      </td>
    </tr>

    <tr>
      <td>
        CONF\_MIN\_REGISTRATION\_DATE
      </td>

      <td>
        Set the minimum date and time from which the registration is valid. Registration fails if the registration date and time are prior to the value set herein ( especially through API or Data Import).
      </td>
    </tr>

    <tr>
      <td>
        SERVER\_VALIDATION\_PIN\_SMS
      </td>

      <td>
        Configure the verification SMS that will be sent to customers to validate the registered mobile numbers. Use the tag \{\{pin}} to insert the verification PIN in the message.\
        For example, Please use the code \{\{pin}} to verify your mobile number.
      </td>
    </tr>

    <tr>
      <td>
        SERVER\_VALIDATION\_PIN\_EMAIL
      </td>

      <td>
        Configure the verification email that will be sent to customers to validate the registered email ID. Use the tag \{\{pin}} to insert the verification PIN in the message.\
        For example, Please use the code \{\{pin}} to verify your email ID.
      </td>
    </tr>

    <tr>
      <td>
        CONF\_LOYALTY\_REGISTER\_CUSTOMER\_GENDER
      </td>

      <td>
        Choose the custom field for gender from the drop-down.
      </td>
    </tr>

    <tr>
      <td>
        CONF\_LOYALTY\_REGISTER\_CUSTOMER\_AGE
      </td>

      <td>
        Choose the custom field forage from the drop-down.
      </td>
    </tr>

    <tr>
      <td>
        CONF\_CLIENT\_V2\_API\_ENABLED
      </td>

      <td>
        Check this if sources other than InStore are supported for the org.
      </td>
    </tr>

    <tr>
      <td>
        CONF\_CARD\_NUMBER\_SUFFIX
      </td>

      <td>
        Check this to enable generating card numbers automatically from the Capillary end.
      </td>
    </tr>

    <tr>
      <td>
        CONF\_CARD\_NUMBER\_SUFFIX
      </td>

      <td>
        Specify the suffix you want to have for the external card (supports alphanumeric value).
      </td>
    </tr>

    <tr>
      <td>
        CONF\_CARD\_NUMBER\_PREFIX
      </td>

      <td>
        Specify the prefix for the external card (supports alphanumeric value). For example, BRAND20.
      </td>
    </tr>

    <tr>
      <td>
        CONF\_CARD\_NUMBER\_LENGTH
      </td>

      <td>
        Specify the length of the external card. You can have up to 50 characters.
      </td>
    </tr>

    <tr>
      <td>
        CONF\_CARD\_NUMBER\_OFFSET
      </td>

      <td>
        Specify the card sequence numbers that you want to ignore from the top. For example, if you set 10, the first 10 cards will be considered invalid.
      </td>
    </tr>

    <tr>
      <td>

      </td>

      <td>

      </td>
    </tr>
  </tbody>
</Table>
