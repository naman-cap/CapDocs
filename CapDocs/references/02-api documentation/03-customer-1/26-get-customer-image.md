---
title: Get Customer Image
excerpt: Lets you retrieve a customer’s profile image.
api:
  file: v2.json
  operationId: get-customer-image
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

https\://\{host}/v2/customers/\{userId}/setImage

# Query parameter

| Query Parameter | Description                                                                                                              |
| --------------- | ------------------------------------------------------------------------------------------------------------------------ |
| embed           | It specifies additional data to be embedded in the API response. In this case, it is set to include the "CUSTOMERIMAGE". |
| source\*        | It indicates the source from which the request originated. Here, the source is identified as "INSTORE".                  |

# Response parameters

| Parameter          | Description                                       |
| ------------------ | ------------------------------------------------- |
| code               | The HTTP status code of the response.             |
| file               | Contains information about the uploaded file.     |
| file.acl           | The access control level of the file.             |
| file.fileHandle    | The unique identifier for the file.               |
| file.lastModified  | The last modified date and time of the file.      |
| file.latestVersion | The latest version number of the file.            |
| file.name          | The name of the file.                             |
| file.namespace     | The namespace in which the file is stored.        |
| file.s3Token       | The S3 token for the file.                        |
| file.version       | The version number of the file.                   |
| message            | A human-readable message regarding the operation. |
| status             | The status of the operation (true/false).         |
| warnings           | Any warnings that occurred during the operation.  |
| errors             | Any errors that occurred during the operation.    |

