---
title: Optimizing Your Rewards Budget & Catalog Inventory
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
\*Background\*\*

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
   Customer Level - Only impacts particular customer\
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
[Update Reward](https://docs.capillarytech.com/reference/put-update-reward)\
[Get Brand Rewards](https://docs.capillarytech.com/reference/get-brands-rewards)

> 📘 Points to Note

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

6. If reward is enabled, then disabled, and then enabled again, then the interval doesn’t ignore the duration when the reward was disabled. For example,
   1. 10th May 2023 : Reward was created, enabled and the restrictions were defined at the customer level. Maximum number of times a customer could purchase a particular reward was set to 10 with interval 5 days
      1. Here, Customer1 purchased 10 quantities of a reward.
   2. 12th May 2023: Reward was marked as disabled
   3. 15th May 2023: Reward was enabled again and customer tried to purchase 5 quantities of the same reward
      1. Here, the system will check the last 5 days i.e. from 10th May to 15th May.

This means that the duration in which reward was disabled is not ignored when the system checks the last n days.
