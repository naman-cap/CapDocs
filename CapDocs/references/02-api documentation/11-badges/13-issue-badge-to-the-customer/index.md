---
title: Issue badge (earn)
excerpt: ''
api:
  file: v1.json
  operationId: issue-badge-to-the-customer
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
This API allows you to issue badges to the customer (the customer earns the badge).

> 👍 Note
> 
> - For detailed information about our APIs and for hands-on testing, refer documentation in [API overview](https://docs.capillarytech.com/reference/apioverview) and  step-by-step guide on making your first API call in [Make your first API call](https://docs.capillarytech.com/reference/make-your-first-api-call).
> - A badge can be issued via MemberCare without any owners or claim.

# Prerequisites

-   Authentication: Basic or OAuth authentication 
-   Default access group 

# Resource information

|               |                                      |
| :------------ | :----------------------------------- |
| URI           | /api_gateway/v1/badges/customer/earn |
| HTTP method   | POST                                 |
| Pagination    | No                                   |
| Rate limit    | NA                                   |
| Batch support | NA                                   |

# API endpoint example

`https://eucrm.cc.capillarytech.com/api_gateway/v1/badges/customer/earn`

# Request body parameters

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
  <td style="border: 1px solid #ddd; padding: 8px;"><p>badgeMetaId</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>String</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Unique identifier (&quot;id&quot;) generated during the creation of the badge.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>customerId*</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Number</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Unique identifier for the customer.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>requestId*</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>String</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Enter a unique identifier to identify the request.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>earnEventDate</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Date</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>The date on which the customer performed the activity. Earn event date has to be between the badge start date and end date if it is a direct earn type of badge and it has to be between the badge issual start date and end date if it is an issue &amp; earn type of badge.<br>You can also enter a past date. This can be used to issue a badge against an older transaction.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>triggeredBy</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Object</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>The object containing information about what triggered the action.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>ownerType*</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Enum</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>The module for which the badge is being issued.<br>Supported values: Loyalty, Loyalty_Promotion, Referral_Campaigns, Journeys, Audience_Campaigns, Rewards_Catalog, Goodwill_Module, Milestones, Historical_Import</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>referenceId*</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>String</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Enter a unique identifier to identify the owner (ownerType). The referenceId passed here should be the same as the referenceId in the <a href="https://docs.capillarytech.com/reference/claim-badge">claim badge API</a>.</p>
</td>
</tr>
</tbody>
</table>
`}</HTMLBlock>

```json
{
    "badgeMetaId": "66276dc68fe258516a88ff8e",
   	"earnEventDate":"2023-11-03T21:51:00.192Z",
    "customerId": 62090013,
    "requestId": 2132,
    "triggeredBy": {
        "ownerType": "Loyalty",
        "referenceId": "123694"
    }
}
```

# Response parameters

| Parameter     | Data Type | Description                                                                                                            |
| ------------- | --------- | ---------------------------------------------------------------------------------------------------------------------- |
| badgeMetaId   | String    | Unique identifier for the badge metadata.                                                                              |
| customerId    | Number    | Unique identifier for the customer.                                                                                    |
| earnedBadgeId | String    | Unique identifier for the earned badge.                                                                                |
| expiresOn     | Number    | The time indicating when the badge expires. Timestamp in the ISO 8601 standard format format YYYY-MM-DDTHH:MM:SS.SSSZ. |
| requestId     | String    | A unique identifier to identify the request.                                                                           |
| issuedId      | String    | A Unique identifier representing the specific issuance instance of the badge.                                          |
| errors        | Array     | Array to list any errors.                                                                                              |
| warnings      | Array     | Array to list any warnings.                                                                                            |

```json 200 OK
{
    "data": {
        "badgeMetaId": "66da90348bdb494a4f06576f",
        "customerId": 11231,
        "earnedBadgeId": "66da90618bdb494a4f065774",
        "expiresOn": 1726809439.822462000,
        "requestId": "NaYAzxXfJhHvRm4l7KiD",
        "issuedId": "66da903a8bdb494a4f065770"
    },
    "errors": [],
    "warnings": []
}

```

# API-specific error codes

| Error code | Description                                    |
| :--------- | :--------------------------------------------- |
| 809        | Request with the same requestId is not allowed |
| 811        | Badge issue is mandatory before earn           |