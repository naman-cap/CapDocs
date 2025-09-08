---
title: Issue Trackers Standard Export Template
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
The Issue Trackers template is based on the **issue\_tracker** fact.

The template lets you export all the complaints raised by customers that were converted into "issues" and is managed by the Customer Care Management System. 

## Measures

| Measure          | Description                                                                                                  |
| ---------------- | ------------------------------------------------------------------------------------------------------------ |
| Issue Code       | Unique identifier of the complaint or the issue.                                                             |
| Issue Department | The department to which the complaint has been assigned. For example, home appliances, electronics, mobiles  |
| Issue Name       | Subject of the complaint.                                                                                    |
| Issue Priority   | Priority of the complaint as per the escalation metrics. For example, high priority, in queue, low priority. |
| Issue Status     | Current status of the issue. For example, open, closed, or to follow-up.                                     |
| Ticket Code      | Unique identifier of the complaint for internal reference.                                                   |
| Issue Tracker Id | Internal id generated for the complaint.                                                                     |

## Dimensions

| Dimension Name                                                                      | Description                                                                                                         |
| ----------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| [Issue Type](https://docs.capillarytech.com/docs/dimension-tables#issue-type)       | Identifier for the type or category of the issue.                                                                   |
| [Assigned To](https://docs.capillarytech.com/docs/dimension-tables#zone-till)       | Identifier for the person or department to whom the issue is assigned.                                              |
| [Assigned By](https://docs.capillarytech.com/docs/dimension-tables#zone-till)       | Identifier for the person or entity who assigned the issue.                                                         |
| [Reported By](https://docs.capillarytech.com/docs/dimension-tables#reported-by)     | Identifier indicating how the issue was reported, such as through email, intouch, call centre, client or microsite. |
| [User](https://docs.capillarytech.com/docs/dimension-tables#users-users)            | User details such as user id, source, slab name, external id, fraud status, mobile, email, etc.                     |
| [User Segments](https://docs.capillarytech.com/docs/dimension-tables#users-users)   | Segment details of the customers such as valued customer, lapsed customer.                                          |
| [User Attributes](https://docs.capillarytech.com/docs/dimension-tables#users-users) | User attributes such as total visits, recent view.                                                                  |
| [Created By](https://docs.capillarytech.com/docs/dimension-tables#zone-till)        | Identifier for the person who created the issue record.                                                             |
| [Date](https://docs.capillarytech.com/docs/dimension-tables#date)                   | Date attributes related to the issue.                                                                               |
| [Due Date](https://docs.capillarytech.com/docs/dimension-tables#date)               | Identifier for the due date of the issue resolution.                                                                |
| [Active Status](https://docs.capillarytech.com/docs/dimension-tables#active-status) | Identifier indicating whether the issue is still active or not.                                                     |
| [Latest Updated Date](https://docs.capillarytech.com/docs/dimension-tables#date)    | Latest date when the data is updated.                                                                               |
| [Latest Updated Time](https://docs.capillarytech.com/docs/dimension-tables#time)    | Latest time when the data is updated.                                                                               |
| [Time](https://docs.capillarytech.com/docs/dimension-tables#time)                   | Time attributes related to the issue.                                                                               |
