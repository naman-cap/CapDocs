---
title: Overview
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
The User Management module streamlines the process of adding and managing users on the Capillary platform. Brands can manage all users within the organization and their permissions using this module.

# Features

The following actions can be performed:

* Add up to 10 users from the UI using individual email addresses
* Add or update up to 50 users via bulk upload
* View or search the user listing with important details
* Export the users' list
* Remove one or more users from the organization
* Support for different types of users: Standard, Admin, and Org Owner
* Predefined Standard Permission Sets for creating users
* List and create new Permission Sets with a categorized module-wise view

<Note title="Note">
If a user is created in the old flow, their user type won’t be mapped in the new UI; it will default to Standard User and needs to be updated explicitly.
</Note>

# Accessing the Module

To access, navigate to **Organization settings > Organization Setup > User Management**.

![57d04e4e548945263196c39b841124b828e450f1680fba62a4775572df70bb0d User Management](https://files.readme.io/57d04e4e548945263196c39b841124b828e450f1680fba62a4775572df70bb0d-User_Management.png)

# Terms and Definitions

The table below lists the terms and definitions used in this documentation.

<Table align={["left","left"]}>
  <thead>
    <tr>
      <th>
        Term
      </th>

      <th>
        Definition
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        User
      </td>

      <td>
        A user is anyone with access to the Capillary platform, capable of taking actions across various modules including Loyalty, Member Care, Engage+, and more.
      </td>
    </tr>

    <tr>
      <td>
        User types
      </td>

      <td>
        A [user type](https://docs.capillarytech.com/docs/onboard-intouch-users#user-types) refers to a predefined set of permissions and access rights assigned to a user within an organisation's system or platform. For more information, refer to the section [User Types](https://docs.capillarytech.com/docs/new-user-management#user-types).
      </td>
    </tr>

    <tr>
      <td>
        Accessible Entities / Resources
      </td>

      <td>
        Accessible entities, also known as resources, specify the subsets within an organisation that are accessible to the user. These entities include stores, organisational units (concepts), and zones
      </td>
    </tr>

    <tr>
      <td>
        Access team
      </td>

      <td>
        The access team refers to the internal Capillary team managing users across every org on our platform.
      </td>
    </tr>

    <tr>
      <td>
        Permission
      </td>

      <td>
        The permissions define what data and functionality a user can access within a system. RBAC (Role-Based Access Control) operates on the principle that users should have access only to resources necessary for their role (principle of least privilege). This ensures that users, like Customer Service Representatives (CSRs) using Member Care, have the specific permissions required—such as searching for a customer, viewing profiles, and modifying identifiers to perform their tasks effectively.
        Individual permissions cannot be assigned directly to a user without being part of a defined permissions set.
      </td>
    </tr>

    <tr>
      <td>
        Permission set
      </td>

      <td>
        A [permissions set](https://docs.capillarytech.com/docs/onboard-intouch-users#permission-sets), also known as a permissions bundle or access group within our framework, is a collection of permissions that can be assigned to a user. For instance, when configuring access for a CSR using Member Care, we aggregate relevant Member Care-related permissions into a set or group and assign it to the user. For more information, refer to the section [Permission sets](https://docs.capillarytech.com/docs/new-user-management#permission-sets).
      </td>
    </tr>

    <tr>
      <td>
        User role
      </td>

      <td>
        A user role is an assigned designation of the user provided when adding users in bulk.
      </td>
    </tr>
  </tbody>
</Table>