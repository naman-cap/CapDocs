---
title: Get Points Expiry Schedule
excerpt: Retrieves the history of points expired schedules of a customer.
api:
  file: v2.json
  operationId: get-points-expiry-schedule
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

`https://eu.api.capillarytech.com/v2/customers/565039505/pointsExpirySchedule`

```curl
curl --location 'https://eu.api.capillarytech.com/v2/customers/565039505/pointsExpirySchedule' \
--header 'Authorization: Basic c2FudC5wXzEyMzpiMmVhMGFhYWI1ZThmO5ZTAzNGE2NjA5NTIwM2FlNw==' \
--header 'Cookie: _cfuvid=uEUwrBAfGGgkRhH8C6wGyc6ShByhFRsEdpQj1e8WSGU-1750831646379-0.0.1.1-604800000'
```

## Resource information

| URI                | v2/customers/565039505/pointsExpirySchedule |
| :----------------- | :------------------------------------------ |
| HTTP method        | GET                                         |
| Authentication     | Basic                                       |
| Pagination support | No                                          |
| Rate limit         | Yes                                         |
| Batch Support      | No                                          |

<br />

## Response Parameter

| Field                        | Type    | Description                                                 |
| ---------------------------- | ------- | ----------------------------------------------------------- |
| id                           | integer | The unique identifier of the customer.                      |
| profiles                     | array   | An array of customer profiles (empty in the example).       |
| loyaltyInfo                  | object  | Contains details about the customer's loyalty status.       |
| loyaltyInfo.loyaltyType      | string  | The type of loyalty program (e.g., "loyalty").              |
| segments                     | object  | Customer segments (empty in the example).                   |
| extendedFields               | object  | Additional custom fields (empty in the example).            |
| expirySchedules              | array   | An array of objects describing the points expiry schedule.  |
| expirySchedules[].points     | float   | The number of points expiring.                              |
| expirySchedules[].expiryDate | string  | The date when the points expire (format: YYYY-MM-DD).       |
| expirySchedules[].programId  | integer | The ID of the loyalty program associated with the points.   |
| expirySchedules[].pointsType | string  | The type of points (e.g., "customer_promotions").           |
| expirySchedules[].expiryType | string  | The type of expiry (e.g., "fixed").                         |
| warnings                     | array   | Any warnings related to the request (empty in the example). |

```json Response
{
    "id": 565039505,
    "profiles": [],
    "loyaltyInfo": {
        "loyaltyType": "loyalty"
    },
    "segments": {},
    "extendedFields": {},
    "expirySchedules": [
        {
            "points": 5140.0,
            "expiryDate": "2125-05-05",
            "programId": 973,
            "pointsType": "customer_promotions",
            "expiryType": "fixed"
        }
    ],
    "warnings": []
}
```

## API specific Response

| Error code | Description                                                                      | Reason                                                 |
| :--------- | :------------------------------------------------------------------------------- | :----------------------------------------------------- |
| 1218       | Customer not enrolled in loyalty program : customer not enrolled or no cps entry | Invalid customer ID passed                             |
| 8069       | Merged customer found                                                            | API request is made for a customer who has been merged |
