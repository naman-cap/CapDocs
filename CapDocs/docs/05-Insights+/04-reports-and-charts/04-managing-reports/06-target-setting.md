---
title: Target Setting & Tracking at KPI level
excerpt: ''
deprecated: false
hidden: false
metadata:
  title: ''
  description: >-
    This document explains how to set and track targets for Key Performance
    Indicators (KPIs) and dimensions in reports, allowing you to monitor
    progress towards specific goals.
  robots: index
next:
  description: ''
---
You can set a target for a KPI and dimension and track it through the reports associated with the same KPI and dimension. For example, you can set a target sale amount at the store level and then track the status of the sale through the reports that have the same KPI and dimension.

# Setting Target

To set a target value for a KPI, perform the following:

1. From the home page, click the settings icon.

![ae8d5f1 image](https://files.readme.io/ae8d5f1-image.png)

2. On the Settings page, select **Target** and click **Create target template**.

![b80047c image](https://files.readme.io/b80047c-image.png)

3. In the **Template name** field, enter a name for the target template.

![eea2e95 image](https://files.readme.io/eea2e95-image.png)

4. Expand the **KPI** drop-down list and select the KPI for which you want to set a target. Selecting the KPI will populate the relevant dimensions. You can select up to a maximum of three KPIs.
5. Expand the **Dimensions** drop-down list and select the dimensions. You can select up to a maximum of three dimensions. Selection of **Dimensions** is optional.
6. Click **Create**.  The target template is created and appears in the target templates list. 

![d3fcefb Target list page](https://files.readme.io/d3fcefb-Target_list_page.png)

If the desired template is not visible in the list, you have the option to either search for it by name using the search box or apply an advanced filter to locate it.

![50f1b92 Target List](https://files.readme.io/50f1b92-Target_List.png)

![b0f6997 Advanced filter for Target Template](https://files.readme.io/b0f6997-Advanced_filter_for_Target_Template.png)

7. Click on the target template to open it. 

![071d886 Test Target](https://files.readme.io/071d886-Test_Target.png)

![18eece5 Test Target1](https://files.readme.io/18eece5-Test_Target1.png)

8. Click **Download target template**. This template is used for adding the target values.

![2f78548 Downlod target template](https://files.readme.io/2f78548-Downlod_target_template.png)

![0a0c0bb image](https://files.readme.io/0a0c0bb-image.png)

9. Choose the date range for which you want to set the target.

![1f6ef8a Target dates](https://files.readme.io/1f6ef8a-Target_dates.png)

10. Expand the time range divider by clicking the drop-down box and selecting from Day, Week, Month and Year. 

![01639be Target date divider](https://files.readme.io/01639be-Target_date_divider.png)

11. Click **Download**. The Target Template file (in CSV format) will be downloaded.
12. Navigate to your device's downloads folder (or wherever downloaded files are stored) and open the CSV target template. 

![58acda7 CSV zeros](https://files.readme.io/58acda7-CSV_zeros.png)

13. In the sheet, enter the target values in the column with zeros. 

![dfae362 CSV values](https://files.readme.io/dfae362-CSV_values.png)

14. Save the CSV file.
15. Navigate to **Insights+> Settings >Targets > Click** the target template you created to open it.
16. Click **Upload Target** and choose the CSV file containing the target values that you've added. Make sure that the date is in YYYY-MM-DD format.

![7175022 Upload target](https://files.readme.io/7175022-Upload_target.png)

The target upload gets validated.

![adc8a34 Validating the target](https://files.readme.io/adc8a34-Validating_the_target.png)

Once the upload and validation is completed, the target for the selected KPI and dimension is set and ready to track.

![88a2d0e Target Upload Successful](https://files.readme.io/88a2d0e-Target_Upload_Successful.png)

The configured targets are available at **Insights Settings > Target > Uploaded Target Log**. You can click **Download Target** and download the configured target.

![f3313b5 Navigate to Target](https://files.readme.io/f3313b5-Navigate_to_Target.png)

<Note title="Note">
Combination of additive and non-additive KPIs is not supported in target tracking.
</Note>

# Tracking Target

To track the targets that you have created, perform the following:

1. Form the Insights+ page, navigate to **Library > Charts** from the left panel. 
2. Click **Create chart** and create a chart using the same KPI and dimension that you used to set the target. For information on creating a chart, click [here](https://docs.capillarytech.com/docs/create-chart).
3. Add the chart to a report. For information on adding a chart to a report, click [here](https://docs.capillarytech.com/docs/edit-or-delete).
4. From the **Reports**, open the report with the KPI and dimension that you used to configure and create the target and filter the dates accordingly.\
   The chart displays the target values. You can use the hide/view icon to view or hide the target from the chart.

<br />

![94128b4 image](https://files.readme.io/94128b4-image.png)

<br />

# Use case for creating target template

Creating target template to track Loyalty Sales Per Store for Birthday - Anniversary User Segment from 1 June 2024 to 1 July 2024.

By breaking down sales data by user segments like birthdays and anniversaries, you can understand how different segments contribute to overall sales. For example, you can see if there is a spike in sales around birthdays or anniversaries compared to regular days.

To create and upload the target template, perform the following steps:

1. Navigate to **Insights+>Settings>Target**.
2. Click **Create target template**.
3. Type the target name. Select the KPI as **Loyalty Sales Per Store** under **Transactions**, and Dimension as **Birthday - Anniversary segment** under **User Segment**.
4. Click **Create**. The target is created and is displayed in the list. 

![5c1307c Create Target](https://files.readme.io/5c1307c-Create_Target.gif)

5. Click on the target file to open it and click **Download target template**.
6. Select the date range from 1 June 2024 to 1 July 2024, and the time range divider from day, week, month or year. In this use case we have selected week wise division.
7. Click **Download**. This will download the target template (CSV file) in your devices downloads folder.

![28d1451 Part 2 template](https://files.readme.io/28d1451-Part_2_template.gif)

8. Open the CSV file and fill in the target values. In this case study we are adding Loyalty Sales per Store target sales values as 100. The targets are divided per week, where the start and the end date of the week is displayed.
9. Save the CSV file.

Note: The customers who have not provided their birthday/ anniversary details are referred as NOT\_CLASSIFIED.

![8f9b613 excel](https://files.readme.io/8f9b613-excel.gif)

10. Navigate to the target template that you have created in Insights+. Click **Upload Target**. Select the CSV target file (having the target values) and click **Open**. The target file is uploaded and you are ready to track the target.

![af8a2a0 Final upload](https://files.readme.io/af8a2a0-Final_upload.gif)
