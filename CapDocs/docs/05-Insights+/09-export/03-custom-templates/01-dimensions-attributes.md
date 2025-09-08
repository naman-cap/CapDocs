---
title: Dimensions & attributes
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
## A


### admin_user


| Attribute                                                            | Values | Description                                                   |
| :------------------------------------------------------------------- | :----- | :------------------------------------------------------------ |
| first_name, middle_name, last_name, is_active, is_deleted, id, email | -      | Same as user dimension. Refer to the U table for more details |
| is_active                                                            | 0, 1   | Whether the user is active (1) or inactive (0)                |
| is_deleted                                                           | 0, 1   | Whether the user is deleted (1) or not                        |

### awarded_type


| Attribute | Values | Description |
| --- | --- | --- |
| points | POINT_AWARDED, POINT_AWARDED_BILL_PROMOTION, POINT_AWARDED_LINEITEM, POINT_AWARDED_LINEITEM_PROMOTION, POINT_AWARDED_CUSTOMER_PROMOTION | Points awarded through a loyalty program or promotional program.  
  
_ Point awarded: Total number of points awarded  
_ Point awarded bill promotion: Bill level promotional points awarded  
_ Point awarded lineitem: Points awarded at lineitem level  
_ Point awarded lineitem promotion: Lineitem level promotion points awarded  
  
- Point awarded customer promotion: Customer level promotion points awardedWithin a transaction it also highlights whether awarded type point was at a product level or not |

### awarded_zone_till


| Attribute | Values  | Description                                                                       |
| --------- | ------- | --------------------------------------------------------------------------------- |
| points    | Till_ID | TILL id from which points are awarded. This works on the basis of store hierarchy |

## B


### badgemeta


| Attribute     | Values           | Description                                                                           |
| ------------- | ---------------- | ------------------------------------------------------------------------------------- |
| badgeRank     | 1,2,3...         | The rank of a badge within a group.                                                   |
| groupRank     | 1,2,3,4          | The hierarchical order of various groups, determining their priority.                 |
| expiresOn     | Date             | Expiry date of the badge.                                                             |
| isActive      | true, false      | Indicates whether the badge is currently active.                                      |
| startOn       | Date             | Timestamp indicating when the badge starts.                                           |
| badgeMetaId   | String value     | Unique identifier for each badge. This is generated during the creation of the badge. |
| earnType      | earn, issue earn | The method the brand has used to issue the badge, either "earn" or "issue earn".      |
| badgeName     | String value     | Name of the badge.                                                                    |
| groupName     | String value     | Name of the badge group.                                                              |
| groupIsActive | true, false      | Indicates whether the group is currently active or not.                               |
| badgeGroupId  | String value     | Unique identifier for the badge group.                                                |

### badges_owner_type


| Attribute | Values | Description                                                                                                                                                                                                  |
| --------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| value     | 1 to 9 | The module for which the badge is created. Possible values are - Referral_Campaigns, Audience_Campaigns, Membercare, Rewards_Catalog, Milestones, Historical_Import, Journeys, Goodwill_Module, and Loyalty. |

### bill_type


| Attribute | Values                  | Description                                                                                                                                                            |
| --------- | ----------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| value     | REGULAR, NOT_INTERESTED | Type of bill based on loyalty status of customers.<br  />Regular for transactions with customer tagging and not_interested for transactions without any customer tagging. |

### booking_type


| Attribute    | Values                    | Description |
| ------------ | ------------------------- | ----------- |
| booking_type | dine_in, delivery, pickup | -           |

## C


### campaign_delivery_status


| Attribute | Values | Description |
| --- | --- | --- |
| Attributes explained below | status_id, veneno_status_label, campaign_legend_status_id, campaign_legend_lebel  
(attributes explained below) |  |
| status_id | \-3 to 30 |  |
| veneno_status_label | DELAYED_DELIVERY, CLICKED, OPENED, SENT, DELIVERED, NOT_DELIVERED, FAILED, SENT_TO_NSADMIN, SENT_TO_CALL_TASK, BLOCKED, DND_BLOCKED, NDNC_BLOCKED, CREDIT_LIMIT_EXCEEDED, RELEVENCE_TIMEOUT, PARTIAL_RESPONSE, RATE_LIMIT_EXCEEDED, IN_GTW, HARD_BOUNCED, SOFT_BOUNCED, TIMEOUT, RETRY_TIMEOUT, HANDLER_NOT_FOUND, OPENED_INTOUCH, CLICKED_INTOUCH, MARKED_SPAM, GTW_NOT_FOUND, ORG_DISABLED, MARKED_UNSUBSCRIBED, SUBSCRIPTION_SERVICE_ERROR, GTW_PROCESSED, MOBILE_WHITELISTED_BLOCKED |  |
| campaign_legend_status_id | 0-13 |  |
| campaign_legend_lebel | Not Delivered, Clicked, Opened, Sent, Delivered, Not Delivered, System Error, About to send, Customers cannot be targeted, Bounced, Marked Spam, Configuration issue, Marked Unsubscribe, Users not whitelisted |  |

