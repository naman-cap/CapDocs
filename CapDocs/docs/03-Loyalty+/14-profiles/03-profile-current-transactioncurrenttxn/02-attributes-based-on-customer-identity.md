---
title: Attributes - Transaction Number/ID
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
## **Attribute : Number**


**Profile**: Current Transaction (currentTxn)  
**Data Type**: Integer Alphanumeric  
**output Type**: Boolean (True/False)  
**Operators**: contains, exists, isEmpty, isNotNull, isNull, matches, and notExists.  
**Description**: Transaction number/ID of the current transaction.  
**Syntax: currentTxn.number.[SUB-ATTRIBUTES/OPERATORS][VALUE]**  
**Example**: currentTxn.number.matches(“billNum20170207120113”)

| Profile    | Attribute | Operators | Description of Operators                                                                                                         |
| :--------- | :-------- | :-------- | :------------------------------------------------------------------------------------------------------------------------------- |
| currentTxn | Number    | contains  | Contains - used to see if the string contains the defined value, so it helps to check if a substring is a part of String or not. |
| currentTxn | Number    | exists    | Some proper value exists for this string (i.e. source passed a value that was not an empty string)                               |
| currentTxn | Number    | isEmpty   |                                                                                                                                  |
| currentTxn | Number    | isNotNull | checks if the string is Not Null i.e. it was passed from the source in the Payloads.                                             |
| currentTxn | Number    | isNull    | checks if the string is Null i.e. it was not passed from source in the Payloads.                                                 |
| currentTxn | Number    | matches   | This is used to perform regular expression based matching on the string .                                                        |

| Example : write an expression to reward points if the current Transaction number contains the substring “PNR122” |
| --- |
| Profile: currentTxn (i.e Current Transaction)  
Attribute : Number  
SubAttribute: contains  
Rule : currentTxn.number.contains(“PNR122”)   |

| Example: write an expression to check that the current Transaction number passed in the payloads is not null, and if the value exists send the communication that event is being registered. |
| --- |
|  Profile: currentTxn (i.e Current Transaction)  
Attribute : Number  
SubAttribute: isNotNull  
Rule : currentTxn.number.isNotNull(“ ”)  
  
If this condition is TRUE, an action will take place to send an  SMS. |

| Example: As a marketing manager, I want to allocate points to all the customers whose transaction number has a particular series ID, i.e PNR123. |
| --- |
| Profile: currentTxn (i.e Current Transaction)  
Attribute : Number  
SubAttribute: matches  
Rule : currentTxn.number.matches(“PNR123”)  
**Matches will perform a regex match between the customer number passed via payloads and the sub string we have passed in the matches.** |

| Example : write an expression for sending a SMS to the customer, whose transaction number is “TRN40” AND “PNR122”. |
| --- |
| Profile: currentTxn (i.e Current Transaction)  
Attribute : Number  
SubAttribute: exists  
Rule : currentTxn.number.exists(“TRN40”)&&(currentTxn.number.exists(“PNR122”))  
If this condition is TRUE, an action will take place to send an  SMS. |