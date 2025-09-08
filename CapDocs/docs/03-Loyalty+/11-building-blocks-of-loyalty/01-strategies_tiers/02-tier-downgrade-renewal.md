---
title: Tier Renewal & Downgrade
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
Tier renewal is the process of renewing a customer’s current tier for an additional period.  A renewal check is executed based on the expiration of the tier validity period, and if the conditions are satisfied, the customer qualifies for a tier renewal.\
Refer to [configuring tier validity](https://docs.capillarytech.com/docs/configure-renewal-conditions#configuring-validity-period) for more information.

If a customer does not qualify for a tier renewal they will be downgraded to a lower tier.\
Refer to [configuring tier downgrade](https://docs.capillarytech.com/docs/configure-tier-downgrade) for more information.

# Prerequisites

Before configuring the eligibility criteria for a tier renewal, ensure the following are met:

*   [Configure a loyalty program](https://docs.capillarytech.com/docs/create-a-multi-loyalty-program#getting-started)
*   [Create the tiers](https://docs.capillarytech.com/docs/create-tiers-and-configure-tier-upgrade-conditions#creating-a-tier)
*   [Create the trackers](https://docs.capillarytech.com/docs/trackers-1#creating-trackers) 

# Eligibility criteria

A customer can receive a tier renewal by meeting any of the eligibility criteria set in the program. The following are the criteria available for a tier renewal:

## 1. Purchase

Purchases are the total amount a customer has spent throughout the tier validity period. The customer must meet a certain threshold of purchases set by the loyalty program to qualify for a tier renewal.

### Example

Consider the following case:

* Renewal eligibility for the tier: **$5000**
* Total purchases of the customer: **$4000**

In this case, the customer has to make a purchase of at least **$1000** to  qualify for a renewal. If the customer does not reach **$5,000** in spending before the validity period ends, they will not qualify for a tier renewal, and their tier will be downgraded.

## 2. Number of visits

Number of visits is the total number of times a customer has visited the store throughout the tier validity period. The customer must meet a certain number of visits set by the loyalty program to qualify for a tier renewal.

### Example

Consider the following case:

* Renewal eligibility for the tier: **10 store visits**
* Total visits of the customer: **8 store visits**

In this case, the customer has to visit the store at least **two** more times to qualify for a renewal. If the customer does not reach **ten store visits** before the validity period ends, they will not qualify for a tier renewal, and their tier will be downgraded.

## 3. Points earned

Points are the total points a customer has earned throughout the tier validity period. These include active, expired, and redeemed points. The customer must meet a certain threshold of points set by the loyalty program to qualify for the renewal.

### Example

Consider the following case:

* Renewal eligibility for the tier: **5000 points**
* Total points customer earned: **3500 points**

In this case, the customer must earn **1500 more points** to qualify for a renewal. If the customer does not reach **5000 points** before the validity period ends, they will not qualify for a tier renewal, and their tier will be downgraded.

## 4. Trackers

A tracker is a tool used to track custom values over a specific period and set it as an eligibility criterion for renewing the tier. Custom values can include bill amount, gross bill amount, points, line item price, and number of customer visits to the store.

Up to 3 trackers can be defined for a tier renewal.

Refer to the documentation on [trackers](https://docs.capillarytech.com/docs/trackers-1) for more information.

### Example

Consider the following case:

* Renewal eligibility for the tier: **10 flights**
* Total flights taken by customer: **8 flights**
* In this case. the customer must take **two more flights** to qualify for a renewal. If the customer does not reach **ten flights** before the validity period ends, they will not qualify for a tier renewal, and their tier will be downgraded.

# Creating dynamic renewal criteria

You can create dynamic criteria for tier renewal by combining multiple criteria. You can define up to three separate eligibility criteria for a tier renewal. 

There are three types of conditions you can set to define the renewal criteria:

## 1. Any (N-1) condition

The **Any (N-1)** operation can define the number of conditions required to qualify for a tier renewal. When this operation is applied, the customer must meet the specified number of criteria to qualify for a tier renewal.

For example, assume there are 5 conditions/criteria defined in the renewal criteria of the tier. Now, when the "ANY" is selected, the brand will have the following options:

1. ANY 1
   1. This is just like a simple 'OR' condition. Among the 5 conditions, the user has to satisfy any 1 condition.
2. ANY 2
   1. Among the 5 conditions present, the user has to satisfy any 2 conditions.
3. ANY 3
   1. Among the 5 conditions present, the user has to satisfy any 3 conditions.
4. ANY 4
   1. Among the 5 conditions present, the user has to satisfy any 4 conditions.

**Note**: As per the above example, there is no "ANY 5". This is because, if the user has to follow all the 5 conditions that are present, then it is like "ALL 5". That is why, the ANY will have values till (N-1).

Refer to the [Any condition example section](https://docs.capillarytech.com/docs/tier-downgrade-renewal#1-any-condition-1) for more information.

![a7760850a9e4bdc2297971166c6a14961c564d67b90b3366a37753d7e04c64a7 image](https://files.readme.io/a7760850a9e4bdc2297971166c6a14961c564d67b90b3366a37753d7e04c64a7-image.png)

![a78b67f9b249057a1258f75f3024cd963ea102ba3d9e3b670cbcec319e8f75dc Frame 9](https://files.readme.io/a78b67f9b249057a1258f75f3024cd963ea102ba3d9e3b670cbcec319e8f75dc-Frame_9.png)

## 2. All condition

If all the criteria must be satisfied to qualify for a tier renewal, the **All** condition can be used. When an **All** condition is applied, the customer must meet all of specified criteria to qualify for a tier renewal.

Refer to the [All condition example section](https://docs.capillarytech.com/docs/tier-downgrade-renewal#2-all-condition-1) for more information.

![05890e3f85b20dc4399fc8b61417e819f8d2b979c6a357874d0ea9fb1db00ff7 image](https://files.readme.io/05890e3f85b20dc4399fc8b61417e819f8d2b979c6a357874d0ea9fb1db00ff7-image.png)

![5a0d856827fce45e9eaf42ec5d3ae74a12cdf6d1fdb37156045eefe08a639fc0 Frame 10](https://files.readme.io/5a0d856827fce45e9eaf42ec5d3ae74a12cdf6d1fdb37156045eefe08a639fc0-Frame_10.png)

## 3. Custom condition

Custom conditions allow you to create a combination of **Any** and **All** conditions and define a custom expression for the eligibility criteria for a tier renewal.

Refer to the [custom condition example section](https://docs.capillarytech.com/docs/tier-downgrade-renewal#3-custom-condition-1) for more information.

![775f98a313660487f0170f7459d7e3f208ea4c50ffe8dd363c0d1fe7ae8c247a image](https://files.readme.io/775f98a313660487f0170f7459d7e3f208ea4c50ffe8dd363c0d1fe7ae8c247a-image.png)

<Image alt="Tracker with condition `(A AND B) OR C`" align="center" width="80% " border={true} src="https://files.readme.io/659560090e8e2bcf655c145c3a85287966ba253e06917a51728207da26c6bd80-Frame_11.png">
  Tracker with condition `(A AND B) OR C`
</Image>

> ❗️ Important
>
> All expressions are evaluated from left to right.\
> E.g.: the expression `A OR B AND C` is read as `(A OR B) AND C` as it is evaluated from left to right.
>
> It is recommended to use parentheses `()` and define the operators in full (`AND` or `OR`) or as (`&&` or `||`) when defining expressions to avoid ambiguity and ensure successful validation. 
>
> Using a single `&` or `|` is invalid and unsupported.

# Examples for tier renewal

## 1. Any (N-1) condition

A restaurant has a loyalty program that rewards frequent diners with the Gourmet tier, which includes perks like complimentary appetizers and priority seating.

The renewal criteria for the Gourmet tier are as follows:

* Spend a total of  **$1500** on dining
* Visit the restaurant at least **10 times**
* Purchase at least **5** different menu items

The brand has set an **Any 1** condition for the tier renewal. This means that if a customer meets any one of the above criteria when their Gourmet tier is about to expire, their tier will be renewed.

To create an **Any** condition tier renewal criteria, follow these steps:

1. Navigate to **Home > Loyalty+** from the InTouch portal.
2. [Create or edit](https://docs.capillarytech.com/docs/create-a-multi-loyalty-program#getting-started) an existing loyalty program and [create the tiers](https://docs.capillarytech.com/docs/create-tiers-and-configure-tier-upgrade-conditions#creating-a-tier) if required.
3. [Create and configure](https://docs.capillarytech.com/docs/trackers-1#creating-trackers) all the required criteria trackers.

   <Image alt="Creating a menu tracker" align="center" width="80% " border={true} src="https://files.readme.io/f13152f059208477ae4d8e2d65c01d635e90e2c2af7d09a08a92e0f7933b7c13-First-Made-with-Clipchamp.gif">
     Creating a menu tracker
   </Image>
4. Navigate to **Renewal conditions** section under the settings for the tier to define conditions for a tier renewal.
5. Select **+Condition**, select the eligibility criteria and enter the value.
6. Select **Any** as the condition once all the criteria have been defined.
7. Select the minimum number of conditions to be satisfied for a tier upgrade.

   ![a7760850a9e4bdc2297971166c6a14961c564d67b90b3366a37753d7e04c64a7 image](https://files.readme.io/a7760850a9e4bdc2297971166c6a14961c564d67b90b3366a37753d7e04c64a7-image.png)
8. Click on **Done** to save the changes.

## 2. All condition

An online learning platform offers a Scholar Plus tier to reward dedicated learners. Scholar Plus members receive benefits like free course previews and access to exclusive content.

The renewal criteria for the Scholar Plus tier are as follows:

* Purchase courses worth **$500**
* Earn **1000** points 
* Enroll in at least **2 advanced-level** courses

The brand has set an **All** condition for the tier upgrade. This means that if a customer has met ALL of the above criteria when their Scholar Plus tier is about to expire, their tier will be renewed.

To create an **Any** condition tier renewal criteria, follow these steps:

1. Navigate to **Home > Loyalty+** from the InTouch portal.
2. [Create or edit](https://docs.capillarytech.com/docs/create-a-multi-loyalty-program#getting-started) an existing loyalty program and [create the tiers](https://docs.capillarytech.com/docs/create-tiers-and-configure-tier-upgrade-conditions#creating-a-tier) if required.
3. [Create and configure](https://docs.capillarytech.com/docs/trackers-1#creating-trackers) all the required criteria trackers.

   <Image alt="Creating a course tracker" align="center" width="80% " border={true} src="https://files.readme.io/26430d08b9d9ebd1ac37e005dc12158d2bc08ab8695d07e83a1da008c193042f-Second-Made-with-Clipchamp.gif">
     Creating a course tracker
   </Image>
4. Navigate to **Renewal conditions** section under the settings for the tier to define conditions for a tier renewal.
5. Select **+Condition**, select the eligibility criteria and enter the value.
6. Select **All** as the condition once all the criteria have been defined.

![05890e3f85b20dc4399fc8b61417e819f8d2b979c6a357874d0ea9fb1db00ff7 image](https://files.readme.io/05890e3f85b20dc4399fc8b61417e819f8d2b979c6a357874d0ea9fb1db00ff7-image.png)

7. Click on **Done** to save the changes.

## 3. Custom condition

A coffee shop offers a loyalty program with the Brew Master tier, which rewards customers with perks like free refills and discounts on specialty drinks.

The renewal criteria for the Brew Master tier are as follows:

* Earn **3000** points (A)
* Purchase the brand's coffee powder at least **5** times (B)
* Visit the shop at least **20** times (C)

The brand has set a custom condition with the expression **`(A AND B) OR C`** for the tier renewal. The customer must meet both conditions A and B or meet condition C to be eligible. This means that if a customer has accumulated 3000 points AND made 5 purchases of the coffee powder, OR if the customer has visited the shop at least 20 times when their Brew Master tier is about to expire, their tier will be renewed.

To create a **Custom** condition tier renewal criteria, follow these steps:

1. Navigate to **Home > Loyalty+** from the InTouch portal.
2. [Create or edit](https://docs.capillarytech.com/docs/create-a-multi-loyalty-program#getting-started) an existing loyalty program and [create the tiers](https://docs.capillarytech.com/docs/create-tiers-and-configure-tier-upgrade-conditions#creating-a-tier) if required.
3. [Create and configure](https://docs.capillarytech.com/docs/trackers-1#creating-trackers) all the required criteria trackers.

   <Image alt="Creating a purchase tracker" align="center" width="80% " border={true} src="https://files.readme.io/3c776661877cdd198f89e222dddf7cd9952ccb09e59adee8daf7a2d80faabc28-Third-Made-with-Clipchamp.gif">
     Creating a purchase tracker
   </Image>
4. Navigate to **Renewal conditions** section under the settings for the tier to define conditions for a tier renewal.
5. Select **+Condition**, select the eligibility criteria and enter the value.
6. Select **Custom** as the condition once all the criteria have been defined.
7. Define the expression for the custom tier upgrade under the **Expressions** box.  

> ❗️ Important
>
> All expressions are evaluated from left to right.\
> For example, the expression `A OR B AND C` is read as `(A OR B) AND C` as it is evaluated from left to right.
>
> It is recommended to use parentheses `()` and define the operators in full (`AND` or `OR`) or as (`&&` or `||`) when defining expressions to avoid ambiguity and ensure successful validation. 
>
> Using a single `&` or `|` is invalid and unsupported.

8. Select ✔ to validate the expression. 

![775f98a313660487f0170f7459d7e3f208ea4c50ffe8dd363c0d1fe7ae8c247a image](https://files.readme.io/775f98a313660487f0170f7459d7e3f208ea4c50ffe8dd363c0d1fe7ae8c247a-image.png)

9. Click on **Done** to save the changes.

# Tier downgrade

When the customer does not satisfy the renewal conditions, they will be downgraded on the following:

## 1. One tier below

The customer is downgraded to a tier lower than their current tier. If the customer is in the base tier, they will remain in the same tier.

## 2. An appropriate tier based on eligibility

The customer is downgraded to a tier that matches their current points. 

### For example

Consider the below case:

The renew criterion for the third tier is **1000 current points** at the time of tier expiry.

* Points the customer holds: **500 current points**
* The eligibility criteria for the first tier: **500 current points**

Since the customer currently has **500 points** at the time of the tier expiry, they do not qualify for a tier renewal and will be downgraded to the eligible tier, that is the first tier.

## 3. The lowest tier

The customer is downgraded to the lowest tier.

Refer to [configuring tier downgrade](https://docs.capillarytech.com/docs/configure-tier-downgrade) for more information.
