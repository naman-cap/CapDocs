---
title: Manage WhatsApp Subscription
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
The WhatsApp Subscription Management feature allows you to handle user subscription statuses effectively and determine customer reachability via WhatsApp. Certain keywords, such as "opt in," "stop," and "unsubscribe," are defined in the code and are checked against the user's message to determine if they want to opt out of further communications from the brand. 

**Key concepts**

1. **User Subscription Status**: This is the status indicating whether a user has opted in or opted out of WhatsApp communications from a specific brand. This status determines the reachability of the user for sending WhatsApp messages.

2. **Reachability Calculation**: The reachability of a user is calculated based on their subscription status. If a user is opted in, they are reachable for messages. If opted out, they will not receive further messages from the brand.

3. **Subscription Management Flow**:

* **Opt-In and Opt-Out**: Users can manage their subscription status by replying with specific keywords (e.g., "STOP" or "UNSUBSCRIBE") to WhatsApp messages. This will trigger an event that updates their subscription status.
* **Reachability Updates**: Changes in subscription status are reflected in the reachability calculations, impacting whether the user will receive future communications.]

# Managing WhatsApp Subscription Status

* **For Opt-Out Requests**: Ensure that keywords like "STOP" or "UNSUBSCRIBE" are included in the messages as part of the response strategy.
* **For Opt-In Requests**: Design messages to allow users to re-subscribe with clear keywords.

## Use Cases

1. **User Opt-Out Scenario**

**Description**: A user receives a promotional WhatsApp message from a brand. They decide they no longer wish to receive messages from this brand and reply with "STOP."

**Flow**:

* The user's reply with the keyword "STOP" is captured as a user event.
* The event is processed and is identified that the user wants to opt-out.
* The user's subscription status is updated to "opt-out" in the subscription database.
* The reachability of this user is recalculated to reflect their opt-out status.

**Result**: The user will no longer receive any messages from the brand unless they opt in again.

2. **User Opt-In Scenario**

**Description**: After opting out previously, the same user decides to re-subscribe to the brand's WhatsApp messages by replying with "SUBSCRIBE."

**Flow**:

* The user's reply with the keyword "SUBSCRIBE" is processed as a user event.
* The event is processed updating the user's status back to "opt-in."
* The reachability of this user is recalculated to allow the reception of messages.

**Result**: The user starts receiving messages from the brand again.

3. **Unrelated Message Handling**

**Description**: A user sends a general message like "Hello" to a brand without opting in or out.

**Flow**:

* The message does not contain any subscription-related keywords.
* The event is processed, but no changes are made to the user's subscription status.
* The user remains in their current subscription status (opt-in or opt-out).

**Result**: The user continues to receive or not receive messages as per their existing subscription status.