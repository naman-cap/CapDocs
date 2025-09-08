---
title: Get Loyalty Events
excerpt: Retrieves the details of loyalty events triggered for the customer.
api:
  file: v2.json
  operationId: get-loyalty-events
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

## API endpoint example

`https://eu.api.capillarytech.com/v2/customers/565039505/loyaltyEvents`

```curl
curl --location 'https://eu.api.capillarytech.com/v2/customers/565039505/loyaltyEvents' \
--header 'Authorization: Basic 
c2FudC5wXzEyMzpiMmVhMGFhYWI1ZThmODg5ZTAzNGE2NjA5NTIwM2FlNw==' \
--header 'Cookie: 
_cfuvid=uEUwrBAfGGgkRhH8C6wGyc6ShByhFRsEdpQj1e8WSGU-1750831646379-0.0.1.1-
604800000'
```

## Resource Information

| Field          | Value                          |
| -------------- | ------------------------------ |
| URI            | v2/\[customerId]/loyaltyEvents |
| HTTP Method    | GET                            |
| Rate Limited   | Yes                            |
| Authentication | Yes (Bearer token)             |
| Batch Support  | No                             |

## Request Parameters

### Path Parameters

| Parameter  | Type | Description                |
| ---------- | ---- | -------------------------- |
| customerId | long | Unique ID of the customer. |

### Query Parameters

| Parameter | Type   | Description                                                  | Default |
| --------- | ------ | ------------------------------------------------------------ | ------- |
| limit     | int    | Maximum records per page.                                    | 10      |
| offset    | int    | Records to skip (zero-based).                                | 0       |
| page      | int    | Page number (overrides offset if both provided).             | 1       |
| eventType | string | Filter by event type (e.g., EARN, REDEEM, EXPIRE, TRANSFER). | null    |
|           |        |                                                              |         |
| fromDate  | string | Start date for filtering events (format: YYYY-MM-DD).        | null    |
| toDate    | string | End date for filtering events (format: YYYY-MM-DD).          | null    |

## Response Parameters

| Parameter          | Type   | Description                                                               |
| ------------------ | ------ | ------------------------------------------------------------------------- |
| id                 | long   | Unique identifier for the loyalty event.                                  |
| customerId         | long   | Unique ID of the customer associated with the event.                      |
| date               | string | Timestamp of the event in ISO 8601 format (e.g., "2025-02-28T06:16:16Z"). |
| eventName          | string | Name/type of the event (e.g., "CustomerRegistration",                     |
| "CustomerUpdate"). |        |                                                                           |
| orgId              | long   | Unique ID of the organization where the event occurred.                   |
| status             | string | Status of the event (e.g., "SUCCESS", "FAILED").                          |
| uniqueId           | string | Unique reference ID for the event (e.g., "eQmzQLEfVb").                   |

```Text Response
{
    "data": [
        {
            "id": 1603616021,
            "customerId": 565039505,
            "date": "2025-02-28T06:16:16Z",
            "eventName": "CustomerRegistration",
            "orgId": 100737,
            "status": "SUCCESS",
            "uniqueId": "eQmzQLEfVb"
        },
        {
            "id": 1603618101,
            "customerId": 565039505,
            "date": "2025-02-28T06:56:04Z",
            "eventName": "CustomerUpdate",
            "orgId": 100737,
            "status": "SUCCESS",
            "uniqueId": "RnPyaWafs6"
        }
    ],
    "warnings": [],
    "errors": []
}
```

## API specific Response

| Error code      | Description                                  | Reason                                 |
| :-------------- | :------------------------------------------- | :------------------------------------- |
| 8069            | Merged customer found                        | API request is made for a customer who |
| has been merged |                                              |                                        |
| 8015            | Customer not found for the given identifiers | Invalid Customer ID passed             |