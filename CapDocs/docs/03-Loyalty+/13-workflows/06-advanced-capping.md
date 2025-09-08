---
title: Advanced Capping
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
# Overview

To help maintain control over their liability, brands can limit the points that they issue to customers. This ensures that points are issued only until the set threshold is reached.

## Types of limits

There are two types of limits for which points can be capped.

1. **Individual transaction limits**: These limits are applied at each transactional level. For each successful transaction, points are issued based on the conditions set. You can create a maximum of ten individual transaction limits for a loyalty program.\
   **Example:** A retailer limits loyalty points to a maximum of  300 points per transaction. If a customer makes a purchase of ₹1000 and could earn 1000 points, they will only receive 300 points due to the limit. This helps the retailer manage their points.

   ![82e89ff3111b2d06e8efc51a97ed0ce5d161b22b1a3b319c83dea4645d0ad19d image](https://files.readme.io/82e89ff3111b2d06e8efc51a97ed0ce5d161b22b1a3b319c83dea4645d0ad19d-image.png)

2. **Individual Customer Limits:** These limits are set at the customer level. When choosing this limit type, you can specify both the 'duration of the limit' and the 'audience type' to which it will apply—options include all customers, specific customers, or customers enrolled via API.

   You can create up to ten limits for the "all customers" audience type and a maximum of 50 limits for other audience types. However, the total number of limits across all audience types cannot exceed 50. For instance, if you define ten limits for the "all customers" audience, you can only create 40 limits for specific customers and those enrolled via API combined.

   ![e737204c98e5140f7f786f5b01bee14b45ddebe8a9cbaa26ad06a37785170e20 image](https://files.readme.io/e737204c98e5140f7f786f5b01bee14b45ddebe8a9cbaa26ad06a37785170e20-image.png)

<br />

<Note title="Note">
You can increase the reward currency allocation limit for your organisation. To request an increase, create a JIRA ticket for the Capillary Product Support team. Include the desired maximum limits for both individual and transaction-based capping rules. The relevant configuration keys are:

* `CONF_EVENT_CAPPING_CREATION_MAX_LIMIT`: Sets the total number of customer event capping rules allowed for an organization.
* `CONF_AUTO_ENROL_EVENT_CAPPING_CREATION_MAX_LIMIT`: Sets the maximum number of transaction-based capping rules allowed for an organization.
</Note>

# Creating a points / alternate currency allocation limit

To create a points / alternate currency allocation limit, follow these steps:

1. Navigate to a loyalty program and select **Edit Program**.
2. Select **Advanced settings** and navigate to the **Points Allocation Limits** section.
3. Select **+Add Limit** to open the **Add points allocation limit** window.
4. Enter the required details and define the KPI and limit values.\
   The fields are as follows:

<Table align={["left","left"]}>
  <thead>
    <tr>
      <th>
        Field
      </th>

      <th>
        Description
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        **Name**
      </td>

      <td>
        A unique name for the allocation limit.
      </td>
    </tr>

    <tr>
      <td>
        **Limit on**
      </td>

      <td>
        The entity type on which the limit will be set. Refer to the section for more information on [types of limits](https://docs.capillarytech.com/docs/advanced-capping#types-of-limits).
      </td>
    </tr>

    <tr>
      <td>
        **Reward currency**
      </td>

      <td>
        The reward currency to apply capping. Capping can be applied on [points](https://docs.capillarytech.com/docs/points) or [alternate currencies](https://docs.capillarytech.com/docs/alternate-currencies). The available alternate currencies for the organisation are listed in the drop down.
      </td>
    </tr>

    <tr>
      <td>
        **Currency limit based on**
      </td>

      <td>
        The KPI on which the limit will be set. Refer to the section for more information on [types of KPIs](https://docs.capillarytech.com/docs/advanced-capping#types-of-kpis).
      </td>
    </tr>

    <tr>
      <td>
        **Limit value**
      </td>

      <td>
        The maximum number of reward currency (points or alternate currency) that can be awarded to the customer.
      </td>
    </tr>

    <tr>
      <td>
        **Scope**
      </td>

      <td>
        Apply capping based on a specific scope. The scopes are as follows: - All transactions: Apply capping for all transactions. - [Brands](https://docs.capillarytech.com/docs/inventory-profiles#add-brands): Apply capping for a brand in the organisation. - [Categories](https://docs.capillarytech.com/docs/inventory-profiles#product-categories): Apply capping for a category in the organisation. - [Custom attributes](https://docs.capillarytech.com/docs/inventory-profiles#product-attributes): Apply capping for a product attribute in the organisation. - [SKU](https://docs.capillarytech.com/docs/inventory-profiles#inventory): Apply capping on a list of SKUs. You can upload a .csv file containing the list of SKUs. - [Store](https://docs.capillarytech.com/docs/store-hierarchy#create-store): Apply capping for a store in the organisation. - [Zone](https://docs.capillarytech.com/docs/store-hierarchy#create-zone): Apply capping for a zone in the organisation. **Notes:** - Brands, categories, custom attributes, SKU, store and zone can be filtered only for the Line-item amount and Line-item quantity KPIs. - The default option is **All transactions**.
      </td>
    </tr>

    <tr>
      <td>
        **Activity** (Applicable for individual customer limits)
      </td>

      <td>
        The customer activity on which the limit is set. You can set activities for the following types: **All Activities:** The limit is active for all [customer activities](https://docs.capillarytech.com/docs/activities). Points earned by the user from any activity (transaction, behavioural events) will be tracked under the capping. **Transaction Add:** The limit is active only for transaction related activities.
      </td>
    </tr>

    <tr>
      <td>
        **Audience** (Applicable for individual customer limits)
      </td>

      <td>
        When setting the limit, you can choose from the following customer segments: **All Customers:** Includes every loyalty customer in the program. **Specific Customers:** Capping only for the customers defined in the selected audience group. Refer to the documentation for more information on [audience groups](https://docs.capillarytech.com/docs/audience-management). **Enrol via API:** Incorporates customers enrolled in the capping through the [Enrol/Re-enrol a customer to a milestone/streak API](https://docs.capillarytech.com/reference/enrol-customer-to-a-milestone).
      </td>
    </tr>

    <tr>
      <td>
        **Refreshes every** (Applicable for individual customer limits)
      </td>

      <td>
        The time period for refreshing the limit. When the limit is refreshed, the customer can begin earning reward currencies till the limit is reached. The supported options are daily, monthly, quarterly, half-yearly, and yearly.
      </td>
    </tr>

    <tr>
      <td>
        **1st cycle starts on** (Applicable for individual customer limits)
      </td>

      <td>
        The start date of the 1st cycle or the date from which capping is enabled for the customer.
      </td>
    </tr>

    <tr>
      <td>
        **Total number of cycles** (Applicable for individual customer limits)
      </td>

      <td>
        The total number of times the limit is refreshed. Currently, the maximum number of cycles supported is 10.
      </td>
    </tr>

    <tr>
      <td>
        **Promotions**
      </td>

      <td>
        Include or exclude any active or upcoming loyalty promotions from the limit or include all active loyalty promotions part of the loyalty program. Select the action (**Include**, **Exclude** or **All**) from the drop down and select the loyalty promotions.

        <br />

        **All:** Allocation limits are created only for all active loyalty promotions.
        **Include:** Allocation limits are created only for the selected loyalty promotions.   - **Exclude:** Allocation limits are not created for the selected loyalty promotions. **Note:** You can only include or exclude a loyalty promotion; you cannot simultaneously do both.

        <br />

        **Example:** A coffee shop chain BrewLabs sets a 500-point monthly limit per customer that resets every month. They run three loyalty promotions:
        Double Points Tuesdays
        Birthday Bonus
        Refer-a-Friend Bonus

        <br />

        **ALL:** Apply the cap to every loyalty promotion:    BrewLabs selects all loyalty promotions for the 500-point cap.
        Result: A customer can earn max 500 points total from all combined loyalty promotions per month.
        **INCLUDE:** Apply the cap only to specific loyalty promotions.    BrewLabs includes only Double Points Tuesdays and Refer-a-Friend Bonus.
        Result: - The 500-point cap applies only to these two - Birthday Bonus points don’t count toward the cap (unlimited).
        **EXCLUDE:** Apply the cap to all promotions except specific ones.    BrewLabs excludes the Birthday Bonus.
        Result: - Birthday Bonus points are exempt from the cap (unlimited). - All other promotions (Double Points Tuesdays + Refer-a-Friend) share the 500-point limit.
      </td>
    </tr>
  </tbody>
</Table>

<br />

![889f405819ddf7ac669bbcb161c9fce0abef8c3e4442c6621d68e0285e12756a image](https://files.readme.io/889f405819ddf7ac669bbcb161c9fce0abef8c3e4442c6621d68e0285e12756a-image.png)

5. Select **Done** to save the changes.

## Types of KPIs

There are five types of KPIs available through which points can be limited.

1. ### Reward currencies

   This is how the brands can directly apply capping on points or alternate currencies. There are three types of cappings for which limits can be applied:

   1. Regular: Loyalty points or alternate currencies issued to customers. These are the points from the programs.
   2. Promotional: Bonus points or alternate currencies that are awarded to the customer irrespective of any transaction. These are from the loyalty promotions.
   3. Regular + Promotional: A combination of regular and promotional points or alternate currencies.

   **Example:** A brand wants to issue a maximum of 1000 regular points on each transaction done by a customer.

2. ### Line-item amount

   This is an indirect way to control the points given to the customer using line-item amount. A line item refers to the individual products or services that a brand offers. Benefits can be capped based on transactions for that category of line items.

   **Example:** A brand wants to issue benefits for **beverage transactions** of up to ₹1000. No additional benefits will be issued for transactions on beverages that are above this limit.

3. ### Line-item quantity

   This is an indirect way to control the points given to the customer using line-item quantity. A line item refers to the individual products or services offered by a brand. Benefits can be capped based on the quantity for that category of line items.

   **Example:** A brand wants to issue benefits for **fuel transactions** of up to ten liters. No additional benefits will be issued for transactions on fuel that are above this limit.

4. ### Transaction amount

   Benefits can be capped based on the transaction amount.

   **Example:** A brand wants to issue benefits up to a total transaction amount of ₹1000. No additional benefits will be issued for transactions that are above this limit.

5. ### Transaction count

   Benefits can be capped based on the number of transactions done by a customer.

   **Example:** A brand wants to issue benefits for up to **five transactions** done by a customer. No additional benefits will be issued for transactions that are above this limit. This limit will be refreshed based on the defined period for the customer.

<Note title="Note">
s:
* Both line-item amount & line-item quantity type of capping cannot be used together. For example, if a capping is created based on line-item amount (in either the individual transaction capping or individual customer capping), then the line-item quantity capping cannot be used.
* The transaction count limit is applicable only for individual customer limits.
</Note>

## Capping in multi-loyalty programs

Organizations with multiple loyalty programs may have a default program and several loyalty programs configured. When a customer makes a purchase, the transaction is processed through the source program first, followed by the default program. Capping is processed in the same order. Capping rules for the source program are checked before those for the default program.

**Example**: A loyalty program allows **300 points** while the default program allows **200 points** per transaction. If a customer makes a transaction, they will get **300 points from the loyalty program** and only **200 points from the default program.**

# Transaction amount capping in tracker sets and points trackers

**Transaction Amount-Based Capping**: While transaction amount-based capping limits (e.g., limiting the points awarded based on a transaction cap of $500) apply across most rule sets, **they are typically not enforced within tracker sets or points trackers**. This means that in tracker evaluations, the full transaction amount is considered for points calculation, even if it exceeds a predefined cap.

However, cappings related to **transaction count** and **points allocation** do apply universally across all rule sets, including tracker sets and points trackers. This ensures that overall program limits, like the total number of transactions or maximum points awarded, remain consistent and are adhered to across all rule evaluations.

### Example scenario

**Capping Configuration**:

* **Transaction Amount Cap**: Points should only be allocated on a maximum of $500 per transaction.
* **Transaction Count Cap**: Maximum of 3 transactions allowed within a rolling 30-day period.
* **Points Cap**: Customers can earn up to 5,000 points per transaction.

**Customer Transactions**:

1. **Transaction 1**: Customer spends $800 on 1st September.
   * **Points Earned**: Based on the transaction cap, points should only be calculated on $500, resulting in:
     * $500 \* 50% = **250 points**.

2. **Transaction 2**: Customer spends $1,200 on 10th September.
   * **Points Earned**: Capped at $500, so points = $500 \* 50% = **250 points**.

3. **Transaction 3**: Customer spends $700 on 20th September.
   * **Points Earned**: Capped at $500, so points = $500 \* 50% = **250 points**.

### Tracker set evaluation

Suppose a points tracker is configured to evaluate these transactions:

* **Tracker Action**: The tracker evaluates each transaction amount and applies actions based on it (e.g., tier progression or issuing a reward).

In the tracker set:

* **Transaction 1**: Points awarded based on full $800 (ignoring the transaction amount cap) resulting in 800 \* 50% = **400 points**.
* **Transaction 2**: Points awarded based on full $1,200, resulting in 1,200 \* 50% = **600 points**.
* **Transaction 3**: Points awarded based on full $700, resulting in 700 \* 50% = **350 points**.

# Frequently asked questions

1. **Can I add quantity and amount limits together?**

   No, line-item amount and line-item quantity capping cannot be applied together. This is because the line-item amount and line-item quantity both refer to the same information on a transaction. Calculating them differently on the same item can cause ambiguity and computational challenges while applying capping.
2. **How does it work with set-level capping?**

   Brands can use set-level capping for cases not possible with this advanced capping. The idea of this advanced capping is to reduce the heavy dependency on set-level capping so that the overall use experience increases & the computational speed of the workflow increases.
3. **If have regular and promotional points what is applied first? So that users know what will be capped?**

   The hierarchy is: regular points, then promotional points. Regular points capping is validated first, followed by promotional points capping.
4. **Will I be able to see this data in member care?**

   Currently, there is no member care view for capping.
5. **Will I see cappings applied in evaluation logs?**

   Yes, capping details of transactions will be available in evaluation logs. The Sustenance team can view these details for debugging purposes.
6. **Can I pause cappings?**

   Currently, there is no way to pause a capping. Users can configure and delete a capping as needed.
7. **How do I exclude certain promotions from capping limits?**

   The “Exclude Promotions” option lets you configure capping so that any included promotion will be excluded.\
   Tip: To apply capping to only one promotion, select all promotions in "Excluded promotions" and then deselect that specific promotion.
8. **Can the total number of capping for each type be increased.**\
   You can create a maximum of **ten** individual transaction limits and a maximum of **50** individual customer limits (across all three audience types) for a loyalty program.