---
title: Map fields for reconciliation
excerpt: >-
  In this section, you need to map the fields in the source data to the fields
  in the Capillary platform.
deprecated: false
hidden: true
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
1. To map the field names, in the **Transformation** text box, enter the Capillary data field name against the corresponding source data field name (**API field)**. For example, if the source data field name for the field that contains billing data information is **Billing data**, in the **Transformation** text box, enter the Capillary data field name where you have the same information.
   > 📘 Map multiple fields to identify the unique transaction.
   >
   > If a transaction contains multiple line items with the same bill number but with different codes, and if you map only the bill number,  when the system compares the source data with the data in the platform, it matches only the bill number and considers the transaction as already available in the platform. If you map the bill number and other fields such as store code, year, bill date, rate etc, the system matches properly and identifies the missing transaction accordingly.
   >
   > See the below image for an example of a transaction with the same bill number repeated multiple times but one among those appears against a different store code. In this case, if you map only the bill number, the system matches only the bill number and if a transaction with the respective bill number is available in the platform, it marks all transactions with that bill number as 1 (data already available in the system/not missing data).\
   > ![](https://files.readme.io/23b6590-small-Processed_file.png)
2. If you want to map the date fields, from the **Date format**  drop-down, select the desired date format.
3. In the **From year** field, enter the year from which you want to compare the data. By default, it will compare source data with the platform data from the previous year to the present date. If you enter a year, for example, 2016,  it will compare source data with platform data from 2016 up to the current year. This option is available to speed up the comparison process.
4. In the **Reconciliation Results Directory** field, enter the directory where you need to save the processed data. In the processed file. The data to ingest the missing data is captured from the processed file. If the URL is /APAC2Cluster/EUConnect, enter only the path APAC2Cluster/EUConnect in the **Reconciliation Results Directory** field.
