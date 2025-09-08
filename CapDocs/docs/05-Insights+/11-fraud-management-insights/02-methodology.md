---
title: Methodology
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
The fraud detection method is based on a weight (w) associated with every rule which can be any value between 0 & 1 as specified by the brand. The weights help the brand to adjust the importance of every rule in finally considering the user as a fraud.\
Given below are the steps followed in fraud detection:

1. Brand provides the following:
   * Threshold for each rule.
   * Weight for each rule.
   * Critical score value.
2. The fraud detection engine follows these steps for every user:\
   a. Evaluate each user against the 13 predefined fraud detection rules. And, whenever a user violates a rule, that is marked as 1 else 0.\
   b. Calculates the score for each rule: 
   1. Multiplies the weight (w) by 1 if the rule is violated.
   2. Multiplies the weight (w) by 0 if the rule is not violated.\
      c. Sums the scores for all 13 rules to obtain the customer's total fraud score. If this total meets or exceeds the critical value (as defined by the brand or default 1.5), they are flagged as potential fraud.

**Diagrammatic representation of fraud score calculation**

![bd8634ad79a83196d068458509d31a3867947bea962552a636a33d01c5acde0c image](https://files.readme.io/bd8634ad79a83196d068458509d31a3867947bea962552a636a33d01c5acde0c-image.png)

# Confirming the Fraud Status

The brand reviews the suspected fraud customer list (downloaded using the fraud export template) and can categorize each customer into the following fraud status:

* **Marked**: A customer who has shown fraudulent behavior, but yet to be confirmed.
* **Confirmed**: A customer who has been confirmed as a fraud (from the status "marked").
* **Reconfirmed**: A confirmed fraud customer who has shown fraudulent behavior again.
* **Not\_Fraud**: A customer who has shown fraudulent behavior, but later found to be not fraud.
* **Internal**: Internal Capillary users that make transactions and other activities for testing purposes.

These statuses are updated in the Intouch system through MemberCare or bulk upload via data import framework.

<br />

# Configure Fraud Management

To use fraud detection, brands can follow the given steps:

1. Raise a Jira ticket with the product support team.
2. Provide the weightage and threshold values for the rules.
3. Provide the critical score. Based on these values, Capillary can configure the 13 KPIs for the brand.
4. Brand can then download the export template for fraud management.
5. Brand can use the fraud template to download a list of potential fraud customers.
6. Brand can mark the customers from the list, as fraud or not fraud, on an individual basis, using Member Care or by uploading them through the bulk import framework.

<br />

# Fraud User Restrictions

The brand can define the restrictions for the customers who are **CONFIRMED**, or **RECONFIRMED** as fraud. These restrictions include:

* Not issuing them vouchers.
* Prohibiting changes to their mobile numbers.
* Preventing them from redeeming points; and
* Excluding their information from all the reports.

Brands can add the restrictions to customers through CDP. For more information, please refer to the [restrictions](https://docs.capillarytech.com/docs/setup_customer#suspended-fraud-suspected-fraud-confirmed-and-internal-customer-status) documentation.

**Sample CSV file downloaded using the fraud template**

![95f44ae3b830631c3f832af2420107a8fd2d235eca2497ad69ffe8a6011f33e2 Fraud sheet SS](https://files.readme.io/95f44ae3b830631c3f832af2420107a8fd2d235eca2497ad69ffe8a6011f33e2-Fraud_sheet_SS.png)
