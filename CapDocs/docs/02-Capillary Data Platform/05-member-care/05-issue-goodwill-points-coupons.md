---
title: Issue goodwill points & coupons
excerpt: >-
  Administrators of an org can manage goodwill requests and also issue points or
  coupons directly to customers.
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
<Note title="Note">
Only goodwill requests can be raised from new Member Care UI. For everything else, use old Member Care UI.
</Note>

## Goodwill coupons

> 📘 This is not applicable for groups.

### Issue Goodwill coupon

To instantly issue a coupon to a group or a customer, perform the following:

1. In the navigation pane, go to **Goodwill Adjustments** > click **Coupons**.
2. On the top-right, click **One Step Issual**. The One Step Coupon Issual dialog box appears. 
3. In **Customer Search**, search the customer by mobile number/email/name/external ID
4. In **Comments**, enter a note for issuing the current goodwill points or coupon.
5. In **Reason**, choose a reason for issuing the coupon. 
6. Click **Proceed**.

![62dc6c0 e7UB78WaEdftGHw2mqAhSLckzguRrSOxTg](https://files.readme.io/62dc6c0-e7UB78WaEdftGHw2mqAhSLckzguRrSOxTg.png)

### Approve Goodwill coupon requests

To approve Goodwill coupon requests, do the following.

1. On the left navigation pane, click **Goodwill Adjustments** > **Coupons** that you want to approve.

![b4b2573 l19tYFLmGrfCX0kCJNd9lnuxwsYMRtMxug](https://files.readme.io/b4b2573-l19tYFLmGrfCX0kCJNd9lnuxwsYMRtMxug.png)

2. In the **Pending** tab, scroll to the request that you want to approve and click the respective **Approve** button. You can also search a request by request id using the **Search** box  

> 📘
>
> * To decline a request, click **Decline**. In the **Decline Coupon Request** box, provide the reason for declining this request and click **Proceed**.
> * The approved and declined requests move to the respective tabs - Approved / Declined.

## Goodwill points

### Issue Goodwill points

You can issue Goodwill points to a customer, group or card. If **Auto Approve** is enabled for the org in Goodwill Adjustment Settings, points will be directly issued. When it is disabled, a request is created on the Goodwill requests page and authorized users can approve it.

> 📘 For groups, goodwill point requests are autoapproved and no manual approval is not applicable.

To issue points to a customer directly, follow these steps

1. In the navigation pane, go to **Goodwill Adjustments** >**Points**.
2. On the top-right, click **New Request**. The New Request dialog box appears. 
3. In **Customer Search**, search the customer by mobile number, email ID, name, or external ID. To issue points to a card, type the relevant card number or card external ID.
4. In **Points to be added**, enter the number of points that you want to issue.
5. In **Select program id**, select the loyalty program that you want to associate to these points. Leave it to the default program for single-brand orgs or orgs with a single loyalty program.\
   When you enter card details to search a customer, the loyalty program will be automatically selected which is associated with the card. You can also change this program manually if required.
6. In **Comments**, enter a note for issuing the current goodwill points.
7. In **Reason**, Select a valid reason for issuing goodwill points. 
8. Click **Proceed** 

![82135cb s3esZduy0bEvL5RwSqK59fbUnvH9HGWpYw](https://files.readme.io/82135cb-s3esZduy0bEvL5RwSqK59fbUnvH9HGWpYw.png)

### Approve Goodwill points request

> 📘 This is not applicable for groups.

To approve Goodwill point requests, do the following.

1. On the left navigation pane, click **Goodwill Adjustments** > **Points** that you want to approve.

![82ef190 evwCRRY0BMBSke0WU xhSzDPmfIK3lNePQ](https://files.readme.io/82ef190-evwCRRY0BMBSke0WU-xhSzDPmfIK3lNePQ.png)

2. In the **Pending** tab, scroll to the request that you want to approve and click the respective **Approve** button. You can also search a request by request id using the **Search** box.  

> 📘
>
> * To decline a request, click **Decline**. In the **Decline Coupon Request** box, provide the reason for declining this request and click **Proceed**.
> * The approved and declined requests move to the respective tabs - Approved/ Declined.

## Download Goodwill points/coupon requests

To download the list of goodwill requests in a CSV file, do the following.

1. In **Goodwill Adjustments**, click **Coupons** or **Points download**.
2. Click the **Download** button.
3. Set the duration for which you want to download in the **Start Date** and **End Date** box
4. In **Download**, select the statuses that you want to download - Pending, Approved, and Declined
5. Click **Proceed**.

The list gets downloaded as a CSV file.

## Goodwill Coupon Adjustment Settings

You need to configure Goodwill Coupon Adjustment Settings to do the following.

* Enable or Disable goodwill coupons for the org.
* Add supervisors (org POCs) to be notified when a new goodwill coupon request is logged.
* Add standard reason(s) for issuing goodwill coupons. This reason will be shown on InStore and Member Care while requesting goodwill points or coupons for a customer.
* Add offers (coupons).

To configure Goodwill Adjustment Coupons, follow these steps.

1. In **Member Care**, click **Settings** > **Goodwill Adjustment Settings** > **Coupons**. 
2. Configure each option based on the description provided in the following table and click **Save**.

<Table align={["left","left"]}>
  <thead>
    <tr>
      <th>
        OPTION
      </th>

      <th>
        DESCRIPTION
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Enable goodwill coupons
      </td>

      <td>
        Set to ON to enable goodwill coupon rewards for the org.
      </td>
    </tr>

    <tr>
      <td>
        Access only to associate
      </td>

      <td>
        Set this to ON to allow only Associate Login users to access this feature (on InStore).\
        InStore supports two user roles - Guest Login and Associate Login.
      </td>
    </tr>

    <tr>
      <td>
        Email these on the arrival of a request
      </td>

      <td>
        Select the org users to be notified through email whenever a new goodwill coupon request is created.  

        Click **Select Options** next to the **Email these on the arrival of request** label. You will see the list of org users. Select the desired check-boxes that you want to notify. You can search for a specific user using the **Filter** box.  

        * Click Check All to select all available users  
        * Click Uncheck All to deselect all selected users 
      </td>
    </tr>

    <tr>
      <td>
        Configure reasons for goodwill coupons
      </td>

      <td>
        Add standard reasons that InStore users can choose while issuing Goodwill Coupons.\
        You can add multiple reasons. Use the New box to create a new reason.\
        Reasons configured here will appear as a drop-down list on InStore while issuing goodwill coupons.
      </td>
    </tr>

    <tr>
      <td>
        Offers
      </td>

      <td>
        Offers are coupons of the Offer Management System (OMS). You can use offers that are created already using OMS or create a new offer for Goodwill.\
        To claim offers created through OMS, follow these steps.  

        1. Click **Claim Offer**.  
        2. You will see the list of offers that you can claim. Check the required offers that you want to select.  
        3. Click **Claim**.  

        To create a new offer, see Create Offer of Offer Management System (OMS).  

        * \*Note\*\*: An offer once claimed can be used within the module and cannot be available for other modules.
      </td>
    </tr>
  </tbody>
</Table>

## Goodwill Points Adjustment Settings

Goodwill Points Adjustment Settings let you configure the following.

* Enable or Disable goodwill points for the org.
* Add supervisors for notifying when goodwill coupons are issued.
* Set the default TILL through which goodwill points are issued.
* Set expiry strategy for the goodwill points issued.
* Configure SMS/email notification that will be sent to customers when goodwill points are issued.

To configure Goodwill Adjustment Points, do the following.

1. Click **Settings**, expand **Goodwill Adjustment Settings**, and click **Coupons** or **Points**. 
2. Configure the following settings: and click **Save**.

![f087c00 0mnqT4WbfmYNvCEnu0Fgx6cQ 6qL0J3HRA](https://files.readme.io/f087c00-0mnqT4WbfmYNvCEnu0Fgx6cQ_6qL0J3HRA.png)

<Table align={["left","left"]}>
  <thead>
    <tr>
      <th>
        OPTION
      </th>

      <th>
        DESCRIPTION
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Enable goodwill points
      </td>

      <td>
        Set to ON to enable rewarding goodwill points for the org.
      </td>
    </tr>

    <tr>
      <td>
        Auto Approve
      </td>

      <td>
        Set to On to auto-approve requests for goodwill points.
      </td>
    </tr>

    <tr>
      <td>
        Access only to associate
      </td>

      <td>
        Set this to ON to allow only Associate Login users to access this feature (on InStore).\
        InStore has two access roles - Guest Login and Associate Login.
      </td>
    </tr>

    <tr>
      <td>
        Email these on arrival of request
      </td>

      <td>
        Select the org users to be notified through email whenever a new goodwill points request is created.  

        Click **Select Options** next to the **Email these on arrival of request** label. You will see the list of org users. Select the desired check-boxes that you want to notify. You can search for a specific user using **the Filter** box.  

        * Click Check All to select all available users.  
        * Click Uncheck All to deselect all selected users. 
      </td>
    </tr>

    <tr>
      <td>
        Configure SMS
      </td>

      <td>
        Configure the SMS message that will be sent to customers when goodwill points are issued.\
        Make use of the predefined tags wherever necessary and click SAVE to save the message template.
      </td>
    </tr>

    <tr>
      <td>
        Configure Email
      </td>

      <td>
        Configure the email message that will be sent to customers when goodwill points are issued.\
        Make use of the predefined tags wherever necessary and click SAVE to save the message template.
      </td>
    </tr>

    <tr>
      <td>
        Configure Default Till
      </td>

      <td>
        All goodwill points of your org will be associated with this TILL. You can change this configuration whenever required. In **Default Till**, select the Till that you want to associate.  

        * **Use default till for goodwill points issued from Member Care**: Enable this option if you want the default TILL to associate only for goodwill points issued through Member Care. Even if you pass the Till ID (say in API), it will consider only the Till that you set here. 
      </td>
    </tr>

    <tr>
      <td>
        Configure reasons for goodwill coupons
      </td>

      <td>
        Add standard reasons that InStore users can choose while issuing goodwill points.\
        You can add multiple reasons. Use the **New** box to create a new reason.\
        Reasons configured here will appear as a drop-down list on InStore while issuing goodwill points.
      </td>
    </tr>

    <tr>
      <td>
        Expiry Strategies
      </td>

      <td>
        In the drop-down box, select the expiry strategy that you want to assign for the goodwill points.  

        If you want to modify the strategy, open Loyalty Manager, modify that specific strategy in the Points Expiry Strategy tab and reconfigure the loyalty program.
      </td>
    </tr>
  </tbody>
</Table>
