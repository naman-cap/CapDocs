---
title: Add Webhook
excerpt: Add a new webhook.
api:
  file: v3.json
  operationId: add-v3-webhooks
deprecated: false
hidden: true
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
A Webhook (also called a web callback or HTTP push API) is a way for an app to provide other applications with real-time information. A webHookUrl is generated which can be used for the integration.

> 👍 Note
> 
> For detailed information about our APIs and for hands-on testing, refer documentation in [API overview](https://docs.capillarytech.com/reference/apioverview) and  step-by-step guide on making your first API call in [Make your first API call](https://docs.capillarytech.com/reference/make-your-first-api-call) .

# Prerequisites

-   Authentication - Basic or OAuth authentication details
-   Access group resource - Write permission on webhook resource group. 

# Resource information


|               |              |
| :------------ | :----------- |
| URL           | /v3/webHooks |
| HTTP method   | POST         |
| Pagination    | NA           |
| Rate limit    | NA           |
| Batch support | NA           |

# API endpoint example


\`

# Request body parameters


| Parameter  
(Parameters marked with \* are mandatory) | Type | Description |
| --- | --- | --- |
| active\* | Boolean | Indicates if the webhook is active. |
| customerIdentifiersToBeEnriched\* | Array | List of customer identifiers to be enriched. |
| eventNames\* | Array | List of event names that trigger the webhook.  
**Note**: At least one event name is required. |
| maxAllowedConnections\* | Integer | Maximum connections allowed at the same time for this webhook. |
| methodType\* | String | HTTP method used by the webhook. **Example:** `POST`, `PUT`,` GET` or `DELETE`. |
| name\* | String | Name of the webhook.  
**Note:** Name of the webhook should be unique. |
| slaInSeconds | Integer | Expected delivery time of the [event notification](https://docs.capillarytech.com/docs/configure_event_notification) in seconds.  |
| webHookHeaders\* | Array | Headers sent with the webhook request. |
| - Authorization | String | Authorization header for authentication. |
| - Content-Type | String | Specifies the content, **Example:** `application/json` |
| webHookType\* | String | Type of webhook, **Example:** `HTTP` |
| webHookUrl\* | String | URL where the webhook sends its requests. |

```json
 {
  "active": true,
  "customerIdentifiersToBeEnriched": [],
  "eventNames": [
    "loyaltyCustomerMerge",
    "partnerProgramLinked",
    "pointsExpired",
    "customerAdded",
    "transactionUpdated",
    "groupUpdated",
    "promisedToCurrentPointsConversion",
    "pointsTransferredReceived",
    "groupMemberRemoved",
    "groupCreated",
    "partnerProgramUpdated",
    "pointsIssued",
    "tierDowngradeReminder",
    "pointsContributionToGroup",
    "CouponRedeem",
    "pointsExpiryReminder",
    "partnerProgramDelinked",
    "CouponIssue",
    "tierRenewed",
    "tierDowngraded",
    "pointsTransferredInitiated",
    "customerUpdated",
    "tierUpgraded",
    "rewardIssued",
    "pointsExpiryChange",
    "rewardUpdated",
    "supplementaryMembershipExpiryReminder",
    "singlePointsExpiryUpdated",
    "issuedPointsReversed",
    "redeemedPointsReversed"
  ],
  "maxAllowedConnections": 10,
  "methodType": "POST",
  "name": "test_post_webhook_12345",
  "slaInSeconds": 150,
  "webHookHeaders": {
    "Authorization": "Basic Q2FwaWxsYXJ5OxzYkdGeWVVQTROekl5",
    "Content-Type": "application/json"
  },
  "webHookType": "HTTP",
  "webHookUrl" : "http:/intouch-api-v3.default"
 }
``<code>

# Response parameters


block:parameters
{
  "data": {
    "h-0": "Parameter",
    "h-1": "Description",
    "0-0": "data",
    "0-1": "Contains main details about the webhook configuration.",
    "1-0": "- attribution",
    "1-1": "Metadata about the creation and last update of the webhook.",
    "2-0": "\\-- createdOn",
    "2-1": "Timestamp when the webhook was created. It is in the local time zone of the org and in ISO 8601 format.",
    "3-0": "\\-- lastUpdatedOn",
    "3-1": "Timestamp when the webhook was last updated. It is in the local time zone of the org and in ISO 8601 format.",
    "4-0": "\\-- lastUpdatedBy",
    "4-1": "Information about the user who last updated the webhook.",
    "5-0": "\\--- id",
    "5-1": "Unique identifier of the user.",
    "6-0": "\\--- code",
    "6-1": "Code of the user.",
    "7-0": "\\--- description",
    "7-1": "Description of the user.",
    "8-0": "\\--- name",
    "8-1": "Name of the user.",
    "9-0": "\\--- type",
    "9-1": "Type of user. **Example: ** </code>TILL<code>",
    "10-0": "\\-- createdBy",
    "10-1": "Information about the user who created the webhook.",
    "11-0": "\\--- id",
    "11-1": "Unique identifier of the user.",
    "12-0": "\\--- code",
    "12-1": "Code of the user.",
    "13-0": "\\--- description",
    "13-1": "Description of the user.",
    "14-0": "\\--- name",
    "14-1": "Name of the user.",
    "15-0": "\\--- type",
    "15-1": "Type of user. **Example: ** </code>TILL<code>",
    "16-0": "webHookId",
    "16-1": "Unique identifier of the webhook.",
    "17-0": "name",
    "17-1": "Name of the webhook.  \n**Note:** Name of the webhook should be unique.",
    "18-0": "eventNames",
    "18-1": "List of event names that trigger the webhook.",
    "19-0": "webHookUrl",
    "19-1": "URL where the webhook sends its requests.",
    "20-0": "webHookType",
    "20-1": "Type of webhook, **Example:** </code>HTTP`",
    "21-0": "methodType",
    "21-1": "HTTP method used by the webhook. **Example:** `POST<code>, </code>PUT<code>,</code> GET<code> or </code>DELETE`.",
    "22-0": "webHookHeaders",
    "22-1": "Headers sent with the webhook request.",
    "23-0": "- Authorization",
    "23-1": "Authorization header for authentication.",
    "24-0": "- Content-Type",
    "24-1": "Specifies the content, **Example:** `application/json<code>",
    "25-0": "noOfRetryAttempts",
    "25-1": "Number of retry attempts allowed.",
    "26-0": "maxAllowedConnections",
    "26-1": "Maximum connections allowed at the same time for this webhook.  \n**Note:** Minimum one concurrent connection is required.",
    "27-0": "active",
    "27-1": "Indicates if the webhook is active.",
    "28-0": "slaInSeconds",
    "28-1": "Expected delivery time of the [event notification](https://docs.capillarytech.com/docs/configure_event_notification) in seconds. ",
    "29-0": "consumerGroupId",
    "29-1": "Identifier for the consumer group.",
    "30-0": "tillDetailsEnrichmentEnabled",
    "30-1": "Indicates if the event payload is enriched with till details.",
    "31-0": "storeDetailsEnrichmentEnabled",
    "31-1": "Indicates if the event payload is enriched with store details.",
    "32-0": "customerIdentifiersToBeEnriched",
    "32-1": "List of customer identifiers enrichment available in the payload.",
    "33-0": "awardedReferenceEnrichmentEnabled",
    "33-1": "Indicates if the event payload is enriched with [awarded reference ID](https://docs.capillarytech.com/docs/add-event-notification-account). It is a unique identifier associated with each issued point or redemption transaction within the system.",
    "34-0": "availablePointsBalanceEnrichmentEnabled",
    "34-1": "Indicates if the event payload is enriched with available points balance.",
    "35-0": "errors",
    "35-1": "Array containing errors, if any.",
    "36-0": "warnings",
    "36-1": "Array containing warnings, if any."
  },
  "cols": 2,
  "rows": 37,
  "align": [
    null,
    null
  ]
}
/block

```json

Sample Response
{
    "data": {
        "attribution": {
            "createdOn": "2024-10-28T08:05:44.665+0000",
            "lastUpdatedOn": "2024-10-28T08:05:44.665+0000",
            "lastUpdatedBy": {
                "id": 75121810,
                "code": "test_123",
                "description": "",
                "name": "test_123",
                "type": "TILL"
            },
            "createdBy": {
                "id": 75121810,
                "code": "test_123",
                "description": "",
                "name": "test_123",
                "type": "TILL"
            }
        },
        "webHookId": "671f45d8760af000077b19f8",
        "name": "test_post_webhook_12345",
        "eventNames": [
            "loyaltyCustomerMerge",
            "partnerProgramLinked",
            "pointsExpired",
            "customerAdded",
            "transactionUpdated",
            "groupUpdated",
            "promisedToCurrentPointsConversion",
            "pointsTransferredReceived",
            "groupMemberRemoved",
            "groupCreated",
            "partnerProgramUpdated",
            "pointsIssued",
            "tierDowngradeReminder",
            "pointsContributionToGroup",
            "CouponRedeem",
            "pointsExpiryReminder",
            "partnerProgramDelinked",
            "CouponIssue",
            "tierRenewed",
            "tierDowngraded",
            "pointsTransferredInitiated",
            "customerUpdated",
            "tierUpgraded",
            "rewardIssued",
            "pointsExpiryChange",
            "rewardUpdated",
            "supplementaryMembershipExpiryReminder",
            "singlePointsExpiryUpdated",
            "issuedPointsReversed",
            "redeemedPointsReversed"
        ],
        "webHookUrl": "http:/intouch-api-v3.default",
        "webHookType": "HTTP",
        "methodType": "POST",
        "webHookHeaders": {
            "Authorization": "Basic Q2FwaWxsYXJ5GeWVVQTROekl5",
            "Content-Type": "application/json"
        },
        "noOfRetryAttempts": 0,
        "maxAllowedConnections": 10,
        "active": true,
        "slaInSeconds": 150,
        "consumerGroupId": "f7ea2579-28e2-4179-96da-fb271b17601c",
        "tillDetailsEnrichmentEnabled": false,
        "storeDetailsEnrichmentEnabled": false,
        "customerIdentifiersToBeEnriched": [],
        "awardedReferenceEnrichmentEnabled": false,
        "availablePointsBalanceEnrichmentEnabled": false
    },
    "errors": null,
    "warnings": null
}

```

# API error codes


| Error Code | Description                                                |
| :--------- | :--------------------------------------------------------- |
| 51003      | `eventNames` can not be null                               |
| 51007      | `maxAllowedConnections` must be greater than zero          |
| 300004     | `maxAllowedConnections` is missing from the body parameter |