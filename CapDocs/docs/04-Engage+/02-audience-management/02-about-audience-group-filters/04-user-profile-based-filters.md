---
title: User Profile Based Filters
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
## Subscription status

Lets you build an audience group based on their mobile number and email subscription status - Opt-in or Opt-out.

![90ab173 HXLB6hNS5rzjWhVI9OABTMtEhWfG2Q4Zjw](https://files.readme.io/90ab173-HXLB6hNS5rzjWhVI9OABTMtEhWfG2Q4Zjw.png)

<Table align={["left","left"]}>
  <thead>
    <tr>
      <th>
        Filter
      </th>

      <th>
        Description
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Channel (Subscription status for)\*
      </td>

      <td>
        Lets you build an audience group based on their mobile number and email subscription status.

        You can either Opt-in or Opt-out from
        a given channel. To learn more, see [here](https://docs.capillarytech.com/docs/common-filter-optionsin-filters#/channel).
      </td>
    </tr>
  </tbody>
</Table>

## NDNC status

Lets you build an audience group based on NDNC (National Do Not Disturb) status, NDNC, Invalid, DND, and Unknown. You can select more than one option.

![23df1c7 JpT1S66CXBNrQBIAKR7LwWiVZW GFtLK4A](https://files.readme.io/23df1c7-JpT1S66CXBNrQBIAKR7LwWiVZW_GFtLK4A.png)

<Table align={["left","left"]}>
  <thead>
    <tr>
      <th>
        Filter
      </th>

      <th>
        Description
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Status\*
      </td>

      <td>
        You can create a group of audience members based on NDNC status (NDNC, Invalid, DND, or Unknown).

        You can select more than one option. To learn more, see [here](https://docs.capillarytech.com/docs/common-filter-optionsin-filters#/ndnc-status).
      </td>
    </tr>
  </tbody>
</Table>

## Fraud customer

Lets you build audience groups based on their fraud statuses.

![26552ab MyZD Ops kEmt 3JHn1Wd9jCDw26D7BnjQ](https://files.readme.io/26552ab-MyZD_Ops_kEmt-3JHn1Wd9jCDw26D7BnjQ.png)

<Table align={["left","left"]}>
  <thead>
    <tr>
      <th>
        Filter
      </th>

      <th>
        Description
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Status\*
      </td>

      <td>
        Consider the customer details based on fraud statuses.

        When creating an audience group, you can apply the **Fraud Customer** filter to exclude customers with certain fraud statuses. If you choose not to use this filter, the system automatically includes customers with statuses ACTIVE, FRAUD\_SUSPECTED, SUSPENDED, NOT-CAPTURED, NOT-APPLICABLE, PENDING\_DELETION, and INVALID.  Customers with all other fraud statuses are excluded from the group.
      </td>
    </tr>
  </tbody>
</Table>

## Demographic details

Lets you build an audience group based on their demographic details such as language, gender, marital status, birthday, and city.\
You will only see demographic fields that are configured for your organization.

![3248c94 mpcdzRe4q7oSrdqETad2G54uFRn4He 32Q](https://files.readme.io/3248c94-mpcdzRe4q7oSrdqETad2G54uFRn4He_32Q.png)

<Table align={["left","left"]}>
  <thead>
    <tr>
      <th>
        Filter
      </th>

      <th>
        Description
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Demographic\*
      </td>

      <td>
        You will see standard demographic fields such as Gender, Age, Marital Status, Birthday, and City along with custom fields and extended fields. The options will vary based on the selected filter.

        For example, for Gender, you will see Male, Female, Not Captured, Invalid, and Not Interested, whereas, for Marital Status, you will see Single, Married, Not Captured, Invalid, and Not Interested. You need to use these filters and options accordingly.
      </td>
    </tr>
  </tbody>
</Table>

## Unique identifier

Lets you export an audience group with a specific identifier that **contains**, **starts with**, **ends**, or **ends with** a specific keyword. You can also get customers with blank identifiers.

<Table align={["left","left"]}>
  <thead>
    <tr>
      <th>
        Filter
      </th>

      <th>
        Description
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Identifier\*
      </td>

      <td>
        This filter can let you export an audience group with a specific identifier that **contains**, **starts with**, **ends**, or **ends with** a specific keyword. You can also get customers with blank identifiers.

        To learn more about this filter, see here.
        (link)

        You can choose either mobile, email or external id.
      </td>
    </tr>
  </tbody>
</Table>

## Channel

This filter lets you build an audience list based on the channel in which they are available. Currently, EI supports the channels WeChat, Line, Web Engage, and e-commerce. You can filter customers from multiple channels. For example, you can fetch customers that are enrolled in any of the channels WeChat account, or Web Engage.

![f194dc0 C6hV1 FyUwr6mHejfpiIz x0BACzpbjvNg](https://files.readme.io/f194dc0-C6hV1-FyUwr6mHejfpiIz_x0BACzpbjvNg.png)

<Table align={["left","left"]}>
  <thead>
    <tr>
      <th>
        Filter
      </th>

      <th>
        Description
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Channel\*
      </td>

      <td>
        You can further filter by how customers were
        contacted through a specific communication channel(s) such as email, mobile, web engage, line, e-commerce, and WeChat. You can select one or more channels.
      </td>
    </tr>

    <tr>
      <td>
        Available On
      </td>

      <td>
        Lets you filter customers who have registered using the channel and are available on android, ios, mobile, email, WeChat, or any device. Click **+/- Fields**> Select **Available On**.
      </td>
    </tr>

    <tr>
      <td>
        Store Hierarchy
      </td>

      <td>
        Lets you filter customers who have registered using the channel in the store or zone. Click **+/- Fields** > Select **Store Hierarchy**.

        You can also select stores by zones and concepts.

        You can select the registered customer by using the hierarchy as a store, zone, and concept.
      </td>
    </tr>

    <tr>
      <td>
        Duration
      </td>

      <td>
        Lets you filter customers who have registered in the specified channel during that particular period. You can choose either between specific dates, after a specific date, or before a specific date.

        You can choose duration either by [Specific dates](https://docs.capillarytech.com/docs/common-filter-optionsin-filters#/specific-dates) or [Relative days](https://docs.capillarytech.com/docs/common-filter-optionsin-filters#/relative-days).
      </td>
    </tr>

    <tr>
      <td>
        Account Name
      </td>

      <td>
        Lets you filter customers who have registered using the channel and account name(s). Click **+/- Fields** > Select **Account Name** (You can select one or more account name using the checkbox).
      </td>
    </tr>
  </tbody>
</Table>

## Custom field

Let you build an audience list based on their custom field values.

![6740a56 dV00fFAWrCHw mnQ9zcXLs5CkyCFs IfyA](https://files.readme.io/6740a56-dV00fFAWrCHw-mnQ9zcXLs5CkyCFs_IfyA.png)

<Table align={["left","left"]}>
  <thead>
    <tr>
      <th>
        Filter
      </th>

      <th>
        Description
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Fields\*
      </td>

      <td>
        You can retrieve an audience list based on their custom field values.

        Click on the blank line to see the list of custom fields available for the org and select desired filters using the check-box.

        The options that appear for each custom field depend on the type of the input field and field values.
      </td>
    </tr>
  </tbody>
</Table>

## Global test/control

This filter lets you get an audience group that belongs to the global level test or control.

<Note title="Note">
The customer list is split into the test group and control group using random sampling, which helps to determine the effectiveness of the campaign by comparing the results generated by the test group and control group. You can configure the test/control ratio in campaign settings for each organization.
</Note>

![988c4e9 u2gLUWzdmt46WcF3J  ONwCoyh5vne8q8A](https://files.readme.io/988c4e9-u2gLUWzdmt46WcF3J__ONwCoyh5vne8q8A.png)

<Table align={["left","left"]}>
  <thead>
    <tr>
      <th>
        Filter
      </th>

      <th>
        Description
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Belong to\*
      </td>

      <td>
        Select Test to get customers of the test group and Control to get customers of the control group.

        You can also Include or Exclude customers of the selected group(s) using the respective drop-down.
      </td>
    </tr>
  </tbody>
</Table>

## Age group

This filter lets you filter customers by their age group and/or by their children's and spouses' age group. This filter supports age groups of customers and their families that are captured through extended fields and not through custom fields.

![54506c6 9g5JNQsteogZGEdUgxX2vquJdhg8JIafMg](https://files.readme.io/54506c6-9g5JNQsteogZGEdUgxX2vquJdhg8JIafMg.png)

<Table align={["left","left"]}>
  <thead>
    <tr>
      <th>
        Filter
      </th>

      <th>
        Description
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Age\*
      </td>

      <td>
        This filter lets you filter customers by their age group. You can select more than one parameter (age, spouse age, child age).
      </td>
    </tr>

    <tr>
      <td>
        Filter
      </td>

      <td>
        You can also select the parameters like **year**, **month**, and **days**.
        You can select the age range using the operators **Greater than equal**, **Less than equal**, **Equals**, and In the range of (this also considers the minimum and maximum age mentioned.
      </td>
    </tr>
  </tbody>
</Table>

## Slab change

This filter lets you build an audience group with customers that moved from one loyalty slab to another (upgraded or downgraded from one slab to another) in a particular period.

![4a62e2f NyPvUG0wU0N uvCmuK91jXrjG6Pvz347ow](https://files.readme.io/4a62e2f-NyPvUG0wU0N_uvCmuK91jXrjG6Pvz347ow.png)

<Table align={["left","left"]}>
  <thead>
    <tr>
      <th>
        Filter
      </th>

      <th>
        Description
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Slab Change\*
      </td>

      <td>
        To select your preferred slab change - from slab x to slab y.
      </td>
    </tr>

    <tr>
      <td>
        During\*
      </td>

      <td>
        This lets you further filter customers whose slabs were changed during a specific period.
        You can either choose lifetime or duration. Duration could be Specific dates or Relative days.
        Lifetime will consider transactions of the customer from the time of enrolling into the loyalty program.
      </td>
    </tr>
  </tbody>
</Table>