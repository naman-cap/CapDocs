---
title: Add Webhook Integration
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
Webhook facilitates pushing real-time data from a third-party application or website to the Capillary database through a web callback or HTTP push API. A Webhook integration is a combination of a third-party app and Till code. For every Webhook integration you create, a unique URL is generated. The respective third-party apps need to make a POST call to the URL passing events data.

There are two types of integrations

* **WebEngage integration** to capture events data from WebEngage platform.
* **Custom integration** to capture events data from other platforms or apps other than WebEngage.

To create a Webhook integration, follow these steps.

1. Click **Create Webhook.**
2. Choose WebEngage for WebEngage integration, else choose Custom for integration with other apps.
3. In **Select till code**, choose the Till code that you want to associate the selected source. If an event has the attribute **Till Code**, then the Till Code that is captured for the event will be considered as a default one.
4. Click **Done** 

![5ac323a CH RwSGWXG2jh4sqqiuvudOFCR88p327rA](https://files.readme.io/5ac323a-CH_RwSGWXG2jh4sqqiuvudOFCR88p327rA.png)

You need to use the integration URL to [POST event data to Webhook](https://capillary.github.io/api-documentation/#event-fields-mapping-for-events-with-custom-fields) through an API call.

> 📘 * If an event has the Till Code attribute, then the till code tagged in the Webhook or any other integration will not be considered.
