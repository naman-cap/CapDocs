---
title: Fleet customers template
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
# Configuring fleet customers template

To configure fleet customers dataflow, perform the following steps/actions:

1. In the **Connect-to-source section** <Glossary>Block</Glossary> Enter the source server details where the source\
   data is present and the location for saving the processed file. See [Connect to source](https://docs.capillarytech.com/docs/configure-actions#connect-to-source).
2. In the **Decrypt data** block, if the files are encrypted, enter the details to decrypt the data. See [Decrypt data](https://docs.capillarytech.com/docs/configure-actions#decrypt-data).
3. In the **Data-Validation-Block**, validate or transform data using a Databricks notebook. For more details, refer to [Data-Validation-Block](https://docs.capillarytech.com/docs/data-validation-block). The block is optional, meaning you can skip it without affecting the dataflow. If you choose to enable it, the rest of the dataflow continues as usual after the execution of the block.
4. In the **Transform Data** block, map the API fields with the source file. For information on how to map the fields, see [Transform data](https://docs.capillarytech.com/docs/configure-actions#transform-data).
5. In the **Connect-to-destination** block, enter the API endpoint details.\
   For this template the API `/v2/bulk/addCustomers`, is used.  See [Connect to destination](https://docs.capillarytech.com/docs/configure-actions#connect-to-destination).
6. In the **Trigger** block, enter the details to schedule the trigger. See [Trigger](https://docs.capillarytech.com/docs/configure-actions#schedule-trigger).