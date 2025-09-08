---
title: Check if Points Transferable
excerpt: >-
  Checks if specific points of a customer can be transferred to another
  customer.
api:
  file: v2.json
  operationId: '-customer-points-transferrable'
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
Checks if specific points of a customer can be transferred to another customer. You can also `issue OTP` that is used to authenticate customer to transfer points ( `pointsTransfer` API ). By default, the value is set to false. OTP is not mandatory for points transfer and can be used for security purposes.

<Note title="Note">
s
*   Points added during customer creation cannot be transferred, points rewarded through transaction are transferable.
*   This API is applicable only for individual-to-individual transfers within the Intouch platform. It does not support group-to-group transfers.
*   For detailed information about the APIs and for hands-on testing, refer to the API overview [documentation](https://docs.capillarytech.com/reference/apioverview) and step-by-step guide on [making your first API call](https://docs.capillarytech.com/reference/make-your-first-api-call/)
</Note>

# Prerequisites

* The config ALLOW\_POINTS\_TRANSFER should be enabled for the org. To enable this, create a JIRA ticket to the Product Support team.

# Response Body

```json
{
  "data": [
    {
      "pointsTobeTransferred": 20,
      "transferFrom": {
        "id": 564955097,
        "profiles": [
          {
            "firstName": "testgrp1",
            "lastName": "testgrpv2",
            "attribution": {
              "createDate": "2025-02-18T03:54:14Z",
              "createdBy": {
                "id": 75155295,
                "code": "sant.p_123",
                "name": "sant.p_123",
                "type": "TILL",
                "referenceId": -1,
                "default": false
              },
              "modifiedBy": {
                "id": 75155295,
                "code": "sant.p_123",
                "name": "sant.p_123",
                "type": "TILL",
                "referenceId": -1,
                "default": false
              },
              "modifiedDate": "2025-02-28T03:59:49Z"
            },
            "fields": {},
            "allFields": {},
            "identifiers": [
              {
                "type": "email",
                "value": "testgrp1@gmail.com"
              },
              {
                "type": "externalId",
                "value": "434545"
              },
              {
                "type": "mobile",
                "value": "919777785203"
              }
            ],
            "commChannels": [
              {
                "type": "email",
                "value": "testgrp1@gmail.com",
                "primary": true,
                "verified": false,
                "meta": {
                  "residence": false,
                  "office": false
                },
                "attributes": {}
              },
              {
                "type": "mobile",
                "value": "919777785203",
                "primary": true,
                "verified": false,
                "meta": {
                  "residence": false,
                  "office": false
                },
                "attributes": {}
              }
            ],
            "source": "INSTORE",
            "userId": 564955097,
            "accountId": "",
            "conflictingProfileList": [],
            "autoUpdateTime": "2025-03-25T10:04:40Z",
            "identifiersAll": [
              {
                "type": "email",
                "value": "testgrp1@gmail.com"
              },
              {
                "type": "externalId",
                "value": "434545"
              },
              {
                "type": "mobile",
                "value": "919777785203"
              }
            ]
          }
        ],
        "loyaltyInfo": {
          "loyaltyType": "loyalty",
          "attributionV2": {
            "createDate": "2025-02-18T03:54:14Z",
            "createdBy": {
              "id": 75155295,
              "code": "sant.p_123",
              "name": "sant.p_123",
              "type": "TILL",
              "referenceId": -1,
              "default": false
            },
            "modifiedBy": {
              "id": 75155295,
              "code": "sant.p_123",
              "name": "sant.p_123",
              "type": "TILL",
              "referenceId": -1,
              "default": false
            },
            "modifiedDate": "2025-02-28T03:59:49Z"
          },
          "lifetimePurchases": 12000
        },
        "segments": {},
        "extendedFields": {}
      },
      "transferTo": {
        "id": 564955098,
        "profiles": [
          {
            "firstName": "testgrp2",
            "lastName": "testgrpv2",
            "attribution": {
              "createDate": "2025-02-18T03:57:21Z",
              "createdBy": {
                "id": 75155295,
                "code": "sant.p_123",
                "name": "sant.p_123",
                "type": "TILL",
                "referenceId": -1,
                "default": false
              },
              "modifiedBy": {
                "id": 75155295,
                "code": "sant.p_123",
                "name": "sant.p_123",
                "type": "TILL",
                "referenceId": -1,
                "default": false
              },
              "modifiedDate": "2025-03-20T12:03:55Z"
            },
            "fields": {},
            "allFields": {},
            "identifiers": [
              {
                "type": "email",
                "value": "testgrp2@gmail.com"
              },
              {
                "type": "externalId",
                "value": "434546"
              },
              {
                "type": "mobile",
                "value": "919777785611"
              }
            ],
            "commChannels": [
              {
                "type": "email",
                "value": "testgrp2@gmail.com",
                "primary": true,
                "verified": false,
                "meta": {
                  "residence": false,
                  "office": false
                },
                "attributes": {}
              },
              {
                "type": "mobile",
                "value": "919777785611",
                "primary": true,
                "verified": false,
                "meta": {
                  "residence": false,
                  "office": false
                },
                "attributes": {}
              }
            ],
            "source": "INSTORE",
            "userId": 564955098,
            "accountId": "",
            "conflictingProfileList": [],
            "autoUpdateTime": "2025-03-25T10:04:40Z",
            "identifiersAll": [
              {
                "type": "email",
                "value": "testgrp2@gmail.com"
              },
              {
                "type": "externalId",
                "value": "434546"
              },
              {
                "type": "mobile",
                "value": "919777785611"
              }
            ]
          }
        ],
        "loyaltyInfo": {
          "loyaltyType": "loyalty",
          "attributionV2": {
            "createDate": "2025-02-18T03:57:21Z",
            "createdBy": {
              "id": 75155295,
              "code": "sant.p_123",
              "name": "sant.p_123",
              "type": "TILL",
              "referenceId": -1,
              "default": false
            },
            "modifiedBy": {
              "id": 75155295,
              "code": "sant.p_123",
              "name": "sant.p_123",
              "type": "TILL",
              "referenceId": -1,
              "default": false
            },
            "modifiedDate": "2025-03-20T12:03:55Z"
          },
          "lifetimePurchases": 1000
        },
        "segments": {},
        "extendedFields": {}
      },
      "transferrable": true
    }
  ],
  "warnings": [],
  "errors": []
}
```

# Response Parameters

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
        data
      </td>

      <td>
        Array
      </td>

      <td>
        Contains details of the points transfer request.
      </td>
    </tr>

    <tr>
      <td>
        pointsTobeTransferred
      </td>

      <td>
        Float
      </td>

      <td>
        Number of points to be transferred.
      </td>
    </tr>

    <tr>
      <td>
        transferFrom
      </td>

      <td>
        Object
      </td>

      <td>
        Details of the customer transferring the points.
      </td>
    </tr>

    <tr>
      <td>
        * id
      </td>

      <td>
        Long
      </td>

      <td>
        Unique identifier of the customer transferring points.
      </td>
    </tr>

    <tr>
      <td>
        * profiles
      </td>

      <td>
        Array
      </td>

      <td>
        List of profile details of the transferring customer.
      </td>
    </tr>

    <tr>
      <td>
        \-- firstName
      </td>

      <td>
        String
      </td>

      <td>
        First name of the transferring customer.
      </td>
    </tr>

    <tr>
      <td>
        \-- lastName
      </td>

      <td>
        String
      </td>

      <td>
        Last name of the transferring customer.
      </td>
    </tr>

    <tr>
      <td>
        \-- identifiers
      </td>

      <td>
        Array
      </td>

      <td>
        List of identifiers for the transferring customer (e.g., email, mobile, external ID).
      </td>
    </tr>

    <tr>
      <td>
        \-- commChannels
      </td>

      <td>
        Array
      </td>

      <td>
        List of communication channels (email, mobile) for the transferring customer.
      </td>
    </tr>

    <tr>
      <td>
        loyaltyInfo
      </td>

      <td>
        Object
      </td>

      <td>
        Loyalty details of the transferring customer.
      </td>
    </tr>

    <tr>
      <td>
        * loyaltyType
      </td>

      <td>
        String
      </td>

      <td>
        Type of loyalty program.
      </td>
    </tr>

    <tr>
      <td>
        * lifetimePurchases
      </td>

      <td>
        Float
      </td>

      <td>
        Total purchases made by the transferring customer.
      </td>
    </tr>

    <tr>
      <td>
        transferTo
      </td>

      <td>
        Object
      </td>

      <td>
        Details of the customer receiving the points.
      </td>
    </tr>

    <tr>
      <td>
        * id
      </td>

      <td>
        Long
      </td>

      <td>
        Unique identifier of the customer receiving points.
      </td>
    </tr>

    <tr>
      <td>
        * profiles
      </td>

      <td>
        Array
      </td>

      <td>
        List of profile details of the receiving customer.
      </td>
    </tr>

    <tr>
      <td>
        \-- firstName
      </td>

      <td>
        String
      </td>

      <td>
        First name of the receiving customer.
      </td>
    </tr>

    <tr>
      <td>
        \-- lastName
      </td>

      <td>
        String
      </td>

      <td>
        Last name of the receiving customer.
      </td>
    </tr>

    <tr>
      <td>
        \-- identifiers
      </td>

      <td>
        Array
      </td>

      <td>
        List of identifiers for the receiving customer (e.g., email, mobile, external ID).
      </td>
    </tr>

    <tr>
      <td>
        \-- commChannels
      </td>

      <td>
        Array
      </td>

      <td>
        List of communication channels (email, mobile) for the receiving customer.
      </td>
    </tr>

    <tr>
      <td>
        * loyaltyInfo (under transferTo)
      </td>

      <td>
        Object
      </td>

      <td>
        Loyalty details of the receiving customer.
      </td>
    </tr>

    <tr>
      <td>
        \-- loyaltyType
      </td>

      <td>
        String
      </td>

      <td>
        Type of loyalty program.
      </td>
    </tr>

    <tr>
      <td>
        \-- lifetimePurchases
      </td>

      <td>
        Float
      </td>

      <td>
        Total purchases made by the receiving customer.
      </td>
    </tr>

    <tr>
      <td>
        transferrable
      </td>

      <td>
        Boolean
      </td>

      <td>
        Indicates if the points transfer is possible.
      </td>
    </tr>

    <tr>
      <td>
        warnings
      </td>

      <td>
        Array
      </td>

      <td>
        List of warnings, if any.
      </td>
    </tr>

    <tr>
      <td>
        errors
      </td>

      <td>
        Array
      </td>

      <td>
        List of errors, if any.
      </td>
    </tr>
  </tbody>
</Table>

# API specific error codes

| Error code | Description                                                        | Reason                                                                   |
| :--------- | :----------------------------------------------------------------- | :----------------------------------------------------------------------- |
| 885        | Invalid program id passed                                          | The program id provided is invalid or unsupported.                       |
| 8013       | Invalid identifier passed                                          | The costumer id was invalid or unsupported                               |
| 8015       | Costumer not found for the given identifiers                       | Customer id provided is invalid or not found.                            |
| 3316       | Group redemption action executed for non-group redemption payload. | Group redemption action is unsupported for non-group redemption payload. |