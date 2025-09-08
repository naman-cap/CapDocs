---
title: Get target events
excerpt: Get events that are associated with a target or streak
api:
  file: v3.json
  operationId: get-target-events
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
This API fetches the [events](https://docs.capillarytech.com/docs/setup-test-behavioral-events) that are associated with a target or streak for a customer. Enter a `userId` (customer Id) and the `targetRuleId` of the target the customer is enrolled in to fetch the data of the customer events (behavioural and non-behavioural).

> 👍 Note
>
> For detailed information about the APIs and for hands-on testing, refer to the [API overview](https://docs.capillarytech.com/reference/apioverview) documentation and step-by-step guide on [making your first API call](https://docs.capillarytech.com/reference/make-your-first-api-call).

# Prerequisites

*   Authentication: Basic/OAuth authentication
*   Default access group

# Resource Information

|               |                                                                              |
| :------------ | :--------------------------------------------------------------------------- |
| URI           | /users/`{userId}`/trackedTargetEvents/`{targetRuleId}`                       |
| HTTP method   | GET                                                                          |
| Pagination    | Yes. Sorting is not supported. Results are displayed in chronological order. |
| Rate limit    | NA                                                                           |
| Batch support | NA                                                                           |

# API cURL example

```curl
curl --location 'https://eu.api.capillarytech.com/v3/users/564332013/trackedTargetEvents/1986?periodId=9889&limit=5&offset=0' \
--header 'Content-Type: application/json' \
--header 'Authorization: Basic bmFtYW5fZG9jOmEzY2I2MmEy' \
--header 'Cookie: _cfuvid=zcU0pObn4E.A.gGF79a_o-1737693237027-0.0.1.1-604800000'
```

# Path parameters

| Parameter Name | Data Type | Description                   |
| -------------- | --------- | ----------------------------- |
| userId         | Long      | Unique ID of the customer.    |
| targetRuleId   | Long      | Unique ID of the target rule. |

Use the [Get associated target groups of a user API](https://docs.capillarytech.com/reference/getusertargetgroupdetails) to fetch the `targetRuleId `for a customer enrolled in a milestone target. |

# Query parameters

| Parameter Name | Data Type | Description                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| -------------- | --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `periodId`     | Long      | Unique ID of the target period. Provide a `periodId` to filter events for a specific time period / [target cycle](https://docs.capillarytech.com/docs/milestones-new-flow#milestone-cycle-details) within the target. <br /><br />Use the [Get target periods API](https://docs.capillarytech.com/reference/get-target-periods) and use the `targetGroupId` of the target to fetch the `periodId` for a customer enrolled in a milestone / target. |
| `limit`        | Integer   | Number of events to display per page. For example, if the total events are 15 and the limit is 5, the first page will display the first 5 events.                                                                                                                                                                                                                                                                                                  |
| `offset`       | Integer   | Page number to retrieve. To view the first page, set the value to 0.                                                                                                                                                                                                                                                                                                                                                                               |

| Parameter Name | Data Type | Description                                                                                                                                                                                                         |
| -------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| periodId       | Long      | Unique ID of the target period. Provide a `periodId` to filter events for a specific time period [target cycle](https://docs.capillarytech.com/docs/milestones-new-flow#milestone-cycle-details) within the target. |

# Response parameters

| Parameter                  | Description                                                                                                                                                                      |
| -------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `pagination`               | Object containing details of the page.                                                                                                                                           |
|     `- limit`              | Number of events displayed on the page.                                                                                                                                          |
|     `- offset`             | Current page number.                                                                                                                                                             |
|     `- total`              | Total number of pages.                                                                                                                                                           |
| `data`                     | Object containing details of the events.                                                                                                                                         |
|     `- eventLogId`         | Unique ID of the event that is triggered.                                                                                                                                        |
|     `- eventName`          | Name of the event. Possible values: `GENERIC_EVENT`, `ADD_TRANSACTION`, `RETURN_BILL`, `ENROL`, `UNENROL`                                                                        |
|     `- customerId`         | Unique ID of the customer who triggered the event.                                                                                                                               |
|     `- eventDisplayName`   | Unique name of the behavioral event that is triggered. The value is `null` for transactional events.                                                                             |
|     `- uniqueId`           | Unique ID of the event. For a behavioral event, the `uniqueId` is the `requestId` of the event. For a non-behavioral event, the `uniqueId` is the `eventSubjectId` of the event. |
|     `- eventDate`          | Date when the event is triggered in `YYYY-MM-DD HH:MM:SS.s` format.                                                                                                              |
|     `- eventProcessedDate` | Date when the event is processed by the backend in `YYYY-MM-DD HH:MM:SS.s` format.                                                                                               |
|     `- periodId`           | Unique ID of the [target period](https://docs.capillarytech.com/docs/milestones-new-flow#milestone-cycle-details).                                                               |
|     `- targetGroupId`      | Unique ID of the target group associated with the target.                                                                                                                        |
|     `- targetRuleId`       | Unique ID of the target rule.                                                                                                                                                    |
|     `- targetValue`        | Total transaction amount for a transactional event. For behavioral event the value is always `1.000`.                                                                            |
| `errors`                   | Object containing errors, if any.                                                                                                                                                |
| `warnings`                 | Object containing warnings, if any.                                                                                                                                              |

<br />

```json Transactional Events
{
    "pagination": {
        "limit": 10,
        "offset": 0,
        "total": 10
    },
    "data": [
        {
            "eventLogId": 606066681,
            "eventName": "ADD_TRANSACTION",
            "customerId": 564332013,
            "eventDisplayName": null,
            "uniqueId": "880613909",
            "eventDate": "2025-01-09 12:00:12.0",
            "eventProcessedDate": "2025-01-09 12:00:12.0",
            "periodId": 9887,
            "targetGroupId": 1717,
            "targetRuleId": 1986,
            "targetValue": 1000
        },
        {
            "eventLogId": 606066721,
            "eventName": "ADD_TRANSACTION",
            "customerId": 564332013,
            "eventDisplayName": null,
            "uniqueId": "880613938",
            "eventDate": "2025-01-09 12:00:12.0",
            "eventProcessedDate": "2025-01-09 12:00:12.0",
            "periodId": 9887,
            "targetGroupId": 1717,
            "targetRuleId": 1986,
            "targetValue": 2000
        },
        {
            "eventLogId": 606068043,
            "eventName": "ADD_TRANSACTION",
            "customerId": 564332013,
            "eventDisplayName": null,
            "uniqueId": "880614460",
            "eventDate": "2025-01-09 12:00:12.0",
            "eventProcessedDate": "2025-01-09 12:00:12.0",
            "periodId": 9887,
            "targetGroupId": 1717,
            "targetRuleId": 1986,
            "targetValue": 2000
        },
        {
            "eventLogId": 606072487,
            "eventName": "ADD_TRANSACTION",
            "customerId": 564332013,
            "eventDisplayName": null,
            "uniqueId": "880616667",
            "eventDate": "2025-01-09 13:00:12.0",
            "eventProcessedDate": "2025-01-09 13:00:12.0",
            "periodId": 9887,
            "targetGroupId": 1717,
            "targetRuleId": 1986,
            "targetValue": 2000.46
        },
        {
            "eventLogId": 608082820,
            "eventName": "ADD_TRANSACTION",
            "customerId": 564332013,
            "eventDisplayName": null,
            "uniqueId": "880897427",
            "eventDate": "2025-01-09 13:00:12.0",
            "eventProcessedDate": "2025-01-09 13:00:12.0",
            "periodId": 9887,
            "targetGroupId": 1717,
            "targetRuleId": 1986,
            "targetValue": 2000.46
        },
        {
            "eventLogId": 615116253,
            "eventName": "ADD_TRANSACTION",
            "customerId": 564332013,
            "eventDisplayName": null,
            "uniqueId": "881039056",
            "eventDate": "2025-01-20 13:00:00.0",
            "eventProcessedDate": "2025-01-20 13:00:00.0",
            "periodId": 9888,
            "targetGroupId": 1717,
            "targetRuleId": 1986,
            "targetValue": 999.54
        },
        {
            "eventLogId": 615376598,
            "eventName": "ADD_TRANSACTION",
            "customerId": 564332013,
            "eventDisplayName": null,
            "uniqueId": "881070102",
            "eventDate": "2025-01-21 09:00:00.0",
            "eventProcessedDate": "2025-01-21 09:00:00.0",
            "periodId": 9888,
            "targetGroupId": 1717,
            "targetRuleId": 1986,
            "targetValue": 2000
        },
        {
            "eventLogId": 615376684,
            "eventName": "ADD_TRANSACTION",
            "customerId": 564332013,
            "eventDisplayName": null,
            "uniqueId": "881070130",
            "eventDate": "2025-01-21 09:00:00.0",
            "eventProcessedDate": "2025-01-21 09:00:00.0",
            "periodId": 9888,
            "targetGroupId": 1717,
            "targetRuleId": 1986,
            "targetValue": 1000
        },
        {
            "eventLogId": 615460983,
            "eventName": "ADD_TRANSACTION",
            "customerId": 564332013,
            "eventDisplayName": null,
            "uniqueId": "881101809",
            "eventDate": "2025-01-22 14:00:00.0",
            "eventProcessedDate": "2025-01-22 14:00:00.0",
            "periodId": 9889,
            "targetGroupId": 1717,
            "targetRuleId": 1986,
            "targetValue": 1000
        },
        {
            "eventLogId": 615461137,
            "eventName": "ADD_TRANSACTION",
            "customerId": 564332013,
            "eventDisplayName": null,
            "uniqueId": "881101873",
            "eventDate": "2025-01-22 14:00:00.0",
            "eventProcessedDate": "2025-01-22 14:00:00.0",
            "periodId": 9889,
            "targetGroupId": 1717,
            "targetRuleId": 1986,
            "targetValue": 1000
        }
    ],
    "errors": [],
    "warnings": []
}
```
```json Behavioral Events
{
    "pagination": {
        "limit": 1,
        "offset": 0,
        "total": 2
    },
    "data": [
        {
            "eventLogId": 31748158,
            "eventName": "GENERIC_EVENT",
            "customerId": 387544807,
            "eventDisplayName": "testBehavioural",
            "uniqueId": "6621dee9-6c2a-43ad-aa41-be2bf138de04",
            "eventDate": "2024-12-05 00:00:00.0",
            "eventProcessedDate": "2024-12-12 18:42:52.0",
            "periodId": 77865,
            "targetGroupId": 52065,
            "targetRuleId": 79192,
            "targetValue": 1.000
        }
    ],
    "errors": [],
    "warnings": []
}
```
```json with periodId
{
    "pagination": {
        "limit": 30,
        "offset": 0,
        "total": 2
    },
    "data": [
        {
            "eventLogId": 615460983,
            "eventName": "ADD_TRANSACTION",
            "customerId": 564332013,
            "eventDisplayName": null,
            "uniqueId": "881101809",
            "eventDate": "2025-01-22 14:00:00.0",
            "eventProcessedDate": "2025-01-22 14:00:00.0",
            "periodId": 9889,
            "targetGroupId": 1717,
            "targetRuleId": 1986,
            "targetValue": 1000
        },
        {
            "eventLogId": 615461137,
            "eventName": "ADD_TRANSACTION",
            "customerId": 564332013,
            "eventDisplayName": null,
            "uniqueId": "881101873",
            "eventDate": "2025-01-22 14:00:00.0",
            "eventProcessedDate": "2025-01-22 14:00:00.0",
            "periodId": 9889,
            "targetGroupId": 1717,
            "targetRuleId": 1986,
            "targetValue": 1000
        }
    ],
    "errors": [],
    "warnings": []
}
```

# API error codes

| Error Code | Description                                                  | Reason                               |
| :--------- | :----------------------------------------------------------- | :----------------------------------- |
| 310019     | Target period not found                                      | `periodId` is incorrect or invalid.  |
| 310018     | Target rule not found                                        | `ruleId` is incorrect or invalid.    |
| 310011     | Invalid userId                                               | `userId` is incorrect or invalid.    |
| 310149     | No record found in user target for given UserId and TargetId | No events are recorded for the user. |