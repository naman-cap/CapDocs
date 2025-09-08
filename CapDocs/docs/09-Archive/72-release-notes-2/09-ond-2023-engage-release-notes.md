---
title: OND 2023 | Engage+ Release notes
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
# Badges in Campaigns

Campaigns now support a new Incentive type called Badges. You can now enrol your desired audience group for a particular Badge. Badges serve as a form of gamification and a sense of pride and accomplishment within the user, reinforcing the targeted behaviours and boosting engagement.

Read more about Badges [here](https://docs.capillarytech.com/docs/badges-in-campaigns).

# FTP connector on Audience upload

While creating an audience group, many brands have a requirement to fetch customer lists from an external source on a daily basis. This external source could be (other than Capillary DB).

To achieve this, brands had to use the Segments capability on Insights+ to create audience groups which had customers from a source other than the Capillary database (could be client FTP or a third-party FTP that the client works with). But now you can do that directly in the Audience module, by importing a file from an external FTP. Please note that this is not available by default for all customers and approvals are required from the Business team in order to use this capability. Read about the import of audience using FTP [here](https://docs.capillarytech.com/docs/audience-management#import-via-ftp-connector).

# Barcode capability in Email

When it comes to personalized emails, we have gone one step further and in addition to addressing the customer using their names, and focusing on their recent activities, we can now have a customer identifier (in the form or barcode). The roadmap here is to use this capability to have a QR code which can redirect customers to a generic/personalized link—more information [here](https://docs.capillarytech.com/docs/barcode-generation). 

# Credit config Mandate for Journeys

Till date, brands were able to create a journey without checking whether your org had credit rates configured for all channels that are used for communication in the journey.\
However, now there is a mandate to have the new credit system onboarded and channel rates configured in order to make a Journey live. This is done to ensure that there are no discrepancies in the way clients are billed.\
Information related to these configs is added to the [documentation](https://docs.capillarytech.com/docs/configure-journey#6-send-journey-for-approval).

# Zalo template

We now support the Zalo notification service (ZNS) to send messages through Zalo, a popular communication channel in Vietnam. Information on configuring the Zalo template and using Zalo for communication can be found [here](https://docs.capillarytech.com/docs/create-zalo-template).

# SDK

## Andriod

### [Version 1.4.2](https://github.com/Capillary/hydra-sdk-android-maven/packages/1780353?version=1.4.0) (December 22, 2023)

[InApp Message - 1.0.1](https://github.com/Capillary/hydra-sdk-android-maven/packages/1863337?version=1.0.1)\
Added support for following types of in-app messages

* Rating
* Feedback
* AppRating

Added support for GIF images for all types of supported in-app messages

## iOS

### [Version 1.4.4](https://github.com/Capillary/hydra-sdk-ios-packages/releases/tag/1.4.4) (December 19, 2023)

Added support for following types of in-app messages

* Rating
* Feedback
* AppRating

Added support for GIF images for all types of supported in-app messages.
