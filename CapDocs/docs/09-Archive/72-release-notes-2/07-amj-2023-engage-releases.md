---
title: AMJ 2023 | Engage + Releases
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
# Edit a Live Journey

## Problem statement

Marketer has spotted a mistake in a live journey or a change of strategy has occurred, and brand would want to change some configurations within a live journey. 

To make such a change they would have to create a new journey from scratch and stop the existing one. This calls for a tedious process from the marketer’s side while also creating a possible overlap of audience with them receiving the incentive or communication more than the intended number of times.

## Enhancements/New features

### 1. Edit a Journey

With the help of the Edit feature, brands can easily edit a live journey without the hassle of creating a new one from scratch. Users will be able to modify the contents/configuration of any blocks however you cannot change the structure of the block(add/move/delete any flow control blocks). 

Once you edit a journey, save it and send it for approval, the journey will again be sent for approval and another version of the journey will be created. Let’s call the original version v0 and the new version v1. As soon as the approver approves this new version (v1), they will be prompted with an option to select “What should be the previous version behavior”? Sunset, Stop or Pause. 

**Sunset**- Customers who have entered the v0 journey will continue to the journey v0 and new customers after v1 is made live, will now enter the journey v1.\
**Stop**- v0 will be stopped for all customers. Customers who had entered the journey v0 will be exited from the journey. New customers will enter the journey v1.

If the marketer rejects the new version (v1), the original version (v0) will continue to be in a live state. 

**Note**: At any point in time, only one version of a particular journey can be in a live state. Rest all versions can be either in Stop / Sunset / Draft / Awaiting approval / Rejected state but cannot be in Live state.

