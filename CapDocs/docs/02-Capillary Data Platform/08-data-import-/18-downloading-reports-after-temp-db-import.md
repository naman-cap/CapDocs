---
title: Downloading reports (After temp DB import)
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
You can download reports generated for an import job once the data is synced with the local database. The reports include auto-corrections made, error statistics, skipped entries, and success details. To download a specific report, click the respective **Download Report** option. 

![981](https://files.readme.io/49cb87e-Reports.png "Reports.png")

* **Auto Corrected Data**: This report consists of the list of fields that are corrected by the system during data import
* **Error Details**: This report consists of the list of errors that are occurred during the import. Click on Import Framework Validation to know more on Error Details.
* **Imported File**: Consists of the original file that is uploaded\
  **\* New Users**: This report consists of the list of new customers that are registered during the import. This is mainly generated for transaction line item and transaction profile
* **Skipped Data**: This consists of the list of fields that are not imported to the database
* **Temp Table Dump**: This consists of the actual data that is imported into the temporary database
