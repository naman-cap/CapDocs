---
title: Get Cart Promotions for a Customer
excerpt: >-
  This API is used to retrieve the cart promotions tagged to a particular
  customer based on the user ID. This returns cart promotions issued to the
  customer or POS promotions which are tagged to the customer's tier or
  supplementary programs.
api:
  file: v1.json
  operationId: get-promotions-for-a-customer
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
This API retrieves cart promotions and Point-of-Sale (POS) promotions specifically tagged to a customer based on their user ID. This includes cart promotions directly issued to the customer and POS promotions associated with the customer's loyalty tier or supplementary programs.

<Callout icon="📘" theme="info">
  **Note**

  **The API returns POS promotions under the following conditions:**

  * Tier-Specific Promotions: If a promotion is configured for a specific loyalty tier (e.g., "Gold Tier") and the customer making the API call belongs to that tier, the promotion will be included in the response.
  * Supplementary Program Promotions: When the includeSupplementaryPromotions parameter in the API call is set to true, promotions linked to supplementary programs will be returned.

  **The API will not return POS promotions in these scenarios:**

  * "All Loyalty Customers" Promotions: Promotions broadly applicable to all loyalty members, without being tied to a particular tier, are not returned by this API.
  * No Tier or Supplementary Program Association: If a POS promotion is not explicitly linked to a customer tier or a supplementary program, it will not be part of the API's response.
</Callout>

# Request Query Parameters

| Parameter                      | Data Type | Description                                                                                                              |
| :----------------------------- | :-------- | :----------------------------------------------------------------------------------------------------------------------- |
| includeRedemptions             | Boolean   | includeRedemptions=true includes the restrictions applied to the promotion including max limit and remaining redemptions |
| includeSupplementaryPromotions | Boolean   | includeSupplementaryPromotions=true includes the promotions tagged to the customer's supplementary program               |

# Response Parameters

