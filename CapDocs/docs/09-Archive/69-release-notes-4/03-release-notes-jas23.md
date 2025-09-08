---
title: Release notes | JAS'23
excerpt: >-
  This page provides information on Insights releases that occurred in the third
  quarter of 2023.
deprecated: false
hidden: true
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
1. Extending customer status functionality to Insights

Last year, we rolled out the customer status feature on our platform. It was introduced on the platform to serve as a unified repository for capturing various customer statuses and made the existing Fraud status redundant.

Until now, we have been excluding users tagged as “Fraud marked” and “Internal” users under Fraud status for all the brands including the ones, where the brand is using Customer status (and not Fraud status). Our recent release, aims to solve this issue by making customer status based filters apply by default instead of Fraud status based filters wherever brands are using customer status feature to mark users as Fraud or Internal users.

Note that with this change in default filters; fraud, deleted & internal users based on Customer status would start getting excluded while fetching chart data.\
At the same time, fraud status based filters would be made null and void wherever fraud status based default filters were in action. And where fraud status based default filters are not in action - users would get a warning prompt asking them to change filter criteria from Fraud status to Customer status.

Overall, this change would result in a one-time update in the numbers which brands have been seeing across reports - but it is being done to weed out unwanted data which might skew the data. In case, brand users still want to checkout the data based on previous filters - the same is doable via new chart creation or via report filters.

For more, information you can checkout the user documentation here: [https://docs.capillarytech.com/docs/create-normal-migration-charts](https://docs.capillarytech.com/docs/create-normal-migration-charts)

2. Fixing KPI clutter on Insights

Over time, Insights has accumulated an extensive list of 700+ global KPIs, resulting in a crowded and sometimes confusing dropdown menu for users when creating charts. 

To address this, we've introduced 2 separate tabs, My Org KPIs and ALL KPIS in the List of KPI section. 

My Org KPIs will have the KPIs created by your org, along with the KPIs used within your org and  All KPIs will have KPIs available across all orgs.

For information, you can refer to the user documentation of [KPIs and Dimensions](https://docs.capillarytech.com/docs/kpi-and-dimensions).
