---
title: Get Webhook
excerpt: Retrieve details of all the webhooks.
api:
  file: v3.json
  operationId: get-v3-webhooks
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

# Prerequisite

-   Authentication - Basic or OAuth authentication details
-   Access group resource - Read permission on webhook resource group.

# Resource information


|                       |               |
| :-------------------- | :------------ |
| URL                   | /v3/webHooks |
| HTTP method           | GET           |
| Pagination supported? | No            |
| Rate limit            | NA            |
| Batch support         | NA            |

# Sample request


```bash
curl --location 'http:/eu.api.capillarytech.com/v3/webHooks' \
--header 'Authorization: Basic b3JnMi50aWxsMToyMDJjYjNzViOTY0YjA3MTUyZDIzNGI3MA==' - GET webhooks call.
```

# Response parameters


| Parameter                               | Description                                                                                                                                                                                                                                           |
| --------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| data                                    | Contains the main data for the webhook configuration.                                                                                                                                                                                                 |
| - attribution                           | Metadata about the creation and last update of the webhook.                                                                                                                                                                                           |
| \-- createdOn                           | Timestamp when the webhook was created. It is in the local time zone of the org and in ISO 8601 format.                                                                                                                                               |
| \-- lastUpdatedOn                       | Timestamp when the webhook was last updated. It is in the local time zone of the org and in ISO 8601 format.                                                                                                                                          |
| \-- lastUpdatedBy                       | Information about the user who last updated the webhook.                                                                                                                                                                                              |
| \--- id                                 | Unique identifier of the user.                                                                                                                                                                                                                        |
| \--- code                               | Code of the user.                                                                                                                                                                                                                                     |
| \--- description                        | Description of the user.                                                                                                                                                                                                                              |
| \--- name                               | Name of the user.                                                                                                                                                                                                                                     |
| \--- type                               | Type of user. **Example:** `TILL`                                                                                                                                                                                                                     |
| \-- createdBy                           | Information about the user who created the webhook.                                                                                                                                                                                                   |
| \--- id                                 | Unique identifier of the user.                                                                                                                                                                                                                        |
| \--- code                               | Code of the user.                                                                                                                                                                                                                                     |
| \--- description                        | Description of the user.                                                                                                                                                                                                                              |
| \--- name                               | Name of the user.                                                                                                                                                                                                                                     |
| \--- type                               | Type of user. **Example:** `TILL`                                                                                                                                                                                                                     |
| webHookId                               | Unique identifier of the webhook.                                                                                                                                                                                                                     |
| name                                    | Name of the webhook.                                                                                                                                                                                                                                  |
| eventNames                              | List of event names that trigger the webhook.                                                                                                                                                                                                         |
| webHookUrl                              | URL where the webhook sends its requests.                                                                                                                                                                                                             |
| webHookType                             | Type of webhook, **Example:** `HTTP`                                                                                                                                                                                                                  |
| methodType                              | HTTP method used by the webhook. **Example:** `POST`, `PUT`,` GET` or `DELETE`.                                                                                                                                                                       |
| webHookHeaders                          | Headers sent with the webhook request.                                                                                                                                                                                                                |
| - Authorization                         | Authorization header for authentication.                                                                                                                                                                                                              |
| - Content-Type                          | Specifies the content, **Example:** `application/json`                                                                                                                                                                                                |
| noOfRetryAttempts                       | Number of retry attempts configured.                                                                                                                                                                                                                  |
| maxAllowedConnections                   | Maximum allowed concurrent connections for this webhook.                                                                                                                                                                                              |
| active                                  | Indicates if the webhook is active.                                                                                                                                                                                                                   |
| slaInSeconds                            | Expected delivery time of the [event notification](https://docs.capillarytech.com/docs/configure_event_notification)  in seconds. This is used to track notifications that took more time than the SLA set.                                           |
| consumerGroupId                         | Identifier for the consumer group.                                                                                                                                                                                                                    |
| tillDetailsEnrichmentEnabled            | Indicates if the event payload is enriched with till details.                                                                                                                                                                                         |
| storeDetailsEnrichmentEnabled           | Indicates if the event payload is enriched with store details                                                                                                                                                                                         |
| customerIdentifiersToBeEnriched         | List of customer identifiers enrichment available in the payload.                                                                                                                                                                                     |
| awardedReferenceEnrichmentEnabled       | Indicates if the event payload is enriched with [awarded reference ID](https://docs.capillarytech.com/docs/add-event-notification-account) . It is a unique identifier associated with each issued point or redemption transaction within the system. |
| availablePointsBalanceEnrichmentEnabled | Indicates if the event payload is enriched with available points balance.                                                                                                                                                                             |

```json
{
    "data": [
        {
            "attribution": {
                "createdOn": "2020-04-15T14:01:50.448+0000",
                "lastUpdatedOn": "2020-08-19T15:57:16.042+0000",
                "lastUpdatedBy": {
                    "id": 75025546,
                    "code": "1536234541_",
                    "description": "",
                    "name": "Manishkumar prasad",
                    "type": "ADMIN_USER"
                },
                "createdBy": {
                    "id": 75029724,
                    "code": "changi.str.till_3",
                    "description": "",
                    "name": "changi.str.till_3",
                    "type": "TILL"
                }
            },
            "webHookId": "5e9713cec64f3d00085d7eea",
            "name": "webhook01",
            "eventNames": [
                "transactionAdded"
            ],
            "webHookUrl": "https://enwkypi8i3l8.x.pipedream.net",
            "webHookType": "HTTP",
            "methodType": "POST",
            "webHookHeaders": {
                "Authorization": "Basic xrty==",
                "Content-Type": "application/json"
            },
            "noOfRetryAttempts": 0,
            "maxAllowedConnections": 20,
            "active": false,
            "slaInSeconds": 30,
            "consumerGroupId": "83df8d8e-772c-46d7-8f21-a79f7b868db6",
            "tillDetailsEnrichmentEnabled": false,
            "storeDetailsEnrichmentEnabled": false,
            "customerIdentifiersToBeEnriched": [],
            "awardedReferenceEnrichmentEnabled": false,
            "availablePointsBalanceEnrichmentEnabled": false
        },
        {
            "attribution": {
                "createdOn": "2020-04-15T15:22:41.735+0000",
                "lastUpdatedOn": "2020-08-19T15:59:52.043+0000",
                "lastUpdatedBy": {
                    "id": 75025546,
                    "code": "1536234541_",
                    "description": "",
                    "name": "Manishkumar prasad",
                    "type": "ADMIN_USER"
                },
                "createdBy": {
                    "id": 75029724,
                    "code": "changi.str.till_3",
                    "description": "",
                    "name": "changi.str.till_3",
                    "type": "TILL"
                }
            },
            "webHookId": "5e9726c1c64f3d00085d7ef7",
            "name": "webhook02",
            "eventNames": [
                "transactionAdded"
            ],
            "webHookUrl": "https://enwkypi8i3l8.x.pipedream.net",
            "webHookType": "HTTP",
            "methodType": "POST",
            "webHookHeaders": {
                ": "
            },
            "noOfRetryAttempts": 0,
            "maxAllowedConnections": 20,
            "active": true,
            "slaInSeconds": 30,
            "consumerGroupId": "3be76731-8053-4cd9-9d5f-15a5cb596fe7",
            "tillDetailsEnrichmentEnabled": false,
            "storeDetailsEnrichmentEnabled": false,
            "customerIdentifiersToBeEnriched": [],
            "awardedReferenceEnrichmentEnabled": false,
            "availablePointsBalanceEnrichmentEnabled": false
        },
        {
            "attribution": {
                "createdOn": "2020-04-15T15:26:36.557+0000",
                "lastUpdatedOn": "2020-08-19T15:59:36.835+0000",
                "lastUpdatedBy": {
                    "id": 75025546,
                    "code": "1536234541_",
                    "description": "",
                    "name": "Manishkumar prasad",
                    "type": "ADMIN_USER"
                },
                "createdBy": {
                    "id": 75029724,
                    "code": "changi.str.till_3",
                    "description": "",
                    "name": "changi.str.till_3",
                    "type": "TILL"
                }
            },
            "webHookId": "5e9727acc64f3d00085d7efa",
            "name": "webhook03",
            "eventNames": [
                "transactionAdded"
            ],
            "webHookUrl": "https://728a2aed911dc8fb254eea6ee29f739d.m.pipedream.net",
            "webHookType": "HTTP",
            "methodType": "POST",
            "webHookHeaders": {
                ": "
            },
            "noOfRetryAttempts": 0,
            "maxAllowedConnections": 20,
            "active": true,
            "slaInSeconds": 30,
            "consumerGroupId": "8a2a455e-03a7-4933-a9e2-603750a9f417",
            "tillDetailsEnrichmentEnabled": false,
            "storeDetailsEnrichmentEnabled": false,
            "customerIdentifiersToBeEnriched": [],
            "awardedReferenceEnrichmentEnabled": false,
            "availablePointsBalanceEnrichmentEnabled": false
        },
        {
            "attribution": {
                "createdOn": "2020-04-15T15:39:47.756+0000",
                "lastUpdatedOn": "2020-08-19T15:59:29.383+0000",
                "lastUpdatedBy": {
                    "id": 75025546,
                    "code": "1536234541_",
                    "description": "",
                    "name": "Manishkumar prasad",
                    "type": "ADMIN_USER"
                },
                "createdBy": {
                    "id": 75029724,
                    "code": "changi.str.till_3",
                    "description": "",
                    "name": "changi.str.till_3",
                    "type": "TILL"
                }
            },
            "webHookId": "5e972ac3c64f3d00085d7efd",
            "name": "webhook04",
            "eventNames": [
                "transactionAdded"
            ],
            "webHookUrl": "https://webhook.site/fe8259d0-896c-484e-ac4b-c6dfe281278a",
            "webHookType": "HTTP",
            "methodType": "POST",
            "webHookHeaders": {
                ": "
            },
            "noOfRetryAttempts": 0,
            "maxAllowedConnections": 20,
            "active": false,
            "slaInSeconds": 30,
            "consumerGroupId": "2dc87bfd-bd93-4c36-aa84-589f181ab54b",
            "tillDetailsEnrichmentEnabled": false,
            "storeDetailsEnrichmentEnabled": false,
            "customerIdentifiersToBeEnriched": [],
            "awardedReferenceEnrichmentEnabled": false,
            "availablePointsBalanceEnrichmentEnabled": false
        },
        {
            "attribution": {
                "createdOn": "2020-04-20T10:35:47.473+0000",
                "lastUpdatedOn": "2020-08-19T15:58:40.836+0000",
                "lastUpdatedBy": {
                    "id": 75025546,
                    "code": "1536234541_",
                    "description": "",
                    "name": "Manishkumar prasad",
                    "type": "ADMIN_USER"
                },
                "createdBy": {
                    "id": 75040399,
                    "code": "bukl.till",
                    "description": "",
                    "name": "bukl.till",
                    "type": "TILL"
                }
            },
            "webHookId": "5e9d7b03c64f3d00085d7f00",
            "name": "DemoWebhook1",
            "eventNames": [
                "transactionAdded",
                "pointsRedeemed"
            ],
            "webHookUrl": "https://envr6t7iue26f.x.pipedream.net",
            "webHookType": "HTTP",
            "methodType": "POST",
            "webHookHeaders": {
                "Content-Type": "application/json"
            },
            "noOfRetryAttempts": 0,
            "maxAllowedConnections": 10,
            "active": true,
            "slaInSeconds": 30,
            "consumerGroupId": "8371bfe1-4e27-427c-8d03-a30c85066a1b",
            "tillDetailsEnrichmentEnabled": false,
            "storeDetailsEnrichmentEnabled": false,
            "customerIdentifiersToBeEnriched": [],
            "awardedReferenceEnrichmentEnabled": false,
            "availablePointsBalanceEnrichmentEnabled": false
        },
        {
            "attribution": {
                "createdOn": "2020-06-23T03:33:01.047+0000",
                "lastUpdatedOn": "2020-08-19T15:59:21.230+0000",
                "lastUpdatedBy": {
                    "id": 75025546,
                    "code": "1536234541_",
                    "description": "",
                    "name": "Manishkumar prasad",
                    "type": "ADMIN_USER"
                },
                "createdBy": {
                    "id": 75023580,
                    "code": "1521539804_",
                    "description": "",
                    "name": "Anjaney Vatsal",
                    "type": "ADMIN_USER"
                }
            },
            "webHookId": "5ef177edeb93e50008312221",
            "name": "demo2",
            "eventNames": [
                "transactionAdded",
                "pointsRedeemed"
            ],
            "webHookUrl": "https://728a2aed911dc8fb254eea6ee29f739d.m.pipedream.net",
            "webHookType": "HTTP",
            "methodType": "POST",
            "webHookHeaders": {
                ": "
            },
            "noOfRetryAttempts": 0,
            "maxAllowedConnections": 10,
            "active": true,
            "slaInSeconds": 30,
            "consumerGroupId": "ff1fd05c-ffed-41bd-8c44-1f20cc95b5f9",
            "tillDetailsEnrichmentEnabled": false,
            "storeDetailsEnrichmentEnabled": false,
            "customerIdentifiersToBeEnriched": [],
            "awardedReferenceEnrichmentEnabled": false,
            "availablePointsBalanceEnrichmentEnabled": false
        },
        {
            "attribution": {
                "createdOn": "2021-01-13T09:19:44.948+0000",
                "lastUpdatedOn": "2021-03-23T04:27:29.458+0000",
                "lastUpdatedBy": {
                    "id": 75045835,
                    "code": "1605776172_",
                    "description": "",
                    "name": "Madhupriya Gupta",
                    "type": "ADMIN_USER"
                },
                "createdBy": {
                    "id": 75046820,
                    "code": "1610459052_",
                    "description": "",
                    "name": "Arjun Nandakumar",
                    "type": "ADMIN_USER"
                }
            },
            "webHookId": "5ffebb319a3b0e000608a00c",
            "name": "whatsapp transaction add",
            "eventNames": [
                "transactionAdded"
            ],
            "webHookUrl": "http:/solutionsqa.capillarytech.com/Whatsapp_eu/api/Transactionadd/Communication",
            "webHookType": "HTTP",
            "methodType": "POST",
            "webHookHeaders": {
                ": "
            },
            "noOfRetryAttempts": 0,
            "maxAllowedConnections": 20,
            "active": false,
            "slaInSeconds": 30,
            "consumerGroupId": "e1a533ac-c06a-46c8-9e5b-e942a3b705ad",
            "tillDetailsEnrichmentEnabled": false,
            "storeDetailsEnrichmentEnabled": false,
            "customerIdentifiersToBeEnriched": [],
            "awardedReferenceEnrichmentEnabled": false,
            "availablePointsBalanceEnrichmentEnabled": false
        },
        {
            "attribution": {
                "createdOn": "2021-01-13T09:31:49.245+0000",
                "lastUpdatedOn": "2021-01-13T09:31:49.245+0000",
                "lastUpdatedBy": {
                    "id": 75046820,
                    "code": "1610459052_",
                    "description": "",
                    "name": "Arjun Nandakumar",
                    "type": "ADMIN_USER"
                },
                "createdBy": {
                    "id": 75046820,
                    "code": "1610459052_",
                    "description": "",
                    "name": "Arjun Nandakumar",
                    "type": "ADMIN_USER"
                }
            },
            "webHookId": "5ffebe059a3b0e000608a010",
            "name": "whatsapp customer add",
            "eventNames": [
                "customerAdded"
            ],
            "webHookUrl": "http:/solutionsqa.capillarytech.com/Whatsapp/api/CustomerAdd/Communication",
            "webHookType": "HTTP",
            "methodType": "POST",
            "webHookHeaders": {
                ": "
            },
            "noOfRetryAttempts": 0,
            "maxAllowedConnections": 20,
            "active": false,
            "slaInSeconds": 30,
            "consumerGroupId": "4b47b30f-bb6a-46de-aff4-1140079927cd",
            "tillDetailsEnrichmentEnabled": false,
            "storeDetailsEnrichmentEnabled": false,
            "customerIdentifiersToBeEnriched": [],
            "awardedReferenceEnrichmentEnabled": false,
            "availablePointsBalanceEnrichmentEnabled": false
        },
        {
            "attribution": {
                "createdOn": "2021-03-16T12:14:55.264+0000",
                "lastUpdatedOn": "2021-03-23T04:05:32.659+0000",
                "lastUpdatedBy": {
                    "id": 75045835,
                    "code": "1605776172_",
                    "description": "",
                    "name": "Madhupriya Gupta",
                    "type": "ADMIN_USER"
                },
                "createdBy": {
                    "id": 75045835,
                    "code": "1605776172_",
                    "description": "",
                    "name": "Madhupriya Gupta",
                    "type": "ADMIN_USER"
                }
            },
            "webHookId": "6050a140fa4e180006488c6c",
            "name": "Transaction_add_WA",
            "eventNames": [
                "transactionAdded"
            ],
            "webHookUrl": "http:/solutionsqa.capillarytech.com/Whatsapp_eu/api/Transactionadd/Communication",
            "webHookType": "HTTP",
            "methodType": "POST",
            "webHookHeaders": {
                "Content-Type": "application/json"
            },
            "noOfRetryAttempts": 0,
            "maxAllowedConnections": 20,
            "active": false,
            "slaInSeconds": 30,
            "consumerGroupId": "8cb6d845-f520-4f25-b8fb-f890cfdac109",
            "tillDetailsEnrichmentEnabled": false,
            "storeDetailsEnrichmentEnabled": false,
            "customerIdentifiersToBeEnriched": [],
            "awardedReferenceEnrichmentEnabled": false,
            "availablePointsBalanceEnrichmentEnabled": false
        },
        {
            "attribution": {
                "createdOn": "2021-03-16T12:17:14.067+0000",
                "lastUpdatedOn": "2021-03-16T12:17:14.067+0000",
                "lastUpdatedBy": {
                    "id": 75045835,
                    "code": "1605776172_",
                    "description": "",
                    "name": "Madhupriya Gupta",
                    "type": "ADMIN_USER"
                },
                "createdBy": {
                    "id": 75045835,
                    "code": "1605776172_",
                    "description": "",
                    "name": "Madhupriya Gupta",
                    "type": "ADMIN_USER"
                }
            },
            "webHookId": "6050a1cafa4e180006488caf",
            "name": "Customer_add_WA",
            "eventNames": [
                "transactionAdded"
            ],
            "webHookUrl": "http:/solutionsqa.capillarytech.com/Whatsapp/api/CustomerAdd/Communication",
            "webHookType": "HTTP",
            "methodType": "POST",
            "webHookHeaders": {
                "Content-Type": "application/json"
            },
            "noOfRetryAttempts": 0,
            "maxAllowedConnections": 20,
            "active": false,
            "slaInSeconds": 30,
            "consumerGroupId": "d696fcf2-f9cb-4314-8f8d-60c7a5b8c953",
            "tillDetailsEnrichmentEnabled": false,
            "storeDetailsEnrichmentEnabled": false,
            "customerIdentifiersToBeEnriched": [],
            "awardedReferenceEnrichmentEnabled": false,
            "availablePointsBalanceEnrichmentEnabled": false
        },
        {
            "attribution": {
                "createdOn": "2021-03-16T12:27:29.451+0000",
                "lastUpdatedOn": "2021-03-16T12:27:29.451+0000",
                "lastUpdatedBy": {
                    "id": 75045835,
                    "code": "1605776172_",
                    "description": "",
                    "name": "Madhupriya Gupta",
                    "type": "ADMIN_USER"
                },
                "createdBy": {
                    "id": 75045835,
                    "code": "1605776172_",
                    "description": "",
                    "name": "Madhupriya Gupta",
                    "type": "ADMIN_USER"
                }
            },
            "webHookId": "6050a431fa4e180006488cdf",
            "name": "Customer_add_WA_New",
            "eventNames": [
                "customerAdded"
            ],
            "webHookUrl": "http:/solutionsqa.capillarytech.com/Whatsapp/api/CustomerAdd/Communication",
            "webHookType": "HTTP",
            "methodType": "POST",
            "webHookHeaders": {
                "Content-Type": "application/json"
            },
            "noOfRetryAttempts": 0,
            "maxAllowedConnections": 20,
            "active": false,
            "slaInSeconds": 30,
            "consumerGroupId": "6117dfa7-0ab1-4a60-802e-ac02ea466d5b",
            "tillDetailsEnrichmentEnabled": false,
            "storeDetailsEnrichmentEnabled": false,
            "customerIdentifiersToBeEnriched": [],
            "awardedReferenceEnrichmentEnabled": false,
            "availablePointsBalanceEnrichmentEnabled": false
        },
        {
            "attribution": {
                "createdOn": "2021-03-16T12:28:46.257+0000",
                "lastUpdatedOn": "2021-03-16T12:28:46.257+0000",
                "lastUpdatedBy": {
                    "id": 75045835,
                    "code": "1605776172_",
                    "description": "",
                    "name": "Madhupriya Gupta",
                    "type": "ADMIN_USER"
                },
                "createdBy": {
                    "id": 75045835,
                    "code": "1605776172_",
                    "description": "",
                    "name": "Madhupriya Gupta",
                    "type": "ADMIN_USER"
                }
            },
            "webHookId": "6050a47efa4e180006488ce2",
            "name": "TEST_WH",
            "eventNames": [
                "partnerProgramLinked"
            ],
            "webHookUrl": "https://testingWH.com",
            "webHookType": "HTTP",
            "methodType": "POST",
            "webHookHeaders": {
                ": "
            },
            "noOfRetryAttempts": 0,
            "maxAllowedConnections": 20,
            "active": true,
            "slaInSeconds": 30,
            "consumerGroupId": "83435244-4f7c-4b5c-bb0a-d61e4a6f5353",
            "tillDetailsEnrichmentEnabled": false,
            "storeDetailsEnrichmentEnabled": false,
            "customerIdentifiersToBeEnriched": [],
            "awardedReferenceEnrichmentEnabled": false,
            "availablePointsBalanceEnrichmentEnabled": false
        },
        {
            "attribution": {
                "createdOn": "2021-10-22T12:32:43.145+0000",
                "lastUpdatedOn": "2022-04-01T08:44:29.151+0000",
                "lastUpdatedBy": {
                    "id": 75000279,
                    "code": "1372250391_1111111",
                    "description": "",
                    "name": "David Barik",
                    "type": "ADMIN_USER"
                },
                "createdBy": {
                    "id": 75000279,
                    "code": "1372250391_1111111",
                    "description": "",
                    "name": "David Barik",
                    "type": "ADMIN_USER"
                }
            },
            "webHookId": "6172af6b68cad40006ddce6c",
            "name": "Metro_C&C",
            "eventNames": [
                "transactionAdded",
                "redeemedPointsReversed"
            ],
            "webHookUrl": "https://36901fb0d96d15549a84a32bb676c8e5.m.pipedream.net",
            "webHookType": "HTTP",
            "methodType": "POST",
            "webHookHeaders": {
                ": "
            },
            "noOfRetryAttempts": 0,
            "maxAllowedConnections": 220,
            "active": false,
            "slaInSeconds": 300,
            "consumerGroupId": "b3eba1b9-7c8f-4743-9b58-0bdeb2abe5d5",
            "tillDetailsEnrichmentEnabled": true,
            "storeDetailsEnrichmentEnabled": true,
            "customerIdentifiersToBeEnriched": [
                "WeChat",
                "WebEngage",
                "Instore"
            ],
            "awardedReferenceEnrichmentEnabled": false,
            "availablePointsBalanceEnrichmentEnabled": false
        },
        {
            "attribution": {
                "createdOn": "2021-11-15T12:59:14.319+0000",
                "lastUpdatedOn": "2022-04-19T11:39:07.732+0000",
                "lastUpdatedBy": {
                    "id": 75051895,
                    "code": "1637224671_",
                    "description": "",
                    "name": "Prabhat Mishra",
                    "type": "ADMIN_USER"
                },
                "createdBy": {
                    "id": 75051419,
                    "code": "1633619413_",
                    "description": "",
                    "name": "Swapnil ",
                    "type": "ADMIN_USER"
                }
            },
            "webHookId": "619259a3268d420007f437ec",
            "name": "METRO OPEN WEBHOOK",
            "eventNames": [
                "rewardIssued",
                "loyaltyCustomerMerge",
                "partnerProgramLinked",
                "pointsExpiryChange",
                "rewardUpdated",
                "pointsExpired",
                "transactionUpdated",
                "customerAdded",
                "groupUpdated",
                "promisedToCurrentPointsConversion",
                "groupCreated",
                "groupMemberRemoved",
                "pointsTransferredReceived",
                "partnerProgramUpdated",
                "pointsIssued",
                "supplementaryMembershipExpiryReminder",
                "singlePointsExpiryUpdated",
                "tierDowngradeReminder",
                "issuedPointsReversed",
                "groupMemberAdded",
                "pointsContributionToGroup",
                "CouponRedeem",
                "pointsExpiryReminder",
                "pointsRedeemed",
                "partnerProgramDelinked",
                "transactionAdded",
                "rewardCreated",
                "CouponIssue",
                "redeemedPointsReversed",
                "tierRenewed",
                "cardUpdated",
                "tierDowngraded",
                "pointsTransferredInitiated",
                "customerUpdated",
                "tierUpgraded"
            ],
            "webHookUrl": "https://api.sbx.metronom.dev/ro-loyalty/api/events/inbound/capillarybatch",
            "webHookType": "HTTP",
            "methodType": "POST",
            "webHookHeaders": {
                "Authorization": "Basic bG95YWx0eS1pbmJvdW5kOlUwRk9SRUpQV0RwWmFuSWZRVUUzV0VnMUVpa2lZWGRJVUZKYk53PT0="
            },
            "noOfRetryAttempts": 0,
            "maxAllowedConnections": 20,
            "active": false,
            "slaInSeconds": 30,
            "consumerGroupId": "3e98188d-bc92-4dba-980e-324a119b99e1",
            "tillDetailsEnrichmentEnabled": true,
            "storeDetailsEnrichmentEnabled": true,
            "customerIdentifiersToBeEnriched": [
                "Instore"
            ],
            "awardedReferenceEnrichmentEnabled": false,
            "availablePointsBalanceEnrichmentEnabled": false
        },
        {
            "attribution": {
                "createdOn": "2022-01-03T10:07:21.946+0000",
                "lastUpdatedOn": "2022-04-19T11:49:50.229+0000",
                "lastUpdatedBy": {
                    "id": 75051895,
                    "code": "1637224671_",
                    "description": "",
                    "name": "Prabhat Mishra",
                    "type": "ADMIN_USER"
                },
                "createdBy": {
                    "id": 75051895,
                    "code": "1637224671_",
                    "description": "",
                    "name": "Prabhat Mishra",
                    "type": "ADMIN_USER"
                }
            },
            "webHookId": "61d2cad9faf27800060a9f18",
            "name": "METRO-WEBHOOK-2",
            "eventNames": [
                "rewardIssued",
                "loyaltyCustomerMerge",
                "partnerProgramLinked",
                "pointsExpiryChange",
                "rewardUpdated",
                "pointsExpired",
                "transactionUpdated",
                "customerAdded",
                "groupUpdated",
                "promisedToCurrentPointsConversion",
                "groupCreated",
                "groupMemberRemoved",
                "pointsTransferredReceived",
                "partnerProgramUpdated",
                "pointsIssued",
                "supplementaryMembershipExpiryReminder",
                "singlePointsExpiryUpdated",
                "tierDowngradeReminder",
                "issuedPointsReversed",
                "groupMemberAdded",
                "pointsContributionToGroup",
                "CouponRedeem",
                "pointsExpiryReminder",
                "pointsRedeemed",
                "partnerProgramDelinked",
                "transactionAdded",
                "rewardCreated",
                "CouponIssue",
                "redeemedPointsReversed",
                "tierRenewed",
                "cardUpdated",
                "tierDowngraded",
                "pointsTransferredInitiated",
                "customerUpdated",
                "tierUpgraded"
            ],
            "webHookUrl": "https://webhook.site/11f25c8e-ea52-40f0-bff7-8c955cbafd07",
            "webHookType": "HTTP",
            "methodType": "POST",
            "webHookHeaders": {
                "Authorization": "testAuth"
            },
            "noOfRetryAttempts": 0,
            "maxAllowedConnections": 20,
            "active": false,
            "slaInSeconds": 30,
            "consumerGroupId": "4c640d81-8fd6-420b-8f7b-e78fbc9eaffc",
            "tillDetailsEnrichmentEnabled": true,
            "storeDetailsEnrichmentEnabled": true,
            "customerIdentifiersToBeEnriched": [
                "Instore"
            ],
            "awardedReferenceEnrichmentEnabled": false,
            "availablePointsBalanceEnrichmentEnabled": false
        },
        {
            "attribution": {
                "createdOn": "2022-02-22T11:40:28.123+0000",
                "lastUpdatedOn": "2022-02-22T11:40:28.123+0000",
                "lastUpdatedBy": {
                    "id": 75045835,
                    "code": "1605776172_",
                    "description": "",
                    "name": "Madhupriya Gupta",
                    "type": "ADMIN_USER"
                },
                "createdBy": {
                    "id": 75016470,
                    "code": "1494854932_",
                    "description": "",
                    "name": "Rohan Singh",
                    "type": "ADMIN_USER"
                }
            },
            "webHookId": "6214cbac9777f400060bdf8a",
            "name": "61ea8eb81ae0fb3821f8255f",
            "eventNames": [
                "transactionAdded",
                "CouponRedeem"
            ],
            "webHookUrl": " ",
            "webHookType": "QUEUE_INT",
            "methodType": "POST",
            "webHookHeaders": {},
            "noOfRetryAttempts": 0,
            "maxAllowedConnections": 10,
            "active": false,
            "slaInSeconds": 0,
            "consumerGroupId": "8de0396b-b93c-4271-b59f-86c416805412",
            "tillDetailsEnrichmentEnabled": false,
            "storeDetailsEnrichmentEnabled": false,
            "customerIdentifiersToBeEnriched": [],
            "awardedReferenceEnrichmentEnabled": false,
            "availablePointsBalanceEnrichmentEnabled": false
        },
        {
            "attribution": {
                "createdOn": "2022-04-27T07:29:44.980+0000",
                "lastUpdatedOn": "2022-08-15T13:07:04.082+0000",
                "lastUpdatedBy": {
                    "id": 75060177,
                    "code": "1657879751_",
                    "description": "",
                    "name": "mohammad milhem@capillarytech.com",
                    "type": "ADMIN_USER"
                },
                "createdBy": {
                    "id": 75045835,
                    "code": "1605776172_",
                    "description": "",
                    "name": "Madhupriya Gupta",
                    "type": "ADMIN_USER"
                }
            },
            "webHookId": "6268f0e97838a20007008dbc",
            "name": "Whatsapp Transaction",
            "eventNames": [
                "transactionAdded"
            ],
            "webHookUrl": "http:/solutionsqa.capillarytech.com/Whatsapp_eu/api/Transactionadd/Communication",
            "webHookType": "HTTP",
            "methodType": "POST",
            "webHookHeaders": {
                ": "
            },
            "noOfRetryAttempts": 0,
            "maxAllowedConnections": 20,
            "active": true,
            "slaInSeconds": 30,
            "consumerGroupId": "39e75f17-4a83-4e22-bd01-9a806c3c6f71",
            "tillDetailsEnrichmentEnabled": true,
            "storeDetailsEnrichmentEnabled": true,
            "customerIdentifiersToBeEnriched": [
                "Instore"
            ],
            "awardedReferenceEnrichmentEnabled": false,
            "availablePointsBalanceEnrichmentEnabled": false
        },
        {
            "attribution": {
                "createdOn": "2022-11-08T07:59:05.647+0000",
                "lastUpdatedOn": "2022-11-08T07:59:05.647+0000",
                "lastUpdatedBy": {
                    "id": 75017206,
                    "code": "1498655387_",
                    "description": "",
                    "name": "Barath Jegan",
                    "type": "ADMIN_USER"
                },
                "createdBy": {
                    "id": 75017206,
                    "code": "1498655387_",
                    "description": "",
                    "name": "Barath Jegan",
                    "type": "ADMIN_USER"
                }
            },
            "webHookId": "636a0c498544d60008eac07d",
            "name": "6364d336a94e99788d922251",
            "eventNames": [
                "transactionAdded"
            ],
            "webHookUrl": " ",
            "webHookType": "QUEUE_INT",
            "methodType": "POST",
            "webHookHeaders": {},
            "noOfRetryAttempts": 0,
            "maxAllowedConnections": 10,
            "active": false,
            "slaInSeconds": 0,
            "consumerGroupId": "94153b81-0f9d-409b-b7d1-9ba83300e136",
            "tillDetailsEnrichmentEnabled": false,
            "storeDetailsEnrichmentEnabled": false,
            "customerIdentifiersToBeEnriched": [],
            "awardedReferenceEnrichmentEnabled": false,
            "availablePointsBalanceEnrichmentEnabled": false
        },
        {
            "attribution": {
                "createdOn": "2022-11-15T04:53:07.641+0000",
                "lastUpdatedOn": "2022-11-15T04:53:07.641+0000",
                "lastUpdatedBy": {
                    "id": 75028395,
                    "code": "1549434900_",
                    "description": "",
                    "name": "Rahul Ramachandran",
                    "type": "ADMIN_USER"
                },
                "createdBy": {
                    "id": 75016470,
                    "code": "1494854932_",
                    "description": "",
                    "name": "Rohan Singh",
                    "type": "ADMIN_USER"
                }
            },
            "webHookId": "63731b3383a66600075609df",
            "name": "636b929e075c4214ff786991",
            "eventNames": [
                "transactionAdded",
                "CouponRedeem"
            ],
            "webHookUrl": " ",
            "webHookType": "QUEUE_INT",
            "methodType": "POST",
            "webHookHeaders": {},
            "noOfRetryAttempts": 0,
            "maxAllowedConnections": 10,
            "active": false,
            "slaInSeconds": 0,
            "consumerGroupId": "beca7ebe-6e06-4dc4-84e6-b080fe5a85f8",
            "tillDetailsEnrichmentEnabled": false,
            "storeDetailsEnrichmentEnabled": false,
            "customerIdentifiersToBeEnriched": [],
            "awardedReferenceEnrichmentEnabled": false,
            "availablePointsBalanceEnrichmentEnabled": false
        },
        {
            "attribution": {
                "createdOn": "2022-12-13T08:52:34.066+0000",
                "lastUpdatedOn": "2022-12-13T08:52:34.066+0000",
                "lastUpdatedBy": {
                    "id": 75045835,
                    "code": "1605776172_",
                    "description": "",
                    "name": "Madhupriya Gupta",
                    "type": "ADMIN_USER"
                },
                "createdBy": {
                    "id": 75045835,
                    "code": "1605776172_",
                    "description": "",
                    "name": "Madhupriya Gupta",
                    "type": "ADMIN_USER"
                }
            },
            "webHookId": "63983d5234c4af00079eab0a",
            "name": "63983ab34f344e0389f53501",
            "eventNames": [
                "CouponRedeem"
            ],
            "webHookUrl": " ",
            "webHookType": "QUEUE_INT",
            "methodType": "POST",
            "webHookHeaders": {},
            "noOfRetryAttempts": 0,
            "maxAllowedConnections": 10,
            "active": true,
            "slaInSeconds": 0,
            "consumerGroupId": "e5f4e120-1164-40c2-9bb7-d6f216dd5812",
            "tillDetailsEnrichmentEnabled": false,
            "storeDetailsEnrichmentEnabled": false,
            "customerIdentifiersToBeEnriched": [],
            "awardedReferenceEnrichmentEnabled": false,
            "availablePointsBalanceEnrichmentEnabled": false
        },
        {
            "attribution": {
                "createdOn": "2023-03-27T09:15:28.388+0000",
                "lastUpdatedOn": "2023-03-27T09:15:28.388+0000",
                "lastUpdatedBy": {
                    "id": 75059628,
                    "code": "1656934597_",
                    "description": "",
                    "name": "surbhi manocha",
                    "type": "ADMIN_USER"
                },
                "createdBy": {
                    "id": 75059628,
                    "code": "1656934597_",
                    "description": "",
                    "name": "surbhi manocha",
                    "type": "ADMIN_USER"
                }
            },
            "webHookId": "64215eb0d84de40007944511",
            "name": "6421579444f5025455447079",
            "eventNames": [
                "customerAdded"
            ],
            "webHookUrl": " ",
            "webHookType": "QUEUE_INT",
            "methodType": "POST",
            "webHookHeaders": {},
            "noOfRetryAttempts": 0,
            "maxAllowedConnections": 10,
            "active": false,
            "slaInSeconds": 0,
            "consumerGroupId": "26e39953-4f1b-48e9-b474-a84fa43aeee4",
            "tillDetailsEnrichmentEnabled": false,
            "storeDetailsEnrichmentEnabled": false,
            "customerIdentifiersToBeEnriched": [],
            "awardedReferenceEnrichmentEnabled": false,
            "availablePointsBalanceEnrichmentEnabled": false
        },
        {
            "attribution": {
                "createdOn": "2023-03-27T09:33:25.684+0000",
                "lastUpdatedOn": "2023-03-27T09:33:25.684+0000",
                "lastUpdatedBy": {
                    "id": 75059628,
                    "code": "1656934597_",
                    "description": "",
                    "name": "surbhi manocha",
                    "type": "ADMIN_USER"
                },
                "createdBy": {
                    "id": 75059628,
                    "code": "1656934597_",
                    "description": "",
                    "name": "surbhi manocha",
                    "type": "ADMIN_USER"
                }
            },
            "webHookId": "642162e5d84de40007945341",
            "name": "64215fd644f502545544707e",
            "eventNames": [
                "transactionAdded"
            ],
            "webHookUrl": " ",
            "webHookType": "QUEUE_INT",
            "methodType": "POST",
            "webHookHeaders": {},
            "noOfRetryAttempts": 0,
            "maxAllowedConnections": 10,
            "active": false,
            "slaInSeconds": 0,
            "consumerGroupId": "5041496a-875c-45c8-b058-321892d58e7c",
            "tillDetailsEnrichmentEnabled": false,
            "storeDetailsEnrichmentEnabled": false,
            "customerIdentifiersToBeEnriched": [],
            "awardedReferenceEnrichmentEnabled": false,
            "availablePointsBalanceEnrichmentEnabled": false
        },
        {
            "attribution": {
                "createdOn": "2023-03-27T10:28:52.426+0000",
                "lastUpdatedOn": "2023-03-27T10:28:52.426+0000",
                "lastUpdatedBy": {
                    "id": 75059628,
                    "code": "1656934597_",
                    "description": "",
                    "name": "surbhi manocha",
                    "type": "ADMIN_USER"
                },
                "createdBy": {
                    "id": 75059628,
                    "code": "1656934597_",
                    "description": "",
                    "name": "surbhi manocha",
                    "type": "ADMIN_USER"
                }
            },
            "webHookId": "64216fe4d84de40007947f16",
            "name": "64216b5b1402df0ded05492c",
            "eventNames": [
                "transactionAdded"
            ],
            "webHookUrl": " ",
            "webHookType": "QUEUE_INT",
            "methodType": "POST",
            "webHookHeaders": {},
            "noOfRetryAttempts": 0,
            "maxAllowedConnections": 10,
            "active": false,
            "slaInSeconds": 0,
            "consumerGroupId": "9038c5e1-8eab-4fca-9438-fb0fc1c1c9c1",
            "tillDetailsEnrichmentEnabled": false,
            "storeDetailsEnrichmentEnabled": false,
            "customerIdentifiersToBeEnriched": [],
            "awardedReferenceEnrichmentEnabled": false,
            "availablePointsBalanceEnrichmentEnabled": false
        },
        {
            "attribution": {
                "createdOn": "2023-03-27T12:44:20.957+0000",
                "lastUpdatedOn": "2023-03-27T12:44:20.957+0000",
                "lastUpdatedBy": {
                    "id": 75059628,
                    "code": "1656934597_",
                    "description": "",
                    "name": "surbhi manocha",
                    "type": "ADMIN_USER"
                },
                "createdBy": {
                    "id": 75059628,
                    "code": "1656934597_",
                    "description": "",
                    "name": "surbhi manocha",
                    "type": "ADMIN_USER"
                }
            },
            "webHookId": "64218fa4d84de4000794e9dd",
            "name": "64218f9a1402df0ded055026",
            "eventNames": [
                "transactionAdded"
            ],
            "webHookUrl": " ",
            "webHookType": "QUEUE_INT",
            "methodType": "POST",
            "webHookHeaders": {},
            "noOfRetryAttempts": 0,
            "maxAllowedConnections": 10,
            "active": true,
            "slaInSeconds": 0,
            "consumerGroupId": "a775610a-2ab9-4c52-83cf-10480252cc9c",
            "tillDetailsEnrichmentEnabled": false,
            "storeDetailsEnrichmentEnabled": false,
            "customerIdentifiersToBeEnriched": [],
            "awardedReferenceEnrichmentEnabled": false,
            "availablePointsBalanceEnrichmentEnabled": false
        },
        {
            "attribution": {
                "createdOn": "2023-03-27T12:55:14.487+0000",
                "lastUpdatedOn": "2023-03-27T12:55:14.487+0000",
                "lastUpdatedBy": {
                    "id": 75059628,
                    "code": "1656934597_",
                    "description": "",
                    "name": "surbhi manocha",
                    "type": "ADMIN_USER"
                },
                "createdBy": {
                    "id": 75059628,
                    "code": "1656934597_",
                    "description": "",
                    "name": "surbhi manocha",
                    "type": "ADMIN_USER"
                }
            },
            "webHookId": "64219232d84de4000794f1b5",
            "name": "6421922c44f502545544779f",
            "eventNames": [
                "transactionAdded"
            ],
            "webHookUrl": " ",
            "webHookType": "QUEUE_INT",
            "methodType": "POST",
            "webHookHeaders": {},
            "noOfRetryAttempts": 0,
            "maxAllowedConnections": 10,
            "active": false,
            "slaInSeconds": 0,
            "consumerGroupId": "2b94e86f-03d4-43c0-bf3d-ed9ec2dd68be",
            "tillDetailsEnrichmentEnabled": false,
            "storeDetailsEnrichmentEnabled": false,
            "customerIdentifiersToBeEnriched": [],
            "awardedReferenceEnrichmentEnabled": false,
            "availablePointsBalanceEnrichmentEnabled": false
        },
        {
            "attribution": {
                "createdOn": "2023-03-27T13:43:34.185+0000",
                "lastUpdatedOn": "2023-03-27T13:43:34.185+0000",
                "lastUpdatedBy": {
                    "id": 75059628,
                    "code": "1656934597_",
                    "description": "",
                    "name": "surbhi manocha",
                    "type": "ADMIN_USER"
                },
                "createdBy": {
                    "id": 75059628,
                    "code": "1656934597_",
                    "description": "",
                    "name": "surbhi manocha",
                    "type": "ADMIN_USER"
                }
            },
            "webHookId": "64219d86d84de4000795122a",
            "name": "64219d7d1402df0ded055034",
            "eventNames": [
                "transactionAdded"
            ],
            "webHookUrl": " ",
            "webHookType": "QUEUE_INT",
            "methodType": "POST",
            "webHookHeaders": {},
            "noOfRetryAttempts": 0,
            "maxAllowedConnections": 10,
            "active": true,
            "slaInSeconds": 0,
            "consumerGroupId": "092cbf81-34cc-4e51-9b8d-401c8557a7cf",
            "tillDetailsEnrichmentEnabled": false,
            "storeDetailsEnrichmentEnabled": false,
            "customerIdentifiersToBeEnriched": [],
            "awardedReferenceEnrichmentEnabled": false,
            "availablePointsBalanceEnrichmentEnabled": false
        },
        {
            "attribution": {
                "createdOn": "2023-03-27T14:03:36.430+0000",
                "lastUpdatedOn": "2023-03-27T14:03:36.430+0000",
                "lastUpdatedBy": {
                    "id": 75059628,
                    "code": "1656934597_",
                    "description": "",
                    "name": "surbhi manocha",
                    "type": "ADMIN_USER"
                },
                "createdBy": {
                    "id": 75059628,
                    "code": "1656934597_",
                    "description": "",
                    "name": "surbhi manocha",
                    "type": "ADMIN_USER"
                }
            },
            "webHookId": "6421a238d84de40007951e6a",
            "name": "6421a0dd1402df0ded055036",
            "eventNames": [
                "customerAdded"
            ],
            "webHookUrl": " ",
            "webHookType": "QUEUE_INT",
            "methodType": "POST",
            "webHookHeaders": {},
            "noOfRetryAttempts": 0,
            "maxAllowedConnections": 10,
            "active": false,
            "slaInSeconds": 0,
            "consumerGroupId": "7e9db184-5fe2-41e1-95a4-9b62860e7193",
            "tillDetailsEnrichmentEnabled": false,
            "storeDetailsEnrichmentEnabled": false,
            "customerIdentifiersToBeEnriched": [],
            "awardedReferenceEnrichmentEnabled": false,
            "availablePointsBalanceEnrichmentEnabled": false
        },
        {
            "attribution": {
                "createdOn": "2023-03-27T14:29:45.915+0000",
                "lastUpdatedOn": "2023-03-27T14:29:45.915+0000",
                "lastUpdatedBy": {
                    "id": 75059628,
                    "code": "1656934597_",
                    "description": "",
                    "name": "surbhi manocha",
                    "type": "ADMIN_USER"
                },
                "createdBy": {
                    "id": 75059628,
                    "code": "1656934597_",
                    "description": "",
                    "name": "surbhi manocha",
                    "type": "ADMIN_USER"
                }
            },
            "webHookId": "6421a859d84de40007952cca",
            "name": "6421a5dd1402df0ded055040",
            "eventNames": [
                "transactionAdded"
            ],
            "webHookUrl": " ",
            "webHookType": "QUEUE_INT",
            "methodType": "POST",
            "webHookHeaders": {},
            "noOfRetryAttempts": 0,
            "maxAllowedConnections": 10,
            "active": true,
            "slaInSeconds": 0,
            "consumerGroupId": "483cc4cd-872a-41e3-a424-42c0594c43bf",
            "tillDetailsEnrichmentEnabled": false,
            "storeDetailsEnrichmentEnabled": false,
            "customerIdentifiersToBeEnriched": [],
            "awardedReferenceEnrichmentEnabled": false,
            "availablePointsBalanceEnrichmentEnabled": false
        },
        {
            "attribution": {
                "createdOn": "2023-03-27T15:16:30.440+0000",
                "lastUpdatedOn": "2023-03-27T15:16:30.440+0000",
                "lastUpdatedBy": {
                    "id": 75059628,
                    "code": "1656934597_",
                    "description": "",
                    "name": "surbhi manocha",
                    "type": "ADMIN_USER"
                },
                "createdBy": {
                    "id": 75059628,
                    "code": "1656934597_",
                    "description": "",
                    "name": "surbhi manocha",
                    "type": "ADMIN_USER"
                }
            },
            "webHookId": "6421b34ed84de400079540e3",
            "name": "6421b19244f50254554477d0",
            "eventNames": [
                "customerAdded"
            ],
            "webHookUrl": " ",
            "webHookType": "QUEUE_INT",
            "methodType": "POST",
            "webHookHeaders": {},
            "noOfRetryAttempts": 0,
            "maxAllowedConnections": 10,
            "active": true,
            "slaInSeconds": 0,
            "consumerGroupId": "6681481d-388e-46ae-9621-fb4341e7af5b",
            "tillDetailsEnrichmentEnabled": false,
            "storeDetailsEnrichmentEnabled": false,
            "customerIdentifiersToBeEnriched": [],
            "awardedReferenceEnrichmentEnabled": false,
            "availablePointsBalanceEnrichmentEnabled": false
        },
        {
            "attribution": {
                "createdOn": "2023-03-27T15:30:21.783+0000",
                "lastUpdatedOn": "2023-03-27T15:30:21.783+0000",
                "lastUpdatedBy": {
                    "id": 75059628,
                    "code": "1656934597_",
                    "description": "",
                    "name": "surbhi manocha",
                    "type": "ADMIN_USER"
                },
                "createdBy": {
                    "id": 75059628,
                    "code": "1656934597_",
                    "description": "",
                    "name": "surbhi manocha",
                    "type": "ADMIN_USER"
                }
            },
            "webHookId": "6421b68dd84de4000795464b",
            "name": "6421b6601402df0ded055065",
            "eventNames": [
                "transactionAdded"
            ],
            "webHookUrl": " ",
            "webHookType": "QUEUE_INT",
            "methodType": "POST",
            "webHookHeaders": {},
            "noOfRetryAttempts": 0,
            "maxAllowedConnections": 10,
            "active": false,
            "slaInSeconds": 0,
            "consumerGroupId": "4eeec178-7b22-41dc-ba3c-2e1c1b407748",
            "tillDetailsEnrichmentEnabled": false,
            "storeDetailsEnrichmentEnabled": false,
            "customerIdentifiersToBeEnriched": [],
            "awardedReferenceEnrichmentEnabled": false,
            "availablePointsBalanceEnrichmentEnabled": false
        },
        {
            "attribution": {
                "createdOn": "2023-03-27T15:34:06.482+0000",
                "lastUpdatedOn": "2023-03-27T15:34:06.482+0000",
                "lastUpdatedBy": {
                    "id": 75059628,
                    "code": "1656934597_",
                    "description": "",
                    "name": "surbhi manocha",
                    "type": "ADMIN_USER"
                },
                "createdBy": {
                    "id": 75059628,
                    "code": "1656934597_",
                    "description": "",
                    "name": "surbhi manocha",
                    "type": "ADMIN_USER"
                }
            },
            "webHookId": "6421b76ed84de400079547df",
            "name": "6421b7691402df0ded055069",
            "eventNames": [
                "transactionAdded"
            ],
            "webHookUrl": " ",
            "webHookType": "QUEUE_INT",
            "methodType": "POST",
            "webHookHeaders": {},
            "noOfRetryAttempts": 0,
            "maxAllowedConnections": 10,
            "active": false,
            "slaInSeconds": 0,
            "consumerGroupId": "103af20a-3544-4f6f-9795-aecf36326c0e",
            "tillDetailsEnrichmentEnabled": false,
            "storeDetailsEnrichmentEnabled": false,
            "customerIdentifiersToBeEnriched": [],
            "awardedReferenceEnrichmentEnabled": false,
            "availablePointsBalanceEnrichmentEnabled": false
        },
        {
            "attribution": {
                "createdOn": "2023-03-27T15:43:01.913+0000",
                "lastUpdatedOn": "2023-03-27T15:43:01.913+0000",
                "lastUpdatedBy": {
                    "id": 75059628,
                    "code": "1656934597_",
                    "description": "",
                    "name": "surbhi manocha",
                    "type": "ADMIN_USER"
                },
                "createdBy": {
                    "id": 75059628,
                    "code": "1656934597_",
                    "description": "",
                    "name": "surbhi manocha",
                    "type": "ADMIN_USER"
                }
            },
            "webHookId": "6421b985d84de40007954b00",
            "name": "6421b9811402df0ded055073",
            "eventNames": [
                "transactionAdded"
            ],
            "webHookUrl": " ",
            "webHookType": "QUEUE_INT",
            "methodType": "POST",
            "webHookHeaders": {},
            "noOfRetryAttempts": 0,
            "maxAllowedConnections": 10,
            "active": false,
            "slaInSeconds": 0,
            "consumerGroupId": "90caed47-7e33-42ad-afea-43e052f64b9d",
            "tillDetailsEnrichmentEnabled": false,
            "storeDetailsEnrichmentEnabled": false,
            "customerIdentifiersToBeEnriched": [],
            "awardedReferenceEnrichmentEnabled": false,
            "availablePointsBalanceEnrichmentEnabled": false
        },
        {
            "attribution": {
                "createdOn": "2023-03-27T15:48:49.988+0000",
                "lastUpdatedOn": "2023-03-27T15:48:49.988+0000",
                "lastUpdatedBy": {
                    "id": 75059628,
                    "code": "1656934597_",
                    "description": "",
                    "name": "surbhi manocha",
                    "type": "ADMIN_USER"
                },
                "createdBy": {
                    "id": 75059628,
                    "code": "1656934597_",
                    "description": "",
                    "name": "surbhi manocha",
                    "type": "ADMIN_USER"
                }
            },
            "webHookId": "6421bae1d84de40007954cfe",
            "name": "6421ba8744f50254554477eb",
            "eventNames": [
                "customerAdded"
            ],
            "webHookUrl": " ",
            "webHookType": "QUEUE_INT",
            "methodType": "POST",
            "webHookHeaders": {},
            "noOfRetryAttempts": 0,
            "maxAllowedConnections": 10,
            "active": false,
            "slaInSeconds": 0,
            "consumerGroupId": "e30d228e-9983-46f0-aa0e-2c30180de89d",
            "tillDetailsEnrichmentEnabled": false,
            "storeDetailsEnrichmentEnabled": false,
            "customerIdentifiersToBeEnriched": [],
            "awardedReferenceEnrichmentEnabled": false,
            "availablePointsBalanceEnrichmentEnabled": false
        },
        {
            "attribution": {
                "createdOn": "2023-04-13T07:59:39.893+0000",
                "lastUpdatedOn": "2023-04-13T07:59:39.893+0000",
                "lastUpdatedBy": {
                    "id": 75059628,
                    "code": "1656934597_",
                    "description": "",
                    "name": "surbhi manocha",
                    "type": "ADMIN_USER"
                },
                "createdBy": {
                    "id": 75059628,
                    "code": "1656934597_",
                    "description": "",
                    "name": "surbhi manocha",
                    "type": "ADMIN_USER"
                }
            },
            "webHookId": "6437b66bf4a6a100074bb0c2",
            "name": "6437b2bf569df373439d57dc",
            "eventNames": [
                "customerAdded",
                "transactionAdded"
            ],
            "webHookUrl": " ",
            "webHookType": "QUEUE_INT",
            "methodType": "POST",
            "webHookHeaders": {},
            "noOfRetryAttempts": 0,
            "maxAllowedConnections": 10,
            "active": true,
            "slaInSeconds": 0,
            "consumerGroupId": "413766b5-d4dd-4135-9e25-81dd1896d9a7",
            "tillDetailsEnrichmentEnabled": false,
            "storeDetailsEnrichmentEnabled": false,
            "customerIdentifiersToBeEnriched": [],
            "awardedReferenceEnrichmentEnabled": false,
            "availablePointsBalanceEnrichmentEnabled": false
        },
        {
            "attribution": {
                "createdOn": "2023-06-30T10:55:54.478+0000",
                "lastUpdatedOn": "2023-06-30T10:55:54.478+0000",
                "lastUpdatedBy": {
                    "id": 75054230,
                    "code": "1645682754_",
                    "description": "",
                    "name": "Prashu Chaudhary",
                    "type": "ADMIN_USER"
                },
                "createdBy": {
                    "id": 75074501,
                    "code": "1678794507_",
                    "description": "",
                    "name": "arya deshpande",
                    "type": "ADMIN_USER"
                }
            },
            "webHookId": "649eb4ba72b4e100072b64ea",
            "name": "649ab990b683ed64a3384481",
            "eventNames": [
                "transactionAdded"
            ],
            "webHookUrl": " ",
            "webHookType": "QUEUE_INT",
            "methodType": "POST",
            "webHookHeaders": {},
            "noOfRetryAttempts": 0,
            "maxAllowedConnections": 10,
            "active": true,
            "slaInSeconds": 0,
            "consumerGroupId": "57280b61-0483-401e-b712-1d2d806432c1",
            "tillDetailsEnrichmentEnabled": false,
            "storeDetailsEnrichmentEnabled": false,
            "customerIdentifiersToBeEnriched": [],
            "awardedReferenceEnrichmentEnabled": false,
            "availablePointsBalanceEnrichmentEnabled": false
        },
        {
            "attribution": {
                "createdOn": "2023-07-06T07:31:40.358+0000",
                "lastUpdatedOn": "2023-07-06T07:31:40.358+0000",
                "lastUpdatedBy": {
                    "id": 75065114,
                    "code": "1665170389_",
                    "description": "",
                    "name": "amogh rane ",
                    "type": "ADMIN_USER"
                },
                "createdBy": {
                    "id": 75065114,
                    "code": "1665170389_",
                    "description": "",
                    "name": "amogh rane ",
                    "type": "ADMIN_USER"
                }
            },
            "webHookId": "64a66ddc3967cd0007e79061",
            "name": "64a66dca073ab6255cee841a",
            "eventNames": [
                "transactionAdded"
            ],
            "webHookUrl": " ",
            "webHookType": "QUEUE_INT",
            "methodType": "POST",
            "webHookHeaders": {},
            "noOfRetryAttempts": 0,
            "maxAllowedConnections": 10,
            "active": true,
            "slaInSeconds": 0,
            "consumerGroupId": "16efdbb0-5efc-4e66-b777-d6ff82983f8b",
            "tillDetailsEnrichmentEnabled": false,
            "storeDetailsEnrichmentEnabled": false,
            "customerIdentifiersToBeEnriched": [],
            "awardedReferenceEnrichmentEnabled": false,
            "availablePointsBalanceEnrichmentEnabled": false
        },
        {
            "attribution": {
                "createdOn": "2023-07-13T11:30:22.693+0000",
                "lastUpdatedOn": "2023-07-13T11:30:22.693+0000",
                "lastUpdatedBy": {
                    "id": 75059628,
                    "code": "1656934597_",
                    "description": "",
                    "name": "surbhi manocha",
                    "type": "ADMIN_USER"
                },
                "createdBy": {
                    "id": 75065114,
                    "code": "1665170389_",
                    "description": "",
                    "name": "amogh rane ",
                    "type": "ADMIN_USER"
                }
            },
            "webHookId": "64afe04efd13df0008c96105",
            "name": "64a66dca073ab6255cee841a_1",
            "eventNames": [
                "transactionAdded"
            ],
            "webHookUrl": " ",
            "webHookType": "QUEUE_INT",
            "methodType": "POST",
            "webHookHeaders": {},
            "noOfRetryAttempts": 0,
            "maxAllowedConnections": 10,
            "active": false,
            "slaInSeconds": 0,
            "consumerGroupId": "d5725297-1143-4de7-9df7-f4b459ca6f73",
            "tillDetailsEnrichmentEnabled": false,
            "storeDetailsEnrichmentEnabled": false,
            "customerIdentifiersToBeEnriched": [],
            "awardedReferenceEnrichmentEnabled": false,
            "availablePointsBalanceEnrichmentEnabled": false
        },
        {
            "attribution": {
                "createdOn": "2023-08-17T21:56:55.664+0000",
                "lastUpdatedOn": "2023-08-17T21:56:55.664+0000",
                "lastUpdatedBy": {
                    "id": 75081173,
                    "code": "1683548591_",
                    "description": "",
                    "name": "bill holt",
                    "type": "ADMIN_USER"
                },
                "createdBy": {
                    "id": 75081173,
                    "code": "1683548591_",
                    "description": "",
                    "name": "bill holt",
                    "type": "ADMIN_USER"
                }
            },
            "webHookId": "64de97a75911e10007754a1f",
            "name": "64de953550f9570b6061ea79",
            "eventNames": [
                "transactionAdded"
            ],
            "webHookUrl": " ",
            "webHookType": "QUEUE_INT",
            "methodType": "POST",
            "webHookHeaders": {},
            "noOfRetryAttempts": 0,
            "maxAllowedConnections": 10,
            "active": false,
            "slaInSeconds": 0,
            "consumerGroupId": "a9e479b5-9daa-4e96-97cc-6105c7b6a9bb",
            "tillDetailsEnrichmentEnabled": false,
            "storeDetailsEnrichmentEnabled": false,
            "customerIdentifiersToBeEnriched": [],
            "awardedReferenceEnrichmentEnabled": false,
            "availablePointsBalanceEnrichmentEnabled": false
        },
        {
            "attribution": {
                "createdOn": "2023-09-28T12:40:09.467+0000",
                "lastUpdatedOn": "2023-09-29T06:08:01.528+0000",
                "lastUpdatedBy": {
                    "id": 75095696,
                    "code": "1695214633_",
                    "description": "",
                    "name": "jagrat cyntexa ",
                    "type": "ADMIN_USER"
                },
                "createdBy": {
                    "id": 75095696,
                    "code": "1695214633_",
                    "description": "",
                    "name": "jagrat cyntexa ",
                    "type": "ADMIN_USER"
                }
            },
            "webHookId": "65157429d0525700073f9a59",
            "name": "Cyntexa Test-1",
            "eventNames": [
                "rewardIssued",
                "targetCustomerEnrolment",
                "loyaltyCustomerMerge",
                "customerAdded",
                "customerUpdated",
                "transactionUpdated",
                "transactionRejected",
                "rejectedTransactionRetrigger",
                "transactionAdded",
                "issueRewardFailure",
                "pointsIssued",
                "pointsTransferredReceived",
                "rewardCreated",
                "rewardUpdated",
                "tierDowngraded",
                "tierUpgraded",
                "tierRenewed",
                "CouponIssue",
                "pointsRedeemed",
                "CouponRedeem",
                "promotionEarned",
                "pointsExpired",
                "notInterestedBillAdded",
                "promisedToCurrentPointsConversion",
                "groupUpdated",
                "groupCreated",
                "supplementaryMembershipExpiryReminder",
                "partnerProgramUpdated",
                "unifiedTargetsUnAchieved",
                "partnerProgramDelinked",
                "badgeEarned",
                "cartPromotionIssued",
                "manualPointsAdjustment",
                "redeemedPointsReversed",
                "cartPromotionEarned",
                "pointsTransferredInitiated",
                "partnerProgramLinked",
                "requestUpdated",
                "targetPeriodStarted",
                "promotionIssued",
                "pointsExpiryChange",
                "unifiedTargetsAchieved",
                "groupMemberRemoved",
                "targetValueAchieved",
                "singlePointsExpiryUpdated",
                "tierDowngradeReminder",
                "issuedPointsReversed",
                "groupMemberAdded",
                "pointsContributionToGroup",
                "targetAchievedValueUpdated",
                "cardUpdated",
                "cartPromotionRedeemed",
                "targetValueUpdated",
                "targetPeriodCompleted",
                "pointsExpiryReminder",
                "retroBillAdded",
                "cartPromotionRevoked"
            ],
            "webHookUrl": "https://gmailcomprojectsimplementat-dev-ed.develop.my.salesforce-sites.com/services/apexrest/capillaryTech",
            "webHookType": "HTTP",
            "methodType": "POST",
            "webHookHeaders": {
                "Content-Type": "application/json"
            },
            "noOfRetryAttempts": 0,
            "maxAllowedConnections": 20,
            "active": false,
            "slaInSeconds": 30,
            "consumerGroupId": "307531ae-757a-40d0-9319-bc63ecb27593",
            "tillDetailsEnrichmentEnabled": true,
            "storeDetailsEnrichmentEnabled": true,
            "customerIdentifiersToBeEnriched": [
                "WeChat",
                "WebEngage",
                "Instore"
            ],
            "awardedReferenceEnrichmentEnabled": false,
            "availablePointsBalanceEnrichmentEnabled": false
        },
        {
            "attribution": {
                "createdOn": "2023-10-04T08:56:41.375+0000",
                "lastUpdatedOn": "2023-10-04T08:56:41.375+0000",
                "lastUpdatedBy": {
                    "id": 75059628,
                    "code": "1656934597_",
                    "description": "",
                    "name": "surbhi manocha",
                    "type": "ADMIN_USER"
                },
                "createdBy": {
                    "id": 75059628,
                    "code": "1656934597_",
                    "description": "",
                    "name": "surbhi manocha",
                    "type": "ADMIN_USER"
                }
            },
            "webHookId": "651d28c9ab11970007962f74",
            "name": "651d23f378357a601b0fe422",
            "eventNames": [
                "customerAdded",
                "transactionAdded"
            ],
            "webHookUrl": " ",
            "webHookType": "QUEUE_INT",
            "methodType": "POST",
            "webHookHeaders": {},
            "noOfRetryAttempts": 0,
            "maxAllowedConnections": 10,
            "active": false,
            "slaInSeconds": 0,
            "consumerGroupId": "035b7e16-0935-4260-99f4-e4813e39ee98",
            "tillDetailsEnrichmentEnabled": false,
            "storeDetailsEnrichmentEnabled": false,
            "customerIdentifiersToBeEnriched": [],
            "awardedReferenceEnrichmentEnabled": false,
            "availablePointsBalanceEnrichmentEnabled": false
        },
        {
            "attribution": {
                "createdOn": "2023-10-04T09:00:43.621+0000",
                "lastUpdatedOn": "2023-10-04T09:00:43.621+0000",
                "lastUpdatedBy": {
                    "id": 75059628,
                    "code": "1656934597_",
                    "description": "",
                    "name": "surbhi manocha",
                    "type": "ADMIN_USER"
                },
                "createdBy": {
                    "id": 75059628,
                    "code": "1656934597_",
                    "description": "",
                    "name": "surbhi manocha",
                    "type": "ADMIN_USER"
                }
            },
            "webHookId": "651d29bbab11970007963af1",
            "name": "651d29605c39832d3c7fa643",
            "eventNames": [
                "customerAdded",
                "transactionAdded"
            ],
            "webHookUrl": " ",
            "webHookType": "QUEUE_INT",
            "methodType": "POST",
            "webHookHeaders": {},
            "noOfRetryAttempts": 0,
            "maxAllowedConnections": 10,
            "active": true,
            "slaInSeconds": 0,
            "consumerGroupId": "5d57b484-c43b-4d27-b073-3d0b3c5257a3",
            "tillDetailsEnrichmentEnabled": false,
            "storeDetailsEnrichmentEnabled": false,
            "customerIdentifiersToBeEnriched": [],
            "awardedReferenceEnrichmentEnabled": false,
            "availablePointsBalanceEnrichmentEnabled": false
        },
        {
            "attribution": {
                "createdOn": "2023-10-04T12:03:21.075+0000",
                "lastUpdatedOn": "2023-10-04T12:03:21.075+0000",
                "lastUpdatedBy": {
                    "id": 75059628,
                    "code": "1656934597_",
                    "description": "",
                    "name": "surbhi manocha",
                    "type": "ADMIN_USER"
                },
                "createdBy": {
                    "id": 75059628,
                    "code": "1656934597_",
                    "description": "",
                    "name": "surbhi manocha",
                    "type": "ADMIN_USER"
                }
            },
            "webHookId": "651d5489ab1197000797d855",
            "name": "651d541778357a601b0fec4a",
            "eventNames": [
                "transactionAdded"
            ],
            "webHookUrl": " ",
            "webHookType": "QUEUE_INT",
            "methodType": "POST",
            "webHookHeaders": {},
            "noOfRetryAttempts": 0,
            "maxAllowedConnections": 10,
            "active": true,
            "slaInSeconds": 0,
            "consumerGroupId": "172ec2cb-0702-4097-a925-c7b055139af1",
            "tillDetailsEnrichmentEnabled": false,
            "storeDetailsEnrichmentEnabled": false,
            "customerIdentifiersToBeEnriched": [],
            "awardedReferenceEnrichmentEnabled": false,
            "availablePointsBalanceEnrichmentEnabled": false
        },
        {
            "attribution": {
                "createdOn": "2023-10-04T13:55:46.367+0000",
                "lastUpdatedOn": "2023-10-04T13:55:46.367+0000",
                "lastUpdatedBy": {
                    "id": 75059628,
                    "code": "1656934597_",
                    "description": "",
                    "name": "surbhi manocha",
                    "type": "ADMIN_USER"
                },
                "createdBy": {
                    "id": 75059628,
                    "code": "1656934597_",
                    "description": "",
                    "name": "surbhi manocha",
                    "type": "ADMIN_USER"
                }
            },
            "webHookId": "651d6ee2ab1197000798cd71",
            "name": "651d6ec478357a601b0ff207",
            "eventNames": [
                "transactionAdded"
            ],
            "webHookUrl": " ",
            "webHookType": "QUEUE_INT",
            "methodType": "POST",
            "webHookHeaders": {},
            "noOfRetryAttempts": 0,
            "maxAllowedConnections": 10,
            "active": true,
            "slaInSeconds": 0,
            "consumerGroupId": "edea6359-1a14-484f-bd96-ae865484891b",
            "tillDetailsEnrichmentEnabled": false,
            "storeDetailsEnrichmentEnabled": false,
            "customerIdentifiersToBeEnriched": [],
            "awardedReferenceEnrichmentEnabled": false,
            "availablePointsBalanceEnrichmentEnabled": false
        },
        {
            "attribution": {
                "createdOn": "2023-10-06T09:14:57.568+0000",
                "lastUpdatedOn": "2023-10-06T09:14:57.568+0000",
                "lastUpdatedBy": {
                    "id": 75051396,
                    "code": "1633435871_",
                    "description": "",
                    "name": "Vinay Anantha",
                    "type": "ADMIN_USER"
                },
                "createdBy": {
                    "id": 75051396,
                    "code": "1633435871_",
                    "description": "",
                    "name": "Vinay Anantha",
                    "type": "ADMIN_USER"
                }
            },
            "webHookId": "651fd011ab11970007a77d99",
            "name": "651fd00278357a601b3333ae",
            "eventNames": [
                "transactionAdded"
            ],
            "webHookUrl": " ",
            "webHookType": "QUEUE_INT",
            "methodType": "POST",
            "webHookHeaders": {},
            "noOfRetryAttempts": 0,
            "maxAllowedConnections": 10,
            "active": false,
            "slaInSeconds": 0,
            "consumerGroupId": "f6b7d93d-9337-4cae-8ed3-6e87acd1f447",
            "tillDetailsEnrichmentEnabled": false,
            "storeDetailsEnrichmentEnabled": false,
            "customerIdentifiersToBeEnriched": [],
            "awardedReferenceEnrichmentEnabled": false,
            "availablePointsBalanceEnrichmentEnabled": false
        },
        {
            "attribution": {
                "createdOn": "2023-12-06T10:47:30.773+0000",
                "lastUpdatedOn": "2023-12-29T09:40:29.733+0000",
                "lastUpdatedBy": {
                    "id": 75095696,
                    "code": "1695214633_",
                    "description": "",
                    "name": "jagrat cyntexa ",
                    "type": "ADMIN_USER"
                },
                "createdBy": {
                    "id": 75095696,
                    "code": "1695214633_",
                    "description": "",
                    "name": "jagrat cyntexa ",
                    "type": "ADMIN_USER"
                }
            },
            "webHookId": "65705142db0cfe0007528040",
            "name": "TestCyn",
            "eventNames": [
                "customerUpdated",
                "customerAdded"
            ],
            "webHookUrl": "https://gmailcomlearnings-dev-ed.develop.my.salesforce-sites.com/services/apexrest/CapillaryClass",
            "webHookType": "HTTP",
            "methodType": "POST",
            "webHookHeaders": {
                ": "
            },
            "noOfRetryAttempts": 0,
            "maxAllowedConnections": 20,
            "active": false,
            "slaInSeconds": 5,
            "consumerGroupId": "8339be9e-3974-431b-acd3-6002a8bd6616",
            "tillDetailsEnrichmentEnabled": false,
            "storeDetailsEnrichmentEnabled": false,
            "customerIdentifiersToBeEnriched": [],
            "awardedReferenceEnrichmentEnabled": false,
            "availablePointsBalanceEnrichmentEnabled": false
        },
        {
            "attribution": {
                "createdOn": "2023-12-29T09:24:25.286+0000",
                "lastUpdatedOn": "2023-12-29T09:39:15.541+0000",
                "lastUpdatedBy": {
                    "id": 75095696,
                    "code": "1695214633_",
                    "description": "",
                    "name": "jagrat cyntexa ",
                    "type": "ADMIN_USER"
                },
                "createdBy": {
                    "id": 75095696,
                    "code": "1695214633_",
                    "description": "",
                    "name": "jagrat cyntexa ",
                    "type": "ADMIN_USER"
                }
            },
            "webHookId": "658e9049dc948200065835e2",
            "name": "TestWebhook",
            "eventNames": [
                "customerUpdated",
                "customerAdded"
            ],
            "webHookUrl": "https://webhook.site/bf5247ea-aec6-4058-8118-1745ece4ed1e",
            "webHookType": "HTTP",
            "methodType": "POST",
            "webHookHeaders": {
                ": "
            },
            "noOfRetryAttempts": 0,
            "maxAllowedConnections": 20,
            "active": true,
            "slaInSeconds": 30,
            "consumerGroupId": "092627c2-2286-451b-ab5f-e242ffb9a716",
            "tillDetailsEnrichmentEnabled": false,
            "storeDetailsEnrichmentEnabled": false,
            "customerIdentifiersToBeEnriched": [],
            "awardedReferenceEnrichmentEnabled": false,
            "availablePointsBalanceEnrichmentEnabled": false
        },
        {
            "attribution": {
                "createdOn": "2024-02-05T08:32:24.877+0000",
                "lastUpdatedOn": "2024-02-05T08:32:24.877+0000",
                "lastUpdatedBy": {
                    "id": 75095696,
                    "code": "1695214633_",
                    "description": "",
                    "name": "jagrat cyntexa ",
                    "type": "ADMIN_USER"
                },
                "createdBy": {
                    "id": 75095696,
                    "code": "1695214633_",
                    "description": "",
                    "name": "jagrat cyntexa ",
                    "type": "ADMIN_USER"
                }
            },
            "webHookId": "65c09d188d917f00083ce4f5",
            "name": "cynTest",
            "eventNames": [
                "customerUpdated"
            ],
            "webHookUrl": "https://rockyroad-pistachio-7291-dev-ed.scratch.my.salesforce-sites.com/services/apexrest/testWebhook",
            "webHookType": "HTTP",
            "methodType": "POST",
            "webHookHeaders": {
                ": "
            },
            "noOfRetryAttempts": 0,
            "maxAllowedConnections": 20,
            "active": true,
            "slaInSeconds": 30,
            "consumerGroupId": "2d315b48-6757-4fed-aac7-ee384f40c8ce",
            "tillDetailsEnrichmentEnabled": false,
            "storeDetailsEnrichmentEnabled": false,
            "customerIdentifiersToBeEnriched": [],
            "awardedReferenceEnrichmentEnabled": false,
            "availablePointsBalanceEnrichmentEnabled": false
        },
        {
            "attribution": {
                "createdOn": "2024-03-07T09:48:01.992+0000",
                "lastUpdatedOn": "2024-03-07T09:48:01.992+0000",
                "lastUpdatedBy": {
                    "id": 75060177,
                    "code": "1657879751_",
                    "description": "",
                    "name": "mohammad milhem@capillarytech.com",
                    "type": "ADMIN_USER"
                },
                "createdBy": {
                    "id": 75060177,
                    "code": "1657879751_",
                    "description": "",
                    "name": "mohammad milhem@capillarytech.com",
                    "type": "ADMIN_USER"
                }
            },
            "webHookId": "65e98d52de19d60007990378",
            "name": "MoE Events",
            "eventNames": [
                "customerUpdated",
                "customerAdded",
                "rewardIssued",
                "issueRewardFailure",
                "notInterestedBillAdded",
                "promisedToCurrentPointsConversion",
                "pointsTransferredReceived",
                "groupCreated",
                "pointsIssued",
                "groupUpdated",
                "partnerProgramUpdated",
                "supplementaryMembershipExpiryReminder",
                "targetCustomerEnrolment",
                "badgeEarned",
                "cartPromotionIssued",
                "rewardCreated",
                "redeemedPointsReversed",
                "manualPointsAdjustment",
                "cartPromotionEarned",
                "tierDowngraded",
                "pointsTransferredInitiated",
                "tierUpgraded",
                "loyaltyCustomerMerge",
                "partnerProgramLinked",
                "requestUpdated",
                "pointsExpiryChange",
                "pointsExpired",
                "promotionIssued",
                "targetPeriodStarted",
                "rewardUpdated",
                "unifiedTargetsAchieved",
                "transactionUpdated",
                "groupMemberRemoved",
                "targetValueAchieved",
                "singlePointsExpiryUpdated",
                "transactionRejected",
                "tierDowngradeReminder",
                "groupMemberAdded",
                "issuedPointsReversed",
                "pointsContributionToGroup",
                "CouponRedeem",
                "promotionEarned",
                "pointsExpiryReminder",
                "retroBillAdded",
                "pointsRedeemed",
                "cartPromotionRevoked",
                "transactionAdded",
                "rejectedTransactionRetrigger",
                "CouponIssue",
                "tierRenewed",
                "targetAchievedValueUpdated",
                "cardUpdated",
                "cartPromotionRedeemed",
                "targetValueUpdated",
                "requestWorkflowEvent",
                "targetPeriodCompleted"
            ],
            "webHookUrl": "www.moengage.com/test",
            "webHookType": "HTTP",
            "methodType": "POST",
            "webHookHeaders": {
                "test": "test"
            },
            "noOfRetryAttempts": 0,
            "maxAllowedConnections": 20,
            "active": true,
            "slaInSeconds": 30,
            "consumerGroupId": "9083db89-c5fa-434b-b164-901dc363224a",
            "tillDetailsEnrichmentEnabled": false,
            "storeDetailsEnrichmentEnabled": false,
            "customerIdentifiersToBeEnriched": [],
            "awardedReferenceEnrichmentEnabled": false,
            "availablePointsBalanceEnrichmentEnabled": false
        },
        {
            "attribution": {
                "createdOn": "2024-03-07T09:48:24.910+0000",
                "lastUpdatedOn": "2024-03-07T09:48:24.910+0000",
                "lastUpdatedBy": {
                    "id": 75060177,
                    "code": "1657879751_",
                    "description": "",
                    "name": "mohammad milhem@capillarytech.com",
                    "type": "ADMIN_USER"
                },
                "createdBy": {
                    "id": 75060177,
                    "code": "1657879751_",
                    "description": "",
                    "name": "mohammad milhem@capillarytech.com",
                    "type": "ADMIN_USER"
                }
            },
            "webHookId": "65e98d68de19d600079904ac",
            "name": "MoE Events_",
            "eventNames": [
                "customerUpdated",
                "customerAdded",
                "rewardIssued",
                "issueRewardFailure",
                "notInterestedBillAdded",
                "promisedToCurrentPointsConversion",
                "pointsTransferredReceived",
                "groupCreated",
                "pointsIssued",
                "groupUpdated",
                "partnerProgramUpdated",
                "supplementaryMembershipExpiryReminder",
                "targetCustomerEnrolment",
                "badgeEarned",
                "cartPromotionIssued",
                "rewardCreated",
                "redeemedPointsReversed",
                "manualPointsAdjustment",
                "cartPromotionEarned",
                "tierDowngraded",
                "pointsTransferredInitiated",
                "tierUpgraded",
                "loyaltyCustomerMerge",
                "partnerProgramLinked",
                "requestUpdated",
                "pointsExpiryChange",
                "pointsExpired",
                "promotionIssued",
                "targetPeriodStarted",
                "rewardUpdated",
                "unifiedTargetsAchieved",
                "transactionUpdated",
                "groupMemberRemoved",
                "targetValueAchieved",
                "singlePointsExpiryUpdated",
                "transactionRejected",
                "tierDowngradeReminder",
                "groupMemberAdded",
                "issuedPointsReversed",
                "pointsContributionToGroup",
                "CouponRedeem",
                "promotionEarned",
                "pointsExpiryReminder",
                "retroBillAdded",
                "pointsRedeemed",
                "cartPromotionRevoked",
                "transactionAdded",
                "rejectedTransactionRetrigger",
                "CouponIssue",
                "tierRenewed",
                "targetAchievedValueUpdated",
                "cardUpdated",
                "cartPromotionRedeemed",
                "targetValueUpdated",
                "requestWorkflowEvent",
                "targetPeriodCompleted"
            ],
            "webHookUrl": "www.moengage.com/test",
            "webHookType": "HTTP",
            "methodType": "POST",
            "webHookHeaders": {
                "test": "test"
            },
            "noOfRetryAttempts": 0,
            "maxAllowedConnections": 20,
            "active": true,
            "slaInSeconds": 30,
            "consumerGroupId": "1c3014c3-b15a-4138-8282-66cb5b0ab39e",
            "tillDetailsEnrichmentEnabled": false,
            "storeDetailsEnrichmentEnabled": false,
            "customerIdentifiersToBeEnriched": [],
            "awardedReferenceEnrichmentEnabled": false,
            "availablePointsBalanceEnrichmentEnabled": false
        },
        {
            "attribution": {
                "createdOn": "2024-03-07T09:48:53.552+0000",
                "lastUpdatedOn": "2024-03-07T09:48:53.552+0000",
                "lastUpdatedBy": {
                    "id": 75060177,
                    "code": "1657879751_",
                    "description": "",
                    "name": "mohammad milhem@capillarytech.com",
                    "type": "ADMIN_USER"
                },
                "createdBy": {
                    "id": 75060177,
                    "code": "1657879751_",
                    "description": "",
                    "name": "mohammad milhem@capillarytech.com",
                    "type": "ADMIN_USER"
                }
            },
            "webHookId": "65e98d85de19d600079905f9",
            "name": "MoEngage Events_1",
            "eventNames": [
                "customerUpdated",
                "customerAdded",
                "rewardIssued",
                "issueRewardFailure",
                "notInterestedBillAdded",
                "promisedToCurrentPointsConversion",
                "pointsTransferredReceived",
                "groupCreated",
                "pointsIssued",
                "groupUpdated",
                "partnerProgramUpdated",
                "supplementaryMembershipExpiryReminder",
                "targetCustomerEnrolment",
                "badgeEarned",
                "cartPromotionIssued",
                "rewardCreated",
                "redeemedPointsReversed",
                "manualPointsAdjustment",
                "cartPromotionEarned",
                "tierDowngraded",
                "pointsTransferredInitiated",
                "tierUpgraded",
                "loyaltyCustomerMerge",
                "partnerProgramLinked",
                "requestUpdated",
                "pointsExpiryChange",
                "pointsExpired",
                "promotionIssued",
                "targetPeriodStarted",
                "rewardUpdated",
                "unifiedTargetsAchieved",
                "transactionUpdated",
                "groupMemberRemoved",
                "targetValueAchieved",
                "singlePointsExpiryUpdated",
                "transactionRejected",
                "tierDowngradeReminder",
                "groupMemberAdded",
                "issuedPointsReversed",
                "pointsContributionToGroup",
                "CouponRedeem",
                "promotionEarned",
                "pointsExpiryReminder",
                "retroBillAdded",
                "pointsRedeemed",
                "cartPromotionRevoked",
                "transactionAdded",
                "rejectedTransactionRetrigger",
                "CouponIssue",
                "tierRenewed",
                "targetAchievedValueUpdated",
                "cardUpdated",
                "cartPromotionRedeemed",
                "targetValueUpdated",
                "requestWorkflowEvent",
                "targetPeriodCompleted"
            ],
            "webHookUrl": "www.moengage.com/test1",
            "webHookType": "HTTP",
            "methodType": "POST",
            "webHookHeaders": {
                "test_": "test"
            },
            "noOfRetryAttempts": 0,
            "maxAllowedConnections": 20,
            "active": true,
            "slaInSeconds": 30,
            "consumerGroupId": "46f8712d-4017-4de2-b892-42e307bc23b3",
            "tillDetailsEnrichmentEnabled": false,
            "storeDetailsEnrichmentEnabled": false,
            "customerIdentifiersToBeEnriched": [],
            "awardedReferenceEnrichmentEnabled": false,
            "availablePointsBalanceEnrichmentEnabled": false
        },
        {
            "attribution": {
                "createdOn": "2024-04-12T06:49:20.410+0000",
                "lastUpdatedOn": "2024-04-12T07:05:57.648+0000",
                "lastUpdatedBy": {
                    "id": 75015489,
                    "code": "1491395484_919600167818",
                    "description": "",
                    "name": "Achyuthanandan S",
                    "type": "ADMIN_USER"
                },
                "createdBy": {
                    "id": 75015489,
                    "code": "1491395484_919600167818",
                    "description": "",
                    "name": "Achyuthanandan S",
                    "type": "ADMIN_USER"
                }
            },
            "webHookId": "6618d970bee6ee000741bfdb",
            "name": "Test webhook_pm",
            "eventNames": [
                "targetCustomerEnrolment",
                "customerUpdated"
            ],
            "webHookUrl": "https://webhook.site/90dbf639-2792-4f71-a2a3-e1c9eea13964",
            "webHookType": "HTTP",
            "methodType": "POST",
            "webHookHeaders": {
                ": "
            },
            "noOfRetryAttempts": 0,
            "maxAllowedConnections": 20,
            "active": true,
            "slaInSeconds": 30,
            "consumerGroupId": "0a427500-1716-40f5-a46e-761cea2b222b",
            "tillDetailsEnrichmentEnabled": false,
            "storeDetailsEnrichmentEnabled": false,
            "customerIdentifiersToBeEnriched": [],
            "awardedReferenceEnrichmentEnabled": false,
            "availablePointsBalanceEnrichmentEnabled": false
        },
        {
            "attribution": {
                "createdOn": "2024-04-17T07:20:12.041+0000",
                "lastUpdatedOn": "2024-04-17T07:20:12.041+0000",
                "lastUpdatedBy": null,
                "createdBy": {
                    "id": 75113747,
                    "code": "1707820510_",
                    "description": "",
                    "name": "keerthana priya",
                    "type": "ADMIN_USER"
                }
            },
            "webHookId": "661f782cbee6ee00074e665c",
            "name": "661939537d497270f1b78717_0|0",
            "eventNames": [
                "customerAdded"
            ],
            "webHookUrl": " ",
            "webHookType": "QUEUE_INT",
            "methodType": "POST",
            "webHookHeaders": {},
            "noOfRetryAttempts": 0,
            "maxAllowedConnections": 10,
            "active": false,
            "slaInSeconds": 0,
            "consumerGroupId": "4b07fd01-6401-4f20-b5f8-1aaaf97d0dd5",
            "tillDetailsEnrichmentEnabled": false,
            "storeDetailsEnrichmentEnabled": false,
            "customerIdentifiersToBeEnriched": [],
            "awardedReferenceEnrichmentEnabled": false,
            "availablePointsBalanceEnrichmentEnabled": false
        },
        {
            "attribution": {
                "createdOn": "2024-04-17T07:29:27.142+0000",
                "lastUpdatedOn": "2024-04-17T07:29:27.142+0000",
                "lastUpdatedBy": null,
                "createdBy": {
                    "id": 75059628,
                    "code": "1656934597_",
                    "description": "",
                    "name": "surbhi manocha",
                    "type": "ADMIN_USER"
                }
            },
            "webHookId": "661f7a5701d471000737dcc9",
            "name": "661f75d9d1f10e05f22454e5_0|0",
            "eventNames": [
                "transactionAdded"
            ],
            "webHookUrl": " ",
            "webHookType": "QUEUE_INT",
            "methodType": "POST",
            "webHookHeaders": {},
            "noOfRetryAttempts": 0,
            "maxAllowedConnections": 10,
            "active": false,
            "slaInSeconds": 0,
            "consumerGroupId": "ddff7a2a-c40a-4c09-96f4-c6472920df05",
            "tillDetailsEnrichmentEnabled": false,
            "storeDetailsEnrichmentEnabled": false,
            "customerIdentifiersToBeEnriched": [],
            "awardedReferenceEnrichmentEnabled": false,
            "availablePointsBalanceEnrichmentEnabled": false
        },
        {
            "attribution": {
                "createdOn": "2024-04-17T07:46:59.684+0000",
                "lastUpdatedOn": "2024-04-17T07:46:59.684+0000",
                "lastUpdatedBy": null,
                "createdBy": {
                    "id": 75113747,
                    "code": "1707820510_",
                    "description": "",
                    "name": "keerthana priya",
                    "type": "ADMIN_USER"
                }
            },
            "webHookId": "661f7e73bee6ee00074e74fa",
            "name": "661939537d497270f1b78717_0|1",
            "eventNames": [
                "customerAdded"
            ],
            "webHookUrl": " ",
            "webHookType": "QUEUE_INT",
            "methodType": "POST",
            "webHookHeaders": {},
            "noOfRetryAttempts": 0,
            "maxAllowedConnections": 10,
            "active": false,
            "slaInSeconds": 0,
            "consumerGroupId": "28186b09-8ced-414c-a42e-4df5db523b60",
            "tillDetailsEnrichmentEnabled": false,
            "storeDetailsEnrichmentEnabled": false,
            "customerIdentifiersToBeEnriched": [],
            "awardedReferenceEnrichmentEnabled": false,
            "availablePointsBalanceEnrichmentEnabled": false
        },
        {
            "attribution": {
                "createdOn": "2024-04-17T08:05:34.215+0000",
                "lastUpdatedOn": "2024-04-17T08:05:34.215+0000",
                "lastUpdatedBy": null,
                "createdBy": {
                    "id": 75059628,
                    "code": "1656934597_",
                    "description": "",
                    "name": "surbhi manocha",
                    "type": "ADMIN_USER"
                }
            },
            "webHookId": "661f82cebee6ee00074e7cdd",
            "name": "661f75d9d1f10e05f22454e5_0|1",
            "eventNames": [
                "transactionAdded"
            ],
            "webHookUrl": " ",
            "webHookType": "QUEUE_INT",
            "methodType": "POST",
            "webHookHeaders": {},
            "noOfRetryAttempts": 0,
            "maxAllowedConnections": 10,
            "active": true,
            "slaInSeconds": 0,
            "consumerGroupId": "d16a6d89-e808-4ba3-9230-3487f9e6fc07",
            "tillDetailsEnrichmentEnabled": false,
            "storeDetailsEnrichmentEnabled": false,
            "customerIdentifiersToBeEnriched": [],
            "awardedReferenceEnrichmentEnabled": false,
            "availablePointsBalanceEnrichmentEnabled": false
        },
        {
            "attribution": {
                "createdOn": "2024-04-18T16:44:06.623+0000",
                "lastUpdatedOn": "2024-04-18T16:44:06.623+0000",
                "lastUpdatedBy": null,
                "createdBy": {
                    "id": 75113747,
                    "code": "1707820510_",
                    "description": "",
                    "name": "keerthana priya",
                    "type": "ADMIN_USER"
                }
            },
            "webHookId": "66214dd6bee6ee000752286b",
            "name": "661939537d497270f1b78717_0|2",
            "eventNames": [
                "customerAdded"
            ],
            "webHookUrl": " ",
            "webHookType": "QUEUE_INT",
            "methodType": "POST",
            "webHookHeaders": {},
            "noOfRetryAttempts": 0,
            "maxAllowedConnections": 10,
            "active": true,
            "slaInSeconds": 0,
            "consumerGroupId": "c5fb3682-676d-484a-b6b4-1e096e371371",
            "tillDetailsEnrichmentEnabled": false,
            "storeDetailsEnrichmentEnabled": false,
            "customerIdentifiersToBeEnriched": [],
            "awardedReferenceEnrichmentEnabled": false,
            "availablePointsBalanceEnrichmentEnabled": false
        },
        {
            "attribution": {
                "createdOn": "2024-05-07T12:15:26.087+0000",
                "lastUpdatedOn": "2024-05-07T12:15:26.087+0000",
                "lastUpdatedBy": null,
                "createdBy": {
                    "id": 75059628,
                    "code": "1656934597_",
                    "description": "",
                    "name": "surbhi manocha",
                    "type": "ADMIN_USER"
                }
            },
            "webHookId": "663a1b5e56a8560007ce8b39",
            "name": "663a1b211c835f4f9bd75a93_0|0",
            "eventNames": [
                "transactionAdded"
            ],
            "webHookUrl": " ",
            "webHookType": "QUEUE_INT",
            "methodType": "POST",
            "webHookHeaders": {},
            "noOfRetryAttempts": 0,
            "maxAllowedConnections": 10,
            "active": false,
            "slaInSeconds": 0,
            "consumerGroupId": "b0b4a3a1-7516-44e7-9cc1-53484b0fd9a6",
            "tillDetailsEnrichmentEnabled": false,
            "storeDetailsEnrichmentEnabled": false,
            "customerIdentifiersToBeEnriched": [],
            "awardedReferenceEnrichmentEnabled": false,
            "availablePointsBalanceEnrichmentEnabled": false
        },
        {
            "attribution": {
                "createdOn": "2024-05-07T13:44:22.048+0000",
                "lastUpdatedOn": "2024-05-07T13:44:22.048+0000",
                "lastUpdatedBy": null,
                "createdBy": {
                    "id": 75059628,
                    "code": "1656934597_",
                    "description": "",
                    "name": "surbhi manocha",
                    "type": "ADMIN_USER"
                }
            },
            "webHookId": "663a303656a8560007cec63b",
            "name": "663a1b211c835f4f9bd75a93_0|1",
            "eventNames": [
                "transactionAdded"
            ],
            "webHookUrl": " ",
            "webHookType": "QUEUE_INT",
            "methodType": "POST",
            "webHookHeaders": {},
            "noOfRetryAttempts": 0,
            "maxAllowedConnections": 10,
            "active": true,
            "slaInSeconds": 0,
            "consumerGroupId": "192d6e83-9f8e-415d-8437-9315a87af253",
            "tillDetailsEnrichmentEnabled": false,
            "storeDetailsEnrichmentEnabled": false,
            "customerIdentifiersToBeEnriched": [],
            "awardedReferenceEnrichmentEnabled": false,
            "availablePointsBalanceEnrichmentEnabled": false
        },
        {
            "attribution": {
                "createdOn": "2024-05-08T12:50:45.690+0000",
                "lastUpdatedOn": "2024-05-08T12:50:45.690+0000",
                "lastUpdatedBy": {
                    "id": 75059628,
                    "code": "1656934597_",
                    "description": "",
                    "name": "surbhi manocha",
                    "type": "ADMIN_USER"
                },
                "createdBy": {
                    "id": 75059628,
                    "code": "1656934597_",
                    "description": "",
                    "name": "surbhi manocha",
                    "type": "ADMIN_USER"
                }
            },
            "webHookId": "663b752573112900077c0073",
            "name": "651d6ec478357a601b0ff207_1",
            "eventNames": [
                "transactionAdded"
            ],
            "webHookUrl": " ",
            "webHookType": "QUEUE_INT",
            "methodType": "POST",
            "webHookHeaders": {},
            "noOfRetryAttempts": 0,
            "maxAllowedConnections": 10,
            "active": true,
            "slaInSeconds": 0,
            "consumerGroupId": "27a06832-2bf0-41b0-806d-9dd024cd7277",
            "tillDetailsEnrichmentEnabled": false,
            "storeDetailsEnrichmentEnabled": false,
            "customerIdentifiersToBeEnriched": [],
            "awardedReferenceEnrichmentEnabled": false,
            "availablePointsBalanceEnrichmentEnabled": false
        },
        {
            "attribution": {
                "createdOn": "2024-05-23T10:16:44.523+0000",
                "lastUpdatedOn": "2024-05-23T10:16:44.523+0000",
                "lastUpdatedBy": {
                    "id": 75065114,
                    "code": "1665170389_",
                    "description": "",
                    "name": "amogh rane ",
                    "type": "ADMIN_USER"
                },
                "createdBy": {
                    "id": 75065114,
                    "code": "1665170389_",
                    "description": "",
                    "name": "amogh rane ",
                    "type": "ADMIN_USER"
                }
            },
            "webHookId": "664f178c512d9f00070247dd",
            "name": "664f17748355682c2592c8c2",
            "eventNames": [
                "transactionAdded"
            ],
            "webHookUrl": " ",
            "webHookType": "QUEUE_INT",
            "methodType": "POST",
            "webHookHeaders": {},
            "noOfRetryAttempts": 0,
            "maxAllowedConnections": 10,
            "active": true,
            "slaInSeconds": 0,
            "consumerGroupId": "f4aa3aac-3901-4f29-9094-29f1454dc754",
            "tillDetailsEnrichmentEnabled": false,
            "storeDetailsEnrichmentEnabled": false,
            "customerIdentifiersToBeEnriched": [],
            "awardedReferenceEnrichmentEnabled": false,
            "availablePointsBalanceEnrichmentEnabled": false
        },
        {
            "attribution": {
                "createdOn": "2024-05-27T14:05:52.608+0000",
                "lastUpdatedOn": "2024-05-27T14:05:52.608+0000",
                "lastUpdatedBy": null,
                "createdBy": null
            },
            "webHookId": "66549340512d9f00071c49d1",
            "name": "665492d37c0cc273fbb34bfc_0|0",
            "eventNames": [
                "transactionAdded"
            ],
            "webHookUrl": " ",
            "webHookType": "QUEUE_INT",
            "methodType": "POST",
            "webHookHeaders": {},
            "noOfRetryAttempts": 0,
            "maxAllowedConnections": 10,
            "active": true,
            "slaInSeconds": 0,
            "consumerGroupId": "aa5656a4-d3df-4fb9-9620-76741044affd",
            "tillDetailsEnrichmentEnabled": false,
            "storeDetailsEnrichmentEnabled": false,
            "customerIdentifiersToBeEnriched": [],
            "awardedReferenceEnrichmentEnabled": false,
            "availablePointsBalanceEnrichmentEnabled": false
        },
        {
            "attribution": {
                "createdOn": "2024-07-11T09:50:32.934+0000",
                "lastUpdatedOn": "2024-07-11T09:50:32.934+0000",
                "lastUpdatedBy": {
                    "id": 75065114,
                    "code": "1665170389_",
                    "description": "",
                    "name": "amogh rane ",
                    "type": "ADMIN_USER"
                },
                "createdBy": {
                    "id": 75065114,
                    "code": "1665170389_",
                    "description": "",
                    "name": "amogh rane ",
                    "type": "ADMIN_USER"
                }
            },
            "webHookId": "668faae8d4a8ac0007f1b6c1",
            "name": "65a6766b6fe5f46cc7994d16",
            "eventNames": [
                "transactionAdded"
            ],
            "webHookUrl": " ",
            "webHookType": "QUEUE_INT",
            "methodType": "POST",
            "webHookHeaders": {},
            "noOfRetryAttempts": 0,
            "maxAllowedConnections": 10,
            "active": true,
            "slaInSeconds": 0,
            "consumerGroupId": "d242c992-8bc3-4cab-a3d9-f2d43ca67a57",
            "tillDetailsEnrichmentEnabled": false,
            "storeDetailsEnrichmentEnabled": false,
            "customerIdentifiersToBeEnriched": [],
            "awardedReferenceEnrichmentEnabled": false,
            "availablePointsBalanceEnrichmentEnabled": false
        },
        {
            "attribution": {
                "createdOn": "2024-07-12T06:43:50.202+0000",
                "lastUpdatedOn": "2024-07-12T06:43:50.202+0000",
                "lastUpdatedBy": {
                    "id": 75065114,
                    "code": "1665170389_",
                    "description": "",
                    "name": "amogh rane ",
                    "type": "ADMIN_USER"
                },
                "createdBy": {
                    "id": 75015489,
                    "code": "1491395484_919600167818",
                    "description": "",
                    "name": "Achyuthanandan S",
                    "type": "ADMIN_USER"
                }
            },
            "webHookId": "6690d0a68aedb30007640e32",
            "name": "667ab6ff888b2d2760f8780d",
            "eventNames": [
                "transactionAdded"
            ],
            "webHookUrl": " ",
            "webHookType": "QUEUE_INT",
            "methodType": "POST",
            "webHookHeaders": {},
            "noOfRetryAttempts": 0,
            "maxAllowedConnections": 10,
            "active": false,
            "slaInSeconds": 0,
            "consumerGroupId": "8cd3197a-c953-43b3-8b44-c7b9a97ff06b",
            "tillDetailsEnrichmentEnabled": false,
            "storeDetailsEnrichmentEnabled": false,
            "customerIdentifiersToBeEnriched": [],
            "awardedReferenceEnrichmentEnabled": false,
            "availablePointsBalanceEnrichmentEnabled": false
        },
        {
            "attribution": {
                "createdOn": "2024-07-24T05:44:06.741+0000",
                "lastUpdatedOn": "2024-07-24T05:44:06.741+0000",
                "lastUpdatedBy": {
                    "id": 75030996,
                    "code": "1552291147_",
                    "description": "",
                    "name": "Henry Sihaloho",
                    "type": "ADMIN_USER"
                },
                "createdBy": {
                    "id": 75030996,
                    "code": "1552291147_",
                    "description": "",
                    "name": "Henry Sihaloho",
                    "type": "ADMIN_USER"
                }
            },
            "webHookId": "66a094a63e9d910007320dc3",
            "name": "669a2eea13528a5d04ab1a50",
            "eventNames": [
                "transactionAdded"
            ],
            "webHookUrl": " ",
            "webHookType": "QUEUE_INT",
            "methodType": "POST",
            "webHookHeaders": {},
            "noOfRetryAttempts": 0,
            "maxAllowedConnections": 10,
            "active": false,
            "slaInSeconds": 0,
            "consumerGroupId": "da2c2113-efb1-4ccc-95e3-faf662776e85",
            "tillDetailsEnrichmentEnabled": false,
            "storeDetailsEnrichmentEnabled": false,
            "customerIdentifiersToBeEnriched": [],
            "awardedReferenceEnrichmentEnabled": false,
            "availablePointsBalanceEnrichmentEnabled": false
        },
        {
            "attribution": {
                "createdOn": "2024-07-29T10:04:12.431+0000",
                "lastUpdatedOn": "2024-07-29T10:04:12.431+0000",
                "lastUpdatedBy": null,
                "createdBy": {
                    "id": 75065114,
                    "code": "1665170389_",
                    "description": "",
                    "name": "amogh rane ",
                    "type": "ADMIN_USER"
                }
            },
            "webHookId": "66a7691ca717dc0007cee5d5",
            "name": "6618d6f15ef34b4817c71b51_0|0",
            "eventNames": [
                "transactionAdded"
            ],
            "webHookUrl": " ",
            "webHookType": "QUEUE_INT",
            "methodType": "POST",
            "webHookHeaders": {},
            "noOfRetryAttempts": 0,
            "maxAllowedConnections": 10,
            "active": false,
            "slaInSeconds": 0,
            "consumerGroupId": "d30a2f3b-1b02-40f4-9252-a48e91f0b200",
            "tillDetailsEnrichmentEnabled": false,
            "storeDetailsEnrichmentEnabled": false,
            "customerIdentifiersToBeEnriched": [],
            "awardedReferenceEnrichmentEnabled": false,
            "availablePointsBalanceEnrichmentEnabled": false
        },
        {
            "attribution": {
                "createdOn": "2024-07-29T13:51:33.016+0000",
                "lastUpdatedOn": "2024-07-29T13:51:33.016+0000",
                "lastUpdatedBy": {
                    "id": 75047211,
                    "code": "1612322467_",
                    "description": "",
                    "name": "Mansi Dalal",
                    "type": "ADMIN_USER"
                },
                "createdBy": {
                    "id": 75047211,
                    "code": "1612322467_",
                    "description": "",
                    "name": "Mansi Dalal",
                    "type": "ADMIN_USER"
                }
            },
            "webHookId": "66a79e653e9d910007501727",
            "name": "test nike",
            "eventNames": [
                "customerUpdated",
                "customerAdded",
                "rewardIssued",
                "issueRewardFailure",
                "notInterestedBillAdded",
                "promisedToCurrentPointsConversion",
                "pointsTransferredReceived",
                "groupCreated",
                "pointsIssued",
                "groupUpdated",
                "partnerProgramUpdated",
                "supplementaryMembershipExpiryReminder",
                "targetCustomerEnrolment",
                "badgeEarned",
                "cartPromotionIssued",
                "rewardCreated",
                "redeemedPointsReversed",
                "manualPointsAdjustment",
                "cartPromotionEarned",
                "tierDowngraded",
                "pointsTransferredInitiated",
                "tierUpgraded",
                "loyaltyCustomerMerge",
                "partnerProgramLinked",
                "requestUpdated",
                "pointsExpiryChange",
                "pointsExpired",
                "promotionIssued",
                "rewardUpdated",
                "transactionUpdated",
                "groupMemberRemoved",
                "singlePointsExpiryUpdated",
                "transactionRejected",
                "tierDowngradeReminder",
                "groupMemberAdded",
                "issuedPointsReversed",
                "pointsContributionToGroup",
                "CouponRedeem",
                "promotionEarned",
                "pointsExpiryReminder",
                "retroBillAdded",
                "pointsRedeemed",
                "cartPromotionRevoked",
                "transactionAdded",
                "rejectedTransactionRetrigger",
                "CouponIssue",
                "tierRenewed",
                "cardUpdated",
                "cartPromotionRedeemed",
                "requestWorkflowEvent"
            ],
            "webHookUrl": "https://cdff73b9a2402e9fefb3533684982109.m.pipedream.net",
            "webHookType": "HTTP",
            "methodType": "POST",
            "webHookHeaders": {
                ": "
            },
            "noOfRetryAttempts": 0,
            "maxAllowedConnections": 20,
            "active": false,
            "slaInSeconds": 30,
            "consumerGroupId": "a64d6101-9cfe-4376-87af-1270dd3e9efc",
            "tillDetailsEnrichmentEnabled": true,
            "storeDetailsEnrichmentEnabled": false,
            "customerIdentifiersToBeEnriched": [],
            "awardedReferenceEnrichmentEnabled": false,
            "availablePointsBalanceEnrichmentEnabled": false
        },
        {
            "attribution": {
                "createdOn": "2024-07-29T13:52:31.244+0000",
                "lastUpdatedOn": "2024-07-29T13:55:23.141+0000",
                "lastUpdatedBy": {
                    "id": 75047211,
                    "code": "1612322467_",
                    "description": "",
                    "name": "Mansi Dalal",
                    "type": "ADMIN_USER"
                },
                "createdBy": {
                    "id": 75047211,
                    "code": "1612322467_",
                    "description": "",
                    "name": "Mansi Dalal",
                    "type": "ADMIN_USER"
                }
            },
            "webHookId": "66a79e9f3e9d9100075018d4",
            "name": "test nike 1",
            "eventNames": [
                "targetCustomerEnrolment",
                "targetPeriodCompleted",
                "targetValueAchieved"
            ],
            "webHookUrl": "https://cdff73b9a2402e9fefb3533684982109.m.pipedream.net",
            "webHookType": "HTTP",
            "methodType": "POST",
            "webHookHeaders": {
                "test": "test"
            },
            "noOfRetryAttempts": 0,
            "maxAllowedConnections": 20,
            "active": true,
            "slaInSeconds": 30,
            "consumerGroupId": "a317c340-1121-4f37-aa33-8b69a83f7f0b",
            "tillDetailsEnrichmentEnabled": true,
            "storeDetailsEnrichmentEnabled": false,
            "customerIdentifiersToBeEnriched": [],
            "awardedReferenceEnrichmentEnabled": false,
            "availablePointsBalanceEnrichmentEnabled": false
        },
        {
            "attribution": {
                "createdOn": "2024-08-02T05:21:40.072+0000",
                "lastUpdatedOn": "2024-08-02T05:21:40.072+0000",
                "lastUpdatedBy": {
                    "id": 75030996,
                    "code": "1552291147_",
                    "description": "",
                    "name": "Henry Sihaloho",
                    "type": "ADMIN_USER"
                },
                "createdBy": {
                    "id": 75030996,
                    "code": "1552291147_",
                    "description": "",
                    "name": "Henry Sihaloho",
                    "type": "ADMIN_USER"
                }
            },
            "webHookId": "66ac6ce4c843e400073abdcd",
            "name": "669a354513528a5d04ab1a8f",
            "eventNames": [
                "transactionAdded"
            ],
            "webHookUrl": " ",
            "webHookType": "QUEUE_INT",
            "methodType": "POST",
            "webHookHeaders": {},
            "noOfRetryAttempts": 0,
            "maxAllowedConnections": 10,
            "active": false,
            "slaInSeconds": 0,
            "consumerGroupId": "9d9af79a-515f-42ad-b2d4-19616069e6e6",
            "tillDetailsEnrichmentEnabled": false,
            "storeDetailsEnrichmentEnabled": false,
            "customerIdentifiersToBeEnriched": [],
            "awardedReferenceEnrichmentEnabled": false,
            "availablePointsBalanceEnrichmentEnabled": false
        },
        {
            "attribution": {
                "createdOn": "2024-08-04T10:15:19.233+0000",
                "lastUpdatedOn": "2024-08-04T10:15:19.233+0000",
                "lastUpdatedBy": {
                    "id": 75128232,
                    "code": "1717388002_",
                    "description": "",
                    "name": "bhuvanesh gogineni",
                    "type": "ADMIN_USER"
                },
                "createdBy": {
                    "id": 75128232,
                    "code": "1717388002_",
                    "description": "",
                    "name": "bhuvanesh gogineni",
                    "type": "ADMIN_USER"
                }
            },
            "webHookId": "66af54b7918732000767bf2c",
            "name": "Test ASOS",
            "eventNames": [
                "pointsIssued"
            ],
            "webHookUrl": "braze.com/xxxx",
            "webHookType": "HTTP",
            "methodType": "POST",
            "webHookHeaders": {
                ": "
            },
            "noOfRetryAttempts": 0,
            "maxAllowedConnections": 20,
            "active": false,
            "slaInSeconds": 30,
            "consumerGroupId": "68e5371e-6c92-4d0e-9046-db4effbb22f2",
            "tillDetailsEnrichmentEnabled": false,
            "storeDetailsEnrichmentEnabled": false,
            "customerIdentifiersToBeEnriched": [],
            "awardedReferenceEnrichmentEnabled": false,
            "availablePointsBalanceEnrichmentEnabled": false
        },
        {
            "attribution": {
                "createdOn": "2024-08-05T11:05:40.192+0000",
                "lastUpdatedOn": "2024-08-05T11:05:40.192+0000",
                "lastUpdatedBy": {
                    "id": 75128232,
                    "code": "1717388002_",
                    "description": "",
                    "name": "bhuvanesh gogineni",
                    "type": "ADMIN_USER"
                },
                "createdBy": {
                    "id": 75128232,
                    "code": "1717388002_",
                    "description": "",
                    "name": "bhuvanesh gogineni",
                    "type": "ADMIN_USER"
                }
            },
            "webHookId": "66b0b204c843e400074cf9e7",
            "name": "Asos Demo",
            "eventNames": [
                "pointsExpired"
            ],
            "webHookUrl": "braze.com/xyz",
            "webHookType": "HTTP",
            "methodType": "POST",
            "webHookHeaders": {
                ": "
            },
            "noOfRetryAttempts": 0,
            "maxAllowedConnections": 20,
            "active": true,
            "slaInSeconds": 30,
            "consumerGroupId": "cb126a10-6bb9-4bf9-993d-9b199fe59cdd",
            "tillDetailsEnrichmentEnabled": false,
            "storeDetailsEnrichmentEnabled": false,
            "customerIdentifiersToBeEnriched": [],
            "awardedReferenceEnrichmentEnabled": false,
            "availablePointsBalanceEnrichmentEnabled": false
        },
        {
            "attribution": {
                "createdOn": "2024-08-19T11:14:49.730+0000",
                "lastUpdatedOn": "2024-08-19T11:14:49.730+0000",
                "lastUpdatedBy": {
                    "id": 75015489,
                    "code": "1491395484_919600167818",
                    "description": "",
                    "name": "Achyuthanandan S",
                    "type": "ADMIN_USER"
                },
                "createdBy": {
                    "id": 75015489,
                    "code": "1491395484_919600167818",
                    "description": "",
                    "name": "Achyuthanandan S",
                    "type": "ADMIN_USER"
                }
            },
            "webHookId": "66c3292a1bde1500076a77eb",
            "name": "66c3292908662b74b497cb9d",
            "eventNames": [
                "customerAdded",
                "customerUpdated"
            ],
            "webHookUrl": " ",
            "webHookType": "QUEUE_INT",
            "methodType": "POST",
            "webHookHeaders": {},
            "noOfRetryAttempts": 0,
            "maxAllowedConnections": 5,
            "active": true,
            "slaInSeconds": 0,
            "consumerGroupId": "07ab7a09-662a-4e73-a710-5c577bc1e072",
            "tillDetailsEnrichmentEnabled": false,
            "storeDetailsEnrichmentEnabled": false,
            "customerIdentifiersToBeEnriched": [],
            "awardedReferenceEnrichmentEnabled": false,
            "availablePointsBalanceEnrichmentEnabled": false
        },
        {
            "attribution": {
                "createdOn": "2024-08-19T17:52:26.460+0000",
                "lastUpdatedOn": "2024-08-19T17:52:26.460+0000",
                "lastUpdatedBy": {
                    "id": 75125106,
                    "code": "1714982169_",
                    "description": "",
                    "name": "hailey huynh",
                    "type": "ADMIN_USER"
                },
                "createdBy": {
                    "id": 75125106,
                    "code": "1714982169_",
                    "description": "",
                    "name": "hailey huynh",
                    "type": "ADMIN_USER"
                }
            },
            "webHookId": "66c3865a1bde1500076c973f",
            "name": "DSG Events",
            "eventNames": [
                "pointsExpired",
                "tierUpgraded",
                "tierDowngraded",
                "tierRenewed"
            ],
            "webHookUrl": "http:/solutionsqa.capillarytech.com/Whatsapp_eu/api/Transactionadd/Communication",
            "webHookType": "HTTP",
            "methodType": "POST",
            "webHookHeaders": {
                "Test": "xwy"
            },
            "noOfRetryAttempts": 0,
            "maxAllowedConnections": 20,
            "active": true,
            "slaInSeconds": 30,
            "consumerGroupId": "0eb69e4d-630a-495b-b5d0-bde5c3f6c73f",
            "tillDetailsEnrichmentEnabled": false,
            "storeDetailsEnrichmentEnabled": false,
            "customerIdentifiersToBeEnriched": [],
            "awardedReferenceEnrichmentEnabled": false,
            "availablePointsBalanceEnrichmentEnabled": false
        },
        {
            "attribution": {
                "createdOn": "2024-08-19T18:58:14.099+0000",
                "lastUpdatedOn": "2024-08-19T18:58:14.099+0000",
                "lastUpdatedBy": {
                    "id": 75015489,
                    "code": "1491395484_919600167818",
                    "description": "",
                    "name": "Achyuthanandan S",
                    "type": "ADMIN_USER"
                },
                "createdBy": {
                    "id": 75015489,
                    "code": "1491395484_919600167818",
                    "description": "",
                    "name": "Achyuthanandan S",
                    "type": "ADMIN_USER"
                }
            },
            "webHookId": "66c395c6ba85ac00077e8b3d",
            "name": "66c395c608662b74b497cb9e",
            "eventNames": [
                "customerAdded",
                "customerUpdated"
            ],
            "webHookUrl": " ",
            "webHookType": "QUEUE_INT",
            "methodType": "POST",
            "webHookHeaders": {},
            "noOfRetryAttempts": 0,
            "maxAllowedConnections": 5,
            "active": true,
            "slaInSeconds": 0,
            "consumerGroupId": "feb4ced2-99b6-4301-a023-38874ade74b1",
            "tillDetailsEnrichmentEnabled": false,
            "storeDetailsEnrichmentEnabled": false,
            "customerIdentifiersToBeEnriched": [],
            "awardedReferenceEnrichmentEnabled": false,
            "availablePointsBalanceEnrichmentEnabled": false
        },
        {
            "attribution": {
                "createdOn": "2024-08-27T11:18:47.436+0000",
                "lastUpdatedOn": "2024-08-27T11:18:47.436+0000",
                "lastUpdatedBy": {
                    "id": 75101444,
                    "code": "1699962410_",
                    "description": "",
                    "name": "rahul sonia ",
                    "type": "ADMIN_USER"
                },
                "createdBy": {
                    "id": 75101444,
                    "code": "1699962410_",
                    "description": "",
                    "name": "rahul sonia ",
                    "type": "ADMIN_USER"
                }
            },
            "webHookId": "66cdb617abb78e0007077af4",
            "name": "66cdb5192c483621d5d17695",
            "eventNames": [
                "transactionAdded"
            ],
            "webHookUrl": " ",
            "webHookType": "QUEUE_INT",
            "methodType": "POST",
            "webHookHeaders": {},
            "noOfRetryAttempts": 0,
            "maxAllowedConnections": 10,
            "active": true,
            "slaInSeconds": 0,
            "consumerGroupId": "a866053b-331c-4142-8d60-e951b5ad9681",
            "tillDetailsEnrichmentEnabled": false,
            "storeDetailsEnrichmentEnabled": false,
            "customerIdentifiersToBeEnriched": [],
            "awardedReferenceEnrichmentEnabled": false,
            "availablePointsBalanceEnrichmentEnabled": false
        },
        {
            "attribution": {
                "createdOn": "2024-10-16T12:50:57.525+0000",
                "lastUpdatedOn": "2024-10-16T12:50:57.525+0000",
                "lastUpdatedBy": null,
                "createdBy": {
                    "id": 75065783,
                    "code": "1666338460_",
                    "description": "",
                    "name": "shikhar ",
                    "type": "ADMIN_USER"
                }
            },
            "webHookId": "670fb6b15231e30007eec1c7",
            "name": "670fb66e85f93b3eee17311c_0|0",
            "eventNames": [
                "transactionAdded"
            ],
            "webHookUrl": " ",
            "webHookType": "QUEUE_INT",
            "methodType": "POST",
            "webHookHeaders": {},
            "noOfRetryAttempts": 0,
            "maxAllowedConnections": 10,
            "active": false,
            "slaInSeconds": 0,
            "consumerGroupId": "26693977-e487-4d41-bf73-f60f06545dc8",
            "tillDetailsEnrichmentEnabled": false,
            "storeDetailsEnrichmentEnabled": false,
            "customerIdentifiersToBeEnriched": [],
            "awardedReferenceEnrichmentEnabled": false,
            "availablePointsBalanceEnrichmentEnabled": false
        },
        {
            "attribution": {
                "createdOn": "2024-10-25T11:15:30.910+0000",
                "lastUpdatedOn": "2024-10-25T11:15:30.910+0000",
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
            "webHookId": "671b7dd2760af00007617c3c",
            "name": "kshatriya_ka_webhook_1234",
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
                "Authorization": "Basic Q2FwaWxsYXJ5OklVTmhjR2xzYkdGeWVVQTROekl5",
                "Content-Type": "application/json"
            },
            "noOfRetryAttempts": 0,
            "maxAllowedConnections": 10,
            "active": true,
            "slaInSeconds": 150,
            "consumerGroupId": "972b9444-784d-4b01-a1b4-4955bae7c8d0",
            "tillDetailsEnrichmentEnabled": false,
            "storeDetailsEnrichmentEnabled": false,
            "customerIdentifiersToBeEnriched": [],
            "awardedReferenceEnrichmentEnabled": false,
            "availablePointsBalanceEnrichmentEnabled": false
        },
        {
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
                "Authorization": "Basic Q2FwaWxsYXJ5OkleWVVQTROekl5",
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
        }
    ],
    "errors": null,
    "warnings": null
}
```