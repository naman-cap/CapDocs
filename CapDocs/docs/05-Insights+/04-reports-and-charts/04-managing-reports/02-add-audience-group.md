---
title: Analyse reports Based on Audience Groups
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
# Introduction

Insights+ gives the ability to filter or analyse the reports based on audience grouping. Audience is a group of customers, filtered on the basis of demographics, campaigns, transactions, and other activities. The audience filter can be applied to both standard and custom reports. Up to 3 audience group data can be simultaneously compared using Insights+. By leveraging audience analysis, businesses can gain insights into customer behavior, preferences, and engagement patterns.

In Insights+, audience groups can be compared, but their creation has to be done in Engage+. For more information on creating audience groups, click [here](https://docs.capillarytech.com/docs/audience-group-filters).

<Note title="Note">
Before comparing audience groups in Insights+, ensure they are created in Engage+ first.
</Note>

# Applications of audience group filter in reports

The audience group filter in reports serves several purposes:

* Refine a report to display specific audience-related information.
* Analyze customer behavior to improve sales and enhance brand value.
* Utilize various audience group filters powered by Capillary's AI stack (AIRA) to forecast customer activities.
* Determine target audiences based on their preferences for timing, products, and store locations.
* Generate effective offers based on audience activity towards a specific brand or product.

<Note title="Note">
All audience groups, including uploaded, combined, and filter-based groups, can be used as filters in reporting.
</Note>

# Applying an audience group filter in a report

To apply an audience group filter in a report, perform these steps.

1. On the Insights+ page, navigate to the desired report. 
2. Open the report and click **Add audience group** to see the list of audience groups.

![7ddfec5 Add Audience group](https://files.readme.io/7ddfec5-Add_Audience_group.png)

3. In the **Audience Group** list, search and select the audience group by name.

![6453ba4 Select Audience Group](https://files.readme.io/6453ba4-Select_Audience_Group.png)

<Note title="Note">
In a report, you can apply up to three audience group filters.
</Note>

4. Click on the **Audience group name** to see a brief description of the audience group.

![ef2d1a6 Audience Group Info](https://files.readme.io/ef2d1a6-Audience_Group_Info.png)

5. Click **Done** to apply changes. The applied audience groups are displayed at the top of the report.

![ea32756 Applied Audiences](https://files.readme.io/ea32756-Applied_Audiences.png)

![542643b Ig2MIV0PXroHS 9h3M6b IJXuJyEtCLSsw](https://files.readme.io/542643b-Ig2MIV0PXroHS_9h3M6b_IJXuJyEtCLSsw.png)

<Note title="Note">
To create audience filters using the data from extended fields, please contact the Insights Sustenance and Data Science team.
</Note>

# Use cases

The following are the use cases that help you understand the feature.

## Scenario 1

Consider a scenario where an organization wants to compare the purchasing patterns (based on products purchased) year-over-year (YoY) of a high-value customer group. This like-for-like (LFL) analysis can be accomplished using audience group filters. 

Perform the following:

1. From the Insights+ page, open the sales report of interest.
2. Select an audience group filter from the compare audience list that has the Transaction date and time filter applied to it. 

Now, you can see the product performance (based on product category) for an audience group (audience\_demo) between a specific time duration (e.g. for January 2023 and January 2024).

If you do not have the audience group in the list, you can create an audience group filter from Engage+ with the **Transaction date and time**.

![25f7be0 Product Type](https://files.readme.io/25f7be0-Product_Type.png)

<br />

## Scenario 2

Consider a use case where an organization wants to re-target an audience list with a minimum spend offer.\
To decide the appropriate minimum spend threshold for the offer, perform the following:

1. From the Insights+ page, open or create a report with an average transaction value-based banding of customers. 
2. Select the audience list to see the distribution of customers with various bands to decide the minimum spend. 

Now, you can see the shopping done by customers during a campaign (New Year Campaign) with value-based banding (\<5000, 5000-7000, 7000-9000, and 9000).

If you do not have the audience group in the list, you can create an audience group filter from Engage+.

![ce54302 0R1W6 xc5K2Il5XBda3kXJnvWGE2bi9CKA](https://files.readme.io/ce54302-0R1W6_xc5K2Il5XBda3kXJnvWGE2bi9CKA.png)

<Note title="Note">
The audience list keeps refreshing (in case of recurring campaigns), and while generating the reports, the audience version available nearest to the report end date is considered. In case, the report end date is prior to the date of audience creation, the report will use the first available instance of the audience. This can be used to perform pre-campaign analysis of the audience.\
For example, if a campaign began on June 1st, 2024 and the audience was created on June 2nd, 2024, you can also get reports for the reporting period before June 2nd, 2024 (i.e., May 1st, 2024 to May 31st, 2024). In this case, the report would use the first available instance of the audience i.e., of June 2nd, 2024.
</Note>
