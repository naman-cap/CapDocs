---
title: Add Till with Existing Custom Fields
excerpt: ''
api:
  file: v2.json
  operationId: add-till-and-attach-existing-custom-field
deprecated: false
hidden: true
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
This API enables you to create a new Till for your store.

<br />

> 👍 Note
>
> - You can also add custom fields to a till. The till level custom fields enables brands to add additional information about the till specially when the brand has multiple tills mapped to a store. For example, till code, till name, description about till etc. You can [add a till with new custom fields](https://docs.capillarytech.com/reference/add-till-with-new-custom-fields), [add a till with existing custom fields attached to it](https://docs.capillarytech.com/reference/add-till-and-attach-custom-field) or can also [add the custom fields while updating a till](https://docs.capillarytech.com/reference/create-custom-field-to-attach-existing-till).
> - For detailed information about our APIs and for hands-on testing, refer documentation in [API overview](https://docs.capillarytech.com/reference/apioverview) and step-by-step guide on making your first API call in [Make your first API call](https://docs.capillarytech.com/reference/make-your-first-api-call).

# API endpoint example

[https://eu.api.capillarytech.com/v2/orgEntity/till](https://eu.api.capillarytech.com/v2/orgEntity/till)

# Prerequisites

-   Authentication; Basic or OAuth authentication details
-   Access group resource - Access to Organisation resource

# Resource information

|               |                   |
| :------------ | :---------------- |
| URI           | v2/orgEntity/till |
| HTTP method   | POST              |
| Rate limit    | Default           |
| Batch support | NA                |

# Request query/body parameters

<HTMLBlock>{`
<table style="width: 100%; border-collapse: collapse;">
<thead>
<tr>
  <th style="border: 1px solid #ddd; padding: 8px;">Parameter<br>(Parameters marked with * are mandatory)</th>
  <th style="border: 1px solid #ddd; padding: 8px;">Type</th>
  <th style="border: 1px solid #ddd; padding: 8px;">Description</th>
</tr>
</thead>
<tbody>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>name*</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>string</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Name for the till. The Till name specified will be copied to Till code as well in the backend. You can have same till name and store names for tills and stores in different clusters.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>password*</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>string</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Password for the till</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>storeId*</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>long</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Store ID of the parent Store to in which the Till has to be created.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>description</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>string</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Description for the till.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>billable</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>boolean</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Specify if the till is used for billing. By default, the value is set as true.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>storeServerId</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>long</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Store server ID of the parent Store if available.</p>
</td>
</tr>
</tbody>
</table>
`}</HTMLBlock>
```curl
curl --location 'https://eu.api.capillarytech.com/v2/orgEntity/till' \
--header 'Authorization: Basic cmFuZG9tE6MjAyY2I5NjJhYzU5MDc1Yjk2NGIwNzE1MmQyMzRiNzA=' \
--header 'Content-Type: application/json' \
--data '{
  "description": "Testing description",
  "storeId": 50154731,
  "password": "123",
  "billable": true,
  "name": "new_till2239"
}'
```

# Response parameters

| Parameter | Description          |
| --------- | -------------------- |
| createdId | The till ID created. |
| warnings  | Warnings if any.     |

```json
{
    "createdId": 50157065,
    "warnings": []
}
```

# API-specific error codes

| Error code | Description                                                |
| :--------- | :--------------------------------------------------------- |
| 1207       | TIll name already exists. Use a unique name.               |
| 1214       | The parent store is not valid. Use a valid parent store ID |