---
title: Configure Gift Voucher
deprecated: false
hidden: false
metadata:
  robots: index
---
**To create a gift voucher refer the following steps**:

1. Select the campaign to which you want to add a gift voucher and navigate to the Gift Voucher tab.
2. Select **create voucher**.

![417e5a2 image14](https://files.readme.io/417e5a2-image14.png)

3. Enter Voucher Details

* **Voucher Name**: Provide a name for the voucher.
* **Description**: Enter a brief description of the voucher.
* **Duration**: Set the start and end dates for the voucher using the calendar boxes.

4. Select Voucher Type. Choose the appropriate voucher type based on your campaign goal:

* **[Loyalty](https://docs.capillarytech.com/docs/configuring-a-gift-voucher#/configuring-loyalty-gift-vouchers)** - This gift voucher is issued directly to customers who are part of a loyalty program, without requiring them to perform any specific activity.
* **[Loyalty Earning](https://docs.capillarytech.com/docs/configuring-a-gift-voucher#/configuring-loyalty-earning-gift-vouchers)** - This gift voucher is issued to a selected audience based on specific actions or milestones they complete, such as a transaction, registration, or reaching a defined target.
* **[Rewards Linked](https://docs.capillarytech.com/docs/configuring-a-gift-voucher#/configuring-reward-linked-gift-vouchers)**- This gift voucher is issued to customers when an external trigger occurs, such as purchasing a reward or redeeming points through a loyalty program.
* **[Code Linked](https://docs.capillarytech.com/docs/configuring-a-gift-voucher#/configuring-code-linked-gift-vouchers)** - This gift voucher is issued as a code that can be used by any customer, without restricting it to a specific audience or eligibility criteria.

5. Click **Save** to apply all the settings. The voucher will appear on the voucher listing page.

## Configuring loyalty gift vouchers

After selecting the voucher type, there are configurations that allows you to have a better control over the loyalty gift vouchers.

### Step 1: Voucher expiry & additional information

Define the expiry and add custom information required for the voucher

1. The first option allows you to set an expiry duration for the voucher. You can either select **Along with voucher** or set a number of days from issual of the voucher.
2. You can also add custom fields that are required for the voucher.

![2400548 small image13](https://files.readme.io/2400548-small-image13.png)

### Step 2: Cart conditions and benefits

Define cart, store conditions and the maximum benefit on the cart. You can define the cart evaluation condition for customers to qualify for the voucher.

1. Enter the **voucher value**, and \*\*add condition \*\*for the voucher to be issued, if required.

![b65d6216909cb3aa6f65f4aa3e5662e84188226c795f746447926abf1eea245c Screenshot 2025 07 23 at 12](https://files.readme.io/b65d6216909cb3aa6f65f4aa3e5662e84188226c795f746447926abf1eea245c-Screenshot_2025-07-23_at_12.07.45_PM.png)

2. Click on **+add condition**.
3. Select whether you want the conditions to be applied **On Cart** or **On Store**.

![664463854439eaa6737d004c6163ba0e61c535619db63e6192718378bb899622 Screenshot 2025 07 23 at 12](https://files.readme.io/664463854439eaa6737d004c6163ba0e61c535619db63e6192718378bb899622-Screenshot_2025-07-23_at_12.11.57_PM.png)

4. If you select Cart, two condition types are available:

   * **Amount**: Apply the voucher when the total cart amount meets a specified value.\
     Example: Apply the voucher only if the cart value is ₹2000 or more.

   ![d1feb959ae069b723555f22eefe0a38335ccff17285e3dd3605cf9f2f1fbef6d Screenshot 2025 07 23 at 12](https://files.readme.io/d1feb959ae069b723555f22eefe0a38335ccff17285e3dd3605cf9f2f1fbef6d-Screenshot_2025-07-23_at_12.28.43_PM.png)

   * **Count of Items in the Cart**: Apply the voucher based on the number of items in the cart.\
     Example: Apply the voucher only if there are at least 3 items in the cart.

   ![bbbb0bf9c8e314127251941b896ffea9737cf83e89f2f01c5a53b3993c2aeb71 Screenshot 2025 07 23 at 12](https://files.readme.io/bbbb0bf9c8e314127251941b896ffea9737cf83e89f2f01c5a53b3993c2aeb71-Screenshot_2025-07-23_at_12.30.19_PM.png)
5. You can also add additional conditions by selecting attributes or uploading SKU files to further refine eligibility. You can choose to add conditions based on:

* **Attributes**: Filter line items in the cart using one or more of the following:
  * **Brand**
  * **Category**
  * **Product**

For each attribute, specify whether the condition applies to items in (included) or not in (excluded) from the selected values. You can add multiple attributes in combination.

![47de29e358898621c8454eb33cefbeea55d093e45c2d562e1da76b05bb9e83dc Free Cute Funny Animated Happy Birthday Video Instagram Post Gif](https://files.readme.io/47de29e358898621c8454eb33cefbeea55d093e45c2d562e1da76b05bb9e83dc-Free_Cute_Funny_Animated_Happy_Birthday_Video_Instagram_Post_Gif.gif)

* **Upload SKU File**: Upload a list of SKUs to define specific products that should be included or excluded from the condition.

![6fa898b6f3e9c59596aad398f645bbc6c1fd815b3e076bcfff963c049f7489ad  Gif](https://files.readme.io/6fa898b6f3e9c59596aad398f645bbc6c1fd815b3e076bcfff963c049f7489ad-_Gif.gif)

6. You can also apply conditions based on the store by selecting **On Store** as the condition type. The following store-level filters are available:
   * **Concept**
   * **Zone**
   * **Store**

![d004161 small image10](https://files.readme.io/d004161-small-image10.png)

7. Click **+Add Condition** to define both cart and store conditions, if needed.

![4e1eb8ccb9b5c084e70a68103355e6a4e1e91e4a24a911b8faa125dbdd5f6e2f  Gif 1](https://files.readme.io/4e1eb8ccb9b5c084e70a68103355e6a4e1e91e4a24a911b8faa125dbdd5f6e2f-_Gif_1.gif)

### Step 3: Issual settings

Set validations to be done at the time of issual of the voucher.

1. Enable Customer activation required to allow customers to manually activate the voucher to auto-apply for a transaction.  For example, you can allow customers to activate 5% off on groceries. Whoever activates the offer will get flat 5% off on grocery items in their next transaction.
2. You can set the maximum number of times a voucher can be issued to a single customer, up to a limit of 50. For example, if the limit is 10, each customer can be issued the same voucher 10 times.

![291e4a6c6f34a3bd9f3547b9eb6d25616434214050344d271fff772c96ee6761 Screenshot 2025 07 01 at 11](https://files.readme.io/291e4a6c6f34a3bd9f3547b9eb6d25616434214050344d271fff772c96ee6761-Screenshot_2025-07-01_at_11.33.38_AM.png)

### Step 4:  Redemption settings

Configure redemption limits for the customers.

1. Configure redemption settings for vouchers by the customers.The number of times a voucher can be redeemed by a customer is by default set as 1 and cannot be changed. Set the number of earn instances that can be redeemed in a single cart.

![3f789a8 small image1](https://files.readme.io/3f789a8-small-image1.png)

### Step 5: Communication

Set expiry reminder to notify customers before their vouchers expire.

* Click **+ Add Creative Expiry Reminder**, then select the creative you want to use for the reminder.
* The following engagement channels are available: SMS, E-Mail, Push Notifications.

![ec58ac6 small image16](https://files.readme.io/ec58ac6-small-image16.png)

Click **Save** and save all the settings.

The voucher is created. You can view it You can also hover over the three dots after the voucher is created and change the settings as required.

## Configuring loyalty earning gift vouchers

After selecting the voucher type, there are configurations that allows you to have a better control over the loyalty earning gift vouchers.

### Step 1: Voucher expiry & additional information

Define the expiry and add custom information required for the voucher. For more information refer to <Anchor label="voucher expiry & additional information" target="_blank" href="https://docs.capillarytech.com/docs/configuring-a-gift-voucher#/voucher-expiry--additional-information">voucher expiry & additional information</Anchor>.

### Step 2: Cart Conditions and benefits

Define cart, store conditions and the maximum benefit on the cart. You can define the cart evaluation condition for customers to qualify for the voucher and the actual benefit the customers could get with the voucher. For more information refer to <Anchor label="Cart Conditions and benefits" target="_blank" href="https://docs.capillarytech.com/docs/configuring-a-gift-voucher#/cart-conditions-and-benefits">Cart Conditions and benefits</Anchor>.

### Step 3: Earning criteria

1. Select type of activity on the basis of which you want the customer to earn. It can be of 2 types -

**Single activity**

* Customer who are eligible for earning this gift voucher, who have performed the activity -

  * (a)Transaction
  * (b)Registration
  * (c)Profile update

![90f361bdfabeb85eed31ab2d2e590d3e5e806374977a5af32d4913f8e7828117 Screenshot 2025 07 23 at 4](https://files.readme.io/90f361bdfabeb85eed31ab2d2e590d3e5e806374977a5af32d4913f8e7828117-Screenshot_2025-07-23_at_4.20.01_PM.png)

* You can add conditions on

  * **On Stores**
  * **On event**

  ![841c8e54fabca7a52dae038a040801c461af902050e25229eb87c59abd1d85ed Screenshot 2025 07 23 at 4](https://files.readme.io/841c8e54fabca7a52dae038a040801c461af902050e25229eb87c59abd1d85ed-Screenshot_2025-07-23_at_4.22.32_PM.png)

**Milestone based**

* Select the milestone group to whom you wanted to give gift voucher.
* Under that select the target which you want to achieve.

2. **Restrict earning period**: Select when you want the restrict this earning period either **along with the voucher** or **x days from issual**.

![38450050429cc257352019879b8d6941cbcfec014be6edac2fa51296d0437044 Screenshot 2025 07 23 at 4](https://files.readme.io/38450050429cc257352019879b8d6941cbcfec014be6edac2fa51296d0437044-Screenshot_2025-07-23_at_4.26.32_PM.png)

3. **Number of times a customer can earn the voucher**:  You can specify the maximum number of times a customer can earn this voucher.

![da430200e50fb002985d184439b5d274a6ccbb87c1edb03a65148ae846329078 Screenshot 2025 07 23 at 4](https://files.readme.io/da430200e50fb002985d184439b5d274a6ccbb87c1edb03a65148ae846329078-Screenshot_2025-07-23_at_4.27.44_PM.png)

### Step 4: Issual settings

Set validations to be done at the time of issual of the voucher. For more information refer to **[Issual settings](https://docs.capillarytech.com/docs/configuring-a-gift-voucher#/issual-settings)**.

### Step 5: Redemption settings

Configure redemption limits for the customers. For more information refer to **[Redemption settings](https://docs.capillarytech.com/docs/configuring-a-gift-voucher#/redemption-settings)**.

### Step 6: Communication

Set expiry reminder to notify customers before their vouchers expire. For more information refer to \*\*<Anchor label="Communication" target="_blank" href="https://docs.capillarytech.com/docs/configuring-a-gift-voucher#/communication">Communication</Anchor> \*\*.

Click **Save** to apply all settings. The voucher will be created.

## Configuring reward linked gift vouchers

After selecting the voucher type, there are configurations that allows you to have a better control over the reward linked gift vouchers.

### Step 1: Voucher expiry & additional information

Define the expiry and add custom information required for the voucher. For more information refer to <Anchor label="voucher expiry & additional information" target="_blank" href="https://docs.capillarytech.com/docs/configuring-a-gift-voucher#/voucher-expiry--additional-information">voucher expiry & additional information</Anchor>.

### Step 2: Cart Conditions and benefits

Define cart, store conditions and the maximum benefit on the cart. You can define the cart evaluation condition for customers to qualify for the voucher and the actual benefit the customers could get with the voucher. For more information refer to <Anchor label="Cart Conditions and benefits" target="_blank" href="https://docs.capillarytech.com/docs/configuring-a-gift-voucher#/cart-conditions-and-benefits">Cart Conditions and benefits</Anchor>.

### Step 3: Earning criteria

Set the no. of times for which the customer can earn the voucher

![b8e21c0 small image2](https://files.readme.io/b8e21c0-small-image2.png)

### Step 4: Communication

You can communicate with the customer by adding creative on earning.

* Click **+ Add Creative on earning**, then select the creative
* The following engagement channels are available: SMS, E-Mail, Push Notifications.

![662ed554cce584cd98e915728a2bbd2cfcd1d6e561220b9c863b883491f5bddb Screenshot 2025 07 23 at 4](https://files.readme.io/662ed554cce584cd98e915728a2bbd2cfcd1d6e561220b9c863b883491f5bddb-Screenshot_2025-07-23_at_4.49.17_PM.png)

Set expiry reminder to notify customers before their vouchers expire.

* Click **+ Add Creative Expiry Reminder**, then select the creative you want to use for the reminder.
* The following engagement channels are available: SMS, E-Mail, Push Notifications.

![a2a306db9adc1da1956aebca9d104a28955c588853b3b8ac8703ceed0c3480aa Screenshot 2025 07 23 at 4](https://files.readme.io/a2a306db9adc1da1956aebca9d104a28955c588853b3b8ac8703ceed0c3480aa-Screenshot_2025-07-23_at_4.49.52_PM.png)

Click **Save** to apply all settings. The voucher will be created.

## Configuring code linked gift vouchers

After selecting the voucher type, there are configurations that allows you to have a better control over the code linked gift vouchers.

### Step 1: Voucher expiry & additional information

Define the expiry and add custom information required for the voucher. For more information refer to <Anchor label="voucher expiry & additional information" target="_blank" href="https://docs.capillarytech.com/docs/configuring-a-gift-voucher#/voucher-expiry--additional-information">voucher expiry & additional information</Anchor>.

### Step 2: Cart Conditions and benefits

Define cart, store conditions and the maximum benefit on the cart. You can define the cart evaluation condition for customers to qualify for the voucher and the actual benefit the customers could get with the voucher. For more information refer to <Anchor label="Cart Conditions and benefits" target="_blank" href="https://docs.capillarytech.com/docs/configuring-a-gift-voucher#/cart-conditions-and-benefits">Cart Conditions and benefits</Anchor>.

### Step 3: Redemption settings

Configure redemption limits for the customers. For more information refer to <Anchor label="Redemption settings" target="_blank" href="https://docs.capillarytech.com/docs/configuring-a-gift-voucher#/redemption-settings">Redemption settings</Anchor>.