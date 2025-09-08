---
title: Preventing Fraudulent Redemptions in Cart Promotions
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
In cart promotions, when a cashier applies an offer and processes it for payment, the customer receives the benefit but the promotion is not immediately redeemed by the system.\
At the same time if another cashier applies the same promotion to another cart before the system registers the first redemption, the capillary system proceeds ahead as it cannot reject any redemption. As a result customer may receive benefits beyond the allowed number of redemptions.

## Cart Promotion Transaction Flow of Events:

1. Customer makes a purchase and proceeds to checkout.
2. Cashier adds items to the cart and checks for applicable promotions.
3. Cart promotions returns the applicable offers (At this point promotions are not redeemed but merely evaluated for the cart and is indicative of the benefits)
4. Cashier applies the offers and proceeds for payment (Customer has received the benefit hence Capillary cannot reject any redemption)
5. Capillary system receives the transaction (via `transactionAdd` API).
6. The `transactionAdd` API internally calls the cart promotions module to redeem the promotions and update the redemption KPIs . Two things can happen here:
   1. Redemption identifier is valid and irrespective of the breach in KPI we record the redemption.
   2. Redemption identifier is invalid. Currently these are rejected by the cart promotions module.

With step 4 & 6 being not simultaneous, it leads to a potential loophole where the promotion benefit has been given to the customer but the corresponding redemption has not happened in the cart promotions.

# How Cart Locking Prevents This Issue

To prevent such loopholes, a cart locking feature is triggered internally whenever a promotion is applied.

> 👍 Note
>
> It is not explicitly enabled. The feature is triggered directly when a promotion is applied.

* For every cart identifier, the system calculates promotion redemption KPIs at both customer and promotion level. These computations are transient or temporary in nature and block the usage of the promotion(s) for new cart identifiers. Evaluate payload must include unique cart identifier given by cart promotions.
* If the POS makes a second `evaluate` or `getOffers` call during an ongoing transaction, it must use the same cart identifier.
* For the same cart identifier, if a new request is received for the same customer the temporary values will be reversed and cart to be evaluated as new.
* Once the transaction is completed, the temporary values become permanent.
* In case the transaction is cancelled or timeout, the temporary state can be released by the below methods.
  * External - API call with the same cart identifier.
  * Time based trigger -Brand can set up a default time to release the lock in case the external trigger is not received

## How it happens:

You are running cart promotions and you want to make sure that once a promotion is applied, it doesn’t create any conflicts or allow customers to unfairly use it multiple times before it's officially recorded. Here’s how the process works:

1. Once the Cashier starts the transaction, by scanning the items, he sends a `getOffers` request to the system to check for the available offers running.
2. The system temporarily locks the promotion and updates the KPI (to track how many times are the offers being used by the customer).
3. If the customer tries to remove and reapply the offer, system prevents the action by blocking it:
   1. For discount: It fails at promotionId level.
   2. For vouchers: It fails at earnId level.
4. When the customer checks for promotions on app or store, the system instantly updates and shows the offers that are active and locked.
5. If the final transaction confirmation is delayed, customer will see the offers in locked state, which means that they cannot apply or use their offers again until the transaction is completed or system unlocks it.
6. Customers options are:
   1. Wait for transaction to complete.
   2. Contact Customer Support
   3. Wait for system to auto unlock the offer after 24 hours.