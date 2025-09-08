---
title: Attribute - Discount
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
## **Discount**

**Profile** : currentTxn\
**Attribute** : discount\*\
**Sub-Attribute**: NA\
**Operators:** \<,>,\<=,>=\
**Syntax**: currentTxn.discount.[Operators][Value]\
**Example**: currentTxn.discount >= 10.\
**Meaning:** discounted value on the transaction

| Example: Write a rule to check that the discount value on a transaction is greater than 0 AND current customer is from a user segment "3xPoints28thDec". |
| :------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Rule: currentTxn.discount>0&&(currentCustomer.clusterValueIncludes("3xPoints28thDec","3x"))                                                              |

| Example: Write a rule to check that the discount value on a transaction is greater than 0. |
| :----------------------------------------------------------------------------------------- |
| Rule: currentTxn.discount>0                                                                |

| Example: Write an expression to check if the total transaction value is greater than 5000 and discount value is less than 500. |
| :----------------------------------------------------------------------------------------------------------------------------- |
| Rule: (currentTxn.value>5000&& (currentTxn.discount \<500))                                                                    |
