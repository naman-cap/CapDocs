---
title: View Message Details
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
# View error details of failed messages

When messages are sent through a campaign, there could be instances where some messages could fail when sending to the gateway partner or sending from the gateway partner. For any communication channel such as SMS, email, push notifications, or other, Engage+ lets you view the details of all failed messages - not sent or not delivered.

To see the details of failed messages, follow these steps.

1. Log on to InTouch and navigate to Menu > **Engage+**
2. Choose the relevant campaign in the **Campaigns** section.
3. Choose the relevant message in the **Messages** section.

You will see the percentage of messages that are delivered.

![1291da4 8ZTt4MX7AHQKTq9O26vs8SlL WiA11v6HA](https://files.readme.io/1291da4-8ZTt4MX7AHQKTq9O26vs8SlL-WiA11v6HA.png)

* To see the reason for messages not being sent, click on View details. You can also see help text if there are any suggested solutions.

![e0d4e39 sKWVlEOUiTO8Y7AHciv cER5qJEZ2ZShcA](https://files.readme.io/e0d4e39-sKWVlEOUiTO8Y7AHciv-cER5qJEZ2ZShcA.png)

## Possible reasons of failure

Possible reasons for the failure of sending messages to the gateway partner or operator

* Capillary was not able to submit messages to Gateway Partner.
* Gateway partner did not accept messages in the expected time, so the connection failed.
* Gateway partner's response regarding submitted messages was incomprehensible.
* Gateway partner retried but failed.
* Gateway partner tried but could not submit delivery status to Capillary due to configuration issues.
* Org is out of credits for sending communication messages.
* Customers have unsubscribed from the channel, hence cannot be reached.

The probable reasons for not sending messages from the gateway partner or operator

* The customer is on the National Do Not Disturb list.
* Messages are submitted to Gateway partners and waiting for a response.
* Gateway Partner has confirmed that the message cannot be delivered. Could be due to internet issues, or blocking.
* Messages cannot be delivered due to an error related to DLT Sender ID.
* Message cannot be delivered due to an error related to DLT Template
* Emails cannot be delivered due to the unavailability of the user mailbox
* Emails can’t be delivered due to an invalid email ID.
* Gateway Partner was not able to send messages, can be intermediate or final status.

<Note title="Note">
Apart from the reasons listed above, there could be instances where the reason for message delivery failure would not be shared due to TRAI regulations.
</Note>

## View audience details

The **Audience** section in the **Messages** section displays the details about the audience to whom the communications including the status. You can view the following details:

* Number of customers to whom the communications are sent.
* Test/Control ratio on the communications sent. For information on enabling communications to be sent to the Control audience, refer to the [documentation](https://docs.capillarytech.com/docs/delivery-settings#send-communication-to-control-customers).
* Channel-wise data on the reachability of customers in percentage
* Status of the uploaded files and option to download the issues

  ![b5b343d Audience details](https://files.readme.io/b5b343d-Audience_details.gif)

## Additional details

This section displays the details of the delivery settings. For configuration information, you can refer to the[ message delivery settings documentation](https://docs.capillarytech.com/docs/delivery-settings).

![155e3c4 Additional details](https://files.readme.io/155e3c4-Additional_details.png)

### Approval, failure or low credit alerts

To alert users on message approval requests, and when there is a low message delivery rate, message execution failure, do the following.

* On the Engage+ home page, click on the setting icon, and navigate to the **Alerts** page.

| OPTION                          | DESCRIPTION                                                                                                       |
| :------------------------------ | :---------------------------------------------------------------------------------------------------------------- |
| Message execution failure alert | Enter email IDs (comma separated values) to notify whenever a message execution fails                             |
| Low message delivery alert      | Enter email IDs (comma separated values) to notify when the message delivery rate of a campaign is less than 60%. |
| Message approval request        | Enter email IDs (comma separated values) to notify when a new campaign message is sent for approval.              |

### Recurring message expiry alert

The recurring message expiry alert feature allows you to configure reminders when recurring campaigns approach their end dates. You can add the contacts and configure the alert settings, specifying the days before the end date you wish to send an alert.

For example, if you have set the alert as 7 days, the alert will be triggered on a date that is seven days before the message's end date.

<Note title="Note">
Users will receive an alert for every recurring message configured in the organization. There are no specific users assigned alerts at the message level.
</Note>

![ ](https://files.readme.io/1d0c501-Recurring_message_alert.png)