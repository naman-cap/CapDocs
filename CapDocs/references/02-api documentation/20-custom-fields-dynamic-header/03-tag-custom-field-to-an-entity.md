---
title: Tag Custom Field to an Entity
excerpt: ''
api:
  file: v2.json
  operationId: tag-custom-field-to-an-entity
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
This API enables updating the value of an existing custom field.

**Use Case**: You can create separate custom fields for an attribute in both the parent and child organizations and assign distinct values to each. This is useful in scenarios where you want to define different header colours or values in a campaign email for the parent and child organizations separately.

# API endpoint example

`https://eu.intouch.capillarytech.com/v2/customField/tag`

# Prerequisites

-   Authentication -  Basic Auth
  -   User name: Capillary Intouch email ID of the admin user
  -   Password:  Intouch login password in MD5.

# Resource information

|                       |                    |
| :-------------------- | :----------------- |
| URI                   | v2/customField/tag |
| HTTP method           | POST               |
| Pagination supported? | NA                 |
| Rate limit            | NA                 |
| Batch support         | NA                 |

# Header Information

Both the headers are mandatory.

|                       |                           |
| :-------------------- | :------------------------ |
| X-CAP-API-AUTH-KEY    | Auth Key for internal API |
| X-CAP-API-AUTH-ORG-ID | Org ID                    |

# Requst Parameters

<HTMLBlock>{`
<table style="width: 100%; border-collapse: collapse;">
<thead>
<tr>
  <th style="border: 1px solid #ddd; padding: 8px;">Parameter</th>
  <th style="border: 1px solid #ddd; padding: 8px;">Type</th>
  <th style="border: 1px solid #ddd; padding: 8px;">Description</th>
</tr>
</thead>
<tbody>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>scope</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Enum</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>The scope of the custom field. Supported fields:  </p>
<ul>
<li>LOYALTY_REGISTRATION</li>
<li>LOYALTY_TRANSACTION</li>
<li>CUSTOMER_FEEDBACK</li>
<li>POINTS_REDEMPTION</li>
<li>VOUCHER_REDEMPTION</li>
<li>ZONE_CUSTOM_FIELDS</li>
<li>STORE_CUSTOM_FIELDS</li>
<li>CUSTOM_FIELDS_DATA_LOG</li>
<li>CHECK_IN_FEEDBACK</li>
<li>CUSTOMER_PREFERENCES</li>
<li>ADVANCE_FEEDBACK</li>
<li>LOYALTY_LINE_ITEMS</li>
<li>CUSTOMER_CARD</li>
<li>TILL_CUSTOM_FIELDS</li>
<li>ORG_CUSTOM_FIELD</li>
</ul>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>entityId</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Integer</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Organisation ID associated with the custom field</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>customField</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Object</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Contains details of the custom field being defined or updated</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>└ name</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>String</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>The name of the custom field, e.g., &quot;Org Secondary Color&quot;</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>└ value</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>String</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>The value assigned to the custom field, e.g., &quot;#4567&quot;</p>
</td>
</tr>
</tbody>
</table>
`}</HTMLBlock>


# Response Parameters

| Parameter | Type    | Description                                                        |
| --------- | ------- | ------------------------------------------------------------------ |
| entity    | Integer | Unique identifier of the org associated with this response         |
| warnings  | Array   | List of warnings encountered during processing, if any             |
| errors    | Array   | List of errors encountered during processing, if any               |
| success   | Boolean | Indicates whether the operation was successful (`true` or `false`) |