---
title: Get OTP
excerpt: >-
  Allows fetching recent OTP issued to a customer. For now, OTP is issued for
  redeeming points/coupons and customer registration. If there is more than one
  valid OTP available for the customer, this API fetches the recently issued
  OTP.
api:
  file: v2.json
  operationId: get-otp
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
# Path parameters

| Parameter       | Datatype | Description                                                                                                                                                                       |
| --------------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| identifierName  | enum     | Pass any of the registered identifier type of the customer. Values: mobile, email, external\_id, wechat.                                                                          |
| identifierValue | string   | Specify the value of the specified identifierType                                                                                                                                 |
| source          | enum     | Source in which the customer is registered.                                                                                                                                       |
| accountId       | string   | Account ID of the source such as WeChat and Facebook. Required for sources with multiple accounts.                                                                                |
| threshold       | long     | Specify the validity of the OTP (in seconds) that you want to fetch.                                                                                                              |
| scope           | enum     | Specify the scope of the issued OTP. Values: COUPON (for coupon redemption), POINTS (for points redemption), REGISTRATION, USERGROUP, SUBSCRIPTION, GENERIC (for other purposes). |

# Response parameters

| Parameter | Datatype  | Description                                                             |
| :-------- | :-------- | :---------------------------------------------------------------------- |
| orgId     | Long      | Unique ID of the org (the current org) from which the OTP is generated. |
| userId    | Long      | Unique ID of the customer to whom the OTP is sent.                      |
| code      | String    | The OTP, or validation code, sent to the customer.                      |
| validUpto | Date-Time | The validity of the OTP in YYYY:MM:DDTHH:MM:SS+[Time Zone]              |

<Note title="Note">
You can generate up to 10 OTPs per user per day.
</Note>