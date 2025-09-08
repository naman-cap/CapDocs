---
title: Export Audience Group
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
The export feature allows you to export metric values for a specific customer list, using an audience filter in a template. For example, you can export transactions made by a specific audience in a particular store. 

Make sure to use the appropriate template based on the data you want to export.

See the following example for a better understanding:

> 📘 Example
>
> Scenario: Alan needs to export loyalty details of customers who registered at a specific store.
>
> Details: You can retrieve registered customers of a specific store using the Members template. However, the maximum time frame for data export is one year, so exporting the entire set of registered customers in one job is not possible.
>
> Solution:
>
> 1. Create an audience group using filters to identify customers registered in the specific store. For details, see the **Registered Store** filter under the loyalty category.
> 2. In **Export** framework, select the **Members** template and apply the required audience filter.
> 3. Schedule the export. The exported list will contain all customers who registered at the specific store, regardless of the date range selected.

Important points to note when creating an audience list:

* The **Members** template only allows you to retrieve loyalty and non-loyalty customers.
* The **Users** template lets you export all target audiences of a campaign, regardless of their loyalty status.
* Date range is not applicable in audience list exports, and the **Based on** field is set to **Audience selected** by default.

![5493e4dc4fd6952e40d48a74f3834c7fd75da70768d52dffcdc2cecf9e6dbf66 Audience based](https://files.readme.io/5493e4dc4fd6952e40d48a74f3834c7fd75da70768d52dffcdc2cecf9e6dbf66-Audience_based.png)

<Note title="Note">
* To export the audience of a specific campaign using templates other than Users and Members, ensure you select the campaign name, campaign ID, or group name as a filter. Else, the audience list will include audience from all campaigns.
* Custom fields are not selected by default in any template.
* Customers with a birth year before 1901 cannot be retrieved.
* Standard filters, such as outlier status, fraud status, merge status, and admin till, cannot be applied.
</Note>

Configuring a customer list export schedule involves the following steps:

1. Define a name and description for the export job.
2. Set up the frequency and validity of the job.
3. Choose the templates with events data.
4. Tag the audience list to the template.

To export an audience list, perform the following:

1. On Insights+, navigate to **Data connectors** > **Export Schedules**
2. Click **Create New**.

<Note title="Note">
Fields marked by \* are mandatory.
</Note>

![b130043b2331a5afb98a2eb8df47a70a702ec16a01a87d8d688a55c19cf67075 Create schedule](https://files.readme.io/b130043b2331a5afb98a2eb8df47a70a702ec16a01a87d8d688a55c19cf67075-Create_schedule.png)

3. Schedule Name: Specify a unique name for the current schedule job (maximum character length is 60). Do not include special characters. Use of underscores (\_) or spaces in the name are allowed. Example: Summer Sale Transactions or Summer\_Sale\_Transactions. 
4. Description: Provide a brief description of the schedule (maximum character length is 250).
5. FTP location:

* For external use: From the FTP drop-down list, select the FTP server to which you want to export the data. The file gets saved to the default location on the chosen FTP server. For more information on configuring the FTP server, see Configuring FTP Server for Data Export. (HYPERLINK)
* For internal use: You can either select FTP (to save the files in the preferred FTP location) or S3 (to save the files in the internal S3 server). No server configuration is required to export to S3 (CHECK???)

6. Frequency: Select how often to run the export job: once, daily, weekly, or monthly. The maximum duration for a scheduled job is one year.

<Note title="Note">
* For recurring schedules, in the **Validity** field, you cannot select past dates. You may only select the current date or a future date.
* For one-time schedules, you can select a past date range, limited to the duration for which data is available.
* You can schedule an export based on either the **Last Updated Date** or **Event Date**.
</Note>

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
10. In Export Templates, click **Add/Remove Templates**

![4edfca0639025befa7161e94b4a126265da7a20f222ee7a61d647c5692b8c4c1 Add or remove template create new](https://files.readme.io/4edfca0639025befa7161e94b4a126265da7a20f222ee7a61d647c5692b8c4c1-Add_or_remove_template_create_new.png)

Check the templates you want to add to the export job and click **Select**. You can select more than one template.

For standard templates, the system displays the default measures, and for custom templates, it shows the selected KPIs count. All dimensions applicable to the KPIs or measures are displayed. You can modify the template to select only the necessary dimension values and apply filters to the existing data if needed.

11. After selecting a template, click **Modify** to make changes.

![5ba0ba3713e9f5f10cbaeb63df8d5032d577823c7075a18bf20255374b326367 Modify template1](https://files.readme.io/5ba0ba3713e9f5f10cbaeb63df8d5032d577823c7075a18bf20255374b326367-Modify_template1.png)

**Note**: Once you select a template other than users or members, it is required to add the filter campaign name, campaign id, or group name to get customers of that campaign or group. Else, you will get the details from all campaigns.

12. Click the **Filters** icon and navigate to the **Audience** tab.

![2b31e4cf89165ffcc226cd5f77f5b8fcc10d5949e35a41c801cd209522013e52 Audience filter](https://files.readme.io/2b31e4cf89165ffcc226cd5f77f5b8fcc10d5949e35a41c801cd209522013e52-Audience_filter.png)

13. Select your preferred audience list. You can also search for a specific list using the **Search** box. You will see all the selected audience list (segment) as shown below.

![028f887daadb8490fd031aca47ed0c7ec13010ac4037e2e182d1c7f3e2f4c007 Audience based1](https://files.readme.io/028f887daadb8490fd031aca47ed0c7ec13010ac4037e2e182d1c7f3e2f4c007-Audience_based1.png)

14. Click **Save**
