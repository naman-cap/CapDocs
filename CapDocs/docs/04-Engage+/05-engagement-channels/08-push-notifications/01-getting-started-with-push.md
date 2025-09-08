---
title: Configure Push Notification Settings
excerpt: ''
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
  pages:
    - type: basic
      slug: creating-and-sending-push-notifications
      title: Creating and Sending Push Notifications
---
To enable push notifications, you need to set up the necessary configurations. This allows notifications to be sent seamlessly to users.

# Prerequisites

Before implementing push notifications, ensure the following prerequisites are met for both Android and iOS platforms.

* [ Capillary SDK must be configured](https://docs.capillarytech.com/docs/getting-started-with-push#configure-hydra-sdk-for-android-and-ios) . For more information refer to the [Android](https://docs.capillarytech.com/docs/push-notification) and[ iOS SDK ](https://docs.capillarytech.com/docs/configure-push-notifications)documentation.
* [Obtain push permission](https://docs.capillarytech.com/docs/getting-started-with-push#obtaining-push-permissions).
* [Push Notification template be configured on the Engage UI](https://docs.capillarytech.com/docs/create-push-notification-template#/).

## Obtaining Push Permissions

Both Android and iOS require explicit opt-in permissions from users through an OS-level prompt. Users have the final decision to opt in or out of push notifications. Utilizing a Push Primer in-app message can boost opt-in rates effectively.

To Configure Push permissions, refer to [Configuring FCM for Push Notification. ](https://docs.capillarytech.com/reference/push-notification#configuring-fcm-for-push-notifications)

![292ec07 image3](https://files.readme.io/292ec07-image3.png)

![6f1288d image10](https://files.readme.io/6f1288d-image10.png)

<br />

# Configuring Push Notification

![c11481bde2dd80b015cfe4d7e33a73b5608d454786692e6ec4fb3383f512bae6 Flowchart](https://files.readme.io/c11481bde2dd80b015cfe4d7e33a73b5608d454786692e6ec4fb3383f512bae6-Flowchart.png)

1. [Configure Hydra SDK for Push Notification](https://docs.capillarytech.com/docs/configure-hydra-sdk)- Set up the SDK to enable push notification tracking and delivery.
2. [Create a Push Notification Template](https://docs.capillarytech.com/docs/create-push-notification-template#/) – Choose an existing push notification template or create a new one based on your campaign goals.
3. Configure Platform Specific Content – Customize the notification separately for Android and iOS to ensure the best user experience.
4. [Creating and Sending Push Notifications in Campaigns and Journeys](https://docs.capillarytech.com/docs/creating-and-sending-push-notifications)- Push notifications can be added to both Campaigns and Journeys to engage users. In Campaigns, they promote products and drive engagement, while in Journeys, they send personalized prompts as users progress.