### campaign_group


| Attribute                                                                                                        | Values                 | Description                                                         |
| :--------------------------------------------------------------------------------------------------------------- | :--------------------- | :------------------------------------------------------------------ |
| campaign start date, campaign end date, group type, name, campaign, group_version_number, roi_type, is_recurring | -                      | Consists of campaign level attributes                               |
| is_recurring                                                                                                     | true, false            | Whether the campaign is a recurring campaign or a one-time campaign |
| campaign start date                                                                                              |                        | Start date of a campaign                                            |
| campaign end date                                                                                                |                        | End date of a campaign                                              |
| group_type                                                                                                       | test, control, all     |                                                                     |
| name                                                                                                             | campaign group name    |                                                                     |
| campaign                                                                                                         | campaign name          | Name of the campaign                                                |
| roi_type                                                                                                         | onetime, birthday_comm |                                                                     |
| group_version_number                                                                                             |                        | Version number of the campaign group as in the source               |

### campaign_message


| Attribute           | Values                                  | Description                                  |
| :------------------ | :-------------------------------------- | :------------------------------------------- |
| campaign_start_date |                                         |                                              |
| msg_type            |                                         |                                              |
| id                  |                                         |                                              |
| is_recurring        | true, false                             |                                              |
| guid                |                                         |                                              |
| scheduled_type      | SCHEDULED, PARTICULAR_DATE, IMMEDIATELY |                                              |
| status              | OPEN, SENT, REJECTED                    |                                              |
| campaign            | Campaign names                          | Name of a campaign as defined while creating |
| campaign_end_date   |                                         | End date of a campaign                       |

### campaign_schedule_date


| Attribute     | Values | Description                                                                                |
| ------------- | ------ | ------------------------------------------------------------------------------------------ |
| date-property | -      | Date when the campaign is Scheduled (Date property). Refer to the D table for more details |

### cashier_discount_reason


| Attribute                   | Values                                                                                                                                                                                        | Description |
| --------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| reason, auto_update_cashier | Reason: manager_discount, gift_card_discount, employee_discount, member_discount, incorrect_label, advertisement, wrong_display, bulk_customer, wrong_scan, customer, display, faulty, damage | -           |

### channel_account


| Attribute                                                                                | Values | Description |
| ---------------------------------------------------------------------------------------- | ------ | ----------- |
| channel_account_id, auto_update_org_channel_accounts, account_name, auto_update_channels | -      |             |

### communication_channel


The mode of communication with the customer

| Attribute     | Values                                     | Description |
| :------------ | :----------------------------------------- | :---------- |
| channel       | sms, email, wechat, android and IOS        |             |
| activity_name | SendSMSActivity, SendEmailActivity, Others |             |

### communication_type


| Attribute | Values                                    | Description                                                                                                                                                                                                                                               |
| --------- | ----------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| type      | trans, trans_emf, bulk_test, bulk_control | Communication category via. which a customer was contacted. <br  />Trans for transaction message, trans_emf for transactions generated through emf, bulk_test for bulk messages sent to test group, and bulk_control for bulk messages sent to control group |

### Concept Hierarchy


It is a logical grouping of stores. For example, electronics, jewelry, apparels and so on

| Attribute    | Values                                  | Description                                                                                                                     |
| ------------ | --------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| concept_name | Concept names as defined for the client | If store require classification which are non-geographic, concepts are used,for example store in mall or store outside mall etc |

### coupon_issual_type


| Attribute | Values            | Description                                                                                                                                                                                                 |
| --------- | ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| coupon    | Single, Bulk, NCA | If multiple coupons are issued for a campaign, it is termed as bulk coupon issual type.<br  />If a single coupon is issued as a response to a bounce back campaign, it is termed as single coupon issual type. |

