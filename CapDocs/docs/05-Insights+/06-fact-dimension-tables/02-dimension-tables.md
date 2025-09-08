---
title: Dimension tables
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
Dimension tables contain descriptive attributes or characteristics of the data in the fact table. These attributes provide context for analysing the data in the fact table. In the current example, For example, a dimension table in a sales environment might contain details about products (product ID, product name, category, brand) or customers (customer ID, name, address).

## Points Promotion

**Databricks table name:** points_promotions

This table captures the metadata of the promotion associated with the points allocation deduction.

| Column Name            | Data Type | Description                                                                                                                                              |
| ---------------------- | --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| name                   | String    | Name of the promotion associated with the points.                                                                                                        |
| id                     | Bigint    | Unique identifier of the table, set by Capillary system.                                                                                                 |
| identifier             | String    | Unique identifier set by the brand.                                                                                                                      |
| auto_update_promotion  | Bigint    | Date and time when the corresponding record in the points_promotions table available at the source was last updated. It is in the Unix timestamp format. |
| points_promotion_id    | Bigint    | Identifier for the promotion.                                                                                                                            |
| type                   | String    | Type of the promotion, such as bill level or customer level.                                                                                             |
| is_active              | Integer   | Indicates if the promotion is active or not (values 1 for yes, 0 for no).                                                                                |
| event_name             | String    | Name of the event linked to the points promotion.                                                                                                        |
| behavioral_event_name  | String    | Name of the behavioral event linked to the points promotion.                                                                                             |
| targetGroupIds         | String    | Identifier for the target group.                                                                                                                         |
| earnRestrictions       | String    | Defines conditions or limitations that determine how and when points can be earned for a particular promotion.                                           |
| end_date               | String    | Promotion end date, in YYYY-MM-DD format.                                                                                                                |
| program_id             | String    | Identifier of the program associated with the promotion.                                                                                                 |
| issualRestrictions     | String    | Defines conditions that determine the issuance of a promotion.                                                                                           |
| expiryRestrictions     | String    | Defines conditions that determine the expiration of points.                                                                                              |
| redemptionRestrictions | String    | Defines conditions that determine the redemption of points.                                                                                              |
| description            | String    | Description of the promotion.                                                                                                                            |
| start_date             | String    | Promotion start date, in YYYY-MM-DD format.                                                                                                              |
| stackability           | String    | Indicates if the promotion is stackable (true for yes, false null for no). Stackability rules define which promotions can be used together.              |

## Points Awarded Type

**Databricks table name:** points_awarded_type

This table captures the type of points that are awarded.

| Column Name | Data Type | Description                                                                                   |
| ----------- | --------- | --------------------------------------------------------------------------------------------- |
| id          | Bigint    | Unique identifier of the table.                                                               |
| type        | String    | Indicates the type of points that are awarded. Possible values are listed in the table below. |

Possible values for the awarded type:

| Value                            | Description                                                                        |
| -------------------------------- | ---------------------------------------------------------------------------------- |
| Point_Awarded                    | Regular points awarded for making a transaction.                                   |
| Point_Awarded_Bill_Promotion     | Promotional points awarded in addition to regular points at the transaction level. |
| Point_Awarded_Lineitem           | Regular points awarded for purchasing a specific product.                          |
| Point_Awarded_Lineitem_Promotion | Promotional points awarded in addition to regular points at the line item level.   |
| Point_Awarded_Customer_Promotion | Promotional points awarded in addition to regular points at the customer level.    |

## Points Category

**Databricks table name:** points_category

This table captures the metadata of the points category.

| Column Name                 | Data Type | Description                                                                                                                                                                          |
| --------------------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| category_id                 | Bigint    | Unique identifier of the points category table.                                                                                                                                      |
| redeemtion_type             | String    | Type of redemption. Possible values are - Redeemable, and Non-redeemable.                                                                                                            |
| auto_update_program         | Bigint    | Date and time when the program table, available at the source was last updated. It is in the Unix timestamp format.                                                                  |
| category_type               | String    | Category against which the points are awarded or deducted. Possible values are - Regular points, Trackers, Promised points, Alternate currencies, and External trigger based points. |
| auto_update_points_category | Bigint    | Date and time when the points_category table, available at the source was last updated. It is in the Unix timestamp format.                                                          |
| category_name               | String    | Name of the points category.                                                                                                                                                         |
| sub_category_type           | String    | Sub category against which the points are awarded or deducted.                                                                                                                       |
| alternate_currency_name     | String    | Name of the alternate currency, such as tier points, coins, stars, credits.                                                                                                          |

At Capillary backend, points categories are classified into four types, with three expected to be visible on the front-end exports. Following table gives the category types:

