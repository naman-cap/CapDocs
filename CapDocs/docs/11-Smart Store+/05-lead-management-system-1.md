---
title: Lead management system
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
Lead Management System (LMS) is a set of procedures and practices that are designed by organizations to generate new potential business clientele. LMS is commonly operated through a variety of marketing campaigns or programs. 

Following are the key benefits of using LMS:

* Tracks the customer throughout the purchase life cycle

* Track leads by different statuses hot, warm, cold and takes appropriate action

* Get reminders to follow-ups with leads

* Reassign leads to other store associates

* Capture leads at the product variant level

* Retarget leads via campaigns depending on the status

* Detailed dashboard to check the performance of Stores and Store associates

* Lead tracking at different levels ( area, store, zone, CA)

* Open APIs to add leads into the system from anywhere eg. websites, campaigns

* Configurable User and Role Management

***

1. LMS is managed with five(5) User Levels:\
   Super Admin>Organization>Area Manager>Store Manager>Store Associate

2. Add a new user or deactivate a user easily

3. Assign and restrict roles ( eg. download lead, reassign lead) to use level

On logging in, the LMS dashboard appears:

![1c2727a LMS image 1](https://files.readme.io/1c2727a-LMS_image_1.png)

***

The LMS Dashboard gives an overview of the following:

* It provides Lead activity notification to store associates
* It helps to see  Lead Conversion Funnel
* It provides missed follow up report to Store associates at store levels 

![7ceaae8 LMS Image 2](https://files.readme.io/7ceaae8-LMS_Image_2.png)

On the left panel, if you click on All Leads, the above page appears. 

In this page, you can do the following:

* Download list for analysis/campaign
* Pending leads can be reassigned to another Customer Associate
* Leads can be searched using mobile number and name
* Creating a New Lead

On the left panel, click on Add New Lead. 

The following page appears:

![a06577d LMS Image 3](https://files.readme.io/a06577d-LMS_Image_3.png)

![f2db3f3 LMS Image 4](https://files.readme.io/f2db3f3-LMS_Image_4.png)

Find below the following steps to Create a Lead:

* Create a lead when a potential customer walks into the store
* A lead is automatically assigned to the person creating the lead
* Store Managers can reassign lead to another Customer Associate
* Store/Area Managers can download leads for analysis
* Dedicated API to add a new lead in any store from any source(website, campaigns, forums)

***

### Today's Follow Up

On the left panel, click on Today's Follow Up, following screen appears:

![0d6d462 LMS Image 5](https://files.readme.io/0d6d462-LMS_Image_5.png)

In the Today's Follow Up page, you can do/see the following:

1. Section to show all follow ups for given date
2. Makes it easy for the customer and store associates to plan

**Detailed User Management\&#xA;**\
Find below step by step guide that will explain the process of creation of users and entities for the LMS application.

***

#### Super Admin Tasks

* **Create another Super Admin (optional):** Login to LMS application with Super Admin credential>Click on Username>Select Manage Users>Add User>Enter details and create a Super Admin

* **Create a Partner:** Login to LMS application with Super Admin credential>Click on Username>Select Manage Users>Add User>Enter details and create a Partner

* **Create a Partner Admin:** Login to LMS application with Super Admin credential>Click on Username>Select Manage Users>Add User>Enter details and create a Partner Admin

For further Partner related entity creation, you need to log in as the **Partner Admin** for the particular partner and proceed.

***

#### Partner Configuration(Manual Process)

If you need to apply a specific configuration to a **Partner**, this can be achieved by creating a **Partner folder** under the **Configuration Directory**. Each of these folders will hold configuration for a particular partner in the *LMS config.*&#x70;roperties file. By default, two(2) files are present in the configuration directory.

***LMSConfig*.**&#x70;roperties: Contains the default SMTP configuration and default demo status. If you would like to provide specific configuration values for a given partner, you will have to create a folder under the config directory and enter the mapping in the *LMS partners.*&#x70;roperties file.  

***LMSPartners*.**&#x70;roperties: Contains the mapping of partner id with the folder name that contains the configuration for that partner. For example:\
partner.id.name.1=Apple\
partner.id.name.2=Croma\
Here, the Partner ID of 1 (this can be obtained from the **‘Manage Partners’** listing page of LMS) is mapped to Apple folder that contains the configuration information for the configuration directory.

***

#### Partner Admin Tasks

The Partner Admin can login to the LMS application with partner admin credential. After login, click on Settings on the right-hand side of the panel. 

On clicking, the following page appears:  

![3f8c223 LMS Image 6](https://files.readme.io/3f8c223-LMS_Image_6.png)

The Partner Admin can now create the following:

**Create an Area:** Select **Manage Areas>Add New Area>Enter details** and **Create an Area**

**Create Store(s):** Select on **Manage Stores>Add New Store>Enter details** and **Create a Store**. While adding a new store, fields marked in \* needs to be filled. 

See figure below for clarity:

![87b9cb0 LMS Image 7](https://files.readme.io/87b9cb0-LMS_Image_7.png)

**Create Product Categories Specific to the Partner:** Select **Manage Product Categories >Add New Product Category>Enter details** and **Create a Product Category**

**Add Brand:** Select **Manage Product Brands>Add New Product Brand>Enter details** and **Create a Product Brand**

**Add Product(s) based on Product Category and Brand:** Select **Manage Products>Add New Product>Select a Category>Enter details** and **Create Products**. 

See figure below for more clarity:

![1368](https://files.readme.io/c7f669e-LMS_Image_8.png "LMS Image 8.png")

**Create/Manage/Add Users:** The partner admin can create an Area Manager, Store Managers, and Customer Associate.

* **Create an Area Manager:** Select **Manage Users>Add New User>enter details** and **Create an Area Manager**
* **Create Store Manager(s):** Select **Manage User>Add User>enter details** and **Create a Store Manager**
* **Create a Customer Associate**: Select **Manage User>Add User>enter details** and **Create a Customer Associate**

**Manage Privileges:** Select **Manage Privileges>Select User** and **Manage Privileges**. 

See figures below:

![1349](https://files.readme.io/7e512ae-LMS_Image_9.png "LMS Image 9.png")

***

**Role of Area Admin**

> 1. Partner Admin can delegate his set of tasks to Area Admin by assigning the right privileges to the Area Admin.
> 2. Area Admin cannot create a Partner or Areas but can create entities under him.

**Role of Store Managers**

> 1. Store Manager can create Customer Associates
> 2. Store Manager can also create and view his leads.
> 3. He does not hold any other administration rights by default.

**Role of Customer Associates**

> 1. Customer Associate can create and view his leads.
> 2. He does not hold any other administration rights by default.

Once, task/role is created by the Partner Admin, they can view **Dashboards & Reports** on the Home page. They can also see there as well as others **Lead** depending on the hierarchy. Leads can also be downloaded.

![1332](https://files.readme.io/d844826-LMS_Image_10.png "LMS Image 10.png")

![1350](https://files.readme.io/d4b13cf-LMS_Image_11.png "LMS Image 11.png")

#### Changing Password

All users can change the password. Login to application with your **Credential>Click on Username>Select Manage Password>Change the Password\&#xA;**

***

#### Current LMS Limitations

Currently, LMS has the following limitations:

* Mobile Version of LMS is not available

* Cannot send SMS/Email to leads from LMS

* Not yet integrated with CRM

* Cannot reassign leads across stores-limited within store

* Lead follow up alert as an SMS/email notification to customer associates

* Lead scoring based on lead's response

* Automatic Closure of lead upon sale-currently CA(Customer Associate) gets a sale notification and he can decide whether to close the lead or not