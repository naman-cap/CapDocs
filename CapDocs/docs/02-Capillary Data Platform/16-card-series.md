---
title: Card
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
## Card Series Overview

A card series represents a different type of card. For example, you can have card series for Digital and Physical Card. A card series contains information such as card series name, card type, card number configuration details, and expiry details. You can either have auto-generated cards or manually generated cards.  

Card linked loyalty program: Card linked loyalty enables creating loyalty programs for each card series. This is applicable only for MLP enabled orgs. If a loyalty program is created based on card series, you cannot create another program based on zone or concept. 

## Features

The following are the features of the Card Series module.

* Create physical and digital card series for an org.
* [Create a card series](https://capillary-documentation.readme.io/docs/create-card-series) with either auto-generated card numbers or manually generated card numbers.
* Auto-assign card numbers to customers during registration or first transaction after card-series creation.
* Manually issue cards to customers through [member care](https://docs.capillarytech.com/docs/manage-cards) and integration platform (APIs).
* Issue one or more cards to customers from a card series.
* Create a separate [loyalty program for each card series](https://docs.capillarytech.com/docs/create-a-multi-loyalty-program).

## New terminologies

There are a few terminologies that you need to know before starting card configuration.

* **Card series**: The card series represents different card types of an organization. For example. Value card, Premium card, Digital card, Physical card, and more. A card series stores information such as card series name, how to create card numbers for the card series, whether the card can expire and after how many days, and more. The following is the information stored in the card series.

  * Card series name
  * Card series code
  * Card number generation configuration
  * Card expiry configuration

* **Card**: This represents a card from a card series issued to a customer. A card stores information such as when the card was issued, when will it expire, from which store or source account the card was issued, and more. A customer can have multiple cards of the same card series. The following information is stored at the card level.

  * Card expiry date
  * Card issue date
  * Card status
  * Store code (where the card is registered)

* **Card status**: A card has a system-defined status code and a user-defined status label. Internal validations and out-of-box functionalities such as card-related KPIs use status codes and status labels. It also allows following different naming conventions to define card statuses. You can map multiple status labels to a status code. The system supports the following status codes.

  * **NOT\_ISSUED**:  This card is not issued to any customer
  * **ACTIVE**:  The card is in an active status.
  * **SUSPENDED**: The card is temporarily blocked but you can reactivate it. If the card number is used as an identifier, you cannot make any transaction or redeem points and vouchers using the card in this status.
  * **DELETED**: You can modify nothing in a card with this status. You cannot use this card in transactions, points, or voucher redemption.
  * **EXPIRED**: You cannot use this card in transactions, points, or voucher redemption. You cannot change the status as well.\
    The following are examples of status labels.

    * Card Assigned status label mapped to ACTIVE status code
    * Card Blocked status label mapped to SUSPENDED status code.
    * New Card status label mapped to NOT\_ISSUED status code.
    * Card Generated Card Printed and Card Distributed to Store’ multiple status labels mapped to NOT\_ISSUED status code.
    * Card Permanently Deleted’ status label mapped to DELETED status code.
    * Card Expired status label mapped to EXPIRED status code.

* **Card issue**: Card issue means linking cards to customers. The following are the three possible scenarios that can happen during registration or post-registration. For details, see [issue card to a customer](https://docs.capillarytech.com/docs/manage-cards)

  * A digital or virtual card is issued to the customer.
  * A physical card generated in Capillary is issued to the customer.
  * A physical card not generated in Capillary is issued to the customer.
