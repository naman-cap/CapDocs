---
title: Use Case
deprecated: false
hidden: false
metadata:
  robots: index
---
# Flash Sale Campaign

**scenario**

A retail brand in India is planning a one-day flash sale on its app and wants to send a promotional SMS to all opted-in customers. As the organization is DLT-enabled, it must use an approved promotional template with a registered sender ID and adhere to TRAI guidelines.

**Requirements**

* Use a DLT-approved promotional SMS template.
* Insert a clickable app download link using \{#var#} for compliance.

**Solution**

To create flash sale campaign follow these steps:

1. [Configure SMS Gateway](https://docs.capillarytech.com/docs/configure-sms-settings#/) .
2. [Create a new Campaign](https://docs.capillarytech.com/docs/broadcast-campaign#/) .

![32d893cb7bd5c2845dda1cb4782c3b4ab01de517c99da873b9935908f90ce714 image](https://files.readme.io/32d893cb7bd5c2845dda1cb4782c3b4ab01de517c99da873b9935908f90ce714-image.png)

3. Click [+Add marketing objective](https://docs.capillarytech.com/docs/broadcast-campaign#set-campaign-name-duration-and-strategy) and select **Boost sales** to drive sales.

![74043bba655f76dc9c424f3d3c13e9598b93eea827bac0d67f0f122d34cddf2c image](https://files.readme.io/74043bba655f76dc9c424f3d3c13e9598b93eea827bac0d67f0f122d34cddf2c-image.png)

4. Add the audience by [creating an audience group](https://docs.capillarytech.com/docs/create-audience-group).
5. In the Content section, click **Add Creative** and select **SMS** as the channel.
6. Create SMS template using a DLT-[approved template](https://docs.capillarytech.com/docs/create-sms-template-#/using-approved-templates).

![f097df89e13c0ec314edad253734be542e84c814653806ea0b68bdc66a3e6af5 image](https://files.readme.io/f097df89e13c0ec314edad253734be542e84c814653806ea0b68bdc66a3e6af5-image.png)

6. [Configure SMS content](https://docs.capillarytech.com/docs/configure-sms-content#/).

![c599f1a68d49aee2b07d6dbd6d90532c805720123b53cb0af8c22cb0859f2c49 image](https://files.readme.io/c599f1a68d49aee2b07d6dbd6d90532c805720123b53cb0af8c22cb0859f2c49-image.png)

7. [Configure Link Tracking in SMS](https://docs.capillarytech.com/docs/track-links-in-sms#/) .
8. Raise a JIRA ticket the Product support team.
   2. Once enabled, you can insert the link in SMS using the respective variable tag **\{#var#}**.

![9b3f8a7d66f6b905aca25a6df0a1be816e4dcce68a11e670f740002196f379f0 image](https://files.readme.io/9b3f8a7d66f6b905aca25a6df0a1be816e4dcce68a11e670f740002196f379f0-image.png)

9. Click **Done**.