---
title: Custom Templates
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
A custom template is a combination of KPIs and dimensions. You can use custom templates to get data from multiple fact tables or summarized data, say at user level, transaction-level, or points level. Use custom templates to export data at a granular level. Each combination of a KPI and dimension value forms a column of an export file. For example, you can use a standard template to export transaction-level dump, if you need transactions at user level, you need to use custom templates.

## Limitations of custom templates

* You can choose up to 5 dimensions per template.
* You cannot export custom fields, and measures (such as bill id, bill number, bill amount, auto-update time) in custom templates. You can export only KPIs and their dimensions. 

## Create custom export template

To create an export template, do the following -

1. Navigate to **Data connectors > Export Templates**.\
   You will see the list of existing templates of the org as shown below. All fact templates will have Capillary as Created by whereas custom templates will have the name of the user who created it as highlighted in the following screenshot.

![](https://files.readme.io/7207f2c-OYtpQQm-Ck_DIp-2q4SH1-Yd0jfQn-7Idw.png "OYtpQQm-Ck_DIp-2q4SH1-Yd0jfQn-7Idw.png")

2. Click **Create new** to configure a new profile template.

![ba19102 c7AEWYBb KB5dLyOl4toDvOQu1C9ESygzg](https://files.readme.io/ba19102-c7AEWYBb_KB5dLyOl4toDvOQu1C9ESygzg.png)

3. In **Template Name**, specify a meaningful name for the template. You cannot have duplicate template names
4. In **Description**, specify a short description of the template
5. In **KPIs**, select the KPIs that you want to download for the template. You can select any number of KPIs
6. In **Dimensions**, you will see the dimensions as per the chosen KPIs. Select your preferred dimensions to download dimension-wise data. *You can select a maximum of 5 dimensions*.\
   You will see the preview of the data in the Preview table.  

![85477bc EOclKrFXdGHge4VP2uWdrtsBKylVqHkWvw](https://files.readme.io/85477bc-EOclKrFXdGHge4VP2uWdrtsBKylVqHkWvw.png)

> 📘
>
<Note title="Note">
Dimensions and measures are columns of an export
</Note>

* In the Preview table, you can see the list of KPIs selected for the template. To see details of a KPI such as definition, properties, and decimal point, click on the respective i icon. 

![f483675 W5CKWzioHGtaeMiTZWuxX2zXLY2rOxKiEQ 1](https://files.readme.io/f483675-W5CKWzioHGtaeMiTZWuxX2zXLY2rOxKiEQ_1.png)

* KPIs are categorized into two types of Properties:
* Additive: A metric that can be aggregated through all of the dimensions (cumulative). For example, total sales, total registrations, Lapsed customers
* Non-Additive: A metric that cannot be aggregated (non-cumulative measures). Example: Ratios - ATV, ABS, % redemption, % sales

7. Click **Submit** to create. You will see the following pop-up if the template is successfully created

![6af6b53 LNTDL d vvxvuHwJAGEA7NkXo6sXLqleOA](https://files.readme.io/6af6b53-LNTDL_d_vvxvuHwJAGEA7NkXo6sXLqleOA.jfif)

> 📘
>
<Note title="Note">
You cannot edit a template once created.
</Note>

![4fd43ad PIUg9I3Q6 BchVUrYCEKEDVvG3S  g Uog](https://files.readme.io/4fd43ad-PIUg9I3Q6-BchVUrYCEKEDVvG3S__g_Uog.png)

* **Search a Template**: Use the search box to search for a specific template.
* **Filter list (Type)**: Use the Type drop-down to see All templates or only Fact Templates, Fraud Templates, Custom Templates, or Templates created by you.
* **Created By**: You will see the Capillary for Fact templates and the user name who created the template for Custom templates.
* **Type**: Type can be Fact, Dimension, or Fraud for Standard templates and Custom for custom templates.
* **Actions**: You can view the details of a template by clicking More Options > View Template. 

![7758ca6 kGT1OKEqct09gNh7 13LmE94gvj8rtgurg](https://files.readme.io/7758ca6-kGT1OKEqct09gNh7-13LmE94gvj8rtgurg.png)
