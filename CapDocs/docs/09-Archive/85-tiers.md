---
title: Tiers (archived - new content published)
excerpt: ''
deprecated: true
hidden: true
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
  pages:
    - type: basic
      slug: tiers-1
      title: Points
---
## Why are tiers important for generating loyalty among customers?

For customers: As customers shop more and more with a brand, they get more incentives as and when they go up through tiers.\
For companies: Incentivizing the most loyal customers more than others would generate more goodwill and loyalty among customers and hence, generate more revenue.

## Who should care about it?

The Loyalty Program Manager needs to use tiers to achieve loyalty outcomes with the end customer. The System Integrator and Delivery Executive need to set up the tiers, which can be a complex process and add modifications as and when required.

## What are the marketing benefits of having tiers in loyalty programs?

Tiers help with optimizing the market’s brand and setting up the right perception. Better customers would want more rewards and the marketing manager would want more money to target better customers so that the ROI can be maximized.

## Glossary

1. Tier Upgrade: Customer’s tier is upgraded according to the conditions set in the strategy or action.
2. Tier Downgrade: Customer’s tier is downgraded according to the conditions set in the strategy or action.
3. Tier Upgrade: Customer’s tier is renewed according to the conditions set in the strategy or action.
4. Tracker: Trackers are a powerful tool to track custom values over a specific period. You can use trackers for Eligibility and Renewal strategies and also in Workflows for certain milestones. The custom values are bill amount, gross bill amount, line-item count, line-item quantity, line item price, and customer visits. You can create tracker strategies and define rule sets based on these custom values.
5. MLPs: Multi-Loyalty Programs enable orgs with multiple brands to run a separate loyalty program for each of its org units besides maintaining a single profile of a customer and also for centralized reporting. 

> 📘
>
> You cannot add a new tier in between two existing tiers and you also cannot delete an already existing tier.

## Create tiers and configure tier upgrade conditions

You can configure each tier with a color of your preference. 

 To create and configure tiers, follow these steps.

1. On **Intouch**, navigate to Menu > **Loyalty+** > **Programs**.
2. In **Programs**, select the program you want to edit.
3. Click **Edit Program** 

