---
title: Get coupon details
excerpt: ''
api:
  file: v2.json
  operationId: get-coupon-details
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
This API retrieves the details of one or more coupons by coupon codes or IDs, or get coupons issued to specific customers.

> 👍 Note
>
> * For detailed information about our APIs and for hands-on testing, refer documentation in [API overview](https://docs.capillarytech.com/reference/apioverview) and  step-by-step guide on making your first API call in [Make your first API call](https://docs.capillarytech.com/reference/make-your-first-api-call) .

# Prerequisites

*   Authentication: Basic or OAuth authentication
*   Default access group

# Resource information

|                        |         |
| :--------------------- | :------ |
| URL                    | /coupon |
| HTTP Method            | GET     |
| Pagination             | No      |
| Batch support          | No      |
| Rate limit information | None    |

# API endpoint example

`https://eu.api.capillarytech.com/v2/coupon?issuedToIds=345635529&coupon_code_case=LOWER`

# Request Query parameter

<br />

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
        `issuedToIds*`
      </td>

      <td>
        Integer
      </td>

      <td>
        Fetch coupons issued to specific customers. Pass customer IDs to fetch.
      </td>
    </tr>

    <tr>
      <td>
        `couponIds`
      </td>

      <td>
        Integer
      </td>

      <td>
        Fetch coupon details by coupon IDs.
        To fetch multiple coupons, use the id or code parameters repeatedly in your API request,
        \*\*For example: \*\*
        ?couponIds=123\&couponIds=456 or ?couponCodes=ABC\&couponCodes=DEF.
      </td>
    </tr>

    <tr>
      <td>
        `couponCodes`
      </td>

      <td>
        String
      </td>

      <td>
        Fetch coupon details by coupon code.
      </td>
    </tr>

    <tr>
      <td>
        `coupon_code_case`
      </td>

      <td>
        Enum
      </td>

      <td>
        This parameter helps to retrieve the coupon code in the desired letter cases. By default, the system automatically converts the coupon code to upper case. The query itself is not case sensitive. Supported Values: `LOWER`: Converts the coupon code to lower case. `UPPER`: Converts the coupon codes to upper case. `AS_IT_IS`: It ensure that the coupon code is retrieved exactly as it was created or provided, without altering the letter case. For instance, if the code is "abAB123," it should be retrieved and displayed as "abAB123," maintaining its original formatting.
      </td>
    </tr>
  </tbody>
</Table>

# Response parameter

| Parameter     | Description                                                                                                                                                                                                                                                                                                                                                              |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| code          | The unique code associated with the coupon.                                                                                                                                                                                                                                                                                                                              |
| seriesId      | The ID of the series the coupon belongs to.                                                                                                                                                                                                                                                                                                                              |
| description   | A brief description of the coupon.                                                                                                                                                                                                                                                                                                                                       |
| discountCode  | Code indicating the type of discount.                                                                                                                                                                                                                                                                                                                                    |
| validTill     | The expiry time displayed here can be different if time is defined along with the expiry date of the coupon. For more details, refer to the [documentation about the difference in the displayed and actual coupon expiry time](https://docs.capillarytech.com/reference/update-coupon-code-expiry-date#difference-between-displayed-expiry-and-actual-expiration-time). |
| discountType  | The type of discount.                                                                                                                                                                                                                                                                                                                                                    |
| discountValue | The value of the discount provided by the coupon.                                                                                                                                                                                                                                                                                                                        |
| discountUpto  | The maximum value up to which discount can be applied.                                                                                                                                                                                                                                                                                                                   |
| discountOn    | What the discount is applied on.                                                                                                                                                                                                                                                                                                                                         |
| detailedInfo  | Detailed information about the coupon.                                                                                                                                                                                                                                                                                                                                   |

```json
{
    "data": [
        {
            "code": "1R7IOF17",
            "seriesId": 84093,
            "description": "Test Marvel",
            "discountCode": "NO_VALUE",
            "validTill": "2021-05-31T00:00:00Z",
            "discountType": "ABS",
            "discountValue": 100.0,
            "discountUpto": 0.0,
            "discountOn": "BILL",
            "detailedInfo": "Test Marvel"
        },
        {
            "code": "RNPQCPXI",
            "seriesId": 84093,
            "description": "Test Marvel",
            "discountCode": "NO_VALUE",
            "validTill": "2021-05-31T00:00:00Z",
            "discountType": "ABS",
            "discountValue": 100.0,
            "discountUpto": 0.0,
            "discountOn": "BILL",
            "detailedInfo": "Test Marvel"
        },
        {
            "code": "Z0452RAQ",
            "seriesId": 84093,
            "description": "Test Marvel",
            "discountCode": "NO_VALUE",
            "validTill": "2021-05-31T00:00:00Z",
            "discountType": "ABS",
            "discountValue": 100.0,
            "discountUpto": 0.0,
            "discountOn": "BILL",
            "detailedInfo": "Test Marvel"
        },
        {
            "code": "L6O2E1Q7",
            "seriesId": 84093,
            "description": "Test Marvel",
            "discountCode": "NO_VALUE",
            "validTill": "2021-05-31T00:00:00Z",
            "discountType": "ABS",
            "discountValue": 100.0,
            "discountUpto": 0.0,
            "discountOn": "BILL",
            "detailedInfo": "Test Marvel"
        },
        {
            "code": "HZXK4CFS",
            "seriesId": 12646,
            "description": "Welcome ",
            "discountCode": "NO_VALUE",
            "validTill": "2119-09-09T00:00:00Z",
            "discountType": "PERC",
            "discountValue": 15.0,
            "discountUpto": 0.0,
            "discountOn": "BILL",
            "detailedInfo": "Welcome "
        }
    ],
    "warnings": [],
    "errors": []
}
```
```json With coupon_code_case=LOWER
{
    "data": [
        {
            "code": "vmqvzcvymt",
            "seriesId": 68579,
            "description": "test-lekhana-2",
            "discountCode": "NO_VALUE",
            "validTill": "2024-10-31T00:00:00Z",
            "discountType": "ABS",
            "discountValue": 10.0,
            "discountUpto": 0.0,
            "discountOn": "BILL",
            "detailedInfo": "test-lekhana-2"
        },
        {
            "code": "x6wqg8kb01",
            "seriesId": 68579,
            "description": "test-lekhana-2",
            "discountCode": "NO_VALUE",
            "validTill": "2024-10-31T00:00:00Z",
            "discountType": "ABS",
            "discountValue": 10.0,
            "discountUpto": 0.0,
            "discountOn": "BILL",
            "detailedInfo": "test-lekhana-2"
        },
        {
            "code": "oo8hf7divr",
            "seriesId": 68579,
            "description": "test-lekhana-2",
            "discountCode": "NO_VALUE",
            "validTill": "2024-10-31T00:00:00Z",
            "discountType": "ABS",
            "discountValue": 10.0,
            "discountUpto": 0.0,
            "discountOn": "BILL",
            "detailedInfo": "test-lekhana-2"
        },
        {
            "code": "tt6wzp7xnw",
            "seriesId": 68579,
            "description": "test-lekhana-2",
            "discountCode": "NO_VALUE",
            "validTill": "2024-10-31T00:00:00Z",
            "discountType": "ABS",
            "discountValue": 10.0,
            "discountUpto": 0.0,
            "discountOn": "BILL",
            "detailedInfo": "test-lekhana-2"
        },
        {
            "code": "ziwy7lzgw8",
            "seriesId": 68579,
            "description": "test-lekhana-2",
            "discountCode": "NO_VALUE",
            "validTill": "2024-10-31T00:00:00Z",
            "discountType": "ABS",
            "discountValue": 10.0,
            "discountUpto": 0.0,
            "discountOn": "BILL",
            "detailedInfo": "test-lekhana-2"
        },
        {
            "code": "hu1dh75hny",
            "seriesId": 68579,
            "description": "test-lekhana-2",
            "discountCode": "NO_VALUE",
            "validTill": "2024-10-31T00:00:00Z",
            "discountType": "ABS",
            "discountValue": 10.0,
            "discountUpto": 0.0,
            "discountOn": "BILL",
            "detailedInfo": "test-lekhana-2"
        }
    ],
    "warnings": [],
    "errors": []
}
```