---
title: Attributes - Registration Date
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
## **joinDate**

**Profile :** currentCustomer\
**Attribute :** joinDate\
**Type :** Date\
**Meaning :** Registration date of a customer.\
**Output:**&#x54;he basic range of date operations serve to resolve the date attribute into a boolean outcome. You will commonly be combining multiple attributes in date operations, since you will be comparing dates

**Sub-Attributes :** dateDiff, day, dayOfMonth, daysDiff, daysDiffFromString, isAfter, isHourBetween, isTimeBetween, isValid, isWeekday, isWeekend, month, and year.

**Operators :** isNull - checks if the the date is Null i.e. it was not passed from source and isNotNull - checks if the the date is NOT Null i.e. some value was passed from source\
**Syntax : currentCustomer.joinDate.[Sub-Attribute][Operator][VALUE]**

| Profile         | Attribute | Sub-Attribute      | Description and Example                                                                                                       |
| :-------------- | :-------- | :----------------- | :---------------------------------------------------------------------------------------------------------------------------- |
| currentCustomer | joinDate  | datediff           | dateDiff - absolute difference between 2 dates e.g. currentCustomer.joinDate.dateDiff(currentTxn.date)==0                     |
| currentCustomer | joinDate  | day                | day - day of the week, week starts on Sunday as 1 e.g. Terrific Tuesdays would be currentCustomer.joinDate.day( )==3          |
| currentCustomer | joinDate  | isWeekday          | isWeekday - checks if the date is a weekday e.g. currentCustomer.joinDate.isWeekday( )                                        |
| currentCustomer | joinDate  | isWeekend          | isWeekend - checks if the date is a weekend e.g. currentCustomer.joinDate.isWeekend( )                                        |
| currentCustomer | joinDate  | isValid            | isValid - simply checks if a valid date is present in that field e.g. currentCustomer.joinDate.isValid( )                     |
| currentCustomer | joinDate  | isAfter            | isAfter - checks if the attribute occurs after a defined date-time e.g. currentCustomer.joinDate.isAfter(YYYY,MM,DD,HH,MM,SS) |
| currentCustomer | joinDate  | isHourBetween      | isHourBetween - scenarios like happy hours. hour in 24 hour format e.g. currentCustomer.joinDate.isHourBetween(HH,HH)         |
| currentCustomer | joinDate  | isTimeBetween      | isTimeBetween - similar to happy hours, but when minutes also matter e.g. currentCustomer.joinDate.isTimeBetween(HH,MM,HH,MM) |
| currentCustomer | joinDate  | dayOfMonth         | dayOfMonth - date of the month e.g. For offers on the first 5 days of each month                                              |
| currentCustomer | joinDate  | daysDiff           | daysDiff - same as dateDiff, but ignores the year. Useful for anniversary type promotions.                                    |
| currentCustomer | joinDate  | daysDiffFromString | daysDiffFromString - same as daysDiff, but when you want to use an attribute that could be saved as a string                  |
| currentCustomer | joinDate  | minutesDiff        | minutesDiff - absolute difference similar to dateDiff, but looks at minutes                                                   |
| currentCustomer | joinDate  | Month              | month - month number is returned                                                                                              |
| currentCustomer | joinDate  | Year               | year - returns the year from the date e.g. currentCustomer.joinDate.year( )>=1981                                             |
