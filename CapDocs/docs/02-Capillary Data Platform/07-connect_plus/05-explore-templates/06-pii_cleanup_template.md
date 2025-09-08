---
title: PII cleanup template
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
This template enables you to delete Personal Identifiable Information (PII) data of customers  in bulk.

Perform the following steps:

1. In the **Connect to Source** <Glossary>Block</Glossary>, enter the source server details. See [Connect to source](https://docs.capillarytech.com/docs/configure-actions#connect-to-source).
2. In the **Decrypt data** block, if the files are encrypted, enter the details to decrypt the data. See [Decrypt data](https://docs.capillarytech.com/docs/configure-actions#decrypt-data).
3. In the **Data-Validation-Block**, validate or transform data using a Databricks notebook. For more details, refer to [Data-Validation-Block](https://docs.capillarytech.com/docs/data-validation-block). The block is optional, meaning you can skip it without affecting the dataflow. If you choose to enable it, the rest of the dataflow continues as usual after the execution of the block.
4. In the **Transform data** block, enter the [transformation details](https://docs.capillarytech.com/docs/configure-actions#transform-data) and map the API fields. 

   | API Field       | Transformation                                                                                                             | Example                      |
   | :-------------- | :------------------------------------------------------------------------------------------------------------------------- | :--------------------------- |
   | source          | Customer registration source                                                                                               | Wechat, web\_engage etc      |
   | identifierType  | Customer identifier type                                                                                                   | Mobile, e-mail etc           |
   | identifierValue | Customer identifier value for the defined identifier type                                                                  | mobile number, e-mail id etc |
   | type            | Type of request. In this case, the value should be CUSTOMER.                                                               | Customer                     |
   | baseType        | Subtype of the request. In this case, the value should be DELETE.                                                          | Delete                       |
   | accountId       | Account id of the sources with multiple accounts. This is required only if there are multiple accounts of the same source. | 123344                       |
   | comments        | Additional comments if any                                                                                                 | Any comment                  |
5. In the **Connect to destination** block, enter the PII deletion API endpoint details (`https://<host>/v2/requests`). See [Connect to destination](https://docs.capillarytech.com/docs/configure-actions#connect-to-destination).\
   For information on PII deletion API endpoint, see [PII deletion API documentation](https://docs.capillarytech.com/reference/pii-deletion). 
6. Set the trigger frequency. See [Trigger frequency](https://docs.capillarytech.com/docs/configure-actions#schedule-trigger).

> 📘
>
> If the brand has multiple source profiles, for every source profile you need not run this flow multiple times. During the first run itself, the dataflow deletes both profile's PII data.
