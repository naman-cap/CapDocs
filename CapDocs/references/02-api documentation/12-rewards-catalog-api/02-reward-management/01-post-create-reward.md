---
title: Create reward
excerpt: ''
api:
  file: v1.json
  operationId: post-create-reward
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
This API is used to create the reward.

# Prerequisites

*   Authentication: Basic or OAuth credentials
*   Default access group

# Resource information

|                        |                                             |
| :--------------------- | :------------------------------------------ |
| URI                    | /api\_gateway/rewards/core/v1/reward/create |
| HTTP Method            | POST                                        |
| Pagination             | No                                          |
| Batch support          | No                                          |
| Rate limit information | None                                        |

# API endpoint example

`https://eu.api.capillarytech.com/api_gateway/rewards/core/v1/reward/create`

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
        The start date and time of the reward. It can be set to the present or up to 10 years in the past but cannot be modified once the reward is live. **Example**: 2024-11-01T06:00:00Z. The timestamp must be in UTC format: YYYY-MM-DDTHH:MM:SSZ.
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
        End Date and time of the reward. It can be set to the present or up to 10 years in the past and remains editable even after the reward is live. **Example**: 2026-11-01T06:00:00Z. The timestamp must be in UTC format: YYYY-MM-DDTHH:MM:SSZ.
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
        Type of the reward. Supported values: POINTS, PHYSICAL\_VOUCHER, FREE\_VOUCHER.
      </td>
    </tr>

    <tr>
      <td>
        group
      </td>

      <td>
        String
      </td>

      <td>
        Enables to assign a group to the reward and helps to filter the rewards based on the group name. The maximum number of characters allowed is 255.
      </td>
    </tr>

    <tr>
      <td>
        label
      </td>

      <td>
        String
      </td>

      <td>
        Enables to assign a label to the reward and helps to filter the rewards based on the label name. The maximum number of characters allowed is 255.
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
        Brand ID. You can use the API and retrieve the brand ID of your brand.
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
        Coupon series ID or cart promotion ID when intouch reward is selected. (Coupon should be active\*). **NOTE:** If the `redemptionType` provided supports vendor flow (i.e., when redemption is handled by an external vendor), the `intouchSeriesId` field must be null.
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
        The tier level, e.g., "SILVER". The maximum character limit is **255** characters.
        **Note** : Blank input resets the field to null.
      </td>
    </tr>

    <tr>
      <td>
        geography
      </td>

      <td>
        Array of objects
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
        Array of objects
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
        The type of payment mode supported to redeem the reward. Supported values: POINTS, FREE, CASH, POINTS\_CASH, CONV\_RATIO. Multiple payments are not supported within FREE and CONV\_RATIO modes. **NOTE**: The same payment method cannot be used twice to create a reward. For example, only the first entry will be considered if you use POINTS twice as a payment mode.
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
        A label assigned to a set of rewards to organize them based on common themes or purposes. The maximum character limit is **255** characters.
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
        Array
      </td>

      <td>
        Metadata for the reward to categorize different rewards in different categories for end users. It can be null.
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
        Type of intouch reward or vendor reward. Supported values: GAMES, AUCTION, CART\_PROMOTION, CASH\_WALLET, VOUCHER, CASH\_BACK, PHYSICAL\_REWARD, CHARITY, MILES, GIFT\_CARD, SWEEPSTAKES, INTOUCH\_REWARD, CARD\_DISC. **Notes**: 1. If redemptionType is MILES, Payment config is mandatory. 2. CONV\_RATIO mode is supported only for CHARITY, MILES, CASH\_WALLET, SWEEPSTAKES, AUCTION, GIFT\_CARD, PHYSICAL\_REWARD type of redemption types. 3. If redemptionType is FREE\_VOUCHER and payment mode is set, no points will be deducted. 4. For the INTOUCH\_REWARD and CART\_PROMOTION redemption type, a numeric intouchSeriesId is mandatory. 5. For the VENDOR\_INTOUCH\_REWARD redemption type, both a numeric intouchSeriesId and a valid vendorRedemption are mandatory. 6. For INTOUCH\_REWARD redemption type, intouchSeriesId is mandatory.
      </td>
    </tr>

    <tr>
      <td>
        vendorRedemption
      </td>

      <td>
        Long
      </td>

      <td>
        Vendor redemption is the reward configured for a particular vendor. **NOTE:** If the redemptionType provided does not support vendor flow (i.e., when redemption is handled by an external vendor), the vendorRedemption field must be null.
      </td>
    </tr>

    <tr>
      <td>
        communications
      </td>

      <td>
        Array
      </td>

      <td>
        Communication IDs related to the reward.
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
        The maximum number of rewards that can be created.
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
        Array
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
        languageSpecificInfo\*
      </td>

      <td>
        Array
      </td>

      <td>
        Enables the display of reward level information specified in this object in the desired language. **Note:** There is no limit on the number of languages a user can define for custom fields. **Prerequisite**: If the desired language is not available in the system, raise a ticket to the Capillary support team to have it added.
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
        The rich content object for the reward.
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
        The HTML-formatted rich text content.
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
        Indicates whether the rich text content is enabled. Supported Values: `true` or `false`
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
        Default value if rich text content is not mapped to the reward. Required if `isMandatory` is set to `true`
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
        The ISO code for the language. For ex: FR-French, JA-Japanese etc. Character limit of languageCode is **255** characters. languageCodes can have space. languageCode has to be Unique.
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
        The name of the reward in the specified language. Character limit of name is **255** characters.
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
        The identifier for terms and conditions. Uploading the termsNconditons file to the file service/solutions workspace generates this unique identifier.
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
        The file\_handle of the main image. Uploading the image to the file service/solutions workspace generates this unique identifier. This is the image that the brand configures during the reward creation.
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
        The URL of the image in the file service location.
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
        A list of image details related to the reward. **Notes**: A maximum of 10 images can be added to the reward. The brand can update the main image from these 10 images. You can use the ID or image URL to add the image. There is no limit in dimension or size for images. Image in any format is supported.
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
        The name of the image. The name should be unique. **Warning**: If a name is added twice for the same image, only the first one will be considered.
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
        The file\_handle of the image. Uploading the image to the file service/solutions workspace generates this unique identifier.
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
        Indicates if the image is hosted on an external server. By default, the value is false.
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
        External URL of the image.
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
        Alternative text or description of the image. You can use alt text to convey the meaning and context of visual content to users who cannot view images, such as individuals using screen readers due to visual impairments, or in situations where images fail to load.
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
        A list of video details related to the reward. **Notes**: A maximum of 10 videos can be added to the reward. The brand can update the main videos from these 10 videos. You can use the ID or video URL to add the videos. There is no limit in dimension or size for videos. Videos in any format are supported.
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
        The name of the video. The name should be unique. **Warning**: If a name is passed twice, only the first one will be considered.
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
        The file\_handle of the video. Uploading the video to the file service/solutions workspace generates this unique identifier.
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
        Indicates if the video is hosted on an external server.
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
        Alternative text or description of the video.
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
        The list of custom fields. Custom fields are columns that store custom information such as transaction details, customer details etc. These fields allow users to capture specific details that are not covered by standard fields. Users can define the properties of custom fields and assign default values. Character Limit of customFields is **255** characters. If language-specific custom fields are unavailable, English values are used. If language-level custom fields are not defined, reward-level custom fields are used else, meta-level default values are used.
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
        List containing detailed owner information
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
        The module for which the reward was created. Supported values: `LOYALTY_PROGRAM, MILESTONES, CAMPAIGNS, JOURNEYS, GOODWILL`.
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
        Unique identifier of the owner to claim the reward. Multiple owner IDs are supported for a single reward with the same owner type.
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
        An object with commission details for different participants over specific periods.
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
        The entity receiving the commission. Supported values: BRAND, CAPILLARY, AFFILIATE, END\_CUSTOMER.
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
        Start date of the commission cycle. **Note**: cycleStartDate should be greater than rewardStartDate. cycleStartDate must be in the future
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
        End date of the commission cycle. **Note**: cycleEndDate should smaller than rewardEndDate. cycleEndDate must be in the future
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
        An object with the default commission. In case multiple blocks with the same commissionParticipant are passed, only the first is considered.
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
        The entity receiving the commission. Supported values: BRAND, CAPILLARY, AFFILIATE, END\_CUSTOMER
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
        Default commission rate associated with the participant. **Note**: If no defaultValue is passed, then 0 is considered as the defaultValue.
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
        Customer Segmentation involves logically grouping audiences based on shared characteristics. You can create segments using the Insights+ UI. You can use these segments to create rewards targeting specific customer groups. **Note**: The segments and partition information should be valid and the segments must be active while creating the reward.
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
        Enter the segment ID. The Segment ID is a unique identifier used to create or update segment information.
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
        Enter the partition ID. The Partition ID is a unique identifier used to create or update partition information.
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
        List of card series codes associated with the reward. Brands can use cards and labels to offer personalized rewards. There is no limit on the number of card series code. You can use Get Card Details API to get the series code of the card. **Example**: `"cardSeries":["26NOV2024TRYLEN17","26NOV2024TRYLEN18"]`. **Note:** You cannot link the same reward to multiple attributes at a time.
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
        List of label IDs associated with the reward. You can get the Label ID from Get Customer Labels API. There is no limit on the number of label IDs. **Note:**

        * Blank input resets the field to null.
        * You cannot link the same reward to multiple attributes at a time.
      </td>
    </tr>

    <tr>
      <td>
        isActive
      </td>

      <td>
        Boolean
      </td>

      <td>
        Indicates if the reward is active or Inactive. Supported values: `true` or `false`.
      </td>
    </tr>

    <tr>
      <td>
        restrictions \[]
      </td>

      <td>
        Object
      </td>

      <td>
        Defines how and when a reward can be issued—at both the reward level (total limit across all users) and the customer level (limit per individual user).\
        For example,

        * Allow only 1,000 total redemptions of a reward across all users.

        * Limit each customer to 5 redemptions per month.
      </td>
    </tr>

    <tr>
      <td>
        rewardLevel
      </td>

      <td>
        Object
      </td>

      <td>
        Defines the total number of times a reward can be issued across all customers.

        Example:\
        If the limit for a reward is set to 1000, a maximum of 1,000 total redemptions will be allowed. Once this limit is reached, the reward will no longer be available for issuance to any customer.
      </td>
    </tr>

    <tr>
      <td>
        rewardLevel.kpi
      </td>

      <td>
        Enum
      </td>

      <td>
        Indicates the Key Performance Indicator (KPI) on which the reward is created.\
        **Supported values** : `QUANTITY`, `REDEMPTION_VALUE`.

        Example:

        * QUANTITY\
          Limits a "Free Drink" reward based on the total number of times it's redeemed (e.g., 500 redemptions).

        * REDEMPTION\_VALUE\
          Limits an "Airline Miles" reward based on the total accumulated value of miles redeemed (e.g., 100,000 miles).

        **Note:** When redemptionType is `MILES`, set the KPI value to `REDEMPTION_VALUE` as miles are always tracked by their total redeemed value.
      </td>
    </tr>

    <tr>
      <td>
        rewardLevel.windowType
      </td>

      <td>
        Enum
      </td>

      <td>
        Specifies the type of window for the reward. **Supported values:** include ROLLING and FIXED.
      </td>
    </tr>

    <tr>
      <td>
        rewardLevel.repeatFrequencyType
      </td>

      <td>
        Enum
      </td>

      <td>
        Defines how often the reward limit resets when `windowType` is set to `FIXED`.

        Supported Values:

        * **DAYS:** The limit resets every N days.

        Example: A limit of 100 redemptions resets every 10 days.

        * **WEEKS:** The limit resets weekly.

        Example: A limit of 500 redemptions resets each week, starting on Monday.

        * **MONTHS:** The limit resets every calendar month.

        Example: A limit of 1,000 redemptions resets per month.

        \*\***NO\_LIMIT:** \*\*There's no reset. The limit is tracked for the entire duration of the reward.

        Example: A one-time limit of 2,000 redemptions applies over the full reward period.
      </td>
    </tr>

    <tr>
      <td>
        rewardLevel.weekStartDay
      </td>

      <td>
        Enum
      </td>

      <td>
        Specifies the day of the week that the week starts on.\
        **Supported values** : MONDAY, TUESDAY, etc.
      </td>
    </tr>

    <tr>
      <td>
        rewardLevel.limit
      </td>

      <td>
        Integer
      </td>

      <td>
        Defines the maximum number of times the reward can be issued across all customers during a fixed window.

        * If `windowType` is `FIXED`, the limit applies to each fixed cycle (e.g., per week or per month).
        * If windowType is ROLLING, the limit applies over a sliding time window (e.g., past 30 days).
        * If repeatFrequencyType is `NO_LIMIT`, the cap is applied for the entire lifetime of the reward.
      </td>
    </tr>

    <tr>
      <td>
        customerLevel \[]
      </td>

      <td>
        Array
      </td>

      <td>
        Define the maximum number of times an individual customer can redeem a specific reward.

        Example:\
        If the `limit` is set to 3 and `repeatFrequencyType` to `MONTHS`, each customer will be able to redeem the reward up to 3 times within a calendar month.
      </td>
    </tr>

    <tr>
      <td>
        customerLevel.kpi
      </td>

      <td>
        Enum
      </td>

      <td>
        Indicates the Key Performance Indicator (KPI) on which the reward is created.\
        **Supported values** : `QUANTITY`, `REDEMPTION_VALUE`.

        Example:

        * QUANTITY\
          Limits a "Free Drink" reward based on the total number of times it's redeemed (e.g., 500 redemptions).

        * REDEMPTION\_VALUE\
          Limits an "Airline Miles" reward based on the total accumulated value of miles redeemed (e.g., 100,000 miles).

        **Note:** When redemptionType is `MILES`, set the KPI value to `REDEMPTION_VALUE` as miles are tracked by their total value, not as individual units.
      </td>
    </tr>

    <tr>
      <td>
        customerLevel.windowType
      </td>

      <td>
        Enum
      </td>

      <td>
        Specifies the type of window for the reward. **Supported values:** include ROLLING and FIXED.

        **ROLLING:**:  Tracks usage within a **sliding time window** relative to the current date. Limits are recalculated dynamically; for instance, over the last 30 days from today.

        **Use case:**\
        You want to restrict reward issuance to 1,000 redemptions in any rolling 30-day period. If 1,000 redemptions have already occurred within the past 30 days, the reward will not be issued again today.

        **FIXED:** : Tracks usage within **predefined fixed cycles**, such as calendar weeks, months, or N-day blocks. Limits apply to a specific date range, and each cycle is evaluated independently.

        **Use case:**\
        You want to allow a reward to be redeemed up to 500 times per calendar month. In this case, redemptions from March 1st to March 31st are counted together. On April 1st, a new cycle begins with a fresh limit.
      </td>
    </tr>

    <tr>
      <td>
        customerLevel.repeatFrequencyType
      </td>

      <td>
        Enum
      </td>

      <td>
        Indicates the frequency at which the reward is repeated.\
        **Supported values** : Include DAYS, WEEKS, MONTHS, and NO\_LIMIT.

        * **DAYS**— weekStartDay isn’t supported; startOfCycle and interval (+ve) are mandatory

        <br />

        * **WEEKS**— interval and startOfCycle aren’t supported; weekStartDay is optional (default Monday)

        <br />

        * **MONTHS** — interval, startOfCycle, and weekStartDay aren’t supported
      </td>
    </tr>

    <tr>
      <td>
        customerLevel.startOfCycle
      </td>

      <td>
        Date
      </td>

      <td>
        Specifies the start date and time of the reward cycle in ISO 8601 Time Format.
      </td>
    </tr>

    <tr>
      <td>
        customerLevel.limit
      </td>

      <td>
        Integer
      </td>

      <td>
        Defines the maximum number of times a single customer can receive or redeem the reward within  a fixed cycle.

        * If `windowType` is `FIXED`, the limit applies to each fixed cycle.\
          For example, a customer could receive this reward a maximum of 3 times per week or per month.
        * If windowType is ROLLING, the limit applies over a sliding time window.\
          For example, a customer could receive this reward a maximum of 5 times over the past 30 days.
        * If repeatFrequencyType is NO\_LIMIT, the limit is applied for the entire lifetime of the reward for that individual customer.
      </td>
    </tr>

    <tr>
      <td>
        customerLevel.interval
      </td>

      <td>
        Integer
      </td>

      <td>
        Defines the interval for the frequency type, indicating how often the reward can be issued within the specified frequency.
      </td>
    </tr>
  </tbody>
