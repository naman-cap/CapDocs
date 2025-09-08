---
title: Add Group
excerpt: >-
  Lets you create a new user group. Groups you create will be added to the
  default loyalty program of the org automatically.
api:
  file: v2.json
  operationId: add-group
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
# API endpoint example

[https://eu.api.capillarytech.com/v2/userGroup2](https://eu.api.capillarytech.com/v2/userGroup2)

# Prerequisites

-   Authentication: Basic or OAuth authentication 
-   Access group resource: Read and write access to the `User Group` resource

# Resource information

|                        |                |
| :--------------------- | :------------- |
| URI                    | /v2/userGroup2 |
| HTTP Method            | POST           |
| Pagination             | No             |
| Batch support          | No             |
| Rate limit information | NA             |

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
  <td style="border: 1px solid #ddd; padding: 8px;"><p>externalId*</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>string</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Unique ID of the group. The maximum number of allowed characters is 50.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>groupName</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>string</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Name of the group. The maximum number of allowed characters is 50.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>maxGroupSize*</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>integer</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Maximum size of the group. The maximum group size is as defined by the product configuration <code>CONF_MAX_FLEET_GROUP_SIZE</code>. If this configuration is not set, the default maximum size is 30,000.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>limit</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>integer</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Maximum number of items to be retrieved.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>extendedFields</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>array</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>An array containing the<a href="https://docs.capillarytech.com/docs/data-entities#extended-fields"> extended fields </a>and their corresponding values, enabled for specific verticals within the organisation. These extended fields capture additional information about the group. <strong>Example</strong>:  A brand X wants to capture the type of group: Platinum, Gold, or Silver. It uses the extended fields to capture the information and decides the rewards depending on the group.<br> <strong>Note</strong>: Extended field support is available for fields created using the <a href="https://docs.capillarytech.com/docs/data-entities">entity type </a><code>usergroup2</code>.</p>
</td>
</tr>
</tbody>
</table>
`}</HTMLBlock>
```curl Sample request
{
    "externalId": "purple_externalId",
    "groupName": "name_purple",
    "maxGroupSize": 110
}
```
```curl Sample request with extended fields
{
    "externalId": "natwest_16",
    "groupName": "natwest14",
    "maxGroupSize": 110,
    "extendedFields": {
        "platinum": "25"
    }
}
```

# Response parameters

| Parameter | Description                                |
| --------- | ------------------------------------------ |
| entity    | Unique ID of the user group created.       |
| warnings  | Array containing warning messages, if any. |

```json Sample response
{
    "entity": 2361,
    "warnings": []
}
```
```Text Sample response with extended fields
{
    "entity": 51298,
    "warnings": []
}
```

# API-specific error codes

<HTMLBlock>{`
<table style="width: 100%; border-collapse: collapse;">
<thead>
<tr>
  <th style="border: 1px solid #ddd; padding: 8px;">Error code</th>
  <th style="border: 1px solid #ddd; padding: 8px;">Description</th>
</tr>
</thead>
<tbody>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>1633</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Group ID exists. Change the value of the field <code>externalId</code></p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>91017</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Value of the extended field does not match the data type.<br><strong>Note</strong>: This is a warning, The user group is created, but the extended fields are not updated.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>91016</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Extended field name is incorrect.<br><strong>Note</strong>: This is a warning. The user group is created, but the extended fields are not updated.</p>
</td>
</tr>
</tbody>
</table>
`}</HTMLBlock>