For detailed information, see [https://docs.capillarytech.com/docs/journey-versions/](https://docs.capillarytech.com/docs/journey-versions/)

## 2. Pausing/Stopping/Sunsetting a Live Journey

In addition to editing a journey, users now also have an option to Pause a journey, sunset a journey or stop a journey. Please see below for more details on the behavior of the journey when either of these three options are selected:

**Pause Journey**: If a user pauses a current journey, it will be paused for all the customers currently in the journey. All the customers will continue to be in the journey however the next block of the journey will be executed only when the user “Resumes” the journey back.

In a paused journey state, no new customers will be allowed to enter a journey. 

**Resume a Journey**: This option is only enabled when a journey has previously been paused. If a user resumes a paused journey, the current paused journey will get unpaused. The customers already in the journey will resume back from the stage where they were when the journey was paused and subsequent blocks of the journey will execute for them till the journey state is not changed again.\
New customers can now start entering this journey. 

**Stop a Journey**: If a user selects the Stop option, the journey will be stopped and it will end for all the customers present in the journey. No new customers can enter this journey. 

Please note this action cannot be reversed again. A journey once stopped cannot be made live again. 

For detailed information, see [https://docs.capillarytech.com/docs/journey-versions#pausingstoppingsunsetting-a-live-journey](https://docs.capillarytech.com/docs/journey-versions#pausingstoppingsunsetting-a-live-journey)

## 3. Other Linked Changes

(a) On Journeys listing page, users will see an option to filter the journeys by **Latest version status**. As each journey now could have multiple versions, the filter works on what is the current status (Live/Draft/Sunset/Stop, etc. ) of the latest version of the journey (most recent version).

![](https://files.readme.io/f961db8-image4.png)

(b) On the listing page of Journeys, under the Version count column, user will see following additional fields against each Journey -

(i) **Total number of versions**

(ii) **Latest version number** (If total versions are 5, they are identified as v0, v1, v2, v3 and v4)

(iii) **Current status of the latest version**- Here the latest version means the last created version

![](https://files.readme.io/2187368-image6.png)

(c) After the user clicks on any journey, if a journey has multiple versions, a list with all the versions for that particular journey will be displayed. You can select any version to navigate to the canvas of that version.

![](https://files.readme.io/57d8008-image3.png)For detailed information, see [https://docs.capillarytech.com/docs/journey-versions#other-linked-changes](https://docs.capillarytech.com/docs/journey-versions#other-linked-changes)

***

# Whatsapp BSP Changes

Meta has updated their WhatsApp business platform to have better alignment with business outcomes, more engagement and higher ROI. They have categorized their templates into three main categories - **Marketing, Utility and Authentication**

1. **Marketing**- Marketing includes all the communication sent to customers to promote brand items and nudge customers to visit their store/website and make a purchase. This will include promotional offers, product announcements and more to increase awareness and engagement
2. **Utility**- Utility communication includes order updates/alerts/order receipts
3. **Authentication**- This communication includes personal authentication information such as receiving OTPs from brands

## Migration of templates

1. For Karix- Initially Karix was supporting the older categories for whatsapp templates namely- Transactional, OTP and Marketing. For Karix, the old templates will work and will just be re-categorised as per the list below. These categories will be changed as follows\
   Transactional → **Utility**\
   OTP → **Authentication**\
   Marketing → **Marketing**
2. For Gupshup- Old templates will not work and clients will have to create templates as per the new categories. There are no live customers using Gupshup as of now, so migration will not be a hassle
3. For Twilio, we have not yet made this change and the discussion for this is still in progress

## Creating a new WhatsApp template

1. While creating new templates, choose from either of the three categories given in the drop-down menu
2. Other steps to create a WhatsApp template remain the same. Refer to [Create WhatsApp template](https://docs.capillarytech.com/docs/create-whatsapp-content)

![](https://files.readme.io/799b334-small-1.png)

3. While filtering out templates by category, choose any of the categories and all templates belonging to that category will be displayed.

![](https://files.readme.io/03ba857-small-2.png)

***

# Duplicate of a journey

## Use Cases to understand the feature

* In case the user wants to edit any message content or incentive they need to stop the journey and recreate it. Many times the changes are minute but the user has to redraw the entire journey again - which is time consuming & error prone.
* Many times the user wants different versions (slightly different from each other) of the journeys.
  * They can test the different versions results eg: Total revenue and carry on with the journey with best result
  * They can show the different versions to their Managers/ approvers and get only 1 approved
  * They can copy a journey and then edit it eg: Upsell journey & cross sell journey can have same journey design. In upsell we add incentives related to same product, in cross sell the product category or brand can be different

## Problem Statement

* Sometimes it is possible that brands want to create multiple type of similar journeys with minute modifications. It is time-consuming to create multiple such journeys from scratch. Introducing the duplicate feature will save time and efforts of the marketer
* It is also possible that marketers want to have multiple versions of a journey to test it out internally before publishing it. It would not be feasible to create multiple variations from scratch

## How are we solving this?

* Select an existing journey or create a new journey. Once the journey is drafted/waiting for approval/approved; then it can be duplicated
* Click on the duplicate icon next to the save button within the journey canvas

![](https://files.readme.io/f1f472b-small-image2.png)

* Upon clicking on the icon, a confirmation message would be displayed and if yes is selected, a copy of the existing journey will be created. The duplicate journey will be names as ‘Copy of Existing Journey’ which can be edited

![](https://files.readme.io/35e951f-small-image1.png)

* Configurations and changes can be made within the canvas of the journey as required. Click on Save or Send for approval. Once the journey is saved, it can again be duplicated if required
* To know more, refer to [Duplicate a Journey](https://docs.capillarytech.com/docs/duplicate-journey)

***

# Exit Trigger Reset

This feature enables brands to reset their exit trigger within a journey. Suppose a brand wants to remove an existing condition from their journey that lets a customer exit, they can now reset the trigger

## Use Case

1. Initially brands were not able to remove an exit trigger altogether. An error messages **no condition added** would be displayed if they tried to remove an exit trigger
2. A simple reset button not only allows brands to remove a pre-configured existing trigger but in case of multiple triggers, brands can remove all of them with the click of a button. It saves time and the hassle of removing each condition manually

## Resetting an exit trigger

1. Once the journey canvas is opened, navigate to the exit trigger
2. Upon hovering over the exit trigger, a reset icon will appear

![](https://files.readme.io/1010a93-small-4.png)

3. Click on the reset icon to reset the entire configuration of the exit trigger
4. For more information, refer to [Exit Triger](https://docs.capillarytech.com/docs/configure-journey#4-optional-configure-exit-trigger)

***

# Capturing DND status of customers

## Problem Statement

Until now, there was no way for brands to know which customers have opted for a DND service because this information was not getting captured at Capillary end. 

Everytime a brand would run a campaign, they would be targeting DND customers also, since CDP did not have this info. The communications would go out from Capillary but will get blocked at the gateway level.

## Enhancement

Now, from the Delivery receipts that are sent by Gateway partners to Capillary, we are also storing the NDNC status of a customer in Capillary CDP. This will help brands to know which customers are DND, before targeting them.

Additionally, if brands want to extract a list of DND customers, they can also do that and reach out to them separately via Store Calls or any other mode of communication.

# SDK

## Android

### [Version 1.3.0](https://github.com/Capillary/hydra-sdk-android-maven/packages/1780353?version=1.3.0) (June 22, 2023)

* **Push Amplification** -  Added support to send push notification through Xiaomi Cloud Push Platform
  * Create functionality to Pass Token to  Hydra SDK
  * Create functionality to Pass Hydra SDK related Push notification Payload to Hydra SDK
  * Send Token List to the backend in the UserUpdate Event
  * Handling notification coming from multiple services based on scope
  * Create Broadcast Receiver extending Mi’s PushMessageReceiver, responsible for generating the token as well as receiving the payload in sample application
  * Create a helper class which will then be interacting with the hydra sdk to pass the token and payload to hydra sdk, also will have methods to initialize the Xiaomi’s sdk. (No unit test for this as the changes are part of the sample app)
  * Adding dlr event push ignored

[Xiaomi Push - 1.0.0](https://github.com/Capillary/hydra-sdk-android-maven/packages/1915044?version=1.0.0)

* Added support to send push notification through Xiaomi Cloud Push Platform

[Hydra Core- 1.2.2](https://github.com/Capillary/hydra-sdk-android-maven/packages/1705267?version=1.2.0)

* Updated signature of internal api’s

[Hydra Pushbase - 1.3.1](https://github.com/Capillary/hydra-sdk-android-maven/packages/1774436?version=1.3.0)

* Internal changes relevant to support the Xiaomi Push
* Compatibility update with hydra core

[Hydra Firebase - 1.2.1](https://github.com/Capillary/hydra-sdk-android-maven/packages/1774453?version=1.2.0)

* Compatibility update with hydra core

### [Version 1.2.0](https://github.com/Capillary/hydra-sdk-android-maven/packages/1780353?version=1.2.0) (May 20, 2023)

* **Rich Notification** - Added support for rich push notifications, added stylized template to support different image sizes
  * Base for the rich notification, which will initialize the module and will take input from the push base to build a rich template
  * View layouts for expanded and collapsed notifications supporting Rich notifications with imageImage

[Rich Notification - 1.0.0](https://github.com/Capillary/hydra-sdk-android-maven/packages/1863337?version=1.0.0)

* Added support for rich push notifications

[Hydra Pushbase - 1.2.0](https://github.com/Capillary/hydra-sdk-android-maven/packages/1774436?version=1.2.0)

* Build stylized template based on whether it is BIG\_PICTURE notification or not
* Internal changes relevant to support rich notifications

### [Version 1.1.0](https://github.com/Capillary/hydra-sdk-android-maven/packages/1780353?version=1.1.0) (April 17, 2023)

* **InApp Notification** - Added support for in app notification
  * Displaying user Milestone In-App notification when the application is in the foreground.
  * Displaying user broadcasts In-App notification when he launches the application for the first time. (no campaign duration supported as yet)
  * Support the following UI templates:
    * Pop up with single static text
    * Pop up with single static text and an image
    * Pop up with single static text, an image and a button (max 1 button supported for now)
    * Pop up with only the image.
    * Pop up with static text with a button
    * Pop up with image and button.
  * DLR events
  * Image caching
  * Support navigation for External\_URL and Deeplink
  * Rule engine

[InApp Message - 1.0.0](https://github.com/Capillary/hydra-sdk-android-maven/packages/1863337?version=1.0.0)

* Added support for in app notification

[Hydra Core- 1.1.0](https://github.com/Capillary/hydra-sdk-android-maven/packages/1705267?version=1.1.0)

* Lifecycle handling to display in app message on app launches
* Initializing in app module
* Callback for activity’s lifecycle

[Hydra Pushbase - 1.1.0](https://github.com/Capillary/hydra-sdk-android-maven/packages/1774436?version=1.1.0)

* Passing the payload to the in app module
* Compatibility update with hydra core

[Hydra Firebase - 1.1.0](https://github.com/Capillary/hydra-sdk-android-maven/packages/1774453?version=1.1.0)

* Compatibility update with hydra core

<br />

## iOS

### [Version 1.3.1](https://github.com/Capillary/hydra-sdk-ios-packages/releases/tag/1.3.1) (June 20, 2023)

* Fixes DLR event reporting for notifications received in the background.
* Updates sending events to the backend. SDK will now sort the events wrt event creation time before sending them to the backend.
* Added support for sending gateway information to the backend

### [Version 1.3.0](https://github.com/Capillary/hydra-sdk-ios-packages/releases/tag/1.3.0) (June 7, 2023)

* Recreated the authentication flow.
  * The auth flow will be performed just before sending the event.
  * Changed APIs to async-await Swift.
* Removed notifications as a way of communication between classes.
* Added a new Logger system and app can now set the Logger level.
* Added single initialiser for HydraCore object.
* Private EventsManager object. All Events APIs are exposed via HydraCore object.
* Optimised network calls. More efficient now.
* Improved method descriptions.
* Utilised SwiftUI for InAppMessages. Deprecated storyboards.
* Utilised string constants instead of direct usage of strings in the application.
* Added more test cases.
* Improved test case code coverage.
* Added single initialiser for HydraCore.

### [Version 1.2.1](https://github.com/Capillary/hydra-sdk-ios-packages/releases/tag/1.2.1) (May 8, 2023)

* Fixed a crash in Hydra Core when creating a events manager instance
* Added linter for swift coding guidelines

### [Version 1.1.1 ](https://github.com/Capillary/hydra-sdk-ios-packages/releases/tag/1.1.1)(April 26, 2023)

* Updated the frameworks to not embed the dependent libraries
* This resolves the issues occurring when application needs to be uploaded to app store

### [Version 1.1.0](https://github.com/Capillary/hydra-sdk-ios-packages/releases/tag/1.1.0) (April 25, 2023)

* This is the first release of Hydra frameworks in a single package.
* Prior to this release individual frameworks have been released as a separate package.
* This release contains below frameworks
  * Contains [HydraCore 0.2.2](https://github.com/Capillary/HydraCore/releases/tag/0.2.2)
  * Contains [HydraInAppMessage 0.1.0](https://github.com/Capillary/HydraInAppMessage/releases/tag/0.1.0)
  * Contains [HydraPushNotification 0.2.0](https://github.com/Capillary/HydraPushNotification/releases/tag/0.2.0)

**HydraInAppMessage (April 17, 2023)**

### [Version 0.1.0](https://github.com/Capillary/HydraInAppMessage/releases/tag/0.1.0) (April 17, 2023)

* InApp Notification - Added support for in app notification
  * Displaying user Milestone In-App notification when the application is in the foreground.
  * Displaying user broadcasts In-App notification when he launches the application for the first time. (no campaign duration supported as yet)
  * Support the following UI templates:
    * Pop up with single static text
    * Pop up with single static text and an image
    * Pop up with single static text, an image and a button (max 1 button supported for now)
    * Pop up with only the image.
    * Pop up with static text with a button
    * Pop up with image and button.
  * DLR events
  * Image caching
  * Support navigation for External\_URL and Deeplink
  * Rule engine

**HydraPushNotification**

### [Version 0.2.0](https://github.com/Capillary/HydraPushNotification/releases/edit/0.2.0) (April 17, 2023)

* Added In-App message support by parsing the notification payload
* Establish communication between the HydraInAppMessage framework and the HydraNotification framework
* Removed the dependency of the HydraCore framework from HydraNotification

**HydraCore**

### [Version 0.2.2](https://github.com/Capillary/HydraCore/releases/tag/0.2.2) (April 17, 2023)

* Added support for sending below DLR events for In-App Messages
  * Inapp\_message\_show
  * Inapp\_message\_clicked
  * Inapp\_message\_dismissed