### coupon_series


| Attribute             | Values                                     | Description                   |
| :-------------------- | :----------------------------------------- | :---------------------------- |
| campaign              |                                            | Name of a campaign            |
| discount_value        |                                            | Discount amount of a campaign |
| series_id             |                                            |                               |
| owner_valid_till_date |                                            |                               |
| campaign_id           |                                            | Unique ID of the campaign     |
| description           |                                            |                               |
| discount_code         |                                            |                               |
| series_type           | campaign, goodwill, DVS, loyalty, timeline |                               |
| client_handling_type  |                                            |                               |
| discount_type         | ABS, PERC                                  |                               |
| valid_till_date       |                                            |                               |
| expiry_strategy_type  | days, series_expiry                        |                               |
| expiry_strategy_value |                                            |                               |

### customer_slab


| Attribute | Values | Description |
| --- | --- | --- |
| slab_no, slab_name, serial_no | - | slab_name: Name of a loyalty tier as defined in the organization's loyalty program. <br  />slab_no: Tier number as per the source<br  />serial_no: Order of a tier. For example, 1 for the lowest tier |

## D


### date


Denotes time range selection for events like transaction, registration and campaign communication

| Attribute       | Values                                         | Description                                                                                  |
| :-------------- | :--------------------------------------------- | :------------------------------------------------------------------------------------------- |
| Year            |                                                | Year in YYYY format                                                                          |
| Quarter         | Q1, Q2, Q3, Q4 followed by year in YYYY format | Quarter (Q1, Q2, Q3, Q4) along with the respective year. For example, Q3, 2019               |
| Quarter_no      |                                                | Quarter number starting from the year 1901                                                   |
| Year_quarter_no |                                                | Quarter number with respect to the calendar year- 1 for Q1, 2 for Q2, 3 for Q3, and 4 for Q4 |
| Month           |                                                | Month of the event along with the year. For example, Dec, 2019                               |
| Data            |                                                | Date of the event in 'YYYY-MM-DD' format                                                     |

### deduction type


| Attribute | Values | Description |
| --- | --- | --- |
| Points | Expired, Migration, Redeemed, Return | Entry through which points were deducted from customers account. <br  /> Redeemed: Points that were redeemed against transactions <br  /> Expired: Points that were expired as per expiry strategy <br  /> Migration: Points that are migrated <br  /> Return: Points that were reverted due to transaction return |
| Delivery Status | campaign delivery status, NSAdmin delivery status | Delivery status of a communication sent to a customer. <br  /> campaign delivery status is the delivery status given by the final third party gateway which pushes the communication. <br  /> NSAdmin delivery status describes the delivery status given back by the internal gateway of Capillary. |

## E


### Email Open Date & Time


| Attribution                      | Value | Description                                 |
| :------------------------------- | :---- | :------------------------------------------ |
| Email open date, Email open time |       | Date and time when email was opened         |
| email_open_date                  |       | Date property when an email is first opened |
| email_open_time                  |       | Time property when an email is first opened |

### Enabled


| Attribution | Value       | Description                            |
| :---------- | :---------- | :------------------------------------- |
| value       | True, False | Gives the enabled status of the badge. |

## L


### latest_updated_date


| Attribute                                                         | Value                                                             | Description                                                                                                                    |
| :---------------------------------------------------------------- | :---------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------- |
| Date property. Refer to the Date dimension in table D for details | Date property. Refer to the Date dimension in table D for details | Date when the event is recently updated. Refer to the Date dimension in D table for all attributes and values of date property |

### loyalty_type


| Attribution | Value | Description |
| --- | --- | --- |
|  | Loyalty, Non-loyalty | This represents to which loyalty type a customer belongs.  
  
A customer that is part of the organization's loyalty program is a loyalty customer.  
A customer that did not enroll in the organization's loyalty program but registered either mobile number or email id to receive transactional and promotional messages from the organization is a non-loyalty customer. |

## M


### Membership Type


| Attribute | Value                                          | Description                                                                                                                                                                                                                                           |
| :-------- | :--------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| type      | Member, Not-interested, loyalty not-interested | Membership type can be described as Member or Non Member. Customers who shared their personal identifier (mobile, email) with the organization are members and who did not share their personal identifier are non-members (not-interested customers) |

### merge_status


| Attribute | Values           | Description |
| --------- | ---------------- | ----------- |
| status    | unmerged, merged | -           |

