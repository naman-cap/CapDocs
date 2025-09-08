---
title: Update Reward
excerpt: ''
api:
  file: v1.json
  operationId: put-update-reward
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
This API is used to update a particular reward.

## Reward Field Editability by State

| Field                                                                | Upcoming | Live | Ended |
| -------------------------------------------------------------------- | :------: | :--: | :---: |
| Start date                                                           |     ✓    |   ✗  |   ✗   |
| End date                                                             |     ✓    |   ✓  |   ✓   |
| Reward enable/disable (yes/no)                                       |     ✓    |   ✓  |   ✓   |
| Reward type                                                          |     ✓    |   ✗  |   ✗   |
| Payment config                                                       |     ✓    |   ✓  |   ✓   |
| Vendor redemption ID                                                 |     ✓    |   ✓  |   ✓   |
| InTouch series ID                                                    |     ✓    |   ✓  |   ✓   |
| Supplementary criteria (loyalty program, tier, subscription program) |     ✓    |   ✓  |   ✓   |
| Labels                                                               |     ✓    |   ✓  |   ✓   |
| Cards                                                                |     ✓    |   ✓  |   ✓   |
| Segments                                                             |     ✓    |   ✓  |   ✓   |
| Groups and rank within group                                         |     ✓    |   ✓  |   ✓   |
| Reward rank                                                          |     ✓    |   ✓  |   ✓   |
| All restrictions/limits/inventory                                    |     ✓    |   ✓  |   ✗   |
| Name                                                                 |     ✓    |   ✓  |   ✓   |
| Description                                                          |     ✓    |   ✓  |   ✓   |
| Terms and conditions                                                 |     ✓    |   ✓  |   ✓   |
| Custom fields                                                        |     ✓    |   ✓  |   ✓   |
| Rich text fields                                                     |     ✓    |   ✓  |   ✓   |
| Reward image                                                         |     ✓    |   ✓  |   ✓   |
| Thumbnail image                                                      |     ✓    |   ✓  |   ✓   |
| New images (name, alt text, URL)                                     |     ✓    |   ✓  |   ✓   |
| Videos (name, alt text, URL)                                         |     ✓    |   ✓  |   ✓   |
| Language enabled (yes/no)                                            |     ✓    |   ✓  |   ✓   |
| Tier                                                                 |     ✓    |   ✓  |   ✓   |
| Group                                                                |     ✓    |   ✓  |   ✓   |
| Label                                                                |     ✓    |   ✓  |   ✓   |
| Categories                                                           |     ✓    |   ✓  |   ✓   |
| Geography                                                            |     ✓    |   ✓  |   ✓   |

