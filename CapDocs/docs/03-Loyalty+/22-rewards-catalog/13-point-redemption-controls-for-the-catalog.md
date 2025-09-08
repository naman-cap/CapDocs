---
title: Point Redemption Controls for the Catalog
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
This feature enables marketing managers to implement restrictions on the number of points customers can redeem in the rewards catalog within specific time frames. By setting limits at the organizational and reward type levels, brands can control customer activity on the rewards catalog and encourage point usage during transactions, ultimately driving more business.

**Points redemption restrictions:**

1. Users can define fixed window restrictions of daily, weekly, and monthly cycles for **points redemption in the catalog, either for the entire catalog or for a specific redemption type or customer's loyalty program/tier/supplementary program/labels/segments** or all of these with this [API](https://docs.capillarytech.com/reference/create-points-restriction)
2. Users can update these restrictions with this [API](https://docs.capillarytech.com/reference/update-points-restriction)
3. Users can select the start day of the week for their org with this [API](https://docs.capillarytech.com/reference/set-start-date-of-the-week). Default Value will be Monday.
   1. This value will be applicable to all the restrictions under the org which are using frequency type as weekly limit to determine the start of the week.
4. Users can check the defined restrictions for points redemption with this [API](https://docs.capillarytech.com/reference/get-points-constraints) .
5. Users can see the consumed points out of the total limit for a particular customer with this [API](https://docs.capillarytech.com/reference/get-user-reward).
6. When the issueReward call is made for a particular reward for a particular customer, system will check all the defined restrictions like individual reward restrictions and org level points redemption restrictions. If any of the limit is consumed, the reward will not be issued. Refer to this [API](https://docs.capillarytech.com/reference/post-issue-user-reward) for error scenarios.
7. At one point of time, brands can define both point restrictions at org level, at reward type level, at customer's loyalty program level, tier, supplementary program, labels and segments to control the redemption of points in the catalog

**Use cases:**

1. Brands can define that they want to restrict the points redemption for the catalog to 10,000 points per month per customer.
2. Brands can define that they want to restrict the points redemption for the voucher type of rewards to 500 points per week per customer.
3. Brands can define that they want to restrict the points redemption for the miles type of rewards to 1000 points every 10 days per customer.
4. Brands can define that they want the users to only burn 10,000 points in overall rewards catalog in a month and 1000 points on vouchers catalog in a month. 
   1. Once 1000 points are burned by the customer on vouchers catalog in a month, no more points can be used for redemption in vouchers catalog, but customers can still go ahead and burn their points for reward types other than vouchers like charity/miles/cashback etc.
5. Program-Based Limits: Customers in loyalty program name Skymiles can redeem up to 10,000 points in the catalog, with specific limits like 2000 points for miles type of rewards.
6. Label-Based Limits: Fraudulent users can redeem 0 points in the catalog, while other users don’t have any restriction on the points redemption in the catalog.
7. Tier-Based Limits: Base tier users in program name Skymiles can redeem 500 points, silver tier users can redeem 2500 points and gold tier users can redeem upto 5000 points in the catalog.
8. Time-Based Restrictions: Set daily, weekly, or monthly limits, e.g., only 2,000 points can be redeeemd in the catalog every month.
