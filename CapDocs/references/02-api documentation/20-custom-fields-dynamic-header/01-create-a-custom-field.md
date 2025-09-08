---
title: Create a Custom Field
excerpt: ''
api:
  file: v2.json
  operationId: create-a-custom-field
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
This API allows you to create custom fields, either applicable across all entities within the organization or specific to a single entity, such as a loyalty transaction. You can create custom fields with the same name separately for the parent and child organizations. This is useful in scenarios where you want to assign distinct values to the custom field at the parent and child levels, such as setting different header content in email campaigns for each organization. 

**Note:** For customer registration, it is recommended to avoid using identical custom field names for both parent and child organizations. When a custom field with the same name exists at both levels, the value at the parent level will always override that of the child organization.

# API endpoint example

`https://eu.intouch.capillarytech.com/v2/customFields`

# Prerequisites

-   Authentication -  Basic Auth
  -   User name: Capillary Intouch email ID of the admin user
  -   Password:  Intouch login password in MD5.

# Resource information

|                       |                 |
| :-------------------- | :-------------- |
| URI                   | v2/customFields |
| HTTP method           | POST            |
| Pagination supported? | NA              |
| Rate limit            | NA              |
| Batch support         | NA              |

# Header Information

Both the headers are mandatory.

|                       |                           |
| :-------------------- | :------------------------ |
| X-CAP-API-AUTH-KEY    | Auth Key for internal API |
| X-CAP-API-AUTH-ORG-ID | Org ID                    |

# Body parameters

<HTMLBlock>{`
<table style="width: 100%; border-collapse: collapse;">
<thead>
<tr>
  <th style="border: 1px solid #ddd; padding: 8px;">Parameter</th>
  <th style="border: 1px solid #ddd; padding: 8px;">Data Type</th>
  <th style="border: 1px solid #ddd; padding: 8px;">Description</th>
</tr>
</thead>
<tbody>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>scope</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>STRING</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>The entity for which the custom field will be applicable. For example, the custom fields created for the scope <code>LOYALTY_REGISTRATION</code> will be applicable only for the LOYALTY_REGISTRATION entity. Supported values are:  </p>
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
<li>NI_CUSTOM_FIELDS - Not in use.</li>
<li>CUSTOMER_CARD</li>
<li>TILL_CUSTOM_FIELDS</li>
<li>ORG_CUSTOM_FIELD: Applicable for the entire org.</li>
</ul>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>customFields</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>ARRAY</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Includes the custom fields that need to be created.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><ul>
<li>name</li>
</ul>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>STRING</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Name of the custom field. The maximum number of characters supported is 20.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><ul>
<li>type</li>
</ul>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>STRING</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Field type of the custom field. The supported types are text, textarea, select, checkbox, radio, file, template_area, datepicker, separator, button, email_body, feedback, and label</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><ul>
<li>dataType</li>
</ul>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Enum</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Data type of the custom field. The supported data types are Boolean, Integer, Double and String.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><ul>
<li>label</li>
</ul>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>STRING</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Name to be displayed on the UI. </p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><ul>
<li>defaultValue</li>
</ul>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>STRING</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Default value assigned to the custom field, e.g., <code>&quot;#1234&quot;</code>. This value is only Meta data and is not tagged to entity by default. **Note: **This field applies to client-side applications like Instore and does not undergo any server-side validation.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><ul>
<li>phase</li>
</ul>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>STRING/INT</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>This is applicable for Instore and is not in use.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><ul>
<li>position</li>
</ul>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>INT</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Specify the sequence order of the custom field. For example, 1 to appear in the first position of the form. This field applies to client-side applications like Instore and does not undergo any server-side validation.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><ul>
<li>rule</li>
</ul>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>STRING</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Allows you to specify logical expressions in the Infix expression language. You can use placeholders like {{custom_field_name}}, which will be dynamically replaced with actual values during evaluation.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><ul>
<li>serverRule</li>
</ul>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>STRING</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Allows you to define rules in Infix form. You should use the following format to specify the rule:<br><code>{&quot;name&quot;:&quot;{{custom_field_name}}&quot;,&quot;value&quot;:&quot;{{custom_field_value}}&quot;} </code><br>In this format, {{custom_field_name}} serves as a placeholder for the field&#39;s name, while {{custom_field_value}} represents the corresponding value. These placeholders will be dynamically replaced with actual values during evaluation, enabling flexible and context-specific rule processing.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><ul>
<li>regex</li>
</ul>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>STRING</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Regular expression for validation (if any). For example, you can use regex to validate an email field.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><ul>
<li>error</li>
</ul>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>STRING</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Error message to display for invalid input (if any).</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><ul>
<li>isDisabled</li>
</ul>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>BOOLEAN</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Indicates if the custom field is disabled (<code>0</code> for false). This field applies to client-side applications like Instore and does not undergo any server-side validation.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><ul>
<li>isCompulsory</li>
</ul>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>BOOLEAN</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Indicates if the custom field is mandatory (<code>0</code> for false). This field applies to client-side applications like Instore and does not undergo any server-side validation.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><ul>
<li>disableAtServer</li>
</ul>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>BOOLEAN</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Indicates if the field is disabled on the server (<code>0</code> for false).</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><ul>
<li>isUpdatable</li>
</ul>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>BOOLEAN</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Indicates if the field can be updated (<code>0</code> for false). This field applies to client-side applications like Instore and does not undergo any server-side validation.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><ul>
<li>enableAuditTrail</li>
</ul>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>BOOLEAN</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Specifies if audit trails are enabled (<code>0</code> for false).</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><ul>
<li>isPiiData</li>
</ul>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>BOOLEAN</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Marks if the field contains PII data (<code>0</code> for false).</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><ul>
<li>isPsiData</li>
</ul>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>BOOLEAN</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Marks if the field contains PSI data (<code>0</code> for false).</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><ul>
<li>helptext</li>
</ul>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>STRING</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Help text associated with the field (if any).</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><ul>
<li>attrs</li>
</ul>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>STRING</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Additional attributes for the field (if any).</p>
</td>
</tr>
</tbody>
</table>
`}</HTMLBlock>


