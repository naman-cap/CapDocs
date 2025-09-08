---
title: Get Customer Labels
excerpt: Retrieves the list of labels tagged to a customer.
api:
  file: v2.json
  operationId: get-customer-labels
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
> 👍 Note
>
> For detailed information about the APIs and for hands-on testing, refer to the [API overview](https://docs.capillarytech.com/reference/apioverview) documentation and step-by-step guide on[ making your first API call.](https://docs.capillarytech.com/reference/make-your-first-api-call)

# Prerequisites

*   Basic Authentication
*   Default access group

## Resource information

| URI                   | customers/userId/labels |
| :-------------------- | :---------------------- |
| HTTP method           | GET                     |
| Authentication        | Basic                   |
| Pagination supported? | NO                      |
| Rate limit            | YES                     |
| Batch support         | NO                      |

# Example cURL request

```curl
curl --location 'https://eu.api.capillarytech.com/v2/customers/564663098/labels' \
--header 'Authorization: Basic c2FudC5wXzzpiMmVhMGFhYWI1ZThmODg5ZTAzNGE2NjA5NTIwM2FlNw=='
```

# Path Parameter

| Parameter | Data type | Description                                                           |
| :-------- | :-------- | :-------------------------------------------------------------------- |
| userId    | Integer   | Unique identifier of the customer for whom labels are being modified. |

# Response Parameter

| Parameter     | Data Type | Description                                                                                     |
| ------------- | --------- | ----------------------------------------------------------------------------------------------- |
| `data`        | Array     | An array of label objects assigned to the user.                                                 |
| `- id`        | Integer   | Unique ID of this user-label mapping record.                                                    |
| `- orgId`     | Integer   | Organization ID where the label was added.                                                      |
| `- addedBy`   | Integer   | ID of the user who added the label.                                                             |
| `- labelId`   | Integer   | Unique identifier of the label.                                                                 |
| `- userId`    | Integer   | Unique ID of the customer/user.                                                                 |
| `- labelName` | String    | Name of the label.                                                                              |
| `- deleted`   | Boolean   | true indicates the object is inactive or marked for deletion; false means the object is active. |
| `warnings`    | Array     | An array of warning objects, if any.                                                            |
| `errors`      | Array     | An array of error objects, if any.                                                              |

```json
{
    "data": [
        {
            "id": 33558,
            "orgId": 100737,
            "addedBy": 75155295,
            "labelId": 20942,
            "userId": 564663098,
            "labelName": "Premium Customer",
            "deleted": false
        },
        {
            "id": 33561,
            "orgId": 100737,
            "addedBy": 75155295,
            "labelId": 20948,
            "userId": 564663098,
            "labelName": "Valuable Customer shvdshjdvshdvhjsdvjasajshjahadjgciuwyeguhbcwjhbjdshsbcjhwhewbehcbwjdhbckwjhekjhcbw",
            "deleted": false
        },
        {
            "id": 33559,
            "orgId": 100737,
            "addedBy": 75155295,
            "labelId": 20949,
            "userId": 564663098,
            "labelName": "Old1 Customer1",
            "deleted": false
        },
        {
            "id": 33557,
            "orgId": 100737,
            "addedBy": 75155295,
            "labelId": 20952,
            "userId": 564663098,
            "labelName": "Old2 Customer2",
            "deleted": false
        },
        {
            "id": 33560,
            "orgId": 100737,
            "addedBy": 75155295,
            "labelId": 20957,
            "userId": 564663098,
            "labelName": "Testing_UAT_@_123",
            "deleted": false
        }
    ],
    "warnings": [],
    "errors": []
}
```

# API Specific Error Codes

| Error Code | Description           | Reason                                                                                |
| ---------- | --------------------- | ------------------------------------------------------------------------------------- |
| **33001**  | User labels not found | Occurs when no labels are found for the user or incorrect label references are given. |

```json
{
    "warnings": [
        {
            "status": false,
            "message": "User labels not found",
            "code": 33001
        }
    ],
    "errors": []
}
```