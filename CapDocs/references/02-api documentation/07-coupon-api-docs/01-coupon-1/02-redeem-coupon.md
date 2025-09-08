---
title: Redeem Coupon
excerpt: ''
api:
  file: customer-v11.json
  operationId: redeem-coupon
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
This API allows you to redeem coupons issued to the loyalty customer. For all redeem coupon APIs event notification  is only initiated when a redemption request contains a single coupon. If the request includes multiple coupons, the event will not be triggered.

# Prerequisites

*   Authentication: Basic or OAuth authentication
*   Default access group

# Resource information

|               |                     |
| :------------ | :------------------ |
| URI           | /v1.1/coupon/redeem |
| HTTP method   | POST                |
| Pagination    | NA                  |
| Rate limit    | 1000                |
| Batch support | NA                  |

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
        customer
      </td>

      <td>
        obj
      </td>

      <td>
        Pass any registered identifier type.
        Supported identifiers:
        `mobile`, `email`, `id`, `external_id`, `card_number`, `card_external_id`
      </td>
    </tr>

    <tr>
      <td>
        id
      </td>

      <td>
        long
      </td>

      <td>
        Coupon id that needs to be redeemed.
      </td>
    </tr>

    <tr>
      <td>
        code
      </td>

      <td>
        string
      </td>

      <td>
        Coupon code that need to be redeemed.
      </td>
    </tr>

    <tr>
      <td>
        validation\_code
      </td>

      <td>
        string
      </td>

      <td>
        Validation code is required for the orgs that use validation based redemption.
      </td>
    </tr>

    <tr>
      <td>
        number
      </td>

      <td>
        string
      </td>

      <td>
        Transaction number against which the coupon needs to be redeemed.
      </td>
    </tr>

    <tr>
      <td>
        amount
      </td>

      <td>
        double
      </td>

      <td>
        Transaction amount against which the coupon is redeemed.
      </td>
    </tr>

    <tr>
      <td>
        custom\_fields
      </td>

      <td>
        obj
      </td>

      <td>
        Coupon redemption level custom fields.
      </td>
    </tr>

    <tr>
      <td>
        name
      </td>

      <td>
        string
      </td>

      <td>
        Name of the custom field.
      </td>
    </tr>

    <tr>
      <td>
        value
      </td>

      <td>
        string
      </td>

      <td>
        Custom field value.
      </td>
    </tr>
  </tbody>
</Table>