---
title: Check If Points Redeemable
excerpt: ''
api:
  file: customer-v11.json
  operationId: check-if-points-redeemable
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
Allows redeeming active points of customers according to the redemption criteria set for the organization (Loyalty Program). For example, you could set redemption criteria as allow redemption only in multiples of 10 and a maximum of 200 points per time.

This API lets you verify whether a specific number of points can be redeemed by a customer. With this API, you can now issue validation code to the customer automatically upon successful validation. This will reduce an additional step of calling `/points/validationcode` API to issue validation code.

> 📘
>
> If there is any problem in issuing validation code, Points Redeemable but OTP Generation failed error will be displayed (876) \* if points validation itself fails, then the relevant error message will be displayed

# Prerequisites

*   Basic Authentication
*   Default access group

## Resource information

| URI                   | v1.1/points/isredeemable? |
| :-------------------- | :------------------------ |
| HTTP method           | GET                       |
| Authentication        | Basic                     |
| Pagination supported? | NO                        |
| Rate limit            | YES                       |
| Batch support         | NO                        |

## Request Parameters

<Table align={["left","left","left"]}>
  <thead>
    <tr>
      <th>
        Parameter (Parameters marked in \* are mandatory)
      </th>

      <th>
        Type
      </th>

      <th>
        Description
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        mobile/email/external\_id/card\_number/card\_external\_id\*
      </td>

      <td>
        Enum
      </td>

      <td>
        Pass any of the registered identifier type.
      </td>
    </tr>

    <tr>
      <td>
        program\_id\*
      </td>

      <td>
        long
      </td>

      <td>
        Unique ID of the loyalty program from which points need to redeem.
      </td>
    </tr>

    <tr>
      <td>
        group\_redemption
      </td>

      <td>
        boolean
      </td>

      <td>
        Pass `true` for group redemption - points earned in one program need to redeem in a different program of the org.
      </td>
    </tr>

    <tr>
      <td>
        points
      </td>

      <td>
        int
      </td>

      <td>
        Number of points to redeem.
      </td>
    </tr>

    <tr>
      <td>
        issue\_otp
      </td>

      <td>
        boolean
      </td>

      <td>
        Pass `true` to issue OTP if the validation is successful.
      </td>
    </tr>

    <tr>
      <td>
        validation\_code
      </td>

      <td>
        string
      </td>

      <td>
        OTP issued to the customer’s mobile number.
      </td>
    </tr>

    <tr>
      <td>
        skip\_validation
      </td>

      <td>
        boolean
      </td>

      <td>
        Pass `true` if you want to skip validation.
      </td>
    </tr>

    <tr>
      <td>
        validation\_type
      </td>

      <td>
        Enum
      </td>

      <td>
        Preferred mode of validation.
        Value: `MISSED_CALL`, `SMS`, `INVALID`.
        Use invalid if you want to skip\_validation.
      </td>
    </tr>

    <tr>
      <td>
        user\_group2\_primary\_user\_id
      </td>

      <td>
        long
      </td>

      <td>
        Unique user ID of the primary member of the group associated with the points to redeem.
      </td>
    </tr>

    <tr>
      <td>
        user\_group2\_id
      </td>

      <td>
        int
      </td>

      <td>
        Unique ID of the group associated with the points to redeem.
      </td>
    </tr>

    <tr>
      <td>
        user\_group2\_primary\_user\_source
      </td>

      <td>
        Enum
      </td>

      <td>
        Source in which the primary user’s identifier is available.
        Value: `FACEBOOK`, `WEB_ENGAGE`, `WECHAT`, `INSTORE`, `MARTJACK`, `TMALL`, `TAOBAO`, `JD`, `ECOMMERCE`, `WEBSITE`, `LINE`, `MOBILE_APP`.
      </td>
    </tr>

    <tr>
      <td>
        user\_group2\_primary\_user\_accountId
      </td>

      <td>
        string
      </td>

      <td>
        Account ID of the source with multiple accounts such as WECHAT.
      </td>
    </tr>

    <tr>
      <td>
        user\_group2\_primary\_user\_identifier\_type
      </td>

      <td>
        Enum
      </td>

      <td>
        Identifier type used for the primary member.
        Value: `mobile`, `email`, `cardnumber`, `cardExternalId`, `id`.
      </td>
    </tr>

    <tr>
      <td>
        user\_group2\_primary\_user\_identifier\_value
      </td>

      <td>
        string
      </td>

      <td>
        Value of the specified identifier type.
      </td>
    </tr>

    <tr>
      <td>
        user\_group2\_external\_id
      </td>

      <td>
        string
      </td>

      <td>
        Unique external ID of the group associated with the points to redeem.
      </td>
    </tr>

    <tr>
      <td>
        use\_default\_user\_group2
      </td>

      <td>
        boolean
      </td>

      <td>
        Pass `true` to associate the default group with the points to redeem.
      </td>
    </tr>

    <tr>
      <td>
        currency\_input
      </td>

      <td>
        boolean
      </td>

      <td>
        Pass `true` whether the points of worth n can be redeemed. For example, you can check if points of worth $5 can be redeemed (assuming $ as the base currency). To use this, ensure that the org currency ratio is configured for the org.
      </td>
    </tr>
  </tbody>
