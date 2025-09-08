---
title: JFM 2022 | Loyalty+ Releases
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
## March Releases

### Code linked promotions

Issue promo codes to your loyal or anonymous customers via partners or physical coupons to improve engagement & acquisition. 

For example, ZN34C - Get 10% off on a bill of more than 100$ 

#### About Promo Codes

* **Promo code-linked promotions** are mainly for driving coalition-led acquisition or incentivizing users by issuing physical coupons that can be redeemed irrespective of the customer’s loyalty status. These can also be used as influencer codes.
* You might have come across cases where you get physical coupons for a brand different from the one you are shopping at. It could be sister brands like Reliance digital giving coupons for Reliance footwear or Dominos giving you a Shell coupon. 

Presenting a new type of Cart Promotion called **Code Linked Promotions** in the **Promotion Engine**. As the name suggests, brands can now issue Promotional Codes to the customers which can be availed at the time of checkout or billing based on code validation.

![d08f543 E2B86eeEI3LvycX7mcXpdA4137h7ibdBPg](https://files.readme.io/d08f543-E2B86eeEI3LvycX7mcXpdA4137h7ibdBPg.png)

* These are limited-time offers redeemable once and distributed via physical paper discount vouchers.
* These are generally distributed directly in the stores when a customer makes a purchase / through email campaigns which can then be availed on e-comm channels or in-stores / discounts through their coalition partners on various criteria.
* Any type of promotion can be linked to this code eg. Combo promotion, fixed dollar discounts, free product, bundled pricing, etc. 
* The Promo codes can be generated in two ways, either **automatically** or **can be uploaded by the brand**. 

![f23271d zhRCVYJANY6R3cmpvUHjWzWxWuHeFIvIrQ](https://files.readme.io/f23271d-zhRCVYJANY6R3cmpvUHjWzWxWuHeFIvIrQ.png)

These Promo Codes -

* become invalid once the promotion expires.
* apply to both loyalty and non-loyalty customers.
* can be redeemed multiple times as per set restrictions. 

##### Generating additional promo codes once the promotion is created:

![a33a0a3 gIqUZh0zQvxCq58sQq3gV2koNZmhZfJBwA](https://files.readme.io/a33a0a3-gIqUZh0zQvxCq58sQq3gV2koNZmhZfJBwA.png)

##### Converting a physical promo code to a digital promo code for auto-apply on the next checkout :

This is achieved through a **linkcode API** wherein brands would have to send in code, customerId, and promotion mode. 

1. Endpoint - /v1/promotions/code/link 
2. payload

#### Promo code redemption restrictions

Brands can restrict the number of times a code can be redeemed based on the below parameters.

* **Use Case**: The trending **Influencer Marketing** can be successfully handled through these promotion restrictions. Brands can promote themselves on various social media platforms through influencers, who can further gift these promo codes to the customers. Brands can enable a limit on the number of times a promo code can be used and limit the number of transactions a promo code can allow.\
  For example, Mansi is an **Instagram influencer**. The brand provides her with a code called **HOLIMAN100** which she can provide to her followers. But the brand can put a restriction saying only **1000 redemptions are allowed**. So, the first 1000 users to use this code will get the benefit

![a9cb3fe NW5Wg75MdYFtE0mRKcjy6 5s6Qgkucewag](https://files.readme.io/a9cb3fe-NW5Wg75MdYFtE0mRKcjy6_5s6Qgkucewag.png)

For details on how to configure Code linked promotions, see [here](https://docs.capillarytech.com/docs/create-cart-or-catalog-promotions).

#### Future Scope

The users will be able to view the status of a particular promo code on Member Care including redemption details and transaction details.

### Points ledger

Points as an incentive are treated by customers and brands as currency within the closed ecosystem of the brand and its affiliates. Within this ecosystem, there exists a multitude of credits, debits, and adjustments that impact this “pool” of points within a customer’s account. Hence there exists a distinct need for a brand and the customer to see the list of all events listed and grouped in some logical manner that allows them to holistically make sense of what has happened in the account.

Furthermore, enterprises are leveraging app-based loyalty programs that drive superior engagement with customers, particularly Conglomerate programs and B2B Loyalty programs. In these scenarios, brands seek to provide users greater transparency about their points balances with full earn and burn ledger. This helps minimize inbound support queries from customers about their points details. These ledgers also act as engagement opportunities with the customer as they build this transparency.

#### Problem Statement

* There is no unified source of information to ascertain all the credit and debit impacts on a user’s points account.
* There is no way to paginate all this information in a proper chronological order in an app or website.
* There is no way to search for or fetch a narrow range of information related to a user’s points accounts.
* Owing to complex operations and adjustments, the direct impact on a user's points account is not always easy to determine.

#### Solution

A points ledger was developed to address these problems for the marketing user and to act as a robust bookkeeping system that increases transparency, and audit, and reduces chances for error. We now allow the option for a user to fetch this Ledger via GET APIs.

#### API to fetch Points Ledger Entries

1. This API allows the user to fetch a list of events and the ledger entries corresponding to those events.
2. The API supports pagination with a maximum allowed page size of 10.
3. The API supports filtering options such as:

* Event Source (e.g. INSTORE, E-COMMERCE, WEBSITE, TMALL, etc.)
* Till ID
* Date Range (By default it returns for the last 7 days)
* Entry type (Credit, Debit)
* Points Category (Regular, Promised, or Trigger-based)

4. This API provides the following information:

* Basic details of the customer
* Page related information
* Ledger entries with:\
  a. Information on the event\
  b. The date-time when the entry was created, along with a unique event log id\
  c. The nature of the transaction (i.e. credit or debit)\
  d. The program and points account that is affected\
  e. The actual points impact\
  f. The till and store where the event occurred

> 📘
>
> * For details on the API structure and how to use it, see here.

### API to fetch Points Ledger Closing Balance

* The API allows the user to fetch the closing balance for a particular ledger view
* The user can provide the same query parameters used to fetch Ledger Entries and they would get the closing balance as of the last entry in that ledger.
* By default, it would return the current balance of the customer in the absence of any filter parameters. 

> 📘
>
> * For details on the API structure and how to use it, see here.

#### Ledger Behaviour and Possible Entries

**Opening Balance Entry**\
There will always exist an opening balance entry for a user and it marks the start of the ledger and no entries will be available prior to this entry. This entry could have been generated in one of two possible ways:

* As part of the Customer Registration event - this will be a zero value entry and simply marks the start of the ledger. 
* As part of the ‘PointsLedgerBulkJob’ event - this means that the ledger feature was not available for this customer prior to this point and the value will be the points balance of the customer at that time 

> 📘
>
> * Note: Opening Balance entry initiates an account and hence will be present for a user for each program and each points category (e.g. if there are 5 programs and 3 categories - there will be 15 opening balance entries)

##### Credit Entries

The following are the possible credit entries in the points ledger. They can be present across different events and in conjunction with other credit or debit entries depending on the nature of the event

* Points Allocation Actions across different events e.g. Transaction Add, Customer Registration, etc.
* Points Transfer (in the recipient’s account)
* Redemption Reversal
* Points awarded on Referral
* Promised Points Conversion (in the regular points account)
* Trigger-based Promised Points Conversion (in the regular points account)
* Imported points
* Other bulk award events e.g. Points awarded via Engage+ Campaigns 

#### Debit Entries

The following are the possible debit entries in the points ledger. They can be present across different events and in conjunction with other credit or debit entries depending on the nature of the event

* Points Return
* Points Expiry
* Points Redemption (including group redemptions)
* Points Transfer (in the sender’s account)
* Return of Referral points
* Promised Points Conversion (in the promised points account)
* Trigger-based Promised Points Conversion (in the trigger-based points account)
* Imports for points redemption or expiry 

### Event Characteristics

This section defines the characteristics of some common events, particularly the special characteristics that may be unique to that event.

#### Transaction Add

* The transaction number and transaction ID are available in this event alone, to facilitate looking up using other APIs for further information if needed.

#### Customer Registration

* For newer customers (post rollout of the ledger) this event will contain an Opening Balance entry.

#### Points Redemption

* This event will show details of the individual program from where the points were deducted.
* In the case of a group redemption, the total value of points redeemed will be available in the ‘points\_on\_event’ field.
* If we use program Id as a filter, by default it will only show the debits from that program - in order to see the group redemptions associated with the till id mapped to that program the user can use the ‘includeTillConceptEvents’ query parameter.

#### Points Transfer

* Since the ledger shows the impact on a single user's account, it will only show the credit or debit entry depending on whether the user is a recipient or sender for that particular event.

#### Redemption Reversal

* It will be shown as a credit event into the account it is being reversed into. 

#### Points Expiry

* The ledger date-time will reflect the time that the actual expiry was completed (typically the morning of the next day from the expiry date). 

#### Transaction Return

* This event can show both credit and debit entries.
* Debit in case of points return.
* Credit in case of redemption reversals.
* The ‘points\_on\_event’ field would show the net of both the credits and the debits.
* The transaction ID of the return transaction will be provided here.

#### Merge Customer

* The Ledgers of the survivor and victim will remain distinct even after the merger.
* Merge event will result in a Debit entry in the Ledger of the victim and this will be the very last entry in the victim’s ledger.
* Merge event will also reflect in the ledger of the survivor as a credit entry. 

> 📘
>
> * Note: The exception to this situation is if the victim had a negative points balance - in that scenario, the victim will have a credit entry, and the survivor will have a debit entry.

#### Promised Points Conversion

* Both the debit entry from the promised accounts and the credit entry to the regular account will be part of the same entry.
* Hence, the ‘points\_on\_event’ field will always be zero for this event.
