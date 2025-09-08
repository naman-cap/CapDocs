---
title: Award points to referee
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
A referrer is an actor who refers other customers to transact with the brand. A referee is an actor referred by a referrer. Brands can configure to incentivize either a referee or referrer or both.

To award points to the referee, you need to have points earned condition, points expiry condition (if required), and channels through which you want to communicate or notify the customers when points are awarded.

You need to configure earn condition, expiry condition, and channels through which you want to communicate on the points earned by the referee. See the following sections to understand how to configure each option. 

![8fe5a44 JgRNTWNS6 kiLOGEFGhMO9hsEKIUBAuIIg](https://files.readme.io/8fe5a44-JgRNTWNS6_kiLOGEFGhMO9hsEKIUBAuIIg.png)

## Earn condition

Click on the **Earn Condition** drop-down to choose the desired points earning condition for the referee. 

To create a new earning condition and use it:  

1. Click **+ Add condition**.  

![a9019c4 2HJ1Cg8 sayOAYk1aN7nX qt RVtGShT3A](https://files.readme.io/a9019c4-2HJ1Cg8_sayOAYk1aN7nX_qt-RVtGShT3A.png)

2. In **Name**, enter a relevant condition name.
3. In **Description**, enter a short description of the condition.
4. In **Module using this condition**, choose the module where you want to use the condition. In this case, it is Loyalty+.
5. In **Allocate based on**, choose on what basis points need to be allocated.

* **Loyalty Registration**: To issue points when the referee registers. This should be based on the configuration settings for the referral program.
* **Loyalty Transaction**: To issue points when the referee makes a transaction. 

6. In **Allocation type**, choose whether to issue fixed points or prorated points. 

* **Fixed**: A fixed number of points will be allocated irrespective of the transaction amount.
* **Prorated**: Points are issued as a percentage of the transaction amount or custom field value.

7. To have a common allocation to all tiers, check the **Same for all Tiers**.\
   To allocate points differently for each tier, uncheck Same for all tiers. You will see an option to configure for each tier. Set your preferred values for each tier based on the **Allocation type** chosen. 

![49ee456 gi4uMb251xFMHvjFtEmBlOp5gI xaObQOg](https://files.readme.io/49ee456-gi4uMb251xFMHvjFtEmBlOp5gI_xaObQOg.png)

8. Set **Enable delayed accrual** to green to allocate points to the current account after a certain period. This is usually the transaction return period that is configured for the org. So, customer can redeem points only if the transaction is not returned. Use this especially in cases where transaction return is allowed. 

![099343d XFCQNNSUjdLqeKc7D3c5vn4X5bRu3EwbHQ](https://files.readme.io/099343d-XFCQNNSUjdLqeKc7D3c5vn4X5bRu3EwbHQ.png)

* You need to set the number of days after which points are accrued in **Accrue points after**. An example is shown in the following screenshot. 

![cfab465 mMngKwOVf5SbRyJY6QLVlxTeQxMOE4VYGw](https://files.readme.io/cfab465-mMngKwOVf5SbRyJY6QLVlxTeQxMOE4VYGw.png)

* In Delayed accrual, points for a transaction are added as promised points immediately. When the specified period (usually the allowed return period) is completed, these points will be credited to the current account.

## Expiry condition

For the points that will be issued for referee, you need to set the expiry condition - when the awarded points should lapse.

Click on the **Expiry Condition** drop-down to choose the desired expiry condition for the points earned by the referee. 

To create a new expiry condition and add it,  click on the respective **+ Add condition**.  

In the drop-down box, choose the expiry condition (if created already).

To create a new expiry condition and add it, follow these steps.

1. Click + **Add condition**
2. In **Name**, enter a relevant condition name. 
3. In **Description**, enter a short description about the condition.
4. In **Module using this condition**, choose the module where you want to use the condition. In this case, it is Loyalty+.
5. In **Expire points based on**, choose the criteria for point expiry. You have three options, Event date, Rolling expiry from event date, and Membership event date. For more information, see here.

* **Event date**: Points expire on the configured date based on the last activity (transaction/registration) done by the customer. 
* **Rolling expiry from event date**: The current date of points expiry is reset to a new date based on the recent transaction date.
* **Membership event date**: Points expire automatically when the membership expires. 

6. Enable **Same for all Tiers** and the condition becomes relevant for all tiers. If disabled, you have to configure conditions for each tier. For more information, see here.
7. Click **Done** to save the condition.

## Configure communication channel(s)

Once you set the points earning and expiry conditions, it is important to communicate the points earned by the referee.

Loyalty+ supports two different configurations for communications. 

### Mandatory channels

Here you can select the channels through which the communication has to be sent out for sure. Then, configure the message for each channel you select.

![a9fb95a MandatoryChannels](https://files.readme.io/a9fb95a-MandatoryChannels.png)

### Priority channels

Here, you can set the channels through which the communication needs to be sent out based on the priority and availability. For example, if you set the priority in the order SMS, email, and mobile push, the system will first check if the customer's mobile number is available, 

* If available, it will send an SMS communication and ignores the rest.
* If not available, it will check whether the customer has email ID
* If email ID is available, it sends out an email notification to the customer.
* If not, it will check if the customer is active through mobile push and process the message accordingly.

Once the priority channels are set, configure the message for each channel. 

For more information on communication channels, see here.
