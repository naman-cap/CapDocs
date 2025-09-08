---
title: Unclaim badge
excerpt: ''
api:
  file: v1.json
  operationId: unclaim-badge
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
This API allows you to unclaim a badge.  Using an unclaim API you can soft delete the active claim from the claims list.

For example:

A badge named Furry Friend Badge is owned by Loyalty and Milestones. Loyalty has successfully claimed the badge under program ID: 123, associating the badge claim with Loyalty as owner and reference ID: ABC. Using the unclaim badge API, you can remove Loyalty’s claim over the badge.

> 👍 Note
>
> For detailed information about our APIs and for hands-on testing, refer documentation in [API overview](https://docs.capillarytech.com/reference/apioverview) and step-by-step guide on making your first API call in [Make your first API call](https://docs.capillarytech.com/reference/make-your-first-api-call).

# Prerequisites

*   Authentication: Basic or OAuth authentication
*   Default access group

# Resource information

|                        |                                                       |
| :--------------------- | :---------------------------------------------------- |
| URI                    | api\_gateway/v1/badges/badgeMeta`\{badgeId\}`/unclaim |
| HTTP Method            | POST                                                  |
| Pagination             | No                                                    |
| Batch support          | No                                                    |
| Rate limit information | None                                                  |

# API endpoint example

`https://eucrm.cc.capillarytech.com/api_gateway/v1/badges/badgeMeta/65cc933e436d194c60ef7ba4/unclaim`

# Request path parameters

| Parameter Name | Data Type | Description             |
| :------------- | :-------- | :---------------------- |
| badgeId\*      | String    | Unique ID of the badge. |

# Request body parameters

| Parameter Name | Data Type | Description                                                                                                                                                                                               |
| -------------- | --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ownerType\*    | Enum      | Module where the badge was claimed. Supported values: Loyalty, Loyalty\_Promotion, Referral\_Campaigns, Journeys, Audience\_Campaigns, Rewards\_Catalog, Goodwill\_Module, Milestones, Historical\_Import |
| referenceId\*  | String    | Unique reference ID of the owner type.                                                                                                                                                                    |

```json
{
"ownerType":"Loyalty",
"referenceId":"string"
}
```

# Response parameters

<Table>
  <thead>
    <tr>
      <th>
        Parameter Name
      </th>

      <th>
        Data Type
      </th>

      <th>
        Description
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        ownerType
      </td>

      <td>
        Enum
      </td>

      <td>
        Module wheere the badge was claimed.
        Supported values: Loyalty program, Milestones, Campaigns, Journeys, Goodwill.
      </td>
    </tr>

    <tr>
      <td>
        referenceId
      </td>

      <td>
        String
      </td>

      <td>
        Unique reference ID of the owner type.
      </td>
    </tr>

    <tr>
      <td>
        isActive
      </td>

      <td>
        Boolean
      </td>

      <td>
        Indicates whether the badge is active.
      </td>
    </tr>
  </tbody>
</Table>

```json
{
    "data": {
        "ownerType": "Loyalty",
        "referenceId": "string",
        "isActive": false
    },
    "errors": null,
    "warnings": []
}
```

# API-specific error codes

| Error code | Description                        |
| :--------- | :--------------------------------- |
| 737        | Claim not found in existing claims |