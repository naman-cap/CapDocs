---
title: Get Details of all Loyalty Promotions
excerpt: Lists all promotions.
api:
  file: v1.json
  operationId: get-promotion-details
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
This API lists and provides details of all the promotions available in the org. This includes the types of promotions, point and redemption restriction details, start and end dates, activation status etc, ranking and stacking information.

By default, the types of promotions, ranking and stacking are not available for all the orgs. This needs to be enabled separately. For more details on the types of promotions, refer [Types of promotions](https://docs.capillarytech.com/docs/advanced-loyalty-promotions).

## Types of promotions

There are three different types of promotions:

* GENERIC (UI term - Available without issue)
* LOYALTY (UI term - Direct issue)
* LOYALTY\_EARNING (UI term - Enrol & Issue)

The field `pointsOfferType `in the response provides information on the type of promotion.

## Limits and restrictions

If the [Types of promotions](https://docs.capillarytech.com/docs/advanced-loyalty-promotions) is enabled for your organisation, then the information regarding the limits and restrictions on issual, earning, or redemption is available in the object  *promotionRestriction*. This information is also replicated in the  *limits* and *customerUsage* objects.

# API endpoint example

```curl Sample cURL
curl --request GET \
     --url https://host/api_gateway/loyalty/v1/programs/promotions/list \
     --header 'Accept: application/json' \
     --header 'Content-Type: application/json' \
     --header 'accept: application/json'
```

# Prerequisites

*   Authentication: Basic or OAuth authentication
*   Access group resource: Read access to customer group resource

# Resource information

|                       |                                                   |
| :-------------------- | :------------------------------------------------ |
| URI                   | /api\_gateway/loyalty/v1/programs/promotions/list |
| HTTP method           | GET                                               |
| Pagination supported? | Yes                                               |
| Rate limit            | NA                                                |
| Batch support         | No                                                |

# Query Parameters

| (Parameters marked with \* are mandatory) | Data Type | Description                                                                                                                                                                                        |
| ----------------------------------------- | --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| limit\*                                   | Integer   | Number of entries in a page.                                                                                                                                                                       |
| offset\*                                  | Integer   | Page number you want to fetch.                                                                                                                                                                     |
| program                                   | Long      | Program ID  associated with the promotion.                                                                                                                                                         |
| status                                    | Enum      | Status of promotion. Valid values are COMPLETED, LIVE, UPCOMING, INACTIVE.                                                                                                                         |
| activity                                  | Enum      | Event name for promotion. Valid values re CustomerRegistration, CustomerUpdate, GenericEvent, NewBill, PointsContributionToGroup, PointsTransfer, ReturnBill,TargetCompleted, TransactionAdd, ALL. |
| startDate                                 | String    | Start date of the promotion in  ISO8601 format. Example: 2024-04-04T00:00Z                                                                                                                         |
| endDate                                   | String    | End date of promotion in  ISO8601 format. Example: 2024-04-27T23:59:59Z                                                                                                                            |
| promotionName                             | String    | Name of the promotion. In case you want to fetch data of a specific promotion.                                                                                                                     |

**Note**: startDate and endDate must appear in pairs.

```Text cURL
https://eucrm.cc.capillarytech.com/api_gateway/loyalty/v1/programs/promotions/list?limit=5&offset=1
```

# Response Parameters

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
        status
      </td>

      <td>
        Object
      </td>

      <td>
        An object containing the status code and message of the response.
      </td>
    </tr>

    <tr>
      <td>
        code
      </td>

      <td>
        Integer
      </td>

      <td>
        The status code indicating the result of the request.
      </td>
    </tr>

    <tr>
      <td>
        message
      </td>

      <td>
        String
      </td>

      <td>
        A message providing additional information about the status.
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
        An object containing validation errors, if any.
      </td>
    </tr>

    <tr>
      <td>
        data
      </td>

      <td>
        Object
      </td>

      <td>
        An object containing promotion data retrieved from the request.
      </td>
    </tr>

    <tr>
      <td>
        id
      </td>

      <td>
        Long
      </td>

      <td>
        The ID of the promotion.
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
        The description of the promotion.
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
        The status of the promotion. Values are COMPLETED, LIVE, UPCOMING, or INACTIVE
      </td>
    </tr>

    <tr>
      <td>
        lastUpdateDate
      </td>

      <td>
        String (Date)
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
        promotionType
      </td>

      <td>
        String
      </td>

      <td>
        Identifies where the promotion is applied, if it's customer level promotion or transaction level promotion.
      </td>
    </tr>

    <tr>
      <td>
        programId
      </td>

      <td>
        Long
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
        String (Date)
      </td>

      <td>
        The start date and time of the promotion.
      </td>
    </tr>

    <tr>
      <td>
        endDate
      </td>

      <td>
        String (Date)
      </td>

      <td>
        The end date and time of the promotion.
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
        Universally unique identifier of the promotion.
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
        Indicates if the promotion is currently active.
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
        pointsOfferType
      </td>

      <td>
        String
      </td>

      <td>
        The type of promotion. The types of promotion are GENERIC, LOYALTY, and LOYALTY\_EARNING.
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
        Number of units corresponding to the `name`. Specify `-1` for no limit (max limit: 100).
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
        Type of period for restriction. Possible values: `PERIOD_BASED`, `NON_PERIOD_BASED`.
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
        Type of period. Supported value: `MOVING_WINDOW`.
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
        Frequency of the period. Possible values: `DAILY`, `WEEKLY`, `MONTHLY`.
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
        Number of units corresponding to the `name`. Specify `-1` for no limit (max limit: 100).
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
        Contains information on the earn limits for a promotion (specific to enrol-and-issue promotions).
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
        Number of units corresponding to the `name`. Specify `-1` for no limit (max limit: 100).
      </td>
    </tr>

    <tr>
      <td>
        \-- expiryRestrictions
      </td>

      <td>
        Object
      </td>

      <td>
        Contains information on the expiry for a promotion (mandatory for all promotion types).
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
        Action that is expiring. Possible values:  `ISSUAL_PROMOTION_EXPIRY_BASED_ON`: The time period within which the customer must complete the activity required to issue the loyalty promotion. Once this lapses, the customer cannot earn the loyalty promotion.   `EARN_PROMOTION_EXPIRY_BASED_ON`: The time period within which the customer must complete the activity required to receive the loyalty promotion benefits. Once this lapses, the customer cannot earn the benefits.
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
        Type of expiration. Possible values: `PROMOTION`, `CUSTOM`.
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

    <tr>
      <td>
        scope
      </td>

      <td>
        String
      </td>

      <td>
        The scope of the promotion.
      </td>
    </tr>

    <tr>
      <td>
        cappingStatus
      </td>

      <td>
        Boolean
      </td>

      <td>
        Indicates if the loyalty promotion has restrictions on reward currencies. The value will be `true` or `false` only if the loyalty promotion has a fixed-window calendar.  `true`: Capping is enabled for the loyalty promotion.   `false`: Capping is disabled for the loyalty promotion.   `null`: Loyalty promotion does not have a fixed-window calendar.
      </td>
    </tr>

    <tr>
      <td>
        pageDetails
      </td>

      <td>
        Object
      </td>

      <td>
        An object containing details about the pagination of the response.
      </td>
    </tr>

    <tr>
      <td>
        pageNumber
      </td>

      <td>
        Integer
      </td>

      <td>
        The current page number.
      </td>
    </tr>

    <tr>
      <td>
        pageSize
      </td>

      <td>
        Integer
      </td>

      <td>
        The number of entries per page.
      </td>
    </tr>

    <tr>
      <td>
        totalEntries
      </td>

      <td>
        Integer
      </td>

      <td>
        The total number of entries.
      </td>
    </tr>

    <tr>
      <td>
        pageCount
      </td>

      <td>
        Integer
      </td>

      <td>
        The total number of pages in the response.
      </td>
    </tr>
  </tbody>
</Table>

<br />

```json Sample Response
{
    "status": {
        "code": 200,
        "message": "success"
    },
    "validationErrors": null,
    "data": [
        {
            "id": 56796,
            "name": "Happyhour",
            "description": "Promotion Description",
            "promotionStatus": "INACTIVE",
            "lastUpdateDate": "2024-04-16T07:39:05Z",
            "lastUpdatedBy": 606249,
            "programName": "Default Program",
            "promotionType": "BILL",
            "programId": 469,
            "startDate": "2024-04-04T00:00Z",
            "endDate": "2024-04-27T23:59:59Z",
            "identifier": "d32dd076-67b2-4b15-b52d-83f9c4785589",
            "isActive": false,
            "eventName": "TRANSACTIONADD",
            "pointsOfferType": "GENERIC",
            "promotionRestrictions": {
                "restrictions": {
                    "redemptionRestrictions": [
                        {
                            "name": "MAX_REDEMPTIONS_PER_EARN_PER_CUSTOMER",
                            "value": 100,
                            "type": "NON_PERIOD_BASED",
                            "periodType": null,
                            "periodUnit": null
                        }
                    ],
                    "issualRestrictions": [],
                    "earnRestrictions": [],
                    "expiryRestrictions": []
                },
                "scope": null,
                "isStackable": false,
                "isConsideredForRanking": false,
                "loyaltyEarningType": null,
                "expiryReminder": null,
                "isExclusive": false,
                "isAlwaysApply": false,
              	"cappingStatus": true
            }
        },
        {
            "id": 56783,
            "name": "Update Profile",
            "description": "Promotion Description",
            "promotionStatus": "INACTIVE",
            "lastUpdateDate": "2024-04-08T07:55:10Z",
            "lastUpdatedBy": 606249,
            "programName": "Default Program",
            "promotionType": "CUSTOMER",
            "programId": 469,
            "startDate": "2024-04-04T00:00Z",
            "endDate": "2024-04-30T23:59:59Z",
            "identifier": "c4576641-cce4-475a-aae5-fd2236b2d631",
            "isActive": false,
            "eventName": "CUSTOMERREGISTRATION",
            "pointsOfferType": "GENERIC",
            "promotionRestrictions": {
                "restrictions": {
                    "redemptionRestrictions": [
                        {
                            "name": "MAX_REDEMPTIONS_PER_EARN_PER_CUSTOMER",
                            "value": 100,
                            "type": "NON_PERIOD_BASED",
                            "periodType": null,
                            "periodUnit": null
                        }
                    ],
                    "issualRestrictions": [],
                    "earnRestrictions": [],
                    "expiryRestrictions": []
                },
                "scope": null,
                "isStackable": false,
                "isConsideredForRanking": false,
                "loyaltyEarningType": null,
                "expiryReminder": null,
                "isExclusive": false,
                "isAlwaysApply": false,
             	  "cappingStatus": true
            }
        },
        {
            "id": 56782,
            "name": "Specificstores",
            "description": "Promotion Description",
            "promotionStatus": "INACTIVE",
            "lastUpdateDate": "2024-04-08T07:55:32Z",
            "lastUpdatedBy": 606249,
            "programName": "Default Program",
            "promotionType": "BILL",
            "programId": 469,
            "startDate": "2024-04-04T00:00Z",
            "endDate": "2024-04-30T23:59:59Z",
            "identifier": "69511a30-b828-485c-9d7a-7a92b4e30bcf",
            "isActive": false,
            "eventName": "TRANSACTIONADD",
            "pointsOfferType": "GENERIC",
            "promotionRestrictions": {
                "restrictions": {
                    "redemptionRestrictions": [
                        {
                            "name": "MAX_REDEMPTIONS_PER_EARN_PER_CUSTOMER",
                            "value": 100,
                            "type": "NON_PERIOD_BASED",
                            "periodType": null,
                            "periodUnit": null
                        }
                    ],
                    "issualRestrictions": [],
                    "earnRestrictions": [],
                    "expiryRestrictions": []
                },
                "scope": null,
                "isStackable": false,
                "isConsideredForRanking": false,
                "loyaltyEarningType": null,
                "expiryReminder": null,
                "isExclusive": false,
                "isAlwaysApply": false,
                "cappingStatus": false
            }
        },
        {
            "id": 56747,
            "name": "Accumulatepoints",
            "description": "Promotion Description",
            "promotionStatus": "INACTIVE",
            "lastUpdateDate": "2024-04-16T07:39:36Z",
            "lastUpdatedBy": 606249,
            "programName": "Default Program",
            "promotionType": "CUSTOMER",
            "programId": 469,
            "startDate": "2024-04-03T00:00Z",
            "endDate": "2024-04-30T23:59:59Z",
            "identifier": "95010c0f-4177-45f4-9888-82d43d42a672",
            "isActive": false,
            "eventName": "TARGETCOMPLETED",
            "pointsOfferType": "GENERIC",
            "promotionRestrictions": {
                "restrictions": {
                    "redemptionRestrictions": [
                        {
                            "name": "MAX_REDEMPTIONS_PER_EARN_PER_CUSTOMER",
                            "value": 100,
                            "type": "NON_PERIOD_BASED",
                            "periodType": null,
                            "periodUnit": null
                        }
                    ],
                    "issualRestrictions": [],
                    "earnRestrictions": [],
                    "expiryRestrictions": []
                },
                "scope": null,
                "isStackable": false,
                "isConsideredForRanking": false,
                "loyaltyEarningType": null,
                "expiryReminder": null,
                "isExclusive": false,
                "isAlwaysApply": false,
               	 "cappingStatus": false
            }
        },
        {
            "id": 56746,
            "name": "Trackredeem1",
            "description": "Promotion Description",
            "promotionStatus": "COMPLETED",
            "lastUpdateDate": "2024-04-03T11:22:50Z",
            "lastUpdatedBy": 75009908,
            "programName": "Default Program",
            "promotionType": "CUSTOMER",
            "programId": 469,
            "startDate": "2024-04-03T00:00Z",
            "endDate": "2024-04-10T23:59:59Z",
            "identifier": "01a833e1-60e1-45d7-84bc-ba9154d4f86a",
            "isActive": true,
            "eventName": "TARGETCOMPLETED",
            "pointsOfferType": "GENERIC",
            "promotionRestrictions": {
                "restrictions": {
                    "redemptionRestrictions": [
                        {
                            "name": "MAX_REDEMPTIONS_PER_EARN_PER_CUSTOMER",
                            "value": 100,
                            "type": "NON_PERIOD_BASED",
                            "periodType": null,
                            "periodUnit": null
                        }
                    ],
                    "issualRestrictions": [],
                    "earnRestrictions": [],
                    "expiryRestrictions": []
                },
                "scope": null,
                "isStackable": false,
                "isConsideredForRanking": false,
                "loyaltyEarningType": null,
                "expiryReminder": null,
                "isExclusive": false,
                "isAlwaysApply": false,
              	"cappingStatus": true
            }
        }
    ],
    "pageDetails": {
        "pageNumber": 1,
        "pageSize": 5,
        "totalEntries": 88,
        "pageCount": 18
    }
}
```

# API-specific error codes

| Error code | Description                                       |
| :--------- | :------------------------------------------------ |
| 4054       | Offset or limit missing.                          |
| 4053       | Start date or end date missing.                   |
| 4057       | Start date or end date not in the correct format. |
| 2010       | Program ID incorrect.                             |