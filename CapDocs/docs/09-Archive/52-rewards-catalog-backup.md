---
title: Rewards Catalog backup
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
## What is a rewards catalog?

A rewards catalog is a curated collection of items or experiences that are available for redemption by members of a loyalty program. It serves as an incentive for customers to participate in the loyalty program and engage with the brand on a deeper level. Brands can leverage a rewards catalog to offer a wide range of rewards, such as merchandise, gift cards, coupons, and cart promotions to their loyal customers.

The rewards catalog plays a crucial role in helping brands enhance their loyalty programs.

1. It provides tangible benefit to customers, motivating them to stay loyal to the brand and continue making repeat purchases.
2. It creates a sense of excitement and anticipation among customers as they earn points or reach milestones towards redeeming rewards from the catalog.
3. The rewards catalog serves as a powerful marketing tool for brands. It allows them to showcase their products or services in an enticing way, highlighting their value and unique offerings.
4. This can lead to increased brand exposure and customer engagement, as customers browse through the catalog to explore the available rewards.

Furthermore, the rewards catalog can also help brands gather valuable customer data and insights. By tracking the redemption patterns and preferences of customers, brands can gain valuable information about their customer preferences and behaviors, which can be used to further tailor their marketing strategies and offerings.

## Key features

1. Points can be redeemed from different points vendor, like Capillary or Bonuslink
2. Brands can easily set up the capillary coupons, vouchers or cart promotions as a reward
3. Brands can also tie up with different reward partners for setting up their reward catalog
4. Our reward catalog is based on API first architecture which means that brands can easily use our APIs to set up the rewards without any UI in place
5. Users can use both their individual wallet points and group wallet points to purchase the reward. This will allow them to have more flexibility in redeeming their points and enjoy the benefits associated.

## Rewards Catalog Workflow

