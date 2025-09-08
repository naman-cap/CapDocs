---
title: Get Reward Currency Limits
excerpt: ''
api:
  file: v1.json
  operationId: get-reward-currency-limits
deprecated: false
hidden: true
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
> ❗️ **This API is currently under enhancement, so please don't use it. This page will be updated once the API is fully ready to be used.**

<br  />

This API allows you get details on the earning limits for reward currencies (points and alternate currencies) configured for the organisation.

> 👍 Note
> 
> For detailed information about our APIs and for hands-on testing, refer documentation in [API overview](https://docs.capillarytech.com/reference/apioverview) and  step-by-step guide on making your first API call in [Make your first API call](https://docs.capillarytech.com/reference/make-your-first-api-call) .

# Prerequisites

-   Authentication: Basic/OAuth authentication 
-   Default access group
-   Unique identifier of the loyalty program (programId)

# Resource information


|               |                                                       |
| :------------ | :---------------------------------------------------- |
| URI           | /api_gateway/loyalty/v1/programs`\{programId\}`/cappings |
| HTTP method   | GET                                                   |
| Pagination    | Yes. Sorting is not supported.                        |
| Rate limit    | NA                                                    |
| Batch support | NA                                                    |

# API endpoint example


`http:/eu.api.capillarytech.com/api_gateway/loyalty/v1/programs/973/cappings`

# Path Parameters


| Parameter | Data Type | Description                       |
| :-------- | :-------- | :-------------------------------- |
| programId | Integer   | Unique ID of the loyalty program. |

# Request query parameters


| Parameter | Data Type | Description |
| --- | --- | --- |
| skip | Integer | Page number to retrieve. To view the first page, set the value to 0. |
| limit | Integer | Number of entries to display per page. For example, if the total entires are 15 and the limit is 5, the first page will display the first 5 records. The maximum supported limit is 100. |
| eventName | Enum | Filter limits criteria based on the event associated. Supported values:  
`TransactionAdd`, `TransactionUpdate`, `CustomerRegistration`, `CustomerUpdate`, `GenericEvent`, `NewBill`, `PointsContributionToGroup`, `PointsTransfer`, `ReturnBill`, `TargetCompleted`, `PointsRedemption`, `VoucherRedemption`, `PartnerProgramDeLinking`, `PartnerProgramLinking`, `PartnerProgramTierUpdate` |
| cappingName | String | Filter limits criteria by providing the name. |
| scope | Enum | Filter limits criteria based on the scope associated. Supported values:  
`INDIVIDUAL_EVENT`,`INDIVIDUAL_CUSTOMER` |
| entity | Enum | Filter limits criteria based on the reward currency being limited. Supported values:  
`POINTS`, `ALTERNATE_CURRENCIES` |
| cappingEntity | Enum | Filter limits criteria based on the entity associated with it. Supported values:  
`ALL_EVENTS`,`PROMOTION`,`TRANSACTION_ADD` |
| status | Enum | Filter limits criteria based on the current active status. Supported values:  
`true`, `false` |
| identifier | String | Filter limits criteria based on the alternate currency identifier. |

# Response body


```json
{
    "cappingConfigResponses": {
        "content": [
            {
                "eventName": null,
                "cappingName": "Test Capping",
                "scope": "INDIVIDUAL_CUSTOMER",
                "status": true,
                "cappingOn": null,
                "targetGroups": {
                    "active": true,
                    "id": 1939,
                    "name": "CappingTG2",
                    "periods": [
                        {
                            "startDate": "2025-02-01",
                            "endDate": "2025-04-28",
                            "refCode": "Cycle_1",
                            "periodStatus": "RUNNING",
                            "active": true,
                            "targetGroupId": 1939,
                            "attribution": {
                                "createdOn": "2025-04-04T00:00:00.000+0000",
                                "lastUpdatedOn": "2025-04-04T00:00:00.000+0000"
                            }
                        }
                    ],
                    "targets": [
                        {
                            "id": 2087,
                            "orgId": null,
                            "targetGroupId": 1939,
                            "name": "CappingTG2",
                            "targetType": "REGULAR_POINTS",
                            "targetEntity": "POINTS",
                            "eventName": "TransactionAdd",
                            "active": true,
                            "enrolmentMethod": "TRANSACTION",
                            "defaultValues": [
                                {
                                    "id": 14584,
                                    "periodId": 12242,
                                    "defaultValue": 100.000
                                }
                            ],
                            "targetMilestoneTriggers": [],
                            "targetAudienceFilter": null,
                            "targetRuleMetaData": null,
                            "extendedFieldInfo": null
                        }
                    ],
                    "totalPeriods": 1,
                    "targetEvaluationType": "FIXED_CALENDAR_WINDOW",
                    "recurringCycles": -1,
                    "frequency": 0,
                    "targetCycleStartDate": "2025-02-01T00:00:00.000+0000",
                    "targetCycleEndDate": "2025-04-28T00:00:00.000+0000",
                    "frequencyType": "CUSTOM",
                    "trackingType": "CAPPING"
                },
                "additionalFilters": {
                    "pointsFilters": {},
                    "lineItemFilters": {
                        "includedSkus": [],
                        "includedBrands": [],
                        "includedCategories": [],
                        "includedAttributes": {}
                    }
                },
                "entity": "POINTS",
                "limitValue": 100,
                "enrollType": null
            }
        ],
        "totalPages": 4,
        "totalElements": 4,
        "size": 1,
        "number": 0
    },
    "activeIndividualEvents": 0,
    "activeIndividualCustomers": 4
}
```

# Response parameters


| Field | Data Type | Description |
| --- | --- | --- |
| cappingConfigResponses | Object | Object containing details on configurations created for reward currency limits. |
| - content | Object | Object containing details on configurations created for reward currency limits. |
| \--eventName | String | Unique name of the event associated with the limits criteria. |
| \--cappingName | String | Unique name for the limits criteria |
| \--scope | Enum | Level at which limits is applied. Possible values:  
`INDIVIDUAL_EVENT`: Limits reward currencies (points or alternate currencies) for a single transaction or behavioural event.  
`INDIVIDUAL_CUSTOMER`: Limits reward currencies (points or alternate currencies ) across multiple transactions or behavioural events. |
| \--status | Boolean | Indicates the activity status of the limits criteria.  
`true`: Limits criteria is active.  
`false`: Limits criteria is active. |
| \--cappingOn | Enum | Criteria on which the limits are applied on. Possible values:  
`QUANTITY` - Limit based on purchase quantity.  
`SALES` - Limit based on sales amount.  
`COUNT` - Limit based on purchase count.  
`GROSS_SALES` - Limit based on gross sales.  
`REGULAR_POINTS` - Limit based on points earned through loyalty programs.  
`PROMOTIONAL_POINTS` - Limit based on points earned through loyalty promotions.  
`ALL_POINTS` - Limit based on points earned through loyalty programs and promotions.  
`REGULAR` - Limit based on alternate currencies earned through loyalty promotions.  
`PROMOTIONAL` - Limit based on alternate currencies earned through loyalty programs.  
`ALL` - Limit based on alternate currencies earned through loyalty programs and promotions. |
| \--targetGroups | Object | Object containing details of the target groups. |
| \---active | Boolean | Indicates the activity status of the target group.  
`true`: Target group is active.  
`false`: Target group is inactive. |
| \---id | Integer | Unique identifier of the target group. |
| \---name | String | Unique name of the target group. |
| \---periods | Array | Object containing time period details of the target group. |
| \----startDate | String | Start date of the target  in `YYYY-MM-DD`format. |
| \----endDate | String | End date of the target in `YYYY-MM-DD`format. |
| \----refCode | String | Reference code (identifier) for the period. |
| \----periodStatus | Enum | Current status of the period. Possible values: `RUNNING`, `ENDED` |
| \----active | Enum | Indicates the activity status of the target group.  
`true`: Target group is active.  
`false`: Target group is inactive. |
| \----targetGroupId | Integer | Unique identifier of the target group the period is part of. |
| \----attribution | Object | Object containing details on the creation and updation of the target period. |
| \------createdOn | String | Date when the target period was created in ISO-8601 with milliseconds and timezone `YYYY-MM-DDThh:mm:ss.SSS+0000` |
| \------lastUpdatedOn | String | Date when the target period was last updated on in ISO-8601 with milliseconds and timezone `YYYY-MM-DDThh:mm:ss.SSS+0000` |
| \---targets | Object | Object containing details on the targets in the target group. |
| \----id | Integer | Unique identifier of the target |
| \----orgId | Integer | Unique identifier of the organisation. |
| \----targetGroupId | Integer | Unique identifier of the target group the target is part of. |
| \----name | String | Unique name of the target. |
| \----targetType | Enum | Criteria which the target is tracking. Possible values:  
`QUANTITY` - Track purchase quantity.  
`SALES` - Track total sales amount.  
`COUNT` - Track total purchase count.  
`GROSS_SALES` - Track total on gross sales.  
`REGULAR_POINTS` - Track points earned through loyalty programs.  
`PROMOTIONAL_POINTS` - Track points earned through loyalty promotions.  
`ALL_POINTS` - Track points earned through loyalty programs and promotions.  
`REGULAR` - Track alternate currencies earned through loyalty promotions.  
`PROMOTIONAL` - Track alternate currencies earned through loyalty programs.  
`ALL` - Track alternate currencies earned through loyalty programs and promotions. |
| \----targetEntity | Enum | Type of reward currency or event the target is tracking. Possible values:  
`TRANSACTION`, `LINEITEM`, `POINTS`, `ALTERNATE_CURRENCIES` |
| \----eventName | String | Name of event (transactional or behavioural) the target is tracking. |
| \----active | Boolean | Indicates the activity status of the target.  
`true`: Target group is active.  
`false`: Target group is inactive. |
| \----enrolmentMethod | Enum | Specifies how customers are enrolled into the target. Possible values:  
`TRANSACTION`: Enrolled through transaction activity  
`IMPORT`: Enrolled through data import  
`AUDIENCE_FILTER`: Enrolled through audience filtering criteria |
| \----defaultValues | Object | Object containing details of default values set for the target. |
| \------id | Integer | Unique identifier for the default value. |
| \-----periodId | Integer | Identifier of the target period the default value applies to.  |
| \-----defaultValue | Double | The default value amount. |
| \----targetMilestoneTriggers | Object | Object containing trigger details for the milestone. |
| \----targetAudienceFilter | Object | Object containing filter details of the target. |
| \----targetRuleMetaData | Object | Object containing additional metadata information of the target rules. |
| \----extendedFieldInfo | Object | Object containing additional extended field information of the target. |
| \---totalPeriods | Integer | Total number of periods in the target group. |
| \---targetEvaluationType | Enum | Specifies how the target progress is evaluated. Possible values:  
`FIXED_CALENDAR_WINDOW`, `ROLLING_WINDOW`, `CYCLIC_WINDOW` |
| \---recurringCycles | Integer | Number of recurring cycles for the target group. A cycle is the time period for which the target period runs. If the value is `-1`, the cycles have no end date. |
| \---frequency | Integer | Number of times the cycle recurrs. |
| \---targetCycleStartDate | String | Start date of the target cycle. |
| \---targetCycleEndDate | String | End date of the target cycle. |
| \---frequencyType | Enum | Defines how often a target is evaluated or reset. Possible values:  
`DAYS`: Evaluated daily.  
`WEEKS`: Evaluated weekly.  
`MONTHS`: Evaluated monthly.  
`NO_LIMIT (-1)`: No evaluation frequency. |
| \---trackingType | Enum | Determines how the target progress is tracked. Possible values:  
`DEFAULT`,`STREAKS`,`NON_CONTINUOUS_STREAKS`,`UNIFIED`,`CAPPING` |
| \--additionalFilters | Object | Additional filters for the target.  |
| \---pointsFilters | Object | Additional filters for the points earned in the target. |
| \---lineItemFilters | Object | Additional filters for line-items purchased that affect target progress. |
| \----includedSkus | Object | Details of sku details for products purchased that affect target progress. |
| \----includedBrands | Object | Details of brands that are part of the target. |
| \----includedCategories | Object | Details of categories that are part of the target. |
| \----includedAttributes | Object | Details of attributes that are part of the target. |
| \--entity | Enum | Type of reward currency being limited. Possible values: `POINTS`, `ALTERNATE_CURRENCIES` |
| \--limitValue | Double | Limit value of the reward currency being limited. |
| \--enrollType | Enum | Type of enrollment into the limits criteria. Possible values:  
`ENROLL_VIA_AUDIENCE`: Enrolling via audience filters.  
`UPLOAD`: For enrolling via file upload. |
| \-totalPages | Integer | Total number of pages in the response. |
| \-totalElements | Integer | Total number of entries in the response. |
| \-size | Integer | Total number of entries in each page. |
| \-number | Integer | Current page number being displayed in the response. |
| \-activeIndividualEvents | Integer | Count of active individual events currently part of the limits criteria. |
| \-activeIndividualCustomers | Integer | Count of active individual customers currently part of the limits criteria. |

# API Error Codes


| Error Code | Error Message                             | Reason                                          |
| :--------- | :---------------------------------------- | :---------------------------------------------- |
| 400        | Invalid limit: less than 1 is not allowed | `limit` value provided is less than 1.          |
| 400        | Invalid offset: Must be 0 or greater      | `offset` value provided is negative or invalid. |
| 400        | Invalid entity value: XZ                  | `entity` value provided is invalid.             |
| 400        | Invalid cappingEntity value: XYZ          | `cappingEntity` value provided is invalid.      |
| 400        | Invalid scope value: XYZ                  | `scope`value provided is invalid.               |