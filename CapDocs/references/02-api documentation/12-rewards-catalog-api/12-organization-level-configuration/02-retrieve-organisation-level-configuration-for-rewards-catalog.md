---
title: Get Organisation Level Configuration
excerpt: ''
api:
  file: v1.json
  operationId: retrieve-organisation-level-configuration-for-rewards-catalog
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
This API allows you to retrieve the organisation level configuration for rewards catalog.

> 👍 Note
>
> * For detailed information about our APIs and for hands-on testing, refer documentation in [API overview](https://docs.capillarytech.com/reference/apioverview) and step-by-step guide on making your first API call in [Make your first API call](https://docs.capillarytech.com/reference/make-your-first-api-call).

# Prerequisites

*   Authentication: Basic or OAuth authentication
*   Default access group

# Resource information

|                        |                                                       |
| :--------------------- | :---------------------------------------------------- |
| URI                    | /api\_gateway/rewards/core/v1/brand`\{id\}`/getConfig |
| HTTP Method            | GET                                                   |
| Pagination             | No                                                    |
| Batch support          | No                                                    |
| Rate limit information | None                                                  |

# API endpoint example

`https://eu.api.capillarytech.com/api_gateway/rewards/core/v1/brand\{id\}/getConfig`

# Response parameters

| Parameter        | Data Type | Description                                                                                                                   |
| :--------------- | :-------- | :---------------------------------------------------------------------------------------------------------------------------- |
| **`Status`**     | Boolean   | An object containing details about the status of the request.                                                                 |
| `success`        | Boolean   | Indicates whether the request was successful. `true`: Request was successful. `false`: Request was unsuccessful.              |
| `code`           | Integer   | A code representing the API status.                                                                                           |
| `message`        | String    | A description of the API call.                                                                                                |
| `configKeyName`  | String    | The name of the configuration setting.                                                                                        |
| `configKeyValue` | String    | The value assigned to the configuration setting.                                                                              |
| `brandId`        | Integer   | You can use the [API](https://eu.api.capillarytech.com/api_gateway/rewards/core/v1/brand/getAll) to retrieve your brand's ID. |
| `label`          | String    | A descriptive label explaining the configuration setting, its implications, and the context where it applies.                 |

```json
{
    "status": {
        "success": true,
        "code": 3012,
        "message": "Org configs fetched successfully"
    },
    "configList": [
        {
            "configKeyName": "CONF_EXT_POINTS_VENDOR",
            "configKeyValue": "false",
            "brandId": null,
            "label": "Enable third party vendor for points redemption"
        },
        {
            "configKeyName": "CONF_ENABLE_FEATURE_CATALOG_PROMOTION",
            "configKeyValue": "FALSE",
            "brandId": null,
            "label": "Enable catalog promotion feature for a brand or organization."
        },
        {
            "configKeyName": "CONF_CATALOG_PROMOTION_BUFFER_END_TIME_MINUTES",
            "configKeyValue": "5",
            "brandId": null,
            "label": "Add buffer time in minutes to expiry date of a catalog promotion while issuing a reward."
        },
        {
            "configKeyName": "CONF_START_OF_THE_WEEK_FOR_ORG_RESTRICTION",
            "configKeyValue": "MONDAY",
            "brandId": null,
            "label": "Add the start of the week for the org level restrictions, this will be applied to all org level restrictions with Week configurations"
        },
        {
            "configKeyName": "CONF_SEND_REWARD_EXPIRY_NOTIFICATION_ENABLED",
            "configKeyValue": "true",
            "brandId": null,
            "label": "Key to enable or disable the expiry notification for rewards. If enabled, the system will send expiry notification for rewards after setting the NUMBER_OF_DAYS_BEFORE_EXPIRY."
        },
        {
            "configKeyName": "CONF_SEND_EXPIRY_NOTIFICATION_FOR_REWARD_TIME",
            "configKeyValue": "16:00",
            "brandId": null,
            "label": "Key to set the time of the day to send the expiry notification for rewards."
        }
    ]
}
```

# API-specific errors

| Error code | Description                                     |
| :--------- | :---------------------------------------------- |
| 3004       | Brand not found. Pass a valid brand identifier. |
| 3011       | Brand or config key is incorrect                |