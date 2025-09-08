---
title: FAQs
deprecated: false
hidden: false
metadata:
  robots: index
---
**Q1: Can an email be sent that allows a member to change their status (for example, opt out of the program)? Can this be achieved by adding a prebuilt option within the email?**

A: No, adding a prebuilt option in the email to change a member’s program status is not possible. Member account deletion or status change can only be done through Member Care. From email, you can only capture opt-in/opt-out confirmations for subscriptions, which apply to communication preferences, not program status.

**Q2: A customer’s status was changed from Unsubscribed to Subscribed in Member Care, an email was sent but did not reach the customer. Does the status change take time to reflect, causing a delay in email delivery?**

A: Yes. Since the data is computed from Insights, it takes up to 24 hours for the update to reflect.

**Q3: How should the bounce “Email message does not meet the recipient server’s policies” be classified?**

A: This bounce is classified as a hard bounce. In Capillary reporting, a hard bounce is a permanent email delivery failure for example, when the recipient server rejects the message due to policy violations such as content restrictions, authentication issues, or security rules. For details, see the [Reachability computation](https://docs.capillarytech.com/docs/understand-audience-reachability-status#/reachability-computation) documentation.

**Q4: Is there a way to control or pass a customer’s language when sending emails through Engage+?**

A: Yes, but only for subscription emails. You can use the CONF_ORG_SUBSCRIPTION_UPDATE_MSG config to pass a customer’s language. The system uses the request’s language code, else the default config, and defaults to English if none is set. For other types of emails, language control is not available. For details see [Subscription Message Language Configuration](https://docs.capillarytech.com/docs/subscription_management#/subscription-message-language-configuration).

**Q5: Is there documentation available for email tags, since the value names are unclear and may represent different values?**

A: Yes, documentation is available. For details, see [Supported Labels for Engagement Channels](https://docs.capillarytech.com/docs/supported-labels-for-engagement-channels#/).

**Q6: What can be done if a user does not receive the registration email?**

A: If the automatic registration email doesn’t arrive, you can send the invite link manually. The link is valid for 24 hours. If it expires, generate a new one. For details, see [Sending User Registration Invite Link Manually](https://docs.capillarytech.com/docs/onboarding-user#/sending-user-registration-invite-link-manually).

**Q7: In the sendCommunication API, if HTML tags are included in the email body parameter, are they rendered as formatted content (HTML) in the email, or displayed as plain text?**

A: HTML in the email body is rendered as HTML (formatted content), not as plain text. For more details see [Configure email content](https://docs.capillarytech.com/docs/configure-email-content#creating-a-new-email-template-from-scratch)
