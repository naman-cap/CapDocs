---
title: JFM 2024 | Engage+ Release notes
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
# 1\. In app as a new communication channel

Keeping the demand of every marketer in mind and the rise of mobile first channels in different markets, we have added In app messaging as a one more channel to our portfolio. You know what is even more special about this channel ? This entire capability is powered by our very own Hydra SDK. 

In app messaging enables you to reach the customer when they are active on your app. So while you are already in the customer’s sight and their mind, you have that leverage to grab the customer’s attention one more time, right at the perfect moment. You can currently achieve the in-app communication in four different layouts as per your requirements - Full screen, Popup, Top banner, Bottom banner.

There's more on the roadmap - styling of the In app communication, drag and drop capability, HTML based configuration, ready-to-use feedback templates. Watch this space to hear more on the new launches. 

For the current capabilities, you can refer to the documentation [here](https://docs.capillarytech.com/docs/in-app-message).

![594484d InApp](https://files.readme.io/594484d-InApp.jpeg)

# 2\. Campaigns execution only after sync completion

Now at some point in our campaign's journey, we all have faced issues wherein due to unavoidable technical issues, EI sync cannot be completed as per the schedule. Due to this, the audience refresh is delayed and hence the recurring campaigns using an audience group, might not get executed as per the expectation. 

Hence, we have introduced a capability to execute a recurring campaign only when we have a confirmation that EI sync has happened and audience refresh is up to date. Know how to configure this for your brands [here.](https://docs.capillarytech.com/docs/options-to-schedule-messages#scheduling-messages-post-audience-sync-confirmation)

![ebd0fb3 Campaign Sync](https://files.readme.io/ebd0fb3-Campaign_Sync.png)

# 3\. Recurring message expiry alert

For brands who run recurring campaigns for longer durations, you now have a capability to set a reminder alert for the recurring campaigns that are approaching their end date. This will definitely take away all your hassles of re-configuring an entire campaign if it has expired. 

Know how to set it up for your brand [here.](https://docs.capillarytech.com/docs/report-notification-and-failure-alert-settings#recurring-message-expiry-alert)

![a5088ef Recurring message](https://files.readme.io/a5088ef-Recurring_message.png)

# 4\.  Test and Skip Wait capability in Journeys

**Current scenario:**\
Testing any Journey workflow today has been a very tedious process. One of the major reasons being that most journeys use Wait and Event based Wait blocks very commonly.

In such a case, if a brand has configured a wait block of 2 days, then during the testing, the brand actually has to wait for 2 days before they can be assured that the journey is working properly and the customer is moving to the next block as per the configurations.

**New scenario:**\
Brands can now skip the wait time and proceed to the next block immediately. This will help them save a lot of time while testing, and give much more flexibility in terms of the number of scenarios they want to test.

![d07f007 255a796 Skip wait ](https://files.readme.io/d07f007-255a796-Skip_wait_.gif)

To know more about how you can use this feature, read more [here](https://docs.capillarytech.com/docs/testpreview-journey). For brands using Journeys, do test out this feature and let us know the feedback !

# 5\. A/B Testing

A lot of loyalty engagement platforms give you the option of A/B testing your messages before deploying them. While most allow you to configure a basic test, they discount the intricacies involved in conducting modern marketing experiments. These include:

1. Audience size

A large sample size reduces the random variation and increases the reliability of an A/B test. This is particularly important in marketing A/B tests wherein emotions elicited by the test could dramatically skew outcomes.

Capillary’s A/B testing solution chooses the test audience at random. All you have to do is define the total number of test participants. We recommend including at least 20-30% of the total audience to conduct the test to improve reliability.

2. Test criteria

Not all A/B tests are created equal. And they certainly can’t be measured the same way. For instance, open rate can’t be the sole success metric for testing a conversion-focused message. Similarly, delivery rate cannot define the success of a message with an incentive. 

Capillary understands this and allows you to set custom test criteria to determine campaign success. You can choose up to 5 engagement and incentive KPIs in total, depending on the engagement channel, and test the effectiveness of the message. 

3. KPI weightage

The goal of the message must determine how you test it. For instance, sure, deliverability, open rates, and redemptions all matter when sending an incentive message. But redemptions matter most. And most loyalty engagement platforms don’t let you evaluate message success on such granular terms.

Capillary allows you to add weightage to individual KPIs, including incentive redemptions, to find the most impactful marketing message reliably.

![a81bc46 AB Testing](https://files.readme.io/a81bc46-AB_Testing.gif)

Learn more about setting up an A/B test within Journeys [here](https://docs.capillarytech.com/docs/ab-testing_overview#notification-on-the-ab-testing). And if you’re having any trouble with the setup, shoot an email to our CS team. They’ll get back to you.

# 6\. Adding Multiple WhatsApp numbers

Adding more numbers under 1 Whatsapp Account - This had been one of the most sought after (and rightly so) features for Whatsapp and we now support the same. You can request PST teams to add multiple numbers under a brand's whatsapp account which you can select to run campaigns from. Once the number is added, it would appear within the campaign delivery setting like this.

![dffd1e4 image](https://files.readme.io/dffd1e4-image.png)

You can read more on the documents page [here](https://docs.capillarytech.com/docs/delivery-settings#adding-a-new-whatsapp-number-to-the-source-account).

# 7.Ability to add Header and Footer in Whatsapp messages

You might have received messages like this from brands:

![98681fe image](https://files.readme.io/98681fe-image.png)

Brands can add such headers and footers to their whatsapp campaign and make it more engaging as well. [Here ](https://docs.capillarytech.com/docs/create-whatsapp-content)are more details on how to go about it.

# 8\. Quick Reply buttons on WhatsApp

Quick Reply buttons on WhtasApp are used to capture instant response by end users by making it easier for them to respond to a message through providing 2-3 options. These responses are stored and used as important insight to consumer behaviour. Here's how it looks like:

![c0be475 image](https://files.readme.io/c0be475-image.png)

[Here's](https://docs.capillarytech.com/docs/create-whatsapp-content) how you can add these quick reply buttons in your campaigns.

# SDK

## Android Hydra SDK

### [Version 1.4.3](https://github.com/Capillary/hydra-sdk-android-maven/packages/1780353) (February 3, 2024)

#### Redesigned layouts of Header and Footer type in-app messages

* The layouts for the Header and Footer type in-app messages is updated as per the given mockup.
* Primary CTA action is provided to all the components shown on in-app messages.
* Now user can click on the message text, image or the CTA button to perform the primary CTA action.

### [InApp Message - 1.0.2](https://github.com/Capillary/hydra-sdk-android-maven/packages/1863337?version=1.0.2)

## iOS Hydra SDK

### [Version 1.4.5](https://github.com/Capillary/hydra-sdk-ios-packages/releases/tag/1.4.5) (February 5, 2024)

#### Redesigned layouts of Header and Footer type in-app messages

* The layouts for the Header and Footer type in-app messages is updated as per the given mockup
* Primary CTA action is provided to all the components shown on in-app messages
* Now user can click on the message text, image or the CTA button to perform the primary CTA action
* Added support to send gateway and token information in the form of an array.
