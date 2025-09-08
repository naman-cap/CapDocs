---
title: Attributes - Name/First Name/Last Name
excerpt: Profile - Group Primary Customer
deprecated: false
hidden: true
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
# CurrentCustomer Name/First Name/Last Name Expressions

## **1.currentCustomer (Customer Profile)** :

 Allows you to write conditions based on the properties of the customer who is currently performing the activity

## **2.Attributes on Customer Identity** :

Attributes that are based on customer Identity like Name, first Name and Last Name.

<Table align={["left","left","left","left","left"]}>
  <thead>
    <tr>
      <th>
        Attributes
      </th>

      <th>
        Meaning
      </th>

      <th>
        Data Type
      </th>

      <th>
        Stored in backend
      </th>

      <th>
        Sub- Attributes
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Name
      </td>

      <td>
        Customer’s Full Name
      </td>

      <td>
        String
      </td>

      <td>
        name = firstName + " " + lastName;
      </td>

      <td>
        NA
      </td>
    </tr>

    <tr>
      <td>
        First Name
      </td>

      <td>
        Customer’s First Name\
        string  
      </td>

      <td>
        String
      </td>

      <td>
        name = firstName;
      </td>

      <td>
        NA
      </td>
    </tr>

    <tr>
      <td>
        Last Name
      </td>

      <td>
        Customer’s Last Name
      </td>

      <td>
        String
      </td>

      <td>
        name = " " + lastName;
      </td>

      <td>
        NA
      </td>
    </tr>
  </tbody>
</Table>

## **3.String Operators**

The basic range of string operations serve to resolve the string attribute into a boolean outcome. These operators are inserted after the string attribute using the . notation e.g. currentCustomer.email.contains(".com")

The following are the string operators:\
**Contains** - used to see if the string contains the defined value\
**Matches** - this is used to perform regular expression based matching on the string\
**isValidDate** - used to check if the string is a proper date field\
**Exists** - Some proper value exists for this string (i.e. source passed a value that was not an empty string)\
**notExists** - The string is either Null or Empty\
**isEmpty** - Similar to notExists\
**isNull** - checks if the string is Null i.e. it was not passed from source\
**isNotNull** - checks if the the string is NOT Null i.e. some value was passed from source (even an empty string counts).

***

## **Attribute “Name”:**

Profile: groupPrimaryCustomer\
Attribute: name\
Meaning: Customer's Full Name  name = firstName + " " + lastName \
Type: String\
Sub-Attribute : NA\
Operators : contains, exists, isEmpty, isNotNull, isNull, isValidDate, matches and notExists\
Format: groupPrimaryCustomer.[(Attribute).(Sub Attribute)].[ Operators ][VALUE]\
Syntax : groupPrimaryCustomer.name[Operator][Value]\
Example : Lets say the primary customer name is “Mudita Sharma”

<Table align={["left"]}>
  <thead>
    <tr>
      <th>
        Example 1
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Write an Expression to check if the Primary customer name has substring “naresh”.
        Expression: groupPrimaryCustomer.name.matches(“naresh”)
        Here, Profile -> groupPrimaryCustomer
        Attribute -> name
        Sub Attributes -> NA
        String Operators -> matches
        Value -> naresh
      </td>
    </tr>
  </tbody>
</Table>

<Table align={["left"]}>
  <thead>
    <tr>
      <th>
        Example 2
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Write an Expression to check if the customer name is “Santosh kumar”
        Expression: groupPrimaryCustomer.contains("Santosh kumar")
      </td>
    </tr>
  </tbody>
</Table>

***

## **Attributes “First Name” & “Last Name”:**

Profile: groupPrimaryCustomer\
Attribute: firstName\
Meaning: Primary customer's First Name  name = firstName \
Attribute : lastName\
Meaning: Primary customer's Last Name name = " "+lastName\
Type: String\
Sub-Attribute : NA\
Format: groupPrimaryCustomer.[(Attribute).(Sub Attribute)].[ Operators ][VALUE]\
Syntax for First Name Attribute: groupPrimaryCustomer.firstname[Operator][Value]\
Syntax for last Name Attribute : groupPrimaryCustomer.lastname[Operator][Value]

<Table align={["left"]}>
  <thead>
    <tr>
      <th>
        Example 1
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Example 2: Write a rule to check if the current transaction is done by a primary customer of a group whose first name is Rohan.  

        Here, Profile -> groupPrimaryCustomer
        Attribute -> firstname
        Sub Attributes -> NA
        String Operators -> matches
        Value -> Rohan
        Expression -> groupPrimaryCustomer.firstname.matches(“Rohan”)
      </td>
    </tr>
  </tbody>
</Table>

<Table align={["left"]}>
  <thead>
    <tr>
      <th>
        Example 2:
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Example 3: Write a rule to check if the current transaction is done by a primary customer of a group whose first name is Yash and the transaction value exceed 1000.  

        Overall Expression : Condition 1 && Condition 2
        For Condition 1:
        Profile : groupPrimaryCutomer
        Attribute: firstname
        Operator : ==
        Value: Yash
        Expression 1: groupPrimaryCustomer.firstname==”Yash”  

        For Condition 2:
        Profile : customerTxn
        Attribute: value
        Operator : “>”
        Value: 1000
        Expression 1: currentTxn.value>1000
      </td>
    </tr>
  </tbody>
