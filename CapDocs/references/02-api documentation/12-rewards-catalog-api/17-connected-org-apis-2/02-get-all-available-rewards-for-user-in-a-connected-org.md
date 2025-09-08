---
title: Get all available rewards for user in connected orgs
excerpt: ''
api:
  file: v1.json
  operationId: get-all-available-rewards-for-user-in-a-connected-org
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
This API gives all the details for the reward purchased such as Reward ID, Metadata, Intouch points, Programs/tiers, Reward restrictions/limits, and Catalog promotions applied. Org level restriction will also be specified in connected orgs.

> 👍 Note
>
> For detailed information about our APIs and for hands-on testing, refer documentation in [API overview](https://docs.capillarytech.com/reference/apioverview) and  step-by-step guide on making your first API call in [Make your first API call](https://docs.capillarytech.com/reference/make-your-first-api-call) .

> 🚧 **Warning**
>
> Use this API exclusively for connected orgs. For other orgs, use this [API](https://docs.capillarytech.com/reference/get-rewards-for-user) instead.

# Prerequisites

*   Authentication: Basic or OAuth authentication
*   Default access group

# Resource information

|                        |                                                                      |
| :--------------------- | :------------------------------------------------------------------- |
| URI                    | /api\_gateway/rewards/core/v1.1/user/rewards?userId=`\{customerId\}` |
| HTTP Method            | GET                                                                  |
| Pagination             | Yes                                                                  |
| Batch support          | No                                                                   |
| Rate limit information | None                                                                 |

# API endpoint example

`http:/eu.api.capillarytech.com/api_gateway/rewards/core/v1.1/user/rewards?userId=373718067`

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

        Supported headers: `SELF`, `OTHER` and `ALL`.

        Refer to connected orgs [data scopes](https://docs.capillarytech.com/reference/connected-orgs-data-scopes)   for more information. |
      </td>
    </tr>
  </tbody>
</Table>

# Request query parameters

<Table align={["left","left","left"]}>
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
        **`UserId*`**
      </td>

      <td>
        Long
      </td>

      <td>
        Unique identifier for the customer.
      </td>
    </tr>

    <tr>
      <td>
        `includeExpired`
      </td>

      <td>
        Boolean
      </td>

      <td>
        Set to true to retrieve details of expired rewards.
      </td>
    </tr>

    <tr>
      <td>
        `groupName`
      </td>

      <td>
        String
      </td>

      <td>
        Name of the group for which to fetch all associated rewards.
      </td>
    </tr>

    <tr>
      <td>
        `sortOnGroups`
      </td>

      <td>
        Boolean
      </td>

      <td>
        Set to true to sort rewards by groups.
      </td>
    </tr>

    <tr>
      <td>
        `language`
      </td>

      <td>
        String
      </td>

      <td>
        Filters rewards based on the specified language. For Example: "en" for English, "fr" for French.
      </td>
    </tr>

    <tr>
      <td>
        `area`
      </td>

      <td>
        String
      </td>

      <td>
        Filters rewards based on the specific area or locality.
      </td>
    </tr>

    <tr>
      <td>
        `city`
      </td>

      <td>
        String
      </td>

      <td>
        Filters rewards based on the specified city.
      </td>
    </tr>

    <tr>
      <td>
        `country`
      </td>

      <td>
        String
      </td>

      <td>
        Filters rewards based on the specified country.
      </td>
    </tr>

    <tr>
      <td>
        `category`
      </td>

      <td>
        String
      </td>

      <td>
        Filters rewards based on the category they belong to.
      </td>
    </tr>

    <tr>
      <td>
        `label`
      </td>

      <td>
        String
      </td>

      <td>
        Filters rewards based on the specific label assigned to them.
      </td>
    </tr>

    <tr>
      <td>
        `group`
      </td>

      <td>
        String
      </td>

      <td>
        Filters rewards based on the specific group they are part of.
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
        Filters rewards based on their type.
      </td>
    </tr>

    <tr>
      <td>
        `tier`
      </td>

      <td>
        String
      </td>

      <td>
        Filters rewards based on the tier level.
      </td>
    </tr>

    <tr>
      <td>
        `sortBy`
      </td>

      <td>
        String
      </td>

      <td>
        Sorts the reward based on `startDate` and `endDate`.
        **NOTE:** If `sortBy` param is not passed, sorting will happen on reward creation date in DESC order.
      </td>
    </tr>

    <tr>
      <td>
        `orderBy`
      </td>

      <td>
        String
      </td>

      <td>
        Specifies the order in which results should be sorted. Supported values: "`ASC`" for ascending, "`DESC`" for descending.
      </td>
    </tr>

    <tr>
      <td>
        `filterBy`
      </td>

      <td>
        String
      </td>

      <td>
        Filters the rewards based on specific attributes or properties, such as language or reward type. For Example: "`language:en`" to filter rewards in English.
      </td>
    </tr>

    <tr>
      <td>
        `page`
      </td>

      <td>
        Integer
      </td>

      <td>
        Specify the page.
      </td>
    </tr>

    <tr>
      <td>
        `size`
      </td>

      <td>
        Integer
      </td>

      <td>
        Specify the size of pages.
      </td>
    </tr>
  </tbody>
</Table>

<br />

```curl
http://eu.api.capillarytech.com/api_gateway/rewards/core/v1.1/user/rewards?userId=373718067
```

# Response parameters

| Parameter Name           | Description                                                                                                                                                                                                                                                                                                                                                                                        |
| ------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| success                  | Indicates whether the request was successful or not.                                                                                                                                                                                                                                                                                                                                               |
| code                     | The status code of the response.                                                                                                                                                                                                                                                                                                                                                                   |
| message                  | A message describing the result of the request.                                                                                                                                                                                                                                                                                                                                                    |
| rewardList               | A list of reward objects containing information about each reward.                                                                                                                                                                                                                                                                                                                                 |
| orgId                    | Organization ID of the reward from which it was created.                                                                                                                                                                                                                                                                                                                                           |
| id                       | The unique identifier of the reward.                                                                                                                                                                                                                                                                                                                                                               |
| name                     | The name of the reward.                                                                                                                                                                                                                                                                                                                                                                            |
| description              | A description of the reward.                                                                                                                                                                                                                                                                                                                                                                       |
| imageId                  | The unique identifier of the reward's image.                                                                                                                                                                                                                                                                                                                                                       |
| imageUrl                 | The URL of the reward's image.                                                                                                                                                                                                                                                                                                                                                                     |
| thumbnailId              | The unique identifier of the reward's thumbnail image.                                                                                                                                                                                                                                                                                                                                             |
| thumbnailUrl             | The URL of the reward's thumbnail image.                                                                                                                                                                                                                                                                                                                                                           |
| termAndConditionsId      | The unique identifier of the reward's terms and conditions.                                                                                                                                                                                                                                                                                                                                        |
| termAndConditionsUrl     | The URL of the reward's terms and conditions.                                                                                                                                                                                                                                                                                                                                                      |
| tier                     | The tier associated with the reward.                                                                                                                                                                                                                                                                                                                                                               |
| label                    | The label associated with the reward.                                                                                                                                                                                                                                                                                                                                                              |
| priority                 | The priority of the reward.                                                                                                                                                                                                                                                                                                                                                                        |
| intouchPoints            | The number of intouch points associated with the reward.                                                                                                                                                                                                                                                                                                                                           |
| group                    | The group to which the reward belongs.                                                                                                                                                                                                                                                                                                                                                             |
| startTime                | The start time of the reward.                                                                                                                                                                                                                                                                                                                                                                      |
| endTime                  | The end time of the reward.                                                                                                                                                                                                                                                                                                                                                                        |
| expired                  | Indicates whether the reward has expired or not.                                                                                                                                                                                                                                                                                                                                                   |
| started                  | Indicates whether the reward has started or not.                                                                                                                                                                                                                                                                                                                                                   |
| programId                | The unique identifier of the loyalty program associated with the reward.                                                                                                                                                                                                                                                                                                                           |
| categoryList             | A list of categories associated with the reward, with each category containing its name and enabled status.                                                                                                                                                                                                                                                                                        |
| customFields             | Custom fields associated with the reward.                                                                                                                                                                                                                                                                                                                                                          |
| loyalty program criteria | Criteria for the loyalty program associated with the reward, including loyalty program ID, tier IDs, and partner program IDs.                                                                                                                                                                                                                                                                      |
| restrictions             | Restrictions applied to the reward, including customer level and reward level restrictions.                                                                                                                                                                                                                                                                                                        |
| groups                   | Specifies the group associated with the reward.                                                                                                                                                                                                                                                                                                                                                    |
| rewardRank               | The rank or position of the reward within its category or list.                                                                                                                                                                                                                                                                                                                                    |
| images                   | A list of image details related to the reward.                                                                                                                                                                                                                                                                                                                                                     |
| name                     | Name of the image.                                                                                                                                                                                                                                                                                                                                                                                 |
| altText                  | Alternative text or description of the image.                                                                                                                                                                                                                                                                                                                                                      |
| id                       | Identifier for internally stored images, generated when uploaded to the file service. Not applicable for external images.                                                                                                                                                                                                                                                                          |
| url                      | URL of the image.                                                                                                                                                                                                                                                                                                                                                                                  |
| isExternal               | Indicates if the image is hosted on an external server.                                                                                                                                                                                                                                                                                                                                            |
| videos                   | A list of video details related to the reward.                                                                                                                                                                                                                                                                                                                                                     |
| name                     | Name of the video.                                                                                                                                                                                                                                                                                                                                                                                 |
| altText                  | Alternative text or description of the video.                                                                                                                                                                                                                                                                                                                                                      |
| id                       | Identifier for internally stored videos, generated when uploaded to the file service. Not applicable for external videos.                                                                                                                                                                                                                                                                          |
| url                      | URL of the video.                                                                                                                                                                                                                                                                                                                                                                                  |
| isExternal               | Indicates if the video is hosted on an external server.                                                                                                                                                                                                                                                                                                                                            |
| paymentConfigs           | The paymentConfigs object includes the type of payment mode used to purchase the reward. The ID is the unique identifier for the payment mode configuration used.                                                                                                                                                                                                                                  |
| paymentMode              | The type of payment mode supported to redeem the reward. Supported values: POINTS, FREE, CASH, POINTS\_CASH, CONV\_RATIO.                                                                                                                                                                                                                                                                          |
| rewardRevenueDetails     | The list containing the comission percentages for each participant                                                                                                                                                                                                                                                                                                                                 |
| brandCommission          | Commission percentage the brand receives.                                                                                                                                                                                                                                                                                                                                                          |
| cardSeries               | A list of card codes associated with the reward.                                                                                                                                                                                                                                                                                                                                                   |
| id                       | Unique identifier of the card that was associated with the reward.                                                                                                                                                                                                                                                                                                                                 |
| code                     | Unique series code of the card associated with the reward.                                                                                                                                                                                                                                                                                                                                         |
| labels                   | List of Label IDs associated with the reward.                                                                                                                                                                                                                                                                                                                                                      |
| endCustomerCommission    | Commission percentage the end customer recieves.                                                                                                                                                                                                                                                                                                                                                   |
| id                       | Unique identifier for the payment configurations                                                                                                                                                                                                                                                                                                                                                   |
| orgLevelRestrictions     | orgLevelRestrictions refers to a set of conditions that determine whether a reward or action is valid or accessible for specific organizations. This restriction is usually applied at the organization level to control which organizations can view, access, or redeem the rewards based on certain validation criteria. It will specify the connected orgs in which the restriction is applied. |

<br />

```json Response: With DATA-SCOPE as ALL
{
    "status": {
        "success": true,
        "code": 200,
        "message": "User Reward fetched successfully"
    },
    "rewardList": [
        {
            "id": 282,
            "orgId": 4000084,
            "name": "Donations Test 2",
            "description": "Donations Test 2",
            "imageId": null,
            "imageUrl": null,
            "thumbnailId": null,
            "thumbnailUrl": null,
            "termAndConditionsId": "6356f6a7-0c95-4943-b25e-86df441a7e99",
            "termAndConditionsUrl": "https://ushc-crm-solutionsnbfwryxetc.s3.amazonaws.com/rewards/1ca9aa51-2901-4928-ba7a-1b9be04.html",
            "tier": null,
            "label": null,
            "priority": 1,
            "intouchPoints": 0,
            "group": null,
            "startTime": "2024-10-15 08:29:00",
            "endTime": "2030-10-31 06:59:30",
            "expired": false,
            "started": true,
            "programId": null,
            "categoryList": [
                {
                    "id": 6,
                    "name": "lifestyle",
                    "enabled": true
                }
            ],
            "customFields": {},
            "loyaltyProgramCriteria": [],
            "groups": [],
            "rewardRestrictions": {
                "isValid": true
            },
            "rewardRank": null,
            "images": [],
            "videos": [],
            "paymentConfigs": [
                {
                    "paymentMode": "CONV_RATIO",
                    "id": 24,
                    "conversionRatio": 1
                }
            ]
        },
        {
            "id": 281,
            "orgId": 4000084,
            "name": "Donations Test 1",
            "description": "Donations Test 1",
            "imageId": null,
            "imageUrl": null,
            "thumbnailId": null,
            "thumbnailUrl": null,
            "termAndConditionsId": "6356f6a7-0c95-4943-b25e-86df441a7e99",
            "termAndConditionsUrl": "https://ushc-crm-solutionsnbfwryxetc.s3.amazonaws.com/rewards/1ca9aa51-2901-4928-ba7a-1b9be04.html",
            "tier": null,
            "label": null,
            "priority": 1,
            "intouchPoints": 0,
            "group": null,
            "startTime": "2024-10-15 08:10:00",
            "endTime": "2030-10-31 06:59:30",
            "expired": false,
            "started": true,
            "programId": null,
            "categoryList": [
                {
                    "id": 6,
                    "name": "lifestyle",
                    "enabled": true
                }
            ],
            "customFields": {},
            "loyaltyProgramCriteria": [],
            "groups": [],
            "rewardRestrictions": {
                "isValid": true
            },
            "rewardRank": null,
            "images": [],
            "videos": [],
            "paymentConfigs": [
                {
                    "paymentMode": "CONV_RATIO",
                    "id": 23,
                    "conversionRatio": 1
                }
            ]
        },
        {
            "id": 280,
            "orgId": 4000084,
            "name": "Donations Test",
            "description": "Donations Test",
            "imageId": null,
            "imageUrl": null,
            "thumbnailId": null,
            "thumbnailUrl": null,
            "termAndConditionsId": "6356f6a7-0c95-4943-b25e-86df441a7e99",
            "termAndConditionsUrl": "https://ushc-crm-solutionsnbfwryxetc.s3.amazonaws.com/rewards/1ca9aa51-2901-4928-ba7a-1b9be04.html",
            "tier": null,
            "label": null,
            "priority": 1,
            "intouchPoints": 0,
            "group": null,
            "startTime": "2024-10-15 08:09:00",
            "endTime": "2030-10-31 06:59:30",
            "expired": false,
            "started": true,
            "programId": null,
            "categoryList": [
                {
                    "id": 6,
                    "name": "lifestyle",
                    "enabled": true
                }
            ],
            "customFields": {},
            "loyaltyProgramCriteria": [],
            "groups": [],
            "rewardRestrictions": {
                "isValid": true
            },
            "rewardRank": null,
            "images": [],
            "videos": [],
            "paymentConfigs": [
                {
                    "paymentMode": "POINTS",
                    "id": 22,
                    "points": 1
                }
            ]
        },
        {
            "id": 279,
            "orgId": 4000084,
            "name": "Offers Test Voucher New Rdmption Test",
            "description": "Offers Test Voucher New Rdmption Test",
            "imageId": null,
            "imageUrl": null,
            "thumbnailId": null,
            "thumbnailUrl": null,
            "termAndConditionsId": "6356f6a7-0c95-4943-b25e-86df441a7e99",
            "termAndConditionsUrl": "https://ushc-crm-solutionsnbfwryxetc.s3.amazonaws.com/rewards/1ca9aa51-2901-4928-ba7a-1b9be04.html",
            "tier": null,
            "label": null,
            "priority": 1,
            "intouchPoints": 0,
            "group": null,
            "startTime": "2024-10-15 01:30:00",
            "endTime": "2030-10-31 06:59:30",
            "expired": false,
            "started": true,
            "programId": null,
            "categoryList": [
                {
                    "id": 6,
                    "name": "lifestyle",
                    "enabled": true
                }
            ],
            "customFields": {},
            "loyaltyProgramCriteria": [],
            "groups": [],
            "rewardRestrictions": {
                "isValid": true
            },
            "rewardRank": null,
            "images": [],
            "videos": [],
            "paymentConfigs": [
                {
                    "paymentMode": "POINTS",
                    "id": 21,
                    "points": 1
                }
            ]
        },
        {
            "id": 278,
            "orgId": 4000084,
            "name": "Offers Test Voucher New Redemption",
            "description": "Offers Test Voucher New Redemption",
            "imageId": null,
            "imageUrl": null,
            "thumbnailId": null,
            "thumbnailUrl": null,
            "termAndConditionsId": "6356f6a7-0c95-4943-b25e-86df441a7e99",
            "termAndConditionsUrl": "https://ushc-crm-solutionsnbfwryxetc.s3.amazonaws.com/rewards/1ca9aa51-2901-4928-ba7a-1b9be04.html",
            "tier": null,
            "label": null,
            "priority": 1,
            "intouchPoints": 0,
            "group": null,
            "startTime": "2024-10-15 01:20:00",
            "endTime": "2030-10-31 06:59:30",
            "expired": false,
            "started": true,
            "programId": null,
            "categoryList": [
                {
                    "id": 6,
                    "name": "lifestyle",
                    "enabled": true
                }
            ],
            "customFields": {},
            "loyaltyProgramCriteria": [],
            "groups": [],
            "rewardRestrictions": {
                "isValid": true
            },
            "rewardRank": null,
            "images": [],
            "videos": [],
            "paymentConfigs": [
                {
                    "paymentMode": "POINTS",
                    "id": 20,
                    "points": 1
                }
            ]
        },
        {
            "id": 277,
            "orgId": 4000084,
            "name": "Offers Test Voucher New Test",
            "description": "Offers Test Voucher New Test",
            "imageId": null,
            "imageUrl": null,
            "thumbnailId": null,
            "thumbnailUrl": null,
            "termAndConditionsId": "6356f6a7-0c95-4943-b25e-86df441a7e99",
            "termAndConditionsUrl": "https://ushc-crm-solutionsnbfwryxetc.s3.amazonaws.com/rewards/1ca9aa51-2901-4928-ba7a-1b9be04.html",
            "tier": null,
            "label": null,
            "priority": 1,
            "intouchPoints": 0,
            "group": null,
            "startTime": "2024-10-14 23:26:00",
            "endTime": "2030-10-31 06:59:30",
            "expired": false,
            "started": true,
            "programId": null,
            "categoryList": [
                {
                    "id": 6,
                    "name": "lifestyle",
                    "enabled": true
                }
            ],
            "customFields": {},
            "loyaltyProgramCriteria": [],
            "groups": [],
            "rewardRestrictions": {
                "isValid": true
            },
            "rewardRank": null,
            "images": [],
            "videos": [],
            "paymentConfigs": [
                {
                    "paymentMode": "POINTS",
                    "id": 19,
                    "points": 1
                }
            ]
        },
        {
            "id": 276,
            "orgId": 4000084,
            "name": "Offers Test Voucher New",
            "description": "Offers Test Voucher New",
            "imageId": null,
            "imageUrl": null,
            "thumbnailId": null,
            "thumbnailUrl": null,
            "termAndConditionsId": "6356f6a7-0c95-4943-b25e-86df441a7e99",
            "termAndConditionsUrl": "https://ushc-crm-solutionsnbfwryxetc.s3.amazonaws.com/rewards/1ca9aa51-2901-4928-ba7a-1b9be04.html",
            "tier": null,
            "label": null,
            "priority": 1,
            "intouchPoints": 0,
            "group": null,
            "startTime": "2024-10-14 23:22:00",
            "endTime": "2030-10-31 06:59:30",
            "expired": false,
            "started": true,
            "programId": null,
            "categoryList": [
                {
                    "id": 6,
                    "name": "lifestyle",
                    "enabled": true
                }
            ],
            "customFields": {},
            "loyaltyProgramCriteria": [],
            "groups": [],
            "rewardRestrictions": {
                "isValid": true
            },
            "rewardRank": null,
            "images": [],
            "videos": [],
            "paymentConfigs": [
                {
                    "paymentMode": "POINTS",
                    "id": 18,
                    "points": 1
                }
            ]
        },
        {
            "id": 275,
            "orgId": 4000084,
            "name": "Offers Test Voucher",
            "description": "Offers Test Voucher",
            "imageId": null,
            "imageUrl": null,
            "thumbnailId": null,
            "thumbnailUrl": null,
            "termAndConditionsId": "6356f6a7-0c95-4943-b25e-86df441a7e99",
            "termAndConditionsUrl": "https://ushc-crm-solutionsnbfwryxetc.s3.amazonaws.com/rewards/1ca9aa51-2901-4928-ba7a-1b9be04.html",
            "tier": null,
            "label": null,
            "priority": 1,
            "intouchPoints": 0,
            "group": null,
            "startTime": "2024-10-14 21:43:00",
            "endTime": "2030-10-31 06:59:30",
            "expired": false,
            "started": true,
            "programId": null,
            "categoryList": [
                {
                    "id": 6,
                    "name": "lifestyle",
                    "enabled": true
                }
            ],
            "customFields": {},
            "loyaltyProgramCriteria": [],
            "groups": [],
            "rewardRestrictions": {
                "isValid": true
            },
            "rewardRank": null,
            "images": [],
            "videos": [],
            "paymentConfigs": [
                {
                    "paymentMode": "POINTS",
                    "id": 17,
                    "points": 1
                }
            ]
        },
        {
            "id": 274,
            "orgId": 4000084,
            "name": "Test",
            "description": "Test",
            "imageId": "ea2265d8-16ea-4821-be19-f6e62c845992",
            "imageUrl": "https://ushc-crm-solutionsnbfwryxetc.s3.amazonaws.com/rewards/69684250-79c9-43d8-b711-a54252e4.png",
            "thumbnailId": "6522e847-96d7-4870-80f5-a88932ba5793",
            "thumbnailUrl": "https://ushc-crm-solutionsnbfwryxetc.s3.amazonaws.com/rewards/d2557af5-6c97-4bc3-a651-e49c984e.png",
            "termAndConditionsId": "6356f6a7-0c95-4943-b25e-86df441a7e99",
            "termAndConditionsUrl": "https://ushc-crm-solutionsnbfwryxetc.s3.amazonaws.com/rewards/1ca9aa51-2901-4928-ba7a-1b9be04.html",
            "tier": null,
            "label": null,
            "priority": 1,
            "intouchPoints": 1,
            "group": null,
            "startTime": "2024-10-14 21:41:10",
            "endTime": "2024-10-21 21:41:10",
            "expired": false,
            "started": true,
            "programId": null,
            "categoryList": [
                {
                    "id": 6,
                    "name": "lifestyle",
                    "enabled": true
                }
            ],
            "customFields": {},
            "loyaltyProgramCriteria": [],
            "groups": [],
            "rewardRestrictions": {
                "isValid": true
            },
            "rewardRank": null,
            "images": [],
            "videos": []
        },
        {
            "id": 200,
            "orgId": 4000085,
            "name": "Dummy-coupon-1",
            "description": "NA",
            "imageId": "7bee39e4-c3f8-4b11-8f2e-608f5a124f0e",
            "imageUrl": "https://ushc-crm-solutionsnbfwryxetc.s3.amazonaws.com/rewards/657e5161-77ea-4363-aeff-33b335a4.jpg",
            "thumbnailId": "90201fc9-dc42-4902-8827-fdf03c97f3ca",
            "thumbnailUrl": "https://ushc-crm-solutionsnbfwryxetc.s3.amazonaws.com/rewards/2dc6427d-2aec-49cd-97e0-42caab03.jpg",
            "termAndConditionsId": "ba0d10c2-fc39-4e03-b128-11a7ff6ce8bc",
            "termAndConditionsUrl": "https://ushc-crm-solutionsnbfwryxetc.s3.amazonaws.com/rewards/1d562d5f-1245-4c68-ae4b-f582024.html",
            "tier": "",
            "label": "",
            "priority": 1,
            "intouchPoints": 5,
            "group": "",
            "startTime": "2024-09-19 10:53:11",
            "endTime": "2025-09-30 10:53:11",
            "expired": false,
            "started": true,
            "programId": null,
            "categoryList": [
                {
                    "id": 3,
                    "name": "category1",
                    "enabled": true
                },
                {
                    "id": 4,
                    "name": "category2",
                    "enabled": true
                }
            ],
            "customFields": {},
            "loyaltyProgramCriteria": [],
            "groups": [],
            "rewardRestrictions": {
                "isValid": true
            },
            "rewardRank": null,
            "images": [],
            "videos": []
        },
        {
            "id": 199,
            "orgId": 4000085,
            "name": "Offer 2% - Intouch Reward",
            "description": "Offer 2% - Intouch Reward",
            "imageId": "837d7bdb-4668-4f98-a0c1-9f1bd4642e02",
            "imageUrl": "https://ushc-crm-solutionsnbfwryxetc.s3.amazonaws.com/rewards/2eb5e9d7-5a29-4dc6-b4f9-fcd1c540.png",
            "thumbnailId": "9ae83562-0223-4c83-8fd6-eac6214a6aa8",
            "thumbnailUrl": "https://ushc-crm-solutionsnbfwryxetc.s3.amazonaws.com/rewards/5f05e7ac-cad2-4cb6-a417-59f79bcc.png",
            "termAndConditionsId": "71a2a65f-b2d6-4629-adc5-14c331c3cfcf",
            "termAndConditionsUrl": "https://ushc-crm-solutionsnbfwryxetc.s3.amazonaws.com/rewards/0e844f45-d746-448d-a1a3-9499c3b.html",
            "tier": "",
            "label": "",
            "priority": 1,
            "intouchPoints": 2,
            "group": "",
            "startTime": "2024-09-17 08:23:11",
            "endTime": "2024-12-30 11:23:11",
            "expired": false,
            "started": true,
            "programId": null,
            "categoryList": [
                {
                    "id": 3,
                    "name": "category1",
                    "enabled": true
                }
            ],
            "customFields": {},
            "loyaltyProgramCriteria": [],
            "groups": [],
            "rewardRestrictions": {
                "isValid": true
            },
            "rewardRank": null,
            "images": [],
            "videos": []
        },
        {
            "id": 198,
            "orgId": 4000085,
            "name": "Dummy reward 1",
            "description": "Dummy reward 1 desc",
            "imageId": "8a05b09c-cb82-4d69-90e4-d1d6d5a923e6",
            "imageUrl": "https://ushc-crm-solutionsnbfwryxetc.s3.amazonaws.com/rewards/473e3316-12d2-49d1-813e-f80a9eea.png",
            "thumbnailId": "407557a0-a024-4e2d-b3b5-268a44ffaa6e",
            "thumbnailUrl": "https://ushc-crm-solutionsnbfwryxetc.s3.amazonaws.com/rewards/afde3c30-4b8f-435d-89e0-a50d53ef.png",
            "termAndConditionsId": "b79043be-80b3-41b0-b04e-7259c3f2a6ba",
            "termAndConditionsUrl": "https://ushc-crm-solutionsnbfwryxetc.s3.amazonaws.com/rewards/d4381cc8-b664-4a72-aca4-ea31d70.html",
            "tier": "",
            "label": "",
            "priority": 1,
            "intouchPoints": 3,
            "group": "",
            "startTime": "2024-08-16 09:57:47",
            "endTime": "2024-12-31 12:57:47",
            "expired": false,
            "started": true,
            "programId": null,
            "categoryList": [
                {
                    "id": 3,
                    "name": "category1",
                    "enabled": true
                }
            ],
            "customFields": {},
            "loyaltyProgramCriteria": [],
            "groups": [],
            "rewardRestrictions": {
                "isValid": true
            },
            "rewardRank": null,
            "images": [],
            "videos": []
        },
        {
            "id": 197,
            "orgId": 4000085,
            "name": "Amzn 1$ voucher",
            "description": "Amzn 1$ voucher desc",
            "imageId": "d3bfa8ed-9647-4b6c-b0dd-9239a810e5e0",
            "imageUrl": "https://ushc-crm-solutionsnbfwryxetc.s3.amazonaws.com/rewards/bb036141-0555-43a2-a1c0-4f1fb8c7.jpg",
            "thumbnailId": "a2158a4e-622b-4dfe-b201-cd3b4e240aac",
            "thumbnailUrl": "https://ushc-crm-solutionsnbfwryxetc.s3.amazonaws.com/rewards/022e33cb-26de-4d61-9295-766aec02.jpg",
            "termAndConditionsId": "ddb2166e-2de0-4d0a-a5a9-57fc073432d3",
            "termAndConditionsUrl": "https://ushc-crm-solutionsnbfwryxetc.s3.amazonaws.com/rewards/66a82f95-787f-4c50-9041-b62f202.html",
            "tier": "",
            "label": "",
            "priority": 1,
            "intouchPoints": 2,
            "group": "",
            "startTime": "2024-08-16 09:44:01",
            "endTime": "2024-12-30 12:44:01",
            "expired": false,
            "started": true,
            "programId": null,
            "categoryList": [
                {
                    "id": 3,
                    "name": "category1",
                    "enabled": true
                }
            ],
            "customFields": {},
            "loyaltyProgramCriteria": [],
            "groups": [],
            "rewardRestrictions": {
                "isValid": true
            },
            "rewardRank": null,
            "images": [],
            "videos": []
        },
        {
            "id": 195,
            "orgId": 4000085,
            "name": "ACH Deposit - Test 1",
            "description": "ACH Deposit - Test 1",
            "imageId": "b2616e34-aac4-4c8d-b93b-78a4ad80db2f",
            "imageUrl": "https://ushc-crm-solutionsnbfwryxetc.s3.amazonaws.com/rewards/02401226-630a-4f6e-8686-e2bee37e.png",
            "thumbnailId": "b68d4f83-7010-4055-a7c8-180dd4243dc9",
            "thumbnailUrl": "https://ushc-crm-solutionsnbfwryxetc.s3.amazonaws.com/rewards/0a239757-ead7-4896-928e-e3cb05c7.png",
            "termAndConditionsId": "5e0cf72d-fa62-49a6-aaf7-d98b9e5c33bf",
            "termAndConditionsUrl": "https://ushc-crm-solutionsnbfwryxetc.s3.amazonaws.com/rewards/e03daa55-984b-4ff5-b680-1533359.html",
            "tier": "",
            "label": "",
            "priority": 1,
            "intouchPoints": 2,
            "group": "",
            "startTime": "2024-08-16 09:13:25",
            "endTime": "2024-12-30 22:43:25",
            "expired": false,
            "started": true,
            "programId": null,
            "categoryList": [
                {
                    "id": 3,
                    "name": "category1",
                    "enabled": true
                }
            ],
            "customFields": {},
            "loyaltyProgramCriteria": [],
            "groups": [],
            "rewardRestrictions": {
                "isValid": true
            },
            "rewardRank": null,
            "images": [],
            "videos": [],
            "paymentConfigs": [
                {
                    "paymentMode": "CONV_RATIO",
                    "id": 8,
                    "conversionRatio": 0.52
                }
            ]
        },
        {
            "id": 194,
            "orgId": 4000085,
            "name": "HSA Deposit - Test 1",
            "description": "HSA Deposit - Test 1 des",
            "imageId": "c57cb7d1-1018-4222-9162-088b65ee2975",
            "imageUrl": "https://ushc-crm-solutionsnbfwryxetc.s3.amazonaws.com/rewards/a7486843-42eb-4ffd-aa21-9da640fa.jpg",
            "thumbnailId": "8117ddae-98bc-4a5a-ba9c-c0fefbfd38d1",
            "thumbnailUrl": "https://ushc-crm-solutionsnbfwryxetc.s3.amazonaws.com/rewards/18c50f23-0348-4000-9d3d-22206bd3.jpg",
            "termAndConditionsId": "ebc0c73c-b4a2-4072-aec8-3994e2f92f83",
            "termAndConditionsUrl": "https://ushc-crm-solutionsnbfwryxetc.s3.amazonaws.com/rewards/e50ef36a-0a23-4543-b262-594829e.html",
            "tier": "",
            "label": "",
            "priority": 1,
            "intouchPoints": 5,
            "group": "",
            "startTime": "2024-08-16 06:25:30",
            "endTime": "2024-12-31 09:25:30",
            "expired": false,
            "started": true,
            "programId": null,
            "categoryList": [
                {
                    "id": 3,
                    "name": "category1",
                    "enabled": true
                }
            ],
            "customFields": {},
            "loyaltyProgramCriteria": [],
            "groups": [],
            "rewardRestrictions": {
                "isValid": true
            },
            "rewardRank": null,
            "images": [],
            "videos": [],
            "paymentConfigs": [
                {
                    "paymentMode": "CONV_RATIO",
                    "id": 6,
                    "conversionRatio": 0.5
                }
            ]
        },
        {
            "id": 192,
            "orgId": 4000085,
            "name": "Donations-Test1",
            "description": "Donations-Test1 as \"CHARITY\" - issue a coupon per qty",
            "imageId": "b0774ae0-a501-4591-87d8-8f7fa48e61bc",
            "imageUrl": "https://ushc-crm-solutionsnbfwryxetc.s3.amazonaws.com/rewards/e99784eb-c4d4-489b-bc96-64b81331.png",
            "thumbnailId": "5e4b21ac-ce04-4dcf-a220-4056462a5198",
            "thumbnailUrl": "https://ushc-crm-solutionsnbfwryxetc.s3.amazonaws.com/rewards/ca89bc6c-da3e-43af-8eae-3d9b2cb8.png",
            "termAndConditionsId": "6629c4f0-34e9-4024-af6a-424096232f0b",
            "termAndConditionsUrl": "https://ushc-crm-solutionsnbfwryxetc.s3.amazonaws.com/rewards/15314871-0e77-43c2-ac47-edec1a1.html",
            "tier": "",
            "label": "",
            "priority": 1,
            "intouchPoints": 10,
            "group": "",
            "startTime": "2024-08-16 01:50:55",
            "endTime": "2024-12-31 04:50:55",
            "expired": false,
            "started": true,
            "programId": null,
            "categoryList": [
                {
                    "id": 3,
                    "name": "category1",
                    "enabled": true
                }
            ],
            "customFields": {},
            "loyaltyProgramCriteria": [],
            "groups": [],
            "rewardRestrictions": {
                "isValid": true
            },
            "rewardRank": null,
            "images": [],
            "videos": []
        },
        {
            "id": 191,
            "orgId": 4000085,
            "name": "Merchandise-Test1",
            "description": "Merchandise-Test1 configured as physical reward. Issues coupons for qty of issuaal",
            "imageId": "809f196e-84ce-4153-a805-13df486cd43d",
            "imageUrl": "https://ushc-crm-solutionsnbfwryxetc.s3.amazonaws.com/rewards/e5ff3ed9-cefe-4103-bc42-470057f3.png",
            "thumbnailId": "2532c6c6-b114-4c59-a77a-98fd1ee68cff",
            "thumbnailUrl": "https://ushc-crm-solutionsnbfwryxetc.s3.amazonaws.com/rewards/1a77f337-6eec-4dee-9c7b-7fe0d1c8.png",
            "termAndConditionsId": "d77045f0-dada-44ad-b499-0d24ad7cb68e",
            "termAndConditionsUrl": "https://ushc-crm-solutionsnbfwryxetc.s3.amazonaws.com/rewards/8e341d2d-0cbe-4ee7-80cc-6c59456.html",
            "tier": "",
            "label": "",
            "priority": 1,
            "intouchPoints": 5,
            "group": "",
            "startTime": "2024-08-14 05:10:11",
            "endTime": "2024-12-30 21:40:11",
            "expired": false,
            "started": true,
            "programId": null,
            "categoryList": [
                {
                    "id": 3,
                    "name": "category1",
                    "enabled": true
                }
            ],
            "customFields": {},
            "loyaltyProgramCriteria": [],
            "groups": [],
            "rewardRestrictions": {
                "isValid": true
            },
            "rewardRank": null,
            "images": [],
            "videos": []
        }
    ],
    "pagingDto": {
        "last": true,
        "totalElements": 17,
        "totalPages": 1,
        "numberOfElements": 17,
        "first": false,
        "size": 9,
        "number": 0
    },
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
```
```json Response: With DATA-SCOPE as OTHER
{
    "status": {
        "success": true,
        "code": 200,
        "message": "User Reward fetched successfully"
    },
    "rewardList": [
        {
            "id": 344,
            "orgId": 4000084,
            "name": "Old Age Care Organization",
            "description": "Old Age Care Organization",
            "imageId": null,
            "imageUrl": null,
            "thumbnailId": null,
            "thumbnailUrl": null,
            "termAndConditionsId": "6356f6a7-0c95-4943-b25e-86df441a7e99",
            "termAndConditionsUrl": "https://ushc-crm-solutionsnbfwryxetc.s3.amazonaws.com/rewards/1ca9aa51-2901-4928-ba7a-1b9be04.html",
            "tier": null,
            "label": null,
            "priority": 1,
            "intouchPoints": 0,
            "group": null,
            "startTime": "2024-11-13 18:07:00",
            "endTime": "2026-10-31 17:59:30",
            "expired": false,
            "started": true,
            "programId": null,
            "categoryList": [],
            "customFields": {
                "provider_logo_url": "https://cdn.sanity.io/images/c4naai3b/production/d2dc1d712cb5e5191b483a5f9d4e64503ecd3ada-512x512.svg",
                "section_1_header": "About",
                "section_2_header": "Where will the funds be used",
                "section_2_content": "New building construction",
                "section_3_content": "The donation may or may not be tax-deductible. Users are advised to consult their tax advisors to determine if their donation qualifies for any tax deductions.",
                "donationGoalAmt": "$4000",
                "section_3_header": "Terms and conditions",
                "master_image_url": "https://cdn.sanity.io/images/c4naai3b/non-production/b6133bd71818b3e8b17a3347d146c37e44391aec-342x192.svg",
                "section_1_content": "Old age care organization fund generation"
            },
            "loyaltyProgramCriteria": [],
            "groups": [],
            "rewardRestrictions": {
                "isValid": true,
                "rewardLevel": [
                    {
                        "id": 51,
                        "isValid": true,
                        "consumed": 223,
                        "repeatFrequencyType": "NO_LIMIT",
                        "limit": 10000,
                        "kpi": "REDEMPTION_VALUE"
                    }
                ]
            },
            "rewardRank": null,
            "images": [],
            "videos": [],
            "paymentConfigs": [
                {
                    "paymentMode": "CONV_RATIO",
                    "id": 52,
                    "conversionRatio": 1.0000
                }
            ]
        },
        {
            "id": 338,
            "orgId": 4000084,
            "name": "Allbirds Get 15% off your first purchase",
            "description": "New Customers: get 15% off your first purchase",
            "imageId": null,
            "imageUrl": null,
            "thumbnailId": null,
            "thumbnailUrl": null,
            "termAndConditionsId": "6356f6a7-0c95-4943-b25e-86df441a7e99",
            "termAndConditionsUrl": "https://ushc-crm-solutionsnbfwryxetc.s3.amazonaws.com/rewards/1ca9aa51-2901-4928-ba7a-1b9be04.html",
            "tier": null,
            "label": null,
            "priority": null,
            "intouchPoints": 0,
            "group": null,
            "startTime": "2024-11-13 17:26:01",
            "endTime": "2024-12-31 00:00:00",
            "expired": false,
            "started": true,
            "programId": null,
            "categoryList": [],
            "customFields": {
                "provider_logo_url": "https://netb-dev.s3.amazonaws.com/logos/allbirds-cashback-logo.png",
                "section_1_header": "About",
                "section_2_header": "How to use this discount offer?",
                "section_2_content": "After redeeming, simply go to the redeemed offer’s page and tap on the 'Go to Store' button. Your discount will be automatically applied when you use this button to visit the store or website.",
                "voucherUrl": "https://allbirds.pxf.io/c/2696084/2165601/13831?subId1=OPT-",
                "section_3_header": "Terms and conditions",
                "master_image_url": "https://netb-dev.s3.amazonaws.com/lifestyle-large/allbirds-cashback-lifestyle-large.png",
                "voucherType": "COUPON",
                "rewardType": "Offer",
                "voucherCode": "AFF-FIRST15",
                "section_1_content": "New Customers: get 15% off your first purchase"
            },
            "loyaltyProgramCriteria": [],
            "groups": [],
            "rewardRestrictions": {
                "isValid": true
            },
            "rewardRank": null,
            "images": [],
            "videos": [],
            "paymentConfigs": [
                {
                    "paymentMode": "POINTS",
                    "id": 50,
                    "points": 1.0000
                }
            ]
        },
        {
            "id": 337,
            "orgId": 4000084,
            "name": "Microsoft Surface Book 3 Essential Bundle",
            "description": "Surface Book 3 Essential Bundle",
            "imageId": null,
            "imageUrl": null,
            "thumbnailId": null,
            "thumbnailUrl": null,
            "termAndConditionsId": "6356f6a7-0c95-4943-b25e-86df441a7e99",
            "termAndConditionsUrl": "https://ushc-crm-solutionsnbfwryxetc.s3.amazonaws.com/rewards/1ca9aa51-2901-4928-ba7a-1b9be04.html",
            "tier": null,
            "label": null,
            "priority": null,
            "intouchPoints": 0,
            "group": null,
            "startTime": "2024-11-13 17:24:40",
            "endTime": "2027-02-21 00:00:00",
            "expired": false,
            "started": true,
            "programId": null,
            "categoryList": [],
            "customFields": {
                "provider_logo_url": "https://netb-dev.s3.amazonaws.com/logos/microsoft-cashback-logo.png",
                "section_1_header": "About",
                "section_2_header": "How to apply this discount?",
                "section_2_content": "After redeeming, simply go to the redeemed offer’s page and tap on the 'Go to Store' button. Your discount will be automatically applied when you use this button to visit the store or website.",
                "voucherUrl": "https://click.linksynergy.com/fs-bin/click?id=fgzhfz5NV04&offerid=1495426.406&type=3&subid=0&u1=OPT-",
                "section_3_header": "Terms and conditions",
                "master_image_url": "https://netb-dev.s3.amazonaws.com/lifestyle-large/microsoft-cashback-lifestyle-large.png",
                "voucherType": "URL",
                "rewardType": "Offer",
                "voucherCode": "DUMMY",
                "section_1_content": "Surface Book 3 Essential Bundle"
            },
            "loyaltyProgramCriteria": [],
            "groups": [],
            "rewardRestrictions": {
                "isValid": true
            },
            "rewardRank": null,
            "images": [],
            "videos": [],
            "paymentConfigs": [
                {
                    "paymentMode": "POINTS",
                    "id": 49,
                    "points": 1.0000
                }
            ]
        },
        {
            "id": 323,
            "orgId": 4000084,
            "name": "American Heart Association",
            "description": null,
            "imageId": null,
            "imageUrl": null,
            "thumbnailId": null,
            "thumbnailUrl": null,
            "termAndConditionsId": null,
            "termAndConditionsUrl": null,
            "tier": null,
            "label": null,
            "priority": null,
            "intouchPoints": 0,
            "group": null,
            "startTime": "2024-11-12 01:25:00",
            "endTime": "2030-10-31 07:55:30",
            "expired": false,
            "started": true,
            "programId": null,
            "categoryList": [
                {
                    "id": 6,
                    "name": "lifestyle",
                    "enabled": true
                }
            ],
            "customFields": {
                "voucherUrl": "https://www.google.com",
                "rewardType": "Donation",
                "voucherCode": "TEST_123"
            },
            "loyaltyProgramCriteria": [],
            "groups": [],
            "rewardRestrictions": {
                "isValid": true,
                "rewardLevel": [
                    {
                        "id": 49,
                        "isValid": true,
                        "consumed": 22,
                        "repeatFrequencyType": "NO_LIMIT",
                        "limit": 100000,
                        "kpi": "QUANTITY"
                    }
                ]
            },
            "rewardRank": null,
            "images": [],
            "videos": [],
            "paymentConfigs": [
                {
                    "paymentMode": "CONV_RATIO",
                    "id": 39,
                    "conversionRatio": 1.0000
                }
            ]
        },
        {
            "id": 288,
            "orgId": 4000084,
            "name": "15% off Voucher on American Eagle",
            "description": null,
            "imageId": null,
            "imageUrl": null,
            "thumbnailId": null,
            "thumbnailUrl": null,
            "termAndConditionsId": null,
            "termAndConditionsUrl": null,
            "tier": null,
            "label": null,
            "priority": null,
            "intouchPoints": 0,
            "group": null,
            "startTime": "2024-10-30 08:39:00",
            "endTime": "2030-10-31 06:59:30",
            "expired": false,
            "started": true,
            "programId": null,
            "categoryList": [
                {
                    "id": 6,
                    "name": "lifestyle",
                    "enabled": true
                }
            ],
            "customFields": {
                "voucherUrl": "https://www.google.com",
                "rewardType": "Offer",
                "voucherCode": "TEST_123"
            },
            "loyaltyProgramCriteria": [],
            "groups": [],
            "rewardRestrictions": {
                "isValid": true
            },
            "rewardRank": null,
            "images": [],
            "videos": [],
            "paymentConfigs": [
                {
                    "paymentMode": "POINTS",
                    "id": 27,
                    "points": 1.0000
                }
            ]
        }
    ],
    "pagingDto": {
        "last": true,
        "totalElements": 5,
        "totalPages": 1,
        "numberOfElements": 5,
        "first": true,
        "size": 5,
        "number": 0
    },
    "orgLevelRestrictions": [
        {
            "isValid": true,
            "orgId": 4000084
        }
    ]
}
```
```json Response: With DATA-SCOPE as SELF
{
    "status": {
        "success": true,
        "code": 200,
        "message": "User Reward fetched successfully"
    },
    "rewardList": [
        {
            "id": 570,
            "orgId": 4000085,
            "name": "testreward1",
            "description": "testreward1",
            "imageId": null,
            "imageUrl": null,
            "thumbnailId": null,
            "thumbnailUrl": null,
            "termAndConditionsId": null,
            "termAndConditionsUrl": null,
            "tier": null,
            "label": null,
            "priority": 1,
            "intouchPoints": 500,
            "group": null,
            "startTime": "2024-11-21 01:03:00",
            "endTime": "2025-07-11 09:43:00",
            "expired": false,
            "started": true,
            "programId": null,
            "categoryList": [
                {
                    "id": 4,
                    "name": "category2",
                    "enabled": true
                }
            ],
            "customFields": {},
            "loyaltyProgramCriteria": [],
            "groups": [],
            "rewardRestrictions": {
                "isValid": true,
                "customerLevel": [
                    {
                        "id": 459,
                        "isValid": true,
                        "consumed": 0,
                        "repeatFrequencyType": "DAYS",
                        "limit": 10,
                        "interval": 30,
                        "kpi": "QUANTITY"
                    },
                    {
                        "id": 460,
                        "isValid": true,
                        "consumed": 0,
                        "repeatFrequencyType": "MONTHS",
                        "limit": 50,
                        "interval": 12,
                        "kpi": "QUANTITY"
                    }
                ],
                "rewardLevel": [
                    {
                        "id": 458,
                        "isValid": true,
                        "consumed": 0,
                        "repeatFrequencyType": "NO_LIMIT",
                        "limit": 10000,
                        "kpi": "QUANTITY"
                    }
                ]
            },
            "rewardRank": 1,
            "images": [],
            "videos": [],
            "paymentConfigs": [
                {
                    "paymentMode": "FREE",
                    "id": 260
                }
            ]
        },
        {
            "id": 568,
            "orgId": 4000085,
            "name": "Gift Card Test",
            "description": "Gift Card Test",
            "imageId": null,
            "imageUrl": null,
            "thumbnailId": null,
            "thumbnailUrl": null,
            "termAndConditionsId": null,
            "termAndConditionsUrl": null,
            "tier": null,
            "label": null,
            "priority": 1,
            "intouchPoints": 0,
            "group": null,
            "startTime": "2024-11-20 17:03:00",
            "endTime": "2030-10-30 20:29:00",
            "expired": false,
            "started": true,
            "programId": null,
            "categoryList": [],
            "customFields": {},
            "loyaltyProgramCriteria": [],
            "groups": [],
            "rewardRestrictions": {
                "isValid": true
            },
            "rewardRank": 1,
            "images": [],
            "videos": [],
            "paymentConfigs": [
                {
                    "paymentMode": "CONV_RATIO",
                    "id": 258,
                    "conversionRatio": 1.0000
                }
            ]
        },
        {
            "id": 565,
            "orgId": 4000085,
            "name": "Offer on  Air Jordan1 ",
            "description": "Exclusive Nike swag: Limited merchandise.",
            "imageId": null,
            "imageUrl": null,
            "thumbnailId": null,
            "thumbnailUrl": null,
            "termAndConditionsId": null,
            "termAndConditionsUrl": null,
            "tier": null,
            "label": null,
            "priority": 1,
            "intouchPoints": 500,
            "group": "Experiment reward",
            "startTime": "2024-11-20 04:15:00",
            "endTime": "2024-12-07 01:42:29",
            "expired": false,
            "started": true,
            "programId": null,
            "categoryList": [],
            "customFields": {},
            "loyaltyProgramCriteria": [],
            "groups": [],
            "rewardRestrictions": {
                "isValid": true
            },
            "rewardRank": null,
            "images": [],
            "videos": []
        },
        {
            "id": 331,
            "orgId": 4000085,
            "name": "Offer on  Air Jordan1 ",
            "description": "Exclusive Nike swag: Limited merchandise.",
            "imageId": null,
            "imageUrl": null,
            "thumbnailId": null,
            "thumbnailUrl": null,
            "termAndConditionsId": null,
            "termAndConditionsUrl": null,
            "tier": null,
            "label": null,
            "priority": 1,
            "intouchPoints": 500,
            "group": "Experiment reward",
            "startTime": "2024-11-13 01:04:00",
            "endTime": "2024-12-07 01:42:29",
            "expired": false,
            "started": true,
            "programId": null,
            "categoryList": [],
            "customFields": {},
            "loyaltyProgramCriteria": [],
            "groups": [],
            "rewardRestrictions": {
                "isValid": true
            },
            "rewardRank": null,
            "images": [],
            "videos": []
        },
        {
            "id": 324,
            "orgId": 4000085,
            "name": "Client Fullfilled HSA",
            "description": "Client Fullfilled HSA",
            "imageId": null,
            "imageUrl": null,
            "thumbnailId": null,
            "thumbnailUrl": null,
            "termAndConditionsId": "500873d1-7c3c-44d8-ad42-6d71c2dc5c78",
            "termAndConditionsUrl": "https://ushc-crm-solutionsnbfwryxetc.s3.amazonaws.com/rewards/b00cf211-05f8-4664-a483-12f2b90.html",
            "tier": null,
            "label": null,
            "priority": 1,
            "intouchPoints": 0,
            "group": null,
            "startTime": "2024-11-12 07:25:00",
            "endTime": "2030-10-30 20:29:00",
            "expired": false,
            "started": true,
            "programId": null,
            "categoryList": [],
            "customFields": {},
            "loyaltyProgramCriteria": [],
            "groups": [],
            "rewardRestrictions": {
                "isValid": true
            },
            "rewardRank": 1,
            "images": [],
            "videos": [],
            "paymentConfigs": [
                {
                    "paymentMode": "CONV_RATIO",
                    "id": 40,
                    "conversionRatio": 1.0000
                }
            ]
        },
        {
            "id": 321,
            "orgId": 4000085,
            "name": "Offer on  Air Jordan1 ",
            "description": "Exclusive Nike swag: Limited merchandise.",
            "imageId": null,
            "imageUrl": null,
            "thumbnailId": null,
            "thumbnailUrl": null,
            "termAndConditionsId": null,
            "termAndConditionsUrl": null,
            "tier": null,
            "label": null,
            "priority": 1,
            "intouchPoints": 500,
            "group": "Experiment reward",
            "startTime": "2024-11-12 00:00:00",
            "endTime": "2024-12-07 01:42:29",
            "expired": false,
            "started": true,
            "programId": null,
            "categoryList": [],
            "customFields": {},
            "loyaltyProgramCriteria": [],
            "groups": [],
            "rewardRestrictions": {
                "isValid": true
            },
            "rewardRank": null,
            "images": [],
            "videos": []
        },
        {
            "id": 320,
            "orgId": 4000085,
            "name": "Offer on  Air Jordan1 ",
            "description": "Exclusive Nike swag: Limited merchandise.",
            "imageId": null,
            "imageUrl": null,
            "thumbnailId": null,
            "thumbnailUrl": null,
            "termAndConditionsId": null,
            "termAndConditionsUrl": null,
            "tier": null,
            "label": null,
            "priority": 1,
            "intouchPoints": 500,
            "group": "Experiment reward",
            "startTime": "2024-11-13 04:45:00",
            "endTime": "2024-12-07 01:42:29",
            "expired": false,
            "started": true,
            "programId": null,
            "categoryList": [],
            "customFields": {},
            "loyaltyProgramCriteria": [],
            "groups": [],
            "rewardRestrictions": {
                "isValid": true
            },
            "rewardRank": null,
            "images": [],
            "videos": []
        },
        {
            "id": 308,
            "orgId": 4000085,
            "name": "ACH",
            "description": "ACH Issual",
            "imageId": null,
            "imageUrl": null,
            "thumbnailId": null,
            "thumbnailUrl": null,
            "termAndConditionsId": "500873d1-7c3c-44d8-ad42-6d71c2dc5c78",
            "termAndConditionsUrl": "https://ushc-crm-solutionsnbfwryxetc.s3.amazonaws.com/rewards/b00cf211-05f8-4664-a483-12f2b90.html",
            "tier": null,
            "label": null,
            "priority": 1,
            "intouchPoints": 0,
            "group": null,
            "startTime": "2024-11-10 02:29:00",
            "endTime": "2030-10-30 20:29:00",
            "expired": false,
            "started": true,
            "programId": null,
            "categoryList": [],
            "customFields": {},
            "loyaltyProgramCriteria": [],
            "groups": [],
            "rewardRestrictions": {
                "isValid": true
            },
            "rewardRank": 1,
            "images": [],
            "videos": [],
            "paymentConfigs": [
                {
                    "paymentMode": "CONV_RATIO",
                    "id": 33,
                    "conversionRatio": 1.0000
                }
            ]
        },
        {
            "id": 307,
            "orgId": 4000085,
            "name": "CHEQUE",
            "description": "CHEQUE Issual",
            "imageId": null,
            "imageUrl": null,
            "thumbnailId": null,
            "thumbnailUrl": null,
            "termAndConditionsId": "500873d1-7c3c-44d8-ad42-6d71c2dc5c78",
            "termAndConditionsUrl": "https://ushc-crm-solutionsnbfwryxetc.s3.amazonaws.com/rewards/b00cf211-05f8-4664-a483-12f2b90.html",
            "tier": null,
            "label": null,
            "priority": 1,
            "intouchPoints": 0,
            "group": null,
            "startTime": "2024-11-10 02:21:00",
            "endTime": "2030-10-30 20:29:00",
            "expired": false,
            "started": true,
            "programId": null,
            "categoryList": [],
            "customFields": {},
            "loyaltyProgramCriteria": [],
            "groups": [],
            "rewardRestrictions": {
                "isValid": true
            },
            "rewardRank": 1,
            "images": [],
            "videos": [],
            "paymentConfigs": [
                {
                    "paymentMode": "CONV_RATIO",
                    "id": 32,
                    "conversionRatio": 1.0000
                }
            ]
        },
        {
            "id": 306,
            "orgId": 4000085,
            "name": "Optum Financial Rewards V4",
            "description": "Optum Financial Rewards V4",
            "imageId": null,
            "imageUrl": null,
            "thumbnailId": null,
            "thumbnailUrl": null,
            "termAndConditionsId": "500873d1-7c3c-44d8-ad42-6d71c2dc5c78",
            "termAndConditionsUrl": "https://ushc-crm-solutionsnbfwryxetc.s3.amazonaws.com/rewards/b00cf211-05f8-4664-a483-12f2b90.html",
            "tier": null,
            "label": null,
            "priority": null,
            "intouchPoints": 0,
            "group": null,
            "startTime": "2024-11-08 21:30:00",
            "endTime": "2030-10-30 20:29:00",
            "expired": false,
            "started": true,
            "programId": null,
            "categoryList": [],
            "customFields": {},
            "loyaltyProgramCriteria": [],
            "groups": [],
            "rewardRestrictions": {
                "isValid": true
            },
            "rewardRank": null,
            "images": [],
            "videos": [],
            "paymentConfigs": [
                {
                    "paymentMode": "CONV_RATIO",
                    "id": 31,
                    "conversionRatio": 1.0000
                }
            ]
        },
        {
            "id": 290,
            "orgId": 4000085,
            "name": "2% Off",
            "description": "2% Offer",
            "imageId": null,
            "imageUrl": null,
            "thumbnailId": null,
            "thumbnailUrl": null,
            "termAndConditionsId": null,
            "termAndConditionsUrl": null,
            "tier": "",
            "label": "",
            "priority": 1,
            "intouchPoints": 2,
            "group": "",
            "startTime": "2024-11-07 12:05:22",
            "endTime": "2024-12-31 01:35:22",
            "expired": false,
            "started": true,
            "programId": null,
            "categoryList": [
                {
                    "id": 3,
                    "name": "category1",
                    "enabled": true
                },
                {
                    "id": 4,
                    "name": "category2",
                    "enabled": true
                }
            ],
            "customFields": {},
            "loyaltyProgramCriteria": [],
            "groups": [],
            "rewardRestrictions": {
                "isValid": true
            },
            "rewardRank": null,
            "images": [],
            "videos": []
        },
        {
            "id": 289,
            "orgId": 4000085,
            "name": "Client Fulfilled HSA $",
            "description": "Client Fulfilled HSA $",
            "imageId": null,
            "imageUrl": null,
            "thumbnailId": null,
            "thumbnailUrl": null,
            "termAndConditionsId": "500873d1-7c3c-44d8-ad42-6d71c2dc5c78",
            "termAndConditionsUrl": "https://ushc-crm-solutionsnbfwryxetc.s3.amazonaws.com/rewards/b00cf211-05f8-4664-a483-12f2b90.html",
            "tier": null,
            "label": null,
            "priority": 1,
            "intouchPoints": 0,
            "group": null,
            "startTime": "2024-11-07 08:53:00",
            "endTime": "2030-10-30 20:29:00",
            "expired": false,
            "started": true,
            "programId": null,
            "categoryList": [],
            "customFields": {},
            "loyaltyProgramCriteria": [],
            "groups": [],
            "rewardRestrictions": {
                "isValid": true
            },
            "rewardRank": 1,
            "images": [],
            "videos": []
        },
        {
            "id": 286,
            "orgId": 4000085,
            "name": "Gift Card Generic Reward",
            "description": "Gift Card Generic Reward",
            "imageId": null,
            "imageUrl": null,
            "thumbnailId": null,
            "thumbnailUrl": null,
            "termAndConditionsId": "500873d1-7c3c-44d8-ad42-6d71c2dc5c78",
            "termAndConditionsUrl": "https://ushc-crm-solutionsnbfwryxetc.s3.amazonaws.com/rewards/b00cf211-05f8-4664-a483-12f2b90.html",
            "tier": null,
            "label": null,
            "priority": 1,
            "intouchPoints": 0,
            "group": null,
            "startTime": "2024-10-29 08:38:00",
            "endTime": "2030-10-30 20:29:00",
            "expired": false,
            "started": true,
            "programId": null,
            "categoryList": [
                {
                    "id": 4,
                    "name": "category2",
                    "enabled": true
                }
            ],
            "customFields": {},
            "loyaltyProgramCriteria": [],
            "groups": [],
            "rewardRestrictions": {
                "isValid": true
            },
            "rewardRank": 1,
            "images": [],
            "videos": [],
            "paymentConfigs": [
                {
                    "paymentMode": "CONV_RATIO",
                    "id": 25,
                    "conversionRatio": 1.0000
                }
            ]
        },
        {
            "id": 285,
            "orgId": 4000085,
            "name": "Gift_Card Demo",
            "description": "Gift_Card Demo",
            "imageId": null,
            "imageUrl": null,
            "thumbnailId": null,
            "thumbnailUrl": null,
            "termAndConditionsId": "500873d1-7c3c-44d8-ad42-6d71c2dc5c78",
            "termAndConditionsUrl": "https://ushc-crm-solutionsnbfwryxetc.s3.amazonaws.com/rewards/b00cf211-05f8-4664-a483-12f2b90.html",
            "tier": "",
            "label": "",
            "priority": 1,
            "intouchPoints": 5,
            "group": "",
            "startTime": "2024-10-24 11:53:00",
            "endTime": "2024-12-31 11:53:00",
            "expired": false,
            "started": true,
            "programId": null,
            "categoryList": [
                {
                    "id": 3,
                    "name": "category1",
                    "enabled": true
                },
                {
                    "id": 4,
                    "name": "category2",
                    "enabled": true
                }
            ],
            "customFields": {},
            "loyaltyProgramCriteria": [],
            "groups": [],
            "rewardRestrictions": {
                "isValid": true
            },
            "rewardRank": null,
            "images": [],
            "videos": []
        },
        {
            "id": 284,
            "orgId": 4000085,
            "name": "Test-Coupon-1",
            "description": "Test-Coupon-1",
            "imageId": null,
            "imageUrl": null,
            "thumbnailId": null,
            "thumbnailUrl": null,
            "termAndConditionsId": "2cc84718-4749-4251-938e-e85755410576",
            "termAndConditionsUrl": "https://ushc-crm-solutionsnbfwryxetc.s3.amazonaws.com/rewards/306cfa0b-c146-4aa9-8263-ef8ae73.html",
            "tier": null,
            "label": null,
            "priority": 1,
            "intouchPoints": 10,
            "group": null,
            "startTime": "2024-10-21 10:37:31",
            "endTime": "2024-12-28 09:07:31",
            "expired": false,
            "started": true,
            "programId": null,
            "categoryList": [
                {
                    "id": 3,
                    "name": "category1",
                    "enabled": true
                }
            ],
            "customFields": {},
            "loyaltyProgramCriteria": [],
            "groups": [],
            "rewardRestrictions": {
                "isValid": true
            },
            "rewardRank": null,
            "images": [],
            "videos": []
        },
        {
            "id": 200,
            "orgId": 4000085,
            "name": "Dummy-coupon-1",
            "description": "NA",
            "imageId": "7bee39e4-c3f8-4b11-8f2e-608f5a124f0e",
            "imageUrl": "https://ushc-crm-solutionsnbfwryxetc.s3.amazonaws.com/rewards/657e5161-77ea-4363-aeff-33b335a4.jpg",
            "thumbnailId": "90201fc9-dc42-4902-8827-fdf03c97f3ca",
            "thumbnailUrl": "https://ushc-crm-solutionsnbfwryxetc.s3.amazonaws.com/rewards/2dc6427d-2aec-49cd-97e0-42caab03.jpg",
            "termAndConditionsId": "ba0d10c2-fc39-4e03-b128-11a7ff6ce8bc",
            "termAndConditionsUrl": "https://ushc-crm-solutionsnbfwryxetc.s3.amazonaws.com/rewards/1d562d5f-1245-4c68-ae4b-f582024.html",
            "tier": "",
            "label": "",
            "priority": 1,
            "intouchPoints": 5,
            "group": "",
            "startTime": "2024-09-19 10:53:11",
            "endTime": "2025-09-30 10:53:11",
            "expired": false,
            "started": true,
            "programId": null,
            "categoryList": [
                {
                    "id": 3,
                    "name": "category1",
                    "enabled": true
                },
                {
                    "id": 4,
                    "name": "category2",
                    "enabled": true
                }
            ],
            "customFields": {},
            "loyaltyProgramCriteria": [],
            "groups": [],
            "rewardRestrictions": {
                "isValid": true
            },
            "rewardRank": null,
            "images": [],
            "videos": []
        },
        {
            "id": 199,
            "orgId": 4000085,
            "name": "Offer 2% - Intouch Reward",
            "description": "Offer 2% - Intouch Reward",
            "imageId": "837d7bdb-4668-4f98-a0c1-9f1bd4642e02",
            "imageUrl": "https://ushc-crm-solutionsnbfwryxetc.s3.amazonaws.com/rewards/2eb5e9d7-5a29-4dc6-b4f9-fcd1c540.png",
            "thumbnailId": "9ae83562-0223-4c83-8fd6-eac6214a6aa8",
            "thumbnailUrl": "https://ushc-crm-solutionsnbfwryxetc.s3.amazonaws.com/rewards/5f05e7ac-cad2-4cb6-a417-59f79bcc.png",
            "termAndConditionsId": "71a2a65f-b2d6-4629-adc5-14c331c3cfcf",
            "termAndConditionsUrl": "https://ushc-crm-solutionsnbfwryxetc.s3.amazonaws.com/rewards/0e844f45-d746-448d-a1a3-9499c3b.html",
            "tier": "",
            "label": "",
            "priority": 1,
            "intouchPoints": 2,
            "group": "",
            "startTime": "2024-09-17 08:23:11",
            "endTime": "2024-12-30 11:23:11",
            "expired": false,
            "started": true,
            "programId": null,
            "categoryList": [
                {
                    "id": 3,
                    "name": "category1",
                    "enabled": true
                }
            ],
            "customFields": {},
            "loyaltyProgramCriteria": [],
            "groups": [],
            "rewardRestrictions": {
                "isValid": true
            },
            "rewardRank": null,
            "images": [],
            "videos": []
        },
        {
            "id": 198,
            "orgId": 4000085,
            "name": "Dummy reward 1",
            "description": "Dummy reward 1 desc",
            "imageId": "8a05b09c-cb82-4d69-90e4-d1d6d5a923e6",
            "imageUrl": "https://ushc-crm-solutionsnbfwryxetc.s3.amazonaws.com/rewards/473e3316-12d2-49d1-813e-f80a9eea.png",
            "thumbnailId": "407557a0-a024-4e2d-b3b5-268a44ffaa6e",
            "thumbnailUrl": "https://ushc-crm-solutionsnbfwryxetc.s3.amazonaws.com/rewards/afde3c30-4b8f-435d-89e0-a50d53ef.png",
            "termAndConditionsId": "b79043be-80b3-41b0-b04e-7259c3f2a6ba",
            "termAndConditionsUrl": "https://ushc-crm-solutionsnbfwryxetc.s3.amazonaws.com/rewards/d4381cc8-b664-4a72-aca4-ea31d70.html",
            "tier": "",
            "label": "",
            "priority": 1,
            "intouchPoints": 3,
            "group": "",
            "startTime": "2024-08-16 09:57:47",
            "endTime": "2024-12-31 12:57:47",
            "expired": false,
            "started": true,
            "programId": null,
            "categoryList": [
                {
                    "id": 3,
                    "name": "category1",
                    "enabled": true
                }
            ],
            "customFields": {},
            "loyaltyProgramCriteria": [],
            "groups": [],
            "rewardRestrictions": {
                "isValid": true
            },
            "rewardRank": null,
            "images": [],
            "videos": []
        },
        {
            "id": 197,
            "orgId": 4000085,
            "name": "Amzn 1$ voucher",
            "description": "Amzn 1$ voucher desc",
            "imageId": "d3bfa8ed-9647-4b6c-b0dd-9239a810e5e0",
            "imageUrl": "https://ushc-crm-solutionsnbfwryxetc.s3.amazonaws.com/rewards/bb036141-0555-43a2-a1c0-4f1fb8c7.jpg",
            "thumbnailId": "a2158a4e-622b-4dfe-b201-cd3b4e240aac",
            "thumbnailUrl": "https://ushc-crm-solutionsnbfwryxetc.s3.amazonaws.com/rewards/022e33cb-26de-4d61-9295-766aec02.jpg",
            "termAndConditionsId": "ddb2166e-2de0-4d0a-a5a9-57fc073432d3",
            "termAndConditionsUrl": "https://ushc-crm-solutionsnbfwryxetc.s3.amazonaws.com/rewards/66a82f95-787f-4c50-9041-b62f202.html",
            "tier": "",
            "label": "",
            "priority": 1,
            "intouchPoints": 2,
            "group": "",
            "startTime": "2024-08-16 09:44:01",
            "endTime": "2024-12-27 21:44:01",
            "expired": false,
            "started": true,
            "programId": null,
            "categoryList": [
                {
                    "id": 3,
                    "name": "category1",
                    "enabled": true
                }
            ],
            "customFields": {},
            "loyaltyProgramCriteria": [],
            "groups": [],
            "rewardRestrictions": {
                "isValid": true
            },
            "rewardRank": null,
            "images": [],
            "videos": []
        },
        {
            "id": 195,
            "orgId": 4000085,
            "name": "ACH Deposit - Test 1",
            "description": "ACH Deposit - Test 1",
            "imageId": "b2616e34-aac4-4c8d-b93b-78a4ad80db2f",
            "imageUrl": "https://ushc-crm-solutionsnbfwryxetc.s3.amazonaws.com/rewards/02401226-630a-4f6e-8686-e2bee37e.png",
            "thumbnailId": "b68d4f83-7010-4055-a7c8-180dd4243dc9",
            "thumbnailUrl": "https://ushc-crm-solutionsnbfwryxetc.s3.amazonaws.com/rewards/0a239757-ead7-4896-928e-e3cb05c7.png",
            "termAndConditionsId": "5e0cf72d-fa62-49a6-aaf7-d98b9e5c33bf",
            "termAndConditionsUrl": "https://ushc-crm-solutionsnbfwryxetc.s3.amazonaws.com/rewards/e03daa55-984b-4ff5-b680-1533359.html",
            "tier": "",
            "label": "",
            "priority": 1,
            "intouchPoints": 2,
            "group": "",
            "startTime": "2024-08-16 09:13:25",
            "endTime": "2024-12-30 22:43:25",
            "expired": false,
            "started": true,
            "programId": null,
            "categoryList": [
                {
                    "id": 3,
                    "name": "category1",
                    "enabled": true
                }
            ],
            "customFields": {},
            "loyaltyProgramCriteria": [],
            "groups": [],
            "rewardRestrictions": {
                "isValid": true
            },
            "rewardRank": null,
            "images": [],
            "videos": [],
            "paymentConfigs": [
                {
                    "paymentMode": "CONV_RATIO",
                    "id": 8,
                    "conversionRatio": 0.5200
                }
            ]
        },
        {
            "id": 194,
            "orgId": 4000085,
            "name": "HSA Deposit - Test 1",
            "description": "HSA Deposit - Test 1 des",
            "imageId": "c57cb7d1-1018-4222-9162-088b65ee2975",
            "imageUrl": "https://ushc-crm-solutionsnbfwryxetc.s3.amazonaws.com/rewards/a7486843-42eb-4ffd-aa21-9da640fa.jpg",
            "thumbnailId": "8117ddae-98bc-4a5a-ba9c-c0fefbfd38d1",
            "thumbnailUrl": "https://ushc-crm-solutionsnbfwryxetc.s3.amazonaws.com/rewards/18c50f23-0348-4000-9d3d-22206bd3.jpg",
            "termAndConditionsId": "ebc0c73c-b4a2-4072-aec8-3994e2f92f83",
            "termAndConditionsUrl": "https://ushc-crm-solutionsnbfwryxetc.s3.amazonaws.com/rewards/e50ef36a-0a23-4543-b262-594829e.html",
            "tier": "",
            "label": "",
            "priority": 1,
            "intouchPoints": 5,
            "group": "",
            "startTime": "2024-08-16 06:25:30",
            "endTime": "2024-12-31 09:25:30",
            "expired": false,
            "started": true,
            "programId": null,
            "categoryList": [
                {
                    "id": 3,
                    "name": "category1",
                    "enabled": true
                }
            ],
            "customFields": {},
            "loyaltyProgramCriteria": [],
            "groups": [],
            "rewardRestrictions": {
                "isValid": true
            },
            "rewardRank": null,
            "images": [],
            "videos": [],
            "paymentConfigs": [
                {
                    "paymentMode": "CONV_RATIO",
                    "id": 6,
                    "conversionRatio": 0.5000
                }
            ]
        },
        {
            "id": 192,
            "orgId": 4000085,
            "name": "Donations-Test1",
            "description": "Donations-Test1 as \"CHARITY\" - issue a coupon per qty",
            "imageId": "b0774ae0-a501-4591-87d8-8f7fa48e61bc",
            "imageUrl": "https://ushc-crm-solutionsnbfwryxetc.s3.amazonaws.com/rewards/e99784eb-c4d4-489b-bc96-64b81331.png",
            "thumbnailId": "5e4b21ac-ce04-4dcf-a220-4056462a5198",
            "thumbnailUrl": "https://ushc-crm-solutionsnbfwryxetc.s3.amazonaws.com/rewards/ca89bc6c-da3e-43af-8eae-3d9b2cb8.png",
            "termAndConditionsId": "6629c4f0-34e9-4024-af6a-424096232f0b",
            "termAndConditionsUrl": "https://ushc-crm-solutionsnbfwryxetc.s3.amazonaws.com/rewards/15314871-0e77-43c2-ac47-edec1a1.html",
            "tier": "",
            "label": "",
            "priority": 1,
            "intouchPoints": 10,
            "group": "",
            "startTime": "2024-08-16 01:50:55",
            "endTime": "2024-12-29 10:50:55",
            "expired": false,
            "started": true,
            "programId": null,
            "categoryList": [
                {
                    "id": 3,
                    "name": "category1",
                    "enabled": true
                },
                {
                    "id": 4,
                    "name": "category2",
                    "enabled": true
                }
            ],
            "customFields": {},
            "loyaltyProgramCriteria": [],
            "groups": [],
            "rewardRestrictions": {
                "isValid": true
            },
            "rewardRank": null,
            "images": [],
            "videos": []
        },
        {
            "id": 191,
            "orgId": 4000085,
            "name": "Merchandise-Test1",
            "description": "Merchandise-Test1 configured as physical reward. Issues coupons for qty of issuaal",
            "imageId": "809f196e-84ce-4153-a805-13df486cd43d",
            "imageUrl": "https://ushc-crm-solutionsnbfwryxetc.s3.amazonaws.com/rewards/e5ff3ed9-cefe-4103-bc42-470057f3.png",
            "thumbnailId": "2532c6c6-b114-4c59-a77a-98fd1ee68cff",
            "thumbnailUrl": "https://ushc-crm-solutionsnbfwryxetc.s3.amazonaws.com/rewards/1a77f337-6eec-4dee-9c7b-7fe0d1c8.png",
            "termAndConditionsId": "d77045f0-dada-44ad-b499-0d24ad7cb68e",
            "termAndConditionsUrl": "https://ushc-crm-solutionsnbfwryxetc.s3.amazonaws.com/rewards/8e341d2d-0cbe-4ee7-80cc-6c59456.html",
            "tier": "",
            "label": "",
            "priority": 1,
            "intouchPoints": 5,
            "group": "",
            "startTime": "2024-08-14 05:10:11",
            "endTime": "2024-12-30 21:40:11",
            "expired": false,
            "started": true,
            "programId": null,
            "categoryList": [
                {
                    "id": 3,
                    "name": "category1",
                    "enabled": true
                }
            ],
            "customFields": {},
            "loyaltyProgramCriteria": [],
            "groups": [],
            "rewardRestrictions": {
                "isValid": true
            },
            "rewardRank": null,
            "images": [],
            "videos": []
        }
    ],
    "pagingDto": {
        "last": true,
        "totalElements": 23,
        "totalPages": 1,
        "numberOfElements": 23,
        "first": true,
        "size": 23,
        "number": 0
    },
    "orgLevelRestrictions": [
        {
            "isValid": true,
            "orgId": 4000085
        }
    ]
}
```
```json With 'altText' for images and videos
{
    "status": {
        "success": true,
        "code": 200,
        "message": "User Reward fetched successfully"
    },
    "rewardList": [
        {
            "id": 282,
            "orgId": 4000084,
            "name": "Donations Test 2",
            "description": "Donations Test 2",
            "imageId": null,
            "imageUrl": null,
            "thumbnailId": null,
            "thumbnailUrl": null,
            "termAndConditionsId": "6356f6a7-0c95-4943-b25e-86df441a7e99",
            "termAndConditionsUrl": "https://ushc-crm-solutionsnbfwryxetc.s3.amazonaws.com/rewards/1ca9aa51-2901-4928-ba7a-1b9be04.html",
            "tier": null,
            "label": null,
            "priority": 1,
            "intouchPoints": 0,
            "group": null,
            "startTime": "2024-10-15 08:29:00",
            "endTime": "2030-10-31 06:59:30",
            "expired": false,
            "started": true,
            "programId": null,
            "categoryList": [
                {
                    "id": 6,
                    "name": "lifestyle",
                    "enabled": true
                }
            ],
            "customFields": {},
            "loyaltyProgramCriteria": [],
            "groups": [],
            "rewardRestrictions": {
                "isValid": true
            },
            "rewardRank": null,
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
            "paymentConfigs": [
                {
                    "paymentMode": "CONV_RATIO",
                    "id": 24,
                    "conversionRatio": 1
                }
            ]
        },
        {
            "id": 281,
            "orgId": 4000084,
            "name": "Donations Test 1",
            "description": "Donations Test 1",
            "imageId": null,
            "imageUrl": null,
            "thumbnailId": null,
            "thumbnailUrl": null,
            "termAndConditionsId": "6356f6a7-0c95-4943-b25e-86df441a7e99",
            "termAndConditionsUrl": "https://ushc-crm-solutionsnbfwryxetc.s3.amazonaws.com/rewards/1ca9aa51-2901-4928-ba7a-1b9be04.html",
            "tier": null,
            "label": null,
            "priority": 1,
            "intouchPoints": 0,
            "group": null,
            "startTime": "2024-10-15 08:10:00",
            "endTime": "2030-10-31 06:59:30",
            "expired": false,
            "started": true,
            "programId": null,
            "categoryList": [
                {
                    "id": 6,
                    "name": "lifestyle",
                    "enabled": true
                }
            ],
            "customFields": {},
            "loyaltyProgramCriteria": [],
            "groups": [],
            "rewardRestrictions": {
                "isValid": true
            },
            "rewardRank": null,
            "images": [],
            "videos": [],
            "paymentConfigs": [
                {
                    "paymentMode": "CONV_RATIO",
                    "id": 23,
                    "conversionRatio": 1
                }
            ]
        },
        {
            "id": 280,
            "orgId": 4000084,
            "name": "Donations Test",
            "description": "Donations Test",
            "imageId": null,
            "imageUrl": null,
            "thumbnailId": null,
            "thumbnailUrl": null,
            "termAndConditionsId": "6356f6a7-0c95-4943-b25e-86df441a7e99",
            "termAndConditionsUrl": "https://ushc-crm-solutionsnbfwryxetc.s3.amazonaws.com/rewards/1ca9aa51-2901-4928-ba7a-1b9be04.html",
            "tier": null,
            "label": null,
            "priority": 1,
            "intouchPoints": 0,
            "group": null,
            "startTime": "2024-10-15 08:09:00",
            "endTime": "2030-10-31 06:59:30",
            "expired": false,
            "started": true,
            "programId": null,
            "categoryList": [
                {
                    "id": 6,
                    "name": "lifestyle",
                    "enabled": true
                }
            ],
            "customFields": {},
            "loyaltyProgramCriteria": [],
            "groups": [],
            "rewardRestrictions": {
                "isValid": true
            },
            "rewardRank": null,
            "images": [],
            "videos": [],
            "paymentConfigs": [
                {
                    "paymentMode": "POINTS",
                    "id": 22,
                    "points": 1
                }
            ]
        },
        {
            "id": 279,
            "orgId": 4000084,
            "name": "Offers Test Voucher New Rdmption Test",
            "description": "Offers Test Voucher New Rdmption Test",
            "imageId": null,
            "imageUrl": null,
            "thumbnailId": null,
            "thumbnailUrl": null,
            "termAndConditionsId": "6356f6a7-0c95-4943-b25e-86df441a7e99",
            "termAndConditionsUrl": "https://ushc-crm-solutionsnbfwryxetc.s3.amazonaws.com/rewards/1ca9aa51-2901-4928-ba7a-1b9be04.html",
            "tier": null,
            "label": null,
            "priority": 1,
            "intouchPoints": 0,
            "group": null,
            "startTime": "2024-10-15 01:30:00",
            "endTime": "2030-10-31 06:59:30",
            "expired": false,
            "started": true,
            "programId": null,
            "categoryList": [
                {
                    "id": 6,
                    "name": "lifestyle",
                    "enabled": true
                }
            ],
            "customFields": {},
            "loyaltyProgramCriteria": [],
            "groups": [],
            "rewardRestrictions": {
                "isValid": true
            },
            "rewardRank": null,
            "images": [],
            "videos": [],
            "paymentConfigs": [
                {
                    "paymentMode": "POINTS",
                    "id": 21,
                    "points": 1
                }
            ]
        },
        {
            "id": 278,
            "orgId": 4000084,
            "name": "Offers Test Voucher New Redemption",
            "description": "Offers Test Voucher New Redemption",
            "imageId": null,
            "imageUrl": null,
            "thumbnailId": null,
            "thumbnailUrl": null,
            "termAndConditionsId": "6356f6a7-0c95-4943-b25e-86df441a7e99",
            "termAndConditionsUrl": "https://ushc-crm-solutionsnbfwryxetc.s3.amazonaws.com/rewards/1ca9aa51-2901-4928-ba7a-1b9be04.html",
            "tier": null,
            "label": null,
            "priority": 1,
            "intouchPoints": 0,
            "group": null,
            "startTime": "2024-10-15 01:20:00",
            "endTime": "2030-10-31 06:59:30",
            "expired": false,
            "started": true,
            "programId": null,
            "categoryList": [
                {
                    "id": 6,
                    "name": "lifestyle",
                    "enabled": true
                }
            ],
            "customFields": {},
            "loyaltyProgramCriteria": [],
            "groups": [],
            "rewardRestrictions": {
                "isValid": true
            },
            "rewardRank": null,
            "images": [],
            "videos": [],
            "paymentConfigs": [
                {
                    "paymentMode": "POINTS",
                    "id": 20,
                    "points": 1
                }
            ]
        },
        {
            "id": 277,
            "orgId": 4000084,
            "name": "Offers Test Voucher New Test",
            "description": "Offers Test Voucher New Test",
            "imageId": null,
            "imageUrl": null,
            "thumbnailId": null,
            "thumbnailUrl": null,
            "termAndConditionsId": "6356f6a7-0c95-4943-b25e-86df441a7e99",
            "termAndConditionsUrl": "https://ushc-crm-solutionsnbfwryxetc.s3.amazonaws.com/rewards/1ca9aa51-2901-4928-ba7a-1b9be04.html",
            "tier": null,
            "label": null,
            "priority": 1,
            "intouchPoints": 0,
            "group": null,
            "startTime": "2024-10-14 23:26:00",
            "endTime": "2030-10-31 06:59:30",
            "expired": false,
            "started": true,
            "programId": null,
            "categoryList": [
                {
                    "id": 6,
                    "name": "lifestyle",
                    "enabled": true
                }
            ],
            "customFields": {},
            "loyaltyProgramCriteria": [],
            "groups": [],
            "rewardRestrictions": {
                "isValid": true
            },
            "rewardRank": null,
            "images": [],
            "videos": [],
            "paymentConfigs": [
                {
                    "paymentMode": "POINTS",
                    "id": 19,
                    "points": 1
                }
            ]
        },
        {
            "id": 276,
            "orgId": 4000084,
            "name": "Offers Test Voucher New",
            "description": "Offers Test Voucher New",
            "imageId": null,
            "imageUrl": null,
            "thumbnailId": null,
            "thumbnailUrl": null,
            "termAndConditionsId": "6356f6a7-0c95-4943-b25e-86df441a7e99",
            "termAndConditionsUrl": "https://ushc-crm-solutionsnbfwryxetc.s3.amazonaws.com/rewards/1ca9aa51-2901-4928-ba7a-1b9be04.html",
            "tier": null,
            "label": null,
            "priority": 1,
            "intouchPoints": 0,
            "group": null,
            "startTime": "2024-10-14 23:22:00",
            "endTime": "2030-10-31 06:59:30",
            "expired": false,
            "started": true,
            "programId": null,
            "categoryList": [
                {
                    "id": 6,
                    "name": "lifestyle",
                    "enabled": true
                }
            ],
            "customFields": {},
            "loyaltyProgramCriteria": [],
            "groups": [],
            "rewardRestrictions": {
                "isValid": true
            },
            "rewardRank": null,
            "images": [],
            "videos": [],
            "paymentConfigs": [
                {
                    "paymentMode": "POINTS",
                    "id": 18,
                    "points": 1
                }
            ]
        },
        {
            "id": 275,
            "orgId": 4000084,
            "name": "Offers Test Voucher",
            "description": "Offers Test Voucher",
            "imageId": null,
            "imageUrl": null,
            "thumbnailId": null,
            "thumbnailUrl": null,
            "termAndConditionsId": "6356f6a7-0c95-4943-b25e-86df441a7e99",
            "termAndConditionsUrl": "https://ushc-crm-solutionsnbfwryxetc.s3.amazonaws.com/rewards/1ca9aa51-2901-4928-ba7a-1b9be04.html",
            "tier": null,
            "label": null,
            "priority": 1,
            "intouchPoints": 0,
            "group": null,
            "startTime": "2024-10-14 21:43:00",
            "endTime": "2030-10-31 06:59:30",
            "expired": false,
            "started": true,
            "programId": null,
            "categoryList": [
                {
                    "id": 6,
                    "name": "lifestyle",
                    "enabled": true
                }
            ],
            "customFields": {},
            "loyaltyProgramCriteria": [],
            "groups": [],
            "rewardRestrictions": {
                "isValid": true
            },
            "rewardRank": null,
            "images": [],
            "videos": [],
            "paymentConfigs": [
                {
                    "paymentMode": "POINTS",
                    "id": 17,
                    "points": 1
                }
            ]
        },
        {
            "id": 274,
            "orgId": 4000084,
            "name": "Test",
            "description": "Test",
            "imageId": "ea2265d8-16ea-4821-be19-f6e62c845992",
            "imageUrl": "https://ushc-crm-solutionsnbfwryxetc.s3.amazonaws.com/rewards/69684250-79c9-43d8-b711-a54252e4.png",
            "thumbnailId": "6522e847-96d7-4870-80f5-a88932ba5793",
            "thumbnailUrl": "https://ushc-crm-solutionsnbfwryxetc.s3.amazonaws.com/rewards/d2557af5-6c97-4bc3-a651-e49c984e.png",
            "termAndConditionsId": "6356f6a7-0c95-4943-b25e-86df441a7e99",
            "termAndConditionsUrl": "https://ushc-crm-solutionsnbfwryxetc.s3.amazonaws.com/rewards/1ca9aa51-2901-4928-ba7a-1b9be04.html",
            "tier": null,
            "label": null,
            "priority": 1,
            "intouchPoints": 1,
            "group": null,
            "startTime": "2024-10-14 21:41:10",
            "endTime": "2024-10-21 21:41:10",
            "expired": false,
            "started": true,
            "programId": null,
            "categoryList": [
                {
                    "id": 6,
                    "name": "lifestyle",
                    "enabled": true
                }
            ],
            "customFields": {},
            "loyaltyProgramCriteria": [],
            "groups": [],
            "rewardRestrictions": {
                "isValid": true
            },
            "rewardRank": null,
            "images": [],
            "videos": []
        },
        {
            "id": 200,
            "orgId": 4000085,
            "name": "Dummy-coupon-1",
            "description": "NA",
            "imageId": "7bee39e4-c3f8-4b11-8f2e-608f5a124f0e",
            "imageUrl": "https://ushc-crm-solutionsnbfwryxetc.s3.amazonaws.com/rewards/657e5161-77ea-4363-aeff-33b335a4.jpg",
            "thumbnailId": "90201fc9-dc42-4902-8827-fdf03c97f3ca",
            "thumbnailUrl": "https://ushc-crm-solutionsnbfwryxetc.s3.amazonaws.com/rewards/2dc6427d-2aec-49cd-97e0-42caab03.jpg",
            "termAndConditionsId": "ba0d10c2-fc39-4e03-b128-11a7ff6ce8bc",
            "termAndConditionsUrl": "https://ushc-crm-solutionsnbfwryxetc.s3.amazonaws.com/rewards/1d562d5f-1245-4c68-ae4b-f582024.html",
            "tier": "",
            "label": "",
            "priority": 1,
            "intouchPoints": 5,
            "group": "",
            "startTime": "2024-09-19 10:53:11",
            "endTime": "2025-09-30 10:53:11",
            "expired": false,
            "started": true,
            "programId": null,
            "categoryList": [
                {
                    "id": 3,
                    "name": "category1",
                    "enabled": true
                },
                {
                    "id": 4,
                    "name": "category2",
                    "enabled": true
                }
            ],
            "customFields": {},
            "loyaltyProgramCriteria": [],
            "groups": [],
            "rewardRestrictions": {
                "isValid": true
            },
            "rewardRank": null,
            "images": [],
            "videos": []
        },
        {
            "id": 199,
            "orgId": 4000085,
            "name": "Offer 2% - Intouch Reward",
            "description": "Offer 2% - Intouch Reward",
            "imageId": "837d7bdb-4668-4f98-a0c1-9f1bd4642e02",
            "imageUrl": "https://ushc-crm-solutionsnbfwryxetc.s3.amazonaws.com/rewards/2eb5e9d7-5a29-4dc6-b4f9-fcd1c540.png",
            "thumbnailId": "9ae83562-0223-4c83-8fd6-eac6214a6aa8",
            "thumbnailUrl": "https://ushc-crm-solutionsnbfwryxetc.s3.amazonaws.com/rewards/5f05e7ac-cad2-4cb6-a417-59f79bcc.png",
            "termAndConditionsId": "71a2a65f-b2d6-4629-adc5-14c331c3cfcf",
            "termAndConditionsUrl": "https://ushc-crm-solutionsnbfwryxetc.s3.amazonaws.com/rewards/0e844f45-d746-448d-a1a3-9499c3b.html",
            "tier": "",
            "label": "",
            "priority": 1,
            "intouchPoints": 2,
            "group": "",
            "startTime": "2024-09-17 08:23:11",
            "endTime": "2024-12-30 11:23:11",
            "expired": false,
            "started": true,
            "programId": null,
            "categoryList": [
                {
                    "id": 3,
                    "name": "category1",
                    "enabled": true
                }
            ],
            "customFields": {},
            "loyaltyProgramCriteria": [],
            "groups": [],
            "rewardRestrictions": {
                "isValid": true
            },
            "rewardRank": null,
            "images": [],
            "videos": []
        },
        {
            "id": 198,
            "orgId": 4000085,
            "name": "Dummy reward 1",
            "description": "Dummy reward 1 desc",
            "imageId": "8a05b09c-cb82-4d69-90e4-d1d6d5a923e6",
            "imageUrl": "https://ushc-crm-solutionsnbfwryxetc.s3.amazonaws.com/rewards/473e3316-12d2-49d1-813e-f80a9eea.png",
            "thumbnailId": "407557a0-a024-4e2d-b3b5-268a44ffaa6e",
            "thumbnailUrl": "https://ushc-crm-solutionsnbfwryxetc.s3.amazonaws.com/rewards/afde3c30-4b8f-435d-89e0-a50d53ef.png",
            "termAndConditionsId": "b79043be-80b3-41b0-b04e-7259c3f2a6ba",
            "termAndConditionsUrl": "https://ushc-crm-solutionsnbfwryxetc.s3.amazonaws.com/rewards/d4381cc8-b664-4a72-aca4-ea31d70.html",
            "tier": "",
            "label": "",
            "priority": 1,
            "intouchPoints": 3,
            "group": "",
            "startTime": "2024-08-16 09:57:47",
            "endTime": "2024-12-31 12:57:47",
            "expired": false,
            "started": true,
            "programId": null,
            "categoryList": [
                {
                    "id": 3,
                    "name": "category1",
                    "enabled": true
                }
            ],
            "customFields": {},
            "loyaltyProgramCriteria": [],
            "groups": [],
            "rewardRestrictions": {
                "isValid": true
            },
            "rewardRank": null,
            "images": [],
            "videos": []
        },
        {
            "id": 197,
            "orgId": 4000085,
            "name": "Amzn 1$ voucher",
            "description": "Amzn 1$ voucher desc",
            "imageId": "d3bfa8ed-9647-4b6c-b0dd-9239a810e5e0",
            "imageUrl": "https://ushc-crm-solutionsnbfwryxetc.s3.amazonaws.com/rewards/bb036141-0555-43a2-a1c0-4f1fb8c7.jpg",
            "thumbnailId": "a2158a4e-622b-4dfe-b201-cd3b4e240aac",
            "thumbnailUrl": "https://ushc-crm-solutionsnbfwryxetc.s3.amazonaws.com/rewards/022e33cb-26de-4d61-9295-766aec02.jpg",
            "termAndConditionsId": "ddb2166e-2de0-4d0a-a5a9-57fc073432d3",
            "termAndConditionsUrl": "https://ushc-crm-solutionsnbfwryxetc.s3.amazonaws.com/rewards/66a82f95-787f-4c50-9041-b62f202.html",
            "tier": "",
            "label": "",
            "priority": 1,
            "intouchPoints": 2,
            "group": "",
            "startTime": "2024-08-16 09:44:01",
            "endTime": "2024-12-30 12:44:01",
            "expired": false,
            "started": true,
            "programId": null,
            "categoryList": [
                {
                    "id": 3,
                    "name": "category1",
                    "enabled": true
                }
            ],
            "customFields": {},
            "loyaltyProgramCriteria": [],
            "groups": [],
            "rewardRestrictions": {
                "isValid": true
            },
            "rewardRank": null,
            "images": [],
            "videos": []
        },
        {
            "id": 195,
            "orgId": 4000085,
            "name": "ACH Deposit - Test 1",
            "description": "ACH Deposit - Test 1",
            "imageId": "b2616e34-aac4-4c8d-b93b-78a4ad80db2f",
            "imageUrl": "https://ushc-crm-solutionsnbfwryxetc.s3.amazonaws.com/rewards/02401226-630a-4f6e-8686-e2bee37e.png",
            "thumbnailId": "b68d4f83-7010-4055-a7c8-180dd4243dc9",
            "thumbnailUrl": "https://ushc-crm-solutionsnbfwryxetc.s3.amazonaws.com/rewards/0a239757-ead7-4896-928e-e3cb05c7.png",
            "termAndConditionsId": "5e0cf72d-fa62-49a6-aaf7-d98b9e5c33bf",
            "termAndConditionsUrl": "https://ushc-crm-solutionsnbfwryxetc.s3.amazonaws.com/rewards/e03daa55-984b-4ff5-b680-1533359.html",
            "tier": "",
            "label": "",
            "priority": 1,
            "intouchPoints": 2,
            "group": "",
            "startTime": "2024-08-16 09:13:25",
            "endTime": "2024-12-30 22:43:25",
            "expired": false,
            "started": true,
            "programId": null,
            "categoryList": [
                {
                    "id": 3,
                    "name": "category1",
                    "enabled": true
                }
            ],
            "customFields": {},
            "loyaltyProgramCriteria": [],
            "groups": [],
            "rewardRestrictions": {
                "isValid": true
            },
            "rewardRank": null,
            "images": [],
            "videos": [],
            "paymentConfigs": [
                {
                    "paymentMode": "CONV_RATIO",
                    "id": 8,
                    "conversionRatio": 0.52
                }
            ]
        },
        {
            "id": 194,
            "orgId": 4000085,
            "name": "HSA Deposit - Test 1",
            "description": "HSA Deposit - Test 1 des",
            "imageId": "c57cb7d1-1018-4222-9162-088b65ee2975",
            "imageUrl": "https://ushc-crm-solutionsnbfwryxetc.s3.amazonaws.com/rewards/a7486843-42eb-4ffd-aa21-9da640fa.jpg",
            "thumbnailId": "8117ddae-98bc-4a5a-ba9c-c0fefbfd38d1",
            "thumbnailUrl": "https://ushc-crm-solutionsnbfwryxetc.s3.amazonaws.com/rewards/18c50f23-0348-4000-9d3d-22206bd3.jpg",
            "termAndConditionsId": "ebc0c73c-b4a2-4072-aec8-3994e2f92f83",
            "termAndConditionsUrl": "https://ushc-crm-solutionsnbfwryxetc.s3.amazonaws.com/rewards/e50ef36a-0a23-4543-b262-594829e.html",
            "tier": "",
            "label": "",
            "priority": 1,
            "intouchPoints": 5,
            "group": "",
            "startTime": "2024-08-16 06:25:30",
            "endTime": "2024-12-31 09:25:30",
            "expired": false,
            "started": true,
            "programId": null,
            "categoryList": [
                {
                    "id": 3,
                    "name": "category1",
                    "enabled": true
                }
            ],
            "customFields": {},
            "loyaltyProgramCriteria": [],
            "groups": [],
            "rewardRestrictions": {
                "isValid": true
            },
            "rewardRank": null,
            "images": [],
            "videos": [],
            "paymentConfigs": [
                {
                    "paymentMode": "CONV_RATIO",
                    "id": 6,
                    "conversionRatio": 0.5
                }
            ]
        },
        {
            "id": 192,
            "orgId": 4000085,
            "name": "Donations-Test1",
            "description": "Donations-Test1 as \"CHARITY\" - issue a coupon per qty",
            "imageId": "b0774ae0-a501-4591-87d8-8f7fa48e61bc",
            "imageUrl": "https://ushc-crm-solutionsnbfwryxetc.s3.amazonaws.com/rewards/e99784eb-c4d4-489b-bc96-64b81331.png",
            "thumbnailId": "5e4b21ac-ce04-4dcf-a220-4056462a5198",
            "thumbnailUrl": "https://ushc-crm-solutionsnbfwryxetc.s3.amazonaws.com/rewards/ca89bc6c-da3e-43af-8eae-3d9b2cb8.png",
            "termAndConditionsId": "6629c4f0-34e9-4024-af6a-424096232f0b",
            "termAndConditionsUrl": "https://ushc-crm-solutionsnbfwryxetc.s3.amazonaws.com/rewards/15314871-0e77-43c2-ac47-edec1a1.html",
            "tier": "",
            "label": "",
            "priority": 1,
            "intouchPoints": 10,
            "group": "",
            "startTime": "2024-08-16 01:50:55",
            "endTime": "2024-12-31 04:50:55",
            "expired": false,
            "started": true,
            "programId": null,
            "categoryList": [
                {
                    "id": 3,
                    "name": "category1",
                    "enabled": true
                }
            ],
            "customFields": {},
            "loyaltyProgramCriteria": [],
            "groups": [],
            "rewardRestrictions": {
                "isValid": true
            },
            "rewardRank": null,
            "images": [],
            "videos": []
        },
        {
            "id": 191,
            "orgId": 4000085,
            "name": "Merchandise-Test1",
            "description": "Merchandise-Test1 configured as physical reward. Issues coupons for qty of issuaal",
            "imageId": "809f196e-84ce-4153-a805-13df486cd43d",
            "imageUrl": "https://ushc-crm-solutionsnbfwryxetc.s3.amazonaws.com/rewards/e5ff3ed9-cefe-4103-bc42-470057f3.png",
            "thumbnailId": "2532c6c6-b114-4c59-a77a-98fd1ee68cff",
            "thumbnailUrl": "https://ushc-crm-solutionsnbfwryxetc.s3.amazonaws.com/rewards/1a77f337-6eec-4dee-9c7b-7fe0d1c8.png",
            "termAndConditionsId": "d77045f0-dada-44ad-b499-0d24ad7cb68e",
            "termAndConditionsUrl": "https://ushc-crm-solutionsnbfwryxetc.s3.amazonaws.com/rewards/8e341d2d-0cbe-4ee7-80cc-6c59456.html",
            "tier": "",
            "label": "",
            "priority": 1,
            "intouchPoints": 5,
            "group": "",
            "startTime": "2024-08-14 05:10:11",
            "endTime": "2024-12-30 21:40:11",
            "expired": false,
            "started": true,
            "programId": null,
            "categoryList": [
                {
                    "id": 3,
                    "name": "category1",
                    "enabled": true
                }
            ],
            "customFields": {},
            "loyaltyProgramCriteria": [],
            "groups": [],
            "rewardRestrictions": {
                "isValid": true
            },
            "rewardRank": null,
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
            ]
        }
    ],
    "pagingDto": {
        "last": true,
        "totalElements": 17,
        "totalPages": 1,
        "numberOfElements": 17,
        "first": false,
        "size": 9,
        "number": 0
    },
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
```

<HTMLBlock>{`
<style>
.InputGroupe2EvBGz2cnqy {
    display: flex;
    gap: 2px;
    position: relative;
}

.Button.APIRequest-example-button1DGMsfaOTVNW {
    /* Core working text behavior - don't change these */
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
    
    /* Only minimal visual updates */
    background: #1e2329;
    border: none;
    border-radius: 6px;
    color: #94a3b8;
    font-size: 13px;
}

/* Keep original text handling */
.Button.APIRequest-example-button1DGMsfaOTVNW span,
.Button.APIRequest-example-button1DGMsfaOTVNW div {
    text-align: left;
    direction: ltr;
}

/* Keep original hover behavior */
.Button.APIRequest-example-button1DGMsfaOTVNW:hover {
    width: auto;
    z-index: 10;
    background: #262b33;
}

/* Simple active state */
.Button.APIRequest-example-button1DGMsfaOTVNW.APIRequest-example-button_activeXJeukHyaHZXB {
    z-index: 20;
    background: #2c333d;
    color: #ffffff;
}
</style>
`}</HTMLBlock>