---
title: Get Reward Expiry Reminder
excerpt: ''
api:
  file: v1.json
  operationId: get-reward-expiry-reminder
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
This API allows you to retrieve information of all the reward expiry reminder which was set.

> 👍 Note
>
> For detailed information about our APIs and for hands-on testing, refer documentation in [API overview](https://docs.capillarytech.com/reference/apioverview) and step-by-step guide on making your first API call in [Make your first API call](https://docs.capillarytech.com/reference/make-your-first-api-call).

# Prerequisites

*   Basic or OAuth Authentication
*   Default access group

# Resource information

|                        |                                                     |
| :--------------------- | :-------------------------------------------------- |
| URI                    | /api\_gateway/rewards/core/v1/reward/expiryReminder |
| HTTP Method            | GET                                                 |
| Pagination             | Yes                                                 |
| Batch support          | No                                                  |
| Rate limit information | None                                                |

# API endpoint example

`https://eu.api.capillarytech.com/api_gateway/rewards/core/v1/reward/expiryReminder?filter=ACTIVE&size=10&page=0`

# Request query parameters

<Table>
  <thead>
    <tr>
      <th>
        Parameter Name
      </th>

      <th>
        Datatype
      </th>

      <th>
        Description
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        filter
      </td>

      <td>
        Boolean
      </td>

      <td>
        Filters the active or inactive reward expiry reminder. Supported values: ACTIVE and INACTIVE, both in uppercase.
        **NOTE:**  If no filters are provided, the default value in the response will be set to ACTIVE.
      </td>
    </tr>

    <tr>
      <td>
        size
      </td>

      <td>
        Integer
      </td>

      <td>
        The number of items or records returned in a single API response.
      </td>
    </tr>

    <tr>
      <td>
        page
      </td>

      <td>
        Integer
      </td>

      <td>
        The amount of the data that you want to retrieve.
      </td>
    </tr>
  </tbody>
</Table>

# Response parameters

| Parameter Name | Description                                                                                                                                         |
| -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| id             | Unique identifier for the reward expiry reminder.                                                                                                   |
| orgId          | Identifier for the organization associated with the reminder.                                                                                       |
| duration       | Duration before the expiry to send a reminder.                                                                                                      |
| durationType   | Type of duration.                                                                                                                                   |
| cronTaskId     | This is the unique database identifier for each cron setup, with each cron associated with specific timing, modules, and other relevant parameters. |
| timing         | Time at which the reminder will be triggered (in HH:MM format).                                                                                     |
| isActive       | Indicates whether the reminder is currently active.                                                                                                 |
| createdOn      | Timestamp of when the reminder was created in epoch timestamp                                                                                       |
| lastUpdatedOn  | Timestamp of the last update in epoch timestamp.                                                                                                    |
| createdBy      | Identifier of the user who created the reminder.                                                                                                    |
| lastUpdatedBy  | Identifier of the user who last updated the reminder.                                                                                               |
| pagingDto      | Details of pagination.                                                                                                                              |

<br />

```json
{
    "rewardExpiryReminder": [
        {
            "id": 5,
            "orgId": 100458,
            "duration": 15,
            "durationType": "DAYS",
            "cronTaskId": 590567,
            "timing": "12:00",
            "isActive": true,
            "createdOn": 1727681940000,
            "lastUpdatedOn": 1727681946000,
            "createdBy": 75130850,
            "lastUpdatedBy": 75130850
        },
        {
            "id": 2,
            "orgId": 100458,
            "duration": 15,
            "durationType": "DAYS",
            "cronTaskId": 590564,
            "timing": "12:00",
            "isActive": true,
            "createdOn": 1727680228000,
            "lastUpdatedOn": 1727681674000,
            "createdBy": 75130850,
            "lastUpdatedBy": 75130850
        },
        {
            "id": 4,
            "orgId": 100458,
            "duration": 32,
            "durationType": "DAYS",
            "cronTaskId": 590566,
            "timing": "18:00",
            "isActive": true,
            "createdOn": 1727681405000,
            "lastUpdatedOn": 1727681405000,
            "createdBy": 75130850,
            "lastUpdatedBy": 75130850
        },
        {
            "id": 3,
            "orgId": 100458,
            "duration": 32,
            "durationType": "DAYS",
            "cronTaskId": 590565,
            "timing": "18:00",
            "isActive": true,
            "createdOn": 1727680457000,
            "lastUpdatedOn": 1727680457000,
            "createdBy": 75130850,
            "lastUpdatedBy": 75130850
        }
    ],
    "pagingDto": {
        "last": true,
        "totalElements": 4,
        "totalPages": 1,
        "numberOfElements": 4,
        "first": true,
        "size": 10,
        "number": 0
    }
}
```
```json Failure: Size should be >=1
{
    "status": {
        "success": false,
        "code": 400,
        "message": "size should be greater or equal to 1."
    }
}
```
```json Failure: Page should be >=0
{
    "status": {
        "success": false,
        "code": 400,
        "message": "page should be greater or equal to 0."
    }
}
```

<br />

# API-specific error codes

<Table align={["left","left"]}>
  <thead>
    <tr>
      <th>
        Error code
      </th>

      <th>
        Description
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        400
      </td>

      <td>
        * Size should be greater or equal to 1.
      </td>
    </tr>

    <tr>
      <td>
        400
      </td>

      <td>
        * Page should be greater or equal to 0.
      </td>
    </tr>
  </tbody>
</Table>