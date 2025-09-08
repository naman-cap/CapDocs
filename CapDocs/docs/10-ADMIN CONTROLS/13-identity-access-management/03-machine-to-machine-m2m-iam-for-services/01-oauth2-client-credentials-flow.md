---
title: OAuth2 Client Credentials Flow
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
This auth flow is used when the API requests are made from a program or service running on a server. This flow uses an access token to authenticate an API request. When using OAuth, the API client key and secret key or an access token are used for calling APIs, rather than the user's credentials. This enhances security by avoiding misuse of user's credentials and creates secure pathways for accessing your organization's data via Capillary APIs. 

# Creating API client key and secret

API client key and secret can be created from the Authentication page in the organization settings. Refer to documentation [Create an API client key and secret](https://docs.capillarytech.com/docs/api-client#creating-an-api-client-key-and-secret). 

# Generating access token

**Prerequisite** : API client key and secret. 

Once you get the key and secret, you can generate an access token or JWT (JSON Web Token) using the token/generate API. JWT is a compact URL and JSON-based used to transfer data securely between two parties.

<Note title="Note">
The token validity will be as per the value set for the client (Token expiry duration). If a token expires, you can regenerate it using the same API.
</Note>

## Resource endpoint

| Parameter               | Value                 |
| ----------------------- | --------------------- |
| URI                     | /oauth/token/generate |
| API version             | v3                    |
| HTTP method             | POST                  |
| Authentication Required | No                    |
| Batch Support           | No                    |

# Header

**Content-Type:** application/json

## POST request schema

```Text SAMPLE URL
https://eu.api.capillarytech.com/v3/oauth/token/generate
```

```json
{
  "key": "",
  "secret": ""
}
```

### Example:

```Text SAMPLE URL
https://eu.api.capillarytech.com/v3/oauth/token/generate
```

```curl SAMPLE REQUEST
{
  "key": "WnCygRI1Fmlf6YudKwTxQq1LI",
  "secret": "hoqSBz6VwefECaZA8Q3oNx4V4H3pMDITksarZVES"
}
```

```curl SAMPLE RESPONSE
{
    "data": {
     "accessToken": "eyJraWQiOiJrMSIsImFsZyI6IlJTMjU2In0.eyJpc3MiOiJDYXBpbGxhcnkiLCJleHAiOjE1NzUyNzAyNzAsImp0aSI6IjJaX2FqUjcwYzJABChVUjlDVTVpUlEiLCJpYXQiOjE1NzUyNjk5NzAsInN1YiI6Im5hbWVfODQzNjIwODIwMSIsImNsaWVudF9pZCI6MjEsIm9yZ19pZCI6MTExNSwidG9rZW5fdXNlIjoidG9rZW5fYWNjZXNzIn0.Ala1-XTDlPtrHFQfCtJKsXe3h_WVyq4QOGI3ZnLNJqOa-yJc1UPGbypUysWemzEaiQC_BJ0n9G68SYkVZGi4CSVOhHRNA_dILe8y1Sa90YZKwHVHogJmIKzLmksJrTbjn8s8hSMePBaaUcEdUZ1XssxdFrZhEHHN1fWVYtkdb74PB3sZ7OMDqKUysON8YTNQxLgKOJ3kq0o2QUUDQo1q3gxXFuswate6-jj3oBkcdd1ohhXkPIWZlAb_1lRcLr-ECaaBfh473gayeMVV_6khdKJ7cXrUQ3CXppkrPIzBb7rS6I93iWZw0IlmWbaGduTmPPOhLX6HZLOb84Y28st-cw",
        "ttlSeconds": 300
    },
    "errors": null
}
```

# Response

| Parameter   | Description                                                                                                  |
| :---------- | :----------------------------------------------------------------------------------------------------------- |
| accessToken | Generated access token for the given key and secret. This is unique and varies every time you make the call. |
| ttlSeconds  | The validity of the token in seconds.                                                                        |

# Using access token

Once you generate the access token, you can use it to authenticate API calls as shown below.

Set the authentication to **No Auth** and pass the following headers.

| Header                                | Value                                                                                                                                                                                                                                                                                      |
| ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **X-CAP-API-OAUTH-TOKEN\***           | Generated access token.                                                                                                                                                                                                                                                                    |
| **Content-Type\***                    | This should be set as application/json                                                                                                                                                                                                                                                     |
| **Accept\***                          | This should also be set as application/json                                                                                                                                                                                                                                                |
| **X-CAP-API-ATTRIBUTION-ENTITY-TYPE** | Till or store from which you want to post the data. Supported Values: TILL, STORE\_CODE, STORE\_NAME, STORE\_EXTERNAL\_ID, STORE\_EXTERNAL\_ID\_1, STORE\_EXTERNAL\_ID\_2. The default value is TILL.                                                                                      |
| **X-CAP-API-ATTRIBUTION-ENTITY-CODE** | Pass the entity value based on the entity type. For example, if X-CAP-API-ATTRIBUTION-ENTITY-TYPE is STORE\_CODE, then X-CAP-API-ATTRIBUTION-ENTITY-CODE is the store code that you want to tag to POST data. By default, it considers the Till associated with the client key and secret. |

# Error Handling

| Error                          | Probable cause                                                           | Recommended action                                                                                                                                                                                                                     |
| :----------------------------- | :----------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Failed to generate OAuth token | - Client key or secret invalid - Insufficient permission to access group | - Ensure the auth key and secret are correct.  - Ensure you have right permissions to the appropriate access group. To know more about access group, see [Access group](https://docs.capillarytech.com/docs/access-group#access-group) |
