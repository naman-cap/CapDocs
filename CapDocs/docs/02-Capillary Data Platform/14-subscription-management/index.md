---
title: Subscription Management
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
Customers can subscribe or unsubscribe from receiving SMS communications for each source of your organization. This module helps you in automating customer subscriptions for InStore, eCommerce accounts, and WeChat.

Two types of subscriptions are supported by Capillary - transaction messages for personalized messages and promotional messages for bulk communications such as campaign messages.

This section provides a detailed procedure on configuring subscriptions for the sources InStore, WeChat, and e-commerce.

## Limitations

* Only registered customers can request opt-in or out-out services.
* Success messages for opt-in or opt-out depend on the message you configure on the respective pages.
* When non-registered customers request for such opt-in or opt-out service, the request will be silently ignored.
* When a customer who is already opted-in, places a request for opt-in no action will be taken and such requests will be silently ignored.

> 📘 - Supported communication channels are email, SMS, and WeChat.
> - Supported sources are all sources with active accounts that are mapped to the supported channels.

## Opt in and Opt out Configurations

For detailed help on configuring opting in or opting out, see the following topics.

* [Email Subscription Settings](https://docs.capillarytech.com/docs/email-subscription-settings): You can configure email subscriptions through a link that facilitates customers to opt-in or opt out from org emails.
* Mobile Number Subscriptions: You can configure mobile number subscriptions by two options - either through SMS or missed call.
* [Missed Call-based Subscription Settings](https://docs.capillarytech.com/docs/missed-call-based-subscription-settings): In this, a customer needs to give a missed call to the dedicated number that is configured for opt-in or opt-out.
* [SMS-based Subscription Settings](https://docs.capillarytech.com/docs/sms-based-subscription-settings): In this, the customer needs to send an SMS in the format that is configured for opt-in or opt-out.

> 📘
>
> * WeChat subscription settings are configured by default (if applicable for the org). You cannot modify WeChat subscription settings.
