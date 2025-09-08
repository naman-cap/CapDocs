---
title: Payment Mode Standard Export Template
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
The Payment Mode template is based on the **payment\_details** fact

* Allows you to export payment data, including the modes of payment used.
* Granularity at bill id level.
* Only a detailed breakdown of payments made, not a summarized one.
* Exports the payment mode details for each transaction. You can export transaction-level data, including a breakdown of payment modes.
* A bill can be paid through cash, credit card, gift card, points or coupon redemption or some other means either fully or partially. 

## Measures

| Measure                    | Description                                                                                                                        |
| -------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| bill\_amount               | The net transaction amount.                                                                                                        |
| bill\_discount             | The total discount on the bill amount.                                                                                             |
| bill\_id                   | A unique id generated for the bill internally by capillary system. It helps in differentiating one customer's bill with the other. |
| central\_gst               | Central GST (Goods and Service Tax) amount levied on the bill. GST is charged at state level and central level.                    |
| integrated\_gst            | GST (Goods and Service Tax) amount levied by the central government in case of inter-state supplies and imports.                   |
| payment\_mode\_amount      | Amount paid through a specific payment mode.                                                                                       |
| payment\_mode\_details\_id | Unique id associated to a specific payment mode.                                                                                   |
| quantity                   | Quantity of items purchased.                                                                                                       |
| state\_gst                 | State GST (Goods and Service Tax) amount levied on the bill. GST is charged at state level and central level.                      |
| tax\_amount                | Total tax levied at the bill level.                                                                                                |

## Dimensions

| Dimension Name                                                                                    | Description                                                                                     |
| ------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| [Payment Mode Attribute](https://docs.capillarytech.com/docs/dimension-tables#payment-attributes) | Gives the payment mode attributes such as the payment attribute name, value, and id.            |
| [User](https://docs.capillarytech.com/docs/dimension-tables#users-users)                          | User details such as user id, source, slab name, external id, fraud status, mobile, email, etc. |
| [User Segments](https://docs.capillarytech.com/docs/dimension-tables#users-users)                 | Segment details of the customers such as valued customer, lapsed customer.                      |
| [User Attributes](https://docs.capillarytech.com/docs/dimension-tables#users-users)               | User attributes such as total visits, recent view.                                              |
| [Nps](https://docs.capillarytech.com/docs/dimension-tables#nps-score)                             | Gives the Net Promoter Score (from 1 to 10) given by the customer.                              |
| [Order Channel](https://docs.capillarytech.com/docs/dimension-tables#order-channel)               | Identifier for the order channel with which the order is placed, such as online or in-store.    |
| [Source](https://docs.capillarytech.com/docs/dimension-tables#source-type)                        | Identifier for the source of the bill, e.g., instore, e-comm, newsletter, campaigns.            |
| [Loyalty](https://docs.capillarytech.com/docs/dimension-tables#loyalty-type)                      | Indicates the loyalty type of the customer.                                                     |
| [Date](https://docs.capillarytech.com/docs/dimension-tables#date)                                 | Date attributes of the payment.                                                                 |
| [Store Hierarchy (zone till)](https://docs.capillarytech.com/docs/dimension-tables#zone-till)     | Identifier for the store, till id.                                                              |
| [Concept Hierarchy](https://docs.capillarytech.com/docs/dimension-tables#zone-till)               | Identifier for the concept.                                                                     |
| [Ou Hierarchy](https://docs.capillarytech.com/docs/dimension-tables#zone-till)                    | Identifier for the organization unit.                                                           |
| [Time](https://docs.capillarytech.com/docs/dimension-tables#time)                                 | Time attributes of the payment.                                                                 |
| [Dim Bill Type Id](https://docs.capillarytech.com/docs/dimension-tables#bill-type)                | Captures the type of bill for which the payment has been made, e.g., Regular, Not interested.   |
| [Added On Date](https://docs.capillarytech.com/docs/dimension-tables#date)                        | Links to the date dimension.                                                                    |
| [Payment Mode](https://docs.capillarytech.com/docs/dimension-tables#payment-mode)                 | Includes the payment mode label and Id.                                                         |
| [Bill Outlier](https://docs.capillarytech.com/docs/dimension-tables#outlier-status)               | Outlier status of the bill.                                                                     |
| [Cashier Id](https://docs.capillarytech.com/docs/dimension-tables#cashier)                        | Identifier of the cashier.                                                                      |
| [Repeat](https://docs.capillarytech.com/docs/dimension-tables#repeat-status)                      | Shows if the customer has made previous purchases or if it's their first transaction.           |
| [Latest Updated Date](https://docs.capillarytech.com/docs/dimension-tables#date)                  | Latest date when the data is updated.                                                           |
| [Latest Updated Time](https://docs.capillarytech.com/docs/dimension-tables#time)                  | Latest time when the data is updated.                                                           |
