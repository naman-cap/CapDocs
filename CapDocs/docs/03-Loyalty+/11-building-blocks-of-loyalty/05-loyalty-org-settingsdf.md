---
title: Advanced Settings
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
You can go and click on the **Advanced Settings** button on the top right in the edit mode for the program to configure the advanced settings pertaining to tiers, points, communication and payment methods.

![](https://files.readme.io/07b655c-Screenshot_153.png "Screenshot (153).png")

You can read about the Advanced Settings for tiers, points, and communication channels in the respective articles. For the advanced settings regarding payment methods and friends & family programs, read below.

## Payment Mode Settings

To incentivize based on the payment mode combination, you need to configure these steps.

1. Add supported payment modes for the org
2. Create required payment modes.
3. Configure Rulesets for a customer activity (on the Workflow) to define what action to perform for a tender combination.

### Create a payment method

A payment method combination will have a mode of payment, an attribute, and the corresponding attribute value.\
**Example:**

* Card, Bank Name: ICICI, Card tier: Gold (Mode: Card, Attribute: Bank name, Value: Card type)
* DiscountCoupon, CouponType: Ticket (Mode: Discount Coupon, Attribute: Sodexo)\
  The Payment methods tab lets you create different payment mode combinations and incentivize customers with points or coupons based on payment mode combinations. You need to configure actions to perform for each payment mode strategy on the Workflow page.

<Callout icon="📘" theme="info">
  In the case of MLP, tender combinations created in a loyalty program cannot be used in any other programs of the org, not even in the org default program.
</Callout>

#### To allocate points based on the payment method, follow these steps.

<Callout icon="📘" theme="info">
  Before proceeding with payment method configuration, ensure that your org has payment modes added as explained here.
</Callout>

1. Log in to **Intouch**, navigate to **Menu** > **Loyalty+** > **Programs**.
2. In **Programs**, select the program for which you want to set the payment method setting and click **Edit Program** > **Advanced settings**.
3. Navigate to the **Payment methods** page.
4. Enable the toggle button to restrict points allocation based on payment methods.

![](https://files.readme.io/7511761-Screenshot_155.png "Screenshot (155).png")

5. In **Name**, specify a name for the payment method.
6. In **Payment mode**, choose the type of payment mode.
7. Click **Add attribute**, you will see the list of attributes of the payment mode.
8. In **Attribute**, choose the desired attribute from the drop-down list.

![9cc6149 xtZ rSFZUpSQRF7HBH6M9XbKb7CE0TiMKA](https://files.readme.io/9cc6149-xtZ-rSFZUpSQRF7HBH6M9XbKb7CE0TiMKA.png)

9. In **Value**, choose the desired attribute value (Values option appears only for supported attributes).
10. Enable point maximization using the toggle button to make the payment method is eligible for points maximization (in Workflows).
11. Click **Done**.

## Setting delay accural based on bill date or processing date

We all know, delayed accrual feature allows issuing points to customers for an activity at a later date. Now the calculation of this delayed accrual is an interesting one. This is because, even though a transaction happened on X date, it will be processed on a Y date in our capillary system.

**Let’s understand this with an example:**\
Brand configured the delayed accrual as : 10 days
**Case 1**: Customer made transaction on 10th May 2023
**Case 2:** Capillary system processed the transaction on 12th May 2023

Now, if the delayed accrual is calculated based on case 1, points will be issued on 20th May 2023\
If the delayed accrual is calculated based on case 2, points will be issued on 22nd May 2023.

Brands have the ability to configure the delayed accrual strategy as per their policies (Bill date or Event processing date). This option will be available in the advanced loyalty setting of the Loyalty+.

![e8cd6cc small Screenshot 2023 05 08 at 3](https://files.readme.io/e8cd6cc-small-Screenshot_2023-05-08_at_3.45.36_PM.png)