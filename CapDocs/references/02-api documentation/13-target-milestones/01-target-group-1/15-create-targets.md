---
title: Create targets (milestone)
excerpt: ''
api:
  file: v3.json
  operationId: create-targets
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
This API is used to create targets in a target group. A target can be created only after a target group is created.

> 👍 Note
>
> For detailed information about our APIs and for hands-on testing, refer documentation in [API overview](https://docs.capillarytech.com/reference/apioverview) and  step-by-step guide on making your first API call in [Make your first API call](https://docs.capillarytech.com/reference/make-your-first-api-call) .

# API endpoint example

`https://eu.api.capillarytech.com/v3/targetGroups/{groupId}/targets`

# Request path parameters

| Parameter | Data type | Description                     |
| :-------- | :-------- | :------------------------------ |
| groupId   | Integer   | Unique identifier of the group. |

# Request body parameters

<Table>
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
        active
      </td>

      <td>
        Boolean
      </td>

      <td>
        Indicates whether the item is active or not.
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
        A brief description of the item.
      </td>
    </tr>

    <tr>
      <td>
        expression
      </td>

      <td>
        String
      </td>

      <td>
        A string representing the condition to meet the target.
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
        Array
      </td>

      <td>
        An array of filters applied to the target.
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
        The IDs of the entities to which the is filter applied on.
      </td>
    </tr>

    <tr>
      <td>
        entityType
      </td>

      <td>
        String
      </td>

      <td>
        The entity to which the specified expressions related to the target will be applied.  

        For example: The user has to make a purchase of shoes from ABC store. Here, purchase of shoes is the expression and the entity is ABC store.\
        Supported values: STORE, ZONE, CONCEPT.
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
        The name of the target/milestone.
      </td>
    </tr>

    <tr>
      <td>
        targetEntity\*
      </td>

      <td>
        String
      </td>

      <td>
        The KPI on which the target is tracked.\
        Supported values: TRANSACTION, LINEITEM, EVENT, REWARDS, ALTERNATE\_CURRENCIES.  

        * To track the transactional KPIs, use TRANSACTION and LINEITEM .
        * To track the tracking based on rewards such as points, use REWARDS.
        * To track alternate currencies, use ALTERNATE\_CURRENCIES.
        * When creating an extended field, use TRANSACTION or LINEITEM.
      </td>
    </tr>

    <tr>
      <td>
        enrolmentMethod
      </td>

      <td>
        String
      </td>

      <td>
        The method of enrolment for the target. Supported values: TRANSACTION, IMPORT
      </td>
    </tr>

    <tr>
      <td>
        targetGroupId\*
      </td>

      <td>
        Integer
      </td>

      <td>
        The ID of the target group associated with the item.
      </td>
    </tr>

    <tr>
      <td>
        targetType\*
      </td>

      <td>
        String
      </td>

      <td>
        The type of target.\
        Supported values: QUANTITY, SALES, COUNT, VISIT, GROSS\_SALES,\
        REGULAR\_POINTS, PROMOTIONAL\_POINTS,\
        ALL\_POINTS, EXTENDED\_FIELD.  

        To create a target based on extended field, use EXTENDED\_FIELD.
      </td>
    </tr>

    <tr>
      <td>
        defaultValues
      </td>

      <td>
        Array
      </td>

      <td>
        An array of objects providing default values related to the target.
      </td>
    </tr>

    <tr>
      <td>
        targetName
      </td>

      <td>
        String
      </td>

      <td>
        The name of the target for which the default value is specified.
      </td>
    </tr>

    <tr>
      <td>
        periodId
      </td>

      <td>
        Integer
      </td>

      <td>
        The ID of the period associated with the default value.
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
        A default value used within the target's context.
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
        An object containing additional information about an extended field. This object is mandatory to pass when targetType is EXTENDED\_FIELD.
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
        Name of extended field to track.
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
        The aggregate function to be applied to the extended field. Supported values: SUM, COUNT
      </td>
    </tr>
  </tbody>
</Table>

<br />

```json Request body
[
  {
    "active": true,
    "description": "string",
    "emfRuleSetId": 0,
    "emfUnrolledRulesetId": 0,
    "expression": "true",
    "expressionJson": "{\"arity\":\"literal\",\"value\":\"true\",\"type\":\"boolean:primitive\"}",
    "filters": [
      {
        "entityIds": [
          0
        ],
        "entityType": "STORE"
      }
    ],
    "name": "string13",
    "targetEntity": "TRANSACTION",
    "targetGroupId": 4,
    "targetType": "QUANTITY"
  }
]
```
```json Request body with target type and extended field info
 {
        "active": true,
        "description": "test210",
        "expression": "true",
        "expressionJson": "{\"arity\":\"literal\",\"value\":\"true\",\"type\":\"boolean:primitive\"}",
        "filters": [
            {
                "entityIds": [
                    0
                ],
                "entityType": "ZONE"
            }
        ],
        "name": "test_name",
        "targetEntity": "LINEITEM",
        "enrolmentMethod": "TRANSACTION",
        "targetGroupId": 1,
        "targetType": "EXTENDED_FIELD",
        "defaultValues": [
            {
                "targetName": "test2",
                "periodId": 1,
                "defaultValue": 20
            }
        ],
        "extendedFieldInfo":{
            "name": "tax_amount",
            "aggregateFunction": "SUM"
        }
    }

```

# Response parameters

| Parameter             | Data Type | Description                                                                                |
| --------------------- | --------- | ------------------------------------------------------------------------------------------ |
| id                    | Integer   | The unique identifier for the item.                                                        |
| attribution           | Object    | An object containing attribution details for the item.                                     |
| createdOn             | String    | The creation timestamp of the item.                                                        |
| lastUpdatedOn         | String    | The last update timestamp of the item.                                                     |
| lastUpdatedBy         | Object    | An object containing details about who last updated the item.                              |
| lastUpdatedBy.id      | Integer   | The unique identifier of the person who last updated the item.                             |
| lastUpdatedBy.code    | String    | A code associated with the person who last updated the item.                               |
| description           | String    | A description related to the last updater of the item (empty in this case).                |
| name                  | String    | The name of the person who last updated the item.                                          |
| type                  | String    | The type of updater (e.g., "TILL").                                                        |
| createdBy             | Object    | An object containing details about who created the item.                                   |
| id                    | Integer   | The unique identifier of the person who created the item.                                  |
| code                  | String    | A code associated with the person who created the item.                                    |
| description           | String    | A description related to the creator of the item (empty in this case).                     |
| name                  | String    | The name of the person who created the item.                                               |
| type                  | String    | The type of creator (e.g., "TILL").                                                        |
| name                  | String    | The name of the item.                                                                      |
| emfRuleSetId          | Integer   | The ID of the rule set in the EMF (Entity Management Framework) system.                    |
| emfUnrolledRulesetId  | Integer   | The ID of the unrolled rule set in the EMF system.                                         |
| targetType            | String    | The type of target (e.g., "EXTENDED\_FIELD").                                              |
| targetEntity          | String    | The entity type that the item applies to (e.g., "LINEITEM").                               |
| targetGroupId         | Integer   | The ID of the target group associated with the item.                                       |
| description           | String    | A brief description of the item.                                                           |
| active                | Boolean   | Indicates whether the item is active.                                                      |
| expression            | String    | A textual representation of the condition or rule, in this case, a simple "true".          |
| expressionJson        | String    | A JSON string representing the logical structure of the condition or rule.                 |
| filters               | Array     | An array of filter objects applied to the item.                                            |
| filters\[].entityType | String    | The type of entity to which the filter applies (e.g., "ZONE").                             |
| filters\[].entityIds  | Array     | An array of entity IDs to which the filter applies.                                        |
| enrolmentMethod       | String    | The method of enrolment for the target (e.g., "TRANSACTION").                              |
| defaultValues         | Array     | An array of objects specifying default values, likely for some calculations or thresholds. |
| id                    | Integer   | The unique identifier for each default value.                                              |
| periodId              | Integer   | The ID of the period associated with the default value.                                    |
| defaultValue          | Integer   | A default value used within the target's context.                                          |
| extendedFieldInfo     | Object    | An object containing additional information about an extended field.                       |
| name                  | String    | The name of the extended field (e.g., "tax\_amount").                                      |
| aggregateFunction     | String    | The aggregate function to be applied to the extended field (e.g., "SUM").                  |
| errors                | Null      | Placeholder for any errors (null in this case, indicating no errors).                      |
| warnings              | Null      | Placeholder for any warnings (null in this case, indicating no warnings).                  |

```json Response
{
    "data": [
        {
            "id": 39,
            "attribution": {
                "createdOn": "2022-03-28T14:33:38.543+0000",
                "lastUpdatedOn": "2022-03-28T14:33:38.543+0000",
                "lastUpdatedBy": {
                    "id": 75040399,
                    "code": "bukl.till",
                    "description": "",
                    "name": "bukl.till",
                    "type": "TILL"
                },
                "createdBy": {
                    "id": 75040399,
                    "code": "bukl.till",
                    "description": "",
                    "name": "bukl.till",
                    "type": "TILL"
                }
            },
            "name": "string13",
            "emfRuleSetId": 13550,
            "emfUnrolledRulesetId": 0,
            "targetType": "QUANTITY",
            "targetEntity": "TRANSACTION",
            "targetGroupId": 20,
            "description": "string",
            "active": true,
            "expression": "true",
            "expressionJson": "{\"arity\":\"literal\",\"value\":\"true\",\"type\":\"boolean:primitive\"}",
            "filters": [
                {
                    "entityType": "STORE",
                    "entityIds": [
                        0
                    ]
                }
            ],
            "enrolmentMethod": "IMPORT"
        }
    ],
    "errors": null
}
```
```json Response with target type and extended field info
{
    "data": [
        {
            "id": 9067,
            "attribution": {
                "createdOn": "2023-09-25T11:42:35.850+0530",
                "lastUpdatedOn": "2023-09-25T11:42:35.850+0530",
                "lastUpdatedBy": {
                    "id": 50666468,
                    "code": "amanv2",
                    "description": "",
                    "name": "amanv2",
                    "type": "TILL"
                },
                "createdBy": {
                    "id": 50666468,
                    "code": "amanv2",
                    "description": "",
                    "name": "amanv2",
                    "type": "TILL"
                }
            },
            "name": "test_name",
            "emfRuleSetId": 1246657,
            "emfUnrolledRulesetId": 1246656,
            "targetType": "EXTENDED_FIELD",
            "targetEntity": "LINEITEM",
            "targetGroupId": 5869,
            "description": "test210",
            "active": true,
            "expression": "true",
            "expressionJson": "{\"arity\":\"literal\",\"value\":\"true\",\"type\":\"boolean:primitive\"}",
            "filters": [
                {
                    "entityType": "ZONE",
                    "entityIds": [
                        0
                    ]
                }
            ],
            "enrolmentMethod": "TRANSACTION",
            "defaultValues": [
                {
                    "id": 10083,
                    "periodId": 1,
                    "defaultValue": 20
                }
            ],
            "extendedFieldInfo": {
                "name": "tax_amount",
                "aggregateFunction": "SUM"
            }
        }
    ],
    "errors": null,
    "warnings": null
}
```

# API-specific error codes

<br />

| Error code | Description                                                            |
| :--------- | :--------------------------------------------------------------------- |
| 310033     | The target entity and target type combination are not valid.           |
| 310094     | Extended field info is required in case of EXTENDED\_FIELD target type |
| 310092     | Invalid extended field name/ invalid extended field datatype.          |