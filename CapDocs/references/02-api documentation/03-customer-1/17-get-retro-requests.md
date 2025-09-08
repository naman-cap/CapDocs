---
title: Get Retro Requests
excerpt: Retrieves the transaction retro requests of the customer.
api:
  file: v2.json
  operationId: get-retro-requests
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
## Resource information

|                      |                                  |
| :------------------- | :------------------------------- |
| URI                  | v2/customers/lookup/retroRequest |
| HTTP method          | GET                              |
| Pagination supported | Yes                              |
| Rate Limit           | NA                               |
| Batch support        | NA                               |

## Response Parameters

| Parameter         | Description                                               |
| :---------------- | :-------------------------------------------------------- |
| pagination.limit  | Maximum number of records returned per page (default: 10) |
| pagination.offset | Number of records skipped from the beginning              |
| pagination.total  | Total count of available retro requests                   |
| data id           | Unique ID of the retro request                            |
| \-status          | Current status (e.g., "PENDING")                          |
| \-addedBy         | Contains details of staff/user who created the request    |
| \-addedByParent   | Contains parent entity details (e.g., store)              |
| \-updatedBy       | Contains details of last updater                          |
| \-addedOn         | Timestamp when request was created (ISO 8601 format)      |
| \-updatedOn       | Timestamp when request was last updated                   |
| \-userId          | Customer ID associated with the request                   |
| \-requestId       | Unique transaction request ID                             |
| \-baseType        | Always "RETRO" for retro requests                         |
| \-transactionId   | Original transaction ID being retro-tagged                |
| \-reqAdd          | Boolean indicating if request is additive                 |
| \-oneStep         | Boolean indicating one-step processing status             |

```
{
    "pagination": {
        "limit": 10,
        "offset": 20,
        "total": 3
    },
    "data": [
        {
            "id": 38959,
            "status": "PENDING",
            "addedBy": {
                "id": 75155295,
                "code": "sant.p_123",
                "description": "",
                "name": "sant.p_123",
                "type": "TILL",
                "referenceId": -1,
                "adminType": "GENERAL",
                "isActive": true,
                "isOuEnabled": false,
                "timeZoneId": 191,
                "currencyId": 95,
                "languageId": 148,
                "default": false
            },
            "addedByParent": {
                "id": 75152715,
                "code": "doc123",
                "description": "",
                "name": "DocStore",
                "type": "STORE",
                "referenceId": -1,
                "adminType": "GENERAL",
                "isActive": true,
                "isOuEnabled": false,
                "timeZoneId": 191,
                "currencyId": 95,
                "languageId": 148,
                "default": false
            },
            "updatedBy": {
                "id": 75155295,
                "code": "sant.p_123",
                "description": "",
                "name": "sant.p_123",
                "type": "TILL",
                "referenceId": -1,
                "adminType": "GENERAL",
                "isActive": true,
                "isOuEnabled": false,
                "timeZoneId": 191,
                "currencyId": 95,
                "languageId": 148,
                "default": false
            },
            "addedOn": "2025-05-02T11:53:46Z",
            "updatedOn": "2025-05-02T11:53:46Z",
            "userId": 565032200,
            "requestId": 13048217,
            "baseType": "RETRO",
            "reason": "",
            "comments": "",
            "transactionId": 323391839,
            "warnings": [],
            "reqAdd": true,
            "oneStep": false
        },
        {
            "id": 38256,
            "status": "PENDING",
            "addedBy": {
                "id": 75155295,
                "code": "sant.p_123",
                "description": "",
                "name": "sant.p_123",
                "type": "TILL",
                "referenceId": -1,
                "adminType": "GENERAL",
                "isActive": true,
                "isOuEnabled": false,
                "timeZoneId": 191,
                "currencyId": 95,
                "languageId": 148,
                "default": false
            },
            "addedByParent": {
                "id": 75152715,
                "code": "doc123",
                "description": "",
                "name": "DocStore",
                "type": "STORE",
                "referenceId": -1,
                "adminType": "GENERAL",
                "isActive": true,
                "isOuEnabled": false,
                "timeZoneId": 191,
                "currencyId": 95,
                "languageId": 148,
                "default": false
            },
            "updatedBy": {
                "id": 75155295,
                "code": "sant.p_123",
                "description": "",
                "name": "sant.p_123",
                "type": "TILL",
                "referenceId": -1,
                "adminType": "GENERAL",
                "isActive": true,
                "isOuEnabled": false,
                "timeZoneId": 191,
                "currencyId": 95,
                "languageId": 148,
                "default": false
            },
            "addedOn": "2025-04-02T04:49:06Z",
            "updatedOn": "2025-04-02T04:49:06Z",
            "userId": 565032200,
            "requestId": 13019491,
            "baseType": "RETRO",
            "reason": "",
            "comments": "",
            "transactionId": 323274585,
            "warnings": [],
            "reqAdd": true,
            "oneStep": false
        },
        {
            "id": 38236,
            "status": "PENDING",
            "addedBy": {
                "id": 75155295,
                "code": "sant.p_123",
                "description": "",
                "name": "sant.p_123",
                "type": "TILL",
                "referenceId": -1,
                "adminType": "GENERAL",
                "isActive": true,
                "isOuEnabled": false,
                "timeZoneId": 191,
                "currencyId": 95,
                "languageId": 148,
                "default": false
            },
            "addedByParent": {
                "id": 75152715,
                "code": "doc123",
                "description": "",
                "name": "DocStore",
                "type": "STORE",
                "referenceId": -1,
                "adminType": "GENERAL",
                "isActive": true,
                "isOuEnabled": false,
                "timeZoneId": 191,
                "currencyId": 95,
                "languageId": 148,
                "default": false
            },
            "updatedBy": {
                "id": 75155295,
                "code": "sant.p_123",
                "description": "",
                "name": "sant.p_123",
                "type": "TILL",
                "referenceId": -1,
                "adminType": "GENERAL",
                "isActive": true,
                "isOuEnabled": false,
                "timeZoneId": 191,
                "currencyId": 95,
                "languageId": 148,
                "default": false
            },
            "addedOn": "2025-04-01T09:03:20Z",
            "updatedOn": "2025-04-01T09:03:20Z",
            "userId": 565032200,
            "requestId": 13018738,
            "baseType": "RETRO",
            "reason": "",
            "comments": "",
            "transactionId": 323271072,
            "warnings": [],
            "reqAdd": true,
            "oneStep": false
        }
    ],
    "warnings": [],
    "errors": []
}
```

> 📘 
> 
> Retro transaction is conversion of non-member transactions to a loyalty transaction by tagging a previous transaction of a customer (once registered). 
> 
> - You can enable retro transaction for the org with CONF_RETRO_TRANSACTION_ENABLE on the Billing configuration page. That is, InTouch > **Settings** > **Systems & Deployment** > **InTouch PoS Configuration** > **Billing**. 
> - Check the following configurations for maximum days allowed and minimum time limit required after customer registration to tag a not-interested transaction to that customer. 
>   - CONF_CLIENT_RETRO_MAX_ALLOWED_AGE_DAYS 
>   - CONF_CLIENT_RETRO_DELAY_SINCE_REGISTRATION_HOURS

## API specific Error code

| Error Code | Description       | Reason                             |
| :--------- | :---------------- | :--------------------------------- |
| 9050       | Request not found | Invalid or unsupported customer Id |