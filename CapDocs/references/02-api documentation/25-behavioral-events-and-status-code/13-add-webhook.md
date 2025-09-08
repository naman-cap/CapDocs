---
title: Add Webhook
excerpt: >-
  A Webhook (also called a web callback or HTTP push API) is a way for an app to
  provide other applications with real-time information. A `webHookUri` is
  generated which can be used for the integration.
api:
  file: v2.json
  operationId: add-webhook
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
## Request Body Parameters

| Parameter              | Type    | Description                                                                                                                                                                                                   |
| :--------------------- | :------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| transformerType        | string  | Specifies the type of transformer used to process incoming webhook data.                                                                                                                                      |
| tillCode               | string  | Till code to associate with the current Webhook. Events posted through this Webhook’s URL will be linked to this store TILL.                                                                                  |
| authEnabled            | boolean | Enables authentication for the Webhook.                                                                                                                                                                       |
| authMechanism          | string  | Defines the authentication mechanism (e.g., Basic).                                                                                                                                                           |
| uniquenessCheckEnabled | boolean | Enables or disables the uniqueness check for events.                                                                                                                                                          |
| listenToChildEvents    | boolean | Applicable for connected orgs only. Enables or disables listening to child organization events. If enabled in a parent organization’s webhook, the webhook also receives events from its child organizations. |

```
{
    "transformerType": "WebEngageTransformer",
    "tillCode": "rutuja_capillary",
    "authEnabled": false,
    "authMechanism": "Basic",
    "uniquenessCheckEnabled": false
}
```
```Text listentoChildEvents
{ 
  "name": "exampleName",
  "eventNames": [],
  "webHookUrl": "https://example.com/webhook",
  "webHookType": "QUEUE_INT",
  "methodType": "POST",
  "webHookHeaders": {},
  "maxAllowedConnections": 20,
  "slaInSeconds": 30,
  "tillDetailsEnrichmentEnabled": false,
  "storeDetailsEnrichmentEnabled": false,
  "customerIdentifiersToBeEnriched": [],
  "awardedReferenceEnrichmentEnabled": false,
  "neoEnrichment": {},
  "noOfRetryAttempts": 0,
  "consumerGroupId": "",
  "availablePointsBalanceEnrichmentEnabled": false,
  "listenToChildEvents": true
}
```

## Response Parameters

| Parameter              | Type    | Description                                                                     |
| :--------------------- | :------ | :------------------------------------------------------------------------------ |
| transformerType        | string  | Indicates the transformer type used (e.g., `"WebEngageTransformer"`).           |
| uniquenessCheckEnabled | boolean | If `true`, duplicate events are filtered; if `false`, all events are processed. |
| tillCode               | string  | The Till code associated with the webhook for store mapping.                    |
| webHookUri             | string  | The auto-generated URL where events should be sent (unique to this webhook).    |
| authEnabled            | boolean | Indicates whether authentication is enabled (`true`/`false`).                   |
| warnings               | array   | Lists non-critical issues during webhook creation.                              |

```
{
    "transformerType": "WebEngageTransformer",
    "uniquenessCheckEnabled": false,
    "tillCode": "rutuja_capillary",
    "webHookUri": "https://spd6hzcltl.execute-api.eu-west-1.amazonaws.com/eucrm/webhooks/e4492fc546c93453ff177f356356a7b3",
    "authEnabled": false,
    "warnings": []
}
```
```
{
    "data": {
        "attribution": {
            "createdOn": "2025-08-01T11:08:16.807+0000",
            "lastUpdatedOn": "2025-08-01T11:08:16.807+0000",
            "lastUpdatedBy": {
                "id": 75074637,
                "code": "neestoretillssnee23",
                "description": "",
                "name": "neestoretillssnee23",
                "type": "TILL"
            },
            "createdBy": {
                "id": 75074637,
                "code": "neestoretillssnee23",
                "description": "",
                "name": "neestoretillssnee23",
                "type": "TILL"
            }
        },
        "webHookId": "688ca020a6a6cb077172c044",
        "name": "684464d788428927ce3ee59c31",
        "eventNames": [
            "customerAdded"
        ],
        "webHookUrl": " ",
        "webHookType": "QUEUE_INT",
        "methodType": "POST",
        "webHookHeaders": {
            "": ""
        },
        "noOfRetryAttempts": 0,
        "maxAllowedConnections": 20,
        "active": true,
        "slaInSeconds": 30,
        "consumerGroupId": "991b5b44-da37-402a-8938-d9695a43691c",
        "listenToChildEvents": true,
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

## API specific Error code

| Error Code | Description                            | Reason                                   |
| :--------- | :------------------------------------- | :--------------------------------------- |
| 1839       | auth mechanism not present             | `authenabled`field passed as false       |
| 1808       | customer event transformer not present | Invalid or unsupported `transformertype` |

For information on event uniqueness check, see [Event uniqueness check](https://docs.capillarytech.com/docs/setup-test-behavioral-events#enabling-uniqueness-check).