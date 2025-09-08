---
title: Attributes - Customer data/PII
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
# Profile: currentCustomer

## **Email**

**Profile :** currentCustomer\
**Attribute :** Email\
**Type :** String\
**Sub-Attributes :** NA\
**Operator:** contains, exists, isEmpty, isNotNull, isNull, matches, notExists, “==”\
**Meaning :** Customer's email id or checks which organization is in the email of Custome**r\
Syntax : currentCustomer.email[Operators][Value]\*\***

<Table align={["left","left","left","left","left"]}>
  <thead>
    <tr>
      <th style={{ textAlign: "left" }}>
        Profile  
      </th>

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
        currentCustomer
      </td>

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
        Contains - used to see if the string contains the defined value.\
        Example:**currentCustomer.email.contains("ashish.chelikani")**
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        currentCustomer
      </td>

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
        **currentCustomer.email.exists()**
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        currentCustomer
      </td>

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
        **currentCustomer.emai.isEmpty(“”)**
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        currentCustomer
      </td>

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
        **currentCustomer.email.isNotNull(“”)**
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        currentCustomer
      </td>

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
        **currentCustomer.email.isNull(“”)**
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        currentCustomer
      </td>

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
        currentCustomer
      </td>

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
        **currentCustomer.email=="[shoa17783@gmail.com](mailto:shoa17783@gmail.com)"**
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        currentCustomer
      </td>

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
        Matches - this is used to perform regular expression based matching on the string.\
        **currentCustomer.email.matches("[santosh@tech.com](mailto:santosh@tech.com)")**
      </td>
    </tr>
  </tbody>
</Table>

<Table align={["left"]}>
  <thead>
    <tr>
      <th>
        Example: Write a condition to check if the customer email contains string “SHR”
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Profile: Current Customer
        Attribute: Email
        Sub-Attribute: NA
        Operator : contains
        **Rule: currentCustomer.email.contains(“SHR”)**
      </td>
    </tr>
  </tbody>
</Table>

<Table align={["left"]}>
  <thead>
    <tr>
      <th>
        Example: Write a rule to check if the current customer number of visits and current customer email is not null.
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Profile: Current Customer
        Attribute: numberOfVisits and email
        Operator : == & isNotNull
        **Rule: currentCustomer.numberOfVisits==1&&(currentCustomer.email.is.NotNull(“”))**
      </td>
    </tr>
  </tbody>
</Table>

***

## **External ID (externalId)**

**Profile :** currentCustomer\
**Attribute :** externalId\
**Type :** integer/Alphanumeric\
**Sub-Attributes :** NA\
**Operator:** contains, exists, isEmpty, isNotNull, isNull, matches,notExists, “==”\
**Meaning :** Lets say to issue coupons to customers whose external ID contains a certain serial numbers (say 1234), use the following condition: customerCustomer.externalId.contains("1234")\
**Syntax : currentCustomer.externalId[Operators][Value]**

<Table align={["left","left","left","left","left"]}>
  <thead>
    <tr>
      <th>
        Profile
      </th>

      <th>
        Attribute
      </th>

      <th>
        Sub-Attribute
      </th>

      <th>
        Operator
      </th>

      <th>
        Meaning
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        currentCustomer
      </td>

      <td>
        externalId
      </td>

      <td>
        NA
      </td>

      <td>
        contains
      </td>

      <td>
        Contains - used to see if the string contains the defined value\
        Example: currentCustomer.externalId.contains("")
      </td>
    </tr>

    <tr>
      <td>
        currentCustomer
      </td>

      <td>
        externalId
      </td>

      <td>
        NA
      </td>

      <td>
        exists
      </td>

      <td>
        Exists - Some proper value exists for this string (i.e. source passed a value that was not an empty string)\
        currentCustomer.externalId.exists()
      </td>
    </tr>

    <tr>
      <td>
        currentCustomer
      </td>

      <td>
        externalId
      </td>

      <td>
        NA
      </td>

      <td>
        isEmpty
      </td>

      <td>
        isEmpty - Similar to notExists\
        currentCustomer.externalId.isEmpty(“”)
      </td>
    </tr>

    <tr>
      <td>
        currentCustomer
      </td>

      <td>
        externalId
      </td>

      <td>
        NA
      </td>

      <td>
        isNotNull
      </td>

      <td>
        isNotNull - checks if the the string is NOT Null i.e. some value was passed from source (even an empty string counts)\
        currentCustomer.externalId.isNotNull(“”)
      </td>
    </tr>

    <tr>
      <td>
        currentCustomer
      </td>

      <td>
        externalId
      </td>

      <td>
        NA
      </td>

      <td>
        isNull
      </td>

      <td>
        isNull - checks if the string is Null i.e. it was not passed from source\
        currentCustomer.externalId.isNull()
      </td>
    </tr>

    <tr>
      <td>
        currentCustomer
      </td>

      <td>
        externalId
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
        currentCustomer
      </td>

      <td>
        externalId
      </td>

      <td>
        NA
      </td>

      <td>
        \==
      </td>

      <td>
        ( == ) returns true if both operands have the same value; otherwise, it returns false . The not-equal-to operator ( != ) returns true if the operands don't have the same value; otherwise, it returns false .\
        currentCustomer.externalID=="17783"\
        currentCustomer.externalId!=""
      </td>
    </tr>

    <tr>
      <td>
        currentCustomer
      </td>

      <td>
        externalId
      </td>

      <td>
        NA
      </td>

      <td>
        matches
      </td>

      <td>
        Matches - this is used to perform regular expression based matching on the string.\
        currentCustomer.internalId.matches("abc1223")
      </td>
    </tr>
  </tbody>
