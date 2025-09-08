---
title: JAS 2024 | Engage+ Releases
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

## Android

### [Version 1.7.7](https://github.com/Capillary/hydra-sdk-android-maven/packages/1780353) (September 25, 2024)

* Bugfixes for Notification centre enhancement

### [Version 1.7.5](https://github.com/Capillary/hydra-sdk-android-maven/packages/1780353) (September 3, 2024)

* Notification centre enhancement with configurable support

### [Version 1.6.5](https://github.com/Capillary/hydra-sdk-android-maven/packages/1780353) (August 14, 2024)

* Support for remote logger 

## iOS

### [Version 1.5.6](https://github.com/Capillary/hydra-sdk-ios-packages/releases/tag/1.5.6) (September 5, 2024)

* Notification center enhancement feature
  * Added support for custom fonts, borders, and styling for CTA buttons.
  * Improved logic for displaying expandable content based on notification style.
  * Updated background color functionality for primary CTAs.
  * Introduced new CTA design options as per mockups.

### [Version 1.5.5](https://github.com/Capillary/hydra-sdk-ios-packages/releases/tag/1.5.5) (August 27, 2024)

* Fixed crash related to core data migration for events model
  * Implemented a custom mapping model for Core Data migration to ensure all events are retained during the transition.
  * Fixed the Core Data migration crash when updating from the old data model version to the newer version.

### [Version 1.5.4](https://github.com/Capillary/hydra-sdk-ios-packages/releases/tag/1.5.4) (August 14, 2024)

* Introduced remote logging feature
  * Introduced a Remote Logger feature that syncs logs to the server, depending on the log level selected by the application.
  * Updated the sign-up event to make all fields optional except for `cuid`.
  * Now, `cuid` is the only required field for the sign-up event.

### [Version 1.5.3](https://github.com/Capillary/hydra-sdk-ios-packages/releases/tag/1.5.3) (July 19, 2024)

* Resolved bug related to date formatting
  * Resolved the Date formatting issue where locale change causes converting current date to future date.

### [Version 1.5.2](https://github.com/Capillary/hydra-sdk-ios-packages/releases/tag/1.5.2) (July 15, 2024)

* SDK will show notification badge on application icon
  * Show notification badge count of unread notifications on application icon whenever the application receives a valid notification.
  * Resolved issue where application receives an in-app message in the background but is unable to show it when the application comes to the foreground.
