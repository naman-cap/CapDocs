---
title: Attributes - Custom Fields (Transaction)
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
**Custom Fields :** Custom fields are columns that store special or custom information related to customers, transactions, transaction line items, coupons, categories, and so on.\
To know more about the creation of Custom Fields [click here](https://docs.capillarytech.com/docs/data-fields#create-new-custom-fields)

## **customFieldValueExcludes**

**Profile** : currentCustomer\
**Attribute**: customFieldValueExcludes()\
**Sub-Attribute**: Custom-Field Name and Custom Field Value\
**Data Type**: Boolean\
**Meaning:** returns False if the input custom field value matches with the bill's custom fields.\
**Syntax: currentTxn.customFieldValueExcludes(“custom Field Name”,”Custom Field Value”)**

| Example: Write an expression to check if the current customer transaction value is between 500 to 999 and the current Transaction line item does not contain Tshirt of Medium size, plus the discount on it is zero. |
| :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Expression: ((currentTxn.value>=500&&(currentTxn.value)\<=999)&&(currentTxn.customFieldValueExcludes("Tshirt","Medium"))&&(currentTxn.discount==0))                                                                  |

| Example: Write a rule to return false if the current transaction line item contains commodity of brand i.e custom field “Brand” and custom field value “Puma” |
| :------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Expression: currentTxn.customFieldValueExcludes(“Brand”,”Puma”)                                                                                               |

***

## **customFieldValueIncludes**

**Profile** : currentCustomer\
**Attribute**: customFieldValueIncludes()\
**Sub-Attribute**: Custom-Field NAME and Custom Field Value\
**Data Type:** Boolean\
**Meaning**: returns True if the input custom field value matches with the bill's custom fields.\
**Syntax: currentTxn.customFieldValueIncludes(“custom Field Name”,”Custom Field Value”)**\
   Example: currentTxn.customFieldValueIncludes(“category”,”GOLD”)\*\*\*\* here, the custom field name is Category and the custom Field Value is GOLD.

| Example: Write a rule to return TRUE if the current transaction line item contains commodity of brand and particular Value i.e. custom field “Brand” and custom field value “Puma” |
| :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Expression: currentTxn.customFieldValueIncludes(“Brand”,”Puma”)                                                                                                                    |
