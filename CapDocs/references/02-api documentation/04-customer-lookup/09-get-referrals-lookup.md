---
title: Get Referrals (Lookup)
excerpt: Retrieves the referee details of a customer (referral).
api:
  file: v2.json
  operationId: get-referrals-lookup
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
## Using Multiple Identifiers

When [dual eligibility](https://docs.capillarytech.com/docs/customer_entity#dual-eligibility) is enabled in your organisation, the API allows you to send multiple identifiers while fetching details. The system automatically identifies which one is the primary identifier and retrieves the details accordingly. This removes the need for you to know or specify only the primary identifier. This is beneficial in a dual eligibility–enabled scenario, as the feature allows you to register multiple users with the same secondary identifiers.\
When you submit multiple identifiers in a lookup request:

* The service checks that dual eligibility is active.
* It parses all submitted identifiers, for example `email`,`mobile`,`externalId`
* It determines which identifier is configured as the primary key.
* If one of the provided values matches the primary key, the API uses it for the lookup.
* The API returns the single customer profile associated with the primary identifier.

You can enter multiple identifiers as comma-separated values using the `identifierName` and `identifierValue` query parameters. Ensure the order of the `identifierName` matches the `identifierValue`.

**Note:** If you provide only one identifier that is not the primary identifier, the system will return an error, `8015 - Customer not found for given identifiers`.

# Endpoint Example

`https://eu.api.capillarytech.com/v2/customers/lookup/referrals?source=INSTORE&identifierName=mobile&identifierValue=919777785205&campaignToken=SL7UN`

```curl
curl --location 'https://eu.api.capillarytech.com/v2/customers/lookup/referrals?source=INSTORE&identifierName=mobile&identifierValue=919777785205&campaignToken=SL7UN' \
--header 'accept: application/json' \
--header 'Authorization: Basic c2FudC5wXzEyMzpiMmVhMGFhYWI1ZThmODg5ZTAzNGE2NjA5NTIwM2FlNw==' \
--header 'Cookie: _cfuvid=CO.TllalaHvEQ_7cFWAUCQBOWoNNXWO0HdpDTfBaBek-1751008162917-0.0.1.1-604800000'
```

# Resource Information

| URI                | v2/customers/lookup/referrals |
| :----------------- | :---------------------------- |
| HTTP method        | GET                           |
| Authentication     | Basic                         |
| Pagination support | Yes                           |
| Batch support      | NA                            |

# Query Parameter

| Parameter         | Type   | Required | Description                                     |
| :---------------- | :----- | :------- | :---------------------------------------------- |
| `source`          | string | Yes      | Source system where the referral originated     |
| `identifierName`  | string | Yes      | Type of identifier used for lookup              |
| `identifierValue` | string | Yes      | Value of the identifier to lookup               |
| `campaignToken`   | string | Yes      | Unique token identifying the referral campaign  |
| `limit`           | int    | No       | Maximum records returned per page               |
| `offset`          | int    | No       | Number of records skipped (zero-based)          |
| `total`           | int    | No       | Total records available (not just current page) |

# Response Parameter

| Parameter        | Type   | Description                                                   |
| :--------------- | :----- | :------------------------------------------------------------ |
| `customer`       | object | Customer details                                              |
| `referralCode`   | string | Unique referral code assigned to customer                     |
| `invitees`       | array  | Customers invited by this customer                            |
| `referee`        | array  | List of referee details                                       |
| `incentives`     | array  | Incentives earned via referrals                               |
| `id`             | long   | Unique customer ID                                            |
| `profiles`       | array  | Array of customer profile objects                             |
| `firstName`      | string | Customer's first name                                         |
| `lastName`       | string | Customer's last name                                          |
| `fields`         | object | Custom fields (key-value pairs)                               |
| `allFields`      | object | All available fields (including system fields)                |
| `identifiers`    | array  | Active identifiers (e.g., email, mobile)                      |
| `commChannels`   | array  | Communication channels (e.g., email, SMS)                     |
| `userId`         | long   | Unique user ID (matches customer.id)                          |
| `accountId`      | string | Account ID (for multi-account systems)                        |
| `autoUpdateTime` | string | Timestamp of last profile update (ISO 8601) YY-MM-DD-HH-MM-SS |
| `identifiersAll` | array  | All identifiers (including inactive ones)                     |
| `type`           | string | Identifier type (e.g., `"externalId"`, `"email"`, `"mobile"`) |
| `value`          | string | Identifier value (e.g., email address, phone number)          |

```json
{
    "pagination": {
        "limit": 10,
        "offset": 0,
        "total": 0
    },
    "data": [
        {
            "customer": {
                "id": 564955301,
                "profiles": [
                    {
                        "firstName": "testgrp3",
                        "lastName": "testgrpv2",
                        "fields": {},
                        "allFields": {},
                        "identifiers": [
                            {
                                "type": "externalId",
                                "value": "434547"
                            },
                            {
                                "type": "email",
                                "value": "tomswayer@gmail.com"
                            },
                            {
                                "type": "mobile",
                                "value": "919777785205"
                            }
                        ],
                        "commChannels": [],
                        "userId": 564955301,
                        "accountId": "",
                        "autoUpdateTime": "2025-06-27T07:22:10Z",
                        "identifiersAll": [
                            {
                                "type": "externalId",
                                "value": "434547"
                            },
                            {
                                "type": "email",
                                "value": "tomswayer@gmail.com"
                            },
                            {
                                "type": "mobile",
                                "value": "919777785205"
                            }
                        ]
                    }
                ]
            },
            "referralCode": "testgrp3rp5ZKo",
            "invitees": [],
            "referee": [],
            "incentives": []
        }
    ],
    "warnings": [],
    "errors": []
}
```

# Error Code

| Error Code | Description                                  | Reason                                                                                                                                      |
| :--------- | :------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------ |
| 8015       | Customer not found for the given identifiers | The identifier provided is incorrect. Also occurs when a customer does not exist and when a lookup uses a valid but non-primary identifier. |
| 8003       | Invalid source                               | Unsupported source passed                                                                                                                   |
| 8013       | Lookup,Invalid identifier passed             | Unsupported identifier value passed                                                                                                         |
| 1222       | Internal error with the referral system      | `campaigntoken` value is invalid                                                                                                            |