---
title: Glossary
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
#### Awarded date

The date on which points are issued is called an awarded date. During data import of promotional points, you can customize the awarded date. In the case of importing transaction points, the awarded date cannot be modified.

#### Delayed accrual and promised points

The number of days in which points for a transaction actually get credited to the customer's current points. The points for a transaction are initially credited to the customer’s account as promised points. After the prescribed number of days, the points get credited to the current points after the delayed accrual period (configured by the org).\
For example, if an apparel store has a return policy of seven days, and a customer buys a shirt and gets 20 points on this purchase. The points are reflected as promised points in the customer's account right after the purchase. These points are actually credited to the current account after seven days. However, if the customer returns the shirt (in the return period), the promised points will be reverted and current points will not be updated.

#### Downgrade

Reducing the current tier of a customer to a lower tier is called tier downgrade. Brands can opt for tier downgrade on the basis of visit count and transactions. For example, downgrade the tier of a customer if no transaction is made in the last 6 months.

#### Expired Points

Points that got expired because the customer did not use them within the validity period are called expired points.

#### Expiry Date

The date on which awarded points get expired is known as the expiry date. The expiry date for particular points is always calculated with respect to the corresponding awarded date. It is derived by adding the expiry strategy to the awarded date.

#### Expiry Strategy

The measure by which the points awarded to customers expire is called an expiry strategy. All points awarded to customers will get expired (if not used) as per the expiry strategy configured for these particular points.\
There are multiple expiry strategies for a loyalty program. The default strategy is used for **BillPointsAllocation action/AllocatePoints** action. If none of the above-mentioned actions are configured in the point’s engine then it will consider the first expiry strategy that is configured.

#### Lifetime Points

The total number of points earned by a loyalty customer to date. Lifetime points are the sum of current points (active points), expired points, and redeemed points for a given customer.

#### Line-item

A transaction can have one or more products in it. Each different product in a transaction is considered a line item.

#### Loyalty Points

Active points in the customer’s loyalty account are called loyalty or current points. Customers are allowed to redeem their loyalty points based on the brands' redemption criteria.

#### Promotional Points

Bonus points that are awarded to the customer irrespective of any transaction are called promotional points. These points are either awarded by the actual promotional campaigns or through import while balancing the customer’s lifetime points.

#### Redeemed Points

Loyalty points that are used by customers are termed redeemed points.

#### Tiers

Tiers are loyalty privileges that are awarded to loyalty customers. A brand can have one or more tiers. Tiers are required to be used by all organizations. If no tier is configured, one default tier is created by default.

#### Transaction Level Points

Points that are awarded against a transaction made by the customer are called transaction points.\
If transaction-level points are added or modified through import then transaction or transaction line-item profile has to be chosen.

#### Upgrade

Moving the customer to a higher tier is called tier upgrade. Brands can opt for tier upgrades on the basis of visit count and transactions. For example, upgrade the tier of a customer if 50 transactions are made in the last 100 days.
