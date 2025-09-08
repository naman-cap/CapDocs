---
title: Resend a communication message
api:
  file: resend_communication_api.yaml
  operationId: post_v2-communications-resend
hidden: false
---
This API is used to resend a previously sent communication, in cases where the original delivery failed or a resend is required.

> 👍 Note
>
> For detailed information about our APIs and for hands-on testing, refer documentation in [API overview](https://docs.capillarytech.com/reference/apioverview) and  step-by-step guide on making your first API call in [Make your first API call](https://docs.capillarytech.com/reference/make-your-first-api-call) .

# Prerequisites

*   Authentication: Basic or OAuth authentication details
*   Access group resource: WRITE access to Communication access group resource

# Resource information

|                        |                           |
| :--------------------- | :------------------------ |
| URI                    | /v2/communications/resend |
| HTTP Method            | POST                      |
| Pagination             | No                        |
| Batch support          | No                        |
| Rate limit information | None                      |

# API endpoint example

```Text Sample cURL
curl --request POST \
     --url https://host/v2/communications/resend \
     --header 'accept: application/json' \
     --header 'content-type: application/json' \
     --data '
{
  "messageId": 1746061653596
}
'
```

<br />

# Request Body Parameters

| Parameter | Datatype | Description                                                                                                                                                                                                            | Mandatory? |
| --------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :--------- |
| messageId | integer  | The unique identifier of the previously sent message that needs to be resent. You can get the message ID from the member care > [communication tab](https://docs.capillarytech.com/docs/view-communication_details#/). | Yes        |

# Example request body

```json
{
    "messageId" : 1746061653596

}
```

# Response parameter

| Parameter            | Datatype | Description                                                                              |
| -------------------- | -------- | ---------------------------------------------------------------------------------------- |
| orgId                | long     | The unique identifier for the organization associated with the message.                  |
| undeliveredMessageId | long     | indicates unique identifier of the message that was not delivered successfully.          |
| resentMessageId      | long     | indicates unique identifier of the message that has been resent after an initial failure |

# Example response

```json
{
    "orgId": 100737,
    "undeliveredMessageId": 1746061653596,
    "resentMessageId": 1748743190124,
    "warnings": []
}
```
```json Message ID Invalid
{
    "errors": [
        {
            "status": false,
            "message": "Failed to resend message : Message not found for orgId: 100737 and messageId: 174606165",
            "code": 4223
        }
    ]
}
```
```json Message ID format invalid
{
    "warnings": [],
    "errors": [
        {
            "status": false,
            "code": 400,
            "message": "Input is invalid, Please check request parameters or input xml/json"
        }
    ]
}
```

# API specific error code

| Error code | Description                                                                             | Reason                         |
| :--------- | :-------------------------------------------------------------------------------------- | :----------------------------- |
| 4223       | Failed to resend message : Message not found for orgId: 100737 and messageId: 174606165 | Message ID provided is invalid |
| 400        | Input is invalid, Please check request parameters or input xml/json                     | Invalid data type              |