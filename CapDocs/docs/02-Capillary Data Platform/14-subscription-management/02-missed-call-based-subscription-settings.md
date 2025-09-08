---
title: Missed Call based Subscription Settings
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
The Capillary Subscription Settings module lets you configure opt-in or opt-out through a missed call or SMS. 

* For missed call-based opt-in and opt-out, you need to configure different numbers for each action. i.e., opt-in to promotional SMSs, opt-in to transaction SMSs, opt-out of promotional SMSs, opt-out of transaction SMSs.
* For SMS-based opt-in and opt-out, you can have just one number for all actions but with different commands. For example, to opt-out, send STOP to 1234; to opt-in send START to 1234. 

To configure missed call based Subscriptions Settings:

1. On InTouch Settings, click **Subscription Settings** > **SMS**. 
2. Click **Edit** Settings

![ceb90ff 3RscDqi bdqpzX1ecNNP7uYJjtl 8YEdlg](https://files.readme.io/ceb90ff-3RscDqi_bdqpzX1ecNNP7uYJjtl-8YEdlg.jpg)

3. For orgs with multiple brands, you need to configure settings for each organization unit (OU).

* To configure settings at the OU level, check **Have different settings for different organizational units**.

The following settings are common for both single-brand orgs and multi-brand orgs.

Subscription Settings, Customer Preference\
How brands regard them:

## Missed Call based Subscription Settings for Promotional SMSs

You need to have a unique number for each action that you wanted to configure for the missed call based. 

#### To configure missed call based subscription settings:

1. In **Customers can modify preference by**, choose to give a missed call 
2. If you are switching the preference, you will see a prompt screen to confirm the change in preference. Click **Reset & Proceed** to continue.

**Note**: The current preference settings will be lost once you click **Reset & Proceed** 

![ff20f64 abGX6XRqpsk3WSOCCpMNbTcS8HfgfPcrzA](https://files.readme.io/ff20f64-abGX6XRqpsk3WSOCCpMNbTcS8HfgfPcrzA.jpg)

<Table align={["left","left","left"]}>
  <thead>
    <tr>
      <th>
        OPTION
      </th>

      <th>
        DESCRIPTION
      </th>

      <th>
        SETTINGS
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Promotion \{\{SMS Optout}} tag
      </td>

      <td>
        Lets you configure the optout tag.
      </td>

      <td>
        * Click **Configure** to setup the optout tag. You will see the following options
        * \*Define the \{\{num}} to be given a missed call\*\*: Define the \{\{num}} tag - a number to which customers need to give a missed call to opt-out of promotional SMSs of the current org or OU. 
        * \*Define the \{\{Optout}} ta&#x67;**: Specify the opt-out message that needs to be inserted for the \{\{**&#x4F;ptou&#x74;**}} tag used in SMS template. Use the + icon and select**num**to insert the missed call number tag - \{\{**&#x6E;u&#x6D;**}} - in the message\
          Click **&#x53;AVE\*\* 
      </td>
    </tr>

    <tr>
      <td>
        Promotion \{\{SMS Optin}} tag
      </td>

      <td>
        Lets you configure the optin tag.
      </td>

      <td>
        Click **Configure** to setup the optin tag. You will see the following options

        * \*Define the \{\{num}} to be given a missed call\*\*: Define the \{\{num}} tag - Specify a number to which the user needs to give a missed call to opt-in to the promotional SMS of the current org or OU
        * \*Define the \{\{Optin}} ta&#x67;**: Specify the opt-in message that you want to send to customers in place of the \{\{Optin}} tag used in SMS template .  Use the + icon to insert the missed call number tag - \{\{**&#x6E;u&#x6D;**}} - in the message\
          Click **&#x53;AVE\*\* 
      </td>
    </tr>
  </tbody>
</Table>

1. Select the desired **Optin type**:

* **Single**: Registered customers with no opt-in preference and customers who are opted-in for org's or OU's promotional are targeted in this type.  
* **Restricted Single**: Only customers who are opted-in for org's or OU's promotional SMS are targeted in this type
* **Double**: Customers are allowed to manually opt-in to the org's or OU's promotional SMS and receive SMSs only after verifying their opt-in status.\
  In Double, you will need to send a verification message to allow the customers to confirm their opt-in manually.  You will see a new field Verification Message. Click the respective Configure option and set the verification message. If you are using Unicode characters in the message, check Allow Unicode Characters

The following table shows the org's preference of sending promotional messages in each type

<Table align={["left","left","left","left"]}>
  <thead>
    <tr>
      <th>
        Type
      </th>

      <th>
        Promotional SMS to Opt In numbers
      </th>

      <th>
        Promotional SMS to no Preference numbers
      </th>

      <th>
        Promotional SMSs to Opted out numbers
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Single
      </td>

      <td>
        Yes
      </td>

      <td>
        Yes
      </td>

      <td>
        No
      </td>
    </tr>

    <tr>
      <td>
        Restricted Single
      </td>

      <td>
        Yes
      </td>

      <td>
        Yes
      </td>

      <td>
        No
      </td>
    </tr>

    <tr>
      <td>
        Double\
        In Double type, you need to configure the verification message that will be sent to customers to manually opt-in
      </td>

      <td>
        No by default (Customers will start getting promotional SMSs only after verifying their numbers)
      </td>

      <td>
        No by default (Customers will start getting promotional SMSs only after verifying their numbers)
      </td>

      <td>
        No
      </td>
    </tr>
  </tbody>
</Table>

5. Check to Send Optin confirmation SMS and configure the message to be sent on a successful opt-in
6. Check to Send Optout confirmation SMS and configure the message to be sent on a successful opt-out
7. In Sender Number, specify the number from which you want to send promotional SMS 

## SMS based Subscription Settings

You can have a single number for all actions but with different commands. 

**To configure SMS based subscription settings:**

1. In **Customers can modify preference by**, choose Sending an SMS and configure other fields as explained in the table below

2. If you are switching the preference, you will see a prompt screen to confirm the change in preference. Click **Reset & Proceed** to continue.

**Note**: The current preference settings will be lost once you click **Reset & Proceed** 

![73d5682 abGX6XRqpsk3WSOCCpMNbTcS8HfgfPcrzA 1](https://files.readme.io/73d5682-abGX6XRqpsk3WSOCCpMNbTcS8HfgfPcrzA_1.jpg)

<Table align={["left","left","left"]}>
  <thead>
    <tr>
      <th>
        OPTION
      </th>

      <th>
        DESCRIPTION
      </th>

      <th>
        SETTINGS
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Define the \{\{code}} to be sent
      </td>

      <td>
        Lets you set the command for
      </td>

      <td>

      </td>
    </tr>

    <tr>
      <td>
        Promotion \{\{SMS Optout}} tag
      </td>

      <td>
        Lets you configure the optout tag.
      </td>

      <td>
        Click **Configure** to setup the optout tag. You will see the following options

        * \*Define the \{\{code}} to be sent\*\*: Define the\{\{code}} tag - the command that you want to have in the SMS to opt out a mobile number from the current org's or OU's promotional SMS
        * \*Define the \{\{num}} to which the code to be sent\*\*: Define the \{\{num}} tag - a number to which customers need to send an SMS to opt-out from the current org's or OU's promotional SMS
        * \*Define the \{\{Optout}} ta&#x67;**: Specify the opt-out message that needs to be inserted for the \{\{**&#x4F;ptou&#x74;**}} tag wherever used in SMS templates. Use the + icon and insert \{\{**&#x63;od&#x65;**}} and \{\{**&#x6E;u&#x6D;**}} as appropriate\
          Click **&#x53;AVE\*\* 
      </td>
    </tr>

    <tr>
      <td>
        Promotion \{\{SMS Optin}} tag
      </td>

      <td>
        Lets you configure the optin tag.
      </td>

      <td>
        Click **Configure** to setup the optin tag. You will see the following options

        * \*Define the \{\{code}} to be sent\*\*: Define the\{\{code}} tag - the command that you want to have in the SMS to opt in a mobile number 
        * \*Define the \{\{num}} to which the code to be sent\*\*: Define the \{\{num}} tag - Specify a number to which the user needs to send SMS for opting in to the org's promotional SMS
        * \*Define the \{\{Optin}} ta&#x67;**: Specify the opt out message that will be replaced wherever the \{\{Optin}} tag is used in SMS templates. Use the + icon and insert \{\{**&#x63;od&#x65;**}} and \{\{**&#x6E;u&#x6D;**}} as appropriate\
          Click **&#x53;AVE\*\* 
      </td>
    </tr>
  </tbody>
</Table>

3. Select the desired Optin type:

* **Single**: Registered customers with no opt-in preference and customers who are opted-in for org's or OU's promotional are targeted in this type.

* **Restricted Single**: Only customers who are opted-in for org's or OU's promotional SMS are targeted in this type

* **Double**: Customers are allowed to manually opt-in to the org's or OU's promotional SMS and customers will keep receiving messages only after verifying opt-in status.

* When you select Double, you will see the Verification Message option. Click the respective Configure option and configure the message. If you want to use unicode charecters in the message, check Allow Unicode Characters

The following table shows the org's preference of sending promotional messages in each type

<Table align={["left","left","left","left"]}>
  <thead>
    <tr>
      <th>
        Type
      </th>

      <th>
        Promotional SMS to Opt In numbers
      </th>

      <th>
        Promotional SMS to no Preference numbers
      </th>

      <th>
        Promotional SMSs to Opted out numbers
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Single
      </td>

      <td>
        Yes
      </td>

      <td>
        Yes
      </td>

      <td>
        No
      </td>
    </tr>

    <tr>
      <td>
        Restricted Single
      </td>

      <td>
        Yes
      </td>

      <td>
        Yes
      </td>

      <td>
        No
      </td>
    </tr>

    <tr>
      <td>
        Double\
        In Double type, you need to configure the verification message that will be sent to customers to manually opt-in
      </td>

      <td>
        No by default (**Customers will start getting promotional SMSs only after verifying their numbers**)
      </td>

      <td>
        No by default (**Customers will start getting promotional SMSs only after verifying their numbers**)
      </td>

      <td>
        No
      </td>
    </tr>
  </tbody>
</Table>

4. Check Send Optin confirmation SMS and configure the message to be sent on successful opt-in

5. Check Send Optout confirmation SMS and configure the message to be sent on successful opt-out

6. In Sender Number, specify the number from which you want to send promotional SMS

## Missed Call based Subscription Settings for Transaction SMSs

For Transactional SMs, you can configure only opt-in and opt-out tags. The **Optin Type** and **Optout Type** are set by default. You cannot modify it.

Scroll down to the **Transactional SMS setting** section

![01512e9 EnCiS4rBiNvFaLtWSGRAgNaDGSge2tOFAQ](https://files.readme.io/01512e9-EnCiS4rBiNvFaLtWSGRAgNaDGSge2tOFAQ.jpg)

To configure the Optout tag, click the **Configure** option corresponding to the **Transactional SMS setting**

![a15ed68 NcFVlGu7gtc7 7DhrtQKqGdqcZWrknysvg](https://files.readme.io/a15ed68-NcFVlGu7gtc7_7DhrtQKqGdqcZWrknysvg.jpg)

1. Define the \{\{trans\_unsub\_shortcode}} to be given a missed call: Specify the short code to which customers want to give a missed call to out out of transactional SMSs
2. Define the \{\{Optout}} tag: Specify the opt-out message that will go with the transactional SMSs
3. Click Save to save the changes
