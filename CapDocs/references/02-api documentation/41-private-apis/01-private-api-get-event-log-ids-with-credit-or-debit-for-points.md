---
title: 'Get Event Log IDs with Credit or Debit for Points '
deprecated: false
hidden: false
metadata:
  robots: index
---
The API retrieves event log IDs that have `CREDIT` or `DEBIT` entries for points from the ledger entries.

> 🚧 Note
>
> This is a private API and is accessible only through [Neo ](https://docs.capillarytech.com/docs/neo-quick-start)dataflows.

# Prerequisites

*   [Access to Neo](https://docs.capillarytech.com/docs/access-management-neo)
*   Basic or OAuth authentication details
*   Access group resource - NA

# Resource information

|                                |                                  |
| :----------------------------- | :------------------------------- |
| URI to be used in Neo dataflow | /das/getLedgerEntriesWithEventId |
| HTTP method                    | GET                              |
| Pagination supported?          | Yes                              |
| Rate limit                     | Based on Neo                     |
| Batch support                  | NA                               |

# Request query parameters

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
        ledger\_entry\_types\*
      </td>

      <td>
        String
      </td>

      <td>
        Type of entry in the customer’s points ledger.
        **Allowed values**: CREDIT, DEBIT
      </td>
    </tr>

    <tr>
      <td>
        entity\_id\*
      </td>

      <td>
        Long
      </td>

      <td>
        Unique ID of the customer.
      </td>
    </tr>

    <tr>
      <td>
        end\_date\*
      </td>

      <td>
        Date
      </td>

      <td>
        The last date for which you want ledger data.
        **Format**: YYYY-MM-DD **Example**: 2025-06-22
      </td>
    </tr>

    <tr>
      <td>
        start\_date\*
      </td>

      <td>
        Date
      </td>

      <td>
        The start date from which you want the ledger data.
        **Format**: YYYY-MM-DD  **Example**: 2024-01-01
      </td>
    </tr>

    <tr>
      <td>
        till\_ids\*
      </td>

      <td>
        Integer
      </td>

      <td>
        ID(s) of the till(s) used to filter the data.
      </td>
    </tr>

    <tr>
      <td>
        is\_filter\_not\_based\_on\_date\*
      </td>

      <td>
        Boolean
      </td>

      <td>
        Whether to ignore date filtering:

        * If 1: Date filter is skipped, but dummy start\_date and end\_date must still be provided (e.g., 2025-01-01).
        * If 0: Date filter is applied using the provided range (e.g., 2024-04-01 to 2025-03-31).
      </td>
    </tr>

    <tr>
      <td>
        is\_till\_not\_present\*
      </td>

      <td>
        Boolean
      </td>

      <td>
        Whether to ignore till ID filtering:

        * If 1: Till ID filter is skipped. Use till\_ids = -1.
        * If 0: Results are filtered based on given till IDs (e.g., 1234323432, 8759345333).
      </td>
    </tr>

    <tr>
      <td>
        page
      </td>

      <td>
        Integer
      </td>

      <td>
        The page number of the results.\
        **Example**: 2 means page 2.
      </td>
    </tr>

    <tr>
      <td>
        count
      </td>

      <td>
        Integer
      </td>

      <td>
        Number of results per page. Default: 10, Max: 100
      </td>
    </tr>
  </tbody>
</Table>

# Response parameters

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
        ledgerEntryType
      </td>

      <td>
        String
      </td>

      <td>
        Type of ledger entry.
        **Example**: `CREDIT` or `DEBIT`.
      </td>
    </tr>

    <tr>
      <td>
        cpsId
      </td>

      <td>
        Long
      </td>

      <td>
        Unique identifier for the customer points system entry.
      </td>
    </tr>

    <tr>
      <td>
        configMetadata
      </td>

      <td>
        String
      </td>

      <td>
        Additional metadata related to configuration.
      </td>
    </tr>

    <tr>
      <td>
        pointsLedgerId
      </td>

      <td>
        Long
      </td>

      <td>
        Unique identifier of the points ledger entry.
      </td>
    </tr>

    <tr>
      <td>
        createdOn
      </td>

      <td>
        Long
      </td>

      <td>
        Time when the ledger entry was created represented in epoch milliseconds
      </td>
    </tr>

    <tr>
      <td>
        pointsCategoryName
      </td>

      <td>
        String
      </td>

      <td>
        Name of the points category used.
      </td>
    </tr>

    <tr>
      <td>
        eventSubjectId
      </td>

      <td>
        Long
      </td>

      <td>
        ID of the event subject, could be customer ID or other relevant entity.
      </td>
    </tr>

    <tr>
      <td>
        processingTime
      </td>

      <td>
        Long
      </td>

      <td>
        Time when the event was processed represented in epoch milliseconds
      </td>
    </tr>

    <tr>
      <td>
        points
      </td>

      <td>
        Integer
      </td>

      <td>
        Number of points credited or debited.
      </td>
    </tr>

    <tr>
      <td>
        categoryType
      </td>

      <td>
        String
      </td>

      <td>
        Type of point category.
        **Example**: `REGULAR_POINTS`, `PROMISED_POINTS`.
      </td>
    </tr>

    <tr>
      <td>
        eventTypeId
      </td>

      <td>
        Integer
      </td>

      <td>
        Unique identifier of the event type.
      </td>
    </tr>

    <tr>
      <td>
        sourceProgramId
      </td>

      <td>
        Integer
      </td>

      <td>
        Program ID from which the points originated.
      </td>
    </tr>

    <tr>
      <td>
        entityMetadata
      </td>

      <td>
        String
      </td>

      <td>
        JSON string containing metadata such as point-in-time slab details.
      </td>
    </tr>

    <tr>
      <td>
        requestId
      </td>

      <td>
        String
      </td>

      <td>
        Unique request identifier for the event.
      </td>
    </tr>

    <tr>
      <td>
        customerId
      </td>

      <td>
        Long
      </td>

      <td>
        Unique ID of the customer.
      </td>
    </tr>

    <tr>
      <td>
        eventTime
      </td>

      <td>
        Long
      </td>

      <td>
        Time when the event occurred represented in epoch milliseconds
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
        Name of the event.
        **Example**: `TransactionAdd`, `PointsRedemption`.
      </td>
    </tr>

    <tr>
      <td>
        genericEventId
      </td>

      <td>
        String
      </td>

      <td>
        Unique identifier for generic events, if applicable.
      </td>
    </tr>

    <tr>
      <td>
        eventLogId
      </td>

      <td>
        Long
      </td>

      <td>
        Unique identifier of the event log entry.
      </td>
    </tr>

    <tr>
      <td>
        tillId
      </td>

      <td>
        Long
      </td>

      <td>
        ID of the till or transaction source location.
      </td>
    </tr>

    <tr>
      <td>
        uniqueId
      </td>

      <td>
        String
      </td>

      <td>
        A unique string identifier for the entry.
      </td>
    </tr>
  </tbody>
</Table>

# Sample response

```json Sample Response
   [
      {
        "ledgerEntryType": "CREDIT",
        "cpsId": 90658412,
        "configMetadata": null,
        "pointsLedgerId": 65097246,
        "createdOn": 1749024851000,
        "pointsCategoryName": "Main",
        "eventSubjectId": 2152306113,
        "processingTime": 1738481105000,
        "points": 21,
        "categoryType": "REGULAR_POINTS",
        "eventTypeId": 15,
        "sourceProgramId": 2809,
        "entityMetadata": "{\"pointInTimeSlabs\": {\"programId\": 2809, \"isDefaultProgram\": true, \"pointInTimeSlabName\": \"Gold\", \"pointInTimeSlabNumber\": 3}}",
        "requestId": "d8f7da7b79a28d97765ba69c94a6038b",
        "customerId": 387970841,
        "eventTime": 1738481105000,
        "eventName": "TransactionAdd",
        "genericEventId": null,
        "eventLogId": 38769015,
        "tillId": 50692627,
        "uniqueId": "CP3lQggexz"
      },
      {
        "ledgerEntryType": "DEBIT",
        "cpsId": 90658412,
        "configMetadata": null,
        "pointsLedgerId": 65088281,
        "createdOn": 1748950582000,
        "pointsCategoryName": "Main",
        "eventSubjectId": 387970841,
        "processingTime": 1748950581000,
        "points": 26,
        "categoryType": "REGULAR_POINTS",
        "eventTypeId": 3,
        "sourceProgramId": 2809,
        "entityMetadata": "{\"pointInTimeSlabs\": []}",
        "requestId": "a1a18d3c721cae6da73f8e7456401883",
        "customerId": 387970841,
        "eventTime": 1748950581000,
        "eventName": "PointsRedemption",
        "genericEventId": null,
        "eventLogId": 38731921,
        "tillId": 50691660,
        "uniqueId": "X17nAIlTJ3"
      },
      {
        "ledgerEntryType": "CREDIT",
        "cpsId": 90658413,
        "configMetadata": null,
        "pointsLedgerId": 65088247,
        "createdOn": 1748950190000,
        "pointsCategoryName": "DelayedAccrualPointCategory",
        "eventSubjectId": -1,
        "processingTime": 1748950189000,
        "points": 10,
        "categoryType": "PROMISED_POINTS",
        "eventTypeId": 23,
        "sourceProgramId": 2809,
        "entityMetadata": "{\"sourceOrgId\": 51512, \"sourceEventId\": \"4eeabf6d-6f70-44dd-8d96-f0cacff686a4\", \"eventSubTypeId\": \"e2cda500150b19d164bbfa0171506e51\", \"pointInTimeSlabs\": []}",
        "requestId": "4eeabf6d-6f70-44dd-8d96-f0cacff686a4",
        "customerId": 387970841,
        "eventTime": 1748950189000,
        "eventName": "GenericEvent",
        "genericEventId": "e2cda500150b19d164bbfa0171506e51",
        "eventLogId": 38731906,
        "tillId": 50692627,
        "uniqueId": "4eeabf6d-6f70-44dd-8d96-f0cacff686a4"
      },
      {
        "ledgerEntryType": "CREDIT",
        "cpsId": 90658412,
        "configMetadata": null,
        "pointsLedgerId": 65088246,
        "createdOn": 1748950171000,
        "pointsCategoryName": "Main",
        "eventSubjectId": -1,
        "processingTime": 1748950170000,
        "points": 100,
        "categoryType": "REGULAR_POINTS",
        "eventTypeId": 23,
        "sourceProgramId": 2809,
        "entityMetadata": "{\"sourceOrgId\": 51512, \"sourceEventId\": \"89105351-b518-4bfe-991e-e4f093b85b28\", \"eventSubTypeId\": \"e5de3a00fb7b4d1bdc5673ca65335bcf\", \"pointInTimeSlabs\": []}",
        "requestId": "89105351-b518-4bfe-991e-e4f093b85b28",
        "customerId": 387970841,
        "eventTime": 1748950170000,
        "eventName": "GenericEvent",
        "genericEventId": "e5de3a00fb7b4d1bdc5673ca65335bcf",
        "eventLogId": 38731905,
        "tillId": 50692627,
        "uniqueId": "89105351-b518-4bfe-991e-e4f093b85b28"
      },
      {
        "ledgerEntryType": "CREDIT",
        "cpsId": 90658412,
        "configMetadata": null,
        "pointsLedgerId": 65088245,
        "createdOn": 1748950111000,
        "pointsCategoryName": "Main",
        "eventSubjectId": 468000,
        "processingTime": 1748950111000,
        "points": 100,
        "categoryType": "REGULAR_POINTS",
        "eventTypeId": 25,
        "sourceProgramId": 2809,
        "entityMetadata": "{\"pointInTimeSlabs\": []}",
        "requestId": "81970952-98f7-46ab-9625-fed0fb23b777",
        "customerId": 387970841,
        "eventTime": 1748950110000,
        "eventName": "TargetCompleted",
        "genericEventId": null,
        "eventLogId": 38731904,
        "tillId": 50692627,
        "uniqueId": "1ff9d4953610d8aa0924b24676b34c8c86f6502c"
      }
    ]
```

# Error codes

| Error Code | Description           |
| :--------- | :-------------------- |
| 400        | Bad Request           |
| 404        | Not Found             |
| 500        | Internal Server Error |