---
title: Workflows
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

Workflows is the orchestrator which allows you to combine different strategies and trackers that you created to complete the program. Several elements like earn conditions have to be used in Workflows for them to work in the program.

#### Steps to configuring Workflows

1. Choose an activity using the customer activity list. Read more about Customer Activities [here.](https://docs.capillarytech.com/docs/activities)
2. Select Scope in each set to apply filters based on date range, event type, cluster, zone, and store.
3. Select Reward currency limit to apply limit points issued to customers on transaction amount, line-item amount, and tracker value for each set and subset separately per customer.
4. When the event scope is set, navigate to the condition pane to create rules and define actions to be executed.
5. Click any selected Action to set up channel notifications. Read more about Actions [here](https://docs.capillarytech.com/docs/actions).

**Read below to understand each of these steps in detail.**

## Choose customer activity

To configure rules for different customer activities, do the following.

1. On **Intouch**, navigate to **Loyalty+** > **Programs**. In **Programs**, select the program you want to reconfigure. Click **Reconfigure Program** and click **Workflow**.
2. In the **Customer Activity** click the event name, choose the event for which you want to configure rules. To know about different available events, see Understanding Events.

![c5cd41b PLL3JyrCMxUJHN1vDYZaILWBQLCqYQhtag](https://files.readme.io/c5cd41b-PLL3JyrCMxUJHN1vDYZaILWBQLCqYQhtag.png)

![5abc2c5 bFTx4TLMdb9ulT B0Xr JVZnDNv0szC6lg](https://files.readme.io/5abc2c5-bFTx4TLMdb9ulT_B0Xr_JVZnDNv0szC6lg.png)

## Add Scope to filter customer activity

To add scope, do the following.

1. Click **Scope** to apply filters based on date range, event type, cluster, zone, and store. For example, if you select a store using the store scope, all the rules you create on that page will apply only to that particular store.

![37e8220 small Screenshot 2023 04 29 at 4](https://files.readme.io/37e8220-small-Screenshot_2023-04-29_at_4.22.32_PM.png)

2. Click the scope that you want to apply. You will see options to configure the selected scope. Refer to the following table to understand each scope. You can apply multiple scopes for an event and click **Save**.

![9ebe449 small Screenshot 2023 04 29 at 4](https://files.readme.io/9ebe449-small-Screenshot_2023-04-29_at_4.23.36_PM.png)

To know the descriptions of each field, see the following table.

<Table align={["left","left"]}>
  <thead>
    <tr>
      <th>
        OPTION
      </th>

      <th>
        DESCRIPTION
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Date Range
      </td>

      <td>
        Restricts the event to a specific duration. Set the duration in the **Start Date** and**End Date** boxes.\
        For example, if the Date Range is set from 01-01-2021 00:00:00 to 01-01-2022 23:59:59, then the rule event will run only during that period.
      </td>
    </tr>

    <tr>
      <td>
        Stores
      </td>

      <td>
        Restricts the event to the selected stores.  

          Select the option "select specific stores" to Include or exclude specific stores and select the stores for which the event should be applicable.\
        To include "check" or "select" the stores from the dropdown list.\
        To exclude, "uncheck" the stores from the list.  

        To include all stores, let the option stay on "All stores" button.
      </td>
    </tr>

    <tr>
      <td>
        Zones
      </td>

      <td>
        Restricts the event to the selected zones.\
        Select the option "select specific zones" to Include or exclude specific zones and select the zones for which the event should be applicable.\
        To include "check" or "select" the zones from the dropdown list.\
        To exclude, "uncheck" the zones from the list.\
        Selecting **ROOT**selects all the listed zones.  

        To include all zones, let the option stay on "All zones" button.
      </td>
    </tr>

    <tr>
      <td>
        Cluster
      </td>

      <td>
        Restricts the event to the selected cluster. You can include or exclude a particular concept from the event.  

        Select the option "select specific clusters" to Include or exclude specific cluster and select the cluster values.\
        To include "check" or "select" the cluster values from the dropdown list.\
        To exclude, "uncheck" the cluster values from the list.  

        To include all clusters, let the option stay on "All clusters" button.
      </td>
    </tr>

    <tr>
      <td>
        Concepts
      </td>

      <td>
        Restricts the event to the selected concepts. You can include or exclude a specific concept from the event.  

         Select the option "select specific concepts" to Include or exclude specific concepts and select the concepts for which the event should be applicable.\
        To include "check" or "select" the concepts from the dropdown list.\
        To exclude, "uncheck" the concepts from the list.\
        Selecting **ROOT**selects all the listed clusters.  

        To include all concepts, let the option stay on "All concepts" button. 
      </td>
    </tr>

    <tr>
      <td>
        Loyalty Type
      </td>

      <td>
        Allows targeting loyalty or non-loyalty customers. If no option is selected, then both loyalty and non-loyalty customers are targeted for the event.  

        You can issue only coupons to non-loyalty customers, whereas loyalty customers can get points, tiers, and coupons.Supported methods for rules: currentEvent.previousLoyaltyType, currentEvent.currentLoyaltyType
      </td>
    </tr>

    <tr>
      <td>
        Event Source
      </td>

      <td>
        Lets you evaluate conditions for events triggered from a specific source(s)/account(s)  - InStore, WeChat, and Web Engage (mobile push). If no sources/accounts are selected, then the current rules will apply to all accounts.\
        Supported methods for rules: currentCustomer.isLoyal, currentCustomer.hasInstoreProfile, currentCustomer.hasWeChatProfile
      </td>
    </tr>
  </tbody>
</Table>

## Limit issual of points

You can set limits on the points issued per customer for each set or subset. The total points issued to a customer can be limited from based on the transaction value and payment method.

<Note title="Note">
The limiting of points is only applicable for the `**TransactionAdd**` customer activity.
</Note>

To configure points capping, follow these steps:

1. Navigate to a loyalty program and select **Edit Program**
2. Navigate to the **Workflows** section.
3. Select `TransactionAdd` under the **Customer Activity** section.
4. Choose the ruleset and select **Reward currency limit**.

![c37ab8f small Screenshot 2023 04 29 at 4](https://files.readme.io/c37ab8f-small-Screenshot_2023-04-29_at_4.28.40_PM.png)

5. Select the capping type and enter the capping values.

The types of capping are as follows:

| Type                                        | Description                                                                                                                    |
| :------------------------------------------ | :----------------------------------------------------------------------------------------------------------------------------- |
| Maximum Total rewards for reward allocation | Limit the total number of points that can be issued.                                                                           |
| Maximum Source value allocation             | Limit the source value amount for a [tracker](https://docs.capillarytech.com/docs/trackers#points-allocation-inside-trackers). |
| Eligible Payment method for rewards         | Limit the total number of points that can be issued for a specified payment method.                                            |

6. Select **Save** to confirm the changes.
7. Select **Save and Continue** to save the changes.

   ![f50f6f6bd2fb4784d92e117c98334d79ad8f5d69e6363b65b1b0ef066737055f setcapping   Made with Clipchamp](https://files.readme.io/f50f6f6bd2fb4784d92e117c98334d79ad8f5d69e6363b65b1b0ef066737055f-setcapping_-_Made_with_Clipchamp.gif)

<Note title="Note">
s
* Limiting points based on the payment method is supported for the `Evaluation Start`ruleset.
* For advanced capping configurations, refer to documentation on [advanced capping](https://docs.capillarytech.com/docs/advanced-capping).
</Note>

## Configure Rulesets

#### To configure rulesets, do the following.

1. The sets are categorized for better understanding. There are four categories in the TransactionAdd event and one in remaining customer activities.\
   **Evaluation Start** : The evaluation of the event or activity will start from the sets within this category. This set processes each record or line item in the event and executes various actions such as points allocation, issuing a coupon to the customer, enrolling the customer in subscriptions, sending a message, or upgrading the tier of the customer.\
   **Trackers :** The trackers created in the program will be evaluated here. In this set, brands can award points or execute the mentioned actions by tracking the event and its attributes within a specific window To evaluate the trackers add “forward to set” actions and select the trackers to be evaluated.\
   **Points trackers:** Once a points tracker is created, it is always available for rule writing in the above sets. The linking of the points tracker here upgrades the customer based on defined points tracker values. All points of a customer are tracked irrespective of the rules written here.\
   **Evaluation end:** This set is designed to execute follow-up actions after the successful processing of the above events, such as sending SMS or email notifications since you want to send them once only. It allows for various additional actions to be performed. However, be mindful that points allocation and other related actions should be completed in the previous sets to ensure the accurate inclusion of tags in your messages.
2. When the event scope is set, navigate to the condition pane to create rules and define actions to be executed. You can create multiple conditions using **+ Condition** in the **All Conditions** pane. 

![8bc7e17 small Screenshot 2023 04 29 at 4](https://files.readme.io/8bc7e17-small-Screenshot_2023-04-29_at_4.38.36_PM.png)

3. Click on **Condition** to add a new condition to the rule. A condition is a combination of rule expression, expression validation (When), and action (executed based on the expression value). Refer to the following steps to define a condition.
4. In the **Expression** box, write the condition to evaluate. See the supported Profiles for each event and the relevant profile attributes and operators used in rule expressions. Also, see the section below on writing rules to better understand how to do it.  

![eb30b29 5CSfDlfoi3rmwq8kaa0YBE hbyZMypX7yw](https://files.readme.io/eb30b29-5CSfDlfoi3rmwq8kaa0YBE_hbyZMypX7yw.png)

5. Click **+ When** and choose the expression result (**Expression** is True or False) and set the action to be executed. You can set actions either for success case or for failure case, i.e., you can set actions to be executed either for expression result true or for false.

![0911d54 FAbmRAbIXLLQNjBOINRVhlsEb5lOss1NoA](https://files.readme.io/0911d54-FAbmRAbIXLLQNjBOINRVhlsEb5lOss1NoA.png)

* **Expression is**: Set when to execute the action - when the result of the expression is satisfied (True) or not satisfied (False).

> 📘 If you want to execute rules as per your loyalty program configuration, specify 'true' in the expression box and Expression equals box. Then, select the action to be performed.

* **+ Action**: Click to show the supported actions and select the action to be performed for the given condition. 

![239a6c1 cY4Dqtkbu2s2mO447CeAYSFHUf2SRVO5Aw](https://files.readme.io/239a6c1-cY4Dqtkbu2s2mO447CeAYSFHUf2SRVO5Aw.png)

Based on the selected action, you will see some relevant options that need to be configured. Here, you can create a new strategy (by clicking **New**) or choose the existing strategies. for example, to choose the points allocation strategy you want to apply for the program. 

6. Click on any selected **Action** to set up channel notifications using different channels. For example, in the following example clicking **Allocation Points** allows you to configure mandatory or priority channels for the allocation points action.

![d39d5cc gVnbd azdFyxkhpK1o4egi4pm4Id8KN0eA](https://files.readme.io/d39d5cc-gVnbd-azdFyxkhpK1o4egi4pm4Id8KN0eA.png)

> 📘 Channels that are selected in Mandatory Channels will not appear in Priority Channels and vice versa.

7. Click **Save** to save the changes made in the loyalty program.
8. Click **Publish Changes** to apply changes to the loyalty program. If you do not reconfigure the loyalty program, the new changes will not reflect in the loyalty program.

## Activity level Capping & Capping in a time period - In Transaction Add event

Restrict the Regular as well as promotional points at the entire transaction activity & in a specific time period. This works on top of all the set level points cappings. 

### Use Cases

* Max 1000 points in a transaction including promotional points OR
* Max 500 base points and 200 promotional points
* Max 10000 points in 30 days for a customer
* Max 500 points in a week

### CAPPING ON A TRANSACTION :

### Getting started

* Go to Loyalty → Workflows → Activity reward currency limit
* A tab on top of the workflows namely “Activity reward currency limit” will be visible. Users can define the limits for regular and promotional points for the transaction add customer activity. 
* The capping value can be set for regular or promotional points or both. 

Refer the below Gif to use Activity level capping. 

![](https://files.readme.io/9e944e6-screen-capture_9.gif)

### CAPPING IN A SPECIFIC TIME PERIOD :

### Getting started

* Go to Loyalty+ → Workflows → Activity reward currency limit → Select milestone
* If the milestone group and milestones within that group are already created, simply choose from them. If there are no milestone groups or milestones created, you can click on the “Go to  ” and create a milestone group.
* While creating the milestone group, choose the “Limit benefit for customer activity” option under the milestone type, along with milestone evaluation type and frequency.
* Create the milestone periods and save. Within the milestone groups, create milestones and set the “reward currency limit” for regular or promotional points or both.
* These milestones will then appear in the new “Activity reward currency limit” tab and multiple milestones can be selected. At a time, at this customer level, only 3 capping criterions can be selected.
* To set the specific time period, in which points will be capped, you will have to create a milestone group for that time period. In the Milestone Loyalty module (Organization settings >> Sales milestone) a second type of milestone group can be created called “Limit benefit for customer activity”.

Refer to the GIFs below.

**→ Selection of milestones in “Activity reward currency limit” tab in Loyalty workflows**

![](https://files.readme.io/e42de19-selection-of-target.gif)

**→ Creation of Milestone Group**

![](https://files.readme.io/4280b49-MilestoneGroupcreation.gif)

**→ Creation of Milestones within a “limit currency type” milestone group:**

![](https://files.readme.io/a6ae84c-milsetoneCreation.gif)
