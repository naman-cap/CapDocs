---
title: Retrieve Request Status using ID
excerpt: Allows you to retrieve status of Customer Merge or Transaction requests.
api:
  file: request-v2.json
  operationId: retrieve-transaction-customer-merge-request-status
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
# Transaction Request Status Details

| Action                                     | Request status | Transaction status in *Member care / Customer / Tag transaction* |
| :----------------------------------------- | :------------- | :--------------------------------------------------------------- |
| Capillary receives a transaction request   | **PENDING**    | **PENDING**                                                      |
| Capillary rejects the transaction request  | **REJECTED**   | **REJECTED**                                                     |
| Capillary approves the transaction request | **SUCCESS**    | **SUCCESS**                                                      |
| Transaction request failed                 | **FAILURE**    | **FAILURE**                                                      |

# API Endpoint Example

`<https://eu.api.capillarytech.com/v2/requests/13029191>`

# Prerequisites

*   Authentication - Basic or OAuth authentication
*   Access group resource - Read permission on Requests resource group

# Resource information

|                       |                     |
| :-------------------- | :------------------ |
| URI                   | v2/requests`\{id\}` |
| HTTP method           | GET                 |
| Pagination supported? | Yes                 |
| Rate limit            | NA                  |
| Batch support         | Yes                 |

# Request Path Parameters

