---
title: Delink Customer
excerpt: Lets you remove a customer from one or more partner programs.
api:
  file: v2.json
  operationId: delink-customer
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
This API is used to Delink customer from Partner Program.

> 👍 Note
>
> * For detailed information about our APIs and for hands-on testing, refer documentation in [API overview](https://docs.capillarytech.com/reference/apioverview) and step-by-step guide on making your first API call in [Make your first API call](https://docs.capillarytech.com/reference/make-your-first-api-call).

# Prerequisites

*   Authentication: Basic or OAuth credentials
*   Default access group

# Resource information

|                        |                                |
| :--------------------- | :----------------------------- |
| URI                    | /partnerProgram/deLinkCustomer |
| HTTP Method            | POST                           |
| Pagination             | No                             |
| Batch support          | No                             |
| Rate limit information | None                           |

# API endpoint example

`https://eu.api.capillarytech.com/v2/partnerProgram/deLinkCustomer`

# Request body parameters

<Table>
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
        deLinkCustomers
      </td>

      <td>
        array
      </td>

      <td>
        List of customers to be delinked
      </td>
    </tr>

    <tr>
      <td>
        customer
      </td>

      <td>
        object
      </td>

      <td>
        Customer details
      </td>
    </tr>

    <tr>
      <td>
        * mobile
      </td>

      <td>
        integer
      </td>

      <td>
        Customer's mobile number
      </td>
    </tr>

    <tr>
      <td>
        deLinkFromPartnerPrograms
      </td>

      <td>
        array
      </td>

      <td>
        List of partner programs to delink from
      </td>
    </tr>

    <tr>
      <td>
        * partnerProgramName
      </td>

      <td>
        string
      </td>

      <td>
        Name of the partner program where it will be linked from.
      </td>
    </tr>
  </tbody>
</Table>

```json
{
  "deLinkCustomers": [
    {
      "customer": {
        "mobile": 919800000000
      },
      "deLinkFromPartnerPrograms": [
        {
          "partnerProgramName": "1stProgram"
        },
        {
          "partnerProgramName": "p3e1"
        }
      ]
    }
  ]
}
```

# Response Parameter

<Table>
  <thead>
    <tr>
      <th>
        Parameter
      </th>

      <th>
        Description
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        customersPartnerUpdates
      </td>

      <td>
        List of customers with partner program updates
      </td>
    </tr>

    <tr>
      <td>
        customer
      </td>

      <td>
        List of customer details
      </td>
    </tr>

    <tr>
      <td>
        id
      </td>

      <td>
        Unique identifier for the customer.
      </td>
    </tr>

    <tr>
      <td>
        mobile
      </td>

      <td>
        Customer's unique mobile number
      </td>
    </tr>

    <tr>
      <td>
        email
      </td>

      <td>
        Customer's unique email
      </td>
    </tr>

    <tr>
      <td>
        externalId
      </td>

      <td>
        Customer's unique external ID
      </td>
    </tr>

    <tr>
      <td>
        status
      </td>

      <td>
        Status of the customer retrieval
      </td>
    </tr>

    <tr>
      <td>
        * message
      </td>

      <td>
        Message regarding customer retrieval
      </td>
    </tr>

    <tr>
      <td>
        * code
      </td>

      <td>
        Status code
      </td>
    </tr>

    <tr>
      <td>
        partnerProgramUpdates
      </td>

      <td>
        List of partner program updates
      </td>
    </tr>

    <tr>
      <td>
        partnerProgramName
      </td>

      <td>
        Name of the partner program
      </td>
    </tr>

    <tr>
      <td>
        updateType
      </td>

      <td>
        Type of update (e.g., UPGRADE)
      </td>
    </tr>

    <tr>
      <td>
        updateStatus
      </td>

      <td>
        List of update status
      </td>
    </tr>

    <tr>
      <td>
        * status
      </td>

      <td>
        Status of the update
      </td>
    </tr>

    <tr>
      <td>
        * message
      </td>

      <td>
        Message regarding the update
      </td>
    </tr>

    <tr>
      <td>
        * code
      </td>

      <td>
        Status code
      </td>
    </tr>

    <tr>
      <td>
        warnings
      </td>

      <td>
        List of warnings (if any)
      </td>
    </tr>
  </tbody>
</Table>

```json
{
  "customersPartnerUpdates": [
    {
      "customer": {
        "id": 382741349,
        "mobile": "916215000000",
        "email": "tomswayer@gmail.com",
        "externalId": "X916215000000",
        "status": {
          "status": true,
          "message": "Customer successfully retrieved",
          "code": 1000
        }
      },
      "partnerProgramUpdates": [
        {
          "partnerProgramName": "1stProgram",
          "updateType": "UPGRADE",
          "updateStatus": {
            "status": true,
            "message": "Success",
            "code": 200
          }
        }
      ]
    }
  ],
  "warnings": []
}
```