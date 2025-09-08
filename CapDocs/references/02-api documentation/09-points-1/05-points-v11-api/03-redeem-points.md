---
title: Redeem Points
excerpt: This API enables you to redeem points of a customer.
api:
  file: customer-v11.json
  operationId: redeem-points
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
> ❗️ Make sure you have the appropriate access control configured. For more information, see [access group documentation](https://docs.capillarytech.com/docs/access-group).

# API endpoint

`/v1.1/points/redeem`

# Prerequisites

*   Basic Authentication
*   Default access group

## Resource information

| URI                   |       |
| :-------------------- | :---- |
| HTTP method           | GET   |
| Authentication        | Basic |
| Pagination supported? | NO    |
| Rate limit            | YES   |
| Batch support         | NO    |

<Note title="Note">
s
If you are using validation code, make sure to use it within the validity period.

* You can check the validity set for the validation code in OTP code validity period field on **InTouch** > **Settings** > **Organization Setup** > **OTPConfigurations page**.
</Note>

# Body parameters

| Parameter            | Data Type | Description                                                                                                                                                                                                                                                                                        |
| -------------------- | --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `redeem`             | Array     | An array containing objects representing individual redemption transactions                                                                                                                                                                                                                        |
| `points_redeemed`    | Number    | The number of points that were redeemed in the transaction                                                                                                                                                                                                                                         |
| `transaction_number` | String    | Unique identifier for the transaction.                                                                                                                                                                                                                                                             |
| `customer`           | Object    | An object containing information about the customer involved in the transaction                                                                                                                                                                                                                    |
| `mobile*`            | String    | The mobile phone number of the customer                                                                                                                                                                                                                                                            |
| `notes`              | String    | Notes or additional information about the transaction                                                                                                                                                                                                                                              |
| `validation_code`    | String    | Validation code for the transaction.                                                                                                                                                                                                                                                               |
| `custom_fields`      | Object    | Organization-specific custom fields. The [custom field must exist](https://docs.capillarytech.com/docs/data-fields#/custom-fields) in the organization. See the documentation [points redemption custom fields](https://docs.capillarytech.com/docs/redemption-custom-field) for more information. |

# Query parameters

| Parameter                                   | Data Type | Description                                                                                                                                                                                                         |
| ------------------------------------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `user_group2_primary_user_id`               | String    | Unique user ID of the primary member of the group associated with the points to redeem.                                                                                                                             |
| `user_group2_id`                            | String    | Unique ID of the group associated with the points to redeem.                                                                                                                                                        |
| `user_group2_external_id`                   | String    | Unique external ID of the group associated with the points to redeem.                                                                                                                                               |
| `user_group2_primary_user_source`           | String    | Source in which the primary user’s identifier is available. <br />Allowed values: `FACEBOOK`, `WEB_ENGAGE`, `WECHAT`, `INSTORE`, `MARTJACK`, `TMALL`, `TAOBAO`, `JD`, `ECOMMERCE`, `WEBSITE`, `LINE`, `MOBILE_APP`. |
| `user_group2_primary_user_accountId`        | String    | Account ID of the source with multiple accounts such as WECHAT.                                                                                                                                                     |
| `user_group2_primary_user_identifier_type`  | String    | Identifier type used for the primary member. <br />Allowed values: `mobile`, `email`, `cardnumber`, `cardExternalId`, `id`.                                                                                         |
| `user_group2_primary_user_identifier_value` | String    | Value of the specified identifier type.                                                                                                                                                                             |
| `skip_validation`                           | Boolean   | Pass `true` to skip customer validation to redeem points.                                                                                                                                                           |
| `program_id`                                | String    | Unique ID of the program from which points need to be redeemed. Applicable for orgs with multi-loyalty program enabled.                                                                                             |
| `validation_type`                           | String    | Validation type used to redeem points. <br />Allowed values: `MISSED_CALL`, `SMS`.                                                                                                                                  |

> ❗️ Note
>
> You must provide at least one of the parameters marked with \*\* for group level points redemption.

# Response parameter

| Parameter                      | Data Type        | Description                                                                                      |
| ------------------------------ | ---------------- | ------------------------------------------------------------------------------------------------ |
| `response`                     | Object           | The root object that contains all the details of the response.                                   |
| `status`                       | Object           | An object containing the status details of the response.                                         |
| `success`                      | String           | A string indicating the success status of the response.                                          |
| `code`                         | Number           | The HTTP status code associated with the response.                                               |
| `message`                      | String           | A general message providing additional information about the status of the response.             |
| `responses`                    | Object           | An object containing detailed response data.                                                     |
| `points`                       | Object           | An object containing detailed information about the points involved in the transaction.          |
| `mobile`                       | String           | The mobile phone number associated with the account involved in the transaction.                 |
| `email`                        | String           | The email address associated with the account involved in the transaction.                       |
| `external_id`                  | String           | An external identifier for the transaction.                                                      |
| `user_id`                      | String           | The user ID associated with the account involved in the transaction.                             |
| `redemption_id`                | String           | A unique identifier for the redemption transaction.                                              |
| `points_redeemed`              | String           | The number of points that were redeemed in the transaction.                                      |
| `redemption_purpose`           | String           | The purpose of the redemption.                                                                   |
| `redeemed_value`               | Number           | The value of the points that were redeemed.                                                      |
| `redeemed_local_value`         | Number           | The local value of the points that were redeemed.                                                |
| `balance`                      | Number           | The remaining balance of points in the account after the redemption.                             |
| `side_effects`                 | Object           | An object containing information about any side effects of the redemption.                       |
| `effect`                       | Array of Objects | An array containing objects representing individual effects of the redemption.                   |
| `id`                           | Number           | A unique identifier for an individual effect.                                                    |
| `case_value`                   | String           | A string indicating whether a certain case is true for the effect.                               |
| `num_points`                   | Number           | The number of points involved in the effect.                                                     |
| `currency_value`               | Number           | The currency value associated with the effect.                                                   |
| `validation_code`              | String           | A validation code associated with the effect.                                                    |
| `points_redemption_summary_id` | String           | A summary ID associated with the points redemption.                                              |
| `redeemed_on_bill_number`      | String           | The bill number associated with the redemption.                                                  |
| `redeemed_on_bill_id`          | Number           | The bill ID associated with the redemption.                                                      |
| `type`                         | String           | The type of effect.                                                                              |
| `item_status`                  | Object           | An object containing the status details of the item in the response.                             |
| `code`                         | Number           | The HTTP status code associated with the item status (800 indicates points were redeemed).       |
| `message`                      | String           | A general message providing additional information about the status of the item in the response. |

# Error code

| Error Code                                                                | Description                                                                                                         |
| :------------------------------------------------------------------------ | :------------------------------------------------------------------------------------------------------------------ |
| 3316 - group redemption action executed from non group redemption payload | Create a JIRA ticket to the Product Support team and disable the configuration ENABLE\_GROUP\_PROGRAMS\_REDEMPTION. |

# Api Specific Error Code

| Error Code | Description                                    | Reason                                                                                                                                                                                                                                                            |
| :--------- | :--------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 801        | Trying to redeem invalid points                | Invalid points parameter passed (e.g, negative points value)                                                                                                                                                                                                      |
| 878        | Invalid decimal precision in points redeemed   | This error occurs when the points redeemed field contains a value with more than three decimal places (e.g., "1.1111" or "10.12345"). The API expects this field to have a maximum of three decimal places. If this precision is exceeded, error 878 is returned. |
| 1632       | Invalid or non-existent groupId                | The groupId provided is missing, invalid, or does not exist.                                                                                                                                                                                                      |
| 828        | Points redemption not configured for the group | The group does not have points redemption set up in the system.                                                                                                                                                                                                   |