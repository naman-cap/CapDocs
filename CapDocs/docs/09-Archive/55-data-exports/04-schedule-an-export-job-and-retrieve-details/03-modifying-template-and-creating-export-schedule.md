---
title: Modifying Template and Creating Schedule (Step 3 of 3)
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
After selecting the required templates, modify them to add or remove default dimensions, update the FTP location for each template, and customize the columns for export. Ensure that the required custom fields are selected.

<Note title="Note">
* Customer-level custom fields cannot be exported through transaction templates. However, customer-level extended fields can be exported through transaction templates.
* Custom fields are not selected by default in a template.
</Note>

To modify a template:

1. After selecting a template, click **Modify** to make changes.

![5ba0ba3713e9f5f10cbaeb63df8d5032d577823c7075a18bf20255374b326367 Modify template1](https://files.readme.io/5ba0ba3713e9f5f10cbaeb63df8d5032d577823c7075a18bf20255374b326367-Modify_template1.png)

<br />

2. To save the file to a specific location, click the location icon, enter the folder name or path, and then click **Save**. For more details, refer to the "[Change the default location of the file in FTP location](https://docs.capillarytech.com/docs/modifying-template-and-creating-export-schedule#change-the-default-location-of-the-file-in-ftp-location)" section. 

![9f55595f8688b7f8b5d85c3331f980bfdad0b86a10792447b6d2faa5b7f37223 Path](https://files.readme.io/9f55595f8688b7f8b5d85c3331f980bfdad0b86a10792447b6d2faa5b7f37223-Path.png)

<br />

3. In **Based on**, select whether to export data based on **Last Updated Date** or **Event Date** (not applicable for audience list export).

![4e26214ef926cb291c583d0f83d160d50dea45b958ef2f499fde956910f62ffe Last updated date 1](https://files.readme.io/4e26214ef926cb291c583d0f83d160d50dea45b958ef2f499fde956910f62ffe-Last_updated_date_1.png)

**Last Updated**: Retrieves records that are updated within a specified period.\
**Event Date**: Retrieves records based on the actual event date, such as registration, transaction, or points redemption.

For example, if a customer registered on April 1, 2023, but the data was synced to the system on April 15, 2023, the event date is April 1, 2023, and the last updated date is April 15, 2023.

> 📘 Important Note:
>
> It is important to understand the applicable date types based on the type of template:
>
> * Fact Template: Both Event Date and Last Updated Date are applicable.
> * Dimension Template: Neither Event Date nor Last Updated date are applicable.
> * Custom Template: Event Date is applied by default. You can modify the template to select the preferred date type.

The Preview table, shows the fields to be downloaded for the template. Refer to the preceding note for more details.

4. For each available KPI, the KPI name appears as it exists in the system. In **Rename** field, you can set a preferred name to be displayed in the exported file.

For example, for bill\_conversion\_date.day\_of\_month, you can use Daily Bill Conversion. 

<Note title="Note">
No spaces or special characters are allowed, except for underscores (\_) in field names.
</Note>

![4610ed3ece1f5676b47c6f5c6fd4680f52877bf987137a9e92356f166d84eb5b Rename field](https://files.readme.io/4610ed3ece1f5676b47c6f5c6fd4680f52877bf987137a9e92356f166d84eb5b-Rename_field.png)

5. Click **Save** to save the template. You can similarly configure all selected templates. 
6. Click **Create** to complete the export job creation.

<Note title="Note">
The filename of an exported file has the following naming convention.

schedulenametemplateName\_timestamp. For example, DailySlabChangeSlabChangeLog2019-10-29-12-30-021572356331802.
</Note>

# Change the default location of the file in FTP location

By default, the data for each template is saved in the location specified in the FTP configurations. However, you can export the file to a specific folder within the default path, as outlined in the following procedure.

1. On the **Modify Template** page, click the location icon.

![5791c607fc08da354a4b8d7ccc5907e757ef8cb5af72565c754b62cb4ea99937 Location](https://files.readme.io/5791c607fc08da354a4b8d7ccc5907e757ef8cb5af72565c754b62cb4ea99937-Location.png)

The default path is displayed, along with an option to specify the file location. You can add up to two folders.

2. Enter the path and click **Save**.

![985826f9e8605d8c105f5d3f97917847e7c69210b502c8b736352319b08da45c image](https://files.readme.io/985826f9e8605d8c105f5d3f97917847e7c69210b502c8b736352319b08da45c-image.png)

<br />

<Note title="Note">
When defining the path, no special characters are allowed except for underscore (\_) and forward slash (/).
</Note>