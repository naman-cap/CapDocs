---
title: Enrol customers for badges
excerpt: ''
api:
  file: v2.json
  operationId: issue-badge-enrol-customers-for-badges
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
This API endpoint allows for the initiation of enrolling customers for badges.

<br />

> 👍 Note
>
> For detailed information about our APIs and for hands-on testing, refer documentation in [API overview](https://docs.capillarytech.com/reference/apioverview) and  step-by-step guide on making your first API call in [Make your first API call](https://docs.capillarytech.com/reference/make-your-first-api-call) .

# API endpoint example

`[<https://eucrm.cc.capillarytech.com/api_gateway/v2/request-workflow/ISSUE-BADGE>`

# Prerequisites

*   Authentication: Basic or OAuth authentication
*   Default access group
*   Maker request access (CanMakeRequest). Contact admin for access.

# Resource information

|                        |                                               |
| :--------------------- | :-------------------------------------------- |
| URI                    | /api\_gateway/v2/request-workflow/ISSUE-BADGE |
| HTTP Method            | POST                                          |
| Pagination             | No                                            |
| Batch support          | No                                            |
| Rate limit information | None                                          |

# Header information

|                       |                                                                                                                            |
| :-------------------- | :------------------------------------------------------------------------------------------------------------------------- |
| X-CAP-API-AUTH-ORG-ID | Organization ID                                                                                                            |
| X-CAP-UI-AUTH-TOKEN   | A JSON Web Token (JWT) is used for intouch user authentication.  CanMakeRequest access is required to generate this token. |

# Request body parameters

<br />

<HTMLBlock>{`
<table style="width: 100%; border-collapse: collapse;">
<thead>
<tr>
  <th style="border: 1px solid #ddd; padding: 8px;">Parameter (Parameters marked * are mandatory)</th>
  <th style="border: 1px solid #ddd; padding: 8px;">Type</th>
  <th style="border: 1px solid #ddd; padding: 8px;">Description</th>
</tr>
</thead>
<tbody>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>entityInfo*</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Object</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Information about the entity (till, store, zone, concept)</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>- tillId*</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>String</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>The unique identifier for the till associated with the transaction.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>- storeId*</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>String</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>The unique identifier for the store where the transaction occurs.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>- zoneId*</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>String</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>The unique identifier for the zone or area the store is associated with.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>- conceptId*</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>String</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>The unique identifier for the concept or branding associated with the store.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>payload</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Object</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>The Intouch payload for the Issue Badge Workflow is a structured set of data that facilitates the enrolling of the customers for badges. This payload contains specific information required to execute this operation.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>- IntouchAPITask-Payload</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Object</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Information about the Intouch API task</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>- hostname*</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>String</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Hostname for the API endpoint. Example - <code>&lt;https://eucrm-new.cc.capillarytech.com&gt;</code></p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>- path*</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>String</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p><code>/api_gateway/v1/badges/badgeMeta/customer/issueBulk</code>. The path denotes the endpoint within the API that manages to enrol customers for badge. </p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>- method*</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>String</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>POST. The HTTP method used for the request</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>\pathParams</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Object</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>This field is reserved for any dynamic parameters that may be included in the API endpoint URL.  <strong>Note:</strong> In this workflow, pathParams may not be utilized, as the necessary information is typically provided in the request body.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>\queryParams*</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Object</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Additional parameters that can be appended to the API request URL for further customization. *Note:** In this workflow, query parameters may not be utilized, as the necessary information is typically provided in the request body.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>\body*</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Object</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>The body of the request containing payload data.  For more information on the body parameters, refer to the <a href="https://docs.capillarytech.com/reference/enroll-customers-in-badges">Enrol badge API documentation</a> .</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>-ownerType</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Enum</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>The module for which the badge is being issued.<br>Supported values: LOYALTY/REFERRAL_CAMPAIGNS/JOURNEYS/AUDIENCE_CAMPAIGNS/<br>REWARDS_CATALOG/ GOODWILL_MODULE/ MILESTONES.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>-referenceId</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>String</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Enter a unique identifier to identify the owner (ownerType).</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>-customers</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Number</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Array of customer identifiers associated with the badge</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>-requestId</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Number</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Enter a unique identifier to identify the request.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>-badgeMetaId</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>String</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Unique identifier (&quot;id&quot;) generated during the creation of the badge.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>source*</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>String</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Specifies the source of goodwill point allocation eg “API”.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>\headers*</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Object</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Headers provide additional context and information about the request.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>- Authorization</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>String</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Contains the authentication credentials needed to access the Intouch API.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>- content-type</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>String</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>The content type of the request (application/JSON in this case). This field specifies that the payload is in JSON format, ensuring that the data is properly interpreted by the API.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>-X-CAP-API-AUTH-ORG-ID</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Number</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Organisation ID</p>
</td>
</tr>
</tbody>
</table>
`}</HTMLBlock>

```json Issue badge
{
  "entityInfo": {
    "tillId" : "50682289",
    "storeId": "50682288",
    "zoneId": "50682286",
    "conceptId": "50678331"
  },
  "payload":{
    "IntouchAPITask-Payload" : {
      "hostname" : "https://crm-nightly-new.cc.capillarytech.com",
      "path": "/api_gateway/v1/badges/badgeMeta/customer/issueBulk",
      "method": "POST",
      "pathParams" : {
      },
      "body":{
        "triggeredBy": {
          "ownerType": "Goodwill_Module",
          "referenceId": "134"
        },
        "customers": 113460811,
        "requestId": "e7requestd62c5ec5d115a2859228cefd9ee8cgh",
        "badgeMetaId": "658de01c823d1b70aabcfaae"
      },
      "headers":{
        "Authorization": "Basic YWIxMjQ6MjVkNTVhZDI4M2FhNDAwYWY0NjRjNzZkNzEzYzA3YWQ=",
        "content-type": "application/json"
      }
    }
  }
}
```

# Response parameters

| Parameter Name              | Data Type     | Description                                                                          |
| --------------------------- | ------------- | ------------------------------------------------------------------------------------ |
| requestId                   | String        | Unique identifier for the request.                                                   |
| userId                      | Integer       | Identifier for the user making the request.                                          |
| userName                    | String        | Email or username of the user making the request.                                    |
| requestType                 | String        | Type of request being made (e.g., "customer-status-change").                         |
| state                       | String        | Current state of the request (e.g., "AdminTask").                                    |
| startTime                   | DateTime      | Timestamp marking the start of the request.                                          |
| endTime                     | DateTime/Null | Timestamp marking the end of the request, if applicable.                             |
| IntouchAPITask-Payload      | Object        | Object containing specifics of the API call to change customer status.               |
|   hostname                  | String        | The base URL of the API endpoint.                                                    |
|   path                      | String        | Specific path to the API endpoint for changing customer status.                      |
|   method                    | String        | HTTP method used for the request.                                                    |
|   pathParams                | Object        | Path parameters for the API call, if any (empty in this case).                       |
|   queryParams               | Object        | Query parameters for the API call, detailing aspects like source and identifier.     |
|   body                      | Object        | Body of the API call, containing the reason for the status change and the new label. |
|   headers                   | Object        | Headers for the API call, including Authorization and Content-Type.                  |
| ValidateMakerAccess\_Output | Boolean       | Indicates whether maker access validation was successful.                            |
| ValidatePayload\_Output     | Boolean       | Indicates whether payload validation was successful.                                 |

```json 200 OK
{
    "data": {
        "requestId": "23e06c3e-a5c3-11ee-9a63-9ab214749657",
        "userId": 232134,
        "userName": "tomswayer@tipent.com",
        "requestType": "issue-badge",
        "state": "AdminTask",
        "startTime": "2023-12-29T02:23:23",
        "endTime": null,
        "details": {
            "IntouchAPITask-Payload": {
                "hostname": "https://eu.api.capillarytech.com",
                "path": "/api_gateway/v1/badges/badgeMeta/customer/issueBulk",
                "method": "POST",
                "pathParams": {},
                "body": {
                    "triggeredBy": {
                        "ownerType": "Goodwill_Module",
                        "referenceId": "134"
                    },
                    "customers": [
                        113460811
                    ],
                    "requestId": "e7requestd62c5ec5d115a2859228cefd9ee8cgh",
                    "badgeMetaId": "658de01c823d1b70aabcfaae"
                },
                "headers": {
                    "Authorization": "Basic YWIxMjQ6MjVkNTVhZDI4M2FhNDAwYWY0NjRjNzZkNzEzYzA3YWQ=",
                    "content-type": "application/json"
                }
            },
            "ValidateMakerAccess_Output": true,
            "ValidatePayload_Output": true
        }
    }
}       

```