---
title: Reset Password Using Import
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
To reset the passwords for admin users on respective Org, perform the following:

1. From the Organization settings, navigate to **Master Data Management** > **Data Import** > **Import**profile, and upload the CSV file containing users for password reset. 
2. Click **Submit**.

![7990a93 Upload CSV](https://files.readme.io/7990a93-Upload_CSV.png)

3. From the **Choose profile** drop-down, select **AdminUsers**.  
4. Select a template for the mapping from the **Choose template** drop-down or select the **Create new template** check box to create a new template.
5. Select **Submit**.
6. In the **Configure Template**, select **password** and select **add**

![be052a9 Set up import](https://files.readme.io/be052a9-Set_up_import.png)

7. Select the appropriate column from the CSV file for each necessary field and configure the field mappings for resetting passwords. For example, from the **Username(Email)** drop-down, select the column name that has the customer's email information.
8. Select **Submit**.

### Sample CSV for Password Reset user's

The password must contain:

* At least one uppercase letter (CAPS).
* At least one numeric character.
* At least one special character.
* A minimum of 9 characters long.

![be542c0 Screenshot 35](https://files.readme.io/be542c0-Screenshot_35.png)
