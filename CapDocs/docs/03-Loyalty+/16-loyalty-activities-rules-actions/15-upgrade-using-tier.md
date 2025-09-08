---
title: Upgrade using tier
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
You can upgrade customers using the tier conditions when they satisfy a certain condition. It could be regarding the rewards they earned or just a general notification.

To configure the Upgrade using tier action, follow these steps:

1. In Action, select **Upgrade using tier**.   

![407cf91 Upgrade using tiers](https://files.readme.io/407cf91-Upgrade_using_tiers.png)

2. In **User entity**, choose Individual to issue points to customers who met the condition. OR\
   Choose Group to issue points to the group.
3. To issue points, enable Award points.

![652e7eb Upgrade using tiers3](https://files.readme.io/652e7eb-Upgrade_using_tiers3.png)

4. In the **Earn condition**, choose the earning condition that you want to associate using the drop-down list.\
   To create a new condition, click on **+ Add Condition**.
5. In **Expiry condition**, choose the expiry for the points using the drop-down list.\
   To create a new expiry earn condition, click **+ Add condition**.
6. In **Prorate on**, choose on what basis you want to issue percentage of points - transaction amount or event value. This is applicable only for prorated points allocation. For bill amount, you can choose the *Current event*, for tracker, you can choose *Current aggregate* or *Previous aggregate*.

* **Event default value**: Choose this to allocate prorated points on the transaction amount.
* **Current aggregate**: Choose this to allocate prorated points on the value of the tracker post the current transaction.
* **Previous aggregate**: Choose this to allocate prorated points on the value of the tracker before the current transaction.
