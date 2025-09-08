---
title: Fleet Hierarchy
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
Group Loyalty helps in configuring *B2B loyalty for business for a hierarchical business such as manufacturer, partners, distributers and dealers.* B2C loyalty for a customer group such as friends, family members, colleagues, or relatives of a customer.\
Important Terminologies

* Company: Any business entity that is enrolled in the brand’s B2B loyalty program.
* Sub-company: A smaller business entity associated with a Company. For example, a large company like Tata can have many divisions (sub-companies) such as Tata Motors, TCS.
* Customer Role: Used to capture association between a customer and company. A company can have customers in various roles. For example, a company enrolled in a fleet loyalty program of a brand can have customers in various roles like fleet driver, fleet owner, and group fleet owner.
* Customer Hierarchy: Used to capture association between two customer roles. In the preceding example, a fleet driver can report to a fleet owner, whereas a fleet owner can report to a super fleet owner. In this case, customer hierarchy captures each role and their reporting role.
* Hierarchy Definition: Stores attribute required to create a hierarchy (such as customer roles), validation rules for each role, group automation and role-based loyalty permissions.
* You can define multiple hierarchy definitions for an org and the default hierarchy definition.
* Each client can have only 1 hierarchy. Once the hierarchy is set up, all the attributes and configurations created in the hierarchy will apply to the customers associated with the company.
* Validation rules: Used to define the parent-child relationship with other roles. You can limit the max. no. of child roles for each role. Configs for skip-level parent-child mapping available.
* Group Automations: Groups can be implicitly created when a user is associated with a specific role. The user becomes the owner of the group and other users can be added to the group based on the association with the owner.
* Group Permissions: Allows setting up Loyalty permissions such as points redemption and points transfer for each member of the group based on the role.

## Status Codes

| Code | Description                                          |
| ---- | ---------------------------------------------------- |
| 1701 | Fleet hierarchy code \{x} not exist                  |
| 1702 | Company externalId \{x} already exists               |
| 1703 | Parent company externalId \{x} not exist             |
| 1704 | Company does not exist with given id/externalId \{x} |
| 1705 | Fleet company is inactive                            |
| 1706 | Fleet company can not activated                      |
| 1707 | Fleet \{x} externalId can not be null or empty       |
| 1708 | Fleet company identifiers id/externalId should pass  |
| 1709 | Fleet company can not be parent company itself       |
| 1710 | Cyclic parenting not supported                       |
| 1711 | Fleet hierarchy update is not allowed                |
