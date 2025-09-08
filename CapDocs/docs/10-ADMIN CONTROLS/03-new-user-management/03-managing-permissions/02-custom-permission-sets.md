---
title: Manage Custom Permission Sets
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
Custom permission sets can be created only by organisation owners.

# List of Configurable Permissions


The tables below provide information on the permissions that you can configure for each module when creating a custom permission set. The permissions that do not have a tick mark are the actions that are not available in the permissions. 

### Campaign Permissions


| Modules  | **Sub Modules** | View | **Create** | Edit | Approval |
| -------- | :-------------- | :--- | ---------- | :--- | :------- |
| Campaign |                 | ✔    | ✔          | ✔    | ✔        |
|          | Workflow        | ✔    | ✔          |      | ✔        |
|          | Messages        |      | ✔          |      | ✔        |
|          | Incentive       | ✔    | ✔          |      | ✔        |
|          | Audience        | ✔    |            |      |          |
|          | Report          | ✔    |            |      |          |
|          | Creatives       | ✔    |            |      |          |
|          | Config          |      |            | ✔    |          |
| Journeys |                 |      |            |      |          |

### Loyalty+ Permissions


| **Modules** | **View** | **Create** |
| ----------- | -------- | ---------- |
| Basic       | ✔        |            |
| Program     |          | ✔          |
| Promotion   |          | ✔          |

### Member Care Permissions


| **Modules** | **Sub Modules**                | **View** | **Create** | **Edit** | **Delete** | **Approval** |
| ----------- | ------------------------------ | -------- | ---------- | -------- | ---------- | ------------ |
| Customer    |                                | ✔        | ✔          | ✔        | ✔          | ✔            |
|             | Customer Profile               | ✔        | ✔          | ✔        | ✔          |              |
|             | Customer PII                   | ✔        | ✔          |          |            | ✔            |
|             | Customer Retro Transaction     | ✔        | ✔          |          |            | ✔            |
|             | Customer Cards                 |          | ✔          |          |            |              |
|             | Customer Goodwill              | ✔        |            |          |            |              |
|             | Customer Group                 | ✔        |            |          |            |              |
| Requests    |                                | ✔        | ✔          |          |            | ✔            |
|             | Requests Goodwill Points       | ✔        | ✔          |          |            | ✔            |
|             | Requests Goodwill Coupons      | ✔        | ✔          |          |            | ✔            |
|             | Requests ID Change             | ✔        | ✔          |          |            | ✔            |
|             | Requests ID Reallocation/Merge | ✔        |            |          |            |              |
|             | Requests PII Deletion          |          |            |          |            |              |
|             | Requests Cards                 |          |            |          |            |              |
|             | Requests Retro Transaction     |          |            |          |            |              |
|             | Requests Transaction           | ✔        | ✔          | ✔        | ✔          | ✔            |
| Group       |                                | ✔        | ✔          |          |            | ✔            |
|             | Group Goodwill                 | ✔        | ✔          |          |            | ✔            |
|             | Group Transactions             |          |            |          |            |              |

### Insights+ Permissions


| **Modules** | **View** | **Create** |
| ----------- | -------- | ---------- |
| Reports     | ✔        | ✔          |
| Segments    | ✔        |            |
| Export      | ✔        |            |
| Settings    | ✔        |            |

# Creating a Custom Permission Set


To create permission sets, perform the following:

1. Click **Create permission set**.

![ 75%](https://usercontent.clueso.io/64d06f10-2e0e-40ec-b636-a868315fe5a6/89ec4425-e73d-4fbf-aec4-fa2ee10793f4/acb0a7f8-ef60-4e6c-9a5b-7bb84b846ea6/images/284c24c2-56b0-41e0-8bec-3bc76df38806.png)

2. Enter the **Permission set name** and **Description** for the permission set.

![ 75%](https://usercontent.clueso.io/64d06f10-2e0e-40ec-b636-a868315fe5a6/89ec4425-e73d-4fbf-aec4-fa2ee10793f4/acb0a7f8-ef60-4e6c-9a5b-7bb84b846ea6/images/9ff3d87f-ff63-4a15-8e6d-05d1ac4c7180.png)

3. Select **Start from scratch** and click **Next**.

![ 75%](https://usercontent.clueso.io/64d06f10-2e0e-40ec-b636-a868315fe5a6/89ec4425-e73d-4fbf-aec4-fa2ee10793f4/acb0a7f8-ef60-4e6c-9a5b-7bb84b846ea6/images/fd8606d2-f30b-422c-816f-a160d3215cf2.png)

4. Select the relevant modules and assign the permissions.

![ 75%](https://usercontent.clueso.io/64d06f10-2e0e-40ec-b636-a868315fe5a6/89ec4425-e73d-4fbf-aec4-fa2ee10793f4/acb0a7f8-ef60-4e6c-9a5b-7bb84b846ea6/images/0aaf5264-ff7c-4bd9-91bd-9ef1022f6f8b.png)

![ 75%](https://usercontent.clueso.io/64d06f10-2e0e-40ec-b636-a868315fe5a6/89ec4425-e73d-4fbf-aec4-fa2ee10793f4/acb0a7f8-ef60-4e6c-9a5b-7bb84b846ea6/images/8c9a995f-8876-40dc-9f91-7c55913046cf.png)

5. Click **Done**. The new permission sets are created.

# Editing a Custom Permission Set


To edit a permission set, 

1. From the list of Permission sets, click the kebab menu (⋮) of the permission set you want to edit and select **Edit**.
2. Make the changes as required and click **Save Changes**.

![ ](https://files.readme.io/66ce858400a1be868932ed31bb0e2b89366df29e203d46cae32989aefa431590-Editing_Instructions_Guide.gif)

# Deleting a Custom Permission Set


To delete a permission set, from the list of Permission sets, click the kebab menu (⋮) of the permission set you want to delete and select **Delete**. You can only delete a custom permission set.