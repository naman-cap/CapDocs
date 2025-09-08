---
title: Transfer Group Points
excerpt: >-
  Lets you transfer points from one account to another account - group to
  customer, customer to group, or group to group.
api:
  file: v2.json
  operationId: transfer-group-points
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

| URI                           | v2/points/userGroup2/transfer |
| :---------------------------- | :---------------------------- |
| HTTP Method                   | POST                          |
| Pagination supported?         | NA                            |
| Rate limit                    | NA                            |
| Batch support                 | NA                            |
| Authentication type supported | Basic or OAuth                |

## Request Body Parameter

| Parameter (Parameters marked in \* are mandatory) | Type    | Description                                                                                                                 |
| :------------------------------------------------ | :------ | :-------------------------------------------------------------------------------------------------------------------------- |
| pointsTobeTransferred                             | Integer | Number of points to be transferred.                                                                                         |
| programId\*                                       | Integer | ID of the loyalty program from which points are deducted.                                                                   |
| notes                                             | String  | Additional notes or comments about the transfer.                                                                            |
| transferredBy\*                                   | Object  | Details of the entity initiating the transfer. It is required for all transfers except individual-to-group point transfers. |
| \-identifierType\*                                | String  | Type of identifier used                                                                                                     |
| \-identifierValue\*                               | String  | Value of the identifier                                                                                                     |
| \-source                                          | String  | Source system initiating the transfer (e.g., "INSTORE").                                                                    |
| \-accountId                                       | String  | Account ID associated with the transfer initiator.                                                                          |
| toEntity\*                                        | Object  | Details of the entity receiving the points.                                                                                 |
| \-type\*                                          | String  | Type of the receiving entity (e.g., "USERGROUP2").                                                                          |
| \-identifierType\*                                | String  | Type of identifier used                                                                                                     |
| \-identifierValue\*                               | String  | Value of the identifier                                                                                                     |
| \-accountId                                       | String  | Account ID associated with the recipient.                                                                                   |
| \-source                                          | String  | Source system of the recipient (e.g., "INSTORE").                                                                           |
| fromEntity                                        | Object  | Details of the entity sending the points.                                                                                   |
| \-type                                            | String  | Type of the sending entity                                                                                                  |
| \-identifierType\*                                | String  | Type of identifier used                                                                                                     |
| \-identifierValue\*                               | String  | Value of the identifier                                                                                                     |

```json Sample Request
{
    "pointsTobeTransferred": 1,
    "programId": 973,
    "notes": "notes123",
    "transferredBy": {
        "identifierType": "id",
        "identifierValue": "565345942",
        "source": "INSTOREwe",
        "accountId": "textgrp22"
    },
    "toEntity": {
       "type": "USERGROUP2",
        "identifierType": "id",
        "identifierValue": "3847940",
        "accountId": "textgrp21",
        "source": "INSTORE"
    },
    "fromEntity": {
        "type": "CUSTOMER",
        "identifierType": "id",
        "identifierValue": "565345942"
    }
}
```

## Response Parameter

| Parameter                              | Type    | Description                                                            |
| :------------------------------------- | :------ | :--------------------------------------------------------------------- |
| data                                   | Array   | Contains the list of points transfer records.                          |
| toEntityId                             | Integer | The ID of the entity receiving the points (e.g., UserGroup2).          |
| toEntityType                           | String  | The type of entity receiving the points (e.g., "USERGROUP2").          |
| fromEntityId                           | Integer | The ID of the entity sending the points                                |
| fromEntityType                         | String  | The type of entity sending the points (e.g., "CUSTOMER").              |
| pointsTransferDate                     | String  | The timestamp when the points transfer occurred (YYYY-MM-DD HH:MM:SS). |
| pointsTransferred                      | Float   | The number of points transferred.                                      |
| transferId                             | Integer | A unique identifier for the transfer.                                  |
| transferType                           | String  | The type of transfer                                                   |
| transferredFrom                        | Object  | Details of the sender (Customer).                                      |
| userId                                 | Integer | The user ID of the sender.                                             |
| firstName                              | String  | The first name of the sender.                                          |
| lastName                               | String  | The last name of the sender.                                           |
| externalId                             | String  | The external identifier of the sender.                                 |
| transferredToUserGroup2                | Object  | Details of the recipient (UserGroup2).                                 |
| id                                     | Integer | The ID of the UserGroup2.                                              |
| externalId                             | String  | The external identifier of the UserGroup2.                             |
| groupStatus                            | String  | The status of the group (e.g., "ACTIVE").                              |
| fleetGroupUsers                        | Array   | List of users in the group                                             |
| createdBy                              | Integer | The user ID of the creator of the group.                               |
| createdOn                              | String  | The timestamp when the group was created.                              |
| groupName                              | String  | The name of the UserGroup2.                                            |
| maxGroupSize                           | Integer | The maximum allowed size of the group.                                 |
| lifeTimePurchases                      | Integer | The lifetime purchases associated with the group.                      |
| notes                                  | String  | Additional notes related to the transfer.                              |
| programName                            | String  | The name of the loyalty program.                                       |
| pointsTransferBreakupByEarningPrograms | Array   | Breakdown of points deducted per earning program.                      |
| programId                              | Integer | The ID of the earning program.                                         |
| deductedPoints                         | Float   | The points deducted from this program.                                 |
| programCurrentPoints                   | Integer | Remaining points in the program after deduction.                       |

