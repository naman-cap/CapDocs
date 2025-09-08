---
title: Attributes - Tracker
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
## **Attribute: numberOfVisits**

**Profile:** Current Tracker (currentTracker)\
**Data Type:** integer\
**Sub-Attributes:** NA\
**Description:** returns a number of visits tracked by the current tracker, works only for customer visit tracker.\
**Operators:** >,\<,>=,\<=,=\
**Syntax: currentTracker.numberOfVisits[OPERATORS][VALUE]**

| Example: Write a condition to track if a customer total visits or the transaction count is equals to 9. |
| :------------------------------------------------------------------------------------------------------ |
| currentTrackerCondition.numberOfVisits>5                                                                |

***

## **Attribute: trackedValue (Tracked Value)**

**Profile:** Current Tracker (currentTracker)\
**Data Type:** BigDecimal\
**Sub-Attributes:** NA\
**Description:** returns tracked value in the tracker for current events.\
**Operators:** >,\<,>=,\<=,=\
**Syntax: currentTracker.trackedValue[OPERATORS][VALUE]**

| Example: Write a condition to check if the Tracked Value is greater than 5000. |
| :----------------------------------------------------------------------------- |
| currentTrackerCondition.trackedValue>5000                                      |

***

## **Attribute: trackerConditionName**

**Profile:** Current Tracker (currentTracker)\
**Data Type:** String\
**Sub-Attributes:** NA\
**Description:** returns number of visits tracked by current tracker. works only for customer visit tracker.\
**Operators:** contains, exists, isEmpty, isNotNull, isNull, isValidDate, matches and notExists\
**Syntax: currentTracker.tackerConditionName[OPERATORS][VALUE]**

| Example: Write a condition to check if the tracker condition name is “Cond1” |
| :--------------------------------------------------------------------------- |
| currentTrackerCondition.trackerConditionName=="Cond1"                        |

***

## **Attribute: trackerConditionPeriod**

**Profile:** Current Tracker (currentTracker)\
**Data Type:** int\
**Sub-Attributes:** NA\
**Description:** returns tracking period value\
**Operators:** >,\<,>=,\<=,==\
**Syntax: currentTracker.trackerConditionPeriod[OPERATORS][VALUE]**

| Example: Write a condition to check if the tracker condition period is greater than 15. |
| :-------------------------------------------------------------------------------------- |
| currentTrackerCondition.trackerConditionPeriod>15                                       |

***

## **Attribute: trackerCurrAggr**

**Profile:** Current Tracker (currentTracker)\
**Data Type:** BigDecimal\
**Sub-Attributes:** NA\
**Description:** returns aggregate tracked value in current tracking period for all events including current event.\
**Operators:** >,\<,>=,\<=,==\
**Syntax:** currentTracker.trackerCurrAggr[OPERATORS][VALUE]

| Example: Write a condition to check if the tracker current aggregator is greater than 5000. |
| :------------------------------------------------------------------------------------------ |
| Rule: currentTracker.trackerCurrAggr >5000                                                  |

***

## **Attribute: trackerInitialPrevAggr**

Profile: Current Tracker (currentTracker)\
Data Type: BigDecimal\
Sub-Attributes: NA\
Description: returns aggregate tracked value in current tracking period for all events including current event.\
Operators: >,\<,>=,\<=,==\
Syntax: currentTracker.trackerInitialPrevAggr[OPERATORS][VALUE]

| Example: Write a condition to check if the tracker Initial Prev Aggregator is less than 3000. |
| :-------------------------------------------------------------------------------------------- |
| Rule: currentTracker.trackerCurrAggr \< 3000                                                  |

***

## **Attribute: trackerName**

**Profile:** Current Tracker (currentTracker)\
**Data Type:** String\
**Sub-Attributes:** NA\
**Description:** returns tracker name\
**Operators:** contains, exists, isEmpty, isNotNull, isNull, isValidDate, matches and notExists, =\
**Syntax:** currentTracker.trackerName[OPERATORS][VALUE]

| Example: Write a condition to check if the tracker name is Tracker1 |
| :------------------------------------------------------------------ |
| Rule: currentTracker.trackerName = “Tracker1”                       |

***

## **Attribute: trackerInitialPrevAggr**

**Profile:** Current Tracker (currentTracker)\
**Data Type:** String\
**Sub-Attributes:** NA\
**Description:** returns aggregate tracked value in current tracking period for all events excluding current event\
**Operators:** >,\<,>=,\<=,=\
**Syntax: currentTracker.trackerName[OPERATORS][VALUE]**

| Example: Write a condition to check if the tracker Initial Prev Aggregator is 300 |
| :-------------------------------------------------------------------------------- |
| Rule: currentTracker.trackerInitialPrevAggr  > 300.                               |
