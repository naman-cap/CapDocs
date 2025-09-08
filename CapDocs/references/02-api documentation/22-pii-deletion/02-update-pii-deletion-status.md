---
title: Update PII deletion status
excerpt: >-
  Allows to approve or reject the deletion requests and update the deletion
  status accordingly.
api:
  file: v2.json
  operationId: update-pii-deletion-status
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
> 📘 The API does not allow bulk status change.

# Request

curl: `https://<host>/v2/requests`

# Body parameters

<Table>
  <thead>
    <tr>
      <th>
        Parameter




        Parameters marked with 

        \*

         are mandatory.
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
        type\*
      </td>

      <td>
        string
      </td>

      <td>
        Type of the data. Only CUSTOMER type is supported.
      </td>
    </tr>

    <tr>
      <td>
        baseType\*
      </td>

      <td>
        string
      </td>

      <td>
        Type of the operation. In this context, DELETE is the baseType.
      </td>
    </tr>

    <tr>
      <td>
        id\*
      </td>

      <td>
        string
      </td>

      <td>
        PII deletion request ID.
      </td>
    </tr>

    <tr>
      <td>
        status\*
      </td>

      <td>
        string
      </td>

      <td>
        PII deletion status that needs to be set. For example, APPROVED, REJECTED and CANCELLED.
      </td>
    </tr>

    <tr>
      <td>
        comments
      </td>

      <td>
        string
      </td>

      <td>
        Comments or description for the operation
      </td>
    </tr>
  </tbody>
</Table>

# Response

| Parameter    | Description                                                              |
| :----------- | :----------------------------------------------------------------------- |
| entityId     | Deletion request id.                                                     |
| warnings     | Displays the warning message                                             |
| result       | Indicates whether the update was successful. True-No error, False-error. |
| totalCount   | Total requests updated                                                   |
| failureCount | Total update requests failed                                             |