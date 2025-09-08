---
title: Understand Audience Reachability Status
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
Reachability refers to whether a user can be contacted via a specific communication channel. It helps determine if a particular user can receive messages or notifications sent through that channel.

You can view the reachability status in the audience view detail page.

Example: A user has created a campaign and wants to understand via which communication channel the reachability is more. They can view the reachability under the specific audience group.

To View Reachability follow the given steps below:

1. On **Engage+** navigate to the **Audience** section.

![1e03b7cb10ace85bc3f651e562b9b265ef244fa578fd61641866841e7c6a6acc Screenshot 2025 05 20 at 10](https://files.readme.io/1e03b7cb10ace85bc3f651e562b9b265ef244fa578fd61641866841e7c6a6acc-Screenshot_2025-05-20_at_10.34.45_AM.png)

2. From the Audience Listing page, select the desired audience list.

![8fd5ce5ad7b51255e7a95f3ecacca74d0c0a99fb5476d014a7544f53ceb09d84 Screenshot 2025 05 19 at 12](https://files.readme.io/8fd5ce5ad7b51255e7a95f3ecacca74d0c0a99fb5476d014a7544f53ceb09d84-Screenshot_2025-05-19_at_12.26.31_PM.png)

3. After you select the list, you’ll see a report showing which channels (like SMS, Email, or WhatsApp) have the highest reach for that audience.

![b82a4f1 Audience reachability](https://files.readme.io/b82a4f1-Audience_reachability.gif)

# Reachability Categories

| **Category**            | **Reachability Status** | **Description**                                         |
| ----------------------- | ----------------------- | ------------------------------------------------------- |
| **VALID**               | ✅                       | The user is reachable and valid.                        |
| **SUBSCRIBED**          | 🟢                      | The user is reachable and has subscribed.               |
| **UNABLE_TO_VERIFY**    | ❓                       | Unable to verify the user’s reachability.               |
| **SOFT_BOUNCED**        | 🔄                      | There were soft bounces. More may lead to HARD_BOUNCED. |
| **CONTACT_UNAVAILABLE** | 🚫                      | The user’s registered contact is not available.         |
| **UNSUBSCRIBED**        | 🔕                      | The user has unsubscribed from communications.          |
| **INVALID**             | ❌                       | The user’s registered contact is invalid.               |
| **HARD_BOUNCED**        | 🛑                      | Previous communications have HARD_BOUNCED.              |

# When is Reachability Calculated?

* **Immediate and Specific Date Messages:** Reachability is computed before campaign creation.
* **Recurring Campaigns:** Reachability for the filter list is calculated at the pre-execution stage.

# Reachability computation

The audience reachability is computed based on the whitelisting (valid mobile or email IDs) and their subscription status. For WhatsApp, the customers who have unsubscribed to a particular brand on WhatsApp are excluded and if the WhatsApp number is not available, the fall back channel will be considered. If a user's subscription status is not available, they are considered available.

<Note title="Note">
If a customer has experienced more than three hard bounces in previous communication attempts, the system automatically blocks future messages to that customer to prevent repeated delivery failures.
</Note>

<br />
