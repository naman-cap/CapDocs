---
title: Get Ledger Information for Event Log IDs
excerpt: ''
api:
  file: v1.json
  operationId: get-ledger-information-for-event-log-ids
deprecated: false
hidden: true
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
This API retrieves ledger entries for a customer based on the query parameters. It returns entries related to either points or alternate currencies.

# Prerequisites

-   Access to Neo
-   Basic or OAuth authentication details
-   Access group resource - NA
-   Header` x-cap-neo-dag-scope` set to a valid scope value (e.g. global)

# Resource information

|                       |                              |
| :-------------------- | :--------------------------- |
| URI                   | x/neo/customer/ledgerDetails |
| HTTP method           | GET                          |
| Pagination supported? | Yes                          |
| Rate limit            | Based on Neo                 |
| Batch support         | NA                           |

# API endpoint example

`<https://nightly.api.capillarytech.com/x/neo/customer/ledgerDetails?ledgerEntryTypes=DEBIT%2CCREDIT&userId=387457911&page=1&count=100&endDate=2025-06-22&startDate=2024-01-01&alternateCurrencyNames=Flux%2CDynamicPoints>`

# Request Query Parameters

<HTMLBlock>{`
<table style="width: 100%; border-collapse: collapse;">
<thead>
<tr>
  <th style="border: 1px solid #ddd; padding: 8px;"><strong>Parameter</strong>(Parameters marked with * are mandatory)</th>
  <th style="border: 1px solid #ddd; padding: 8px;"><strong>Data Type</strong></th>
  <th style="border: 1px solid #ddd; padding: 8px;"><strong>Description</strong></th>
</tr>
</thead>
<tbody>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>ledgerEntryTypes*</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>String</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Type of entry recorded in a customer&#39;s points ledger.<br><strong>Allowed values</strong>: CREDIT, DEBIT</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>userId*</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Long</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Unique customer ID of the customer</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>endDate*</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Date</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Last date to which you want to retrieve the ledger information<br><strong>Format</strong>: YYYY-MM-DD.<br><strong>Example</strong>: 2025-06-30</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>startDate</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Date</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Start date to which you want to retrieve the ledger information<br><strong>Format</strong>: YYYY-MM-DD.<br><strong>Example</strong>: 2025-06-01</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>alternateCurrencyNames</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>String</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Name of the alternate currency for which ledger information is retrieved.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>page</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Integer</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Retrieve details of a specific page. Page count starts from 1.<br><strong>Example</strong>: page=2 retrieves data on page 2.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>count</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Integer</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Number of results to display per page. The default value is 10. The maximum supported value is 100.</p>
</td>
</tr>
</tbody>
</table>
`}</HTMLBlock>

# Sample Request

```json Sample request with Points
curl --location 'https://nightly.api.capillarytech.com/x/neo/customer/ledgerDetails?ledgerEntryTypes=DEBIT%2CCREDIT&userId=387970841&page=1&count=100&endDate=2025-06-22&startDate=2024-01-01' \
--header 'Content-Type: application/json' \
--header 'x-cap-neo-dag-scope: global' \
--header 'Authorization: Basic bmlydmFuYV8zOjIwMmNiOTYyYWM1OTA3NWI5NjRiMDcxNTJkMjM0Yjcw' \
--header 'Cookie: _cfuvid=XCUZjnfO.r26ljnM6CQl25NR0KwdNKxnsN7r5uqAbUQ-1749674436452-0.0.1.1-604800000; _cfuvid=QgCAl3K7.MLy0Gsio3EzCHHkqe9tqEehvEnh8ya20R8-1749740927556-0.0.1.1-604800000'
```
```json Sample request with alternate currency
curl --location 'https://nightly.api.capillarytech.com/x/neo/customer/ledgerDetails?ledgerEntryTypes=DEBIT%2CCREDIT&userId=387457911&page=1&count=100&endDate=2025-06-22&startDate=2024-01-01&alternateCurrencyNames=Flux%2CDynamicPoints' \
--header 'Content-Type: application/json' \
--header 'x-cap-neo-dag-scope: global' \
--header 'Authorization: Basic bmlydmFuYV8zOjIwMmNiOTYyYWM1OTA3NWI5NjRiMDcxNTJkMjM0Yjcw' \
--header 'Cookie: _cfuvid=.XBd7IU7Q8DfRYUNH11rOMNm75TRHX2jj9YObFxM.mI-1749632407583-0.0.1.1-604800000; _cfuvid=7GKv8emE.ASalN_aG_WyEh1ZInQBNf9QzBw1RPTpZIE-1749674538291-0.0.1.1-604800000; _cfuvid=VMAhsTWt7zrczsoftrDHV2k3j.HZJODLpEVtO0QmDA4-1749742981701-0.0.1.1-604800000'
```

# Response Parameters

| Parameter               | Data Type | Description                                                                |
| ----------------------- | --------- | -------------------------------------------------------------------------- |
| pageDetails             | Object    | Contains pagination details for the response.                              |
| - page                  | String    | Current page number in the response.                                       |
| - count                 | Integer   | Total number of ledger entries in the current page.                        |
| pointsLedgerResponse    | Array     | List of ledger entry objects.                                              |
| - ledgerEntryType       | String    | Type of ledger transaction. Example: CREDIT or DEBIT.                      |
| - createdOn             | String    | Timestamp when the ledger entry was created, in ISO 8601 format.           |
| - points                | Integer   | Number of points credited or debited.                                      |
| - categoryType          | String    | Category of the ledger entry. Example: ALTERNATE_CURRENCIES.               |
| - requestId             | String    | Unique identifier for the request that created the ledger entry.           |
| - eventName             | String    | Name of the event associated with the ledger entry.                        |
| - eventLogId            | Integer   | Unique identifier of the event log.                                        |
| - tillId                | Integer   | ID of the till (point of sale) where the transaction occurred.             |
| - alternateCurrencyName | String    | Name of the alternate currency involved in the transaction, if applicable. |

