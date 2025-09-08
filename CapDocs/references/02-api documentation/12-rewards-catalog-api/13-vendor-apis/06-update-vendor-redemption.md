---
title: Update Vendor Redemption
excerpt: >-
  Update Vendor Redemption API enables a brand to modify an existing vendor
  redemption configuration with updated details.
api:
  file: v1.json
  operationId: update-vendor-redemption
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
> 👍 Note
>
> For detailed information about our APIs and for hands-on testing, refer documentation in [API overview](https://docs.capillarytech.com/reference/apioverview) and step-by-step guide on making your first API call in [Make your first API call](https://docs.capillarytech.com/reference/make-your-first-api-call) .

# Prerequisites

*   Authentication: Basic or OAuth authentication
*   Default access group

# Resource information

|                        |                                                       |    |
| :--------------------- | :---------------------------------------------------- | :- |
| URI                    | api\_gateway/rewards/core/v1/vendor/redemption/create |    |
| HTTP Method            | POST                                                  |    |
| Pagination             | No                                                    |    |
| Batch support          | No                                                    |    |
| Rate limit information | None                                                  |    |

# API Endpoint

`<https://{host}/api_gateway/rewards/core/v1/vendor/redemption/{id}/brand/{brandId}`

# Path Parameters

| Parameter      | Data Type | Description                                                                                                                               |
| :------------- | :-------- | :---------------------------------------------------------------------------------------------------------------------------------------- |
| **`id*`**      | Integer   | The unique identifier of the redemption.                                                                                                  |
| **`brandId*`** | Integer   | The unique identifier of the brand. You can get the brand ID from this [API](https://docs.capillarytech.com/reference/retrieve-brand-id). |

# Request Body Parameters

<Table align={["left","left","left"]}>
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
        `name`
      </td>

      <td>
        String
      </td>

      <td>
        The name defined by the brand for the vendor reward.
      </td>
    </tr>

    <tr>
      <td>
        **`redemptionType*`**
      </td>

      <td>
        Enum
      </td>

      <td>
        Specifies the method by which the customer can redeem rewards.
        Supported values: `GAMES`, `AUCTION`, `CART_PROMOTION`, `CASH_WALLET`, `VENDOR_ONLY_REWARD`, `VOUCHER`, `CASH_BACK`, `INTOUCH_REWARD`, `PHYSICAL_REWARD`, `CHARITY`, `MILES`, `GIFT_CARD`, `SWEEPSTAKES`, `VENDOR_INTOUCH_REWARD`, `CARD_DISC`

        **VENDOR\_ONLY\_REWARD**`: These are either points or coupons created at the vendor end.  
                        `**VENDOR\_INTOUCH\_REWARD**`: These are vendor rewards created at the Capillary end. It's not recommended to use `VENDOR\_INTOUCH\_REWARD`instead, use `VENDOR\_ONLY\_REWARD\` to issue coupons directly through the vendor API.
      </td>
    </tr>

    <tr>
      <td>
        **`actions*`**
      </td>

      <td>
        Object
      </td>

      <td>
        Specifies the Name, Endpoint URL, API Type, API Headers, and the API Body of the internal API that executes a specific action.
      </td>
    </tr>

    <tr>
      <td>
        `- apiUrl`
      </td>

      <td>
        String
      </td>

      <td>
        The URL to which the API request is made. For example, `"apiUrl": "https://partial.com/reward/issue"` specifies the endpoint where the request to issue a reward will be made.
      </td>
    </tr>

    <tr>
      <td>
        `- apiBodyField`
      </td>

      <td>

      </td>

      <td>

      </td>
    </tr>

    <tr>
      <td>
        `- apiBody`
      </td>

      <td>
        String
      </td>

      <td>
        The API body for the external API endpoint specified in `apiUrl`. You can also include custom fields, fulfillment status, and reward transaction ID. The fulfillment status and reward transaction ID are variables resolved in the backend according to the associated transaction.\<br>\<br>- **Custom Field**: Enables brands to add additional data in the API request. Use the format `customfield_customFieldName`. For example, a custom field named "Address: Bangalore" should be written as `customfield_Address` then it will replace the value of custom field with Bangalore. Note: Only custom fields created with `ISSUE_REWARD` scope are supported.\
        **Fulfillment Status**: Enables updating the fulfillment status. Use the parameter `fulfillmentStatus`, formatted in camelCase.
        **Reward Transaction ID**: Enables adding the reward transaction ID. This helps the vendor to identify the transaction associated with the issued reward. Use the parameter `rewardTransactionId`, formatted in camelCase.
        **NOTE:** The API body supports other parameters that can be included based on the brand's specific requirements or integration needs.\<br>- Internal Capillary APIs can also be used.
      </td>
    </tr>

    <tr>
      <td>
        `- name`
      </td>

      <td>
        String
      </td>

      <td>
        The name of the action to be executed.
      </td>
    </tr>

    <tr>
      <td>
        `- execOrder`
      </td>

      <td>
        Integer
      </td>

      <td>
        The execution order of the action.
      </td>
    </tr>

    <tr>
      <td>
        `- apiType`
      </td>

      <td>
        String
      </td>

      <td>
        The HTTP method to be used for the API request.
      </td>
    </tr>

    <tr>
      <td>
        `- retryAction`
      </td>

      <td>
        Boolean
      </td>

      <td>
        Indicates whether the action should be retried on failure (`true`/`false`).
      </td>
    </tr>

    <tr>
      <td>
        `- actionId`
      </td>

      <td>
        Integer
      </td>

      <td>
        A unique identifier for the action.
      </td>
    </tr>

    <tr>
      <td>
        `- enabled`
      </td>

      <td>
        Boolean
      </td>

      <td>
        Specifies if the action is active (`true`/`false`).
      </td>
    </tr>

    <tr>
      <td>
        `- apiHeaders`
      </td>

      <td>
        Object
      </td>

      <td>
        An object containing the headers to be sent with the API request.
      </td>
    </tr>

    <tr>
      <td>
        `-- Authorization`
      </td>

      <td>
        String
      </td>

      <td>
        The authorization header containing the authentication credentials.
      </td>
    </tr>

    <tr>
      <td>
        `-- Content-Type`
      </td>

      <td>
        String
      </td>

      <td>
        The content type header indicating the format of the request body.
      </td>
    </tr>

    <tr>
      <td>
        `- contextKeys`
      </td>

      <td>
        Object
      </td>

      <td>
        An object containing context keys for extracting values from the response.
      </td>
    </tr>

    <tr>
      <td>
        `-- voucher`
      </td>

      <td>
        String
      </td>

      <td>
        The context key for extracting the voucher ID from the response.
      </td>
    </tr>

    <tr>
      <td>
        `responseKeys`
      </td>

      <td>
        Array
      </td>

      <td>
        A list of response keys expected from the vendor API.
      </td>
    </tr>

    <tr>
      <td>
        **`vendorId*`**
      </td>

      <td>
        String
      </td>

      <td>
        The unique ID of the vendor.
      </td>
    </tr>

    <tr>
      <td>
        `enabled`
      </td>

      <td>
        Boolean
      </td>

      <td>
        Indicates whether this vendor redemption configuration is active (`true`/`false`).
      </td>
    </tr>
  </tbody>
</Table>

<br />

```curl
curl --location --request PUT 'https://eu.api.capillarytech.com/api_gateway/rewards/core/v1/vendor/redemption/25772/brand/61' \
--header 'Content-Type: application/json' \
--header 'Accept: */*' \
--header 'Authorization: Basic Z2VvcmdlLmpvaG5zb246OTg4OTU2NWI4ODVhMmY4ZWE1MTk1MjA2NWEwYTEzNzg=' \
--header 'Cookie: _cfuvid=sjLi_VBF4c21ARYHyb89m7Ie4hT.cyU.hrMuLKMO8c8-1743398935789-0.0.1.1-604800000; _cfuvid=BG9uxQz5z1ZL.UwBkabqmxay.hK4lYZLLcohcMXHPfc-1744720306503-0.0.1.1-604800000' \
--data '{
    "name": "miles",
    "redemptionType": "MILES",
    "actions": [
        {
            "apiUrl": "https://eucrm.cc.capillarytech.com/v1.1/coupon/issue",
            "apiBodyField": "{\"root\": {\"coupon\": {\"customer\": {\"mobile\": \"${mobile}\"}, \"series_id\": 716308}}}",
            "apiBody": "{\"root\": {\"coupon\": {\"customer\": {\"mobile\": \"${mobile}\"}, \"series_id\": 716308}}}",
            "name": "test12345",
            "execOrder": 1,
            "apiType": "POST",
            "retryAction": false,
            "actionId": 20811,
            "enabled": true,
            "apiHeaders": {
                "Authorization": "Basic Ymxpc3M6MWY5OTRhMjQ1M2M0MWM3YzVjZTJmNGRjNzU5MWI1NzY=",
                "Content-Type": "application/json"
            },
            "contextKeys": {
                "voucher": "response.coupon.code"
            }
        }
    ],
    "responseKeys": [
        "voucher"
    ],
    "vendorId": "124",
    "enabled": true
}'
```

# Response Parameters

| Parameter            | Data Type | Description                                                                 |
| :------------------- | :-------- | :-------------------------------------------------------------------------- |
| **`success`**        | Boolean   | Indicates whether the API call was successful.                              |
| **`code`**           | Integer   | The code associated with the response.                                      |
| **`message`**        | String    | A message providing details about the response.                             |
| **`id`**             | Integer   | The unique identifier for the redemption object.                            |
| **`name`**           | String    | The name associated with the redemption object.                             |
| **`redemptionType`** | Enum      | The type of redemption.                                                     |
| **`enabled`**        | Boolean   | Indicates whether the redemption is currently enabled.                      |
| **`lastUpdatedOn`**  | Date      | The timestamp when the vendor redemption was updated, in Epoch time format. |
| **`lastUpdatedBy`**  | Long      | The till ID of the user who last updated the vendor redemption record.      |
| **`createdBy`**      | String    | The till ID of the user who created the vendor redemption.                  |
| **`createdOn`**      | String    | The timestamp when the vendor redemption was created, in Epoch time format. |

<br />

```json
{
    "status": {
        "success": true,
        "code": 5016,
        "message": "Vendor redemption updated successfully"
    },
    "redemption": {
        "id": 25772,
        "name": "miles",
        "redemptionType": "MILES",
        "enabled": true,
        "lastUpdatedOn": 1747903919000,
        "lastUpdatedOnDateTime": "2025-05-22T08:51:59Z",
        "actionCount": 4,
        "createdBy": null,
        "lastUpdatedBy": 75161973,
        "createdOn": 1744720255000,
        "createdOnDateTime": "2025-04-15T12:30:55Z"
    }
}
```