---
title: Explore chart (explore mode)
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
Chart Explore mode lets you focus on a specific chart and analyze the chart data from different perspectives. For example, you can filter down the chart data, split data using dimensions, change visualization, and more. This article covers all the options available in the Chart Explore mode. 

To open the chart explorer, navigate to the chart that you wish to explore and click the explore icon as shown in the following image.

![4d9798a ChartsExplore](https://files.readme.io/4d9798a-ChartsExplore.png)

In chart explorer, advanced options helps you to drill down your data with features like pivot table, data representation, display percentage of total, KPI filters, and KPI time period. 

See the following sections for detailed information on each advanced option.

## Reordering KPIs and attributes

You may need to arrange the columns of your report in a specific order for better insight. The columns that have a higher priority must appear first so that readability of the report is enhanced and vital data appears as a heads-up.

To reorder KPIs or attributes, follow the steps.

![c102a4e Explore1](https://files.readme.io/c102a4e-Explore1.gif)

1. Click on either Pivot table/Display % of total/KPI filters/KPI time period.
2. Click and hold the required KPI/attribute chip in the stackable list available.
3. Drag the KPI/attribute chip vertically up or down to change the order. An example is shown in the following screenshot.

## Pivot table

This lets you visualize the data in a table. A table representation is the default view of a report that helps you to clearly analyze your data. You can also swap between rows and columns in order to draw attention to useful information. Pivot tables lead to finding information quickly making them vital to data analysis.

For example, if your rows are dates and columns are KPIs, you can swap rows and columns to make rows as KPIs and columns as dates. 

To swap rows and columns in the table, on the Pivot table, drag the chip in row to column or vice-versa, and click **Apply**.

The process of using the Pivot table is shown in the following image.

![07afa01 Explore2](https://files.readme.io/07afa01-Explore2.gif)

## Sort KPIs and attributes

In Data Representation, you can do a multi-level sorting on the KPI values and attributes in ascending or descending order. When you sort the values of a KPI, you can be aware of the boundary conditions of your data. You can quickly view minimum and maximum values or other intermediate values.

Multi-level sorting implies that you can apply sorting on multiple attributes and KPIs present in your report. However, the first KPI/attribute added is given the preference. The first KPI/attribute is titled Sort by and the subsequent KPIs/attributes are titled Then by.

To sort chart KPIs/attributes in ascending or descending order, use the following steps.

![2ce885b Explore3](https://files.readme.io/2ce885b-Explore3.gif)

1. Navigate to the Data representation icon, 
2. Change the priorities for multiple KPIs/attributes by dragging the chips vertically up or down.
3. Click on the KPI chip drop-down and choose 0 to 9 to sort the KPI values in the ascending order. Choose 9 to 0 to sort in descending order. 

To add more KPIs and attributes to the sorting order, follow these steps. 

1. Click +/- KPIs/attributes to sort and check the KPIs that you want to include. 
2. Click Add to apply the sorting options.

> 📘 * To clear all the applied sorting options, click **Reset**.
> * To cancel without saving sorting options, click **Cancel**.

## View KPI values in percentage

You can analyze how a KPI is faring and its contribution to the total value. You can decide if any KPI has an overbearing effect on the total value and take measures.

> 📘 Display percentage of total option can be applied on additive KPIs only.

To view KPI values  in percentage of the total, use the following steps.

![6efa349 Explore4](https://files.readme.io/6efa349-Explore4.gif)

1. Click on Display % of total icon.
2. Drag and drop the Display % of total chip for your preferred KPI. The chart loads and displays the data for display percentage of total feature.
3. To apply a display as percentage of total chip to all KPIs available, enable Display % of total for all KPIs and drag and drop the Display % of total chip on any of the KPI.\
   The chart will reload and show the data of display percentage of the total for all additive KPIs.

For a KPI with Display % of total chip applied, an indication appears on the KPI chip as shown in the following screenshot.

![21a5e28 Explore5](https://files.readme.io/21a5e28-Explore5.png)

* To remove Display % of total option on a KPI chip, click on the X icon.

## Applying filters to KPIs

You can filter chart data KPIs and analyze the results. 

The KPI filters are helpful when you are dealing with large amounts of data and need to drill it down to a very specific data.

To filter data by KPIs, use the following steps.

![a148352 Explore6](https://files.readme.io/a148352-Explore6.gif)

1. Click on KPI filters icon
2. Drag and drop your preferred attribute value to the KPI. You can also search for a filter by typing its name in the search box and applying it by drag-drop.
3. To apply a KPI filter to all KPIs available, enable Apply value filters to all KPIs and drag and drop the preferred attribute value on any of the KPI.

The chart will reload and show the data of the applied filter for all KPIs.

Once you apply a filter to a KPI, you can see it on the KPI chip as shown in the following screenshot. 

![0450893 Explore7](https://files.readme.io/0450893-Explore7.png)

* To remove a value filter on a KPI chip, click the X icon.

***

## View KPI data for different time periods

You can use KPI time period to view or analyze KPI values for different time periods. On Advanced options, navigate to the KPI time period . You will see the default time period (RTP) applied to the chart and the list of other time periods that can be applied to those KPIs.

* **Report time period (RTP)**: It is the time period that is selected for the report. This is the default date-range applied to the chart. You can modify it if required by clicking on the calendar icon. For more details on how to use date filters, see here.

![d7b650a RTP](https://files.readme.io/d7b650a-RTP.png)

You can also apply other time periods if you wish to see the data for different time periods in the same chart. You will see all the supported options in the KPI time period widget. 

To analyze the data for different time periods, follow the steps.

![da4ad12 Explore9](https://files.readme.io/da4ad12-Explore9.gif)

1. On Advanced options, navigate to the KPI time period. You will see the list of time periods that can be applied to any KPI.

* Till date period: Lets you select week to date (WTD), month to date (MTD), quarter to date (QTD), year to date (YTD), Inception to date (ITD).
* Last time period: Shows the data of a KPI for the last \`x' days, weeks, months, or quarters. You need to specify the number of days, weeks, months, or quarters in the Last box.

![03ed841 LastTimePeriod](https://files.readme.io/03ed841-LastTimePeriod.png)

* Time period relative to RTP: Define custom time period relative to RTP as explained in the following.
  1. Click **+Add time period**
  2. Enter relevant **Days/Weeks/Months/Quarters** in **Duration of.**
  3. Enter relevant **Days/Weeks/Months/Quarters** in with a gap of.
  4. Choose a time period relative to the **Report start date** or **Report end date**.
  5. Click **Add** to add the time period.\
     2.Drag and drop a time period filter on your preferred KPI. The chart loads and displays the data for the new time period in a separate column.

3. To apply a time period filter to all KPIs available, enable Select time period for all KPIs and drag and drop the desired time period filter on any of the KPI.

The chart will reload and show the data of the selected time period filter for each KPI in a separate column.

For a KPI with a time period applied, an indication appears on the KPI chip as shown in the following screenshot.

![ee1b068 exploreLast](https://files.readme.io/ee1b068-exploreLast.png)

> 📘 * To remove the added date filter, click on the respective X icon.
> * You cannot remove the default report time period (RTP). However, if there is another date-filter applied to the KPI, you will see the X option to remove the RTP.
