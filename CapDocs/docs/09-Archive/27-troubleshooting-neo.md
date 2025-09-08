---
title: Troubleshooting
excerpt: ''
deprecated: false
hidden: true
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
<Table align={["left","left"]}>
  <thead>
    <tr>
      <th style={{ textAlign: "left" }}>
        **Error**
      </th>

      <th style={{ textAlign: "left" }}>
        **Reason**
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td style={{ textAlign: "left" }}>
        API not triggering
      </td>

      <td style={{ textAlign: "left" }}>
        * Check the API method and URl as defined in the Trigger.
        * Ensure the dataflow is active.
        * Ensure the required headers are set.
        * Authentication tokens are valid.
        * For APIs that are not Live, ensure the variant ID is correct.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Unable to create a dataflow
      </td>

      <td style={{ textAlign: "left" }}>
        * Ensure you have User permissions - read, write, edit.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Incorrect or missing data in Mongo DB
      </td>

      <td style={{ textAlign: "left" }}>
        * Check the Mongo DB connections.
        * Validate the input data.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        API request errors
      </td>

      <td style={{ textAlign: "left" }}>
        * Check the HTTP status code returned by the API.
        * Check error messages.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Unable to save the dataflow
      </td>

      <td style={{ textAlign: "left" }}>
        * Check for unconfigured blocks
        * Missing connectors  
          * \*Note\*\*: Error blocks are shown in red.
      </td>
    </tr>
  </tbody>
</Table>