```json Sample response with points
{
    "pageDetails": {
        "page": "1",
        "count": 13
    },
    "pointsLedgerResponse": [
        {
            "ledgerEntryType": "DEBIT",
            "createdOn": "2025-06-04T19:49:04.000Z",
            "points": 5,
            "categoryType": "REGULAR_POINTS",
            "requestId": "29fe95130688e59a4d9d58b446e9afc1",
            "eventName": "PointsRedemption",
            "eventLogId": 38797923,
            "tillId": 50692627,
            "additionalEventDetails": {
                "notes": "Sample notes",
                "billNumber": "wefsadefdfdasfds"
            }
        },
        {
            "ledgerEntryType": "CREDIT",
            "createdOn": "2025-06-04T08:33:15.000Z",
            "points": 21,
            "categoryType": "REGULAR_POINTS",
            "requestId": "677ea947e07ae4292328c4fa06cf9cc7",
            "eventName": "TransactionAdd",
            "eventLogId": 38769078,
            "tillId": 50692627,
            "additionalEventDetails": {
                "ledgerentryname": "CREDIT"
            }
        },
        {
            "ledgerEntryType": "CREDIT",
            "createdOn": "2025-06-04T08:28:42.000Z",
            "points": 21,
            "categoryType": "REGULAR_POINTS",
            "requestId": "5d9433316b7452765fbbcc1ecf547266",
            "eventName": "TransactionAdd",
            "eventLogId": 38769042,
            "tillId": 50692627
        },
        {
            "ledgerEntryType": "CREDIT",
            "createdOn": "2025-06-04T08:17:04.000Z",
            "points": 21,
            "categoryType": "REGULAR_POINTS",
            "requestId": "86502c1366a7cc384b86ef3662241ed9",
            "eventName": "TransactionAdd",
            "eventLogId": 38769019,
            "tillId": 50692627
        },
        {
            "ledgerEntryType": "CREDIT",
            "createdOn": "2025-06-04T08:14:11.000Z",
            "points": 21,
            "categoryType": "REGULAR_POINTS",
            "requestId": "d8f7da7b79a28d97765ba69c94a6038b",
            "eventName": "TransactionAdd",
            "eventLogId": 38769015,
            "tillId": 50692627
        },
        {
            "ledgerEntryType": "DEBIT",
            "createdOn": "2025-06-03T11:36:22.000Z",
            "points": 26,
            "categoryType": "REGULAR_POINTS",
            "requestId": "a1a18d3c721cae6da73f8e7456401883",
            "eventName": "PointsRedemption",
            "eventLogId": 38731921,
            "tillId": 50691660,
            "additionalEventDetails": {
                "notes": "general",
                "billNumber": ""
            }
        },
        {
            "ledgerEntryType": "CREDIT",
            "createdOn": "2025-06-03T11:29:50.000Z",
            "points": 10,
            "categoryType": "PROMISED_POINTS",
            "requestId": "4eeabf6d-6f70-44dd-8d96-f0cacff686a4",
            "eventName": "GenericEvent",
            "eventLogId": 38731906,
            "tillId": 50692627,
            "additionalEventDetails": {
                "displayName": "BrowsingDuration"
            }
        },
        {
            "ledgerEntryType": "CREDIT",
            "createdOn": "2025-06-03T11:29:31.000Z",
            "points": 100,
            "categoryType": "REGULAR_POINTS",
            "requestId": "89105351-b518-4bfe-991e-e4f093b85b28",
            "eventName": "GenericEvent",
            "eventLogId": 38731905,
            "tillId": 50692627,
            "additionalEventDetails": {
                "displayName": "Ledger"
            }
        },
        {
            "ledgerEntryType": "CREDIT",
            "createdOn": "2025-06-03T11:28:31.000Z",
            "points": 100,
            "categoryType": "REGULAR_POINTS",
            "requestId": "81970952-98f7-46ab-9625-fed0fb23b777",
            "eventName": "TargetCompleted",
            "eventLogId": 38731904,
            "tillId": 50692627,
            "additionalEventDetails": {
                "sourceType": "USERTARGET",
                "targetGroupDescription": "Test_Behavioural_Event_Target",
                "targetGroupName": "Test_Behavioural_Event_Target"
            }
        },
        {
            "ledgerEntryType": "DEBIT",
            "createdOn": "2025-06-03T11:27:40.000Z",
            "points": 10,
            "categoryType": "REGULAR_POINTS",
            "requestId": "5d41bb3035fd768b18a776d8ea80b3c7",
            "eventName": "ManualPointsAdjustment",
            "eventLogId": 38731901,
            "tillId": 50692627,
            "additionalEventDetails": {
                "reason": "testing the ledger"
            }
        },
        {
            "ledgerEntryType": "DEBIT",
            "createdOn": "2025-06-03T11:27:33.000Z",
            "points": 5,
            "categoryType": "REGULAR_POINTS",
            "requestId": "f7ac55d05e2a341dcc47946aa5e7a4f6",
            "eventName": "PointsRedemption",
            "eventLogId": 38731899,
            "tillId": 50692627,
            "additionalEventDetails": {
                "notes": "Sample notes",
                "billNumber": "fsadefdfdas"
            }
        },
        {
            "ledgerEntryType": "CREDIT",
            "createdOn": "2025-06-03T11:27:27.000Z",
            "points": 21,
            "categoryType": "REGULAR_POINTS",
            "requestId": "87bf6a547eda20213e2b9beafc565602",
            "eventName": "TransactionAdd",
            "eventLogId": 38731893,
            "tillId": 50692627
        },
        {
            "ledgerEntryType": "CREDIT",
            "createdOn": "2025-06-03T11:27:22.000Z",
            "points": 21,
            "categoryType": "REGULAR_POINTS",
            "requestId": "276b513e316c6eda1ae12357b5c1821c",
            "eventName": "TransactionAdd",
            "eventLogId": 38731892,
            "tillId": 50692627
        }
    ]
}
```
```Text Sample response with alternate currency
{
    "pageDetails": {
        "page": "1",
        "count": 100
    },
    "pointsLedgerResponse": [
        {
            "ledgerEntryType": "DEBIT",
            "createdOn": "2025-06-11T16:39:57.000Z",
            "points": 2000,
            "categoryType": "ALTERNATE_CURRENCIES",
            "requestId": "c9f077caea787c7e2c32b8f6207d11bf",
            "eventName": "ReturnBill",
            "eventLogId": 38971475,
            "tillId": 50776147,
            "alternateCurrencyName": "DynamicPoints"
        },
        {
            "ledgerEntryType": "CREDIT",
            "createdOn": "2025-06-11T16:35:08.000Z",
            "points": 9895,
            "categoryType": "ALTERNATE_CURRENCIES",
            "requestId": "b54bf25e59d5363338ecf01a12edf58a",
            "eventName": "TransactionAdd",
            "eventLogId": 38971455,
            "tillId": 50776147,
            "alternateCurrencyName": "DynamicPoints"
        },
        {
            "ledgerEntryType": "CREDIT",
            "createdOn": "2025-06-11T16:35:05.000Z",
            "points": 9729,
            "categoryType": "ALTERNATE_CURRENCIES",
            "requestId": "b54bf25e59d5363338ecf01a12edf58a",
            "eventName": "TransactionAdd",
            "eventLogId": 38971454,
            "tillId": 50776147,
            "alternateCurrencyName": "DynamicPoints"
        },
        {
            "ledgerEntryType": "CREDIT",
            "createdOn": "2025-06-11T16:35:01.000Z",
            "points": 2000,
            "categoryType": "ALTERNATE_CURRENCIES",
            "requestId": "b54bf25e59d5363338ecf01a12edf58a",
            "eventName": "TransactionAdd",
            "eventLogId": 38971453,
            "tillId": 50776147,
            "alternateCurrencyName": "DynamicPoints"
        },
        {
            "ledgerEntryType": "CREDIT",
            "createdOn": "2025-06-11T16:34:57.000Z",
            "points": 2000,
            "categoryType": "ALTERNATE_CURRENCIES",
            "requestId": "b54bf25e59d5363338ecf01a12edf58a",
            "eventName": "TransactionAdd",
            "eventLogId": 38971452,
            "tillId": 50776147,
            "alternateCurrencyName": "DynamicPoints"
        },
        {
            "ledgerEntryType": "CREDIT",
            "createdOn": "2025-06-11T16:34:53.000Z",
            "points": 3000,
            "categoryType": "ALTERNATE_CURRENCIES",
            "requestId": "b54bf25e59d5363338ecf01a12edf58a",
            "eventName": "TransactionAdd",
            "eventLogId": 38971451,
            "tillId": 50776147,
            "alternateCurrencyName": "DynamicPoints"
        },
        {
            "ledgerEntryType": "CREDIT",
            "createdOn": "2025-06-10T15:33:18.000Z",
            "points": 4575,
            "categoryType": "ALTERNATE_CURRENCIES",
            "requestId": "066f0342d3902d425b109de0c7185a97",
            "eventName": "TransactionAdd",
            "eventLogId": 38942360,
            "tillId": 50776147,
            "alternateCurrencyName": "DynamicPoints"
        },
        {
            "ledgerEntryType": "CREDIT",
            "createdOn": "2025-06-10T15:32:45.000Z",
            "points": 7824,
            "categoryType": "ALTERNATE_CURRENCIES",
            "requestId": "066f0342d3902d425b109de0c7185a97",
            "eventName": "TransactionAdd",
            "eventLogId": 38942345,
            "tillId": 50776147,
            "alternateCurrencyName": "DynamicPoints"
        },
        {
            "ledgerEntryType": "CREDIT",
            "createdOn": "2025-06-10T15:32:13.000Z",
            "points": 2000,
            "categoryType": "ALTERNATE_CURRENCIES",
            "requestId": "066f0342d3902d425b109de0c7185a97",
            "eventName": "TransactionAdd",
            "eventLogId": 38942330,
            "tillId": 50776147,
            "alternateCurrencyName": "DynamicPoints"
        },
        {
            "ledgerEntryType": "CREDIT",
            "createdOn": "2025-06-10T15:31:42.000Z",
            "points": 2000,
            "categoryType": "ALTERNATE_CURRENCIES",
            "requestId": "066f0342d3902d425b109de0c7185a97",
            "eventName": "TransactionAdd",
            "eventLogId": 38942317,
            "tillId": 50776147,
            "alternateCurrencyName": "DynamicPoints"
        },
        {
            "ledgerEntryType": "CREDIT",
            "createdOn": "2025-06-10T15:31:05.000Z",
            "points": 3000,
            "categoryType": "ALTERNATE_CURRENCIES",
            "requestId": "066f0342d3902d425b109de0c7185a97",
            "eventName": "TransactionAdd",
            "eventLogId": 38942304,
            "tillId": 50776147,
            "alternateCurrencyName": "DynamicPoints"
        },
        {
            "ledgerEntryType": "CREDIT",
            "createdOn": "2025-06-06T15:30:49.000Z",
            "points": 1286,
            "categoryType": "ALTERNATE_CURRENCIES",
            "requestId": "13ca1f69d48a32df28dd9a5c8319dd52",
            "eventName": "TransactionAdd",
            "eventLogId": 38839270,
            "tillId": 50776147,
            "alternateCurrencyName": "DynamicPoints"
        },
        {
            "ledgerEntryType": "CREDIT",
            "createdOn": "2025-06-06T15:30:46.000Z",
            "points": 3599,
            "categoryType": "ALTERNATE_CURRENCIES",
            "requestId": "13ca1f69d48a32df28dd9a5c8319dd52",
            "eventName": "TransactionAdd",
            "eventLogId": 38839269,
            "tillId": 50776147,
            "alternateCurrencyName": "DynamicPoints"
        },
        {
            "ledgerEntryType": "CREDIT",
            "createdOn": "2025-06-06T15:30:44.000Z",
            "points": 2000,
            "categoryType": "ALTERNATE_CURRENCIES",
            "requestId": "13ca1f69d48a32df28dd9a5c8319dd52",
            "eventName": "TransactionAdd",
            "eventLogId": 38839268,
            "tillId": 50776147,
            "alternateCurrencyName": "DynamicPoints"
        },
        {
            "ledgerEntryType": "CREDIT",
            "createdOn": "2025-06-06T15:30:41.000Z",
            "points": 2000,
            "categoryType": "ALTERNATE_CURRENCIES",
            "requestId": "13ca1f69d48a32df28dd9a5c8319dd52",
            "eventName": "TransactionAdd",
            "eventLogId": 38839267,
            "tillId": 50776147,
            "alternateCurrencyName": "DynamicPoints"
        },
        {
            "ledgerEntryType": "CREDIT",
            "createdOn": "2025-06-06T15:30:37.000Z",
            "points": 3000,
            "categoryType": "ALTERNATE_CURRENCIES",
            "requestId": "13ca1f69d48a32df28dd9a5c8319dd52",
            "eventName": "TransactionAdd",
            "eventLogId": 38802764,
            "tillId": 50776147,
            "alternateCurrencyName": "DynamicPoints"
        },
        {
            "ledgerEntryType": "DEBIT",
            "createdOn": "2025-05-22T16:16:35.000Z",
            "points": 2000,
            "categoryType": "ALTERNATE_CURRENCIES",
            "requestId": "ffe1e9c4500fed4ca3eeaff7b9b9f893",
            "eventName": "ReturnBill",
            "eventLogId": 38501936,
            "tillId": 50776147,
            "alternateCurrencyName": "DynamicPoints"
        },
        {
            "ledgerEntryType": "CREDIT",
            "createdOn": "2025-05-22T16:10:11.000Z",
            "points": 3739,
            "categoryType": "ALTERNATE_CURRENCIES",
            "requestId": "b0ac62a7ec3a5d3eaaf32fbafe08f2ea",
            "eventName": "TransactionAdd",
            "eventLogId": 38501804,
            "tillId": 50776147,
            "alternateCurrencyName": "DynamicPoints"
        },
        {
            "ledgerEntryType": "CREDIT",
            "createdOn": "2025-05-22T16:09:58.000Z",
            "points": 6350,
            "categoryType": "ALTERNATE_CURRENCIES",
            "requestId": "b0ac62a7ec3a5d3eaaf32fbafe08f2ea",
            "eventName": "TransactionAdd",
            "eventLogId": 38501796,
            "tillId": 50776147,
            "alternateCurrencyName": "DynamicPoints"
        },
        {
            "ledgerEntryType": "CREDIT",
            "createdOn": "2025-05-22T16:09:36.000Z",
            "points": 2000,
            "categoryType": "ALTERNATE_CURRENCIES",
            "requestId": "b0ac62a7ec3a5d3eaaf32fbafe08f2ea",
            "eventName": "TransactionAdd",
            "eventLogId": 38501787,
            "tillId": 50776147,
            "alternateCurrencyName": "DynamicPoints"
        },
        {
            "ledgerEntryType": "CREDIT",
            "createdOn": "2025-05-22T16:09:27.000Z",
            "points": 2000,
            "categoryType": "ALTERNATE_CURRENCIES",
            "requestId": "b0ac62a7ec3a5d3eaaf32fbafe08f2ea",
            "eventName": "TransactionAdd",
            "eventLogId": 38501784,
            "tillId": 50776147,
            "alternateCurrencyName": "DynamicPoints"
        },
        {
            "ledgerEntryType": "CREDIT",
            "createdOn": "2025-05-22T16:09:21.000Z",
            "points": 3000,
            "categoryType": "ALTERNATE_CURRENCIES",
            "requestId": "b0ac62a7ec3a5d3eaaf32fbafe08f2ea",
            "eventName": "TransactionAdd",
            "eventLogId": 38501779,
            "tillId": 50776147,
            "alternateCurrencyName": "DynamicPoints"
        },
        {
            "ledgerEntryType": "CREDIT",
            "createdOn": "2025-05-22T15:31:44.000Z",
            "points": 3677,
            "categoryType": "ALTERNATE_CURRENCIES",
            "requestId": "e4d57f27f309dc113f2cfe8b9c6d4bdc",
            "eventName": "TransactionAdd",
            "eventLogId": 38500392,
            "tillId": 50776147,
            "alternateCurrencyName": "DynamicPoints"
        },
        {
            "ledgerEntryType": "CREDIT",
            "createdOn": "2025-05-22T15:31:37.000Z",
            "points": 6967,
            "categoryType": "ALTERNATE_CURRENCIES",
            "requestId": "e4d57f27f309dc113f2cfe8b9c6d4bdc",
            "eventName": "TransactionAdd",
            "eventLogId": 38500391,
            "tillId": 50776147,
            "alternateCurrencyName": "DynamicPoints"
        },
        {
            "ledgerEntryType": "CREDIT",
            "createdOn": "2025-05-22T15:31:30.000Z",
            "points": 2000,
            "categoryType": "ALTERNATE_CURRENCIES",
            "requestId": "e4d57f27f309dc113f2cfe8b9c6d4bdc",
            "eventName": "TransactionAdd",
            "eventLogId": 38500388,
            "tillId": 50776147,
            "alternateCurrencyName": "DynamicPoints"
        },
        {
            "ledgerEntryType": "CREDIT",
            "createdOn": "2025-05-22T15:31:24.000Z",
            "points": 2000,
            "categoryType": "ALTERNATE_CURRENCIES",
            "requestId": "e4d57f27f309dc113f2cfe8b9c6d4bdc",
            "eventName": "TransactionAdd",
            "eventLogId": 38500387,
            "tillId": 50776147,
            "alternateCurrencyName": "DynamicPoints"
        },
        {
            "ledgerEntryType": "CREDIT",
            "createdOn": "2025-05-22T15:31:17.000Z",
            "points": 3000,
            "categoryType": "ALTERNATE_CURRENCIES",
            "requestId": "e4d57f27f309dc113f2cfe8b9c6d4bdc",
            "eventName": "TransactionAdd",
            "eventLogId": 38500385,
            "tillId": 50776147,
            "alternateCurrencyName": "DynamicPoints"
        },
        {
            "ledgerEntryType": "DEBIT",
            "createdOn": "2025-05-19T13:55:49.000Z",
            "points": 2000,
            "categoryType": "ALTERNATE_CURRENCIES",
            "requestId": "0906b22602aa3ca1649d1b2ded14fd1b",
            "eventName": "ReturnBill",
            "eventLogId": 38364959,
            "tillId": 50776147,
            "alternateCurrencyName": "DynamicPoints"
        },
        {
            "ledgerEntryType": "CREDIT",
            "createdOn": "2025-05-19T13:48:45.000Z",
            "points": 9181,
            "categoryType": "ALTERNATE_CURRENCIES",
            "requestId": "af78a35b3e8e14492a9e64e3ec2f7c03",
            "eventName": "TransactionAdd",
            "eventLogId": 38364638,
            "tillId": 50776147,
            "alternateCurrencyName": "DynamicPoints"
        },
        {
            "ledgerEntryType": "CREDIT",
            "createdOn": "2025-05-19T13:48:43.000Z",
            "points": 7868,
            "categoryType": "ALTERNATE_CURRENCIES",
            "requestId": "af78a35b3e8e14492a9e64e3ec2f7c03",
            "eventName": "TransactionAdd",
            "eventLogId": 38364632,
            "tillId": 50776147,
            "alternateCurrencyName": "DynamicPoints"
        },
        {
            "ledgerEntryType": "CREDIT",
            "createdOn": "2025-05-19T13:48:41.000Z",
            "points": 2000,
            "categoryType": "ALTERNATE_CURRENCIES",
            "requestId": "af78a35b3e8e14492a9e64e3ec2f7c03",
            "eventName": "TransactionAdd",
            "eventLogId": 38364626,
            "tillId": 50776147,
            "alternateCurrencyName": "DynamicPoints"
        },
        {
            "ledgerEntryType": "CREDIT",
            "createdOn": "2025-05-19T13:48:39.000Z",
            "points": 2000,
            "categoryType": "ALTERNATE_CURRENCIES",
            "requestId": "af78a35b3e8e14492a9e64e3ec2f7c03",
            "eventName": "TransactionAdd",
            "eventLogId": 38364622,
            "tillId": 50776147,
            "alternateCurrencyName": "DynamicPoints"
        },
        {
            "ledgerEntryType": "CREDIT",
            "createdOn": "2025-05-19T13:48:37.000Z",
            "points": 3000,
            "categoryType": "ALTERNATE_CURRENCIES",
            "requestId": "af78a35b3e8e14492a9e64e3ec2f7c03",
            "eventName": "TransactionAdd",
            "eventLogId": 38364620,
            "tillId": 50776147,
            "alternateCurrencyName": "DynamicPoints"
        },
        {
            "ledgerEntryType": "DEBIT",
            "createdOn": "2025-05-19T09:48:45.000Z",
            "points": 2000,
            "categoryType": "ALTERNATE_CURRENCIES",
            "requestId": "eba72762edddeca33c25d48da1911103",
            "eventName": "ReturnBill",
            "eventLogId": 38360470,
            "tillId": 50776147,
            "alternateCurrencyName": "DynamicPoints"
        },
        {
            "ledgerEntryType": "CREDIT",
            "createdOn": "2025-05-19T09:42:16.000Z",
            "points": 4375,
            "categoryType": "ALTERNATE_CURRENCIES",
            "requestId": "824e604499119b53cd1dae0a8ade9088",
            "eventName": "TransactionAdd",
            "eventLogId": 38360383,
            "tillId": 50776147,
            "alternateCurrencyName": "DynamicPoints"
        },
        {
            "ledgerEntryType": "CREDIT",
            "createdOn": "2025-05-19T09:42:15.000Z",
            "points": 2119,
            "categoryType": "ALTERNATE_CURRENCIES",
            "requestId": "824e604499119b53cd1dae0a8ade9088",
            "eventName": "TransactionAdd",
            "eventLogId": 38360382,
            "tillId": 50776147,
            "alternateCurrencyName": "DynamicPoints"
        },
        {
            "ledgerEntryType": "CREDIT",
            "createdOn": "2025-05-19T09:42:14.000Z",
            "points": 2000,
            "categoryType": "ALTERNATE_CURRENCIES",
            "requestId": "824e604499119b53cd1dae0a8ade9088",
            "eventName": "TransactionAdd",
            "eventLogId": 38360381,
            "tillId": 50776147,
            "alternateCurrencyName": "DynamicPoints"
        },
        {
            "ledgerEntryType": "CREDIT",
            "createdOn": "2025-05-19T09:42:12.000Z",
            "points": 2000,
            "categoryType": "ALTERNATE_CURRENCIES",
            "requestId": "824e604499119b53cd1dae0a8ade9088",
            "eventName": "TransactionAdd",
            "eventLogId": 38360380,
            "tillId": 50776147,
            "alternateCurrencyName": "DynamicPoints"
        },
        {
            "ledgerEntryType": "CREDIT",
            "createdOn": "2025-05-19T09:41:43.000Z",
            "points": 3000,
            "categoryType": "ALTERNATE_CURRENCIES",
            "requestId": "824e604499119b53cd1dae0a8ade9088",
            "eventName": "TransactionAdd",
            "eventLogId": 38360379,
            "tillId": 50776147,
            "alternateCurrencyName": "DynamicPoints"
        },
        {
            "ledgerEntryType": "DEBIT",
            "createdOn": "2025-05-16T06:45:07.000Z",
            "points": 2000,
            "categoryType": "ALTERNATE_CURRENCIES",
            "requestId": "852c41cecc1016e0594543ce044495b7",
            "eventName": "ReturnBill",
            "eventLogId": 38297107,
            "tillId": 50776147,
            "alternateCurrencyName": "DynamicPoints"
        },
        {
            "ledgerEntryType": "CREDIT",
            "createdOn": "2025-05-16T06:38:03.000Z",
            "points": 6675,
            "categoryType": "ALTERNATE_CURRENCIES",
            "requestId": "7e63d79ab2eaf97f6939faa360e6ed9e",
            "eventName": "TransactionAdd",
            "eventLogId": 38297083,
            "tillId": 50776147,
            "alternateCurrencyName": "DynamicPoints"
        },
        {
            "ledgerEntryType": "CREDIT",
            "createdOn": "2025-05-16T06:38:01.000Z",
            "points": 8463,
            "categoryType": "ALTERNATE_CURRENCIES",
            "requestId": "7e63d79ab2eaf97f6939faa360e6ed9e",
            "eventName": "TransactionAdd",
            "eventLogId": 38297082,
            "tillId": 50776147,
            "alternateCurrencyName": "DynamicPoints"
        },
        {
            "ledgerEntryType": "CREDIT",
            "createdOn": "2025-05-16T06:37:59.000Z",
            "points": 2000,
            "categoryType": "ALTERNATE_CURRENCIES",
            "requestId": "7e63d79ab2eaf97f6939faa360e6ed9e",
            "eventName": "TransactionAdd",
            "eventLogId": 38297081,
            "tillId": 50776147,
            "alternateCurrencyName": "DynamicPoints"
        },
        {
            "ledgerEntryType": "CREDIT",
            "createdOn": "2025-05-16T06:37:57.000Z",
            "points": 2000,
            "categoryType": "ALTERNATE_CURRENCIES",
            "requestId": "7e63d79ab2eaf97f6939faa360e6ed9e",
            "eventName": "TransactionAdd",
            "eventLogId": 38297080,
            "tillId": 50776147,
            "alternateCurrencyName": "DynamicPoints"
        },
        {
            "ledgerEntryType": "CREDIT",
            "createdOn": "2025-05-16T06:37:54.000Z",
            "points": 3000,
            "categoryType": "ALTERNATE_CURRENCIES",
            "requestId": "7e63d79ab2eaf97f6939faa360e6ed9e",
            "eventName": "TransactionAdd",
            "eventLogId": 38297079,
            "tillId": 50776147,
            "alternateCurrencyName": "DynamicPoints"
        },
        {
            "ledgerEntryType": "DEBIT",
            "createdOn": "2025-05-15T16:48:47.000Z",
            "points": 2000,
            "categoryType": "ALTERNATE_CURRENCIES",
            "requestId": "64f2e497044197258523e70cf5f406de",
            "eventName": "ReturnBill",
            "eventLogId": 38246885,
            "tillId": 50776147,
            "alternateCurrencyName": "DynamicPoints"
        },
        {
            "ledgerEntryType": "CREDIT",
            "createdOn": "2025-05-15T16:41:52.000Z",
            "points": 4443,
            "categoryType": "ALTERNATE_CURRENCIES",
            "requestId": "129013ca779008278ec29f73c29a4eb0",
            "eventName": "TransactionAdd",
            "eventLogId": 38246778,
            "tillId": 50776147,
            "alternateCurrencyName": "DynamicPoints"
        },
        {
            "ledgerEntryType": "CREDIT",
            "createdOn": "2025-05-15T16:41:48.000Z",
            "points": 5154,
            "categoryType": "ALTERNATE_CURRENCIES",
            "requestId": "129013ca779008278ec29f73c29a4eb0",
            "eventName": "TransactionAdd",
            "eventLogId": 38246777,
            "tillId": 50776147,
            "alternateCurrencyName": "DynamicPoints"
        },
        {
            "ledgerEntryType": "CREDIT",
            "createdOn": "2025-05-15T16:41:44.000Z",
            "points": 2000,
            "categoryType": "ALTERNATE_CURRENCIES",
            "requestId": "129013ca779008278ec29f73c29a4eb0",
            "eventName": "TransactionAdd",
            "eventLogId": 38246776,
            "tillId": 50776147,
            "alternateCurrencyName": "DynamicPoints"
        },
        {
            "ledgerEntryType": "CREDIT",
            "createdOn": "2025-05-15T16:41:39.000Z",
            "points": 2000,
            "categoryType": "ALTERNATE_CURRENCIES",
            "requestId": "129013ca779008278ec29f73c29a4eb0",
            "eventName": "TransactionAdd",
            "eventLogId": 38246773,
            "tillId": 50776147,
            "alternateCurrencyName": "DynamicPoints"
        },
        {
            "ledgerEntryType": "CREDIT",
            "createdOn": "2025-05-15T16:41:35.000Z",
            "points": 3000,
            "categoryType": "ALTERNATE_CURRENCIES",
            "requestId": "129013ca779008278ec29f73c29a4eb0",
            "eventName": "TransactionAdd",
            "eventLogId": 38246770,
            "tillId": 50776147,
            "alternateCurrencyName": "DynamicPoints"
        },
        {
            "ledgerEntryType": "DEBIT",
            "createdOn": "2025-05-13T08:42:58.000Z",
            "points": 2000,
            "categoryType": "ALTERNATE_CURRENCIES",
            "requestId": "03ab96f004b4f67f81f33ebbffc669f1",
            "eventName": "ReturnBill",
            "eventLogId": 38173497,
            "tillId": 50776147,
            "alternateCurrencyName": "DynamicPoints"
        },
        {
            "ledgerEntryType": "CREDIT",
            "createdOn": "2025-05-13T08:42:49.000Z",
            "points": 6810,
            "categoryType": "ALTERNATE_CURRENCIES",
            "requestId": "17d86c720fcacfe8637afac09187c5e6",
            "eventName": "TransactionAdd",
            "eventLogId": 38173496,
            "tillId": 50776147,
            "alternateCurrencyName": "DynamicPoints"
        },
        {
            "ledgerEntryType": "CREDIT",
            "createdOn": "2025-05-13T08:42:48.000Z",
            "points": 9797,
            "categoryType": "ALTERNATE_CURRENCIES",
            "requestId": "17d86c720fcacfe8637afac09187c5e6",
            "eventName": "TransactionAdd",
            "eventLogId": 38173495,
            "tillId": 50776147,
            "alternateCurrencyName": "DynamicPoints"
        },
        {
            "ledgerEntryType": "CREDIT",
            "createdOn": "2025-05-13T08:42:44.000Z",
            "points": 2000,
            "categoryType": "ALTERNATE_CURRENCIES",
            "requestId": "17d86c720fcacfe8637afac09187c5e6",
            "eventName": "TransactionAdd",
            "eventLogId": 38173494,
            "tillId": 50776147,
            "alternateCurrencyName": "DynamicPoints"
        },
        {
            "ledgerEntryType": "CREDIT",
            "createdOn": "2025-05-13T08:42:28.000Z",
            "points": 2000,
            "categoryType": "ALTERNATE_CURRENCIES",
            "requestId": "17d86c720fcacfe8637afac09187c5e6",
            "eventName": "TransactionAdd",
            "eventLogId": 38173493,
            "tillId": 50776147,
            "alternateCurrencyName": "DynamicPoints"
        },
        {
            "ledgerEntryType": "CREDIT",
            "createdOn": "2025-05-13T08:42:22.000Z",
            "points": 3000,
            "categoryType": "ALTERNATE_CURRENCIES",
            "requestId": "17d86c720fcacfe8637afac09187c5e6",
            "eventName": "TransactionAdd",
            "eventLogId": 38173492,
            "tillId": 50776147,
            "alternateCurrencyName": "DynamicPoints"
        },
        {
            "ledgerEntryType": "DEBIT",
            "createdOn": "2025-05-13T08:41:26.000Z",
            "points": 2000,
            "categoryType": "ALTERNATE_CURRENCIES",
            "requestId": "84f80666bb433fa01b2efe9e9a1de6ec",
            "eventName": "ReturnBill",
            "eventLogId": 38173480,
            "tillId": 50776147,
            "alternateCurrencyName": "DynamicPoints"
        },
        {
            "ledgerEntryType": "CREDIT",
            "createdOn": "2025-05-13T08:40:59.000Z",
            "points": 7611,
            "categoryType": "ALTERNATE_CURRENCIES",
            "requestId": "709b1297430c7dad66b073934ee58dcd",
            "eventName": "TransactionAdd",
            "eventLogId": 38173475,
            "tillId": 50776147,
            "alternateCurrencyName": "DynamicPoints"
        },
        {
            "ledgerEntryType": "CREDIT",
            "createdOn": "2025-05-13T08:40:45.000Z",
            "points": 9994,
            "categoryType": "ALTERNATE_CURRENCIES",
            "requestId": "709b1297430c7dad66b073934ee58dcd",
            "eventName": "TransactionAdd",
            "eventLogId": 38173474,
            "tillId": 50776147,
            "alternateCurrencyName": "DynamicPoints"
        },
        {
            "ledgerEntryType": "CREDIT",
            "createdOn": "2025-05-13T08:40:21.000Z",
            "points": 2000,
            "categoryType": "ALTERNATE_CURRENCIES",
            "requestId": "709b1297430c7dad66b073934ee58dcd",
            "eventName": "TransactionAdd",
            "eventLogId": 38173472,
            "tillId": 50776147,
            "alternateCurrencyName": "DynamicPoints"
        },
        {
            "ledgerEntryType": "CREDIT",
            "createdOn": "2025-05-13T08:40:06.000Z",
            "points": 2000,
            "categoryType": "ALTERNATE_CURRENCIES",
            "requestId": "709b1297430c7dad66b073934ee58dcd",
            "eventName": "TransactionAdd",
            "eventLogId": 38173471,
            "tillId": 50776147,
            "alternateCurrencyName": "DynamicPoints"
        },
        {
            "ledgerEntryType": "CREDIT",
            "createdOn": "2025-05-13T08:39:44.000Z",
            "points": 3000,
            "categoryType": "ALTERNATE_CURRENCIES",
            "requestId": "709b1297430c7dad66b073934ee58dcd",
            "eventName": "TransactionAdd",
            "eventLogId": 38173469,
            "tillId": 50776147,
            "alternateCurrencyName": "DynamicPoints"
        },
        {
            "ledgerEntryType": "DEBIT",
            "createdOn": "2025-05-13T08:39:01.000Z",
            "points": 2000,
            "categoryType": "ALTERNATE_CURRENCIES",
            "requestId": "7ffd92efab2c9c3ed6241bdb55b9764f",
            "eventName": "ReturnBill",
            "eventLogId": 38173462,
            "tillId": 50776147,
            "alternateCurrencyName": "DynamicPoints"
        },
        {
            "ledgerEntryType": "CREDIT",
            "createdOn": "2025-05-13T08:38:51.000Z",
            "points": 3951,
            "categoryType": "ALTERNATE_CURRENCIES",
            "requestId": "2da52a2fe50ed6cfd656d3cbd1787fd3",
            "eventName": "TransactionAdd",
            "eventLogId": 38173461,
            "tillId": 50776147,
            "alternateCurrencyName": "DynamicPoints"
        },
        {
            "ledgerEntryType": "CREDIT",
            "createdOn": "2025-05-13T08:38:46.000Z",
            "points": 7199,
            "categoryType": "ALTERNATE_CURRENCIES",
            "requestId": "2da52a2fe50ed6cfd656d3cbd1787fd3",
            "eventName": "TransactionAdd",
            "eventLogId": 38173458,
            "tillId": 50776147,
            "alternateCurrencyName": "DynamicPoints"
        },
        {
            "ledgerEntryType": "CREDIT",
            "createdOn": "2025-05-13T08:38:40.000Z",
            "points": 2000,
            "categoryType": "ALTERNATE_CURRENCIES",
            "requestId": "2da52a2fe50ed6cfd656d3cbd1787fd3",
            "eventName": "TransactionAdd",
            "eventLogId": 38173457,
            "tillId": 50776147,
            "alternateCurrencyName": "DynamicPoints"
        },
        {
            "ledgerEntryType": "CREDIT",
            "createdOn": "2025-05-13T08:38:14.000Z",
            "points": 2000,
            "categoryType": "ALTERNATE_CURRENCIES",
            "requestId": "2da52a2fe50ed6cfd656d3cbd1787fd3",
            "eventName": "TransactionAdd",
            "eventLogId": 38173455,
            "tillId": 50776147,
            "alternateCurrencyName": "DynamicPoints"
        },
        {
            "ledgerEntryType": "CREDIT",
            "createdOn": "2025-05-13T08:37:40.000Z",
            "points": 3000,
            "categoryType": "ALTERNATE_CURRENCIES",
            "requestId": "2da52a2fe50ed6cfd656d3cbd1787fd3",
            "eventName": "TransactionAdd",
            "eventLogId": 38103570,
            "tillId": 50776147,
            "alternateCurrencyName": "DynamicPoints"
        },
        {
            "ledgerEntryType": "DEBIT",
            "createdOn": "2025-05-08T09:59:46.000Z",
            "points": 2000,
            "categoryType": "ALTERNATE_CURRENCIES",
            "requestId": "c464f60e156a98e6ea312001e85a98cb",
            "eventName": "ReturnBill",
            "eventLogId": 38088823,
            "tillId": 50776147,
            "alternateCurrencyName": "DynamicPoints"
        },
        {
            "ledgerEntryType": "CREDIT",
            "createdOn": "2025-05-08T09:52:43.000Z",
            "points": 4605,
            "categoryType": "ALTERNATE_CURRENCIES",
            "requestId": "b92b947213061f91a386736c57a410aa",
            "eventName": "TransactionAdd",
            "eventLogId": 38088800,
            "tillId": 50776147,
            "alternateCurrencyName": "DynamicPoints"
        },
        {
            "ledgerEntryType": "CREDIT",
            "createdOn": "2025-05-08T09:52:42.000Z",
            "points": 3855,
            "categoryType": "ALTERNATE_CURRENCIES",
            "requestId": "b92b947213061f91a386736c57a410aa",
            "eventName": "TransactionAdd",
            "eventLogId": 38088799,
            "tillId": 50776147,
            "alternateCurrencyName": "DynamicPoints"
        },
        {
            "ledgerEntryType": "CREDIT",
            "createdOn": "2025-05-08T09:52:40.000Z",
            "points": 2000,
            "categoryType": "ALTERNATE_CURRENCIES",
            "requestId": "b92b947213061f91a386736c57a410aa",
            "eventName": "TransactionAdd",
            "eventLogId": 38088798,
            "tillId": 50776147,
            "alternateCurrencyName": "DynamicPoints"
        },
        {
            "ledgerEntryType": "CREDIT",
            "createdOn": "2025-05-08T09:52:39.000Z",
            "points": 2000,
            "categoryType": "ALTERNATE_CURRENCIES",
            "requestId": "b92b947213061f91a386736c57a410aa",
            "eventName": "TransactionAdd",
            "eventLogId": 38088797,
            "tillId": 50776147,
            "alternateCurrencyName": "DynamicPoints"
        },
        {
            "ledgerEntryType": "CREDIT",
            "createdOn": "2025-05-08T09:52:36.000Z",
            "points": 3000,
            "categoryType": "ALTERNATE_CURRENCIES",
            "requestId": "b92b947213061f91a386736c57a410aa",
            "eventName": "TransactionAdd",
            "eventLogId": 38088796,
            "tillId": 50776147,
            "alternateCurrencyName": "DynamicPoints"
        },
        {
            "ledgerEntryType": "DEBIT",
            "createdOn": "2025-05-07T05:48:46.000Z",
            "points": 2000,
            "categoryType": "ALTERNATE_CURRENCIES",
            "requestId": "3be0ceae3fe245bdd3e6a4e41e1b12c0",
            "eventName": "ReturnBill",
            "eventLogId": 38053934,
            "tillId": 50776147,
            "alternateCurrencyName": "DynamicPoints"
        },
        {
            "ledgerEntryType": "CREDIT",
            "createdOn": "2025-05-07T05:41:41.000Z",
            "points": 9308,
            "categoryType": "ALTERNATE_CURRENCIES",
            "requestId": "d91631d94f4ca6d39baef93c166c7296",
            "eventName": "TransactionAdd",
            "eventLogId": 38053891,
            "tillId": 50776147,
            "alternateCurrencyName": "DynamicPoints"
        },
        {
            "ledgerEntryType": "CREDIT",
            "createdOn": "2025-05-07T05:41:40.000Z",
            "points": 6986,
            "categoryType": "ALTERNATE_CURRENCIES",
            "requestId": "d91631d94f4ca6d39baef93c166c7296",
            "eventName": "TransactionAdd",
            "eventLogId": 38053890,
            "tillId": 50776147,
            "alternateCurrencyName": "DynamicPoints"
        },
        {
            "ledgerEntryType": "CREDIT",
            "createdOn": "2025-05-07T05:41:38.000Z",
            "points": 2000,
            "categoryType": "ALTERNATE_CURRENCIES",
            "requestId": "d91631d94f4ca6d39baef93c166c7296",
            "eventName": "TransactionAdd",
            "eventLogId": 38053889,
            "tillId": 50776147,
            "alternateCurrencyName": "DynamicPoints"
        },
        {
            "ledgerEntryType": "CREDIT",
            "createdOn": "2025-05-07T05:41:36.000Z",
            "points": 2000,
            "categoryType": "ALTERNATE_CURRENCIES",
            "requestId": "d91631d94f4ca6d39baef93c166c7296",
            "eventName": "TransactionAdd",
            "eventLogId": 38053888,
            "tillId": 50776147,
            "alternateCurrencyName": "DynamicPoints"
        },
        {
            "ledgerEntryType": "CREDIT",
            "createdOn": "2025-05-07T05:41:35.000Z",
            "points": 3000,
            "categoryType": "ALTERNATE_CURRENCIES",
            "requestId": "d91631d94f4ca6d39baef93c166c7296",
            "eventName": "TransactionAdd",
            "eventLogId": 38053887,
            "tillId": 50776147,
            "alternateCurrencyName": "DynamicPoints"
        },
        {
            "ledgerEntryType": "CREDIT",
            "createdOn": "2025-05-06T15:30:51.000Z",
            "points": 4995,
            "categoryType": "ALTERNATE_CURRENCIES",
            "requestId": "b3438959c09f63df0b532bc25ca1a867",
            "eventName": "TransactionAdd",
            "eventLogId": 38026987,
            "tillId": 50776147,
            "alternateCurrencyName": "DynamicPoints"
        },
        {
            "ledgerEntryType": "CREDIT",
            "createdOn": "2025-05-06T15:30:48.000Z",
            "points": 6785,
            "categoryType": "ALTERNATE_CURRENCIES",
            "requestId": "b3438959c09f63df0b532bc25ca1a867",
            "eventName": "TransactionAdd",
            "eventLogId": 38026985,
            "tillId": 50776147,
            "alternateCurrencyName": "DynamicPoints"
        },
        {
            "ledgerEntryType": "CREDIT",
            "createdOn": "2025-05-06T15:30:47.000Z",
            "points": 2000,
            "categoryType": "ALTERNATE_CURRENCIES",
            "requestId": "b3438959c09f63df0b532bc25ca1a867",
            "eventName": "TransactionAdd",
            "eventLogId": 38026983,
            "tillId": 50776147,
            "alternateCurrencyName": "DynamicPoints"
        },
        {
            "ledgerEntryType": "CREDIT",
            "createdOn": "2025-05-06T15:30:43.000Z",
            "points": 2000,
            "categoryType": "ALTERNATE_CURRENCIES",
            "requestId": "b3438959c09f63df0b532bc25ca1a867",
            "eventName": "TransactionAdd",
            "eventLogId": 38026982,
            "tillId": 50776147,
            "alternateCurrencyName": "DynamicPoints"
        },
        {
            "ledgerEntryType": "CREDIT",
            "createdOn": "2025-05-06T15:30:40.000Z",
            "points": 3000,
            "categoryType": "ALTERNATE_CURRENCIES",
            "requestId": "b3438959c09f63df0b532bc25ca1a867",
            "eventName": "TransactionAdd",
            "eventLogId": 38026981,
            "tillId": 50776147,
            "alternateCurrencyName": "DynamicPoints"
        },
        {
            "ledgerEntryType": "DEBIT",
            "createdOn": "2025-05-05T12:14:41.000Z",
            "points": 2000,
            "categoryType": "ALTERNATE_CURRENCIES",
            "requestId": "3cfb40febbe67db21d6613a9900eb8ff",
            "eventName": "ReturnBill",
            "eventLogId": 38011782,
            "tillId": 50776147,
            "alternateCurrencyName": "DynamicPoints"
        },
        {
            "ledgerEntryType": "CREDIT",
            "createdOn": "2025-05-05T12:07:35.000Z",
            "points": 2276,
            "categoryType": "ALTERNATE_CURRENCIES",
            "requestId": "2d3c4790a788eec6d5b2a4c1551cb1db",
            "eventName": "TransactionAdd",
            "eventLogId": 38011723,
            "tillId": 50776147,
            "alternateCurrencyName": "DynamicPoints"
        },
        {
            "ledgerEntryType": "CREDIT",
            "createdOn": "2025-05-05T12:07:29.000Z",
            "points": 2000,
            "categoryType": "ALTERNATE_CURRENCIES",
            "requestId": "2d3c4790a788eec6d5b2a4c1551cb1db",
            "eventName": "TransactionAdd",
            "eventLogId": 38011721,
            "tillId": 50776147,
            "alternateCurrencyName": "DynamicPoints"
        },
        {
            "ledgerEntryType": "CREDIT",
            "createdOn": "2025-05-05T12:07:26.000Z",
            "points": 2000,
            "categoryType": "ALTERNATE_CURRENCIES",
            "requestId": "2d3c4790a788eec6d5b2a4c1551cb1db",
            "eventName": "TransactionAdd",
            "eventLogId": 38011720,
            "tillId": 50776147,
            "alternateCurrencyName": "DynamicPoints"
        },
        {
            "ledgerEntryType": "CREDIT",
            "createdOn": "2025-05-05T12:07:23.000Z",
            "points": 3000,
            "categoryType": "ALTERNATE_CURRENCIES",
            "requestId": "2d3c4790a788eec6d5b2a4c1551cb1db",
            "eventName": "TransactionAdd",
            "eventLogId": 38011719,
            "tillId": 50776147,
            "alternateCurrencyName": "DynamicPoints"
        },
        {
            "ledgerEntryType": "DEBIT",
            "createdOn": "2025-05-05T08:14:29.000Z",
            "points": 2000,
            "categoryType": "ALTERNATE_CURRENCIES",
            "requestId": "7bafa8aaf539371bb33923d8af593c90",
            "eventName": "ReturnBill",
            "eventLogId": 38010456,
            "tillId": 50776147,
            "alternateCurrencyName": "DynamicPoints"
        },
        {
            "ledgerEntryType": "CREDIT",
            "createdOn": "2025-05-05T08:07:24.000Z",
            "points": 6717,
            "categoryType": "ALTERNATE_CURRENCIES",
            "requestId": "9bfb119cb6798c5b94341dcfeb878832",
            "eventName": "TransactionAdd",
            "eventLogId": 38010398,
            "tillId": 50776147,
            "alternateCurrencyName": "DynamicPoints"
        },
        {
            "ledgerEntryType": "CREDIT",
            "createdOn": "2025-05-05T08:07:21.000Z",
            "points": 4614,
            "categoryType": "ALTERNATE_CURRENCIES",
            "requestId": "9bfb119cb6798c5b94341dcfeb878832",
            "eventName": "TransactionAdd",
            "eventLogId": 38010397,
            "tillId": 50776147,
            "alternateCurrencyName": "DynamicPoints"
        },
        {
            "ledgerEntryType": "CREDIT",
            "createdOn": "2025-05-05T08:07:19.000Z",
            "points": 2000,
            "categoryType": "ALTERNATE_CURRENCIES",
            "requestId": "9bfb119cb6798c5b94341dcfeb878832",
            "eventName": "TransactionAdd",
            "eventLogId": 38010396,
            "tillId": 50776147,
            "alternateCurrencyName": "DynamicPoints"
        },
        {
            "ledgerEntryType": "CREDIT",
            "createdOn": "2025-05-05T08:07:16.000Z",
            "points": 2000,
            "categoryType": "ALTERNATE_CURRENCIES",
            "requestId": "9bfb119cb6798c5b94341dcfeb878832",
            "eventName": "TransactionAdd",
            "eventLogId": 38010395,
            "tillId": 50776147,
            "alternateCurrencyName": "DynamicPoints"
        },
        {
            "ledgerEntryType": "CREDIT",
            "createdOn": "2025-05-05T08:07:13.000Z",
            "points": 3000,
            "categoryType": "ALTERNATE_CURRENCIES",
            "requestId": "9bfb119cb6798c5b94341dcfeb878832",
            "eventName": "TransactionAdd",
            "eventLogId": 38010394,
            "tillId": 50776147,
            "alternateCurrencyName": "DynamicPoints"
        },
        {
            "ledgerEntryType": "DEBIT",
            "createdOn": "2025-04-25T14:45:22.000Z",
            "points": 2000,
            "categoryType": "ALTERNATE_CURRENCIES",
            "requestId": "daeee4e871854767c63817c9c6590e5c",
            "eventName": "ReturnBill",
            "eventLogId": 37743946,
            "tillId": 50776147,
            "alternateCurrencyName": "DynamicPoints"
        },
        {
            "ledgerEntryType": "CREDIT",
            "createdOn": "2025-04-25T14:38:15.000Z",
            "points": 6065,
            "categoryType": "ALTERNATE_CURRENCIES",
            "requestId": "fd92e787424dc0bcd9b40dbf1231af32",
            "eventName": "TransactionAdd",
            "eventLogId": 37743793,
            "tillId": 50776147,
            "alternateCurrencyName": "DynamicPoints"
        },
        {
            "ledgerEntryType": "CREDIT",
            "createdOn": "2025-04-25T14:38:10.000Z",
            "points": 9094,
            "categoryType": "ALTERNATE_CURRENCIES",
            "requestId": "fd92e787424dc0bcd9b40dbf1231af32",
            "eventName": "TransactionAdd",
            "eventLogId": 37743792,
            "tillId": 50776147,
            "alternateCurrencyName": "DynamicPoints"
        }
    ]
}
```

# Error code

| Error Code | Description           |
| :--------- | :-------------------- |
| 400        | Bad Request           |
| 404        | Not Found             |
| 500        | Internal Server Error |