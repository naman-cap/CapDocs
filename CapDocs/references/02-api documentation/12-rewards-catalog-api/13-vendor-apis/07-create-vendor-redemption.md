---
title: Create Vendor Redemption
excerpt: ''
api:
  file: v1.json
  operationId: create-vendor-redemption
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
Vendor Redemption API enables a brand to interact with third-party vendor systems for redeeming rewards.
Example: The brand wants to issue a gift card through a third-party vendor, ABC. This API provides the necessary details to the ABC vendor to process the reward redemption.

> 👍 Note
>
> * For detailed information about our APIs and for hands-on testing, refer documentation in [API overview](https://docs.capillarytech.com/reference/apioverview) and  step-by-step guide on making your first API call in [Make your first API call](https://docs.capillarytech.com/reference/make-your-first-api-call) .

# Prerequisites

*   Authentication: Basic or OAuth authentication
*   Default access group

# Resource information

|                        |                                                      |
| :--------------------- | :--------------------------------------------------- |
| URI                    | api_gateway/rewards/core/v1/vendor/redemption/create |
| HTTP Method            | POST                                                 |
| Pagination             | No                                                   |
| Batch support          | No                                                   |
| Rate limit information | None                                                 |

# API endpoint example

`https://eucrm.cc.capillarytech.com/api_gateway/rewards/core/v1/vendor/redemption/create`

# Request body parameters

| Parameter          | Data Type        | Description                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| :----------------- | :--------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **brandId**        | Integer          | The unique ID of the brand.                                                                                                                                                                                                                                                                                                                                                                                                                             |
| **vendorId**       | String           | The unique ID of the vendor.                                                                                                                                                                                                                                                                                                                                                                                                                            |
| **name**           | String           | The name defined by the brand for the vendor reward.                                                                                                                                                                                                                                                                                                                                                                                                    |
| **redemptionType** | Enum             | Specifies the method by which a customer can redeem rewards.                                                                                                                                                                                                                                                                                                                                                                                            |
| --actions          | Array of Objects | An array containing action objects to be executed.                                                                                                                                                                                                                                                                                                                                                                                                      |
| -name              | String           | The name of the action to be executed.                                                                                                                                                                                                                                                                                                                                                                                                                  |
| -execOrder         | Integer          | The execution order of the action.                                                                                                                                                                                                                                                                                                                                                                                                                      |
| -apiUrl            | String           | The URL to which the API request is made.                                                                                                                                                                                                                                                                                                                                                                                                               |
| -apiType           | String           | The HTTP method to be used for the API request.                                                                                                                                                                                                                                                                                                                                                                                                         |
| -apiBody           | String           | The API body for the external API endpoint, allowing you to include additional data like custom fields, fulfillment status, and the reward transaction ID.                                                                                                                                                                                                                                                                                              |
| -apiHeaders        | Object           | An object containing the headers to be sent with the API request.                                                                                                                                                                                                                                                                                                                                                                                       |
| --accept           | String           | The accept header indicating the expected response format.                                                                                                                                                                                                                                                                                                                                                                                              |
| --Content-Type     | String           | The content type header indicating the format of the request body.                                                                                                                                                                                                                                                                                                                                                                                      |
| --Authorization    | String           | The authorization header containing the authentication credentials.                                                                                                                                                                                                                                                                                                                                                                                     |
| -apiBody           | String           | The API body for the external API endpoint, allowing you to include additional data like custom fields, fulfillment status, and the reward transaction ID.                                                                                                                                                                                                                                                                                              |
| --contextKeys      | Object           | An object containing context keys for extracting values from the response.                                                                                                                                                                                                                                                                                                                                                                              |
| --voucher          | String           | Defines a key which is a temporary variable that holds data from an API's response. You define it to extract specific information like a voucher code from an API's reply and then use that same key to pass the data into the request body of a subsequent API. **Example:** “contextKeys”: \{“voucher”: “response.coupon.code”} stores the voucher code. You then use “apiBody”: \{“voucherCode”: “$\{voucher}”} to insert it into the next API call. |
| -responseKeys      | Array of Strings | An array of keys to be extracted from the API response for subsequent use.                                                                                                                                                                                                                                                                                                                                                                              |
| --voucher          | String           | Defines a key which determines what data is returned in the final response to the client. After your APIs have executed, you specify which of your collected context key values should be included in the final output.  **Example:** “responseKeys”: “status”, “voucher” ensures the final response only contains the values stored  in the specified voucher key.                                                                                   |

```json
{
    "status": {
        "success": true,
        "code": 5012,
        "message": "Vendor redemption created successfully"
    },
    "redemption": {
        "id": 24332,
        "name": "Tiles",
        "redemptionType": "MILES",
        "enabled": true,
        "lastUpdatedOn": null,
        "lastUpdatedOnDateTime": null,
        "actionCount": 1
    }
}
```
```json With custom field, fulfilment and transaction id
{
  "vendorId" : 1,
  "brandId" : 1,
  "enabled" : true,
  "redemptionType" : "VENDOR_ONLY_REWARD",
  "name" : "Vendor Redemption",
  "responseKeys" :  "status", "voucher" ,
  "actions" : [ {
    "name" : "Action",
    "enabled" : true,
    "apiType" : "POST",
    "apiUrl" : "https://partial.com/coupon/issue",
    "apiBody" : "{\"transactionId_property\": \"${rewardTransactionId}\",\"customFields_property\": {\"customField_1_property\": \"${customfield_CF1}\"}, \"fulfillmentStatus_property\": \"${fulfillmentStatus}\"}",
    "execOrder" : 1,
    "retryAction" : false,
    "contextKeys" : {
      "voucher" : "response.coupon.code",
      "status" : "response.status"
    },
    "apiHeaders" : {
      "accept" : "application/json"
    }
  } ]
}
```

# Response parameters

| Parameter      | Datatype | Description                                                                                            |
| -------------- | -------- | ------------------------------------------------------------------------------------------------------ |
| success        | Boolean  | Indicates whether the API call was successful or not.                                                  |
| code           | Integer  | The code associated with the response.                                                                 |
| message        | String   | A message providing details about the response.                                                        |
| id             | Integer  | The unique identifier for the redemption object.                                                       |
| name           | String   | The name associated with the redemption object.                                                        |
| redemptionType | Enum     | The type of redemption.                                                                                |
| enabled        | Boolean  | Indicates whether the redemption is currently enabled.                                                 |
| lastUpdatedOn  | Date     | Indicates the timestamp when the vendor redemption was updated. The timestamp is in Epoch time format. |
| actionCount    | Integer  | The count of the number of redemptions.                                                                |
| lastUpdatedBy  | Long     | The unique identifier of the user who last updated the vendor redemption record.                       |
| createdBy      | String   | The unique identifier of the user who created the vendor redemption.                                   |
| createdOn      | String   | Indicates the timestamp when the vendor redemption was created. The timestamp is in Epoch time format. |

```json
{
    "status": {
        "success": true,
        "code": 5012,
        "message": "Vendor redemption created successfully"
    },
    "redemption": {
        "id": 27802,
        "name": "jotest",
        "redemptionType": "VOUCHER",
        "enabled": true,
        "lastUpdatedOn": 1748344737000,
        "lastUpdatedOnDateTime": "2025-05-27T11:18:57Z",
        "actionCount": 1,
        "createdBy": 75161973,
        "lastUpdatedBy": 75161973,
        "createdOn": 1748344737000,
        "createdOnDateTime": "2025-05-27T11:18:57Z"
    }
}
``<code>json

</code>``json
With custom field, fulfilment and transaction id
{
  "vendorId" : 1,
  "brandId" : 1,
  "enabled" : true,
  "redemptionType" : "VENDOR_ONLY_REWARD",
  "name" : "Vendor Redemption",
  "responseKeys" :  "status", "voucher" ,
  "actions" : [ {
    "name" : "Action",
    "enabled" : true,
    "apiType" : "POST",
    "apiUrl" : "https://partial.com/coupon/issue",
    "apiBody" : "{\"transactionId_property\": \"\$\{rewardTransactionId\}\",\"customFields_property\": {\"customField_1_property\": \"\$\{customfield_CF1\}\"}, \"fulfillmentStatus_property\": \"\$\{fulfillmentStatus\}\"}",
    "execOrder" : 1,
    "retryAction" : false,
    "contextKeys" : {
      "voucher" : "response.coupon.code",
      "status" : "response.status"
    },
    "apiHeaders" : {
      "accept" : "application/json"
    }
  } ]
}

```
