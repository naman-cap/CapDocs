---
title: Is Coupon Redeemable
excerpt: ''
api:
  file: customer-v11.json
  operationId: is-coupon-redeemable
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
This API allows you to verify whether a coupon is redeemable by a specific customer.

> 👍 Note
>
> For detailed information about our APIs and for hands-on testing, refer documentation in [API overview](https://docs.capillarytech.com/reference/apioverview) and step-by-step guide on making your first API call in [Make your first API call](https://docs.capillarytech.com/reference/make-your-first-api-call).

# Prerequisites

*   Authentication: Basic or OAuth authentication
*   Default access group

# Resource information

|                        |                      |
| :--------------------- | :------------------- |
| URL                    | /coupon/isredeemable |
| HTTP Method            | GET                  |
| Pagination             | No                   |
| Batch support          | No                   |
| Rate limit information | None                 |

# API endpoint example

`https://eu.api.capillarytech.com/v1.1/coupon/isredeemable?mobile=11223569865&code=F3LRU8&coupon_code_case=lower`

# Request query parameters

| Parameter          | Data Type | Description                                                                                                                                                                                                                                                                                                   |
| ------------------ | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `mobile*`          | Integer   | Pass the customer ID that you want to retrieve the coupon details from.                                                                                                                                                                                                                                       |
| `id`               | Integer   | Unique Customer ID.                                                                                                                                                                                                                                                                                           |
| `external_id`      | String    | External ID of the customer.                                                                                                                                                                                                                                                                                  |
| `email`            | String    | Email ID of the customer.                                                                                                                                                                                                                                                                                     |
| `card_number`      | Integer   | Card number of the customer.                                                                                                                                                                                                                                                                                  |
| `card_external_id` | String    | Card external ID of the customer.                                                                                                                                                                                                                                                                             |
| `details`          | Boolean   | Pass `true` to retrieve the details of the coupon series. Pass `extended` to retrieve the coupon configuration details (set on the campaign) for that specific coupon series.                                                                                                                                 |
| `code*`            | String    | Pass the coupon code that you want to retrieve. To retrieve details of multiple coupons, pass each code separated with a comma (`,`).                                                                                                                                                                         |
| `coupon_code_case` | Enum      | This parameter helps retrieve the coupon code in the desired letter case. By default, the system converts the code to upper case. The query is not case-sensitive. \*\*Supported values: \*\***LOWER**: Converts to lower case. **UPPER**: Converts to upper case. **AS\_IT\_IS**: Preserves original format. |

# Response parameters

| Parameter                     | Description                                               |
| ----------------------------- | --------------------------------------------------------- |
| mobile                        | Customer's mobile number.                                 |
| code                          | Coupon code.                                              |
| is\_redeemable                | Indicates if the coupon is redeemable.                    |
| redemptions\_left             | Number of redemptions left.                               |
| no\_of\_redemptions\_by\_user | Number of times the coupon has been redeemed by the user. |
| coupon\_value                 | Value of the coupon.                                      |
| mobile                        | Customer's mobile number (repeated from above).           |
| email                         | Customer's email address.                                 |
| external\_id                  | External identifier for the customer.                     |
| success                       | Status of the coupon redeem request.                      |
| status                        | Overall status of the request.                            |
| code                          | Status code for the request.                              |
| message                       | Message describing the redeem status.                     |

<br />

```json
{
    "response": {
        "status": {
            "success": "true",
            "code": 200,
            "message": "Success"
        },
        "coupons": {
            "redeemable": {
                "mobile": "11223569865",
                "code": "f3lru8",
                "is_redeemable": "true",
                "redemptions_left": -1,
                "no_of_redemptions_by_user": 0,
                "coupon_value": "17",
                "customer": {
                    "mobile": "11223569865",
                    "email": null,
                    "external_id": "000003873472"
                },
                "item_status": {
                    "success": "true",
                    "status": "true",
                    "code": 700,
                    "message": "Coupon isRedeem successful"
                }
            }
        }
    }
}
```
```json With coupon_code_case=UPPER
{
    "response": {
        "status": {
            "success": "true",
            "code": 200,
            "message": "Success"
        },
        "coupons": {
            "redeemable": {
                "mobile": "11223569865",
                "code": "F3LRU8",
                "is_redeemable": "true",
                "redemptions_left": -1,
                "no_of_redemptions_by_user": 0,
                "coupon_value": "17",
                "customer": {
                    "mobile": "11223569865",
                    "email": null,
                    "external_id": "000003873472"
                },
                "item_status": {
                    "success": "true",
                    "status": "true",
                    "code": 700,
                    "message": "Coupon isRedeem successful"
                }
            }
        }
    }
}
```