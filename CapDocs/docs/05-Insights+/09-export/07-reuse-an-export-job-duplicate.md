---
title: Reuse an Export job (Duplicate)
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
In a scenario where the export job has been executed, you can reuse it with modifications without creating a new job all together. You can do so by duplicating the existing job and modifying it as needed.

To duplicate a job, perform the following

1. On the **Export Schedules** page, click on the job that you want to duplicate.\
   You will see all the templates of the previous export with the same properties in the new one.

![1360](https://files.readme.io/eb8fee0-fIpHD_ezt56eTcdgL9rZG4aJ7XKV8en9oA.png "fIpHD_ezt56eTcdgL9rZG4aJ7XKV8en9oA.png")

2. **Schedule Name**: Specify a unique name for the current schedule job without any special characters.  You can use \_ or space in the name if required. For example, Summer Sale Transactions or Summer\_Sale\_Transactions
3. **Description**: Specify a short description of the job schedule.
4. **Schedule Type**: The target destination of the export files.

* For internal use: You can either select FTP (to save the files in the preferred FTP location) or S3 (to save the files in the internal S3 server). No server configuration is required to export to S3
* For external use:  You need to select only FTP to save the files in the preferred FTP location. To know how to configure FTP Server, see Configuring FTP Server for Data Export

5. **Frequency**: Choose the frequency of running the current export job - Once, Daily, Weekly or Monthly. You can set a maximum of one-year duration.

<Note title="Note">
* In Validity of recurring schedules, you cannot select past dates, but can only select duration form a current date or future date
* In Export Data of one-time schedules, you can only select past duration until when the data is available
</Note>

<Table align={["left","left"]}>
  <thead>
    <tr>
      <th>
        OPTION
      </th>

      <th>
        DESCRIPTION
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Once
      </td>

      <td>
        Runs the export job on the scheduled date(only once).
        In this, the Execute on date will be selected by default, which is the current date.
        In Export Data from, you need to choose the duration for which you want to capture the data (supports up to one-year duration). You can select only up to the last sync date but not current date or future date.

        * *Note*\*: You can use Date or Time in filters to get the data by event date or event time respectively.
      </td>
    </tr>

    <tr>
      <td>
        Daily
      </td>

      <td>
        Runs the export job on a daily basis for the duration you specify.\
        In Validity, choose the duration for which you want this daily schedule to run. You can select only current and future dates.
        You will get the previous day's data the next day. For example, you will get the current day's data the next day.

        * *Note*\*: You cannot select past date in Validity
      </td>
    </tr>

    <tr>
      <td>
        Weekly
      </td>

      <td>
        Runs the job on a weekly basis for the duration you specify.\
        In Execute on, select the day of the week when you want to run the weekly schedule
        In Validity, choose the duration for which you want this weekly schedule to run. You can select only current and future dates. You can select a maximum of 1-year duration.

        * *Note*\*: If Execute on is set to Sunday (s), you will get weekly data every Monday.
      </td>
    </tr>

    <tr>
      <td>
        Monthly
      </td>

      <td>
        Runs the job on a monthly basis for the specified duration.\
        In Execute on, select the day of the month when you want to run the monthly schedule, which is from 1-30/31.
        In Validity, choose the duration for which you want this monthly schedule to run. You can select only current and future dates and a maximum of 1 year duration.

        * *Note*\*: If Execute on is set to 1, you will get monthly data that is available until 1st of every month on 2nd.
      </td>
    </tr>
  </tbody>
</Table>

6. **Notify Recipients**: Select the recipients for the current schedule and click Select to apply. These users will get recurring notifications (until the validity of the job) whenever the job runs and sends the link of the target location of the exported data
7. You can \[modify existing templates] and add new templates if required
8. Click **Create** to save the changes and create the schedule.