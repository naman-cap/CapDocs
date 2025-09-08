---
title: Update Data Field
excerpt: This API allows you to update data fields that you defined for the org.
api:
  file: v1.json
  operationId: put-data-field-api
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
> 👍 Note:
>
> For detailed information about the APIs and for hands-on testing, refer to the [API overview documentation ](https://docs.capillarytech.com/reference/apioverview)and the step-by-step guide on [making your first API call.](https://docs.capillarytech.com/reference/make-your-first-api-call)

<br />

# Prerequisites

*   Authentication: Basic/OAuth authentication
*   Default access group

# Resource Information

|               |                                            |
| :------------ | :----------------------------------------- |
| URI           | /api\_gateway/cortex/v1/dataFields`\{id\}` |
| HTTP method   | PUT                                        |
| Pagination    | NA                                         |
| Rate limit    | Default                                    |
| Batch support | NA                                         |

# API cURL

```curl
curl --location --request PUT 'https://eu.api.capillarytech.com/api_gateway/cortex/v1/dataFields/67c13be980eaa45a46519efa' \
--header 'Content-Type: application/json' \
--header 'Authorization: Basic cHJlcmFuYV9zaW5naDoyZmFhZmZjNZDRjMTc5Y2NlMzNhYzc5OTBjMTQ1Ng==' \
--header 'Cookie: _cfuvid=257QQtZKKeLsnIKUrPVpHcKPHvi2s4LSYFlH8VLHtc0-1743065149089-0.0.1.1-604800000; _cfuvid=Wp9DM7jKlGaLVdZEYrh2ApStBYz0xLZsHFHOWo.VnBw-1743484167715-0.0.1.1-604800000' \
--data '{
  "searchStrategyType" : "PREFIX",
  "entityType" : "CUSTOMER",
  "dataFieldDefinitions" : [
		{
			"fieldId" : "firstName",
			"fieldAlias" : "firstName",
			"fieldType" : "DATA",
			"dataSourceDetails" : {
				"fieldReference" : "firstName"
			},
			"dataType" : "STRING"
		},
		{
			"fieldId" : "lastName",
			"fieldAlias" : "lastName",
			"fieldType" : "DATA",
			"dataSourceDetails" : {
				"fieldReference" : "lastName"
			},
			"dataType" : "STRING"
		},
		{
			"fieldId" : "mobile",
			"fieldAlias" : "mobile",
			"fieldType" : "DATA",
			"dataSourceDetails" : {
				"fieldReference" : "mobile"
			},
			"dataType" : "STRING"
		},
		{
			"fieldId" : "email",
			"fieldAlias" : "email",
			"fieldType" : "DATA",
			"dataSourceDetails" : {
				"fieldReference" : "email"
			},
			"dataType" : "STRING"
		},
    {
			"fieldId" : "externalId",
			"fieldAlias" : "externalId",
			"fieldType" : "DATA",
			"dataSourceDetails" : {
				"fieldReference" : "externalId"
			},
			"dataType" : "STRING"
		}

	]
}'
```

# Query Parameter

| Parameter | Data Type | Description                                                                                   |
| :-------- | :-------- | :-------------------------------------------------------------------------------------------- |
| id\*      | String    | Data Field identifier that you received in the response during the creation of the datafield. |

# Request Parameters

<Table align={["left","left","left"]}>
  <thead>
    <tr>
      <th>
        Parameters
      </th>

      <th>
        Data type
      </th>

      <th>
        Description
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `searchStrategyType`\*
      </td>

      <td>
        String
      </td>

      <td>
        Defines the search strategy type (`COMBINATION`, `PREFIX`).
      </td>
    </tr>

    <tr>
      <td>
        `entityType`\*
      </td>

      <td>
        Enum
      </td>

      <td>
        Type of entity being searched (`TRANSACTION`, `CUSTOMER`).
      </td>
    </tr>

    <tr>
      <td>
        `dataFieldDefinitions`\*
      </td>

      <td>
        Array
      </td>

      <td>
        List of field definitions used in the search.
      </td>
    </tr>

    <tr>
      <td>
        * `fieldId`\*
      </td>

      <td>
        String
      </td>

      <td>
        The field to search on. For **Customer**, the supported standard fields are: `firstName`, `lastName`, `email`, `mobile`, `externalId`, and `fullName`. <br />For **Transaction**, the supported fields are: `outlierStatus`, `billDate`, `billNumber`, and `storecode` (additional field).
      </td>
    </tr>

    <tr>
      <td>
        * `fieldAlias`
      </td>

      <td>
        String
      </td>

      <td>
        The alias or display name of the field.
      </td>
    </tr>

    <tr>
      <td>
        * `fieldType`
      </td>

      <td>
        Enum
      </td>

      <td>
        Type of field. Use the value `DATA`.
      </td>
    </tr>

    <tr>
      <td>
        * `dataSourceDetails`
      </td>

      <td>
        Object
      </td>

      <td>
        Contains details about the data source.
      </td>
    </tr>

    <tr>
      <td>
        \-- `fieldReference`
      </td>

      <td>
        String
      </td>

      <td>
        Applicable when using custom fields or extended fields. For example: `extendedFields.ship_email`, `customFields.age`. If you're using store code to search, use `additionalFields.storecode` (applicable for transactions).
      </td>
    </tr>

    <tr>
      <td>
        * `dataType`
      </td>

      <td>
        String
      </td>

      <td>
        Data type of the field (`STRING`, `NUMBER`, `DECIMAL`, or `DATE`).
      </td>
    </tr>
  </tbody>
</Table>

```json Customer
{
  "searchStrategyType": "PREFIX",
  "entityType": "TRANSACTION",
  "dataFieldDefinitions": [
    {
      "fieldId": "lastName",
      "fieldAlias": "lastName",
      "fieldType": "DATA",
      "dataSourceDetails": {
        "fieldReference": "lastName"
      },
      "dataType": "STRING"
    },
    {
      "fieldId": "mobile",
      "fieldAlias": "mobile",
      "fieldType": "DATA",
      "dataSourceDetails": {
        "fieldReference": "mobile"
      },
      "dataType": "STRING"
    },
    {
      "fieldId": "email",
      "fieldAlias": "email",
      "fieldType": "DATA",
      "dataSourceDetails": {
        "fieldReference": "email"
      },
      "dataType": "STRING"
    },
    {
      "fieldId": "externalId",
      "fieldAlias": "externalId",
      "fieldType": "DATA",
      "dataSourceDetails": {
        "fieldReference": "externalId"
      },
      "dataType": "STRING"
    }
  ],
  "errors": [
}
```
```json Transaction
{
  "searchStrategyType" : "PREFIX",
  "entityType" : "CUSTOMER",
  "dataFieldDefinitions" : [
		{
			"fieldId" : "firstName",
			"fieldAlias" : "firstName",
			"fieldType" : "DATA",
			"dataSourceDetails" : {
				"fieldReference" : "firstName"
			},
			"dataType" : "STRING"
		},
		{
			"fieldId" : "lastName",
			"fieldAlias" : "lastName",
			"fieldType" : "DATA",
			"dataSourceDetails" : {
				"fieldReference" : "lastName"
			},
			"dataType" : "STRING"
		},
		{
			"fieldId" : "mobile",
			"fieldAlias" : "mobile",
			"fieldType" : "DATA",
			"dataSourceDetails" : {
				"fieldReference" : "mobile"
			},
			"dataType" : "STRING"
		},
		{
			"fieldId" : "email",
			"fieldAlias" : "email",
			"fieldType" : "DATA",
			"dataSourceDetails" : {
				"fieldReference" : "email"
			},
			"dataType" : "STRING"
		},
    {
			"fieldId" : "externalId",
			"fieldAlias" : "externalId",
			"fieldType" : "DATA",
			"dataSourceDetails" : {
				"fieldReference" : "externalId"
			},
			"dataType" : "STRING"
		}

	]
}
```

# Response Body Parameters

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
        id
      </td>

      <td>
        String
      </td>

      <td>
        Unique Identifier of the data
      </td>
    </tr>

    <tr>
      <td>
        orgId
      </td>

      <td>
        Integer
      </td>

      <td>
        The ID of the organization associated with the criteria
      </td>
    </tr>

    <tr>
      <td>
        searchStrategyType
      </td>

      <td>
        Enum
      </td>

      <td>
        Defines the search strategy type (\`\`COMBINATION`, `PREFIX\` )
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
        Type of entity being searched (`TRANSACTION` , `CUSTOMER`)
      </td>
    </tr>

    <tr>
      <td>
        dataFieldDefinitions
      </td>

      <td>
        Array
      </td>

      <td>
        List of field definitions used in the search.
      </td>
    </tr>

    <tr>
      <td>
        * fieldId
      </td>

      <td>
        String
      </td>

      <td>
        Unique identifier for the field.
      </td>
    </tr>

    <tr>
      <td>
        * fieldAlias
      </td>

      <td>
        String
      </td>

      <td>
        The alias or display name of the search field.
      </td>
    </tr>

    <tr>
      <td>
        * fieldType
      </td>

      <td>
        Enum
      </td>

      <td>
        Type of field (e.g., `INDEXED`, `FILTERABLE`).
      </td>
    </tr>

    <tr>
      <td>
        * dataSourceDetails
      </td>

      <td>
        Object
      </td>

      <td>
        Contains details about the data source.
      </td>
    </tr>

    <tr>
      <td>
        \-- fieldReference
      </td>

      <td>
        String
      </td>

      <td>
        The reference to the search field in the data source.
      </td>
    </tr>

    <tr>
      <td>
        * dataType
      </td>

      <td>
        String
      </td>

      <td>
        Data type of the field (e.g., `STRING`, `DATE`).
      </td>
    </tr>

    <tr>
      <td>
        auditInfo
      </td>

      <td>
        Object
      </td>

      <td>
        An object containing audit information about the criteria.
      </td>
    </tr>

    <tr>
      <td>
        * createdOn
      </td>

      <td>
        String
      </td>

      <td>
        The timestamp indicating when the criteria was created.
      </td>
    </tr>

    <tr>
      <td>
        * createdBy
      </td>

      <td>
        Integer
      </td>

      <td>
        The ID of the user who created the criteria.
      </td>
    </tr>

    <tr>
      <td>
        * lastUpdatedOn
      </td>

      <td>
        String
      </td>

      <td>
        The timestamp indicating when the search criteria was last updated.
      </td>
    </tr>

    <tr>
      <td>
        * lastUpdatedBy
      </td>

      <td>
        Integer
      </td>

      <td>
        The ID of the user who last updated the criteria.
      </td>
    </tr>
  </tbody>
</Table>

```json Customer
{
  "searchStrategyType" : "PREFIX",
  "entityType" : "CUSTOMER",
  "dataFieldDefinitions" : [
		{
			"fieldId" : "firstName",
			"fieldAlias" : "firstName",
			"fieldType" : "DATA",
			"dataSourceDetails" : {
				"fieldReference" : "firstName"
			},
			"dataType" : "STRING"
		},
		{
			"fieldId" : "lastName",
			"fieldAlias" : "lastName",
			"fieldType" : "DATA",
			"dataSourceDetails" : {
				"fieldReference" : "lastName"
			},
			"dataType" : "STRING"
		},
		{
			"fieldId" : "mobile",
			"fieldAlias" : "mobile",
			"fieldType" : "DATA",
			"dataSourceDetails" : {
				"fieldReference" : "mobile"
			},
			"dataType" : "STRING"
		},
		{
			"fieldId" : "email",
			"fieldAlias" : "email",
			"fieldType" : "DATA",
			"dataSourceDetails" : {
				"fieldReference" : "email"
			},
			"dataType" : "STRING"
		},
    {
			"fieldId" : "externalId",
			"fieldAlias" : "externalId",
			"fieldType" : "DATA",
			"dataSourceDetails" : {
				"fieldReference" : "externalId"
			},
			"dataType" : "STRING"
		}

	]
}
```
```json Transaction
{
    "data": {
        "id": "67ebcbe9730aa850fc504145",
        "orgId": 100737,
        "searchStrategyType": "COMBINATION",
        "entityType": "TRANSACTION",
        "dataFieldDefinitions": [
            {
                "fieldId": "billNumber",
                "fieldAlias": "billNumber",
                "fieldType": "DATA",
                "dataSourceDetails": {
                    "fieldReference": "billNumber"
                },
                "dataType": "STRING"
            },
            {
                "fieldId": "billDate",
                "fieldAlias": "billDate",
                "fieldType": "DATA",
                "dataSourceDetails": {
                    "fieldReference": "billDate"
                },
                "dataType": "DATE"
            },
            {
                "fieldId": "storename",
                "fieldAlias": "storename",
                "fieldType": "DATA",
                "dataSourceDetails": {
                    "fieldReference": "additionalFields.storename"
                },
                "dataType": "STRING"
            },
            {
                "fieldId": "storecode",
                "fieldAlias": "storecode",
                "fieldType": "DATA",
                "dataSourceDetails": {
                    "fieldReference": "additionalFields.storecode"
                },
                "dataType": "STRING"
            }
        ],
        "auditInfo": {
            "createdOn": "2025-04-01T11:20:09.793+00:00",
            "createdBy": 75155282,
            "lastUpdatedOn": "2025-04-01T11:20:09.793+00:00",
            "lastUpdatedBy": 75155282
        }
    },
    "errors": []
}
```