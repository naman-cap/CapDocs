---
title: Update Transaction
excerpt: >-
  Lets you update deliveryStatus, custom fields, and extended field details of a
  transaction.
api:
  file: v2.json
  operationId: update-transaction
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
## API endpoint example

```curl
curl --location --request PUT 'https://eu.api.capillarytech.com/v2/transactions?identifierName=mobile&identifierValue=919986000586' \
--header 'Content-Type: application/json' \
--header 'Authorization: Basic bmVlc3RvcmV0aWxsc3NzoyMDJjYjk2MmFjNTkwNzViOTY0YjA3MTUyZDIzNGI3MA==' \
--header 'Cookie: _cfuvid=nqxTNRsWRIahnyM3eUc36V7PaRf1iZMfFubj3vNvPJA-1721630804772-0.0.1.1-604800000' \
--data '{
  "id": 873547608,
  
  "extendedFields": {
    "ship_first_name": "Test1updatedagain",
    "ship_last_name": "Singh",
    "checkin_date":"2010-06-04 21:08:12",
    "checkout_date":"2010-06-05 21:08:12"
  },
  "customFields": {
    "ordersource": "testnee123updatedagain"
  }
,

  "lineItems":[{
    
    "itemCode":"sku_234_2",
    "extendedFields":
    {
        "MetalRate": "10577",
        "GrossWeight": "10.50"
      }
  }]


}'
```

<br />

## Request Query Parameters

<Table align={["left","left","left"]}>
  <thead>
    <tr>
      <th>
        Parameter
      </th>

      <th>
        Type
      </th>

      <th>
        Description
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        identifierName
      </td>

      <td>
        Enum
      </td>

      <td>
        Pass any of the registered identifier name of the customer.
        Values: `mobile`, `email`, `externalId`, `id`, `wechat`, `martjackid`, `fbId`, `cardnumber`, `cardExternalId`
      </td>
    </tr>

    <tr>
      <td>
        identifierValue
      </td>

      <td>
        string
      </td>

      <td>
        Pass the respective identifier value. For example, if `identifierType` is mobile, `identifierValue` is mobile number.
      </td>
    </tr>

    <tr>
      <td>
        source
      </td>

      <td>
        Enum
      </td>

      <td>
        Pass the source from which the transaction is made. Values: `INSTORE` (for InStore), `WECHAT` (WeChat), `MARTJACK` (AnywhereCommerce), `WEB_ENGAGE` (Web-engage integration), `ECOMMERCE` (ECOMMERCE), `JD` (JD), `TAOBAO` (Taobao), `TMALL` (TMall), `FACEBOOK` (Facebook), `WEBSITE` (other website), `OTHERS` (any other source).
      </td>
    </tr>

    <tr>
      <td>
        accountId
      </td>

      <td>
        string
      </td>

      <td>
        For sources with multiple accounts (such as MARTJACK, WECHAT), pass  the respective account ID. Not applicable for `INSTORE` source.
      </td>
    </tr>
  </tbody>
</Table>

## Request Body Parameter

<Table align={["left","left","left"]}>
  <thead>
    <tr>
      <th>
        Parameter
      </th>

      <th>
        Type
      </th>

      <th>
        Description
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        id
      </td>

      <td>
        long
      </td>

      <td>
        Unique id of the transaction generated internally.
      </td>
    </tr>

    <tr>
      <td>
        number
      </td>

      <td>
        string
      </td>

      <td>
        Unique transaction number that needs to be updated.
      </td>
    </tr>

    <tr>
      <td>
        extendedFields
      </td>

      <td>
        obj
      </td>

      <td>
        Valid transaction level extended field details in name and value pairs.
      </td>
    </tr>

    <tr>
      <td>
        customFields
      </td>

      <td>
        obj
      </td>

      <td>
        Valid transactional level custom field details in name and value pairs.
      </td>
    </tr>

    <tr>
      <td>
        lineItems
      </td>

      <td>
        obj
      </td>

      <td>
        Object to include line item level extended fields that need to be updated. Either item code or line item ID is mandatory to update the line item level extended fields.
      </td>
    </tr>

    <tr>
      <td>
        itemCode
      </td>

      <td>
        string
      </td>

      <td>
        Item code of the line item.
      </td>
    </tr>

    <tr>
      <td>
        id
      </td>

      <td>
        int
      </td>

      <td>
        Line item ID generated during addition of the transaction.
      </td>
    </tr>

    <tr>
      <td>
        deliveryStatus
      </td>

      <td>
        Enum
      </td>

      <td>
        Delivery status of the item.
        Values: `PLACED`, `PROCESSED`, `SHIPPED`, `DELIVERED`, `RETURNED`.
      </td>
    </tr>
  </tbody>
</Table>

```json
{
  "id": 873547608,
  
  "extendedFields": {
    "ship_first_name": "Test1updatedagain",
    "ship_last_name": "Singh",
    "checkin_date":"2010-06-04 21:08:12",
    "checkout_date":"2010-06-05 21:08:12"
  },
  "customFields": {
    "ordersource": "testnee123updatedagain"
  }
,

  "lineItems":[{
    
    "itemCode":"sku_234_2",
    "extendedFields":
    {
        "MetalRate": "10577",
        "GrossWeight": "10.50"
      }
  }]


}
```

# Response parameters

| Parameter            | Datatype | Description                                                 |
| :------------------- | :------- | :---------------------------------------------------------- |
| **extended\_fields** | obj      | Extended field details of the transaction that are updated. |
| **custom\_fields**   | obj      | Custom field details of the transaction that are updated.   |
| **id**               | long     | Unique ID of the transaction generated by the system.       |
| **number**           | string   | Bill or transaction number.                                 |
| **type**             | enum     | Current transaction type.                                   |
| **customer**         | obj      | Customer details associated with the transaction.           |

<Note title="Note">
Custom fields can only be added if they meet the following conditions:

* The field must exist in the **`custom_fields`** table for the particular organization.
* It must belong to the same **`org_id`** as the current use-case.
* The field’s scope must be set to **`LOYALTY_REGISTRATION`**.
</Note>

<Note title="Note">
Extended fields that you use must match with the extended fields defined in the respective organization.
</Note>