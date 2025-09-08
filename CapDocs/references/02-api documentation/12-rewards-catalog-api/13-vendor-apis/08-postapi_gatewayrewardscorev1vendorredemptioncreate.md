---
title: Create Vendor Redemption.
api:
  file: Create_Vendor_Redemption.yaml
  operationId: postApi_gatewayrewardscorev1vendorredemptioncreate
hidden: true
---
Vendor Redemption API enables a brand to interact with third-party vendor systems for redeeming rewards. For example a brand wants to issue a gift card through a third-party vendor, ABC. This API provides the necessary details to the ABC vendor to process the reward redemption.

# Example request

```curl
curl --location 'https://eu.api.capillarytech.com/api_gateway/rewards/core/v1/vendor/redemption/create' \
--header 'Content-Type: application/json' \
--header 'Authorization: Basic aWFtc2hpdmblahblahNjI3YjJlODM4ZjhlMzRkNWI1YTI5MWY=' \
--data '{
    "brandId": 1,
    "vendorId": 36,
    "name": "Miles",
    "redemptionType": "MILES",
    "actions": [
        {
            "name": "add good will points",
            "execOrder": 1,
            "apiUrl": "https://crm-nightly-new.cc.capillarytech.com/v1.1/request/add?program_id=2851",
            "apiType": "POST",
            "apiHeaders": {
                "accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": "Basic bHVjaWF1dG9fdGlsbF8xMDoyMDJjYjk2MmFjNTkwNzViOTY0YjA3MTUyZDIzNGI3MA=="
            },
             "apiBody" : "{\"transactionId_property\": \"${rewardTransactionId}\",\"customFields_property\": {\"customField_1_property\": \"${customfield_CF1}\"}, \"fulfillmentStatus_property\": \"${fulfillmentStatus}\"}",
            "contextKeys": {
                "voucher": "response.requests.request.get(0).id"
            }
        }
    ],
    "responseKeys": [
        "voucher"
    ]
}'
```

# Pre-requisites

* Authentication: Basic or OAuth authentication.
* Default access group

# Rate limit

* **Demo and Testing Clusters:** 1,000 requests per minute per API key
* **Other Organizations:** The rate limit is brand-specific.

To modify the limit, create a ticket with the Capillary Product support team.

# Body parameters

