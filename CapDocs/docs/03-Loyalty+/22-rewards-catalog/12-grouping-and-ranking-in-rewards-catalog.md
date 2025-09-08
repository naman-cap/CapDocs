---
title: Grouping and Ranking in Rewards Catalog
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
Grouping and ranking are essential features in reward management that enable brands to organize and present rewards in a structured and visually appealing manner. These features empower users to curate customized catalogs that effectively showcases rewards to their audience, enhancing the overall user experience.

**Grouping Rewards:**

Grouping rewards allows brands to categorize them into distinct sections based on common themes, types, or purposes. This feature enables users to create a structure within their reward catalog, making it easier for customers to navigate and find relevant rewards. For example, rewards can be grouped into categories such as "Featured Rewards," "Exclusive Offers," or "Seasonal Rewards."

**Ranking Rewards:**

Ranking rewards enables brands to assign ranks for reward groups as well as ranks for the individual rewards in that group. By assigning ranks, brands can ensure that the most relevant or valuable rewards are prominently displayed to customers. This feature allows brands to highlight specific rewards or promotions based on their strategic objectives or user preferences. For instance, brands can prioritize certain reward groups assigning them higher ranks and can also prioritize rewards within a group.

**What's New**

1. Multiple Group Tagging: Link a single reward to multiple groups.
2. Group-Specific Ranks: Define ranks for rewards within each group.
3. Optional Features: Group tagging and rank assignment are optional and independent of individual reward ranks.
4. Enhanced API Responses: Return detailed group tags and ranks in API responses.

**Benefits:**

* Enhanced User Experience: Grouping and ranking rewards create a more organized and user-friendly catalog, making it easier for customers to browse and engage with rewards.
* Effective Promotion: By highlighting specific rewards through grouping and ranking, users can drive attention to key rewards or offers, increasing customer engagement and conversion rates.
* Improved Navigation: Grouping rewards into categories and ranking them based on priority streamlines the browsing experience for customers, helping them find relevant rewards more efficiently.

For example, in the below screenshot, Recommended Products have a higher priority than Home & Kitchen Category. Within each defined group, rewards are sorted based on their rank.

![b58d172 image2](https://files.readme.io/b58d172-image2.png)

<br />

**Use Cases**

1. Flexible Reward Tagging: Mark a reward with multiple groups and define ranks within each group to showcase rewards effectively.

Example: Reward 1 is tagged with Group 1 (Rank 1) and Group 2 (Rank 3). When fetching rewards for Group 1, Reward 1 appears first due to its higher rank within the group.

2. Individual Rank Sorting: When fetching rewards with sortOnRank=true, sort by individual rank first. If no rank is defined, use the creation date.

Example: Reward 1 (Rank 1) appears before Reward 2 (Rank 2) when sorted by individual rank, followed by rewards with no rank sorted by creation date.

3. Group-Specific Sorting: When fetching rewards for a particular group, sort based on the rank within that group. Rewards without a defined rank in the group will follow default sorting.

Example: For Group 2, sort as Reward 2 (Rank 2), Reward 1 (Rank 3), and Reward 5 (Rank 4).

4. Default Sorting: If no group or rank is defined, sort rewards by creation date.

Example: Rewards not tagged to any group are sorted by creation date, with more recent rewards appearing first.

**Example Scenario**

1. Groups Defined:

* Group 1: Rank 1
* Group 2: Rank 2
* Group 3: Rank not defined

1. Rewards:

* Reward 1: Group 1 (Rank 1), Group 2 (Rank 3); Created March 1; Individual Rank 1
* Reward 2: Group 1 (Rank 2); Created March 2; Individual Rank 2
* Reward 3: Group 1 (No rank); Created March 3; Individual Rank not defined
* Reward 4: Group 3 (No rank); Created March 1; Individual Rank 3
* Reward 5: Group 2 (Rank 4), Group 3 (No rank); Created March 4; Individual Rank 4
* Reward 6: No group; Created March 1; Individual Rank not defined
* Reward 7: No group; Created March 3; Individual Rank not defined

3. Retrieving Rewards:

* With sortOnRank=true: Order by individual rank first.

Order: Reward 1, Reward 2, Reward 4, Reward 5, Reward 3, Reward 6

* For Group 1:

Order: Reward 1 (Rank 1), Reward 2 (Rank 2), Reward 3 (No rank)

* For Group 2:

Order: Reward 2 (Rank 2), Reward 1 (Rank 3), Reward 5 (Rank 4)

* For Group 3:

Order: Reward 5 (No rank), Reward 4 (No rank), Reward 5 appears first due to recent creation date.

* No Group:

Order: Reward 7 (Created March 3), Reward 6 (Created March 1)

**Points to Note:**

1. Group:
   1. Group names must be unique and non-null.
   2. Group rank is optional and non-mandatory, allowing flexibility in sorting.
   3. Groups can be deactivated with the isActive flag.
2. Reward:
   1. Group tagging and reward ranking are optional.
   2. Individual reward rank is a separate feature from group-specific ranks.

**Refer to the API documentation below:**

1. [Create Group](https://docs.capillarytech.com/reference/create-group-reward)
2. [Update Group](https://docs.capillarytech.com/reference/update-group-reward)
3. [Get Group by ID](https://docs.capillarytech.com/reference/get-rewards-group-by-id)
4. [Get all Groups](https://docs.capillarytech.com/reference/get-group-rewards)
5. [Create reward with Group and Reward Rank](https://docs.capillarytech.com/reference/post-create-reward)
6. [Update reward with Group and Reward Rank](https://docs.capillarytech.com/reference/put-update-reward)
7. [Get brand specific reward](https://docs.capillarytech.com/reference/get-user-brand-specific-rewards)
8. [Get brand rewards](https://docs.capillarytech.com/reference/get-brands-rewards)
9. [Get available brand rewards](https://docs.capillarytech.com/reference/get-available-brand-rewards)
10. [Get user specific rewards](https://docs.capillarytech.com/reference/get-user-reward)
11. [Get user specific reward by id](https://docs.capillarytech.com/reference/get-user-specific-reward-by-id)
12. [Get purchased rewards for user](https://docs.capillarytech.com/reference/get-rewards-for-user)
13. [Get purchased rewards for user (New API)](https://docs.capillarytech.com/reference/get-rewards-for-user-new-api)