</Table>

<Table align={["left"]}>
  <thead>
    <tr>
      <th>
        Example: Write a rule to check if the current customer number of visits is equals to 1 and current customer externalId is not null.
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Profile: Current Customer
        Attribute: numberOfVisits and externalId
        Operator : == & isNotNull
        Rule: **currentCustomer.numberOfVisits==1&&(currentCustomer.externalId.NotNull(“”))**
      </td>
    </tr>
  </tbody>
</Table>

<Table align={["left"]}>
  <thead>
    <tr>
      <th>
        Example: Write a rule to check if the current customer contains a string “TRN13”
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Profile: Current Customer
        Attribute: externalId
        Operator : contains()
        Rule: **currentCustomer.externalId.contains(“TRN13”)**
      </td>
    </tr>
  </tbody>
</Table>

<Table align={["left"]}>
  <thead>
    <tr>
      <th>
        Example: Write a rule to check if the current customer externalID exists
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Profile: Current Customer
        Attribute: externalId
        Operator : exists()
        Rule: **currentCustomer.externalId.exists()**
      </td>
    </tr>
  </tbody>
</Table>

***

## **joinDate**

**Profile :** currentCustomer\
**Attribute :** joinDate\
**Type :** Date\
**Meaning :** Registration date of a customer.\
**Output:**&#x54;he basic range of date operations serve to resolve the date attribute into a boolean outcome. You will commonly be combining multiple attributes in date operations, since you will be comparing dates\
**Sub-Attributes :** dateDiff, day, dayOfMonth, daysDiff, daysDiffFromString, isAfter, isHourBetween, isTimeBetween, isValid, isWeekday, isWeekend, month, and year.\
**Operators :** isNull - checks if the the date is Null i.e. it was not passed from source and isNotNull - checks if the the date is NOT Null i.e. some value was passed from source\
**Syntax : currentCustomer.joinDate.[Sub-Attribute][Operator][VALUE]**

