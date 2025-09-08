---
title: Group Points Transferrable
excerpt: >-
  Checks if specific points from one account can be transferred to another
  account (group to customer, customer to a group, or one group to another).
api:
  file: v2.json
  operationId: group-points-transferrable
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
> For detailed information about our APIs and for hands-on testing, refer documentation in [API overview](https://docs.capillarytech.com/reference/apioverview) and step-by-step guide on making your first API call in [Make your first API call](https://docs.capillarytech.com/reference/make-your-first-api-call).

# Prerequisites

*   Authentication: Basic or OAuth authentication
*   Default access group

Before using this API to add or redeem points at the group level, you must ensure that certain configurations are enabled and the correct entity type is set. Failure to configure these prerequisites may result in errors, incomplete transactions, or unexpected behavior.

| Configuration                                                                  | Purpose                                                                                                                                                                                 | How to Enable                                                                                                                                                            |
| ------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **ENABLE\_USER\_GROUP\_LOYALTY**                                               | Enables user group loyalty features, including viewing and managing group details, members, and loyalty incentives. When enabled, a "Group view" option is available.                   | Raise a ticket to the sustenance team. [More info](https://docs.capillarytech.com/docs/group_view).                                                                      |
| **ENABLE\_GROUP\_PROGRAMS\_REDEMPTION** (or `ENABLE_GROUP_PROGRAM_REDEMPTION`) | Allows points redemption at the group level. Requires setting `group_redemption` to true and ensuring the loyalty workflow rule `currentEvent.isGroupProgramRedemption` is set to true. | Raise a ticket to the sustenance team. Changes may take up to 24 hours to reflect. [More info](https://docs.capillarytech.com/docs/create-a-multi-loyalty-program#faqs). |
| **ENABLE\_FLEET\_LOYALTY** (`FLEET_GROUP_LOYALTY_ENABLED`)                     | Enables fleet loyalty features, such as point expiration and management for fleet or group users.                                                                                       | Raise a JIRA ticket to the sustenance team. [More info](https://docs.capillarytech.com/docs/group-loyalty#expire-points-for-group--fleet-users).                         |

### User Entity Requirement

You must change the user entity type from individual to groupUser to allow points to be added or redeemed at the group level.

# Resource information

| HTTP Method            | GET  |
| :--------------------- | :--- |
| Pagination             | No   |
| Batch support          | No   |
| Rate limit information | None |

## Request Body Parameters

<br />

| Parameter (parameters marked by \* are mandatory) | DataType | Description                                                                                                                                                |
| :------------------------------------------------ | :------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------- |
| pointsTobeTransferred\*                           | int      | Number of points to be transferred.                                                                                                                        |
| notes                                             | string   | Notes to be added to the transfer activity.                                                                                                                |
| programId\*                                       | int      | Loyalty program ID from which points have to be transferred. Applicable for multi-program organizations. Defaults to the primary program ID if not passed. |
| transferredBy\*                                   | object   | Details of the user or entity performing the transfer.                                                                                                     |
| — identifierType\*                                | Enum     | Identifier type to identify the user. Example values: `id`, `externalId`, `cardnumber`, `mobile`, `email`.                                                 |
| — identifierValue\*                               | string   | Unique value of the specified identifier type.                                                                                                             |
| — source                                          | Enum     | Source where the user account is available. Example values: `INSTORE`, `ECOMMERCE`, `WECHAT`, etc.                                                         |
| — accountId                                       | string   | Account ID for sources that require additional account identifiers.                                                                                        |
| toEntity\*                                        | object   | Details of the destination account (customer or group) to which points need to be transferred.                                                             |
| — type\*                                          | Enum     | Type of the entity. Value: `CUSTOMER`, `USERGROUP2`.                                                                                                       |
| — identifierType\*                                | Enum     | Identifier type for the destination entity. Example values: `id`, `externalId`, `cardnumber`, etc.                                                         |
| — identifierValue\*                               | string   | Unique value of the specified identifier type.                                                                                                             |
| — accountId                                       | string   | Account ID for the destination entity if needed.                                                                                                           |
| — source                                          | Enum     | Source where the destination entity account is available. Example values: `INSTORE`, `ECOMMERCE`, etc.                                                     |
| fromEntity\*                                      | object   | Details of the source account (group or customer) from which points will be transferred.                                                                   |
| — type\*                                          | Enum     | Type of the entity. Value: `CUSTOMER`, `USERGROUP2`.                                                                                                       |
| — identifierType\*                                | Enum     | Identifier type for the source entity. Example values: `id`, `externalId`, `cardnumber`, etc.                                                              |
| — identifierValue\*                               | string   | Unique value of the specified identifier type.                                                                                                             |

# Response Parameters

<br />

| Parameter (parameters marked by \* are mandatory) | DataType | Description                                                                        |
| :------------------------------------------------ | :------- | :--------------------------------------------------------------------------------- |
| data                                              | array    | List of point transfer status objects.                                             |
| — pointsTobeTransferred                           | int      | Number of points that were attempted to be transferred.                            |
| — transferrable                                   | boolean  | Indicates if the points are eligible and allowed for transfer (`true` or `false`). |
| warnings                                          | array    | List of warnings returned by the system, if any.                                   |
| errors                                            | array    | List of errors returned by the system, if any.                                     |

```json
{
    "data": [
        {
            "pointsToBeTransferred": 10,
            "transferrable": true
        }
    ],
    "warnings": [],
    "errors": []
}
```
```json Error:    	 Missing pointsToBeTransferred field 
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
```json Error: value parameter data type invalid
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
```json Error: Parameter provided in the identifierType field is invalid
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

# API Error Codes

| Error Code | Description                                                    | Reason                                                                                                                                                    |
| ---------- | -------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 422        | `pointsToBeTransferred` field is missing                       | Value provided in `pointsToBeTransferred` field is missing or invalid.                                                                                    |
| 434        | Invalid `transferredBy.identifierValue` in the request payload | The value provided for `identifierValue` under `transferredBy` is invalid.                                                                                |
| 434        | Invalid `fromEntity.identifierType` in the request payload     | The value provided for `identifierType` under `fromEntity` is invalid.                                                                                    |
| 830        | User lacks permissions to transfer points from this entity     | The `transferredBy` object is missing or the user is not authorized to perform this transfer.                                                             |
| 1206       | Source entity details missing or invalid                       | `fromEntity` object is missing or contains invalid values.                                                                                                |
| 1207       | Destination entity details missing or invalid                  | `toEntity` object is missing or contains invalid values.                                                                                                  |
| 1208       | Entity type not set or invalid                                 | `type` under `toEntity` is missing or not one of the supported types (`USERGROUP2`, `CUSTOMER`).                                                          |
| 1645       | Invalid group details                                          | `identifierType` is missing or `identifierValue` is invalid under `toEntity`.                                                                             |
| 885        | Invalid program ID                                             | The value provided for `programId` is missing or does not match any valid program.                                                                        |
| 8015       | Customer not found for given identifiers                       | The value provided for `identifierValue` under `transferredBy` is invalid or the customer does not exist.                                                 |
| 807        | Redemptions points not divisible                               | The points value in pointsTobeTransferred is not valid as per configuration. Only whole numbers are accepted or points should be divisible as configured. |