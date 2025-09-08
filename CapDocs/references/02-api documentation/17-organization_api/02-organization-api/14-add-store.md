---
title: Add Store
excerpt: Allows org admins to add a store to an org.
api:
  file: v2.json
  operationId: add-store
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
The API allows the organisation admin to add a store to an organisation. It supports [custom fields](https://docs.capillarytech.com/docs/data-fields#custom-fields) used to store additional information related to the store.

# API endpoint example

`https://eu.api.capillarytech.com/v2/orgEntity/store`

# Prerequisites

-   Authentication: Basic or OAuth authentication 
-   Access group resource: Read and write access to the `Store` resource 
-   Admin of the organisation

# Resource information

|                        |                    |
| :--------------------- | :----------------- |
| URI                    | v2/orgEntity/store |
| HTTP Method            | POST               |
| Pagination             | NA                 |
| Batch support          | NA                 |
| Rate limit information | NA                 |

# Request body parameter

<HTMLBlock>{`
<table style="width: 100%; border-collapse: collapse;">
<thead>
<tr>
  <th style="border: 1px solid #ddd; padding: 8px;">Parameter (Parameters marked with * are mandatory)</th>
  <th style="border: 1px solid #ddd; padding: 8px;">Datatype</th>
  <th style="border: 1px solid #ddd; padding: 8px;">Description</th>
</tr>
</thead>
<tbody>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>code*</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>String</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Unique store code used for identification in the Capillary system. The string starts with a lowercase letter and includes lowercase letters, numbers, periods, underscores, and hyphens.<br> <strong>Note</strong>: Spaces between characters are not allowed. The maximum number of characters allowed is 50 and the minimum characters allowed is 1.. </p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>description</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>String</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Description of the store.<br><strong>Note</strong>: The maximum number of characters allowed is 250.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>name*</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>String</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Name of the store. The string includes uppercase and lowercase letters, numbers, underscores, and spaces. Special characters such as periods, hyphens, or other symbols are not allowed.<br><strong>Note</strong>: The maximum number of characters allowed is 100.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>type</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Enum</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Type of the <a href="https://docs.capillarytech.com/docs/data-fields">entity </a>you are creating. Here, the entity is <code>STORE</code>.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>adminType</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Enum</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Type of admin user for the store.<br>** Values allowed **: <code>General</code>, <code>Admin</code></p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>isActive</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Boolean</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Indicates whether the store is active.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>timeZoneId</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Integer</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Unique ID representing the timezone of the store&#39;s geographical location. <strong>Example</strong>: 191 - Represents Asia/Kolkata time zone.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>currencyId</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Integer</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Unique ID representing the base currency of the store&#39;s location, corresponding to the currency of the country where the store operates.<br> <strong>Example</strong>: 230 - Singapore Dollar, 211 - Australian Dollars</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>languageId</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Integer</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Unique ID representing the language used at the store.<br><strong>Example</strong>: 393</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>parentZoneId</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Integer</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Unique ID that identifies the zone where the parent store is located.  Use the <a href="https://docs.capillarytech.com/reference/get-org-entities">get org entities</a> API to fetch Zones and map those entities to parent fields.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>parentConceptId</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Integer</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Unique ID representing the logical group (Concept) of the store. Use the <a href="https://docs.capillarytech.com/reference/get-org-entities">get org entities</a>  API to fetch Concepts, and map those entities to parent fields.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>externalIds*</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Array</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>List of external identifiers associated with the store.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>email</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>String</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Store&#39;s email address.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>mobile</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>String</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Store&#39;s mobile number.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>landline</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>String</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Store&#39;s landline number.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>latitude</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>String</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Latitude coordinate of the store.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>longitude</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>String</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Longitude coordinate of the store.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>address</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>String</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Physical address of the store.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>cityId</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Integer</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Unique ID for the city where the store is located.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>areaId</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Integer</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Unique ID for the area where the store is located.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>customFields</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Array</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Array containing the <a href="https://docs.capillarytech.com/docs/data-fields#custom-fields">custom fields</a> and it&#39;s value. These custom fields store special or custom information related to the store.</p>
</td>
</tr>
</tbody>
</table>
`}</HTMLBlock>


```curl Sample request with custom fields
{
    "code": "singlestoretestforcreation",
    "description": "SingleStoreTest",
    "name": "singlestoretestforcreation",
    "type": "STORE",
    "adminType": "GENERAL",
    "isActive": true,
    "timeZoneId": "",
    "currencyId": "",
    "languageId": "",
    "parentZoneId": 50712290,
    "parentConceptId": 50712302,
    "externalIds": [
        "Ex-93991234",
      "Ex-93991237",
      "Ex-93991235"
    ],
    "email": "demostore@example.com",
    "mobile": "917262178832",
    "landline": "",
    "latitude": "",
    "longitude": "",
    "address": "",
    "cityId": 0,
    "areaId": 0,
  "customFields":{
    "store_custom_field":"Single store test"
  }
}
```

# Response parameter

| Parameter | Description                                       |
| --------- | ------------------------------------------------- |
| createdId | Store ID generated for the store.                 |
| warnings  | List of any warnings associated with the request. |

<br />

```json Sample response with custom fields
{
    "createdId": 50770954,
    "warnings": []
}
```

# API-specific error codes

| Error code | Description       |
| :--------- | :---------------- |
| 1220       | Store code exists |
| 1206       | Store name exists |