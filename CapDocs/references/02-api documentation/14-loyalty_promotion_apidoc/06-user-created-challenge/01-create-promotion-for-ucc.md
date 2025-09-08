---
title: Create Loyalty Promotion for UCC
excerpt: Lets you create a promotion for UCC a specific loyalty program.
api:
  file: v1.json
  operationId: create-promotion-for-ucc
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
This API is used to create a loyalty promotion. A loyalty promotion rewards customers for achieving a target.

# Prerequisites

*   Authentication: Basic/OAuth authentication
*   Default access group

# Resource information

|               |                                                               |
| :------------ | :------------------------------------------------------------ |
| URI           | v1/programs`\{programId\}`/createPromotion`\{promotionType\}` |
| HTTP method   | POST                                                          |
| Pagination    | NA                                                            |
| Rate limit    | NA                                                            |
| Batch support | NA                                                            |

# API endpoint example

`https://eu.api.capillarytech.com/api_gateway/loyalty/v1/programs/699/createPromotion/simple`

# Request path parameters

| Parameter       | Data Type | Description                                                        |
| :-------------- | :-------- | :----------------------------------------------------------------- |
| `programID`     | Integer   | Unique ID of the loyalty program.                                  |
| `promotionType` | String    | Type of promotion. Supported values: `SIMPLE`, `RANGE`, `KEYWORD`. |

# Sample request body

```json
{
    "promotion": {
        "id": -1,
        "name": "promotion_name",
        "programId": 2932,
        "startDate": "2024-08-09T12:00:00+01:00",
        "endDate": "2024-08-25T12:00:00+01:00",
        "allocatePointsOn": "BILL",
        "identifier": "promotion_identfier",
        "eventName": "TARGETCOMPLETED",
        "pointsOfferType": "LOYALTY",
        "promotionType": "BILL",
        "promotionSourceType": "USER_CREATED",
        "limits": {
            "pointsPerCustomer": -1,
            "numberOfTimesPerCustomer": -1,
            "totalPointsInPromotion": -1
        },
        "promotionRestrictions": {
            "loyaltyEarningType": "ISSUE_AND_EARN",
            "isStackable": false,
            "isExclusive": false,
            "isConsideredForRanking": false,
            "targetRuleIds": [
                123
            ],
            "targetGroupIds": [
                1234567
            ],
            "restrictions": {
                "redemptionRestrictions": [
                    {
                        "name": "MAX_ALLOWED_TIMES_PER_CUSTOMER",
                        "value": 3,
                        "type": "PERIOD_BASED",
                        "periodType": "MOVING_WINDOW",
                        "periodUnit": "WEEKLY"
                    },
                    {
                        "name": "MAX_ALLOWED_TIMES_PER_PROMOTION",
                        "value": 3,
                        "type": "NON_PERIOD_BASED"
                    }
                ],
                "issualRestrictions": [
                    {
                        "name": "MAX_NUMBER_OF_ISSUALS_PER_CUSTOMER",
                        "value": 3,
                        "type": "NON_PERIOD_BASED"
                    }
                ],
                "earnRestrictions": [
                    {
                        "name": "MAX_NUMBER_OF_EARNS_PER_CUSTOMER",
                        "value": 3
                    }
                ],
                "expiryRestrictions": [
                    {
                        "name": "ISSUAL_PROMOTION_EXPIRY_BASED_ON",
                        "type": "PROMOTION",
                        "value": 10
                    }
                ]
            }
        },
        "rulesetInfos": [
            {
                "id": -1,
                "contextID": 2932,
                "orgID": 51174,
                "contextType": "program",
                "endpointName": "POINTSENGINE_ENDPOINT",
                "name": "rulesetName_uniqueue1",
                "type": "USER_CREATED",
                "startDate": 1089532593324,
                "endDate": 33593126193324,
                "active": true,
                "rules": [
                    {
                        "id": -1,
                        "exp": "true",
                        "expJSON": "{ \"arity\": \"literal\", \"value\": \"true\", \"type\": \"boolean:primitive\" }",
                        "isActive": true,
                        "caseToActions": {
                            "true": [
                                {
                                    "id": -1,
                                    "actionName": "AWARD_TARGET_POINTS_ACTION",
                                    "mandatoryPropertiesValues": {
                                        "ProRateOnSourceValue": "EVENT_DEFAULT_VALUE",
                                        "DelayStrategy": "AS_DEFINED_IN_ALLOCATION_STRATEGY",
                                        "SourceValueRoundingStrategy": "ACTUAL",
                                        "ExpiryStrategy": "81042",
                                        "AwardStrategy": "82690",
                                        "PointsRoundingStrategy": "ACTUAL",
                                        "TargetGroupId": "1234567",
                                        "TargetRuleName": "TargetRuleName"
                                    }
                                }
                            ]
                        },
                        "filterInfo": [],
                        "description": "",
                        "expDataType": "",
                        "ruleSetId": -1,
                        "updatedViaNewUI": false
                    }
                ],
                "filterInfo": [
                    {
                        "id": -1,
                        "contextType": "RULESET",
                        "name": "LoyaltyType",
                        "description": "LoyaltyType",
                        "isInclude": true,
                        "propertyToValues": {
                            "loyaltyType": [
                                "loyalty"
                            ]
                        }
                    },
                    {
                        "id": -1,
                        "contextType": "RULESET",
                        "name": "EventSource",
                        "description": "EventSource",
                        "isInclude": true,
                        "propertyToValues": {
                            "eventSource": [
                                "INSTORE"
                            ]
                        }
                    }
                ],
                "cappingInfo": [],
                "isRulesetForGlobalPromotion": "false",
                "programIds": []
            }
        ]
    }
}
```

