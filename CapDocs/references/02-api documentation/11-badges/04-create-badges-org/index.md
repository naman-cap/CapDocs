---
title: Create badges
excerpt: ''
api:
  file: v1.json
  operationId: create-badges-org
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
This API allows you to create new badges. 

> 👍 Note
> 
> For detailed information about our APIs and for hands-on testing, refer documentation in [API overview](https://docs.capillarytech.com/reference/apioverview) and  step-by-step guide on making your first API call in [Make your first API call](https://docs.capillarytech.com/reference/make-your-first-api-call) .

> ❗️ Attention
> 
> You cannot claim a badge during badge creation or updation.
> 
> Badge name should be unique and is case sensitive.

# Prerequisites

-   Authentication: Basic or OAuth authentication 
-   Default access group 

# Resource information

|               |                                  |
| :------------ | :------------------------------- |
| URI           | /api_gateway/v1/badges/badgeMeta |
| HTTP method   | POST                             |
| Pagination    | NA                               |
| Rate limit    | NA                               |
| Batch support | NA                               |

# API endpoint example

`https://eucrm.cc.capillarytech.com/api_gateway/v1/badges/badgeMeta`

# Header

<HTMLBlock>{`
<table style="width: 100%; border-collapse: collapse;">
<thead>
<tr>
  <th style="border: 1px solid #ddd; padding: 8px;">Header</th>
  <th style="border: 1px solid #ddd; padding: 8px;">Value</th>
  <th style="border: 1px solid #ddd; padding: 8px;">Description</th>
</tr>
</thead>
<tbody>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>X-CAP-BADGES-MIGRATION</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>migration</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>It enables you to use historical badges. If you are enabling this header, you can use a historical badge and it allows you to define a past date in the StartOn field.<br><strong>Notes:</strong>  </p>
<ul>
<li><ul>
<li>RequestId can be either passed in API headers or will be auto-generated for not added for all imported records in a single batch.</li>
</ul>
</li>
</ul>
</td>
</tr>
</tbody>
</table>
`}</HTMLBlock>

# Request body parameters

<HTMLBlock>{`
<table style="width: 100%; border-collapse: collapse;">
<thead>
<tr>
  <th style="border: 1px solid #ddd; padding: 8px;">Field Name</th>
  <th style="border: 1px solid #ddd; padding: 8px;">Data Type</th>
  <th style="border: 1px solid #ddd; padding: 8px;">Description</th>
</tr>
</thead>
<tbody>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>name*</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>String</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Name of the badge. Ex: 10% off on watches.<br>Badge name should be unique and is case sensitive.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>description</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>String</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Brief description of the badge. Ex: Purchase 2 watches get a $100 voucher.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>startOn*</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Date Time</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Timestamp indicating when the badge starts. It cannot be set more than 100 years in the past.<br>-Timestamp in epoch time.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>expiresOn*</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Date Time</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Timestamp indicating when the badge ends.<br>Timestamp in epoch time.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>earnedBadgeExpiry*</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Object</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Object containing details about the expiry of earned badges.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>expiryType*</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Enum</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Type of badge expiry.<br>Supported values: &quot;RELATIVE&quot;,&quot;ABSOLUTE&quot;,&quot;NEVER&quot;<br>Relative expiry: Based on when the badge was issued.<br>Absolute expiry: Based on the fixed date from the badge issual.<br>Never: The badges will never expire after issual.<br>When the expiryType of the badge is set to NEVER, then the badge expiry is set to 100 years from now.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>type*</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Enum</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Type refers to the badge expiration method based on fixed date or badge_meta.<br>Supported values: WITH_BADGE_META, FIXED_DATE  </p>
<p>1f. WITH_BADGE_META: The expiry of the badge is based on the mandatory <code>expiresOn</code> parameter.<br>2. FIXED_DATE: The expiry of the badge is based on the expiry date of the incentives associated with the badge.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>expiresOn</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Date</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Timestamp indicating when the badge expires. It is mandatory to pass this <code>expiresOn </code>parameter when FIXED_DATE is chosen.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>expireWithBadgeMeta*</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Boolean</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Indicates if the badge should expire based on the mandatory parameter <code>expiresOn </code>.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>relativeExpiryType</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Enum</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Expiry type relative to the badge issue.<br>Supprted values:DAYS/WEEKS/MONTHS.<br>Applicable when expiryType is RELATIVE.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>ownership*</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Object</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>An object containing ownership restrictions.  </p>
<p>You cannot remove an owner if it has an active badge claim associated with it. For example, you cannot remove Loyalty as the owner if there is an active badge associated with it.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>restrictedToOwners*</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Object</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p> List of owner categories that are allowed to claim the badge. The owner indicates the module where the badge will be used.<br>Supported values: Loyalty, Loyalty_Promotion, Referral_Campaigns, Journeys, Audience_Campaigns, Rewards_Catalog, Goodwill_Module, Milestones, Historical_Import</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>customerConstraints</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Array</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>List of constraints specific to customers.  This is applicable when earnType is EARN</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>constraintType</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Enum</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Type of customer constraint. Customer constraints are the restrictions applied by the brands to have control on the issuals of badges to a particular customer.<br>Supported values: &quot;CUSTOMER_BADGE_FIXED_WINDOW&quot; , &quot;CUSTOMER_BADGE_FIXED_VALUE&quot;,  &quot;CUSTOMER_BADGE_ROLLING_WINDOW&quot; and &quot;CUSTOMER_BADGE_NO_LIMIT&quot;.  </p>
<p>CUSTOMER_BADGE_FIXED_WINDOW: Refers to the fixed earn limit for the customer.<br>In this constraint type, the system creates fixed windows based on the duration type chosen, during this time frame the customer can earn the badge.  </p>
<p>CUSTOMER_BADGE_ROLLING_WINDOW refers to the customer&#39;s earning limit calculated over a certain period in the past day/week/month.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>durationType</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Enum</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Duration of the badge constraint. Supported values: DAILY, WEEKLY, MONTHLY.<br>If durationType is set to Daily, refreshRate is a mandatory parameter. The system will create daily windows for the duration of the promotion.  </p>
<p>If durationType is set to Weekly, startDayOfTheWeek becomes a mandatory parameter, default value: Monday.<br>For weekly, the system creates cycles as per the logic given below:  </p>
<p>- Badge start date - 25 Sep  </p>
<ul>
<li>Badge end date - 30 Oct</li>
<li>Limit cycles will be 25 Sep - 1 Oct, 2 Oct - 8 Oct, 9 Oct - 15 Oct. So on till 30 Oct.</li>
</ul>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>refreshRate</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Integer</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Refers to the number of days the fixed window duration is.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>startDayOfTheWeek</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Enum</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Day on which the cycle starts. Supported values: MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY, SUNDAY.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>maxEarnLimit</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Integer</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>The maximum limit a customer can earn during the week.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>maxEarnForDays</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Integer</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Maximum earning limit per day<br> This is applicable for CUSTOMER_BADGE_ROLLING_WINDOW.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>rollForDays</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Integer</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>The number of days for rolling calculation. Applicable only when CUSTOMER_BADGE_ROLLING_WINDOW is opted.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>maxEarnForWeeks</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Integer</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Maximum earning limit per week. Applicable only when CUSTOMER_BADGE_ROLLING_WINDOW is opted.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>rollForWeeks</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Integer</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Number of weeks for rolling calculation. Applicable only when CUSTOMER_BADGE_ROLLING_WINDOW is opted.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>maxEarnForMonths</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Integer</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Maximum earning limit per month. Applicable only when CUSTOMER_BADGE_ROLLING_WINDOW is opted.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>rollForMonths</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Integer</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Number of months for rolling calculation. Applicable only when CUSTOMER_BADGE_ROLLING_WINDOW is opted.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>badgeConstraints</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Array</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Restrictions that are applied on the badge.<br>This is applicable when issue type is EARN.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>constraintType</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Enum</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Type of badge constraint. Badge constraints are the restrictions applied by the brands on the badges to create a limit the overall badges that can be issued to customer.  </p>
<p>Supported values: &quot;BADGE_FIXED_WINDOW&quot;, &quot;BADGE_ROLLING_WINDOW&quot;, &quot;BADGE_FIXED_VALUE&quot;,&quot;BADGE_NO_LIMIT&quot;.<br>BADGE_FIXED_WINDOW refers to the fixed earn limit of the badge. The system will create fixed windows based on the duration type chosen.<br>BADGE_ROLLING_WINDOW refers to the badge earn limit calculated over a certain period in the past day/week/month.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>durationType</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Enum</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Duration of the badge constraint. Supported values: DAILY, WEEKLY, MONTHLY.<br>If durationType is set to Daily, refreshRate is a mandatory parameter. The system will create daily windows for the duration of the promotion.  </p>
<p>If durationType is set to Weekly, startDayOfTheWeek becomes a mandatory parameter, default value: Monday.<br>For weekly, the system will create cycles as per the logic given below:  </p>
<ul>
<li>Badge start date - 25 Sep</li>
<li>Badge end date - 30 Oct</li>
<li>Limit cycles will be 25 Sep - 1 Oct, 2 Oct - 8 Oct, 9 Oct - 15 Oct. So on till 30 Oct.</li>
</ul>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>refreshRate</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Integer</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Refers to the number of days the fixed window duration is.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>startDayOfTheWeek</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Enum</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Day on which the cycle starts. Supported values: MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY, SUNDAY.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>maxEarnLimit</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Integer</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>The maximum limit a customer can earn during the period.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>rollType</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Enum</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Timeframe of the rolling window.<br>Supprted values:DAYS/WEEKS/MONTHS</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>rollValue</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Integer</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Value for rolling window calculation.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>maxEarnLimit</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Integer</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Maximum limit a badge can earn.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>earnType*</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Enum</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>The method the brand can issue the badge.<br>Supported values: EARN, ISSUE_EARN.<br>**Earn: **The selected customers are enrolled for the badge and upon fulfillment of the earn condition, the badge is issued.<br><strong>Issue Earn:</strong> The Badges are issued directly to the customer who fulfills the earn condition (no enrolment to badges-related program).<br>Note: If the earnType is ISSUE_EARN, use the request body, <strong>Issue Earn Type</strong> tab below.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>defaultTillId</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Integer</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Unique till ID. A Till is a POS machine where the billings happen.<strong>NOTE:</strong> If the defaultTillId is not defined, the createdBy field can be used to identify the user who created the badge.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>active*</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Boolean</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Indicates whether the badge is currently active.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>customFields</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Object</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>List of custom fields.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>customFieldName</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>String</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Name of the custom field</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>customFieldValue</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>String</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Value of the custom field.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>badgeGroupId</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>String</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Unique group ID associated with the badge.<br>To add the badge to a group, pass <code>badgeGroupId</code> value.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>badgeRank</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Integer</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Badge rank is the rank of a badge within a group, the user can define the badge rank even if the group is not linked with the badge.</p>
</td>
</tr>
</tbody>
</table>
`}</HTMLBlock>

```json Earn Type- Fixed window
{
    "name": "Badge Issue earnn",
    "description": "Make 5 transactions",
    "startOn": 1738348865,
    "expiresOn": 1769841665,
    "earnType": "ISSUE_EARN",
    "badgeRank": 3,
    "earnedBadgeExpiry": {
        "relativeExpirytype": "WEEKS",
        "value": 2,
        "expiryType": "RELATIVE"
    },
    "issuedBadgeExpiry": {
        "type": "FIXED_DATE",
        "expiresOn": 1926235957,
        "expiryType": "ABSOLUTE"
    },
    "isActive": true,
    "ownership": {
        "restrictedToOwners": [
            "Loyalty",
            "Audience_Campaigns"
        ]
    },
    "images": [
        {
            "name": "Issued",
            "fileSvcHandle": "qwer-8634-8938",
            "url": "https://firebasestorage.googleapis.com/v0/b/createbadges.appspot.com/o/images%2Fsuccess1.jpg?alt=media&token=66b2f0bc-9c55-4e33-a5e9-c6be96d94f2d",
            "tag": "EARNED"
        }
    ],
    "customerConstraints": [
        {
            "constraintType": "CUSTOMER_BADGE_FIXED_WINDOW",
            "maxEarnLimit": 2,
            "durationType": "DAYS",
            "refreshRate": 3,
            "startDayOfTheWeek": 1
        }
    ],
    "badgeConstraints": [
        {
            "constraintType": "BADGE_FIXED_VALUE",
            "maxEarnLimit": 10000
        },
        {
            "constraintType": "BADGE_ROLLING_WINDOW",
            "rollType": "DAYS",
            "rollValue": 1,
            "maxEarnLimit": 300
        },
        {
            "constraintType": "BADGE_ROLLING_WINDOW",
            "rollType": "WEEKS",
            "rollValue": 1,
            "maxEarnLimit": 3000
        }
    ]
}
```
```json Issue Earn Type- Fixed window
{
    "name": "Badge Issue earn",
    "description": "Make 5 transactions",
    "startOn": 1716803487,
    "expiresOn": 1726804000,
     "earnType": "ISSUE_EARN",
         "badgeRank": 3,
    "earnedBadgeExpiry": {
        "relativeExpirytype": "WEEKS",
        "value": 2,
        "expiryType": "RELATIVE"
    },
    "issuedBadgeExpiry": {
        "type": "FIXED_DATE",
        "expiresOn": 1926235957,
        "expiryType": "ABSOLUTE"
    },
    "isActive": true,
    "ownership": {
        "restrictedToOwners": [
            "Loyalty",
            "Audience_Campaigns"
        ]
    },
  "images": [
    {
      "name": "Issued",
      "fileSvcHandle": "qwer-8634-8938",
        "url": "https://firebasestorage.googleapis.com/v0/b/createbadges.appspot.com/o/images%2Fsuccess1.jpg?alt=media&token=66b2f0bc-9c55-4e33-a5e9-c6be96d94f2d",
        "tag": "EARNED"
    }
  ],
"customerConstraints": [
    {
      "constraintType": "CUSTOMER_BADGE_FIXED_WINDOW",
      "maxEarnLimit": 2,
      "durationType":"DAYS",
      "refreshRate":3,
      "startDayOfTheWeek":1
    }
],
    "badgeConstraints": [
        {
            "constraintType": "BADGE_FIXED_VALUE",
            "maxEarnLimit": 10000
        },
        {
            "constraintType": "BADGE_ROLLING_WINDOW",
            "rollType": "DAYS",
            "rollValue": 1,
            "maxEarnLimit": 300
        },
        {
            "constraintType": "BADGE_ROLLING_WINDOW",
            "rollType": "WEEKS",
            "rollValue": 1,
            "maxEarnLimit": 3000
        }
    ]
}
```
```json Earn Type- Rolling window
{
    "name": "Badge_Earn",
    "description": "Purchase 5 pet products in 3 months and get a pet grooming voucher",
    "startOn": 1716803487,
    "expiresOn": 1726804000,
    "earnedBadgeExpiry": {
        "expiryType": "ABSOLUTE",
        "type": "WITH_BADGE_META",
        "expireWithBadgeMeta": true
    },
    "ownership": {
        "restrictedToOwners": [
            "Loyalty",
            "Milestones"
        ]   
    },
    "customerConstraints": [
        {
            "constraintType": "CUSTOMER_BADGE_FIXED_VALUE",
            "maxEarnLimit": 100
        }
    ],
    "badgeConstraints": [
           {
      		"constraintType": "BADGE_FIXED_WINDOW",
      		"maxEarnLimit": 2,
      		"durationType":"DAYS",
      		"refreshRate":3,
      		"startDayOfTheWeek":1
   		 }
    ],
    "earnType": "EARN",
    "tags": [
        {
            "name": "Type1",
            "value": "Birthday"
        },
        {
            "name": "Priority",
            "value": "1"
        },
        {
            "name": "category",
            "value": "rare"
        }
    ],
    "active": false
}
```
```json Issue earn type- Rolling window
{
    "name": "Badge_Issue_earntype",
    "description": "Make 5 transactions in a month, get a badge and 10% off coupon",
    "startOn": 1716803487,
    "expiresOn": 1726804000,
     "earnType": "ISSUE_EARN",
    "earnedBadgeExpiry": {
        "relativeExpirytype": "WEEKS",
        "value": 2,
        "expiryType": "RELATIVE"
    },
    "issuedBadgeExpiry": {
        "type": "FIXED_DATE",
        "expiresOn": 1926235957,
        "expiryType": "ABSOLUTE"
    },
    "isActive": true,
    "ownership": {
        "restrictedToOwners": [
            "Loyalty",
            "Audience_Campaigns"
        ]
    },
    "customerConstraints": [
       
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
    ],
    "badgeConstraints": [
        {
            "constraintType": "BADGE_FIXED_VALUE",
            "maxEarnLimit": 10000
        },
        {
            "constraintType": "BADGE_ROLLING_WINDOW",
            "rollType": "DAYS",
            "rollValue": 1,
            "maxEarnLimit": 300
        },
        {
            "constraintType": "BADGE_ROLLING_WINDOW",
            "rollType": "WEEKS",
            "rollValue": 1,
            "maxEarnLimit": 3000
        }
    ]
}
```
```json Active=false
{
    "name": "test6578791",
    "description": "Purchase 5 pet products in 3 months and get a pet grooming voucher",
    "startOn": 1799632870,
    "expiresOn": 1828754110,
    "earnedBadgeExpiry": {
        "expiryType": "ABSOLUTE",
        "type": "WITH_BADGE_META",
        "expireWithBadgeMeta": true
    },
    "ownership": {
        "restrictedToOwners": [
            "Loyalty",
            "Milestones"
        ],
        "claims": [
            {
                "ownerType": "Loyalty",
                "referenceId": "626"
            }
        ]
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
    "earnType": "EARN",
            "points": 100,
            "programId": 626,
            "promotionId": 80332,
            "allocationStrategyId": 1489,
            "expirationStrategyId": 3843
        }
    ],
    "tags": [
        {
            "name": "Type1",
            "value": "Birthday"
        },
        {
            "name": "Priority",
            "value": "1"
        },
        {
            "name": "category",
            "value": "rare"
        }
    ],
    "customFields": {
      "CF1" : "CF1",
      "CF2 INTEGER" : "1"
     },
    "active": false
}
```
```json Historical badges
{
    "orgId": 50933,
    "name": "demo testkerl2n26df132",
    "description": "string",
    "startOn": "2023-11-14T21:51:00.192Z",
    "expiresOn": "2026-12-03T15:19:37.192Z",
    "earnedBadgeExpiry": {
        "expiryType": "ABSOLUTE",
        "type": "WITH_BADGE_META",
        "expiresOn": "2024-11-03T15:19:37.192Z",
        "expireWithBadgeMeta": true
    },
    "issuedBadgeExpiry": {
        "expiryType": "ABSOLUTE",
        "type": "WITH_BADGE_META",
        "expiresOn": "2024-11-03T15:19:37.192Z",
        "expireWithBadgeMeta": true
    },
    "images": [
        {
            "name": "string",
            "fileSvcHandle": "string",
            "url": "string",
            "tag": "UN_EARNED"
        }
    ],
    "ownership": {
        "restrictedToOwners": [
            "Loyalty"
        ],
        "claims": [
            {
                "badgeMetaId": "string",
                "ownerType": "Loyalty",
                "referenceId": "string"
            }
        ]
    },
    "customerConstraints": [
        {
            "constraintType": "BADGE_NO_LIMIT",
            "maxEarnLimit": 0
        },
        {
            "constraintType": "BADGE_NO_LIMIT",
            "maxEarnLimit": 0
        },
        {
            "constraintType": "BADGE_NO_LIMIT"
        },
        {
            "constraintType": "BADGE_NO_LIMIT"
        },
        {
            "constraintType": "BADGE_NO_LIMIT",
            "rollType": "DAYS",
            "rollValue": 0,
            "maxEarnLimit": 0
        },
        {
            "constraintType": "BADGE_NO_LIMIT",
            "maxEarnForDays": 0,
            "rollForDays": 0,
            "maxEarnForWeeks": 0,
            "rollForWeeks": 0,
            "maxEarnForMonths": 0,
            "rollForMonths": 0
        }
    ],
    "badgeConstraints": [
        {
            "constraintType": "BADGE_NO_LIMIT",
            "maxEarnLimit": 0
        },
        {
            "constraintType": "BADGE_NO_LIMIT",
            "maxEarnLimit": 0
        },
        {
            "constraintType": "BADGE_NO_LIMIT"
        },
        {
            "constraintType": "BADGE_NO_LIMIT"
        },
        {
            "constraintType": "BADGE_NO_LIMIT",
            "rollType": "DAYS",
            "rollValue": 0,
            "maxEarnLimit": 0
        },
        {
            "constraintType": "BADGE_NO_LIMIT",
            "maxEarnForDays": 0,
            "rollForDays": 0,
            "maxEarnForWeeks": 0,
            "rollForWeeks": 0,
            "maxEarnForMonths": 0,
            "rollForMonths": 0
        }
    ],
    "tags": [
        {
            "name1": "string",
            "value": "string"
        }
    ],
    "earnType": "EARN",
    "issuedCount": 0,
    "earnedCount": 0,
    "status": "LIVE",
    "createdOn": "2023-11-03T15:19:37.192Z",
    "createdBy": 0,
    "lastUpdatedOn": "2023-11-03T15:19:37.192Z",
    "lastUpdatedBy": 0,
     "customFields": {
      "CF1" : "CF1",
      "CF2 INTEGER" : "1"
     },
    "active": true
}
```

# Response parameters

<HTMLBlock>{`
<table style="width: 100%; border-collapse: collapse;">
<thead>
<tr>
  <th style="border: 1px solid #ddd; padding: 8px;">Parameter</th>
  <th style="border: 1px solid #ddd; padding: 8px;">Description</th>
</tr>
</thead>
<tbody>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>data</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>The main container for the response data.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>id</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Unique identifier for the data item.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>orgId</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Identifier for the organization associated with the data.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>name</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Name of the badge.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>description</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Description of the badge.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>startOn</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Timestamp for when the badge starts.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>expiresOn</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Timestamp for when the badge expires.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>earnedBadgeExpiry</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Details about the expiry of the earned badge.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>expiryType</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Type of badge expiry.<br>Supported values: &quot;RELATIVE&quot;,&quot;ABSOLUTE&quot;,&quot;NEVER&quot;<br>Relative expiry: Based on when the badge was issued.<br>Absolute expiry: Based on the fixed date from the badge issual.<br>Never: The badges will never expiry after issual.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>type</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Type of expiry.<br>Supported values: DAYS/WEEKS/MONTHS.<br>Relative expiry is based on when the badge was issued.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>expiresOn</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>The timestamp for when the badge expires.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>expireWithBadgeMeta</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Indicates if expiry is linked with badge metadata.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>issuedBadgeExpiry</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Details about the expiry of the issued badge.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>images</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Array of images related to the item.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>name</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Name of the image.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>fileSvcHandle</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Service handle for the image file.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>url</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>URL of the image.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>tag</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Tag associated with the image.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>ownership</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>The module for which the badge is being created.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>restrictedToOwners</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Lists owner categories that can claim the badge, such as &quot;Loyalty&quot; and &quot;Milestones&quot; etc.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>customerConstraints</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Limit on how many quantities of a badge can be given to a particular customer.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>badgeConstraints</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Limit on how many quantities of a reward can be given to customers</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>badgeGroupId</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Unique group ID associated with the badge. </p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>badgeRank</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Badge rank is the rank within a group, user can define the badge rank even if group is not linked with the badge.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>earnType</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>The method the brand can issue the badge.<br>Supported values: EARN, ISSUE EARN.<br>Earn: The selected customers are enrolled for the badge and upon fulfillment of the earn condition, the badge is issued.<br>Issue Earn: The Badges are issued directly to the customer who fulfills the earn condition.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>issuedCount</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Count of how many times the badge has been issued.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>earnedCount</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Count of how many times the badge has been earned.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>status</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>The badge can have three statuses upon creation.<br>Supported values: LIVE, UPCOMING, ENDED/EXPIRED.<br>LIVE: The badges which are in live state and can be earned.<br>UPCOMING: The badges which are upcoming on a further date.<br>EXPIRED/ENDED: The badges which have expired and cannot be earned.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>createdOn</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Timestamp for when the badge was created.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>createdBy</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Identifier of the user who created the badge.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>lastUpdatedOn</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Timestamp for the last update made to the badge.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>lastUpdatedBy</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Identifier of the user who last updated the badge.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>active</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Indicates whether the badge is active or not.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>errors</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Contains details of any errors.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>warnings</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Contains details of any warnings.</p>
</td>
</tr>
</tbody>
</table>
`}</HTMLBlock>


```json Response- Earn type
{
    "data": {
        "id": "662749408fe258516a88fe89",
        "orgId": 100458,
        "name": "BADGE123",
        "description": "Purchase 5 pet products in 3 months and get a pet grooming voucher",
        "startOn": 1716803487.000000000,
        "expiresOn": 1726804000.000000000,
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
                "Milestones",
                "Loyalty"
            ],
            "claims": []
        },
        "customerConstraints": [
            {
                "constraintType": "CUSTOMER_BADGE_FIXED_WINDOW",
                "referenceId": "e6791ec9-e92f-34af-bdc3-be2607fdf82c",
                "durationType": "DAYS",
                "refreshRate": 3,
                "maxEarnLimit": 1,
                "cycleStatus": "UPCOMING",
                "startDate": 1716803487.000000000,
                "endDate": 1726804000.000000000
            }
        ],
        "badgeConstraints": [
            {
                "constraintType": "BADGE_FIXED_WINDOW",
                "referenceId": "a1350b49-eb8e-3500-9e43-01f5493c91c1",
                "durationType": "DAYS",
                "refreshRate": 3,
                "maxEarnLimit": 2,
                "startDate": 1716803487.000000000,
                "endDate": 1726804000.000000000,
                "cycleStatus": "UPCOMING"
            }
        ],
        "benefits": [
            {
                "benefitType": "COUPON",
                "seriesId": 6789
            },
            {
                "benefitType": "COUPON",
                "seriesId": 13686
            },
            {
                "benefitType": "LOYALTY_POINTS",
                "programId": 626,
                "promotionId": 80332,
                "allocationStrategyId": 1489,
                "expirationStrategyId": 3843,
                "defaultTillId": null
            },
            {
                "benefitType": "COUPON",
                "seriesId": 1234
            }
        ],
        "tags": [
            {
                "name": "Type1",
                "value": "Birthday"
            },
            {
                "name": "category",
                "value": "rare"
            },
            {
                "name": "Priority",
                "value": "1"
            }
        ],
        "badgeGroupId": null,
        "badgeRank": 1,
        "earnType": "EARN",
        "status": "UPCOMING",
        "createdOn": 1713850688.811401000,
        "createdBy": 75086856,
        "lastUpdatedOn": 1713850688.811401000,
        "lastUpdatedBy": 75086856,
        "customFields": {},
        "active": false
    },
    "errors": [],
    "warnings": []
}
```
```json Response-Issue earn type
{
    "data": {
        "id": "662748a08fe258516a88fe88",
        "orgId": 100458,
        "name": "Badge Issue earn",
        "description": "Make 5 transactions",
        "startOn": 1716803487.000000000,
        "expiresOn": 1726804000.000000000,
        "earnedBadgeExpiry": {
            "expiryType": "RELATIVE",
            "relativeExpirytype": "WEEKS",
            "value": 2
        },
        "issuedBadgeExpiry": {
            "expiryType": "ABSOLUTE",
            "type": "FIXED_DATE",
            "expiresOn": 1926235957.000000000,
            "expireWithBadgeMeta": false
        },
        "images": [
            {
                "name": "Issued",
                "fileSvcHandle": "qwer-8634-8938",
                "url": "https://firebasestorage.googleapis.com/v0/b/createbadges.appspot.com/o/images%2Fsuccess1.jpg?alt=media&token=66b2f0bc-9c55-4e33-a5e9-c6be96d94f2d",
                "tag": "EARNED"
            }
        ],
        "ownership": {
            "restrictedToOwners": [
                "Audience_Campaigns",
                "Loyalty"
            ],
            "claims": []
        },
        "customerConstraints": [
            {
                "constraintType": "CUSTOMER_BADGE_FIXED_WINDOW",
                "referenceId": "e6791ec9-e92f-34af-bdc3-be2607fdf82c",
                "durationType": "DAYS",
                "refreshRate": 3,
                "maxEarnLimit": 2,
                "cycleStatus": "UPCOMING",
                "startDate": 1716803487.000000000,
                "endDate": 1926235957.000000000
            }
        ],
        "badgeConstraints": [
            {
                "constraintType": "BADGE_FIXED_VALUE",
                "maxEarnLimit": 10000
            },
            {
                "constraintType": "BADGE_ROLLING_WINDOW",
                "rollType": "WEEKS",
                "rollValue": 1,
                "maxEarnLimit": 3000
            },
            {
                "constraintType": "BADGE_ROLLING_WINDOW",
                "rollType": "DAYS",
                "rollValue": 1,
                "maxEarnLimit": 300
            }
        ],
        "benefits": [
            {
                "benefitType": "COUPON",
                "seriesId": 13745
            }
        ],
        "tags": [],
        "badgeGroupId": null,
        "badgeRank": 3,
        "earnType": "ISSUE_EARN",
        "status": "UPCOMING",
        "createdOn": 1713850528.634380000,
        "createdBy": 75086856,
        "lastUpdatedOn": 1713850528.634380000,
        "lastUpdatedBy": 75086856,
        "customFields": {},
        "active": true
    },
    "errors": [],
    "warnings": []
}
```
```json 400 Bad Request
{
    "data": null,
    "errors": [
        {
            "code": 728,
            "message": "Atleast one owner is required",
            "reference": "ownership.restrictedToOwners"
        },
        {
            "code": 725,
            "message": "Badge name cannot be duplicate",
            "reference": null
        },
        {
            "code": 722,
            "message": "Start Date cannot be past date",
            "reference": null
        },
        {
            "code": 714,
            "message": "Owner type is not allowed.",
            "reference": "ownership.restrictedToOwners"
        }
    ],
    "warnings": null
}
```

# API-specific error codes

| Error code | Description                                         |
| :--------- | :-------------------------------------------------- |
| 714        | Owner type is not allowed.                          |
| 722        | Start date cannot be past date.                     |
| 725        | Badge name cannot be duplicated.                    |
| 728        | At least one owner is required.                     |
| 999999     | HV000028: Unexpected exception during isValid call. |