| Parameters (Parameters marked with \* are mandatory) | Data Type | Description                                                                                                                                                             |
| :--------------------------------------------------- | :-------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| id\*                                                 | Long      | Unique identifier of the request, generated during the [POST call to add the request](https://docs.capillarytech.com/reference/add-request-transaction-customer-merge). |

<br />

```json Sample Request for Transaction and Customer Merge Details
curl --location 'https://eu.api.capillarytech.com/v2/requests/13029191' \
--header 'Authorization: Basic ZGl2TdlYTI0YTYyZTZm' \
--header 'Cookie: _cfuvid=EWw7Wfz8Ouj54ZVF2cPldbObmSaOCCsfBD._qxSWZoM-1744468652196-0.0.1.1-604800000'
```
```json Sample GET Request from Child org
curl --location 'https://eu.api.capillarytech.com/v2/requests/1778080' \
--header 'Authorization: Basic YXV0b3WI5NjRiMDcxNTJkMjM0Yjcw'
```
```json Sample GET Request from the Parent Org
curl --location 'https://eu.api.capillarytech.com/v2/requests/1778080' \
--header 'Authorization: Basic YXV0b3NjRiMDcxNTJkMjM0Yjcw'
```

<br />

# Response Parameters for Transaction Request

| Parameter   | Description                                                                                              |
| ----------- | -------------------------------------------------------------------------------------------------------- |
| type        | The type of the transaction, in this case, "TRANSACTION."                                                |
| baseType    | The base type of the transaction, in this case, "REGULAR\_TXN\_ADD."                                     |
| status      | The status of the transaction, e.g., "PENDING."                                                          |
| transaction | Contains details about the transaction, including delivery status, type, billing date, bill amount, etc. |
| images      | An array of objects representing images related to the transaction.                                      |
| customer    | Contains information about the customer, including their ID, profiles, identifiers, etc.                 |
| attribution | Contains attribution details related to the transaction, such as createDate, createdBy, etc.             |
| id          | The unique request identifier for the transaction.                                                       |
| addedOn     | The date and time when the transaction was added.                                                        |
| userId      | The unique identifier for the user associated with the transaction.                                      |
| comments    | Additional comments or notes related to the transaction, e.g., "Test."                                   |
| oneStep     | A boolean indicating whether the transaction involves a one-step process.                                |
| warnings    | An array that may contain any warnings related to the operation, if applicable.                          |

<br />

```json Transaction Response
{
    "type": "TRANSACTION",
    "baseType": "REGULAR_TXN_ADD",
    "status": "PENDING",
    "transaction": {
        "deliveryStatus": "SHIPPED",
        "type": "REGULAR",
        "billAmount": 21.0,
        "billNumber": "4113667",
        "discount": 0.0,
        "grossAmount": 21.0,
        "note": "",
        "lineItemsV2": [
            {
                "amount": 10.5,
                "description": "PURINA TIDY CATS CAT LITTER STRONG CLUMPS FOR MULTIPLE CATS LOCKS AWAY ODORS BAG 40 POUND",
                "discount": 0.0,
                "itemCode": "ASN10000001",
                "qty": 1.0,
                "rate": 10.5,
                "returnable": true,
                "returnableDays": -1,
                "comboDetails": [],
                "addOnDetails": [],
                "splitDetails": []
            },
            {
                "amount": 10.5,
                "description": "Cat Chow",
                "discount": 0.0,
                "itemCode": "ASN10000001",
                "qty": 1.0,
                "rate": 10.5,
                "returnable": true,
                "returnableDays": -1,
                "comboDetails": [],
                "addOnDetails": [],
                "splitDetails": []
            }
        ],
        "customFields": {
            "added_on": "2022-12-10T11:58:18+05:30",
            "paymentmode": "abc",
            "vendor_name": "Walmart"
        },
        "notInterestedReason": "",
        "isUseDefaultUserGroup2": false,
        "paymentModes": [
            {
                "mode": "Cash",
                "value": 21.0,
                "notes": ""
            }
        ],
        "billingDate": "2022-12-13T11:58:18+05:30",
        "useDefaultUserGroup2": false
    },
    "images": [
        {
            "id": 557,
            "provider": "FILESERVICE",
            "namespace": "solutions",
            "serial": 1,
            "fileName": "56BA4T07757.png",
            "active": true
        }
    ],
    "customer": {
        "id": 538194152,
        "profiles": [
            {
                "firstName": "",
                "lastName": "",
                "fields": {},
                "identifiers": [
                    {
                        "type": "externalId",
                        "value": "7989b873-7cbc-11ed-8eb3-0e5e22a6da49"
                    },
                    {
                        "type": "email",
                        "value": "christopher@gmail.com"
                    }
                ],
                "commChannels": [],
                "userId": 538194152,
                "accountId": "",
                "autoUpdateTime": "2023-04-27T12:17:23+05:30",
                "identifiersAll": [
                    {
                        "type": "externalId",
                        "value": "7989b873-7cbc-11ed-8eb3-0e5e22a6da49"
                    },
                    {
                        "type": "email",
                        "value": "christopher@gmail.com"
                    }
                ]
            }
        ]
    },
    "attribution": {
        "createDate": "2023-02-08T19:16:08+05:30",
        "createdBy": {
            "id": 13509183,
            "code": "purinatestaccount",
            "description": "",
            "name": "purinatestaccount",
            "type": "TILL",
            "adminType": "GENERAL",
            "isActive": true,
            "isOuEnabled": false,
            "timeZoneId": 372,
            "currencyId": -1,
            "languageId": -1
        },
        "modifiedBy": {
            "id": 13509183,
            "code": "purinatestaccount",
            "description": "",
            "name": "purinatestaccount",
            "type": "TILL",
            "adminType": "GENERAL",
            "isActive": true,
            "isOuEnabled": false,
            "timeZoneId": 372,
            "currencyId": -1,
            "languageId": -1
        },
        "modifiedDate": "2023-04-26T00:00:00+05:30"
    },
    "id": 902581,
    "addedOn": "2023-02-08T19:16:08+05:30",
    "userId": 538194152,
    "comments": "Test",
    "oneStep": false,
    "warnings": []
}
```

<br />

# Response Parameters for Customer Merge Request

| Parameter               | Data Type | Description                                                                                                   |
| :---------------------- | :-------- | :------------------------------------------------------------------------------------------------------------ |
| type                    | Enum      | Type of the request.  **Possible Value**: `CHANGE_IDENTIFIER`                                                 |
| baseType                | Enum      | Base type of the request. **Possible Value**: `MERGE`                                                         |
| status                  | String    | Current status of the request.  **Possible Values**: `PENDING<code>, </code>APPROVED<code>, </code>REJECTED`  |
| attribution             | Object    | Contains metadata about the creation and modification of the request.                                         |
| -createDate             | Date      | Timestamp in ISO 8601 format indicating when the request was created.                                         |
| -createdBy              | Object    | Details of the user who created the request.                                                                  |
| -- id                   | Long      | ID of the creator.                                                                                            |
| -- code                 | String    | Till code of the creator.                                                                                     |
| -- description          | String    | Description of the creator.                                                                                   |
| -- name                 | String    | Till of the creator.                                                                                          |
| -- type                 | String    | Type of user who created the request.                                                                         |
| -- referenceId          | Integer   | Reference ID of the creator.                                                                                  |
| -- adminType            | String    | Admin type of the creator.                                                                                    |
| -- isActive             | Boolean   | Indicates if the creator is active. `True<code> indicates active. </code>False` indicates inactive.           |
| -- isOuEnabled          | Boolean   | Indicates if OU is enabled for the creator.                                                                   |
| -- timeZoneId           | Integer   | Time zone ID associated with the creator. **Example**: 191                                                    |
| -- currencyId           | Integer   | Currency ID associated with the creator. **Example**: 95                                                      |
| -- languageId           | Integer   | Language ID associated with the creator. **Example**: 148                                                     |
| -- default              | Boolean   | Indicates if this is the default user.                                                                        |
| -modifiedBy             | Object    | Details of the user who last modified the request.                                                            |
| -- id                   | Long      | ID of the modifier.                                                                                           |
| -- code                 | String    | Till code of the modifier.                                                                                    |
| -- description          | String    | Description of the modifier.                                                                                  |
| -- name                 | String    | Till of the modifier.                                                                                         |
| -- type                 | String    | Type of user who modified the request.                                                                        |
| -- referenceId          | Integer   | Reference ID of the modifier.                                                                                 |
| -- adminType            | String    | Admin type of the modifier.                                                                                   |
| -- isActive             | Boolean   | Indicates if the modifier is active. `True<code> indicates active. </code>False` indicates inactive.          |
| -- isOuEnabled          | Boolean   | Indicates if OU is enabled for the modifier.                                                                  |
| -- timeZoneId           | Integer   | Time zone ID associated with the modifier. **Example**: 191                                                   |
| -- currencyId           | Integer   | Currency ID associated with the modifier. **Example**: 95                                                     |
| -- languageId           | Integer   | Language ID associated with the modifier. **Example**: 148                                                    |
| -- default              | Boolean   | Indicates if this is the default user.                                                                        |
| modifiedDate            | Date      | Timestamp in ISO 8601 format indicating when the request was modified.                                        |
| id                      | Long      | Unique ID of the request.                                                                                     |
| orgId                   | Integer   | Organization ID where the request was created.                                                                |
| addedOn                 | Date      | Indicates the timestamp in ISO 8601 format when the request was added.                                        |
| userId                  | Integer   | Customer ID of the victim.                                                                                    |
| changeIdentifierRequest | Object    | Details of the change identifier request.                                                                     |
| -id                     | Long      | Unique ID of the change identifier request.                                                                   |
| -userId                 | Long      | User ID associated with the change.                                                                           |
| -requestId              | Long      | Associated request ID.                                                                                        |
| -changeType             | String    | Type of identifier change. Value: `MERGE`                                                                     |
| -changeStatus           | String    | Status of the identifier change. **Possible Values**: `PENDING<code>, </code>APPROVED<code>, </code>REJECTED` |
| -changeIdentifiers      | Object    | Contains the identifiers of the survivor and the victim.                                                      |
| -- add                  | Array     | Identifiers of the survivor.                                                                                  |
| --- type                | String    | Type of identifier for the survivor account.                                                                  |
| --- value               | Long      | Value the customer identifier of the survivor account                                                         |
| -- remove               | Array     | Identifiers of the victim.                                                                                    |
| --- type                | String    | Type of identifier for the victim account.                                                                    |
| --- value               | Long      | Value the customer identifier of the victim account.                                                          |
| -oneStep                | Boolean   | Indicates if the merge should be done in one step.                                                            |
| oneStep                 | Boolean   | Indicates if the merge request is configured as one step.                                                     |
| warnings                | Array     | List of any warnings encountered (empty if none).                                                             |

```json Sample response for cutomer merge details
{
    "type": "CHANGE_IDENTIFIER",
    "baseType": "MERGE",
    "status": "PENDING",
    "attribution": {
        "createDate": "2025-04-11T13:38:21Z",
        "createdBy": {
            "id": 75152722,
            "code": "divya_doc",
            "description": "",
            "name": "divya_doc",
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
        "modifiedBy": {
            "id": 75152722,
            "code": "divya_doc",
            "description": "",
            "name": "divya_doc",
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
        "modifiedDate": "2025-04-11T00:00:00Z"
    },
    "id": 13029191,
    "orgId": 100737,
    "addedOn": "2025-04-11T13:38:21Z",
    "userId": 565398692,
    "changeIdentifierRequest": {
        "id": 999690,
        "userId": -1,
        "requestId": 13029191,
        "changeType": "MERGE",
        "changeStatus": "PROCESSING",
        "changeIdentifiers": {
            "add": [
                {
                    "type": "id",
                    "value": "565398773"
                }
            ],
            "remove": [
                {
                    "type": "id",
                    "value": "565398692"
                }
            ]
        },
        "oneStep": false
    },
    "oneStep": false,
    "warnings": []
}
```
```json Sample response from child org
{
    "type": "CHANGE_IDENTIFIER",
    "baseType": "MERGE",
    "status": "PENDING",
    "attribution": {
        "createDate": "2025-03-21T10:38:44+05:30",
        "createdBy": {
            "id": 50771462,
            "code": "co_51956_connectedorgchildone_till",
            "description": "default_till",
            "name": "co_51956_connectedorgchildone_till",
            "type": "TILL",
            "referenceId": 51956,
            "adminType": "GENERAL",
            "isActive": true,
            "isOuEnabled": false,
            "timeZoneId": 0,
            "currencyId": 0,
            "languageId": 0,
            "default": true
        },
        "modifiedBy": {
            "id": 50771462,
            "code": "co_51956_connectedorgchildone_till",
            "description": "default_till",
            "name": "co_51956_connectedorgchildone_till",
            "type": "TILL",
            "referenceId": 51956,
            "adminType": "GENERAL",
            "isActive": true,
            "isOuEnabled": false,
            "timeZoneId": 0,
            "currencyId": 0,
            "languageId": 0,
            "default": true
        },
        "modifiedDate": "2025-03-21T00:00:00+05:30"
    },
    "id": 1778080,
    "orgId": 51957,
    "addedOn": "2025-03-21T10:38:44+05:30",
    "userId": 387733597,
    "changeIdentifierRequest": {
        "id": 843373,
        "userId": -1,
        "requestId": 1778080,
        "changeType": "MERGE",
        "changeStatus": "PROCESSING",
        "changeIdentifiers": {
            "add": [
                {
                    "type": "id",
                    "value": "387733529"
                }
            ],
            "remove": [
                {
                    "type": "id",
                    "value": "387733597"
                }
            ]
        },
        "oneStep": false
    },
    "oneStep": false,
    "warnings": []
}
```
```json Sample request from parent org
{
    "type": "CHANGE_IDENTIFIER",
    "baseType": "MERGE",
    "status": "PENDING",
    "attribution": {
        "createDate": "2025-03-21T10:38:44+05:30",
        "createdBy": {
            "id": 50712937,
            "code": "autostore1.till2-1721667104",
            "description": "autostore1.till2-1721667104",
            "name": "autostore1.till2-1721667104",
            "type": "TILL",
            "referenceId": -1,
            "adminType": "GENERAL",
            "isActive": true,
            "isOuEnabled": false,
            "timeZoneId": 191,
            "currencyId": 0,
            "languageId": 0,
            "default": false
        },
        "modifiedBy": {
            "id": 50712937,
            "code": "autostore1.till2-1721667104",
            "description": "autostore1.till2-1721667104",
            "name": "autostore1.till2-1721667104",
            "type": "TILL",
            "referenceId": -1,
            "adminType": "GENERAL",
            "isActive": true,
            "isOuEnabled": false,
            "timeZoneId": 191,
            "currencyId": 0,
            "languageId": 0,
            "default": false
        },
        "modifiedDate": "2025-03-21T00:00:00+05:30"
    },
    "id": 1778080,
    "orgId": 51956,
    "addedOn": "2025-03-21T10:38:44+05:30",
    "userId": 387733597,
    "changeIdentifierRequest": {
        "id": 843372,
        "userId": -1,
        "requestId": 1778080,
        "changeType": "MERGE",
        "changeStatus": "PROCESSING",
        "changeIdentifiers": {
            "add": [
                {
                    "type": "id",
                    "value": "387733529"
                }
            ],
            "remove": [
                {
                    "type": "id",
                    "value": "387733597"
                }
            ]
        },
        "oneStep": false
    },
    "oneStep": false,
    "warnings": []
}
```

# Error Code

| Error Code | Description       | Reason               |
| :--------- | :---------------- | :------------------- |
| 9050       | Request not found | Incorrect request ID |