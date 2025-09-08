---
title: Data Import
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
## Introduction

#### What is Data Import Framework?

The Data Import Framework is a web application that helps to upload offline data generated at the stores to the Capillary Database.

When InStore is operated online, it continuously syncs the data generated at the PoS to the Capillary Database. However, in cases where data is not captured through InStore but saved in the PoS machines, you can use the Data Import Framework to upload such data to the Capillary Database.

#### How can I import data to the Capillary Database?

Based on the size of the data, you can import data in two ways:

* Import directly: If the number of entries in the CSV file are less than 700,000, you can directly upload the data (.csv) file in Data Import Framework. 
* Import through an FTP server: If the number of entries in the csv file are from 700,000 to 1,000,000, you need to import data from an FTP server. For this, you need to provide read/write access to a specific directory of the FTP Server and schedule the import job on a daily, weekly or monthly basis.

#### What all data can I import through Data Import Framework?

The data corresponding to each activity type will be grouped as a category called profiles.  Data Import Framework lets you import the data of following profiles activities. 

**Customer**

* Identifier Cleanup
* Loyalty Customers
* User Subscription

**Inventory**

* Brands
* Category
* Inventory
* Inventory Updates for Line-items

**Loyalty Rewards**

* Coupon Redemption
* Lifetime Purchases Recalculation

**MLP**

* Bill Import for MLP
* Customer Program Enrollment

**Org Entities**

* Admin Users
* Attribution Lookup Import
* Concepts
* Zones
* Stores
* Store Server
* Store TILLs

**Points & Slabs**

* Bill Points Promotion (Accrual)
* Line-item Points Promotion
* Redeem Points
* Slab

**Points Deductions**

* Bill Promotion Expiry
* Customer Promotion Expiry
* Transactions Bills Deduction

**Transactions**

* Transaction Dump
* Loyalty Transactions
* Loyalty Transaction Line-items
* Transactions (Not interested)
* Transaction Line-items (Not interested)
* Extended Fields
* Transaction Returns
* Update Transactions Outlier status (Not Interested Transactions)
* Payment mode import

**Trackers**

**Promotional Rewards**

* Customer Promotion

**Scores**

* Recommendation

**Cleanup**

* Bill Amount Import

For detailed information on each profile, click the respective category link.

**Can I restrict the number of entries in an import job?**

Data Import Framework lets you limit the entries to import for each profile through templates. Create a template for the profile and set the limit. When configuring an import job, choose the desired profile template.

#### How can I check the status of a data import job?

You can check the detailed status of an import job on the Import File Details page.

#### Can I import multiple profiles data at a time?

Through direct import, you can choose only one file at a time. However, you can import multiple files at a time through FTP.

## CSV files for different profiles

Before importing data, keep the CSV files ready for each profile that you want to import. Each file should contain entries of the corresponding profile. There are mandatory and optional fields for each profile. Fields that are marked by \* are mandatory.

* A customer identifier can be a mobile number, email ID, or external ID.
* In addition to the profile fields, you can also have custom fields for your organization.
* The organization could have additional mandatory fields excluding the ones mentioned herein. For example, mandatory custom fields.
* For direct import, the number of entries in a CSV file should not exceed 7L entries and for import through FTP, the number of entries should be between 7L-10L.
* The maximum size allowed for an FTP import is 200MB. 

The following table provides the reference links for further topics 

