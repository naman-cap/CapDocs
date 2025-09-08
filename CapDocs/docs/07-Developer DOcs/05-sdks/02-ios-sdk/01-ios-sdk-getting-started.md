---
title: Getting Started
excerpt: >-
  This guide provides information on how to integrate your mobile apps with
  Capillary iOS SDK.
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
Capillary SDK provides you with essential analytics capabilities and helps you engage better with your users through, [push notifications](https://docs.capillarytech.com/docs/configure-push-notifications) ,  [notification inbox](https://docs.capillarytech.com/update/docs/configure-notification-center_ios#/) and [in-app messaging](https://docs.capillarytech.com/docs/in-app-messaging_ios).

The SDK consists of the following frameworks:

* **HydraCore** - This framework is the base for all other frameworks. The framework provides various infrastructure modules such as network, data persistence and log management, and in addition, also provides API(s) for Analytics(Event) reporting.
* **HydraPushNotification** -This framework helps in the following:
  * Simplifying the integration of push/remote notifications for all Capillary customers
  * Enabling the delivery of notifications
  * Ccapturing and reporting data for analytics
  * Ensuring the posting of DLR (Delivery Receipt) events at all stages.
* **HydraPushNotificationServiceExtension** - This can be integrated with the notification content extension of the host application and enables customising and modifying the original notifications before it is presented to the user.  Its key responsibility is to dynamically update a notification UI based on the payload.
* **HydraInAppMessage** - This enables to display in-app messages using popup notifications.
* **HydraInboxCore** - Manages all remote notifications received by the application and stores them locally to display in the Notification Center.
* **HydraInboxUI** - Populates the Notification Center with all remote notifications received by the application.

# Prerequisites

* iOS SDK version 14.3 or above
* Minimum deployment version (iOS): 13.0

# Supported platforms

* Mobile(iOS)
* Tablet(iPadOS)

# Version

HydraSDK 1.3.0 and above.

# iOS SDK Size

| SDK library                           | Size    |
| :------------------------------------ | :------ |
| HydraCore                             | 12.9 MB |
| HydraInAppMessage                     | 2 MB    |
| HydraPushNotification                 | 1.4 MB  |
| HydraPushNotificationServiceExtension | 1.1 MB  |

To integrate your mobile apps with Capillary iOS SDK, perform the following steps:

* [Install SDK](https://docs.capillarytech.com/docs/install-sdk)
* [Initialise SDK](https://docs.capillarytech.com/docs/initialise-ios-sdk)
* [Configure iOS SDK API](https://docs.capillarytech.com/docs/ios-sdk-api-reference)
* [Configure push notifications](https://docs.capillarytech.com/docs/configure-push-notifications)