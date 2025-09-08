---
title: Loyalty+ org settings
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
## Tier Upgrade Settings

From the second tier that you create, you need to configure the eligibility criteria for the tier upgrade and define the upgrade condition for each tier.  

> 📘 * The eligibility criteria type that you set for tier upgrade remains the same for all the subsequent tiers that you create.

#### To upgrade tier settings, follow these steps.

1. Log in to **Intouch**, and navigate to **Menu** > **Loyalty+** > **Programs**.
2. In **Programs**, select the program for which you want to set the Tier update setting and click **Edit Program**.
3. Click **Advanced settings**. 

![393e148 5P8FmimPgnfdEmrd DkKIGnD 4 Nev4v9Q](https://files.readme.io/393e148-5P8FmimPgnfdEmrd-DkKIGnD-4-Nev4v9Q.png)

4. In **Eligibility settings**, define the eligibility condition for customers to upgrade tier.
5. In **Eligibility criteria**, select the base consideration for tier upgrade.

<Table align={["left","left"]}>
  <thead>
    <tr>
      <th>
        Option
      </th>

      <th>
        Description
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Current points
      </td>

      <td>
        Upgrade tier based on the active points of the customer.
      </td>
    </tr>

    <tr>
      <td>
        Lifetime points
      </td>

      <td>
        Upgrade tier based on the total points earned by the customer to date.
      </td>
    </tr>

    <tr>
      <td>
        Lifetime purchases
      </td>

      <td>
        Upgrade tier based on the total purchase amount of the customer to date.
      </td>
    </tr>

    <tr>
      <td>
        Tracker Value
      </td>

      <td>
        Upgrade tier based on the tracker values.
      </td>
    </tr>
  </tbody>
</Table>

6. In **Upgrade type**, select type of tier upgrade. This is applied when a customer fulfills the eligibility criteria.

<Table align={["left","left"]}>
  <thead>
    <tr>
      <th>
        Option
      </th>

      <th>
        Description
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Issue points and then upgrade to the next tier
      </td>

      <td>
        1. Points for the current transaction are issued based on the customer's current tier settings, then
        2. The tier is upgraded.
      </td>
    </tr>

    <tr>
      <td>
        Upgrade to the next tier and then issue points
      </td>

      <td>
        1. The tier is upgraded, then
        2. all points for the transaction are issued according to the new tier setting.
      </td>
    </tr>

    <tr>
      <td>
        Issue points, upgrade tier, and then issue remaining points
      </td>

      <td>
        Points are issued in two parts based on the amount required for upgrading the tier.

        1. Only points required for the customer to be upgraded to the next tier are issued based on the current tier’s settings. 
        2. The remaining points from the transaction are issued based on the upgraded tier’s settings.
      </td>
    </tr>
  </tbody>
</Table>

7. Click **Add Secondary Criteria**, to add another eligibility criteria. For example, if you have the primary eligibility criteria on lifetime purchases, you can also another on tracker value.

![d0ea2cd 0IYe0JMyL ETaZ KEnDeGzOtPMWvmlTFUg](https://files.readme.io/d0ea2cd-0IYe0JMyL_ETaZ-KEnDeGzOtPMWvmlTFUg.png)

8. Click **Done**.

## Points Round off Settings

Define how many decimal points are supported for points you issue. 0 is for no decimal, 1 is for one decimal point, 2 is for two decimal points, 3 is for three decimal points. For example, if 50.3458 points have to be allocated to a customer.

<Table align={["left","left","left","left","left"]}>
  <thead>
    <tr>
      <th>

      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Round Decimals value
      </td>

      <td>
        0
      </td>

      <td>
        1
      </td>

      <td>
        2
      </td>

      <td>
        3
      </td>
    </tr>

    <tr>
      <td>
        Points round-up in each case
      </td>

      <td>
        50
      </td>

      <td>
        50.3
      </td>

      <td>
        50.34
      </td>

      <td>
        50.346
      </td>
    </tr>
  </tbody>
</Table>

#### To configure points round-off settings, follow these steps.

1. Log in to **Intouch**, navigate to **Menu** > **Loyalty+** > **Programs**.
2. In Programs, select the program for which you want to set the points round-off setting and click **Edit Program** > **Advanced settings**.

![6adb342 qZ9LOPGaAY2096QSvsoL5k5nOEANnXUTlg 1](https://files.readme.io/6adb342-qZ9LOPGaAY2096QSvsoL5k5nOEANnXUTlg_1.png)

3. Navigate to the **Points** page.
4. Choose the decimal places using the drop-down list that appears on the earn conditions. By default, the system calculates to 3 decimal places.

![8ac51e8 Ugoxii9X2vYyf4cm4tAvwC9RQYCfjnxRtg 1](https://files.readme.io/8ac51e8-Ugoxii9X2vYyf4cm4tAvwC9RQYCfjnxRtg_1.png)

5. Click **Done**.

## Payment Mode Settings

To incentivize based on the payment mode combination, you need to configure these steps.

1. Add supported payment modes for the org
2. Create required payment modes.
3. Configure Rulesets for a customer activity (on the Workflow) to define what action to perform for a tender combination.

### Create a payment method

A payment method combination will have a mode of payment, an attribute, and the corresponding attribute value.\
**Example:**

* Card, Bank Name: ICICI, Card tier: Gold (Mode: Card, Attribute: Bank name, Value: Card type)
* DiscountCoupon, CouponType: Ticket (Mode: Discount Coupon, Attribute: Sodexo)\
  The Payment methods tab lets you create different payment mode combinations and incentivize customers with points or coupons based on payment mode combinations. You need to configure actions to perform for each payment mode strategy on the Workflow page.

> 📘 - In the case of MLP, tender combinations created in a loyalty program cannot be used in any other programs of the org, not even in the org default program. 

#### To allocate points based on the payment method, follow these steps.

> 📘 * Before proceeding with payment method configuration, ensure that your org has payment modes added as explained here. 

1. Log in to **Intouch**, navigate to **Menu** > **Loyalty+** > **Programs**.
2. In **Programs**, select the program for which you want to set the payment method setting and click **Edit Program** > **Advanced settings**. 
3. Navigate to the **Payment methods** page.
4. Enable the toggle button to restrict points allocation based on payment methods.

![7c4e533 k VR GizjIacRCjALml2O6BZsdrTZ9idrA](https://files.readme.io/7c4e533-k_VR_GizjIacRCjALml2O6BZsdrTZ9idrA.png)

5. In **Name**, specify a name for the payment method.
6. In **Payment mode**, choose the type of payment mode.
7. Click **Add attribute**, you will see the list of attributes of the payment mode.
8. In **Attribute**, choose the desired attribute from the drop-down list.

![9cc6149 xtZ rSFZUpSQRF7HBH6M9XbKb7CE0TiMKA](https://files.readme.io/9cc6149-xtZ-rSFZUpSQRF7HBH6M9XbKb7CE0TiMKA.png)

9. In **Value**, choose the desired attribute value (Values option appears only for supported attributes).
10. Enable point maximization using the toggle button to make the payment method is eligible for points maximization (in Workflows).
11. Click **Done**.

## Group Loyalty Settings (Friends & Family)

You can enable transferring points for a customer activity using a group loyalty setting. 

#### To enable tier sync and transferring points for a customer activity, follow these steps.

1. Log in on **Intouch**, navigate to **Menu** > **Loyalty+** > **Programs**.
2. In Programs, select the program for which you want to set the group loyalty setting and click **Edit Program** > **Advanced settings**.

![f5250c5 4u3MKQxAYSLxGNyGDkGdjHSQgizpOYQfhQ](https://files.readme.io/f5250c5-4u3MKQxAYSLxGNyGDkGdjHSQgizpOYQfhQ.png)

3. In the **Friends & family program**, enable the Tier sync toggle button to set all members in the family group to have the same tier similar to the primary member.

![9c3e59a AljeA9qPdLdW7HRzVXTR512Q DMwNM4cIg](https://files.readme.io/9c3e59a-AljeA9qPdLdW7HRzVXTR512Q-DMwNM4cIg.png)

4. Enable the **Enable points contribution by a secondary member** toggle button. You will see the list of customer activities.
5. Enable the toggle button for each customer activity for which you want to activate points transfer. All the option names are self-explanatory.

![4e9fd8c a V75G qgkE jFQcywlsQSLNrrGpL8mhWg](https://files.readme.io/4e9fd8c-a_V75G-qgkE_jFQcywlsQSLNrrGpL8mhWg.png)

6. Click **Done**.

## Communication Settings

Channel settings help increase productivity by reaching out to customers based on your org's preferred channel (mandatory) and other channels based on customers'  availability in the order of priority. This can also minimize the cost of communication by reaching out to cheap communication channels and maximize the probability of conversion by prioritizing channels that could give better ROI.

#### To configure communication settings, follow these steps.

1. Log in to **Intouch**, navigate to **Menu** > **Loyalty+** > **Programs**.
2. In **Programs**, select the program for which you want to set the communication setting and click **Edit Program** > **Advanced settings**.

3) In the **Communication Channels**, enable the **Setup Communication** toggle button to set mandatory channels and priority channels.

* **Mandatory Channels**: Channels that are mandatory for sending the notifications
* **Priority Channels**: Channels that need to be triggered based on priority and availability. For example, if Mobile is set as priority 1, Mobile Push as priority 2, and email as priority 3, the system first checks whether SMS is configured and then checks if the mobile number is available for the customer. If anyone fails, then it will try to send the notification through mobile push and so on.

**Example**\
Consider for a tier upgrade event, SMS is set as a Mandatory Channel and the priority channels are email (1) and WeChat (2). When a tier is upgraded for the customers mentioned in the following table, notifications are sent based on the channel availability and configuration settings as explained below.

<Table align={["left","left","left","left"]}>
  <thead>
    <tr>
      <th>
        Channel
      </th>

      <th>
        SMS
      </th>

      <th>
        Email
      </th>

      <th>
        WeChat
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Customer A
      </td>

      <td>
        Yes
      </td>

      <td>
        Email
      </td>

      <td>
        Will ignore (even if available)
      </td>
    </tr>

    <tr>
      <td>
        Customer B
      </td>

      <td>
        Yes
      </td>

      <td>
        Not available
      </td>

      <td>
        WeChat Message (if available
      </td>
    </tr>

    <tr>
      <td>
        Customer C
      </td>

      <td>
        Yes
      </td>

      <td>
        Not available
      </td>

      <td>
        Not available
      </td>
    </tr>
  </tbody>
</Table>

4. Click **Done**.

To set communication for tier upgrade, tier renewal and points expiry, see [Communication](https://docs.capillarytech.com/docs/communication).
