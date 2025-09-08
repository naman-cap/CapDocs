---
title: Get Events Logs
excerpt: Retrieves the log of all events of the org.
api:
  file: v2.json
  operationId: get-events-logs
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
## Response Parameter

| Parameter    | type    | Description                                                                   |
| :----------- | :------ | :---------------------------------------------------------------------------- |
| data         | array   | List of event log entries                                                     |
| startTime    | long    | Timestamp when the event processing started                                   |
| responseTime | integer | Time taken to process the event                                               |
| orgId        | integer | Organization ID associated with the event                                     |
| status       | string  | Status of the event processing (e.g., EVENT\_SUCCESS, EMF\_PROCESSOR\_FAILED) |
| eventName    | string  | Name of the event that was processed                                          |
| inputRequest | string  | JSON string containing the original input request data                        |
| id           | string  | Unique identifier for the event log entry                                     |
| webhookId    | string  | Identifier for the webhook that triggered the event                           |
| parentOrgId  | integer | Parent organization ID                                                        |
| message      | string  | Detailed message about the event processing result                            |
| warnings     | array   | List of warning messages                                                      |
| errors       | array   | List of error messages                                                        |

```json
{
    "data": [
        {
            "startTime": 1746938336049,
            "responseTime": 504,
            "orgId": 100737,
            "status": "EVENT_SUCCESS",
            "eventName": "Group_User_Event",
            "inputRequest": "{\"event_name\":\"Group_User_Event\",\"String\":\"rutuja_capillary\",\"enum\":\"customerUserGroup\",\"customer\":\"919970388310\"}",
            "id": "b40d2f6b-42e1-4177-9d01-a01fe063c602",
            "webhookId": "67b62dffb7f5337f8a8237970bd0a467",
            "parentOrgId": -1,
            "message": "Event processed successfully"
        },
        {
            "startTime": 1746938284843,
            "responseTime": 282,
            "orgId": 100737,
            "status": "INVALID_GROUP_IDENTIFIER_PASSED",
            "eventName": "Group_User_Event",
            "inputRequest": "{\"event_name\":\"Group_User_Event\",\"String\":\"rutuja_capillary\",\"enum\":\"3854766\",\"customer\":\"919970388310\"}",
            "id": "e161b3ce-1083-49ea-a137-3ee47db8aa69",
            "webhookId": "67b62dffb7f5337f8a8237970bd0a467",
            "parentOrgId": -1,
            "message": "Invalid group identifier passed 3854766"
        },
        {
            "startTime": 1746705782562,
            "responseTime": 184,
            "orgId": 100737,
            "status": "EVENT_SUCCESS",
            "eventName": "TestEventWithDate",
            "inputRequest": "{\"createdDate\":\"2025-05-08 17:33:01\",\"event_name\":\"TestEventWithDate\",\"CustomerId\":\"917744876415\"}",
            "id": "b357efbc-9047-41cc-8239-0b34bf4f3617",
            "webhookId": "67b62dffb7f5337f8a8237970bd0a467",
            "parentOrgId": -1,
            "message": "Event processed successfully"
        },
        {
            "startTime": 1746694617280,
            "responseTime": 149,
            "orgId": 100737,
            "status": "EVENT_SUCCESS",
            "eventName": "TestingEvent_FE",
            "inputRequest": "{\"Customer\":\"917744876415\",\"event_name\":\"TestingEvent_FE\"}",
            "id": "1284f7d3-7b54-473e-a72d-b6eaab91ecc3",
            "webhookId": "67b62dffb7f5337f8a8237970bd0a467",
            "parentOrgId": -1,
            "message": "Event processed successfully"
        },
        {
            "startTime": 1746694377882,
            "responseTime": 13,
            "orgId": 100737,
            "status": "EMF_PROCESSOR_FAILED",
            "eventName": "TestBE-Rutuja",
            "inputRequest": "{\"event_name\":\"TestBE-Rutuja\",\"String\":\"rutuja_capillary\",\"customer\":\"917744876415\"}",
            "id": "f5cc7f20-2bba-44ef-9744-db314d5ea513",
            "webhookId": "67b62dffb7f5337f8a8237970bd0a467",
            "parentOrgId": -1,
            "message": "Error while processing emfEvent: customerId not present,cant proceed further"
        },
        {
            "startTime": 1746694357279,
            "responseTime": 16,
            "orgId": 100737,
            "status": "EMF_PROCESSOR_FAILED",
            "eventName": "TestBE-Rutuja",
            "inputRequest": "{\"event_name\":\"TestBE-Rutuja\",\"String\":\"rutuja_capillary\",\"customer\":\"917744876415\"}",
            "id": "8f3ab9f0-083b-485b-b967-bf38afb3d99d",
            "webhookId": "67b62dffb7f5337f8a8237970bd0a467",
            "parentOrgId": -1,
            "message": "Error while processing emfEvent: customerId not present,cant proceed further"
        },
        {
            "startTime": 1746694234250,
            "responseTime": 16,
            "orgId": 100737,
            "status": "EMF_PROCESSOR_FAILED",
            "eventName": "TestBE-Rutuja",
            "inputRequest": "{\"event_name\":\"TestBE-Rutuja\",\"String\":\"rutuja_capillary\",\"customer\":\"917744876415\"}",
            "id": "570c1e2b-af5c-4111-ae0a-e12a07285899",
            "webhookId": "67b62dffb7f5337f8a8237970bd0a467",
            "parentOrgId": -1,
            "message": "Error while processing emfEvent: customerId not present,cant proceed further"
        },
        {
            "startTime": 1746694093326,
            "responseTime": 23,
            "orgId": 100737,
            "status": "EMF_PROCESSOR_FAILED",
            "eventName": "TestBE-Rutuja",
            "inputRequest": "{\"event_name\":\"TestBE-Rutuja\",\"String\":\"rutuja_capillary\",\"enum\":\"rutuja_capillary\"}",
            "id": "b0572b54-a05e-4de8-8ac2-44f11ad0998b",
            "webhookId": "67b62dffb7f5337f8a8237970bd0a467",
            "parentOrgId": -1,
            "message": "Error while processing emfEvent: customerId not present,cant proceed further"
        },
        {
            "startTime": 1746693638094,
            "responseTime": 136,
            "orgId": 100737,
            "status": "EVENT_SUCCESS",
            "eventName": "Event_Rutuja",
            "inputRequest": "{\"event_name\":\"Event_Rutuja\",\"String\":\"rutuja_capillary\",\"customer\":\"917744876415\"}",
            "id": "330c3f0f-42ab-462f-9c77-dad0d132c663",
            "webhookId": "67b62dffb7f5337f8a8237970bd0a467",
            "parentOrgId": -1,
            "message": "Event processed successfully"
        },
        {
            "startTime": 1746693469378,
            "responseTime": 201,
            "orgId": 100737,
            "status": "EVENT_SUCCESS",
            "eventName": "TestingEvent_FE_Rutuja",
            "inputRequest": "{\"event_name\":\"TestingEvent_FE_Rutuja\",\"CustomerId\":\"917744876415\"}",
            "id": "1a07e8fd-d192-40b5-ad95-d1c489166a5c",
            "webhookId": "67b62dffb7f5337f8a8237970bd0a467",
            "parentOrgId": -1,
            "message": "Event processed successfully"
        }
    ],
    "warnings": [],
    "errors": []
}
```

## API specific Error Code

| Error Code | Description                                                 | Reason                                                    |
| :--------- | :---------------------------------------------------------- | :-------------------------------------------------------- |
| 500        | All requests have failed due to errors                      | Invalid endpoint                                          |
| 404        | Incorrect resource                                          | The server cannot locate the requested resource           |
| 401        | Please check your username/password or authentication token | Missing/wrong API key, OAuth token, or Basic Auth headers |