</Table>

# Request body

```json With rank
{
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
                    "id": "9b648b66-5700-4c6d-84ea-01ddf73927c6",
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
                    "url": "https://www.youtube.com/watch?v=a_aSgmOqgrA",
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
    "startTime": "2025-03-07T08:53:49.00Z",
    "endTime": "2026-03-14T05:39:49.00Z",
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
            "name": " INTOUCH Enabledsdqwerty",
            "description": "Description",
            "termNConditions": "ABC",
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
            "name": " INTOUCH Enabledsdoiu",
            "description": "Description",
           	"termNConditions": "ABCD",
            "thumbnailId": "EXDR12987T",
            "imageId": "EXDR12987U",
            "enabled": true,
            "termNConditionsId": "EXDR12987R",
            "languageCode": "fr",
             "customFields":{
                "mandatory - CF1": "frenchvalue1",
                "mandatory - CF2":"frenchvalue2"
            }
        }
    ],
    "customFields":{
        "mandatory - CF1": "rewardvalue1",
        "mandatory - CF2": "rewardvalue2"
    },
    "categories":
    [
        "11"
    ],
    "rewardRank":"1",        
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
```Text With revenue metadata

{
    "startTime": "2025-03-07T17:04:30.00Z",
    "endTime": "2026-10-31T05:39:49.00Z",
    "rewardRevenueMeta" : [
        {
            "commissionParticipant": "BRAND",
            "commissionRate": "1.0",
            "cycleStartDate": "2025-03-07T17:04:30.000Z",
            "cycleEndDate": "2026-02-06T07:43:30.000Z"
        },
        {
            "commissionParticipant": "AFFILIATE",
            "commissionRate": "1.2",
            "cycleStartDate": "2025-03-07T17:04:30.000Z",
            "cycleEndDate": "2026-02-06T07:43:30.000Z"
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
  ]
   ,
 "segment":[
    {
    "segmentId":"6134",
    "partitionId": "2669"
    },
    {
    "segmentId":"6136",
    "partitionId": "2675"
    }
  ]
}
```
```json With linking reward to multiple group

    "startTime": "2024-07-17T11:00:00.000Z",
    "endTime": "2025-07-11T14:43:00.000Z",
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
```json With multiple payment mode info
{
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
            "points": 150
        },
        {
            "paymentMode": "CASH",
            "cash": 500
        },
        {
            "paymentMode": "POINTS_CASH",
          	"points": 200,
            "cash": 500
        },
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
```json With Payment mode as "POINTS"
{
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
            "points": 150
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
```json With Payment mode as "CASH"
{
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
            "paymentMode": "CASH",
            "cash": 300
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
```json With Payment mode as "POINTS_CASH"
{
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
            "paymentMode": "POINTS_CASH",
            "points": 300,
          	"cash": 200
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
```json With Payment mode as "CONV_RATIO"
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
            "paymentMode": "CONV_RATIO",
            "conversionRatio": 0.33
        }
    ],
    "categories": [
        4
    ],
    "rewardRank":"1",
    "intouchSeriesId": "301233",
    "redemptionType": "MILES",
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
```json With Payment mode as "FREE"
{
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
            "paymentMode": "FREE"
        }
    ],
    "categories": [
        4
    ],
    "rewardRank":"1",
    "intouchSeriesId": "301233",
    "redemptionType": "MILES",
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
```json With REDEMPTION_VALUE
{
    "startTime": "2024-08-26T06:29:00.000Z",
    "endTime": "2025-07-11T14:43:00.000Z",
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
```json With Labels
{
    "startTime": "2025-11-28T13:56:00.000Z",
    "endTime": "2026-11-28T14:10:00.000Z",
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
```json With Cards
{
    "startTime": "2025-11-28T13:56:00.000Z",
    "endTime": "2026-11-28T14:10:00.000Z",
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
```Text with group and label (advanced filtering - old UI)
{
    "startTime": "2025-01-16T10:10:00.000Z",
    "endTime": "2026-11-28T14:10:00.000Z",
    "type": "FREE_VOUCHER",
    "brandId": 61,
    "priority": 1,
    "group":"testgoupfilter",
    "label":"testlabel",

    "enabled": true,
    
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
    "redemptionType": "PHYSICAL_REWARD"
    
    
}
```
```curl With KPI as Quantity
{
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
```curl With KPI as Redemption Value
{
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
```Text With frequency restriction
{
    "intouchPoints": 0,
    "redemptionType": "AUCTION",
    "type": "FREE_VOUCHER",
    "restrictions": {
        "rewardLevel": [
            {
                "kpi": "QUANTITY",
                "windowType": "FIXED",
                "repeatFrequencyType": "WEEKS",
                "weekStartDay": "TUESDAY",
                "limit": 2
            }
        ],
        "customerLevel": [
            {
                "kpi": "QUANTITY",
                "windowType": "FIXED",
                "repeatFrequencyType": "DAYS",
                "startOfCycle": "2025-06-24T13:00:00Z",
                "limit": 2,
                "interval": 2
                
            },
            {
                "kpi": "QUANTITY",
                "windowType": "FIXED",
                "repeatFrequencyType": "MONTHS",
                "limit": 6
            }
        ]
    },
    "languageSpecificInfo": [
        {
            "languageCode": "en",
            "name": "english rewardName",
            "description": "hello",
            "enabled": true
        }   
    ],
    "brandId": 61,
    "enabled": true,
    "startTime": 1742284015000,
    "endTime": 1759564015000    
}
```

# Response parameters

| Parameter Name | Data Type | Description                                      |
| -------------- | --------- | ------------------------------------------------ |
| status         | Object    | Contains details about the status of the request |
| success        | Boolean   | Indicates whether the request was successful.    |
| code           | Integer   | Status code associated with the response.        |
| message        | String    | The descriptive message of the response,         |
| reward         | Object    | Contains details about the reward created        |
| id             | Integer   | Unique identifier for the created reward         |

<br />

```json 200 OK
{
    "status": {
        "success": true,
        "code": 6002,
        "message": "Reward created successfully"
    },
    "reward": {
        "id": 124158
    }
}
```
```json 400
{
   "status": {
       "success": false,
       "code": 6003,
       "message": "Unable to create reward as Org doesn't have the custom field/s: CF0"
   },
   "reward": null
}
```
```json 400 Conversion ratio with unsupported redemptiontypes
{
    "status": {
        "success": false,
        "code": 400,
        "message": "Conversion ratio can be set only for MILES, CASH_WALLET and CHARITY content types."
    }
}
```
```json 400-CONV RATIO with other payment mode
{
    "status": {
        "success": false,
        "code": 400,
        "message": "Multiple payments is not supported within FREE and CONV_RATIO modes"
    }
}
```
```json Invalid segment ID
{
    "status": {
        "success": false,
        "code": 6003,
        "message": "Unable to create reward as Invalid Segment Id:  6136"
    },
    "reward": null
}
```
```json 400-Vendor Reward is required
{
    "status": {
        "success": false,
        "code": 400,
        "message": "Vendor redemption is required in case of Vendor rewards"
    }
}
```
```json 400- Reward Term & Conditions can't be null
{
    "status": {
        "success": false,
        "code": 400,
        "message": "Reward Term & Conditions can't be null or empty."
    }
}
```
```json 400- Label ID is incorrect
{
    "status": {
        "success": false,
        "code": 6003,
        "message": "Unable to create reward as Label not found for label_id: 12749822"
    },
    "reward": null
}
```
```json 400- Card Series not found
{
    "status": {
        "success": false,
        "code": 6003,
        "message": "Unable to create reward as Card series not found for series_code: 26NOV2024TR573"
    },
    "reward": null
}
```

<br />

# API-specific error codes

| Error code | Description                                                                                                   |
| :--------- | :------------------------------------------------------------------------------------------------------------ |
| 6003       | Reward creation failed due to the absence of a required custom field in the Org settings - Invalid segment ID |
| 6003       | Invalid segment ID                                                                                            |
| 6003       | Invalid label ID                                                                                              |
| 6003       | Card series not found.                                                                                        |
| 400        | Conversion ratio can be set only for MILES, CASH\_WALLET and CHARITY content types.                           |
| 400        | Multiple payments is not supported within FREE and CONV\_RATIO modes                                          |
| 400        | Vendor redemption is required in case of Vendor rewards                                                       |
| 400        | Reward Term & Conditions can't be null or empty.                                                              |

**Note**

* **Reward Linking** – A reward can be linked to one entity type at a time: card, label, segment, tier, or loyalty program. You can link the same reward to multiple entries within the same type (e.g., multiple labels or card series).\
  *Example: Link to both "Gold Card Series" and "Platinum Card Series", but not to a card and a label together.*

* For new brands, use the **paymentConfig** block instead of **Intouch Points**.

* To add Rich Text Content, ensure metadata is created first – see [this guide](https://docs.capillarytech.com/reference/adding-rich-text-content-metadata) and [API reference](https://docs.capillarytech.com/reference/create-rich-content-meta).

* Without metadata, rich content can’t be saved or retrieved. Always validate it before use.

* The `type` field now accepts `POINTS`, `PHYSICAL_VOUCHER`, and `FREE_VOUCHER`.\
  `VendorOnlyReward` and `VendorIntouchReward` are deprecated—update your integrations accordingly.

<br />

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