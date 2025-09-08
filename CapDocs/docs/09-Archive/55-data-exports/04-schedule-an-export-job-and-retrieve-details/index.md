---
title: Schedule an Export Job
excerpt: ''
deprecated: false
hidden: true
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
An export job can be either: 

* Recurring: This job runs on a regular schedule (e.g., daily). It only exports new or updated data since the last export. For example, if the job is set to run daily for a month, each day it exports only the data from the previous day.
* One-Time: This job runs only once and exports the data available at that specific time.

# Prerequisites

* Insights access
* [FTP server configuration](https://docs.capillarytech.com/docs/configure-ftp-server-for-data-export)
* Make sure the FTP server is correctly set up to handle data exports. This setup is crucial for the successful transfer of data.

<Note title="Note">
* The system does not assure a fixed finish time for the jobs. The export framework picks up a job according to the order of scheduled time. 
* Please note that you cannot:
  * Edit the template after creation.
  * Modify KPIs, dimensions, filters, and customer list once scheduled.
  * Export measures (such as bill id, bill number, bill amount, auto update time) and custom fields in custom templates. You can export only KPIs and its dimensions.
* Current day's data will not be included in the exported data as the data will be synced to the capillary server only during non-business hours.
</Note>

# Configuring an Export Schedule

Perform the following steps to configure an export schedule:

1. Create an Export Job (Step 1 of 3). (HYPERLINKS)
2. Select Data Templates (Step 2 of 3) that you want to export. (HYPERLINKS)
3. Modify Template & Create Schedule (Step 3 of 3) to add or remove fields, apply filters and dimensions to export specific data that you need. (HYPERLINKS)
4. Click **Create** to schedule.

> 📘 Important
>
> * When you use a **Dimension Template**, the entire dataset is exported regardless of any duration filters applied. Therefore, avoid using Dimension Templates (such as Users) for recurring schedules unless you intend to apply the Audience Group filter.
> * You cannot apply standard filters such as outlier status, fraud status, merge status, and admin till.

Once scheduled, recipients receive emails at the scheduled frequency. These emails include job details and the destination link for the exported data.

![2cb62623ddea5c9eabdf742703ca1ee0a5e865ebb1adfc7ae4e4a14ff3f0ba55 image](https://files.readme.io/2cb62623ddea5c9eabdf742703ca1ee0a5e865ebb1adfc7ae4e4a14ff3f0ba55-image.png)

<Note title="Note">
As the export job writes files to the designated FTP location, it is advisable to periodically verify that the FTP username and password are correctly configured.

To access files from the FTP location, ensure that the user has read access to the FTP location.
</Note>

# Navigating Export Jobs

After creating an export job, you can view its status on the **Export Schedules** page. Additional search options are available to refine your search.

* **Name search**: Use the search box to find a specific export job, by its name.
* **Filter list by frequency**: Filter jobs by frequency: Once, Daily, Weekly, or Monthly. By default, all frequencies are displayed.
* **Filter list by status**: Filter jobs by status: All, Active, or Completed. By default, all jobs are displayed.

The **More** options icon is used to either **Duplicate** a job, **Delete** a job, or **View** the execution log of a job..

![3cd91dbf908d3270bb699694c1169a10d19869d4ee7987e6d7a364715b1bd6ed Export schedule 1](https://files.readme.io/3cd91dbf908d3270bb699694c1169a10d19869d4ee7987e6d7a364715b1bd6ed-Export_schedule_1.png)

A job has one of the following statuses: Yet to Execute, Success, or In Progress.

| **Icon**        | **Description**                                                                                                                                                                                                   |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Clock icon**  | Indicates that the job is created but has not yet executed.                                                                                                                                                       |
| **Yellow icon** | Indicates that an execution is currently in progress. A recurring scheduled job can have multiple executions, while a one-time job will have only one.                                                            |
| **Green icon**  | Indicates the job is successfully executed. For recurring jobs, the icon turns green upon successful completion of the current execution. It will change back to yellow when the next scheduled execution begins. |
| **Red icon**    | Indicates the job is unable to execute.                                                                                                                                                                           |

<Note title="Note">
* A recurring scheduled job can have multiple executions, while a one-time scheduled job will have only one execution.
* When a job is in progress, you cannot stop or rerun the job.
* For each successful export job, an email is sent to all selected recipients containing destination links to the exported files (FTP or S3). To download files from an FTP server, click the link in the email, log in, and download the zip file.
</Note>

To view details of a specific job, perform the following:

1. Click on the **schedule** that you want to see.

![a41492b1480f4549935c47a34e8d16ca8cda5dedcfe9aae9244e3ab86fde8496 Export schedule 2](https://files.readme.io/a41492b1480f4549935c47a34e8d16ca8cda5dedcfe9aae9244e3ab86fde8496-Export_schedule_2.png)

2. On the **Overview** tab, you can see the details of the schedule such as schedule name, description, schedule type, FTP tag, frequency, execution date, export data fields, notify recipients, and templates.
3. To see the execution log, click the **Execution** Log tab.

![dc5c212769b8969d8dffd3dd3f26f28cdb2d1599f0a5b01244760e7e92379ae5 Execution log](https://files.readme.io/dc5c212769b8969d8dffd3dd3f26f28cdb2d1599f0a5b01244760e7e92379ae5-Execution_log.png)

4. If an export job fails, you can manually rerun it by clicking **Rerun**. The job will resume from the last successful execution.
