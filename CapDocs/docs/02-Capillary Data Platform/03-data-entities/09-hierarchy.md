---
title: Setup Customer Hierarchy
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
A user group comprises individuals in a hierarchical order who belong to a particular org. An individual can belong to multiple user groups. An org can designate different roles to these members and incentivize them according to the org’s preference. User group loyalty allows an org to incentivize not only its customers but also incentivize other business entities or individuals that contribute to their profits. It is a customer retention solution with custom group structures and includes generic loyalty mechanics which helps an org to establish brand loyalty.

## Configuring Hierarchy

Customer hierarchy is used to capture the association between two customer roles. Hierarchy definition stores the required attributes for hierarchy creation (such as customer roles), validation rules for each role, group automation, and role-based loyalty permissions. An org can create multiple hierarchy definitions to capture its client companies’ organizational structures. Each company can have only one hierarchy. Once the hierarchy is set up, all the attributes and configurations created in the hierarchy will apply to the customers associated with the company.

![](https://files.readme.io/122a7d0-deKLsCrIIVeGFBwf_N5dgTFUKNbi3E-_Sg.png "deKLsCrIIVeGFBwf_N5dgTFUKNbi3E-_Sg.png")

To create a new hierarchy, do the following.

> 📘
>
> You can only add new roles and validation rules but cannot modify existing roles and rules.

1. On **InTouch**, navigate to **Organisation Settings > Hierarchy Configuration**.
2. Click **New hierarchy definition**.

![](https://files.readme.io/a54d74f-WTwXeN9j-d-96dDQZzKvAGhPG8BoyR5NBg.png "WTwXeN9j-d-96dDQZzKvAGhPG8BoyR5NBg.png")

3. In **Hierarchy definition name**, enter a customized name for the hierarchy.
4. In **Hierarchy definition code**, enter a unique code for the hierarchy identification.

> 📘
>
> You cannot change an existing Hierarchy Definition Code.

5. Click **Next**.
6. In **Roles**, add all the relevant user roles in the hierarchy.

> 📘
>
> At least two user roles are required to create a hierarchy and can extend up to eight roles.

![](https://files.readme.io/073c6d6-_f_g7ROMo8JA0XINss-UVUAEngX5k-VP2g.png "_f_g7ROMo8JA0XINss-UVUAEngX5k-VP2g.png")

7. In **Validation rules**, define the association between two roles to maintain the hierarchical structure.

> 📘
>
> Enable Skip role mapping allowed to allow skip level associations. For example, in a company, an associate can report to a zonal manager in the absence of the city manager. If disabled, hierarchy rules are strictly followed, and skip level associations are not possible.

* A user in the Child role can be associated with the user in the Parent role.
* Max no. of child customers, the maximum value that you can enter is 30,000.

> 📘
>
> You can set up multiple associations by adding rules. A role can be configured as a parent role in only 1 rule. Similarly, a role can be a child role for only 1 rule. The same role cannot act as both parent and child roles.

![](https://files.readme.io/47cec26-tCP0lXJZyIs0hqgAau146Zir9F-XkDGIpQ.png "tCP0lXJZyIs0hqgAau146Zir9F-XkDGIpQ.png")

8. In **Group Automation**, Enable group automation to create groups implicitly.

* In Group creation based on, select the role on which the group is created. This role becomes the owner/admin of the group.
* Enable Automated member addition to automatically add all users associated with the admin to the group automatically.

> 📘
>
> You can create only one rule with automatic member addition.

![](https://files.readme.io/0df5bd0-htR8RwNhHFOUBMM0GX4tdIrHUY73Xbgr4A.png "htR8RwNhHFOUBMM0GX4tdIrHUY73Xbgr4A.png")

9. In **Group Permissions**, provide role-based access control on loyalty actions like points redemption and points transfer.

> 📘
>
> You can change Group Permissions for each role later.

![](https://files.readme.io/82a9a6c-fvLI6tFY33vyEaTxey78UG4cBFDtNdPlpw.png "fvLI6tFY33vyEaTxey78UG4cBFDtNdPlpw.png")

10. Click **Create**.
