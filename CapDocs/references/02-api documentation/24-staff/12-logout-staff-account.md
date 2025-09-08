---
title: Logout Staff Account
excerpt: >-
  Logs out the current staff user’s access token (only for token based
  authentication). You need to pass the new header X-CAP-API-ACCESS-TOKEN which
  is the user’s access token.
api:
  file: v2.json
  operationId: logout-staff-account
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
## Status codes

<Table align={["left","left"]}>
  <thead>
    <tr>
      <th style={{ textAlign: "left" }}>
        Code
      </th>

      <th style={{ textAlign: "left" }}>
        Description
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td style={{ textAlign: "left" }}>
        8099
      </td>

      <td style={{ textAlign: "left" }}>
        No identifier passed in the param
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        8098
      </td>

      <td style={{ textAlign: "left" }}>
        Invalid Till
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        8097
      </td>

      <td style={{ textAlign: "left" }}>
        SNS service not working
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        8096
      </td>

      <td style={{ textAlign: "left" }}>
        Invalid Till code
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        8095
      </td>

      <td style={{ textAlign: "left" }}>
        Invalid source passed
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        8094
      </td>

      <td style={{ textAlign: "left" }}>
        No identifier value passed in the param
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        8093
      </td>

      <td style={{ textAlign: "left" }}>
        Walkin failed from store network
      </td>
    </tr>
  </tbody>
</Table>