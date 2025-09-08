---
title: Create a Vendor
excerpt: ''
api:
  file: v1.json
  operationId: createvendor
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
A vendor is an external third-party brand that you can use to fulfil your rewards. This API allows you to define vendor details, add images and videos, and display them in your reward catalogue.

> 👍 Note
>
> For detailed information about our APIs and for hands-on testing, refer documentation in [API overview](https://docs.capillarytech.com/reference/apioverview) and  step-by-step guide on making your first API call in [Make your first API call](https://docs.capillarytech.com/reference/make-your-first-api-call) .

# Prerequisites

*   Authentication: Basic/OAuth authentication
*   Default access group

# Resource information

|               |                                             |
| :------------ | :------------------------------------------ |
| URI           | /api\_gateway/rewards/core/v1/vendor/create |
| HTTP method   | POST                                        |
| Pagination    | NA                                          |
| Rate limit    | NA                                          |
| Batch support | NA                                          |

# API endpoint example

`https://eu.api.capillarytech.com/api_gateway/rewards/core/v1/vendor/create`

```json Curl
curl --location 'https://eu.api.capillarytech.com/api_gateway/rewards/core/v1/vendor/create' \
--header 'Accept: application/json' \
--header 'Content-Type: application/json' \
--header 'Authorization: Basic Z2VvcmdlLmpvaG5zb246OTg4OTU2NWI4ODVhMmY4ZWE1MTk1MjA2NWEwYTEzNzg=' \
--header 'Cookie: _cfuvid=Py8WqEd9NprkMUBFFM4pQWQmNSGjgEDnhOp1DoQoMYw-1739777165991-0.0.1.1-604800000; _cfuvid=hGW.4aR53plH6yD91V3qiTbpaQWs45tjwDu8W8WQ7Vk-1741007297422-0.0.1.1-604800000; _cfuvid=S.PxCyUf9ekxOmHL60DVO0Ymatc.u9ycHzTlvzKnNWU-1749708111484-0.0.1.1-604800000' \
--data-raw '{
 "name": "vendor002",
 "code": "vendor002",
 "brandId": 61,
 "enabled": true,
  "type" : "REWARDS",
  "isEncryptionRequired" : false, 
  "vendorDetails" : {
    "key" : "client", 
    "value": "tom.sawyer@capillarytech.com"
  }


}'
```

# Request body

```json Create a vendor
{
 "name": "vendor002",
 "code": "vendor002",
 "brandId": 61,
 "enabled": true,
  "type" : "REWARDS",
  "isEncryptionRequired" : false, 
  "vendorDetails" : {
    "key" : "Email", 
    "value": "tom.sawyer@capillarytech.com"
  }


}
```
```json Create a vendor with internal image / video
{
    "name": "DocVendor2",
    "code": "Doc002",
    "brandId": 61,
    "type": "REWARDS",
    "images": [
        {
            "name": "imageName001",
            "altText": null,
            "id": "Img1",
            "isExternal": false
        }
    ],
    "videos": [
        {
            "name": "videoName001",
            "altText": null,
            "id": "Vid1",
            "isExternal": false
        }
     ],
    "rank": 1,
    "description": "The top priority vendor"
}
```
```json Create a vendor with external image / video
{
    "name": "DocVendor3",
    "code": "Doc003",
    "brandId": 61,
    "type": "REWARDS",
    "images": [
        {
            "name": "imageName001",
            "altText": null,
            "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6RFSqYEgenJSDc0Wo_eoEKzxd0iXvTOO-LQ&s",
            "isExternal": true
        }
    ],
    "videos": [
        {
            "name": "videoName001",
            "altText": null,
            "url": "https://videos.pexels.com/video-files/6265096/6265096-uhd_1440_2560_30fps.mp4",
            "isExternal": true
        }
    ],
    "rank": 1,
    "description": "The top priority vendor"
}
```

# Request body parameters

| Parameter (Parameters marked with \* are mandatory) | Data Type | Description                                                                                                                                                                                                                                                                                        |
| :-------------------------------------------------- | :-------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`name*`**                                         | String    | A unique name for the vendor, with a maximum character limit of 255.                                                                                                                                                                                                                               |
| `code`                                              | String    | A unique identification code for the vendor. If null or not provided, a random, unique code is assigned. The maximum character limit is 255.                                                                                                                                                       |
| **`brandId*`**                                      | Integer   | The unique brand ID of the organization. This value must be greater than 0.                                                                                                                                                                                                                        |
| **`type*`**                                         | Enum      | The type of vendor. Supported value: `REWARDS` `POINTS`.                                                                                                                                                                                                                                           |
| \`\`images\`                                        | Object    | An object containing details of images associated with the vendor. You can add up to 5 images, and any image format is supported.                                                                                                                                                                  |
| **`- name*`**                                       | String    | A unique name identifier for the image.                                                                                                                                                                                                                                                            |
| `- altText`                                         | String    | A descriptive text that conveys the meaning and context of the image.                                                                                                                                                                                                                              |
| `- id`                                              | String    | A unique ID generated when an image is created, which is the `file_handle` for the associated image in the Capillary system. This parameter is required if `isExternal` is `false`. To add an image to the file service location, raise a ticket to the support team.                              |
| `- url`                                             | String    | A direct link to the image. This parameter is required if `isExternal` is `true`.                                                                                                                                                                                                                  |
| `- isExternal`                                      | Boolean   | Indicates if the image is from an external source.                                                                                                                                                                                                                                                 |
| `videos`                                            | Object    | An object containing details of videos associated with the vendor. You can add up to 2 videos.                                                                                                                                                                                                     |
| **`- name*`**                                       | String    | A unique name identifier for the video.                                                                                                                                                                                                                                                            |
| `- altText`                                         | String    | A descriptive text that conveys the meaning and context of the video.                                                                                                                                                                                                                              |
| `- id`                                              | String    | A unique ID generated when a video is created, which is the `file_handle` for the associated video in the Capillary system. This parameter is required if `isExternal` is `false`. To add a video to the file service location, raise a ticket to the support team. Any video format is supported. |
| `- url`                                             | String    | A direct link to the video. This parameter is required if `isExternal` is `true`.                                                                                                                                                                                                                  |
| `- isExternal`                                      | Boolean   | Indicates if the video is from an external source.                                                                                                                                                                                                                                                 |
| `rank`                                              | Integer   | Assign a rank to the vendor. This can be used for ordering and prioritizing. This value must be greater than 0.                                                                                                                                                                                    |
| `description`                                       | String    | A description for the vendor, with a maximum character limit of 1034.                                                                                                                                                                                                                              |
| vendorDetails                                       | Object    | An object containing key-value pairs for additional vendor-specific details. You can use this to add any additional information related to the vendor.                                                                                                                                             |
| vendorDetails.key                                   | String    | The key for the vendor detail, which can represent various attributes (e.g., "Vendor Email").                                                                                                                                                                                                      |
| vendorDetails.value                                 | String    | The value associated with the key in vendorDetails.                                                                                                                                                                                                                                                |

# Response body

```json Vendor Created
{
    "status": {
        "success": true,
        "code": 5002,
        "message": "Vendor created successfully"
    },
    "vendor": {
        "id": 145,
        "name": "vendorRedemptionCrete",
        "brandId": 61,
        "enabled": true,
        "isEncryptionRequired": false,
        "vendorTypes": null,
        "vendorDetails": null,
        "type": "REWARDS",
        "createdBy": 75161973,
        "lastUpdatedBy": 75161973,
        "createdOn": 1748350401000,
        "lastUpdatedOn": 1748350401000,
        "createdOnDateTime": "2025-05-27T12:53:21Z",
        "lastUpdatedOnDateTime": "2025-05-27T12:53:21Z",
        "rank": 20,
        "code": "17447980",
        "description": "test description for test_Rewards_createAndGetVendorsWithMediaAndAdditionalMeta",
        "images": [],
        "videos": [],
        "encryptionRequired": false
    }
}
```
```json Wrong type value
{
  "status": {
    "success": false,
    "code": 400,
    "message": "Cannot deserialize value of type com.capillary.solutions.rewards.domain.Type from String \"REWARD\": value not one of declared Enum instance names: POINTS, REWARDS"
  }
}
```
```json Rank value is 0
{
  "status": {
    "success": false,
    "code": 400,
    "message": "rank must be greater than zero"
  }
}
```
```json Invalid brandId
{
    "status": {
        "success": false,
        "code": 3004,
        "message": "Brand not found"
    }
}
```
```json Vendor already exists
{
    "status": {
        "success": false,
        "code": 5007,
        "message": "Vendor already exists"
    },
    "vendor": null
}
```

# Response parameters

| Parameter                | Description                                                                                                                                                                                          |
| :----------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`status`**             | Object containing details about the status of the request.                                                                                                                                           |
| `- success`              | Indicates whether the request was successful. `true`: Request was successful. `false`: Request was unsuccessful.                                                                                     |
| `- code`                 | The status code of the request.                                                                                                                                                                      |
| `- message`              | The status message of the request.                                                                                                                                                                   |
| **`vendor`**             | Object containing details on the vendor that is created.                                                                                                                                             |
| `- id`                   | The unique ID generated for the vendor upon successful creation.                                                                                                                                     |
| `- name`                 | The unique name of the vendor.                                                                                                                                                                       |
| `- brandId`              | The unique brand ID of the organization.                                                                                                                                                             |
| `- enabled`              | Indicates if the vendor is currently enabled or disabled. `true`: Vendor is enabled. `false`: Vendor is disabled.                                                                                    |
| `- isEncryptionRequired` | Indicates if the vendor requires encryption. `true`: Vendor requires encryption. `false`: Vendor does not require encryption.                                                                        |
| `- vendorTypes`          | The type of vendor. These are specialized vendor types for which Capillary has implemented customized solutions to handle reward issuance. Supported types: `LINKAJA`/`AIRSPRING`/`OVO`/`BONUSLINK`. |
| `- vendorDetails`        | An object containing additional details on the vendor, if any.                                                                                                                                       |
| `- type`                 | The type of vendor. Possible value: `REWARDS`.                                                                                                                                                       |
| `- rank`                 | The rank assigned to the vendor. This can be used for ordering and prioritizing.                                                                                                                     |
| `- code`                 | The unique identification code of the vendor.                                                                                                                                                        |
| `- description`          | The description for the vendor.                                                                                                                                                                      |
| `- images`               | An object containing details on the images for the vendor, if any.                                                                                                                                   |
| `- videos`               | An object containing details on the videos for the vendor, if any.                                                                                                                                   |
| `- encryptionRequired`   | Indicates if encryption is required for transactions with the vendor. `true`: Vendor requires encryption. `false`: Vendor does not require encryption.                                               |
| `lastUpdatedOn`          | Indicates the timestamp when the vendor redemption was updated. The timestamp is in Epoch time format.                                                                                               |
| `lastUpdatedBy`          | The till ID of the user who last updated the vendor redemption record.                                                                                                                               |
| `createdBy`              | The till ID of the user who created the vendor redemption.                                                                                                                                           |
| `createdOn`              | Indicates the timestamp when the vendor redemption was created. The timestamp is in Epoch time format.                                                                                               |
| `createdOnDateTime`      | Indicates the date and time when the vendor redemption was created, formatted in ISO 8601.                                                                                                           |
| `lastUpdatedOnDateTime`  | Indicates the date and time when the vendor redemption was updated, formatted in ISO 8601.                                                                                                           |

# API error codes

| Code | Description                                                                                                                                                          | Reason                                    |
| :--- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :---------------------------------------- |
| 5007 | Vendor already exists                                                                                                                                                | Vendor with the same name already exists. |
| 3004 | Brand not found                                                                                                                                                      | `brandId` provided is invalid.            |
| 400  | Cannot deserialize value of type com.capillary.solutions.rewards.domain.Type from String "REWARD": value not one of declared Enum instance names: \[POINTS, REWARDS] | `type` is invalid.                        |
| 400  | rank must be greater than zero                                                                                                                                       | Value for `rank` provided is 0.           |