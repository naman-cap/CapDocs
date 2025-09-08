---
title: Setup Customer
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
# Customer Registration Configuration

This article covers all settings related to customer registration and profile update.

To configure customer registration, follow these steps.

1. On the InTouch home page, navigate to **Profile > Organization Settings > Miscellaneous > Registration Configuration**.
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
        CONF\_ALLOW\_REGISTRATION\_FROM\_ANY\_IDENTIFIERS
      </td>

      <td>
        Select this to allow the registration of customers using any of the identifiers.
      </td>
    </tr>

    <tr>
      <td>
        CONF\_USERS\_IS\_EMAIL\_REQUIRED
      </td>

      <td>
        Check this if email id is a mandatory parameter to register a customer.
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
        Check this to allow updating registered mobile numbers of customers.
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
        Check this to verify if the primary identifier is already registered in a different account.\
        An error message will be displayed that the secondary identifier match is found in a different account but not the primary identifier.
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
        Set the minimum date and time from which the registration is valid. Registration fails if the registration date and time is prior to the value set herein ( especially through API or Data Import).
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
        Choose the custom field for age from the drop-down.
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
        CONF\_GEN\_CARD\_NUMBER\_AS\_EXTERNAL\_ID\_ENABLED
      </td>

      <td>
        Check this to enable generating external IDs automatically from the Capillary end.
      </td>
    </tr>

    <tr>
      <td>
        SOURCE\_ACCOUNTS\_EXTERNALID\_ENABLED
      </td>

      <td>
        Check this to enable support for external ID capture.
      </td>
    </tr>

    <tr>
      <td>
        CONF\_CARD\_NUMBER\_GENERATION\_ENABLED
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
        Check this to enable primary identifier checks when registering or updating customers.
      </td>
    </tr>

    <tr>
      <td>
        CONF\_IDENTIFIERS\_SYNC\_ENABLED
      </td>

      <td>
        Check this to synchronize identifiers such as mobile numbers, email addresses, and external IDs between Instore profiles and V2 profiles (external profiles such as WebEngage)  within the system.  

        * \*-\*\*  When the identifier change request is made from Membercare, any changes to identifiers (mobile/email, externalId) will update both the Instore profile and the corresponding V2 profile identifiers.  
        * \*Note: \*\*The Customer Unique Identifier (CUID) will not change in V2 profiles if this identifier exists.  
        * \*- \*\* To make changes to the external profile CUID, the following steps are performed after the identifier change request on Membercare:  
        * \-Creation of a new payload with updated identifiers and pushing it to an S3 bucket.\
          \--Execution of` v2/integrations/customer/upsert API` with the source set to `WEB_ENGAGE `and the new payload.  The upsert API ensures that the changes are reflected in all instances of the profile, including updating the CUID and communication channels.  
          * \*Default value: \*\*False.
      </td>
    </tr>

    <tr>
      <td>
        \-CONF\_CLIENT\_DEFAULT\_COUNTRYCODE\_PASSED
      </td>

      <td>
        Check this to auto select country code to the mobile number entered on the registration screen. The validation sequence will be as follows.\
        validates initial letters of mobile numbers for base or supported currency codes.\
        inserts each country code and validates the number. First with base country code, followed by supported country codes.
      </td>
    </tr>
  </tbody>
</Table>

# External ID configuration

You can use the below configurations to enable the generation of a customised external ID for the customers. Once this configuration is enabled, the external ID in the customer add API payload will be replaced with the generated external ID.

