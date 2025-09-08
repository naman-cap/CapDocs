---
title: Update Vendor Metadata
api:
  file: Update_vendor.yaml
  operationId: putApi_gatewayrewardscorev1vendor119
hidden: false
---
The **Update Vendor API** lets you update the details of an existing vendor, whether the vendor is active or inactive. You can update:

* **Basic attributes** – Name, status, type, rank, code, and description
* **Security settings** – Encryption flag and associated vendor types
* **Configuration details** – Custom key-value pairs in `vendorDetails`
* **Media assets** – Associated images and videos

While updating, if you omit a field, its current value remains unchanged. To remove a value, set the field to empty. For example, if you want to keep the existing vendor name but remove the description, simply exclude the name field and set the description field to an empty string.

# Example request

```shell
curl https://{base url}/rewards/core/v1/vendor/{vendor id} \
  -u sk_test_123: \
  -X PUT \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Updated Vendor Name",
    "enabled": true,
    "type": "REWARDS",
    "rank": 5,
    "code": "VENDOR-ABC",
    "description": "This is an updated vendor description.",
    "isEncryptionRequired": true,
    "vendorTypes": [
      "LOYALTY",
      "MARKETING"
    ],
    "vendorDetails": {
      "configKey1": "configValue1",
      "configKey2": "configValue2"
    },
    "images": [
      {
        "handle": "image_handle_1"
      }
    ],
    "videos": []
  }'
```

# Pre requisites

* Authentication: Basic or OAuth authentication.
* Default access group

# Rate limit

* **Demo and Testing Clusters:** 1,000 requests per minute per API key
* **Other Organizations:** The rate limit is brand-specific.

To modify the limit, create a ticket with the Capillary Product support team.

# Body parameters

| Field                | Type    | Required    | Description                                                                                                                                                                                                                                                                                     |
| :------------------- | :------ | :---------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| name                 | string  | Yes         | Defines the name of the vendor. This name must be unique and has a maximum character limit of 255.                                                                                                                                                                                              |
| enabled              | boolean | Yes         | Indicates the active status of the Vendor. Supported values are `true` or `false`.                                                                                                                                                                                                              |
| type                 | string  | Yes         | Defines the type of Vendor. Supported values are `REWARDS` or `POINTS`. Note: The type cannot be changed after creation in the case of **POINTS** vendors.                                                                                                                                      |
| rank                 | integer | Optional    | Defines the rank assigned to the vendor. It can be set to `null` to remove ranking. When provided, the value must be greater than 0.                                                                                                                                                            |
| code                 | string  | Optional    | Indicates the vendor identifier. It can be set to `null`. When provided, it must be unique and have a maximum of 255 characters. If null or not provided, a random, unique code is assigned to the vendor.                                                                                      |
| description          | string  | Optional    | Defines the vendor description. It can be set to `null`. When provided, it has a maximum character limit of 1034.                                                                                                                                                                               |
| isEncryptionRequired | boolean | Optional    | Indicates the encryption flag. It cannot be `null` when explicitly set. When `true`, **vendorTypes** becomes mandatory.                                                                                                                                                                         |
| vendorTypes          | array   | Conditional | Defines the vendor classification. This parameter is required when **isEncryptionRequired** is `true`. It can be set to `null` otherwise.                                                                                                                                                       |
| vendorDetails        | object  | Optional    | Defines the key-value configuration. It can be set to `null` to mark all existing vendor details as inactive. When provided as a map (e.g., `{"key1": "value1"}`), keys are strings and values are strings; values are automatically encrypted. If omitted, no changes are made.                |
| .images              | object  | Optional    | Defines the vendor images. It can be set to `null` to remove all images. When provided, a maximum of 5 images are allowed. Internal objects require valid file handles if **isExternal** is `false`. If omitted, existing media is preserved. Any image format is supported.                    |
| ..name               | string  | Yes         | Unique name identifier for the image.                                                                                                                                                                                                                                                           |
| ..altText            | string  | Optional    | Descriptive text that conveys the meaning and context of the image.                                                                                                                                                                                                                             |
| ..id                 | string  | Conditional | Unique ID that is generated when an image is created. This ID is the file handle for the associated image in the Capillary system. This parameter is required if **isExternal** is `false`.                                                                                                     |
| ..url                | string  | Conditional | Direct link to the image. This parameter is required if **isExternal** is `true`.                                                                                                                                                                                                               |
| ..isExternal         | boolean | Yes         | Indicates if the image is from an external source. Supported values : `true`,`false`                                                                                                                                                                                                            |
| .videos              | array   | Optional    | Defines the details on videos for the vendor. It can be set to `null` to remove all videos. When provided, a maximum of 2 videos are allowed. Internal objects require valid file handles if **isExternal** is `false`. If omitted, existing media is preserved. Any video format is supported. |
| ..name               | string  | Yes         | Unique name identifier for the video.                                                                                                                                                                                                                                                           |
| ..altText            | string  | Optional    | Descriptive text that conveys the meaning and context of the video.                                                                                                                                                                                                                             |
| ..id                 | string  | Conditional | Unique ID that is generated when a video is created. This ID is the file handle for the associated video in the Capillary system. This parameter is required if **isExternal** is `false`.                                                                                                      |
| ..url                | string  | Conditional | Direct link to the video. This parameter is required if **isExternal** is `true`.                                                                                                                                                                                                               |
| ..isExternal         | boolean | Yes         | Indicates if the video is from an external source.                                                                                                                                                                                                                                              |

# Example response

```json
{
  "status": {
    "success": true,
    "code": "VENDOR_UPDATED",
    "message": "Vendor updated successfully"
  },
  "vendor": {
    "id": 123,
    "name": "Updated Name",
    "vendorDetails": {
      "key1": "******",
      "key2": "********"
    }
  }
}
```

# Response parameters

| Field                     | Type    | Description                                                             |
| :------------------------ | :------ | :---------------------------------------------------------------------- |
| status                    | object  | Overall status of the API call.                                         |
| status.success            | boolean | Indicates if the operation was successful.                              |
| status.code               | string  | An application-specific code for the status.                            |
| status.message            | string  | A human-readable message about the status.                              |
| vendor                    | object  | Details of the updated vendor.                                          |
| vendor.id                 | integer | Unique identifier for the vendor.                                       |
| vendor.name               | string  | Name of the vendor.                                                     |
| vendor.vendorDetails      | object  | Key-value configuration for the vendor. Values are masked for security. |
| vendor.vendorDetails.key1 | string  | Masked value for example configuration key1.                            |
| vendor.vendorDetails.key2 | string  | Masked value for example configuration key2.                            |

# Error codes

| Code | Description                                                                                                             |
| :--- | :---------------------------------------------------------------------------------------------------------------------- |
| 400  | Bad Request. The request body or parameters are invalid or missing required fields. (e.g., Vendor name is required).    |
| 400  | Bad Request. General client-side error due to malformed syntax or invalid parameters.                                   |
| 409  | Conflict. Request conflicts with current state of the resource (e.g., duplicate unique code, POINTS vendor uniqueness). |
| 500  | Internal Server Error. An unexpected error occurred on the server.                                                      |
