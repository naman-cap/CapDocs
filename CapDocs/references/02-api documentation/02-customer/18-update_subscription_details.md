---
title: Update Subscription Details
excerpt: This API allows you to update SMS/email subscription details of a customer.
api:
  file: customer-v11.json
  operationId: update-subscription-details-1
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
# API Endpoint Example

```curl Update Subscription Details
curl --location 'https://eu.api.capillarytech.com/v2/customers/565039505/subscriptions?format=json' \
--header 'accept: application/json' \
--header 'content-type: application/json' \
--header 'Authorization: Basic dGpfY2FwaWxsYXJ5OjVjMTc3MDJlOTI5NjQ4MjUzZTY3ZDJiMGM2ZTk5ZjE5' \
--header 'Cookie: _cfuvid=ELP_n3u8qC1Vt2z0yryFjifRT6N.CVONHAt3Fse0zsQ-1750659660819-0.0.1.1-604800000; _cfuvid=Xlu0xR4rWHodl7BXGQjSJ88NKmFp2TybTHNUzeYcwfs-1750676916066-0.0.1.1-604800000' \
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
      "priority": "TANS",
      "type": "OPTOUT",
      "orgUnitId": 200031782,
      "sourceName": "FACEBOOK"
    }
  ]
}
'
```

<br />

# Prerequisites

*   Basic Authentication
*   Default access group

## Resource information

| URI                   | v1.1/points/isredeemable? |
| :-------------------- | :------------------------ |
| HTTP method           | GET                       |
| Authentication        | Basic                     |
| Pagination supported? | No                        |
| Rate limit            | Yes                       |
| Batch support         | No                        |

## Request Body Parameters

| Parameter                      | Datatype | Description                                                                                                                             |
| ------------------------------ | -------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| mobile/email/external\_id/id\* | string   | Provide any of the customer identifiers to update subscription details.                                                                 |
| priority\*                     | enum     | Specify the service that you want to update. Value: `TRANS` for personalised messages, and `BULK` for campaign or promotional messages. |
| scope                          | enum     | Set the scope to 'all' always.                                                                                                          |
| channel\*                      | enum     | Pass the communication channel that you want to update. Value: `sms`, `email`.                                                          |
| is\_subscribed\*               | enum     | Specify `0` to unsubscribe, `1` to subscribe.                                                                                           |

<aside class="notice"> Parameters marked with \* are mandatory. </aside>