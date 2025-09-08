---
title: 'Profile : Current Line Item'
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
**What is a Line Item?**\
Line items in a bill/transaction refer to the individual products or services that are listed on an invoice, along with any quantities, rates, and prices that pertain to them.

**Profile : currentLineItem**\
currentLineItem (Line Item Profile) - In Transaction events, this profile allows you to specify conditions relating to properties of individual items ***(note: This only works with line item unrolling)***

## Attributes - Line Item Information

| Attribute       | Description                                                  | Link                                                                                            |
| :-------------- | :----------------------------------------------------------- | :---------------------------------------------------------------------------------------------- |
| code            | Item code of the line item as assigned in the inventory.     | [Learn More](https://docs.capillarytech.com/docs/attribute-line-item-information#code)          |
| description     | The description specified for the line item in the inventory | [Learn More](https://docs.capillarytech.com/docs/attribute-line-item-information#description)   |
| doesItemMatch() | Check if an item code matches the given code                 | [Learn More](https://docs.capillarytech.com/docs/attribute-line-item-information#doesitemmatch) |

## Attributes - discount and discPercentage

| Attributes     | Definition                                     | Link                                                                                                                      |
| :------------- | :--------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------ |
| discount       | Discount at line-item level                    | [Learn More](https://docs.capillarytech.com/docs/attribute-discount-1#discount)                                           |
| discPercentage | The discount percentage at the line-item level | [Learn More](https://docs.capillarytech.com/docs/attribute-discount-1#discpercentage-line-item-level-discount-percentage) |

## Attributes - Line Item Properties

| Attributes | Definition                        | Link                                                                                    |
| :--------- | :-------------------------------- | :-------------------------------------------------------------------------------------- |
| qty        | Quantity of a line item purchased | [Learn More](https://docs.capillarytech.com/docs/attributes-line-item-properties#qty)   |
| value      | The selling price of a line item  | [Learn More](https://docs.capillarytech.com/docs/attributes-line-item-properties#value) |
