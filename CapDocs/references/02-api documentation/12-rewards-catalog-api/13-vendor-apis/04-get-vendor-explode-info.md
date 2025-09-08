---
title: Get Vendor Details
excerpt: ''
api:
  file: v1.json
  operationId: get-vendor-explode-info
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
This API enables you retrieve vendor details using Vendor ID

> 👍 Note
>
> For detailed information about our APIs and for hands-on testing, refer documentation in [API overview](https://docs.capillarytech.com/reference/apioverview) and step-by-step guide on making your first API call in [Make your first API call](https://docs.capillarytech.com/reference/make-your-first-api-call).

# Prerequisites

*   Authentication: Basic or OAuth authentication
*   Default access group

# API Specification

|                        |                                                            |
| :--------------------- | :--------------------------------------------------------- |
| URI                    | /api\_gateway/rewards/core/v1/vendor`\{vendorId\}`/details |
| HTTP Method            | GET                                                        |
| Pagination             | No                                                         |
| Batch support          | No                                                         |
| Rate limit information | None                                                       |

# API endpoint example

`https://eu.api.capillarytech.com/api_gateway/rewards/core/v1/vendor/36/details`

# Request path parameters

| Parameter Name | Data Type | Description                                                        |
| -------------- | --------- | ------------------------------------------------------------------ |
| vendorId\*     | Integer   | Unique identifier of the vendor. You can get the vendorID from UI. |

# Response parameters

| Parameter Name          | Description                                                                                                                                                                           |
| :---------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **`success`**           | An object containing details about the status of the request.                                                                                                                         |
| `code`                  | The status code of the request.                                                                                                                                                       |
| `message`               | The status message of the request.                                                                                                                                                    |
| **`vendor`**            | An object containing details on the vendor that's been created.                                                                                                                       |
| `- id`                  | A unique ID generated for the vendor upon successful creation.                                                                                                                        |
| `- name`                | The unique name of the vendor.                                                                                                                                                        |
| `- code`                | A unique identification code for the vendor.                                                                                                                                          |
| `- brandId`             | The unique brand ID of the organization.                                                                                                                                              |
| `- rank`                | The rank assigned to the vendor, used for ordering and prioritizing.                                                                                                                  |
| `- description`         | The description for the vendor.                                                                                                                                                       |
| **`enabled`**           | Indicates whether the vendor is enabled or disabled.                                                                                                                                  |
| `vendorDetails`         | An object containing details on the vendor, if any.                                                                                                                                   |
| `vendorTypes`           | The type of vendor. These are specialized vendor types with customized solutions for reward issuance in Capillary's system. Supported types: `LINKAJA`/`AIRSPRING`/`OVO`/`BONUSLINK`. |
| `- images`              | An object containing details on the images for the vendor, if any.                                                                                                                    |
| `--name`                | A unique name identifier for the image.                                                                                                                                               |
| `--id`                  | A unique ID generated when an image is created. This ID is the `file_handle` for the associated image in the Capillary system. To add an image, raise a ticket to the support team.   |
| `--altText`             | A descriptive text that conveys the meaning and context of the image.                                                                                                                 |
| `--url`                 | A direct link to the image.                                                                                                                                                           |
| `--isExternal`          | Indicates if the image is from an external source.                                                                                                                                    |
| `- videos`              | An object containing details on videos associated with the vendor.                                                                                                                    |
| `--name`                | A unique name identifier for the video.                                                                                                                                               |
| `--id`                  | A unique ID generated when a video is created. This ID is the `file_handle` for the associated video in the Capillary system. To add a video, raise a ticket to the support team.     |
| `--altText`             | A descriptive text that conveys the meaning and context of the video.                                                                                                                 |
| `--url`                 | A direct link to the video.                                                                                                                                                           |
| `--isExternal`          | Indicates if the video is from an external source.                                                                                                                                    |
| `type`                  | The type of vendor. Supported values: `REWARDS`. If set to `REWARDS`, it refers to a generic vendor used for issuing rewards.                                                         |
| `redemptionsConfigured` | Specifies the number of redemptions that have been configured.                                                                                                                        |
| `lastUpdatedOn`         | The last updated date and time of the vendor in Epoch time format.                                                                                                                    |
| `lastUpdatedOnDateTime` | The last updated date and time of the vendor in ISO 8601 format (YYYY-MM-DDTHH:MM:SSZ).                                                                                               |
| `encryptionRequired`    | Indicates if encryption is required for transactions with the vendor.                                                                                                                 |
| `lastUpdatedBy`         | The till ID of the user who last updated the vendor redemption record.                                                                                                                |
| `createdBy`             | The till ID of the user who created the vendor redemption.                                                                                                                            |
| `createdOn`             | Indicates the timestamp when the vendor redemption was created. The timestamp is in Epoch time format.                                                                                |
| `createdOnDateTime`     | Indicates the date and time when the vendor redemption was created, formatted in ISO 8601.                                                                                            |

<br />

```json Response
{
    "status": {
        "success": true,
        "code": 5001,
        "message": "Vendor fetched successfully"
    },
    "vendor": {
        "id": 59,
        "name": "DocVendor7",
        "code": "Doc007",
        "brandId": 61,
        "rank": null,
        "description": null,
        "enabled": true,
        "vendorTypes": null,
        "vendorDetails": {},
        "images": [
            {
                "name": "imageName001",
                "altText": null,
                "id": null,
                "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6RFSqYEgenJSDc0Wo_eoEKzxd0iXvTOO-LQ&s",
                "isExternal": true
            }
        ],
        "videos": [
            {
                "name": "videoName001",
                "altText": null,
                "id": null,
                "url": "https://videos.pexels.com/video-files/6265096/6265096-uhd_1440_2560_30fps.mp4",
                "isExternal": true
            }
        ],
        "type": "REWARDS",
        "redemptionsConfigured": 1,
        "createdOn": 1739783601000,
        "lastUpdatedOn": 1739783601000,
        "lastUpdatedOnDateTime": "2025-02-17T09:13:21Z",
        "createdBy": null,
        "lastUpdatedBy": null,
        "createdOnDateTime": "2025-02-17T09:13:21Z",
        "encryptionRequired": false
    }
}
```
```json Failure: Invalid VendorID
{
    "status": {
        "success": false,
        "code": 5004,
        "message": "Vendor not found"
    },
    "vendor": null
}
```

# API-specific error codes

| Error Code | Description       |
| :--------- | :---------------- |
| 5004       | Invalid Vendor ID |