---
title: Attributes - KPIs (User Group Slabs/Tiers)
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
## **Attributes on Slab Information**

This section covers profile attributes related to loyalty tier (slab) information. Use string operators for name-based attributes and numeric operators for number-based attributes. For date attributes, use date-time sub-attributes.

### String Operators (for `slabName`, `initialSlabName`)

| Operator    | Definition                                                  |
| :---------- | :---------------------------------------------------------- |
| `contains`  | True if the string contains the specified substring         |
| `matches`   | True if the string matches the specified regular expression |
| `==`        | True if the string equals the specified value               |
| `isNull`    | True if the string is null                                  |
| `isNotNull` | True if the string is not null                              |

### Numeric Operators (for `slabNumber`, `initialSlabNumber`)

| Operator    | Definition                                                         |
| :---------- | :----------------------------------------------------------------- |
| `==`        | True if the number equals the specified value                      |
| `!=`        | True if the number does not equal the specified value              |
| `>`         | True if the number is greater than the specified value             |
| `>=`        | True if the number is greater than or equal to the specified value |
| `<`         | True if the number is less than the specified value                |
| `<=`        | True if the number is less than or equal to the specified value    |
| `isNull`    | True if the attribute value is null                                |
| `isNotNull` | True if the attribute value is not null                            |

### Date Sub-Attributes (for `slabChangeDate`, `slabExpiryDate`)

| Sub-Attribute                 | Definition                                                     |
| :---------------------------- | :------------------------------------------------------------- |
| `isAfter`                     | True if date is after the specified date/time                  |
| `isBefore`                    | True if date is before the specified date/time                 |
| `isNull`                      | True if the date is null                                       |
| `isNotNull`                   | True if the date is not null                                   |
| `year`, `month`, `dayOfMonth` | Extracts the respective calendar component                     |
| `daysDiff`                    | Difference in days between the attribute and specified date    |
| `dateDiff`                    | Difference in days, months, or years (depending on parameters) |

***

## **slabName**

**Profile:** `currentUserGroup`\
**Attribute:** `slabName`\
**Meaning:** Current loyalty tier name of the group (for example, "Gold").\
**Type:** String\
**Syntax:** `currentUserGroup.slabName[Operator][Value]`

| Profile          | Attribute | Sub-Attribute | Operator    | Example                                    |
| :--------------- | :-------- | :------------ | :---------- | :----------------------------------------- |
| currentUserGroup | slabName  | NA            | `==`        | `currentUserGroup.slabName == "Gold"`      |
| currentUserGroup | slabName  | NA            | `contains`  | `currentUserGroup.slabName.contains("ol")` |
| currentUserGroup | slabName  | NA            | `isNull`    | `currentUserGroup.slabName.isNull()`       |
| currentUserGroup | slabName  | NA            | `isNotNull` | `currentUserGroup.slabName.isNotNull()`    |

### Examples

| Example 1 : Target groups in the "Gold" tier.       |
| :-------------------------------------------------- |
| Expression: **currentUserGroup.slabName == "Gold"** |

| Example 2 : Identify groups with tier names containing "Silv". |
| :------------------------------------------------------------- |
| Expression: **currentUserGroup.slabName.contains("Silv")**     |

| Example 3 : Check for groups without a defined tier name. |
| :-------------------------------------------------------- |
| Expression: **currentUserGroup.slabName.isNull()**        |

***

## **initialSlabName**

**Profile:** `currentUserGroup`\
**Attribute:** `initialSlabName`\
**Meaning:** Loyalty tier name of the group before the current event.\
**Type:** String\
**Syntax:** `currentUserGroup.initialSlabName[Operator][Value]`

| Profile          | Attribute       | Sub-Attribute | Operator    | Example                                            |
| :--------------- | :-------------- | :------------ | :---------- | :------------------------------------------------- |
| currentUserGroup | initialSlabName | NA            | `==`        | `currentUserGroup.initialSlabName == "Silver"`     |
| currentUserGroup | initialSlabName | NA            | `matches`   | `currentUserGroup.initialSlabName.matches("S.*r")` |
| currentUserGroup | initialSlabName | NA            | `isNull`    | `currentUserGroup.initialSlabName.isNull()`        |
| currentUserGroup | initialSlabName | NA            | `isNotNull` | `currentUserGroup.initialSlabName.isNotNull()`     |

### Examples

| Example 1 : Target groups whose previous tier was "Silver".  |
| :----------------------------------------------------------- |
| Expression: **currentUserGroup.initialSlabName == "Silver"** |

| Example 2 : Identify groups whose previous tier matches pattern "P.\*um". |
| :------------------------------------------------------------------------ |
| Expression: \*\_currentUserGroup.initialSlabName.matches("P.\_um")\*\*    |

| Example 3 : Check for groups missing previous tier information. |
| :-------------------------------------------------------------- |
| Expression: **currentUserGroup.initialSlabName.isNull()**       |

***

## **slabNumber**

**Profile:** `currentUserGroup`\
**Attribute:** `slabNumber`\
**Meaning:** Current tier number of the group (for example, 1, 2, 3).\
**Type:** Integer\
**Syntax:** `currentUserGroup.slabNumber Operator Value`

| Profile          | Attribute  | Sub-Attribute | Operator    | Example                                   |
| :--------------- | :--------- | :------------ | :---------- | :---------------------------------------- |
| currentUserGroup | slabNumber | NA            | `==`        | `currentUserGroup.slabNumber == 1`        |
| currentUserGroup | slabNumber | NA            | `>`         | `currentUserGroup.slabNumber > 2`         |
| currentUserGroup | slabNumber | NA            | `isNull`    | `currentUserGroup.slabNumber.isNull()`    |
| currentUserGroup | slabNumber | NA            | `isNotNull` | `currentUserGroup.slabNumber.isNotNull()` |

