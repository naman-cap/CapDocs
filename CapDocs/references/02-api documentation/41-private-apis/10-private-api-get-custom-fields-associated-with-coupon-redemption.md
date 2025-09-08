---
title: Get Custom Fields Associated with Coupon Redemption
deprecated: false
hidden: false
metadata:
  robots: index
---
The API retrieves the custom fields and their associated values for coupon redemption.

> 🚧 Note
>
> This private API is accessible only through [Neo](https://docs.capillarytech.com/docs/neo-quick-start) dataflows.

# Prerequisites

*   [Access to Neo](https://docs.capillarytech.com/docs/access-management-neo#enabling-neo-extension-access--user-roles)
*   Authentication - Basic or OAuth authentication details
*   Access group resource - NA

# Resource information

|                                |                                          |
| :----------------------------- | :--------------------------------------- |
| URI to be used in Neo dataflow | /das/getCouponRedemptionCustomFieldsData |
| HTTP method                    | GET                                      |
| Pagination supported?          | Yes                                      |
| Rate limit                     | Based on Neo                             |
| Batch support                  | NA                                       |

# Request query parameters

| **Parameter** (Parameters marked with \* are mandatory) | **Data Type** | **Description**                                                                                                                                                  |
| ------------------------------------------------------- | ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| redemption\_ids\*                                       | Long          | A unique identifier for the redemption instance. It is the ID generated when a coupon is redeemed. You can provide multiple redemption IDs, separated by commas. |
| page                                                    | Integer       | Retrieve details of a specific page. Page count starts from 1. **Example**: page=2 retrieves data on page 2.                                                     |
| count                                                   | Integer       | Number of results to display per page. The default value is 10. The maximum supported value is 100.                                                              |

# Response parameters

| Parameter    | Data Type | Description                                    |
| ------------ | --------- | ---------------------------------------------- |
| redemptionId | Long      | Unique identifier for the redemption instance. |
| name         | String    | Name of the custom field.                      |
| value        | String    | Value associated with the custom field.        |

# Sample response

```json Sample Response
[
  {
    "redemptionId": 1046094,
    "name": "age",
    "value": "12"
  },
  {
    "redemptionId": 1046094,
    "name": "redem_gender",
    "value": "Female1"
  },
  {
    "redemptionId": 1046095,
    "name": "age",
    "value": "10"
  },
  {
    "redemptionId": 1046096,
    "name": "age",
    "value": "12"
  },
  {
    "redemptionId": 1046096,
    "name": "redem_gender",
    "value": "Female2"
  }
]
```

# Error codes

| Error Code | Description           |
| :--------- | :-------------------- |
| 400        | Bad Request           |
| 404        | Not Found             |
| 500        | Internal Server Error |