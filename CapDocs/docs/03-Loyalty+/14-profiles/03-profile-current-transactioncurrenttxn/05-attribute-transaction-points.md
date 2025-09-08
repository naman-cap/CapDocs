---
title: Attribute - Points
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
## **Points**

**Profile** : currentTxn\
**Attributes** : points, promisedPoints\
**Sub-Attributes**: pointsForUser, pointsForUserGroup, promisedPointsForUser, promisedPointsForUserGroup\
**Operators:** \<,>,\<=,>=\
**Syntax**: currentTxn.points.[Operators][Points]\
**Example**: currentTxn.points >= 10.\
**Meaning:** Total regular points earned for the transaction.

| Example 1: Issue coupons if the total regular redeemable points for the current transaction exceed 100. |
| :------------------------------------------------------------------------------------------------------ |
| currentTxn.points > 100                                                                                 |

| Example 2: Issue a reward if the user specifically earned at least 50 points in this transaction. |
| :------------------------------------------------------------------------------------------------ |
| currentTxn.pointsForUser >= 50                                                                    |

| Example 3: Trigger a benefit when the user’s group is allocated more than 200 points in the current transaction. |
| :--------------------------------------------------------------------------------------------------------------- |
| currentTxn.pointsForUserGroup > 200                                                                              |

| Example 4: Trigger a message if the promised (non-redeemable) points for this transaction are at least 300. |
| :---------------------------------------------------------------------------------------------------------- |
| currentTxn.promisedPoints >= 300                                                                            |

| Example 5: Trigger a message if promised points allocated specifically to the user exceeds 100. |
| :---------------------------------------------------------------------------------------------- |
| currentTxn.promisedPointsForUser > 100                                                          |

| Example 6: Trigger a message when a user’s group is promised exactly 500 points in a transaction. |
| :------------------------------------------------------------------------------------------------ |
| currentTxn.promisedPointsForUserGroup == 500                                                      |
