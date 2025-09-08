---
title: Get Transaction Details
excerpt: Retrieves the details of a specific transaction.
api:
  file: v2.json
  operationId: get-transaction-details
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
## Request Parameters

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
        id (path)
      </td>

      <td style={{ textAlign: "left" }}>
        long
      </td>

      <td style={{ textAlign: "left" }}>
        Unique transaction id to fetch details.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        type (query)
      </td>

      <td style={{ textAlign: "left" }}>
        Enum
      </td>

      <td style={{ textAlign: "left" }}>
        Type of transaction to fetch.
        Value: `REGULAR`, `RETURN`, `NOT_INTERESTED`, `NOT_INTERESTED_RETURN`. Default value is `REGULAR`.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        tenders (query)
      </td>

      <td style={{ textAlign: "left" }}>
        boolean
      </td>

      <td style={{ textAlign: "left" }}>
        Pass `true` to retrieve payment mode details. Default value is `false`.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        credit\_notes (query)
      </td>

      <td style={{ textAlign: "left" }}>
        boolean
      </td>

      <td style={{ textAlign: "left" }}>
        Pass `true` to retrieve credit notes  details (added through v1.1 transaction/add). Default value is `false`.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        mlp
      </td>

      <td style={{ textAlign: "left" }}>
        boolean
      </td>

      <td style={{ textAlign: "left" }}>
        Pass `true` to include loyalty points information in the response
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        points\_breakup
      </td>

      <td style={{ textAlign: "left" }}>
        boolean
      </td>

      <td style={{ textAlign: "left" }}>
        Pass `true` to include detailed loyalty points breakdown
      </td>
    </tr>
  </tbody>
</Table>

<Note title="Note">
**To receive loyalty points information in the response:**

*   You must use the transaction `id` (not number)
*   You must include both **Query parameters**: `?mlp=true&points_breakup=truE`

The API behaves differently depending on identifier used:

*   When using **transaction ID**: Can return loyalty points if requested
*   When using **transaction number**: Will never return loyalty points (field will always be empty)
</Note>

> 🚧
>
> If you attempt to retrieve data of any deleted customer after a successful PII deletion, you will receive the following response:
>
> `"message": "Customer is deleted after PII delete request"`

# Response parameter

> 🚧
>
> The description in the line item is not the inventory level description but the description that you added while adding the transaction.

