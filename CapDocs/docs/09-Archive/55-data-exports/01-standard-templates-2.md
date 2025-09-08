---
title: Standard Templates
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
Standard templates consist of raw data of facts or dimensions. You can use standard templates to get summarized data, for example,  points issued, total visits, and purchases at the customer level.  However, if you need these values for a specific duration, you can create custom templates.

There are over 20 different standard templates categorized as Fact, Dimension and Fraud. Each category consists of different templates as mentioned below:

# Fact Templates

Following are the different standard fact templates available for export. You can export data based on event date or last updated date.

<br />

<Table align={["left","left"]}>
  <thead>
    <tr>
      <th>
        Name
      </th>

      <th>
        Description
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Members
      </td>

      <td>
        Contains details of members (loyalty and non-loyalty customers) and non-members based on the last updated date or event date (registration date). You can export other customer details such as

        * Custom fields
        * Extended fields
        * User segments
        * Current slab
        * Audience group
        * Customers registered in a specific duration (up to one year).
          For more information on supported measures and dimensions, click [Members](https://docs.capillarytech.com/docs/members-standard-export-template).
      </td>
    </tr>

    <tr>
      <td>
        Coupons
      </td>

      <td>
        Lets you export all details of the coupons issued at customer level and transaction level, You can export the details of:

        * Transaction numbers along with coupon details,
        * Redeemed and expired coupons, and
        * Coupon level custom fields.\
          You need to select custom fields manually.
          Note: Coupons that are issued or redeemed will be tagged to a transaction only if both the transaction and coupon issual or redemption occurs within the span of - +/- 15 minutes.
          For more information on supported measures and dimensions, click [Coupons](https://docs.capillarytech.com/docs/coupons-standard-export-template).
      </td>
    </tr>

    <tr>
      <td>
        Points
      </td>

      <td>
        There are 3 export templates for points data.\
        Points - Lets you export the data of points related events such as points issual, and points deduction (redeemed, expired, and returned) including source details. You will receive a detailed breakdown of deducted points, but not the summarized one.
        The template will have the filters redeemable and not applicable (deducted), applied by default.
        Note: Points that are redeemed will be tagged to a transaction only if both the transaction and points redemption occurs with in  the span of +/- 15 minutes.

        Points Redemption Summary - Lets your export the details of the points redemption done by the customers.

        Points Expiry Reminder Info - Lets you export the details of points expiry reminders sent to customers through Loyalty Engine. These are automated reminders configured for points expiry.

        For more information on supported measures and dimensions, click [Points](https://docs.capillarytech.com/docs/points-standard-export-template).
      </td>
    </tr>

    <tr>
      <td>
        Response Info
      </td>

      <td>
        It consists of the dump of transactions at a line-item level for responders of a particular campaign. You can export transactions and line-item level details of customers that responded to a specific campaign.\
        For more information on supported measures and dimensions, click [Response Info](https://docs.capillarytech.com/docs/response-info-standard-export-template).
      </td>
    </tr>

    <tr>
      <td>
        Contacted
      </td>

      <td>
        Lets you get customers that were contacted for a specific campaign.\
        For more information on supported measures and dimensions, click [Contacted](https://docs.capillarytech.com/docs/contacted-standard-export-template).
      </td>
    </tr>

    <tr>
      <td>
        Invitation Sent
      </td>

      <td>
        Lets you export details of events related to the sending of invitations during a referral campaign. They include fields such as the date and time at which the invitation was sent, identifiers for the campaign, client, and invitee, type of identifier and the status of the invitee.\
        For more information on supported measures and dimensions, click [Invitation sent](https://docs.capillarytech.com/docs/invitation-sent-standard-export-template).
      </td>
    </tr>

    <tr>
      <td>
        Profiles
      </td>

      <td>
        A customer can register with the brand through multiple sources. For example, InStore , WeChat, Tmall , Mobile app or any other source. This template lets you export customer details from various sources. It currently does not capture InStore registrations.\
        For more information on available measures and dimensions, click [Profiles](https://docs.capillarytech.com/docs/profiles-2-standard-export-template).
      </td>
    </tr>

    <tr>
      <td>
        Registration events
      </td>

      <td>
        Lets you export the details of the events in which an entity (customer/ store staff) registration takes place.\
        For more information on available measures and dimensions, click [Registration events](https://docs.capillarytech.com/docs/registration-event-standard-export-template).
      </td>
    </tr>

    <tr>
      <td>
        Slab Change Log
      </td>

      <td>
        Lets you to export the slab change log data which contains details such as from slab, to slab, changed date, store and customer details.\
        For more information on available measures and dimensions, click [Slab Change Log](https://docs.capillarytech.com/docs/slab-change-log-standard-export-template).
      </td>
    </tr>

    <tr>
      <td>
        Return Transactions
      </td>

      <td>
        Lets you export the details of return transactions at bill level and line-item level. These are transactions that are generated for return products.\
        For more information on available measures and dimensions, click [Return Transactions](https://docs.capillarytech.com/docs/return-transactions-standard-export-template).
      </td>
    </tr>

    <tr>
      <td>
        Issue Trackers
      </td>

      <td>
        Lets you export the data of all complaints raised by customers that are converted into "issues" and is managed by the Customer Care Management System.\
        For more information on available measures and dimensions, click [Issue Trackers](https://docs.capillarytech.com/docs/issue-trackers-standard-export-template).
      </td>
    </tr>

    <tr>
      <td>
        Messages
      </td>

      <td>
        Lets you export the data of all communications sent to customers. This is the only template where you can get both transaction and campaign messages together.\
        For more information on available measures and dimensions, click [Messages](https://docs.capillarytech.com/docs/messages-standard-export-template).
      </td>
    </tr>

    <tr>
      <td>
        Call Tasks
      </td>

      <td>
        Lets you export the data of all call tasks created at the POS for cashiers to process. The tasks could be call customers for birthday wishes that will get populated every day for the cashier to process. These tasks have a specific validity within which these needs to be closed.\
        For more information on available measures and dimensions, click [Call Tasks](https://docs.capillarytech.com/docs/call-tasks-standard-export-template).
      </td>
    </tr>

    <tr>
      <td>
        Footfall
      </td>

      <td>
        Lets you export VisitorMetrix related information which contains logs of in count, out count of customers and staff. You can also get group counts by its size - 1, 2, 3, and 4 or more.\
        For more information on available measures and dimensions, click [Footfall](https://docs.capillarytech.com/docs/footfall-standard-export-template).
      </td>
    </tr>

    <tr>
      <td>
        Transaction
      </td>

      <td>
        Lets you export transactions related details such as\
        Bill and line-item level transactions
        Member and non-member transactions
        Store level transactions
        Audience list (irrespective of selected date-range)
        Transaction level points
        Transactions of user segments
        Transaction level custom fields, and extended fields
        Line item level custom fields and extended fields
        User level extended fields
        For more information on measures and dimensions, click [Transactions](https://docs.capillarytech.com/docs/transactions-standard-export-template).
      </td>
    </tr>

    <tr>
      <td>
        Tracker Value
      </td>

      <td>
        Lets you export tracker values generated through the Loyalty Engine to update slabs and perform other activities. You will get bills by entry but not cumulative bills.\
        You can use this template to export:
        Tracker value at a bill or line-item level, and
        All tracker bills of the specified duration irrespective of the slab
        Limitations
        You cannot export the current tracker value
        To know more about trackers and configurations, see [Trackers](https://docs.capillarytech.com/docs/trackers-1) .
        For more information on supported measures and dimensions, click [Tracker Value](https://docs.capillarytech.com/docs/tracker-value-standard-export-template).
      </td>
    </tr>

    <tr>
      <td>
        Payment mode
      </td>

      <td>
        Lets you export payment mode related data. Provides transaction-level details, along with the split of payment methods. A bill can be paid fully or partially using various modes such as cash, credit card, gift card, points, coupon redemption, or other means.\
        For more information on supported measures and dimensions, click [Payment Mode](https://docs.capillarytech.com/docs/payment-mode-standard-export-template).
      </td>
    </tr>

    <tr>
      <td>
        Customer Merge Event Log
      </td>

      <td>
        Lets you export the log of customer account merge event which includes both victim and survivor details. The template also supports, audience filter based and customer segment bases filters.\
        To know more about account merge and its affect on both the accounts, see [Change Account Password](ref:change-account-password)   You can Change Identifiers & Account Merge Configuration in Member Care. To know more, click [Identifier change request](https://docs.capillarytech.com/docs/manage-id-change_requests) .
        For more information on supported measures and dimensions, click [Customer Merge Event Log](https://docs.capillarytech.com/docs/customer-merge-event-log-standard-export-template).
      </td>
    </tr>

    <tr>
      <td>
        Badges
      </td>

      <td>
        Badges Earn: Lets you export data related to the badges earned by customers. Allows you to export the badge ID, customer ID, earning date, expiry date, and whether the badge is active or revoked.\
        Badges Issue: Lets you export data of the event where the customer has enrolled in a badge before earning it. Allows you to export the badge ID, customer ID, issuance date, expiry date, and whether the badge is active or revoked.
        Badges Earned Benefits: Lets you export data of the promotions or benefits earned by the customers, that are linked to the badge. Allows you to export the benefit type, coupon code, points earned, and validity of the benefit that comes along.
        For more information on supported measures and dimensions, click [Badges](https://docs.capillarytech.com/docs/badges-standard-export-template).
      </td>
    </tr>

    <tr>
      <td>
        Goodwill Request
      </td>

      <td>
        Lets you export the details of the goodwill requests generated while allocating goodwill points or coupons to the customers.\
        For more information on supported measures and dimensions, click [Goodwill Requests](https://docs.capillarytech.com/docs/goodwill-requests-standard-export-template).
      </td>
    </tr>
  </tbody>
</Table>

# Dimension Templates

Following are the different standard dimension templates available for export.

| Name           | Description                                                                                                                                                                                                      |
| :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Concepts       | Lets you export the name of the concept hierarchy.                                                                                                                                                               |
| Users          | Lets you export the user details such as user id, slab name, fraud status, mobile number, loyalty type, email address, first name and last name.                                                                 |
| Audience Group | Lets you export the audience group data based on campaign group type, name and ROI type.                                                                                                                         |
| Campaign       | Lets you export campaign data based on campaign name, start date, and end date.                                                                                                                                  |
| Stores         | Lets you export store names.                                                                                                                                                                                     |
| Inventory      | Lets you export the inventory item details such as ou\_id, brand\_name, color, style, inventory description, image url, price, sub category code, category code, item code, sub category, category, and item Id. |

# Fraud

Currently, there are no templates in this category.