> 👍 Note
>
> * For detailed information about our APIs and for hands-on testing, refer documentation in [API overview](https://docs.capillarytech.com/reference/apioverview) and  step-by-step guide on making your first API call in [Make your first API call](https://docs.capillarytech.com/reference/make-your-first-api-call) .
>
> * Start time and end time are in UTC zone
>
> * When you're updating a reward, if you leave out any fields (like `vendorRedemption<code> or </code>intouchSeriesId`), the system will automatically keep the values from the existing reward. So, you only need to provide the fields you want to change—everything else stays the same as before.
>
> * \*\*Linking a reward \*\*- You can link a reward to the card associated with the customer, customer label, customer segments, tiers, or desired loyalty programs. You cannot link same reward to more than one of these at a time. However, you can link same reward to different segments card seriesor others simultaneously.\
>   **Example**: You can link a reward to multiple card series, like "Gold Card Series" and "Platinum Card Series," at the same time. Similarly, you can link a reward to multiple labels, such as "VIP Customers" and "Frequent Buyers." However, you cannot link a reward to both a specific card, like "Gold Card," and a label, such as "VIP Customers," at the same time.
>
> * The type field now supports` POINTS<code>, </code>PHYSICAL_VOUCHER`, and `FREE_VOUCHER<code> (replacing the former voucher option), and the </code>VendorOnlyReward` and `IntouchReward` redemption types have been removed. We recommend updating your integrations with these enhancements for improved performance—see the parameter tables below for details.
>
> * New brands should no longer use the **"intouch points"** field. Instead, they should only use the new **"payment config"** block.

![ ](https://files.readme.io/7aad76be70909a1af79f0d7a6a5c25cd4481d38419cedef537fe7f3860f08027-Screenshot_2024-09-13_174313.png)

# Prerequisites

*   Authentication: Basic or OAuth authentication
*   Default access group

# Resource information

|                        |                                                                                  |
| :--------------------- | :------------------------------------------------------------------------------- |
| URI                    | /api\_gateway/rewards/core/v1/reward/`{reward ID}<code>/brand/</code>{brand ID}` |
| HTTP Method            | PUT                                                                              |
| Pagination             | No                                                                               |
| Batch support          | No                                                                               |
| Rate limit information | None                                                                             |

# API endpoint example

`https://eu.api.capillarytech.com/api_gateway/rewards/core/v1/reward/112295/brand/1`

# Request path parameters

| Parameter Name | Data Type | Description                                                                                                                           |
| :------------- | :-------- | :------------------------------------------------------------------------------------------------------------------------------------ |
| brandId\*      | Long      | Brand ID. You can use the [API ](https://docs.capillarytech.com/reference/retrieve-brand-id) and retrieve the brand ID of your brand. |
| rewardId\*     | String    | Unique reward identidier.                                                                                                             |

# Request Body Parameters

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
        startTime\*
      </td>

      <td>
        DateTime
      </td>

      <td>
        Start Date and time of the reward. It cannot be modified once the reward is live. **Example**: 2024-11-01T06:00:00Z. The timestamp must be in UTC format: YYYY-MM-DDTHH:MM:SSZ.
      </td>
    </tr>

    <tr>
      <td>
        endTime\*
      </td>

      <td>
        DateTime
      </td>

      <td>
        End Date and time of the reward. It can be set to the present or up to 10 years in the paste and remains editable even after the reward is live. **Example**: 2026-11-01T06:00:00Z. The timestamp must be in UTC format: YYYY-MM-DDTHH:MM:SSZ.
      </td>
    </tr>

    <tr>
      <td>
        priority
      </td>

      <td>
        Integer
      </td>

      <td>
        Brands can use Metadata for the reward for UI, auditing, or reporting purposes, and it can be left as null. The priority value must be a non-negative number and cannot be negative.
      </td>
    </tr>

    <tr>
      <td>
        type\*
      </td>

      <td>
        Enum
      </td>

      <td>
        Type of the reward.  <br />Supported values: POINTS, PHYSICAL\_VOUCHER, FREE\_VOUCHER.
      </td>
    </tr>

    <tr>
      <td>
        brandId\*
      </td>

      <td>
        Long
      </td>

      <td>
        You can use the [API](https://docs.capillarytech.com/reference/retrieve-brand-id) and retrieve the brand ID of your brand.
      </td>
    </tr>

    <tr>
      <td>
        enabled
      </td>

      <td>
        Boolean
      </td>

      <td>
        Status of the reward.
      </td>
    </tr>

    <tr>
      <td>
        intouchSeriesId
      </td>

      <td>
        String
      </td>

      <td>
        Coupon series ID or cart promotion ID when intouch reward is selected.
      </td>
    </tr>

    <tr>
      <td>
        tier
      </td>

      <td>
        String
      </td>

      <td>
        The tier level, e.g., "SILVER".
      </td>
    </tr>

    <tr>
      <td>
        geography
      </td>

      <td>
        Object
      </td>

      <td>
        Geographic applicability, including countryId for restriction.
      </td>
    </tr>

    <tr>
      <td>
        paymentConfigs
      </td>

      <td>
        Object
      </td>

      <td>
        The list of payment mode supported by the reward.
      </td>
    </tr>

    <tr>
      <td>
        paymentMode
      </td>

      <td>
        Enum
      </td>

      <td>
        The type of payment mode supported to redeem the reward. Supported values: POINTS, FREE, CASH, POINTS\_CASH, CONV\_RATIO. Multiple payments are not supported within FREE and CONV\_RATIO modes.
        **NOTE**: The same payment method cannot be used twice to create a reward. For example, only the first entry will be considered if you use POINTS twice as a payment mode.
        For more information, refer to [Supported payment modes](https://docs.capillarytech.com/docs/pointscash-journeys-in-rewards-catalog).
      </td>
    </tr>

    <tr>
      <td>
        groups
      </td>

      <td>
        Array of objects
      </td>

      <td>
        An array containing information about groups and rewards associated with reward.
      </td>
    </tr>

    <tr>
      <td>
        groupName
      </td>

      <td>
        String
      </td>

      <td>
        A label assigned to a set of rewards to organize them based on common themes or purposes.
      </td>
    </tr>

    <tr>
      <td>
        groupRank
      </td>

      <td>
        Integer
      </td>

      <td>
        The priority level assigned to a reward group to determine its display order in the catalog.
      </td>
    </tr>

    <tr>
      <td>
        rewardRank
      </td>

      <td>
        Integer
      </td>

      <td>
        The priority level assigned to an individual reward within a group to highlight its importance or relevance.
      </td>
    </tr>

    <tr>
      <td>
        categories
      </td>

      <td>
        Integers
      </td>

      <td>
        Metadata for the reward to categorize different rewards in different categories for end users. If the categories parameter is null in the update reward call, the existing category mappings will remain unchanged. If an empty list of categories is passed, all existing mappings will be removed.
      </td>
    </tr>

    <tr>
      <td>
        redemptionType\*
      </td>

      <td>
        Enum
      </td>

      <td>
        Type of intouch reward or vendor reward.  <br />Supported values: GAMES, AUCTION, CART\_PROMOTION, CASH\_WALLET, VOUCHER, CASH\_BACK, PHYSICAL\_REWARD, CHARITY, MILES, GIFT\_CARD, SWEEPSTAKES, INTOUCH\_REWARD, CARD\_DISC. **Notes**:

        1. Once a reward has been started, the redemptionType cannot be changed.
        2. If redemptionType is MILES, Payment config is mandatory.
        3. CONV\_RATIO mode is supported only for CHARITY, MILES, CASH\_WALLET, SWEEPSTAKES, AUCTION, GIFT\_CARD, PHYSICAL\_REWARD.
        4. If redemptionType is FREE\_VOUCHER and payment mode is set, no points will be deducted.
      </td>
    </tr>

    <tr>
      <td>
        vendorRedemption
      </td>

      <td>
        Object
      </td>

      <td>
        Vendor redemption is the reward configured for a particular vendor.
      </td>
    </tr>

    <tr>
      <td>
        communications
      </td>

      <td>
        String
      </td>

      <td>
        Communication IDs related to the reward.
      </td>
    </tr>

    <tr>
      <td>
        restrictions
      </td>

      <td>
        Object
      </td>

      <td>
        Restrictions on the reward, detailed in customer and reward levels.
      </td>
    </tr>

    <tr>
      <td>
        kpi
      </td>

      <td>
        Enum
      </td>

      <td>
        The KPI on which the reward is created. Supported values: QUANTITY, REDEMPTION\_VALUE\
        QUANTITY: Count of rewards issued or redemption value.
        If the reward has no payment config, quantity is count.
        With config (e.g., CONV\_RATIO), it acts as redemption value.
        REDEMPTION\_VALUE: Only applies to CONV\_RATIO; represents associated value (e.g., miles).
      </td>
    </tr>

    <tr>
      <td>
        limit
      </td>

      <td>
        Integer
      </td>

      <td>
        The maximum number of rewards to be created.
      </td>
    </tr>

    <tr>
      <td>
        repeatFrequencyType
      </td>

      <td>
        Enum
      </td>

      <td>
        The frequency of the reward. Supported values: DAYS, WEEKS, MONTHS.
      </td>
    </tr>

    <tr>
      <td>
        supplementaryCriteriaRO
      </td>

      <td>
        Object
      </td>

      <td>
        Tier/supplementary programs for which the reward is being created.
      </td>
    </tr>

    <tr>
      <td>
        loyaltyProgramId
      </td>

      <td>
        Integer
      </td>

      <td>
        Unique identifier of the loyalty program.
      </td>
    </tr>

    <tr>
      <td>
        tierIds
      </td>

      <td>
        Integer
      </td>

      <td>
        Unique identifier of the tier.
      </td>
    </tr>

    <tr>
      <td>
        partnerProgramIds
      </td>

      <td>
        Integer
      </td>

      <td>
        Unique identifier of the partner program.
      </td>
    </tr>

    <tr>
      <td>
        customFields
      </td>

      <td>
        Object
      </td>

      <td>
        List of reward-level custom fields for additional data like transaction or customer info.
      </td>
    </tr>

    <tr>
      <td>
        languageSpecificInfo
      </td>

      <td>
        Object
      </td>

      <td>
        Enables reward info to be localized. **Note:** No language count limit. **Prerequisite:** Raise a ticket to Capillary to add new languages.
      </td>
    </tr>

    <tr>
      <td>
        languageCode
      </td>

      <td>
        String
      </td>

      <td>
        The ISO code for the language. For ex: FR-French, JA-Japanese etc.
      </td>
    </tr>

    <tr>
      <td>
        name
      </td>

      <td>
        String
      </td>

      <td>
        The name of the reward in the specified language.
      </td>
    </tr>

    <tr>
      <td>
        description
      </td>

      <td>
        String
      </td>

      <td>
        A description of the reward in the specified language.
      </td>
    </tr>

    <tr>
      <td>
        termNConditionsId
      </td>

      <td>
        String
      </td>

      <td>
        The identifier for terms and conditions, generated after upload.
      </td>
    </tr>

    <tr>
      <td>
        imageId
      </td>

      <td>
        String
      </td>

      <td>
        File handle of the main image. Generated after uploading to file service.
      </td>
    </tr>

    <tr>
      <td>
        imageUrl
      </td>

      <td>
        String
      </td>

      <td>
        URL of the image in the file service location.
      </td>
    </tr>

    <tr>
      <td>
        thumbnailId
      </td>

      <td>
        String
      </td>

      <td>
        The identifier for the thumbnail image.
      </td>
    </tr>

    <tr>
      <td>
        enabled
      </td>

      <td>
        Boolean
      </td>

      <td>
        Indicates if the language should be enabled or not.
      </td>
    </tr>

    <tr>
      <td>
        images
      </td>

      <td>
        Object
      </td>

      <td>
        A list of image details for the reward. **Notes:** Up to 10 images, any format, hosted via ID or external URL.
      </td>
    </tr>

    <tr>
      <td>
        name
      </td>

      <td>
        String
      </td>

      <td>
        Name of the image. Must be unique. **Warning:** Only the first if duplicated.
      </td>
    </tr>

    <tr>
      <td>
        id
      </td>

      <td>
        String
      </td>

      <td>
        File handle of the image.
      </td>
    </tr>

    <tr>
      <td>
        isExternal
      </td>

      <td>
        Boolean
      </td>

      <td>
        Indicates if image is hosted externally.
      </td>
    </tr>

    <tr>
      <td>
        url
      </td>

      <td>
        String
      </td>

      <td>
        URL of the image.
      </td>
    </tr>

    <tr>
      <td>
        altText
      </td>

      <td>
        String
      </td>

      <td>
        Alt text (max 1056 chars). Describes image for accessibility or fallback.
      </td>
    </tr>

    <tr>
      <td>
        videos
      </td>

      <td>
        Object
      </td>

      <td>
        A list of video details related to the reward. Same constraints as images.
      </td>
    </tr>

    <tr>
      <td>
        name
      </td>

      <td>
        String
      </td>

      <td>
        Unique video name.\
        **Warning:** Only the first if duplicated.
      </td>
    </tr>

    <tr>
      <td>
        id
      </td>

      <td>
        String
      </td>

      <td>
        File handle of the video.
      </td>
    </tr>

    <tr>
      <td>
        url
      </td>

      <td>
        String
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
        Boolean
      </td>

      <td>
        Indicates if video is hosted externally.
      </td>
    </tr>

    <tr>
      <td>
        altText
      </td>

      <td>
        String
      </td>

      <td>
        Alt text (max 1056 chars). Describes video for accessibility or fallback.
      </td>
    </tr>

    <tr>
      <td>
        customFields
      </td>

      <td>
        Object
      </td>

      <td>
        The list of custom fields. Fallbacks in order: language-specific → reward-level → meta-level.
      </td>
    </tr>

    <tr>
      <td>
        customFieldName
      </td>

      <td>
        String
      </td>

      <td>
        Name of the custom field.
      </td>
    </tr>

    <tr>
      <td>
        customFieldValue
      </td>

      <td>
        String
      </td>

      <td>
        Value of the custom field.
      </td>
    </tr>

    <tr>
      <td>
        owners
      </td>

      <td>
        Object
      </td>

      <td>
        List containing detailed owner information.
      </td>
    </tr>

    <tr>
      <td>
        ownerType
      </td>

      <td>
        Enum
      </td>

      <td>
        Module type. Supported values: LOYALTY\_PROGRAM, MILESTONES, CAMPAIGNS, JOURNEYS, GOODWILL.
      </td>
    </tr>

    <tr>
      <td>
        ownerId
      </td>

      <td>
        String
      </td>

      <td>
        Unique ID of the owner. Multiple supported.
      </td>
    </tr>

    <tr>
      <td>
        rewardRevenueMeta
      </td>

      <td>
        Object
      </td>

      <td>
        Object with commission details for participants over time.
      </td>
    </tr>

    <tr>
      <td>
        commissionParticipant
      </td>

      <td>
        Enum
      </td>

      <td>
        Entity receiving commission.\
        **Supported:** BRAND, CAPILLARY, AFFILIATE, END\_CUSTOMER.
      </td>
    </tr>

    <tr>
      <td>
        commissionRate
      </td>

      <td>
        Float
      </td>

      <td>
        The amount of commission to be received.
      </td>
    </tr>

    <tr>
      <td>
        cycleStartDate
      </td>

      <td>
        Date
      </td>

      <td>
        Start of commission cycle. Must be after rewardStartDate and in future.
      </td>
    </tr>

    <tr>
      <td>
        cycleEndDate
      </td>

      <td>
        Date
      </td>

      <td>
        End of commission cycle. Must be before rewardEndDate and in future.
      </td>
    </tr>

    <tr>
      <td>
        rewardRevenueDefaults
      </td>

      <td>
        Object
      </td>

      <td>
        Object with default commission values. Only first per participant considered.
      </td>
    </tr>

    <tr>
      <td>
        commissionParticipant
      </td>

      <td>
        Enum
      </td>

      <td>
        Entity receiving commission.
      </td>
    </tr>

    <tr>
      <td>
        defaultValue
      </td>

      <td>
        Float
      </td>

      <td>
        Default commission rate. If not set, treated as 0.
      </td>
    </tr>

    <tr>
      <td>
        segment
      </td>

      <td>
        Object
      </td>

      <td>
        Used to define targeted customer segments.\
        **Note:** Segments must be active.
      </td>
    </tr>

    <tr>
      <td>
        segmentId
      </td>

      <td>
        Integer
      </td>

      <td>
        Unique ID of the segment.
      </td>
    </tr>

    <tr>
      <td>
        partitionId
      </td>

      <td>
        Integer
      </td>

      <td>
        Unique ID of the partition.
      </td>
    </tr>

    <tr>
      <td>
        cardSeries
      </td>

      <td>
        Array of Objects
      </td>

      <td>
        List of card series codes. No limit. **Note:** You cannot link the same reward to multiple attributes at once.
      </td>
    </tr>

    <tr>
      <td>
        labels
      </td>

      <td>
        Array of Objects
      </td>

      <td>
        List of label IDs. No limit.\
        **Note:** You cannot link the same reward to multiple attributes at once.
      </td>
    </tr>

    <tr>
      <td>
        languageSpecificInfo.richContentRO
      </td>

      <td>
        Object
      </td>

      <td>
        Rich content object for the reward.
      </td>
    </tr>

    <tr>
      <td>
        richContentRO.content
      </td>

      <td>
        String
      </td>

      <td>
        HTML-formatted rich text content.
      </td>
    </tr>

    <tr>
      <td>
        richContentRO.isEnabled
      </td>

      <td>
        Boolean
      </td>

      <td>
        Whether the rich content is enabled.
      </td>
    </tr>

    <tr>
      <td>
        defaultValue
      </td>

      <td>
        String
      </td>

      <td>
        Default value if rich content is not mapped and is mandatory.
      </td>
    </tr>
  </tbody>
</Table>

<br />

```json With rank
{
    "name": "testreward1poi",
    "description": "testreward1",
    "startTime": "2025-09-26T20:00:00Z",
    "endTime": "2026-10-31T11:59:30Z",
    "priority": 1,
    "type": "VOUCHER",
    "brandId": "1",
    "enabled": true,
    "intouchPoints": 500,
    "geography": [
        {
            "countryId": 1
        }
    ],
    "categories": [
        4
    ],
    "rewardRank":"1",
    "intouchSeriesId": "301233",
    "redemptionType": "INTOUCH_REWARD",
    "vendorRedemption": null,
    "communications": [
        "1"
    ],
    "restrictions": {
        "customerLevel": [
            {
                "kpi": "QUANTITY",
                "limit": 10,
                "repeatFrequencyType": "DAYS",
                "interval": "30"
            },
            {
                "kpi": "QUANTITY",
                "limit": 50,
                "repeatFrequencyType": "MONTHS",
                "interval": "12"
            }
        ],
        "rewardLevel": [
            {
                "kpi": "QUANTITY",
                "limit": 10000,
                "repeatFrequencyType": "NO_LIMIT"
            }
        ]
    },
    "supplementaryCriteriaRO": [
        {
            "loyaltyProgramId": 469,
            "tierIds": null,
            "partnerProgramIds": [
                48
            ]
        },
        {
            "loyaltyProgramId": 690,
            "tierIds": null,
            "partnerProgramIds": null
        }
    ],
    "customFields": {
        "CF1": "Custom field 1"
    },
    "languageSpecificInfo": [
        {
            "languageCode": "en",
            "name": "testreward1",
            "description": "testreward1",
            "imageId": "bef4d522-2cf8-4fea-8087-376c449d5c85",
            "termNConditions": "t&c",
            "thumbnailId": "c886f064-2b3f-4c19-9e86-7f7e5ab5ae04",
            "termNConditionsId": "820a3d7f-2601-405b-9f56-4a3ba8e9df73",
            "enabled": true
        }
    ],
    "isactive" : true
}
```
```json With image support
{
  	"name":"ABCD",
  	"description":"Reward",
    "startTime": "2025-02-06T07:43:30.00Z",
    "endTime": "2026-11-29T05:39:49.00Z",
    "type": "POINTS",
    "brandId": 3,
    "priority": 1,
    "enabled": true,
    "intouchPoints": 1,
    "intouchSeriesId": "6538e3ac60ce5c504144bb07",
    "tier": "SILVER",
    "geography": [
        {
            "countryId": 7
        }
    ],
    "languageSpecificInfo": [
        {
            "languageCode": "en",
            "name": " INTOUCH Enabled",
            "description": "Description",
            "termNConditionsId": "EXDR12987R",
            "imageId": "EXDR12987U",
            "thumbnailId": "EXDR12987T",
            "enabled": true,
            "images": [
                {
                    "name": "imagename1",
                    "id": "9b648b66-5700-4c6d-84ea-01ddf73927c6"
                },
                {
                    "name": "imagename2",
                    "id": "9b648b66-5700-4c6d-84ea-01ddf73927c6"
                },
                {
                    "name": "imagename2",
                    "id": "9b648b66-5700-4c6d-84ea-01ddf73927c6"
                }
            ],
            "videos": [
                {
                    "name": "videoname1",
                    "id": "9b648b66-5700-4c6d-84ea-01ddf73927c6",
                    "isExternal": false
                },
                {
                    "name": "videoname1",
                    "isExternal": true
                }
            ]
        }
    ],
    "categories": [
        5
    ],
    "redemptionType": "CART_PROMOTION",
    "communications": [
        4
    ],
    "owners": [
        {
            "ownerType": "LOYALTY_PROGRAM",
            "ownerId": "123"
        }
    ]
}
```
```json With multi lingual custom field
{
    "startTime": "2024-03-07T08:53:49.00Z",
    "endTime": "2024-03-14T05:39:49.00Z",
    "type": "POINTS",
    "brandId": "8",
    "priority": 1,
    "enabled": true,
    "intouchPoints": 3,
    "intouchSeriesId": "73684275",
    "tier": "GOLD",
    "geography":
    [
        {
            "countryId": "14"
        }
    ],
    "languageSpecificInfo":
    [
        {
            "name": " INTOUCH Enabledsd",
            "description": "Description",
            "termNConditions": "https://s3.amazonaws.com/crm-nightly-new-solutions/IRISV2BRAND/EXDR12987R?X-Amz-Security-Token=FwoGZXIvYXdzEAgaDImRT4Rv3I22aidrESLdAQJokVqNlcxpwvh%2FuileYhmM7vAPvlqLv4pA3icQ0z4opwko8bn2w1y2412RtCR1AXAhlB82T%2FT%2Fr4lMjSRbBy1i4lsWgIVWWQ00NMLW2TDumQcnFwQq1p%2BQFAofb1GS%2BcE4zoWTMieFVV3%2F15l2stJ7ZmwnyDYkDyqGzCk0AWoeQQw%2F%2BHu6DbeIcBJrEakvjZvLjqzeIACunRAYgrXAMlI5HfPenJl8CmEfvhgluUkUNQ25vrL6KhXEQKG4rdVjWG%2BxnkMgcZqBLth64qvfYES1wVyYz1OvneIhOdKbKO3tpZoGMi0%2F3wHyU2g0g7XXMM1cLRtUIn6x6%2BEzEdHMArLUdsCYy%2BnDOfaViZiRnhOtV6U%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221014T145408Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIAXCQYYRKNMI6TM5YP%2F20221014%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=c17682bb64da475b6163148797a0c21dbb75fde352c2947fd94504d7f88535fe",
            "thumbnailId": "EXDR12987T",
            "imageId": "EXDR12987U",
            "enabled": true,
            "termNConditionsId": "EXDR12987R",
            "languageCode": "en",
             "customFields":{
               "mandatory - CF1": "englishvalue1"
               
            }
        },
        {
            "name": " INTOUCH Enabledsd",
            "description": "Description",
            "termNConditions": "https://s3.amazonaws.com/crm-nightly-new-solutions/IRISV2BRAND/EXDR12987R?X-Amz-Security-Token=FwoGZXIvYXdzEAgaDImRT4Rv3I22aidrESLdAQJokVqNlcxpwvh%2FuileYhmM7vAPvlqLv4pA3icQ0z4opwko8bn2w1y2412RtCR1AXAhlB82T%2FT%2Fr4lMjSRbBy1i4lsWgIVWWQ00NMLW2TDumQcnFwQq1p%2BQFAofb1GS%2BcE4zoWTMieFVV3%2F15l2stJ7ZmwnyDYkDyqGzCk0AWoeQQw%2F%2BHu6DbeIcBJrEakvjZvLjqzeIACunRAYgrXAMlI5HfPenJl8CmEfvhgluUkUNQ25vrL6KhXEQKG4rdVjWG%2BxnkMgcZqBLth64qvfYES1wVyYz1OvneIhOdKbKO3tpZoGMi0%2F3wHyU2g0g7XXMM1cLRtUIn6x6%2BEzEdHMArLUdsCYy%2BnDOfaViZiRnhOtV6U%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221014T145408Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIAXCQYYRKNMI6TM5YP%2F20221014%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=c17682bb64da475b6163148797a0c21dbb75fde352c2947fd94504d7f88535fe",
            "thumbnailId": "EXDR12987T",
            "imageId": "EXDR12987U",
            "enabled": true,
            "termNConditionsId": "EXDR12987R",
            "languageCode": "fr",
            "customFields":{
               "non_mandatory-CF4":"frenchvalue4"
            }
        }
    ],
    "categories":
    [
        "11"
    ],
    "redemptionType": "INTOUCH_REWARD",
    "communications":
    [
        "11"
    ],
    "vendorRedemption": null,
    "group": null,
    "label": null
}
```
```json With revenue metadata

{
    "startTime": "2024-10-07T17:04:30.00Z",
    "endTime": "2027-10-31T05:39:49.00Z",
    "rewardRevenueMeta" : [
        {
            "commissionParticipant": "BRAND",
            "commissionRate": "1.5",
            "cycleStartDate": "2024-11-07T17:04:30.000Z",
            "cycleEndDate": "2025-10-06T07:43:30.000Z"
        },
        {
            "commissionParticipant": "AFFILIATE",
            "commissionRate": "1.2",
            "cycleStartDate": "2024-11-07T17:04:30.000Z",
            "cycleEndDate": "2026-10-06T07:43:30.000Z"
        }
    ],
    "rewardRevenueDefaults": [
        {
            "commissionParticipant": "AFFILIATE",
            "defaultValue": "1.1"
        },
        {
            "commissionParticipant": "END_CUSTOMER",
            "defaultValue": "1.3"
        }
    ],
      "type": "VOUCHER",
  "brandId": 3,
  "priority": 1,
  "enabled": true,
  "intouchPoints": 1,
  "intouchSeriesId": "1135336",
  "tier": "SILVER",
  "geography": [
    {
      "countryId": 7
    }
  ],
  "languageSpecificInfo": [
    {
      "languageCode": "en",
      "name": " INTOUCH Enabled",
      "description": "Description",
      "termNConditionsId": "EXDR12987R",
      "imageId": "EXDR12987U",
      "thumbnailId": "EXDR12987T",
      "enabled": true
    }
  ],
  "categories": [
    5
  ],
  "redemptionType": "INTOUCH_REWARD",
  "communications": [
    4
  ],
  "owners":[{
      "ownerType":"LOYALTY_PROGRAM",
      "ownerId":"123"
      }
  ]
}
```
```json With payment mode info
{
    "name": "testreward1poitu",
    "description": "testreward11",
    "startTime": "2025-09-26T20:00:00Z",
    "endTime": "2026-10-31T11:59:30Z",
    "priority": 1,
    "type": "VOUCHER",
    "brandId": "1",
    "enabled": true,
    "intouchPoints": 500,
    "geography": [
        {
            "countryId": 1
        }
    ],
"paymentConfigs": [
       {
            "paymentMode": "POINTS",
            "points":100
        }
    ],
    "categories": [
        4
    ],
    "rewardRank":"1",
    "intouchSeriesId": "301233",
    "redemptionType": "INTOUCH_REWARD",
    "vendorRedemption": null,
    "communications": [
        "1"
    ],
    "restrictions": {
        "customerLevel": [
            {
                "kpi": "QUANTITY",
                "limit": 10,
                "repeatFrequencyType": "DAYS",
                "interval": "30"
            },
            {
                "kpi": "QUANTITY",
                "limit": 50,
                "repeatFrequencyType": "MONTHS",
                "interval": "12"
            }
        ],
        "rewardLevel": [
            {
                "kpi": "QUANTITY",
                "limit": 10000,
                "repeatFrequencyType": "NO_LIMIT"
            }
        ]
    },
    "supplementaryCriteriaRO": [
        {
            "loyaltyProgramId": 469,
            "tierIds": null,
            "partnerProgramIds": [
                48
            ]
        },
        {
            "loyaltyProgramId": 690,
            "tierIds": null,
            "partnerProgramIds": null
        }
    ],
    "customFields": {
        "CF1": "Custom field 1"
    },
    
    "languageSpecificInfo": [
        {
            "languageCode": "en",
            "name": "testreward1",
            "description": "testreward1",
            "imageId": "bef4d522-2cf8-4fea-8087-376c449d5c85",
            "termNConditions": "t&c",
            "thumbnailId": "c886f064-2b3f-4c19-9e86-7f7e5ab5ae04",
            "termNConditionsId": "820a3d7f-2601-405b-9f56-4a3ba8e9df73",
            "enabled": true
        }
    ],
    "isactive" : true
}
```
```json With segment information
{
    "startTime": "2027-10-03T07:47:33Z",
    "endTime": "2030-07-10T09:48:34Z",
    "type": "FREE_VOUCHER",
    "brandId": 3,
    "priority": 1,
    "enabled": true,
    "intouchPoints": 0,
    "intouchSeriesId": "1137472",
    "tier": "SILVER",
    "geography": [
        {
            "countryId": 7
        }
    ],
    "languageSpecificInfo": [
        {
            "languageCode": "en",
            "name": " English",
            "description": "Description",
            "termNConditionsId": "EXDR12987R",
            "imageId": "EXDR12987U",
            "thumbnailId": "EXDR12987T",
            "enabled": true
        }
    ],
    "categories": [
        5
    ],
    "redemptionType": "INTOUCH_REWARD",
    "communications": [
        4
    ],
    "segment": [
        
        {
            "segmentId": "6136",
            "partitionId": [
                "2675"
            ]
        }
    ]
}
```
```json With group name and rank
{
    "id": 201374,
    "name": "testname",
    "description": "testname1",
    "startTime": "2024-07-17T11:00:00.00Z",
    "endTime": "2025-07-11T14:43:00.00Z",
    "priority": 1,
    "groups" : [
        {
            "groupName":"groupName012",
            "groupRank": 8
        },
        {
            "groupName":"groupName013"
            // "groupRank": 6
        }
    ],
    "type": "VOUCHER",
    "brandId": "1",
    "enabled": true,
    "intouchPoints": 500,
    "geography": [
        {
            "countryId": 1
        }
    ],

"paymentConfigs": [
       {
            "paymentMode": "POINTS",
            "points":100
        }
    ],

    "categories": [
        4
    ],
    "rewardRank":"1",
    "intouchSeriesId": "350219",
    "redemptionType": "INTOUCH_REWARD",
    "vendorRedemption": null,
    "communications": [
        "1"
    ],
    "restrictions": {
        "customerLevel": [
            {
                "kpi": "QUANTITY",
                "limit": 10,
                "repeatFrequencyType": "DAYS",
                "interval": "30"
            },
            {
                "kpi": "QUANTITY",
                "limit": 50,
                "repeatFrequencyType": "MONTHS",
                "interval": "12"
            }
        ],
        "rewardLevel": [
            {
                "kpi": "QUANTITY",
                "limit": 10000,
                "repeatFrequencyType": "NO_LIMIT"
            }
        ]
    },
 
    "customFields": {
        "CF1": "Custom field 1"
    },
    "languageSpecificInfo": [
        {
            "languageCode": "en",
            "name": "testreward1",
            "description": "testreward1",
            "imageId": "bef4d522-2cf8-4fea-8087-376c449d5c85",
            "termNConditions": "t&c",
            "thumbnailId": "c886f064-2b3f-4c19-9e86-7f7e5ab5ae04",
            "termNConditionsId": "820a3d7f-2601-405b-9f56-4a3ba8e9df73",
            "enabled": true
        }
    ],
    "isactive" : true
}
```
```json With REDEMPTION_VALUE
{
    "id": 272383,
    "name": "REWARD",
    "description": "REWARD1234",
    "startTime": "2024-11-26T08:29:00.00Z",
    "endTime": "2025-07-11T14:43:00.00Z",
    "priority": 1,
  
    "type": "VOUCHER",
    "brandId": "1",
    "enabled": true,
    "intouchPoints": 500,
    "geography": [
        {
            "countryId": 1 
        }
    ],

"paymentConfigs": [
       {
            "paymentMode": "CONV_RATIO",
            "conversionRatio": 0.33
        }
    ],

    "categories": [
        4
    ],
    "rewardRank":"1",
    // "intouchSeriesId": "415446",
    "redemptionType": "MILES",
    "vendorRedemption": null,
    "communications": [
        "1"
    ],
    "restrictions": {
        "customerLevel": [
            {
                "kpi": "REDEMPTION_VALUE",
                "limit": 1000,
                "repeatFrequencyType": "MONTHS",
                "interval": "30"
            },
            {
                "kpi": "QUANTITY",
                "limit": 50,
                "repeatFrequencyType": "DAYS",
                "interval": "12"
            }
        ],
        "rewardLevel": [
            {
                "kpi": "REDEMPTION_VALUE",
                "limit": 10000,
                "repeatFrequencyType": "NO_LIMIT"
            }
        ]
    },
 
    "customFields": {
        "CF1": "Custom field 1"
    },
    "languageSpecificInfo": [
        {
            "languageCode": "en",
            "name": "testreward1",
            "description": "testreward1",
            "imageId": "bef4d522-2cf8-4fea-8087-376c449d5c85",
            "termNConditions": "t&c",
            "thumbnailId": "c886f064-2b3f-4c19-9e86-7f7e5ab5ae04",
            "termNConditionsId": "820a3d7f-2601-405b-9f56-4a3ba8e9df73",
            "enabled": true
        }
    ],
    "isactive" : true
}
```
```json With cards
{
    "id": 256354,
  	"name": "RewardName",
    "description": "TestReward",
    "startTime": "2025-11-28T13:56:00.00Z",
    "endTime": "2026-11-28T14:10:00.00Z",
    "type": "FREE_VOUCHER",
    "brandId": 1,
    "priority": 1,
    "enabled": true,
    "intouchPoints": 0,
    "tier": "PLATINUM",
    "languageSpecificInfo": [
        {
            "languageCode": "en",
            "name": " INTOUCH Enabled",
            "description": "Description",
            "termNConditionsId": "EXDR12987R",
            "imageId": "EXDR12987U",
            "thumbnailId": "EXDR12987T",
            "enabled": true
        }
    ],
    "redemptionType": "PHYSICAL_REWARD",
    "cardSeries":["26NOV2024TRYLEN17","26NOV2024TRYLEN18"]
}
```
```json With labels
{
    "id": 256354,
  	"name": "RewardName",
    "description": "TestReward",
    "startTime": "2025-11-28T13:56:00.00Z",
    "endTime": "2026-11-28T14:10:00.00Z",
    "type": "FREE_VOUCHER",
    "brandId": 1,
    "priority": 1,
    "enabled": true,
    "intouchPoints": 0,
    "tier": "PLATINUM",
    "languageSpecificInfo": [
        {
            "languageCode": "en",
            "name": " INTOUCH Enabled",
            "description": "Description",
            "termNConditionsId": "EXDR12987R",
            "imageId": "EXDR12987U",
            "thumbnailId": "EXDR12987T",
            "enabled": true
        }
    ],
    "redemptionType": "PHYSICAL_REWARD",
    "labels":[12751,5462]
}
```
```curl With KPI as Quantity
{
    "name": "testcreate1",
    "description": "testcreate1",
    "startTime": "2025-01-27T08:07:05Z",
    "endTime": "2026-10-31T11:59:30Z",
    "priority": 1,
    "type": "VOUCHER",
    "redemptionType": "MILES",
    "brandId": "1",
    "enabled": true,
   
"paymentConfigs": [
       {
            "paymentMode": "CONV_RATIO",
            "conversionRatio":0.33
        }
    ],
 
    "restrictions": {
        "customerLevel": [
            {
                "kpi": "QUANTITY",
                "limit": 1000,
                "repeatFrequencyType": "DAYS",
                "interval": "30"
            },
            {
                "kpi": "QUANTITY",
                "limit": 1000,
                "repeatFrequencyType": "MONTHS",
                "interval": "12"
            }
        ],
        "rewardLevel": [
            {
                "kpi": "QUANTITY",
                "limit": 10000,
                "repeatFrequencyType": "NO_LIMIT"
            }
        ]
    },
 
    "languageSpecificInfo": [
        {
            "languageCode": "en",
            "name": "testcreate1",
            "description": "testcreate1",
            "imageId": "bef4d522-2cf8-4fea-8087-376c449d5c85",
            "termNConditions": "t&c",
            "thumbnailId": "c886f064-2b3f-4c19-9e86-7f7e5ab5ae04",
            "termNConditionsId": "820a3d7f-2601-405b-9f56-4a3ba8e9df73",
            "enabled": true
        }
    ],
    "isactive" : true
}
```
```curl With KPI as Redemption value
{
    "name": "testcreate2",
    "description": "testcreate2",
    "startTime": "2025-01-27T08:22:20Z",
    "endTime": "2026-10-31T11:59:30Z",
    "priority": 1,
    "type": "VOUCHER",
    "redemptionType": "MILES",
    "brandId": "1",
    "enabled": true,
    
    
    
    
    
    

"paymentConfigs": [
       {
            "paymentMode": "CONV_RATIO",
            "conversionRatio":0.33
        }
    ],
    
    
    
    
    
    
    
    
    
    
    "restrictions": {
        "customerLevel": [
            {
                "kpi": "REDEMPTION_VALUE",
                "limit": 1000,
                "repeatFrequencyType": "DAYS",
                "interval": "30"
            },
            {
                "kpi": "REDEMPTION_VALUE",
                "limit": 1000,
                "repeatFrequencyType": "MONTHS",
                "interval": "12"
            }
        ],
        "rewardLevel": [
            {
                "kpi": "REDEMPTION_VALUE",
                "limit": 10000,
                "repeatFrequencyType": "NO_LIMIT"
            }
        ]
    },
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    "languageSpecificInfo": [
        {
            "languageCode": "en",
            "name": "testcreate1",
            "description": "testcreate1",
            "imageId": "bef4d522-2cf8-4fea-8087-376c449d5c85",
            "termNConditions": "t&c",
            "thumbnailId": "c886f064-2b3f-4c19-9e86-7f7e5ab5ae04",
            "termNConditionsId": "820a3d7f-2601-405b-9f56-4a3ba8e9df73",
            "enabled": true
        }
    ],
    "isactive" : true
}
```
```curl With 'altText' for images and videos
{
    "startTime": "2025-02-12T05:59:00.000Z",
    "endTime": "2025-12-30T12:50:20.000Z",
    "type": "FREE_VOUCHER",
    "brandId": 61,
    "priority": 1,
    "enabled": true,
    "intouchPoints": 0,
    "tier": "PLATINUM",
    "languageSpecificInfo": [
        {
            "languageCode": "en",
            "name": " INTOUCH Enabled",
            "description": "Description",
            "termNConditionsId": "EXDR12987R",
            "imageId": "EXDR12987U",
            "thumbnailId": "EXDR12987T",
            "enabled": true,
            "images":[
                {
                    "name":"imageName",
                    "isExternal": true,
                    "url":"mypic.com",
                    "altText":"product picture"
                }
            ],
            "videos":[
                {
                    "name":"videoName",
                    "isExternal": true,
                    "url":"mypic.com",
                    "altText":"product picture"
                }
            ]
        }
    ],

    "redemptionType": "PHYSICAL_REWARD"
     
}
```

<br />

# Response parameters

| Parameter Name | Data Type | Description                                             |
| -------------- | --------- | ------------------------------------------------------- |
| status         | Object    | Contains details about the status of the request        |
| success        | Boolean   | Indicates the success of the request, true in this case |
| code           | Integer   | Status code associated with the response, 6006          |
| message        | String    | Descriptive message, "Reward updated successfully"      |
| reward         | Object    | Contains details about the reward                       |
| id             | Integer   | Unique identifier for the updated reward, 90819         |

```json 200 OK
{
    "status": {
        "success": true,
        "code": 6006,
        "message": "Reward updated successfully"
    },
    "reward": {
        "id": 90819
    }
}
```
```Text 400-CONV RATIO with other payment mode
{
    "status": {
        "success": false,
        "code": 400,
        "message": "Multiple payments is not supported within FREE and CONV_RATIO modes,Conversion ratio can be set only for MILES, CASH_WALLET and CHARITY content types"
    }
}
```
```Text 400-Redemption cannot be changed once the reward has been started
{
    "status": {
        "success": false,
        "code": 400,
        "message": "Redemption type cannot be changed once the reward has started"
    }
}
```
```Text 400- Invalid Card Series ID
{
    "status": {
        "success": false,
        "code": 12048,
        "message": "Unable to update reward as Label not found for label_id: 17244324236"
    },
    "reward": null
}
```
```Text 400- Invalid Label ID
{
    "status": {
        "success": false,
        "code": 12048,
        "message": "Unable to update reward as Label not found for label_id: 17244324236"
    },
    "reward": null
}
```
```
```
```
```
```
```

# API-specific error codes

| Error code | Description                                                                |
| :--------- | :------------------------------------------------------------------------- |
| 400        | Redemption type cannot be changed once the reward has started              |
| 400        | Passed loyalty programId is not exists                                     |
| 400        | Passed entityId is not exists                                              |
| 3014       | Unable to update reward as org doesn't have the custom field/s: labels,tag |
| 12045      | Unable to update reward as card series not found                           |
| 12048      | Unable to update reward as label not found                                 |

<HTMLBlock>{`
<style>
/* Container: Flex layout for button group *
.InputGroupe2EvBGz2cnqy {
   display: flex;
   gap: 2px;  /* Small gap between buttons *
   position: relative; /* Required for button z-index behavior *
}

/* Button base styling *
.Button.APIRequest-example-button1DGMsfaOTVNW {
   /* Text truncation and expansion behavior *
   position: relative;
   width: 140px; /* Default collapsed width *
   white-space: nowrap;
   overflow: hidden;
   text-overflow: ellipsis; /* Shows "..." for truncated text *
   padding: 6px 12px;
   text-align: left;
   transition: width 0.2s ease-out; /* Smooth width animation *
   z-index: 1;
   display: block;
   direction: ltr;
   unicode-bidi: embed; /* Ensures proper text direction *
   padding-right: 20px; /* Extra space for ellipsis *
   /* Visual styling *
   background: #1e2329;
   border: none;
   border-radius: 6px;
   color: #94a3b8;
   font-size: 13px;
}

/* Ensures proper text alignment for nested elements *
.Button.APIRequest-example-button1DGMsfaOTVNW span,
.Button.APIRequest-example-button1DGMsfaOTVNW div {
   text-align: left;
   direction: ltr;
}

/* Hover state: Expands button and shows full text *
.Button.APIRequest-example-button1DGMsfaOTVNW:hover {
   width: auto; /* Expands to fit content *
   z-index: 10; /* Ensures hover state shows above other buttons *
   background: #262b33;
}

/* Active state: Currently selected button *
.Button.APIRequest-example-button1DGMsfaOTVNW.APIRequest-example-button_activeXJeukHyaHZXB {
   z-index: 20; /* Highest z-index to stay on top *
   background: #2c333d;
   color: #ffffff; /* White text for better contrast *
}
</style>
`}</HTMLBlock>

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