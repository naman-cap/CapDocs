---
title: Get Points Transfer Details
excerpt: Retrieves the history of points transferred from a group or customer.
api:
  file: v2.json
  operationId: get-points-transfer-details
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
## Response Parameter

| Parameter          | Type    | Description                                                                 |
| :----------------- | :------ | :-------------------------------------------------------------------------- |
| toEntityId         | Integer | The ID of the entity receiving the points                                   |
| toEntityType       | String  | The type of entity receiving points (e.g., "CUSTOMER")                      |
| fromEntityId       | Integer | The ID of the entity sending the points                                     |
| fromEntityType     | String  | The type of entity sending points (e.g., "CUSTOMER")                        |
| pointsTransferDate | String  | The date and time when points were transferred (YYYY-MM-DD HH:MM:SS format) |
| pointsTransferred  | Float   | The number of points transferred                                            |
| transferId         | Integer | Unique identifier for the transfer transaction                              |
| transferType       | String  | Type of transfer (e.g., "DEDUCTION")                                        |
| transferredFrom    | Object  | Details about the sender                                                    |
| \-userId           | Integer | Unique identifier of the sender user                                        |
| \-firstName        | String  | First name of the sender                                                    |
| \-lastName         | String  | Last name of the sender                                                     |
| \-externalId       | String  | External identifier of the sender                                           |
| transferredTo      | Object  | Details about the receiver                                                  |
| \-userId           | Integer | Unique identifier of the receiver user                                      |
| \-firstName        | String  | First name of the receiver                                                  |
| \-lastName         | String  | Last name of the receiver                                                   |
| \-externalId       | String  | External identifier of the receiver                                         |
| notes              | String  | Additional notes about the transfer                                         |
| programName        | String  | Name of the loyalty program associated with the transfer                    |
| warnings           | Array   | List of warning messages                                                    |
| errors             | Array   | List of error messages                                                      |

```json
{
    "data": [
        {
            "toEntityId": 564955098,
            "toEntityType": "CUSTOMER",
            "fromEntityId": 564955097,
            "fromEntityType": "CUSTOMER",
            "pointsTransferDate": "2025-03-26 17:49:22",
            "pointsTransferred": 40.0,
            "transferId": 1035937,
            "transferType": "DEDUCTION",
            "transferredFrom": {
                "userId": 564955097,
                "firstName": "testgrp1",
                "lastName": "testgrpv2",
                "externalId": "434545"
            },
            "transferredTo": {
                "userId": 564955098,
                "firstName": "testgrp2",
                "lastName": "testgrpv2",
                "externalId": "434546"
            },
            "notes": "Transferred on 28 feb 2025",
            "programName": "DocDemoDefaultProgram"
        },
        {
            "toEntityId": 565032193,
            "toEntityType": "CUSTOMER",
            "fromEntityId": 564955097,
            "fromEntityType": "CUSTOMER",
            "pointsTransferDate": "2025-03-26 17:49:23",
            "pointsTransferred": 40.0,
            "transferId": 1035939,
            "transferType": "DEDUCTION",
            "transferredFrom": {
                "userId": 564955097,
                "firstName": "testgrp1",
                "lastName": "testgrpv2",
                "externalId": "434545"
            },
            "transferredTo": {
                "userId": 565032193,
                "firstName": "testgr8",
                "lastName": "testgrpv2",
                "externalId": "434552"
            },
            "notes": "",
            "programName": "DocDemoDefaultProgram"
        },
        {
            "toEntityId": 564955098,
            "toEntityType": "CUSTOMER",
            "fromEntityId": 564955097,
            "fromEntityType": "CUSTOMER",
            "pointsTransferDate": "2025-03-26 17:49:21",
            "pointsTransferred": 40.0,
            "transferId": 1035936,
            "transferType": "DEDUCTION",
            "transferredFrom": {
                "userId": 564955097,
                "firstName": "testgrp1",
                "lastName": "testgrpv2",
                "externalId": "434545"
            },
            "transferredTo": {
                "userId": 564955098,
                "firstName": "testgrp2",
                "lastName": "testgrpv2",
                "externalId": "434546"
            },
            "notes": "Transferred on 28 feb 2025",
            "programName": "DocDemoDefaultProgram"
        }
    ],
    "warnings": [],
    "errors": []
}
```

## API specific error code

| Error code | Description                                  | Reason                                                 |
| :--------- | :------------------------------------------- | :----------------------------------------------------- |
| 8015       | Customer not found for the given identifiers | Invalid or missing identifier value in query parameter |