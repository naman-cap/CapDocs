---
title: Get Store Tasks
excerpt: >-
  Returns the details of store tasks such as task title, description, status,
  and updates.
api:
  file: customer-v11.json
  operationId: get-store-tasks
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
***

## Request Query Parameters

<Table align={["left","left","left"]}>
  <thead>
    <tr>
      <th style={{ textAlign: "left" }}>
        Parameter Name
      </th>

      <th style={{ textAlign: "left" }}>
        Data Type
      </th>

      <th style={{ textAlign: "left" }}>
        Description
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td style={{ textAlign: "left" }}>
        type\_value
      </td>

      <td style={{ textAlign: "left" }}>
        Enum
      </td>

      <td style={{ textAlign: "left" }}>
        Type of staff details to return.
        Supported values : ASSOCIATE, MANAGER.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        all
      </td>

      <td style={{ textAlign: "left" }}>
        Enum
      </td>

      <td style={{ textAlign: "left" }}>
        Type of task to return.
        Supported values : sms, email, call, none.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        assoc\_id
      </td>

      <td style={{ textAlign: "left" }}>
        Long
      </td>

      <td style={{ textAlign: "left" }}>
        Unique ID of the associate to return the list of tasks assigned to that specific associate.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        customer\_id
      </td>

      <td style={{ textAlign: "left" }}>
        Long
      </td>

      <td style={{ textAlign: "left" }}>
        Unique ID of the customer to get the list of tasks created for that specific customer.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        start\_date
      </td>

      <td style={{ textAlign: "left" }}>
        yyyy-mm-dd
      </td>

      <td style={{ textAlign: "left" }}>
        Returns the list of tasks created between the dates set on start\_date and end\_date. If only start\_date is mentioned then the list of tasks created on or after that specified date is returned.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        end\_date
      </td>

      <td style={{ textAlign: "left" }}>
        yyyy-mm-dd
      </td>

      <td style={{ textAlign: "left" }}>
        Returns the list of tasks created between the dates set on start\_date and end\_date. If only end\_date is passed, the list of tasks created on or before the specified date is returned.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        count
      </td>

      <td style={{ textAlign: "left" }}>
        int
      </td>

      <td style={{ textAlign: "left" }}>
        Limits the number of tasks to be returned. For example, if count=10 then the details of only 10 tasks are returned.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        format
      </td>

      <td style={{ textAlign: "left" }}>
        Enum
      </td>

      <td style={{ textAlign: "left" }}>
        Format of the response object.
      </td>
    </tr>
  </tbody>
</Table>