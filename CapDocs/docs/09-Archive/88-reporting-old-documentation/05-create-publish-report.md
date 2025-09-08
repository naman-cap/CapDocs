---
title: Create & publish report
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
Apart from the standard reports that are available by default, Insights+ allows you to create three types of custom reports.

* **Normal Reports**: General report that you can create using normal charts.
* **Migration Reports**: Special reports used to track the migration of users from one slab or segment to another slab or segment. You can use only migration charts to create migration reports.
* **External Reports**: Add reports that are created outside Insights+. 

## Create Normal & Migration Report

To create a custom report, do the following.

1. Login to the InTouch and navigate to Insights+.
2. On the home page, click Create **Report**.

![d06f16e  dpOluBsaA3fxAwKvEdJuYmY1fsyImfq9w](https://files.readme.io/d06f16e--dpOluBsaA3fxAwKvEdJuYmY1fsyImfq9w.png)

3. In Report name, specify a name for the report.
4. Choose the type of the report, Normal or Migration, in the drop-down next to Report Name.
5. Choose the report category in the next drop-down box - Sales, Customer, Loyalty, CRM, Product, or Migration.
6. Click **+ Add/Remove Charts**.\
   You will see a pop-up screen that prompts you to select charts

![ce7c4ff VXnpZnutO2C lUxxopr3rPPapXPDf4X2iQ](https://files.readme.io/ce7c4ff-VXnpZnutO2C-lUxxopr3rPPapXPDf4X2iQ.png)

7. Search for the required chart using the search box.  If you do not remember the chart name, you can also get charts by KPIs and Dimensions using the respective boxes.

![cde2b1d qByjuuAFPzkv5y4zTmHHlqkfiZujJfd61Q](https://files.readme.io/cde2b1d-qByjuuAFPzkv5y4zTmHHlqkfiZujJfd61Q.png)

8.Click **Add** of the respective chart that you want to add.

![a75556d 8xhQoiPbbgM875Yl721e9DSiHrSSQL1m6w](https://files.readme.io/a75556d-8xhQoiPbbgM875Yl721e9DSiHrSSQL1m6w.png)

9. Click **Remove** to deselect a chart if not required.
10. Close the pop-up screen. You will see the charts added to the report.
11. Choose the duration of the filter, check the Compare filter to compare data with that of a previous duration, and click Apply. To know more about date filter and comparison with a previous duration, see **Filter** by Date Range & Compare with Previous Period.

![4875143 j0t1sDFZHUzqJeSyfvX9R1Xj ESnXaVbvw](https://files.readme.io/4875143-j0t1sDFZHUzqJeSyfvX9R1Xj_ESnXaVbvw.png)

12. Click **Save** to complete creating the report. You can see it in the respective category in All Reports.\
    You need to publish it manually, as explained below, if you want other users of your organization to access the report. Else, only you (creator) can access the report.

13. In **All Reports**, click the report that you want to publish. Use the Search box and filters to find the report quickly.

14. Click the More Options icon > **Publish**.

![](https://files.readme.io/ca5c146-QGa-yPfWR9rLsxc2RpWHvp0jmSiO4TQvmg.png "QGa-yPfWR9rLsxc2RpWHvp0jmSiO4TQvmg.png")

You will see a success message if the report is published successfully.

![8276c31 2X3tHxYytXzLF8U6lt9UTZjMGgKt958rTg](https://files.readme.io/8276c31-2X3tHxYytXzLF8U6lt9UTZjMGgKt958rTg.png)

## Create External Report

To create an external report, perform the following:

1. In the **Report Name** field, enter a name for the report.
2. In the **Description** text box, enter a description of the report.
3. From the **Category** option, select the appropriate report category. You can also click **Add category** and add a new category.

![62977ab External report](https://files.readme.io/62977ab-External_report.png)

4. From the **Type** option, select **External**.
5. In the **Report URL**, enter the Databricks notebook path.

![919c288 External report url](https://files.readme.io/919c288-External_report_url.png)

6. In the **Add query parameters**, click **Show**.
7. In the **Report URL preview** , click **Open link** to preview the report. 
8. Click **Done**.

![5359559 Add query](https://files.readme.io/5359559-Add_query.png)

9. Click **Next** and then, click **Save report**.

If you are receiving any error while viewing the report, check, verify and [update the Databricks report URL link](https://docs.capillarytech.com/docs/create-publish-report#copying-databricks-notebook-url).

## Editing an Export report

 To Edit, perform the following:

1. Open the report > click More options icon > click **Edit**.
2. Make the required changes.
3. Click **Next** .
4. Click **Save report**.

![fe9ef13 Edit URL](https://files.readme.io/fe9ef13-Edit_URL.png)

### Copying Databricks notebook URL

To copy a Databricks notebook URL, from the Databricks homepage, navigate to your **Workspace** > **Users** > click on the report and copy the URL.

![45dcb15 DB URL](https://files.readme.io/45dcb15-DB_URL.png)
