---
title: Request Goodwill points (Group)
excerpt: Use this API to allocate goodwill points to a user group.
api:
  file: request-v2.json
  operationId: get-goodwill-request-group
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
This API will generate a request to the admin for the brand, to approve the request. Use the approve request API, to approve the request. Refer the API [here](https://docs.capillarytech.com/reference/approve-requests)

### Request Body Parameters (for group goodwill requests)

| Parameter             | Datatype | Description                               |
| --------------------- | -------- | ----------------------------------------- |
| type                  | enum     | Type of request. Value: `GOODWILL`.       |
| base\_type            | enum     | Sub-type of the request. Value: `POINTS.` |
| earning\_entity\_type | enum     | USERGROUP2                                |
| identifier\_value     | string   | Group id                                  |

```Text JSON
{
  "type": "GOODWILL",
  "baseType": "POINTS",
  "goodwillRequest": {
    "comments": "Customer is Good, award him 100 pts.",
    "points": 100,
    "reason": "POINTS_ISSUE"
  },
  "earningEntityType": "USERGROUP2",
  "userGroup2IdentificationInfo": {
    "identifierType": "id",
    "identifierValue": 3832764,
    "source": "INSTORE",
    "accountId": "565118794"
  },
  "comments": "request add via automation",
  "programId": 973
}

```

### Response Parameters

| Parameter | Datatype | Description                                   |
| --------- | -------- | --------------------------------------------- |
| id        | long     | Unique ID generated for the goodwill request. |
| warnings  | string   | Warnings if any.                              |

```Text JSON
{
    "createdId": 13044649,
    "warnings": []
}
```

## API specific Error codes

| Error Code | Description                                                                                                       | Reason                                  |
| :--------- | :---------------------------------------------------------------------------------------------------------------- | :-------------------------------------- |
| 400        | Input is invalid, Please check request parameters or input xml/json, No identifier provided to get loyalty users. | Input invalid in request parameters     |
| 93026      | Invalid Group Details Provided                                                                                    | Group id/details invalid or unsupported |
| 1101       | Invalid programId passed                                                                                          | Program Id invalid or unsupported       |
| 9006       | Request Type is invalid                                                                                           | Invalid/ unsupported request `type`     |
| 9008       | Request Base Type is invalid                                                                                      | Invalid/unsupported `basetype`          |
