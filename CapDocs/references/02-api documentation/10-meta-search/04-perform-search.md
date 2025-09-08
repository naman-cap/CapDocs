---
title: Perform search
excerpt: You can use this API and search for a transaction/customer data.
api:
  file: v2.json
  operationId: perform-search
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
The Entity Search API allows you to search for specific entities (such as customers or transactions) based on defined search criteria.

> 🚧 Notes
>
> * Make sure that you have access to `EntitySearch` resource. For more information, see [access group documentation](https://docs.capillarytech.com/docs/access-group).
> * By default, this search (cortex search) is not enbabled for all the orgs. Raise a Jira ticket to the sustenance team to activate.
> * Make sure that a valid search criteria is available.
> * Deleted customers are not included in the search results.

# API endpoint

`{host}//v2/search/entity`

# Request query parameters

<HTMLBlock>{`
<table style="width: 100%; border-collapse: collapse;">
<thead>
<tr>
  <th style="border: 1px solid #ddd; padding: 8px;">Parameters</th>
  <th style="border: 1px solid #ddd; padding: 8px;">Data Type</th>
  <th style="border: 1px solid #ddd; padding: 8px;">Description</th>
</tr>
</thead>
<tbody>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>requiredTotal</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Boolean</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Indicates whether to include the total number of search results against the parameter <code>total</code>. If set to false, <code>total</code> shows only the count of items returned in this response. If set to true, it shows the overall number of matching results. For example, if a search finds 50 results but you set a <code>limit</code> of 10 and total is true, <code>total</code> will display 50 while the response returns only 10 items.<br>**Supported Values **: <code>true</code>, <code>false</code>.</p>
</td>
</tr>
</tbody>
</table>
`}</HTMLBlock>

# Body parameters

<Table align={["left","left","left","left"]}>
  <thead>
    <tr>
      <th>
        Parameter
      </th>

      <th>
        Type
      </th>

      <th>
        Description
      </th>

      <th>
        Required
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `entityType`\*
      </td>

      <td>
        String
      </td>

      <td>
        The type of entity to search. Supported values: TRANSACTION, CUSTOMER.
      </td>

      <td>
        Yes
      </td>
    </tr>

    <tr>
      <td>
        `limit`
      </td>

      <td>
        Integer
      </td>

      <td>
        The default value is often set to 10. The maximum value supported is 20. The search result is listed as per the customer registration date. The newly added customer is listed first.
      </td>

      <td>
        No
      </td>
    </tr>

    <tr>
      <td>
        `offset`
      </td>

      <td>
        Integer
      </td>

      <td>
        The starting point for the pagination. The default value for offset is 0, meaning the pagination starts from the first record. Any non-negative integer, representing the starting point for the pagination, is supported.
      </td>

      <td>
        No
      </td>
    </tr>

    <tr>
      <td>
        `searchConditions`\*
      </td>

      <td>
        Array
      </td>

      <td>
        List of conditions to filter the search results.
      </td>

      <td>
        Yes
      </td>
    </tr>

    <tr>
      <td>
        `fieldId`\*
      </td>

      <td>
        String
      </td>

      <td>
        The field name to search. eg: billNumber, deliveryStatus etc. For search using prefix (Customer `OR` criteria), use field ID as `search_prefix`.
      </td>

      <td>
        Yes
      </td>
    </tr>

    <tr>
      <td>
        `operator`
      </td>

      <td>
        Enum
      </td>

      <td>
        The comparison operator. Supported values EQUALS, STARTS\_WITH, and RANGE (for date or date time fields). You cannot apply RANGE on multiple fields.
      </td>

      <td>
        Optional
      </td>
    </tr>

    <tr>
      <td>
        `values`\*
      </td>

      <td>
        Array
      </td>

      <td>
        Values to search against the field name (`fieldId`). For billDate, the date should be provided in epoch format. Notes: Value must be longer than 2 characters to be validated.
      </td>

      <td>
        Yes
      </td>
    </tr>

    <tr>
      <td>
        `enrichmentFields`\*
      </td>

      <td>
        Object
      </td>

      <td>
        Specifies additional data fields to be retrieved in the response.
      </td>

      <td>
        Yes
      </td>
    </tr>

    <tr>
      <td>
        `enrichedFields`
      </td>

      <td>
        Array
      </td>

      <td>
        Additional enriched fields to be included in the search result. For example, if you want to include customer status in your response when searching for customer data, you can add customerStatus in the enrichedFields.
        **Supported Fields**

        * **Customer Entity:** customerStatus, statusLabel, registeredDate, loyaltyStatus, registeredStoreCode, registeredStoreName, cardNumber, cardSeriesName, lastUpdatedOn
        * **Transaction Entity:** payment\_mode, outlier\_status, transaction\_notes, last\_updated\_on\_date\_time

          **Note:** If not required, you can leave this field empty. When enrichedFields are provided as an empty list, no enrichment will be applied for any field in the response. This can be useful when certain fields are not required for a specific query.
      </td>

      <td>
        Optional
      </td>
    </tr>

    <tr>
      <td>
        `customFields`
      </td>

      <td>
        Array
      </td>

      <td>
        Custom fields that need to be included in the search results. For example, if you want to add information about a custom field called 'booking ID' in the response, you can specify the custom field name as 'booking ID'. If not required, you can leave this field empty. You can use an asterisk (\*) sign in custom fields to include all available fields in that category in the response. If no values are mentioned, no custom fields will be fetched.
      </td>

      <td>
        Optional
      </td>
    </tr>

    <tr>
      <td>
        `extendedFields`
      </td>

      <td>
        Array
      </td>

      <td>
        Extended fields that need to be included in the search results. For example, if you want to add information about an extended field called 'Gender' in the response, you can specify the extended field name as 'booking ID'. If not required, you can leave this field empty. You can use an asterisk (\*) sign in extended fields to include all available fields in that category in the response. If no values are defined, no extended fields will be fetched.
      </td>

      <td>
        Optional
      </td>
    </tr>
  </tbody>
</Table>

```json Search Customer
curl --location 'https://crm-nightly-new.cc.capillarytech.com/v2/search/entity?totalRequired=true' \
--header 'Content-Type: application/json' \
--header 'X-CAP-API-AUTH-KEY: Qjc0M0ExMDE0MDBBMTUzRDVFRTVFNDI0N0Q5QzAxOEI=' \
--header 'X-CAP-API-AUTH-ORG-ID: 1231' \
--header 'Authorization: Basic Y20uMToyMDJjYjk2MmFNzViOTY0YjA3MTUyZDIzNGI3MA==' \
--data '{
    "entityType": "CUSTOMER",
    "searchConditions": [
        {
            "fieldId": "firstName",
            "operator": "EQUALS",
            "values": [
                "xyz1218"
            ]
        },
        {
            "fieldId": "gender",
            "operator": "EQUALS",
            "values": [
                "Male"
            ]
        },
        {
            "fieldId": "state",
            "operator": "EQUALS",
            "values": [
                "Delhi"
            ]
        }
    ],
    "enrichmentFields": {
        "customFields": [
            "*"
        ],
        "extendedFields": [
            "*"
        ],
        "enrichedFields": [
            "customerStatus"
        ]
    }
}'
```
```json Search Transaction
curl --location 'https://eu.intouch.capillarytech.com/v2/search/entity?totalRequired=true' \
--header 'Content-Type: application/json' \
--header 'Authorization: Basic Z2VvcmdlLmpvaG5zb246OTg4OTU2NWI4ODVhMmY4ZWE1MTk1MjA2NWEwYTEzNzg=' \
--data '{
    "entityType": "TRANSACTION",
    "searchConditions": [
        {
            "fieldId": "billNumber",
            "operator": "EQUALS",
            "values": [
                "Transaction1"
            ]
        }
    ],
    "enrichmentFields": {
        "enrichedFields": [
            "payment_mode"
        ],
        "customFields" : [
             "booking_date"
        ]
        
    }
}'
```
```curl Search customer using prefix
curl --location 'https://eu.intouch.capillarytech.com/v2/search/entity?totalRequired=true' \
--header 'Content-Type: application/json' \
--header 'Authorization: Basic Z2VvcmdlLmpvaG5zb246OTg4OTU2NWI4ODVhMmY4ZWE1MTk1MjA2NWEwYTEzNzg=' \
--data '{
    "entityType": "CUSTOMER",
    "searchConditions": [
           {
            "fieldId": "search_prefix",
            "operator": "STARTS_WITH",
            "values": "steve"
        }
    ],
    "enrichmentFields": {
        "enrichedFields": "",
        "customFields": "ehpdivisionnameclien",
        "extendedFields": "affiliation_id"
    }

}'
```
```curl With enriched fields
curl --location 'https://eu.intouch.capillarytech.com/v2/search/entity?totalRequired=true' \
--header 'Content-Type: application/json' \
--header 'Authorization: Basic Z2VvcmdlLmpvaG5zb246OTg4OTU2NWI4ODVhMmY4ZWE1MTk1MjA2NWEwYTEzNzg=' \
--data '{
    "entityType": "CUSTOMER",
    "searchConditions": [
           {
            "fieldId": "search_prefix",
            "operator": "STARTS_WITH",
            "values": "steve"
        }
    ],
    "enrichmentFields": {
        "customFields": [
            "*"
        ],
        "extendedFields": [
            "*"
        ],
        "enrichedFields": [
            "customerStatus"
        ]
    }

}'
```
```curl Multiple enrichment fields
curl --location 'https://eu.intouch.capillarytech.com/v2/search/entity?totalRequired=true' \
--header 'Content-Type: application/json' \
--header 'Authorization: Basic Z2VvcmdlLmpvaG5zb246OTg4OTU2NWI4ODVhMmY4ZWE1MTk1MjA2NWEwYTEzNzg=' \
--data '{
    "entityType": "CUSTOMER",
    "searchConditions": [
           {
            "fieldId": "search_prefix",
            "operator": "STARTS_WITH",
            "values": "bruce.wayne"
        }
    ],
    "enrichmentFields": {
        "enrichedFields": "customerStatus","statusLabel","registeredDate","loyaltyStatus","registeredStoreCode", "registeredStoreName","lastUpdatedOn","cardNumber",
        "customFields": "",
        "extendedFields": "affiliation_id"
    }

}
'
```

<br />

# Response parameters

| Parameter                              | Type    | Description                                                                                                                                                    |
| -------------------------------------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `pagination`                           | Object  | Contains details about the pagination of the response.                                                                                                         |
| `pagination.limit`                     | Integer | The maximum number of records returned per request.                                                                                                            |
| `pagination.offset`                    | Integer | The starting index for fetching records.  For instance, an offset=10 would skip the first 10 records and start returning results from the 11th record onwards. |
| `pagination.sortBy`                    | String  | The field used to sort the results.                                                                                                                            |
| `pagination.sortOrder`                 | String  | The sorting order (`ASC` for ascending, `DESC` for descending).                                                                                                |
| `pagination.total`                     | Integer | The total number of records available.                                                                                                                         |
| `data`                                 | Array   | Contains the list of entities returned in the response.                                                                                                        |
| `data[].entityType`                    | String  | The type of entity retrieved (e.g., `TRANSACTION`). Based on the search,                                                                                       |
| Transaction or Customer Search Details |         | Based on the defined search, the transaction or customer details along with the custom field/extended field/other enrichment details appear.                   |
| `warnings`                             | Array   | List of warning messages, if any.                                                                                                                              |
| `errors`                               | Array   | List of error messages, if any.                                                                                                                                |

```json
{
    "pagination": {
        "limit": 10,
        "offset": 0,
        "sortBy": "ID",
        "sortOrder": "DESC",
        "total": 1
    },
    "data": [
        {
            "entityType": "TRANSACTION",
            "transactionSearchDetails": [
                {
                    "entityId": "881933080",
                    "transactionEnrichedFields": {
                        "customFields": {
                            "booking_date": "23feb2025"
                        },
                        "paymentModes": []
                    }
                }
            ]
        }
    ],
    "warnings": [],
    "errors": []
}
```
```Text with enriched fields
{
  "pagination": {
    "limit": 10,
    "offset": 0,
    "sortBy": "ID",
    "sortOrder": "DESC",
    "total": 6
  },
  "data": [
    {
      "entityType": "CUSTOMER",
      "customerSearchDetails": [
        {
          "entityId": "565040882",
          "profiles": [
            {
              "source": "INSTORE",
              "firstName": "Steven",
              "lastName": "Wilson"
            }
          ],
          "enrichedFields": {
            "extendedFields": {
              "age": 40
            },
            "customerStatus": "ACTIVE"
          }
        },
        {
          "entityId": "565041081",
          "profiles": [
            {
              "source": "INSTORE",
              "firstName": "Steven",
              "lastName": "Wilson"
            }
          ],
          "enrichedFields": {
            "extendedFields": {
              "age": 40
            },
            "customerStatus": "ACTIVE"
          }
        },
        {
          "entityId": "565041087",
          "profiles": [
            {
              "source": "INSTORE",
              "firstName": "Steven1",
              "lastName": "Wilson"
            }
          ],
          "enrichedFields": {
            "extendedFields": {
              "age": 40
            },
            "customerStatus": "ACTIVE"
          }
        },
        {
          "entityId": "565070880",
          "profiles": [
            {
              "source": "INSTORE",
              "firstName": "Steven2",
              "lastName": "Wilson"
            }
          ],
          "enrichedFields": {
            "extendedFields": {
              "age": 40
            },
            "customerStatus": "ACTIVE"
          }
        },
        {
          "entityId": "565070883",
          "profiles": [
            {
              "source": "INSTORE",
              "firstName": "Steven5",
              "lastName": "Wilson4"
            }
          ],
          "enrichedFields": {
            "extendedFields": {
              "age": 40
            },
            "customerStatus": "ACTIVE"
          }
        },
        {
          "entityId": "565070886",
          "profiles": [
            {
              "source": "INSTORE",
              "firstName": "Steven6",
              "lastName": "Wilson4"
            }
          ],
          "enrichedFields": {
            "extendedFields": {
              "age": 40
            },
            "customerStatus": "ACTIVE"
          }
        }
      ]
    }
  ],
  "warnings": [
    {
      "status": false,
      "code": 91310,
      "message": "Custom field not present"
    },
    {
      "status": false,
      "code": 91310,
      "message": "Custom field not present"
    },
    {
      "status": false,
      "code": 91310,
      "message": "Custom field not present"
    },
    {
      "status": false,
      "code": 91310,
      "message": "Custom field not present"
    },
    {
      "status": false,
      "code": 91313,
      "message": "Customer status not found"
    },
    {
      "status": false,
      "code": 91310,
      "message": "Custom field not present"
    },
    {
      "status": false,
      "code": 91313,
      "message": "Customer status not found"
    },
    {
      "status": false,
      "code": 91310,
      "message": "Custom field not present"
    },
    {
      "status": false,
      "code": 91313,
      "message": "Customer status not found"
    }
  ],
  "errors": []
}

```