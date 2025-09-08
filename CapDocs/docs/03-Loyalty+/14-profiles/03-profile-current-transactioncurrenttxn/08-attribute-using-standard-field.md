---
title: Attribute - Note
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
**Profile** : currentTxn\
**Attribute** : Note\
**Type** : String\
**Meaning**: Transaction level notes specified by the cashier during the transaction\
**Sub-Attribute:** NA\
**Operators:** contains, exists, isEmpty, isNotNull, isNull, matches,notExists, “==”\
**Syntax: currentCustomer.notes.[Operators][Value]**\
**Example**: currentTxn.notes.contains("FTCR")

| Profile    | Attribute | Sub-Attribute | Operator                                                                                                              | Expression and Example                      |
| :--------- | :-------- | :------------ | :-------------------------------------------------------------------------------------------------------------------- | :------------------------------------------ |
| currentTxn | note      | NA            | contains -  used to see if the string contains the defined value                                                      | currentTxn.notes.contains("FTCR")           |
| currentTxn | note      | NA            | exists - Some proper value exists for this string (i.e. source passed a value that was not an empty string)           | currentTxn.notes.exists("Special discount") |
| currentTxn | note      | NA            | isEmpty -  The string is either Null or Empty                                                                         | currentTxn.notes.isEmpty()                  |
| currentTxn | note      | NA            | isNotNull - checks if the string is NOT Null i.e. some value was passed from the source (even an empty string counts) | currentTxn.notes.isNotNull()                |
| currentTxn | note      | NA            | isNull - checks if the string is Null i.e. it was not passed from the source                                          | currentTxn.notes.isNull()                   |
| currentTxn | note      | NA            | matches - this is used to perform regular expression-based matching on the string                                     | currentTxn.notes.matches("Delay\*")         |

| Example: write a rule to check if the current transaction has a note regarding "discount applied". |
| :------------------------------------------------------------------------------------------------- |
| Rule: currentTxn.note.contains("discount applied)                                                  |
