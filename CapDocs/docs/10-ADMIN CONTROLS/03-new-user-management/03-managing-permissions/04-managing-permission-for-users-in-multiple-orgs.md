---
title: Managing Permission for Users in Multiple Organizations
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
A user can have access to multiple organizations within a cluster. Such users are referred to as multi-organization users. Organization owners and administrators can independently onboard users and assign permissions without relying on Capillary backend support.

Each user’s access is scoped to a specific organization. This means:

* Permissions, roles, and accessible modules are defined separately for each organization.
* A user’s role or access level in one organization does not affect their access in any other organization.

## **Example**

Tom is a user created in **Org A**.

* In **Org A**:

  * **Role**: Standard User

  * **Access**: Member Care and Loyalty

* In **Org B**:

  * **Role**: Administrator

  * **Access**: Engage, Insight, and Loyalty

Tom does not have access to the Capillary Technologies organisation.

An organization owner or admin can create users, [assign roles](https://docs.capillarytech.com/docs/types-of-users-in-the-organisation) and grant the [necessary permissions](https://docs.capillarytech.com/docs/managing-permissions) in each organization. For details, refer to [Onboarding and Managing Users](https://docs.capillarytech.com/docs/onboarding-user).

## Viewing multiple organisation users in the new user management

To view the multi-organization users,

1. On the **User Management** page, use the **Select Organization** dropdown at the top to select the organization whose users you want to list.
2. Click on **Settings** icon at the top-left corner of the page.\
   The **Show Multiple Organization Users** menu opens.

   ![be15f56a3c78e4e8e4d9776652ff5da159fd6c3c49e8552fb700fe444cfca6ae mutli org toggle](https://files.readme.io/be15f56a3c78e4e8e4d9776652ff5da159fd6c3c49e8552fb700fe444cfca6ae-mutli_org_toggle.png)

<br />

3. Use the toggle switch **Include Multiple Organization Users** to enable or disable multiple organisation user visibility:

* Toggle OFF → Only original users of the selected organisation will be displayed.
* Toggle ON → Users created in another organisation, but having access to the current organisation, are visible.

![6f1be10616f2351a90069732c54e20468ee36c8fbf4a0fdbd6987bd0c6561141 toggle](https://files.readme.io/6f1be10616f2351a90069732c54e20468ee36c8fbf4a0fdbd6987bd0c6561141-toggle.png)

4. Click **Save changes**.

<Note title="Note">
* Users with an @capillarytech.com email domain are marked with a Capillary icon in the user list.\
  This helps distinguish internal Capillary users from external brand users.
* Users added through Org 0 (the central Capillary Technologies organization) are preserved as legacy users. These users appear in the user list (with the same access that they had) if they have access to the current organization. Admins can remove such users from their organization if they are no longer needed, helping reduce clutter in the user list.
</Note>