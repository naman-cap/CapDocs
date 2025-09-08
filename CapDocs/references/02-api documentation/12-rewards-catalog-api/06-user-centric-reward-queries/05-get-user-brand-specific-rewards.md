---
title: Get available reward details for user by id
excerpt: ''
api:
  file: v1.json
  operationId: get-user-brand-specific-rewards
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
This API is used to retrieve details of an active reward for a particular brand.

For example: A brand configures a reward for their customer to earn. Through this API, the brands can check the active rewards configured for their customers.

> 👍 Note
>
> * For detailed information about our APIs and for hands-on testing, refer to the documentation in [API Overview](https://docs.capillarytech.com/reference/apioverview) and follow the step-by-step guide on making your first API call in [Make Your First API Call](https://docs.capillarytech.com/reference/make-your-first-api-call).
>
> * When **[Dual Eligibility](https://docs.capillarytech.com/docs/customer_entity#dual-eligibility)** is enabled, a reward can be issued to multiple users registered with the same secondary identifiers, as long as they have unique primary identifiers.

# Prerequisites

*   Authentication: Basic or OAuth authentication
*   Default access group

# API Specification

|                        |                                                                                            |
| :--------------------- | :----------------------------------------------------------------------------------------- |
| URI                    | /api\_gateway/rewards/core/v1/user/reward`{reward Id}`/brand`{brand name}`?userId=`\{id\}` |
| HTTP Method            | GET                                                                                        |
| Pagination             | No                                                                                         |
| Batch support          | No                                                                                         |
| Rate limit information | None                                                                                       |

# API endpoint example

`https://eucrm.cc.capillarytech.com/api_gateway/rewards/core/v1/user/reward/177056/brand/SUPERMARKETDEMO?userId=62090013`

# Request path parameters

| Parameter Name | Data Type | Description                                                          |
| -------------- | --------- | -------------------------------------------------------------------- |
| rewardId\*     | String    | Unique identifier of the reward. Ex: 112295                          |
| brandName\*    | String    | Name of the brand the reward is associated with. Ex: SUPERMARKETDEMO |

# Request query parameters

| Parameter Name | Data Type | Description                                                                                                                                                                                 |
| :------------- | :-------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| userId         | String    | Unique identifier of the user.                                                                                                                                                              |
| language       | Enum      | Filters the response based on the reward language. Use this parameter to retrieve rewards in a specific language. For example, to display rewards in English, set the parameter to `"en"` . |
| category       | String    | Enter the name of category to fetch all the rewards associated with the same category.                                                                                                      |
| groupName      | String    | Enter the group name to fetch all the rewards associated with the group.                                                                                                                    |
| label          | String    | Enter the label name to fetch all the rewards associated with the label.                                                                                                                    |

<br />

```curl
https://eucrm.cc.capillarytech.com/api_gateway/rewards/core/v1/user/reward/177056/brand/SUPERMARKETDEMO?userId=62090013
```

<br />

<Note title="Note">
If rewards are created for a customer segment, they are displayed to the user only if the user is part of the segment or partition mapping associated with the reward.
</Note>

<br />

# Response parameters

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
        **`status`**
      </td>

      <td>
        Object
      </td>

      <td>
        Contains the status details of the operation, including whether it succeeded, a code for reference, and a message.
      </td>
    </tr>

    <tr>
      <td>
        `success`
      </td>

      <td>
        Boolean
      </td>

      <td>
        Indicates whether the operation was successful (`true` for success and `false` for failure).
      </td>
    </tr>

    <tr>
      <td>
        `code`
      </td>

      <td>
        Integer
      </td>

      <td>
        A numerical code representing the status of the operation (e.g., `200` for success).
      </td>
    </tr>

    <tr>
      <td>
        `message`
      </td>

      <td>
        String
      </td>

      <td>
        A brief description or message about the status of the operation.
      </td>
    </tr>

    <tr>
      <td>
        **`reward`**
      </td>

      <td>
        Object
      </td>

      <td>
        Provides detailed information about the reward, including metadata, restrictions, and configurations.
      </td>
    </tr>

    <tr>
      <td>
        `id`
      </td>

      <td>
        Long
      </td>

      <td>
        A unique identifier assigned to the reward to differentiate it from others.
      </td>
    </tr>

    <tr>
      <td>
        `name`
      </td>

      <td>
        String
      </td>

      <td>
        The name of the reward as displayed in the system or user interface.
      </td>
    </tr>

    <tr>
      <td>
        `description`
      </td>

      <td>
        String
      </td>

      <td>
        A short text explaining what the reward is about or any additional details about it.
      </td>
    </tr>

    <tr>
      <td>
        `imageId`
      </td>

      <td>
        String
      </td>

      <td>
        An identifier linking to the reward's primary image stored in the system.
      </td>
    </tr>

    <tr>
      <td>
        `imageUrl`
      </td>

      <td>
        String
      </td>

      <td>
        A web URL pointing to the full-sized image of the reward.
      </td>
    </tr>

    <tr>
      <td>
        `thumbnailId`
      </td>

      <td>
        String
      </td>

      <td>
        An identifier for the thumbnail version of the reward image.
      </td>
    </tr>

    <tr>
      <td>
        `thumbnailUrl`
      </td>

      <td>
        String
      </td>

      <td>
        A web URL pointing to the thumbnail-sized image of the reward.
      </td>
    </tr>

    <tr>
      <td>
        `termAndConditionsId`
      </td>

      <td>
        String
      </td>

      <td>
        An identifier linking to the terms and conditions document for the reward.
      </td>
    </tr>

    <tr>
      <td>
        `termAndConditionsUrl`
      </td>

      <td>
        String
      </td>

      <td>
        A web URL pointing to the terms and conditions document for the reward.
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
        Specifies the tier level (if applicable) to which the reward belongs, typically used in loyalty programs.
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
        A tag or label used to categorize or further describe the reward.
      </td>
    </tr>

    <tr>
      <td>
        `priority`
      </td>

      <td>
        Integer
      </td>

      <td>
        The priority level of the reward; higher priority rewards might appear earlier in listings.
      </td>
    </tr>

    <tr>
      <td>
        `intouchPoints`
      </td>

      <td>
        Integer
      </td>

      <td>
        The number of loyalty points required to redeem the reward.
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
        Defines a grouping attribute for the reward if applicable.
      </td>
    </tr>

    <tr>
      <td>
        `startTime`
      </td>

      <td>
        Date
      </td>

      <td>
        The timestamp when the reward becomes available for redemption.
      </td>
    </tr>

    <tr>
      <td>
        `endTime`
      </td>

      <td>
        Date
      </td>

      <td>
        The timestamp when the reward is no longer available for redemption.
      </td>
    </tr>

    <tr>
      <td>
        `expired`
      </td>

      <td>
        Boolean
      </td>

      <td>
        Indicates whether the reward has expired and can no longer be redeemed.
      </td>
    </tr>

    <tr>
      <td>
        `started`
      </td>

      <td>
        Boolean
      </td>

      <td>
        Indicates whether the reward is active and can be redeemed.
      </td>
    </tr>

    <tr>
      <td>
        `programId`
      </td>

      <td>
        Long
      </td>

      <td>
        A unique identifier linking the reward to a specific loyalty or promotional program.
      </td>
    </tr>

    <tr>
      <td>
        **`categoryList`**
      </td>

      <td>
        List\<CategoryDto>
      </td>

      <td>
        Lists the categories to which the reward belongs, often used for filtering or display purposes.
      </td>
    </tr>

    <tr>
      <td>
        **`customFields`**
      </td>

      <td>
        Map\<String, String>
      </td>

      <td>
        Contains additional metadata or attributes related to the reward, defined as key-value pairs.
      </td>
    </tr>

    <tr>
      <td>
        `testdate`
      </td>

      <td>
        Date
      </td>

      <td>
        An example custom field in date format; its purpose may vary based on implementation.
      </td>
    </tr>

    <tr>
      <td>
        `CF1`
      </td>

      <td>
        String
      </td>

      <td>
        An example custom text field; its purpose may vary based on implementation.
      </td>
    </tr>

    <tr>
      <td>
        **`loyaltyProgramCriteria`**
      </td>

      <td>
        Object
      </td>

      <td>
        Specifies any criteria related to loyalty programs that impact this reward.
      </td>
    </tr>

    <tr>
      <td>
        **`rewardRestrictions`**
      </td>

      <td>
        Object
      </td>

      <td>
        Details about any restrictions or limitations that apply to the reward.
      </td>
    </tr>

    <tr>
      <td>
        `isValid`
      </td>

      <td>
        Boolean
      </td>

      <td>
        Indicates whether the defined restrictions are valid and enforceable.
      </td>
    </tr>

    <tr>
      <td>
        **`customerLevel`**
      </td>

      <td>
        List\<CustomerLevelRestrictionDto>
      </td>

      <td>
        Lists constraints specific to customer-level restrictions, such as usage limits and frequency types.
      </td>
    </tr>

    <tr>
      <td>
        **`rewardLevel`**
      </td>

      <td>
        List\<RewardLevelRestrictionDto>
      </td>

      <td>
        Constraints applicable at the reward level, such as global limits on redemptions.
      </td>
    </tr>

    <tr>
      <td>
        **`appliedPromotions`**
      </td>

      <td>
        List\<AppliedPromotionDetailsDto>
      </td>

      <td>
        Lists any promotions currently applied to the reward.
      </td>
    </tr>

    <tr>
      <td>
        **`groups`**
      </td>

      <td>
        Set\<RewardGroupingRO>
      </td>

      <td>
        Lists any specific groups to which the reward belongs, often for segmentation purposes.
      </td>
    </tr>

    <tr>
      <td>
        `rewardRank`
      </td>

      <td>
        Integer
      </td>

      <td>
        The rank or position of the reward within its category or list.
      </td>
    </tr>

    <tr>
      <td>
        **`images`**
      </td>

      <td>
        List\<RewardImageRO>
      </td>

      <td>
        Lists any additional images associated with the reward.
      </td>
    </tr>

    <tr>
      <td>
        **`videos`**
      </td>

      <td>
        List\<RewardVideoRO>
      </td>

      <td>
        A list of video details related to the reward.
      </td>
    </tr>

    <tr>
      <td>
        **`paymentConfigs`**
      </td>

      <td>
        List\<AbstractPaymentConfigRO>
      </td>

      <td>
        Configuration details for different payment methods associated with the reward.
      </td>
    </tr>

    <tr>
      <td>
        `paymentMode`
      </td>

      <td>
        String
      </td>

      <td>
        The type of payment mode allowed for this reward (e.g., `POINTS`, `CASH`, `POINTS_CASH`).
      </td>
    </tr>

    <tr>
      <td>
        `conversionRatio`
      </td>

      <td>
        Double
      </td>

      <td>
        The conversion ratio used for points or cash redemption for this reward.
      </td>
    </tr>

    <tr>
      <td>
        **`orgLevelRestrictions`**
      </td>

      <td>
        List\<OrgLevelRestrictionDto>
      </td>

      <td>
        Organization-level restrictions that apply to the reward.
      </td>
    </tr>

    <tr>
      <td>
        `startDateTime`
      </td>

      <td>
        String
      </td>

      <td>
        Start date and time of the reward in ISO 8601 format (YYYY-MM-DDTHH:MM:SSZ).
      </td>
    </tr>

    <tr>
      <td>
        `endDateTime`
      </td>

      <td>
        String
      </td>

      <td>
        End date and time of the reward in ISO 8601 format (YYYY-MM-DDTHH:MM:SSZ).
      </td>
    </tr>

    <tr>
      <td>
        **`languageSpecificInfo`**
      </td>

      <td>
        Object
      </td>

      <td>
        Contains language-specific details for the reward.
      </td>
    </tr>

    <tr>
      <td>
        **`languageSpecificInfo.richContentRO`**
      </td>

      <td>
        Object
      </td>

      <td>
        Rich content related to the reward, such as HTML or multimedia, enabled for display purposes.
      </td>
    </tr>

    <tr>
      <td>
        `richContentRO.content`
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
        `richContentRO.isEnabled`
      </td>

      <td>
        Boolean
      </td>

      <td>
        Indicates whether the rich text content is enabled. Supported Values: `true` or `false`.
      </td>
    </tr>

    <tr>
      <td>
        `defaultValue`
      </td>

      <td>
        String
      </td>

      <td>
        Default value if rich text content is not mapped to the reward. Required if `isMandatory` is set to `true`.
      </td>
    </tr>

    <tr>
      <td>
        `VendorId`
      </td>

      <td>
        String
      </td>

      <td>
        Retrieves the rewards associated with a specific vendor.
      </td>
    </tr>

    <tr>
      <td>
        `redemptionType`
      </td>

      <td>
        String
      </td>

      <td>
        Retrieves rewards based on their redemption type. **Possible values**: `GAMES`, `AUCTION`, `CART_PROMOTION`, `CASH_WALLET`, `VENDOR_ONLY_REWARD`, `VOUCHER`, `CASH_BACK`, `INTOUCH_REWARD`, `PHYSICAL_REWARD`, `CHARITY`, `MILES`, `GIFT_CARD`, `SWEEPSTAKES`, `VENDOR_INTOUCH_REWARD`, `CARD_DISC`. Multiple `redemptionType` values can be filtered using a comma (,).
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
        Defines how and when a reward can be issued—at both the reward level (total limit across all users) and the customer level (limit per individual user).
        For example,
      </td>
    </tr>

    <tr>
      <td>
        **customerLevel**
      </td>

      <td>
        Array
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
        Integer
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
        String
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
        Integer
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
        Integer
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
        String
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
        String
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
        String
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
        Long
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
        Long
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
        Integer
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
        Integer
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
        String
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
        String
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
        Object
      </td>

      <td>
        Defines the total number of times a reward can be issued across all customer.
      </td>
    </tr>

    <tr>
      <td>
        rewardLevel.id
      </td>

      <td>
        Integer
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
        Enum
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
        Integer
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
        Enum
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
        Enum
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
        Enum
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
        Long
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
        Long
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
        Integer
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
        Integer
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
        String
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
        String
      </td>

      <td>
        Date and time when the reward-level restriction was last updated in ISO 8601 format.
      </td>
    </tr>
  </tbody>
</Table>

<br />

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
        **customerLevel**
      </td>

      <td>
        Array
      </td>

      <td>
        Define the maximum number of times an individual customer can redeem a specific reward. If the `limit` is set to 3 and `repeatFrequencyType` to `MONTHS`, each customer will be able to redeem the reward up to 3 times within a calendar month.
      </td>
    </tr>

    <tr>
      <td>
        customerLevel.id
      </td>

      <td>
        Integer
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
        String
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
        Integer
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
        Integer
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
        String
      </td>

      <td>
        The Key Performance Indicator (KPI) on which the reward is created.

        <br />

        **Note:** when redemptionType is set to `MILES`, KPI value should be set to `REDEMPTION_VALUE`.
      </td>
    </tr>

    <tr>
      <td>
        customerLevel.windowType
      </td>

      <td>
        String
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
        String
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
        Long
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
        Long
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
        Integer
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
        Integer
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
        String
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
        String
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
        Object
      </td>

      <td>
        Defines the total number of times a reward can be issued across all customers. If the limit for a reward is set to 1000, a maximum of 1,000 total redemptions will be allowed. Once this limit is reached, the reward will no longer be available for issuance to any customer.
      </td>
    </tr>

    <tr>
      <td>
        rewardLevel.id
      </td>

      <td>
        Integer
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
        Enum
      </td>

      <td>
        Defines how often the reward limit resets when `windowType` is set to `FIXED`.

        <br />

        * **NO\_LIMIT:** There's no reset. The limit is tracked for the entire duration of the reward.
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

        <br />

        * If `windowType` is `FIXED`, the limit applies to each fixed cycle (e.g., per week or per month).

        <br />

        * If windowType is ROLLING, the limit applies over a sliding time window (e.g., past 30 days).

        <br />

        * If repeatFrequencyType is `NO_LIMIT`, the cap is applied for the entire lifetime of the reward.
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
        Indicates the Key Performance Indicator (KPI) on which the reward is created.

        <br />

        **Note:** when redemptionType is set to `MILES`, KPI value should be set to `REDEMPTION_VALUE`.
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
        Specifies the type of window for the reward.
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
        Specifies the day of the week that the week starts on.
      </td>
    </tr>

    <tr>
      <td>
        rewardLevel.createdOn
      </td>

      <td>
        Long
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
        Long
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
        Integer
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
        Integer
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
        String
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
        String
      </td>

      <td>
        Date and time when the reward-level restriction was last updated in ISO 8601 format.
      </td>
    </tr>
  </tbody>
</Table>

<br />

```json With userId
{
    "status": {
        "success": true,
        "code": 200,
        "message": "User Reward fetched successfully"
    },
    "reward": {
        "id": 355104,
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
        "startTime": "2025-09-26 20:00:00",
        "startDateTime": "2025-09-26T20:00:00Z",
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
        "customFields": {},
        "redemptionType": "INTOUCH_REWARD",
        "vendorId": null,
        "richContentRO": {
            "RC345": {
                "content": "en",
                "isEnabled": true
            },
            "Testing-richtestcontent": {
                "content": "hello this is rich content test",
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
        },
        "loyaltyProgramCriteria": [],
        "rewardRestrictions": {
            "isValid": true
        },
        "groups": [],
        "rewardRank": null,
        "images": null,
        "videos": null,
        "orgLevelRestrictions": {
            "isValid": true,
            "customerRedemptionTypeLevel": [
                {
                    "rewardConstraintId": 29700,
                    "orgId": 100737,
                    "kpi": "POINTS",
                    "constraintLevel": "CUSTOMER_REDEMPTION_TYPE",
                    "frequencyType": "DAILY",
                    "constraintLimitValue": 15,
                    "isActive": true,
                    "intervalValue": 1,
                    "isValid": true,
                    "consumed": 0,
                    "createdOn": null,
                    "lastUpdatedOn": null,
                    "createdBy": null,
                    "lastUpdatedBy": null,
                    "createdOnDateTime": null,
                    "lastUpdatedOnDateTime": null,
                    "redemptionType": "POINTS"
                },
                {
                    "rewardConstraintId": 34326,
                    "orgId": 100737,
                    "kpi": "POINTS",
                    "constraintLevel": "CUSTOMER_REDEMPTION_TYPE",
                    "frequencyType": "DAILY",
                    "constraintLimitValue": 15,
                    "isActive": true,
                    "intervalValue": 1,
                    "isValid": true,
                    "consumed": 0,
                    "createdOn": null,
                    "lastUpdatedOn": null,
                    "createdBy": null,
                    "lastUpdatedBy": null,
                    "createdOnDateTime": null,
                    "lastUpdatedOnDateTime": null,
                    "redemptionType": "VOUCHER"
                },
                {
                    "rewardConstraintId": 34327,
                    "orgId": 100737,
                    "kpi": "POINTS",
                    "constraintLevel": "CUSTOMER_REDEMPTION_TYPE",
                    "frequencyType": "DAILY",
                    "constraintLimitValue": 15,
                    "isActive": true,
                    "intervalValue": 1,
                    "isValid": true,
                    "consumed": 0,
                    "createdOn": null,
                    "lastUpdatedOn": null,
                    "createdBy": null,
                    "lastUpdatedBy": null,
                    "createdOnDateTime": null,
                    "lastUpdatedOnDateTime": null,
                    "redemptionType": "CASH"
                }
            ]
        }
    }
}
```
```json With category=accessories
{
    "status": {
        "success": true,
        "code": 200,
        "message": "User Reward fetched successfully"
    },
    "rewardList": [
        {
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
            "started": true,
            "programId": null,
            "categoryList": [
                {
                    "id": 22,
                    "name": "accessories",
                    "enabled": true
                }
            ],
            "customFields": {
                "CF210": "value"
            },
            "loyaltyProgramCriteria": [],
            "groups": [],
            "rewardRestrictions": {
                "isValid": true
            },
            "groupName": null,
            "groupRank": null,
            "rewardRank": null,
            "images": [],
            "videos": []
        },
        {
            "id": 191955,
            "name": "300 free voucher on LULU hypermarket ",
            "description": "300 free voucher on LULU hypermarket ",
            "imageId": "1315f8f9-7ae9-41f0-9eb6-a7c35051ec6f",
            "imageUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/17e5a13b-c13b-448f-83e1-4143db8f.jpg",
            "thumbnailId": "5192ff78-9c5b-466d-8a52-a7fd3bc0eac5",
            "thumbnailUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/0ed4b37f-ef19-49c6-a1cb-63bde464.jpg",
            "termAndConditionsId": "53180a7d-b0e2-402e-b575-6726f4547035",
            "termAndConditionsUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/2dd931d9-2567-452a-8307-26bfe61.html",
            "tier": null,
            "label": "accessories",
            "priority": 3,
            "intouchPoints": 10000,
            "group": null,
            "startTime": "2024-06-28 14:42:25",
            "endTime": "2025-06-28 14:42:25",
            "expired": false,
            "started": true,
            "programId": null,
            "categoryList": [
                {
                    "id": 22,
                    "name": "accessories",
                    "enabled": true
                }
            ],
            "customFields": {
                "CF210": "value"
            },
            "loyaltyProgramCriteria": [],
            "groups": [],
            "rewardRestrictions": {
                "isValid": true
            },
            "groupName": null,
            "groupRank": null,
            "rewardRank": null,
            "images": [],
            "videos": []
        },
        {
            "id": 191954,
            "name": "5% Off on all products",
            "description": "5% Off on all products",
            "imageId": "1faf7376-b68e-42e1-a70b-5ad2577b43a0",
            "imageUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/d748ae1f-a7aa-410a-a536-05a0f2ae.png",
            "thumbnailId": "8b806438-efbe-476d-b7e9-5c756116ff34",
            "thumbnailUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/68abba6e-8557-4045-a39e-bc47cf33.png",
            "termAndConditionsId": "2c8405c8-3ccd-46c2-a3cf-f9854e79f0ec",
            "termAndConditionsUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/45deabfb-1de4-4b50-b9f5-71f44de.html",
            "tier": null,
            "label": "accessories",
            "priority": 2,
            "intouchPoints": 5000,
            "group": null,
            "startTime": "2024-06-28 14:38:31",
            "endTime": "2025-06-18 14:38:31",
            "expired": false,
            "started": true,
            "programId": null,
            "categoryList": [
                {
                    "id": 22,
                    "name": "accessories",
                    "enabled": true
                }
            ],
            "customFields": {
                "CF210": "value"
            },
            "loyaltyProgramCriteria": [],
            "groups": [],
            "rewardRestrictions": {
                "isValid": true
            },
            "groupName": null,
            "groupRank": null,
            "rewardRank": null,
            "images": [],
            "videos": []
        },
        {
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
            "started": true,
            "programId": null,
            "categoryList": [
                {
                    "id": 22,
                    "name": "accessories",
                    "enabled": true
                }
            ],
            "customFields": {
                "CF210": "value"
            },
            "loyaltyProgramCriteria": [],
            "groups": [],
            "rewardRestrictions": {
                "isValid": true
            },
            "groupName": null,
            "groupRank": null,
            "rewardRank": null,
            "images": [],
            "videos": []
        },
        {
            "id": 175507,
            "name": "5% off on every txn",
            "description": "5% off on every txn above 3000",
            "imageId": "9e5974d5-8a00-435c-ab79-d07b11b1a505",
            "imageUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/9d2551f1-31a4-4440-abaf-a20d06c1.jpg",
            "thumbnailId": "e49fd8c3-cbb9-4ac5-98c8-aae9c3e65ebf",
            "thumbnailUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/afbfe7c0-b59c-4995-b646-654a4f1a.jpg",
            "termAndConditionsId": "be1114e0-e6e9-442e-a733-e143fe146bc8",
            "termAndConditionsUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/d840d1ca-fc3c-4c5c-958b-3daa92d.html",
            "tier": "",
            "label": "",
            "priority": 1,
            "intouchPoints": 1000,
            "group": "",
            "startTime": "2024-05-28 10:26:58",
            "endTime": "2026-11-24 10:26:58",
            "expired": false,
            "started": true,
            "programId": null,
            "categoryList": [
                {
                    "id": 22,
                    "name": "accessories",
                    "enabled": true
                }
            ],
            "customFields": {
                "CF210": "value"
            },
            "loyaltyProgramCriteria": [],
            "groups": [],
            "rewardRestrictions": {
                "isValid": true
            },
            "groupName": null,
            "groupRank": null,
            "rewardRank": null,
            "images": [],
            "videos": []
        },
        {
            "id": 158645,
            "name": "David Jones 20% discount voucher",
            "description": "David Jones 20% discount voucher",
            "imageId": "ead62903-4ce1-418b-b35b-8ccec35af73c",
            "imageUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/f12e4fd3-fbd9-47ad-9435-a5c4c579.jpg",
            "thumbnailId": "e6d26445-6b73-484b-8a14-b9fd2e6a269c",
            "thumbnailUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/a2f7235f-6d06-4cf5-b6c1-7f7f5074.jpg",
            "termAndConditionsId": "4a4b6609-21bb-4333-9be8-0e910a40b1c4",
            "termAndConditionsUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/5eb39438-e68d-4928-9f4f-4107c5f.html",
            "tier": null,
            "label": "accessories",
            "priority": 1,
            "intouchPoints": 500,
            "group": null,
            "startTime": "2024-04-26 03:34:32",
            "endTime": "2025-08-04 13:04:32",
            "expired": false,
            "started": true,
            "programId": null,
            "categoryList": [
                {
                    "id": 22,
                    "name": "accessories",
                    "enabled": true
                }
            ],
            "customFields": {
                "CF210": "value"
            },
            "loyaltyProgramCriteria": [],
            "groups": [],
            "rewardRestrictions": {
                "isValid": true
            },
            "groupName": null,
            "groupRank": null,
            "rewardRank": null,
            "images": [],
            "videos": []
        },
        {
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
            "started": true,
            "programId": null,
            "categoryList": [
                {
                    "id": 22,
                    "name": "accessories",
                    "enabled": true
                }
            ],
            "customFields": {
                "CF210": "value"
            },
            "loyaltyProgramCriteria": [],
            "groups": [],
            "rewardRestrictions": {
                "isValid": true
            },
            "groupName": null,
            "groupRank": null,
            "rewardRank": null,
            "images": [],
            "videos": []
        }
    ],
    "pagingDto": {
        "last": true,
        "totalElements": 7,
        "totalPages": 1,
        "numberOfElements": 7,
        "first": true,
        "size": 7,
        "number": 0
    },
    "orgLevelRestrictions": {
        "isValid": true,
        "customerLevel": [
            {
                "rewardConstraintId": 13054,
                "orgId": 100606,
                "kpi": "POINTS",
                "constraintLevel": "CUSTOMER",
                "frequencyType": "MONTHLY",
                "constraintLimitValue": 500000,
                "isActive": true,
                "isValid": true
            }
        ],
        "customerRedemptionTypeLevel": [
            {
                "rewardConstraintId": 13055,
                "orgId": 100606,
                "kpi": "POINTS",
                "constraintLevel": "CUSTOMER_REDEMPTION_TYPE",
                "frequencyType": "MONTHLY",
                "constraintLimitValue": 4000,
                "isActive": true,
                "isValid": true,
                "redemptionType": "CHARITY"
            }
        ]
    }
}
```
```json With groupName=Most Preferred Rewards
{
    "status": {
        "success": true,
        "code": 200,
        "message": "User Reward fetched successfully"
    },
    "rewardList": [
        {
            "id": 213266,
            "name": "test reward",
            "description": "test reward",
            "imageId": "fe20b118-ea9f-49d5-96a6-13fac6fc17d8",
            "imageUrl": "https://eucrm-solutions.s3-eu-west-1.amazonaws.com/rewards/100606/18462185-d1ed-460d-91f9-a256899e.jpg?X-Amz-Security-Token=FwoGZXIvYXdzEDgaDHNgb6lylX8%2F1LkU%2FCLIATxZlFcN4Wg1XpaFIjweLjXKd8B34yZZ%2FOzPBh%2FS18ELdYKSOYGaUbe0XRmkAG4fhfoiEn%2FCOHIyiCkl9vet6",
            "thumbnailId": "fe20b118-ea9f-49d5-96a6-13fac6fc17d8",
            "thumbnailUrl": "https://eucrm-solutions.s3-eu-west-1.amazonaws.com/rewards/100606/18462185-d1ed-460d-91f9-a256899e.jpg?X-Amz-Security-Token=FwoGZXIvYXdzEDcaDBgEN2bDJ%2B8u4TOSpCLIAfvu1qVCtO8orpjcfW6LCwGkRRdfxpzF%2BESMKRX4dGegVMxqsX7rZstCT9EcMvdrpBp7ErQVfuj%2BuNpfNIld8UOga",
            "termAndConditionsId": "36797a3b-7726-4d75-ad8b-aa1dc0bd7874",
            "termAndConditionsUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/5f259983-5671-453e-af25-c9d1293.html",
            "tier": null,
            "label": null,
            "priority": 1,
            "intouchPoints": 100,
            "group": "AFG",
            "startTime": "2024-08-09 14:35:00",
            "endTime": "2030-10-31 11:59:30",
            "expired": false,
            "started": true,
            "programId": null,
            "categoryList": [
                {
                    "id": 20,
                    "name": "groceries",
                    "enabled": true
                }
            ],
            "customFields": {
                "CF210": "value"
            },
            "loyaltyProgramCriteria": [],
            "groups": [],
            "rewardRestrictions": {
                "isValid": true
            },
            "groupName": "Most Preferred Rewards",
            "groupRank": 1,
            "rewardRank": 1,
            "images": [],
            "videos": []
        }
    ],
    "pagingDto": {
        "last": true,
        "totalElements": 0,
        "totalPages": 1,
        "numberOfElements": 0,
        "first": true,
        "size": 0,
        "number": 0
    },
    "orgLevelRestrictions": {
        "isValid": true,
        "customerLevel": [
            {
                "rewardConstraintId": 13054,
                "orgId": 100606,
                "kpi": "POINTS",
                "constraintLevel": "CUSTOMER",
                "frequencyType": "MONTHLY",
                "constraintLimitValue": 500000,
                "isActive": true,
                "isValid": true
            }
        ],
        "customerRedemptionTypeLevel": [
            {
                "rewardConstraintId": 13055,
                "orgId": 100606,
                "kpi": "POINTS",
                "constraintLevel": "CUSTOMER_REDEMPTION_TYPE",
                "frequencyType": "MONTHLY",
                "constraintLimitValue": 4000,
                "isActive": true,
                "isValid": true,
                "redemptionType": "CHARITY"
            }
        ]
    }
}
```
```json With sortOnGroups=true
{
    "status": {
        "success": true,
        "code": 200,
        "message": "User Reward fetched successfully"
    },
    "rewardList": [
        {
            "id": 213266,
            "name": "test reward",
            "description": "test reward",
            "imageId": "fe20b118-ea9f-49d5-96a6-13fac6fc17d8",
            "imageUrl": "https://eucrm-solutions.s3-eu-west-1.amazonaws.com/rewards/100606/18462185-d1ed-460d-91f9-a256899e.jpg?X-Amz-Security-Token=FwoGZXIvYXdzEDgaDHNgb6lylX8%2F1LkU%2FCLIATxZlFcN4Wg1XpaFIjweLjXKd8B34yZZ%2FOzPBh%2FS18ELdYKSOYGaUbe0XRmkAG4fhfoiEn%2FCOHIyiCkl9vet6",
            "thumbnailId": "fe20b118-ea9f-49d5-96a6-13fac6fc17d8",
            "thumbnailUrl": "https://eucrm-solutions.s3-eu-west-1.amazonaws.com/rewards/100606/18462185-d1ed-460d-91f9-a256899e.jpg?X-Amz-Security-Token=FwoGZXIvYXdzEDcaDBgEN2bDJ%2B8u4TOSpCLIAfvu1qVCtO8orpjcfW6LCwGkRRdfxpzF%2BESMKRX4dGegVMxqsX7rZstCT9EcMvdrpBp7ErQVfuj%2BuNpfNIld8UOga",
            "termAndConditionsId": "36797a3b-7726-4d75-ad8b-aa1dc0bd7874",
            "termAndConditionsUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/5f259983-5671-453e-af25-c9d1293.html",
            "tier": null,
            "label": null,
            "priority": 1,
            "intouchPoints": 100,
            "group": "AFG",
            "startTime": "2024-08-09 14:35:00",
            "endTime": "2030-10-31 11:59:30",
            "expired": false,
            "started": true,
            "programId": null,
            "categoryList": [
                {
                    "id": 20,
                    "name": "groceries",
                    "enabled": true
                }
            ],
            "customFields": {
                "CF210": "value"
            },
            "loyaltyProgramCriteria": [],
            "groups": [],
            "rewardRestrictions": {
                "isValid": true
            },
            "groupName": "2024 Special Rewards",
            "groupRank": 1,
            "rewardRank": 1,
            "images": [],
            "videos": []
        },
        {
            "id": 213265,
            "name": "test reward",
            "description": "test reward",
            "imageId": "fe20b118-ea9f-49d5-96a6-13fac6fc17d8",
            "imageUrl": "https://eucrm-solutions.s3-eu-west-1.amazonaws.com/rewards/100606/18462185-d1ed-460d-91f9-a256899e.jpg?X-Amz-Security-Token=FwoGZXIvYXdzEDcaDBgEN2bDJ%2B8u4TOSpCLIAfvu1qVCtO8orpjcfW6LCwGkRRdfxpzF%2BESMKRX4dGegVMxqsX7rZstCT9EcMvdrpBp7ErQVfuj%2BuNpfNIld8UOga",
            "thumbnailId": "fe20b118-ea9f-49d5-96a6-13fac6fc17d8",
            "thumbnailUrl": "https://eucrm-solutions.s3-eu-west-1.amazonaws.com/rewards/100606/18462185-d1ed-460d-91f9-a256899e.jpg?X-Amz-Security-Token=FwoGZXIvYXdzEDcaDBgEN2bDJ%2B8u4TOSpCLIAfvu1qVCtO8orpjcfW6LCwGkRRdfxpzF%2BESMKRX4dGegVMxqsX7rZstCT9EcMvdrpBp7ErQVfuj%2BuNpfNIld8UOga",
            "termAndConditionsId": "36797a3b-7726-4d75-ad8b-aa1dc0bd7874",
            "termAndConditionsUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/5f259983-5671-453e-af25-c9d1293.html",
            "tier": null,
            "label": null,
            "priority": 1,
            "intouchPoints": 100,
            "group": "AFG",
            "startTime": "2024-08-09 14:35:00",
            "endTime": "2030-10-31 11:59:30",
            "expired": false,
            "started": true,
            "programId": null,
            "categoryList": [
                {
                    "id": 20,
                    "name": "groceries",
                    "enabled": true
                }
            ],
            "customFields": {
                "CF210": "value"
            },
            "loyaltyProgramCriteria": [],
            "groups": [],
            "rewardRestrictions": {
                "isValid": true
            },
            "groupName": "2024 Special Rewards",
            "groupRank": 1,
            "rewardRank": 1,
            "images": [],
            "videos": []
        },
        {
            "id": 213264,
            "name": "test reward",
            "description": "test reward",
            "imageId": "fe20b118-ea9f-49d5-96a6-13fac6fc17d8",
            "imageUrl": "https://eucrm-solutions.s3-eu-west-1.amazonaws.com/rewards/100606/18462185-d1ed-460d-91f9-a256899e.jpg?X-Amz-Security-Token=FwoGZXIvYXdzEDcaDBgEN2bDJ%2B8u4TOSpCLIAfvu1qVCtO8orpjcfW6LCwGkRRdfxpzF%2BESMKRX4dGegVMxqsX7rZstCT9EcMvdrpBp7ErQVfuj%2BuNpfNIld8UOga",
            "thumbnailId": "fe20b118-ea9f-49d5-96a6-13fac6fc17d8",
            "thumbnailUrl": "https://eucrm-solutions.s3-eu-west-1.amazonaws.com/rewards/100606/18462185-d1ed-460d-91f9-a256899e.jpg?X-Amz-Security-Token=FwoGZXIvYXdzEDgaDHNgb6lylX8%2F1LkU%2FCLIATxZlFcN4Wg1XpaFIjweLjXKd8B34yZZ%2FOzPBh%2FS18ELdYKSOYGaUbe0XRmkAG4fhfoiEn%2FCOHIyiCkl9vet6",
            "termAndConditionsId": "36797a3b-7726-4d75-ad8b-aa1dc0bd7874",
            "termAndConditionsUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/5f259983-5671-453e-af25-c9d1293.html",
            "tier": null,
            "label": null,
            "priority": 1,
            "intouchPoints": 100,
            "group": "AFG",
            "startTime": "2024-08-09 14:35:00",
            "endTime": "2030-10-31 11:59:30",
            "expired": false,
            "started": true,
            "programId": null,
            "categoryList": [
                {
                    "id": 20,
                    "name": "groceries",
                    "enabled": true
                }
            ],
            "customFields": {
                "CF210": "value"
            },
            "loyaltyProgramCriteria": [],
            "groups": [],
            "rewardRestrictions": {
                "isValid": true
            },
            "groupName": "2024 Special Rewards",
            "groupRank": 1,
            "rewardRank": 1,
            "images": [],
            "videos": []
        },
        {
            "id": 213263,
            "name": "test reward",
            "description": "test reward",
            "imageId": "fe20b118-ea9f-49d5-96a6-13fac6fc17d8",
            "imageUrl": "https://eucrm-solutions.s3-eu-west-1.amazonaws.com/rewards/100606/18462185-d1ed-460d-91f9-a256899e.jpg?X-Amz-Security-Token=FwoGZXIvYXdzEDgaDHNgb6lylX8%2F1LkU%2FCLIATxZlFcN4Wg1XpaFIjweLjXKd8B34yZZ%2FOzPBh%2FS18ELdYKSOYGaUbe0XRmkAG4fhfoiEn%2FCOHIyiCkl9vet6",
            "thumbnailId": "fe20b118-ea9f-49d5-96a6-13fac6fc17d8",
            "thumbnailUrl": "https://eucrm-solutions.s3-eu-west-1.amazonaws.com/rewards/100606/18462185-d1ed-460d-91f9-a256899e.jpg?X-Amz-Security-Token=FwoGZXIvYXdzEDcaDBgEN2bDJ%2B8u4TOSpCLIAfvu1qVCtO8orpjcfW6LCwGkRRdfxpzF%2BESMKRX4dGegVMxqsX7rZstCT9EcMvdrpBp7ErQVfuj%2BuNpfNIld8UOga",
            "termAndConditionsId": "36797a3b-7726-4d75-ad8b-aa1dc0bd7874",
            "termAndConditionsUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/5f259983-5671-453e-af25-c9d1293.html",
            "tier": null,
            "label": null,
            "priority": 1,
            "intouchPoints": 100,
            "group": "AFG",
            "startTime": "2024-08-09 14:35:00",
            "endTime": "2030-10-31 11:59:30",
            "expired": false,
            "started": true,
            "programId": null,
            "categoryList": [
                {
                    "id": 20,
                    "name": "groceries",
                    "enabled": true
                }
            ],
            "customFields": {
                "CF210": "value"
            },
            "loyaltyProgramCriteria": [],
            "groups": [],
            "rewardRestrictions": {
                "isValid": true
            },
            "groupName": "2024 Special Rewards",
            "groupRank": 1,
            "rewardRank": 1,
            "images": [],
            "videos": []
        },
        {
            "id": 213262,
            "name": "test reward",
            "description": "test reward",
            "imageId": "fe20b118-ea9f-49d5-96a6-13fac6fc17d8",
            "imageUrl": "https://eucrm-solutions.s3-eu-west-1.amazonaws.com/rewards/100606/18462185-d1ed-460d-91f9-a256899e.jpg?X-Amz-Security-Token=FwoGZXIvYXdzEDgaDHNgb6lylX8%2F1LkU%2FCLIATxZlFcN4Wg1XpaFIjweLjXKd8B34yZZ%2FOzPBh%2FS18ELdYKSOYGaUbe0XRmkAG4fhfoiEn%2FCOHIyiCkl9vet6",
            "thumbnailId": "fe20b118-ea9f-49d5-96a6-13fac6fc17d8",
            "thumbnailUrl": "https://eucrm-solutions.s3-eu-west-1.amazonaws.com/rewards/100606/18462185-d1ed-460d-91f9-a256899e.jpg?X-Amz-Security-Token=FwoGZXIvYXdzEDgaDHNgb6lylX8%2F1LkU%2FCLIATxZlFcN4Wg1XpaFIjweLjXKd8B34yZZ%2FOzPBh%2FS18ELdYKSOYGaUbe0XRmkAG4fhfoiEn%2FCOHIyiCkl9vet6",
            "termAndConditionsId": "36797a3b-7726-4d75-ad8b-aa1dc0bd7874",
            "termAndConditionsUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/5f259983-5671-453e-af25-c9d1293.html",
            "tier": null,
            "label": null,
            "priority": 1,
            "intouchPoints": 0,
            "group": "AFG",
            "startTime": "2024-08-09 14:35:00",
            "endTime": "2030-10-31 11:59:30",
            "expired": false,
            "started": true,
            "programId": null,
            "categoryList": [
                {
                    "id": 20,
                    "name": "groceries",
                    "enabled": true
                }
            ],
            "customFields": {
                "CF210": "value"
            },
            "loyaltyProgramCriteria": [],
            "groups": [],
            "rewardRestrictions": {
                "isValid": true
            },
            "groupName": "2024 Special Rewards",
            "groupRank": 1,
            "rewardRank": 1,
            "images": [],
            "videos": [],
            "paymentConfigs": [
                {
                    "paymentMode": "POINTS_CASH",
                    "id": 363,
                    "cash": 10.0000,
                    "points": 50.0000
                }
            ]
        },
        {
            "id": 180923,
            "name": "150 off on handbags and wallets",
            "description": "150 off on handbags and wallets",
            "imageId": "04bbabf2-ce9d-48b3-9a58-347479b8ea88",
            "imageUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/969c2707-e082-4cc5-bbad-48f6ae1.jpeg",
            "thumbnailId": "d287af72-80bd-40c8-98c3-68a28eb3cf66",
            "thumbnailUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/3a8f00ea-bb30-4eeb-9175-663afbb.jpeg",
            "termAndConditionsId": "36797a3b-7726-4d75-ad8b-aa1dc0bd7874",
            "termAndConditionsUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/5f259983-5671-453e-af25-c9d1293.html",
            "tier": null,
            "label": null,
            "priority": 1,
            "intouchPoints": 500,
            "group": null,
            "startTime": "2024-08-24 12:54:00",
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
            "customFields": {
                "CF210": "value"
            },
            "loyaltyProgramCriteria": [],
            "groups": [],
            "rewardRestrictions": {
                "isValid": true,
                "customerLevel": [
                    {
                        "id": 7854,
                        "isValid": true,
                        "repeatFrequencyType": "DAYS",
                        "limit": 10,
                        "interval": 30,
                        "kpi": "QUANTITY"
                    },
                    {
                        "id": 7855,
                        "isValid": true,
                        "repeatFrequencyType": "MONTHS",
                        "limit": 50,
                        "interval": 12,
                        "kpi": "QUANTITY"
                    }
                ],
                "rewardLevel": [
                    {
                        "id": 7853,
                        "isValid": true,
                        "consumed": 0,
                        "repeatFrequencyType": "NO_LIMIT",
                        "limit": 10000,
                        "kpi": "QUANTITY"
                    }
                ]
            },
            "groupName": "Exclusive Rewards",
            "groupRank": 4,
            "rewardRank": 1,
            "images": [],
            "videos": []
        },
        {
            "id": 180922,
            "name": "150 off on handbags and wallets",
            "description": "150 off on handbags and wallets",
            "imageId": "04bbabf2-ce9d-48b3-9a58-347479b8ea88",
            "imageUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/969c2707-e082-4cc5-bbad-48f6ae1.jpeg",
            "thumbnailId": "d287af72-80bd-40c8-98c3-68a28eb3cf66",
            "thumbnailUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/3a8f00ea-bb30-4eeb-9175-663afbb.jpeg",
            "termAndConditionsId": "36797a3b-7726-4d75-ad8b-aa1dc0bd7874",
            "termAndConditionsUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/5f259983-5671-453e-af25-c9d1293.html",
            "tier": null,
            "label": null,
            "priority": 1,
            "intouchPoints": 500,
            "group": null,
            "startTime": "2024-08-24 12:54:00",
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
            "customFields": {
                "CF210": "value"
            },
            "loyaltyProgramCriteria": [],
            "groups": [],
            "rewardRestrictions": {
                "isValid": true,
                "customerLevel": [
                    {
                        "id": 7851,
                        "isValid": true,
                        "repeatFrequencyType": "DAYS",
                        "limit": 10,
                        "interval": 30,
                        "kpi": "QUANTITY"
                    },
                    {
                        "id": 7852,
                        "isValid": true,
                        "repeatFrequencyType": "MONTHS",
                        "limit": 50,
                        "interval": 12,
                        "kpi": "QUANTITY"
                    }
                ],
                "rewardLevel": [
                    {
                        "id": 7850,
                        "isValid": true,
                        "consumed": 0,
                        "repeatFrequencyType": "NO_LIMIT",
                        "limit": 10000,
                        "kpi": "QUANTITY"
                    }
                ]
            },
            "groupName": "Exclusive Rewards",
            "groupRank": 4,
            "rewardRank": 1,
            "images": [],
            "videos": []
        },
        {
            "id": 180921,
            "name": "150 off on handbags and wallets",
            "description": "150 off on handbags and wallets",
            "imageId": "04bbabf2-ce9d-48b3-9a58-347479b8ea88",
            "imageUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/969c2707-e082-4cc5-bbad-48f6ae1.jpeg",
            "thumbnailId": "d287af72-80bd-40c8-98c3-68a28eb3cf66",
            "thumbnailUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/3a8f00ea-bb30-4eeb-9175-663afbb.jpeg",
            "termAndConditionsId": "36797a3b-7726-4d75-ad8b-aa1dc0bd7874",
            "termAndConditionsUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/5f259983-5671-453e-af25-c9d1293.html",
            "tier": null,
            "label": null,
            "priority": 1,
            "intouchPoints": 500,
            "group": "Lifestyle",
            "startTime": "2024-08-24 12:54:00",
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
            "customFields": {
                "CF210": "value"
            },
            "loyaltyProgramCriteria": [],
            "groups": [],
            "rewardRestrictions": {
                "isValid": true,
                "customerLevel": [
                    {
                        "id": 7848,
                        "isValid": true,
                        "repeatFrequencyType": "DAYS",
                        "limit": 10,
                        "interval": 30,
                        "kpi": "QUANTITY"
                    },
                    {
                        "id": 7849,
                        "isValid": true,
                        "repeatFrequencyType": "MONTHS",
                        "limit": 50,
                        "interval": 12,
                        "kpi": "QUANTITY"
                    }
                ],
                "rewardLevel": [
                    {
                        "id": 7847,
                        "isValid": true,
                        "consumed": 0,
                        "repeatFrequencyType": "NO_LIMIT",
                        "limit": 10000,
                        "kpi": "QUANTITY"
                    }
                ]
            },
            "groupName": "Exclusive Rewards",
            "groupRank": 4,
            "rewardRank": 1,
            "images": [],
            "videos": []
        },
        {
            "id": 180920,
            "name": "150 off on handbags and wallets",
            "description": "150 off on handbags and wallets",
            "imageId": "04bbabf2-ce9d-48b3-9a58-347479b8ea88",
            "imageUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/969c2707-e082-4cc5-bbad-48f6ae1.jpeg",
            "thumbnailId": "d287af72-80bd-40c8-98c3-68a28eb3cf66",
            "thumbnailUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/3a8f00ea-bb30-4eeb-9175-663afbb.jpeg",
            "termAndConditionsId": "36797a3b-7726-4d75-ad8b-aa1dc0bd7874",
            "termAndConditionsUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/5f259983-5671-453e-af25-c9d1293.html",
            "tier": null,
            "label": null,
            "priority": 1,
            "intouchPoints": 500,
            "group": "Lifestyle",
            "startTime": "2024-08-24 12:54:00",
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
            "customFields": {
                "CF210": "value"
            },
            "loyaltyProgramCriteria": [],
            "groups": [],
            "rewardRestrictions": {
                "isValid": true,
                "customerLevel": [
                    {
                        "id": 7845,
                        "isValid": true,
                        "repeatFrequencyType": "DAYS",
                        "limit": 10,
                        "interval": 30,
                        "kpi": "QUANTITY"
                    },
                    {
                        "id": 7846,
                        "isValid": true,
                        "repeatFrequencyType": "MONTHS",
                        "limit": 50,
                        "interval": 12,
                        "kpi": "QUANTITY"
                    }
                ],
                "rewardLevel": [
                    {
                        "id": 7844,
                        "isValid": true,
                        "consumed": 0,
                        "repeatFrequencyType": "NO_LIMIT",
                        "limit": 10000,
                        "kpi": "QUANTITY"
                    }
                ]
            },
            "groupName": "Exclusive Rewards",
            "groupRank": 4,
            "rewardRank": 1,
            "images": [],
            "videos": []
        },
        {
            "id": 180919,
            "name": "150 off on handbags and wallets",
            "description": "150 off on handbags and wallets",
            "imageId": "04bbabf2-ce9d-48b3-9a58-347479b8ea88",
            "imageUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/969c2707-e082-4cc5-bbad-48f6ae1.jpeg",
            "thumbnailId": "d287af72-80bd-40c8-98c3-68a28eb3cf66",
            "thumbnailUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/3a8f00ea-bb30-4eeb-9175-663afbb.jpeg",
            "termAndConditionsId": "36797a3b-7726-4d75-ad8b-aa1dc0bd7874",
            "termAndConditionsUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/5f259983-5671-453e-af25-c9d1293.html",
            "tier": null,
            "label": null,
            "priority": 1,
            "intouchPoints": 500,
            "group": "Lifestyle",
            "startTime": "2024-08-24 12:54:00",
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
            "customFields": {
                "CF210": "value"
            },
            "loyaltyProgramCriteria": [],
            "groups": [],
            "rewardRestrictions": {
                "isValid": true,
                "customerLevel": [
                    {
                        "id": 7842,
                        "isValid": true,
                        "repeatFrequencyType": "DAYS",
                        "limit": 10,
                        "interval": 30,
                        "kpi": "QUANTITY"
                    },
                    {
                        "id": 7843,
                        "isValid": true,
                        "repeatFrequencyType": "MONTHS",
                        "limit": 50,
                        "interval": 12,
                        "kpi": "QUANTITY"
                    }
                ],
                "rewardLevel": [
                    {
                        "id": 7841,
                        "isValid": true,
                        "consumed": 0,
                        "repeatFrequencyType": "NO_LIMIT",
                        "limit": 10000,
                        "kpi": "QUANTITY"
                    }
                ]
            },
            "groupName": "Exclusive Rewards",
            "groupRank": 4,
            "rewardRank": 1,
            "images": [],
            "videos": []
        },
        {
            "id": 154453,
            "name": "30% Off on new arrivals",
            "description": "30% Off on new arrivals",
            "imageId": "f1762216-b76d-4b83-aeda-4226eba6c619",
            "imageUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/bf3d58fc-b335-4f84-9838-389d54fb.jpg",
            "thumbnailId": "53b0187f-7e7e-4361-9e6f-1ee92d794d38",
            "thumbnailUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/6b2f205a-e49b-425a-aa55-2b04d798.jpg",
            "termAndConditionsId": "e1a19c65-1d91-4776-a008-2467e283a5c0",
            "termAndConditionsUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/169c2024-b8fa-422b-a3cc-6140ce2.html",
            "tier": null,
            "label": null,
            "priority": 1,
            "intouchPoints": 100,
            "group": "Lifestyle",
            "startTime": "2024-04-17 12:54:00",
            "endTime": "2030-10-31 11:59:30",
            "expired": false,
            "started": true,
            "programId": null,
            "categoryList": [
                {
                    "id": 20,
                    "name": "groceries",
                    "enabled": true
                }
            ],
            "customFields": {
                "CF210": "value"
            },
            "loyaltyProgramCriteria": [],
            "groups": [],
            "rewardRestrictions": {
                "isValid": true
            },
            "groupName": "Exclusive Rewards",
            "groupRank": 4,
            "rewardRank": 1,
            "images": [],
            "videos": []
        },
        {
            "id": 154452,
            "name": "20% off on women's wear",
            "description": "20% off on women's wear",
            "imageId": "ea3da7eb-8d75-49e4-b64d-8350c2441c2f",
            "imageUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/1754205d-d383-4b5a-aa29-9697f2b.jpeg",
            "thumbnailId": "cfcfa412-a488-4188-a898-0199fd460890",
            "thumbnailUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/862bd2c0-2b3e-4d6d-b111-cb90ee2.jpeg",
            "termAndConditionsId": "bfc93e07-eda5-4744-9085-a047ca6b9461",
            "termAndConditionsUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/d53853cb-57f0-47c4-8d6f-00707d9.html",
            "tier": null,
            "label": null,
            "priority": 1,
            "intouchPoints": 500,
            "group": "Lifestyle",
            "startTime": "2024-04-17 12:54:00",
            "endTime": "2030-10-31 11:59:30",
            "expired": false,
            "started": true,
            "programId": null,
            "categoryList": [
                {
                    "id": 20,
                    "name": "groceries",
                    "enabled": true
                }
            ],
            "customFields": {
                "CF210": "value"
            },
            "loyaltyProgramCriteria": [],
            "groups": [],
            "rewardRestrictions": {
                "isValid": true
            },
            "groupName": "Exclusive Rewards",
            "groupRank": 4,
            "rewardRank": 1,
            "images": [],
            "videos": []
        },
        {
            "id": 154451,
            "name": "10% off on Hotels & Resorts ",
            "description": "Lotte Hotels & Resorts Points may be used for rooms, food and beverages at LOTTE HOTELS & RESORTS and Evian SPA in SIGNIEL SEOUL from at least 1,000 points (USD 10).",
            "imageId": "d7ecad3e-4360-401d-a51b-20938eb3e8dd",
            "imageUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/8d4079fd-271d-4bab-9652-bac13ca8.png",
            "thumbnailId": "4895fa62-6cd6-4b17-970a-f1fbe126392c",
            "thumbnailUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/228535ab-6ad2-44e7-b9ed-5f73406d.png",
            "termAndConditionsId": "81a702b8-107f-4e53-bec2-223c456c15cb",
            "termAndConditionsUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/bce566f7-54c1-4c15-bef0-d7e292e.html",
            "tier": null,
            "label": null,
            "priority": 1,
            "intouchPoints": 1500,
            "group": "Airline",
            "startTime": "2024-04-17 12:54:00",
            "endTime": "2030-10-31 11:59:30",
            "expired": false,
            "started": true,
            "programId": null,
            "categoryList": [
                {
                    "id": 20,
                    "name": "groceries",
                    "enabled": true
                }
            ],
            "customFields": {
                "CF210": "value"
            },
            "loyaltyProgramCriteria": [],
            "groups": [],
            "rewardRestrictions": {
                "isValid": true
            },
            "groupName": "Exclusive Rewards",
            "groupRank": 4,
            "rewardRank": 1,
            "images": [],
            "videos": []
        },
        {
            "id": 154445,
            "name": "1500 off on handbags and wallets",
            "description": "1500 off on handbags and wallets",
            "imageId": "04bbabf2-ce9d-48b3-9a58-347479b8ea88",
            "imageUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/969c2707-e082-4cc5-bbad-48f6ae1.jpeg",
            "thumbnailId": "d287af72-80bd-40c8-98c3-68a28eb3cf66",
            "thumbnailUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/3a8f00ea-bb30-4eeb-9175-663afbb.jpeg",
            "termAndConditionsId": "36797a3b-7726-4d75-ad8b-aa1dc0bd7874",
            "termAndConditionsUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/5f259983-5671-453e-af25-c9d1293.html",
            "tier": null,
            "label": null,
            "priority": 1,
            "intouchPoints": 500,
            "group": "Lifestyle",
            "startTime": "2024-04-17 12:54:00",
            "endTime": "2030-10-31 11:59:30",
            "expired": false,
            "started": true,
            "programId": null,
            "categoryList": [
                {
                    "id": 20,
                    "name": "groceries",
                    "enabled": true
                }
            ],
            "customFields": {
                "CF210": "value"
            },
            "loyaltyProgramCriteria": [],
            "groups": [],
            "rewardRestrictions": {
                "isValid": true
            },
            "groupName": "Exclusive Rewards",
            "groupRank": 4,
            "rewardRank": 1,
            "images": [],
            "videos": [],
            "paymentConfigs": [
                {
                    "paymentMode": "POINTS_CASH",
                    "id": 39,
                    "cash": 5.0000,
                    "points": 200.0000
                }
            ]
        },
        {
            "id": 154446,
            "name": "20% off on Vitamins",
            "description": "Burn 1000 points and get a 20% off on Vitamins coupon",
            "imageId": "8485055f-5d49-48ed-8b32-92b870d9e46c",
            "imageUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/e039015e-a4b9-49ba-bf5f-aafdd5a.jpeg",
            "thumbnailId": "b07afb85-b531-46f2-a3d0-e71b6c178a2d",
            "thumbnailUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/71441127-956e-449e-b198-a8a688b.jpeg",
            "termAndConditionsId": "9b72745a-a82c-4fb0-904f-5df6c11bb3cb",
            "termAndConditionsUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/4f743292-4861-45bd-9983-7700d2a.html",
            "tier": null,
            "label": null,
            "priority": 1,
            "intouchPoints": 1000,
            "group": "Health",
            "startTime": "2024-04-17 12:54:00",
            "endTime": "2030-10-31 11:59:30",
            "expired": false,
            "started": true,
            "programId": null,
            "categoryList": [
                {
                    "id": 20,
                    "name": "groceries",
                    "enabled": true
                }
            ],
            "customFields": {
                "CF210": "value"
            },
            "loyaltyProgramCriteria": [],
            "groups": [],
            "rewardRestrictions": {
                "isValid": true
            },
            "groupName": "Most Preferred Rewards",
            "groupRank": 3,
            "rewardRank": 2,
            "images": [],
            "videos": []
        },
        {
            "id": 154442,
            "name": "Free stay for 1 night",
            "description": "Free stay for 1 night",
            "imageId": "7a979faf-afdb-488f-ba8e-e401d38b51e1",
            "imageUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/7ea3569c-92e1-4d1f-8f42-64bce80f.jpg",
            "thumbnailId": "69259784-89d5-4f6e-b67d-8643dcb22a4b",
            "thumbnailUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/103ca0ec-e32c-482e-bbe1-15a964a9.jpg",
            "termAndConditionsId": "80e1e36b-6ed3-4b61-ab5c-222308b533b9",
            "termAndConditionsUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/9ad186ca-e7d3-41f1-83f4-64378d6.html",
            "tier": null,
            "label": null,
            "priority": 1,
            "intouchPoints": 10000,
            "group": "Airline",
            "startTime": "2024-04-17 12:54:00",
            "endTime": "2030-10-31 11:59:30",
            "expired": false,
            "started": true,
            "programId": null,
            "categoryList": [
                {
                    "id": 20,
                    "name": "groceries",
                    "enabled": true
                }
            ],
            "customFields": {
                "CF210": "value"
            },
            "loyaltyProgramCriteria": [],
            "groups": [],
            "rewardRestrictions": {
                "isValid": true,
                "customerLevel": [
                    {
                        "id": 6777,
                        "isValid": true,
                        "repeatFrequencyType": "NO_LIMIT",
                        "limit": 100,
                        "kpi": "QUANTITY"
                    }
                ],
                "rewardLevel": [
                    {
                        "id": 6776,
                        "isValid": true,
                        "consumed": 8,
                        "repeatFrequencyType": "NO_LIMIT",
                        "limit": 100000,
                        "kpi": "QUANTITY"
                    }
                ]
            },
            "groupName": "Recommended Rewards",
            "groupRank": 2,
            "rewardRank": 2,
            "images": [
                {
                    "name": "imagename1",
                    "id": "7a979faf-afdb-488f-ba8e-e401d38b51e1",
                    "url": "https://eucrm-solutions.s3.amazonaws.com/rewards/7ea3569c-92e1-4d1f-8f42-64bce80f.jpg"
                }
            ],
            "videos": [
                {
                    "name": "videoname1",
                    "id": null,
                    "url": "https://www.youtube.com/watch?v=4K6Sh1tsAW4",
                    "isExternal": true
                }
            ],
            "paymentConfigs": [
                {
                    "paymentMode": "POINTS_CASH",
                    "id": 56,
                    "cash": 20.0000,
                    "points": 5000.0000
                }
            ]
        },
        {
            "id": 154443,
            "name": "Flat 100 off on protein powder",
            "description": "Burn 100 points and get a Flat 100 off on protein powder coupon",
            "imageId": "0f1aee40-3e4d-474d-8070-546eb2ac777e",
            "imageUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/5bea603b-6ff2-4e00-88fb-8610012b.jpg",
            "thumbnailId": "2f6fc242-58c1-4a41-9e2f-66bc9acac52e",
            "thumbnailUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/ae890c7e-9c8f-47d9-b5e2-1c62265e.jpg",
            "termAndConditionsId": "9303b31a-6042-475e-bb46-3129bc22baa1",
            "termAndConditionsUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/b7bb1e12-8b1e-4089-888d-3f13723.html",
            "tier": null,
            "label": null,
            "priority": 1,
            "intouchPoints": 100,
            "group": "Health",
            "startTime": "2024-04-17 12:54:00",
            "endTime": "2030-10-31 11:59:30",
            "expired": false,
            "started": true,
            "programId": null,
            "categoryList": [
                {
                    "id": 20,
                    "name": "groceries",
                    "enabled": true
                }
            ],
            "customFields": {
                "CF210": "value"
            },
            "loyaltyProgramCriteria": [],
            "groups": [],
            "rewardRestrictions": {
                "isValid": true
            },
            "groupName": "Recommended Rewards",
            "groupRank": 2,
            "rewardRank": 3,
            "images": [],
            "videos": []
        },
        {
            "id": 154456,
            "name": "50% off on Dining",
            "description": "10% off on Food & Beverage",
            "imageId": "33eee3fd-e19f-420f-b03b-bc1b3edd3a0a",
            "imageUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/3a061fe6-abef-4787-9fad-0e729f60.jpg",
            "thumbnailId": "f17cd19c-e3fb-4592-a6e8-0152de6dc2be",
            "thumbnailUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/f00b6ddf-faff-436f-bcf2-8d38ed85.jpg",
            "termAndConditionsId": "",
            "termAndConditionsUrl": null,
            "tier": null,
            "label": null,
            "priority": 1,
            "intouchPoints": 500,
            "group": "Airline",
            "startTime": "2024-04-17 12:54:00",
            "endTime": "2030-10-31 11:59:30",
            "expired": false,
            "started": true,
            "programId": null,
            "categoryList": [
                {
                    "id": 20,
                    "name": "groceries",
                    "enabled": true
                }
            ],
            "customFields": {
                "CF210": "value"
            },
            "loyaltyProgramCriteria": [],
            "groups": [],
            "rewardRestrictions": {
                "isValid": true
            },
            "groupName": "Exclusive Rewards",
            "groupRank": 4,
            "rewardRank": 4,
            "images": [],
            "videos": [],
            "paymentConfigs": [
                {
                    "paymentMode": "CASH",
                    "id": 20,
                    "cash": 100.0000
                }
            ]
        },
        {
            "id": 154455,
            "name": "Lifestyle Rewards - Headphones",
            "description": "Lifestyle Rewards - Headphones",
            "imageId": "be1ccd13-5dca-4609-b60b-235aa0bf2745",
            "imageUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/4ada9b0d-fa76-440f-83e5-f318a665.png",
            "thumbnailId": "474d5560-acc7-44d2-87b9-c0a2336f1b9c",
            "thumbnailUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/089de793-9143-4930-b4fd-20b52985.png",
            "termAndConditionsId": "c2349d32-aed2-4397-abc7-29f594d05e8e",
            "termAndConditionsUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/d2ee06e6-1e73-48f1-b27f-e7fcd2d.html",
            "tier": null,
            "label": null,
            "priority": 1,
            "intouchPoints": 500,
            "group": "Lifestyle",
            "startTime": "2024-04-17 12:54:00",
            "endTime": "2030-10-31 11:59:30",
            "expired": false,
            "started": true,
            "programId": null,
            "categoryList": [
                {
                    "id": 20,
                    "name": "groceries",
                    "enabled": true
                }
            ],
            "customFields": {
                "CF210": "value"
            },
            "loyaltyProgramCriteria": [],
            "groups": [],
            "rewardRestrictions": {
                "isValid": true
            },
            "groupName": "Exclusive Rewards",
            "groupRank": 4,
            "rewardRank": 4,
            "images": [],
            "videos": [],
            "paymentConfigs": [
                {
                    "paymentMode": "CASH",
                    "id": 14,
                    "cash": 100.0000
                }
            ]
        },
        {
            "id": 154449,
            "name": "Free shipping on purchases above Rs.1000",
            "description": "Enjoy the convenience of free shipping on all your purchases above Rs.1000. ",
            "imageId": "5545371e-9cbb-4871-bc57-dca9312b498d",
            "imageUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/a90bf8a8-9a19-4b63-8123-d5aa252.jpeg",
            "thumbnailId": "6df57645-f630-44b1-bf51-2aa480e2d0f0",
            "thumbnailUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/e05b344d-53d0-4915-92b7-f466061.jpeg",
            "termAndConditionsId": "f6c0b697-f076-4f95-8ae5-df93915b3f14",
            "termAndConditionsUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/2a28833d-df1a-424d-ac63-a6ba818.html",
            "tier": null,
            "label": null,
            "priority": 1,
            "intouchPoints": 0,
            "group": "Free Shipping",
            "startTime": "2024-04-17 12:54:00",
            "endTime": "2030-10-31 11:59:30",
            "expired": false,
            "started": true,
            "programId": null,
            "categoryList": [
                {
                    "id": 20,
                    "name": "groceries",
                    "enabled": true
                }
            ],
            "customFields": {
                "CF210": "value"
            },
            "loyaltyProgramCriteria": [],
            "groups": [],
            "rewardRestrictions": {
                "isValid": true
            },
            "groupName": "Most Preferred Rewards",
            "groupRank": 3,
            "rewardRank": 4,
            "images": [],
            "videos": [],
            "paymentConfigs": [
                {
                    "paymentMode": "FREE",
                    "id": 8
                }
            ]
        },
        {
            "id": 154448,
            "name": "10% off on next flight booking with Riyadh Airlines",
            "description": "Redeem existing Reward Points on travel booking. Redeem 10,000 points and get 10% OFF on your next flight booking ",
            "imageId": "03af4803-4dd1-4c24-bae3-c9f3d3741d8a",
            "imageUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/d5580fcf-92de-4688-bf60-e7c348cf.jpg",
            "thumbnailId": "f9302075-bcb8-4fd9-8321-e44701a921bd",
            "thumbnailUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/cfd864c6-0aff-42ed-bae2-677e6925.jpg",
            "termAndConditionsId": "fc547920-2038-4ed5-818e-51a5ad21b6b3",
            "termAndConditionsUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/190b8497-1534-4621-bebf-47dd487.html",
            "tier": null,
            "label": null,
            "priority": 1,
            "intouchPoints": 1000,
            "group": "Airline",
            "startTime": "2024-04-17 12:54:00",
            "endTime": "2030-10-31 11:59:30",
            "expired": false,
            "started": true,
            "programId": null,
            "categoryList": [
                {
                    "id": 20,
                    "name": "groceries",
                    "enabled": true
                }
            ],
            "customFields": {
                "CF210": "value"
            },
            "loyaltyProgramCriteria": [],
            "groups": [],
            "rewardRestrictions": {
                "isValid": true
            },
            "groupName": "Most Preferred Rewards",
            "groupRank": 3,
            "rewardRank": 4,
            "images": [],
            "videos": []
        },
        {
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
            "started": true,
            "programId": null,
            "categoryList": [
                {
                    "id": 20,
                    "name": "groceries",
                    "enabled": true
                }
            ],
            "customFields": {
                "CF210": "value"
            },
            "loyaltyProgramCriteria": [],
            "groups": [],
            "rewardRestrictions": {
                "isValid": true
            },
            "groupName": "Recommended Rewards",
            "groupRank": 2,
            "rewardRank": 4,
            "images": [],
            "videos": []
        },
        {
            "id": 215710,
            "name": "150 off on handbags and wallets",
            "description": "150 off on handbags and wallets",
            "imageId": "04bbabf2-ce9d-48b3-9a58-347479b8ea88",
            "imageUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/969c2707-e082-4cc5-bbad-48f6ae1.jpeg",
            "thumbnailId": "04bbabf2-ce9d-48b3-9a58-347479b8ea88",
            "thumbnailUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/969c2707-e082-4cc5-bbad-48f6ae1.jpeg",
            "termAndConditionsId": "36797a3b-7726-4d75-ad8b-aa1dc0bd7874",
            "termAndConditionsUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/5f259983-5671-453e-af25-c9d1293.html",
            "tier": null,
            "label": null,
            "priority": 1,
            "intouchPoints": 10,
            "group": null,
            "startTime": "2025-07-30 11:53:00",
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
            "customFields": {
                "CF210": "value"
            },
            "loyaltyProgramCriteria": [],
            "groups": [],
            "rewardRestrictions": {
                "isValid": true,
                "rewardLevel": [
                    {
                        "id": 13062,
                        "isValid": true,
                        "consumed": 0,
                        "repeatFrequencyType": "NO_LIMIT",
                        "limit": 2,
                        "kpi": "QUANTITY"
                    }
                ]
            },
            "groupName": "Exclusive Rewards",
            "groupRank": 4,
            "rewardRank": null,
            "images": [
                {
                    "name": "imagename1",
                    "id": "04bbabf2-ce9d-48b3-9a58-347479b8ea88",
                    "url": "https://eucrm-solutions.s3.amazonaws.com/rewards/969c2707-e082-4cc5-bbad-48f6ae1.jpeg"
                }
            ],
            "videos": [
                {
                    "name": "videoname1",
                    "id": null,
                    "url": "https://www.youtube.com/watch?v=JlxgrLH6hu4",
                    "isExternal": true
                }
            ]
        },
        {
            "id": 215709,
            "name": "150 off on handbags and wallets",
            "description": "150 off on handbags and wallets",
            "imageId": "04bbabf2-ce9d-48b3-9a58-347479b8ea88",
            "imageUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/969c2707-e082-4cc5-bbad-48f6ae1.jpeg",
            "thumbnailId": "04bbabf2-ce9d-48b3-9a58-347479b8ea88",
            "thumbnailUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/969c2707-e082-4cc5-bbad-48f6ae1.jpeg",
            "termAndConditionsId": "36797a3b-7726-4d75-ad8b-aa1dc0bd7874",
            "termAndConditionsUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/5f259983-5671-453e-af25-c9d1293.html",
            "tier": null,
            "label": null,
            "priority": 1,
            "intouchPoints": 10,
            "group": null,
            "startTime": "2025-07-30 11:53:00",
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
            "customFields": {
                "CF210": "value"
            },
            "loyaltyProgramCriteria": [],
            "groups": [],
            "rewardRestrictions": {
                "isValid": true,
                "rewardLevel": [
                    {
                        "id": 13061,
                        "isValid": true,
                        "consumed": 0,
                        "repeatFrequencyType": "NO_LIMIT",
                        "limit": 2,
                        "kpi": "QUANTITY"
                    }
                ]
            },
            "groupName": "Exclusive Rewards",
            "groupRank": 4,
            "rewardRank": null,
            "images": [
                {
                    "name": "imagename1",
                    "id": "04bbabf2-ce9d-48b3-9a58-347479b8ea88",
                    "url": "https://eucrm-solutions.s3.amazonaws.com/rewards/969c2707-e082-4cc5-bbad-48f6ae1.jpeg"
                }
            ],
            "videos": [
                {
                    "name": "videoname1",
                    "id": null,
                    "url": "https://www.youtube.com/watch?v=JlxgrLH6hu4",
                    "isExternal": true
                }
            ],
            "paymentConfigs": [
                {
                    "paymentMode": "POINTS_CASH",
                    "id": 410,
                    "cash": 500.0000,
                    "points": 200.0000
                },
                {
                    "paymentMode": "POINTS",
                    "id": 411,
                    "points": 150.0000
                },
                {
                    "paymentMode": "CASH",
                    "id": 412,
                    "cash": 500.0000
                }
            ]
        },
        {
            "id": 215708,
            "name": "150 off on handbags and wallets",
            "description": "150 off on handbags and wallets",
            "imageId": "04bbabf2-ce9d-48b3-9a58-347479b8ea88",
            "imageUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/969c2707-e082-4cc5-bbad-48f6ae1.jpeg",
            "thumbnailId": "04bbabf2-ce9d-48b3-9a58-347479b8ea88",
            "thumbnailUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/969c2707-e082-4cc5-bbad-48f6ae1.jpeg",
            "termAndConditionsId": "36797a3b-7726-4d75-ad8b-aa1dc0bd7874",
            "termAndConditionsUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/5f259983-5671-453e-af25-c9d1293.html",
            "tier": null,
            "label": null,
            "priority": 1,
            "intouchPoints": 10,
            "group": null,
            "startTime": "2025-07-30 11:53:00",
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
            "customFields": {
                "CF210": "value"
            },
            "loyaltyProgramCriteria": [],
            "groups": [],
            "rewardRestrictions": {
                "isValid": true,
                "rewardLevel": [
                    {
                        "id": 13060,
                        "isValid": true,
                        "consumed": 0,
                        "repeatFrequencyType": "NO_LIMIT",
                        "limit": 2,
                        "kpi": "QUANTITY"
                    }
                ]
            },
            "groupName": "Exclusive Rewards",
            "groupRank": 4,
            "rewardRank": null,
            "images": [
                {
                    "name": "imagename1",
                    "id": "04bbabf2-ce9d-48b3-9a58-347479b8ea88",
                    "url": "https://eucrm-solutions.s3.amazonaws.com/rewards/969c2707-e082-4cc5-bbad-48f6ae1.jpeg"
                }
            ],
            "videos": [
                {
                    "name": "videoname1",
                    "id": null,
                    "url": "https://www.youtube.com/watch?v=JlxgrLH6hu4",
                    "isExternal": true
                }
            ],
            "paymentConfigs": [
                {
                    "paymentMode": "POINTS",
                    "id": 404,
                    "points": 10.0000
                }
            ]
        },
        {
            "id": 208833,
            "name": "150 off on handbags and wallets",
            "description": "150 off on handbags and wallets",
            "imageId": "04bbabf2-ce9d-48b3-9a58-347479b8ea88",
            "imageUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/969c2707-e082-4cc5-bbad-48f6ae1.jpeg",
            "thumbnailId": "04bbabf2-ce9d-48b3-9a58-347479b8ea88",
            "thumbnailUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/969c2707-e082-4cc5-bbad-48f6ae1.jpeg",
            "termAndConditionsId": "36797a3b-7726-4d75-ad8b-aa1dc0bd7874",
            "termAndConditionsUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/5f259983-5671-453e-af25-c9d1293.html",
            "tier": null,
            "label": null,
            "priority": 1,
            "intouchPoints": 10,
            "group": null,
            "startTime": "2024-07-30 11:53:00",
            "endTime": "2030-10-31 11:59:30",
            "expired": false,
            "started": true,
            "programId": null,
            "categoryList": [
                {
                    "id": 20,
                    "name": "groceries",
                    "enabled": true
                }
            ],
            "customFields": {
                "CF210": "value"
            },
            "loyaltyProgramCriteria": [],
            "groups": [],
            "rewardRestrictions": {
                "isValid": false,
                "rewardLevel": [
                    {
                        "id": 12080,
                        "isValid": false,
                        "consumed": 2,
                        "repeatFrequencyType": "NO_LIMIT",
                        "limit": 2,
                        "kpi": "QUANTITY"
                    }
                ]
            },
            "groupName": "Exclusive Rewards",
            "groupRank": 4,
            "rewardRank": null,
            "images": [
                {
                    "name": "imagename1",
                    "id": "04bbabf2-ce9d-48b3-9a58-347479b8ea88",
                    "url": "https://eucrm-solutions.s3.amazonaws.com/rewards/969c2707-e082-4cc5-bbad-48f6ae1.jpeg"
                }
            ],
            "videos": [
                {
                    "name": "videoname1",
                    "id": null,
                    "url": "https://www.youtube.com/watch?v=JlxgrLH6hu4",
                    "isExternal": true
                }
            ]
        },
        {
            "id": 208832,
            "name": "150 off on handbags and wallets",
            "description": "150 off on handbags and wallets",
            "imageId": "04bbabf2-ce9d-48b3-9a58-347479b8ea88",
            "imageUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/969c2707-e082-4cc5-bbad-48f6ae1.jpeg",
            "thumbnailId": "04bbabf2-ce9d-48b3-9a58-347479b8ea88",
            "thumbnailUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/969c2707-e082-4cc5-bbad-48f6ae1.jpeg",
            "termAndConditionsId": "36797a3b-7726-4d75-ad8b-aa1dc0bd7874",
            "termAndConditionsUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/5f259983-5671-453e-af25-c9d1293.html",
            "tier": null,
            "label": null,
            "priority": 1,
            "intouchPoints": 10,
            "group": null,
            "startTime": "2024-07-30 11:52:00",
            "endTime": "2030-10-31 11:59:30",
            "expired": false,
            "started": true,
            "programId": null,
            "categoryList": [
                {
                    "id": 20,
                    "name": "groceries",
                    "enabled": true
                }
            ],
            "customFields": {
                "CF210": "value"
            },
            "loyaltyProgramCriteria": [],
            "groups": [],
            "rewardRestrictions": {
                "isValid": false,
                "rewardLevel": [
                    {
                        "id": 12079,
                        "isValid": false,
                        "consumed": 0,
                        "repeatFrequencyType": "NO_LIMIT",
                        "limit": 0,
                        "kpi": "QUANTITY"
                    }
                ]
            },
            "groupName": "Exclusive Rewards",
            "groupRank": 4,
            "rewardRank": null,
            "images": [
                {
                    "name": "imagename1",
                    "id": "04bbabf2-ce9d-48b3-9a58-347479b8ea88",
                    "url": "https://eucrm-solutions.s3.amazonaws.com/rewards/969c2707-e082-4cc5-bbad-48f6ae1.jpeg"
                }
            ],
            "videos": [
                {
                    "name": "videoname1",
                    "id": null,
                    "url": "https://www.youtube.com/watch?v=JlxgrLH6hu4",
                    "isExternal": true
                }
            ]
        },
        {
            "id": 202637,
            "name": "150 off on handbags and wallets",
            "description": "150 off on handbags and wallets",
            "imageId": "04bbabf2-ce9d-48b3-9a58-347479b8ea88",
            "imageUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/969c2707-e082-4cc5-bbad-48f6ae1.jpeg",
            "thumbnailId": "04bbabf2-ce9d-48b3-9a58-347479b8ea88",
            "thumbnailUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/969c2707-e082-4cc5-bbad-48f6ae1.jpeg",
            "termAndConditionsId": "36797a3b-7726-4d75-ad8b-aa1dc0bd7874",
            "termAndConditionsUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/5f259983-5671-453e-af25-c9d1293.html",
            "tier": null,
            "label": null,
            "priority": 1,
            "intouchPoints": 0,
            "group": null,
            "startTime": "2024-08-30 12:54:00",
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
            "customFields": {
                "CF210": "value"
            },
            "loyaltyProgramCriteria": [],
            "groups": [],
            "rewardRestrictions": {
                "isValid": true,
                "customerLevel": [
                    {
                        "id": 11179,
                        "isValid": true,
                        "repeatFrequencyType": "DAYS",
                        "limit": 10,
                        "interval": 30,
                        "kpi": "QUANTITY"
                    },
                    {
                        "id": 11180,
                        "isValid": true,
                        "repeatFrequencyType": "NO_LIMIT",
                        "limit": 1000,
                        "kpi": "QUANTITY"
                    }
                ],
                "rewardLevel": [
                    {
                        "id": 11177,
                        "isValid": true,
                        "consumed": 0,
                        "repeatFrequencyType": "DAYS",
                        "limit": 10000,
                        "interval": 30,
                        "kpi": "QUANTITY"
                    },
                    {
                        "id": 11178,
                        "isValid": true,
                        "consumed": 0,
                        "repeatFrequencyType": "NO_LIMIT",
                        "limit": 100000000,
                        "kpi": "QUANTITY"
                    }
                ]
            },
            "groupName": null,
            "groupRank": null,
            "rewardRank": null,
            "images": [
                {
                    "name": "imagename1",
                    "id": "04bbabf2-ce9d-48b3-9a58-347479b8ea88",
                    "url": "https://eucrm-solutions.s3.amazonaws.com/rewards/969c2707-e082-4cc5-bbad-48f6ae1.jpeg"
                }
            ],
            "videos": [
                {
                    "name": "videoname1",
                    "id": null,
                    "url": "https://www.youtube.com/watch?v=JlxgrLH6hu4",
                    "isExternal": true
                }
            ],
            "paymentConfigs": [
                {
                    "paymentMode": "POINTS",
                    "id": 307,
                    "points": 100.0000
                }
            ]
        },
        {
            "id": 202424,
            "name": "150 off on handbags and wallets",
            "description": "150 off on handbags and wallets",
            "imageId": "04bbabf2-ce9d-48b3-9a58-347479b8ea88",
            "imageUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/969c2707-e082-4cc5-bbad-48f6ae1.jpeg",
            "thumbnailId": "04bbabf2-ce9d-48b3-9a58-347479b8ea88",
            "thumbnailUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/969c2707-e082-4cc5-bbad-48f6ae1.jpeg",
            "termAndConditionsId": "36797a3b-7726-4d75-ad8b-aa1dc0bd7874",
            "termAndConditionsUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/5f259983-5671-453e-af25-c9d1293.html",
            "tier": null,
            "label": null,
            "priority": 1,
            "intouchPoints": 10,
            "group": null,
            "startTime": "2024-07-18 10:02:00",
            "endTime": "2030-10-31 11:59:30",
            "expired": false,
            "started": true,
            "programId": null,
            "categoryList": [
                {
                    "id": 20,
                    "name": "groceries",
                    "enabled": true
                }
            ],
            "customFields": {
                "CF210": "value"
            },
            "loyaltyProgramCriteria": [],
            "groups": [],
            "rewardRestrictions": {
                "isValid": true,
                "customerLevel": [
                    {
                        "id": 11142,
                        "isValid": true,
                        "repeatFrequencyType": "DAYS",
                        "limit": 10,
                        "interval": 30,
                        "kpi": "QUANTITY"
                    },
                    {
                        "id": 11143,
                        "isValid": true,
                        "repeatFrequencyType": "NO_LIMIT",
                        "limit": 1000,
                        "kpi": "QUANTITY"
                    }
                ],
                "rewardLevel": [
                    {
                        "id": 11140,
                        "isValid": true,
                        "consumed": 0,
                        "repeatFrequencyType": "DAYS",
                        "limit": 10000,
                        "interval": 30,
                        "kpi": "QUANTITY"
                    },
                    {
                        "id": 11141,
                        "isValid": true,
                        "consumed": 0,
                        "repeatFrequencyType": "NO_LIMIT",
                        "limit": 100000000,
                        "kpi": "QUANTITY"
                    }
                ]
            },
            "groupName": null,
            "groupRank": null,
            "rewardRank": null,
            "images": [
                {
                    "name": "imagename1",
                    "id": "04bbabf2-ce9d-48b3-9a58-347479b8ea88",
                    "url": "https://eucrm-solutions.s3.amazonaws.com/rewards/969c2707-e082-4cc5-bbad-48f6ae1.jpeg"
                }
            ],
            "videos": [
                {
                    "name": "videoname1",
                    "id": null,
                    "url": "https://www.youtube.com/watch?v=JlxgrLH6hu4",
                    "isExternal": true
                }
            ]
        },
        {
            "id": 202400,
            "name": "150 off on handbags and wallets",
            "description": "150 off on handbags and wallets",
            "imageId": "04bbabf2-ce9d-48b3-9a58-347479b8ea88",
            "imageUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/969c2707-e082-4cc5-bbad-48f6ae1.jpeg",
            "thumbnailId": "04bbabf2-ce9d-48b3-9a58-347479b8ea88",
            "thumbnailUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/969c2707-e082-4cc5-bbad-48f6ae1.jpeg",
            "termAndConditionsId": "36797a3b-7726-4d75-ad8b-aa1dc0bd7874",
            "termAndConditionsUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/5f259983-5671-453e-af25-c9d1293.html",
            "tier": null,
            "label": null,
            "priority": 1,
            "intouchPoints": 10,
            "group": null,
            "startTime": "2024-07-18 10:02:00",
            "endTime": "2030-10-31 11:59:30",
            "expired": false,
            "started": true,
            "programId": null,
            "categoryList": [
                {
                    "id": 20,
                    "name": "groceries",
                    "enabled": true
                }
            ],
            "customFields": {
                "CF210": "value"
            },
            "loyaltyProgramCriteria": [],
            "groups": [],
            "rewardRestrictions": {
                "isValid": true,
                "customerLevel": [
                    {
                        "id": 11135,
                        "isValid": true,
                        "repeatFrequencyType": "DAYS",
                        "limit": 10,
                        "interval": 30,
                        "kpi": "QUANTITY"
                    },
                    {
                        "id": 11136,
                        "isValid": true,
                        "repeatFrequencyType": "NO_LIMIT",
                        "limit": 1000,
                        "kpi": "QUANTITY"
                    }
                ],
                "rewardLevel": [
                    {
                        "id": 11133,
                        "isValid": true,
                        "consumed": 0,
                        "repeatFrequencyType": "DAYS",
                        "limit": 10000,
                        "interval": 30,
                        "kpi": "QUANTITY"
                    },
                    {
                        "id": 11134,
                        "isValid": true,
                        "consumed": 0,
                        "repeatFrequencyType": "NO_LIMIT",
                        "limit": 100000000,
                        "kpi": "QUANTITY"
                    }
                ]
            },
            "groupName": null,
            "groupRank": null,
            "rewardRank": null,
            "images": [
                {
                    "name": "imagename1",
                    "id": "04bbabf2-ce9d-48b3-9a58-347479b8ea88",
                    "url": "https://eucrm-solutions.s3.amazonaws.com/rewards/969c2707-e082-4cc5-bbad-48f6ae1.jpeg"
                }
            ],
            "videos": [
                {
                    "name": "videoname1",
                    "id": null,
                    "url": "https://www.youtube.com/watch?v=JlxgrLH6hu4",
                    "isExternal": true
                }
            ]
        },
        {
            "id": 202370,
            "name": "150 off on handbags and wallets",
            "description": "150 off on handbags and wallets",
            "imageId": "04bbabf2-ce9d-48b3-9a58-347479b8ea88",
            "imageUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/969c2707-e082-4cc5-bbad-48f6ae1.jpeg",
            "thumbnailId": "04bbabf2-ce9d-48b3-9a58-347479b8ea88",
            "thumbnailUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/969c2707-e082-4cc5-bbad-48f6ae1.jpeg",
            "termAndConditionsId": "36797a3b-7726-4d75-ad8b-aa1dc0bd7874",
            "termAndConditionsUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/5f259983-5671-453e-af25-c9d1293.html",
            "tier": null,
            "label": null,
            "priority": 1,
            "intouchPoints": 10,
            "group": null,
            "startTime": "2024-07-18 10:02:00",
            "endTime": "2030-10-31 11:59:30",
            "expired": false,
            "started": true,
            "programId": null,
            "categoryList": [
                {
                    "id": 20,
                    "name": "groceries",
                    "enabled": true
                }
            ],
            "customFields": {
                "CF210": "value"
            },
            "loyaltyProgramCriteria": [],
            "groups": [],
            "rewardRestrictions": {
                "isValid": true,
                "customerLevel": [
                    {
                        "id": 11121,
                        "isValid": true,
                        "repeatFrequencyType": "DAYS",
                        "limit": 10,
                        "interval": 30,
                        "kpi": "QUANTITY"
                    },
                    {
                        "id": 11122,
                        "isValid": true,
                        "repeatFrequencyType": "NO_LIMIT",
                        "limit": 1000,
                        "kpi": "QUANTITY"
                    }
                ],
                "rewardLevel": [
                    {
                        "id": 11119,
                        "isValid": true,
                        "consumed": 0,
                        "repeatFrequencyType": "DAYS",
                        "limit": 10000,
                        "interval": 30,
                        "kpi": "QUANTITY"
                    },
                    {
                        "id": 11120,
                        "isValid": true,
                        "consumed": 0,
                        "repeatFrequencyType": "NO_LIMIT",
                        "limit": 100000000,
                        "kpi": "QUANTITY"
                    }
                ]
            },
            "groupName": null,
            "groupRank": null,
            "rewardRank": null,
            "images": [
                {
                    "name": "imagename1",
                    "id": "04bbabf2-ce9d-48b3-9a58-347479b8ea88",
                    "url": "https://eucrm-solutions.s3.amazonaws.com/rewards/969c2707-e082-4cc5-bbad-48f6ae1.jpeg"
                }
            ],
            "videos": [
                {
                    "name": "videoname1",
                    "id": null,
                    "url": "https://www.youtube.com/watch?v=JlxgrLH6hu4",
                    "isExternal": true
                }
            ]
        },
        {
            "id": 197824,
            "name": "150 off on handbags and wallets",
            "description": "150 off on handbags and wallets",
            "imageId": "04bbabf2-ce9d-48b3-9a58-347479b8ea88",
            "imageUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/969c2707-e082-4cc5-bbad-48f6ae1.jpeg",
            "thumbnailId": "d287af72-80bd-40c8-98c3-68a28eb3cf66",
            "thumbnailUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/3a8f00ea-bb30-4eeb-9175-663afbb.jpeg",
            "termAndConditionsId": "36797a3b-7726-4d75-ad8b-aa1dc0bd7874",
            "termAndConditionsUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/5f259983-5671-453e-af25-c9d1293.html",
            "tier": null,
            "label": null,
            "priority": 1,
            "intouchPoints": 500,
            "group": null,
            "startTime": "2024-09-30 12:54:00",
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
            "customFields": {
                "CF210": "value"
            },
            "loyaltyProgramCriteria": [],
            "groups": [],
            "rewardRestrictions": {
                "isValid": true,
                "customerLevel": [
                    {
                        "id": 10379,
                        "isValid": true,
                        "repeatFrequencyType": "DAYS",
                        "limit": 10,
                        "interval": 30,
                        "kpi": "QUANTITY"
                    },
                    {
                        "id": 10380,
                        "isValid": true,
                        "repeatFrequencyType": "NO_LIMIT",
                        "limit": 1000,
                        "kpi": "QUANTITY"
                    }
                ],
                "rewardLevel": [
                    {
                        "id": 10377,
                        "isValid": true,
                        "consumed": 0,
                        "repeatFrequencyType": "DAYS",
                        "limit": 10000,
                        "interval": 30,
                        "kpi": "QUANTITY"
                    },
                    {
                        "id": 10378,
                        "isValid": true,
                        "consumed": 0,
                        "repeatFrequencyType": "NO_LIMIT",
                        "limit": 100000000,
                        "kpi": "QUANTITY"
                    }
                ]
            },
            "groupName": null,
            "groupRank": null,
            "rewardRank": null,
            "images": [],
            "videos": []
        },
        {
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
            "started": true,
            "programId": null,
            "categoryList": [
                {
                    "id": 22,
                    "name": "accessories",
                    "enabled": true
                }
            ],
            "customFields": {
                "CF210": "value"
            },
            "loyaltyProgramCriteria": [],
            "groups": [],
            "rewardRestrictions": {
                "isValid": true
            },
            "groupName": null,
            "groupRank": null,
            "rewardRank": null,
            "images": [],
            "videos": []
        },
        {
            "id": 191955,
            "name": "300 free voucher on LULU hypermarket ",
            "description": "300 free voucher on LULU hypermarket ",
            "imageId": "1315f8f9-7ae9-41f0-9eb6-a7c35051ec6f",
            "imageUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/17e5a13b-c13b-448f-83e1-4143db8f.jpg",
            "thumbnailId": "5192ff78-9c5b-466d-8a52-a7fd3bc0eac5",
            "thumbnailUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/0ed4b37f-ef19-49c6-a1cb-63bde464.jpg",
            "termAndConditionsId": "53180a7d-b0e2-402e-b575-6726f4547035",
            "termAndConditionsUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/2dd931d9-2567-452a-8307-26bfe61.html",
            "tier": null,
            "label": "accessories",
            "priority": 3,
            "intouchPoints": 10000,
            "group": null,
            "startTime": "2024-06-28 14:42:25",
            "endTime": "2025-06-28 14:42:25",
            "expired": false,
            "started": true,
            "programId": null,
            "categoryList": [
                {
                    "id": 22,
                    "name": "accessories",
                    "enabled": true
                }
            ],
            "customFields": {
                "CF210": "value"
            },
            "loyaltyProgramCriteria": [],
            "groups": [],
            "rewardRestrictions": {
                "isValid": true
            },
            "groupName": null,
            "groupRank": null,
            "rewardRank": null,
            "images": [],
            "videos": []
        },
        {
            "id": 191954,
            "name": "5% Off on all products",
            "description": "5% Off on all products",
            "imageId": "1faf7376-b68e-42e1-a70b-5ad2577b43a0",
            "imageUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/d748ae1f-a7aa-410a-a536-05a0f2ae.png",
            "thumbnailId": "8b806438-efbe-476d-b7e9-5c756116ff34",
            "thumbnailUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/68abba6e-8557-4045-a39e-bc47cf33.png",
            "termAndConditionsId": "2c8405c8-3ccd-46c2-a3cf-f9854e79f0ec",
            "termAndConditionsUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/45deabfb-1de4-4b50-b9f5-71f44de.html",
            "tier": null,
            "label": "accessories",
            "priority": 2,
            "intouchPoints": 5000,
            "group": null,
            "startTime": "2024-06-28 14:38:31",
            "endTime": "2025-06-18 14:38:31",
            "expired": false,
            "started": true,
            "programId": null,
            "categoryList": [
                {
                    "id": 22,
                    "name": "accessories",
                    "enabled": true
                }
            ],
            "customFields": {
                "CF210": "value"
            },
            "loyaltyProgramCriteria": [],
            "groups": [],
            "rewardRestrictions": {
                "isValid": true
            },
            "groupName": null,
            "groupRank": null,
            "rewardRank": null,
            "images": [],
            "videos": []
        },
        {
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
            "started": true,
            "programId": null,
            "categoryList": [
                {
                    "id": 22,
                    "name": "accessories",
                    "enabled": true
                }
            ],
            "customFields": {
                "CF210": "value"
            },
            "loyaltyProgramCriteria": [],
            "groups": [],
            "rewardRestrictions": {
                "isValid": true
            },
            "groupName": null,
            "groupRank": null,
            "rewardRank": null,
            "images": [],
            "videos": []
        },
        {
            "id": 186560,
            "name": "150 off on handbags and wallets",
            "description": "150 off on handbags and wallets",
            "imageId": "04bbabf2-ce9d-48b3-9a58-347479b8ea88",
            "imageUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/969c2707-e082-4cc5-bbad-48f6ae1.jpeg",
            "thumbnailId": "04bbabf2-ce9d-48b3-9a58-347479b8ea88",
            "thumbnailUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/969c2707-e082-4cc5-bbad-48f6ae1.jpeg",
            "termAndConditionsId": "36797a3b-7726-4d75-ad8b-aa1dc0bd7874",
            "termAndConditionsUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/5f259983-5671-453e-af25-c9d1293.html",
            "tier": null,
            "label": null,
            "priority": 1,
            "intouchPoints": 0,
            "group": null,
            "startTime": "2024-06-18 10:02:00",
            "endTime": "2030-10-31 11:59:30",
            "expired": false,
            "started": true,
            "programId": null,
            "categoryList": [
                {
                    "id": 20,
                    "name": "groceries",
                    "enabled": true
                }
            ],
            "customFields": {
                "CF210": "value"
            },
            "loyaltyProgramCriteria": [],
            "groups": [],
            "rewardRestrictions": {
                "isValid": true,
                "customerLevel": [
                    {
                        "id": 8816,
                        "isValid": true,
                        "repeatFrequencyType": "DAYS",
                        "limit": 10,
                        "interval": 30,
                        "kpi": "QUANTITY"
                    },
                    {
                        "id": 8817,
                        "isValid": true,
                        "repeatFrequencyType": "NO_LIMIT",
                        "limit": 1000,
                        "kpi": "QUANTITY"
                    }
                ],
                "rewardLevel": [
                    {
                        "id": 8814,
                        "isValid": true,
                        "consumed": 0,
                        "repeatFrequencyType": "DAYS",
                        "limit": 10000,
                        "interval": 30,
                        "kpi": "QUANTITY"
                    },
                    {
                        "id": 8815,
                        "isValid": true,
                        "consumed": 0,
                        "repeatFrequencyType": "NO_LIMIT",
                        "limit": 100000000,
                        "kpi": "QUANTITY"
                    }
                ]
            },
            "groupName": null,
            "groupRank": null,
            "rewardRank": null,
            "images": [
                {
                    "name": "imagename1",
                    "id": "04bbabf2-ce9d-48b3-9a58-347479b8ea88",
                    "url": "https://eucrm-solutions.s3.amazonaws.com/rewards/969c2707-e082-4cc5-bbad-48f6ae1.jpeg"
                }
            ],
            "videos": [
                {
                    "name": "videoname1",
                    "id": null,
                    "url": "https://www.youtube.com/watch?v=JlxgrLH6hu4",
                    "isExternal": true
                }
            ]
        },
        {
            "id": 186557,
            "name": "150 off on handbags and wallets",
            "description": "150 off on handbags and wallets",
            "imageId": "04bbabf2-ce9d-48b3-9a58-347479b8ea88",
            "imageUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/969c2707-e082-4cc5-bbad-48f6ae1.jpeg",
            "thumbnailId": "04bbabf2-ce9d-48b3-9a58-347479b8ea88",
            "thumbnailUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/969c2707-e082-4cc5-bbad-48f6ae1.jpeg",
            "termAndConditionsId": "36797a3b-7726-4d75-ad8b-aa1dc0bd7874",
            "termAndConditionsUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/5f259983-5671-453e-af25-c9d1293.html",
            "tier": null,
            "label": null,
            "priority": 1,
            "intouchPoints": 500,
            "group": null,
            "startTime": "2024-06-18 10:02:00",
            "endTime": "2030-10-31 11:59:30",
            "expired": false,
            "started": true,
            "programId": null,
            "categoryList": [
                {
                    "id": 20,
                    "name": "groceries",
                    "enabled": true
                }
            ],
            "customFields": {
                "CF210": "value"
            },
            "loyaltyProgramCriteria": [],
            "groups": [],
            "rewardRestrictions": {
                "isValid": true,
                "customerLevel": [
                    {
                        "id": 8812,
                        "isValid": true,
                        "repeatFrequencyType": "DAYS",
                        "limit": 10,
                        "interval": 30,
                        "kpi": "QUANTITY"
                    },
                    {
                        "id": 8813,
                        "isValid": true,
                        "repeatFrequencyType": "NO_LIMIT",
                        "limit": 1000,
                        "kpi": "QUANTITY"
                    }
                ],
                "rewardLevel": [
                    {
                        "id": 8810,
                        "isValid": true,
                        "consumed": 2,
                        "repeatFrequencyType": "DAYS",
                        "limit": 10000,
                        "interval": 30,
                        "kpi": "QUANTITY"
                    },
                    {
                        "id": 8811,
                        "isValid": true,
                        "consumed": 2,
                        "repeatFrequencyType": "NO_LIMIT",
                        "limit": 100000000,
                        "kpi": "QUANTITY"
                    }
                ]
            },
            "groupName": null,
            "groupRank": null,
            "rewardRank": null,
            "images": [
                {
                    "name": "imagename1",
                    "id": "04bbabf2-ce9d-48b3-9a58-347479b8ea88",
                    "url": "https://eucrm-solutions.s3.amazonaws.com/rewards/969c2707-e082-4cc5-bbad-48f6ae1.jpeg"
                }
            ],
            "videos": [
                {
                    "name": "videoname1",
                    "id": null,
                    "url": "https://www.youtube.com/watch?v=JlxgrLH6hu4",
                    "isExternal": true
                }
            ]
        },
        {
            "id": 182945,
            "name": "150 off on handbags and wallets",
            "description": "150 off on handbags and wallets",
            "imageId": "04bbabf2-ce9d-48b3-9a58-347479b8ea88",
            "imageUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/969c2707-e082-4cc5-bbad-48f6ae1.jpeg",
            "thumbnailId": "04bbabf2-ce9d-48b3-9a58-347479b8ea88",
            "thumbnailUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/969c2707-e082-4cc5-bbad-48f6ae1.jpeg",
            "termAndConditionsId": "36797a3b-7726-4d75-ad8b-aa1dc0bd7874",
            "termAndConditionsUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/5f259983-5671-453e-af25-c9d1293.html",
            "tier": null,
            "label": null,
            "priority": 1,
            "intouchPoints": 0,
            "group": null,
            "startTime": "2024-06-11 10:02:00",
            "endTime": "2030-10-31 11:59:30",
            "expired": false,
            "started": true,
            "programId": null,
            "categoryList": [
                {
                    "id": 20,
                    "name": "groceries",
                    "enabled": true
                }
            ],
            "customFields": {
                "CF210": "value"
            },
            "loyaltyProgramCriteria": [],
            "groups": [],
            "rewardRestrictions": {
                "isValid": true,
                "customerLevel": [
                    {
                        "id": 8292,
                        "isValid": true,
                        "repeatFrequencyType": "DAYS",
                        "limit": 10,
                        "interval": 30,
                        "kpi": "QUANTITY"
                    },
                    {
                        "id": 8293,
                        "isValid": true,
                        "repeatFrequencyType": "NO_LIMIT",
                        "limit": 1000,
                        "kpi": "QUANTITY"
                    }
                ],
                "rewardLevel": [
                    {
                        "id": 8290,
                        "isValid": true,
                        "consumed": 0,
                        "repeatFrequencyType": "DAYS",
                        "limit": 10000,
                        "interval": 30,
                        "kpi": "QUANTITY"
                    },
                    {
                        "id": 8291,
                        "isValid": true,
                        "consumed": 1,
                        "repeatFrequencyType": "NO_LIMIT",
                        "limit": 100000000,
                        "kpi": "QUANTITY"
                    }
                ]
            },
            "groupName": null,
            "groupRank": null,
            "rewardRank": null,
            "images": [
                {
                    "name": "imagename1",
                    "id": "04bbabf2-ce9d-48b3-9a58-347479b8ea88",
                    "url": "https://eucrm-solutions.s3.amazonaws.com/rewards/969c2707-e082-4cc5-bbad-48f6ae1.jpeg"
                }
            ],
            "videos": [
                {
                    "name": "videoname1",
                    "id": null,
                    "url": "https://www.youtube.com/watch?v=JlxgrLH6hu4",
                    "isExternal": true
                }
            ],
            "paymentConfigs": [
                {
                    "paymentMode": "POINTS",
                    "id": 240,
                    "points": 10.0000
                }
            ]
        },
        {
            "id": 182941,
            "name": "150 off on handbags and wallets",
            "description": "150 off on handbags and wallets",
            "imageId": "04bbabf2-ce9d-48b3-9a58-347479b8ea88",
            "imageUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/969c2707-e082-4cc5-bbad-48f6ae1.jpeg",
            "thumbnailId": "04bbabf2-ce9d-48b3-9a58-347479b8ea88",
            "thumbnailUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/969c2707-e082-4cc5-bbad-48f6ae1.jpeg",
            "termAndConditionsId": "36797a3b-7726-4d75-ad8b-aa1dc0bd7874",
            "termAndConditionsUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/5f259983-5671-453e-af25-c9d1293.html",
            "tier": null,
            "label": null,
            "priority": 1,
            "intouchPoints": 0,
            "group": null,
            "startTime": "2024-06-11 10:02:00",
            "endTime": "2030-10-31 11:59:30",
            "expired": false,
            "started": true,
            "programId": null,
            "categoryList": [
                {
                    "id": 20,
                    "name": "groceries",
                    "enabled": true
                }
            ],
            "customFields": {
                "CF210": "value"
            },
            "loyaltyProgramCriteria": [],
            "groups": [],
            "rewardRestrictions": {
                "isValid": true,
                "customerLevel": [
                    {
                        "id": 8287,
                        "isValid": true,
                        "repeatFrequencyType": "DAYS",
                        "limit": 10,
                        "interval": 30,
                        "kpi": "QUANTITY"
                    },
                    {
                        "id": 8288,
                        "isValid": true,
                        "repeatFrequencyType": "NO_LIMIT",
                        "limit": 1000,
                        "kpi": "QUANTITY"
                    }
                ],
                "rewardLevel": [
                    {
                        "id": 8285,
                        "isValid": true,
                        "consumed": 0,
                        "repeatFrequencyType": "DAYS",
                        "limit": 10000,
                        "interval": 30,
                        "kpi": "QUANTITY"
                    },
                    {
                        "id": 8286,
                        "isValid": true,
                        "consumed": 0,
                        "repeatFrequencyType": "NO_LIMIT",
                        "limit": 100000000,
                        "kpi": "QUANTITY"
                    }
                ]
            },
            "groupName": null,
            "groupRank": null,
            "rewardRank": null,
            "images": [
                {
                    "name": "imagename1",
                    "id": "04bbabf2-ce9d-48b3-9a58-347479b8ea88",
                    "url": "https://eucrm-solutions.s3.amazonaws.com/rewards/969c2707-e082-4cc5-bbad-48f6ae1.jpeg"
                }
            ],
            "videos": [
                {
                    "name": "videoname1",
                    "id": null,
                    "url": "https://www.youtube.com/watch?v=JlxgrLH6hu4",
                    "isExternal": true
                }
            ],
            "paymentConfigs": [
                {
                    "paymentMode": "POINTS",
                    "id": 239,
                    "points": 10.0000
                }
            ]
        },
        {
            "id": 182367,
            "name": "150 off on handbags and wallets",
            "description": "150 off on handbags and wallets",
            "imageId": "04bbabf2-ce9d-48b3-9a58-347479b8ea88",
            "imageUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/969c2707-e082-4cc5-bbad-48f6ae1.jpeg",
            "thumbnailId": "04bbabf2-ce9d-48b3-9a58-347479b8ea88",
            "thumbnailUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/969c2707-e082-4cc5-bbad-48f6ae1.jpeg",
            "termAndConditionsId": "36797a3b-7726-4d75-ad8b-aa1dc0bd7874",
            "termAndConditionsUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/5f259983-5671-453e-af25-c9d1293.html",
            "tier": null,
            "label": null,
            "priority": 1,
            "intouchPoints": 0,
            "group": null,
            "startTime": "2024-06-10 12:54:00",
            "endTime": "2030-10-31 11:59:30",
            "expired": false,
            "started": true,
            "programId": null,
            "categoryList": [
                {
                    "id": 20,
                    "name": "groceries",
                    "enabled": true
                }
            ],
            "customFields": {
                "CF210": "value"
            },
            "loyaltyProgramCriteria": [],
            "groups": [],
            "rewardRestrictions": {
                "isValid": true,
                "customerLevel": [
                    {
                        "id": 8205,
                        "isValid": true,
                        "repeatFrequencyType": "DAYS",
                        "limit": 10,
                        "interval": 30,
                        "kpi": "QUANTITY"
                    },
                    {
                        "id": 8206,
                        "isValid": true,
                        "repeatFrequencyType": "NO_LIMIT",
                        "limit": 1000,
                        "kpi": "QUANTITY"
                    }
                ],
                "rewardLevel": [
                    {
                        "id": 8203,
                        "isValid": true,
                        "consumed": 0,
                        "repeatFrequencyType": "DAYS",
                        "limit": 10000,
                        "interval": 30,
                        "kpi": "QUANTITY"
                    },
                    {
                        "id": 8204,
                        "isValid": true,
                        "consumed": 0,
                        "repeatFrequencyType": "NO_LIMIT",
                        "limit": 100000000,
                        "kpi": "QUANTITY"
                    }
                ]
            },
            "groupName": null,
            "groupRank": null,
            "rewardRank": null,
            "images": [
                {
                    "name": "imagename1",
                    "id": "04bbabf2-ce9d-48b3-9a58-347479b8ea88",
                    "url": "https://eucrm-solutions.s3.amazonaws.com/rewards/969c2707-e082-4cc5-bbad-48f6ae1.jpeg"
                }
            ],
            "videos": [
                {
                    "name": "videoname1",
                    "id": null,
                    "url": "https://www.youtube.com/watch?v=JlxgrLH6hu4",
                    "isExternal": true
                }
            ],
            "paymentConfigs": [
                {
                    "paymentMode": "POINTS",
                    "id": 234,
                    "points": 10.0000
                }
            ]
        },
        {
            "id": 181203,
            "name": "150 off on handbags and wallets",
            "description": "150 off on handbags and wallets",
            "imageId": "04bbabf2-ce9d-48b3-9a58-347479b8ea88",
            "imageUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/969c2707-e082-4cc5-bbad-48f6ae1.jpeg",
            "thumbnailId": "d287af72-80bd-40c8-98c3-68a28eb3cf66",
            "thumbnailUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/3a8f00ea-bb30-4eeb-9175-663afbb.jpeg",
            "termAndConditionsId": "36797a3b-7726-4d75-ad8b-aa1dc0bd7874",
            "termAndConditionsUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/5f259983-5671-453e-af25-c9d1293.html",
            "tier": null,
            "label": null,
            "priority": 1,
            "intouchPoints": 500,
            "group": null,
            "startTime": "2024-06-30 12:54:00",
            "endTime": "2030-10-31 11:59:30",
            "expired": false,
            "started": true,
            "programId": null,
            "categoryList": [
                {
                    "id": 20,
                    "name": "groceries",
                    "enabled": true
                }
            ],
            "customFields": {
                "CF210": "value"
            },
            "loyaltyProgramCriteria": [],
            "groups": [],
            "rewardRestrictions": {
                "isValid": true,
                "customerLevel": [
                    {
                        "id": 7995,
                        "isValid": true,
                        "repeatFrequencyType": "DAYS",
                        "limit": 10,
                        "interval": 30,
                        "kpi": "QUANTITY"
                    },
                    {
                        "id": 7996,
                        "isValid": true,
                        "repeatFrequencyType": "NO_LIMIT",
                        "limit": 1000,
                        "kpi": "QUANTITY"
                    }
                ],
                "rewardLevel": [
                    {
                        "id": 7993,
                        "isValid": true,
                        "consumed": 0,
                        "repeatFrequencyType": "DAYS",
                        "limit": 10000,
                        "interval": 30,
                        "kpi": "QUANTITY"
                    },
                    {
                        "id": 7994,
                        "isValid": true,
                        "consumed": 0,
                        "repeatFrequencyType": "NO_LIMIT",
                        "limit": 100000000,
                        "kpi": "QUANTITY"
                    }
                ]
            },
            "groupName": null,
            "groupRank": null,
            "rewardRank": null,
            "images": [],
            "videos": []
        },
        {
            "id": 180529,
            "name": "150 off on handbags and wallets",
            "description": "150 off on handbags and wallets",
            "imageId": "04bbabf2-ce9d-48b3-9a58-347479b8ea88",
            "imageUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/969c2707-e082-4cc5-bbad-48f6ae1.jpeg",
            "thumbnailId": "d287af72-80bd-40c8-98c3-68a28eb3cf66",
            "thumbnailUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/3a8f00ea-bb30-4eeb-9175-663afbb.jpeg",
            "termAndConditionsId": "36797a3b-7726-4d75-ad8b-aa1dc0bd7874",
            "termAndConditionsUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/5f259983-5671-453e-af25-c9d1293.html",
            "tier": null,
            "label": null,
            "priority": 1,
            "intouchPoints": 500,
            "group": null,
            "startTime": "2024-06-30 12:54:00",
            "endTime": "2030-10-31 11:59:30",
            "expired": false,
            "started": true,
            "programId": null,
            "categoryList": [
                {
                    "id": 20,
                    "name": "groceries",
                    "enabled": true
                }
            ],
            "customFields": {
                "CF210": "value"
            },
            "loyaltyProgramCriteria": [],
            "groups": [],
            "rewardRestrictions": {
                "isValid": true,
                "customerLevel": [
                    {
                        "id": 7738,
                        "isValid": true,
                        "repeatFrequencyType": "DAYS",
                        "limit": 10,
                        "interval": 30,
                        "kpi": "QUANTITY"
                    },
                    {
                        "id": 7739,
                        "isValid": true,
                        "repeatFrequencyType": "NO_LIMIT",
                        "limit": 1000,
                        "kpi": "QUANTITY"
                    }
                ],
                "rewardLevel": [
                    {
                        "id": 7736,
                        "isValid": true,
                        "consumed": 0,
                        "repeatFrequencyType": "DAYS",
                        "limit": 10000,
                        "interval": 30,
                        "kpi": "QUANTITY"
                    },
                    {
                        "id": 7737,
                        "isValid": true,
                        "consumed": 0,
                        "repeatFrequencyType": "NO_LIMIT",
                        "limit": 100000000,
                        "kpi": "QUANTITY"
                    }
                ]
            },
            "groupName": null,
            "groupRank": null,
            "rewardRank": null,
            "images": [],
            "videos": []
        },
        {
            "id": 180111,
            "name": "Donate to Charity",
            "description": "Redeem you points and donate to Charity, 1 Point = 1 AED",
            "imageId": "fe20b118-ea9f-49d5-96a6-13fac6fc17d8",
            "imageUrl": "https://eucrm-solutions.s3-eu-west-1.amazonaws.com/rewards/100606/18462185-d1ed-460d-91f9-a256899e.jpg?X-Amz-Security-Token=FwoGZXIvYXdzEF0aDGd2jX0N4eU1RnUDryLIATs2tZdkqdpRrgG9594wCyE2hbdbPRq%2Ban6RLnRGTbsdhf%2BtmMamD%2BuZYL6nkP1qR1qLzk%2FCold8STOPScTSKzh",
            "thumbnailId": "fe20b118-ea9f-49d5-96a6-13fac6fc17d8",
            "thumbnailUrl": "https://eucrm-solutions.s3-eu-west-1.amazonaws.com/rewards/100606/18462185-d1ed-460d-91f9-a256899e.jpg?X-Amz-Security-Token=FwoGZXIvYXdzEF0aDGd2jX0N4eU1RnUDryLIATs2tZdkqdpRrgG9594wCyE2hbdbPRq%2Ban6RLnRGTbsdhf%2BtmMamD%2BuZYL6nkP1qR1qLzk%2FCold8STOPScTSKzh",
            "termAndConditionsId": "36797a3b-7726-4d75-ad8b-aa1dc0bd7874",
            "termAndConditionsUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/5f259983-5671-453e-af25-c9d1293.html",
            "tier": null,
            "label": null,
            "priority": 1,
            "intouchPoints": 0,
            "group": null,
            "startTime": "2024-06-07 09:20:00",
            "endTime": "2030-10-31 11:59:30",
            "expired": false,
            "started": true,
            "programId": null,
            "categoryList": [
                {
                    "id": 20,
                    "name": "groceries",
                    "enabled": true
                }
            ],
            "customFields": {
                "CF210": "value"
            },
            "loyaltyProgramCriteria": [],
            "groups": [],
            "rewardRestrictions": {
                "isValid": true
            },
            "groupName": null,
            "groupRank": null,
            "rewardRank": null,
            "images": [],
            "videos": [],
            "paymentConfigs": [
                {
                    "paymentMode": "CONV_RATIO",
                    "id": 102,
                    "conversionRatio": 1.0000
                }
            ]
        },
        {
            "id": 177056,
            "name": "Donate to Charity : Help us brighten a child's day!",
            "description": "Redeem you points and donate to Charity, 1 Point = 1 AED",
            "imageId": "5d05ccb2-6f5b-4b58-ad90-b97647c86784",
            "imageUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/1aba92d2-28bc-44dc-9dc9-00fbf662.jpg",
            "thumbnailId": "061bcf5a-6ccd-4422-a23d-929fa744f213",
            "thumbnailUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/ca915cf2-6495-41e1-b13a-cbf578fd.jpg",
            "termAndConditionsId": "f34e21ea-d563-45ec-a8fc-08c22313bc8c",
            "termAndConditionsUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/433ebbb0-0f0e-492e-bfed-f103168.html",
            "tier": null,
            "label": null,
            "priority": 1,
            "intouchPoints": 10,
            "group": "AFG",
            "startTime": "2024-05-31 09:20:00",
            "endTime": "2030-10-31 06:29:30",
            "expired": false,
            "started": true,
            "programId": null,
            "categoryList": [
                {
                    "id": 20,
                    "name": "groceries",
                    "enabled": true
                }
            ],
            "customFields": {
                "CF210": "value"
            },
            "loyaltyProgramCriteria": [],
            "groups": [],
            "rewardRestrictions": {
                "isValid": true,
                "rewardLevel": [
                    {
                        "id": 7260,
                        "isValid": true,
                        "consumed": 8856,
                        "repeatFrequencyType": "NO_LIMIT",
                        "limit": 50000,
                        "kpi": "QUANTITY"
                    }
                ]
            },
            "groupName": "2024 Special Rewards",
            "groupRank": 1,
            "rewardRank": null,
            "images": [],
            "videos": [],
            "paymentConfigs": [
                {
                    "paymentMode": "CONV_RATIO",
                    "id": 84,
                    "conversionRatio": 1.0000
                }
            ]
        },
        {
            "id": 177040,
            "name": "Redeem points to get Miles",
            "description": "Redeem points to get Miles. 1 Point=0.5 Miles",
            "imageId": "28a7d58c-db8a-49a4-a665-be6212771fe7",
            "imageUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/4f6d0d0f-3aa3-4538-abc4-787381f1.jpg",
            "thumbnailId": "0e53fd37-0f82-4381-9684-7526fee9b7b3",
            "thumbnailUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/afd3d02d-6a50-4d07-a16f-889acdf7.jpg",
            "termAndConditionsId": "05382e5c-b13c-4b9a-ada6-a6194d5e1644",
            "termAndConditionsUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/120e12f8-25fe-49ac-9b87-b88d248.html",
            "tier": null,
            "label": null,
            "priority": 1,
            "intouchPoints": 100,
            "group": "AFG",
            "startTime": "2024-05-31 09:30:00",
            "endTime": "2030-10-31 06:29:30",
            "expired": false,
            "started": true,
            "programId": null,
            "categoryList": [
                {
                    "id": 20,
                    "name": "groceries",
                    "enabled": true
                }
            ],
            "customFields": {
                "CF210": "value"
            },
            "loyaltyProgramCriteria": [],
            "groups": [],
            "rewardRestrictions": {
                "isValid": true,
                "customerLevel": [
                    {
                        "id": 7032,
                        "isValid": true,
                        "repeatFrequencyType": "NO_LIMIT",
                        "limit": 10000,
                        "kpi": "QUANTITY"
                    }
                ],
                "rewardLevel": [
                    {
                        "id": 7031,
                        "isValid": true,
                        "consumed": 23,
                        "repeatFrequencyType": "NO_LIMIT",
                        "limit": 1000000,
                        "kpi": "QUANTITY"
                    }
                ]
            },
            "groupName": "2024 Special Rewards",
            "groupRank": 1,
            "rewardRank": null,
            "images": [],
            "videos": [],
            "paymentConfigs": [
                {
                    "paymentMode": "CONV_RATIO",
                    "id": 92,
                    "conversionRatio": 0.5000
                }
            ]
        },
        {
            "id": 177015,
            "name": "Tech Gadget Giveaway",
            "description": "Redeem 50 points for an entry into a drawing for the latest smartphone.",
            "imageId": "dc7ab8ad-2909-44bd-a19e-dd2185dba444",
            "imageUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/6a4d0939-78dc-4f28-9e45-af10a270.jpg",
            "thumbnailId": "6503cff8-5483-496e-8c24-9b0658245972",
            "thumbnailUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/f2a3fde0-e6c5-40b3-ba5a-57d3ada1.jpg",
            "termAndConditionsId": "0d4766af-4d8e-4508-adcc-6a2c00b5d228",
            "termAndConditionsUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/298c660a-8472-4506-9905-3c504ae.html",
            "tier": null,
            "label": null,
            "priority": 1,
            "intouchPoints": 50,
            "group": "AFG",
            "startTime": "2024-05-31 07:30:00",
            "endTime": "2030-10-31 06:29:30",
            "expired": false,
            "started": true,
            "programId": null,
            "categoryList": [
                {
                    "id": 20,
                    "name": "groceries",
                    "enabled": true
                }
            ],
            "customFields": {
                "CF210": "value"
            },
            "loyaltyProgramCriteria": [],
            "groups": [],
            "rewardRestrictions": {
                "isValid": true,
                "customerLevel": [
                    {
                        "id": 7028,
                        "isValid": true,
                        "repeatFrequencyType": "NO_LIMIT",
                        "limit": 100,
                        "kpi": "QUANTITY"
                    }
                ],
                "rewardLevel": [
                    {
                        "id": 7027,
                        "isValid": true,
                        "consumed": 17,
                        "repeatFrequencyType": "NO_LIMIT",
                        "limit": 100000,
                        "kpi": "QUANTITY"
                    }
                ]
            },
            "groupName": "2024 Special Rewards",
            "groupRank": 1,
            "rewardRank": null,
            "images": [],
            "videos": [],
            "paymentConfigs": [
                {
                    "paymentMode": "POINTS",
                    "id": 70,
                    "points": 50.0000
                }
            ]
        },
        {
            "id": 177014,
            "name": "20% Off on Electronics",
            "description": "20% Off on Electronics",
            "imageId": "ce43375d-932e-4feb-a5aa-fd4d5c8fb662",
            "imageUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/03afb3f4-e779-4f41-9e8f-7b2b1906.jpg",
            "thumbnailId": "9049ec60-4f3d-4693-9314-d0e1dc0c7899",
            "thumbnailUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/9dcda0a5-03cc-41b9-9d18-f83459ef.jpg",
            "termAndConditionsId": "d486e5a9-29e8-441b-8ecd-c7394dbcabda",
            "termAndConditionsUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/2b6f5d02-f4cb-41ce-b1bc-1e9cd27.html",
            "tier": null,
            "label": null,
            "priority": 1,
            "intouchPoints": 100,
            "group": "AFG",
            "startTime": "2024-05-31 07:30:00",
            "endTime": "2030-10-31 06:29:30",
            "expired": false,
            "started": true,
            "programId": null,
            "categoryList": [
                {
                    "id": 20,
                    "name": "groceries",
                    "enabled": true
                }
            ],
            "customFields": {
                "CF210": "value"
            },
            "loyaltyProgramCriteria": [],
            "groups": [],
            "rewardRestrictions": {
                "isValid": true,
                "customerLevel": [
                    {
                        "id": 7030,
                        "isValid": true,
                        "repeatFrequencyType": "NO_LIMIT",
                        "limit": 100,
                        "kpi": "QUANTITY"
                    }
                ],
                "rewardLevel": [
                    {
                        "id": 7029,
                        "isValid": true,
                        "consumed": 5,
                        "repeatFrequencyType": "NO_LIMIT",
                        "limit": 100000,
                        "kpi": "QUANTITY"
                    }
                ]
            },
            "groupName": "2024 Special Rewards",
            "groupRank": 1,
            "rewardRank": null,
            "images": [],
            "videos": [],
            "paymentConfigs": [
                {
                    "paymentMode": "POINTS",
                    "id": 71,
                    "points": 1500.0000
                }
            ]
        },
        {
            "id": 175508,
            "name": "10$ gift card",
            "description": "10$ gift card",
            "imageId": "fabc1b4c-1ba0-4c2b-9b24-cc199e1b6813",
            "imageUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/1857b8f8-bdac-4f4d-8a43-acc20515.jpg",
            "thumbnailId": "0bae68c3-62e9-4ac8-a339-63cc54b85b61",
            "thumbnailUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/650feaab-4198-44d0-9718-f4f2f1cd.jpg",
            "termAndConditionsId": "41051017-6a4e-4ed1-8fd5-08b80d42379c",
            "termAndConditionsUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/35e6e13a-8d69-48a4-aa2a-c435647.html",
            "tier": "",
            "label": "",
            "priority": 1,
            "intouchPoints": 1000,
            "group": "AFG",
            "startTime": "2024-05-28 10:38:55",
            "endTime": "2024-10-31 10:38:55",
            "expired": false,
            "started": true,
            "programId": null,
            "categoryList": [
                {
                    "id": 20,
                    "name": "groceries",
                    "enabled": true
                }
            ],
            "customFields": {
                "CF210": "value"
            },
            "loyaltyProgramCriteria": [],
            "groups": [],
            "rewardRestrictions": {
                "isValid": true,
                "customerLevel": [
                    {
                        "id": 7023,
                        "isValid": true,
                        "repeatFrequencyType": "NO_LIMIT",
                        "limit": 100,
                        "kpi": "QUANTITY"
                    }
                ],
                "rewardLevel": [
                    {
                        "id": 7022,
                        "isValid": true,
                        "consumed": 5,
                        "repeatFrequencyType": "NO_LIMIT",
                        "limit": 100000,
                        "kpi": "QUANTITY"
                    }
                ]
            },
            "groupName": "2024 Special Rewards",
            "groupRank": 1,
            "rewardRank": null,
            "images": [],
            "videos": [],
            "paymentConfigs": [
                {
                    "paymentMode": "POINTS",
                    "id": 68,
                    "points": 2000.0000
                }
            ]
        },
        {
            "id": 175507,
            "name": "5% off on every txn",
            "description": "5% off on every txn above 3000",
            "imageId": "9e5974d5-8a00-435c-ab79-d07b11b1a505",
            "imageUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/9d2551f1-31a4-4440-abaf-a20d06c1.jpg",
            "thumbnailId": "e49fd8c3-cbb9-4ac5-98c8-aae9c3e65ebf",
            "thumbnailUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/afbfe7c0-b59c-4995-b646-654a4f1a.jpg",
            "termAndConditionsId": "be1114e0-e6e9-442e-a733-e143fe146bc8",
            "termAndConditionsUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/d840d1ca-fc3c-4c5c-958b-3daa92d.html",
            "tier": "",
            "label": "",
            "priority": 1,
            "intouchPoints": 1000,
            "group": "",
            "startTime": "2024-05-28 10:26:58",
            "endTime": "2026-11-24 10:26:58",
            "expired": false,
            "started": true,
            "programId": null,
            "categoryList": [
                {
                    "id": 22,
                    "name": "accessories",
                    "enabled": true
                }
            ],
            "customFields": {
                "CF210": "value"
            },
            "loyaltyProgramCriteria": [],
            "groups": [],
            "rewardRestrictions": {
                "isValid": true
            },
            "groupName": null,
            "groupRank": null,
            "rewardRank": null,
            "images": [],
            "videos": []
        },
        {
            "id": 158645,
            "name": "David Jones 20% discount voucher",
            "description": "David Jones 20% discount voucher",
            "imageId": "ead62903-4ce1-418b-b35b-8ccec35af73c",
            "imageUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/f12e4fd3-fbd9-47ad-9435-a5c4c579.jpg",
            "thumbnailId": "e6d26445-6b73-484b-8a14-b9fd2e6a269c",
            "thumbnailUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/a2f7235f-6d06-4cf5-b6c1-7f7f5074.jpg",
            "termAndConditionsId": "4a4b6609-21bb-4333-9be8-0e910a40b1c4",
            "termAndConditionsUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/5eb39438-e68d-4928-9f4f-4107c5f.html",
            "tier": null,
            "label": "accessories",
            "priority": 1,
            "intouchPoints": 500,
            "group": null,
            "startTime": "2024-04-26 03:34:32",
            "endTime": "2025-08-04 13:04:32",
            "expired": false,
            "started": true,
            "programId": null,
            "categoryList": [
                {
                    "id": 22,
                    "name": "accessories",
                    "enabled": true
                }
            ],
            "customFields": {
                "CF210": "value"
            },
            "loyaltyProgramCriteria": [],
            "groups": [],
            "rewardRestrictions": {
                "isValid": true
            },
            "groupName": null,
            "groupRank": null,
            "rewardRank": null,
            "images": [],
            "videos": []
        },
        {
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
            "started": true,
            "programId": null,
            "categoryList": [
                {
                    "id": 22,
                    "name": "accessories",
                    "enabled": true
                }
            ],
            "customFields": {
                "CF210": "value"
            },
            "loyaltyProgramCriteria": [],
            "groups": [],
            "rewardRestrictions": {
                "isValid": true
            },
            "groupName": null,
            "groupRank": null,
            "rewardRank": null,
            "images": [],
            "videos": []
        },
        {
            "id": 154441,
            "name": "Free Check-In Baggage upto 40Kgs",
            "description": "Free Check-In Baggage upto 40Kgs",
            "imageId": "6a50e5ff-e5e6-49bc-9f8b-523c3672d6cb",
            "imageUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/fae44e5c-96c8-4164-a75f-a256134.jpeg",
            "thumbnailId": "810c01d1-ace6-4805-8dac-e16c1a6e2c31",
            "thumbnailUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/8ab137db-d354-4ec5-8ad5-bc06d0f.jpeg",
            "termAndConditionsId": "c98ea62a-f019-4415-8abb-ac97664856b4",
            "termAndConditionsUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/4924dbf6-93a8-43f9-bf53-d45cc80.html",
            "tier": null,
            "label": null,
            "priority": 1,
            "intouchPoints": 2000,
            "group": "Airline",
            "startTime": "2024-10-30 11:53:00",
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
            "customFields": {
                "CF210": "value"
            },
            "loyaltyProgramCriteria": [
                {
                    "loyaltyProgramId": 626,
                    "tierIds": [
                        "186"
                    ],
                    "partnerProgramIds": null
                }
            ],
            "groups": [],
            "rewardRestrictions": {
                "isValid": true,
                "customerLevel": [
                    {
                        "id": 6664,
                        "isValid": true,
                        "repeatFrequencyType": "NO_LIMIT",
                        "limit": 10000,
                        "kpi": "QUANTITY"
                    }
                ],
                "rewardLevel": [
                    {
                        "id": 4248,
                        "isValid": true,
                        "consumed": 28,
                        "repeatFrequencyType": "NO_LIMIT",
                        "limit": 1000000,
                        "kpi": "QUANTITY"
                    }
                ]
            },
            "groupName": "Special one time Rewards",
            "groupRank": 6,
            "rewardRank": null,
            "images": [],
            "videos": [],
            "paymentConfigs": [
                {
                    "paymentMode": "CASH",
                    "id": 402,
                    "cash": 1000.0000
                },
                {
                    "paymentMode": "POINTS",
                    "id": 403,
                    "points": 2000.0000
                }
            ]
        },
        {
            "id": 121370,
            "name": "Grab food voucher",
            "description": "Grab food voucher",
            "imageId": "71f9cbaa-c30e-4ecf-8523-32efe5703a73",
            "imageUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/9c208d1e-7bf5-48cc-a0f0-34a9ee2.jpeg",
            "thumbnailId": "0d49a88f-52df-4e33-a7f0-70bd08e9febb",
            "thumbnailUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/ad5e96ca-a8d1-42e6-a807-f15209d.jpeg",
            "termAndConditionsId": "57ae69d9-1935-407c-a141-052fa3340213",
            "termAndConditionsUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/1828b4ea-986b-4c88-a6eb-d246a8a.html",
            "tier": "groceries",
            "label": "groceries",
            "priority": 1,
            "intouchPoints": 100,
            "group": "Food",
            "startTime": "2024-01-22 09:19:09",
            "endTime": "2030-10-31 11:59:30",
            "expired": false,
            "started": true,
            "programId": null,
            "categoryList": [
                {
                    "id": 20,
                    "name": "groceries",
                    "enabled": true
                }
            ],
            "customFields": {
                "CF210": "value"
            },
            "loyaltyProgramCriteria": [],
            "groups": [],
            "rewardRestrictions": {
                "isValid": true
            },
            "groupName": null,
            "groupRank": null,
            "rewardRank": null,
            "images": [
                {
                    "name": "imagename1",
                    "id": "7df197f5-be7a-45d3-9534-1e46fa3fbbe7",
                    "url": "https://eucrm-solutions.s3.amazonaws.com/rewards/0c7ab4b3-8cff-485d-b0e2-b0e39ea9.jpg"
                }
            ],
            "videos": [
                {
                    "name": "videoname1",
                    "id": null,
                    "url": "https://www.youtube.com/watch?v=JlxgrLH6hu4",
                    "isExternal": true
                }
            ]
        },
        {
            "id": 121369,
            "name": "5$ Grab Voucher",
            "description": "5$ Grab Voucher",
            "imageId": "7df197f5-be7a-45d3-9534-1e46fa3fbbe7",
            "imageUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/0c7ab4b3-8cff-485d-b0e2-b0e39ea9.jpg",
            "thumbnailId": "56822527-d7e0-4edd-9590-42a2aca0417c",
            "thumbnailUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/9634dd02-857f-485e-8f3b-694c2e57.jpg",
            "termAndConditionsId": "1a602742-206e-48bf-9340-9d2617d4484e",
            "termAndConditionsUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/e0dd2c30-e354-468f-a084-0dea37d.html",
            "tier": "groceries",
            "label": "groceries",
            "priority": 1,
            "intouchPoints": 50,
            "group": "Travel",
            "startTime": "2024-01-22 09:21:02",
            "endTime": "2030-10-31 11:59:30",
            "expired": false,
            "started": true,
            "programId": null,
            "categoryList": [
                {
                    "id": 20,
                    "name": "groceries",
                    "enabled": true
                }
            ],
            "customFields": {
                "CF210": "value"
            },
            "loyaltyProgramCriteria": [],
            "groups": [],
            "rewardRestrictions": {
                "isValid": true
            },
            "groupName": null,
            "groupRank": null,
            "rewardRank": null,
            "images": [
                {
                    "name": "imagename1",
                    "id": "7df197f5-be7a-45d3-9534-1e46fa3fbbe7",
                    "url": "https://eucrm-solutions.s3.amazonaws.com/rewards/0c7ab4b3-8cff-485d-b0e2-b0e39ea9.jpg"
                }
            ],
            "videos": [
                {
                    "name": "videoname1",
                    "id": null,
                    "url": "https://www.youtube.com/watch?v=JlxgrLH6hu4",
                    "isExternal": true
                }
            ],
            "paymentConfigs": [
                {
                    "paymentMode": "POINTS_CASH",
                    "id": 38,
                    "cash": 5.0000,
                    "points": 200.0000
                }
            ]
        }
    ],
    "pagingDto": {
        "last": true,
        "totalElements": 55,
        "totalPages": 1,
        "numberOfElements": 55,
        "first": true,
        "size": 55,
        "number": 0
    },
    "orgLevelRestrictions": {
        "isValid": true,
        "customerLevel": [
            {
                "rewardConstraintId": 13054,
                "orgId": 100606,
                "kpi": "POINTS",
                "constraintLevel": "CUSTOMER",
                "frequencyType": "MONTHLY",
                "constraintLimitValue": 500000,
                "isActive": true,
                "isValid": true
            }
        ],
        "customerRedemptionTypeLevel": [
            {
                "rewardConstraintId": 13055,
                "orgId": 100606,
                "kpi": "POINTS",
                "constraintLevel": "CUSTOMER_REDEMPTION_TYPE",
                "frequencyType": "MONTHLY",
                "constraintLimitValue": 4000,
                "isActive": true,
                "isValid": true,
                "redemptionType": "CHARITY"
            }
        ]
    }
}
```
```json With 'altText' for images and videos
{
    "status": {
        "success": true,
        "code": 200,
        "message": "User Reward fetched successfully"
    },
    "reward": {
        "id": 313501,
        "name": " INTOUCH Enabled",
        "description": "Description",
        "imageId": "EXDR12987U",
        "imageUrl": "https://s3.eu-west-1.amazonaws.com/eucrm-solutions/DOCDEMO/EXDR12987U?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCWV1LXdlc3QtMSJIMEYCIQDap7JgbAjJunX2n5CUGLc1Bn0%2BsMLByXbqIuN7T18V4QIhAMWUlbYrvIPPywfxBESpIklhx%2FYftUz9IdnYt9IpvNbjKr4CCPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNTAyODEyNzc5MjY3IgxbslZ7PvG2Rg63UNQqkgJ2Ac2A54T8zGbNq7UIPyo4L1FqkbevpSrtpbFEJFAqt%2FOfaZ2Se09Mpuq2UwO3kWv4zLazxyOtNM9FhArN5r2H9UDzagUdpEfgMUsaPl9yDL6cd4rFauELthSPx6KzCd4a95womg9sA3dJ2rLtqGzkgytfZ%2Be87knR8OP2utagXiP07J8u5lUyNXKA2%2FfDrDmYlAg862xA5EK%2FeqAxGUOubNMK%2FVP2B5SEhOFonODeVos2vPNujzMDyN8u%2Fb%2Fz90ubP7tz3MtvbMOF3oXVJA%2BspEaNzkMKTdygB7ibpC6RAqwmWlKMIkcIAIJPgFfnLDdo8X9oXYcvLdnY0gxreOL6WQQltZkbyds%2By4EvV8xlTWa4MLTvsr0GOpwBkt2kMAJIFylTozfjEvpnP5pYlD0hvSGInWGKCpKeHFNnET8q%2BS3wVhi1jg2XbrBxpqj5OkEuX6P66rx%2BYlZ7Jtdl40%2B%2BFR4f%2BbHU26BMwzRCoghHIfyFX9KObGoPyyzlL%2Bbpl80OCp1oBsumPPHu2Ir%2F5dj5qGkxzfVmUyk6hdBQqjZMoYPe%2B7O0FfoTNR5q7d3w6QvaslJkPfxP&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20250212T150445Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIAXKEP2EMBXPKM67RT%2F20250212%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Signature=49d6aa47952a2cf47c769117d2ca7b767d4840bf31606a2710270cf42fb5bb91",
        "thumbnailId": "EXDR12987T",
        "thumbnailUrl": "https://s3.eu-west-1.amazonaws.com/eucrm-solutions/DOCDEMO/EXDR12987T?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCWV1LXdlc3QtMSJIMEYCIQDap7JgbAjJunX2n5CUGLc1Bn0%2BsMLByXbqIuN7T18V4QIhAMWUlbYrvIPPywfxBESpIklhx%2FYftUz9IdnYt9IpvNbjKr4CCPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNTAyODEyNzc5MjY3IgxbslZ7PvG2Rg63UNQqkgJ2Ac2A54T8zGbNq7UIPyo4L1FqkbevpSrtpbFEJFAqt%2FOfaZ2Se09Mpuq2UwO3kWv4zLazxyOtNM9FhArN5r2H9UDzagUdpEfgMUsaPl9yDL6cd4rFauELthSPx6KzCd4a95womg9sA3dJ2rLtqGzkgytfZ%2Be87knR8OP2utagXiP07J8u5lUyNXKA2%2FfDrDmYlAg862xA5EK%2FeqAxGUOubNMK%2FVP2B5SEhOFonODeVos2vPNujzMDyN8u%2Fb%2Fz90ubP7tz3MtvbMOF3oXVJA%2BspEaNzkMKTdygB7ibpC6RAqwmWlKMIkcIAIJPgFfnLDdo8X9oXYcvLdnY0gxreOL6WQQltZkbyds%2By4EvV8xlTWa4MLTvsr0GOpwBkt2kMAJIFylTozfjEvpnP5pYlD0hvSGInWGKCpKeHFNnET8q%2BS3wVhi1jg2XbrBxpqj5OkEuX6P66rx%2BYlZ7Jtdl40%2B%2BFR4f%2BbHU26BMwzRCoghHIfyFX9KObGoPyyzlL%2Bbpl80OCp1oBsumPPHu2Ir%2F5dj5qGkxzfVmUyk6hdBQqjZMoYPe%2B7O0FfoTNR5q7d3w6QvaslJkPfxP&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20250212T150445Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIAXKEP2EMBXPKM67RT%2F20250212%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Signature=86e89ab8d6a8fafd89a6817a656f2e2f4541ea09e6a4e1e24e9a515f1dbba3af",
        "termAndConditionsId": "EXDR12987R",
        "termAndConditionsUrl": "https://s3.eu-west-1.amazonaws.com/eucrm-solutions/DOCDEMO/EXDR12987R?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCWV1LXdlc3QtMSJIMEYCIQDap7JgbAjJunX2n5CUGLc1Bn0%2BsMLByXbqIuN7T18V4QIhAMWUlbYrvIPPywfxBESpIklhx%2FYftUz9IdnYt9IpvNbjKr4CCPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNTAyODEyNzc5MjY3IgxbslZ7PvG2Rg63UNQqkgJ2Ac2A54T8zGbNq7UIPyo4L1FqkbevpSrtpbFEJFAqt%2FOfaZ2Se09Mpuq2UwO3kWv4zLazxyOtNM9FhArN5r2H9UDzagUdpEfgMUsaPl9yDL6cd4rFauELthSPx6KzCd4a95womg9sA3dJ2rLtqGzkgytfZ%2Be87knR8OP2utagXiP07J8u5lUyNXKA2%2FfDrDmYlAg862xA5EK%2FeqAxGUOubNMK%2FVP2B5SEhOFonODeVos2vPNujzMDyN8u%2Fb%2Fz90ubP7tz3MtvbMOF3oXVJA%2BspEaNzkMKTdygB7ibpC6RAqwmWlKMIkcIAIJPgFfnLDdo8X9oXYcvLdnY0gxreOL6WQQltZkbyds%2By4EvV8xlTWa4MLTvsr0GOpwBkt2kMAJIFylTozfjEvpnP5pYlD0hvSGInWGKCpKeHFNnET8q%2BS3wVhi1jg2XbrBxpqj5OkEuX6P66rx%2BYlZ7Jtdl40%2B%2BFR4f%2BbHU26BMwzRCoghHIfyFX9KObGoPyyzlL%2Bbpl80OCp1oBsumPPHu2Ir%2F5dj5qGkxzfVmUyk6hdBQqjZMoYPe%2B7O0FfoTNR5q7d3w6QvaslJkPfxP&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20250212T150445Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIAXKEP2EMBXPKM67RT%2F20250212%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Signature=5f984a74bfe1aa3f231d42237117af951e792a619c010086f3d800d355ace19b",
        "tier": "PLATINUM",
        "label": null,
        "priority": 1,
        "intouchPoints": 0,
        "group": null,
        "startTime": "2025-02-07 10:13:30",
        "endTime": "2025-12-30 12:50:20",
        "expired": false,
        "started": true,
        "programId": null,
        "categoryList": [],
        "customFields": {},
        "loyaltyProgramCriteria": [],
        "rewardRestrictions": {
            "isValid": true
        },
        "groups": [],
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
        "orgLevelRestrictions": {
            "isValid": true
        }
    }
}
```

<br />

# API-specific error codes

| Error Code | Description                                                   |
| :--------- | :------------------------------------------------------------ |
| 6004       | Reward not found or disabled                                  |
| 15006      | The request is missing the primary identifier.                |
| 1014       | The provided identifier does not match any existing customer. |
| 404        | The specified customer was not found in the organization.     |