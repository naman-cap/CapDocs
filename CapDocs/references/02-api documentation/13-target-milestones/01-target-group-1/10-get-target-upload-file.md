---
title: Upsert target communication
excerpt: >-
  This API helps in both updating and inserting the target communication based
  on the given "target id" and "target group id".
api:
  file: v3.json
  operationId: get-target-upload-file
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
> ❗️ Make sure you have the appropriate access control configured. For more information, see [access group documentation](https://docs.capillarytech.com/docs/access-group).

# API endpoint example

`https://eu.api.capillarytech.com/v3/targetGroups/2163/targets/2317/communications/upsert`

```curl
curl --location 'https://eu.api.capillarytech.com/v3/targetGroups/2163/targets/2317/communications/upsert' \
--header 'Content-Type: application/json' \
--header 'Authorization: Basic dGpfY2FwaWxsYXJ5OjVjMTc' \
--header 'Cookie: _cfuvid=Hz5vxex9nxE.gNjvnTwDBDgfNLFEoicCUfrgNIeurLY-1750403636294-0.0.1.1-604800000' \
--data-raw '[
  {
    "active": true,
    "channelId": 1,
    "communicationType": "FINISH",
    "messageTemplate": "Test messageTemplate but communication type changed to FINISH",
    "offsetDays": 1,
    "sender": "random.email123@example.com",
    "subjectTemplate": "Test subjectTemplate changed to FINISH "
  }
]' 
```

<br />

> 📘 The two path parameters *targetGroupId* and *targetId* are mandatory fields.

# Body parameters

| Parameter         | Description                                                                |
| ----------------- | -------------------------------------------------------------------------- |
| active            | Pass true to make the communication active.                                |
| channelId         | Unique ID of the channel through which the communication needs to be sent. |
| communicationType | Type of the communication. Values: START, FINISH, CHANGE, REMINDER.        |
| messageTemplate   | Content that should go in the message.                                     |
| offsetDays        |                                                                            |
| sender            | Sender ID from which the communication needs to go.                        |
| subjectTemplate   | Subject line of the template.                                              |

# Response parameters

| Parameter                                     | Description                                                                |
| --------------------------------------------- | -------------------------------------------------------------------------- |
| data                                          | Array containing details of communication.                                 |
| data\[].id                                    | Unique identifier of the communication.                                    |
| data\[].attribution                           | Contains metadata about the creation and last update of the communication. |
| data\[].attribution.createdOn                 | Timestamp indicating when the communication was created.                   |
| data\[].attribution.lastUpdatedOn             | Timestamp indicating the last update made to the communication.            |
| data\[].attribution.lastUpdatedBy             | Details of the entity or user that last updated the communication.         |
| data\[].attribution.lastUpdatedBy.id          | Unique identifier of the last updater.                                     |
| data\[].attribution.lastUpdatedBy.code        | Code related to the last updater.                                          |
| data\[].attribution.lastUpdatedBy.description | A description related to the last updater.                                 |
| data\[].attribution.lastUpdatedBy.name        | Name of the last updater.                                                  |
| data\[].attribution.lastUpdatedBy.type        | Type of the last updater.                                                  |
| data\[].attribution.createdBy                 | Details of the entity or user that created the communication.              |
| data\[].attribution.createdBy.id              | Unique identifier of the creator.                                          |
| data\[].attribution.createdBy.code            | Code related to the creator.                                               |
| data\[].attribution.createdBy.description     | A description related to the creator.                                      |
| data\[].attribution.createdBy.name            | Name of the creator.                                                       |
| data\[].attribution.createdBy.type            | Type of the creator.                                                       |
| data\[].targetId                              | Identifier of the target for the communication.                            |
| data\[].targetGroupId                         | Identifier of the target group for the communication.                      |
| data\[].communicationType                     | Type of the communication.                                                 |
| data\[].channelId                             | Unique ID of the channel through which the communication is sent.          |
| data\[].subjectTemplate                       | Subject line of the template for the communication.                        |
| data\[].messageTemplate                       | Content/message template of the communication.                             |
| data\[].sender                                | Sender ID from which the communication is sent.                            |
| data\[].offsetDays                            | Number of days offset.                                                     |
| data\[].active                                | Boolean indicating if the communication is active.                         |
| errors                                        | Contains any errors related to the response.                               |

```json Response
{
    "data": [
        {
            "id": 11,
            "attribution": {
                "createdOn": "2025-06-24T08:25:55.590+0000",
                "lastUpdatedOn": "2025-06-24T08:25:55.590+0000",
                "lastUpdatedBy": {
                    "id": 75155297,
                    "code": "tj_capillary",
                    "description": "",
                    "name": "tj_capillary",
                    "type": "TILL"
                },
                "createdBy": {
                    "id": 75155297,
                    "code": "tj_capillary",
                    "description": "",
                    "name": "tj_capillary",
                    "type": "TILL"
                }
            },
            "targetId": 2317,
            "targetGroupId": 2163,
            "communicationType": "FINISH",
            "channelId": 2,
            "subjectTemplate": "Test subjectTemplate changed to FINISH ",
            "messageTemplate": "Test messageTemplate but communication type changed to FINISH",
            "sender": "random.email123@example.com",
            "offsetDays": 1,
            "active": true
        }
    ],
    "errors": null,
    "warnings": null
}
```