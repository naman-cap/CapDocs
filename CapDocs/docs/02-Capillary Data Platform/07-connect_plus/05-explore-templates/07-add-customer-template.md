---
title: Add customer template
excerpt: This template enables you to add customers in bulk.
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
Using the Customer v2 add template on Connect+ you can add customers to the organization in bulk.

To configure the template, perform the following:

1. In the **Connect-to-source** <Glossary>Block</Glossary>, enter the source server details where the source\
   data is present and the location for saving the processed file. See [Connect to source](https://docs.capillarytech.com/docs/configure-actions#connect-to-source).
2. In the **Decrypt data** block, if the files are encrypted, enter the details to decrypt the data. See [Decrypt data](https://docs.capillarytech.com/docs/configure-actions#decrypt-data).
3. In the **Data-Validation-Block**, validate or transform data using a Databricks notebook. For more details, refer to [Data-Validation-Block](https://docs.capillarytech.com/docs/data-validation-block). The block is optional, meaning you can skip it without affecting the dataflow. If you choose to enable it, the rest of the dataflow continues as usual after the execution of the block.
4. In the **Transform Data** block, map the API fields with the source file. For information on how to map the fields, see [Transform data](https://docs.capillarytech.com/docs/configure-actions#transform-data).
   > 📘 Note
   >
   > * Select the **Customer Creation Date Format** checkbox to include the date of customer creation . You can select the date format of your choice from the **Customer Create Date Format** dropdown.
   > * You can add card details of a customer such as card status, card number and card series ID in the Identifers tab and custom name for the card can be assigned from the **extendedFields** tab.

![14300a0 customer creation](https://files.readme.io/14300a0-customer_creation.png)

4. In the **Connect-to-destination** block, enter the API endpoint details. See [Connect to destination](https://docs.capillarytech.com/docs/configure-actions#connect-to-destination).\
   For this template, the API used is /v2/bulk/addCustomers.
5. In the **Trigger section** block, enter the details to schedule the trigger. [See Trigger](https://docs.capillarytech.com/docs/configure-actions#transform-data).
