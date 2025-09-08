---
title: Custom Templates
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
A custom template is a combination of KPIs and dimensions. You can use custom templates to get data from multiple fact tables or summarized data, say at user level, transaction-level, or points level. Use custom templates to export data at a granular level. Each combination of a KPI and dimension value forms a column of an export file. For example, you can use a standard template to export transaction-level dump, if you need transactions at user level, you need to use custom templates.

## Limitations of Custom Templates

* You can choose up to 5 dimensions per template.
* You cannot export custom fields, and measures (such as bill id, bill number, bill amount, auto-update time) in custom templates. You can export only KPIs and their respective dimensions.

## Create Export Template

To create an export template, perform the following:

1. Navigate to **Data connectors** > **Export templates**.\
   You will see the list of existing templates of the org as shown below. All fact templates will have Capillary as Created by whereas custom templates will have the name of the user who created it as highlighted in the following screenshot.

![960df3611978f8e034e6b59da4243bb1e44c4460fe335676133bc1b381e05cfe Data connectors Custom templates with blur](https://files.readme.io/960df3611978f8e034e6b59da4243bb1e44c4460fe335676133bc1b381e05cfe-Data_connectors_Custom_templates_with_blur.png)

2. Click **Create new** to configure a new template.

![d85d2858919233a1da078650b8c458439aa6746da1d6d00ef3238ae81231f1cb Create new custom template main](https://files.readme.io/d85d2858919233a1da078650b8c458439aa6746da1d6d00ef3238ae81231f1cb-Create_new_custom_template_main.png)

3. In **Template Name**, specify a meaningful name for the template. You cannot have duplicate template names.
4. In **Description**, specify a short description of the template.
5. In **KPIs**, select the KPIs that you want to download for the template. You can select any number of KPIs.
6. In **Dimensions**, you will see the dimensions as per the chosen KPIs. Select your preferred dimensions to download dimension-wise data.\_ You can select a maximum of 5 dimensions\_.\
   You will see the preview of the data in the Preview table.

![](https://files.readme.io/9b9ee5ae7a670c5057fc79955960256c8af56afe3ca154fd74293b44e887fd75-image.png)

> 📘
>
<Note title="Note">
Dimensions and measures are columns of an expor.
</Note>

* In the Preview table, you can see the list of KPIs selected for the template. To see details of a KPI such as definition, properties, and decimal point, click on the respective i icon.

![8cd5f5ddd638a2f4176f1a856c6f5d74a97f06405eb49692918718cec70cc75b tooltip main](https://files.readme.io/8cd5f5ddd638a2f4176f1a856c6f5d74a97f06405eb49692918718cec70cc75b-tooltip_main.png)

<br />

* KPIs are categorized into two types of Properties:
* Additive: A metric that can be aggregated through all of the dimensions (cumulative). For example, total sales, total registrations, Lapsed customers
* Non-Additive: A metric that cannot be aggregated (non-cumulative measures). Example: Ratios - ATV, ABS, % redemption, % sales

7. Click **Submit** to create. You will see the following pop-up if the template is successfully created

![e21c0b26e0b069b78ebea165f3ec0e84a4b7d25e928343229a01f253d336ce72 image](https://files.readme.io/e21c0b26e0b069b78ebea165f3ec0e84a4b7d25e928343229a01f253d336ce72-image.png)

<Note title="Note">
You cannot edit a template once created.
</Note>

![fc17cb62517fac62c7a3afd02bd5e9d1598959f7b29c42897f3db6e8252c4b92 image](https://files.readme.io/fc17cb62517fac62c7a3afd02bd5e9d1598959f7b29c42897f3db6e8252c4b92-image.png)

* **Search a Template**: Use the search box to search for a specific template.
* **Filter list (Type)**: Use the Type drop-down to see All templates or only Fact Templates, Fraud Templates, Custom Templates, or Templates created by you.
* **Created By**: You will see the Capillary for Fact templates and the user name who created the template for Custom templates.
* **Type**: Type can be Fact, Dimension, or Fraud for Standard templates and Custom for custom templates.
* **Actions**: You can view the details of a template by clicking More Options > View Template.

![](https://files.readme.io/ac71791f36fe7fff75a6483d291a3fda95c64f4c4bd8570879b44178a31770ba-image.png)