| Parameter                   | Description                                                                                                                                                                                                                                                                    |
| :-------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **useDefaultFleetGroup**    | Determines if the default fleet group is used. False means it's not used.                                                                                                                                                                                                      |
| **loyaltiesPointDetails**   | An array indicating about the loyalty points details associated.                                                                                                                                                                                                               |
| **billPointsBreakup**       | An array representing the breakdown of points in the bill. **Note**: This field will always return an empty array for Get Transaction by ID and Get Transaction by Number APIs. To get points breakup details, use the `v2/userGroup2/transactions`(GET) API response instead. |
| **attribution**             |                                                                                                                                                                                                                                                                                |
|     **createDate**          | The date and time when the record was created.                                                                                                                                                                                                                                 |
|     **createdBy**           | Details about the user who created the record.                                                                                                                                                                                                                                 |
|         **id**              | User ID.                                                                                                                                                                                                                                                                       |
|         **code**            | User code.                                                                                                                                                                                                                                                                     |
|         **description**     | Description of the user.                                                                                                                                                                                                                                                       |
|         **name**            | User name.                                                                                                                                                                                                                                                                     |
|         **type**            | Type of user.                                                                                                                                                                                                                                                                  |
|         **adminType**       | Type of admin privileges.                                                                                                                                                                                                                                                      |
|         **isActive**        | Indicates if the user is active.                                                                                                                                                                                                                                               |
|         **isOuEnabled**     | Indicates if organizational unit is enabled for the user.                                                                                                                                                                                                                      |
|         **timeZoneId**      | User's time zone ID.                                                                                                                                                                                                                                                           |
|         **currencyId**      | User's currency ID.                                                                                                                                                                                                                                                            |
|         **languageId**      | User's language ID.                                                                                                                                                                                                                                                            |
|     **modifiedBy**          | Details about the user who last modified the record (currently empty).                                                                                                                                                                                                         |
|     **modifiedDate**        | The date and time when the record was last modified (in UTC).                                                                                                                                                                                                                  |
| **billDetails**             |                                                                                                                                                                                                                                                                                |
|     **amount**              | The total amount of the bill.                                                                                                                                                                                                                                                  |
|     **billingStore**        | Details about the store where the billing occurred.                                                                                                                                                                                                                            |
|         **id**              | Store ID.                                                                                                                                                                                                                                                                      |
|         **code**            | Store code.                                                                                                                                                                                                                                                                    |
|         **description**     | Description of the store.                                                                                                                                                                                                                                                      |
|         **name**            | Store name.                                                                                                                                                                                                                                                                    |
|         **type**            | Type of store.                                                                                                                                                                                                                                                                 |
|         **adminType**       | Type of admin privileges for the store.                                                                                                                                                                                                                                        |
|         **isActive**        | Indicates if the store is active.                                                                                                                                                                                                                                              |
|         **isOuEnabled**     | Indicates if organizational unit is enabled for the store.                                                                                                                                                                                                                     |
|         **timeZoneId**      | Store's time zone ID.                                                                                                                                                                                                                                                          |
|         **currencyId**      | Store's currency ID.                                                                                                                                                                                                                                                           |
|         **languageId**      | Store's language ID.                                                                                                                                                                                                                                                           |
|     **billNumber**          | Unique identifier for the bill.                                                                                                                                                                                                                                                |
|     **billingTime**         | The date and time when the billing occurred (in UTC).                                                                                                                                                                                                                          |
|     **discount**            | The discount applied to the bill.                                                                                                                                                                                                                                              |
|     **grossAmount**         | The total amount before discount.                                                                                                                                                                                                                                              |
|     **note**                | Additional notes or comments about the bill (currently empty).                                                                                                                                                                                                                 |
|     **returnDetails**       | Details about the return status of the bill.                                                                                                                                                                                                                                   |
|         **canceled**        | Indicates if the bill is canceled.                                                                                                                                                                                                                                             |
|         **niReturnDetails** | Details about non-inventory returns (currently empty).                                                                                                                                                                                                                         |
|     **invalidBill**         | Indicates if the bill is valid or not.                                                                                                                                                                                                                                         |
| **customFields**            | An empty object indicating about the custom fields associated with this record.                                                                                                                                                                                                |
| **source**                  | Indicates the source of the transaction, in this case, "instore".                                                                                                                                                                                                              |
| **addWithLocalCurrency**    | Determines if additional information is added with local currency. False means it's not added.                                                                                                                                                                                 |
| **async**                   | Determines if the transaction is asynchronous. False means it's synchronous.                                                                                                                                                                                                   |
| **useV2**                   | Determines if version 2 of the transaction system is used. False means it's not used.                                                                                                                                                                                          |
| **simulation**              | Indicates if the transaction is a simulation. False means it's a real transaction.                                                                                                                                                                                             |
| **customerId**              | The unique identifier for the customer associated with the transaction.                                                                                                                                                                                                        |
| **id**                      | The unique identifier for this transaction record.                                                                                                                                                                                                                             |
| **lineItems**               | An array of line items that includes information about the line items. \<br> *NOTE:* The description of the line item is not the inventory level description but the description that you added while adding the transaction.                                                  |
| **outlierStatus**           | Status of the entire transaction (currently set to "NORMAL").                                                                                                                                                                                                                  |
| **type**                    | Type of the transaction, in this case, "REGULAR".                                                                                                                                                                                                                              |
| **lifeTimePurchases**       | Total number of purchases made by the customer over their lifetime.                                                                                                                                                                                                            |
| **ignorePoints**            | Determines if loyalty points are ignored for this transaction. False means they are considered.                                                                                                                                                                                |
| **autoUpdateTime**          | The date and time when the transaction record was last updated.                                                                                                                                                                                                                |
| **niReturnDetails**         | Details about non-inventory returns for the transaction (currently empty).                                                                                                                                                                                                     |
| **basketSize**              | Total quantity of items in the transaction                                                                                                                                                                                                                                     |
| **returnDetails**           | Details about the return status of the entire transaction.                                                                                                                                                                                                                     |
|     **canceled**            | Indicates if the entire transaction is canceled.                                                                                                                                                                                                                               |
| **retroTxn**                | Determines if it's a retrospective transaction. False means it's not retrospective.                                                                                                                                                                                            |
| **warnings**                | An array indicating about the warnings associated with this transaction.                                                                                                                                                                                                       |