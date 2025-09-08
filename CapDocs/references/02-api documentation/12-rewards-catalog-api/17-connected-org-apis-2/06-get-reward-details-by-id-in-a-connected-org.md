---
title: Get reward details by ID in connected orgs
excerpt: ''
api:
  file: v1.json
  operationId: get-reward-details-by-id-in-a-connected-org
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
This API retrieves the details of rewards using reward ID.

> 👍 Note
>
> For detailed information about our APIs and for hands-on testing, refer to the documentation in [API overview](https://docs.capillarytech.com/reference/apioverview) and step-by-step guide on [making your first API call](https://docs.capillarytech.com/reference/make-your-first-api-call).

> 🚧 **Warning**
>
> Use this API exclusively for connected orgs. For other orgs, use this [API](https://docs.capillarytech.com/reference/get-rewards-for-user) instead.

# Prerequisites

*   Authentication: Basic or OAuth authentication
*   Default access group

# Resource information

|                        |                                  |
| :--------------------- | :------------------------------- |
| URI                    | /v1.1/user/rewards`\{rewardId\}` |
| HTTP Method            | GET                              |
| Pagination             | No                               |
| Batch support          | No                               |
| Rate limit information | None                             |

# API Endpoint Example

`https://eu.api.capillarytech.com/api_gateway/rewards/core/v1/reward/197661`

# Headers

<Table>
  <thead>
    <tr>
      <th>
        Header
      </th>

      <th>
        Description
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        DATA-SCOPE-ORG
      </td>

      <td>
        List of Organization IDs
      </td>
    </tr>

    <tr>
      <td>
        DATA-SCOPE
      </td>

      <td>
        Scopes define what data can be accessed using the API. You can use scopes to control access to data from a parent or child organization. Defining a scope ensures that the response contains only data from the respective organization.
        Supported headers: `SELF`, `ALL` and `OTHER`.
        Refer to connected orgs [data scopes](https://docs.capillarytech.com/reference/connected-orgs-data-scopes)   for more information.
      </td>
    </tr>
  </tbody>
</Table>

# Request Path Parameters

| Parameter  | Data type | Description                          |
| :--------- | :-------- | :----------------------------------- |
| rewardId\* | Integer   | The unique identifier of the reward. |

# Response Parameters

| Parameter              | Datatype | Description                                                                                                                                                                                                                                                                                                                                                                                          |
| :--------------------- | :------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `success`              | Boolean  | Indicates whether the request was successful.                                                                                                                                                                                                                                                                                                                                                        |
| `code`                 | Integer  | Status code associated with the response.                                                                                                                                                                                                                                                                                                                                                            |
| `message`              | String   | Descriptive message about the response status.                                                                                                                                                                                                                                                                                                                                                       |
| `id`                   | Integer  | Unique identifier for the reward.                                                                                                                                                                                                                                                                                                                                                                    |
| `type`                 | Enum     | Type of the reward. \<br>Supported values: `POINTS`, `VOUCHER`, `PHYSICAL_VOUCHER`, `FREE_VOUCHER`.                                                                                                                                                                                                                                                                                                  |
| `startDate`            | String   | Start date and time of the reward's validity.                                                                                                                                                                                                                                                                                                                                                        |
| `endDate`              | String   | End date and time of the reward's validity.                                                                                                                                                                                                                                                                                                                                                          |
| `enabled`              | Boolean  | Indicates if the reward is currently enabled.                                                                                                                                                                                                                                                                                                                                                        |
| `priority`             | Integer  | Priority of the reward, used for sorting or processing.                                                                                                                                                                                                                                                                                                                                              |
| `intouchPoints`        | Integer  | The number of points customers need to burn to purchase the reward.                                                                                                                                                                                                                                                                                                                                  |
| `intouchSeriesId`      | String   | Coupon series ID or cart promotion ID when intouch reward is selected.                                                                                                                                                                                                                                                                                                                               |
| `tier`                 | String   | Tier classification of the reward, e.g., SILVER.                                                                                                                                                                                                                                                                                                                                                     |
| `redemptionType`       | Enum     | Type of intouch reward or vendor reward. \<br>Supported values: `INTOUCH_REWARD`, `VENDOR_INTOUCH_REWARD`, `VENDOR_ONLY_REWARD`, `CART_PROMOTION`.                                                                                                                                                                                                                                                   |
| `vendorId`             | Integer  | Identifier for the vendor associated with the reward.                                                                                                                                                                                                                                                                                                                                                |
| `vendorRedemption`     | Integer  | Redemption value or code at the vendor.                                                                                                                                                                                                                                                                                                                                                              |
| `languageSpecificInfo` | Array    | Array of objects containing language-specific details.                                                                                                                                                                                                                                                                                                                                               |
| `name`                 | String   | Name of the reward in a specific language.                                                                                                                                                                                                                                                                                                                                                           |
| `description`          | String   | Description of the reward in a specific language.                                                                                                                                                                                                                                                                                                                                                    |
| `termNConditionsId`    | String   | ID for the terms and conditions associated with the reward.                                                                                                                                                                                                                                                                                                                                          |
| `termNConditionsUrl`   | String   | URL to the terms and conditions document.                                                                                                                                                                                                                                                                                                                                                            |
| `imageId`              | String   | Identifier for the main image associated with the reward.                                                                                                                                                                                                                                                                                                                                            |
| `imageUrl`             | String   | URL to the main image associated with the reward.                                                                                                                                                                                                                                                                                                                                                    |
| `thumbnailId`          | String   | Identifier for the thumbnail image associated with the reward.                                                                                                                                                                                                                                                                                                                                       |
| `thumbnailUrl`         | String   | URL to the thumbnail image associated with the reward.                                                                                                                                                                                                                                                                                                                                               |
| `enabled`              | Boolean  | Indicates if the language-specific information is enabled.                                                                                                                                                                                                                                                                                                                                           |
| `images`               | Object   | A list of image details related to the reward.                                                                                                                                                                                                                                                                                                                                                       |
| `name`                 | String   | Name of the image.                                                                                                                                                                                                                                                                                                                                                                                   |
| `altText`              | String   | Alternative text or description of the image.                                                                                                                                                                                                                                                                                                                                                        |
| `id`                   | String   | Identifier for internally stored images, generated when uploaded to the file service. Not applicable for external images.                                                                                                                                                                                                                                                                            |
| `url`                  | String   | URL of the image.                                                                                                                                                                                                                                                                                                                                                                                    |
| `isExternal`           | Boolean  | Indicates if the image is hosted on an external server.                                                                                                                                                                                                                                                                                                                                              |
| `videos`               | Object   | A list of video details related to the reward.                                                                                                                                                                                                                                                                                                                                                       |
| `name`                 | String   | Name of the video.                                                                                                                                                                                                                                                                                                                                                                                   |
| `altText`              | String   | Alternative text or description of the video.                                                                                                                                                                                                                                                                                                                                                        |
| `id`                   | String   | Identifier for internally stored images, generated when uploaded to the file service. Not applicable for external videos.                                                                                                                                                                                                                                                                            |
| `url`                  | String   | URL of the video.                                                                                                                                                                                                                                                                                                                                                                                    |
| `isExternal`           | Boolean  | Indicates if the video is hosted on an external server.                                                                                                                                                                                                                                                                                                                                              |
| `customFields`         | Object   | Object containing key-value pairs for custom fields specific to the reward.                                                                                                                                                                                                                                                                                                                          |
| `paymentConfigs`       | Object   | The `paymentConfigs` object includes the type of payment mode used to purchase the reward. The `ID` is the unique identifier for the payment mode configuration used.                                                                                                                                                                                                                                |
| `paymentMode`          | Enum     | The type of payment mode used to redeem the reward. \<br>For example: `POINTS`, `FREE`, `CASH`, `POINTS_CASH`, `CONV_RATIO`.                                                                                                                                                                                                                                                                         |
| `id`                   | Integer  | Unique identifier for the payment configuration.                                                                                                                                                                                                                                                                                                                                                     |
| `segment`              | Object   | Customer Segmentation is a logical grouping of audiences based on shared characteristics. Segments are used to tailor the marketing efforts of brands effectively. For more information on segments, refer [here](https://docs.capillarytech.com/docs/introduction-to-customer-segmentation).                                                                                                        |
| `segmentId`            | Integer  | Segment ID is a unique identifier used to retrieve specific segment information.                                                                                                                                                                                                                                                                                                                     |
| `partitionId`          | Integer  | The Partition ID is a unique identifier used to retrieve information. You can pass one or more Partition IDs to access the desired data.                                                                                                                                                                                                                                                             |
| `orgLevelRestrictions` | Array    | `orgLevelRestrictions` refers to a set of conditions that determine whether a reward or action is valid or accessible for specific organizations. This restriction is usually applied at the organization level to control which organizations can view, access, or redeem the rewards based on certain validation criteria. It will specify the connected orgs in which the restriction is applied. |

<br />

```json Response: With OTHER as DATA-SCOPE
{
    "status": {
        "success": true,
        "code": 6001,
        "message": "Reward fetched successfully"
    },
    "reward": {
        "id": 55724,
        "type": "POINTS",
        "startDate": "2024-04-10 11:51:50",
        "endDate": "2025-11-29 11:09:49",
        "enabled": true,
        "priority": 1,
        "intouchPoints": 0,
        "intouchSeriesId": null,
        "tier": "SILVER",
        "group": null,
        "tillId": null,
        "programId": null,
        "label": null,
        "redemptionType": "MILES",
        "vendorId": 138,
        "vendorRedemption": 5166,
        "communications": null,
        "categories": null,
        "geography": null,
        "languageSpecificInfo": [
            {
                "rewardId": 55724,
                "languageCode": "en",
                "name": " INTOUCH Enabled",
                "description": "Description",
                "termNConditionsId": "EXDR12987R",
                "termNConditionsUrl": "https://s3.amazonaws.com/crm-nightly-new-solutions/testOrg_marvel_20230822_147/EXDR12987R?X-Amz-Security-Token=FwoGZXIvYXdzEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDDNv4AWezGCyejIFzyLWAciB8nJGUyt8yBSJ5x%2FZlBibuImGQnnmrAMjyZA9tBEjbZFaZ7V835gOKe0U5UygwArf%2BCq3xbk273ZXUt4MWI1W9DhFAm995OGvDZbo8hOaSSvYfcKZNa0X7UWLI2tnG1gotqVFrbRAbQfJWqNv5Gm7GTn%2BQFVVP2t4izxO49H0UfuZNNLwUAxQ70FYv7sdjnvMyPO7iC9TOQf969pKOIeJOTvGxrNk%2FR5x5LA430cVikg02XBAsRKIoXiDaaN5Qldyxtaxg7uVB%2B1He%2FUCZOmlHdilXl0on8f5sAYyLaeq749YY2Vo%2BOGBMuh0jByX4fFwG5RZFWfYoBb8aYnFfWCBkjBkmp9hf%2BAskA%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240416T114015Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIAXCQYYRKNO2RXSZOF%2F20240416%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=66d511a22d270ede7df418849ee351433701390d95b57f58a808ebcc3003631c",
                "imageId": "EXDR12987U",
                "imageUrl": "https://s3.amazonaws.com/crm-nightly-new-solutions/testOrg_marvel_20230822_147/EXDR12987U?X-Amz-Security-Token=FwoGZXIvYXdzEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDDNv4AWezGCyejIFzyLWAciB8nJGUyt8yBSJ5x%2FZlBibuImGQnnmrAMjyZA9tBEjbZFaZ7V835gOKe0U5UygwArf%2BCq3xbk273ZXUt4MWI1W9DhFAm995OGvDZbo8hOaSSvYfcKZNa0X7UWLI2tnG1gotqVFrbRAbQfJWqNv5Gm7GTn%2BQFVVP2t4izxO49H0UfuZNNLwUAxQ70FYv7sdjnvMyPO7iC9TOQf969pKOIeJOTvGxrNk%2FR5x5LA430cVikg02XBAsRKIoXiDaaN5Qldyxtaxg7uVB%2B1He%2FUCZOmlHdilXl0on8f5sAYyLaeq749YY2Vo%2BOGBMuh0jByX4fFwG5RZFWfYoBb8aYnFfWCBkjBkmp9hf%2BAskA%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240416T114015Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3599&X-Amz-Credential=ASIAXCQYYRKNO2RXSZOF%2F20240416%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=06e6d6d0ed4d9a6ed35c470dd7b850b64e05e9d296536cb540973d4ca52567d7",
                "thumbnailId": "EXDR12987T",
                "thumbnailUrl": "https://s3.amazonaws.com/crm-nightly-new-solutions/testOrg_marvel_20230822_147/EXDR12987T?X-Amz-Security-Token=FwoGZXIvYXdzEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDDNv4AWezGCyejIFzyLWAciB8nJGUyt8yBSJ5x%2FZlBibuImGQnnmrAMjyZA9tBEjbZFaZ7V835gOKe0U5UygwArf%2BCq3xbk273ZXUt4MWI1W9DhFAm995OGvDZbo8hOaSSvYfcKZNa0X7UWLI2tnG1gotqVFrbRAbQfJWqNv5Gm7GTn%2BQFVVP2t4izxO49H0UfuZNNLwUAxQ70FYv7sdjnvMyPO7iC9TOQf969pKOIeJOTvGxrNk%2FR5x5LA430cVikg02XBAsRKIoXiDaaN5Qldyxtaxg7uVB%2B1He%2FUCZOmlHdilXl0on8f5sAYyLaeq749YY2Vo%2BOGBMuh0jByX4fFwG5RZFWfYoBb8aYnFfWCBkjBkmp9hf%2BAskA%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240416T114015Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIAXCQYYRKNO2RXSZOF%2F20240416%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=5deeab87c79a60b4b66c13a9c9f7279c05048e9a0b3e2da7c134c8c95f7f2be9",
                "enabled": true,
                "images": [],
                "videos": [],
                "customFields": {
                    "047e": "defaultValue",
                    "fe8b": "defaultValue",
                    "9c9d": "defaultValue",
                }
            }
        ],
        "customFields": {
            "047e": "defaultValue",
            "fe8b": "defaultValue",
        },
        "owners": null,
        "supplementaryCriteriaRO": [],
        "groupName": null,
        "groupRank": null,
        "rewardRank": null,
        "restrictions": null,
        "rewardRevenueMeta": [],
        "rewardRevenueDefaults": [],
        "paymentConfigs": [
            {
                "paymentMode": "CONV_RATIO",
                "id": 11,
                "conversionRatio": 0.3300
            }
        ],
        "orgLevelRestrictions": [
            {
                "isValid": true,
                "orgId": 4000084
            },
            {
                "isValid": true,
                "orgId": 4000085
            }
        ]
    }
}
```
```json Response: With SELF as DATA-SCOPE
{
    "status": {
        "success": true,
        "code": 6001,
        "message": "Reward fetched successfully"
    },
    "reward": {
        "id": 55724,
        "type": "POINTS",
        "startDate": "2024-04-10 11:51:50",
        "endDate": "2025-11-29 11:09:49",
        "enabled": true,
        "priority": 1,
        "intouchPoints": 0,
        "intouchSeriesId": null,
        "tier": "SILVER",
        "group": null,
        "tillId": null,
        "programId": null,
        "label": null,
        "redemptionType": "MILES",
        "vendorId": 138,
        "vendorRedemption": 5166,
        "communications": null,
        "categories": null,
        "geography": null,
        "languageSpecificInfo": [
            {
                "rewardId": 55724,
                "languageCode": "en",
                "name": " INTOUCH Enabled",
                "description": "Description",
                "termNConditionsId": "EXDR12987R",
                "termNConditionsUrl": "https://s3.amazonaws.com/crm-nightly-new-solutions/testOrg_marvel_20230822_147/EXDR12987R?X-Amz-Security-Token=FwoGZXIvYXdzEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDDNv4AWezGCyejIFzyLWAciB8nJGUyt8yBSJ5x%2FZlBibuImGQnnmrAMjyZA9tBEjbZFaZ7V835gOKe0U5UygwArf%2BCq3xbk273ZXUt4MWI1W9DhFAm995OGvDZbo8hOaSSvYfcKZNa0X7UWLI2tnG1gotqVFrbRAbQfJWqNv5Gm7GTn%2BQFVVP2t4izxO49H0UfuZNNLwUAxQ70FYv7sdjnvMyPO7iC9TOQf969pKOIeJOTvGxrNk%2FR5x5LA430cVikg02XBAsRKIoXiDaaN5Qldyxtaxg7uVB%2B1He%2FUCZOmlHdilXl0on8f5sAYyLaeq749YY2Vo%2BOGBMuh0jByX4fFwG5RZFWfYoBb8aYnFfWCBkjBkmp9hf%2BAskA%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240416T114015Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIAXCQYYRKNO2RXSZOF%2F20240416%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=66d511a22d270ede7df418849ee351433701390d95b57f58a808ebcc3003631c",
                "imageId": "EXDR12987U",
                "imageUrl": "https://s3.amazonaws.com/crm-nightly-new-solutions/testOrg_marvel_20230822_147/EXDR12987U?X-Amz-Security-Token=FwoGZXIvYXdzEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDDNv4AWezGCyejIFzyLWAciB8nJGUyt8yBSJ5x%2FZlBibuImGQnnmrAMjyZA9tBEjbZFaZ7V835gOKe0U5UygwArf%2BCq3xbk273ZXUt4MWI1W9DhFAm995OGvDZbo8hOaSSvYfcKZNa0X7UWLI2tnG1gotqVFrbRAbQfJWqNv5Gm7GTn%2BQFVVP2t4izxO49H0UfuZNNLwUAxQ70FYv7sdjnvMyPO7iC9TOQf969pKOIeJOTvGxrNk%2FR5x5LA430cVikg02XBAsRKIoXiDaaN5Qldyxtaxg7uVB%2B1He%2FUCZOmlHdilXl0on8f5sAYyLaeq749YY2Vo%2BOGBMuh0jByX4fFwG5RZFWfYoBb8aYnFfWCBkjBkmp9hf%2BAskA%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240416T114015Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3599&X-Amz-Credential=ASIAXCQYYRKNO2RXSZOF%2F20240416%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=06e6d6d0ed4d9a6ed35c470dd7b850b64e05e9d296536cb540973d4ca52567d7",
                "thumbnailId": "EXDR12987T",
                "thumbnailUrl": "https://s3.amazonaws.com/crm-nightly-new-solutions/testOrg_marvel_20230822_147/EXDR12987T?X-Amz-Security-Token=FwoGZXIvYXdzEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDDNv4AWezGCyejIFzyLWAciB8nJGUyt8yBSJ5x%2FZlBibuImGQnnmrAMjyZA9tBEjbZFaZ7V835gOKe0U5UygwArf%2BCq3xbk273ZXUt4MWI1W9DhFAm995OGvDZbo8hOaSSvYfcKZNa0X7UWLI2tnG1gotqVFrbRAbQfJWqNv5Gm7GTn%2BQFVVP2t4izxO49H0UfuZNNLwUAxQ70FYv7sdjnvMyPO7iC9TOQf969pKOIeJOTvGxrNk%2FR5x5LA430cVikg02XBAsRKIoXiDaaN5Qldyxtaxg7uVB%2B1He%2FUCZOmlHdilXl0on8f5sAYyLaeq749YY2Vo%2BOGBMuh0jByX4fFwG5RZFWfYoBb8aYnFfWCBkjBkmp9hf%2BAskA%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240416T114015Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIAXCQYYRKNO2RXSZOF%2F20240416%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=5deeab87c79a60b4b66c13a9c9f7279c05048e9a0b3e2da7c134c8c95f7f2be9",
                "enabled": true,
                "images": [],
                "videos": [],
                "customFields": {
                    "047e": "defaultValue",
                    "fe8b": "defaultValue",
                    "9c9d": "defaultValue",
                }
            }
        ],
        "customFields": {
            "047e": "defaultValue",
            "fe8b": "defaultValue",
        },
        "owners": null,
        "supplementaryCriteriaRO": [],
        "groupName": null,
        "groupRank": null,
        "rewardRank": null,
        "restrictions": null,
        "rewardRevenueMeta": [],
        "rewardRevenueDefaults": [],
        "paymentConfigs": [
            {
                "paymentMode": "CONV_RATIO",
                "id": 11,
                "conversionRatio": 0.3300
            }
        ],
        "orgLevelRestrictions": [
            {
                "isValid": true,
                "orgId": 4000085
            }
        ]
    }
}
```
```json Failure: With ALL as a scope
{
    "data": null,
    "errors": [
      {
        "code": 310141,
        "message": 'Datascope 'ALL' is not supported for this 'API'
      }
      ],
    "warnings": null
}
```
```json With 'altText' for images and videos
{
    "status": {
        "success": true,
        "code": 6001,
        "message": "Reward fetched successfully"
    },
    "reward": {
        "id": 55724,
        "type": "POINTS",
        "startDate": "2024-04-10 11:51:50",
        "endDate": "2025-11-29 11:09:49",
        "enabled": true,
        "priority": 1,
        "intouchPoints": 0,
        "intouchSeriesId": null,
        "tier": "SILVER",
        "group": null,
        "tillId": null,
        "programId": null,
        "label": null,
        "redemptionType": "MILES",
        "vendorId": 138,
        "vendorRedemption": 5166,
        "communications": null,
        "categories": null,
        "geography": null,
        "languageSpecificInfo": [
            {
                "rewardId": 55724,
                "languageCode": "en",
                "name": " INTOUCH Enabled",
                "description": "Description",
                "termNConditionsId": "EXDR12987R",
                "termNConditionsUrl": "https://s3.amazonaws.com/crm-nightly-new-solutions/testOrg_marvel_20230822_147/EXDR12987R?X-Amz-Security-Token=FwoGZXIvYXdzEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDDNv4AWezGCyejIFzyLWAciB8nJGUyt8yBSJ5x%2FZlBibuImGQnnmrAMjyZA9tBEjbZFaZ7V835gOKe0U5UygwArf%2BCq3xbk273ZXUt4MWI1W9DhFAm995OGvDZbo8hOaSSvYfcKZNa0X7UWLI2tnG1gotqVFrbRAbQfJWqNv5Gm7GTn%2BQFVVP2t4izxO49H0UfuZNNLwUAxQ70FYv7sdjnvMyPO7iC9TOQf969pKOIeJOTvGxrNk%2FR5x5LA430cVikg02XBAsRKIoXiDaaN5Qldyxtaxg7uVB%2B1He%2FUCZOmlHdilXl0on8f5sAYyLaeq749YY2Vo%2BOGBMuh0jByX4fFwG5RZFWfYoBb8aYnFfWCBkjBkmp9hf%2BAskA%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240416T114015Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIAXCQYYRKNO2RXSZOF%2F20240416%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=66d511a22d270ede7df418849ee351433701390d95b57f58a808ebcc3003631c",
                "imageId": "EXDR12987U",
                "imageUrl": "https://s3.amazonaws.com/crm-nightly-new-solutions/testOrg_marvel_20230822_147/EXDR12987U?X-Amz-Security-Token=FwoGZXIvYXdzEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDDNv4AWezGCyejIFzyLWAciB8nJGUyt8yBSJ5x%2FZlBibuImGQnnmrAMjyZA9tBEjbZFaZ7V835gOKe0U5UygwArf%2BCq3xbk273ZXUt4MWI1W9DhFAm995OGvDZbo8hOaSSvYfcKZNa0X7UWLI2tnG1gotqVFrbRAbQfJWqNv5Gm7GTn%2BQFVVP2t4izxO49H0UfuZNNLwUAxQ70FYv7sdjnvMyPO7iC9TOQf969pKOIeJOTvGxrNk%2FR5x5LA430cVikg02XBAsRKIoXiDaaN5Qldyxtaxg7uVB%2B1He%2FUCZOmlHdilXl0on8f5sAYyLaeq749YY2Vo%2BOGBMuh0jByX4fFwG5RZFWfYoBb8aYnFfWCBkjBkmp9hf%2BAskA%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240416T114015Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3599&X-Amz-Credential=ASIAXCQYYRKNO2RXSZOF%2F20240416%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=06e6d6d0ed4d9a6ed35c470dd7b850b64e05e9d296536cb540973d4ca52567d7",
                "thumbnailId": "EXDR12987T",
                "thumbnailUrl": "https://s3.amazonaws.com/crm-nightly-new-solutions/testOrg_marvel_20230822_147/EXDR12987T?X-Amz-Security-Token=FwoGZXIvYXdzEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDDNv4AWezGCyejIFzyLWAciB8nJGUyt8yBSJ5x%2FZlBibuImGQnnmrAMjyZA9tBEjbZFaZ7V835gOKe0U5UygwArf%2BCq3xbk273ZXUt4MWI1W9DhFAm995OGvDZbo8hOaSSvYfcKZNa0X7UWLI2tnG1gotqVFrbRAbQfJWqNv5Gm7GTn%2BQFVVP2t4izxO49H0UfuZNNLwUAxQ70FYv7sdjnvMyPO7iC9TOQf969pKOIeJOTvGxrNk%2FR5x5LA430cVikg02XBAsRKIoXiDaaN5Qldyxtaxg7uVB%2B1He%2FUCZOmlHdilXl0on8f5sAYyLaeq749YY2Vo%2BOGBMuh0jByX4fFwG5RZFWfYoBb8aYnFfWCBkjBkmp9hf%2BAskA%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240416T114015Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIAXCQYYRKNO2RXSZOF%2F20240416%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=5deeab87c79a60b4b66c13a9c9f7279c05048e9a0b3e2da7c134c8c95f7f2be9",
                "enabled": true,
                "images": [
                 		{
                "name": "imageName",
                "altText": "product picture",
                "id": null,
                "url": "mypic.com",
                "isExternal": true
            }
                ],
                "videos": [
             		    	{
                "name": "videoName",
                "altText": "product picture",
                "id": null,
                "url": "mypic.com",
                "isExternal": true
            }
                ],
                "customFields": {
                    "047e": "defaultValue",
                    "fe8b": "defaultValue",
                    "9c9d": "defaultValue",
                }
            }
        ],
        "customFields": {
            "047e": "defaultValue",
            "fe8b": "defaultValue",
        },
        "owners": null,
        "supplementaryCriteriaRO": [],
        "groupName": null,
        "groupRank": null,
        "rewardRank": null,
        "restrictions": null,
        "rewardRevenueMeta": [],
        "rewardRevenueDefaults": [],
        "paymentConfigs": [
            {
                "paymentMode": "CONV_RATIO",
                "id": 11,
                "conversionRatio": 0.3300
            }
        ],
        "orgLevelRestrictions": [
            {
                "isValid": true,
                "orgId": 4000084
            },
            {
                "isValid": true,
                "orgId": 4000085
            }
        ]
    }
}
```