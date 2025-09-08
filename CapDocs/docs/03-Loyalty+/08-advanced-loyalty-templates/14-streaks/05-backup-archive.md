---
title: backup-archive
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
<br />

# Overview

A streak refers to a consecutive series of actions or engagements by a customer, based on which loyalty benefits are provided. The concept of a streak emphasizes the continuity and consistency of customer behaviour over time, often leading to rewards or incentives from the loyalty program.

For example, in a retail loyalty program, a streak may involve a customer making purchases on consecutive days, weeks, or months. Each consecutive action contributes to the customer's streak, and as the streak continues, the customer may unlock additional rewards, bonuses, or higher loyalty tiers.

For any brand, having a large loyal customer base is an advantage. A loyal customer base can help you create a recurring revenue flow, a reputation in the market, an organic way of getting new users because of strong word-of-mouth, etc... We have many capabilities like loyalty promotions, milestones, campaigns, etc... to achieve that.

Some of the popular streak use cases present in the market:

1. **Streak in social media apps:** A user has to share a story or post every day to maintain streak value. The higher the streak value, the more bragging visibility it gives to the user.
2. **Streaks in education apps:** A user has to learn continuously / qualify in a test continuously to earn rewards. 

With the Streaks feature in Capillary loyalty programs, you can give some specific tasks to your users and make them do them continuously to get the rewards. This will lead to:

1. A user base that does specified activity (like purchases, interactions, etc..) continuously.
2. A recurring source of revenue
3. Increased user retention.

# Sample streak use cases in loyalty

* A user has to purchase 1000 gross sales from the electronics category in a week. If the user does this continuously for five weeks, 10 weeks, and 15 weeks, then the user will get 10, 50, and 100 points.
* A user has to log into the brand's mobile application five times a month from their mobile. If the user does this continuously for three months or five months, then the user will get a $2, or $5 coupon.
* A user has to refer three new customers in a quarter. If the user does this continuously for two quarters or three quarters, then the user will get a silver badge or a gold badge.
* A user has to drink at least one coffee (say Espresso) every day. If the user does this for five days, 10 days, or 15 days continuously, then the user will get 5 stars, 10 stars, and 15 stars. 

# Streaks Vs Milestones

Streaks and Milestones are both powerful gamification capabilities that share common advantages such as increasing user retention, revenue, cross-sales, and incentivization. However, they differ significantly in how they reward a user. Therefore, understanding when to use each capability is essential.

| Streaks                                                                                                                  | Milestones                                                                              |
| :----------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------- |
| Gamification capability whose main advantage is to create a consistent user base that does some activity "continuously". | Gamification capability whose main advantage is to help in increasing "user retention". |
| Supports only fixed window type of use cases.                                                                            | Supports fixed window, cyclic window, and period agnostic use cases.                    |
| Not available in the base package.                                                                                       | Available in the base package.                                                          |
| Streaks work across cycles. This means the user has to do something continuously across cycles.                          | Milestones work on the cycle level. So users can achieve them independently.            |

# Accessing Streaks

To open the streak screen in your org, just append "streaks" to the "tesseract/UI/".

