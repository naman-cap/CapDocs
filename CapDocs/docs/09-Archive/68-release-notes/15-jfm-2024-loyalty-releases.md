---
title: JFM 2024 | Loyalty+ Releases
excerpt: >-
  In this page, releases that happened during the JFM24 (January, February,
  March) quarter will be available. Also, to each of the release notes item, a
  link to the detailed documentation will also be available.
deprecated: false
hidden: true
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
## Promotions 2.0

Promotions 2.0 , an advanced version of Loyalty Promotions…..is a sleek addition to the Incentive Manager module, designed to hook your customers with gamified motivation & personalized experiences.

### Diverse range of loyalty promotions for improved engagement

Brands can now run diverse promotions like hand-raiser in travel & hospitality, click to collect in ecommerce, choose your benefit, cross-sell products or create offers that can be unlocked by a specific target segment

* Customer has a choice to opt for one of the promotions; 1 free night OR 10% discount on F\&B OR free airport transfers
* On a spend of 10,000 in a month, the customer unlocks 2X points on all incremental spends for the rest of the month.
* Customer plays scratch & win, and win 500 bonus points on purchase of denim in next transaction

**More details here:** [Link](https://docs.capillarytech.com/docs/advanced-loyalty-promotions#:~:text=Powered%20by-,Types%20of%20promotions,-Suggest%20Edits)

### Advanced Budget controls

\--> Optimize your budgets by limiting the promotions that can apply on a product or entire cart. Create promotions that are exclusive, selectively stacked with other promotions or always apply like birthday/anniversary promotions

* Customers are eligible to earn 500 bonus points or 5% extra points. Now, based on max benefit strategy, on a spend of 5000 – promotion of 500 bonus points is applied, while on spend of 15000 – promotion of 5% extra points is applied. Thereby optimizes the brand spend while also making it customer friendly.
* It's the end of season time, and the brand wants to apply only the EOSS SALE promotion, and doesn't want the other regular promotions to apply for the time being. On top of this, the only promotions which continue to apply are the birthday and anniversary promotions as a mandate. Simply mark the EOSS promotion exclusive & birthday & anniversary promotions as always apply. Promotions 2.0 will handle the rest.

**More details here :** [Link](https://docs.capillarytech.com/docs/loyalty-promotion-priority-order-stacking-strategy#:~:text=Powered%20by-,Loyalty%20Promotion%20Priority%20Order%20%26%20Stacking%20Strategy,-Suggest%20Edits)

\--> Advanced points allocation controls help you prevent any fraudulent behavior. Add terms and conditions like :

* Max points that can be earned by a customer in a day/ week/ month 
* Max points that can be earned by a customer in an instance(customer activity) in a day/ week/ month
* Max points that can be earned by a customer across instances in a day/ week/ month
* Max points that be issued from a promotion across customers or number of instances in a day/ week/ month

**More details here :** [Link](https://docs.capillarytech.com/docs/loyalty-promotions#advance-settings:~:text=Limits%20when%20Promotions%202.0%20is%20enabled)

## New tracking capabilities in Milestones & Streaks:

Milestones & Streaks are one of the most powerful gamification & behavior creation capabilities using which brands can greatly increase their user-retention & loyal customer base. Now, these modules have become much more powerful with the added new capabilities.

**Now, brands can track:**

* Transactional fields (e.g.: Gross sales, New sales, Quantity, Visits, etc.)
* Behavioral events (e.g.: Number of times the user has updated the profile picture, Number of times the user has clicked on a CTA, etc.)
* Extended fields (e.g.: Amount of GST paid, Number of grams of gold purchased, etc.)
* EMF events (e.g.: Number of times the user has redeemed points, Number of times the user has referred new customers,  etc.)

**More details here:** [Link](https://docs.capillarytech.com/docs/milestones-new-flow#target-details)

## Streaks, a brand new gamification capability.

With the help of Streaks, brands can now induce continuous purchasing (or activity-doing) behavior in their customers using the principles of behavioral psychology. Brands now can implement use cases as per their requirement & get the desired outputs. For example, now brands can say:

* Drink one cappuccino coffee every day for 10 days, and get a coffee-lover badge.
* Make at least 2 transactions in a week for 5 weeks continuously, and get a $2 coupon.
* Walk 200k steps in a month for any 10 months in a year, and get a fitness badge & 10k points.
* Post 1 review every 3 days, and do this 6 times continuously to get 600 points.

**More details:** [Link](https://docs.capillarytech.com/docs/streaks)

## Alternate currencies (a new variation of reward currencies)

With this new capability, now brands can further gamify their end-user journey by awarding various kinds of reward currencies instead of just points. Brands can create different reward currencies like stars, stamps, boosts, etc.. as per their use cases & issue them to their customers along with points.

1. Very easy to create, and easy to use.
2. More control over their operation (can make them active/inactive, set a duration, etc..)
3. More control of vital properties like redeemability, returns, etc..
4. Available in the output of all important APIs

**More details:** [Link](https://docs.capillarytech.com/docs/alternate-currencies-copy)

## getCustomerLedgerInfo is timeless

From now on, whenever the getCustomerLedgerInfo is called without any start-date or end-date, by default it will bring all the data without any time limit restrictions.

[API Link here](https://docs.capillarytech.com/reference/get-ledger-information)

## A brand new milestones API

As of today, whenever you want to know the full details of a milestone/streak, multiple API calls have to be made. One for target groups, one for periods, one for targets, etc... This makes life a little difficult as these multiple calls can:

1. Make the app or the landing page slow to load
2. Bad use experience
3. More prone to error scenarios

To solve all these issues, we have built a brand new single milestone API that provides all the necessary information in a single call. Refer to this link for more details: [Link](https://docs.capillarytech.com/reference/get-all-milestones)

## Expiry of promised points

As of now, the expiry of the promised points is always calculated based on the bill date. This is not a very ideal scenario for any customer, as the new usable days can drastically decrease.

To solve this, we expiry of promised points can be based on:

1. Bill date
2. Points conversion date

**To config looks like the below:**

![a0bb0a3 Screenshot 2024 04 19 at 4](https://files.readme.io/a0bb0a3-Screenshot_2024-04-19_at_4.11.14_PM.png)

<br />