> ❗️ Attention
>
> There is no UI to enable this configuration. You need to raise a JIRA ticket ([sample ticket](https://capillarytech.atlassian.net/browse/CAP-97635)) to the sustenance team to enable these configurations. Turn around time is five days.

<Table align={["left","left"]}>
  <thead>
    <tr>
      <th>
        Configuration & Description
      </th>

      <th>
        Value
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        CONF\_CARD\_NUMBER\_GENERATION\_ENABLED (Mandatory)
        Enables external ID number generation. 
      </td>

      <td>
        0 - Disable\
        1 - Enable
      </td>
    </tr>

    <tr>
      <td>
        SOURCE\_ACCOUNTS\_EXTERNALID\_ENABLED (Mandatory)\
        Enables external ID generation only for the defined source account in the Customer ADD API.
      </td>

      <td>
        "INSTORE:" -  Instore  

        "web\_engage:1234"["web_engage:1234"] -\
         Webengage where 1234 is the account id  

        "INSTORE:", "web\_engage:1234"["INSTORE:", "web_engage:1234"]  -  Both Instore and webengage where 1234 is account id.
      </td>
    </tr>

    <tr>
      <td>
        CONF\_CARD\_CHECKSUM\_DIGIT\_ALGO (Mandatory)\
        Defines the algorithm to generate the checksum. The checksum is added as the last digit of the external ID.
      </td>

      <td>
        LUHN\_ALGO, MOD7\_ALGO, AUTO\_INC
      </td>
    </tr>

    <tr>
      <td>
        CONF\_CARD\_NUMBER\_LENGTH (Mandatory)\
        Defines the external ID length. This is the total length of the external id including prefix, suffix, and checksum.\
        Note: Suffix is not applicable for MOD7 and LUHN\_ALGO (MOD10) algorithms.\
        Example: If card number length = 12, Prefix = 1234, Suffix = 3401, Offset = 3000, and algorithm = AUTO\_INC, then card number can be 123430003401.
      </td>

      <td>
        Integers ranging from 1-50. 
      </td>
    </tr>

    <tr>
      <td>
        CONF\_CARD\_NUMBER\_OFFSET (Optional)\
        Defines the offset value for the external ID. For example for a card number series with offset value 3000, can be 111200000030004, 111200000030015 etc.
      </td>

      <td>
        Any integer value
      </td>
    </tr>

    <tr>
      <td>
        CONF\_CARD\_NUMBER\_PREFIX  (Optional)\
        Defines the prefix for the external ID number.
      </td>

      <td>
        Any integer value but prefix + suffix + system-generated number should not be more than 50.
      </td>
    </tr>

    <tr>
      <td>
        CONF\_CARD\_NUMBER\_SUFFIX  (Optional)\
        Defines the SUFFIX for the external ID number. This is only applicable for AUTO\_INC alogrithm. 
      </td>

      <td>
        Any integer value but prefix + suffix + system-generated number should not be more than 50.
      </td>
    </tr>

    <tr>
      <td>
        CONF\_VALUES\_TO\_INCLUDE\_FOR\_CHECKSUM\_DIGIT  (Optional)\
        Specifies whether the prefix should be considered when generating the checksum value.
      </td>

      <td>
        PREFIX - Prefix is considered\
        NONE - Prefix is not considered
      </td>
    </tr>
  </tbody>
</Table>

# Customer ingestion restriction configuration

> ❗️ There is no UI to enable this configuration. You need to raise a JIRA ticket ([sample ticket](https://capillarytech.atlassian.net/browse/CAP-97635)) to the sustenance team to enable these configurations. Turn around time is five days.

`CONF_RESTRICT_ORPHAN_V2_PROFILE` - This configuration prevents the ingestion of a WebEngage profile into the Capillary platform for a specific customer if they do not already have an existing Instore profile.

# Managing customer lifecycle with customer status

A customer status defines the relationship between a brand and a customer. For example, a customer who interacts often with the brand can be defined as an active customer. Further, these statuses can be used to run the loyalty program and assign coupons, reward points etc accordingly. For example, more offers can be offered to a customer to make an inactive customer to active customer..

## Activating customer status

To activate customer status for your organisation, navigate to **Organisation settings> Miscellaneous> Customer Status configuration** and select the  **Enable customer status** check box.

On enabling the customer status, the existing fraud status will be replaced by the customer status function. 

## Types of customer statuses

The various customer statuses available in the Capillary platform that you can configure are:

1. Active
2. Suspended
3. Deleted
4. Fraud suspected
5. Fraud confirmed
6. Internal
7. Pending deletion

## Creating a custom label

You can click the **Create new label** option in the customer label and enter a new label name to assign a custom name for the status. You can add multiple labels if required. The first status label that you create is set as the default status value.

![e70b5ed H3fEa kClhg1C9buCL58znQ3t4tvnHcb2g](https://files.readme.io/e70b5ed-H3fEa_kClhg1C9buCL58znQ3t4tvnHcb2g.png)

## Active customer status

The active status can be used to indicate that the customer is active. 

<Note title="Note">
S:
* There are no restrictions for customers with Active status.
* All customers are marked Active by default.
</Note>

## Suspended, Fraud suspected, Fraud confirmed, and Internal customer status

You can restrict the following operations for the users with Suspended, Fraud suspected, Fraud confirmed or Internal status.

<Table align={["left","left"]}>
  <thead>
    <tr>
      <th>
        Restriction
      </th>

      <th>
        Description
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Block coupons redemption
      </td>

      <td>
        Restrict from redeeming coupons.
      </td>
    </tr>

    <tr>
      <td>
        Block issual of loyalty promotions
      </td>

      <td>
        Restrict from receiving points.
      </td>
    </tr>

    <tr>
      <td>
        Block identifier change and account merge
      </td>

      <td>
        Restrict from account merging and identifier change requests.
      </td>
    </tr>

    <tr>
      <td>
        Block issual of badges
      </td>

      <td>
        This is a future development feature.
      </td>
    </tr>

    <tr>
      <td>
        Block issual of coupons
      </td>

      <td>
        Restrict from providing coupons.
      </td>
    </tr>

    <tr>
      <td>
        Block enrollment into loyalty promotions
      </td>

      <td>
        This is a future development feature.
      </td>
    </tr>

    <tr>
      <td>
        Block points allocation
      </td>

      <td>
        Restrict from providing points.  

        When this restriction is added on any label, then the points allocation from any points-related action (like transaction point allocation, allocation points, target point allocation, issue to the referrer, issue to referee, goodwill points, import profile) will be blocked for the customer. 
      </td>
    </tr>

    <tr>
      <td>
        Block points redemption
      </td>

      <td>
        Restrict from redeeming points.
      </td>
    </tr>

    <tr>
      <td>
        Block tier upgrade
      </td>

      <td>
        Restrict from tier upgrade.
      </td>
    </tr>

    <tr>
      <td>
        Block transaction
      </td>

      <td>
        Restrict future transactions.
      </td>
    </tr>

    <tr>
      <td>
        Mark transaction outlier
      </td>

      <td>
        Mark the transactions made by the selected label(s) as outliers.
      </td>
    </tr>
  </tbody>
</Table>

![26017c9 2oLSMndjRj6idYt5qgadRWypjOT0H0uy4g](https://files.readme.io/26017c9-2oLSMndjRj6idYt5qgadRWypjOT0H0uy4g.png)

To restrict access, select the individual status labels or all the created status labels from the desired restriction drop-down. Click **Select**, and then click **Update**.

![ccef7e2 lb5ZVDRSQL JkADaNE0G9ONiVhqtT0GynQ](https://files.readme.io/ccef7e2-lb5ZVDRSQL_JkADaNE0G9ONiVhqtT0GynQ.png)

## Deleted customer status

The deleted status allows you to block every action for customers with this status. To configure restriction, from the **Block everything** drop-down, select the individual custom labels or select all labels created for Deleted. Click **Select** and then click **Update**.

![a198377 Delete customer status](https://files.readme.io/a198377-Delete_customer_status.png)

## Pending deletion customer status

This status is used to indicate the status of customers for whom a deletion request is raised. For **Pending Deletion**, whenever a PII deletion request is triggered, a label Deletion\_pending is automatically created and assigned to the customer, regardless of any other label that may have been created and set as default.
