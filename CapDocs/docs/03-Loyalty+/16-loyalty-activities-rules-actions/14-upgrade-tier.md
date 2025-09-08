---
title: Upgrade tier
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
You can upgrade the tier for the customer based on a tracker value or any specific event value and provide all the privileges of the tier.

To configure the **Upgrade to tier** action, follow these steps.

1. Select **Upgrade to tier** and click \**Save*.

![cf128cc Capture](https://files.readme.io/cf128cc-Capture.PNG)

2. After you select **Upgrade to tier**, you will see the following screen.\
   Hover to **Slab to upgrade** and choose the desired option from the drop-down.

![4ee2e31 Untitled](https://files.readme.io/4ee2e31-Untitled.png)

3. Toggle **Award points** to green to enable the criteria to award the points to the customer.  

![06fcfcf Capture3](https://files.readme.io/06fcfcf-Capture3.PNG)

4. In the **Earn condition**, choose the desired condition from the drop-down list.\
   To create a new condition, click on **+ Add Condition**.

![39c48b9 Capture4](https://files.readme.io/39c48b9-Capture4.png)

5. Select the **Expiry condition** from the drop-down menu.\
   To create a new expiry earn condition from scratch, click **+ Add condition**.

![d7e139a Capture5](https://files.readme.io/d7e139a-Capture5.png)

6. In **Prorate on**, choose on what basis you want to issue a percentage of points - transaction amount or event value. This is applicable only for prorated points allocation. If bill amount, choose a current event, if tracker, choose current aggregate or previous aggregate.

* **Event default value**: Choose this to allocate prorated points on the transaction amount.
* **Current aggregate**: Choose this to allocate prorated points on the value of the tracker post the current transaction.
* **Previous aggregate**: Choose this to allocate prorated points on the value of the tracker before the current transaction.

![5d87797 capture6](https://files.readme.io/5d87797-capture6.png)

7. Select the channels through which the communication has to be sent out for sure. 

i.  **Mandatory channels**: You can select the channels through which the communication has to be sent out for sure. Then, configure the message for each channel you select.

![1aaf99f capture7](https://files.readme.io/1aaf99f-capture7.png)

 ii. **Priority channels**: Here, you can set the channels through which the communication needs to be sent out based on the priority and availability. For example, if you set the priority in the order SMS, email, and mobile push, the system will first check if the customer's mobile number is available,

* If available, it will send an SMS communication and ignore the rest.
* If not available, it will check whether the customer has an email ID
* If an email ID is available, it sends out an email notification to the customer.
* If not, it will check if the customer is active through mobile push and process the message accordingly.

![fb21729 capture8](https://files.readme.io/fb21729-capture8.png)

8. Click on **Save**.
