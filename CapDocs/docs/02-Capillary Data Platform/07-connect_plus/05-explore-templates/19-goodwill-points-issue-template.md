---
title: Goodwill points issue template
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
The goodwill points issue template allows you to issue goodwill points to the customer.

# Configuring goodwill points issue dataflow

To configure goodwill points issue dataflow, perform the below steps/actions:

1. In the **Connect-to-source section** <Glossary>Block</Glossary> enter the source server details where the source\
   data is present and the location for saving the processed file. See [Connect to source](https://docs.capillarytech.com/docs/configure-actions#connect-to-source).
2. In the **Decrypt data** block, if the files are encrypted, enter the details to decrypt the data. See [Decrypt data](https://docs.capillarytech.com/docs/configure-actions#decrypt-data).
3. In the **Data-Validation-Block**, validate or transform data using a Databricks notebook. For more details, refer to [Data-Validation-Block](https://docs.capillarytech.com/docs/data-validation-block). The block is optional, so you can skip it without affecting the dataflow. If enabled, the rest of the dataflow continues as usual after the block executes.
4. In the **Transform Data** block, map the API fields with the source file. For information on how to map the fields, see [Transform data](https://docs.capillarytech.com/docs/configure-actions#transform-data). 

   It is mandatory to map the fields marked in asterisks (\*) with the file. 

   <br />

   ![4b7c8ec image](https://files.readme.io/4b7c8ec-image.png)

   > 📘 Note
   >
   > The` referenceId` is for future use only. This ensures that in the future, if there is a need to replay the failures from the workflow, in cases where EMF is successful but Intouch end fails due to a timeout, points won't be mistakenly awarded twice to the same customer, as the reference ID is always unique.
5. In the **Connect-to-destination** block, enter the API endpoint details.\
   For this template the API `v2/request-workflow/GOODWILL-POINTS`, is used.  See [Connect to destination](https://docs.capillarytech.com/docs/configure-actions#connect-to-destination). 
6. In the **Trigger** block, enter the details to schedule the trigger. See [Trigger](https://docs.capillarytech.com/docs/configure-actions#schedule-trigger).

For troubleshooting information, refer to the [troubleshooting section](https://docs.capillarytech.com/docs/troubleshooting-guide-connectplus) of the documentation.
