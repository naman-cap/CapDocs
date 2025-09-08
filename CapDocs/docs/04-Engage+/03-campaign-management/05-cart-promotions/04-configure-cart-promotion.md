---
title: Configure Cart Promotion
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
Each type of cart promotion has a different configuration process based on its use case. Refer to the sections below for the specific promotion type you want to configure, and follow the corresponding steps to complete the setup.

## Loyalty cart promotion

> ❗️ Type of Cart Promotion. It is not same as [loyalty promotion.](https://docs.capillarytech.com/docs/loyalty-promotions-basic-and-advanced#/)

To configure Loyalty Cart Promotion follow the steps below.

1. Define <Anchor label="Availing conditions and benefits" target="_blank" href="https://docs.capillarytech.com/docs/configure-cart-promotion#/availing-conditions-and-benefits">Availing conditions and benefits</Anchor>.
2. Add [Additional Information](https://docs.capillarytech.com/docs/configure-cart-promotion#/additional-information).
3. Setup [Communication](https://docs.capillarytech.com/docs/configure-cart-promotion#/communication).

![bbecc030e3055721a7615b12684f78246e57cb60fb34beeb7b24dfee36f383c3 4](https://files.readme.io/bbecc030e3055721a7615b12684f78246e57cb60fb34beeb7b24dfee36f383c3-4.png)

## Earning cart promotion

To Configure Loyalty earning cart promotion follow the steps below:

1. Configure the criteria for [earning the promotions](https://docs.capillarytech.com/docs/configure-cart-promotion#/promotion-earning).
2. Configure [Avail conditions and benefits ](https://docs.capillarytech.com/docs/configure-cart-promotion#/availing-conditions-and-benefits). Define qualifying cart conditions & benefits.
3. Configure [Additional information](https://docs.capillarytech.com/docs/configure-cart-promotion#/additional-information). Add metadata for your promotion
4. Configure <Anchor label="Communication" target="_blank" href="https://docs.capillarytech.com/docs/configure-cart-promotion#/communication">Communication</Anchor>. Setup the schedule for this message

## POS promotion

To configure POS promotion follow the steps below:

1. Configure <Anchor label="Availing conditions and benefits " target="_blank" href="https://docs.capillarytech.com/docs/configure-cart-promotion#/availing-conditions-and-benefits">Availing conditions and benefits </Anchor>. Define qualifying cart conditions & benefits.
2. Configure [Additional information](https://docs.capillarytech.com/docs/configure-cart-promotion#/additional-information). Add metadata for your promotion.

![3ecf7500433fb86f178741ad8169c44fa4e40c3548bf5b7ea23022f640bffe4e image](https://files.readme.io/3ecf7500433fb86f178741ad8169c44fa4e40c3548bf5b7ea23022f640bffe4e-image.png)

## Rewards promotion

To configure Rewards promotion follow the steps below:

1. Configure [Promotion Earning](https://docs.capillarytech.com/docs/configure-cart-promotion#/promotion-earning).
2. Configure [Avail conditions and benefits ](https://docs.capillarytech.com/docs/configure-cart-promotion#/availing-conditions-and-benefits). Define qualifying cart conditions & benefits.
3. Configure [Additional information](https://docs.capillarytech.com/docs/configure-cart-promotion#/additional-information). Add metadata for your promotion.
4. Configure [Communication](https://docs.capillarytech.com/docs/configure-cart-promotion#/communication). Setup the schedule for this message

![9b91133342846a0576ba87f1699d994e6f506ecfe01018c7dc7860f7ff99b0b3 image](https://files.readme.io/9b91133342846a0576ba87f1699d994e6f506ecfe01018c7dc7860f7ff99b0b3-image.png)

## Code linked promotion

To Configure code linked promotion follow the steps below:

1. Configure [Availing conditions and benefits ](https://docs.capillarytech.com/docs/configure-cart-promotion#/availing-conditions-and-benefits). Define qualifying cart conditions & benefits.
2. Configure [Additional information](https://docs.capillarytech.com/docs/configure-cart-promotion#/additional-information). Add metadata for your promotion.

![c7cc090a44953ef9251f30a453c802e4a90f3adf342e9a15dd4d4176f2a3c420 image](https://files.readme.io/c7cc090a44953ef9251f30a453c802e4a90f3adf342e9a15dd4d4176f2a3c420-image.png)

# Promotion Earning

Configure the criteria that must be met in order to earn the promotion. This page is divided into two subsections based on the type of cart promotion: **Loyalty Earning Cart Promotion** and **Rewards Promotion**, each requiring specific configurations.

Under **Loyalty Earning Cart Promotion,** there are two types to consider: **Single Activity** and **Activity Milestone**. Follow the steps outlined below to understand how to configure each type properly.

# Loyalty earning cart promotion

You can define the earn condition for the customer to earn the promotion.

### For activity-based promotion earning

To configure promotion earning based on a **Single activity**, follow these steps:

![45d26d9fdf397c1792c0c4ef1fcd28df1bcb5d34a5d2aa59bc849c6e097a9431 image](https://files.readme.io/45d26d9fdf397c1792c0c4ef1fcd28df1bcb5d34a5d2aa59bc849c6e097a9431-image.png)

1. Select the activity that target customer should achieve to earn promotion

| Option              | Description                                |
| :------------------ | :----------------------------------------- |
| Makes a transaction | Customer makes a purchase with your brand  |
| Registers           | Customer registers in your loyalty program |
| Updates profile     | Customer Updates their profile             |

2. Define the scope of the promotion.

![1baac5b49e0205778b86c562894db1b4f87e29694667ba72b027b0c55edddde5 image](https://files.readme.io/1baac5b49e0205778b86c562894db1b4f87e29694667ba72b027b0c55edddde5-image.png)

3. Define the earning conditions for the cart promotion.

The fields are as follows:

|                                |                                                                                                                                    |
| :----------------------------- | :--------------------------------------------------------------------------------------------------------------------------------- |
| Criteria Name\*                | Name to identify the criteria                                                                                                      |
| What conditions are to be met? | Condition to be evaluated. For more information refer to the document on [Profiles](https://docs.capillarytech.com/docs/profiles). |

![671aeb6f668d23df742da9c6ec2bfb9a14fdf48060c84b79ba929d781e350aa5 image](https://files.readme.io/671aeb6f668d23df742da9c6ec2bfb9a14fdf48060c84b79ba929d781e350aa5-image.png)

4. Define the additional settings for the cart promotion.

|                              |                                                                      |
| :--------------------------- | :------------------------------------------------------------------- |
| Maximum Earning per Customer | Limit how many times a customer can earn the promotion               |
| Restrict earning days        | Define the promotion earning time period from the date it is issued. |

![22fd8cd411180ac044282912492e4e0a4ce1871287f2799aac8ce90e951bd8c2 image](https://files.readme.io/22fd8cd411180ac044282912492e4e0a4ce1871287f2799aac8ce90e951bd8c2-image.png)

### Milestone based earning

For milestone-based promotions, you can target a specific audience group and set a goal they need to achieve to earn the promotion.

To configure this: In the Configure Earning section, select **Activity Milestone**.

1. Under **Select Milestone Group**, choose the milestone group. Refer to the documentation for more information on [Milestones](https://docs.capillarytech.com/docs/milestones-new-flow).

![42de91c9f60f80040aad093f64851c97a6315efe9408b8709023b077b8237f1c image](https://files.readme.io/42de91c9f60f80040aad093f64851c97a6315efe9408b8709023b077b8237f1c-image.png)

2. Select the target that should be achieved by the audience group in order to earn promotion

![967d762bed8d3d727d1124008710420b6a4084ffd9d06a0df6fcb7d866c2ca4a image](https://files.readme.io/967d762bed8d3d727d1124008710420b6a4084ffd9d06a0df6fcb7d866c2ca4a-image.png)

3. Enable the toggle under **Maximum earning per customer** and add the maximum times a customer can earn the cart promotion.

![8e9a55c95b949d68e61affcf3e7149785377e6bd7e7a92a77508606ede631a07 image](https://files.readme.io/8e9a55c95b949d68e61affcf3e7149785377e6bd7e7a92a77508606ede631a07-image.png)

***

# Rewards promotion

Promotion Earning here lets you define how a customer qualifies to earn a promotion in the cart.

1. Select **Direct trigger** to automatically issue the promotion based on predefined customer behaviors or preferences—no manual action is required from the customer.

![2a7891a9b63f2dd90f548329326fe376919ee05fabb1d756f78a267b761aa7d1 Screenshot 2025 04 11 114416](https://files.readme.io/2a7891a9b63f2dd90f548329326fe376919ee05fabb1d756f78a267b761aa7d1-Screenshot_2025-04-11_114416.png)

2. You can define maximum earning per customer that will limit the number of times a customer can earn the promotion.

![dbaa26feaa083dd3bbcc670d48f834d1d432874acba98fac57ba8d772cf2b14c Screenshot 2025 04 11 114524](https://files.readme.io/dbaa26feaa083dd3bbcc670d48f834d1d432874acba98fac57ba8d772cf2b14c-Screenshot_2025-04-11_114524.png)

3. Select **Continue** to proceed.

# Availing conditions and benefits

Define the cart conditions and the associated benefits that must be met for the promotion to apply.

![0f90c60563ccfcff7f46f3fa310fa9e3d00cb0ba063c4346cfd307bd07177756 Screenshot 2025 04 22 131511](https://files.readme.io/0f90c60563ccfcff7f46f3fa310fa9e3d00cb0ba063c4346cfd307bd07177756-Screenshot_2025-04-22_131511.png)

# Define the benefits and cart/product conditions to avail the cart promotion

To define the benefits and cart/product conditions to avail the cart promotion, follow these steps:

1. Select **Add conditions/benefits**.
2. In Define qualifying conditions, select the **cart property.** Refer to the table below.

   ![43aa3baacc660cac303f0dc36a7dde8b1bc3e8694ac11e6fa19c5f40b30e4ab9 image](https://files.readme.io/43aa3baacc660cac303f0dc36a7dde8b1bc3e8694ac11e6fa19c5f40b30e4ab9-image.png)

| Option                                                 | Description                                                                                                                                                                                                                                                                                                                                        |
| :----------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Cart amount**                                        | To define the qualifying condition on the **entire cart amount**. For example, avail the promotion only for customers whose cart value is `>= $100`.                                                                                                                                                                                               |
| **Count of items in the cart**                         | To define the qualifying condition on the **count of items** added to the cart. For example, avail the promotion only for customers whose cart count `> 5`.                                                                                                                                                                                        |
| **Sum of line item amount for the selected product**   | To define the qualifying condition on the price of line items of **specific products, categories, brands, or attributes** in the cart. Use **Select product** to add your preferred products, attributes, or categories. For example, avail promotion only if the sum of the price of cart items of only shirts (product category) exceeds `$200`. |
| **Sum of line item quantity for the selected product** | To define the qualifying condition on the **count of line items** of specific products, categories, or attributes in the cart. Use **Select product** to add your preferred products, attributes, brands, or categories. For example, avail promotion only if the count of specific cart items (shirts - product category) exceeds `3`.            |
| **Payment Mode**                                       | To define what **mode of payment** is used to make the transaction.                                                                                                                                                                                                                                                                                |

3. Select whether the benefit is on **Cart** or\*\* Selected product in the cart \*\* . This step is not required when the qualifying condition is payment mode.

|                               |                                                                                    |
| :---------------------------- | :--------------------------------------------------------------------------------- |
| Cart                          | Refers to the customers entire shopping cart                                       |
| Selected products in the cart | Define specific products in the cart that the condition or benefit should apply to |

4. Select how the benefit is offered **Fixed amount** or **Percentage based**.
5. Click **Continue**

# Define scope and restriction

To define the scope and restrictions for the cart promotion, follow these steps:

1. Select **+ Add scope/restrictions** under **Define scope and restrictions on availing promotions**.
2. Under**Define scope**:

   1. Select **Customize** under **Limit to specific store entities** and then select **Concept**, **Store** or **Zone** and the specific option from the drop-down menu to select a specific store, zone or scope. For more information on scope, refer to the [store hierarchy](https://docs.capillarytech.com/docs/store-hierarchy) document.
   2. Select **Customize** under **Limit to specific day/time scope** and then configure the day/time scope by selecting the specific options from the drop-down menus.
   3. Select **Customize** under **Limit to specific customers** and then configure the customer by selecting the specific options. The options available are as follows:

      <Table align={["left","left"]}>
        <thead>
          <tr>
            <th style={{ textAlign: "left" }}>
              Configuration
            </th>

            <th style={{ textAlign: "left" }}>
              Description
            </th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td style={{ textAlign: "left" }}>
              Customers who are eligible for this promotion
            </td>

            <td style={{ textAlign: "left" }}>
              Define the customers who are eligible for the cart promotion.

              * All customers: All registered (loyal and non-loyal) customers are eligible for the cart promotion.
              * Loyalty customers: All registered customers who are part of the loyalty program are eligible for the cart promotion.
            </td>
          </tr>

          <tr>
            <td style={{ textAlign: "left" }}>
              Who belongs to loyalty type
            </td>

            <td style={{ textAlign: "left" }}>
              Define the loyalty program type that qualifies customers for the cart promotion.

              * All: All registered customers who are part of any loyalty program type are eligible for the cart promotion.
              * Supplementary program: All registered customers who are part of a <Anchor label="supplementary/subscription program" target="_blank" href="https://docs.capillarytech.com/docs/subscription-program#/">supplementary/subscription program</Anchor> are eligible for the cart promotion.
              * Tier: All registered customers who are part of a tier-based loyalty program are eligible for the cart promotion.
            </td>
          </tr>
        </tbody>
      </Table>

      <br />

   ![73f355742d5923a2b922fc5f1080b4ca3175bb8f2adc8ec38cb48b207001f6ef Screenshot 2025 08 04 at 11](https://files.readme.io/73f355742d5923a2b922fc5f1080b4ca3175bb8f2adc8ec38cb48b207001f6ef-Screenshot_2025-08-04_at_11.28.04_AM.png)
3. Click on Continue to proceed.
4. Under**Issual restrictions**define the individual promotion issual limit.

   ![bf194c6984db42164d2e6cd82a6efec738a0d6c0256df2a3669f5106ac461db1 image](https://files.readme.io/bf194c6984db42164d2e6cd82a6efec738a0d6c0256df2a3669f5106ac461db1-image.png)

* \*\*Individual promotion issual limit \*\*- Use this option to limit the number of promotions every customer can get. You can also select No limit.

5. Under **Redemption restriction**, configure the following:

i)**Earn Limits** (This step is only available for Loyalty Earning Cart Promotion and Rewards Cart Promotion)

![96b772dc2e45690556fbc5939eb6556ccc7581e951dd77ac584177c3020aca09 image](https://files.readme.io/96b772dc2e45690556fbc5939eb6556ccc7581e951dd77ac584177c3020aca09-image.png)

<Table align={["left","left"]}>
  <thead>
    <tr>
      <th>
        Field Name
      </th>

      <th>
        Description
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Restrict redemptions per earn
      </td>

      <td>
        Toggle to enable limiting redemptions based on each earn event.
      </td>
    </tr>

    <tr>
      <td>
        * Maximum times an earn could be redeemed
      </td>

      <td>
        Sets how many times a single earn instance can be redeemed.
      </td>
    </tr>

    <tr>
      <td>
        * Maximum transactions in which an earn could be redeemed
      </td>

      <td>
        Sets the number of different transactions where the same earn can be used.
      </td>
    </tr>

    <tr>
      <td>
        * Maximum discount due to single earn
      </td>

      <td>
        Specifies the maximum discount value allowed from a single earn.
      </td>
    </tr>
  </tbody>
</Table>

ii)**Individual cart limits**

![3d396151e54fdad12c14352b258f9af64e84e06ecab1deeb5e3d1c707c9962f6 image](https://files.readme.io/3d396151e54fdad12c14352b258f9af64e84e06ecab1deeb5e3d1c707c9962f6-image.png)

| Field Name                                                       | Description                                                                   |
| :--------------------------------------------------------------- | :---------------------------------------------------------------------------- |
| Number of times the promotion could be redeemed in a single cart | Sets how many times the promotion can apply within a single transaction/cart. |
| Maximum discount due to the promotion in a single cart           | Sets a limit on the total discount provided by the promotion within one cart. |

iii)**Individual customer limits**

![17ee503e0e0b9aec0ab8dca94dac81a98b8f8d902503c6dab1577416437ac26b image](https://files.readme.io/17ee503e0e0b9aec0ab8dca94dac81a98b8f8d902503c6dab1577416437ac26b-image.png)

<Table align={["left","left"]}>
  <thead>
    <tr>
      <th>
        Field Name
      </th>

      <th>
        Description
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Enable limit on the number of times a customer could avail the promotion
      </td>

      <td>
        Toggle to restrict how many times a customer can use the cart promotion in total.
      </td>
    </tr>

    <tr>
      <td>
        * Maximum times a customer could avail the promotion
      </td>

      <td>
        Defines the maximum number of times a customer is allowed to use the cart promotion.
      </td>
    </tr>

    <tr>
      <td>
        * Refresh the limit after a specified period
      </td>

      <td>
        Sets the reset frequency for cart promotion redemption limit .
      </td>
    </tr>

    <tr>
      <td>
        Enable limit on the number of transactions a customer could avail the promotion
      </td>

      <td>
        Toggle to restrict the number of transactions in which a customer can apply the promotion.
      </td>
    </tr>

    <tr>
      <td>
        * Maximum transactions in which a customer could avail the promotion
      </td>

      <td>
        Sets the maximum number of transactions that qualify per customer.
      </td>
    </tr>

    <tr>
      <td>
        * Refresh the limit after a specified period
      </td>

      <td>
        Sets the reset frequency for transaction limit.
      </td>
    </tr>

    <tr>
      <td>
        Enable limit on total discount a customer could avail across redemptions
      </td>

      <td>
        Toggle to limit the total discount amount a customer can receive from all redemptions.
      </td>
    </tr>

    <tr>
      <td>
        * Maximum discount a customer could avail across redemptions
      </td>

      <td>
        Defines the overall discount amount limit per customer across all uses
      </td>
    </tr>

    <tr>
      <td>
        * Refresh the limit after a specified period
      </td>

      <td>
        Sets the reset frequency for the discount redemption limit. Never: The limit does not get reset.\
        Days: Select the number of days after which the limit is reset.
        Weeks: Select the number of days after which the limit is reset.
      </td>
    </tr>
  </tbody>
</Table>

<Note title="Note">
Redemption restrictions cannot be updated once the promotion is live
</Note>

6. Click on **Continue** to proceed.
7. In **Set expiry of the promotion**. Enter the limit till when the promotion can be applied in a cart. This can be used for sending expiry communication.

   ![1d098e0a82101eecbd6533b327fcd4413b56cb17979a82857b9c3a5c1e424826 image](https://files.readme.io/1d098e0a82101eecbd6533b327fcd4413b56cb17979a82857b9c3a5c1e424826-image.png)
8. Click on **Continue** to proceed.

# Additional Information

This section allows you to enter the value for custom field that have been configured for the organisation. To learn more about how to configure refer to the [Cart Promotion Settings](https://docs.capillarytech.com/docs/cart-promotion-settings) page.

To enter the Additional Information follow these steps:

1. Enter the value for the custom field.
2. Select **Continue**

![ee8d1bb9644a729e1f40d21deaa5e12af54c44669b61083d23f97c119295506f Screenshot 2025 06 05 141355](https://files.readme.io/ee8d1bb9644a729e1f40d21deaa5e12af54c44669b61083d23f97c119295506f-Screenshot_2025-06-05_141355.png)

# Communication

It allows you to configure automated messages to customers based on their interaction with a promotion or reward. To understand how to create content used for different channels like mobile push, SMS templates, and more refer to [Content Management](https://docs.capillarytech.com/docs/content-management). You can set communication for two types of messages **On Earning** (this is only available for Loyalty Earning Cart Promotion and Rewards Cart Promotion) and to **Set Expiry Reminder**. Follow the steps below to understand how to set it.

![1dbb7a9f36e4ddbb36b36c2750a3a934023933d95c6cc707915e0e83705fb208 image](https://files.readme.io/1dbb7a9f36e4ddbb36b36c2750a3a934023933d95c6cc707915e0e83705fb208-image.png)

## On earning

It allows you send a creative message (email, SMS, push, etc.) when a customer earns a reward (e.g., loyalty points, discount, voucher).

1. Click **Add creative on earning**
2. Select either one: SMS, Email, Push notification
3. Select **Create new** to create a new template or choose from the list of available templates.
4. Select **Done** to save the changes.

## Set expiry reminder

This feature lets you notify customers before a reward or benefit expires, encouraging them to use it before it becomes invalid.

1. Click **Add creative expiry reminder**
2. Select either one: SMS, Email, Push notification
3. Select **Create new** to create a new template or choose from the list of available templates.

![fc43b3b6c81e35d30b87a2d5f8f230983123c45c815575dbe7d0d3dd3426477b image](https://files.readme.io/fc43b3b6c81e35d30b87a2d5f8f230983123c45c815575dbe7d0d3dd3426477b-image.png)

4. Configure the Expiry Reminder by clicking the <img src="https://cdn-icons-png.flaticon.com/512/158/158384.png" alt="Gear Icon" width="20" height="20" /> icon
5. Select **Done** to save the changes.