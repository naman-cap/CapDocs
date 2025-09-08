---
title: Attributes - Group Primary Customer's Slab Information
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
```
                               ATTRIBUTES BASED ON SLAB/TIER INFORMATION

                  Rule = Profile + Attributes + Sub-Attributes + Operators + Value
```

## **1. Profile : currentCustomer**

Allows you to write conditions based on the properties of the customer who is currently performing the activity, example SLAB/Tier related Informations.

**For customers:** As customers shop more and more with a brand, they get more incentives as and when they go up through tiers.\
**For companies:** Incentivizing the most loyal customers more than others would generate more goodwill and loyalty among customers and hence, generate more revenue.

## **2. What is a slab/Tier ?**

Customer incentive programs that reward various groups (or slabs) of consumers differently are known as tiered loyalty programs. It typically takes the shape of a hierarchy, with each tier providing progressively more advantages (or more valuable benefits).

Example : Here customer segments/slabs are called Member, silver, gold and Platinum. The rewards in terms of points increases with the increase in Slab of the customer.

## **3.String and numerical Operators**

The basic range of string operations serve to resolve the string attribute into a boolean outcome. These operators are inserted after the string attribute using the . notation e.g. currentCustomer.email.contains(".com")\
string operators mainly used for slabName\
**Contains** - used to see if the string contains the defined value\
**Matches** - this is used to perform regular expression based matching on the string\
**isNull** - checks if the string is Null i.e. it was not passed from source\
**isNotNull** - checks if the the string is NOT Null i.e. some value was passed from source (even an empty string counts).

## 4. Numerical Operators mainly used for slabNumber.

Equals to (=)\
Unequals to (!=)\
Greater than (>)\
Greater than or equal to (>=)\
Less than (\<)\
Less than or equal to (\<=)\
AND (&&)\
OR(||)

## 5. Attributes based on SLAB information.

Profile: groupProfileCustomer\
Attribute: slabName\
Data Type: String\
Description: Current tier name of the Primary customer of the group.\
Syntax: groupPrimaryCustomer.slabName[operators][Value]

<Table align={["left"]}>
  <thead>
    <tr>
      <th>
        Example1: As a brand, we have a tired-based loyalty program where the tiers are silver, gold, and platinum. We have separate points allocation strategies for tiers respectively, thus write a condition to allocate points if the Primary customer of the group is in Gold Tier.
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Profile -> groupPrimaryCustomer
        slabName -> GOLD
        Rule expression -> groupPrimaryCustomer.slabName==” gold”
      </td>
    </tr>
  </tbody>
</Table>

***

## **Attribute2: slabNumber**

Profile: groupPrimaryCustomer\
Attribute: slabNumber\
Data Type : Int (Integer)\
Description: Primary Customer slab number let's say 10, 1, 3 etc\
Syntax: groupPrimaryCustomer.slabNumber[Operators][SLAB Number]

| Example1: Write a rule to evaluate a condition that a primary customer of a group slab number is equal to 3 and the current transaction value is greater than and equal to 300 but less than and equal to 600. |
| :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Expression: ((groupPrimaryCustomer.slabNumber==3)&&(currentTxns.value)>=30&&(currentTxns.value\<600))                                                                                                          |

***

## **Attribute3 : initialSlabNumber**

Profile: groupPrimaryCustomer\
Attribute: initialSlabNumber\
Data Type : Int (Integer)\
Description: Primary Customer slab number lets say 10, 1, 3 before evaluating a event.\
Syntax: groupPrimaryCustomer.initialSlabNumber[Operators][SLAB Number]

| Example 1: Write an expression/rule to check if current slabNumber is greater than initialSlabNumber or current slab number is equal to 4, of Primary Customer of group. |
| :----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ((groupPrimaryCustomer.slabNumber > groupPrimaryCustomer.initialSlabNumber) \|\| (groupPrimaryCustomer.slabNumber == 4))                                                 |

***

## **Attribute 4: initialSlabName**

**Data Type :** Int (Integer)\
**Description:** Initial slab name of the Current Customer before evaluating an event, let's say Basic, Member, silver etc.\
**Syntax: currentCustomer.initialSlabNumber[Operators][SLAB Name]**

| Example: Write a simple rule to check if the group Primary Customer transaction is greater than 500 and the initial slab name was silver. |
| :---------------------------------------------------------------------------------------------------------------------------------------- |
| currentTxn.value>100&&(groupPrimaryCustomer.slabName.matches("SILVER"))                                                                   |
