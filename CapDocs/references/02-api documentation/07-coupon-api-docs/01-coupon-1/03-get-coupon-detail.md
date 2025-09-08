---
title: Get Coupon details
excerpt: ''
api:
  file: customer-v11.json
  operationId: get-coupon-detail
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
This API allows you to retrieve the details of a specific coupon. You can get information such as coupon issued to, current coupon status, coupon redeemed date, and coupon validity.

> 👍 Note
>
> For detailed information about our APIs and for hands-on testing, refer documentation in [API overview](https://docs.capillarytech.com/reference/apioverview) and  step-by-step guide on making your first API call in [Make your first API call](https://docs.capillarytech.com/reference/make-your-first-api-call) .

# Prerequisites

*   Authentication: Basic or OAuth authentication
*   Default access group

# Resource information

|                        |             |
| :--------------------- | :---------- |
| URL                    | /coupon/get |
| HTTP Method            | GET         |
| Pagination             | No          |
| Batch support          | No          |
| Rate limit information | None        |

# API endpoint example

`https://eu.api.capillarytech.com/v1.1/coupon/get?issuedToIds=98662653&code=PT4I43YN,WL2ZBJZK&coupon_code_case=LOWER`

# Request query parameters

<Table align={["left","left","left"]}>
  <thead>
    <tr>
      <th>
        Parameters
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
        `issuedToIds`
      </td>

      <td>
        Integer
      </td>

      <td>
        Pass the customer ID that you want to retrieve the coupon details from.
      </td>
    </tr>

    <tr>
      <td>
        `code`
      </td>

      <td>
        String
      </td>

      <td>
        Pass the coupon code that you want to retrieve. To retrieve details of multiple coupons, pass each code separated with a comma (`,`).
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
        This parameter helps retrieve the coupon code in the desired letter case. By default, the system converts the coupon code to upper case. The query itself is not case sensitive.
        **Supported values:**
        `LOWER`: Converts to lower case. \<br>
        `UPPER`: Converts to upper case. \<br>
        `AS_IT_IS`: Retrieves the code exactly as created.

        <br />

        For instance, if the code is "abAB123," it should be retrieved and displayed as "abAB123," maintaining its original formatting.
      </td>
    </tr>
  </tbody>
</Table>

# Response parameters

| Parameter          | Description                                                                |
| ------------------ | -------------------------------------------------------------------------- |
| id                 | Unique identifier of the coupon.                                           |
| code               | Coupon code.                                                               |
| valid\_till        | Expiration date of the coupon (`"DD-MM-YYYY"`).                            |
| issued\_on         | Timestamp when the coupon was issued (`"YYYY-MM-DD HH:MM:SS"`).            |
| valid\_from        | Start date of the coupon validity (`"YYYY-MM-DD HH:MM:SS"`).               |
| purpose            | Purpose or additional description of the coupon (may be blank).            |
| custom\_properties | Custom properties associated with the coupon.                              |
| name               | Name of a custom property.                                                 |
| value              | Value of the custom property.                                              |
| series\_id         | Unique identifier of the coupon series.                                    |
| is\_absolute       | Indicates if the coupon value is an absolute discount (true/false).        |
| value              | Value of the coupon (e.g., `10`).                                          |
| discount\_upto     | Maximum discount limit applicable with the coupon.                         |
| customer           | Information about the customer to whom the coupon was issued.              |
| id                 | Customer's unique identifier.                                              |
| name               | Customer's name.                                                           |
| mobile             | Customer's mobile number.                                                  |
| email              | Customer's email address.                                                  |
| external\_id       | External identifier for the customer.                                      |
| pincode            | Pincode associated with the coupon, if available.                          |
| item\_status       | Status information for the specific coupon processing.                     |
| success            | Status of the coupon processing.                                           |
| code               | Status code for the item-level processing (e.g., `700<code>, </code>705`). |
| message            | Message describing the coupon processing result.                           |
| redemption\_info   | Details regarding redemption if the coupon was redeemed.                   |
| redeemed           | Indicates whether the coupon was redeemed.                                 |
| id                 | Redemption ID.                                                             |
| redeemed\_on       | Timestamp when the coupon was redeemed (`"YYYY-MM-DD HH:MM:SS"`).          |
| redeemed\_at       | Store or location where the coupon was redeemed.                           |
| redeemed\_by       | Information about the person who redeemed the coupon.                      |
| store              | Store information where the coupon was redeemed.                           |
| transaction        | Transaction details for the coupon redemption.                             |
| issued\_store      | Store information where the coupon was originally issued.                  |

<br />

```json
{
    "response": {
        "status": {
            "success": "true",
            "status": "true",
            "code": 200,
            "message": "Success"
        },
        "coupons": {
            "coupon": [
                {
                    "id": "454473807",
                    "code": "WL2ZBJZK",
                    "valid_till": "08-03-2122",
                    "issued_on": "2022-05-30 18:10:48",
                    "valid_from": "2022-05-30 18:10:48",
                    "purpose": "",
                    "custom_properties": {
                        "custom_property": [
                            {
                                "name": "standard_image_3",
                                "value": ""
                            },
                            {
                                "name": "standard_terms_and_conditions",
                                "value": ""
                            }
                        ]
                    },
                    "series_id": 142654,
                    "is_absolute": true,
                    "value": 10,
                    "discount_upto": 0,
                    "customer": {
                        "id": "98662653",
                        "name": "Tom Hanks",
                        "mobile": "9944332266",
                        "email": "tom.hanks@capillarytech.com",
                        "external_id": null
                    },
                    "pincode": "NULL",
                    "item_status": {
                        "success": "true",
                        "code": 700,
                        "message": "Coupon processing successful"
                    }
                },
                {
                    "id": "370179951",
                    "code": "PT4I43YN",
                    "valid_till": "10-07-2119",
                    "issued_on": "2021-05-17 19:06:03",
                    "valid_from": "2021-05-17 19:06:03",
                    "purpose": "",
                    "custom_properties": {
                        "custom_property": []
                    },
                    "series_id": 12313,
                    "is_absolute": true,
                    "value": 10,
                    "discount_upto": 0,
                    "customer": {
                        "id": "98662653",
                        "name": "Tom Hanks",
                        "mobile": "9944332266",
                        "email": "Tom.hanks@capillarytech.com",
                        "external_id": null
                    },
                    "redemption_info": {
                        "redeemed": "true",
                        "id": 4359526,
                        "redeemed_on": "2021-05-17 19:07:54",
                        "redeemed_at": "bukl.till",
                        "redeemed_by": {
                            "firstname": "Tom",
                            "lastname": "Hanks",
                            "email": "tom.hanks@capillarytech.com",
                            "mobile": "9944332266"
                        },
                        "store": {
                            "code": "bukl.till",
                            "name": "bukl.till"
                        },
                        "transaction": {
                            "id": null,
                            "bill_number": "ZDCsddfg"
                        }
                    },
                    "pincode": "NULL",
                    "issued_store": {
                        "code": "international_business_park",
                        "name": "International Business Park"
                    },
                    "item_status": {
                        "success": "true",
                        "code": 700,
                        "message": "Coupon processing successful"
                    }
                }
            ]
        }
    }
}
```
```json With coupon_code_case=LOWER
{
    "response": {
        "status": {
            "success": "true",
            "status": "true",
            "code": 200,
            "message": "Success"
        },
        "coupons": {
            "coupon": [
                {
                    "id": "454473807",
                    "code": "wl2zbjzk",
                    "valid_till": "08-03-2122",
                    "issued_on": "2022-05-30 18:10:48",
                    "valid_from": "2022-05-30 18:10:48",
                    "purpose": "",
                    "custom_properties": {
                        "custom_property": [
                            {
                                "name": "standard_image_3",
                                "value": ""
                            },
                            {
                                "name": "standard_terms_and_conditions",
                                "value": ""
                            }
                        ]
                    },
                    "series_id": 142654,
                    "is_absolute": true,
                    "value": 10,
                    "discount_upto": 0,
                    "customer": {
                        "id": "98662653",
                        "name": "Tom Hanks",
                        "mobile": "9944332266",
                        "email": "tom.hanks@capillarytech.com",
                        "external_id": null
                    },
                    "pincode": "NULL",
                    "item_status": {
                        "success": "true",
                        "code": 700,
                        "message": "Coupon processing successful"
                    }
                },
                {
                    "id": -1,
                    "code": "WL2ZBJZK",
                    "is_absolute": false,
                    "value": null,
                    "discount_upto": null,
                    "pincode": "NULL",
                    "item_status": {
                        "success": "false",
                        "code": 705,
                        "message": "Both coupon code and validation code are invalid"
                    }
                },
                {
                    "id": -1,
                    "code": "PT4I43YN",
                    "is_absolute": false,
                    "value": null,
                    "discount_upto": null,
                    "pincode": "NULL",
                    "item_status": {
                        "success": "false",
                        "code": 705,
                        "message": "Both coupon code and validation code are invalid"
                    }
                },
                {
                    "id": "370179951",
                    "code": "pt4i43yn",
                    "valid_till": "10-07-2119",
                    "issued_on": "2021-05-17 19:06:03",
                    "valid_from": "2021-05-17 19:06:03",
                    "purpose": "",
                    "custom_properties": {
                        "custom_property": []
                    },
                    "series_id": 12313,
                    "is_absolute": true,
                    "value": 10,
                    "discount_upto": 0,
                    "customer": {
                        "id": "98662653",
                        "name": "Tom Hanks",
                        "mobile": "9944332266",
                        "email": "tom.hanks@capillarytech.com",
                        "external_id": null
                    },
                    "redemption_info": {
                        "redeemed": "true",
                        "id": 4359526,
                        "redeemed_on": "2021-05-17 19:07:54",
                        "redeemed_at": "bukl.till",
                        "redeemed_by": {
                            "firstname": "Tom",
                            "lastname": "Hanks",
                            "email": "tom.hanks@capillarytech.com",
                            "mobile": "9944332266"
                        },
                        "store": {
                            "code": "bukl.till",
                            "name": "bukl.till"
                        },
                        "transaction": {
                            "id": null,
                            "bill_number": "ZDCsddfg"
                        }
                    },
                    "pincode": "NULL",
                    "issued_store": {
                        "code": "international_business_park",
                        "name": "International Business Park"
                    },
                    "item_status": {
                        "success": "true",
                        "code": 700,
                        "message": "Coupon processing successful"
                    }
                }
            ]
        }
    }
}
```