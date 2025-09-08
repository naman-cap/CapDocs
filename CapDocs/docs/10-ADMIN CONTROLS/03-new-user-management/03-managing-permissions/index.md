---
title: Managing Permissions for the Users
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
A permission defines the specific actions a user can perform within the system. Permissions control access to various features and functionalities, determining what users can view, edit, create, or delete. Each user is assigned a set of permissions based on their role and responsibilities. These permissions are configured during user creation and are assigned based on the user type (Organization Owner, Admin, or Standard User). These can be modified as needed. Examples of permissions include Viewing user profiles, Editing user details, Managing permission for users etc.

# Permission Sets

A permission set is a collection of access rights that defines what actions a user can perform within each modules such as Loyalty, Campaign, User Management etc.. Permission sets can be either standard (pre-defined) or custom (user-defined).

## Types of Permission Sets

### Standard Permission Sets

Standard permission sets are predefined in the system, designed with common module-related permissions in mind, and are available across all organisations. Users cannot delete or modify these sets. Any changes, such as introducing new permissions, can only be made by the Capillary technical team. For information on the list of standard permission sets available, refer to the documentation [here](https://docs.capillarytech.com/docs/managing-permissions#list-of-standard-permissions).

### Custom Permission Sets

Custom permission sets can be created by only Org Owners, combining permissions from different modules to meet specific organizational needs. These custom sets are only available within the organization where they are created.\
Org Owners have full control over custom permission sets, including the ability to update, delete, and modify them. The number of custom permission sets you can create is limited to 20, but you can raise a JIRA request with the platform UI team and increase it based on the request. For more information on the custom permission set, refer to the detailed documentation [here](https://docs.capillarytech.com/docs/managing-permissions#custom-permission-sets-1).

### Viewing Permission Sets

Go to **User Management** > **Permission Sets** to view the available permission sets. You can filter the permission sets by module using the **Category** drop-down menu.

![dd4326d159ec9cafa501d16408b885748e6b725b6aa023e4ec001a1c210b1297 image](https://files.readme.io/dd4326d159ec9cafa501d16408b885748e6b725b6aa023e4ec001a1c210b1297-image.png)