---
title: Store Locator Custom Fields
api:
  file: Store Locator Custom Fields.yaml
  operationId: postIntegrationv1brand7BbrandId7Dstorelocatorcustomfieldsmap
hidden: false
---
This endpoint allows you to map Intouch custom fields to your store-locator custom fields for a given brand.

# Prerequisites

*   Authentication: Basic or OAuth credentials
*   Default access group

# Resource information

|                        |                                                                  |
| :--------------------- | :--------------------------------------------------------------- |
| URI                    | /integration/v1/brand/\[brandID]/store-locator/custom-fields/map |
| HTTP Method            | POST                                                             |
| Pagination             | No                                                               |
| Batch support          | No                                                               |
| Rate limit information | Not specified                                                    |

## Endpoint

`POST https://sol-qa.capillarytech.com/integration/v1/brand/{brandId}/store-locator/custom-fields/map`

### Path Parameters

| Name      | Type   | Description                    |
| --------- | ------ | ------------------------------ |
| `brandId` | string | Unique identifier of the brand |

### Request Headers

| Header         | Value              |
| -------------- | ------------------ |
| `Content-Type` | `application/json` |

### Request Body parameters

| Field                | Type             | Description                                                      |
| -------------------- | ---------------- | ---------------------------------------------------------------- |
| `mapping`            | array of objects | List of field-to-field mappings                                  |
| `intouchCustomField` | string           | Name of the custom field in Intouch                              |
| `mappedCustomField`  | string           | Name of the corresponding custom field in your store-locator API |

### Request body sample

```curl
curl -i -X POST \
  -H "Content-Type:application/json" \
  -d '{
    "mapping": [
      {
        "intouchCustomField": "area",
        "mappedCustomField": "region"
      }
    ]
  }' \
  '[https://sol-qa.capillarytech.com/integration/v1/brand/](https://sol-qa.capillarytech.com/integration/v1/brand/){brandId}/store-locator/custom-fields/map'
```