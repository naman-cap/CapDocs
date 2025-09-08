---
title: Attributes - Line Item Properties
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
## **Qty**

**Profile:** CurrentLineItem (Current Line Item)\
**Attribute:** Qty\
**Data Type:** integer\
**Sub-Attribute:** NA\
**Operator:** \<,>,\<=,>=,==\
**Description:** check the Qty of a line item and return true or false if it matches with the condition.\
**Syntax: currentLineItem.qty[Operators][VALUE]**\
    Example: currentLineItemqty > 2

| Example: Write a condition where the current Line Item qty is greater than or equal to 5. |
| :---------------------------------------------------------------------------------------- |
| Rule: currentLineItem.qty >= 5                                                            |

***

## **Value**

**Profile:** CurrentLineItem (Current Line Item)\
**Attribute:** Value\
**Data Type:** BigDecimal\
**Sub-Attribute:** NA\
**Numerical Operator :** \<,>,>=,\<=,==\
**Syntax: currentLineItem.value[Operator][Value]**\
Example : currentLineItem.value > 1000

| Example: Write a rule to check that the line Item Value is between 2000 to 3000. |
| :------------------------------------------------------------------------------- |
| Rule: currentLineItem.value >2000&&(currentLineItem.value\<3000)                 |
