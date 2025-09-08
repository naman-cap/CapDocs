---
title: Configure Earning Condition
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
> 📘
>
> * Applicable only for Loyalty earning promotion

This is the first step of the Loyalty Earning Promotion where you can configure conditions to unlock the cart promotion. You can define the condition to unlock the promotion either activity-based or milestone-based.

* [For activity-based promotion unlocking](https://docs.capillarytech.com/docs/configure-earning-condition#for-activity-based-promotion-unlocking)
* For milestone-based earning \([https://docs.capillarytech.com/docs/configure-earning-condition#for-milestone-based-earning](https://docs.capillarytech.com/docs/configure-earning-condition#for-milestone-based-earning) 

## For activity-based promotion unlocking

1. In Configure earning, select **Single activity**.

![397025b WLCzoNeQv7YPKGW00kvld1eXujBFGsNv4g](https://files.readme.io/397025b-WLCzoNeQv7YPKGW00kvld1eXujBFGsNv4g.png)

2. **Select earning activity**: Select the activity for which you want to unlock the promotion and click **Continue**.

| Option              | Description                                                                                      |
| :------------------ | :----------------------------------------------------------------------------------------------- |
| Makes a transaction | Select this to define the earning condition on new transaction activity.                         |
| Registers           | Select this to define the promotion earning condition on the new customer registration activity. |
| Updates profile     | Select this to define the promotion earning condition on the customer's profile update activity. |

![f72b06d gz3DciyzDyuLVF8uAVB9EU3S9nXygBCIPA](https://files.readme.io/f72b06d-gz3DciyzDyuLVF8uAVB9EU3S9nXygBCIPA.png)

2. **Define earning scope**: You can define promotion unlocking only when the selected activity is performed at a specific store(s), zone(s), or concept(s). For example, unlock promotion only when a customer makes a transaction at the store ABC.

* Click **Customize** to add scope. 
* Select desired options according to the selected scope (stores, zones, or concepts).
* Click **Done** to save 

![c5dff0d TKRpsTaV3h589NTfanUSZnplR6KJR4jl2w](https://files.readme.io/c5dff0d-TKRpsTaV3h589NTfanUSZnplR6KJR4jl2w.png)

* Click **Continue** to proceed.

3. **Define earning conditions**: You can configure the unlocking condition using rule expressions. For example, unlock the promotion for the transaction activity with a transaction value of more than $100.

* In **Criteria name**, enter the name of the criteria.
* In the expression box, define the condition that you need to evaluate.  
* Click **Continue** to proceed. 

If no condition is required to avail of the promotion, just enter true.

![ce3c614 lqWbqSVjxtYugfCpgIvUgPQUylCQwOJNHA](https://files.readme.io/ce3c614-lqWbqSVjxtYugfCpgIvUgPQUylCQwOJNHA.png)

4. **Additional Settings**: Set the earning cap and validity of points earned through the promotion and click Continue to proceed.

![ec4382f HlUq4E41sDxSxMuFN7eux7KCM1pf 8bW5g](https://files.readme.io/ec4382f-HlUq4E41sDxSxMuFN7eux7KCM1pf_8bW5g.png)

* **Maximum earning per customer**: Enable this option to limit a customer from earning this promotion and enter your preferred times in the box that appears. For example, a customer can earn the promotion only twice. 
* **Restrict earning days**: Enable this option to limit the period during which a customer can earn the promotion. Enter the number of days in **From the date of issual**.\
  This can help customers to make purchases before the offer lapses. Limited period offers are more effective than long-running offers.

![a5550ed YZvDH9Gf26h7xdp9Qq5hszHpT0spXDLWsQ](https://files.readme.io/a5550ed-YZvDH9Gf26h7xdp9Qq5hszHpT0spXDLWsQ.png)

* **Set expiry of the earned promotion**: After a customer unlocks or earns the promotion, you can define the validity of the promotion.\
  a. **Along with the promotion**: Select this option to expire the promotion on the promotion end date.\
  b. **From the date of earning**: Select this option to keep the promotion active for a specific number of days from the earning date. For example, you can set to expire promotion in 7 days from the date of earning the promotion.

## For milestone-based earning

You can select an audience group and set a target for them to achieve to unlock promotions.

To configure, do the following.

* In Configure earning, select **Activity milestone**.

1. **Select milestone group:** Select an audience group that you want to target and click **Continue** to proceed.

To add a new audience or target group, log on to Intouch and navigate to the Profile icon > Organization Settings >  Master Data Management > Data Model >\
SALES TARGETS

![f1ebad5 cJLyjW9xjL8 BzfZmi8C8d9vYJNF2adXQg](https://files.readme.io/f1ebad5-cJLyjW9xjL8_BzfZmi8C8d9vYJNF2adXQg.png)

2. **Select milestone**: Select the target that the selected audience group must achieve to unlock the promotion and click **Continue** to proceed.

![dd23954 5yTdk5V thVPJtkbWVIfF5QxlCJmeWfeJg](https://files.readme.io/dd23954-5yTdk5V-thVPJtkbWVIfF5QxlCJmeWfeJg.png)

3. In **Additional Settings**, set the earning cap and validity of the points earned through the promotion.

* In XYZ, set the earning cap. 
* Click **Continue**.