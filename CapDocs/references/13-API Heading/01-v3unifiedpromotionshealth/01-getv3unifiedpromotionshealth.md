---
title: GET Status of Unified Promotions API
excerpt: |+

api:
  file: check promo api health.yaml
  operationId: getV3unifiedPromotionshealth
hidden: true
---
This API allows you to check the health and status of the Unified Promotions API to ensure it is operational.

> 👍 Notes
>
> * For detailed information about our APIs and for hands-on testing, refer to the documentation on [API Overview](https://docs.capillarytech.com/reference/apioverview) and a step-by-step guide in [Make Your First API Call](https://docs.capillarytech.com/reference/make-your-first-api-call).

# Example request

```json
curl -L 'https://eu.api.capillarytech.com/v3/unifiedPromotions/health' \
-H 'Authorization: Basic ********'
```

# Prerequisites

Make sure you have the right authentication and appropriate access control configured.

* **Access group resource:** Write access to the points group resource. For more information on access control, see the [access group documentation](https://docs.capillarytech.com/docs/access-group).
* **Authentication:** Basic authentication details. For more information on authentication, see the [Authentication documentation](https://docs.capillarytech.com/docs/api-client).

# Resource information

|                    |    |
| ------------------ | -- |
| Pagination support | No |
| Rate limit         | NA |
| Batch support      | No |

# Example response

```json
{
    "data": "Unified Promotion API is up and running",
    "errors": null,
    "warnings": null
}
```

# Response parameters

| Field   | Type   | Description                                    |
| ------- | ------ | ---------------------------------------------- |
| data    | string | Message containing the status of the API       |
| warning | array  | Object containing details of warnings, if any. |
| errors  | array  | Object containing details of errors, if any.   |

<br />