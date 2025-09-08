---
title: Mask Data in Databricks
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
Data masking can be done at the organization level to prevent the exposure of sensitive data.

# PII Data Masking

Admin users can enable PII data masking in Databricks and hide the PII data (including custom field and extended field data) of customers during the export of data from Databricks. Once the ETL is done, the data gets masked.

Perform the following steps to enable PII data masking:

1. From the Rizer UI home page, navigate to **PII configs**.
2. For the brands you want to enable PII data masking, click **Configure**.\
   ![](https://files.readme.io/d30b549-a3b39d1-Configure_2.png)
3. Click **Enable**.

![5281118 Enable PII masking](https://files.readme.io/5281118-Enable_PII_masking.png)

After enabling, when you export data, the PII fields are masked. Same steps can be followd to mask the PSI data.

![91079d8 Masked PII data](https://files.readme.io/91079d8-Masked_PII_data.png)

4. To pause PII data masking, click **Pause** and to disable PII data masking, click **Disable**.

![c0c1f1a Disable](https://files.readme.io/c0c1f1a-Disable.png)

<br />

# PSI Data Masking

When [PSI data masking is enabled for a brand](https://docs.capillarytech.com/docs/classify-potentially-sensitive-information-psi), PSI fields including custom and extended fields, are masked in the Databricks. In the Analytics database (read\_api tables), they are displayed as a string of asterisks ("\*"). 

Create a Jira ticket for the product support team to pause or disable masking.

<Note title="Note">
To access unmasked PSI data, jobs must be run on admin\_read\_api tables, which are restricted to authorized Databricks users.
</Note>
