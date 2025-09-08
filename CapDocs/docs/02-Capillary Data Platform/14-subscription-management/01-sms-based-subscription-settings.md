---
title: SMS based Subscription Settings
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
The **Capillary Subscription Settings** module lets you configure opt-in or opt-out through a missed call or SMS. 

* For missed call-based opt-in and opt-out, you need to configure different numbers for each action. i.e., opt-in to promotional SMSs, opt-in to transaction SMSs, opt-out of promotional SMSs, opt-out of transaction SMSs.
* For SMS-based opt-in and opt-out, you can have just one number for all actions but with different commands. For example, to opt-out, send STOP to 1234; to opt-in send START to 1234. 

## Access SMS subscription settings page

To configure the SMS Subscription Settings page:

1. On InTouch **Settings**, click **Subscription Settings** > **SMS**
2. Click **Edit** Settings

![737ab63 SB1](https://files.readme.io/737ab63-SB1.jpg)

3. For orgs with multiple brands, you need to configure settings for each organization unit (OU).

* To configure settings at the OU level, check Have different settings for different organizational units. 

## Enable subscription status syncing across OUs (for MLP enabled orgs)

Orgs with multiple org units can engage a customer through different org units of the org. The customer gives confirmation for opt-ins and opt-outs through the option configured for the org unit.

* **Opt-in to all OUs if subscription entry from any of the OUs is Opt-in**: Check this option to opt-in customers to all org units If they opt-in to any of the org units.\
  For example, assume the org has four org units - OU1, OU2, OU3, and OU4. if a customer opts into OU3, enabling this option will opt in the customer to OU1, OU2, and OU4 also.
* **Opt-out from all OUs if the first subscription entry from any of the OUs is Opt-out**: Check this option to opt-out customers from all org units of the org if they were opt-out from any of the org units.\
  For example, in the preceding example, if a customer opt-outs from OU2, enabling this option will opt out the customer from the other OUs as well - OU1, OU3, and OU4

The following settings are common for both single-brand orgs and multi-brand orgs.

## Subscription Settings for Promotional SMSs

For Promotional SMSs subscription through missed call, you need to have a different number for each action and follow the steps specified below. 

1. In **Customers can modify preference by**, choose to give a missed call 
2. If you are switching the preference, you will see a prompt screen to confirm the change in preference. Click **Reset & Proceed** to continue.

**Note**: The current preference settings will be lost once you click **Reset & Proceed** 

![8deb35d SB2](https://files.readme.io/8deb35d-SB2.jpg)

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
        * **Define the \{\{code}} to be sent**: Define the \{\{code}} tag - the command that you want to have in the SMS to opt-out a mobile number from the promotional SMSs of the current org or OU
        * **Define the \{\{num}} to which the code to be sent**: Define the \{\{num}} tag - a number to which customers need to send an SMS to opt-out of promotional SMSs of the current org or OU
        * **Define the \{\{Optout}} tag**: Specify the opt-out message that needs to be sent to customers in place of the tag. Use the + icon and insert \{\{**code**}} and \{\{**num**}} as appropriate

        - Click **Save**
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
        * Click **Configure** to setup the optin tag. You will see the following options
        * **Define the \{\{code}} to be sent**: Define the\{\{code}} tag - the command that you want to have in the SMS to opt-in a mobile number 
        * **Define the \{\{num}} to which the code to be sent**: Define the \{\{num}} tag - Specify a number to which the user needs to send SMS for opting in to the org's promotional SMS
        * **Define the \{\{Optin}} tag**: Specify the opt-in message that you want to send to customers in place of the \{\{Optin}} tag used in SMS templates. Click the + icon and insert \{\{**code**}} and \{\{**num**}} as appropriate

        - Click **Save**
      </td>
    </tr>
  </tbody>
</Table>

4. Select the desired **Optin type**:

* **Single**: Registered customers with no opt-in preference and customers who are opted-in for org's or OU's promotional are targeted in this type.  
* **Restricted Single**: Only customers who are opted-in for the org level or OU level promotional SMS are targeted in this type
* **Double**: Customers are allowed to manually opt-in to the org's promotional SMS and receive SMSs only after verifying their opt-in status.\
  In Double, you will need to send a verification message to allow the customers to confirm their opt-in manually.  You will see a new field **Verification Message**. Click the respective **Configure** option and set the verification message. If you are using Unicode characters in the message, check **Allow Unicode Characters**

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

5. Check **Send Optin confirmation SMS** and configure the message to be sent on a successful opt-in
6. Check **Send Optout confirmation SMS** and configure the message to be sent on a successful opt-out
7. In **Sender Number**, specify the dedicated number to send promotional SMS (for the current org or OU)

## SMS based Subscription Settings for Transaction SMSs

For Transactional SMSs, you can configure only opt-in and opt-out tags. The Optin Type and Optout Type are set by default. You cannot modify it.

Scroll down to the Transactional SMS setting section

![266e549 SB3](https://files.readme.io/266e549-SB3.jpg)

To configure the Optout tag, click the Configure option corresponding to the Transactional SMS setting

![684f8de SB4](https://files.readme.io/684f8de-SB4.jpg)

1. **Define the \{\{trans\_unsub\_command}} to be sent**: Specify your preferred command to out out of transactional SMSs (for example: STOP).
2. **Define the \{\{trans\_unsub\_shortcode}} to be sent**: Specify the shortcode to which customers need to send the SMS out of transactional SMSs.
3. **Define the \{\{Optout}} tag**: Specify the opt-out message that will go with the transactional SMSs for SMS-based opt-out.
4. Click **Save** to save the changes.
