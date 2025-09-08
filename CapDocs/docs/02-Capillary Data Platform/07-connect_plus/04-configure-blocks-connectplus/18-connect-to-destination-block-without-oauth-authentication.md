---
title: Connect to Destination without OAuth or S3 Pull Block
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
The Connect to Destination without OAuth or S3 Pull block is used to fetch or pull files stored in an Amazon S3 bucket. It acts as a source block, meaning it pulls data that can then be used for further processing, transformations, or validations within a dataflow. This block connects to the S3 bucket using AWS Access Key and Secret Key credentials.

# Use Case

**Requirement**

A company stores customer transaction data in an S3 bucket after every purchase made on its e-commerce platform. The data is stored in .csv format and must be pulled into the Capillary platform for further processing and allocation of loyalty points.  

**Solution**

Create a template with the **Connect to Destination without OAuth** block to fetch the file from the specified S3 bucket. Once the files are pulled from S3, you can use the Transform Data block or Neo Transformer for parsing, validating, and mapping fields before pushing to Capillary's APIs. to process the data and allocate loyalty points.

# Configuring the Connect to Destination without OAuth Block

## Pre-Requisite

The following are the prerequisites for the **Connect to Destination without OAuth** block:

* AWS Access Key and Secret Key with read permissions for the S3 bucket.\
   For Access Key and Secret, create a ticket with the Capillary Access team.
* Bucket Name and the Region where your files are stored.

![e170a0ea08570bf26b3055c921ebfef22c85ded675ca7bbe499c2109e3e7dc76 Dataflow and API Integration Guide 1](https://files.readme.io/e170a0ea08570bf26b3055c921ebfef22c85ded675ca7bbe499c2109e3e7dc76-Dataflow_and_API_Integration_Guide_1.gif)

| Field Name         | Description                                                                                       |
| :----------------- | :------------------------------------------------------------------------------------------------ |
| Bucket Name        | Name of the S3 bucket from which data needs to be pulled.                                         |
| Region             | AWS region where the S3 bucket is hosted. **Example**:  `us-east-1`, `us-west-1`, `eu-west-1`     |
| Access Key         | AWS Access Key ID used to authenticate with the S3 bucket.                                        |
| Secret Key         | AWS Secret Access Key used for authentication.                                                    |
| Input Path         | Path inside the bucket where the source files are located.                                        |
| Output Path        | Path where the files are saved after pulling.                                                     |
| Filename Pattern   | File type that needs to be pulled from the S3 bucket. Currently, `.csv` file format is supported. |
| API Error Filepath | Path where the error file is stored.                                                              |
| File Delimiter     | Delimiter used in the pulled files. The supported delimiters are `comma `(,) , `pipe `(\|)        |

For details on adding column headers, refer to [Defining column header](https://docs.capillarytech.com/docs/connect-to-source#defining-column-header-for-transform-block).
