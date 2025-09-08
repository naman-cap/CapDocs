---
title: JFM 2024 | CDP Releases
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
# Updates to Connect+

## 1. Behavioural Events' Ingestion Template

Connect+ introduces the Behavioral Events' Ingestion template which empowers our users to ingest Behavioral Events, as already configured in Org Settings Page, to our platform by uploading files containing these events and their attributes instead of directly receiving it through webhooks. Even retro events will be allowed to be ingested through this template. Users can seamlessly handle FTP locations, decrypt encrypted files, schedule triggers and map event attributes with a limitation of one single event per dataflow.

For more information, refer to the [user documentation](ttps://docs.capillarytech.com/docs/behavioural-events-ingestion).

## 2. Error Summary, Metrics and Logs

Connect+ brings you a dissection of your dataflow misses through error summaries and error logs!!

With our new dashboard, effortlessly navigate through the intricacies of error management, gaining a comprehensive overview of error occurrences and their associated blocks. Easily pinpoint the root causes of errors, as each block's contribution is meticulously unveiled, facilitating swift troubleshooting and enhancing your workflow efficiency. Delve deeper into specific error messages, armed with the frequency and block of occurrence, equipping you with the clarity needed to resolve issues with precision.

Do check it out [here](https://docs.capillarytech.com/docs/analyse-dataflow-performance)!

## 3. Metrics on Home Page

With our latest release, keeping an eagle eye on your dataflows has never been easier. Seamlessly access crucial metrics such as error counts and data processing accuracy directly from the Connect+ homepage. No more tedious navigation through individual dataflows to grasp the big picture – now, effortlessly monitor the health of your operations at a glance.

But that's not all – we've taken it a step further to empower your decision-making process. With the ability to view “Accuracy%”, and compare multiple dataflows side by side, evaluating performance and identifying trends has never been more straightforward.

Know more about it [here](https://docs.capillarytech.com/docs/connectplus_getting_started#analyze-dataflow-performance)!

## 4. Transformation Block Revamp

Are you tired of searching the relevant API fields in the Transformation Block? Afraid to make mistakes when typing out the headers for these API fields? Well, worry no more!!

We have revamped our current Transformation Block to equip it with dropdowns and the ability to pick headers from a sample file you gave to Connect+. This will help you easily navigate through the block resulting in a faster configuration of your dataflow in conjunction to lesser chances of making typos resulting in errors. 

Do check it out [here](https://docs.capillarytech.com/docs/configure-actions#transform-data)!

## 5. New Template: Audience Reload from FTP

Now Connect+ allows you to refresh files in an SFTP location at set intervals giving near real-time capabilities while empowering users to automatically update the audience lists that we have in Engage+ with the same name.

Know more about it [here](https://docs.capillarytech.com/docs/audience-reload-from-ftp)!

## 6. SFTP to SFTP with Headers Definition Template

Introducing the new SFTP to SFTP with Headers Definition Template – the ultimate solution for your file transfer woes! 

Now, you can seamlessly download, unzip, remap headers, and push files between servers with ease. Whether you're renaming columns from "TransactionAmount" to "trans\_value", adding missing headers or transforming the values of a column via expressions, this template ensures your data lands just the way you need it. 

Say goodbye to manual header adjustments and hello to streamlined transfers!

Do check it out [here](https://docs.capillarytech.com/docs/sftp-to-sftp-with-headers-definition)!

# New User Management

The new user management is live that helps org owners/admins to manage all other org users instead of being dependent on other teams for the same task. 

With this feature, users with special access (owner or admin) will be able to:

1. Adding new users to org - vial email and bulk
2. Assign role to user as "owner" or "standard" user - an owner would have complete access to an org, whereas a standard user may have access to limited entities like store, zone etc. 
3. Removing user(s) from an org
4. Assigning permissions for new and existing user(s).
5. Customise permission set(s) to suit the requirement of brand or vertical.
6. Update access level or permission(s) for user(s)

Do check out more details [here](https://docs.capillarytech.com/docs/onboard-intouch-users).

# New Request Workflow

Until now, Membercare had selected customer profile actions behind the maker-check approval flow. Once an action was put behind such a workflow - brands had a way to gate-keep critical user actions and track them efficiently.\
However, the user actions where such a maker checker flow was supported were selected & very standardized in nature. With the release of the new request workflow framework, we can now: 

1. Gate-keep new user actions quickly on the technical side.
2. Support brand-specific maker checker workflows, which were hitherto not feasible on the platform.

## What’s a maker checker flow?

Certain actions on user profiles are very critical & brands sometimes want to gate-keep them from either getting abused or to ensure the sanctity of customer data.\
Here, people want a workflow to gate-keep it - wherein a user would raise a request & some other users would approve it in a similar scenario.

## What features do the request workflow support?

Brands can use standard workflows - which come as an Out-of-box solution to cater to basic requirements around maker checker processes.\
These standard flows are designed to be parameterized in nature so that brands can add their brand-specific configurations.\
For example:

* Goodwill points upper cap
* Auto-approval feature.

Apart from this, we can now create & support more customized and complex use cases like:

* Multi-approval workflows
* Extension/complex logic-based validations
* Organization unit-specific maker checkers are now supported

**Caveat:** While customization features can now be supported on the product; it would still need to be created & set up by your service delivery team & involve relevant costs. 

User actions that are currently using the new request workflows:

* Change customer status
* Points redemption request
* Issue Goodwill points
* Earn Badge
* Issue Badge

# Expanded Channel Coverage in Send Communications API: Now Includes WhatsApp and Zalo

We have upgraded the send communications API and broadened its channel coverage to include WhatsApp and Zalo. For details, please go [here](https://docs.capillarytech.com/reference/v2-send-communication-message).

# Enhanced OTP Communication via WhatsApp and Zalo

More channel news: If your brand is using Capillary’s Authentication Engine as the identity manager, you can now start [sending authentication OTPs](https://docs.capillarytech.com/reference/authentication-configurations#integrating-whatsapp-and-zalo-for-otp-communication) to customers via WhatsApp and Zalo. 

# Configurable Account Locking for Enhanced Security

More Authentication Engine news: We can now configure a threshold for a number of incorrect OTP/password validation attempts after which the customer account gets locked. The locking period is also configurable. For implementation, please go [here](https://docs.capillarytech.com/reference/authentication-configurations#account-locking-feature).
