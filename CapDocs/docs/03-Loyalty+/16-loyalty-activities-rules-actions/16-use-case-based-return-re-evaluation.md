---
title: Use case based return re-evaluation
excerpt: >-
  In this page, we will see how we used to solve few return re-evaluations
  scenarios before, and how we are solving now in a much better way making sure
  neither the customer nor the brands suffers unfairly.
deprecated: false
hidden: true
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
## Return enhancements

### Re-evaluation of return in the event of earn capping

Let’s say a brand is running a program with 10% earn rate with bill/event level capping of 1000.

**What’s happening now:** Now, if a customer buys 2 items of 11000 each, the customer will only earn points on the 1st line item (1000pts). This is because, as per the capping, 1000 is the highest and that is already achieved with the 1st line item itself. If the customer is returning the 1st line-item, after the return re-evaluation, the customer will end up earning 0 point though the net payment is 11000.

**What will happen now:** After this enhancement, the customer will get 1000 points even though the 1st line item is returned. This is because, even though the 1st line item is returned, still the 2nd line item is eligible to get the points as per the configured capping condition.

*(No screenshot as this is a backend login)*

### Re-evaluation of return in the event of achieved promos/earning.

Let’s say, a brand is running a promotion, that with a minimum purchase of 10000, customers can earn 1000 points with that transaction.

**What’s happening now:** Now, if a customer makes a purchase of 10000 ( 2 line items each worth 5000), the customer will get the 1000 points as per the promotion. If the customer returns 1 line item for whatever reason, points return is happening on pro-ratio (.i.e., only 500 points are getting reversed).

**What will happen now:** After this enhancement, all the 1000 points which customers received will be returned. This is because, without that returned line item of worth 5000, the bill wouldn’t have crossed 10000 in the first place, and therefore the customer is not eligible for any points as per the promotion.

*(No screenshot as this is a backend login)*

## Re-evaluation of return transactions based on "purchase date" instead of "return date".

As of now, whenever someone returns some items, re-evaluation of the return bill used to happen based on the return date but not as per the purchase date. Because of this what used to happen is, if there is a promotion running when the customer returns the bill, the customer used to get those promotional points even though customers were not supposed to get them.

Following example helps in understanding better:\
Step 1: Customer made a purchase on 10th march.\
Step 2: Brand is running a promotion from March 20th to March 30th. (Say 100 bonus points)\
Step 3: Customer returned the item on March 25th which was bought on step1.\
Step 4: Return re-evaluation happens, and customers used to get 100 points as the return bill processing date is 25th March where a promotion is active in that duration.

However, step - 4 is wrong. Customers should not get any points because when purchase of the product happened, no promotion was running. This issue occurred because return bill processing happened on the return date not on the purchase date.

With this new enhancement, in step - 4, when re-evaluation is happening, it will take the purchase date instead of the return date as the bill processing date. Because of this enhancement, even if a promotion is happening during the return, customers won’t be evaluated for the promotion.

*(No screenshot as this is a backend logic change.)*
