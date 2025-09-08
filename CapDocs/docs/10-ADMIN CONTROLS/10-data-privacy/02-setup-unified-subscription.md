---
title: Unified Subscription
excerpt: This page provides you with information on unified subscription.
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
The Unified subscription introduces additional configurations and serves as an additional layer atop the existing subscription logic, Single, Restricted, and Double. This enables it to analyze subscription permissions across source profiles and make decisions on whether to send communications. For details about Single, Restricted, and Double subscription types, please refer to our  [Subscription management](https://docs.capillarytech.com/docs/subscription-management-1)documentation and search for 'Single,' 'Restricted,' or 'Double'.

<Note title="Note">
All existing subscription settings remain in effect when you enable unified subscription. For example, if you've configured synchronization of subscription status across OUs, this setting will also be applied to the unified subscription.
</Note>

With Unified subscription configuration, you can set up additional configurations as follows:

1. **Recently Granted Consent:** The most recent consent given by the customer is considered to decide whether a communication can be sent. This is the default unified subscription settings.
   > 📘 Note:
   >
   > If no consent is present (consent status is not-set on all sources), the existing subscription type (single, restricted single, or double) is used to make this decision.\
   > **Example:** The below table explains a scenario where unified subscription status is enabled with the type "Recently granted consent":

<Table>
  <thead>
    <tr>
      <th>
        Date
      </th>

      <th>
        Source profile & recent consent status
      </th>

      <th>
        Existing




        subscription type
      </th>

      <th>
        Can communication be sent?
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Today
      </td>

      <td>
        Instore: Not set\
        WebEngage: Not set
      </td>

      <td>
        Single
      </td>

      <td>
        Yes\
        The existing subscription type is considered as the recent unified subscription type is not available.
      </td>
    </tr>

    <tr>
      <td>
        Today
      </td>

      <td>
        Instore: Not set\
        WebEngage: Not set
      </td>

      <td>
        Restricted
      </td>

      <td>
        No\
        The existing subscription type is considered as the recent unified subscription type is not available.
      </td>
    </tr>

    <tr>
      <td>
        Tomorrow
      </td>

      <td>
        Instore: Not set\
        WebEngage: Opt-out
      </td>

      <td>
        Single
      </td>

      <td>
        No\
        The existing subscription type is ignored here as the recent unified subscription type is available.
      </td>
    </tr>

    <tr>
      <td>
        Day After Tomorrow
      </td>

      <td>
        Instore: Opt-in\
        WebEngage: Opt-out
      </td>

      <td>
        Single
      </td>

      <td>
        No\
        The existing subscription type is ignored here as the recent unified subscription type is available.
      </td>
    </tr>
  </tbody>
</Table>

2. **Liberal Approach:** Communication will be sent if the customer has agreed to receive communications on any of the source profiles. If the communication status is marked as "Yes" on at least one profile, messages will be allowed to be sent.\
   **Example:** The below table explains a scenario where unified subscription status is enabled with the type "Liberal":

<Table>
  <thead>
    <tr>
      <th>
        Source profile & consent status
      </th>

      <th>
        Existing




        subscription type
      </th>

      <th>
        Can communication be sent?
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Instore: Not set
        WebEngage: Not set
      </td>

      <td>
        Single
      </td>

      <td>
        Yes\
        The existing subscription type is considered as consent statuses are not available.
      </td>
    </tr>

    <tr>
      <td>
        Instore: Not set\
        WebEngage: Not set
      </td>

      <td>
        Restricted
      </td>

      <td>
        No\
        The existing subscription type is considered as consent statuses are not available.
      </td>
    </tr>

    <tr>
      <td>
        Instore: Not set\
        WebEngage: Opt-out
      </td>

      <td>
        Single
      </td>

      <td>
        Yes. The consent status on Instore is considered as Yes.\
        The existing subscription type is ignored here as the consent statuses are available
      </td>
    </tr>

    <tr>
      <td>
        Instore: Opt-in\
        WebEngage: Opt-out
      </td>

      <td>
        Single
      </td>

      <td>
        Yes. The consent status of the Instore profile is Yes.\
        The existing subscription type is ignored here as the recent unified subscription type is available
      </td>
    </tr>
  </tbody>
</Table>

3. **Strict approach:** Communication will be sent only if the customer has agreed to receive communications on all source profiles. Messages will be allowed to be sent only if the communication status is marked as "Yes" on all profiles.\
   The below table explains a scenario where unified subscription status is enabled with the type "Strict". The existing subscription type is ignored.

<Table align={[null,"left",null]}>
  <thead>
    <tr>
      <th>
        Source profile & consent status
      </th>

      <th>
        Existing




        subscription type
      </th>

      <th>
        Can communication be sent?
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Instore: Not set
        WebEngage: Not set
      </td>

      <td>
        Single
      </td>

      <td>
        Yes,  because both consent statuses are Not set and the system considers the existing subscription type. In Single, Not set is considered as 'Yes'
      </td>
    </tr>

    <tr>
      <td>
        Instore: Not set\
        WebEngage: Not set
      </td>

      <td>
        Restricted
      </td>

      <td>
        No,  because both consent statuses are Not set and the system considers the existing subscription type. In Restricted, only Opt-in is considered as 'Yes'.
      </td>
    </tr>

    <tr>
      <td>
        Instore: Not set\
        WebEngage: Opt-out
      </td>

      <td>
        Single
      </td>

      <td>
        No, because one of the consent statuses is No.\
        The existing subscription type is ignored here as the consent statuses are available.
      </td>
    </tr>

    <tr>
      <td>
        Instore: Opt-in\
        WebEngage: Opt-out
      </td>

      <td>
        Single
      </td>

      <td>
        No, because one of the consent statuses is No.\
        The existing subscription type is ignored here as the consent statuses are available.
      </td>
    </tr>
  </tbody>
</Table>

# Enabling unified subscription

You can raise a ticket with the sustenance team and enable configuration `CONF_UNIFIED_SUBSCRIPTION_ENABLED` to enable the unified subscription.

Sample tickets: 

* [Enabling unified subscription at org level](https://capillarytech.atlassian.net/browse/CAP-106392) 
* [Enabling unified subscription at OU level](https://capillarytech.atlassian.net/browse/CAP-106393)

The turnaround time is five days.

# How this is different from the existing subscription setup?

In the current subscription setup, complications arise when subscription settings vary across source profiles. Refer to the image below for an illustration:

![301b54f Subscription setting](https://files.readme.io/301b54f-Subscription_setting.gif)

In the above image, you can see that subscription permission for each source is different.

The Unified subscription resolves this complexity and makes informed decisions regarding the sending of promotional or transactional messages.