```json Sample Request Body
{
  "scope": "ORG_CUSTOM_FIELD",
  "customFields": [
    {
      "name": "Email Footer Color",
      "type": "text",
      "dataType": "STRING",
      "label": "Mail content",
      "scope": "ORG_CUSTOM_FIELD",
      "defaultValue": "#1234",
      "phase": "1",
      "position": 0,
      "rule": "",
      "serverRule": "",
      "regex": "",
      "error": "",
      "isDisabled": 0,
      "isCompulsory": 0,
      "disableAtServer": 0,
      "isUpdatable": 0,
      "enableAuditTrail": 0,
      "isPiiData": 0,
      "isPsiData": 0,
      "helptext": "",
      "attrs": ""
 
    }
  ]
}
```

<Note title="Note">
The maximum number of auditable custom fields that can be created is controlled by the `PRODUCT_CONF_ORG_AUDITABLE_CUSTOM_FIELDS_LIMIT` configuration. If this configuration is not set for a specified organisation, the default limit is set to 5 at the backend.
</Note>

# Response parameters

```json Response
{
    "entity": [
        {
            "orgId": 50399,
            "name": "Email Footer Color",
            "type": "text",
            "dataType": "STRING",
            "label": "Mail content",
            "scope": "ORG_CUSTOM_FIELD",
            "defaultValue": "#1234",
            "phase": "1",
            "position": 0,
            "rule": "",
            "serverRule": "",
            "regex": "",
            "error": "",
            "isDisabled": 0,
            "isCompulsory": 0,
            "disableAtServer": 0,
            "isUpdatable": 0,
            "enableAuditTrail": 0,
            "isPiiData": 0,
            "isPsiData": 0,
            "helptext": "",
            "attrs": "",
            "value": ""
        }
    ],
    "warnings": [],
    "errors": [],
    "success": true
}
```

# Error codes

| **Error Code** | **Error**                                  | **Description**                                                                                         |
| -------------- | ------------------------------------------ | ------------------------------------------------------------------------------------------------------- |
| 91032          | **NOT_AN_ADMIN_USER**                      | Only admin user can access the endpoint.                                                                |
| 1018           | **INVALID_CUSTOM_FIELD_SCOPE**             | Provided scope is invalid.                                                                              |
| 1023           | **AUDITABLE_CUSTOM_FIELDS_COUNT_BREACHED** | Maximum auditable custom field limit is `{0}`, existing count is `{1}` (including the current payload). |
| 1024           | **CUSTOM_FIELD_PARAM_NULL_OR_EMPTY**       | Custom field parameter `{0}` is null or empty.                                                          |
| 1025           | **DUPLICATE_ORG_CUSTOM_FIELD**             | Duplicate organisation custom field: `{0}`.                                                             |
| 1026           | **FAILED_TO_SAVE_CUSTOM_FIELDS**           | Failed to save custom fields. Try again.                                                                |
| 1028           | **CUSTOM_FIELD_LIST_NULL_OR_EMPTY**        | Null or empty custom field list.                                                                        |

**Note:** In the descriptions, `{0}` and `{1}` are placeholders that will be replaced with specific values, such as the maximum limit, current count, or field name based on the context.