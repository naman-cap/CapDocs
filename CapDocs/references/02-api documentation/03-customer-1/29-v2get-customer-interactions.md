---
title: Get Customer Interactions
excerpt: >-
  Lets you to fetch store interactions with a specific customer. This includes
  SMSs, emails, sent to the customer; missed calls received from the customer’s
  registered mobile number; and surveys submitted by the customer.
api:
  file: v2.json
  operationId: v2get-customer-interactions
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
# API endpoint example

`https://eu.api.capillarytech.com/v2/customers/interaction?identifierName=mobile&network=capillary&identifierValue=917385022695`

# Query parameters

<Table align={["left","left","left"]}>
  <thead>
    <tr>
      <th>
        Parameter
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
        identifierName
      </td>

      <td>
        enum
      </td>

      <td>
        Type of customer identifier. Accepted values are: `email`, `mobile`, and `external_id`. At least one customer identifier is required.
      </td>
    </tr>

    <tr>
      <td>
        identifierValue
      </td>

      <td>
        string
      </td>

      <td>
        Value for the identifier value.
      </td>
    </tr>

    <tr>
      <td>
        network
      </td>

      <td>
        enum
      </td>

      <td>
        Filter results by communication network. Accepted values are `facebook`, `twitter`, `foursquare`, and `capillary`.
      </td>
    </tr>

    <tr>
      <td>
        type
      </td>

      <td>
        enum
      </td>

      <td>
        Filter results by interaction type. The types of interaction are:

        * `email` : for transaction email
        * `emailbulk` : for bulk email
        * `checkin ` : applicable only for foursquare/facebook
        * `like`, `comment` - for facebook
        * `mention` , `retweet`, `tweet` - only for Twitter network
        * `feedback` : only for Capillary)
        * `whatsapp`
        * `zalo`
        * `line`
        * `viber`
      </td>
    </tr>
  </tbody>
</Table>

# Response parameters

