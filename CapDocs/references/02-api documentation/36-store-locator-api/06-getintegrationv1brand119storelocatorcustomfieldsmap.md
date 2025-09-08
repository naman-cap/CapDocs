---
title: Retrieve Mapped Custom Field
api:
  file: Retrieve Mapped Custom Field.yaml
  operationId: getIntegrationv1brand119storelocatorcustomfieldsmap
hidden: false
---
This endpoint retrieves the custom field mappings for a given brand.

# Prerequisites

*   Authentication: Basic or OAuth credentials
*   Default access group

# Resource information

|                        |                                                                  |
| :--------------------- | :--------------------------------------------------------------- |
| URI                    | /integration/v1/brand/\[brandId]/store-locator/custom-fields/map |
| HTTP Method            | GET                                                              |
| Pagination             | No                                                               |
| Batch support          | No                                                               |
| Rate limit information | Not specified                                                    |

## Endpoint

`GET https://sol-qa.capillarytech.com/integration/v1/brand/{brandId}/store-locator/custom-fields/map`

### Path Parameters

| Name      | Type   | Description                    |
| :-------- | :----- | :----------------------------- |
| `brandId` | string | Unique identifier of the brand |

### Request Headers

| Header         | Value              |
| :------------- | :----------------- |
| `Content-Type` | `application/json` |

### Request body sample

```curl
curl -i -X GET \
  -H "Content-Type:application/json" \
  "[https://sol-qa.capillarytech.com/integration/v1/brand/119/store-locator/custom-fields/map](https://sol-qa.capillarytech.com/integration/v1/brand/119/store-locator/custom-fields/map)"
```