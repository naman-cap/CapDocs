---
title: Retro guide
excerpt: >-
  This page provides you with information on transactions that are applied/added
  to a loyalty program after the transaction has taken place.
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
Retroactive transactions, also known as retro transactions, refer to transactions that are applied/added to a loyalty program after the transaction has taken place.

This is a common scenario in many domains and can occur for a variety of reasons:

* An error in the transaction process
* A delay in the transaction being recorded
* The customer has not provided the loyalty details at the time of the transaction

## Air lines example:

Generally in airlines, sometimes customer won’t provide their loyalty details at the time of the transaction. So basically that becomes a non-loyalty transaction, and because of that, no loyalty benefits will be given to that customer.

However, the same customer will call customer service sometime in the future, and request to convert that non-loyalty transaction in the past to a loyalty transaction. Upon validating a few details, generally, most airlines will agree to that. This is a case of a retro transaction.

## Primary requisite to use retro functionality:

Whenever a brand wants to utilize this retro transaction functionality, they have to raise a ticket with the sustenance team to configure a setting from the backend.

## Scenarios of retro processing:

There are primarily two ways in which the retro processing will happen:

1. Workflow rules-based retro processing (point in time program and promotion configurations)
2. Tier-based retro processing (point in time tier of the customer)

### Workflow rules-based retro processing:

Let’s understand with the help of a real-case scenario. There is a customer who made a ‘non-loyalty’ transaction on 20th May 2023.

However, the same customer called the customer service on 17th August 2023 requesting to convert that ‘non-loyalty’ transaction to a ‘loyalty transaction’.

In this case, had the brand already enabled ‘retro-transaction’, then the processing of that transaction should happen according to the workflow rules set on 20th May 2023.

Now imagine this scenario:

1. On 20th May 2023, say the rules present in the workflow are ‘XYZ’.
2. On 10th August 2023, say the brand has changed those rules to ‘ABC’.

Now, even though the processing should happen according to the rules presented on 20th May 2023, as the brand changed them on 10th August, our system doesn’t know what rules to compute the transaction. To avoid this, always create new set whenever you are replacing the rules in your workflows.

**It could be as follows:**

Here, there is a brand that is using retro functionality, and they are changing their workflow rules on the 1st of July. So instead of replacing them in the same set, they created another set as follows:

**Set 2:** Jan 1st, 2023 to June 30th, 2023\
Action: Allocation of 98 points

![1d0d8a3 Screenshot 2023 08 23 at 10](https://files.readme.io/1d0d8a3-Screenshot_2023-08-23_at_10.39.38_AM.png)

![18ab015 Screenshot 2023 08 23 at 10](https://files.readme.io/18ab015-Screenshot_2023-08-23_at_10.39.52_AM.png)

**Set 3:** July 1st, 2023 to August 31st 2023\
Action: Allocation of 89 points

![7b70bea Screenshot 2023 08 23 at 10](https://files.readme.io/7b70bea-Screenshot_2023-08-23_at_10.40.08_AM.png)

![0206d46 Screenshot 2023 08 23 at 10](https://files.readme.io/0206d46-Screenshot_2023-08-23_at_10.40.23_AM.png)

Now, when the processing of the ‘non-loyalty’ transaction happens based on the original date of 20th May 2023, our system has information on what rules to be computed.

As a result, even though processing happened on 17th August, the customer will get “98 points” as per the configs present during the 20th May 2023.

`“So whenever as a brand, you want to use retro functionality, make sure you are not replacing the existing rules, but rather creating a new set with the appropriate date as the scope”.`

**Important callout**\
The KPIs or trackers will always be evaluated as per the processing time of the event and not the bill date of the event. For eg. a sales tracker might have a value of 1000 as per the original bill date but in case of retro the current value will be taken for evaluation which might be more or less than 1000

### Tier-based retro processing:

Similar to the above case, let’s say this time, the action is not simple points allocation, but rather some kind of setting depending on the tier of the customer.

* Gold tier: 20% of the transaction amount
* Silver tier: 15% of the transaction amount
* Bronze tier: 10% of the transaction amount

Now, let’s say a customer made a ‘non-loyalty’ transaction on 20th May. At this time, the customer is present on “Silver-tier” but won’t get any benefits because that is a ‘non-loyalty’ transaction.

The same customer called the customer-care on 17th August requesting to change that transaction to a ‘loyalty’ transaction by providing the relevant details.

Meanwhile, let’s say the following tier activity happened to the customer’s tier:

| Date                                                                               | Customer's ier |
| :--------------------------------------------------------------------------------- | :------------- |
| 20th May 2023                                                                      | Silver         |
| On 10th August, the customer made some big purchase, so his tier changed to ‘Gold’ | Gold           |
| 17th August 2023                                                                   | Gold           |

So now, when the customer requested on 17th August to convert his non-loyalty transaction (which happened on 20th May 2023) to a loyalty transaction, here is what happens:

1. Our computation will check on which tier the customer is present on the original transaction.
2. As the customer is present on “Silver tier” as per the original transaction date, computation will happen according to that.
3. So the customer will get 15% points based on the amount of that transaction.

### API details:

Searching for an older transaction: [Here](https://docs.capillarytech.com/reference/perform-search)

To request a retro approval: [Here](https://docs.capillarytech.com/reference/send-retro-request)

To approve the above request: [Here](https://docs.capillarytech.com/reference/approval-of-the-request-copy)