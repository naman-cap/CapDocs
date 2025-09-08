---
title: Deactivate search criteria
excerpt: This API enables you to deactivate a search criteria.
api:
  file: v1.json
  operationId: deactivate-search-criteria
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
> 👍 Notes
>
> * Make sure that you have appropriate access control configured. For more information, see [access group documentation](https://docs.capillarytech.com/docs/access-group).
> * Once a criteria is deactivated, you cannot reactivate it.

# API endpoint

`{host}/api_gateway/cortex/v1/criteria/{id}`

# Response parameters

| Parameter        | Type    | Description                                                           |
| ---------------- | ------- | --------------------------------------------------------------------- |
| id               | STRING  | The unique identifier of the search criteria                          |
| orgId            | INTEGER | The organization ID associated with the search criteria               |
| name             | STRING  | The name of the search criteria                                       |
| entityType       | STRING  | The type of entity (TRANSACTION in this case)                         |
| fieldDefinitions | ARRAY   | An array of field definitions for the search criteria                 |
| searchDataPolicy | OBJECT  | The data retention policy and expiration details                      |
| active           | BOOLEAN | Indicates whether the criteria is active or not                       |
| bulkJobStatus    | STRING  | The status of any bulk job associated with the search criteria        |
| auditInfo        | OBJECT  | Information about the creation and last update of the search criteria |