# Request Parameters

<Table align={["left","left","left"]}>
  <thead>
    <tr>
      <th>
        Parameter (Parameters marked as \* are required)
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
        `promotion`
      </td>

      <td>
        Object
      </td>

      <td>
        Root object containing all promotion details.
      </td>
    </tr>

    <tr>
      <td>
        * `id`\*
      </td>

      <td>
        Integer
      </td>

      <td>
        Unique ID of the promotion. Set this value to -1 while creating a new promotion.
      </td>
    </tr>

    <tr>
      <td>
        * `name`\*
      </td>

      <td>
        String
      </td>

      <td>
        Unique name of the loyalty promotion. \<br/>The character limit for the name is 255 characters.
      </td>
    </tr>

    <tr>
      <td>
        * `programId`\*
      </td>

      <td>
        Integer
      </td>

      <td>
        Unique ID of the loyalty program to associate with the promotion. You can create multiple promotions under a single loyalty program.
      </td>
    </tr>

    <tr>
      <td>
        * `startDate`\*
      </td>

      <td>
        String
      </td>

      <td>
        Start date of the promotion in ISO 8601 `yyyy-mm-ddThh:mm:ss.s+z` format.
      </td>
    </tr>

    <tr>
      <td>
        * `endDate`\*
      </td>

      <td>
        String
      </td>

      <td>
        End date of the promotion in ISO 8601 `yyyy-mm-ddThh:mm:ss.s+z` format.
      </td>
    </tr>

    <tr>
      <td>
        * `allocatePointsOn`
      </td>

      <td>
        Enum
      </td>

      <td>
        Category for point allocation. Supported values: `BILL`, `LINEITEM`, `CUSTOMER`.
      </td>
    </tr>

    <tr>
      <td>
        * `identifier`\*
      </td>

      <td>
        String
      </td>

      <td>
        Unique identifier for the promotion. This is an external identifier that can be used to identify the promotion. \<br/>The character limit for the identifier is 255 characters.
      </td>
    </tr>

    <tr>
      <td>
        * `eventName`\*
      </td>

      <td>
        Enum
      </td>

      <td>
        Name of the event to associate with the promotion. Supported values: `TRANSACTIONADD`, `CUSTOMERUPDATE`, `CUSTOMERREGISTRATION`, `TARGETCOMPLETED`.
      </td>
    </tr>

    <tr>
      <td>
        * `pointsOfferType`
      </td>

      <td>
        Enum
      </td>

      <td>
        Type of loyalty promotion. Supported values: `LOYALTY` and `LOYALTY_EARNING`. Refer to the documentation on [loyalty promotions](https://docs.capillarytech.com/docs/advanced-loyalty-promotions) for more information.
      </td>
    </tr>

    <tr>
      <td>
        * `promotionType`
      </td>

      <td>
        Enum
      </td>

      <td>
        Type of promotion. Supported values: `BILL`, `LINEITEM`, `CUSTOMER`.
      </td>
    </tr>

    <tr>
      <td>
        * `promotionSourceType`
      </td>

      <td>
        Enum
      </td>

      <td>
        Source from where the promotion is created. Supported values: `PROMOTION_API`, `CAMPAIGN`, `BADGES`, `USER_CREATED`. \<br/>\<br/>Pass the value as `USER_CREATED` for creating a UCC promotion.
      </td>
    </tr>

    <tr>
      <td>
        * `limits`
      </td>

      <td>
        Object
      </td>

      <td>
        Promotion limits configuration.
      </td>
    </tr>

    <tr>
      <td>
        \-- `pointsPerCustomer`
      </td>

      <td>
        Integer
      </td>

      <td>
        Maximum points that can be issued per customer (set to `-1` for no limit).
      </td>
    </tr>

    <tr>
      <td>
        \-- `numberOfTimesPerCustomer`
      </td>

      <td>
        Integer
      </td>

      <td>
        Maximum number of times points can be issued to a customer (set to `-1` for no limit).
      </td>
    </tr>

    <tr>
      <td>
        \-- `totalPointsInPromotion`
      </td>

      <td>
        Integer
      </td>

      <td>
        Total points that can be generated during the promotion (set to `-1` for no limit).
      </td>
    </tr>

    <tr>
      <td>
        * `promotionRestrictions`
      </td>

      <td>
        Integer
      </td>

      <td>
        Restriction settings for the promotion.
      </td>
    </tr>

    <tr>
      <td>
        \-- `loyaltyEarningType`
      </td>

      <td>
        Enum
      </td>

      <td>
        Type of earning. Supported values: `ISSUE_AND_EARN` and `DIRECT_EARN`. \<br/>Refer to the documentation on [loyalty promotions](https://docs.capillarytech.com/docs/advanced-loyalty-promotions) for more information.
      </td>
    </tr>

    <tr>
      <td>
        \-- `isStackable`
      </td>

      <td>
        Boolean
      </td>

      <td>
        Indicate if the promotion is stackable. A stackable promotion refers to the application of multiple promotions within a single transaction. \<br/>\<br/>Refer to the documentation on [promotion stacking strategies](https://docs.capillarytech.com/docs/loyalty-promotion-priority-order-stacking-strategy#promotion-stacking) for more information.
      </td>
    </tr>

    <tr>
      <td>
        \-- `isExclusive`
      </td>

      <td>
        Boolean
      </td>

      <td>
        Indicate if the promotion is exclusive. Exclusive promotions are evaluated individually and do not stack with any other promotion. \<br/>For creating a UCC promotion, set this value to `false`. \<br/>\<br/>Refer to the documentation on [promotion stacking strategies](https://docs.capillarytech.com/docs/loyalty-promotion-priority-order-stacking-strategy#functionality-when-stacking-strategy-is-on) for more information.
      </td>
    </tr>

    <tr>
      <td>
        \-- `isConsideredForRanking`
      </td>

      <td>
        Boolean
      </td>

      <td>
        Indicate if the promotion is considered for ranking. Rankings allow you to order promotions based on their priority. \<br/>For creating a UCC promotion, set this value to `false`. \<br/>\<br/>Refer to the documentation on [promotion ranking](https://docs.capillarytech.com/docs/loyalty-promotion-priority-order-stacking-strategy#promotion-priority-order-ranking-promotions) for more information.
      </td>
    </tr>

    <tr>
      <td>
        \-- `targetRuleIds`\*
      </td>

      <td>
        Array
      </td>

      <td>
        List of target rule IDs.
      </td>
    </tr>

    <tr>
      <td>
        \-- `targetGroupIds`\*
      </td>

      <td>
        Array
      </td>

      <td>
        List of target group IDs.
      </td>
    </tr>

    <tr>
      <td>
        \-- `restrictions`
      </td>

      <td>
        Object
      </td>

      <td>
        Contains details on various restrictions for redemption, issual, and earning.
      </td>
    </tr>

    <tr>
      <td>
        \--- `redemptionRestrictions`
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
        \---- `name`
      </td>

      <td>
        Enum
      </td>

      <td>
        Type of redemption restriction. Supported values: \<br/>`MAX_ALLOWED_POINTS_PER_EVENT`: The maximum points that can be earned in a single event for a customer. \<br/>`MAX_ALLOWED_TIMES_PER_CUSTOMER`: The maximum number of times a promotion can be issued to a customer. \<br/>`MAX_ALLOWED_POINTS_PER_CUSTOMER`: The maximum points a customer can earn across the promotion. \<br/>`MAX_ALLOWED_TIMES_PER_PROMOTION`: The maximum number of times a promotion can be issued. \<br/>`MAX_ALLOWED_POINTS_PER_PROMOTION`: The maximum points that can be awarded across the promotion. \<br/>`MAX_REDEMPTIONS_PER_EARN_PER_CUSTOMER`: The maximum number of times a customer can redeem a promotion after earning.
      </td>
    </tr>

    <tr>
      <td>
        \---- `value`
      </td>

      <td>
        Integer
      </td>

      <td>
        Number of units corresponding to the name. Specify the value as `-1` for no limit. The maximum limit supported by the system is 100.
      </td>
    </tr>

    <tr>
      <td>
        \---- `type`
      </td>

      <td>
        Enum
      </td>

      <td>
        Type of period for restriction. Supported values: \<br/>`PERIOD_BASED`: Restriction is applied for a defined period of time. \<br/>`NON_PERIOD_BASED`: Restriction is applied for the entire duration of the promotion.
      </td>
    </tr>

    <tr>
      <td>
        \---- `periodType`
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
        \---- `periodUnit`
      </td>

      <td>
        Enum
      </td>

      <td>
        Frequency of the period. Supported values: `DAILY`, `WEEKLY`, `MONTHLY`.
      </td>
    </tr>

    <tr>
      <td>
        \--- `issualRestrictions`
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
        \---- `name`
      </td>

      <td>
        Enum
      </td>

      <td>
        Type of issual restriction. Supported values: \<br/>`MAX_NUMBER_OF_ISSUALS_PER_CUSTOMER`: Maximum number of times a promotion can be issued to a customer.
      </td>
    </tr>

    <tr>
      <td>
        \---- `value`
      </td>

      <td>
        Integer
      </td>

      <td>
        Number of units corresponding to the name. Specify the value as `-1` for no limit. The maximum limit supported by the system is 100.
      </td>
    </tr>

    <tr>
      <td>
        \---- `type`
      </td>

      <td>
        Enum
      </td>

      <td>
        Type of period for restriction. Supported values: \<br/>`PERIOD_BASED`: Restriction is applied for a defined period of time. \<br/>`NON_PERIOD_BASED`: Restriction is applied for the entire duration of the promotion.
      </td>
    </tr>

    <tr>
      <td>
        \--- `earnRestrictions`
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
        \---- `name`
      </td>

      <td>
        Enum
      </td>

      <td>
        Type of earn restriction. Supported values: \<br/>`MAX_NUMBER_OF_EARNS_PER_CUSTOMER` \<br/>`MAX_POINTS_PER_EARN_PER_CUSTOMER`
      </td>
    </tr>

    <tr>
      <td>
        \---- `value`
      </td>

      <td>
        Integer
      </td>

      <td>
        Number of units corresponding to the name. Specify the value as `-1` for no limit. The maximum limit supported by the system is 100.
      </td>
    </tr>

    <tr>
      <td>
        \--- `expiryRestrictions`
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
        \---- `name`\*
      </td>

      <td>
        Enum
      </td>

      <td>
        Action that is expiring. Supported values: \<br/>`ISSUAL_PROMOTION_EXPIRY_BASED_ON`: Expiration of the promotion issue. \<br/>`EARN_PROMOTION_EXPIRY_BASED_ON`: Expiration of the promotion earn.
      </td>
    </tr>

    <tr>
      <td>
        \---- `value`\*
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
        \---- `type`\*
      </td>

      <td>
        Enum
      </td>

      <td>
        Type of expiration. Supported values: \<br/>`PROMOTION`: The loyalty promotion expires on the date defined in `endDate`. \<br/>`CUSTOM`: Define the number of days when the loyalty promotion expires from the date of issual.
      </td>
    </tr>

    <tr>
      <td>
        * `rulesetInfos`\*
      </td>

      <td>
        Object
      </td>

      <td>
        Information about the ruleset associated with the promotion.
      </td>
    </tr>

    <tr>
      <td>
        \-- `id`
      </td>

      <td>
        Integer
      </td>

      <td>
        Unique ID of the ruleset. Set to `-1` for creating a new UCC promotion.
      </td>
    </tr>

    <tr>
      <td>
        \-- `contextID`\*
      </td>

      <td>
        Integer
      </td>

      <td>
        Unique ID of the program.
      </td>
    </tr>

    <tr>
      <td>
        \-- `orgID`\*
      </td>

      <td>
        Integer
      </td>

      <td>
        Unique ID of the organization.
      </td>
    </tr>

    <tr>
      <td>
        \-- `contextType`\*
      </td>

      <td>
        String
      </td>

      <td>
        Type of context.
      </td>
    </tr>

    <tr>
      <td>
        \-- `endpointName`\*
      </td>

      <td>
        String
      </td>

      <td>
        Name of the endpoint.
      </td>
    </tr>

    <tr>
      <td>
        \-- `name`\*
      </td>

      <td>
        String
      </td>

      <td>
        Unique name for the ruleset.
      </td>
    </tr>

    <tr>
      <td>
        \-- `type`\*
      </td>

      <td>
        Enum
      </td>

      <td>
        Type of ruleset. \<br/>For creating a UCC promotion, set this value to `USER_CREATED`.
      </td>
    </tr>

    <tr>
      <td>
        \-- `startDate`\*
      </td>

      <td>
        Integer
      </td>

      <td>
        Start date of the ruleset in Epoch time format.
      </td>
    </tr>

    <tr>
      <td>
        \-- `endDate`\*
      </td>

      <td>
        Integer
      </td>

      <td>
        End date of the ruleset in Epoch time format.
      </td>
    </tr>

    <tr>
      <td>
        \-- `active`\*
      </td>

      <td>
        Boolean
      </td>

      <td>
        Status of the ruleset (set to `true`).
      </td>
    </tr>

    <tr>
      <td>
        \-- `rules`\*
      </td>

      <td>
        Array
      </td>

      <td>
        List of rules applied to the promotion.
      </td>
    </tr>

    <tr>
      <td>
        \--- `id`
      </td>

      <td>
        Integer
      </td>

      <td>
        Unique ID of the rule (set to `-1` for creating a new rule).
      </td>
    </tr>

    <tr>
      <td>
        \--- `exp`\*
      </td>

      <td>
        Boolean
      </td>

      <td>
        Rule expression to determine if the rule is true or false.
      </td>
    </tr>

    <tr>
      <td>
        \--- `expJSON`\*
      </td>

      <td>
        String
      </td>

      <td>
        Rule expression in JSON format.
      </td>
    </tr>

    <tr>
      <td>
        \--- `isActive`\*
      </td>

      <td>
        Boolean
      </td>

      <td>
        Status of the rule.
      </td>
    </tr>

    <tr>
      <td>
        \--- `caseToActions`\*
      </td>

      <td>
        Object
      </td>

      <td>
        Defines actions to take when the rule is satisfied.
      </td>
    </tr>

    <tr>
      <td>
        \---- `actionName`\*
      </td>

      <td>
        String
      </td>

      <td>
        Name of the action.
      </td>
    </tr>

    <tr>
      <td>
        \---- `mandatoryPropertiesValues`\*
      </td>

      <td>
        Object
      </td>

      <td>
        Defines the mandatory properties for the action (e.g., `ProRateOnSourceValue`, `AwardStrategy`).
      </td>
    </tr>

    <tr>
      <td>
        \-- `filterInfo`
      </td>

      <td>
        Object
      </td>

      <td>
        Information on the scope filters applied to the ruleset.
      </td>
    </tr>

    <tr>
      <td>
        \--- `name`
      </td>

      <td>
        String
      </td>

      <td>
        Name of the filter, e.g., `LoyaltyType`.
      </td>
    </tr>

    <tr>
      <td>
        \--- `propertyToValues`
      </td>

      <td>
        Object
      </td>

      <td>
        Key-value pairs for filter properties, e.g., `loyaltyType:  "loyalty" `.
      </td>
    </tr>

    <tr>
      <td>
        \-- `cappingInfo`
      </td>

      <td>
        Object
      </td>

      <td>
        Optional capping information for the ruleset.
      </td>
    </tr>

    <tr>
      <td>
        \-- `isRulesetForGlobalPromotion`
      </td>

      <td>
        Boolean
      </td>

      <td>
        Indicates if the ruleset is for a global promotion.
      </td>
    </tr>
  </tbody>
</Table>

<br />

# Sample response

```json
{
    "status": {
        "code": 200,
        "message": "success"
    },
    "validationErrors": null,
    "data": [
        {
            "id": 200654,
            "name": "test_promo_uniqueName10",
            "promotionStatus": "COMPLETED",
            "programId": 2822,
            "startDate": "2024-08-09T00:00:00.284Z",
            "endDate": "2024-08-10T23:59:59.285Z",
            "identifier": "test_promo_uniqueIdentifier10",
            "isActive": true,
            "eventName": "TARGETCOMPLETED",
            "allocatePointsOn": "BILL",
            "limits": {
                "pointsPerCustomer": -1,
                "numberOfTimesPerCustomer": -1,
                "totalPointsInPromotion": -1,
                "totalPointsPerEventLimit": -1
            },
            "pointsOfferType": "LOYALTY",
            "promotionRestrictions": {
                "restrictions": {
                    "redemptionRestrictions": [
                        {
                            "name": "MAX_ALLOWED_TIMES_PER_CUSTOMER",
                            "value": 3,
                            "type": "PERIOD_BASED",
                            "periodType": "MOVING_WINDOW",
                            "periodUnit": "WEEKLY"
                        },
                        {
                            "name": "MAX_ALLOWED_TIMES_PER_PROMOTION",
                            "value": 3,
                            "type": "NON_PERIOD_BASED",
                            "periodType": null,
                            "periodUnit": null
                        },
                        {
                            "name": "MAX_REDEMPTIONS_PER_EARN_PER_CUSTOMER",
                            "value": 100,
                            "type": "NON_PERIOD_BASED",
                            "periodType": null,
                            "periodUnit": null
                        }
                    ],
                    "issualRestrictions": [
                        {
                            "name": "MAX_NUMBER_OF_ISSUALS_PER_CUSTOMER",
                            "value": 3
                        }
                    ],
                    "earnRestrictions": [
                        {
                            "name": "MAX_NUMBER_OF_EARNS_PER_CUSTOMER",
                            "value": 3
                        }
                    ],
                    "expiryRestrictions": [
                        {
                            "name": "ISSUAL_PROMOTION_EXPIRY_BASED_ON",
                            "value": 10,
                            "type": "PROMOTION"
                        }
                    ]
                },
                "scope": null,
                "isStackable": false,
                "isConsideredForRanking": true,
                "loyaltyEarningType": "ISSUE_AND_EARN",
                "expiryReminder": null,
                "isExclusive": false,
                "isAlwaysApply": false,
                "targetGroupIds": [
                    1234567
                ],
                "targetRuleIds": [
                    123
                ]
            }
        }
    ]
}
```

# Response parameters

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
        status
      </td>

      <td>
        Object
      </td>

      <td>
        Contains the response status.
      </td>
    </tr>

    <tr>
      <td>
        -code
      </td>

      <td>
        Integer
      </td>

      <td>
        Status code of the response (e.g., 200 for success).
      </td>
    </tr>

    <tr>
      <td>
        -message
      </td>

      <td>
        String
      </td>

      <td>
        Status message (e.g., "success").
      </td>
    </tr>

    <tr>
      <td>
        validationErrors
      </td>

      <td>
        Object
      </td>

      <td>
        Contains validation errors, if any. Null indicates no errors.
      </td>
    </tr>

    <tr>
      <td>
        data
      </td>

      <td>
        Array
      </td>

      <td>
        Contains data related to the promotion.
      </td>
    </tr>

    <tr>
      <td>
        * id
      </td>

      <td>
        Integer
      </td>

      <td>
        Unique identifier for the promotion.
      </td>
    </tr>

    <tr>
      <td>
        * name
      </td>

      <td>
        String
      </td>

      <td>
        Name of the promotion.
      </td>
    </tr>

    <tr>
      <td>
        -promotionStatus
      </td>

      <td>
        String
      </td>

      <td>
        Current status of the promotion (e.g., “LIVE”, "COMPLETED").
      </td>
    </tr>

    <tr>
      <td>
        * programId
      </td>

      <td>
        Integer
      </td>

      <td>
        ID of the associated [loyalty program.](https://docs.capillarytech.com/docs/create-a-multi-loyalty-program)
      </td>
    </tr>

    <tr>
      <td>
        * startDate
      </td>

      <td>
        String
      </td>

      <td>
        Start date of the promotion in ISO 8601 format.
      </td>
    </tr>

    <tr>
      <td>
        * endDate
      </td>

      <td>
        String
      </td>

      <td>
        End date of the promotion in ISO 8601 format.
      </td>
    </tr>

    <tr>
      <td>
        * identifier
      </td>

      <td>
        String
      </td>

      <td>
        Unique identifier for the promotion.
      </td>
    </tr>

    <tr>
      <td>
        -isActive
      </td>

      <td>
        Boolean
      </td>

      <td>
        Indicates if the promotion is active.
      </td>
    </tr>

    <tr>
      <td>
        * eventName
      </td>

      <td>
        String
      </td>

      <td>
        Event that triggers the promotion. An event refers to a specific action for example a store visit or transaction.
      </td>
    </tr>

    <tr>
      <td>
        * allocatePointsOn
      </td>

      <td>
        String
      </td>

      <td>
        Where points are allocated (e.g., "BILL").
      </td>
    </tr>

    <tr>
      <td>
        * limits
      </td>

      <td>
        Object
      </td>

      <td>
        Promotion limits.
      </td>
    </tr>

    <tr>
      <td>
        \-- pointsPerCustomer
      </td>

      <td>
        Integer
      </td>

      <td>
        Maximum points a customer can earn.
      </td>
    </tr>

    <tr>
      <td>
        (-1 indicates no limit).
      </td>

      <td>

      </td>

      <td>

      </td>
    </tr>

    <tr>
      <td>
        \-- numberOfTimesPerCustomer
      </td>

      <td>
        Integer
      </td>

      <td>
        Number of times a customer can participate.
      </td>
    </tr>

    <tr>
      <td>
        (-1 indicates no limit).
      </td>

      <td>

      </td>

      <td>

      </td>
    </tr>

    <tr>
      <td>
        \-- totalPointsInPromotion
      </td>

      <td>
        Integer
      </td>

      <td>
        Total points available in the promotion.
      </td>
    </tr>

    <tr>
      <td>
        (-1 indicates no limit).
      </td>

      <td>

      </td>

      <td>

      </td>
    </tr>

    <tr>
      <td>
        \-- totalPointsPerEventLimit
      </td>

      <td>
        Integer
      </td>

      <td>
        Total points limit per event.
      </td>
    </tr>

    <tr>
      <td>
        (-1 indicates no limit).
      </td>

      <td>

      </td>

      <td>

      </td>
    </tr>

    <tr>
      <td>
        * pointsOfferType
      </td>

      <td>
        String
      </td>

      <td>
        Type of points offered (e.g., "LOYALTY"). A points offer refers to loyalty points issued to customers
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
        Contains the restrictions applicable to the promotion. Restrictions can be configured while setting up the loyalty promotion.
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
        Contains various restriction types.
      </td>
    </tr>

    <tr>
      <td>
        \-- redemptionRestrictions
      </td>

      <td>
        Array
      </td>

      <td>
        Redemption-related restrictions. These are advanced settings for redemption.
      </td>
    </tr>

    <tr>
      <td>
        \--- name
      </td>

      <td>
        String
      </td>

      <td>
        Name of the redemption restriction
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
        Maximum allowed times per customer.
      </td>
    </tr>

    <tr>
      <td>
        \--- type
      </td>

      <td>
        String
      </td>

      <td>
        Restriction type (e.g., "PERIOD\_BASED").
      </td>
    </tr>

    <tr>
      <td>
        \--- periodType
      </td>

      <td>
        String
      </td>

      <td>
        Period type for restriction (e.g., "MOVING\_WINDOW", FIXED\_WINDOW).
      </td>
    </tr>

    <tr>
      <td>
        \--- periodUnit
      </td>

      <td>
        Array
      </td>

      <td>
        Period unit for restriction (e.g., "WEEKLY", “MONTHLY”).
      </td>
    </tr>

    <tr>
      <td>
        \-- issualRestrictions
      </td>

      <td>
        Array
      </td>

      <td>
        [Issual ](https://docs.capillarytech.com/docs/enrol-issue-loyalty-promotion#defining-limits-for-enrolment)related restrictions. An [“issual](https://docs.capillarytech.com/docs/advanced-loyalty-promotions)” refers to the issuance of a specific promotion to customers based on their behavioral events or transactions.
      </td>
    </tr>

    <tr>
      <td>
        \--- name
      </td>

      <td>
        Array
      </td>

      <td>
        Name of the issuance restriction
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
        Maximum issuances per customer.
      </td>
    </tr>

    <tr>
      <td>
        \-- earnRestrictions
      </td>

      <td>
        Array
      </td>

      <td>
        [Earn](https://docs.capillarytech.com/docs/enrol-issue-loyalty-promotion#defining-limits-for-enrolment)related restrictions. “Earn" refers to the process where a customer completes the necessary activities to qualify for a promotion.
      </td>
    </tr>

    <tr>
      <td>
        \--- name
      </td>

      <td>
        String
      </td>

      <td>
        Name of the earning restriction
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
        Maximum earnings per customer.
      </td>
    </tr>

    <tr>
      <td>
        \-- expiryRestrictions
      </td>

      <td>
        Array
      </td>

      <td>
        Expiry-related restrictions.
      </td>
    </tr>

    <tr>
      <td>
        \--- name
      </td>

      <td>
        String
      </td>

      <td>
        Name of the expiry restriction
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
        Expiry value.
      </td>
    </tr>

    <tr>
      <td>
        \--- type
      </td>

      <td>
        String
      </td>

      <td>
        Expiry type (e.g., "PROMOTION").
      </td>
    </tr>

    <tr>
      <td>
        * scope
      </td>

      <td>
        Object
      </td>

      <td>
        Scope of the promotion (if applicable).
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
        Indicates if the promotion can be combined with other promotions.
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
        Indicates if the promotion is considered for ranking.
      </td>
    </tr>

    <tr>
      <td>
        * loyaltyEarningType
      </td>

      <td>
        String
      </td>

      <td>
        Type of loyalty earning.
      </td>
    </tr>

    <tr>
      <td>
        * expiryReminder
      </td>

      <td>
        Object
      </td>

      <td>
        Expiry reminder, if any. Null indicates no reminder.
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
        Indicates if the promotion is exclusive.
      </td>
    </tr>

    <tr>
      <td>
        * isAlwaysApply
      </td>

      <td>
        Boolean
      </td>

      <td>
        Indicates if the promotion always applies.
      </td>
    </tr>

    <tr>
      <td>
        * targetGroupIds
      </td>

      <td>
        Integer
      </td>

      <td>
        List of target group IDs.
      </td>
    </tr>

    <tr>
      <td>
        * targetRuleIds
      </td>

      <td>
        Integer
      </td>

      <td>
        List of target rule IDs.
      </td>
    </tr>
  </tbody>
</Table>

# API error codes

| Code | Description                                                                                                     | Solution                                                                                 |
| :--- | :-------------------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------- |
| 4007 | Promotion identifier already exists for the program                                                             | Check the promotion id and ensure it is unique.                                          |
| 4003 | A promotion with the same name exists for the program                                                           | Check the promotion name and ensure it is unique.                                        |
| 4011 | Given start date is null or empty                                                                               | Check the promotion start date and ensure it is in the correct format                    |
| 4012 | Given end date is null or empty                                                                                 | Check the promotion end date and ensure it is in the correct format                      |
| 4074 | For SourceType UserCreated,  TargetGroupId and  TargetRuleId are mandatory                                      | Enter the TargetGroupID and TargetRuleID for the promotion                               |
| 4079 | Promotion Source Type cannot be null or empty                                                                   | Enter the promotion source type                                                          |
| 4075 | UCC Promotions should always have one RuleSet                                                                   | Ensure that only one ruleset is passed. Add the rulesets for the promotion if not added. |
| 4076 | Invalid UCC Promotions Ruleset check for ruleSetName, ContextId, OrgId, ContextType and start & End is not null | Check if the mandatory rule set fields are passed.                                       |
| 4076 | Invalid UCC Promotions Rules passed check for expression , expressionJson and name is not null                  | Check if the mandatory rule set fields are correct.                                      |
| 4080 | Invalid UCC Promotions Actions, Both key and value in cannot be null or empty                                   | Check if the mandatoryPropertiesValues key value is null or Empty.                       |
| 4078 | Invalid name in Promotions RuleSet Filter                                                                       | Check the filter name and ensure it is valid.                                            |