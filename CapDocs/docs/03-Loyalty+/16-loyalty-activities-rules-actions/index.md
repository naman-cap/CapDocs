---
title: Loyalty activities, rules & actions
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
## Activities

A rule expression is a combination of profile, attributes, sub-attributes (for selected attributes), operators, and expression values. Profiles might vary based on the activity and accordingly the attributes, and sub-attributes.

The following table provides the list of profiles supported for each activity. Each profile supports  certain attributes. Click on a profile to see more details.

<Table align={["left","left","left"]}>
  <thead>
    <tr>
      <th>
        Activity
      </th>

      <th>
        Description
      </th>

      <th>
        Supported Profiles
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Make a transaction (TransactionAdd)
      </td>

      <td>
        Transaction Add is a combination of a new transaction and tracker finished activities.  Here, you can evaluate conditions and execute actions on a new transaction, tracker, and transaction complete activities.
      </td>

      <td>
        [currentCustomer](https://capillary-documentation.readme.io/docs/profiles-attributes#current-customer-currentcustomer)\
        [currentCustomerPartner](https://capillary-documentation.readme.io/docs/profiles-attributes#current-customer-partner-currentcustomerpartner)\
        [currentEvent](https://capillary-documentation.readme.io/docs/profiles-attributes#current-event-currentevent)\
        [currentStore](https://capillary-documentation.readme.io/docs/profiles-attributes#current-store-currentstore)\
        [currentTracker](https://capillary-documentation.readme.io/docs/profiles-attributes#current-tracker-currenttracker)\
        [currentTrackerCondition](https://capillary-documentation.readme.io/docs/profiles-attributes#current-tracker-condition-currenttrackercondition)\
        [currentTxn](https://capillary-documentation.readme.io/docs/profiles-attributes#current-transaction-currenttxn)\
        [groupPrimaryCustomer](https://capillary-documentation.readme.io/docs/profiles-attributes#group-primary-customer-groupprimarycustomer)\
        [organization](https://capillary-documentation.readme.io/docs/profiles-attributes#organization-organization)\
        [program](https://capillary-documentation.readme.io/docs/profiles-attributes#program-program)\
        [referrerCode](https://capillary-documentation.readme.io/docs/profiles-attributes#referrer-code-referrercode)\
        [tenderProfile](https://capillary-documentation.readme.io/docs/profiles-attributes#tender-profile-tenderprofile)
      </td>
    </tr>

    <tr>
      <td>
        DelayedAccrual
      </td>

      <td>
        Credits points to customer account after a specific number of days.
      </td>

      <td>
        [currentCustomer](https://capillary-documentation.readme.io/docs/profiles-attributes#current-customer-currentcustomer)\
        [currentEvent](https://capillary-documentation.readme.io/docs/profiles-attributes#current-event-currentevent)\
        [currentStore](https://capillary-documentation.readme.io/docs/profiles-attributes#current-store-currentstore)\
        [program](https://capillary-documentation.readme.io/docs/profiles-attributes#program-program)
      </td>
    </tr>

    <tr>
      <td>
        CustomerRegistration
      </td>

      <td>
        Create rules and execute actions on a new customer registration activity.
      </td>

      <td>
        [currentCustomer](https://capillary-documentation.readme.io/docs/profiles-attributes#current-customer-currentcustomer)\
        [currentCustomerPartner](https://capillary-documentation.readme.io/docs/profiles-attributes#current-customer-partner-currentcustomerpartner)\
        [currentEvent](https://capillary-documentation.readme.io/docs/profiles-attributes#current-event-currentevent)\
        [currentStore](https://capillary-documentation.readme.io/docs/profiles-attributes#current-store-currentstore)\
        [groupPrimaryCustomer](https://capillary-documentation.readme.io/docs/profiles-attributes#group-primary-customer-groupprimarycustomer)\
        [organization](https://capillary-documentation.readme.io/docs/profiles-attributes#organization-organization)\
        [program](https://capillary-documentation.readme.io/docs/profiles-attributes#program-program)\
        [referrerCode](https://capillary-documentation.readme.io/docs/profiles-attributes#referrer-code-referrercode)
      </td>
    </tr>

    <tr>
      <td>
        PointsRedemption
      </td>

      <td>
        Configure rules and actions on points redemption activity.\
        Even before validating points redemption conditions, the system checks whether the points are redeemable.
      </td>

      <td>
        [currentCustomer](https://capillary-documentation.readme.io/docs/profiles-attributes#current-customer-currentcustomer)\
        [currentCustomerPartner](https://capillary-documentation.readme.io/docs/profiles-attributes#current-customer-partner-currentcustomerpartner)\
        [currentEvent](https://capillary-documentation.readme.io/docs/profiles-attributes#current-event-currentevent)\
        [currentStore](https://capillary-documentation.readme.io/docs/profiles-attributes#current-store-currentstore)\
        [organization](https://capillary-documentation.readme.io/docs/profiles-attributes#organization-organization)\
        [program](https://capillary-documentation.readme.io/docs/profiles-attributes#program-program)
      </td>
    </tr>

    <tr>
      <td>
        CouponRedemption
      </td>

      <td>
        Define rules and conditions on coupon redemption activity.
      </td>

      <td>
        [currentCustomer](https://capillary-documentation.readme.io/docs/profiles-attributes#current-customer-currentcustomer)\
        [currentCustomerPartner](https://capillary-documentation.readme.io/docs/profiles-attributes#current-customer-partner-currentcustomerpartner)\
        [currentEvent](https://capillary-documentation.readme.io/docs/profiles-attributes#current-event-currentevent)\
        [currentStore](https://capillary-documentation.readme.io/docs/profiles-attributes#current-store-currentstore)\
        [organization](https://capillary-documentation.readme.io/docs/profiles-attributes#organization-organization)\
        [program](https://capillary-documentation.readme.io/docs/profiles-attributes#program-program)
      </td>
    </tr>

    <tr>
      <td>
        ReturnTransaction
      </td>

      <td>
        Configure rules and actions on transaction return activity.
      </td>

      <td>
        [currentCustomer](https://capillary-documentation.readme.io/docs/profiles-attributes#current-customer-currentcustomer)\
        [currentCustomerPartner](https://capillary-documentation.readme.io/docs/profiles-attributes#current-customer-partner-currentcustomerpartner)\
        [currentEvent](https://capillary-documentation.readme.io/docs/profiles-attributes#current-event-currentevent)\
        [currentStore](https://capillary-documentation.readme.io/docs/profiles-attributes#current-store-currentstore)\
        [groupPrimaryCustomer](https://capillary-documentation.readme.io/docs/profiles-attributes#group-primary-customer-groupprimarycustomer)\
        [organization](https://capillary-documentation.readme.io/docs/profiles-attributes#organization-organization)\
        [program](https://capillary-documentation.readme.io/docs/profiles-attributes#program-program)\
        [returnBill](https://capillary-documentation.readme.io/docs/profiles-attributes#return-bill-returnbill)\
        [tenderProfile](https://capillary-documentation.readme.io/docs/profiles-attributes#tender-profile-tenderprofile)
      </td>
    </tr>

    <tr>
      <td>
        CustomerUpdate
      </td>

      <td>
        Configure rules and actions on the customer profile update activity.
      </td>

      <td>
        [currentCustomer](https://capillary-documentation.readme.io/docs/profiles-attributes#current-customer-currentcustomer)\
        [currentCustomerPartner](https://capillary-documentation.readme.io/docs/profiles-attributes#current-customer-partner-currentcustomerpartner)\
        [currentEvent](https://capillary-documentation.readme.io/docs/profiles-attributes#current-event-currentevent)\
        [currentStore](https://capillary-documentation.readme.io/docs/profiles-attributes#current-store-currentstore)\
        [groupPrimaryCustomer](https://capillary-documentation.readme.io/docs/profiles-attributes#group-primary-customer-groupprimarycustomer)\
        [organization](https://capillary-documentation.readme.io/docs/profiles-attributes#organization-organization)\
        [program](https://capillary-documentation.readme.io/docs/profiles-attributes#program-program)
      </td>
    </tr>

    <tr>
      <td>
        TransactionUpdate
      </td>

      <td>
        Configure rules and actions on the transaction update activity.
      </td>

      <td>
        [currentCustomer](https://capillary-documentation.readme.io/docs/profiles-attributes#current-customer-currentcustomer)\
        [currentCustomerPartner](https://capillary-documentation.readme.io/docs/profiles-attributes#current-customer-partner-currentcustomerpartner)\
        [currentEvent](https://capillary-documentation.readme.io/docs/profiles-attributes#current-event-currentevent)\
        [currentStore](https://capillary-documentation.readme.io/docs/profiles-attributes#current-store-currentstore)\
        [currentTxn](https://capillary-documentation.readme.io/docs/profiles-attributes#current-transaction-currenttxn)\
        [groupPrimaryCustomer](https://capillary-documentation.readme.io/docs/profiles-attributes#group-primary-customer-groupprimarycustomer)\
        [organization](https://capillary-documentation.readme.io/docs/profiles-attributes#organization-organization)\
        [program](https://capillary-documentation.readme.io/docs/profiles-attributes#program-program)
      </td>
    </tr>

    <tr>
      <td>
        SocialConnect
      </td>

      <td>
        Execute actions for social events (events through Social Connect)
      </td>

      <td>
        [currentCustomer](https://capillary-documentation.readme.io/docs/profiles-attributes#current-customer-currentcustomer)\
        [currentCustomerPartner](https://capillary-documentation.readme.io/docs/profiles-attributes#current-customer-partner-currentcustomerpartner)\
        [currentEvent](https://capillary-documentation.readme.io/docs/profiles-attributes#current-event-currentevent)\
        [currentStore](https://capillary-documentation.readme.io/docs/profiles-attributes#current-store-currentstore)\
        [groupPrimaryCustomer](https://capillary-documentation.readme.io/docs/profiles-attributes#group-primary-customer-groupprimarycustomer)\
        [organization](https://capillary-documentation.readme.io/docs/profiles-attributes#organization-organization)\
        [program](https://capillary-documentation.readme.io/docs/profiles-attributes#program-program)
      </td>
    </tr>

    <tr>
      <td>
        SlabUpgrade
      </td>

      <td>
        Configure rules for the tier upgrade activity.
      </td>

      <td>
        [currentCustomer](https://capillary-documentation.readme.io/docs/profiles-attributes#current-customer-currentcustomer)\
        [currentCustomerPartner](https://capillary-documentation.readme.io/docs/profiles-attributes#current-customer-partner-currentcustomerpartner)\
        [currentEvent](https://capillary-documentation.readme.io/docs/profiles-attributes#current-event-currentevent)\
        [currentStore](https://capillary-documentation.readme.io/docs/profiles-attributes#current-store-currentstore)\
        [currentTxn](https://capillary-documentation.readme.io/docs/profiles-attributes#current-transaction-currenttxn)\
        [groupPrimaryCustomer](https://capillary-documentation.readme.io/docs/profiles-attributes#group-primary-customer-groupprimarycustomer)\
        [organization](https://capillary-documentation.readme.io/docs/profiles-attributes#organization-organization)\
        [program](https://capillary-documentation.readme.io/docs/profiles-attributes#program-program)\
        [referrerCode](https://capillary-documentation.readme.io/docs/profiles-attributes#referrer-code-referrercode)\
        [tenderProfile](https://capillary-documentation.readme.io/docs/profiles-attributes#tender-profile-tenderprofile)
      </td>
    </tr>

    <tr>
      <td>
        TargetCompleted
      </td>

      <td>
        Configure rules for target-based loyalty.
      </td>

      <td>
        [currentCustomer](https://capillary-documentation.readme.io/docs/profiles-attributes#current-customer-currentcustomer)\
        [currentCustomerPartner](https://capillary-documentation.readme.io/docs/profiles-attributes#current-customer-partner-currentcustomerpartner)\
        [currentEvent](https://capillary-documentation.readme.io/docs/profiles-attributes#current-event-currentevent)\
        [currentStore](https://capillary-documentation.readme.io/docs/profiles-attributes#current-store-currentstore)\
        [groupPrimaryCustomer](https://capillary-documentation.readme.io/docs/profiles-attributes#group-primary-customer-groupprimarycustomer)\
        [organization](https://capillary-documentation.readme.io/docs/profiles-attributes#organization-organization)\
        [program](https://capillary-documentation.readme.io/docs/profiles-attributes#program-program)
      </td>
    </tr>
  </tbody>
</Table>

## Actions

You can set relevant actions when customers meet a specific condition. Loyalty+ allows you to define rules and execute actions when a condition is satisfied. The following are the different actions supported in Loyalty+.

<Table align={["left","left"]}>
  <thead>
    <tr>
      <th>
        Action
      </th>

      <th>
        Description
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Award points to referee
      </td>

      <td>
        This action allows you to award points to the referee. A referee is a customer who has been referred by a referrer. To refer to the steps involved in awarding points to the referee, see [here](https://capillary-documentation.readme.io/docs/award-points-to-referee).
      </td>
    </tr>

    <tr>
      <td>
        Award points to referrer
      </td>

      <td>
        This action allows you to award points to the referrer. A referrer is a customer who recommends more customers to interact with the brand. For instructions to award points to the referrer, see [here](https://capillary-documentation.readme.io/docs/award-points-to-referrer).
      </td>
    </tr>

    <tr>
      <td>
        Forward to set
      </td>

      <td>
        This action allows you to evaluate conditions on individual line items or individual payment methods of a transaction. To refer to the steps involved in forwarding to set, see [here](https://capillary-documentation.readme.io/docs/forward-to-set).
      </td>
    </tr>

    <tr>
      <td>
        Issue coupon
      </td>

      <td>
        This action allows you to define criteria for accepting points back. To refer to the steps involved in issuing a coupon, see [here](https://capillary-documentation.readme.io/docs/issue-coupon).
      </td>
    </tr>

    <tr>
      <td>
        Renew tier
      </td>

      <td>
        This action allows you to renew the tier of a customer. To refer to the steps involved in sending messages, see [here](https://capillary-documentation.readme.io/docs/renew-tier).
      </td>
    </tr>

    <tr>
      <td>
        Send mail
      </td>

      <td>
        This action allows you to send an email to a customer when a specific condition is satisfied. To refer to the steps involved in sending an email, see [here](https://capillary-documentation.readme.io/docs/send-mail).
      </td>
    </tr>

    <tr>
      <td>
        Send messages
      </td>

      <td>
        This action allows you to send messages over a chosen communication channel(s). To refer to the steps involved in sending messages, see [here](https://capillary-documentation.readme.io/docs/send-messages).
      </td>
    </tr>

    <tr>
      <td>
        Send mobile push
      </td>

      <td>
        This action allows you to send push notifications. To refer to the steps involved in sending messages, see [here](https://capillary-documentation.readme.io/docs/send-mobile-push).
      </td>
    </tr>

    <tr>
      <td>
        Send SMS
      </td>

      <td>
        This action allows you to send an SMS to a customer. To refer to the steps involved in sending an SMS, see [here](https://capillary-documentation.readme.io/docs/send-sms).
      </td>
    </tr>

    <tr>
      <td>
        Send WeChat
      </td>

      <td>
        This action allows you to send messages to customers over WeChat. To refer to the steps involved in sending messages over WeChat, see here.
      </td>
    </tr>

    <tr>
      <td>
        Tag customer
      </td>

      <td>
        This action allows you to add tag(s) to the customer(s).  

        Note: This option is disabled till further notice.
      </td>
    </tr>

    <tr>
      <td>
        Transaction point allocation
      </td>

      <td>
        This action allows you to allocate points for transactions. To refer to the steps involved in sending messages, see here.
      </td>
    </tr>

    <tr>
      <td>
        Upgrade to tier
      </td>

      <td>
        This action allows you to upgrade a customer to a specific tier.  To refer to the steps involved in sending messages, see here.
      </td>
    </tr>

    <tr>
      <td>
        Upgrade using tier
      </td>

      <td>
        This action allows you to upgrade a customer based on a specific tier action. To refer to the steps involved in sending messages, see here.
      </td>
    </tr>
  </tbody>
</Table>

## Configure Notifications

Notify customers when an action is executed successfully. The system can send notifications through different channels such as SMS, email, WeChat, and Mobile Push. 

Notification channels are of two types:

* **Mandatory Channels**: Channels that are mandatory for sending the notifications
* **Priority Channels**: Channels that need to be triggered based on priority and availability. For example, if Mobile is set as priority 1, Mobile Push as priority 2, and email as priority 3, the system first checks whether SMS is configured and checks if the mobile number is available for the customer. If anyone fails, then it will try to send the notification through mobile push and so on. 

> 📘
>
> * Channels that are selected in **Mandatory Channels** will not appear in **Priority Channels** and vice versa.

#### To configure notifications, follow these steps.

1. Click any selected **Action** to set up channel notifications.

![ea0e9b8 Bm0fzS4FokepPFhCq3GuuHswRl8x2EJ1rw](https://files.readme.io/ea0e9b8-Bm0fzS4FokepPFhCq3GuuHswRl8x2EJ1rw.png)

2. Select **Mandatory Channels** and **Priority Channels** for the notifications and click **Save**.

![5f7cd90 ispKIT6uIdTHMgjRc lseuJe0qyZO5Po1A](https://files.readme.io/5f7cd90-ispKIT6uIdTHMgjRc-lseuJe0qyZO5Po1A.png)

![c1c08c2 XY3 D3a4e3up suJMD3yO5rQ9aLBRKuZqg](https://files.readme.io/c1c08c2-XY3-D3a4e3up-suJMD3yO5rQ9aLBRKuZqg.png)

3. Configure message templates and set the delay time. The following example shows the configuration screen for WeChat.
4. Choose the account id and template. Preview the message and click **Save**. For more details on configuring notifications, see Configuring Notification Messages.
5. Click **Save** to save the action configurations.
6. Again click on **Save** to save the ruleset.
7. Reconfigure the loyalty program to reflect the changes in the live program.

> 📘
>
> * To know more about events, and writing rule expressions, see Creating Rules for the Loyalty Program.
> * A rule could have multiple rule sets. To check multiple cases to execute an action, create forward cases for each condition and set the execute action in the final sub ruleset.
