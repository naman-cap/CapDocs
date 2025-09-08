---
title: Get Point Redemption Details for Redemption Events
deprecated: false
hidden: false
metadata:
  robots: index
---
The API fetches points redemption details for event log IDs related to points redemption events

> 🚧 Note
>
> This is a private API and is accessible only through [Neo](https://docs.capillarytech.com/docs/neo-quick-start#/) dataflows.

# Prerequisites

*   [Access to Neo](https://docs.capillarytech.com/docs/access-management-neo#/)
*   Basic or OAuth authentication details
*   Access group resource - NA

# Resource information

|                                |                                       |
| :----------------------------- | :------------------------------------ |
| URI to be used in Neo dataflow | /das/getPointsRedemptionExplodeLedger |
| HTTP method                    | GET                                   |
| Pagination supported?          | Yes                                   |
| Rate limit                     | Based on Neo                          |
| Batch support                  | NA                                    |

# Request query parameters

| Parameter (Parameters marked with \* are mandatory) | Data Type | Description                                                                                                  |
| --------------------------------------------------- | --------- | ------------------------------------------------------------------------------------------------------------ |
| entity\_id\*                                        | Long      | Unique customer ID of the customer                                                                           |
| event\_log\_ids\*                                   | String    | Unique identifier generated for the event at the time of its creation                                        |
| page                                                | Integer   | Retrieve details of a specific page. Page count starts from 1. **Example**: page=2 retrieves data on page 2. |
| count                                               | Integer   | Number of results to display per page. The default value is 10. The maximum supported value is 100.          |

# Response parameters

<Table align={["left","left","left"]}>
  <thead>
    <tr>
      <th>
        Parameter
      </th>

      <th>
        Datatype
      </th>

      <th>
        Description
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        notes
      </td>

      <td>
        String
      </td>

      <td>
        Notes or comments related to the redemption
      </td>
    </tr>

    <tr>
      <td>
        redemptionType
      </td>

      <td>
        String
      </td>

      <td>
        Type of redemption
        **Example**: `REDEMPTION`
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
        Purpose of the redemption
      </td>
    </tr>

    <tr>
      <td>
        redemptionId
      </td>

      <td>
        String
      </td>

      <td>
        Unique identifier for the redemption
      </td>
    </tr>

    <tr>
      <td>
        pointsRedeemed
      </td>

      <td>
        Float
      </td>

      <td>
        Number of points redeemed
      </td>
    </tr>

    <tr>
      <td>
        pointsRedemptionTime
      </td>

      <td>
        Long
      </td>

      <td>
        Timestamp when the points were redeemed in milliseconds
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
        Timestamp when the event was processed in milliseconds
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
        Unique identifier for the event type
      </td>
    </tr>

    <tr>
      <td>
        billId
      </td>

      <td>
        Long
      </td>

      <td>
        Unique identifier for the bill
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
        Unique identifier of the customer
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
        Timestamp of when the event occurred in milliseconds
      </td>
    </tr>

    <tr>
      <td>
        redemptionTime
      </td>

      <td>
        Long
      </td>

      <td>
        Timestamp when the redemption was recorded in milliseconds
      </td>
    </tr>

    <tr>
      <td>
        externalReferenceNumber
      </td>

      <td>
        String
      </td>

      <td>
        External reference number, if available
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
        Unique identifier of the event log
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
        Identifier for the till (point-of-sale terminal)
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
        Bill number associated with the redemption
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
        Unique ID associated with the redemption record
      </td>
    </tr>
  </tbody>
</Table>

# Sample response

```json Sample Response
   [
      {
        "notes": "general",
        "redemptionType": "REDEMPTION",
        "purpose": "",
        "redemptionId": "d5hrMK",
        "pointsRedeemed": 26,
        "pointsRedemptionTime": 1748950582000,
        "processingTime": 1748950581000,
        "eventTypeId": 3,
        "billId": 387970841,
        "customerId": 387970841,
        "eventTime": 1748950581000,
        "redemptionTime": 1748950581000,
        "externalReferenceNumber": null,
        "eventLogId": 38731921,
        "tillId": 50691660,
        "billNumber": "",
        "uniqueId": "X17nAIlTJ3"
      },
      {
        "notes": "Sample notes",
        "redemptionType": "REDEMPTION",
        "purpose": "",
        "redemptionId": "C2gPJ1",
        "pointsRedeemed": 5,
        "pointsRedemptionTime": 1749066544000,
        "processingTime": 1748869864000,
        "eventTypeId": 3,
        "billId": 387970841,
        "customerId": 387970841,
        "eventTime": 1748869864000,
        "redemptionTime": 1749062944000,
        "externalReferenceNumber": null,
        "eventLogId": 38797923,
        "tillId": 50692627,
        "billNumber": "wefsadefdfdasfds",
        "uniqueId": "qTxqAg2pe9"
      }
    ]
```

# Error code

| Error Code | Description           |
| :--------- | :-------------------- |
| 400        | Bad Request           |
| 404        | Not Found             |
| 500        | Internal Server Error |