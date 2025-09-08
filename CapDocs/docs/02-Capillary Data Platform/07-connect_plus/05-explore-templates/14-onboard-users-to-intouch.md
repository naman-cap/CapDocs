---
title: Onboard users to Intouch
excerpt: This page provides you with information on the Onboarding users to Intouch.
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
This template enables you to onboard users in bulk to Intouch with the following attributes:

* User role
* Entities to which the user has access
* User type
* Security / Access groups to which the user has access

<Note title="Note">
This is applicable only for external users and cannot be used to add Capillary users.
</Note>

# Configuring the template

To configure the template, perform the below steps/actions:

1. In the **Connect-to-source** <Glossary>Block</Glossary>, enter the source server details where the source\
   data is present and the location for saving the processed file. See [Connect to source](https://docs.capillarytech.com/docs/configure-actions#connect-to-source).

2. In the **Decrypt data** block, if the files are encrypted, enter the details to decrypt the data. See [Decrypt data](https://docs.capillarytech.com/docs/configure-actions#decrypt-data).

3. In the **Data-Validation-Block**, validate or transform data using a Databricks notebook. For more details, refer to [Data-Validation-Block](https://docs.capillarytech.com/docs/data-validation-block). The block is optional, so you can skip it without affecting the dataflow. If enabled, the rest of the dataflow continues as usual after the block executes.

4. In the **Transform Data** block, map the API fields with the source CSV file. See [Transform data](https://docs.capillarytech.com/docs/configure-actions#transform-data). The below parameters are mandatory:

   <Table align={["left","left"]}>
     <thead>
       <tr>
         <th style={{ textAlign: "left" }}>
           Parameter
         </th>

         <th style={{ textAlign: "left" }}>
           Description
         </th>
       </tr>
     </thead>

     <tbody>
       <tr>
         <td style={{ textAlign: "left" }}>
           firstName
         </td>

         <td style={{ textAlign: "left" }}>
           Name of the user.
         </td>
       </tr>

       <tr>
         <td style={{ textAlign: "left" }}>
           reportsTo
         </td>

         <td style={{ textAlign: "left" }}>
           The email ID of the existing user to whom the user reports. You can also map all users whom you are onboarding to a single user.
         </td>
       </tr>

       <tr>
         <td style={{ textAlign: "left" }}>
           email
         </td>

         <td style={{ textAlign: "left" }}>
           Email ID of the user.
         </td>
       </tr>

       <tr>
         <td style={{ textAlign: "left" }}>
           userRole
         </td>

         <td style={{ textAlign: "left" }}>
           Role of the user. Enter a valid role defined for this org in **Intouch > Organization setup > Roles & Privileges**. The API throws an error if the role entered does not belong to the user's org. This determines the level of data access the user has. For example, a concept-level role indicates that the user will have access to concept-level data.
         </td>
       </tr>

       <tr>
         <td style={{ textAlign: "left" }}>
           accessibleEntities
         </td>

         <td style={{ textAlign: "left" }}>
           Entities to which the user will have access. If the role is concept-level, the org units to which the user will have access are defined and separated by a comma. Example - orgunit1, orgunit2. This is not required if the user role is organisation level where the user will have access to entire org-level data.
         </td>
       </tr>

       <tr>
         <td style={{ textAlign: "left" }}>
           userType
         </td>

         <td style={{ textAlign: "left" }}>
           Defines the user type. The supported values are Brand User, Brand User - Reports Only, and Brand POC.  

           * \*Brand POC\*\*(Administrator) - A brand POC is a type of user who can add other users, and approve or reject the addition of users.  
           * \*Brand user\*\* (Standard user) - A brand user is a type of user in the system who cannot add new users or approve or reject existing users but they can configure or publish the campaigns according to their user permission.  
           * \*Brand user - reports only \*\*- A brand user - reports only is a type of user that will not be able to access the inTouch platform but will get insights plus report notifications, which they can click on and view.
         </td>
       </tr>

       <tr>
         <td style={{ textAlign: "left" }}>
           groupName
         </td>

         <td style={{ textAlign: "left" }}>
           Access group/Security group name to which the user will be assigned. This access group name should match with the access group name created in the Organizational Security Groups. The access groups are defined in **Organisation settings > Security & Audit > Access**.  

           * \*Note: \*\* For groupName and permission-related information, contact the access team for access.
         </td>
       </tr>
     </tbody>
   </Table>

5. In the **Connect-to-destination** block, enter the API endpoint details. See [Connect to destination](https://docs.capillarytech.com/docs/configure-actions#connect-to-destination).\
   For this template, the API used is `/intouch-ui/api/v1/users`. By default, this block is auto-filled and need not be modified.

6. In the **Trigger section** block, enter the details to schedule the trigger. Refer to the documentation on scheduling[Trigger](https://docs.capillarytech.com/docs/configure-actions#schedule-trigger).
