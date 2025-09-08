---
title: Attribute - Date
excerpt: Transaction/Purchase date.
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
**Profile** : currentTxns (Current Transaction)\
**Attribute**: date\
**Sub-Attribute:** dateDiff, day, dayOfMonth, daysDiff, daysDiffFromString, isAfter, isHourBetween, isTimeBetween, isValid, isWeekday, isWeekend, month, and year\
**Data Type:** date\
**Meaning:** date of transaction\
**Syntax:** currentTxn.

| Profile    | Attribute | Sub-Attribute      | Description and Example                                                                                              |
| :--------- | :-------- | :----------------- | :------------------------------------------------------------------------------------------------------------------- |
| currentTxn | date      | datediff           | dateDiff - absolute difference between 2 dates e.g. currentTxn.date.dateDiff(currentTxn.date)==0                     |
| currentTxn | date      | day                | day - day of the week, week starts on Sunday as 1 e.g.Tuesdays would be currentTxn.date.day( )==3                    |
| currentTxn | date      | isWeekday          | isWeekday - checks if the date is a weekday e.g. currentTxn.date.isWeekday( )                                        |
| currentTxn | date      | isWeekend          | isWeekend - checks if the date is a weekend e.g. currentTxn.date.isWeekend( )                                        |
| currentTxn | date      | isValid            | isValid - simply checks if a valid date is present in that field e.g. currentTxn.date.isValid( )                     |
| currentTxn | date      | isAfter            | isAfter - checks if the attribute occurs after a defined date-time e.g. currentTxn.date.isAfter(YYYY,MM,DD,HH,MM,SS) |
| currentTxn | date      | isHourBetween      | isHourBetween - scenarios like happy hours. hour in 24 hour format e.g. currentTxn.date.isHourBetween(HH,HH)         |
| currentTxn | date      | isTimeBetween      | isTimeBetween - similar to happy hours, but when minutes also matter e.g. currentTxn.date.isTimeBetween(HH,MM,HH,MM) |
| currentTxn | date      | dayOfMonth         | dayOfMonth - date of the month e.g. For offers on the first 5 days of each month                                     |
| currentTxn | date      | daysDiff           | daysDiff - same as dateDiff, but ignores the year. Useful for anniversary type promotions.                           |
| currentTxn | date      | daysDiffFromString | daysDiffFromString - same as daysDiff, but when you want to use an attribute that could be saved as a string         |
| currentTxn | date      | minutesDiff        | minutesDiff - absolute difference similar to dateDiff, but looks at minutes                                          |
| currentTxn | date      | Month              | month - month number is returned                                                                                     |
| currentTxn | date      | Year               | year - returns the year from the date e.g. currentTxn.date.year( )>=198                                              |

| Examples: 1 Write a rule to check that the difference between current Transaction date and customer's join date is less than or equal to 7 days AND the Current Transaction value is greater than or equal to 250. |
| :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Rule: currentTxn.date.dateDiff(currentCustomer.joinDate)\<=7&&(currentTxn.value>=250)                                                                                                                              |

<Table align={["left"]}>
  <thead>
    <tr>
      <th>
        Example 2: Write a rule to check if the current Transaction is done on Wednesday or on Tuesday.
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Profile: currentTxn
        Attribute: date
        Sub-Attribute: day
        Value: week starts on Sunday as 1, Monday as 2, Tuesday as 3, Wednesday as 4, and so on.Rule: currentTxn.date.day( )==3||currentTxn.date.day( )==2
      </td>
    </tr>
  </tbody>
</Table>

| Example 3: Write a rule to check that the transaction is made after 5th July 2023, 12:00 AM and Transaction value is greater than or equal to 5000. |
| :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| Rule :currentTxn.date.isAfter(2023,07,05,00,00,00)==true&&(currentTxn.value>=5000)                                                                  |