![](https://files.readme.io/f640bba-rewards_catalog_workflow.jpg)

## End Customer's Journey to redeem the reward

<img src="https://files.readme.io/8c5342d-image13.png" alt="Customer journey" style={{display: 'block', margin: '0 auto', border: '1px solid #ccc'}} />

## How to get started and create rewards?

**Note : Rewards catalog is based on API first architecture, so brands can directly use the APIs to create, update and view the rewards.**

### Reward Creation

To create rewards on the Marvel UI, perform the following:

1. Go to the old UI of Capillary and type Marvel in the search bar.

<img src="https://files.readme.io/25357e9-image7.png" alt="Marvel search" style={{display: 'block', margin: '0 auto', border: '1px solid #ccc'}} />

2. Click on Marvel Rewards. You will be redirected to the below page for your org

<img src="https://files.readme.io/b29bae0-image10.png" alt="Marvel rewards page" style={{display: 'block', margin: '0 auto', border: '1px solid #ccc'}} />

3. To create a new reward, click on the + icon on the top right corner. Enter all the fields mentioned below:

<img src="https://files.readme.io/adf406c-image12.png" alt="Create reward form" style={{display: 'block', margin: '0 auto', border: '1px solid #ccc'}} />

a. Type - Select the type of reward you want to create (e.g., points, voucher, free voucher). This is just a metadata.

1. Vouchers: Digital coupons generated against redeeming customer points. For example, redeem 50 points for a 10% off coupon.
2. Physical voucher: Physical coupons generated against redeeming customer points. For example, redeem 150 points for a flat 150 off coupon.
3. Free voucher: Digital coupons generated without any points redemption.

b. Priority - Set the priority level for the reward (e.g., high, medium, low or 1, 2, 3, 4 and so on). This is a metadata for the reward.

c. Category - Select the category for the reward (e.g., fashion, electronics, groceries). You can create the categories in the category section in Marvel. This is a metadata for the reward.

<img src="https://files.readme.io/c914bfd-image9.png" alt="Category selection" style={{display: 'block', margin: '0 auto', border: '1px solid #ccc'}} />

d. Subscription - This is not working and to be ignored while creating a reward.

<img src="https://files.readme.io/916cba9-image5.png" alt="Subscription field" style={{display: 'block', margin: '0 auto', border: '1px solid #ccc'}} />

e. Advanced Filtering - Use filters such as tier, group, or label to specify the target audience for the reward. This is a metadata for the reward.

f. Intouch Points - Define the number of intouch points required to purchase a reward.

g. Redemption type - Define the redemption type if it is intouch reward or vendor reward or cart promotion.

1. InTouch only rewards: These are points or coupons created in Capillary and uses Capillary APIs.
2. Vendor only rewards: These are either points or coupons created at the vendor end. Capillary uses vendor specific APIs directly to identify and issue rewards. In this case, there will be no data at the Intouch side and redemption doesn't happen in Capillary.I
3. Vendor Intouch reward:

> 🚧 **Warning**
>
> Attention
>
> It is not recommended to use the `Vendor Intouch reward`redemption type. Instead, you can use the `Vendor only reward` redemption type to issue coupons directly through the vendor API.

Here, the system will use the vendor specific API to issue vendor coupons and after receiving a successful response from the API, the system will use the [capillary issue coupon](https://docs.capillarytech.com/reference/issue-coupon-1) API to issue coupons and retrieve the coupon codes. This redemption type helps to track the number of coupons issued to customers through the vendor system.

4. Cart Promotion rewards: These are promotions created in Capillary.

### Vendor flow to call partner APIs

h. Vendor and vendor redemption

<img src="https://files.readme.io/9d133c0-image4.png" alt="Vendor redemption" style={{display: 'block', margin: '0 auto', border: '1px solid #ccc'}} />

In Vendor redemption, you can configure rewards linked to a particular vendor. You can also configure multiple actions in a single vendor redemption, for example, one to check if the customer has points and another to issue the reward.

**Begin by creating the reward partners. Navigate to the rewards vendor section**

<img src="https://files.readme.io/df3b3f3-image6.png" alt="Rewards vendor section" style={{display: 'block', margin: '0 auto'}} />

1. Click on the plus icon and assign a name to your reward partner, such as "target". Assign key-value pairs to the target. These will be used in all vendor redemptions created in subsequent steps. You can add frequently used fields as key-value pairs here. Then, click on save and create the vendor.

<img src="https://files.readme.io/7542727-image2.gif" alt="Create vendor" style={{display: 'block', margin: '0 auto'}} />

2. With the vendor created, select "target" and create vendor redemptions. Vendor redemption under vendor means specific APIs for the target will be called, created as a partner reward, and later linked to the catalog item.

<img src="https://files.readme.io/9b46d36-image5.gif" alt="Create vendor redemption" style={{display: 'block', margin: '0 auto'}} />

3. Click on the plus icon and assign a name to your vendor redemption. Choose the type of reward, such as miles, cash wallet, cashback card, discount, charity games, vouchers, sweepstakes, auction, etc.

<img src="https://files.readme.io/77c56b3-image4.gif" alt="Vendor redemption type" style={{display: 'block', margin: '0 auto'}} />

4. Actions are the APIs that will be called to issue this particular reward. Assign an execution order to the actions.

<img src="https://files.readme.io/14da9bc-image11.gif" alt="Actions configuration" style={{display: 'block', margin: '0 auto'}} />

5. Provide the API URL for the vendor and specify the API type.

<img src="https://files.readme.io/475abc8-image12.gif" alt="API URL configuration" style={{display: 'block', margin: '0 auto'}} />

6. Add the request body. Specify the redemption value and mobile number as variable here which will be passed in the request of issue reward call.

<img src="https://files.readme.io/64254c3-image8.gif" alt="Request body" style={{display: 'block', margin: '0 auto'}} />

7. API headers contain authentication details and content-type. Enter the authorization in the API headers and save them by clicking on the + icon. Add more API headers as needed and save them.

<img src="https://files.readme.io/b9a21e1-image7.gif" alt="API headers" style={{display: 'block', margin: '0 auto'}} />

<img src="https://files.readme.io/44e2fde-image3.png" alt="API headers summary" style={{display: 'block', margin: '0 auto'}} />

8. Context keys contain the response of the vendor. Specify the fields to return in the response. Enter "voucher" as a mandatory param if storing any code or unique id. Provide the path of the response as value for that particular field.

<img src="https://files.readme.io/237d1c2-image9.gif" alt="Context keys" style={{display: 'block', margin: '0 auto'}} />

9. Select the response value needed in the issue reward response block and click on save to save the vendor redemption.

<img src="https://files.readme.io/e6f04c4-image13.gif" alt="Response values" style={{display: 'block', margin: '0 auto'}} />

10. Create as many vendor redemptions as needed under a particular reward vendor.

<img src="https://files.readme.io/310e9ce-image10.png" alt="Multiple vendor redemptions" style={{display: 'block', margin: '0 auto'}} />

11. Once the vendor redemptions are created, return to the reward creation and create a new reward and select the vendor and vendor redemption to be linked to this reward.

<img src="https://files.readme.io/55ce942-image1.gif" alt="Link vendor to reward" style={{display: 'block', margin: '0 auto'}} />

**Example 1 for vendor redemptions**

<img src="https://files.readme.io/87de328-Screenshot_2024-07-23_at_2.42.29_PM.png" alt="Vendor redemption example 1 - part 1" style={{display: 'block', margin: '0 auto'}} />

<img src="https://files.readme.io/03097c6-Screenshot_2024-07-23_at_2.42.38_PM.png" alt="Vendor redemption example 1 - part 2" style={{display: 'block', margin: '0 auto'}} />

<img src="https://files.readme.io/9ac1530-Screenshot_2024-07-23_at_2.42.48_PM.png" alt="Vendor redemption example 1 - part 3" style={{display: 'block', margin: '0 auto'}} />

**Example 2 for vendor redemptions**

<img src="https://files.readme.io/4c9412c-Screenshot_2024-07-23_at_3.06.43_PM.png" alt="Vendor redemption example 2 - part 1" style={{display: 'block', margin: '0 auto'}} />

<img src="https://files.readme.io/5f3bb1d-Screenshot_2024-07-23_at_3.06.55_PM.png" alt="Vendor redemption example 2 - part 2" style={{display: 'block', margin: '0 auto'}} />

<img src="https://files.readme.io/1d88885-Screenshot_2024-07-23_at_3.07.04_PM.png" alt="Vendor redemption example 2 - part 3" style={{display: 'block', margin: '0 auto'}} />

i. start and end date of the redemption period. While creating the reward, start date must be in the future.

j. Geographies - Select the country where the reward is applicable. This is a metadata for the reward. You can define these in the Geography section in Marvel.

<img src="https://files.readme.io/b705974-image8.png" alt="Geography selection" style={{display: 'block', margin: '0 auto', border: '1px solid #ccc'}} />

k. Name - Enter a unique name for the reward.

l. Description - Provide a brief description of the reward and its benefits.

m. Reward Image - Upload an image that represents the reward. Only one reward image can be linked to a reward in a single language.

n. Thumbnail Image - Upload a thumbnail image for the reward. Only one thumbnail image can be linked to a reward in a single language.

o. Terms and Conditions - Provide the terms and conditions associated with the reward.

4. You can also define the name, description, reward image, thumbnail image, terms and conditions in multiple languages for a particular reward. Create the languages in the languages section of Marvel and use them while creating a reward.

<img src="https://files.readme.io/8014249-image3.png" alt="Multiple languages" style={{display: 'block', margin: '0 auto', border: '1px solid #ccc'}} />

5. Points Vendor: Brands can either use Capillary as the points vendor or use their own loyalty platform or partnered platform and do the configuration here in the Points vendor section of Marvel. This allows brands to use rewards catalog even if they don't use Capillary as their loyalty product.

<img src="https://files.readme.io/e5fc649-image2.png" alt="Points vendor" style={{display: 'block', margin: '0 auto', border: '1px solid #ccc'}} />

6. Enable this option to define third party vendors for points redemption in the Points vendor section of Marvel.

<img src="https://files.readme.io/6b818c6-image11.png" alt="Third party vendors" style={{display: 'block', margin: '0 auto', border: '1px solid #ccc'}} />

7. Once you have filled in all the required fields, click on the Save button to create the reward.

## Use cases

1. Intouch Rewards - Coupons & Cart Promotions

* Get a 20% discount upto 100 on your next transactions.
* Redeem 500 points and get this offer

2. External or Vendor based rewards

* Get 10 AirCap miles for every 10000 points you redeems
* Get a recharge of 100 for 500 points

## Points to Note

1. If a reward is enabled, then it will be returned in the get call. To filter out the rewards which are enabled but start date is in future, app layer can control this.
2. In case of vendor rewards, vendors should support the reversal of rewards issued.
3. Subscription section is present in Marvel UI but it is not functional.

## API documentation for Rewards Catalog

You can find the API documentation [here](https://docs.capillarytech.com/reference/rewards-catalog-1).

## Sample Rewards Catalog for different verticals

### Fuel Vertical

Customers have the option to redeem rewards not just for fuel discounts or free coffee, but can redeem from brand's partner (Movie Ticket, Travel Vouchers, Ride Hailing, etc.)

<img src="https://files.readme.io/28591f4-shell1.jpg" alt="Shell rewards catalog 1" style={{display: 'block', margin: '0 auto', border: '1px solid #ccc'}} />

<img src="https://files.readme.io/b5aa30d-shell2_2.jpg" alt="Shell rewards catalog 2" style={{display: 'block', margin: '0 auto', border: '1px solid #ccc'}} />

<img src="https://files.readme.io/87dd6cc-petron2.jpg" alt="Petron rewards catalog" style={{display: 'block', margin: '0 auto', border: '1px solid #ccc'}} />

### Beauty and Fashion Vertical

A brand is a group of 18 sub brands, and its loyalty program is a group level program. So they provide free vouchers of different internal brands through Rewards catalog so that customer can see the coupon code in the account while redeeming at any brand's store.

<img src="https://files.readme.io/1e002ca-jaspal.png" alt="Jaspal rewards catalog" style={{display: 'block', margin: '0 auto', border: '1px solid #ccc'}} />

### Healthcare Vertical

<img src="https://files.readme.io/72862ed-abbott.jpg" alt="Abbott rewards catalog 1" style={{display: 'block', margin: '0 auto', border: '1px solid #ccc'}} />

<img src="https://files.readme.io/c81c611-abbott2.jpg" alt="Abbott rewards catalog 2" style={{display: 'block', margin: '0 auto', border: '1px solid #ccc'}} />

<img src="https://files.readme.io/018056b-abbott3.png" alt="Abbott rewards catalog 3" style={{display: 'block', margin: '0 auto', border: '1px solid #ccc'}} />

<img src="https://files.readme.io/c231be6-abbott4.png" alt="Abbott rewards catalog 4" style={{display: 'block', margin: '0 auto', border: '1px solid #ccc'}} />

### CPG Vertical

<img src="https://files.readme.io/c6f5df0-unilever.jpg" alt="Unilever rewards catalog 1" style={{display: 'block', margin: '0 auto', border: '1px solid #ccc'}} />

<img src="https://files.readme.io/1660e05-unilever_2.jpg" alt="Unilever rewards catalog 2" style={{display: 'block', margin: '0 auto', border: '1px solid #ccc'}} />

<img src="https://files.readme.io/4b0f0dc-Screenshot_2023-11-03_at_5.49.53_PM.png" alt="Unilever rewards catalog 3" style={{display: 'block', margin: '0 auto', border: '1px solid #ccc'}} />

## Optimize your rewards budget & catalog inventory

**Background**

Brands want to set reward limits in rewards catalog for several reasons:

* Cost management: Setting reward limits helps brands to manage the costs associated with the loyalty program. By setting limits on the number of rewards that can be purchased, brands can control the overall cost of the program and ensure that it is financially sustainable.
* Encourage targeted behavior: Setting limits on rewards can encourage customers to engage with the brand in a more targeted and effective way. For example, setting a limit on the number of rewards that can be purchased can encourage customers to make more frequent or larger purchases.
* Create a sense of exclusivity: Setting limits on rewards can create a sense of exclusivity and scarcity, which can make the rewards more valuable and appealing to customers.
* Promote fairness: Setting limits on rewards can help to promote fairness among customers and ensure that the rewards are distributed fairly among all members of the loyalty program.
* Help brands to evaluate the effectiveness of the program: Setting limits on rewards can help brands to evaluate the effectiveness of the loyalty program, by measuring the number of rewards purchased. This information can be used to make data-driven decisions about how to improve the program in the future.

**Configurations Allowed:**

As a marketing manager, you can now define the below reward limits:

* Max times a customer can purchase the reward in the reward duration
  * per day
  * per week (last 7 days)
  * per month (last 30 days)
  * Overall limit
* Max times the reward can be purchased across customers
  * per day
  * per week (last 7 days)
  * per month (last 30 days)
  * Overall limit
* Set limit as 0 : Support KPI value 0. User can set this 0 any time
* Update reward restrictions at any time
* Remove restrictions at any time
* Audit logs for all updates in reward constraints

**KPI Terms**

1. Level\
   Customer Level - Only impacts particular customer
   Reward Level - Impacts all customers of the reward
2. KPI\
   Quantity - Number of rewards of the same type being bought.
3. RepeatFrequencyType\
   Currently only 3 repeat frequencies are considered.
   1. DAY
   2. MONTH
   3. WEEK
4. Interval\
   The interval for which repeat frequency has to be considered. example: Last 3 weeks, last 2 days.

**Validations**

* No validation on limits, i.e limit can be any number from 1 to MAX
* If multiple restrictions with the same KPI and repeatFrequencyType are passed for a particular level, the value will be replaced with the latest value.

Example :

```
"reward": [  
            {  
                "kpi": "QUANTITY",  
                "limit": 2,  
                "repeatFrequencyType": "DAY",  
                "interval": 10,  
            },  
            {  
                "kpi": "QUANTITY",  
                "limit": 20,  
                "repeatFrequencyType": "DAY",  
                "interval": 30,  
            }  
        ]
```

The final value of this KPI will be limit 20 and interval of 30

**Get started here,**

This feature is not yet available on UI, refer to the below API documentations:

[Create Reward](https://docs.capillarytech.com/reference/post-create-reward)\
[Update Reward](https://docs.capillarytech.com/reference/put-update-reward)
[Get Brand Rewards](https://docs.capillarytech.com/reference/get-brands-rewards)

<Note title="Note">
Points to Note
</Note>

1. If no consumption restriction is added the reward will always be available for issual, i.e unlimited availability.
2. The repeat frequency types are always considered rolling, time frames will be calculated with respect to the current date and set duration interval.
3. Any one or all of repeat frequency types (such as per day, per week, per month) can be configured at every consumption restriction level of the reward.
4. Adding constraints on an expired reward is not allowed.
5. Adding the reward restrictions post the reward is live can result in users breaching the reward constraint. For example,
   1. Day 1 10:00 AM : User 1 purchased 5 qty of Reward1
   2. Day 1  01:00 PM : On Reward1,  Customer level constraints are added, KPI-Quantity, limit = 2, freq=DAYS, interval = 1
   3. Day 1  02:00 PM : User 1 tries to purchase Reward1. System will allow this action.
   4. Day 1  02:30 PM : User 1 tries to purchase Reward1. System will allow this action.
   5. Day 1  02:40 PM : User 1 tries to purchase Reward1. System will not allow this action as the customer level limit only allows 2 qty and this call fails.

This means that the issue summary is captured only after the reward has some constraints added to it.

6. If reward is enabled, then disabled, and then enabled again, then the interval doesn't ignore the duration when the reward was disabled. For example,
   1. 10th May 2023 : Reward was created, enabled and the restrictions were defined at the customer level. Maximum number of times a customer could purchase a particular reward was set to 10 with interval 5 days
      1. Here, Customer1 purchased 10 quantities of a reward.
   2. 12th May 2023: Reward was marked as disabled
   3. 15th May 2023: Reward was enabled again and customer tried to purchase 5 quantities of the same reward
      1. Here, the system will check the last 5 days i.e. from 10th May to 15th May.

This means that the duration in which reward was disabled is not ignored when the system checks the last n days.

## Enrich your rewards catalog view with the newly introduced custom fields

**Background**

In order to create a flexible rewards marketplace, it is important to give brands the ability to include additional, custom information when creating and issuing rewards. This custom data can be used for various purposes such as displaying personalized information within the app or website, and for accounting or partner reconciliation purposes.

Additionally, this custom data can also help brands to track and analyze the performance of their rewards, identify customer preferences and behavior, and make data-driven decisions to improve their rewards strategy. It can also be used to personalize communication with customers, and to segment and target customer groups based on their preferences and behavior.

Furthermore, the ability to include custom data can also help brands to comply with legal and regulatory requirements, and to report on the performance of their rewards to stakeholders.

**Points to note:**

* Custom fields can be created, updated, or disabled
* There can be only one active custom field with the same name. If the existing custom field is disabled, then a new custom field with the same name can be created
* It is mandatory to define the default value for a custom field which is mandatory for the reward. In case a reward doesn't define a mandatory custom field with it, the default value will be considered
* Once the custom field is disabled, it can't be enabled again
* Only active custom fields will be returned in all the getcalls

<Note title="Note">
There is no limit on the number of custom fields that can be defined at an org level for rewards catalog.
</Note>

**UI for the configuration will come in future sprints. Refer to the below images for reference.**

![](https://files.readme.io/9f7fc6c-image1.png)

![](https://files.readme.io/f3ff2c8-image2.png)

For more information on the APIs, check below links:

[create custom field](https://docs.capillarytech.com/reference/post-create-custom-field)

[update custom field](https://docs.capillarytech.com/reference/update-custom-field)

[get all custom fields](https://docs.capillarytech.com/reference/get-custom-field)

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

To get started , brands have to enable configuration from backend. 'CONF\_ENABLE\_FEATURE\_CATALOG\_PROMOTION=true'.

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

Brands can  see the promotions configured for rewards under a  new tab titled "Promotions"

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

<img src="https://files.readme.io/a103313-image1.png" alt="Group redemption setup" style={{display: 'block', margin: '0 auto', border: '1px solid #ccc'}} />

## Now brands can see Rewards Catalog Events in Membercare

**Background**

For a long time, brands have been setting up their rewards catalog (aka Marvel) and these rewards would be redeemed by the customers in exchange for points.

There was no view of these activities in Member Care because of which they were not able to see the details of points, rewards and transactions for any reward redeemed by a customer and they were not able to take any action against those rewards. Leading to poor customer experience and grievance handling.

**Enhancement**

With the new updates, brands can now view the transaction, reward, point details against a reward in Member care.

**To get started,**

1. Go to Membercare >> Events >> Rewards catalog
2. Under the Rewards catalog section, you will see all the events for the rewards redeemed by the customer

<img src="https://files.readme.io/7555c17-image3.png" alt="Membercare rewards catalog events" style={{display: 'block', margin: '0 auto', border: '1px solid #ccc'}} />

3. A quick view card on the left shows
   1. Reward description : 150 off on handbags…..
   2. Transaction Status : Successful/Failed
   3. Redemption Date and Time : 03 Feb 2023 10:34 am
   4. Transaction ID : 30287

<img src="https://files.readme.io/eec0915-image2.png" alt="Quick view card" style={{display: 'block', margin: '0 auto', border: '1px solid #ccc'}} />

4. Click on a particular event to see the detailed reward details, transaction details, points details, reward purchase limits and custom attributes.

<img src="https://files.readme.io/3d8df56-Screenshot_2023-09-26_at_11.33.02_AM.png" alt="Detailed reward information" style={{display: 'block', margin: '0 auto', border: '1px solid #ccc'}} />

5. Following are the details of the attributes:

| Attribute                                          | Description                                                                                                        |
| :------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------- |
| Reward type                                        | Coupon/ Promotions/ Gift Voucher/ Free Voucher/ Product                                                            |
| Reward ID                                          | ID of the reward created in the system                                                                             |
| Quantity                                           | Quantity of the rewards purchased                                                                                  |
| Reward Partner                                     | Name of the reward partner. Ex: Boat, Lifestyle etc.                                                               |
| Coupon series ID                                   | Series ID of the coupons bought                                                                                    |
| Coupon codes                                       | Codes of coupons bought. Can be multiple in case of multiple quantities                                            |
| Promotion name                                     | Name of the promotion issued                                                                                       |
| Promotion ID                                       | ID of the promotion issued                                                                                         |
| Earned promotion IDs                               | Earn IDs of the promotion issued. Can be multiple in case of multiple quantities.                                  |
| Terms & conditions of reward                       | Terms and condition of the reward (if any) declared during the reward creation                                     |
| Points used \* Quantity                            | Points redeemed to purchase a single reward \* Quantity of rewards purchased                                       |
| Currency partner name                              | Points vendor (Intouch/Capillary or Bonuslink)                                                                     |
| Redemption ID                                      | Redemption reference number generated by currency partner                                                          |
| Custom Attributes                                  | Custom fields and its value                                                                                        |
| Reward Purchase Limits >> Individual Member Limits | Max. reward quantity per member for reward purchases (Daily limit, Weekly limit, Monthly limit, Overall limit)     |
| Reward Purchase Limits >> Across Member Limits     | Max. reward quantity across members for reward purchases (Daily limit, Weekly limit, Monthly limit, Overall limit) |

**To search for a particular reward,**

1. In Search, enter the transaction ID or the reward description to see the details of a particular event
2. Click on the event card you are looking for on the left panel
3. Once clicked, you can see all the attributes of the selected event i.e. reward, transaction and point details

<img src="https://files.readme.io/3964ea9-Screenshot_2023-09-26_at_11.46.20_AM.png" alt="Reward and Transaction Details" width="350" style={{display: 'block', margin: '0 auto', border: '1px solid #ccc'}} />

<img src="https://files.readme.io/1b96055-Screenshot_2023-09-26_at_11.46.26_AM.png" alt="Points Details" width="350" style={{display: 'block', margin: '0 auto', border: '1px solid #ccc'}} />

<img src="https://files.readme.io/421c381-Screenshot_2023-09-26_at_11.46.38_AM.png" alt="Reward Limit Details" width="350" style={{display: 'block', margin: '0 auto'}} />

<img src="https://files.readme.io/cba1a92-Screenshot_2023-09-26_at_11.46.53_AM.png" alt="Custom Fields Details" width="350" style={{display: 'block', margin: '0 auto'}} />

**Please note, this enhancement is done on the new UI of Membercare.**

In case you're still using old UI of membercare, then, to see the Reward Catalog events in Membercare, add the following to the URL: **/member-care/ui/**\
This will take you to the new UI of membercare.

## Reduce reward checkout failures and improve customer experience

**Background**

In the past, when partner rewards were not successfully issued, downstream systems did not receive error responses from reward partners. Consequently, brands were unable to display accurate error messages to end users.

Reward Issuance could fail at any of the below steps and hence proper error message was required to show to the end users for better customer experience:

* isRedeemable >> checks if the customer has enough points to redeem the reward
* issueReward/issueCoupon >> coupon is issued to the customer
* RedeemPoints >> points are redeemed from customer's account
* issueCouponReversal >> In case reward is issued but points are not deducted, then reward reversal will take place at this step

Previously, in case of failure in the above steps, following response would be generated:

```
{
    "status": {
        "success": false,
        "code": 8004,
        "message": "fail to issue reward as issue failed"
    }
    rewards:null
}
```

**Enhancement**

With the recent enhancement, error messages from partners can now be retrieved and included in the response. This will allow brands to display accurate error messages to the end-users in case of reward issuance failures making the customer experience better.

After the enhancement, in case of failure, following response would be generated:

```
{
    "status": {
        "success": false,
        "code": 8004,
        "message": "fail to issue reward as : IsRedeemable API failed CardNumberRequired &NumberNotFound",
        "partnerError": {
            "codes": [
                "100106",
                "100105"
            ],
            "messages": [
                "CardNumberRequired",
                "NumberNotFound"
            ]
        }
    },
    "rewards":null  
}

```

```
{
    "status": {
        "success": false,
        "code": 1010,
        "message": "Points redeem API failed: Invalid token - not found",
        "partnerError": {
            "codes": [
                "990102"
            ],
            "messages": [
                "Invalid token - not found"
            ]
        }
    },
    "rewards": null
}

```

**Table showing different error codes and corresponding message and comments**

<Table align={["left","left","left"]}>
  <thead>
    <tr>
      <th>
        Error code
      </th>

      <th>
        Message
      </th>

      <th>
        Comments
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        8004
      </td>

      <td>
        fail to issue reward as \<reason>
      </td>

      <td>
        Issue failed while getting customer details or isRedeemable check or redeem points check.
      </td>
    </tr>

    <tr>
      <td>
        8003
      </td>

      <td>
        fail to issue reward
      </td>

      <td>
        1. Any Request validation errors.<br />2. When all reward's issue failed.
      </td>
    </tr>

    <tr>
      <td>
        8010
      </td>

      <td>
        Reward issued partially
      </td>

      <td>
        In issue bulk call, not all rewards are issued successfully.
      </td>
    </tr>

    <tr>
      <td>
        1010
      </td>

      <td>
        Failed to redeem points
      </td>

      <td>
        When unable to redeem the points.
      </td>
    </tr>

    <tr>
      <td>
        1026
      </td>

      <td>
        Points vendor configurations are not set
      </td>

      <td>
        Brand not configured points vendor redemptions properly.
      </td>
    </tr>
  </tbody>
</Table>

For tech detailing, refer to this [doc](https://capillarytech.atlassian.net/wiki/spaces/LOYAL/pages/3558932485/Handling+vendor+API+response)

## Personalize the catalog with program & tier scope

**Background**

Brands aim to provide a personalized rewards catalog experience based on customers' loyalty program memberships, tiers, and supplementary programs. The goal is to filter and display rewards that are specifically relevant to each customer's program associations.

For example, if a customer has 5 cards from 5 different program IDs, then the catalog needs to filter the rewards that are tagged to those program IDs, so that customer will get all the rewards which are not mapped to any program and the rewards that are tagged to those program IDs.

This feature will help in

* enabling the system to fetch only the rewards that are applicable to the customer, providing a personalized and relevant rewards catalog improving their user experience
* enabling the brands to manage rewards efficiently by allocating them to specific MLPs, reducing the clutter in the rewards catalog.

**Enhancements made**

* While configuring a reward in, users can specify the list of programIDs, subsequent TIER and partner programs.
* Users can update the existing rewards for adding the programIDs, subsequent TIER and partner programs or removing any partner programs from the reward.
* Users can map multiple loyalty programs to a single reward.
* If a reward is mapped to only the programID, and no TIER/ partner program IDs are mentioned, then the reward will be available to all the customers who are part of that loyalty program, irrespective of the TIERs or partner programs.

**API changes and validations**

1. Create reward API

[API doc for create reward](https://docs.capillarytech.com/reference/post-create-reward)

* supplementaryCriteria is not a mandatory field
* All the passed IDs are validated for the org

2. Update Reward API

[API doc for update reward](https://docs.capillarytech.com/reference/put-update-reward)

* supplementaryCriteria is not a mandatory field
* All the passed IDs are validated for the org
* If a reward's supplementaryCriteria is already present and not present in the update call, entries are made as invalid

3. Issue rewards

[API doc for issue user reward](https://docs.capillarytech.com/reference/post-issue-user-reward-mobileold)\
[API doc for issue bulk reward](https://docs.capillarytech.com/reference/post-issue-user-reward-email-copy-1)

* Program IDs mapped to the reward (if mapped) are validated with the customer's partner ProgramID
* If program IDs don't match for a particular reward in the issueReward call, then that particular reward is not issued and an error message is thrown. Rest of the rewards are issued.

4. Get all rewards for the brand

[API doc for get brand rewards](https://docs.capillarytech.com/reference/get-brands-rewards)

* End point: user/reward/brand/`{brandName}`
* A new parameter for accepting the customer identifier is added but this parameter is not mandatory.
  * If a customer identifier is present, it will only return the rewards which are mapped to the customer's program IDs and general rewards where no programs are mapped.
* All Get reward APIs will be fetching the partner program details linked to the reward

**To get the loyalty program ID, head to the loyalty module and click on the program. The URL will have the program ID as shown below**

<img src="https://files.readme.io/16a6454-Screenshot_2023-08-17_at_12.37.37_PM.png" alt="Loyalty program ID" style={{display: 'block', margin: '0 auto'}} />

**To get the tier ID, you can use insights or PMA to fetch the IDs**

**To get the subscription program ID, head to the loyalty module and click on the program. Under Program, click on subscription program and it will give you the ID for the subscription programs like below**

<img src="https://files.readme.io/be68a96-Screenshot_2023-08-17_at_12.36.36_PM.png" alt="Subscription program ID" style={{display: 'block', margin: '0 auto'}} />

**Sample Request Payload**

```
"supplementaryCriteriaRO": [
    {
      "loyaltyProgramId": 750,
      "tierIds": [
        "219",
        "662"
      ],
      "partnerProgramIds": [
        "342",
        "833"
      ]
    }
  ]

```

```
"supplementaryCriteriaRO": [
    {
      "loyaltyProgramId": 750
    }
  ]
```

**Success response**

```
{
    "status": {
        "success": true,
        "code": 6002,
        "message": "Reward created successfully"
    },
    "reward": {
        "id": 57220
    }
}
```

**Error response**

```
{
    "status": {
        "success": false,
        "code": 400,
        "message": "Passed loyalty programId is not exists"
    }
}
```

```
{
    "status": {
        "success": false,
        "code": 400,
        "message": "Passed entityId is not exists"
    }
}
```

**Response for Get user reward by ID**

```
{  
    "status": {  
        "success": true,  
        "code": 200,  
        "message": "User Reward fetched successfully"  
    },  
    "reward": {  
        "id": 57220,  
        "name": "testing36",  
        "description": "testing36",  
        "imageId": "bef4d522-2cf8-4fea-8087-376c449d5c85",  
        "imageUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/86a1c214-a955-4b40-a2d7-d4dc279.jpeg",  
        "thumbnailId": "c886f064-2b3f-4c19-9e86-7f7e5ab5ae04",  
        "thumbnailUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/9e0dfad6-5b9d-4e2b-ac15-2870357.jpeg",  
        "termAndConditionsId": "820a3d7f-2601-405b-9f56-4a3ba8e9df73",  
        "termAndConditionsUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/06f0da4b-dd0b-48fe-b20d-1cadc76.html",  
        "tier": null,  
        "label": null,  
        "priority": 1,  
        "intouchPoints": 150,  
        "group": null,  
        "startTime": "2023-05-17 20:00:00",  
        "endTime": "2023-10-31 11:59:30",  
        "expired": false,  
        "started": false,  
        "programId": null,  
        "categoryList": [  
            {  
                "id": 4,  
                "name": "clothing",  
                "enabled": true  
            }  
        ],  
        "customFields": {  
            "CF4": "This is a dummy customfield",  
            "CF2": "This is a dummy customfield",  
            "CF1": "This is a dummy customfield"  
        },  
        "loyaltyProgramCriteria": [  
            {  
                "loyaltyProgramId": 690,  
                "tierIds": null,  
                "partnerProgramIds": null  
            }  
        ],  
        "restrictions": {  
            "isValid": true,  
            "transactionLevel": [  
                {  
                    "id": 52,  
                    "isValid": true,  
                    "limit": 1,  
                    "kpi": "QUANTITY"  
                }  
            ],  
            "customerLevel": [  
                {  
                    "id": 56,  
                    "isValid": true,  
                    "repeatFrequencyType": "DAYS",  
                    "limit": 5,  
                    "interval": 10000,  
                    "kpi": "TRANSACTION_COUNT"  
                },  
                {  
                    "id": 57,  
                    "isValid": true,  
                    "repeatFrequencyType": "WEEKS",  
                    "limit": 30,  
                    "interval": 10000,  
                    "kpi": "TRANSACTION_COUNT"  
                },  
                {  
                    "id": 58,  
                    "isValid": true,  
                    "repeatFrequencyType": "MONTHS",  
                    "limit": 50,  
                    "interval": 10000,  
                    "kpi": "TRANSACTION_COUNT"  
                }  
            ],  
            "rewardLevel": [  
                {  
                    "id": 53,  
                    "isValid": true,  
                    "consumed": 0,  
                    "repeatFrequencyType": "DAYS",  
                    "limit": 500,  
                    "interval": 10000,  
                    "kpi": "TRANSACTION_COUNT"  
                },  
                {  
                    "id": 54,  
                    "isValid": true,  
                    "consumed": 0,  
                    "repeatFrequencyType": "WEEKS",  
                    "limit": 5000,  
                    "interval": 10000,  
                    "kpi": "TRANSACTION_COUNT"  
                },  
                {  
                    "id": 55,  
                    "isValid": true,  
                    "consumed": 0,  
                    "repeatFrequencyType": "MONTHS",  
                    "limit": 10000,  
                    "interval": 10000,  
                    "kpi": "TRANSACTION_COUNT"  
                }  
            ]  
        },  
        "appliedPromotions": []  
    }  
}
```

**Use cases**

1. Let's say a customer has multiple loyalty program memberships. When they log into the rewards catalog, they only want to see the rewards that are relevant to the specific loyalty program associated with the card they use to make purchases. By filtering rewards based on program IDs, we can ensure that customers only see rewards that are applicable to their current loyalty program membership.
2. A brand wants to create a new reward specifically for customers who hold a certain credit card and are members of a particular loyalty program. By mapping rewards to specific loyalty programs, brands can ensure that the reward is only visible to customers who meet these criteria, which can help to increase the perceived value of the reward and create a sense of exclusivity.
3. Customized Redemption: By mapping loyalty program IDs and tiers, brands can offer personalized rewards based on the customer's loyalty status. Higher-tiered customers may be eligible for exclusive or premium rewards, while lower-tiered customers receive rewards tailored to their level.
4. Targeted Promotions: Mapping loyalty program IDs and tiers allows brands to run targeted promotions. They can offer specific rewards to customers based on their loyalty program participation, encouraging engagement and incentivizing higher-tier customers to maintain their loyalty.
5. Supplementary Program Integration: Mapping loyalty program IDs to rewards catalog enables integration with supplementary programs. For example, if a brand has a partnership with an airline, they can map the loyalty program IDs of customers who are also frequent flyers to provide rewards such as discounted or complimentary flights.

For more information, refer to [this](https://capillarytech.atlassian.net/wiki/spaces/LOYAL/pages/3676012561/Rewards+Catalogue+to+be+against+Loyalty+Program)

## Rewards catalog now supports points redemption from user groups

Users can use both their individual wallet points and group wallet points to purchase the reward. This will allow them to have more flexibility in redeeming their points and enjoy the benefits associated.

<img src="https://files.readme.io/f018673-screen-capture_4.gif" alt="Group points redemption" width="300" style={{display: 'block', margin: '0 auto'}} />

**Enhancements made for points redemption from group wallet:**

Every group has a primary user and secondary users. For identifiers, it can be group ID/ primary user ID/ External ID of the group.

In the isRedeemable and Redeem API, you can now pass the group identifier along with the user ID to redeem the points from the group wallet and issue the reward.

**Sample request for issue with group ID:**

```
curl --location 'http://crm-nightly-new.cc.capillarytech.com/api_gateway/rewards/core/v1/user/reward/15465/issue?username=tillcapillary' \
--data '{
    "brand": "MarvelTest",
    "transactionNumber": "123456789",
    "mobile": 919712709262,
    "userGroup2Id":31059,
    "notes":"xyz"
}'
Response:
{
    "status": {
        "success": true,
        "code": 200,
        "message": "Reward issued successfully"
    },
    "intouch": {
        "pointsRedeemed": "1",
        "couponCode": "4WF17B",
        "codeExpiry": "2027-05-12 00:00:00"
    },
    "promotion": null,
    "vendor": null
}
```

**Sample request for issue with external ID:**

```
curl --location 'http://crm-nightly-new.cc.capillarytech.com/api_gateway/rewards/core/v1/user/reward/15465/issue?username=tillcapillary' \

--data '{
    "brand": "MarvelTest",
    "transactionNumber": "123456789",
    "mobile": 919712709262,
    "userGroup2ExternalId":"famgroup11",
    "notes":"xyz"
}'
Response:
{
    "status": {
        "success": true,
        "code": 200,
        "message": "Reward issued successfully"
    },
    "intouch": {
        "pointsRedeemed": "1",
        "couponCode": "0LP85Y",
        "codeExpiry": "2027-05-12 00:00:00"
    },
    "promotion": null,
    "vendor": null
}
```

**Sample request for issue with user group primary user ID:**

```
curl --location 'http://crm-nightly-new.cc.capillarytech.com/api_gateway/rewards/core/v1/user/reward/15465/issue?user_group2_primary_user_id=381798579' \

--data '{
    "brand": "MarvelTest",
    "transactionNumber": "123456789",
    "mobile": 919712709262,
    "userGroup2Id":31059,
    "notes":"xyz"
}'
Response:
{
    "status": {
        "success": true,
        "code": 200,
        "message": "Reward issued successfully"
    },
    "intouch": {
        "pointsRedeemed": "1",
        "couponCode": "4WF17B",
        "codeExpiry": "2027-05-12 00:00:00"
    },
    "promotion": null,
    "vendor": null
}
```

**Error when configuration is missing:**

```
curl --location 'https://eu.api.capillarytech.com/api_gateway/gamification/v1/brand/JOTUNUAEDEMO/user/971560000005/games/all?language=en' \
Response:
{
    "status": {
        "success": false,
        "code": 8004,
        "message": "fail to issue reward as  points are not redeemable",
        "partnerError": {
            "codes": [
                "828"
            ],
            "messages": [
                "points redemption rules/configuration not allowing redemption"
            ]
        }
    },
    "intouch": null,
    "promotion": null,
    "vendor": null
}
```

**Error when invalid ID is passed:**

```
curl --location 'http://crm-nightly-new.cc.capillarytech.com/api_gateway/rewards/core/v1/user/reward/15466/issue?username=tillcapillary' \
--data '{
    "brand": "MarvelTest",
    "transactionNumber": "123456789",
    "mobile": 919712709262,
    "userGroup2Id":"381751178",
    "notes":"xyz"
}'
Response:
{
    "status": {
        "success": false,
        "code": 8004,
        "message": "fail to issue reward as  points are not redeemable",
        "partnerError": {
            "codes": [
                "1632"
            ],
            "messages": [
                "group id/externalId/primary userId 381751178 passed is not valid"
            ]
        }
    },
    "intouch": null,
    "promotion": null,
    "vendor": null
}
```

**Error when user doesn't belong to the group:**

```
curl --location 'http://crm-nightly-new.cc.capillarytech.com/api_gateway/rewards/core/v1/user/reward/15466/issue?username=tillcapillary' \
--data '{
    "brand": "MarvelTest",
    "transactionNumber": "123456789",
    "mobile": 917122001239,
    "userGroup2PrimaryUserId":"381798579",
    "notes":"xyz"
}'
Response:
{
    "status": {
        "success": false,
        "code": 8004,
        "message": "fail to issue reward as  points are not redeemable",
        "partnerError": {
            "codes": [
                "1620"
            ],
            "messages": [
                "user 381798977 does not belong to group 31059"
            ]
        }
    },
    "intouch": null,
    "promotion": null,
    "vendor": null
}

```

**Points to Note**

1. The reward will be given to the individual initiating the transaction, which can be either the primary user or one of the secondary users.
2. The reward is not given to the group today as that functionality is not supported.
3. In Loyalty side in the redemption event, write the rule for the group and configure redeem points action.
   1. If "Friends & Family" group is enabled, choose the redemption options from the Advance settings, and enable redemption.
   2. If "Fleet" group is enabled, in Redemption event, write the rule "currentEvent.IsUserGroupInfopresent" and configure redeem points action. Within the action, the option should be selected as group.

<img src="https://files.readme.io/2b71bf0-Screenshot_2023-07-18_at_11.59.02_AM.png" alt="Group redemption settings" style={{display: 'block', margin: '0 auto'}} />

<img src="https://files.readme.io/8392395-Screenshot_2023-07-18_at_12.04.55_PM.png" alt="Fleet group settings" style={{display: 'block', margin: '0 auto'}} />

4. The validation checks for accessing points from the group wallet is entirely managed by the EMF side. It relies on the group settings to determine which users have the authority to redeem points from the group wallet.
5. If either of the user\_group2\_primary\_user\_id or user\_group2\_id or user\_group2\_external\_id is not null, the transaction will be treated as group loyalty redemption.

For more information, refer to [this](https://capillarytech.atlassian.net/wiki/spaces/LOYAL/pages/3669000258/Group+Loyalty+in+Rewards).

## Ownership concept in Rewards Catalog

**Introduction**

In response to the evolving needs of brands and marketers, Rewards catalog has introduced the OWNER entity to rewards. This feature addresses the following key requirements:

Module-Specific Rewards: Enables brands to link rewards to specific modules such as Loyalty Programs, Milestones, Campaigns, Journeys, and Goodwill.\
Enhanced Control: Brands can now define and update the ownership of rewards, allowing for better management and control over the reward ecosystem.
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

[Claim a reward](https://docs.capillarytech.com/reference/claim-reward)

## Elevate Customer Experiences with Groups and Rankings in Rewards Catalog

Grouping and ranking are essential features in reward management that enable brands to organize and present rewards in a structured and visually appealing manner. These features empower users to curate customized catalogs that effectively showcases rewards to their audience, enhancing the overall user experience.

**Grouping Rewards:**

Grouping rewards allows brands to categorize them into distinct sections based on common themes, types, or purposes. This feature enables users to create a structure within their reward catalog, making it easier for customers to navigate and find relevant rewards. For example, rewards can be grouped into categories such as "Featured Rewards," "Exclusive Offers," or "Seasonal Rewards."

**Ranking Rewards:**

Ranking rewards enables brands to assign ranks for reward groups as well as ranks for the individual rewards in that group. By assigning ranks, brands can ensure that the most relevant or valuable rewards are prominently displayed to customers. This feature allows brands to highlight specific rewards or promotions based on their strategic objectives or user preferences. For instance, brands can prioritize certain reward groups assigning them higher ranks and can also prioritize rewards within a group.

**Benefits:**

* Enhanced User Experience: Grouping and ranking rewards create a more organized and user-friendly catalog, making it easier for customers to browse and engage with rewards.
* Effective Promotion: By highlighting specific rewards through grouping and ranking, users can drive attention to key rewards or offers, increasing customer engagement and conversion rates.
* Improved Navigation: Grouping rewards into categories and ranking them based on priority streamlines the browsing experience for customers, helping them find relevant rewards more efficiently.

For example, in the below screenshot, Recommended Products have a higher priority than Home & Kitchen Category. Within each defined group, rewards are sorted based on their rank.

<img src="https://files.readme.io/b58d172-image2.png" alt="Grouping and ranking example" style={{display: 'block', margin: '0 auto'}} />

**Example:**\
Consider three reward groups, Group 1, Group 2 and Group 3 ranked 1, 2, and 3. While creating rewards:

1. Reward 1 is tagged with Group 1
2. Reward 2 is tagged with Group 2, and
3. Reward 3 doesn't have any group tagged but has a reward rank of 1

**Retrieving rewards list:**

In the above scenario, when the list of available rewards is retrieved for a customer, the system prioritizes based on the defined groups and reward ranks.\
Initially, the list is ordered as:

1. Reward 1
2. Reward 2
3. Reward 3 (due to its rank, despite lacking a group tag).

**Impact on deleting a group:**

If a group is deleted, the order of the rewards also changes. For example, if Group 1 is deleted:

1. Reward 2 is prioritized first (belongs to Group 2)
2. Then, Reward 3 (due to its rank)
3. Finally, Reward 1

The sorting of the reward is performed usng the sortOn parameter in the Get user rewards API. For more information, refer to the sorting logic below:

* Preference will be given to the groups as per their ranking
* Within the group, preference will be given to the rewards for which reward rank is defined, the rest of the rewards with no reward rank will be sorted in default descending order of expired date
* If rewards with no group are defined, they will be sorted in order of reward rank (if defined), followed by default descending order of expired date

**Points to Note:**

* Group
  * Group name must be unique within the active groups in an org and can't be null
  * Group rank is also non-mandatory and there is no uniqueness on group rank as it gives the flexibility to use this feature for both sorting rewards and segregaating rewards based on group
  * Groups can be disabled by making the isActive flag false
* Reward
  * Reward rank is optional while creating/updating the reward
  * Tagging a group to a reward is optional

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

## Introducing Point Redemption Controls for the Catalog

This feature enables marketing managers to implement restrictions on the number of points customers can redeem in the rewards catalog within specific time frames. By setting limits at the organizational and reward type levels, brands can control customer activity on the rewards catalog and encourage point usage during transactions, ultimately driving more business.

**Points redemption restrictions:**

1. Users can define fixed window restrictions of daily, weekly, and monthly cycles for points redemption in the catalog, either for the entire catalog or for a specific redemption type or for both with this [API](https://docs.capillarytech.com/reference/create-points-restriction)
2. Users can update these restrictions with this [API](https://docs.capillarytech.com/reference/update-points-restriction)
3. Users can select the start day of the week for their org with this [API](https://docs.capillarytech.com/reference/set-start-date-of-the-week). Default Value will be Monday.
   1. This value will be applicable to all the restrictions under the org which are using frequency type as weekly limit to determine the start of the week.
4. Users can check the defined restrictions for points redemption with this [API](https://docs.capillarytech.com/reference/get-points-constraints) .
5. Users can see the consumed points out of the total limit for a particular customer with this [API](https://docs.capillarytech.com/reference/get-user-reward).
6. When the issueReward call is made for a particular reward for a particular customer, system will check all the defined restrictions like individual reward restrictions and org level points redemption restrictions. If any of the limit is consumed, the reward will not be issued. Refer to this [API](https://docs.capillarytech.com/reference/post-issue-user-reward) for error scenarios.
7. At one point of time, brands can define both point restrictions at org level and at reward type level to control the redemption of points in the catalog

**Use cases:**

1. Brands can define that they want to restrict the points redemption for the catalog to 10,000 points per month per customer.
2. Brands can define that they want to restrict the points redemption for the voucher types of rewards to 500 points per week per customer.
3. Brands can define that they want to restrict the points redemption for the miles types of rewards to 1000 points every 10 days per customer.
4. Brands can define that they want the users to only burn 10,000 points in overall rewards catalog in a month and 1000 points on vouchers catalog in a month. Once 1000 points are burned by the customer on vouchers catalog in a month, no more points can be used for redemption in vouchers catalog, but customers can still go ahead and burn their points for reward types other than vouchers like charity/miles/cashback etc.

## Implement Points+Cash journeys in Rewards Catalog

Brands can now expand their catalog to include rewards purchased with cash or a combination of points and cash, offering customers greater flexibility and incentive to engage with the loyalty program. With options including FREE, POINTS, CASH, and POINTS + CASH, brands gain enhanced flexibility and control over reward issuance.

This feature enables customers to receive a reward either by redeeming their points or by making a cash payment or both. Cash transactions or any other mode of payment occur outside the system and are not subject to validation within the system.

<img src="https://files.readme.io/b7210c7-image3.png" alt="Points and cash payment options" width="500" style={{display: 'block', margin: '0 auto'}} />

#### The supported payment modes are:

1. FREE: This payment mode incurs zero cost, requiring neither points nor cash.
2. POINTS: Loyalty points are redeemed from the customer's wallet to issue the reward.
3. CASH: The reward is issued without redemption or validation, assuming the tender transaction occurred outside the system (upstream system).
4. POINTS\_CASH: In this payment mode, the system issues rewards based on redeeming both cash and loyalty points from the customer's wallet. The assumption here is that the cash transaction has been completed successfully, and the reward is issued based solely on this external transaction.
5. CONV\_RATIO: The rewards system calculates the equivalent miles based on the points provided in the issue reward request basis the conversion ratio of the reward. For example:
   * If the conversion ratio value is 0.44 and the customer wants to burn 1500 points and the same points worth of miles need to be credited to his account, the rewards system calculates miles worth 1500 points based on the conversion ratio value i.e. 1500\*0.44 = 660 miles
   * If the conversion ratio value is 0.44 and the customer wants 1000 miles to be credited. The reward system calculates the points to be redeemed i.e. 1000/0.44= 2272 points will be deducted.

**During the issue call, the system records the payment mode used to issue the reward at the reward level.**

#### API documentation

1. [Create Reward with new payment configs](https://docs.capillarytech.com/reference/post-create-reward)
2. [Update Reward with new payment configs](https://docs.capillarytech.com/reference/put-update-reward)

#### Conversion ratio (CONV\_RATIO)

```json
"paymentConfigs": [
       {
            "paymentMode": "CONV_RATIO",
            "conversionRatio":0.33
        }
    ]
```

#### POINTS

```
"paymentConfigs": [
       {
            "paymentMode": "POINTS",
            "points":100
        }
    ]
```

#### CASH

```
"paymentConfigs": [
       {
            "paymentMode": "CASH",
            "cash":200
        }
    ]
```

#### Points and cash (POINTS\_CASH)

```
"paymentConfigs": [
       {
            "paymentMode": "POINTS_CASH",
            "cash":100,
            "points":150
        }
    ]
```

#### FREE

```
"paymentConfigs": [
       {
            "paymentMode": "FREE"
        }
    ]
```

3. Following get APIs will return the payment config details
   1. [Get user specific reward by id](https://docs.capillarytech.com/reference/get-user-brand-specific-rewards)
   2. [Get reward details by id](https://docs.capillarytech.com/reference/get-brand-by-id)
   3. [Get issued reward details for a user](https://docs.capillarytech.com/reference/get-reward-issue-transaction-details)
   4. [Get all available rewards for user](https://docs.capillarytech.com/reference/get-rewards-for-user)
4. [Issue reward API](https://docs.capillarytech.com/reference/post-issue-user-reward) now accepts payment config and tender blocks for recording cash based transactions for audit and reporting purposes.

## Enhanced Reward Fulfillment: Introducing STATUS and Txn Custom Fields

Introducing standard field STATUS and the capability to add custom fields in the issueReward call. This enhancement will enable reward partners to pass additional metadata related to reward issuance for tracking purposes. This is particularly useful when the fulfillment of rewards occurs outside the Capillary system.

**Key Features:**

* **Standard Field - STATUS:**
  * A new ENUM field called STATUS is now available in the issueReward call to track the current status of reward fulfillment (e.g., received, in-progress, pending, denied, completed).
  * This field is optional and validated against predefined values.

* **Custom Fields:**
  * Issue Reward call now supports custom fields with data types such as String, Integer, Date, and Boolean.
  * Custom fields are unique at the organization level, with options for default values and case sensitivity.
  * A max of 10 custom fields can be passed in the issue Reward call

* **Integration with Other APIs:**
  * The newly introduced fields are supported by the getPurchasedRewards API and membercare API, ensuring consistent data representation across platforms.

**Benefits:**

* **Enhanced Metadata Handling :** Improved tracking of reward fulfillment statuses and additional metadata to streamline operations.
* **Improved Customer Interactions :** Real-time updates and detailed information available on partner portals and mobile apps, enhancing customer satisfaction.

**Steps to follow for fulfillment status:**

1. Define the predefined values for fulfillment statuses using this API: Create Fulfillment Status.
2. Update the predefined values for fulfillment statuses using this API: Update Fulfillment Status.
3. Retrieve the predefined values for fulfillment statuses using this API: Get Fulfillment Status.
4. **Issue Reward Call:**
   * Use these fulfillment statuses in the issueReward call (single or bulk). Here, it will be validated against predefined values.
   * Issue Reward (Single)
   * Issue Reward (Bulk)
5. Update the fulfillment status using the update txn API: Update txn API
6. **Retrieve Fulfillment Status:**
   * Call the purchased rewards for user API or txn level API to see the value of the fulfillment status of the reward.
   * Get Purchased Rewards for User
   * Get Txn Level Details for User

**Steps to follow for txn custom fields:**

1. Create custom fields with scope as ISSUE\_REWARD using this API: Create custom field
2. Update custom fields with scope as ISSUE\_REWARD using this API: Update custom field
3. Retrieve custom fields with scope as ISSUE\_REWARD using this API: Get custom field
4. **Issue Reward Call:**
   * Use these custom fields in the issueReward call (single or bulk)
   * Issue Reward (Single)
   * Issue Reward (Bulk)
5. Update the custom fields using the update txn API: Update txn API
6. **Retrieve txn custom fields:**
   * Call the purchased rewards for user API or txn level API to see the value of the txn custom fields of the reward.
   * Get Purchased Rewards for User
   * Get Txn Level Details for User

**Using the IssueReward API to pass fulfillment status and txn custom fields:**

* **Passing STATUS and Custom Fields:**
  * Include the STATUS field and any txn custom fields in the issueReward call.

* **Bulk Issue:**
  * STATUS and custom fields can also be passed in bulk issue calls.
  * Ensure that the STATUS and custom fields are included for each reward in the bulk call.

* **Issue reward APIs**
  * Issue Reward (Single)
  * Issue Reward (Bulk)

**Example Use Case:**

* **Fulfillment Process:**
  * A reward partner logs into the partner portal and sees a list of rewards with a pending STATUS.
  * Upon receiving a fulfillment request, the partner updates the STATUS to confirmed.
  * Additional metadata such as ticket number or order ID can be entered.
  * Once fulfillment is complete, the STATUS is updated to completed.

* **Customer View:**
  * End customers can view the STATUS of their rewards and any additional information on their mobile app, providing transparency and enhancing their experience.

By following these steps, reward partners and brands can effectively use the new STATUS and custom fields to manage reward fulfillment and provide a better experience for end customers.