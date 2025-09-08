---
title: Create an Export Job (Step 1 of 3)
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
To schedule an export event, perform the following: 

1. On Insights+, navigate to **Data connectors** > **Export Schedules**.
2. Click **Create New**.

<Note title="Note">
Fields marked by \* are mandatory.
</Note>

![b130043b2331a5afb98a2eb8df47a70a702ec16a01a87d8d688a55c19cf67075 Create schedule](https://files.readme.io/b130043b2331a5afb98a2eb8df47a70a702ec16a01a87d8d688a55c19cf67075-Create_schedule.png)

3. Schedule Name: Specify a unique name for the current schedule job. Do not include special characters. You may use underscores (\_) or spaces in the name if required (maximum character length is 60). Example: Summer Sale Transactions or Summer\_Sale\_Transactions. 
4. Description: Provide a brief description of the schedule (maximum character length is 250).
5. FTP location:

* For external use: From the FTP drop-down list, select the FTP server to which you want to export the data. The file will be saved to the default location on the chosen FTP server. For more information on configuring the FTP server, see Configuring FTP Server for Data Export. You can add up to two folders as described in Step 3 of 3 in Modifying Template and Creating Schedule (Step 3 of 3).
* For internal use: You can either select FTP (to save the files in the preferred FTP location) or S3 (to save the files in the internal S3 server). No server configuration is required to export to S3 (CHECK???)

6. Frequency: Select how often to run the export job: once, daily, weekly, or monthly. The maximum duration for a scheduled job is one year.

<Note title="Note">
* For recurring schedules, in the **Validity** field, you cannot select past dates. You may only select the current date or a future date.
* For one-time schedules, you can select a past date range, limited to the duration for which data is available.
* You can schedule an export based on either the **Last Updated Date** or **Event Date**.
</Note>

<br />

<Table>
  <thead>
    <tr>
      <th>
        **Option**
      </th>

      <th>
        **Description**
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        **Once**
      </td>

      <td>
        Runs the export job one time on the scheduled date.\
        The **Execute on** date shows the current date, by default.\
        In **Export Data** from, choose the data duration you want to capture (supports up to one year). You can select dates up to the last sync date, but not the future dates.
      </td>
    </tr>

    <tr>
      <td>
        **Daily**
      </td>

      <td>
        Runs the export job daily for the specified duration.\
        In **Validity**, choose the duration for which the daily schedule will run. Only current and future dates are allowed.\
        The data for the previous day will be available the next day.  

        * \*Not&#x65;**: You cannot select past date in**Validity\*\*.
      </td>
    </tr>

    <tr>
      <td>
        **Weekly**
      </td>

      <td>
        Runs the export job weekly for the specified duration.\
        In **Execute on**, select the day of the week to run the job.\
        In **Validity**, choose the duration for the weekly schedule. You can only select current and future dates, with a maximum schedule duration of one year.  

        * \*Not&#x65;**: If the file is required weekly on Mondays, set**Execute on\*\* to Sunday.
      </td>
    </tr>

    <tr>
      <td>
        **Monthly**
      </td>

      <td>
        Runs the export job monthly for the specified duration.\
        In **Execute on**, select the day of the month (1-30/31) to run the job.\
        In **Validity**, choose the duration for the monthly schedule, selecting only current and future dates. The maximum schedule duration is one year.  

        * \*Not&#x65;**: If**Execute on\*\* is set to 1, you get monthly data that is available until the 1st of every month on the 2nd.
      </td>
    </tr>
  </tbody>
</Table>

7. Notify Recipients: Select the recipients for the current schedule and click **Select** to apply. These users receive recurring notifications, valid for the duration of the job, each time the job runs. The notification includes a link to the target location of the exported data.
8. Encrypt Data: You can encrypt the exported data. If the public keys are not already configured, configure them by referring to the [documentation on data encryption settings for export](https://docs.capillarytech.com/docs/settings).
9. Public Key: From the **Public Key** drop-down list, select the appropriate public key name.
10. Proceed to the next steps.
