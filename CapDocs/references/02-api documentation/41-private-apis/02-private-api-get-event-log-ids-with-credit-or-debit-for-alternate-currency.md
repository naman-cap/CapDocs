---
title: Get Event Log IDs with Credit or Debit for Alternate Currency
deprecated: false
hidden: false
metadata:
  robots: index
---
The API retrieves event log IDs that have `CREDIT` or `DEBIT` entries for alternate currencies from the ledger entries.

> 🚧 Note
>
> This is a private API and is accessible only through [Neo](https://docs.capillarytech.com/docs/neo-quick-start#/) dataflows.

# Prerequisites

*   [Access to Neo](https://docs.capillarytech.com/docs/access-management-neo#/)
*   Basic or OAuth authentication details
*   Access group resource - NA

# Resource information

|                                |                                    |
| :----------------------------- | :--------------------------------- |
| URI to be used in Neo dataflow | /das/getACLedgerEntriesWithEventId |
| HTTP method                    | GET                                |
| Pagination supported?          | Yes                                |
| Rate limit                     | Based on Neo                       |
| Batch support                  | NA                                 |

# Request query parameters

<Table align={["left","left","left"]}>
  <thead>
    <tr>
      <th>
        Parameter (Parameters marked with \* are mandatory)
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
        ledger\_entry\_types\*
      </td>

      <td>
        String
      </td>

      <td>
        Type of entry recorded in a customer's points ledger. **Allowed values**: `CREDIT`, `DEBIT`
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
        Unique customer ID of the customer
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
        Last date to which you want to retrieve the ledger information **Format**: YYYY-MM-DD. **Example**: 2025-06-22
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
        Start date from which you want to retrieve the ledger information
        **Format**: YYYY-MM-DD. **Example**: 2024-01-01
      </td>
    </tr>

    <tr>
      <td>
        alternate\_currency\_names\*
      </td>

      <td>
        String
      </td>

      <td>
        Name of the alternate currency for which ledger information is retrieved.
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
        Till IDs used to filter the results.
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
        Indicates whether the API should apply a date filter.

        * If set to 1, the API does not apply any date filter. However, you must still pass dummy values for `start_date` and `end_date`.
          **Example**: `2025-01-01`.
        * If set to 0, the API filters the results based on the provided date range. In this case, pass the actual `start_date` and `end_date` values.
          **Example**: 2024-04-01 to 2025-03-31.
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
        Indicates whether the API should ignore filtering by till ID.

        * If set to 1, the API does not apply a till ID filter. In this case, pass `till_ids = -1`.
        * If set to 0, the API filters results based on the specified till IDs. Provide one or more comma-separated values in the `till_ids` parameter.\
          **Example**: 1234323432,8759345333.
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
        Retrieve details of a specific page. Page count starts from 1. **Example**: `page=2` retrieves data on page 2.
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
        Number of results to display per page. The default value is 10. The maximum supported value is 100.
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
        Time when the ledger entry was created, in epoch milliseconds
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
        ID of the event subject, usually a customer or account.
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
        Time when the event was processed, in epoch milliseconds
      </td>
    </tr>

    <tr>
      <td>
        alternateCurrencyName
      </td>

      <td>
        String
      </td>

      <td>
        Name of the alternate currency.
        **Example**: `Flux`.
      </td>
    </tr>

    <tr>
      <td>
        points
      </td>

      <td>
        Float
      </td>

      <td>
        Number of points credited or debited
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
        **Example**: `ALTERNATE_CURRENCIES`.
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
        JSON string with metadata like slab info, programId, and slab name.
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
        Unique identifier for the request.
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
        Time when the event occurred, in epoch milliseconds
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
        **Example**: `TransactionAdd`.
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
        Identifier for generic event, if any.
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
        ID of the source till.
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
        Unique string identifier for the transaction or record.
      </td>
    </tr>
  </tbody>
</Table>

# Sample response

```json Sample response
   [
      {
        "ledgerEntryType": "CREDIT",
        "cpsId": 85912155,
        "configMetadata": null,
        "pointsLedgerId": 64554870,
        "createdOn": 1744382856000,
        "pointsCategoryName": "Flux_REGULAR",
        "eventSubjectId": 2152201202,
        "processingTime": 1743107884000,
        "alternateCurrencyName": "Flux",
        "points": 1370.25,
        "categoryType": "ALTERNATE_CURRENCIES",
        "eventTypeId": 15,
        "sourceProgramId": 2809,
        "entityMetadata": "{\"pointInTimeSlabs\": {\"programId\": 2809, \"isDefaultProgram\": true, \"pointInTimeSlabName\": \"Diamond\", \"pointInTimeSlabNumber\": 5}}",
        "requestId": "e7a4344912bde36e4bd9994eb9d96f76",
        "customerId": 387457911,
        "eventTime": 1743107884000,
        "eventName": "TransactionAdd",
        "genericEventId": null,
        "eventLogId": 37188433,
        "tillId": 50691660,
        "uniqueId": "7eCwyq507M"
      },
      {
        "ledgerEntryType": "CREDIT",
        "cpsId": 85912155,
        "configMetadata": null,
        "pointsLedgerId": 64554867,
        "createdOn": 1744382854000,
        "pointsCategoryName": "Flux_REGULAR",
        "eventSubjectId": 2152201200,
        "processingTime": 1741873476000,
        "alternateCurrencyName": "Flux",
        "points": 300,
        "categoryType": "ALTERNATE_CURRENCIES",
        "eventTypeId": 15,
        "sourceProgramId": 2809,
        "entityMetadata": "{\"pointInTimeSlabs\": {\"programId\": 2809, \"isDefaultProgram\": true, \"pointInTimeSlabName\": \"Diamond\", \"pointInTimeSlabNumber\": 5}}",
        "requestId": "e7a4344912bde36e4bd9994eb9d96f76",
        "customerId": 387457911,
        "eventTime": 1741873476000,
        "eventName": "TransactionAdd",
        "genericEventId": null,
        "eventLogId": 37188431,
        "tillId": 50691660,
        "uniqueId": "13QwzvQmiM"
      },
      {
        "ledgerEntryType": "CREDIT",
        "cpsId": 85912155,
        "configMetadata": null,
        "pointsLedgerId": 64554861,
        "createdOn": 1744382851000,
        "pointsCategoryName": "Flux_REGULAR",
        "eventSubjectId": 2152201116,
        "processingTime": 1743263207000,
        "alternateCurrencyName": "Flux",
        "points": 655.8,
        "categoryType": "ALTERNATE_CURRENCIES",
        "eventTypeId": 15,
        "sourceProgramId": 3414,
        "entityMetadata": "{\"pointInTimeSlabs\": {\"programId\": 3414, \"isDefaultProgram\": false, \"pointInTimeSlabName\": \"ELITE\", \"pointInTimeSlabNumber\": 2}, {\"programId\": 2809, \"isDefaultProgram\": true, \"pointInTimeSlabName\": \"Diamond\", \"pointInTimeSlabNumber\": 5}}",
        "requestId": "2078c7ea355f2e971886d3da8f2dc087",
        "customerId": 387457911,
        "eventTime": 1743263207000,
        "eventName": "TransactionAdd",
        "genericEventId": null,
        "eventLogId": 37188428,
        "tillId": 50776027,
        "uniqueId": "3i8qVUFzeF"
      }
    ]
```

# Error code

| Error Code | Description           |
| :--------- | :-------------------- |
| 400        | Bad Request           |
| 404        | Not Found             |
| 500        | Internal Server Error |