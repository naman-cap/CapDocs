---
title: Transaction point allocation
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
Transaction points allocation lets you create various allocation strategies and use the desired one when configuring rule sets. You can allocate points on the transaction amount. You can also have common points allocation across tiers or different allocations for each tier.

To configure the Transaction point allocation action, follow these steps.

1. Select **Transaction point allocation** and click **Save**.

![fdc9915 Capture](https://files.readme.io/fdc9915-Capture.PNG)

2. In the **Earn condition**, choose the desired condition from the drop-down list.\
   To create a new condition, click on **+ Add Condition**.

![3aaaabf Untitled1](https://files.readme.io/3aaaabf-Untitled1.png)

3. In the **Zero earn condition**, choose an appropriate condition from the drop-down.\
   To create a new zero earn condition, click on **+ Add Condition**.

![5987ed8 Untitled2](https://files.readme.io/5987ed8-Untitled2.png)

4. Select the **Expiry condition** from the drop-down menu.\
   To create a new Expiry earn condition from scratch, click **+ Add condition**.

![6841eed Untitled3](https://files.readme.io/6841eed-Untitled3.png)

5. In **Prorate on**, choose on what basis you want to issue a percentage of points - transaction amount or event value. This is applicable only for prorated points allocation. If bill amount, choose a current event, if tracker, choose current aggregate or previous aggregate

* **Event default value**: Choose this to allocate prorated points on the transaction amount.
* **Current aggregate**: Choose this to allocate prorated points on the value of the tracker post the current transaction.
* **Previous aggregate**: Choose this to allocate prorated points on the value of the tracker before the current transaction.

![4e86c83 Untitled4](https://files.readme.io/4e86c83-Untitled4.png)

6. In the **Points rounding strategy**, you can choose which points rounding strategy you prefer using from the drop-down list. Points rounding strategy informs how many decimal points to use when allocating points to customers.

* **Actual**: Issues the actual number of points as configured in the prorated condition. For example, the customer will receive 19.9 points for the transaction amount of 199, if the points allocation condition is set as 10%.

* **Floor**: Evaluate and assign the values without considering the decimal value. For example, assume customers should receive 10% of points for transactions. If a customer has purchased for $199, instead of 19.9 points, the customer will receive 19 points.

* **Round**: Determine the number of decimal points you want to support for decimal points. Zero is for no decimal, one is for one, two is for two, and three is for three decimal points. 

![086d85e Untitled5](https://files.readme.io/086d85e-Untitled5.png)

7. Select **Delay strategy**.

* As defined in allocation strategy: Points are assigned based on the conditions defined in the allocation strategy. If no conditions are defined, points will be directly issued as current points.

* Fixed delay days from item return period: Based on the return period configured against the product, issue the promised points as current points once the return period expires. For example, assume for a transaction with a return period of 7 days, the customer is promised to get 1000 points. These promised points will be converted into current points after 7 days i.e after the return period is over.

* Fixed delay days from item extended:

* On external trigger:  Issue points at the event of “transaction add” as promised points and convert them at the event of “transaction update”. For example: In hospitals, promised points will be issued immediately when you make a booking and will be converted into current points when the bill is settled.  

![aabfd04 Untitled6](https://files.readme.io/aabfd04-Untitled6.png)

## Configure communication channel(s)

## Mandatory channels

Here you can select the channels through which the communication has to be sent out for sure. Then, configure the message for each channel you select.

![dfa5099 Untitled7](https://files.readme.io/dfa5099-Untitled7.png)

## Priority channels

Here, you can set the channels through which the communication needs to be sent out based on the priority and availability. For example, if you set the priority in the order SMS, email, and mobile push, the system will first check if the customer's mobile number is available,

* If available, it will send an SMS communication and ignore the rest.
* If not available, it will check whether the customer has an email ID
* If an email ID is available, it sends out an email notification to the customer.
* If not, it will check if the customer is active through mobile push and process the message accordingly.

![e9efd45 Untitled8](https://files.readme.io/e9efd45-Untitled8.png)

Once the priority channels are set, configure the message for each channel.

For more information on communication channels, see here.
