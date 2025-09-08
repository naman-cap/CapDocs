---
title: Overview
excerpt: This page provides you an overview about Connect+.
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
Connect+ is Capillary's user-friendly, no-code integration tool. It empowers you to effortlessly bring data into the Capillary platform from an FTP location and export data from Insights to any FTP location. A set of predefined templates for a number of tasks such as customer registration, transaction management, transfer of files etc. are available and enables you to perform the tasks without the need for a development environment.

![92e75e8 Customer Data Transactional Data 2](https://files.readme.io/92e75e8-Customer_Data_Transactional_Data_2.gif)

# Benefits of using Connect+

* Create integrations without coding/developer support. You can use various functionalities and use them together to perform desired actions.
* Avoids infrastructure management.
* Enables monitoring, viewing reports and troubleshooting.
* Decrypt encrypted ingestion data and encrypt before sharing.
* Ingest CSV files without headers.
* Wide selection of templates that can help to address a wide range of use cases.

# Dataflow limits

* Default limit: 300 MB or 2 million records in a single file, whichever is lower.
* Maximum tested limit: 650 MB or 5 million records in a single file. The limit can be increased based on approval. For approval, contact the Capilarry support team.
* If there are multiple files to be merged, the above limit applies to one file and not the total limit on all files to be merged together.

# Usecases

## Data ingestion

You can use the Connect+ templates and create a dataflow that can:

* read transaction data from the input CSV file which is stored in the FTP server,
* transform the input file to API JSON format and
* add or update the data using the defined APIs as per the schedule.

Example: Customer add template, Transaction add template, Intouch user add template, data reconciliation template, test and control template etc.

## Data export or outflow

You can use Connect+ to export the data present in the org in the format required.

For example, you can use the appropriate templates and  create a dataflow that can:

* join multiple files and export to a merged file
* transfer files from one FTP location to another
* Connect+ does not replace Data Export but extends it by addressing the last-mile operations that cannot be achieved through Data Export.

## Bulk requests

Connect+ can be used to raise requests in bulk and update the data further based on the approval flow. For example, it can be used to create PII deletion requests in bulk.

## Data merging

You can use Connect+  to merge files and add them to the respective organisation. A wide range of Join templates are available to choose from.

## Data conversion

Connect+ supports data conversion from one format to the other. For example, you can use a CSV to XML file conversion template to convert the data in CSV file format to XML.

# Connect+ Data Import versus Data Import feature

| Connect+                                                                                                                                    | Data import                                                                                                               |
| :------------------------------------------------------------------------------------------------------------------------------------------ | :------------------------------------------------------------------------------------------------------------------------ |
| Connect+ is used for regularly scheduled or interval-based data ingestion.                                                                  | Data import is used for historical data ingestion and cleanup operations.                                                 |
| Connect+ uses Capillary v2 APIs to load data into the Capillary database thus triggering loyalty rules and Dynamic Vouchering System (DVS). | Data import does not trigger loyalty programs or the Dynamic Vouchering System (DVS) as CDP database is directly updated. |
| Connect+ supports functionalities such as header mapping, reordering, and other data transformation operations.                             | Data import does not allow for data manipulation or transformation during the transfer process.                           |
| Connect+ supports data reconciliation by comparing the source file with the output file to identify missing events.                         | Data import feature does not support data reconciliation.                                                                 |

# Terminologies in Connect+ - Understanding key concepts

## Workspace

A Workspace is an org-level or multi-org-level environment for managing data and enables mapping of one or more InTouch organizations to it. It helps ingest the data from different sources into the org-level tables in the Capillary database. The Workspace is created by Connect+ administrators.\
To select your workspace, click the dropdown next to Connect+, and select your org from the list.

![808c27b Workspace](https://files.readme.io/808c27b-Workspace.png)

## Dataflow

A dataflow in Connect+ is a defined sequence of steps or operations that you set up to collect data from a defined source, transform, or process data and transfer it to a defined location. It's essentially a workflow specifically designed for handling data. Dataflows in Connect+ can be used to automate tasks such as data ingestion, transformation, and integration between various systems and data sources.

> 📘 Each workspace can have one or more Dataflows.

**Example:** An **Add transaction** dataflow that can connect to a source, process data and add to the Capillary platform.

## Templates

Templates in Connect+ are pre-defined configurations or patterns that you can use as a starting point for creating dataflows or integration workflows within the Connect+ platform. These templates are designed to simplify the process of setting up common data integration tasks and processes. You can select a template that matches your use case and create a dataflow.

For example, if you frequently need to import data from a specific type of source system into your organization's database, Connect+ might offer a template for that type of integration, making it easier for you to configure the dataflow without having to build it entirely from scratch.

### Blocks in Connect+ templates

The blocks in Connect+ templates are the building blocks of dataflow, helping connect to a source such as FTP and a destination such as an API, transform or filter data, merge files, and so on.

These blocks are predefined steps or operations that are part of the template's workflow. They represent specific tasks or functions that need to be performed as part of the data integration or workflow process. The building blocks make up the template's logic and determine what the template does and how it behaves.

Here are some common examples of blocks that you might find in Connect+ templates:

1. **Connect to Source Block:** Used to specify the source of the data that needs to be ingested or transferred, such as connecting to a database, an FTP server, or a cloud storage service.

2. **Decrypt Block:** Utilized for decrypting source files, particularly if they are encrypted.

3. **Data Transformation Block:** Defines how the data should be transformed or manipulated before it's moved to the destination. This can include tasks like data mapping or converting data formats.

4. **Data Destination Block:** Specifies where the data should be sent or stored, such as a database, a cloud-based data warehouse, or an analytics platform.

5. **Encrypt Block:** Used for encrypting the output files.

6. **Trigger Frequency Block:** Contains actions that trigger the dataflow at defined intervals.

> 📘 The availability and specific actions within a Connect+ template depend on the template's purpose and use case.

## Expressions

Expressions in Connect+ are conditional expressions that can be used to make filter data or take decisions based on conditions or boolean expressions.

**Example:** `${header_value:equals('paid'):or(${header_value:equals('refunded')})} `where,

* `${header_value:equals('paid')}` checks if the value of a header named header\_value is equal to the string 'paid'. If this condition is met, it returns true.
* `:or` is a logical OR operator used to combine conditions. In this case, it checks whether the previous condition is true OR the following condition is true.
* `${header_value:equals('refunded')}` checks if the value of the header\_value header is equal to the string 'refunded'. If this condition is met, it returns true.

So, the entire expression checks if the header\_value header is equal to either 'paid' OR 'refunded'. You can use this to filter or process data accordingly.

For more information on expressions in Connect+, refer to [Know about expressions in Connect+](https://docs.capillarytech.com/docs/know-about-expressions-in-connect).