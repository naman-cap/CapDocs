---
title: Configure LINE Settings
deprecated: false
hidden: false
metadata:
  robots: index
---
# Prerequisites

Before integrating LINE into Capillary, ensure the following prerequisites are met:

*   **[Create a LINE account](https://docs.capillarytech.com/docs/line-prerequisites#creating-a-line-account):** A LINE account is the primary account used to login to the LINE Developer Platform.
*   **[Create a LINE Developer Platform Account](https://docs.capillarytech.com/docs/line-prerequisites#creating-a-line-developer-platform-account):** The LINE Developer Platform is the portal to connect and utilize the LINE API.
*   **[Create a Provider](https://docs.capillarytech.com/docs/line-prerequisites#creating-a-provider):** A provider is an individual developer or organization that provides services and acquires user information on the LINE Developers platform.
*   \*\*[Create a Channel](https://docs.capillarytech.com/docs/line-prerequisites#creating-a-channel): \*\*A channel is a communication path for providers to use the LINE platform's features.
*   \*\*[Create a Bot](https://docs.capillarytech.com/docs/line-prerequisites#creating-a-bot): \*\*A bot allows you to send messages to users and leverage features such as rich menus and quick replies.
*   \*\*[Create a Webhook](https://docs.capillarytech.com/docs/line-prerequisites#creating-a-webhook): \*\*A webhook allows you to receive real time information from LINE.
*   \*\*[Configure the LINE Message API](https://docs.capillarytech.com/docs/line-prerequisites#configuring-the-line-message-api): \*\*The Messaging API lets you develop two-way communication between your service and LINE users.
*   \*\*[Channel ID and Secret Keys](https://docs.capillarytech.com/docs/line-prerequisites#channel-id-and-channel-secret-keys): \*\*The Channel ID and Secret Keys are identifiers used when integrating your LINE account with Capillary.

## Creating a line account

Download and install the LINE app and [create an account](https://help.line.me/official_account/web/categoryId/20010172/pc?lang=en\&contentId=20013134) if not already done.

## Creating a line developer platform account

Create a LINE developer account on the [LINE Developers platform ](https://account.line.biz/signup)using your LINE account.

On the LINE Developers Console, you can manage Developers, Providers, and Channels.

## Creating a provider

To create a provider on the LINE Developer Platform, refer to the [LINE Developer Console documentation](https://developers.line.biz/en/docs/line-developers-console/overview/#creating-a-provider) on creating a provider.

> ❗️ Important
>
> The provider name should be an official name such as the company name as it is used to verify your identity.

## Creating a channel

The channel is the hub through which your messages are sent. Users can join your channel and receive promotional content and announcements through LINE.

To create a channel on the LINE Developer Platform, refer to the [LINE Developer Console documentation](https://developers.line.biz/en/docs/line-developers-console/overview/#creating-a-channel) on creating a channel.

<Note title="Note">
Choose Messaging API as the channel type while creating a channel.
</Note>

## Creating a bot

Once you have created the provider and channel, you will need to create and configure a bot. This allows you to send messages to users. Additionally, you can configure the bot to use rich menus, and quick replies for a personalized experience.

To create a bot on the LINE Developer Platform, refer to the [LINE Developer Console documentation](https://developers.line.biz/en/docs/messaging-api/building-bot/) on creating a bot.

## Creating a webhook

For detailed steps, refer to the [Capillary Developer Documentation ](https://docs.capillarytech.com/reference/add-webhook)on creating a webhook.

<Note title="Note">
The generated webhook URL can then be used for integration on LINE.
</Note>

## Setting the webhook url

Once the webhook URL has been created, you need to set the webhook onto the LINE developer platform.

For detailed steps to set the webhook URL on the Line Developer Platform, refer to the [LINE Developer Console Documentation.](https://developers.line.biz/en/docs/messaging-api/building-bot/#setting-webhook-url)

## Configuring the line message api

To connect your LINE account with Capillary, you need to enable the Messaging API for your account.

Follow these steps to enable Messaging API:

1. Log in to your LINE developer account and select your target account.
2. Click **Settings**in the top right and go to the settings screen.
3. Select **Messaging API**from the menu on the left.
4. Click on the **Enable Messaging API**button.

![1e5e42320fb42c17de2a555ce01c6620bd2c5a92603c203896f81c00243fd17f image](https://files.readme.io/1e5e42320fb42c17de2a555ce01c6620bd2c5a92603c203896f81c00243fd17f-image.png)

5. Select the provider you want to associate with and click on **Agree**.

When the Channel information appears on the screen, the Messaging API activation is complete.

## Channel id and channel secret keys

These are required while setting up a LINE source account on InTouch.

**Channel ID**is a unique identifier of the channel.

**Channel Secret Key**is a unique secret key used to grant an app access to your channel.

<Note title="Note">
Find the Channel ID and Channel Secret Keys on the LINE Developer Platform under Settings > Messaging API > Channel Info.
</Note>

Once you have set up your LINE developer account and created a Provider, Channel and Webhook, configure Capillary to work with LINE.

The configuration procedure includes the following steps:

*   [Setting up LINE Source Account on InTouch](https://docs.capillarytech.com/docs/line-configuration#setting-up-a-line-source-account-on-intouch)
*   [Registering a LINE User on InTouch](https://docs.capillarytech.com/docs/line-configuration#registering-a-line-user-on-intouch)
*   [Creating a LINE Gateway](https://docs.capillarytech.com/docs/line-configuration#creating-a-line-gateway)
*   [Registering a User Without a LINE Profile on Capillary](https://docs.capillarytech.com/docs/line-configuration#registering-a-user-without-a-line-profile-on-capillary)
*   [Setting Up a Webhook in the LINE Developer Account](https://docs.capillarytech.com/docs/line-configuration#setting-up-a-webhook-on-the-line-developer-platform)

## Setting up a line source account on intouch

Setting up a LINE source account on InTouch involves configuring the LINE channel details obtained from the LINE developer platform.

This step is required to establish a functional connection between your LINE account and Capillary.

To set up a LINE source account, follow these steps:

1. Log in to InTouch and navigate to Organization Settings > [Channel Configurations](https://incrm.cc.capillarytech.com/org/config/ChannelConfig).

![2d1ba3e1edd7db2c3ea009ffa792cea9d2eccca6182196fe896270ca3bf48f4a image](https://files.readme.io/2d1ba3e1edd7db2c3ea009ffa792cea9d2eccca6182196fe896270ca3bf48f4a-image.png)

2. From the **Channel List**, select LINE.

> 👍 Tip
>
> Use the search function to find it quickly .

3. Click on **Add Account**in the top right and enter an **Account Name**.

![def87dbda1eb63d3a332c2665db1651c24a0ccdc4b7e505b908be23d7c90c719 image](https://files.readme.io/def87dbda1eb63d3a332c2665db1651c24a0ccdc4b7e505b908be23d7c90c719-image.png)

4. Enter the **Source Account ID**, **Channel ID**, and \*\*Channel Secret \*\*from the channel created on the LINE Developers Console.
5. Click **Submit**to save the changes.

## Registering a line user on intouch

To register a LINE user on InTouch, set up the LINE app, create an account if you don’t already have one, and scan the channel's QR code to connect with the LINE channel.

Ensuring that both sources are correctly mapped is crucial for integration between LINE and InTouch.

To register a LINE user on InTouch, follow these steps:

1. Download and install the LINE app.
2. Create an account by providing your mobile number, if you do not have an existing LINE account.
3. Scan the QR code for the target LINE channel using the LINE app.

<Note title="Note">
The QR code for the channel is available on the [LINE Developer Platform](https://developers.line.biz/en/docs/messaging-api/sharing-bot/#use-qr-code).
</Note>

![0ec10de5dc9b3f613961d7a7d1a9dda1f76cc92da0e06e508595c216f1fcde4a image](https://files.readme.io/0ec10de5dc9b3f613961d7a7d1a9dda1f76cc92da0e06e508595c216f1fcde4a-image.png)

4. On your mobile device, click **Add**to send a request to the LINE channel when prompted.

<Note title="Note">
The request can be viewed using the Webhook URL. **userid**is the unique identifier of a LINE account for the user.
</Note>

5. On InTouch, register a customer using the [customer registration API](https://docs.capillarytech.com/reference/v2-add-customer) and the mobile number associated with the LINE app. Set the source as **INSTORE**.
6. Once the INSTORE profile for the customer is created, use the [customer registration V2 API](https://docs.capillarytech.com/reference/v2-add-customer) to register the same user with the source set as LINE.
7. Check the Member Care section for the registered customer to confirm that both sources (INSTORE and LINE) are mapped to the same customer.

![5cab36bb6575e65d1691519222dbe48f2d774eddf65a33b4a18f87c8df53812c image](https://files.readme.io/5cab36bb6575e65d1691519222dbe48f2d774eddf65a33b4a18f87c8df53812c-image.png)

<Note title="Note">
The addition of a LINE user on InTouch can be automated as needed.
</Note>

## Creating a line gateway

Creating a LINE Gateway is required for managing message delivery through the LINE channel

To create a LINE gateway on InTouch, follow these steps:

1. Login to InTouch and navigate to the [Gateways](https://incrm.cc.capillarytech.com/org/gateways/Gateways) page.
2. Under Gateway Settings, choose \*\*LINE \*\*from the Gateway drop-down menu.
3. Define the Gateway Weight (the ratio in which messages will be delivered).
4. Define the Start and End Time.
5. Click on **Submit**to create a LINE Gateway.

![8fd7e294112d1a1cf0b16a820a8f190c0059860ad6ce24769780e1792eab9ae3 image](https://files.readme.io/8fd7e294112d1a1cf0b16a820a8f190c0059860ad6ce24769780e1792eab9ae3-image.png)

You can now include the customer in any campaign lists and contact them via the LINE channel.

## Setting up a webhook on the line developer platform

To set up a webhook on the LINE developer platform, follow these steps:

1. **Configure the Webhook**\
   [Setup the webhook URL](https://developers.line.biz/en/docs/messaging-api/building-bot/#setting-webhook-url) for the specific LINE channel. This webhook will capture events for when the user opts in or out of the channel.
2. **Manage Subscription Status**
   * Use the LINE user ID from the API response to[ update the subscription status](https://docs.capillarytech.com/reference/update-subscription-details) on Capillary via middleware.
   * If the user does not exist in the system create an INSTORE and LINE profile using the [customer registration API](https://docs.capillarytech.com/reference/v2-add-customer).

![8ab336652c792a37253f3fc9e1aed2eba9b803802a14381dc05bfb0d3aca6d56 image](https://files.readme.io/8ab336652c792a37253f3fc9e1aed2eba9b803802a14381dc05bfb0d3aca6d56-image.png)