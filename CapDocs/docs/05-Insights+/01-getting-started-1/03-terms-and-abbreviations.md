---
title: Terms and abbreviations
excerpt: >-
  This page provides you with information on terms and abbreviations used in
  Insights+ module.
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
### Glossary of Terms

| Term                      | Description                                                                                                                                                                                                                                                      |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Communication Channel** | Channel via which a brand can communicate with customers related to promotions or transactions. Example: SMS, Email, WeChat, Line, Mobile Push.                                                                                                                  |
| **Custom Dimension**      | A specific dimension created through banding on dimension tables. For example, recency can be created on the user dimension by applying banding on `user.last_transaction_date`.                                                                                 |
| **Customer Segmentation** | The process of logically grouping customers based on shared characteristics, enabling brands to tailor marketing effectively. Typically done using demographics or behavior to drive personalized strategies.                                                    |
| **Dimensions**            | Metadata associated with events. For example, transactions (fact) of a specific store, or registrations (fact) on a specific date. Here, store and date are dimensions.                                                                                          |
| **Facts**                 | Consist of event data like transactions, points awarded/deducted, customer registration, slab upgrades, etc. They are the measurable aspects of business processes.                                                                                              |
| **KPI**                   | Key Performance Indicators are metrics reflecting how well an organization achieves key business objectives. Examples: % sales, average transaction value, average basket value.                                                                                 |
| **Metric Dimension**      | Banding on measurable columns like bill amount and discount.                                                                                                                                                                                                     |
| **Migration Chart**       | A chart type that helps track user movement across slabs or segments over time.                                                                                                                                                                                  |
| **Non-SCD**               | Non-Slowly Changing Dimension. It maintains only the current snapshot of customer data, without tracking historical changes.                                                                                                                                     |
| **NPS**                   | Net Promoter Score = (Promoters − Detractors) / Total NPS responses.                                                                                                                                                                                             |
| **Report**                | A combination of charts offering insights based on selected KPIs and Dimensions.                                                                                                                                                                                 |
| **SCD**                   | Slowly Changing Dimension. Tracks customer behavior over time and maintains historical changes, typically used in migration charts.                                                                                                                              |
| **ETL Sync**              | ETL (Extract, Transform, Load) sync pulls data from OLTP systems, transforms it, and loads it into OLAP systems, typically overnight. Enables daily refreshed data for analytics like audience lists and reports. OLTP = transactional DB, OLAP = analytical DB. |