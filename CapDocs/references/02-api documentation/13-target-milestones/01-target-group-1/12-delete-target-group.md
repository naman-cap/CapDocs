---
title: Delete target group
excerpt: ''
api:
  file: v3.json
  operationId: delete-target-group
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
This API is used to delete a target group based on the "target group id".

Please note that this API deletes a group based on the "target group id" which means, "target group id" is the mandatory path parameter when using this API.

## API endpoint example

`https://eu.api.capillarytech.com/v3/targetGroups/2326`

```curl
curl --location --request DELETE 'https://eu.api.capillarytech.com/v3/targetGroups/22350' \
--header 'Authorization: Basic dGpfY2FwaWxsYXJ5OjVjMTc' \
--header 'Cookie: _cfuvid=Hz5vxex9nxE.gNjvnTwDBDgfNLFEoicCUfrgNIeurLY-1750403636294-0.0.1.1-604800000' 
```

## Response Parameter

| Parameter | Type    | Description                        |
| --------- | ------- | ---------------------------------- |
| data      | Boolean | Indicates operation success status |
| errors    | Null    | Placeholder for error messages     |
| warnings  | Null    | Placeholder for warning messages   |

```json Response
{
    "data": true,
    "errors": null,
    "warnings": null
}
```