---
title: Pull Data from API
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
This template retrieves data from a [Neo API](https://docs.capillarytech.com/docs/neo-quick-start#/), converts it to CSV, and pushes it to SFTP, FTP, or S3.\
It also supports paginated APIs by making multiple calls to Neo until a specified termination condition is met. For example, a movie listing API provides a catalog of movies across multiple pages. You can configure the template to call the API multiple times until all movies are retrieved or until only movies from a specific genre or year are listed.

## Use case

#### Scenario:

A service-based company gathers customer reviews, ratings, and survey responses from various platforms. This feedback is crucial for understanding customer satisfaction and identifying areas for improvement. However, the data is stored in different systems, making it time-consuming to compile and analyse manually. A [Neo API](https://docs.capillarytech.com/docs/neo-quick-start#/) is created to get the customer data.

#### Solution:

The Pull Data from API template automates customer feedback collection by retrieving data from the Neo API. It converts the raw feedback data into a clear, standardized format and delivers it to the storage location.

## Configuring pull data from API

To configure the pull data from API template, follow these steps:

1. In the **Invoke-Neo-Iteratively** <Glossary>Block</Glossary>, enter the API URL, authorisation details, API method and iteration details. For more information, refer to the document on [Invoke Neo Iteratively](https://docs.capillarytech.com/docs/invoke-neo-iteratively#/).
2. In the **Json-to-Csv-Converter** block, choose how the API data is converted to CSV format. For more information, refer to the document on [Converting JSON to CSV](https://docs.capillarytech.com/docs/convert-json-to-csvavro-format#/).
3. In the **push-files-to-s3** block, enter the S3 details. For more information, refer to the document on [Push to S3](https://docs.capillarytech.com/docs/push-to-s3#/).
4. In the **Trigger** block, configure when the API is triggered. For more information, refer to the document on [Schedule trigger](https://docs.capillarytech.com/docs/schedule-trigger#/).
5. Select **Save and continue** to save the changes and create a new data flow.

The dataflow has been created successfully.