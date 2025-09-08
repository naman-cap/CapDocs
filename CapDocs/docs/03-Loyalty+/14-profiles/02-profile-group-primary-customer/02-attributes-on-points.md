---
title: Attributes - Group Primary Customer Points.
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
1. ### All the Attributes related to Points are as follow:

| Attribute                   | Data Type  |
| :-------------------------- | :--------- |
| currentPoints               | BigDecimal |
| initialCurrentPoints        | BigDecimal |
| currentAllPoints            | BigDecimal |
| initialCurrentAllPoints     | BigDecimal |
| lifetimePoints              | BigDecimal |
| lifetimeAllPoints           | BigDecimal |
| initialLifetimePoints       | BigDecimal |
| currentNonRedeemablePoints  | BigDecimal |
| lifetimeNonRedeemablePoints | BigDecimal |

3. ### **Numerical Operators**:
   The basic range of supported operations on numbers allow us to resolve the number to a boolean outcome through comparison with another value, and these include:\
   equal to (=)\
   not equal to (!=)\
   greater than (>)\
   greater than or equal to (>=)\
   lesser than (\<)\
   lesser than or equal to (\<=)

4. ### Operations :
   \*\*Outside of these, users can also perform mathematical operations to transform the value of the numerical attribute, the supported operations for transformation are:\
   Addition (+)\
   Subtraction (-)\
   Multiplication (\*)\
   Division (/)\
   Mod operation - this provides the remainder after division (%)

5. ### **How to write an Expression on Customer Attribute related to “Points:**
   A general Expression consists of 5 major   components:  Profile, Attributes, Sub Attributes(If any), Operators and Values.\
   ***Format: groupPrimaryCustomer.[(Attribute).(Sub Attribute)].[ Operators][VALUE]***

***

## **Attribute :currentPoints**

Profile : groupPrimaryCustomer\
Attribute : currentPoints\
Meaning : Lets you evaluate conditions on the active points of the primary customer.\
Type: Boolean\
Sub-Attributes : NA\
Operator : Values like isNull, isNotNull, Interval, >,\<,=,>=,\<=\
Syntax : groupPrimaryCustomer.currentPoints Operators like >,\<,>=,\<=,==[VALUE]\
current points = overall earned points - overall returned points - overall redeemed points - overall expired points.

<Table align={["left"]}>
  <thead>
    <tr>
      <th>
        Example 1:  As a Marketing Manager, you want to send communications regarding expiry conditions to the Primary Customer of the group, who has current Points greater than and equal to 1000 but less than 5000.
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Profile -> groupPrimaryCustomer
        Attributes -> currentPoints
        And -> &&
        Expression: groupPrimaryCustomer.currentPoints>=1000&&(groupPrimaryCustomer.currentPoints\<5000)
      </td>
    </tr>
  </tbody>
</Table>

<Table align={["left"]}>
  <thead>
    <tr>
      <th>
        Example 3: Write an expression to Issue a Coupon to the Primary customers whose




        Condition 1: current Transaction value is greater than 500




        Condition 2: Current Points is greater than 400




        Also, Condition 1 AND condition 2




        AND -> &&
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Expression: currentTxn.value>500&&(groupProfileCustomer.currentPoints>400)
      </td>
    </tr>
  </tbody>
</Table>

***

## **Attribute: initialCurrentPoints**

Profile: groupPrimaryCustomer\
Attribute: initialCurrentPoints\
Meaning: Primary customer of a group, current redeemable points before the current event or Active points of a customer before evaluating the event.\
Data Type: BigDecimal\
Sub-Attribute: NA\
Syntax: groupPrimaryCustomer.initialCurrentPoints Operators like >,\<,>=,\<=,==[VALUE]\
initial current points = overall earned points (before evaluating an event) - overall returned points(before evaluating an event) - overall redeemed points(before evaluating an event) - overall expired points(before evaluating an event)

| Example 1: Write an expression to check the difference in current points and initialCurrentPoints of a Primary customer of a group is greater than 120 |
| :----------------------------------------------------------------------------------------------------------------------------------------------------- |
| Expression: ((groupPrimaryCustomer.currentPoints)-(groupPrimaryCustomer.initialCurrentPoints))>120                                                     |

