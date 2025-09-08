---
title: Attributes - KPIs (User Group Points)
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
## Attributes on Points

Use these operators to compare the `BigDecimal` point values. Operators follow the attribute using dot notation, for example: `currentUserGroup.currentPoints > 1000`.

| Operator    | Definition                                                      |
| :---------- | :-------------------------------------------------------------- |
| `==`        | True if points equal the specified value                        |
| `!=`        | True if points do not equal the specified value                 |
| `>`         | True if points are greater than the specified value             |
| `>=`        | True if points are greater than or equal to the specified value |
| `<`         | True if points are less than the specified value                |
| `<=`        | True if points are less than or equal to the specified value    |
| `isNull`    | True if the value is null                                       |
| `isNotNull` | True if the value is not null                                   |

***

## currentPoints

Use the `currentPoints` attribute to check the group's current redeemable points.

### Purpose

Check the group's available redeemable points.

### Usage

* Profile: `currentUserGroup`
* Attribute: `currentPoints`
* Data type: BigDecimal

### Syntax

```js
currentUserGroup.currentPoints Operator Value
```

### Examples

| Example 1: Target groups with more than 5000 redeemable points. |
| :-------------------------------------------------------------- |
| `currentUserGroup.currentPoints > 5000`                         |

| Example 2: Identify groups with exactly 1000 redeemable points. |
| :-------------------------------------------------------------- |
| `currentUserGroup.currentPoints == 1000`                        |

| Example 3: Check for groups without any redeemable points. |
| :--------------------------------------------------------- |
| `currentUserGroup.currentPoints.isNull()`                  |

***

## initialCurrentPoints

Use the `initialCurrentPoints` attribute to check the group's redeemable points before the current event.

### Purpose

Track pre-event redeemable points.

### Usage

* Profile: `currentUserGroup`
* Attribute: `initialCurrentPoints`
* Data type: BigDecimal

### Syntax

```js
currentUserGroup.initialCurrentPoints Operator Value
```

### Examples

| Example 1: Find groups with pre-event points below 500. |
| :------------------------------------------------------ |
| `currentUserGroup.initialCurrentPoints < 500`           |

| Example 2: Identify groups with pre-event points equal to 750. |
| :------------------------------------------------------------- |
| `currentUserGroup.initialCurrentPoints == 750`                 |

| Example 3: Check for groups missing pre-event points data. |
| :--------------------------------------------------------- |
| `currentUserGroup.initialCurrentPoints.isNull()`           |

***

## currentAllPoints

Use the `currentAllPoints` attribute to check the total redeemable and promised points currently held by the group.

### Purpose

Check the group's combined points.

### Usage

* Profile: `currentUserGroup`
* Attribute: `currentAllPoints`
* Data type: BigDecimal

### Syntax

```js
currentUserGroup.currentAllPoints Operator Value
```

### Examples

| Example 1: Target groups with total points at most 500. |
| :------------------------------------------------------ |
| `currentUserGroup.currentAllPoints <= 500`              |

| Example 2: Identify groups whose combined points exceed 2500. |
| :------------------------------------------------------------ |
| `currentUserGroup.currentAllPoints > 2500`                    |

| Example 3: Check for groups with no total points data. |
| :----------------------------------------------------- |
| `currentUserGroup.currentAllPoints.isNull()`           |

***

## initialCurrentAllPoints

Use the `initialCurrentAllPoints` attribute to check the sum of redeemable and promised points before the current event.

### Purpose

Track pre-event combined points.

### Usage

* Profile: `currentUserGroup`
* Attribute: `initialCurrentAllPoints`
* Data type: BigDecimal

### Syntax

```js
currentUserGroup.initialCurrentAllPoints Operator Value
```

### Examples

| Example 1: Check groups with pre-event total points equal to 800. |
| :---------------------------------------------------------------- |
| `currentUserGroup.initialCurrentAllPoints == 800`                 |

| Example 2: Identify groups whose pre-event combined points are below 200. |
| :------------------------------------------------------------------------ |
| `currentUserGroup.initialCurrentAllPoints < 200`                          |

| Example 3: Find groups missing pre-event total points data. |
| :---------------------------------------------------------- |
| `currentUserGroup.initialCurrentAllPoints.isNull()`         |

***

## currentNonRedeemablePoints

Use the `currentNonRedeemablePoints` attribute to check the non-redeemable points currently held by the group.

### Purpose

Check the group's non-redeemable points.

### Usage

* Profile: `currentUserGroup`
* Attribute: `currentNonRedeemablePoints`
* Data type: BigDecimal

