---
title: Attributes - Group Membership
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
# currentUserGroup - Group Membership Attributes

## memberCount expression

Use the `memberCount` expression to check the total number of members in the user group. This is useful for filtering or targeting groups by size.

### Purpose

Filter or target groups based on their member count for size-based campaigns or messaging.

### Usage

* **Profile**: `currentUserGroup()`
* **Attribute**: `memberCount`
* **Data type**: `INTEGER`

### Supported operators

You can use the following numeric operators with the memberCount attribute:

| Operator | Definition                                                            |
| :------- | :-------------------------------------------------------------------- |
| `==`     | True if member count equals the specified number                      |
| `!=`     | True if member count does not equal the specified number              |
| `>`      | True if member count is greater than the specified number             |
| `>=`     | True if member count is greater than or equal to the specified number |
| `<`      | True if member count is less than the specified number                |
| `<=`     | True if member count is less than or equal to the specified number    |

### Syntax

```js
currentUserGroup.memberCount Operator Value
```

### Examples

| Example 1: Check if the user group has exactly 10 members. |
| :--------------------------------------------------------- |
| currentUserGroup.memberCount == 10                         |

| Example 2: Check if the user group has fewer than 30 members. |
| :------------------------------------------------------------ |
| currentUserGroup.memberCount \< 30                            |

| Example 3: Check if the user group has at least 100 members. |
| :----------------------------------------------------------- |
| currentUserGroup.memberCount >= 100                          |