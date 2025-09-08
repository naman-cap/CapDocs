---
title: Transaction line item merge template
excerpt: >-
  This page provides you with information on transaction line item merge
  template.
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
This template enables comparison and merging of transaction data from both the line item file and the bill-level file, then adds the merged data to the platform.

During merging, the template also performs additional calculations, such as determining the bill amount using expressions, and includes the calculated values in the merged file.

## Use case

**Scenario:**

A retail company receives data in two separate Excel files. One file contains bill-level information, including total amounts, dates, and customer details. The other file contains line-level data, such as individual items, quantities, and prices. The retail company wants to create a consolidated dataset that combines bill-level and line-level data. They want to know which items were purchased in each bill and calculate the total cost of each item in every bill. 

**Solution:**

They can use Transaction line item merge template and choose the "Inner Join" option to include only the records that have matching BillNumbers in both data sources.

## Configuring transaction line item merge dataflow

To configure transaction line item merge dataflow, perform the below steps/actions:

1. In the **Connect-to-source** <Glossary>Block</Glossary>, enter the source server details where the source data is present and the location for saving the processed file. See [Connect to source](https://docs.capillarytech.com/docs/configure-actions#connect-to-source).
2. In the **Decrypt data** block, if the files are encrypted, enter the details to decrypt the data. See [Decrypt data](https://docs.capillarytech.com/docs/configure-actions#decrypt-data).
3. In the **Join-Data** block, enter the required details and define the conditions to merge the two files and join the data. See [Join Data](https://docs.capillarytech.com/docs/configure-actions#join-data).
4. In the **Data-Validation-Block**, validate or transform data using a Databricks notebook. For more details, refer to [Data-Validation-Block](https://docs.capillarytech.com/docs/data-validation-block). The block is optional, meaning you can skip it without affecting the dataflow. If you choose to enable it, the rest of the dataflow continues as usual after the execution of the block.
5. In the **Transform Data** block, map the API fields with the source file. For information on how to map the fields, see [Transform data](https://docs.capillarytech.com/docs/configure-actions#transform-data). 
6. In the **Connect-to-destination** block, Enter the API endpoint details. See [Connect to destination](https://docs.capillarytech.com/docs/configure-actions#connect-to-destination).\
   For this template, the API  [/v2/transactions/bulk](https://docs.capillarytech.com/reference/addreturn-transaction-bulk) is used.
7. In the **Trigger** block, enter the details to schedule the trigger. See [Trigger](https://docs.capillarytech.com/docs/trigger).

## FAQ

**Q:** Is it mandatory to enable **Merge based on common Name** checkbox?\
**A:** Yes, It is mandatory to **Merge based on common Name** checkbox to make sure the correct files are merged together.

**Q:** How to view the transaction details in Memebercare against the customer?\
**A:** You can view the customer details in Membercare by clicking on Transactions under the Events tab.

**Q:** Is it mandatory to enable the **Alphabetical sort** checkbox?\
**A:** Yes, it is highly recommended to enable the **Alphabetical sort** checkbox to ensure accurate sorting of the files in alphanumerical order.
