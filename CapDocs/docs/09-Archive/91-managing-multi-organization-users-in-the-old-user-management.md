---
title: Managing multi-organization users in the old user management
deprecated: false
hidden: true
metadata:
  robots: index
---
<Callout icon="❗️">
  Will be covered in new user management
</Callout>

A user created in one organization (originating org) can be granted access to other organizations. Users who were not created in an org but have access to it are called **proxy users**. By default, when a user is given access to another org, their permissions from the originating org are inherited. However, their permissions in each assigned org can be managed separately as needed.

## Providing access to a user to multiple organization

Perform the following to provide access to multiple organizations for a user who is created in an organization.

1. Navigate to **Organisation Settings > Security and Audit > Configure Access Control > Change The User Permission**.

   ![b32c4437721a234479d37ab01e7bde83a1709092ce20cdacd9280bd9a09a0ba1 image](https://files.readme.io/b32c4437721a234479d37ab01e7bde83a1709092ce20cdacd9280bd9a09a0ba1-image.png)

2. Expand the **Change the User Permissions** section and search for the user for whom you want to provide access to an org.

   ![9e8b5614ef14a922bfc6bfe2158fbcf72a5595d4a98adb6aa844e8e7e8616fea image](https://files.readme.io/9e8b5614ef14a922bfc6bfe2158fbcf72a5595d4a98adb6aa844e8e7e8616fea-image.png)

3. Click **Manage** that's present in the Proxy Org column.

   ![f554a77d6907d5514ccb8194fed3071eb0b6f95acaf55b64ad46896a340ec41b image](https://files.readme.io/f554a77d6907d5514ccb8194fed3071eb0b6f95acaf55b64ad46896a340ec41b-image.png)

4. A list of available organizations will appear in the left box. Select the organization you want to grant access and click **Add**.

![0e215a9988e699fd11349a31b6dec7c3e304ea37c687bd0a6e53c34092cd94a8 image](https://files.readme.io/0e215a9988e699fd11349a31b6dec7c3e304ea37c687bd0a6e53c34092cd94a8-image.png)

5. Select the check box **Check for Add &  Untick to Remove** and click **Submit**.

Once submitted, the proxy user will be successfully granted access to the selected organization within the Multi-Org setup.

## Managing permission for proxy users

1. A proxy user inherits permissions from their base organization by default. To modify them, go to **Organization Setup > User Management**, select the organization, and find the proxy user.
2. In the **Permissions tab**, a note states: "Permissions are from the user's base org. Edit to set permissions for this org." Click **Edit** to override inherited permissions. Refer to this [documentation](https://docs.capillarytech.com/docs/custom-permission-sets#:~:text=%E2%9C%94-,Creating%20a%20Custom%20Permission%20Set,-To%20create%20permission) for assigning permission sets.

![e87dc4baa27c510aec2b5107418b7c7895c3d86287753104652e36d4fd5ddd07 Screenshot 2025 03 14 104424](https://files.readme.io/e87dc4baa27c510aec2b5107418b7c7895c3d86287753104652e36d4fd5ddd07-Screenshot_2025-03-14_104424.png)

# Managing multi-organisation users in the new user management

In the new user management,
