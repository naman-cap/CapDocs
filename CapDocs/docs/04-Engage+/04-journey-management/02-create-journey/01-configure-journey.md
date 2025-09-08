---
title: Configure Journey
excerpt: This section provides you with information on how to configure a journey.
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
To configure a journey perform the following steps:

# 1. Configure entry trigger

An entry trigger defines which customers will enter the journey.

An entry trigger is used to differentiate between customers and move them onto different entry paths based on their behavior to enhance their engagement with the brand. A user enters the journey only after the entry condition is satisfied by them.

**Key features:**

* Enables brands to segregate their customers based on their transactional and behavioral patterns
* Enables brands to create hyper-personalized journeys for their customers which in turn results in higher customer retention.

Customer behavior can be either transactional or behavioral, and brands can configure their exact requirements within the entry trigger.

![33f2b09 small Entry Trigger](https://files.readme.io/33f2b09-small-Entry_Trigger.png)

<br />

## User events trigger

In a User event trigger which is also called a user-initiated trigger, the customer enters the journey based on any transactional or non-transactional activity (behavioural events). With the help of user events, brands can include multiple paths within a journey depending on customer activity.

Transactional events are standard whereas behavioral events are configurable by individual brands to suit their requirements. While adding transactional triggers, the brand has to choose between the following events:

**Transactional events**

| **Event Name**             | **Description**                                                                                                                                                                                                                       |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Customer Registration**  | Triggers a user's entry into a journey based on the [customer registration](https://docs.capillarytech.com/docs/event-schema-payload#customer-added-event-customeradded) event. Configure the associated rules and actions as needed. |
| **Current Transaction**    | Triggers a user's entry into a journey when a  [transaction is completed](https://docs.capillarytech.com/docs/event-schema-payload#transaction-added-event-transactionadded).                                                         |
| **Coupon Redemption**      | Triggers a user's entry into a journey [when a coupon is redeemed](https://docs.capillarytech.com/docs/event-schema-payload#coupon-redeem-event-couponredeem). Use this event to configure actions based on coupon redemption.        |
| **Customer Update**        | Triggers a user's entry into a journey based on the [customer update](https://docs.capillarytech.com/docs/event-schema-payload#customer-updated-event-customerupdated) event.                                                         |
| **Reward Issued**          | Triggers a user's entry into a journey whenever a [reward is issued](https://docs.capillarytech.com/docs/event-schema-payload#/reward-issued-event-rewardissued) .                                                                    |
| **Target Enrollment**      | Triggers a user's entry into a journey when they are [enrolled in a target](https://docs.capillarytech.com/docs/event-schema-payload#target-customer-enrolment-event-targetcustomerenrolment) .                                       |
| **Target Value Achieved**  | Triggers a user's entry into a journey when the [predefined target value is achieved](https://docs.capillarytech.com/docs/event-schema-payload#/target-value-achieved-event).                                                         |
| **Partner Program Linked** | Triggers a user's entry into a journey when they are[ linked to a partner program](https://docs.capillarytech.com/docs/event-schema-payload#partner-program-linked-partnerprogramlinked).                                             |
| **Promotion Issued**       | Triggers a user's entry into a journey when a [promotion is issued to them](https://docs.capillarytech.com/docs/event-schema-payload#/cart-promotion-issued-event-cartpromotionissued-1).                                             |
| **Points Issued**          | Triggers a user's entry into a journey [when points are issued](https://docs.capillarytech.com/docs/event-schema-payload#/points-issued-event-pointsissued).                                                                          |
| **Coupon Issued**          | Triggers a user's entry into a journey [ when a coupon is issued](https://docs.capillarytech.com/docs/event-schema-payload#/coupon-issue-event-couponissue).                                                                          |
| **Tier Upgraded**          | Triggers a user's entry into a journey [their tier is upgraded](https://docs.capillarytech.com/docs/event-schema-payload#/tier-upgraded-tierupgraded).                                                                                |
| **Tier Downgraded**        | Triggers a user's entry into a journey [when their tier is downgraded](https://docs.capillarytech.com/docs/event-schema-payload#/tier-downgraded-event-tierdowngraded).                                                               |

**Behavioral events**

These events include both standard as well as customized events. The standard events include events based on attributes such as price, quantity, productType, cardId, and productName. For more information on behavioural events, see [behavioural events](https://docs.capillarytech.com/reference/behavioral-events-1).

Further, you can also define conditions, filter the adience and define differnt patths accordingly.

**Notes:**

* New Behavioral Events (BE) will appear in the Journeys dropdown one day after creation.
* While configuring a BE, make sure to select the checkbox “**Loyalty**”.

### Example Use Case

1. **Requirement:** The brand wants to configure a journey where the user enters the journey immediately upon being registered as a customer.\
   **Solution:** Use the Customer Registration event as the entry trigger for the journey. This event is triggered when a new user completes the registration process and their customer profile is created.
2. **Requirement:** Brand wants to configure a journey where the user enters the journey when they achieve a target set as part of the loyalty promotion they are enrolled in. Additionally, only users whose whose total transaction amount is greater than 10000 should enter the journey.\
   **Solution:** -
   * Use the Target Value Achieved event as the entry trigger for the journey. This event is triggered when a user reaches the target value defined as part of their loyalty promotion.
   * Define an additional condition to filter users based on their life time transaction amount: Set the Lifetime Transaction Amount  in the entry criteria filter.

![21830f233ee6b7d806e42c61f9aebe7c37657cd21770abfa7c7de95b1c49b2ea Select user](https://files.readme.io/21830f233ee6b7d806e42c61f9aebe7c37657cd21770abfa7c7de95b1c49b2ea-Select_user.png)

<br />

## Audience list trigger

Brands can add a selected audience list to a journey. They can either choose an already created list from the audience manager or they can click on **[create audience group](https://docs.capillarytech.com/docs/audience-management)**

## **Configuring an entry trigger**

1. On the Journey canvas page, click **Entry trigger** and define the entry trigger for the customer to enter the journey.
2. Select the type of entry trigger - **User event** or **Audience List**
3. For User events trigger, perform the following:
   1. From the **Who have performed the event** drop-down, select the event - **Current Transaction, Coupon Redemption or Customer Registration**
   2. Click **+Add entry paths**. This defines further criteria for the customer to enter the journey.
   3. Click **+Add condition** and define the conditions.
   4. You can click **+Add condition** to add further conditions and combine them with the AND operator.
   5. Click **Add group** to add conditions and combine them with the OR operator.
      1. For including **Stores** in the condition, you also have the option to upload a .csv file with the stores list. See [ Uploading store CSV](https://docs.capillarytech.com/docs/store-csv-upload#uploading-store-csv)
   6. To create further conditions for the filtered customers, click **+ Path** and define the conditions.\
      **Note: In case of multiple paths, the journey will proceed to the 1st matching path condition from top to bottom.**
4. For the Audience list, perform the following
   1. Click **+Audience group**.
   2. Select an existing audience group or create an audience group. To create a new audience list, refer to [Audience Management](https://docs.capillarytech.com/docs/audience-management). You can select multiple audience groups.
   3. Click **Done**.
   4. If you want to exclude customers from a specific group entering the journey, enable Exclude Audiences, click **+Audience Groups** and select the audience group.
5. To change the entry trigger type, click **Change**
6. Click **Done**
7. To edit an entry trigger, hover on the entry trigger block and click the **edit icon**.

![3d8bb60 Entry Trigger](https://files.readme.io/3d8bb60-Entry_Trigger.gif)

# 2. Add the building blocks

For information on building blocks, see [Building blocks of a journey](https://docs.capillarytech.com/docs/building-blocks-of-a-journey).

# 3. Schedule the journey

1. Click on the **Schedule trigger** card below the entry trigger. A side-bar will be displayed wherein which start and end of the journey can be configured

![7155708 small 1](https://files.readme.io/7155708-small-1.png)

2. In the **Starts** section, there are two options.
   1. **Immediately after approval** - Starts the journey as soon as it is approved by the respective stakeholder
   2. **On a specific date**- Starts the journey from a specific day. The date can be added within the calendar that is displayed once this option is selected\
      ![](https://files.readme.io/de6e333-small-2.png)
3. In the **Ends** section, there are two options
   1. **Never** - Runs journey continuously and never ends.
   2. **On a specific date**- The journey ends on a specific date. The date can be added to the calendar that is displayed once this option is selected.

# 4) (Optional) Configure exit trigger

An exit trigger is to remove a customer from a journey if they satisfy a given condition. Brands can configure transactional and behavioural events that can cause a customer to exit a journey. This ensures that customers do not get spam/out-of-context engagements.\
This leads to a higher click rate on engagements and in turn leads to successful conversions.

## Use Cases

* A brand wants to target customers who have purchased shoes from them and want to motivate them to buy clothes as well. If a customer has already purchased from the clothes category, they should not receive promotional messages to buy clothes which can be configured in the exit trigger.
* Brands want to motivate users by asking them to upgrade to members. Customers who purchased the membership should be exited from the membership promotional journey

## Adding an exit trigger

1. In the journey canvas page, click **Exit trigger**.
2. In the **Define: Exit trigger** page, select how you want to make a user exit a journey. Here, two ways to exit a customer are supported
   1. Filtered audience exit
   2. User Event

The two types of exit triggers have different use cases, determining which to use depends on the situation.

### When to use a Filtered Audience exit

**Use Case:** The brand has used the Audience list as an Entry trigger in Journeys.\
The requirement is that anyone who does not satisfy the audience list at any point in time should get exited from the journey.

**How to use a Filtered Audience Exit:**

1. To enable this, Toggle the option Filtered Audience exit to “ON”. By default, it will be set as No.
2. If this is enabled, customers will exit the journey if they no longer satisfy the audience-filtered criteria configured in the entry trigger.

   > 📘 NOTE
   >
   > This can be used only when the entry criteria is set as Audience list.

![975ebe8 Exit trigger](https://files.readme.io/975ebe8-Exit_trigger.png)

### When to use a User Event-based exit

**Use Case:** Brand has used a User-based event as an Entry trigger in Journeys.\
The requirement is that when a particular customer does any event (standard event such as transaction/coupon redemption) or a behavioural event, they exit from a journey.

**How to use a User Event Exit trigger:**

1. Select the User Event Exit trigger and Click **Next**.
2. From the **Who have performed the event** drop-down, select the event. You can select either transactional or behavioural events.
3. Define the conditions for the customer to exit the journey. This is similar to the defining conditions in the entry event.\
   You can define only one condition/path for the exit trigger.
4. Click **Done**.
5. To edit the exit condition, hover over the block and click on the edit icon.

![e3fa264 small Exit Trigger](https://files.readme.io/e3fa264-small-Exit_Trigger.png)

## How to reset an exit trigger

This feature enables brands to reset their exit trigger within a journey. With this feature, a brand can remove an existing condition from its journey that allows customers to exit the journey.

### Use Cases

A simple reset button not only allows brands to remove a pre-configured existing trigger but in case of multiple triggers, brands can remove all of them with the click of a button. It saves time and the hassle of removing each condition manually.

### Resetting an exit trigger

1. Once the journey canvas is opened, navigate to the exit trigger.
2. Upon hovering over the exit trigger, a reset icon will appear.

![26c75a6 small 4](https://files.readme.io/26c75a6-small-4.png)

3. Click on the reset icon to reset the entire configuration of the exit trigger.

# 5) Configure journey settings

You can configure the below settings for the journey.

## Entry settings

### Customer entry to the same journey

This feature allows you to enable the same journey for customers multiple times if they meet the entry conditions. It supports consistent engagement and helps reach customers at the right moment.

This helps to:

* Maintain consistency in engagement
* Provides a good customer experience by limiting over-communicating with the customers

![cb19d1f16fa0389bff3ef5b07fd0ee987179d09216ba7a083a7ce90832b7928b Screenshot 2025 04 24 at 4](https://files.readme.io/cb19d1f16fa0389bff3ef5b07fd0ee987179d09216ba7a083a7ce90832b7928b-Screenshot_2025-04-24_at_4.56.42_PM.png)

The following conditions must be satisfied for a customer to enter or re-enter the journey. You can configure the settings as follows:

1. **Frequency of a customer entering the journey**- Set how many times a customer is allowed to enter the journey.
2. **Customer can be in this journey simultaneously**- Allow a customer to be part of the journey more than once at the same time if the customer meet the entry conditions again.

These are the settings for how often a customer can enter the journey:

| Frequency               | Description for Frequency of a customer entering the journey                    | Description for a customer can be in this journey simultaneously                                                                                               |
| :---------------------- | :------------------------------------------------------------------------------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Only once               | Allows the customer to enter the journey only once.                             | The customer can have only one active instance of the journey at a time. They must complete or exit the current journey before they can enter it again.        |
| More than once          | Allows the customer to enter the journey multiple times. There is no limit set. | The customer can have multiple active instances of the journey at the same time. They can re-enter the journey without waiting for the previous one to finish. |
| Specific number of time | Allows customers to enter the journey a fixed number of times.                  | The customer can enter the journey up to a set number of times, and may have multiple instances running at the same time (unless limited by other settings).   |

## Example Use Case

### Scenario 1 - Ticket Confirmation Reminder

A Ticket Confirmation Reminder journey allows customers to receive a confirmation email after booking a ticket, with the following settings and conditions:

**Journey Conditions**

* Booking Requirement: The customer must successfully book a ticket (for an event, travel, or movie).
* Notification: They receive a confirmation email with their ticket details.
* Wait Period: The confirmation email is sent 15 min after the ticket booking is completed.

**Restrictions**

* Entry Limit: The customer can participate in the journey for one booking at a time.
* Re-entry Condition: After receiving the confirmation email for their current booking, the customer can re-enter the journey by booking another ticket.

**Customer Journey Behavior**

Once the customer books a ticket, they will receive a confirmation email after 15 minutes. If they book another ticket while waiting for the first confirmation, they must wait until the first email is sent before they can receive a new confirmation for the next booking.

**Configuration Settings for the Scenario:**

| Settings     | Value          | Detail                                                                                                                                                                                                      |
| :----------- | :------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Frequency    | More than once | This allows the customer to receive multiple confirmation emails if they book multiple tickets.                                                                                                             |
| Simultaneous | Only once      | This ensures the customer can only have one active confirmation journey at a time. They must complete the current journey (i.e., receive the confirmation email) before entering again for another booking. |

### Scenario 2 - Electronics Store Cashback Offer

A Festive Season Cashback Deal allows customers to earn $1000 cashback on a ₹10,000 electronics purchase, with the following settingd and conditions:

**Journey Conditions**

* Purchase Requirement: The customer must buy electronic items worth ₹10,000 or more.
* Reward: They receive ₹1000 cashback for each qualifying purchase.
* Wait Period: Cashback will be credited 2 days after the purchase.
* Offer Validity: The offer is valid for 30 days from the campaign start date.

**Restrictions**

* Entry Limit: The customer can participate more than once during the 30-day period.
* Re-entry Condition: The customer can receive cashback a maximum of 3 times during the 30-day period.

**Customer Journey Behavior**

During the festive sale, customers can earn ₹1000 cashback every time they buy electronics worth ₹10,000 or more. They can avail this offer up to 3 times within 30 days. The cashback is processed 2 days after each qualifying purchase. Customers are allowed to make multiple purchases at the same time (as long as they haven’t hit the 3-time limit).

**Configuration Settings for the scenario**

| Settings     | Value                        | Detail                                                                                                                                                                      |
| :----------- | :--------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Frequency    | Specific number of times - 3 | This means a customer can receive the cashback up to 3 times during the 30-day offer period.                                                                                |
| Simultaneous | More than once               | This allows the customer to make multiple qualifying purchases at the same time, and still receive cashback for each (as long as they haven’t already received it 3 times). |

## Allow global control customers to enter the journey

You can enable this to include the Control audience (a control audience is a group of individuals who are intentionally left out of a campaign, in order to serve as a group for comparison) in the journey. By default, the control audience is not included in the journey.

## Communication Settings

You can enable the toggle switch **Ignore subscription status for all communication channels** to send messages including transactional messages to all customers, even if their promotional subscriptions are configured to not receive messages. This bypasses the promotional subscription status settings.

![4174ed2e3c839c408dcbf6d2a69ebfeffb388c4efb183248e26e074bd02076e0 Communication setting](https://files.readme.io/4174ed2e3c839c408dcbf6d2a69ebfeffb388c4efb183248e26e074bd02076e0-Communication_setting.png)

## Link Tracking Settings

You can enable the toggle switch to shorten URLs in communication messages.

![ec79d7143a54251662b2ff7f5fa6c353ae6a017736fb0ae017c1d4ec802cf91c Link tracking](https://files.readme.io/ec79d7143a54251662b2ff7f5fa6c353ae6a017736fb0ae017c1d4ec802cf91c-Link_tracking.png)

# 6. Send Journey for Approval

> 🚧 Before sending a journey for approval, ensure the following:
>
> 1. New Credit management system is enabled for your org. If it is not, kindly raise a ticket to the Sustenance team.
> 2. Credit rates for all channels that are used for communication in the journey are configured.

After you have configured steps 1 to 5 above, you need to save the journey and send it for approval by clicking on "Send for approval".

![b120824 image](https://files.readme.io/b120824-image.png)

Once the journey has been sent for approval, the approver can approve the journey and the journey will go live as per the schedule configured in Step 3 above.

![d16e1ea image](https://files.readme.io/d16e1ea-image.png)

Approver can also reject the journey if the journey needs certain modifications. In that case, journey will go to "Rejected" state and you will have to make changes to the journey by clicking "Edit"

![57b2436 image](https://files.readme.io/57b2436-image.png)