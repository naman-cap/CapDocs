---
title: Create and Publish Custom Report
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
## Normal, Migration and Funnel Report

To create a Custom Report perform these steps:

1. In Insights+, from the left panel, expand the **Reports** drop-down and click on **All Reports**.

![05b0192 Create Reports](https://files.readme.io/05b0192-Create_Reports.png)

2. Click **Create Report**.

![7c963ac Create report Page](https://files.readme.io/7c963ac-Create_report_Page.png)

3. In **Report Name**, specify a name for the report.
4. Write the appropriate report description in the **Description** box.
5. Choose the report **Category** . To add a new category, click **+Add category**.
6. Select the report **Type** from the following options: Normal, Migration, or Funnel. To create an External report, click [here](https://docs.capillarytech.com/docs/create#external-report).

> 📘
>
> The type of report depends on the type of chart you choose to add. For example, if you select "Normal" as the report type, you can only add Normal charts. Likewise, to add a Funnel chart, choose "Funnel" as the report type.

7. Click **Next**.

![ef13f5a Create report](https://files.readme.io/ef13f5a-Create_report.png)

8. Click **+ Add/Remove Charts**. You will be directed to the add/remove charts interface.

![e5abdf2 Add Chart](https://files.readme.io/e5abdf2-Add_Chart.png)

9. Select the chart from the list or search for the required chart in the search box and click **Done**.  If you want to create a new chart, click **+ Create new chart**. To know more on creating charts, click [here](https://docs.capillarytech.com/docs/create#external-report). 

![e582dc1 Select Normal Chart](https://files.readme.io/e582dc1-Select_Normal_Chart.png)

10. If you cannot recall the chart name, use the Advanced Filter option. Select the KPIs and Dimensions by expanding the drop-down boxes and click **Apply**.

![f12c16b Advanced Filters](https://files.readme.io/f12c16b-Advanced_Filters.png)

> 📘
>
> Advanced filters are applicable to Normal and Migration charts only.

11. Click **Done**. The selected chart is added to your report.
12. Click **+ Add/Remove Chart** to add additional charts or remove existing ones from the report.

![c594ca7 Add or Remove Chart](https://files.readme.io/c594ca7-Add_or_Remove_Chart.png)

13. Click on the calendar icon to select the desired date range for the report. Check **Compare time period** to compare data of a previous duration, and click **Apply**. To know more about date filter and comparison with a previous duration, click [here](https://docs.capillarytech.com/docs/date-range-filter-comparison-with-previous-period-1#compare-data-with-a-previous-duration).

![4f0deac Report Date](https://files.readme.io/4f0deac-Report_Date.png)

14. Click **Save Report**.

## External Report

Prerequisite: 

Databrick notebook access.

To create an External report, perform these steps:

1. In the **Report Name** field, enter a name for the report.
2. In the **Description** text box, enter a description of the report.
3. Choose the report **Category**. To add a new category, click **+Add category**.

![62977ab External report](https://files.readme.io/62977ab-External_report.png)

4. From the **Type**, select **External**.
5. In the **Report URL**, enter the Databricks notebook path.

![919c288 External report url](https://files.readme.io/919c288-External_report_url.png)

6. Select **Authorization** mode for the report. For third party tool credentials (like Zeppelin, Databricks) select **Capillary Notebook**. For Capillary Insights+ credentials select **Capillary Authorization**.
7. To enter **Query parameter details** , click **Show**.

![5359559 Add query](https://files.readme.io/5359559-Add_query.png)

8. In the **Report URL preview** , click **Open link** to preview the report. 
9. Click **Done**.
10. Click **Next** and then, click **Save report**.

In case of any error viewing the report, verify and [update the Databricks report URL link](https://docs.capillarytech.com/docs/create-publish-report#copying-databricks-notebook-url).

# Publish report

Upon creating the report, you can see it in the respective category in **All Reports**.  If you want other users of your organization to access the report, you need to publish it manually. Else, only you (creator) can access the report. To publish the report, perform the following steps:

1. In **All Reports**, click the report that you want to publish. Use the Search box and filters to find the desired report.
2. Click **More options >** **Make public**.

![1a9092e Publish Report](https://files.readme.io/1a9092e-Publish_Report.png)

Alternatively, from the reports list, you can click **More options** of the desired report and click **Make public**, without having to open the report.

![971ffd1 Publish from home page](https://files.readme.io/971ffd1-Publish_from_home_page.png)

A success message is displayed when the report is published.

![8276c31 2X3tHxYytXzLF8U6lt9UTZjMGgKt958rTg](https://files.readme.io/8276c31-2X3tHxYytXzLF8U6lt9UTZjMGgKt958rTg.png)

# Example Scenario: Analysing Badge Earnings

Consider a scenario where a brand wants to analyse the badge earnings of their customers. To support this analysis, a chart has been created in the "Create Charts" section. Please refer to the [badges earned chart](https://docs.capillarytech.com/docs/create-chart#use-case). In this section, we will add the chart to our report for further analysis. 

Follow the steps below to create a report using the badges earned chart:

1. Navigate to Insights+ > **Reports**.
2. Click **Create report**.
3. Fill in the **Report Name** and **Description**. Select the appropriate **Category**. Select the report **Type** as **Normal**.
4. Click **Next**.
5. Click **+Add/remove charts**. 
6. Type the chart name or scroll through the chart list to locate the desired chart. In this use case, we will select the **Badges Earned** chart from the chart list. 
7. Click **Done**. The chart gets added to the report. 
8. Set the report Date range by clicking on the calendar icon. In this report we are selecting the report date to contain data for the last 1 year. Click **Apply**. 
9. The chart having the desired KPIs and dimensions in the specified date range, gets populated. Click **Save report**.

![014440e2a95ab1d602a3d71810c2aefca83239b2d95d6725cd07b622bdc0ce78 Create Report Badges GIF](https://files.readme.io/014440e2a95ab1d602a3d71810c2aefca83239b2d95d6725cd07b622bdc0ce78-Create_Report_Badges_GIF.gif)

# Key Insights from the Badges Earned Report

**Majority Engagement from Lower Tiers**\
Customers in lower sales ranges, especially the Base tier, account for nearly 80% of all badge earnings, indicating strong engagement at the lower end of the loyalty spectrum.

**Peak Engagement Period**\
June 2024 has a high number of badges earned, suggesting successful campaigns or promotions during this time, particularly among Base and Silver customers.

**Low Engagement in Premium Tiers**\
Higher-tier customers, such as those in Gold and Platinum, contribute significantly fewer badges, indicating a need for strategies to increase engagement.

**Opportunities for Re-engagement**\
Badge earnings are minimal in certain tiers, contributing only 1% or less, signalling an opportunity to re-engage these customers with targeted efforts.

These insights suggest focusing on maintaining base tier engagement while improving badge earning in higher tiers.
