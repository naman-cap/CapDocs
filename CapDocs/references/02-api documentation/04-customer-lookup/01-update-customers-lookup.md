---
title: Update Customer Details
excerpt: >-
  Lets you update customer details using the registered identifiers of the
  customer.
api:
  file: update-customer-information.json
  operationId: put_v2-customers-lookup
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
## Request Body Parameters

| Parameter                 | Datatype  | Description                                                                                                                                                                                                                                      |
| ------------------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| loyaltyType               | enum      | Loyalty status of the customer. Value: `loyalty`, `non_loyalty`.                                                                                                                                                                                 |
| commChannels              | obj       | Communication channels of the customer.                                                                                                                                                                                                          |
| type                      | enum      | Type of the communication channel. Value: `mobile`, `email`, `wechat`, `ios`, `android`, `line, mobilePush`.                                                                                                                                     |
| value                     | string    | Based on the channel `type` enter the channel value. Example, mobile number is the value for `type:mobile`, firebase token for `type:mobilePush`. mobilePush is supported for sources mobile\_app, Instore, Martjack, Ecommerce, and Website     |
| primary                   | boolean   | Whether the current identifier is the primary identifier of the customer (primary identifier as per the org's configuration).                                                                                                                    |
| lastViewedDate            | date      | Date when the customer recently opened the app. Applicable for the channel 'mobilePush'.                                                                                                                                                         |
| verified                  | boolean   | Whether the current identifier is verified or not. For example, through OTP.                                                                                                                                                                     |
| profiles                  | obj       | Profile information of the customer.                                                                                                                                                                                                             |
| meta                      | obj       | Additional information of the identifier.                                                                                                                                                                                                        |
| Firstname                 | string    | First name of the customer.                                                                                                                                                                                                                      |
| Lastname                  | string    | Last name of the customer.                                                                                                                                                                                                                       |
| identifiers               | obj       | Identifiers of the customer that you want to add in type and value. Supported types: `mobile`, `email`, cardnumber`externalId`, `wechat`,`martjackId`, `fbId` `mobile`, `tmall_uname`, `cuid`, `ali_uname`, `jd_uname`, `vip_uname`, and `line`. |
| profiles                  | fields    | Custom field details (only that configured for the organization)                                                                                                                                                                                 |
| extendedFields            | obj       | Extended field details of the customer in key:value pairs. You can only pass extended fields that are enabled for your org with the respective datatypes for values.                                                                             |
| fields                    | obj       | Custom field details of the customer in key:value pairs.                                                                                                                                                                                         |
| loyaltyProgramEnrollments | obj       | Lets you enroll new customers in the loyalty program.                                                                                                                                                                                            |
| programId                 | int       | Unique ID of the loyalty program in which you want to enroll. You cannot update details if the customer is already enrolled in the loyalty program.                                                                                              |
| tierNumber                | int       | Sequence number of the tier that you want to allocate to the customer. For example, `1` for the lower tier, `2` for the next tier, and so on.                                                                                                    |
| loyaltyPoints             | int       | Loyalty points to credit in customer's account.                                                                                                                                                                                                  |
| tierExpiryDate            | date-time | Expiry date and time of the specified tier. Supported Format: YYYY-MM-DDTHH:MM:SS+/-(time-zone).                                                                                                                                                 |
| pointsExpiryDate          | date-time | Expiry date and time of the points issued. Supported Format: YYYY-MM-DDTHH:MM:SS+/-(time-zone).                                                                                                                                                  |

<aside class="notice">Parameters marked with * are mandatory. </aside>
