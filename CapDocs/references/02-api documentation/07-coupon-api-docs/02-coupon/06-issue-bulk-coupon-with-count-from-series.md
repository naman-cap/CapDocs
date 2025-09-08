---
title: Issue multiple coupons to a customer from a series
excerpt: ''
api:
  file: v2.json
  operationId: issue-bulk-coupon-with-count-from-series
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
Using this API, you can issue multiple coupons from a coupon series to the same customer by defining the quantity of coupons.

> 👍 Note
>
> * For detailed information about our APIs and for hands-on testing, refer documentation in [API overview](https://docs.capillarytech.com/reference/apioverview) and  step-by-step guide on making your first API call in [Make your first API call](https://docs.capillarytech.com/reference/make-your-first-api-call) .

# Prerequisites

*   Authentication: Basic or OAuth authentication
*   Default access group

# Resource information

|               |                           |
| :------------ | :------------------------ |
| URI           | /v2/coupon/issue/multiple |
| HTTP method   | POST                      |
| Pagination    | NA                        |
| Rate limit    | NA                        |
| Batch support | Yes                       |

# API endpoint example

`https://eu.api.capillarytech.com/v2/coupon/issue/multiple`

# Request body parameters

| **Parameter** | **Datatype** | **Description**                                                                                                                                                                          |
| ------------- | ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| seriesIds\*   | Integer      | Series ID of coupon. You can get the Series ID from this [API](https://docs.capillarytech.com/reference/create-coupon-series). Externally managed/third party coupons are not supported. |
| count\*       | Integer      | Number of coupons to be issued from the series. **NOTE:** Maximum coupons that can be issued is 500. If the count is not specified, by default it will take 1.                           |
| customer\*    | Object       | The object containing the details of the customer. You can use mobile, email or external id of the customer.                                                                             |

```json With Mobile
{
    "seriesId": 415446,
    "count": 2,
    "customer": {
        "mobile": "11223569865"
    }
}
```
```json With Email
{
    "seriesId": 415446,
    "count": 2,
    "customer": {
        "email": "Tomhills@captech.com"
    }
}
```
```json With External ID
{
    "seriesId": 18426,
    "count": 2,
    "customer": {
        "externalId": "3873472"
    }
}
```

# Response parameters

| **Parameters**                         | **Description**                                                |
| :------------------------------------- | :------------------------------------------------------------- |
| coupons                                | List of coupons issued.                                        |
| coupons.code                           | Code of the coupon.                                            |
| coupons.couponId                       | ID of the coupon.                                              |
| couponConfig                           | Configuration details of the coupon.                           |
| couponConfig.customPropertyMap         | Custom properties of the coupon.                               |
| couponConfig.id                        | ID of the coupon configuration.                                |
| couponConfig.description               | Description of the coupon configuration.                       |
| couponConfig.discountCode              | Discount code associated with the coupon.                      |
| couponConfig.info                      | Information about the coupon configuration.                    |
| couponConfig.discountUpto              | Maximum discount value.                                        |
| couponConfig.discountValue             | Value of the discount.                                         |
| couponConfig.issueToLoyalty            | Indicates if the coupon is issued to a loyalty program.        |
| couponConfig.numUploadedNonIssued      | Number of non-issued uploaded coupons.                         |
| couponConfig.numUploadedTotal          | Total number of uploaded coupons.                              |
| couponConfig.redemptionValidAfterDays  | Days after which the coupon is valid for redemption.           |
| couponConfig.ownerId                   | ID of the coupon owner.                                        |
| couponConfig.ownerValidity             | Validity period of the coupon owner.                           |
| couponConfig.alphaNumeric              | Indicates if the coupon code is alphanumeric.                  |
| couponConfig.shortCodeLength           | Length of the short code.                                      |
| couponConfig.randomCodeLength          | Length of the random code.                                     |
| couponConfig.fixedExpiryDate           | Fixed expiry date of the coupon.                               |
| couponConfig.numTotal                  | Total number of coupons.                                       |
| couponConfig.latestIssualTime          | Timestamp of the latest coupon issuance.                       |
| couponConfig.latestRedemptionTime      | Timestamp of the latest coupon redemption.                     |
| couponConfig.discountOn                | Indicates what the discount applies to (e.g., BILL).           |
| couponConfig.discountType              | Type of discount.                                              |
| couponConfig.externalIssual            | Indicates if the coupon is issued externally.                  |
| couponConfig.updateProductData         | Indicates if product data is updated.                          |
| customer                               | Customer details.                                              |
| customer.id                            | ID of the customer.                                            |
| totalCount                             | The total number of coupons that were attempted to be issued   |
| failureCount                           | The number of coupons that failed to be issued                 |
| successCount                           | The number of coupons that were successfully issued            |
| customer.profiles.lastName             | Last name of the customer.                                     |
| customer.profiles.fields               | Custom fields of the customer profile.                         |
| customer.profiles.allFields            | All fields of the customer profile.                            |
| customer.profiles.identifiers          | List of customer identifiers.                                  |
| customer.profiles.identifiers.type     | Type of the identifier (e.g., email, mobile, external id.etc). |
| customer.profiles.identifiers.value    | Value of the identifier.                                       |
| customer.profiles.commChannels         | Communication channels of the customer.                        |
| customer.profiles.userId               | User ID associated with the customer profile.                  |
| customer.profiles.accountId            | Account ID associated with the customer profile.               |
| customer.profiles.autoUpdateTime       | Timestamp of the last auto-update of the customer profile.     |
| customer.profiles.identifiersAll       | List of all identifiers of the customer profile.               |
| customer.profiles.identifiersAll.type  | Type of the identifier (e.g., email, mobile, external id).     |
| customer.profiles.identifiersAll.value | Value of the identifier.                                       |
| errors                                 | List of errors.                                                |
| warnings                               | List of warnings.                                              |

```json Success response with automatically generated code and Coupon uploaded through Capillary
{
    "coupons": [
        {
            "code": "3084294818",
            "couponId": 1237263304
        },
        {
            "code": "5686061236",
            "couponId": 1237263305
        }
    ],
    "couponConfig": {
        "customPropertyMap": {},
        "id": 0,
        "description": "IKEA - 500KW Voucher ",
        "discountCode": "NO_VALUE",
        "info": "IKEA - 500KW Voucher ",
        "discountUpto": 0,
        "discountValue": 500,
        "issueToLoyalty": false,
        "numUploadedNonIssued": 0,
        "numUploadedTotal": 0,
        "redemptionValidAfterDays": 0,
        "ownerId": 0,
        "ownerValidity": 0,
        "alphaNumeric": false,
        "shortCodeLength": 0,
        "randomCodeLength": 0,
        "fixedExpiryDate": 0,
        "numTotal": 0,
        "latestIssualTime": 0,
        "latestRedemptionTime": 0,
        "discountOn": "BILL",
        "discountType": "ABS",
        "externalIssual": false,
        "updateProductData": false
    },
    "totalCount": 2,
    "failureCount": 0,
    "successCount": 2,
    "customer": {
        "id": 555567088,
        "profiles": [
            {
                "firstName": "Abijith",
                "lastName": "Gupta",
                "fields": {},
                "allFields": {},
                "identifiers": [
                    {
                        "type": "mobile",
                        "value": "11223569865"
                    },
                    {
                        "type": "externalId",
                        "value": "000003873472"
                    }
                ],
                "commChannels": [],
                "userId": 555567088,
                "accountId": "",
                "autoUpdateTime": "2024-08-20T09:57:15Z",
                "identifiersAll": [
                    {
                        "type": "mobile",
                        "value": "11223569865"
                    },
                    {
                        "type": "externalId",
                        "value": "000003873472"
                    }
                ]
            }
        ]
    },
    "errors": [],
    "warnings": []
}
```
```json Success response With generic coupon code
{
    "coupons": [
        {
            "code": "DECATH10",
            "couponId": 1239821361
        }
    ],
    "couponConfig": {
        "customPropertyMap": {},
        "id": 0,
        "description": "10% off Decathlon Products",
        "discountCode": "NO_VALUE",
        "info": "10% off Decathlon Prodcuts",
        "discountUpto": 0,
        "discountValue": 100,
        "issueToLoyalty": false,
        "numUploadedNonIssued": 0,
        "numUploadedTotal": 0,
        "redemptionValidAfterDays": 0,
        "ownerId": 0,
        "ownerValidity": 0,
        "alphaNumeric": false,
        "shortCodeLength": 0,
        "randomCodeLength": 0,
        "fixedExpiryDate": 0,
        "numTotal": 0,
        "latestIssualTime": 0,
        "latestRedemptionTime": 0,
        "discountOn": "BILL",
        "discountType": "ABS",
        "externalIssual": false,
        "updateProductData": false
    },
    "totalCount": 1,
    "failureCount": 0,
    "successCount": 1,
    "customer": {
        "id": 555567088,
        "profiles": [
            {
                "firstName": "Abijith",
                "lastName": "Gupta",
                "fields": {},
                "allFields": {},
                "identifiers": [
                    {
                        "type": "mobile",
                        "value": "11223569865"
                    },
                    {
                        "type": "externalId",
                        "value": "000003873472"
                    }
                ],
                "commChannels": [],
                "userId": 555567088,
                "accountId": "",
                "autoUpdateTime": "2024-09-03T10:13:55Z",
                "identifiersAll": [
                    {
                        "type": "mobile",
                        "value": "11223569865"
                    },
                    {
                        "type": "externalId",
                        "value": "000003873472"
                    }
                ]
            }
        ]
    },
    "errors": [],
    "warnings": []
}
```
```json Invalid Coupon Series ID
{
    "errors": [
        {
            "status": false,
            "code": 707,
            "message": "Coupon Series ID is invalid"
        }
    ]
}
```
```json Invalid Coupon Count
{
    "errors": [
        {
            "status": false,
            "code": 677,
            "message": "Invalid coupon count. Minimum 1 and Maximum 500."
        }
    ]
}
```
```json Could not find customer
{
    "errors": [
        {
            "status": false,
            "code": 701,
            "message": "The customer could not be found. Please check mobile, email, external id passed"
        }
    ]
}
```
```json Partial Success
{
    "coupons": [
        {
            "code": "2YQWCWQXZ6NTMTAJLCXNP1T6CYMN",
            "couponId": 96004050
        }
    ],
    "couponConfig": {
        "customPropertyMap": {},
        "id": 0,
        "description": "Only 1 issual",
        "discountCode": "NO_VALUE",
        "info": "Only 1 issual",
        "discountUpto": 0,
        "discountValue": 1,
        "issueToLoyalty": false,
        "numUploadedNonIssued": 0,
        "numUploadedTotal": 0,
        "redemptionValidAfterDays": 0,
        "ownerId": 0,
        "ownerValidity": 0,
        "alphaNumeric": false,
        "shortCodeLength": 0,
        "randomCodeLength": 0,
        "fixedExpiryDate": 0,
        "numTotal": 0,
        "latestIssualTime": 0,
        "latestRedemptionTime": 0,
        "discountOn": "BILL",
        "discountType": "ABS",
        "updateProductData": false,
        "externalIssual": false
    },
    "totalCount": 2,
    "failureCount": 1,
    "successCount": 1,
    "customer": {
        "id": 374658850,
        "profiles": [
            {
                "firstName": "plerthprth",
                "lastName": "gmmlzilbpg",
                "fields": {},
                "allFields": {},
                "identifiers": [
                    {
                        "type": "email",
                        "value": "Tomhills@mail.com"
                    },
                    {
                        "type": "mobile",
                        "value": "918028464628"
                    },
                    {
                        "type": "externalId",
                        "value": "x918028464628"
                    }
                ],
                "commChannels": [],
                "userId": 374658850,
                "accountId": "",
                "autoUpdateTime": "2024-08-01T12:42:46+05:30",
                "identifiersAll": [
                    {
                        "type": "email",
                        "value": "Tomhills@mail.com"
                    },
                    {
                        "type": "mobile",
                        "value": "918028464628"
                    },
                    {
                        "type": "externalId",
                        "value": "x918028464628"
                    }
                ]
            }
        ]
    },
    "errors": [
        {
            "status": false,
            "code": 5004,
            "message": "Issue only one coupon. Since isAllowMultipleVouchersPerUser=false."
        }
    ],
    "warnings": []
}

```
```json Expired Coupon or coupon series
{
    "errors": [
        {
            "status": false,
            "message": "Coupon has expired",
            "code": 713
        }
    ]
}

```
```json Coupon Processing Failed
{
    "errors": [
        {
            "status": false,
            "message": "Coupon processing failed: user already has a coupon",
            "code": 709
        }
    ]
}

```
```json Series ID is mandatory
{
    "errors": [
        {
            "status": false,
            "code": 756,
            "message": "seriesId is mandatory to set"
        }
    ]
}

```
```json One generic coupon can be issued
    "errors": [
        {
            "status": false,
            "code": 5004,
            "message": "Cannot issue more than one GENERIC coupon code."
        }
    ],
    "warnings": []
}
```
```json Count should be greater than 0
{
    "errors": [
        {
            "status": false,
            "code": 756,
            "message": "count should be greater than 0"
        }
    ]
}
```
```json With multiple series ID
{
    "seriesId": 415446,535521,
    "count": 2,
    "customer": {
        "mobile": "11223569865"
    }
}
//This is a part of request body.
```
```json Maximum coupon count from series exceeded for a user
    "errors": [
        {
            "status": false,
            "code": 5002,
            "message": "max coupon per user exceeded"
        }
    ],
    "warnings": []
}
```

# API-specific error and warning codes

<Table align={["left","left","left"]}>
  <thead>
    <tr>
      <th>
        Warning Error Code (Partial Success\*)
      </th>

      <th>
        Error code
      </th>

      <th>
        Description
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        *
      </td>

      <td>
        701
      </td>

      <td>
        The customer could not be found. Check if mobile, email, external id entered correctly.
      </td>
    </tr>

    <tr>
      <td>
        *
      </td>

      <td>
        707
      </td>

      <td>
        Coupon Series ID is invalid.
      </td>
    </tr>

    <tr>
      <td>
        *
      </td>

      <td>
        709
      </td>

      <td>
        Coupon processing failed as user already has a coupon.
      </td>
    </tr>

    <tr>
      <td>
        *
      </td>

      <td>
        713
      </td>

      <td>
        Coupon has expired.
      </td>
    </tr>

    <tr>
      <td>
        *
      </td>

      <td>
        756
      </td>

      <td>
        SeriesId is mandatory.
      </td>
    </tr>

    <tr>
      <td>
        679
      </td>

      <td>
        5004
      </td>

      <td>
        Cannot issue more than one GENERIC coupon code or Issue only one coupon. This error occurs when the[ Maximum issuals per customer](https://docs.capillarytech.com/docs/offer-advanced-settings#issual--reminder-settings) is set to 1.
      </td>
    </tr>

    <tr>
      <td>
        626
      </td>

      <td>
        5001
      </td>

      <td>
        Maximum number of series has been created.
      </td>
    </tr>

    <tr>
      <td>
        621
      </td>

      <td>
        5002
      </td>

      <td>
        Maximum number of coupon issued per user has been exceeded
      </td>
    </tr>

    <tr>
      <td>
        702
      </td>

      <td>
        5005
      </td>

      <td>
        Queue is empty for series. This error happens on the backend because of system caching issues.
      </td>
    </tr>

    <tr>
      <td>
        678
      </td>

      <td>
        5006
      </td>

      <td>
        Unable to issue certain number of coupons
      </td>
    </tr>
  </tbody>
</Table>

\*\*\*\*\*Partial Success - This occurs when only some coupons are issued, while the rest are not issued due to certain reasons.