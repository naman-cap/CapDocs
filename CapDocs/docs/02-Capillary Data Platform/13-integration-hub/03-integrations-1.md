---
title: Configure gateways
excerpt: ''
deprecated: false
hidden: true
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
## Adding/Updating Communication Gateways

The communication gateway is a device that acts as a communication between internet protocols and telecom which makes it easy to add communication services to the internet-based applications.

### Add communication gateways to the server

If you have a communication gateway, add it to the server using the following procedure

1. log in to [http://intouch.capillary.co.in](http://intouch.capillary.co.in)
2. On the Settings page, click **Miscellaneous** > **Message Gateway**.

### Add/Update Gateway page

3. In the **Host Name box**, type the name of the gateway.
4. In the **Name box**, type a name for the gateway you wish to represent in the server.
5. In the **Description box**, type some short details of the gateway.
6. In the **Username box**, type a user name for the gateway account.
7. In the **Password box**, type a password for the account.
8. In the **Connection Properties box**, define the connection properties of the gateway.
9. In the **Server URL box**, type the server URL of the gateway.
10. In the **Status URL box**, type the URL from which the status of the messages will be received.
11. In the **Status Check Type box**, choose the type of reports you wish to generate.

* **Push**: Messages status report will be sent on request (manual request)
* **Pull**:  Messages status report will be sent by the gateway automatically
* **None**:  To disable generating messages status report

12. In the **Channel Count box**, choose the number of channels applicable for this gateway.
13. In the **Communication Type box**, choose the type of communication for the current account.
14. In the **Gateway Status box**, set the status of the gateway.

* **Active**: Activates the gateway
* **Inactive**: Inactivates the gateway
* **Disable**:  Disables the current gateway

15. In the **Gateway Countries box**, select the countries to which the messages sent are applicable
16. Check the **NDNC box**, if you wish to restrict sending a particular type of message through the current gateway
17. Choose the message type you want to unsubscribe from and click **add**. All the selected message types will appear on the right side box
18. In the **Priorities** box, select the type of messages you wish to allow through this gateway

* **High**: Allows sending transactional messages which are of high priority through the gateway
* **Bulk**:  Allows sending promotional messages through the current gateway
* **Default**: Allows sending all messages that are set to default priority

19. In the **Scopes/Tags** box, choose the tools for which the current gateway should be applicable. For multiple modules, separate each module by ‘,’
20. Click **Submit**

### To update an existing gateway

1. In the **System Gateway** table, navigate to the gateway which you want to modify and scroll the horizontal bar to the end and click the **edit** link of the respective gateway.\
   The details of the gateway will appear in the **Add/Update** section.
2. Edit the details as required and click **Submit**.

> 📘 * The fields Host Name, Name, Description, Username, Password, and Communication Channel cannot be modified

## Configuring Communication Gateways

The gateways that are added to the organization have to be configured to use for the organization.

### Configure the gateway for the organization

To configure the gateway to use by the organization use the following instructions.

1. On the **Settings** page, click **Communication & Gateway** > **Configure Gateways**.
2. Scroll down to the **Gateway Settings** section.
3. Check the **Default Gateway** box to allow using the current gateway as a default source for communicating SMSs and emails.

> 📘 * The gateway set as default will be used to send messages of the organization that are not assigned to any gateway along with the modules that are configured for the gateway.
> * The gateways that are not set as default will send only the messages that are configured for the gateway. 

4. In the **Gateway drop-down box**, choose the gateway you wish to configure.

5. In the **Message Priority selection box**, select the message types you wish to allow through the current gateway and click **add**.

6. In the **Gateway Weight box**, restrict the messages sent through the gateway in terms of the percentage of total messages.\
   For example, if 80 is set in the Gateway Weight box, only 80% of the messages will be sent out of the actual number of messages that have to be sent through the gateway

7. In the **Start Time box**, set the date from which the gateway has to be active

8. In the **End Time box**, set the date on which the gateway has to be disabled

9. In the **Select Campaign box**, select the campaigns you wish to communicate through the current gateway and click **add**.

10. Click **Submit**.

## Configuring Gateway Distribution for Campaigns

You can restrict the type of messages (bulk, transaction, or default) that can be sent through a gateway. This allows for setting up a gateway only for sending a particular type of massage. For instance, a gateway can be

1. In the **Select Campaign** box, choose the campaign for which messages have to be restricted.
2. In the **Message Priority** drop-down box, choose the message type that has to be blocked from sending for that campaign.

* **High**: These are high priority messages and include all transaction-related messages like making transactions, points awarded, points or coupons redeemed, and so on. 
* **Bulk**: All the promotional messages that are sent to the customers will have this priority.
* **Default**: These are the general messages that have to be sent to the customers like thanking messages, birthday wishes, etc.

3. In the **Gateway Weight** box, specify the percentage of total messages to be sent that should pass through this gateway.\
   For example, if the total number of messages to be sent for a campaign is 1000 and if 80 is set in Gateway Weight, then only 800 messages (80% of 1000) will be sent through this gateway.

4. In the **Start Date** and **End Date** boxes set the time period for which the gateway has to be active.

5. In the **Select Campaign** box, select campaigns for which the current gateway should be applicable and click add. The selected list of campaigns will appear on the right side box.

6. Click **Submit**.

## Generating Message Delivery Reports

You can generate delivery reports of the messages sent by your organization for a specific time period.\
To generate a message delivery report.

1. On the **WorkBench** page, click **Communication** Logs > **Bulk SMSs/Emails**.
2. In the **Communication Type** field, select **SMS** or **Email** for which the report has to be generated
3. In the **Start Date** and **End Date** fields set the time period for which the delivery report has to be generated
4. Check **Download CSV** if you wish to down the report. (The report will be generated in .csv format)
5. Click **Submit**.

## Unsubscribing/Re-subscribing Customer's Mobile Number or Email ID

You can unsubscribe the customer's mobile numbers or email IDs from the organization. This is commonly called DND (Do Not Disturb). Any mobile number or email id once unsubscribed from the organization will not receive any communication messages from the organization.

You can also resubscribe to a mobile number or email id that is activated for DND.

This section explains the process for unsubscribing and resubscribing from receiving messages from the organization.

1. Open the server application home page or **Capillary Admin** Page
2. Click **Customer Management** > **Unsubscribe**.
3. In the **Unsubscription** field use the following steps to unsubscribe.
4. In the **Communication Type** box, select the type of communication, that is SMS or Email.
5. In the **Email ID** or **Mobile No.** box, type the email id or mobile number to unsubscribe (based on the option chosen in the previous step)
6. Click **Unsubscribe**.

### To resubscribe the mobile number or email id

1. Click **Customer Management** > **Unsubscribe**.
2. In the **Resubscription** field use the following steps to resume getting messages from an organization
3. In the **Communication** Type box, select the type of communication, that is SMS or Email
4. In the **Email ID** or **Mobile No.** box, type the email id or mobile number to resubscribe (based on the option chosen in the previous step).
5. Click **Resubscribe**.

## Generating Dashboards & Message Summary Reports

This section details the dashboards and reports that could be generated across all the available gateways.

### Dashboards

#### Generating Dashboards and Reports

1. log in to [http://intouch.capillary.co.in](http://intouch.capillary.co.in)
2. Click **Workbench** > **Message Summary Report**.

You can view the dashboards across all the gateways based on the message priority, that is, High, Bulk, and Default.

The dashboard shows the overview of the delivery reports of all the messages sent by different gateways of Capillary Technologies.

A sample screenshot is shown in the figure below displays the dashboard of messages with Default priority

* **Total**: Total number of messages assigned to the gateway
* **Sent**: Number of messages sent
* **Failed**: The number of messages failed to send
* **Latency**: The average time (in seconds) taken to send one message. The value will be calculated for the last one hour.
* **Throughput**: The average number of messages sent by the gateway in one minute. The value will be calculated based on the statistics of the last hour.

![f2c33fa Screenshot from 2013 06 20 15 41 50](https://files.readme.io/f2c33fa-Screenshot_from_2013-06-20_15_41_50.png)

### Summary Reports

Summary Reports page displays the detailed report of SMSs or Emails sent by all the gateways. The filters can be filtered based on organization, campaign, and gateway.

#### To generate the message summary report

1. Open the **Summary Reports** tab from the Dashboard page.
2. Choose the communication type for which the report has to be generated on the right-hand side drop-down box.
3. Click the **Set Date Range** and choose the time period for which the report has to be generated and click **Submit**.\
   A report will be generated for the date range showing the detailed report of the messages delivered in each message priority (high and bulk).

### Gateway wise message summary report

This page shows the report of the messages sent by various gateways. 

![e04710f SMS Gateway](https://files.readme.io/e04710f-SMS_Gateway.png)

This report will show the total number of messages that have to be passed, the number of messages rejected by the gateway, failed due to mobile numbers not working, and the number of delivery receipts not received by the gateway. The report will be the same as email reports.

### Organization wise message summary report

This page allows you to generate reports SMSs or Emails sent by an organization. The report table displays.

![e77bea9 email Org](https://files.readme.io/e77bea9-email_Org.png)

### Campaign wise message summary report

This page allows you to generate the report of status of messages sent by a particular campaign of an organization.

![196e679 SMS Campaign](https://files.readme.io/196e679-SMS_Campaign.png)

> 📘 * Report summary will be generated only when you select the date range and click Submit from the Date Range box.
> * Access for dashboards and reports is restricted. Hence, everyone cannot access this page
