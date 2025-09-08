---
title: Get Goodwill Requests
excerpt: Retrieves the history of goodwill points of a customer.
api:
  file: v2.json
  operationId: get-goodwill-requests
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
# Query parameters

| Parameter             | Datatype | Description                                                                                        |
| --------------------- | -------- | -------------------------------------------------------------------------------------------------- |
| customerId\*          | long     | Pass the unique ID of the customer whose goodwill request details you want to fetch.               |
| requestId             | long     | Unique id of the goodwill request that you want to fetch.                                          |
| is\_one\_step\_change | boolean  | Pass true to fetch goodwill points or coupon requests that are issued instantly (one step issual). |
| programId             | int      | Get requests of a specific loyalty program. Pass the unique loyalty program ID.                    |
| autoApprove           | boolean  | Pass true to fetch requests that are auto-approved - without the involvement of the back-end team. |

# Response parameters

| Parameter       | Description                                                                        |
| --------------- | ---------------------------------------------------------------------------------- |
| limit           | The limit of items displayed on the current page.                                  |
| offset          | The starting point from which items are displayed (used for pagination).           |
| total           | The total number of items available across all pages.                              |
| id              | The unique identifier of the item.                                                 |
| addedBy         | Information about the user who added the item.                                     |
| updatedBy       | Information about the user who last updated the item.                              |
| enteredBy       | Information about the user who entered the item (may not be present in all items). |
| addedOn         | Timestamp of when the item was added.                                              |
| updatedOn       | Timestamp of when the item was last updated.                                       |
| userId          | The unique identifier of the user associated with the item.                        |
| requestId       | The unique identifier of the request associated with the item.                     |
| goodwillType    | The type of goodwill.                                                              |
| goodwillStatus  | The current status of the goodwill request.                                        |
| comments        | Comments or remarks associated with the item.                                      |
| reason          | Reason associated with the goodwill request.                                       |
| approvedValue   | Value that was approved (only available if the goodwillStatus is "APPROVED").      |
| updatedComments | Updated comments or remarks associated with the item.                              |
| oneStep         | Boolean value indicating if the request is one step or not.                        |
| warnings        | List of any warnings related to the request/response.                              |
| errors          | List of any errors related to the request/response.                                |

```
{
    "pagination": {
        "limit": 10,
        "offset": 0,
        "total": 1
    },
    "data": [
        {
            "id": 317841,
            "addedBy": {
                "id": 75160042,
                "code": "1739864912683_",
                "description": "",
                "name": "1739864911_aditi",
                "type": "ADMIN_USER",
                "referenceId": -1,
                "adminType": "GENERAL",
                "isActive": true,
                "isOuEnabled": false,
                "timeZoneId": 0,
                "currencyId": 0,
                "languageId": 0,
                "default": false
            },
            "updatedBy": {
                "id": 75160042,
                "code": "1739864912683_",
                "description": "",
                "name": "1739864911_aditi",
                "type": "ADMIN_USER",
                "referenceId": -1,
                "adminType": "GENERAL",
                "isActive": true,
                "isOuEnabled": false,
                "timeZoneId": 0,
                "currencyId": 0,
                "languageId": 0,
                "default": false
            },
            "addedOn": "2025-04-22T16:01:45Z",
            "updatedOn": "2025-04-22T10:31:45Z",
            "programId": 973,
            "userId": 565039505,
            "requestId": 13039305,
            "goodwillType": "POINTS",
            "goodwillStatus": "APPROVED",
            "comments": "yes",
            "reason": "GoodGuy",
            "approvedValue": "500",
            "updatedComments": "yes; AUTO_APPROVED",
            "program": {
                "programId": 973,
                "programName": "DocDemoDefaultProgram",
                "pointsToCurrencyRatio": 1.0,
                "programDescription": "Default program for DocDemo",
                "default": true
            },
            "earningEntityType": "CUSTOMER",
            "oneStep": false
        }
    ],
    "warnings": [],
    "errors": []
}
```

<br />

## API specific Error Code

| Error code | Description                | Reason                             |
| :--------- | :------------------------- | :--------------------------------- |
| 9050       | Goodwill request not found | Goodwill points have been awarded. |