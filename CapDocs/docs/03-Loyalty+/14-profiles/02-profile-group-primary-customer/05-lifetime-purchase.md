---
title: Attributes - Based on Purchase.
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
# Profile - groupPrimaryCustomer()

1. **Profile : groupPrimaryCustomer()**\
   Allows you to write conditions based on the properties of the group primary customer who is currently performing the activity, example SLAB/Tier related Informations.

2. **Operators** : Operatorscan be applied on Data type int/Big decimal Attributes:

   Equals to (=)\
   Unequals to (!=)\
   Greater than (>)\
   Greater than or equal to (>=)\
   Less than (\<)\
   Less than or equal to (\<=)\
   AND (&&)\
   OR(||)

***

## **lifetimePurchase**

Data Type: BigDecimal\
Description: The purchase made by  Primary customer of the group since start or from the day of first transaction including current transaction's purchase.\
Formula : lifetime purchase = \[ sum of all purchase - sum of refund amount ]\
Syntax: groupPrimaryCustomer.lifetimePurchase[Operators like \<,>,>=,\<=,=][VALUE]

| Example1. Write a rule for Primary customer of a group to check if LifetimePurchase is greater than 1000. |
| :-------------------------------------------------------------------------------------------------------- |
| groupPrimaryCustomer.lifetimePurchase>1000                                                                |

| Example 2: check if LifetimePurchase is less than or equal to 1000. |
| :------------------------------------------------------------------ |
| groupPrimaryCustomer.lifetimePurchase\<=1000                        |

| Example3: write a rule to check if LifetimePurchase is between 1500 to 3000 and the customer did transaction only once till now.     |
| :----------------------------------------------------------------------------------------------------------------------------------- |
| (groupPrimaryCustomer.lifetimePurchase>1500&&(groupPrimaryCustomer.lifetimePurchase\<3000)&&(groupPrimaryCustomer.numberOfVisits==1) |

***

## **InitialLifetimePurchase**

Data Type: BigDecimal\
Description: Primary customer's purchase before current transaction's purchase.\
Formula: Initial lifetime purchase = \[ sum of all purchases - sum of refund amount ] before evaluating the current transaction.\
Syntax: groupPrimaryCustomer.initialLifetimePurchase[Operators like \<,>,>=,\<=,=][VALUE]

| Example 1: write a rule to check if initialLifetimePurchase is greater than 3000 and the Primary customer of the group did the transaction only twice. |
| :----------------------------------------------------------------------------------------------------------------------------------------------------- |
| (groupPrimaryCustomer.lifetimePurchase\<3000)&&(groupPrimaryCustomer.numberOfVisits==2)                                                                |
