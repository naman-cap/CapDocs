---
title: JAS 2023 | Engage+ Releases
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
# # Bridging knowledge gap around static audience list that is created with the combination of 2 or more parent groups.

## Added disclaimer at multiple junctions to support seamless creation of audience filters.

When an audience filter is created combining two existing groups, that particular new set of data remains static and does not refresh even if there has been a change in the 2 parent groups. For example, I combine 2 audience lists A and B (namely C).\
A consists of 1,2,3 and B consists of 1,2,4,5,6, and I choose the C to have common elements of A and B, then C will have 1 and 2.\
However, even if A gets updated with 1,2,3,5 in future, there will be no impact on C, and C will continue to have 1 and 2 only.\
This has been the behavior of the system always but it has created confusion among users. Therefore, we have introduced the mechanism to educate the users upfront about the mechanism of this feature like below:

![](https://files.readme.io/18e2b4a-image.png)

![](https://files.readme.io/45dbeb2-image.png)

## Complete capitalisation of First, Last or Full name is now possible via Engage+ creatives!

Hey THERE! Or Hey THERE BUDDY!\
More often than not, we have observed that marketers want to emphasize on the names of their customers while addressing them through social campaigns. To make this activity more prominent, we are now allowing campaign creators to make the entire first/last or full name in uppercase format.

You can use the Tag mentioned in the screenshot below for the same:

![2b7a5cc image](https://files.readme.io/2b7a5cc-image.png)

## Exit Trigger in Journeys

Brands were tired of keeping track of customers who do not meet the entry criteria of a particular journey and had to try hard to keep them at bay. Now, with the new exit trigger option, brands can automate the exit of such customers who do not fulfill the entry criteria of that particular journey.\
It’s easier to implement than you think. All you need to do is toggle the button (as seen in this screenshot).

![58ec3f2 image](https://files.readme.io/58ec3f2-image.png)

Please note that this feature is optional and by default this will be set as “NO”. Also, it will be applicable only when the Entry criteria is formed using an “Audience List”.

More details can be found on the documentation page [here](https://docs.capillarytech.com/docs/configure-journey#adding-an-exit-trigger). 

## Cart Promotions and Gift Voucher in Journeys!

One of the most awaited incentives in Journeys is now live - Cart Promotions.\
Cart promotions can be selected as an incentive type and can be claimed like any other offer.\
It doesn’t stop there - Now, Cart promotion can also be applied at:\
Event based wait; Exit trigger; Audience Manager and Decision split block\
You can include customers who have redeemed a particular gift voucher/cart promotion.\
Some examples are attached below:

#### Cart Promo/Gift voucher in Event Based Wait:

![a5fdbe1 image](https://files.readme.io/a5fdbe1-image.png)

#### Cart Promo/Gift voucher in Exit Trigger:

![b221509 image](https://files.readme.io/b221509-image.png)

More details can be found on the documentation page.

## Email Whitelisting

There have been enough requests for email whitelisting and we all were tired of doing that manually, so we now give the option to upload and whitelist a bigger chunk of emails at once.\
You can find this option under Engage+ settings. It’s as simple as you’d see in the image below:

![533d1a9 image](https://files.readme.io/533d1a9-image.png)

You can also refer to the documentation link for this

## International Number formatting on Campaigns Home Page

Campaign performance KPIs and left-over communication credits can now be viewed as per the locale selection of the respective org. 

Based on the "Base country" selection in the global org setting, the format for KPIs and credits on the campaign home page will change respectively. 

![368d6f4 Screenshot 2023 11 28 at 3](https://files.readme.io/368d6f4-Screenshot_2023-11-28_at_3.34.23_PM.png)

Example shown below:

Case 1 - if base country selected as India

![7347168 Screenshot 2023 11 28 at 3](https://files.readme.io/7347168-Screenshot_2023-11-28_at_3.34.36_PM.png)

Case 2 - if base country is United States

![4b994b3 Screenshot 2023 11 28 at 3](https://files.readme.io/4b994b3-Screenshot_2023-11-28_at_3.34.41_PM.png)

and so on.

# SDK

## Android

### [Version 1.4.1](https://github.com/Capillary/hydra-sdk-android-maven/packages/1780353?version=1.4.0) (August 22, 2023)

[Hydra Inbox UI - 1.0.1](https://github.com/Capillary/hydra-sdk-android-maven/packages/1915044?version=1.0.1)

Added support for the customizing Notification Centre theme.\
The Following fields can be modified using a custom theme

* Background colour of the Notification Item based on the read/unread state of the notification
* Text colour of the Notification title, message and date label based on the read/unread state of the notification
* Font can be updated for Notification title, message and date label based on the read/unread state of the notification
* The text colour and font of the label stating "No Notifications Found"

NOTE - Application developers can opt for the default theme for the standard template.

### [Version 1.4.0](https://github.com/Capillary/hydra-sdk-android-maven/packages/1780353?version=1.4.0) (August 9, 2023)

* **Notification Centre** -  Added support for notification centre through which your users will have a unified and streamlined notification experience, where they can easily access and manage their notifications in one place
  * The notifications will be displayed in form of a list, consisting of
    * Heading
    * Time and date of receiving
    * A short description
  * The user can click on the notification, which will navigate them to the correct path be it an external url or a deep link inside the app
  * The content of the notification is parsed from the push notifications sent out.
  * Adding dlr event push deleted
* **Bug Fix** -  Reporting of events based on the correct account Id

[Hydra Inbox Core - 1.0.0](https://github.com/Capillary/hydra-sdk-android-maven/packages/1915044?version=1.0.0)

* Provides a base to retrieve, delete or alter the stored notifications in the database
* Also exposes api’s for the UI to be consumed

[Hydra Inbox UI - 1.0.0](https://github.com/Capillary/hydra-sdk-android-maven/packages/1915044?version=1.0.0)

* Module to show the notifications in form of a list within an activity or fragment

[Hydra Core- 1.3.0](https://github.com/Capillary/hydra-sdk-android-maven/packages/1705267?version=1.2.0)

* New tables to store the notifications

[Hydra Pushbase - 1.4.0](https://github.com/Capillary/hydra-sdk-android-maven/packages/1774436?version=1.3.0)

* Internal changes relevant to support the Notification center
* Compatibility update with hydra core

[Hydra Firebase - 1.3.0](https://github.com/Capillary/hydra-sdk-android-maven/packages/1774453?version=1.2.0)

* Compatibility update with hydra core

## iOS

### [Version 1.4.3](https://github.com/Capillary/hydra-sdk-ios-packages/releases/tag/1.4.3releases/tag/1.4.2) (September 8, 2023)

Done the required changes to resolve the issue where events are not being sent to the server.\
It was observed that the events that are received from the application are not sent to the server.\
While debugging the issue it was found that the issue is happening only when the application is running on a simulator with iOS version 16.2.\
Have done the required changes to overcome the issue and with this release the events are now sent to the server as expected.

### [Version 1.4.2](https://github.com/Capillary/hydra-sdk-ios-packages/releases/tag/1.4.2) (August 23, 2023)

Added support for the customising Notification Centre theme.\
The Following fields can be modified using a custom theme

* Background colour of the Notification Item based on the read/unread state of the notification
* Text colour of the Notification title, message and date label based on the read/unread state of the notification
* Font can be updated for Notification title, message and date label based on the read/unread state of the notification
* The text colour and font of the label stating "No Notifications Found"

NOTE - Application developers can opt for the default theme for the standard template.

### [Version 1.4.1](https://github.com/Capillary/hydra-sdk-ios-packages/releases/tag/1.4.1) (August 16, 2023)

* iOS 13 support - Hydra SDKs are now supported iOS 13 and above
* Swift Tool version - Updated the swift tool version to 5.7 for backward compatibility

### [Version 1.4.0](https://github.com/Capillary/hydra-sdk-ios-packages/releases/tag/1.4.0) (August 10, 2023)

* **Notification Centre** -  Added support for notification centre through which application users will have a unified and streamlined notification experience, where they can easily access and manage their notifications in one place. 
  * There are two frameworks HydraInboxCore and HydraInboxUI needs to be used to show Notification Centre
  * Notification Centre will be storing all the remote notifications locally
  * In the Notification Centre the notifications will be displayed in form of a list, consisting of
    * Heading
    * A short description
    * Time and date of receiving
  * The notifications which are unread have different styling than the one which are already read
  * The user can perform actions like
    * click on the notification
    * delete a particular notification
    * delete all available notifications from the Notification Centre
  * The user can click on the notification, which will navigate them to the correct path be it an external URL or a deep link inside the app
  * Adding dlr event push deleted
* **App Groups** - Added support for App Groups in order to function the Inbox feature seamlessly. App group is necessary to establish communication between the application and the Push Notification Service extension to perform the operations on received remote notification such as insertion in the database.
  * We added support for the App Group identifier strictly in the format\
    *group.\{app bundle id}.hydra* to make sure HydraInboxCore and HydraInboxUI function as expected.
