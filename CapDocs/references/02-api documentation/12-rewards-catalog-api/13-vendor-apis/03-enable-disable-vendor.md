---
title: Enable or Disable a Vendor
excerpt: ''
api:
  file: v1.json
  operationId: enable-disable-vendor
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
A vendor is an external third-party brand you can use to fulfil your rewards. This API allows you to enable or disable a vendor.

> 👍 Note
>
> For detailed information about our APIs and for hands-on testing, refer documentation in [API overview](https://docs.capillarytech.com/reference/apioverview) and step-by-step guide on making your first API call in [Make your first API call](https://docs.capillarytech.com/reference/make-your-first-api-call).

# Prerequisites

*   Authentication: Basic/OAuth authentication
*   Default access group

# Resource information

|               |                                                                                       |
| :------------ | :------------------------------------------------------------------------------------ |
| URI           | /api\_gateway/rewards/core/v1/vendor/`{vendorId}`/status/`{action}`/brand/`{brandId}` |
| HTTP method   | PUT                                                                                   |
| Pagination    | NA                                                                                    |
| Rate limit    | NA                                                                                    |
| Batch support | NA                                                                                    |

# API endpoint example

Enabling a vendor: `https://eu.api.capillarytech.com/api_gateway/rewards/core/v1/vendor/5/status/enable/brand/3`

Disabling a vendor: `https://eu.api.capillarytech.com/api_gateway/rewards/core/v1/vendor/5/status/disable/brand/3`

# Path parameters

<Table>
  <thead>
    <tr>
      <th>
        Parameter
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
        vendorId
      </td>

      <td>
        long
      </td>

      <td>
        Unique identifier of the vendor.
      </td>
    </tr>

    <tr>
      <td>
        brandId
      </td>

      <td>
        Integer
      </td>

      <td>
        Unique identifier of the brand.
      </td>
    </tr>

    <tr>
      <td>
        action
      </td>

      <td>
        Enum
      </td>

      <td>
        Enable or disable the vendor. Supported values:
        `enable`: enable the vendor.
        `disable`: disable the vendor
      </td>
    </tr>
  </tbody>
</Table>

# Response body

```json Enable a vendor
{
    "status": {
        "success": true,
        "code": 5006,
        "message": "Vendor status updated successfully"
    },
    "vendorRo": {
        "id": 133,
        "name": "VENDORHIRE",
        "brandId": 61,
        "enabled": true,
        "isEncryptionRequired": false,
        "vendorTypes": null,
        "vendorDetails": null,
        "type": "REWARDS",
        "createdBy": 75161973,
        "lastUpdatedBy": 75161973,
        "createdOn": 1747307907000,
        "lastUpdatedOn": 1748350778000,
        "createdOnDateTime": "2025-05-15T11:18:27Z",
        "lastUpdatedOnDateTime": "2025-05-27T12:59:38Z",
        "rank": 1,
        "code": "Doc0036",
        "description": "The top priority vendor",
        "images": null,
        "videos": null,
        "encryptionRequired": false
    }
}
```
```json Disable a vendor
{
    "status": {
        "success": true,
        "code": 5006,
        "message": "Vendor status updated successfully"
    },
    "vendorRo": {
        "id": 133,
        "name": "VENDORHIRE",
        "brandId": 61,
        "enabled": false,
        "isEncryptionRequired": false,
        "vendorTypes": null,
        "vendorDetails": null,
        "type": "REWARDS",
        "createdBy": 75161973,
        "lastUpdatedBy": 75161973,
        "createdOn": 1747307907000,
        "lastUpdatedOn": 1748350778000,
        "createdOnDateTime": "2025-05-15T11:18:27Z",
        "lastUpdatedOnDateTime": "2025-05-27T12:59:38Z",
        "rank": 1,
        "code": "Doc0036",
        "description": "The top priority vendor",
        "images": null,
        "videos": null,
        "encryptionRequired": false
    }
}
```

# Response parameters

| Parameter                   | Description                                                                                                      |
| :-------------------------- | :--------------------------------------------------------------------------------------------------------------- |
| **`status`**                | Object containing details about the status of the request.                                                       |
| `- success`                 | Indicates whether the request was successful. `true`: Request was successful. `false`: Request was unsuccessful. |
| `- code`                    | The status code of the request.                                                                                  |
| `- message`                 | The status message of the request.                                                                               |
| **`lastUpdatedOn`**         | Indicates the timestamp when the vendor redemption was updated. The timestamp is in Epoch time format.           |
| **`lastUpdatedBy`**         | The till ID of the user who last updated the vendor redemption record.                                           |
| **`createdBy`**             | The till ID of the user who created the vendor redemption.                                                       |
| **`createdOn`**             | Indicates the timestamp when the vendor redemption was created. The timestamp is in Epoch time format.           |
| **`createdOnDateTime`**     | Indicates the date and time when the vendor redemption was created, formatted in ISO 8601.                       |
| **`lastUpdatedOnDateTime`** | Indicates the date and time when the vendor redemption was updated, formatted in ISO 8601.                       |

# API error codes

| Code | Description     | Reason                         |
| :--- | :-------------- | :----------------------------- |
| 3004 | Brand not found | `brandId` provided is invalid. |