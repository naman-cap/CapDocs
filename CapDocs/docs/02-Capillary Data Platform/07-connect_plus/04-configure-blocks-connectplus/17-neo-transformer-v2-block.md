---
title: Neo Transformer V2 Block
excerpt: ''
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
The Neo Transformer V2 Block allows you to call a [NEO API ](https://docs.capillarytech.com/docs/introduction-to-extension-platform)for data transformation with enhanced retry mechanisms and customizable error handling.

![1b9c9b34ff39ffcf51f95753b32e98f1bddd4ecb9763ccee803fb12e72fb8e2c Screenshot 2025 05 06 at 12](https://files.readme.io/1b9c9b34ff39ffcf51f95753b32e98f1bddd4ecb9763ccee803fb12e72fb8e2c-Screenshot_2025-05-06_at_12.12.39_PM.png)

The following table lists the fields:

| Field                          | Description                                                                                                                                                                                                         |
| :----------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Enter URL**                  | Select the [Neo Dataflow](https://docs.capillarytech.com/docs/dataflows) from the drop-down menu. The drop-down lists Dataflows with the `Connectplus` tag.                                                         |
| **Authorization**              | Authorization key for the API (if required).                                                                                                                                                                        |
| **Split Response**             | If set to `true`, separates each array in the API response into individual responses. Useful when the API returns an array of objects.                                                                              |
| **Max Retry**                  | Defines the maximum number of times the API will be retried in case of failure. Users can set this value based on their requirements. **Note:** Currently, there is no limitation in setting the number of retries. |
| **Extra Retry Error Codes**    | Additional status error codes that should trigger a retry. **Note:** By default, only 5XX error codes are retried.                                                                                                  |
| **Extra No Retry Error Codes** | Status error codes that should **not** trigger a retry, even if they can be retried by default. **Example**: Adding `500` error code will skip retry of APIs with `500` error codes.                                |
