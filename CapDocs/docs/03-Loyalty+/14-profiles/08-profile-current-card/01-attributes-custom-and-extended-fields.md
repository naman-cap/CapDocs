---
title: Attributes - Custom and Extended Fields
deprecated: false
hidden: false
metadata:
  robots: index
---
# Custom Field Attribute Usage for Current Card

## customFieldValueIncludes

Check if a customer's card contains a specific value in a custom field.

### Profile

`currentCard`

### Syntax

```js
currentCustomer.customFieldValueIncludes("CustomFieldName", "CustomFieldValue")
```

### Examples

| Example 1: Check if the customer's card type contains "platinum" to identify premium cardholders |
| :----------------------------------------------------------------------------------------------- |
| `currentCustomer.customFieldValueIncludes("card_type", "platinum")`                              |

| Example 2: Verify if the customer's card status field includes "active" to ensure the card is currently valid |
| :------------------------------------------------------------------------------------------------------------ |
| `currentCustomer.customFieldValueIncludes("card_status", "active")`                                           |

| Example 3: Check if the customer's card was issued by "SBI" bank to apply bank-specific rules or offers |
| :------------------------------------------------------------------------------------------------------ |
| `currentCustomer.customFieldValueIncludes("issuer_bank", "SBI")`                                        |

***

## customFieldValueExcludes

Check if a customer's card does **not** contain a specific value in a custom field.

### Profile

`currentCard`

### Syntax

```js
currentCustomer.customFieldValueExcludes("CustomFieldName", "CustomFieldValue")
```

### Examples

| Example 1: Check if the customer's loyalty card membership level does **not** contain "basic" to identify premium members only |
| :----------------------------------------------------------------------------------------------------------------------------- |
| `currentCustomer.customFieldValueExcludes("membership_level", "basic")`                                                        |

| Example 2: Verify that the customer's loyalty card status does **not** include "suspended" to ensure the card is active for rewards |
| :---------------------------------------------------------------------------------------------------------------------------------- |
| `currentCustomer.customFieldValueExcludes("card_status", "suspended")`                                                              |

| Example 3: Check if the customer's loyalty card does **not** have "points\_frozen" restriction to allow points redemption |
| :------------------------------------------------------------------------------------------------------------------------ |
| `currentCustomer.customFieldValueExcludes("program_restrictions", "points_frozen")`                                       |

***

## extField\_`extended_field_name`

Check if a customer's loyalty card extended field matches a specific value or condition.

### Profile

`currentCard`

### Operators

`contains`, `exists`, `isEmpty`, `isNotNull`, `isNull`, `matches`, `notExists`, `isValidDate`

### Syntax

```js
currentCard.extField_[field_name].operator("value")
```

<Note title="Note">
Only extended fields enabled for the organization are available in the drop-down menu.
</Note>

### Examples

| Example 1: Check if the `card_requested_by` field contains "Manager" to identify cards requested by any manager |
| :-------------------------------------------------------------------------------------------------------------- |
| `currentCard.extField_card_requested_by.contains("Manager")`                                                    |

| Example 2: Verify if the `date_of_card_activation_for_first_time` field contains a valid date format to ensure data integrity |
| :---------------------------------------------------------------------------------------------------------------------------- |
| `currentCard.extField_date_of_card_activation_for_first_time.isValidDate()`                                                   |

| Example 3: Check if the `vehicle_number` field is not null to identify cards linked to vehicles in automotive loyalty programs |
| :----------------------------------------------------------------------------------------------------------------------------- |
| `currentCard.extField_vehicle_number.isNotNull()`                                                                              |