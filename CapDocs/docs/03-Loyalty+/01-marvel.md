---
title: Marvel
excerpt: ""
deprecated: false
hidden: false
metadata:
  title: ""
  description: ""
  robots: index
next:
  description: ""
---
## Optimize your rewards budget & catalog inventory

**Background**

The client wants to create a feature on their reward catalog app that allows them to set limits on how many of a specific item a user can add to their cart. These limits can be set to a specific number or refreshed daily and can also have a "never" option. When setting up this feature, there should be an option for administrators to specify these limits, and if a user attempts to add more items than the limit allows, the app should display an error message indicating the user cannot add more than the set limit.

Brands would want to set reward limits in loyalty programs for several reasons:

* Cost management: Setting reward limits helps brands to manage the costs associated with the loyalty program. By setting limits on the number of rewards that can be earned or redeemed, brands can control the overall cost of the program and ensure that it is financially sustainable.
* Encourage targeted behavior: Setting limits on rewards can encourage customers to engage with the brand in a more targeted and effective way. For example, setting a limit on the number of rewards that can be earned per purchase can encourage customers to make more frequent or larger purchases.
* Create a sense of exclusivity: Setting limits on rewards can create a sense of exclusivity and scarcity, which can make the rewards more valuable and appealing to customers.
* Promote fairness: Setting limits on rewards can help to promote fairness among customers and ensure that the rewards are distributed fairly among all members of the loyalty program.
* Help brands to evaluate the effectiveness of the program: Setting limits on rewards can help brands to evaluate the effectiveness of the loyalty program, by measuring the number of rewards earned and redeemed. This information can be used to make data-driven decisions about how to improve the program in the future.

Overall, setting reward limits in loyalty programs allows brands to manage costs, promote targeted behavior, create a sense of exclusivity, promote fairness, and help evaluate the effectiveness of the program.

**Configurations Allowed:**

As a marketing manager, you can define below limits at a reward level

* Max number of quantities that can be bought in a single transaction
* Max times a customer can purchase the reward in the reward duration

  * per day
  * per week (last 7 days)
  * per month (last 30 days)
* Max time the reward can be purchases across customers

  * per day
  * per week (last 7 days)
  * per month (last 30 days)
* In the fetchRewardInfo call, inventory consumption status is returned

  * For the day
  * For the week
  * For the month
  * Maintain audit logs at backend for now
* Based on the type of reward, following information will be displayed:

  * Intouch rewards will show the pre-configured reward level limit
  * Partner rewards will display a message to ensure there are no conflicting partner limits

Note : Users cannot update the above KPIs once the reward goes live, but they can enable or disable the KPI itself.

<Image alt="UI for the configuration will come in future sprints. Refer to the above image for reference." align="center" src="https://files.readme.io/68708bd-image1.png">
  UI for the configuration will come in future sprints. Refer to the above image for reference.
</Image>

**API Changes:**

To support the above use cases, the following updates have been made to the API that allow users to retrieve information about rewards and their associated limits and consumption KPIs:

* getBrandForAll: which fetches all rewards for a user for a specific brand
* getReward: which fetches a specific reward for a user for a specific brand
* getBrandRewards: which fetches all rewards for a specific brand
* getRewardById: which fetches a specific reward for a specific brand
* When issuing rewards, the system should simultaneously check if the reward is eligible to be issued and if the user has breached any set restrictions. If the user has exceeded the restrictions, the API should return an error message indicating that the maximum limit for the day/week/month has been reached and what the allowed limit is.

