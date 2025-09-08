---
title: AMJ 2024 | Engage+ Releases
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
# Journeys Reporting

You can now view block-level KPIs on the Journeys canvas as shown below:

![b420fb080c5a7cf83b8dc245f524ce16a90e60453a73019186c6857a49d40ed4 image](https://files.readme.io/b420fb080c5a7cf83b8dc245f524ce16a90e60453a73019186c6857a49d40ed4-image.png)

<br />

Some of the KPIs that you can see on the Journeys canvas include:

Customer measures such as number of individuals who entered a block, who are waiting in a block and so on. 

Channel-level measures such as messages sent, delivered, opened and clicked.

Incentives-related measures such as redemptions and issuals. 

Please note this feature needs to be enabled by raising a ticket to sustenance for the time being. We will be making this available for all organizations by default by next quarter. For documentation, please go [here](https://docs.capillarytech.com/docs/block-level-report-of-journeys).

# Partner Program Linked Event in Journeys

We have added the partner program linked event to support customer journeys based on association with a subscription loyalty program. You can now use the event as the entry user event for a customer journey, in exit blocks and event-based wait blocks. 

![64cbb3d4131140079ec7a191105242417fa2815b362ff83c12b297131ce3ea7b image](https://files.readme.io/64cbb3d4131140079ec7a191105242417fa2815b362ff83c12b297131ce3ea7b-image.png)

# SDK

## iOS

### [Version 1.5.1](https://github.com/Capillary/hydra-sdk-ios-packages/releases/tag/1.5.1) (June 20, 2024)

* Updated subscription handling
  * Accept subscriptions as a list of objects of type `Any`.
  * Update notifications list immediately on notification click in Notification Center.

### [Version 1.5.0](https://github.com/Capillary/hydra-sdk-ios-packages/releases/tag/1.5.0) (June 18, 2024)

* Enhanced SDK security and functionality
  * Implemented encryption strategies for storing sensitive information.
  * Added a security layer to User Defaults.
  * Encrypting local storage data.
  * Implemented action click callbacks for Push Notification, Notification Center, and In-App Message.
  * Added support for Subscriptions.

### [Version 1.4.8](https://github.com/Capillary/hydra-sdk-ios-packages/releases/tag/1.4.8) (May 29, 2024)

* Added support for default Trigger as 'INSTANT' for InAppMessages
  * The `trigger` object of the InAppNotification Payload is optional.
  * Implemented changes to handle optional Trigger for InAppMessages.

### [Version 1.4.7](https://github.com/Capillary/hydra-sdk-ios-packages/releases/tag/1.4.7) (May 21, 2024)

* Refined deep link processing in Notification Center
  * Removed the extra check while processing deep link CTA action.
  * Removed check for `https` URL scheme in case of deep link.

### [Version 1.4.6](https://github.com/Capillary/hydra-sdk-ios-packages/releases/tag/1.4.6) (May 16, 2024)

* Simplified deep link processing
  * Removed the extra check while processing deep link CTA action.
  * Removed check for `https` URL scheme in case of deep link.
