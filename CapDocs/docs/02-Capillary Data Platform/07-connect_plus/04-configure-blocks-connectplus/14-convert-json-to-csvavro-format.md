---
title: Convert JSON to CSV/Avro Format
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
The **Json-to-Csv-Converter** block enables conversion from CSV or Avro formats to JSON and from JSON to CSV.

![70153f2ba3ed3318ae042b71276f3f130ffbfd60cb1286e83a8e4a73fe7ec423 image](https://files.readme.io/70153f2ba3ed3318ae042b71276f3f130ffbfd60cb1286e83a8e4a73fe7ec423-image.png)

To configure the **Json-to-Csv-Converter** block, follow these steps:

      i. Select the file format to convert from in the **Record Reader** drop-down.

 The available formats are:

| Reader         | Description                                               |
| :------------- | :-------------------------------------------------------- |
| CSVReader      | Input data is in CSV format.                              |
| AvroReader     | Input data is in [Avro](https://avro.apache.org/) format. |
| JSONTreeReader | Input data is in JSON format                              |

      ii. Select the file format to convert to in the **Record Writer** drop-down.

The available formats are:

| Writer                    | Description                                                                               |
| :------------------------ | :---------------------------------------------------------------------------------------- |
| CSVRecordSetWriter        | Export data to CSV format.                                                                |
| JsonRecordSetWriter       | Export data to JSON.                                                                      |
| CustomerV2RecordSetWriter | Export data to [Customer V2](https://docs.capillarytech.com/reference/customer-1) format. |

 iii. Enter the parameter to group by under the **groupBy** field. For example, if the API has a parameter called `orgId`, enter the value in the text field to group the responses by the organisation ID.
