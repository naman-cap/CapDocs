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
**Current Customer Profile, Attributes based on Purchase.**                                                  

1. **Profile : currentCustomer**\
   Allows you to write conditions based on the properties of the customer who is currently performing the activity, example SLAB/Tier related Informations.

2. **Operators** : Operatorscan be applied on Data type int/Big decimal Attributes:

   Equals to (=)\
   Unequals to (!=)\
   Greater than (>)\
   Greater than or equal to (>=)\
   Less than (\<)\
   Less than or equal to (\<=)\
   AND (&&)\
   OR(||)

## **lifetimePurchase**

**Data Type:** BigDecimal\
**Description:** customer's purchase since start including current transaction's purchase\
**Formula : lifetime purchase =\[ sum of all purchase - sum of refund amount ]**\
**Syntax: currentCustomer.lifetimePurchase[Operators like \<,>,>=,\<=,=][VALUE]**

| Example1. Write a rule for current customers to check if LifetimePurchase is greater than 1000. |
| :---------------------------------------------------------------------------------------------- |
| currentCustomer.lifetimePurchase>1000                                                           |

| Example 2: check if LifetimePurchase is less than or equal to 1000. |
| :------------------------------------------------------------------ |
| currentCustomer.lifetimePurchase\<=1000                             |

| Example3: write a rule to check if LifetimePurchase is between 1500 to 3000 and the customer did transaction only once till now. |
| :------------------------------------------------------------------------------------------------------------------------------- |
| (currentCustomer.lifetimePurchase>1500&¤tCustomer.lifetimePurchase\<3000)&&(currentCustomer.numberOfVisits==1)                   |

<Table align={["left"]}>
  <thead>
    <tr>
      <th>
        Example 4: write an expression for current customer to check if current slab number is less than 2 and lifetimePurchase is between 5000 to 15000.
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Rule: Profile: currentCustomer
                  Attribute to check Slab number: slabNumber
                  Attribute to check lifetime Purchase: lifetimePurchase
                  And -> &&
                  Less than (>)
        Expression: **((currentCustomer.slabNumber\<2)&&((currentCustomer.lifetimePurchase > 5000)&&(currentCustomer.lifetimePurchase \<= 15000))**
      </td>
    </tr>
  </tbody>
</Table>

***

## **InitialLifetimePurchase**

**Data Type:** BigDecimal\
**Description:** customer's purchase since start before current transaction's purchase\
**Formula :I**nitial lifetime purchase = \[ sum of all purchase - sum of refund amount ] before evaluating the current transaction.\
**Syntax: currentCustomer.initialLifetimePurchase[Operators like \<,>,>=,\<=,=][VALUE]**

| Example3: write a rule to check if initialLifetimePurchase is greater than 3000 and the customer did transaction only twice. |
| :--------------------------------------------------------------------------------------------------------------------------- |
| (currentCustomer.lifetimePurchase\<3000)&&(currentCustomer.numberOfVisits==2)                                                |
