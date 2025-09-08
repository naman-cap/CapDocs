---
title: Introduction to customer segmentation
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
Customer Segmentation is a logical grouping of audiences based on shared characteristics. Segments are used to tailor the marketing efforts of brands effectively. Segmentation is usually done based on demographics or customer behavior. A segment consists of different values called partitions. For example, we can have a segment name Transaction Value whose partitions could be High, Medium, and Low. 

The segments are used for effective targeting and reporting in modules such as Campaigns, Loyalty, and Essential Insights. 

# Types of Segments

Based on whether the activities of customers are tracked, segments are again categorized into two types:

* **SCD**(Slowly Changing Dimension ): This is a type of segmentation in which the behavior of customers is tracked at a given point in time. Usually, SCD segments are used for migration charts
* **Non-SCD**: The behavior of customers is not tracked and only the current snapshot of the customer list is maintained. In non-SCD, the system stores only recently updated time and do not maintain the tracking history of previous updates. Examples of non-SCD based segments could be segmentation based on customer registration or gender 

# Different Methods of Segment Creation

There are two ways of creating customer segments 

* **Upload customer list**: One way of creating segments is by uploading the customer list with customer identifier and segment value (partition name). The segments created through upload are static. If you want to update an existing segment, you need to upload the new file manually. To create a segment through file upload, you can either upload a file directly or through an FTP server. For more information, see Creating segments through file upload
* **Using rules & conditions**: Another way of creating segments is through predefined rules also called as filters. You can define rules for each partition of a segment. For example, you can have a partition named HighLoyal with the condition of customers whose transaction value is greater than 10000. In rule-based, segments will be updated automatically based on the ruleset. For information on how to create rule-based segments, see Creating segments using rules.
* **Using SQL**:  THis allows to create segments using  SQL logic that defines the conditions.

# Navigating Segments

![4d75720 61 wRzqdxEWwoSZZ8BmMCJZsMKRY8I8Gzg](https://files.readme.io/4d75720-61_wRzqdxEWwoSZZ8BmMCJZsMKRY8I8Gzg.png)

* **Draft**: This indicates that the recent changes made in the segment are not updated yet (The changes are just saved. You need to click on Update to reflect the changes). If you open the segment, you will see **Draft** **available**: **Save changes to see the partition values**. You can save or Deactivate draft segments
* **Active segment**: Only active segments are available for other services that use Segments. You can either edit or deactivate active segments
* **Inactive segment**: These segments will be inactive and will not appear in any service that consumes segments. You can edit and activate inactive segments
* To locate a specific user segment, use:
  * **Search Box** - To search the user segment by name.
  * **Type** filter - To filter the segments by its type - SCD or Non SCD.
  * **Method** filter - To filter the segments by the method of creation - Conditions or Upload.
  * **Sort** option- To sort the segments alphabetically using the **Name** or the **Last modified date**.
