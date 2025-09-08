---
title: Retrieve search criteria details
excerpt: >-
  This API enables you to retrieve the search criteria details using the search
  criteria ID obtained during creation of the search criteria.
api:
  file: v1.json
  operationId: get-meta
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
> ❗️ Make sure that you have appropriate access control configured. For more information, see [access group documentation](https://docs.capillarytech.com/docs/access-group).

# API endpoint

`{host}/api_gateway/cortex/v1/criteria/{id}`

# Query parameters

| Parameter | Type   | Description                                                 |
| :-------- | :----- | :---------------------------------------------------------- |
| id        | String | The search criteria ID obtained during the search criteria. |

# Response parameters

| Parameter                                                 | Description                                                                                                           |
| --------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| data                                                      | An object containing the criteria data.                                                                               |
| data.id                                                   | The ID of the search criteria (e.g., "64b117d756bb3f20312aae7f").                                                     |
| data.orgId                                                | The ID of the organization associated with the criteria (e.g., 2064).                                                 |
| data.name                                                 | The name of the search criteria (e.g., "criteria\_1231\_1").                                                          |
| data.entityType                                           | The type of entity associated with the search criteria (e.g., "TRANSACTION").                                         |
| data.fieldDefinitions                                     | An array containing the definitions of fields used in the search criteria.                                            |
| data.fieldDefinitions\[].fieldId                          | The ID of the search field (e.g., "destination" or "origin").                                                         |
| data.fieldDefinitions\[].fieldAlias                       | The alias or display name of the search field (e.g., "destination" or "origin").                                      |
| data.fieldDefinitions\[].dataSourceDetails.fieldReference | The reference to the search field in the data source (e.g., "extendedFields.destination" or "extendedFields.origin"). |
| data.fieldDefinitions\[].dataType                         | The data type of the search field (e.g., "STRING").                                                                   |
| data.searchDataPolicy                                     | An object defining the data retention policy and expiration details for the search data.                              |
| data.searchDataPolicy.dataRetentionPolicy.unit            | The unit of time for the data retention policy (e.g., "DAYS").                                                        |
| data.searchDataPolicy.dataRetentionPolicy.value           | The value or duration for the data retention policy (e.g., 30).                                                       |
| data.searchDataPolicy.expireDataFrom                      | Specifies the event that triggers the expiration of data (e.g., "CREATE").                                            |
| data.active                                               | Indicates whether the criteria is active (true/false).                                                                |
| data.bulkJobStatus                                        | The status of any associated bulk job (e.g., "OPEN").                                                                 |
| data.auditInfo                                            | An object containing audit information about the criteria.                                                            |
| data.auditInfo.createdOn                                  | The timestamp indicating when the criteria was created.                                                               |
| data.auditInfo.createdBy                                  | The ID of the user who created the criteria.                                                                          |
| data.auditInfo.lastUpdatedOn                              | The timestamp indicating when the search criteria was last updated.                                                   |
| data.auditInfo.lastUpdatedBy                              | The ID of the user who last updated the criteria.                                                                     |
| errors                                                    | An array containing any error messages.                                                                               |