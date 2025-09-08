---
title: getUserTargets API
excerpt: >-
  This API returns user related information for Milestones/Streaks, by taking a
  user-ID as the input.
api:
  file: v3.json
  operationId: target-group
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
This API allows you to retrieve the details of all the associated target groups, including the user's milestones and streaks information.

# API endpoint example

`https://eucrm.cc.capillarytech.com/v3/users/547528790/targetGroups`

# Prerequisites

*   Authentication; Basic or OAuth authentication details

*   Access group resource - NA

# Resource information

|                       |                                |
| :-------------------- | :----------------------------- |
| URI                   | `/users/{userId}/targetGroups` |
| HTTP method           | GET                            |
| Pagination supported? | NO                             |
| Rate limit            | NA                             |
| Batch support         | NA                             |

# Request path parameters

| Parameter\<br>(Parameters marked with \* are mandatory) | Type | Description                                                                                                                         |
| :------------------------------------------------------ | :--- | :---------------------------------------------------------------------------------------------------------------------------------- |
| UserID\*                                                | Long | The userId represents the unique identifier of a user. It allows you to retrieve the target groups associated with a specific user. |

# Request query parameters

```curl
https://eucrm.cc.capillarytech.com/v3/users/547528790/targetGroups
```

# Response Parameters

| Parameter                      | Data Type        | Description                                                                                                                                                                                                                                                         |
| ------------------------------ | ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| userId                         | Long             | The unique identifier of the customer.                                                                                                                                                                                                                              |
| customer                       | Object           | An object containing information about customer.                                                                                                                                                                                                                    |
| -id                            | Integer          | The unique identifier of the customer.                                                                                                                                                                                                                              |
| -profiles                      | Array of objects | An array containing profiles details of the customer                                                                                                                                                                                                                |
| --firstName                    | String           | The first name of the customer.                                                                                                                                                                                                                                     |
| --lastName                     | String           | The last name of the customer.                                                                                                                                                                                                                                      |
| --commChannels                 | Array of objects | An array containing communication information of the customer.                                                                                                                                                                                                      |
| ---type                        | String           | The type of communication channel from which we connect to customer. (e.g., mobile, email).                                                                                                                                                                         |
| ---accountId                   | Enum             | For sources that support multiple accounts, For example, FACEBOOK, WEB\_ENGAGE, WECHAT, MOBILE\_APP.                                                                                                                                                                |
| ---value                       | String           | The value of the communication channel (e.g., phone number, email address).                                                                                                                                                                                         |
| ---primary                     | Boolean          | this indicates that the above channel is primary or not                                                                                                                                                                                                             |
| ---verified                    | Boolean          | Indicates if the communication channel has been verified.                                                                                                                                                                                                           |
| ---subscribed                  | Boolean          | Pass true if the identifier is subscribed for the org's newsletters (bulk messages).                                                                                                                                                                                |
| ---attributes                  | Object           | Additional Details of the identifier.                                                                                                                                                                                                                               |
| --source                       | String           | The source from which the customer profile was created (e.g., instore).                                                                                                                                                                                             |
| --accountId                    | String           | The account ID of the customer .                                                                                                                                                                                                                                    |
| --userId                       | Integer          | The unique identifier for the customer.                                                                                                                                                                                                                             |
| --orgSourceId                  | Integer          | The organization source ID for the customer.                                                                                                                                                                                                                        |
| -loyaltyInfo                   | Object           | Containing loyalty information of the customer.                                                                                                                                                                                                                     |
| --attribution                  | Object           | Containing attribution information for the loyalty information.                                                                                                                                                                                                     |
| ---createdOn                   | String           | The date and time when the loyalty information was created.                                                                                                                                                                                                         |
| ---lastUpdatedOn               | String           | The date and time when the loyalty information was last updated.                                                                                                                                                                                                    |
| ---lastUpdatedBy               | Object           | The information about the user who last updated the loyalty information.                                                                                                                                                                                            |
| ----id                         | Integer          | The unique identifier for the user who last updated the loyalty information.                                                                                                                                                                                        |
| ----code                       | Null             | The code associated with the last updated user.                                                                                                                                                                                                                     |
| ----description                | String           | The description about the last update.                                                                                                                                                                                                                              |
| ----name                       | Null             | Name of the user last updated.                                                                                                                                                                                                                                      |
| ----type                       | Enum             | Type of the customer identifier.                                                                                                                                                                                                                                    |
| ---createdBy                   | Object           | Containing information about the user who created the loyalty information.                                                                                                                                                                                          |
| ----id                         | Integer          | The unique identifier for the user who created the loyalty information.                                                                                                                                                                                             |
| ----code                       | Null             | The code associated with the last updated user.                                                                                                                                                                                                                     |
| ----description                | String           | The description about the last update.                                                                                                                                                                                                                              |
| ----name                       | Null             | Name of the user last updated.                                                                                                                                                                                                                                      |
| ----type                       | Enum             | Type of the customer identifier.                                                                                                                                                                                                                                    |
| --loyaltyType                  | String           | The type of loyalty program.                                                                                                                                                                                                                                        |
| --lifetimePurchases            | Float            | The total amount of purchases made by the customer in his entire lifetime.                                                                                                                                                                                          |
| -customFields                  | Object           | Containing custom fields of the customer.                                                                                                                                                                                                                           |
| --gender                       | String           | The gender of the customer.                                                                                                                                                                                                                                         |
| targetGroups                   | Array of objects | Containing information about target groups associated with customer.                                                                                                                                                                                                |
| -id                            | Integer          | The unique identifier for the target group.                                                                                                                                                                                                                         |
| -attribution                   | Object           | Containing attribution information for the target group.                                                                                                                                                                                                            |
| --createdOn                    | String           | The date and time when the target group was created.                                                                                                                                                                                                                |
| --lastUpdatedOn                | String           | The date and time when the target group was last updated.                                                                                                                                                                                                           |
| --lastUpdatedBy                | Object           | Containing information about the user who last updated the target group.                                                                                                                                                                                            |
| ---id                          | Integer          | The unique identifier for the user who last updated the target group.                                                                                                                                                                                               |
| ---code                        | String           | The code associated with the user who last updated the target group.                                                                                                                                                                                                |
| ---description                 | String           | The description associated with the user who last updated the target group.                                                                                                                                                                                         |
| ---name                        | String           | The name of the user who last updated the target group.                                                                                                                                                                                                             |
| ---type                        | String           | The type of the user who last updated the target group like ADMIN\_USER.                                                                                                                                                                                            |
| --createdBy                    | Object           | Containing information about the user who created the target group.                                                                                                                                                                                                 |
| ---id                          | Integer          | The unique identifier for the user who created the target group.                                                                                                                                                                                                    |
| ---code                        | String           | The code associated with the user who created the target group.                                                                                                                                                                                                     |
| ---description                 | String           | The description of the user who created the target group.                                                                                                                                                                                                           |
| ---name                        | String           | The name of the user who created the target group.                                                                                                                                                                                                                  |
| ---type                        | String           | The type of the user who created the target group like ADMIN\_USER.                                                                                                                                                                                                 |
| -targets                       | Array of objects | Containing information about targets within the target group.                                                                                                                                                                                                       |
| --targetId                     | Integer          | The unique identifier for the target.                                                                                                                                                                                                                               |
| --periodId                     | Integer          | The unique identifier for the period.                                                                                                                                                                                                                               |
| --programId                    | Integer          | The unique identifier for the program                                                                                                                                                                                                                               |
| --alternateCurrencyIdentifier  | String           | The unique identifier of the alternate currency that is generated when creating an alternate currency.                                                                                                                                                              |
| --alternateCurrencyName        | String           | The unique name of the alternate currency.                                                                                                                                                                                                                          |
| --periodRefCode                | Sting            | The reference code for the period of the target.                                                                                                                                                                                                                    |
| --periodStartDate              | String           | The start date of the period for the target.                                                                                                                                                                                                                        |
| --periodEndDate                | String           | The end date of the period for the target.                                                                                                                                                                                                                          |
| --targetValue                  | Float            | The target value to be achieved.                                                                                                                                                                                                                                    |
| --targetAchievedValue          | Float            | The value achieved towards the target.                                                                                                                                                                                                                              |
| --targetType                   | Enum             | The type of target: SUM, COUNT,VISIT. Refer to this [API documentation](https://docs.capillarytech.com/reference/create-target-groups#request-body-parameters) for more information.                                                                                |
| --targetEntity                 | Enum             | The KPI on which the target is tracked. TRANSACTION, LINEITEM, EVENT, REWARDS, ALTERNATE\_CURRENCIES. Refer to this [API documentation](https://docs.capillarytech.com/reference/create-target-groups#request-body-parameters) for more information.                |
| --targetRuleId                 | Integer          | The rule identifier for the target.                                                                                                                                                                                                                                 |
| --enrolledOn                   | String           | The date and time when the target was enrolled.                                                                                                                                                                                                                     |
| --eventName                    | String           | The name of the event associated with the target.                                                                                                                                                                                                                   |
| --periodStartDateWithTimeStamp | String           | The start date and time of the period associated with the target rule.                                                                                                                                                                                              |
| --periodEndDateWithTimeStamp   | String           | The end date and time of the period associated with the target rule.                                                                                                                                                                                                |
| --targetAchievedDateTime       | String           | The achieved date and time of the period associated with the target rule.                                                                                                                                                                                           |
| --streakAchievedDateTime       | String           | The achieved date and time of the period associated with the streak rule.                                                                                                                                                                                           |
| --currentPeriod                | Boolean          | Indicates if the target is for the current period.                                                                                                                                                                                                                  |
| --milestones                   | Array of objects | Containing information about milestones for the target.                                                                                                                                                                                                             |
| ---id                          | Integer          | The unique identifier for the milestone.                                                                                                                                                                                                                            |
| ---triggerName                 | String           | The name of the trigger of the milestone.                                                                                                                                                                                                                           |
| ---triggerValue                | Float            | The value of the trigger of the milestone.                                                                                                                                                                                                                          |
| ---isAchieved                  | Boolean          | Indicates if the milestone has been achieved.                                                                                                                                                                                                                       |
| ---streaks                     | Array            | An array of streaks for the target group.                                                                                                                                                                                                                           |
| ----userStreakId               | Integer          | The user streak ID.                                                                                                                                                                                                                                                 |
| ----streakId                   | Integer          | The streak ID.                                                                                                                                                                                                                                                      |
| ----streakName                 | String           | The name of the streak.                                                                                                                                                                                                                                             |
| ----status                     | String           | The status of the streak (For Example- ACHIEVED).                                                                                                                                                                                                                   |
| ----currentCount               | Integer          | The current count of the streak.                                                                                                                                                                                                                                    |
| ----totalTargetCountOfSequence | Integer          | The total target count of the streak sequence.                                                                                                                                                                                                                      |
| ----streakAchievedUserTargetId | String           | The ID of the streak achieved by the user.                                                                                                                                                                                                                          |
| -targetEvaluationType          | Enum             | The type of evaluation for the target group : FIXED\_CALENDAR\_WINDOW CYCLIC\_WINDOW PERIOD\_AGNOSTIC\_WINDOW Refer to this [API documentation](https://docs.capillarytech.com/reference/create-target-groups#request-body-parameters) for more information.        |
| -trackingType                  | Enum             | The type of target for tracking the created milestone: - Default - Unified - Streak - Capping -Non continuous streak Refer to this [API documentation](https://docs.capillarytech.com/reference/create-target-groups#request-body-parameters) for more information. |
| errors                         | Object           | Error in the API call if any.                                                                                                                                                                                                                                       |
| warnings                       | Object           | Warning in the API call if any.                                                                                                                                                                                                                                     |

```json With streak detail
{
    "data": {
        "userId": 64035151,
        "customer": {
            "id": 64035151,
            "profiles": [
                {
                    "firstName": "Tom",
                    "lastName": "Sawyer",
                    "commChannels": [
                        {
                            "type": "email",
                            "accountId": null,
                            "value": "tom.sawyer@capillarytech.com",
                            "primary": false,
                            "verified": false,
                            "subscribed": null,
                            "attributes": null
                        },
                        {
                            "type": "mobile",
                            "accountId": null,
                            "value": "919988221100",
                            "primary": false,
                            "verified": false,
                            "subscribed": null,
                            "attributes": null
                        }
                    ],
                    "source": "instore",
                    "accountId": "",
                    "userId": 64035151,
                    "orgSourceId": -1
                }
            ],
            "loyaltyInfo": {
                "attribution": {
                    "createdOn": "2024-01-17T07:00:51.000+0000",
                    "lastUpdatedOn": "2024-04-19T07:39:11.000+0000",
                    "lastUpdatedBy": {
                        "id": 75122513,
                        "code": null,
                        "description": null,
                        "name": null,
                        "type": null
                    },
                    "createdBy": {
                        "id": 75109398,
                        "code": null,
                        "description": null,
                        "name": null,
                        "type": null
                    }
                },
                "loyaltyType": "loyalty",
                "lifetimePurchases": 23508.000
            },
            "customFields": {}
        },
        "targetGroups": [
            {
                "id": 851,
                "attribution": {
                    "createdOn": "2024-04-11T12:10:48.000+0000",
                    "lastUpdatedOn": "2024-04-11T12:10:48.000+0000",
                    "lastUpdatedBy": {
                        "id": 75122513,
                        "code": "till.marketsuper",
                        "description": "",
                        "name": "till.marketsuper",
                        "type": "TILL"
                    },
                    "createdBy": {
                        "id": 75122513,
                        "code": "till.marketsuper",
                        "description": "",
                        "name": "till.marketsuper",
                        "type": "TILL"
                    }
                },
                "name": "JP&A",
                "preferredTillId": 75077502,
                "targets": [
                    {
                        "targetId": 2160795,
                        "periodId": 1807,
                        "periodRefCode": "JP&A1",
                        "periodStartDate": "2024-04-11",
                        "periodEndDate": "2024-04-17",
                        "targetValue": 2.000,
                        "targetAchievedValue": 7.000,
                        "targetName": "JP&A",
                        "targetType": "COUNT",
                        "targetEntity": "TRANSACTION",
                        "targetRuleId": 427,
                        "enrolledOn": "2024-04-11T12:25:09.000+0000",
                        "eventName": "TransactionAdd",
                        "periodStartDateWithTimeStamp": "2024-04-11T00:00:00.000Z",
                        "periodEndDateWithTimeStamp": "2024-04-17T23:59:59.000Z",
                        "currentPeriod": false,
                        "milestones": null
                    },
                    {
                        "targetId": 2179901,
                        "periodId": 1808,
                        "periodRefCode": "JP&A2",
                        "periodStartDate": "2024-04-18",
                        "periodEndDate": "2024-04-24",
                        "targetValue": 2.000,
                        "targetAchievedValue": 8.000,
                        "targetName": "JP&A",
                        "targetType": "COUNT",
                        "targetEntity": "TRANSACTION",
                        "targetRuleId": 427,
                        "enrolledOn": "2024-04-18T10:59:36.000+0000",
                        "eventName": "TransactionAdd",
                        "periodStartDateWithTimeStamp": "2024-04-18T00:00:00.000Z",
                        "periodEndDateWithTimeStamp": "2024-04-24T23:59:59.000Z",
                        "currentPeriod": false,
                        "milestones": null
                    }
                ],
                "streaks": [
                    {
                        "userStreakId": 1,
                        "streakId": 19,
                        "streakName": "JP&A11",
                        "status": "ACHIEVED",
                        "currentCount": 2,
                        "totalTargetCountOfSequence": 2,
                        "streakAchievedUserTargetId": 2179901
                    }
                ],
                "targetEvaluationType": "FIXED_CALENDAR_WINDOW",
                "trackingType": "STREAKS"
            },
            {
                "id": 643,
                "attribution": {
                    "createdOn": "2023-12-04T10:26:41.000+0000",
                    "lastUpdatedOn": "2023-12-04T10:26:41.000+0000",
                    "lastUpdatedBy": {
                        "id": 75071236,
                        "code": "1675780342_",
                        "description": "",
                        "name": "naresh silla",
                        "type": "ADMIN_USER"
                    },
                    "createdBy": {
                        "id": 75071236,
                        "code": "1675780342_",
                        "description": "",
                        "name": "naresh silla",
                        "type": "ADMIN_USER"
                    }
                },
                "name": "sdcs",
                "preferredTillId": -1,
                "targets": [
                    {
                        "targetId": null,
                        "periodId": 1093,
                        "periodRefCode": "Cycle_1",
                        "periodStartDate": "2023-12-04",
                        "periodEndDate": "2024-01-03",
                        "targetValue": 1200.000,
                        "targetAchievedValue": 0,
                        "targetName": "sdcs",
                        "targetType": "REGULAR_POINTS",
                        "targetEntity": "POINTS",
                        "targetRuleId": 335,
                        "enrolledOn": "2024-05-07T10:26:56.573+0000",
                        "eventName": "TransactionAdd",
                        "periodStartDateWithTimeStamp": "2023-12-04T00:00:00.000Z",
                        "periodEndDateWithTimeStamp": "2024-01-03T23:59:59.000Z",
                        "currentPeriod": false,
                        "milestones": null
                    },
                    {
                        "targetId": null,
                        "periodId": 1094,
                        "periodRefCode": "Cycle_2",
                        "periodStartDate": "2024-01-04",
                        "periodEndDate": "2024-02-03",
                        "targetValue": 1200.000,
                        "targetAchievedValue": 0,
                        "targetName": "sdcs",
                        "targetType": "REGULAR_POINTS",
                        "targetEntity": "POINTS",
                        "targetRuleId": 335,
                        "enrolledOn": "2024-05-07T10:26:56.573+0000",
                        "eventName": "TransactionAdd",
                        "periodStartDateWithTimeStamp": "2024-01-04T00:00:00.000Z",
                        "periodEndDateWithTimeStamp": "2024-02-03T23:59:59.000Z",
                        "currentPeriod": false,
                        "milestones": null
                    },
                    {
                        "targetId": null,
                        "periodId": 1095,
                        "periodRefCode": "Cycle_3",
                        "periodStartDate": "2024-02-04",
                        "periodEndDate": "2024-03-03",
                        "targetValue": 1200.000,
                        "targetAchievedValue": 0,
                        "targetName": "sdcs",
                        "targetType": "REGULAR_POINTS",
                        "targetEntity": "POINTS",
                        "targetRuleId": 335,
                        "enrolledOn": "2024-05-07T10:26:56.573+0000",
                        "eventName": "TransactionAdd",
                        "periodStartDateWithTimeStamp": "2024-02-04T00:00:00.000Z",
                        "periodEndDateWithTimeStamp": "2024-03-03T23:59:59.000Z",
                        "currentPeriod": false,
                        "milestones": null
                    },
                    {
                        "targetId": null,
                        "periodId": 1096,
                        "periodRefCode": "Cycle_4",
                        "periodStartDate": "2024-03-04",
                        "periodEndDate": "2024-04-03",
                        "targetValue": 1200.000,
                        "targetAchievedValue": 0,
                        "targetName": "sdcs",
                        "targetType": "REGULAR_POINTS",
                        "targetEntity": "POINTS",
                        "targetRuleId": 335,
                        "enrolledOn": "2024-05-07T10:26:56.573+0000",
                        "eventName": "TransactionAdd",
                        "periodStartDateWithTimeStamp": "2024-03-04T00:00:00.000Z",
                        "periodEndDateWithTimeStamp": "2024-04-03T23:59:59.000Z",
                        "currentPeriod": false,
                        "milestones": null
                    },
                    {
                        "targetId": null,
                        "periodId": 1097,
                        "periodRefCode": "Cycle_5",
                        "periodStartDate": "2024-04-04",
                        "periodEndDate": "2024-05-03",
                        "targetValue": 1200.000,
                        "targetAchievedValue": 0,
                        "targetName": "sdcs",
                        "targetType": "REGULAR_POINTS",
                        "targetEntity": "POINTS",
                        "targetRuleId": 335,
                        "enrolledOn": "2024-05-07T10:26:56.573+0000",
                        "eventName": "TransactionAdd",
                        "periodStartDateWithTimeStamp": "2024-04-04T00:00:00.000Z",
                        "periodEndDateWithTimeStamp": "2024-05-03T23:59:59.000Z",
                        "currentPeriod": false,
                        "milestones": null
                    },
                    {
                        "targetId": null,
                        "periodId": 1098,
                        "periodRefCode": "Cycle_6",
                        "periodStartDate": "2024-05-04",
                        "periodEndDate": "2024-06-03",
                        "targetValue": 1200.000,
                        "targetAchievedValue": 0,
                        "targetName": "sdcs",
                        "targetType": "REGULAR_POINTS",
                        "targetEntity": "POINTS",
                        "targetRuleId": 335,
                        "enrolledOn": "2024-05-07T10:26:56.573+0000",
                        "eventName": "TransactionAdd",
                        "periodStartDateWithTimeStamp": "2024-05-04T00:00:00.000Z",
                        "periodEndDateWithTimeStamp": "2024-06-03T23:59:59.000Z",
                        "currentPeriod": true,
                        "milestones": null
                    },
                    {
                        "targetId": null,
                        "periodId": 1099,
                        "periodRefCode": "Cycle_7",
                        "periodStartDate": "2024-06-04",
                        "periodEndDate": "2024-07-03",
                        "targetValue": 1200.000,
                        "targetAchievedValue": 0,
                        "targetName": "sdcs",
                        "targetType": "REGULAR_POINTS",
                        "targetEntity": "POINTS",
                        "targetRuleId": 335,
                        "enrolledOn": "2024-05-07T10:26:56.573+0000",
                        "eventName": "TransactionAdd",
                        "periodStartDateWithTimeStamp": "2024-06-04T00:00:00.000Z",
                        "periodEndDateWithTimeStamp": "2024-07-03T23:59:59.000Z",
                        "currentPeriod": false,
                        "milestones": null
                    },
                    {
                        "targetId": null,
                        "periodId": 1100,
                        "periodRefCode": "Cycle_8",
                        "periodStartDate": "2024-07-04",
                        "periodEndDate": "2024-08-03",
                        "targetValue": 1200.000,
                        "targetAchievedValue": 0,
                        "targetName": "sdcs",
                        "targetType": "REGULAR_POINTS",
                        "targetEntity": "POINTS",
                        "targetRuleId": 335,
                        "enrolledOn": "2024-05-07T10:26:56.573+0000",
                        "eventName": "TransactionAdd",
                        "periodStartDateWithTimeStamp": "2024-07-04T00:00:00.000Z",
                        "periodEndDateWithTimeStamp": "2024-08-03T23:59:59.000Z",
                        "currentPeriod": false,
                        "milestones": null
                    },
                    {
                        "targetId": null,
                        "periodId": 1101,
                        "periodRefCode": "Cycle_9",
                        "periodStartDate": "2024-08-04",
                        "periodEndDate": "2024-09-03",
                        "targetValue": 1200.000,
                        "targetAchievedValue": 0,
                        "targetName": "sdcs",
                        "targetType": "REGULAR_POINTS",
                        "targetEntity": "POINTS",
                        "targetRuleId": 335,
                        "enrolledOn": "2024-05-07T10:26:56.573+0000",
                        "eventName": "TransactionAdd",
                        "periodStartDateWithTimeStamp": "2024-08-04T00:00:00.000Z",
                        "periodEndDateWithTimeStamp": "2024-09-03T23:59:59.000Z",
                        "currentPeriod": false,
                        "milestones": null
                    },
                    {
                        "targetId": null,
                        "periodId": 1102,
                        "periodRefCode": "Cycle_10",
                        "periodStartDate": "2024-09-04",
                        "periodEndDate": "2024-10-03",
                        "targetValue": 1200.000,
                        "targetAchievedValue": 0,
                        "targetName": "sdcs",
                        "targetType": "REGULAR_POINTS",
                        "targetEntity": "POINTS",
                        "targetRuleId": 335,
                        "enrolledOn": "2024-05-07T10:26:56.573+0000",
                        "eventName": "TransactionAdd",
                        "periodStartDateWithTimeStamp": "2024-09-04T00:00:00.000Z",
                        "periodEndDateWithTimeStamp": "2024-10-03T23:59:59.000Z",
                        "currentPeriod": false,
                        "milestones": null
                    },
                    {
                        "targetId": null,
                        "periodId": 1103,
                        "periodRefCode": "Cycle_11",
                        "periodStartDate": "2024-10-04",
                        "periodEndDate": "2024-11-03",
                        "targetValue": 1200.000,
                        "targetAchievedValue": 0,
                        "targetName": "sdcs",
                        "targetType": "REGULAR_POINTS",
                        "targetEntity": "POINTS",
                        "targetRuleId": 335,
                        "enrolledOn": "2024-05-07T10:26:56.573+0000",
                        "eventName": "TransactionAdd",
                        "periodStartDateWithTimeStamp": "2024-10-04T00:00:00.000Z",
                        "periodEndDateWithTimeStamp": "2024-11-03T23:59:59.000Z",
                        "currentPeriod": false,
                        "milestones": null
                    },
                    {
                        "targetId": null,
                        "periodId": 1104,
                        "periodRefCode": "Cycle_12",
                        "periodStartDate": "2024-11-04",
                        "periodEndDate": "2024-12-03",
                        "targetValue": 1200.000,
                        "targetAchievedValue": 0,
                        "targetName": "sdcs",
                        "targetType": "REGULAR_POINTS",
                        "targetEntity": "POINTS",
                        "targetRuleId": 335,
                        "enrolledOn": "2024-05-07T10:26:56.573+0000",
                        "eventName": "TransactionAdd",
                        "periodStartDateWithTimeStamp": "2024-11-04T00:00:00.000Z",
                        "periodEndDateWithTimeStamp": "2024-12-03T23:59:59.000Z",
                        "currentPeriod": false,
                        "milestones": null
                    }
                ],
                "targetEvaluationType": "FIXED_CALENDAR_WINDOW",
                "trackingType": "CAPPING"
            },
            {
                "id": 854,
                "attribution": {
                    "createdOn": "2024-04-12T07:01:19.000+0000",
                    "lastUpdatedOn": "2024-04-12T07:01:19.000+0000",
                    "lastUpdatedBy": {
                        "id": 75071236,
                        "code": "1675780342_",
                        "description": "",
                        "name": "tom sawyer",
                        "type": "ADMIN_USER"
                    },
                    "createdBy": {
                        "id": 75071236,
                        "code": "1675780342_",
                        "description": "",
                        "name": "tom sawyer",
                        "type": "ADMIN_USER"
                    }
                },
                "name": "efef",
                "preferredTillId": 75050873,
                "targets": [
                    {
                        "targetId": 2162472,
                        "periodId": 1814,
                        "periodRefCode": "Cycle_1",
                        "periodStartDate": "2024-04-12",
                        "periodEndDate": "2024-05-11",
                        "targetValue": 11.000,
                        "targetAchievedValue": 2600.000,
                        "targetName": "efef",
                        "targetType": "GROSS_SALES",
                        "targetEntity": "TRANSACTION",
                        "targetRuleId": 429,
                        "enrolledOn": "2024-04-12T07:02:39.000+0000",
                        "eventName": "TransactionAdd",
                        "periodStartDateWithTimeStamp": "2024-04-12T00:00:00.000Z",
                        "periodEndDateWithTimeStamp": "2024-05-11T23:59:59.000Z",
                        "currentPeriod": true,
                        "milestones": null
                    }
                ],
                "targetEvaluationType": "FIXED_CALENDAR_WINDOW",
                "trackingType": "DEFAULT"
            },
            {
                "id": 871,
                "attribution": {
                    "createdOn": "2024-04-18T11:37:38.000+0000",
                    "lastUpdatedOn": "2024-04-18T11:37:38.000+0000",
                    "lastUpdatedBy": {
                        "id": 75071236,
                        "code": "1675780342_",
                        "description": "",
                        "name": "tom sawyer",
                        "type": "ADMIN_USER"
                    },
                    "createdBy": {
                        "id": 75071236,
                        "code": "1675780342_",
                        "description": "",
                        "name": "naresh silla",
                        "type": "ADMIN_USER"
                    }
                },
                "name": "Drink a coffee everyday",
                "preferredTillId": 75050875,
                "targets": [
                    {
                        "targetId": 2180118,
                        "periodId": 1896,
                        "periodRefCode": "Cycle_1",
                        "periodStartDate": "2024-04-18",
                        "periodEndDate": "2024-04-18",
                        "targetValue": 1.000,
                        "targetAchievedValue": 130.000,
                        "targetName": "Drink a coffee everyday",
                        "targetType": "QUANTITY",
                        "targetEntity": "LINEITEM",
                        "targetRuleId": 443,
                        "enrolledOn": "2024-04-18T11:53:08.000+0000",
                        "eventName": "TransactionAdd",
                        "periodStartDateWithTimeStamp": "2024-04-18T00:00:00.000Z",
                        "periodEndDateWithTimeStamp": "2024-04-18T23:59:59.000Z",
                        "currentPeriod": false,
                        "milestones": null
                    },
                    {
                        "targetId": 2181420,
                        "periodId": 1897,
                        "periodRefCode": "Cycle_2",
                        "periodStartDate": "2024-04-19",
                        "periodEndDate": "2024-04-19",
                        "targetValue": 1.000,
                        "targetAchievedValue": 390.000,
                        "targetName": "Drink a coffee everyday",
                        "targetType": "QUANTITY",
                        "targetEntity": "LINEITEM",
                        "targetRuleId": 443,
                        "enrolledOn": "2024-04-19T07:21:32.000+0000",
                        "eventName": "TransactionAdd",
                        "periodStartDateWithTimeStamp": "2024-04-19T00:00:00.000Z",
                        "periodEndDateWithTimeStamp": "2024-04-19T23:59:59.000Z",
                        "currentPeriod": false,
                        "milestones": null
                    }
                ],
                "streaks": [
                    {
                        "userStreakId": 5,
                        "streakId": 48,
                        "streakName": "Drink a coffee everyday_1",
                        "status": "INPROGRESS",
                        "currentCount": 2,
                        "totalTargetCountOfSequence": 5
                    }
                ],
                "targetEvaluationType": "FIXED_CALENDAR_WINDOW",
                "trackingType": "STREAKS"
            },
            {
                "id": 872,
                "attribution": {
                    "createdOn": "2024-04-18T11:40:02.000+0000",
                    "lastUpdatedOn": "2024-04-18T11:40:02.000+0000",
                    "lastUpdatedBy": {
                        "id": 75071236,
                        "code": "1675780342_",
                        "description": "",
                        "name": "tom sawyer",
                        "type": "ADMIN_USER"
                    },
                    "createdBy": {
                        "id": 75071236,
                        "code": "1675780342_",
                        "description": "",
                        "name": "tom sawyer",
                        "type": "ADMIN_USER"
                    }
                },
                "name": "Post a picture everyday",
                "preferredTillId": 75050874,
                "targets": [
                    {
                        "targetId": 2180119,
                        "periodId": 1936,
                        "periodRefCode": "Cycle_1",
                        "periodStartDate": "2024-04-18",
                        "periodEndDate": "2024-04-18",
                        "targetValue": 1.000,
                        "targetAchievedValue": 1.000,
                        "targetName": "Post a picture everyday",
                        "targetType": "COUNT",
                        "targetEntity": "TRANSACTION",
                        "targetRuleId": 444,
                        "enrolledOn": "2024-04-18T11:53:08.000+0000",
                        "eventName": "TransactionAdd",
                        "periodStartDateWithTimeStamp": "2024-04-18T00:00:00.000Z",
                        "periodEndDateWithTimeStamp": "2024-04-18T23:59:59.000Z",
                        "currentPeriod": false,
                        "milestones": null
                    },
                    {
                        "targetId": 2181421,
                        "periodId": 1937,
                        "periodRefCode": "Cycle_2",
                        "periodStartDate": "2024-04-19",
                        "periodEndDate": "2024-04-19",
                        "targetValue": 1.000,
                        "targetAchievedValue": 3.000,
                        "targetName": "Post a picture everyday",
                        "targetType": "COUNT",
                        "targetEntity": "TRANSACTION",
                        "targetRuleId": 444,
                        "enrolledOn": "2024-04-19T07:21:33.000+0000",
                        "eventName": "TransactionAdd",
                        "periodStartDateWithTimeStamp": "2024-04-19T00:00:00.000Z",
                        "periodEndDateWithTimeStamp": "2024-04-19T23:59:59.000Z",
                        "currentPeriod": false,
                        "milestones": null
                    }
                ],
                "streaks": [
                    {
                        "userStreakId": 6,
                        "streakId": 52,
                        "streakName": "Post a picture everyday_1",
                        "status": "INPROGRESS",
                        "currentCount": 2,
                        "totalTargetCountOfSequence": 10
                    }
                ],
                "targetEvaluationType": "FIXED_CALENDAR_WINDOW",
                "trackingType": "STREAKS"
            },
            {
                "id": 862,
                "attribution": {
                    "createdOn": "2024-04-16T14:50:21.000+0000",
                    "lastUpdatedOn": "2024-04-16T14:50:21.000+0000",
                    "lastUpdatedBy": {
                        "id": 75071236,
                        "code": "1675780342_",
                        "description": "",
                        "name": "tom sawyer",
                        "type": "ADMIN_USER"
                    },
                    "createdBy": {
                        "id": 75071236,
                        "code": "1675780342_",
                        "description": "",
                        "name": "tom sawyer",
                        "type": "ADMIN_USER"
                    }
                },
                "name": "egeger",
                "preferredTillId": 75050874,
                "targets": [
                    {
                        "targetId": 2176896,
                        "periodId": 1841,
                        "periodRefCode": "Cycle_1",
                        "periodStartDate": "2024-04-16",
                        "periodEndDate": "2024-05-15",
                        "targetValue": 11.000,
                        "targetAchievedValue": 2200.000,
                        "targetName": "egeger",
                        "targetType": "GROSS_SALES",
                        "targetEntity": "TRANSACTION",
                        "targetRuleId": 437,
                        "enrolledOn": "2024-04-17T08:01:05.000+0000",
                        "eventName": "TransactionAdd",
                        "periodStartDateWithTimeStamp": "2024-04-16T00:00:00.000Z",
                        "periodEndDateWithTimeStamp": "2024-05-15T23:59:59.000Z",
                        "currentPeriod": true,
                        "milestones": null
                    }
                ],
                "targetEvaluationType": "FIXED_CALENDAR_WINDOW",
                "trackingType": "DEFAULT"
            }
        ]
    },
    "errors": null,
    "warnings": null
}

```
```json With milestone detail
{
    "data": {
        "userId": 547528790,
        "customer": {
            "id": 547528790,
            "profiles": [
                {
                    "firstName": "Tom",
                    "lastName": "Sawyer",
                    "commChannels": [
                        {
                            "type": "mobile",
                            "accountId": null,
                            "value": "919988221100",
                            "primary": false,
                            "verified": false,
                            "subscribed": null,
                            "attributes": null
                        }
                    ],
                    "source": "instore",
                    "accountId": "",
                    "userId": 547528790,
                    "orgSourceId": -1
                }
            ],
            "loyaltyInfo": {
                "attribution": {
                    "createdOn": "2023-06-21T15:18:56.000+0000",
                    "lastUpdatedOn": "2023-10-25T14:22:47.000+0000",
                    "lastUpdatedBy": {
                        "id": 75074637,
                        "code": null,
                        "description": null,
                        "name": null,
                        "type": null
                    },
                    "createdBy": {
                        "id": 75036445,
                        "code": null,
                        "description": null,
                        "name": null,
                        "type": null
                    }
                },
                "loyaltyType": "loyalty",
                "lifetimePurchases": 1111.000
            },
            "customFields": {
                "gender": ""
            }
        },
        "targetGroups": [
            {
                "id": 995,
                "attribution": {
                    "createdOn": "2024-02-20T05:45:04.000+0000",
                    "lastUpdatedOn": "2024-02-20T05:45:04.000+0000",
                    "lastUpdatedBy": {
                        "id": 75050734,
                        "code": "1630580928_",
                        "description": "",
                        "name": "Tom Sawyer",
                        "type": "ADMIN_USER"
                    },
                    "createdBy": {
                        "id": 75050734,
                        "code": "1630580928_",
                        "description": "",
                        "name": "Tom Sawyer",
                        "type": "ADMIN_USER"
                    }
                },
                "name": "Jotun Painter- buy 10X in 1 month to unlock a voucher",
                "preferredTillId": 75046500,
                "targets": [
                    {
                        "targetId": 9443405,
                        "periodId": 2622,
                        "periodRefCode": "Cycle_3",
                        "periodStartDate": "2024-05-01",
                        "periodEndDate": "2024-05-31",
                        "targetValue": 10.000,
                        "targetAchievedValue": 0,
                        "targetName": "Jotun Painter- buy 10X in 1 month to unlock a voucher",
                        "targetType": "COUNT",
                        "targetEntity": "TRANSACTION",
                        "targetRuleId": 1059,
                        "enrolledOn": "2024-02-20T05:56:35.000+0000",
                        "eventName": "TransactionAdd",
                        "periodStartDateWithTimeStamp": "2024-05-01T00:00:00.000Z",
                        "periodEndDateWithTimeStamp": "2024-05-31T23:59:59.000Z",
                        "currentPeriod": true,
                        "milestones": [
                            {
                                "id": 201,
                                "triggerName": "3",
                                "triggerValue": 3.000000,
                                "isAchieved": false
                            },
                            {
                                "id": 202,
                                "triggerName": "5",
                                "triggerValue": 5.000000,
                                "isAchieved": false
                            }
                        ]
                    },
                    {
                        "targetId": 14174302,
                        "periodId": 2622,
                        "periodRefCode": "Cycle_3",
                        "periodStartDate": "2024-05-01",
                        "periodEndDate": "2024-05-31",
                        "targetValue": 10.000,
                        "targetAchievedValue": 0,
                        "targetName": "Jotun Painter- buy 10X in 1 month to unlock a voucher_ReturnBill",
                        "targetType": "COUNT",
                        "targetEntity": "TRANSACTION",
                        "targetRuleId": 1060,
                        "enrolledOn": "2024-02-20T06:18:59.000+0000",
                        "eventName": "ReturnBill",
                        "periodStartDateWithTimeStamp": "2024-05-01T00:00:00.000Z",
                        "periodEndDateWithTimeStamp": "2024-05-31T23:59:59.000Z",
                        "currentPeriod": true,
                        "milestones": null
                    }
                ],
                "targetEvaluationType": "FIXED_CALENDAR_WINDOW",
                "trackingType": "DEFAULT"
            }
        ]
    },
    "errors": null,
    "warnings": null
}
```
```json when includeInactiveTargets= TRUE
response:  {
  "data": {
    "userId": 387043873,
    "customer": {
      "id": 387043873,
      "profiles": [
        {
          "firstName": "Tom",
          "lastName": "Sawyer",
          "commChannels": [
            {
              "type": "mobile",
              "accountId": null,
              "value": "918711533321",
              "primary": false,
              "verified": false,
              "subscribed": null,
              "attributes": null
            },
            {
              "type": "email",
              "accountId": null,
              "value": "tom.sawyer@capillarytech.com",
              "primary": false,
              "verified": false,
              "subscribed": null,
              "attributes": null
            }
          ],
          "source": "instore",
          "accountId": "",
          "userId": 387043873,
          "orgSourceId": -1
        }
      ],
      "loyaltyInfo": {
        "attribution": {
          "createdOn": "2024-06-20T12:23:15.000+0530",
          "lastUpdatedOn": "2024-06-20T12:23:15.000+0530",
          "lastUpdatedBy": {
            "id": 50699946,
            "code": null,
            "description": null,
            "name": null,
            "type": null
          },
          "createdBy": {
            "id": 50699946,
            "code": null,
            "description": null,
            "name": null,
            "type": null
          }
        },
        "loyaltyType": "loyalty",
        "lifetimePurchases": 0
      },
      "customFields": {}
    },
    "targetGroups": [
      {
        "id": 32960,
        "attribution": {
          "createdOn": "2024-06-20T12:23:11.000+0530",
          "lastUpdatedOn": "2024-06-20T12:23:11.000+0530",
          "lastUpdatedBy": {
            "id": 50699946,
            "code": "default.till.pyapps.sanity",
            "description": "",
            "name": "default.till.pyapps.sanity",
            "type": "TILL"
          },
          "createdBy": {
            "id": 50699946,
            "code": "default.till.pyapps.sanity",
            "description": "",
            "name": "default.till.pyapps.sanity",
            "type": "TILL"
          }
        },
        "name": "TG_2024-06-20T12:23:10.607325Z",
        "preferredTillId": 50699946,
        "targets": [
          {
            "targetId": 534707,
            "periodId": 43130,
            "periodRefCode": "TestPeriod1",
            "periodStartDate": "2024-06-20",
            "periodEndDate": "2024-06-20",
            "targetValue": 1000.0,
            "targetAchievedValue": 900.0,
            "targetName": "testTargetFixedWindow_2024-06-20T12:23:12.210034Z",
            "targetType": "SALES",
            "targetEntity": "TRANSACTION",
            "targetRuleId": 59857,
            "enrolledOn": "2024-06-20T12:23:17.000+0530",
            "eventName": "TransactionAdd",
            "periodStartDateWithTimeStamp": "2024-06-20T00:00:00.000Z",
            "periodEndDateWithTimeStamp": "2024-06-20T23:59:59.000Z",
            "targetAchievedDateTime": null,
            "currentPeriod": true,
            "milestones": null
          }
        ],
        "targetEvaluationType": "FIXED_CALENDAR_WINDOW",
        "trackingType": "DEFAULT"
      }
    ]
  },
  "errors": null,
  "warnings": null
}
```
```json With Target Evaluation type as Cyclic Window
{
    "data": {
        "userId": 387035386,
        "customer": {
            "id": 387035386,
            "profiles": [
                {
                    "firstName": "",
                    "lastName": "",
                    "commChannels": [
                        {
                            "type": "email",
                            "accountId": null,
                            "value": "tom.sawyer@capillarytech.com",
                            "primary": false,
                            "verified": false,
                            "subscribed": null,
                            "attributes": null
                        },
                        {
                            "type": "mobile",
                            "accountId": null,
                            "value": "919988221100",
                            "primary": false,
                            "verified": false,
                            "subscribed": null,
                            "attributes": null
                        }
                    ],
                    "source": "instore",
                    "accountId": "",
                    "userId": 387035386,
                    "orgSourceId": -1
                }
            ],
            "loyaltyInfo": {
                "attribution": {
                    "createdOn": "2024-06-06T17:20:56.000+0530",
                    "lastUpdatedOn": "2024-06-13T22:55:19.000+0530",
                    "lastUpdatedBy": {
                        "id": 50139862,
                        "code": null,
                        "description": null,
                        "name": null,
                        "type": null
                    },
                    "createdBy": {
                        "id": 50139862,
                        "code": null,
                        "description": null,
                        "name": null,
                        "type": null
                    }
                },
                "loyaltyType": "loyalty",
                "lifetimePurchases": 6000
            },
            "customFields": {}
        },
        "targetGroups": [
            {
                "id": 34044,
                "attribution": {
                    "createdOn": "2024-07-01T20:15:57.000+0530",
                    "lastUpdatedOn": "2024-07-01T20:15:57.000+0530",
                    "lastUpdatedBy": {
                        "id": 50139862,
                        "code": "default.till.pyapps01",
                        "description": "",
                        "name": "default.till.pyapps01",
                        "type": "TILL"
                    },
                    "createdBy": {
                        "id": 50139862,
                        "code": "default.till.pyapps01",
                        "description": "",
                        "name": "default.till.pyapps01",
                        "type": "TILL"
                    }
                },
                "name": "TG_2024-07-01T20:15:56.231866Z",
                "preferredTillId": 50139862,
                "targets": [
                    {
                        "targetId": null,
                        "periodId": 45523,
                        "periodRefCode": "PERIOD_G_34044_1",
                        "periodStartDate": "2024-07-01",
                        "periodEndDate": "2024-07-01",
                        "targetValue": 1500.000,
                        "targetAchievedValue": 0,
                        "targetName": "testTargetFixedWindow_2024-07-01T20:15:56.847445Z",
                        "targetType": "GROSS_SALES",
                        "targetEntity": "TRANSACTION",
                        "targetRuleId": 61853,
                        "enrolledOn": "2024-07-30T11:32:56.360+0530",
                        "eventName": "TransactionAdd",
                        "periodStartDateWithTimeStamp": "2024-07-01T20:15:57.000Z",
                        "periodEndDateWithTimeStamp": "2024-07-01T20:15:57.000Z",
                        "targetAchievedDateTime": null,
                        "currentPeriod": false,
                        "milestones": [
                            {
                                "id": 10794,
                                "triggerName": "targetAchieved",
                                "triggerValue": 1500.000000,
                                "isAchieved": false
                            }
                        ]
                    }
                ],
                "targetEvaluationType": "CYCLIC_WINDOW",
                "trackingType": "DEFAULT"
            },
            {
                "id": 34045,
                "attribution": {
                    "createdOn": "2024-07-01T20:18:46.000+0530",
                    "lastUpdatedOn": "2024-07-01T20:18:46.000+0530",
                    "lastUpdatedBy": {
                        "id": 50139862,
                        "code": "default.till.pyapps01",
                        "description": "",
                        "name": "default.till.pyapps01",
                        "type": "TILL"
                    },
                    "createdBy": {
                        "id": 50139862,
                        "code": "default.till.pyapps01",
                        "description": "",
                        "name": "default.till.pyapps01",
                        "type": "TILL"
                    }
                },
                "name": "TG_2024-07-01T20:18:45.830768Z",
                "preferredTillId": 50139862,
                "targets": [
                    {
                        "targetId": null,
                        "periodId": 45524,
                        "periodRefCode": "PERIOD_G_34045_1",
                        "periodStartDate": "2024-07-01",
                        "periodEndDate": "2024-07-01",
                        "targetValue": 1.000,
                        "targetAchievedValue": 0,
                        "targetName": "testTargetFixedWindow_2024-07-01T20:18:46.152676Z",
                        "targetType": "QUANTITY",
                        "targetEntity": "TRANSACTION",
                        "targetRuleId": 61855,
                        "enrolledOn": "2024-07-30T11:32:56.360+0530",
                        "eventName": "TransactionAdd",
                        "periodStartDateWithTimeStamp": "2024-07-01T20:18:46.000Z",
                        "periodEndDateWithTimeStamp": "2024-07-01T20:18:46.000Z",
                        "targetAchievedDateTime": null,
                        "currentPeriod": false,
                        "milestones": [
                            {
                                "id": 10795,
                                "triggerName": "targetAchieved",
                                "triggerValue": 1.000000,
                                "isAchieved": false
                            }
                        ]
                    }
                ],
                "targetEvaluationType": "CYCLIC_WINDOW",
                "trackingType": "DEFAULT"
            }
        ]
    },
    "errors": null,
    "warnings": null
}
```
```json With streak achieved DateTime
                "streaks": [
                    {
                        "userStreakId": 380,
                        "streakId": 191,
                        "streakName": "test3_1",
                        "status": "ACHIEVED",
                        "currentCount": 2,
                        "totalTargetCountOfSequence": 2,
                        "streakAchievedUserTargetId": 1248310,
                        "streakAchievedDateTime": "2024-06-10T13:57:58.000+0000"
                    }
                ],
   
```
```json With target achieved DateTime
                    {
                        "targetId": 1248300,
                        "periodId": 2670,
                        "periodRefCode": "Cycle_2",
                        "periodStartDate": "2024-06-01",
                        "periodEndDate": "2024-06-30",
                        "targetValue": 100.000,
                        "targetAchievedValue": 1000.000,
                        "targetName": "test2",
                        "targetType": "SALES",
                        "targetEntity": "TRANSACTION",
                        "targetRuleId": 2391,
                        "enrolledOn": "2024-06-10T13:56:27.000+0000",
                        "eventName": "TransactionAdd",
                        "periodStartDateWithTimeStamp": "2024-06-01T00:00:00.000Z",
                        "periodEndDateWithTimeStamp": "2024-06-30T23:59:59.000Z",
                        "targetAchievedDateTime": "2024-06-10T13:56:27.000+0000",
                        "currentPeriod": true,
                        "milestones": null
                    }              
```