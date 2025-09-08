---
title: Get Purchased Rewards for User in Connected Orgs
excerpt: ''
api:
  file: v1.json
  operationId: get-purchased-rewards-for-user-connected-org
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

> 👍 Note
>
> For detailed information about our APIs and for hands-on testing, refer documentation in [API overview](https:/docs.capillarytech.com/reference/apioverview) and  step-by-step guide on making your first API call in [Make your first API call](https:/docs.capillarytech.com/reference/make-your-first-api-call) .

> 🚧 **Warning**
>
> Use this API exclusively for connected orgs. For other orgs, use this [API](https:/docs.capillarytech.com/reference/get-rewards-for-user-new-api) instead.

# Prerequisites

*   Authentication: Basic or OAuth authentication
*   Default access group

# Resource information

|                        |                                                               |
| :--------------------- | :------------------------------------------------------------ |
| URL                    | /v1.1/user/user\_rewards?username=(tillid)\&mobile=`{mobile}` |
| Pagination             | No                                                            |
| Batch support          | No                                                            |
| Rate limit information | None                                                          |

# API endpoint example

`https:/eu.api.capillarytech.com/v1.1/user/user_rewards?username=(tillid)&mobile={mobile}`

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
        Supported headers: `SELF<code>, </code>OTHER` and `ALL`.
        Refer to connected orgs [data scopes](https:/docs.capillarytech.com/reference/connected-orgs-data-scopes)   for more information.
      </td>
    </tr>
  </tbody>
</Table>

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
        `mobile`/`email`/`externalId`
      </td>

      <td>
        String
      </td>

      <td>
        Mobile number, email, or external ID of the customer to fetch rewards. Ex: `9988776654`.
      </td>
    </tr>

    <tr>
      <td>
        `username`
      </td>

      <td>
        String
      </td>

      <td>
        Till ID used in the authorization of the request. Ex: `swati`.
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
        Pass `asc` to order the results in ascending order of `sortBy` value, `desc` to order in descending order. These are not case-sensitive.
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
        Sort the results by a specific parameter. Supported values: `REWARD_ID`, `INTOUCH_VOUCHER`, `INTOUCH_VOUCHER_EXPIRY`, `PURCHASE_DATE`. Default: `PURCHASE_DATE`.
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
        To retrieve details of a specific page. Pass `0` to not apply pagination. For example, `page=2&size=10` shows 10 results on page 2.
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
        Results to show per page. Default: `100`.
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
        Filter to be used to fetch specific types of rewards. Supported values: `INTOUCH_REWARD`, `VENDOR_INTOUCH_REWARD`, `VENDOR_ONLY_REWARD`, `CART_PROMOTION`.
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
        Filter to be used to fetch rewards by fetching the info based on purchase date.
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
        Filter to be used to fetch rewards by fetching the information based on the purchase date.
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
        Use the `rewardId` parameter to filter and return specific reward details.
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
        This parameter helps retrieve the coupon code in the desired letter cases. By default, the system automatically converts the coupon code to uppercase.
        Supported Values: `LOWER`, `UPPER`, `AS_IT_IS`

        <br />

        `LOWER` - Converts the coupon code to lowercase. Example: `"ABCD1234"` → `"abcd1234"`

        <br />

        `UPPER` - Converts the coupon code to uppercase. Example: `"abcd1234"` → `"ABCD1234"`

        <br />

        `AS_IT_IS` - Returns the coupon code exactly as it was created. Example: `"abAB123"` → `"abAB123"`
      </td>
    </tr>
  </tbody>
</Table>

<br />

```curl
https://eu.api.capillarytech.com/v1.1/user/user_rewards?username=(tillid)&mobile={mobile}
```
```curl With rewardId
curl --location 'https://devenv-crm.cc.capillarytech.com/api_gateway/rewards/core/v1.1/user/user_rewards?customerId=423789294&size=2&page=0&username=autostore1.till1-1680169221&mobile=916567807655&rewardId=38516' \
--header 'Accept: application/json' \
--header 'Content-Type: application/json' \
--header 'DATA-SCOPE: ALL' \
--header 'Authorization: Basic YXV0b3N0b3JlMS50aWxsMS0xNjgwMTY5MjIxOjIwMmNiOTYyYWM1OTA3NWI5NjRiMDcxNTJkMjM0Yjcw' \
--data ''
```
```curl With couponCodeCase filter
curl --location 'https://crm-staging-new.cc.capillarytech.com/api_gateway/rewards/core/v1.1/user/user_rewards?size=10&page=0&customerId=345635195&username=tillauto_123&mobile=917804307124&rewardId=139831&couponCodeCase=AS_IT_IS&typeOfReward=INTOUCH_REWARD' \
--header 'DATA-SCOPE: ALL' \
--header 'Authorization: Basic dGlsbGF1dG9fMTIzOjI3NDFlNjJiZTZiZTYyNGY2N2IwMGQxZDZhNWQ2MWJm'
```

# Response parameters

<Table>
  <thead>
    <tr>
      <th>
        Parameters
      </th>

      <th>
        Description
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        status
      </td>

      <td>
        Contains information about the success or failure of the API call, including a status code and a message.
      </td>
    </tr>

    <tr>
      <td>
        success
      </td>

      <td>
        Indicates whether the operation was successful (`true<code>) or not (</code>false`).
      </td>
    </tr>

    <tr>
      <td>
        code
      </td>

      <td>
        A numeric code representing the result of the operation (e.g., 200 for success).
      </td>
    </tr>

    <tr>
      <td>
        message
      </td>

      <td>
        A descriptive message providing additional context about the operation's outcome.
      </td>
    </tr>

    <tr>
      <td>
        rewards
      </td>

      <td>
        Contains details about the rewards issued to the user, including metadata, details, and redemption information.
      </td>
    </tr>

    <tr>
      <td>
        typeOfReward
      </td>

      <td>
        Indicates the type of reward, such as INTOUCH\_REWARD, VENDOR\_INTOUCH\_REWARD, VENDOR\_ONLY\_REWARD, CART\_PROMOTION, SWEEPSTAKES, GAMES.
      </td>
    </tr>

    <tr>
      <td>
        pointsRedeemed
      </td>

      <td>
        The number of points redeemed by the user for this reward.
      </td>
    </tr>

    <tr>
      <td>
        rewardId
      </td>

      <td>
        A unique identifier for the reward.
      </td>
    </tr>

    <tr>
      <td>
        transactionId
      </td>

      <td>
        The unique identifier for the transaction associated with this reward.
      </td>
    </tr>

    <tr>
      <td>
        issueRewardRefId
      </td>

      <td>
        A reference ID for the reward issuance, used for tracking.
      </td>
    </tr>

    <tr>
      <td>
        rewardIssueDate
      </td>

      <td>
        The date and time when the reward was issued, represented as a UNIX timestamp in milliseconds.
      </td>
    </tr>

    <tr>
      <td>
        userRewardExpiry
      </td>

      <td>
        The expiration date and time for the user’s reward, formatted as `YYYY-MM-DD HH:mm:ss`.
      </td>
    </tr>

    <tr>
      <td>
        userRewardDetails
      </td>

      <td>
        Provides additional details about the reward, including metadata and configurations.
      </td>
    </tr>

    <tr>
      <td>
        id
      </td>

      <td>
        A unique identifier for the reward.
      </td>
    </tr>

    <tr>
      <td>
        name
      </td>

      <td>
        The name of the reward as displayed in the system.
      </td>
    </tr>

    <tr>
      <td>
        description
      </td>

      <td>
        A brief text describing the reward and its features or purpose.
      </td>
    </tr>

    <tr>
      <td>
        imageId
      </td>

      <td>
        An identifier for the primary image associated with the reward.
      </td>
    </tr>

    <tr>
      <td>
        imageUrl
      </td>

      <td>
        A URL linking to the full-sized image of the reward.
      </td>
    </tr>

    <tr>
      <td>
        thumbnailId
      </td>

      <td>
        An identifier for the thumbnail image of the reward.
      </td>
    </tr>

    <tr>
      <td>
        thumbnailUrl
      </td>

      <td>
        A URL linking to the thumbnail-sized image of the reward.
      </td>
    </tr>

    <tr>
      <td>
        termAndConditionsId
      </td>

      <td>
        An identifier for the terms and conditions document associated with the reward.
      </td>
    </tr>

    <tr>
      <td>
        termAndConditionsUrl
      </td>

      <td>
        A URL linking to the terms and conditions document for the reward.
      </td>
    </tr>

    <tr>
      <td>
        tier
      </td>

      <td>
        Specifies the tier to which the reward belongs, often used in loyalty programs.
      </td>
    </tr>

    <tr>
      <td>
        label
      </td>

      <td>
        A tag or label associated with the reward for categorization or filtering.
      </td>
    </tr>

    <tr>
      <td>
        priority
      </td>

      <td>
        The priority level of the reward.
      </td>
    </tr>

    <tr>
      <td>
        intouchPoints
      </td>

      <td>
        The number of loyalty points required to redeem this reward.
      </td>
    </tr>

    <tr>
      <td>
        group
      </td>

      <td>
        Specifies the group or category associated with the reward.
      </td>
    </tr>

    <tr>
      <td>
        startTime
      </td>

      <td>
        The date and time when the reward becomes available for redemption, formatted as `YYYY-MM-DD HH:mm:ss`.
      </td>
    </tr>

    <tr>
      <td>
        endTime
      </td>

      <td>
        The date and time when the reward is no longer available for redemption, formatted as `YYYY-MM-DD HH:mm:ss`.
      </td>
    </tr>

    <tr>
      <td>
        expired
      </td>

      <td>
        Indicates whether the reward has expired.
      </td>
    </tr>

    <tr>
      <td>
        started
      </td>

      <td>
        Indicates whether the reward is currently active and can be redeemed .
      </td>
    </tr>

    <tr>
      <td>
        programId
      </td>

      <td>
        A unique identifier for the program under which the reward is issued.
      </td>
    </tr>

    <tr>
      <td>
        categoryList
      </td>

      <td>
        Lists the categories to which the reward belongs, often used for filtering or classification.
      </td>
    </tr>

    <tr>
      <td>
        id
      </td>

      <td>
        The unique identifier for a specific category associated with the reward.
      </td>
    </tr>

    <tr>
      <td>
        name
      </td>

      <td>
        The name of the category For example: "clothing".
      </td>
    </tr>

    <tr>
      <td>
        enabled
      </td>

      <td>
        Indicates whether the category is currently active and usable.
      </td>
    </tr>

    <tr>
      <td>
        customFields
      </td>

      <td>
        Contains custom fields defined for the reward, often as key-value pairs.
      </td>
    </tr>

    <tr>
      <td>
        loyaltyProgramCriteria
      </td>

      <td>
        Details the criteria for loyalty programs related to the reward.
      </td>
    </tr>

    <tr>
      <td>
        cardSeries
      </td>

      <td>
        A list of card codes associated with the reward.
      </td>
    </tr>

    <tr>
      <td>
        id
      </td>

      <td>
        Unique identifier of the card that was associated with the reward.
      </td>
    </tr>

    <tr>
      <td>
        code
      </td>

      <td>
        Unique series code of the card associated with the reward.
      </td>
    </tr>

    <tr>
      <td>
        labels
      </td>

      <td>
        List of Label IDs associated with the reward.
      </td>
    </tr>

    <tr>
      <td>
        groups
      </td>

      <td>
        Lists any specific groups associated with the reward, used for segmentation purposes.
      </td>
    </tr>

    <tr>
      <td>
        rewardRank
      </td>

      <td>
        The rank or position of the reward within its category or list.
      </td>
    </tr>

    <tr>
      <td>
        images
      </td>

      <td>
        A list of image details related to the reward.
      </td>
    </tr>

    <tr>
      <td>
        name
      </td>

      <td>
        Name of the image.
      </td>
    </tr>

    <tr>
      <td>
        altText
      </td>

      <td>
        Alternative text or description of the image.
      </td>
    </tr>

    <tr>
      <td>
        id
      </td>

      <td>
        Identifier for internally stored images, generated when uploaded to the file service. Not applicable for external images.
      </td>
    </tr>

    <tr>
      <td>
        url
      </td>

      <td>
        URL of the image.
      </td>
    </tr>

    <tr>
      <td>
        isExternal
      </td>

      <td>
        Indicates if the image is hosted on an external server.
      </td>
    </tr>

    <tr>
      <td>
        videos
      </td>

      <td>
        A list of video details related to the reward.
      </td>
    </tr>

    <tr>
      <td>
        name
      </td>

      <td>
        Name of the video.
      </td>
    </tr>

    <tr>
      <td>
        altText
      </td>

      <td>
        Alternative text or description of the video.
      </td>
    </tr>

    <tr>
      <td>
        id
      </td>

      <td>
        Identifier for internally stored videos, generated when uploaded to the file service. Not applicable for external videos.
      </td>
    </tr>

    <tr>
      <td>
        url
      </td>

      <td>
        URL of the video.
      </td>
    </tr>

    <tr>
      <td>
        isExternal
      </td>

      <td>
        Indicates if the video is hosted on an external server.
      </td>
    </tr>

    <tr>
      <td>
        revenueDetails
      </td>

      <td>
        Provides revenue-related information for the reward.
      </td>
    </tr>

    <tr>
      <td>
        paymentDetails
      </td>

      <td>
        Contains details about the payment configuration for the reward, including mode and identifier.
      </td>
    </tr>

    <tr>
      <td>
        paymentMode
      </td>

      <td>
        Specifies the payment mode for the reward, such as "FREE".
      </td>
    </tr>

    <tr>
      <td>
        id
      </td>

      <td>
        The unique identifier for the payment configuration.
      </td>
    </tr>

    <tr>
      <td>
        redemptionDetails
      </td>

      <td>
        Includes details about how the reward can be redeemed, such as type and value.
      </td>
    </tr>

    <tr>
      <td>
        redemptionType
      </td>

      <td>
        Specifies the type of redemption.
      </td>
    </tr>

    <tr>
      <td>
        redemptionValue
      </td>

      <td>
        The value associated with the redemption.
      </td>
    </tr>

    <tr>
      <td>
        transactionCustomFields
      </td>

      <td>
        Custom fields defined for the transaction.
      </td>
    </tr>

    <tr>
      <td>
        fulfillmentDetails
      </td>

      <td>
        Contains fulfillment-specific information for the reward.
      </td>
    </tr>

    <tr>
      <td>
        code
      </td>

      <td>
        A unique code associated with the reward, often used for tracking or redemption purposes.
        **Note**: The casing of the coupon code is based on the couponCodeCase query parameter.
      </td>
    </tr>

    <tr>
      <td>
        vendor
      </td>

      <td>
        The vendor associated with the reward.
      </td>
    </tr>

    <tr>
      <td>
        seriesId
      </td>

      <td>
        An identifier for the series or batch of the reward, used for tracking and categorization.
      </td>
    </tr>

    <tr>
      <td>
        intouchUserId
      </td>

      <td>
        The unique identifier of the user in the system, often used for personalization and tracking.
      </td>
    </tr>

    <tr>
      <td>
        pagingDto
      </td>

      <td>
        Provides details about the pagination of the results, such as total elements and pages.
      </td>
    </tr>

    <tr>
      <td>
        last
      </td>

      <td>
        Indicates whether this is the last page of results
      </td>
    </tr>

    <tr>
      <td>
        totalElements
      </td>

      <td>
        The total number of rewards returned by the query.
      </td>
    </tr>

    <tr>
      <td>
        totalPages
      </td>

      <td>
        The total number of pages available for the query results.
      </td>
    </tr>

    <tr>
      <td>
        numberOfElements
      </td>

      <td>
        The number of elements on the current page.
      </td>
    </tr>

    <tr>
      <td>
        first
      </td>

      <td>
        Indicates whether this is the first page of results
      </td>
    </tr>

    <tr>
      <td>
        size
      </td>

      <td>
        The number of elements per page, as specified in the query.
      </td>
    </tr>

    <tr>
      <td>
        number
      </td>

      <td>
        The current page number in the results.
      </td>
    </tr>

    <tr>
      <td>
        orgLevelRestrictions
      </td>

      <td>
        orgLevelRestrictions refers to a set of conditions that determine whether a reward or action is valid or accessible for specific organizations. This restriction is usually applied at the organization level to control which organizations can view, access, or redeem the rewards based on certain validation criteria. It will specify the connected orgs in which the restriction is applied.
      </td>
    </tr>

    <tr>
      <td>
        isValid
      </td>

      <td>
        Specifies if the restriction is valid or not
      </td>
    </tr>

    <tr>
      <td>
        orgId
      </td>

      <td>
        Specifies the org ID of the reward.
      </td>
    </tr>
  </tbody>
</Table>

<br />

