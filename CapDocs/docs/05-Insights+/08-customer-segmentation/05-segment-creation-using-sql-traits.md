---
title: Segment Creation Using SQL Traits
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

SQL traits is feature that enables the injection of custom business logic into the ETL (Extract, Transform, Load) process. They allow users to define the segmentation condition using SQL queries and generate user-specific attributes tailored to their unique analytical needs.

For example, consider a brand that wants to categorize customers based on recent engagement. They aim to create a user attribute called **"Activity Status"** for individuals who have both made a transaction and redeemed a coupon in the last 30 days.

To implement this using SQL traits, the brand or analyst can write SQL logic that defines these conditions. The query would typically examine transaction records and coupon redemptions, filtering for users who meet both criteria within the specified timeframe. Once this logic is executed by the ETL system, a new user attribute—**"Activity Status"**—is created. Each user is then assigned a corresponding value (e.g., "Active" or "Inactive") based on whether they meet the defined conditions. This custom attribute can subsequently be used for various purposes, such as building targeted marketing segments or tailoring user experiences.

## Advantages of SQL Traits

|                                  |                                                                                                                |
| :------------------------------- | :------------------------------------------------------------------------------------------------------------- |
| Supports Custom Logic            | Enables brands to go beyond predefined filters and define segmentation logic tailored to their business needs. |
| Faster Segment Creation          | Reduces turnaround time from T+2 to T+1 by integrating logic directly into the ETL process.                    |
| No File Uploads Required         | Eliminates the dependency on manual or FTP-based file uploads, reducing operational overhead.                  |
| Available for repeated use in UI | Once created, SQL traits are reusable across multiple segments through a simple UI dropdown.                   |

## To create a rule-based segment using SQL :

1. Submit the computation logic by raising a task ticket to the product support team on Jira, at least a day before. After the daily data refresh (ETL), your logic is processed and ready to use.
2. On the Insights landing page, click **User Segments** > **Create Segment**.
3. In **Segment Name**, specify a name for the group.
4. In **Description**, specify a short description of the segment.
5. In **Type**, select **SCD** to keep a track of customers' behavior for the current segment. Select **Non-SCD** to save only the current snapshot.
6. In **Method**, choose **Conditions** for creating based on rule conditions.
7. Click **Next** to continue.

   ![6795c4ae70548501a1ee3585ab1578b151619c75965f3deaea53377d7a933443 fb9f75a  XNN4AV52Xqd6Ep9mgVTISxEyJSG2vZvjQ](https://files.readme.io/6795c4ae70548501a1ee3585ab1578b151619c75965f3deaea53377d7a933443-fb9f75a--XNN4AV52Xqd6Ep9mgVTISxEyJSG2vZvjQ.png)
8. In **Update**, choose your preferred frequency for updating the segment data.
   * **Manually**: To update the partition values manually. The list will be updated only if the list is refreshed manually on the segment details page.
   * **Daily**: To update the segment values on a daily basis.
   * **Weekly**: To update the list on a weekly basis.
   * **Monthly**: To update the list on a monthly basis.
9. In **Partition name**, specify a name for the partition.

   ![e292704310ad14284268db4551413c2d37f949a81b8e286a6f3a502dfe59149f 91c6572 M4hZE0u2I5n5syieKSLqw9diYodA8e0njA](https://files.readme.io/e292704310ad14284268db4551413c2d37f949a81b8e286a6f3a502dfe59149f-91c6572-M4hZE0u2I5n5syieKSLqw9diYodA8e0njA.png)
10. In **Description**, specify a short description for the partition.
11. Click **+Add rule** > User Attribute kpis to open a dropdown with available options. The dropdown will show all SQL traits created based on the logic you shared.
12. Select the attribute you want to use. Once selected, you will see a list of possible values for that attribute.
13. Choose one or more values to define your condition. You can select multiple values for a single rule or create different partitions using different values.

<Note title="Note">
* Only attributes with fixed set of values (ENUM-type) are supported.
* Attribute names will vary by brand.
* You must raise a support ticket at least 1 day before you want to create the segment.
* Any changes to the logic will need to be reviewed and validated again.
</Note>