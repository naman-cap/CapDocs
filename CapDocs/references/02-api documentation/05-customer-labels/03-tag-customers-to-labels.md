---
title: Tag Customers (to Labels)
excerpt: >-
  Lets you tag a customer to one or more customer labels or remove an existing
  label.
api:
  file: v2.json
  operationId: tag-customers-to-labels
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

|                        |                                |
| :--------------------- | :----------------------------- |
| URL                    | /customers/userId/changeLabels |
| HTTP Method            | GET                            |
| Pagination             | No                             |
| Batch support          | No                             |
| Rate limit information | None                           |

# Example cURL request

```curl
curl --location 'https://eu.api.capillarytech.com/v2/customers/564663098/changeLabels' \
--header 'accept: application/json' \
--header 'content-type: application/json' \
--header 'Authorization: Basic c2FudC5wXzEyMzpiMmVhMGFhYWI1ZThmODg5ZzNGE2NjA5NTIwM2FlNw==' \
--header 'Cookie: _cfuvid=fbS1QUjcPWKTrqnhF5ahlGc4y1sg7UG0MiosK.TUazU-1750677923205-0.0.1.1-604800000' \
--data-raw '{
    "add": [
        {
            "labelName":"Valuable Customer shvdshjdvshdvhjsdvjasajshjahadjgciuwyeguhbcwjhbjdshsbcjhwhewbehcbwjdhbckwjhekjhcbw"
        },
        {
            "labelName": "Old1 Customer1"
        },
        {
            "labelName": "Old2 Customer2"
        },
        {
            "labelName": "Testing_UAT_@_123"
        }
    
    ],
    "remove": [
        {
            "labelName": ""
        },
        {
            "labelName": ""
        }
    ]
}'
```

# Path Parameter

| Parameter | Data type | Description                                                           |
| :-------- | :-------- | :-------------------------------------------------------------------- |
| userId    | Integer   | Unique identifier of the customer for whom labels are being modified. |

# Request Parameters

| Parameter    | Data Type | Description                                         |
| ------------ | --------- | --------------------------------------------------- |
| `add`        | Array     | Array of label objects to add to the customer.      |
| `-labelName` | String    | Name of the label to add. Required.                 |
| `remove`     | Array     | Array of label objects to remove from the customer. |
| `-labelName` | String    | Name of the label to remove. Required.              |

# Sample Response

```json
{
    "entity": 564663098,
    "warnings": []
}
```

# Response Parameter

| Parameter   | Data Type | Description                                                            |
| ----------- | --------- | ---------------------------------------------------------------------- |
| `success`   | Boolean   | Indicates whether the label change was successful (`true` or `false`). |
| `message`   | String    | Details about the result of the operation.                             |
| `errorCode` | String    | Error code if the request failed.                                      |
| `errors`    | Array     | List of individual error messages, if any.                             |

# API Specific Error Codes

| Error Code | Description           | Reason                                                                                                                                                                         |
| ---------- | --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **33001**  | User labels not found | This error occurs when the specified labels for the user cannot be found. Usually happens if the user does not have any labels assigned or the label references are incorrect. |
| **8015**   | Customer not found    | This error occurs when the given `userId` or identifiers do not match any existing customer in the system. Often caused by invalid or missing user ID.                         |
| **33000**  | Label not found       | This error occurs when an incorrect or non-existent `labelName` is provided in the request body.                                                                               |

```json
{
    "warnings": [
        {
            "status": false,
            "code": 33001,
            "message": "User labels not found"
        }
    ],
    "errors": []
}

```
```json
{
    "errors": [
        {
            "status": false,
            "message": "Customer not found for the given identifiers",
            "code": 8015
        }
    ]
}

```
```json
{
    "entity": 565345934,
    "warnings": [
        {
            "status": false,
            "code": 33000,
            "message": "123212100000Old Customer000000000000 label not found"
        }
    ]
}

```