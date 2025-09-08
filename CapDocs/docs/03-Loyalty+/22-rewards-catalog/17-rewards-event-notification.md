---
title: Rewards Event Notification
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
An event notification is sent to the user for the following events:

* [Reward Creation](https://docs.capillarytech.com/docs/event-schema-payload#reward-created-event-rewardcreated)
* [Reward Issued](https://docs.capillarytech.com/docs/event-schema-payload#reward-issued-event-rewardissued)
* [Reward Updation](https://docs.capillarytech.com/docs/event-schema-payload#reward-updated-event-rewardupdated)
* [Issue Reward Failure](https://docs.capillarytech.com/docs/event-schema-payload#issue-reward-failure-event-issuerewardfailure)
* [Reward Expiry](https://docs.capillarytech.com/docs/event-schema-payload#reward-expiry-reminder-rewardexpiryreminder)

# Configuring Reward Expiry Event Notification

The Reward Expiry event notification enables you to proactively engage users by notifying them about expired rewards and manage notifications to reduce missed redemption opportunities, thereby increasing customer satisfaction and enhancing loyalty program engagement. Perform the following to configure an event notification for reward expiry.

1. Create a webhook URL and then [configure the event notification](https://docs.capillarytech.com/docs/configure_event_notification) settings.
2. Enable the Expiry feature using the [config](https://docs.capillarytech.com/reference/org-level-config).
3. [Configure ](https://docs.capillarytech.com/reference/create-reward-expiry-reminder)the event expiry duration and time. If needed, you can [update](https://docs.capillarytech.com/reference/update-reward-expiry-reminder) or [retrieve](https://docs.capillarytech.com/reference/get-reward-expiry-reminder) details of the reward expiry.
4. Test and verify the event notification
   1. Create a test reward with an upcoming expiry date
   2. Verify event configuration is enabled in UI
   3. Confirm API configuration is successful
   4. Check your webhook endpoint receives notifications
