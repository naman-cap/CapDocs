---
title: Use Case for Score Calculation
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
This use case shows the calculation of the total score for a customer, where the brand has predefined the threshold values for the rules and the critical value.

Suppose a customer has made six transactions in a single day. This triggers a violation based on the "**Transaction per Day**" rule, as the number of transactions exceeds the threshold value of five transactions per day. Other factors such as the customer’s vintage-to-visit ratio, spike in transaction amounts, and transactions in different zone rules do not violate the predefined thresholds. Lets calculate the fraud score for this customer.

The following table gives the values used in fraud score calculation for this particular use case.

Please note that these values are provided only for demonstration purposes and would vary depending on the brand.

| Rule                                 | Operator        | Threshold           | Value for the usecase | Weight  | Multiplier (1 - violation, 0 - no violation) | Score (Weight × Multiplier) | Reason for Multiplier                                                                     |
| ------------------------------------ | :-------------- | ------------------- | :-------------------- | ------- | -------------------------------------------- | --------------------------- | ----------------------------------------------------------------------------------------- |
| **Vintage and Visit**                | \<              | 2                   | 3                     | 1.0     | 0 (no violation)                             | 1.0 × 0 = 0.0               | No violation as the customer's vintage-to-visit ratio was above the threshold.            |
| **Transaction Hours Count in a Day** | >               | 3                   | 1                     | 0.5     | 0 (no violation)                             | 0.5 × 0 = 0.0               | No violation as the number of distinct transaction hours was below the threshold.         |
| **Transaction Amount Limit**         | >               | 500                 | 400                   | 0.24    | 0 (no violation)                             | 0.24 × 0 = 0.0              | No violation as the transaction amount did not exceed the threshold.                      |
| **Top Customer Percentile**          | \<              | 0.1                 | -                     | 0.49    | 0 (no violation)                             | 0.49 × 0 = 0.0              | No violation as the customer is not in the top percentile for lifetime purchases.         |
| **Transactions in Different Zones**  | >               | 3                   | 1                     | 1.0     | 0 (no violation)                             | 1.0 × 0 = 0.0               | No violation as all transactions occurred in the same zone on the same day.               |
| **Visits and Latency**               | Range           | Between 0.1 and 2.0 | 1                     | 1.0     | 0 (no violation)                             | 1.0 × 0 = 0.0               | No violation as the latency was within the threshold range.                               |
| **Spike in Transaction Amounts**     | Equal or higher | 1                   | -                     | 0.25    | 0 (no violation)                             | 0.25 × 0 = 0.0              | No violation, as there was no spike in transaction amounts.                               |
| **Transaction per Day**              | >               | 5                   | 6                     | **1.0** | **1 (violation)**                            | **1.0 × 1 = 1.0**           | **Violation, as the daily transaction count (6 in this case) exceeds the threshold (5).** |
| **Transaction per Week**             | >               | 10                  | 4                     | 1.0     | 0 (no violation)                             | 1.0 × 0 = 0.0               | No violation as the weekly transaction count was below the threshold.                     |
| **Latency of Redemption**            | Range           | Between 1.0 and 5.0 | 3                     | 1.0     | 0 (no violation)                             | 1.0 × 0 = 0.0               | No violation as the redemption latency was within the threshold range.                    |
| **Number of Times Points Redeemed**  | >               | 5                   | 4                     | 1.0     | 0 (no violation)                             | 1.0 × 0 = 0.0               | No violation as the number of point redemptions was below the threshold.                  |
| **Redeeming Rate**                   | >               | 0.5                 | 0.2                   | 1.0     | 0 (no violation)                             | 1.0 × 0 = 0.0               | No violation as the ratio of redeemed visit days to awarded days was below the threshold. |
| **Total Points Redeemed**            | >               | 25000               | 1000                  | 1.0     | 0 (no violation)                             | 1.0 × 0 = 0.0               | No violation as the total points redeemed were below the threshold.                       |

**Final Score**

* Sum of the scores:\
  0.0 + 0.0 + 0.0 + 0.0 + 0.0 + 0.0 + 0.0 + **1.0** + 0.0 + 0.0 + 0.0 + 0.0 + 0.0 = **1.0**

The total score of 1.0 is **below the critical value of 1.5**, so the customer is flagged as **Not Fraud**. 

| Final Score (Sum of Scores) | Critical Value Predefined by the Brand |     Result    |
| :-------------------------: | :------------------------------------: | :-----------: |
|             1.0             |                   1.5                  | **Not Fraud** |
