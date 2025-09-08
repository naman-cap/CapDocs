---
title: Fact & Dimension Tables
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
A [fact table](https://docs.capillarytech.com/docs/fact-tables) stores quantitative data, containing metrics (facts) such as sales, revenue, or transactions. A [dimension table](https://docs.capillarytech.com/docs/dimension-tables) holds descriptive attributes related to facts, such as customer information, product details, or time periods, which help categorize and filter the data. 

In reporting, fact tables provide the numeric data to be analysed, while dimension tables allow users to dig deep and filter this data for specific insights.

Facts and dimensions, are structured in a **STAR Schema Layout** within our data storage system. In a star schema layout, fact tables are stored at the centre, containing the quantitative data, while dimension tables are stored around the fact table, connected by foreign or linking keys, providing descriptive context to the data. This structure optimizes queries and facilitates efficient data analysis and reporting.

<br />

![563f675 Start schema](https://files.readme.io/563f675-Start_schema.png)

## Examples of fact and dimension tables

Consider the badges fact and dimension tables:\
For Badges, there are 3 fact tables linked to 7 dimension tables.\
Badges Fact Tables are:

* Badges Earn
* Badges Issued and
* Badges Earned Benefits

E.g. Badges\_earn Fact Table Screenshot (sample)

![f75a7e4 Facts table](https://files.readme.io/f75a7e4-Facts_table.png)

Dimension Tables that are linked to the Badges Fact Table are:

* Badge meta
* Badges owner type
* Coupon series
* Enabled
* Users
* Date
* Time

E.g. Badge\_meta Dimension Table Screenshot (sample)

![cd716f1 Dimensions table](https://files.readme.io/cd716f1-Dimensions_table.png)

The fact tables store the details of the badges specific events and the corresponding dimension tables contain the fields on the basis of which the entries in these fact tables can be grouped/filtered for reporting.
