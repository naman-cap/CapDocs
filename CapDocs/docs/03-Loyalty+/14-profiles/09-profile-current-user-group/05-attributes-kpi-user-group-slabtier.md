---
title: Attributes - KPI (User Group Slab/Tier)
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
# currentUserGroup - Slab Information Attributes

## Attributes on Slab Information

Use string operators for name-based attributes and numeric operators for number-based attributes. For date attributes, use date-time sub-attributes.

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

## slabName

Use the `slabName` attribute to track the current loyalty tier name of the group.

### Purpose

Identify groups by their current loyalty tier name.

### Usage

* Profile: `currentUserGroup`
* Attribute: `slabName`
* Data type: String

### Syntax

```js
currentUserGroup.slabName Operator Value
```

### Examples

| Example 1: Target groups in the "Gold" tier. |
| :------------------------------------------- |
| `currentUserGroup.slabName == "Gold"`        |

| Example 2: Identify groups with tier names containing "Silv". |
| :------------------------------------------------------------ |
| `currentUserGroup.slabName.contains("Silv")`                  |

| Example 3: Check for groups without a defined tier name. |
| :------------------------------------------------------- |
| `currentUserGroup.slabName.isNull()`                     |

***

## initialSlabName

Use the `initialSlabName` attribute to check the loyalty tier name of the group before the current event.

### Purpose

Track the previous loyalty tier name of the group.

### Usage

* Profile: `currentUserGroup`
* Attribute: `initialSlabName`
* Data type: String

### Syntax

```js
currentUserGroup.initialSlabName Operator Value
```

### Examples

| Example 1: Target groups whose previous tier was "Silver". |
| :--------------------------------------------------------- |
| `currentUserGroup.initialSlabName == "Silver"`             |

| Example 2: Identify groups whose previous tier matches pattern "P.\*um". |
| :----------------------------------------------------------------------- |
| `currentUserGroup.initialSlabName.matches("P.*um")`                      |

| Example 3: Check for groups missing previous tier information. |
| :------------------------------------------------------------- |
| `currentUserGroup.initialSlabName.isNull()`                    |

***

## slabNumber

Use the `slabNumber` attribute to track the current tier number of the group.

### Purpose

Identify groups by their current tier number.

### Usage

* Profile: `currentUserGroup`
* Attribute: `slabNumber`
* Data type: Integer

### Syntax

```js
currentUserGroup.slabNumber Operator Value
```

### Examples

| Example 1: Identify groups in tier number 3. |
| :------------------------------------------- |
| `currentUserGroup.slabNumber == 3`           |

| Example 2: Target groups above tier number 2. |
| :-------------------------------------------- |
| `currentUserGroup.slabNumber > 2`             |

| Example 3: Check for groups without a defined tier number. |
| :--------------------------------------------------------- |
| `currentUserGroup.slabNumber.isNull()`                     |

***

## initialSlabNumber

Use the `initialSlabNumber` attribute to check the tier number of the group before the current event.

### Purpose

Track the previous tier number of the group.

### Usage

* Profile: `currentUserGroup`
* Attribute: `initialSlabNumber`
* Data type: Integer

### Syntax

```js
currentUserGroup.initialSlabNumber Operator Value
```

### Examples

| Example 1: Identify groups whose initial tier was 1. |
| :--------------------------------------------------- |
| `currentUserGroup.initialSlabNumber == 1`            |

| Example 2: Target groups with previous tier at least 2. |
| :------------------------------------------------------ |
| `currentUserGroup.initialSlabNumber >= 2`               |

| Example 3: Check for groups missing initial tier number. |
| :------------------------------------------------------- |
| `currentUserGroup.initialSlabNumber.isNull()`            |

***

## slabChangeDate

Use the `slabChangeDate` attribute to track the date when the group's tier last changed.

### Purpose

Identify groups based on their most recent tier change date.

### Usage

* Profile: `currentUserGroup`
* Attribute: `slabChangeDate`
* Data type: Date

### Syntax

```js
currentUserGroup.slabChangeDate.[Sub-Attribute](...)
```

### Examples

| Example 1: Identify groups whose tier changed after May 1, 2025. |
| :--------------------------------------------------------------- |
| `currentUserGroup.slabChangeDate.isAfter(2025,5,1)`              |

| Example 2: Target groups whose tier changed before January 1, 2025. |
| :------------------------------------------------------------------ |
| `currentUserGroup.slabChangeDate.isBefore(2025,1,1)`                |

| Example 3: Check for groups without a recorded tier change date. |
| :--------------------------------------------------------------- |
| `currentUserGroup.slabChangeDate.isNull()`                       |

***

## slabExpiryDate

Use the `slabExpiryDate` attribute to track when the group's current tier expires.

### Purpose

Identify groups by their tier expiry date.

### Usage

* Profile: `currentUserGroup`
* Attribute: `slabExpiryDate`
* Data type: Date

### Syntax

```js
currentUserGroup.slabExpiryDate.[Sub-Attribute](...)
```

### Examples

| Example 1: Identify groups whose tier expires after June 30, 2025. |
| :----------------------------------------------------------------- |
| `currentUserGroup.slabExpiryDate.isAfter(2025,6,30,0,0,0)`         |

| Example 2: Target groups whose tier expires before December 31, 2025. |
| :-------------------------------------------------------------------- |
| `currentUserGroup.slabExpiryDate.isBefore(2025,12,31,23,59,59)`       |

| Example 3: Check for groups missing expiry date information. |
| :----------------------------------------------------------- |
| `currentUserGroup.slabExpiryDate.isNull()`                   |