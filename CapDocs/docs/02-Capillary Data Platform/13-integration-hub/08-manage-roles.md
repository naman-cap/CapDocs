---
title: Manage roles
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
## Creating User Roles

User roles allow you to provide role-based access to the authorized users of your organization. You can create roles to provide users with access to your entire organization or restrict the access to at a zone, concept, or store level. Based on the role assigned to a user, the data of your organization is visible. For example, if a user is given zone-level access then the user can access only the data of a specific zone he/she is allowed to access.

### To create a user role, do the following:

1. Log on to Capillary InTouch and click the **Settings** icon.
2. On the navigation pane, click **Organization Setup** > **Roles & Privileges**.
3. Click the **Add Roles** button to create a new role. You will see the **Add Organization Roles** page.

![bb87c90 Organization Role](https://files.readme.io/bb87c90-Organization_Role.png)

4. In the **Role Name** box, specify a name for the role (example: Zonal Manager).
5. In the **Role Type** box, choose the scope of access you want to assign for the role from the following options.

* **Organizational Level**: Choose this option to allow access to the entire organization-level data.
* **Zone Level**: Choose this option to provide access only to a zone level data
* **Store Level**: Choose this option to provide access only to store-level data.
* **Concept Level**: Choose this option to provide access only to concept-level data.

6. In the **Parent Role** box, choose a parent role for the role. Choose **None** if you do not want to assign any parenting role.
7. Click **Submit**.

You can create a parent role or a child role using the **Parent Role** box. Leave this option to **None** for creating a parent role or choose the parent role you want to assign for creating a child role.
