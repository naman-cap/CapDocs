---
title: Get customer activity history
excerpt: ''
api:
  file: v2.json
  operationId: customeractivityhistories
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
This API helps retrieve all the subscription (supplementary) or coalition (external) programs of the user. It fetches the present and past history of the subscription program or coalition programs.

> 👍 Note
> 
> For detailed information about our APIs and for hands-on testing, refer documentation in [API overview](https://docs.capillarytech.com/reference/apioverview) and  step-by-step guide on making your first API call in [Make your first API call](https://docs.capillarytech.com/reference/make-your-first-api-call) .

# Prerequisites

-   Authentication
-   Partner program access group

# API Specification

| Feature                | Availability                                |
| :--------------------- | :------------------------------------------ |
| URI                    | v2/partnerProgram/customerActivityHistories |
| HTTP Method            | GET                                         |
| Pagination             | Yes                                         |
| Batch support          | NA                                          |
| Rate limit information | NA                                          |

# API endpoint example

`https://eucrm.cc.capillarytech.com/v2/partnerProgram/customerActivityHistories`

# Request query/body parameters

<HTMLBlock>{`
<table style="width: 100%; border-collapse: collapse;">
<thead>
<tr>
  <th style="border: 1px solid #ddd; padding: 8px;">Parameter<br>(Parameters marked with * are mandatory)</th>
  <th style="border: 1px solid #ddd; padding: 8px;">Type</th>
  <th style="border: 1px solid #ddd; padding: 8px;">Description</th>
</tr>
</thead>
<tbody>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>source*</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Enum</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Source in which the customer identifier is present.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>identifierName*</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Enum</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Name of the customer identifier used to identify the customer.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>identifierValue*</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>String</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Value of the specified identifierName.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>activityType*</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Enum</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>The type of activity.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>startDate</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Date</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>when activityType is BENEFITS_AVAILED , startDate param is used to fetch CustomerBenefitTrackingLog during that duration</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>endDate</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Date</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>when activityType is BENEFITS_AVAILED , endDate param is used to fetch CustomerBenefitTrackingLog during that duration</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>partnerProgramId</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Int</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>If partnerProgramId is passed, then only specific partner program details will be fetched, if not, the recent ten partner programs which the customer was part of will be shown.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>partnerProgramType</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Int</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>The type of partner program type. Subscription (External) or Coalition (Supplementary).</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>limit</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Int</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Default limit is  10. Range: 0-10</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>offset</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Int</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Default offset will be 0.</p>
</td>
</tr>
</tbody>
</table>
`}</HTMLBlock>


```json
https://eu.api.capillarytech.com/v2/partnerProgram/customerActivityHistory?source=instore&identifierName=externalId&identifierValue=5c3c2dasc6b5f33c82fb71f679daf56dq&partnerProgramId=35&activityType=benefitsAvailed&startDate=2020-01-29+12:11:45&endDate=2021-10-29+12:11:45
```

# Response parameters

| Parameter                              | Data type | Description                                                                    |
| -------------------------------------- | :-------- | ------------------------------------------------------------------------------ |
| pagination                             | Object    | Contains details about the pagination of the data.                             |
| limit                                  | Integer   | The maximum number of records to be returned in the response.                  |
| offset                                 | Integer   | The starting point for the data to be returned (used for paging through data). |
| total                                  | Integer   | The total number of records available.                                         |
| data                                   | Array     | An array containing the details of partner programs and customer activities.   |
| partnerProgramDetails                  | Object    | Contains details about a specific partner program.                             |
| partnerProgramDetails.programName      | String    | The name of the program.                                                       |
| partnerProgramDetails.partnerProgramId | Integer   | Unique identifier for the partner program.                                     |
| partnerProgramName                     |           | The name of the partner program.                                               |
| partnerProgramDescription              |           | Description of the partner program.                                            |
| partnerTierNumber                      |           | The tier number of the partner in the program.                                 |
| partnerTierName                        |           | The name of the partner's tier in the program.                                 |
| partnerTierExpiryDate                  |           | Expiry date of the partner's tier.                                             |
| partnerMembershipId                    |           | Membership ID of the partner in the program.                                   |
| partnerProgramType                     |           | Type of the partner program (e.g., EXTERNAL, SUPPLEMENTARY).                   |
| partnerProgramMembershipStartDate      |           | Start date of the partner's membership in the program.                         |
| partnerProgramMembershipEndDate        |           | End date of the partner's membership in the program.                           |
| benefitsSummary                        |           | Array of benefits associated with the program.                                 |
| name                                   |           | Name of the benefit.                                                           |
| type                                   |           | Type of the benefit (e.g., promotionalPoints).                                 |
| mappedPromotionDetails                 |           | Details of the mapped promotion.                                               |
| countAvailedInLast365Days              |           | Count of how many times the benefit was availed in the last 365 days.          |
| linked                                 |           | Indicates whether the program is linked or not.                                |
| tierBased                              |           | Indicates whether the program is tier-based or not.                            |
| customerActivityHistory                |           | Array containing the history of customer activities (empty in this data).      |
| notes                                  |           | Notes providing additional information about the data timeframe.               |
| warnings                               |           | Array containing any warnings related to the data (empty in this data).        |
| errors                                 |           | Array containing any errors related to the data (empty in this data).          |

```json activityType=benefitsAvailed
{
    "pagination": {
        "limit": 10,
        "offset": 0,
        "total": 3
    },
    "data": [
        {
            "partnerProgramDetails": {
                "programName": "VidhiOrgDefaultProgram",
                "partnerProgramId": 111,
                "partnerProgramName": "external pp",
                "partnerProgramDescription": "external pp",
                "partnerTierNumber": 2,
                "partnerTierName": "tier2",
                "partnerTierExpiryDate": "2024-09-08T18:29:59Z",
                "partnerMembershipId": "000103",
                "partnerProgramType": "EXTERNAL",
                "partnerProgramMembershipStartDate": "2023-09-08T18:25:10Z",
                "partnerProgramMembershipEndDate": "2024-09-08T18:29:59Z",
                "benefitsSummary": [
                    {
                        "name": "benefit21",
                        "type": "promotionalPoints",
                        "mappedPromotionDetails": {
                            "promotionId": 16692,
                            "promotionName": "promo1",
                            "promotionReferenceNumber": "dfe3ac53-ee91-48d8-89d5-e5938f4843d8"
                        },
                        "countAvailedInLast365Days": 0
                    }
                ],
                "linked": true,
                "tierBased": true
            },
            "customerActivityHistory": [],
            "notes": "showing customer activities from Wed Sep 14 15:51:21 GMT 2022 till Thu Sep 14 15:51:21 GMT 2023"
        },
        {
            "partnerProgramDetails": {
                "programName": "VidhiOrgDefaultProgram",
                "partnerProgramId": 20,
                "partnerProgramName": "Riders",
                "partnerProgramDescription": "Test",
                "partnerProgramType": "SUPPLEMENTARY",
                "partnerProgramMembershipStartDate": "2023-03-14T12:38:00Z",
                "partnerProgramMembershipEndDate": "2023-03-15T12:38:00Z",
                "linked": false,
                "tierBased": false
            },
            "customerActivityHistory": [],
            "notes": "showing customer activities from Wed Sep 14 15:51:21 GMT 2022 till Thu Sep 14 15:51:21 GMT 2023"
        },
        {
            "partnerProgramDetails": {
                "programName": "VidhiOrgDefaultProgram",
                "partnerProgramId": 21,
                "partnerProgramName": "Supplementary Program 2",
                "partnerProgramDescription": "test",
                "partnerProgramType": "SUPPLEMENTARY",
                "partnerProgramMembershipStartDate": "2023-07-04T07:55:43Z",
                "partnerProgramMembershipEndDate": "2023-10-12T07:55:43Z",
                "linked": true,
                "tierBased": false
            },
            "customerActivityHistory": [],
            "notes": "showing customer activities from Wed Sep 14 15:51:21 GMT 2022 till Thu Sep 14 15:51:21 GMT 2023"
        }
    ],
    "warnings": [],
    "errors": []
}
```
```Text activityType= linkingUpdates
{
    "pagination": {
        "limit": 10,
        "offset": 0,
        "total": 3
    },
    "data": [
        {
            "partnerProgramDetails": {
                "programName": "VidhiOrgDefaultProgram",
                "partnerProgramId": 111,
                "partnerProgramName": "external pp",
                "partnerProgramDescription": "external pp",
                "partnerTierNumber": 2,
                "partnerTierName": "tier2",
                "partnerTierExpiryDate": "2024-09-08T18:29:59Z",
                "partnerMembershipId": "000103",
                "partnerProgramType": "EXTERNAL",
                "partnerProgramMembershipStartDate": "2023-09-08T18:25:10Z",
                "partnerProgramMembershipEndDate": "2024-09-08T18:29:59Z",
                "benefitsSummary": [
                    {
                        "name": "benefit21",
                        "type": "promotionalPoints",
                        "mappedPromotionDetails": {
                            "promotionId": 16692,
                            "promotionName": "promo1",
                            "promotionReferenceNumber": "dfe3ac53-ee91-48d8-89d5-e5938f4843d8"
                        },
                        "countAvailedInLast365Days": 0
                    }
                ],
                "linked": true,
                "tierBased": true
            },
            "customerActivityHistory": [
                {
                    "activityType": "ENROLLMENT",
                    "activityDate": "2023-09-08T12:55:11Z"
                }
            ]
        },
        {
            "partnerProgramDetails": {
                "programName": "VidhiOrgDefaultProgram",
                "partnerProgramId": 20,
                "partnerProgramName": "Riders",
                "partnerProgramDescription": "Test",
                "partnerProgramType": "SUPPLEMENTARY",
                "partnerProgramMembershipStartDate": "2023-03-14T12:38:00Z",
                "partnerProgramMembershipEndDate": "2023-03-15T12:38:00Z",
                "partnerProgramMembershipLastUpdatedDate": "2023-07-04T07:55:43Z",
                "partnerProgramMembershipLastUpdatedActivity": "PARTNER_PROGRAM_EARLY_EXPIRY",
                "linked": false,
                "tierBased": false
            },
            "customerActivityHistory": [
                {
                    "activityType": "PARTNER_PROGRAM_EARLY_EXPIRY",
                    "activityDate": "2023-07-04T07:55:43Z"
                },
                {
                    "activityType": "SUPPLEMENTARY_MEMBERSHIP_STARTED",
                    "activityDate": "2023-03-15T12:38:00Z"
                }
            ]
        },
        {
            "partnerProgramDetails": {
                "programName": "VidhiOrgDefaultProgram",
                "partnerProgramId": 21,
                "partnerProgramName": "Supplementary Program 2",
                "partnerProgramDescription": "test",
                "partnerProgramType": "SUPPLEMENTARY",
                "partnerProgramMembershipStartDate": "2023-07-04T07:55:43Z",
                "partnerProgramMembershipEndDate": "2023-10-12T07:55:43Z",
                "partnerProgramMembershipLastUpdatedDate": "2023-07-04T07:55:43Z",
                "partnerProgramMembershipLastUpdatedActivity": "BACKUP_SUPPLEMENTARY_MEMBERSHIP_STARTED",
                "linked": true,
                "tierBased": false
            },
            "customerActivityHistory": [
                {
                    "activityType": "BACKUP_SUPPLEMENTARY_MEMBERSHIP_STARTED",
                    "activityDate": "2023-07-04T07:55:43Z"
                },
                {
                    "activityType": "SUPPLEMENTARY_MEMBERSHIP_STARTED",
                    "activityDate": "2023-06-22T12:38:00Z"
                }
            ]
        }
    ],
    "warnings": [],
    "errors": []
}
```