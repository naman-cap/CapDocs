---
title: Customer/Current Transaction Rules
excerpt: currentTxn Rules
deprecated: false
hidden: true
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
**Profile : Current Transaction (currentTxn)**

The currentTxn profile lets you write rules on the current transaction of customers. 

Use this profile to write rules on the transaction's basket size, custom fields, amount etc. Refer to the table below for all the supported attributes of customerTxn.

**The basic format of all the rules will be : currentTxn.\{attribute}.\{sub attribute}(Value of attribute)**

# Attributes

These are the attributes on which 

## Number

Transaction number of the current transaction

Rule : currentTxn.number.\{sub attribute}("value of attribute")

> 📘
>
> * Value = Gross amount (rate\*quantity)
> * Rate = Gross price of a line item 
> * Amount = Value-discount

<Table align={["left","left","left"]}>
  <thead>
    <tr>
      <th>
        ATTRIBUTE
      </th>

      <th>
        DESCRIPTION
      </th>

      <th>
        SUB ATTRIBUTES
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        number
      </td>

      <td>
        Transaction number of the current transaction
      </td>

      <td>
        contains, exists, isEmpty, isNotNull, isNull, isValidDate, matches, and notExists
      </td>
    </tr>

    <tr>
      <td>
        basketSum()
      </td>

      <td>
        Sum of value of the items matching the inventory attribute
      </td>

      <td>
        currentTxn.basketSum("Attribute Name","Inventory Value")
      </td>
    </tr>

    <tr>
      <td>
        basketSumRegex()
      </td>

      <td>
        Sum of value of the items matching the inventory attribute - regular expression
      </td>

      <td>
        currentTxn.basketSumRegex("Attribute Name","Attribute  Regex")
      </td>
    </tr>

    <tr>
      <td>
        basketQty()
      </td>

      <td>
        Total quantity of items in the bill matching the inventory. For instance, if 2 items of a given line-item are bought, then the basket quantity is 2.
      </td>

      <td>
        currentTxn.basketQty("Attribute Name","Attribute Value")
      </td>
    </tr>

    <tr>
      <td>
        basketQtyRegex()
      </td>

      <td>
        Quantity of items in the bill matching the regular expression
      </td>

      <td>
        currentTxn.basketIncludes("Jeans","Levis002")
      </td>
    </tr>

    <tr>
      <td>
        basketCount()
      </td>

      <td>
        Number of products in the transaction of the given inventory type - irrespective of quantity
      </td>

      <td>
        Either pass just value or attribute and value pair.  

        Example: currentTxn.basketCount("Dvs\_flag","DVS\_Flag")>1
      </td>
    </tr>

    <tr>
      <td>
        basketCountRegex()
      </td>

      <td>
        Number of products whose item attribute matches the given regular expression
      </td>

      <td>
        Pass attribute and regex of the attribute that you want to validate\
        currentTxn.basketSum("Inventory Attribute","Regex")
      </td>
    </tr>

    <tr>
      <td>
        basketIncludes()
      </td>

      <td>
        Products contained in the transaction.
      </td>

      <td>
        Pass attribute and value pair.\
        currentTxn.basketIncludes("Attribute Name","Attribute Value")  

        Example:\
        currentTxn.basketIncludes("Jeans","Levis002")
      </td>
    </tr>

    <tr>
      <td>
        basketExcludes()
      </td>

      <td>
        Products not contained in the transaction
      </td>

      <td>
        Pass attribute and value pair.\
        currentTxn.basketExcludes("Attribute Name","Attribute Value")  

        Example:\
        currentTxn.basketExcludes("Jeans","Levis002")
      </td>
    </tr>

    <tr>
      <td>
        basketIncludesRegex()
      </td>

      <td>
        If the bill includes products whose item attribute does not match the given regular expression
      </td>

      <td>
        Pass attribute and value pair.\
        currentTxn.basketIncludesRegex("Attribute Name","Attribute Regex")  

        Example:\
        currentTxn.basketIncludes("Jeans","XXX")
      </td>
    </tr>

    <tr>
      <td>
        basketExcludesRegex()
      </td>

      <td>
        If the bill does not include products whose item attribute does not match the given regular expression
      </td>

      <td>
        Pass attribute and value pair.\
        currentTxn.basketExcludesRegex("Attribute Name","Attribute Regex")  

        Example:\
        currentTxn.basketExcludes("Jeans","XXX")
      </td>
    </tr>

    <tr>
      <td>
        basketSumIf
      </td>

      <td>
        Returns the sum of amount of line items (in basket) that satisfies a specific condition. You can define conditions based on the amount, discount, quantity, rate, or value of line items in the basket.  

        For example, sum of line items amount in the basket whose quantity is more than 2.
      </td>

      <td>
        Standard expression:  

        basketSumIf(“\{parameter}”, “\{expression}”,"\{value}")[operator]\{value})  

        Example:  

        currentTxn.basketSumIf("QUANTITY","GREATER\_THAN\_EQUAL\_TO","3")>100  

        The preceding expression says: From the basket items, calculate the total amount of line items whose quantity is greater than or equal to 3. If this value is greater than 100, then execute a specific action.  

        Supported parameters:  

        AMOUNT, DISCOUNT, QUANTITY, RATE, and VALUE  

        Supported Operators:  

        GREATER\_THAN, LESS\_THAN, LESS\_THAN\_EQUALS\_TO, GREATER\_THAN\_EQUALS\_TO, EQUALS\_TO, NOT\_EQUALS\_TO
      </td>
    </tr>

    <tr>
      <td>
        basketCountIf
      </td>

      <td>
        Returns the count of line items of the basket that satisfies a specific condition. You can define condition based on the amount, discount, quantity, rate, or value of line items in the basket.
      </td>

      <td>
        Standard expression:  

        basketSumIf(“\{parameter}”, “\{expression}”,"\{value}")[operator]\{value})  

        Example:  

        currentTxn.basketCountf("AMOUNT","LESS\_THAN","50")>3  

        Count of line items from the basket whose amount is less than 50. If this count exceeds 3, then execute an action.  

        Supported parameters:  

        AMOUNT, DISCOUNT, QUANTITY, RATE, and VALUE  

        Supported Operators:  

        GREATER\_THAN, LESS\_THAN, LESS\_THAN\_EQUALS\_TO, GREATER\_THAN\_EQUALS\_TO, EQUALS\_TO, and NOT\_EQUALS\_TO
      </td>
    </tr>

    <tr>
      <td>
        basketQtyIf
      </td>

      <td>
        Return the sum of quantities of qualifying line items in the basket. The qualifying condition could be on the amount, discount, quantity, rate, or value of the line item..  

        For example, quantity of all line items in the basket whose discount is less or equals to $10.
      </td>

      <td>
        Standard expression:  

        basketSumIf(“\{attribute}”, “\{expression}”,"\{value}")[operator]\{value})  

        Example :  

        currentTxn.basketQtyIf("DISCOUNT","LESS\_THAN\_EQUALS\_TO","10")>20  

        Calculate the sum of the quantity of all line items in the basket whose discount value is $10 or above. If the quantity of those line items is more than 20, execute an  action.  

        Supported parameters:  

        AMOUNT, DISCOUNT, QUANTITY, RATE, and VALUE  

        Supported Operators:  

        GREATER\_THAN, LESS\_THAN, LESS\_THAN\_EQUALS\_TO, GREATER\_THAN\_EQUALS\_TO, EQUALS\_TO, NOT\_EQUALS\_TO
      </td>
    </tr>

    <tr>
      <td>
        basketSize
      </td>

      <td>
        Total number of items in the bill - irrespective of quantity of each item
      </td>

      <td>
        NA
      </td>
    </tr>

    <tr>
      <td>
        basketSumGross
      </td>

      <td>
        Returns the sum of the gross amount of each line items in a basket whose attribute name matches with a specific value. Supported attribute names:  product name, short description, SKU number, category, and subcategory.
      </td>

      <td>
        Standard expression:  

        currentTxn.basketSumGross\{("[Attribute Name]","[Inventory Value]")[Operator][Value]}  

        Sample expression:  

        currentTxn.basketSumGross("name","demoname")>2000  

        The expression implies: If the total gross amount of line items in the basket with attribute name value is "demoname", exceeds 2000, then execute a specific action.
      </td>
    </tr>

    <tr>
      <td>
        basketSumRegexGross
      </td>

      <td>
        Returns the sum of gross amount of each line item in the basket\
        whose product attribute values match the given regular expression.
      </td>

      <td>
        Standard expression:  

        currentTxn.basketSumRegexGross\{("[Attribute Name]","[Attribute Regex]")[Operator][Value]}  

        Sample expression:  

        currentTxn.basketSumRegexGross("brand","^purple")>5000  

        It implies: If the sum of gross amount of line items of the basket, whose attribute name (brand) starts with purple, exceeds 5000 execute a specific action.
      </td>
    </tr>

    <tr>
      <td>
        basketSumRegexBrandGross
      </td>

      <td>
        Returns the sum of the gross amount of each line item in the basket whose brand name matches with the given the regular expression.  

        Calculates the total gross amount of basket items whose brand name contains xyz.
      </td>

      <td>
        Standard expression:  

        currentTxn.basketSumRegexCategoryGross\{("[Regex]")[Operator][Value]}  

        Sample expression:  

        currentTxn.basketSumRegexCategoryGross("demo\*")>1000  

        It implies: If the sum of gross amount of line items of the basket with brand names containing 'demo', exceeds 1000 execute a specific action.
      </td>
    </tr>

    <tr>
      <td>
        basketSumRegexCategoryGross
      </td>

      <td>
        Returns the total gross amount of line items in the basket whose category names matches with the given regular expression.
      </td>

      <td>
        Standard expression:  

        currentTxn.basketSumRegexCategoryGross\{("[Regex]")[Operator][Value]}  

        Sample expression:  

        currentTxn.basketSumRegexCategoryGross("^shirt")>1000  

        It implies: If the sum of gross amount of line items of the basket whose category names that start with shirt, exceeds 1000 execute a specific action.
      </td>
    </tr>

    <tr>
      <td>
        customFieldValueExcludes
      </td>

      <td>
        Transaction custom field excludes the given value
      </td>

      <td>
        Mention the custom field value that you want to validate as shown below\
        currentCustomer.customFieldValueExcludes("a\_customertype","Loyalty")
      </td>
    </tr>

    <tr>
      <td>
        customFieldValueIncludes()
      </td>

      <td>
        Check if customer's transaction level custom field value includes the given value
      </td>

      <td>
        Mention the custom field value that you want to validate as shown below\
        customFieldValueIncludes("Field","Value")  

        Example:\
        currentCustomer.customFieldValueIncludes("a\_customertype","Loyalty")
      </td>
    </tr>

    <tr>
      <td>
        date
      </td>

      <td>
        Date of transaction
      </td>

      <td>
        dateDiff, day, dayOfMonth, daysDiff, daysDiffFromString, isAfter, isHourBetween, isTimeBetween, isValid, isWeekday, isWeekend, month, and year
      </td>
    </tr>

    <tr>
      <td>
        discount
      </td>

      <td>
        Discount availed for a transaction
      </td>

      <td>
        NA
      </td>
    </tr>

    <tr>
      <td>
        points
      </td>

      <td>
        Total points issued for a transaction
      </td>

      <td>
        NA
      </td>
    </tr>

    <tr>
      <td>
        totalQty
      </td>

      <td>
        Total quantity of all items in a transaction. For instance, if 2 items of a given line item are bought, then the 2 is added to the basket quantity.
      </td>

      <td>
        NA
      </td>
    </tr>

    <tr>
      <td>
        value
      </td>

      <td>
        Total value of the transaction
      </td>

      <td>
        interval
      </td>
    </tr>

    <tr>
      <td>
        notes
      </td>

      <td>
        Transaction level notes specified by the cashier during transaction
      </td>

      <td>
        contains, exists, isEmpty, isNotNull, isNull, isValidDate, matches, and notExists
      </td>
    </tr>
  </tbody>
</Table>
