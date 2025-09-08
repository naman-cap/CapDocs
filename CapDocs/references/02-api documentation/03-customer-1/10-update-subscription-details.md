---
title: Update Subscription Details
excerpt: ''
api:
  file: v2.json
  operationId: update-subscription-details
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
You can also use this API endpoint to update subscription details:` /lookup/subscriptions?{queryParams}`

This API allows updating (opt-in or opt-out) subscription status of transactional and bulk messaging services for a customer.

* **Transaction Messages:** These are personalized messages sent to a customer instantly. For example, a new transaction details, points or coupon redeemed, send birthday or anniversary wishes and so on.
* **Bulk Messages:** These are promotion messages sent to a list of customers. For example, through campaigns.

<Note title="Note">
Make sure communication channels like Mobile and Email are configured in InTouch for subscription.
</Note>

![fbad66fb001361daf225f2c963cfaca13983a821567ba83f239d4941b7f0f9ab Screenshot 2025 04 30 at 12](https://files.readme.io/fbad66fb001361daf225f2c963cfaca13983a821567ba83f239d4941b7f0f9ab-Screenshot_2025-04-30_at_12.28.46_PM.png)

### API Endpoint example

`https://eu.api.capillarytech.com/v2/customers/565039505/subscriptions?format=json`

```curl
curl --location --globoff 'https://eu.api.capillarytech.com/v2/customers/{userId}/subscriptions?format=json' \
--header 'accept: application/json' \
--header 'content-type: application/json' \
--header 'Authorization: Basic cnV0dWphX2NhcGlsbGFyeTpkMTNlMmEyYmY4OWRkNDAxN2U0Y2EwOTk1MGI0NzZjNg==' \
--header 'Cookie: _cfuvid=rxRpkG0ZaHhqCspOGoNMJ1Zw3B.833ToyoOw1GvD6HU-1750747343765-0.0.1.1-604800000' \
--data '
{
  "communicationId": -1,
  "campaignId": -1,
  "reason": "This is V2 subscription api",
  "scope": {
    "scope": "USER",
    "subScope": "NONE"
  },
  "subscriptions": [
    {
      "channel": "EMAIL",
      "priority": "BULK",
      "type": "OPTOUT",
      "orgUnitId": 200031782,
      "sourceName": "FACEBOOK",
      "accountId": "01"
    },
    {
      "channel": "MOBILE",
      "accountId": "01",
      "priority": "BULK",
      "type": "OPTIN",
      "orgUnitId": 200031782,
      "sourceName": "FACEBOOK"
    },
    {
      "channel": "EMAIL",
      "accountId": "01",
      "priority": "TRANS",
      "type": "OPTIN",
      "orgUnitId": 200031782,
      "sourceName": "FACEBOOK"
    },
    {
      "channel": "MOBILE",
      "accountId": "01",
      "priority": "TRANS",
      "type": "OPTOUT",
      "orgUnitId": 200031782,
      "sourceName": "FACEBOOK"
    }
  ]
}
'
```
```json Sample request for update subscription
curl --location 'https://eu.api.capillarytech.com/v2/customers/564590100/subscriptions?format=json' \
--header 'accept: application/json' \
--header 'content-type: application/json' \
--data '
{
  "communicationId": -1,
  "campaignId": -1,
  "reason": "This is V2 subscription api",
  "scope": {
    "scope": "USER",
    "subScope": "NONE"
  },
  "subscriptions": [
    {
      "channel": "EMAIL",
      "priority": "BULK",
      "type": "OPTOUT",
      "orgUnitId": 200031782,
      "sourceName": "FACEBOOK",
      "accountId": "01"
    },
    {
      "channel": "MOBILE",
      "accountId": "01",
      "priority": "BULK",
      "type": "OPTIN",
      "orgUnitId": 200031782,
      "sourceName": "FACEBOOK"
    },
    {
      "channel": "EMAIL",
      "accountId": "01",
      "priority": "TRANS",
      "type": "OPTIN",
      "orgUnitId": 200031782,
      "sourceName": "FACEBOOK"
    },
    {
      "channel": "MOBILE",
      "accountId": "01",
      "priority": "TRANS",
      "type": "OPTOUT",
      "orgUnitId": 200031782,
      "sourceName": "FACEBOOK"
    }
  ]
}
'
```

### Request Body Parameters

<Table align={["left","left","left","left"]}>
  <thead>
    <tr>
      <th>
        Field
      </th>

      <th>
        Type
      </th>

      <th>
        Required
      </th>

      <th>
        Description
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        communicationId
      </td>

      <td>
        long
      </td>

      <td>
        Optional
      </td>

      <td>
        Communication ID. Pass `-1` when not applicable or when updating general subscription preferences.
      </td>
    </tr>

    <tr>
      <td>
        campaignId
      </td>

      <td>
        long
      </td>

      <td>
        Optional
      </td>

      <td>
        Campaign ID. Pass `-1` when not applicable.
      </td>
    </tr>

    <tr>
      <td>
        reason
      </td>

      <td>
        string
      </td>

      <td>
        Optional
      </td>

      <td>
        Reason for updating the subscription.
      </td>
    </tr>

    <tr>
      <td>
        scope
      </td>

      <td>
        object
      </td>

      <td>
        Optional
      </td>

      <td>
        Scope details for the subscription update.
      </td>
    </tr>

    <tr>
      <td>
        * scope
      </td>

      <td>
        string
      </td>

      <td>
        Optional
      </td>

      <td>
        Main scope of the subscription. Example: `USER`.
      </td>
    </tr>

    <tr>
      <td>
        * subScope
      </td>

      <td>
        string
      </td>

      <td>
        Optional
      </td>

      <td>
        Sub-scope of the subscription. Example: `NONE`.
      </td>
    </tr>

    <tr>
      <td>
        subscriptions*
      </td>

      <td>
        array
      </td>

      <td>
        Yes
      </td>

      <td>
        List of subscription objects defining detailed preferences. At least one object is required.
      </td>
    </tr>

    <tr>
      <td>
        * channel*
      </td>

      <td>
        enum
      </td>

      <td>
        Yes
      </td>

      <td>
        Communication channel. Values: `MOBILE`, `EMAIL`, `wechat`, `whatsapp`, `ios`, `android`, `line`.
      </td>
    </tr>

    <tr>
      <td>
        * accountId*
      </td>

      <td>
        string
      </td>

      <td>
        Yes
      </td>

      <td>
        Account identifier for the given channel.
      </td>
    </tr>

    <tr>
      <td>
        * priority*
      </td>

      <td>
        enum
      </td>

      <td>
        Yes
      </td>

      <td>
        Type of message. `TRANS` for transactional/personalized messages, `BULK` for campaign or promotional messages.
      </td>
    </tr>

    <tr>
      <td>
        * type*
      </td>

      <td>
        enum
      </td>

      <td>
        Yes
      </td>

      <td>
        Subscription type. `OPTIN` to subscribe, `OPTOUT` to unsubscribe.
      </td>
    </tr>

    <tr>
      <td>
        * orgUnitId*
      </td>

      <td>
        long
      </td>

      <td>
        Yes
      </td>

      <td>
        Org unit or concept ID where the subscription should be updated.
      </td>
    </tr>

    <tr>
      <td>
        * sourceName
      </td>

      <td>
        enum
      </td>

      <td>
        Optional
      </td>

      <td>
        Source in which the identifier is registered. Values: `INSTORE`, `FACEBOOK`, `WEB_ENGAGE`, `WECHAT`, `MARTJACK`, `TMALL`, `TAOBAO`, `JD`, `ECOMMERCE`, `WEBSITE`, `LINE`, `MOBILE_APP`.
      </td>
    </tr>
  </tbody>
</Table>

## Example response

```json Sample response update subscription
{
    "scope": {
        "scope": "USER",
        "subScope": "NONE"
    },
    "subscriptions": [
        {
            "channel": "EMAIL",
            "accountId": "01",
            "priority": "BULK",
            "type": "OPTOUT",
            "orgUnitId": 200031782,
            "sourceName": "FACEBOOK"
        },
        {
            "channel": "MOBILE",
            "accountId": "01",
            "priority": "BULK",
            "type": "OPTIN",
            "orgUnitId": 200031782,
            "sourceName": "FACEBOOK"
        },
        {
            "channel": "EMAIL",
            "accountId": "01",
            "priority": "TRANS",
            "type": "OPTIN",
            "orgUnitId": 200031782,
            "sourceName": "FACEBOOK"
        },
        {
            "channel": "MOBILE",
            "accountId": "01",
            "priority": "TRANS",
            "type": "OPTOUT",
            "orgUnitId": 200031782,
            "sourceName": "FACEBOOK"
        }
    ],
    "campaignId": -1,
    "communicationId": -1,
    "reason": "This is V2 subscription api",
    "warnings": []
}
```
```json Sample response update subscription - 500 
{
    "warnings": [],
    "errors": [
        {
            "status": false,
            "message": "All requests have failed due to errors",
            "code": 500
        }
    ]
}
```

<br />

### Response Parameter

| Parameter       | Type             | Description                                                   |
| --------------- | ---------------- | ------------------------------------------------------------- |
| scope.scope     | String           | The scope of the subscription (e.g., "USER").                 |
| scope.subScope  | String           | The sub-scope of the subscription (e.g., "NONE").             |
| subscriptions   | Array of Objects | A list of subscription objects.                               |
| campaignId      | Integer          | The ID of the campaign associated with the subscription.      |
| communicationId | Integer          | The ID of the communication associated with the subscription. |
| reason          | String           | A description or reason for the response.                     |
| warnings        | Array            | A list of warnings, if any.                                   |

### Subscription Object Details:

Each object in the `subscriptions` array has the following parameters:

| Parameter  | Type    | Description                                                     |
| ---------- | ------- | --------------------------------------------------------------- |
| channel    | String  | The communication channel (e.g., "EMAIL", "MOBILE").            |
| accountId  | String  | The account ID associated with the subscription.                |
| priority   | String  | The priority level of the subscription (e.g., "BULK", "TRANS"). |
| type       | String  | The subscription type (e.g., "OPTOUT", "OPTIN").                |
| orgUnitId  | Integer | The organizational unit ID associated with the subscription.    |
| sourceName | String  | The source of the subscription (e.g., "FACEBOOK").              |

**Note:** An update to the subscription status of a customer doesn’t generate or trigger event notifications.

## API specific error code

| Error code | Description                                                    | Reason                                                                          |
| :--------- | :------------------------------------------------------------- | :------------------------------------------------------------------------------ |
| 1012       | Cannot find customer for provided mobile/external-id/e-mail/id | Mobile/Email id/External-id invalid                                             |
| 1000       | Customer Subscriptions could not be added                      | Invalid customer details or missing data                                        |
| 400        | Bad Request                                                    | The request is malformed or missing required parameters (e.g., invalid format). |
| 401        | Unauthorized                                                   | Authentication failed or the user lacks valid credentials.                      |
| 500        | Internal Server Error                                          | An unexpected server error occurred.                                            |
