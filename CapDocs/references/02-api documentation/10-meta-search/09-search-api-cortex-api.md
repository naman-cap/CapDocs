---
title: Perform Search (Cortex API)
excerpt: ''
api:
  file: v1.json
  operationId: search-api-cortex-api
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
> 🚧 Notes
> 
> - Make sure that you have access to `EntitySearch` resource. For more information, see [access group documentation](https://docs.capillarytech.com/docs/access-group).
> - By default, this search (cortex search) is not enbabled for all the orgs. Raise a Jira ticket to the sustenance team to activate.
> - Make sure that a valid search criteria is available.
> - Deleted customers are not included in the search results.

This API is used when you want only matching customer or transaction ID values in the results for a given search. Further, if you want to add additional information to the search result, use the [Datafield API](https://docs.capillarytech.com/reference/create-data-field) to enrich the search result. 

# API endpoint

`{host}//api_gateway/cortex/v1/search`

# Body parameters

| Parameter          | Type    | Description                                                                                                                                                                                                                | Required |
| ------------------ | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| `entityType`       | String  | The type of entity to search. Supported values: TRANSACTION, CUSTOMER.                                                                                                                                                     | Yes      |
| `limit`            | Integer | The default value is often set to 10. The maximum value supported is 20. The search result is listed as per the customer registration date. The newly added customer is listed first.                                      | No       |
| `offset`           | Integer | The starting point for the pagination. The default value for offset is 0, meaning the pagination starts from the first record. Any non-negative integer, representing the starting point for the pagination, is supported. | No       |
| `searchConditions` | Array   | List of conditions to filter the search results.                                                                                                                                                                           | Yes      |
| `fieldId`          | String  | The field name to search. eg: ,billNumber, deliveryStatus etc. For search using prefix (Customer OR crteria), use field ID as `search_prefix`.                                                                             | Yes      |
| `operator`         | Enum    | The comparison operator. Supported values EQUALS, STARTS_WITH, and RANGE (for date or date time fields). You cannot apply RANGE on multiple fields.                                                                        | Optional |
| `values`           | Array   | Values to search against the field name (`fieldId`). For billDate, the date should be provided in epoch format.                                                                                                            | Yes      |

# Response parameters

| Parameter                              | Type   | Description                                                                                                                                  |
| -------------------------------------- | ------ | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `data`                                 | Array  | Contains the list of entities returned in the response.                                                                                      |
| `data[].entityType`                    | String | The type of entity retrieved (e.g., `TRANSACTION`). Based on the search,                                                                     |
| Transaction or Customer Search Details |        | Based on the defined search, the transaction or customer details along with the custom field/extended field/other enrichment details appear. |
| `warnings`                             | Array  | List of warning messages, if any.                                                                                                            |
| `errors`                               | Array  | List of error messages, if any.                                                                                                              |

# Error Codes

| Error Code | Description                                                  |
| :--------- | :----------------------------------------------------------- |
| 1000       | Header not present                                           |
| 1002       | Entity type cannot be empty                                  |
| 1003       | Field descriptions cannot be empty                           |
| 1004       | Field identifier cannot be empty                             |
| 1005       | Field data source cannot be empty                            |
| 1006       | Field data type cannot be empty                              |
| 1007       | Problems with search conditions                              |
| 1011       | Offset cannot be negative                                    |
| 1023       | Some search conditions are null or empty                     |
| 1024       | Field identifier is missing                                  |
| 1025       | Search operator is missing                                   |
| 1026       | Search values are missing                                    |
| 1027       | Search conditions must be present                            |
| 1028       | Only one value supported for equals operator                 |
| 1029       | Indexed fields are missing from search conditions            |
| 1042       | Maximum range operators allowed per search exceeded          |
| 1043       | Range search only supported on date fields                   |
| 1044       | Range search on date field only allowed with values in epoch |