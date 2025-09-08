---
title: Get Points Transfer Summary
excerpt: >-
  Retrieves points transfer summary of a customer. 


  This includes points that are transferred from the customer account to another
  customer’s account (Deduction) and points that are received from another
  customer’s account (Addition).
api:
  file: v2.json
  operationId: get-points-transfer-summary
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
## Prerequisites

*   Basic or OAuth credentials
*   Read access to Points access group resource

## Sample API cURL

`https://eu.api.capillarytech.com/v2/customers/343015431/pointsTransfers`

```curl
curl --location 'https://eu.api.capillarytech.com/v2/customers/565039505/pointsTransfers' \
--header 'Authorization: Basic c2FudC5wXzEyMzpiMmVhMGFhYWI1ZThmODg5ZTAzNGE2NjA5NTIwM2FlNw==' \
--header 'Cookie: _cfuvid=uEUwrBAfGGgkRhH8C6wGyc6ShByhFRsEdpQj1e8WSGU-1750831646379-0.0.1.1-604800000'
```

## Resource information

| URI                | v2/customers/34301543/pointsTransfers |
| :----------------- | :------------------------------------ |
| HTTP method        | GET                                   |
| Authentication     | Basic                                 |
| Pagination support | Yes                                   |
| Rate limit         | Yes                                   |
| Batch Support      | No                                    |

## Request Headers

| Header Key          | Description                                                                |
| ------------------- | -------------------------------------------------------------------------- |
| Authorization       | Bearer token for authentication. Example: Bearer \<your\_access\_token>.   |
| Content-Type        | Specifies the media type of the request. Use application/json for JSON.    |
| Accept              | Defines the response format. Example: application/json or application/xml. |
| X-Capillary-OrgId   | Unique organization ID for which the API is being called.                  |
| X-Capillary-App-Key | Application key for API access.                                            |

## Query parameter

| Parameter | Type   | Description                                                                                            |
| :-------- | :----- | :----------------------------------------------------------------------------------------------------- |
| limit     | int    | Maximum number of records to return per page. Default value - 10                                       |
| offset    | int    | Number of records to skip before starting to return results (zero-based). Default value - 0            |
| page      | int    | Page number to fetch (alternative to offset). Overrides offset if both are provided. Default value - 1 |
| sortBy    | string | Field to sort by (e.g., pointsTransferDate, pointsTransferred).                                        |
| sortOrder | string | Sort direction: `asc` (ascending) or `desc` (descending). Default: `desc`.                             |

## Response Parameter

| Parameter          | Type   | Description                                                                 |
| ------------------ | ------ | --------------------------------------------------------------------------- |
| toEntityId         | long   | Unique ID of the recipient entity (customer or group).                      |
| toEntityType       | string | Type of the recipient entity (e.g., "CUSTOMER").                            |
| fromEntityId       | long   | Unique ID of the sender entity (customer or group).                         |
| fromEntityType     | string | Type of the sender entity (e.g., "CUSTOMER").                               |
| pointsTransferDate | string | Timestamp of the points transfer (format: YYYY-MM-DD HH:MM:SS).             |
| pointsTransferred  | double | Number of points transferred.                                               |
| transferId         | long   | Unique ID for the transfer transaction.                                     |
| transferType       | string | Type of transfer (e.g., "DEDUCTION" for outgoing, "ADDITION" for incoming). |
| transferredFrom    | object | Details of the sender:                                                      |
|   userId           | long   | Sender's unique ID.                                                         |
|   firstName        | string | Sender's first name                                                         |
|   lastName         | string | Sender's last name                                                          |
| transferredTo      | object | Details of the recipient:                                                   |
|   userId           | long   | Recipient's unique ID.                                                      |
|   firstName        | string | Recipient's first name                                                      |
|   lastName         | string | Recipient's last name                                                       |
| notes              | string | Additional notes or comments for the transfer (if provided).                |
| programName        | string | Name of the loyalty program associated with the transfer.                   |

