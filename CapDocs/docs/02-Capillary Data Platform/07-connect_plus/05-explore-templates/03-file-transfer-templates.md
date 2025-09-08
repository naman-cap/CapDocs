---
title: File transfer templates
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
This template allows you to download files from SFTP, FTP server, perform operations on the files and push it to SFTP, FTP server or S3.

# Configuring file transfer templates

To configure the file transfer templates, perform the below steps/actions:

1. In the **Connect-to-source** <Glossary>Block</Glossary>, enter the source server details where the source\
   data is present and the location for saving the processed file. See [Connect to source](https://docs.capillarytech.com/docs/configure-actions#connect-to-source).
2. In the **Decrypt data** block, if the files are encrypted, enter the details to decrypt the data. See[ Decrypt data](https://docs.capillarytech.com/docs/configure-actions#decrypt-data).
3. *(Applicable only to`SFTP to SFTP Transfer` template)* In the **Data-Validation-Block**, validate or transform data using a Databricks notebook. For more details, refer to [Data-Validation-Block](https://docs.capillarytech.com/docs/data-validation-block). The block is optional, meaning you can skip it without affecting the dataflow. If you choose to enable it, the rest of the dataflow continues as usual after the execution of the block.
4. In the **Join-Data** block, enter the required details and define the conditions to merge the two files and join the data. See [Join Data](https://docs.capillarytech.com/docs/configure-actions#join-data).
5. Configure [**hash-csv-fields** ](https://docs.capillarytech.com/docs/configure-blocks-connectplus#hash-contents-in-a-csv)block if you want to mask the data present in the CSV file. 
6. In the **Rebuild-Headers** or **Define headers and transform data** sections, enter the required details and define the conditions to transform the headers. See [Rebuild headers / Define headers and transform data](https://docs.capillarytech.com/docs/configure-blocks-connectplus#rebuild-headers--define-headers-and-transform-data).\
   **NOTE:** The headers for rebuilding, defining, and transforming data are identical except for their names in the user interface.
7. In the **Encrypt-data** block, enter the encryption details to encrypt the file. See  [Encrypt Data.](https://docs.capillarytech.com/docs/configure-actions#encrypt-data)
8. In the **Connect-to-destination** block, enter the SFTP server details. See [Connect to destination](https://docs.capillarytech.com/docs/configure-actions#connect-to-destination).
9. In the **Trigger** block, enter the details to schedule the trigger. See [Trigger](https://docs.capillarytech.com/docs/configure-actions#schedule-trigger).