<Table>
  <thead>
    <tr>
      <th>
        Value
      </th>

      <th>
        Description
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        regular_points
      </td>

      <td>
        Redeemable points.
      </td>
    </tr>

    <tr>
      <td>
        trackers
      </td>

      <td>
        These will not appear in exports. Trackers are excluded from the point fact.
      </td>
    </tr>

    <tr>
      <td>
        promised_points
      </td>

      <td>
        Strategy-based based points that accrue with a delay based on a specified return window. Their conversion date is known and available in the "awarded_date" field.
      </td>
    </tr>

    <tr>
      <td>
        external_trigger_based_points
      </td>

      <td>
        Promised points that convert to regular points upon the receipt of an external trigger. An external trigger can be a transactional event or a [behavioural event](https://docs.capillarytech.com/docs/setup-test-behavioral-events).

        Refer to the documentation on [Convert Promised Points API](https://docs.capillarytech.com/reference/points-unlock-api) for more information on converting points.
      </td>
    </tr>
  </tbody>
</Table>

When handling promised points, the categorization must be done based on points categories only (and not based on non-redeemable values during query writing).
Screen reader support is enabled.

## Points events type

**Databricks table name:** points_event_type

This table captures the type of points event (awarded or deducted).

| Column Name | Data Type | Description                                            |
| ----------- | --------- | ------------------------------------------------------ |
| id          | Bigint    | Unique identifier of the table.                        |
| type        | String    | Indicates whether the points were awarded or deducted. |

## Deduction type

**Databricks table name:** deduction_type

This table captures the type of points deduction.

| Column Name | Data Type | Description                                                                            |
| ----------- | --------- | -------------------------------------------------------------------------------------- |
| id          | Bigint    | Unique identifier of the table.                                                        |
| type        | String    | Indicates the type of points deduction. Possible values are listed in the table below. |

Possible values for the type of points deduction:

| Value                         | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ----------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| cancelled                     | Points that are cancelled.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| expired                       | Points that are expired. These appear against the awarded_ref_id and reduce the customer's point balance in the awarded program.                                                                                                                                                                                                                                                                                                                                                                                            |
| migration                     | Not in use.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| redeemed                      | Points that are redeemed by the customer.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| return                        | Points that are deducted from a customers balance when a transaction, for which points were allocated, is returned before the points are redeemed or expired.                                                                                                                                                                                                                                                                                                                                                               |
| redeemed_by_transfer          | Points transferred from one customer's account to another. The original account reflects this deduction. To know more, refer [redeemed_by_transfer.](https://docs.capillarytech.com/docs/1-points-awardeddeducted-scenarios#redeemed_by_transfer)                                                                                                                                                                                                                                                                           |
| redemption_reversal           | Scenario where a customer redeems points for a transaction but then decides not to use those points, leading to a reversal of the redemption. Also applies if the transaction on which the points were redeemed is reversed, which restores the redeemed points to the customers balance. To know more, refer [redemption_reversal](https://docs.capillarytech.com/docs/1-points-awardeddeducted-scenarios#redemption_reversal).                                                                                            |
| expiry_reverted               | Points deducted due to expiry but returned due to a subsequent transaction return. This follows a sequence of deduction and credit entries associated with the same awarded_ref_id. To know more, refer [expiry_reverted](https://docs.capillarytech.com/docs/1-points-awardeddeducted-scenarios#expiry_reverted).                                                                                                                                                                                                          |
| redemption_reverted           | Reversal of points redeemed against a bill when that bill is returned. To know more, refer [redemption_reverted](https://docs.capillarytech.com/docs/1-points-awardeddeducted-scenarios#redemption_reverted).                                                                                                                                                                                                                                                                                                               |
| redeemed_by_transfer_reverted | Points transferred to another customer but reversed when the original transaction associated with those points is returned. To know more, refer [redeemed_by_transfer_reverted](https://docs.capillarytech.com/docs/1-points-awardeddeducted-scenarios#redeemed_by_transfer_reverted).                                                                                                                                                                                                                                      |
| redeemed_by_conversion        | Scenario where delayed accrual is enabled, and promised points are converted into regular points after a specified delay period. When the delay period ends, a bulk job runs, converting the promised points into regular points. A redeemed_by_conversion entry is created in the deduction table, indicating that the points are deducted from the promised points category. To know more, refer [redeemed_by_conversion](https://docs.capillarytech.com/docs/1-points-awardeddeducted-scenarios#redeemed_by_conversion). |
| return_historical             | Scenario involving partial returns that occur to promised points before they are converted to regular points. When a partial return is made during the promised points phase, the corresponding portion of points is deducted under return_historical to account for the returned transaction. To know more, refer [return_historical](https://docs.capillarytech.com/docs/1-points-awardeddeducted-scenarios#return_historical).                                                                                           |
| manual_adjustment             | Scenario where manual adjustment of points is made in a customer's account when points need to be deducted due to errors or unlinked transactions. To know more, refer [manual_adjustment](https://docs.capillarytech.com/docs/points-deductions#manual-points-adjustment).                                                                                                                                                                                                                                                 |

## Redemption type

**Databricks table name:** redemption_type

This table captures the type of points redemption.

| Column Name     | Data Type | Description                                                                                                                    |
| --------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------ |
| id              | Bigint    | Unique identifier of the table.                                                                                                |
| redemption_type | String    | Identifier for the points redemption type. Possible values are redemption, reversal, group_redemption, and reversal_on_return. |

## Date

**Databricks table name:** date

This table captures the event date, including the year, week of the year, and other relevant time details, enabling time-based analysis and mapping of the specific event.

| Column Name      | Data Type | Description                                                                              |
| ---------------- | --------- | ---------------------------------------------------------------------------------------- |
| date_id          | Bigint    | Unique identifier for a date in the table.                                               |
| date             | String    | Represents the date in the format DD-MM-YYYY (e.g., 2018-01-01).                         |
| day_of_month     | Integer   | Day component of the date (range: 1 to 31).                                              |
| week_of_year     | Integer   | Calendar week of the year (range: 1 to 52).                                              |
| month            | String    | Month and year (e.g., Jan 2018).                                                         |
| year             | Integer   | Year in YYYY format.                                                                     |
| quarter          | String    | Quarterly split of the calendar year (e.g., Q1: Jan, Feb, Mar; Q2: Apr, May, Jun; etc.). |
| quarter_no       | Integer   | Cumulative quarter count from the beginning of the date calendar.                        |
| year_quarter_no  | Integer   | Quarter number of the year (1 for Q1, 2 for Q2, etc.).                                   |
| week_number      | Integer   | Cumulative week count from the beginning of the date calendar.                           |
| week_start_date  | String    | Start date of the calendar week in DD-MM-YYYY format.                                    |
| week_end_date    | String    | End date of the calendar week in DD-MM-YYYY format.                                      |
| day_of_week      | String    | Day of the week (Monday to Sunday).                                                      |
| day_of_week_no   | Integer   | Day number of the week (1 for Monday to 7 for Sunday).                                   |
| month_no         | Integer   | Cumulative month count from the beginning of the date calendar.                          |
| month_no_of_year | Integer   | Month number of the year (1 for January, 2 for February, etc.).                          |
| month_of_year    | String    | Month of the year (January to December).                                                 |

## Zone till

**Databricks table name:** zone_tills

This table captures the metadata of the point-of-sale (POS) terminal associated with the store. The till id distinguishes one checkout location from another within the same store, aiding in transaction tracking and management. For example:
By mapping the information in this table, brands can conduct store wise performance analysis.

| Column Name                     | Data Type | Description                                                                                                                                                                                                                                   |
| ------------------------------- | --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| store_country                   | String    | Country where the store is located.                                                                                                                                                                                                           |
| external_id_1                   | String    | Store identifier from the brand side.                                                                                                                                                                                                         |
| store                           | String    | Store where the transaction was done.                                                                                                                                                                                                         |
| auto_update_till_parent         | Bigint    | Date and time when the corresponding record in till_parent table, available at the source was last updated. It is in the Unix timestamp format.                                                                                               |
| area                            | String    | Area of the store location.                                                                                                                                                                                                                   |
| store_name                      | String    | Store name given by Capillary System.                                                                                                                                                                                                         |
| store_city                      | String    | City where the store belongs.                                                                                                                                                                                                                 |
| store_state                     | String    | State where the store belongs.                                                                                                                                                                                                                |
| till                            | String    | Name of the point-of-sale (POS) terminal within a store.                                                                                                                                                                                      |
| auto_update_till_store_relation | Bigint    | Date and time when the corresponding record in the till_store_relation table, available at the source was last updated. It is in the Unix timestamp format.                                                                                   |
| till_id                         | Bigint    | Unique identifier assigned to the point-of-sale (POS) terminal within a store.                                                                                                                                                                |
| type                            | String    | Identifies whether a store is genuine or used for testing. If the store is set to "general," it contributes real data. If the store is set to "admin," it is a test environment with simulated data, and needs to be excluded from reporting. |
| till_description                | String    | Description of the point of sale (till).                                                                                                                                                                                                      |
| auto_update_till                | Bigint    | Date and time when the corresponding record in the till table, available at the source was last updated. It is in the Unix timestamp format.                                                                                                  |
| store_channel                   | String    | Channel through which the store operates. Possible values are online and offline.                                                                                                                                                             |
| external_id                     | String    | Store identifier from the brand side.                                                                                                                                                                                                         |
| is_billable                     | String    | Indicates whether the store is billable or not.                                                                                                                                                                                               |
| store_id                        | Bigint    | Unique identifier for the store.                                                                                                                                                                                                              |
| is_active                       | String    | Status indicating whether the store is active or inactive.                                                                                                                                                                                    |
| auto_update_store               | Bigint    | Date and time when the corresponding record in the store table, available at the source was last updated. It is in the Unix timestamp format.                                                                                                 |
| store_description               | String    | Description of the store, used for external client nomenclature.                                                                                                                                                                              |
| latitude                        | String    | Latitude coordinate of the store's location.                                                                                                                                                                                                  |
| timezone                        | String    | Timezone of the store's location.                                                                                                                                                                                                             |
| external_id_2                   | String    | Store identifier from the brand side.                                                                                                                                                                                                         |
| till_name                       | String    | Name of the point of sale (till).                                                                                                                                                                                                             |
| zone_name                       | String    | Name of the zone where the store is located.                                                                                                                                                                                                  |

## Time

**Databricks table name:** time

This table captures the event time, such as the hour of the day, minute of the day, etc., enabling time-based analysis and mapping of the specific event.

| Column Name   | Data Type | Description                                       |
| ------------- | --------- | ------------------------------------------------- |
| time_id       | Integer   | Unique identifier of a date in the table.         |
| time          | String    | Represents time in HH:MM:SS For example, 12:30:12 |
| hour_of_day   | Integer   | Hour of the day (0 to 24)                         |
| minute_of_day | Integer   | Minute of day (0 to 60)                           |
| day_shift     | String    | Shift of the day (Morning Afternoon Night)        |
| day_shift_no  | Integer   | Shift Number of day (1 to 5)                      |
| hour_range    | String    | Hour range of the day  (0-1, 1-2, and so on)      |

## Program

**Databricks table name:** program

This dimension tables captures the metadata of loyalty programs.

| Column Name                  | Data Type | Description                                                                                                        |
| ---------------------------- | --------- | ------------------------------------------------------------------------------------------------------------------ |
| points_currency_ratio        | Integer   | Ratio of points to currency. It indicates how many points are equivalent to one unit of currency.                  |
| auto_update_time             | String    | Date and time when the program table available at the source was last updated. It is in the Unix timestamp format. |
| redeemable_point_category_id | Integer   | Category ID for points that can be redeemed.                                                                       |
| program_id                   | Integer   | Unique identifier of the table.                                                                                    |
| is_active                    | String    | Indicates whether the program is currently active or not.                                                          |
| program_name                 | String    | Name of the program.                                                                                               |
| is_default                   | String    | Indicates whether the program is the default program.                                                              |
| description                  | String    | Description for the program.                                                                                       |

## Communication channel

**Databricks table name:** communication_channel

This table captures the metadata of the channel through which the campaign related communication is sent to the customer. This information can be used to determine the communication channels (SMS, email, etc.) that are most effective for different users.

| Column Name   | Data Type | Description                                                                                                              |
| ------------- | --------- | ------------------------------------------------------------------------------------------------------------------------ |
| id            | Integer   | Unique identifier of the table.                                                                                          |
| channel       | String    | Indicates the channel used for communication. Possible values are - SMS, email, voicemail, WeChat, Facebook, Viber, etc. |
| activity_name | String    | Categorizes the channel used for communication.                                                                          |

## Communication client

**Databricks table name:** communication_client

This table captures the metadata of the client associated with the communication.

| Column Name | Data Type | Description                                           |
| ----------- | --------- | ----------------------------------------------------- |
| id          | Integer   | Unique identifier of the table.                       |
| name        | String    | Name of the client associated with the communication. |
| description | String    | Description of the client.                            |

## Credit type

**Databricks table name:** credit_type

This table captures the type of communication credit.

| Column Name | Data Type | Description                                                                                 |
| ----------- | --------- | ------------------------------------------------------------------------------------------- |
| id          | Integer   | Unique identifier of the table.                                                             |
| values      | String    | Indicates the type of credit transaction. Possible values are, credits - Added, or Removed. |

## Custom field info

**Databricks table name:** custom_fields_info

This table captures the metadata of custom fields, including their unique identifiers, types, names, and scopes. It also records the status of each custom field.

| Column Name               | Data Type | Description                                                                                                                                                              |
| ------------------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| auto_update_custom_fields | Bigint    | Date and time when the corresponding record in the custom field table available at the source was last updated. It is in the Unix timestamp format.                      |
| cf_id                     | Bigint    | Unique identifier for the custom field.                                                                                                                                  |
| is_disabled               | Integer   | Indicates if the custom field is enabled or disabled.                                                                                                                    |
| type                      | String    | Type of the custom field. Possible values are - text, select, text area, date picker, radio, and check box.                                                              |
| name                      | String    | Name of the custom field.                                                                                                                                                |
| cf_scope                  | String    | Scope of the custom field. Possible values are - store custom field, zone custom field, customer card, customer feedback, loyalty transaction, and loyalty registration. |

## Admin users

**Databricks table name:** admin_users

This tables captures the metadata of the admin user associated with the event.

| Column Name | Data Type | Description                       |
| ----------- | --------- | --------------------------------- |
| is_active   | Integer   | Indicates if the user is active.  |
| is_deleted  | Integer   | Indicates if the user is deleted. |
| middle_name | String    | Middle name of the admin user.    |
| first_name  | String    | First name of the admin user.     |
| email       | String    | Email address of the admin user.  |
| id          | Bigint    | Unique identifier of the table.   |
| last_name   | String    | Last name of the admin user.      |

## Nsadmin priority

**Databricks table name:** nsadmin_priority

This table captures the priority type of the nsadmin messages.

| Column Name | Data Type | Description                                                                           |
| ----------- | --------- | ------------------------------------------------------------------------------------- |
| id          | Integer   | Unique identifier of the table.                                                       |
| priority    | String    | Captures the nsadmin message priority. Possible values are - High, default, and bulk. |

## Gateway

**Databricks table name:** gateway

This table captures the metadata of the gateway used for communication.

| Column Name          | Data Type | Description                                                                                                                                    |
| -------------------- | --------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| short_name           | String    | Short name of the communication gateway reference in communication settings, e.g., airtel_trans, airtel_bulk.                                  |
| auto_update_gateways | Bigint    | Date and time when the corresponding record in the gateway table available at the source was last updated. It is in the Unix timestamp format. |
| id                   | Bigint    | Unique identifier of the table.                                                                                                                |
| full_name            | String    | Full name of the communication gateway.                                                                                                        |
| host_name            | String    | URL used to post messages to the gateway.                                                                                                      |

## Internal status

**Databricks table name:** internal_status

This table captures the metadata of the call task status.

| Column Name     | Data Type | Description                                                                                      |
| --------------- | --------- | ------------------------------------------------------------------------------------------------ |
| external_status | String    | Gives the external status of the call task. Possible values are - Open, in progress, and closed. |
| id              | Bigint    | Unique identifier of the table.                                                                  |
| internal_status | String    | Gives the internal status of the call task. Possible values are - Open, and complete.            |

## Tasks

**Databricks table name:** tasks

This table captures the metadata of the call tasks.

| Column Name                   | Data Type | Description                                                                                                                                              |
| ----------------------------- | --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| action_type                   | String    | Type of action required for the task. Possible values are - call, and WhatsApp.                                                                          |
| start_date                    | String    | The date when the task is scheduled to start.                                                                                                            |
| auto_update_task_campaign_map | Bigint    | Date and time when the corresponding record in the task campaign map table available at the source was last updated. It is in the Unix timestamp format. |
| task_id                       | Bigint    | Unique identifier for the task.                                                                                                                          |
| description                   | String    | Description of the task.                                                                                                                                 |
| campaign                      | String    | Name of the campaign associated with the task.                                                                                                           |
| auto_update_campaign_base     | Bigint    | Date and time when the corresponding record in the campaign base table available at the source was last updated. It is in the Unix timestamp format.     |
| created_by_type               | String    | Type of entity that created the task, e.g. user admin.                                                                                                   |
| end_date                      | String    | The date by which the task needs to be completed.                                                                                                        |
| valid_days_from_create        | Integer   | Number of days from the creation date within which the task needs to be closed.                                                                          |
| auto_update_tasks             | Bigint    | Date and time when the corresponding record in the tasks table available at the source was last updated. It is in the Unix timestamp format.             |

## Loyalty type

**Databricks table name:** loyalty_type

Each row in this table captures the loyalty type of the customer.

| Column Name | Data Type | Description                                                                                                                           |
| ----------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| id          | Bigint    | Unique identifier of the table.                                                                                                       |
| type        | String    | Loyalty type of the customer. Possible values are - loyalty non loyalty not registered (who have not provided their contact details). |

## Order Channel

**Databricks table name:** order_channel

This table captures the metadata of the order channel associated with the transaction.

| Column Name      | Data Type | Description                                                                                                                                                                                                              |
| ---------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| id               | Bigint    | Unique identifier of the table.                                                                                                                                                                                          |
| order_channel    | String    | Identifier for the order channel with which the order has been placed. It indicates the specific channel through which the transaction was completed. Possible values are - online, in-store, through a mobile app, etc. |
| auto_update_time | Bigint    | Date and time when the corresponding record in the order_channel table, available at the source was last updated. It is in the Unix timestamp format.                                                                    |

## Channel Account

**Databricks table name:** channel_account

This table captures the metadata of the channel account used for the event.

| Column Name                      | Data Type | Description                                                                                                                                                 |
| -------------------------------- | --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| channel                          | String    | Channel where the customer's profile was created. Possible values are - WhatsApp, Web_engage, Mobile_app, Line, and WeChat.                                 |
| channel_account_id               | Bigint    | Identifier for the channel account.                                                                                                                         |
| auto_update_channels             | Bigint    | Date and time when the corresponding record in the channels table available at the source was last updated. It is in the Unix timestamp format.             |
| account_name                     | String    | Name of the account.                                                                                                                                        |
| auto_update_org_channel_accounts | Bigint    | Date and time when the corresponding record in the org_channel_accounts table available at the source was last updated. It is in the Unix timestamp format. |

## Source Profile Type

**Databricks table name:** source_profile_type

This table captures the source used for customer profile creation.

| Column Name | Data Type | Description                                                                                                                                                                |
| ----------- | --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| id          | Bigint    | Unique identifier of the table.                                                                                                                                            |
| type        | String    | Source where the customer's profile was created. If the customer's profile was created in-store, the value will be 'Instore', and if not, the value will be 'Not-instore'. |

## Entity Type

**Databricks table name:** entity_type

This dimension table captures the metadata of the type of entity.

| Column Name | Data Type | Description                                                      |
| ----------- | --------- | ---------------------------------------------------------------- |
| id          | Bigint    | Unique identifier of the table.                                  |
| type        | String    | Type of entity. Possible values are - Customer, and Store staff. |

## State

**Databricks table name:** state

This dimension table captures the metadata of the status of the registration process.

| Column Name | Data Type | Description                                                                                                               |
| ----------- | --------- | ------------------------------------------------------------------------------------------------------------------------- |
| id          | Integer   | Unique identifier of the table.                                                                                           |
| value       | String    | Indicates the status of registration. Possible values are - Completed, executing, failed, queued, temporary failure, etc. |

## Repeat status

**Databricks table name:** repeat_status

Each row in this table captures the repeat status, indicating whether the transaction done by the customer is for the first time or not.

| Column Name | Data Type | Description                                                                               |
| ----------- | --------- | ----------------------------------------------------------------------------------------- |
| id          | Bigint    | Unique identifier of the table.                                                           |
| Status      | String    | Provides the repeat status of the customer. Possible values are - first time, and repeat. |

## Source type

**Databricks table name:** source_type

Each row in this table captures the metadata of the source type, specifying the source of the event (such as, in-store, online, campaigns).

| Column Name | Data Type | Description                                                                                                                  |
| ----------- | --------- | ---------------------------------------------------------------------------------------------------------------------------- |
| id          | Integer   | Unique identifier of the table.                                                                                              |
| Type        | String    | Indicates the source of the event. Possible values are - instore, e-comm, newsletter, campaigns, NCA, WeChat, Facebook, etc. |

## Customer slab

**Databricks table name:** customer_slab

This table captures the metadata of the slab to which a customer belongs.

| Column Name              | Data Type     | Description                                                                                                                                         |
| ------------------------ | ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| slab_name                | String        | Name of the slab. Possible values are - Platinum, diamond, gold, silver, bronze, tier 1, tier 2, member tier, VIP tier, etc.                        |
| slab_no                  | Integer       | Number of the slab.                                                                                                                                 |
| auto_update_program_slab | Unixtimestamp | Date and time when the corresponding record in the program slab table available at the source was last updated. It is in the Unix timestamp format. |
| serial_no                | Integer       | Unique identifier of the table.                                                                                                                     |

## SCD type

**Databricks table name:** scd_type

SCD, or Slowly Changing Dimension, is a type of customer segmentation to track the behaviour of customers over time. This table captures the SCD type used for customer segmentation.

| Column Name | Data Type | Description                                            |
| ----------- | --------- | ------------------------------------------------------ |
| Id          | String    | Unique identifier of the table.                        |
| type        | Integer   | Indicates the SCD type. Possible values are - 1 and 2. |

## Slab change action (slab_change_action)

**Databricks table name:** slab_change_action

This table captures the action associated with the customer's slab change.

| Column Name        | Data Type | Description                                                                                                  |
| ------------------ | --------- | ------------------------------------------------------------------------------------------------------------ |
| Id                 | Bigint    | Unique identifier of the table.                                                                              |
| slab_change_action | String    | Indicates the action associated with the slab change. Possible values are - Upgrade, downgrade, and renewal. |

## Slab change source (slab_change_source)

**Databricks table name:** slab_change_source

This table captures the source associated with the customer's slab change

| Column Name        | Data Type | Description                                                                                                                                 |
| ------------------ | --------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| Id                 | Bigint    | Unique identifier of the table.                                                                                                             |
| slab_change_source | String    | Indicates the source associated with the customer's slab change. Possible values are - Import, merge, rule, strategy, partner program, etc. |

## Upgrade event type

**Databricks table name:** upgrade_event_type

This table captures event that caused the customer's slab upgrade.

| Column Name | Data Type | Description                                                                                                                                                                  |
| ----------- | --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| id          | Integer   | Unique identifier of the table.                                                                                                                                              |
| category    | String    | Category of the slab upgrade event.                                                                                                                                          |
| name        | String    | Type of event that caused the customer's slab upgrade. Possible values are - Customer registration, new bill, points redemption, voucher redemption, campaign referral, etc. |

## Return type

**Databricks table name:** return_type

This dimension table captures the metadata of the type of return transaction. It helps identify the most common types of returns and areas for improvement.

| Column Name | Data Type | Description                                                                                 |
| ----------- | --------- | ------------------------------------------------------------------------------------------- |
| id          | Integer   | Unique identifier of the table.                                                             |
| type        | String    | Indicates the type of return. Possible values are - Full, line item, amount, and cancelled. |

## Item

**Databricks table name:** inventory_items

Each row in this table captures the metadata of the item, such as item code, price, size, and description.

| Column Name             | Data Type | Description                                                                                                                                               |
| ----------------------- | --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| item_code               | String    | Unique code assigned to each item for identification.                                                                                                     |
| brand_name              | String    | Name of the brand associated with the item.                                                                                                               |
| style                   | String    | The specific style or design of the item.                                                                                                                 |
| size                    | String    | Size of the item.                                                                                                                                         |
| inventory_description   | String    | Description for item.                                                                                                                                     |
| image_url               | String    | Link for the item image.                                                                                                                                  |
| color                   | String    | Colour of the item.                                                                                                                                       |
| is_valid                | String    | Indicates whether the item is considered valid.                                                                                                           |
| item_id                 | Bigint    | Unique identifier of the table.                                                                                                                           |
| auto_update_inv_masters | Bigint    | Date and time when the corresponding record in the inventory_masters table, available at the source was last updated. It is in the Unix timestamp format. |
| price                   | String    | Price of the item.                                                                                                                                        |

## Outlier status

**Databricks table name:** outlier_status

Each row in this table captures the outlier status of the bills or line items.

| Column Name | Data Type | Description                                                                                           |
| :---------- | :-------- | :---------------------------------------------------------------------------------------------------- |
| id          | Bigint    | Unique identifier of the table.                                                                       |
| status      | String    | Captures the outlier status of the bills. Possible values are - failed, deleted, fraud, invalid, etc. |

## Buyer type

**Databricks table name:** buyer_type

This table captures the type of buyer associated with the transaction.

| Column Name            | Data Type | Description                                                                                                                                        |
| :--------------------- | :-------- | :------------------------------------------------------------------------------------------------------------------------------------------------- |
| auto_update_buyer_type | bigint    | Date and time when the corresponding record in the buyer_type table, available at the source was last updated. It is in the Unix timestamp format. |
| buyer_type             | string    | Identifier for the type of buyer. Possible values are retail, wholesale, and others.                                                               |
| id                     | bigint    | Unique identifier of the table.                                                                                                                    |

## Cashier

**Databricks table name:** cashier

This table captures the id of the cashier processing the transaction.

| Column Name | Data Type | Description                     |
| :---------- | :-------- | :------------------------------ |
| id          | bigint    | Unique identifier of the table. |
| value       | string    | Value for the cashier.          |

## Cashier name

**Databricks table name:** cashier_name

This table captures the name of the cashier processing the transaction.

| Column Name | Data Type | Description                                        |
| :---------- | :-------- | :------------------------------------------------- |
| id          | string    | Unique identifier of the table.                    |
| value       | string    | Name of the cashier who processed the transaction. |

## Reason for the cashier discount (line item cashier discount reason)

**Databricks table name:** lineitem_cashier_discount_reason

This table captures the reason for discount given on the line item.

| Column Name     | Data Type | Description                                                                                                                                    |
| :-------------- | :-------- | :--------------------------------------------------------------------------------------------------------------------------------------------- |
| id              | bigint    | Unique identifier of the table.                                                                                                                |
| discount_reason | string    | Reason behind the discount applied to the bill. Possible values for discount are manager_discount, gift_card_discount, employee_discount, etc. |

## Line item cashier ID

**Databricks table name:** lineitem_cashier_id

This table captures the identifier of the cashier who processed the transaction.

| Column Name | Data Type | Description                                              |
| :---------- | :-------- | :------------------------------------------------------- |
| id          | bigint    | Unique identifier of the table.                          |
| value       | string    | Identifier of the cashier who processed the transaction. |

## Line item type

**Databricks table name:** line_item_type

This table captures type of the line item.

| Column Name | Data Type | Description                                                                                  |
| :---------- | :-------- | :------------------------------------------------------------------------------------------- |
| id          | bigint    | Unique identifier of the table.                                                              |
| type        | string    | Type of the line item. Possible values are add on item, combo item, combo parent, and split. |

## Special line item type

**Databricks table name:** special_lineitem_type

This table captures special type of the line item.

| Column Name                | Data Type | Description                                                                                                                                            |
| :------------------------- | :-------- | :----------------------------------------------------------------------------------------------------------------------------------------------------- |
| id                         | bigint    | Unique identifier of the table.                                                                                                                        |
| type                       | string    | Type of the line item. Possible values are free item, and processing fee.                                                                              |
| auto_update_extnd_std_enum | bigint    | Date and time when the corresponding record in the extnd_std_enum table, available at the source was last updated. It is in the Unix timestamp format. |

## Line item discount type

**Databricks table name:** lineitem_discount_type

This table captures the metadata of the type of discount applied to the line item.

| Column Name                    | Data Type | Description                                                                                                                                                |
| :----------------------------- | :-------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------- |
| auto_update_item_discount_type | bigint    | Date and time when the corresponding record in the item_discount_type table, available at the source was last updated. It is in the Unix timestamp format. |
| item_discount_type             | string    | Type of discount applied to the line items. Possible values are flat discount, percentage discount, etc.                                                   |
| id                             | bigint    | Unique identifier of the table.                                                                                                                            |

## Line item external coupon code

**Databricks table name:** lineitem_external_coupon_code

This table captures the external coupon code that is applied to the line item.

| Column Name | Data Type | Description                                                              |
| :---------- | :-------- | :----------------------------------------------------------------------- |
| id          | bigint    | Unique identifier of the table.                                          |
| code        | string    | Coupon code - if any external coupon has been applied to the line items. |

## Line item return reason ID

**Databricks table name:** lineitem_return_reason_id

This table captures the reason for returning the line item.

| Column Name | Data Type | Description                         |
| :---------- | :-------- | :---------------------------------- |
| id          | bigint    | Unique identifier of the table.     |
| reason      | string    | Reason for returning the line item. |

## Membership type

**Databricks table name:** membership_type

The membership type table captures the metadata of the customer membership types. This data can be used by brands to analyze the membership preferences of their customers.

| Column Name | Data Type | Description                                                                                                                                      |
| :---------- | :-------- | :----------------------------------------------------------------------------------------------------------------------------------------------- |
| id          | bigint    | Unique identifier of the table.                                                                                                                  |
| type        | string    | Specifies the membership type of the customer who completed the transaction. Possible values are - member not interested loyalty-not-interested. |

## Membership card present

**Databricks table name:** membership_card_present

This table indicates if the customer has a membership card or not.

| Column Name | Data Type | Description                                                             |
| :---------- | :-------- | :---------------------------------------------------------------------- |
| id          | bigint    | Unique identifier of the table.                                         |
| is_present  | string    | Indicates whether a membership card is present for the customer or not. |

## NPS score

**Databricks table name:** nps_score

This table captures the Net Promoter Score given by the customer.

| Column Name | Data Type | Description                                            |
| :---------- | :-------- | :----------------------------------------------------- |
| id          | bigint    | Unique identifier of the table.                        |
| score       | string    | Gives the NPS (Net Promoter Score) value from 1 to 10. |

## Line item promotion code

**Databricks table name:** lineitem_promotion_code

This table captures the promotion code that is applied to the line item.

| Column Name                     | Data Type | Description                                                                                                                                                 |
| :------------------------------ | :-------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| auto_update_item_promotion_code | bigint    | Date and time when the corresponding record in the item_promotion_code table, available at the source was last updated. It is in the Unix timestamp format. |
| item_promotion_code             | string    | Gives the line item promotion code information (such as 'SAVE20' code).                                                                                     |
| id                              | bigint    | Unique identifier of the table.                                                                                                                             |

## Line item tax code

**Databricks table name:** lineitem_tax_code

This table captures the metadata of the tax code that is applied to the line item.

| Column Name               | Data Type | Description                                                                                                                                                          |
| :------------------------ | :-------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| auto_update_item_tax_code | bigint    | Date and time when the corresponding record in the item_tax_code table, available at the source was last updated. It is in the Unix timestamp format.                |
| item_tax_code             | string    | Unique identifier or code assigned to a specific tax category. They include GST at the central and state levels, interstate GST, and taxes levied to the total bill. |
| id                        | bigint    | Unique identifier of the table.                                                                                                                                      |

## Card used (card_used)

**Databricks table name:** card_used

This table captures the details of the card used in the transaction.

| Column Name      | Data Type | Description                                                                                                                                                                                           |
| ---------------- | --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| user_id          | String    | Identifier for the customer who holds the card.                                                                                                                                                       |
| number           | String    | Unique card number assigned to the customer.                                                                                                                                                          |
| is_active        | String    | Indicates whether the card is active (1 for yes, 0 for no).                                                                                                                                           |
| external_id      | String    | Card external id is a unique identifier assigned by brands to loyalty cards generated by the Capillary system. This identifier allows brands to tag and reference the cards within their own systems. |
| is_generated     | String    | Indicates whether the card number was system-generated (1 for yes, 0 for no).                                                                                                                         |
| created_by       | String    | Identifier of the user that created the card record.                                                                                                                                                  |
| auto_update_time | String    | Date and time when the time table available at the source, was last updated. It is in the Unix timestamp format.                                                                                      |
| issued_date      | String    | Date the card was issued. It is in the Unix timestamp format.                                                                                                                                         |
| last_updated_by  | String    | Identifier of the user that last updated the card record.                                                                                                                                             |
| series_id        | String    | Identifier for the card series.                                                                                                                                                                       |
| expiry_date      | String    | The expiration date of the card.                                                                                                                                                                      |
| created_on       | String    | Date when the card was created, in the YYYY-MM-DD format.                                                                                                                                             |
| id               | String    | Unique identifier for the table.                                                                                                                                                                      |

## Unsubscription status

**Databricks table name:** unsubscription_status

Each row in this table captures the subscription status of customers. This status indicates that, if a customer has chosen to unsubscribe from a communication, they will no longer receive those messages.

| Column Name | Data Type | Description                                                                                  |
| :---------- | :-------- | :------------------------------------------------------------------------------------------- |
| id          | integer   | Unique identifier of the table.                                                              |
| status      | string    | Gives the subscription status of the customer. Possible values are - Opted_out, and Not_Yet. |

## Campaign delivery status

**Databricks table name:** campaign_delivery_status

Each row in this table captures the metadata of the delivery status of the campaign message. This information can be used by brands to analyse the user behaviour based on the status of the message delivery.

| Column Name               | Data Type | Description                                                                                                                                    |
| :------------------------ | :-------- | :--------------------------------------------------------------------------------------------------------------------------------------------- |
| status_id                 | bigint    | Unique identifier for the table.                                                                                                               |
| veneno_status_label       | string    | Delivery status of the campaign message. Possible values are - Delayed_delivery, Clicked, Opened, Sent, Delivered, Not_delivered, and Failed.  |
| campaign_legend_status_id | integer   | Identifier for the campaign legend label (ranges from 0 to 13).                                                                                |
| campaign_legend_label     | string    | Gives a generic label for the veneno status. For instance if the veneno status is RETRY_TIMEOUT, campaign legend label will be - System error. |

## Campaigns

**Databricks table name:** campaigns

The campaigns dimension table stores the metadata of the campaign, such as the campaign ID, type, name of the campaign, start date and end date of the campaign.

| Column Name          | Data Type | Description                                                                                                                                     |
| -------------------- | --------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| is_recurring         | string    | Indicates whether the campaign is a recurring campaign or a one-time campaign.                                                                  |
| campaign_end_date    | string    | End date of the campaign.                                                                                                                       |
| is_migrated          | string    | The field was a part of the v1 campaign. It is no longer in use.                                                                                |
| auto_update_campaign | bigint    | Date and time when the corresponding record in the campaign table available at the source was last updated. It is in the Unix timestamp format. |
| campaign_id          | bigint    | Unique identifier for the campaign.                                                                                                             |
| campaign_type        | string    | Refers to the type of campaign. Possible values are - referral campaign, survey campaign, action campaign, etc.                                 |
| roi_type             | string    | The roi_type field represents the type of Return on Investment (ROI) associated with the campaign group. This field is no longer in use.        |
| campaign_start_date  | string    | Start date of the campaign.                                                                                                                     |
| name                 | string    | Name of the campaign.                                                                                                                           |

## Campaign group

**Databricks table name:** campaign_group

The campaign audience is grouped as test group and control group. The campaign_group table captures metadata of these campaign groups. These include the group id, campaign start date, campaign end date, group type, name of the group, etc.

| Column Name          | Data Type | Description                                                                                                                              |
| -------------------- | --------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| is_recurring         | string    | Indicates whether the campaign is a recurring campaign or a one-time campaign.                                                           |
| campaign_end_date    | string    | End date of the campaign.                                                                                                                |
| group_version_number | string    | Version number associated with the campaign group as per the source.                                                                     |
| group_type           | string    | The category of the campaign group - Test or Control.                                                                                    |
| name                 | string    | Name of the campaign group.                                                                                                              |
| id                   | bigint    | Unique identifier for the table.                                                                                                         |
| campaign             | string    | The specific campaign associated with the group.                                                                                         |
| campaign_start_date  | string    | Start date of the campaign.                                                                                                              |
| roi_type             | string    | The roi_type field represents the type of Return on Investment (ROI) associated with the campaign group. This field is no longer in use. |

## Campaign message (campaign_msg)

**Databricks table name:** campaign_msg

This table captures the metadata of the message that was sent as a part of the campaign. Each row represents a unique message with fields such as id, campaign, message name, message type, status, etc.

| Column Name          | Data Type | Description                                                                                                                                                                                                       |
| -------------------- | --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| campaign_end_date    | string    | End date of the campaign.                                                                                                                                                                                         |
| campaign             | string    | Name of the campaign.                                                                                                                                                                                             |
| auto_update_campaign | bigint    | Date and time when the corresponding record in the campaign table available at the source was last updated. It is in the Unix timestamp format.                                                                   |
| msg_type             | string    | Type of the message, sent for the campaign.                                                                                                                                                                       |
| auto_update_msg      | bigint    | Date and time when the corresponding record in the msg table available at the source was last updated. It is in the Unix timestamp format.                                                                        |
| guid                 | string    | Extended field created for particular org.                                                                                                                                                                        |
| status               | string    | Gives the status of the campaign message. Possible values are - Open, or Sent.                                                                                                                                    |
| id                   | bigint    | Unique identifier of the table.                                                                                                                                                                                   |
| scheduled_type       | string    | Indicates whether the campaign message is to be sent at a future time, or is set for a specific date, or intended to be delivered immediately. Possible values are - Scheduled, particular_date, and immediately. |
| campaign_start_date  | string    | Start date of the campaign.                                                                                                                                                                                       |
| msg_name             | string    | Name of the campaign message.                                                                                                                                                                                     |
| is_recurring         | string    | Indicates whether the campaign message is recurring or not. Possible values are - True, or False.                                                                                                                 |

## Communication type

**Databricks table name:** communication_type

This table captures the metadata for the type of communication used in the campaign, differentiating between Test Group and Control Group. It helps calculate the responder sales KPI by distinguishing test communications from control communications.

| Column Name | Data Type | Description                                                    |
| ----------- | --------- | -------------------------------------------------------------- |
| id          | integer   | Unique identifier of the table.                                |
| type        | string    | Type of communication. Possible values are - Test and Control. |

## Payment mode

**Databricks table name:** payment_mode

This table captures the mode of payment used by the customer, for the transaction.

| Column Name | Data Type | Description                                                                                         |
| ----------- | --------- | --------------------------------------------------------------------------------------------------- |
| id          | integer   | Unique identifier of the table.                                                                     |
| label       | string    | Captures the mode of payment. Possible values are- Netbanking, PhonePe, Mastercard, Visa card, etc. |

## Payment attributes

**Databricks table name:** payment_attributes

This table captures the payment mode attributes such as the payment attribute name, value, and Id.

| Column Name                   | Data Type | Description                                                                                                   |
| ----------------------------- | --------- | ------------------------------------------------------------------------------------------------------------- |
| attribute_id                  | bigint    | Identifier for the payment attribute.                                                                         |
| id                            | bigint    | Unique identifier for the table.                                                                              |
| attribute_name                | string    | Name of the payment attribute, such as Visa or MasterCard.                                                    |
| auto_update_time_payment_attr | bigint    | Date and time when the corresponding record in the time_payment_attr table was last updated (Unix timestamp). |
| value                         | string    | Attribute value, such as credit card or debit card.                                                           |

## Bill type

**Databricks table name:** bill_type

This table captures the type of bill based on loyalty status of customers. 'Regular' for transactions with customer tagging and 'Not_interested' for transactions without any customer tagging.

| Column Name | Data Type | Description                                                                 |
| ----------- | --------- | --------------------------------------------------------------------------- |
| id          | bigint    | Unique identifier of the table.                                             |
| value       | string    | Indicates the bill type. Possible values are - Regular; and Not-interested. |

## Users (users)

**Databricks table name:** users

Each row in this table captures the metadata of the user customer, such as the first name, last name, mobile number etc; facilitating customer level analysis.

| Column Name                      | Data Type | Description                                                                                                                                                                                                |
| -------------------------------- | --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| auto_update_merged_customer      | Bigint    | Date and time when the corresponding record in the merged_customer table, available at the source was last updated. It is in the Unix timestamp format.                                                    |
| auto_update_loyalty              | Bigint    | Date and time when the corresponding record in the loyalty table, available at the source was last updated. It is in the Unix timestamp format.                                                            |
| fraud_status                     | String    | Indicates the fraud status of the customer. Possible values are - Not fraud, Confirmed, Not interested, and Not captured.                                                                                  |
| test_control_bucket              | String    | Determines whether a user should be categorized as a test or control user for the campaign. While both test and control users are included in the campaign, only test users receive the campaign messages. |
| is_merged_customer               | String    | Indicates if the customer is the result of merging multiple customers.                                                                                                                                     |
| subscription_status_email_bulk   | String    | Subscription status (opt-in/opt-out) for email.                                                                                                                                                            |
| first_name                       | String    | First name of the customer.                                                                                                                                                                                |
| slab_name                        | String    | Slab name for the customer. For example, platinum, gold etc.                                                                                                                                               |
| subscription_status_wechat_bulk  | String    | Subscription status (opt-in/opt-out) for WeChat.                                                                                                                                                           |
| email                            | String    | Email ID of the customer.                                                                                                                                                                                  |
| last_name                        | String    | Last name of the customer.                                                                                                                                                                                 |
| merged_user_id                   | Bigint    | User ID of the merged customer. For example, if customer A is merged with customer B, the user ID of customer A will be updated to that of customer B.                                                     |
| user_id                          | Bigint    | User ID of the customer.                                                                                                                                                                                   |
| subscription_status_wechat_trans | String    | Subscription status (opt-in/opt-out) for the WeChat transactions.                                                                                                                                          |
| subscription_status_sms_bulk     | String    | Subscription status (opt-in/opt-out) for SMS.                                                                                                                                                              |
| ndnc_status                      | String    | Indicates the Do Not Disturb status.                                                                                                                                                                       |
| subscription_status_email_trans  | String    | Subscription status (opt-in/opt-out) for email transaction alerts.                                                                                                                                         |
| test_control_status              | String    | Indicates if the customer belongs to the Test or the Control group.                                                                                                                                        |
| auto_update_fraud_user           | Bigint    | Date and time when the corresponding record in the fraud_user table, available at the source was last updated. It is in the Unix timestamp format.                                                         |
| is_inactive                      | String    | Indicates if the customer is inactive.                                                                                                                                                                     |
| source                           | String    | Indicates the source of the customer. For example, Instore, WebEngage etc.                                                                                                                                 |
| slab_number                      | Integer   | Slab number associated with the slab of the customer.                                                                                                                                                      |
| auto_update_users                | Bigint    | Date and time when the corresponding record in the users table, available at the source was last updated. It is in the Unix timestamp format.                                                              |
| registered_till_id               | bigint    | Registered till ID of the customer.                                                                                                                                                                        |
| auto_update_customer_enrollment  | Bigint    | Date and time when the corresponding record in the customer_enrollment table, available at the source was last updated. It is in the Unix timestamp format.                                                |
| slab_expiry_date                 | String    | Expiry date of the slab.                                                                                                                                                                                   |
| customer_external_id             | String    | External ID of the customer.                                                                                                                                                                               |
| subscription_status_sms_trans    | String    | Subscription status for the SMS transaction alerts.                                                                                                                                                        |
| mobile                           | String    | Mobile number of the customer.                                                                                                                                                                             |
| loyalty_type                     | String    | Loyalty type of the customer. For example, loyalty, non-loyalty.                                                                                                                                           |
| auto_update_ndnc_status          | Bigint    | Date and time when the NDNC (National Do Not Disturb, Invalid, DND, or Unknown) status table available at the source, was last updated. It is in the Unix timestamp format.                                |

## Cart promotion

**Databricks table name**: cart_promotion

This dimension table captures the metadata of the cart promotions. Cart promotions are special promotions that are applicable to cart and catalog items - promotion engine. This table is available for orgs that have enabled the promotion engine.

<Table align={["left","left","left"]}>
  <thead>
    <tr>
      <th>
        **Column Name**
      </th>

      <th>
        **Data Type**
      </th>

      <th>
        **Description**
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        reward_discount_type
      </td>

      <td>
        String
      </td>

      <td>
        Type of discount applied to the promotion. Possible values:
        ABSOLUTE - Provides a fixed amount discount.
        PERCENTAGE - Provides a percentage discount on the amount.
      </td>
    </tr>

    <tr>
      <td>
        condition_type
      </td>

      <td>
        String
      </td>

      <td>
        Type of condition applicable for the promotion. Possible values: CART, PRODUCT, COMBO_PRODUCT, TENDER. Refer to the documentation for more information on

        [conditions](https://docs.capillarytech.com/docs/cart-catalog-promotions#define-promotion-availing-condition-and-promotion-benefit)

        .
      </td>
    </tr>

    <tr>
      <td>
        cart_promotion_id
      </td>

      <td>
        String
      </td>

      <td>
        Unique identifier for the cart promotion.
      </td>
    </tr>

    <tr>
      <td>
        campaign_id
      </td>

      <td>
        Integer
      </td>

      <td>
        Identifier of the associated campaign. This is generated when creating a campaign.
      </td>
    </tr>

    <tr>
      <td>
        id
      </td>

      <td>
        String
      </td>

      <td>
        Unique identifier for the table.
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
        Name of the promotion.
      </td>
    </tr>

    <tr>
      <td>
        condition_kpi
      </td>

      <td>
        String
      </td>

      <td>
        KPI used to evaluate qualifying conditions for the promotion. Example: SUBTOTAL, QUANTITY, ITEMCOUNT, AMOUNT.
      </td>
    </tr>

    <tr>
      <td>
        reward_type
      </td>

      <td>
        String
      </td>

      <td>
        Type of reward provided. Possible values: FIXED_PRICE, CART_BASED, PRODUCT_BASED, FREE_PRODUCT, TENDER, PER_UNIT.
      </td>
    </tr>

    <tr>
      <td>
        active
      </td>

      <td>
        Boolean
      </td>

      <td>
        Status of the promotion, indicating whether it is currently active. Possible values: TRUE, FALSE.
      </td>
    </tr>

    <tr>
      <td>
        end_date
      </td>

      <td>
        String
      </td>

      <td>
        End date of the promotion, in YYYY-MM-DD format.
      </td>
    </tr>

    <tr>
      <td>
        start_date
      </td>

      <td>
        String
      </td>

      <td>
        Start date of the promotion, in YYYY-MM-DD format.
      </td>
    </tr>

    <tr>
      <td>
        reward_value
      </td>

      <td>
        double
      </td>

      <td>
        Value of the reward or discount offered (e.g., monetary value or percentage).
      </td>
    </tr>

    <tr>
      <td>
        mode
      </td>

      <td>
        String
      </td>

      <td>
        Type of benefit provided. Possible values: DISCOUNT, PAYMENT_VOUCHER.
      </td>
    </tr>

    <tr>
      <td>
        type
      </td>

      <td>
        String
      </td>

      <td>
        Type of promotion. Possible values: EARNING, POS, CUSTOMER, or CODE.
        Refer to the documentation for more information on

        [promotion types](https://docs.capillarytech.com/docs/cart-catalog-promotions#pos-promotion)
      </td>
    </tr>
  </tbody>
</Table>

## Journey status

**Databricks table name:** journey_status

This table captures the current status of the journey.

| **Column Name** | **Data Type** | **Description**                                                                                                         |
| --------------- | ------------- | ----------------------------------------------------------------------------------------------------------------------- |
| id              | Integer       | Unique identifier of the table.                                                                                         |
| value           | String        | Indicates the status of the journey. Possible values are - in-progress, paused, completed, failed, exited, and stopped. |

## Journey block

**Databricks table name:** journey_block

This table captures the metadata of the journey block such as the journey block name, type, status, start type, end type, start and end date, etc.

| Column Name                         | Data Type | Description                                                                                                                                                    |
| ----------------------------------- | --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| block_type                          | String    | Captures type of the journey block. Possible values are - Entry, join, jump, reminder, incentives, WhatsApp engagement, email engagement, SMS engagement, etc. |
| ends_at                             | String    | Date when the journey meta ends.                                                                                                                               |
| multi_entry_allowed                 | String    | Indicates if multiple entries are allowed for the journey meta. Possible values are - 'true' and 'false'.                                                      |
| use_tiny_url                        | String    | Indicates if tiny URL is to be used for the journey meta. Possible values are - 'true' and 'false'.                                                            |
| ou_id                               | Integer   | Organizational unit identifier associated with the journey meta.                                                                                               |
| start_type                          | String    | The type of start condition for the journey meta. Possible values are - 'immediate' and 'particular date'.                                                     |
| journey_meta_name                   | String    | Name of the journey meta.                                                                                                                                      |
| journey_meta_id                     | String    | Unique identifier for the journey meta.                                                                                                                        |
| level                               | String    | The level or scope of the journey meta.                                                                                                                        |
| link_tracking_enabled               | String    | Indicates if link tracking is enabled. Possible values are - 'true' and 'false'.                                                                               |
| block_name                          | String    | Name of the journey block.                                                                                                                                     |
| end_type                            | String    | The type of end condition for the journey meta. Possible values are - 'never' and 'particular date'.                                                           |
| block_id                            | String    | Unique identifier for the journey block.                                                                                                                       |
| encrypt_url                         | String    | Indicates if URL is to be encrypted. Possible values are - 'true' and 'false'.                                                                                 |
| journey_meta_group_id               | String    | Identifier for the group to which the journey meta group belongs.                                                                                              |
| starts_from                         | String    | Date from when the user journey can start for the journey meta.                                                                                                |
| journey_version                     | Integer   | Version number of the journey meta.                                                                                                                            |
| simulation_mode                     | String    | Indicates if the journey meta is in simulation mode. Possible values are - 'true' and 'false'.                                                                 |
| test_control_mode_disabled          | String    | Indicates if the test control mode is disabled (e.g., 'true' or 'false').                                                                                      |
| journey_meta_description            | String    | Description of the journey meta.                                                                                                                               |
| journey_status                      | String    | Indicates state of the journey meta. Possible values are - live, paused, stopped, draft, approved, rejected, etc.                                              |
| objective                           | String    | The objective or goal of the journey meta.                                                                                                                     |
| time_compression_factor             | String    | Factor used for compressing the time by a factor for the journey meta wait blocks.                                                                             |
| journey_meta_version_id             | String    | Identifier for the version of the journey meta.                                                                                                                |
| consent_status_for_previous_version | String    | Consent status for the previous version of the journey meta. Possible values are - Sunset, stop and null.                                                      |
| auto_update_time                    | Bigint    | Date and time when the corresponding record in the journey meta version table available at the source was last updated. It is in the Unix timestamp format.    |

## Journey block status

**Databricks table name:** journey_block_status

This table captures the status of the journey block.

| **Column Name** | **Data Type** | **Description**                                                                                                                                   |
| --------------- | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| **id**          | Integer       | Unique identifier of the table.                                                                                                                   |
| **value**       | String        | Indicates the status of the journey block. Possible values are - completed, executing, int_wait, failed, queued, temporary_failure, and ext_wait. |

## Journey block type

**Databricks table name:** journey_block_type

This table captures the type of journey block.

| **Column Name** | **Data Type** | **Description**                                                                                                                                                                                                                                                                                            |
| --------------- | ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **id**          | Integer       | Unique identifier of the table.                                                                                                                                                                                                                                                                            |
| **value**       | String        | Captures type of the journey block. Possible values are - wait_for_event, decision, wait_for_duration, entry, wait_since_event, mobile_push_engagement, join, sms_engagement, incentives, jump, reminder, engagement_ab_test, whatsapp_engagement, engagement, incentive, end, email_engagement, and exit. |

<br />

## Rewards (rewards)

**Databricks table name:** rewards

This table captures the metadata of the reward, such as its name, identifier, type, etc.

| Column Name     | Data Type | Description                                                                                      |
| --------------- | --------- | :----------------------------------------------------------------------------------------------- |
| name            | String    | Name of the reward.                                                                              |
| redemption_type | String    | Type of intouch reward or vendor reward. For example, INTOUCH_REWARD, VENDOR_INTOUCH_REWARD etc. |
| id              | Bigint    | Unique identifier for the table.                                                                 |
| is_enabled      | Integer   | Indicates if the reward is active.                                                               |
| reward_type     | String    | Type of the reward. Possible values are - Voucher, Points, and Free voucher                      |

## Catalog promotion (reward_catalog_promotion)

**Databricks table name:** reward_catalog_promotion

This table captures the metadata of the rewards catalog promotion.

| Column Name   | Data Type | Description                                                                                                           |
| ------------- | --------- | :-------------------------------------------------------------------------------------------------------------------- |
| name          | String    | Name of the catalog promotion.                                                                                        |
| id            | Bigint    | Unique identifier for the table.                                                                                      |
| language_code | String    | Language code of the language used for the promotion. Possible values are - en (for English), ja (for Japanese), etc. |

## Reward Payment Config Currency (reward_payment_config_currency_dim)

**Databricks table name:** reward_payment_config_currency_dim

This table captures the type of currency used in the payment configuration, while availing the reward by the customers.

| Column Name | Data Type | Description                                                                                                                                                                                                                                                           |
| ----------- | --------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| id          | Int       | Unique identifier of the table.                                                                                                                                                                                                                                       |
| value       | String    | Currency type used in the payment configuration. Possible values are: CONV_RATIO, POINTS and CASH. For more information click, [Supported payment modes](https://docs.capillarytech.com/docs/pointscash-journeys-in-rewards-catalog#the-supported-payment-modes-are). |

## Reward Owner (reward_owner_dim)

**Databricks table name:** reward_owner_dim

This table captures the metadata of the module to which the reward is attributed.

| Column Name     | Data Type | Description                                                                                                                                                                            |
| --------------- | --------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| owner_type      | String    | Module associated with the reward.                                                                                                                                                     |
| created_on      | String    | Date when the reward was created.                                                                                                                                                      |
| owner_id        | String    | Unique identifier associated with the owner type module.                                                                                                                               |
| id              | Bigint    | Unique identifier of the table.                                                                                                                                                        |
| last_updated_on | String    | Date when the data was last updated.                                                                                                                                                   |
| created_by      | String    | Till id or user id from which the reward was created. If created via API call, this will be the Till id; if created through the user interface (UI), it will be the User id.           |
| reward_id       | Bigint    | Identifier for the reward.                                                                                                                                                             |
| is_active       | Int       | Indicates if the reward is mapped to the owner (module) or not (1 for yes, 0 for no).                                                                                                  |
| last_updated_by | String    | Till id or User id from which the reward data was last updated. If updated via API call, this will be the Till id; if updated through the user interface (UI), it will be the User id. |

## Reward Owner Standard Types (reward_owner_standard_dim)

**Databricks table name:** reward_owner_standard_dim

This table captures the module to which the reward is attributed.

| Column Name | Data Type | Description                                                                                                                    |
| ----------- | --------- | :----------------------------------------------------------------------------------------------------------------------------- |
| id          | Int       | Unique identifier of the table.                                                                                                |
| value       | String    | Module to which the reward is attributed. Possible values are - Journeys, goodwill, loyalty program, milestone, and campaigns. |

## Reward Payment Config (reward_payment_config_dim)

**Databricks table name:** reward_payment_config_dim

This table captures the metadata of the payment config by which the customer can redeem rewards.

| Column Name     | Data Type | Description                                                                                                                                                                                                                                                                                                               |
| --------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| last_updated_on | String    | Date when the payment config was last updated.                                                                                                                                                                                                                                                                            |
| config_type     | Int       | Indicates the payment mode used for availing the reward. Possible values are - Cash, conv_ratio, free, points, and points_cash. For more information, click [Different payment modes for rewards in the catalog](https://docs.capillarytech.com/docs/pointscash-journeys-in-rewards-catalog#with-multiple-payment-modes). |
| last_updated_by | String    | Till id used when the payment config was last updated.                                                                                                                                                                                                                                                                    |
| is_enabled      | String    | Indicates if the payment config is enabled or not. (1 for yes, 0 for no).                                                                                                                                                                                                                                                 |
| created_on      | Bigint    | Date when the payment config was created.                                                                                                                                                                                                                                                                                 |
| created_by      | Bigint    | Till id used for creating the payment config.                                                                                                                                                                                                                                                                             |
| id              | Bigint    | Unique identifier of the table.                                                                                                                                                                                                                                                                                           |
| reward_id       | Bigint    | Identifier for the reward.                                                                                                                                                                                                                                                                                                |

## Reward Redemption Types (reward_redemption_types_dim)

**Databricks table name:** reward_redemption_types_dim

This table captures the metadata of the redemption type associated with the reward.

| Column Name     | Data Type | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --------------- | --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| is_enabled      | Int       | Indicates whether the reward redemption is enabled or not. (1 for yes, 0 for no).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| created_by      | String    | User who created the redemption type.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| last_updated_by | String    | User who last updated the redemption type.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| created_on      | String    | Date when the redemption type was created.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| last_updated_on | String    | Date when the redemption type was last updated.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| identifier      | Bigint    | Unique identifier used for categorizing or indexing the reward redemption type.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| id              | Bigint    | Unique identifier for the table.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| name            | String    | Specifies the method by which the customer can redeem rewards. Possible values are: GAMES, AUCTION, CART_PROMOTION, CASH_WALLET, VENDOR_ONLY_REWARD, VOUCHER, CASH_BACK, INTOUCH_REWARD, PHYSICAL_REWARD, CHARITY, MILES, GIFT_CARD, SWEEPSTAKES, VENDOR_INTOUCH_REWARD, CARD_DISC. VENDOR_ONLY_REWARD: These are either points or coupons created at the vendor end. VENDOR_INTOUCH_REWARD: These are vendor rewards created at the Capillary end. It is not recommended to use the Vendor Intouch reward redemption type. Instead, you can use the Vendor only reward redemption type to issue coupons directly through the vendor API. |
| is_partner      | Int       | Indicates if the redemption type involves a partner or vendor (1 for yes, 0 for no). All the redemption types except Cart_promotions and Intouch_rewards, are partner based.                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| description     | String    | Description providing details about the specific reward redemption type and its purpose.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |

## Reward Vendor (reward_vendor_dim)

**Databricks table name:** reward_vendor_dim

This table captures the metadata of the vendor associated with the reward.

| Column Name            | Data Type | Description                                                                                                                                                  |
| ---------------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| created_on             | String    | Date when the vendor is created.                                                                                                                             |
| is_enabled             | Int       | Indicates if the vendor is enabled (1 for yes, 0 for no).                                                                                                    |
| vendor_class           | String    | Indicates the vendor classification used internally to identify the custom implementation.                                                                   |
| id                     | Bigint    | Unique identifier for the table.                                                                                                                             |
| type                   | String    | The type of vendor, possible values are - rewards, and points.                                                                                               |
| is_encryptiom_required | Int       | Indicates if custom implementation is done for the vendor or not. (1 for yes, 0 for no). If this field is Yes, it will show value in the vendor_class field. |
| name                   | String    | The name of the reward vendor.                                                                                                                               |
| last_updated_on        | String    | Date when the vendor information was last updated.                                                                                                           |

## Reward Vendor Redemption (reward_vendor_redemption_dim)

**Databricks table name:** reward_vendor_redemption_dim

This table captures the metadata of the vendor redemption of rewards.

| Column Name     | Data Type | Description                                                                                                    |
| --------------- | --------- | -------------------------------------------------------------------------------------------------------------- |
| id              | Bigint    | Unique identifier for the vendor redemption.                                                                   |
| last_updated_on | String    | Date when the vendor redemption data was last updated.                                                         |
| redemption_type | Int       | Indicates the type of redemption (e.g., games, auction, cart_promotion, cash_wallet, vendor_only_reward, etc). |
| name            | String    | The name of the vendor redemption, such as miles, donation, or entry to sweepstakes, etc.                      |
| vendor_id       | Bigint    | Identifier for the vendor. Corresponds to the vendor id from the vendor dimension table.                       |
| created_on      | String    | Date when the vendor redemption was created.                                                                   |
| is_enabled      | Int       | Indicates whether the vendor redemption is enabled (1 for yes, 0 for no).                                      |
| response_keys   | String    | Specifies the keys for responses from the vendor API, such as voucher codes or unique identifiers.             |

## Reward Custom Fields (reward_custom_fields_dim)

**Databricks table name:** reward_custom_fields_dim

This table captures the metadata of the rewards custom field.

| Column Name     | Data Type | Description                                                                                                     |
| --------------- | --------- | --------------------------------------------------------------------------------------------------------------- |
| created_by      | String    | Till id or User id used for creating the rewards custom field.                                                  |
| is_mandatory    | Int       | Indicates whether the rewards custom field is mandatory (1 for yes, 0 for no).                                  |
| is_active       | Int       | Indicates whether the rewards custom field is active (1 for yes, 0 for no).                                     |
| created_on      | String    | Date when the rewards custom field was created.                                                                 |
| default_value   | String    | The default value assigned to the rewards custom field if no specific value is provided.                        |
| last_updated_by | String    | Till id or user id used when the rewards custom field was last updated.                                         |
| name            | String    | The name of the rewards custom field.                                                                           |
| data_type       | String    | The data type of the rewards custom field (String, Integer, Date, Boolean).                                     |
| last_updated_on | String    | Date when the rewards custom field was last updated.                                                            |
| id              | Bigint    | Unique identifier for the table.                                                                                |
| description     | String    | A brief description of the rewards custom field's purpose or usage.                                             |
| scope           | String    | Indicates scope of the rewards custom field. Possible values are REWARD, CATALOGUE_PROMOTION, and ISSUE_REWARD. |

## Reward Fulfillment Scope (reward_fulfillment_details_scope_dim)

**Databricks table name:** reward_fulfillment_details_scope_dim

This table captures the scope of fulfillment of the reward custom field.

| Column Name     | Data Type | Description                                                          |
| --------------- | --------- | -------------------------------------------------------------------- |
| last_updated_on | String    | Date when the scope details were updated.                            |
| id              | Bigint    | Unique identifier for the table.                                     |
| name            | String    | Name of the scope. Currently there is only one scope - ISSUE_REWARD. |
| created_on      | String    | Date when the scope was created.                                     |

## Reward Fulfillment Status (reward_fulfillment_status_dim)

**Databricks table name:** reward_fulfillment_status_dim

This table captures the metadata of the fulfillment status of the reward.

| Column Name     | Data Type | Description                                                                                                                                                         |
| --------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| last_updated_on | String    | Date when the fulfillment status was last updated on.                                                                                                               |
| id              | Bigint    | Unique identifier of the table.                                                                                                                                     |
| last_updated_by | String    | Till id or User id used when the fulfillment status was last updated.                                                                                               |
| is_enabled      | Int       | Indicator of whether the fulfillment status is enabled or not (1 for yes, 0 for no).                                                                                |
| created_on      | String    | Date when the fulfillment status was created.                                                                                                                       |
| name            | String    | Name of the fulfillment status. Possible values are - Shipped, delivered, order confirmed, on the way, delivered, voucher issued, delivering soon, in transit, etc. |
| created_by      | String    | Till id or User id used for creating the fulfillment status.                                                                                                        |

## Reward Program Mapping (reward_program_mapping_dim)

**Databricks table name:** reward_program_mapping_dim

This table captures the mapping details of the loyalty program with the reward. This dimension table is not linked to any fact table (useful for manual export by brands through Databricks).

| Column Name        | Data Type | Description                                                                                                                                                                                                                                                                           |
| :----------------- | :-------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| reward_id          | Bigint    | Identifier for the reward.                                                                                                                                                                                                                                                            |
| loyalty_program_id | Bigint    | Identifier for the loyalty program associated with the reward.                                                                                                                                                                                                                        |
| created_on         | String    | Date when the mapping of the loyalty program with the reward was done.                                                                                                                                                                                                                |
| is_enabled         | Int       | Indicator of whether the mapping is enabled (1 for yes, 0 for no).                                                                                                                                                                                                                    |
| entity_type        | String    | Type of entity associated with the reward, such as tier, subscription, all-loyalty. <br />Tier: Reward linked to a specific loyalty tier (e.g., Silver, Gold). <br />Subscription: Reward tied to a subscription. <br />All-loyalty: Reward available to all loyalty program members. |
| last_updated_on    | String    | Date when the mapping record was last updated.                                                                                                                                                                                                                                        |
| created_by         | String    | Identifier for the user or system that created the mapping record.                                                                                                                                                                                                                    |
| entity_id          | Bigint    | Identifier for the specific entity type associated with the reward.                                                                                                                                                                                                                   |
| id                 | Bigint    | Unique identifier for the table.                                                                                                                                                                                                                                                      |
| last_updated_by    | String    | Identifier for the user or system that last updated the mapping record.                                                                                                                                                                                                               |

## Reward Segment Mapping (reward_segment_dim)

**Databricks table name:** reward_segment_dim

This table captures the mapping details of the segment associated with the reward. This dimension table is not linked to any fact table (useful for manual export by brands through Databricks).

| Column Name     | Data Type | Description                                                                       |
| --------------- | --------- | --------------------------------------------------------------------------------- |
| created_by      | String    | Identifier for the user or system that created the reward-segment mapping.        |
| segment_id      | Bigint    | Identifier for the customer segment to which the reward is mapped.                |
| last_updated_on | String    | Date when the reward-segment mapping was last updated.                            |
| last_updated_by | String    | Identifier for the user or system that last updated the reward-segment mapping.   |
| id              | Bigint    | Unique identifier for the table.                                                  |
| reward_id       | Bigint    | Identifier for the reward associated with the customer segment.                   |
| partition_id    | Bigint    | Identifier for the entity partition mapping to the reward.                        |
| created_on      | String    | Date when the mapping was done.                                                   |
| is_enabled      | Int       | Indicator of whether the reward-segment mapping is enabled (1 for yes, 0 for no). |

<br />

## Reward Label Mapping (reward_labels_mapping_dim)

**Databricks table name:** reward_labels_mapping_dim

| Column Name     | Data Type | Description                                                          |    |
| :-------------- | :-------- | :------------------------------------------------------------------- | :- |
| LAST_UPDATED_BY | String    | Identifier for the user or system that last updated the mapping.     |    |
| CREATED_ON      | String    | Date when the mapping between the reward and label was created.      |    |
| ID              | Bigint    | Unique identifier for the table.                                     |    |
| LABEL_ID        | Bigint    | Unique identifier for the customer label associated with the reward. |    |
| IS_ENABLED      | Int       | Indicates whether the mapping is active (1 for yes, 0 for no).       |    |
| REWARD_ID       | Bigint    | Unique identifier for the reward.                                    |    |
| LAST_UPDATED_ON | String    | Date when the mapping was last updated.                              |    |
| CREATED_BY      | String    | Identifier for the user or system that created the mapping.          |    |

<br />

## Reward Customer Cards Mapping (reward_cards_mapping_dim)

**Databricks table name:** reward_cards_mapping_dim

| Column Name     | Data Type | Description                                                           |
| --------------- | --------- | --------------------------------------------------------------------- |
| CREATED_ON      | String    | Date when the mapping between the reward and card series was created. |
| LAST_UPDATED_BY | String    | Identifier for the user or system that last updated the mapping.      |
| CREATED_BY      | String    | Identifier for the user or system that created the mapping.           |
| REWARD_ID       | Bigint    | Unique identifier for the reward.                                     |
| CARD_SERIES_ID  | Bigint    | Unique identifier for the card series associated with the reward.     |
| ID              | Bigint    | Unique identifier for the reward.                                     |
| LAST_UPDATED_ON | String    | Date when the mapping was last updated.                               |
| IS_ENABLED      | Int       | Indicates whether the mapping is active (1 for yes, 0 for no).        |

## Active status

**Databricks table name:** active_status

This table captures the metadata of the customer issue status.

| Column Name | Data Type | Description                                                                |
| ----------- | --------- | :------------------------------------------------------------------------- |
| id          | Bigint    | Unique identifier of the table.                                            |
| value       | String    | Indicates the status, if it is active or not. Possible values are 0 and 1. |

## Issue type

**Databricks table name:** issue_type

This table captures the metadata of the customer issue types.

| Column Name | Data Type | Description                                                                             |
| ----------- | --------- | :-------------------------------------------------------------------------------------- |
| id          | Bigint    | Unique identifier of the table.                                                         |
| type        | String    | Indicates the type or category of the issue. Possible values are - Store, and Customer. |

## Reported by

**Databricks table name:** reported_by

This table captures the metadata of the medium used to report the customer issue.

| Column Name | Data Type | Description                                                                                                                         |
| ----------- | --------- | :---------------------------------------------------------------------------------------------------------------------------------- |
| id          | Bigint    | Unique identifier of the table.                                                                                                     |
| value       | String    | Captures the medium through which the issue was reported. Possible values are -  email, intouch, call centre, client and microsite. |

## Badges meta (badgemeta)

**Databricks table name:** badgemeta

Each row in this table captures the metadata of the badge, such as the name of the badge, the group level details, expiry date etc. For example - The brand can use this dimension to filter all the badges, expiring on a given date, and nudge the customers to complete specified activities to retain the badge.

| Column Name   | Data Type | Description                                                                           |
| ------------- | --------- | :------------------------------------------------------------------------------------ |
| badgeRank     | String    | The rank of a badge within a group.                                                   |
| groupRank     | String    | The hierarchical order of various groups, determining their priority.                 |
| expiresOn     | Bigint    | Expiry date of the badge.                                                             |
| isActive      | String    | Indicates whether the badge is currently active.                                      |
| startOn       | Bigint    | Timestamp indicating when the badge starts.                                           |
| badgeMetaId   | String    | Unique identifier for each badge. This is generated during the creation of the badge. |
| earnType      | String    | The method the brand has used to issue the badge, either "earn" or "issue earn".      |
| badgeName     | String    | Name of the badge.                                                                    |
| groupName     | String    | Name of the badge group.                                                              |
| groupIsActive | String    | Indicates whether the group is currently active or not                                |
| badgeGroupId  | String    | Unique identifier for the badge group.                                                |

## Badge owner type (badges_owner_type)

**Databricks table name:** badges_owner_type

Each row in this table captures the metadata of the module to which the particular badge belongs. These modules can be Membercare, Loyalty, Journeys, Rewards etc. For example- The data in this dimension table can be used to analyse the effectiveness of badges based on the module being used to issue these badges.

| Column Name | Data Type | Description                                                                                                                                                                                                  |
| :---------- | :-------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| id          | Integer   | A unique identifier associated with the owner.                                                                                                                                                               |
| value       | String    | The module for which the badge is created. Possible values are - Referral_Campaigns, Audience_Campaigns, Membercare, Rewards_Catalog, Milestones, Historical_Import, Journeys, Goodwill_Module, and Loyalty. |

## Enabled

**Databricks table name:** enabled

Each row in this table indicates if the badge is active or not.

| Column Name | Data Type | Description                                                                 |
| :---------- | :-------- | :-------------------------------------------------------------------------- |
| id          | Integer   | Unique identifier for the table.                                            |
| value       | String    | Gives the enabled status of the badge. Possible values are: True and False. |

## Milestone

**Databricks table name:** milestone

This table captures the metadata of milestones, such as its name, identifier, and last updated date and time.

| Column Name           | Data Type | Description                                                                                                                                      |
| --------------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| milestone_id          | Integer   | Identifier for the milestone.                                                                                                                    |
| org_config_id         | Integer   | Identifier for the org.                                                                                                                          |
| auto_update_milestone | Bigint    | Date and time when the corresponding record in the milestone table available at the source was last updated. It is in the Unix timestamp format. |
| id                    | Bigint    | Unique identifier for the table.                                                                                                                 |
| name                  | String    | Name of the milestone.                                                                                                                           |

## User target (user_target)

**Databricks table name:** user_target

This table captures the metadata of the customer milestone targets.

| Column Name             | Data Type | Description                                                                                                                                                     |
| ----------------------- | --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| recurring_cycles        | Bigint    | Number of times the period cycles should recur repeat.                                                                                                          |
| frequency               | Bigint    | Gives the frequency count, relevant to the frequency type. Frequency type is the frequency of each cycle in which the customer has to achieve the target value. |
| target_entity           | String    | Entity for which we need to track the target. Possible values are - Transaction, Line item, Points, and Events.                                                 |
| enrollment_type         | String    | Type of enrollment for the customer. Possible values are - Transaction, Import, and Audience_filter.                                                            |
| targetRuleIsActive      | Bigint    | Indicates if the tracking is active or not.                                                                                                                     |
| end_date                | String    | End date of the period.                                                                                                                                         |
| target_type             | String    | Type of each target, possible values are - All_points, Gross_sales, All_points, Count, Sales, Quantity, etc.                                                    |
| target_cycle_start_date | Bigint    | Start date and time for the target cycle.                                                                                                                       |
| targetGroupCreatedOn    | Bigint    | Date and time when the target group is created. It is in the Unix timestamp format.                                                                             |
| evaluation_type         | String    | Refers to the type of target evaluation being used. Possible values are - Cyclic_Window, Period_Agnostic_Window, and Fixed_Calendar_Window.                     |
| targetGroupIsActive     | Bigint    | Indicates if the target group is active.                                                                                                                        |
| target_rule_name        | String    | Name of the target rule. Enables the creation of rules based on the names of milestones.                                                                        |
| target_group_name       | String    | Name of the target group.                                                                                                                                       |
| target_rule_id          | Bigint    | Identifier for the target rule.                                                                                                                                 |
| user_id                 | Bigint    | Unique identifier for the customer associated with the target.                                                                                                  |
| target_value            | Bigint    | Represents the specific objective or goal that customers are required to achieve. Such as, $100 monthly purchase target.                                        |
| period_name             | String    | Name of the period.                                                                                                                                             |
| entityType              | String    | Refers to the category of customer activity that the milestone is designed to track. Possible values are - Store, Zone, and Concept.                            |
| target_group_id         | Bigint    | Identifier linking each period to a target group.                                                                                                               |
| start_date              | String    | Start date of the period.                                                                                                                                       |
| user_target_id          | Bigint    | Unique identifier for the table.                                                                                                                                |
| preferred_till_id       | Bigint    | Identifier assigned to the preferred till, point-of-sale (POS) terminal within a store.                                                                         |
| period_id               | Bigint    | Identifier for the period.                                                                                                                                      |
| entityIds               | String    | The IDs of the entities to which the filter applies.                                                                                                            |
| targetRuleCreatedOn     | Bigint    | Date and time when the target rule is created. It is in the Unix timestamp format.                                                                              |
| frequency_type          | String    | The frequency of each cycle in which the customer has to achieve the target value. Possible values are - Monthly, Quarterly, Half-yearly, Yearly, and Weekly.   |

## Streaks (streaks)

**Databricks table name:** streaks

This table captures the metadata of the streak.

| Column Name           | Data Type | Description                                                                                                                                                                                                          |
| :-------------------- | :-------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| target-sequence-count | Integer   | Desired streak sequence count to fulfil the requirement. Refers to the predetermined number of consecutive actions or engagements that a customer must achieve to fulfil a specific streak objective or requirement. |
| streak_count          | String    | Name of the streak.                                                                                                                                                                                                  |
| streak_id             | Bigint    | Unique identifier of the table.                                                                                                                                                                                      |

## Streak status (streak_status)

**Databricks table name:** streak_status

This table captures the status of the streak.

| Column Name | Data Type | Description                                                                     |
| :---------- | :-------- | :------------------------------------------------------------------------------ |
| id          | Integer   | Unique identifier of the table.                                                 |
| value       | String    | Status of the streak. Possible values are - Achieved, Dropped, and In progress. |

## Coupon series (coupon_series)

**Databricks table name:** coupon_series

Each row in this table captures the metadata of coupon series issual, associated with the badge, along with campaign and offer/discount details.

| Column Name                | Data Type | Description                                                                                                                                                                                            |
| -------------------------- | --------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| purpose                    | String    | Purpose of the coupon series.                                                                                                                                                                          |
| discount_type              | String    | Type of discount. For example, ABS - the absolute discount type where the discount value is fixed.                                                                                                     |
| description                | String    | Description for the coupon series.                                                                                                                                                                     |
| auto_update_campaign_base  | Bigint    | Date and time when the campaign_base table available at the source was last updated. It is in the Unix timestamp format.                                                                               |
| owner_valid_till_date      | String    | Validity of the card series in UTC timestamp.                                                                                                                                                          |
| metadata                   | String    | Metadata associated with the coupon series.                                                                                                                                                            |
| campaign                   | String    | Campaign associated with the coupon series.                                                                                                                                                            |
| client_handling_type       | String    | Defines the method using which the coupons should be generated. DISC_CODE (generate coupon codes automatically), GENERIC (provide a common coupon code), DISC_CODE_PIN (Upload existing coupon codes). |
| discount_value             | String    | The discount value provided through the coupon.                                                                                                                                                        |
| auto_update_voucher_series | Bigint    | Date and time when the voucher_series table available at the source was last updated. It is in the Unix timestamp format.                                                                              |
| campaign_id                | Bigint    | Campaign ID associated with the coupon series.                                                                                                                                                         |
| expiry_strategy_type       | String    | Expiry strategy type. SERIES_EXPIRY - coupon expires along with the offer, MONTHS_END - Coupon expires at the end of specific month.                                                                   |
| valid_till_date            | String    | Validity of the coupon.                                                                                                                                                                                |
| series_type                | String    | Coupon series type. For example, Loyalty.                                                                                                                                                              |
| series_id                  | Bigint    | Unique coupon series ID.                                                                                                                                                                               |
| discount_code              | String    | Discount code associated with the series.                                                                                                                                                              |
| expiry_strategy_value      | String    | Expiry strategy value for the expiry strategy type MONTH END.                                                                                                                                          |
| auto_update_owner_info     | Bigint    | Date and time when the owner_info table available at the source was last updated. It is in the Unix timestamp format.                                                                                  |

## Coupon issual type (coupon_issual_type)

**Databricks table name:** coupon_issual_type

This table captures the type of coupon that has been issued.

| Column Name | Data Type | Description                                                                   |
| ----------- | --------- | :---------------------------------------------------------------------------- |
| id          | Bigint    | Coupon series ID from which the coupon should be issued.                      |
| type        | String    | Indicates the type of coupon issued. Possible values are - Single, Bulk, NCA. |

## Entry type (entry_type)

**Databricks table name:** entry_type

This table captures the entry type for the coupons issual or redemption event.

| Column Name | Data Type | Description                                                                                                    |
| ----------- | --------- | :------------------------------------------------------------------------------------------------------------- |
| id          | Bigint    | Unique identifier for the table.                                                                               |
| value       | String    | Captures the entry type for the coupons issual or redemption, whether it is a manual entry or through Intouch. |

## Redeemed status (redeemed_status)

**Databricks table name:** redeemed_status

This table captures the coupon event type (issual redemption).

| Column Name | Data Type | Description                                    |
| ----------- | --------- | :--------------------------------------------- |
| id          | Bigint    | Unique identifier for the table.               |
| status      | String    | Indicates if the coupon is issued or redeemed. |

## Program  (program)

**Databricks table name:** program

The program table captures all the details for loyalty program.

| Column Name                  | Data Type | Description                                                                                                                          |
| :--------------------------- | :-------- | :----------------------------------------------------------------------------------------------------------------------------------- |
| points_currency_ratio        | integer   | The ratio of points to currency, indicating how many loyalty points are equivalent to one unit of currency.                          |
| auto_update_time             | bigint    | Indicates the date and time when the corresponding record in the program table was last updated. It is in the Unix timestamp format. |
| redeemable_point_category_id | bigint    | Unique identifier for the category of points that are eligible for redemption by a customer.                                         |
| program_id                   | bigint    | Unique identifier assigned to the loyalty program. It is the primary key for this table.                                             |
| is_active                    | boolean   | Indicates whether the loyalty program is currently active.                                                                           |
| program_name                 | string    | The specific name assigned to the loyalty program for identification.                                                                |
| is_default                   | boolean   | Indicates whether this is the default program when multiple programs are available.                                                  |
| description                  | string    | Provides a description or additional information about the loyalty program.                                                          |

## Partner Programs (partner_programs)

**Databricks table name:** partner_programs

The program table captures all the details for all available partner programs.

| Column Name          | Data Type | Description                                                                           |
| :------------------- | :-------- | :------------------------------------------------------------------------------------ |
| partner_program_id   | integer   | A unique identifier for the partner program.                                          |
| partner_program_name | string    | The name of the partner program.                                                      |
| auto_update_time     | date      | The timestamp when the partner program's slab history was last automatically updated. |
| partner_program_type | enum      | The type of partner program.                                                          |
| description          | string    | A description of the partner program.                                                 |
| is_tier_based        | boolean   | Indicates whether the partner program is tier-based.                                  |

<br />
