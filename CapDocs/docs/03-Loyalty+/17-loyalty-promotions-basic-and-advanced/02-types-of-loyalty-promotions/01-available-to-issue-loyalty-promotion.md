---
title: Available to Issue loyalty promotion
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
The "Available without issue" loyalty promotions also called GENERIC promotions in the backend are accessible to all customers and are automatically triggered to provide benefits such as points or tier upgrades based on predefined rules, behavioural events, or milestone completions. They are aimed at rewarding customer loyalty and fostering repeat purchases. This is similar to the basic promotion. 

These loyalty promotions are not specifically issued to individual customers instead benefits are directly provided to the customers when they meet the defined criteria. When a customer meets the requirements, the promotion is automatically applied to their transaction, resulting in the issuance of benefits such as loyalty points, tier upgrades, coupons, or badges.

![15eb133 GENERIC PROMOTION](https://files.readme.io/15eb133-GENERIC_PROMOTION.jpeg)

# Use cases

## **Use Case 1:**

**Scenario:** A marketing manager aims to reward loyal customers with a tier upgrade.\
**Configuration:** The manager sets up a promotion with rules specifying that customers who make five or more purchases within a month qualify for a tier upgrade.\
**Auto-Application:** When a customer completes their fifth purchase within the designated timeframe, the system automatically applies the promotion to their transaction, elevating their tier status.

## **Use Case 2:**

**Scenario:** A marketing manager seeks to reward customers with a 10% bonus points offer during the festive season.\
**Configuration:** The manager defines a promotion with rules indicating that customers receive a 10% bonus points on each transaction based on the bill amount during the festive period.\
**Auto-Application:** A customer makes a $1000 purchase on various items. Following the configured rules, the customer earns 100 loyalty points for this transaction.

## **Use Case 3:**

**Scenario:** Encouraging Healthy Lifestyles\
**Configuration:** A wellness brand endeavors to promote healthy lifestyle choices among its customers. The marketing team creates a promotion offering 50 bonus points for every 10,000 steps walked in a day.\
Automatic Application: Customers who have opted into health tracking have their daily step count automatically monitored. Upon reaching the milestone of 10,000 steps in a day, the promotion is automatically applied to their account.\
**Reward Issuance:** Customers achieving the step goal receive 50 bonus points credited to their account as a reward.

# Creating "Available to Issue" loyalty promotion

> 🚧 Attention!
>
> The promotion type cannot be changed after creation of a promotion.

Creating "Available to Issue" promotion is similar to creating a basic promotion type except that you must select **Available to Issue** from the **Promotion type** option. This option is not available with the basic promotion.

<br />

To create a  "Direct Issue" promotion, perform the following during creation of a promotion

1. Select **Available to Issue** from the **Promotion type** option.
2. In the **Condition** expression text box, define the criteria to issue the promotion in the expression language.
3. In the **Add action**, select the benefits that need to be provided upon meeting the criteria.

![61be02e Available to issue](https://files.readme.io/61be02e-Available_to_issue.gif)