</Table>

## Response Parameter

| Parameter Path                | Type    | Description                                                                   |
| :---------------------------- | :------ | :---------------------------------------------------------------------------- |
| response                      | boolean | true if the request succeeded.                                                |
| status                        | integer | HTTP status code (e.g., 200 for success).                                     |
| -message                      | string  | Human-readable status message (e.g., "Success").                              |
| mobile                        | string  | Customer’s registered mobile number (masked or full, based on configuration). |
| email                         | string  | Customer’s registered email address.                                          |
| externalId                    | string  | Customer’s external identifier                                                |
| points                        | integer | Points requested for redemption.                                              |
| -is\_redeemable               | boolean | true if points are redeemable.                                                |
| -points\_redeem\_value        | decimal | Equivalent monetary value of redeemable points                                |
| -points\_redeem\_local\_value | decimal | Equivalent monetary value in local currency (if conversion is enabled).       |
| -input\_type                  | string  | Type of input (e.g., "points" or "currency").                                 |
| points\_currency\_ratio       | string  | Conversion ratio between points and currency (e.g., "1").                     |
| -item\_status                 | boolean | true if points validation passed.                                             |
| --code                        | integer | Sub-status code for redemption checks (e.g., 800).                            |
| --message                     | string  | Detailed message (e.g., "Points can be redeemed").                            |

```json Sample response
{
    "response": {
        "status": {
            "success": "true",
            "code": 200,
            "message": "Success"
        },
        "points": {
            "redeemable": {
                "mobile": "919777785205",
                "email": "testgrp3@gmail.com",
                "external_id": "434547",
                "points": 10,
                "is_redeemable": "true",
                "points_redeem_value": 10,
                "points_redeem_local_value": 10,
                "input_type": "points",
                "points_currency_ratio": "1",
                "item_status": {
                    "success": "true",
                    "code": 800,
                    "message": "Points can be redeemed"
                }
            }
        }
    }
}
```

## API specific error codes

| Error Code | Description                                                                            | Reason                                                             |
| :--------- | :------------------------------------------------------------------------------------- | :----------------------------------------------------------------- |
| 889        | Points processing failed, Please try again later Reason : Failed to Connect to Service | Invalid Customer identifiers passed                                |
| 1101       | invalid programId passed                                                               | Invalid `programId` passed                                         |
| 801        | Trying to redeem invalid points                                                        | Invalid `points` parameter passed (e.g, negative points value)     |
| 818        | Current points are less than points requested for redemption                           | Points redemption value is lesser than the current/existing points |