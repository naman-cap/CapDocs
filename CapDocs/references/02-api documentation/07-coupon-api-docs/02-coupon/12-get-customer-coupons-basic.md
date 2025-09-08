---
title: Get All Customer Coupons
excerpt: ''
api:
  file: v2.json
  operationId: get-customer-coupons-basic
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
This API retrieves the coupon history details of a customer with basic details. For each customer, information includes coupon codes, validity, discount type and amount, redemption history, and issuing details, as well as pagination to manage large data sets efficiently. This API is ideal for accessing an overview of all coupons across customers. If you want  to retrieve more information about coupons, use this [API](https://docs.capillarytech.com/reference/get-customer-coupons-detailed).

> 👍 Note
>
> For detailed information about our APIs and for hands-on testing, refer documentation in [API overview](https://docs.capillarytech.com/reference/apioverview) and  step-by-step guide on making your first API call in [Make your first API call](https://docs.capillarytech.com/reference/make-your-first-api-call) .

# Prerequisites

*   Authentication: Basic or OAuth authentication
*   Default access group

# Resource information

|                        |                    |
| :--------------------- | :----------------- |
| URL                    | /customers/coupons |
| HTTP Method            | GET                |
| Pagination             | Yes                |
| Batch support          | No                 |
| Rate limit information | None               |

# API endpoint example

`https://eu.api.capillarytech.com/v2/customers/coupons?mobile=917003222195&coupon_code_case=LOWER&limit=20&offset=5`

# Request Query Parameters

| Parameters         | Data Type | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| :----------------- | :-------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `mobile`           | Integer   | Mobile of the customer.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| `email`            | Integer   | Email of the customer.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| `external_Id`      | Integer   | External ID of the customer.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `id`               | Long      | Unique ID of the customer.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| `status`           | Enum      | Get coupons of selected status(es). Supported values: `REDEEMED`, `UNREDEEMED`, `ACTIVE`, `EXPIRED`, `ACTIVE_REDEEMED`, `ACTIVE_UNREDEEMED`, `EXPIRED_REDEEMED`, `EXPIRED_UNREDEEMED`, `REDEEMABLE`. In the enum values, `Active_Redeemed` is for coupon is active but redeemed), `Active_Unredeemed` for coupons that are active and not redeemed, `Expired_Redeemed` for coupons that are expired but redeemed, and `Expired_Unredeemed` for coupons that are expired and not redeemed.                                     |
| `coupon_code_case` | Enum      | This parameter helps to retrieve the coupon code in the desired letter cases. By default, the system automatically converts the coupon code to upper case. The query itself is not case sensitive. Supported Values: `LOWER`, `UPPER`, `AS_IT_IS`. `LOWER` Converts the coupon code to lowercase. Example: "ABCD1234" → "abcd1234". `UPPER` Converts the coupon code to uppercase. Example: "abcd1234" → "ABCD1234". `AS_IT_IS` Returns the coupon code exactly as it was created or provided. Example: "abAB123" → "abAB123" |
| `sort_order`       | Enum      | Sort the results in Ascending (`ASC`) or Descending (`DESC`) order. By default it is Descending.                                                                                                                                                                                                                                                                                                                                                                                                                              |
| `limit`            | Integer   | Limit the number of results to be retrieved. For example: `limit=10` to retrieve the history of ten recent coupons of the customer.                                                                                                                                                                                                                                                                                                                                                                                           |
| `offset`           | Integer   | Defines the number of rows that needs to be skipped from the beginning of the results. For example, number `10` skips the first 10 search results.                                                                                                                                                                                                                                                                                                                                                                            |

# Response parameters

| Parameter | Description |
| :---- | :---- |
| code | The unique coupon code generated. This code is used for redeeming the coupon. |
| seriesId | The unique identifier for the coupon series. |
| description | Description of the coupon. |
| validTill | Expiry date of the coupon in ISO 8601 format. |
| discountType | Specifies the type of discount provided by the coupon (e.g., ABS for absolute, PERC for percentage). |
| discountValue | The value of the discount. |
| discountUpto | The maximum value up to which the discount can be applied. |
| customer | An object containing details about the customer. |
| customer.id | The unique identifier of the customer. |
| customer.profiles | An object containing profile details of the customer. |
| customer.profiles.firstName | The first name of the customer. |
| customer.profiles.lastName | The last name of the customer. |
| customer.profiles.identifiers | Identifier for the customer. |
| customer.profiles.identifiers.type | The type of identifier (e.g., "mobile", "email"). |
| customer.profiles.identifiers.value | The value of the identifier (e.g., the actual mobile number or email address). |
| customer.profiles.commChannels | Communication channels preferred by the customer. |
| customer.profiles.userId | A unique identifier for the user's profile. |
| customer.profiles.accountId | The account ID associated with the customer's profile. |
| customer.profiles.autoUpdateTime | The timestamp indicating the last automatic update time for the profile. |
| customer.profiles.identifiersAll | Contains all identifiers associated with the customer. |
| identifiersAll.type\` | The type of the first identifier in the all identifiers. |
| identifiersAll.value | The value of the first identifier in the all identifiers. |
| identifiersAll.type | The type of the second identifier in the all identifiers. |
| identifiersAll.value | The value of the second identifier in the all identifiers. |
| redemptionStatus | Represents the overall status of the redemption. |
| redemptionStatus.status | Indicates the overall success status of the coupon processing. |
| redemptionStatus.message | A message describing the overall status of the coupon processing. |
| redemptionStatus.code | The status code representing the overall result of the coupon processing. |
| issuedAt | An object containing details about where the coupon was issued. |
| issuedAt.code | The code of the store where the coupon was issued. |
| issuedAt.name | The name of the store where the coupon was issued. |
| customProperty | An array of custom properties associated with the coupon. |
| redemptions | An array containing details of redemptions associated with the coupon. |
| reversedRedemptions | An array containing details of reversed redemptions associated with the coupon. |
| validTillDateTime | Expiry date and time of the coupon in ISO 8601 format. |

```json
{
    "entity": {
        "pagination": {
            "limit": "100",
            "offset": "0",
            "total": 23
        },
        "customers": [
            {
                "firstname": "Tom",
                "lastname": "Sawyer",
                "email": "georgejohnsonoff@gmail.com",
                "mobile": "919400488244",
                "id": 565039504,
                "coupons": [
                    {
                        "code": "0211706970002385",
                        "seriesId": 840067,
                        "description": "doc_coupon01",
                        "validTill": "2026-06-11T00:00:00Z",
                        "discountType": "ABS",
                        "discountValue": 500.0,
                        "discountUpto": 0.0,
                        "redemptionCount": 1,
                        "redemptionsLeft": 0,
                        "id": 1312013462,
                        "createdDate": "2025-08-19T16:52:11Z",
                        "transactionNumber": "0",
                        "issuedAt": {
                            "code": "doc123",
                            "name": "DocStore"
                        },
                        "redemptions": [
                            {
                                "id": 18527071,
                                "date": "2025-08-19T16:52:30Z",
                                "transactionNumber": "12121212",
                                "redeemedAt": {
                                    "code": "doc123",
                                    "name": "DocStore"
                                }
                            }
                        ],
                        "reversedRedemptions": [],
                        "validTillDateTime": "2026-06-11T23:59:59Z"
                    },
                    {
                        "code": "0425942118660204",
                        "seriesId": 840066,
                        "description": "doc_coupon01",
                        "validTill": "2026-06-11T00:00:00Z",
                        "discountType": "ABS",
                        "discountValue": 500.0,
                        "discountUpto": 0.0,
                        "redemptionCount": 1,
                        "redemptionsLeft": 0,
                        "id": 1312013428,
                        "createdDate": "2025-08-19T16:49:39Z",
                        "transactionNumber": "0",
                        "issuedAt": {
                            "code": "doc123",
                            "name": "DocStore"
                        },
                        "redemptions": [
                            {
                                "id": 18527057,
                                "date": "2025-08-19T16:50:06Z",
                                "transactionNumber": "",
                                "redeemedAt": {
                                    "code": "doc123",
                                    "name": "DocStore"
                                }
                            }
                        ],
                        "reversedRedemptions": [],
                        "validTillDateTime": "2026-06-11T23:59:59Z"
                    },
                    {
                        "code": "2028126844759923",
                        "seriesId": 839534,
                        "description": "doc_coupon01",
                        "validTill": "2026-06-11T00:00:00Z",
                        "discountType": "ABS",
                        "discountValue": 5000.0,
                        "discountUpto": 0.0,
                        "redemptionCount": 1,
                        "redemptionsLeft": 0,
                        "id": 1311987477,
                        "createdDate": "2025-08-18T19:37:28Z",
                        "transactionNumber": "0",
                        "issuedAt": {
                            "code": "doc123",
                            "name": "DocStore"
                        },
                        "redemptions": [
                            {
                                "id": 18518032,
                                "date": "2025-08-18T19:37:45Z",
                                "transactionNumber": "",
                                "redeemedAt": {
                                    "code": "doc123",
                                    "name": "DocStore"
                                }
                            }
                        ],
                        "reversedRedemptions": [],
                        "validTillDateTime": "2026-06-11T23:59:59Z"
                    },
                    {
                        "code": "3558615628138696",
                        "seriesId": 839532,
                        "description": "doc_coupon01",
                        "validTill": "2026-06-11T00:00:00Z",
                        "discountType": "ABS",
                        "discountValue": 500.0,
                        "discountUpto": 0.0,
                        "redemptionCount": 1,
                        "redemptionsLeft": 0,
                        "id": 1311987440,
                        "createdDate": "2025-08-18T19:35:54Z",
                        "transactionNumber": "0",
                        "issuedAt": {
                            "code": "doc123",
                            "name": "DocStore"
                        },
                        "redemptions": [
                            {
                                "id": 18518007,
                                "date": "2025-08-18T19:36:10Z",
                                "transactionNumber": "",
                                "redeemedAt": {
                                    "code": "doc123",
                                    "name": "DocStore"
                                }
                            }
                        ],
                        "reversedRedemptions": [],
                        "validTillDateTime": "2026-06-11T23:59:59Z"
                    },
                    {
                        "code": "3908392058023755",
                        "seriesId": 839527,
                        "description": "doc_coupon01",
                        "validTill": "2026-06-11T00:00:00Z",
                        "discountType": "ABS",
                        "discountValue": 500.0,
                        "discountUpto": 0.0,
                        "redemptionCount": 1,
                        "redemptionsLeft": 0,
                        "id": 1311987397,
                        "createdDate": "2025-08-18T19:34:32Z",
                        "transactionNumber": "0",
                        "issuedAt": {
                            "code": "doc123",
                            "name": "DocStore"
                        },
                        "redemptions": [
                            {
                                "id": 18518002,
                                "date": "2025-08-18T19:34:48Z",
                                "transactionNumber": "",
                                "redeemedAt": {
                                    "code": "doc123",
                                    "name": "DocStore"
                                }
                            }
                        ],
                        "reversedRedemptions": [],
                        "validTillDateTime": "2026-06-11T23:59:59Z"
                    },
                    {
                        "code": "8317751592007332",
                        "seriesId": 836844,
                        "description": "doc_coupon01",
                        "validTill": "2026-06-11T00:00:00Z",
                        "discountType": "ABS",
                        "discountValue": 500.0,
                        "discountUpto": 0.0,
                        "redemptionCount": 0,
                        "redemptionsLeft": 1,
                        "id": 1311139693,
                        "createdDate": "2025-08-14T14:29:50Z",
                        "transactionNumber": "0",
                        "issuedAt": {
                            "code": "doc123",
                            "name": "DocStore"
                        },
                        "redemptions": [],
                        "reversedRedemptions": [],
                        "validTillDateTime": "2026-06-11T23:59:59Z"
                    },
                    {
                        "code": "5894567822344805",
                        "seriesId": 836832,
                        "description": "doc_coupon01",
                        "validTill": "2026-06-11T00:00:00Z",
                        "discountType": "ABS",
                        "discountValue": 500.0,
                        "discountUpto": 0.0,
                        "redemptionCount": 1,
                        "redemptionsLeft": 0,
                        "id": 1311139131,
                        "createdDate": "2025-08-14T13:59:48Z",
                        "transactionNumber": "0",
                        "issuedAt": {
                            "code": "doc123",
                            "name": "DocStore"
                        },
                        "redemptions": [
                            {
                                "id": 18478608,
                                "date": "2025-08-14T14:26:27Z",
                                "transactionNumber": "",
                                "redeemedAt": {
                                    "code": "doc123",
                                    "name": "DocStore"
                                }
                            }
                        ],
                        "reversedRedemptions": [],
                        "validTillDateTime": "2026-06-11T23:59:59Z"
                    },
                    {
                        "code": "12341234",
                        "seriesId": 823542,
                        "description": "doc-test 4",
                        "validTill": "2028-07-28T00:00:00Z",
                        "discountType": "ABS",
                        "discountValue": 200.0,
                        "discountUpto": 0.0,
                        "redemptionCount": 1,
                        "redemptionsLeft": 0,
                        "id": 1307428181,
                        "createdDate": "2025-07-27T14:16:01Z",
                        "transactionNumber": "0",
                        "issuedAt": {
                            "code": "doc123",
                            "name": "DocStore"
                        },
                        "redemptions": [
                            {
                                "id": 18291008,
                                "date": "2025-07-27T14:16:17Z",
                                "transactionNumber": "",
                                "redeemedAt": {
                                    "code": "doc123",
                                    "name": "DocStore"
                                }
                            }
                        ],
                        "reversedRedemptions": [],
                        "validTillDateTime": "2028-07-28T23:59:59Z"
                    },
                    {
                        "code": "KNBK1NIM9U",
                        "seriesId": 819823,
                        "description": "Coupon Series for UAT Team JULY only for new Registration",
                        "validTill": "2025-07-30T00:00:00Z",
                        "discountType": "ABS",
                        "discountValue": 1000.0,
                        "discountUpto": 0.0,
                        "redemptionCount": 1,
                        "redemptionsLeft": 0,
                        "id": 1307428068,
                        "createdDate": "2025-07-27T14:11:01Z",
                        "transactionNumber": "0",
                        "issuedAt": {
                            "code": "doc123",
                            "name": "DocStore"
                        },
                        "redemptions": [
                            {
                                "id": 18290983,
                                "date": "2025-07-27T14:11:22Z",
                                "transactionNumber": "",
                                "redeemedAt": {
                                    "code": "doc123",
                                    "name": "DocStore"
                                }
                            }
                        ],
                        "reversedRedemptions": [],
                        "validTillDateTime": "2025-07-30T23:59:59Z"
                    },
                    {
                        "code": "WWTX7NIPSDC34DFX",
                        "seriesId": 801319,
                        "description": "jooffers",
                        "validTill": "2027-06-26T00:00:00Z",
                        "discountType": "ABS",
                        "discountValue": 122.0,
                        "discountUpto": 0.0,
                        "redemptionCount": 1,
                        "redemptionsLeft": 0,
                        "id": 1306648999,
                        "createdDate": "2025-07-16T17:42:21Z",
                        "transactionNumber": "0",
                        "issuedAt": {
                            "code": "doc123",
                            "name": "DocStore"
                        },
                        "redemptions": [
                            {
                                "id": 18183149,
                                "date": "2025-07-16T17:46:43Z",
                                "transactionNumber": "numbr9435064964",
                                "redeemedAt": {
                                    "code": "doc123",
                                    "name": "DocStore"
                                }
                            }
                        ],
                        "reversedRedemptions": [],
                        "validTillDateTime": "2027-06-26T23:59:59Z"
                    },
                    {
                        "code": "3ELN50QRLCKGW5S6",
                        "seriesId": 794088,
                        "description": "DOC_COUPON",
                        "validTill": "2032-06-16T00:00:00Z",
                        "discountType": "PERC",
                        "discountValue": 12.0,
                        "discountUpto": 12.0,
                        "redemptionCount": 1,
                        "redemptionsLeft": 0,
                        "id": 1306648998,
                        "createdDate": "2025-07-16T17:42:21Z",
                        "transactionNumber": "0",
                        "issuedAt": {
                            "code": "doc123",
                            "name": "DocStore"
                        },
                        "redemptions": [
                            {
                                "id": 18183150,
                                "date": "2025-07-16T17:46:43Z",
                                "transactionNumber": "numbr9435064964",
                                "redeemedAt": {
                                    "code": "doc123",
                                    "name": "DocStore"
                                }
                            }
                        ],
                        "reversedRedemptions": [],
                        "validTillDateTime": "2032-06-16T23:59:59Z"
                    },
                    {
                        "code": "D1O6AR0BSQKK3XQR",
                        "seriesId": 816002,
                        "description": "doc_test_coupon",
                        "validTill": "2025-07-17T00:00:00Z",
                        "discountType": "PERC",
                        "discountValue": 100.0,
                        "discountUpto": 0.0,
                        "redemptionCount": 0,
                        "redemptionsLeft": 5,
                        "id": 1306638254,
                        "createdDate": "2025-07-16T16:01:50Z",
                        "transactionNumber": "0",
                        "issuedAt": {
                            "code": "doc123",
                            "name": "DocStore"
                        },
                        "redemptions": [],
                        "reversedRedemptions": [],
                        "validTillDateTime": "2025-07-17T23:59:59Z"
                    },
                    {
                        "code": "J5B1OG0BC6J1QLDX",
                        "seriesId": 816002,
                        "description": "doc_test_coupon",
                        "validTill": "2025-07-17T00:00:00Z",
                        "discountType": "PERC",
                        "discountValue": 100.0,
                        "discountUpto": 0.0,
                        "redemptionCount": 14,
                        "redemptionsLeft": 5,
                        "id": 1306638176,
                        "createdDate": "2025-07-16T15:56:41Z",
                        "transactionNumber": "0",
                        "issuedAt": {
                            "code": "doc123",
                            "name": "DocStore"
                        },
                        "redemptions": [
                            {
                                "id": 18182215,
                                "date": "2025-07-16T15:58:32Z",
                                "transactionNumber": "numbr9435064964",
                                "redeemedAt": {
                                    "code": "doc123",
                                    "name": "DocStore"
                                }
                            },
                            {
                                "id": 18182405,
                                "date": "2025-07-16T16:15:34Z",
                                "transactionNumber": "numbr9435064964",
                                "redeemedAt": {
                                    "code": "doc123",
                                    "name": "DocStore"
                                }
                            },
                            {
                                "id": 18182412,
                                "date": "2025-07-16T16:15:53Z",
                                "transactionNumber": "numbr9435064964",
                                "redeemedAt": {
                                    "code": "doc123",
                                    "name": "DocStore"
                                }
                            },
                            {
                                "id": 18182430,
                                "date": "2025-07-16T16:16:27Z",
                                "transactionNumber": "numbr9435064964",
                                "redeemedAt": {
                                    "code": "doc123",
                                    "name": "DocStore"
                                }
                            },
                            {
                                "id": 18182438,
                                "date": "2025-07-16T16:16:56Z",
                                "transactionNumber": "numbr9435064964",
                                "redeemedAt": {
                                    "code": "doc123",
                                    "name": "DocStore"
                                }
                            },
                            {
                                "id": 18182468,
                                "date": "2025-07-16T16:20:26Z",
                                "transactionNumber": "numbr9435064964",
                                "redeemedAt": {
                                    "code": "doc123",
                                    "name": "DocStore"
                                }
                            },
                            {
                                "id": 18182470,
                                "date": "2025-07-16T16:20:27Z",
                                "transactionNumber": "numbr9435064964",
                                "redeemedAt": {
                                    "code": "doc123",
                                    "name": "DocStore"
                                }
                            },
                            {
                                "id": 18182473,
                                "date": "2025-07-16T16:20:28Z",
                                "transactionNumber": "numbr9435064964",
                                "redeemedAt": {
                                    "code": "doc123",
                                    "name": "DocStore"
                                }
                            },
                            {
                                "id": 18182475,
                                "date": "2025-07-16T16:20:29Z",
                                "transactionNumber": "numbr9435064964",
                                "redeemedAt": {
                                    "code": "doc123",
                                    "name": "DocStore"
                                }
                            },
                            {
                                "id": 18182488,
                                "date": "2025-07-16T16:20:42Z",
                                "transactionNumber": "numbr9435064964",
                                "redeemedAt": {
                                    "code": "doc123",
                                    "name": "DocStore"
                                }
                            },
                            {
                                "id": 18182490,
                                "date": "2025-07-16T16:20:44Z",
                                "transactionNumber": "numbr9435064964",
                                "redeemedAt": {
                                    "code": "doc123",
                                    "name": "DocStore"
                                }
                            },
                            {
                                "id": 18182492,
                                "date": "2025-07-16T16:20:46Z",
                                "transactionNumber": "numbr9435064964",
                                "redeemedAt": {
                                    "code": "doc123",
                                    "name": "DocStore"
                                }
                            },
                            {
                                "id": 18182496,
                                "date": "2025-07-16T16:20:47Z",
                                "transactionNumber": "numbr9435064964",
                                "redeemedAt": {
                                    "code": "doc123",
                                    "name": "DocStore"
                                }
                            },
                            {
                                "id": 18182501,
                                "date": "2025-07-16T16:21:47Z",
                                "transactionNumber": "numbr9435064964",
                                "redeemedAt": {
                                    "code": "doc123",
                                    "name": "DocStore"
                                }
                            }
                        ],
                        "reversedRedemptions": [],
                        "validTillDateTime": "2025-07-17T23:59:59Z"
                    },
                    {
                        "code": "KDHYDY1N0EYP1FWF",
                        "seriesId": 816003,
                        "description": "doc_doc_coupon",
                        "validTill": "2025-07-17T00:00:00Z",
                        "discountType": "PERC",
                        "discountValue": 10.0,
                        "discountUpto": 0.0,
                        "redemptionCount": 14,
                        "redemptionsLeft": 0,
                        "id": 1306638175,
                        "createdDate": "2025-07-16T15:56:41Z",
                        "transactionNumber": "0",
                        "issuedAt": {
                            "code": "doc123",
                            "name": "DocStore"
                        },
                        "redemptions": [
                            {
                                "id": 18182216,
                                "date": "2025-07-16T15:58:32Z",
                                "transactionNumber": "numbr9435064964",
                                "redeemedAt": {
                                    "code": "doc123",
                                    "name": "DocStore"
                                }
                            },
                            {
                                "id": 18182406,
                                "date": "2025-07-16T16:15:34Z",
                                "transactionNumber": "numbr9435064964",
                                "redeemedAt": {
                                    "code": "doc123",
                                    "name": "DocStore"
                                }
                            },
                            {
                                "id": 18182413,
                                "date": "2025-07-16T16:15:53Z",
                                "transactionNumber": "numbr9435064964",
                                "redeemedAt": {
                                    "code": "doc123",
                                    "name": "DocStore"
                                }
                            },
                            {
                                "id": 18182431,
                                "date": "2025-07-16T16:16:27Z",
                                "transactionNumber": "numbr9435064964",
                                "redeemedAt": {
                                    "code": "doc123",
                                    "name": "DocStore"
                                }
                            },
                            {
                                "id": 18182439,
                                "date": "2025-07-16T16:16:56Z",
                                "transactionNumber": "numbr9435064964",
                                "redeemedAt": {
                                    "code": "doc123",
                                    "name": "DocStore"
                                }
                            },
                            {
                                "id": 18182469,
                                "date": "2025-07-16T16:20:26Z",
                                "transactionNumber": "numbr9435064964",
                                "redeemedAt": {
                                    "code": "doc123",
                                    "name": "DocStore"
                                }
                            },
                            {
                                "id": 18182471,
                                "date": "2025-07-16T16:20:27Z",
                                "transactionNumber": "numbr9435064964",
                                "redeemedAt": {
                                    "code": "doc123",
                                    "name": "DocStore"
                                }
                            },
                            {
                                "id": 18182474,
                                "date": "2025-07-16T16:20:28Z",
                                "transactionNumber": "numbr9435064964",
                                "redeemedAt": {
                                    "code": "doc123",
                                    "name": "DocStore"
                                }
                            },
                            {
                                "id": 18182476,
                                "date": "2025-07-16T16:20:29Z",
                                "transactionNumber": "numbr9435064964",
                                "redeemedAt": {
                                    "code": "doc123",
                                    "name": "DocStore"
                                }
                            },
                            {
                                "id": 18182489,
                                "date": "2025-07-16T16:20:42Z",
                                "transactionNumber": "numbr9435064964",
                                "redeemedAt": {
                                    "code": "doc123",
                                    "name": "DocStore"
                                }
                            },
                            {
                                "id": 18182491,
                                "date": "2025-07-16T16:20:44Z",
                                "transactionNumber": "numbr9435064964",
                                "redeemedAt": {
                                    "code": "doc123",
                                    "name": "DocStore"
                                }
                            },
                            {
                                "id": 18182493,
                                "date": "2025-07-16T16:20:46Z",
                                "transactionNumber": "numbr9435064964",
                                "redeemedAt": {
                                    "code": "doc123",
                                    "name": "DocStore"
                                }
                            },
                            {
                                "id": 18182497,
                                "date": "2025-07-16T16:20:47Z",
                                "transactionNumber": "numbr9435064964",
                                "redeemedAt": {
                                    "code": "doc123",
                                    "name": "DocStore"
                                }
                            },
                            {
                                "id": 18182502,
                                "date": "2025-07-16T16:21:47Z",
                                "transactionNumber": "numbr9435064964",
                                "redeemedAt": {
                                    "code": "doc123",
                                    "name": "DocStore"
                                }
                            }
                        ],
                        "reversedRedemptions": [],
                        "validTillDateTime": "2025-07-17T23:59:59Z"
                    },
                    {
                        "code": "9093147113389818",
                        "seriesId": 804943,
                        "description": "doc_coupon01",
                        "validTill": "2026-06-11T00:00:00Z",
                        "discountType": "ABS",
                        "discountValue": 5000.0,
                        "discountUpto": 0.0,
                        "redemptionCount": 1,
                        "redemptionsLeft": 0,
                        "id": 1305582408,
                        "createdDate": "2025-07-02T05:35:59Z",
                        "transactionNumber": "0",
                        "issuedAt": {
                            "code": "doc123",
                            "name": "DocStore"
                        },
                        "redemptions": [
                            {
                                "id": 18036029,
                                "date": "2025-07-02T05:42:57Z",
                                "transactionNumber": "",
                                "redeemedAt": {
                                    "code": "doc123",
                                    "name": "DocStore"
                                }
                            }
                        ],
                        "reversedRedemptions": [],
                        "validTillDateTime": "2026-06-11T23:59:59Z"
                    },
                    {
                        "code": "MP9H9T2EJ5",
                        "seriesId": 757291,
                        "description": "Vishu 10% OFF",
                        "validTill": "2026-05-09T00:00:00Z",
                        "discountType": "ABS",
                        "discountValue": 500.0,
                        "discountUpto": 0.0,
                        "redemptionCount": 0,
                        "redemptionsLeft": 5,
                        "id": 1305016621,
                        "createdDate": "2025-06-26T10:30:19Z",
                        "transactionNumber": "0",
                        "issuedAt": {
                            "code": "doc123",
                            "name": "DocStore"
                        },
                        "redemptions": [],
                        "reversedRedemptions": [],
                        "validTillDateTime": "2026-05-09T23:59:59Z"
                    },
                    {
                        "code": "RXYEDPREM3BRTF7U",
                        "seriesId": 794088,
                        "description": "DOC_COUPON",
                        "validTill": "2032-06-16T00:00:00Z",
                        "discountType": "PERC",
                        "discountValue": 12.0,
                        "discountUpto": 12.0,
                        "redemptionCount": 0,
                        "redemptionsLeft": 1,
                        "id": 1303420745,
                        "createdDate": "2025-06-16T20:46:37Z",
                        "transactionNumber": "0",
                        "issuedAt": {
                            "code": "doc123",
                            "name": "DocStore"
                        },
                        "redemptions": [],
                        "reversedRedemptions": [],
                        "validTillDateTime": "2032-06-16T23:59:59Z"
                    },
                    {
                        "code": "2VNGQ9Y3DWVBHBE9",
                        "seriesId": 794088,
                        "description": "DOC_COUPON",
                        "validTill": "2032-06-16T00:00:00Z",
                        "discountType": "PERC",
                        "discountValue": 12.0,
                        "discountUpto": 12.0,
                        "redemptionCount": 0,
                        "redemptionsLeft": 1,
                        "id": 1303420744,
                        "createdDate": "2025-06-16T20:46:37Z",
                        "transactionNumber": "0",
                        "issuedAt": {
                            "code": "doc123",
                            "name": "DocStore"
                        },
                        "redemptions": [],
                        "reversedRedemptions": [],
                        "validTillDateTime": "2032-06-16T23:59:59Z"
                    },
                    {
                        "code": "1VV10SV891",
                        "seriesId": 757291,
                        "description": "Vishu 10% OFF",
                        "validTill": "2026-05-09T00:00:00Z",
                        "discountType": "ABS",
                        "discountValue": 500.0,
                        "discountUpto": 0.0,
                        "redemptionCount": 0,
                        "redemptionsLeft": 5,
                        "id": 1303408281,
                        "createdDate": "2025-06-16T12:23:56Z",
                        "transactionNumber": "0",
                        "issuedAt": {
                            "code": "doc123",
                            "name": "DocStore"
                        },
                        "redemptions": [],
                        "reversedRedemptions": [],
                        "validTillDateTime": "2026-05-09T23:59:59Z"
                    },
                    {
                        "code": "GEV8LUGIDD",
                        "seriesId": 757291,
                        "description": "Vishu 10% OFF",
                        "validTill": "2026-05-09T00:00:00Z",
                        "discountType": "ABS",
                        "discountValue": 500.0,
                        "discountUpto": 0.0,
                        "redemptionCount": 0,
                        "redemptionsLeft": 5,
                        "id": 1301025591,
                        "createdDate": "2025-06-02T11:26:34Z",
                        "transactionNumber": "0",
                        "issuedAt": {
                            "code": "doc123",
                            "name": "DocStore"
                        },
                        "redemptions": [],
                        "reversedRedemptions": [],
                        "validTillDateTime": "2026-05-09T23:59:59Z"
                    },
                    {
                        "code": "YTOWAEN5N0",
                        "seriesId": 757291,
                        "description": "Vishu 10% OFF",
                        "validTill": "2026-05-09T00:00:00Z",
                        "discountType": "ABS",
                        "discountValue": 500.0,
                        "discountUpto": 0.0,
                        "redemptionCount": 0,
                        "redemptionsLeft": 5,
                        "id": 1298658947,
                        "createdDate": "2025-05-23T16:08:25Z",
                        "transactionNumber": "0",
                        "issuedAt": {
                            "code": "doc123",
                            "name": "DocStore"
                        },
                        "redemptions": [],
                        "reversedRedemptions": [],
                        "validTillDateTime": "2026-05-09T23:59:59Z"
                    },
                    {
                        "code": "ZLI0HZ0EGH",
                        "seriesId": 757291,
                        "description": "Vishu 10% OFF",
                        "validTill": "2026-05-09T00:00:00Z",
                        "discountType": "ABS",
                        "discountValue": 500.0,
                        "discountUpto": 0.0,
                        "redemptionCount": 0,
                        "redemptionsLeft": 5,
                        "id": 1296377532,
                        "createdDate": "2025-04-30T11:13:36Z",
                        "transactionNumber": "0",
                        "issuedAt": {
                            "code": "doc123",
                            "name": "DocStore"
                        },
                        "redemptions": [],
                        "reversedRedemptions": [],
                        "validTillDateTime": "2026-05-09T23:59:59Z"
                    },
                    {
                        "code": "UHI3T4V98MRGP0G0",
                        "seriesId": 686692,
                        "description": "50% Off Holi Coupon",
                        "validTill": "2025-06-11T00:00:00Z",
                        "discountType": "ABS",
                        "discountValue": 200.0,
                        "discountUpto": 0.0,
                        "redemptionCount": 6,
                        "redemptionsLeft": -1,
                        "id": 1293385129,
                        "createdDate": "2025-04-14T11:49:03Z",
                        "transactionNumber": "0",
                        "issuedAt": {
                            "code": "doc123",
                            "name": "DocStore"
                        },
                        "redemptions": [
                            {
                                "id": 17423837,
                                "date": "2025-04-30T10:57:29Z",
                                "transactionNumber": "",
                                "redeemedAt": {
                                    "code": "doc123",
                                    "name": "DocStore"
                                }
                            },
                            {
                                "id": 17596279,
                                "date": "2025-05-16T15:45:33Z",
                                "transactionNumber": "bill-110",
                                "redeemedAt": {
                                    "code": "doc123",
                                    "name": "DocStore"
                                }
                            },
                            {
                                "id": 17596293,
                                "date": "2025-05-16T15:46:14Z",
                                "transactionNumber": "",
                                "redeemedAt": {
                                    "code": "doc123",
                                    "name": "DocStore"
                                }
                            },
                            {
                                "id": 17596385,
                                "date": "2025-05-16T16:01:50Z",
                                "transactionNumber": "bill-110",
                                "redeemedAt": {
                                    "code": "doc123",
                                    "name": "DocStore"
                                }
                            },
                            {
                                "id": 17653665,
                                "date": "2025-05-21T17:21:01Z",
                                "transactionNumber": "txnNumberTest1605",
                                "redeemedAt": {
                                    "code": "doc123",
                                    "name": "DocStore"
                                }
                            },
                            {
                                "id": 17677044,
                                "date": "2025-05-23T18:23:36Z",
                                "transactionNumber": "bill-110",
                                "redeemedAt": {
                                    "code": "doc123",
                                    "name": "DocStore"
                                }
                            }
                        ],
                        "reversedRedemptions": [],
                        "validTillDateTime": "2025-06-11T23:59:59Z"
                    }
                ]
            }
        ]
    },
    "warnings": [],
    "errors": [],
    "success": true
}
```
```json With coupon_code_case=LOWER
{
    "entity": {
        "pagination": {
            "limit": "100",
            "offset": "0",
            "total": 7
        },
        "customers": [
            {
                "firstname": "autofn_917003222195",
                "lastname": "autoln_917003222195",
                "email": "tomswayer@gmail.com",
                "mobile": "917003222195",
                "id": 345635529,
                "externalId": "ext_id917003222195",
                "coupons": [
                    {
                        "code": "tt6wzp7xnw",
                        "seriesId": 68579,
                        "description": "test-lekhana-2",
                        "validTill": "2024-10-31T00:00:00Z",
                        "discountType": "ABS",
                        "discountValue": 10.0,
                        "discountUpto": 0.0,
                        "redemptionCount": 0,
                        "redemptionsLeft": 1,
                        "id": 39004111,
                        "createdDate": "2024-10-11T13:18:03Z",
                        "transactionNumber": "0",
                        "issuedAt": {
                            "code": "store123",
                            "name": "MarvelAuto_Store"
                        },
                        "redemptions": [],
                        "reversedRedemptions": []
                    },
                    {
                        "code": "ziwy7lzgw8",
                        "seriesId": 68579,
                        "description": "test-lekhana-2",
                        "validTill": "2024-10-31T00:00:00Z",
                        "discountType": "ABS",
                        "discountValue": 10.0,
                        "discountUpto": 0.0,
                        "redemptionCount": 0,
                        "redemptionsLeft": 1,
                        "id": 39004112,
                        "createdDate": "2024-10-11T13:18:03Z",
                        "transactionNumber": "0",
                        "issuedAt": {
                            "code": "store123",
                            "name": "MarvelAuto_Store"
                        },
                        "redemptions": [],
                        "reversedRedemptions": []
                    },
                    {
                        "code": "hu1dh75hny",
                        "seriesId": 68579,
                        "description": "test-lekhana-2",
                        "validTill": "2024-10-31T00:00:00Z",
                        "discountType": "ABS",
                        "discountValue": 10.0,
                        "discountUpto": 0.0,
                        "redemptionCount": 0,
                        "redemptionsLeft": 1,
                        "id": 39004113,
                        "createdDate": "2024-10-11T13:18:03Z",
                        "transactionNumber": "0",
                        "issuedAt": {
                            "code": "store123",
                            "name": "MarvelAuto_Store"
                        },
                        "redemptions": [],
                        "reversedRedemptions": []
                    },
                    {
                        "code": "vmqvzcvymt",
                        "seriesId": 68579,
                        "description": "test-lekhana-2",
                        "validTill": "2024-10-31T00:00:00Z",
                        "discountType": "ABS",
                        "discountValue": 10.0,
                        "discountUpto": 0.0,
                        "redemptionCount": 0,
                        "redemptionsLeft": 1,
                        "id": 36502461,
                        "createdDate": "2024-10-10T10:37:03Z",
                        "transactionNumber": "0",
                        "issuedAt": {
                            "code": "store123",
                            "name": "MarvelAuto_Store"
                        },
                        "redemptions": [],
                        "reversedRedemptions": []
                    },
                    {
                        "code": "x6wqg8kb01",
                        "seriesId": 68579,
                        "description": "test-lekhana-2",
                        "validTill": "2024-10-31T00:00:00Z",
                        "discountType": "ABS",
                        "discountValue": 10.0,
                        "discountUpto": 0.0,
                        "redemptionCount": 0,
                        "redemptionsLeft": 1,
                        "id": 36502462,
                        "createdDate": "2024-10-10T10:37:03Z",
                        "transactionNumber": "0",
                        "issuedAt": {
                            "code": "store123",
                            "name": "MarvelAuto_Store"
                        },
                        "redemptions": [],
                        "reversedRedemptions": []
                    },
                    {
                        "code": "oo8hf7divr",
                        "seriesId": 68579,
                        "description": "test-lekhana-2",
                        "validTill": "2024-10-31T00:00:00Z",
                        "discountType": "ABS",
                        "discountValue": 10.0,
                        "discountUpto": 0.0,
                        "redemptionCount": 0,
                        "redemptionsLeft": 1,
                        "id": 36502463,
                        "createdDate": "2024-10-10T10:37:03Z",
                        "transactionNumber": "0",
                        "issuedAt": {
                            "code": "store123",
                            "name": "MarvelAuto_Store"
                        },
                        "redemptions": [],
                        "reversedRedemptions": []
                    },
                    {
                        "code": "w2jjud9yrguaprdur52o",
                        "seriesId": 68377,
                        "description": "test-lekhana",
                        "validTill": "2024-10-09T00:00:00Z",
                        "discountType": "ABS",
                        "discountValue": 10.0,
                        "discountUpto": 0.0,
                        "redemptionCount": 0,
                        "redemptionsLeft": 1,
                        "id": 36501088,
                        "createdDate": "2024-10-08T18:29:14Z",
                        "transactionNumber": "0",
                        "issuedAt": {
                            "code": "store123",
                            "name": "MarvelAuto_Store"
                        },
                        "customProperty": [
                            {
                                "name": "standard_image_1",
                                "value": ""
                            },
                            {
                                "name": "standard_image_2",
                                "value": ""
                            },
                            {
                                "name": "standard_description",
                                "value": "DescriptionCustom"
                            },
                            {
                                "name": "standard_image_3",
                                "value": ""
                            },
                            {
                                "name": "standard_terms_and_conditions",
                                "value": "Terms and conditionscustom"
                            },
                            {
                                "name": "test-xyz",
                                "value": "test-xyz custom"
                            }
                        ],
                        "redemptions": [],
                        "reversedRedemptions": []
                    }
                ]
            }
        ]
    },
    "warnings": [],
    "errors": [],
    "success": true
}
```