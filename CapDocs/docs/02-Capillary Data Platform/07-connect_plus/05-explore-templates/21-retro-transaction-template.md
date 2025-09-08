---
title: Retro transaction template
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
The retro transaction template allows you to tag retro (old) not-interested transactions to customers and change it to regular transactions. This can occur for a variety of reasons, such as an error in the transaction process, a delay in the transaction being recorded, or a promotion being applied retroactively to a past purchase. For more information on retro transactions, refer to the documentation [here](https://docs.capillarytech.com/docs/tag-not-interested-transactions).

# Configuring retro transaction dataflow

To configure retro transaction dataflow, perform the below steps/actions:

1. In the **Connect-to-source section** <Glossary>Block</Glossary> enter the source server details where the source\
   data is present and the location for saving the processed file. For the information on configuring this block, refer to [Connect to source](https://docs.capillarytech.com/docs/configure-actions#connect-to-source) documentation
2. In the **Decrypt data** block, if the files are encrypted, enter the details to decrypt the data. For the information on configuring this block, refer to [Decrypt data](https://docs.capillarytech.com/docs/configure-actions#decrypt-data) documentation.
3. In the **Data-Validation-Block**, validate or transform data using a Databricks notebook. For more details, refer to [Data-Validation-Block](https://docs.capillarytech.com/docs/data-validation-block). The block is optional, so you can skip it without affecting the dataflow. If enabled, the rest of the dataflow continues as usual after the block executes.
4. In the **Transform Data** block, map the API fields with the source file. For information on how to map the fields, see [Transform data](https://docs.capillarytech.com/docs/configure-actions#transform-data).

   It is mandatory to map the `customerId`, `transactionId`, `oldType` and `newType` fields with the file. The value of the fields `newType` and `oldType` will be NOT\_INTERESTED and REGULAR respectively.

   ![d6d3237 image](https://files.readme.io/d6d3237-image.png)
5. In the **Connect-to-destination** block, enter the API endpoint details. For the information on configuring this block, refer to [Connect to destination](https://docs.capillarytech.com/docs/configure-actions#connect-to-destination) documentation.
6. In the **Trigger** block, enter the details to schedule the trigger. See [Trigger](https://docs.capillarytech.com/docs/configure-actions#schedule-trigger).

For troubleshooting information, refer to the [troubleshooting section](https://docs.capillarytech.com/docs/troubleshooting-guide-connectplus) of the documentation.