Refer to this [Tech Detailing Documentation](https://capillarytech.atlassian.net/wiki/spaces/LOYAL/pages/3569614922/Scoping+and+Assumptions+for+Reward+Constraints) here for further details.

## Enrich your rewards catalog view with the newly introduced custom fields

**Background**

In order to create a flexible rewards marketplace, it is important to give brands the ability to include additional, custom information when creating and issuing rewards. This custom data can be used for various purposes such as displaying personalized information within the app or website, and for accounting or partner reconciliation purposes.

Additionally, this custom data can also help brands to track and analyze the performance of their rewards, identify customer preferences and behavior, and make data-driven decisions to improve their rewards strategy. It can also be used to personalize communication with customers, and to segment and target customer groups based on their preferences and behavior. 

Furthermore, the ability to include custom data can also help brands to comply with legal and regulatory requirements, and to report on the performance of their rewards to stakeholders.

**Enhancements**

* Organization level users have the ability to create custom fields when creating or editing rewards.

  * Custom field name
  * Custom field scope

    * Reward
    * Catalog promotion
  * Custom field type&#x9;

    * Int
    * String
    * Date
    * Enum
  * isMandatory?
* Users can edit or delete these custom fields
* In future, these custom fields can also be implemented at the program level for MLP organizations.

**UI for the above configuration will come in future sprints. Refer to the below images for reference.**

![](https://files.readme.io/9f7fc6c-image1.png)

![](https://files.readme.io/f3ff2c8-image2.png)

For more information on the APIs [click here](https://capillarytech.atlassian.net/wiki/spaces/LOYAL/pages/3557130350/Custom+field+support+in+Marvel)

## Now run attractive discounts on your rewards catalog

Through marvel rewards, brands setup catalogs with products, coupons, cart promotions, vendor reward etc. The currency for all these rewards are points owned by the customer.

* With this feature, brands can\
  Create/edit/fetch catalog promotions on rewards
* Fetch applicable promotions in the get rewards api

**Feature Description**

Consider a scenario where, during a festive season or clearance sale, a brand can offer a discount of 10 points on the rewards from Feb 12 to Feb 14  

Now , once the promotion is applied to the reward, the point at which the reward is available will be the discounted value.The reward will revert back to its original points value after the promotion period ends.

![](https://files.readme.io/020a5a5-image2.png)

**How to get started?**

To get started , brands have to enable configuration from backend. ‘CONF_ENABLE_FEATURE_CATALOG_PROMOTION=true’.

**Creating Promotion**

* Brands can provide discounts on points during a specific period of time.

  * Create a catalog promotion with
  * Start and end date
  * Discount Type : ABSOLUTE, PERCENTAGE, FIXED
  * Discount value : 10
  * List of rewards on which this promotion should be applied.
  * Mobile : For each reward, the user sees discounted points during the applied promotion duration.
  * Mobile : Redeem a reward deducts discounted points during the promotion duration
* Brands can  to create catalog promotions on reward with the following fields

  * Promotion name
  * Promotion description
  * Promotion image
  * Promotion URL
  * Promotion duration  (start & end date)

    * Start date >= current date
  * Select reward(s) to which the promotion applied
  * Promotion benefit

    * % discount
    * Fixed
    * Target Fixed Price
  * Validations

    * One reward can only be mapped to one active promotion
    * When fixed, if discount >= points configured then return 0 as cost points for the reward
* A promotion is active, if running or yet to start and not disabled.

![](https://files.readme.io/ac811d6-image1.png)

**Editing Promotion**

* Rules for editing a promotion

  * Cannot edit expired promotion.
  * Can extend the end date of active promotion.
  * Can disable a promotion. Cannot enable it back.
  * Link or unlink reward, discount value/type, update promotion details.

![](https://files.readme.io/a1c1bd3-image3.png)

**Please note that the corresponding UI changes for this enhancement will be available in future sprints.**

**Viewing the configured Promotions**

Brands can  see the promotions configured for rewards under a  new tab titled “Promotions”

Following data can be seen here

* Promotion name
* Promotion duration
* Rewards linked
* Promotion benefit type & value
* Promotion status

For more information on the APIs [click here](https://capillarytech.atlassian.net/wiki/spaces/LOYAL/pages/3538878950/Flash+Sale+-+Catalog+Promotions+for+Reward)

## Rewards catalog now supports point redemption for unified multiple loyalty programs

**Background**

For MLP orgs, we support group redemption that enables customers to use their points across programs and redeem them. Similarly while doing the purchase from the reward catalog, we support the functionality to use the points across the programs.

* This allows customers to redeem rewards from multiple programs at once and make the most of their accumulated points.
* This feature also allows customers to easily compare the rewards available across all programs and make informed decisions about how to redeem their points.
* It also simplifies the redemption process for customers as they do not have to navigate through multiple programs to redeem their rewards.
* This feature also allows MLP organizations to better track and manage the redemption of points across multiple programs, and make data-driven decisions to optimize their rewards strategy.
* It also allows customers to redeem rewards with more ease and flexibility.

**User journey:**

* The customer will first choose the reward, then view the available rewards they wish to purchase.
* When attempting to buy a reward, the system will check the customer's points balance across all programs
* Points redemption will occur dynamically based on the customer's available points across all programs.
* Once the points are used, reward will be issued to the customer.

**To get started:**

If group redemption is not enabled simply raise a ticket to sustenance for the same

![](https://files.readme.io/a103313-image1.png)
