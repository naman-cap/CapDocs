---
title: Vendor Redemption Details by Redemption & Vendor ID
excerpt: ''
api:
  file: v1.json
  operationId: get-list-of-vendor-redemption-details-by-vendor-id
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
This API endpoint retrieves the details of a specific vendor redemption associated with a specific vendor and redemption ID. It allows brands to access information about the redemption status and related details.

# Prerequisites

-   Authentication: Basic or OAuth authentication
-   Default access group

# API Specification

|                        |                                                                                          |
| :--------------------- | :--------------------------------------------------------------------------------------- |
| URI                    | /api_gateway/rewards/core/v1/vendor/`{vendorid}`/redemption/`{redemptionid}`/brand/`{brandid}` |
| HTTP Method            | GET                                                                                      |
| Pagination             | Yes                                                                                      |
| Batch support          | No                                                                                       |
| Rate limit information | None                                                                                     |

## API endpoint

```
http://{host}/api_gateway/rewards/core/v1/vendor/{vendorid}/redemption/{redemptionid}/brand/{brandid}
```

## Path Parameters

| Parameter    | Type | Description                                                        |
| ------------ | ---- | ------------------------------------------------------------------ |
| vendorId     | Long | The unique identifier of the vendor.                               |
| redemptionId | Long | The unique identifier of the redemption.                           |
| brandId      | Long | The unique identifier of the brand associated with the redemption. |

## Request Query Parameters

| Parameter Name | Data Type | Description                                                                       |
| -------------- | --------- | --------------------------------------------------------------------------------- |
| size           | Integer   | Specifies the number of results to return per page. Used for pagination.          |
| page           | Integer   | Indicates the page number to retrieve. Used with `size` to paginate results.      |
| orderby        | String    | Sort order of the results. Supported values: `ASC`, `DESC`. Default is ascending. |
| sortOn         | Enum      | Field to sort results by. Supported value: `LAST_UPDATED_ON`.                     |

<br />

```bash Sample Curl
curl --location 'http://eu.api.capillarytech.com/api_gateway/rewards/core/v1/vendor/133/redemption/27570/brand/61' \
--header 'Authorization: Basic Z2VvcmdlLmpvaG5zb246OTg4OTU2NWI4ODVhMmY4ZWE1MTk1MjA2NWEwYTEzNzg=' \
--header 'Cookie: _cfuvid=UltnS7qhT6yBRdUKLfbrb797jULJRoy5vzEiNF2Lz6w-1748339721401-0.0.1.1-604800000' \
--data ''

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