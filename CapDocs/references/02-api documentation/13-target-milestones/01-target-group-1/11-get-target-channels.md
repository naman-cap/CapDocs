---
title: Get target channels
excerpt: ''
api:
  file: v3.json
  operationId: get-target-channels
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
This API is used to bring all the channels informations of target groups.

## API Endpoint example

`https://eu.api.capillarytech.com/v3/targetGroups/channels`

```curl
curl --location 'https://eu.api.capillarytech.com/v3/targetGroups/channels' \
--header 'Authorization: Basic dGpfY2FwaWxsYXJ5OjVjMTc' \
--header 'Cookie: _cfuvid=Hz5vxex9nxE.gNjvnTwDBDgfNLFEoicCUfrgNIeurLY-1750403636294-0.0.1.1-604800000'
```

## Response Parameter

| Parameter    | Type    | Description                                                              |
| ------------ | ------- | ------------------------------------------------------------------------ |
| data         | Array   | List of objects containing the main data payload.                        |
| data\[].id   | Integer | Unique identifier for the record.                                        |
| data\[].name | String  | Name of the communication channel (e.g., "SMS", "EMAIL", "MOBILE PUSH"). |
| errors       | Null    | Placeholder for error messages (null indicates no errors).               |
| warnings     | Null    | Placeholder for warning messages (null indicates no warnings).           |

```json Response
{
    "data": [
        {
            "id": 1,
            "name": "SMS"
        },
        {
            "id": 2,
            "name": "EMAIL"
        },
        {
            "id": 3,
            "name": "MOBILE PUSH"
        }
    ],
    "errors": null,
    "warnings": null
}
```