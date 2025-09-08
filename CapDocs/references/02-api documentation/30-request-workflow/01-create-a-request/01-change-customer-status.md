---
title: Change customer status request
excerpt: ''
api:
  file: v2.json
  operationId: change-customer-status
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
> 👍 Note
>
> * For detailed information about our APIs and for hands-on testing, refer documentation in [API overview](https://docs.capillarytech.com/reference/apioverview) and  step-by-step guide on making your first API call in [Make your first API call](https://docs.capillarytech.com/reference/make-your-first-api-call) .

This API allows you to initiate a request to change the customer status of a customer.

# API endpoint example

`[https://eucrm.cc.capillarytech.com/api_gateway/v2/request-workflow/CUSTOMER-STATUS-CHANGE`

# Prerequisites

*   Authentication: Basic or OAuth authentication
*   Default access group
*   Maker request access (CanMakeRequest). Contact the access team for access.

# Resource information

|                        |                                                   |
| :--------------------- | :------------------------------------------------ |
| URI                    | /api\_gateway/v2/request-workflow/`{requestType}` |
| HTTP Method            | POST                                              |
| Pagination             | No                                                |
| Batch support          | No                                                |
| Rate limit information | None                                              |

<br />

# Header information

|                       |                                                                                                                            |
| :-------------------- | :------------------------------------------------------------------------------------------------------------------------- |
| X-CAP-API-AUTH-ORG-ID | Organization ID                                                                                                            |
| X-CAP-UI-AUTH-TOKEN   | A JSON Web Token (JWT) is used for intouch user authentication.  CanMakeRequest access is required to generate this token. |

# Request body parameters

The request body contains essential entity information, including store, zone, and concept identifiers, along with a payload for the Intouch API task.

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
  <td style="border: 1px solid #ddd; padding: 8px;"><p>The Intouch payload for the Customer Status Change Workflow is a structured data set that facilitates changing a customer&#39;s status within the Intouch system. This payload contains specific information required to execute this operation.</p>
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
  <td style="border: 1px solid #ddd; padding: 8px;"><p><code>/v2/customers/lookup/status</code>. This is the API that manages customer status changes.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>- method*</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>String</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>PUT. The HTTP method used for the request</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>\pathParams</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Object</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Parameters to be included in the endpoint path. See <a href="https://docs.capillarytech.com/reference/update-customer-status">Update customer status API</a>  for information on the path parameters.  <strong>Note:</strong> In this workflow, pathParams may not be utilized, as the necessary information is typically provided in the request body.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>\queryParams*</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Object</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Parameters to be included in the query string. See <a href="https://docs.capillarytech.com/reference/update-customer-status">Update customer status API</a>   for information on the path parameters.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>- source</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>String</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>The source of the request (e.g., INSTORE)</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>- accountId</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>String</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>The account ID (empty in this case)</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>- use_async</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>String</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Indicates whether the request should be processed asynchronously. When a request is processed asynchronously, the program doesn&#39;t wait for the response before continuing to execute other tasks. Instead, it proceeds with its operations while the request is being processed in the background.<br>In this specific case, setting &quot;use_async&quot; to &quot;false&quot; means that the request should be processed synchronously, meaning that the program will wait for the response before moving on to other tasks.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>- identifierName</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>String</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>The type of the identifier. Supported values: mobile, email, externalId, cardnumber, cardExternalId, wechat, fbid, and martjackId.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>- identifierValue</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>String</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>The value of the identifier (e.g., 919780375691 for mobile)</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>\body*</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Object</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>The body section contains the essential data for the status change operation</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>- reason</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>String</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>This field indicates the reason for the status change. It may include information such as why the status is being updated (e.g., for testing purposes)</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>- label</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>String</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>The label indicates the new status that is to be assigned to the customer. For example, &quot;Suspended&quot; or &quot;Active&quot;.</p>
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
</tbody>
</table>
`}</HTMLBlock>

```json Request body
{
    "entityInfo": {
        "tillId" : "50682289",
        "storeId": "50682288",
        "zoneId": "50682286",
        "conceptId": "50678331"
    },
    "payload": {
        "IntouchAPITask-Payload": {
            "hostname": "<https://eu.api.capillarytech.com>",
            "path": "/v2/customers/lookup/status",
            "method": "POST",
            "pathParams": {},
            "queryParams": {
                "source": "INSTORE",
                "accountId": "",
                "use_async": "false",
                "identifierName": "mobile",
                "identifierValue": "919780375690"
            },
            "body": {
                "reason": "testing",
                "label": "Suspended"
            },
            "headers": {
                "Authorization": "Basic cHVuLjAxOjIwMmNiOTYyYWM1OTA3NWI5NjRiMDcxNTJkMjM0Yjcw",
                "content-type": "application/json"
            }
        }
    }
}

```

<br />

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

<br />

```json 200 OK
{
    "data": {
        "requestId": "113cff87-62a5-11ee-aa6d-0aaee4e533d2",
        "userId": 232134,
        "userName": "tomswayer@tipent.com",
        "requestType": "customer-status-change",
        "state": "AdminTask",
        "startTime": "2023-10-04T16:29:19",
        "endTime": null,
        "details": {
            "IntouchAPITask-Payload": {
                "hostname": "<https://crm-nightly-new.cc.capillarytech.com>",
                "path": "/v2/customers/lookup/status",
                "method": "PUT",
                "pathParams": {},
                "queryParams": {
                    "source": "INSTORE",
                    "accountId": "",
                    "use_async": "false",
                    "identifierName": "mobile",
                    "identifierValue": "919780375690"
                },
                "body": {
                    "reason": "testing",
                    "label": "Suspended"
                },
                "headers": {
                    "Authorization": "Basic cHVuLjAxOjIwMmNiOTYyYWM1OTA3NWI5NjRiMDcxNTJkMjM0Yjcw",
                    "content-type": "application/json"
                }
            },
            "ValidateMakerAccess_Output": true,
            "ValidatePayload_Output": true
        }
    }
}

```