---
title: Get reward details by ID
excerpt: ''
api:
  file: v1.json
  operationId: get-reward-details-by-id
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
This API retrieves a reward’s details using the reward ID.

> 👍 Note
>
> * For detailed information about our APIs and for hands-on testing, refer documentation in [API overview](https://docs.capillarytech.com/reference/apioverview) and step-by-step guide on making your first API call in [Make your first API call](https://docs.capillarytech.com/reference/make-your-first-api-call).

# Prerequisites

*   Authentication: Basic or OAuth authentication
*   Default access group

# API Specification

|                        |                                                                  |
| :--------------------- | :--------------------------------------------------------------- |
| URI                    | `/api_gateway/rewards/core/v1/reward/{RewardId}/brand/{BrandId}` |
| HTTP Method            | GET                                                              |
| Pagination             | No                                                               |
| Batch support          | No                                                               |
| Rate limit information | None                                                             |

# API endpoint example

```bash
https://eu.api.capillarytech.com/api_gateway/rewards/core/v1/reward/239040/brand/1
```

# Request path parameters

| Parameter Name | Data Type | Description                                                                                                                                |
| -------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| rewardId\*     | String    | Unique identifier of the reward. Ex: 112295                                                                                                |
| brandId\*      | Long      | You can use the [API](https://eu.api.capillarytech.com/api_gateway/rewards/core/v1/brand/getAll)  and retrieve the brand ID of your brand. |

```curl
https://eu.api.capillarytech.com/api_gateway/rewards/core/v1/reward/239040/brand/1
```

# Response parameters

<Table align={["left","left"]}>
  <thead>
    <tr>
      <th>
        Parameter
      </th>

      <th>
        Description
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        success
      </td>

      <td>
        Indicates whether the request was successful
      </td>
    </tr>

    <tr>
      <td>
        code
      </td>

      <td>
        Status code associated with the response
      </td>
    </tr>

    <tr>
      <td>
        message
      </td>

      <td>
        Descriptive message about the response status
      </td>
    </tr>

    <tr>
      <td>
        id
      </td>

      <td>
        Unique identifier for the reward
      </td>
    </tr>

    <tr>
      <td>
        type
      </td>

      <td>
        Type of the reward. Supported values: POINTS, VOUCHER, PHYSICAL\_VOUCHER, FREE\_VOUCHER.
      </td>
    </tr>

    <tr>
      <td>
        startDate
      </td>

      <td>
        Start date and time of the reward in `YYYY-MM-DDTHH:MM:SS` format.
      </td>
    </tr>

    <tr>
      <td>
        startDateTime
      </td>

      <td>
        Start date and time of the reward in ISO 8601 format (`YYYY-MM-DDTHH:MM:SSZ`)
      </td>
    </tr>

    <tr>
      <td>
        endDate
      </td>

      <td>
        End date and time of the reward in `YYYY-MM-DDTHH:MM:SS` format.
      </td>
    </tr>

    <tr>
      <td>
        endDateTime
      </td>

      <td>
        End date and time of the reward in ISO 8601 format (`YYYY-MM-DDTHH:MM:SSZ`)
      </td>
    </tr>

    <tr>
      <td>
        enabled
      </td>

      <td>
        Indicates if the reward is currently enabled
      </td>
    </tr>

    <tr>
      <td>
        priority
      </td>

      <td>
        Priority of the reward, used for sorting or processing
      </td>
    </tr>

    <tr>
      <td>
        intouchPoints
      </td>

      <td>
        The number of points customers need to burn to purchase the reward
      </td>
    </tr>

    <tr>
      <td>
        intouchSeriesId
      </td>

      <td>
        Coupon series ID or cart promotion ID when intouch reward is selected
      </td>
    </tr>

    <tr>
      <td>
        tier
      </td>

      <td>
        Tier classification of the reward, e.g., SILVER
      </td>
    </tr>

    <tr>
      <td>
        redemptionType
      </td>

      <td>
        Type of intouch reward or vendor reward. Supported values: INTOUCH\_REWARD, VENDOR\_INTOUCH\_REWARD, VENDOR\_ONLY\_REWARD, CART\_PROMOTION.
      </td>
    </tr>

    <tr>
      <td>
        vendorId
      </td>

      <td>
        Identifier for the vendor associated with the reward
      </td>
    </tr>

    <tr>
      <td>
        vendorRedemption
      </td>

      <td>
        Redemption value or code at the vendor
      </td>
    </tr>

    <tr>
      <td>
        languageSpecificInfo
      </td>

      <td>
        Array of objects containing language-specific details
      </td>
    </tr>

    <tr>
      <td>
        languageSpecificInfo.richContentRO
      </td>

      <td>
        The rich content object for the reward
      </td>
    </tr>

    <tr>
      <td>
        richContentRO.content
      </td>

      <td>
        The HTML-formatted rich text content
      </td>
    </tr>

    <tr>
      <td>
        richContentRO.isEnabled
      </td>

      <td>
        Indicates whether the rich text content is enabled. Supported values: `true`, `false`
      </td>
    </tr>

    <tr>
      <td>
        defaultValue
      </td>

      <td>
        Default value if rich text content is not mapped to the reward. Required if `isMandatory` is set to `true`
      </td>
    </tr>

    <tr>
      <td>
        name
      </td>

      <td>
        Name of the reward in a specific language
      </td>
    </tr>

    <tr>
      <td>
        description
      </td>

      <td>
        Description of the reward in a specific language
      </td>
    </tr>

    <tr>
      <td>
        termNConditionsId
      </td>

      <td>
        ID for the terms and conditions associated with the reward
      </td>
    </tr>

    <tr>
      <td>
        termNConditionsUrl
      </td>

      <td>
        URL to the terms and conditions document
      </td>
    </tr>

    <tr>
      <td>
        imageId
      </td>

      <td>
        Identifier for the main image associated with the reward
      </td>
    </tr>

    <tr>
      <td>
        imageUrl
      </td>

      <td>
        URL to the main image associated with the reward
      </td>
    </tr>

    <tr>
      <td>
        thumbnailId
      </td>

      <td>
        Identifier for the thumbnail image associated with the reward
      </td>
    </tr>

    <tr>
      <td>
        thumbnailUrl
      </td>

      <td>
        URL to the thumbnail image associated with the reward
      </td>
    </tr>

    <tr>
      <td>
        enabled
      </td>

      <td>
        Indicates if the language-specific information is enabled
      </td>
    </tr>

    <tr>
      <td>
        images
      </td>

      <td>
        A list of image details related to the reward
      </td>
    </tr>

    <tr>
      <td>
        name
      </td>

      <td>
        Name of the image
      </td>
    </tr>

    <tr>
      <td>
        altText
      </td>

      <td>
        Alternative text or description of the image
      </td>
    </tr>

    <tr>
      <td>
        id
      </td>

      <td>
        Identifier for internally stored images, generated when uploaded to the file service. Not applicable for external images
      </td>
    </tr>

    <tr>
      <td>
        url
      </td>

      <td>
        URL of the image
      </td>
    </tr>

    <tr>
      <td>
        isExternal
      </td>

      <td>
        Indicates if the image is hosted on an external server
      </td>
    </tr>

    <tr>
      <td>
        videos
      </td>

      <td>
        A list of video details related to the reward
      </td>
    </tr>

    <tr>
      <td>
        name
      </td>

      <td>
        Name of the video
      </td>
    </tr>

    <tr>
      <td>
        altText
      </td>

      <td>
        Alternative text or description of the video
      </td>
    </tr>

    <tr>
      <td>
        id
      </td>

      <td>
        Identifier for internally stored videos, generated when uploaded to the file service. Not applicable for external videos
      </td>
    </tr>

    <tr>
      <td>
        url
      </td>

      <td>
        URL of the video
      </td>
    </tr>

    <tr>
      <td>
        isExternal
      </td>

      <td>
        Indicates if the video is hosted on an external server
      </td>
    </tr>

    <tr>
      <td>
        customFields
      </td>

      <td>
        Object containing key–value pairs for custom fields specific to the reward
      </td>
    </tr>

    <tr>
      <td>
        groups
      </td>

      <td>
        Contains the information of groups, for example: name and rank of group
      </td>
    </tr>

    <tr>
      <td>
        paymentConfigs
      </td>

      <td>
        The `paymentConfigs` object includes the type of payment mode used to purchase the reward. The ID is the unique identifier for the payment-mode configuration used
      </td>
    </tr>

    <tr>
      <td>
        paymentMode
      </td>

      <td>
        The type of payment mode used to redeem the reward. For example: POINTS, FREE, CASH, POINTS\_CASH, CONV\_RATIO
      </td>
    </tr>

    <tr>
      <td>
        id
      </td>

      <td>
        Unique identifier for the payment configuration
      </td>
    </tr>

    <tr>
      <td>
        segment
      </td>

      <td>
        Customer segmentation is a logical grouping of audiences based on shared characteristics. Segments are used to tailor the marketing efforts of brands effectively. For more information on segments refer [here](https://docs.capillarytech.com/docs/introduction-to-customer-segmentation)
      </td>
    </tr>

    <tr>
      <td>
        segmentId
      </td>

      <td>
        Segment ID is a unique identifier used to retrieve specific segment information
      </td>
    </tr>

    <tr>
      <td>
        partitionId
      </td>

      <td>
        The partition ID is a unique identifier used to retrieve information. You can pass one or more partition IDs to access the desired data
      </td>
    </tr>

    <tr>
      <td>
        cardSeries
      </td>

      <td>
        List of card series codes associated with the reward
      </td>
    </tr>

    <tr>
      <td>
        id
      </td>

      <td>
        Unique identifier of the card associated with the reward
      </td>
    </tr>

    <tr>
      <td>
        code
      </td>

      <td>
        Series code of the card associated with the reward
      </td>
    </tr>

    <tr>
      <td>
        labels
      </td>

      <td>
        List of label IDs associated with the reward
      </td>
    </tr>

    <tr>
      <td>
        rewardRank
      </td>

      <td>
        Rank of the reward within its category or program
      </td>
    </tr>

    <tr>
      <td>
        restrictions \[]
      </td>

      <td>
        Contains an array of restrictions.
      </td>
    </tr>

    <tr>
      <td>
        restrictions.customerLevel
      </td>

      <td>
        An array of customer-level restriction entries.
      </td>
    </tr>

    <tr>
      <td>
        customerLevel.id
      </td>

      <td>
        A unique identifier for the customer-level restriction.
      </td>
    </tr>

    <tr>
      <td>
        customerLevel.repeatFrequencyType
      </td>

      <td>
        The type of frequency for the restriction
      </td>
    </tr>

    <tr>
      <td>
        customerLevel.limit
      </td>

      <td>
        The maximum limit value for the restriction.
      </td>
    </tr>

    <tr>
      <td>
        customerLevel.interval
      </td>

      <td>
        The interval value at which the frequency is applied.
      </td>
    </tr>

    <tr>
      <td>
        customerLevel.kpi
      </td>

      <td>
        The key performance indicator related to the restriction.
      </td>
    </tr>

    <tr>
      <td>
        customerLevel.windowType
      </td>

      <td>
        The type of window for the restriction .
      </td>
    </tr>

    <tr>
      <td>
        customerLevel.startOfCycle
      </td>

      <td>
        The start date of the cycle for the restriction.
        Time format : ISO 8601
      </td>
    </tr>

    <tr>
      <td>
        customerLevel.createdOn
      </td>

      <td>
        The date when the restriction was created.
        Time format : epoch Timestamp
      </td>
    </tr>

    <tr>
      <td>
        customerLevel.updatedOn
      </td>

      <td>
        The date when the restriction was last updated.
        Time format : epoch Timestamp
      </td>
    </tr>

    <tr>
      <td>
        customerLevel.createdBy
      </td>

      <td>
        The identifier of the user who created the restriction.
      </td>
    </tr>

    <tr>
      <td>
        customerLevel.updatedBy
      </td>

      <td>
        The identifier of the user who last updated the restriction.
      </td>
    </tr>

    <tr>
      <td>
        customerLevel.createdOnDateTime
      </td>

      <td>
        The date and time when the restriction was created.
        Time format : ISO 8601
      </td>
    </tr>

    <tr>
      <td>
        customerLevel.updatedOnDateTime
      </td>

      <td>
        The date and time when the restriction was last updated.
        Time format : ISO 8601
      </td>
    </tr>

    <tr>
      <td>
        **customerLevel**
      </td>

      <td>
        Define the maximum number of times an individual customer can redeem a specific reward.
      </td>
    </tr>

    <tr>
      <td>
        customerLevel.id
      </td>

      <td>
        Unique identifier for the customer-level restriction.
      </td>
    </tr>

    <tr>
      <td>
        customerLevel.repeatFrequencyType
      </td>

      <td>
        The frequency type for the customer-level restriction.
      </td>
    </tr>

    <tr>
      <td>
        customerLevel.limit
      </td>

      <td>
        The maximum value allowed for the KPI within the defined frequency for customer-level restrictions.
      </td>
    </tr>

    <tr>
      <td>
        customerLevel.interval
      </td>

      <td>
        The interval value associated with the `repeatFrequencyType` for customer-level restrictions.
      </td>
    </tr>

    <tr>
      <td>
        customerLevel.kpi
      </td>

      <td>
        The Key Performance Indicator (KPI) on which the reward is created.
      </td>
    </tr>

    <tr>
      <td>
        customerLevel.windowType
      </td>

      <td>
        Specifies the type of window for the reward.
      </td>
    </tr>

    <tr>
      <td>
        customerLevel.startOfCycle
      </td>

      <td>
        The start date and time of the customer-level restriction cycle in ISO 8601 format.
      </td>
    </tr>

    <tr>
      <td>
        customerLevel.createdOn
      </td>

      <td>
        Timestamp indicating when the customer-level restriction was created.
      </td>
    </tr>

    <tr>
      <td>
        customerLevel.updatedOn
      </td>

      <td>
        Timestamp indicating when the customer-level restriction was last updated.
      </td>
    </tr>

    <tr>
      <td>
        customerLevel.createdBy
      </td>

      <td>
        Identifier of the user who created the customer-level restriction.
      </td>
    </tr>

    <tr>
      <td>
        customerLevel.updatedBy
      </td>

      <td>
        Identifier of the user who last updated the customer-level restriction.
      </td>
    </tr>

    <tr>
      <td>
        customerLevel.createdOnDateTime
      </td>

      <td>
        Date and time when the customer-level restriction was created in ISO 8601 format.
      </td>
    </tr>

    <tr>
      <td>
        customerLevel.updatedOnDateTime
      </td>

      <td>
        Date and time when the customer-level restriction was last updated in ISO 8601 format.
      </td>
    </tr>

    <tr>
      <td>
        **rewardLevel**
      </td>

      <td>
        Defines the total number of times a reward can be issued across all customers.
      </td>
    </tr>

    <tr>
      <td>
        rewardLevel.id
      </td>

      <td>
        Unique identifier for the reward-level restriction.
      </td>
    </tr>

    <tr>
      <td>
        rewardLevel.repeatFrequencyType
      </td>

      <td>
        Defines how often the reward limit resets when `windowType` is set to `FIXED`.
      </td>
    </tr>

    <tr>
      <td>
        rewardLevel.limit
      </td>

      <td>
        Defines the maximum number of times the reward can be issued across all customers during a fixed window.
      </td>
    </tr>

    <tr>
      <td>
        rewardLevel.kpi
      </td>

      <td>
        Indicates the Key Performance Indicator (KPI) on which the reward is created.
      </td>
    </tr>

    <tr>
      <td>
        rewardLevel.windowType
      </td>

      <td>
        Specifies the type of window for the reward.
      </td>
    </tr>

    <tr>
      <td>
        rewardLevel.weekStartDay
      </td>

      <td>
        Specifies the day of the week that the week starts on.
      </td>
    </tr>

    <tr>
      <td>
        rewardLevel.createdOn
      </td>

      <td>
        Timestamp indicating when the reward-level restriction was created.
      </td>
    </tr>

    <tr>
      <td>
        rewardLevel.updatedOn
      </td>

      <td>
        Timestamp indicating when the reward-level restriction was last updated.
      </td>
    </tr>

    <tr>
      <td>
        rewardLevel.createdBy
      </td>

      <td>
        Identifier of the user who created the reward-level restriction.
      </td>
    </tr>

    <tr>
      <td>
        rewardLevel.updatedBy
      </td>

      <td>
        Identifier of the user who last updated the reward-level restriction.
      </td>
    </tr>

    <tr>
      <td>
        rewardLevel.createdOnDateTime
      </td>

      <td>
        Date and time when the reward-level restriction was created in ISO 8601 format.
      </td>
    </tr>

    <tr>
      <td>
        rewardLevel.updatedOnDateTime
      </td>

      <td>
        Date and time when the reward-level restriction was last updated in ISO 8601 format.
      </td>
    </tr>
  </tbody>
</Table>

<br />

```json
{
    "status": {
        "success": true,
        "code": 6001,
        "message": "Reward fetched successfully"
    },
    "reward": {
        "id": 334004,
        "type": "VOUCHER",
        "startDate": "2025-09-26 20:00:00",
        "startDateTime": "2025-09-26T20:00:00Z",
        "endDate": "2026-10-31 11:59:30",
        "endDateTime": "2026-10-31T11:59:30Z",
        "enabled": true,
        "priority": null,
        "intouchPoints": 500,
        "intouchSeriesId": "301233",
        "tier": null,
        "group": null,
        "tillId": null,
        "programId": null,
        "label": null,
        "redemptionType": "INTOUCH_REWARD",
        "vendorId": null,
        "vendorRedemption": null,
        "communications": null,
        "categories": [
            229
        ],
        "geography": null,
        "languageSpecificInfo": [
            {
                "rewardId": 334004,
                "languageCode": "en",
                "name": "jogoldhindi",
                "description": "testreward1",
                "termNConditionsId": null,
                "termNConditionsUrl": null,
                "imageId": null,
                "imageUrl": null,
                "thumbnailId": null,
                "thumbnailUrl": null,
                "enabled": true,
                "images": [],
                "videos": [],
                "customFields": {}
            },
            {
                "rewardId": 334004,
                "languageCode": "hin1",
                "name": "jogold",
                "description": "testreward1",
                "termNConditionsId": null,
                "termNConditionsUrl": null,
                "imageId": null,
                "imageUrl": null,
                "thumbnailId": null,
                "thumbnailUrl": null,
                "enabled": true,
                "images": [],
                "videos": [],
                "customFields": {}
            }
        ],
        "customFields": {},
        "owners": null,
        "supplementaryCriteriaRO": [],
        "groups": [],
        "rewardRank": null,
        "restrictions": null,
        "rewardRevenueMeta": [],
        "rewardRevenueDefaults": [],
        "paymentConfigs": null,
        "segment": [],
        "cards": null,
        "labels": null
    }
}
```
```json With Segment and Partition ID
{
    "status": {
        "success": true,
        "code": 6001,
        "message": "Reward fetched successfully"
    },
    "reward": {
        "id": 275829,
        "type": "FREE_VOUCHER",
        "startDate": "2024-12-03 05:14:26",
        "endDate": "2027-01-15 07:26:45",
        "enabled": true,
        "priority": 1,
        "intouchPoints": 1,
        "intouchSeriesId": "6602d0937ea62412eec7b38d",
        "tier": "SILVER",
        "group": null,
        "tillId": null,
        "programId": null,
        "label": null,
        "redemptionType": "CART_PROMOTION",
        "vendorId": null,
        "vendorRedemption": null,
        "communications": null,
        "categories": [
            5
        ],
        "geography": null,
        "languageSpecificInfo": [
            {
                "rewardId": 275829,
                "languageCode": "en",
                "name": " INTOUCH Enabled",
                "description": "Description",
                "termNConditionsId": "EXDR12987R",
                "termNConditionsUrl": "https://s3.eu-west-1.amazonaws.com/eucrm-solutions/BUKL/EXDR12987R?X-Amz-Security-Token=FwoGZXIvYXdzEB8aDEH6QR9s%2BpLD0fCbLCLMAUM2SEjGCCEzL31jIF40zqCOOoNMci6MVRtQw6w26Ho%2FgAwfedshL3nsgLbNx%2BKfNfz434X5KfpEwXeoYy2QfRLXdEYBjech7fTV62ig23q%2BW33fcsU6R6rvLF1U4%2Fd9%2FSvkcaEJjXT7OEKRLSsL49gKeaYEpHBJV%2BPPKNZXL9yObltXyBvaL63k6OoJ6F7P8ldLsWTmCK%2FCLNdGrYKEDVfg72oTSIp9opLTT%2BRaB%2BRtpUnvi0trD6ANhJc%2FPuGx0naVUfGx11%2BWE9xBnSjvhbW6BjItA1S0NlYPzjTnBrrxJImF8dT9eMh6xxzgxiEsVhqPfNZdGoELNjLgkrYP7Ejg&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241202T051735Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIAXKEP2EMBUY53NIHR%2F20241202%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Signature=a02e79699ec1c3d25a15cdbe5fb9c486482a89621c74c39f20a97ba641162189",
                "imageId": "EXDR12987U",
                "imageUrl": "https://s3.eu-west-1.amazonaws.com/eucrm-solutions/BUKL/EXDR12987U?X-Amz-Security-Token=FwoGZXIvYXdzEB8aDEH6QR9s%2BpLD0fCbLCLMAUM2SEjGCCEzL31jIF40zqCOOoNMci6MVRtQw6w26Ho%2FgAwfedshL3nsgLbNx%2BKfNfz434X5KfpEwXeoYy2QfRLXdEYBjech7fTV62ig23q%2BW33fcsU6R6rvLF1U4%2Fd9%2FSvkcaEJjXT7OEKRLSsL49gKeaYEpHBJV%2BPPKNZXL9yObltXyBvaL63k6OoJ6F7P8ldLsWTmCK%2FCLNdGrYKEDVfg72oTSIp9opLTT%2BRaB%2BRtpUnvi0trD6ANhJc%2FPuGx0naVUfGx11%2BWE9xBnSjvhbW6BjItA1S0NlYPzjTnBrrxJImF8dT9eMh6xxzgxiEsVhqPfNZdGoELNjLgkrYP7Ejg&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241202T051735Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3599&X-Amz-Credential=ASIAXKEP2EMBUY53NIHR%2F20241202%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Signature=0f9bb6c2eb798b530ecf39ee547445776692ddfdc476fa78ff66dc24d32f2bac",
                "thumbnailId": "EXDR12987T",
                "thumbnailUrl": "https://s3.eu-west-1.amazonaws.com/eucrm-solutions/BUKL/EXDR12987T?X-Amz-Security-Token=FwoGZXIvYXdzEB8aDEH6QR9s%2BpLD0fCbLCLMAUM2SEjGCCEzL31jIF40zqCOOoNMci6MVRtQw6w26Ho%2FgAwfedshL3nsgLbNx%2BKfNfz434X5KfpEwXeoYy2QfRLXdEYBjech7fTV62ig23q%2BW33fcsU6R6rvLF1U4%2Fd9%2FSvkcaEJjXT7OEKRLSsL49gKeaYEpHBJV%2BPPKNZXL9yObltXyBvaL63k6OoJ6F7P8ldLsWTmCK%2FCLNdGrYKEDVfg72oTSIp9opLTT%2BRaB%2BRtpUnvi0trD6ANhJc%2FPuGx0naVUfGx11%2BWE9xBnSjvhbW6BjItA1S0NlYPzjTnBrrxJImF8dT9eMh6xxzgxiEsVhqPfNZdGoELNjLgkrYP7Ejg&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241202T051735Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIAXKEP2EMBUY53NIHR%2F20241202%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Signature=d2f957cbf5e04385d0b050bf0200c29e5780d4a41f7a835933dc2280ef4c5489",
                "enabled": true,
                "images": [],
                "videos": [],
                "customFields": {
                    "testdate": "2020-01-01 01:01:01"
                }
            }
        ],
        "customFields": {
            "testdate": "2020-01-01 01:01:01"
        },
        "owners": null,
        "supplementaryCriteriaRO": [],
        "groups": [
            {
                "groupName": "The Home Depot",
                "groupRank": 1
            },
            {
                "groupName": "Kellanova Rewards",
                "groupRank": null
            }
        ],
        "rewardRank": 10,
        "restrictions": {
            "customerLevel": [
                {
                    "id": 21695,
                    "repeatFrequencyType": "DAYS",
                    "limit": 10,
                    "interval": 30,
                    "kpi": "QUANTITY"
                },
                {
                    "id": 21696,
                    "repeatFrequencyType": "MONTHS",
                    "limit": 50,
                    "interval": 12,
                    "kpi": "QUANTITY"
                }
            ],
            "rewardLevel": [
                {
                    "id": 21694,
                    "repeatFrequencyType": "NO_LIMIT",
                    "limit": 10000,
                    "kpi": "QUANTITY"
                }
            ]
        },
        "rewardRevenueMeta": [],
        "rewardRevenueDefaults": [],
        "paymentConfigs": [
            {
                "paymentMode": "CONV_RATIO",
                "id": 11,
                "conversionRatio": 0.33
            }
        ],
        "segment": [
            {
                "segmentId": "6136",
                "partitionId": [
                    "2675"
                ]
            }
        ],
        "cards": null,
        "labels": []
    }
}
```
```json With Cards
{
    "status": {
        "success": true,
        "code": 6001,
        "message": "Reward fetched successfully"
    },
    "reward": {
        "id": 285131,
        "type": "FREE_VOUCHER",
        "startDate": "2025-11-28 13:56:00",
        "endDate": "2026-11-28 14:10:00",
        "enabled": true,
        "priority": 1,
        "intouchPoints": 0,
        "intouchSeriesId": null,
        "tier": "PLATINUM",
        "group": null,
        "tillId": null,
        "programId": null,
        "label": null,
        "redemptionType": "PHYSICAL_REWARD",
        "vendorId": null,
        "vendorRedemption": null,
        "communications": null,
        "categories": [],
        "geography": null,
        "languageSpecificInfo": [
            {
                "rewardId": 285131,
                "languageCode": "en",
                "name": " INTOUCH Enabled",
                "description": "Description",
                "termNConditionsId": "EXDR12987R",
                "termNConditionsUrl": "https://s3.eu-west-1.amazonaws.com/eucrm-solutions/BUKL/EXDR12987R?X-Amz-Security-Token=FwoGZXIvYXdzEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDL6O%2FKoTICzLkDy8DiLMAcE7CWzspkAB%2BVnSL37PeVgwEQE6Y%2Fy4Xpik1znpHFktlC33uDYO%2B1JxmLjy2VRr5C6HJ2bsgHXlcBhVF4Pegrj8gZ6mMJpeJYVWMvMUeE1xN%2FREa1dAL4V5XV3rjHRDSc24fVLAAerYzQ5D5a0oGy6KLP5xGu9OnPbAeQVUNOkrDpvVivN4cXFSkNhJtz%2FWkaddTBSTTUAAyGXaLMU1xYsOkPf%2FgXXunXm2vHdd6%2BsHw5RnltXHs%2FZ%2BOWVSO8RojtvzXDZkJ6t2jLH1PiiJvIm7BjItbQY7QS%2B5EAmU1eOOR%2FzRSRTo0r3spUfS1fLeHexFjeXG88tMBFDq9INiow8u&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241218T053100Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIAXKEP2EMB2AHTQVTQ%2F20241218%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Signature=0ec51631b66041f63dc34fcbf79d437f4549d272ca7bec7921cdf6b5a18cf3c1",
                "imageId": "EXDR12987U",
                "imageUrl": "https://s3.eu-west-1.amazonaws.com/eucrm-solutions/BUKL/EXDR12987U?X-Amz-Security-Token=FwoGZXIvYXdzEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDL6O%2FKoTICzLkDy8DiLMAcE7CWzspkAB%2BVnSL37PeVgwEQE6Y%2Fy4Xpik1znpHFktlC33uDYO%2B1JxmLjy2VRr5C6HJ2bsgHXlcBhVF4Pegrj8gZ6mMJpeJYVWMvMUeE1xN%2FREa1dAL4V5XV3rjHRDSc24fVLAAerYzQ5D5a0oGy6KLP5xGu9OnPbAeQVUNOkrDpvVivN4cXFSkNhJtz%2FWkaddTBSTTUAAyGXaLMU1xYsOkPf%2FgXXunXm2vHdd6%2BsHw5RnltXHs%2FZ%2BOWVSO8RojtvzXDZkJ6t2jLH1PiiJvIm7BjItbQY7QS%2B5EAmU1eOOR%2FzRSRTo0r3spUfS1fLeHexFjeXG88tMBFDq9INiow8u&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241218T053100Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIAXKEP2EMB2AHTQVTQ%2F20241218%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Signature=6c5c14013bb68f52e3cacb2b659133ad46bdafaf99812eb99c266232c2745e3c",
                "thumbnailId": "EXDR12987T",
                "thumbnailUrl": "https://s3.eu-west-1.amazonaws.com/eucrm-solutions/BUKL/EXDR12987T?X-Amz-Security-Token=FwoGZXIvYXdzEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDL6O%2FKoTICzLkDy8DiLMAcE7CWzspkAB%2BVnSL37PeVgwEQE6Y%2Fy4Xpik1znpHFktlC33uDYO%2B1JxmLjy2VRr5C6HJ2bsgHXlcBhVF4Pegrj8gZ6mMJpeJYVWMvMUeE1xN%2FREa1dAL4V5XV3rjHRDSc24fVLAAerYzQ5D5a0oGy6KLP5xGu9OnPbAeQVUNOkrDpvVivN4cXFSkNhJtz%2FWkaddTBSTTUAAyGXaLMU1xYsOkPf%2FgXXunXm2vHdd6%2BsHw5RnltXHs%2FZ%2BOWVSO8RojtvzXDZkJ6t2jLH1PiiJvIm7BjItbQY7QS%2B5EAmU1eOOR%2FzRSRTo0r3spUfS1fLeHexFjeXG88tMBFDq9INiow8u&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241218T053100Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIAXKEP2EMB2AHTQVTQ%2F20241218%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Signature=f36461d01eb3b5e7004f69df6fd1e90bd4490f4e0676aef4f36f888c69807b4c",
                "enabled": true,
                "images": [],
                "videos": [],
                "customFields": {
                    "testdate": "2020-01-01 01:01:01"
                }
            }
        ],
        "customFields": {
            "testdate": "2020-01-01 01:01:01"
        },
        "owners": null,
        "supplementaryCriteriaRO": [],
        "groups": [],
        "rewardRank": null,
        "restrictions": null,
        "rewardRevenueMeta": [],
        "rewardRevenueDefaults": [],
        "paymentConfigs": null,
        "segment": [],
        "cardSeries": [
            {
                "id": 158,
                "code": "26NOV2024TRYLEN17"
            },
            {
                "id": 159,
                "code": "26NOV2024TRYLEN18"
            }
        ],
        "labels": null
    }
}
```
```json With Labels
{
    "status": {
        "success": true,
        "code": 6001,
        "message": "Reward fetched successfully"
    },
    "reward": {
        "id": 285132,
        "type": "FREE_VOUCHER",
        "startDate": "2025-11-28 13:56:00",
        "endDate": "2026-11-28 14:10:00",
        "enabled": true,
        "priority": 1,
        "intouchPoints": 0,
        "intouchSeriesId": null,
        "tier": "PLATINUM",
        "group": null,
        "tillId": null,
        "programId": null,
        "label": null,
        "redemptionType": "PHYSICAL_REWARD",
        "vendorId": null,
        "vendorRedemption": null,
        "communications": null,
        "categories": [],
        "geography": null,
        "languageSpecificInfo": [
            {
                "rewardId": 285132,
                "languageCode": "en",
                "name": " INTOUCH Enabled",
                "description": "Description",
                "termNConditionsId": "EXDR12987R",
                "termNConditionsUrl": "https://s3.eu-west-1.amazonaws.com/eucrm-solutions/BUKL/EXDR12987R?X-Amz-Security-Token=FwoGZXIvYXdzEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDFxdV1gYlKLzLNiCnyLMAfXpuU8lo%2F68GeRLMF3%2FN1CyDf6CP73dqIIhHjl%2FdmjfV%2FSDrNS0K0Imfh5kS4XiQo9PV%2FFfS3hbkQapEb%2FJqbZ4ZRIaosH2pp6niOxmntCLCgKosDCe1%2B3ZzqwAXi4SffMv39DUpcwkijRS0V%2BO4IF6QxhR6ftWr3WgxNmOLyKDJQ24GRKyWNkugyGDJmlARbcXoJUk%2FYSMQLHmNZ0kOQ1RUX%2BEAZM%2B%2BertX%2B7apw9a4rwNQTDpyBQfuxhGXQFUvYOw29TeD%2B5lqwiqgijlu4m7BjItFXnYIJPLJBnocGeTFvZyRLVgOd5xXgQeXG8sTh5Ffr16yFgF49OOFi7KHEhy&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241218T054136Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIAXKEP2EMBZHQLFRXX%2F20241218%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Signature=2c33f149316ca3f9d8c3dd00ceb5a8c55a8ee68e929a955b8f741ff70637f9fa",
                "imageId": "EXDR12987U",
                "imageUrl": "https://s3.eu-west-1.amazonaws.com/eucrm-solutions/BUKL/EXDR12987U?X-Amz-Security-Token=FwoGZXIvYXdzEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDFxdV1gYlKLzLNiCnyLMAfXpuU8lo%2F68GeRLMF3%2FN1CyDf6CP73dqIIhHjl%2FdmjfV%2FSDrNS0K0Imfh5kS4XiQo9PV%2FFfS3hbkQapEb%2FJqbZ4ZRIaosH2pp6niOxmntCLCgKosDCe1%2B3ZzqwAXi4SffMv39DUpcwkijRS0V%2BO4IF6QxhR6ftWr3WgxNmOLyKDJQ24GRKyWNkugyGDJmlARbcXoJUk%2FYSMQLHmNZ0kOQ1RUX%2BEAZM%2B%2BertX%2B7apw9a4rwNQTDpyBQfuxhGXQFUvYOw29TeD%2B5lqwiqgijlu4m7BjItFXnYIJPLJBnocGeTFvZyRLVgOd5xXgQeXG8sTh5Ffr16yFgF49OOFi7KHEhy&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241218T054136Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIAXKEP2EMBZHQLFRXX%2F20241218%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Signature=2c075879e5bd1e7095bbe1783b02c641d50cbe986bb6e141444425ad8b080b41",
                "thumbnailId": "EXDR12987T",
                "thumbnailUrl": "https://s3.eu-west-1.amazonaws.com/eucrm-solutions/BUKL/EXDR12987T?X-Amz-Security-Token=FwoGZXIvYXdzEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDFxdV1gYlKLzLNiCnyLMAfXpuU8lo%2F68GeRLMF3%2FN1CyDf6CP73dqIIhHjl%2FdmjfV%2FSDrNS0K0Imfh5kS4XiQo9PV%2FFfS3hbkQapEb%2FJqbZ4ZRIaosH2pp6niOxmntCLCgKosDCe1%2B3ZzqwAXi4SffMv39DUpcwkijRS0V%2BO4IF6QxhR6ftWr3WgxNmOLyKDJQ24GRKyWNkugyGDJmlARbcXoJUk%2FYSMQLHmNZ0kOQ1RUX%2BEAZM%2B%2BertX%2B7apw9a4rwNQTDpyBQfuxhGXQFUvYOw29TeD%2B5lqwiqgijlu4m7BjItFXnYIJPLJBnocGeTFvZyRLVgOd5xXgQeXG8sTh5Ffr16yFgF49OOFi7KHEhy&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241218T054136Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIAXKEP2EMBZHQLFRXX%2F20241218%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Signature=7ec80a41a78f17904036103194476e5ec306df5745023aee27d0b6d493f0818b",
                "enabled": true,
                "images": [],
                "videos": [],
                "customFields": {
                    "testdate": "2020-01-01 01:01:01"
                }
            }
        ],
        "customFields": {
            "testdate": "2020-01-01 01:01:01"
        },
        "owners": null,
        "supplementaryCriteriaRO": [],
        "groups": [],
        "rewardRank": null,
        "restrictions": null,
        "rewardRevenueMeta": [],
        "rewardRevenueDefaults": [],
        "paymentConfigs": null,
        "segment": [],
        "cards": null,
        "labels": [
            12751,12752
        ]
    }
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
        "id": 316356,
        "type": "FREE_VOUCHER",
        "startDate": "2025-02-12 05:59:00",
        "endDate": "2025-12-30 12:50:20",
        "enabled": true,
        "priority": 1,
        "intouchPoints": 0,
        "intouchSeriesId": null,
        "tier": "PLATINUM",
        "group": null,
        "tillId": null,
        "programId": null,
        "label": null,
        "redemptionType": "PHYSICAL_REWARD",
        "vendorId": null,
        "vendorRedemption": null,
        "communications": null,
        "categories": [],
        "geography": null,
        "languageSpecificInfo": [
            {
                "rewardId": 316356,
                "languageCode": "en",
                "name": " INTOUCH Enabled",
                "description": "Description",
                "termNConditionsId": "EXDR12987R",
                "termNConditionsUrl": "https://s3.eu-west-1.amazonaws.com/eucrm-solutions/DOCDEMO/EXDR12987R?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCWV1LXdlc3QtMSJIMEYCIQCHxXxuzFsKGh4jJe8nHWJC8HpR%2F3JEbwYOoEbvWHcRAgIhAPHRhNSihPD%2FLbllR5gTsy3JwRbbW2B9gNc%2BnfnsMyq3Kr4CCOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNTAyODEyNzc5MjY3IgzR86kFkYBtTNYWUGEqkgIRCzR%2FTzOgs49WDyP4TG2upwP1cOLb%2FdD624eALCKdqLr13XWC66rOCiThnqfRowrl%2B1uC%2BHOZxaE%2FkNhkunfgpd9GQrySwEjHECw%2BJUWnbBNWq%2FxV4MfzPZD7nQEUvoRdhNnNhclJQiyvq088Uc%2BQpRJ6ocbjZK4pd0UHPsFM1GtyOFrPJAObFHKtAAjxwi4NENFeMYb90Yy43d%2B6Yi%2F8H0FCreqVqxnfqtWzomYy9s49lBmuL3tB89dt2PUCh4%2FivNQRPzVTNX1M9JI7IASl5GwLIo9FYzxfpbmmAPZqouGubstMGddC122zSBnv%2BkxpJY5lOYAd4ZAF1lFLeEi0iWlVNDkI%2BpDul8chs%2FguWzLHMOKpsb0GOpwBplJpeihD7zlre1M2WZy9hyNkEEY0GHgsIJHXGYbdv6ZUDErV654w%2FugSzUO%2FhSkwnkywvQssqWQBVqUBSb5KiMoc7oRj2uiXzZdhgvBEftPXvWR1gKenEaRE70ZhE51bYLCTES%2F6nkZz%2FIDbwWTU4plCc3JIN1Um3C0jjQQwCqV5pELcdtrMsPrNNmQ41aDlL9pNT01YT7k1svL1&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20250212T075930Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIAXKEP2EMB4DAMOMRZ%2F20250212%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Signature=ba3dc28fada891e7e9c25534a7d364d85253c8db1471725e5204fe32eed7482c",
                "imageId": "EXDR12987U",
                "imageUrl": "https://s3.eu-west-1.amazonaws.com/eucrm-solutions/DOCDEMO/EXDR12987U?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCWV1LXdlc3QtMSJIMEYCIQCHxXxuzFsKGh4jJe8nHWJC8HpR%2F3JEbwYOoEbvWHcRAgIhAPHRhNSihPD%2FLbllR5gTsy3JwRbbW2B9gNc%2BnfnsMyq3Kr4CCOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNTAyODEyNzc5MjY3IgzR86kFkYBtTNYWUGEqkgIRCzR%2FTzOgs49WDyP4TG2upwP1cOLb%2FdD624eALCKdqLr13XWC66rOCiThnqfRowrl%2B1uC%2BHOZxaE%2FkNhkunfgpd9GQrySwEjHECw%2BJUWnbBNWq%2FxV4MfzPZD7nQEUvoRdhNnNhclJQiyvq088Uc%2BQpRJ6ocbjZK4pd0UHPsFM1GtyOFrPJAObFHKtAAjxwi4NENFeMYb90Yy43d%2B6Yi%2F8H0FCreqVqxnfqtWzomYy9s49lBmuL3tB89dt2PUCh4%2FivNQRPzVTNX1M9JI7IASl5GwLIo9FYzxfpbmmAPZqouGubstMGddC122zSBnv%2BkxpJY5lOYAd4ZAF1lFLeEi0iWlVNDkI%2BpDul8chs%2FguWzLHMOKpsb0GOpwBplJpeihD7zlre1M2WZy9hyNkEEY0GHgsIJHXGYbdv6ZUDErV654w%2FugSzUO%2FhSkwnkywvQssqWQBVqUBSb5KiMoc7oRj2uiXzZdhgvBEftPXvWR1gKenEaRE70ZhE51bYLCTES%2F6nkZz%2FIDbwWTU4plCc3JIN1Um3C0jjQQwCqV5pELcdtrMsPrNNmQ41aDlL9pNT01YT7k1svL1&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20250212T075930Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3599&X-Amz-Credential=ASIAXKEP2EMB4DAMOMRZ%2F20250212%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Signature=b0ae5fced49362da529ae652d280cc8fa42186556e64851e20f3b5bd0cc63613",
                "thumbnailId": "EXDR12987T",
                "thumbnailUrl": "https://s3.eu-west-1.amazonaws.com/eucrm-solutions/DOCDEMO/EXDR12987T?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCWV1LXdlc3QtMSJIMEYCIQCHxXxuzFsKGh4jJe8nHWJC8HpR%2F3JEbwYOoEbvWHcRAgIhAPHRhNSihPD%2FLbllR5gTsy3JwRbbW2B9gNc%2BnfnsMyq3Kr4CCOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNTAyODEyNzc5MjY3IgzR86kFkYBtTNYWUGEqkgIRCzR%2FTzOgs49WDyP4TG2upwP1cOLb%2FdD624eALCKdqLr13XWC66rOCiThnqfRowrl%2B1uC%2BHOZxaE%2FkNhkunfgpd9GQrySwEjHECw%2BJUWnbBNWq%2FxV4MfzPZD7nQEUvoRdhNnNhclJQiyvq088Uc%2BQpRJ6ocbjZK4pd0UHPsFM1GtyOFrPJAObFHKtAAjxwi4NENFeMYb90Yy43d%2B6Yi%2F8H0FCreqVqxnfqtWzomYy9s49lBmuL3tB89dt2PUCh4%2FivNQRPzVTNX1M9JI7IASl5GwLIo9FYzxfpbmmAPZqouGubstMGddC122zSBnv%2BkxpJY5lOYAd4ZAF1lFLeEi0iWlVNDkI%2BpDul8chs%2FguWzLHMOKpsb0GOpwBplJpeihD7zlre1M2WZy9hyNkEEY0GHgsIJHXGYbdv6ZUDErV654w%2FugSzUO%2FhSkwnkywvQssqWQBVqUBSb5KiMoc7oRj2uiXzZdhgvBEftPXvWR1gKenEaRE70ZhE51bYLCTES%2F6nkZz%2FIDbwWTU4plCc3JIN1Um3C0jjQQwCqV5pELcdtrMsPrNNmQ41aDlL9pNT01YT7k1svL1&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20250212T075930Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIAXKEP2EMB4DAMOMRZ%2F20250212%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Signature=4396fceaf5cc64a17c7fbe7f7e11389431edab9602bb4b20938bdcc2aa3d7e4e",
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
                "customFields": {}
            }
        ],
        "customFields": {},
        "owners": null,
        "supplementaryCriteriaRO": [],
        "groups": [],
        "rewardRank": null,
        "restrictions": null,
        "rewardRevenueMeta": [],
        "rewardRevenueDefaults": [],
        "paymentConfigs": null,
        "segment": [],
        "cards": null,
        "labels": null
    }
}
```
```Text With RichTextcontent
{
    "status": {
        "success": true,
        "code": 6001,
        "message": "Reward fetched successfully"
    },
    "reward": {
        "id": 336588,
        "type": "POINTS",
        "startDate": "2025-03-17 20:00:00",
        "startDateTime": "2025-03-17T20:00:00Z",
        "endDate": "2026-10-31 11:59:30",
        "endDateTime": "2026-10-31T11:59:30Z",
        "enabled": true,
        "priority": null,
        "intouchPoints": 500,
        "intouchSeriesId": "301233",
        "tier": null,
        "group": null,
        "tillId": null,
        "programId": null,
        "label": null,
        "redemptionType": "INTOUCH_REWARD",
        "vendorId": null,
        "vendorRedemption": null,
        "communications": null,
        "categories": [
            229
        ],
        "geography": null,
        "languageSpecificInfo": [
            {
                "rewardId": 336588,
                "languageCode": "en",
                "name": "jogold",
                "description": "testreward1",
                "termNConditionsId": null,
                "termNConditionsUrl": null,
                "imageId": null,
                "imageUrl": null,
                "thumbnailId": null,
                "thumbnailUrl": null,
                "enabled": true,
                "images": [],
                "videos": [],
                "customFields": {},
                "richContentRO": {
                    "RC345": {
                        "content": "en",
                        "isEnabled": true
                    },
                    "RCtestgeorgetrue": {
                        "content": "en",
                        "isEnabled": true
                    },
                    "RCtestgeorge2": {
                        "content": "en",
                        "isEnabled": true
                    },
                    "RCtestCREATE": {
                        "content": "en",
                        "isEnabled": true
                    }
                }
            },
            {
                "rewardId": 336588,
                "languageCode": "hin1",
                "name": "jogold",
                "description": "testreward1",
                "termNConditionsId": null,
                "termNConditionsUrl": null,
                "imageId": null,
                "imageUrl": null,
                "thumbnailId": null,
                "thumbnailUrl": null,
                "enabled": true,
                "images": [],
                "videos": [],
                "customFields": {},
                "richContentRO": {
                    "RC345": {
                        "content": "en",
                        "isEnabled": true
                    },
                    "RCtestgeorgetrue": {
                        "content": "en",
                        "isEnabled": true
                    },
                    "RCtestgeorge2": {
                        "content": "en",
                        "isEnabled": true
                    },
                    "RCtestCREATE": {
                        "content": "en",
                        "isEnabled": true
                    }
                }
            }
        ],
        "customFields": {},
        "owners": null,
        "supplementaryCriteriaRO": [],
        "groups": [],
        "rewardRank": null,
        "restrictions": null,
        "rewardRevenueMeta": [],
        "rewardRevenueDefaults": [],
        "paymentConfigs": null,
        "segment": [],
        "cardSeries": null,
        "labels": null,
        "createdBy": null,
        "lastUpdatedBy": null
    }
}
```
```json With Frequency restriction
{
    "status": {
        "success": true,
        "code": 6001,
        "message": "Reward fetched successfully"
    },
    "reward": {
        "id": 401279,
        "type": "FREE_VOUCHER",
        "startDate": "2025-03-18 07:46:55",
        "startDateTime": "2025-03-18T07:46:55Z",
        "endDate": "2025-10-04 07:46:55",
        "endDateTime": "2025-10-04T07:46:55Z",
        "enabled": true,
        "priority": null,
        "intouchPoints": 0,
        "intouchSeriesId": null,
        "tier": null,
        "group": null,
        "tillId": null,
        "programId": null,
        "label": null,
        "redemptionType": "AUCTION",
        "vendorId": null,
        "vendorRedemption": null,
        "communications": null,
        "categories": [],
        "geography": null,
        "languageSpecificInfo": [
            {
                "rewardId": 401279,
                "languageCode": "en",
                "name": "english rewardName",
                "description": "hello",
                "termNConditionsId": null,
                "termNConditionsUrl": null,
                "imageId": null,
                "imageUrl": null,
                "thumbnailId": null,
                "thumbnailUrl": null,
                "enabled": true,
                "images": [],
                "videos": [],
                "customFields": {},
                "richContentRO": {
                    "RCtest": {
                        "content": "en",
                        "isEnabled": true
                    },
                    "RC345": {
                        "content": "en",
                        "isEnabled": true
                    },
                    "RCtestgeorgetrue": {
                        "content": "en",
                        "isEnabled": true
                    },
                    "RCtestgeorge2": {
                        "content": "en",
                        "isEnabled": true
                    },
                    "richcontentfrench": {
                        "content": "this is the default value",
                        "isEnabled": true
                    },
                    "RCtestCREATE": {
                        "content": "en",
                        "isEnabled": true
                    },
                    "RCtestgeorge4": {
                        "content": "en",
                        "isEnabled": true
                    },
                    "richcontentenglish": {
                        "content": "this is the default value",
                        "isEnabled": true
                    },
                    "Golden2reward": {
                        "content": "20% Discount Applied",
                        "isEnabled": true
                    }
                }
            }
        ],
        "customFields": {},
        "owners": null,
        "supplementaryCriteriaRO": [],
        "groups": [],
        "rewardRank": null,
        "restrictions": {
            "customerLevel": [
                {
                    "id": 37823,
                    "repeatFrequencyType": "DAYS",
                    "limit": 2,
                    "interval": 2,
                    "kpi": "QUANTITY",
                    "windowType": "FIXED",
                    "startOfCycle": "2025-06-24T13:00:00Z",
                    "createdOn": 1751266773000,
                    "updatedOn": 1751266773000,
                    "createdBy": 75161973,
                    "updatedBy": 75161973,
                    "createdOnDateTime": "2025-06-30T06:59:33Z",
                    "updatedOnDateTime": "2025-06-30T06:59:33Z"
                },
                {
                    "id": 37824,
                    "repeatFrequencyType": "MONTHS",
                    "limit": 6,
                    "kpi": "QUANTITY",
                    "windowType": "FIXED",
                    "createdOn": 1751266773000,
                    "updatedOn": 1751266773000,
                    "createdBy": 75161973,
                    "updatedBy": 75161973,
                    "createdOnDateTime": "2025-06-30T06:59:33Z",
                    "updatedOnDateTime": "2025-06-30T06:59:33Z"
                }
            ],
            "rewardLevel": [
                {
                    "id": 37822,
                    "repeatFrequencyType": "WEEKS",
                    "limit": 2,
                    "kpi": "QUANTITY",
                    "windowType": "FIXED",
                    "weekStartDay": "TUESDAY",
                    "createdOn": 1751266773000,
                    "updatedOn": 1751266773000,
                    "createdBy": 75161973,
                    "updatedBy": 75161973,
                    "createdOnDateTime": "2025-06-30T06:59:33Z",
                    "updatedOnDateTime": "2025-06-30T06:59:33Z"
                }
            ]
        },
        "rewardRevenueMeta": [],
        "rewardRevenueDefaults": [],
        "paymentConfigs": null,
        "segment": [],
        "cardSeries": null,
        "labels": null,
        "createdBy": 75161973,
        "lastUpdatedBy": 75161973
    }
}
```

# API-specific error codes

| Error Code | Description                  |
| :--------- | :--------------------------- |
| 6004       | Reward not found or disabled |