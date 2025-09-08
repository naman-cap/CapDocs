---
title: JFM 2023 | Engage + Releases
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
## Introducing Jump Block in Journeys

#### Use case to understand the feature

* Assume that a brand wants to give customers who spend more than 1000 rs in their store 500 bonus points and certain other incentives. 
* If a customer spends more than 5000 rupees in Journey A, they will jump to journey B (elite customers) which includes customers that have a free membership + incentives
* Brand can include a jump activity within their journey A that caters to the value of a transaction

#### Problem Statement

* Nowadays, creating personalized journeys is essential for brands to ensure customer retention and satisfaction. Creating hyper-personalized journeys can be a complex task especially when it is done in a single flow. Apart from that, it can be monotonous and time-consuming to create similar flows within each journey separately
* Enabling a jump functionality allows marketers to simplify their journey designing process and eliminates the redundancy of creating the same flows within multiple journeys by allowing users to jump from one journey to another if they meet certain conditions

#### How are we solving this?

* Within the creation of a journey, we have introduced a new action button called **jump** that can be easily configured within the source journey by a simple drag and drop

![](https://files.readme.io/03d76bf-1.png)

* At any step of the journey, add a jump action. Add a block name and a destination journey

![](https://files.readme.io/37dd94c-2.png)

* Click on **Destination Journey**.  A drop-down that consists of a list of journeys that are in Draft, Approved, Awaiting Approval and Live state is displayed 

<Image alt="Status, Entry trigger and Duration of the destination journey will be displayed upon selecting the journey. You can click on ‘Go to journey’ to open the destination journey in a new tab." align="center" src="https://files.readme.io/9153799-3.png">
  Status, Entry trigger and Duration of the destination journey will be displayed upon selecting the journey. You can click on ‘Go to journey’ to open the destination journey in a new tab.
</Image>

* When a **Jump** action is configured in a journey, the entry trigger of the destination journey  will display the name of the source journey upon hover/ in preview

***

## Behavioral events support

#### Use Cases to understand the feature:

* Target users based on actions performed by them such as- 
  * Added items to cart but did not make a purchase, send a reminder mail in x days
  * Customer registered, send a welcome email immediately
  * Product searched and viewed, send an email with relevant offer after x days
* Understand user interaction on app/website such as usual day/time of using the app or making a purchase

#### Feature Release:

Journeys will support two kinds of behavioral events:

* **Standard Behavioral events** - These events are standard for all kinds of clients and are supported by default in the capillary system

![](https://files.readme.io/155f0b9-4.png)

* **Custom Behavioral events** - These events are entirely customizable by the clients to suit their specific data points to be captured. Once the client configured these events, they will be displayed in the Custom events drop-down

![](https://files.readme.io/7d1b09c-5.png)

**How can brands configure custom events:**

* You can configure events within Organization Setting > Behavioral Events
* Click on ‘Add Event’ and a list of events pre-defined by capillary will be displayed with various customer actions and various attributes defined within each action. You can also search for an event within in the list

![](https://files.readme.io/b18c34e-6.png)

* You can either select from this list of predefined events or ‘Create New Event’. Upon creating a new event, you have to fill in details such as - event name, display name and event description. Once you fill in the event details,  click on ‘Add Attribute’ to configure attributes related to the event

![](https://files.readme.io/a2b9818-7.png)

* You can also add/edit attributes within defined events. To add a new attribute enter the name of the attribute and data type. You can click on the delete icon  to delete the attribute

<Image alt="Note that you cannot delete or change the name of event/attribute supported by Capillary" align="center" src="https://files.readme.io/72e7843-8.png">
  Note that you cannot delete or change the name of event/attribute supported by Capillary
</Image>

* Once a new event/attribute is created, it will be displayed in the list of all events
* To know more about how to add a behavioral event - Set up behavioral events

**Feature impact on customers:**

* Analyze customer trends and behavior
* Analyze time and place of action of the customers to send out campaigns when they are highly interested
* Targeted campaigns can be sent to customers which will persuade them to make a desired action
* Reward the customer at various points in their journey to motivate them

**Behavioral events usage in Journeys:**

* **Entry trigger** - You can configure the entry trigger based on customer behavior. If the customer matches the behavioral criteria, they will enter the journey
* **Exit Trigger** - You can configure the exit trigger based on customer behavior. If the customer matches the behavioral criteria, they will exit the journey
* **Event based wait** - You can configure a behavioral event within the event based wait. Depending on which criteria is matched by the customer, they will continue on that respective journey
* **Decision split** - You can configure a behavioral event within a decision split. Depending on which criteria is matched by the customer, they will continue on that respective journey

***

## Store CSV Upload

#### Use Case:

Assume that a  user wants to add multiple stores within an entry trigger in journeys. They can do so by directly uploading a store csv instead of selecting every desired store from the drop-down.

#### Problem Statement:

It is a tedious task for a user to select say 50 stores that they want to target in an entry trigger. They might make a mistake of skipping a store or selecting the wrong store. To avoid this hassle, we have enabled a user to directly upload a csv containing store ids of all the store that a user wants to include

#### How are we solving this problem?

* While configuring the condition, you can click on ‘**Store**’. A ‘**choose file**’ option will be displayed. You can choose a file from your computer and upload it directly onto the condition

![](https://files.readme.io/e4c5637-9.png)

* You can also click on ‘Sample.csv’ to download the csv template which you can use to upload
* Once you have uploaded a file, the system will check the file for the right data and format and it may take up-to 30 to 150 seconds to read

![](https://files.readme.io/b6e3bb7-10.png)

* If the data uploaded does not match the required format, a trigger is sent to the user to inform them that there are invalid entries within the csv

<Image alt="You can either select the stores from the drop-down or upload with the help of csv. Both cannot be done simultaneously" align="center" src="https://files.readme.io/b93d7d4-11.png">
  You can either select the stores from the drop-down or upload with the help of csv. Both cannot be done simultaneously
</Image>

* Once the csv is successfully uploaded with no errors, you can download the data in two formats for referencing:
  * Store id
  * Store id, code and name

![](https://files.readme.io/d6bfd06-12.png)

#### Store CSV upload usage in Journeys

* Entry Trigger
* Exit Trigger
* Decision based split

***

## Video communication and documentation enablement for WhatsApp

#### Use cases to understand the feature:

Use Case 1:

* Assume that a brand wants to share a video of the opening of their new store and want to invite customers to visit the new store
* They can add the video using the video feature in the Whatsapp engagement along with a invitation message and CTA that directs user to the brands website for additional details

Use Case 2:

* Assume that a brand wants to share a interactive how-to document with their users to explain how to use a newly launched feature on their website
* They can add a pdf document in the document feature on Whatsapp engagement along with a document brief and CTA that directs users to their website to try out the new feature

#### Problem Statement:

Engaging customers via long-texts and pictures has become an ineffective way to increase open rates and success rates. Videos and interactive documents are more likely to increase user interaction as compared to texts or pictures. As customers are more keen on watching videos and documents it would be a desired requirement to include a video and documents feature within WhatsApp engagement

#### How are we solving this problem

* While creating a WhatsApp engagement, we have introduced a **video** and **document** feature in which you can add any video/doc of your choice

![](https://files.readme.io/1039a0e-13.png)

* You can select a video/document directly from your computer that you wish to send to a user and you can also add a text/CTA within the same message
* The accepted video formats would be - **MP4 and 3gpp**\
  The maximum upload size (uploaded to media node) would be 100 MB with the post processing media size (after compression and encryption) limit of 16 MB.
* The supported type for documents would be **PDF only** and the maximum upload size would be **16MB**

***

## Customer entry to same journey

#### Use cases to understand the feature:

Case 1:

* A user has recently joined the membership program of the brand and the marketer wants to enable a one-time journey for the user to understand the benefits and incentives of the membership
* Marketer can click on only once option in the setting so the user doesn’t re-enter the journey

Case 2:

* A user adds products to their cart and does not check out for several days. Such users can be motivated to purchase by a simple reminder or by sending an incentive/offer
* As this can happen multiple times with a single user, marketer can enable the more than once option in the setting to send reminders/incentives to such users

#### Feature Release:

We will introduce a feature where a client can configure the re-entry status of users while creating a journey. This reduces the hassle of creating multiple similar journeys just to keep customers in the engagement loop and also ensures that customers are being targeted at the right time. This can be done only while creating the journey or when a journey is paused/edited.

#### How are we solving the problem:

* In the journeys setting we have added a feature to choose the number of time a particular user enters a journey
* You can choose from two options depending on the purpose of the journey -
  * Just once
  * More than once

<Image alt="These settings are configurable only in draft/edit state and not when a journey is live" align="center" src="https://files.readme.io/694a93c-14.png">
  These settings are configurable only in draft/edit state and not when a journey is live
</Image>

***

## Gupshup Integration for WhatsApp Communication

#### Use cases to understand the feature:

* A brand has employed Capillary to send communication through on Whatsapp
* Now they want to configure templates and campaigns on E+ to send out WhatsApp communications which need to be sent from Capillary platform. Gupshup is one of the BSPs/gateway vendors through which Capillary will be able to send out communications. 

#### New Integration for WhatsApp communication:

Gupshup is a channel-based communication platform that will act as a BSP in addition to the existing BSPs, Tanla and Twilio. Gupshup is widely used by clients in the middle-east and will enable our clients to comply properly with the requirements of Meta to send engagements via whatsapp.

#### How a client will get on boarded onto Gupshup:

There are three major steps to onboard a client:

1. Onboarding details - This included basic information of the company that is being onboarded such as
   1. Business name and FB manager ID
   2. Country Details and Use cases
   3. WhatsApp Phone numbers ( UAT and PROD )
   4. WhatsApp Business profile setup - Display name, Type of company, Industry etc.
   5. Callback URLs
   6. Business Contact Details

These details need to be filled in a certain format: [Here](https://docs.google.com/spreadsheets/d/1roL9s_AZbv9PzgYa0sCNIL1Dd_QfNJ3b/edit?usp=sharing\&ouid=112735638445784000447\&rtpof=true\&sd=true)

1. **Live Agent Dashboard** - This is an add-on feature and clients can choose whether or not to enable this. If enabled, the client would be required to fill the following details
   1. Primary use cases and WhatsApp number
   2. URL Preference
   3. Email id of the admin
   4. Whether the Gupshup bot is enabled on the clients number. If yes, API key and bot name should be mentioned
   5. CRM used by the business
2. **Instant Bot Enablement** - This is also an add-on feature. Gupshup’s platform enables businesses to enable instant responses to customer queries. The Keyword Response enablement feature is designed to allow business to interact with their clients via WhatsApp 2-way messaging. This feature is intended to reduce the time for a business to configure a bot to interact with its customers

***

## Migration of timeline campaigns

All organizations that were using timelines campaigns have been successfully migrated to Journeys across all clusters.

#### Problems faced

* There were primarily two reasons to sunset this feature:\
  The company has been incurring a huge cost (approx 3 to 5 Cr a month) to keep these campaigns running.
* The product has been working in maintenance mode for the past 2-3 years and that can pose a challenge if we face any production outage

#### The way going forward:

* All timeline campaigns have been disabled from UI and backend and cannot be accessed
* All such campaigns will be configured of Journeys going forward
* For more information, please refer to this training video on Academy - [Engage + Advanced Training](https://capillary-tech.northpass.com/app/courses/7fca3912-c53d-40ae-bffd-95452a2f8c17)

# SDK

## Android

### [Version 1.0.0](https://github.com/Capillary/hydra-sdk-android-maven/packages/1780353?version=1.1.0)  ( Feb 16, 2023)

**Push Notification**

* Added support for push notification, an out-of-app alert that appears on the user’s screen when an important update occurs.
* **Notification Runtime Permission**
* **Token Generation**
  * When SDK registers for the token with FCM.
  * SDK fetches the token from FCM, handles the expiry of the token, and sends it to the backend.
* **Service Registration Handling**
  * The app handles the service registration, passes the token and payload using the Hydra pushbase APIs.
* **Callback Support**
  * Sending callbacks to the application.
  * Support navigation on click of primary and secondary CTAs.

**[Hydra Core - 1.0.0](https://github.com/Capillary/hydra-sdk-android-maven/packages/1705267?version=1.1.0)**

* Lifecycle handling to give callbacks of app open, etc.
* Initializing Firebase and pushbase module.
* DLR events.

**[Hydra Pushbase - 1.0.0](https://github.com/Capillary/hydra-sdk-android-maven/packages/1774436?version=1.1.0)**

* Passing the payload of the push notification.
* Sending callbacks to the application, including:
  * Notification Clicked
  * Notification Dismissed
  * Notification Received
  * Notification View
* Building the notification.
* Supports the following navigations on click of primary and secondary CTAs:
  * Deeplink
  * External URL

**[Hydra Firebase - 1.0.0](https://github.com/Capillary/hydra-sdk-android-maven/packages/1774453?version=1.1.0)**

* Token Lifecycle - Generation, handling expiry, and reporting token to the backend.
* Exposing API to accept token and payload from the application.
* Exposing API to check whether the notification is from Hydra.

### [Version 0.1.3](https://github.com/Capillary/hydra-sdk-android-maven/packages/1780353?version=1.1.0) (Feb 16, 2023) - [Hydra Core- 0.1.3](https://github.com/Capillary/hydra-sdk-android-maven/packages/1705267?version=1.1.0)

* **Hydra Core** - Implemented the core of the SDK.
  * Initializing the SDK.
  * Tracking User Events.
  * Tracking Behavioral Events.
  * Authorization workflow.
  * Passing user preferences to the backend.

**NOTE** - Version Catalog is available from version 1.0.0 upwards.

## iOS

### [Version 0.1.1](https://github.com/Capillary/HydraPushNotification/releases/tag/0.1.1) (February 28, 2023)

* Added dependency of Hydra Core version 0.2.1

### [Version 0.1.0](https://github.com/Capillary/HydraPushNotification/releases/tag/0.1.0) (February 21, 2023)

* Push Notification - Added support for push notification, an out-of-app alert that appears on the user’s screen when an important update occurs
  * Notification Runtime Permission
  * Token Generation
    * When SDK registers for the token with FCM\
      SDK would fetch the token from FCM using the above information, handle the expiry of the token and send it to the backend.
    * App is handling the service registration, passes the token and payload using the hydra pushbase api’s
  * Sending callbacks to the application
  * Support navigation on click of primary and secondary CTA’s

**HydraCore**

### [Version 0.2.1 ](https://github.com/Capillary/HydraCore/releases/tag/0.2.1)(February 28, 2023)

* Preventive action taken on crash observed when access token might be empty.

### [Version 0.2.0](https://github.com/Capillary/HydraCore/releases/tag/0.2.0) (February 20, 2023)

* Hydra Core - Implemented the core of the sdk
  * Initializing the sdk
  * Tracking User Events
  * Tracking Behavioral Events
  * Authorization workflow
  * Passing User preferences to the backend
