---
title: FAQs
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
## Loyalty


What is the difference between members, and non-members?

Members are customers that registered any of their identifiers, mobile number, email id or external id, with the brand. Non-members are customers with no identifiers tagged. This includes customers with missing identifiers and not interested customers.

Hence,

Total Data = Member Data + Non-member Data

What is the difference between loyalty and non-loyalty customers?
Both loyalty customers and non-loyalty customers are members.

In members, customers that are enrolled in the loyalty program of the brand are loyalty customers. Non-loyalty customers are customers that did not enroll in the loyalty program but subscribed their mobile number or email ID with the brand.

Member Data = Loyalty Data + Non-Loyalty data
Consider an example, store transactions can be of new customers or existing customers. New customers are asked for mobile number, email ID or external ID and also to enroll in the brand's loyalty program.

* Customers who provide any of the mentioned identifiers and are also willing to enroll in the loyalty program are loyalty customers
* Customers who provided only their mobile number or email ID to receive communications and promotions, but not willing to be a part of the loyalty program are non-loyalty customers
* Customers who are not interested to provide their identifiers are not-interested customers

## Store


Active store count changes every-time I run a report with a different date range. Why does it not show the total active stores of the brand?
Active stores count that you see is the count of stores that contributed to the data for that report. Changing the date range will affect the store count. If the date range is long, you will get all the stores that contributed to the data.

Can I restrict data access to my store manager to see Insights+ data only of his stores?
Yes, we have RBAC (Role-Based Access Control), which instructs Insights+ to filter out data for individual logins.

How do I configure store hierarchy in Insights+?

You will have Store and Till as the default store hierarchy where Till is the last entry and store is a level above it, other entries depend on the org hierarchy.

You can add up to three hierarchy levels excluding store and till. The reports or dimensions that you see on Insights+ depends on the hierarchy configured for your organization. For example, if your org has a zone-based hierarchy, you will see dimensions corresponding to zone level.

The hierarchy names defined on the Insights+ UI is independent of the store and zone mapping at the source (InTouch Admin).
For details on store hierarchy configuration on InTouch, see Setting up Organization of Capillary Admin Guide.

To set store hierarchy, follow these steps.

1. Navigate to Insights+ > Settings > Dimension Settings

2. In Dimension, choose Store Hierarchy > Click Edit

3. Click Add level to add a parent level

4. Specify the level name and click Save or Create. You will see Create when you are configuring for the first time and Save when you update levels from the second time

## Product


How do I configure product hierarchy?

You will have item code by default which is the lowest level. You can add up to four levels above the item code. The reports or dimensions that you see on Insights+ depends on the hierarchy configured for your organization.

1. To set product hierarchy, go to Insights+ > **Settings** > **Dimension**.

2. In Dimension, choose Product > Click Edit hirerarchy> Click Add Level to add a parent level > Specify the level name.

3. Click Create/Save to save the product hierarchy. You will see Create when you are configuring for the first time and Save when you update levels from the second time.

How do I configure Days since the last visit in Metric Dimensions?

You will see different operators to choose from while setting up Days since last visit. All operators such as >=, &lt;=, = works as per the operator. However, for Between it considers the range including the specified lower limit excluding the upper limit. For example, if you define Days since last visit Between 180 and 360, it will consider the last visit range >= 180 and &lt; 360.

## Campaigns


How can I validate incremental sales?
Incremental Sales =

<Image width="80%" src="https://files.readme.io/ddf01c4-IncrementalSales.png" ></Image>

As negative values cannot be allowed for incremental sales, If (Test Hit Rate - Control Hit Rate) is negative for a given duration, then incremental sales will be 0.

If Test Hit Rate &lt; Control Hit Rate, then Incremental Sales will be 0 (as we do not show negative incremental sales).

The formula for each KPI mentioned in Incremental Sales formula is provided below:

<Image width="80%" src="https://files.readme.io/1651de2-IncrementalSales2.png" ></Image>

<Note title="Note">
**Note**

When you group data by a dimension attribute, you will see group-level data. When you see incremental sales at the campaign level, you will get value based on the respective Test hit rate and Control hot rate. However, the total incremental sales is not the sum of incremental sales of each campaign, instead, it considers the total test hit rate and the total control rate is considered in the calculation.

For example, if a customer C shopped in stores S1, S2, S3, you will transactions of the customer in each store. But when you see overall data, it is just one customer's data.
</Note>