### mongo_event_button_state


| Attribute | Values          | Description |
| --------- | --------------- | ----------- |
| state     | normal, deleted | \-Internal- |

### mongo_event_button_type


| Attribute | Values      | Description |
| --------- | ----------- | ----------- |
| type      | view, click | -           |

## N


### ndnc_status


| Attribute | Values                      | Description |
| --------- | --------------------------- | ----------- |
| status    | NDNC, INVALID, DND, UNKNOWN | ***         |

### nps_score


| Attribute | Values | Description |
| --------- | ------ | ----------- |
| score     | 0-7    | -           |

### nsadmin_priority


| Attribute | Values              | Description |
| --------- | ------------------- | ----------- |
| priority  | high, default, bulk | -           |

## P


### points_awarded_type


| Attribute | Values                                                                                                                                         | Description                                                                                                                                   |
| --------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| type      | Points awarded, points awarded bill promotion, points awarded customer promotion, points awarded line-item, points awarded line-item promotion | Source from which points are allocated to customers. <br  />For example, bill promotion, product promotion, or customer promotion (on birthdays) |

### Points Category


| Attribute | Values                     | Description                                                                                                                                                                      |
| --------- | -------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| points    | Redeemable, Non-redeemable | Redeemable points are the issued points that can be redeemed by a customer. <br  />Non-redeemable points are tracker points that can neither be redeemed by a customer nor expired. |

### points_event_type


| Attribute | Values                          | Description                                                                                                                                                                         |
| --------- | ------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| type      | Points awarded, Points deducted | Points allocated to a customer will reflect as points awarded and points were taken off from a customer account (as redeemed, expired, or returned) will reflect as points deducted |

### points_promotion


| Attribute  | Values                                     | Description                                                        |
| ---------- | ------------------------------------------ | ------------------------------------------------------------------ |
| type, name | -                                          | The promotional event through which points are issued to customers |
| type       | Varies based on the promotion setup        | -                                                                  |
| name       | User defined name of the promotion program | -                                                                  |

### Product


This is a product hierarchy dimension which has a drill down and roll up feature for every department to drill down on the basis of product category, available only after category mapping from configuration page

| Attribute | Values              | Description |
| --------- | ------------------- | ----------- |
| category  | User defined values | -           |

| Attribute    | Values              | Description |
| ------------ | ------------------- | ----------- |
| sub category | User defined values | -           |

| Attribute  | Values              | Description |
| ---------- | ------------------- | ----------- |
| department | User defined values | -           |

### Promotion Type


| Attribute | Values                     | Description                                                                                                                |
| --------- | -------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| points    | Customer promo, Bill promo | Represents the source of promotional points awarded to customers - customer level promotion or transaction level promotion |

## S


### Store Hierarchy


A hierarchical store level attribute used to get store level information of KPIs.

| Attribute   | Value                                      | Description                                                                                                                                                                                                                         |
| :---------- | :----------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| till_name   | Till names as defined in Capillary system  | Name of the till, this is the lowest entity at a store level, a till is named after a point of sale in a store                                                                                                                      |
| is_billable | billable, non billable                     | If a store is charged by Capillary to the client , it is termed as billable otherwise its non billable                                                                                                                              |
| store_city  | City names                                 | City corresponding to a store                                                                                                                                                                                                       |
| store_name  | Store names as defined in Capillary system | One level above till, this name pertains to the single store                                                                                                                                                                        |
| type        | admin, general                             | General stores are the stores which are actually present with the client, admin stores are virtual or actual stores but 100% used for testing out Capillary process, data from these stores are removed from analysis and reporting |
| till        |                                            | Name of the till, this is the lowest entity at a store level, a till is named after a point of sale in a store                                                                                                                      |
| zone_name   | zones to which store belong                | These are geographic zones that are used to categorize stores for Zonal Manager's view                                                                                                                                              |
| store       | Client defined store name                  | This is the store name as per the client naming convention used and serves the same purpose as store_name                                                                                                                           |
| zone        | Zone to which a store belongs              | Geographical zones used to categorize stores                                                                                                                                                                                        |

## T


### Time


Timestamp of events like transaction, registration, and campaign communication

| Attribute | Value | Description |
| --- | --- | --- |
| Day_shift | Morning, afternoon, night, midnight | > =06:00:00 to \ =12:00:00 to \ =16:00:00 to \ =20:00:00 to \ =00:00:00 to \