---
title: CSV to XML conversion template
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
The CSV to XML conversion template allows you to convert CSV files to XML files. XML (Extensible Markup Language) is a language that uses user-defined tags to store data. Users can select any CSV file and map it to XML.

# Use case:

A data analyst receives data from various departments through CSV files, which include fields like product ID, product name, price, etc.

However, the system ingests data in a specific XML format. XML has a hierarchical structure and incorporates metadata which makes it easy for humans and machines to understand easily.

By using the CSV to XML conversion template, he can convert all the CSV files into XML to facilitate easy data analysis.

# Configuring CSV to XML conversion dataflow

To configure CSV to XML conversion template, perform the below steps/actions:

1. In the **Connect-to-source** <Glossary>Block</Glossary>, enter the source server details where the source\
   data is present and the location for saving the processed file. See [Connect to source](https://docs.capillarytech.com/docs/configure-actions#connect-to-source).
2. In the **Decrypt-data** block, if the files are encrypted, enter the details to decrypt the data. See [Decrypt data](https://docs.capillarytech.com/docs/configure-actions#decrypt-data).
3. In the **CSV-To-XML-Converter** block, enter the conversion details. See [CSV-To\_XML-Converter](https://docs.capillarytech.com/docs/configure-actions#csv-to-xml-converter).
4. In the **Encrypt-data** block, enter the encryption details to encrypt the file. See[ Encrypt Data](https://docs.capillarytech.com/docs/encrypt-data)
5. In the **Connect-to-destination** block, enter the SFTP server details. See [Connect to destination](https://docs.capillarytech.com/docs/configure-actions#connect-to-destination).
6. In the **Trigger-block**, enter the details to schedule the trigger. See [Trigger](https://docs.capillarytech.com/docs/configure-actions#schedule-trigger).
