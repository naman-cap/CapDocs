---
title: Configure Link Tracking in SMS
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
To understand the usage of links sent out through SMS campaigns, tracking of links in SMS is essential. Link tracking lets orgs capture metrics that state how many users have clicked on a link sent in SMS and the total number of clicks on a link.

Link tracking is not enabled by default. You need to create a ticket assigning it to the Capillary support team.

Due to the DLT compliance restrictions in India, you need to add the link through a variable tag only so that the whitelisted template does not get affected.

Once enabled, you can insert the link in SMS using the respective variable tag **\{#var#}**. 

This is applicable for

* One-time SMS campaign
* Recurring SMS campaign
* Coupon expiry reminders and messages resend 

<Note title="Note">
Adding links outside the \{#var#} tag will result in the template mismatch leading to delivery failure.
</Note>

The system replaces the mentioned link with an internal tiny URL. The link added by the user would be transformed. 

For example, if the link is [www.google.com](http://www.google.com), it could be changed to s.cplry.com/7383936D89.

Changing the link would also affect the characters of the SMS script. 

For example, if the replaced link is 20-22 characters in length, the SMS character count can be changed by 15 characters (either add or remove).

## Track SMS links on Insights+

Once the SMS is sent, you can track the link metrics using Insights+ as explained in the following.

1. Log on to InTouch navigate to Menu > **Insights+**.
2. Navigate to the report that you want to track.
3. For your chart, you will be able to track the following metrics of SMS links.

* **Unique Click Count** - Get the number of unique clicks on the link.
* **Total Click Count** - Get the number of total clicks on the link.

4. Add a communication channel, if required, as a dimension to get data for each communication channel.