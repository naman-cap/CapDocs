---
title: Inside Workflows
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
Right now, the linking and delinking of customers is supported through the Activities: TransactionAdd, CustomerRegistration, CouponRedemption, TransactionUpdate, TargetCompleted and the behavioral events that you create. In each of these, you can create rules saying the customer would be included in the supplementary or partner program (you can create an SKU for the membership fee and create a rule saying that this SKU should be included in the customer's basket).

The Action to be used here is the "Initiate Supplementary Membership Action".

* You need to select the Partner Program from the list.
* Select Tier Action from the options: Slab Upgrade, Renew Slab, No Action.
* You can also configure Communication for this here.

You can also achieve the use case where the customer reaches a certain milestone and then they are taken into the program. This can be achieved using Targets. In the TargetCompleted Event, you can find the same Action as above and then follow the same steps as above in addition to writing a respective rule.
