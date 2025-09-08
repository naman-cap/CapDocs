---
title: Test & Publish Event
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
Once you create an event, you need to test and publish it. To test an event, you can either pass the data in the supported format either in the code from where you want to implement or through API. To test event data, you will need the following.

1. Get the Webhook URL of the respective integration.
2. Get the JSON payload of the event that contains all the necessary and optional parameters as configured.
3. POST event data to the Webhook URL.
4. Publish the event (If the data is pushed to Webhook successfully).

The detailed instructions on each step are provided in the following.

1. **Copy the JSON payload of the event. This will contain the parameters to pass for the event**.

To get the JSON payload, follow these steps.

```
1. Click on the event that you want to test and navigate to the { }**Code** tab.
```

![c25a25d CWUD9D1I1ySC5Ch1WKsaayE9I7Rl5QQJrA](https://files.readme.io/c25a25d-CWUD9D1I1ySC5Ch1WKsaayE9I7Rl5QQJrA.png)

2. Copy the JSON and paste it on a Notepad.

2\. **Copy the Webhook or custom URL to which you want to post the data.**

1. On the Behavioral Events home page, navigate to the Webhook tab.

![6525302 lWZv4Iq5ssF Ckc5FTwwjTW9sYF7HPS8PQ](https://files.readme.io/6525302-lWZv4Iq5ssF_Ckc5FTwwjTW9sYF7HPS8PQ.png)

2. Copy the Webhook URL for which you want to test and past it on a Notepad.

3. **Send sample data**

   1. Using the Webhook URL, and the JSON, invole POST API call with some valid parameter details (No authentication required). 

![fc8a47b k8mSEBdgQjWt4VHQghBZGtH1eA0I8bVlcA](https://files.readme.io/fc8a47b-k8mSEBdgQjWt4VHQghBZGtH1eA0I8bVlcA.png)

> 📘 The response does not mean that the event has passed the validation successfully. You need to check the Dashboard page if the Testing is successful.

2. Refresh the Behavioral Events page to see the changes.
3. If the validation is successful, you will see the status change from Testing Pending to Publish.

![be0d4b4 cl0DAz5cmIgrATyReKkaZYXbUFCjDyhmaQ](https://files.readme.io/be0d4b4-cl0DAz5cmIgrATyReKkaZYXbUFCjDyhmaQ.png)

4. Click **Publish** to publish the event.
