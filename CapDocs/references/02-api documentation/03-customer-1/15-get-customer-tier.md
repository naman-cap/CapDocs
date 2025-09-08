---
title: Get Customer Tier
excerpt: >-
  Retrieves tier details of a customer for a single program or across all
  programs of the org.


  **This is a light API**.
api:
  file: v2.json
  operationId: get-customer-tier
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
### Important Note

<Table align={["left","left","left"]}>
  <thead>
    <tr>
      <th style={{ textAlign: "left" }}>
        When
      </th>

      <th style={{ textAlign: "left" }}>
        `fetchDataForAllPrograms`

         is true
      </th>

      <th style={{ textAlign: "left" }}>
        `fetchDataForAllPrograms`

         is false
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td style={{ textAlign: "left" }}>
        programId is passed
      </td>

      <td style={{ textAlign: "left" }}>
        You will still see tier details of the customer across all programs
      </td>

      <td style={{ textAlign: "left" }}>
        You will still see tier details of the customer for that particular program.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        programId is not passed
      </td>

      <td style={{ textAlign: "left" }}>
        You will still see tier details of the customer across all programs
      </td>

      <td style={{ textAlign: "left" }}>
        You will still see tier details of the customer for the default program.
      </td>
    </tr>
  </tbody>
</Table>

### Response Parameters

| Parameter               | Datatype | Description                                                                                                         |
| ----------------------- | -------- | ------------------------------------------------------------------------------------------------------------------- |
| entityId                | long     | Unique ID of the customer.                                                                                          |
| currentTierSerialNumber | int      | Serial number of the current tier. For highest tier, this value is shown as `-1` meaning no next tier is available. |
| nextTierSerialNumber    | int      | Serial number of the next tier. For highest tier, this value is shown as `-1` meaning no next tier is available.    |