---
title: Notification inbox (COPY)
excerpt: >-
  This page provides information about notification inbox and how to configure
  it.
deprecated: false
hidden: true
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
The Hydra SDK provides a Notification Inbox feature, allowing users to view a history of relevant push notifications received within the app. This uses the HydraInboxCore and HydraInboxUI frameworks.

The Notification Inbox helps with the following:

* **Centralized Management:** Users access a centralized hub for all push notifications, ensuring organization and control over their app interactions.
* **Enhanced Accessibility:** Notifications are no longer buried in cluttered bars; users can manage them efficiently, leading to a seamless experience.
* **Increased Engagement:** Clear and accessible notifications promote active engagement, allowing users to respond promptly to social interactions, promotions, and achievements.
* **Improved customer satisfaction:** The Notification Inbox will help to improve customer satisfaction by making the app more useful and engaging
* **Metrics**: Enables to track the number of users who open the Notification Inbox, the number of push notifications that are viewed in the Notification Inbox, and the number of push notifications that are deleted from the Notification Inbox

  ## Use Case: Retail Loyalty Program

  **Scenario:**\
  A retail company operates a loyalty program where customers earn points for each purchase. This program offers exclusive promotions and discounts to reward loyal customers. The app sends push notifications to users, notifying them of earned points and offering special discounts.\
  **Issue:**\
  Many users miss out on these discounts due to cluttered notification bars filled with messages from various apps. They frequently clear their notification bars without noticing the discounts, resulting in missed opportunities.\
  **Solution:**\
  Introducing a Notification Center within the app resolves this issue. Users can conveniently access all loyalty program notifications in one location. Here, they can easily view their accumulated points and available discounts. This streamlined approach enhances user engagement and loyalty.

# Prerequisites

1. **Notification Management:**\
   The Inbox relies on the core SDK and push handling.  To enable and support the Notification Center's functionality, developers must integrate two frameworks.
   * HydraPushNotification
   * HydraPushNotificationServiceExtension\
     Ensure they are initialized and push delegate methods are forwarded correctly.
2. **App Groups (Mandatory):**\
   The Inbox feature requires App Groups to be configured correctly to allow data sharing (notification storage) between the main app and the Notification Service Extension (which often saves the incoming notification).

   > ❗️ Make sure that the same App Group ID is enabled for all the targets where the Capillary SDK is utilized.

### Set up App group ID

To set up an App Group ID for the main application, from **TARGETS**, select your App Target, navigate to the **Signing & Capabilities** tab and perform the following:     

i.  Enable **App Groups** for your app target and choose an App Group ID. If you don't have one, create a new one with the format `group.{your_bundle_id}.hydra`.

ii. Enable **Background mode** and select/enable **Remote Notification**.

iii. Turn on the **Push Notifications** capability for your app.