For example, to open streaks in EU Cluster: [Streaks](https://eucrm.cc.capillarytech.com/tesseract/ui/streaks)

# Configuring streaks

After visiting the Streaks homepage using the above URL, a screen like the following will appear:

![25d23bf Screenshot 2024 04 09 at 7](https://files.readme.io/25d23bf-Screenshot_2024-04-09_at_7.52.15_PM.png)

This is the landing page of the Streaks, where all the already created streaks will be visible. Brands can search for a specific streak based on:

1. Name of the streak
2. Duration of the streak
3. Status of the streak
4. Frequency upon which the streak will work

To create a new streak, click on the "New Streak" CTA on the top-right corner. Upon, clicking on this CTA, the following 3 simple steps need to be filled in to create a streak.

1. Basic details
2. Customer enrolment details
3. Activity details

## Basic details

In the **Basic details** section, define the following:

* **Name** - Name of the streak

* **Description** - A short description of the streak.

* **Duration**: Duration for which the Streaks need to be active. For example, a brand wants to run a weekly streak, requiring its users to make three weekly transactions. If a user accomplishes this for five, ten, and fifteen consecutive weeks, they will receive 10, 20, and 30 points respectively. If the brand intends to start this streak on January 10th, 2023, the start date is defined as January 10th, 2023, and the end date is 15 weeks from January 10th, 2023.

* **Till code**: Select the till code. This till code is used to attribute all the points that are going out from the streaks module.

![e484b7d Bandges   Listing page and its interaction 310](https://files.readme.io/e484b7d-Bandges_-_Listing_page_and_its_interaction_310.jpg)

## Customer enrollment

In the **Customer enrolment** section, define the audience to whom you want to enroll in the Streaks program. 

* **All customers:** All customers in the organization who have registered for loyalty will become part of the streak.
* **Audience list:** This helps enroll the users into the streaks based on filters, existing user groups, or via CSV upload. This is similar to the audience capability in [Engage+](https://docs.capillarytech.com/docs/audience-group-filters).

Note: This step is the same as the "customer enrollment" step in Milestones. For detailed information on this step, please visit the following page: [here](https://docs.capillarytech.com/docs/milestones-new-flow#customer-enrolment-details) 

![3f92a4b Bandges   Listing page and its interaction 311](https://files.readme.io/3f92a4b-Bandges_-_Listing_page_and_its_interaction_311.jpg)

## Activity

This is the core section of the streak where the brand has to configure core components of the streak like:

1. Activity on which the streak will run, and the associated KPI.
2. Target value for each cycle
3. Frequency of the streak
4. Scope filter & rule filters
5. Levels of the streak aka streak definitions

![9c057ad Streaks creation flow19](https://files.readme.io/9c057ad-Streaks_creation_flow19.jpg)

Enter the following details:

### **Activity**: The type of activity on which Streaks need to be created.

1. **Transactional activity:** Helps in creating a streak based on transactional properties. This can support the tracking of the below properties of a customer.
   1. Gross sales (both bill level & line item level)
      1. The total gross sales made by the user in the cycle. The gross amount is the amount on the bill before the user avails any kind of discount.
   2. Net sales (both bill level & line item level)
      1. The total net sales made by the user in the cycle. The net amount is the final amount that the user has paid. This means the discounts will be excluded from the tracking.
   3. Quantity (line item level)
      1. The number of quantities purchased by the user in the cycle. When used with a specific line item rule, the brand can track the number of specific line items bought by the user in the cycle.
   4. Transactions count (bill level)
      1. The total number of transactions made by the user in the cycle.
   5. Days of activity (bill level)
      1. The total number of unique days on which the user has made at least 1 transaction. 
   6. Transactional extended fields
      1. The following KPIs are supported:
         1. COUNT: The number of times a transactional extended field came with a specific value. This specific value needs to be configured in the rule box.
         2. SUM: The sum of the selected transactional extended field in the cycle.
   7. Lineitem extended fields
      1. The following KPIs are supported:
         1. COUNT: The number of times a line-item extended field came with a specific value. This specific value needs to be configured in the rule box.
         2. SUM: The sum of the selected line-item extended field in the cycle.
   8. Reward currencies (aka points):
      1. Regular points: Number of regular points earned by the user in the cycle
      2. Promotional points: Number of promotional points earned by the user in the cycle
      3. Both: Number of total regular & promotional points earned by the user in the cycle

![c689c8b Screenshot 2024 04 09 at 8](https://files.readme.io/c689c8b-Screenshot_2024-04-09_at_8.12.03_PM.png)

1. **Behavioral activity:**&#x48;elps in creating a streak based on the behavioral events. Before creating a streak of this type, make sure the behavioral event is already created.
   1. All the Behavioural events configured for the org will be available here.
   2. The following KPIs are supported in behavioral events tracking:
      1. COUNT: The number of times the event has been triggered in a cycle.
      2. VISIT: The number of unique days on which the event has been triggered in a cycle.
      3. SUM: Summing the attribute value of the behavioral event in a cycle.

![39657cd Screenshot 2024 04 09 at 8](https://files.readme.io/39657cd-Screenshot_2024-04-09_at_8.12.14_PM.png)

1. **EMF level activity:** This helps in creating streaks based on EMF events (aka different customer level events present in the workflow in the loyalty). As of now, the brand can create EMF events type of streaks only for the following 4 events:
   1. Number of points redemptions made
   2. Number of returns made
   3. Number of points transfer made
   4. Number of referrals made
   5. The following KPIs are supported for the events:
      1. COUNT: The number of times the specific event selected is triggered in a cycle
      2. VISIT: The number of unique days on which the specific event has been triggered in a cycle.\
         **Note**: Tracking for all the other events also will be available soon

![9fcab54 Screenshot 2024 04 09 at 8](https://files.readme.io/9fcab54-Screenshot_2024-04-09_at_8.12.26_PM.png)

### **Frequency of each cycle**:

Once the above tracking configurations are selected based on the use case, then the frequency for each cycle in which the user has to achieve the defined value by the streak needs to be selected. As of now, we are supporting the following 5 frequencies:

1. Daily
2. Weekly
3. Monthly
4. Yearly
5. Custom duration: This option can be used when the user has to perform the specified activity within a custom duration, which is not available in the above options. For example, every 5 days, every 13 days, every 2 months, etc. Refer to the following images to see what a custom duration looks like:

![5d64aa9 Streaks creation flow19 5](https://files.readme.io/5d64aa9-Streaks_creation_flow19_5.jpg)

![a54950c Streaks creation flow19](https://files.readme.io/a54950c-Streaks_creation_flow19.png)

![bb5d8f4 Streaks creation flow19 1](https://files.readme.io/bb5d8f4-Streaks_creation_flow19_1.png)

### **Select Duration:**

Based on the frequency selected, this option will provide two options when the selected frequency is Weekly/Monthly/Yearly type. Here, the "Any day" is the case where the user can perform their activity on any day of the cycle, whereas in "Specific days", the user has to perform the activity on specific days.

1. Weekly:
   1. Any day of the week
   2. Specific days of the week
2. Monthly:
   1. Any day of the month
   2. Specific days of the month
3. Yearly
   1. Any day of the year
   2. Specific days of the month

* **Target value needed to be achieved in selected each frequency:**
  1. When the "Any day of the week/month/year" is selected for the duration, then the target value that needs to be achieved has to be entered manually.
  2. When the "Specific day of the week/month/year" is selected for the duration, then the target value for the frequency will be calculated automatically.
     1. For example, say frequency is selected "weekly" and "specific days of the week" are selected as Monday, Wednesday & Friday, then the target value will be interpreted as 3 automatically.

### **Filters: scope based & rule based**

We are going to support all the filters that are available across the milestones, promotions, and programs. They are scope-based & rule-based filters.

**Scope based filtering:**

* Stores: Limit the streak to specific retail locations.
* Zones: Apply the streak to defined geographical areas.
* Concepts: Limits the streak to specific OUs

To define the streaks for complete stores, zones, and concepts, select **All store, zone, and concept**.

![61b0db7 Screenshot 2024 04 09 at 8](https://files.readme.io/61b0db7-Screenshot_2024-04-09_at_8.27.52_PM.png)

To define the Milestones for a specific store, zone, and concept, select **Specific store, zone, and concept** and select the stores/zones/concept.

![c8f6ccf Screenshot 2024 04 09 at 8](https://files.readme.io/c8f6ccf-Screenshot_2024-04-09_at_8.28.11_PM.png)

**Rule-based filtering**:

For further refinement, you can define the rules in the rule box. For example, rules can be written to target specific line items, categories, minimum transaction amounts, etc.

* Categories: Target specific product categories within the Milestone.
* Line items: Apply the Milestone to specific products or SKUs.
* Transaction amount: Set minimum or maximum purchase amounts for Milestone progress.

![1c0a772 Screenshot 2024 04 09 at 8](https://files.readme.io/1c0a772-Screenshot_2024-04-09_at_8.28.23_PM.png)

## **Streak levels aka definitions**

This is the place where the streak value needs to be configured. A user can add:

* 1. 10 different streak definitions in a single streak
  2. Streak levels need to be entered in an ascending order.
  3. A user can achieve the streak level "X+1", only when the user has already achieved the "X" level.
  4. The maximum streak value should always be "\<=" number of cycles. For example, say the duration is given as 2 months & frequency is given as weekly, then the maximum number of possible cycles is 8.

  ![0a18a1b Streaks creation flow19 6](https://files.readme.io/0a18a1b-Streaks_creation_flow19_6.jpg)

Once all these configurations are successfully configured, then the streak can be saved successfully.

## Connecting the streak to a loyalty promotions

Linking a loyalty promotion to a streak follows the same process of linking milestones to a loyalty promotion.

[More details on linking a promotion to a milestone](https://docs.capillarytech.com/docs/milestones-new-flow#configuring-benefits)

**Customer activity in promotions:** Target period elapsed.

**Rules supported for Streaks in promotions:**

1. currentEvent.streakName=="Name of the streak level provided in the UI" 
2. currentEvent.streakExists("Name of the streak level provided in the UI") 
3. currentEvent.isStreakAchievedEvent (similar to isTargetAchievedEvent)

> 1) Rules supported for the Milestones/Targets won't work for the "STREAKS" type of targets
> 2) (currentEvent.StreakName=="Streak level name" && currentEvent.isStreakAchievedEvent), this rule helps in configuring different benefits for achieving the different levels in the streak.
> 3) Customer activity is "target period elapsed" while creating the promotion for streaks.
> 4) Target points allocation is the action to be used, when the brand wants to give points based on different levels of the streak.
> 5) Under the "Milestones/Streak" & "Targets(s)" section of the target-point allocation action:
>    1. Select the option which is exactly matching with your streak name.
>    2. Under the "Streak-level" drop-down, select the appropriate level of the streak for which you are creating the target-point allocation action.

Once the streak is successfully created, and linked to a loyalty promotion, then the specified streak promotions will go live and start tracking customers for their activities.

# FAQs

1. **Can I create streaks based on the cyclic calendar window type?**
   1. As of now, a streak can be created only of fixed calendar window type. This means that, for all the users of the streak, the streak will start & end on the same date.
2. **Can I create streaks where I don't want my user to perform the activity continuously? I'm okay with breaks also as long as the user does the activity 'n' times.**
   1. This is being called "non-continuous" streaks. Yes, this is possible. During the creation flow of the streak, in the "activity" step, look for the "non-continuous" toggle.

![1e0c132 Screenshot 2024 04 09 at 8](https://files.readme.io/1e0c132-Screenshot_2024-04-09_at_8.58.02_PM.png)

1. **Can I give benefits multiple times for the same level to a user?**
   1. A user can get the benefits only once for a level in a streak.
2. **What is the difference between a continuous streak & non-continuous streak?**
   1. In the case of the continuous streak, the streak value will reset whenever there is a break in achieving the activity by the user. Think of this as a Snapchat streak.
   2. In the case of the non-continuous streak, the streak value won't get reset even if there is a break from the user in achieving the activity. This is more flexible.
3. **How does the SUM KPI in behavioral events work as I was asked to select an attribute mandatorily?**
   1. Take this example: There is a behavioral event created by the brand that always tracks whenever a user walks. The number of steps walked by the user is stored in the attribute of the event to show that to the user on their mobile app.
   2. Now, the brand wants to reward its users with 1000 points whenever a user walks 50k steps in a week. In this case, simply tracking the number of times the user has walked won't help, rather we have to sum the attribute value whenever the event is being triggered. 
   3. By using this functionality, the use cases like the above can also be achieved.
4. **Are there any filters available where I can filter my customers based on their streak value?**
   1. As of now, there are no filters available where customers can be filtered on their streak value. Do reach out to us whenever you encounter such use cases.
5. **I cannot see the name of the streak definition/levels in the UI, however, it seems that I have to write rules based on the exact level name. How does this work?**
   1. As of now, there is no way possible to provide a custom name for each level of the streak. It will be available in the future.
   2. Until then, the name of a streak level will be "streak name\_X". Say, you have 2 levels in your streak & the name of the streak is ABC.
      1. Name of the level 1 is "ABC\_1"
      2. Name of the level 2 is "ABC\_2".
6. **Is there any support for event notifications in Streaks?**
   1. As of today, there is no support for event notifications in streaks. However, this is in the roadmap & will come very soon in the future.
