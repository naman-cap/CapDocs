---
title: Customer Segmentation
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

Customer Segmentation is a logical grouping of audiences based on shared characteristics. Segments are used to tailor the marketing efforts of brands effectively. Segmentation is usually done based on demographics or customer behavior. A segment consists of different values called partitions. For example, we can have a segment name Transaction Value whose partitions could be High, Medium, and Low. 

The segments are used for effective targeting and reporting in modules such as Campaigns, Loyalty, and Essential Insights. 

# Types of Segments

Based on whether the activities of customers are tracked, segments are again categorized into two types:

* **SCD**(Slowly Changing Dimension ): This is a type of segmentation in which the behavior of customers is tracked at a given point in time. Usually, SCD segments are used for migration charts
* **Non-SCD**: The behavior of customers is not tracked and only the current snapshot of the customer list is maintained. In non-SCD, the system stores only recently updated time and do not maintain the tracking history of previous updates. Examples of non-SCD based segments could be segmentation based on customer registration or gender 

# Different Methods of Segment Creation

There are two ways of creating customer segments 

* **Upload customer list**: One way of creating segments is by uploading the customer list with customer identifier and segment value (partition name). The segments created through upload are static. If you want to update an existing segment, you need to upload the new file manually. To create a segment through file upload, you can either upload a file directly or through an FTP server. For more information, see Creating segments through file upload
* **Using rules & conditions**: Another way of creating segments is through predefined rules. You can define rules for each partition of a segment. For example, you can have a partition named HighLoyal with the condition of customers whose transaction value is greater than 10000. In rule-based, segments will be updated automatically based on the ruleset. For information on how to create rule-based segments, see Creating segments using rules 

![874e070ebd9202d701a26f5899bdc4ac5de93a9ceedcd4eb23f295e0e6a07f75 Segment creation2](https://files.readme.io/874e070ebd9202d701a26f5899bdc4ac5de93a9ceedcd4eb23f295e0e6a07f75-Segment_creation2.png)

<br />

<Note title="Note">
The system allows a maximum of 20 SCD segments and a total of 50 active segments. If you exceed this number, the system prompts you to deactivate an existing active segment in order to create a new segment.
</Note>

# Navigating Segments

To access user segments, navigate to Insights+ > **User segments** > **Status**.

From the **Status** drop-down list, you can choose to view **All**, **Active**, or **Inactive** user segments, depending on which ones you want to access.

![2f184d645396601b055bd1eba6d37a16d4cf7ec956702805525f15a2217d65ff Segments SS 1](https://files.readme.io/2f184d645396601b055bd1eba6d37a16d4cf7ec956702805525f15a2217d65ff-Segments_SS_1.png)

* To locate a specific user segment, use:
  * **Search Box** - To search the user segment by name.
  * **Type** filter - To filter the segments by its type - SCD or Non SCD.
  * **Method** filter - To filter the segments by the method of creation - Conditions or Upload.
  * **Sort** option- To sort the segments alphabetically using the **Name** or the **Last modified date**.

The following screenshot shows the appearance of a user segment after creation:

![f0c12a8e51d62b60c742459c863aed2df11698da1b2fcae438a8eb12f1970971 user segment SS](https://files.readme.io/f0c12a8e51d62b60c742459c863aed2df11698da1b2fcae438a8eb12f1970971-user_segment_SS.png)

* **Draft**: This indicates that the recent changes made in the segment are not updated yet (The changes are just saved. You need to click on Update to reflect the changes). If you open the segment, you will see **Draft** **available**: **Save changes to see the partition values**. You can save or Deactivate draft segments
* **Active segment**: Only active segments are available for other services that use Segments. You can either edit or deactivate active segments
* **Inactive segment**: These segments will be inactive and will not appear in any service that consumes segments. You can edit and activate inactive segments

<Note title="Note">
If no partitions are found for the segment you created, the system displays the following message: 

"No partition found, please **edit segment** to add partition values." 

Proceed to edit the segment to add the necessary partition values.
</Note>

![5e45e3f49942c8beeef6935db8c068bdfd593b857826423cb67d87970ef3b8f6 Edit segment](https://files.readme.io/5e45e3f49942c8beeef6935db8c068bdfd593b857826423cb67d87970ef3b8f6-Edit_segment.png)
