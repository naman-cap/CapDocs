---
title: Custom Field Information for Badges
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
# Overview

To create a flexible badges platform, it is important to give brands the ability to include additional, custom information when creating badges. This custom data can be used for various purposes such as displaying personalized information within the app or website, and for accounting or reporting purposes.\
Additionally, this custom data can also help brands to track and analyze the performance of their badges, and make data-driven decisions to improve their badges strategy. Furthermore, the ability to include custom data can also help brands to comply with legal and regulatory requirements, and to report on the performance of the badges to stakeholders.

# Usecase

A retail brand aims to establish a badges platform to reward loyal customers and foster engagement through their mobile app. To personalize the badge experience, the brand intends to display custom information associated with each badge earned by users. To implement this the brand can perform the following:

1. Create a custom field named "Terms & Conditions" with the data type set as STRING.
2. Create a badge and assign this custom field "Terms & Conditions," ensuring to populate it with relevant information.

When a customer earns the badge, it will be showcased along with the "Terms & Conditions" field, providing users with pertinent details about the badge. Examples of custom field content may include terms and conditions, redemption instructions, brief descriptions, legal text, exclusivity status, purpose, etc.

# Notes

1. Custom fields can be created, updated, or disabled.
2. There can be only one active custom field with the same name. If the existing custom field is disabled, then a new custom field with the same name can be created.
3. It is mandatory to define the default value for a custom field which is mandatory for the badge. In case a badge doesn't define a mandatory custom field with it, the default value will be considered.
4. Data types supported in custom fields: boolean, integer, string, and date.
5. Once the custom field is disabled, it can't be enabled again.
6. Only active custom fields will be returned in all the getcalls.
7. Only below fields can be updated while updating the custom field:
   1. Name : can be updated
   2. Isactive : can be updated from true to false but false to true is not allowed
   3. Default value can be updated
   4. Ismandatory can be updated from true to false or false to true
   5. Data type can’t be updated
8. There is no limit on the number of custom fields that can be defined at an org level for badges.

![6a22100 image1](https://files.readme.io/6a22100-image1.png)

# Creating Custom Fields from Badges UI

1. Start by navigating to the badges UI and go to **Settings**.

![4a9ee9d5fda635e785e91967fd51ddd4a633a4e4b804025a6046c99e758423b8 image](https://files.readme.io/4a9ee9d5fda635e785e91967fd51ddd4a633a4e4b804025a6046c99e758423b8-image.png)

2. Select the option to **Create Custom field**.

![ae823c828d3a86dbb89fe3107511b31921fa8343415deff5f02d2aaeb6db2ec2 image](https://files.readme.io/ae823c828d3a86dbb89fe3107511b31921fa8343415deff5f02d2aaeb6db2ec2-image.png)

3. In the **Name** field, enter a name for the custom field and from the **Data type** drop-down, select the appropriate data type. The supported data types are Boolean, Date, Number and String. There is no limit set on the number of characters. 

![6858b307265708c1c3dc4123f411039601c4750f04cfed6add3db4d7b6e79dcf image](https://files.readme.io/6858b307265708c1c3dc4123f411039601c4750f04cfed6add3db4d7b6e79dcf-image.png)

![855e547eaa7d50e6ab8897b6fdb93699fcee0498b5c88f7bf5f3022bc8c79a65 image](https://files.readme.io/855e547eaa7d50e6ab8897b6fdb93699fcee0498b5c88f7bf5f3022bc8c79a65-image.png)

![0337520031a72751cb8efe8c904efcc680a642d076bb477f88f896ac8a9d5271 image](https://files.readme.io/0337520031a72751cb8efe8c904efcc680a642d076bb477f88f896ac8a9d5271-image.png)

![64484dc0b3487868fec801f89813687aadb1a819c4e3566b01fde73aabdc6c8c image](https://files.readme.io/64484dc0b3487868fec801f89813687aadb1a819c4e3566b01fde73aabdc6c8c-image.png)

4. To set the custom field to mandatory, set it to Yes. When a custom field is set to mandatory, it is linked to the Badges and will be part of the creation process.

![58a25a3bd53eeb70d9faef84bb5e86e301f93dcdab6a620e14977a7dab16625b image](https://files.readme.io/58a25a3bd53eeb70d9faef84bb5e86e301f93dcdab6a620e14977a7dab16625b-image.png)

5. Click **Done** to finish creating the custom field.

The custom field is now successfully created.

## Editing a custom field

1. Custom field can be edited by clicking on the **Edit** option.

![b41280609f2769f91192369a8052cfe206d0e046975ad4a00b88c8a104421639 image](https://files.readme.io/b41280609f2769f91192369a8052cfe206d0e046975ad4a00b88c8a104421639-image.png)

2. Make the required changes. 

   ![8b6c56f059432106e1f6f599159418758509318e1e6c74c76cb9880e2dbb8994 image](https://files.readme.io/8b6c56f059432106e1f6f599159418758509318e1e6c74c76cb9880e2dbb8994-image.png)

<Note title="Note">
s
* When a mandatory field is changed to optional, it will be unlinked from all badges that previously relied on it. This means the field will no longer be required for those badges, and any validation or functionality tied to it will be removed.
* The data type cannot be changed in edit mode.
</Note>

## Verify the creation of a custom field

1. To verify the addition of the custom field, return to the badges UI and hover over **New badges** to see the option to **Create a badge**. Click on it.

![86468bb2b3a513363e5a535680e0cfab1903b1435f8d364c5e2404e529b93b98 image](https://files.readme.io/86468bb2b3a513363e5a535680e0cfab1903b1435f8d364c5e2404e529b93b98-image.png)

2. Enter the necessary information to create a badge and click **Next**.
3. Select the owner of the badge. 
4. Scroll down to see the mandatory custom fields under the **Custom fields**section. The custom fields that were created as non-mandatory are available as a selection. 

![d39abf09ef08f2c4e05762d3f8cb5b245a75aa746054382949388c7f86490965 Step by Step Instructions](https://files.readme.io/d39abf09ef08f2c4e05762d3f8cb5b245a75aa746054382949388c7f86490965-Step-by-Step_Instructions.gif)

# Creating custom fields for badges using APIs

**For more information on the APIs related to custom fields for badges, check the below links:**

* [Create custom field](https://docs.capillarytech.com/reference/create-custom-field)
* [Update custom field](https://docs.capillarytech.com/reference/update-custom-field-badge)
* [Get custom field by id](https://docs.capillarytech.com/reference/get-custom-field-by-id)
* [Get all custom fields](https://docs.capillarytech.com/reference/get-all-custom-fields)
* [Add custom field while creating badges](https://docs.capillarytech.com/reference/create-badges-org)
* [Add custom field while updating badges](https://docs.capillarytech.com/reference/update-badges)
* [Get badge by id](https://docs.capillarytech.com/reference/get-badge-by-id)
* [Get all badges](https://docs.capillarytech.com/reference/get-all-badges)
* [Get customer badges](https://docs.capillarytech.com/reference/get-badges-for-customer)
