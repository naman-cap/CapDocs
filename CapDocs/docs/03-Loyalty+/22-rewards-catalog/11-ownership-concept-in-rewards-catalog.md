---
title: Ownership concept in Rewards Catalog
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
**Introduction**

In response to the evolving needs of brands and marketers, Rewards catalog has introduced the OWNER entity to rewards. This feature addresses the following key requirements:

Module-Specific Rewards: Enables brands to link rewards to specific modules such as Loyalty Programs, Milestones, Campaigns, Journeys, and Goodwill.\
Enhanced Control: Brands can now define and update the ownership of rewards, allowing for better management and control over the reward ecosystem.\
Detailed Reporting: The addition of owner details facilitates more nuanced reporting, helping brands understand the performance of rewards across different modules.

**Key Concepts**

1. **Owner Entity :The OWNER entity consists of two crucial values:**

* Owner Type(ENUM) : Defines the module to which the reward is attributed (e.g., Loyalty Program, Milestones, etc.).
* Owner Id : The unique identifier associated with the Owner Type module (e.g., Loyalty Program ID).

2. **Constraints and Validations**

* Owner Type cannot be NULL : If a reward needs to be owned by a specific module, the Owner Type must be provided.
* Owner Id can be NULL: However, if an Owner Type is specified, Owner Id becomes mandatory for issuing rewards.
* Multiple Owner Ids are supported: A single reward can be linked to multiple instances of the same Owner Type.
* Update Constraints: Owners can be added or changed for upcoming rewards, but not for live rewards.

**Refer to the API documentation below:**

[Create reward with owner](https://docs.capillarytech.com/reference/post-create-reward)

[Update reward with owner](https://docs.capillarytech.com/reference/put-update-reward)

[Issue a Reward](https://docs.capillarytech.com/reference/post-issue-user-reward)

[Claim a reward](https://docs.capillarytech.com/reference/claim-reward)
