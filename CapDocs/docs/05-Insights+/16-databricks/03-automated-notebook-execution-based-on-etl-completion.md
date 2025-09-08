---
title: Running Databricks jobs automatically after ETL completion
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
To ensure that Databricks workflows always operate on the most up-to-date data, Databricks notebooks can be configured to run automatically upon the completion of an ETL (Extract, Transform, Load) process. A master job (implemented as a Databricks notebook) streamlines the management of all dependent jobs and is automatically triggered once the ETL process finishes. This ensures that all downstream tasks are executed seamlessly using the latest data.

## Steps to enable this feature

1. Submit a request to the product support team by raising a task ticket. The support team configures the required settings and a job following the naming convention **`ETL_SyncTrigger_<org_id>`**  is created.
2. Link jobs by adding tasks within the workflow in Databricks (detailed in the following section). Once linked, all jobs connected to the ETL*SyncTrigger*\<org\_id> job will execute automatically after the next ETL process is completed.

## Steps to link the notebook

1. Navigate to the **Databricks** home page.
2. Click **Workflows**. Once the support team has configured the settings, **`ETL_SyncTrigger_<org_id>`** notebook will appear in the workflows list. 
3. Click on the notebook name and open the notebook.

![25f4802ce5c8c9dcb5e326df5cdaf513ba0a158dc0b23a7de132609f2468f859 workflows and file](https://files.readme.io/25f4802ce5c8c9dcb5e326df5cdaf513ba0a158dc0b23a7de132609f2468f859-workflows_and_file.png)

3. Click **Tasks**. 

![4abd54c66ff1f3f4adc24e0f98aab302b4062746f235519fa17f7eb1b6f66e81 task and path](https://files.readme.io/4abd54c66ff1f3f4adc24e0f98aab302b4062746f235519fa17f7eb1b6f66e81-task_and_path.png)

4. Click **+ Add task** > select **Run Job**.

**Note**: Make sure to click **Run Job** and not **Notebook** from the **+ Add task** options.

![](https://files.readme.io/7feb90be7ccd4d00e41e56c3976eafd8a4b4fae4ccf3f85b30a8a8c5f4f9eb2b-run1.png)

All pre-configured jobs will be automatically populated.

![401c7d45bb445650e115a4b6ee27f87ca1854f1e928a899ce632ce4715730ac9 job list 1 2](https://files.readme.io/401c7d45bb445650e115a4b6ee27f87ca1854f1e928a899ce632ce4715730ac9-job_list_1_2.png)

5. Click **Save task**. The data will be synced upon completion of the next ETL.
