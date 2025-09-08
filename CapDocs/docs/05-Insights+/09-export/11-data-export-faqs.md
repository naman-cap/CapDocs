---
title: Data export FAQs
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
1. What is Data Export?

* Data Export helps you export the CRM data available in the Capillary's system to an FTP location or internal server. You can export data related to customers, transactions, coupons, points, Footfall, and campaigns.\
  You can create an export job using templates that define. Each template is a combination of either KPIs or facts and dimensions.

2. What are the key features of Data Export?

* Create custom data templates
* Support for Extended Fields, Footfall Data, and Profile V2
* Get data by recently updated date or event date
* Export Ids of stores, users, and products 
* Export custom fields, and extended fields
* Export a specific audience list using KPIs and dimensions
* Works on auto-update time of tables 

3. What are the limitations of Data Export?

* Supports a maximum of one year's data. The maximum size of the file which can be exported is 20GB. If the exported file exceeds this limit, a validation error is triggered. **Note:** The export functionality operates exclusively on incremental data sets. An incremental data set refers to a subset of data that has been updated or modified since the last export or processing operation. Instead of exporting or processing the entire data set each time, only the changes or additions made since the last operation are considered. This approach helps in optimizing resource usage and improving efficiency, especially when dealing with large volumes of data.
* Unable to edit a template once created
* Unable to modify KPIs, dimensions, filters, and customer list once scheduled
* Unable to export measures (such as bill id, bill number, bill amount, auto-update time) and custom fields in custom templates. You can export only KPIs and its dimensions
* Limit of selecting only five dimensions in a custom template for an export job
* Data of the current day will not be included in the exported data as the data will be synced to the capillary server only during nights 

4. Where can I export data?

* You can export data to an FTP server (for both internal and external).

5. What are the supported scheduling frequencies?

* You can schedule an export job to run on a daily, weekly, monthly basis; or on a fixed date. However, if you schedule an export job to receive weekly data every Monday, you will get the data on Tuesday as Monday's data will be synced at the end of the day. So, you will get data until Monday on Tuesday.

6. How does the export schedule work?

* Assume that you have scheduled an export to receive data from Apr 1 - Apr 15. You will get data on Apr 16 which contains the data available from Apr 1 until Apr 15.\
  The data of the current day will be synced to the Capillary system only after the ETL run. This sync usually happens in night. Hence, you will get the current day's data the next day.\
  In recurring export schedules, you always get data until the previous day. In one-time export schedule, you cannot select the current date or future date. So, you will get data for the selected duration.

7. How does the Rerun option work?

* Rerun is used to export data manually when there is an exception in the export job.\
  To rerun a failed scheduled job, navigate to Export Schedule > Specific schedule details > Execution Log > Rerun.\
  You will not see Rerun for jobs that ran successfully.

8. What is the difference between one-time and recurring export jobs?

* An export job can be a recurring event or one-time activity. You can schedule a recurring to receive data on a daily, weekly or monthly basis. However, you can use one-time job if you want a specific data just once.

9. What is Event Date?

* It is the date when a specific event has occurred. For example, if a transaction has happened on Apr 7, but it synced to the system on Apr 9, the event date of that transaction is still 7th of Apr.

10. What is Last Updated Date?

* The date when a specific data are actually synced to the capillary system. Considering the example mentioned above, if a transaction has happened on Apr 7, but it was actually synced to the Capillary Database on Apr 9, the last updated date of that transaction is Apr 9.

11. What is the difference between Event Date, and Last Updated Date or Modified Date?

* Event date refers to the date on which an event has occurred. The event could be transaction when looking at transaction table, registration when looking at the registration table and so on. The last updated date or modified date for a particular record is, however, the recent date when any of the row values is updated in the system.\
  If a customer is registered on Jan 1, 2019, which is also the event date here. If that customer makes another transaction on May 5, 2019, the transaction table will be updated, for example, the columns lifetime purchases, transaction, loyalty points, lifetime points or any other column. Hence, the last updated date will be May 5, 2019.

12. What type of data can be exported using Data Export?

* You can export customers, transactions, coupons, points, Footfall, and campaigns data. You can customize the type of data and fields that you want to export using the combination of KPIs or facts, and dimensions.

13. How do I know the status of a data export job?

* When scheduling a data export job, you need to configure the recipients to send status notifications. These recipients will get all success notifications on every status update. However, you can check failure statuses only on the UI (export schedule details)

14. What are filters and dimensions in an export template?

* Filters let you drill-down the data to a granular level whereas dimensions allow you to break up the data according to the chosen dimension values. For example, if you want to see transactions of a specific store, use filters; if you want to see store-level transactions of a zone, use dimensions.

15. How is a dimension filter different from audience filter?

* A dimension filter lets you drill down the data to a specific dimension value whereas an audience filter drills down the data to a particular customer list. 

16. Can I edit a template once created?

* You cannot edit a template once created. However, you can modify the template to add or remove KPIs, facts, dimensions, and apply filters to get very specific data. These changes will remain within the schedule and do not modify the original template.

17. Can I modify a scheduled job?

* You can only modify the execute on, frequency and validity. For a one-time scheduler, you cannot even change the frequency.

18. Can I duplicate an export job?

* Yes, instead of creating again from scratch,  you can duplicate the export job that you want to reuse. Go to the export job that you want to reuse > Click Duplicate > Modify the data that you want to export as required > Click Create

19. Can I delete or modify an FTP server after adding?

* Once an FTP is added, you cannot delete or rename it. However, you can change server details and path within that FTP.

20. How can I export custom fields and extended fields in an export job?

* Custom fields and extended fields are not selected by default in a template. Also, you cannot have custom fields in custom templates.\
  You can select the custom fields corresponding to that specific template. For example, you cannot export customer level custom fields using the transaction template. There is no such limitation for extended fields. You can export customer level extended fields in the transaction template.

21. Why is there a sudden increase in the data size of my daily or weekly export schedule during the month end?

* Usually, the tier downgrade strategy or points expiry strategy runs at the month-end resulting in downgrade or renewal of tiers, and expiry of points wherever applicable. This will affect the change of the last updated date and event date of points and coupons. Hence, you might observe an increase in the data, especially, during month ends.

22. Why extended fields data are not available in exported data?

* If an org is set only for an incremental run, even if you import extended fields of the last 4 years, EI will show data only up to two years. Hence, you might see missing extended fields data in reports.\
  Even after importing, if extended fields data is not available for a transaction or customer, see whether you are able to see these details on Member Care.\
  There are two types of extended fields - vertical-specific and global level. When you send a request to the EI team for data sync, specify the vertical associated with the extended field.\
  Ensure that the API team has done the proper mapping of extended fields
