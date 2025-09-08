---
title: Get Custom Fields Associated with Coupon Redemption
excerpt: ''
api:
  file: v1.json
  operationId: get-custom-fields-associated-with-coupon-redemption
deprecated: false
hidden: true
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
The API retrieves the custom fields and their values associated with coupon redemption.

> 🚧 Note
> 
> This private API is accessible only through [Neo](https://docs.capillarytech.com/docs/neo-quick-start) dataflows.

# Prerequisites

-   [Access to Neo](https://docs.capillarytech.com/docs/access-management-neo#enabling-neo-extension-access--user-roles)
-   Authentication - Basic or OAuth authentication details
-   Access group resource - NA

# Resource Information

|                                |                                          |
| :----------------------------- | :--------------------------------------- |
| URI to be used in Neo dataflow | /das/getCouponRedemptionCustomFieldsData |
| HTTP method                    | GET                                      |
| Pagination supported?          | Yes                                      |
| Rate limit                     | Based on Neo                             |
| Batch support                  | NA                                       |

# Request Query Parameters

<HTMLBlock>{`
<table style="width: 100%; border-collapse: collapse;">
<thead>
<tr>
  <th style="border: 1px solid #ddd; padding: 8px;"><strong>Parameter</strong>(Parameters marked with * are mandatory)</th>
  <th style="border: 1px solid #ddd; padding: 8px;"><strong>Data Type</strong></th>
  <th style="border: 1px solid #ddd; padding: 8px;"><strong>Description</strong></th>
</tr>
</thead>
<tbody>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>redemption_ids*</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Long</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>A unique identifier for the redemption instance. It is the ID generated when a <a href="https://docs.capillarytech.com/reference/redeem-single-coupon">coupon is redeemed</a>. You can provide multiple redemption IDs, separated by commas.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>page</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Integer</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Retrieve details of a specific page. Page count starts from 1.<br><strong>Example</strong>: page=2 retrieves data on page 2.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>count</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Integer</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Number of results to display per page. The default value is 10. The maximum supported value is 100.</p>
</td>
</tr>
</tbody>
</table>
`}</HTMLBlock>

# Response Parameters

| Parameter              | Data Type | Description                                                     |
| ---------------------- | --------- | --------------------------------------------------------------- |
| redemptionId           | Long      | Unique identifier for the redemption instance.                  |
| redemptionCustomFields | Array     | Array containing the custom fields and their associated values. |
| name                   | String    | Name of the custom field.                                       |
| value                  | String    | Value associated with the custom field.                         |

```json Sample Response
[
    {
        "redemptionId": 1046094,
        "redemptionCustomFields": [
            {
                "name": "age",
                "value": "12"
            },
            {
                "name": "redem_gender",
                "value": "Female1"
            }
        ]
    },
    {
        "redemptionId": 1046095,
        "redemptionCustomFields": [
            {
                "name": "age",
                "value": "10"
            }
        ]
    },
    {
        "redemptionId": 1046096,
        "redemptionCustomFields": [
            {
                "name": "age",
                "value": "12"
            },
            {
                "name": "redem_gender",
                "value": "Female2"
            }
        ]
    }
]
```

# Error Codes

| Error Code | Description           |
| :--------- | :-------------------- |
| 400        | Bad Request           |
| 404        | Not Found             |
| 500        | Internal Server Error |