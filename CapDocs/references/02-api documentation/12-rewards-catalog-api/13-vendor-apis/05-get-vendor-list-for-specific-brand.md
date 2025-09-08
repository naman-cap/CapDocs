---
title: Vendor List for Specific Brand
excerpt: ''
api:
  file: v1.json
  operationId: get-vendor-list-for-specific-brand
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
This API is used to retrieve details of Vendor List of a specific brand using Brand ID.

> 👍 Note
>
> For detailed information about our APIs and for hands-on testing, refer documentation in [API overview](https://docs.capillarytech.com/reference/apioverview) and  step-by-step guide on making your first API call in [Make your first API call](https://docs.capillarytech.com/reference/make-your-first-api-call) .

# Prerequisites

*   Authentication: Basic or OAuth authentication
*   Default access group

# API Specification

|                        |                                             |
| :--------------------- | :------------------------------------------ |
| URI                    | /api_gateway/rewards/core/v1/vendor/brand/1 |
| HTTP Method            | GET                                         |
| Pagination             | Yes                                         |
| Batch support          | No                                          |
| Rate limit information | None                                        |

# API endpoint example

`https://eu.api.capillarytech.com/api_gateway/rewards/core/v1/vendor/brand/1?enabled=false`

# Request path parameters

| Parameter Name | Data Type | Description                                                                                                                           |
| -------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| brandId*       | Integer   | Unique identifier of the brand. You can get the brand ID from this [API](https://docs.capillarytech.com/reference/retrieve-brand-id). |

# Request query parameters

<Table align={["left","left","left"]}>
  <thead>
    <tr>
      <th>
        Parameter Name
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
        `enabled`
      </td>

      <td>
        Boolean
      </td>

      <td>
        Filters the vendor list to show only those that are enabled. Supported values: `true` or `false`.
      </td>
    </tr>

    <tr>
      <td>
        `sortBy`
      </td>

      <td>
        Enum
      </td>

      <td>
        Sorts the returned vendor list. Supported values: `lastUpdatedOn`.
      </td>
    </tr>

    <tr>
      <td>
        `orderBy`
      </td>

      <td>
        Enum
      </td>

      <td>
        Specifies the order in which results should be sorted. Supported values: `"ASC"` for ascending, `"DESC"` for descending. Default value is `"DESC"`.
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
        Filters the vendor list based on the specified vendor code.
      </td>
    </tr>

    <tr>
      <td>
        `type`
      </td>

      <td>
        String
      </td>

      <td>
        Filters the vendor list based on the specific vendor type.
        Supported values : `POINTS` and `REWARDS`.
        Note: The default value is REWARDS, even if the query parameter `type` is not set.
      </td>
    </tr>
  </tbody>
</Table>

<br />

```http
https://eu.api.capillarytech.com/api_gateway/rewards/core/v1/vendor/brand/1?enabled=false
```

# Response Parameters

| Parameter Name          | Description                                                                                                                                                                                                                                                                                            |
| :---------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`success`**           | Indicates whether the request was successful. `true`: Request was successful. `false`: Request was unsuccessful.                                                                                                                                                                                       |
| `code`                  | The status code of the request.                                                                                                                                                                                                                                                                        |
| `message`               | A message describing the status of the response.                                                                                                                                                                                                                                                       |
| **`vendorList`**        | An object containing details of the vendors for the organization.                                                                                                                                                                                                                                      |
| `- id`                  | A unique identifier for the vendor.                                                                                                                                                                                                                                                                    |
| `- name`                | The name of the vendor.                                                                                                                                                                                                                                                                                |
| `- brandId`             | The identifier for the brand associated with the vendor.                                                                                                                                                                                                                                               |
| `- enabled`             | Indicates whether the vendor is enabled or disabled.                                                                                                                                                                                                                                                   |
| `- vendorTypes`         | The type of vendor. These are specialized vendor types with customized solutions for reward issuance in Capillary's system. Possible types: `LINKAJA`/`AIRSPRING`/`OVO`/`BONUSLINK`.                                                                                                                   |
| `- vendorDetails`       | Additional details about the vendor.                                                                                                                                                                                                                                                                   |
| `- type`                | The type of vendor. Possible Values: `REWARDS`/`POINTS`. **`REWARDS`**: If the type is set to `REWARDS`, it refers to a generic vendor used for issuing rewards. **`POINTS`**: This is a vendor type that manages the external points system, where each brand can have only one `POINTS` type vendor. |
| `- rank`                | The rank assigned to the vendor, which can be used for ordering and prioritizing.                                                                                                                                                                                                                      |
| `- code`                | A unique identification code for the vendor.                                                                                                                                                                                                                                                           |
| `- description`         | The description for the vendor.                                                                                                                                                                                                                                                                        |
| `- images`              | An object containing details on images associated with the vendor.                                                                                                                                                                                                                                     |
| `--name`                | A unique name identifier for the image.                                                                                                                                                                                                                                                                |
| `--id`                  | A unique ID generated when creating the image.                                                                                                                                                                                                                                                         |
| `--altText`             | A descriptive text that conveys the meaning and context of the image.                                                                                                                                                                                                                                  |
| `--url`                 | A direct link to the image.                                                                                                                                                                                                                                                                            |
| `--isExternal`          | Indicates if the image is from an external source.                                                                                                                                                                                                                                                     |
| `- videos`              | An object containing details on videos associated with the vendor.                                                                                                                                                                                                                                     |
| `--name`                | A unique name identifier for the video.                                                                                                                                                                                                                                                                |
| `--id`                  | A unique ID generated when creating the video.                                                                                                                                                                                                                                                         |
| `--altText`             | A descriptive text that conveys the meaning and context of the video.                                                                                                                                                                                                                                  |
| `--url`                 | A direct link to the video.                                                                                                                                                                                                                                                                            |
| `--isExternal`          | Indicates if the video is from an external source.                                                                                                                                                                                                                                                     |
| `- lastUpdatedOn`       | The last updated date and time of the vendor in Epoch format.                                                                                                                                                                                                                                          |
| `lastUpdatedOnDateTime` | The last updated date and time of the vendor in ISO 8601 format (YYYY-MM-DDTHH:MM:SSZ).                                                                                                                                                                                                                |
| `-encryptionRequired`   | Indicates if encryption is required for transactions with the vendor.                                                                                                                                                                                                                                  |
| `lastUpdatedBy`         | The till ID of the user who last updated the vendor redemption record.                                                                                                                                                                                                                                 |
| `createdBy`             | The till ID of the user who created the vendor redemption.                                                                                                                                                                                                                                             |
| `createdOn`             | Indicates the timestamp when the vendor redemption was created. The timestamp is in Epoch time format.                                                                                                                                                                                                 |
| `createdOnDateTime`     | Indicates the date and time when the vendor redemption was created, formatted in ISO 8601.                                                                                                                                                                                                             |

<br />

```json When enabled=false
{
    "status": {
        "success": true,
        "code": 5001,
        "message": "Vendor fetched successfully"
    },
    "vendorList": [
        {
            "id": 51,
            "name": "testVendor-016",
            "brandId": 61,
            "enabled": true,
            "vendorTypes": null,
            "vendorDetails": {},
            "type": "REWARDS",
            "rank": 1,
            "code": "100737",
            "description": "description",
            "images": [],
            "videos": [],
            "lastUpdatedOn": 1739777347000,
            "lastUpdatedOnDateTime": "2025-02-17T07:29:07Z",
            "encryptionRequired": false
        },
        {
            "id": 44,
            "name": "Clothing",
            "brandId": 61,
            "enabled": true,
            "vendorTypes": null,
            "vendorDetails": {},
            "type": "REWARDS",
            "rank": null,
            "code": "44",
            "description": null,
            "images": [],
            "videos": [],
            "lastUpdatedOn": 1739438226000,
            "lastUpdatedOnDateTime": "2025-02-13T09:17:06Z",
            "encryptionRequired": false
        },
        {
            "id": 47,
            "name": "Nee",
            "brandId": 61,
            "enabled": true,
            "vendorTypes": null,
            "vendorDetails": {
                "123": "********************************************"
            },
            "type": "REWARDS",
            "rank": null,
            "code": "47",
            "description": null,
            "images": [],
            "videos": [],
            "lastUpdatedOn": 1739438226000,
            "lastUpdatedOnDateTime": "2025-02-13T09:17:06Z",
            "encryptionRequired": false
        },
        {
            "id": 52,
            "name": "DocVendor",
            "brandId": 61,
            "enabled": true,
            "vendorTypes": null,
            "vendorDetails": {},
            "type": "REWARDS",
            "rank": 1,
            "code": "Doc001",
            "description": "description",
            "images": [],
            "videos": [],
            "lastUpdatedOn": 1739777392000,
            "lastUpdatedOnDateTime": "2025-02-17T07:29:52Z",
            "encryptionRequired": false
        },
        {
            "id": 53,
            "name": "DocVendor2",
            "brandId": 61,
            "enabled": true,
            "vendorTypes": null,
            "vendorDetails": {},
            "type": "REWARDS",
            "rank": 1,
            "code": "Doc002",
            "description": "description",
            "images": [],
            "videos": [],
            "lastUpdatedOn": 1739777433000,
            "lastUpdatedOnDateTime": "2025-02-17T07:30:33Z",
            "encryptionRequired": false
        },
        {
            "id": 55,
            "name": "DocVendor3",
            "brandId": 61,
            "enabled": true,
            "vendorTypes": null,
            "vendorDetails": {},
            "type": "REWARDS",
            "rank": 1,
            "code": "Doc003",
            "description": "description",
            "images": [],
            "videos": [],
            "lastUpdatedOn": 1739781911000,
            "lastUpdatedOnDateTime": "2025-02-17T08:45:11Z",
            "encryptionRequired": false
        },
        {
            "id": 56,
            "name": "DocVendor4",
            "brandId": 61,
            "enabled": true,
            "vendorTypes": null,
            "vendorDetails": {},
            "type": "REWARDS",
            "rank": 1,
            "code": "Doc004",
            "description": "thesunwasearlyandbrightlightingupthefieldofgrasswithesunwasearlyandbrightlightingupthefieldofgrasswithesunwasearlyandbrightlightingupthefieldofgrasswithesunwasearlyandbrightlightingupthefieldofgrasswithesunwasearlyandbrightlightingupthefieldofgrasswiabcd",
            "images": [],
            "videos": [],
            "lastUpdatedOn": 1739782052000,
            "lastUpdatedOnDateTime": "2025-02-17T08:47:32Z",
            "encryptionRequired": false
        },
        {
            "id": 57,
            "name": "DocVendor5",
            "brandId": 61,
            "enabled": true,
            "vendorTypes": null,
            "vendorDetails": {},
            "type": "REWARDS",
            "rank": 1,
            "code": "Doc005",
            "description": "thesunwasearlyandbrightlightingupthefieldofgrasswithesunwasearlyandbrightlightingupthefieldofgrasswithesunwasearlyandbrightlightingupthefieldofgrasswithesunwasearlyandbrightlightingupthefieldofgrasswithesunwasearlyandbrightlightingupthefieldofgrasswiabcdthesunwasearlyandbrightlightingupthefieldofgrasswithesunwasearlyandbrightlightingupthefieldofgrasswithesunwasearlyandbrightlightingupthefieldofgrasswithesunwasearlyandbrightlightingupthefieldofgrasswithesunwasearlyandbrightlightingupthefieldofgrasswiabcdthesunwasearlyandbrightlightingupthefieldofgrasswithesunwasearlyandbrightlightingupthefieldofgrasswithesunwasearlyandbrightlightingupthefieldofgrasswithesunwasearlyandbrightlightingupthefieldofgrasswithesunwasearlyandbrightlightingupthefieldofgrasswiabcdthesunwasearlyandbrightlightingupthefieldofgrasswithesunwasearlyandbrightlightingupthefieldofgrasswithesunwasearlyandbrightlightingupthefieldofgrasswithesunwasearlyandbrightlightingupthefieldofgrasswithesunwasearlyandbrightlightingupthefieldofgrasswiabcd",
            "images": [],
            "videos": [],
            "lastUpdatedOn": 1739782082000,
            "lastUpdatedOnDateTime": "2025-02-17T08:48:02Z",
            "encryptionRequired": false
        },
        {
            "id": 58,
            "name": "DocVendor6",
            "brandId": 61,
            "enabled": true,
            "vendorTypes": null,
            "vendorDetails": {},
            "type": "REWARDS",
            "rank": null,
            "code": "Doc006",
            "description": null,
            "images": [
                {
                    "name": "imageName001",
                    "altText": null,
                    "id": null,
                    "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6RFSqYEgenJSDc0Wo_eoEKzxd0iXvTOO-LQ&s",
                    "isExternal": true
                }
            ],
            "videos": [],
            "lastUpdatedOn": 1739783325000,
            "lastUpdatedOnDateTime": "2025-02-17T09:08:45Z",
            "encryptionRequired": false
        },
        {
            "id": 59,
            "name": "DocVendor7",
            "brandId": 61,
            "enabled": true,
            "vendorTypes": null,
            "vendorDetails": {},
            "type": "REWARDS",
            "rank": null,
            "code": "Doc007",
            "description": null,
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
            "lastUpdatedOn": 1739783601000,
            "lastUpdatedOnDateTime": "2025-02-17T09:13:21Z",
            "encryptionRequired": false
        },
        {
            "id": 61,
            "name": "DocVendor9",
            "brandId": 61,
            "enabled": true,
            "vendorTypes": null,
            "vendorDetails": {},
            "type": "REWARDS",
            "rank": null,
            "code": "Doc009",
            "description": null,
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
            "lastUpdatedOn": 1739791885000,
            "lastUpdatedOnDateTime": "2025-02-17T11:31:25Z",
            "encryptionRequired": false
        },
        {
            "id": 63,
            "name": "DocVendor10",
            "brandId": 61,
            "enabled": true,
            "vendorTypes": null,
            "vendorDetails": {},
            "type": "REWARDS",
            "rank": null,
            "code": "Doc010",
            "description": null,
            "images": [],
            "videos": [],
            "lastUpdatedOn": 1739855739000,
            "lastUpdatedOnDateTime": "2025-02-18T05:15:39Z",
            "encryptionRequired": false
        },
        {
            "id": 64,
            "name": "DocVendor11",
            "brandId": 61,
            "enabled": true,
            "vendorTypes": null,
            "vendorDetails": {},
            "type": "REWARDS",
            "rank": null,
            "code": "Doc011",
            "description": null,
            "images": [
                {
                    "name": "imageName001",
                    "altText": null,
                    "id": "bdacb6a7-d4ce-4dea-bf38-134a1200b8b9",
                    "url": "https://s3.amazonaws.com/fileservice.in/solutions/c3d28860-1e11-4a01-8a7c-ea12b56.jpeg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCWV1LXdlc3QtMSJHMEUCIAXwTUz5Dfh2tBPRKcMVkL1xU%2B%2B19fTIZeOPtck2I8QPAiEA%2B9Wp2mvKDbjvbHGQQYVWN3gjzxgAGc4bZ0iEU09wtQkqugIIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw1MDI4MTI3NzkyNjciDA7ia22iVxU7nAbnhyqOAg4TFHTVxe8xzxyLWPQvBNja45Lwb2ZAL%2F%2BN1VQDXX6cNY5sOiT1%2FGB7cXqAy2xVBOeC9er1mQdWflcrdYJBiTOsLnsG7u5x9NYYSOAfWFEp5xtxTG%2BmdWWl4OdE4BZwyoDEmKjBR%2BR3jm7nBop5ZhYRoWxyOhX%2BVlnX3JmTng%2BPYH6USdEbpfmDw83KAA2QTYrCO463hxEwgsBB6a%2Fus%2BadZjZlyIHBxo%2FmfnGH5qiPgX94S7g5iYRLuwvYxO28sLqTFTAPYY5QPaEWbuT4X4whfNXSsgNVr5tcQa%2B6UoiI0biU0nzr1SJeceK6WUamt6Os6rzw0KDYbHIOxYWnCgFkSzK3MiB1jVRR6H3N0DCErdC9BjqdAQq9nL8BJoImTZ9u00EDqo5uZhySGh7BLpAt4mQO%2Fra%2Bp9g9xjSTtUEXsBzdHa8l0g%2FH02JyHADqqcWisFWuvPONl91PyrYJtbgqO2ojAYvsaHmx%2FzxhYeZ2b5jqBsaIERu0FtxBN05Z1E6mUMWxmCfFMBafnlTz9TYRA8enpo%2FdoKcjgcEuuoRhpefogOHh3qhyG0E0fHeUhd7PuGU%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20250218T051557Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3599&X-Amz-Credential=ASIAXKEP2EMBVGDWQZ6R%2F20250218%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=dbdc8746ad5823b7f64932ae27783fd6e3cc583e14c44a888484b81c1f0641e2",
                    "isExternal": false
                }
            ],
            "videos": [],
            "lastUpdatedOn": 1739855757000,
            "lastUpdatedOnDateTime": "2025-02-18T05:15:57Z",
            "encryptionRequired": false
        },
        {
            "id": 68,
            "name": "DocVendor12",
            "brandId": 61,
            "enabled": true,
            "vendorTypes": null,
            "vendorDetails": {},
            "type": "REWARDS",
            "rank": null,
            "code": "Doc012",
            "description": null,
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
            "lastUpdatedOn": 1740637585000,
            "lastUpdatedOnDateTime": "2025-02-27T06:26:25Z",
            "encryptionRequired": false
        },
        {
            "id": 69,
            "name": "DocVendor13",
            "brandId": 61,
            "enabled": true,
            "vendorTypes": null,
            "vendorDetails": {},
            "type": "REWARDS",
            "rank": null,
            "code": "Doc013",
            "description": null,
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
            "lastUpdatedOn": 1740637658000,
            "lastUpdatedOnDateTime": "2025-02-27T06:27:38Z",
            "encryptionRequired": false
        },
        {
            "id": 86,
            "name": "VendorDoc",
            "brandId": 61,
            "enabled": true,
            "vendorTypes": null,
            "vendorDetails": {},
            "type": "REWARDS",
            "rank": null,
            "code": "Doc100",
            "description": null,
            "images": [],
            "videos": [],
            "lastUpdatedOn": 1741171688000,
            "lastUpdatedOnDateTime": "2025-03-05T10:48:08Z",
            "encryptionRequired": false
        }
    ]
}
```
```json When enabled=true
{
    "status": {
        "success": true,
        "code": 5001,
        "message": "Vendor fetched successfully"
    },
    "vendorList": [
        {
            "id": 21,
            "name": "Delta",
            "brandId": 1,
            "enabled": true,
            "vendorTypes": null,
            "vendorDetails": {},
            "type": "REWARDS",
            "lastUpdatedOn": 1717833026000,
            "encryptionRequired": false
        },
        {
            "id": 32,
            "name": "Dick's Sporting Goods",
            "brandId": 1,
            "enabled": true,
            "vendorTypes": null,
            "vendorDetails": {},
            "type": "REWARDS",
            "lastUpdatedOn": 1723837313000,
            "encryptionRequired": false
        },
        {
            "id": 31,
            "name": "Marriot",
            "brandId": 1,
            "enabled": true,
            "vendorTypes": null,
            "vendorDetails": {},
            "type": "REWARDS",
            "lastUpdatedOn": 1723836103000,
            "encryptionRequired": false
        },
        {
            "id": 20,
            "name": "Points for Good",
            "brandId": 1,
            "enabled": true,
            "vendorTypes": null,
            "vendorDetails": {},
            "type": "REWARDS",
            "lastUpdatedOn": 1717833026000,
            "encryptionRequired": false
        },
        {
            "id": 22,
            "name": "Qwikzozo",
            "brandId": 1,
            "enabled": true,
            "vendorTypes": null,
            "vendorDetails": {},
            "type": "REWARDS",
            "lastUpdatedOn": 1718002449000,
            "encryptionRequired": false
        },
        {
            "id": 28,
            "name": "Qwikzozoo",
            "brandId": 1,
            "enabled": true,
            "vendorTypes": null,
            "vendorDetails": {
                "clientSecret": "****************************************************"
            },
            "type": "REWARDS",
            "lastUpdatedOn": 1721042314000,
            "encryptionRequired": false
        },
        {
            "id": 23,
            "name": "Sweepstakes",
            "brandId": 1,
            "enabled": true,
            "vendorTypes": null,
            "vendorDetails": {},
            "type": "REWARDS",
            "lastUpdatedOn": 1718004095000,
            "encryptionRequired": false
        },
        {
            "id": 30,
            "name": "Target",
            "brandId": 1,
            "enabled": true,
            "vendorTypes": null,
            "vendorDetails": {},
            "type": "REWARDS",
            "lastUpdatedOn": 1721722266000,
            "encryptionRequired": false
        },
        {
            "id": 27,
            "name": "test1",
            "brandId": 1,
            "enabled": true,
            "vendorTypes": null,
            "vendorDetails": {
                "test": "********************************************"
            },
            "type": "REWARDS",
            "lastUpdatedOn": 1721030412000,
            "encryptionRequired": false
        },
        {
            "id": 29,
            "name": "test2",
            "brandId": 1,
            "enabled": true,
            "vendorTypes": null,
            "vendorDetails": {
                "clientSecret": "****************************************************"
            },
            "type": "REWARDS",
            "lastUpdatedOn": 1721042619000,
            "encryptionRequired": false
        },
        {
            "id": 35,
            "name": "test5",
            "brandId": 1,
            "enabled": true,
            "vendorTypes": null,
            "vendorDetails": {
                "clientSecret": "****************************************************"
            },
            "type": "REWARDS",
            "lastUpdatedOn": 1727331817000,
            "encryptionRequired": false
        },
        {
            "id": 36,
            "name": "test6",
            "brandId": 1,
            "enabled": true,
            "vendorTypes": null,
            "vendorDetails": {
                "clientSecret": "************************************************"
            },
            "type": "REWARDS",
            "lastUpdatedOn": 1727331838000,
            "encryptionRequired": false
        },
        {
            "id": 37,
            "name": "test7",
            "brandId": 1,
            "enabled": true,
            "vendorTypes": null,
            "vendorDetails": {
                "clientSecret": "************************************************"
            },
            "type": "REWARDS",
            "lastUpdatedOn": 1727332433000,
            "encryptionRequired": false
        },
        {
            "id": 38,
            "name": "test8",
            "brandId": 1,
            "enabled": true,
            "vendorTypes": null,
            "vendorDetails": {},
            "type": "REWARDS",
            "lastUpdatedOn": 1727339906000,
            "encryptionRequired": false
        }
    ]
}
```
```json Failure: Invalid Brand ID
{
    "status": {
        "success": false,
        "code": 3004,
        "message": "Brand not found"
    }
}
```
```Text With sortBy=lastUpdatedOn
{
    "status": {
        "success": true,
        "code": 5001,
        "message": "Vendor fetched successfully"
    },
    "vendorList": [
        {
            "id": 44,
            "name": "Clothing",
            "brandId": 61,
            "enabled": true,
            "vendorTypes": null,
            "vendorDetails": {},
            "type": "REWARDS",
            "rank": null,
            "code": "44",
            "description": null,
            "images": [],
            "videos": [],
            "lastUpdatedOn": 1739438226000,
            "createdOn": 1735816449000,
            "createdOnDateTime": "2025-01-02T11:14:09Z",
            "lastUpdatedOnDateTime": "2025-02-13T09:17:06Z",
            "createdBy": null,
            "lastUpdatedBy": null,
            "encryptionRequired": false
        },
        {
            "id": 47,
            "name": "Nee",
            "brandId": 61,
            "enabled": true,
            "vendorTypes": null,
            "vendorDetails": {
                "123": "********************************************"
            },
            "type": "REWARDS",
            "rank": null,
            "code": "47",
            "description": null,
            "images": [],
            "videos": [],
            "lastUpdatedOn": 1739438226000,
            "createdOn": 1738646869000,
            "createdOnDateTime": "2025-02-04T05:27:49Z",
            "lastUpdatedOnDateTime": "2025-02-13T09:17:06Z",
            "createdBy": null,
            "lastUpdatedBy": null,
            "encryptionRequired": false
        },
        {
            "id": 51,
            "name": "testVendor-016",
            "brandId": 61,
            "enabled": true,
            "vendorTypes": null,
            "vendorDetails": {},
            "type": "REWARDS",
            "rank": 1,
            "code": "100737",
            "description": "description",
            "images": [],
            "videos": [],
            "lastUpdatedOn": 1739777347000,
            "createdOn": 1739777347000,
            "createdOnDateTime": "2025-02-17T07:29:07Z",
            "lastUpdatedOnDateTime": "2025-02-17T07:29:07Z",
            "createdBy": null,
            "lastUpdatedBy": null,
            "encryptionRequired": false
        },
        {
            "id": 52,
            "name": "DocVendor",
            "brandId": 61,
            "enabled": true,
            "vendorTypes": null,
            "vendorDetails": {},
            "type": "REWARDS",
            "rank": 1,
            "code": "Doc001",
            "description": "description",
            "images": [],
            "videos": [],
            "lastUpdatedOn": 1739777392000,
            "createdOn": 1739777392000,
            "createdOnDateTime": "2025-02-17T07:29:52Z",
            "lastUpdatedOnDateTime": "2025-02-17T07:29:52Z",
            "createdBy": null,
            "lastUpdatedBy": null,
            "encryptionRequired": false
        },
        {
            "id": 53,
            "name": "DocVendor2",
            "brandId": 61,
            "enabled": true,
            "vendorTypes": null,
            "vendorDetails": {},
            "type": "REWARDS",
            "rank": 1,
            "code": "Doc002",
            "description": "description",
            "images": [],
            "videos": [],
            "lastUpdatedOn": 1739777433000,
            "createdOn": 1739777433000,
            "createdOnDateTime": "2025-02-17T07:30:33Z",
            "lastUpdatedOnDateTime": "2025-02-17T07:30:33Z",
            "createdBy": null,
            "lastUpdatedBy": null,
            "encryptionRequired": false
        },
        {
            "id": 55,
            "name": "DocVendor3",
            "brandId": 61,
            "enabled": true,
            "vendorTypes": null,
            "vendorDetails": {},
            "type": "REWARDS",
            "rank": 1,
            "code": "Doc003",
            "description": "description",
            "images": [],
            "videos": [],
            "lastUpdatedOn": 1739781911000,
            "createdOn": 1739781911000,
            "createdOnDateTime": "2025-02-17T08:45:11Z",
            "lastUpdatedOnDateTime": "2025-02-17T08:45:11Z",
            "createdBy": null,
            "lastUpdatedBy": null,
            "encryptionRequired": false
        },
        {
            "id": 56,
            "name": "DocVendor4",
            "brandId": 61,
            "enabled": true,
            "vendorTypes": null,
            "vendorDetails": {},
            "type": "REWARDS",
            "rank": 1,
            "code": "Doc004",
            "description": "thesunwasearlyandbrightlightingupthefieldofgrasswithesunwasearlyandbrightlightingupthefieldofgrasswithesunwasearlyandbrightlightingupthefieldofgrasswithesunwasearlyandbrightlightingupthefieldofgrasswithesunwasearlyandbrightlightingupthefieldofgrasswiabcd",
            "images": [],
            "videos": [],
            "lastUpdatedOn": 1739782052000,
            "createdOn": 1739782052000,
            "createdOnDateTime": "2025-02-17T08:47:32Z",
            "lastUpdatedOnDateTime": "2025-02-17T08:47:32Z",
            "createdBy": null,
            "lastUpdatedBy": null,
            "encryptionRequired": false
        },
        {
            "id": 57,
            "name": "DocVendor5",
            "brandId": 61,
            "enabled": true,
            "vendorTypes": null,
            "vendorDetails": {},
            "type": "REWARDS",
            "rank": 1,
            "code": "Doc005",
            "description": "thesunwasearlyandbrightlightingupthefieldofgrasswithesunwasearlyandbrightlightingupthefieldofgrasswithesunwasearlyandbrightlightingupthefieldofgrasswithesunwasearlyandbrightlightingupthefieldofgrasswithesunwasearlyandbrightlightingupthefieldofgrasswiabcdthesunwasearlyandbrightlightingupthefieldofgrasswithesunwasearlyandbrightlightingupthefieldofgrasswithesunwasearlyandbrightlightingupthefieldofgrasswithesunwasearlyandbrightlightingupthefieldofgrasswithesunwasearlyandbrightlightingupthefieldofgrasswiabcdthesunwasearlyandbrightlightingupthefieldofgrasswithesunwasearlyandbrightlightingupthefieldofgrasswithesunwasearlyandbrightlightingupthefieldofgrasswithesunwasearlyandbrightlightingupthefieldofgrasswithesunwasearlyandbrightlightingupthefieldofgrasswiabcdthesunwasearlyandbrightlightingupthefieldofgrasswithesunwasearlyandbrightlightingupthefieldofgrasswithesunwasearlyandbrightlightingupthefieldofgrasswithesunwasearlyandbrightlightingupthefieldofgrasswithesunwasearlyandbrightlightingupthefieldofgrasswiabcd",
            "images": [],
            "videos": [],
            "lastUpdatedOn": 1739782082000,
            "createdOn": 1739782082000,
            "createdOnDateTime": "2025-02-17T08:48:02Z",
            "lastUpdatedOnDateTime": "2025-02-17T08:48:02Z",
            "createdBy": null,
            "lastUpdatedBy": null,
            "encryptionRequired": false
        },
        {
            "id": 58,
            "name": "DocVendor6",
            "brandId": 61,
            "enabled": true,
            "vendorTypes": null,
            "vendorDetails": {},
            "type": "REWARDS",
            "rank": null,
            "code": "Doc006",
            "description": null,
            "images": [
                {
                    "name": "imageName001",
                    "altText": null,
                    "id": null,
                    "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6RFSqYEgenJSDc0Wo_eoEKzxd0iXvTOO-LQ&s",
                    "isExternal": true
                }
            ],
            "videos": [],
            "lastUpdatedOn": 1739783325000,
            "createdOn": 1739783325000,
            "createdOnDateTime": "2025-02-17T09:08:45Z",
            "lastUpdatedOnDateTime": "2025-02-17T09:08:45Z",
            "createdBy": null,
            "lastUpdatedBy": null,
            "encryptionRequired": false
        },
        {
            "id": 59,
            "name": "DocVendor7",
            "brandId": 61,
            "enabled": true,
            "vendorTypes": null,
            "vendorDetails": {},
            "type": "REWARDS",
            "rank": null,
            "code": "Doc007",
            "description": null,
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
            "lastUpdatedOn": 1739783601000,
            "createdOn": 1739783601000,
            "createdOnDateTime": "2025-02-17T09:13:21Z",
            "lastUpdatedOnDateTime": "2025-02-17T09:13:21Z",
            "createdBy": null,
            "lastUpdatedBy": null,
            "encryptionRequired": false
        },
        {
            "id": 61,
            "name": "DocVendor9",
            "brandId": 61,
            "enabled": true,
            "vendorTypes": null,
            "vendorDetails": {},
            "type": "REWARDS",
            "rank": null,
            "code": "Doc009",
            "description": null,
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
            "lastUpdatedOn": 1739791885000,
            "createdOn": 1739791885000,
            "createdOnDateTime": "2025-02-17T11:31:25Z",
            "lastUpdatedOnDateTime": "2025-02-17T11:31:25Z",
            "createdBy": null,
            "lastUpdatedBy": null,
            "encryptionRequired": false
        },
        {
            "id": 63,
            "name": "DocVendor10",
            "brandId": 61,
            "enabled": true,
            "vendorTypes": null,
            "vendorDetails": {},
            "type": "REWARDS",
            "rank": null,
            "code": "Doc010",
            "description": null,
            "images": [],
            "videos": [],
            "lastUpdatedOn": 1739855739000,
            "createdOn": 1739855739000,
            "createdOnDateTime": "2025-02-18T05:15:39Z",
            "lastUpdatedOnDateTime": "2025-02-18T05:15:39Z",
            "createdBy": null,
            "lastUpdatedBy": null,
            "encryptionRequired": false
        },
        {
            "id": 64,
            "name": "DocVendor11",
            "brandId": 61,
            "enabled": true,
            "vendorTypes": null,
            "vendorDetails": {},
            "type": "REWARDS",
            "rank": null,
            "code": "Doc011",
            "description": null,
            "images": [
                {
                    "name": "imageName001",
                    "altText": null,
                    "id": "bdacb6a7-d4ce-4dea-bf38-134a1200b8b9",
                    "url": "https://s3.amazonaws.com/fileservice.in/solutions/c3d28860-1e11-4a01-8a7c-ea12b56.jpeg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCWV1LXdlc3QtMSJHMEUCIAXwTUz5Dfh2tBPRKcMVkL1xU%2B%2B19fTIZeOPtck2I8QPAiEA%2B9Wp2mvKDbjvbHGQQYVWN3gjzxgAGc4bZ0iEU09wtQkqugIIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw1MDI4MTI3NzkyNjciDA7ia22iVxU7nAbnhyqOAg4TFHTVxe8xzxyLWPQvBNja45Lwb2ZAL%2F%2BN1VQDXX6cNY5sOiT1%2FGB7cXqAy2xVBOeC9er1mQdWflcrdYJBiTOsLnsG7u5x9NYYSOAfWFEp5xtxTG%2BmdWWl4OdE4BZwyoDEmKjBR%2BR3jm7nBop5ZhYRoWxyOhX%2BVlnX3JmTng%2BPYH6USdEbpfmDw83KAA2QTYrCO463hxEwgsBB6a%2Fus%2BadZjZlyIHBxo%2FmfnGH5qiPgX94S7g5iYRLuwvYxO28sLqTFTAPYY5QPaEWbuT4X4whfNXSsgNVr5tcQa%2B6UoiI0biU0nzr1SJeceK6WUamt6Os6rzw0KDYbHIOxYWnCgFkSzK3MiB1jVRR6H3N0DCErdC9BjqdAQq9nL8BJoImTZ9u00EDqo5uZhySGh7BLpAt4mQO%2Fra%2Bp9g9xjSTtUEXsBzdHa8l0g%2FH02JyHADqqcWisFWuvPONl91PyrYJtbgqO2ojAYvsaHmx%2FzxhYeZ2b5jqBsaIERu0FtxBN05Z1E6mUMWxmCfFMBafnlTz9TYRA8enpo%2FdoKcjgcEuuoRhpefogOHh3qhyG0E0fHeUhd7PuGU%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20250218T051557Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3599&X-Amz-Credential=ASIAXKEP2EMBVGDWQZ6R%2F20250218%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=dbdc8746ad5823b7f64932ae27783fd6e3cc583e14c44a888484b81c1f0641e2",
                    "isExternal": false
                }
            ],
            "videos": [],
            "lastUpdatedOn": 1739855757000,
            "createdOn": 1739855757000,
            "createdOnDateTime": "2025-02-18T05:15:57Z",
            "lastUpdatedOnDateTime": "2025-02-18T05:15:57Z",
            "createdBy": null,
            "lastUpdatedBy": null,
            "encryptionRequired": false
        },
        {
            "id": 68,
            "name": "DocVendor12",
            "brandId": 61,
            "enabled": true,
            "vendorTypes": null,
            "vendorDetails": {},
            "type": "REWARDS",
            "rank": null,
            "code": "Doc012",
            "description": null,
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
            "lastUpdatedOn": 1740637585000,
            "createdOn": 1740637585000,
            "createdOnDateTime": "2025-02-27T06:26:25Z",
            "lastUpdatedOnDateTime": "2025-02-27T06:26:25Z",
            "createdBy": null,
            "lastUpdatedBy": null,
            "encryptionRequired": false
        },
        {
            "id": 69,
            "name": "DocVendor13",
            "brandId": 61,
            "enabled": true,
            "vendorTypes": null,
            "vendorDetails": {},
            "type": "REWARDS",
            "rank": null,
            "code": "Doc013",
            "description": null,
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
            "lastUpdatedOn": 1740637658000,
            "createdOn": 1740637658000,
            "createdOnDateTime": "2025-02-27T06:27:38Z",
            "lastUpdatedOnDateTime": "2025-02-27T06:27:38Z",
            "createdBy": null,
            "lastUpdatedBy": null,
            "encryptionRequired": false
        },
        {
            "id": 86,
            "name": "VendorDoc",
            "brandId": 61,
            "enabled": true,
            "vendorTypes": null,
            "vendorDetails": {},
            "type": "REWARDS",
            "rank": null,
            "code": "Doc100",
            "description": null,
            "images": [],
            "videos": [],
            "lastUpdatedOn": 1741171688000,
            "createdOn": 1741171688000,
            "createdOnDateTime": "2025-03-05T10:48:08Z",
            "lastUpdatedOnDateTime": "2025-03-05T10:48:08Z",
            "createdBy": null,
            "lastUpdatedBy": null,
            "encryptionRequired": false
        },
        {
            "id": 118,
            "name": "pretest1",
            "brandId": 61,
            "enabled": true,
            "vendorTypes": null,
            "vendorDetails": {},
            "type": "REWARDS",
            "rank": 1,
            "code": "BOC01",
            "description": "The top priority vendor",
            "images": [
                {
                    "name": "pretest",
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
            "lastUpdatedOn": 1743678522000,
            "createdOn": 1743678522000,
            "createdOnDateTime": "2025-04-03T11:08:42Z",
            "lastUpdatedOnDateTime": "2025-04-03T11:08:42Z",
            "createdBy": null,
            "lastUpdatedBy": null,
            "encryptionRequired": false
        },
        {
            "id": 119,
            "name": "Intouch Vendor",
            "brandId": 61,
            "enabled": true,
            "vendorTypes": "LINKAJA",
            "vendorDetails": {
                "key1": "************************************************",
                "key2": "************************************************"
            },
            "type": "REWARDS",
            "rank": 1,
            "code": "4e5c14a6-6a57-48b3-9f3d-d72032c0b179",
            "description": "Intouch vendor description",
            "images": [],
            "videos": [],
            "lastUpdatedOn": 1744085165000,
            "createdOn": 1744085165000,
            "createdOnDateTime": "2025-04-08T04:06:05Z",
            "lastUpdatedOnDateTime": "2025-04-08T04:06:05Z",
            "createdBy": null,
            "lastUpdatedBy": null,
            "encryptionRequired": false
        },
        {
            "id": 124,
            "name": "DocVendor3GEORGE",
            "brandId": 61,
            "enabled": true,
            "vendorTypes": null,
            "vendorDetails": {},
            "type": "REWARDS",
            "rank": 1,
            "code": "Doc0003",
            "description": "The top priority vendor",
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
            "lastUpdatedOn": 1744720043000,
            "createdOn": 1744720043000,
            "createdOnDateTime": "2025-04-15T12:27:23Z",
            "lastUpdatedOnDateTime": "2025-04-15T12:27:23Z",
            "createdBy": null,
            "lastUpdatedBy": null,
            "encryptionRequired": false
        },
        {
            "id": 133,
            "name": "VENDORHIRE",
            "brandId": 61,
            "enabled": true,
            "vendorTypes": null,
            "vendorDetails": {},
            "type": "REWARDS",
            "rank": 1,
            "code": "Doc0036",
            "description": "The top priority vendor",
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
            "lastUpdatedOn": 1747307907000,
            "createdOn": 1747307907000,
            "createdOnDateTime": "2025-05-15T11:18:27Z",
            "lastUpdatedOnDateTime": "2025-05-15T11:18:27Z",
            "createdBy": 75161973,
            "lastUpdatedBy": 75161973,
            "encryptionRequired": false
        }
    ]
}
```
```Text Generic
{
    "status": {
        "success": true,
        "code": 5001,
        "message": "Vendor fetched successfully"
    },
    "vendorList": [
        {
            "id": 44,
            "name": "Clothing",
            "brandId": 61,
            "enabled": true,
            "vendorTypes": null,
            "vendorDetails": {},
            "type": "REWARDS",
            "rank": null,
            "code": "44",
            "description": null,
            "images": [],
            "videos": [],
            "lastUpdatedOn": 1739438226000,
            "createdOn": 1735816449000,
            "createdOnDateTime": "2025-01-02T11:14:09Z",
            "lastUpdatedOnDateTime": "2025-02-13T09:17:06Z",
            "createdBy": null,
            "lastUpdatedBy": null,
            "encryptionRequired": false
        },
        {
            "id": 47,
            "name": "Nee",
            "brandId": 61,
            "enabled": true,
            "vendorTypes": null,
            "vendorDetails": {
                "123": "********************************************"
            },
            "type": "REWARDS",
            "rank": null,
            "code": "47",
            "description": null,
            "images": [],
            "videos": [],
            "lastUpdatedOn": 1739438226000,
            "createdOn": 1738646869000,
            "createdOnDateTime": "2025-02-04T05:27:49Z",
            "lastUpdatedOnDateTime": "2025-02-13T09:17:06Z",
            "createdBy": null,
            "lastUpdatedBy": null,
            "encryptionRequired": false
        },
        {
            "id": 51,
            "name": "testVendor-016",
            "brandId": 61,
            "enabled": true,
            "vendorTypes": null,
            "vendorDetails": {},
            "type": "REWARDS",
            "rank": 1,
            "code": "100737",
            "description": "description",
            "images": [],
            "videos": [],
            "lastUpdatedOn": 1739777347000,
            "createdOn": 1739777347000,
            "createdOnDateTime": "2025-02-17T07:29:07Z",
            "lastUpdatedOnDateTime": "2025-02-17T07:29:07Z",
            "createdBy": null,
            "lastUpdatedBy": null,
            "encryptionRequired": false
        },
        {
            "id": 52,
            "name": "DocVendor",
            "brandId": 61,
            "enabled": true,
            "vendorTypes": null,
            "vendorDetails": {},
            "type": "REWARDS",
            "rank": 1,
            "code": "Doc001",
            "description": "description",
            "images": [],
            "videos": [],
            "lastUpdatedOn": 1739777392000,
            "createdOn": 1739777392000,
            "createdOnDateTime": "2025-02-17T07:29:52Z",
            "lastUpdatedOnDateTime": "2025-02-17T07:29:52Z",
            "createdBy": null,
            "lastUpdatedBy": null,
            "encryptionRequired": false
        },
        {
            "id": 53,
            "name": "DocVendor2",
            "brandId": 61,
            "enabled": true,
            "vendorTypes": null,
            "vendorDetails": {},
            "type": "REWARDS",
            "rank": 1,
            "code": "Doc002",
            "description": "description",
            "images": [],
            "videos": [],
            "lastUpdatedOn": 1739777433000,
            "createdOn": 1739777433000,
            "createdOnDateTime": "2025-02-17T07:30:33Z",
            "lastUpdatedOnDateTime": "2025-02-17T07:30:33Z",
            "createdBy": null,
            "lastUpdatedBy": null,
            "encryptionRequired": false
        },
        {
            "id": 55,
            "name": "DocVendor3",
            "brandId": 61,
            "enabled": true,
            "vendorTypes": null,
            "vendorDetails": {},
            "type": "REWARDS",
            "rank": 1,
            "code": "Doc003",
            "description": "description",
            "images": [],
            "videos": [],
            "lastUpdatedOn": 1739781911000,
            "createdOn": 1739781911000,
            "createdOnDateTime": "2025-02-17T08:45:11Z",
            "lastUpdatedOnDateTime": "2025-02-17T08:45:11Z",
            "createdBy": null,
            "lastUpdatedBy": null,
            "encryptionRequired": false
        },
        {
            "id": 56,
            "name": "DocVendor4",
            "brandId": 61,
            "enabled": true,
            "vendorTypes": null,
            "vendorDetails": {},
            "type": "REWARDS",
            "rank": 1,
            "code": "Doc004",
            "description": "thesunwasearlyandbrightlightingupthefieldofgrasswithesunwasearlyandbrightlightingupthefieldofgrasswithesunwasearlyandbrightlightingupthefieldofgrasswithesunwasearlyandbrightlightingupthefieldofgrasswithesunwasearlyandbrightlightingupthefieldofgrasswiabcd",
            "images": [],
            "videos": [],
            "lastUpdatedOn": 1739782052000,
            "createdOn": 1739782052000,
            "createdOnDateTime": "2025-02-17T08:47:32Z",
            "lastUpdatedOnDateTime": "2025-02-17T08:47:32Z",
            "createdBy": null,
            "lastUpdatedBy": null,
            "encryptionRequired": false
        },
        {
            "id": 57,
            "name": "DocVendor5",
            "brandId": 61,
            "enabled": true,
            "vendorTypes": null,
            "vendorDetails": {},
            "type": "REWARDS",
            "rank": 1,
            "code": "Doc005",
            "description": "thesunwasearlyandbrightlightingupthefieldofgrasswithesunwasearlyandbrightlightingupthefieldofgrasswithesunwasearlyandbrightlightingupthefieldofgrasswithesunwasearlyandbrightlightingupthefieldofgrasswithesunwasearlyandbrightlightingupthefieldofgrasswiabcdthesunwasearlyandbrightlightingupthefieldofgrasswithesunwasearlyandbrightlightingupthefieldofgrasswithesunwasearlyandbrightlightingupthefieldofgrasswithesunwasearlyandbrightlightingupthefieldofgrasswithesunwasearlyandbrightlightingupthefieldofgrasswiabcdthesunwasearlyandbrightlightingupthefieldofgrasswithesunwasearlyandbrightlightingupthefieldofgrasswithesunwasearlyandbrightlightingupthefieldofgrasswithesunwasearlyandbrightlightingupthefieldofgrasswithesunwasearlyandbrightlightingupthefieldofgrasswiabcdthesunwasearlyandbrightlightingupthefieldofgrasswithesunwasearlyandbrightlightingupthefieldofgrasswithesunwasearlyandbrightlightingupthefieldofgrasswithesunwasearlyandbrightlightingupthefieldofgrasswithesunwasearlyandbrightlightingupthefieldofgrasswiabcd",
            "images": [],
            "videos": [],
            "lastUpdatedOn": 1739782082000,
            "createdOn": 1739782082000,
            "createdOnDateTime": "2025-02-17T08:48:02Z",
            "lastUpdatedOnDateTime": "2025-02-17T08:48:02Z",
            "createdBy": null,
            "lastUpdatedBy": null,
            "encryptionRequired": false
        },
        {
            "id": 58,
            "name": "DocVendor6",
            "brandId": 61,
            "enabled": true,
            "vendorTypes": null,
            "vendorDetails": {},
            "type": "REWARDS",
            "rank": null,
            "code": "Doc006",
            "description": null,
            "images": [
                {
                    "name": "imageName001",
                    "altText": null,
                    "id": null,
                    "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6RFSqYEgenJSDc0Wo_eoEKzxd0iXvTOO-LQ&s",
                    "isExternal": true
                }
            ],
            "videos": [],
            "lastUpdatedOn": 1739783325000,
            "createdOn": 1739783325000,
            "createdOnDateTime": "2025-02-17T09:08:45Z",
            "lastUpdatedOnDateTime": "2025-02-17T09:08:45Z",
            "createdBy": null,
            "lastUpdatedBy": null,
            "encryptionRequired": false
        },
        {
            "id": 59,
            "name": "DocVendor7",
            "brandId": 61,
            "enabled": true,
            "vendorTypes": null,
            "vendorDetails": {},
            "type": "REWARDS",
            "rank": null,
            "code": "Doc007",
            "description": null,
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
            "lastUpdatedOn": 1739783601000,
            "createdOn": 1739783601000,
            "createdOnDateTime": "2025-02-17T09:13:21Z",
            "lastUpdatedOnDateTime": "2025-02-17T09:13:21Z",
            "createdBy": null,
            "lastUpdatedBy": null,
            "encryptionRequired": false
        },
        {
            "id": 61,
            "name": "DocVendor9",
            "brandId": 61,
            "enabled": true,
            "vendorTypes": null,
            "vendorDetails": {},
            "type": "REWARDS",
            "rank": null,
            "code": "Doc009",
            "description": null,
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
            "lastUpdatedOn": 1739791885000,
            "createdOn": 1739791885000,
            "createdOnDateTime": "2025-02-17T11:31:25Z",
            "lastUpdatedOnDateTime": "2025-02-17T11:31:25Z",
            "createdBy": null,
            "lastUpdatedBy": null,
            "encryptionRequired": false
        },
        {
            "id": 63,
            "name": "DocVendor10",
            "brandId": 61,
            "enabled": true,
            "vendorTypes": null,
            "vendorDetails": {},
            "type": "REWARDS",
            "rank": null,
            "code": "Doc010",
            "description": null,
            "images": [],
            "videos": [],
            "lastUpdatedOn": 1739855739000,
            "createdOn": 1739855739000,
            "createdOnDateTime": "2025-02-18T05:15:39Z",
            "lastUpdatedOnDateTime": "2025-02-18T05:15:39Z",
            "createdBy": null,
            "lastUpdatedBy": null,
            "encryptionRequired": false
        },
        {
            "id": 64,
            "name": "DocVendor11",
            "brandId": 61,
            "enabled": true,
            "vendorTypes": null,
            "vendorDetails": {},
            "type": "REWARDS",
            "rank": null,
            "code": "Doc011",
            "description": null,
            "images": [
                {
                    "name": "imageName001",
                    "altText": null,
                    "id": "bdacb6a7-d4ce-4dea-bf38-134a1200b8b9",
                    "url": "https://s3.amazonaws.com/fileservice.in/solutions/c3d28860-1e11-4a01-8a7c-ea12b56.jpeg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCWV1LXdlc3QtMSJHMEUCIAXwTUz5Dfh2tBPRKcMVkL1xU%2B%2B19fTIZeOPtck2I8QPAiEA%2B9Wp2mvKDbjvbHGQQYVWN3gjzxgAGc4bZ0iEU09wtQkqugIIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw1MDI4MTI3NzkyNjciDA7ia22iVxU7nAbnhyqOAg4TFHTVxe8xzxyLWPQvBNja45Lwb2ZAL%2F%2BN1VQDXX6cNY5sOiT1%2FGB7cXqAy2xVBOeC9er1mQdWflcrdYJBiTOsLnsG7u5x9NYYSOAfWFEp5xtxTG%2BmdWWl4OdE4BZwyoDEmKjBR%2BR3jm7nBop5ZhYRoWxyOhX%2BVlnX3JmTng%2BPYH6USdEbpfmDw83KAA2QTYrCO463hxEwgsBB6a%2Fus%2BadZjZlyIHBxo%2FmfnGH5qiPgX94S7g5iYRLuwvYxO28sLqTFTAPYY5QPaEWbuT4X4whfNXSsgNVr5tcQa%2B6UoiI0biU0nzr1SJeceK6WUamt6Os6rzw0KDYbHIOxYWnCgFkSzK3MiB1jVRR6H3N0DCErdC9BjqdAQq9nL8BJoImTZ9u00EDqo5uZhySGh7BLpAt4mQO%2Fra%2Bp9g9xjSTtUEXsBzdHa8l0g%2FH02JyHADqqcWisFWuvPONl91PyrYJtbgqO2ojAYvsaHmx%2FzxhYeZ2b5jqBsaIERu0FtxBN05Z1E6mUMWxmCfFMBafnlTz9TYRA8enpo%2FdoKcjgcEuuoRhpefogOHh3qhyG0E0fHeUhd7PuGU%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20250218T051557Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3599&X-Amz-Credential=ASIAXKEP2EMBVGDWQZ6R%2F20250218%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=dbdc8746ad5823b7f64932ae27783fd6e3cc583e14c44a888484b81c1f0641e2",
                    "isExternal": false
                }
            ],
            "videos": [],
            "lastUpdatedOn": 1739855757000,
            "createdOn": 1739855757000,
            "createdOnDateTime": "2025-02-18T05:15:57Z",
            "lastUpdatedOnDateTime": "2025-02-18T05:15:57Z",
            "createdBy": null,
            "lastUpdatedBy": null,
            "encryptionRequired": false
        },
        {
            "id": 68,
            "name": "DocVendor12",
            "brandId": 61,
            "enabled": true,
            "vendorTypes": null,
            "vendorDetails": {},
            "type": "REWARDS",
            "rank": null,
            "code": "Doc012",
            "description": null,
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
            "lastUpdatedOn": 1740637585000,
            "createdOn": 1740637585000,
            "createdOnDateTime": "2025-02-27T06:26:25Z",
            "lastUpdatedOnDateTime": "2025-02-27T06:26:25Z",
            "createdBy": null,
            "lastUpdatedBy": null,
            "encryptionRequired": false
        },
        {
            "id": 69,
            "name": "DocVendor13",
            "brandId": 61,
            "enabled": true,
            "vendorTypes": null,
            "vendorDetails": {},
            "type": "REWARDS",
            "rank": null,
            "code": "Doc013",
            "description": null,
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
            "lastUpdatedOn": 1740637658000,
            "createdOn": 1740637658000,
            "createdOnDateTime": "2025-02-27T06:27:38Z",
            "lastUpdatedOnDateTime": "2025-02-27T06:27:38Z",
            "createdBy": null,
            "lastUpdatedBy": null,
            "encryptionRequired": false
        },
        {
            "id": 86,
            "name": "VendorDoc",
            "brandId": 61,
            "enabled": true,
            "vendorTypes": null,
            "vendorDetails": {},
            "type": "REWARDS",
            "rank": null,
            "code": "Doc100",
            "description": null,
            "images": [],
            "videos": [],
            "lastUpdatedOn": 1741171688000,
            "createdOn": 1741171688000,
            "createdOnDateTime": "2025-03-05T10:48:08Z",
            "lastUpdatedOnDateTime": "2025-03-05T10:48:08Z",
            "createdBy": null,
            "lastUpdatedBy": null,
            "encryptionRequired": false
        },
        {
            "id": 118,
            "name": "pretest1",
            "brandId": 61,
            "enabled": true,
            "vendorTypes": null,
            "vendorDetails": {},
            "type": "REWARDS",
            "rank": 1,
            "code": "BOC01",
            "description": "The top priority vendor",
            "images": [
                {
                    "name": "pretest",
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
            "lastUpdatedOn": 1743678522000,
            "createdOn": 1743678522000,
            "createdOnDateTime": "2025-04-03T11:08:42Z",
            "lastUpdatedOnDateTime": "2025-04-03T11:08:42Z",
            "createdBy": null,
            "lastUpdatedBy": null,
            "encryptionRequired": false
        },
        {
            "id": 119,
            "name": "Intouch Vendor",
            "brandId": 61,
            "enabled": true,
            "vendorTypes": "LINKAJA",
            "vendorDetails": {
                "key1": "************************************************",
                "key2": "************************************************"
            },
            "type": "REWARDS",
            "rank": 1,
            "code": "4e5c14a6-6a57-48b3-9f3d-d72032c0b179",
            "description": "Intouch vendor description",
            "images": [],
            "videos": [],
            "lastUpdatedOn": 1744085165000,
            "createdOn": 1744085165000,
            "createdOnDateTime": "2025-04-08T04:06:05Z",
            "lastUpdatedOnDateTime": "2025-04-08T04:06:05Z",
            "createdBy": null,
            "lastUpdatedBy": null,
            "encryptionRequired": false
        },
        {
            "id": 124,
            "name": "DocVendor3GEORGE",
            "brandId": 61,
            "enabled": true,
            "vendorTypes": null,
            "vendorDetails": {},
            "type": "REWARDS",
            "rank": 1,
            "code": "Doc0003",
            "description": "The top priority vendor",
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
            "lastUpdatedOn": 1744720043000,
            "createdOn": 1744720043000,
            "createdOnDateTime": "2025-04-15T12:27:23Z",
            "lastUpdatedOnDateTime": "2025-04-15T12:27:23Z",
            "createdBy": null,
            "lastUpdatedBy": null,
            "encryptionRequired": false
        },
        {
            "id": 133,
            "name": "VENDORHIRE",
            "brandId": 61,
            "enabled": false,
            "vendorTypes": null,
            "vendorDetails": {},
            "type": "REWARDS",
            "rank": 1,
            "code": "Doc0036",
            "description": "The top priority vendor",
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
            "lastUpdatedOn": 1748350778000,
            "createdOn": 1747307907000,
            "createdOnDateTime": "2025-05-15T11:18:27Z",
            "lastUpdatedOnDateTime": "2025-05-27T12:59:38Z",
            "createdBy": 75161973,
            "lastUpdatedBy": 75161973,
            "encryptionRequired": false
        },
        {
            "id": 141,
            "name": "VENDORgold",
            "brandId": 61,
            "enabled": true,
            "vendorTypes": null,
            "vendorDetails": {},
            "type": "REWARDS",
            "rank": 1,
            "code": "123",
            "description": "The top priority vendor",
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
            "lastUpdatedOn": 1747910865000,
            "createdOn": 1747910865000,
            "createdOnDateTime": "2025-05-22T10:47:45Z",
            "lastUpdatedOnDateTime": "2025-05-22T10:47:45Z",
            "createdBy": 75161973,
            "lastUpdatedBy": 75161973,
            "encryptionRequired": false
        },
        {
            "id": 142,
            "name": "VENDORgold2",
            "brandId": 61,
            "enabled": true,
            "vendorTypes": null,
            "vendorDetails": {},
            "type": "REWARDS",
            "rank": 1,
            "code": "1234",
            "description": "The top priority vendor",
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
            "lastUpdatedOn": 1747910878000,
            "createdOn": 1747910878000,
            "createdOnDateTime": "2025-05-22T10:47:58Z",
            "lastUpdatedOnDateTime": "2025-05-22T10:47:58Z",
            "createdBy": 75161973,
            "lastUpdatedBy": 75161973,
            "encryptionRequired": false
        },
        {
            "id": 143,
            "name": "vendorRedemptionCreate",
            "brandId": 61,
            "enabled": true,
            "vendorTypes": null,
            "vendorDetails": {},
            "type": "REWARDS",
            "rank": 20,
            "code": "174477980",
            "description": "test description for test_Rewards_createAndGetVendorsWithMediaAndAdditionalMeta",
            "images": [],
            "videos": [],
            "lastUpdatedOn": 1748340573000,
            "createdOn": 1748340573000,
            "createdOnDateTime": "2025-05-27T10:09:33Z",
            "lastUpdatedOnDateTime": "2025-05-27T10:09:33Z",
            "createdBy": 75161973,
            "lastUpdatedBy": 75161973,
            "encryptionRequired": false
        },
        {
            "id": 144,
            "name": "vendor33",
            "brandId": 61,
            "enabled": true,
            "vendorTypes": null,
            "vendorDetails": {},
            "type": "REWARDS",
            "rank": 20,
            "code": "17447780",
            "description": "test description for test_Rewards_createAndGetVendorsWithMediaAndAdditionalMeta",
            "images": [],
            "videos": [],
            "lastUpdatedOn": 1748343833000,
            "createdOn": 1748343833000,
            "createdOnDateTime": "2025-05-27T11:03:53Z",
            "lastUpdatedOnDateTime": "2025-05-27T11:03:53Z",
            "createdBy": 75161973,
            "lastUpdatedBy": 75161973,
            "encryptionRequired": false
        },
        {
            "id": 145,
            "name": "vendorRedemptionCrete",
            "brandId": 61,
            "enabled": true,
            "vendorTypes": null,
            "vendorDetails": {},
            "type": "REWARDS",
            "rank": 20,
            "code": "17447980",
            "description": "test description for test_Rewards_createAndGetVendorsWithMediaAndAdditionalMeta",
            "images": [],
            "videos": [],
            "lastUpdatedOn": 1748350401000,
            "createdOn": 1748350401000,
            "createdOnDateTime": "2025-05-27T12:53:21Z",
            "lastUpdatedOnDateTime": "2025-05-27T12:53:21Z",
            "createdBy": 75161973,
            "lastUpdatedBy": 75161973,
            "encryptionRequired": false
        }
    ]
}
```
```Text With Vendor code Filter
{
    "status": {
        "success": true,
        "code": 5001,
        "message": "Vendor fetched successfully"
    },
    "vendorList": [
        {
            "id": 142,
            "name": "VENDORgold2",
            "brandId": 61,
            "enabled": true,
            "vendorTypes": null,
            "vendorDetails": {},
            "type": "REWARDS",
            "rank": 1,
            "code": "1234",
            "description": "The top priority vendor",
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
            "lastUpdatedOn": 1747910878000,
            "createdOn": 1747910878000,
            "createdOnDateTime": "2025-05-22T10:47:58Z",
            "lastUpdatedOnDateTime": "2025-05-22T10:47:58Z",
            "createdBy": 75161973,
            "lastUpdatedBy": 75161973,
            "encryptionRequired": false
        }
    ]
}
```

# API-specific error codes

| Error Code | Description      |
| :--------- | :--------------- |
| 3004       | Invalid Brand ID |

<HTMLBlock>{`
<style>
  .InputGroupe2EvBGz2cnqy {
   display: flex;
   gap: 2px;
   position: relative;
}

.Button.APIRequest-example-button1DGMsfaOTVNW {
   position: relative;
   width: 140px;
   white-space: nowrap;
   overflow: hidden;
   text-overflow: ellipsis;
   padding: 6px 12px;
   text-align: left;
   transition: width 0.2s ease-out;
   z-index: 1;
   display: block;
   direction: ltr;
   unicode-bidi: embed;
   padding-right: 20px;
   background: #1e2329;
   border: none;
   border-radius: 6px;
   color: #94a3b8;
   font-size: 13px;
}

.Button.APIRequest-example-button1DGMsfaOTVNW span,
.Button.APIRequest-example-button1DGMsfaOTVNW div {
   text-align: left;
   direction: ltr;
}

.Button.APIRequest-example-button1DGMsfaOTVNW:hover {
   width: auto;
   z-index: 10;
   background: #262b33;
}

.Button.APIRequest-example-button1DGMsfaOTVNW.APIRequest-example-button_activeXJeukHyaHZXB {
   z-index: 20;
   background: #2c333d;
   color: #ffffff;
}
</style>
`}</HTMLBlock>
