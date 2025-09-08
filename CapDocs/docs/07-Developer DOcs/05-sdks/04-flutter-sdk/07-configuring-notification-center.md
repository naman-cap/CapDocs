---
title: Configure Notification Center
deprecated: false
hidden: false
metadata:
  robots: index
---
An In-App Notification Centre is a centralised hub within the dashboard, allowing you to stay updated on important events, actions, and announcements without leaving the app.

![2b86f5234d7677edf82be916aeef2e4ddd01c2734a0fc93349ca063dc2acf1ae image](https://files.readme.io/2b86f5234d7677edf82be916aeef2e4ddd01c2734a0fc93349ca063dc2acf1ae-image.png)

![0db981e45dc7eb95b7a16b91570b1d0951177fa090e23a6c1e4d3408d62e9a41 image](https://files.readme.io/0db981e45dc7eb95b7a16b91570b1d0951177fa090e23a6c1e4d3408d62e9a41-image.png)

<br />

# Configuring the Inbox API

This API allows you to retrieve and display a list of messages for a user.

To set up the Inbox API, enable the Inbox API by setting the `enable_inbox_api` parameter to `true` in your `hydra-config.json` file.

<Note title="Note">
To use the Inbox API in iOS, you must have added the notification service extension by following the instructions under [Configuring rich notifications for iOS](https://docs.capillarytech.com/docs/flutter-sdk-push-notifications#configuring-rich-notifications-for-ios).
</Note>

# Configuring the Inbox UI

This allows you to use the native notification center UI included in Hydra SDK.

To enable the Inbox UI, follow these steps:

1. Enable the Inbox API by following the instructions under [Configuring the Inbox API](https://docs.capillarytech.com/docs/flutter-sdk-in-app-messaging#configuring-the-inbox-api).
2. Enable the Inbox UI by setting the `enable_inbox_ui` parameter to `true` in your `hydra-config.json` file.
3. Configure Inbox UI for iOS by adding an image asset named `inboxUIPlaceholder` in your project's `Assets.xcassets`.
4. Configure Inbox UI for Android by adding an image file named `hydra_inbox_ui_placeholder` to the `android/app/src/main/res/drawable` folder.