### Examples

| Example 1 : Identify groups in tier number 3.    |
| :----------------------------------------------- |
| Expression: **currentUserGroup.slabNumber == 3** |

| Example 2 : Target groups above tier number 2.  |
| :---------------------------------------------- |
| Expression: **currentUserGroup.slabNumber > 2** |

| Example 3 : Check for groups without a defined tier number. |
| :---------------------------------------------------------- |
| Expression: **currentUserGroup.slabNumber.isNull()**        |

***

## **initialSlabNumber**

**Profile:** `currentUserGroup`\
**Attribute:** `initialSlabNumber`\
**Meaning:** Tier number of the group before the current event.\
**Type:** Integer\
**Syntax:** `currentUserGroup.initialSlabNumber Operator Value`

| Profile          | Attribute         | Sub-Attribute | Operator    | Example                                          |
| :--------------- | :---------------- | :------------ | :---------- | :----------------------------------------------- |
| currentUserGroup | initialSlabNumber | NA            | `==`        | `currentUserGroup.initialSlabNumber == 2`        |
| currentUserGroup | initialSlabNumber | NA            | `>=`        | `currentUserGroup.initialSlabNumber >= 1`        |
| currentUserGroup | initialSlabNumber | NA            | `isNull`    | `currentUserGroup.initialSlabNumber.isNull()`    |
| currentUserGroup | initialSlabNumber | NA            | `isNotNull` | `currentUserGroup.initialSlabNumber.isNotNull()` |

### Examples

| Example 1 : Identify groups whose initial tier was 1.   |
| :------------------------------------------------------ |
| Expression: **currentUserGroup.initialSlabNumber == 1** |

| Example 2 : Target groups with previous tier at least 2. |
| :------------------------------------------------------- |
| Expression: **currentUserGroup.initialSlabNumber >= 2**  |

| Example 3 : Check for groups missing initial tier number.   |
| :---------------------------------------------------------- |
| Expression: **currentUserGroup.initialSlabNumber.isNull()** |

***

## **slabChangeDate**

**Profile:** `currentUserGroup`\
**Attribute:** `slabChangeDate`\
**Meaning:** Date when the group's tier last changed.\
**Type:** Date\
**Syntax:** `currentUserGroup.slabChangeDate.[Sub-Attribute](...)`

| Sub-Attribute | Definition                                                | Example                                                         |
| :------------ | :-------------------------------------------------------- | :-------------------------------------------------------------- |
| `isAfter`     | True if the change date is after specified date/time      | `currentUserGroup.slabChangeDate.isAfter(2025,1,1,0,0,0)`       |
| `isBefore`    | True if the change date is before specified date/time     | `currentUserGroup.slabChangeDate.isBefore(2025,12,31,23,59,59)` |
| `isNull`      | True if the change date is null                           | `currentUserGroup.slabChangeDate.isNull()`                      |
| `isNotNull`   | True if the change date is not null                       | `currentUserGroup.slabChangeDate.isNotNull()`                   |
| `daysDiff`    | Difference in days between change date and specified date | `currentUserGroup.slabChangeDate.daysDiff(2025,5,1)`            |

### Examples

| Example 1 : Identify groups whose tier changed after May 1, 2025. |
| :---------------------------------------------------------------- |
| Expression: **currentUserGroup.slabChangeDate.isAfter(2025,5,1)** |

| Example 2 : Target groups whose tier changed before January 1, 2025. |
| :------------------------------------------------------------------- |
| Expression: **currentUserGroup.slabChangeDate.isBefore(2025,1,1)**   |

| Example 3 : Check for groups without a recorded tier change date. |
| :---------------------------------------------------------------- |
| Expression: **currentUserGroup.slabChangeDate.isNull()**          |

***

## **slabExpiryDate**

**Profile:** `currentUserGroup`\
**Attribute:** `slabExpiryDate`\
**Meaning:** Date when the group's current tier will expire.\
**Type:** Date\
**Syntax:** `currentUserGroup.slabExpiryDate.[Sub-Attribute](...)`

| Sub-Attribute        | Definition                                               | Example                                                            |
| :------------------- | :------------------------------------------------------- | :----------------------------------------------------------------- |
| `isAfter`            | True if expiry date is after specified date/time         | `currentUserGroup.slabExpiryDate.isAfter(2025,12,31,23,59,59)`     |
| `isBefore`           | True if expiry date is before specified date/time        | `currentUserGroup.slabExpiryDate.isBefore(2025,6,30,0,0,0)`        |
| `isNull`             | True if the expiry date is null                          | `currentUserGroup.slabExpiryDate.isNull()`                         |
| `isNotNull`          | True if the expiry date is not null                      | `currentUserGroup.slabExpiryDate.isNotNull()`                      |
| `daysDiffFromString` | Difference in days between expiry date and a date string | `currentUserGroup.slabExpiryDate.daysDiffFromString("2025-01-01")` |

### Examples

|    Example 1 : Identify groups whose tier expires after June 30, 2025.   |
| :----------------------------------------------------------------------: |
| Expression: **currentUserGroup.slabExpiryDate.isAfter(2025,6,30,0,0,0)** |

|     Example 2 : Target groups whose tier expires before December 31, 2025.    |
| :---------------------------------------------------------------------------: |
| Expression: **currentUserGroup.slabExpiryDate.isBefore(2025,12,31,23,59,59)** |

| Example 3 : Check for groups missing expiry date information. |
| :-----------------------------------------------------------: |
|    Expression: **currentUserGroup.slabExpiryDate.isNull()**   |
