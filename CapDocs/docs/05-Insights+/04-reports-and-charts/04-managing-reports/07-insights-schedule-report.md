---
title: Schedule Report
excerpt: ''
deprecated: false
hidden: false
metadata:
  title: ''
  description: >-
    The Schedule Report function allows you to automate report scheduling with
    options for daily, weekly, monthly, or fixed times, sending reports via
    email to designated recipients with scorecards and customizable content.
    Both Standard and Custom Reports can be scheduled.
  robots: index
next:
  description: ''
---
The Schedule Report function allows you to automate report scheduling, offering options such as daily, weekly, monthly, or fixed times. Once scheduled, the system automatically sends these reports via email to designated recipients. Each email includes scorecards displaying all Key Performance Indicators (KPIs) from the report, along with the option to download the report as an Excel file and a direct link to view it on Insights+. You can customize the email, add a personalized message, and embed KPIs directly within the email. Both Standard and Custom Reports can be scheduled.

# Creating Schedule

To Schedule a Report, do the following:

1. Open the report you want to schedule. Customize the report if required using the available report filters and chart dimensions
2. On the top-right of the report, click the **More** Options icon >**Schedules**. This shows the existing list of schedules for that report.

![a7f7edb Schedules](https://files.readme.io/a7f7edb-Schedules.png)

3. To create a new schedule, click **Create Schedule**.

![b0518cb Create schedule](https://files.readme.io/b0518cb-Create_schedule.png)

4. Configure the fields based on the descriptions provided in the table below

<Table align={["left","left"]}>
  <thead>
    <tr>
      <th>Option</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Schedule Name</td>
      <td>Specify a name for the schedule job.</td>
    </tr>
    <tr>
      <td>Time Period</td>
      <td>Based on the report duration, the Time Period will be selected automatically.</td>
    </tr>
    <tr>
      <td>Filters</td>
      <td>This will show the list of filters applied to the report (if any).</td>
    </tr>
    <tr>
      <td>Frequency</td>
      <td>
        Choose the frequency of sending the report - Once, Daily, Weekly, or Monthly.<br />
        For Once, choose the Date and Time of sending the report.<br />
        For Daily, choose the Time of sending the report and until (End Date) when you want this report to run.<br />
        For Weekly, choose the day on which you want the report to send, the Time of sending the report, and until when (End Date) you want this report to run.<br />
        For Monthly, choose the Date and Time you want the report to send, and until when (End Date) you want this report to run.
      </td>
    </tr>
    <tr>
      <td>Select Recipients</td>
      <td>Select the targeted audience of the report from the list.</td>
    </tr>
    <tr>
      <td>Customize Email</td>
      <td>Enable this option to customize email to include custom message and select KPIs that you want to see in the email.</td>
    </tr>
    <tr>
      <td>Include a custom message</td>
      <td>Enable this option to include a custom message in the email and specify the message in the text box that appears below it. You can have up to 150 characters in the message.</td>
    </tr>
    <tr>
      <td>Embed KPIs on email</td>
      <td>
        Enable this option to choose the KPIs that you want to embed in the email body (under Report Email) as shown in the screenshot below. You can choose up to eight KPIs.<br />
        Note: Currently, this feature is restricted only to one scheduler per organization.
      </td>
    </tr>
  </tbody>
</Table>

![cd0544d Create schedule page](https://files.readme.io/cd0544d-Create_schedule_page.png)

5. Customize the email by adding a custom message. You can select up to 8 KPIs which will be included in the email. Expand the **Add KPIs** drop-down and select the required KPIs. Click **Apply**.

![797b1c2 Customized email](https://files.readme.io/797b1c2-Customized_email.png)

5. Click **Done** on the Create Schedule page.

# Viewing and Downloading Report through Email

The following is a sample view of an email of a scheduled report.

The message that you set in **Include custom message** will appear on the top of the email body as highlighted below.

1. Click **View Report** to view the report on Insights+. Login to Insights+ before clicking this option.
2. Click **Download as** to download the report as an Excel sheet.

![7398fa7 iRW 711MwSvukcLE3ZY3Zq ew4IhPm5DsA](https://files.readme.io/7398fa7-iRW-711MwSvukcLE3ZY3Zq_ew4IhPm5DsA.png)

<br />

# Applying filters and Dimensions to a Scheduled Custom Report

You can apply filters and dimensions to a custom report that you want to schedule.

To set filters and dimensions:

1. Open a custom report
2. Click the **More** Options icon > **Edit**.
3. Add the required filters and dimensions
4. Click **Save**<br />
   In recurring jobs, whenever the scheduler runs, you will get a report with prefilled filters and dimensions.

# Editing Schedule

Any running schedule can be edited as per the users requirements. All the parameters originally used to create the schedule can be modified. To edit a schedule:

1. Navigate to the desired report and click the **More** Options icon > **Schedules**
2. For the desired schedule click the **More** Options icon > **Edit**.
3. Do the required changes and click **Save**.

![1509270 Edit schedule page](https://files.readme.io/1509270-Edit_schedule_page.png)

# Pausing/ Resuming Schedule

Any running schedule can be paused before it is executed. To pause a schedule:

1. Navigate to the desired report and click the **More** Options icon > **Schedules**
2. For the desired schedule, click the **More** Options icon > **Pause**. The schedule gets paused and a Schedule paused notification appears.
3. To resume the paused schedule, click **Pause**> **Resume**.

## Unsubscribing/ Subscribing to a scheduled report

Recipients of a scheduled report receive reports through emails according to the scheduled frequency. However, a recipient can unsubscribe from a scheduled job manually to stop receiving reports. Also, an unsubscribed recipient can subscribe again to receive reports.

To unsubscribe or subscribe to a scheduled report:

1. Navigate to the desired report and click the **More** Options icon > **Schedules**
2. For the desired schedule, click the **More** Options icon > **Request to unsubscribe**.
3. If you are unsubscribed from a scheduled job and want to subscribe again, click the **More** Options icon > **Request to subscribe**.

# Viewing Status Log

For all the existing schedules, you can view the status log as follows:

1. Navigate to the desired report and click the **More** Options icon > **Schedules**
2. For the desired schedule, click the **More** Options icon > **View Status Log**.

![2151b78 View Status](https://files.readme.io/2151b78-View_Status.png)

<br />