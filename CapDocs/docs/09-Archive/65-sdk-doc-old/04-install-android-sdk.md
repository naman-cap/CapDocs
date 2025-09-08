---
title: Install Android SDK
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
## Setting up Hydra Gradle private repository URL

Hydra Native SDKs are the private Maven repositories, to access the private repositories in the React Native applications, you need to add the private Maven repository URL and credentials in the afterEvaluate section in the app/build.gradle file.

Open android/app/build.gradle file and add the following code at the end of file -

```groovy build.gradle
project.afterEvaluate {
   project.repositories.maven { ->
       url = URI.create("https://maven.pkg.github.com/Capillary/hydra-sdk-android-maven")
       credentials { cred ->
           cred.username = System.getenv("MAVEN_USERNAME")
           cred.password = System.getenv("MAVEN_PASSWORD")
       }
   }
}
```

You need to add the MAVEN\_USERNAME and MAVEN\_PASSWORD either in the local environment (from bash) OR setup using the react-native-config environment setup. The other way you can do it is, add a github properties file in the android/app and read the variables from that file.

NOTE: Username is your Github username and the password is the Github PAT.

## Setup Hydra Core SDK

Add dependencies of Hydra SDK along with AndroidX Libraries in the app/build.gradle file.

```groovy build.gradle
dependencies {
...
   // AndroidX libraries
   implementation("androidx.core:core-ktx:1.13.1")
   implementation("androidx.appcompat:appcompat:1.6.1")
   implementation("androidx.lifecycle:lifecycle-process:2.8.0")


   // Hydra SDKs
   implementation("com.capillary:hydra-core:1.3.1")
...
}
```

## Setup React Native Android Bridge

As we are using the Native Hydra SDK to use the Capillary’s APIs, we will need to set up the Android bridge and expose the native methods to the React Native application.

### Navigate to Android Project:

Open your React Native project's Android folder using Android Studio or another IDE. This folder is usually located at android/app/src/main/java/com.your.app.name (replace com.your.app.name with your actual app's package name).

### Create a New Class:

Inside this folder, create a new Java or Kotlin class for your native module. For example, if your module is for handling toast messages, name it RnHydraModule.kt

Setup this class as a ReactNativeModule by extending it using ReactContextBaseJavaModule -

```kotlin RnHydraModule.kt
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule


class RnHydraModule(reactContext: ReactApplicationContext) :
   ReactContextBaseJavaModule(reactContext) {
   override fun getName(): String {
       return NAME
   }


   companion object {
       const val NAME = "HydraRnSdk"
   }
}
```

## Register the Module (Java/Kotlin)

In the same directory, create a new class RnHydraPackage.kt and replace it’s contents with following code -

```kotlin
import com.facebook.react.ReactPackage
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.uimanager.ViewManager


class RnHydraPackage: ReactPackage {
   override fun createNativeModules(reactContext: ReactApplicationContext): List<RnHydraModule> {
       return listOf(RnHydraModule(reactContext))
   }


   override fun createViewManagers(reactContext: ReactApplicationContext): List<ViewManager<*, *>> {
       return emptyList()
   }
}
```

Now open the MainApplication.kt file, and in getPackages method, add this package as -

```kotlin
override fun getPackages(): List<ReactPackage> =
   PackageList(this).packages.apply {
     add(RnHydraPackage())
   }
```

# Setup Native Android Hydra Core methods

### Add Native Hydra Core methods

Open RnHydraModule file and add following methods for accessing the Hydra Core APIs

