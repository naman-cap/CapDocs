---
title: FAQ
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
1. **Can I create streaks based on the cyclic calendar window type?**\
   As of now, a streak can be created only of fixed calendar window type. This means that, for all the users of the streak, the streak will start & end on the same date.
2. **Can I create streaks where I don't want my user to perform the activity continuously? I'm okay with breaks also as long as the user does the activity 'n' times.**\
   This is being called "non-continuous" streaks. Yes, this is possible. During the creation flow of the streak, in the "activity" step, look for the "non-continuous" toggle.

![1e0c132 Screenshot 2024 04 09 at 8](https://files.readme.io/1e0c132-Screenshot_2024-04-09_at_8.58.02_PM.png)

1. **Can I give benefits multiple times for the same level to a user?**\
   A user can get the benefits only once for a level in a streak.
2. **What is the difference between a continuous streak & non-continuous streak?**\
   In the case of the continuous streak, the streak value will reset whenever there is a break in achieving the activity by the user. Think of this as a Snapchat streak.\
   In the case of the non-continuous streak, the streak value won't get reset even if there is a break from the user in achieving the activity. This is more flexible.
3. **How does the SUM KPI in behavioural events work as I was asked to select an attribute mandatorily?**\
   Example: There is a behavioural event created by the brand that always tracks whenever a user walks. The number of steps walked by the user is stored in the attribute of the event to show that to the user on their mobile app.\
   Now, the brand wants to reward its users with 1000 points whenever a user walks 50k steps in a week. In this case, tracking the number of times the user has walked won't help, rather we have to sum the attribute value whenever the event is being triggered.\
   By using this functionality, the use cases like the above can also be achieved.
4. **Are there any filters available where I can filter my customers based on their streak value?**\
   As of now, there are no filters available where customers can be filtered on their streak value. Contact the support team whenever you encounter such use cases.
5. **I cannot see the name of the streak definition/levels in the UI, however, it seems that I have to write rules based on the exact level name. How does this work?**\
   As of now, you cannot provide a custom name for each level of the streak. This feature will be available in the future.\
   Until then, the name of a streak level will be "streak name\_X". Say, you have 2 levels in your streak & the name of the streak is ABC.
   1. Name of the level 1 is "ABC\_1"
   2. Name of the level 2 is "ABC\_2".
6. **Is there any support for event notifications in Streaks?**\
   As of today, there is no support for event notifications in streaks. However, this feature will be available in the future.