```json
{
    "id": 565039505,
    "profiles": [
        {
            "firstName": "Tom",
            "lastName": "Sawyer",
            "attribution": {
                "createDate": "2025-02-28T06:16:17Z",
                "createdBy": {
                    "id": 75155282,
                    "code": "neeraj.doc",
                    "name": "neeraj.doc",
                    "type": "TILL",
                    "referenceId": -1,
                    "default": false
                },
                "modifiedBy": {
                    "id": 75155297,
                    "code": "tj_capillary",
                    "name": "tj_capillary",
                    "type": "TILL",
                    "referenceId": -1,
                    "default": false
                },
                "modifiedDate": "2025-04-29T09:55:34Z"
            },
            "fields": {
                "address": "Bangalore1234",
                "city_name": "Bangalore"
            },
            "allFields": {},
            "identifiers": [
                {
                    "type": "email",
                    "value": "tom.sawyer@capillarytech.com"
                },
                {
                    "type": "mobile",
                    "value": "918877665544"
                }
            ],
            "commChannels": [
                {
                    "type": "email",
                    "value": "tom.sawyer@capillarytech.com",
                    "primary": true,
                    "verified": false,
                    "meta": {
                        "residence": false,
                        "office": false
                    },
                    "attributes": {}
                },
                {
                    "type": "mobile",
                    "value": "919988112233",
                    "primary": true,
                    "verified": false,
                    "meta": {
                        "residence": false,
                        "office": false
                    },
                    "attributes": {}
                }
            ],
            "source": "INSTORE",
            "userId": 565039505,
            "accountId": "",
            "conflictingProfileList": [],
            "autoUpdateTime": "2025-04-30T06:58:25Z",
            "identifiersAll": [
                {
                    "type": "email",
                    "value": "tom.sawyer@capillarytech.com"
                },
                {
                    "type": "mobile",
                    "value": "918877221111"
                }
            ]
        }
    ],
    "loyaltyInfo": {
        "loyaltyType": "loyalty",
        "attributionV2": {
            "createDate": "2025-02-28T06:16:17Z",
            "createdBy": {
                "id": 75155282,
                "code": "neeraj.doc",
                "name": "neeraj.doc",
                "type": "TILL",
                "referenceId": -1,
                "default": false
            },
            "modifiedBy": {
                "id": 75155297,
                "code": "tj_capillary",
                "name": "tj_capillary",
                "type": "TILL",
                "referenceId": -1,
                "default": false
            },
            "modifiedDate": "2025-04-29T09:55:34Z",
            "createdFromSource": "instore"
        },
        "lifetimePurchases": 0.000
    },
    "segments": {},
    "associatedWith": "neeraj.doc",
    "customerImage": [
        {
            "code": 200,
            "file": {
                "acl": "PRIVATE",
                "fileSize": "209859",
                "fileHandle": "01a24b35-f1fa-4dc3-bbce-ab9bc5094e2c",
                "lastModified": "2025-04-30 12:25:56",
                "latestVersion": 1,
                "name": "100737/565039505/0",
                "namespace": "customerImage",
                "s3Token": "customerImage/100737/565039505/a3982817-21ca-46f6-acfa-0d1c23d1fe2e",
                "version": 1
            },
            "filePath": "https://s3-eu-west-1.amazonaws.com/fs.capillary.eu/customerImage/100737/565039505/a3982817-21ca-46f6-acfa-0d1c23d1fe2e?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCWV1LXdlc3QtMSJGMEQCICKLUTRBXx%2BTJ2wGVBDyt1aYBV3AqawRLSbNDW%2BEHtrtAiBEnCThKTWAH8Qw9Xh9miPqzbTEfAsohXda8DKXgb3uTSq6Agig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDUwMjgxMjc3OTI2NyIM2UufjIFYFCcHDhTPKo4ClmWqDNs4g2f05Phlk%2B%2B7DlflnMPP6HyqUZC9tnamJdyEwbDkaIwBetXukJMyXaHdwF96O953BNR33pL4yBP3rFmsEOHA3Q3yIIeWYMlgFpC9lL4Cffn%2FAMRMAIbm7YYPofWWEALjpYYKzKizmDvzm24GQl%2FD%2BRrgYymWDSKxQp9TCd7TP1EfdHJ8kjhqMJ5ofpYE2MOnUJfFEe%2Fwyx7QpPrmcYLgDyRGgPohcYyGJb%2B1sZEaI%2BVNvE9QwBtDcOfS%2BgEZXkKZOQcWeMY3%2Ff6XGYHwm%2FezO5MvRBdP01pthNCJhszuqlH9Z53g1UqfhBfgL0ihOfmHmlUWSWNECShIr9MuI4KadbLrIhPAZL3wMLOOx8AGOp4B8HXDLoMJwlk3Si%2F5hx5moqswH3jgo5s3t8srZwwchTHnh9du9kkF7r7OhTR4wm1RAK5bQvJ%2B%2B7vTNrbfngmu9FNkTqDao%2BDWAWHv7WhocB2ouZehTezduIfolV8GxF5RNhhJmN4G8DhYV22MCpZAc9IvpH93yJQXRC%2B0Oj6mfc9nFJft9FBq8kUhpdnAX0S4tLw2JgijOhJwOGpJIcc%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20250430T065825Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3599&X-Amz-Credential=ASIAXKEP2EMB3PGOSBW6%2F20250430%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Signature=ff24aa76c4be68bda8e5a7b0cfe5915c03e1a2e350ec5366698b7111b4616c53",
            "message": "Success",
            "secureFilePath": "https://s3-eu-west-1.amazonaws.com/fs.capillary.eu/customerImage/100737/565039505/a3982817-21ca-46f6-acfa-0d1c23d1fe2e?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCWV1LXdlc3QtMSJGMEQCICKLUTRBXx%2BTJ2wGVBDyt1aYBV3AqawRLSbNDW%2BEHtrtAiBEnCThKTWAH8Qw9Xh9miPqzbTEfAsohXda8DKXgb3uTSq6Agig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDUwMjgxMjc3OTI2NyIM2UufjIFYFCcHDhTPKo4ClmWqDNs4g2f05Phlk%2B%2B7DlflnMPP6HyqUZC9tnamJdyEwbDkaIwBetXukJMyXaHdwF96O953BNR33pL4yBP3rFmsEOHA3Q3yIIeWYMlgFpC9lL4Cffn%2FAMRMAIbm7YYPofWWEALjpYYKzKizmDvzm24GQl%2FD%2BRrgYymWDSKxQp9TCd7TP1EfdHJ8kjhqMJ5ofpYE2MOnUJfFEe%2Fwyx7QpPrmcYLgDyRGgPohcYyGJb%2B1sZEaI%2BVNvE9QwBtDcOfS%2BgEZXkKZOQcWeMY3%2Ff6XGYHwm%2FezO5MvRBdP01pthNCJhszuqlH9Z53g1UqfhBfgL0ihOfmHmlUWSWNECShIr9MuI4KadbLrIhPAZL3wMLOOx8AGOp4B8HXDLoMJwlk3Si%2F5hx5moqswH3jgo5s3t8srZwwchTHnh9du9kkF7r7OhTR4wm1RAK5bQvJ%2B%2B7vTNrbfngmu9FNkTqDao%2BDWAWHv7WhocB2ouZehTezduIfolV8GxF5RNhhJmN4G8DhYV22MCpZAc9IvpH93yJQXRC%2B0Oj6mfc9nFJft9FBq8kUhpdnAX0S4tLw2JgijOhJwOGpJIcc%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20250430T065825Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3599&X-Amz-Credential=ASIAXKEP2EMB3PGOSBW6%2F20250430%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Signature=ff24aa76c4be68bda8e5a7b0cfe5915c03e1a2e350ec5366698b7111b4616c53",
            "status": "true"
        }
    ],
    "extendedFields": {
        "gender": "Male"
    },
    "cardDetails": [],
    "warnings": []
}
```

## API specific error codes

| Error Code | Description                 | Reason                |
| :--------- | :-------------------------- | :-------------------- |
| 8016       | GET failed,No source passed | Invalid source passed |