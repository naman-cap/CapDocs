---
title: Use Case
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
## Promotions & Offers – Flash Sale Announcement

**Scenario**: A banner appears when a user opens the app during a weekend sale. The message highlights the deal and encourages users to start shopping immediately.

**Requirement**

* When a user opens the app during a flash sale, the system shall trigger an in-app message that:
* Announces the ongoing promotion (e.g., “Mega Weekend Sale – Flat 50% Off!”)
* Displays a visually appealing banner to grab attention
* Includes a clear CTA (e.g., “Tap to shop”)
* Redirects users to the sale page using a deep link
* Boosts awareness and drives conversions during the campaign period

Administrators shall be able to configure this message within Campaigns.

**Solution**

To set up In app message on campaign follow these steps:

1. Configure Capillary SDK. For setup instructions, refer to the [Android ](https://docs.capillarytech.com/docs/push-notification)and [iOS SDK ](https://docs.capillarytech.com/docs/configure-push-notifications)documentation.
2. [Create a new campaign](https://docs.capillarytech.com/docs/broadcast-campaign#/) or [edit an existing one.](https://docs.capillarytech.com/docs/modify-a-campaign) on Engage+.

![779d2b91af5faa587017a2a37f7ca4921a4632bef31e7e7517985042ae7928e3 Screenshot 2025 06 12 at 12](https://files.readme.io/779d2b91af5faa587017a2a37f7ca4921a4632bef31e7e7517985042ae7928e3-Screenshot_2025-06-12_at_12.25.59_PM.png)

3. Add the audience by [creating an audience group](https://docs.capillarytech.com/docs/create-audience-group#/).
4. In the Content section, click **Add Creative** and select **In app message** as the channel.
5. [Create In app message on campaign](https://docs.capillarytech.com/docs/send-in-app-message-on-campaign#/).

![223f9288987a8533a55d879e8034ad472413dfab05855fb6cfa24870c3aecc00 Screenshot 2025 06 12 at 12](https://files.readme.io/223f9288987a8533a55d879e8034ad472413dfab05855fb6cfa24870c3aecc00-Screenshot_2025-06-12_at_12.46.01_PM.png)

6. [Schedule](https://docs.capillarytech.com/docs/schedule-message) when the message will be sent out.

![74b772a22b6e1e82c422c3ac73f3e80cff05da94e1d3e542bfacf8aabf34b3d1 Screenshot 2025 06 11 at 6](https://files.readme.io/74b772a22b6e1e82c422c3ac73f3e80cff05da94e1d3e542bfacf8aabf34b3d1-Screenshot_2025-06-11_at_6.15.10_PM.png)

7. Select send for approval and approve the message.

The message will be sent to the customer as per the schedule.