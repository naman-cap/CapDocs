---
title: Update Till with Custom Fields
excerpt: ''
api:
  file: v2.json
  operationId: update-till-with-custom-field-info
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
This API enables you to update a till and:

- add existing custom fields to it
- create new custom fields and add them to the till.
- update existing custom fields associated with the till

<br />

> 👍 Note
>
> For detailed information about our APIs and for hands-on testing, refer documentation in [API overview](https://docs.capillarytech.com/reference/apioverview) and  step-by-step guide on making your first API call in [Make your first API call](https://docs.capillarytech.com/reference/make-your-first-api-call) .

# API endpoint example

`<https://eu.api.capillarytech.com/v2/orgEntity/till/{id}>`

# Prerequisites

-   Authentication: Basic or OAuth authentication details
-   Access group resource: Access to Organisation resource
-   Configuration:
- If you want to create more than five custom fields, create a ticket to the sustenance team and increase the limit in the configuration `PRODUCT_CONF_ORG_AUDITABLE_CUSTOM_FIELDS_LIMIT`. By default, the maximum value is set as five.
- If  the configuration`CONF_ALLOW_TILL_AUTH_FOR_ORG_ENTITY_CREATION` is set as false, then the update is possible only with the admin Tills. Otherwise, the custom fields can be updated using any Till.

# Resource information

|               |                        |
| :------------ | :--------------------- |
| URI           | v2/orgEntity/till/`{id}` |
| HTTP method   | PUT                    |
| Rate limit    | Default                |
| Batch support | NA                     |

# Request path parameters

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
  <td style="border: 1px solid #ddd; padding: 8px;"><p>id*</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Integer</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Till Id of existing Till</p>
</td>
</tr>
</tbody>
</table>
`}</HTMLBlock>


# Request body parameters

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
  <td style="border: 1px solid #ddd; padding: 8px;"><p>customFields*</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>array-obj</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>For addition of custom fields - Specify the custom fields to be added to the organization and attach them to the till, or specify the existing custom fields to be attached to the till. For more information on the definitions for the fields in the <code>customField </code>object, refer to the <a href="https://docs.capillarytech.com/reference/add-till-with-new-custom-fields">documentation on adding till with custom fields</a>.<br>For updating values of custom fields - Specify the updated value for the custom fields. Only values of the custom fields can be updated.</p>
</td>
</tr>
</tbody>
</table>
`}</HTMLBlock>


```curl To create custom field and attach to an existing till
curl --location --request PUT 'https://eu.api.capillarytech.com/v2/orgEntity/till/50157006' \
--header 'type: ADMIN_USER' \
--header 'Content-Type: application/json' \
--header 'Authorization: Basic cmFuZG9TE6MjAyY2I5NjJhYzU5MDc1Yjk2NGIwNzE1MmQyMzRiNzA=' \
--data '{
    "customFields": [
    {
      "name": "cf_3",
      "type": "text",
      "dataType": "string",
      "label": "Custom Field Label",
      "defaultValue": "20",
      "phase": "",
      "position": 1,
      "rule": "",
      "serverRule": "",
      "regex": "",
      "error": "",
      "options": "",
      "isDisabled": 0,
      "isCompulsory": 0,
      "disableAtServer": 0,
      "isUpdatable": 1,
      "enableAuditTrail": 0,
      "isPiiData": 0,
      "isPsiData": 0,
      "helptext": "This is a custom field",
      "attrs": "",
      "value": "100"
    }
    ]
}'
```
```curl Associating existing Custom fields with existing Till
curl --location --request PUT 'https://eu.api.capillarytech.com/v2/orgEntity/till/50157007' \
--header 'type: ADMIN_USER' \
--header 'Content-Type: application/json' \
--header 'Authorization: Basic cmFuZG9tMTMjAyY2I5NjJhYzU5MDc1Yjk2NGIwNzE1MmQyMzRiNzA=' \
--data '{
    "customFields": [
    {
      "name": "cf_1",
      "value": "1000"
    }
    ]
}'
```
```curl Updating existing Custom field value of existing Till:
curl --location --request PUT 'https://eu.api.capillarytech.com/v2/orgEntity/till/50157007' \
--header 'type: ADMIN_USER' \
--header 'Content-Type: application/json' \
--header 'Authorization: Basic cmFuZG9tMT6MjAyY2I5NjJhYzU5MDc1Yjk2NGIwNzE1MmQyMzRiNzA=' \
--data '{
    "customFields": [
    {
      "name": "cf_1",
      "value": "2000"
    }
    ]
}'
```

# Response parameters

| Parameterype | Type   | Description                  |
| ------------ | :----- | ---------------------------- |
| entity       | String | The custom field ID created. |
| warnings     | String | Warnings if any.             |

```json
{
    "entity": 50157007,
    "warnings": [],
    "errors": [],
    "success": true
}

```

# API-specific error codes

| Error code | Description                                                                                                                                                                |
| :--------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1207       | Till name already exists. Use a unique name.                                                                                                                               |
| 1214       | The parent store is not valid. Use a valid parent store ID                                                                                                                 |
| 1023       | The number of custom fields that can be created is reached. In the org settings, increase the limit of `PRODUCT_CONF_ORG_AUDITABLE_CUSTOM_FIELDS_LIMIT`. Default value: 5. |
| 1024       | The custom field parameter is null or empty. Enter a value for the parameter.                                                                                              |
| 1025       | There are multiple custom fields with the same name. Use a unique custom field name.                                                                                       |