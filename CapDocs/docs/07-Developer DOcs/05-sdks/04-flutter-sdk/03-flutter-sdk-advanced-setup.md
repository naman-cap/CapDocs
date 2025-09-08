---
title: Advanced Platform Setup
excerpt: ''
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
# Advanced Android Setup

If you already have a class that extends Application or you want to use a CMS other than Firebase Remote Configuration, ensure your custom Application class extends `HydraApplication` as shown below: 

```kotlin
import com.capillary.plugins.hydra.HydraApplication
import com.capillary.plugins.hydra.nativeapis.HydraInitializer

class ExampleApplication : HydraApplication() {
    override fun onCreate() {
        super.onCreate()
        HydraInitializer.initializeUsingFirebaseRemoteConfig(this)
        // ...
    }
}
```

<Note title="Note">
You must use one of the two initializers provided by `HydraInitializer`. The above code uses Firebase Remote Configuration.
</Note>

To get remote configuration details from another CMS, use the other initializer as shown below: 

```kotlin
import com.capillary.plugins.hydra.HydraApplication
import com.capillary.plugins.hydra.nativeapis.HydraInitializer
import com.capillary.plugins.hydra.nativeapis.HydraRemoteConfig

class ExampleApplication : HydraApplication() {
    override fun onCreate() {
        super.onCreate()
        val accountId = "your_account_id"
        val baseURL = "your_base_url"
        val sslPublicKey = "your_ssl_public_key"
        val remoteDebugLevel = 4 // LogType.DEBUG
        val hydraRemoteConfig = HydraRemoteConfig(accountId, baseURL, sslPublicKey, remoteDebugLevel)
        HydraInitializer.initialize(this, hydraRemoteConfig)
        // ...
    }
}
```

<Note title="Note">
In both cases, place the initializer immediately after `super.onCreate()`. You can add the rest of your code after that.

You also need to update the class name in `AndroidManifest.xml`. Use the full name of the class, including the package name and class name.
</Note>

# Advanced iOS Setup

If you prefer not to use Firebase Remote Configuration, you can initialize the Hydra SDK from `AppDelegate.swift` as shown below: 

```swift
override func application(
    _ application: UIApplication,
    didFinishLaunchingWithOptions launchOptions: UIApplication.LaunchOptionsKey: Any?
) -> Bool {
    GeneratedPluginRegistrant.register(with: self)
    let remoteConfig = HydraRemoteConfig(
        accountId: "your_account_id",
        baseUrl: "your_base_url",
        sslPublicKey: "your_ssl_public_key",
        remoteLogLevel: 4 // Debug level
    )
    HydraNativeAPI.shared.initApplication(application, didFinishLaunchingWithOptions: launchOptions, hydraRemoteConfig: remoteConfig!)
    return super.application(application, didFinishLaunchingWithOptions: launchOptions)
}
```

Add the following import statement at the top of the `AppDelegate.swift` file: 

```swift
import capillary_hydra_ios
```
