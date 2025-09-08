---
title: Retro transaction - Claim transaction
excerpt: ''
api:
  file: v2.json
  operationId: retro-transaction-claim-transaction
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
> For detailed information about our APIs and for hands-on testing, refer documentation in [API overview](https://docs.capillarytech.com/reference/apioverview) and  step-by-step guide on making your first API call in [Make your first API call](https://docs.capillarytech.com/reference/make-your-first-api-call) .

# Overview

The Retro Transaction Request API enables the retrospective tagging of non-tagged transactions to existing members in the system. This endpoint allows the addition of retro transactions, converting untagged 'NOT\_INTERESTED' transactions to 'REGULAR' transactions and assigning them to existing customers. This is particularly useful for cases where transactions were initially not linked to any member and need to be tagged to an existing customer now. For more information on retro transactions, refer to the documentation [here](https://docs.capillarytech.com/docs/tag-not-interested-transactions).

# Configuring standard workflow

You can configure the standard workflow and configure the below actions.

## Auto approval

You can set the `Auto-approval flag : On/Off` to `On` to enable auto approval for the retro transaction requests.

When the Auto-approval flag is enabled,

* Requests move directly from the "Pending" status to "Approved" status without requiring manual intervention.
* The approved requests are executed without the need for manual approval.

If the Auto-approval flag is disabled:

* Requests remain in the "Pending" status until they are manually approved.
* In a single-approval workflow, a request is initially created in the pending state by a Maker.
* A Checker is responsible for reviewing and approving or rejecting the request.
* Once approved, the request transitions to the Approved status, triggering the execution of the transaction claims API call.
* If the execution is successful, the request is marked as "Success". Otherwise, it is marked as "Failure" along with an appropriate error reason stored alongside the request.

\*\*Note: \*\*If the request is initiated using Connect-plus or via External services, the request validation bypasses the maker access validation and moves the request to the Approved state.

# API endpoint example

`<https://eucrm.cc.capillarytech.com/api_gateway/v2/request-workflow/RETRO-TRANSACTION>`

# Prerequisites

*   Authentication: Basic or OAuth authentication
*   Default access group
*   Maker request access (CanMakeRequest). Contact admin for access.
*   The transaction must not exceed the TXN\_MAX\_ALLOWED\_AGE\_DAYS parameter set by the brand. "TXN\_MAX\_ALLOWED\_AGE\_DAYS" refers to the maximum allowed age of a transaction in terms of days.
*   The customer being tagged to the transaction should have registered RETRO\_DELAY\_SINCE\_REGISTRATION\_HOURS hours before the current time. "RETRO\_DELAY\_SINCE\_REGISTRATION\_HOURS" represents the delay in hours since a customer's registration before they can be associated with a retro transaction. It indicates the minimum amount of time that must pass after a customer registers before they can be retroactively linked to a transaction. For instance, if you set this value to 3 hours and a customer registers at 9:00 AM, they will be able to change their not-interested to transactions with billing times later than 6:00 AM but not before 5:59 AM.

# Resource information

|                        |                                                     |
| :--------------------- | :-------------------------------------------------- |
| URI                    | /api\_gateway/v2/request-workflow/RETRO-TRANSACTION |
| HTTP Method            | POST                                                |
| Pagination             | No                                                  |
| Batch support          | No                                                  |
| Rate limit information | None                                                |

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
  <th style="border: 1px solid #ddd; padding: 8px;">Parameter<br>(Parameters marked with * are mandatory)</th>
  <th style="border: 1px solid #ddd; padding: 8px;">Type</th>
  <th style="border: 1px solid #ddd; padding: 8px;">Description</th>
</tr>
</thead>
<tbody>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>tillId*</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>string</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>The unique identifier for the till associated with the transaction.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>storeId*</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>string</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>The unique identifier for the store where the transaction occurs.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>zoneId*</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>string</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>The unique identifier for the zone or area the store is associated with.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>conceptId*</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>string</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>The unique identifier for the concept or branding associated with the store.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>hostname</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>string</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>The hostname of the API endpoint. Example: <a href="https://eucrm.cc.capillarytech.com">https://eucrm.cc.capillarytech.com</a></p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>path</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>string</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>The path of the API endpoint. In this context, the endpoint is <code>/v2/transactions/retro</code>.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>method</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>string</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>PUT. The HTTP method used for the request.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>oldType</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>string</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>The old type of the transaction. In this context, the old type is <code>NOT_INTERESTED</code></p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>newType</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>string</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>The new type of the transaction to be updated. In this context, the new type is<code>REGULAR</code>.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>transactionId</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>integer</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>The ID of the transaction to be updated.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>customerId</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>integer</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>The ID of the customer to whom the not interested transaction is being attached.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>extendedFields</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>object</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Extended field info associated with the transaction, if any.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>customFields</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>object</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Custom fields associated with the transaction, if any.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>notes</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>string</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Additional notes or comments about the transaction.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Authorization</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>string</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Authentication credentials needed to access the Intouch API. It could be in the form of a username and password or an API key.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>content-type</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>string</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>The content type header for the request.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>X-CAP-CLIENT-SIGNATURE</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>string</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Enter the source&#39;s name to recognize which source has made the retro request, It is recommended to use a single name for a source so that it would be easy to track the retro transaction request of each source.</p>
</td>
</tr>
</tbody>
</table>
`}</HTMLBlock>

```json Request body
{
    "entityInfo": {
        "tillId": "50682289",
        "storeId": "50682288",
        "zoneId": "50682286",
        "conceptId": "50678331"
    },
    "payload": {
        "IntouchAPITask-Payload": {
            "hostname": "https://eu.api.capillarytech.com",
            "path": "/v2/transactions/retro",
            "method": "PUT",
            "pathParams": {},
            "queryParams": {},
            "body": {
                "oldType": "NOT_INTERESTED",
                "newType": "REGULAR",
                "transactionId": 7648261,
                "customerId": 382553857,
                "extendedFields": {
                    "checkout_date": "2021-12-27T18:38:43+08:00"
                },
                "customFields": {
                    "pankaj3": "singh3"
                },
                "notes": "Test Transaction"
            },
            "headers": {
                "Authorization": "Basic Y20uMjoyMDJjYjk2MmFjNTkwNzViOTY0YjA3MTUyZDIzNGI3MA==",
                "content-type": "application/json",
                "X-CAP-CLIENT-SIGNATURE": "pankaj"
            }
        }
    }
}
```

# Response parameters

| Parameter Name              | Data Type     | Description                                                                                                                                      |
| --------------------------- | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| requestId                   | String        | Unique identifier for the request.                                                                                                               |
| userId                      | Integer       | Identifier for the user making the request.                                                                                                      |
| userName                    | String        | Email or username of the user making the request.                                                                                                |
| requestType                 | String        | Type of request being made                                                                                                                       |
| state                       | String        | Current state of the request (e.g., "AdminTask").                                                                                                |
| startTime                   | DateTime      | Timestamp marking the start of the request.                                                                                                      |
| endTime                     | DateTime/Null | Timestamp marking the end of the request, if applicable.                                                                                         |
| IntouchAPITask-Payload      | Object        | Object containing specifics of the API call to change customer status.                                                                           |
|   hostname                  | String        | The base URL of the API endpoint.                                                                                                                |
|   path                      | String        | Specific path to the API endpoint for changing customer status.                                                                                  |
|   method                    | String        | HTTP method used for the request.                                                                                                                |
|   pathParams                | Object        | Path parameters for the API call, if any (empty in this case).                                                                                   |
|   queryParams               | Object        | Query parameters for the API call, detailing aspects like source and identifier.                                                                 |
|   body                      | Object        | Body of the API call, containing the old type, new type, transaction ID, customer ID (transaction owner), extended and custom field information. |
|   headers                   | Object        | Headers for the API call, including Authorization and Content-Type.                                                                              |
| ValidateMakerAccess\_Output | Boolean       | Indicates whether maker access validation was successful.                                                                                        |
| ValidatePayload\_Output     | Boolean       | Indicates whether payload validation was successful.                                                                                             |

```json 200 OK
{
    "data": {
        "requestId": "23e06c3e-a5c3-11ee-9a63-9ab214749657",
        "userId": 232134,
        "userName": "tomswayer@tipent.com",
        "requestType": "retro-transaction",
        "state": "AdminTask",
        "startTime": "2023-12-29T02:23:23",
        "endTime": null,
        "details": {
            "IntouchAPITask-Payload": {
            "hostname": "https://crm-nightly-new.cc.capillarytech.com",
            "path": "/v2/transactions/retro",
            "method": "PUT",
            "pathParams": {},
            "queryParams": {},
            "body": {
                "oldType": "NOT_INTERESTED",
                "newType": "REGULAR",
                "transactionId": 7648261,
                "customerId": 382553857,
                "extendedFields": {
                    "checkout_date": "2021-12-27T18:38:43+08:00"
                },
                "customFields": {
                    "pankaj3": "singh3"
                },
                "notes": "Test Transaction"
            },
            "headers": {
                "Authorization": "Basic Y20uMjoyMDJjYjk2MmFjNTkwNzViOTY0YjA3MTUyZDIzNGI3MA==",
                "content-type": "application/json",
                "X-CAP-CLIENT-SIGNATURE": "pankaj"
            }
            },
            "ValidateMakerAccess_Output": true,
            "ValidatePayload_Output": true
        }
    }
}       

```