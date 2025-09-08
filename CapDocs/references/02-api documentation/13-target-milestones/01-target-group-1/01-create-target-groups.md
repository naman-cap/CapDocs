---
title: Create target group based on alternate currencies
excerpt: Create a target group/milestone based on alternate currencies.
api:
  file: v3.json
  operationId: create-target-based-on-alternate-currencies
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
A target group is an entity under which individual targets can be created. The targets are defined under the target group.

A target group is essential for creating a target, even when defining a single target. The target group serves as a container in the backend system. When creating a target through the user interface, you may not explicitly create a target group; however, the system automatically assigns the target to a backend group.

You can also use the same API to define targets and periods under the target group.

> 👍 Note
>
> For detailed information about our APIs and for hands-on testing, refer documentation in [API overview](https://docs.capillarytech.com/reference/apioverview) and  step-by-step guide on making your first API call in [Make your first API call](https://docs.capillarytech.com/reference/make-your-first-api-call) .

# Prerequisites

*   Authentication: Basic/OAuth authentication
*   Default access group

# Resource information

|               |                 |
| :------------ | :-------------- |
| URI           | v3/targetGroups |
| HTTP method   | POST            |
| Pagination    | NA              |
| Rate limit    | NA              |
| Batch support | NA              |

# API endpoint example

```json
https://eu.api.capillarytech.com/v3/targetGroups
```

```json cURL
curl --location 'https://eu.api.capillarytech.com/v3/targetGroups' \
--header 'Content-Type: application/json' \
--header 'Cookie: _cfuvid=aidEostKQWmdskBHmh1pchvz2wSoA1O27JghNUFOpHw-1728306311172-0.0.1.1-604800000; _cfuvid=2ieM2eqBqFdNAAdfQMYR0zNvTd6WWmQxVVyU.OyFiEw-1728475108732-0.0.1.1-604800000' \
--header 'Authorization: Basic dGpfY2FwaWxsYXJ5OjVjMT5' \
--data '{
  "active": true,
  "description": "UAT target group number thirty nine",
  "name": "uatTargetGroup39",
  "trackingType": "DEFAULT",
  "targetEvaluationType": "FIXED_CALENDAR_WINDOW",
  "totalPeriods": 1,
  "frequencyType": "DAILY",
  "frequency": 1,
  "recurringCycles": 1,
  "preferredTillId": 751552970000,
  "userCreated": false,
  "periods": [
    {
      "active": true,
      "description": "",
      "endDate": "2025-06-11T23:59:59.999Z",
      "periodStatus": "RUNNING",
      "refCode": "Cycle_1",
      "startDate": "2025-06-11T00:00:00.000Z"
    },
    {
      "active": true,
      "description": "",
      "endDate": "2025-05-11T23:59:59.999Z",
      "periodStatus": "NOT_STARTED",
      "refCode": "Cycle_2",
      "startDate": "2025-05-11T00:00:00.000Z"
    }
  ],
  "targets": [
    {
      "active": true,
      "description": "",
      "expression": true,
      "expressionJson": "{\"arity\":\"literal\",\"value\":\"true\",\"type\":\"boolean:primitive\"}",
      "filters": [],
      "name": "uat_target_group_39",
      "targetEntity": "EVENT",
      "targetType": "COUNT",
      "extendedFieldInfo": {
        "name": "points",
        "aggregateFunction": "SUM"
      },
      "defaultValues": [
        {
          "defaultValue": "1.00"
        },
        {
          "defaultValue": "1.00"
        }
      ]
    }
  ]
}' 
```

# Request body parameters

<Table align={["left","left","left"]}>
  <thead>
    <tr>
      <th>
        Parameter Name
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
        active
      </td>

      <td>
        Boolean
      </td>

      <td>
        Indicates if target tracking is active.
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
        Brief description of the target group.
      </td>
    </tr>

    <tr>
      <td>
        name\*
      </td>

      <td>
        String
      </td>

      <td>
        The name identifier for the target group.<br /><br />The character limit for the name is 200 characters.
      </td>
    </tr>

    <tr>
      <td>
        preferredTillId
      </td>

      <td>
        Number
      </td>

      <td>
        Identifier for the preferred POS till.
      </td>
    </tr>

    <tr>
      <td>
        trackingType\*
      </td>

      <td>
        String
      </td>

      <td>
        The type of tracking the milestone is created for. Supported values:<br />**`DEFAULT`**: Track a single target<br />**`UNIFIED`** :Track multiple targets<br />**`STREAK`**: Track multiple targets as a streak.<br />**`CAPPING`**: Track the number of points a user has got over a period, so that capping can be applied.<br /><br />Refer to the documentation on [milestones](https://docs.capillarytech.com/docs/milestones-new-flow), [unified targets](https://docs.capillarytech.com/docs/unified-milestones), [streaks](https://docs.capillarytech.com/docs/streaks)and [capping](https://docs.capillarytech.com/docs/advance-capping) for more information.
      </td>
    </tr>

    <tr>
      <td>
        targetEvaluationType\*
      </td>

      <td>
        String
      </td>

      <td>
        The evaluation strategy for the targets. Supported values:<br />**`FIXED_CALENDAR_WINDOW`**, **`CYCLIC_WINDOW`**, **`PERIOD_AGNOSTIC_WINDOW`**
      </td>
    </tr>

    <tr>
      <td>
        totalPeriods\*
      </td>

      <td>
        Number
      </td>

      <td>
        The total number of periods over which the tracking is evaluated.
      </td>
    </tr>

    <tr>
      <td>
        frequencyType\*
      </td>

      <td>
        Enum
      </td>

      <td>
        The frequency of each cycle in which the user has to achieve the target value.<br />Supported values: `MONTHLY, QUARTERLY`, `HALF_YEARLY`, `YEARLY`, `WEEKLY`, `DAILY`, `CUSTOM`.
      </td>
    </tr>

    <tr>
      <td>
        frequency\*
      </td>

      <td>
        Number
      </td>

      <td>
        The frequency count, based on the `frequencyType`.
      </td>
    </tr>

    <tr>
      <td>
        recurringCycles\*
      </td>

      <td>
        Number
      </td>

      <td>
        The number of cycles for which the tracking recurs.
      </td>
    </tr>

    <tr>
      <td>
        userCreated
      </td>

      <td>
        Boolean
      </td>

      <td>
        If set to true, a [user-created ](https://docs.capillarytech.com/reference/user-created-challenges) target group is created. A user-created target is a promotion that rewards customers for achieving goals they set themselves.<br /><br />By default the value is set to false and a regular target group is created.
      </td>
    </tr>

    <tr>
      <td>
        leaderboardEnabled
      </td>

      <td>
        Boolean
      </td>

      <td>
        If enabled, a [leaderboard](https://docs.capillarytech.com/reference/leaderboards) enabled target group is created.
      </td>
    </tr>

    <tr>
      <td>
        aggregateWindow \*
      </td>

      <td>
        ENUM
      </td>

      <td>
        Contains information related to the aggregate window.  An aggregate window is a defined time period during which you can track an extended field or behavioral event.
      </td>
    </tr>

    <tr>
      <td>
        windowType \*
      </td>

      <td>
        ENUM
      </td>

      <td>
        The type of window period (MIN or MAX).<br />MIN: This function identifies the smallest value within a given time frame. For example, if you're tracking daily steps, the MIN would show you the least number of steps taken in that period.<br /><br />MAX: This function finds the largest value within that same time frame. Continuing with the step count example, the MAX would reveal the highest number of steps taken during the period.
      </td>
    </tr>

    <tr>
      <td>
        windowTimeUnit \*
      </td>

      <td>
        ENUM
      </td>

      <td>
        The timeframe for which the window will be active. Currently, DAY is supported.
      </td>
    </tr>

    <tr>
      <td>
        windowValue
      </td>

      <td>
        String
      </td>

      <td>
        The time units for which the window will be active. Currently, one time unit is supported.
      </td>
    </tr>

    <tr>
      <td>
        periods
      </td>

      <td>
        Object
      </td>

      <td>
        Details on target period creation, updates, and time-frame.
      </td>
    </tr>

    <tr>
      <td>
        active
      </td>

      <td>
        Boolean
      </td>

      <td>
        Indicates if the period is active.
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
        A brief description of the period.
      </td>
    </tr>

    <tr>
      <td>
        endDate
      </td>

      <td>
        Date Time
      </td>

      <td>
        The end date and time of the period in ISO 8601 `YYYY-MM-DDTHH:mm:ss.SSS` format.
      </td>
    </tr>

    <tr>
      <td>
        periodStatus
      </td>

      <td>
        String
      </td>

      <td>
        Indicates if the cycle of the Milestone is running or upcoming.<br />Supported values: `RUNNING`, `UPCOMING`, `NOT_STARTED`
      </td>
    </tr>

    <tr>
      <td>
        refCode
      </td>

      <td>
        String
      </td>

      <td>
        A reference code for the period.
      </td>
    </tr>

    <tr>
      <td>
        startDate
      </td>

      <td>
        Date Time
      </td>

      <td>
        The start date and time of the period  in ISO 8601 `YYYY-MM-DDTHH:mm:ss.SSS` format.
      </td>
    </tr>

    <tr>
      <td>
        targets
      </td>

      <td>
        Object
      </td>

      <td>
        An array of target objects, each outlining a target within the tracking.
      </td>
    </tr>

    <tr>
      <td>
        active
      </td>

      <td>
        Boolean
      </td>

      <td>
        Indicates if the target is active.
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
        A brief description of the target.
      </td>
    </tr>

    <tr>
      <td>
        expression
      </td>

      <td>
        Boolean
      </td>

      <td>
        Indicates if the target has an expression for evaluation.
      </td>
    </tr>

    <tr>
      <td>
        expressionJson
      </td>

      <td>
        String
      </td>

      <td>
        A JSON expression that specifies the conditions required to achieve the target.
      </td>
    </tr>

    <tr>
      <td>
        filters
      </td>

      <td>
        Object
      </td>

      <td>
        Details on the scope filters active on the target.
      </td>
    </tr>

    <tr>
      <td>
        entityType
      </td>

      <td>
        Enum
      </td>

      <td>
        The entity to which the specified expressions related to the target will be applied.<br />For example: The user has to make a purchase of shoes from ABC store.<br />Here, purchase of shoes is the expression and the entity is ABC store.<br />Supported values: `STORE`, `ZONE`, `CONCEPT`.
      </td>
    </tr>

    <tr>
      <td>
        entityIds
      </td>

      <td>
        Array
      </td>

      <td>
        IDs of the entities to which the is filter applied on.
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
        The name identifier for the target.<br /><br />The character limit for the target group name is 200 characters.
      </td>
    </tr>

    <tr>
      <td>
        targetEntity
      </td>

      <td>
        Enum
      </td>

      <td>
        The KPI on which the target is tracked.<br />For the transactional KPIs, the supported value for this are `TRANSACTION` and `LINEITEM`.<br />For the Behavioural or EMF events, the supported value is `EVENT`.<br />For the tracking based on rewards such as points, the supported value is `REWARDS`.<br /><br />Refer to creating target groups based on [behavioural event](https://docs.capillarytech.com/reference/create-target-group-based-on-behavioural-event), [EMF event](https://docs.capillarytech.com/reference/create-target-based-on-emf-eventss) and [alternate currencies](https://docs.capillarytech.com/reference/create-target-based-on-alternate-currencies) for more details.
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
        The name of the event that triggers the target.
      </td>
    </tr>

    <tr>
      <td>
        targetType
      </td>

      <td>
        Enum
      </td>

      <td>
        Target type on which the target is set.<br />Supported values:<br />**`QUANTITY, SALES, GROSS_SALES`**, **`REGULAR_POINTS, PROMOTIONAL_POINTS`**, **`ALL_POINTS`**<br />For information based on configuring target based on behavioural event (COUNT, VISIT, and SUM) and EMF event (COUNT and VISIT), refer to [target based on behavioural event](https://docs.capillarytech.com/reference/create-target-group-based-on-behavioural-event) and [target based on EMF event](https://docs.capillarytech.com/reference/create-target-based-on-emf-event) documentation.
      </td>
    </tr>

    <tr>
      <td>
        defaultValues
      </td>

      <td>
        Object
      </td>

      <td>
        Details of the default values for the target.
      </td>
    </tr>

    <tr>
      <td>
        defaultValue
      </td>

      <td>
        Integer
      </td>

      <td>
        Default value for the target.
      </td>
    </tr>

    <tr>
      <td>
        extendedFieldInfo
      </td>

      <td>
        Object
      </td>

      <td>
        Details on extended field information for the target group.
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
        Specific custom data field you want to perform the aggregation on. To create a new custom field, refer to the documentation on [creating a new custom field](https://docs.capillarytech.com/docs/data-fields#create-new-custom-fields).
      </td>
    </tr>

    <tr>
      <td>
        aggregateFunction
      </td>

      <td>
        String
      </td>

      <td>
        The specific type of calculation that will be performed. This allows you to create a single, summary metric from a set of individual data points, which the system can then use to evaluate progress towards a goal.

        Supported values:
        `COUNT` : Counts the number of times the field specified in name appears in the data.
        `SUM`: Calculate the arithmetic sum of all the numeric values for the field specified in name
      </td>
    </tr>
  </tbody>
</Table>

# Request body

```
{
  "active": true,
  "description": "UAT target group number thirty nine",
  "name": "uatTargetGroup821",
  "trackingType": "DEFAULT",
  "targetEvaluationType": "FIXED_CALENDAR_WINDOW",
  "totalPeriods": 1,
  "frequencyType": "DAILY",
  "frequency": 1,
  "recurringCycles": 1,
  "preferredTillId": 751552970000,
  "userCreated": false,
  "periods": [
    {
      "active": true,
      "description": "",
      "endDate": "2025-06-11T23:59:59.999Z",
      "periodStatus": "RUNNING",
      "refCode": "Cycle_1",
      "startDate": "2025-06-11T00:00:00.000Z"
    },
    {
      "active": true,
      "description": "",
      "endDate": "2025-05-11T23:59:59.999Z",
      "periodStatus": "NOT_STARTED",
      "refCode": "Cycle_2",
      "startDate": "2025-05-11T00:00:00.000Z"
    }
  ],
  "targets": [
    {
      "active": true,
      "description": "",
      "expression": true,
      "expressionJson": "{\"arity\":\"literal\",\"value\":\"true\",\"type\":\"boolean:primitive\"}",
      "filters": [],
      "name": "uat_target_group_821",
      "targetEntity": "EVENT",
      "targetType": "COUNT",
      "extendedFieldInfo": {
        "name": "points",
        "aggregateFunction": "SUM"
      },
      "defaultValues": [
        {
          "defaultValue": "1.00"
        },
        {
          "defaultValue": "1.00"
        }
      ]
    }
  ]
}
```

# Response parameters

| Field                           | Data Type      | Description                                                                                                                                                                                                                                                                                                                                                             |
| ------------------------------- | -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| id                              | Integer        | Unique ID of the target group                                                                                                                                                                                                                                                                                                                                           |
| name                            | String         | Unique name of the target group.                                                                                                                                                                                                                                                                                                                                        |
| active                          | Boolean        | Indicates if target tracking is active.                                                                                                                                                                                                                                                                                                                                 |
| preferredTillId                 | Number         | Identifier for the preferred POS till.                                                                                                                                                                                                                                                                                                                                  |
| trackingType                    | Enum           | The type of tracking the milestone is created for. Supported values:<br />**`DEFAULT`**: Track a single target<br />**`UNIFIED`** :Track multiple targets<br />**`STREAK`**: Track multiple targets as a streak.<br />**`CAPPING`**: Track the number of points a user has got over a period, so that capping can be applied.                                           |
| frequency                       | Number         | Frequency count, based on the `frequencyType`.                                                                                                                                                                                                                                                                                                                          |
| recurringCycles                 | Number         | Number of cycles for which the tracking recurs.                                                                                                                                                                                                                                                                                                                         |
| periods                         | Object         | Details on target creation, updates, and time-frame.                                                                                                                                                                                                                                                                                                                    |
| -id                             | Integer        | The unique ID of the target period.                                                                                                                                                                                                                                                                                                                                     |
| -attribution                    | Object         | Details on the creation and update details of the target period.                                                                                                                                                                                                                                                                                                        |
| -- createdOn                    | String         | Date the target period was created in ISO 8601 `YYYY-MM-DDTHH:mm:ss.SSS` format.                                                                                                                                                                                                                                                                                        |
| --lastUpdatedOn                 | String         | Date the target period was last updated in ISO 8601 `YYYY-MM-DDTHH:mm:ss.SSS` format.                                                                                                                                                                                                                                                                                   |
| --lastUpdatedBy                 | Object         | Details on updates to the target period.                                                                                                                                                                                                                                                                                                                                |
| ---id                           | Integer        | Unique ID of the user who last modified the target period.                                                                                                                                                                                                                                                                                                              |
| ---code                         | String         | Code of the user who last modified the target period.                                                                                                                                                                                                                                                                                                                   |
| ---description                  | String         | Description of the user who last modified the target period.                                                                                                                                                                                                                                                                                                            |
| ---name                         | String         | Name of the user who last modified the target period.                                                                                                                                                                                                                                                                                                                   |
| ---type                         | String         | Type of user who last modified the target period.                                                                                                                                                                                                                                                                                                                       |
| -startDate                      | String         | Start date of the target group, in `YYYY-MM-DD` format.                                                                                                                                                                                                                                                                                                                 |
| -endDate                        | String         | End date of the target group, in `YYYY-MM-DD` format.                                                                                                                                                                                                                                                                                                                   |
| -refCode                        | Integer        | Reference code of the target period.                                                                                                                                                                                                                                                                                                                                    |
| -periodStatus                   | String         | Current status of the target period. Supported values `NOT_STARTED`, `LIVE` and `ENDED`.                                                                                                                                                                                                                                                                                |
| -targetGroupId                  | Integer        | Unique ID of the target group.                                                                                                                                                                                                                                                                                                                                          |
| -description                    | String         | Description of the target group.                                                                                                                                                                                                                                                                                                                                        |
| -active                         | Boolean        | Current active status of the target period. If true, the target is currently active, else the target is inactive.                                                                                                                                                                                                                                                       |
| totalPeriods                    | Integer        | Total number of periods for the target group.                                                                                                                                                                                                                                                                                                                           |
| description                     | String         | Description of the target period.                                                                                                                                                                                                                                                                                                                                       |
| targetEvaluationType            | ENUM           | Evaluation strategy for the target.                                                                                                                                                                                                                                                                                                                                     |
| recurringCycles                 | Integer        | Number of cycles for which the tracking recurs.                                                                                                                                                                                                                                                                                                                         |
| targetCycleStartDate            | String         | Start date of the target cycle in  ISO 8601 `YYYY-MM-DDTHH:mm:ss.SSS` format.                                                                                                                                                                                                                                                                                           |
| targetCycleEndDate              | String         | End date of the target cycle in  ISO 8601 `YYYY-MM-DDTHH:mm:ss.SSS` format.                                                                                                                                                                                                                                                                                             |
| frequencyType                   | String         | The frequency of each cycle in which the user has to achieve the target value.                                                                                                                                                                                                                                                                                          |
| trackingType                    | Enum           | The type of tracking the milestone is created for.                                                                                                                                                                                                                                                                                                                      |
| targets                         | Object         | Details on creation of the target.                                                                                                                                                                                                                                                                                                                                      |
| -id                             | Boolean        | Unique ID of the target.                                                                                                                                                                                                                                                                                                                                                |
| -attribution                    | Object         | Details on the creation and update details of the target.                                                                                                                                                                                                                                                                                                               |
| -- createdOn                    | String         | Date the target was created in ISO 8601 `YYYY-MM-DDTHH:mm:ss.SSS` format.                                                                                                                                                                                                                                                                                               |
| -- lastUpdatedOn                | String         | Date the target was last updated in ISO 8601 `YYYY-MM-DDTHH:mm:ss.SSS` format.                                                                                                                                                                                                                                                                                          |
| -- lastUpdatedBy                | Object         | Details on updates to the target.                                                                                                                                                                                                                                                                                                                                       |
| --- id                          | Integer        | Unique ID of the user who last modified the target.                                                                                                                                                                                                                                                                                                                     |
| --- code                        | Integer        | Code of the user who last modified the target.                                                                                                                                                                                                                                                                                                                          |
| -- description                  | String         | Description of the user who last modified the target.                                                                                                                                                                                                                                                                                                                   |
| --- name                        | String         | Name of the user who last modified the target.                                                                                                                                                                                                                                                                                                                          |
| --- type                        | String         | Type of user who last modified the target.                                                                                                                                                                                                                                                                                                                              |
| -- createdBy                    | Object         | Details on creation of the target.                                                                                                                                                                                                                                                                                                                                      |
| --- id                          | Integer        | Unique ID of the user who created the target .                                                                                                                                                                                                                                                                                                                          |
| --- code                        | Integer        | Code of the user who created the target.                                                                                                                                                                                                                                                                                                                                |
| --- description                 | String         | Description of the user who created the target.                                                                                                                                                                                                                                                                                                                         |
| --- name                        | String         | Name of the user who created the target.                                                                                                                                                                                                                                                                                                                                |
| --- type                        | String         | Type of user who created the target.                                                                                                                                                                                                                                                                                                                                    |
| ---name                         | String         | Unique name for the target.                                                                                                                                                                                                                                                                                                                                             |
| --targetType                    | String         | The type of target<br /><br />Supported values:<br />`ALL`: Tracks points that a customer earns across a loyalty program and from a loyalty promotion.<br />`REGULAR`: Track the points that a customer earns across a loyalty program. Points earned from promotions are excluded.<br />`PROMOTION`: Tracks the points that a customer earns from a loyalty promotion. |
| --targetEntity                  | Enum           | The KPI on which the target is tracked.<br />For the transactional KPIs, the supported value for this are `TRANSACTION` and `LINEITEM`.<br />For the Behavioural or EMF events, the supported value is `EVENT`.<br />For the tracking based on rewards such as points, the supported value is `REWARDS`.                                                                |
| --eventName                     | String         | Name of the event that triggers the target.                                                                                                                                                                                                                                                                                                                             |
| --targetGroupId                 | Integer        | Unique ID of the target group associated with the target.                                                                                                                                                                                                                                                                                                               |
| --description                   | String         | Description of the target.                                                                                                                                                                                                                                                                                                                                              |
| --active                        | Boolean        | Current active status of the target. If true, the target is currently active, else the target is inactive.                                                                                                                                                                                                                                                              |
| -- expression                   | Boolean        | Indicates if the target has an expression for evaluation.                                                                                                                                                                                                                                                                                                               |
| -- expressionJson               | String         | A JSON expression that specifies the conditions required to achieve the target.                                                                                                                                                                                                                                                                                         |
| -- filters                      | Object         | Details on the scope filters active on the target.                                                                                                                                                                                                                                                                                                                      |
| -- enrolmentMethod              | Enum           | The method of enrolment for the target. Supported values: `TRANSACTION`, `IMPORT`.                                                                                                                                                                                                                                                                                      |
| -- defaultValues                | Object         | Details on the default values for the target.                                                                                                                                                                                                                                                                                                                           |
| --- defaultValue                | Float          | A default value used in the target evaluation.                                                                                                                                                                                                                                                                                                                          |
| -- targetPeriodDefaultValuesMap | Object         | Details on the default values for the target period.                                                                                                                                                                                                                                                                                                                    |
| -- extendedFieldInfo            | Object         | Details on extended field information for the target group.                                                                                                                                                                                                                                                                                                             |
| leaderboardEnabled              | Boolean        | Indicates if the [leaderboard](https://docs.capillarytech.com/reference/leaderboards) feature is enabled.                                                                                                                                                                                                                                                               |
| userCreated                     | Boolean        | Indicates if the target is a [user-created](https://docs.capillarytech.com/reference/user-created-challenges) target.                                                                                                                                                                                                                                                   |
| errors                          | null or Object | Contains error details if any occurred during the API request.                                                                                                                                                                                                                                                                                                          |
| warnings                        | null or Object | Contains warning details if any occurred during the API request.                                                                                                                                                                                                                                                                                                        |

```json Response
{
    "data": {
        "id": 2295,
        "name": "uatTargetGroup821",
        "active": true,
        "preferredTillId": 751552970000,
        "periods": [
            {
                "id": 21196,
                "attribution": {
                    "createdOn": "2025-06-17T10:56:47.000+0000",
                    "lastUpdatedOn": "2025-06-17T10:56:47.000+0000",
                    "lastUpdatedBy": {
                        "id": 75155297,
                        "code": "tj_capillary",
                        "description": "",
                        "name": "tj_capillary",
                        "type": "TILL"
                    },
                    "createdBy": {
                        "id": 75155297,
                        "code": "tj_capillary",
                        "description": "",
                        "name": "tj_capillary",
                        "type": "TILL"
                    }
                },
                "startDate": "2025-06-11",
                "endDate": "2025-06-11",
                "refCode": "Cycle_1",
                "periodStatus": "ENDED",
                "targetGroupId": 2295,
                "description": "",
                "active": true
            },
            {
                "id": 21197,
                "attribution": {
                    "createdOn": "2025-06-17T10:56:47.000+0000",
                    "lastUpdatedOn": "2025-06-17T10:56:47.000+0000",
                    "lastUpdatedBy": {
                        "id": 75155297,
                        "code": "tj_capillary",
                        "description": "",
                        "name": "tj_capillary",
                        "type": "TILL"
                    },
                    "createdBy": {
                        "id": 75155297,
                        "code": "tj_capillary",
                        "description": "",
                        "name": "tj_capillary",
                        "type": "TILL"
                    }
                },
                "startDate": "2025-05-11",
                "endDate": "2025-05-11",
                "refCode": "Cycle_2",
                "periodStatus": "ENDED",
                "targetGroupId": 2295,
                "description": "",
                "active": true
            }
        ],
        "totalPeriods": 1,
        "description": "UAT target group number thirty nine",
        "targetEvaluationType": "FIXED_CALENDAR_WINDOW",
        "recurringCycles": 1,
        "frequency": 1,
        "targetCycleStartDate": "2025-05-11T00:00:00.000Z",
        "targetCycleEndDate": "2025-06-11T23:59:59.000Z",
        "frequencyType": "DAILY",
        "trackingType": "DEFAULT",
        "targets": [
            {
                "id": 2440,
                "attribution": {
                    "createdOn": "2025-06-17T10:56:47.474+0000",
                    "lastUpdatedOn": "2025-06-17T10:56:47.474+0000",
                    "lastUpdatedBy": {
                        "id": 75155297,
                        "code": "tj_capillary",
                        "description": "",
                        "name": "tj_capillary",
                        "type": "TILL"
                    },
                    "createdBy": {
                        "id": 75155297,
                        "code": "tj_capillary",
                        "description": "",
                        "name": "tj_capillary",
                        "type": "TILL"
                    }
                },
                "name": "uat_target_group_821",
                "emfRuleSetId": 126411030,
                "targetType": "COUNT",
                "targetEntity": "EVENT",
                "eventName": "TransactionAdd",
                "targetGroupId": 2295,
                "description": "",
                "active": true,
                "expression": "true",
                "expressionJson": "{\"arity\":\"literal\",\"value\":\"true\",\"type\":\"boolean:primitive\"}",
                "filters": [],
                "enrolmentMethod": "IMPORT",
                "defaultValues": [
                    {
                        "id": 23552,
                        "periodId": 21196,
                        "defaultValue": 1.000
                    },
                    {
                        "id": 23553,
                        "periodId": 21197,
                        "defaultValue": 1.000
                    }
                ],
                "targetPeriodDefaultValuesMap": {
                    "21196": {
                        "id": 23552,
                        "periodId": 21196,
                        "defaultValue": 1.000
                    },
                    "21197": {
                        "id": 23553,
                        "periodId": 21197,
                        "defaultValue": 1.000
                    }
                },
                "extendedFieldInfo": {
                    "name": "points",
                    "aggregateFunction": "SUM"
                }
            }
        ],
        "leaderboardEnabled": false,
        "userCreated": false
    },
    "errors": null,
    "warnings": null
}
```

# API error codes

| Code   | Description                                                                                               |
| :----- | :-------------------------------------------------------------------------------------------------------- |
| 310069 | Target group name already exists                                                                          |
| 300004 | Invalid input, check all values and ensure they are correct.                                              |
| 310133 | Leaderboard is not enabled for the org                                                                    |
| 310132 | Target evaluation type not supported for leaderboard, currently only `FIXED_CALENDER_WINDOW` is supported |
| 310008 | Length of Target rule name cannot exceed 200                                                              |