<Table align={["left","left"]}>
  <thead>
    <tr>
      <th>
        Entity
      </th>

      <th>
        Reference Link
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Transaction Profile
      </td>

      <td>
        [Transactions](https://docs.capillarytech.com/docs/transactions-profiles)
      </td>
    </tr>

    <tr>
      <td>
        Customer Profile
      </td>

      <td>
        [Customer Profile](https://docs.capillarytech.com/docs/customer-profiles)
      </td>
    </tr>

    <tr>
      <td>
        Inventory Profiles
      </td>

      <td>
        [Inventory Profile](https://docs.capillarytech.com/docs/inventory-profiles)
      </td>
    </tr>

    <tr>
      <td>
        Org Entities
      </td>

      <td>
        [Org Entities](https://docs.capillarytech.com/docs/org-entities)
      </td>
    </tr>

    <tr>
      <td>
        Points & Slabs
      </td>

      <td>
        [Points & Slabs](https://docs.capillarytech.com/docs/points-slabs)
      </td>
    </tr>

    <tr>
      <td>
        Points Deductions
      </td>

      <td>
        [Points Deductions](https://docs.capillarytech.com/docs/points-deductions)
      </td>
    </tr>

    <tr>
      <td>
        Points Expiry
      </td>

      <td>
        [Points Expiry](https://docs.capillarytech.com/docs/point-expiry)
      </td>
    </tr>

    <tr>
      <td>
        Other Import Profiles
      </td>

      <td>
        [Other Import Profiles](https://docs.capillarytech.com/docs/other-import-profiles)
      </td>
    </tr>

    <tr>
      <td>
        Data Cleanup
      </td>

      <td>
        [Data Cleanup](https://docs.capillarytech.com/docs/data-cleanup)
      </td>
    </tr>

    <tr>
      <td>
        Target Loyalty
      </td>

      <td>
        [Target Loyalty](https://docs.capillarytech.com/docs/target-loyalty-1)
      </td>
    </tr>

    <tr>
      <td>
        Company
      </td>

      <td>
        [Company](https://docs.capillarytech.com/docs/company)
      </td>
    </tr>

    <tr>
      <td>
        View Import Jobs
      </td>

      <td>
        [View Import Jobs](https://docs.capillarytech.com/docs/view-import-jobs-1)
      </td>
    </tr>

    <tr>
      <td>
        Fetching Import Details
      </td>

      <td>
        [Fetching Import Details](https://docs.capillarytech.com/docs/fetching-import-details-by-import-id)
      </td>
    </tr>

    <tr>
      <td>
        Downloading Reports
      </td>

      <td>
        [Downloading Reports](https://docs.capillarytech.com/docs/downloading-reports-after-temp-db-import)
      </td>
    </tr>
  </tbody>
</Table>

## Configuring for directly uploading an import file

Once you create the data file required for the current import job, you can import it to the Capillary database using the 6 steps provided in the following.

The following are the important points to consider before starting with import.

\*The mentioned time period is in

* IST for APAC & APAC2 cluster
* CST for China cluster;
* GMT for EU cluster

<Table align={["left","left"]}>
  <thead>
    <tr>
      <th>
        Category
      </th>

      <th>
        Figures
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Duration for data import in the day time (Peak hours)
      </td>

      <td>
        * 6 AM - 10 PM
      </td>
    </tr>

    <tr>
      <td>
        Duration for data import in night time (FTP hours)
      </td>

      <td>
        * 10 PM - 6 AM
      </td>
    </tr>

    <tr>
      <td>
        No of records allowed in the last 24 hours by direct import
      </td>

      <td>
        200,000
      </td>
    </tr>

    <tr>
      <td>
        No of records allowed in the last 24 hours in the day time (Peak hours) day FTP import
      </td>

      <td>
        200,000
      </td>
    </tr>

    <tr>
      <td>
        No of records allowed in last 24 hours in night time (FTP hours) by FTP import
      </td>

      <td>
        1,000,000
      </td>
    </tr>

    <tr>
      <td>
        Maximum size of a single file (in MB)
      </td>

      <td>
        200 MB
      </td>
    </tr>
  </tbody>
</Table>

#### Step 1: Create data file (.csv)

First, create a CSV file based on the purpose of the import. Each purpose is associated with a different profile. For example, register customers, add transactions, issue points, add inventory, and so on. You need to create CSV files according to profiles.

* Before uploading the file, ensure that no invalid entries are present in the file.  To make this process easy, sort columns by mobile number and transaction date wherever applicable

To know more about different fields supported for each profile, see Profiles, Supported Fields, and Template Configuration.

#### Step 2: Upload the CSV file

Once you create a file, upload it via. Import Framework.

1. On the Settings page, click Master Data Management > Data Import
2. Click Data Import. You will see the following page

![616](https://files.readme.io/7530294-upload_csv.jpg "upload csv.jpg")

In the **Direct Upload** field, do the following

3. In **Upload data csv,** choose the CSV file that you want to import

4. In the **No. of rows to be ignored from top**, set the number of rows from the top that you want to exclude from importing.\
   For example, if number 2 is set in this field then while uploading data to the server the top two rows will not be considered. This can be used when there are field names, duplicate data or blank data in the top rows

5. In **No. of rows to be ignored from bottom**, set the number of rows from the bottom that you want to exclude from importing\
   For example, if 15 is set, then while importing the last 15 rows will be ignored. You can set this option in case of duplicate/blank/invalid entries in the last rows of the CSV file.

6. In **File Delimiter**,  type in the character used to separate each value in the file\
   For example, a file can have either ',' separated or 'tab' separated or ';' separated values. If ','  is mentioned then values will be separated after every , found in the file.

7. In **Enclosure**, type the special character used in the file for 'string' data types

8. In **Escape Character**, type in the special character that needs to be ignored from the file

9. Click Submit.\
   You will see the following page. Proceed with the configuration steps provided below.

![1353](https://files.readme.io/d60b0fa-submit.png "submit.png")

#### Step 3: Choose the respective profile and create template

Based on the type of data, choose the profile name. create a new template for the profile or use an existing template. A profile template stores the Template Configurations set and lets you reuse whenever required instead of creating a new template every time.

**To choose from the existing templates,\&#xA;**

* In **Choose Profile**, select the profile based on the data that you are uploading. For more information on profiles, see Profiles, Supported Fields, and Template Configuration
* In **Choose Template**, select the template that you want to use for the current import
* Click **Submit**

**To create a new template**

* Check **Create new template box.**
* In the **Name of the template**, type a name for the new template
* Click **Submit.**

![447](https://files.readme.io/a30a26a-step_3.png "step 3.png")

#### Step 4: Configure the Profile Template

The options vary based on the profile chosen. Configure the profile template as explained in Profiles, Supported Fields, and Template Configuration and click **Submit**

![458](https://files.readme.io/2c96109-step4.png "step4.png")

#### Step 5: Map each field with the respective column of the CSV file (Field Mapping)

Map each field with the respective column names of the CSV file and click Submit. Fields that are marked with \* are mandatory. 

![961](https://files.readme.io/1ba65a8-step5.png "step5.png")

**\* Not Null**\
If you do not want to allow saving null values for a field, check this box. It will ignore the entries with null values for that specific field while importing.

* **Data Transformer & Transformer Inputs**\
  This option is used to modify the existing data in a column automatically by making use of the functions and other configurations.

There are four types of data transformers as mentioned in the following table.

<Table align={["left","left"]}>
  <thead>
    <tr>
      <th>
        Data Transformers
      </th>

      <th>
        Description
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Merge
      </td>

      <td>
        Merges the values of two or more columns to a single field. Write the merge function in the **Transformer Inputs** box.\
        Columns=>x,y,z or Columns=>2,3,4;Separator=>\[] where x, y and z are column numbers.\
        For example, if Column=>1,2,3 is set then the text in the columns 1, 2, 3 will be merged to a single field separating each column with a comma (,), a default value.\
        You can set any delimiter for merging two or more columns using the Separator=> function.\
        For example, if Column=>1,2,3;Separator=>; is set in **Transformer Inputs**, the columns 1, 2 and 3 will be merged separating the value of each column with a semicolon. 
      </td>
    </tr>

    <tr>
      <td>
        Default Value
      </td>

      <td>
        Replaces null values present in the column with a value specified in Transformer Inputs.\
        Value=>[Any Value].\
        For example, if Value=>store.server is set in **Transformer Inputs**, all null values identified in the column will be replaced with 'store.server'
      </td>
    </tr>

    <tr>
      <td>
        Convert to Date & Time
      </td>

      <td>
        Changes the date and time format across the column. This is applicable only to the columns with date and time.\
        Set the standard date and time format in the **Transformer Inputs**box.\
        **Date parameters**

        * d - Day of the month (1-31)
        * m - Month (1-12)
        * Y - Year in four digits (example: 2013)
        * y: Year (13)\
          **Time Parameters**
        * H: Hours (24hr format)
        * s: Seconds
        * h: 12 hour format(1-12)
        * i: Minutes (00 - 60)\
          The parameters of date and time format can be used in any order. For example, date can be set as d/m/Y or m/d/Y or Y/m/d. However, it is recommended to use the standard date and time format of the organization.
      </td>
    </tr>

    <tr>
      <td>
        Expression
      </td>

      <td>
        This function lets you apply some mathematical calculations on two or more columns.\
        Exp=>\{Column no. of A} \{+ or - or *or /} \{Column no. of B}\
        For example, if the expression is set to Exp=>\{1}\{2}-10,\
        All null values of that column will be replaced with - (value of that field will be (value of column 1) * (value of column2) - 10).\
        You can use this function only on columns with integer values but not for string data types.
      </td>
    </tr>
  </tbody>
</Table>

*Note:*

* If the date format in the file is in the form YYYY-MM-DD hh:ii:ss, then date formatting is not required.
* Select **Not Null** only for the fields that are not supposed to be empty. If any null values are identified for those particular fields, an error report will be generated with the entire list of null values.
* Options for each configuration varies based on the org and profile selected
* Apart from the standard fields, you can also import custom fields and map with the respective column of the CSV file. However, no validation is performed on custom fields. 

#### Step 6: Import data to the local database

Once submitting the configurations and field mappings you will see the preview of the import jobs. Any errors identified in the import file will be highlighted in red.

To import data to the temporary database, scroll down to the **Import to Temporary DB** field and click **Submit** 

![232](https://files.readme.io/676f95b-step6.jpg "step6.jpg")

*Note:*

* The import process consumes time depending on the size of the data
* To cancel an import job at any point, click Cancel File Import 

#### Step 7: Import data to the main database

Once the data is imported into the local database, you will see an option to import it to the main database.

![175](https://files.readme.io/6d190ad-step7.jpg "step7.jpg")

Once the data is imported to the temporary database, you will see an option to import data to the main database.

* Check **Import to the Database** checkbox
* Click \* *Submit* 

*Note:*

* The *Preview File* Details table shows the file name, number of entries, file properties, profile configured and template assigned
* The *Error Summary* table shows the error type and error count.
* The *Auto Correction Summary* table shows the corrections performed and the count
* The *Download Reports* table lets you download various reports such as auto-corrected data, error data, temp table dump, and new customers data. Click on the respective **Download Report** link to download the report
* At any point to cancel the data import, in the Cancel File Import field check the respective option and click \* *Submit* 

## Configuring for importing from an FTP location

Whenever an import job is performed, only new records will be updated to the main database.

The following are the important points to consider before starting with import.

\*The mentioned time period is in 

* IST for APAC and APAC2 cluster 
* CST for China cluster
* GMT for EU cluster

<Table align={["left","left"]}>
  <thead>
    <tr>
      <th>
        Factors
      </th>

      <th>
        Figures
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Duration for data import in the day time (Peak hours)
      </td>

      <td>
        * 6 AM - 10 PM
      </td>
    </tr>

    <tr>
      <td>
        Duration for data import in night time (FTP hours)
      </td>

      <td>
        * 10 PM - 6 AM
      </td>
    </tr>

    <tr>
      <td>
        No of records allowed in the last 24 hours by direct import
      </td>

      <td>
        200,000
      </td>
    </tr>

    <tr>
      <td>
        No of records allowed in the last 24 hours in the day time (Peak hours) day FTP import
      </td>

      <td>
        200,000
      </td>
    </tr>

    <tr>
      <td>
        No of records allowed in last 24 hours in night time (FTP hours) by FTP import
      </td>

      <td>
        1,000,000
      </td>
    </tr>

    <tr>
      <td>
        Maximum size of a single file (in MB)
      </td>

      <td>
        200 MB
      </td>
    </tr>
  </tbody>
</Table>

The configuration of the Data Import job includes the following general steps:

* Identify the data that you want to import from the system 
* Clean up the data in the system to reduce the idle processing time while importing. This involves deleting previous records and removing blank/invalid/duplicate records
* Create and configure templates for each profile that you want to import 
* Create different folders for each profile type in the FTP server
* Copy data files of each profile to the respective folder of the FTP server. For example, registration data in Registration folder, points redemption data in the Points Redeem folder and so on
* Map the fields in the database to the respective column names of the CSV file
* Perform a trial import for each profile type
* Perform the actual import job

The following sections guide you on how to configure an import job for large data. 

#### Step 1: Select the job type as FTP

* On the Settings page, click Master Data Management > Data Import.
* Click Configure Data Upload via. FTP 

#### Step 2: Configure the Source FTP Server

Provide read/write access to the FTP server from where the data needs to be imported. Select all profiles that you want to import through the current import job.

![332](https://files.readme.io/5b3c786-step2ftp.png "step2ftp.png")

* Check **Enable SFTP** if your FTP server is a secure FTP server. Skip this step for a normal FTP Server
* In **FTP Server Name**, enter the URL of the source FTP server  
* In the **Username and Password boxes,** type the login credentials of the FTP server
* In Folder Name, type the directory in the FTP server from where the data needs to be uploaded. For example, /import
* In **Proceeded Folder Name**, specify the name of the processed data folder 
* Click **Submit** to save the configuration.
* It is recommended to save the data of each type (profile) in different folders.
* To create folders on the FTP server for each profile, check the respective checkboxes in **Configure Folders for FTP Server** field.

You will see the following screen.

#### Step 3: Set up for data processing

![343](https://files.readme.io/e9594fe-step3ftp.png "step3ftp.png")

* In the **No. of rows to be ignored from top**, set the number of rows from the top that you want to exclude from importing. For example, if number 2 is set in this field then while uploading data to the server the top two rows will not be considered. This can be used when there are field names, duplicate data or blank data in the top rows
* In **No. of rows to be ignored from bottom**, set the number of rows from the bottom that you want to exclude from importing. For example, if 15 is set, then while importing the last 15 rows will be ignored. You can set this option in case of duplicate/blank/invalid entries in the last rows of the CSV file.
* In **File Delimiter**,  type in the character used to separate each value in the file. For example, a file can have either ',' separated or 'tab' separated or ';' separated values. If ','  is mentioned then values will be separated after every ',' found in the file.
* In **Enclosure**, type the special character used in the file for 'string' data types
* In **Escape Character**, type in the special character that needs to be ignored from the file
* Click **Submit** 

#### Step 4: Choose templates for each data model(Profile)

![498](https://files.readme.io/e474837-step4ftp.png "step4ftp.png")

In the **Configure Templates for Data Upload** field, choose the desired template for each profile and click **Submit**.

#### Step 5: Schedule the import job

As the data size is large, it is recommended to schedule an import job in between 10 pm to 6 am to avoid inconvenience to your stores' operations.

![907](https://files.readme.io/a69b3e9-step5ftp.png "step5ftp.png")

* In **Status**, choose Running
* In **Check for Files**, choose the frequency of import - Daily, Weekly, Monthly or on a Fixed Date and set the respective time interval. For a fixed date schedule, set the date on which you want to schedule the import 
* In **Email ids to be notified**, enter email ids separating each with a comma to notify about the status updates the import job. The selected recipients are notified through email when files are queued up for importing, data is imported into the temporary database, data is successfully imported to the main database, and when import failed due to some error. 

## Configure notifications for import jobs

The Data Import Framework lets you (InTouch users) subscribe your mobile number/email id for the status notifications related to import jobs. You can subscribe to receive profile level status notifications. You can also choose stages of an import job from which you wanted to receive notifications. For example, when data is imported into a temporary database, data import failed, data validation failed, data import job complete and so on. 

The status updates of the data import can be subscribed to an email id or mobile number.

**To subscribe for data exchange notifications**

* In **Data Import**, click **Notification Subscription**
* In the **Subscribe** for the drop-down box, choose **All Profiles** to subscribe for status notifications of all profiles or choose Select Profiles to add selected profiles. 

![900](https://files.readme.io/1d45578-notif.png "notif.png")

* In the **Subscription Emails**, enter email ids of recipients receive status notifications. To enter multiple recipients, separate each email id with a comma (,).
* In the **Subscription Mobiles**, enter mobile number of the recipients with country code. To enter multiple recipients, separate each number with a comma (,). 
* Set the subscription duration for receiving notifications in **Subscribed from** and **Subscribed upto** boxes.
* In the **For Stages** selection box, select from the various available stages and click add>>. Recipients will be notified of status updates for these stages. All the selected stages will appear on the right-hand side box.
* Click **Submit**. 

*Note:*

* To remove any added notification stage, select the stage on the right box and click \<\<remove.
* Mobile numbers should be entered with country code. 

## Field Validations for Customer/Transaction data

When you import data to the local database, you will see the list of errors, auto corrections, and download report option. You can download the entire report. The following table provides the list of errors that frequently occur during an import job for customer and transaction profiles.

**Customer Profile** 

<Table align={["left","left"]}>
  <thead>
    <tr>
      <th>
        Error
      </th>

      <th>
        Explanation
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        When different users are linked with the email
      </td>

      <td>
        Email is already present for some other registered user in the system
      </td>
    </tr>

    <tr>
      <td>
        When an error on duplicate external id occurs
      </td>

      <td>
        All records would be rejected
      </td>
    </tr>

    <tr>
      <td>
        When an error on duplicate value for mobile in the file occurs
      </td>

      <td>
        All records would be rejected
      </td>
    </tr>

    <tr>
      <td>
        When an error on duplicate value for external\_id in the file occurs
      </td>

      <td>
        All records would be rejected
      </td>
    </tr>

    <tr>
      <td>
        When an error on duplicate value for email in the file occurs
      </td>

      <td>
        All records would be rejected
      </td>
    </tr>

    <tr>
      <td>
        When different user is linked with the mobile
      </td>

      <td>
        Mobile number is already registered for a different user in the system
      </td>
    </tr>

    <tr>
      <td>
        When different mobile is linked with the users
      </td>

      <td>
        Since mobile number is not allowed to update though import, trying to update an existing mobile for a user leads to such error
      </td>
    </tr>

    <tr>
      <td>
        Invalid Mobile Number
      </td>

      <td>
        Check the pre-configured mobile regex for brand
      </td>
    </tr>

    <tr>
      <td>
        When different user gets linked with the external id, duplicate value for mobile in file, duplicate value for email in file occurs
      </td>

      <td>
        External ID / Card number is already registered for a different user
      </td>
    </tr>

    <tr>
      <td>
        Invalid email id
      </td>

      <td>
        Deviation from standard Email regex
      </td>
    </tr>

    <tr>
      <td>
        Deactivated user / Fraud User
      </td>

      <td>
        The user is inactive or marked as fraud (as per brand requirement)
      </td>
    </tr>

    <tr>
      <td>
        When customer name contains special characters
      </td>

      <td>
        Customer Name should not contain any special characters other than alphabets/space
      </td>
    </tr>

    <tr>
      <td>
        join\_date is invalid/null/void/of future date
      </td>

      <td>
        Invalid join date
      </td>
    </tr>

    <tr>
      <td>
        join\_store is invalid/null/void
      </td>

      <td>
        The store(s) specified in the file are not present in the system
      </td>
    </tr>
  </tbody>
</Table>

**Transaction Profile** 

<Table align={["left","left"]}>
  <thead>
    <tr>
      <th>
        Error
      </th>

      <th>
        Explanation
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Bill\_date is invalid/null/void/of future date
      </td>

      <td>
        Invalid bill date
      </td>
    </tr>

    <tr>
      <td>
        Bill\_store is invalid/null/void
      </td>

      <td>
        The stores linked are not present in the system
      </td>
    </tr>

    <tr>
      <td>
        bill\_number repeating within X days
      </td>

      <td>
        X is a number between 0 and 365 (that is configurable). It decides how often a bill\_number is repeatable on the same store.\
        For eg, X=5, it means bill\_number B1 cannot repeat on store S1 for at least 5 days.\
        bill\_discount > bill\_gross\_value
      </td>
    </tr>

    <tr>
      <td>
        Bill Duplicate within File
      </td>

      <td>
        This means same bill\_no, bill\_date, billing\_store are repeating within the import file
      </td>
    </tr>

    <tr>
      <td>
        Bill Duplicate within database
      </td>

      <td>
        This means same bill\_no, bill\_date, billing\_store are already present in system (Loyalty / Non-Loyalty)
      </td>
    </tr>

    <tr>
      <td>
        User Not Registered
      </td>

      <td>
        The user linked to bill is not registered in the system
      </td>
    </tr>
  </tbody>
</Table>
