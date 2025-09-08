---
title: Add Store in bulk
excerpt: Allows the org admin to add stores in bulk
api:
  file: v2.json
  operationId: add-store-in-bulk
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
The API allows bulk store creation with Unicode character support in the `code` and `name` fields. You can also use the API to assign values to pre-existing [custom fields](https://docs.capillarytech.com/docs/data-fields#custom-fields).  
**Note**: You can create a single store by passing a single array.

# API endpoint example

`https://eu.api.capillarytech.com/v2/orgEntity/store/bulk`

# Prerequisites

-   Authentication: Basic or OAuth authentication 
-   Access group resource: Read and write access to the `Store` resource
-   Admin of the organisation

# Resource information

|                        |                          |
| :--------------------- | :----------------------- |
| URI                    | /v2/orgEntity/store/bulk |
| HTTP Method            | POST                     |
| Pagination             | NA                       |
| Batch support          | NA                       |
| Rate limit information | NA                       |

# Request body parameters

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
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Unique store code used for identification in the Capillary system.<br> <strong>Note</strong>: Spaces between characters are not allowed. The maximum number of characters allowed is 50.</p>
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
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Name of the store.<br><strong>Note</strong>: The maximum number of characters allowed is 100.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>type</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>String</p>
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


```json Sample request with custom fields and  unicode characters for code and name
[
{
    "code": "MaiHàGiangCutomField",
    "description": "MaiHàGiangCutomField",
    "name": "MaiHàGiangCutomField",
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
    "store_custom_field":"store test"
  }
}]
```

# Response parameters

| **Parameter**           | **Description**                                                                                                                                                                                            |
| ----------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| response                | List of responses for each entity.                                                                                                                                                                         |
| - entityId              | Unique identifier for the store created.                                                                                                                                                                   |
| - result                | Array containing the details of the store.                                                                                                                                                                 |
| \-- id                  | Unique identifier for the store created.                                                                                                                                                                   |
| \-- code                | A unique store code used for identification in Capillary system.                                                                                                                                           |
| \-- description         | Description of the store.                                                                                                                                                                                  |
| \-- name                | Name of the store.                                                                                                                                                                                         |
| \-- type                | Type of the [entity ](https://docs.capillarytech.com/docs/data-fields) you are creating.                                                                                                                   |
| \-- adminType           | Type of admin user for the store. ** Values **: `General`, `Admin`                                                                                                                                         |
| \-- isActive            | Indicates whether the store is active.                                                                                                                                                                     |
| \-- timeZoneId          | Unique ID representing the timezone of the store's geographical location.                                                                                                                                  |
| \-- currencyId          | Unique ID representing the base currency of the store's location, which corresponds to the currency of the country where the store operates. **Example**: 230 - Singapore Dollar, 211 - Australian Dollars |
| \-- languageId          | Unique ID representing the language used at the store. **Example**: 393                                                                                                                                    |
| \-- parentZoneId        | Unique ID that identifies the zone where the parent store is located.                                                                                                                                      |
| \-- parentConceptId     | Unique ID representing the logical group (Concept) of the store.                                                                                                                                           |
| \-- externalIds         | List of external identifiers associated with the store.                                                                                                                                                    |
| \-- email               | Store's email address.                                                                                                                                                                                     |
| \-- mobile              | Store's mobile number.                                                                                                                                                                                     |
| \-- landline            | Store's landline number.                                                                                                                                                                                   |
| \-- latitude            | Latitude coordinate of the store.                                                                                                                                                                          |
| \-- longitude           | Longitude coordinates of the store.                                                                                                                                                                        |
| \-- address             | Physical address of the store.                                                                                                                                                                             |
| \-- cityId              | Unique ID for the city where the store is located.                                                                                                                                                         |
| \-- areaId              | Unique ID for the area where the store is located.                                                                                                                                                         |
| \-- customFields        | Array containing custom fields updated for the store.                                                                                                                                                      |
| \--- store_custom_field | Custom field value for the store.                                                                                                                                                                          |
| errors                  | List of errors related to the response (if any).                                                                                                                                                           |
| warnings                | List of warnings related to the response (if any).                                                                                                                                                         |
| totalCount              | Total number of successful records processed.                                                                                                                                                              |
| failureCount            | Total number of records that failed processing.                                                                                                                                                            |

```json Sample response with custom fields
{
    "response": [
        {
            "entityId": 50757475,
            "result": {
                "id": 50757475,
                "code": "MaiHàGiangCutomField",
                "description": "MaiHàGiangCutomField",
                "name": "MaiHàGiangCutomField",
                "type": "STORE",
                "adminType": "GENERAL",
                "isActive": true,
                "timeZoneId": -1,
                "currencyId": -1,
                "languageId": -1,
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
                "customFields": {
                    "store_custom_field": "store test"
                }
            },
            "errors": [],
            "warnings": []
        }
    ],
    "totalCount": 1,
    "failureCount": 0
}
```

# API-specific error codes

| Error code | Description                                                 |
| :--------- | :---------------------------------------------------------- |
| 1220       | Store code exists                                           |
| 1206       | Store name exists                                           |
| 1221       | External ID missing. A minimum of 1 external ID is required |