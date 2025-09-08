---
title: Configure In-app Messaging
excerpt: This page provides you with information on IN-app messaging feature.
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
This feature empowers you to proactively engage users within your app by displaying targeted messages at specific contextually relevant moments. These timely interventions can prove highly effective in providing valuable information, promoting cross-selling and up-selling opportunities, and ultimately driving desired user actions on targeted screens or based on pre-defined app interactions.

The feature is available from Capillary SDK 1.4.0.

## Installing using catalog

The recommended approach for integration is through a Version Catalog. For more information, refer to the documentation [Installing with version catalog](https://docs.capillarytech.com/docs/installing-sdk#/installing-with-version-catalog). After you configure the catalog, perform the following:

1. Add the dependency in the `app/build.gradle` file as shown below:

```kotlin
dependencies {
    // ...
    implementation("hydra.inapp")
}
```
```java
dependencies {
…
 implementation("hydra.inapp")
  }
```

## Installing using Artifact

To install in-app messaging, perform the following:

1. Add the dependency in the `app/build.gradle` file as shown below:

```kotlin
dependencies {
    // ...
    implementation("com.capillary:hydra-inapp:x.x.x")
}

```
```java
dependencies {
…
 implementation("com.capillary:hydra-inapp:x.x.x")
}
```

## Integration

Hydra SDK leverages a push notification mechanism to deliver in-app messages. For this functionality to work seamlessly, your app needs to have already integrated Hydra's push notification module.

## In-app configuration

The Capillary SDK allows your app to specify a fallback image to display in case the image included in a notification payload fails to download. This ensures a consistent user experience even if unexpected network issues or server errors occur.

```kotlin
InAppConfig(@DrawableRes val defaultImage: Int)
```

| Parameter    | Description                       | Type | Mandatory/Optional |
| :----------- | :-------------------------------- | :--- | :----------------- |
| defaultImage | Resource ID of fallback drawable. | Int  | Mandatory          |

## TriggerInApp on launch

This API is designed for Flutter apps where activity callbacks (e.g., onResume) may be lost due to late initialisation of the Hydra SDK. Use it to manually trigger in-app messages after the SDK initialises.

```
triggerInAppOnLaunch(currentActivity: Activity)
```

<Table align={["left","left","left"]}>
  <thead>
    <tr>
      <th>
        Parameter

        (Parameters marked with

        * <br />

        are mandatory)
      </th>

      <th>
        Type
      </th>

      <th>
        Description
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        currentActivity\*
      </td>

      <td>
        Activity
      </td>

      <td>
        Activity of the screen on which in app message is to be shown
      </td>
    </tr>
  </tbody>
</Table>

## In-app supported layouts

![Header](https://files.readme.io/a6db3a0-header1.png)

![Header](https://files.readme.io/c5c4791-header2.png)

![Footer](https://files.readme.io/24195a7-footer1.png)

![Footer](https://files.readme.io/1078465-footer2.png)

![Popup](https://files.readme.io/af4f0fb-popup.png)

![Interstitial](https://files.readme.io/be72450-inters.png)

## In-app message listeners

To receive callbacks for in-app messages, listeners should be added in the *onCreate()* of the Application class. Hydra offers the following listeners to hook into:

\*\*\
InApp Message Callback\*\*
Application has to register a  `InAppMessageListener` to receive in-app message Callbacks.

> 📘 It is mandatory to add this listener once the hydra SDK is initialized to avail custom action for message click.

To get the inapp callback implement the OnMessageClickListener and register for the callback using HydraInAppUIHelper.getInstance().registerOnMessageClickListener

**Example:** User implementing `OnMessageClickListener` to receive the in-app message callback from the Hydra Sdk.

```kotlin
class ApplicationInAppMessageClickListener : OnMessageClickListener {  
  override fun onMessageClick(context: Context, cta: CTA): Boolean {  
       return super.onMessageClick(context, cta)  
   }  
}
```

<br />

Register the above callback in the onCreate of your application class after initialization of HydraApi

In the above callback method, “onMessageClick” returns Boolean to which application can return either true or false. If the function returns false, the action will be taken by the SDK and if returned true then custom action can be taken by the client app.

```kotlin
HydraInAppUIHelper.getInstance()  
   .registerOnMessageClickListener(ApplicationInAppMessageListener())
```