```kotlin
import com.capillary.hydra.android.sdk.FcmConfig
import com.capillary.hydra.android.sdk.HydraAPI
import com.capillary.hydra.android.sdk.HydraConfig
import com.capillary.hydra.android.sdk.UserPreferences
import com.capillary.hydra.android.sdk.utils.Logger
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.ReadableMap
import com.hydrarnsdk.utils.convertReadableMapToMap


class RnHydraModule(reactContext: ReactApplicationContext) :
   ReactContextBaseJavaModule(reactContext) {
   override fun getName(): String {
       return NAME
   }


   companion object {
       const val NAME = "RnHydraSdk"
       const val INSTANCE_NOT_FOUND = "Cannot find Capillary instance, please instantiate your SDK"
   }


   private var hydraAPI: HydraAPI? = null


   /**
    * ********************************************************************************
    *                          Hydra Core APIs
    * ********************************************************************************
    */


   /**
    * Initializes the SDK with the provided configuration
    */
   @ReactMethod
   fun initSdk(rnConfig: ReadableMap, promise: Promise?) {
       val accountId = rnConfig.getString("accountId")
       if (accountId == null) {
           promise?.reject(Throwable("Account Id cannot be null"))
           return
       }


       val baseUrl: String? = rnConfig.getString("baseURL")
       val sslPublicKey: String? = rnConfig.getString("sslPublicKey")
       val country = rnConfig.getString("country")
       val countryCode = rnConfig.getString("countryCode")
       val city = rnConfig.getString("city")
       val captureViewPortDetails: Boolean = rnConfig.getBoolean("captureViewPortDetails")
       val isDisableAppLaunchedEvent: Boolean = rnConfig.getBoolean("captureViewPortDetails")
       val debugLevel = rnConfig.getInt("debugLevel")
       val isFCMRegistrationEnabled =
           rnConfig.getMap("fcmConfig")?.getBoolean("isFCMRegistrationEnabled") == true


       val fcmConfig = FcmConfig(isFCMRegistrationEnabled)


       val hydraConfig: HydraConfig = HydraConfig.Builder(
           currentActivity!!.applicationContext,
           accountId,
           baseUrl,
           sslPublicKey,
           country,
           city,
           countryCode,
           captureViewPortDetails,
           fcmConfig,
           null,
           null,
           null,
           isDisableAppLaunchedEvent,
           debugLevel
       ).build()


       Logger.i("Hydra Capillary SDK initialized successfully!")
       promise?.resolve(true)
   }


   /**
    * Pushes the user sign up event to the SDK
    *
    * @param cuId The customer unique identifier
    * @param firstName The first name of the user
    * @param lastName The last name of the user
    * @param email The email of the user
    * @param phone The phone number of the user
    * @param customData The custom data to be sent along with the event
    * @param promise The promise to resolve or reject the event
    *
    * @return The promise to resolve or reject the event
    *
    * @throws Throwable If the instance is not found
    *
    */
   @ReactMethod
   fun pushUserSignUp(
       cuId: String,
       firstName: String,
       lastName: String,
       email: String,
       phone: String,
       customData: ReadableMap? = null,
       promise: Promise?
   ) {
       if (hydraAPI == null) promise?.reject(Throwable(INSTANCE_NOT_FOUND))
       val result = hydraAPI?.pushUserSignup(cuId, firstName, lastName, email, phone,
           customData?.let { convertReadableMapToMap(it) })
       Logger.i("User signed up successfully!")
       promise?.resolve(result != null)
   }


   /**
    * Pushes the user sign in event to the SDK
    *
    * @param cuId The customer unique identifier
    * @param firstName The first name of the user
    * @param lastName The last name of the user
    * @param email The email of the user
    * @param phone The phone number of the user
    * @param customData The custom data to be sent along with the event
    * @param promise The promise to resolve or reject the event
    *
    * @return The promise to resolve or reject the event
    *
    * @throws Throwable If the instance is not found
    */
   
@ReactMethod
   fun pushUserSignIn(
       cuId: String,
       firstName: String? = null,
       lastName: String? = null,
       email: String? = null,
       phone: String? = null,
       customData: ReadableMap? = null,
       promise: Promise?
   ) {
       if (hydraAPI == null) promise?.reject(Throwable(INSTANCE_NOT_FOUND))
       val result = hydraAPI?.pushUserSignin(cuId, firstName, lastName, email, phone,
           customData?.let { convertReadableMapToMap(it) })
       Logger.i("User signed up successfully!")
       promise?.resolve(result != null)
   }


   /**
    * Pushes the user update event to the SDK
    *
    * @param cuId The customer unique identifier
    * @param firstName The first name of the user
    * @param lastName The last name of the user
    * @param email The email of the user
    * @param phone The phone number of the user
    * @param customData The custom data to be sent along with the event
    * @param promise The promise to resolve or reject the event
    *
    * @return The promise to resolve or reject the event
    *
    * @throws Throwable If the instance is not found
    */
   @ReactMethod
   fun pushUserUpdate(
       cuId: String,
       firstName: String? = null,
       lastName: String? = null,
       email: String? = null,
       phone: String? = null,
       customData: ReadableMap? = null,
       subscriptions: ReadableArray? = null,
       promise: Promise?
   ) {
       if (hydraAPI == null) promise?.reject(Throwable(INSTANCE_NOT_FOUND))
       val result = hydraAPI?.pushUserUpdate(
           cuId,
           firstName,
           lastName,
           email,
           phone,
           customData?.let { convertReadableMapToMap(it) },
           subscriptions?.let { subscriptions.toArrayList() }
       )
       Logger.i("User data updated successfully!")
       promise?.resolve(result != null)
   }

   /**
    * Pushes the user sign out event to the SDK
    *
    * @param cuId The customer unique identifier
    * @param promise The promise to resolve or reject the event
    *
    * @return The promise to resolve or reject the event
    *
    * @throws Throwable If the instance is not found
    */
   @ReactMethod
   fun pushUserSignOut(
       cuId: String,
       promise: Promise?
   ) {
       if (hydraAPI == null) promise?.reject(Throwable(INSTANCE_NOT_FOUND))
       val result = hydraAPI?.pushUserSignOut(cuId)
       Logger.i("User signed out successfully!")
       promise?.resolve(result != null)
   }


   /**
    * Pushes the user delete event to the SDK
    *
    * @param cuId The customer unique identifier
    * @param userPreference The user preferences to be sent along with the event
    * @param promise The promise to resolve or reject the event
    *
    */
   @ReactMethod
   fun passUserPreferences(cuId: String, userPreference: ReadableMap, promise: Promise?) {
       if (hydraAPI == null) promise?.reject(Throwable(INSTANCE_NOT_FOUND))


       val promPushOpted = userPreference.getBoolean("promPushOpted")
       val transPushOpted = userPreference.getBoolean("transPushOpted")
       val result = hydraAPI?.passUserPreferences(cuId, UserPreferences(promPushOpted, transPushOpted))
       Logger.i("User preferences data updated successfully!")
       promise?.resolve(result != null)
   }


   /**
    * Pushes the user events to the SDK
    *
    * @param eventName The event name to be pushed
    * @param attributes The attributes to be sent along with the event
    *
    * @return The promise to resolve or reject the event
    *
    * @throws Throwable If the instance is not found
    *
    * @example
    * pushEvent("eventName", { "key": "value" })
    *
    */
   @ReactMethod
   fun pushEvent(
       eventName: String,
       attributes: ReadableMap? = null,
       promise: Promise?
   ) {
       if (hydraAPI == null) promise?.reject(Throwable(INSTANCE_NOT_FOUND))
       val result = hydraAPI?.pushEvent(eventName, attributes?.let { convertReadableMapToMap(it) })
       Logger.i("Push Event sent successfully!")
       promise?.resolve(result != null)
   }
}

```

