---
title: AMJ 2023 | Loyalty+ Release notes
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
In this release notes section of "AMJ23 - Loyalty+", all the items which have been releases in AMJ quarter will be available. Each of the items will have a link for detailed documentation link whenever needed. 

## Advanced delay accrual strategy:

With this enhancement, brands now will have the ability to configure their delay accrual strategy either 'as per the original bill date' or 'as per the processing date'. Brands have to configure this option by going to advanced settings.

More details here: [link](https://docs.capillarytech.com/docs/loyalty-org-settingsdf#setting-delay-accural-based-on-bill-date-or-processing-date:~:text=Click%20Done.-,Setting%20delay%20accural%20based%20on%20bill%20date%20or%20processing%20date,-We%20all%20know)

## Ability to create / edit / delete custom fields:

With this enhancement, now users can directly create / edit / delete custom fields in a very simple way. For this, they have to go to "points promotion" under settings of Loyalty+ module. This enhancement is intended to provide enhanced user experience to users with respect to custom fields accessibility.

More details here: [link](https://docs.capillarytech.com/docs/loyalty-settings-1#:~:text=Loyalty%2B%20settings%20page.-,Creation/deletion/editing%20of%20custom%20fields.,-First%20of%20all)

## Handling of rejected transactions:

Often times, what happens is, Capillary receives some transactions which might have discrepancies. It can be like: a line-item which is not present in our tables, a payment tender which is not present in our system, etc..  With this enhancement, we have created a mechanism which allows transparent & smooth processing of these transactions with a proper flow. This helps brands to handle the loyalty management of their customers without any gaps.

More details here: [link](https://docs.capillarytech.com/docs/handling-of-rejected-transactions)

## Limitation on the size of the csv file in milestone audience upload:

This is one more enhancement we have made keeping in mind the user experience. Now there is a limit of 25 MB on the size of the file that can be uploaded in the "audience upload" flow of milestones. This is because, with bigger files the upload process is getting affected & this 25 MB is the value we have arrived post proper observation.

More details here: [link](https://docs.capillarytech.com/docs/target-loyalty#getting-started:~:text=in%20the%20milestone.-,Getting%20started,-Create%20a%20Milestone)

## Explode API's enhancements

1. Earlier, the Ledger explode APIs were implemented for the following events : 

* New Bill
* CustomerRegistration
* TransactionAdd
* GroupTransactionAdd
* GenericEvent
* CustomerPromotionImport
* BillPointsPromotionImport
* LineitemsPointsPromotionImport
* TargetCompleted
* Goodwill allocation
* Points redemption
* Points transfer

This enhancement will add new event i.e Transaction Return event

2. The expiry type field for both the regular and promotional points has been added to all the corresponding events. This field will indicate a rolling or fixed points expiry type. 
3. The Explode apis will now fetch the source from which the customers have purchased (app, instore, website) for brands to track purchase behaviour's for brand strategies. 
4. The Explode apis will now fetch the Loyalty Promotion names for the points imported from the following Profiles
   1. CustomerPromotionImport
   2. BillPointsPromotionImport
   3. LineitemsPointsPromotionImport
5. For the Goodwill event, now fetch the reason field for points allocation, for brands to know the selected reason for manually added points. 
6. For Events with promised points, a maxConversionDate  field has been added which gives the date when the promised points will be converted to regular points.

More details here [link](https://docs.capillarytech.com/reference/get-customer-ledger-information)

## Milestones in the events tab of member-care

After this enhancement, brands/POS employees/IM/etc.. can simply use Membercare to know in detail about the milestones of a customer. This helps greatly enhance the end-user experience and decreases the number of tickets just to know deep details of a milestone.

A full read will be available, [here](https://docs.capillarytech.com/docs/milestones-in-events)

## Behavioral events - Card series

Behavioral events are one of the ways brands use to reward their customers for exhibiting a specific behavior. Once they are configured, whenever a customer exhibits that behavior, they will be triggered and the customer will get the benefits.

Until now, while configuring behavioral events, brands don’t have the ability to create them with respect to card series as an identifier. This became a problem for organizations that are using card series-based loyalty programs.

After this enhancement, now those brands will be able to create behavioral events with respect to card series too. How that works is, while creating the BE, the card number will present as an option for identifier type. Using this, even card series-based organizations can provide benefits and rewards to their customers based on the card series.

Following is the config page where card number can be given:

![0786258 Screenshot 2023 06 12 at 11](https://files.readme.io/0786258-Screenshot_2023-06-12_at_11.10.09_AM.png)

Implementation help, [here](https://docs.capillarytech.com/docs/behavioral-loyalty#ability-to-connect-behavioral-event-to-a-specific-card-series)

## Decoupling events notification from communication configuration

Until now, event notification & communication channel configuration in Loyalty workflows used to be tight coupled with each other for the following actions. They are:

1. Points expiry reminder event
2. Tier downgrade reminder event
3. Tier download on return reminder event

Because of this, what was happening was, if a brand has not configured the communication channel for the above 3 actions, event notifications for the same were not being sent. This led to a very inconvenient end-user experience as none of the users got reminders for the above events.

After this enhancement, both the event notification mechanism and communication channel configuration for the above actions have been decoupled. So even if a brand has not configured them, still the event notification for the above-mentioned actions will be sent. For this enhancement, no changes are made in either the user flow in the UI or in the APIs. This is purely a backend change.

Event notification payload of the above can be found, [here](https://docs.capillarytech.com/docs/event-schema-payload)

## Return details in GetCustomerDetails API

All this time, the getCustomerDetails API is being used to get information about various activities regarding the customers like promotional points, expired points, expiry schedules, subscriptions, etc...

However, this API doesn’t have the ability to get information on one of the most important activities . i.e., returned points activity. Because of this, brands are depending on other APIs to get those details indirectly wherever possible. Even though that is achieving the result, not the best way to follow.

After this enhancement, now ‘returnedPoints’ is also added as a query parameter to this API. So from now, when GetCustomerDetails is called with embed = “retunedPoints”, information on the return points will be available in the output. 

The following details can be found regarding returns now:

![e4bd3b2 Screenshot 2023 06 08 at 5](https://files.readme.io/e4bd3b2-Screenshot_2023-06-08_at_5.49.55_PM.png)

API documentation is, [here](https://docs.capillarytech.com/reference/get-customer-details-2).

## Non-English support for Milestone group name & Milestone name

We are now providing the ability to save the Milestone group name & Milestone name in a non-English language for all the organizations. This means that, now brands don't have to depend only on English for naming convention in Milestones, instead they can provide the name in any language they want.

Milestone group name in non-English:

![5c22bed Screenshot 2023 07 12 at 9](https://files.readme.io/5c22bed-Screenshot_2023-07-12_at_9.58.18_AM.png)

Milestone name in non-English:

![eb0ba57 Screenshot 2023 07 12 at 9](https://files.readme.io/eb0ba57-Screenshot_2023-07-12_at_9.58.34_AM.png)