</Table>

## Email

Profile : groupPrimaryCustomer\
Attribute : Email\
Type : String\
Sub-Attributes : NA\
Operator: contains, exists, isEmpty, isNotNull, isNull, matches, notExists, “==”\
Meaning : Primary Customer's email id or checks which organization is in the email of Primary Customer\
Syntax : groupPrimaryCustomer.email[Operators][Value]

<Table align={["left","left","left","left"]}>
  <thead>
    <tr>
      <th>
        Attribute
      </th>

      <th>
        SubAttribute
      </th>

      <th>
        Operator
      </th>

      <th>
        Example
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        email
      </td>

      <td>
        NA
      </td>

      <td>
        contains
      </td>

      <td>
        Contains - use to see if the string contains the defined value.\
        Example: groupPrimaryCustomer.email.contains("ashish.chelikani")
      </td>
    </tr>

    <tr>
      <td>
        email
      </td>

      <td>
        NA
      </td>

      <td>
        exists
      </td>

      <td>
        Exists - Some proper value exists for this string (i.e. source passed a value that was not an empty string)\
        groupPrimaryCustomer.email.exists()
      </td>
    </tr>

    <tr>
      <td>
        email
      </td>

      <td>
        NA
      </td>

      <td>
        isEmpty
      </td>

      <td>
        isEmpty - Similar to notExists\
        groupPrimaryCustomer.emai.isEmpty(“”)
      </td>
    </tr>

    <tr>
      <td>
        email
      </td>

      <td>
        NA
      </td>

      <td>
        isNotNull
      </td>

      <td>
        isNotNull - checks if the the string is NOT Null i.e. some value was passed from source (even an empty string counts)\
        groupPrimaryCustomer.email.isNotNull(“”)
      </td>
    </tr>

    <tr>
      <td>
        email
      </td>

      <td>
        NA
      </td>

      <td>
        isNull
      </td>

      <td>
        isNull - checks if the string is Null i.e. it was not passed from source\
        groupPrimaryCustomer.email.isNull(“”)
      </td>
    </tr>

    <tr>
      <td>
        email
      </td>

      <td>
        NA
      </td>

      <td>
        notExists
      </td>

      <td>
        notExists - The string is either Null or Empty
      </td>
    </tr>

    <tr>
      <td>
        email
      </td>

      <td>
        NA
      </td>

      <td>
        \==
      </td>

      <td>
        ( == ) returns true if both operands have the same value; otherwise, it returns false . The not-equal-to operator ( != ) returns true if the operands don't have the same value; otherwise, it returns false .\
        groupPrimaryCustomer.email=="[shoa17783@gmail.com](mailto:shoa17783@gmail.com)"
      </td>
    </tr>

    <tr>
      <td>
        email
      </td>

      <td>
        NA
      </td>

      <td>
        matches
      </td>

      <td>
        Matches - this is used to perform regular expression-based matching on the string.\
        groupPrimaryCustomer.email.matches("[santosh@tech.com](mailto:santosh@tech.com)")
      </td>
    </tr>
  </tbody>
</Table>

Example 1: Write a condition to check if the Primary customer email contains string “SHR”\
Profile: groupPrimaryCustomer\
Attribute: Email\
Sub-Attribute: NA\
Operator : contains\
Rule: groupPrimaryCustomer.email.contains(“SHR”)

Example 2: Write a rule to check if the Primary customer’s number of visits and Primary group customer email is not null.\
Profile: groupPrimaryCustomer\
Attribute: numberOfVisits and email\
Operator : == & isNotNull\
Rule: groupPrimaryCustomer.numberOfVisits==1&\&groupPrimaryCustomer.email.is.NotNull(“”)

## hasInstoreProfile

Profile : groupPrimaryCustomer\
Attribute : hasInstoreProfile\
Type : Boolean\
Meaning : returns True, if the Primary customer is registered and has a instore Profile\
Sub-Attribute: NA\
Syntax: groupPrimaryCustomer.hasInstoreProfile()\
Example: groupPrimaryCustomer.hasInstoreProfile==true

Example1 : write a rule to check if the current has a Instore Profile

Profile: groupPrimaryCustomer\
Attribute: hasInstoreProfile\
Type: Boolean\
Rule: groupPrimaryCustomer.hasinstoreProfile==true

## hasWeChatProfile

Profile : groupPrimaryCustomer\
Attribute : hasWeChatProfile\
Type : Boolean\
Meaning : returns True, if the group Primary customer has a WeChat Profile\
Sub-Attribute: NA\
Syntax: groupPrimaryCustomer.hasWeChatProfile==true

Example1 : write a rule to check if the group Primary customer has a Instore Profile\
Profile: groupPrimaryCustomer\
Attribute: hasWeChatProfile\
Type: Boolean\
Rule: groupPrimaryCustomer.hasWeChatProfile()