![fad705a iOS SDK App group identifier](https://files.readme.io/fad705a-iOS_SDK_App_group_identifier.png)

To set up an App Group ID for the Push Notification Extension Target, from **TARGETS**, select your App Target, navigate to the **Signing & Capabilities** tab and perform the changes as shown in the image below:

![01c6356 Push notification extension target](https://files.readme.io/01c6356-Push_notification_extension_target.png)

**NOTE:** The App Group ID must precisely match the name of the main application.

# Integration

You can implement the Notification Center in the application in two ways:

| Approach   | Frameworks                                    | Description                                                                                                                                                                                                        |
| ---------- | --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Approach 1 | HydraInboxCore                                | When developers want to create their own UI implementation, they can use this framework and its APIs. The framework returns all notifications, and developers can design their own UI as per their requirements.   |
| Approach 2 | HydraInboxCore and HydraInboxUI (Recommended) | Recommended when the developer wants to use the Notification Center UI designed by the SDK. The developer needs to set up a notification button (or any button) and push/present the SDK’s Notification Center UI. |

**Integration Steps for HydraInboxCore Framework**

*HydraInboxCore*

* This framework handles all remote notifications received by the application.
* APIs are exposed to get details related to the Notification Center, such as the number of notifications available, the number of unread notifications, and the list of available notifications.
* The application can use these APIs to design its own UI to display the Notification Center.

**Integration Steps for HydraInboxCore and HydraInboxUI Frameworks (Recommended)**

*HydraInboxUI*

* Responsible for getting notifications from HydraInboxCore and displaying them under the Notification Center.
* Recommended for ease of use, as the application only needs to initialize HydraInboxUI.

**Initialization Steps for HydraInboxCore Framework and to create an instance of InboxCore**

```swift
public init(with config: HydraInboxCoreConfigGenerator, configuredFor env: Env) throws
```

| Parameter | Type                          | Mandatory/Optional | Description                                                          |
| --------- | ----------------------------- | ------------------ | -------------------------------------------------------------------- |
| config    | HydraInboxCoreConfigGenerator | Compulsory         | Object of class conforming to HydraInboxCoreConfigGenerator protocol |
| env       | Environment                   | Optional           | Either .dev or .unittest                                             |

*HydraInboxCoreConfigGenerator*

```swift
public protocol HydraInboxCoreConfigGenerator {
    var maximumNotificationCount: Int? { get set }
    var hydraConfig: ConfigurationGenerator { get set }
    func update(with config: HydraInboxCoreConfigGenerator?)
}

```

| Parameter                | Type                   | Mandatory/Optional | Description                                                                                                   |
| ------------------------ | ---------------------- | ------------------ | ------------------------------------------------------------------------------------------------------------- |
| hydraConfig              | ConfigurationGenerator | Compulsory         | An object of class conforming to ConfigurationGenerator protocol                                              |
| maximumNotificationCount | Int                    | Optional           | Maximum number of notifications to display in the Notification Center (set to nil for internal default value) |

**NOTE:** If `maximumNotificationCount` is set to `null`, the SDK will use an internal value (250) to limit the number of notifications stored in the database.

**Initialization Steps for HydraInboxUI Framework and to create an instance of InboxUICore**

```swift
public init(with inboxCore: InboxCore, configuration: HydraInboxUIConfigurator)
```

| Parameter     | Type                     | Mandatory/Optional | Description                                                     |
| ------------- | ------------------------ | ------------------ | --------------------------------------------------------------- |
| inboxCore     | InboxCore                | Compulsory         | Instance of InboxCore                                           |
| configuration | HydraInboxUIConfigurator | Compulsory         | Object of class conforming to HydraInboxUIConfigurator protocol |

*HydraInboxUIConfigurator*

```swift
public protocol HydraInboxUIConfigurator {
    var unreadMessageConfigurationType: InboxMessageConfiguration { get set }
    var readMessageConfigurationType: InboxMessageConfiguration { get set }
    var placeholderImage: UIImage? { get set }
    var notificationsNotFoundConfiguration: HydraInboxEmptyNotificationsConfigurator { get set }
}

```

| Parameter                          | Type                                     | Mandatory/Optional | Description                                                                     |
| ---------------------------------- | ---------------------------------------- | ------------------ | ------------------------------------------------------------------------------- |
| unreadMessageConfigurationType     | InboxMessageConfiguration                | Compulsory         | Enum value: .defaultUnreadConfiguration or .customConfiguration                 |
| readMessageConfigurationType       | InboxMessageConfiguration                | Compulsory         | Enum value: .defaultReadConfiguration or .customConfiguration                   |
| notificationsNotFoundConfiguration | HydraInboxEmptyNotificationsConfigurator | Optional           | Object of class conforming to HydraInboxEmptyNotificationsConfigurator protocol |
| placeholderImage                   | UIImage                                  | Optional           | Object of UIImage class                                                         |

**NOTE:** If `placeholderImage` is set to `null`, the SDK application will set the application icon as placeholder image.

*HydraInboxEmptyNotificationsConfigurator*

```swift
public protocol HydraInboxEmptyNotificationsConfigurator {
    var notificationsNotFoundLabelTextColor: UIColor { get set }
    var notificationsNotFoundLabelFont: UIFont { get set }
}

```

| Parameter                           | Type    | Mandatory/Optional | Description             |
| ----------------------------------- | ------- | ------------------ | ----------------------- |
| notificationsNotFoundLabelTextColor | UIColor | Compulsory         | Object of class UIColor |
| notificationsNotFoundLabelFont      | UIFont  | Compulsory         | Object of class UIFont  |

**Example: Using Default UI Configuration**

```swift
let config = try HydraConfiguration(accountID: "AccountID", customerId: "CustomerID", server: .server1)
guard let hydra = try? Hydra.generate(with: config) else {
    Logger.error("Error in configuration generation")
    return nil
}
Logger.updateLogLevel(level: .critical)
do {
    let config = InboxCoreConfiguration(hydraConfig: config, maximumNotificationCount: nil)
    inboxCore = try InboxCore(with: config)
    inboxUI = InboxUICore(with: inboxCore!, configuration: HydraInboxUIConfiguration(unreadMessageConfigType: .defaultUnreadConfiguration, readMessageConfigType: .defaultReadConfiguration))
} catch let error {
    print(error)
}
```

**Example: Using Custom UI Configuration**

```swift
let config = try HydraConfiguration(accountID: "AccountID", customerId: CustomerID, server: .server1)
guard let hydra = try? Hydra.generate(with: config) else { return nil }
Logger.updateLogLevel(level: .critical)
do {
    let config = InboxCoreConfiguration(hydraConfig: config, maximumNotificationCount: nil)
    inboxCore = try InboxCore(with: config)
    let unreadConfig: InboxMessageConfiguration = .customConfiguration(.systemIndigo, .white, .white, .white, .systemFont(ofSize: 20, weight: .heavy), .systemFont(ofSize: 15, weight: .bold), .italicSystemFont(ofSize: 10), 4, 6)
    let readConfig: InboxMessageConfiguration = .customConfiguration(.systemPink, .white, .white, .white, .systemFont(ofSize: 15,

 weight: .heavy), .systemFont(ofSize: 10, weight: .bold), .italicSystemFont(ofSize: 10), 2, 4)
    let emptyNotificationsConfiguration = HydraInboxEmptyNotificationsConfiguration(notificationsNotFoundLabelTextColor: .red, notificationsNotFoundLabelFont: .systemFont(ofSize: 15, weight: .regular))
    inboxUI = InboxUICore(with: inboxCore!, configuration: HydraInboxUIConfiguration(unreadMessageConfigType: unreadConfig, readMessageConfigType: readConfig, notificationsNotFoundConfiguration: emptyNotificationsConfiguration, placeholderImage: UIImage(named: "placeholder")))
} catch let error {
    print(error)
}
```

Note: Custom configuration has the following sequence of parameters: `.customConfiguration(cellBackgroundColor, cellTitleLabelTextColor, cellMessageLabelTextColor, cellTimeLabelTextColor, cellTitleLabelFont, cellMessageLabelFont, cellTimeLabelFont, cellTitleLabelLineLimit, cellMessageLabelLineLimit)`

# API Usage

## HydraInboxCore

### **getUnreadNotificationCount()**

Use this API to retrieve the count of unread notifications using the instance of **InboxCore**. This method returns an integer value.

**Example:** In the example below, we have set a badge icon on the bell image if there is one or more unread notification(s):

```
guard let inboxCore Application Manager sharedObj inboxCore else
{
  return
}
if inboxCore getUnread NotificationCount() > 0
{
notificationButton setImage Ullmage system Name: "bell.badge" for normal
} 
else 
{
  notificationButton setImage Ullmage system Name: "bell" for normal
}

```

### **getNotifications()**

Use this API to get the available notifications. This method returns an array of **HydraNotificationPayload** objects. The configuration provided while initializing the InboxCore instance is used. For more information, refer to the [HydraInboxCoreConfigGenerator](https://docs.capillarytech.com/reference/configure-notification-center-1#option-2-recommended-integrate-both-hydrainboxcore-and-hydrainboxui-frameworks) section.

**Example:**

```swift
val notifications: List<HydraNotificationPayload> = inboxCore.getNotifications()
```

## **handleNotification(notification: HydraNotificationPayload, action: HydraNotificationAction)**

This API communicates the action taken on the notification to the SDK. The action should be an enum of type **HydraNotificationAction**.

There are two type of actions:

* Use `.read` when the user clicks on the notification, and 
* `.delete` when the user wants to delete the notification.

Example:

```swift
inboxCore.handleNotification(notification.notification, HydraNotificationAction.READ)
```

#### **handleDeleteAllNotifications()**

This API deletes all notifications associated with the current user from the database. Returns `true` if all notifications were deleted successfully, otherwise `false`.

Example:

```swift
if (inboxCore.handleDeleteAllNotifications()) {
    Logger.info("Delete all notifications succeeded")
} else {
    Logger.error("Delete all notifications failed")
}
```

### **performNotificationAction(notification: HydraNotificationPayload)**

Use this API to perform the action associated with the notification when the user clicks on it.

Example:

```swift
inboxCore.performNotificationAction(notification.notification)
```

### **setHydraInboxUIDelegate(delegate: HydraInboxUIProtocol?)**

Use this API to set the delegate of **InboxCore**. The delegate is notified of changes in the database, such as insertion, deletion, or updates of notifications. The view displaying the Notification Center should implement the **HydraInboxUIProtocol** and use this method.

The Notification Center view can implement the `func refreshNotificationList()` to update the UI and refresh the notifications.

Example:

```swift


extension NotificationListViewModel: HydraInboxUIProtocol

{ func refreshNotificationList()
                                                         
{
DispatchQueue.main.async
  { weak self in self?.refresh()
}
}
}
```

## **HydraInboxUI**

To show Notification Center, an Application Developer can use either

* `showNotificationCenter(with navigationController: UINavigationController)`\
  OR
* `getNotificationCenter() `API

#### **showNotificationCenter(with navigationController: UINavigationController)**

Use this API to push Notification Center created by the SDK in the given navigationController.

Example:

```swift
inboxUI.showNotificationCenter(with = navigationController)
```

### **getNotificationCenter()**

Use this API to obtain the Notification Center created by the SDK. The application can then decide whether to push or present this Notification Center.

Example:

```swift
val notificationCenterViewController = inboxUI.getNotificationCenter()
navigationController.pushViewController(notificationCenterViewController, animated = true)
```

#### **setHydraInboxUIDelegate(delegate: HydraInboxUIProtocol)**

Use this API to set the delegate of **InboxUICore**. This delegate is also passed internally to the **InboxCore** delegate. By doing so, changes notified by **InboxCore** are directly passed to this delegate.

Example:

For instance, if you have a bell icon on the Home screen that should show a badge when there are unread notifications, set the delegate of **InboxUICore** on the Home screen using this method. Implement the **refreshNotificationList()** method in the Home screen to update the bell icon accordingly:

```swift
override func viewWillAppear(_ animated: Bool) {
        super.viewWillAppear(animated)
        updateNotificationBellIcon()
       self.inboxUI.setInboxUIDelegate(delegate: self)
}
@objc private func updateNotificationBellIcon() {
        guard let inboxCore = ApplicationManager.sharedObj.inboxCore else {
            return
        }
        if inboxCore.getUnreadNotificationCount() > 0 {
            notificationButton.setImage(UIImage(systemName: "bell.badge"), for: .normal)
        } else {
            notificationButton.setImage(UIImage(systemName: "bell"), for: .normal)
        }
    }


extension HomeViewController: HydraInboxUIProtocol {
    func refreshNotificationList() {
        DispatchQueue.main.async { weak self in
            self?.updateNotificationBellIcon()
        }
    }
}

```

***
