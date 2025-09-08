---
title: (Waiting for release) Attributes - KPIs (User Group Transactions)
deprecated: false
hidden: true
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
Ticket number: [CAP-145241](https://capillarytech.atlassian.net/browse/CAP-145241)

## Attributes on Transaction Data

Use these operators to compare the integer or `BigDecimal` values associated with transaction metrics. Operators follow the attribute using dot notation, for example: `currentUserGroup.numberOfTxns >= 10`.

| Operator    | Definition                                                    |
| :---------- | :------------------------------------------------------------ |
| `==`        | True if value equals the specified value                      |
| `!=`        | True if value does not equal the specified value              |
| `>`         | True if value is greater than the specified value             |
| `>=`        | True if value is greater than or equal to the specified value |
| `<`         | True if value is less than the specified value                |
| `<=`        | True if value is less than or equal to the specified value    |
| `isNull`    | True if the attribute value is null                           |
| `isNotNull` | True if the attribute value is not null                       |

## numberOfTxns

Use the `numberOfTxns` attribute to check the total number of transactions made by the group since creation.

### Purpose

Track the group's transaction count.

### Usage

* Profile: `currentUserGroup`
* Attribute: `numberOfTxns`
* Data type: Integer

### Syntax

```js
currentUserGroup.numberOfTxns Operator Value
```

### Examples

| Example 1: Identify groups with at least 10 transactions. |
| :-------------------------------------------------------- |
| `currentUserGroup.numberOfTxns >= 10`                     |

| Example 2: Target groups with exactly 1 transaction. |
| :--------------------------------------------------- |
| `currentUserGroup.numberOfTxns == 1`                 |

| Example 3: Check for groups missing transaction data. |
| :---------------------------------------------------- |
| `currentUserGroup.numberOfTxns.isNull()`              |

***

## numberOfTxnsToday

Use the `numberOfTxnsToday` attribute to check the number of transactions made by the group on the current day.

### Purpose

Track the group's transactions for the current day.

### Usage

* Profile: `currentUserGroup`
* Attribute: `numberOfTxnsToday`
* Data type: Integer

### Syntax

```js
currentUserGroup.numberOfTxnsToday Operator Value
```

### Examples

| Example 1: Target groups with at least one transaction today. |
| :------------------------------------------------------------ |
| `currentUserGroup.numberOfTxnsToday >= 1`                     |

| Example 2: Identify groups with no transactions today. |
| :----------------------------------------------------- |
| `currentUserGroup.numberOfTxnsToday == 0`              |

| Example 3: Check for groups missing today's transaction data. |
| :------------------------------------------------------------ |
| `currentUserGroup.numberOfTxnsToday.isNull()`                 |

***

## numberOfVisits

Use the `numberOfVisits` attribute to check the number of unique days on which the group made transactions.

### Purpose

Track the group's active visit days.

### Usage

* Profile: `currentUserGroup`
* Attribute: `numberOfVisits`
* Data type: Integer

### Syntax

```js
currentUserGroup.numberOfVisits Operator Value
```

### Examples

| Example 1: Identify groups active on at least 5 distinct days. |
| :------------------------------------------------------------- |
| `currentUserGroup.numberOfVisits >= 5`                         |

| Example 2: Target groups with exactly 10 visit days. |
| :--------------------------------------------------- |
| `currentUserGroup.numberOfVisits == 10`              |

| Example 3: Check for groups missing visit data. |
| :---------------------------------------------- |
| `currentUserGroup.numberOfVisits.isNull()`      |

***

## lifetimePurchase

Use the `lifetimePurchase` attribute to check the total value of purchases made by the group since creation.

### Purpose

Track lifetime purchase value.

### Usage

* Profile: `currentUserGroup`
* Attribute: `lifetimePurchase`
* Data type: BigDecimal

### Syntax

```js
currentUserGroup.lifetimePurchase Operator Value
```

### Examples

| Example 1: Identify groups with lifetime purchase exceeding 5000. |
| :---------------------------------------------------------------- |
| `currentUserGroup.lifetimePurchase > 5000`                        |

| Example 2: Target groups with lifetime purchase exactly equal to 1000. |
| :--------------------------------------------------------------------- |
| `currentUserGroup.lifetimePurchase == 1000`                            |

| Example 3: Check for groups missing lifetime purchase data. |
| :---------------------------------------------------------- |
| `currentUserGroup.lifetimePurchase.isNull()`                |

***

## initialLifetimePurchase

Use the `initialLifetimePurchase` attribute to check the total value of purchases made by the group before the current transaction.

### Purpose

Track pre-transaction lifetime purchase value.

### Usage

* Profile: `currentUserGroup`
* Attribute: `initialLifetimePurchase`
* Data type: BigDecimal

### Syntax

```js
currentUserGroup.initialLifetimePurchase Operator Value
```

### Examples

| Example 1: Identify groups with pre-transaction lifetime purchase above 2000. |
| :---------------------------------------------------------------------------- |
| `currentUserGroup.initialLifetimePurchase > 2000`                             |

| Example 2: Target groups with pre-transaction lifetime purchase exactly 1500. |
| :---------------------------------------------------------------------------- |
| `currentUserGroup.initialLifetimePurchase == 1500`                            |

| Example 3: Check for groups missing initial lifetime purchase data. |
| :------------------------------------------------------------------ |
| `currentUserGroup.initialLifetimePurchase.isNull()`                 |