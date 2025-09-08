---
title: Milestones in events
excerpt: This page helps in understanding the "Milestones" page of "Events" tab.
deprecated: false
hidden: true
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
## Milestones in events

Milestones (also called Targets) are one of the powerful methods which brand use to track their customers' KPIs and reward them for their loyalty. A customer can be part of several milestones and can benefit from multiple rewards by reaching the milestones/targets.

**Until now, what is happening is:**

In the member care profile page of the customer, under the “Targets” section of the “Loyalty” tab, the following information is available:

1. Target group which customer is part of.
2. Targets & periods present in each of those target groups

However, the problem is, this is just basic level information. Whenever someone (brands, salespeople, customer service) wants to know extra information, unfortunately, they have to raise a ticket to get that information. This is not an optimal user experience as it takes time & effort from users.

After this enhancement, the above problem is entirely solved by introducing a dedicated “Milestones” page in the “Events” tab of member care. By visiting this page, much detailed information about the milestones will be available at your fingertips. It looks like below:

![7842041 Screenshot 2023 05 25 at 11](https://files.readme.io/7842041-Screenshot_2023-05-25_at_11.59.10_AM.png)

To understand how to read this page (which has so much information), let’s refresh the following basic points of targets. They are:

1. Target group contains targets. A single target group can have multiple targets.
2. Target contains cycles. A single target can contain multiple cycles.
3. Each target will have a target value to achieve.
4. In each cycle of a target, there can be sub-targets/sub-milestones.

Let’s say, a customer is part of 4 target groups and each of those targets has 5 targets inside them. In this case, the customer is part of 20 targets in total. 

Let’s say, the 1st target in the 1st target group has 3 cycles in it. In that case, the customer has to achieve the target in each of the 3 cycles to get benefits during each cycle.

Let’s say, the target value of the 1st target in the 1st target group is 10,000. Upon reaching this target, the customer will get the reward. However, there are scenarios, where brands want to reward their customer for intermediate achievements (like at 2500, 5000, etc..), and these are called sub-milestones/sub-targets.

**Now, the walk-through of the UI:**

First, users have to go to the “Milestones” tab in the “Events” section of member care.

![151efbc Screenshot 2023 05 26 at 5](https://files.readme.io/151efbc-Screenshot_2023-05-26_at_5.37.09_PM.png)

The below screengrab shows all the targets of which the customer is part. In the above case, the customer will have 20 targets. Each of the panes indicates a target, and it shows the following information:

1. Name of the target
2. Duration of the target (Start date of first cycle, end date of last cycle)
3. Number of cycles present in the target

![1900b25 Screenshot 2023 05 26 at 5](https://files.readme.io/1900b25-Screenshot_2023-05-26_at_5.37.23_PM.png)

Upon clicking the pane, further details of that clicked pane (aka target) will be displayed on the right screen. This has 2 parts in total: The information pane, Timeline pane.

The information pane contains the information of the target. That includes:

1. Name of the target group to which that target belongs.
2. Tracker type of the target
3. Evaluation type of the target (Fixed, Cyclic, Period agnostic)
4. KPI on which the target is created.

![2226104 Screenshot 2023 05 26 at 5](https://files.readme.io/2226104-Screenshot_2023-05-26_at_5.37.36_PM.png)

The timeline pane shows the journey of the customer in that target as a journey. This includes:

1. Date when the target/milestone starts
2. The date range of each cycle in that milestone. If the milestone has multiple cycles, it will show multiple cycles with the “location” symbol.
3. Whether the target is achieved or not in each of the cycles, along with information about the target value. The completed cycle will be in solid green, ongoing will be in outer-line green, and upcoming will be in gray color.
4. Date when the target/milestone ends.

![3ed07dc Screenshot 2023 05 26 at 5](https://files.readme.io/3ed07dc-Screenshot_2023-05-26_at_5.38.00_PM.png)

Now, if any target has sub-targets/sub-milestones inside them for each cycle, that information will also be available. For that users have to click on the “dropdown” symbol on the right side of the cycle. Upon clicking, it will be something similar to the below screen grab:

![0117bcf Screenshot 2023 05 26 at 5](https://files.readme.io/0117bcf-Screenshot_2023-05-26_at_5.38.14_PM.png)

In the above screengrab, it can be seen that the full target value in that cycle is 1000. However, there are 2 sub-milestones/sub-targets present in that cycle. They are:

1. On reaching 100
2. On reaching 200

Along with that, on what date the customer achieved that sub-milestone is also available on the left side of that sub-milestone name. The actions that need to be taken whenever the sub-milestone is achieved are also available at the same place.

In this way, the entire target-related information of the customer will be available easily from the member care instead of raising tickets and all.
