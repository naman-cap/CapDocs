---
title: Transfer Customer Points
excerpt: >-
  Transfers points from one customer account to another customer account by
  validating the OTP issued for the points transfer.
api:
  file: v2.json
  operationId: transfer-points-customer
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
* Rate limiter controls the number of incoming and outgoing traffic of a network
* Authentication verifies the identity of the current user or integration.\
  See Introduction > Authentication (Merchant Setup on Admin Portal) for more details

# Body Parameter

<Table align={["left","left","left"]}>
  <thead>
    <tr>
      <th style={{ textAlign: "left" }}>
        Parameter
      </th>

      <th style={{ textAlign: "left" }}>
        Type
      </th>

      <th style={{ textAlign: "left" }}>
        Description
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td style={{ textAlign: "left" }}>
        pointsToBeTransferred
      </td>

      <td style={{ textAlign: "left" }}>
        Integer
      </td>

      <td style={{ textAlign: "left" }}>
        Number of points to be transferred.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        programId
      </td>

      <td style={{ textAlign: "left" }}>
        Integer
      </td>

      <td style={{ textAlign: "left" }}>
        Program ID from which points has to be transferred.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        fromCustomerIdentifier
      </td>

      <td style={{ textAlign: "left" }}>
        Object
      </td>

      <td style={{ textAlign: "left" }}>
        Details of source customer - customer that wants to transfer points.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        toCustomerIdentifier
      </td>

      <td style={{ textAlign: "left" }}>
        Object
      </td>

      <td style={{ textAlign: "left" }}>
        Details of destination customer - customer to whom the points have to be transferred.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        type
      </td>

      <td style={{ textAlign: "left" }}>
        String
      </td>

      <td style={{ textAlign: "left" }}>
        Customer identifier type.
        Values: `ID` (user id of the customer), `MOBILE`, `EXTERNAL_ID`, `EMAIL`.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        value
      </td>

      <td style={{ textAlign: "left" }}>
        String
      </td>

      <td style={{ textAlign: "left" }}>
        The value of the specified identifier.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        groupProgramTransfer
      </td>

      <td style={{ textAlign: "left" }}>
        Boolean
      </td>

      <td style={{ textAlign: "left" }}>
        Indicates whether the transfer is part of a group program. (true/false)
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        code
      </td>

      <td style={{ textAlign: "left" }}>
        String
      </td>

      <td style={{ textAlign: "left" }}>
        Pass the OTP received by the fromCustomer for the current points transfer. To issue OTP, use either `/isPointsTransferreable` or `/issuePointsTransferOtp`. This is not mandatory is required only if you have set `issueOtp` to true in [this API](https://docs.capillarytech.com/reference/-customer-points-transferrable) .
      </td>
    </tr>
  </tbody>
</Table>

```json
{
   "pointsTobeTransferred":1000,
   "groupProgramTransfer": "false",
   "programId": 973,
    "fromCustomerIdentifier": {
        "type": "MOBILE",
        "value": "919988221100"
    },
    "toCustomerIdentifier": {
        "type": "ID",
        "value": "565039506"
    }
}
```

# Response Parameter

| Parameter                              | Type    | Description                                                     |
| :------------------------------------- | :------ | :-------------------------------------------------------------- |
| toEntityId                             | Integer | Unique ID of the recipient customer                             |
| toEntityType                           | String  | Type of recipient entity                                        |
| fromEntityId                           | Integer | Unique ID of the sender customer                                |
| fromEntityType                         | String  | Type of sender entity                                           |
| pointsTransferDate                     | String  | Timestamp when transfer occurred in format: YYYY-MM-DD HH:MM:SS |
| pointsTransferred                      | Float   | Total number of points transferred                              |
| transferId                             | Integer | Unique transaction ID for this transfer                         |
| transferType                           | String  | Transfer operation type (e.g: "DEDUCTION" for sender side)      |
| -transferredFrom                       | Object  | Details about the sender                                        |
| -userId                                | Integer | Sender's user ID                                                |
| -firstName                             | String  | Sender's first name                                             |
| -lastName                              | String  | Sender's last name                                              |
| transferredTo                          | Object  | Details about the recipient                                     |
| -userId                                | Integer | Recipient's user ID                                             |
| -firstName                             | String  | Recipient's first name                                          |
| -lastName                              | String  | Recipient's last name                                           |
| -notes                                 | String  | Additional notes about the transfer                             |
| -programName                           | String  | Name of the loyalty program used                                |
| pointsTransferBreakupByEarningPrograms | Object  | Breakdown of points by sub-program                              |
| -programId                             | Integer | ID of the earning sub-program                                   |
| -deductedPoints                        | Float   | Points deducted from this program                               |
| -programCurrentPoints                  | Integer | Remaining points balance in this program                        |
| warnings                               | Array   | List of non-critical warnings (if any)                          |
| errors                                 | Array   | List of errors if transfer failed (empty on success)            |

```json
{
    "data": [
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
                "firstName": "Tom",
                "lastName": "Sawyer"
            },
            "notes": "",
            "programName": "DocDemoDefaultProgram",
            "pointsTransferBreakupByEarningPrograms": [
                {
                    "programId": 973,
                    "deductedPoints": 1000.000,
                    "programCurrentPoints": 7500
                }
            ]
        }
    ],
    "warnings": [],
    "errors": []
}
```
```json pointsToBeTransferred field is missing 
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
```json value parameter data type invalid
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
```json Parameter provided in the identifierType field is invalid
{
    "warnings": [],
    "errors": [
        {
            "status": false,
            "code": 434,
            "message": "Invalid fromEntity.identifierType set in the request payload"
        }
    ]
}
```

## API specific error code

| Error Code | Description                                                                  | Reason                                                                                                  |
| :--------- | :--------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------ |
| 3316       | Group redemption action executed for non-group payload                       | The `groupProgramTransfer` parameter is set to "true" but the identifier belongs to a non-group entity. |
| 807        | Redemption points not divisible                                              | Only whole numbers are valid in the `pointsToBeTransferred` parameter.                                  |
| 885        | Invalid program ID                                                           | Invalid or missing `programId`.                                                                         |
| 8013       | Invalid identifier type                                                      | Invalid or missing `type` in `fromCustomerIdentifier` or `toCustomerIdentifier` parameter.              |
| 8015       | Customer not found for the given identifier                                  | Invalid or missing `value` in `fromCustomerIdentifier` or `toCustomerIdentifier` parameter.             |
| 422        | pointsToBeTransferred field is missing                                       | Value provided in `pointsToBeTransferred` field is missing or invalid.                                  |
| 434        | Invalid transferredBy.identifierValue                                        | The value provided in the `value` parameter is invalid.                                                 |
| 434        | Invalid fromEntity.identifierType                                            | The value provided in the `identifierType` parameter is invalid.                                        |
| 804        | Unable to process points transfer request                                    | General processing failure due to system or validation error.                                           |
| 817        | Redemption failed due to insufficient points or configuration                | Customer does not have enough points or redemption is restricted for this configuration.                |
| 818        | Points transfer not allowed for the specified program                        | The program does not support point transfer operations.                                                 |
| 827        | Unable to redeem points. Points redemption is enabled for your organization. | Redemption conditions not met despite program-level enablement.                                         |
| 886        | Points transfer failed due to temporary system error                         | Internal failure, please try again later.                                                               |
| 887        | Points transfer failed due to validation error                               | Parameter or data validation failed, please verify your request.                                        |
| 888        | Invalid configuration detected                                               | Configuration is invalid. Please report to Capillary Support.                                           |
| 896        | Points transfer could not be processed                                       | Temporary failure, please try again later.                                                              |
| 898        | Points transfer currently unavailable                                        | Service temporarily unavailable, please retry later.                                                    |
| 899        | Misconfigured program setup                                                  | Configuration issue detected. Please report to Capillary Support.                                       |
| 901\*      | (Error code) Customer not eligible for points transfer                       | Customer eligibility criteria not met.                                                                  |
| 902\*      | (Error code) Duplicate points transfer request                               | Duplicate or conflicting transfer detected.                                                             |
| 903\*      | (Error code) Redemption limit exceeded                                       | Customer has reached the allowed redemption or transfer limit.                                          |
| 904\*      | (Error code) Points transfer locked for the customer                         | Transfers are temporarily locked for this customer account.                                             |

# API Specific Warning Code

| Warning Code | Description                             |
| ------------ | --------------------------------------- |
| 901          | Invalid points or points redemption ID. |
| 902          | Redemption ID does not exist.           |
| 903          | Unable to redeem points.                |
| 904          | Invalid customer details passed.        |