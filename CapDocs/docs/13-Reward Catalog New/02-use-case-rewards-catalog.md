---
title: Use Case
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
# Requirement

An e-commerce retailer specializing in fashion, electronics, and home goods wants to improve customer retention and provide certain incentives to its customers. To achieve this, the brand wants to create a rewards system for its customers. 

1. The customer must be able to view rewards sorted into different categories such as Fashion, Electronics, Home & Living, and Health & Beauty.
2. When a customer selects a reward, the platform should allow the collection of relevant information such as shipping address or special requests like gift wrapping.
3. The platform must provide real-time updates at important stages of the rewards process, like when a customer redeems a product, they get an immediate confirmation.
4. To improve visibility and engagement, rewards should also be organized into groups like "Spring Essentials" for seasonal items or "Most Redeemed" for popular choices.
5. The platform should support control of redemption limits. For example, a limited-edition gadget may be limited to one redemption per customer.

# Solution

To set up the rewards catalog according to the above requirements of the brand, Follow the steps below:

1. Create multiple [Rewards Categories](https://docs.capillarytech.com/docs/reward-categories) for the required categories named Fashion, Electronics, Home & Living, and Health & Beauty.

![70e8be88f6b1963d304900f55ca47daa7423658e7b5fc2a2784ebc70bf27faa3 Screenshot 2025 04 23 at 6](https://files.readme.io/70e8be88f6b1963d304900f55ca47daa7423658e7b5fc2a2784ebc70bf27faa3-Screenshot_2025-04-23_at_6.59.37_PM.png)

2. Create  [Rewards Custom Fields](https://docs.capillarytech.com/docs/reward-custom-field)  such as **Shipping Address**  to collect additional information when a customer selects a reward. While creating this custom field, set the scope to **Catalog item creation** so that it applies specifically to rewards. Choose the data type as **String** . If the information is essential, enable the **Is this custom field mandatory?** toggle. Additionally you can also provide a default value.

![cca999ce4610bb59a6e1d1543d22b51de1e3ab3e4cd9328bf65f7f2edce78583 Screenshot 2025 04 23 at 7](https://files.readme.io/cca999ce4610bb59a6e1d1543d22b51de1e3ab3e4cd9328bf65f7f2edce78583-Screenshot_2025-04-23_at_7.03.11_PM.png)

<br />

<br />

<br />

<br />

<br />

<br />

<br />

<br />

<br />

<br />

<br />

<br />

<br />

3. Create a [Reward Fulfillment Status](https://docs.capillarytech.com/docs/reward-fulfillment-status) to enable real-time updates at key stages of the rewards process.  To support this, define fulfillment statuses such as **CONFIRMED**, **ON ITS WAY**, or **DELIVERED** that reflect the current state of the reward. These statuses can be customized and updated based on the fulfillment progress to keep the customer informed at every step.

![a45ccedaf2faeca32543bbb11df054f29f572abb5b8730d6e6a63671de47fb65 Screenshot 2025 04 23 at 6](https://files.readme.io/a45ccedaf2faeca32543bbb11df054f29f572abb5b8730d6e6a63671de47fb65-Screenshot_2025-04-23_at_6.40.22_PM.png)

4. Create [Reward Groups.](https://docs.capillarytech.com/docs/reward-groups) Rewards can be organized into groups like "Spring Essentials" or "Most Redeemed" and have individual ranks assigned to them.

![a617ba5d66316a780de2b5eb23fa0f84adae9580f99d0853c5a44e229e58e9bc Screenshot 2025 04 23 at 6](https://files.readme.io/a617ba5d66316a780de2b5eb23fa0f84adae9580f99d0853c5a44e229e58e9bc-Screenshot_2025-04-23_at_6.46.03_PM.png)

5. Create a [Rewards Redemption Limit.](https://docs.capillarytech.com/docs/reward-redemption-limit) To create the required redemption limit, the following steps should be followed:

* Select **every customer.**
* Toggle **Limit on specific catalog item type.**
* Choose **Physical reward** under **Catalog item type.**
* Set **Frequency of limit** to **No frequency.**
* Set **Redemption limit per customer** to **1.**
* Choose a **redemption limit end date and time.**

![77520f2b74f483e90cb518cb33abecf0bb2b8de7a1fedf0dea7e5faf7eeb145a Screenshot 2025 04 29 at 9](https://files.readme.io/77520f2b74f483e90cb518cb33abecf0bb2b8de7a1fedf0dea7e5faf7eeb145a-Screenshot_2025-04-29_at_9.49.52_AM.png)
