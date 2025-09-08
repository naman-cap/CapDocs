---
title: Get Points Ledger Information in Connected Orgs
excerpt: ''
api:
  file: v1.json
  operationId: connectedorgs-get-customer-ledger-info
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
This API fetches the ledger information of a customer registered in a connected organisation.

A customer points ledger is essentially a record that tracks the points earned, spent, and adjusted within an organization and its affiliates. These points are treated like currency and can be redeemed across various units or loyalty programs within the organization.

For more information, refer to the documentation on [Points Ledgers](https://docs.capillarytech.com/reference/points-ledger).

> 👍 Note
>
> For detailed information about our APIs and for hands-on testing, refer to the documentation in [API overview](https://docs.capillarytech.com/reference/apioverview) and step-by-step guide on [making your first API call](https://docs.capillarytech.com/reference/make-your-first-api-call).

# Prerequisites

*   Authentication: Basic or OAuth credentials
*   Access to the Points Access group. For more information, see [access group documentation](https://docs.capillarytech.com/docs/access-group).

# API Specification

|                        |                                                                                             |
| :--------------------- | :------------------------------------------------------------------------------------------ |
| HTTP Method            | GET                                                                                         |
| Pagination             | Yes                                                                                         |
| Batch support          | No                                                                                          |
| Rate limit information | Refer to [rate limit documentation](https://docs.capillarytech.com/reference/rate-limits) . |

# API endpoint example

`'https://eucrm.cc.capillarytech.com/v2.1/pointsLedger/getCustomerLedgerInfo?identifierName=mobile&identifierValue=917406401004&source=INSTORE'`

# Headers

| Header         | Description                                                                                                                                                                                                                                                                                                                                                                                                      |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DATA-SCOPE-ORG | List of Organization IDs                                                                                                                                                                                                                                                                                                                                                                                         |
| DATA-SCOPE     | Scopes define what data can be accessed using the API. You can use scopes to control access to data from a parent or child organization. Defining a scope ensures that the response contains only data from the respective organization. Supported headers: `SELF` and `OTHER`. Refer to connected orgs [data scopes](https://docs.capillarytech.com/reference/connected-orgs-data-scopes) for more information. |

# Query parameter (Customer)

You can use the below query parameters and retrieve points ledger entries of a customer.

| Parameter (Parameters marked with \* sign are mandatory) | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| -------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| identifierName\*                                         | Identifier of the customer. Supported values `mobile`, `id`, `email` and `externalid`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| identifierValue\*                                        | Value for the identifier. For example, the mobile number or customer ID.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| source\*                                                 | Source in which the identifier is available. For example, `instore`, `martjack`, `wechat`, `facebook`, `web_engage`, `tmall`, `taobao`, `jd`, `ecommerce`, `website`, `line`, `all`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| accountId\*                                              | For sources with multiple accounts, pass the specific accountId for the source.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| tillId                                                   | A customer till is the point of sale (POS) system used in a store. Use the [get active tills API](https://docs.capillarytech.com/reference/get-active-tills) to get the active tills for the organisation.                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| limit                                                    | The number of results to retrieve.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| offset                                                   | Page number to retrieve.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| programId                                                | Retrieve the ledger details of a specific program. A loyalty program encourages customers to continue shopping or using services by offering rewards, discounts, or special incentives for frequent purchases.                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| isFilterBasedOnDate                                      | Indicates whether the date filter is applied when fetching data. If the start date and end date are not included in the API request, `isFilterBasedOnDate` is false, and the API retrieves the user’s entire purchase history. Default value:`true`                                                                                                                                                                                                                                                                                                                                                                                                                              |
| includeLastOneYearData                                   | If `includeLastOneYearData` is true, the API response includes data from the last year instead of the last 90 days when only `startDate` or `endDate` is included in the API query parameters. Default value: `false`                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| startDate                                                | Get ledger information from on or after a specific date. Pass the start date in `YYYY-MM-DDThh:mm:ss` format. **Note:** - The maximum difference between `startDate` and `endDate` must not exceed 90 days. - If only `startDate` or `endDate` is included in the API query parameters, the ledger data for 90 days is retrieved based on the provided startDate or endDate. If `includeLastOneYearData` is true, the API response includes data from the last year instead of the last 90 days. - When `startDate` and `endDate` are not included in the API request parameters, `isFilterBasedOnDate` is false, and the API retrieves the user’s entire past purchase history. |
| endDate                                                  | Get ledger information until a specific date. Pass the end date in `YYYY-MM-DDThh:mm:ss` format. **Note:** - The maximum difference between `startDate` and `endDate` must not exceed 90 days. - If only `startDate` or `endDate` is included in the API query parameters, the ledger data for 90 days is retrieved based on the provided `startDate` or `endDate`. If `includeLastOneYearData` is true, the API response includes data from the last year instead of the last 90 days. - When `startDate` and `endDate` are not included in the API request parameters, `isFilterBasedOnDate` is false, and the API retrieves the user’s entire past purchase history.          |
| includeTillConceptEvents                                 | Set the value as `true` to fetch deduction entries triggered at tills mapped to the [concept event](https://docs.capillarytech.com/docs/view-event_details) of the Program ID, even if the deductions are from a different program. When set to `true`, set the `programId` value; otherwise, it will be considered an invalid input combination. The default value is `false`.                                                                                                                                                                                                                                                                                                  |
| ledgerEntryType                                          | Specify the type of ledger entries you want to fetch. Supported values: `CREDIT`, `DEBIT`, `OPENING_BALANCE`. By default, it fetches all the ledger entry types.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| pointCategoryType                                        | Specify the [point category type](https://docs.capillarytech.com/docs/dimension-tables#points-category) for which you want to fetch ledger details. Supported values: REGULAR, PROMISED, TRIGGER\_BASED. By default, it fetches all the points category details.                                                                                                                                                                                                                                                                                                                                                                                                                 |
| includeAlternateCurrencies                               | Set `includeAlternateCurrencies` to `true` to retrieve all alternate currencies available with the customer.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| alternateCurrencyNames                                   | Filter alternate currencies for the customer based on the name. You can also pass a list of comma-separated alternate currency names. Set the parameter `includeAlternateCurrencies` to `false` when using this. If the value is `true`, `includeAlternateCurrencies` lists all the available currencies.                                                                                                                                                                                                                                                                                                                                                                        |

# Query parameter (User group)

You can use the below query parameters and retrieve points ledger entries of a usergroup.

| Parameter (Parameters marked with \* sign are mandatory) | Description                                                                                                                                                                                                                                                                                         |
| -------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| identifierName\*                                         | The identifier of the group to search for the ledger information. The following identifiers are applicable: `groupId`, `externalId`, and `primaryUserId`                                                                                                                                            |
| identifierValue\*                                        | The value of the identifier.                                                                                                                                                                                                                                                                        |
| source\*                                                 | Source in which the identifier is available. For example, `INSTORE`, `MARTJACK`, `WECHAT`, `FACEBOOK`, `WEB_ENGAGE`, `TMALL`, `TAOBAO`, `JD`, `ECOMMERCE`, `WEBSITE`, `LINE`, `ALL`                                                                                                                 |
| limit                                                    | The maximum number of items to be retrieved.                                                                                                                                                                                                                                                        |
| includeAlternateCurrencies                               | Set includeAlternateCurrencies=true to retrieve all alternate currencies available with the group.                                                                                                                                                                                                  |
| alternateCurrencyNames                                   | Filter alternate currencies for the customer based on the name. You can also pass a list of comma-separated alternate currency names. Set the parameter includeAlternateCurrencies to false when you use this. If the value is true, includeAlternateCurrencies lists all the available currencies. |
| offset                                                   | The starting index for data retrieval.                                                                                                                                                                                                                                                              |
| sort                                                     | Sort the order of entries from date. The supported values are `ASC` and `DESC`.                                                                                                                                                                                                                     |
| role                                                     | These are the roles defined by the brands for members in a user group. For example, `PRIMARY`, `SECONDARY`, and so on.                                                                                                                                                                              |

<br />

```json SELF
{
    "customerDetails": {
        "firstName": "Porter",
        "lastName": "Robinson",
        "userId": 3923627848,
        "entityType": "CUSTOMER"
    },
    "ledgerDetails": {
        "pageNumber": 0,
        "pageSize": 10,
        "totalEntries": 2,
        "pageCount": 1,
        "ledgerClosingBalance": []
    },
    "ledgerEntries": [
        {
            "eventLogId": 13499091,
            "eventName": "TransactionAdd",
            "customerId": 347297848,
            "ledgerCreatedDate": "2024-08-30 11:17:57.0",
            "customerDetails": {
                "userId": 0
            },
            "entryDetails": [
                {
                    "ledgerEntryType": "CREDIT",
                    "points": "100.000",
                    "pointsCategory": "Main",
                    "programName": "ChildOrg1DefaultProgram",
                    "programId": 1148
                }
            ],
            "netPointsOnEvent": "100.000",
            "transactionDetails": {
                "transactionId": 36363905,
                "transactionNumber": "1725016677",
                "date": "2024-08-30 11:17:57.0",
                "amount": 5000.0,
                "grossBillAmount": 5000.0,
                "source": "instore"
            },
            "store": "Store1",
            "storeCode": "store1",
            "tillCode": "childorgtill1",
            "eventDetails": {},
            "sourceProgramId": 1148,
            "sourceProgramName": "ChildOrg1DefaultProgram",
            "orgId": 50406
        },
        {
            "eventLogId": 13499017,
            "eventName": "CustomerRegistration",
            "customerId": 347297848,
            "ledgerCreatedDate": "2024-08-30 11:09:02.0",
            "customerDetails": null,
            "entryDetails": [
                {
                    "ledgerEntryType": "OPENING_BALANCE",
                    "points": "0.000",
                    "pointsCategory": "DelayedAccrualPointCategory",
                    "programName": "ChildOrg1DefaultProgram",
                    "programId": 1148
                },
                {
                    "ledgerEntryType": "OPENING_BALANCE",
                    "points": "0.000",
                    "pointsCategory": "ExternalTriggerBasedPointCategory",
                    "programName": "ChildOrg1DefaultProgram",
                    "programId": 1148
                },
                {
                    "ledgerEntryType": "OPENING_BALANCE",
                    "points": "0.000",
                    "pointsCategory": "Main",
                    "programName": "ChildOrg1DefaultProgram",
                    "programId": 1148
                }
            ],
            "netPointsOnEvent": "0.000",
            "transactionDetails": {},
            "store": "Store1",
            "storeCode": "store1",
            "tillCode": "childorgtill1",
            "eventDetails": {},
            "sourceProgramId": 1148,
            "sourceProgramName": "ChildOrg1DefaultProgram",
            "orgId": 50406
        }
    ],
    "warnings": []
}
```
```json OTHER
{
    "customerDetails": {
        "firstName": "Porter",
        "lastName": "Robinson",
        "userId": 341257848,
        "entityType": "CUSTOMER"
    },
    "ledgerDetails": {
        "pageNumber": 0,
        "pageSize": 10,
        "totalEntries": 1,
        "pageCount": 1,
        "ledgerClosingBalance": []
    },
    "ledgerEntries": [
        {
            "eventLogId": 13499088,
            "eventName": "TransactionAdd",
            "customerId": 347297848,
            "ledgerCreatedDate": "2024-08-30 11:15:48.0",
            "customerDetails": {
                "userId": 0
            },
            "entryDetails": [
                {
                    "ledgerEntryType": "OPENING_BALANCE",
                    "points": "0.000",
                    "pointsCategory": "DelayedAccrualPointCategory",
                    "programName": "ParentOrgDefaultProgram",
                    "programId": 1147
                },
                {
                    "ledgerEntryType": "OPENING_BALANCE",
                    "points": "0.000",
                    "pointsCategory": "ExternalTriggerBasedPointCategory",
                    "programName": "ParentOrgDefaultProgram",
                    "programId": 1147
                },
                {
                    "ledgerEntryType": "OPENING_BALANCE",
                    "points": "0.000",
                    "pointsCategory": "Main",
                    "programName": "ParentOrgDefaultProgram",
                    "programId": 1147
                },
                {
                    "ledgerEntryType": "CREDIT",
                    "points": "50.000",
                    "pointsCategory": "Main",
                    "programName": "ParentOrgDefaultProgram",
                    "programId": 1147
                }
            ],
            "netPointsOnEvent": "50.000",
            "transactionDetails": {
                "transactionId": 36363904,
                "transactionNumber": "1725016548",
                "date": "2024-08-30 11:15:48.0",
                "amount": 6000.0,
                "grossBillAmount": 6000.0,
                "source": "instore"
            },
            "store": "Store1",
            "storeCode": "store1",
            "tillCode": "parentorgtill1",
            "eventDetails": {},
            "sourceProgramId": 1147,
            "sourceProgramName": "ParentOrgDefaultProgram",
            "orgId": 50405
        }
    ],
    "warnings": []
}
```

<br />

# Response parameter (Customer)

| Parameter            | Description                                                                                                                                                                                                                   |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| customerDetails      | Details of the current customer.                                                                                                                                                                                              |
| firstName            | First name of the customer.                                                                                                                                                                                                   |
| lastName             | Last name of the customer.                                                                                                                                                                                                    |
| userId               | Unique user ID of the customer.                                                                                                                                                                                               |
| externalId           | External ID of the customer. A customer external ID is a unique identifier that can be manually [generated](https://docs.capillarytech.com/reference/generate-card-external-id) and tagged to a customer during registration. |
| entityType           | Whether the points are issued to an individual (CUSTOMER), or group (FLEET).                                                                                                                                                  |
| pageNumber           | Current page number. Default value - 0 (first page).                                                                                                                                                                          |
| pageSize             | Number of entries shown on the current page.                                                                                                                                                                                  |
| totalEntries         | Total number of ledger entries available for the customer.                                                                                                                                                                    |
| pageCount            | Total number of pages according to the page size.                                                                                                                                                                             |
| eventLogId           | Unique log ID of the current event.                                                                                                                                                                                           |
| eventName            | Name of the event associated with the points. Example - TransactionAdd, PointsRedemption, DelayedAccrual, PointsExpiry, CustomerRegistration, ReturnBill.                                                                     |
| ledgerCreatedDate    | Date and time when the points ledger entry was created. Custom Date Format                                                                                                                                                    |
| entryDetails         | Details of the points ledger.                                                                                                                                                                                                 |
| ledgerClosingBalance | Details of closing ledger balance on a specific date.                                                                                                                                                                         |
| pointsCategory       | Category from which points are issued. Supported values: Main (redeemable account), DelayedAccrualPointCategory (promised points), ExternalTriggerBasedPointCategory (promised points).                                       |
| programName          | Name of the loyalty program associated with points.                                                                                                                                                                           |
| programId            | Unique ID of the loyalty program.                                                                                                                                                                                             |
| closingBalance       | Available closing balance on that particular end date.                                                                                                                                                                        |
| netPointsOnEvent     | Net points in the current event (by adding credits and subtracting debits).                                                                                                                                                   |
| transactionDetails   | Transaction details of the current points. Applicable for transaction related events.                                                                                                                                         |
| transactionId        | Transaction ID associated with the points.                                                                                                                                                                                    |
| transactionNumber    | Transaction number associated with the points.                                                                                                                                                                                |
| date                 | Date of the transaction.                                                                                                                                                                                                      |
| amount               | Net transaction amount.                                                                                                                                                                                                       |
| store                | Name of the store associated with the points.                                                                                                                                                                                 |
| storeCode            | Unique code of the store associated with points.                                                                                                                                                                              |
| tillCode             | Unique TILL code associated with points.                                                                                                                                                                                      |
| sourceProgramId      | The identifier of the source program associated with the entry.                                                                                                                                                               |
| sourceProgramName    | The name of the source program associated with the entry.                                                                                                                                                                     |
| orgID                | Unique ID of the organization.                                                                                                                                                                                                |

# Response parameter (User group)

| Parameter             | Description                                                                                                                                                                                           |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ledgerDetails         | Contains details about the pagination of the ledger entries.                                                                                                                                          |
| pageNumber            | The current page number in the pagination.                                                                                                                                                            |
| pageSize              | The number of entries per page in the pagination.                                                                                                                                                     |
| totalEntries          | The total number of entries in the ledger.                                                                                                                                                            |
| pageCount             | The total number of pages in the pagination.                                                                                                                                                          |
| ledgerEntries         | An array containing the ledger entries.                                                                                                                                                               |
| eventLogId            | A unique identifier for the [event](https://docs.capillarytech.com/docs/view-event_details).                                                                                                          |
| eventName             | The name of the event.                                                                                                                                                                                |
| customerId            | The identifier of the customer associated with the event.                                                                                                                                             |
| ledgerCreatedDate     | The date and time when the ledger entry was created. Custom Date Format                                                                                                                               |
| customerDetails       | Details of the customer.                                                                                                                                                                              |
| entryDetails          | An array containing the details about the ledger entry.                                                                                                                                               |
| ledgerEntryType       | The type of the ledger entry.                                                                                                                                                                         |
| points                | The number of points associated with the entry.                                                                                                                                                       |
| pointsCategory        | The category of the points.                                                                                                                                                                           |
| programName           | The name of the program associated with the entry.                                                                                                                                                    |
| programId             | The identifier of the program is associated with the entry.                                                                                                                                           |
| alternateCurrencyName | Alternate currency name. This is visible when you query for the [alternate currency](https://www.google.com/search?q=https://docs.capillarytech.com/docs/alternate-currencies) ledger for a customer. |
| netPointsOnEvent      | The net points associated with the event.                                                                                                                                                             |
| transactionDetails    | Details about the transaction.                                                                                                                                                                        |
| store                 | The store associated with the event.                                                                                                                                                                  |
| storeCode             | The code of the store associated with the event.                                                                                                                                                      |
| tillCode              | The code of the till associated with the event.                                                                                                                                                       |
| eventDetails          | Details about the event.                                                                                                                                                                              |
| reason                | The reason for the event.                                                                                                                                                                             |
| orgID                 | Unique ID of the organization.                                                                                                                                                                        |
| sourceProgramId       | The identifier of the source program associated with the entry.                                                                                                                                       |
| sourceProgramName     | The name of the source program associated with the entry.                                                                                                                                             |
| warnings              | An array containing any warning messages.                                                                                                                                                             |

# API specific error codes

| Error      | Description                                                                                                    |
| ---------- | -------------------------------------------------------------------------------------------------------------- |
| **8013**   | Identifier name missing or incorrect.                                                                          |
| **8015**   | Identifier value missing or incorrect.                                                                         |
| **8003**   | Source is missing or incorrect.                                                                                |
| **310144** | Connected Orgs not set properly in Headers. Check whether the target organization is a connected organization. |