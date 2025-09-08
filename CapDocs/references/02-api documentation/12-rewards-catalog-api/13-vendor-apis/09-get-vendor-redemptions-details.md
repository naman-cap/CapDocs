---
title: Get all vendor redemptions
excerpt: ''
api:
  file: v1.json
  operationId: get-vendor-redemptions-details
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
This API is used to retrieve Vendor Redemption details. You can specify either a particular vendor or a reward type to filter the redemption details

> 👍 Note
>
> For detailed information about our APIs and for hands-on testing, refer documentation in [API overview](https://docs.capillarytech.com/reference/apioverview) and  step-by-step guide on making your first API call in [Make your first API call](https://docs.capillarytech.com/reference/make-your-first-api-call) .

# Prerequisites

*   Authentication: Basic or OAuth authentication
*   Default access group

# API Specification

|                        |                                                  |
| :--------------------- | :----------------------------------------------- |
| URI                    | /api\_gateway/rewards/core/v1/vendor/redemptions |
| HTTP Method            | GET                                              |
| Pagination             | Yes                                              |
| Batch support          | No                                               |
| Rate limit information | None                                             |

# API endpoint example

`https://eu.api.capillarytech.com/api_gateway/rewards/core/v1/vendor/redemptions?page=0&size=3&vendorIds=36,32&order=ASC&sortOn=LAST_UPDATED_ON&redemptionType=SWEEPSTAKES`

# Request query parameters

<Table align={["left","left","left"]}>
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
        size
      </td>

      <td>
        Integer
      </td>

      <td>
        Size of the page
      </td>
    </tr>

    <tr>
      <td>
        page
      </td>

      <td>
        Integer
      </td>

      <td>
        The maximum number of results that should be displayed.
      </td>
    </tr>

    <tr>
      <td>
        vendorId
      </td>

      <td>
        Integer
      </td>

      <td>
        A collection of identifiers for vendors associated with the reward. Multiple vendorIds are supported by a comma (","). **For example:** `VendorId=36,32`. There is no specific limit on the number of vendorIds.
      </td>
    </tr>

    <tr>
      <td>
        redemptionType
      </td>

      <td>
        Enum
      </td>

      <td>
        Specifies the category of reward redemption available, it indicates how users can redeem the reward. **Supported values:** `GAMES, AUCTION, CART_PROMOTION, CASH_WALLET, VENDOR_ONLY_REWARD, VOUCHER, CASH_BACK, INTOUCH_REWARD, PHYSICAL_REWARD, CHARITY, MILES, GIFT_CARD, SWEEPSTAKES, VENDOR_INTOUCH_REWARD, CARD_DISC`.
      </td>
    </tr>

    <tr>
      <td>
        sortBy
      </td>

      <td>
        Enum
      </td>

      <td>
        Sorts the returned vendor list. Supported values : `lastUpdatedOn`
      </td>
    </tr>

    <tr>
      <td>
        orderBy
      </td>

      <td>
        Enum
      </td>

      <td>
        Specifies the order in which results should be sorted.
        Supported values: `"ASC"` for ascending, `"DESC"` for descending.
        Default value is "ASC"
      </td>
    </tr>
  </tbody>
</Table>

<br />

```http
https://eu.api.capillarytech.com/api_gateway/rewards/core/v1/vendor/redemptions?page=0&size=3&vendorIds=36,32&order=ASC&sortOn=LAST_UPDATED_ON&redemptionType=SWEEPSTAKES
```

# Response parameters

| Parameter Name        | **Description**                                                                                                                                                                                                                         |
| :-------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| status                | Contains the status details of the vendor redemption fetch.                                                                                                                                                                             |
| success               | Indicates if the request was successful.                                                                                                                                                                                                |
| code                  | Status code of the response.                                                                                                                                                                                                            |
| message               | Message describing the status of the response.                                                                                                                                                                                          |
| redemptionList        | List of vendor redemptions fetched in the response.                                                                                                                                                                                     |
| id                    | Unique ID of the vendor redemption.                                                                                                                                                                                                     |
| name                  | Name of the vendor redemption.                                                                                                                                                                                                          |
| enabled               | Indicates if the vendor redemption is enabled.                                                                                                                                                                                          |
| responseKeys          | responseKeys are the specific details we need from a vendor's response after an API call. For example, if the vendor returns multiple fields like id, status, and code, we only pick the important ones, like code and id, for our use. |
| lastUpdatedOn         | Last updated date and time in Epoch time format.                                                                                                                                                                                        |
| lastUpdatedOnDateTime | Creation date and time of the field in ISO 8601 format (YYYY-MM-DDTHH:MM:SSZ)                                                                                                                                                           |
| redemptionActionList  | List of redemption actions. You can specify `redemptionAction` using [Create Vendor Redemption](https://docs.capillarytech.com/reference/create-vendor-redemption).                                                                     |
| pagingDetails         | Paging details of the vendor redemption list response.                                                                                                                                                                                  |
| lastUpdatedBy         | The unique identifier of the user who last updated the vendor redemption record.                                                                                                                                                        |
| createdBy             | The unique identifier of the user who created the vendor redemption.                                                                                                                                                                    |
| createdOn             | Indicates the timestamp when the vendor redemption was created. The timestamp is in Epoch time format.                                                                                                                                  |
| createdOnDateTime     | Indicates the date and time when the vendor redemption was created, formatted in ISO 8601.                                                                                                                                              |
| vendorId              | Unique identifier of the vendor.                                                                                                                                                                                                        |
| vendorName            | Name of the vendor.                                                                                                                                                                                                                     |

<br />

```json Response 200
{
    "status": {
        "success": true,
        "code": 5011,
        "message": "Vendor redemption fetched successfully"
    },
    "redemptionList": [
        {
            "id": 27802,
            "name": "jotest",
            "enabled": true,
            "responseKeys": [
                "voucher"
            ],
            "lastUpdatedOn": 1748344737000,
            "lastUpdatedOnDateTime": "2025-05-27T11:18:57Z",
            "redemptionType": "VOUCHER",
            "vendorId": 133,
            "vendorName": "VENDORHIRE",
            "createdBy": 75161973,
            "lastUpdatedBy": 75161973,
            "createdOn": 1748344737000,
            "createdOnDateTime": "2025-05-27T11:18:57Z",
            "redemptionActionList": [
                {
                    "id": 22310,
                    "name": "add good will points",
                    "enabled": true,
                    "apiType": "POST",
                    "apiUrl": "https://crm-nightly-new.cc.capillarytech.com/v1.1/request/add?program_id=2851",
                    "apiHeaders": {
                        "Authorization": "Basic bHVjaWF1dG9fdGlsbF8xMDoyMDJjYjk2MmFjNTkwNzViOTY0YjA3MTUyZDIzNGI3MA==",
                        "accept": "application/json",
                        "Content-Type": "application/json"
                    },
                    "apiBody": "{\"customFields_property\": {\"customField_1_property\": \"${customfield_CF1}\"}, \"transactionId_property\": \"${rewardTransactionId}\", \"fulfillmentStatus_property\": \"${fulfillmentStatus}\"}",
                    "execOrder": 1,
                    "contextKeys": {
                        "voucher": "response.requests.request.get(0).id"
                    },
                    "retryAction": false
                }
            ]
        },
        {
            "id": 27235,
            "name": "jotest",
            "enabled": false,
            "responseKeys": [
                "voucher"
            ],
            "lastUpdatedOn": 1748341052000,
            "lastUpdatedOnDateTime": "2025-05-27T10:17:32Z",
            "redemptionType": "VOUCHER",
            "vendorId": 133,
            "vendorName": "VENDORHIRE",
            "createdBy": 75161973,
            "lastUpdatedBy": 75161973,
            "createdOn": 1747308132000,
            "createdOnDateTime": "2025-05-15T11:22:12Z",
            "redemptionActionList": [
                {
                    "id": 22005,
                    "name": "add good will points",
                    "enabled": false,
                    "apiType": "POST",
                    "apiUrl": "https://crm-nightly-new.cc.capillarytech.com/v1.1/request/add?program_id=2851",
                    "apiHeaders": {
                        "Authorization": "Basic bHVjaWF1dG9fdGlsbF8xMDoyMDJjYjk2MmFjNTkwNzViOTY0YjA3MTUyZDIzNGI3MA==",
                        "accept": "application/json",
                        "Content-Type": "application/json"
                    },
                    "apiBody": "{\"customFields_property\": {\"customField_1_property\": \"${customfield_CF1}\"}, \"transactionId_property\": \"${rewardTransactionId}\", \"fulfillmentStatus_property\": \"${fulfillmentStatus}\"}",
                    "execOrder": 1,
                    "contextKeys": {
                        "voucher": "response.requests.request.get(0).id"
                    },
                    "retryAction": false
                }
            ]
        },
        {
            "id": 27269,
            "name": "Miles",
            "enabled": false,
            "responseKeys": [
                "voucher"
            ],
            "lastUpdatedOn": 1748341052000,
            "lastUpdatedOnDateTime": "2025-05-27T10:17:32Z",
            "redemptionType": "MILES",
            "vendorId": 133,
            "vendorName": "VENDORHIRE",
            "createdBy": 75161973,
            "lastUpdatedBy": 75161973,
            "createdOn": 1747374799000,
            "createdOnDateTime": "2025-05-16T05:53:19Z",
            "redemptionActionList": [
                {
                    "id": 22024,
                    "name": "add good will points",
                    "enabled": false,
                    "apiType": "POST",
                    "apiUrl": "https://crm-nightly-new.cc.capillarytech.com/v1.1/request/add?program_id=2851",
                    "apiHeaders": {
                        "Authorization": "Basic bHVjaWF1dG9fdGlsbF8xMDoyMDJjYjk2MmFjNTkwNzViOTY0YjA3MTUyZDIzNGI3MA==",
                        "accept": "application/json",
                        "Content-Type": "application/json"
                    },
                    "apiBody": "{\"customFields_property\": {\"customField_1_property\": \"${customfield_CF1}\"}, \"transactionId_property\": \"${rewardTransactionId}\", \"fulfillmentStatus_property\": \"${fulfillmentStatus}\"}",
                    "execOrder": 1,
                    "contextKeys": {
                        "voucher": "response.requests.request.get(0).id"
                    },
                    "retryAction": false
                }
            ]
        },
        {
            "id": 27270,
            "name": "Miles",
            "enabled": false,
            "responseKeys": [
                "voucher"
            ],
            "lastUpdatedOn": 1748341052000,
            "lastUpdatedOnDateTime": "2025-05-27T10:17:32Z",
            "redemptionType": "VOUCHER",
            "vendorId": 133,
            "vendorName": "VENDORHIRE",
            "createdBy": 75161973,
            "lastUpdatedBy": 75161973,
            "createdOn": 1747374819000,
            "createdOnDateTime": "2025-05-16T05:53:39Z",
            "redemptionActionList": [
                {
                    "id": 22025,
                    "name": "add good will points",
                    "enabled": false,
                    "apiType": "POST",
                    "apiUrl": "https://crm-nightly-new.cc.capillarytech.com/v1.1/request/add?program_id=2851",
                    "apiHeaders": {
                        "Authorization": "Basic bHVjaWF1dG9fdGlsbF8xMDoyMDJjYjk2MmFjNTkwNzViOTY0YjA3MTUyZDIzNGI3MA==",
                        "accept": "application/json",
                        "Content-Type": "application/json"
                    },
                    "apiBody": "{\"customFields_property\": {\"customField_1_property\": \"${customfield_CF1}\"}, \"transactionId_property\": \"${rewardTransactionId}\", \"fulfillmentStatus_property\": \"${fulfillmentStatus}\"}",
                    "execOrder": 1,
                    "contextKeys": {
                        "voucher": "response.requests.request.get(0).id"
                    },
                    "retryAction": false
                }
            ]
        },
        {
            "id": 27570,
            "name": "jotest",
            "enabled": false,
            "responseKeys": [
                "voucher"
            ],
            "lastUpdatedOn": 1748341052000,
            "lastUpdatedOnDateTime": "2025-05-27T10:17:32Z",
            "redemptionType": "VOUCHER",
            "vendorId": 133,
            "vendorName": "VENDORHIRE",
            "createdBy": 75161973,
            "lastUpdatedBy": 75161973,
            "createdOn": 1747903397000,
            "createdOnDateTime": "2025-05-22T08:43:17Z",
            "redemptionActionList": [
                {
                    "id": 22185,
                    "name": "add good will points",
                    "enabled": false,
                    "apiType": "POST",
                    "apiUrl": "https://crm-nightly-new.cc.capillarytech.com/v1.1/request/add?program_id=2851",
                    "apiHeaders": {
                        "Authorization": "Basic bHVjaWF1dG9fdGlsbF8xMDoyMDJjYjk2MmFjNTkwNzViOTY0YjA3MTUyZDIzNGI3MA==",
                        "accept": "application/json",
                        "Content-Type": "application/json"
                    },
                    "apiBody": "{\"customFields_property\": {\"customField_1_property\": \"${customfield_CF1}\"}, \"transactionId_property\": \"${rewardTransactionId}\", \"fulfillmentStatus_property\": \"${fulfillmentStatus}\"}",
                    "execOrder": 1,
                    "contextKeys": {
                        "voucher": "response.requests.request.get(0).id"
                    },
                    "retryAction": false
                }
            ]
        },
        {
            "id": 25772,
            "name": "miles",
            "enabled": true,
            "responseKeys": [
                "voucher"
            ],
            "lastUpdatedOn": 1747903919000,
            "lastUpdatedOnDateTime": "2025-05-22T08:51:59Z",
            "redemptionType": "MILES",
            "vendorId": 124,
            "vendorName": "DocVendor3GEORGE",
            "createdBy": null,
            "lastUpdatedBy": 75161973,
            "createdOn": 1744720255000,
            "createdOnDateTime": "2025-04-15T12:30:55Z",
            "redemptionActionList": [
                {
                    "id": 21216,
                    "name": "add good will points",
                    "enabled": true,
                    "apiType": "POST",
                    "apiUrl": "https://crm-nightly-new.cc.capillarytech.com/v1.1/request/add?program_id=2851",
                    "apiHeaders": {
                        "Authorization": "Basic bHVjaWF1dG9fdGlsbF8xMDoyMDJjYjk2MmFjNTkwNzViOTY0YjA3MTUyZDIzNGI3MA==",
                        "accept": "application/json",
                        "Content-Type": "application/json"
                    },
                    "apiBody": "{\"customFields_property\": {\"customField_1_property\": \"${customfield_CF1}\"}, \"transactionId_property\": \"${rewardTransactionId}\", \"fulfillmentStatus_property\": \"${fulfillmentStatus}\"}",
                    "execOrder": 1,
                    "contextKeys": {
                        "voucher": "response.requests.request.get(0).id"
                    },
                    "retryAction": false
                },
                {
                    "id": 21217,
                    "name": "test12345",
                    "enabled": true,
                    "apiType": "POST",
                    "apiUrl": "https://eucrm.cc.capillarytech.com/v1.1/coupon/issue",
                    "apiHeaders": {
                        "Authorization": "Basic Ymxpc3M6MWY5OTRhMjQ1M2M0MWM3YzVjZTJmNGRjNzU5MWI1NzY=",
                        "Content-Type": "application/json"
                    },
                    "apiBody": "{\"root\": {\"coupon\": {\"customer\": {\"mobile\": \"${mobile}\"}, \"series_id\": 716308}}}",
                    "execOrder": 1,
                    "contextKeys": {
                        "voucher": "response.coupon.code"
                    },
                    "retryAction": false
                },
                {
                    "id": 22186,
                    "name": "test12345",
                    "enabled": true,
                    "apiType": "POST",
                    "apiUrl": "https://eucrm.cc.capillarytech.com/v1.1/coupon/issue",
                    "apiHeaders": {
                        "Authorization": "Basic Ymxpc3M6MWY5OTRhMjQ1M2M0MWM3YzVjZTJmNGRjNzU5MWI1NzY=",
                        "Content-Type": "application/json"
                    },
                    "apiBody": "{\"root\": {\"coupon\": {\"customer\": {\"mobile\": \"${mobile}\"}, \"series_id\": 716308}}}",
                    "execOrder": 1,
                    "contextKeys": {
                        "voucher": "response.coupon.code"
                    },
                    "retryAction": false
                },
                {
                    "id": 22312,
                    "name": "test12345",
                    "enabled": true,
                    "apiType": "POST",
                    "apiUrl": "https://eucrm.cc.capillarytech.com/v1.1/coupon/issue",
                    "apiHeaders": {
                        "Authorization": "Basic Ymxpc3M6MWY5OTRhMjQ1M2M0MWM3YzVjZTJmNGRjNzU5MWI1NzY=",
                        "Content-Type": "application/json"
                    },
                    "apiBody": "{\"root\": {\"coupon\": {\"customer\": {\"mobile\": \"${mobile}\"}, \"series_id\": 716308}}}",
                    "execOrder": 1,
                    "contextKeys": {
                        "voucher": "response.coupon.code"
                    },
                    "retryAction": false
                },
                {
                    "id": 22313,
                    "name": "test12345",
                    "enabled": true,
                    "apiType": "POST",
                    "apiUrl": "https://eucrm.cc.capillarytech.com/v1.1/coupon/issue",
                    "apiHeaders": {
                        "Authorization": "Basic Ymxpc3M6MWY5OTRhMjQ1M2M0MWM3YzVjZTJmNGRjNzU5MWI1NzY=",
                        "Content-Type": "application/json"
                    },
                    "apiBody": "{\"root\": {\"coupon\": {\"customer\": {\"mobile\": \"${mobile}\"}, \"series_id\": 716308}}}",
                    "execOrder": 1,
                    "contextKeys": {
                        "voucher": "response.coupon.code"
                    },
                    "retryAction": false
                }
            ]
        },
        {
            "id": 25211,
            "name": "miles",
            "enabled": true,
            "responseKeys": [
                "voucher"
            ],
            "lastUpdatedOn": 1743678882000,
            "lastUpdatedOnDateTime": "2025-04-03T11:14:42Z",
            "redemptionType": "MILES",
            "vendorId": 118,
            "vendorName": "pretest1",
            "createdBy": null,
            "lastUpdatedBy": null,
            "createdOn": 1743678685000,
            "createdOnDateTime": "2025-04-03T11:11:25Z",
            "redemptionActionList": [
                {
                    "id": 20916,
                    "name": "add good will points",
                    "enabled": true,
                    "apiType": "POST",
                    "apiUrl": "https://crm-nightly-new.cc.capillarytech.com/v1.1/request/add?program_id=2851",
                    "apiHeaders": {
                        "Authorization": "Basic bHVjaWF1dG9fdGlsbF8xMDoyMDJjYjk2MmFjNTkwNzViOTY0YjA3MTUyZDIzNGI3MA==",
                        "accept": "application/json",
                        "Content-Type": "application/json"
                    },
                    "apiBody": "{\"customFields_property\": {\"customField_1_property\": \"${customfield_CF1}\"}, \"transactionId_property\": \"${rewardTransactionId}\", \"fulfillmentStatus_property\": \"${fulfillmentStatus}\"}",
                    "execOrder": 1,
                    "contextKeys": {
                        "voucher": "response.requests.request.get(0).id"
                    },
                    "retryAction": false
                },
                {
                    "id": 20917,
                    "name": "test12345",
                    "enabled": true,
                    "apiType": "POST",
                    "apiUrl": "https://eucrm.cc.capillarytech.com/v1.1/coupon/issue",
                    "apiHeaders": {
                        "Authorization": "Basic Ymxpc3M6MWY5OTRhMjQ1M2M0MWM3YzVjZTJmNGRjNzU5MWI1NzY=",
                        "Content-Type": "application/json"
                    },
                    "apiBody": "{\"root\": {\"coupon\": {\"customer\": {\"mobile\": \"${mobile}\"}, \"series_id\": 716308}}}",
                    "execOrder": 1,
                    "contextKeys": {
                        "voucher": "response.coupon.code"
                    },
                    "retryAction": false
                }
            ]
        },
        {
            "id": 24332,
            "name": "Tiles",
            "enabled": true,
            "responseKeys": [
                "voucher"
            ],
            "lastUpdatedOn": 1742190746000,
            "lastUpdatedOnDateTime": "2025-03-17T05:52:26Z",
            "redemptionType": "MILES",
            "vendorId": 59,
            "vendorName": "DocVendor7",
            "createdBy": null,
            "lastUpdatedBy": null,
            "createdOn": 1742190746000,
            "createdOnDateTime": "2025-03-17T05:52:26Z",
            "redemptionActionList": [
                {
                    "id": 20418,
                    "name": "add good will points",
                    "enabled": true,
                    "apiType": "POST",
                    "apiUrl": "https://crm-nightly-new.cc.capillarytech.com/v1.1/request/add?program_id=2851",
                    "apiHeaders": {
                        "Authorization": "Basic bHVjaWF1dG9fdGlsbF8xMDoyMDJjYjk2MmFjNTkwNzViOTY0YjA3MTUyZDIzNGI3MA==",
                        "accept": "application/json",
                        "Content-Type": "application/json"
                    },
                    "apiBody": "{\"customFields_property\": {\"customField_1_property\": \"${customfield_CF1}\"}, \"transactionId_property\": \"${rewardTransactionId}\", \"fulfillmentStatus_property\": \"${fulfillmentStatus}\"}",
                    "execOrder": 1,
                    "contextKeys": {
                        "voucher": "response.requests.request.get(0).id"
                    },
                    "retryAction": false
                }
            ]
        }
    ],
    "pagingDetails": {
        "last": true,
        "totalElements": 8,
        "totalPages": 1,
        "numberOfElements": 8,
        "first": true,
        "size": 50,
        "number": 0
    }
}
```
```json Failure: Page Number and size are incorrect
{
    "status": {
        "success": false,
        "code": 8000,
        "message": "Unable to fetch as Page number and size is invalid"
    },
    "redemptionList": null,
    "pagingDetails": null
}
```
```json Failure: Invalid redemption type
{
    "status": {
        "success": false,
        "code": 2110,
        "message": "Invalid redemption(reward) type"
    },
    "redemptionList": null,
    "pagingDetails": null
}
```
```Text With sortBy=lastUpdatedOn
{
    "status": {
        "success": true,
        "code": 5011,
        "message": "Vendor redemption fetched successfully"
    },
    "redemptionList": [
        {
            "id": 27270,
            "name": "Miles",
            "redemptionType": "VOUCHER",
            "enabled": true,
            "lastUpdatedOn": 1747374819000,
            "lastUpdatedOnDateTime": "2025-05-16T05:53:39Z",
            "actionCount": 1,
            "createdBy": 75161973,
            "lastUpdatedBy": 75161973,
            "createdOn": 1747374819000,
            "createdOnDateTime": "2025-05-16T05:53:39Z"
        },
        {
            "id": 27269,
            "name": "Miles",
            "redemptionType": "MILES",
            "enabled": true,
            "lastUpdatedOn": 1747374799000,
            "lastUpdatedOnDateTime": "2025-05-16T05:53:19Z",
            "actionCount": 1,
            "createdBy": 75161973,
            "lastUpdatedBy": 75161973,
            "createdOn": 1747374799000,
            "createdOnDateTime": "2025-05-16T05:53:19Z"
        },
        {
            "id": 27235,
            "name": "jotest",
            "redemptionType": "VOUCHER",
            "enabled": true,
            "lastUpdatedOn": 1747308132000,
            "lastUpdatedOnDateTime": "2025-05-15T11:22:12Z",
            "actionCount": 1,
            "createdBy": 75161973,
            "lastUpdatedBy": 75161973,
            "createdOn": 1747308132000,
            "createdOnDateTime": "2025-05-15T11:22:12Z"
        }
    ]
}
```

# API-specific error codes

| Error Code | Description                                        |
| :--------- | :------------------------------------------------- |
| 8000       | Unable to fetch as Page number and size is invalid |
| 2110       | Invalid redemption type                            |