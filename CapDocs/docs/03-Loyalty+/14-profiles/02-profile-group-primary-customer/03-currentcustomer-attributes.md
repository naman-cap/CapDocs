---
title: Attributes - Group Primary Customer's Data
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
      <th style={{ textAlign: "left" }}>
        Attribute
      </th>

      <th style={{ textAlign: "left" }}>
        SubAttribute
      </th>

      <th style={{ textAlign: "left" }}>
        Operator
      </th>

      <th style={{ textAlign: "left" }}>
        Example
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td style={{ textAlign: "left" }}>
        email
      </td>

      <td style={{ textAlign: "left" }}>
        NA
      </td>

      <td style={{ textAlign: "left" }}>
        contains
      </td>

      <td style={{ textAlign: "left" }}>
        Contains - use to see if the string contains the defined value.\
        Example: groupPrimaryCustomer.email.contains("ashish.chelikani")
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        email
      </td>

      <td style={{ textAlign: "left" }}>
        NA
      </td>

      <td style={{ textAlign: "left" }}>
        exists
      </td>

      <td style={{ textAlign: "left" }}>
        Exists - Some proper value exists for this string (i.e. source passed a value that was not an empty string)\
        groupPrimaryCustomer.email.exists()
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        email
      </td>

      <td style={{ textAlign: "left" }}>
        NA
      </td>

      <td style={{ textAlign: "left" }}>
        isEmpty
      </td>

      <td style={{ textAlign: "left" }}>
        isEmpty - Similar to notExists\
        groupPrimaryCustomer.emai.isEmpty(“”)
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        email
      </td>

      <td style={{ textAlign: "left" }}>
        NA
      </td>

      <td style={{ textAlign: "left" }}>
        isNotNull
      </td>

      <td style={{ textAlign: "left" }}>
        isNotNull - checks if the the string is NOT Null i.e. some value was passed from source (even an empty string counts)\
        groupPrimaryCustomer.email.isNotNull(“”)
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        email
      </td>

      <td style={{ textAlign: "left" }}>
        NA
      </td>

      <td style={{ textAlign: "left" }}>
        isNull
      </td>

      <td style={{ textAlign: "left" }}>
        isNull - checks if the string is Null i.e. it was not passed from source\
        groupPrimaryCustomer.email.isNull(“”)
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        email
      </td>

      <td style={{ textAlign: "left" }}>
        NA
      </td>

      <td style={{ textAlign: "left" }}>
        notExists
      </td>

      <td style={{ textAlign: "left" }}>
        notExists - The string is either Null or Empty
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        email
      </td>

      <td style={{ textAlign: "left" }}>
        NA
      </td>

      <td style={{ textAlign: "left" }}>
        \==
      </td>

      <td style={{ textAlign: "left" }}>
        ( == ) returns true if both operands have the same value; otherwise, it returns false . The not-equal-to operator ( != ) returns true if the operands don't have the same value; otherwise, it returns false .\
        groupPrimaryCustomer.email=="[shoa17783@gmail.com](mailto:shoa17783@gmail.com)"
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        email
      </td>

      <td style={{ textAlign: "left" }}>
        NA
      </td>

      <td style={{ textAlign: "left" }}>
        matches
      </td>

      <td style={{ textAlign: "left" }}>
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
