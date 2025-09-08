---
title: Create Data Field
excerpt: >-
  This API allows you to define specific data fields that you want to include in
  the entity search at organisation level.
api:
  file: v1.json
  operationId: create-data-field
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
> For detailed information about the APIs and for hands-on testing, refer to the [API overview documentation](https://docs.capillarytech.com/reference/apioverview) and the step-by-step guide on [making your first API call.](https://docs.capillarytech.com/reference/make-your-first-api-call)

This API lets you specify which data fields should be included when performing an entity search at the organisation level. The fields you define here will automatically be included in the [Cortex Search API](https://docs.capillarytech.com/reference/search-api-cortex-api) (`/api_gateway/cortex/v1/criteria`) response for that specific organisation.

# Prerequisites

*   Authentication: Basic/OAuth authentication
*   Default access group

# Resource Information

|               |                                   |
| :------------ | :-------------------------------- |
| URI           | api\_gateway/cortex/v1/dataFields |
| HTTP method   | POST                              |
| Pagination    | NA                                |
| Rate limit    | Default                           |
| Batch support | NA                                |

# API Endpoint

`\{host\}/api_gateway/cortex/v1/dataFields`

# Request Body Parameters

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
        `- fieldId`\*
      </td>

      <td>
        String
      </td>

      <td>
        The field to search on. For Customer, the supported standard fields are: `firstName`, `lastName`, `email`, `mobile`, `externalId`, and `fullName`. <br />For Transaction, the supported fields are: `outlierStatus`, `billDate`, `billNumber`, and `storecode (additional field)`.
      </td>
    </tr>

    <tr>
      <td>
        -`fieldAlias`
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
        -`fieldType`
      </td>

      <td>
        Enum
      </td>

      <td>
        Type of field. Use the field type `DATA`.
      </td>
    </tr>

    <tr>
      <td>
        dataSourceDetails\`
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
        Applicable when using custom fields or extended fields. Ex: `extendedFields.ship_email`, `customFields.age`. If you are using store code to search, use `additionalFields.storecode` (applicable for transaction).
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

```bash
curl --location 'eu.api.capillarytech.com/api_gateway/cortex/v1/dataFields' \
--header 'Authorization: Basic bmVlcmFqLmRvNGFmDA0MDA5Y2IwMzZhNGNjZGMzMzQzMWVmOWFjOQ==' \
--header 'Content-Type: application/json' \
--header 'Cookie: _cfuvid=NIG4hPIouTlCOXgwODX50uFuouza2nwDNThbawZibQM-1743137683215-0.0.1.1-604800000' \
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
``<code>bash

</code>``bash
curl --location 'eu.api.capillarytech.com/api_gateway/cortex/v1/dataFields' \
--header 'Authorization: Basic bmVlcmFqLmRvYzpiNGFmODDA5Y2IwMzZhNGNjZGMzMzQzMWVmOWFjOQ==' \
--header 'Content-Type: application/json' \
--header 'Cookie: _cfuvid=NIG4hPIouTlCOXgwODX50uFuouza2nwDNThbawZibQM-1743137683215-0.0.1.1-604800000' \
--data '{
"searchStrategyType" : "COMBINATION",
	"entityType" : "TRANSACTION",
  "dataFieldDefinitions" :
   [
		{
			"fieldId" : "billNumber",
			"fieldAlias" : "billNumber",
			"fieldType" : "DATA",
			"dataSourceDetails" : 
            {
				"fieldReference" : "billNumber"
			},
			"dataType" : "STRING"
		},
    {
			"fieldId" : "billDate",
			"fieldAlias" : "billDate",
			"fieldType" : "DATA",
			"dataSourceDetails" : {
				"fieldReference" : "billDate"
			},
			"dataType" : "DATE"
		},
    {
      "fieldId" : "storename",
      "fieldAlias" : "storename",
      "fieldType" : "DATA",
      "dataSourceDetails" : {
        "fieldReference" : "additionalFields.storename"
      },
      "dataType" : "STRING"
    },
    {
      "fieldId" : "storecode",
      "fieldAlias" : "storecode",
      "fieldType" : "DATA",
      "dataSourceDetails" : {
        "fieldReference" : "additionalFields.storecode"
      },
      "dataType" : "STRING"
    }
    
	]

}'

```

<br />

# Response Parameters

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

```json
{
    "data": {
        "id": "67e6a8bfdd6a186b5555ba98",
        "orgId": 100737,
        "searchStrategyType": "PREFIX",
        "entityType": "CUSTOMER",
        "dataFieldDefinitions": [
            {
                "fieldId": "firstName",
                "fieldAlias": "firstName",
                "fieldType": "DATA",
                "dataSourceDetails": {
                    "fieldReference": "firstName"
                },
                "dataType": "STRING"
            },
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
        "auditInfo": {
            "createdOn": "2025-03-28T13:48:47.665+00:00",
            "createdBy": 75155282,
            "lastUpdatedOn": "2025-03-28T13:48:47.665+00:00",
            "lastUpdatedBy": 75155282
        }
    },
    "errors": []
}
``<code>json

</code>``json
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

<br />

# Error Responses

| **HTTP Status** | **Error Code** | **Description**                                                                    |
| --------------- | -------------- | ---------------------------------------------------------------------------------- |
| 400             | 1060           | Data fields already exist for the given org, entity type, and search strategy type |
| 400             | 1053           | Field is not allowed                                                               |
| 400             | 1003           | Field definitions cannot be empty                                                  |
| 400             | 1004           | Field identifier cannot be empty                                                   |
| 400             | 1005           | Field data source cannot be empty                                                  |
| 400             | 1006           | Field data type cannot be empty                                                    |
| 400             | 1045           | Field type is required                                                             |