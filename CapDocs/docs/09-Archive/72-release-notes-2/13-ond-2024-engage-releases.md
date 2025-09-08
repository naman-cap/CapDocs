---
title: OND 2024 | Engage+ Releases
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
# SDK

## iOS

### [Version 1.5.8](https://github.com/Capillary/hydra-sdk-ios-packages/releases/tag/1.5.8) (October 29, 2024)

* Improvements to notification handling and display

  **Key Updates:**

  * **Shared User Defaults Accessibility:**
    * Updated the shared user defaults to "No Protection," allowing access in the Notification Service Extension even when the device is locked. This ensures notifications are processed and displayed correctly in locked states.

### [Version 1.5.7](https://github.com/Capillary/hydra-sdk-ios-packages/releases/tag/1.5.7) (October 21, 2024)

* Significant updates and enhancements for notification handling and data management

  **Key Updates:**

  * **Notification Sync & Pull:**
    * Added functionality to store and fetch the last sync time for pull message requests.
    * Enhanced the notification database to support updates within sync operations.
    * Established a structured process for pulling undelivered notifications and updated status parsing logic.

  * **Core Data & Database Management:**
    * Executed migrations between non-shared and shared persistent stores, especially for logs and notification data.
    * Enabled log data to be shared across different environments.
    * Applied migration steps using app group identifiers to transition data from non-shared to shared persistent stores.

  * **Notification Event Handling:**
    * Extended `HydraNotificationType` enum with a new type: `NC`.
    * Utilized `HydraNotificationsReceiverProtocol` for receiving undelivered in-app and push notifications.
    * Added logic to refresh the inbox upon user interaction with a notification.

  * **New Domains & Protocols:**
    * Introduced a new domain for the Pull Approach, extending its logic for more efficient notification management.
    * Optimized `NotificationCore+PullApproach.swift` to handle pull requests on a separate serial queue, improving performance and preventing queue blocking.

  * **Miscellaneous Improvements:**
    * Added Codable support to store server configurations in shared user defaults.
    * Refactored and removed redundant code for better readability.
    * Updated `EventScheduler.swift` and `HydraDBFactory.swift` with performance optimizations.
    * Added support for handling notification badge updates on the app icon and reporting DLR (Delivery Receipt) for push notifications.
