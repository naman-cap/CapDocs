---
title: Update coupon code expiry date
excerpt: ''
api:
  file: v2.json
  operationId: update-coupon-code-expiry-date
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
This API allows you to update the expiry date of coupon codes (including the expired coupon) individually or in bulk for a particular series.

> 👍 Note
>
> * For detailed information about our APIs and for hands-on testing, refer documentation in [API overview](https://docs.capillarytech.com/reference/apioverview) and  step-by-step guide on making your first API call in [Make your first API call](https://docs.capillarytech.com/reference/make-your-first-api-call) .
> * Maximum number of coupon that can be updated is **100**.
> * Supports updates for one coupon code without requiring the series ID. For more than one coupon code, the series ID is required.

# Prerequisites

*   Authentication: Basic and OAuth authentication
*   Coupon access group

# Resource information

|               |                       |
| :------------ | :-------------------- |
| URI           | v2/coupon/bulk/expiry |
| HTTP method   | PUT                   |
| Pagination    | NA                    |
| Rate limit    | NA                    |
| Batch support | NA                    |

# API endpoint example

`https://eu.api.capillarytech.com/v2/coupon/bulk/expiry`

# Request body parameters

<HTMLBlock>{`
<table style="width: 100%; border-collapse: collapse;">
<thead>
<tr>
  <th style="border: 1px solid #ddd; padding: 8px;"><strong>Field</strong></th>
  <th style="border: 1px solid #ddd; padding: 8px;"><strong>Datatype</strong></th>
  <th style="border: 1px solid #ddd; padding: 8px;"><strong>Description</strong></th>
</tr>
</thead>
<tbody>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p><code>couponSeriesId</code></p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Integer</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>The ID of the series the coupon belongs to. You can retrieve the <code>couponSeriesId</code> using this <a href="https://docs.capillarytech.com/reference/get-coupon-details">API</a>.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p><code>customer</code></p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Object</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Contains details about the customer. <br/><br/><strong>Note:</strong> Customer block (<code>id</code>, <code>email</code>, <code>externalId</code>, or <code>mobile</code>) is mandatory in case of a generic coupon series ID.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p><code>couponCodes</code></p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Array of Objects</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>An array containing details of each coupon.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p><code>couponCode*</code></p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>String</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>The code of the coupon.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p><code>expiryDate*</code></p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>String</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>The expiry date of the coupon in ISO or epoch time format. <br/>Example: <code>2025-10-30T10:00:00Z</code>. <br/><br/>The time is always evaluated in the cluster time format. For example, if you define the time in GMT and the cluster is India, the system converts the time to IST for evaluation.<br/><br/><strong>Notes:</strong><br/>- When you retrieve the coupon details, the time is not displayed, but expiry occurs at the defined time. See <a href="https://docs.capillarytech.com/reference/update-coupon-code-expiry-date#difference-between-displayed-expiry-and-actual-expiration-time">this section</a>.<br/>- The coupon expiry date cannot exceed the coupon series expiry date.<br/>- You can set the expiry to an earlier time.</p>
</td>
</tr>
</tbody>
</table>
`}</HTMLBlock>

```json With mobile & automatically generated coupon
{
    "couponSeriesId": 415446,
    "customer": {
        "mobile": "11223569865"
    },
    "couponCodes": [
        {
            "couponCode": "4716726416",
            "expiryDate": "2025-10-30T10:00:00Z"
        },
        {
            "couponCode": "3381625240",
            "expiryDate": "2025-10-01T00:00:00+05:30"
        }
    ]
}
```
```json With customer id
{
    "couponSeriesId": 415446,
    "customer": {
        "id": "555567088"
    },
    "couponCodes": [
        {
            "couponCode": "4716726416",
            "expiryDate": "2025-10-30T00:00:00Z"
        },
        {
            "couponCode": "3381625240",
            "expiryDate": "2025-10-01T00:00:00+05:30"
        }
    ]
}

```
```json With email
{
    "couponSeriesId": 415446,
    "customer": {
        "email": "Tomhills@captech.com"
    },
    "couponCodes": [
        {
            "couponCode": "4716726416",
            "expiryDate": "2025-10-30T00:00:00Z"
        },
        {
            "couponCode": "3381625240",
            "expiryDate": "2025-10-01T00:00:00+05:30"
        }
    ]
}

```
```json With external ID
{
    "couponSeriesId": 415446,
    "customer": {
        "externalId": "3873472"
    },
    "couponCodes": [
        {
            "couponCode": "4716726416",
            "expiryDate": "2025-10-30T00:00:00Z"
        },
        {
            "couponCode": "3381625240",
            "expiryDate": "2025-10-01T00:00:00+05:30"
        }
    ]
}

```
```json With Generic Coupon code
{
    "couponSeriesId": 597437,
    "customer": {
        "externalId": "000003873472"
    },
    "couponCodes": [
        {
            "couponCode": "DECATH10",
            "expiryDate": "2024-09-23T00:00:00Z"
        }
    ]
}

```

# Difference between displayed expiry and actual expiration time

The system does not display the time details when you retrieve the coupon details. See the below scenarios for more details:

## Scenario 1

* Cluster - India
* Defined expiry time - 2024-09-23T10:00:00Z
* Expiry details displayed on retrieval - 2024-09-23T00:00:00Z

Even though the time displayed during the retrieval is 10 hours behind, the coupon would expire at the defined time only (23rd September 2024 at 10 AM)

## Scenario 2

* Cluster - India
* Defined expiry time - 2024-09-23T00:00:00Z
* Expiry details displayed on retrieval - 2024-09-23T00:00:00Z

In this scenario, there is no difference between the defined and the time displayed during retrieval and the coupon would expire on 23rd September 2024 at 12.0 AM.

# Response parameters

| **Field**          | **Datatype** | **Description**                                                                                                                                     |
| ------------------ | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| entity             | Object       | Gives details of a coupon issuance process, including the total, failed, and successful counts, unprocessed coupons, user ID, and coupon series ID. |
| totalCount         | Integer      | Total number of coupons processed.                                                                                                                  |
| failedCount        | Integer      | Number of coupons that failed processing.                                                                                                           |
| successCount       | Integer      | Number of coupons that were successfully processed.                                                                                                 |
| unprocessedCoupons | Array        | An array of unprocessed coupons.                                                                                                                    |
| userId             | Integer      | Customer ID associated with the coupon series.                                                                                                      |
| couponSeriesId     | Integer      | The ID of the coupon series.                                                                                                                        |
| warnings           | Array        | An array containing any warnings generated during processing.                                                                                       |
| error              | Array        | An array containing any errors generated during processing.                                                                                         |
| success            | Boolean      | Indicates whether the operation was successful (`true` or `false`).                                                                                 |

```json Response 200
{
    "entity": {
        "totalCount": 2,
        "failedCount": 0,
        "successCount": 2,
        "unprocessedCoupons": [],
        "userId": 555567088,
        "couponSeriesId": 415446
    },
    "warnings": [],
    "errors": [],
    "success": true
}
```
```json No coupon series ID
{
    "warnings": [],
    "errors": [
        {
            "status": false,
            "code": 756,
            "message": "coupon seriesid is mandatory"
        }
    ],
    "success": false
}
```
```json Expiry date is in past or Reduce expiry date of expired coupon
{
    "entity": {
        "totalCount": 1,
        "failedCount": 1,
        "successCount": 0,
        "unprocessedCoupons": [
            {
                "expiryDate": "2024-08-13T19:44:00Z",
                "couponCode": "DIMPIOYMNQ",
                "errorCode": 690,
                "errorMessage": "Expiry date is past date"
            }
        ],
        "userId": 423691691,
        "couponSeriesId": 1136443
    },
    "warnings": [],
    "errors": [],
    "success": true
}
```
```json Partial Failure
{
    "entity": {
        "totalCount": 2,
        "failedCount": 1,
        "successCount": 1,
        "unprocessedCoupons": [
            {
                "expiryDate": "2024-09-23T05:53:00Z",
                "couponCode": "DECATH1000",
                "errorCode": 633,
                "errorMessage": "invalid coupon code"
            }
        ],
        "userId": 555567088,
        "couponSeriesId": 597437
    },
    "warnings": [],
    "errors": [],
    "success": true
}
```
```json Expiry date beyond series expiry for Active Coupon
{
    "entity": {
        "totalCount": 1,
        "failedCount": 1,
        "successCount": 0,
        "unprocessedCoupons": [
            {
                "expiryDate": "2030-10-30T00:00:00Z",
                "couponCode": "EP25M4M40P",
                "errorCode": 691,
                "errorMessage": "coupon code expiry date cannot be set beyond series expiry"
            }
        ],
        "userId": 555567088,
        "couponSeriesId": 597938
    },
    "warnings": [],
    "errors": [],
    "success": true
}
```
```json Expiry date beyond series expiry for Inactive Coupon
{
    "entity": {
        "totalCount": 1,
        "failedCount": 1,
        "successCount": 0,
        "unprocessedCoupons": [
            {
                "expiryDate": "2030-10-30T00:00:00Z",
                "couponCode": "EP25M4M40P",
                "errorCode": 691,
                "errorMessage": "coupon code expiry date cannot be set beyond series expiry"
            }
        ],
        "userId": 555567088,
        "couponSeriesId": 597938
    },
    "warnings": [],
    "errors": [],
    "success": true
}
```
```json Minimum coupon code
{
    "warnings": [],
    "errors": [
        {
            "status": false,
            "code": 756
            "message": "Atleast one coupon code and expiry date info is mandatory",         
        }
    ],
    "success": false
}
```
```json No userID
{
    "warnings": [],
    "errors": [
        {
            "status": false,
            "code": 695
            "message": "User Id is mandatory for common coupon to change expiry",         
        }
    ],
    "success": false
}
```

# API-specific error codes

| Error code | Description                                                      |
| :--------- | :--------------------------------------------------------------- |
| 756        | No coupon series ID is passed                                    |
| 690        | Expiry date is past date from coupon issual.                     |
| 633        | Invalid coupon code.                                             |
| 691        | Coupon code expiry date cannot be set beyond series expiry date. |
| 756        | Atleast one coupon code and expiry date info is mandatory.       |
| 695        | User Id is mandatory for common coupon to change expiry          |

# FAQs

1. Can we update the expiry date of an expired coupon?\
   Yes. You can change the expiry date of an expired coupon.
2. Can you update the expiry date of an expired coupon which belongs to an expired coupon series?\
   No. You cannot update the expiry date of a coupon that belongs to an expired coupon series.
3. Can you reduce the expiry date of a coupon?\
   Yes. You can change the expiry date to an earlier date.
4. Is there a limit to the number of times I can change the expiry date?\
   No. There is no limit.
5. Is the coupon expiry date different from the series expiry date?\
   Yes, the coupon code expiry is different from the series expiry date.
6. How is the coupon expiry date managed if changed through the API?\
   If the coupon code expiry date is changed using this API, this new expiry date is stored in the database and overrides the existing expiry date defined for the coupon code.