---
title: Install iOS SDK
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
To use the Hydra SDK APIs on iOS, we need to integrate the native iOS packages and expose the native methods over the React Native Bridge.

**NOTE:** Please make sure to do **pod install** before starting iOS setup

## Setup Native Hydra iOS XCode packages

To add Native iOS packages, add the Hydra iOS package repository -

1. Open the iOS project from ReactNativeProject/iOS/ReactNativeProject.xcworkspace

2. Click on Project target on top left corner and click on project name under Project section

![29a7270 image](https://files.readme.io/29a7270-image.png)

3. Click on Add button (+) to add new XCode package and search for\
   [https://github.com/Capillary/hydra-sdk-ios-packages.git](https://github.com/Capillary/hydra-sdk-ios-packages.git)

![f695a00 image](https://files.readme.io/f695a00-image.png)

4. Click Add Package and add the required packages to the Project and click Add Package -

![8bd401e image](https://files.readme.io/8bd401e-image.png)

## Setup iOS React Native Bridge module

In XCode, right click on your project name in the left pane and click New File option and select Objective-C file.

![63d6c9f image](https://files.readme.io/63d6c9f-image.png)

Create RnHydraModule.m file and in this file enter the following code to setup the Native Module -

```objectivec
#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(RnHydraSdk, NSObject)

@end

```

Make sure your RnHydraModule.m is added to the App’s target by checking it from right pane -

![a806ea2 image](https://files.readme.io/a806ea2-image.png)

Create another swift file - RnHydraSdk.swift to add the implementation for the Native methods we will be exposing on React Native Bridge -\
When you add this file, **XCode may prompt you to add a bridging header**, please add it.

```swift
@objc(RnHydraSdk)
class RnHydraSdk: NSObject {
  
}
```

**NOTE:** Please make sure to create the swift file with the same as you created your Native Bridge with, in our case we named RnHydraSdk.

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

# Setup Native iOS Hydra Core methods

Open RnHydraModule.m and add following methods in the file -

### iOS Bridge methods

```objectivec
#import <React/RCTBridgeModule.h>


@interface RCT_EXTERN_MODULE(RnHydraSdk, NSObject)


RCT_EXTERN_METHOD(initSdk:(NSDictionary)config
                 withResolver:(RCTPromiseResolveBlock)resolve
                 withRejecter:(RCTPromiseRejectBlock)reject)


RCT_EXTERN_METHOD(pushUserSignUp:(NSString *)username
                 withFirstName: (NSString *)firstname
                 withLastName: (NSString *)lastname
                 withEmail: (NSString *)email
                 withPhone: (NSString *) phone
                 withCustomData: (NSDictionary)customData
                 withResolver:(RCTPromiseResolveBlock)resolve
                 withRejecter:(RCTPromiseRejectBlock)reject)


RCT_EXTERN_METHOD(pushUserSignIn:(NSString *)username
                 withFirstName: (NSString *)firstname
                 withLastName: (NSString *)lastname
                 withEmail: (NSString *)email
                 withPhone: (NSString *) phone
                 withCustomData: (NSDictionary)customData
                 withResolver:(RCTPromiseResolveBlock)resolve
                 withRejecter:(RCTPromiseRejectBlock)reject)


RCT_EXTERN_METHOD(pushUserSignOut:(NSString *)cuId
                 withResolver:(RCTPromiseResolveBlock)resolve
                 withRejecter:(RCTPromiseRejectBlock)reject)


RCT_EXTERN_METHOD(pushUserUpdate: (NSString *)username
                 withFirstName: (NSString *)firstname
                 withLastName: (NSString *)lastname
                 withEmail: (NSString *)email
                 withPhone: (NSString *) phone
                 withCustomData: (NSDictionary)customData
                 withSubscriptions: (NSArray)subscriptions
                 withResolver:(RCTPromiseResolveBlock)resolve
                 withRejecter:(RCTPromiseRejectBlock)reject)


RCT_EXTERN_METHOD(pushEvent:(NSString *)eventName
                 withEventAttributes:(NSDictionary)eventAttributes
                 withResolver:(RCTPromiseResolveBlock)resolve
                 withRejecter:(RCTPromiseRejectBlock)reject)


RCT_EXTERN_METHOD(passUserPreferences: (NSDictionary)userPreferences
                 withResolver: (RCTPromiseResolveBlock)resolve
                 withRejecter:(RCTPromiseRejectBlock)reject)


RCT_EXTERN_METHOD(updateCustomerId:(NSString *)custId
                 withResolver:(RCTPromiseResolveBlock)resolve
                 withRejecter:(RCTPromiseRejectBlock)reject)
@end

```

### iOS Bridge Method implementation

Now, open HydraRnSdk.swift file and add the following methods to implement the above methods we defined -

```swift
import HydraCore
import HydraPushNotification
import HydraInAppMessage


@objc(RnHydraSdk)
class RnHydraSdk: NSObject {
  static var hydra: Hydra? = nil


 public static func getHydraInstance() -> Hydra? {
   if (hydra != nil) {
     return hydra
   }
  
   return nil
 }
  @objc(initSdk:withResolver:withRejecter:)
 func initSdk(config: NSDictionary,
              resolve:RCTPromiseResolveBlock?,
              reject:RCTPromiseRejectBlock?) -> Void {
   let accountId: String = (config.value(forKey: "accountId") as? String) ?? ""
   let customerId: String = (config.value(forKey: "customerId") as? String) ?? ""
   let baseUrl: String = (config.value(forKey: "baseURL") as? String) ?? ""
   let sslPublicKey: String = (config.value(forKey: "sslPublicKey") as? String) ?? ""
   let country: String = (config.value(forKey: "country") as? String) ?? ""
   let city: String = (config.value(forKey: "city") as? String) ?? ""
   let countryCode: String = (config.value(forKey: "countryCode") as? String) ?? ""
   let timezone: String = (config.value(forKey: "timezone") as? String) ?? ""
   let debugLevel: Int = (config.value(forKey: "debugLevel") as? Int) ?? 0
  
   do {
     let config: HydraConfiguration = try HydraConfiguration(
       accountID: accountId,
       customerId: customerId,
       server:  .genericServer(baseUrl, sslPublicKey, 0,5,10,30,120))
     let geoData: GeoData = GeoData(country: country, countryCode: countryCode, city: city, timeZone: timezone)


     RnHydraSdk.hydra = RnHydraCore.shared.generateInstance(
       withConfiguration: config,
       geoData: geoData
     )


     // setting log level
     RnHydraSdk.hydra!.updateLogLevel(level: getSdkLogLevel(debugLevel: debugLevel))
     resolve?("HydraCore SDK initialized successully!")
     print("HydraCore SDK initialized successully!")
   } catch {
     print("Error initializing SDK")
     reject?("ERROR", "Error initializing SDK", error)
   }
 }
  @objc(pushUserSignUp:withFirstName:withLastName:withEmail:withPhone:withCustomData:withResolver:withRejecter:)
 func pushUserSignUp(username: String,
                     firstname: String,
                     lastname: String,
                     email: String,
                     phonenumber: String,
                     customData: String: Any,
                     resolve:RCTPromiseResolveBlock?,
                     reject:RCTPromiseRejectBlock?) -> Void {
   if(RnHydraSdk.hydra != nil) {
     let userInfo: UserDetails = UserDetails(
       firstName: firstname,
       lastName: lastname,
       email: email,
       phone: phonenumber)
    
     RnHydraSdk.hydra!.reportUserSignUP(data: userInfo, customData: customData)
     resolve?("User sign up successfully!")
     print("pushUserSignIn::User sign up successfully!")
   } else {
     reject?("SIGNUP_ERROR", "Error while signing up user", getHydraNotFoundError())
     print("pushUserSignUp::Error while signing up user")
   }
 }
  @objc(pushUserSignIn:withFirstName:withLastName:withEmail:withPhone:withCustomData:withResolver:withRejecter:)
 func pushUserSignIn(username: String,
                     firstname: String,
                     lastname: String,
                     email: String,
                     phonenumber: String,
                     customData: String: Any,
                     resolve:RCTPromiseResolveBlock?,
                     reject:RCTPromiseRejectBlock?) -> Void {
  
   if(RnHydraSdk.hydra != nil) {
     let userInfo: UserDetails = UserDetails(
       firstName: firstname,
       lastName: lastname,
       email: email,
       phone: phonenumber)
    
     RnHydraSdk.hydra!.reportUserSignIn(data: userInfo, customData: customData)
     resolve?("User sign in successfully!")
     print("pushUserSignIn::User sign in successfully!")
   } else {
     reject?("SIGNIN_ERROR", "Error while signing in user", getHydraNotFoundError())
     print("pushUserSignIn::Error while signing in user")
   }
 }
  @objc(pushUserSignOut:withResolver:withRejecter:)
 func pushUserSignOut(cuId: String,
                      resolve:RCTPromiseResolveBlock?,
                      reject:RCTPromiseRejectBlock?) {
   if(RnHydraSdk.hydra != nil) {
     RnHydraSdk.hydra!.reportUserSignOut(customData: "customerId": cuId)
     resolve?("User sign in successfully!")
     print("pushUserSignOut::User sign out successfully!")
   } else {
     let error = NSError(domain: "com.reactnative.ccapillary", code: 400, userInfo: NSLocalizedDescriptionKey: "Cannot find instance of HydraCore")
     reject?("SIGNOUT_ERROR", "Error while signing out user", error)
     print("pushUserSignOut::Error while signing in user")
   }
 }
  @objc(pushUserUpdate:withFirstName:withLastName:withEmail:withPhone:withCustomData:withResolver:withRejecter:)
 func pushUserUpdate(username: String,
                     firstname: String,
                     lastname: String,
                     email: String,
                     phonenumber: String,
                     customData: String: Any,
                     subscriptions: Any?,
                     resolve:RCTPromiseResolveBlock?,
                     reject:RCTPromiseRejectBlock?) -> Void {
   if(RnHydraSdk.hydra != nil) {
     let userInfo: UserDetails = UserDetails(
       firstName: firstname,
       lastName: lastname,
       email: email,
       phone: phonenumber)
    
    RnHydraSdk.hydra!.reportUserProfileUpdate(data: userInfo, customData: customData, subscriptions: subscriptions)


     resolve?("User data updated successfully!")
     print("pushUserUpdate::User sign up successfully!")
   } else {
     reject?("SIGNUP_ERROR", "Error while signing up user", getHydraNotFoundError())
     print("pushUserUpdate::Error while signing up user")
   }
 }
  @objc(pushEvent:withEventAttributes:withResolver:withRejecter:)
 func pushEvent(eventName: String,
                eventAttribues: Attributes,
                resolve:RCTPromiseResolveBlock?,
                reject:RCTPromiseRejectBlock?) -> Void {
   if (RnHydraSdk.hydra != nil) {
     RnHydraSdk.hydra?.reportUserEvent(name: eventName, customAttributes: eventAttribues)
     resolve?("Push Event sent successfully!")
     print("pushEvent::User sign up successfully!")
   } else {
     reject?("PUSH_EVENT_ERROR", "Error while signing up user", getHydraNotFoundError())
     print("pushEvent::Error while sending push event")
   }
 }


 @objc(passUserPreferences:withResolver:withRejecter:)
 func passUserPreferences(
   userPreferences: String: Bool,
   resolve:RCTPromiseResolveBlock?,
   reject:RCTPromiseRejectBlock?
 ) {
   if(RnHydraSdk.hydra != nil) {
     let promPushOpted = userPreferences["promPushOpted"] ?? false
     let transPushOpted = userPreferences["transPushOpted"] ?? false
     RnHydraSdk.hydra?.updateUserNotificationSettingsFor(promoPushOpted: promPushOpted, transPushOpted: transPushOpted)
     RnHydraSdk.hydra!.reportUserPreferencesUpdate()
     resolve?("Push Event sent successfully!")
     print("passUserPreferences::User sign up successfully!")
   } else {
     reject?("PASS_PREFERENCES_ERROR", "Error while signing up user", getHydraNotFoundError())
     print("passUserPreferences::Error while sending push event")
   }
 }


  @objc(updateCustomerId:withResolver:withRejecter:)
 func updateCustomerId(custId: String,
                       resolve:RCTPromiseResolveBlock?,
                       reject:RCTPromiseRejectBlock?) -> Void {
   if (RnHydraSdk.hydra != nil) {
     RnHydraSdk.hydra!.update(customerID: custId)
     resolve?(true)
     print("passUserPreferences::User sign up successfully!")
   } else {
     reject?("ERROR", "Error while updating customer id", getHydraNotFoundError())
   }
 }
 // ******************************* private methods *******************************
 private func getHydraNotFoundError() -> NSError {
   return NSError(domain: "com.reactnative.ccapillary",
                  code: 400,
                  userInfo: NSLocalizedDescriptionKey: "Cannot find instance of HydraCore"
   )
 }
  private func getSdkLogLevel(debugLevel: Int) -> LogLevel {
   switch(debugLevel) {
   case 0:
     return LogLevel.verbose;
   case 1:
     return LogLevel.debug;
   case 2:
     return LogLevel.info;
   case 3:
     return LogLevel.error;
   case 4:
     return LogLevel.critical;
   default:
     return LogLevel.verbose;
   }
 }
}

```

### RnHydraCore class

Create a new file called RnHydraCore.swift and add the following code in it -

```swift
import Foundation
import HydraCore


@objc(RnHydraCore)
open class RnHydraCore: NSObject {
 @objc public static var shared = RnHydraCore(with: true)
 var hydraInstance: Hydra? = nil
 public func generateInstance(
   withConfiguration config: HydraConfiguration,
   geoData: (HydraCore.GeographicDataGenerator)? = nil,
   supportsPushNotifications: Bool = false,
   deviceScreenInfo: HydraCore.DeviceScreenInfo? = nil,
   inboxCoreConfig: (HydraCore.HydraInboxCoreConfigGenerator)? = nil,
   configuredFor env: HydraCore.Env = .dev
 )  -> Hydra? {
   if (hydraInstance == nil) {
     do {
       hydraInstance = try Hydra.generate(with: config,
                                          geoData: geoData,
                                          supportsPushNotifications: supportsPushNotifications,
                                          deviceScreenInfo: deviceScreenInfo,
                                          inboxCoreConfig: inboxCoreConfig,
                                          configuredFor: env)
     } catch {
       return nil
     }
   }
  
   return hydraInstance
 }

```
