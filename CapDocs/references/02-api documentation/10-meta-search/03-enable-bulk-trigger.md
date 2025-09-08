---
title: Enable search index of older data
excerpt: This allows you to enable the data retention policy.
api:
  file: v1.json
  operationId: enable-bulk-trigger
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
By default, the search data is indexed starting from the time of creating the search criteria. If you need to index older data, you can utilize this API and enable the indexing of historical data. 

> 🚧 Note
>
> Make sure that you have appropriate access control configured. For more information, see [access group documentation](https://docs.capillarytech.com/docs/access-group).

# API endpoint:

`{host}/api_gateway/cortex/v1/criteria`

# Response parameters

| Parameter | Description                                         |
| --------- | --------------------------------------------------- |
| data      | Indicates the status of the operation (true/false). |
| errors    | An array containing any error messages.             |