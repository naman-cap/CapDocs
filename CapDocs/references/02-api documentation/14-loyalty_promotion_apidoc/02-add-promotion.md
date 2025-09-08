---
title: 'Add Promotion : don''t make it public'
excerpt: Lets you create a promotion for a specific loyalty program.
api:
  file: v1.json
  operationId: add-promotion
deprecated: false
hidden: true
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
## Request Parameters

<Table>
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
        id\*
      </td>

      <td>
        Integer
      </td>

      <td>
        Unique ID of the loyalty promotion. When creating a new promotion, this value must be set to `-1`.
      </td>
    </tr>

    <tr>
      <td>
        name\*
      </td>

      <td>
        string
      </td>

      <td>
        Unique name of the loyalty promotion.
      </td>
    </tr>

    <tr>
      <td>
        programId\*
      </td>

      <td>
        int
      </td>

      <td>
        Unique ID of the loyalty program to associate with the promotion. You can create multiple promotions under a single loyalty program.
      </td>
    </tr>

    <tr>
      <td>
        startDate\*
      </td>

      <td>
        date-time
      </td>

      <td>
        Start date of the promotion in ISO 8601 `yyyy-mm-ddThh:mm:ss.s+z` format.
      </td>
    </tr>

    <tr>
      <td>
        endDate\*
      </td>

      <td>
        date-time
      </td>

      <td>
        End date of the promotion in ISO 8601 `yyyy-mm-ddThh:mm:ss.s+z` format.
      </td>
    </tr>

    <tr>
      <td>
        allocatePointsOn
      </td>

      <td>
        string
      </td>

      <td>
        Category for point allocation. Supported values: `BILL`, `LINEITEM`, `CUSTOMER`.
      </td>
    </tr>

    <tr>
      <td>
        identifier\*
      </td>

      <td>
        string
      </td>

      <td>
        Unique identifier for the promotion. This is an external identifier that can be used to identify the promotion.
      </td>
    </tr>

    <tr>
      <td>
        eventName\*
      </td>

      <td>
        Enum
      </td>

      <td>
        Name of the event to associate with the promotion. Supported values: `TRANSACTIONADD`, `CUSTOMERUPDATE`, `CUSTOMERREGISTRATION`.
      </td>
    </tr>

    <tr>
      <td>
        pointsOfferType\*
      </td>

      <td>
        Enum
      </td>

      <td>
        Type of loyalty promotion. Supported values: `LOYALTY` and `LOYALTY_EARNING`. Refer to the documentation on [loyalty promotions](https://docs.capillarytech.com/docs/loyalty-promotions) for more information.
      </td>
    </tr>

    <tr>
      <td>
        rulesetInfo
      </td>

      <td>
        Object
      </td>

      <td>
        Contains details on the rules for the loyalty promotion.
      </td>
    </tr>

    <tr>
      <td>
        promotionRestrictions
      </td>

      <td>
        Object
      </td>

      <td>
        Contains details on the restrictions for the loyalty promotion.
      </td>
    </tr>

    <tr>
      <td>
        * linkedTargetGroupVsTargetRuleIdMap
      </td>

      <td>
        Object
      </td>

      <td>

      </td>
    </tr>

    <tr>
      <td>
        * loyaltyEarningType
      </td>

      <td>
        Enum
      </td>

      <td>
        Type of loyalty promotion. Supported values: `ISSUE_AND_EARN` and `DIRECT_EARN`. Refer to the documentation on [loyalty promotions](https://docs.capillarytech.com/docs/loyalty-promotions) for more information.
      </td>
    </tr>

    <tr>
      <td>
        * isStackable
      </td>

      <td>
        Boolean
      </td>

      <td>
        Indicate if the promotion is stackable. A stackable promotion refers to the application of multiple promotions within a single transaction.  

        Refer to the documentation on [promotion stacking strategies](https://docs.capillarytech.com/docs/loyalty-promotion-priority-order-stacking-strategy#promotion-stacking) for more information. 
      </td>
    </tr>

    <tr>
      <td>
        * isExclusive
      </td>

      <td>
        Boolean
      </td>

      <td>
        Indicate if a promotion is exclusive. Exclusive promotions are evaluated individually and do not stack with any other promotion.  

        Refer to the documentation on [promotion stacking strategies](https://docs.capillarytech.com/docs/loyalty-promotion-priority-order-stacking-strategy#functionality-when-stacking-strategy-is-on) for more information.
      </td>
    </tr>

    <tr>
      <td>
        * isConsideredForRanking
      </td>

      <td>
        Boolean
      </td>

      <td>
        Indicate if the promotion is considered for ranking.
      </td>
    </tr>

    <tr>
      <td>
        * restrictions
      </td>

      <td>
        Object
      </td>

      <td>
        Contains information on the restrictions configured for a loyalty promotion.
      </td>
    </tr>

    <tr>
      <td>
        \-- redemptionRestrictions
      </td>

      <td>
        Object
      </td>

      <td>
        Contains information on the redemption limits for a promotion.
      </td>
    </tr>

    <tr>
      <td>
        \--- name
      </td>

      <td>
        Enum
      </td>

      <td>
        Type of redemption restriction. Supported values:\
        `MAX_ALLOWED_POINTS_PER_EVENT`:  The maximum points that can be earned in a single event for a customer.\
        `MAX_ALLOWED_TIMES_PER_CUSTOMER`: The maximum number of times a promotion can be issued to a customer.\
        `MAX_ALLOWED_POINTS_PER_CUSTOMER`:The maximum points a customer can earn across the promotion.\
        `MAX_ALLOWED_TIMES_PER_PROMOTION`:The maximum number of times a promotion can be issued.\
        `MAX_ALLOWED_POINTS_PER_PROMOTION`:The maximum points that can be award across the promotion.\
        `MAX_REDEMPTIONS_PER_EARN_PER_CUSTOMER`:The maximum number of times a customer can redeem a promotion after earning.
      </td>
    </tr>

    <tr>
      <td>
        \--- value
      </td>

      <td>
        Integer
      </td>

      <td>
        Number of units corresponding to the `name`. Specify the value as `-1` for no limit. The maximum limit supported by the system is 100.
      </td>
    </tr>

    <tr>
      <td>
        \--- type
      </td>

      <td>
        Enum
      </td>

      <td>
        Type of period for restriction. Supported values:\
         `PERIOD_BASED`: Restriction is applied for a defined period of time.\
        `NON_PERIOD_BASED`: Restriction is applied for the entire duration of the promotion.
      </td>
    </tr>

    <tr>
      <td>
        \--- periodType
      </td>

      <td>
        Enum
      </td>

      <td>
        Type of period for the restriction. Supported value: `MOVING_WINDOW`.
      </td>
    </tr>

    <tr>
      <td>
        \--- periodUnit
      </td>

      <td>
        Enum
      </td>

      <td>
        Frequency of the period. Supported values: `DAILY`, `WEEKLY`, `MONTHLY `.
      </td>
    </tr>

    <tr>
      <td>
        \-- issualRestrictions
      </td>

      <td>
        Object
      </td>

      <td>
        Contains information on the issual limits for a promotion.
      </td>
    </tr>

    <tr>
      <td>
        \--- name
      </td>

      <td>
        Enum
      </td>

      <td>
        Type of issual restriction. Supported values:\
        `MAX_NUMBER_OF_ISSUALS_PER_CUSTOMER`: Maximum number of times a promotion can be issued to a customer.
      </td>
    </tr>

    <tr>
      <td>
        \--- value
      </td>

      <td>
        Integer
      </td>

      <td>
        Number of units corresponding to the `name`. Specify the value as `-1` for no limit. The maximum limit supported by the system is 100.
      </td>
    </tr>

    <tr>
      <td>
        \-- earnRestrictions
      </td>

      <td>
        Object
      </td>

      <td>
        Contains information on the earn limits for a promotion. This is specific for [enrol and issue](https://docs.capillarytech.com/reference/enrol-and-issue-promotion) type promotion. 
      </td>
    </tr>

    <tr>
      <td>
        \--- name
      </td>

      <td>
        Enum
      </td>

      <td>
        Type of earn restriction. Supported values:\
        `MAX_NUMBER_OF_EARNS_PER_CUSTOMER`:\
        `MAX_POINTS_PER_EARN_PER_CUSTOMER`: 
      </td>
    </tr>

    <tr>
      <td>
        \--- value
      </td>

      <td>
        Integer
      </td>

      <td>
        Number of units corresponding to the `name`. Specify the value as `-1` for no limit. The maximum limit supported by the system is 100.
      </td>
    </tr>

    <tr>
      <td>
        \-- expiryRestrictions\*
      </td>

      <td>
        Object
      </td>

      <td>
        Contains information on the expiry for a promotion. This is mandatory for both [enrol and issue](https://docs.capillarytech.com/reference/enrol-and-issue-promotion) and [direct issue](https://docs.capillarytech.com/docs/direct-issue-loyalty-promotion) types of promotion.
      </td>
    </tr>

    <tr>
      <td>
        \--- name\*
      </td>

      <td>
        Enum
      </td>

      <td>
        Action that is expiring. Supported values:\
        `ISSUAL_PROMOTION_EXPIRY_BASED_ON`: Expiration of the promotion issue.\
        `EARN_PROMOTION_EXPIRY_BASED_ON`: Expiration of the promotion earn.
      </td>
    </tr>

    <tr>
      <td>
        \--- type\*
      </td>

      <td>
        Enum
      </td>

      <td>
        Type of expiration. Supported values:\
        `PROMOTION`: The loyalty promotion expires on the date defined in `endDate`\
        `CUSTOM`:  Define the number of days when the loyalty promotion expires from the date of issual.
      </td>
    </tr>

    <tr>
      <td>
        \--- value
      </td>

      <td>
        Integer
      </td>

      <td>
        Number of days the loyalty promotion expires from the date of issual.
      </td>
    </tr>

    <tr>
      <td>
        allocationActions
      </td>

      <td>
        Object
      </td>

      <td>
        Contains information on the allocation strategy and expiration of points for the promotion.
      </td>
    </tr>

    <tr>
      <td>
        * allocation
      </td>

      <td>
        Object
      </td>

      <td>
        Contains information on the points allocation strategy for the promotion.
      </td>
    </tr>

    <tr>
      <td>
        \-- type
      </td>

      <td>
        Enum
      </td>

      <td>
        Type of allocation. Supported values:\
        `FIXED`
      </td>
    </tr>

    <tr>
      <td>
        \-- value
      </td>

      <td>

      </td>

      <td>

      </td>
    </tr>

    <tr>
      <td>
        * expiry
      </td>

      <td>

      </td>

      <td>

      </td>
    </tr>

    <tr>
      <td>
        \-- type
      </td>

      <td>

      </td>

      <td>

      </td>
    </tr>

    <tr>
      <td>
        \-- value
      </td>

      <td>

      </td>

      <td>

      </td>
    </tr>

    <tr>
      <td>
        * rounding
      </td>

      <td>

      </td>

      <td>

      </td>
    </tr>

    <tr>
      <td>
        qualifyingConditions
      </td>

      <td>

      </td>

      <td>

      </td>
    </tr>

    <tr>
      <td>
        * kpi
      </td>

      <td>

      </td>

      <td>

      </td>
    </tr>

    <tr>
      <td>
        * params
      </td>

      <td>

      </td>

      <td>

      </td>
    </tr>

    <tr>
      <td>
        * matchValue
      </td>

      <td>

      </td>

      <td>

      </td>
    </tr>

    <tr>
      <td>
        * entity
      </td>

      <td>

      </td>

      <td>

      </td>
    </tr>

    <tr>
      <td>
        * operator
      </td>

      <td>

      </td>

      <td>

      </td>
    </tr>

    <tr>
      <td>
        conditionExpression
      </td>

      <td>

      </td>

      <td>

      </td>
    </tr>

    <tr>
      <td>
        allocationRule
      </td>

      <td>

      </td>

      <td>

      </td>
    </tr>

    <tr>
      <td>
        * allocation\_ref
      </td>

      <td>

      </td>

      <td>

      </td>
    </tr>

    <tr>
      <td>
        limits
      </td>

      <td>

      </td>

      <td>

      </td>
    </tr>

    <tr>
      <td>
        * pointsPerCustomer
      </td>

      <td>

      </td>

      <td>

      </td>
    </tr>

    <tr>
      <td>
        * numberOfTimesPerCustomer
      </td>

      <td>

      </td>

      <td>

      </td>
    </tr>

    <tr>
      <td>
        * totalPointsInPromotion
      </td>

      <td>

      </td>

      <td>

      </td>
    </tr>
  </tbody>
</Table>