![aee66ef ZNhg8Eni7QE7V6GvXqesb5jyV10T6zpyUg](https://files.readme.io/aee66ef-ZNhg8Eni7QE7V6GvXqesb5jyV10T6zpyUg.png)

4. Create a **base tier**:

* Navigate to the **Tiers** tab. You will see a default or base tier.
* Click the **Edit** icon to modify the name of the tier. 

![e455bc0  3knd43pbF0N3mxEL3vWP5aYOvGDguWlqA](https://files.readme.io/e455bc0--3knd43pbF0N3mxEL3vWP5aYOvGDguWlqA.png)

* Name the tier.

![9da26dc roY0elC8E0xuYw51SNPoX0etzW8daFVPOQ](https://files.readme.io/9da26dc-roY0elC8E0xuYw51SNPoX0etzW8daFVPOQ.png)

* Describe the tier in brief.

![7855cb6 LlQQVFsPaRXfixT25lFT0A73CgXy x9IjQ](https://files.readme.io/7855cb6-LlQQVFsPaRXfixT25lFT0A73CgXy_x9IjQ.png)

* Select an appropriate color for the tier if required. 

![e7ad1a2 U4ueI0yJBcK1wWtMYwi iJ9TDgIKbKdSXQ](https://files.readme.io/e7ad1a2-U4ueI0yJBcK1wWtMYwi-iJ9TDgIKbKdSXQ.png)

> 📘
>
> You cannot set conditions for the default tier.

5. Click **Done** to save.

## Create more tiers and configure tier upgrade conditions

From the second tier that you create, you need to configure the eligibility criteria for the tier upgrade and define the upgrade condition for each tier. This needs to be done by going to the Advanced Settings tab.

> 📘
>
> * The eligibility criteria type that you set for tier upgrade remains the same for all the subsequent tiers that you create. 
> * Make sure you create tiers in sequence. You cannot create a new tier between existing tiers and cannot delete an existing tier.

1. Click **Create New Tier** and do the following.

* Name the tier.
* Describe the tier.
* Select an appropriate color for the slab if required.

2. In **Define Eligibility**, define conditions that will make the customer eligible to move on to this tier.
3. In **Eligibility Criteria**, select the base consideration for tier upgrade.

<Table align={["left","left"]}>
  <thead>
    <tr>
      <th>
        Option
      </th>

      <th>
        Description
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Current points
      </td>

      <td>
        Upgrade tier based on the active points of the customer.\
        Enter the active points required for a customer to upgrade tier in **If value**. For example, a customer needs 100 active points to upgrade the tier.
      </td>
    </tr>

    <tr>
      <td>
        Lifetime points
      </td>

      <td>
        Upgrade tier based on the total points earned by the customer to date.\
        Enter the lifetime points required for a customer to upgrade tier in **If value**.
      </td>
    </tr>

    <tr>
      <td>
        Lifetime purchases
      </td>

      <td>
        Upgrade tier based on the total purchase amount of the customer to date.\
        Enter the lifetime purchases required for a customer to upgrade tier in **If value**.
      </td>
    </tr>

    <tr>
      <td>
        Tracker Value
      </td>

      <td>
        Upgrade tier based on the tracker values.\
        If Tracker Value is selected, in **If Tracker** select your preferred tracker and in **In tracking period**, select the duration of tracking,\
        Enter the tracker value required for a customer to upgrade tier in **If value**.
      </td>
    </tr>
  </tbody>
</Table>

4. In **Upgrade type**, select type of tier upgrade. This is applied when a customer fulfills the eligibility criteria.

<Table align={["left","left"]}>
  <thead>
    <tr>
      <th>
        Option
      </th>

      <th>
        Description
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Issue points and then upgrade to the next tier
      </td>

      <td>
        1. Points for the current transaction are issued based on the customer's current tier settings, then
        2. The tier is upgraded.
      </td>
    </tr>

    <tr>
      <td>
        Upgrade to the next tier and then issue points
      </td>

      <td>
        1. The tier is upgraded, then
        2. All points for the transaction are issued according to the new tier setting.
      </td>
    </tr>

    <tr>
      <td>
        Issue points, upgrade tier, and then issue remaining points
      </td>

      <td>
        Points are issued in two parts based on the amount required for upgrading the tier.  

        1. Only points required for the customer to be upgraded to the next tier are issued based on the current tier’s settings.
        2. The remaining points from the transaction are issued based on the upgraded tier’s settings.This option only works for the action **Transaction Point Allocation** in the  **Transaction Add** activity.
      </td>
    </tr>
  </tbody>
</Table>

5. Click **Add Secondary Criteria**, to add another eligibility criteria. For example, if you have the primary eligibility criteria on lifetime purchases, you can also another on tracker value.

![63f7123 cjR389e6sAFWmcIi6rKMd26ejBGh2zmBNg](https://files.readme.io/63f7123-cjR389e6sAFWmcIi6rKMd26ejBGh2zmBNg.png)

6. Click **Done**.

## Configure Tier Downgrade

Tier downgrade is lowering the tier of customers who are not active with the org or are only partially active in terms of purchases and visits. You can downgrade the customer to any lower tier. 

* In **Create New Tier**, enable **Set Validity**. Once this is enabled in any of the tiers, the Validity options will get enabled for you in Advance settings. 

![2cc1ca5 6BORG3nVtsJaHdZ4obuwewqiP9JlgY9sOQ](https://files.readme.io/2cc1ca5-6BORG3nVtsJaHdZ4obuwewqiP9JlgY9sOQ.png)

To configure tier downgrade, you need to setup the Validity of the Tier. 

* In the Advance settings, under "Validity", set the time till when the current tier of the customer will be valid, after which the tier will be either renewed or downgraded. 
* If the Validity is not added, that means, the tier will be valid till the next tier upgrade. 

![fff112c Screenshot 2023 11 10 at 1](https://files.readme.io/fff112c-Screenshot_2023-11-10_at_1.04.57_PM.png)

1. <br />
2. As you can see here, The Validity section provides 3      options. 

<Table align={["left","left"]}>
  <thead>
    <tr>
      <th>
        Option
      </th>

      <th>
        Description
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Until tier upgrade or Fixed duration
      </td>

      <td>
        The Validity Period suggests, that the tier will be valid till the next tier upgrade, and you get the option to choose, whether you want to downgrade the customer or not.\
        With this validity, you can choose the three tier extension methods talked bout below. 
      </td>
    </tr>

    <tr>
      <td>
        Till next registration date of the customer 
      </td>

      <td>
        The customer's tier will be valid till the next registration date of the customer. This registration date is, the date, customer got enrolled into the loyalty program. Every year, compulsorily, customer will be evaluated for their tier to be renewed or downgraded on this date (different for different customers).\
        With this validity, you do not get to choose tier extension, the tier by default gets extended for 12 months, i.e from registration date of the current year, to the registration date next year.\
        Although here, you can select Minimum duration, for which the customer gets to stay in the same tier in the first cycle. Read more about it below.  
      </td>
    </tr>

    <tr>
      <td>
        Till Fixed Date
      </td>

      <td>
        The customer's tier will be valid till a fixed date chosen by the brand. Every year, compulsorily, customer will be evaluated for their tier to be renewed or downgraded on this date (same for all customers).\
        With this validity, you do not get to choose tier extension, the tier by default gets extended for 12 months, i.e from fixed date of the current year, to the fixed date next year.\
        Although here, you can select Minimum duration, for which the customer gets to stay in the same tier in the first cycle. Read more about it below.
      </td>
    </tr>
  </tbody>
</Table>

**Minimum Duration in case of Registration date**By setting a minimum duration, the tier stays valid for that  minimum duration during the first cycle, the validity check will begin from the customer’s registration date every year\
Example: Registration date - 25th Oct, Minimum duration set - 6 months and  Tier start date - 20th Oct, 2023 Validity period will be till 25th Oct, 2024( Validity period would have been until October 25, 2023 without minimum duration)

**Minimum Duration in case of Fixed date** -  By setting a minimum duration, the tier stays valid for that minimum duration during the first cycle, the validity check will begin from the fixed date every year\
Example: Fixed date - 25th Oct, Minimum duration set - 6 months and Tier start date - 20th Oct, 2023\
Validity period will be till 25th Oct, 2024(Validity period would have been until October 25, 2023 without minimum duration)

* If you select, "Until Tier upgrade or Fixed Duration", In the **Validity Period** in each tier, enter months after which the tier will expire.

![098d7da my74mkqGjpPGcbmAL lhBwL MJA1V8rQmA](https://files.readme.io/098d7da-my74mkqGjpPGcbmAL_lhBwL_MJA1V8rQmA.png)

* In **Downgrade to**, select the tier to downgrade the customer to.

| Option                                   | Description                                                                                                                                                                                                                                                                                                                                                  |
| :--------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| One tier below                           | Downgrades customers to the immediate bottom tier.                                                                                                                                                                                                                                                                                                           |
| An appropriate tier based on eligibility | Downgrades to a lower-tier based on upgrade condition. For example, if a customer has 500 current points and is in the third tier, and redeems 200 points and now has 300 current points, and the second tier's requirement is to have 200-350 current points, then the customer is downgraded to the second tier irrespective of other downgrade conditions |
| The lowest Tier                          | Downgrades to the base tier.                                                                                                                                                                                                                                                                                                                                 |

![72a1692 BHpmRkP0IexF9obro208KXZm9CMEoyEPMw](https://files.readme.io/72a1692-BHpmRkP0IexF9obro208KXZm9CMEoyEPMw.png)

* Enable **Set Renewal Conditions** 

To renew the tier, you will have to choose, how will the validity of that tier which is renewed, will be extended.\
These options are only available, **if you choose "Until Tier upgrade or Fixed Duration"**, as the validity period. 

* In **How will it get extended**, select when to validate tier downgrade conditions.

> 📘
>
> Validity extension is the same for all tiers.

| Option                                             | Description                                                                                                                                                                                                                      |
| :------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| By 1 month                                         | The first validity check will be performed as per the tier’s validity period calculated from the last tier change date. Subsequent checks will be performed after 1 month duration i.e. on the same date every month thereafter. |
| By tier's month downgrade cycle duration           | The validation checks will also be performed as per the tier’s validity period (i.e. the first and all subsequent validity checks will be performed with haps equal to the tier’s validity period)                               |
| From fixed date by tier’s validity period duration | The first validity check will be performed on this selected date. Subsequent checks will be performed as per the validity period of each tier calculated from this fixed date.                                                   |

![](https://files.readme.io/da5cb09-Screenshot_134.png "Screenshot (134).png")

5. Click **Done**.

## Examples of how the tier expiry and tier downgrade check dates vary for each option of How will it get extended

For the downgrade based on the last tier change date - **By 1 month**:

During tier validation, if a customer is qualified to continue in the same tier, irrespective of the validity period, the tier validity is extended for one month. If the tier is expiring on March 15, 2021.

| Expiry Check Type | First Expiry Check | New Expiry Date | Second Expiry Check |
| :---------------- | :----------------- | :-------------- | :------------------ |
| Daily expiry      | March 15, 2021     | Apr 15, 2021    | Apr 15, 2021        |
| Month-end expiry  | March 31, 2021     | April 30, 2021  | April 30, 2021      |

For the downgrade based on the last tier change date - **By tier's month downgrade cycle duration:** 

If a tier validity is 12 months (**set in months from date**) and a customer is qualified to continue in the same tier during validation, the tier validity is extended for one more year. If the tier is expiring on March 15, 2021.

| Expiry Check Type | First Expiry Check | New Expiry Date | Second Expiry Check |
| :---------------- | :----------------- | :-------------- | :------------------ |
| Daily Expiry      | March 15, 2021     | March 15, 2022  | March 15, 2022      |
| Month-end expiry  | March 31, 2021     | March 31, 2022  | March 31, 2022      |

For the downgrade based on the **Fixed date**:

The **Fixed Date** is set to **2021-3-1** with a  validity of 2 months (**months from date**). If a customer is qualified to continue in the same tier during validation, the tier validity will be extended for 2 more months.

| Expiry Check Type | First Tier Expiry Check | New Expiry Date | Second Expiry Check |
| :---------------- | :---------------------- | :-------------- | :------------------ |
| Daily Expiry      | March 1, 2021           | May 1, 2021     | May 1, 2021         |
| Month-end expiry  | March 31, 2021          | May 31, 2021    | May 31, 2021        |

> 📘
>
> In Fixed Date, irrespective of the date you set, it will consider from the 1st of that month. Hence, in the preceding example, even if the date is Oct 21, 2018, it will consider Oct 1, 2018, as the start date for the tier validity period.

## Configure renewal conditions

You can renew a customer’s tier after the validity period by defining certain conditions. To configure conditions for tier renewal, do the following.

1. In **Create New Tier**, after configuring the tier validity, enable **Set Renewal** Conditions.

![ea204bb 8AeLhrxITeOji3buJXMOU3cWZkguZAPxwA](https://files.readme.io/ea204bb-8AeLhrxITeOji3buJXMOU3cWZkguZAPxwA.png)

2. Enable **Purchases** and enter the purchase value.

> 📘
>
> The customer has to make a transaction for the configured amount within the validity period.

![0a204e5 02CZG jyXDbWH5XU1fyQjFqm0PtWj4Do1A](https://files.readme.io/0a204e5-02CZG-jyXDbWH5XU1fyQjFqm0PtWj4Do1A.png)

3. Enable **No of visits** and enter the number of visits that the customer has to make within the validity period of the tier.

![731247e C6Lt1YI qWVDtsOukkfEyZBUeKkLNkT9OQ](https://files.readme.io/731247e-C6Lt1YI-qWVDtsOukkfEyZBUeKkLNkT9OQ.png)

4. Enable **Points earned** and enter the number of points that the customer needs to earn within the validity period.

> 📘
>
> Tier renewal happens if any of the when conditions enabled are satisfied. For example, if you set purchases > 1000 and Points earned > 10. A customer's tier is downgraded only if all the conditions are not satisfied, if any one of the conditions are true, tier will be renewed.

![438f36d LzxlyjSfMXc8FZblzwnQa9QHiuQ RjuOqw](https://files.readme.io/438f36d-LzxlyjSfMXc8FZblzwnQa9QHiuQ-RjuOqw.png)

5. Click **Done**.

## View Tier Configuration

You can view configured slabs in Tiers. The first slab is the default slab and in the second slab, you can see the eligibility criteria which is the same for all tiers along with conditions that were configured. Each slab is interconnected, which shows the sequential flow, the arrow also leads to downgrading information, displaying the downgrade condition.

![16bcf7b XK4eMPCusp 3gHRrZUIDs8uO7xR HF1zIg](https://files.readme.io/16bcf7b-XK4eMPCusp-3gHRrZUIDs8uO7xR_HF1zIg.png)

## Validity Settings (in Advanced Settings for Tiers)

1. Check tier expiry on a daily basis: By default, the validity of tiers is checked on the last day of the validity period month. If you don’t want that to happen, this setting can be checked yes for the validity check to happen on the last day of the expiry itself, rather than the last day of the respective month.
2. Validate for downgrade condition to a return transaction: This setting only works if the transaction that caused the upgrade to happen gets returned and downgrade (if applicable according to renewal conditions) will happen at the end of the day. Known shortcomings to this setting are, one, if a transaction which did not cause the upgrade is returned, the downgrade does not happen, and, two, the checks only happen at the end of the day, so a customer can theoretically make a big transaction to gain the benefits from a better tier and then return the items to go back to their original tier, and there will be no drawbacks to them in the process.\
   3.Extend available points to the next cycle: This setting is applicable for all points expiry conditions which are configured to expire basis 'Tier based expiry date'.

## NOTE

Renewal or Upgrade can also be done “forcibly” by using the “Renew Tier” or “Upgrade to Tier” action respectively (this supports User Group Loyalty also). 

* You can select the slab to upgrade when configuring these actions. It sets the same validity as the program configured, but here the upgrade happens without the customer actually reaching the milestones. But further renewals then happen according to the program configuration. 
* You can’t set a custom validity or renewal condition using this, thus, nobody can have individual/different validity periods or renewal conditions across the program. The settings for everyone in the program are the same. So, upgrades done by strategy, actions or import result in the same condition for the customer. Renewals using this action extend validity as per the configuration done in the program.

There is an event called “Tier gets upgraded” which gets triggered whenever a customer’s tier is upgraded due to an action. 

* If your basis for upgrading is points, it could trigger in non-transactional events as well but if it's a tracker or lifetime purchase it only triggers in transactional events. This event has an action called “Upgrade using tier” (different from the upgrade tier action). 
* Also, the expression should be true.
* And if this action is not present, the upgrades due to strategy would also not work.

## Use Cases

Airline Industry

* Airlines can create loyalty programs to reward members with points they can use for flights or with their partners. 
* These programs can have tiers, for example, silver, gold and platinum. To qualify for any of these tiers, a member must earn a specific number of points in a calendar year, or take a set number of flights. 
* For example, to qualify for the silver tier (the easiest tier to achieve) a member must earn 35,000 points in a calendar year, or fly 20 flights.

QSRs

* Restaurants can create loyalty programs that can be primarily used through their app, making it convenient for members. 
* Special in-app offers can be configured, which are sent as push notifications and emails so people know when they're eligible for a reward.
* Tiers can again be used in this industry to provide better incentives to the better customers, for example, free appetizers, free delivery, or better discounts.

Fashion Industry

* Fashion brands can create rewards programs with tiers based on how much members spend within a year (the basic program can be free to join, while a subscription program can also be set up). Progressing to higher tiers shells more points earned per dollar, and better rewards.
* Purchases earn you a certain number of points per level, and these points can be redeemed for rewards - trial-size and full-size beauty products of your choice, including exclusive products non-members can’t access.
* Members can also receive a choice of birthday gifts, and depending on their threshold, they can even gain access to exclusive events and experiences.

## Integrations

There are no APIs which can be used to change tiers for a customer externally right now. We can use fetch APIs, which can be used to get tier information of a customer. Also, light APIs are also used to get the most important/relevant part of the customer’s tier dynamics quickly. If the customer is in the base tier, no expiry date is required and if in the top tier, the next tier number is set to -1.

The system can calculate the gap to upgrade and the gap to renew parameters for customers, which are aimed to get the information on the gap or value of the tier upgrade parameter used, which is yet to be allocated to upgrade the customer’s current tier. But this is an add-on feature, so please raise a request to get this activated and only then can it be used for the org.

You can read about importing data for tiers/slabs [here](https://support.capillarytech.com/en/support/solutions/articles/4000102775-points-slabs#Slab).

## FAQs

1. Can I add a tier in between two existing tiers?\
   You cannot add a tier between two existing tiers. A new tier is always an upgrade to the last tier. If it is highly\
   required to add a tier in between two tiers, contact your Capillary PoC. The Capillary Admin needs to perform\
   the following steps.

* Edit all the tiers from where you need to modify
* Change rule expressions and conditions
* Do a data clean up 
* Reconfigure the loyalty program

2. Can I change the points allocation type of an existing tier?\
   When you create a tier, it shows the default points allocation type - prorated (% of the transaction amount). To\
   change the points allocation type, create a new points allocation strategy. Then, on the **EventsView** page,\
   modify the action for the **TransactionAdd** event by replacing the existing Transaction Points Allocation\
   strategy\
   with the new strategy.\
   Save the changes and Reconfigure the loyalty program to reflect the changes in the live program.

3. How are tiers structured in an MLP?\
   Tiers are independent across programs in an MLP. Each program can have different numbers of tiers.

4. Can different tiers have different eligibility criteria?\
   The eligibility criteria that you set for tier upgrade remains the same for all the subsequent tiers that you create.

5. What happens to the status of my customer if he/she does not fulfill any of the tier eligibility criteria?\
   By default, the customer will be in the base tier of the program.

6. Does each of the renewal conditions have to be met or any one of them is enough?\
   As of now, it's an 'or' condition, so either of those conditions will result in a renewal.

7. Will changing eligibility force the tiers to compute the settings for all users in advanced settings?\
   Yes, it depends on the tier evaluation cycle.

8. Can I set an action in the workflows to send a communication to the customer after I retain the customer tier based\
   on conditions such as at least 10 visits or 1000 points, even if the customer has not met the tier criteria?\
   Yes, that action can be set in the workflows.

9. Is it possible to upgrade tiers by using any other means apart from the usual upgrade conditions like a coupon or\
   passing the points rule?\
   As of now, you can do this manually through member care.

10. When I configure 26K points to upgrade a tier (say Gold), will it consider 26,000 points or 26,001 to qualify?\
      When configuring a tier, you will only see upgrade rules greater than or equal to (>=). Hence, a customer with\
      26000 points or more will be in the Gold tier.
