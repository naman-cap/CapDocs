---
title: Return Transactions Standard Export Template
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
This template is based on the fact Return Bill Line Items

It contains details of transaction returns of any type. For example, partial return, full return, exchange of items (mixed transaction). However, it is required to specify parent bill id when returning an item. The parent bill id is the bill id of the actual transaction of the item. If the parent bill id is left blank, you will see the column blank in the export file.

## Measures

| Measure                                 | Description                                                                                                                                         |
| --------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| auto\_update\_time\_returned\_bill      | Date and time (in Unix timestamp) when the return bill level information is updated.                                                                |
| auto\_update\_time\_returned\_lineitem  | Date and time (in Unix timestamp) when the return bill line item information is updated.                                                            |
| bill\_amount                            | The net bill amount after returning a purchase - Bill amount - the cost of return item.                                                             |
| bill\_id                                | The unique id generated for a particular return bill internally in the capillary system.                                                            |
| bill\_number                            | The unique number of a particular return bill which is either generated at the POS machine or provided manually.                                    |
| exchange\_bill\_id                      | The unique id generated internally in the Capillary system for the mixed transaction (item exchange).                                               |
| issued\_bill\_id                        | Unique parent bill id of that particular transaction.                                                                                               |
| issued\_lineitem\_id                    | Unique parent line-item id for that particular line-item of a transaction.                                                                          |
| parent\_bill\_number                    | Actual transaction number of the return item used in case of exchange. This will be blank if the parent bill number is not mentioned during return. |
| item\_code                              | Unique item code of the returned line item.                                                                                                         |
| line\_item\_amount                      | Net amount of the line item including discount and tax.                                                                                             |
| line\_item\_discount                    | Discount given for that particular line item.                                                                                                       |
| line\_item\_id                          | Unique internal reference id for the line item.                                                                                                     |
| line\_item\_value                       | Price of the line item excluding discount and tax.                                                                                                  |
| notes                                   | Any specific note mentioned for a transaction return.                                                                                               |
| quantity                                | Quantity of a line-item returned.                                                                                                                   |
| rate                                    | Purchase price of the return item - the actual cost after availing offers and discounts.                                                            |
| parent\_bill\_outlier\_status           | Outlier status of the parent bill id of the return bill.                                                                                            |
| parent\_bill\_lineitem\_outlier\_status | Outlier status of the bill line item.                                                                                                               |

## Dimensions

| Dimension Name                                                                                             | Description                                                                                                           |
| ---------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| [Store Hierarchy](https://docs.capillarytech.com/docs/dimension-tables#zone-till) (zone till)              | Identifier for the store.                                                                                             |
| [Concept Hierarchy](https://docs.capillarytech.com/docs/dimension-tables#zone-till)                        | Identifier for the concept.                                                                                           |
| [Ou Hierarchy](https://docs.capillarytech.com/docs/dimension-tables#zone-till)                             | Identifier for the organization unit.                                                                                 |
| [Returned Type](https://docs.capillarytech.com/docs/dimension-tables#return-type)                          | Identifier for the return type.                                                                                       |
| [Product](https://docs.capillarytech.com/docs/dimension-tables#item)                                       | Product details such as color, style, description, price, image url, item code, category, sub-category, item id, etc. |
| [Product Attributes](https://docs.capillarytech.com/docs/dimension-tables#item)                            | Product attributes such as description, item Sku, and item Id.                                                        |
| [Date](https://docs.capillarytech.com/docs/dimension-tables#date)                                          | Date attributes.                                                                                                      |
| [Membership](https://docs.capillarytech.com/docs/dimension-tables#membership-type)                         | Details such as membership type, and Id.                                                                              |
| [User](https://docs.capillarytech.com/docs/dimension-tables#users-users)                                   | User details such as user id, source, slab name, external id, fraud status, mobile, email, etc.                       |
| [User Segments](https://docs.capillarytech.com/docs/dimension-tables#users-users)                          | Segment details of the customers such as valued customer, lapsed customer.                                            |
| [User Attributes](https://docs.capillarytech.com/docs/dimension-tables#users-users)                        | User attributes such as total visits, recent view.                                                                    |
| [Time](https://docs.capillarytech.com/docs/dimension-tables#time)                                          | Time attributes.                                                                                                      |
| [Parent Bill Lineitem Outlier Status](https://docs.capillarytech.com/docs/dimension-tables#outlier-status) | Gives the outlier status of the parent bill line item.                                                                |
| [Parent Bill Outlier Status](https://docs.capillarytech.com/docs/dimension-tables#outlier-status)          | Outlier status of the parent bill.                                                                                    |
| [Bill Outlier](https://docs.capillarytech.com/docs/dimension-tables#outlier-status)                        | Outlier status of the bill.                                                                                           |
| [Latest Updated Date](https://docs.capillarytech.com/docs/dimension-tables#date)                           | Last updated date details.                                                                                            |
| [Latest Updated Time](https://docs.capillarytech.com/docs/dimension-tables#time)                           | Last updated time details.                                                                                            |
