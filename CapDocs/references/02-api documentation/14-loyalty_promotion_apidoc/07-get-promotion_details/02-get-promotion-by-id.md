---
title: Get Loyalty Promotion by ID
excerpt: Get details of the promotion using promotion ID.
api:
  file: v1.json
  operationId: get-promotion-by-id
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
This API retrieves the details of the specified promotion using the promotion ID and the corresponding program ID. It provides detailed information about the specific promotion including the type of promotion, its status, associated ruleset, program details, dates, limits, stacking, ranking, and restrictions.

By default, the types of promotions, ranking and stacking are not available for all the orgs. This needs to be enabled separately. For more details on the types of promotions, refer [Types of promotions](https://docs.capillarytech.com/docs/advanced-loyalty-promotions).

## Types of promotions

There are three different types of promotions:

* GENERIC (UI term - Available without issue)
* LOYALTY (UI term - Direct issue)
* LOYALTY\_EARNING (UI term - Enrol & Issue)

The field `pointsOfferType `in the response provides information on the type of promotion.

## Limits and restrictions

if the [Types of promotions](https://docs.capillarytech.com/docs/advanced-loyalty-promotions) are enabled for your organisation, then the information regarding the limits and restrictions on issual, earning, or redemption is available in the objects  *promotionRestriction*,  object. This information is also replicated in the  *limits* objects.

If your organisation does not have the [Types of promotions](https://docs.capillarytech.com/docs/advanced-loyalty-promotions) enabled, the details on the limits and restrictions are only available in the  *limits* object.

# API endpoint example

\<\[[https://eu.api.capillarytech.com/api\_gateway/loyalty/v1/programs/469/promotions/57099/get](https://eu.api.capillarytech.com/api_gateway/loyalty/v1/programs/469/promotions/57099/get)>

# Prerequisites

*   Authentication: Basic or OAuth authentication
*   Access group resource : Read access to customer group resource

# Resource information

|                       |                                                                                  |
| :-------------------- | :------------------------------------------------------------------------------- |
| URI                   | /api\_gateway/loyalty/v1/programs`\{programId\}`/promotions`\{promotionId\}`/get |
| HTTP method           | GET                                                                              |
| Pagination supported? | No                                                                               |
| Rate limit            | NA                                                                               |
| Batch support         | NA                                                                               |

# Path parameters

| Parameter     | Datatype | Description                                                                                                                           |
| :------------ | :------- | :------------------------------------------------------------------------------------------------------------------------------------ |
| programId\*   | Long     | Unique identifier of the loyalty program.                                                                                             |
| promotionId\* | Long     | Unique identifier of the loyalty promotion. Getting details of a loyalty promotion is currently supported by using the `promotionId`. |

```bash
curl --location 'https://eu.api.capillarytech.com/api_gateway/loyalty/v1/programs/469/promotions/57099/get' \
--header 'Content-Type: application/json' \
--header 'Accept: application/json' \
--header 'Authorization: Basic mRmMmQ0NOTMyMWYI=' \
--header 'Cookie: CS=17999bae3c0f41269ea0947f75896090'
```

# Response parameters

<Table align={["left","left","left"]}>
  <thead>
    <tr>
      <th>
        Parameter
      </th>

      <th>
        Type
      </th>

      <th>
        Description
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        id
      </td>

      <td>
        Integer
      </td>

      <td>
        The unique identifier for the promotion.
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
        The name of the promotion.
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
        A brief description of the promotion.
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
        The current status of the promotion (e.g., LIVE, PENDING).
      </td>
    </tr>

    <tr>
      <td>
        lastUpdateDate
      </td>

      <td>
        String
      </td>

      <td>
        The date and time when the promotion was last updated.
      </td>
    </tr>

    <tr>
      <td>
        lastUpdatedBy
      </td>

      <td>
        Integer
      </td>

      <td>
        The ID of the user who last updated the promotion.
      </td>
    </tr>

    <tr>
      <td>
        rulesetInfos
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
        orgName
      </td>

      <td>
        String
      </td>

      <td>
        The name of the organization associated with the ruleset.
      </td>
    </tr>

    <tr>
      <td>
        contextID
      </td>

      <td>
        Integer
      </td>

      <td>
        The ID of the context associated with the ruleset.
      </td>
    </tr>

    <tr>
      <td>
        orgID
      </td>

      <td>
        Integer
      </td>

      <td>
        The ID of the organization associated with the ruleset.
      </td>
    </tr>

    <tr>
      <td>
        contextType
      </td>

      <td>
        String
      </td>

      <td>
        The value is Program.
      </td>
    </tr>

    <tr>
      <td>
        rules
      </td>

      <td>
        Array
      </td>

      <td>
        The rules defined for the promotion.
      </td>
    </tr>

    <tr>
      <td>
        id
      </td>

      <td>
        Integer
      </td>

      <td>
        The unique identifier for the rule.
      </td>
    </tr>

    <tr>
      <td>
        exp
      </td>

      <td>
        String
      </td>

      <td>
        The expression defining the rule.
      </td>
    </tr>

    <tr>
      <td>
        expJSON
      </td>

      <td>
        String
      </td>

      <td>
        The expression in JSON format.
      </td>
    </tr>

    <tr>
      <td>
        jsonType
      </td>

      <td>
        String
      </td>

      <td>
        The JSON type of the expression.
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
        Indicates whether the rule is active.
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
        The priority of the rule.
      </td>
    </tr>

    <tr>
      <td>
        startDate
      </td>

      <td>
        Integer
      </td>

      <td>
        The start date of the rule.
      </td>
    </tr>

    <tr>
      <td>
        endDate
      </td>

      <td>
        Integer
      </td>

      <td>
        The end date of the rule.
      </td>
    </tr>

    <tr>
      <td>
        createdOn
      </td>

      <td>
        Integer
      </td>

      <td>
        The timestamp when the rule was created.
      </td>
    </tr>

    <tr>
      <td>
        caseToActions
      </td>

      <td>
        Object
      </td>

      <td>
        The actions to be taken based on the rule.
      </td>
    </tr>

    <tr>
      <td>
        ruleScope
      </td>

      <td>
        String
      </td>

      <td>
        The scope of the rule (e.g., SERVER, CLIENT).
      </td>
    </tr>

    <tr>
      <td>
        createdBy
      </td>

      <td>
        Integer
      </td>

      <td>
        The ID of the user who created the rule.
      </td>
    </tr>

    <tr>
      <td>
        modifiedBy
      </td>

      <td>
        Integer
      </td>

      <td>
        The ID of the user who last modified the rule.
      </td>
    </tr>

    <tr>
      <td>
        modifiedOn
      </td>

      <td>
        Integer
      </td>

      <td>
        The timestamp when the rule was last modified.
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
        The name of the rule.
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
        A brief description of the rule.
      </td>
    </tr>

    <tr>
      <td>
        expDataType
      </td>

      <td>
        String
      </td>

      <td>
        The data type of the expression.
      </td>
    </tr>

    <tr>
      <td>
        filterInfo
      </td>

      <td>
        Object
      </td>

      <td>
        Information about the filters applied to the rule.
      </td>
    </tr>

    <tr>
      <td>
        eventType
      </td>

      <td>
        String
      </td>

      <td>
        The type of event associated with the rule.
      </td>
    </tr>

    <tr>
      <td>
        cappingInfo
      </td>

      <td>
        Array
      </td>

      <td>
        Information about capping associated with the rule.
      </td>
    </tr>

    <tr>
      <td>
        updatedViaNewUI
      </td>

      <td>
        Boolean
      </td>

      <td>
        Indicates whether the rule was updated via the new UI.
      </td>
    </tr>

    <tr>
      <td>
        private
      </td>

      <td>
        Boolean
      </td>

      <td>
        Indicates whether the rule is private.
      </td>
    </tr>

    <tr>
      <td>
        programName
      </td>

      <td>
        String
      </td>

      <td>
        The name of the program associated with the promotion.
      </td>
    </tr>

    <tr>
      <td>
        programId
      </td>

      <td>
        Integer
      </td>

      <td>
        The ID of the program associated with the promotion.
      </td>
    </tr>

    <tr>
      <td>
        startDate
      </td>

      <td>
        String
      </td>

      <td>
        The start date of the promotion.
      </td>
    </tr>

    <tr>
      <td>
        endDate
      </td>

      <td>
        String
      </td>

      <td>
        The end date of the promotion.
      </td>
    </tr>

    <tr>
      <td>
        identifier
      </td>

      <td>
        String
      </td>

      <td>
        The universally unique identifier for the promotion.
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
        Indicates whether the promotion is active.
      </td>
    </tr>

    <tr>
      <td>
        eventName
      </td>

      <td>
        String
      </td>

      <td>
        The name of the event associated with the promotion.
      </td>
    </tr>

    <tr>
      <td>
        allocatePointsOn
      </td>

      <td>
        String
      </td>

      <td>
        Indicates where the points are allocated. The values is based on the event type.
      </td>
    </tr>

    <tr>
      <td>
        limits
      </td>

      <td>
        Object
      </td>

      <td>
        Limits and constraints for the promotion.
      </td>
    </tr>

    <tr>
      <td>
        pointsPerCustomer
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
        numberOfTimesPerCustomer
      </td>

      <td>
        Integer
      </td>

      <td>
        The maximum number of activities per customer that can allocate points.
      </td>
    </tr>

    <tr>
      <td>
        totalPointsInPromotion
      </td>

      <td>
        Integer
      </td>

      <td>
        The maximum points permitted across customers within the promotion duration.
      </td>
    </tr>

    <tr>
      <td>
        totalPointsPerEventLimit
      </td>

      <td>
        Integer
      </td>

      <td>
        Limit on the total points that can be earned per event within the promotion.
      </td>
    </tr>

    <tr>
      <td>
        useProportions
      </td>

      <td>
        Boolean
      </td>

      <td>
        Indicates whether proportions are used for the promotion.
      </td>
    </tr>

    <tr>
      <td>
        pointsOfferType
      </td>

      <td>
        String
      </td>

      <td>
        The type of promotion. GENERIC/LOYALTY/LOYALTY\_EARNING
      </td>
    </tr>

    <tr>
      <td>
        * promotionRestrictions
      </td>

      <td>
        Object
      </td>

      <td>
        Restrictions and settings for the promotion. Issual restrictions - Provides info on the restrictions on the enrolment of the customers. earnRestrictions provides information on the restrictions on the promotion issual. expiryRestrictions provide info on the enrol and issue expiry. Redemption restrictions provides information on the maximum redemptions of points per issue of promotion
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
        Type of redemption restriction. Possible values:  `MAX_ALLOWED_POINTS_PER_EVENT`:  The maximum points that can be earned for a single activity (make a transaction, redeem points etc.) done by a customer.   `MAX_ALLOWED_TIMES_PER_CUSTOMER`: The maximum number of activities (make a transaction, redeem points etc.) a customer can do to earn points.   `MAX_ALLOWED_POINTS_PER_CUSTOMER`:The maximum number of points a customer can earn from a promotion.   `MAX_ALLOWED_TIMES_PER_PROMOTION`: The maximum number of activities (make a transaction, redeem points etc.) allowed across all customers in the brand for the promotion.   `MAX_ALLOWED_POINTS_PER_PROMOTION`:The maximum number of points available across all customers in the brand for the promotion.   `MAX_REDEMPTIONS_PER_EARN_PER_CUSTOMER`:The maximum number of times a customer can redeem a promotion after earning
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
        Type of period for restriction. Possible values:   `PERIOD_BASED`: Restriction is applied for a defined period of time.   `NON_PERIOD_BASED`: Restriction is applied for the entire duration of the promotion.
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
        Frequency of the period. Possible values: `DAILY`, `WEEKLY`, `MONTHLY `.
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
        Type of issual restriction. Possible values:  `MAX_NUMBER_OF_ISSUALS_PER_CUSTOMER`: Maximum number of times a promotion can be issued to a customer.
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
        Contains information on the earn limits for a promotion. This is specific for [enrol and issue](https://docs.capillarytech.com/reference/enrol-and-issue-promotion)  type promotion.
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
        Type of earn restriction. Possible values:  `MAX_NUMBER_OF_EARNS_PER_CUSTOMER`: The maximum number of times a loyalty promotion can be issued to a customer.   `MAX_NUMBER_OF_EARNS_PER_PROMOTION`: The  maximum number of times a loyalty promotion can be issued across customers.   `MAX_POINTS_PER_EARN_PER_CUSTOMER`: The maximum number of points a customer can earn in a single event from a promotion.
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
        \-- expiryRestrictions\\
      </td>

      <td>
        Object
      </td>

      <td>
        Contains information on the expiry for a promotion. This is mandatory for both [enrol and issue](https://docs.capillarytech.com/reference/enrol-and-issue-promotion)  and [direct issue](https://docs.capillarytech.com/docs/direct-issue-loyalty-promotion)  types of promotion.
      </td>
    </tr>

    <tr>
      <td>
        \--- name\\
      </td>

      <td>
        Enum
      </td>

      <td>
        Action that is expiring. Possible values:  `ISSUAL_PROMOTION_EXPIRY_BASED_ON`: The time period within which the customer must complete the activity required to issue the loyalty promotion. Once this lapses, the customer cannot earn the loyalty promotion.   `EARN_PROMOTION_EXPIRY_BASED_ON`: The time period within which the customer must complete the activity required to receive the loyalty promotion benefits. Once this lapses, the customer cannot earn the benefits.
      </td>
    </tr>

    <tr>
      <td>
        \--- type\\
      </td>

      <td>
        Enum
      </td>

      <td>
        Type of expiration. Possible values:  `PROMOTION`: The loyalty promotion expires on the date defined in `endDate`   `CUSTOM`:  Define the number of days when the loyalty promotion expires from the date of issual.
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
        isAlwaysApply
      </td>

      <td>
        Boolean
      </td>

      <td>
        Indicates whether the promotion is always applied.
      </td>
    </tr>

    <tr>
      <td>
        isStackable
      </td>

      <td>
        Boolean
      </td>

      <td>
        Indicates whether the promotion is stackable.
      </td>
    </tr>

    <tr>
      <td>
        isConsideredForRanking
      </td>

      <td>
        Boolean
      </td>

      <td>
        Indicates whether the promotion is considered for ranking.
      </td>
    </tr>

    <tr>
      <td>
        loyaltyEarningType
      </td>

      <td>
        String
      </td>

      <td>
        This parameter is not in use.
      </td>
    </tr>

    <tr>
      <td>
        expiryReminder
      </td>

      <td>
        String
      </td>

      <td>
        The expiry reminder settings for the promotion.
      </td>
    </tr>

    <tr>
      <td>
        isExclusive
      </td>

      <td>
        Boolean
      </td>

      <td>
        Indicates whether the promotion is exclusive.
      </td>
    </tr>
  </tbody>
</Table>

<br />

```json Response
{
    "status": {
        "code": 200,
        "message": "success"
    },
    "validationErrors": null,
    "data": [
        {
            "id": 57099,
            "name": "test enroll and issue",
            "description": "Promotion Description",
            "promotionStatus": "LIVE",
            "lastUpdateDate": "2024-04-10T12:59:11Z",
            "lastUpdatedBy": 75069206,
            "rulesetInfos": [
                {
                    "id": 126289300,
                    "orgName": "Bukl Enterprises",
                    "contextID": 469,
                    "orgID": 100458,
                    "contextType": "program",
                    "rules": [
                        {
                            "id": 126450375,
                            "exp": "true",
                            "expJSON": "{ \"arity\": \"literal\", \"value\": \"true\", \"type\": \"boolean:primitive\" }",
                            "jsonType": "JNODE",
                            "isActive": true,
                            "priority": -1,
                            "startDate": 1081601860018,
                            "endDate": 33585195460018,
                            "createdOn": 1712753899436,
                            "caseToActions": {
                                "true": [
                                    {
                                        "id": 126590124,
                                        "actionName": "PE_ISSUE_VOUCHER_ACTION",
                                        "actionClass": "com.capillary.shopbook.pointsengine.endpoint.impl.action.PointsEngineIssueVoucherActionImpl",
                                        "mandatoryPropertiesValues": {
                                            "VoucherSeriesId": "349357"
                                        },
                                        "mandatoryComplexPropertiesValues": {},
                                        "description": "17% off on all products"
                                    }
                                ]
                            },
                            "ruleScope": "SERVER",
                            "createdBy": 5036393,
                            "modifiedBy": 5036393,
                            "modifiedOn": 1712753950845,
                            "name": "Rule 1",
                            "description": "",
                            "expDataType": null,
                            "filterInfo": [],
                            "ruleSetId": 126289300,
                            "updatedViaNewUI": false
                        }
                    ],
                    "ruleScope": "SERVER",
                    "startDate": 1712707200000,
                    "endDate": 1717199999000,
                    "createdOn": 1712753899436,
                    "createdBy": 5036393,
                    "modifiedBy": 5036393,
                    "modifiedOn": 1712753950845,
                    "name": "ruleset_20240410125740",
                    "packageName": "",
                    "description": "",
                    "filterInfo": [
                        {
                            "id": 126393617,
                            "orgID": 100458,
                            "ruleID": -1,
                            "name": "LoyaltyType",
                            "className": "com.capillary.shopbook.emf.impl.filter.LoyaltyTypeFilterImpl",
                            "isInclude": true,
                            "propertyToValues": {
                                "loyaltyType": [
                                    "loyalty"
                                ]
                            }
                        },
                        {
                            "id": 126393618,
                            "orgID": 100458,
                            "ruleID": -1,
                            "name": "EventSource",
                            "className": "com.capillary.shopbook.emf.impl.filter.EventSourceFilterImpl",
                            "isInclude": true,
                            "propertyToValues": {
                                "eventSource": [
                                    "INSTORE"
                                ]
                            }
                        }
                    ],
                    "eventType": null,
                    "cappingInfo": [],
                    "updatedViaNewUI": false,
                    "private": false
                }
            ],
            "programName": "Default Program",
            "programId": 469,
            "startDate": "2024-04-10T00:00Z",
            "endDate": "2024-05-31T23:59:59Z",
            "identifier": "10c2fc95-acd4-476b-9784-9ccb7a410874",
            "isActive": true,
            "eventName": "TRANSACTIONADD",
            "allocatePointsOn": "BILL",
            "limits": {
                "pointsPerCustomer": 0,
                "numberOfTimesPerCustomer": 0,
                "totalPointsInPromotion": 0,
                "totalPointsPerEventLimit": 0
            },
            "useProportions": false,
            "pointsOfferType": "LOYALTY_EARNING",
            "promotionRestrictions": {
                "restrictions": {
                    "redemptionRestrictions": [
                        {
                            "name": "MAX_REDEMPTIONS_PER_EARN_PER_CUSTOMER",
                            "value": 10,
                            "type": "NON_PERIOD_BASED",
                            "periodType": "MOVING_WINDOW",
                            "periodUnit": "DAILY"
                        }
                    ],
                    "issualRestrictions": [
                        {
                            "name": "MAX_NUMBER_OF_ISSUALS_PER_CUSTOMER",
                            "value": 10
                        }
                    ],
                    "earnRestrictions": [
                        {
                            "name": "MAX_NUMBER_OF_EARNS_PER_CUSTOMER",
                            "value": 10
                        },
                        {
                            "name": "MAX_POINTS_PER_EARN_PER_CUSTOMER",
                            "value": -1
                        }
                    ],
                    "expiryRestrictions": [
                        {
                            "name": "EARN_PROMOTION_EXPIRY_BASED_ON",
                            "value": 0,
                            "type": "PROMOTION"
                        },
                        {
                            "name": "ISSUAL_PROMOTION_EXPIRY_BASED_ON",
                            "value": 0,
                            "type": "PROMOTION"
                        }
                    ]
                },
                "scope": null,
                "isStackable": false,
                "isConsideredForRanking": false,
                "loyaltyEarningType": "ISSUE_AND_EARN",
                "expiryReminder": null,
                "isExclusive": false,
                "isAlwaysApply": false
            }
        }
    ]
}
```

# API-specific error codes

| Error code | Description              |
| :--------- | :----------------------- |
| 4029       | Promotion ID is invalid. |
| 2010       | Program ID is invalid.   |