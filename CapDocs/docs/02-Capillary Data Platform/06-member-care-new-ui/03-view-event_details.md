---
title: Event details
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
The **Events** tab on the Customer Single View page shows the transactional summary of the customer.

![10e30c5 Events overview](https://files.readme.io/10e30c5-Events_overview.png)

# Transactions

The **Transactions** tab provides a summary of the transactions made by the selected customer.

You can view transaction details such as transaction number, transacted time, transaction ID, loyalty program associated with points/coupons issued, store name, transaction amount, gross amount, applied discount, details of points, line items, payment information, etc.

![ca82183 transactions](https://files.readme.io/ca82183-transactions.png)

**Note:** The separator used in transaction values is determined by the base currency. For example, if the base currency is set to DE (Germany), the period ('.') will be used as the separator. For example, 80,000 will be displayed as 80.000.

![29834eb Separator](https://files.readme.io/29834eb-Separator.png)

<br />

## Viewing retro transaction

To view the retro transaction, 

* Verify if the transaction is processed according to the transaction date.
* Confirm if the transaction is converted into a regular transaction based on retro functionality.

1. On the Member Care customer single view page, Click **Events**.

![242717e image](https://files.readme.io/242717e-image.png)

2. Click on the transaction to check if the transaction has been converted from not-interested to regular.

![5cf6505 Screenshot 2023 04 18 at 5](https://files.readme.io/5cf6505-Screenshot_2023-04-18_at_5.40.50_PM.png)

### Advanced points view

Advanced points breakup provides information about:

* Lineitem earn breakup
* Transactional level earn breakup

This view allows you to understand the points allocation at line-item & bill level.

To check how the retro transaction is handled, click on a retro transaction, and click **Advanced points view**.

![f2c1133 Screenshot 2023 04 18 at 5](https://files.readme.io/f2c1133-Screenshot_2023-04-18_at_5.29.43_PM.png)

![a2a5900 image](https://files.readme.io/a2a5900-image.png)

<Note title="Note">
Raise a ticket to the Capillary's tech team and the UI team, to enable advanced points view.
</Note>

For more information on retro transaction requests, refer to the [retro transaction requests](https://docs.capillarytech.com/docs/retro_transaction) documentation.

# Behavioral events

Behavioral events are non-transactional events that include customers' activities across different channels. You can see the history of Behavioral Events data of the customer.

![7fdc3e5 Behavioral events](https://files.readme.io/7fdc3e5-Behavioral_events.png)

Click on the search icon to search for the behavioral event using the account ID, and event name.

![9887f77 Search beh events](https://files.readme.io/9887f77-Search_beh_events.gif)

# Milestones

The **Milestones** tab displays all the <Glossary>target</Glossary>-related information about the customer. Milestones is a method that brands can use to monitor the Key Performance Indicators (KPIs) of their customers and acknowledge them for their loyalty. For more information on Milestones, refer [Milestone loyalty documentation](https://docs.capillarytech.com/docs/target-loyalty).\
The card displays all the <Glossary>target group</Glossary>  the customer is a part of. A customer can be a part of multiple targets.

![11170cb milestones](https://files.readme.io/11170cb-milestones.png)

Each card represents a target. You can find the following information on the card:

* Name of the target,
* Duration of the target
* The number of <Glossary>cycle</Glossary> present in the target.

![1900b25 Screenshot 2023 05 26 at 5](https://files.readme.io/1900b25-Screenshot_2023-05-26_at_5.37.23_PM.png)

Click on a target group, to view information about the target and the timeline, including the target name, tracker type, evaluation type, and KPI of the target.

![4fc7aeb information](https://files.readme.io/4fc7aeb-information.png)

The timeline depicts the customer's progression within the target, including details such as the milestone start date, cycle duration, target status, and milestone end date.

![943ca37 time](https://files.readme.io/943ca37-time.png)

Sub-milestones are intermediate rewards that are given to customers. A milestone can have <Glossary>sub-milestones</Glossary> inside each cycle.\
For example, if the target reward is 10,000 points, the brands can break up the reward into smaller target rewards like 2000 points, 2000 points, 2000 points, and 4000 points.

![93d56d6 subtarget](https://files.readme.io/93d56d6-subtarget.gif)

You can click the dropdown and view the access details about the sub-milestones. To determine the completion status, you can check the border of the target icon. When the cycle is completed, the target icon changes from a grey color to green.

![3d8c122 status](https://files.readme.io/3d8c122-status.gif)

# Rewards catalog

A rewards catalog is a curated collection of items or experiences that are available for redemption by members of a loyalty program. The **Rewards catalog** displays the reward programs associated with the organisation. You can click on any reward program to view the details of the rewards such as reward type, reward ID, coupon series etc. 

![b2bffbb rewards cata](https://files.readme.io/b2bffbb-rewards_cata.png)

# Audit logs

> 🚧 Note
>
> By deafault, audit logging feature is not enabled for all organisations. To enable, create a JIRA ticket with the org ID to the sustenance team.

The Audit logs display a detailed trail of records and track activities related to member interactions and system changes. 

By default, the changes to the following fields are audited:

* StandardField, - first name and last name
* Communication channels
* Merge events
* Subscription status
* Customer status
* Customer merge
* Identifier change 

You can also enable **Audit Trial** for the [custom field](https://docs.capillarytech.com/docs/data-fields#create-new-custom-fields) and [extended fields](https://docs.capillarytech.com/docs/data-fields#edit-extended-fields--add-enum-values-using-intouch) in the organisation settings, and can track changes to the below fields:

* Customer extended and custom fields
* Card extended and custom fields

<Note title="Note">
A maxium of 5 custom field and extended field can be audited.
</Note>

To search for a log, you can click the search icon and search using Log ID.

![f42ca3a Audit log](https://files.readme.io/f42ca3a-Audit_log.png)

You can filter the audit logs with the type of change.

![7b0592b Filter result](https://files.readme.io/7b0592b-Filter_result.png)