### Syntax

```js
currentUserGroup.currentNonRedeemablePoints Operator Value
```

### Examples

| Example 1: Target groups with at least 50 non-redeemable points. |
| :--------------------------------------------------------------- |
| `currentUserGroup.currentNonRedeemablePoints >= 50`              |

| Example 2: Identify groups with fewer than 20 non-redeemable points. |
| :------------------------------------------------------------------- |
| `currentUserGroup.currentNonRedeemablePoints < 20`                   |

| Example 3: Check for groups missing non-redeemable points data. |
| :-------------------------------------------------------------- |
| `currentUserGroup.currentNonRedeemablePoints.isNull()`          |

***

## lifetimePoints

Use the `lifetimePoints` attribute to check the total redeemable points earned by the group since creation.

### Purpose

Track lifetime redeemable points.

### Usage

* Profile: `currentUserGroup`
* Attribute: `lifetimePoints`
* Data type: BigDecimal

### Syntax

```js
currentUserGroup.lifetimePoints Operator Value
```

### Examples

| Example 1: Filter groups with more than 500 lifetime points. |
| :----------------------------------------------------------- |
| `currentUserGroup.lifetimePoints > 500`                      |

| Example 2: Target groups with lifetime points of exactly 200. |
| :------------------------------------------------------------ |
| `currentUserGroup.lifetimePoints == 200`                      |

| Example 3: Check for groups missing lifetime points data. |
| :-------------------------------------------------------- |
| `currentUserGroup.lifetimePoints.isNull()`                |

***

## lifetimeAllPoints

Use the `lifetimeAllPoints` attribute to check the sum of lifetime redeemable and non-redeemable points.

### Purpose

Track total lifetime points.

### Usage

* Profile: `currentUserGroup`
* Attribute: `lifetimeAllPoints`
* Data type: BigDecimal

### Syntax

```js
currentUserGroup.lifetimeAllPoints Operator Value
```

### Examples

| Example 1: Identify groups with total lifetime points at least 1000. |
| :------------------------------------------------------------------- |
| `currentUserGroup.lifetimeAllPoints >= 1000`                         |

| Example 2: Target groups whose total lifetime points are under 300. |
| :------------------------------------------------------------------ |
| `currentUserGroup.lifetimeAllPoints < 300`                          |

| Example 3: Check for groups missing lifetime all points data. |
| :------------------------------------------------------------ |
| `currentUserGroup.lifetimeAllPoints.isNull()`                 |

***

## lifetimeNonRedeemablePoints

Use the `lifetimeNonRedeemablePoints` attribute to check the total non-redeemable points earned by the group since creation.

### Purpose

Track lifetime non-redeemable points.

### Usage

* Profile: `currentUserGroup`
* Attribute: `lifetimeNonRedeemablePoints`
* Data type: BigDecimal

### Syntax

```js
currentUserGroup.lifetimeNonRedeemablePoints Operator Value
```

### Examples

| Example 1: Filter groups with more than 100 lifetime non-redeemable points. |
| :-------------------------------------------------------------------------- |
| `currentUserGroup.lifetimeNonRedeemablePoints > 100`                        |

| Example 2: Identify groups with exactly 50 non-redeemable lifetime points. |
| :------------------------------------------------------------------------- |
| `currentUserGroup.lifetimeNonRedeemablePoints == 50`                       |

| Example 3: Check for groups lacking lifetime non-redeemable points data. |
| :----------------------------------------------------------------------- |
| `currentUserGroup.lifetimeNonRedeemablePoints.isNull()`                  |

***

## initialLifetimePoints

Use the `initialLifetimePoints` attribute to check the group's lifetime redeemable points before the current event.

### Purpose

Track pre-event lifetime redeemable points.

### Usage

* Profile: `currentUserGroup`
* Attribute: `initialLifetimePoints`
* Data type: BigDecimal

### Syntax

```js
currentUserGroup.initialLifetimePoints Operator Value
```

### Examples

| Example 1: Target groups with pre-event lifetime points below 400. |
| :----------------------------------------------------------------- |
| `currentUserGroup.initialLifetimePoints < 400`                     |

| Example 2: Identify groups whose pre-event lifetime points equal 600. |
| :-------------------------------------------------------------------- |
| `currentUserGroup.initialLifetimePoints == 600`                       |

| Example 3: Check for groups missing initial lifetime points data. |
| :---------------------------------------------------------------- |
| `currentUserGroup.initialLifetimePoints.isNull()`                 |