| Profile         | Attribute | Sub-Attribute      | Description and Example                                                                                                  |
| :-------------- | :-------- | :----------------- | :----------------------------------------------------------------------------------------------------------------------- |
| currentCustomer | joinDate  | datediff           | dateDiff - absolute difference between 2 dates e.g. currentCustomer.joinDate.dateDiff(currentTxn.date)==0                |
| currentCustomer | joinDate  | day                | day - day of the week, week starts on Sunday as 1 e.g. Terrific Tuesdays would be currentTxn.joinDate.day( )==3          |
| currentCustomer | joinDate  | isWeekday          | isWeekday - checks if the date is a weekday e.g. currentTxn.joinDate.isWeekday( )                                        |
| currentCustomer | joinDate  | isWeekend          | isWeekend - checks if the date is a weekend e.g. currentTxn.joinDate.isWeekend( )                                        |
| currentCustomer | joinDate  | isValid            | isValid - simply checks if a valid date is present in that field e.g. currentCustomer.joinDate.isValid( )                |
| currentCustomer | joinDate  | isAfter            | isAfter - checks if the attribute occurs after a defined date-time e.g. currentTxn.joinDate.isAfter(YYYY,MM,DD,HH,MM,SS) |
| currentCustomer | joinDate  | isHourBetween      | isHourBetween - scenarios like happy hours. hour in 24 hour format e.g. currentTxn.joinDate.isHourBetween(HH,HH)         |
| currentCustomer | joinDate  | isTimeBetween      | isTimeBetween - similar to happy hours, but when minutes also matter e.g. currentTxn.joinDate.isTimeBetween(HH,MM,HH,MM) |
| currentCustomer | joinDate  | dayOfMonth         | dayOfMonth - date of the month e.g. For offers on the first 5 days of each month                                         |
| currentCustomer | joinDate  | daysDiff           | daysDiff - same as dateDiff, but ignores the year. Useful for anniversary type promotions.                               |
| currentCustomer | joinDate  | daysDiffFromString | daysDiffFromString - same as daysDiff, but when you want to use an attribute that could be saved as a string             |
| currentCustomer | joinDate  | minutesDiff        | minutesDiff - absolute difference similar to dateDiff, but looks at minutes                                              |
| currentCustomer | joinDate  | Month              | month - month number is returned                                                                                         |
| currentCustomer | joinDate  | Year               | year - returns the year from the date e.g. currentCustomer.joinDate.year( )>=1981                                        |

***

## **Mobile**

**Profile :** currentCustomer\
**Attribute :** mobile\
**Type :** integer\
**Meaning :** Mobile number of a customer.\
**Sub-Attribute:** NA\
**Operators:** contains, exists, isEmpty, isNotNull, isNull, matches,notExists, “==”\
**Syntax:** currentCustomer.mobile.[Operators][Value]

<Table align={["left"]}>
  <thead>
    <tr>
      <th>
        Example: Write a rule to check if the mobile number of the current customer contains 98939756.
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Profile: Current Customer
        Attribute: mobile
        Operator : contains()
        Rule: currentCustomer.mobile.contains(“98939756”)
      </td>
    </tr>
  </tbody>
</Table>

<Table align={["left"]}>
  <thead>
    <tr>
      <th>
        Example: write a rule to check if the current customer mobile number exists.
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
         Profile: Current Customer
        Attribute: mobile
        Operator : exists
        Rule: currentCustomer.mobile.exists()
      </td>
    </tr>
  </tbody>
</Table>

***

## **isLoyal**

**Profile :** currentCustomer\
**Attribute :** isLoyal\
**Type :** Boolean\
**Meaning :** returns True, if the current customer is registered in the brand's loyalty program\
**Sub-Attribute:** NA\
**Syntax:** currentCustomer.isLoyal()\
**Example: currentCustomer.isLoyal==true**

<Table align={["left"]}>
  <thead>
    <tr>
      <th>
        Example: write a rule to check if the current customer isLoyal or not.
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Profile: Current Customer
        Attribute: isLoyal()
        Type: Boolean
        Rule: currentCustomer.isLoyal()
      </td>
    </tr>
  </tbody>
</Table>

***

## **hasInstoreProfile**

**Profile :** currentCustomer\
**Attribute :** hasInstoreProfile\
**Type :** Boolean\
**Meaning :** returns True, if the current customer is registered and has a instore Profile\
**Sub-Attribute:** NA\
**Syntax:** currentCustomer.hasInstoreProfile()\
**Example: currentCustomer.hasInstoreProfile==true**

<Table align={["left"]}>
  <thead>
    <tr>
      <th>
        Example: write a rule to check if the current has a Instore Profile
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Profile: Current Customer
        Attribute: hasInstoreProfile
        Type: Boolean
        Rule: currentCustomer.hasinstoreProfile()
      </td>
    </tr>
  </tbody>
</Table>

***

## **hasWeChatProfile**

**Profile :** currentCustomer\
**Attribute :** hasWeChatProfile\
**Type :** Boolean\
**Meaning :** returns True, if the current customer has a WeChat Profile\
**Sub-Attribute:** **NA\
Syntax: currentCustomer.hasWeChatProfile()\*\***

<Table align={["left"]}>
  <thead>
    <tr>
      <th>
        Example: write a rule to check if the current has a Instore Profile
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Profile: Current Customer
        Attribute: hasWeChatProfile
        Type: Boolean
        Rule: currentCustomer.hasWeChatProfile()
      </td>
    </tr>
  </tbody>
</Table>
