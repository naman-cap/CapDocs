---
title: Add transaction template
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
The transaction templates allow you to post the customer transaction data.

# Use case

Using this template, you can post customer transactions according to the filters of your choice.

# Configuring transaction templates

There are six transaction templates available to choose from based on your requirements.

| Template name                            | Description                                                                                            |
| :--------------------------------------- | :----------------------------------------------------------------------------------------------------- |
| InTouch transaction V2 add               | Enables you to sort, transform, and post your data using the OAuth client.                             |
| Transaction V2 add with payment mode     | Allows you to add a single transaction data file.                                                      |
| Transaction V2 add                       | Enables you to decrypt, sort, transform, filter, and post the transaction data using the OAuth client. |
| Transaction V2 add with filter           | \`Enables you to filter, sort, transform, and post the transaction data using the OAuth client.        |
| Transaction line item payment mode merge | Enables you to merge three files and post the transaction data using the OAuth client                  |
| Transaction customer v2 add              | Enables you to post transaction data with the option to post customer data using the OAuth client.     |

To configure an add transaction template, perform the below steps:

1. In the **Connect-to-source** <Glossary>Block</Glossary>, enter the source server details where the source data is present and the location for saving the processed file. See [Connect to source](https://docs.capillarytech.com/docs/configure-actions#connect-to-source).
2. In the **Decrypt-data** block, if the files are encrypted, enter the details to decrypt the data. See [Decrypt data](https://docs.capillarytech.com/docs/configure-actions#decrypt-data).
3. *(Applicable only for Transaction V2 add)* In the **Data-Validation-Block**, validate or transform data using a Databricks notebook.  For more details, refer to [Data-Validation-Block](https://docs.capillarytech.com/docs/data-validation-block). The block is optional, so you can skip it without affecting the dataflow. If enabled, the rest of the dataflow continues as usual after the block executes.
4. *(Applicable only for Transaction LineItem PaymentMode Merge and Transactions Customers V2 Add)* In the **Join-Data** block, enter the required details and define the conditions to merge the two files and join the data. See [Join Data](https://docs.capillarytech.com/docs/configure-actions#join-data).
5. In the **Transform-data**  section, enter the required details and define the conditions to transform the headers. See [Transform-data](https://docs.capillarytech.com/docs/configure-actions#transform-data).
6. In the **Encrypt-data** block, enter the encryption details to encrypt the file. See  [Encrypt Data](https://docs.capillarytech.com/docs/configure-actions#encrypt-data).
7. In the **Connect-to-destination** block, enter the SFTP server details. Enter [Connect to destination](https://docs.capillarytech.com/docs/configure-actions#connect-to-destination).
8. In the **Trigger** block, enter the details to schedule the trigger. See [Trigger](https://docs.capillarytech.com/docs/configure-actions#schedule-trigger).
