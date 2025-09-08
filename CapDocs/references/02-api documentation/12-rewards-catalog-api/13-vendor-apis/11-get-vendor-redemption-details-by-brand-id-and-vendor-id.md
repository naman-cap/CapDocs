---
title: Vendor Redemption Details by Brand ID and Vendor ID
excerpt: ''
api:
  file: v1.json
  operationId: get-vendor-redemption-details-by-brand-id-and-vendor-id
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
This API endpoint retrieves the details of a specific vendor redemption associated with a specific vendor and brand ID.

## Endpoint

```
GET /api_gateway/rewards/core/v1/vendor/{vendorId}/redemption/brand/{brandId}
```

## Path Parameters

| Parameter Name | Data Type | Description                                                                    |
| -------------- | --------- | ------------------------------------------------------------------------------ |
| `vendorId`     | Long      | Unique identifier for the vendor whose redemption details are being requested. |
| `brandId`      | Long      | Unique identifier for the brand associated with the vendor redemption.         |

## Sample Request

```bash
curl --location 'https://eu.api.capillarytech.com/api_gateway/rewards/core/v1/vendor/133/redemption/brand/61?page=1&size=10&order=DESC&sortOn=LAST_UPDATED_ON' \
--header 'Authorization: Basic <Base64EncodedCredentials>'
```

## Response Parameters

| Parameter Name        | Data Type | Description                                                                                            |
| --------------------- | --------- | ------------------------------------------------------------------------------------------------------ |
| status                | Object    | Contains the status details of the vendor redemption.                                                  |
| success               | Boolean   | Indicates if the request was successful.                                                               |
| code                  | Integer   | Status code of the response.                                                                           |
| message               | String    | Message describing the status of the response.                                                         |
| redemptionList        | Array     | List of vendor redemptions.                                                                            |
| id                    | Long      | Unique ID of the vendor redemption.                                                                    |
| name                  | String    | Name of the vendor redemption.                                                                         |
| redemptionType        | String    | Type of redemption (e.g. MILES).                                                                       |
| enabled               | Boolean   | Indicates if the vendor redemption is enabled.                                                         |
| lastUpdatedOn         | Long      | Indicates the timestamp when the vendor redemption was updated. The timestamp is in Epoch time format. |
| lastUpdatedOnDateTime | String    | Indicates the date and time when the vendor redemption was updated, formatted in ISO 8601              |
| actionCount           | Integer   | Number of actions configured for this redemption setup.                                                |
| createdBy             | Long      | The unique identifier of the user who created the vendor redemption.                                   |
| lastUpdatedBy         | Long      | The unique identifier of the user who last updated the vendor redemption record.                       |
| createdOnDateTime     | String    | Indicates the date and time when the vendor redemption was created, formatted in ISO 8601.             |
| createdOn             | Long      | Indicates the timestamp when the vendor redemption was created. The timestamp is in Epoch time format. |

## Sample Response

```json
{
  "status": {
    "success": true,
    "code": 5011,
    "message": "Vendor redemption fetched successfully"
  },
  "redemptionList": [
    {
      "id": 27235,
      "name": "jotest",
      "redemptionType": "VOUCHER",
      "enabled": false,
      "lastUpdatedOn": 1748341052000,
      "lastUpdatedOnDateTime": "2025-05-27T10:17:32Z",
      "actionCount": 1,
      "createdBy": 75161973,
      "lastUpdatedBy": 75161973,
      "createdOn": 1747308132000,
      "createdOnDateTime": "2025-05-15T11:22:12Z"
    }
  ],
  "pagingDetails": {
    "last": true,
    "totalElements": 5,
    "totalPages": 1,
    "numberOfElements": 5,
    "first": true,
    "size": 10,
    "number": 1
  }
}
```

## Response Codes

| Code | Message                                | Description                                          |
| ---- | -------------------------------------- | ---------------------------------------------------- |
| 5011 | Vendor redemption fetched successfully | Redemption configurations were retrieved.            |
| 400  | Bad Request                            | Request is malformed or missing required parameters. |
| 401  | Unauthorized                           | Invalid or missing authentication credentials.       |
| 404  | Not Found                              | Vendor or brand not found.                           |
| 500  | Internal Server Error                  | An error occurred on the server.                     |

***