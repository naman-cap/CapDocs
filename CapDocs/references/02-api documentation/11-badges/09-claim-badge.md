---
title: Claim badge
excerpt: ''
api:
  file: v1.json
  operationId: claim-badge
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
This API allows you to claim the badge using badge ID.

> 👍 Note
>
> For detailed information about our APIs and for hands-on testing, refer documentation in [API overview](https://docs.capillarytech.com/reference/apioverview) and step-by-step guide on making your first API call in [Make your first API call](https://docs.capillarytech.com/reference/make-your-first-api-call).

# Prerequisites

*   Authentication: Basic or OAuth authentication
*   Default access group

# Resource information

|               |                                                      |
| :------------ | :--------------------------------------------------- |
| URI           | /api\_gateway/v1/badges/badgeMeta`\{badgeId\}`/claim |
| HTTP method   | POST                                                 |
| Pagination    | NA                                                   |
| Rate limit    | NA                                                   |
| Batch support | NA                                                   |

# API endpoint example

`https://eucrm.cc.capillarytech.com/api_gateway/v1/badges/badgeMeta/653df084b3cda7078c7c68f1/claim`

# Request path parameters

| Parameter Name | Data Type | Description                                                                                       |
| :------------- | :-------- | :------------------------------------------------------------------------------------------------ |
| badgeID\*      | String    | Unique identifier ("id") generated during the creation of the badge. Ex: 653df084b3cda7078c7c68f1 |

# Request body parameters

<Table>
  <thead>
    <tr>
      <th>
        Parameter
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
        ownerType\*
      </td>

      <td>
        Enum
      </td>

      <td>
        The module for which the badge is being claimed.
        Supported values: Loyalty, Loyalty\_Promotion, Referral\_Campaigns, Journeys, Audience\_Campaigns, Rewards\_Catalog, Goodwill\_Module, Milestones, Historical\_Import
      </td>
    </tr>

    <tr>
      <td>
        referenceId\*
      </td>

      <td>
        String
      </td>

      <td>
        Enter a unique identifier to identify the badge owner (ownerType).
      </td>
    </tr>
  </tbody>
</Table>

```curl
https://eucrm.cc.capillarytech.com/api_gateway/v1/badges/badgeMeta/653df084b3cda7078c7c68f1/claim
```

# Response body

```json
{
    "ownerType": "Loyalty",
    "referenceId": "123"
}
```

# Response parameters

| Parameter   | Data Type | Description                                      |
| ----------- | --------- | ------------------------------------------------ |
| badgeMetaId | String    | Unique identifier for the badge metadata.        |
| ownerType   | String    | The module for which the badge is being claimed. |
| referenceId | String    | An identifier associated with the owner.         |
| errors      | String    | Contains details of any errors.                  |
| warnings    | Array     | Contains details of any warnings.                |

```json
{
    "data": {
        "badgeMetaId": "653df084b3cda7078c7c68f1",
        "ownerType": "Loyalty",
        "referenceId": "123"
    },
    "errors": null,
    "warnings": []
}
```

# API-specific error codes

| Error code | Description           |
| :--------- | :-------------------- |
| 717        | OwnerId is mandatory. |
| 400        | Invalid enum value.   |