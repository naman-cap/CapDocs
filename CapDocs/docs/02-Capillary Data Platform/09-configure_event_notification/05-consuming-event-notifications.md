---
title: Consuming event notifications
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
## Authentication

Every event is sent with the Webhook’s configured authentication header which can be used for integration to authenticate the Webhook.

# Handling event notification failures

An event notification fails whenever the event notifications do not get delivered to the Webhook. To make sure that the event notifications are delivered to the Webhook’s configured URL, Capillary analyses these failures and executes the retries accordingly. 

The failures are classified into two categories: 

1. Non-Retriable 
2. Retriable.

## Non-retriable failures

Non-Retriable failures include issues such as `400 Bad Request errors`, which are unrecoverable, regardless of the number of retry attempts made. As a result, these events are permanently marked as failures and are not subject to further retry.

## Retriable failures

Retriable failures, such as `429 Too Many Request errors`, are not specific to individual events but rather are based on the overall load or traffic of requests being sent to the system.

When there are retrievable failures, the system uses a retry mechanism instead of continuously checking for new events. This mechanism involves resending the same event that encountered the failure for processing. This approach gives the system a chance to recover from Retriable failures caused by high request loads without overloading it with repeated requests

The retry strategy used includes exponential backoff. Exponential backoff is a delay strategy where the system waits for extended periods before attempting to resend the event. This helps prevent overwhelming the system with repeated requests.

This retry strategy continues for at least 7 days. During this time, the system keeps attempting to process the failed event. If it still cannot process, after this duration, it moves on to the next event in the processing queue.

You can access detailed event information, including its current status, statistics, and detailed error messages in the event of a failure, through the event's log API endpoint, using the unique requestId associated with that particular event. For more information, refer to the documentation [Tracking Request](https://docs.capillarytech.com/reference/apioverview#tracking-request).

## Idempotency Check

A timed-out event is an event that is received by the server, but a successful response is not sent back to Capillary. The event is again sent to the Webhook URL. Hence, Hence, the integration backend or server should be able to handle the same event multiple times.

A duplicate event can be identified by the “eventId” parameter in the event payload:

```json
{
"eventName": “customerAdded”,
"eventId": “GSjhsJ87484SdghD4747”,
“orgId”: 1655
“refId”: “1655_684494987”,
“apiRequestId”: “sdjsj78378d3287”,
"createdAt": 156474848484,
}
```

> 📘
>
> If there is a duplicate eventId, the event should be ignored.

## Data Enrichment

Event payload contains short and optimal information. It does not contain complete information about its entities. For example, a transaction event contains identifiers and basic transaction information but does not contain other information such as custom fields, extended fields, or line item level information. To get complete information about an entity, you need to use the respective APIs.

Refer to Event Payload to view the list of events and fields that are sent in the event notification.

## Change Data Capture

Update events such as customerUpdated, and transactionUpdated only notify that some update has occurred in the associated entities, but not contain information about the change in the entities. To identify the exact change, the integration service needs to call the respective APIs.
