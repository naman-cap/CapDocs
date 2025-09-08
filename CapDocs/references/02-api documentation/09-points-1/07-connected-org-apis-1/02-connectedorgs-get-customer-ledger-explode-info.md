---
title: Get Points Ledger Explode Info in Connected Orgs
excerpt: ''
api:
  file: v1.json
  operationId: connectedorgs-get-customer-ledger-explode-info
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
The Customer Ledger Explode Info API retrieves additional points ledger info for a customer or user group in a connected organisation.

A customer points ledger is essentially a record that tracks the points earned, spent, and adjusted within an organization and its affiliates. These points are treated like currency and can be redeemed across various units or loyalty programs within the organization.

For more information, refer to the documentation on [Points Ledgers](https://docs.capillarytech.com/reference/points-ledger).

# API endpoint example

`(https://eucrm.cc.capillarytech.com/v2.1/pointsLedger/getLedgerExplodeInfo?identifierName=mobile&identifierValue=917406401004&source=INSTORE&eventIds=18608683`

# Prerequisites

*   Authentication: Basic or OAuth credentials
*   Access points group resource: Read access to customer points group resource

# Resource information

|                        |                                        |
| :--------------------- | :------------------------------------- |
| URI                    | v2.1/pointsLedger/getLedgerExplodeInfo |
| HTTP Method            | GET                                    |
| Pagination             | Yes                                    |
| Batch support          | No                                     |
| Rate limit information | NA                                     |

# Headers

| Header             | Description                                                                                                                                                                                                                                                                                                                                                                                                      |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **DATA-SCOPE-ORG** | List of Organization IDs                                                                                                                                                                                                                                                                                                                                                                                         |
| **DATA-SCOPE**     | Scopes define what data can be accessed using the API. You can use scopes to control access to data from a parent or child organization. Defining a scope ensures that the response contains only data from the respective organization. Supported headers: `SELF` and `OTHER`. Refer to connected orgs [data scopes](https://docs.capillarytech.com/reference/connected-orgs-data-scopes) for more information. |

# Query parameters

<Table align={["left","left","left"]}>
  <thead>
    <tr>
      <th>
        Parameter Name
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
        identifierName\*
      </td>

      <td>
        String
      </td>

      <td>
        Identifier of the customer. Supported values `mobile `, `id`, `email `and `externalid`
      </td>
    </tr>

    <tr>
      <td>
        identifierValue\*
      </td>

      <td>
        Integer
      </td>

      <td>
        Value for the identifier. For example, the mobile number or customer ID.
      </td>
    </tr>

    <tr>
      <td>
        source\*
      </td>

      <td>
        String
      </td>

      <td>
        Source in which the identifier is available. For example,`INSTORE`, `MARTJACK`, `WECHAT`, `FACEBOOK`, `WEB_ENGAGE`, `TMALL`, `TAOBAO`, `JD`, `ECOMMERCE`, `WEBSITE`, `LINE`, `ALL`
      </td>
    </tr>

    <tr>
      <td>
        eventIds\*
      </td>

      <td>
        String
      </td>

      <td>
        The list of eventIDs with comma separated values. These are eventLogIds, corresponding to the events in loyalty like `TransactionAdd`, `CustomerRegistration `etc.
      </td>
    </tr>

    <tr>
      <td>
        accountId
      </td>

      <td>
        String
      </td>

      <td>
        For a source with multiple accounts, pass the specific accountId in which the customer identifier is available.
      </td>
    </tr>

    <tr>
      <td>
        getBillDetails
      </td>

      <td>
        Boolean
      </td>

      <td>
        Setting this to true will return Bill details like the bill no, amount, discount, line items etc
      </td>
    </tr>

    <tr>
      <td>
        getPointsEarnedBreakup
      </td>

      <td>
        Boolean
      </td>

      <td>
        Setting this to true will return the points breakup details like points category Name, points allocation strategy Name, expiry strategy etc
      </td>
    </tr>

    <tr>
      <td>
        getCustomFields
      </td>

      <td>
        Boolean
      </td>

      <td>
        Setting this value will return the custom fields set up by the brand
      </td>
    </tr>

    <tr>
      <td>
        getExtendedFields
      </td>

      <td>
        Boolean
      </td>

      <td>
        Setting this field will return the extended fields set up by the brand
      </td>
    </tr>

    <tr>
      <td>
        getMaxConversionDetails
      </td>

      <td>
        Boolean
      </td>

      <td>
        Setting this field to true will return the max conversion details which is set for Add Transation, for all line items where delayed accrual is based on fixed or return date, max of all dates is calculated and show in the field name “maxConversionDate”
      </td>
    </tr>

    <tr>
      <td>
        getPaymentMode
      </td>

      <td>
        String
      </td>

      <td>
        Setting this field will show an array of payment modes used ex UPI, CASH etc
      </td>
    </tr>

    <tr>
      <td>
        type
      </td>

      <td>
        String
      </td>

      <td>
        Setting this filed returns entries for type of user, whether individual customer or a group. Only two values are allowed here - CUSTOMER, USERGROUP2
      </td>
    </tr>

    <tr>
      <td>
        isPrimaryUser
      </td>

      <td>
        Boolean
      </td>

      <td>
        Returns entry for the primary member of a group, in case of usergroups.
      </td>
    </tr>

    <tr>
      <td>
        includeAlternateCurrencies
      </td>

      <td>
        Boolean
      </td>

      <td>
        Pass includeAlternateCurrencies=true to retrieve all alternate currencies available with the customer.
      </td>
    </tr>

    <tr>
      <td>
        alternateCurrencyNames
      </td>

      <td>
        String
      </td>

      <td>
        Filter alternate currencies for the customer based on the name. You can also pass a list of comma-separated alternate currency names. Set the parameter includeAlternateCurrencies to false when you use this. If the value is true, includeAlternateCurrencies lists all the available currencies.
      </td>
    </tr>

    <tr>
      <td>
        eventName
      </td>

      <td>
        String
      </td>

      <td>
        Name of the event (GenericEvent, TransactionAdd, ReturnBill). An event refers to any activity performed by a customer, whether in an online store or a physical store.

        <br />

        **GenericEvent**: A [generic event](https://docs.capillarytech.com/docs/behavioral-loyalty#behavioral-attributes-as-tags-in-the-communication)    refers to a customizable behavioral event where specific attributes like Customer ID or Product SKU are used to track events.\\
        **TransactionAdd**:  A [transaction add](https://docs.capillarytech.com/reference/addreturn-transaction-bulk)    refers to the addition of a new transaction to the system.
      </td>
    </tr>

    <tr>
      <td>
        eventReferenceIds
      </td>

      <td>
        Integer
      </td>

      <td>
        A reference ID is a unique identifier that links to an event.\
        For TransactionAdd and ReturnBill, the reference ID is the billId of the transaction.
        For GenericEvent, the reference ID is the unique request ID for the event.

        <br />

        You can add up to **ten** reference IDs for the specified `eventName` separated by commas.

        Refer to the documentation on [getting transaction details](https://docs.capillarytech.com/reference/get_transaction_detailsv1)    and [getting event details](https://docs.capillarytech.com/reference/search-events)    for more information.
      </td>
    </tr>
  </tbody>
</Table>

# Response parameters

| Parameter        | Data Type | Description                                                 |
| ---------------- | --------- | ----------------------------------------------------------- |
| eventLogId       | Integer   | Unique identifier for the event log.                        |
| eventName        | String    | Name of the event that occurred.                            |
| eventDetails     | Object    | Contains details about the event, such as time and ID.      |
| eventTime        | String    | Timestamp of when the event occurred. YYYY-MM-DD HH:MM:SS.S |
| tillId           | Integer   | Unique ID of the till.                                      |
| eventReferenceId | String    | Reference ID associated with the event.                     |
| orgId            | Integer   | Unique ID of the associated organization.                   |

# Sample Response

```json SELF
{
    "events": [
        {
            "eventLogId": 13499091,
            "eventName": "TransactionAdd",
            "eventDetails": {
                "eventTime": "2024-08-30 11:17:57.0",
                "tillId": 50161182
            "eventReferenceId": "36363905",
            "uniqueId": "aBcdEfG1H2",
            "orgId": 50406
        }
    ],
    "warnings": []
}
```
```json OTHER
{
    "events": [
        {
            "eventLogId": 18608683,
            "eventName": "TransactionAdd",
            "eventDetails": {
                "eventTime": "2024-08-20 11:29:02.0",
                "tillId": 50681412
            },
            "eventReferenceId": "2151165932",
            "orgId": 4000218
        }
    ],
    "warnings": []
}
```
```json Ledger Explode information with events
{
    "events": [
        {
            "eventLogId": 27909380,
            "eventName": "CustomerRegistration",
             “eventReferenceIds“:{RefId1},
            "eventDetails": {
                "eventTime": "2024-01-18 17:18:00.0",
                "tillId": 50697469
            },
            "pointsEarned": {
                "regular": [],
                "promo": [],
                "promised": []
            }
        },

{
            "eventLogId": 27909380,
            "eventName": "CustomerRegistration",
             “eventReferenceIds“:{RefId2},
            "eventDetails": {
                "eventTime": "2024-01-18 17:18:00.0",
                "tillId": 50697469
            },
            "pointsEarned": {
                "regular": [],
                "promo": [],
                "promised": []
            }
        }
    ],
    "warnings": []
}
```

# API specific error codes

| Error  | Description                                                                                                    |
| ------ | -------------------------------------------------------------------------------------------------------------- |
| 8013   | Identifier name missing or incorrect.                                                                          |
| 8015   | Identifier value missing or incorrect.                                                                         |
| 8003   | Source is missing or incorrect.                                                                                |
| 310144 | Connected Orgs not set properly in Headers. Check whether the target organisation is a connected organisation. |
| 11023  | Valid identifiers not found : required either EventLogId or (EventName and BillId)                             |
| 11013  | IdentifierName, identifierValue, source can not be empty                                                       |
| 8013   | Lookup,Invalid identifier passed                                                                               |
| 9003   | Error fetching points ledger data : getExplodeLedgerInfo failed and fallback failed                            |
| 1632   | group id/externalId/primary userId 565345934 passed is not valid                                               |
| 9021   | Invalid identifiers found\[6275461750]                                                                         |
| 11017  | Event id format exception:For input string: "dfsdsdsds\\                                                       |
| 9005   | Invalid alternateCurrencyNames field value                                                                     |
| 11024  | Event detail not found for event log id                                                                        |
| 11014  | Event name not found :DelayedAccrual                                                                           |
| 9021   | Invalid identifiers found \[313132121, 21212]                                                                  |
| 9018   | alternate currencies not found with provided category filters, names: \[dsdsd]                                 |
| 11021  | EventId and Event References,both cannot be passed                                                             |
| 11019  | Source value capturing status is disabled. Please enable it from org settings page                             |