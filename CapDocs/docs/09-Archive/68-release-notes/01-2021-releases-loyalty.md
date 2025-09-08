---
title: OND 2021 | Loyalty+ Releases
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
### Say Hi to your Personal Loyalty Assistant

You have probably noticed some suggestions on the Loyalty+ landing page. Those are Loyalty Nudges to help your business be more successful in building loyalty with your customers. Nudges are suggestions that help you take the right actions for your loyalty program, deep dive into data to understand your customers, run new campaigns or journeys, etc. 

These nudges include:

* Sharing ideas from the industry best practices on how to engage better with your loyalty customers.
* Identifying long-standing trends and sudden anomalies in your program KPIs.
* Ensuring that all basic program components are set up well and running smoothly.

![eb5d480 Nius2o9vNpWmi 7lgQf0AzLSyNMs4kOlqw](https://files.readme.io/eb5d480-Nius2o9vNpWmi-7lgQf0AzLSyNMs4kOlqw.gif)

Here are a few examples to show Nudges at work:

* **Boost Loyalty through points redemption**
  * Anomaly: Let’s say, our Nudge framework discovered that your Loyalty program's Points Expiry Reminder isn't activated. The industrial figures suggest that 63% of customers prefer to shop at brands in which they have active Loyalty points.
  * Analysis: In the next six months, 76 million points are expiring across the brand for 674K customers.
  * Suggestion: You have a chance to retain 63% of 674K customers who are likely to churn due to points expiring. Set it up now!
* Manage Covid impact through Loyalty 
  * Anomaly: Again, our Nudge framework detected a decrease in Points redemption and an increase in points expiring due to the Covid-19 lockdowns. 
  * Analysis: In the last year, points expired for 75% of your customers.
  * Suggestion: Get your top customers back to the stores. Increase footfall by up to 75% by extending points expiry for 1 month. Configure it now!

### Target Loyalty - Incentivize customers instantly on Target Completion

#### Problem statement

Currently, the target completed event is triggered to loyalty only when the target period is completed. So customers get incentivized only after the completion of the target period even if they had achieved the target before that.

It has also been a long-standing ask from brands and success hub teams to be able to run ‘Tracker-based Promotions’ - Targets now provide a superior method to set those up.

#### Use cases

As a brand, I want to reward my customers if they achieve the target/milestone before the period ends & motivate them further. Also, optionally, reward them at the end of the period based on the overachieved value.

Feature description

* The “Target period elapses” customer activity will now be triggered twice, once when the target is achieved and again when the Target period is completed
* In the event, while creating a promotion you can now add a condition ‘currentEvent.isTargetAchievedEvent’ to check if this activity is being triggered for the milestone
* You can the setup points allocation actions or other incentives when the above expression is true

![a647563 RS2z6buV 6y02RYdVF9TN5ceHeGRVjriHA](https://files.readme.io/a647563-RS2z6buV_6y02RYdVF9TN5ceHeGRVjriHA.png)

### Activate Promotions before customers can start using them

#### Problem statement

Brands don't have the option to set a promotion with a capability whether it would require activation or not. Basically, brands want to give the option to their customers to subscribe to an offer or not. Currently, in the Promotion Engine, the promotion created automatically applies to all the customers.  

#### Use cases

As a brand, I want to create all promotions using meta configuration (activationRequired).\
As a brand, I want my customers to specifically collect/subscribe to an offer.

#### Description

When you create a promotion (Loyalty promotion, Loyalty earning a promotion, or Rewards promotion.), you can now enable Issue promotion in the deactivated state to allow your customers to manually collect the promotion.

![d68f310 oOXXkYTnPimKZy9ay6PK47MJjOLgHed1Vg](https://files.readme.io/d68f310-oOXXkYTnPimKZy9ay6PK47MJjOLgHed1Vg.png)

When creating promotion using API, you can set activationRequired=true.

Customers can activate or collect the offer manually. The following image is an example of allowing customers to collect an  offer.

![4fb11f5 mV OUlFtMy9j9eXNArlP OxWMQ8eoUIqvg](https://files.readme.io/4fb11f5-mV_OUlFtMy9j9eXNArlP-OxWMQ8eoUIqvg.png)

### Marvel to support game edit and immediate start

#### Problem statement

Currently, in Marvel, we don't have the option to extend the game or edit the game once it's created. After the games expire, every time new sets of games have to be created and this becomes difficult to manage. Currently, Marvel only allows editing the games before they start.

#### Use cases

As a brand, I want to make required changes to the game after the game is started and before it ends.

As a brand, I want to edit the already created games or extend their date, so that I don't have to recreate the game after their lapsation dates.

#### Feature description

Brands can now change the game description, start date, end date, image, user play limit, terms & conditions, max availability, and winning probability for a game. 

There are a few restrictions :

* Once the game ends, we cannot edit any of the game details.
* Once the game is started, but not ended. All the changes are feasible except the start date and RedemptionID.
* Once the game starts, Cannot reduce Userplaylimit (Game level) and Maximum availability(Game Item level)

### Fraud controls for Points on Referral

#### Problem statement

* The referral points awarded from a ‘Transaction Add’ event do not get returned when that transaction is returned - Customers could exploit this in an e-commerce environment or other industries (e.g. LPG) where orders are fulfilled later and can be canceled or returned in the meantime
* Customers could also redeem the points before canceling the order. We already support promised points which solves this problem, but we were unable to issue promised points against referral

#### Feature Description:

* We now support delayed accrual in referral points - this can be set up in the Earn condition
* If the transactions that caused the referrer or referee to earn points is returned, we now return/clawback those points as well - this works in the same way as regular points return

### Evaluate rules on basket items

#### Problem statement

Brands want to provide points and benefits on the basis of certain parameters of the line item - typically if the amount is non-zero or if the discount is zero, etc. They also run promotions based on the count of these "qualifying" items. 

The supported rule library in Loyalty+ currently does not allow the brand to glean such a count - hence they are resorting to using Extended fields to compute this count outside the system and pass it to us - this presents an abuse of Extended fields and causes unnecessary load at the CDP layer.

#### Use cases

As a brand, I want to provide points and benefits on the basis of certain parameters of the line items like amount, discount, quantity, rate, and value.

#### Feature description

We have provided a set of attributes in currentTxn profile.

* basketSumIf would return the sum of line item amounts where the conditions hold true
* basketCountIf would return the count of line items where the conditions hold true
* basketQtyIf would return the sum of quantities of line items where the conditions hold true

To make the rule-writing simpler and easier to understand here, We have decided to Split the expression (2nd parameter of the rule) part into 2 segments - Operator to be used & value to be compared with.

![ab69beb X Hv9DCO8xFe6tP3qGnsWZ2CfPSUJVyY9A](https://files.readme.io/ab69beb-X_Hv9DCO8xFe6tP3qGnsWZ2CfPSUJVyY9A.png)

### Ability to write rules based on Gross amount based sums

#### Problem statement

Brands want a trigger condition to capture gross value on the basketsum and basketSumRegexBrand. Currently, the net value is captured. There are many campaigns that run on gross values, especially during EOSS.

#### Feature description

We have added new facts

* basketSumGross
* basketSumRegexGross
* basketSumRegexBrandGross
* basketSumRegexCategoryGross

These will evaluate the sum of gross value(value of an item without discount) of a basket item based on the attribute name and attribute value provided in the rule condition.

![ab04c6c 1xgJyHLLlyIWQBqkqk6yI93RVXNFu O gw](https://files.readme.io/ab04c6c-1xgJyHLLlyIWQBqkqk6yI93RVXNFu_O_gw.png)
