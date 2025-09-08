---
title: Attributes - Group Identity
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
# currentUserGroup - Group Identity Attributes

**String Operators widely used with name attributes**

The basic range of string operations serves to resolve the string attribute into a boolean outcome. These operators are inserted after the string attribute using the (.) notation e.g. currentUserGroup.name.contains("Corporate")

| Operator  | Definition                                                                                         |
| :-------- | :------------------------------------------------------------------------------------------------- |
| contains  | Used to see if the string contains the defined value                                               |
| matches   | This is used to perform regular expression-based matching on the string                            |
| exists    | Some proper value exists for this string (i.e. source passed a value that was not an empty string) |
| notExists | The string is either Null or Empty                                                                 |
| isNull    | checks if the string is Null i.e. it was not passed from the source                                |
| isNotNull | checks if the string is NOT Null                                                                   |

## **Name**

Use the `name` attribute to check the user group's name. This allows you to target specific groups based on their name or check if the name contains certain substrings.

### Purpose

Target users based on their user group name for personalized messaging or group-specific campaigns.

### Usage

* **Profile**: `currentUserGroup()`
* **Attribute**: `name`
* **Data type**: `STRING`

### Supported operators

You can use the following string operators with the name attribute:

| Operator  | Definition                                                                                         |
| :-------- | :------------------------------------------------------------------------------------------------- |
| contains  | Used to see if the string contains the defined value                                               |
| matches   | Used to perform regular expression-based matching on the string                                    |
| exists    | Some proper value exists for this string (i.e. source passed a value that was not an empty string) |
| notExists | The string is either Null or Empty                                                                 |
| isNull    | Checks if the string is Null i.e. it was not passed from the source                                |
| isNotNull | Checks if the string is NOT Null                                                                   |
| ==        | Returns true if both operands have the same value                                                  |

### Syntax

```js
currentUserGroup.name[Operator][Value]
```

### Examples

| Example 1: Check if the user group name has substring "Corp". |
| :------------------------------------------------------------ |
| currentUserGroup.name.contains("Corp")                        |
| Example 2: Check if the user group name is "Enterprise Team"  |
| :-----------------------------------------------------------  |
| currentUserGroup.name == "Enterprise Team"                    |
| Example 3: Check if the user group name contains "family"     |
| :--------------------------------------------------------     |
| currentUserGroup.name.contains("family")                      |

***

## **External ID (externalId)**

Use the `externalId` attribute to check the user group's external identifier. This is useful for targeting user groups based on their external system identifiers.

### Purpose

Target user groups based on their external identifiers for integration with external systems or specific group targeting.

### Usage

* **Profile**: `currentUserGroup()`
* **Attribute**: `externalId`
* **Data type**: `INTEGER/ALPHANUMERIC`

### Supported operators

You can use the following operators with the externalId attribute:

| Operator  | Definition                                                      |
| :-------- | :-------------------------------------------------------------- |
| contains  | Used to see if the string contains the defined value            |
| exists    | Some proper value exists for this string                        |
| isEmpty   | Similar to notExists                                            |
| isNotNull | Checks if the string is NOT Null                                |
| isNull    | Checks if the string is Null                                    |
| notExists | The string is either Null or Empty                              |
| ==        | Returns true if both operands have the same value               |
| !=        | Returns true if the operands don't have the same value          |
| matches   | Used to perform regular expression based matching on the string |

### Syntax

```js
currentUserGroup.externalId[Operator][Value]
```

### Examples

| Example 1: Check if the current user group's external ID contains a string "ENT" |
| :------------------------------------------------------------------------------- |
| currentUserGroup.externalId.contains("ENT")                                      |
| Example 2: Check if the current user group external ID exists                    |
| :------------------------------------------------------------                    |
| currentUserGroup.externalId.exists()                                             |
| Example 3: Check if the current user group external ID equals "CORP\_456"        |
| :------------------------------------------------------------------------        |
| currentUserGroup.externalId == "CORP\_456"                                       |

***

## **Created Date (createdDate)**

Use the `createdDate` attribute to check when the user group was created. This is useful for targeting groups based on their creation timeline or age.

### Purpose

Target user groups based on when they were created for time-sensitive campaigns or lifecycle-based messaging.

### Usage

* **Profile**: `currentUserGroup()`
* **Attribute**: `createdDate`
* **Data type**: `DATE`

### Supported sub-attributes

You can use the following date sub-attributes with the createdDate attribute:

| Sub-Attribute      | Definition                                                               |
| :----------------- | :----------------------------------------------------------------------- |
| isAfter            | Checks if the creation date is after a specified date and time           |
| isBefore           | Checks if the creation date is before a specified date and time          |
| isNotNull          | Checks if the creation date has a value (is not null)                    |
| isNull             | Checks if the creation date is null                                      |
| year               | Returns the year of the creation date                                    |
| month              | Returns the month of the creation date                                   |
| day                | Returns the day of week of the creation date                             |
| dayOfMonth         | Returns the day of the month of the creation date                        |
| isWeekday          | Checks if the creation date falls on a weekday                           |
| isWeekend          | Checks if the creation date falls on a weekend                           |
| daysDiff           | Returns the difference in days between creation date and another date    |
| daysDiffFromString | Returns the difference in days between creation date and a date string   |
| minutesDiff        | Returns the difference in minutes between creation date and another date |
| dateDiff           | Returns the difference between creation date and another date            |
| isHourBetween      | Checks if the creation date's hour falls between specified hours         |
| isTimeBetween      | Checks if the creation date's time falls between specified times         |
| isValid            | Checks if the creation date is a valid date                              |

### Syntax

```js
currentUserGroup.createdDate[Sub-Attribute][Parameters]
```

### Examples

| Example 1: Check if the user group was created after May 1st, 2025    |
| :-------------------------------------------------------------------- |
| currentUserGroup.createdDate.isAfter(2025,5,1,0,0,0)                  |
| Example 2: Check if the user group was created in 2024                |
| :--------------------------------------------------------             |
| currentUserGroup.createdDate.year == 2024                             |
| Example 3: Check if the user group was created on a weekend           |
| :-----------------------------------------------------------          |
| currentUserGroup.createdDate.isWeekend(true)                          |
| Example 4: Check if the user group was created more than 30 days ago  |
| :-------------------------------------------------------------------- |
| currentUserGroup.createdDate.daysDiff(2025,5,27) > 30                 |

## **Usage Examples - Combined Conditions**

| Example 1: Write a rule to check if the user group name contains "Corporate" and was created after May 1, 2024      |
| :------------------------------------------------------------------------------------------------------------------ |
| Expression: **currentUserGroup.name.contains("Corporate") && currentUserGroup.createdDate.isAfter(2024,5,1,0,0,0)** |

| Example 2: Write a rule to check if the user group has an external ID and the name is not null |
| :--------------------------------------------------------------------------------------------- |
| Expression: **currentUserGroup.externalId.exists() && currentUserGroup.name.isNotNull(true)**  |