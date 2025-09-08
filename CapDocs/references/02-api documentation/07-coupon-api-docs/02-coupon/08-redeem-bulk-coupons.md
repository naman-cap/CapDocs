---
title: Redeem bulk coupons
excerpt: Lets you redeem one or more coupons of a customer.
api:
  file: v2.json
  operationId: redeem-bulk-coupons
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
> 👍 Notes
>
> * A maximum of 100 coupons can be redeemed in a single API request.
> * The coupon redemption and crediting of the coupon to the wallet functionality are available only in the v1.1 API. The v2 API is designed to redeem coupons directly.
> * `VoucherRedemption`event is triggered only during the single coupon redemption.

> 🚧 Warning
>
> Bulk coupon redemption will fail if even one of the coupons is invalid. For example, if you submit a request with 100 coupons and just one is either invalid or not issued to the user, the entire redemption will be unsuccessful. There is no option for partial success in bulk redemptions.

<br />

# Prerequisites

*   Authentication: Basic or OAuth authentication
*   Default access group

# Resource information

|               |                       |
| :------------ | :-------------------- |
| URI           | v2/coupon/bulk/redeem |
| HTTP method   | POST                  |
| Pagination    | NA                    |
| Rate limit    | 1000                  |
| Batch support | NA                    |

# Request query parameter

<Table align={[null,"left",null]}>
  <thead>
    <tr>
      <th>
        Parameter
      </th>

      <th>
        Data type
      </th>

      <th>
        Description
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        is_redeemable
      </td>

      <td>
        Boolean
      </td>

      <td>
        Specifies whether the coupon is redeemable. When you set` isredeemable=true`, the API checks redeemability and returns the result in the response without performing a redemption. If the coupon is redeemable: The response will include `redemptionStatus.message = "Coupon redemption successful"`.

        **Notes:** Coupons are not redeemed when `isredeemable=true` is used. It only checks the status. 
        You can also use this to check the status for multiple coupon codes at once. To add multiple codes, you can add it as an array of objects, where each object contains a code field.
      </td>
    </tr>
  </tbody>
</Table>

# Request Body parameter

| Parameter             | Description                                                                                                                                                                                                                                               |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| redemptionRequestList | List of coupons to redeem.                                                                                                                                                                                                                                |
| code                  | Coupon code to redeem.  To redeem multiple codes you can add it as an array of objects, where each object contains a code field.                                                                                                                          |
| redemptionTime        | The date and time when the coupon is going to be redeemed in YYYY-MM-DD HH:MM:SS format. The time defined here is used for certain evaluations, but it is not stored in the system. The system considers the store's current time as the redemption time. |
| transactionNumber     | Transaction number for which the coupon(s) needs to be redeemed.                                                                                                                                                                                          |
| billAmount            | Transaction amount for which the coupon is redeemed.                                                                                                                                                                                                      |
| user                  | Details of the customer that redeems the coupon(s).                                                                                                                                                                                                       |
| id                    | Unique ID of the customer.                                                                                                                                                                                                                                |
| mobile*               | Unique mobile number of the customer.                                                                                                                                                                                                                     |
| email*                | Unique email ID of the customer.                                                                                                                                                                                                                          |
| externalId*           | Unique external ID of the customer.                                                                                                                                                                                                                       |

*Any one of the customer identifiers is mandatory.

```json Request Body with multiple coupon codes
{
    "redemptionRequestList": [
        {
            "code": "U6ER8MJ5"
        },
        {
            "code": "U6ER8MH9"
        }
    ],
    "redemptionTime": "2021-05-12 19:18:30",
    "transactionNumber": "numbr9435064964",
    "user": {
        "id": 126080386
    },
    "billAmount": "2000"
}
```

<br />

# Response body parameter

| Parameter                              | Description                                           |
| -------------------------------------- | ----------------------------------------------------- |
| entityId                               | Unique identifier for the entity.                     |
| result.id                              | Unique ID of the result.                              |
| result.currencyInput                   | Indicates if currency input is present.               |
| result.localToBaseCurrencyExchangeRate | Exchange rate from local currency to base currency.   |
| result.code                            | Code associated with the result.                      |
| result.discountCode                    | Code indicating the type of discount.                 |
| result.seriesCode                      | Code associated with the series.                      |
| result.isAbsolute                      | Indicates if the value is absolute.                   |
| result.couponValue                     | Value of the coupon.                                  |
| result.redemptionStatus.statusCode     | Status code object containing status details.         |
| result.redemptionStatus.message        | Message indicating the status of coupon processing.   |
| result.redemptionStatus.code           | Code indicating the status of coupon processing.      |
| result.redemptionStatus.success        | Indicates if the coupon processing was successful.    |
| result.discountType                    | Type of discount provided.                            |
| result.discountValue                   | Value of the discount provided.                       |
| result.discountUpto                    | Maximum value up to which the discount is applicable. |
| totalCount                             | Total count of items in the response.                 |
| failureCount                           | Count of items that failed.                           |

```Text Response
{
    "response": [
        {
            "entityId": 1306648998,
            "result": {
                "redemptionId": "-1",
                "id": 1306648998,
                "currencyInput": false,
                "localToBaseCurrencyExchangeRate": 0,
                "warnings": [],
                "appendedErrorMessage": "",
                "code": "3ELN50QRLCKGW5S6",
                "discountCode": "123123123",
                "seriesCode": 794088,
                "isAbsolute": false,
                "couponValue": 12,
                "redemptionStatus": {
                    "statusCode": {
                        "status": true,
                        "code": 700,
                        "message": "Coupon isRedeem successful"
                    },
                    "warnings": [],
                    "warningsAsStatusCode": [],
                    "code": 700,
                    "success": true,
                    "message": "Coupon isRedeem successful"
                },
                "discountType": "PERC",
                "discountValue": 12,
                "discountUpto": 12
            },
            "errors": []
        },
        {
            "entityId": 1306648999,
            "result": {
                "redemptionId": "-1",
                "id": 1306648999,
                "currencyInput": false,
                "localToBaseCurrencyExchangeRate": 0,
                "warnings": [],
                "appendedErrorMessage": "",
                "code": "WWTX7NIPSDC34DFX",
                "discountCode": "123123123123",
                "seriesCode": 801319,
                "isAbsolute": true,
                "couponValue": 122,
                "redemptionStatus": {
                    "statusCode": {
                        "status": true,
                        "code": 700,
                        "message": "Coupon isRedeem successful"
                    },
                    "warnings": [],
                    "warningsAsStatusCode": [],
                    "code": 700,
                    "success": true,
                    "message": "Coupon isRedeem successful"
                },
                "discountType": "ABS",
                "discountValue": 122,
                "discountUpto": 0
            },
            "errors": []
        }
    ],
    "totalCount": 2,
    "failureCount": 0
}
```

<br />
