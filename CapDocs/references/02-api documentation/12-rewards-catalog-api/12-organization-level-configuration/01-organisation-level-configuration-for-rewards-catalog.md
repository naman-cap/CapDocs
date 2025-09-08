---
title: Organisation Level Configuration for Rewards Catalog
excerpt: ''
api:
  file: v1.json
  operationId: organisation-level-configuration-for-rewards-catalog
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
This API allows you to set the org's config for Rewards Catalog.

> 👍 Note
>
> * For detailed information about our APIs and for hands-on testing, refer documentation in [API overview](https://docs.capillarytech.com/reference/apioverview) and step-by-step guide on making your first API call in [Make your first API call](https://docs.capillarytech.com/reference/make-your-first-api-call).

# Prerequisites

*   Authentication: Basic or OAuth authentication
*   Default access group

# Resource information

|                        |                                          |
| :--------------------- | :--------------------------------------- |
| URI                    | api_gateway/rewards/core/v1/brand/config |
| HTTP Method            | POST                                     |
| Pagination             | No                                       |
| Batch support          | No                                       |
| Rate limit information | None                                     |

# API endpoint example

`https://eucrm.cc.capillarytech.com/api_gateway/rewards/core/v1/brand/config`

# Supported Configuration Values

| Config Key Name                                | Description                                                                                                                                                                                                                                                                                               |
| :--------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| CONF_START_OF_THE_WEEK_FOR_ORG_RESTRICTION     | To add the start of the week for the org level restrictions, this will be applied to all org level restrictions with Week configurations. The default values may be:- MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY, SUNDAY. By default, the start day will be MONDAY.                           |
| CONF_SEND_REWARD_EXPIRY_NOTIFICATION_ENABLED   | To enable or disable the expiry notification for rewards. If enabled, the system will send expiry notification for rewards after setting the NUMBER_OF_DAYS_BEFORE_EXPIRY. The default value may be True or False.                                                                                        |
| CONF_SEND_EXPIRY_NOTIFICATION_FOR_REWARD_TIME  | To set the time of the day to send the expiry notification for rewards. The default timing for sending the event is 16:00 (HH:MM).                                                                                                                                                                        |
| CONF_EXT_POINTS_VENDOR                         | To enable a third-party vendor for points redemption. The default value may be True or False.                                                                                                                                                                                                             |
| CONF_ENABLE_FEATURE_CATALOG_PROMOTION          | To enable the catalog promotion feature for a brand or organization. The default value may be True or False.                                                                                                                                                                                              |
| CONF_CATALOG_PROMOTION_BUFFER_END_TIME_MINUTES | To add buffer time in minutes to the expiry date of a catalog promotion while issuing a reward. The integer value representing minutes can range from 0 to 30 (MM).                                                                                                                                       |
| CONF_ENABLE_ORG_TIMEZONE                       | Enables organization-specific timezone handling for all reward constraint evaluations. When set to `true`, calculations for daily, weekly, monthly, and rolling windows will use the organization's configured timezone. If `false` (the default), calculations are based on the server's timezone (UTC). |

# Request body parameters

| Parameter      | Data Type | Description                                                                                                                               |
| -------------- | --------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| configKeyName  | String    | The name of the configuration setting which you want to enable.                                                                           |
| configKeyValue | String    | The value of the configuration setting.                                                                                                   |
| brandId        | Integer   | You can use the [API](https://eu.api.capillarytech.com/api_gateway/rewards/core/v1/brand/getAll) and retrieve the brand ID of your brand. |
| label          | String    | A descriptive note or label regarding the start date of the restriction.                                                                  |

<br />

```json To configure the start week for org restriction
{
    "configKeyName": "CONF_START_OF_THE_WEEK_FOR_ORG_RESTRICTION",
    "configKeyValue": "SUNDAY",
    "brandId": 47
}
```
```json To Enable Reward Expiry Notification
{
    "configKeyName": "CONF_SEND_REWARD_EXPIRY_NOTIFICATION_ENABLED",
    "configKeyValue": "true",
    "brandId": 1
}
```
```json To set Reward Expiry TIme
{
    "configKeyName": "CONF_SEND_EXPIRY_NOTIFICATION_FOR_REWARD_TIME",
    "configKeyValue": "16:00",
    "brandId": 1
}
```

<br />

# Response parameters

| Parameter      | Data Type | Description                                                                                                                               |
| -------------- | --------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| success        | Boolean   | Indicates if the API call was successful.                                                                                                 |
| code           | Integer   | A code representing the API status.                                                                                                       |
| message        | String    | A description of the API call.                                                                                                            |
| configKeyName  | String    | The name of the configuration setting.                                                                                                    |
| configKeyValue | String    | The value assigned to the configuration setting.                                                                                          |
| brandId        | Integer   | You can use the [API](https://eu.api.capillarytech.com/api_gateway/rewards/core/v1/brand/getAll) and retrieve the brand ID of your brand. |
| label          | String    | A descriptive label explaining the configuration setting, its implications, and the context where it applies.                             |

<br />

```json Response: To configure the start week for org restriction
{
    "status": {
        "success": true,
        "code": 3008,
        "message": "Org config updated successfully"
    },
    "configList": [
        {
            "configKeyName": "CONF_START_OF_THE_WEEK_FOR_ORG_RESTRICTION",
            "configKeyValue": "TUESDAY",
            "brandId": null,
            "label": "Add the start of the week for the org level restrictions, this will be applied to all org level restrictions with Week configurations"
        }
    ]
}
```
```json Response: To Enable Reward Expiry Notification
{
    "status": {
        "success": true,
        "code": 3008,
        "message": "Org config updated successfully"
    },
    "configList": [
        {
            "configKeyName": "CONF_SEND_REWARD_EXPIRY_NOTIFICATION_ENABLED",
            "configKeyValue": "true",
            "brandId": 1,
            "label": "Key to enable or disable the expiry notification for rewards. If enabled, the system will send expiry notification for rewards after setting the NUMBER_OF_DAYS_BEFORE_EXPIRY."
        }
    ]
}
```
```json Response: To set Reward Expiry TIme
{
    "status": {
        "success": true,
        "code": 3008,
        "message": "Org config updated successfully"
    },
    "configList": [
        {
            "configKeyName": "CONF_SEND_EXPIRY_NOTIFICATION_FOR_REWARD_TIME",
            "configKeyValue": "16:00",
            "brandId": 1,
            "label": "Key to set the time of the day to send the expiry notification for rewards."
        }
    ]
}
```
```json Failure: Brand or Config Key is incorrect
{
    "status": {
        "success": false,
        "code": 3011,
        "message": "Brand or config key not found"
    },
    "configList": [
        {
            "configKeyName": "CONF_SN_ENABLED",
            "configKeyValue": "true",
            "brandId": 1,
            "label": null
        }
    ]
}
```

<br />

# API- specific errors

| Error code | Description                                     |
| :--------- | :---------------------------------------------- |
| 3004       | Brand not found. Pass a valid brand identifier. |
| 3011       | Brand or config key is incorrect                |