<Table align={["left","left","left"]}>
  <thead>
    <tr>
      <th>
        Parameter
      </th>

      <th>
        Data type
      </th>

      <th>
        Description
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        promotionId
      </td>

      <td>
        String
      </td>

      <td>
        Unique identifier of the Cart promotion
      </td>
    </tr>

    <tr>
      <td>
        promotionName
      </td>

      <td>
        String
      </td>

      <td>
        Name of the Cart promotion
      </td>
    </tr>

    <tr>
      <td>
        validTill
      </td>

      <td>
        Long
      </td>

      <td>
        Expiration timestamp (milliseconds since epoch)
      </td>
    </tr>

    <tr>
      <td>
        customerId
      </td>

      <td>
        Long
      </td>

      <td>
        Unique Identifier of the Customer using the Cart promotion
      </td>
    </tr>

    <tr>
      <td>
        earnedType
      </td>

      <td>
        String
      </td>

      <td>
        The method how cart promotion was earned. Supported values: NONE, TIER, REWARD, LOYALTY. None: Promotion is directly assigned to the customer, no qualification criteria required. Tier: Promotion is assigned based on the customers loyalty tier or status level, no qualifying action is required. Reward: Promotion is earned on the basis of completing a milestone or achievement, action is required. Loyalty: Promotion is tied to loyalty program.
      </td>
    </tr>

    <tr>
      <td>
        earnedStatus
      </td>

      <td>
        String
      </td>

      <td>
        Status of the earned cart promotion. Supported Values: LOCKED, UNLOCKED, EXPIRED. Locked: Promotion has been Issued but not yet available to use. Unlocked: Promotion is active and ready for the customer to use. Expired: Promotion was available before but cannot be used now.
      </td>
    </tr>

    <tr>
      <td>
        promotionStatus
      </td>

      <td>
        String
      </td>

      <td>
        Promotion can have three statues: ACTIVE, INACTIVE, EXPIRED.

        * **ACTIVE** - The promotion is currently running and can be applied if all conditions are met. However, this status does not indicate whether the customer has already redeemed the promotion. For example, a birthday promotion may be active for an entire month, but this does not mean the customer is eligible to use it at all times. If the customer has already redeemed the promotion and has no more redemptions remaining, the status will still remain active. To check if a customer can still redeem the promotion, refer to `remainingRedemption`.
        * **INACTIVE** - Promotion exists in the system but is currently deactivated by an administrator.
        * **EXPIRED** - The end date for the promotion has passed and it is no longer active.
      </td>
    </tr>

    <tr>
      <td>
        milestoneId
      </td>

      <td>
        Long
      </td>

      <td>
        Milestone or achievement target linked to the promotion
      </td>
    </tr>

    <tr>
      <td>
        targetGroupId
      </td>

      <td>
        Long
      </td>

      <td>
        Identifier for a specific customer group eligible for the promotion based on predefined criteria. It indicates the offer was specifically designed for a customer segment.
      </td>
    </tr>

    <tr>
      <td>
        applicationMode
      </td>

      <td>
        String
      </td>

      <td>
        Indicates the way the promotion is applied. Supported Values: DISCOUNT, REWARD. Discount: Promotion applies to reduce the price, lowering the amount customer pays at checkout. Reward: It provides benefit or reward that does not applies at transaction.
      </td>
    </tr>

    <tr>
      <td>
        customFieldValues
      </td>

      <td>
        Object
      </td>

      <td>
        Contains custom key-value pairs related to the promotion
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
        Contains restrictions categorized by level. To view the restrictions, set `includeRedemptions` to true. If the cart promotion has no redemption limit, this information will not be available.
      </td>
    </tr>

    <tr>
      <td>
        * Cart
      </td>

      <td>
        Array
      </td>

      <td>
        Contains cart-level restrictions applicable to the promotion.
      </td>
    </tr>

    <tr>
      <td>
        * Customer
      </td>

      <td>
        Array
      </td>

      <td>
        Contains customer-level restrictions applicable to the promotion.
      </td>
    </tr>

    <tr>
      <td>
        * Promotion
      </td>

      <td>
        Array
      </td>

      <td>
        Contains promotion-level restrictions applicable to the promotion.
      </td>
    </tr>

    <tr>
      <td>
        * Product
      </td>

      <td>
        Array
      </td>

      <td>
        Contains product-level restrictions applicable to the promotion. Only `DISCOUNT` is supported as a KPI for product-level restrictions.
      </td>
    </tr>

    <tr>
      <td>
        * Category
      </td>

      <td>
        Array
      </td>

      <td>
        Contains Product Category-level restrictions applicable to the promotion. Only `REDEMPTION` is supported as a KPI for category-level restrictions.
      </td>
    </tr>

    <tr>
      <td>
        -- kpi
      </td>

      <td>
        String
      </td>

      <td>
        Indicates the key performance metric used for restriction.
        -`REDEMPTION `: Limits the number of times a promotion can be redeemed.
        -`DISCOUNT` : Limits the total discount amount that can be applied.
        -`TRANSACTION` : Limits the number of transactions in which the promotion can be applied.
      </td>
    </tr>

    <tr>
      <td>
        -- maxLimit
      </td>

      <td>
        String
      </td>

      <td>
        Indicates the maximum allowed limit for a specific restriction. For Example, in a birthday cart promotion offer, if the `maxLimit` is set to 1, the customer can only redeem the promotion once while it is running.
      </td>
    </tr>

    <tr>
      <td>
        -- remainingRedemption
      </td>

      <td>
        String
      </td>

      <td>
        Indicates the remaining number of times the cart promotion can be used by the customer. If the count is zero, it means that the promotion cannot be redeemed by the customer as they have already exhausted all the redemptions available. For example, in a birthday cart promotion offer with a maximum redemption limit of 1, if the customer has already redeemed the cart promotion, then even if promotionStatus is `ACTIVE`, the customer cannot redeem the promotion again.
      </td>
    </tr>

    <tr>
      <td>
        eventTime
      </td>

      <td>
        Long
      </td>

      <td>
        Timestamp of the event that triggered the cart promotion (milliseconds since epoch)
      </td>
    </tr>

    <tr>
      <td>
        supplementaryCriteria
      </td>

      <td>
        Object
      </td>

      <td>
        Defines additional loyalty based conditions. To get this response, set query parameter `includeSupplementaryRedemtion` to true
      </td>
    </tr>

    <tr>
      <td>
        * loyaltyprogramId
      </td>

      <td>
        Long
      </td>

      <td>
        Identifier of the loyalty program associated with cart promotion
      </td>
    </tr>

    <tr>
      <td>
        * programType
      </td>

      <td>
        Enum
      </td>

      <td>
        Indicates the type of program
      </td>
    </tr>

    <tr>
      <td>
        * partnerprogramId
      </td>

      <td>
        Long
      </td>

      <td>
        Indicates partner program Id, if it is a partner program
      </td>
    </tr>
  </tbody>
</Table>

<br />