### Add a utils class

Create a new folder called utils/utils.kt and add the following code in it -

```kotlin utils/utils.kt
package com.hydrarnsdk.utils


import android.os.Bundle
import com.capillary.hydra.inbox.core.model.Action
import com.capillary.hydra.inbox.core.model.CTATYPE
import com.capillary.hydra.inbox.core.model.GATEWAY
import com.capillary.hydra.inbox.core.model.InboxMessage
import com.capillary.hydra.inbox.core.model.MediaContent
import com.capillary.hydra.inbox.core.model.TextContent
import com.facebook.react.bridge.Arguments
import com.facebook.react.bridge.ReadableArray
import com.facebook.react.bridge.ReadableMap
import com.facebook.react.bridge.ReadableType
import com.facebook.react.bridge.WritableMap
import org.json.JSONObject




// Recursive function to convert ReadableMap to Map
fun convertReadableMapToMap(readableMap: ReadableMap): Map<String, Any> {
   val immutableMap = mutableMapOf<String, Any>()
   val iterator = readableMap.keySetIterator()
   while (iterator.hasNextKey()) {
       val key = iterator.nextKey()
       when (readableMap.getType(key)) {
           ReadableType.Boolean -> immutableMap[key] = readableMap.getBoolean(key)
           ReadableType.Number -> immutableMap[key] = readableMap.getDouble(key)
           ReadableType.String -> immutableMap[key] = readableMap.getString(key) as String
           ReadableType.Map -> immutableMap[key] =
               convertReadableMapToMap(readableMap.getMap(key)!!)


           ReadableType.Array -> {
               readableMap.getArray(key)?.let { convertReadableArrayToArray(it) }
           }


           else -> { /* Handle other types if needed */
           }
       }
   }
   return immutableMap
}


fun convertReadableArrayToArray(readableArray: ReadableArray): List<Any> {
   val immutableList = mutableListOf<Any>()
   for (i in 0 until readableArray.size()) {
       when (readableArray.getType(i)) {
           ReadableType.Boolean -> immutableList.add(readableArray.getBoolean(i))
           ReadableType.Number -> immutableList.add(readableArray.getDouble(i))
           ReadableType.String -> immutableList.add(readableArray.getString(i))
           ReadableType.Map -> immutableList.add(convertReadableMapToMap(readableArray.getMap(i)))
           ReadableType.Array -> immutableList.add(
               convertReadableArrayToArray(
                   readableArray.getArray(
                       i
                   )
               )
           )


           else -> { /* Handle other types if needed */
           }
       }
   }
   return immutableList
}


fun convertBundleToReadableMap(bundle: Bundle): WritableMap {
   return Arguments.fromBundle(bundle)
}


fun readableMapToInboxMessage(map: ReadableMap): InboxMessage? {
   val scope = map.getString("scope") ?: return null
   val accountId = map.getString("accountId") ?: return null
   val senderId = map.getString("senderId") ?: return null
   val messageId = map.getString("messageId") ?: return null


   val gatewayString = map.getString("gateway")
   val gateway = GATEWAY.valueOf(gatewayString ?: return null)


   val textContentMessage = map.getMap("textContent")?.getString("message")
   val textContentTitle = map.getMap("textContent")?.getString("title")
   val textContent = TextContent(textContentTitle!!, textContentMessage!!)


   var actionObj: Action? = null
   map.getMap("action")?.let {
       val action = it.getString("action")
       val actionText = it.getString("actionText")
       val actionType: CTATYPE = enumValueOf<CTATYPE>(it.getString("type").toString())
       actionObj = Action(actionText!!, actionType, action)
   }


   val mediaImage = map.getMap("mediaContent")?.getString("image")
   val mediaContent = MediaContent(mediaImage!!)


   val isRead = map.getBoolean("isRead")
   val createdAt = map.getString("createdAt") ?: return null
   val payload = map.getString("payload")?.let { JSONObject(it) } ?: JSONObject()


   return InboxMessage(
       scope,
       accountId,
       senderId,
       messageId,
       gateway,
       textContent,
       actionObj,
       mediaContent,
       isRead,
       createdAt,
       payload
   )
}


fun inboxMessageToReadableMap(message: InboxMessage): ReadableMap {
   val mutableMap = mutableMapOf<String, Any>()
   mutableMap["scope"] = message.scope
   mutableMap["accountId"] = message.accountId
   mutableMap["senderId"] = message.senderId
   mutableMap["messageId"] = message.messageId
   mutableMap["gateway"] = message.gateway.name


   val textContentMap = mutableMapOf<String, Any>()
   textContentMap["title"] = message.textContent.title
   textContentMap["message"] = message.textContent.message
   mutableMap["textContent"] = textContentMap


   message.action?.let {
       val actionMap = mutableMapOf<String, Any>()
       actionMap["actionText"] = it.actionText as String
       actionMap["type"] = it.type.name
       actionMap["action"] = it.action as String
       mutableMap["action"] = actionMap
   }


   message.mediaContent?.let {
       val mediaContentMap = mutableMapOf<String, Any>()
       mediaContentMap["image"] = it.image
       mutableMap["mediaContent"] = mediaContentMap
   }


   mutableMap["isRead"] = message.isRead
   mutableMap["createdAt"] = message.createdAt
   mutableMap["payload"] = message.payload.toString()


   return Arguments.makeNativeMap(mutableMap)
```

##
