---
title: Attributes - discount & discPercentage
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
## **discount**

**Profile:** CurrentLineItem (Current Line Item)\
**Attribute:** discount\
**Data Type:** Integer/Big Decimal\
**Sub-Attribute:** NA\
**Operator:** \<,>,\<=,>=,==\
**Description:** Discount at line-item level, Absolute Value of the discount.\
**Syntax: currentLineItem.discount[Operators][VALUE]**\
   Example: currentLineItem.discount != 0

| Example: Write an expression to check if the current Line Item level discoun value is greater than 300. |
| :------------------------------------------------------------------------------------------------------ |
| Rule: currentLineItem.discount > 300                                                                    |

***

## **discPercentage (Line Item Level Discount Percentage)**

**Profile:** CurrentLineItem (Current Line Item)\
**Attribute**: discPercentage\
**Data Type:** integer\
**Sub-Attribute**: NA\
**Operators** -> =,\<=,>=,>,\<\
**Description:** lineitem discount % = (discount/amount \* 100)\
Discount value needs to be passed in api request payloadThe description specified for the line-item in the inventory, passed in the payloads.\
**Syntax: currentLineItem.discountPercentage[OPERATORS][VALUE]**

| Example: Write a condition to check if the line Item discount is greater than 15. |
| :-------------------------------------------------------------------------------- |
| Rule: currentLineitem.discPercentage>15                                           |

***