<Note title="Note">
You can enable the OTP masking configuration and mask the OTPs. Refer to [documentation on OTP masking](https://docs.capillarytech.com/docs/setup-otp-verification-rules#masking-otps).
</Note>

<Table>
  <thead>
    <tr>
      <th>
        Parameter
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
        name
      </td>

      <td>
        String
      </td>

      <td>
        Name of the customer.
      </td>
    </tr>

    <tr>
      <td>
        interaction
      </td>

      <td>
        Array
      </td>

      <td>
        An array containing interaction details.
      </td>
    </tr>

    <tr>
      <td>
        * count
      </td>

      <td>
        Number
      </td>

      <td>
        The count of interactions.
      </td>
    </tr>

    <tr>
      <td>
        * name
      </td>

      <td>
        String
      </td>

      <td>
        The name of the interaction (e.g., "email").
      </td>
    </tr>

    <tr>
      <td>
        * messageList
      </td>

      <td>
        Array
      </td>

      <td>
        An array containing message details.
      </td>
    </tr>

    <tr>
      <td>
        \-- id
      </td>

      <td>
        Number
      </td>

      <td>
        The unique identifier for the message.
      </td>
    </tr>

    <tr>
      <td>
        \-- receiver
      </td>

      <td>
        String
      </td>

      <td>
        The email address of the message receiver.
      </td>
    </tr>

    <tr>
      <td>
        \-- subject
      </td>

      <td>
        String
      </td>

      <td>
        The subject of the email message.
      </td>
    </tr>

    <tr>
      <td>
        \-- campaignId
      </td>

      <td>
        Number
      </td>

      <td>
        The campaign identifier associated with the message.
      </td>
    </tr>

    <tr>
      <td>
        \-- status
      </td>

      <td>
        String
      </td>

      <td>
        The status of the message delivery (e.g., "NOT-DELIVERED", DELIVERED," "SOFT\_BOUNCED").
      </td>
    </tr>

    <tr>
      <td>
        \-- sentDate
      </td>

      <td>
        String
      </td>

      <td>
        The date and time when the message was sent (format: "DD-MM-YYYY HH:mm:ss").
      </td>
    </tr>

    <tr>
      <td>
        \-- deliveredTime
      </td>

      <td>
        String
      </td>

      <td>
        The date and time when the message was delivered (format: "YYYY-MM-DDTHH:mm:ssZ").
      </td>
    </tr>

    <tr>
      <td>
        \-- userId
      </td>

      <td>
        Number
      </td>

      <td>
        The unique identifier for the user associated with the message.
      </td>
    </tr>

    <tr>
      <td>
        warnings
      </td>

      <td>
        Array
      </td>

      <td>
        An array containing warning details.
      </td>
    </tr>
  </tbody>
</Table>

```json
{
    "response": {
        "status": {
            "success": "true",
            "code": 200,
            "message": "Success"
        },
        "customer": {
            "id": "565039505",
            "mobile": "919988221100",
            "email": "tom.sawyer@capillarytech.com",
            "external_id": "",
            "interactions": {
                "network": [
                    {
                        "name": "capillary",
                        "interaction": [
                            {
                                "last_interaction_time": "null",
                                "used_status": false,
                                "count": 0,
                                "type": "survey"
                            },
                            {
                                "last_interaction_time": "null",
                                "used_status": false,
                                "count": 0,
                                "type": "missed_call"
                            },
                            {
                                "last_interaction_time": "null",
                                "used_status": false,
                                "count": 0,
                                "type": "whatsapp"
                            },
                            {
                                "last_interaction_time": "null",
                                "used_status": false,
                                "count": 0,
                                "type": "zalo"
                            },
                            {
                                "last_interaction_time": "null",
                                "used_status": false,
                                "count": 0,
                                "type": "line"
                            },
                            {
                                "last_interaction_time": "null",
                                "used_status": false,
                                "count": 0,
                                "type": "phone"
                            },
                            {
                                "last_interaction_time": "null",
                                "used_status": false,
                                "count": 0,
                                "type": "sms"
                            },
                            {
                                "messages": {
                                    "message": [
                                        {
                                            "id": 1743467374476,
                                            "sender": "",
                                            "reciever": "aditi.khandelwal@capillarytech.com",
                                            "subject": "Loyalty+ Release Notes - JFM'25 (Part 1️⃣)",
                                            "status": "OPENED",
                                            "sent_time": "2025-04-14 14:23:20",
                                            "delivered_time": "2025-04-14 14:23:20",
                                            "campaign_id": "267560"
                                        },
                                        {
                                            "id": 1743467660038,
                                            "sender": "",
                                            "reciever": "aditi.khandelwal@capillarytech.com",
                                            "subject": "Loyalty+ Release Notes - JFM'25 (Part 2️⃣)",
                                            "status": "DELIVERED",
                                            "sent_time": "2025-04-16 15:32:10",
                                            "delivered_time": "2025-04-16 15:32:20",
                                            "campaign_id": "267560"
                                        }
                                    ]
                                },
                                "last_interaction_time": "null",
                                "used_status": false,
                                "count": 2,
                                "type": "email"
                            }
                        ]
                    }
                ]
            },
            "item_status": {
                "success": "true",
                "code": 1000,
                "message": "Customer successfully retrieved"
            }
        }
    }
}
```
```json Sample Response with Interaction Type as Viber
{
    "name": "capillary",
    "interaction": [
        {
            "count": 0,
            "name": "survey",
            "surveys": []
        },
        {
            "count": 0,
            "name": "line",
            "messageList": []
        },
        {
            "count": 3,
            "name": "viber",
            "messageList": [
                {
                    "id": 1746038123052,
                    "receiver": "917385022695",
                    "subject": "AAAAAAACCCCCCC",
                    "campaignId": 1241780,
                    "status": "FAILED",
                    "sentDate": "26-05-2025 15:52:02",
                    "userId": 432796209
                },
                {
                    "id": 1746038123393,
                    "receiver": "917385022695",
                    "subject": "test-hello",
                    "campaignId": 1241780,
                    "status": "FAILED",
                    "sentDate": "26-05-2025 16:17:07",
                    "userId": 432796209
                },
                {
                    "id": 1746038178479,
                    "receiver": "917385022695",
                    "subject": "Hii,This is the message in viber.",
                    "campaignId": 1242049,
                    "status": "FAILED",
                    "sentDate": "28-05-2025 13:52:07",
                    "userId": 432796209
                }
            ]
        },
        {
            "count": 0,
            "name": "email",
            "messageList": []
        },
        {
            "count": 0,
            "name": "whatsapp",
            "messageList": []
        },
        {
            "count": 0,
            "name": "missed_call",
            "usedStatus": false
        },
        {
            "count": 4,
            "name": "phone",
            "messageList": [
                {
                    "id": 1740767431623,
                    "receiver": "919988221100",
                    "subject": "Sample message Akash Vibertest",
                    "campaignId": -1,
                    "status": "GTW_NOT_FOUND",
                    "sentDate": "07-03-2025 13:48:50",
                    "userId": 432796209
                },
                {
                    "id": 1740767429676,
                    "receiver": "919988221100",
                    "subject": "Sample message Akash Vibertest",
                    "campaignId": -1,
                    "status": "GTW_NOT_FOUND",
                    "sentDate": "07-03-2025 12:57:06",
                    "userId": 432796209
                },
                {
                    "id": 1740767429770,
                    "receiver": "919988221100",
                    "subject": "Sample message Akash Vibertest",
                    "campaignId": -1,
                    "status": "GTW_NOT_FOUND",
                    "sentDate": "07-03-2025 13:01:12",
                    "userId": 432796209
                },
                {
                    "id": 1740767430545,
                    "receiver": "919988221100",
                    "subject": "Sample message Akash Vibertest",
                    "campaignId": -1,
                    "status": "GTW_NOT_FOUND",
                    "sentDate": "07-03-2025 13:37:22",
                    "userId": 432796209
                }
            ]
        },
        {
            "count": 4,
            "name": "sms",
            "messageList": [
                {
                    "id": 1740767431623,
                    "receiver": "919988221100",
                    "subject": "Sample message Akash Vibertest",
                    "campaignId": -1,
                    "status": "GTW_NOT_FOUND",
                    "sentDate": "07-03-2025 13:48:50",
                    "userId": 432796209
                },
                {
                    "id": 1740767429676,
                    "receiver": "919988221100",
                    "subject": "Sample message Akash Vibertest",
                    "campaignId": -1,
                    "status": "GTW_NOT_FOUND",
                    "sentDate": "07-03-2025 12:57:06",
                    "userId": 432796209
                },
                {
                    "id": 1740767429770,
                    "receiver": "919988221100",
                    "subject": "Sample message Akash Vibertest",
                    "campaignId": -1,
                    "status": "GTW_NOT_FOUND",
                    "sentDate": "07-03-2025 13:01:12",
                    "userId": 432796209
                },
                {
                    "id": 1740767430545,
                    "receiver": "919988221100",
                    "subject": "Sample message Akash Vibertest",
                    "campaignId": -1,
                    "status": "GTW_NOT_FOUND",
                    "sentDate": "07-03-2025 13:37:22",
                    "userId": 432796209
                }
            ]
        },
        {
            "count": 0,
            "name": "zalo",
            "messageList": []
        }
    ],
    "warnings": []
}
```

## API specific error codes

| Error Code | Description                                                    | Reason                                              |
| :--------- | :------------------------------------------------------------- | :-------------------------------------------------- |
| 1012       | Cannot find customer for provided mobile/external-id/e-mail/id | mobile/external-id/e-mail/id invalid or unsupported |