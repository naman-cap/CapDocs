---
title: Get Data Field Detail
excerpt: >-
  This API allows you to retrieve the data field definitions for the specified
  entity (Customer or Transaction)
api:
  file: v1.json
  operationId: get-data-field-detail-api
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
> For detailed information about the APIs and for hands-on testing, refer to the API overview documentation and the step-by-step guide on making your first API call.

<br />

# Prerequisites

*   Authentication: Basic/OAuth authentication
*   Default access group

# Resource information

|               |                                   |
| :------------ | :-------------------------------- |
| URI           | api\_gateway/cortex/v1/dataFields |
| HTTP method   | GET                               |
| Pagination    | NA                                |
| Rate limit    | Default                           |
| Batch support | NA                                |

# API Endpoint Example

`[{host}/api_gateway/cortex/v1/dataFields](https://eu.api.capillarytech.com/api_gateway/cortex/v1/dataFields)`

# Request Body

```curl Customer
curl --location 'https://eu.api.capillarytech.com/api_gateway/cortex/v1/dataFields' \
--header 'Authorization: Basic cHJlcmFuYV9zaaDoyZmFhZmZjNjY5ZDRjMTc5Y2NlMzNhYzc5OTBjMTQ1Ng==' \
--header 'Content-Type: application/json' \
--header 'Cookie: _cfuvid=257QQtZKKeLsnIKUrPVpHcKPHvi2s4LSYFlH8VLHtc0-1743065149089-0.0.1.1-604800000; _cfuvid=cryFX5AeUyWVtFaBgq_5BT7fv.XNzDRf_OtNgx6a9oA-1743493240591-0.0.1.1-604800000'
```
```curl Transaction
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
        Unique Identifier of the data field definition
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
        The ID of the organization
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
        Defines the search strategy type (`COMBINATION`, `PREFIX`)
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
        Type of entity being searched (`TRANSACTION`, `CUSTOMER`)
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
        List of field definitions
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
        Data type of the field
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
    "data": [
        {
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
        }
    ],
    "errors": []
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