| Example 2: Write an expression to check if customers lifetime points are equal to initial current points and number of transactions is equal to 1. |
| :------------------------------------------------------------------------------------------------------------------------------------------------- |
| Expression: (groupPrimaryCustomer.LifetimePoints==groupPrimaryCustomer.initialCurrentPoints)&&(groupPrimaryCustomer.numberOfTxns==1)               |

***

## **currentAllPoints**

Profile: groupPrimaryCustomer\
Attribute: currentAllPoints\
Data Type -> BigDecimal\
Meaning -> Sum of all Points, redeemable as well as Promised Points.\
currentAllPoints: customer's current redeemable points + customer's current promised points\
Sub-Attribute: NA\
Syntax: groupPrimaryCustomer.currentAllPoints Operators like >,\<,>=,\<=,==[VALUE]

| Example: Write an expression to check if the Primary Customer of a group, points earned till now irrespective of redeemable or promised points are less than 500. |
| :---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Expression: groupPrimaryCustomer.currentAllPoints\<500                                                                                                            |

***

## **LifetimePoints**

Profile: groupPrimaryCustomer\
Attribute: lifetimePoints\
Data type: BigDecimal\
Meaning: Total points earned by a Primary customer of a group from the date of registration.\
lifetime points = overall redeemable points earned - overall returned points.\
Sub-Attribute: NA\
Syntax: groupPrimaryCustomer.lifetimePoints[Operators like >,\<,>=,\<=,==][VALUE]

| Example1: Write an expression for a Primary Customer of a group, if LifetimePoints are greater than 500 and the current Txn bill includes Shirt. |
| :----------------------------------------------------------------------------------------------------------------------------------------------- |
| groupPrimaryCustomer.lifetimePoints>500&&(currentTxn.basketIncludes("Product","Shirt"))                                                          |

| Example2 : Write an expression for a Primary Customer of a group if LifetimePoints are less than 1000 |
| :---------------------------------------------------------------------------------------------------- |
| groupPrimaryCustomer.lifetimePoints\<1000                                                             |

***

## **lifetimeNonRedeemablePoints**

Profile: groupPrimaryCustomer\
Attribute: lifetimeNonRedeemablePoint\
Data Type: BigDecimal\
Sub-Attributes: NA\
Syntax: groupPrimaryCustomer.LifetimeNonRedeemablePoints Operators like >,\<,>=,\<=,==[VALUE]\
lifetime non-redeemable points = overall non-redeemable points earned - overall non-redeemable returned points.

| Example: Write an expression to check if a primary customer of a group, lifetimeNonRedeemablePoints are equal to the initial current points and the number of transactions is equal to 1. |
| :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Expression: groupPrimaryCustomer.LifetimeNonRedeemablePoints==groupPrimaryCustomer.initialCurrentPoints&&(groupPrimaryCustomer.numberOfTxns==1)                                           |

<Table align={["left"]}>
  <thead>
    <tr>
      <th>
        Example: Write an expression to Issue a Coupon to the customers whose




        Condition1: current Transaction value is greater than 500




        Condition 2: Current Transaction Basket Includes the item from category field, value lifestyle




        Condition 3: lifetime Non Redeemable Points




        Also Condition 1 AND condition 2 OR Condition 3
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Expression:(currentTxn.value>500&&(currentTxn.basketIncludes(“Category”,”Lifestyle”))||groupPrimaryCustomerLifetimeNonRedeemablePoints>400
      </td>
    </tr>
  </tbody>
</Table>

***

## **intialLifetimePoints**

intiallifetimePoints\
Profile: groupPrimaryCustomer\
Attribute : initiallifetimePoints\
Data Type -> BigDecimal\
Meaning -> Primary customer of a groups lifetime redeemable points before the current event.\
Syntax : groupPrimaryCustomer.initiallifetimePoints Operators like >,\<,>=,\<=,==[VALUE]

initialLifetimePoints = customer lifetime earned redeemable points - returned points since start(before evaluating an event)

| Example: write to rule to return false if the primary customer initialLifetimePoints are greater than 500. |
| :--------------------------------------------------------------------------------------------------------- |
| Rule: groupPrimaryCustomer.initialLifetimePoints>500                                                       |
