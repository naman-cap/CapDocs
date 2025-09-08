---
title: Attributes - Milestones & Streaks
excerpt: >-
  This document contains the information of "milestones & streaks" related
  sub-profiles of current customer profile.
deprecated: false
hidden: true
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
All the below profiles will work:

* Across both loyalty promotions & loyalty programs
* Across any customer activity where the currentCustomer profile is supported
* Across any window types (starting from a specific date, starting from the customer's 1st enrolment)

## avgTargetAchieved(targetName)

This sub-profile returns the average of the target value achieved by the customer across the cycles of the milestone.

**E.g.:** Consider there is a milestone(aka target) called ABC, and it has 5 cycles (c1, c2, c3, c4, and c5). Say, we are currently in the time range of the 3rd cycle (c3).

Assuming a user's targetAchieved value for c1 is 50, c2 is 60, c3 is 70 & c4, and C5 are future cycles.

**Now the behavior is as below**: 

* avgTargetAchieved(ABC) will return 60 which is the average of target achieved across the cycles till now. 

## targetAchievedInPeriod(targetName, periodRefCode)

This sub-profile returns the target achieved by the user in a specific cycle/period of a specific milestone/target

**E.g.:** Consider there is a milestone (aka target) called ABC, and it has 5 cycles (c1, c2, c3).

Assuming a user's targetAchieved value for c1 is 60, c2 is 50 & c3 is 75.

**Now the behavior is as below**:

* targetAchievedInPeriod(ABC, c2's refCode) will return 50. 
* targetAchievedInPeriod(ABC, c3's refCode) will return 75.

Here, the refCode is like the name of the cycle/period but not the ID of the cycle/period.

## targetAchievedInCurrentPeriod(targetName)

This sub-profile returns the target achieved by the user in the current cycle of the milestone.

**E.g.:** Consider there is a milestone (aka target) called ABC, and it has 5 cycles (c1, c2, c3).

Assuming a user's targetAchieved value for c1 is 60, c2 is 50, c3 is 75, and currently, we are in the time duration of the c3 cycle.

**Now the behavior is as below**:

* targetAchievedInCurrentPeriod(ABC) will return 75

## targetsAchievedForUnified(unifiedTargetGroupName, periodRefCode)

This sub-profile returns the number of targets achieved by the user in a unified target in a specific cycle/period.

**E.g.:** Consider there is a unified target (ABC). It has 3 targets (A, B, C) in it & has 3 cycles (c1, c2, c3)

Assuming a user has achieved 2, 3, 2 targets (among the 3 available) in each of cycles c1, c2, c3.

**Now the behavior is as below**:

* targetsAchievedForUnified(ABC, c1's refCode) returns 2
* targetsAchievedForUnified(ABC, c2's refCode) returns 3
* targetsAchievedForUnified(ABC, c3's refCode) returns 2

Here, the refCode is like the name of the cycle/period but not the ID of the cycle/period.

## targetsAchievedForUnifiedInCurrentPeriod(unifiedTargetGroupName)

This sub-profile returns the number of targets achieved by the user in a unified target during the current cycle.

**E.g.:** Consider there is a unified target (ABC). It has 3 targets (A, B, C) in it & has 3 cycles (c1, c2, c3)

Assuming a user has achieved 2, 3, 2 targets (among the 3 available) in each of cycles c1, c2, c3, and currently, we are in the time duration of the c2 cycle.

**Now the behavior is as below**:

* targetsAchievedForUnifiedInCurrentPeriod(ABC) returns 3

## isStreakAchieved(streakName)

This sub-profile returns whether a streak level is achieved by the user or not

**E.g.:** Consider there is a streak (ABC) and has 2 levels in it (ABC\_1, ABC\_2).

Assuming a user has achieved the 1st level & not the 2nd level.

**Now the behavior is as below**:

* isStreakAchieved(ABC\_1) will return true
* isStreakAchieved(ABC\_2) will return false

## streakCurrentValue(streakName)

This sub-profile returns the current value of the streak for a user.

**E.g.:** Consider there is a streak (ABC) and has 2 levels in it (ABC\_1 for 5, ABC\_2 for 10). 

Assuming a user's current streak value is 4.

**Now the behavior is as below**:

* streakCurrentValue(ABC\_1) returns 4
* streakCurrentValue(ABC\_2) returns 4
