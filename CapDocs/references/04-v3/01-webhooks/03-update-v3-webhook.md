---
title: Update Webhook
excerpt: Update an existing webhook.
api:
  file: v3.json
  operationId: update-v3-webhook
deprecated: false
hidden: true
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
# API endpoint example


\`

# Prerequisites

-   Authentication - Basic or OAuth authentication details
-   Access group resource - Read and write permission on webhook resource group.

# Resource information


|                       |                          |
| :-------------------- | :----------------------- |
| URL                   | /v3/webHooks`\{webHookId\}` |
| HTTP method           | PUT                      |
| Pagination supported? | NA                       |
| Rate limit            | NA                       |
| Batch support         | NA                       |

# Request path parameters


| Parameter  
(Parameters marked with \* are mandatory) | Type | Description |
| --- | --- | --- |
| webHookId\* | String | Identifier for the webhook. |

# Request body parameters


| Parameter  
(Parameters marked with \* are mandatory)  |  Type | Description |
| --- | --- | --- |
| active | Boolean | Indicates if the webhook is active. |
| customerIdentifiersToBeEnriched | Array | List of customer identifiers enrichment available in the payload. |
| eventNames | Array | List of event names that trigger the webhook. At least one event name is required.  |
| maxAllowedConnections | Integer | Maximum allowed concurrent connections for this webhook.  
**Note:** Minimum one concurrent connection is required. |
| methodType | String | HTTP method used by the webhook. **Example:** `POST`, `PUT`,` GET` or `DELETE`. |
| name | String | Name of the webhook. |
| slaInSeconds | Integer | Expected delivery time of the [event notification](https://docs.capillarytech.com/docs/configure_event_notification)  in seconds. This is used to track notifications that took more time than the SLA set. |
| webHookHeaders | Array | Headers sent with the webhook request. |
| - Authorization | String | Authorization header for authentication. |
| - Content-Type | String | Specifies the content, **Example:** `application/json` |
| webHookType | String | Type of webhook, **Example:** `HTTP` |
| webHookUrl | String | URL where the webhook sends its requests. |

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
    "pointsTransferredInitiated"
  ],
  "maxAllowedConnections": 10,
  "methodType": "PUT",
  "name": "test_post_webhook_1234",
  "slaInSeconds": 150,
  "webHookHeaders": {
    "Authorization": "Basic Q2FwaWxsYXJ5OkleWVVQTROekl5",
    "Content-Type": "application/json"
  },
  "webHookType": "HTTP",
  "webHookUrl" : "http:/eu.api.capillarytech.com"
 }
```

# Response parameters


| Parameter | Description |
| --- | --- |
| data | Contains the main data for the webhook configuration. |
| - attribution | Metadata about the creation and last update of the webhook. |
| \-- createdOn | Timestamp when the webhook was created. It is in the local time zone of the org and in ISO 8601 format. |
| \-- lastUpdatedOn | Timestamp when the webhook was last updated. It is in the local time zone of the org and in ISO 8601 format. |
| \-- lastUpdatedBy | Information about the user who last updated the webhook. |
| \--- id | Unique identifier of the user. |
| \--- code | Code of the user. |
| \--- description | Description of the user. |
| \--- name | Name of the user. |
| \--- type | Type of user. **Example: ** `TILL` |
| \-- createdBy | Information about the user who created the webhook. |
| \--- id | Unique identifier of the user. |
| \--- code | Code of the user. |
| \--- description | Description of the user. |
| \--- name | Name of the user. |
| \--- type | Type of user. **Example: ** `TILL` |
| webHookId | Unique identifier of the webhook. |
| name | Name of the webhook. |
| eventNames | List of event names that trigger the webhook. |
| webHookUrl | URL where the webhook sends its requests. |
| webHookType | Type of webhook, **Example:** `HTTP` |
| methodType | HTTP method used by the webhook. **Example:** `POST`, `PUT`,` GET` or `DELETE`. |
| webHookHeaders | Headers sent with the webhook request. |
| - Authorization | Authorization header for basic authentication. |
| - Content-Type | Specifies the content, **Example:** `application/json` |
| noOfRetryAttempts | Number of retry attempts configured. |
| maxAllowedConnections | Maximum allowed concurrent connections for this webhook.  
**Note:** Minimum one concurrent connection is required. |
| active | Indicates if the webhook is active. |
| slaInSeconds | Expected delivery time of the event notification in seconds. This is used to track notifications that took more time than the SLA set. |
| consumerGroupId | Identifier for the consumer group. |
| tillDetailsEnrichmentEnabled | Indicates if the event payload is enriched with till details. |
| storeDetailsEnrichmentEnabled | Indicates if the event payload is enriched with store details |
| customerIdentifiersToBeEnriched | List of customer identifiers enrichment available in the payload. |
| awardedReferenceEnrichmentEnabled | Indicates if the event payload is enriched with [awarded reference ID](https://docs.capillarytech.com/docs/add-event-notification-account) . It is a unique identifier associated with each issued point or redemption transaction within the system. |
| availablePointsBalanceEnrichmentEnabled | Indicates if the event payload is enriched with available points balance. |
| errors | Array containing errors, if any. |
| warnings | Array containing warnings, if any. |

```json
Example JSON
{
    "data": {
        "attribution": {
            "createdOn": "2024-10-25T11:43:34.087+0000",
            "lastUpdatedOn": "2024-10-28T06:44:05.025+0000",
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
        "webHookId": "671b8466760af0000761b640",
        "name": "test_post_webhook_1234",
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
            "pointsTransferredInitiated"
        ],
        "webHookUrl": "http:/eu.api.capillarytech.com",
        "webHookType": "HTTP",
        "methodType": "PUT",
        "webHookHeaders": {
            "Authorization": "Basic Q2FwaWxsYXJ5OklVTmhWVVQTROekl5",
            "Content-Type": "application/json"
        },
        "noOfRetryAttempts": 0,
        "maxAllowedConnections": 10,
        "active": true,
        "slaInSeconds": 150,
        "consumerGroupId": "8fb2fdec-53ba-44de-bce9-82eedcb29026",
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
| 400        | `webHookId` is invalid                                     |