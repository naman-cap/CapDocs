---
title: Update redeem points
excerpt: ''
api:
  file: v2.json
  operationId: update-redeem-points
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
This API allows you to add or update metadata for a point redemption. The following fields can be edited:

* bill\_id
* bill\_number
* purpose
* custom fields

> 👍 Note
>
> For detailed information about our APIs and for hands-on testing, refer documentation in [API overview](https://docs.capillarytech.com/reference/apioverview) and  step-by-step guide on making your first API call in [Make your first API call](https://docs.capillarytech.com/reference/make-your-first-api-call) .

# API specifications

| Feature                  | Availability  |
| :----------------------- | :------------ |
| Authentication supported | Basic         |
| Pagination               | Not supported |
| Batch support            | Not supported |
| Access Group             | Yes           |

# API endpoint example

`https://eu.api.capillarytech.com/v2/points/updateRedemption`

# Request parameters

```json
{
    "redemptionId": "Fnpztw",
    "billNumber": "txn-79",
    "purpose": "Update redemption details",
    "entity": {
        "type": "CUSTOMER",
        "identifierType": "mobile",
        "identifierValue": "919731013853"
    },
    "customFields": {
        "card_number": "123456"
    }
}
```

# Request body parameters

<Table align={["left","left","left"]}>
  <thead>
    <tr>
      <th>
        Parameter
      </th>

      <th>
        Data Type
      </th>

      <th>
        Description
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        redemptionId\*
      </td>

      <td>
        String
      </td>

      <td>
        A unique identifier for the redemption process. The `redemptionId` is generated when redeeming points using the [redeem points API](https://docs.capillarytech.com/reference/redeem-points#/).
      </td>
    </tr>

    <tr>
      <td>
        billNumber
      </td>

      <td>
        String
      </td>

      <td>
        A string identifier for the bill.
      </td>
    </tr>

    <tr>
      <td>
        billId
      </td>

      <td>
        Integer
      </td>

      <td>
        A numerical identifier for the bill. The maximum number of supported characters is 19. Must be a positive whole number without decimals or special characters.
      </td>
    </tr>

    <tr>
      <td>
        purpose
      </td>

      <td>
        String
      </td>

      <td>
        The purpose or reason for the redemption update. The maximum character limit is 255 characters.
      </td>
    </tr>

    <tr>
      <td>
        entity
      </td>

      <td>
        Object
      </td>

      <td>
        An object containing details about the entity.
      </td>
    </tr>

    <tr>
      <td>
        * type\*
      </td>

      <td>
        Enum
      </td>

      <td>
        The type of entity involved in the transaction. Supported values: `CUSTOMER`, `USERGROUP2`, `FLEET`
      </td>
    </tr>

    <tr>
      <td>
        * identifierType\*
      </td>

      <td>
        Enum
      </td>

      <td>
        The type of identifier used for the entity.
      </td>
    </tr>

    <tr>
      <td>
        * identifierValue\*
      </td>

      <td>
        String
      </td>

      <td>
        The value of the identifier for the entity.
      </td>
    </tr>

    <tr>
      <td>
        customFields
      </td>

      <td>
        Object
      </td>

      <td>
        Object containing details of custom fields for the point redemption.
      </td>
    </tr>

    <tr>
      <td>
        * key `<value>`
      </td>

      <td>
        String
      </td>

      <td>
        Key-value pairs of the custom field and their respective values.\
        **Notes:**

        * Before using custom fields, ensure they are created in the organisation. For more information on creating custom fields, refer to the section on [creating a new custom field](https://docs.capillarytech.com/docs/data-fields#create-new-custom-fields).
        * You can add or edit custom fields only if you include custom field metadata during the points redemption event. Include the custom fields when redeeming points using the [Redeem points API](https://docs.capillarytech.com/reference/redeem-points#/).
      </td>
    </tr>
  </tbody>
</Table>

Note: It is mandatory to pass either redemptionId or externalReferenceNumber.

# Response body

```json
{
    "id": 26503632,
    "programId": 973,
    "pointsRedeemed": 101.0,
    "billId": -1,
    "billNumber": "txn-79",
    "validationCode": "NS3U05",
    "notes": "Redeemed to transfer points to the friend",
    "redemptionTime": 1750951708000,
    "pointsRedemptionTime": 1750931908000,
    "tillId": 75152721,
    "tillName": "",
    "pointDeductionList": [],
    "redemptionId": "Fnpztw",
    "customFields": [
        {
            "name": "card_number",
            "value": "123456"
        }
    ],
    "customerId": 564332013,
    "redemptionPurpose": "testUpdate",
    "redemptionDate": "2025-06-26T15:28:28Z",
    "warnings": []
}
```

# Response body parameters

| Key                  | Data Type | Description                                                                            |
| -------------------- | --------- | -------------------------------------------------------------------------------------- |
| id                   | Long      | Unique ID of the customer.                                                             |
| programId            | Integer   | Unique ID of the loyalty program.                                                      |
| pointsRedeemed       | String    | Number of points redeemed during the redemption.                                       |
| billId               | Long      | Unique ID generated after a transaction.                                               |
| billNumber           | String    | Unique ID associated with the transaction. This is provided when adding a transaction. |
| validationCode       | String    | Unique code to validate the redemption.                                                |
| notes                | String    | Notes related to the redemption update, if any.                                        |
| redemptionTime       | Date      | Timestamp when the redemption event was initiated or performed                         |
| pointsRedemptionTime | Date      | Timestamp when the points were deducted from the warehouse or backend system.          |
| tillId               | Integer   | Till ID from where the redemption occurred.                                            |
| tillName             | String    | Name of the till where the redemption occurred.                                        |
| pointDeductionList   | Object    | Object containing details of the point deduction.                                      |
| redemptionId         | String    | Unique ID of the redemption event.                                                     |
| customFields         | Object    | Object containing details of custom fields associated with the points redemption.      |
| customFields.name    | String    | Name of the custom field.                                                              |
| customFields.value   | String    | Value of the custom field.                                                             |
| customerId           | Integer   | Unique customer identifier whose points were deducted.                                 |
| redemptionPurpose    | String    | Purpose for updating the points redemption details.                                    |
| redemptionDate       | Date      | Date when the redemption occurred in ISO 8601 format.                                  |
| warnings             | Object    | Object containing warnings that occured, if any.                                       |

# API-specific error codes

| Error Code | Description                                                      | Reason / When It Occurs                                                                                                                                      |
| ---------- | ---------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **748**    | No metadata update requested.                                    | The request did not include any updatable fields (e.g., no new bill number, bill ID, or purpose provided).                                                   |
| **749**    | Exactly one redemption identifier needed to identify redemption. | You must pass **only one** valid identifier (`redemptionId`, `billNumber`, or another allowed ID). Passing none or multiple identifiers triggers this error. |
| **750**    | Redemption update failed: {0}.                                   | The update action failed internally, possibly due to invalid status transitions or data integrity issues. `{0}` provides specific details.                   |
| **1219**   | Entity details not set/invalid.                                  | The `entity` object is missing or its fields (`type`, `identifierType`, `identifierValue`) are incomplete or invalid.                                        |
| **1212**   | Entity type passed is not valid.                                 | The `entity.type` value (e.g., `CUSTOMER`, `groupUser`) is incorrect or not supported for your configuration.                                                |
| **8015**   | Invalid or malformed identifier provided in request body.        | The `identifierValue` or `redemptionId` is missing, incorrectly formatted, or does not exist in the system.                                                  |