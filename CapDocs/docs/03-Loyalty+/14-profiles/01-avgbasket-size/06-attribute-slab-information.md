---
title: Attributes - Slab Information
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
## **What is a slab/Tier ?**

Customer incentive programs that reward various groups (or slabs) of consumers differently are known as tiered loyalty programs. It typically takes the shape of a hierarchy, with each tier providing progressively more advantages (or more valuable benefits).

Example: Here customers are divided into various slabs/tiers based on loyalty events or purchases made by them and the slabs are called Member, silver, Gold anthe d Platinum. The rewards in terms of points increase with the increase in Slab of the customer.

![9d1e8f4 image](https://files.readme.io/9d1e8f4-image.png)

## **String and numerical Operators**

The basic range of string operations serve to resolve the string attribute into a boolean outcome. These operators are inserted after the string attribute using the . notation e.g. currentCustomer.email.contains(".com")\
string operators mainly used for slabName\
**Contains** - used to see if the string contains the defined value\
**Matches** - this is used to perform regular expression based matching on the string\
**isNull** - checks if the string is Null i.e. it was not passed from source\
**isNotNull** - checks if the the string is NOT Null i.e. some value was passed from source (even an empty string counts).

 **Numerical Operators mainly used for slabNumber.**

Equals to (=)\
Unequals to (!=)\
Greater than (>)\
Greater than or equal to (>=)\
Less than (\<)\
Less than or equal to (\<=)\
AND (&&)\
OR(||)

## **Attributes based on SLAB information.**

| Attribute       | Sub-Attribute | operator                                 | Example                                    |
| :-------------- | :------------ | :--------------------------------------- | :----------------------------------------- |
| slabName        | NA            | contains, matches, ==, isNull, isNotNull | currentCustomer.slabName=="Gold"           |
| initialSlabName | NA            | contains, matches, ==, isNull, isNotNull | currentCustomer.initialSlabName == "First" |

## **slabName**

**Data Type :** String\
**Description :** customer’s current tier name.\
**Syntax: currentCustomer.slabName[operators][Value]**

<Table align={["left"]}>
  <thead>
    <tr>
      <th>
        Example1: As a brand, we have a tired based loyalty program where the tiers are silver, gold & Platinum. We have separate points allocation strategies for tiers respectively, thus write a condition to allocate points for a customer in Gold Tier.
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Profile -> currentCustomer
        slabName -> GOLD
        Rule expression -> currentCustomer.slabName==“Gold”
      </td>
    </tr>
  </tbody>
</Table>

| Example 2: Write a condition to check if a current Customer Slab is Shine, and currentCustomer points are greater than 1000, If the condition is TRUE. Allocate 500 points and upgrade the tier. |
| :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Rule : currentCustomer.slabName=="Shine"&&(currentCustomer.currentPoints>1000)                                                                                                                   |

***

## **slabNumber**

**Data Type :** Int (Integer)\
**Description:** Current Customer slab number lets say 10, 1, 3 etc\
**Syntax: currentCustomer.slabNumber[Operators][SLAB Number]**

| Example1: Write a rule to evaluate a condition that a current customer slab number is equal to 3 and current transaction value is greater than and equal to 300 but less than and equal to 600. |
| :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Expression: ((currentCustomer.slabNumber==3)&&(currentTxns.value)>=30&&(currentTxns.value\<600))                                                                                                |

| Example 2: Write an expression/rule to check if current slabNumber is greater than initialSlabNumber and current slab number is equal to 3. |
| :------------------------------------------------------------------------------------------------------------------------------------------ |
| ((currentCustomer.slabNumber > currentCustomer.initialSlabNumber) && (currentCustomer.slabNumber == 3))                                     |

***

## **initialSlabNumber**

**Data Type :** Int (Integer)\
**Description:** Initial slab number of the Current Customer before evaluating an event, let's say 10, 1, 3 etc\
**Syntax: currentCustomer.initialSlabNumber[Operators][SLAB Number]**

| Example 1: Write an expression/rule to check if current slabNumber is greater than initialSlabNumber or current slab number is equal to 4. |
| :----------------------------------------------------------------------------------------------------------------------------------------- |
| Ans:  ((currentCustomer.slabNumber > currentCustomer.initialSlabNumber)  \|\| (currentCustomer.slabNumber == 4))                           |

***

## **initialSlabName**

**Data Type :** Int (Integer)\
**Description:** Initial slab name of the Current Customer before evaluating an event, let's say Basic, Member, silver etc.\
**Syntax: currentCustomer.initialSlabNumber[Operators][SLAB Name]**

| Example: Write a simple rule to check if the current customer transaction is greater than 500 and the initial slab name was silver. |
| :---------------------------------------------------------------------------------------------------------------------------------- |
| currentTxn.value>100&&(currentCustomer.slabName.matches("SILVER"))                                                                  |
