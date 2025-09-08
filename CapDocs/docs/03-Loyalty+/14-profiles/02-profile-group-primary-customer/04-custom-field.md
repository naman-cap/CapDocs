---
title: Attributes - Group Primary Customer's Custom Field.
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
# Profile - Group Primary Customer (groupPrimaryCustomer)

**Custom Fields :** Custom fields are columns that store special or custom information related to customers, transactions, transaction line-items, coupons, category and so on. 

The following are different entries for which you can create custom fields.

1. Loyalty registration
2. Loyalty transaction
3. Customer feedback
4. Zone custom fields
5. Store custom fields
6. Points redemption
7. Voucher redemption (coupon redemption)
8. Customer advanced feedback
9. Customer preferences
10. Customer Card\
    To know how to create a Custom Fields, [click here](https://docs.capillarytech.com/docs/data-fields#create-new-custom-fields)

**Attributes :** Attributes based on Custom Fields for Customer profile are listed below in the table.

<Table align={["left","left","left","left"]}>
  <thead>
    <tr>
      <th>
        Profile
      </th>

      <th>
        Data Type
      </th>

      <th>
        Description
      </th>

      <th>
        Sub-Attributes
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        customFieldValueIncludes
      </td>

      <td>
        boolean
      </td>

      <td>
        checks If group Primary customer has some custom field present with particular value
      </td>

      <td>
        Sub-Attributes 1: custom Field Name\
        Sub-Attributes 2: Value of custom field
      </td>
    </tr>

    <tr>
      <td>
        customFieldValueExists
      </td>

      <td>
        boolean
      </td>

      <td>
        checks If Primary customer of a group has some custom field present.
      </td>

      <td>
        Sub-Attribute 1: Custom field Value
      </td>
    </tr>

    <tr>
      <td>
        customFieldValueExcludes
      </td>

      <td>
        boolean
      </td>

      <td>
        checks If Primary customer of a group has some custom field is not present with particular value
      </td>

      <td>
        Sub-Attributes 1: custom Field Name\
        Sub-Attributes 2: Value of custom field
      </td>
    </tr>
  </tbody>
</Table>

## **customFieldValueIncludes**

Profile: groupPrimaryCustomer\
Attribute: customFieldValueIncludes\
Data Type: Boolean\
Description: Lets you evaluate conditions on a custom field value of the primary member (if a specific custom field value exists for the member).\
Sub-Attributes: Custom Field Name, Custom Field Value\
Syntax: groupPrimaryCustomer.customFieldValueIncludes(“custom\_field\_name”,”custom\_field\_value”)

| Example 1: Let’s see we have created a custom field by the name of cities and value includes Delhi, Indore, Bangalore, etc. Now a marketing manager wants to provide incentives to those Primary customers of a group who are from Bangalore. |
| :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Rule: groupPrimaryCustomer.customFieldValueExcludes("cities","Bangalore")                                                                                                                                                                     |

<Table align={["left"]}>
  <thead>
    <tr>
      <th>
        Example 2: Suppose the college team in your city has won a major championship and you want to celebrate the event by offering discounts to primary customers of a group who had included that sport as their favorite.
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Rule: To issue coupons to customers who had included SportX as their favorite, use the following condition:
        groupPrimaryCustomer.customFieldValueIncludes("Favorite\_Sport","SportX")
        If the value returned is SportX, then the coupon is issued.
      </td>
    </tr>
  </tbody>
</Table>

| Example 3: Rule to check if the primary customer of a group is in age group between 25-40 or 40-90 and gender is Male & current transaction basket contains POLO and number of transactions done is greater than 1.                                                                                |
| :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Rule: (groupPrimaryCustomer.customFieldValueIncludes("age","25-40")\|\|groupPrimaryCustomer.customFieldValueIncludes("age","40-90"))&&(groupPrimaryCustomer.customFieldValueIncludes("gender","Male"))&&(currentTxn.basketIncludes("Producttype","polo"))&&(groupPrimaryCustomer.numberOfVisits>1) |

***

## **customFieldValueExcludes**

\*Profile : groupPrimaryCustomer\
Attribute : customFieldValueExcludes\
Data Type: Boolean\
Description : Lets you evaluate conditions on a custom field value of the customer. (Any value other than the value you mention here)\
Sub-Attributes: Custom Field Name, Custom Field Value\
Syntax: groupPrimaryCustomer.customFieldValueExcludes(“custom\_field\_name”,”custom\_field\_value”)

| Example 1: As a marketing manager I want to check if the customer is from homeclub\_number and value 12 or 11.                                        |
| :---------------------------------------------------------------------------------------------------------------------------------------------------- |
| Rule:groupPrimaryCustomer.customFieldValueExcludes("homeclub\_number","12")\|\|groupPrimaryCustomer.customFieldValueExcludes("homeclub\_number","11") |

| Example 2 : Write an expression to evaluate that primary customer of a group, DVS custom field value is Home lovers and preferred language is not Arabic. |
| :-------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Rule : groupPrimaryCustomer.clusterValueIncludes("DVS","Home Lovers")&&(groupPrimaryCustomer.customFieldValueExcludes("preferredlanguage","Arabic"))      |

***

## **customFieldValueExists**

Profile : groupPrimaryCustomer\
Attribute : customFieldValueExists\
Data Type : Boolean\
Description : Lets you evaluate conditions on a custom field value of the primary member ( if a specific custom field value exists for the member).\
Sub-Attributes: Custom Field Name\
Syntax: groupProfileCustomer.customFieldValueExists(“custom\_field\_name”,”custom\_field\_value”)

| Example 1: Write a rule to check if primary customer of a group has a custom field by the name billdelayed. |
| :---------------------------------------------------------------------------------------------------------- |
| groupProfileCustomer.customFieldValueExists(“billdelayed”)                                                  |