```json Response
{
    "data": [
        {
            "toEntityId": 565039506,
            "toEntityType": "CUSTOMER",
            "fromEntityId": 565039505,
            "fromEntityType": "CUSTOMER",
            "pointsTransferDate": "2025-06-06 13:33:40",
            "pointsTransferred": 20.0,
            "transferId": 1038007,
            "transferType": "DEDUCTION",
            "transferredFrom": {
                "userId": 565039505,
                "firstName": "",
                "lastName": ""
            },
            "transferredTo": {
                "userId": 565039506,
                "firstName": "Madhurima",
                "lastName": "Basak"
            },
            "notes": "",
            "programName": "DocDemoDefaultProgram"
        },
        {
            "toEntityId": 565039506,
            "toEntityType": "CUSTOMER",
            "fromEntityId": 565039505,
            "fromEntityType": "CUSTOMER",
            "pointsTransferDate": "2025-06-06 11:24:48",
            "pointsTransferred": 20.0,
            "transferId": 1038004,
            "transferType": "DEDUCTION",
            "transferredFrom": {
                "userId": 565039505,
                "firstName": "",
                "lastName": ""
            },
            "transferredTo": {
                "userId": 565039506,
                "firstName": "Madhurima",
                "lastName": "Basak"
            },
            "notes": "",
            "programName": "DocDemoDefaultProgram"
        },
        {
            "toEntityId": 565039506,
            "toEntityType": "CUSTOMER",
            "fromEntityId": 565039505,
            "fromEntityType": "CUSTOMER",
            "pointsTransferDate": "2025-06-03 06:59:07",
            "pointsTransferred": 20.0,
            "transferId": 1037928,
            "transferType": "DEDUCTION",
            "transferredFrom": {
                "userId": 565039505,
                "firstName": "",
                "lastName": ""
            },
            "transferredTo": {
                "userId": 565039506,
                "firstName": "Madhurima",
                "lastName": "Basak"
            },
            "notes": "",
            "programName": "DocDemoDefaultProgram"
        },
        {
            "toEntityId": 565039506,
            "toEntityType": "CUSTOMER",
            "fromEntityId": 565039505,
            "fromEntityType": "CUSTOMER",
            "pointsTransferDate": "2025-06-02 10:59:56",
            "pointsTransferred": 20.0,
            "transferId": 1037907,
            "transferType": "DEDUCTION",
            "transferredFrom": {
                "userId": 565039505,
                "firstName": "",
                "lastName": ""
            },
            "transferredTo": {
                "userId": 565039506,
                "firstName": "Madhurima",
                "lastName": "Basak"
            },
            "notes": "",
            "programName": "DocDemoDefaultProgram"
        },
        {
            "toEntityId": 565039506,
            "toEntityType": "CUSTOMER",
            "fromEntityId": 565039505,
            "fromEntityType": "CUSTOMER",
            "pointsTransferDate": "2025-06-02 10:57:47",
            "pointsTransferred": 20.0,
            "transferId": 1037906,
            "transferType": "DEDUCTION",
            "transferredFrom": {
                "userId": 565039505,
                "firstName": "",
                "lastName": ""
            },
            "transferredTo": {
                "userId": 565039506,
                "firstName": "Madhurima",
                "lastName": "Basak"
            },
            "notes": "",
            "programName": "DocDemoDefaultProgram"
        },
        {
            "toEntityId": 565039506,
            "toEntityType": "CUSTOMER",
            "fromEntityId": 565039505,
            "fromEntityType": "CUSTOMER",
            "pointsTransferDate": "2025-06-02 10:56:48",
            "pointsTransferred": 200.0,
            "transferId": 1037905,
            "transferType": "DEDUCTION",
            "transferredFrom": {
                "userId": 565039505,
                "firstName": "",
                "lastName": ""
            },
            "transferredTo": {
                "userId": 565039506,
                "firstName": "Madhurima",
                "lastName": "Basak"
            },
            "notes": "",
            "programName": "DocDemoDefaultProgram"
        },
        {
            "toEntityId": 565039506,
            "toEntityType": "CUSTOMER",
            "fromEntityId": 565039505,
            "fromEntityType": "CUSTOMER",
            "pointsTransferDate": "2025-06-02 10:51:43",
            "pointsTransferred": 200.0,
            "transferId": 1037904,
            "transferType": "DEDUCTION",
            "transferredFrom": {
                "userId": 565039505,
                "firstName": "",
                "lastName": ""
            },
            "transferredTo": {
                "userId": 565039506,
                "firstName": "Madhurima",
                "lastName": "Basak"
            },
            "notes": "",
            "programName": "DocDemoDefaultProgram"
        },
        {
            "toEntityId": 565039506,
            "toEntityType": "CUSTOMER",
            "fromEntityId": 565039505,
            "fromEntityType": "CUSTOMER",
            "pointsTransferDate": "2025-06-02 10:49:00",
            "pointsTransferred": 200.0,
            "transferId": 1037903,
            "transferType": "DEDUCTION",
            "transferredFrom": {
                "userId": 565039505,
                "firstName": "",
                "lastName": ""
            },
            "transferredTo": {
                "userId": 565039506,
                "firstName": "Madhurima",
                "lastName": "Basak"
            },
            "notes": "",
            "programName": "DocDemoDefaultProgram"
        },
        {
            "toEntityId": 565039506,
            "toEntityType": "CUSTOMER",
            "fromEntityId": 565039505,
            "fromEntityType": "CUSTOMER",
            "pointsTransferDate": "2025-06-02 10:24:15",
            "pointsTransferred": 20.0,
            "transferId": 1037901,
            "transferType": "DEDUCTION",
            "transferredFrom": {
                "userId": 565039505,
                "firstName": "",
                "lastName": ""
            },
            "transferredTo": {
                "userId": 565039506,
                "firstName": "Madhurima",
                "lastName": "Basak"
            },
            "notes": "",
            "programName": "DocDemoDefaultProgram"
        },
        {
            "toEntityId": 565039506,
            "toEntityType": "CUSTOMER",
            "fromEntityId": 565039505,
            "fromEntityType": "CUSTOMER",
            "pointsTransferDate": "2025-06-02 10:24:14",
            "pointsTransferred": 2000.0,
            "transferId": 1037898,
            "transferType": "DEDUCTION",
            "transferredFrom": {
                "userId": 565039505,
                "firstName": "",
                "lastName": ""
            },
            "transferredTo": {
                "userId": 565039506,
                "firstName": "Madhurima",
                "lastName": "Basak"
            },
            "notes": "",
            "programName": "DocDemoDefaultProgram"
        },
        {
            "toEntityId": 565039506,
            "toEntityType": "CUSTOMER",
            "fromEntityId": 565039505,
            "fromEntityType": "CUSTOMER",
            "pointsTransferDate": "2025-06-02 10:24:13",
            "pointsTransferred": 2000.0,
            "transferId": 1037894,
            "transferType": "DEDUCTION",
            "transferredFrom": {
                "userId": 565039505,
                "firstName": "",
                "lastName": ""
            },
            "transferredTo": {
                "userId": 565039506,
                "firstName": "Madhurima",
                "lastName": "Basak"
            },
            "notes": "",
            "programName": "DocDemoDefaultProgram"
        },
        {
            "toEntityId": 565039506,
            "toEntityType": "CUSTOMER",
            "fromEntityId": 565039505,
            "fromEntityType": "CUSTOMER",
            "pointsTransferDate": "2025-06-02 07:24:58",
            "pointsTransferred": 2000.0,
            "transferId": 1037890,
            "transferType": "DEDUCTION",
            "transferredFrom": {
                "userId": 565039505,
                "firstName": "",
                "lastName": ""
            },
            "transferredTo": {
                "userId": 565039506,
                "firstName": "Madhurima",
                "lastName": "Basak"
            },
            "notes": "",
            "programName": "DocDemoDefaultProgram"
        }
    ],
    "warnings": [],
    "errors": []
}
```

## API specific error code

| Error Code | Description                                  | Reason                                                 |
| :--------- | :------------------------------------------- | :----------------------------------------------------- |
| 814        | No Results Found                             | Invalid query parameter passed                         |
| 8015       | Customer not found for the given identifiers | Invalid userId passed                                  |
| 8069       | Merged customer found                        | API request is made for a customer who has been merged |