---
title: Databricks job trigger template
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
The data bricks job trigger template allows you to trigger a data bricks notebook job that is already created. This template can be used to validate a set of records and further process the records that meet the validation requirements. The validation rules are defined in the Databricks notebook. 

# Use case

A brand wants to ensure the accuracy and integrity of the data before processing them further. They decide to implement batch feed validations using Databricks. 

The brand's data engineering team develops validation rules using Databricks. These rules include checks for data completeness, consistency, and accuracy. For example, they may check if each order contains valid customer information, product details, and payment information.

Further, the brand can use the Connect+ template to trigger the Databricks notebook at regular intervals. 

# Configuring databricks job trigger template

To configure the Databricks job trigger dataflow, perform the below steps/actions:

1. In the **Connect-to-source section** <Glossary>Block</Glossary> enter the source server details where the source\
   data is present and the location for saving the processed file. See [Connect to source](https://docs.capillarytech.com/docs/configure-actions#connect-to-source).
2. In the **Databricks-Job-trigger-and-status** block, enter the following information: 

   ![9e1b25b image](https://files.readme.io/9e1b25b-image.png)

   1. **Job ID**: Enter the job ID of the Databricks job that needs to be triggered. 

      ![2383cbb Job ID](https://files.readme.io/2383cbb-Job_ID.png)
   2. **Max retries**:  This parameter defines the maximum number of attempts a file undergoes processing before it is marked as failed. By default, the maximum retries value is set to 10. When a Databricks job is triggered, and while it is running, subsequent job triggers must wait until the ongoing job is completed. The system periodically checks the status of the job every minute until either the job completes successfully or reaches the maximum retry count. If the job is still running after one minute, the system enters a retry loop, repeatedly checking the job status until it either completes or reaches the maximum retry count. If the maximum retry count is exceeded without successful completion, the file in the queue is considered unprocessed.
   3. **dataBricks Processed Files Path**:  This parameter specifies the destination file path where Databricks stores the files after executing the job. Regardless of whether the job succeeds or fails, the resulting files are stored at this location. Databricks uses the credentials entered in the "Connect to source" section to add the files to this location. 
   4. **dataBricksToken**:  This parameter specifies the Databricks token used to secure authentication for the Databricks API instead of using passwords.\
      In Databricks, user permissions and roles determine who can create personal access tokens. The workspace administrator sets these permissions and can create custom roles and groups with specific permissions. If you belong to a role or group with the right permissions, you can create access tokens by navigating to User Settings > Developer > Access Tokens in Databricks.

      <br />

      ![d5ea981 databricks](https://files.readme.io/d5ea981-databricks.png)
   5. **dataBricksUrl**- This parameter specifies the Databricks URL. If the URL is null, it retrieves the default value configured under Properties in the Processor Details of Databricks.\
      **Syntax**: https\://$\{DATABRICKS\_HOST}/api/$\{DATABRICKS\_API\_VERSION}/jobs\
      **Example**: [https://capillary-scrum.cloud.databricks.com/api/2.1/jobs](https://capillary-scrum.cloud.databricks.com/api/2.1/jobs), where:

      * DATABRICKS\_HOST -  [https://capillary-scrum.cloud.databricks.com](https://capillary-scrum.cloud.databricks.com)
      * DATABRICKS\_API\_VERSION - 2.1
3. In the **Trigger** block, enter the details to schedule the trigger. Refer to [Trigger](https://docs.capillarytech.com/docs/configure-actions#schedule-trigger) for more information.

For troubleshooting information, refer to [troubleshooting section](https://docs.capillarytech.com/docs/troubleshooting-guide-connectplus).
