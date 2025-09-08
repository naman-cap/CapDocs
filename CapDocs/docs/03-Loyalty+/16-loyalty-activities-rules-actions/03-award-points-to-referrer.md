---
title: Award points to referrer
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

To award points to the referrer, you need to have points earn condition, points expiry condition (if required), and channels through which you want to communicate or notify the customers when points are awarded.

The following are the options available for the **Award points to referrer** action. 

![2a1efce nrV50  2GIuO3iKJZXu6J30KErJz q0U8A](https://files.readme.io/2a1efce-nrV50--2GIuO3iKJZXu6J30KErJz_q0U8A.png)

## Earn condition

Click on the Earn Condition drop-down to choose the desired points earning condition for the referrer.

To create a new earning condition and add it, follow these steps.

1. Click + **Add condition**. 

![0b85d95 SzjlJPA3FV8z7Y GT pZRdkPnrErIsEMag](https://files.readme.io/0b85d95-SzjlJPA3FV8z7Y-GT_pZRdkPnrErIsEMag.png)

2. In **Name**, enter a relevant condition name. 
3. In **Description**, enter a short description of the condition.
4. In **Module using this condition**, choose the module where you want to use the condition. In this case, it is Loyalty+.
5. In **Allocate based on**, choose on what basis points need to be allocated.

* **Loyalty Registration**: To issue points when the referrer registers. This should be based on the configuration settings for the referral program.

* **Loyalty Transaction**: To issue points when the referrer makes a transaction.

6. In **Allocation type**, choose whether to issue fixed points or prorated points.

* **Fixed**: A fixed number of points will be allocated irrespective of the transaction amount.
* **Prorated**: Points are issued as a percentage of the transaction amount or custom field value.\
  For more information, see Create points allocation strategies.

7. To have a common allocation to all tiers, check **Same for all Tiers**.\
   To allocate points differently for each tier, uncheck *Same for all tiers*. You will see an option to configure for each tier. Set your preferred values for each tier based on the **Allocation type** chosen.

![f7cf7c8  2bD FDk92J7DMjz2WexJ cQZwPNpvOdWA](https://files.readme.io/f7cf7c8--2bD-FDk92J7DMjz2WexJ-cQZwPNpvOdWA.png)

8. Set **Enable delayed accrual** to green to allocate points to the current account after a certain period. This is usually the transaction return period that is configured for the org. So, customers can redeem points only if the transaction is not returned. Use this especially in cases where transaction return is allowed.

![a228c5a jvMip47fx66Xxh7ZXEq3c4cdSDf FnKcSg](https://files.readme.io/a228c5a-jvMip47fx66Xxh7ZXEq3c4cdSDf_FnKcSg.png)

* You need to set the number of days after which points are accrued in Accrue points after. An example is shown in the following screenshot.

![01bea1f O1BFi0EAxjjzho5llyXEyWczfsLJpvOdaQ](https://files.readme.io/01bea1f-O1BFi0EAxjjzho5llyXEyWczfsLJpvOdaQ.png)

* In Delayed accrual, points for a transaction are added as promised points immediately. When the specified period (usually the allowed return period) is completed, these points will be credited to the current account.

9. Click **Done** to save the condition.

## Expiry condition

Points that will be awarded for referrer need to have an expiry condition which indicates when the award will expire.

Click on the Expiry Condition drop-down to choose the desired expiry condition for the points earned by the referee.\
In the drop-down box, choose the expiry condition (if created already).

To create a new expiry condition and add it, follow these steps.

1. Click + **Add condition**
2. In **Name**, enter a relevant condition name. 
3. In **Description**, enter a short description of the condition.
4. In **Module using this condition**, choose the module where you want to use the condition. In this case, it is Loyalty+.
5. In **Expire points based on**, choose the criteria for point expiry. You have three options, Event date, Rolling expiry from event date, and Membership event date. For more information, see here.

* **Event date**: Points expire on the configured date based on the last activity (transaction/registration) done by the customer. 

* **Rolling expiry from event date**: The current date of points expiry is reset to a new date based on the recent transaction date.

* **Membership event date**: Points expire automatically when the membership expires.

6. Enable **Same for all Tiers** and the condition becomes relevant for all tiers. If disabled, you have to configure conditions for each tier. For more information, see here.
7. Click **Done** to save the condition.

## Configure communication channel(s)

**Mandatory channels**: From here, you can choose the communication channels that will invariably be used and through which the communication will definitely be sent out. 

**Priority channels**: According to priority and availability, you can specify how to send the communication. For example, if you set the priority in the order of SMS, email, and mobile push, the system will first check if the customer's cell phone number is available,

* If available, it will send an SMS communication and ignore the rest.
* If not available, it will check whether the customer has an email ID
* If an email ID is available, it sends out an email notification to the customer.
* If not, it will check if the customer is active through mobile push and process the message accordingly.

Finally, configure the message for each communication channel you have chosen.

For more information on communication channels, see here.
