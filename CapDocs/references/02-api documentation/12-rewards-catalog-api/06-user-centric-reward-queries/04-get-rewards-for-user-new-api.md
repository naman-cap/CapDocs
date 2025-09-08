---
title: Get Purchased Rewards for User (New API)
excerpt: ''
api:
  file: v1.json
  operationId: get-rewards-for-user-new-api
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
This API is used to get the rewards purchased by the user, without any aggregation on reward ID, and gives a unified view of the rewards purchased in order of the last purchased date.

**Example**\
Consider the below scenario:

* A customer has 10 vouchers from the same reward
* 3 vouchers each from 4 different rewards
* Page size= 5

The API retrieves the details of the last 5 vouchers issued to the customer.

If you use the **[Get rewards for user](https://docs.capillarytech.com/reference/get-rewards-for-user)** API, the API retrieves the information on the total rewards received by the customer (22 rewards).

*Let’s say below is the structure of the table and for the same customer, we have issued 10 coupons but they belong to 3 rewards*

![ 500px](https://files.readme.io/35d9678-Screenshot_2023-09-04_at_4.41.07_PM.png)

*With the new response if pagination is 5, then only below 5 records will be returned*

![ 500px](https://files.readme.io/c21ba7a-Screenshot_2023-09-04_at_4.41.12_PM.png)

> 👍 Note
>
> * For detailed information about our APIs and for hands-on testing, refer documentation in [API overview](https://docs.capillarytech.com/reference/apioverview) and  step-by-step guide on making your first API call in [Make your first API call](https://docs.capillarytech.com/reference/make-your-first-api-call) .
> * For the list of items in query param list, rewards will be returned if expected value found. Meaning if vendor param has 3 values passed but rewards only exist for 2 of the three vendors. The rewards for the 2 vendors will be returned .
> * When **Dual Eligibility** feature enabled, a reward can be issued to multiple users registered with the same secondary identifiers, as long as they have unique primary identifiers.
> * The[ "Get all reward transactions for a user"](https://docs.capillarytech.com/reference/get-all-reward-transactions-for-a-user#/) API lists all reward issuance attempts, including failures, while the "Get Purchased Rewards for user" API shows only the rewards successfully received by the user.

# Prerequisites

*   Authentication: Basic or OAuth authentication
*   Default access group

# Resource information

|                        |                                                                   |
| :--------------------- | :---------------------------------------------------------------- |
| URL                    | /api\_gateway/rewards/core/v1/user/userReward/brand/`{BrandName}` |
| Pagination             | Yes                                                               |
| Batch support          | No                                                                |
| Rate limit information | None                                                              |

# API endpoint example

`https://eu.api.capillarytech.com/api_gateway/rewards/core/v1/user/userReward/brand/{BrandName}`

# Request path parameters

| Parameters  | Data Type | Description                 |
| :---------- | :-------- | :-------------------------- |
| BrandName\* | String    | Name of the brand. Ex: BUKL |

# Request query parameters

<Table align={["left","left","left"]}>
  <thead>
    <tr>
      <th>
        Parameters
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
        **`mobile/email/externalId*`**
      </td>

      <td>
        String
      </td>

      <td>
        The **mobile number**, **email**, or **external ID** of the customer for whom to fetch rewards. **Example**: `9988776654`
      </td>
    </tr>

    <tr>
      <td>
        **`username*`**
      </td>

      <td>
        String
      </td>

      <td>
        The **Till ID** used in the authorization of the request. **Example**: `swati`
      </td>
    </tr>

    <tr>
      <td>
        `language`
      </td>

      <td>
        Enum
      </td>

      <td>
        Filters the response based on the reward language. Use this parameter to retrieve rewards in a specific language. For example, to display rewards in English, set the parameter to `en`.
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
        Specify `asc` to order the results in **ascending** order of `sortBy` value, or `desc` to order in **descending** order.
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
        Sort the results by a specific parameter. Supported values: `INTOUCH_VOUCHER`, `INTOUCH_VOUCHER_EXPIRY`, `PURCHASE_DATE`. Default: `PURCHASE_DATE`
      </td>
    </tr>

    <tr>
      <td>
        `page`
      </td>

      <td>
        Int
      </td>

      <td>
        Retrieves details of a specific page. Pass `0` to disable pagination. For example, `page=2&size=10` shows 10 results on page 2.
      </td>
    </tr>

    <tr>
      <td>
        `size`
      </td>

      <td>
        Long
      </td>

      <td>
        The number of results to show per page. Default: `100`
      </td>
    </tr>

    <tr>
      <td>
        `category`
      </td>

      <td>
        Integer
      </td>

      <td>
        Filters rewards based on **reward category IDs**. Multiple category IDs can be passed in the query parameter, with no limit on the number of category IDs that can be provided.
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
        Filters details based on **group names**. Multiple group names can be passed in the query parameter, with no limit on the number of group names that can be provided.
      </td>
    </tr>

    <tr>
      <td>
        `vendorId`
      </td>

      <td>
        Integer
      </td>

      <td>
        Filters rewards by **vendor IDs**. Multiple vendor IDs can be passed in the query parameter, with no limit on the number of vendor IDs that can be provided.
      </td>
    </tr>

    <tr>
      <td>
        `typeOfReward`
      </td>

      <td>
        Enum
      </td>

      <td>
        Filters rewards based on specific types. Supported values are `INTOUCH_REWARD`, `VENDOR_INTOUCH_REWARD`, `VENDOR_ONLY_REWARD`, `CART_PROMOTION`, `SWEEPSTAKES`, and `GAMES`. Multiple `typeOfReward` values can be passed, and the filter is case-sensitive.
      </td>
    </tr>

    <tr>
      <td>
        `fromPurchaseDate`
      </td>

      <td>
        Timestamp
      </td>

      <td>
        Filters rewards by purchase date in **epoch format**. This filter works only if both `fromPurchaseDate` and `toPurchaseDate` are provided.
      </td>
    </tr>

    <tr>
      <td>
        `toPurchaseDate`
      </td>

      <td>
        Timestamp
      </td>

      <td>
        Filters rewards by purchase date in **epoch format**. This filter works only if both `fromPurchaseDate` and `toPurchaseDate` are provided.
      </td>
    </tr>

    <tr>
      <td>
        `rewardId`
      </td>

      <td>
        Integer
      </td>

      <td>
        Use this parameter to filter and return specific reward details.
      </td>
    </tr>

    <tr>
      <td>
        `couponCodeCase`
      </td>

      <td>
        Enum
      </td>

      <td>
        This parameter helps retrieve the coupon code in the desired letter cases. By default, the system automatically converts the coupon code to uppercase. Supported values are: `LOWER`, `UPPER`, and `AS_IT_IS`.

        <br />

        **`LOWER`**: Converts the coupon code to lowercase. Example: "ABCD1234" → "abcd1234"\<br>- **`UPPER`**: Converts the coupon code to uppercase. Example: "abcd1234" → "ABCD1234"\<br>- **`AS_IT_IS`**: Returns the coupon code exactly as it was created. Example: "abAB123" → "abAB123"
      </td>
    </tr>
  </tbody>
</Table>

<br />

```http
https://eu.api.capillarytech.com/api_gateway/rewards/core/v1/user/reward/brand/BUKL
```

<br />

# Response Parameters

| Parameter                     | Datatype | Description                                                                                                                                                                                                                                                                                                                                                              |
| :---------------------------- | :------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`status`**                  | String   | Contains information about the success or failure of the API call, including a status code and a message.                                                                                                                                                                                                                                                                |
| `success`                     | Boolean  | Indicates whether the operation was successful (`true`) or not (`false`).                                                                                                                                                                                                                                                                                                |
| `code`                        | Integer  | A numeric code representing the result of the operation (e.g., 200 for success).                                                                                                                                                                                                                                                                                         |
| `message`                     | String   | A descriptive message providing additional context about the operation's outcome.                                                                                                                                                                                                                                                                                        |
| **`rewards`**                 | Object   | Contains details about the rewards issued to the user, including metadata, details, and redemption information.                                                                                                                                                                                                                                                          |
| `typeOfReward`                | String   | Indicates the type of reward, such as `INTOUCH_REWARD`, `VENDOR_INTOUCH_REWARD`, etc.                                                                                                                                                                                                                                                                                    |
| `pointsRedeemed`              | Integer  | The number of points redeemed by the user for this reward.                                                                                                                                                                                                                                                                                                               |
| `rewardId`                    | Integer  | A unique identifier for the reward.                                                                                                                                                                                                                                                                                                                                      |
| `transactionId`               | Integer  | The unique identifier for the transaction associated with this reward.                                                                                                                                                                                                                                                                                                   |
| `issueRewardRefId`            | String   | A reference ID for the reward issuance, used for tracking.                                                                                                                                                                                                                                                                                                               |
| `rewardIssueDate`             | Long     | The date and time when the reward was issued, represented as a UNIX timestamp in milliseconds.                                                                                                                                                                                                                                                                           |
| `userRewardExpiry`            | String   | The expiration date and time for the user's reward, formatted as `YYYY-MM-DD HH:mm:ss`.                                                                                                                                                                                                                                                                                  |
| **`userRewardDetails`**       | Object   | Provides additional details about the reward, including metadata and configurations.                                                                                                                                                                                                                                                                                     |
| `id`                          | Integer  | A unique identifier for the reward.                                                                                                                                                                                                                                                                                                                                      |
| `name`                        | String   | The name of the reward as displayed in the system.                                                                                                                                                                                                                                                                                                                       |
| `description`                 | String   | A brief text describing the reward and its features or purpose.                                                                                                                                                                                                                                                                                                          |
| `imageId`                     | String   | An identifier for the primary image associated with the reward.                                                                                                                                                                                                                                                                                                          |
| `imageUrl`                    | String   | A URL linking to the full-sized image of the reward.                                                                                                                                                                                                                                                                                                                     |
| `thumbnailId`                 | String   | An identifier for the thumbnail image of the reward.                                                                                                                                                                                                                                                                                                                     |
| `thumbnailUrl`                | String   | A URL linking to the thumbnail-sized image of the reward.                                                                                                                                                                                                                                                                                                                |
| `termAndConditionsId`         | String   | An identifier for the terms and conditions document associated with the reward.                                                                                                                                                                                                                                                                                          |
| `termAndConditionsUrl`        | String   | A URL linking to the terms and conditions document for the reward.                                                                                                                                                                                                                                                                                                       |
| `tier`                        | String   | Specifies the tier to which the reward belongs, often used in loyalty programs.                                                                                                                                                                                                                                                                                          |
| `label`                       | String   | A tag or label associated with the reward for categorization or filtering.                                                                                                                                                                                                                                                                                               |
| `priority`                    | Integer  | The priority level of the reward.                                                                                                                                                                                                                                                                                                                                        |
| `intouchPoints`               | Integer  | The number of loyalty points required to redeem this reward.                                                                                                                                                                                                                                                                                                             |
| `group`                       | String   | Specifies the group or category associated with the reward.                                                                                                                                                                                                                                                                                                              |
| `startTime`                   | String   | The date and time when the reward becomes available for redemption, formatted as `YYYY-MM-DD HH:mm:ss`.                                                                                                                                                                                                                                                                  |
| `endTime`                     | String   | The date and time when the reward is no longer available for redemption, formatted as `YYYY-MM-DD HH:mm:ss`.                                                                                                                                                                                                                                                             |
| `expired`                     | Boolean  | Indicates whether the reward has expired.                                                                                                                                                                                                                                                                                                                                |
| `started`                     | Boolean  | Indicates whether the reward is currently active and can be redeemed.                                                                                                                                                                                                                                                                                                    |
| `programId`                   | Integer  | A unique identifier for the program under which the reward is issued.                                                                                                                                                                                                                                                                                                    |
| **`categoryList`**            | List     | Lists the categories to which the reward belongs, often used for filtering or classification.                                                                                                                                                                                                                                                                            |
| `id`                          | Integer  | The unique identifier for a specific category associated with the reward.                                                                                                                                                                                                                                                                                                |
| `name`                        | String   | The name of the category (e.g., "clothing").                                                                                                                                                                                                                                                                                                                             |
| `enabled`                     | Boolean  | Indicates whether the category is currently active and usable.                                                                                                                                                                                                                                                                                                           |
| **`customFields`**            | Object   | Contains custom fields defined for the reward, often as key-value pairs.                                                                                                                                                                                                                                                                                                 |
| **`loyaltyProgramCriteria`**  | Object   | Details the criteria for loyalty programs related to the reward.                                                                                                                                                                                                                                                                                                         |
| **`cardSeries`**              | List     | List of card codes associated with the reward.                                                                                                                                                                                                                                                                                                                           |
| `id`                          | Integer  | Unique identifier of the card associated with the reward.                                                                                                                                                                                                                                                                                                                |
| `code`                        | String   | Unique series code of the card associated with the reward.                                                                                                                                                                                                                                                                                                               |
| **`labels`**                  | List     | List of label IDs associated with the reward.                                                                                                                                                                                                                                                                                                                            |
| **`groups`**                  | List     | Lists any specific groups associated with the reward, used for segmentation purposes.                                                                                                                                                                                                                                                                                    |
| `rewardRank`                  | Integer  | The rank or position of the reward within its category or list.                                                                                                                                                                                                                                                                                                          |
| **`images`**                  | List     | Lists any additional images associated with the reward.                                                                                                                                                                                                                                                                                                                  |
| **`videos`**                  | List     | Lists any videos related to the reward.                                                                                                                                                                                                                                                                                                                                  |
| **`revenueDetails`**          | Object   | Provides revenue-related information for the reward.                                                                                                                                                                                                                                                                                                                     |
| **`paymentDetails`**          | Object   | Contains details about the payment configuration for the reward, including mode and identifier.                                                                                                                                                                                                                                                                          |
| `paymentMode`                 | String   | Specifies the payment mode for the reward, such as "FREE".                                                                                                                                                                                                                                                                                                               |
| **`redemptionDetails`**       | Object   | Includes details about how the reward can be redeemed, such as type and value.                                                                                                                                                                                                                                                                                           |
| `redemptionType`              | String   | Specifies the type of redemption.                                                                                                                                                                                                                                                                                                                                        |
| `redemptionValue`             | Integer  | The value associated with the redemption.                                                                                                                                                                                                                                                                                                                                |
| **`transactionCustomFields`** | Object   | Custom fields defined for the transaction.                                                                                                                                                                                                                                                                                                                               |
| **`fulfillmentDetails`**      | Object   | Contains fulfillment-specific information for the reward.                                                                                                                                                                                                                                                                                                                |
| `issueDateTime`               | String   | Date and time when the reward was awarded to the customer.                                                                                                                                                                                                                                                                                                               |
| `eventDateTime`               | String   | Date and time when a triggering event occurred, initiating the reward earning.                                                                                                                                                                                                                                                                                           |
| `vendor`                      | String   | The vendor associated with the reward.                                                                                                                                                                                                                                                                                                                                   |
| `seriesId`                    | Long     | An identifier for the series or batch of the reward.                                                                                                                                                                                                                                                                                                                     |
| `intouchUserId`               | Long     | The unique identifier of the user in the system.                                                                                                                                                                                                                                                                                                                         |
| **`pagingDto`**               | Object   | Provides details about the pagination of the results, such as total elements and pages.                                                                                                                                                                                                                                                                                  |
| `last`                        | Boolean  | Indicates whether this is the last page of results.                                                                                                                                                                                                                                                                                                                      |
| `totalElements`               | Integer  | The total number of rewards returned by the query.                                                                                                                                                                                                                                                                                                                       |
| `totalPages`                  | Integer  | The total number of pages available for the query results.                                                                                                                                                                                                                                                                                                               |
| `numberOfElements`            | Integer  | The number of elements on the current page.                                                                                                                                                                                                                                                                                                                              |
| `first`                       | Boolean  | Indicates whether this is the first page of results.                                                                                                                                                                                                                                                                                                                     |
| `size`                        | Integer  | The number of elements per page, as specified in the query.                                                                                                                                                                                                                                                                                                              |
| `number`                      | Integer  | The current page number in the results.                                                                                                                                                                                                                                                                                                                                  |
| `startDateTime`               | String   | Start date and time of the reward in ISO 8601 format (YYYY-MM-DDTHH:MM:SSZ).                                                                                                                                                                                                                                                                                             |
| `endDateTime`                 | String   | End date and time of the reward in ISO 8601 format (YYYY-MM-DDTHH:MM:SSZ).                                                                                                                                                                                                                                                                                               |
| `code`                        | String   | A unique code associated with the reward, often used for tracking or redemption purposes. Note: The casing of the coupon code is based on the `couponCodeCase` query parameter.                                                                                                                                                                                          |
| `vendorId`                    | Integer  | Retrieves the rewards associated with a specific vendor.                                                                                                                                                                                                                                                                                                                 |
| `redemptionType`              | Integer  | Retrieves rewards based on their redemption type. **Possible values**: `GAMES`, `AUCTION`, `CART_PROMOTION`, `CASH_WALLET`, `VENDOR_ONLY_REWARD`, `VOUCHER`, `CASH_BACK`, `INTOUCH_REWARD`, `PHYSICAL_REWARD`, `CHARITY`, `MILES`, `GIFT_CARD`, `SWEEPSTAKES`, `VENDOR_INTOUCH_REWARD`, `CARD_DISC`. Multiple `redemptionType` values can be filtered using a comma (,). |

<br />

```json
{
    "status": {
        "success": true,
        "code": 200,
        "message": "User Reward fetched successfully"
    },
    "rewards": [
        {
            "typeOfReward": "VOUCHER",
            "pointsRedeemed": 500,
            "rewardId": 367568,
            "transactionId": 397137,
            "issueRewardRefId": "transactionNumber",
            "rewardIssueDate": 1746714525000,
            "rewardIssueDateTime": "2025-05-08T14:28:45Z",
            "userRewardExpiry": null,
            "userRewardExpiryDateTime": null,
            "userRewardDetails": {
                "id": 367568,
                "name": "jogoldnamechange check",
                "description": "testreward1",
                "imageId": null,
                "imageUrl": null,
                "thumbnailId": null,
                "thumbnailUrl": null,
                "termAndConditionsId": null,
                "termAndConditionsUrl": null,
                "tier": null,
                "label": null,
                "priority": null,
                "intouchPoints": 500,
                "group": null,
                "startTime": "2025-01-26 20:00:00",
                "startDateTime": "2025-01-26T20:00:00Z",
                "endTime": "2026-10-31 11:59:30",
                "endDateTime": "2026-10-31T11:59:30Z",
                "expired": false,
                "started": false,
                "programId": null,
                "categoryList": [
                    {
                        "id": 229,
                        "name": "joreward",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    }
                ],
                "vendorId": null,
                "loyaltyProgramCriteria": null,
                "groups": [],
                "rewardRank": null,
                "images": [],
                "videos": []
            },
            "revenueDetails": null,
            "paymentDetails": null,
            "redemptionDetails": {
                "redemptionType": "VOUCHER",
                "redemptionValue": null
            },
            "transactionCustomFields": null,
            "fulfillmentDetails": null,
            "issueDateTime": "2025-05-08T14:28:45Z",
            "eventDateTime": "2025-03-27T13:38:11Z",
            "code": null,
            "vendor": "{\"pointsRedeemed\": \"500\"}",
            "seriesId": null
        },
        {
            "typeOfReward": "VOUCHER",
            "pointsRedeemed": 500,
            "rewardId": 367238,
            "transactionId": 395932,
            "issueRewardRefId": "transactionNumber",
            "rewardIssueDate": 1746586678000,
            "rewardIssueDateTime": "2025-05-07T02:57:58Z",
            "userRewardExpiry": null,
            "userRewardExpiryDateTime": null,
            "userRewardDetails": {
                "id": 367238,
                "name": "BETA-EN TRUE",
                "description": "testreward1",
                "imageId": null,
                "imageUrl": null,
                "thumbnailId": null,
                "thumbnailUrl": null,
                "termAndConditionsId": null,
                "termAndConditionsUrl": null,
                "tier": null,
                "label": null,
                "priority": null,
                "intouchPoints": 500,
                "group": null,
                "startTime": "2025-01-26 20:00:00",
                "startDateTime": "2025-01-26T20:00:00Z",
                "endTime": "2026-10-31 11:59:30",
                "endDateTime": "2026-10-31T11:59:30Z",
                "expired": false,
                "started": false,
                "programId": null,
                "categoryList": [
                    {
                        "id": 229,
                        "name": "joreward",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    }
                ],
                "vendorId": null,
                "loyaltyProgramCriteria": null,
                "groups": [],
                "rewardRank": null,
                "images": [],
                "videos": []
            },
            "revenueDetails": null,
            "paymentDetails": null,
            "redemptionDetails": {
                "redemptionType": "VOUCHER",
                "redemptionValue": null
            },
            "transactionCustomFields": null,
            "fulfillmentDetails": null,
            "issueDateTime": "2025-05-07T02:57:58Z",
            "eventDateTime": "2025-05-07T02:57:58Z",
            "code": null,
            "vendor": "{\"pointsRedeemed\": \"500\"}",
            "seriesId": null
        },
        {
            "typeOfReward": "VOUCHER",
            "pointsRedeemed": 500,
            "rewardId": 367237,
            "transactionId": 395931,
            "issueRewardRefId": "transactionNumber",
            "rewardIssueDate": 1746586667000,
            "rewardIssueDateTime": "2025-05-07T02:57:47Z",
            "userRewardExpiry": null,
            "userRewardExpiryDateTime": null,
            "userRewardDetails": {
                "id": 367237,
                "name": "BETA-FR FALSE &EN TRUE",
                "description": "testreward1",
                "imageId": null,
                "imageUrl": null,
                "thumbnailId": null,
                "thumbnailUrl": null,
                "termAndConditionsId": null,
                "termAndConditionsUrl": null,
                "tier": null,
                "label": null,
                "priority": null,
                "intouchPoints": 500,
                "group": null,
                "startTime": "2025-01-26 20:00:00",
                "startDateTime": "2025-01-26T20:00:00Z",
                "endTime": "2026-10-31 11:59:30",
                "endDateTime": "2026-10-31T11:59:30Z",
                "expired": false,
                "started": false,
                "programId": null,
                "categoryList": [
                    {
                        "id": 229,
                        "name": "joreward",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    }
                ],
                "vendorId": null,
                "loyaltyProgramCriteria": null,
                "groups": [],
                "rewardRank": null,
                "images": [],
                "videos": []
            },
            "revenueDetails": null,
            "paymentDetails": null,
            "redemptionDetails": {
                "redemptionType": "VOUCHER",
                "redemptionValue": null
            },
            "transactionCustomFields": null,
            "fulfillmentDetails": null,
            "issueDateTime": "2025-05-07T02:57:47Z",
            "eventDateTime": "2025-05-07T02:57:47Z",
            "code": null,
            "vendor": "{\"pointsRedeemed\": \"500\"}",
            "seriesId": null
        },
        {
            "typeOfReward": "VOUCHER",
            "pointsRedeemed": 500,
            "rewardId": 367236,
            "transactionId": 395930,
            "issueRewardRefId": "transactionNumber",
            "rewardIssueDate": 1746586655000,
            "rewardIssueDateTime": "2025-05-07T02:57:35Z",
            "userRewardExpiry": null,
            "userRewardExpiryDateTime": null,
            "userRewardDetails": {
                "id": 367236,
                "name": "EN-BETA-FR&EN TRUE",
                "description": "testreward1",
                "imageId": null,
                "imageUrl": null,
                "thumbnailId": null,
                "thumbnailUrl": null,
                "termAndConditionsId": null,
                "termAndConditionsUrl": null,
                "tier": null,
                "label": null,
                "priority": null,
                "intouchPoints": 500,
                "group": null,
                "startTime": "2025-01-26 20:00:00",
                "startDateTime": "2025-01-26T20:00:00Z",
                "endTime": "2026-10-31 11:59:30",
                "endDateTime": "2026-10-31T11:59:30Z",
                "expired": false,
                "started": false,
                "programId": null,
                "categoryList": [
                    {
                        "id": 229,
                        "name": "joreward",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    }
                ],
                "vendorId": null,
                "loyaltyProgramCriteria": null,
                "groups": [],
                "rewardRank": null,
                "images": [],
                "videos": []
            },
            "revenueDetails": null,
            "paymentDetails": null,
            "redemptionDetails": {
                "redemptionType": "VOUCHER",
                "redemptionValue": null
            },
            "transactionCustomFields": null,
            "fulfillmentDetails": null,
            "issueDateTime": "2025-05-07T02:57:34Z",
            "eventDateTime": "2025-05-07T02:57:34Z",
            "code": null,
            "vendor": "{\"pointsRedeemed\": \"500\"}",
            "seriesId": null
        },
        {
            "typeOfReward": "VOUCHER",
            "pointsRedeemed": 500,
            "rewardId": 367207,
            "transactionId": 395901,
            "issueRewardRefId": "transactionNumber",
            "rewardIssueDate": 1746583087000,
            "rewardIssueDateTime": "2025-05-07T01:58:07Z",
            "userRewardExpiry": null,
            "userRewardExpiryDateTime": null,
            "userRewardDetails": {
                "id": 367207,
                "name": "alpha",
                "description": "testreward1",
                "imageId": null,
                "imageUrl": null,
                "thumbnailId": null,
                "thumbnailUrl": null,
                "termAndConditionsId": null,
                "termAndConditionsUrl": null,
                "tier": null,
                "label": null,
                "priority": null,
                "intouchPoints": 500,
                "group": null,
                "startTime": "2025-01-26 20:00:00",
                "startDateTime": "2025-01-26T20:00:00Z",
                "endTime": "2026-10-31 11:59:30",
                "endDateTime": "2026-10-31T11:59:30Z",
                "expired": false,
                "started": false,
                "programId": null,
                "categoryList": [
                    {
                        "id": 229,
                        "name": "joreward",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    }
                ],
                "vendorId": null,
                "loyaltyProgramCriteria": null,
                "groups": [],
                "rewardRank": null,
                "images": [],
                "videos": []
            },
            "revenueDetails": null,
            "paymentDetails": null,
            "redemptionDetails": {
                "redemptionType": "VOUCHER",
                "redemptionValue": null
            },
            "transactionCustomFields": null,
            "fulfillmentDetails": null,
            "issueDateTime": "2025-05-07T01:58:07Z",
            "eventDateTime": "2025-05-07T01:58:07Z",
            "code": null,
            "vendor": "{\"pointsRedeemed\": \"500\"}",
            "seriesId": null
        },
        {
            "typeOfReward": "VOUCHER",
            "pointsRedeemed": 500,
            "rewardId": 367204,
            "transactionId": 395900,
            "issueRewardRefId": "transactionNumber",
            "rewardIssueDate": 1746582784000,
            "rewardIssueDateTime": "2025-05-07T01:53:04Z",
            "userRewardExpiry": null,
            "userRewardExpiryDateTime": null,
            "userRewardDetails": {
                "id": 367204,
                "name": "jogoldnamechange check",
                "description": "testreward1",
                "imageId": null,
                "imageUrl": null,
                "thumbnailId": null,
                "thumbnailUrl": null,
                "termAndConditionsId": null,
                "termAndConditionsUrl": null,
                "tier": null,
                "label": null,
                "priority": null,
                "intouchPoints": 500,
                "group": null,
                "startTime": "2025-01-26 20:00:00",
                "startDateTime": "2025-01-26T20:00:00Z",
                "endTime": "2026-10-31 11:59:30",
                "endDateTime": "2026-10-31T11:59:30Z",
                "expired": false,
                "started": false,
                "programId": null,
                "categoryList": [
                    {
                        "id": 229,
                        "name": "joreward",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    }
                ],
                "vendorId": null,
                "loyaltyProgramCriteria": null,
                "groups": [],
                "rewardRank": null,
                "images": [],
                "videos": []
            },
            "revenueDetails": null,
            "paymentDetails": null,
            "redemptionDetails": {
                "redemptionType": "VOUCHER",
                "redemptionValue": null
            },
            "transactionCustomFields": null,
            "fulfillmentDetails": null,
            "issueDateTime": "2025-05-07T01:53:04Z",
            "eventDateTime": "2025-05-07T01:53:04Z",
            "code": null,
            "vendor": "{\"pointsRedeemed\": \"500\"}",
            "seriesId": null
        },
        {
            "typeOfReward": "VOUCHER",
            "pointsRedeemed": 500,
            "rewardId": 367204,
            "transactionId": 395899,
            "issueRewardRefId": "transactionNumber",
            "rewardIssueDate": 1746581899000,
            "rewardIssueDateTime": "2025-05-07T01:38:19Z",
            "userRewardExpiry": null,
            "userRewardExpiryDateTime": null,
            "userRewardDetails": {
                "id": 367204,
                "name": "jogoldnamechange check",
                "description": "testreward1",
                "imageId": null,
                "imageUrl": null,
                "thumbnailId": null,
                "thumbnailUrl": null,
                "termAndConditionsId": null,
                "termAndConditionsUrl": null,
                "tier": null,
                "label": null,
                "priority": null,
                "intouchPoints": 500,
                "group": null,
                "startTime": "2025-01-26 20:00:00",
                "startDateTime": "2025-01-26T20:00:00Z",
                "endTime": "2026-10-31 11:59:30",
                "endDateTime": "2026-10-31T11:59:30Z",
                "expired": false,
                "started": false,
                "programId": null,
                "categoryList": [
                    {
                        "id": 229,
                        "name": "joreward",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    }
                ],
                "vendorId": null,
                "loyaltyProgramCriteria": null,
                "groups": [],
                "rewardRank": null,
                "images": [],
                "videos": []
            },
            "revenueDetails": null,
            "paymentDetails": null,
            "redemptionDetails": {
                "redemptionType": "VOUCHER",
                "redemptionValue": null
            },
            "transactionCustomFields": null,
            "fulfillmentDetails": null,
            "issueDateTime": "2025-05-07T01:38:18Z",
            "eventDateTime": "2025-05-07T01:38:18Z",
            "code": null,
            "vendor": "{\"pointsRedeemed\": \"500\"}",
            "seriesId": null
        },
        {
            "typeOfReward": "VOUCHER",
            "pointsRedeemed": 500,
            "rewardId": 367203,
            "transactionId": 395898,
            "issueRewardRefId": "transactionNumber",
            "rewardIssueDate": 1746581885000,
            "rewardIssueDateTime": "2025-05-07T01:38:05Z",
            "userRewardExpiry": null,
            "userRewardExpiryDateTime": null,
            "userRewardDetails": {
                "id": 367203,
                "name": "jogoldnamechange check",
                "description": "testreward1",
                "imageId": null,
                "imageUrl": null,
                "thumbnailId": null,
                "thumbnailUrl": null,
                "termAndConditionsId": null,
                "termAndConditionsUrl": null,
                "tier": null,
                "label": null,
                "priority": null,
                "intouchPoints": 500,
                "group": null,
                "startTime": "2025-01-26 20:00:00",
                "startDateTime": "2025-01-26T20:00:00Z",
                "endTime": "2026-10-31 11:59:30",
                "endDateTime": "2026-10-31T11:59:30Z",
                "expired": false,
                "started": false,
                "programId": null,
                "categoryList": [
                    {
                        "id": 229,
                        "name": "joreward",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    }
                ],
                "vendorId": null,
                "loyaltyProgramCriteria": null,
                "groups": [],
                "rewardRank": null,
                "images": [],
                "videos": []
            },
            "revenueDetails": null,
            "paymentDetails": null,
            "redemptionDetails": {
                "redemptionType": "VOUCHER",
                "redemptionValue": null
            },
            "transactionCustomFields": null,
            "fulfillmentDetails": null,
            "issueDateTime": "2025-05-07T01:38:05Z",
            "eventDateTime": "2025-05-07T01:38:05Z",
            "code": null,
            "vendor": "{\"pointsRedeemed\": \"500\"}",
            "seriesId": null
        },
        {
            "typeOfReward": "VOUCHER",
            "pointsRedeemed": 500,
            "rewardId": 367202,
            "transactionId": 395897,
            "issueRewardRefId": "transactionNumber",
            "rewardIssueDate": 1746581872000,
            "rewardIssueDateTime": "2025-05-07T01:37:52Z",
            "userRewardExpiry": null,
            "userRewardExpiryDateTime": null,
            "userRewardDetails": {
                "id": 367202,
                "name": "jogoldnamechange check",
                "description": "testreward1",
                "imageId": null,
                "imageUrl": null,
                "thumbnailId": null,
                "thumbnailUrl": null,
                "termAndConditionsId": null,
                "termAndConditionsUrl": null,
                "tier": null,
                "label": null,
                "priority": null,
                "intouchPoints": 500,
                "group": null,
                "startTime": "2025-01-26 20:00:00",
                "startDateTime": "2025-01-26T20:00:00Z",
                "endTime": "2026-10-31 11:59:30",
                "endDateTime": "2026-10-31T11:59:30Z",
                "expired": false,
                "started": false,
                "programId": null,
                "categoryList": [
                    {
                        "id": 229,
                        "name": "joreward",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    }
                ],
                "vendorId": null,
                "loyaltyProgramCriteria": null,
                "groups": [],
                "rewardRank": null,
                "images": [],
                "videos": []
            },
            "revenueDetails": null,
            "paymentDetails": null,
            "redemptionDetails": {
                "redemptionType": "VOUCHER",
                "redemptionValue": null
            },
            "transactionCustomFields": null,
            "fulfillmentDetails": null,
            "issueDateTime": "2025-05-07T01:37:51Z",
            "eventDateTime": "2025-05-07T01:37:51Z",
            "code": null,
            "vendor": "{\"pointsRedeemed\": \"500\"}",
            "seriesId": null
        },
        {
            "typeOfReward": "VOUCHER",
            "pointsRedeemed": 500,
            "rewardId": 367195,
            "transactionId": 395896,
            "issueRewardRefId": "transactionNumber",
            "rewardIssueDate": 1746581051000,
            "rewardIssueDateTime": "2025-05-07T01:24:11Z",
            "userRewardExpiry": null,
            "userRewardExpiryDateTime": null,
            "userRewardDetails": {
                "id": 367195,
                "name": "jogoldnamechange check",
                "description": "testreward1",
                "imageId": null,
                "imageUrl": null,
                "thumbnailId": null,
                "thumbnailUrl": null,
                "termAndConditionsId": null,
                "termAndConditionsUrl": null,
                "tier": null,
                "label": null,
                "priority": null,
                "intouchPoints": 500,
                "group": null,
                "startTime": "2025-01-26 20:00:00",
                "startDateTime": "2025-01-26T20:00:00Z",
                "endTime": "2026-10-31 11:59:30",
                "endDateTime": "2026-10-31T11:59:30Z",
                "expired": false,
                "started": false,
                "programId": null,
                "categoryList": [
                    {
                        "id": 229,
                        "name": "joreward",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    }
                ],
                "vendorId": null,
                "loyaltyProgramCriteria": null,
                "groups": [],
                "rewardRank": null,
                "images": [],
                "videos": []
            },
            "revenueDetails": null,
            "paymentDetails": null,
            "redemptionDetails": {
                "redemptionType": "VOUCHER",
                "redemptionValue": null
            },
            "transactionCustomFields": null,
            "fulfillmentDetails": null,
            "issueDateTime": "2025-05-07T01:24:11Z",
            "eventDateTime": "2025-05-07T01:24:11Z",
            "code": null,
            "vendor": "{\"pointsRedeemed\": \"500\"}",
            "seriesId": null
        },
        {
            "typeOfReward": "VOUCHER",
            "pointsRedeemed": 1000,
            "rewardId": 366796,
            "transactionId": 395444,
            "issueRewardRefId": "transactionNumber",
            "rewardIssueDate": 1746526278000,
            "rewardIssueDateTime": "2025-05-06T10:11:18Z",
            "userRewardExpiry": null,
            "userRewardExpiryDateTime": null,
            "userRewardDetails": {
                "id": 366796,
                "name": "jogoldnamechange check",
                "description": "testreward1",
                "imageId": null,
                "imageUrl": null,
                "thumbnailId": null,
                "thumbnailUrl": null,
                "termAndConditionsId": null,
                "termAndConditionsUrl": null,
                "tier": null,
                "label": null,
                "priority": null,
                "intouchPoints": 1000,
                "group": null,
                "startTime": "2025-01-26 20:00:00",
                "startDateTime": "2025-01-26T20:00:00Z",
                "endTime": "2026-10-31 11:59:30",
                "endDateTime": "2026-10-31T11:59:30Z",
                "expired": false,
                "started": false,
                "programId": null,
                "categoryList": [
                    {
                        "id": 229,
                        "name": "joreward",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    }
                ],
                "vendorId": null,
                "loyaltyProgramCriteria": null,
                "groups": [],
                "rewardRank": null,
                "images": [],
                "videos": []
            },
            "revenueDetails": null,
            "paymentDetails": null,
            "redemptionDetails": {
                "redemptionType": "VOUCHER",
                "redemptionValue": null
            },
            "transactionCustomFields": null,
            "fulfillmentDetails": null,
            "issueDateTime": "2025-05-06T10:11:18Z",
            "eventDateTime": "2025-05-06T10:11:18Z",
            "code": null,
            "vendor": "{\"pointsRedeemed\": \"1000\"}",
            "seriesId": null
        },
        {
            "typeOfReward": "INTOUCH_REWARD",
            "pointsRedeemed": 500,
            "rewardId": 346354,
            "transactionId": 380507,
            "issueRewardRefId": "transactionNumber",
            "rewardIssueDate": 1744611544000,
            "rewardIssueDateTime": "2025-04-14T06:19:04Z",
            "userRewardExpiry": "2025-06-11 00:00:00",
            "userRewardExpiryDateTime": "2025-06-11T00:00:00Z",
            "userRewardDetails": {
                "id": 346354,
                "name": "testreward2",
                "description": "testreward1",
                "imageId": "bef4d522-2cf8-4fea-8087-376c449d5c85",
                "imageUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/86a1c214-a955-4b40-a2d7-d4dc279.jpeg",
                "thumbnailId": "c886f064-2b3f-4c19-9e86-7f7e5ab5ae04",
                "thumbnailUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/9e0dfad6-5b9d-4e2b-ac15-2870357.jpeg",
                "termAndConditionsId": "820a3d7f-2601-405b-9f56-4a3ba8e9df73",
                "termAndConditionsUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/06f0da4b-dd0b-48fe-b20d-1cadc76.html",
                "tier": null,
                "label": null,
                "priority": 1,
                "intouchPoints": 500,
                "group": null,
                "startTime": "2025-03-25 20:00:00",
                "startDateTime": "2025-03-25T20:00:00Z",
                "endTime": "2026-10-31 06:29:30",
                "endDateTime": "2026-10-31T06:29:30Z",
                "expired": false,
                "started": false,
                "programId": null,
                "categoryList": [
                    {
                        "id": 229,
                        "name": "joreward",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    }
                ],
                "vendorId": null,
                "loyaltyProgramCriteria": null,
                "groups": [],
                "rewardRank": null,
                "images": [],
                "videos": []
            },
            "revenueDetails": null,
            "paymentDetails": null,
            "redemptionDetails": {
                "redemptionType": "INTOUCH_REWARD",
                "redemptionValue": null
            },
            "transactionCustomFields": null,
            "fulfillmentDetails": null,
            "issueDateTime": "2025-04-14T06:19:03Z",
            "eventDateTime": "2025-04-14T06:19:03Z",
            "code": "UHI3T4V98MRGP0G0",
            "vendor": null,
            "seriesId": "686692"
        }
    ],
    "intouchUserId": "565039504",
    "pagingDto": {
        "last": true,
        "totalElements": 12,
        "totalPages": 1,
        "numberOfElements": 12,
        "first": true,
        "size": 100,
        "number": 0
    }
}
```
```json With typeOfReward filter
{
    "status": {
        "success": true,
        "code": 200,
        "message": "User Reward fetched successfully"
    },
    "rewards": [
        {
            "typeOfReward": "INTOUCH_REWARD",
            "pointsRedeemed": 0,
            "rewardId": 265893,
            "transactionId": 286244,
            "issueRewardRefId": "107",
            "rewardIssueDate": 1731564662000,
            "userRewardExpiry": "2025-10-31 00:00:00",
            "userRewardDetails": {
                "id": 265893,
                "name": "testreward1",
                "description": "testreward1",
                "imageId": "bef4d522-2cf8-4fea-8087-376c449d5c85",
                "imageUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/86a1c214-a955-4b40-a2d7-d4dc279.jpeg",
                "thumbnailId": "c886f064-2b3f-4c19-9e86-7f7e5ab5ae04",
                "thumbnailUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/9e0dfad6-5b9d-4e2b-ac15-2870357.jpeg",
                "termAndConditionsId": "820a3d7f-2601-405b-9f56-4a3ba8e9df73",
                "termAndConditionsUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/06f0da4b-dd0b-48fe-b20d-1cadc76.html",
                "tier": null,
                "label": null,
                "priority": 1,
                "intouchPoints": 500,
                "group": null,
                "startTime": "2024-11-14 06:11:00",
                "endTime": "2025-07-11 14:43:00",
                "expired": false,
                "started": false,
                "programId": null,
                "categoryList": [
                    {
                        "id": 4,
                        "name": "clothing",
                        "enabled": true
                    }
                ],
                "customFields": {
                    "testdate": "2020-01-01 01:01:01",
                    "CF1": "Custom field 1"
                },
                "loyaltyProgramCriteria": null,
                "groups": [],
                "rewardRank": 1,
                "images": [],
                "videos": []
            },
            "revenueDetails": null,
            "paymentDetails": {
                "paymentMode": "FREE",
                "id": 1955
            },
            "redemptionDetails": {
                "redemptionType": "INTOUCH_REWARD",
                "redemptionValue": null
            },
            "transactionCustomFields": null,
            "fulfillmentDetails": null,
            "code": "2609909641",
            "vendor": null,
            "seriesId": "415446"
        },
        {
            "typeOfReward": "INTOUCH_REWARD",
            "pointsRedeemed": 100,
            "rewardId": 198827,
            "transactionId": 213560,
            "issueRewardRefId": "107",
            "rewardIssueDate": 1720702639000,
            "userRewardExpiry": "2029-06-30 00:00:00",
            "userRewardDetails": {
                "id": 198827,
                "name": "testreward1",
                "description": "testreward1",
                "imageId": "bef4d522-2cf8-4fea-8087-376c449d5c85",
                "imageUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/86a1c214-a955-4b40-a2d7-d4dc279.jpeg",
                "thumbnailId": "c886f064-2b3f-4c19-9e86-7f7e5ab5ae04",
                "thumbnailUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/9e0dfad6-5b9d-4e2b-ac15-2870357.jpeg",
                "termAndConditionsId": "820a3d7f-2601-405b-9f56-4a3ba8e9df73",
                "termAndConditionsUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/06f0da4b-dd0b-48fe-b20d-1cadc76.html",
                "tier": null,
                "label": null,
                "priority": 1,
                "intouchPoints": 500,
                "group": null,
                "startTime": "2024-07-11 12:57:00",
                "endTime": "2025-07-11 14:43:00",
                "expired": false,
                "started": false,
                "programId": null,
                "categoryList": [
                    {
                        "id": 4,
                        "name": "clothing",
                        "enabled": true
                    }
                ],
                "customFields": {
                    "testdate": "2020-01-01 01:01:01",
                    "CF1": "Custom field 1"
                },
                "loyaltyProgramCriteria": null,
                "groups": [],
                "rewardRank": 1,
                "images": [],
                "videos": []
            },
            "revenueDetails": null,
            "paymentDetails": {
                "paymentMode": "POINTS",
                "id": 284,
                "points": 100.0000
            },
            "redemptionDetails": {
                "redemptionType": "INTOUCH_REWARD",
                "redemptionValue": null
            },
            "transactionCustomFields": null,
            "fulfillmentDetails": null,
            "code": "8803695087",
            "vendor": null,
            "seriesId": "350219"
        }
    ],
    "intouchUserId": "555567088",
    "pagingDto": {
        "last": true,
        "totalElements": 2,
        "totalPages": 1,
        "numberOfElements": 2,
        "first": true,
        "size": 100,
        "number": 0
    }
}
```
```json With purchase dates filter
{
    "status": {
        "success": true,
        "code": 200,
        "message": "User Reward fetched successfully"
    },
    "rewards": [
        {
            "typeOfReward": "INTOUCH_REWARD",
            "pointsRedeemed": 0,
            "rewardId": 265893,
            "transactionId": 286244,
            "issueRewardRefId": "107",
            "rewardIssueDate": 1731564662000,
            "userRewardExpiry": "2025-10-31 00:00:00",
            "userRewardDetails": {
                "id": 265893,
                "name": "testreward1",
                "description": "testreward1",
                "imageId": "bef4d522-2cf8-4fea-8087-376c449d5c85",
                "imageUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/86a1c214-a955-4b40-a2d7-d4dc279.jpeg",
                "thumbnailId": "c886f064-2b3f-4c19-9e86-7f7e5ab5ae04",
                "thumbnailUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/9e0dfad6-5b9d-4e2b-ac15-2870357.jpeg",
                "termAndConditionsId": "820a3d7f-2601-405b-9f56-4a3ba8e9df73",
                "termAndConditionsUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/06f0da4b-dd0b-48fe-b20d-1cadc76.html",
                "tier": null,
                "label": null,
                "priority": 1,
                "intouchPoints": 500,
                "group": null,
                "startTime": "2024-11-14 06:11:00",
                "endTime": "2025-07-11 14:43:00",
                "expired": false,
                "started": false,
                "programId": null,
                "categoryList": [
                    {
                        "id": 4,
                        "name": "clothing",
                        "enabled": true
                    }
                ],
                "customFields": {
                    "testdate": "2020-01-01 01:01:01",
                    "CF1": "Custom field 1"
                },
                "loyaltyProgramCriteria": null,
                "groups": [],
                "rewardRank": 1,
                "images": [],
                "videos": []
            },
            "revenueDetails": null,
            "paymentDetails": {
                "paymentMode": "FREE",
                "id": 1955
            },
            "redemptionDetails": {
                "redemptionType": "INTOUCH_REWARD",
                "redemptionValue": null
            },
            "transactionCustomFields": null,
            "fulfillmentDetails": null,
            "code": "2609909641",
            "vendor": null,
            "seriesId": "415446"
        }
    ],
    "intouchUserId": "555567088",
    "pagingDto": {
        "last": true,
        "totalElements": 1,
        "totalPages": 1,
        "numberOfElements": 1,
        "first": true,
        "size": 100,
        "number": 0
    }
}
```
```json With category filter
{
    "status": {
        "success": true,
        "code": 200,
        "message": "User Reward fetched successfully"
    },
    "rewards": [
        {
            "typeOfReward": "MILES",
            "pointsRedeemed": 3,
            "rewardId": 272383,
            "transactionId": 293260,
            "issueRewardRefId": "transactionNumber",
            "rewardIssueDate": 1732618026000,
            "userRewardExpiry": null,
            "userRewardDetails": {
                "id": 272383,
                "name": "testreward1",
                "description": "testreward1",
                "imageId": "bef4d522-2cf8-4fea-8087-376c449d5c85",
                "imageUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/86a1c214-a955-4b40-a2d7-d4dc279.jpeg",
                "thumbnailId": "c886f064-2b3f-4c19-9e86-7f7e5ab5ae04",
                "thumbnailUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/9e0dfad6-5b9d-4e2b-ac15-2870357.jpeg",
                "termAndConditionsId": "820a3d7f-2601-405b-9f56-4a3ba8e9df73",
                "termAndConditionsUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/06f0da4b-dd0b-48fe-b20d-1cadc76.html",
                "tier": null,
                "label": null,
                "priority": 1,
                "intouchPoints": 500,
                "group": null,
                "startTime": "2024-11-26 07:15:00",
                "endTime": "2025-07-11 14:43:00",
                "expired": false,
                "started": false,
                "programId": null,
                "categoryList": [
                    {
                        "id": 4,
                        "name": "clothing",
                        "enabled": true
                    }
                ],
                "customFields": {
                    "testdate": "2020-01-01 01:01:01",
                    "CF1": "Custom field 1"
                },
                "loyaltyProgramCriteria": null,
                "groups": [],
                "rewardRank": 1,
                "images": [],
                "videos": []
            },
            "revenueDetails": null,
            "paymentDetails": {
                "paymentMode": "CONV_RATIO",
                "id": 2232,
                "conversionRatio": 0.3300
            },
            "redemptionDetails": {
                "redemptionType": "MILES",
                "redemptionValue": 1.0000
            },
            "transactionCustomFields": null,
            "fulfillmentDetails": null,
            "code": null,
            "vendor": "{}",
            "seriesId": null
        },
        {
            "typeOfReward": "MILES",
            "pointsRedeemed": 3,
            "rewardId": 272383,
            "transactionId": 293259,
            "issueRewardRefId": "transactionNumber",
            "rewardIssueDate": 1732618001000,
            "userRewardExpiry": null,
            "userRewardDetails": {
                "id": 272383,
                "name": "testreward1",
                "description": "testreward1",
                "imageId": "bef4d522-2cf8-4fea-8087-376c449d5c85",
                "imageUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/86a1c214-a955-4b40-a2d7-d4dc279.jpeg",
                "thumbnailId": "c886f064-2b3f-4c19-9e86-7f7e5ab5ae04",
                "thumbnailUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/9e0dfad6-5b9d-4e2b-ac15-2870357.jpeg",
                "termAndConditionsId": "820a3d7f-2601-405b-9f56-4a3ba8e9df73",
                "termAndConditionsUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/06f0da4b-dd0b-48fe-b20d-1cadc76.html",
                "tier": null,
                "label": null,
                "priority": 1,
                "intouchPoints": 500,
                "group": null,
                "startTime": "2024-11-26 07:15:00",
                "endTime": "2025-07-11 14:43:00",
                "expired": false,
                "started": false,
                "programId": null,
                "categoryList": [
                    {
                        "id": 4,
                        "name": "clothing",
                        "enabled": true
                    }
                ],
                "customFields": {
                    "testdate": "2020-01-01 01:01:01",
                    "CF1": "Custom field 1"
                },
                "loyaltyProgramCriteria": null,
                "groups": [],
                "rewardRank": 1,
                "images": [],
                "videos": []
            },
            "revenueDetails": null,
            "paymentDetails": {
                "paymentMode": "CONV_RATIO",
                "id": 2232,
                "conversionRatio": 0.3300
            },
            "redemptionDetails": {
                "redemptionType": "MILES",
                "redemptionValue": 1.0000
            },
            "transactionCustomFields": null,
            "fulfillmentDetails": null,
            "code": null,
            "vendor": "{}",
            "seriesId": null
        },
        {
            "typeOfReward": "MILES",
            "pointsRedeemed": 3,
            "rewardId": 272383,
            "transactionId": 293175,
            "issueRewardRefId": "transactionNumber",
            "rewardIssueDate": 1732605304000,
            "userRewardExpiry": null,
            "userRewardDetails": {
                "id": 272383,
                "name": "testreward1",
                "description": "testreward1",
                "imageId": "bef4d522-2cf8-4fea-8087-376c449d5c85",
                "imageUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/86a1c214-a955-4b40-a2d7-d4dc279.jpeg",
                "thumbnailId": "c886f064-2b3f-4c19-9e86-7f7e5ab5ae04",
                "thumbnailUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/9e0dfad6-5b9d-4e2b-ac15-2870357.jpeg",
                "termAndConditionsId": "820a3d7f-2601-405b-9f56-4a3ba8e9df73",
                "termAndConditionsUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/06f0da4b-dd0b-48fe-b20d-1cadc76.html",
                "tier": null,
                "label": null,
                "priority": 1,
                "intouchPoints": 500,
                "group": null,
                "startTime": "2024-11-26 07:15:00",
                "endTime": "2025-07-11 14:43:00",
                "expired": false,
                "started": false,
                "programId": null,
                "categoryList": [
                    {
                        "id": 4,
                        "name": "clothing",
                        "enabled": true
                    }
                ],
                "customFields": {
                    "testdate": "2020-01-01 01:01:01",
                    "CF1": "Custom field 1"
                },
                "loyaltyProgramCriteria": null,
                "groups": [],
                "rewardRank": 1,
                "images": [],
                "videos": []
            },
            "revenueDetails": null,
            "paymentDetails": {
                "paymentMode": "CONV_RATIO",
                "id": 2232,
                "conversionRatio": 0.3300
            },
            "redemptionDetails": {
                "redemptionType": "MILES",
                "redemptionValue": 1.0000
            },
            "transactionCustomFields": null,
            "fulfillmentDetails": null,
            "code": null,
            "vendor": "{}",
            "seriesId": null
        },
        {
            "typeOfReward": "GAMES",
            "pointsRedeemed": 0,
            "rewardId": 269188,
            "transactionId": 289753,
            "issueRewardRefId": "1732092067",
            "rewardIssueDate": 1732092068000,
            "userRewardExpiry": null,
            "userRewardDetails": {
                "id": 269188,
                "name": "testreward1",
                "description": "testreward1",
                "imageId": "bef4d522-2cf8-4fea-8087-376c449d5c85",
                "imageUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/86a1c214-a955-4b40-a2d7-d4dc279.jpeg",
                "thumbnailId": "c886f064-2b3f-4c19-9e86-7f7e5ab5ae04",
                "thumbnailUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/9e0dfad6-5b9d-4e2b-ac15-2870357.jpeg",
                "termAndConditionsId": "820a3d7f-2601-405b-9f56-4a3ba8e9df73",
                "termAndConditionsUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/06f0da4b-dd0b-48fe-b20d-1cadc76.html",
                "tier": null,
                "label": null,
                "priority": 1,
                "intouchPoints": 500,
                "group": null,
                "startTime": "2024-11-20 08:41:00",
                "endTime": "2025-07-11 14:43:00",
                "expired": false,
                "started": false,
                "programId": null,
                "categoryList": [
                    {
                        "id": 2,
                        "name": "accessories",
                        "enabled": true
                    }
                ],
                "customFields": {
                    "testdate": "2020-01-01 01:01:01",
                    "CF1": "Custom field 1"
                },
                "loyaltyProgramCriteria": null,
                "groups": [],
                "rewardRank": 1,
                "images": [],
                "videos": []
            },
            "revenueDetails": null,
            "paymentDetails": {
                "paymentMode": "FREE",
                "id": 2096
            },
            "redemptionDetails": {
                "redemptionType": "GAMES",
                "redemptionValue": null
            },
            "transactionCustomFields": null,
            "fulfillmentDetails": null,
            "code": null,
            "vendor": "{}",
            "seriesId": null
        },
        {
            "typeOfReward": "INTOUCH_REWARD",
            "pointsRedeemed": 0,
            "rewardId": 265893,
            "transactionId": 286244,
            "issueRewardRefId": "107",
            "rewardIssueDate": 1731564662000,
            "userRewardExpiry": "2025-10-31 00:00:00",
            "userRewardDetails": {
                "id": 265893,
                "name": "testreward1",
                "description": "testreward1",
                "imageId": "bef4d522-2cf8-4fea-8087-376c449d5c85",
                "imageUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/86a1c214-a955-4b40-a2d7-d4dc279.jpeg",
                "thumbnailId": "c886f064-2b3f-4c19-9e86-7f7e5ab5ae04",
                "thumbnailUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/9e0dfad6-5b9d-4e2b-ac15-2870357.jpeg",
                "termAndConditionsId": "820a3d7f-2601-405b-9f56-4a3ba8e9df73",
                "termAndConditionsUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/06f0da4b-dd0b-48fe-b20d-1cadc76.html",
                "tier": null,
                "label": null,
                "priority": 1,
                "intouchPoints": 500,
                "group": null,
                "startTime": "2024-11-14 06:11:00",
                "endTime": "2025-07-11 14:43:00",
                "expired": false,
                "started": false,
                "programId": null,
                "categoryList": [
                    {
                        "id": 4,
                        "name": "clothing",
                        "enabled": true
                    }
                ],
                "customFields": {
                    "testdate": "2020-01-01 01:01:01",
                    "CF1": "Custom field 1"
                },
                "loyaltyProgramCriteria": null,
                "groups": [],
                "rewardRank": 1,
                "images": [],
                "videos": []
            },
            "revenueDetails": null,
            "paymentDetails": {
                "paymentMode": "FREE",
                "id": 1955
            },
            "redemptionDetails": {
                "redemptionType": "INTOUCH_REWARD",
                "redemptionValue": null
            },
            "transactionCustomFields": null,
            "fulfillmentDetails": null,
            "code": "2609909641",
            "vendor": null,
            "seriesId": "415446"
        },
        {
            "typeOfReward": "SWEEPSTAKES",
            "pointsRedeemed": 0,
            "rewardId": 239433,
            "transactionId": 257735,
            "issueRewardRefId": "1727328852",
            "rewardIssueDate": 1727328853000,
            "userRewardExpiry": null,
            "userRewardDetails": {
                "id": 239433,
                "name": "testreward1",
                "description": "testreward1",
                "imageId": "bef4d522-2cf8-4fea-8087-376c449d5c85",
                "imageUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/86a1c214-a955-4b40-a2d7-d4dc279.jpeg",
                "thumbnailId": "c886f064-2b3f-4c19-9e86-7f7e5ab5ae04",
                "thumbnailUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/9e0dfad6-5b9d-4e2b-ac15-2870357.jpeg",
                "termAndConditionsId": "820a3d7f-2601-405b-9f56-4a3ba8e9df73",
                "termAndConditionsUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/06f0da4b-dd0b-48fe-b20d-1cadc76.html",
                "tier": null,
                "label": null,
                "priority": 1,
                "intouchPoints": 0,
                "group": null,
                "startTime": "2024-09-26 05:34:00",
                "endTime": "2025-07-11 14:43:00",
                "expired": false,
                "started": false,
                "programId": null,
                "categoryList": [
                    {
                        "id": 4,
                        "name": "clothing",
                        "enabled": true
                    }
                ],
                "customFields": {
                    "testdate": "2020-01-01 01:01:01",
                    "CF1": "Custom field 1"
                },
                "loyaltyProgramCriteria": null,
                "groups": [],
                "rewardRank": 1,
                "images": [],
                "videos": []
            },
            "revenueDetails": null,
            "paymentDetails": {
                "paymentMode": "FREE",
                "id": 700
            },
            "redemptionDetails": {
                "redemptionType": "SWEEPSTAKES",
                "redemptionValue": null
            },
            "transactionCustomFields": null,
            "fulfillmentDetails": {
                "status": "Order confirmed"
            },
            "code": null,
            "vendor": "{}",
            "seriesId": "415446"
        },
        {
            "typeOfReward": "SWEEPSTAKES",
            "pointsRedeemed": 0,
            "rewardId": 239434,
            "transactionId": 257736,
            "issueRewardRefId": "1727328852",
            "rewardIssueDate": 1727328853000,
            "userRewardExpiry": null,
            "userRewardDetails": {
                "id": 239434,
                "name": "testreward1",
                "description": "testreward1",
                "imageId": "bef4d522-2cf8-4fea-8087-376c449d5c85",
                "imageUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/86a1c214-a955-4b40-a2d7-d4dc279.jpeg",
                "thumbnailId": "c886f064-2b3f-4c19-9e86-7f7e5ab5ae04",
                "thumbnailUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/9e0dfad6-5b9d-4e2b-ac15-2870357.jpeg",
                "termAndConditionsId": "820a3d7f-2601-405b-9f56-4a3ba8e9df73",
                "termAndConditionsUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/06f0da4b-dd0b-48fe-b20d-1cadc76.html",
                "tier": null,
                "label": null,
                "priority": 1,
                "intouchPoints": 0,
                "group": null,
                "startTime": "2024-09-26 05:34:00",
                "endTime": "2025-07-11 14:43:00",
                "expired": false,
                "started": false,
                "programId": null,
                "categoryList": [
                    {
                        "id": 4,
                        "name": "clothing",
                        "enabled": true
                    }
                ],
                "customFields": {
                    "testdate": "2020-01-01 01:01:01",
                    "CF1": "Custom field 1"
                },
                "loyaltyProgramCriteria": null,
                "groups": [],
                "rewardRank": 1,
                "images": [],
                "videos": []
            },
            "revenueDetails": null,
            "paymentDetails": {
                "paymentMode": "FREE",
                "id": 701
            },
            "redemptionDetails": {
                "redemptionType": "SWEEPSTAKES",
                "redemptionValue": null
            },
            "transactionCustomFields": null,
            "fulfillmentDetails": {
                "status": "Order confirmed"
            },
            "code": null,
            "vendor": "{}",
            "seriesId": "415446"
        },
        {
            "typeOfReward": "GAMES",
            "pointsRedeemed": 100,
            "rewardId": 221065,
            "transactionId": 237731,
            "issueRewardRefId": "107",
            "rewardIssueDate": 1724322124000,
            "userRewardExpiry": null,
            "userRewardDetails": {
                "id": 221065,
                "name": "testreward1",
                "description": "testreward1",
                "imageId": "bef4d522-2cf8-4fea-8087-376c449d5c85",
                "imageUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/86a1c214-a955-4b40-a2d7-d4dc279.jpeg",
                "thumbnailId": "c886f064-2b3f-4c19-9e86-7f7e5ab5ae04",
                "thumbnailUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/9e0dfad6-5b9d-4e2b-ac15-2870357.jpeg",
                "termAndConditionsId": "820a3d7f-2601-405b-9f56-4a3ba8e9df73",
                "termAndConditionsUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/06f0da4b-dd0b-48fe-b20d-1cadc76.html",
                "tier": null,
                "label": null,
                "priority": 1,
                "intouchPoints": 500,
                "group": null,
                "startTime": "2024-08-22 10:22:00",
                "endTime": "2025-07-11 14:43:00",
                "expired": false,
                "started": false,
                "programId": null,
                "categoryList": [
                    {
                        "id": 4,
                        "name": "clothing",
                        "enabled": true
                    }
                ],
                "customFields": {
                    "testdate": "2020-01-01 01:01:01",
                    "CF1": "Custom field 1"
                },
                "loyaltyProgramCriteria": null,
                "groups": [],
                "rewardRank": 1,
                "images": [],
                "videos": []
            },
            "revenueDetails": null,
            "paymentDetails": {
                "paymentMode": "POINTS",
                "id": 455,
                "points": 100.0000
            },
            "redemptionDetails": {
                "redemptionType": "GAMES",
                "redemptionValue": null
            },
            "transactionCustomFields": null,
            "fulfillmentDetails": null,
            "code": null,
            "vendor": "{}",
            "seriesId": "415446"
        },
        {
            "typeOfReward": "INTOUCH_REWARD",
            "pointsRedeemed": 100,
            "rewardId": 198827,
            "transactionId": 213560,
            "issueRewardRefId": "107",
            "rewardIssueDate": 1720702639000,
            "userRewardExpiry": "2029-06-30 00:00:00",
            "userRewardDetails": {
                "id": 198827,
                "name": "testreward1",
                "description": "testreward1",
                "imageId": "bef4d522-2cf8-4fea-8087-376c449d5c85",
                "imageUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/86a1c214-a955-4b40-a2d7-d4dc279.jpeg",
                "thumbnailId": "c886f064-2b3f-4c19-9e86-7f7e5ab5ae04",
                "thumbnailUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/9e0dfad6-5b9d-4e2b-ac15-2870357.jpeg",
                "termAndConditionsId": "820a3d7f-2601-405b-9f56-4a3ba8e9df73",
                "termAndConditionsUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/06f0da4b-dd0b-48fe-b20d-1cadc76.html",
                "tier": null,
                "label": null,
                "priority": 1,
                "intouchPoints": 500,
                "group": null,
                "startTime": "2024-07-11 12:57:00",
                "endTime": "2025-07-11 14:43:00",
                "expired": false,
                "started": false,
                "programId": null,
                "categoryList": [
                    {
                        "id": 4,
                        "name": "clothing",
                        "enabled": true
                    }
                ],
                "customFields": {
                    "testdate": "2020-01-01 01:01:01",
                    "CF1": "Custom field 1"
                },
                "loyaltyProgramCriteria": null,
                "groups": [],
                "rewardRank": 1,
                "images": [],
                "videos": []
            },
            "revenueDetails": null,
            "paymentDetails": {
                "paymentMode": "POINTS",
                "id": 284,
                "points": 100.0000
            },
            "redemptionDetails": {
                "redemptionType": "INTOUCH_REWARD",
                "redemptionValue": null
            },
            "transactionCustomFields": null,
            "fulfillmentDetails": null,
            "code": "8803695087",
            "vendor": null,
            "seriesId": "350219"
        }
    ],
    "intouchUserId": "555567088",
    "pagingDto": {
        "last": true,
        "totalElements": 9,
        "totalPages": 1,
        "numberOfElements": 9,
        "first": true,
        "size": 100,
        "number": 0
    }
}
```
```json With groupName filter
{
    "status": {
        "success": true,
        "code": 200,
        "message": "User Reward fetched successfully"
    },
    "rewards": [
        {
            "typeOfReward": "INTOUCH_REWARD",
            "pointsRedeemed": 0,
            "rewardId": 24424,
            "transactionId": 36035,
            "issueRewardRefId": "1718617056",
            "rewardIssueDate": 1730182848000,
            "userRewardExpiry": "2026-10-29 00:00:00",
            "userRewardDetails": {
                "id": 24424,
                "name": " English",
                "description": "Description",
                "imageId": "EXDR12987U",
                "imageUrl": "https://s3.us-west-2.amazonaws.com/devenv-crm-solutionsvannnld9gg/marvel_automation/EXDR12987U?X-Amz-Security-Token=FwoGZXIvYXdzEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDCfTk4IOe6Oc7ntZpiLcAS5Hc453MbfVE6q3r0FeDqtnIEwsgYZtVJsSxEDIVESwr2Viv4DZahbAR%2BjhUQlz25octburSmRdhSm8LavBy3TO4WjOnHWj%2ByBH4hWNwyLnc8smPr6wIH2uuocThMFMN%2BlLQerNoNwenBtMR9%2FCVbCwBEGP3FdPvuP6JepqKc41SyB%2FwFJpGXB8NmlylLnKwcAScU09KzflgnILfpqXiJ2aiIXQbYHJFMdDRxau4mDO1Lte86CzgmujWs6lTfXg%2FPwmMM5q3j4HTZrbYSKnAYzBAFGlkd1TdPA93xko4pmgugYyLYC3pJNNVYPQoM0Zz0yVr%2B8a4AW3QR9jO1eFbuhFEC627wDclHzfTQXbS6%2Fvdw%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241128T063317Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIAXCQYYRKNKGQUE5NT%2F20241128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Signature=ad911de406e8bb078ad4b446f6ba6458952fd06529cad06940177bb23d5c420a",
                "thumbnailId": "EXDR12987T",
                "thumbnailUrl": "https://s3.us-west-2.amazonaws.com/devenv-crm-solutionsvannnld9gg/marvel_automation/EXDR12987T?X-Amz-Security-Token=FwoGZXIvYXdzEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDCfTk4IOe6Oc7ntZpiLcAS5Hc453MbfVE6q3r0FeDqtnIEwsgYZtVJsSxEDIVESwr2Viv4DZahbAR%2BjhUQlz25octburSmRdhSm8LavBy3TO4WjOnHWj%2ByBH4hWNwyLnc8smPr6wIH2uuocThMFMN%2BlLQerNoNwenBtMR9%2FCVbCwBEGP3FdPvuP6JepqKc41SyB%2FwFJpGXB8NmlylLnKwcAScU09KzflgnILfpqXiJ2aiIXQbYHJFMdDRxau4mDO1Lte86CzgmujWs6lTfXg%2FPwmMM5q3j4HTZrbYSKnAYzBAFGlkd1TdPA93xko4pmgugYyLYC3pJNNVYPQoM0Zz0yVr%2B8a4AW3QR9jO1eFbuhFEC627wDclHzfTQXbS6%2Fvdw%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241128T063317Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIAXCQYYRKNKGQUE5NT%2F20241128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Signature=8704b28e68fcd71d7bbe651b57c2a4dd52308f6d5e016522d945bdd0b7c2d6bc",
                "termAndConditionsId": "EXDR12987R",
                "termAndConditionsUrl": "https://s3.us-west-2.amazonaws.com/devenv-crm-solutionsvannnld9gg/marvel_automation/EXDR12987R?X-Amz-Security-Token=FwoGZXIvYXdzEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDCfTk4IOe6Oc7ntZpiLcAS5Hc453MbfVE6q3r0FeDqtnIEwsgYZtVJsSxEDIVESwr2Viv4DZahbAR%2BjhUQlz25octburSmRdhSm8LavBy3TO4WjOnHWj%2ByBH4hWNwyLnc8smPr6wIH2uuocThMFMN%2BlLQerNoNwenBtMR9%2FCVbCwBEGP3FdPvuP6JepqKc41SyB%2FwFJpGXB8NmlylLnKwcAScU09KzflgnILfpqXiJ2aiIXQbYHJFMdDRxau4mDO1Lte86CzgmujWs6lTfXg%2FPwmMM5q3j4HTZrbYSKnAYzBAFGlkd1TdPA93xko4pmgugYyLYC3pJNNVYPQoM0Zz0yVr%2B8a4AW3QR9jO1eFbuhFEC627wDclHzfTQXbS6%2Fvdw%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241128T063317Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIAXCQYYRKNKGQUE5NT%2F20241128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Signature=24267e5324fb22b0aadf500cae91b1c27a1e133df433a6a6ac3d0b431c2f26de",
                "tier": "SILVER",
                "label": null,
                "priority": 1,
                "intouchPoints": 0,
                "group": null,
                "startTime": "2024-10-29 06:20:40",
                "endTime": "2024-10-30 05:52:11",
                "expired": true,
                "started": false,
                "programId": null,
                "categoryList": [
                    {
                        "id": 16,
                        "name": "c1",
                        "enabled": true
                    }
                ],
                "loyaltyProgramCriteria": null,
                "groups": [
                    {
                        "groupName": "group12",
                        "groupRank": null
                    }
                ],
                "rewardRank": null,
                "images": [],
                "videos": []
            },
            "revenueDetails": null,
            "paymentDetails": null,
            "redemptionDetails": {
                "redemptionType": "INTOUCH_REWARD",
                "redemptionValue": null
            },
            "transactionCustomFields": null,
            "fulfillmentDetails": null,
            "code": "NQUCE6EG9MRG0MQWO1S01Z61JL6IXIUJRPBA6",
            "vendor": null,
            "seriesId": "1148417"
        },
        {
            "typeOfReward": "INTOUCH_REWARD",
            "pointsRedeemed": 0,
            "rewardId": 24424,
            "transactionId": 36034,
            "issueRewardRefId": "1718617056",
            "rewardIssueDate": 1730182845000,
            "userRewardExpiry": "2026-10-29 00:00:00",
            "userRewardDetails": {
                "id": 24424,
                "name": " English",
                "description": "Description",
                "imageId": "EXDR12987U",
                "imageUrl": "https://s3.us-west-2.amazonaws.com/devenv-crm-solutionsvannnld9gg/marvel_automation/EXDR12987U?X-Amz-Security-Token=FwoGZXIvYXdzEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDCfTk4IOe6Oc7ntZpiLcAS5Hc453MbfVE6q3r0FeDqtnIEwsgYZtVJsSxEDIVESwr2Viv4DZahbAR%2BjhUQlz25octburSmRdhSm8LavBy3TO4WjOnHWj%2ByBH4hWNwyLnc8smPr6wIH2uuocThMFMN%2BlLQerNoNwenBtMR9%2FCVbCwBEGP3FdPvuP6JepqKc41SyB%2FwFJpGXB8NmlylLnKwcAScU09KzflgnILfpqXiJ2aiIXQbYHJFMdDRxau4mDO1Lte86CzgmujWs6lTfXg%2FPwmMM5q3j4HTZrbYSKnAYzBAFGlkd1TdPA93xko4pmgugYyLYC3pJNNVYPQoM0Zz0yVr%2B8a4AW3QR9jO1eFbuhFEC627wDclHzfTQXbS6%2Fvdw%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241128T063317Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIAXCQYYRKNKGQUE5NT%2F20241128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Signature=ad911de406e8bb078ad4b446f6ba6458952fd06529cad06940177bb23d5c420a",
                "thumbnailId": "EXDR12987T",
                "thumbnailUrl": "https://s3.us-west-2.amazonaws.com/devenv-crm-solutionsvannnld9gg/marvel_automation/EXDR12987T?X-Amz-Security-Token=FwoGZXIvYXdzEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDCfTk4IOe6Oc7ntZpiLcAS5Hc453MbfVE6q3r0FeDqtnIEwsgYZtVJsSxEDIVESwr2Viv4DZahbAR%2BjhUQlz25octburSmRdhSm8LavBy3TO4WjOnHWj%2ByBH4hWNwyLnc8smPr6wIH2uuocThMFMN%2BlLQerNoNwenBtMR9%2FCVbCwBEGP3FdPvuP6JepqKc41SyB%2FwFJpGXB8NmlylLnKwcAScU09KzflgnILfpqXiJ2aiIXQbYHJFMdDRxau4mDO1Lte86CzgmujWs6lTfXg%2FPwmMM5q3j4HTZrbYSKnAYzBAFGlkd1TdPA93xko4pmgugYyLYC3pJNNVYPQoM0Zz0yVr%2B8a4AW3QR9jO1eFbuhFEC627wDclHzfTQXbS6%2Fvdw%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241128T063317Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIAXCQYYRKNKGQUE5NT%2F20241128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Signature=8704b28e68fcd71d7bbe651b57c2a4dd52308f6d5e016522d945bdd0b7c2d6bc",
                "termAndConditionsId": "EXDR12987R",
                "termAndConditionsUrl": "https://s3.us-west-2.amazonaws.com/devenv-crm-solutionsvannnld9gg/marvel_automation/EXDR12987R?X-Amz-Security-Token=FwoGZXIvYXdzEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDCfTk4IOe6Oc7ntZpiLcAS5Hc453MbfVE6q3r0FeDqtnIEwsgYZtVJsSxEDIVESwr2Viv4DZahbAR%2BjhUQlz25octburSmRdhSm8LavBy3TO4WjOnHWj%2ByBH4hWNwyLnc8smPr6wIH2uuocThMFMN%2BlLQerNoNwenBtMR9%2FCVbCwBEGP3FdPvuP6JepqKc41SyB%2FwFJpGXB8NmlylLnKwcAScU09KzflgnILfpqXiJ2aiIXQbYHJFMdDRxau4mDO1Lte86CzgmujWs6lTfXg%2FPwmMM5q3j4HTZrbYSKnAYzBAFGlkd1TdPA93xko4pmgugYyLYC3pJNNVYPQoM0Zz0yVr%2B8a4AW3QR9jO1eFbuhFEC627wDclHzfTQXbS6%2Fvdw%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241128T063317Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIAXCQYYRKNKGQUE5NT%2F20241128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Signature=24267e5324fb22b0aadf500cae91b1c27a1e133df433a6a6ac3d0b431c2f26de",
                "tier": "SILVER",
                "label": null,
                "priority": 1,
                "intouchPoints": 0,
                "group": null,
                "startTime": "2024-10-29 06:20:40",
                "endTime": "2024-10-30 05:52:11",
                "expired": true,
                "started": false,
                "programId": null,
                "categoryList": [
                    {
                        "id": 16,
                        "name": "c1",
                        "enabled": true
                    }
                ],
                "loyaltyProgramCriteria": null,
                "groups": [
                    {
                        "groupName": "group12",
                        "groupRank": null
                    }
                ],
                "rewardRank": null,
                "images": [],
                "videos": []
            },
            "revenueDetails": null,
            "paymentDetails": null,
            "redemptionDetails": {
                "redemptionType": "INTOUCH_REWARD",
                "redemptionValue": null
            },
            "transactionCustomFields": null,
            "fulfillmentDetails": null,
            "code": "FMREMAD7ASFGKIIIFR249T8FWFO4QDP8JGBTF",
            "vendor": null,
            "seriesId": "1148417"
        },
        {
            "typeOfReward": "INTOUCH_REWARD",
            "pointsRedeemed": 0,
            "rewardId": 24402,
            "transactionId": 36012,
            "issueRewardRefId": "1718617056",
            "rewardIssueDate": 1730182537000,
            "userRewardExpiry": "2026-10-29 00:00:00",
            "userRewardDetails": {
                "id": 24402,
                "name": " English",
                "description": "Description",
                "imageId": "EXDR12987U",
                "imageUrl": "https://s3.us-west-2.amazonaws.com/devenv-crm-solutionsvannnld9gg/marvel_automation/EXDR12987U?X-Amz-Security-Token=FwoGZXIvYXdzEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDCfTk4IOe6Oc7ntZpiLcAS5Hc453MbfVE6q3r0FeDqtnIEwsgYZtVJsSxEDIVESwr2Viv4DZahbAR%2BjhUQlz25octburSmRdhSm8LavBy3TO4WjOnHWj%2ByBH4hWNwyLnc8smPr6wIH2uuocThMFMN%2BlLQerNoNwenBtMR9%2FCVbCwBEGP3FdPvuP6JepqKc41SyB%2FwFJpGXB8NmlylLnKwcAScU09KzflgnILfpqXiJ2aiIXQbYHJFMdDRxau4mDO1Lte86CzgmujWs6lTfXg%2FPwmMM5q3j4HTZrbYSKnAYzBAFGlkd1TdPA93xko4pmgugYyLYC3pJNNVYPQoM0Zz0yVr%2B8a4AW3QR9jO1eFbuhFEC627wDclHzfTQXbS6%2Fvdw%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241128T063317Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIAXCQYYRKNKGQUE5NT%2F20241128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Signature=ad911de406e8bb078ad4b446f6ba6458952fd06529cad06940177bb23d5c420a",
                "thumbnailId": "EXDR12987T",
                "thumbnailUrl": "https://s3.us-west-2.amazonaws.com/devenv-crm-solutionsvannnld9gg/marvel_automation/EXDR12987T?X-Amz-Security-Token=FwoGZXIvYXdzEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDCfTk4IOe6Oc7ntZpiLcAS5Hc453MbfVE6q3r0FeDqtnIEwsgYZtVJsSxEDIVESwr2Viv4DZahbAR%2BjhUQlz25octburSmRdhSm8LavBy3TO4WjOnHWj%2ByBH4hWNwyLnc8smPr6wIH2uuocThMFMN%2BlLQerNoNwenBtMR9%2FCVbCwBEGP3FdPvuP6JepqKc41SyB%2FwFJpGXB8NmlylLnKwcAScU09KzflgnILfpqXiJ2aiIXQbYHJFMdDRxau4mDO1Lte86CzgmujWs6lTfXg%2FPwmMM5q3j4HTZrbYSKnAYzBAFGlkd1TdPA93xko4pmgugYyLYC3pJNNVYPQoM0Zz0yVr%2B8a4AW3QR9jO1eFbuhFEC627wDclHzfTQXbS6%2Fvdw%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241128T063317Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIAXCQYYRKNKGQUE5NT%2F20241128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Signature=8704b28e68fcd71d7bbe651b57c2a4dd52308f6d5e016522d945bdd0b7c2d6bc",
                "termAndConditionsId": "EXDR12987R",
                "termAndConditionsUrl": "https://s3.us-west-2.amazonaws.com/devenv-crm-solutionsvannnld9gg/marvel_automation/EXDR12987R?X-Amz-Security-Token=FwoGZXIvYXdzEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDCfTk4IOe6Oc7ntZpiLcAS5Hc453MbfVE6q3r0FeDqtnIEwsgYZtVJsSxEDIVESwr2Viv4DZahbAR%2BjhUQlz25octburSmRdhSm8LavBy3TO4WjOnHWj%2ByBH4hWNwyLnc8smPr6wIH2uuocThMFMN%2BlLQerNoNwenBtMR9%2FCVbCwBEGP3FdPvuP6JepqKc41SyB%2FwFJpGXB8NmlylLnKwcAScU09KzflgnILfpqXiJ2aiIXQbYHJFMdDRxau4mDO1Lte86CzgmujWs6lTfXg%2FPwmMM5q3j4HTZrbYSKnAYzBAFGlkd1TdPA93xko4pmgugYyLYC3pJNNVYPQoM0Zz0yVr%2B8a4AW3QR9jO1eFbuhFEC627wDclHzfTQXbS6%2Fvdw%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241128T063317Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIAXCQYYRKNKGQUE5NT%2F20241128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Signature=24267e5324fb22b0aadf500cae91b1c27a1e133df433a6a6ac3d0b431c2f26de",
                "tier": "SILVER",
                "label": null,
                "priority": 1,
                "intouchPoints": 0,
                "group": null,
                "startTime": "2024-10-29 06:12:40",
                "endTime": "2024-10-30 05:52:11",
                "expired": true,
                "started": false,
                "programId": null,
                "categoryList": [
                    {
                        "id": 5,
                        "name": "ecommerce",
                        "enabled": true
                    }
                ],
                "loyaltyProgramCriteria": null,
                "groups": [
                    {
                        "groupName": "group11",
                        "groupRank": null
                    }
                ],
                "rewardRank": null,
                "images": [],
                "videos": []
            },
            "revenueDetails": null,
            "paymentDetails": null,
            "redemptionDetails": {
                "redemptionType": "INTOUCH_REWARD",
                "redemptionValue": null
            },
            "transactionCustomFields": null,
            "fulfillmentDetails": null,
            "code": "CH7PLSRCPBDYMNLSFNGUH16YBIC2J0WJS8H1B",
            "vendor": null,
            "seriesId": "1148417"
        },
        {
            "typeOfReward": "INTOUCH_REWARD",
            "pointsRedeemed": 0,
            "rewardId": 24403,
            "transactionId": 36011,
            "issueRewardRefId": "1718617056",
            "rewardIssueDate": 1730182533000,
            "userRewardExpiry": "2026-10-29 00:00:00",
            "userRewardDetails": {
                "id": 24403,
                "name": " English",
                "description": "Description",
                "imageId": "EXDR12987U",
                "imageUrl": "https://s3.us-west-2.amazonaws.com/devenv-crm-solutionsvannnld9gg/marvel_automation/EXDR12987U?X-Amz-Security-Token=FwoGZXIvYXdzEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDCfTk4IOe6Oc7ntZpiLcAS5Hc453MbfVE6q3r0FeDqtnIEwsgYZtVJsSxEDIVESwr2Viv4DZahbAR%2BjhUQlz25octburSmRdhSm8LavBy3TO4WjOnHWj%2ByBH4hWNwyLnc8smPr6wIH2uuocThMFMN%2BlLQerNoNwenBtMR9%2FCVbCwBEGP3FdPvuP6JepqKc41SyB%2FwFJpGXB8NmlylLnKwcAScU09KzflgnILfpqXiJ2aiIXQbYHJFMdDRxau4mDO1Lte86CzgmujWs6lTfXg%2FPwmMM5q3j4HTZrbYSKnAYzBAFGlkd1TdPA93xko4pmgugYyLYC3pJNNVYPQoM0Zz0yVr%2B8a4AW3QR9jO1eFbuhFEC627wDclHzfTQXbS6%2Fvdw%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241128T063317Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIAXCQYYRKNKGQUE5NT%2F20241128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Signature=ad911de406e8bb078ad4b446f6ba6458952fd06529cad06940177bb23d5c420a",
                "thumbnailId": "EXDR12987T",
                "thumbnailUrl": "https://s3.us-west-2.amazonaws.com/devenv-crm-solutionsvannnld9gg/marvel_automation/EXDR12987T?X-Amz-Security-Token=FwoGZXIvYXdzEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDCfTk4IOe6Oc7ntZpiLcAS5Hc453MbfVE6q3r0FeDqtnIEwsgYZtVJsSxEDIVESwr2Viv4DZahbAR%2BjhUQlz25octburSmRdhSm8LavBy3TO4WjOnHWj%2ByBH4hWNwyLnc8smPr6wIH2uuocThMFMN%2BlLQerNoNwenBtMR9%2FCVbCwBEGP3FdPvuP6JepqKc41SyB%2FwFJpGXB8NmlylLnKwcAScU09KzflgnILfpqXiJ2aiIXQbYHJFMdDRxau4mDO1Lte86CzgmujWs6lTfXg%2FPwmMM5q3j4HTZrbYSKnAYzBAFGlkd1TdPA93xko4pmgugYyLYC3pJNNVYPQoM0Zz0yVr%2B8a4AW3QR9jO1eFbuhFEC627wDclHzfTQXbS6%2Fvdw%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241128T063317Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIAXCQYYRKNKGQUE5NT%2F20241128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Signature=8704b28e68fcd71d7bbe651b57c2a4dd52308f6d5e016522d945bdd0b7c2d6bc",
                "termAndConditionsId": "EXDR12987R",
                "termAndConditionsUrl": "https://s3.us-west-2.amazonaws.com/devenv-crm-solutionsvannnld9gg/marvel_automation/EXDR12987R?X-Amz-Security-Token=FwoGZXIvYXdzEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDCfTk4IOe6Oc7ntZpiLcAS5Hc453MbfVE6q3r0FeDqtnIEwsgYZtVJsSxEDIVESwr2Viv4DZahbAR%2BjhUQlz25octburSmRdhSm8LavBy3TO4WjOnHWj%2ByBH4hWNwyLnc8smPr6wIH2uuocThMFMN%2BlLQerNoNwenBtMR9%2FCVbCwBEGP3FdPvuP6JepqKc41SyB%2FwFJpGXB8NmlylLnKwcAScU09KzflgnILfpqXiJ2aiIXQbYHJFMdDRxau4mDO1Lte86CzgmujWs6lTfXg%2FPwmMM5q3j4HTZrbYSKnAYzBAFGlkd1TdPA93xko4pmgugYyLYC3pJNNVYPQoM0Zz0yVr%2B8a4AW3QR9jO1eFbuhFEC627wDclHzfTQXbS6%2Fvdw%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241128T063317Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIAXCQYYRKNKGQUE5NT%2F20241128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Signature=24267e5324fb22b0aadf500cae91b1c27a1e133df433a6a6ac3d0b431c2f26de",
                "tier": "SILVER",
                "label": null,
                "priority": 1,
                "intouchPoints": 0,
                "group": null,
                "startTime": "2024-10-29 06:12:40",
                "endTime": "2024-10-30 05:52:11",
                "expired": true,
                "started": false,
                "programId": null,
                "categoryList": [
                    {
                        "id": 5,
                        "name": "ecommerce",
                        "enabled": true
                    }
                ],
                "loyaltyProgramCriteria": null,
                "groups": [
                    {
                        "groupName": "group12",
                        "groupRank": null
                    }
                ],
                "rewardRank": null,
                "images": [],
                "videos": []
            },
            "revenueDetails": null,
            "paymentDetails": null,
            "redemptionDetails": {
                "redemptionType": "INTOUCH_REWARD",
                "redemptionValue": null
            },
            "transactionCustomFields": null,
            "fulfillmentDetails": null,
            "code": "PTAQTF5IWEX5XO2TWL0NY5H2NO1MEEADTYGYB",
            "vendor": null,
            "seriesId": "1148417"
        },
        {
            "typeOfReward": "INTOUCH_REWARD",
            "pointsRedeemed": 0,
            "rewardId": 24401,
            "transactionId": 36004,
            "issueRewardRefId": "1718617056",
            "rewardIssueDate": 1730182389000,
            "userRewardExpiry": "2026-10-29 00:00:00",
            "userRewardDetails": {
                "id": 24401,
                "name": " English",
                "description": "Description",
                "imageId": "EXDR12987U",
                "imageUrl": "https://s3.us-west-2.amazonaws.com/devenv-crm-solutionsvannnld9gg/marvel_automation/EXDR12987U?X-Amz-Security-Token=FwoGZXIvYXdzEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDCfTk4IOe6Oc7ntZpiLcAS5Hc453MbfVE6q3r0FeDqtnIEwsgYZtVJsSxEDIVESwr2Viv4DZahbAR%2BjhUQlz25octburSmRdhSm8LavBy3TO4WjOnHWj%2ByBH4hWNwyLnc8smPr6wIH2uuocThMFMN%2BlLQerNoNwenBtMR9%2FCVbCwBEGP3FdPvuP6JepqKc41SyB%2FwFJpGXB8NmlylLnKwcAScU09KzflgnILfpqXiJ2aiIXQbYHJFMdDRxau4mDO1Lte86CzgmujWs6lTfXg%2FPwmMM5q3j4HTZrbYSKnAYzBAFGlkd1TdPA93xko4pmgugYyLYC3pJNNVYPQoM0Zz0yVr%2B8a4AW3QR9jO1eFbuhFEC627wDclHzfTQXbS6%2Fvdw%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241128T063317Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3599&X-Amz-Credential=ASIAXCQYYRKNKGQUE5NT%2F20241128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Signature=486da6e7bee0df341ceaa56d9434a15b90961882eff303523d63223799d7e9f3",
                "thumbnailId": "EXDR12987T",
                "thumbnailUrl": "https://s3.us-west-2.amazonaws.com/devenv-crm-solutionsvannnld9gg/marvel_automation/EXDR12987T?X-Amz-Security-Token=FwoGZXIvYXdzEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDCfTk4IOe6Oc7ntZpiLcAS5Hc453MbfVE6q3r0FeDqtnIEwsgYZtVJsSxEDIVESwr2Viv4DZahbAR%2BjhUQlz25octburSmRdhSm8LavBy3TO4WjOnHWj%2ByBH4hWNwyLnc8smPr6wIH2uuocThMFMN%2BlLQerNoNwenBtMR9%2FCVbCwBEGP3FdPvuP6JepqKc41SyB%2FwFJpGXB8NmlylLnKwcAScU09KzflgnILfpqXiJ2aiIXQbYHJFMdDRxau4mDO1Lte86CzgmujWs6lTfXg%2FPwmMM5q3j4HTZrbYSKnAYzBAFGlkd1TdPA93xko4pmgugYyLYC3pJNNVYPQoM0Zz0yVr%2B8a4AW3QR9jO1eFbuhFEC627wDclHzfTQXbS6%2Fvdw%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241128T063317Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIAXCQYYRKNKGQUE5NT%2F20241128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Signature=8704b28e68fcd71d7bbe651b57c2a4dd52308f6d5e016522d945bdd0b7c2d6bc",
                "termAndConditionsId": "EXDR12987R",
                "termAndConditionsUrl": "https://s3.us-west-2.amazonaws.com/devenv-crm-solutionsvannnld9gg/marvel_automation/EXDR12987R?X-Amz-Security-Token=FwoGZXIvYXdzEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDCfTk4IOe6Oc7ntZpiLcAS5Hc453MbfVE6q3r0FeDqtnIEwsgYZtVJsSxEDIVESwr2Viv4DZahbAR%2BjhUQlz25octburSmRdhSm8LavBy3TO4WjOnHWj%2ByBH4hWNwyLnc8smPr6wIH2uuocThMFMN%2BlLQerNoNwenBtMR9%2FCVbCwBEGP3FdPvuP6JepqKc41SyB%2FwFJpGXB8NmlylLnKwcAScU09KzflgnILfpqXiJ2aiIXQbYHJFMdDRxau4mDO1Lte86CzgmujWs6lTfXg%2FPwmMM5q3j4HTZrbYSKnAYzBAFGlkd1TdPA93xko4pmgugYyLYC3pJNNVYPQoM0Zz0yVr%2B8a4AW3QR9jO1eFbuhFEC627wDclHzfTQXbS6%2Fvdw%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241128T063317Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIAXCQYYRKNKGQUE5NT%2F20241128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Signature=24267e5324fb22b0aadf500cae91b1c27a1e133df433a6a6ac3d0b431c2f26de",
                "tier": "SILVER",
                "label": null,
                "priority": 1,
                "intouchPoints": 0,
                "group": null,
                "startTime": "2024-10-29 06:12:40",
                "endTime": "2024-10-30 05:52:11",
                "expired": true,
                "started": false,
                "programId": null,
                "categoryList": [
                    {
                        "id": 5,
                        "name": "ecommerce",
                        "enabled": true
                    }
                ],
                "loyaltyProgramCriteria": null,
                "groups": [
                    {
                        "groupName": "group11",
                        "groupRank": null
                    }
                ],
                "rewardRank": null,
                "images": [],
                "videos": []
            },
            "revenueDetails": null,
            "paymentDetails": null,
            "redemptionDetails": {
                "redemptionType": "INTOUCH_REWARD",
                "redemptionValue": null
            },
            "transactionCustomFields": null,
            "fulfillmentDetails": null,
            "code": "UFC598D2QVQSZURH4F2HDFTE6TGBLF65PCXDG",
            "vendor": null,
            "seriesId": "1148417"
        }
    ],
    "intouchUserId": "423789304",
    "pagingDto": {
        "last": true,
        "totalElements": 5,
        "totalPages": 1,
        "numberOfElements": 5,
        "first": true,
        "size": 100,
        "number": 0
    }
}
```
```json With Cards and Labels
{
    "status": {
        "success": true,
        "code": 200,
        "message": "User Reward fetched successfully"
    },
    "rewards": [
        {
            "typeOfReward": "PHYSICAL_REWARD",
            "pointsRedeemed": 0,
            "rewardId": 285262,
            "transactionId": 306796,
            "issueRewardRefId": "transactionNumber",
            "rewardIssueDate": 1734516901000,
            "userRewardExpiry": null,
            "userRewardDetails": {
                "id": 285262,
                "name": " INTOUCH Enabled",
                "description": "Description",
                "imageId": "EXDR12987U",
                "imageUrl": "https://s3.eu-west-1.amazonaws.com/eucrm-solutions/BUKL/EXDR12987U?X-Amz-Security-Token=FwoGZXIvYXdzEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDHBt%2FXXXT1CSO2gRQSLMAY7N18e7jZBKP3UaDjhrr2cKi3dr%2FKoWL5ryDBVypnoOsz%2BZ2fheGS3eAR6%2FKRlNwtglWej4vWNU7BHNyBSjvcBhh1tZBSTXKDJRrd%2BfgfB7sKfJmV0b52byaH2Ovun9437ud%2B61r%2BTRsQneC6RILIWRl0RW%2FObHEumUQUCacJ%2BW7zLEXUDDRzt7pgcxa45gF0zCwQuhDQvyfSnn9335S%2BGvY4FOugpvOQ1HWQB5QeAviZ1TacdR%2Fac3YHZUTqYenbgBJSSbFFczs3VPxiiUu4q7BjItms3kogVeW6ZR%2FTPTB3bHXwDjF8mV4sv4uy5btl5%2F8Az9RI8oCAaaxSbmPPSo&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241218T101548Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIAXKEP2EMBTPZ4NT2X%2F20241218%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Signature=234d5427efa9edf0ae087d6812eb108f40447edbdbefd489e34957620c03cd0c",
                "thumbnailId": "EXDR12987T",
                "thumbnailUrl": "https://s3.eu-west-1.amazonaws.com/eucrm-solutions/BUKL/EXDR12987T?X-Amz-Security-Token=FwoGZXIvYXdzEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDHBt%2FXXXT1CSO2gRQSLMAY7N18e7jZBKP3UaDjhrr2cKi3dr%2FKoWL5ryDBVypnoOsz%2BZ2fheGS3eAR6%2FKRlNwtglWej4vWNU7BHNyBSjvcBhh1tZBSTXKDJRrd%2BfgfB7sKfJmV0b52byaH2Ovun9437ud%2B61r%2BTRsQneC6RILIWRl0RW%2FObHEumUQUCacJ%2BW7zLEXUDDRzt7pgcxa45gF0zCwQuhDQvyfSnn9335S%2BGvY4FOugpvOQ1HWQB5QeAviZ1TacdR%2Fac3YHZUTqYenbgBJSSbFFczs3VPxiiUu4q7BjItms3kogVeW6ZR%2FTPTB3bHXwDjF8mV4sv4uy5btl5%2F8Az9RI8oCAaaxSbmPPSo&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241218T101548Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIAXKEP2EMBTPZ4NT2X%2F20241218%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Signature=7647f0f45eb3bb4ae725646b28cf7423ab89eccfd411bf7c6a42e84b2d0a3b70",
                "termAndConditionsId": "EXDR12987R",
                "termAndConditionsUrl": "https://s3.eu-west-1.amazonaws.com/eucrm-solutions/BUKL/EXDR12987R?X-Amz-Security-Token=FwoGZXIvYXdzEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDHBt%2FXXXT1CSO2gRQSLMAY7N18e7jZBKP3UaDjhrr2cKi3dr%2FKoWL5ryDBVypnoOsz%2BZ2fheGS3eAR6%2FKRlNwtglWej4vWNU7BHNyBSjvcBhh1tZBSTXKDJRrd%2BfgfB7sKfJmV0b52byaH2Ovun9437ud%2B61r%2BTRsQneC6RILIWRl0RW%2FObHEumUQUCacJ%2BW7zLEXUDDRzt7pgcxa45gF0zCwQuhDQvyfSnn9335S%2BGvY4FOugpvOQ1HWQB5QeAviZ1TacdR%2Fac3YHZUTqYenbgBJSSbFFczs3VPxiiUu4q7BjItms3kogVeW6ZR%2FTPTB3bHXwDjF8mV4sv4uy5btl5%2F8Az9RI8oCAaaxSbmPPSo&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241218T101548Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIAXKEP2EMBTPZ4NT2X%2F20241218%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Signature=6c605e54bcc86f0d00e3be4450f0da659f03cda46ec63b7964db842c6c310d2c",
                "tier": "PLATINUM",
                "label": null,
                "priority": 1,
                "intouchPoints": 0,
                "group": null,
                "startTime": "2024-12-18 10:15:00",
                "endTime": "2026-11-28 14:10:00",
                "expired": false,
                "started": false,
                "programId": null,
                "categoryList": [],
                "loyaltyProgramCriteria": null,
                "groups": [],
                "rewardRank": null,
                "images": [],
                "videos": [],
                "labels": [
                    17246
                ]
            },
            "revenueDetails": null,
            "paymentDetails": null,
            "redemptionDetails": {
                "redemptionType": "PHYSICAL_REWARD",
                "redemptionValue": null
            },
            "transactionCustomFields": null,
            "fulfillmentDetails": null,
            "code": null,
            "vendor": "{}",
            "seriesId": null
        },
        {
            "typeOfReward": "PHYSICAL_REWARD",
            "pointsRedeemed": 0,
            "rewardId": 285261,
            "transactionId": 306795,
            "issueRewardRefId": "transactionNumber",
            "rewardIssueDate": 1734516620000,
            "userRewardExpiry": null,
            "userRewardDetails": {
                "id": 285261,
                "name": " INTOUCH Enabled",
                "description": "Description",
                "imageId": "EXDR12987U",
                "imageUrl": "https://s3.eu-west-1.amazonaws.com/eucrm-solutions/BUKL/EXDR12987U?X-Amz-Security-Token=FwoGZXIvYXdzEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDHBt%2FXXXT1CSO2gRQSLMAY7N18e7jZBKP3UaDjhrr2cKi3dr%2FKoWL5ryDBVypnoOsz%2BZ2fheGS3eAR6%2FKRlNwtglWej4vWNU7BHNyBSjvcBhh1tZBSTXKDJRrd%2BfgfB7sKfJmV0b52byaH2Ovun9437ud%2B61r%2BTRsQneC6RILIWRl0RW%2FObHEumUQUCacJ%2BW7zLEXUDDRzt7pgcxa45gF0zCwQuhDQvyfSnn9335S%2BGvY4FOugpvOQ1HWQB5QeAviZ1TacdR%2Fac3YHZUTqYenbgBJSSbFFczs3VPxiiUu4q7BjItms3kogVeW6ZR%2FTPTB3bHXwDjF8mV4sv4uy5btl5%2F8Az9RI8oCAaaxSbmPPSo&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241218T101548Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIAXKEP2EMBTPZ4NT2X%2F20241218%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Signature=234d5427efa9edf0ae087d6812eb108f40447edbdbefd489e34957620c03cd0c",
                "thumbnailId": "EXDR12987T",
                "thumbnailUrl": "https://s3.eu-west-1.amazonaws.com/eucrm-solutions/BUKL/EXDR12987T?X-Amz-Security-Token=FwoGZXIvYXdzEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDHBt%2FXXXT1CSO2gRQSLMAY7N18e7jZBKP3UaDjhrr2cKi3dr%2FKoWL5ryDBVypnoOsz%2BZ2fheGS3eAR6%2FKRlNwtglWej4vWNU7BHNyBSjvcBhh1tZBSTXKDJRrd%2BfgfB7sKfJmV0b52byaH2Ovun9437ud%2B61r%2BTRsQneC6RILIWRl0RW%2FObHEumUQUCacJ%2BW7zLEXUDDRzt7pgcxa45gF0zCwQuhDQvyfSnn9335S%2BGvY4FOugpvOQ1HWQB5QeAviZ1TacdR%2Fac3YHZUTqYenbgBJSSbFFczs3VPxiiUu4q7BjItms3kogVeW6ZR%2FTPTB3bHXwDjF8mV4sv4uy5btl5%2F8Az9RI8oCAaaxSbmPPSo&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241218T101548Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIAXKEP2EMBTPZ4NT2X%2F20241218%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Signature=7647f0f45eb3bb4ae725646b28cf7423ab89eccfd411bf7c6a42e84b2d0a3b70",
                "termAndConditionsId": "EXDR12987R",
                "termAndConditionsUrl": "https://s3.eu-west-1.amazonaws.com/eucrm-solutions/BUKL/EXDR12987R?X-Amz-Security-Token=FwoGZXIvYXdzEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDHBt%2FXXXT1CSO2gRQSLMAY7N18e7jZBKP3UaDjhrr2cKi3dr%2FKoWL5ryDBVypnoOsz%2BZ2fheGS3eAR6%2FKRlNwtglWej4vWNU7BHNyBSjvcBhh1tZBSTXKDJRrd%2BfgfB7sKfJmV0b52byaH2Ovun9437ud%2B61r%2BTRsQneC6RILIWRl0RW%2FObHEumUQUCacJ%2BW7zLEXUDDRzt7pgcxa45gF0zCwQuhDQvyfSnn9335S%2BGvY4FOugpvOQ1HWQB5QeAviZ1TacdR%2Fac3YHZUTqYenbgBJSSbFFczs3VPxiiUu4q7BjItms3kogVeW6ZR%2FTPTB3bHXwDjF8mV4sv4uy5btl5%2F8Az9RI8oCAaaxSbmPPSo&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241218T101548Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIAXKEP2EMBTPZ4NT2X%2F20241218%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Signature=6c605e54bcc86f0d00e3be4450f0da659f03cda46ec63b7964db842c6c310d2c",
                "tier": "PLATINUM",
                "label": null,
                "priority": 1,
                "intouchPoints": 0,
                "group": null,
                "startTime": "2024-12-18 10:10:00",
                "endTime": "2026-11-28 14:10:00",
                "expired": false,
                "started": false,
                "programId": null,
                "categoryList": [],
                "loyaltyProgramCriteria": null,
                "groups": [],
                "rewardRank": null,
                "images": [],
                "videos": [],
                "cardSeries": [
                    {
                        "id": 46,
                        "code": "BUKLPRM"
                    }
                ]
            },
            "revenueDetails": null,
            "paymentDetails": null,
            "redemptionDetails": {
                "redemptionType": "PHYSICAL_REWARD",
                "redemptionValue": null
            },
            "transactionCustomFields": null,
            "fulfillmentDetails": null,
            "code": null,
            "vendor": "{}",
            "seriesId": null
        }
    ],
    "intouchUserId": "555567088",
    "pagingDto": {
        "last": true,
        "totalElements": 11,
        "totalPages": 1,
        "numberOfElements": 11,
        "first": true,
        "size": 100,
        "number": 0
    }
}
```
```Text With rewardId filter
{
    "status": {
        "success": true,
        "code": 200,
        "message": "User Reward fetched successfully"
    },
    "rewards": [
        {
            "typeOfReward": "CHARITY",
            "pointsRedeemed": 0,
            "rewardId": 36140,
            "transactionId": 92470,
            "issueRewardRefId": "171895019344",
            "rewardIssueDate": 1741960860000,
            "rewardIssueDateTime": "2025-03-14T14:01:00Z",
            "userRewardExpiry": null,
            "userRewardExpiryDateTime": null,
            "userRewardDetails": {
                "id": 36140,
                "name": " INTOUCH Enabled",
                "description": "Description",
                "imageId": "EXDR12987U",
                "imageUrl": "https://s3.us-west-2.amazonaws.com/devenv-crm-solutionsvannnld9gg/marvel_automation/EXDR12987U?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIGhRwksbrjEK%2FCehfsUCzQw0w7e%2FvfOQ35cqLTrI2UijAiApuL8xTHK%2Fr2UDxg58iebTGj3WqCjieLQet9QNZ1DHyirOAgit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAUaDDQ4NjQ1Njk4NjI2NiIMDzVunmYHPH6K00T4KqICxwp4LUcOPMmU8WNQD7laUWdH477GqodHJd8tjFJ6vIsoQuXoxiyWQCdIt%2BZnHlAdmt0bC7wM9mOkz71qSzeUzvaoDZSpWH5mNq3L2tvGMwC5FBQRmLx2xvpQMeaI5xjylbS8psuEWHylAqkoVyxwnhnR%2F6QpOxU4GpRuNvE6payPbjTyErShbWk2%2Btsz3iHBHRDvGeVzXKdiyLwKCo6zmTw%2FR7RMi2Hc%2B9bRcN%2BOM%2F0Mx8oO5rN4qkhZ0M8BZ%2F57doqx6MEg4e5MyOUQ6doEoPuT7kv1yCbMobtP%2FbEOEO%2ByqVMMFcWqYN0%2B10gnZPTVGAPcHcvEno17m9yDmj7qxMN5RzRz9%2F3Hc3R4Yus%2F5qqlvR1qxfacTUm1UNybXN%2B5LS8wmtj%2BwAY6ngEk%2FBryoQIiSWtSNNp43iE%2FDW%2FC0yun3etsCLBfgUZFj6kS%2FYrTJ7ZZinUL9M0oVXDqp1fQjO3qs%2B0Q9nthXfVZRyo21kEDHHmPaH7FieXCw9xUW0s9oqTr4cdaAMZbYO8z6PQQBr0T6kiriAyUogPT9K7P9rbxFCMrtmW%2BktimM3VA7Dhb%2BP%2FQZBo9mWjdiH4A7K7FZG0y5o1trUv7Dg%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20250510T194218Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3599&X-Amz-Credential=ASIAXCQYYRKNB2RL2HQM%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Signature=25f112972bc584e4d5e0d0581ac30563944d60b7d0981e883928a7a0cdd4e75c",
                "thumbnailId": "EXDR12987T",
                "thumbnailUrl": "https://s3.us-west-2.amazonaws.com/devenv-crm-solutionsvannnld9gg/marvel_automation/EXDR12987T?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIGhRwksbrjEK%2FCehfsUCzQw0w7e%2FvfOQ35cqLTrI2UijAiApuL8xTHK%2Fr2UDxg58iebTGj3WqCjieLQet9QNZ1DHyirOAgit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAUaDDQ4NjQ1Njk4NjI2NiIMDzVunmYHPH6K00T4KqICxwp4LUcOPMmU8WNQD7laUWdH477GqodHJd8tjFJ6vIsoQuXoxiyWQCdIt%2BZnHlAdmt0bC7wM9mOkz71qSzeUzvaoDZSpWH5mNq3L2tvGMwC5FBQRmLx2xvpQMeaI5xjylbS8psuEWHylAqkoVyxwnhnR%2F6QpOxU4GpRuNvE6payPbjTyErShbWk2%2Btsz3iHBHRDvGeVzXKdiyLwKCo6zmTw%2FR7RMi2Hc%2B9bRcN%2BOM%2F0Mx8oO5rN4qkhZ0M8BZ%2F57doqx6MEg4e5MyOUQ6doEoPuT7kv1yCbMobtP%2FbEOEO%2ByqVMMFcWqYN0%2B10gnZPTVGAPcHcvEno17m9yDmj7qxMN5RzRz9%2F3Hc3R4Yus%2F5qqlvR1qxfacTUm1UNybXN%2B5LS8wmtj%2BwAY6ngEk%2FBryoQIiSWtSNNp43iE%2FDW%2FC0yun3etsCLBfgUZFj6kS%2FYrTJ7ZZinUL9M0oVXDqp1fQjO3qs%2B0Q9nthXfVZRyo21kEDHHmPaH7FieXCw9xUW0s9oqTr4cdaAMZbYO8z6PQQBr0T6kiriAyUogPT9K7P9rbxFCMrtmW%2BktimM3VA7Dhb%2BP%2FQZBo9mWjdiH4A7K7FZG0y5o1trUv7Dg%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20250510T194218Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIAXCQYYRKNB2RL2HQM%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Signature=270b7849a5e28939c13ce0ea59ae56e4b49dc110ee759d5894ad1ea07f2300a4",
                "termAndConditionsId": "EXDR12987R",
                "termAndConditionsUrl": "https://s3.us-west-2.amazonaws.com/devenv-crm-solutionsvannnld9gg/marvel_automation/EXDR12987R?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIGhRwksbrjEK%2FCehfsUCzQw0w7e%2FvfOQ35cqLTrI2UijAiApuL8xTHK%2Fr2UDxg58iebTGj3WqCjieLQet9QNZ1DHyirOAgit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAUaDDQ4NjQ1Njk4NjI2NiIMDzVunmYHPH6K00T4KqICxwp4LUcOPMmU8WNQD7laUWdH477GqodHJd8tjFJ6vIsoQuXoxiyWQCdIt%2BZnHlAdmt0bC7wM9mOkz71qSzeUzvaoDZSpWH5mNq3L2tvGMwC5FBQRmLx2xvpQMeaI5xjylbS8psuEWHylAqkoVyxwnhnR%2F6QpOxU4GpRuNvE6payPbjTyErShbWk2%2Btsz3iHBHRDvGeVzXKdiyLwKCo6zmTw%2FR7RMi2Hc%2B9bRcN%2BOM%2F0Mx8oO5rN4qkhZ0M8BZ%2F57doqx6MEg4e5MyOUQ6doEoPuT7kv1yCbMobtP%2FbEOEO%2ByqVMMFcWqYN0%2B10gnZPTVGAPcHcvEno17m9yDmj7qxMN5RzRz9%2F3Hc3R4Yus%2F5qqlvR1qxfacTUm1UNybXN%2B5LS8wmtj%2BwAY6ngEk%2FBryoQIiSWtSNNp43iE%2FDW%2FC0yun3etsCLBfgUZFj6kS%2FYrTJ7ZZinUL9M0oVXDqp1fQjO3qs%2B0Q9nthXfVZRyo21kEDHHmPaH7FieXCw9xUW0s9oqTr4cdaAMZbYO8z6PQQBr0T6kiriAyUogPT9K7P9rbxFCMrtmW%2BktimM3VA7Dhb%2BP%2FQZBo9mWjdiH4A7K7FZG0y5o1trUv7Dg%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20250510T194218Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3599&X-Amz-Credential=ASIAXCQYYRKNB2RL2HQM%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Signature=f4bcb12af4f20f83aeb1d3c5e456892902ee55c5f7634227606387781e0a0be8",
                "tier": "SILVER",
                "label": null,
                "priority": 1,
                "intouchPoints": 1,
                "group": null,
                "startTime": "2025-03-05 06:00:00",
                "startDateTime": "2025-03-05T06:00:00Z",
                "endTime": "2025-04-01 00:00:00",
                "endDateTime": "2025-04-01T00:00:00Z",
                "expired": true,
                "started": false,
                "programId": null,
                "categoryList": [
                    {
                        "id": 5,
                        "name": "ecommerce",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    }
                ],
                "customFields": {
                    "CF1_da44a7352025-05-08 14:09:54.505790": "defaultValue_1",
                    "CF2_178fabc82025-05-08 14:09:54.505803": "defaultValue_2",
                    "CF2_f451cfec2025-05-08 14:12:29.176282": "defaultValue_2",
                    "CF1_FALLBACK_1": "CF1_DV",
                    "CF1_ebd12a032025-05-08 14:12:29.176277": "defaultValue_1",
                    "CF2_FALLBACK_1": "CF2_DV"
                },
                "loyaltyProgramCriteria": null,
                "groups": [
                    {
                        "groupName": "groupName014",
                        "groupRank": 8
                    }
                ],
                "rewardRank": 10,
                "images": [],
                "videos": []
            },
            "revenueDetails": null,
            "paymentDetails": {
                "paymentMode": "CASH",
                "id": 1760,
                "cash": 25.0000
            },
            "redemptionDetails": {
                "redemptionType": "CHARITY",
                "redemptionValue": null
            },
            "transactionCustomFields": null,
            "fulfillmentDetails": null,
            "issueDateTime": "2025-03-14T14:00:59Z",
            "eventDateTime": "2025-03-14T14:00:59Z",
            "code": null,
            "vendor": "{\"pointsRedeemed\": \"0\"}",
            "seriesId": null
        },
        {
            "typeOfReward": "CHARITY",
            "pointsRedeemed": 0,
            "rewardId": 36140,
            "transactionId": 92469,
            "issueRewardRefId": "171895019344",
            "rewardIssueDate": 1741960847000,
            "rewardIssueDateTime": "2025-03-14T14:00:47Z",
            "userRewardExpiry": null,
            "userRewardExpiryDateTime": null,
            "userRewardDetails": {
                "id": 36140,
                "name": " INTOUCH Enabled",
                "description": "Description",
                "imageId": "EXDR12987U",
                "imageUrl": "https://s3.us-west-2.amazonaws.com/devenv-crm-solutionsvannnld9gg/marvel_automation/EXDR12987U?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIGhRwksbrjEK%2FCehfsUCzQw0w7e%2FvfOQ35cqLTrI2UijAiApuL8xTHK%2Fr2UDxg58iebTGj3WqCjieLQet9QNZ1DHyirOAgit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAUaDDQ4NjQ1Njk4NjI2NiIMDzVunmYHPH6K00T4KqICxwp4LUcOPMmU8WNQD7laUWdH477GqodHJd8tjFJ6vIsoQuXoxiyWQCdIt%2BZnHlAdmt0bC7wM9mOkz71qSzeUzvaoDZSpWH5mNq3L2tvGMwC5FBQRmLx2xvpQMeaI5xjylbS8psuEWHylAqkoVyxwnhnR%2F6QpOxU4GpRuNvE6payPbjTyErShbWk2%2Btsz3iHBHRDvGeVzXKdiyLwKCo6zmTw%2FR7RMi2Hc%2B9bRcN%2BOM%2F0Mx8oO5rN4qkhZ0M8BZ%2F57doqx6MEg4e5MyOUQ6doEoPuT7kv1yCbMobtP%2FbEOEO%2ByqVMMFcWqYN0%2B10gnZPTVGAPcHcvEno17m9yDmj7qxMN5RzRz9%2F3Hc3R4Yus%2F5qqlvR1qxfacTUm1UNybXN%2B5LS8wmtj%2BwAY6ngEk%2FBryoQIiSWtSNNp43iE%2FDW%2FC0yun3etsCLBfgUZFj6kS%2FYrTJ7ZZinUL9M0oVXDqp1fQjO3qs%2B0Q9nthXfVZRyo21kEDHHmPaH7FieXCw9xUW0s9oqTr4cdaAMZbYO8z6PQQBr0T6kiriAyUogPT9K7P9rbxFCMrtmW%2BktimM3VA7Dhb%2BP%2FQZBo9mWjdiH4A7K7FZG0y5o1trUv7Dg%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20250510T194218Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3599&X-Amz-Credential=ASIAXCQYYRKNB2RL2HQM%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Signature=25f112972bc584e4d5e0d0581ac30563944d60b7d0981e883928a7a0cdd4e75c",
                "thumbnailId": "EXDR12987T",
                "thumbnailUrl": "https://s3.us-west-2.amazonaws.com/devenv-crm-solutionsvannnld9gg/marvel_automation/EXDR12987T?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIGhRwksbrjEK%2FCehfsUCzQw0w7e%2FvfOQ35cqLTrI2UijAiApuL8xTHK%2Fr2UDxg58iebTGj3WqCjieLQet9QNZ1DHyirOAgit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAUaDDQ4NjQ1Njk4NjI2NiIMDzVunmYHPH6K00T4KqICxwp4LUcOPMmU8WNQD7laUWdH477GqodHJd8tjFJ6vIsoQuXoxiyWQCdIt%2BZnHlAdmt0bC7wM9mOkz71qSzeUzvaoDZSpWH5mNq3L2tvGMwC5FBQRmLx2xvpQMeaI5xjylbS8psuEWHylAqkoVyxwnhnR%2F6QpOxU4GpRuNvE6payPbjTyErShbWk2%2Btsz3iHBHRDvGeVzXKdiyLwKCo6zmTw%2FR7RMi2Hc%2B9bRcN%2BOM%2F0Mx8oO5rN4qkhZ0M8BZ%2F57doqx6MEg4e5MyOUQ6doEoPuT7kv1yCbMobtP%2FbEOEO%2ByqVMMFcWqYN0%2B10gnZPTVGAPcHcvEno17m9yDmj7qxMN5RzRz9%2F3Hc3R4Yus%2F5qqlvR1qxfacTUm1UNybXN%2B5LS8wmtj%2BwAY6ngEk%2FBryoQIiSWtSNNp43iE%2FDW%2FC0yun3etsCLBfgUZFj6kS%2FYrTJ7ZZinUL9M0oVXDqp1fQjO3qs%2B0Q9nthXfVZRyo21kEDHHmPaH7FieXCw9xUW0s9oqTr4cdaAMZbYO8z6PQQBr0T6kiriAyUogPT9K7P9rbxFCMrtmW%2BktimM3VA7Dhb%2BP%2FQZBo9mWjdiH4A7K7FZG0y5o1trUv7Dg%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20250510T194218Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIAXCQYYRKNB2RL2HQM%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Signature=270b7849a5e28939c13ce0ea59ae56e4b49dc110ee759d5894ad1ea07f2300a4",
                "termAndConditionsId": "EXDR12987R",
                "termAndConditionsUrl": "https://s3.us-west-2.amazonaws.com/devenv-crm-solutionsvannnld9gg/marvel_automation/EXDR12987R?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIGhRwksbrjEK%2FCehfsUCzQw0w7e%2FvfOQ35cqLTrI2UijAiApuL8xTHK%2Fr2UDxg58iebTGj3WqCjieLQet9QNZ1DHyirOAgit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAUaDDQ4NjQ1Njk4NjI2NiIMDzVunmYHPH6K00T4KqICxwp4LUcOPMmU8WNQD7laUWdH477GqodHJd8tjFJ6vIsoQuXoxiyWQCdIt%2BZnHlAdmt0bC7wM9mOkz71qSzeUzvaoDZSpWH5mNq3L2tvGMwC5FBQRmLx2xvpQMeaI5xjylbS8psuEWHylAqkoVyxwnhnR%2F6QpOxU4GpRuNvE6payPbjTyErShbWk2%2Btsz3iHBHRDvGeVzXKdiyLwKCo6zmTw%2FR7RMi2Hc%2B9bRcN%2BOM%2F0Mx8oO5rN4qkhZ0M8BZ%2F57doqx6MEg4e5MyOUQ6doEoPuT7kv1yCbMobtP%2FbEOEO%2ByqVMMFcWqYN0%2B10gnZPTVGAPcHcvEno17m9yDmj7qxMN5RzRz9%2F3Hc3R4Yus%2F5qqlvR1qxfacTUm1UNybXN%2B5LS8wmtj%2BwAY6ngEk%2FBryoQIiSWtSNNp43iE%2FDW%2FC0yun3etsCLBfgUZFj6kS%2FYrTJ7ZZinUL9M0oVXDqp1fQjO3qs%2B0Q9nthXfVZRyo21kEDHHmPaH7FieXCw9xUW0s9oqTr4cdaAMZbYO8z6PQQBr0T6kiriAyUogPT9K7P9rbxFCMrtmW%2BktimM3VA7Dhb%2BP%2FQZBo9mWjdiH4A7K7FZG0y5o1trUv7Dg%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20250510T194218Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3599&X-Amz-Credential=ASIAXCQYYRKNB2RL2HQM%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Signature=f4bcb12af4f20f83aeb1d3c5e456892902ee55c5f7634227606387781e0a0be8",
                "tier": "SILVER",
                "label": null,
                "priority": 1,
                "intouchPoints": 1,
                "group": null,
                "startTime": "2025-03-05 06:00:00",
                "startDateTime": "2025-03-05T06:00:00Z",
                "endTime": "2025-04-01 00:00:00",
                "endDateTime": "2025-04-01T00:00:00Z",
                "expired": true,
                "started": false,
                "programId": null,
                "categoryList": [
                    {
                        "id": 5,
                        "name": "ecommerce",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    }
                ],
                "customFields": {
                    "CF1_da44a7352025-05-08 14:09:54.505790": "defaultValue_1",
                    "CF2_178fabc82025-05-08 14:09:54.505803": "defaultValue_2",
                    "CF2_f451cfec2025-05-08 14:12:29.176282": "defaultValue_2",
                    "CF1_FALLBACK_1": "CF1_DV",
                    "CF1_ebd12a032025-05-08 14:12:29.176277": "defaultValue_1",
                    "CF2_FALLBACK_1": "CF2_DV"
                },
                "loyaltyProgramCriteria": null,
                "groups": [
                    {
                        "groupName": "groupName014",
                        "groupRank": 8
                    }
                ],
                "rewardRank": 10,
                "images": [],
                "videos": []
            },
            "revenueDetails": null,
            "paymentDetails": {
                "paymentMode": "CASH",
                "id": 1760,
                "cash": 25.0000
            },
            "redemptionDetails": {
                "redemptionType": "CHARITY",
                "redemptionValue": null
            },
            "transactionCustomFields": null,
            "fulfillmentDetails": null,
            "issueDateTime": "2025-03-14T14:00:46Z",
            "eventDateTime": "2025-03-14T14:00:46Z",
            "code": null,
            "vendor": "{\"pointsRedeemed\": \"0\"}",
            "seriesId": null
        },
        {
            "typeOfReward": "CHARITY",
            "pointsRedeemed": 0,
            "rewardId": 36140,
            "transactionId": 92468,
            "issueRewardRefId": "171895019344",
            "rewardIssueDate": 1741960676000,
            "rewardIssueDateTime": "2025-03-14T13:57:56Z",
            "userRewardExpiry": null,
            "userRewardExpiryDateTime": null,
            "userRewardDetails": {
                "id": 36140,
                "name": " INTOUCH Enabled",
                "description": "Description",
                "imageId": "EXDR12987U",
                "imageUrl": "https://s3.us-west-2.amazonaws.com/devenv-crm-solutionsvannnld9gg/marvel_automation/EXDR12987U?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIGhRwksbrjEK%2FCehfsUCzQw0w7e%2FvfOQ35cqLTrI2UijAiApuL8xTHK%2Fr2UDxg58iebTGj3WqCjieLQet9QNZ1DHyirOAgit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAUaDDQ4NjQ1Njk4NjI2NiIMDzVunmYHPH6K00T4KqICxwp4LUcOPMmU8WNQD7laUWdH477GqodHJd8tjFJ6vIsoQuXoxiyWQCdIt%2BZnHlAdmt0bC7wM9mOkz71qSzeUzvaoDZSpWH5mNq3L2tvGMwC5FBQRmLx2xvpQMeaI5xjylbS8psuEWHylAqkoVyxwnhnR%2F6QpOxU4GpRuNvE6payPbjTyErShbWk2%2Btsz3iHBHRDvGeVzXKdiyLwKCo6zmTw%2FR7RMi2Hc%2B9bRcN%2BOM%2F0Mx8oO5rN4qkhZ0M8BZ%2F57doqx6MEg4e5MyOUQ6doEoPuT7kv1yCbMobtP%2FbEOEO%2ByqVMMFcWqYN0%2B10gnZPTVGAPcHcvEno17m9yDmj7qxMN5RzRz9%2F3Hc3R4Yus%2F5qqlvR1qxfacTUm1UNybXN%2B5LS8wmtj%2BwAY6ngEk%2FBryoQIiSWtSNNp43iE%2FDW%2FC0yun3etsCLBfgUZFj6kS%2FYrTJ7ZZinUL9M0oVXDqp1fQjO3qs%2B0Q9nthXfVZRyo21kEDHHmPaH7FieXCw9xUW0s9oqTr4cdaAMZbYO8z6PQQBr0T6kiriAyUogPT9K7P9rbxFCMrtmW%2BktimM3VA7Dhb%2BP%2FQZBo9mWjdiH4A7K7FZG0y5o1trUv7Dg%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20250510T194218Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3599&X-Amz-Credential=ASIAXCQYYRKNB2RL2HQM%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Signature=25f112972bc584e4d5e0d0581ac30563944d60b7d0981e883928a7a0cdd4e75c",
                "thumbnailId": "EXDR12987T",
                "thumbnailUrl": "https://s3.us-west-2.amazonaws.com/devenv-crm-solutionsvannnld9gg/marvel_automation/EXDR12987T?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIGhRwksbrjEK%2FCehfsUCzQw0w7e%2FvfOQ35cqLTrI2UijAiApuL8xTHK%2Fr2UDxg58iebTGj3WqCjieLQet9QNZ1DHyirOAgit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAUaDDQ4NjQ1Njk4NjI2NiIMDzVunmYHPH6K00T4KqICxwp4LUcOPMmU8WNQD7laUWdH477GqodHJd8tjFJ6vIsoQuXoxiyWQCdIt%2BZnHlAdmt0bC7wM9mOkz71qSzeUzvaoDZSpWH5mNq3L2tvGMwC5FBQRmLx2xvpQMeaI5xjylbS8psuEWHylAqkoVyxwnhnR%2F6QpOxU4GpRuNvE6payPbjTyErShbWk2%2Btsz3iHBHRDvGeVzXKdiyLwKCo6zmTw%2FR7RMi2Hc%2B9bRcN%2BOM%2F0Mx8oO5rN4qkhZ0M8BZ%2F57doqx6MEg4e5MyOUQ6doEoPuT7kv1yCbMobtP%2FbEOEO%2ByqVMMFcWqYN0%2B10gnZPTVGAPcHcvEno17m9yDmj7qxMN5RzRz9%2F3Hc3R4Yus%2F5qqlvR1qxfacTUm1UNybXN%2B5LS8wmtj%2BwAY6ngEk%2FBryoQIiSWtSNNp43iE%2FDW%2FC0yun3etsCLBfgUZFj6kS%2FYrTJ7ZZinUL9M0oVXDqp1fQjO3qs%2B0Q9nthXfVZRyo21kEDHHmPaH7FieXCw9xUW0s9oqTr4cdaAMZbYO8z6PQQBr0T6kiriAyUogPT9K7P9rbxFCMrtmW%2BktimM3VA7Dhb%2BP%2FQZBo9mWjdiH4A7K7FZG0y5o1trUv7Dg%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20250510T194218Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIAXCQYYRKNB2RL2HQM%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Signature=270b7849a5e28939c13ce0ea59ae56e4b49dc110ee759d5894ad1ea07f2300a4",
                "termAndConditionsId": "EXDR12987R",
                "termAndConditionsUrl": "https://s3.us-west-2.amazonaws.com/devenv-crm-solutionsvannnld9gg/marvel_automation/EXDR12987R?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIGhRwksbrjEK%2FCehfsUCzQw0w7e%2FvfOQ35cqLTrI2UijAiApuL8xTHK%2Fr2UDxg58iebTGj3WqCjieLQet9QNZ1DHyirOAgit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAUaDDQ4NjQ1Njk4NjI2NiIMDzVunmYHPH6K00T4KqICxwp4LUcOPMmU8WNQD7laUWdH477GqodHJd8tjFJ6vIsoQuXoxiyWQCdIt%2BZnHlAdmt0bC7wM9mOkz71qSzeUzvaoDZSpWH5mNq3L2tvGMwC5FBQRmLx2xvpQMeaI5xjylbS8psuEWHylAqkoVyxwnhnR%2F6QpOxU4GpRuNvE6payPbjTyErShbWk2%2Btsz3iHBHRDvGeVzXKdiyLwKCo6zmTw%2FR7RMi2Hc%2B9bRcN%2BOM%2F0Mx8oO5rN4qkhZ0M8BZ%2F57doqx6MEg4e5MyOUQ6doEoPuT7kv1yCbMobtP%2FbEOEO%2ByqVMMFcWqYN0%2B10gnZPTVGAPcHcvEno17m9yDmj7qxMN5RzRz9%2F3Hc3R4Yus%2F5qqlvR1qxfacTUm1UNybXN%2B5LS8wmtj%2BwAY6ngEk%2FBryoQIiSWtSNNp43iE%2FDW%2FC0yun3etsCLBfgUZFj6kS%2FYrTJ7ZZinUL9M0oVXDqp1fQjO3qs%2B0Q9nthXfVZRyo21kEDHHmPaH7FieXCw9xUW0s9oqTr4cdaAMZbYO8z6PQQBr0T6kiriAyUogPT9K7P9rbxFCMrtmW%2BktimM3VA7Dhb%2BP%2FQZBo9mWjdiH4A7K7FZG0y5o1trUv7Dg%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20250510T194218Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3599&X-Amz-Credential=ASIAXCQYYRKNB2RL2HQM%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Signature=f4bcb12af4f20f83aeb1d3c5e456892902ee55c5f7634227606387781e0a0be8",
                "tier": "SILVER",
                "label": null,
                "priority": 1,
                "intouchPoints": 1,
                "group": null,
                "startTime": "2025-03-05 06:00:00",
                "startDateTime": "2025-03-05T06:00:00Z",
                "endTime": "2025-04-01 00:00:00",
                "endDateTime": "2025-04-01T00:00:00Z",
                "expired": true,
                "started": false,
                "programId": null,
                "categoryList": [
                    {
                        "id": 5,
                        "name": "ecommerce",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    }
                ],
                "customFields": {
                    "CF1_da44a7352025-05-08 14:09:54.505790": "defaultValue_1",
                    "CF2_178fabc82025-05-08 14:09:54.505803": "defaultValue_2",
                    "CF2_f451cfec2025-05-08 14:12:29.176282": "defaultValue_2",
                    "CF1_FALLBACK_1": "CF1_DV",
                    "CF1_ebd12a032025-05-08 14:12:29.176277": "defaultValue_1",
                    "CF2_FALLBACK_1": "CF2_DV"
                },
                "loyaltyProgramCriteria": null,
                "groups": [
                    {
                        "groupName": "groupName014",
                        "groupRank": 8
                    }
                ],
                "rewardRank": 10,
                "images": [],
                "videos": []
            },
            "revenueDetails": null,
            "paymentDetails": {
                "paymentMode": "CASH",
                "id": 1760,
                "cash": 25.0000
            },
            "redemptionDetails": {
                "redemptionType": "CHARITY",
                "redemptionValue": null
            },
            "transactionCustomFields": null,
            "fulfillmentDetails": null,
            "issueDateTime": "2025-03-14T13:57:55Z",
            "eventDateTime": "2025-03-14T13:57:55Z",
            "code": null,
            "vendor": "{\"pointsRedeemed\": \"0\"}",
            "seriesId": null
        },
        {
            "typeOfReward": "CHARITY",
            "pointsRedeemed": 0,
            "rewardId": 36140,
            "transactionId": 92467,
            "issueRewardRefId": "171895019344",
            "rewardIssueDate": 1741956687000,
            "rewardIssueDateTime": "2025-03-14T12:51:27Z",
            "userRewardExpiry": null,
            "userRewardExpiryDateTime": null,
            "userRewardDetails": {
                "id": 36140,
                "name": " INTOUCH Enabled",
                "description": "Description",
                "imageId": "EXDR12987U",
                "imageUrl": "https://s3.us-west-2.amazonaws.com/devenv-crm-solutionsvannnld9gg/marvel_automation/EXDR12987U?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIGhRwksbrjEK%2FCehfsUCzQw0w7e%2FvfOQ35cqLTrI2UijAiApuL8xTHK%2Fr2UDxg58iebTGj3WqCjieLQet9QNZ1DHyirOAgit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAUaDDQ4NjQ1Njk4NjI2NiIMDzVunmYHPH6K00T4KqICxwp4LUcOPMmU8WNQD7laUWdH477GqodHJd8tjFJ6vIsoQuXoxiyWQCdIt%2BZnHlAdmt0bC7wM9mOkz71qSzeUzvaoDZSpWH5mNq3L2tvGMwC5FBQRmLx2xvpQMeaI5xjylbS8psuEWHylAqkoVyxwnhnR%2F6QpOxU4GpRuNvE6payPbjTyErShbWk2%2Btsz3iHBHRDvGeVzXKdiyLwKCo6zmTw%2FR7RMi2Hc%2B9bRcN%2BOM%2F0Mx8oO5rN4qkhZ0M8BZ%2F57doqx6MEg4e5MyOUQ6doEoPuT7kv1yCbMobtP%2FbEOEO%2ByqVMMFcWqYN0%2B10gnZPTVGAPcHcvEno17m9yDmj7qxMN5RzRz9%2F3Hc3R4Yus%2F5qqlvR1qxfacTUm1UNybXN%2B5LS8wmtj%2BwAY6ngEk%2FBryoQIiSWtSNNp43iE%2FDW%2FC0yun3etsCLBfgUZFj6kS%2FYrTJ7ZZinUL9M0oVXDqp1fQjO3qs%2B0Q9nthXfVZRyo21kEDHHmPaH7FieXCw9xUW0s9oqTr4cdaAMZbYO8z6PQQBr0T6kiriAyUogPT9K7P9rbxFCMrtmW%2BktimM3VA7Dhb%2BP%2FQZBo9mWjdiH4A7K7FZG0y5o1trUv7Dg%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20250510T194218Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3599&X-Amz-Credential=ASIAXCQYYRKNB2RL2HQM%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Signature=25f112972bc584e4d5e0d0581ac30563944d60b7d0981e883928a7a0cdd4e75c",
                "thumbnailId": "EXDR12987T",
                "thumbnailUrl": "https://s3.us-west-2.amazonaws.com/devenv-crm-solutionsvannnld9gg/marvel_automation/EXDR12987T?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIGhRwksbrjEK%2FCehfsUCzQw0w7e%2FvfOQ35cqLTrI2UijAiApuL8xTHK%2Fr2UDxg58iebTGj3WqCjieLQet9QNZ1DHyirOAgit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAUaDDQ4NjQ1Njk4NjI2NiIMDzVunmYHPH6K00T4KqICxwp4LUcOPMmU8WNQD7laUWdH477GqodHJd8tjFJ6vIsoQuXoxiyWQCdIt%2BZnHlAdmt0bC7wM9mOkz71qSzeUzvaoDZSpWH5mNq3L2tvGMwC5FBQRmLx2xvpQMeaI5xjylbS8psuEWHylAqkoVyxwnhnR%2F6QpOxU4GpRuNvE6payPbjTyErShbWk2%2Btsz3iHBHRDvGeVzXKdiyLwKCo6zmTw%2FR7RMi2Hc%2B9bRcN%2BOM%2F0Mx8oO5rN4qkhZ0M8BZ%2F57doqx6MEg4e5MyOUQ6doEoPuT7kv1yCbMobtP%2FbEOEO%2ByqVMMFcWqYN0%2B10gnZPTVGAPcHcvEno17m9yDmj7qxMN5RzRz9%2F3Hc3R4Yus%2F5qqlvR1qxfacTUm1UNybXN%2B5LS8wmtj%2BwAY6ngEk%2FBryoQIiSWtSNNp43iE%2FDW%2FC0yun3etsCLBfgUZFj6kS%2FYrTJ7ZZinUL9M0oVXDqp1fQjO3qs%2B0Q9nthXfVZRyo21kEDHHmPaH7FieXCw9xUW0s9oqTr4cdaAMZbYO8z6PQQBr0T6kiriAyUogPT9K7P9rbxFCMrtmW%2BktimM3VA7Dhb%2BP%2FQZBo9mWjdiH4A7K7FZG0y5o1trUv7Dg%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20250510T194218Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIAXCQYYRKNB2RL2HQM%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Signature=270b7849a5e28939c13ce0ea59ae56e4b49dc110ee759d5894ad1ea07f2300a4",
                "termAndConditionsId": "EXDR12987R",
                "termAndConditionsUrl": "https://s3.us-west-2.amazonaws.com/devenv-crm-solutionsvannnld9gg/marvel_automation/EXDR12987R?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIGhRwksbrjEK%2FCehfsUCzQw0w7e%2FvfOQ35cqLTrI2UijAiApuL8xTHK%2Fr2UDxg58iebTGj3WqCjieLQet9QNZ1DHyirOAgit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAUaDDQ4NjQ1Njk4NjI2NiIMDzVunmYHPH6K00T4KqICxwp4LUcOPMmU8WNQD7laUWdH477GqodHJd8tjFJ6vIsoQuXoxiyWQCdIt%2BZnHlAdmt0bC7wM9mOkz71qSzeUzvaoDZSpWH5mNq3L2tvGMwC5FBQRmLx2xvpQMeaI5xjylbS8psuEWHylAqkoVyxwnhnR%2F6QpOxU4GpRuNvE6payPbjTyErShbWk2%2Btsz3iHBHRDvGeVzXKdiyLwKCo6zmTw%2FR7RMi2Hc%2B9bRcN%2BOM%2F0Mx8oO5rN4qkhZ0M8BZ%2F57doqx6MEg4e5MyOUQ6doEoPuT7kv1yCbMobtP%2FbEOEO%2ByqVMMFcWqYN0%2B10gnZPTVGAPcHcvEno17m9yDmj7qxMN5RzRz9%2F3Hc3R4Yus%2F5qqlvR1qxfacTUm1UNybXN%2B5LS8wmtj%2BwAY6ngEk%2FBryoQIiSWtSNNp43iE%2FDW%2FC0yun3etsCLBfgUZFj6kS%2FYrTJ7ZZinUL9M0oVXDqp1fQjO3qs%2B0Q9nthXfVZRyo21kEDHHmPaH7FieXCw9xUW0s9oqTr4cdaAMZbYO8z6PQQBr0T6kiriAyUogPT9K7P9rbxFCMrtmW%2BktimM3VA7Dhb%2BP%2FQZBo9mWjdiH4A7K7FZG0y5o1trUv7Dg%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20250510T194218Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3599&X-Amz-Credential=ASIAXCQYYRKNB2RL2HQM%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Signature=f4bcb12af4f20f83aeb1d3c5e456892902ee55c5f7634227606387781e0a0be8",
                "tier": "SILVER",
                "label": null,
                "priority": 1,
                "intouchPoints": 1,
                "group": null,
                "startTime": "2025-03-05 06:00:00",
                "startDateTime": "2025-03-05T06:00:00Z",
                "endTime": "2025-04-01 00:00:00",
                "endDateTime": "2025-04-01T00:00:00Z",
                "expired": true,
                "started": false,
                "programId": null,
                "categoryList": [
                    {
                        "id": 5,
                        "name": "ecommerce",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    }
                ],
                "customFields": {
                    "CF1_da44a7352025-05-08 14:09:54.505790": "defaultValue_1",
                    "CF2_178fabc82025-05-08 14:09:54.505803": "defaultValue_2",
                    "CF2_f451cfec2025-05-08 14:12:29.176282": "defaultValue_2",
                    "CF1_FALLBACK_1": "CF1_DV",
                    "CF1_ebd12a032025-05-08 14:12:29.176277": "defaultValue_1",
                    "CF2_FALLBACK_1": "CF2_DV"
                },
                "loyaltyProgramCriteria": null,
                "groups": [
                    {
                        "groupName": "groupName014",
                        "groupRank": 8
                    }
                ],
                "rewardRank": 10,
                "images": [],
                "videos": []
            },
            "revenueDetails": null,
            "paymentDetails": {
                "paymentMode": "CASH",
                "id": 1760,
                "cash": 25.0000
            },
            "redemptionDetails": {
                "redemptionType": "CHARITY",
                "redemptionValue": null
            },
            "transactionCustomFields": null,
            "fulfillmentDetails": null,
            "issueDateTime": "2025-03-14T12:51:27Z",
            "eventDateTime": "2025-03-14T12:51:27Z",
            "code": null,
            "vendor": "{\"pointsRedeemed\": \"0\"}",
            "seriesId": null
        },
        {
            "typeOfReward": "CHARITY",
            "pointsRedeemed": 0,
            "rewardId": 36140,
            "transactionId": 92464,
            "issueRewardRefId": "171895019344",
            "rewardIssueDate": 1741950371000,
            "rewardIssueDateTime": "2025-03-14T11:06:11Z",
            "userRewardExpiry": null,
            "userRewardExpiryDateTime": null,
            "userRewardDetails": {
                "id": 36140,
                "name": " INTOUCH Enabled",
                "description": "Description",
                "imageId": "EXDR12987U",
                "imageUrl": "https://s3.us-west-2.amazonaws.com/devenv-crm-solutionsvannnld9gg/marvel_automation/EXDR12987U?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIGhRwksbrjEK%2FCehfsUCzQw0w7e%2FvfOQ35cqLTrI2UijAiApuL8xTHK%2Fr2UDxg58iebTGj3WqCjieLQet9QNZ1DHyirOAgit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAUaDDQ4NjQ1Njk4NjI2NiIMDzVunmYHPH6K00T4KqICxwp4LUcOPMmU8WNQD7laUWdH477GqodHJd8tjFJ6vIsoQuXoxiyWQCdIt%2BZnHlAdmt0bC7wM9mOkz71qSzeUzvaoDZSpWH5mNq3L2tvGMwC5FBQRmLx2xvpQMeaI5xjylbS8psuEWHylAqkoVyxwnhnR%2F6QpOxU4GpRuNvE6payPbjTyErShbWk2%2Btsz3iHBHRDvGeVzXKdiyLwKCo6zmTw%2FR7RMi2Hc%2B9bRcN%2BOM%2F0Mx8oO5rN4qkhZ0M8BZ%2F57doqx6MEg4e5MyOUQ6doEoPuT7kv1yCbMobtP%2FbEOEO%2ByqVMMFcWqYN0%2B10gnZPTVGAPcHcvEno17m9yDmj7qxMN5RzRz9%2F3Hc3R4Yus%2F5qqlvR1qxfacTUm1UNybXN%2B5LS8wmtj%2BwAY6ngEk%2FBryoQIiSWtSNNp43iE%2FDW%2FC0yun3etsCLBfgUZFj6kS%2FYrTJ7ZZinUL9M0oVXDqp1fQjO3qs%2B0Q9nthXfVZRyo21kEDHHmPaH7FieXCw9xUW0s9oqTr4cdaAMZbYO8z6PQQBr0T6kiriAyUogPT9K7P9rbxFCMrtmW%2BktimM3VA7Dhb%2BP%2FQZBo9mWjdiH4A7K7FZG0y5o1trUv7Dg%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20250510T194218Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3599&X-Amz-Credential=ASIAXCQYYRKNB2RL2HQM%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Signature=25f112972bc584e4d5e0d0581ac30563944d60b7d0981e883928a7a0cdd4e75c",
                "thumbnailId": "EXDR12987T",
                "thumbnailUrl": "https://s3.us-west-2.amazonaws.com/devenv-crm-solutionsvannnld9gg/marvel_automation/EXDR12987T?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIGhRwksbrjEK%2FCehfsUCzQw0w7e%2FvfOQ35cqLTrI2UijAiApuL8xTHK%2Fr2UDxg58iebTGj3WqCjieLQet9QNZ1DHyirOAgit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAUaDDQ4NjQ1Njk4NjI2NiIMDzVunmYHPH6K00T4KqICxwp4LUcOPMmU8WNQD7laUWdH477GqodHJd8tjFJ6vIsoQuXoxiyWQCdIt%2BZnHlAdmt0bC7wM9mOkz71qSzeUzvaoDZSpWH5mNq3L2tvGMwC5FBQRmLx2xvpQMeaI5xjylbS8psuEWHylAqkoVyxwnhnR%2F6QpOxU4GpRuNvE6payPbjTyErShbWk2%2Btsz3iHBHRDvGeVzXKdiyLwKCo6zmTw%2FR7RMi2Hc%2B9bRcN%2BOM%2F0Mx8oO5rN4qkhZ0M8BZ%2F57doqx6MEg4e5MyOUQ6doEoPuT7kv1yCbMobtP%2FbEOEO%2ByqVMMFcWqYN0%2B10gnZPTVGAPcHcvEno17m9yDmj7qxMN5RzRz9%2F3Hc3R4Yus%2F5qqlvR1qxfacTUm1UNybXN%2B5LS8wmtj%2BwAY6ngEk%2FBryoQIiSWtSNNp43iE%2FDW%2FC0yun3etsCLBfgUZFj6kS%2FYrTJ7ZZinUL9M0oVXDqp1fQjO3qs%2B0Q9nthXfVZRyo21kEDHHmPaH7FieXCw9xUW0s9oqTr4cdaAMZbYO8z6PQQBr0T6kiriAyUogPT9K7P9rbxFCMrtmW%2BktimM3VA7Dhb%2BP%2FQZBo9mWjdiH4A7K7FZG0y5o1trUv7Dg%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20250510T194218Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIAXCQYYRKNB2RL2HQM%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Signature=270b7849a5e28939c13ce0ea59ae56e4b49dc110ee759d5894ad1ea07f2300a4",
                "termAndConditionsId": "EXDR12987R",
                "termAndConditionsUrl": "https://s3.us-west-2.amazonaws.com/devenv-crm-solutionsvannnld9gg/marvel_automation/EXDR12987R?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIGhRwksbrjEK%2FCehfsUCzQw0w7e%2FvfOQ35cqLTrI2UijAiApuL8xTHK%2Fr2UDxg58iebTGj3WqCjieLQet9QNZ1DHyirOAgit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAUaDDQ4NjQ1Njk4NjI2NiIMDzVunmYHPH6K00T4KqICxwp4LUcOPMmU8WNQD7laUWdH477GqodHJd8tjFJ6vIsoQuXoxiyWQCdIt%2BZnHlAdmt0bC7wM9mOkz71qSzeUzvaoDZSpWH5mNq3L2tvGMwC5FBQRmLx2xvpQMeaI5xjylbS8psuEWHylAqkoVyxwnhnR%2F6QpOxU4GpRuNvE6payPbjTyErShbWk2%2Btsz3iHBHRDvGeVzXKdiyLwKCo6zmTw%2FR7RMi2Hc%2B9bRcN%2BOM%2F0Mx8oO5rN4qkhZ0M8BZ%2F57doqx6MEg4e5MyOUQ6doEoPuT7kv1yCbMobtP%2FbEOEO%2ByqVMMFcWqYN0%2B10gnZPTVGAPcHcvEno17m9yDmj7qxMN5RzRz9%2F3Hc3R4Yus%2F5qqlvR1qxfacTUm1UNybXN%2B5LS8wmtj%2BwAY6ngEk%2FBryoQIiSWtSNNp43iE%2FDW%2FC0yun3etsCLBfgUZFj6kS%2FYrTJ7ZZinUL9M0oVXDqp1fQjO3qs%2B0Q9nthXfVZRyo21kEDHHmPaH7FieXCw9xUW0s9oqTr4cdaAMZbYO8z6PQQBr0T6kiriAyUogPT9K7P9rbxFCMrtmW%2BktimM3VA7Dhb%2BP%2FQZBo9mWjdiH4A7K7FZG0y5o1trUv7Dg%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20250510T194218Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3599&X-Amz-Credential=ASIAXCQYYRKNB2RL2HQM%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Signature=f4bcb12af4f20f83aeb1d3c5e456892902ee55c5f7634227606387781e0a0be8",
                "tier": "SILVER",
                "label": null,
                "priority": 1,
                "intouchPoints": 1,
                "group": null,
                "startTime": "2025-03-05 06:00:00",
                "startDateTime": "2025-03-05T06:00:00Z",
                "endTime": "2025-04-01 00:00:00",
                "endDateTime": "2025-04-01T00:00:00Z",
                "expired": true,
                "started": false,
                "programId": null,
                "categoryList": [
                    {
                        "id": 5,
                        "name": "ecommerce",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    }
                ],
                "customFields": {
                    "CF1_da44a7352025-05-08 14:09:54.505790": "defaultValue_1",
                    "CF2_178fabc82025-05-08 14:09:54.505803": "defaultValue_2",
                    "CF2_f451cfec2025-05-08 14:12:29.176282": "defaultValue_2",
                    "CF1_FALLBACK_1": "CF1_DV",
                    "CF1_ebd12a032025-05-08 14:12:29.176277": "defaultValue_1",
                    "CF2_FALLBACK_1": "CF2_DV"
                },
                "loyaltyProgramCriteria": null,
                "groups": [
                    {
                        "groupName": "groupName014",
                        "groupRank": 8
                    }
                ],
                "rewardRank": 10,
                "images": [],
                "videos": []
            },
            "revenueDetails": null,
            "paymentDetails": {
                "paymentMode": "CASH",
                "id": 1760,
                "cash": 25.0000
            },
            "redemptionDetails": {
                "redemptionType": "CHARITY",
                "redemptionValue": null
            },
            "transactionCustomFields": null,
            "fulfillmentDetails": null,
            "issueDateTime": "2025-03-14T11:06:11Z",
            "eventDateTime": "2025-03-14T11:06:11Z",
            "code": null,
            "vendor": "{\"pointsRedeemed\": \"0\"}",
            "seriesId": null
        },
        {
            "typeOfReward": "CHARITY",
            "pointsRedeemed": 0,
            "rewardId": 36140,
            "transactionId": 92463,
            "issueRewardRefId": "171895019344",
            "rewardIssueDate": 1741950218000,
            "rewardIssueDateTime": "2025-03-14T11:03:38Z",
            "userRewardExpiry": null,
            "userRewardExpiryDateTime": null,
            "userRewardDetails": {
                "id": 36140,
                "name": " INTOUCH Enabled",
                "description": "Description",
                "imageId": "EXDR12987U",
                "imageUrl": "https://s3.us-west-2.amazonaws.com/devenv-crm-solutionsvannnld9gg/marvel_automation/EXDR12987U?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIGhRwksbrjEK%2FCehfsUCzQw0w7e%2FvfOQ35cqLTrI2UijAiApuL8xTHK%2Fr2UDxg58iebTGj3WqCjieLQet9QNZ1DHyirOAgit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAUaDDQ4NjQ1Njk4NjI2NiIMDzVunmYHPH6K00T4KqICxwp4LUcOPMmU8WNQD7laUWdH477GqodHJd8tjFJ6vIsoQuXoxiyWQCdIt%2BZnHlAdmt0bC7wM9mOkz71qSzeUzvaoDZSpWH5mNq3L2tvGMwC5FBQRmLx2xvpQMeaI5xjylbS8psuEWHylAqkoVyxwnhnR%2F6QpOxU4GpRuNvE6payPbjTyErShbWk2%2Btsz3iHBHRDvGeVzXKdiyLwKCo6zmTw%2FR7RMi2Hc%2B9bRcN%2BOM%2F0Mx8oO5rN4qkhZ0M8BZ%2F57doqx6MEg4e5MyOUQ6doEoPuT7kv1yCbMobtP%2FbEOEO%2ByqVMMFcWqYN0%2B10gnZPTVGAPcHcvEno17m9yDmj7qxMN5RzRz9%2F3Hc3R4Yus%2F5qqlvR1qxfacTUm1UNybXN%2B5LS8wmtj%2BwAY6ngEk%2FBryoQIiSWtSNNp43iE%2FDW%2FC0yun3etsCLBfgUZFj6kS%2FYrTJ7ZZinUL9M0oVXDqp1fQjO3qs%2B0Q9nthXfVZRyo21kEDHHmPaH7FieXCw9xUW0s9oqTr4cdaAMZbYO8z6PQQBr0T6kiriAyUogPT9K7P9rbxFCMrtmW%2BktimM3VA7Dhb%2BP%2FQZBo9mWjdiH4A7K7FZG0y5o1trUv7Dg%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20250510T194218Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3599&X-Amz-Credential=ASIAXCQYYRKNB2RL2HQM%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Signature=25f112972bc584e4d5e0d0581ac30563944d60b7d0981e883928a7a0cdd4e75c",
                "thumbnailId": "EXDR12987T",
                "thumbnailUrl": "https://s3.us-west-2.amazonaws.com/devenv-crm-solutionsvannnld9gg/marvel_automation/EXDR12987T?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIGhRwksbrjEK%2FCehfsUCzQw0w7e%2FvfOQ35cqLTrI2UijAiApuL8xTHK%2Fr2UDxg58iebTGj3WqCjieLQet9QNZ1DHyirOAgit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAUaDDQ4NjQ1Njk4NjI2NiIMDzVunmYHPH6K00T4KqICxwp4LUcOPMmU8WNQD7laUWdH477GqodHJd8tjFJ6vIsoQuXoxiyWQCdIt%2BZnHlAdmt0bC7wM9mOkz71qSzeUzvaoDZSpWH5mNq3L2tvGMwC5FBQRmLx2xvpQMeaI5xjylbS8psuEWHylAqkoVyxwnhnR%2F6QpOxU4GpRuNvE6payPbjTyErShbWk2%2Btsz3iHBHRDvGeVzXKdiyLwKCo6zmTw%2FR7RMi2Hc%2B9bRcN%2BOM%2F0Mx8oO5rN4qkhZ0M8BZ%2F57doqx6MEg4e5MyOUQ6doEoPuT7kv1yCbMobtP%2FbEOEO%2ByqVMMFcWqYN0%2B10gnZPTVGAPcHcvEno17m9yDmj7qxMN5RzRz9%2F3Hc3R4Yus%2F5qqlvR1qxfacTUm1UNybXN%2B5LS8wmtj%2BwAY6ngEk%2FBryoQIiSWtSNNp43iE%2FDW%2FC0yun3etsCLBfgUZFj6kS%2FYrTJ7ZZinUL9M0oVXDqp1fQjO3qs%2B0Q9nthXfVZRyo21kEDHHmPaH7FieXCw9xUW0s9oqTr4cdaAMZbYO8z6PQQBr0T6kiriAyUogPT9K7P9rbxFCMrtmW%2BktimM3VA7Dhb%2BP%2FQZBo9mWjdiH4A7K7FZG0y5o1trUv7Dg%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20250510T194218Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIAXCQYYRKNB2RL2HQM%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Signature=270b7849a5e28939c13ce0ea59ae56e4b49dc110ee759d5894ad1ea07f2300a4",
                "termAndConditionsId": "EXDR12987R",
                "termAndConditionsUrl": "https://s3.us-west-2.amazonaws.com/devenv-crm-solutionsvannnld9gg/marvel_automation/EXDR12987R?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIGhRwksbrjEK%2FCehfsUCzQw0w7e%2FvfOQ35cqLTrI2UijAiApuL8xTHK%2Fr2UDxg58iebTGj3WqCjieLQet9QNZ1DHyirOAgit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAUaDDQ4NjQ1Njk4NjI2NiIMDzVunmYHPH6K00T4KqICxwp4LUcOPMmU8WNQD7laUWdH477GqodHJd8tjFJ6vIsoQuXoxiyWQCdIt%2BZnHlAdmt0bC7wM9mOkz71qSzeUzvaoDZSpWH5mNq3L2tvGMwC5FBQRmLx2xvpQMeaI5xjylbS8psuEWHylAqkoVyxwnhnR%2F6QpOxU4GpRuNvE6payPbjTyErShbWk2%2Btsz3iHBHRDvGeVzXKdiyLwKCo6zmTw%2FR7RMi2Hc%2B9bRcN%2BOM%2F0Mx8oO5rN4qkhZ0M8BZ%2F57doqx6MEg4e5MyOUQ6doEoPuT7kv1yCbMobtP%2FbEOEO%2ByqVMMFcWqYN0%2B10gnZPTVGAPcHcvEno17m9yDmj7qxMN5RzRz9%2F3Hc3R4Yus%2F5qqlvR1qxfacTUm1UNybXN%2B5LS8wmtj%2BwAY6ngEk%2FBryoQIiSWtSNNp43iE%2FDW%2FC0yun3etsCLBfgUZFj6kS%2FYrTJ7ZZinUL9M0oVXDqp1fQjO3qs%2B0Q9nthXfVZRyo21kEDHHmPaH7FieXCw9xUW0s9oqTr4cdaAMZbYO8z6PQQBr0T6kiriAyUogPT9K7P9rbxFCMrtmW%2BktimM3VA7Dhb%2BP%2FQZBo9mWjdiH4A7K7FZG0y5o1trUv7Dg%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20250510T194218Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3599&X-Amz-Credential=ASIAXCQYYRKNB2RL2HQM%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Signature=f4bcb12af4f20f83aeb1d3c5e456892902ee55c5f7634227606387781e0a0be8",
                "tier": "SILVER",
                "label": null,
                "priority": 1,
                "intouchPoints": 1,
                "group": null,
                "startTime": "2025-03-05 06:00:00",
                "startDateTime": "2025-03-05T06:00:00Z",
                "endTime": "2025-04-01 00:00:00",
                "endDateTime": "2025-04-01T00:00:00Z",
                "expired": true,
                "started": false,
                "programId": null,
                "categoryList": [
                    {
                        "id": 5,
                        "name": "ecommerce",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    }
                ],
                "customFields": {
                    "CF1_da44a7352025-05-08 14:09:54.505790": "defaultValue_1",
                    "CF2_178fabc82025-05-08 14:09:54.505803": "defaultValue_2",
                    "CF2_f451cfec2025-05-08 14:12:29.176282": "defaultValue_2",
                    "CF1_FALLBACK_1": "CF1_DV",
                    "CF1_ebd12a032025-05-08 14:12:29.176277": "defaultValue_1",
                    "CF2_FALLBACK_1": "CF2_DV"
                },
                "loyaltyProgramCriteria": null,
                "groups": [
                    {
                        "groupName": "groupName014",
                        "groupRank": 8
                    }
                ],
                "rewardRank": 10,
                "images": [],
                "videos": []
            },
            "revenueDetails": null,
            "paymentDetails": {
                "paymentMode": "CASH",
                "id": 1760,
                "cash": 25.0000
            },
            "redemptionDetails": {
                "redemptionType": "CHARITY",
                "redemptionValue": null
            },
            "transactionCustomFields": null,
            "fulfillmentDetails": null,
            "issueDateTime": "2025-03-14T11:03:37Z",
            "eventDateTime": "2025-03-14T11:03:37Z",
            "code": null,
            "vendor": "{\"pointsRedeemed\": \"0\"}",
            "seriesId": null
        },
        {
            "typeOfReward": "CHARITY",
            "pointsRedeemed": 0,
            "rewardId": 36140,
            "transactionId": 91217,
            "issueRewardRefId": "171895019344",
            "rewardIssueDate": 1741168219000,
            "rewardIssueDateTime": "2025-03-05T09:50:19Z",
            "userRewardExpiry": null,
            "userRewardExpiryDateTime": null,
            "userRewardDetails": {
                "id": 36140,
                "name": " INTOUCH Enabled",
                "description": "Description",
                "imageId": "EXDR12987U",
                "imageUrl": "https://s3.us-west-2.amazonaws.com/devenv-crm-solutionsvannnld9gg/marvel_automation/EXDR12987U?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIGhRwksbrjEK%2FCehfsUCzQw0w7e%2FvfOQ35cqLTrI2UijAiApuL8xTHK%2Fr2UDxg58iebTGj3WqCjieLQet9QNZ1DHyirOAgit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAUaDDQ4NjQ1Njk4NjI2NiIMDzVunmYHPH6K00T4KqICxwp4LUcOPMmU8WNQD7laUWdH477GqodHJd8tjFJ6vIsoQuXoxiyWQCdIt%2BZnHlAdmt0bC7wM9mOkz71qSzeUzvaoDZSpWH5mNq3L2tvGMwC5FBQRmLx2xvpQMeaI5xjylbS8psuEWHylAqkoVyxwnhnR%2F6QpOxU4GpRuNvE6payPbjTyErShbWk2%2Btsz3iHBHRDvGeVzXKdiyLwKCo6zmTw%2FR7RMi2Hc%2B9bRcN%2BOM%2F0Mx8oO5rN4qkhZ0M8BZ%2F57doqx6MEg4e5MyOUQ6doEoPuT7kv1yCbMobtP%2FbEOEO%2ByqVMMFcWqYN0%2B10gnZPTVGAPcHcvEno17m9yDmj7qxMN5RzRz9%2F3Hc3R4Yus%2F5qqlvR1qxfacTUm1UNybXN%2B5LS8wmtj%2BwAY6ngEk%2FBryoQIiSWtSNNp43iE%2FDW%2FC0yun3etsCLBfgUZFj6kS%2FYrTJ7ZZinUL9M0oVXDqp1fQjO3qs%2B0Q9nthXfVZRyo21kEDHHmPaH7FieXCw9xUW0s9oqTr4cdaAMZbYO8z6PQQBr0T6kiriAyUogPT9K7P9rbxFCMrtmW%2BktimM3VA7Dhb%2BP%2FQZBo9mWjdiH4A7K7FZG0y5o1trUv7Dg%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20250510T194218Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3599&X-Amz-Credential=ASIAXCQYYRKNB2RL2HQM%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Signature=25f112972bc584e4d5e0d0581ac30563944d60b7d0981e883928a7a0cdd4e75c",
                "thumbnailId": "EXDR12987T",
                "thumbnailUrl": "https://s3.us-west-2.amazonaws.com/devenv-crm-solutionsvannnld9gg/marvel_automation/EXDR12987T?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIGhRwksbrjEK%2FCehfsUCzQw0w7e%2FvfOQ35cqLTrI2UijAiApuL8xTHK%2Fr2UDxg58iebTGj3WqCjieLQet9QNZ1DHyirOAgit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAUaDDQ4NjQ1Njk4NjI2NiIMDzVunmYHPH6K00T4KqICxwp4LUcOPMmU8WNQD7laUWdH477GqodHJd8tjFJ6vIsoQuXoxiyWQCdIt%2BZnHlAdmt0bC7wM9mOkz71qSzeUzvaoDZSpWH5mNq3L2tvGMwC5FBQRmLx2xvpQMeaI5xjylbS8psuEWHylAqkoVyxwnhnR%2F6QpOxU4GpRuNvE6payPbjTyErShbWk2%2Btsz3iHBHRDvGeVzXKdiyLwKCo6zmTw%2FR7RMi2Hc%2B9bRcN%2BOM%2F0Mx8oO5rN4qkhZ0M8BZ%2F57doqx6MEg4e5MyOUQ6doEoPuT7kv1yCbMobtP%2FbEOEO%2ByqVMMFcWqYN0%2B10gnZPTVGAPcHcvEno17m9yDmj7qxMN5RzRz9%2F3Hc3R4Yus%2F5qqlvR1qxfacTUm1UNybXN%2B5LS8wmtj%2BwAY6ngEk%2FBryoQIiSWtSNNp43iE%2FDW%2FC0yun3etsCLBfgUZFj6kS%2FYrTJ7ZZinUL9M0oVXDqp1fQjO3qs%2B0Q9nthXfVZRyo21kEDHHmPaH7FieXCw9xUW0s9oqTr4cdaAMZbYO8z6PQQBr0T6kiriAyUogPT9K7P9rbxFCMrtmW%2BktimM3VA7Dhb%2BP%2FQZBo9mWjdiH4A7K7FZG0y5o1trUv7Dg%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20250510T194218Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIAXCQYYRKNB2RL2HQM%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Signature=270b7849a5e28939c13ce0ea59ae56e4b49dc110ee759d5894ad1ea07f2300a4",
                "termAndConditionsId": "EXDR12987R",
                "termAndConditionsUrl": "https://s3.us-west-2.amazonaws.com/devenv-crm-solutionsvannnld9gg/marvel_automation/EXDR12987R?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIGhRwksbrjEK%2FCehfsUCzQw0w7e%2FvfOQ35cqLTrI2UijAiApuL8xTHK%2Fr2UDxg58iebTGj3WqCjieLQet9QNZ1DHyirOAgit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAUaDDQ4NjQ1Njk4NjI2NiIMDzVunmYHPH6K00T4KqICxwp4LUcOPMmU8WNQD7laUWdH477GqodHJd8tjFJ6vIsoQuXoxiyWQCdIt%2BZnHlAdmt0bC7wM9mOkz71qSzeUzvaoDZSpWH5mNq3L2tvGMwC5FBQRmLx2xvpQMeaI5xjylbS8psuEWHylAqkoVyxwnhnR%2F6QpOxU4GpRuNvE6payPbjTyErShbWk2%2Btsz3iHBHRDvGeVzXKdiyLwKCo6zmTw%2FR7RMi2Hc%2B9bRcN%2BOM%2F0Mx8oO5rN4qkhZ0M8BZ%2F57doqx6MEg4e5MyOUQ6doEoPuT7kv1yCbMobtP%2FbEOEO%2ByqVMMFcWqYN0%2B10gnZPTVGAPcHcvEno17m9yDmj7qxMN5RzRz9%2F3Hc3R4Yus%2F5qqlvR1qxfacTUm1UNybXN%2B5LS8wmtj%2BwAY6ngEk%2FBryoQIiSWtSNNp43iE%2FDW%2FC0yun3etsCLBfgUZFj6kS%2FYrTJ7ZZinUL9M0oVXDqp1fQjO3qs%2B0Q9nthXfVZRyo21kEDHHmPaH7FieXCw9xUW0s9oqTr4cdaAMZbYO8z6PQQBr0T6kiriAyUogPT9K7P9rbxFCMrtmW%2BktimM3VA7Dhb%2BP%2FQZBo9mWjdiH4A7K7FZG0y5o1trUv7Dg%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20250510T194218Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3599&X-Amz-Credential=ASIAXCQYYRKNB2RL2HQM%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Signature=f4bcb12af4f20f83aeb1d3c5e456892902ee55c5f7634227606387781e0a0be8",
                "tier": "SILVER",
                "label": null,
                "priority": 1,
                "intouchPoints": 1,
                "group": null,
                "startTime": "2025-03-05 06:00:00",
                "startDateTime": "2025-03-05T06:00:00Z",
                "endTime": "2025-04-01 00:00:00",
                "endDateTime": "2025-04-01T00:00:00Z",
                "expired": true,
                "started": false,
                "programId": null,
                "categoryList": [
                    {
                        "id": 5,
                        "name": "ecommerce",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    }
                ],
                "customFields": {
                    "CF1_da44a7352025-05-08 14:09:54.505790": "defaultValue_1",
                    "CF2_178fabc82025-05-08 14:09:54.505803": "defaultValue_2",
                    "CF2_f451cfec2025-05-08 14:12:29.176282": "defaultValue_2",
                    "CF1_FALLBACK_1": "CF1_DV",
                    "CF1_ebd12a032025-05-08 14:12:29.176277": "defaultValue_1",
                    "CF2_FALLBACK_1": "CF2_DV"
                },
                "loyaltyProgramCriteria": null,
                "groups": [
                    {
                        "groupName": "groupName014",
                        "groupRank": 8
                    }
                ],
                "rewardRank": 10,
                "images": [],
                "videos": []
            },
            "revenueDetails": null,
            "paymentDetails": {
                "paymentMode": "CASH",
                "id": 1760,
                "cash": 25.0000
            },
            "redemptionDetails": {
                "redemptionType": "CHARITY",
                "redemptionValue": null
            },
            "transactionCustomFields": null,
            "fulfillmentDetails": null,
            "issueDateTime": "2025-03-05T09:50:19Z",
            "eventDateTime": "2025-03-05T09:50:19Z",
            "code": null,
            "vendor": "{}",
            "seriesId": null
        }
    ],
    "intouchUserId": "423789294",
    "pagingDto": {
        "last": true,
        "totalElements": 7,
        "totalPages": 1,
        "numberOfElements": 7,
        "first": true,
        "size": 50,
        "number": 0
    }
}
```
```Text With couponCodeCase filter
```

<br />

| Error Code | Description                                                   |
| ---------- | ------------------------------------------------------------- |
| **15006**  | The request is missing the primary identifier.                |
| **1014**   | The provided identifier does not match any existing customer. |
| **404**    | The specified customer was not found in the organization.     |

<br />

<HTMLBlock>{`
<style>
.InputGroupe2EvBGz2cnqy {
    display: flex;
    gap: 2px;
    position: relative;
}

.Button.APIRequest-example-button1DGMsfaOTVNW {
    /* Core working text behavior - don't change these *
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
    
    /* Only minimal visual updates *
    background: #1e2329;
    border: none;
    border-radius: 6px;
    color: #94a3b8;
    font-size: 13px;
}

/* Keep original text handling *
.Button.APIRequest-example-button1DGMsfaOTVNW span,
.Button.APIRequest-example-button1DGMsfaOTVNW div {
    text-align: left;
    direction: ltr;
}

/* Keep original hover behavior *
.Button.APIRequest-example-button1DGMsfaOTVNW:hover {
    width: auto;
    z-index: 10;
    background: #262b33;
}

/* Simple active state *
.Button.APIRequest-example-button1DGMsfaOTVNW.APIRequest-example-button_activeXJeukHyaHZXB {
    z-index: 20;
    background: #2c333d;
    color: #ffffff;
}
</style>
`}</HTMLBlock>