<Table align={["left","left","left","left"]}>
  <thead>
    <tr>
      <th>
        Field
      </th>

      <th>
        Type
      </th>

      <th>
        Required
      </th>

      <th>
        Description
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        brandId
      </td>

      <td>
        Integer
      </td>

      <td>
        Yes
      </td>

      <td>
        The unique ID of the brand.
      </td>
    </tr>

    <tr>
      <td>
        vendorId
      </td>

      <td>
        String
      </td>

      <td>
        Yes
      </td>

      <td>
        The unique ID of the vendor.
      </td>
    </tr>

    <tr>
      <td>
        name
      </td>

      <td>
        String
      </td>

      <td>
        Optional
      </td>

      <td>
        The name defined by the brand for the vendor reward.
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
        Optional
      </td>

      <td>
        Defines the method by which a customer can redeem rewards.
      </td>
    </tr>

    <tr>
      <td>
        .actions
      </td>

      <td>
        Array of Objects
      </td>

      <td>
        Optional
      </td>

      <td>
        An array containing action objects to be executed.
      </td>
    </tr>

    <tr>
      <td>
        ..name
      </td>

      <td>
        String
      </td>

      <td>
        Optional
      </td>

      <td>
        The name of the action to be executed.
      </td>
    </tr>

    <tr>
      <td>
        ..execOrder
      </td>

      <td>
        Integer
      </td>

      <td>
        Optional
      </td>

      <td>
        The execution order of the action.
      </td>
    </tr>

    <tr>
      <td>
        ..apiUrl
      </td>

      <td>
        String
      </td>

      <td>
        Optional
      </td>

      <td>
        The URL to which the API request is made.
      </td>
    </tr>

    <tr>
      <td>
        ..apiType
      </td>

      <td>
        String
      </td>

      <td>
        Optional
      </td>

      <td>
        The HTTP method to be used for the API request.
      </td>
    </tr>

    <tr>
      <td>
        .apiHeaders
      </td>

      <td>
        Object
      </td>

      <td>
        Optional
      </td>

      <td>
        An object containing the headers to be sent with the API request.
      </td>
    </tr>

    <tr>
      <td>
        ..accept
      </td>

      <td>
        String
      </td>

      <td>
        Optional
      </td>

      <td>
        Indicates the expected response format.
      </td>
    </tr>

    <tr>
      <td>
        ..Content-Type
      </td>

      <td>
        String
      </td>

      <td>
        Optional
      </td>

      <td>
        Indicates the format of the request body.
      </td>
    </tr>

    <tr>
      <td>
        ..Authorization
      </td>

      <td>
        String
      </td>

      <td>
        Optional
      </td>

      <td>
        Defines the authentication credentials.
      </td>
    </tr>

    <tr>
      <td>
        .apiBody
      </td>

      <td>
        String
      </td>

      <td>
        Optional
      </td>

      <td>
        Defines the API body for the external API endpoint, allowing you to include additional data like custom fields, fulfillment status, and the reward transaction ID.
      </td>
    </tr>

    <tr>
      <td>
        .contextKeys
      </td>

      <td>
        Object
      </td>

      <td>
        Optional
      </td>

      <td>
        An object containing context keys for extracting values from the response.
      </td>
    </tr>

    <tr>
      <td>
        ..voucher
      </td>

      <td>
        String
      </td>

      <td>
        Optional
      </td>

      <td>
        Defines a temporary variable to hold data from an API's response for use in subsequent API calls.
        **Example:** An API returns the discount code "SAVE20". You store this as "voucher" to pass into the next API to activate the code, and then another API to send it via SMS.
      </td>
    </tr>

    <tr>
      <td>
        .responseKeys
      </td>

      <td>
        Array of Strings
      </td>

      <td>
        Optional
      </td>

      <td>
        An array of keys to be extracted from the API response for subsequent use.
      </td>
    </tr>

    <tr>
      <td>
        ..voucher
      </td>

      <td>
        String
      </td>

      <td>
        Optional
      </td>

      <td>
        Defines what data is returned in the final response to the client.
        ** Example:** After collecting "voucher", "status", and "transactionId", setting responseKeys to show just the voucher ensures the customer only sees "Your code SAVE20 is active," ensuring internal details are secure.
      </td>
    </tr>
  </tbody>
</Table>

# Example response

```Text Response 
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

```

# Response parameters

| Field          | Type    | Description                                                                                            |
| :------------- | :------ | :----------------------------------------------------------------------------------------------------- |
| success        | Boolean | Indicates whether the API call was successful or not.                                                  |
| code           | Integer | The code associated with the response.                                                                 |
| message        | String  | A message providing details about the response.                                                        |
| id             | Integer | The unique identifier for the redemption object.                                                       |
| name           | String  | The name associated with the redemption object.                                                        |
| redemptionType | Enum    | The type of redemption.                                                                                |
| enabled        | Boolean | Indicates whether the redemption is currently enabled.                                                 |
| lastUpdatedOn  | Date    | Indicates the timestamp when the vendor redemption was updated. The timestamp is in Epoch time format. |
| actionCount    | Integer | The count of the number of redemptions.                                                                |
| lastUpdatedBy  | Long    | The unique identifier of the user who last updated the vendor redemption record.                       |
| createdBy      | String  | The unique identifier of the user who created the vendor redemption.                                   |
| createdOn      | String  | Indicates the timestamp when the vendor redemption was created. The timestamp is in Epoch time format. |

# Error codes

| Code | Description                                                                                                                                                  |
| :--- | :----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 400  | Invalid Request. Check the required parameters.                                                                                                              |
| 500  | Unexpected error. An internal server error occurred. Retry the request after a short delay. If the issue persists, contact support with the request details. |
| 5013 | Unable to create vendor redemption.There was an issue during the creation process. Review your request payload for any errors or conflicts, and try again.   |
