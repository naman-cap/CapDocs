---
title: Setup Fraud detection
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
## Fraud Tagging across Verticals

The fraud tagging process is to ensure all challenges involved in fraud prevention are handled successfully through the following checks.

* Identifying fraud with limited information.
* Prioritizing high-risk transactions.
* Eliminating the risk of identifying genuine transactions as fraudulent.
* Managing the process despite the lack of round-the-clock access to activities of customers. 

## Fraud tagging based on purchase behavior

#### **Identify & Prioritize**

Based on parameters that include the immediacy of purchase, a customer's transaction history, type of product, policy, and guideline violations, transactions are prioritized for analysis and further action.

#### **Analyze Subsequently**

The team analyses transactions based on a customer's adherence to policies, product authenticity, transaction history, identity verification, and consistency of data provided, among other factors.

#### **Investigate**

Once suspicious investigations are flagged as fraud, the vendor-partners are contacted to verify the customer's identity and transaction details.

#### **Prevent & Control**

Based on information match, investigators decide on the course of action – one-time cancellation of transactions, ban on future transactions, or flagged as a potential threat. Along with these, filters are created or updated; resulting in continually improved fraud detection algorithms and an enhanced knowledge base.

## Fraud Detection Methodologies

The Engineering team creates a fraud template using the methodologies provided herein. You can create an export template for the fraud customer to download fraud customer details.

## Fraud Detection Methodologies

### Vintage and Visit

Vintage is the number of days since the first transaction date, and Visit is the number of times the customer\
has come to the store. The KPI for this rule is (Vintage) / (Visit) which must be less than a predefined threshold value to get the fraud status.

### Transaction hours count in a day

The customers will be prone to have fraud status if he crosses a predefined number of transactions in a day (transactions count here is the distinct transaction hours in a day).

### Transaction Amount Limit

The system will trigger out transactions having amount more than the predefined threshold, and that\
particular customer will be tagged as 'Fraud'.

### Top Customer Percentile

The rank of a customer is sorted in descending order of lifetime purchase. Customers that have 0.1 percentile would have a higher probability of making fraud by entering other's transactions into their account.

### Transactions in different zones on the same day

Transaction Happening in 2 different regions/zones on the same day or with a gap of 6 hours, i.e., customers having transactions more than 1 in a day in different zones are prone to be tagged as a fraud. There would be very few customers with purchases in 2 different regions on the same day.

### Visits and Latency

For Visits, refer to rule number 1. 

The Latency has been defined as (last bill date – joined date)/ (visits – 1). The chances of a customer being a fraud are high if his visits are more than the predefined value and have a lower latency of visit than the predefined value.

### Spike in Transaction Amounts

If any transactions amount is more than ten times the average transaction amount, there is a high possibility that the particular customer is doing fraud.

### Transaction per Day

The maximum number of transactions in a day should be less than a predefined critical value. 

### Transaction per Week

The maximum number of transactions in a week should be less than a predefined critical value.

### Latency of Redemption

The Latency of redemption has been defined as (max date of redemption – min date of redemption) / (# unique days where points got redeemed– 1). 

If the number of redeemed visits is more than a predefined value and the latency of redemption is less than a predefined value; then there are high chances of fraud. 

### Number of times points are redeemed

The number of times the customer has redeemed points should be more than the predefined value to mark fraud. 

### Redemption Rate

The ratio of points redeemed visit days to points awarded visit days should be more than a predefined value to mark a particular customer fraud.

### Total Points Redeemed

If the total points redeemed by the customer is more than a critical value, he is more prone to fraud.

![028ab6d VW7PSOenXZqlINa3uOev1R l3fmvo7 5HA](https://files.readme.io/028ab6d-VW7PSOenXZqlINa3uOev1R_l3fmvo7-5HA.png)

## Fraud Handling Process

1. Detection is based on heuristics defined in Fraud detection rules.
2. Each rule will be given weight from 0 -1. This weight will affect the importance of the rule in the\
   total scoring.
3. Only those customers having a total score >= a predefined critical value are marked as fraud.

* In most cases, the total score is around 1.5.
* Customers have tagged fraud who violates at least two rules.

4. The system can reassign each customer to one of the following statuses - MARKED, CONFIRMED, RECONFIRMED, NOT FRAUD, INTERNAL. Customers marked as CONFIRMED, RECONFIRMED, or INTERNAL will have some restrictions.

## Reflections of Fraud Users

* Exclude their information from all the reports.
* Do not issue vouchers.
* Do not allow mobile number change from those customers.
* Not able to redeem points.
