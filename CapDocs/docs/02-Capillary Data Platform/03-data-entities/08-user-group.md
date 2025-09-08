---
title: Setup User Groups
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
## Introduction

A user group comprises individuals in a hierarchical order who belong to a particular organisation. An individual can belong to multiple user groups. An organisation can designate different roles to these members and incentivise them according to the organisation’s preference. User group loyalty allows an organisation to incentivise not only its customers but also other business entities or individuals that contribute to their profits. It is a customer retention solution with custom group structures and includes generic loyalty mechanics which help an organisation to establish brand loyalty.

In user group loyalty, an individual’s (member of a group) action will lead to other group members being rewarded.

For example, if a fleet driver fills petrol from BPCL, the manager of the fleet group can receive points for the transaction. This way of incentivising the upper management encourages other members of the group to transact with an organisation.

### Key concepts

The following are some of the key concepts of user group loyalty

* In B2B Loyalty, an org is identified as an entity.
* An individual can be part of multiple groups.

<Callout icon="📘" theme="info">
  You can configure the total number of groups that a member can be part of.
</Callout>

* The parent control or the admin role can be transferred from one member to another.\
  Permissions to manage group benefits.
* A member of a group can still make individual transactions.
* All the members in a group can pool in their transactions for a tier upgrade.
* Points return and downgrade checks are supported in case of transaction return.
* Both the group and the individual can be incentivized when they transact while representing the group.

## Use Cases

Following are the different scenarios where user group loyalty is applicable.

#### B2B Loyalty

| Vertical                             | Description                                                                                                                                                                                                                                |
| :----------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Fleet Loyalty                        | Fuel Brands can enroll fleet companies in their B2B loyalty programs. Fleet Drivers can earn loyalty points by purchasing fuel at retail outlets but points redemption can happen by fleet owners who are in the same group as the driver. |
| Corporate Loyalty Programs           | Points earned by an employee of a company enrolled in a B2B loyalty program can be redeemed at the company level where other members of the company will also enjoy the benefits of the transaction made by a particular employee.         |
| CPG and Distributor Loyalty Programs | A sales structure where existing distributors can recruit new distributors to sell the products. Distributors make money through a percentage of their recruits' sales and also direct sales of products to customers.                     |
| Affiliate Marketing Programs         | The affiliate enrolled in the program can make customers buy products. With a product purchased by the customer, the rewards are accrued to the affiliate's account.                                                                       |

### New Terminologies

1.**Company**: Any business entity which is enrolled in the brand’s B2B loyalty program.

* **Sub-company**: A smaller business entity associated with a Company. For example, a big company like Tata can be registered as a company while Tata Motors, TCS can be registered as sub-companies.

2. **Customer Role**: Role is used to capture the association between customer and company. A company can have customers in various roles. For example, a company enrolled in a fleet loyalty program of a brand can have customers in various roles like a driver, associate, owner, etc.\
   3.**Customer Hierarchy**: Customer hierarchy is used to capture the association between two customer roles. To know how to create hierarchy using APIs, see [Hierarchy](https://docs.capillarytech.com/docs/hierarchy)

> 🚧 Note
>
> ### Friends and family usergroups are now deprecated.