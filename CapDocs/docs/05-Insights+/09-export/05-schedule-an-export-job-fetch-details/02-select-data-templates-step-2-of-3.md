---
title: Select Data Templates (Step 2 of 3)
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
Standard templates allow us to share raw data stored in the system in the form of facts, and dimensions. Whereas custom templates are used to share aggregated metrics, built using KPIs, and dimensions. Custom templates give more flexibility in exporting data at a granular level.

For example: 

A standard template might export raw, transaction-level data, such as each individual sale with corresponding details.  
A custom template would allow you to aggregate that data—such as summing up the total bill amount for each user over a specified period—giving you a more summarized, high-level view.

To create a custom template, see [Creating Custom Templates](https://docs.capillarytech.com/docs/custom-templates-for-data-export#create-export-template).

There are over 20 different standard templates categorized as Fact, Dimension, and Fraud as mentioned below:

| **Fact Templates**       | **Dimension Templates** |
| ------------------------ | ----------------------- |
| Members                  | Concepts                |
| Coupons                  | Users                   |
| Points                   | Audience Group          |
| Response Info            | Campaign                |
| Contacted                | Stores                  |
| Invitation Sent          | Inventory               |
| Profiles                 |                         |
| Registration Events      |                         |
| Slab Change Log          |                         |
| Return Transactions      |                         |
| Issue Trackers           |                         |
| Messages                 |                         |
| Call Tasks               |                         |
| Footfall                 |                         |
| Transaction              |                         |
| Tracker Value            |                         |
| Payment Mode             |                         |
| Customer Merge Event Log |                         |
| Badges                   |                         |
| Goodwill Request         |                         |

Fraud (Currently, there are no templates in this category)

- initial_fraud_template

To select a template, do the following:

1. In **Export Templates**, click **Add/Remove** Templates. You can also create a new template using the **Create New** option if required.

![](https://files.readme.io/93f7212-NGGlQdRA10EC_mNbxPzvo_qjfLo2oAkDng.png "NGGlQdRA10EC_mNbxPzvo_qjfLo2oAkDng.png")

2. Check the templates that you want to add to the export job and click **Select**. You can select multiple templates at a time.  
   For standard templates, you will see the default measures selected and for custom templates you will see the selected KPIs count. All the dimensions that are applicable for the KPIs or measures along with the applicable dimensions. You can modify the template to select only required dimension values and apply filters to the existing data if required. Data of each template is saved in a separate directory in the destination path.

![RoEjf8TgRusv-EonoN6J11Bhmh6VaMs6Tg.png](https://files.readme.io/a6b96b5-Export_template.png)

3. To add filters and select dimensions that you want to download, click **Modify**

![UBRG8XewcE1XWV6DL5c03TwCp2Xf0J-Xkg.png](https://files.readme.io/bb7d252-UBRG8XewcE1XWV6DL5c03TwCp2Xf0J-Xkg.png)

As you see, by default all dimensions are selected as shown above.

- Filter down data: Filter down the export data to get only the information that is required. You can filter the data by filter dimensions and audience list
- Update the destination path of the current template data: You can use icon to modify the path of the current template's data on the FTP location
- Order field names (): This icon lets you reorder the field names as you would like to see in the exported file. To do so, hold the field icon and drag it to the required position
- Deselect KPIs (KPIs): By default, all the existing KPIs of the template are selected. You can uncheck all the KPIs that are not required
- Deselect Dimensions (Dimensions): By default, all the existing dimensions of the template are selected. You can uncheck all the dimensions that are not required

Note: The data that will be exported will have the columns KPI1, KPI2, ..., Dimension1.KPI1, Dimension2.KPI1, Dimension1.KPI2, Dimension2.KPI2, ...

4. Continue to Step 3 of 3 to [modify the template](https://docs.capillarytech.com/docs/modifying-template-creating-schedule-step-3-of-3) 

<Note title="Note">
In a template, custom fields will not be selected by default
</Note>