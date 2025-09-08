---
title: Connect the streak to loyalty promotions
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
Linking a loyalty promotion to a streak follows the same process as linking milestones to a loyalty promotion.

[More details on linking a promotion to a milestone](https://docs.capillarytech.com/docs/milestones-new-flow#configuring-benefits)

**Customer activity in promotions:** Target period elapsed.

**Rules supported for Streaks in promotions:**

1. currentEvent.streakName=="Name of the streak level provided in the UI" 
2. currentEvent.streakExists("Name of the streak level provided in the UI") 
3. currentEvent.isStreakAchievedEvent (similar to isTargetAchievedEvent)

**Notes**

1. Rules supported for the Milestones/Targets will also work for the "STREAKS" type of targets
2. (currentEvent.StreakName=="Streak level name" && currentEvent.isStreakAchievedEvent), this rule helps in configuring different benefits for achieving the different levels in the streak.
3. Customer activity is the "target period elapsed" while creating the promotion for streaks.
4. Target points allocation is the action to be used when the brand wants to give points based on different levels of the streak. 
5. Under the "Milestones/Streak" & "Targets(s)" section of the target-point allocation action: 

   1. Select the option that exactly matches your streak name.
   2. Under the "Streak-level" drop-down, select the appropriate level of the streak for which you are creating the target-point allocation action.

   ![79f87b8 Workflow](https://files.readme.io/79f87b8-Workflow.png)

Once the streak is successfully created, and linked to a loyalty promotion, then the specified streak promotions will go live and start tracking customers for their activities.
