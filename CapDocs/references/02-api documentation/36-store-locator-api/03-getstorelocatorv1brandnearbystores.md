---
title: Locate nearby stores
excerpt: >-
  This endpoint retrieves a paginated list of stores near a given location, with
  optional filters for site status and actual distance calculation.
api:
  file: store Locator api.yaml
  operationId: getStorelocatorv1brandnearbystores
hidden: false
---
# Prerequisites

*   Authentication: Bearer JWT (`cap_authorization`)
*   Headers: `cap_device_id`, `cap_brand`, `cap_mobile`

# Resource information

|                        |                                      |
| :--------------------- | :----------------------------------- |
| URI                    | /store-locator/v1/brand/nearbystores |
| HTTP Method            | GET                                  |
| Pagination             | Yes                                  |
| Batch support          | No                                   |
| Rate limit information | Not specified                        |

## Endpoint

`GET https://crm-nightly-new.cc.capillarytech.com/store-locator/v1/brand/nearbystores`

### Request Headers

| Header              | Description                             |
| ------------------- | --------------------------------------- |
| `Content-Type`      | Must be `application/json`              |
| `cap_authorization` | Bearer JWT token for authentication     |
| `cap_device_id`     | Unique identifier for the device        |
| `cap_brand`         | Brand identifier                        |
| `cap_mobile`        | Mobile identifier of the user or device |

### Request query parameters

| Name             | Type    | Description                                            |
| ---------------- | ------- | ------------------------------------------------------ |
| `page`           | integer | Zero-based page index to retrieve (default 0)          |
| `size`           | integer | Number of items per page (default 10)                  |
| `actualDistance` | boolean | If true, calculates and returns the actual distances   |
| `site_status`    | string  | Filter by store status (e.g., Active, Inactive)        |
| `latitude`       | number  | Latitude of the reference location (e.g., 10.817141)   |
| `longitude`      | number  | Longitude of the reference location (e.g., 106.707954) |
| `distance`       | integer | Maximum distance in meters to search (e.g., 500000)    |

### Request Body

```curl
curl -i -X GET \
  -H "cap_authorization: eyJpZHYiOlsiTU9CSUxFfDk1OTEzOTkyNDQiXSwiZGV2IjoiMTIzIiwib3JnIjoiS1JJU0hOQVNNQUxMIiwiYWxnIjoiSFMyNTYifQ.eyJpc3MiOiJDQVBJTElhUlkgVEVDSE5PTE9HSUVTIiwib2djIjpbIjUwNTgzfGtyaXNobmEudGlsbDAxIl0sImV4cCI6MTY2NDI2NjQ2OSwiaWF0IjoxNjY0MjYyODY5LCJyb2wiOiJWSUVXIn0.6ZFThZOZ6jQZ4JT-sG3DkiCBfiIxR07kjjqOYr-BJHQ" \
  -H "cap_device_id: deviceId" \
  -H "cap_brand: brand" \
  -H "cap_mobile: identifierValue" \
  -H "Content-Type: application/json" \
  "[https://crm-nightly-new.cc.capillarytech.com/store-locator/v1/brand/nearbystores?page=0&actualDistance=true&site_status=Active&latitude=10.817141&longitude=106.707954&distance=500000&size=10](https://crm-nightly-new.cc.capillarytech.com/store-locator/v1/brand/nearbystores?page=0&actualDistance=true&site_status=Active&latitude=10.817141&longitude=106.707954&distance=500000&size=10)"
```