---
title: Unified target/milestones
excerpt: This document provides you with information on Unified milestones.
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
A unified target, also called unified milestones, can be achieved by completing two or more individual targets. This enables brands to configure multiple targets in a single milestone for their customers, and reward them for achieving all the targets. Unified targets help brands improve their sales across verticals, across categories, and sales across a specific category by giving customers various targets.

# Components of a unified target

A unified milestone primarily consists of the following:

1. Multiple targets (at least 2 targets need to be present)
2. A logical operator (ALL or ANY) between the specified targets. Users can choose ALL or ANY, but not a mix between the targets.
3. An overall target if a brand desires (currently supported only for the ALL operator & transaction type activity ).
4. Supported only for fixed calendar window (aka only when the "start date of the first cycle" is specified explicitly by the brand)

<Note title="Note">
A maximum limit of 10 targets can be created in a unified milestone.
</Note>

## Use case 1

XYZ, a leading conglomerate, operates across various sectors, including electronics, fashion, groceries, medicines, and more. Customers enjoy unique benefits by engaging in cross-vertical purchases, including:

1. Buying any two electronic items from the electronics vertical.
2. Making a minimum jewelry purchase of $1000 from the fashion vertical.
3. Completing five transactions, each amounting to a minimum of $10, within the e-commerce vertical.

Upon reaching the specified targets, users can redeem a $30 coupon.

## Use case 2

A customer of a fuel brand can earn rewards by meeting specific purchase targets, which include:

1. Buying a minimum of 5 liters of a specified quality of petrol.
2. Making purchases in the food & beverages category totaling at least $30.

Upon successfully achieving these targets within a specified timeframe, the user is eligible to receive 300 points as a reward.

## Use case 3

To meet the target set by a renowned electronics brand, a user is required to:

Buy electronics with a minimum total value of $600, fulfilling all of the following conditions:

* Purchase heavy electronics amounting to $150.
* Conduct 5 transactions, each valued at a minimum of $30. 
* Make 3 visits, each with a minimum expenditure of $50. 
* Purchase any combination of 5 electronic items.

# Creating a unified target

To create a unified target, navigate to the Milestone page and follow a process similar to [creating a regular Milestone](https://docs.capillarytech.com/docs/milestones-new-flow#milestone-details). However, for unified targets, do the following in the "target activity" step:

1. Choose the **Same target value for each cycle** option.

![1beb8c5 image](https://files.readme.io/1beb8c5-image.png)

2. You'll see a section asking for details about a single target.

![8064ebb image](https://files.readme.io/8064ebb-image.png)

3. Configure the KPI on which the single target needs to be created.

![c06ff9b image](https://files.readme.io/c06ff9b-image.png)

4. From the drop-down set the scope of the target (like rules, stores, zones, etc..)

![be8ae14 image](https://files.readme.io/be8ae14-image.png)

5. To add another target, click **Add target.**

![d6a667e image](https://files.readme.io/d6a667e-image.png)

6. Enter the details of the second target. 

![78cf56c image](https://files.readme.io/78cf56c-image.png)

7. Toggle the slider to enable **Overall target**. The Overall target is applicable only when the activity is a "**transaction type**" for all the targets and "**all**" the targets need to be achieved. This is optional and applies to scenarios such as [Use case 3](https://docs.capillarytech.com/docs/unified-milestones#use-case-3) where you have an overall target and individual targets with "all" as a condition between them. The Overall target option cannot be used with the operator "ANY".

   ![912987b image](https://files.readme.io/912987b-image.png)
8. By default, when you add a new target, "ALL" will be configured between them. However, from the drop-down, choose **All**  or **ANY** to define the target conditions that need to be achieved. Select  ALL for scenarios such as [Use case 2](https://docs.capillarytech.com/docs/unified-milestones#use-case-2) or select ANY and define the number of targets that need to be achieved if only a certain number of the defined targets need to be achieved.

![a646058 image](https://files.readme.io/a646058-image.png)

![21e6048 image](https://files.readme.io/21e6048-image.png)

9. Click **Continue**. You cannot add a sub-target for a unified target.

![8a73f09 image](https://files.readme.io/8a73f09-image.png)

10. Click **Done**. A unified target has been successfully created.

> 📘 Benefits can be given for unified targets in the following ways:
>
> 1. For the whole unified target achievement
> 2. For the achievement of an individual target inside the unified target
>
> **Example:** Say, there is an unified target called "ABC" that has 3 targets (X, Y, Z) in it.
>
> X: User has to purchase $100 in a month
>
> Y: User has to make 3 transactions in a month
>
> Z: User has to update profile picture 2 times in a month
>
> **Here, say the rewarding is:** If user achieves ANY(2) of the 3, will get 500 points. However, the brand also wants to reward 100 points whenever the user achieves individual target also. 
>
> * For the unified achievement, write the rule "currentEvent.isUnifiedTargetAchievedEvent" in the rule-box on the promotions side. Add the "issue points" action by selecting the 'unified target' as the response for the 'target(s)' after selecting the correct option (aka 'ABC' here) in 'Milestones/Streaks' drop-down.
>
>   ![f6d9d65 Screenshot 2024 08 05 at 4](https://files.readme.io/f6d9d65-Screenshot_2024-08-05_at_4.13.07_PM.png)
>
>   * In the unified achievement case, pro-rate won't work as there is no source value.
> * For the achievement of individual targets inside the unified targe, follow the exact rules that we write for normal targets & just make sure you are providing the correct name. For example, to configure the benefit of 100 points for 'X' target which is present inside the unified target:
>   * Write the rule currentEvent.targetExists("X") && (currentEvent.targetAchieved("X")>=currentEvent.targetDefined("X")) in the rule-box.
>   * This time, select the specific target (aka 'X' here) in the 'Target(s)' drop-down after selecting the correct option (aka 'ABC' here) in the 'Milestones/Streaks' drop-down.
>   * In this case, pro-rated also will work as there is a source value.
