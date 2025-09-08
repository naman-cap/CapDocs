---
title: Tender-Based Points Maximisation
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
Points maximisation is a feature that automatically ensures that you earn the highest possible points on every purchase. When you use multiple payment methods in a single transaction, the system intelligently allocates your eligible purchase amount to the payment method that offers the highest rewards first, to always maximise your points earnings without manual calculations.

# Configuring tender-based points maximisation

To enable and configure tender-based points maximisation for a loyalty program, follow these steps:

1. In Loyalty+, navigate to the loyalty program and select **Edit Program**.
2. Scroll to the **Workflows** section and add the **Forward to set** action.
3. Enable the following options: **Enable lineitem unrolling**, **Maximise points allocation**, **Enable payment method unrolling**, and **Points allocation while maximising tenders**.
4. Enter a default allocation percentage, then select **+ Add More** to add payment methods (tenders).
5. For each payment method, select it from the drop-down list, enter the allocation percentage, and select the **✓** icon to add it.
6. Select **Save** to save the payment methods, then **Save and Continue** and **Publish changes** to save the configuration.

   ![f97809582a4fe3a47ff6608726e9cab39afe7b140291577c1365578c02dc80f2 Screen Recording Jul 3 2025 2](https://files.readme.io/f97809582a4fe3a47ff6608726e9cab39afe7b140291577c1365578c02dc80f2-Screen_Recording_Jul_3_2025_2.gif)

# Examples

**Premium tier incentives**: A hotel chain offers 4 times the points for Platinum members, 3 times the points for Gold members, and 2 times the points for Silver members. When a customer has multiple membership benefits applicable to a single booking, the system automatically applies the highest multiplier to maximise their points earnings.

**Seasonal product promotions**: An electronics retailer runs a holiday campaign with 4 times the points on gift cards, 2 times the points on laptops, and 1.5 times the points on accessories. When a customer buys items across multiple categories in one transaction, points are allocated to prioritise the highest-earning category first.

**Payment method based**: A customer makes a purchase using multiple payment methods. The system prioritises the one with the highest reward rate and allocates rewards accordingly.

# Use Case

## Requirement

ShopSmart has partnered with Velocity Bank and has a ShopSmart-Velocity credit card. They want to promote this card for their customers and incentivise customers who make purchases using the credit card. The brand also has a partnership with Apex Bank and wants to incentivise customers who make purchases using an Apex Bank credit card.

The brand wants to reward customers in the following way:

| Payment Method                   | Percentage Allocation | Description                                                                                                           |
| :------------------------------- | :-------------------- | :-------------------------------------------------------------------------------------------------------------------- |
| ShopSmart-Velocity credit card   | 500%                  | If a customer makes a purchase using the ShopSmart-Velocity credit card, they earn 5X points.                         |
| Apex Bank credit card            | 200%                  | If a customer makes a purchase using the Apex Bank credit card, they earn 2X points.                                  |
| Other bank credit or debit cards | 100%                  | If a customer makes a purchase using any other bank credit or debit card, they earn the regular number of points.     |
| Cash                             | 100%                  | If a customer makes a purchase using cash, they earn the regular number of points.                                    |
| Points                           | 0%                    | If a customer makes a purchase using their earned points, they do not earn any additional points for the transaction. |

## Solution

To prioritise payment methods/tenders, follow these steps:

1. Enable the following in the **[Forward to Set](https://docs.capillarytech.com/docs/actions#forward-to-set)** action in Loyalty workflows:

   ![8b05b04c218074cf6ee77b27f25b5761d4613606e3d080b87620009e83f416ac Screenshot 2025 05 28 at 12](https://files.readme.io/8b05b04c218074cf6ee77b27f25b5761d4613606e3d080b87620009e83f416ac-Screenshot_2025-05-28_at_12.03.21_PM.png)
2. In **Tender points allocation**, enter the default percentage as 100%.
3. Select **Add More** to add a payment method. You can create payment methods under the **Advanced Settings** in the loyalty program.
4. Add the payment methods and enter the percentage for all the payment methods.

![5ae8797587b459e7566bf68998a14021515c4a6e15d74813300edea85c3efd25 image](https://files.readme.io/5ae8797587b459e7566bf68998a14021515c4a6e15d74813300edea85c3efd25-image.png)

# Points allocation when paying using multiple payment methods

If a customer purchases several line items using different payment methods (tenders), the system prioritises points allocation based on the configured allocation percentage.

For example, a customer makes the following purchases from ShopSmart:

| Product   | Price (₹) | Eligibility for earning points | Eligible Amount (₹) |
| :-------- | :-------- | :----------------------------- | :------------------ |
| Ice cream | 200       | Eligible                       | 200                 |
| Noodles   | 60        | Eligible                       | 60                  |
| Bread     | 80        | Ineligible                     | 0                   |
| Biscuits  | 40        | Ineligible                     | 0                   |
| **Total** | **380**   |                                | **260**             |

The customer purchases the above line items using the following payment methods and the poins are allocated in the following way:

| Payment Method                 | Amount Used (₹) | Points Rate | Remaining Eligible Amount (₹) | Points earned      |
| :----------------------------- | :-------------- | :---------- | :---------------------------- | :----------------- |
| ShopSmart-Velocity credit card | 130             | 5%          | 260 - 130 = 130               | 130 × 5% = **6.5** |
| Apex Bank credit card          | 80              | 3%          | 130 - 80 = 50                 | 80 × 3% = **2.4**  |
| Cash                           | 70              | 1%          | 50 - 50 = 0                   | 50 × 1% = **0.5**  |
| Points                         | 100             | 0%          | 0 (no eligible amount left)   | 0 × 0% = **0.0**   |

**Total points earned: 9.4 points.**

<Note title="Note">
s
* Points are allocated based on the allocation percentage. The system prioritises the payment method with the highest allocation percentage. Once points are allocated for the first payment method, it moves to the next.
* If **Point allocation while maximising tenders** is enabled, it overrides the point allocation rules defined in the loyalty program's [earn conditions](https://docs.capillarytech.com/docs/building-blocks-of-loyalty#create-earn-conditions).
* You can only enable either tender-based points maximisation or line-item-based maximisation at a time.
</Note>