```json Sample Response
{
    "data": [
        {
            "toEntityId": 3847940,
            "toEntityType": "USERGROUP2",
            "fromEntityId": 565345942,
            "fromEntityType": "CUSTOMER",
            "pointsTransferDate": "2025-05-26 09:32:42",
            "pointsTransferred": 2.0,
            "transferId": 1037706,
            "transferType": "DEDUCTION",
            "transferredFrom": {
                "userId": 565345942,
                "firstName": "firstname21",
                "lastName": "lastname21",
                "externalId": "73818141"
            },
            "transferredToUserGroup2": {
                "id": 3847940,
                "externalId": "testgrp201externalId201",
                "groupStatus": "ACTIVE",
                "fleetGroupUsers": [],
                "createdBy": 75155295,
                "createdOn": "2025-04-04T09:26:46Z",
                "groupName": "name_sant201",
                "maxGroupSize": 110,
                "lifeTimePurchases": 78000
            },
            "notes": "notes123",
            "programName": "DocDemoDefaultProgram",
            "pointsTransferBreakupByEarningPrograms": [
                {
                    "programId": 973,
                    "deductedPoints": 1.000,
                    "programCurrentPoints": 992
                }
            ]
        }
    ],
    "warnings": [],
    "errors": []
}
```
```json Error: pointsToBeTransferred is not provided
{
    "warnings": [],
    "errors": [
        {
            "status": false,
            "code": 422,
            "message": "pointsToBeTransferred value is invalid"
        }
    ]
}
```
```json Error: identifierValue or identifierType is invalid
{
    "warnings": [],
    "errors": [
        {
            "status": false,
            "code": 434,
            "message": "Invalid transferredBy.identifierValue set in the request payload"
        }
    ]
}
```

## API Specific Error Code

<Table align={["left","left","left"]}>
    <thead>
    <tr>
        <th>
            Error Code
        </th>

        <th>
            Description
        </th>

        <th>
            Reason
        </th>
    </tr>
    </thead>

    <tbody>
    <tr>
        <td>
            1207
        </td>

        <td>
            points transfer to entity details not set/invalid
        </td>

        <td>
            `toEntity` object is missing
        </td>
    </tr>

    <tr>
        <td>
            422
        </td>

        <td>
            pointsToBeTransferred value is invalid
        </td>

        <td>
            `pointsToBeTransferred` value is either invalid or missing.
        </td>
    </tr>

    <tr>
        <td>
            434
        </td>

        <td>
            Invalid transferredBy.identifierValue set in the request payload
        </td>

        <td>
            * `identifierType` is invalid. <br />
            * Invalid `identifierValue` for `identifierType` = `id`.\
            Ensure that the data type provided is an integer.
        </td>
    </tr>

    <tr>
        <td>

        </td>

        <td>

        </td>

        <td>

        </td>
    </tr>

    <tr>
        <td>
            807
        </td>

        <td>
            Redemptions points not divisible
        </td>

        <td>
            Redemption points must be in whole numbers.
        </td>
    </tr>

    <tr>
        <td>
            830
        </td>

        <td>
            User does not have permissions to transfer points from this entity
        </td>

        <td>
            User lacks permissions to transfer points.
        </td>
    </tr>

    <tr>
        <td>
            885
        </td>

        <td>
            Invalid program id passed
        </td>

        <td>
            Program ID is invalid or missing.
        </td>
    </tr>

    <tr>
        <td>
            1206
        </td>

        <td>
            points transfer from entity details not set/invalid
        </td>

        <td>
            `fromEntity` object is missing.
        </td>
    </tr>

    <tr>
        <td>
            1208
        </td>

        <td>
            points transfer entity type not set/invalid.
        </td>

        <td>
            The `identifierValue` or `identifierType` in`to entity` object is invalid or missing.
        </td>
    </tr>

    <tr>
        <td>
            1645
        </td>

        <td>
            group details passed are not valid
        </td>

        <td>
            Group Id in `toEntity`object is invalid or missing.
        </td>
    </tr>

    <tr>
        <td>
            8015
        </td>

        <td>
            Customer not found for the given identifiers
        </td>

        <td>
            Invalid or missing costumer ID in  `toEntity`or `fromEntity` object
        </td>
    </tr>
    </tbody>
</Table>