```json Response: With DATA-SCOPE as OTHER
{
    "status": {
        "success": true,
        "code": 200,
        "message": "User Reward fetched successfully"
    },
    "rewards": [
        {
            "typeOfReward": "INTOUCH_REWARD",
            "pointsRedeemed": 1000,
            "rewardId": 154444,
            "transactionId": 232254,
            "issueRewardRefId": "TX2262531",
            "rewardIssueDate": 1723525599000,
            "userRewardExpiry": "2035-04-30 00:00:00",
            "userRewardDetails": {
                "id": 154444,
                "name": "50% off on planet fitness subscription",
                "description": "Burn 1000 points and get 50% off on planet fitness subscription",
                "imageId": "733aa751-6772-40a4-a3a1-38e64178410d",
                "imageUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/3b4d33c3-230e-446f-b987-cae428a6.jpg",
                "thumbnailId": "c11743a8-f353-4449-8242-1af679840a31",
                "thumbnailUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/e7391686-2952-4c92-ad61-9684e938.jpg",
                "termAndConditionsId": "fe4a03ef-8749-45ae-9c28-59e4dc066eff",
                "termAndConditionsUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/a7862c4c-1545-4d43-a696-8094402.html",
                "tier": null,
                "label": null,
                "priority": 1,
                "intouchPoints": 1000,
                "group": "Health",
                "startTime": "2024-04-17 12:54:00",
                "endTime": "2030-10-31 11:59:30",
                "expired": false,
                "started": false,
                "programId": null,
                "categoryList": [
                    {
                        "id": 20,
                        "name": "groceries",
                        "enabled": true
                    }
                ],
                "loyaltyProgramCriteria": null,
                "groups": [
                    {
                        "groupName": "Recommended Rewards",
                        "groupRank": null
                    }
                ],
                "rewardRank": 4,
                "images": [],
                "videos": []
            },
            "revenueDetails": null,
            "paymentDetails": null,
            "redemptionDetails": null,
            "transactionCustomFields": null,
            "fulfillmentDetails": null,
            "code": "C1TH8O7S",
            "vendor": null,
            "seriesId": "16745"
        },
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
                "cards": [
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
        },
        {
            "typeOfReward": "CART_PROMOTION",
            "pointsRedeemed": 3000,
            "rewardId": 158644,
            "transactionId": 232253,
            "issueRewardRefId": "TX3558027",
            "rewardIssueDate": 1723525590000,
            "userRewardExpiry": "2024-08-31 15:59:59",
            "userRewardDetails": {
                "id": 158644,
                "name": "$20 Reward ",
                "description": "$20 Reward ",
                "imageId": "4788334a-57fd-4df3-8f71-973151543f99",
                "imageUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/f67065d7-468a-40fc-92da-fbd2cd6a.png",
                "thumbnailId": "310b3173-da9f-40da-b39e-41f1e16665bd",
                "thumbnailUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/b716c275-85e7-4b91-91c1-ece19ada.png",
                "termAndConditionsId": "d6aa0180-7eb1-4a90-99b7-e733ef7cb722",
                "termAndConditionsUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/5c5f19b3-971a-4a2d-affc-b4f6193.html",
                "tier": "",
                "label": "",
                "priority": 1,
                "intouchPoints": 3000,
                "group": "",
                "startTime": "2024-04-25 18:34:50",
                "endTime": "2025-11-18 18:34:50",
                "expired": false,
                "started": false,
                "programId": null,
                "categoryList": [
                    {
                        "id": 22,
                        "name": "accessories",
                        "enabled": true
                    }
                ],
                "loyaltyProgramCriteria": null,
                "groups": [],
                "rewardRank": null,
                "images": [],
                "videos": []
            },
            "revenueDetails": null,
            "paymentDetails": null,
            "redemptionDetails": null,
            "transactionCustomFields": null,
            "fulfillmentDetails": null,
            "name": "$20 Reward ",
            "promotionEarnedId": "66bae9d57e9655613506702e"
        },
        {
            "typeOfReward": "INTOUCH_REWARD",
            "pointsRedeemed": 1000,
            "rewardId": 191953,
            "transactionId": 232252,
            "issueRewardRefId": "TX9611696",
            "rewardIssueDate": 1723525581000,
            "userRewardExpiry": "2024-11-30 00:00:00",
            "userRewardDetails": {
                "id": 191953,
                "name": "10% coupon on 500ml Fresh Milk",
                "description": "10% coupon on 500ml Fresh Milk ",
                "imageId": "369e6ce5-f689-4620-921f-1b19cdf30f88",
                "imageUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/fa194405-1c55-41ec-a2f3-ed6af147.png",
                "thumbnailId": "11202e09-f039-4330-addd-3a54e6afe90f",
                "thumbnailUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/61f077d8-851c-43d2-b10b-4d230392.png",
                "termAndConditionsId": "90f9c228-5f37-468a-9774-19bcf5e89a4c",
                "termAndConditionsUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/cc95decd-c2c7-44e3-8045-40318a1.html",
                "tier": null,
                "label": "accessories",
                "priority": 1,
                "intouchPoints": 1000,
                "group": null,
                "startTime": "2024-06-28 14:36:33",
                "endTime": "2025-06-05 14:36:33",
                "expired": false,
                "started": false,
                "programId": null,
                "categoryList": [
                    {
                        "id": 22,
                        "name": "accessories",
                        "enabled": true
                    }
                ],
                "loyaltyProgramCriteria": null,
                "groups": [],
                "rewardRank": null,
                "images": [],
                "videos": []
            },
            "revenueDetails": null,
            "paymentDetails": null,
            "redemptionDetails": null,
            "transactionCustomFields": null,
            "fulfillmentDetails": null,
            "code": "1T1B7M0J",
            "vendor": null,
            "seriesId": "20735"
        },
        {
            "typeOfReward": "INTOUCH_REWARD",
            "pointsRedeemed": 1000,
            "rewardId": 191953,
            "transactionId": 232251,
            "issueRewardRefId": "TX4850125",
            "rewardIssueDate": 1723525577000,
            "userRewardExpiry": "2024-11-30 00:00:00",
            "userRewardDetails": {
                "id": 191953,
                "name": "10% coupon on 500ml Fresh Milk",
                "description": "10% coupon on 500ml Fresh Milk ",
                "imageId": "369e6ce5-f689-4620-921f-1b19cdf30f88",
                "imageUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/fa194405-1c55-41ec-a2f3-ed6af147.png",
                "thumbnailId": "11202e09-f039-4330-addd-3a54e6afe90f",
                "thumbnailUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/61f077d8-851c-43d2-b10b-4d230392.png",
                "termAndConditionsId": "90f9c228-5f37-468a-9774-19bcf5e89a4c",
                "termAndConditionsUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/cc95decd-c2c7-44e3-8045-40318a1.html",
                "tier": null,
                "label": "accessories",
                "priority": 1,
                "intouchPoints": 1000,
                "group": null,
                "startTime": "2024-06-28 14:36:33",
                "endTime": "2025-06-05 14:36:33",
                "expired": false,
                "started": false,
                "programId": null,
                "categoryList": [
                    {
                        "id": 22,
                        "name": "accessories",
                        "enabled": true
                    }
                ],
                "loyaltyProgramCriteria": null,
                "groups": [],
                "rewardRank": null,
                "images": [],
                "videos": []
            },
            "revenueDetails": null,
            "paymentDetails": null,
            "redemptionDetails": null,
            "transactionCustomFields": null,
            "fulfillmentDetails": null,
            "code": "LHGJWB3E",
            "vendor": null,
            "seriesId": "20735"
        },
        {
            "typeOfReward": "INTOUCH_REWARD",
            "pointsRedeemed": 15000,
            "rewardId": 191956,
            "transactionId": 232250,
            "issueRewardRefId": "TX6800030",
            "rewardIssueDate": 1723525564000,
            "userRewardExpiry": "2025-02-28 00:00:00",
            "userRewardDetails": {
                "id": 191956,
                "name": "500 OFF on you next FlyDubai flight",
                "description": "500 OFF on you next FlyDubai flight",
                "imageId": "f0c7f8ae-b760-400c-981e-4e59aa4bf1ae",
                "imageUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/5feb2ddb-0d1f-49df-bf7c-5852b604.jpg",
                "thumbnailId": "e011233a-389b-4826-a748-6c1d1333789a",
                "thumbnailUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/83f35eb1-8c8f-487f-a132-bae98cb4.jpg",
                "termAndConditionsId": "7864d879-7d04-470a-83c2-b0d58bf6e2ee",
                "termAndConditionsUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/0f73b036-f419-4e46-97ee-e343e4a.html",
                "tier": null,
                "label": "accessories",
                "priority": 4,
                "intouchPoints": 15000,
                "group": null,
                "startTime": "2024-06-28 14:44:53",
                "endTime": "2025-06-28 14:44:53",
                "expired": false,
                "started": false,
                "programId": null,
                "categoryList": [
                    {
                        "id": 22,
                        "name": "accessories",
                        "enabled": true
                    }
                ],
                "loyaltyProgramCriteria": null,
                "groups": [],
                "rewardRank": null,
                "images": [],
                "videos": []
            },
            "revenueDetails": null,
            "paymentDetails": null,
            "redemptionDetails": null,
            "transactionCustomFields": null,
            "fulfillmentDetails": {
                "status": "Order confirmed"
            },
            "code": "CHEOYNAJ",
            "vendor": null,
            "seriesId": "20738"
        }
    ],
    "intouchUserId": "62090013",
    "pagingDto": {
        "last": true,
        "totalElements": 5,
        "totalPages": 1,
        "numberOfElements": 5,
        "first": false,
        "size": 5,
        "number": 5
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
```json Response: With DATA-SCOPE as SELF
{
    "status": {
        "success": true,
        "code": 200,
        "message": "User Reward fetched successfully"
    },
    "rewards": [
        {
            "typeOfReward": "INTOUCH_REWARD",
            "pointsRedeemed": 1000,
            "rewardId": 154444,
            "transactionId": 232254,
            "issueRewardRefId": "TX2262531",
            "rewardIssueDate": 1723525599000,
            "userRewardExpiry": "2035-04-30 00:00:00",
            "userRewardDetails": {
                "id": 154444,
                "name": "50% off on planet fitness subscription",
                "description": "Burn 1000 points and get 50% off on planet fitness subscription",
                "imageId": "733aa751-6772-40a4-a3a1-38e64178410d",
                "imageUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/3b4d33c3-230e-446f-b987-cae428a6.jpg",
                "thumbnailId": "c11743a8-f353-4449-8242-1af679840a31",
                "thumbnailUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/e7391686-2952-4c92-ad61-9684e938.jpg",
                "termAndConditionsId": "fe4a03ef-8749-45ae-9c28-59e4dc066eff",
                "termAndConditionsUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/a7862c4c-1545-4d43-a696-8094402.html",
                "tier": null,
                "label": null,
                "priority": 1,
                "intouchPoints": 1000,
                "group": "Health",
                "startTime": "2024-04-17 12:54:00",
                "endTime": "2030-10-31 11:59:30",
                "expired": false,
                "started": false,
                "programId": null,
                "categoryList": [
                    {
                        "id": 20,
                        "name": "groceries",
                        "enabled": true
                    }
                ],
                "loyaltyProgramCriteria": null,
                "groups": [
                    {
                        "groupName": "Recommended Rewards",
                        "groupRank": null
                    }
                ],
                "rewardRank": 4,
                "images": [],
                "videos": []
            },
            "revenueDetails": null,
            "paymentDetails": null,
            "redemptionDetails": null,
            "transactionCustomFields": null,
            "fulfillmentDetails": null,
            "code": "C1TH8O7S",
            "vendor": null,
            "seriesId": "16745"
        },
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
                "cards": [
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
        },
        {
            "typeOfReward": "CART_PROMOTION",
            "pointsRedeemed": 3000,
            "rewardId": 158644,
            "transactionId": 232253,
            "issueRewardRefId": "TX3558027",
            "rewardIssueDate": 1723525590000,
            "userRewardExpiry": "2024-08-31 15:59:59",
            "userRewardDetails": {
                "id": 158644,
                "name": "$20 Reward ",
                "description": "$20 Reward ",
                "imageId": "4788334a-57fd-4df3-8f71-973151543f99",
                "imageUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/f67065d7-468a-40fc-92da-fbd2cd6a.png",
                "thumbnailId": "310b3173-da9f-40da-b39e-41f1e16665bd",
                "thumbnailUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/b716c275-85e7-4b91-91c1-ece19ada.png",
                "termAndConditionsId": "d6aa0180-7eb1-4a90-99b7-e733ef7cb722",
                "termAndConditionsUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/5c5f19b3-971a-4a2d-affc-b4f6193.html",
                "tier": "",
                "label": "",
                "priority": 1,
                "intouchPoints": 3000,
                "group": "",
                "startTime": "2024-04-25 18:34:50",
                "endTime": "2025-11-18 18:34:50",
                "expired": false,
                "started": false,
                "programId": null,
                "categoryList": [
                    {
                        "id": 22,
                        "name": "accessories",
                        "enabled": true
                    }
                ],
                "loyaltyProgramCriteria": null,
                "groups": [],
                "rewardRank": null,
                "images": [],
                "videos": []
            },
            "revenueDetails": null,
            "paymentDetails": null,
            "redemptionDetails": null,
            "transactionCustomFields": null,
            "fulfillmentDetails": null,
            "name": "$20 Reward ",
            "promotionEarnedId": "66bae9d57e9655613506702e"
        },
        {
            "typeOfReward": "INTOUCH_REWARD",
            "pointsRedeemed": 1000,
            "rewardId": 191953,
            "transactionId": 232252,
            "issueRewardRefId": "TX9611696",
            "rewardIssueDate": 1723525581000,
            "userRewardExpiry": "2024-11-30 00:00:00",
            "userRewardDetails": {
                "id": 191953,
                "name": "10% coupon on 500ml Fresh Milk",
                "description": "10% coupon on 500ml Fresh Milk ",
                "imageId": "369e6ce5-f689-4620-921f-1b19cdf30f88",
                "imageUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/fa194405-1c55-41ec-a2f3-ed6af147.png",
                "thumbnailId": "11202e09-f039-4330-addd-3a54e6afe90f",
                "thumbnailUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/61f077d8-851c-43d2-b10b-4d230392.png",
                "termAndConditionsId": "90f9c228-5f37-468a-9774-19bcf5e89a4c",
                "termAndConditionsUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/cc95decd-c2c7-44e3-8045-40318a1.html",
                "tier": null,
                "label": "accessories",
                "priority": 1,
                "intouchPoints": 1000,
                "group": null,
                "startTime": "2024-06-28 14:36:33",
                "endTime": "2025-06-05 14:36:33",
                "expired": false,
                "started": false,
                "programId": null,
                "categoryList": [
                    {
                        "id": 22,
                        "name": "accessories",
                        "enabled": true
                    }
                ],
                "loyaltyProgramCriteria": null,
                "groups": [],
                "rewardRank": null,
                "images": [],
                "videos": []
            },
            "revenueDetails": null,
            "paymentDetails": null,
            "redemptionDetails": null,
            "transactionCustomFields": null,
            "fulfillmentDetails": null,
            "code": "1T1B7M0J",
            "vendor": null,
            "seriesId": "20735"
        },
        {
            "typeOfReward": "INTOUCH_REWARD",
            "pointsRedeemed": 1000,
            "rewardId": 191953,
            "transactionId": 232251,
            "issueRewardRefId": "TX4850125",
            "rewardIssueDate": 1723525577000,
            "userRewardExpiry": "2024-11-30 00:00:00",
            "userRewardDetails": {
                "id": 191953,
                "name": "10% coupon on 500ml Fresh Milk",
                "description": "10% coupon on 500ml Fresh Milk ",
                "imageId": "369e6ce5-f689-4620-921f-1b19cdf30f88",
                "imageUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/fa194405-1c55-41ec-a2f3-ed6af147.png",
                "thumbnailId": "11202e09-f039-4330-addd-3a54e6afe90f",
                "thumbnailUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/61f077d8-851c-43d2-b10b-4d230392.png",
                "termAndConditionsId": "90f9c228-5f37-468a-9774-19bcf5e89a4c",
                "termAndConditionsUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/cc95decd-c2c7-44e3-8045-40318a1.html",
                "tier": null,
                "label": "accessories",
                "priority": 1,
                "intouchPoints": 1000,
                "group": null,
                "startTime": "2024-06-28 14:36:33",
                "endTime": "2025-06-05 14:36:33",
                "expired": false,
                "started": false,
                "programId": null,
                "categoryList": [
                    {
                        "id": 22,
                        "name": "accessories",
                        "enabled": true
                    }
                ],
                "loyaltyProgramCriteria": null,
                "groups": [],
                "rewardRank": null,
                "images": [],
                "videos": []
            },
            "revenueDetails": null,
            "paymentDetails": null,
            "redemptionDetails": null,
            "transactionCustomFields": null,
            "fulfillmentDetails": null,
            "code": "LHGJWB3E",
            "vendor": null,
            "seriesId": "20735"
        },
        {
            "typeOfReward": "INTOUCH_REWARD",
            "pointsRedeemed": 15000,
            "rewardId": 191956,
            "transactionId": 232250,
            "issueRewardRefId": "TX6800030",
            "rewardIssueDate": 1723525564000,
            "userRewardExpiry": "2025-02-28 00:00:00",
            "userRewardDetails": {
                "id": 191956,
                "name": "500 OFF on you next FlyDubai flight",
                "description": "500 OFF on you next FlyDubai flight",
                "imageId": "f0c7f8ae-b760-400c-981e-4e59aa4bf1ae",
                "imageUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/5feb2ddb-0d1f-49df-bf7c-5852b604.jpg",
                "thumbnailId": "e011233a-389b-4826-a748-6c1d1333789a",
                "thumbnailUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/83f35eb1-8c8f-487f-a132-bae98cb4.jpg",
                "termAndConditionsId": "7864d879-7d04-470a-83c2-b0d58bf6e2ee",
                "termAndConditionsUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/0f73b036-f419-4e46-97ee-e343e4a.html",
                "tier": null,
                "label": "accessories",
                "priority": 4,
                "intouchPoints": 15000,
                "group": null,
                "startTime": "2024-06-28 14:44:53",
                "endTime": "2025-06-28 14:44:53",
                "expired": false,
                "started": false,
                "programId": null,
                "categoryList": [
                    {
                        "id": 22,
                        "name": "accessories",
                        "enabled": true
                    }
                ],
                "loyaltyProgramCriteria": null,
                "groups": [],
                "rewardRank": null,
                "images": [],
                "videos": []
            },
            "revenueDetails": null,
            "paymentDetails": null,
            "redemptionDetails": null,
            "transactionCustomFields": null,
            "fulfillmentDetails": {
                "status": "Order confirmed"
            },
            "code": "CHEOYNAJ",
            "vendor": null,
            "seriesId": "20738"
        }
    ],
    "intouchUserId": "62090013",
    "pagingDto": {
        "last": true,
        "totalElements": 5,
        "totalPages": 1,
        "numberOfElements": 5,
        "first": false,
        "size": 5,
        "number": 5
    }
```
```json With 'altText' for images and videos
{
    "status": {
        "success": true,
        "code": 200,
        "message": "User Reward fetched successfully"
    },
    "rewards": [
        {
            "typeOfReward": "INTOUCH_REWARD",
            "pointsRedeemed": 1000,
            "rewardId": 154444,
            "transactionId": 232254,
            "issueRewardRefId": "TX2262531",
            "rewardIssueDate": 1723525599000,
            "userRewardExpiry": "2035-04-30 00:00:00",
            "userRewardDetails": {
                "id": 154444,
                "name": "50% off on planet fitness subscription",
                "description": "Burn 1000 points and get 50% off on planet fitness subscription",
                "imageId": "733aa751-6772-40a4-a3a1-38e64178410d",
                "imageUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/3b4d33c3-230e-446f-b987-cae428a6.jpg",
                "thumbnailId": "c11743a8-f353-4449-8242-1af679840a31",
                "thumbnailUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/e7391686-2952-4c92-ad61-9684e938.jpg",
                "termAndConditionsId": "fe4a03ef-8749-45ae-9c28-59e4dc066eff",
                "termAndConditionsUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/a7862c4c-1545-4d43-a696-8094402.html",
                "tier": null,
                "label": null,
                "priority": 1,
                "intouchPoints": 1000,
                "group": "Health",
                "startTime": "2024-04-17 12:54:00",
                "endTime": "2030-10-31 11:59:30",
                "expired": false,
                "started": false,
                "programId": null,
                "categoryList": [
                    {
                        "id": 20,
                        "name": "groceries",
                        "enabled": true
                    }
                ],
                "loyaltyProgramCriteria": null,
                "groups": [
                    {
                        "groupName": "Recommended Rewards",
                        "groupRank": null
                    }
                ],
                "rewardRank": 4,
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
            },
            "revenueDetails": null,
            "paymentDetails": null,
            "redemptionDetails": null,
            "transactionCustomFields": null,
            "fulfillmentDetails": null,
            "code": "C1TH8O7S",
            "vendor": null,
            "seriesId": "16745"
        },
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
                "cards": [
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
        },
        {
            "typeOfReward": "CART_PROMOTION",
            "pointsRedeemed": 3000,
            "rewardId": 158644,
            "transactionId": 232253,
            "issueRewardRefId": "TX3558027",
            "rewardIssueDate": 1723525590000,
            "userRewardExpiry": "2024-08-31 15:59:59",
            "userRewardDetails": {
                "id": 158644,
                "name": "$20 Reward ",
                "description": "$20 Reward ",
                "imageId": "4788334a-57fd-4df3-8f71-973151543f99",
                "imageUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/f67065d7-468a-40fc-92da-fbd2cd6a.png",
                "thumbnailId": "310b3173-da9f-40da-b39e-41f1e16665bd",
                "thumbnailUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/b716c275-85e7-4b91-91c1-ece19ada.png",
                "termAndConditionsId": "d6aa0180-7eb1-4a90-99b7-e733ef7cb722",
                "termAndConditionsUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/5c5f19b3-971a-4a2d-affc-b4f6193.html",
                "tier": "",
                "label": "",
                "priority": 1,
                "intouchPoints": 3000,
                "group": "",
                "startTime": "2024-04-25 18:34:50",
                "endTime": "2025-11-18 18:34:50",
                "expired": false,
                "started": false,
                "programId": null,
                "categoryList": [
                    {
                        "id": 22,
                        "name": "accessories",
                        "enabled": true
                    }
                ],
                "loyaltyProgramCriteria": null,
                "groups": [],
                "rewardRank": null,
                "images": [],
                "videos": []
            },
            "revenueDetails": null,
            "paymentDetails": null,
            "redemptionDetails": null,
            "transactionCustomFields": null,
            "fulfillmentDetails": null,
            "name": "$20 Reward ",
            "promotionEarnedId": "66bae9d57e9655613506702e"
        },
        {
            "typeOfReward": "INTOUCH_REWARD",
            "pointsRedeemed": 1000,
            "rewardId": 191953,
            "transactionId": 232252,
            "issueRewardRefId": "TX9611696",
            "rewardIssueDate": 1723525581000,
            "userRewardExpiry": "2024-11-30 00:00:00",
            "userRewardDetails": {
                "id": 191953,
                "name": "10% coupon on 500ml Fresh Milk",
                "description": "10% coupon on 500ml Fresh Milk ",
                "imageId": "369e6ce5-f689-4620-921f-1b19cdf30f88",
                "imageUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/fa194405-1c55-41ec-a2f3-ed6af147.png",
                "thumbnailId": "11202e09-f039-4330-addd-3a54e6afe90f",
                "thumbnailUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/61f077d8-851c-43d2-b10b-4d230392.png",
                "termAndConditionsId": "90f9c228-5f37-468a-9774-19bcf5e89a4c",
                "termAndConditionsUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/cc95decd-c2c7-44e3-8045-40318a1.html",
                "tier": null,
                "label": "accessories",
                "priority": 1,
                "intouchPoints": 1000,
                "group": null,
                "startTime": "2024-06-28 14:36:33",
                "endTime": "2025-06-05 14:36:33",
                "expired": false,
                "started": false,
                "programId": null,
                "categoryList": [
                    {
                        "id": 22,
                        "name": "accessories",
                        "enabled": true
                    }
                ],
                "loyaltyProgramCriteria": null,
                "groups": [],
                "rewardRank": null,
                "images": [],
                "videos": []
            },
            "revenueDetails": null,
            "paymentDetails": null,
            "redemptionDetails": null,
            "transactionCustomFields": null,
            "fulfillmentDetails": null,
            "code": "1T1B7M0J",
            "vendor": null,
            "seriesId": "20735"
        },
        {
            "typeOfReward": "INTOUCH_REWARD",
            "pointsRedeemed": 1000,
            "rewardId": 191953,
            "transactionId": 232251,
            "issueRewardRefId": "TX4850125",
            "rewardIssueDate": 1723525577000,
            "userRewardExpiry": "2024-11-30 00:00:00",
            "userRewardDetails": {
                "id": 191953,
                "name": "10% coupon on 500ml Fresh Milk",
                "description": "10% coupon on 500ml Fresh Milk ",
                "imageId": "369e6ce5-f689-4620-921f-1b19cdf30f88",
                "imageUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/fa194405-1c55-41ec-a2f3-ed6af147.png",
                "thumbnailId": "11202e09-f039-4330-addd-3a54e6afe90f",
                "thumbnailUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/61f077d8-851c-43d2-b10b-4d230392.png",
                "termAndConditionsId": "90f9c228-5f37-468a-9774-19bcf5e89a4c",
                "termAndConditionsUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/cc95decd-c2c7-44e3-8045-40318a1.html",
                "tier": null,
                "label": "accessories",
                "priority": 1,
                "intouchPoints": 1000,
                "group": null,
                "startTime": "2024-06-28 14:36:33",
                "endTime": "2025-06-05 14:36:33",
                "expired": false,
                "started": false,
                "programId": null,
                "categoryList": [
                    {
                        "id": 22,
                        "name": "accessories",
                        "enabled": true
                    }
                ],
                "loyaltyProgramCriteria": null,
                "groups": [],
                "rewardRank": null,
                "images": [],
                "videos": []
            },
            "revenueDetails": null,
            "paymentDetails": null,
            "redemptionDetails": null,
            "transactionCustomFields": null,
            "fulfillmentDetails": null,
            "code": "LHGJWB3E",
            "vendor": null,
            "seriesId": "20735"
        },
        {
            "typeOfReward": "INTOUCH_REWARD",
            "pointsRedeemed": 15000,
            "rewardId": 191956,
            "transactionId": 232250,
            "issueRewardRefId": "TX6800030",
            "rewardIssueDate": 1723525564000,
            "userRewardExpiry": "2025-02-28 00:00:00",
            "userRewardDetails": {
                "id": 191956,
                "name": "500 OFF on you next FlyDubai flight",
                "description": "500 OFF on you next FlyDubai flight",
                "imageId": "f0c7f8ae-b760-400c-981e-4e59aa4bf1ae",
                "imageUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/5feb2ddb-0d1f-49df-bf7c-5852b604.jpg",
                "thumbnailId": "e011233a-389b-4826-a748-6c1d1333789a",
                "thumbnailUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/83f35eb1-8c8f-487f-a132-bae98cb4.jpg",
                "termAndConditionsId": "7864d879-7d04-470a-83c2-b0d58bf6e2ee",
                "termAndConditionsUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/0f73b036-f419-4e46-97ee-e343e4a.html",
                "tier": null,
                "label": "accessories",
                "priority": 4,
                "intouchPoints": 15000,
                "group": null,
                "startTime": "2024-06-28 14:44:53",
                "endTime": "2025-06-28 14:44:53",
                "expired": false,
                "started": false,
                "programId": null,
                "categoryList": [
                    {
                        "id": 22,
                        "name": "accessories",
                        "enabled": true
                    }
                ],
                "loyaltyProgramCriteria": null,
                "groups": [],
                "rewardRank": null,
                "images": [],
                "videos": []
            },
            "revenueDetails": null,
            "paymentDetails": null,
            "redemptionDetails": null,
            "transactionCustomFields": null,
            "fulfillmentDetails": {
                "status": "Order confirmed"
            },
            "code": "CHEOYNAJ",
            "vendor": null,
            "seriesId": "20738"
        }
    ],
    "intouchUserId": "62090013",
    "pagingDto": {
        "last": true,
        "totalElements": 5,
        "totalPages": 1,
        "numberOfElements": 5,
        "first": false,
        "size": 5,
        "number": 5
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
```Text With rewardId
{
    "status": {
        "success": true,
        "code": 200,
        "message": "User Reward fetched successfully"
    },
    "rewards": [
        {
            "typeOfReward": "SWEEPSTAKES",
            "pointsRedeemed": 0,
            "rewardId": 38516,
            "orgId": 4000036,
            "transactionId": 93632,
            "issueRewardRefId": "1743059519",
            "rewardIssueDate": 1743059520000,
            "rewardIssueDateTime": "2025-03-27T07:12:00Z",
            "userRewardExpiry": null,
            "userRewardExpiryDateTime": null,
            "userRewardDetails": {
                "id": 38516,
                "name": "testReward0001",
                "description": "SWEEPSTAKES partner reward for test_Rewards_content_type_SWEEPSTAKES",
                "imageId": "EXDR12987U",
                "imageUrl": "https://s3.us-west-2.amazonaws.com/devenv-crm-solutionsvannnld9gg/marvel_automation/EXDR12987U?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQDCSSToMkJQMywkxrvb2yCq6q50SucpzaHQOP%2F0vKFmsgIhAMN4LfKvVjguEgzk0k%2Bv4TXb9WXv7Ki88oqttpjqZl5SKs4CCK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQBRoMNDg2NDU2OTg2MjY2IgzITqH38B1fCcAMDboqogI1IiNnlCCzuzvSr2MR0fmWrVdpQ8O3scPIj3xz8e4xR5971LqFgo5jaqo%2B7R1U5szZnDzIRBHBaMVPO2nMC1b%2BHmkEWMUrO0bhJHtJspLeNQ%2F39AlqMzkmjsL1c3aRPs3QRWIRfgRtXy7HL6BWua5Vt4HCvlXJRws1o8WCokp7oX39nD5iNUp01e0L5hjC8%2BpSE4SjHu7DkoRUa5%2Fvmgf8kaLiKg6T1vsMhRCmxvOdsCFP0m%2BqDyKzdDil6p7t6B5EbcJVna9CeWyZF2Eb8%2FAxxt0wMVkEzSfEb2tAZoDDmkhDPyInTPOZwqAyiZ52k2Wtsne7NVQlXw7XPykN5%2FOf7ZIG582YP%2FR6dj605IoBJ1%2F269pn3fJS5jBMtZ72guQz6jDq0f7ABjqcAdG%2Fd05ezvJ5SxQHGtup4pZ09D%2FiSMNY%2BTGFyZecq4invnnozMd9v%2FAzZYOtxPTKilceul5GOBQGfdLVrLtUZj94qmXJtbT6UnYwmUb3xRWyOo0pvFs5T8V5Tl%2F3S6EkhFye%2BTPokfWZVjzZQ8hVvGylFTbrVcKJr8BqeVnMmzVmc4CPlEL2oGhuLy2N6OGgdjFnMylUl%2FuYOmClkg%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20250510T192842Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3599&X-Amz-Credential=ASIAXCQYYRKNNGYMYILB%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Signature=dd4fa36ea3428891bce629b5da7c3456dd465cf1d1d575d099c3aa85f61ef1d1",
                "thumbnailId": "EXDR02987T",
                "thumbnailUrl": "https://s3.us-west-2.amazonaws.com/devenv-crm-solutionsvannnld9gg/marvel_automation/EXDR02987T?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQDCSSToMkJQMywkxrvb2yCq6q50SucpzaHQOP%2F0vKFmsgIhAMN4LfKvVjguEgzk0k%2Bv4TXb9WXv7Ki88oqttpjqZl5SKs4CCK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQBRoMNDg2NDU2OTg2MjY2IgzITqH38B1fCcAMDboqogI1IiNnlCCzuzvSr2MR0fmWrVdpQ8O3scPIj3xz8e4xR5971LqFgo5jaqo%2B7R1U5szZnDzIRBHBaMVPO2nMC1b%2BHmkEWMUrO0bhJHtJspLeNQ%2F39AlqMzkmjsL1c3aRPs3QRWIRfgRtXy7HL6BWua5Vt4HCvlXJRws1o8WCokp7oX39nD5iNUp01e0L5hjC8%2BpSE4SjHu7DkoRUa5%2Fvmgf8kaLiKg6T1vsMhRCmxvOdsCFP0m%2BqDyKzdDil6p7t6B5EbcJVna9CeWyZF2Eb8%2FAxxt0wMVkEzSfEb2tAZoDDmkhDPyInTPOZwqAyiZ52k2Wtsne7NVQlXw7XPykN5%2FOf7ZIG582YP%2FR6dj605IoBJ1%2F269pn3fJS5jBMtZ72guQz6jDq0f7ABjqcAdG%2Fd05ezvJ5SxQHGtup4pZ09D%2FiSMNY%2BTGFyZecq4invnnozMd9v%2FAzZYOtxPTKilceul5GOBQGfdLVrLtUZj94qmXJtbT6UnYwmUb3xRWyOo0pvFs5T8V5Tl%2F3S6EkhFye%2BTPokfWZVjzZQ8hVvGylFTbrVcKJr8BqeVnMmzVmc4CPlEL2oGhuLy2N6OGgdjFnMylUl%2FuYOmClkg%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20250510T192842Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIAXCQYYRKNNGYMYILB%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Signature=097194644d5f0cbcc75897cbc2c7424627d826eb490ed451319e0eaa51a43db2",
                "termAndConditionsId": "t&c",
                "termAndConditionsUrl": "https://s3.us-west-2.amazonaws.com/devenv-crm-solutionsvannnld9gg/marvel_automation/t%26c?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQDCSSToMkJQMywkxrvb2yCq6q50SucpzaHQOP%2F0vKFmsgIhAMN4LfKvVjguEgzk0k%2Bv4TXb9WXv7Ki88oqttpjqZl5SKs4CCK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQBRoMNDg2NDU2OTg2MjY2IgzITqH38B1fCcAMDboqogI1IiNnlCCzuzvSr2MR0fmWrVdpQ8O3scPIj3xz8e4xR5971LqFgo5jaqo%2B7R1U5szZnDzIRBHBaMVPO2nMC1b%2BHmkEWMUrO0bhJHtJspLeNQ%2F39AlqMzkmjsL1c3aRPs3QRWIRfgRtXy7HL6BWua5Vt4HCvlXJRws1o8WCokp7oX39nD5iNUp01e0L5hjC8%2BpSE4SjHu7DkoRUa5%2Fvmgf8kaLiKg6T1vsMhRCmxvOdsCFP0m%2BqDyKzdDil6p7t6B5EbcJVna9CeWyZF2Eb8%2FAxxt0wMVkEzSfEb2tAZoDDmkhDPyInTPOZwqAyiZ52k2Wtsne7NVQlXw7XPykN5%2FOf7ZIG582YP%2FR6dj605IoBJ1%2F269pn3fJS5jBMtZ72guQz6jDq0f7ABjqcAdG%2Fd05ezvJ5SxQHGtup4pZ09D%2FiSMNY%2BTGFyZecq4invnnozMd9v%2FAzZYOtxPTKilceul5GOBQGfdLVrLtUZj94qmXJtbT6UnYwmUb3xRWyOo0pvFs5T8V5Tl%2F3S6EkhFye%2BTPokfWZVjzZQ8hVvGylFTbrVcKJr8BqeVnMmzVmc4CPlEL2oGhuLy2N6OGgdjFnMylUl%2FuYOmClkg%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20250510T192842Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIAXCQYYRKNNGYMYILB%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Signature=766e8bb4707f7e17746b0a5dd6d40676a78ba2ae7dee364cba863dfb2f4d1d1a",
                "tier": "SILVER",
                "label": null,
                "priority": 1,
                "intouchPoints": 0,
                "group": null,
                "startTime": "2025-03-27 07:11:49",
                "startDateTime": "2025-03-27T07:11:49Z",
                "endTime": "2025-03-28 07:11:46",
                "endDateTime": "2025-03-28T07:11:46Z",
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
                    },
                    {
                        "id": 16,
                        "name": "c1",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 19,
                        "name": "d4bf787e2024-11-28 18:45:52.923388",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 20,
                        "name": "5ef98b022024-11-28 18:45:54.521546",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 21,
                        "name": "66dadce32024-11-28 18:47:58.865037",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 22,
                        "name": "84c5feeb2024-11-28 18:47:59.729731",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 23,
                        "name": "3158068d2024-12-19 09:17:05.217677",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 24,
                        "name": "a54ccc832024-12-19 09:17:06.313584",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 25,
                        "name": "4e85eff42024-12-19 09:17:09.025685",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 26,
                        "name": "62e4c06a2024-12-20 06:35:45.340814",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 27,
                        "name": "4ed8ff892024-12-20 06:35:46.435831",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 28,
                        "name": "bf9394122024-12-20 06:35:49.192237",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 29,
                        "name": "74e4469b2024-12-20 06:52:57.538744",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 30,
                        "name": "b6fbc3a02024-12-20 06:52:58.619825",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 31,
                        "name": "f5581cff2024-12-20 06:53:08.099684",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 32,
                        "name": "65c992832024-12-20 07:23:51.239004",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 33,
                        "name": "cf8e42672024-12-20 07:23:52.333457",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 34,
                        "name": "9d8e6a572024-12-20 07:23:54.853266",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 35,
                        "name": "3d500dee2024-12-20 07:23:55.922712",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 36,
                        "name": "c24064ff2024-12-20 07:23:58.356832",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 37,
                        "name": "9fb65c3f2024-12-20 07:46:45.726735",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 38,
                        "name": "7aace08b2024-12-20 07:46:46.796840",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 39,
                        "name": "311a8e742024-12-20 07:46:49.302177",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 40,
                        "name": "d518c69d2024-12-20 07:46:50.382926",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 41,
                        "name": "a8d648b02024-12-20 08:15:38.203255",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 42,
                        "name": "2ceac6d62024-12-20 08:15:39.274798",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 43,
                        "name": "d8dac9e22024-12-20 08:16:11.654114",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 44,
                        "name": "f6d83f602024-12-20 08:16:12.727474",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 45,
                        "name": "22286eeb2024-12-20 08:45:34.979688",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 46,
                        "name": "41ce90b42024-12-20 08:45:36.048551",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 47,
                        "name": "34710e5b2024-12-20 08:46:08.331884",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 48,
                        "name": "7acce2292024-12-20 08:46:09.400326",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 49,
                        "name": "4b8e57b62024-12-20 09:05:01.768667",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 50,
                        "name": "54ccb91e2024-12-20 09:05:02.841004",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 51,
                        "name": "a6d3a6142024-12-20 09:05:34.232674",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 52,
                        "name": "951897062024-12-20 09:05:35.297497",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 53,
                        "name": "ea5cf4a32024-12-20 10:37:08.852199",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 54,
                        "name": "a998b07a2024-12-20 10:37:09.928660",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 55,
                        "name": "c2242d0a2024-12-20 10:37:45.404719",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 56,
                        "name": "936ec16f2024-12-20 10:37:46.507918",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 57,
                        "name": "0f801cc42024-12-20 11:26:32.784058",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 58,
                        "name": "207bc9132024-12-20 11:26:33.853739",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 59,
                        "name": "5b5c7f4d2024-12-20 11:27:08.304743",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 60,
                        "name": "636960a92024-12-20 11:27:09.456687",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 61,
                        "name": "88783b372024-12-20 12:52:18.147226",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 62,
                        "name": "290cc3052024-12-20 12:52:19.255782",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 63,
                        "name": "0cc331ea2024-12-20 12:52:57.463030",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 64,
                        "name": "71c3d15b2024-12-20 12:52:58.581355",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 65,
                        "name": "a8f886312024-12-20 13:02:17.152375",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 66,
                        "name": "ec5ba3322024-12-20 13:02:18.467473",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 67,
                        "name": "1dceefc02024-12-20 13:02:54.142539",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 68,
                        "name": "974a8c942024-12-20 13:02:55.280086",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 69,
                        "name": "bddd93b32024-12-20 13:08:53.080295",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 70,
                        "name": "a0c0c8522024-12-20 13:08:54.251200",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 71,
                        "name": "873997542024-12-20 13:09:32.332928",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 72,
                        "name": "455f32db2024-12-20 13:09:33.460708",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 73,
                        "name": "d0f135f82024-12-20 16:15:15.576697",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 74,
                        "name": "89a4cb282024-12-20 16:15:16.653236",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 75,
                        "name": "f57498102024-12-20 16:15:37.553933",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 76,
                        "name": "ad8c46f42024-12-20 16:15:38.628153",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 77,
                        "name": "8457af0a2024-12-20 16:16:08.983385",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 78,
                        "name": "0462cbbd2024-12-20 16:16:10.092625",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 79,
                        "name": "cf1fa2be2024-12-20 17:04:39.614810",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 80,
                        "name": "0490b4ac2024-12-20 17:04:40.778703",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 81,
                        "name": "13e204c52024-12-20 17:05:05.883567",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 82,
                        "name": "fad781fd2024-12-20 17:05:06.999090",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 83,
                        "name": "00de8a9a2024-12-20 17:05:40.084840",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 84,
                        "name": "11508c772024-12-20 17:05:41.313083",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 85,
                        "name": "3880c8e32024-12-20 17:14:26.273928",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 86,
                        "name": "772bf2a72024-12-20 17:14:27.447795",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 87,
                        "name": "349d0f072024-12-20 17:14:49.565159",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 88,
                        "name": "50bdf0c62024-12-20 17:14:50.670678",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 89,
                        "name": "aec36c042024-12-20 17:15:22.700846",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 90,
                        "name": "548ef5e02024-12-20 17:15:23.797184",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 91,
                        "name": "6c3df83a2024-12-20 17:21:30.192664",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 92,
                        "name": "fba3a6e62024-12-20 17:21:31.452784",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 93,
                        "name": "c23d80892024-12-20 17:21:52.776094",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 94,
                        "name": "4611fa912024-12-20 17:21:53.865066",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 95,
                        "name": "826502b72024-12-20 17:22:24.989316",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 96,
                        "name": "da67fe532024-12-20 17:22:26.097090",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 97,
                        "name": "23e49d802024-12-20 17:51:42.300820",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 98,
                        "name": "3c58371d2024-12-20 17:51:43.410609",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 99,
                        "name": "f47795172024-12-20 17:52:08.866815",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 100,
                        "name": "e16b649f2024-12-20 17:52:09.934486",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 101,
                        "name": "c83d558e2024-12-20 17:52:44.150799",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 102,
                        "name": "8f8dfafe2024-12-20 17:52:45.317401",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 103,
                        "name": "7afc28fa2024-12-20 19:07:14.946264",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 104,
                        "name": "c49f662c2024-12-20 19:07:16.163831",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 105,
                        "name": "408cb1752024-12-20 19:07:51.007593",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 106,
                        "name": "436027602024-12-20 19:07:52.103117",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 107,
                        "name": "8214943a2024-12-20 19:08:24.809032",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 108,
                        "name": "146bf76d2024-12-20 19:08:25.929199",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 109,
                        "name": "1f318c6f2024-12-23 09:07:32.763119",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 110,
                        "name": "4d81eaa52024-12-23 09:07:33.884404",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 111,
                        "name": "49b085d92024-12-23 09:08:08.617806",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 112,
                        "name": "4fb019af2024-12-23 09:08:09.704422",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 113,
                        "name": "255c50ee2024-12-23 09:08:45.554796",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 114,
                        "name": "b57ced062024-12-23 09:08:46.618778",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 115,
                        "name": "faccb9762024-12-23 11:55:52.685648",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 116,
                        "name": "daa310ef2024-12-23 11:55:53.777801",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 117,
                        "name": "0905efcf2024-12-23 11:56:31.700457",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 118,
                        "name": "890f9b1a2024-12-23 11:56:32.793315",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 119,
                        "name": "6b73a9762024-12-23 11:57:08.679814",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 120,
                        "name": "151c359d2024-12-23 11:57:09.748403",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 121,
                        "name": "e1bdb0772024-12-23 12:02:07.313467",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 122,
                        "name": "d7e607c32024-12-23 12:02:08.402411",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 123,
                        "name": "06a7af4f2024-12-23 12:02:41.978502",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 124,
                        "name": "f9c3c5422024-12-23 12:02:43.060887",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 125,
                        "name": "e02686502024-12-23 12:03:14.226104",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 126,
                        "name": "5c5e97112024-12-23 12:03:15.291851",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 127,
                        "name": "1fcbd5272024-12-23 12:10:55.026618",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 128,
                        "name": "81d0a0072024-12-23 12:10:56.122110",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 129,
                        "name": "c1fff7502024-12-23 12:11:29.258372",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 130,
                        "name": "2a0bf1b32024-12-23 12:11:30.331217",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 131,
                        "name": "83880b2d2024-12-23 12:17:41.502426",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 132,
                        "name": "5756a7222024-12-23 12:17:42.594777",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 133,
                        "name": "edf75eef2024-12-23 12:18:20.334637",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 134,
                        "name": "521f0cc12024-12-23 12:18:21.409494",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 135,
                        "name": "ee1f21ad2024-12-23 12:36:34.571467",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 136,
                        "name": "124889ad2024-12-23 12:36:35.669235",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 137,
                        "name": "91ac275a2024-12-23 12:37:13.669843",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 138,
                        "name": "370fcc542024-12-23 12:37:14.752407",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 139,
                        "name": "674013852024-12-23 12:37:46.624173",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 140,
                        "name": "98cd87312024-12-23 12:37:47.694489",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 141,
                        "name": "5d4a826f2024-12-23 12:42:10.704407",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 142,
                        "name": "4bd0daa32024-12-23 12:42:11.848390",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 143,
                        "name": "828000592024-12-23 12:42:45.426620",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 144,
                        "name": "9b0db4b92024-12-23 12:42:46.498247",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 145,
                        "name": "4a9605e82024-12-23 12:43:17.623714",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 146,
                        "name": "674c2d802024-12-23 12:43:18.690647",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 147,
                        "name": "d31579a12024-12-23 12:50:56.419855",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 148,
                        "name": "abd129232024-12-23 12:50:57.516377",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 149,
                        "name": "cd68905a2024-12-23 12:51:30.213469",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 150,
                        "name": "c17c173c2024-12-23 12:51:31.280517",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 151,
                        "name": "e93a8aa62024-12-23 12:57:22.328072",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 152,
                        "name": "e9a118632024-12-23 12:57:23.401544",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 153,
                        "name": "13fe9b702024-12-23 12:57:55.955338",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 154,
                        "name": "8a6fb63f2024-12-23 12:57:57.062654",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 155,
                        "name": "6261a8ec2024-12-24 15:13:31.973629",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 156,
                        "name": "3eba51a02024-12-24 15:13:33.082201",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 157,
                        "name": "2c4483c52024-12-24 15:14:12.342791",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 158,
                        "name": "b5e8d25a2024-12-24 15:14:13.494439",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 159,
                        "name": "bc90cacb2024-12-24 15:14:46.644187",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 160,
                        "name": "da5a37762024-12-24 15:14:47.778547",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 161,
                        "name": "c29717162024-12-24 15:23:33.073337",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 162,
                        "name": "48da06fb2024-12-24 15:23:34.176482",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 163,
                        "name": "3d20b20d2024-12-24 15:24:12.921350",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 164,
                        "name": "872a801a2024-12-24 15:24:13.991732",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 165,
                        "name": "bc3a567f2024-12-24 15:30:47.637579",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 166,
                        "name": "e750ed302024-12-24 15:30:48.827714",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 167,
                        "name": "3ead14b92024-12-24 15:31:26.306009",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 168,
                        "name": "c1c97e292024-12-24 15:31:27.377228",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 169,
                        "name": "d447b6142024-12-24 16:01:22.191442",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 170,
                        "name": "ec218df22024-12-24 16:01:23.537407",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 171,
                        "name": "f1a8984b2024-12-24 16:02:00.206945",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 172,
                        "name": "15e713af2024-12-24 16:02:01.337714",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 173,
                        "name": "08c757ba2024-12-24 16:02:34.936834",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 174,
                        "name": "21c00b0c2024-12-24 16:02:36.002551",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 175,
                        "name": "28c0038c2024-12-24 16:10:59.557956",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 176,
                        "name": "ddd5dd422024-12-24 16:11:00.647705",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 177,
                        "name": "e6ef03962024-12-24 16:11:36.598899",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 178,
                        "name": "90c85c022024-12-24 16:11:37.721662",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 179,
                        "name": "cf24d57e2024-12-24 16:18:13.641609",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 180,
                        "name": "7327d7732024-12-24 16:18:14.734284",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 181,
                        "name": "79fadb112024-12-24 16:18:50.272903",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 182,
                        "name": "84d0f9402024-12-24 16:18:51.375390",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 183,
                        "name": "66030ee82024-12-24 16:58:31.434347",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 184,
                        "name": "12f18ef32024-12-24 16:58:32.501727",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 185,
                        "name": "a95bf3852024-12-27 10:20:21.707178",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 186,
                        "name": "24b99e8b2024-12-27 10:20:22.813253",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 187,
                        "name": "7b3a830c2024-12-27 15:12:04.238901",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 188,
                        "name": "1b9c260a2024-12-27 15:12:05.316000",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 189,
                        "name": "766d06b22024-12-27 15:21:46.420485",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 190,
                        "name": "c48b094c2024-12-27 15:21:47.597492",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 191,
                        "name": "0845a6722024-12-27 15:26:48.076516",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 192,
                        "name": "117ee3fa2024-12-27 15:26:49.162579",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 193,
                        "name": "5a0c7f072024-12-27 15:33:00.573713",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 194,
                        "name": "27f6215d2024-12-27 15:33:01.653791",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 195,
                        "name": "63aa134d2024-12-27 15:41:28.784567",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 196,
                        "name": "efcd1bbd2024-12-27 15:41:29.960746",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 197,
                        "name": "17feb43f2024-12-27 15:46:27.665153",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 198,
                        "name": "bc08c4102024-12-27 15:46:28.833741",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 199,
                        "name": "4a817f412024-12-28 14:00:25.354935",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 200,
                        "name": "dd3cd4732024-12-28 14:00:26.445833",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 201,
                        "name": "2d98a0442024-12-30 07:59:27.182312",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 202,
                        "name": "b8049b1a2024-12-30 07:59:28.284735",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 203,
                        "name": "371aca042024-12-30 08:00:06.726724",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 204,
                        "name": "c87db1292024-12-30 08:00:07.805584",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 205,
                        "name": "a78c81b62024-12-30 08:00:40.632087",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 206,
                        "name": "9b4c66062024-12-30 08:00:41.701833",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 207,
                        "name": "f649f2b72025-01-02 10:00:15.836698",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 208,
                        "name": "562666002025-01-02 10:00:16.945081",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 209,
                        "name": "32b982902025-01-02 11:56:36.307627",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 210,
                        "name": "21615e852025-01-02 11:56:37.423225",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 211,
                        "name": "6b1e8c8d2025-01-02 11:57:13.276781",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 212,
                        "name": "c47fbd9d2025-01-02 11:57:14.364759",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 213,
                        "name": "db2cd17d2025-01-02 11:57:45.903569",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 214,
                        "name": "b89c8d9a2025-01-02 11:57:47.022676",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 215,
                        "name": "b62977842025-01-06 13:12:42.471924",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 216,
                        "name": "5df3d4b92025-01-06 13:12:43.597749",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 217,
                        "name": "d882ac0b2025-01-06 13:13:21.227099",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 218,
                        "name": "1d6846fc2025-01-06 13:13:22.332902",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 219,
                        "name": "519b7bd82025-01-06 13:13:54.170575",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 220,
                        "name": "0b41b7762025-01-06 13:13:55.234986",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 221,
                        "name": "c6d3763f2025-01-06 18:23:05.495071",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 222,
                        "name": "b56833ab2025-01-06 18:23:06.596275",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 223,
                        "name": "2c74b44b2025-01-06 18:23:45.601882",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 224,
                        "name": "2f9349632025-01-06 18:23:46.664359",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 225,
                        "name": "54b7589c2025-01-06 18:24:18.507281",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 226,
                        "name": "460a3f5e2025-01-06 18:24:19.614505",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 227,
                        "name": "f71fe97c2025-01-08 21:11:13.881476",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 228,
                        "name": "246f08212025-01-08 21:11:15.667140",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 229,
                        "name": "2630a0ea2025-01-08 21:11:34.274752",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 230,
                        "name": "ad00ac242025-01-08 21:11:35.922739",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 231,
                        "name": "f4c17b072025-01-08 21:11:48.307238",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 232,
                        "name": "4ce4c4492025-01-08 21:11:49.930685",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 233,
                        "name": "8eccd22e2025-01-08 21:13:50.363417",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 234,
                        "name": "29bcbded2025-01-08 21:13:52.059753",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 235,
                        "name": "115417c02025-01-08 21:17:06.018918",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 236,
                        "name": "8ca785052025-01-08 21:17:07.649623",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 237,
                        "name": "3a3794bf2025-01-08 21:21:31.144903",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 238,
                        "name": "fc6f7ce12025-01-08 21:21:32.732095",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 239,
                        "name": "5c2ee1a02025-01-08 21:22:21.992152",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 240,
                        "name": "98928a3b2025-01-08 21:22:23.563287",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 241,
                        "name": "c39f13d32025-01-08 21:23:05.425322",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 242,
                        "name": "8930ce282025-01-08 21:23:07.005694",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 243,
                        "name": "57059b042025-01-09 15:12:41.484464",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 244,
                        "name": "4410725c2025-01-09 15:12:42.598922",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 245,
                        "name": "1f0103392025-01-09 15:13:21.149086",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 246,
                        "name": "ef366f2c2025-01-09 15:13:22.214522",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 247,
                        "name": "24628c2a2025-01-09 15:13:54.138137",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 248,
                        "name": "de06a4c22025-01-09 15:13:55.234687",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 249,
                        "name": "7e6af0902025-01-09 18:38:46.903407",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 250,
                        "name": "6a1e92062025-01-09 18:38:47.998025",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 251,
                        "name": "1ab5bd152025-01-09 18:39:25.767353",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 252,
                        "name": "b31147552025-01-09 18:39:26.853486",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 253,
                        "name": "d240e5e72025-01-09 18:39:58.874174",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 254,
                        "name": "12f0e9492025-01-09 18:39:59.945502",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 255,
                        "name": "5dd5bdb02025-01-10 18:23:10.245833",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 256,
                        "name": "d160a4e02025-01-10 18:23:11.400637",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 257,
                        "name": "8efff0f92025-01-10 18:23:51.946436",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 258,
                        "name": "944904622025-01-10 18:23:53.077891",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 259,
                        "name": "275835392025-01-10 18:24:26.343813",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 260,
                        "name": "c18a8a4e2025-01-10 18:24:27.501497",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 261,
                        "name": "a5d9679c2025-01-11 03:40:38.054476",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 262,
                        "name": "0cd757f32025-01-11 03:40:39.209086",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 263,
                        "name": "82d283562025-01-11 03:41:20.802040",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 264,
                        "name": "a4e9ddec2025-01-11 03:41:21.958059",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 265,
                        "name": "f8426d882025-01-11 03:41:54.088949",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 266,
                        "name": "165f24ff2025-01-11 03:41:55.226064",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 267,
                        "name": "b983f9c12025-01-13 13:15:29.734869",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 268,
                        "name": "eac9bb532025-01-13 13:15:30.828817",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 269,
                        "name": "ae1416892025-01-13 13:16:10.608253",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 270,
                        "name": "c7e5d8592025-01-13 13:16:11.681612",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 271,
                        "name": "493741a12025-01-13 13:16:42.886099",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 272,
                        "name": "cb2606ee2025-01-13 13:16:44.518697",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 273,
                        "name": "ae419fdd2025-01-13 13:25:13.621862",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 274,
                        "name": "7035675f2025-01-13 13:25:14.710629",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 275,
                        "name": "4bf70a472025-01-13 13:25:48.205038",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 276,
                        "name": "a38157c42025-01-13 13:25:49.287239",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 277,
                        "name": "cf4c2aba2025-01-13 13:26:20.361837",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 278,
                        "name": "7c4b795c2025-01-13 13:26:21.445370",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 279,
                        "name": "8f239e342025-01-13 13:32:21.201312",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 280,
                        "name": "11d7b9992025-01-13 13:32:22.270912",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 281,
                        "name": "55afc4ca2025-01-13 13:32:55.613342",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 282,
                        "name": "5a9a36162025-01-13 13:32:56.681546",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 283,
                        "name": "038fd2a22025-01-13 13:33:26.629795",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 284,
                        "name": "62e2d89a2025-01-13 13:33:27.702553",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 285,
                        "name": "7b56f80b2025-01-14 00:59:10.823294",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 286,
                        "name": "54b3788e2025-01-14 00:59:11.919149",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 287,
                        "name": "125b34602025-01-14 00:59:48.629977",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 288,
                        "name": "e8a4bb2a2025-01-14 00:59:49.702099",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 289,
                        "name": "d48dde662025-01-14 01:00:23.104775",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 290,
                        "name": "5e66236e2025-01-14 01:00:24.196109",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 291,
                        "name": "2c8666752025-01-14 01:09:11.253490",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 292,
                        "name": "d6a9b4e92025-01-14 01:09:12.338901",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 293,
                        "name": "af0748c62025-01-14 16:32:36.155065",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 294,
                        "name": "b75559992025-01-14 16:32:37.257352",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 295,
                        "name": "87966ad82025-01-14 16:33:25.109630",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 296,
                        "name": "d994964f2025-01-14 16:33:26.345098",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 297,
                        "name": "dd49a45f2025-01-14 16:34:01.616976",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 298,
                        "name": "26d85eec2025-01-14 16:34:02.760067",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 299,
                        "name": "203bef732025-01-14 22:49:22.715308",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 300,
                        "name": "032c54cb2025-01-14 22:49:23.825149",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 301,
                        "name": "09e5c7072025-01-14 22:50:04.423784",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 302,
                        "name": "a22424722025-01-14 22:50:05.516268",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 303,
                        "name": "cef77e342025-01-14 22:50:35.912463",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 304,
                        "name": "f552eb292025-01-14 22:50:36.999083",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 305,
                        "name": "98ae1a652025-01-14 23:00:15.458821",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 306,
                        "name": "bb0d14e02025-01-14 23:00:16.543996",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 307,
                        "name": "c06381aa2025-01-14 23:00:53.918240",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 308,
                        "name": "a369adcd2025-01-14 23:00:54.998959",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 309,
                        "name": "01525e572025-01-14 23:01:25.606104",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 310,
                        "name": "57c4bf2c2025-01-14 23:01:26.673782",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 311,
                        "name": "60aa41072025-01-16 10:29:32.366037",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 312,
                        "name": "f973543e2025-01-16 10:29:33.455659",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 313,
                        "name": "514997bb2025-01-16 10:30:10.222435",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 314,
                        "name": "71fca32a2025-01-16 10:30:11.311012",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 315,
                        "name": "3d19668b2025-01-16 10:30:43.825180",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 316,
                        "name": "33685cd92025-01-16 10:30:44.900128",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 317,
                        "name": "28bb2a6e2025-01-19 16:31:37.351403",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 318,
                        "name": "4d52bd232025-01-19 16:31:38.463934",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 319,
                        "name": "689731972025-01-19 16:32:17.219993",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 320,
                        "name": "34d8028b2025-01-19 16:32:18.308768",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 321,
                        "name": "02cda3192025-01-19 16:32:51.117910",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 322,
                        "name": "3695896e2025-01-19 16:32:52.207707",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 323,
                        "name": "51261dde2025-01-20 11:17:04.213482",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 324,
                        "name": "0e5afaf32025-01-20 11:17:05.352531",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 325,
                        "name": "09afb4622025-01-20 11:17:43.344203",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 326,
                        "name": "e38e92892025-01-20 11:17:44.435561",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 327,
                        "name": "0b94bbd02025-01-20 11:18:16.995539",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 328,
                        "name": "3ffe378d2025-01-20 11:18:18.124433",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 329,
                        "name": "fd6608062025-01-20 12:17:23.931687",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 330,
                        "name": "bb1dcd892025-01-20 12:17:25.056642",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 331,
                        "name": "87ead9cc2025-01-20 12:17:59.521606",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 332,
                        "name": "4980662e2025-01-20 12:18:00.591306",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 333,
                        "name": "eb9906ec2025-01-20 12:18:31.838885",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 334,
                        "name": "5e0360d52025-01-20 12:18:32.918167",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 335,
                        "name": "6c2276092025-01-20 18:57:41.751255",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 336,
                        "name": "11446a0c2025-01-20 18:57:42.854885",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 337,
                        "name": "0432eb8c2025-01-20 18:58:20.045236",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 338,
                        "name": "775567ba2025-01-20 18:58:21.139667",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 339,
                        "name": "2261167f2025-01-20 18:58:52.792395",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 340,
                        "name": "fb1898872025-01-20 18:58:53.871603",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 341,
                        "name": "56c6bc612025-01-20 19:07:53.722920",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 342,
                        "name": "7d4460d92025-01-20 19:07:54.815677",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 343,
                        "name": "bb8ed3a82025-01-20 19:08:31.794459",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 344,
                        "name": "e9cf61492025-01-20 19:08:32.872313",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 345,
                        "name": "235b14d32025-01-20 19:09:03.574713",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 346,
                        "name": "0423b85a2025-01-20 19:09:04.645314",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 347,
                        "name": "18efe9e22025-01-20 19:16:26.080435",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 348,
                        "name": "89aae6cf2025-01-20 19:16:27.149060",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 349,
                        "name": "8015638a2025-01-22 15:17:38.145862",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 350,
                        "name": "6b3691122025-01-22 15:17:39.222180",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 351,
                        "name": "09fded542025-01-22 15:18:13.699581",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 352,
                        "name": "bf3967972025-01-22 15:18:14.782511",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 353,
                        "name": "a34e8bf92025-01-22 15:18:47.876251",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 354,
                        "name": "18a2f4802025-01-22 15:18:48.954850",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 355,
                        "name": "c49d419f2025-01-23 20:27:53.876149",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 356,
                        "name": "fbc699012025-01-23 20:27:54.961935",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 357,
                        "name": "b4e3d15b2025-01-23 20:28:33.336764",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 358,
                        "name": "465580992025-01-23 20:28:34.420400",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 359,
                        "name": "bd08edbf2025-01-23 20:29:07.405394",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 360,
                        "name": "1dd7de902025-01-23 20:29:08.489529",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 361,
                        "name": "e5fc151d2025-01-24 10:23:54.092173",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 362,
                        "name": "58b3b6182025-01-24 10:23:55.181847",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 363,
                        "name": "12f263882025-01-24 10:24:29.269187",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 364,
                        "name": "394f9a372025-01-24 10:24:30.348487",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 365,
                        "name": "ed9180852025-01-24 10:25:05.028530",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 366,
                        "name": "db825eff2025-01-24 10:25:06.113803",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 367,
                        "name": "662780722025-01-24 11:31:23.882996",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 368,
                        "name": "7b9759872025-01-24 11:31:24.960169",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 369,
                        "name": "0de2be872025-01-24 11:32:00.727773",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 370,
                        "name": "49cfe3c52025-01-24 11:32:01.809435",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 371,
                        "name": "c608fa452025-01-24 11:32:33.903010",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 372,
                        "name": "1598711f2025-01-24 11:32:34.982922",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 373,
                        "name": "e3f1768a2025-01-27 11:16:29.686338",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 374,
                        "name": "0af4e6132025-01-27 11:16:30.774454",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 375,
                        "name": "fe3055ec2025-01-27 11:17:06.382877",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 376,
                        "name": "c821ed6a2025-01-27 11:17:07.465781",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 377,
                        "name": "492dec862025-01-27 11:17:38.652323",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 378,
                        "name": "b7ecdf692025-01-27 11:17:40.789802",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 379,
                        "name": "549c438d2025-01-28 16:38:47.464300",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 380,
                        "name": "88832cae2025-01-28 16:38:48.572922",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 381,
                        "name": "b38cf5572025-01-28 16:39:25.990331",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 382,
                        "name": "782fd89b2025-01-28 16:39:27.123204",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 383,
                        "name": "26562b322025-01-28 16:40:00.356058",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 384,
                        "name": "3a78a8bd2025-01-28 16:40:02.267407",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 385,
                        "name": "2ee2ad2f2025-01-28 17:49:06.048484",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 386,
                        "name": "27c918e52025-01-28 17:49:07.135427",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 387,
                        "name": "370bb7ec2025-01-28 17:49:43.276293",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 388,
                        "name": "87ac5ecd2025-01-28 17:49:44.406289",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 389,
                        "name": "0a3e69f72025-01-28 17:50:16.578162",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 390,
                        "name": "489781972025-01-28 17:50:17.669583",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 391,
                        "name": "23c5aaf72025-02-03 08:43:51.123888",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 392,
                        "name": "9c2851b42025-02-03 08:43:52.217827",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 393,
                        "name": "8db6a2f02025-02-03 08:44:32.174077",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 394,
                        "name": "36fb4f8e2025-02-03 08:44:33.256786",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 395,
                        "name": "2b5c42a62025-02-03 08:45:09.198091",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 396,
                        "name": "020e8c7f2025-02-03 08:45:10.696517",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 397,
                        "name": "5a6cb19e2025-02-03 13:58:03.636295",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 398,
                        "name": "94d55f922025-02-03 13:58:04.775689",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 399,
                        "name": "ecd56df82025-02-03 13:58:45.031058",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 400,
                        "name": "6562c0c22025-02-03 13:58:46.306338",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 401,
                        "name": "3062481f2025-02-03 13:59:25.454743",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 402,
                        "name": "e7abe04a2025-02-03 13:59:26.566566",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 403,
                        "name": "48a1f5022025-02-03 20:24:05.243221",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 404,
                        "name": "c8e186f22025-02-03 20:24:06.330626",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 405,
                        "name": "fe0e1db32025-02-03 20:24:47.677666",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 406,
                        "name": "ea005cd42025-02-03 20:24:48.869768",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 407,
                        "name": "830a55942025-02-03 20:25:30.640525",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 408,
                        "name": "201032c32025-02-03 20:25:31.909743",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 409,
                        "name": "778f95e82025-02-11 09:10:59.833312",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 410,
                        "name": "e628b5352025-02-11 09:11:00.926056",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 411,
                        "name": "b47f588a2025-02-11 09:11:37.158744",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 412,
                        "name": "8f0e7db72025-02-11 09:11:38.229058",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 413,
                        "name": "deb629b72025-02-11 09:12:09.572837",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 414,
                        "name": "9fbae0f12025-02-11 09:12:10.654457",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 415,
                        "name": "4df17f862025-02-14 10:10:48.815932",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 416,
                        "name": "4d571d772025-02-14 10:10:49.911547",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 417,
                        "name": "0d4e54402025-02-14 10:11:24.946017",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 418,
                        "name": "6866eee12025-02-14 10:11:26.022313",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 419,
                        "name": "c49ba3222025-02-14 10:11:57.034707",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 420,
                        "name": "b6128bef2025-02-14 10:11:58.104706",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 421,
                        "name": "3ffd78f32025-03-03 12:01:04.371810",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 422,
                        "name": "d4c042da2025-03-03 12:01:05.592744",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 423,
                        "name": "abaf48aa2025-03-03 12:01:43.417915",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 424,
                        "name": "12ca770d2025-03-03 12:01:44.555699",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 425,
                        "name": "5eff4ca02025-03-03 12:02:23.783030",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 426,
                        "name": "9722ad982025-03-03 12:02:24.914488",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 427,
                        "name": "2d1a98722025-03-04 15:46:09.275009",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 428,
                        "name": "28135e1e2025-03-04 15:46:10.362875",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 429,
                        "name": "5e08b6602025-03-04 15:46:43.923328",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 430,
                        "name": "a1614f2a2025-03-04 15:46:45.002373",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 431,
                        "name": "6dd7f3c82025-03-04 15:47:16.424563",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 432,
                        "name": "3b0713462025-03-04 15:47:17.562827",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 433,
                        "name": "bb132a142025-03-05 11:59:49.720481",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 434,
                        "name": "9bd376542025-03-05 11:59:50.811388",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 435,
                        "name": "32c47fb02025-03-05 12:00:24.464478",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 436,
                        "name": "a5dc582a2025-03-05 12:00:25.532251",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 437,
                        "name": "6de5c4322025-03-05 12:00:56.291423",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 438,
                        "name": "8d8585a32025-03-05 12:00:57.359596",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 439,
                        "name": "415a221c2025-03-05 12:59:39.401787",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 440,
                        "name": "41096c942025-03-05 12:59:40.467819",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 441,
                        "name": "57bcdde02025-03-05 13:00:13.448924",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 442,
                        "name": "38c00ac02025-03-05 13:00:14.527127",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 443,
                        "name": "9adb08752025-03-05 13:00:45.214305",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 444,
                        "name": "6584b74f2025-03-05 13:00:46.287724",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 445,
                        "name": "7ac1533b2025-03-14 00:17:50.224731",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 446,
                        "name": "842a9a532025-03-14 00:17:51.597587",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 447,
                        "name": "27d18e932025-03-14 00:18:39.905177",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 448,
                        "name": "f30b817b2025-03-14 00:18:41.037582",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 449,
                        "name": "1e7db0272025-03-14 00:19:16.091844",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 450,
                        "name": "d90065ba2025-03-14 00:19:17.172163",
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
                "groups": [],
                "rewardRank": null,
                "images": [],
                "videos": []
            },
            "revenueDetails": null,
            "paymentDetails": {
                "paymentMode": "CASH",
                "id": 1881,
                "cash": 10.0000
            },
            "redemptionDetails": {
                "redemptionType": "SWEEPSTAKES",
                "redemptionValue": null
            },
            "transactionCustomFields": null,
            "fulfillmentDetails": null,
            "issueDateTime": "2025-03-27T07:12:00Z",
            "eventDateTime": "2025-03-27T07:12:00Z",
            "code": null,
            "vendor": "{\"status\": \"{\\\"success\\\":true,\\\"code\\\":200,\\\"message\\\":\\\"Success\\\"}\", \"voucher\": \"MG5TQA9PM4I9GOVWL5Q84JLH4JWDWPSOPEDD3\", \"pointsRedeemed\": \"0\"}",
            "seriesId": null
        },
        {
            "typeOfReward": "SWEEPSTAKES",
            "pointsRedeemed": 0,
            "rewardId": 38516,
            "orgId": 4000036,
            "transactionId": 93631,
            "issueRewardRefId": "1743059515",
            "rewardIssueDate": 1743059518000,
            "rewardIssueDateTime": "2025-03-27T07:11:58Z",
            "userRewardExpiry": null,
            "userRewardExpiryDateTime": null,
            "userRewardDetails": {
                "id": 38516,
                "name": "testReward0001",
                "description": "SWEEPSTAKES partner reward for test_Rewards_content_type_SWEEPSTAKES",
                "imageId": "EXDR12987U",
                "imageUrl": "https://s3.us-west-2.amazonaws.com/devenv-crm-solutionsvannnld9gg/marvel_automation/EXDR12987U?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQDCSSToMkJQMywkxrvb2yCq6q50SucpzaHQOP%2F0vKFmsgIhAMN4LfKvVjguEgzk0k%2Bv4TXb9WXv7Ki88oqttpjqZl5SKs4CCK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQBRoMNDg2NDU2OTg2MjY2IgzITqH38B1fCcAMDboqogI1IiNnlCCzuzvSr2MR0fmWrVdpQ8O3scPIj3xz8e4xR5971LqFgo5jaqo%2B7R1U5szZnDzIRBHBaMVPO2nMC1b%2BHmkEWMUrO0bhJHtJspLeNQ%2F39AlqMzkmjsL1c3aRPs3QRWIRfgRtXy7HL6BWua5Vt4HCvlXJRws1o8WCokp7oX39nD5iNUp01e0L5hjC8%2BpSE4SjHu7DkoRUa5%2Fvmgf8kaLiKg6T1vsMhRCmxvOdsCFP0m%2BqDyKzdDil6p7t6B5EbcJVna9CeWyZF2Eb8%2FAxxt0wMVkEzSfEb2tAZoDDmkhDPyInTPOZwqAyiZ52k2Wtsne7NVQlXw7XPykN5%2FOf7ZIG582YP%2FR6dj605IoBJ1%2F269pn3fJS5jBMtZ72guQz6jDq0f7ABjqcAdG%2Fd05ezvJ5SxQHGtup4pZ09D%2FiSMNY%2BTGFyZecq4invnnozMd9v%2FAzZYOtxPTKilceul5GOBQGfdLVrLtUZj94qmXJtbT6UnYwmUb3xRWyOo0pvFs5T8V5Tl%2F3S6EkhFye%2BTPokfWZVjzZQ8hVvGylFTbrVcKJr8BqeVnMmzVmc4CPlEL2oGhuLy2N6OGgdjFnMylUl%2FuYOmClkg%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20250510T192842Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3599&X-Amz-Credential=ASIAXCQYYRKNNGYMYILB%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Signature=dd4fa36ea3428891bce629b5da7c3456dd465cf1d1d575d099c3aa85f61ef1d1",
                "thumbnailId": "EXDR02987T",
                "thumbnailUrl": "https://s3.us-west-2.amazonaws.com/devenv-crm-solutionsvannnld9gg/marvel_automation/EXDR02987T?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQDCSSToMkJQMywkxrvb2yCq6q50SucpzaHQOP%2F0vKFmsgIhAMN4LfKvVjguEgzk0k%2Bv4TXb9WXv7Ki88oqttpjqZl5SKs4CCK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQBRoMNDg2NDU2OTg2MjY2IgzITqH38B1fCcAMDboqogI1IiNnlCCzuzvSr2MR0fmWrVdpQ8O3scPIj3xz8e4xR5971LqFgo5jaqo%2B7R1U5szZnDzIRBHBaMVPO2nMC1b%2BHmkEWMUrO0bhJHtJspLeNQ%2F39AlqMzkmjsL1c3aRPs3QRWIRfgRtXy7HL6BWua5Vt4HCvlXJRws1o8WCokp7oX39nD5iNUp01e0L5hjC8%2BpSE4SjHu7DkoRUa5%2Fvmgf8kaLiKg6T1vsMhRCmxvOdsCFP0m%2BqDyKzdDil6p7t6B5EbcJVna9CeWyZF2Eb8%2FAxxt0wMVkEzSfEb2tAZoDDmkhDPyInTPOZwqAyiZ52k2Wtsne7NVQlXw7XPykN5%2FOf7ZIG582YP%2FR6dj605IoBJ1%2F269pn3fJS5jBMtZ72guQz6jDq0f7ABjqcAdG%2Fd05ezvJ5SxQHGtup4pZ09D%2FiSMNY%2BTGFyZecq4invnnozMd9v%2FAzZYOtxPTKilceul5GOBQGfdLVrLtUZj94qmXJtbT6UnYwmUb3xRWyOo0pvFs5T8V5Tl%2F3S6EkhFye%2BTPokfWZVjzZQ8hVvGylFTbrVcKJr8BqeVnMmzVmc4CPlEL2oGhuLy2N6OGgdjFnMylUl%2FuYOmClkg%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20250510T192842Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIAXCQYYRKNNGYMYILB%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Signature=097194644d5f0cbcc75897cbc2c7424627d826eb490ed451319e0eaa51a43db2",
                "termAndConditionsId": "t&c",
                "termAndConditionsUrl": "https://s3.us-west-2.amazonaws.com/devenv-crm-solutionsvannnld9gg/marvel_automation/t%26c?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQDCSSToMkJQMywkxrvb2yCq6q50SucpzaHQOP%2F0vKFmsgIhAMN4LfKvVjguEgzk0k%2Bv4TXb9WXv7Ki88oqttpjqZl5SKs4CCK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQBRoMNDg2NDU2OTg2MjY2IgzITqH38B1fCcAMDboqogI1IiNnlCCzuzvSr2MR0fmWrVdpQ8O3scPIj3xz8e4xR5971LqFgo5jaqo%2B7R1U5szZnDzIRBHBaMVPO2nMC1b%2BHmkEWMUrO0bhJHtJspLeNQ%2F39AlqMzkmjsL1c3aRPs3QRWIRfgRtXy7HL6BWua5Vt4HCvlXJRws1o8WCokp7oX39nD5iNUp01e0L5hjC8%2BpSE4SjHu7DkoRUa5%2Fvmgf8kaLiKg6T1vsMhRCmxvOdsCFP0m%2BqDyKzdDil6p7t6B5EbcJVna9CeWyZF2Eb8%2FAxxt0wMVkEzSfEb2tAZoDDmkhDPyInTPOZwqAyiZ52k2Wtsne7NVQlXw7XPykN5%2FOf7ZIG582YP%2FR6dj605IoBJ1%2F269pn3fJS5jBMtZ72guQz6jDq0f7ABjqcAdG%2Fd05ezvJ5SxQHGtup4pZ09D%2FiSMNY%2BTGFyZecq4invnnozMd9v%2FAzZYOtxPTKilceul5GOBQGfdLVrLtUZj94qmXJtbT6UnYwmUb3xRWyOo0pvFs5T8V5Tl%2F3S6EkhFye%2BTPokfWZVjzZQ8hVvGylFTbrVcKJr8BqeVnMmzVmc4CPlEL2oGhuLy2N6OGgdjFnMylUl%2FuYOmClkg%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20250510T192842Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIAXCQYYRKNNGYMYILB%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Signature=766e8bb4707f7e17746b0a5dd6d40676a78ba2ae7dee364cba863dfb2f4d1d1a",
                "tier": "SILVER",
                "label": null,
                "priority": 1,
                "intouchPoints": 0,
                "group": null,
                "startTime": "2025-03-27 07:11:49",
                "startDateTime": "2025-03-27T07:11:49Z",
                "endTime": "2025-03-28 07:11:46",
                "endDateTime": "2025-03-28T07:11:46Z",
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
                    },
                    {
                        "id": 16,
                        "name": "c1",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 19,
                        "name": "d4bf787e2024-11-28 18:45:52.923388",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 20,
                        "name": "5ef98b022024-11-28 18:45:54.521546",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 21,
                        "name": "66dadce32024-11-28 18:47:58.865037",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 22,
                        "name": "84c5feeb2024-11-28 18:47:59.729731",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 23,
                        "name": "3158068d2024-12-19 09:17:05.217677",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 24,
                        "name": "a54ccc832024-12-19 09:17:06.313584",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 25,
                        "name": "4e85eff42024-12-19 09:17:09.025685",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 26,
                        "name": "62e4c06a2024-12-20 06:35:45.340814",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 27,
                        "name": "4ed8ff892024-12-20 06:35:46.435831",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 28,
                        "name": "bf9394122024-12-20 06:35:49.192237",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 29,
                        "name": "74e4469b2024-12-20 06:52:57.538744",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 30,
                        "name": "b6fbc3a02024-12-20 06:52:58.619825",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 31,
                        "name": "f5581cff2024-12-20 06:53:08.099684",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 32,
                        "name": "65c992832024-12-20 07:23:51.239004",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 33,
                        "name": "cf8e42672024-12-20 07:23:52.333457",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 34,
                        "name": "9d8e6a572024-12-20 07:23:54.853266",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 35,
                        "name": "3d500dee2024-12-20 07:23:55.922712",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 36,
                        "name": "c24064ff2024-12-20 07:23:58.356832",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 37,
                        "name": "9fb65c3f2024-12-20 07:46:45.726735",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 38,
                        "name": "7aace08b2024-12-20 07:46:46.796840",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 39,
                        "name": "311a8e742024-12-20 07:46:49.302177",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 40,
                        "name": "d518c69d2024-12-20 07:46:50.382926",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 41,
                        "name": "a8d648b02024-12-20 08:15:38.203255",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 42,
                        "name": "2ceac6d62024-12-20 08:15:39.274798",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 43,
                        "name": "d8dac9e22024-12-20 08:16:11.654114",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 44,
                        "name": "f6d83f602024-12-20 08:16:12.727474",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 45,
                        "name": "22286eeb2024-12-20 08:45:34.979688",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 46,
                        "name": "41ce90b42024-12-20 08:45:36.048551",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 47,
                        "name": "34710e5b2024-12-20 08:46:08.331884",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 48,
                        "name": "7acce2292024-12-20 08:46:09.400326",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 49,
                        "name": "4b8e57b62024-12-20 09:05:01.768667",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 50,
                        "name": "54ccb91e2024-12-20 09:05:02.841004",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 51,
                        "name": "a6d3a6142024-12-20 09:05:34.232674",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 52,
                        "name": "951897062024-12-20 09:05:35.297497",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 53,
                        "name": "ea5cf4a32024-12-20 10:37:08.852199",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 54,
                        "name": "a998b07a2024-12-20 10:37:09.928660",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 55,
                        "name": "c2242d0a2024-12-20 10:37:45.404719",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 56,
                        "name": "936ec16f2024-12-20 10:37:46.507918",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 57,
                        "name": "0f801cc42024-12-20 11:26:32.784058",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 58,
                        "name": "207bc9132024-12-20 11:26:33.853739",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 59,
                        "name": "5b5c7f4d2024-12-20 11:27:08.304743",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 60,
                        "name": "636960a92024-12-20 11:27:09.456687",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 61,
                        "name": "88783b372024-12-20 12:52:18.147226",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 62,
                        "name": "290cc3052024-12-20 12:52:19.255782",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 63,
                        "name": "0cc331ea2024-12-20 12:52:57.463030",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 64,
                        "name": "71c3d15b2024-12-20 12:52:58.581355",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 65,
                        "name": "a8f886312024-12-20 13:02:17.152375",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 66,
                        "name": "ec5ba3322024-12-20 13:02:18.467473",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 67,
                        "name": "1dceefc02024-12-20 13:02:54.142539",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 68,
                        "name": "974a8c942024-12-20 13:02:55.280086",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 69,
                        "name": "bddd93b32024-12-20 13:08:53.080295",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 70,
                        "name": "a0c0c8522024-12-20 13:08:54.251200",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 71,
                        "name": "873997542024-12-20 13:09:32.332928",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 72,
                        "name": "455f32db2024-12-20 13:09:33.460708",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 73,
                        "name": "d0f135f82024-12-20 16:15:15.576697",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 74,
                        "name": "89a4cb282024-12-20 16:15:16.653236",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 75,
                        "name": "f57498102024-12-20 16:15:37.553933",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 76,
                        "name": "ad8c46f42024-12-20 16:15:38.628153",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 77,
                        "name": "8457af0a2024-12-20 16:16:08.983385",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 78,
                        "name": "0462cbbd2024-12-20 16:16:10.092625",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 79,
                        "name": "cf1fa2be2024-12-20 17:04:39.614810",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 80,
                        "name": "0490b4ac2024-12-20 17:04:40.778703",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 81,
                        "name": "13e204c52024-12-20 17:05:05.883567",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 82,
                        "name": "fad781fd2024-12-20 17:05:06.999090",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 83,
                        "name": "00de8a9a2024-12-20 17:05:40.084840",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 84,
                        "name": "11508c772024-12-20 17:05:41.313083",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 85,
                        "name": "3880c8e32024-12-20 17:14:26.273928",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 86,
                        "name": "772bf2a72024-12-20 17:14:27.447795",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 87,
                        "name": "349d0f072024-12-20 17:14:49.565159",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 88,
                        "name": "50bdf0c62024-12-20 17:14:50.670678",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 89,
                        "name": "aec36c042024-12-20 17:15:22.700846",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 90,
                        "name": "548ef5e02024-12-20 17:15:23.797184",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 91,
                        "name": "6c3df83a2024-12-20 17:21:30.192664",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 92,
                        "name": "fba3a6e62024-12-20 17:21:31.452784",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 93,
                        "name": "c23d80892024-12-20 17:21:52.776094",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 94,
                        "name": "4611fa912024-12-20 17:21:53.865066",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 95,
                        "name": "826502b72024-12-20 17:22:24.989316",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 96,
                        "name": "da67fe532024-12-20 17:22:26.097090",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 97,
                        "name": "23e49d802024-12-20 17:51:42.300820",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 98,
                        "name": "3c58371d2024-12-20 17:51:43.410609",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 99,
                        "name": "f47795172024-12-20 17:52:08.866815",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 100,
                        "name": "e16b649f2024-12-20 17:52:09.934486",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 101,
                        "name": "c83d558e2024-12-20 17:52:44.150799",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 102,
                        "name": "8f8dfafe2024-12-20 17:52:45.317401",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 103,
                        "name": "7afc28fa2024-12-20 19:07:14.946264",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 104,
                        "name": "c49f662c2024-12-20 19:07:16.163831",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 105,
                        "name": "408cb1752024-12-20 19:07:51.007593",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 106,
                        "name": "436027602024-12-20 19:07:52.103117",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 107,
                        "name": "8214943a2024-12-20 19:08:24.809032",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 108,
                        "name": "146bf76d2024-12-20 19:08:25.929199",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 109,
                        "name": "1f318c6f2024-12-23 09:07:32.763119",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 110,
                        "name": "4d81eaa52024-12-23 09:07:33.884404",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 111,
                        "name": "49b085d92024-12-23 09:08:08.617806",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 112,
                        "name": "4fb019af2024-12-23 09:08:09.704422",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 113,
                        "name": "255c50ee2024-12-23 09:08:45.554796",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 114,
                        "name": "b57ced062024-12-23 09:08:46.618778",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 115,
                        "name": "faccb9762024-12-23 11:55:52.685648",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 116,
                        "name": "daa310ef2024-12-23 11:55:53.777801",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 117,
                        "name": "0905efcf2024-12-23 11:56:31.700457",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 118,
                        "name": "890f9b1a2024-12-23 11:56:32.793315",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 119,
                        "name": "6b73a9762024-12-23 11:57:08.679814",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 120,
                        "name": "151c359d2024-12-23 11:57:09.748403",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 121,
                        "name": "e1bdb0772024-12-23 12:02:07.313467",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 122,
                        "name": "d7e607c32024-12-23 12:02:08.402411",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 123,
                        "name": "06a7af4f2024-12-23 12:02:41.978502",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 124,
                        "name": "f9c3c5422024-12-23 12:02:43.060887",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 125,
                        "name": "e02686502024-12-23 12:03:14.226104",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 126,
                        "name": "5c5e97112024-12-23 12:03:15.291851",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 127,
                        "name": "1fcbd5272024-12-23 12:10:55.026618",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 128,
                        "name": "81d0a0072024-12-23 12:10:56.122110",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 129,
                        "name": "c1fff7502024-12-23 12:11:29.258372",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 130,
                        "name": "2a0bf1b32024-12-23 12:11:30.331217",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 131,
                        "name": "83880b2d2024-12-23 12:17:41.502426",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 132,
                        "name": "5756a7222024-12-23 12:17:42.594777",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 133,
                        "name": "edf75eef2024-12-23 12:18:20.334637",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 134,
                        "name": "521f0cc12024-12-23 12:18:21.409494",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 135,
                        "name": "ee1f21ad2024-12-23 12:36:34.571467",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 136,
                        "name": "124889ad2024-12-23 12:36:35.669235",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 137,
                        "name": "91ac275a2024-12-23 12:37:13.669843",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 138,
                        "name": "370fcc542024-12-23 12:37:14.752407",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 139,
                        "name": "674013852024-12-23 12:37:46.624173",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 140,
                        "name": "98cd87312024-12-23 12:37:47.694489",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 141,
                        "name": "5d4a826f2024-12-23 12:42:10.704407",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 142,
                        "name": "4bd0daa32024-12-23 12:42:11.848390",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 143,
                        "name": "828000592024-12-23 12:42:45.426620",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 144,
                        "name": "9b0db4b92024-12-23 12:42:46.498247",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 145,
                        "name": "4a9605e82024-12-23 12:43:17.623714",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 146,
                        "name": "674c2d802024-12-23 12:43:18.690647",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 147,
                        "name": "d31579a12024-12-23 12:50:56.419855",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 148,
                        "name": "abd129232024-12-23 12:50:57.516377",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 149,
                        "name": "cd68905a2024-12-23 12:51:30.213469",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 150,
                        "name": "c17c173c2024-12-23 12:51:31.280517",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 151,
                        "name": "e93a8aa62024-12-23 12:57:22.328072",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 152,
                        "name": "e9a118632024-12-23 12:57:23.401544",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 153,
                        "name": "13fe9b702024-12-23 12:57:55.955338",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 154,
                        "name": "8a6fb63f2024-12-23 12:57:57.062654",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 155,
                        "name": "6261a8ec2024-12-24 15:13:31.973629",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 156,
                        "name": "3eba51a02024-12-24 15:13:33.082201",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 157,
                        "name": "2c4483c52024-12-24 15:14:12.342791",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 158,
                        "name": "b5e8d25a2024-12-24 15:14:13.494439",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 159,
                        "name": "bc90cacb2024-12-24 15:14:46.644187",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 160,
                        "name": "da5a37762024-12-24 15:14:47.778547",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 161,
                        "name": "c29717162024-12-24 15:23:33.073337",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 162,
                        "name": "48da06fb2024-12-24 15:23:34.176482",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 163,
                        "name": "3d20b20d2024-12-24 15:24:12.921350",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 164,
                        "name": "872a801a2024-12-24 15:24:13.991732",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 165,
                        "name": "bc3a567f2024-12-24 15:30:47.637579",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 166,
                        "name": "e750ed302024-12-24 15:30:48.827714",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 167,
                        "name": "3ead14b92024-12-24 15:31:26.306009",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 168,
                        "name": "c1c97e292024-12-24 15:31:27.377228",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 169,
                        "name": "d447b6142024-12-24 16:01:22.191442",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 170,
                        "name": "ec218df22024-12-24 16:01:23.537407",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 171,
                        "name": "f1a8984b2024-12-24 16:02:00.206945",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 172,
                        "name": "15e713af2024-12-24 16:02:01.337714",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 173,
                        "name": "08c757ba2024-12-24 16:02:34.936834",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 174,
                        "name": "21c00b0c2024-12-24 16:02:36.002551",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 175,
                        "name": "28c0038c2024-12-24 16:10:59.557956",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 176,
                        "name": "ddd5dd422024-12-24 16:11:00.647705",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 177,
                        "name": "e6ef03962024-12-24 16:11:36.598899",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 178,
                        "name": "90c85c022024-12-24 16:11:37.721662",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 179,
                        "name": "cf24d57e2024-12-24 16:18:13.641609",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 180,
                        "name": "7327d7732024-12-24 16:18:14.734284",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 181,
                        "name": "79fadb112024-12-24 16:18:50.272903",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 182,
                        "name": "84d0f9402024-12-24 16:18:51.375390",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 183,
                        "name": "66030ee82024-12-24 16:58:31.434347",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 184,
                        "name": "12f18ef32024-12-24 16:58:32.501727",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 185,
                        "name": "a95bf3852024-12-27 10:20:21.707178",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 186,
                        "name": "24b99e8b2024-12-27 10:20:22.813253",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 187,
                        "name": "7b3a830c2024-12-27 15:12:04.238901",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 188,
                        "name": "1b9c260a2024-12-27 15:12:05.316000",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 189,
                        "name": "766d06b22024-12-27 15:21:46.420485",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 190,
                        "name": "c48b094c2024-12-27 15:21:47.597492",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 191,
                        "name": "0845a6722024-12-27 15:26:48.076516",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 192,
                        "name": "117ee3fa2024-12-27 15:26:49.162579",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 193,
                        "name": "5a0c7f072024-12-27 15:33:00.573713",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 194,
                        "name": "27f6215d2024-12-27 15:33:01.653791",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 195,
                        "name": "63aa134d2024-12-27 15:41:28.784567",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 196,
                        "name": "efcd1bbd2024-12-27 15:41:29.960746",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 197,
                        "name": "17feb43f2024-12-27 15:46:27.665153",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 198,
                        "name": "bc08c4102024-12-27 15:46:28.833741",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 199,
                        "name": "4a817f412024-12-28 14:00:25.354935",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 200,
                        "name": "dd3cd4732024-12-28 14:00:26.445833",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 201,
                        "name": "2d98a0442024-12-30 07:59:27.182312",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 202,
                        "name": "b8049b1a2024-12-30 07:59:28.284735",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 203,
                        "name": "371aca042024-12-30 08:00:06.726724",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 204,
                        "name": "c87db1292024-12-30 08:00:07.805584",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 205,
                        "name": "a78c81b62024-12-30 08:00:40.632087",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 206,
                        "name": "9b4c66062024-12-30 08:00:41.701833",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 207,
                        "name": "f649f2b72025-01-02 10:00:15.836698",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 208,
                        "name": "562666002025-01-02 10:00:16.945081",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 209,
                        "name": "32b982902025-01-02 11:56:36.307627",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 210,
                        "name": "21615e852025-01-02 11:56:37.423225",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 211,
                        "name": "6b1e8c8d2025-01-02 11:57:13.276781",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 212,
                        "name": "c47fbd9d2025-01-02 11:57:14.364759",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 213,
                        "name": "db2cd17d2025-01-02 11:57:45.903569",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 214,
                        "name": "b89c8d9a2025-01-02 11:57:47.022676",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 215,
                        "name": "b62977842025-01-06 13:12:42.471924",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 216,
                        "name": "5df3d4b92025-01-06 13:12:43.597749",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 217,
                        "name": "d882ac0b2025-01-06 13:13:21.227099",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 218,
                        "name": "1d6846fc2025-01-06 13:13:22.332902",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 219,
                        "name": "519b7bd82025-01-06 13:13:54.170575",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 220,
                        "name": "0b41b7762025-01-06 13:13:55.234986",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 221,
                        "name": "c6d3763f2025-01-06 18:23:05.495071",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 222,
                        "name": "b56833ab2025-01-06 18:23:06.596275",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 223,
                        "name": "2c74b44b2025-01-06 18:23:45.601882",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 224,
                        "name": "2f9349632025-01-06 18:23:46.664359",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 225,
                        "name": "54b7589c2025-01-06 18:24:18.507281",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 226,
                        "name": "460a3f5e2025-01-06 18:24:19.614505",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 227,
                        "name": "f71fe97c2025-01-08 21:11:13.881476",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 228,
                        "name": "246f08212025-01-08 21:11:15.667140",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 229,
                        "name": "2630a0ea2025-01-08 21:11:34.274752",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 230,
                        "name": "ad00ac242025-01-08 21:11:35.922739",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 231,
                        "name": "f4c17b072025-01-08 21:11:48.307238",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 232,
                        "name": "4ce4c4492025-01-08 21:11:49.930685",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 233,
                        "name": "8eccd22e2025-01-08 21:13:50.363417",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 234,
                        "name": "29bcbded2025-01-08 21:13:52.059753",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 235,
                        "name": "115417c02025-01-08 21:17:06.018918",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 236,
                        "name": "8ca785052025-01-08 21:17:07.649623",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 237,
                        "name": "3a3794bf2025-01-08 21:21:31.144903",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 238,
                        "name": "fc6f7ce12025-01-08 21:21:32.732095",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 239,
                        "name": "5c2ee1a02025-01-08 21:22:21.992152",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 240,
                        "name": "98928a3b2025-01-08 21:22:23.563287",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 241,
                        "name": "c39f13d32025-01-08 21:23:05.425322",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 242,
                        "name": "8930ce282025-01-08 21:23:07.005694",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 243,
                        "name": "57059b042025-01-09 15:12:41.484464",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 244,
                        "name": "4410725c2025-01-09 15:12:42.598922",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 245,
                        "name": "1f0103392025-01-09 15:13:21.149086",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 246,
                        "name": "ef366f2c2025-01-09 15:13:22.214522",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 247,
                        "name": "24628c2a2025-01-09 15:13:54.138137",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 248,
                        "name": "de06a4c22025-01-09 15:13:55.234687",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 249,
                        "name": "7e6af0902025-01-09 18:38:46.903407",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 250,
                        "name": "6a1e92062025-01-09 18:38:47.998025",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 251,
                        "name": "1ab5bd152025-01-09 18:39:25.767353",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 252,
                        "name": "b31147552025-01-09 18:39:26.853486",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 253,
                        "name": "d240e5e72025-01-09 18:39:58.874174",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 254,
                        "name": "12f0e9492025-01-09 18:39:59.945502",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 255,
                        "name": "5dd5bdb02025-01-10 18:23:10.245833",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 256,
                        "name": "d160a4e02025-01-10 18:23:11.400637",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 257,
                        "name": "8efff0f92025-01-10 18:23:51.946436",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 258,
                        "name": "944904622025-01-10 18:23:53.077891",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 259,
                        "name": "275835392025-01-10 18:24:26.343813",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 260,
                        "name": "c18a8a4e2025-01-10 18:24:27.501497",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 261,
                        "name": "a5d9679c2025-01-11 03:40:38.054476",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 262,
                        "name": "0cd757f32025-01-11 03:40:39.209086",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 263,
                        "name": "82d283562025-01-11 03:41:20.802040",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 264,
                        "name": "a4e9ddec2025-01-11 03:41:21.958059",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 265,
                        "name": "f8426d882025-01-11 03:41:54.088949",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 266,
                        "name": "165f24ff2025-01-11 03:41:55.226064",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 267,
                        "name": "b983f9c12025-01-13 13:15:29.734869",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 268,
                        "name": "eac9bb532025-01-13 13:15:30.828817",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 269,
                        "name": "ae1416892025-01-13 13:16:10.608253",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 270,
                        "name": "c7e5d8592025-01-13 13:16:11.681612",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 271,
                        "name": "493741a12025-01-13 13:16:42.886099",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 272,
                        "name": "cb2606ee2025-01-13 13:16:44.518697",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 273,
                        "name": "ae419fdd2025-01-13 13:25:13.621862",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 274,
                        "name": "7035675f2025-01-13 13:25:14.710629",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 275,
                        "name": "4bf70a472025-01-13 13:25:48.205038",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 276,
                        "name": "a38157c42025-01-13 13:25:49.287239",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 277,
                        "name": "cf4c2aba2025-01-13 13:26:20.361837",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 278,
                        "name": "7c4b795c2025-01-13 13:26:21.445370",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 279,
                        "name": "8f239e342025-01-13 13:32:21.201312",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 280,
                        "name": "11d7b9992025-01-13 13:32:22.270912",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 281,
                        "name": "55afc4ca2025-01-13 13:32:55.613342",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 282,
                        "name": "5a9a36162025-01-13 13:32:56.681546",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 283,
                        "name": "038fd2a22025-01-13 13:33:26.629795",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 284,
                        "name": "62e2d89a2025-01-13 13:33:27.702553",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 285,
                        "name": "7b56f80b2025-01-14 00:59:10.823294",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 286,
                        "name": "54b3788e2025-01-14 00:59:11.919149",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 287,
                        "name": "125b34602025-01-14 00:59:48.629977",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 288,
                        "name": "e8a4bb2a2025-01-14 00:59:49.702099",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 289,
                        "name": "d48dde662025-01-14 01:00:23.104775",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 290,
                        "name": "5e66236e2025-01-14 01:00:24.196109",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 291,
                        "name": "2c8666752025-01-14 01:09:11.253490",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 292,
                        "name": "d6a9b4e92025-01-14 01:09:12.338901",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 293,
                        "name": "af0748c62025-01-14 16:32:36.155065",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 294,
                        "name": "b75559992025-01-14 16:32:37.257352",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 295,
                        "name": "87966ad82025-01-14 16:33:25.109630",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 296,
                        "name": "d994964f2025-01-14 16:33:26.345098",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 297,
                        "name": "dd49a45f2025-01-14 16:34:01.616976",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 298,
                        "name": "26d85eec2025-01-14 16:34:02.760067",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 299,
                        "name": "203bef732025-01-14 22:49:22.715308",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 300,
                        "name": "032c54cb2025-01-14 22:49:23.825149",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 301,
                        "name": "09e5c7072025-01-14 22:50:04.423784",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 302,
                        "name": "a22424722025-01-14 22:50:05.516268",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 303,
                        "name": "cef77e342025-01-14 22:50:35.912463",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 304,
                        "name": "f552eb292025-01-14 22:50:36.999083",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 305,
                        "name": "98ae1a652025-01-14 23:00:15.458821",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 306,
                        "name": "bb0d14e02025-01-14 23:00:16.543996",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 307,
                        "name": "c06381aa2025-01-14 23:00:53.918240",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 308,
                        "name": "a369adcd2025-01-14 23:00:54.998959",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 309,
                        "name": "01525e572025-01-14 23:01:25.606104",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 310,
                        "name": "57c4bf2c2025-01-14 23:01:26.673782",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 311,
                        "name": "60aa41072025-01-16 10:29:32.366037",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 312,
                        "name": "f973543e2025-01-16 10:29:33.455659",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 313,
                        "name": "514997bb2025-01-16 10:30:10.222435",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 314,
                        "name": "71fca32a2025-01-16 10:30:11.311012",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 315,
                        "name": "3d19668b2025-01-16 10:30:43.825180",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 316,
                        "name": "33685cd92025-01-16 10:30:44.900128",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 317,
                        "name": "28bb2a6e2025-01-19 16:31:37.351403",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 318,
                        "name": "4d52bd232025-01-19 16:31:38.463934",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 319,
                        "name": "689731972025-01-19 16:32:17.219993",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 320,
                        "name": "34d8028b2025-01-19 16:32:18.308768",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 321,
                        "name": "02cda3192025-01-19 16:32:51.117910",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 322,
                        "name": "3695896e2025-01-19 16:32:52.207707",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 323,
                        "name": "51261dde2025-01-20 11:17:04.213482",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 324,
                        "name": "0e5afaf32025-01-20 11:17:05.352531",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 325,
                        "name": "09afb4622025-01-20 11:17:43.344203",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 326,
                        "name": "e38e92892025-01-20 11:17:44.435561",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 327,
                        "name": "0b94bbd02025-01-20 11:18:16.995539",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 328,
                        "name": "3ffe378d2025-01-20 11:18:18.124433",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 329,
                        "name": "fd6608062025-01-20 12:17:23.931687",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 330,
                        "name": "bb1dcd892025-01-20 12:17:25.056642",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 331,
                        "name": "87ead9cc2025-01-20 12:17:59.521606",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 332,
                        "name": "4980662e2025-01-20 12:18:00.591306",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 333,
                        "name": "eb9906ec2025-01-20 12:18:31.838885",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 334,
                        "name": "5e0360d52025-01-20 12:18:32.918167",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 335,
                        "name": "6c2276092025-01-20 18:57:41.751255",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 336,
                        "name": "11446a0c2025-01-20 18:57:42.854885",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 337,
                        "name": "0432eb8c2025-01-20 18:58:20.045236",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 338,
                        "name": "775567ba2025-01-20 18:58:21.139667",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 339,
                        "name": "2261167f2025-01-20 18:58:52.792395",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 340,
                        "name": "fb1898872025-01-20 18:58:53.871603",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 341,
                        "name": "56c6bc612025-01-20 19:07:53.722920",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 342,
                        "name": "7d4460d92025-01-20 19:07:54.815677",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 343,
                        "name": "bb8ed3a82025-01-20 19:08:31.794459",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 344,
                        "name": "e9cf61492025-01-20 19:08:32.872313",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 345,
                        "name": "235b14d32025-01-20 19:09:03.574713",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 346,
                        "name": "0423b85a2025-01-20 19:09:04.645314",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 347,
                        "name": "18efe9e22025-01-20 19:16:26.080435",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 348,
                        "name": "89aae6cf2025-01-20 19:16:27.149060",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 349,
                        "name": "8015638a2025-01-22 15:17:38.145862",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 350,
                        "name": "6b3691122025-01-22 15:17:39.222180",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 351,
                        "name": "09fded542025-01-22 15:18:13.699581",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 352,
                        "name": "bf3967972025-01-22 15:18:14.782511",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 353,
                        "name": "a34e8bf92025-01-22 15:18:47.876251",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 354,
                        "name": "18a2f4802025-01-22 15:18:48.954850",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 355,
                        "name": "c49d419f2025-01-23 20:27:53.876149",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 356,
                        "name": "fbc699012025-01-23 20:27:54.961935",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 357,
                        "name": "b4e3d15b2025-01-23 20:28:33.336764",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 358,
                        "name": "465580992025-01-23 20:28:34.420400",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 359,
                        "name": "bd08edbf2025-01-23 20:29:07.405394",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 360,
                        "name": "1dd7de902025-01-23 20:29:08.489529",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 361,
                        "name": "e5fc151d2025-01-24 10:23:54.092173",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 362,
                        "name": "58b3b6182025-01-24 10:23:55.181847",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 363,
                        "name": "12f263882025-01-24 10:24:29.269187",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 364,
                        "name": "394f9a372025-01-24 10:24:30.348487",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 365,
                        "name": "ed9180852025-01-24 10:25:05.028530",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 366,
                        "name": "db825eff2025-01-24 10:25:06.113803",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 367,
                        "name": "662780722025-01-24 11:31:23.882996",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 368,
                        "name": "7b9759872025-01-24 11:31:24.960169",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 369,
                        "name": "0de2be872025-01-24 11:32:00.727773",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 370,
                        "name": "49cfe3c52025-01-24 11:32:01.809435",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 371,
                        "name": "c608fa452025-01-24 11:32:33.903010",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 372,
                        "name": "1598711f2025-01-24 11:32:34.982922",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 373,
                        "name": "e3f1768a2025-01-27 11:16:29.686338",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 374,
                        "name": "0af4e6132025-01-27 11:16:30.774454",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 375,
                        "name": "fe3055ec2025-01-27 11:17:06.382877",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 376,
                        "name": "c821ed6a2025-01-27 11:17:07.465781",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 377,
                        "name": "492dec862025-01-27 11:17:38.652323",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 378,
                        "name": "b7ecdf692025-01-27 11:17:40.789802",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 379,
                        "name": "549c438d2025-01-28 16:38:47.464300",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 380,
                        "name": "88832cae2025-01-28 16:38:48.572922",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 381,
                        "name": "b38cf5572025-01-28 16:39:25.990331",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 382,
                        "name": "782fd89b2025-01-28 16:39:27.123204",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 383,
                        "name": "26562b322025-01-28 16:40:00.356058",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 384,
                        "name": "3a78a8bd2025-01-28 16:40:02.267407",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 385,
                        "name": "2ee2ad2f2025-01-28 17:49:06.048484",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 386,
                        "name": "27c918e52025-01-28 17:49:07.135427",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 387,
                        "name": "370bb7ec2025-01-28 17:49:43.276293",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 388,
                        "name": "87ac5ecd2025-01-28 17:49:44.406289",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 389,
                        "name": "0a3e69f72025-01-28 17:50:16.578162",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 390,
                        "name": "489781972025-01-28 17:50:17.669583",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 391,
                        "name": "23c5aaf72025-02-03 08:43:51.123888",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 392,
                        "name": "9c2851b42025-02-03 08:43:52.217827",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 393,
                        "name": "8db6a2f02025-02-03 08:44:32.174077",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 394,
                        "name": "36fb4f8e2025-02-03 08:44:33.256786",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 395,
                        "name": "2b5c42a62025-02-03 08:45:09.198091",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 396,
                        "name": "020e8c7f2025-02-03 08:45:10.696517",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 397,
                        "name": "5a6cb19e2025-02-03 13:58:03.636295",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 398,
                        "name": "94d55f922025-02-03 13:58:04.775689",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 399,
                        "name": "ecd56df82025-02-03 13:58:45.031058",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 400,
                        "name": "6562c0c22025-02-03 13:58:46.306338",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 401,
                        "name": "3062481f2025-02-03 13:59:25.454743",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 402,
                        "name": "e7abe04a2025-02-03 13:59:26.566566",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 403,
                        "name": "48a1f5022025-02-03 20:24:05.243221",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 404,
                        "name": "c8e186f22025-02-03 20:24:06.330626",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 405,
                        "name": "fe0e1db32025-02-03 20:24:47.677666",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 406,
                        "name": "ea005cd42025-02-03 20:24:48.869768",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 407,
                        "name": "830a55942025-02-03 20:25:30.640525",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 408,
                        "name": "201032c32025-02-03 20:25:31.909743",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 409,
                        "name": "778f95e82025-02-11 09:10:59.833312",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 410,
                        "name": "e628b5352025-02-11 09:11:00.926056",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 411,
                        "name": "b47f588a2025-02-11 09:11:37.158744",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 412,
                        "name": "8f0e7db72025-02-11 09:11:38.229058",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 413,
                        "name": "deb629b72025-02-11 09:12:09.572837",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 414,
                        "name": "9fbae0f12025-02-11 09:12:10.654457",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 415,
                        "name": "4df17f862025-02-14 10:10:48.815932",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 416,
                        "name": "4d571d772025-02-14 10:10:49.911547",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 417,
                        "name": "0d4e54402025-02-14 10:11:24.946017",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 418,
                        "name": "6866eee12025-02-14 10:11:26.022313",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 419,
                        "name": "c49ba3222025-02-14 10:11:57.034707",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 420,
                        "name": "b6128bef2025-02-14 10:11:58.104706",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 421,
                        "name": "3ffd78f32025-03-03 12:01:04.371810",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 422,
                        "name": "d4c042da2025-03-03 12:01:05.592744",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 423,
                        "name": "abaf48aa2025-03-03 12:01:43.417915",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 424,
                        "name": "12ca770d2025-03-03 12:01:44.555699",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 425,
                        "name": "5eff4ca02025-03-03 12:02:23.783030",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 426,
                        "name": "9722ad982025-03-03 12:02:24.914488",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 427,
                        "name": "2d1a98722025-03-04 15:46:09.275009",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 428,
                        "name": "28135e1e2025-03-04 15:46:10.362875",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 429,
                        "name": "5e08b6602025-03-04 15:46:43.923328",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 430,
                        "name": "a1614f2a2025-03-04 15:46:45.002373",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 431,
                        "name": "6dd7f3c82025-03-04 15:47:16.424563",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 432,
                        "name": "3b0713462025-03-04 15:47:17.562827",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 433,
                        "name": "bb132a142025-03-05 11:59:49.720481",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 434,
                        "name": "9bd376542025-03-05 11:59:50.811388",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 435,
                        "name": "32c47fb02025-03-05 12:00:24.464478",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 436,
                        "name": "a5dc582a2025-03-05 12:00:25.532251",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 437,
                        "name": "6de5c4322025-03-05 12:00:56.291423",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 438,
                        "name": "8d8585a32025-03-05 12:00:57.359596",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 439,
                        "name": "415a221c2025-03-05 12:59:39.401787",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 440,
                        "name": "41096c942025-03-05 12:59:40.467819",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 441,
                        "name": "57bcdde02025-03-05 13:00:13.448924",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 442,
                        "name": "38c00ac02025-03-05 13:00:14.527127",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 443,
                        "name": "9adb08752025-03-05 13:00:45.214305",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 444,
                        "name": "6584b74f2025-03-05 13:00:46.287724",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 445,
                        "name": "7ac1533b2025-03-14 00:17:50.224731",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 446,
                        "name": "842a9a532025-03-14 00:17:51.597587",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 447,
                        "name": "27d18e932025-03-14 00:18:39.905177",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 448,
                        "name": "f30b817b2025-03-14 00:18:41.037582",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 449,
                        "name": "1e7db0272025-03-14 00:19:16.091844",
                        "enabled": true,
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "createdBy": null,
                        "lastUpdatedBy": null,
                        "createdOnDateTime": null,
                        "lastUpdatedOnDateTime": null
                    },
                    {
                        "id": 450,
                        "name": "d90065ba2025-03-14 00:19:17.172163",
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
                "groups": [],
                "rewardRank": null,
                "images": [],
                "videos": []
            },
            "revenueDetails": null,
            "paymentDetails": {
                "paymentMode": "CASH",
                "id": 1881,
                "cash": 10.0000
            },
            "redemptionDetails": {
                "redemptionType": "SWEEPSTAKES",
                "redemptionValue": null
            },
            "transactionCustomFields": null,
            "fulfillmentDetails": null,
            "issueDateTime": "2025-03-27T07:11:57Z",
            "eventDateTime": "2025-03-27T07:11:57Z",
            "code": null,
            "vendor": "{\"status\": \"{\\\"success\\\":true,\\\"code\\\":200,\\\"message\\\":\\\"Success\\\"}\", \"voucher\": \"077I30ME6NSG7QH9UUSX0N645Y2CLAIURNC6I\", \"pointsRedeemed\": \"0\"}",
            "seriesId": null
        }
    ],
    "intouchUserId": "423789294",
    "pagingDto": {
        "last": true,
        "totalElements": 2,
        "totalPages": 1,
        "numberOfElements": 2,
        "first": true,
        "size": 2,
        "number": 0
    }
}
```
```curl With couponCodeCase filter
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
            "rewardId": 139831,
            "orgId": 50339,
            "transactionId": 927488,
            "issueRewardRefId": "1718950196",
            "rewardIssueDate": 1747372098000,
            "rewardIssueDateTime": "2025-05-16T05:08:18Z",
            "userRewardExpiry": "2025-06-15 00:00:00",
            "userRewardExpiryDateTime": "2025-06-15T00:00:00Z",
            "userRewardDetails": {
                "id": 139831,
                "name": "english rewardName",
                "description": "hello",
                "imageId": "EXDR12987U",
                "imageUrl": "https://s3.amazonaws.com/crm-staging-new-solutions/AutomationBrandMarvel/EXDR12987U?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIQDT5QCmOiaEwl4%2BEKQBN1UFNFBiVX3OKxptTdVKjSwgHQIgLK3R11HVwiVcfXiRNcwSQhqahcltEWaB37RHgJwGZZIqvwIIWxAFGgw0ODY0NTY5ODYyNjYiDK96TNqkpadIfKcPLyqcAn83R8k7xYrI912n8M6K1JlucE5%2BqIZ6duBRwafuMkSvUEtT45Ye3IBXk5Yvj0%2BIGfYI9vWh1Wv0MhwwOGfpp8lWBwmwMngFwdkZvwCsjDaUzRfUkK%2BEjdWnesn%2FPMc4PSba%2FPgrl0%2BL0865j4Hle%2F8jCdw7sJQlT9I0rgzIX%2Btt2frn68yq1va5eX2TtRBM9V5%2Bilapz%2BYqiEEcLFqOM9Sk97BrcoOsSINmA8JE6lAI8JYxYwnQ7yyP1yT4PEl9CuQKy8gctnimtAxxWTGm09QOWPgyhUFFO95kE2P3werqePNz7TDm3NEd1pzCTEH0kJY4LlX17Vfz3bXNGNMxs8xYmdzTLWc2xMIZV5D2AnxIB9DRMIIO3shtbACOMI2M1sEGOp0B5KANBNycddl%2FoKgrdvSZh9UAS2Jd1WocuykmwtliWZJJGD74luh3WpQ2nO24QDyJM2BJxq34aBaxez2P4NW4XbSQftJ8zKBDO9nd46qyuds%2FOUKu0G%2BEadw4oqEU1RUBXoe733kYKC7bS4yB%2FM5LCxNJtL%2BgJqcqBt9%2FYJBrJtGstw9H52wj4grTK0KeLpjP8XfXOfa9lhktWljiSw%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20250527T092949Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3599&X-Amz-Credential=ASIAXCQYYRKNI6BN2FGS%2F20250527%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=e7309ae8aee7b7d5829ce10a4f480fea2c0e07c8fb6f3403223e92670c8dad81",
                "thumbnailId": "EXDR12987T",
                "thumbnailUrl": "https://s3.amazonaws.com/crm-staging-new-solutions/AutomationBrandMarvel/EXDR12987T?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIQDT5QCmOiaEwl4%2BEKQBN1UFNFBiVX3OKxptTdVKjSwgHQIgLK3R11HVwiVcfXiRNcwSQhqahcltEWaB37RHgJwGZZIqvwIIWxAFGgw0ODY0NTY5ODYyNjYiDK96TNqkpadIfKcPLyqcAn83R8k7xYrI912n8M6K1JlucE5%2BqIZ6duBRwafuMkSvUEtT45Ye3IBXk5Yvj0%2BIGfYI9vWh1Wv0MhwwOGfpp8lWBwmwMngFwdkZvwCsjDaUzRfUkK%2BEjdWnesn%2FPMc4PSba%2FPgrl0%2BL0865j4Hle%2F8jCdw7sJQlT9I0rgzIX%2Btt2frn68yq1va5eX2TtRBM9V5%2Bilapz%2BYqiEEcLFqOM9Sk97BrcoOsSINmA8JE6lAI8JYxYwnQ7yyP1yT4PEl9CuQKy8gctnimtAxxWTGm09QOWPgyhUFFO95kE2P3werqePNz7TDm3NEd1pzCTEH0kJY4LlX17Vfz3bXNGNMxs8xYmdzTLWc2xMIZV5D2AnxIB9DRMIIO3shtbACOMI2M1sEGOp0B5KANBNycddl%2FoKgrdvSZh9UAS2Jd1WocuykmwtliWZJJGD74luh3WpQ2nO24QDyJM2BJxq34aBaxez2P4NW4XbSQftJ8zKBDO9nd46qyuds%2FOUKu0G%2BEadw4oqEU1RUBXoe733kYKC7bS4yB%2FM5LCxNJtL%2BgJqcqBt9%2FYJBrJtGstw9H52wj4grTK0KeLpjP8XfXOfa9lhktWljiSw%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20250527T092949Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIAXCQYYRKNI6BN2FGS%2F20250527%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=8d7635008163ff9a747839e21359b2be34a02a6a83d79b618f23849f0db74f50",
                "termAndConditionsId": "EXDR12987R",
                "termAndConditionsUrl": "https://s3.amazonaws.com/crm-staging-new-solutions/AutomationBrandMarvel/EXDR12987R?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIQDT5QCmOiaEwl4%2BEKQBN1UFNFBiVX3OKxptTdVKjSwgHQIgLK3R11HVwiVcfXiRNcwSQhqahcltEWaB37RHgJwGZZIqvwIIWxAFGgw0ODY0NTY5ODYyNjYiDK96TNqkpadIfKcPLyqcAn83R8k7xYrI912n8M6K1JlucE5%2BqIZ6duBRwafuMkSvUEtT45Ye3IBXk5Yvj0%2BIGfYI9vWh1Wv0MhwwOGfpp8lWBwmwMngFwdkZvwCsjDaUzRfUkK%2BEjdWnesn%2FPMc4PSba%2FPgrl0%2BL0865j4Hle%2F8jCdw7sJQlT9I0rgzIX%2Btt2frn68yq1va5eX2TtRBM9V5%2Bilapz%2BYqiEEcLFqOM9Sk97BrcoOsSINmA8JE6lAI8JYxYwnQ7yyP1yT4PEl9CuQKy8gctnimtAxxWTGm09QOWPgyhUFFO95kE2P3werqePNz7TDm3NEd1pzCTEH0kJY4LlX17Vfz3bXNGNMxs8xYmdzTLWc2xMIZV5D2AnxIB9DRMIIO3shtbACOMI2M1sEGOp0B5KANBNycddl%2FoKgrdvSZh9UAS2Jd1WocuykmwtliWZJJGD74luh3WpQ2nO24QDyJM2BJxq34aBaxez2P4NW4XbSQftJ8zKBDO9nd46qyuds%2FOUKu0G%2BEadw4oqEU1RUBXoe733kYKC7bS4yB%2FM5LCxNJtL%2BgJqcqBt9%2FYJBrJtGstw9H52wj4grTK0KeLpjP8XfXOfa9lhktWljiSw%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20250527T092949Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3599&X-Amz-Credential=ASIAXCQYYRKNI6BN2FGS%2F20250527%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=194dcc02608e5b1eb23364b398771a1dac86940bf1e0e1a2b86273f4d9d9cdaa",
                "tier": null,
                "label": null,
                "priority": null,
                "intouchPoints": 0,
                "group": null,
                "startTime": "2025-05-16 05:08:06",
                "startDateTime": "2025-05-16T05:08:06Z",
                "endTime": "2025-05-17 05:08:06",
                "endDateTime": "2025-05-17T05:08:06Z",
                "expired": true,
                "started": false,
                "programId": null,
                "categoryList": [],
                "customFields": {
                    "CF2_eebced882025-05-27 13:57:18.344501": "defaultValue_2",
                    "CF1_50a6f4cf2025-05-27 13:57:18.344487": "defaultValue_1"
                },
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
            "issueDateTime": "2025-05-16T05:08:17Z",
            "eventDateTime": "2025-05-16T05:08:17Z",
            "code": "UPPERlower003",
            "vendor": null,
            "seriesId": "96303"
        }
    ],
    "intouchUserId": "345635195",
    "pagingDto": {
        "last": true,
        "totalElements": 1,
        "totalPages": 1,
        "numberOfElements": 1,
        "first": true,
        "size": 10,
        "number": 0
    }
}
```

<br />

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