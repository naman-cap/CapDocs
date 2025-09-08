---
title: Actions
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
Here's a look at all the actions available in Workflows:

## Award Points to Referee

A referrer is an actor who refers other customers to transact with the brand. A referee is an actor referred by a referrer. Brands can configure to incentivize either a referee or referrer or both.
To award points to the referee, you need to have points earned condition, points expiry condition (if required), and channels through which you want to communicate or notify the customers when points are awarded.
You need to configure earn condition, expiry condition, and channels through which you want to communicate on the points earned by the referee.

> 👍 Note
>
> The **Award Points to Referee** action is available only for [workflows](https://docs.capillarytech.com/docs/workflows) within the default [loyalty program](https://www.google.com/url?q=https://docs.capillarytech.com/docs/features-of-loyalty&sa=D&source=editors&ust=1738760357822808&usg=AOvVaw1xaUo9RChdS30KYCPVcgg1).

![945631dbaaef1d47405152eb01493ef29b59f69b44e9175fa800d947af081874 image](https://files.readme.io/945631dbaaef1d47405152eb01493ef29b59f69b44e9175fa800d947af081874-image.png)

### Earn condition

Click on the **Earn Condition** drop-down to choose the desired points earning condition for the referee.
To create a new earning condition and use it:

1. Click **+ Add condition**.

![dd86435cca08e21427a664169b22e0a801f0e833dfa75f69c2192e68515db395 Screenshot 2025 09 03 at 5](https://files.readme.io/dd86435cca08e21427a664169b22e0a801f0e833dfa75f69c2192e68515db395-Screenshot_2025-09-03_at_5.05.47_PM.png)

2. In **Name**, enter a relevant condition name.
3. In **Description**, enter a short description of the condition.
4. In **Module using this condition**, choose the module where you want to use the condition. In this case, it is Engage+.
5. In **Allocation type**, select the criteria for issuing points to the user. The options are as follows:

   <Table align={["left","left"]}>
     <thead>
       <tr>
         <th style={{ textAlign: "left" }}>
           Type
         </th>

         <th style={{ textAlign: "left" }}>
           Description
         </th>
       </tr>
     </thead>

     <tbody>
       <tr>
         <td style={{ textAlign: "left" }}>
           Fixed
         </td>

         <td style={{ textAlign: "left" }}>
           Reward a fixed number of points (irrespective of the transaction amount).
           For example: 10 to issue 10 points per transaction
         </td>
       </tr>

       <tr>
         <td style={{ textAlign: "left" }}>
           Round up
         </td>

         <td style={{ textAlign: "left" }}>
           Reward customers with points to round their balance up to the nearest multiple of a defined value within a specified range.

           For example, if the points range is from 0-1000 and the **round upto** value is 10, a customer with 643 points will recieve 7 points, bringing their total balance to 650.
         </td>
       </tr>

       <tr>
         <td style={{ textAlign: "left" }}>
           Prorate - In terms of step function
         </td>

         <td style={{ textAlign: "left" }}>
           Reward a fixed number of points for equal transaction intervals or steps.

           For example: Allocate 5 points on every transaction of $150. This way, a transaction amount between $0-150 receives 5 points, and transactions between 151-300 receive 10 points and so on.
         </td>
       </tr>
     </tbody>
   </Table>
6. To have a common allocation to all tiers, check the **Same for all Tiers**.
   To allocate points differently for each tier, uncheck Same for all tiers. You will see an option to configure for each tier. Set your preferred values for each tier based on the **Allocation type** chosen.

   ![13edf548ae8aa362f75842740e285dad40b3d7232949263d82f1f56bfc2678be Screenshot 2025 09 03 at 5](https://files.readme.io/13edf548ae8aa362f75842740e285dad40b3d7232949263d82f1f56bfc2678be-Screenshot_2025-09-03_at_5.06.40_PM.png)
7. Set **Enable delayed accrual** to green to allocate points to the current account after a certain period. This is usually the transaction return period that is configured for the org. So, customers can redeem points only if the transaction is not returned. Use this especially in cases where transaction return is allowed.

* You need to set the number of days after which points are accrued in **Accrue points after**. An example is shown in the following screenshot.

  ![f259b594eea7e95e3255a0aca71d26bce667b07ce46eff97231e61a2ec7df595 Screenshot 2025 09 03 at 5](https://files.readme.io/f259b594eea7e95e3255a0aca71d26bce667b07ce46eff97231e61a2ec7df595-Screenshot_2025-09-03_at_5.07.16_PM.png)
* In delayed accrual, points for a transaction are added as promised points immediately. When the specified period (usually the allowed return period) is completed, these points will be credited to the current account.

### Expiry condition

For the points that will be issued for referee, you need to set the expiry condition - when the awarded points should lapse.
Click on the **Expiry Condition** drop-down to choose the desired expiry condition for the points earned by the referee.
To create a new expiry condition and add it,  click on the respective **+ Add condition**.
In the drop-down box, choose the expiry condition (if created already).
To create a new expiry condition and add it, follow these steps.

1. Click + **Add condition**
2. In **Name**, enter a relevant condition name.
3. In **Description**, enter a short description about the condition.
4. In **Module using this condition**, choose the module where you want to use the condition. In this case, it is Loyalty+.
5. In **Expire points based on**, choose the criteria for point expiry. You have three options, Event date, Rolling expiry from event date, and Membership event date. For more information, see here.

* **Event date**: Points expire on the configured date based on the last activity (transaction/registration) done by the customer.
* **Rolling expiry from event date**: The current date of points expiry is reset to a new date based on the recent transaction date.
* **Membership event date**: Points expire automatically when the membership expires.

6. Enable **Same for all Tiers** and the condition becomes relevant for all tiers. If disabled, you have to configure conditions for each tier. For more information, see here.
7. Click **Done** to save the condition.

### Configure communication channel(s)

Once you set the points earning and expiry conditions, it is important to communicate the points earned by the referee.
Loyalty+ supports two different configurations for communications.

### Mandatory channels

Here you can select the channels through which the communication has to be sent out for sure. Then, configure the message for each channel you select.

![Mandatory Channels](https://files.readme.io/a9fb95a-MandatoryChannels.png)

### Priority channels

Here, you can set the channels through which the communication needs to be sent out based on the priority and availability. For example, if you set the priority in the order SMS, email, and mobile push, the system will first check if the customer's mobile number is available,

* If available, it will send an SMS communication and ignores the rest.

* If not available, it will check whether the customer has email ID

* If email ID is available, it sends out an email notification to the customer.

* If not, it will check if the customer is active through mobile push and process the message accordingly.
  Once the priority channels are set, configure the message for each channel.
  For more information on communication channels, see here.

## Award Points to Referrer

A referrer is an actor who refers other customers to transact with the brand. A referee is an actor referred by a referrer. Brands can configure to incentivize either a referee or referrer or both.

To award points to the referrer, you need to have points earn condition, points expiry condition (if required), and channels through which you want to communicate or notify the customers when points are awarded.

> 👍 Note
>
> The **Award Points to Referrer** action is available only for [workflows](https://docs.capillarytech.com/docs/workflows) within the default [loyalty program](https://www.google.com/url?q=https://docs.capillarytech.com/docs/features-of-loyalty&sa=D&source=editors&ust=1738760357822808&usg=AOvVaw1xaUo9RChdS30KYCPVcgg1).

The following are the options available for the **Award points to referrer** action.

![e94128e86fdd7de8f91d7233e7be6bc0de8a02e7e3677926e4fdcafe661695dc Screenshot 2025 09 03 at 5](https://files.readme.io/e94128e86fdd7de8f91d7233e7be6bc0de8a02e7e3677926e4fdcafe661695dc-Screenshot_2025-09-03_at_5.05.00_PM.png)

### Earn condition

Click on the Earn Condition drop-down to choose the desired points earning condition for the referrer.

To create a new earning condition and add it, follow these steps.

1. Click + **Add condition**.

![dd86435cca08e21427a664169b22e0a801f0e833dfa75f69c2192e68515db395 Screenshot 2025 09 03 at 5](https://files.readme.io/dd86435cca08e21427a664169b22e0a801f0e833dfa75f69c2192e68515db395-Screenshot_2025-09-03_at_5.05.47_PM.png)

2. In **Name**, enter a relevant condition name.
3. In **Description**, enter a short description of the condition.
4. In **Module using this condition**, choose the module where you want to use the condition. In this case, it is Engage+.
5. In **Allocation type**, select the criteria for issuing points to the user. The options are as follows:

   <Table align={["left","left"]}>
     <thead>
       <tr>
         <th style={{ textAlign: "left" }}>
           Type
         </th>

         <th style={{ textAlign: "left" }}>
           Description
         </th>
       </tr>
     </thead>

     <tbody>
       <tr>
         <td style={{ textAlign: "left" }}>
           Fixed
         </td>

         <td style={{ textAlign: "left" }}>
           Reward a fixed number of points (irrespective of the transaction amount).
           For example: 10 to issue 10 points per transaction
         </td>
       </tr>

       <tr>
         <td style={{ textAlign: "left" }}>
           Round up
         </td>

         <td style={{ textAlign: "left" }}>
           Reward customers with points to round their balance up to the nearest multiple of a defined value within a specified range.

           For example, if the points range is from 0-1000 and the **round upto** value is 10, a customer with 643 points will recieve 7 points, bringing their total balance to 650.
         </td>
       </tr>

       <tr>
         <td style={{ textAlign: "left" }}>
           Prorate - In terms of step function
         </td>

         <td style={{ textAlign: "left" }}>
           Reward a fixed number of points for equal transaction intervals or steps.

           For example: Allocate 5 points on every transaction of $150. This way, a transaction amount between $0-150 receives 5 points, and transactions between 151-300 receive 10 points and so on.
         </td>
       </tr>
     </tbody>
   </Table>
6. To have a common allocation to all tiers, check **Same for all Tiers**.
   To allocate points differently for each tier, uncheck _Same for all tiers_. You will see an option to configure for each tier. Set your preferred values for each tier based on the **Allocation type** chosen.

   ![13edf548ae8aa362f75842740e285dad40b3d7232949263d82f1f56bfc2678be Screenshot 2025 09 03 at 5](https://files.readme.io/13edf548ae8aa362f75842740e285dad40b3d7232949263d82f1f56bfc2678be-Screenshot_2025-09-03_at_5.06.40_PM.png)
7. Set **Enable delayed accrual** to green to allocate points to the current account after a certain period. This is usually the transaction return period that is configured for the org. So, customers can redeem points only if the transaction is not returned. Use this especially in cases where transaction return is allowed.

* You need to set the number of days after which points are accrued in Accrue points after. An example is shown in the following screenshot.
  * ![f259b594eea7e95e3255a0aca71d26bce667b07ce46eff97231e61a2ec7df595 Screenshot 2025 09 03 at 5](https://files.readme.io/f259b594eea7e95e3255a0aca71d26bce667b07ce46eff97231e61a2ec7df595-Screenshot_2025-09-03_at_5.07.16_PM.png)
* In Delayed accrual, points for a transaction are added as promised points immediately. When the specified period (usually the allowed return period) is completed, these points will be credited to the current account.

9. Click **Done** to save the condition.

### Expiry condition

Points that will be awarded for referrer need to have an expiry condition which indicates when the award will expire.

Click on the Expiry Condition drop-down to choose the desired expiry condition for the points earned by the referee.
In the drop-down box, choose the expiry condition (if created already).

To create a new expiry condition and add it, follow these steps.

1. Click + **Add condition**
2. In **Name**, enter a relevant condition name.
3. In **Description**, enter a short description of the condition.
4. In **Module using this condition**, choose the module where you want to use the condition. In this case, it is Loyalty+.
5. In **Expire points based on**, choose the criteria for point expiry. You have three options, Event date, Rolling expiry from event date, and Membership event date. For more information, see here.

* **Event date**: Points expire on the configured date based on the last activity (transaction/registration) done by the customer.

* **Rolling expiry from event date**: The current date of points expiry is reset to a new date based on the recent transaction date.

* **Membership event date**: Points expire automatically when the membership expires.

6. Enable **Same for all Tiers** and the condition becomes relevant for all tiers. If disabled, you have to configure conditions for each tier. For more information, see here.
7. Click **Done** to save the condition.

### Configure communication channel(s)

**Mandatory channels**: From here, you can choose the communication channels that will invariably be used and through which the communication will definitely be sent out.

**Priority channels**: According to priority and availability, you can specify how to send the communication. For example, if you set the priority in the order of SMS, email, and mobile push, the system will first check if the customer's cell phone number is available,

* If available, it will send an SMS communication and ignore the rest.
* If not available, it will check whether the customer has an email ID
* If an email ID is available, it sends out an email notification to the customer.
* If not, it will check if the customer is active through mobile push and process the message accordingly.

Finally, configure the message for each communication channel you have chosen.

For more information on communication channels, see here.

## Forward to Set

Standard loyalty expressions operate at the transaction level, evaluating the entire purchase. However, the Forward to Set action enables granular evaluation of the following: individual line items (products/services) and payment methods used.

The following options are available for the **Forward to Set** action:

![Forward to Set](https://files.readme.io/ad36405-LDaxbpQ7QHB2TRoU8NrcMjptr-iDoj8IhA.png)

<br />

| Field                           | Description                                                     |
| :------------------------------ | :-------------------------------------------------------------- |
| Enable lineitem unrolling       | Enable this to write conditions for line-items.                 |
| Enable payment method unrolling | Enable this to write conditions for payment methods or tenders. |

### Evaluate rules at the line-item level (Enable line-item unrolling)

Enable the Evaluate rules at the line-item level toggle. When enabled, Loyalty+ evaluates the defined rules for each line item of the transaction.

The following options are availabe:

![Line Item Unrolling](https://files.readme.io/a93fb85-tog_VIK2U16ig9kWjteXVTznONNU1ybgdA.png)

<br />

| Field                       | Description                                                                                                                                                          |
| :-------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Use line item proportions?  | Enable this option if line item amounts might not total the transaction amount. Use this option to distribute a bill-level discount to the transaction's line items. |
| Maximise points allocation? | Enable this option to maximize points for eligible payment methods, which are enabled under Advanced Settings.                                                       |

<br />

### Evaluate payment modes (Enable payment method unrolling)

This option allows you to run rules on individual payment methods. When you enable payment method unrolling, the rules defined in the forwarded set are evaluated multiple times—once for each payment method in the transaction.

<br />

> 📘 * The Forward to set is also used for trackers.
>
> * When Enable line item unrolling is enabled, the rules defined in the forwarded set would be evaluated multiple times (they will be repeated for every item in the transaction).
> * When Enable payment method unrolling is enabled, the rules defined in the forwarded set would be evaluated multiple times (they will be repeated for every payment method in the transaction).
> * When you choose Forward to set action, you can either use line item unrolling or payment method unrolling, or both of them. If you just need to evaluate more expressions, you can disable both and click Save to proceed to configure the new sub-set. In the following screenshot, Set3 is the new subset created.
>
> ![Forward to Set Example](https://files.readme.io/a2102d5-AOWvcueJ4CHnNiL5fMvup2sv_5DuCbPEYg.png)

<br />

## Evaluate multiple conditions (at the event level)

If you just need to evaluate more expressions before executing an action:

1. Disable both Enable line item unrolling and Enable payment method unrolling
2. Click Save to proceed to configure the new subset. You will see a new sub-set.

![1a0581e fIx04qRUPZhpYHMzJLuKaejGeW MDtOXVg](https://files.readme.io/1a0581e-fIx04qRUPZhpYHMzJLuKaejGeW-MDtOXVg.png)

## Issue Points

This action allows you to issue loyalty points to a customer based on the completion of a milestone / target.

Example: A fitness app rewards users with 100 loyalty points for completing a daily 10 km run milestone. When a user's tracked activity hits 10 km, the earn 100 points.

To enable this action for your loyalty program follow these steps,

1. In Loyalty+, go to the promotions tab and select the loyalty promotion where you want the action to apply.
   To create a new loyalty promotion, refer to the documentation on [Loyalty Promotions](https://docs.capillarytech.com/docs/loyalty-promotions).

<Note title="Note">
The **Issue Points** action is available only for the **TargetCompleted** (Milestone or Streak is updated) customer activity type. Refer to the [customer activities](https://docs.capillarytech.com/docs/loyalty-promotions#customer-activities) section in the loyalty promotions documentation for more information on the types of customer activities available for loyalty promotions.
</Note>

2. Go to the **Promotion workflows** section in the loyalty promotion.
3. Select the **Condition** where you want the action to apply. To create a new **Condition**, select **+ Condition**
4. Select **+When** to define a new condition.
5. Define the conditions in the **Expression** field if required.
6. Select **+ Add action** to add a new action.
7. Select the **Issue points** action.
8. Select **Save** to save the selection.
9. Select the user entity, earn and expiry conditions and the milestone for the action.

The fields are as follows:

<Table>
  <thead>
    <tr>
      <th>
        Fields
      </th>

      <th>
        Description
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        User entity
      </td>

      <td>
        Select the user entity to apply the action.
        **Individual**: The action is triggered when milestones are updated for an individual **User Group**: The action is triggered when milestones are updated for a

        [user group](https://docs.capillarytech.com/docs/actions#evaluate-rules-at-the-line-item-level-enable-line-item-unrolling)

        .
      </td>
    </tr>

    <tr>
      <td>
        Earn condition
      </td>

      <td>
        Select the earn conditions for the points using the drop down menu. To create a new earn condition select **+ Add condition** For more information, refer to the section on

        [Earn Conditions](https://docs.capillarytech.com/docs/actions#earn-condition)

        .
      </td>
    </tr>

    <tr>
      <td>
        Expiry condition
      </td>

      <td>
        Select the expiry conditions for the points using the drop down menu. To create a new expiry condition select **+ Add condition**. For more information, refer to the section on

        [Expiry Conditions](https://docs.capillarytech.com/docs/actions#expiry-condition)

        .
      </td>
    </tr>

    <tr>
      <td>
        Points rounding strategy
      </td>

      <td>
        Select the points rounding strategy using the drop down menu. The strategies are as follows:
        **Actual**: Awards the exact calculated points, including decimals.
        Example: If a customer earns 19.9 points (e.g., 10% of a ₹199 transaction), they receive **Floor**: Rounds points down to the nearest whole number, ignoring decimals.
        Example: 19.9 points become 19 points.
        **Round**: Rounds up points to the nearest whole number.
        Example: 19.9 points become 20 points.
      </td>
    </tr>

    <tr>
      <td>
        Milestones/Streaks
      </td>

      <td>
        Select the milestone or streak group to track using the drop down menu. The drop down menu lists all the milestones and streaks selected when creating the loyalty promotion.
      </td>
    </tr>

    <tr>
      <td>
        Target(s)
      </td>

      <td>
        Select the individual target name or select **Unified target**. If **Unified target** is selected, the points will be pro-rated based on the unified target.
      </td>
    </tr>

    <tr>
      <td>
        Prorate on
      </td>

      <td>
        Select the points prorate strategy using the drop down menu. The strategies are as follows:
        **Defined Target**: Calculate rewards based on the original goal set for the target. Example: A gym offers ₹250 off if you attend 12 classes/month. Even if you attend 15, you still get ₹250.
        **Achieved Value**: Calculate rewards based on what is accomplished. Example: A customer earns 5% on their total bill. If they buy products worth ₹10,000, they get 500 points. If they buy products worth ₹15,000, 750 points.
        **Achieved Value above Defined Target**: Calculate rewards based on how much the target was exceeded. Example: A fitness app sets a monthly goal of 1500 workout minutes. For every 100 minutes beyond the goal, users earn a ₹250 discount on fitness gear. If someone completes 1800 minutes, they get ₹750 off (300 extra minutes ÷ 100 = 3 × ₹250).
        **For Unified Targets:**
        Example: A brand sets three individual targets (₹100 in Men's, ₹100 in Kids', ₹100 in Women's) and an overall target of ₹500.
        **1. All + Overall Target** (Meet all 3 category spends + ₹500 total)
        • **Defined**: Reward based on overall target (₹500). Example: Spend ₹100 (Men's) + ₹100 (Kids) + ₹300 (Women's) = ₹500 → reward for spending ₹500.
        • **Achieved**: Reward based on total spend (sum of all). Example: Spend ₹600 → reward for spending ₹600.
        • **Overachieved**: Reward excess over ₹500. Example: ₹600 – ₹500 = ₹100 → reward for spending ₹100.

        **2. All Targets (No Overall)**
        (Requires ₹100 in Men's, Kids, Women's)
        • **Defined**: Fixed reward for meeting all 3.
        Example: ₹100 in all 3 → fixed reward for spending ₹300.
        • **Achieved/Overachieved**: Not applicable (no partial rewards).

        **3. Any (n-1) Targets (No Overall)**
        Target: Achieve any 2 of 3 categories
        • **Defined**: Reward based on number of targets configured (e.g., 3).
        Example: Spend ₹100 in Men's, Kids, and Women's → reward calculated as if all 3 are required.
        • **Achieved**: Reward based on total targets achieved (e.g., 3).
        Example: Spend ₹200 in all 3 → reward for 3.
        • **Overachieved**: Reward based on excess beyond the threshold (e.g., 3 – 2 = 1). Example: Achieve 3 → reward for 1 extra.
        • **Qualifying** Value: Reward based on threshold (minimum required).
        Example: Threshold = 2 → reward prorated on 2, even if user achieves 3.
      </td>
    </tr>

    <tr>
      <td>
        Mandatory channels
      </td>

      <td>
        Select the mandatory channels for the loyalty promotion if required. For more information, refer to the section on

        [Mandatory Channels](https://docs.capillarytech.com/docs/actions#mandatory-channels)

        .
      </td>
    </tr>

    <tr>
      <td>
        Priority channels
      </td>

      <td>
        Select the mandatory channels for the loyalty promotion if required. For more information, refer to the section on

        [Priority Channels](https://docs.capillarytech.com/docs/actions#priority-channels)

        .
      </td>
    </tr>
  </tbody>
</Table>

9. Select **Save** to save the changes made to the action.
10. Select **Publish Promotion** to publish the changes.

![a2893c04e9a3d4d2c2b409ac8ce932c7669672d7742c15d03bbaea4e1834c8df d7231629c007110aa9ca38236725d23742af525e8bc51994235f4f4393bce754 Untitled 2](https://files.readme.io/a2893c04e9a3d4d2c2b409ac8ce932c7669672d7742c15d03bbaea4e1834c8df-d7231629c007110aa9ca38236725d23742af525e8bc51994235f4f4393bce754-Untitled-2.gif)

## Renew Tier

Tier renew is retaining the current tier that the customer is enrolled in and providing all the privileges of the tier.

To configure the **Renew Tier** action, follow these steps.

1. Select **Renew Tier** and click **Save**.

![2eb0fc4 Capture](https://files.readme.io/2eb0fc4-Capture.PNG)

2. After you select **Renew Tier**, you will see the following screen. Click on the **Save** option.

![3dd470b Capture2](https://files.readme.io/3dd470b-Capture2.PNG)

<Note title="Note">
There are no specific options to be set in Renew tier action.
</Note>

## Send mail

You can send an email to your customers when they satisfy a certain condition. It could be regarding the rewards they earned or just a general notification. You can design the email from the scratch or use an existing template from creatives library.

To configure the Send mail action, follow these steps.

1. In _When_, select **Send mail** and click **Save**.

![10e7ae8 Send mail action](https://files.readme.io/10e7ae8-Send_mail_action.png)

2. Click on **Add creative** to configure the email message.

![e8db430 Add Creative   Send mail](https://files.readme.io/e8db430-Add_Creative_-_Send_mail.png)

3. To create the message from the scratch, click **Create new**.
   To use an existing template, hover on the desired template and click **Select**.

![64b9491 CretiveTemplates](https://files.readme.io/64b9491-CretiveTemplates.png)

4. Enter Subject, design email body, and click **Done**. You can **Preview** the email before saving and use the respective icons to see how the email renders in laptop/desktop, mobile phone, and tablet.
5. Configure **Sender information**. By default, the the default sender ID will be selected. If you wish to send from a different sender ID:
   i. Click on the more options icon and select **Edit**.
   ii. Uncheck **Use default sender ID**.  You will see options to choose a sender ID.

![3c848b1 SenderID Config](https://files.readme.io/3c848b1-SenderID_Config.png)

iii. Choose your preferred sender **Domain**, **Sender ID**, and **Sender Label**.
iv. Click **Save** to continue.

6. You can also set the delay in sending email from the event time. For example, you want to communicate something to the customer two days post a transaction.
   i. Click on **Add delay while sending**.
   ii. Choose your preferred period in the drop-down - _Sec_, _Mins_, _Hours_, or _Days_.
   iii. In **Delay by** enter the duration.
   iv. Click **Save** to continue

<Note title="Note">
Delay time should be greater than 120 seconds or 2 minutes.
</Note>

![1dd6f79 DelayConfig](https://files.readme.io/1dd6f79-DelayConfig.png)

## Send messages

You can notify customers when an action is executed successfully. Notifications can be sent through different channels such as SMS, email, WeChat, and Mobile Push.

**Notification channels are of two types:**

* **Mandatory Channels**: Channels that are mandatory for sending the notifications
* **Priority Channels**: Channels that needs to be triggered based on the priority and availability. For example, if SMS is set as priority 1, Mobile Push as priority 2 and email as priority 3, the system first checks whether SMS is configured and then checks if the mobile number is available for the customer. If any one fails, then it will try to send the notification through mobile push and so on.

Channels that are selected in Mandatory Channels will not appear in Priority Channels and vice versa.

**To configure notifications, follow these steps.**

1. Click the **Advanced Settings** of the campaign you want to make the changes.
2. Click on **Communication Channels** and you will see the following screen.

![d9f716d image 6](https://files.readme.io/d9f716d-image_6.png)

3. Select **Mandatory Channels** and **Priority Channels** for the notifications and click **Save**

![439a5ce65d87b5864a9c93b9e5f2765bdd0155339005e4e53839cc3cce33c593 image](https://files.readme.io/439a5ce65d87b5864a9c93b9e5f2765bdd0155339005e4e53839cc3cce33c593-image.png)

![Send Messages](https://files.readme.io/2dda1996df7b4bb01331b87fd426e3fd251f70ce1fe8c24d469fe45572bc57f1-image.png)

<br />

<Note title="Note">
This action is similar to the [send communication](https://docs.capillarytech.com/docs/actionsl#send-communication) action but does not include reporting through Databricks.
</Note>

## Send communication

Loyalty+ integrates the Central Communications Engine, enabling brands to send loyalty-related communications through supported channels like WhatsApp, Zalo and LINE directly from loyalty workflows. All communication channels available on Engage+ are automatically accessible in Loyalty+, allowing seamless integration of channels for loyalty program messaging. Brands can use the **Send communication** action in workflows to deliver updates through a communication channel.

Reporting is available through [databricks](🔗) to track communications sent through loyalty programs and promotions, providing visibility into message delivery and customer engagement only when using the **Send communication** action.

![Send Communication](https://files.readme.io/7ce919255298ddcbfd9737023f053504b9810e348c253632851416560b502ac7-image.png)

<Note title="Note">
* If an organization has WhatsApp, Zalo and LINE sender IDs configured on Engage+, the same will be available on Loyalty+. To configure a new sender ID, refer to [Configuring WhatsApp Sender Details](🔗) or raise a JIRA ticket to the gateways team.
* Refer to the [Creatives](https://docs.capillarytech.com/docs/creatives) documentation to create templates for WhatsApp and Zalo.
</Note>

## Send mobile push

You can send push notifications to your customers by customizing the notifications with creatives. You can design the notification from the scratch or use an existing template from the creatives library.

To configure the **Send mobile push** action, follow these steps.

1. Select **Send mobile push** and click **Save**.

![Send Mobile Push](https://files.readme.io/868e3d9-Capture.PNG)

2. Click on **Add creative** to configure the mobile push message.

![Add Mobile Push Creative](https://files.readme.io/6d0dc63-Capture1.PNG)

3. Choose one account for which you want to configure the mobile push message

![Choose Account](https://files.readme.io/c0fb84d-Capture2.PNG)

4. To create the message from scratch, click **Create new**.
   To use an existing template, hover on the desired template and click **Select**.

![Mobile Push Templates](https://files.readme.io/9ea1814-Capture3.png)

5. Enter Title, and the message body. You can Preview the message before saving it and use the respective icons to see how the message renders mobile phone.

![Mobile Push Message](https://files.readme.io/7a1b6b2-Capture4.PNG)

<Note title="Note">
Android and iOS platforms are both supported, so you can set up push notifications for both.
</Note>

i. Select **+ Add Label** to use the dynamic tags to personalize the text for the customer-rich experience.

![Add Label](https://files.readme.io/1b08ea6-Capture5.png)

ii. Select **Upload Image** to set the cover image of the push notification message.

![Upload Image](https://files.readme.io/e1c3084-Capture6.PNG)

<Note title="Note">
The maximum file size acceptable is 5 MB
</Note>

iii. Check **Add action link to content** to add a hyperlink of the page where the customer will be directed to.

* **Deeplink**: Link use to direct the customer within the mobile application on a specific page.
* **External Link**: Link used to direct the customer to the external web page

![Action Link](https://files.readme.io/0b84a9a-Capture7.PNG)

iv. Check **Add primary button to notification** to enter a CTA (Call to action) label.

![Primary Button](https://files.readme.io/99b6571-Capture8.PNG)

v. Check **Add secondary button to notification** to enter a secondary CTA (Call to action) label.

![Secondary Button](https://files.readme.io/dd368b8-Capture9.PNG)

6. You can also set the delay in sending mobile push from the event time. For example, you want to communicate something to the customer after a specific interval of time.
   i. Click on **Add delay while sending**.

![Mobile Push Delay](https://files.readme.io/0f2b9ff-Capture11.PNG)

ii. Choose your preferred period in the drop-down - Sec, Mins, Hours, or Days.
iii. In Delay by entering the duration.

![Delay Duration](https://files.readme.io/a82a1ab-Capture10.png)

<Note title="Note">
Delay by value should be greater than 120 Seconds or 2 minutes.
</Note>

7. Click **Save** to continue.

## Send SMS

You can send an SMS to your customers when they satisfy a certain condition. It could be regarding the rewards they earned or just a general notification. You can create an SMS from the scratch or use an existing template from the creatives library.

<Note title="Note">
The message configuration varies for customers in India. You can use only DLT complaint message templates.
</Note>

To configure the Send SMS action, follow these steps.

1. Select **Send SMS** and click **Save**.

![Send SMS Action](https://files.readme.io/3cdbca7-SMS1.PNG)

2. Click on **Add creative** to configure the SMS.

![Add SMS Creative](https://files.readme.io/fa657b5-SMS2.PNG)

3. To create the message from scratch, click **Create new**.
   To use an existing template, hover on the desired template and click **Select**.

![SMS Templates](https://files.readme.io/b3890f4-SMS3.png)

4. Configure SMS text, and click **Done**. You can **preview** the SMS before saving it to see how the SMS renders on a mobile phone.
   i. Select **+ Add Label** to use the dynamic tags to personalize the text for the customer-rich experience.
   ii. Select **Allow Unicode characters** to allow the support of a much wider character set, and includes pretty much every character in the world, including Indian languages, some of the stranger European characters (like í), all the Cyrillic alphabet (e.g. Arabic, Russia, Punjabi, and Greek), all the Asian ones (Chinese, Japanese, etc), and also some of the emoticons out there!

![SMS Configuration](https://files.readme.io/dc0093c-SMS5.PNG)

5. Configure **Sender information**. By default, the default sender ID will be selected. If you wish to send from a different sender ID:
   i. Click on the more options icon and select **Edit**.
   ii. Uncheck **Use default sender ID**. You will see options to choose a sender ID.

![SMS Sender ID](https://files.readme.io/d4db426-SMS6.PNG)

6. Select **Shorten all URLs** to shorten links used in SMS,

![Shorten URLs](https://files.readme.io/9bce0eb-Capture7.PNG)

<Note title="Note">
* As an SMS has a character limit, it is usual that the links that you use in SMS could occupy lot of characters. Hence, we highly recommended using shorten links or tiny URLs in such instances.
</Note>

7. You can also set the delay in sending SMS from the event time. For example, you want to communicate something to the customer two days post a transaction.
   i. Click on **Add delay while sending**.
   ii. Choose your preferred period in the drop-down - Sec, Mins, Hours, or Days.
   iii. In **Delay by** entering the duration.

8. Click **Save** to continue.

<Note title="Note">
Delay time should be greater than 120 seconds or 2 minutes.
</Note>

![SMS Delay](https://files.readme.io/cd07040-SMS4.PNG)

## Send Wechat

## Tag Customer

## Transaction point allocation & Allocate Points action

Transaction points allocation lets you create various allocation strategies and use the desired one when configuring rule sets. You can allocate points on the transaction amount. You can also have common points allocation across tiers or different allocations for each tier.

To configure the Transaction point allocation action, follow these steps.

1. Select **Transaction point allocation** and click **Save**.

![Transaction Point Allocation](https://files.readme.io/fdc9915-Capture.PNG)

2. In the **Earn condition**, choose the desired condition from the drop-down list.
   To create a new condition, click on **+ Add Condition**.

![Earn Condition Selection](https://files.readme.io/3aaaabf-Untitled1.png)

3. In the **Zero earn condition**, choose an appropriate condition from the drop-down.
   **Note:** The configuration for the zero earn condition is not determined by these options and depends on the other configurations explained [here](https://docs.capillarytech.com/docs/actions#zero-earn-condition).

![Zero Earn Condition](https://files.readme.io/5987ed8-Untitled2.png)

4. Select the **Expiry condition** from the drop-down menu.
   To create a new Expiry earn condition from scratch, click **+ Add condition**.

![Expiry Condition Selection](https://files.readme.io/6841eed-Untitled3.png)

5. In **Prorate on**, choose on what basis you want to issue a percentage of points - transaction amount or event value. This is applicable only for prorated points allocation. If bill amount, choose a current event, if tracker, choose current aggregate or previous aggregate

* **Amount** : Choose this to allocate prorated points on the transaction amount.
* **Current aggregate**: Choose this to allocate prorated points on the value of the tracker post the current transaction. This is disabled in Evaluations start and Evaluation end sets.
* **Previous aggregate**: Choose this to allocate prorated points on the value of the tracker before the current transaction. This is disabled in Evaluations start and Evaluation end sets.

6. In the **Points rounding strategy**, you can choose which points rounding strategy you prefer using from the drop-down list. Points rounding strategy informs how many decimal points to use when allocating points to customers.

* **Actual**: Issues the actual number of points as configured in the prorated condition. For example, the customer will receive 19.9 points for the transaction amount of 199, if the points allocation condition is set as 10%.

* **Floor**: Evaluate and assign the values without considering the decimal value. For example, assume customers should receive 10% of points for transactions. If a customer has purchased for $199, instead of 19.9 points, the customer will receive 19 points.

* **Round**: Determine the number of decimal points you want to support for decimal points. Zero is for no decimal, one is for one, two is for two, and three is for three decimal points.

![Points Rounding Strategy](https://files.readme.io/086d85e-Untitled5.png)

7. Select **Delay strategy**: Following are the different delayed-accrual (or point conversion strategies) that are currently available for the brands to use.

**As defined in the allocation strategy:** Points are assigned based on the conditions defined in the allocation strategy. If no conditions are defined, points will be directly issued as current points.

**Fixed delay days from item return period:** Based on the return period configured against the product, issue the promised points as current points once the return period expires. For example, assume for a transaction with a return period of 7 days, the customer is promised to get 1000 points. These promised points will be converted into current points after 7 days i.e. after the return period is over.

* Available only for transaction-based customer activities.

**Fixed delay days from the line-item extended field:**  Based on the value of the line-item extended field that is selected in the drop-down. Say, there is a line-item extended field called "ABC" & this is selected in the drop-down of "delay strategy" during the point allocation action after selecting this delay strategy. Now, say a user made a transaction & the value of this field is arrived as 10. Then the points that are being allocated from that action will have a delayed accrual of 10 days.

* Available only for transaction-based customer activities, and the line-item extended field should mandatorily come from the transaction payload.

**On external trigger:**  Issue points at the event of "transaction add" as promised points and convert them at the event of "transaction update". For example: In hospitals, promised points will be issued immediately when you make a booking and will be converted into current points when the bill is settled.

* Available only for transaction-based customer activities.

**Based on the behavioral event attribute** : Based on the date that is coming via the attribute of the behavioral event. Assume, there is a behavioral "ABC" that has 3 attributes (X, a date type attribute; Y, a customer identifier attribute; Z, a numerical attribute). During the point allocation from a promotion (that is created based on this behavioral event), if the delay strategy is selected as "Based on the event attribute", then there will be a drop-down where the attribute should be selected. The following are vital points:

* In the drop-down of "delay strategy", only the date type of the attribute of the behavioral event will appear.
* Under the prorate drop-down, only the double-type attributes of the behavioral event will appear.
* If the date coming is a past date as per the event processing date, the conversion will happen on the same day.
* This option will be available only for promotions based on behavioral events.

**Following are the accrual strategies available for transaction-based activities:**

![Transaction Accrual Strategies](https://files.readme.io/aabfd04-Untitled6.png)

**Following are the accrual strategies available for behavioral event-based activities:**

![Behavioral Event Accrual Strategies](https://files.readme.io/9a49bb5-Screenshot_2024-08-07_at_11.18.13_AM.png)

### Zero earn condition

In the Zero-earn condition, points are not allocated in the following cases:

* **Bill Number Prefix:** When the bill number starts with a prefix defined in the `IGNORE_POINTS_FOR_BILL_NUMBER_STARTS_WITH` configuration.

  ![Bill Number Config](https://files.readme.io/5989db268d0c55407f1e6ea73b31b3d2e94402a27196a92089c849a3250d197a-Config.png)
* **Customer Label:** When the `BLOCK_POINTS_ALLOCATION` label is set for a customer. You can configure this from **Organisation settings > Miscellaneous > Customer Status Configuration**.

<Note title="Note">
Note

In these cases, the customer tier will be upgraded if eligible, despite no points being allocated.
</Note>

## Configure communication channel(s)

## Mandatory channels

Here you can select the channels through which the communication has to be sent out for sure. Then, configure the message for each channel you select.

![Mandatory Channels Configuration](https://files.readme.io/dfa5099-Untitled7.png)

## Priority channels

Here, you can set the channels through which the communication needs to be sent out based on the priority and availability. For example, if you set the priority in the order SMS, email, and mobile push, the system will first check if the customer's mobile number is available,

* If available, it will send an SMS communication and ignore the rest.
* If not available, it will check whether the customer has an email ID
* If an email ID is available, it sends out an email notification to the customer.
* If not, it will check if the customer is active through mobile push and process the message accordingly.

![Priority Channels Configuration](https://files.readme.io/e9efd45-Untitled8.png)

Once the priority channels are set, configure the message for each channel.

For more information on communication channels, see here.

## Upgrade to tier

You can upgrade the tier for the customer based on a tracker value or any specific event value and provide all the privileges of the tier.

To configure the **Upgrade to tier** action, follow these steps.

1. Select **Upgrade to tier** and click **Save**.

![Upgrade to Tier](https://files.readme.io/cf128cc-Capture.PNG)

2. After you select **Upgrade to tier**, you will see the following screen.
   Hover to **Slab to upgrade** and choose the desired option from the drop-down.

![Slab to Upgrade](https://files.readme.io/4ee2e31-Untitled.png)

3. Enable **Advanced options** to define the **Upgrade tier validity** for the action. This defines the duration for the tier upgrade. Once the validity expires, the customer reverts to their previous tier.
4. Select the validity type from the **Upgrade tier validity** drop down.

The validity types available are as follows:

| Validity Type     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Specific date     | Define a fixed calendar date when the upgraded tier will expire. After this date, the customer reverts to their previous tier.<br />Example: All upgraded tiers will expire on December 31, 2025. Every customer's tier will downgrade automatically on this exact date, no matter when they were upgraded. A customer's upgraded tier expires 30 days after their upgrade date. If they upgrade on June 1, 2025, their tier will end on July 1, 2025. |
| Specific duration | Define the duration after which the upgraded tier will expire. After this duration, the customer reverts to their previous tier.                                                                                                                                                                                                                                                                                                                       |

![Upgrade Tier Validity](https://files.readme.io/6cb784489042928185957499c5be7f9efebd65124c68d287d301fa5886d88863-image.png)

4. Based on the selected validity type, select the specific date or duration from the **Specific duration** or **Specific date** drop down.

The specific date or duration available are as follows:

| Specific date / duration          | Description                                                                                                                                                                                                                                                                                                                                                                        |
| --------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Manually                          | Define a fixed date or duration when the upgraded tier will expire.<br />Example: All upgraded tiers are set to expire on December 31, 2025. Every customer's tier will automatically downgrade on this date, no matter when they were upgraded.                                                                                                                                   |
| As per transaction extended field | Define a transaction extended field based on which the upgraded tier will expire. The expiry is dynamic and unique to each customer.<br />Example: A customer's tier expires 30 days after their purchase (e.g., if their purchase is on June 1, 2025, their tier expires July 1, 2025). The system retrieves the purchase date from the transaction data to calculate the expiry. |

5. Based on the options selected define the tier expiry:
   1. **Specific date** and **Manually**: Select the specific date date for tier expiry in under **Select specific date manually**
   2. **Specific duration** and **Manually**: Enter the number of days after which the tier will expire under **Add specific duration manually**.
   3. **Specific date** or **Specific duration** and **As per transaction extended field**: Select the transaction extended field under the **Select transaction extended field** drop down. Refer to the documentation for more information on [extended fields](https://docs.capillarytech.com/docs/data-entities#extended-fields-1).

> 🚧 **Warning**
>
<Note title="Note">
If you set a tier expiry date that is already in the past , the upgraded tier will expire immediately. The customer will not receive the tier upgrade at all, as the expiry date has already passed.
</Note>

6. Enable **Award points** to enable the criteria to award the points to the customer.

![Award Points](https://files.readme.io/06fcfcf-Capture3.PNG)

4. In the **Earn condition**, choose the desired condition from the drop-down list.
   To create a new condition, click on **+ Add Condition**.

![Tier Earn Condition](https://files.readme.io/39c48b9-Capture4.png)

5. Select the **Expiry condition** from the drop-down menu.
   To create a new expiry earn condition from scratch, click **+ Add condition**.

![Tier Expiry Condition](https://files.readme.io/d7e139a-Capture5.png)

6. In **Prorate on**, choose on what basis you want to issue a percentage of points - transaction amount or event value. This is applicable only for prorated points allocation. If bill amount, choose a current event, if tracker, choose current aggregate or previous aggregate.

* **Event default value**: Choose this to allocate prorated points on the transaction amount.
* **Current aggregate**: Choose this to allocate prorated points on the value of the tracker post the current transaction.
* **Previous aggregate**: Choose this to allocate prorated points on the value of the tracker before the current transaction.

![Tier Prorate On](https://files.readme.io/5d87797-capture6.png)

7. Select the channels through which the communication has to be sent out for sure.

i.  **Mandatory channels**: You can select the channels through which the communication has to be sent out for sure. Then, configure the message for each channel you select.

![Tier Mandatory Channels](https://files.readme.io/1aaf99f-capture7.png)

ii. **Priority channels**: Here, you can set the channels through which the communication needs to be sent out based on the priority and availability. For example, if you set the priority in the order SMS, email, and mobile push, the system will first check if the customer's mobile number is available,

* If available, it will send an SMS communication and ignore the rest.
* If not available, it will check whether the customer has an email ID
* If an email ID is available, it sends out an email notification to the customer.
* If not, it will check if the customer is active through mobile push and process the message accordingly.

![Tier Priority Channels](https://files.readme.io/fb21729-capture8.png)

8. Click on **Save**.

## Upgrade using tier

You can upgrade customers using the tier conditions when they satisfy a certain condition. It could be regarding the rewards they earned or just a general notification.

To configure the Upgrade using tier action, follow these steps:

1. In Action, select **Upgrade using tier**.

![Upgrade Using Tier](https://files.readme.io/407cf91-Upgrade_using_tiers.png)

2. In **User entity**, choose Individual to issue points to customers who met the condition.
   OR
   Choose Group to issue points to the group (Deprecated).
3. To issue points, enable Award points.

![Upgrade Using Tier Configuration](https://files.readme.io/652e7eb-Upgrade_using_tiers3.png)

4. In the **Earn condition**, choose the earning condition that you want to associate using the drop-down list.
   To create a new condition, click on **+ Add Condition**.
5. In **Expiry condition**, choose the expiry for the points using the drop-down list.
   To create a new expiry earn condition, click **+ Add condition**.
6. In **Prorate on**, choose on what basis you want to issue percentage of points - transaction amount or event value. This is applicable only for prorated points allocation. For bill amount, you can choose the _Current event_, for tracker, you can choose _Current aggregate_ or _Previous aggregate_.

* **Event default value**: Choose this to allocate prorated points on the transaction amount.
* **Current aggregate**: Choose this to allocate prorated points on the value of the tracker post the current transaction.
* **Previous aggregate**: Choose this to allocate prorated points on the value of the tracker before the current transaction.

## Issue Coupon

This action allows you to issue coupons based on a specific activity.

![Issue Coupon using Quantity](https://files.readme.io/0f05a18e2275d108382e5a742bd742d184844f3d62efd62cb32935faa2b48537-image.png)

The coupons used here are the ones which are claimed by loyalty in strategies.

<Note title="Note">

</Note>
<Note title="Note">
All quantity values, whether initially provided as integers or decimals, will always be converted to integers. Decimal values will be rounded accordingly. For example, 4.7 will be rounded to 5, while 3.2 will be rounded to 3.
</Note>

### Coupon issue types

**1. Fixed Quantity:**

Fixed quantity lets you allocate a predetermined number of coupons either uniformly across all tiers or uniquely for each tier.

**Same for all tiers:**
Set a single, fixed quantity of coupons to be issued across all tiers.
For example, if you allocate 10 coupons, each customer, regardless of tier, receives 10 coupons for completing an action.

![Fixed Quantity Same](https://files.readme.io/4ef794ef99653d8b679cf91c59d0d8efa4bf90f5d57886649400462824c50f52-FixedQuant_Same.png)

![Fixed Quantity Same Process](https://files.readme.io/81a702661fe10f3981078deccd0d90e24c35ca440344bd5dfac702c533d65834-fq-same.gif)

**Different for each tier:**
Set a different quantity of coupons for each tier.
For example, Tier 1 customers are issued 20 coupons, Tier 2 are issued 30 coupons, and Tier 3 are issued 50 coupons for completing an action.

![Fixed Quantity Different](https://files.readme.io/93aac7c5ba13debc93cb0bc44f8a1fd31dc4a0f58fa47e7f84040b14a191c6f3-FixedQuant_Diff.png)

![Fixed Quantity Different Process](https://files.readme.io/40295715c74cd3332f35e6663b0881fb5a6601b866b1f4ca064defa5743d7b75-fq-diff.gif)

**2. Transaction Step Function**

The transaction step function dynamically allocates coupons based on transaction amounts, either uniformly across all tiers or uniquely for each tier.

<Note title="Note">

</Note>
<Note title="Note">
The Transaction Step Function is triggered only when a **Transactional Event** is performed by the customer. For all other events Fixed Quantity is supported.

![Transaction Step Function Note](https://files.readme.io/18dc783e50b86523c623ea1a7a95827baf465f0602b1aaa5b8d8521efe439faa-image.png)
</Note>

**Same for All Tiers:**
Set a specific transaction amount and fixed quantity of coupons to issue across all tiers.
For example, for every transaction worth ₹1000, each customer, regardless of their tier, will be issued 10 coupons for completing the transaction.

![Transaction Step Function Same](https://files.readme.io/abb74eeacda9a159ff0943fb38607c585d4ddfb14628af55aa76e0c889941abe-TSF_Same.png)

![Transaction Step Function Same Process](https://files.readme.io/801a868f8aa7fc30feb321b41a2664a4bf6893c5d7d1186b6f7d9efd5c57356c-tsf-same.gif)

**Different for Each Tier:**
Set a specific transaction amount and different quantity of coupons for each tier.
For example, for every transaction worth ₹1000, Tier 1 customers receive 20 coupons, Tier 2 receive 30 coupons, and Tier 3 receive 50 coupons for completing the transaction.

![Transaction Step Function Different](https://files.readme.io/45612273564622265ed4de30888aff4ac824731a7f75687a03ae8a21157a8a1e-TSF_Diff.png)

![Transaction Step Function Different Process](https://files.readme.io/0d8b94e4fbd4669ae120b57b7e38afd2278bd8af9a8ebf3a73d1578e6c57ce8c-tsf-diff.gif)

> ❗️ The maximum number of coupon that can be allocated to the customer is **500**.
>
> ![Maximum Coupon Limit](https://files.readme.io/53d0231113f86e7f5f1a69d1ffb6aab0aa4237b04654988a8c0c3fa60181f552-image.png)

## Issue Catalog Reward

You can use the **Issue Catalog Reward** option to reward customers for specific events. For example, you can issue rewards to customers who register for your loyalty program or, in a health and fitness app, to those who burn 500 kilocalories in a day.

Once you create a reward in [Marvel Reward UI](https://eu.intouch.capillarytech.com/rewards/ui/#/rewards), you can issue it based on different events. Rewards can be triggered by:

* **Promotions**: Customers automatically receive rewards when they join promotional campaigns.
* **Milestones**: Rewards are issued when customers reach specific milestones, like spending a certain amount or completing a set number of purchases.
* **Events**: Customers earn rewards by initiating transaction, customer, or measurable [behavioral events](https://docs.capillarytech.com/docs/setup-test-behavioral-events) (with the datatype integer or double).

You can issue rewards through **Issue Catalog Reward** using the following:

* For milestones, streaks, and behavioural events, use Loyalty Promotions flow.
* For other events, use Loyalty Program workflows.

Follow these steps to issue a catalog reward:

1. From the **Add Action** window, click on **Issue Catalog Reward**.

![Issue Catalog Reward Action](https://files.readme.io/e69886b22b7847c78591f38b56f754155011af7e5a351a302e30b8b3bbb45665-image.png)

2. Click **Save**.
   The **Add action: Issue catalog reward** window opens.

   ![Issue Catalog Reward Note](https://files.readme.io/30ee4ed6c4272691d34b8455d7fe3b81d6347fb971f3b9879a9c5c80d82cba0d-note_issue_catalog.png)

A note appears in the window stating: _The behavior of the "Issue Catalog Rewards" action differs when configured in the "Point to Reward Conversion" customer event compared to other events._ This means the behaviour of **Issue Catalog Rewards** differs between the [Point to Reward Conversion](https://docs.capillarytech.com/docs/auto-points-conversion-to-reward) and other events such as the `Customer Registration` `Transaction Add`, `Points Redemption`  etc.

The table below shows the difference in the behaviour of **Issue Catalog Rewards** action for `Customer Registration` and `Point to Reward Conversion` events.

| Aspect                 | Customer Registration                                                    | Point to Reward Conversion                                                                                                                           |
| ---------------------- | ------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Reward Quantity**    | Quantity is defined manually or based on the event.                      | Quantity is automatically calculated based on the points earned in the event.                                                                        |
| **Reward Calculation** | You define how many rewards to issue. Example: 1 reward for registration | The system calculates the reward quantity by dividing the total points by the reward value.                                                          |
| **Points Requirement** | Points may or may not be required for issuing the reward.                | Points are required, and rewards are issued based on accumulated points.<br />Example: 1,000 points = 10 rewards if each reward is worth 100 points. |
| **Flexibility**        | You can control the number of rewards issued manually.                   | The system automatically adjusts the number of rewards based on points earned.                                                                       |

3. Choose the Reward you want to issue from the dropdown.
   The active catalog rewards with Live and Upcoming statuses appear here.
4. Choose one of the following from the **Reward quantity same as** dropdown:

a. **Add Manually**
i. Select **Add Manually** to specify the number of rewards you want to issue to a customer.
ii. In **Add manually** field, enter the number of rewards.

![Add Manually](https://files.readme.io/cec3a8f5385d8e2dbf9998d7ea97bdb2095778e8e98d5379c708f388ac6483c3-image.png)

<br />

b. **Transaction Extended Field**
i. Select **Transaction Extended Field** to set the number of rewards a customer receives based on the value captured by the transaction extended field.
ii. Select the transaction attribute or value that determines the reward quantity using the **Select transaction extended field** drop-down.
For example, if the transaction extended field _Gross Weight_ value is 50, the system issues 50 rewards.

![Transaction Extended Field](https://files.readme.io/7e5f872ec980d6e4f1a18f1c5ac5d579967e12e3dd795c73eaa5f695f982a0a7-image.png)

<br />

c. **Points Issued on Event**
i. Select **Points Issued on Event** to give rewards based on the points a customer earns during an event.
For example, if a customer earns 10 points during an event, they get 10 rewards. The system uses the points earned to decide the number of rewards.

![Points Issued on Event](https://files.readme.io/05c1c49e0c1db39b8117711a60284ff8fa1388555f86543f9ee0a71ddd79299b-image.png)

5. (Optional) Choose the **Fulfilment status** from the drop-down. Fulfilment status allows you to track and assign a specific status to a reward when it is given to a customer. By setting a fulfilment status, you can let the customer know the reward status whether it is `been shipped`, `is on the way`, or `being processed`.
6. (Optional) Add additional information about the issuance of the reward under **Notes**.  This information is shared with the vendor responsible for fulfilling the reward.
7. Click on **+Reward transaction custom fields**. A list of custom fields available for the organisation is displayed. These are the customer fields created for the Reward ([using scope ISSUE_REWARD when using API)](https://docs.capillarytech.com/reference/post-create-custom-field) and allow you to send extra information, such as customer details or specific requirements when issuing a catalog reward. This feature is useful when passing data to a vendor who will fulfil the reward.

   ![Reward Transaction Custom Fields](https://files.readme.io/057f118b499d313689de094cfa16f84fac4b45aaccac806a1be765cdebfca2b7-reward_transaction_cf.png)
8. Select the required custom fields by checking the box or use the **Search** option to find it, then click **Select**. The selected custom fields are displayed.
9. Select a mapping type from the **Mapping type** drop down.

   ![Mapping Type](https://files.readme.io/9f3a579733ffee58a56cf416dbba54617e24fa86c377b1786877364f902f6bca-image.png)

| Mapping type               | Description                                                                                                                                                                                                                                                                                                       | Example                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| -------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Add manually               | Manually include extra information in a reward transaction by entering it directly into the **Mapped entity** field.                                                                                                                                                                                              | A brand wants to tell the vendor to issue a reward 10 days after the customer qualifies. To do this, the brand selects a custom field such as Reward Instructions and manually enters the message, "Issue reward after 10 days." This message is then shared with the vendor as part of the reward request.                                                                                                                                                                       |
| Transaction extended field | Include transaction-specific information in a reward transaction through the corresponding transaction extended field.                                                                                                                                                                                            | A brand wants to share the GST number from a customer's transaction with the vendor. To achieve this, the brand selects a custom field like _Transaction Details_ and maps it to the GST Number transaction extended field. The system automatically pulls the correct GST number for each transaction and includes it in the information sent to the vendor.                                                                                                                     |
| Customer extended field    | Include customer-specific information in a reward transaction through the corresponding customer extended field.                                                                                                                                                                                                  | A brand wants the vendor to send the reward to the customer's communication address. To enable this, the brand selects a custom field such as _Shipping Address_ and maps it to the Address customer extended field. The system then retrieves the correct address for each customer and includes it in the reward request sent to the vendor.                                                                                                                                    |
| Points                     | Include information on points issued to the customer so far.<br /><br />**Notes:**<br />• The points mapping type is specific to custom fields of type integer.<br />• The points mapping type is mapped to the points issued on the event so far and not the total number of points issued for the entire event. | A brand wants to issue cashback equal to the number of points a customer has earned so far in a campaign. To do this, the brand selects a custom field like Cashback Amount and maps it to the Points Issued on Events So Far event field. The system then retrieves the correct points total (for example, 300 points) and makes that value available to downstream systems, which convert it into a $3.00 cashback payment and send it to the customer along with their reward. |

## Customer status & label

This action lets you configure the "customer status & label" for your customers directly from the workflows. This action will be available in both the loyalty programs & loyalty promotions.

**For example:**

1. If you want to change the "label" of all the customers who made transactions worth more than 10,000 as "high-value", it can be done with this action directly from workflows.
2. If you want to change the "label" of all the customers who made more than 5 returns to "suspecting", it can be simply done with this action.

To use this action, do the following steps. Go to workflow -> action, and there you'll find:

An action "change customer status & label"

![d248215 Screenshot 2024 01 08 at 5](https://files.readme.io/d248215-Screenshot_2024-01-08_at_5.40.36_PM.png)

Now select the status & label you want to configure. Note that, the label is unique across status. This means that, when you are selecting the label, you are selecting the status also.

![80afd2b Screenshot 2024 01 08 at 5](https://files.readme.io/80afd2b-Screenshot_2024-01-08_at_5.40.52_PM.png)

You'll find that configured action in the display once it is done.

![2452025 Screenshot 2024 01 08 at 5](https://files.readme.io/2452025-Screenshot_2024-01-08_at_5.41.09_PM.png)

In this way, you can change the status & label of your customers directly from workflows.

## Promised alternate currency conversion

This action allows you to allocate promised points in alternate currencies (e.g., "Gold Coins," "Travel Miles") to customers during specific transactional events. These points are "promised" (not immediately usable) and convert to the actual alternate currency after a delay or based on configured rules. This action is supported only for the **TransactionUpdate** customer activity.

Example: Reward customers with 50 promised "Travel Miles" after a flight booking update, which convert to actual miles 30 days later if there are no cancellations.

To enable this action for your loyalty program follow these steps,

1. Select the loyalty program where you want the action to apply.
2. Select **Edit Program**.
3. Go to the **Workflows** section in the loyalty program.
4. Change the **Customer Activity** to **Updates a transaction**.
5. Select the **Condition** where you want the action to apply. To create a new **Condition**, select **+ Condition**
6. Select **+When** to define a new condition.
7. Define the conditions in the **Expression** field if required.
8. Select **+ Add action** to add a new action.
9. Select the **Promised \<alternate currency name> Conversion** action.
10. Select the **User entity** and **Date of conversion to regular points** for the action.

The fields are as follows:

| Fields                                                          | Description                                                                                                                                                                                                                                                                                                                                                                                                                          |
| :-------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| User entity                                                     | Select the user entity to apply the action. \<br> • **Individual**: The action is triggered when transactions are updated for an individual customer. \<br> • **User Group**: The action is triggered when transactions are updated for a [user group](https://docs.capillarytech.com/docs/actions#evaluate-rules-at-the-line-item-level-enable-line-item-unrolling).                                                                |
| Date of \<Alternate Currency Name> conversion to regular points | Select when the promised alternate currencies are converted to redeemable alternate currencies. \<br> • **Immediately**: The promised alternate currencies are converted to redeemable alternate currencies immediately on issuance. \<br> • **Date defined by item return period**: The promised alternate currencies are converted to redeemable alternate currencies after the return period for the purchased items has expired. |

11. Select **Save** to save the changes made to the action.
12. Select **Save and Continue** to save the changes made to the workflow.
13. Select **Publish changes** to publish the changes.

![e267f33762b846feaa107ec33b5f40949101c9d081edd6d048050b2e2c79cde6 Untitled](https://files.readme.io/e267f33762b846feaa107ec33b5f40949101c9d081edd6d048050b2e2c79cde6-Untitled.gif)

### Tier upgrade and downgrade when converting promised alternate currencies

If a loyalty program is set up to upgrade or downgrade a customer based on the number of alternate currencies they currently possess, then the **promised alternate currency conversion** action will influence the tier upgrade or downgrade for that customer.

For example:

A brand has configured their loyalty program tiers that track two alternate currencies (gold coins and silver coins) as:
**Tier 1**: The customer has less than 50 gold coins **and** less than 50 silver coins.
**Tier 2**: The customer has more than 50 gold coins **or** more than 50 silver coins.
**Tier 3**: The customer has more than 50 gold coins **and** more than 50 silver coins.

**Scenario 1: Gradual Upgrade**

**Day 0 – Transaction with Promised Coins:**
The customer earns 60 promised gold coins and 30 promised silver coins.
**Tier Status: ** Remains Tier 1 as promised coins don’t count immediately.

**Day 7 – Conversion:**
Promised coins convert to regular coins.
Now, the customer has 60 regular gold coins and 30 regular silver coins.
**Tier Status:** Upgraded to Tier 2 because at least one coin type (gold) is over 50.

**Day 8 – New Transaction (Mixed Rewards):**
The customer earns 60 regular gold coins and 30 additional promised silver coins.
**Tier Status: ** Still Tier 2, because while the gold remains above 50, the new silver coins are still promised.

**Day 15 – Full Conversion:**
All coins are now regular.
The customer has 60 regular gold coins and 60 regular silver coins.
**Tier Status: **Upgraded to Tier 3 since both gold and silver are above 50.

**Scenario 2: Cancellation Impact**
**Day 0 – Transaction with Promised Coins:**
The customer earns 60 promised gold coins and 30 promised silver coins.
**Tier Status: ** Remains Tier 1 as promised coins don’t count immediately.

**Day 5 – Cancellation:**
The silver transaction is canceled.
Now, the customer has 60 promised gold coins and 0 promised silver coins.
**Tier Status: **Stays in Tier 1 because the cancellation leaves the customer with no silver coins.

**Day 7 – Conversion:**
The 60 promised gold coins convert to 60 regular gold coins.
The customer now has 60 regular gold coins and 0 regular silver coins.
**Tier Status:** Remains Tier 1 since the silver is still below 50.

## Points redemption reversal

This action returns previously redeemed points to the customer’s account if they choose not to use them for a transaction, or if the transaction is returned or canceled. It is only applicable for the **Redeemed points get reversed** customer activity.

Example: A customer spends 20 points to get a discount voucher but later changes their mind and wants to cancel it. The Points Redemption Reversal action lets the 20 points be returned to the customer in this case.

To enable this action for your loyalty program follow these steps,

1. Select the loyalty program where you want the action to apply.
2. Select **Edit Program**.
3. Go to the **Workflows** section in the loyalty program.
4. Change the **Customer Activity** to **Redeemed points get reversed**.
5. Select the **Condition** where you want the action to apply. To create a new **Condition**, select **+ Condition**
6. Select **+When** to define a new condition.
7. Define the conditions in the **Expression** field if required.
8. Select **+ Add action** to add a new action.
9. Select the **Points redemption reversal** action.
10. Select the **User entity** and **Expiry condition** for the action.

The fields are as follows:

| Fields           | Description                                                                                                                                                                                                                                                                                                                                                           |
| :--------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| User entity      | Select the user entity to apply the action. \<br> • **Individual**: The action is triggered when transactions are updated for an individual customer. \<br> • **User Group**: The action is triggered when transactions are updated for a [user group](https://docs.capillarytech.com/docs/actions#evaluate-rules-at-the-line-item-level-enable-line-item-unrolling). |
| Expiry condition | Defines the conditions in which the reversed points will expire. For more information on this feature, click [here](https://docs.capillarytech.com/docs/actions#expiry-condition).                                                                                                                                                                                    |

11. Select **Save** to save the changes made to the action.
12. Select **Save and Continue** to save the changes made to the workflow.
13. Select **Publish changes** to publish the changes.

### Reversal of expired redeemed points

The system doesn't return expired points when a redemption is reversed if the original expiry date has passed, and you select the `Redeemed_Points_Reversal_Default_Expiry` return condition.

For example, a customer redeems 1,000 points on April 28. Of these points, 300 expire on April 30. If the customer reverses the transaction on May 5, the system returns only 700 points because the other 300 have expired.

To have all expired points returned, choose a different return condition.
