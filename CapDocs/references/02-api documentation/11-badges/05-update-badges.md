---
title: Update badges
excerpt: ''
api:
  file: v1.json
  operationId: update-badges
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
This API allows you to update badges.

> 👍 Note
>
> For detailed information about our APIs and for hands-on testing, refer documentation in [API overview](https://docs.capillarytech.com/reference/apioverview) and  step-by-step guide on making your first API call in [Make your first API call](https://docs.capillarytech.com/reference/make-your-first-api-call) .:

> ❗️ Attention
>
> You cannot claim a badge during badge creation or updation.
>
> Badge name should be unique and is case sensitive.

# Prerequisites

*   Authentication: Basic or OAuth authentication
*   Default access group

# Resource information

|               |                                   |
| :------------ | :-------------------------------- |
| URI           | /api\_gateway/v1/badges/badgeMeta |
| HTTP method   | PUT                               |
| Pagination    | NA                                |
| Rate limit    | NA                                |
| Batch support | NA                                |

# API endpoint example

`https://eucrm.cc.capillarytech.com/api_gateway/v1/badges/badgeMeta`

# Request body parameters

| Field Name                                | Data Type | Required | Description                                                                                                                                                                                                                                                                                                                                   |
| ----------------------------------------- | --------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **id**                                    | String    | Yes      | Unique badge meta ID generated during creation of the badge. Mandatory to pass the badge meta ID to update the badge.                                                                                                                                                                                                                         |
| **name**                                  | String    | Yes      | Name of the badge (e.g., "10% off on watches"). Badge name should be unique and is case sensitive.                                                                                                                                                                                                                                            |
| **description**                           | String    | No       | Brief description of the badge (e.g., "Purchase 2 watches get a $100 voucher").                                                                                                                                                                                                                                                               |
| **startOn**                               | Date Time | Yes      | Timestamp indicating when a badge starts (epoch time). Cannot be set more than 100 years in the past. Cannot be changed for live or expired badges. Upcoming badges allow updating the startOn date, even to a past date.                                                                                                                     |
| **expiresOn**                             | Date Time | Yes      | Timestamp indicating when the badge ends (epoch time). Mandatory when type=FIXED\_DATE is chosen. Badge end date should be after the start date.                                                                                                                                                                                              |
| **earnedBadgeExpiry**                     | Object    | Yes      | Object containing details about the expiry of earned badges.                                                                                                                                                                                                                                                                                  |
| **earnedBadgeExpiry.expiryType**          | Enum      | Yes      | Type of badge expiry. Supported values: "RELATIVE", "ABSOLUTE", "NEVER". Relative expiry: Based on when the badge was issued. Absolute expiry: Based on the fixed date from the badge issual. Never: The badges will never expire after issual.                                                                                               |
| **earnedBadgeExpiry.type**                | Enum      | Yes      | Type refers to the badge expiration method. Supported values: "WITH\_BADGE\_META", "FIXED\_DATE". WITH\_BADGE\_META: The expiry is based on the mandatory expiresOn parameter. FIXED\_DATE: The expiry is based on the expiry date of the incentives associated with the badge.                                                               |
| **earnedBadgeExpiry.expireWithBadgeMeta** | Boolean   | Yes      | Indicates if the badge should expire based on the mandatory parameter expiresOn.                                                                                                                                                                                                                                                              |
| **earnedBadgeExpiry.relativeExpiryType**  | Enum      | No       | Expiry type relative to the badge issue. Supported values: "DAYS", "WEEKS", "MONTHS". Applicable when expiryType is RELATIVE.                                                                                                                                                                                                                 |
| **ownership**                             | Object    | Yes      | An object containing ownership restrictions. Cannot remove an owner if it has an active badge claim associated with it.                                                                                                                                                                                                                       |
| **ownership.restrictedToOwners**          | Object    | Yes      | List of owner categories that are allowed to claim the badge. Supported values: Loyalty, Loyalty\_Promotion, Referral\_Campaigns, Journeys, Audience\_Campaigns, Membercare, Rewards\_Catalog, Goodwill\_Module, Milestones, Historical\_Import                                                                                               |
| **customerConstraints**                   | Array     | No       | List of constraints specific to customers. Applicable when earnType is EARN.                                                                                                                                                                                                                                                                  |
| **customerConstraints.constraintType**    | Enum      | No       | Type of customer constraint. Supported values: "CUSTOMER\_BADGE\_FIXED\_WINDOW", "CUSTOMER\_BADGE\_FIXED\_VALUE", "CUSTOMER\_BADGE\_ROLLING\_WINDOW", "CUSTOMER\_BADGE\_NO\_LIMIT".                                                                                                                                                           |
| **customerConstraints.durationType**      | Enum      | No       | Duration of the badge constraint. Supported values: "DAILY", "WEEKLY", "MONTHLY". If DAILY, refreshRate is mandatory. If WEEKLY, startDayOfTheWeek is mandatory (default: Monday).                                                                                                                                                            |
| **customerConstraints.refreshRate**       | Integer   | No       | Number of days the fixed window duration is.                                                                                                                                                                                                                                                                                                  |
| **customerConstraints.startDayOfTheWeek** | Enum      | No       | Day on which the cycle starts. Supported values: "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY".                                                                                                                                                                                                                |
| **customerConstraints.maxEarnLimit**      | Integer   | No       | The maximum limit a customer can earn during the week.                                                                                                                                                                                                                                                                                        |
| **customerConstraints.maxEarnForDays**    | Integer   | No       | Maximum earning limit per day. Applicable for CUSTOMER\_BADGE\_ROLLING\_WINDOW.                                                                                                                                                                                                                                                               |
| **customerConstraints.rollForDays**       | Integer   | No       | The number of days for rolling calculation. Applicable only when CUSTOMER\_BADGE\_ROLLING\_WINDOW is opted.                                                                                                                                                                                                                                   |
| **customerConstraints.maxEarnForWeeks**   | Integer   | No       | Maximum earning limit per week. Applicable only when CUSTOMER\_BADGE\_ROLLING\_WINDOW is opted.                                                                                                                                                                                                                                               |
| **customerConstraints.rollForWeeks**      | Integer   | No       | Number of weeks for rolling calculation. Applicable only when CUSTOMER\_BADGE\_ROLLING\_WINDOW is opted.                                                                                                                                                                                                                                      |
| **customerConstraints.maxEarnForMonths**  | Integer   | No       | Maximum earning limit per month. Applicable only when CUSTOMER\_BADGE\_ROLLING\_WINDOW is opted.                                                                                                                                                                                                                                              |
| **customerConstraints.rollForMonths**     | Integer   | No       | Number of months for rolling calculation. Applicable only when CUSTOMER\_BADGE\_ROLLING\_WINDOW is opted.                                                                                                                                                                                                                                     |
| **badgeConstraints**                      | Array     | No       | Restrictions that are applied on the badge. Applicable when issue type is EARN.                                                                                                                                                                                                                                                               |
| **badgeConstraints.constraintType**       | Enum      | No       | Type of badge constraint. Supported values: "BADGE\_FIXED\_WINDOW", "BADGE\_ROLLING\_WINDOW", "BADGE\_FIXED\_VALUE", "BADGE\_NO\_LIMIT".                                                                                                                                                                                                      |
| **badgeConstraints.durationType**         | Enum      | No       | Duration of the badge constraint. Supported values: "DAILY", "WEEKLY", "MONTHLY". If DAILY, refreshRate is mandatory. If WEEKLY, startDayOfTheWeek is mandatory (default: Monday).                                                                                                                                                            |
| **badgeConstraints.refreshRate**          | Integer   | No       | Number of days the fixed window duration is.                                                                                                                                                                                                                                                                                                  |
| **badgeConstraints.startDayOfTheWeek**    | Enum      | No       | Day on which the cycle starts. Supported values: "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY".                                                                                                                                                                                                                |
| **badgeConstraints.maxEarnLimit**         | Integer   | No       | The maximum limit a customer can earn during the period.                                                                                                                                                                                                                                                                                      |
| **badgeConstraints.rollType**             | Enum      | No       | Timeframe of the rolling window. Supported values: "DAYS", "WEEKS", "MONTHS".                                                                                                                                                                                                                                                                 |
| **badgeConstraints.rollValue**            | Integer   | No       | Value for rolling window calculation.                                                                                                                                                                                                                                                                                                         |
| **badgeConstraints.maxEarnLimit**         | Integer   | No       | Maximum limit a badge can earn.                                                                                                                                                                                                                                                                                                               |
| **earnType**                              | Enum      | Yes      | The method the brand can issue the badge. Supported values: "EARN", "ISSUE\_EARN". EARN: Selected customers are enrolled for the badge and upon fulfillment of the earn condition, the badge is issued. ISSUE\_EARN: The badges are issued directly to the customer who fulfills the earn condition (no enrolment to badges-related program). |
| **active**                                | Boolean   | Yes      | Indicates whether the badge is currently active.                                                                                                                                                                                                                                                                                              |
| **customFields**                          | Object    | No       | List of custom fields.                                                                                                                                                                                                                                                                                                                        |
| **customFields.customFieldName**          | String    | No       | Name of the custom field.                                                                                                                                                                                                                                                                                                                     |
| **customFields.customFieldValue**         | String    | No       | Value of the custom field.                                                                                                                                                                                                                                                                                                                    |
| **badgeGroupId**                          | String    | No       | Unique group ID associated with the badge. To add the badge to a group, pass badgeGroupId value.                                                                                                                                                                                                                                              |
| **badgeRank**                             | Integer   | No       | Badge rank is the rank of a badge within a group, the user can define the badge rank even if the group is not linked with the badge.                                                                                                                                                                                                          |

<Note title="Note">
* Fields marked with \* in the original documentation are required
* Timestamps should be in epoch time format
* The system uses the server's cluster time for determining badge expiry
* Badge names are case sensitive and must be unique
* You cannot remove an owner if it has an active badge claim associated with it\*\*\*\*
</Note>

```json Request body
 {
        "id": "8",
        "orgId": 100606,
        "name": "EARN-TYPE",
        "description": "Purchase 5 pet products in 3 months and get a pet grooming voucher",
        "startOn": 1799632870.000000000,
        "expiresOn": 1828754110.000000000,
        "earnedBadgeExpiry": {
            "expiryType": "ABSOLUTE",
            "type": "WITH_BADGE_META",
            "expiresOn": null,
            "expireWithBadgeMeta": true
        },
        "issuedBadgeExpiry": null,
        "images": [],
        "ownership": {
            "restrictedToOwners": [
                "Audience_Campaigns",
                "Loyalty",
                "Milestones"
            ],
            "claims": []
        },
        "customerConstraints": [
            {
                "constraintType": "CUSTOMER_BADGE_FIXED_VALUE",
                "maxEarnLimit": 100
            },
            {
                "constraintType": "CUSTOMER_BADGE_ROLLING_WINDOW",
                "maxEarnForDays": 1,
                "rollForDays": 1,
                "maxEarnForWeeks": 2,
                "rollForWeeks": 1,
                "maxEarnForMonths": 10,
                "rollForMonths": 1
            }
        ],
        "badgeConstraints": [
            {
                "constraintType": "BADGE_FIXED_VALUE",
                "maxEarnLimit": 1000
            },
            {
                "constraintType": "BADGE_ROLLING_WINDOW",
                "rollType": "DAYS",
                "rollValue": 1,
                "maxEarnLimit": 100
            },
            {
                "constraintType": "BADGE_ROLLING_WINDOW",
                "rollType": "MONTHS",
                "rollValue": 1,
                "maxEarnLimit": 10000
            },
            {
                "constraintType": "BADGE_ROLLING_WINDOW",
                "rollType": "WEEKS",
                "rollValue": 1,
                "maxEarnLimit": 2000
            }
        ],
        "badgeGroupId": null,
        "badgeRank": 1,
        "earnType": "EARN",
        "issuedCount": 0,
        "earnedCount": 0,
        "status": "UPCOMING",
        "createdOn": 1707897126.091000000,
        "createdBy": 75097962,
        "lastUpdatedOn": 1707897126.091000000,
        "lastUpdatedBy": 75097962,
        "active": false
    }
```
```json Request - Fixed window
{
    "id": "661e11563753c37878a8b2c7",
    "orgId": 100606,
    "name": "This is a badge",
    "description": "Purchase products worth minimum 1K in the month of March and get this badge",
    "startOn": 1808338345.000000000,
    "expiresOn": 1828754110.000000000,
    "earnedBadgeExpiry": {
        "expiryType": "ABSOLUTE",
        "type": "FIXED_DATE",
        "expiresOn": 1828754110.000000000,
        "expireWithBadgeMeta": false
    },
    "issuedBadgeExpiry": null,
    "images": [],
    "ownership": {
        "restrictedToOwners": [
            "Loyalty"
        ],
        "claims": []
    },
   "customerConstraints": [
        {
            "constraintType": "CUSTOMER_BADGE_FIXED_WINDOW",
            "referenceId": "e6791ec9-e92f-34af-bdc3-be2607fdf82c",
            "durationType": "DAYS",
            "refreshRate": 5,
            "maxEarnLimit": 1,
            "cycleStatus": "UPCOMING",
            "startDate": 1808338345.000000000,
            "endDate": 1828754110.000000000
        }
    ],
   /*  "customerConstraints": [
       
        {
            "constraintType": "CUSTOMER_BADGE_ROLLING_WINDOW",
            "maxEarnForDays": 50,
            "rollForDays": 5,
            "maxEarnForWeeks": 100,
            "rollForWeeks": 1,
            "maxEarnForMonths": 200,
            "rollForMonths": 1
        },
        {
            "constraintType": "CUSTOMER_BADGE_FIXED_VALUE",
            "maxEarnLimit": 5000
        }
    ],*/
    "badgeConstraints": [
        {
            "constraintType": "BADGE_FIXED_VALUE",
            "maxEarnLimit": 1000
        },
        {
            "constraintType": "BADGE_ROLLING_WINDOW",
            "rollType": "DAYS",
            "rollValue": 1,
            "maxEarnLimit": 100
        },
        {
            "constraintType": "BADGE_ROLLING_WINDOW",
            "rollType": "WEEKS",
            "rollValue": 1,
            "maxEarnLimit": 2000
        },
        {
            "constraintType": "BADGE_ROLLING_WINDOW",
            "rollType": "MONTHS",
            "rollValue": 1,
            "maxEarnLimit": 10000
        }
    ],
    "badgeGroupId": null,
    "badgeRank": null,
    "earnType": "EARN",
    "status": "UPCOMING",
    "createdOn": 1713246550.885000000,
    "createdBy": 75097962,
    "lastUpdatedOn": 1713246550.885000000,
    "lastUpdatedBy": 75097962,
    "customFields": {
    
    },
    "active": true
}
```
```json Request - with badge expiry
{
    "id" : "66decf4459a5c872324b9577",
    "name": "Badge Issue earn40",
	"description": "Badge With coupon benefit updated 2",
    "issuedBadgeExpiry": {
       "expiryType": "ABSOLUTE",
            "type": "FIXED_DATE",
            "expiresOn": 1726655584
    },
    "earnedBadgeExpiry": {
       "expiryType": "ABSOLUTE",
            "type": "FIXED_DATE",
            "expiresOn": 1726655584
    },
    "ownership": {
		"restrictedToOwners": [
			"Loyalty"
		],
		"claims": [{
				"ownerType": "Loyalty",
				"referenceId": "xyz"
			}
		]
	},
    "startOn": 1725964384,
    "expiresOn": 1726655584,  // Cannot be updated to past date.
    "earnType": "EARN"
}
```

# Response parameters

| Parameter                      | Description                                                                                                                                                                                                                                                                                                                            |
| ------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **data**                       | The main container for the response data.                                                                                                                                                                                                                                                                                              |
|     **id**                     | Unique identifier for the badge.                                                                                                                                                                                                                                                                                                       |
|     **orgId**                  | Identifier for the organization associated with the badge.                                                                                                                                                                                                                                                                             |
|     **name**                   | Name of the badge.                                                                                                                                                                                                                                                                                                                     |
|     **description**            | Description of the badge.                                                                                                                                                                                                                                                                                                              |
|     **startOn**                | Timestamp for when the badge starts.                                                                                                                                                                                                                                                                                                   |
|     **expiresOn**              | Timestamp for when the badge expires.                                                                                                                                                                                                                                                                                                  |
|     **earnedBadgeExpiry**      | Details about the expiry of an earned badge.                                                                                                                                                                                                                                                                                           |
|         **expiryType**         | Type of expiry for the earned badge.                                                                                                                                                                                                                                                                                                   |
|         **type**               | Type of badge expiry.                                                                                                                                                                                                                                                                                                                  |
|         **expiresOn**          | Timestamp indicating when the badge ends. This parameter is mandatory when `FIXED_DATE` is chosen. Timestamp should be in epoch time. **Note:** You can update the badge end date, but it must be after the badge's start date.                                                                                                        |
|     **issuedBadgeExpiry**      | Details about the expiry of the issued badge (null in this case).                                                                                                                                                                                                                                                                      |
|     **images**                 | Array of images related to the item.                                                                                                                                                                                                                                                                                                   |
|         **name**               | Name of the image.                                                                                                                                                                                                                                                                                                                     |
|         **fileSvcHandle**      | Service handle for the image file.                                                                                                                                                                                                                                                                                                     |
|         **url**                | URL of the image.                                                                                                                                                                                                                                                                                                                      |
|     **ownership**              | Details about the ownership of the item.                                                                                                                                                                                                                                                                                               |
|         **restrictedToOwners** | Array of owner types who have restricted access.                                                                                                                                                                                                                                                                                       |
|     **customerConstraints**    | Limit on how many badges can be issued to a particular customer.                                                                                                                                                                                                                                                                       |
|     **badgeConstraints**       | Limit on how many quantities of a reward can be given to customers.                                                                                                                                                                                                                                                                    |
|     **badgeGroupId**           | Group ID for the badge.                                                                                                                                                                                                                                                                                                                |
|     **badgeRank**              | Badge rank is the rank within a group. A user can define the badge rank even if a group is not linked with the badge.                                                                                                                                                                                                                  |
|     **earnType**               | The method by which the brand can issue the badge. Supported values: `EARN`, `ISSUE EARN`. \<br/> - **Earn:** The selected customers are enrolled for the badge, and upon fulfillment of the earn condition, the badge is issued. \<br/> - **Issue Earn:** Badges are issued directly to the customer who fulfills the earn condition. |
|     **issuedCount**            | Count of how many times the badge has been issued.                                                                                                                                                                                                                                                                                     |
|     **earnedCount**            | Count of how many times the badge has been earned.                                                                                                                                                                                                                                                                                     |
|     **status**                 | The badge can have three statuses upon creation. Supported values: `LIVE`, `UPCOMING`, `ENDED/EXPIRED`. \<br/> - **LIVE:** Badges which are in a live state and can be earned. \<br/> - **UPCOMING:** Badges which are upcoming on a future date. \<br/> - **EXPIRED/ENDED:** Badges which have expired and cannot be earned.          |
|     **createdOn**              | Timestamp for when the badge was created.                                                                                                                                                                                                                                                                                              |
|     **createdBy**              | Identifier of the user who created the badge.                                                                                                                                                                                                                                                                                          |
|     **lastUpdatedOn**          | Timestamp for the last update made to the badge.                                                                                                                                                                                                                                                                                       |
|     **lastUpdatedBy**          | Identifier of the user who last updated the badge.                                                                                                                                                                                                                                                                                     |
|     **customFields**           | List of custom fields.                                                                                                                                                                                                                                                                                                                 |
|         **customFieldName**    | Name of the custom field.                                                                                                                                                                                                                                                                                                              |
|         **customFieldValue**   | Value of the custom field.                                                                                                                                                                                                                                                                                                             |
|     **active**                 | Indicates whether the badge is active or not.                                                                                                                                                                                                                                                                                          |
| **errors**                     | Contains details of any error.                                                                                                                                                                                                                                                                                                         |
| **warnings**                   | Contains details of any warning.                                                                                                                                                                                                                                                                                                       |

```json 200
{
    "data": {
        "id": "8",
        "orgId": 100606,
        "name": "EARN-TYPE",
        "description": "Purchase 5 pet products in 3 months and get a pet grooming voucher",
        "startOn": 1799632870.000000000,
        "expiresOn": 1828754110.000000000,
        "earnedBadgeExpiry": {
            "expiryType": "ABSOLUTE",
            "type": "WITH_BADGE_META",
            "expiresOn": null,
            "expireWithBadgeMeta": true
        },
        "issuedBadgeExpiry": null,
        "images": [],
        "ownership": {
            "restrictedToOwners": [
                "Audience_Campaigns",
                "Milestones",
                "Loyalty"
            ],
            "claims": []
        },
        "customerConstraints": [
            {
                "constraintType": "CUSTOMER_BADGE_FIXED_VALUE",
                "maxEarnLimit": 100
            },
            {
                "constraintType": "CUSTOMER_BADGE_ROLLING_WINDOW",
                "maxEarnForDays": 1,
                "rollForDays": 1,
                "maxEarnForWeeks": 2,
                "rollForWeeks": 1,
                "maxEarnForMonths": 10,
                "rollForMonths": 1
            }
        ],
        "badgeConstraints": [
            {
                "constraintType": "BADGE_FIXED_VALUE",
                "maxEarnLimit": 1000
            },
            {
                "constraintType": "BADGE_ROLLING_WINDOW",
                "rollType": "WEEKS",
                "rollValue": 1,
                "maxEarnLimit": 2000
            },
            {
                "constraintType": "BADGE_ROLLING_WINDOW",
                "rollType": "MONTHS",
                "rollValue": 1,
                "maxEarnLimit": 10000
            },
            {
                "constraintType": "BADGE_ROLLING_WINDOW",
                "rollType": "DAYS",
                "rollValue": 1,
                "maxEarnLimit": 100
            }
        ],
        "tags": [],
        "badgeGroupId": null,
        "badgeRank": 1,
        "earnType": "EARN",
        "status": "UPCOMING",
        "createdOn": 1707897126.091000000,
        "createdBy": 75097962,
        "lastUpdatedOn": 1713852683.788076000,
        "lastUpdatedBy": 75097962,
        "customFields": {},
        "active": false
    },
    "errors": [],
    "warnings": []
}
```
```json Response-Fixed window
{
    "data": {
        "id": "661e11563753c37878a8b2c7",
        "orgId": 100606,
        "name": "This is a badge",
        "description": "Purchase products worth minimum 1K in the month of March and get this badge",
        "startOn": 1808338345.000000000,
        "expiresOn": 1828754110.000000000,
        "earnedBadgeExpiry": {
            "expiryType": "ABSOLUTE",
            "type": "FIXED_DATE",
            "expiresOn": 1828754110.000000000,
            "expireWithBadgeMeta": false
        },
        "issuedBadgeExpiry": null,
        "images": [],
        "ownership": {
            "restrictedToOwners": [
                "Loyalty"
            ],
            "claims": []
        },
        "customerConstraints": [
            {
                "constraintType": "CUSTOMER_BADGE_FIXED_WINDOW",
                "referenceId": "1c11e757-4f00-3bb2-8aa0-b34e25083bb3",
                "durationType": "DAYS",
                "refreshRate": 5,
                "maxEarnLimit": 1,
                "cycleStatus": "UPCOMING",
                "startDate": 1808338345.000000000,
                "endDate": 1828754110.000000000
            }
        ],
        "badgeConstraints": [
            {
                "constraintType": "BADGE_FIXED_VALUE",
                "maxEarnLimit": 1000
            },
            {
                "constraintType": "BADGE_ROLLING_WINDOW",
                "rollType": "WEEKS",
                "rollValue": 1,
                "maxEarnLimit": 2000
            },
            {
                "constraintType": "BADGE_ROLLING_WINDOW",
                "rollType": "DAYS",
                "rollValue": 1,
                "maxEarnLimit": 100
            },
            {
                "constraintType": "BADGE_ROLLING_WINDOW",
                "rollType": "MONTHS",
                "rollValue": 1,
                "maxEarnLimit": 10000
            }
        ],
        "tags": [],
        "badgeGroupId": null,
        "badgeRank": null,
        "earnType": "EARN",
        "status": "UPCOMING",
        "createdOn": 1713246550.885000000,
        "createdBy": 75097962,
        "lastUpdatedOn": 1713955758.488460000,
        "lastUpdatedBy": 75097962,
        "customFields": {},
        "active": true
    },
    "errors": [],
    "warnings": []
}
```
```json Response: With badge Expiry
{
    "data": {
        "id": "66decf4459a5c872324b9577",
        "badgeNumericId": 47,
        "orgId": 100458,
        "name": "Badge Issue earn40",
        "description": "Badge With coupon benefit updated 2",
        "startOn": 1725964384.000000000,
        "expiresOn": 1726655584.000000000,
        "earnedBadgeExpiry": {
            "expiryType": "ABSOLUTE",
            "type": "FIXED_DATE",
            "expiresOn": 1726655584.000000000,
            "expireWithBadgeMeta": false
        },
        "issuedBadgeExpiry": {
            "expiryType": "ABSOLUTE",
            "type": "FIXED_DATE",
            "expiresOn": 1726655584.000000000,
            "expireWithBadgeMeta": false
        },
        "images": [],
        "ownership": {
            "restrictedToOwners": [
                "Loyalty"
            ],
            "claims": []
        },
        "customerConstraints": [],
        "badgeConstraints": [],
        "tags": [],
        "badgeGroupId": null,
        "badgeRank": null,
        "earnType": "EARN",
        "status": "UPCOMING",
        "createdOn": 1725878084.045000000,
        "createdBy": 75130850,
        "lastUpdatedOn": 1725878207.750104000,
        "lastUpdatedBy": 75130850,
        "customFields": {},
        "active": true
    },
    "errors": [],
    "warnings": []
}
```
```json Failure: Start date cannot change after badge is live
    "errors": [
        {
            "code": 723,
            "message": "Start Date cannot change once the badge is live",
            "reference": null
        },
```
```json Failure: Start Date should be before End Date
    "errors": [
        {
            "code": 720,
            "message": "Start Date should be before End Date",
            "reference": null
        }
```
```json Failure: Expiry date cannot be past date
    "errors": [
        {
            "code": 724,
            "message": "Expiry Date cannot be past date",
            "reference": null
        }
```
```json Failure: Interchanging of fixed window to rolling window and vice versa is not allowed.
    "errors": [
        {
            "code": 826,
            "message": "Change from rolling window or fixed constraint to fixed window or vice versa is not allowed.",
            "reference": null
        }
```

# API-specific error codes

| Error code | Description                                                                                  |
| :--------- | :------------------------------------------------------------------------------------------- |
| 400        | Invalid enum value                                                                           |
| 720        | Start Date should be before End Date                                                         |
| 723        | Start Date cannot change once the badge is live                                              |
| 724        | Expiry Date cannot be past date                                                              |
| 826        | Change from rolling window or fixed constraint to fixed window or vice versa is not allowed. |